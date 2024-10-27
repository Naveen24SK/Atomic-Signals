import React from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { height, styled } from '@mui/system';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '16px',
  width: '100%',
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    height:'40px'
  },
  '& .MuiInputLabel-asterisk': {
    color: 'red',
  },
}));

const CustomTextField = ({ label, type, isPassword, ...props }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <StyledTextField
      {...props}
      label={label}
      type={isPassword && !showPassword ? 'password' : type}
      required 
      InputProps={
        isPassword
          ? {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }
          : null
      }
    />
  );
};

export default CustomTextField;
