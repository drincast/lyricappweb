import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

import Header from './component/Header';
import LyricOnly from './component/LyricOnly';
import StyleTheme from './component/StyleTheme';

import GetSongs from "./TempData";

const StlMuiContainerPpal = withStyles({
    root:{        
        backgroundColor: '#000',
        color: 'white'
    },
})(Container);

function App() {
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
        })
    }

    const getSong = async id => {
        const lstSongs = GetSongs();        
        await setSong(lstSongs[0]);
        console.log(song);
    }

    return (
        <Box bgcolor={styleTheme.bgcolor} color={styleTheme.color}>
            <Header />
            <StyleTheme changeTheme={changeTheme} />
            <button onClick={getSong}>song</button>
            <LyricOnly by={song.by} lyric={song.lyric} title={song.title}/>
        </Box   >
    );
}

export default App;
