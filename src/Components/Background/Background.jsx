import React from "react";
import {Box} from '@mui/material';
import BackImg from '../../assets/bg.svg';


const Background =()=> {
    return (
        <Box sx={{
            backgroundColor: '#EFEEFB',
            height: '100vh',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: `url(${BackImg})`,
            backgroundSize: 'contain', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <Box sx={{  
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
                }}>
            </Box>
        </Box>
    );
};

export default Background;