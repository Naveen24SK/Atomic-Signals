import React from "react";
import CustomButton from "../../Components/Button/Button";
import CustomTextField from "../../Components/Input/Input";
import { Box, InputLabel, Typography } from "@mui/material";
import Logo from "../../assets/atomiclogo.svg";
import Background from "../../Components/Background/Background";
import { display, textAlign, width } from "@mui/system";

const Reset = () => {
    return (
        <Background>
            <Box sx={loginBox}>
                <Box sx={logoBox}>
                    <img src={Logo} alt="Atomic Signals" style={{ height: 30 }} />
                </Box>
                <Box sx={textBox}>
                    <Typography variant="h5" fontWeight="bold" mb={1}>
                        Reset Password
                    </Typography>
                    <Typography variant="body2" sx={contentBox} mb={2}>
                        Please provide a new password for your account
                    </Typography>
                </Box>
                
                <Box sx={textField}>
                <InputLabel required>New Password</InputLabel>
                <CustomTextField 
                    type="password" 
                    isPassword={true} 
                    required 
                />
                </Box>

                <Box sx={textField}>
                <InputLabel required>Confirm new password</InputLabel>
                <CustomTextField 
                    type="password" 
                    isPassword={true} 
                    required 
                />
                </Box>

                <CustomButton text="Reset password" variant="contained" />
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
    textAlign: 'center',
    mt: 2,
    mb: 3,
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    width:'100%'
};

const contentBox = {
    color: '#71707E',
    fontSize: '14px',
    width: '100%',
    textAlign:'justify'
};

const textField = {
    marginBottom: 2,
    width:'100%',
};


export default Reset;
