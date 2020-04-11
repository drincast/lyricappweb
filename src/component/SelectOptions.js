import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

const SelectOptions = ({data, idItem, setIdItem, setLoadOption, styleTheme}) => {
    const getLstSongs = () => {
        if(data.length > 0){
            const items = data.map(item => {
                return <MenuItem value={item.id} key={item.id}>{item.title}</MenuItem>
            });

            return items;
        }

        return null;
    }

    const handleSelect = e => {
        setLoadOption(true);

        setTimeout(() => {
            setLoadOption(false)
            setIdItem(e.target.value);            
        }, 1500);
    }

    const useStyle = makeStyles({
        formControl: {
            margin: 10,
            minWidth: 180,
            '& .MuiInput-underline:before': {
                borderBottomColor: styleTheme.bgcolor === 'white' ? 'black' : 'white',
            },
        },
        inputLabel:{
            color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
        }
    });

    const StlSelect = withStyles({
        root: {
        },
        select: {
            color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
            border: 2,
            borderColor: 'white',
        },
        icon: {
            color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
        },
    })(Select);

    const classes = useStyle();

    return (
        <Tooltip title="Seleccionar Canción" placement="top">
            <FormControl className={classes.formControl}>
                <InputLabel id="labelSelectLyric" className={classes.inputLabel}>Seleciona la canción</InputLabel>                {/* <StlInputLabel id="labelSelectLyric">Seleciona la canción</StlInputLabel> */}
                <StlSelect id='Song'
                    labelId="labelSelectLyric"
                    value={idItem}
                    onChange={handleSelect}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {getLstSongs()}
                </StlSelect>
            </FormControl>
        </Tooltip>
    );
}

SelectOptions.prototype = {
    data: PropTypes.array.isRequired, 
    idItem: PropTypes.string.isRequired, 
    setIdItem: PropTypes.func.isRequired, 
    styleTheme: PropTypes.object.isRequired
}

export default SelectOptions;