import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Box, Typography } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../../Redux ToolKit/Store";
import { deleteDeal, getAllDeals } from "../../Redux ToolKit/Features/Admin/DealSlice";
import { useEffect } from "react";

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
  protein: number,
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

export default function DealTable() {
  const dispatch = useAppDispatch();
  const deal = useAppSelector(store => store.deal);
  useEffect(() => {
    dispatch(getAllDeals(localStorage.getItem("jwt")));
  },[dispatch]);

  const handleDeleteDeal=(id)=>{
    dispatch(deleteDeal(id))
  }
  return (
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
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="left">Image</StyledTableCell>
            <StyledTableCell align="left">Category</StyledTableCell>
            <StyledTableCell align="right">Discount</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
            <StyledTableCell align="center">Delete</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {deal.deals?.map((item, index) => (
            <StyledTableRow key={item._id}>
              {/* No */}
              <StyledTableCell>{index + 1}</StyledTableCell>

              {/* Image */}
              <StyledTableCell align="left">
                <img
                  className="w-20 h-30 object-cover rounded-lg shadow-sm"
                  src={item.homeCategory?.image}
                  alt="deal"
                />
              </StyledTableCell>

              {/* Category */}
              <StyledTableCell align="left">
                {item.homeCategory?.name}
              </StyledTableCell>

              {/* Discount */}
              <StyledTableCell align="right">
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                  {item.discount ? `${item.discount}%` : "-"}
                </span>
              </StyledTableCell>

              {/* Edit */}
              <StyledTableCell align="center">
                <IconButton>
                  <Edit color="primary" />
                </IconButton>
              </StyledTableCell>

              {/* Delete */}
              <StyledTableCell align="center">
                <IconButton onClick={()=>handleDeleteDeal(item._id)}>
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
