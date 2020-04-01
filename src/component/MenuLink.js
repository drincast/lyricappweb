import React, { Fragment, useState } from 'react';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const MenuLink = ({functionSelection, nameMenu, options }) => {
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
    })

    return (
        <Fragment>
            <Button aria-controls={'optionMenu_' + nameMenu} aria-haspopup="true" onClick={handleClick}>
                Visualizar
            </Button>
            <Menu
                id={'optionMenu_' + nameMenu}
                anchorEl={opctionMenu}
                keepMounted
                open={Boolean(opctionMenu)}
                onClose={handleCloseOption}
            >
                <CreateOptions />
            </Menu>
        </Fragment>
        
    );
}
export default MenuLink;