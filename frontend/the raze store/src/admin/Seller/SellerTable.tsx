import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux ToolKit/Store";
import { fetchSeller } from "../../Redux ToolKit/Features/Seller/SellerSlice";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    fontWeight: 600,
    fontSize: 14,
    letterSpacing: 0.4,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    paddingTop: 16,
    paddingBottom: 16,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: "background 0.2s ease",
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:hover": {
    backgroundColor: theme.palette.action.selected,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const accountStatus = [
  {
    status: "PENDING_VERIFICATION",
    title: "Pending_Verification",
    description: "Account is created but not yet verified",
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Account is active and in good standing",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description: "Account is temporarily suspended, possibly due to violations",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description:
      "Account is deactivated, user may have chosen to deactivate it",
  },
  {
    status: "BANNED",
    title: "Banned",
    description: "Account is permanently banned due to severe violations",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description: "Account is permanently closed, possibly at user request",
  },
];

export default function SellerTable() {
  const dispatch = useAppDispatch();
  const seller = useAppSelector((store) => store.seller);
  const [status, setStaus] = React.useState(accountStatus[0].status);

  const handleChange = (event: SelectChangeEvent) => {
    setStaus(event.target.value as string);
  };

  useEffect(() => {
    dispatch(fetchSeller(status));
  }, [status]);

  console.log("Seller", seller);
  return (
    <>
      {/* Filter Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 3,
        }}
      >
        <FormControl size="small" sx={{ width: 220 }}>
          <InputLabel>Status</InputLabel>
          <Select value={status} label="Status" onChange={handleChange}>
            {accountStatus.map((status) => (
              <MenuItem key={status.status} value={status.status}>
                {status.status}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        elevation={2}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
        }}
      >
        <Table sx={{ minWidth: 700 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Seller Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Mobile</StyledTableCell>
              <StyledTableCell align="left">GSTIN</StyledTableCell>
              <StyledTableCell align="left">Business Name</StyledTableCell>
              <StyledTableCell align="left">Account Status</StyledTableCell>
              <StyledTableCell align="left">Change Status</StyledTableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {seller?.sellers.map((item) => (
              <StyledTableRow key={item._id}>
                {/* Seller Info */}
                <StyledTableCell component="th" scope="row">
                  <Box>
                    <Typography fontWeight={600}>{item.name}</Typography>
                  </Box>
                </StyledTableCell>

                {/* Business Name */}
                <StyledTableCell align="left">
                  {item.email}
                </StyledTableCell>

                {/* GSTIN */}
                <StyledTableCell align="left">{item.mobile}</StyledTableCell>

                {/* Bank Name */}
                <StyledTableCell align="left">
                  {item.GSTIN}
                </StyledTableCell>

                {/* Account Holder */}
                <StyledTableCell align="left">
                  {item.businessDetails?.businessName || "-"}
                </StyledTableCell>

                {/* Status */}
                <StyledTableCell align="left">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.accountStatus === "PENDING_VERIFICATION"
                        ? "bg-yellow-100 text-yellow-700"
                        : item.accountStatus === "ACTIVE"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.accountStatus}
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <Button>Update</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
