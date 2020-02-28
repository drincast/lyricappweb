import React from 'react';
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/core/styles";

const StlTypography = styled(({ ...other }) => <Typography { ...other } /> )({
    fontSize: '4em',
    fontWeight: '500',
    letterSpacing: 0
});

const Header = () => {
    return (
        <StlTypography variant='h1' align='center'>LyricApp Web</StlTypography>
    );
}

export default Header;