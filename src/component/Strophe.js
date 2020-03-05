import React, { Fragment } from 'react';

const Strophe = ({strophe}) => {
    //const createParagraph = strophe.map( item => <p>{item}</p>);
    let i = 0;

    const createParagraph = strophe.map( item => <Fragment key={i++}>{item} <br/></Fragment>);

    return (
        <Fragment>
            <p>{createParagraph}</p>
        </Fragment>
    );
}

export default Strophe;