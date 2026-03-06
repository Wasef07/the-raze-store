import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Badge, Button, Chip, Menu, MenuItem } from "@mui/material";
import React from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
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

const orderStatus = [
  { color: "#FFA500", label: "PENDING" },
  { color: "#F5BCBA", label: "PLACED" },
  { color: "#F5BCBA", label: "CONFIRMED" },
  { color: "#1E90FF", label: "SHIPPED" },
  { color: "#32CD32", label: "DELIVERED" },
  { color: "#FF0000", label: "CANCELLED" },
];

export default function OrderTable() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleUpdateOrder = (id: any, status: any) => {
    console.log("Upadate Order", id, status);
    handleClose();
  };
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ py: 2 }}>Order Id</StyledTableCell>
            <StyledTableCell sx={{ py: 2 }}>Products</StyledTableCell>
            <StyledTableCell sx={{ py: 2 }} align="right">
              Shipping Address
            </StyledTableCell>
            <StyledTableCell sx={{ py: 2 }} align="right">
              Order Status
            </StyledTableCell>
            <StyledTableCell sx={{ py: 2 }} align="right">
              Update
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell sx={{ py: 3 }}>{row.name}</StyledTableCell>

              {/* PRODUCTS */}
              <StyledTableCell sx={{ py: 3 }}>
                <div className="flex flex-col gap-4">
                  {[1, 1, 1].map((item, index) => (
                    <div key={index} className="flex gap-4 items-center">
                      <img
                        className="w-16 h-16 rounded-md object-cover"
                        src="https://lajreedesigner.com/cdn/shop/files/KP-6026_1.jpg?v=1745490955&width=1780"
                      />

                      <div className="flex flex-col text-sm gap-1">
                        <h1 className="font-medium">Title : Women Saree</h1>
                        <h1>Price : Rs.2999</h1>
                        <h1>Color : Yellow</h1>
                        <h1>Size : Free</h1>
                      </div>
                    </div>
                  ))}
                </div>
              </StyledTableCell>

              {/* ADDRESS */}
              <StyledTableCell align="right" sx={{ py: 3 }}>
                {row.fat}
              </StyledTableCell>

              {/* STATUS */}
              <StyledTableCell align="right" sx={{ py: 3 }}>
                <Chip label="Delivered" size="small" variant="outlined" />
              </StyledTableCell>

              {/* UPDATE */}
              <StyledTableCell align="right" sx={{ py: 3 }}>
                <Button
                  color="primary"
                  size="small"
                  variant="outlined"
                  onClick={handleClick}
                >
                  Status
                </Button>

                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  {orderStatus.map((status) => (
                    <MenuItem
                      key={status.label}
                      onClick={() => handleUpdateOrder(1, status.label)}
                    >
                      {status.label}
                    </MenuItem>
                  ))}
                </Menu>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
