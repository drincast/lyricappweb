import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

const Strophe = ({ strophe }) => {
    let i = 0;

    const createParagraph = strophe.map( item => <Fragment key={i++}>{item} <br/></Fragment>);

    return (
        <Fragment>
            <Typography variant='body1'>{createParagraph}</Typography>
            <br />
        </Fragment>
    );
}

Strophe.prototype = {
    strophe: PropTypes.array.isRequired
}

export default Strophe;