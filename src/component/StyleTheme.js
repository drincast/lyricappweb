import React, { Fragment, useState } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';

const StyleTheme = ({ changeTheme }) => {
    const [checkDarkMode, setCheckDarkMode] = useState(false);

    const handleChange = e =>{
        const checked = e.target.checked;

        console.log(checked);

        let style = {
            bgcolor: 'white',
            color: 'black'
        }

        if(checked){
            style = {
                bgcolor: 'black',
                color: 'white'
            }
        }

        setCheckDarkMode(checked);
        changeTheme(style);
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
                <StlSwitchDM checked={checkDarkMode}
                                onChange={handleChange}
                                value="themeDrackMode"
                                id="themeDrackMode"
                                name="themeDrackMode"
                                color="primary"
                                inputProps={{ 'aria-label': 'black checkbox' }} />
                {/* <FormControlLabel
                    control={<StlSwitchDM checked={checkDarkMode}
                                onChange={handleChange}
                                value="themeDrackMode"
                                id="themeDrackMode"
                                name="themeDrackMode"
                                color="primary"
                                inputProps={{ 'aria-label': 'black checkbox' }} />}
                    label='Darck mode'
                    labelPlacement='top'>
                </FormControlLabel> */}
            </Tooltip>
        </Fragment>
    );
}

export default StyleTheme;