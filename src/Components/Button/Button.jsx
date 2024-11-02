import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none', 
  fontSize: '14px',
  padding: '12px 20px',
  borderRadius: '4px',
  fontWeight: 500,
  height: '40px',
  width: '100%',
  boxShadow: 'none',
  color: 'white',
  backgroundColor: '#49C792',
  transition: 'box-shadow 0.3s ease, border 0.3s ease',
  
  '& .MuiButton-startIcon': {
    position: 'absolute', 
    left: '14px',
  },
  
  // Styles for Google button
  '&.google': {
    backgroundColor: '#F8F8F8',
    color: '#353448',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
  },
  
  // Styles for Outlook button
  '&.outlook': {
    backgroundColor: '#F8F8F8',
    color: '#353448',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
  },
  
  // Styles for Import button
  '&.import': {
    backgroundColor: '#F0F0F0',
    color: '#49C792',
    fontSize: '14px',
    border: '1.5px solid #49C792'
  },

  '&:hover': {
    border: '1px solid transparent',  // Remove black border color
    boxShadow: '0px 0px 10px 4px rgba(73, 199, 146, 0.5)',  // Soft glow effect
    backgroundColor: '#49C792',  // Keep the background color on hover
  },
}));

const CustomButton = ({ text, startIcon, variant, ...props }) => {
  return (
    <StyledButton
      {...props}
      startIcon={startIcon}
      className={variant}
    >
      {text}
    </StyledButton>
  );
};

export default CustomButton;
