import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Typography, Box } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../Redux ToolKit/Store";
import { useEffect } from "react";
import { fetchAllCoupon } from "../../Redux ToolKit/Features/Admin/CouponSlice";

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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Coupon() {

  const dispatch = useAppDispatch();
  const coupon = useAppSelector(store=>store.coupon)
  useEffect(()=>{
    dispatch(fetchAllCoupon(localStorage.getItem("jwt")))
  },[])
  return (
    <TableContainer
      component={Paper}
      elevation={2}
      sx={{
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Coupon Code</StyledTableCell>
            <StyledTableCell align="right">Start Date</StyledTableCell>
            <StyledTableCell align="right">End Date</StyledTableCell>
            <StyledTableCell align="right">Min Order Value</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {coupon.coupons?.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <Box>
                  <Typography fontWeight={600}>{row.name}</Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                  >
                    January 26, 2025
                  </Typography>

                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                  >
                    12:55:41 AM
                  </Typography>
                </Box>
              </StyledTableCell>

              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>

              <StyledTableCell align="center">
                <IconButton
                  sx={{
                    transition: "0.2s",
                    "&:hover": {
                      backgroundColor: "rgba(244,67,54,0.1)",
                    },
                  }}
                >
                  <Delete color="error" />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}