import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { useNavigate } from "react-router";

const Navbar = ({ DrawerList, panelName }: any) => {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-gray-300 bg-white">
      
      {/* Left */}
      <div className="flex items-center gap-4">
        <IconButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>

        <h1
          onClick={() => navigate("/")}
          className="logo text-xl cursor-pointer"
        >
          The Raze Store
        </h1>
      </div>

      {/* Right */}
      <div className="text-sm text-gray-600 font-medium">
        {panelName}
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </div>
  );
};

export default Navbar;