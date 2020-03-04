import React, { Fragment, useState } from 'react';

import Header from './component/Header';
import LyricOnly from './component/LyricOnly';

import lstSongs from "./TempData";

function App() {
    const [song, setSong] = useState([]);

    const getSong = id => {
        setSong(lstSongs[id]);
    }

    return (
        <Fragment>
            <Header />            
            <LyricOnly song={song}/>
        </Fragment>
    );
}

export default App;
