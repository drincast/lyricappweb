import React from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import LyricTitle from "./LyricTitle";
import Strophe from './Strophe';

const LyricOnly = ({ by, lyric, title }) => {
    let i = 0;    
    const createStrophe = lyric.map( item => <Strophe key={i++} strophe={item} /> );
    
    console.log(by, lyric, title);

    const darkTheme01 = createMuiTheme({
        palette: {
          type: 'light',
          background: {
              default: '#000',
              container: '#000',
          }
        },
    });

    const StlMuiContainer = withStyles({
        root:{
            background: '#000'
        },
    })(Container);

    return (
        // <ThemeProvider theme={darkTheme} >
        // <ThemeProvider theme={darkTheme01}>
        //     <StlMuiContainer maxWidth='md'>
        //         <Paper>
        //             <LyricTitle title={title} by={by} />
        //             {createStrophe}                    
        //         </Paper>
        //     </StlMuiContainer>
        // </ThemeProvider>

        
            <Container>
                <LyricTitle title={title} by={by} />
                    {createStrophe}
            </Container>
        
    );
}

export default LyricOnly;