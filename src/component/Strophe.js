import React, { Fragment } from 'react';
import Typography from "@material-ui/core/Typography";

const Strophe = ({strophe}) => {
    //const createParagraph = strophe.map( item => <p>{item}</p>);
    let i = 0;

    const createParagraph = strophe.map( item => <Fragment key={i++}>{item} <br/></Fragment>);
    //const createParagraph = () => {strophe.map( item => console.log('in sp', i++, item));}
    //createParagraph();
    return (
        <Fragment>
            <Typography variant='body1'>{createParagraph}</Typography>
            <br />
            {/* <p>{createParagraph}</p> */}
        </Fragment>
    );
}

export default Strophe;