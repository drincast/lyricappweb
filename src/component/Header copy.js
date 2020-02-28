import React from 'react';

//[1]
import { makeStyles } from "@material-ui/core/styles";

//[2]
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';

//[3]
import { styled } from "@material-ui/core/styles";

//[1]
// const useMUIStyles = makeStyles(theme => ({
//     root: {
//         ...theme.typography.button,
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(1),
//     },
// }));

// const Header = () => {
//     const classes = useMUIStyles();

//     return (
//         <div>
//             <div className={classes.root}>LyricApp Web</div>            
//         </div>
//     );
// }

//[2]
// const Header = () => {
//     return (
//         <div>
//             <Typography variant="h3" component="h1">LyricApp Web</Typography>            
//         </div>
//     );
// }

//[3]
const StlTypography = styled(({ color, ...other }) => <Typography { ...other } /> )({
    color: props => props.color === 'blue' ? 'red' : '#55AA77',
    fontSize: '4em'
});

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
    background: props =>
      props.color === 'red'
        ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
        : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: props =>
      props.color === 'red'
        ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
        : '0 3px 5px 2px rgba(33, 203, 243, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: 8,
  });

const Header = () => {
    return (
        <div>
            <StlTypography variant='h1' color='red'>LyricApp Web</StlTypography>
            <MyButton color="red">Red</MyButton>
            <MyButton color="blue">Blue</MyButton>
        </div>
    );
}

export default Header;