import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Header from './component/Header';
import LyricOnly from './component/LyricOnly';
import StyleTheme from './component/StyleTheme';

import GetSongs from './TempData';
import DataThemes from './DataThemes.json';
import DataLyrics from './DataLyrics.json';

const StlMuiContainerPpal = withStyles({
    root:{        
        backgroundColor: '#000',
        color: 'white'
    },
})(Container);

function App() {
    

    console.log(Object.keys(DataThemes));

    const [styleTheme, setStyleTheme] = useState({
        bgcolor: 'white',
        color: 'black'
    });

    const [song, setSong] = useState({
        by: '',
        title: '',
        lyric: []
    });

    const changeTheme = theme => {
        console.log('theme', theme);
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
        console.log(song);
    }

    console.log(window.screen.height);

    return (
        <div style={{backgroundColor: styleTheme.bgcolor, height: window.screen.height}}>
            <Box bgcolor={styleTheme.bgcolor} color={styleTheme.color} height='100%'>
                <Header />
                <StyleTheme changeTheme={changeTheme} />
                <Select>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='1'>Ten</MenuItem>
                    <MenuItem value='2'>Twenty</MenuItem>
                    <MenuItem value='3'>Thirty</MenuItem>
                </Select>
                <button onClick={getSong}>song</button>
                <LyricOnly by={song.by} lyric={song.lyric} title={song.title}/>
            </Box>
        </div>
    );
}

export default App;
