import React, { Fragment, useState } from 'react';

import Header from './component/Header';
import LyricOnly from './component/LyricOnly';

import GetSongs from "./TempData";

function App() {
    const [song, setSong] = useState([]);

    const getSong = id => {
        const lstSongs = GetSongs();
        console.log(lstSongs);
        setSong(lstSongs[0]);
        console.log(song);
    }

    return (
        <Fragment>
            <Header />
            <button onClick={getSong}>song</button>
            <LyricOnly song={song}/>
        </Fragment>
    );
}

export default App;
