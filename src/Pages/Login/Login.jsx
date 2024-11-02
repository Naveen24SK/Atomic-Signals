import React from "react";
import CustomButton from "../../Components/Button/Button";
import CustomTextField from "../../Components/Input/Input";
import { Box, Typography, Link, InputLabel } from "@mui/material";
import Logo from "../../assets/atomiclogo.svg";
import Background from "../../Components/Background/Background";
import { display, flexbox, padding, textAlign, width } from "@mui/system";

const Login = () => {
    return (
        <Background>
            <Box sx={loginBox}>
                <Box sx={logoBox}>
                    <img src={Logo} alt="Atomic Signals" style={{ height: 30 }} />
                </Box>
                <Box sx={textBox}>
                    <Typography variant="h5" fontWeight="bold" mb={1}>
                        Welcome!
                    </Typography>
                    <Typography variant="body2" sx={contentBox} mb={2}>
                    One positive feedback per day or week can make us grow exponentially                    </Typography>
                </Box>
                <Box sx={textField}>
                <InputLabel required>Email</InputLabel>
                <CustomTextField 
                    required 
                />
                </Box>
                <Box sx={textField}>
                <InputLabel required>Password</InputLabel>
                <CustomTextField 
                    type="password" 
                    isPassword={true} 
                    required 
                />
                </Box>
            <Box sx={linkBox}>
            <Typography variant="body2">
              <Link href="/forgot" underline="always" color="textPrimary">
                Forgot Password?
              </Link>
            </Typography>
          </Box>
                <CustomButton text="Log in" variant="contained" />
            </Box>
        </Background>
    );
};

const loginBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
    width: '400px',
    maxWidth: '90%',
};

const logoBox = {
    mb: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
};

const textBox = {
    textAlign: 'left',
    mt: 2,
    mb: 3,
};

const contentBox = {
    color: '#71707E',
    fontSize: '14px',
    width: '100%',
};

const textField ={
    display:'flex',
    flexDirection:'column',
    width:'100%',
};

const linkBox = {
    display: 'flex',
    justifyContent:'flex-end',
    padding: 1,
    width:'100%',
}


export default Login;
