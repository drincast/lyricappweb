import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';

import LyricTitle from "./LyricTitle";
import Strophe from './Strophe';

const LyricOnly = ({ by, lyric, title }) => {
    // const createStrophe = lyric.map( item => <Strophe key={i++} strophe={item} /> );    
    //const createStrophe = lyric.length ? lyric.map( item => <Strophe key={i++} strophe={item} /> ) : null;

    //TODO; see this code to do better or pass to Component
    const CreateStrophe = () => {
        let strophes = null;

        if(Object.keys(lyric).length > 0){
            const strophesId = Object.keys(lyric);
            //console.log(strophe);
            const elements = strophesId.map(item => {
                let i = 0;
                //console.log('lyric[item]', lyric[item]);
                return <Strophe key={item + '-' + i++} strophe={lyric[item]} />                
            });

            strophes = elements;
        }

        return (<Fragment>{strophes}</Fragment>);
    }

    return (
        <Container>
            <LyricTitle title={title} by={by} />
            {/* {createStrophe} */}
            <CreateStrophe />
        </Container>        
    );
}

export default LyricOnly;