import React from 'react';
import { styled, makeStyles, withStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';

const useStyleGrid = makeStyles({
    formControl: {
        margin: 10,
        minWidth: 180,            
    },
});

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

    const StlSelect = withStyles({
        root: {
            underline: {
                color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
                backgroundColor: styleTheme.bgcolor === 'white' ? 'black' : 'white',
                after: { borderColor: styleTheme.bgcolor === 'white' ? 'black' : 'white', },
                borderColor: styleTheme.bgcolor === 'white' ? 'black' : 'white',
                '&:after': {
                    underline: { borderColor: styleTheme.bgcolor === 'white' ? 'black' : 'white', }
                },
            },
    
        },
        select: {
            color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
            border: 2,
            borderColor: 'white',
            '&:after': {
                underline: { borderColor: styleTheme.bgcolor === 'white' ? 'black' : 'white', },
            },
        },
        icon: {
            color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
        },
    })(Select);

    const classes = useStyleGrid();

    return (
        <Tooltip title="Seleccionar Canción" placement="top">
            <FormControl className={classes.formControl}>
                <InputLabel id="labelSelectLyric">Seleciona la canción</InputLabel>
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