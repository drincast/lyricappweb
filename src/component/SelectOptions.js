import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

const SelectOptions = ({data, idItem, setIdItem, styleTheme}) => {
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
        setIdItem(e.target.value);
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
export default SelectOptions;