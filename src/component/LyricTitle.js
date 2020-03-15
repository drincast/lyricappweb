import React, { Fragment } from 'react';
import Typography from "@material-ui/core/Typography";

const LyricTitle = ({ by, title }) => {
    return (
        <Fragment>
            <Typography variant='h4' align='center'>{title}</Typography>
            <Typography variant='h6' align='center'>{by}</Typography>
        </Fragment>
    );
}

export default LyricTitle;