import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';

import LyricTitle from "./LyricTitle";
import Strophe from './Strophe';

const LyricTranslate = ({ by, lyric, lyricT, title }) => {
    //TODO; see this code to do better or pass to Component
    const CreateStrophe = () => {
        let strophes = null;
        let elements = [];
        let i = 0;

        if(Object.keys(lyric).length > 0){
            const strophesId = Object.keys(lyric);
            
            strophesId.forEach(item => {
                elements.push(<Strophe key={item + '-' + i++} strophe={lyric[item]} />);
                elements.push(<Strophe key={item + 'T-' + i++} strophe={lyricT[item]} isTranslated={true}/>);                
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