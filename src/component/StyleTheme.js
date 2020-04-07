import React, { Fragment, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';

const StyleTheme = ({ setOptionChecked }) => {
    const [check, setCheck] = useState(false);

    const handleChange = e =>{
        const checked = e.target.checked;

        setCheck(checked);
        setOptionChecked(checked);
    }

    const StlSwitchDM = withStyles({
        switchBase:{
            color: 'black',
            '&$checked': {
                color: 'white'
            },
            '&$checked + $track': {
                backgroundColor: 'white'
            },
        },
        checked: {},
        track: {},
    })(Switch);

    return (
        <Fragment>
            <Tooltip title='Darck Mode' placement='bottom'>
                <StlSwitchDM checked={check}
                                onChange={handleChange}
                                value="themeDrackMode"
                                id="themeDrackMode"
                                name="themeDrackMode"
                                color="primary"
                                inputProps={{ 'aria-label': 'black checkbox' }} />                
            </Tooltip>
        </Fragment>
    );
}

export default StyleTheme;