import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(theme => ({
    root: {
        backgroundColor: '#555',
        color: '#eee'
    },
    
}));

//const Strophe = ({strophe, isTranslated}) => {
const Strophe = ({ strophe }) => {
    //const createParagraph = strophe.map( item => <p>{item}</p>);
    let i = 0;

    const createParagraph = strophe.map( item => <Fragment key={i++}>{item} <br/></Fragment>);
    //const createParagraph = () => {strophe.map( item => console.log('in sp', i++, item));}
    //createParagraph();
    
    const classes = useStyle();

    // const stropheType = isTranslated ?
    //     <Typography variant='body1' className={classes.root}>{createParagraph}</Typography>
    //     :
    //     <Typography variant='body1'>{createParagraph}</Typography>

    return (
        <Fragment>
            {/* {stropheType} */}
            {/* <br /> */}
            {/* <p>{createParagraph}</p> */}
            <Typography variant='body1'>{createParagraph}</Typography>
        </Fragment>
    );
}

export default Strophe;