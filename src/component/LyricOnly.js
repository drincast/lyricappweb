import React, { Fragment, useState } from 'react';
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';

import LyricTitle from "./LyricTitle";
import Strophe from './Strophe';

const LyricOnly = ({ by, lyric, title }) => {
    let i = 0;    
    // const createStrophe = lyric.map( item => <Strophe key={i++} strophe={item} /> );    
    //const createStrophe = lyric.length ? lyric.map( item => <Strophe key={i++} strophe={item} /> ) : null;

    const [lstStrophes, setLstStrophes] = useState([]); //useState

    //TODO; see this code to do better or pass to Component
    const CreateStrophe = () => {
        let strophes = null;

        if(Object.keys(lyric).length > 0){
            const strophesId = Object.keys(lyric);
            //console.log(strophe);
            const elements = strophesId.map(item => {
                let i = 0;
                //console.log('lyric[item]', lyric[item]);
                return <Strophe key={item + '-' + i++} strophe={lyric[item]} />                
            });

            strophes = elements;
        }

        return (<Fragment>{strophes}</Fragment>);
    }

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

    //createStrophe();

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
            {/* {createStrophe} */}
            <CreateStrophe />
        </Container>
        
    );
}

export default LyricOnly;