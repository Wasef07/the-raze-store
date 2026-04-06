import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Badge, Button, Chip, Menu, MenuItem } from "@mui/material";
import React, { use, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux ToolKit/Store";
import {
  fetchSellerOrders,
  updateOrderStatus,
} from "../../Redux ToolKit/Features/Seller/SellerOrderSlice";

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
  const [selectedOrderId, setSelectedOrderId] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };
  const dispatch = useAppDispatch();
  const { orders } = useAppSelector((store) => store.sellerOrder);
  const handleUpdateOrder = (id: any, status: any) => {
    handleClose();
    dispatch(
      updateOrderStatus({
        orderId: id,
        orderStatus: status,
        jwt: localStorage.getItem("jwt"),
      }),
    );
  };

  useEffect(() => {
    dispatch(fetchSellerOrders(localStorage.getItem("jwt")));
  }, []);
  return (
    <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ py: 2 }}>Order Id</StyledTableCell>
            <StyledTableCell sx={{ py: 2 }}>Products</StyledTableCell>
            <StyledTableCell sx={{ py: 2 }} align="left">
              Shipping Address
            </StyledTableCell>
            <StyledTableCell sx={{ py: 2 }} align="left">
              Order Status
            </StyledTableCell>
            <StyledTableCell sx={{ py: 2 }} align="left">
              Update
            </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders?.map((order) => (
            <StyledTableRow key={order._id}>
              {/* ORDER ID */}
              <StyledTableCell sx={{ py: 3 }}>{order._id}</StyledTableCell>

              {/* PRODUCTS */}
              <StyledTableCell sx={{ py: 3 }}>
                <div className="flex flex-col gap-4">
                  {order?.orderItems?.map((item) => {
                    const image =
                      item?.product?.image?.[0] || "/placeholder.png";

                    return (
                      <div key={item._id} className="flex gap-4 items-center">
                        <img
                          className="w-16 h-16 rounded-md object-cover"
                          src={image}
                        />

                        <div className="flex flex-col text-sm gap-1">
                          <h1 className="font-medium">
                            {item?.product?.title}
                          </h1>
                          <h1>₹{item?.sellingPrice}</h1>
                          <h1>Color: {item?.product?.color}</h1>
                          <h1>Size: {item?.size}</h1>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </StyledTableCell>

              {/* ADDRESS */}
              <StyledTableCell align="left" sx={{ py: 3 }}>
                <div className="text-sm">
                  <p>{order?.shippingAddress?.address}</p>
                  <p>{order?.shippingAddress?.city}</p>
                  <p>{order?.shippingAddress?.state}</p>
                </div>
              </StyledTableCell>

              {/* STATUS */}
              <StyledTableCell align="left" sx={{ py: 3 }}>
                <Chip
                  label={order?.orderStatus}
                  size="small"
                  variant="outlined"
                />
              </StyledTableCell>

              {/* UPDATE */}
              <StyledTableCell align="left" sx={{ py: 3 }}>
                <Button
                  size="small"
                  variant="outlined"
                  onClick={(e) => handleClick(e, order._id)}
                >
                  Status
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  open={open && selectedOrderId === order._id}
                  onClose={handleClose}
                >
                  {orderStatus.map((status) => (
                    <MenuItem
                      key={status.label}
                      onClick={() => handleUpdateOrder(order._id, status.label)}
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
