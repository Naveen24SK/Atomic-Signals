import React from 'react';
import { Button } from '@mui/material';
import { fontSize, styled } from '@mui/system';

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none', 
  fontSize: '14px',
  padding: '12px 20px',
  borderRadius: '4px',
  fontWeight: 500,
  height:'40px',
  width: '100%',
  boxShadow: 'none',
  color:'white',
  backgroundColor:'#49C792',
  '& .MuiButton-startIcon': {
    position: 'absolute', 
    left: '14px',
  },
  '&.google': {
    backgroundColor: '#F8F8F8',
    color: '#353448',
    fontSize:'14px',
    border: '1px solid #e0e0e0',
  },
  '&.outlook': {
    backgroundColor: '#F8F8F8',
    color: '#353448',
    fontSize:'14px',
    border: '1px solid #e0e0e0',
  },

  '&.import':{
    backgroundColor: '#F0F0F0',
    color:'#49C792',
    fontSize:'14px',
    border: '1.5px solid #49C792'
  },

  '&:hover': {
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
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
