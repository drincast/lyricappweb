/* eslint-disable no-new-object */
import React, { useEffect, useState } from 'react';
import { styled, makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Header from './component/Header';
import LyricOnly from './component/LyricOnly';
import StyleTheme from './component/StyleTheme';

import { GetSong, GetSongs} from './TempData';
import DataThemes from './DataThemes.json';

function App() {
    const [styleTheme, setStyleTheme] = useState({
        bgcolor: 'white',
        color: 'black'
    });

    const [song, setSong] = useState({
        by: '',
        title: '',
        lyric: {}
    });

    const [idSong, setIdSong] = useState('');

    useEffect(() => {
        const response = new Object(GetSong(idSong));
        const respSong = new Object(response.song);
        const respLyric = new Object(respSong.lyric);

        setSong({
            ...song,
            by: respSong.by,
            title: respSong.title,
            lyric: respLyric
        });

    }, [idSong, ]);

    //Styles
    const StlSelect = withStyles({
        root: {
            underline: {
                color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
                backgroundColor: styleTheme.bgcolor === 'white' ? 'black' : 'white',
                after: {borderColor: styleTheme.bgcolor === 'white' ? 'black' : 'white',},
                borderColor: styleTheme.bgcolor === 'white' ? 'black' : 'white',
                '&:after': {
                    underline: {borderColor: styleTheme.bgcolor === 'white' ? 'black' : 'white',}
                },
            },
        },
        select:{
            color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
            border: 2,
            borderColor: 'white',
            '&:after':{
                underline: {borderColor: styleTheme.bgcolor === 'white' ? 'black' : 'white',},
            } 
                        
        },
        icon: {
            color: styleTheme.bgcolor === 'white' ? 'black' : 'white',
        },
        
    })(Select);

    const StlGridHead = withStyles({
        root: {
            paddingBottom: '32px'
        }
    })(Grid);

    const StlGridHead2 = styled(Grid)({
        paddingBottom: '32px'
    });

    const useStyleGrid = makeStyles({
        root: {
            paddingBottom: '32px'
        }
    });
    const classes = useStyleGrid();

    const changeTheme = theme => {
        //console.log('theme', theme);
        setStyleTheme({
            ...styleTheme,
            bgcolor: theme.bgcolor,
            color: theme.color
        });

        document.getElementById('root').style.backgroundColor = theme.bgcolor;
    }

    const getSong = async id => {
        const lstSongs = GetSongs();        
        await setSong(lstSongs[0]);
        //console.log(song);
    }

    const handleSelect = e => {
        setIdSong(e.target.value);
    }

    const getLstSongs = () => {
        if(DataThemes.length > 0){
            const items = DataThemes.map(item => {
                return <MenuItem value={item.id} key={item.id}>{item.title}</MenuItem>
            });

            return items;
        }

        return null;
    }

    return (
        // <div style={{backgroundColor: styleTheme.bgcolor, height: window.screen.height}}>            
            <Box bgcolor={styleTheme.bgcolor} color={styleTheme.color} height='100%'>
                
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={10}>
                        <Header />                        
                    </Grid>
                    <Grid item xs={2}>
                        <StyleTheme changeTheme={changeTheme} />                        
                    </Grid>
                </Grid>
                <Grid container justify="center" spacing={1}>
                    <Grid item xs={7}>                    
                        <LyricOnly by={song.by} lyric={song.lyric} title={song.title}/>                        
                    </Grid>
                    <Grid item xs={5}>
                        <StlSelect id='Song'
                            value={idSong}
                            onChange={handleSelect}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {getLstSongs()}
                        </StlSelect>
                        <button onClick={getSong}>song</button>
                    </Grid>
                </Grid>         
            </Box>
        // </div>
    );
}

export default App;
