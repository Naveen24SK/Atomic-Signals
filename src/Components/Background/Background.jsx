import React from "react";
import { Box } from '@mui/material';
import BackImg from '../../assets/bg.svg';

const Background = ({ children }) => {
    return (
        <Box sx={{
            backgroundColor: '#EFEEFB',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${BackImg})`,
            backgroundSize: 'contain', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            {children}
        </Box>
    );
};

export default Background;
