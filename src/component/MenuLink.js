import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import StyleThemeApp from './StyleThemeApp'

const MenuLink = ({ functionSelection, nameMenu, options, styleTheme }) => {
    const [opctionMenu, setOpctionMenu] = useState(null);    

    const handleClick = (event) => {
        setOpctionMenu(event.currentTarget);        
    };

    const handleCloseOption = (event) => {
        setOpctionMenu(null);
        functionSelection(event.currentTarget.textContent);
    };

    const CreateOptions = React.forwardRef(() => {
        let i=0;

        return options.map((item) => {
            return <MenuItem key={i++}
                onClick={handleCloseOption}>{item}</MenuItem>
        })
    });

    const styleCss = styleTheme === 'white' ?
                        StyleThemeApp().root
                        :
                        StyleThemeApp().rootBlack;
                        
    return (
        <Fragment>
            <Button className={styleCss} aria-controls={'optionMenu_' + nameMenu} aria-haspopup="true" onClick={handleClick}>
                Visualizar
            </Button>
            <Menu
                anchorEl={opctionMenu}                
                id={'optionMenu_' + nameMenu}
                keepMounted
                open={Boolean(opctionMenu)}
                onClose={handleCloseOption}
            >
                <CreateOptions />
            </Menu>
        </Fragment>
        
    );
}

MenuLink.prototype = {
    functionSelection: PropTypes.func.isRequired, 
    nameMenu: PropTypes.string.isRequired, 
    options: PropTypes.array.isRequired,
    styleTheme: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default MenuLink;