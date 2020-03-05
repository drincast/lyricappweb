import React, { Fragment } from 'react';
import Strophe from './Strophe';

const LyricOnly = ({song}) => {
    let i = 0;
    const createStrophe = song.map( item => <Strophe key={i++} strophe={item} /> );

    return (
        <Fragment>
            {createStrophe}
        </Fragment>
    );
}

export default LyricOnly;