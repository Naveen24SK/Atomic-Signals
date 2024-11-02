import React from "react";
import {Box} from "@mui/material";
import SideBar from "../../Components/SideBar/SideBar";
import Table from "../../Components/Table/Table";


const TeamMember =()=>{
    return (
        <Box sx={{
            display: 'flex',
            flexDirection:'row',
            gap:'5%',
            width: '100%',
            backgroundColor: '#F2F2F2'
        }}>
            <SideBar />
                <Table />
        </Box>
    );
};

export default TeamMember;