import React from "react";
import { InputBase, InputAdornment, Paper, Icon } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)({
  borderRadius: "8px",
  padding: "2px 12px",
  display: "flex",
  alignItems: "center",
  width: 300, 
  boxShadow: "none",
  border: "1px solid #E0E0E0",
  backgroundColor: "#F5F5F5"
});

const StyledInputBase = styled(InputBase)({
  marginLeft: 8,
  flex: 1,
  color: "#A0A0A0",
  fontSize: "14px"
});

const SearchBar = () => {
  return (
    <StyledPaper>
      <StyledInputBase
        placeholder="Search by name, email"
        startAdornment={
          <InputAdornment position="start">
            <Icon>
              <SearchIcon style={{ color: "#A0A0A0" }} />
            </Icon>
          </InputAdornment>
        }
      />
    </StyledPaper>
  );
};

export default SearchBar;
