/* eslint-disable no-new-object */
import React, { useEffect, useState } from 'react';
import { styled, makeStyles, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Header from './component/Header';
import LyricOnly from './component/LyricOnly';
import LyricTranslate from './component/LyricTranslate';
import MenuLink from './component/MenuLink';
import SelectOptions from './component/SelectOptions';
import StyleTheme from './component/StyleTheme';

//DATA
import DataThemes from './DataThemes.json';
import { GetSong, GetSongTranslate, GetSongs} from './TempData';
// import DataThemes from './DataThemes.json';

function App() {
    const [darckThemeSelected, setDarckThemeSelected] = useState(false);
    const [styleTheme, setStyleTheme] = useState({
        bgcolor: 'white',
        color: 'black'
    });
    useEffect(() => {
        let style = {
            bgcolor: 'white',
            color: 'black'
        }

        if(darckThemeSelected){
            style = {
                bgcolor: 'black',
                color: 'white'
            }
        }

        setStyleTheme(style);
    }, [darckThemeSelected]) 

    const [song, setSong] = useState({
        by: '',
        title: '',
        lyric: {}
    });

    const [songTranslate, setSongTranslate] = useState({
        by: '',
        title: '',
        lyric: {}
    });

    const [idSong, setIdSong] = useState('');

    const [selOpctionMenuLyric, setSelOpctionMenuLyric] = useState('Solo Lyric');

    useEffect(() => {
        const response = new Object(GetSong(idSong));
        const responseT = new Object(GetSongTranslate(idSong));

        const respSong = new Object(response.song);
        const respLyric = new Object(respSong.lyric);

        const respSongT = new Object(responseT.song);
        const respLyricT = new Object(respSongT.lyric);

        setSong({
            ...song,
            by: respSong.by,
            title: respSong.title,
            lyric: respLyric
        });

        setSongTranslate({
            ...songTranslate,
            by: respSongT.by,
            title: respSongT.title,
            lyric: respLyricT
        });

    }, [idSong, ]);

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
        },
        textCenter: {
            textAlign: 'center'
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

    return (
        // <div style={{backgroundColor: styleTheme.bgcolor, height: window.screen.height}}>            
            <Box bgcolor={styleTheme.bgcolor} color={styleTheme.color} height='100%'>                
                <Grid container spacing={0} className={classes.root}>
                    <Grid item xs={10}>
                        <Header title='LyricApp Web'/>                        
                    </Grid>
                    <Grid item xs={2}>
                        <Grid item xs={12}>                            
                            <StyleTheme changeTheme={changeTheme} setOptionChecked={setDarckThemeSelected} styleTheme={styleTheme}/>
                        </Grid>
                        <Grid item xs={12}>
                            <MenuLink functionSelection={setSelOpctionMenuLyric} 
                                    defaultSelected={0}
                                    nameMenu='Liryc'
                                    options={['Solo Lyric', 'Dos Columnas', 'Por estrofa']}
                                    styleTheme={styleTheme.bgcolor}/>
                        </Grid>
                    </Grid>                    
                </Grid>
                <Grid container justify="center" spacing={1}>
                    <Grid item xs={12} className={classes.textCenter}>
                        <SelectOptions data={DataThemes} idItem={idSong} setIdItem={setIdSong} styleTheme={styleTheme} />
                    </Grid>
                    {
                        selOpctionMenuLyric === 'Solo Lyric' || selOpctionMenuLyric === 'Dos Columnas' ?
                            <Grid item xs={selOpctionMenuLyric === 'Solo Lyric' ? 8 : 6}>
                                <LyricOnly by={song.by} lyric={song.lyric} title={song.title}/>                        
                            </Grid>
                        :
                            null
                    }

                    {
                        selOpctionMenuLyric === 'Dos Columnas' ?
                            <Grid item xs={6}>                    
                                <LyricOnly by={songTranslate.by} lyric={songTranslate.lyric} title={songTranslate.title}/>                        
                            </Grid>
                        :
                            null
                    }

                    {
                        selOpctionMenuLyric === 'Por estrofa' ?
                            <Grid item xs={7}>
                                <LyricTranslate by={song.by} lyric={song.lyric} lyricT={songTranslate.lyric} title={song.title} />
                            </Grid>
                        :
                            null
                    }
                </Grid>         
            </Box>
        // </div>
    );
}

export default App;
