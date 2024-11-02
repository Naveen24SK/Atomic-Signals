import React from 'react';
import { Box, Typography, Link, InputLabel } from '@mui/material';
import Logo from '../../assets/atomiclogo.svg';
import Background from '../../Components/Background/Background'; 
import CustomButton from '../../Components/Button/Button'; 
import CustomTextField from '../../Components/Input/Input'; 
import { textAlign } from '@mui/system';

const Forgot = () => {
  return (
    <Background>
      <Box sx={forgotBox}>
      <Box sx={logoBox}>
        <img src={Logo} alt="Atomic Signals" style={{ height: 30 }} />
      </Box>

        <Box sx={contentBox}>
        <Typography variant="h5" fontWeight="600" sx={{ marginBottom: 1 }}>
          Forgot Password
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 3 }}>
          Provide us the registered email to reset your password.
        </Typography>
        </Box>

        <Box sx={emailBox}>
          <InputLabel>Email</InputLabel>
        <CustomTextField 
          type="email" 
          required 
          defaultValue="atomicsignals@gmail.com"
        />
        </Box>

        <CustomButton 
          text="Get Link" 
          sx={buttonBox}
        />

        <Typography variant="body2" sx={linkBox}>
          Remembered the password?{' '}
          <Link href="/login" underline="always" color="textPrimary">
            Log in
          </Link>
        </Typography>
      </Box>
    </Background>
  );
};

const forgotBox ={
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bgcolor: '#FFFFFF',
  padding: 3,
  borderRadius: '12px',
  boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
};

const logoBox = {
  mb: 0,
  display:'flex',
  alignItems:'flex-start',
  width:'100%'
};

const contentBox = {
  color: '#71707E',
  fontSize: '12px',
  textAlign:'justify',
  mt:4
};

const emailBox = {
  mt: 1,
  display:'flex',
  alignItems:'flex-start',
  flexDirection:'column',
  width:'100%',
  fontSize:'12px',
  color:'#484759',
  gap:1
};

const buttonBox ={
   marginTop: 2,
   backgroundColor: '#49C792'
};

const linkBox = {
  marginTop: 4 
}


export default Forgot;
