import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import LyricTitle from "./LyricTitle";
import Strophe from './Strophe';

const LyricOnly = ({ by, lyric, title }) => {
    //TODO; see this code to do better or pass to Component
    const CreateLyric = () => {
        let strophes = null;

        if(Object.keys(lyric).length > 0){
            const strophesId = Object.keys(lyric);

            const elements = strophesId.map(item => {
                let i = 0;

                return (<Strophe key={item + '-' + i++} strophe={lyric[item]} />)
            });

            strophes = elements;
        }

        return (<Fragment>{strophes}</Fragment>);
    }

    return (
        <Grid container justify='center' spacing={1} style={{marginLeft: '5px'}}>
            <Grid item xs={12}>
                <LyricTitle title={title} by={by} />
            </Grid>
            <Grid item xs={12}>
                <CreateLyric />
            </Grid>
        </Grid>
    );
}

LyricOnly.prototype = {
    by: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lyric:  PropTypes.array.isRequired
}

export default LyricOnly;