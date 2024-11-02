import React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';
import Logo from '../../assets/atomiclogo.svg';
import GoogleIcon from '../../assets/googleicon.svg';
import OutlookIcon from '../../assets/outlookicon.svg';
import BackImg from '../../assets/bg.svg';
import CustomButton from '../../Components/Button/Button'; 
import CustomTextField from '../../Components/Input/Input'; 
import './SignUp.jsx';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  // Define handleSignup as a function
  const handleSignup = () => {
    navigate("/team");
  };


  return (
    <Box sx={mainBox}>
      <Box sx={centeredBox}>
        <Box sx={signupBox}>
          <Box sx={logoBox}>
            <img src={Logo} alt="Atomic Signals" style={{ height: 30 }} />
          </Box>
          <Box sx={textBox}>
            <Typography variant="h5" fontWeight="bold" mb={1}>
              Sign up
            </Typography>
            <Typography variant="body2" sx={contentBox} mb={2}>
              You’re just a few details away to set up a culture of feedback and thriving environment
            </Typography>
          </Box>

          <CustomButton
            text="Sign up with Google"
            startIcon={<img src={GoogleIcon} alt='google-icon' style={{ height: 15 }} />}
            variant="google"
            sx={{ mb: 1.5 }}
          />

          <CustomButton
            text="Sign up with Outlook"
            startIcon={<img src={OutlookIcon} alt='outlook-icon' style={{ height: 15 }} />}
            variant="outlook"
            sx={{ mb: 1.5 }}
          />

          <Box sx={dividerBox}>
            <Divider>or</Divider>
          </Box>
        
          <Box sx={emailBox}>
            <Typography>Work Email<span style={{ color: 'red' }}> *</span></Typography>
            <CustomTextField type="email" required />
          </Box>

          {/* Add onClick to call handleSignup */}
          <CustomButton text="Sign up" variant="contained" onClick={handleSignup} />

          <Box sx={footerBox}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Link href="/login" underline="always" color="textPrimary">
                Log in
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

// Styles for each Box component
const mainBox = {
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
};

const centeredBox = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const signupBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  bgcolor: '#FFFFFF',
  padding: 3,
  borderRadius: '12px',
  height: '50%',
  width: '74%',
  boxShadow: '0px 4px 20px rgba(0,0,0,0.1)'
};

const logoBox = {
  mb: 0,
  display:'flex',
  alignItems:'flex-start',
  width:'100%'
};

const textBox = {
  textAlign: 'justify',
  mt: 3,
  mb:2
};

const contentBox = {
  color: '#71707E',
  fontSize: '12px',
  width: '80%'
};

const dividerBox = {
  width: '70%',
  color:'#71707E',
  fontSize:'12px',
  mt: 2,
  mb: 2
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

const footerBox = {
  mt: 3,
  display: 'flex',
  alignItems: 'center',
  color:'#71707E',
  fontSize:'14px'
};

export default Signup;
