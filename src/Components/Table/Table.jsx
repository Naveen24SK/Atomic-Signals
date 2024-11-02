import React, { useState } from "react";
import {
  Autocomplete, Box, Table, TableBody, TableCell, TableContainer, TableHead, Stack, Checkbox,
  TableRow, Paper, Avatar, Typography, IconButton, Tooltip, TablePagination, Drawer
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FilterListIcon from "@mui/icons-material/FilterList";
import { border, borderBottom, borderRadius, styled } from "@mui/system";
import ReactSpeedometer from "react-d3-speedometer";
import CustomSwitch from "../Switch/Switch";
import CustomButton from "../Button/Button"; 
import CustomTextField from "../Input/Input"; 
import Profile from "../../assets/profile.jpg";
import Report from "../../assets/admin.jpg";
import Import from "../../assets/import.svg";
import Search from "../SearchBar/SearchBar";


const TableContainerStyled = styled(TableContainer)({
  overflowX: "auto",
  borderRadius: "8px",
  "& .MuiTableCell-root": {
    whiteSpace: "nowrap",
    textAlign: "justify",
    padding: "8px 12px",
  },
  "& .sticky-col": {
    position: "sticky",
    right: 0,
    zIndex: 4,
    backgroundColor: "#FFFFFF",
    borderLeft: "1px solid #e0e0e0",
  },
  "& .MuiTableCell-head": {
    fontSize: "18px",
    fontWeight: "bold",
  },
  "& .MuiTableCell-body": {
    textAlign: "center",
  },
});

const signals = ["C", "E", "T", "D", "U"];
const signalColors = {
  C: "#4CAF50",
  E: "#FFC107",
  T: "#FFEB3B",
  D: "#FF9800",
  U: "#F44336",
};

const initialEmployees = [
  {
    name: "George Fernandes",
    designation: "Visual Designer",
    department: "Design",
    signals: ["C", "E", "T", "D", "U"],
    value: 50,
    reporter: "reporter1.jpg",
    avatar: Profile
  },
  {
    name: "Emilie Clarke",
    designation: "Visual Designer",
    department: "Design",
    signals: ["C", "E", "T", "D", "U"],
    value: 60,
    reporter: "reporter2.jpg",
    avatar: Profile
  },
  {
    name: "Jason Dominic",
    designation: "Full Stack Developer",
    department: "Engineering",
    signals: ["C", "E", "T", "D", "U"],
    value: 75,
    reporter: "reporter1.jpg",
    avatar: Profile
  },
  {
    name: "Bruce Banner",
    designation: "Front End Developer",
    department: "Engineering",
    signals: ["C", "E", "T", "D", "U"],
    value: 80,
    reporter: "reporter1.jpg",
    avatar: Profile
  }
];

const TableComponent = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [employees, setEmployees] = useState(initialEmployees);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    designation: "",
    department: "",
    signals: ["C", "E", "T", "D", "U"],
    value: 50,
    reporter: "reporter1.jpg",
    avatar: "avatar1.jpg"
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleAddMember = () => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setDrawerOpen(false);
    setNewEmployee({
      name: "",
      designation: "",
      department: "",
      signals: ["C", "E", "T", "D", "U"],
      value: 50,
      reporter: "reporter1.jpg",
      avatar: "avatar1.jpg"
    });
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", padding: 4, backgroundColor: '#F0F0F0', height:'96vh', width:'90%' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%', mb: 2 }}>
        <Typography variant="h6">Team members</Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <Checkbox defaultChecked color="success" />
          <Typography sx={{textWrap:"nowrap"}}>Show only my reportees</Typography>
          <Search />
          <IconButton color="primary">
            <FilterListIcon />
          </IconButton>
          <CustomButton text="Import" variant="import" startIcon={<img src={Import} alt='google-icon' />}  />
          <CustomButton text="Add member" variant="contained" color="primary" onClick={handleDrawerToggle} />
        </Stack>
      </Stack>
      
      <Box sx={tableBox}>
        <TableContainerStyled sx={tablesec} component={Paper}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Designation</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Signals</TableCell>
                <TableCell>Overall Performance</TableCell>
                <TableCell>Reporting to</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Experience</TableCell>
                <TableCell>Status</TableCell>
                <TableCell className="sticky-col">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((employee, index) => (
                <TableRow key={index} sx={{borderBottom:'none'}}>
                  <TableCell>
                    <Stack direction="row" alignItems="center" spacing={2}>
                      <Avatar alt={employee.name} src={employee.avatar} />
                      <Typography>{employee.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{employee.designation}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>
                    <Stack direction="row" spacing={1}>
                      {employee.signals.map((signal, idx) => (
                        <Tooltip key={idx} title={`Signal: ${signal}`} arrow>
                          <Avatar
                            sx={{ bgcolor: signalColors[signal], width: 24, height: 24, fontSize: 12 }}
                          >
                            {signal}
                          </Avatar>
                        </Tooltip>
                      ))}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Overall Performance" arrow>
                      <Box>
                        <ReactSpeedometer
                          width={100}
                          value={employee.value}
                          height={70}
                          currentValueText={""}
                          ringWidth={10}
                          needleColor={"black"}
                          maxSegmentLabels={0}
                          needleHeightRatio={0.4}
                          minValue={0}
                          maxValue={100}
                        />
                      </Box>
                    </Tooltip>
                  </TableCell>
                  <TableCell>
                    <Tooltip title="Reporting to" arrow>
                      <Avatar alt="Reporter" src={employee.reporter} />
                    </Tooltip>
                  </TableCell>
                  <TableCell>Employee</TableCell>
                  <TableCell>naveen.cs24@gmail.com</TableCell>
                  <TableCell>Experience</TableCell>
                  <TableCell><CustomSwitch /></TableCell>
                  <TableCell className="sticky-col">
                    <Stack direction="row" spacing={1}>
                    <CustomButton text="Add feedback" variant="contained" size="small"  />
                    <IconButton color="primary"><EditIcon /></IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainerStyled>
        <TableContainerStyled>
          <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={employees.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={pagerow}
          />
        </TableContainerStyled>
      </Box>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 300, padding: 2 }}>
          <Typography variant="h6">Add New Member</Typography>
          
          <CustomTextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            onChange={handleInputChange}
          />
          
          <CustomTextField
            label="Email"
            name="email"
            fullWidth
            margin="normal"
            onChange={handleInputChange}
          />
          
          <CustomButton
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleAddMember}
            text="Add"
          />
        </Box>
      </Drawer>
    </Box>
  );
};

const tableBox = {
  height: "70vh",
  width: "100%",
  border: "1px solid #EBEBEB",
  borderRadius: "8px",
  backgroundColor: "#FFFFFF",
};

const tablesec = {
  height: "calc(100vh - 160px)",
};

const pagerow = {
  "& .MuiTablePagination-root": {
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #EBEBEB",
  }
}


export default TableComponent;
