import React, { useState } from 'react';
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

    const CreateStrophe = () => {
        let ele;

        if(Object.keys(lyric).length > 0){
            const strophes = Object.keys(lyric);
            //console.log(strophe);
            const elements = strophes.map(item => {
                let i = 0;
                console.log('lyric[item]', lyric[item]);
                return <Strophe key={item + '-' + i++} strophe={lyric[item]} />
                //return <div>zzz</div>
                // console.log(item + '-' + i++, lyric[item]);
                // let sp = {desc: item + '-' + i++, 
                //             sp: lyric[item]}

                // console.log('elements in', elements)
                // return sp;
            });

            ele = elements;

            // console.log('element', elements);
            //return elements;
        }

        return (<div>{ele}</div>);
    }

    const Ele = () => {
        return (
            <div>hola</div> 
        )
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
            <Ele />
            {/* {createStrophe} */}
            <CreateStrophe />
        </Container>
        
    );
}

export default LyricOnly;