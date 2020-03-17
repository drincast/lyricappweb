import React, { Fragment } from 'react';
import Typography from "@material-ui/core/Typography";

import './LyricTitle.css';

const LyricTitle = ({ by, title }) => {
    return (
        <div className='divContainerLyricTitle'>
            <Typography variant='h4' align='center'>{title}</Typography>
            <Typography variant='h6' align='center'>{by}</Typography>
        </div>
    );
}

export default LyricTitle;