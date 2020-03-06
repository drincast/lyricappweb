import React, { Fragment, useState } from 'react';

import Header from './component/Header';
import LyricOnly from './component/LyricOnly';

import GetSongs from "./TempData";

function App() {
    const [song, setSong] = useState({
        by: '',
        title: '',
        lyric: []
    });

    const getSong = async id => {
        const lstSongs = GetSongs();        
        await setSong(lstSongs[0]);
        console.log(song);
    }

    return (
        <Fragment>
            <Header />
            <button onClick={getSong}>song</button>
            <LyricOnly by={song.by} lyric={song.lyric} title={song.title}/>
        </Fragment>
    );
}

export default App;
