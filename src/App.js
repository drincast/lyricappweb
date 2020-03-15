import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Header from './component/Header';
import LyricOnly from './component/LyricOnly';
import StyleTheme from './component/StyleTheme';

import { GetSong, GetSongs} from './TempData';
import DataThemes from './DataThemes.json';

const StlMuiContainerPpal = withStyles({
    root:{        
        backgroundColor: '#000',
        color: 'white'
    },
})(Container);

const useStyles = makeStyles(theme => ({
    selectEmpy:{
        marginTop: theme.spacing(2)
    }
}))

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
        const respLyric = new Object(respSong.lyric)
        // console.log(response, typeof(response), response.song);
        // console.log(respSong);
        setSong({
            ...song,
            by: respSong.by,
            title: respSong.title,
            lyric: respLyric
        });
        //console.log('reponse', song);
    }, [idSong]);

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
        <div style={{backgroundColor: styleTheme.bgcolor, height: window.screen.height}}>
            <Box bgcolor={styleTheme.bgcolor} color={styleTheme.color} height='100%'>
                <Header />
                <StyleTheme changeTheme={changeTheme} />
                <Select id='Song'
                    value={idSong}
                    onChange={handleSelect}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {getLstSongs()}
                </Select>
                <button onClick={getSong}>song</button>
                <LyricOnly by={song.by} lyric={song.lyric} title={song.title}/>
            </Box>
        </div>
    );
}

export default App;
