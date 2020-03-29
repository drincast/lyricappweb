import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import LyricTitle from "./LyricTitle";
import Strophe from './Strophe';

const useStyles = makeStyles( theme => ({
        paper: {
            boxShadow: '-5px 5px 6px 0px rgba(0,0,0,0.5), 0px 2px 1px 0px rgba(0,0,0,0.5), 0px 1px 3px 0px rgba(0,0,0,0.5);',
            marginBottom: '1em',
            padding: '1em'
        },
        paperTaductor: {
            backgroundColor: '#555',
            boxShadow: '-5px 5px 6px 0px rgba(0,0,0,0.5), 0px 2px 1px 0px rgba(0,0,0,0.5), 0px 1px 3px 0px rgba(0,0,0,0.5);',
            color: '#eee',
            marginBottom: '1em',
            padding: '1em'
        }
    })
);

const LyricTranslate = ({ by, lyric, lyricT, title }) => {
    const classes = useStyles();

    //TODO; see this code to do better or pass to Component
    const CreateStrophe = () => {
        let strophes = null;
        let elements = [];
        let i = 0;

        if(Object.keys(lyric).length > 0){
            const strophesId = Object.keys(lyric);
            
            strophesId.forEach(item => {
                elements.push(
                    <Paper className={classes.paper} key={item + 'P-' + i++}>
                        <Strophe key={item + '-' + i++} strophe={lyric[item]} />
                    </Paper>
                );
                elements.push(
                    <Paper className={classes.paperTaductor} key={item + 'TP-' + i++}>
                        <Strophe key={item + 'T-' + i++} strophe={lyricT[item]} isTranslated={true}/>
                    </Paper>
                );
            });

            strophes = elements;
        }

        return (<Fragment>{strophes}</Fragment>);
    }

    return (
        <Container>
            <LyricTitle title={title} by={by} />
            <CreateStrophe />
        </Container>
    );
}
export default LyricTranslate;