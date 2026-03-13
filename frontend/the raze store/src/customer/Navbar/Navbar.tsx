import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { use, useState } from "react";
import { mainCategory } from "../../data/Category/mainCategory";
import CategorySheet from "./CategorySheet";
import {
  AccountCircle,
  AddShoppingCart,
  Favorite,
  FavoriteBorder,
  Search,
  Storefront,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../Redux ToolKit/Store";

const Navbar = () => {
  const user = useAppSelector(store=>store.user)
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up("lg"));
  const [showSheet, setShowSheet] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");
  const navigate = useNavigate();
  return (
    <Box className="sticky top-0 left-0 rigfht-0 bg-white blur-bg bg-opacity-80">
      <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] border-b border-gray-300">
        <div className="flex items-center gap-9">
          <div className="flex items-center gap-2">
            {!isLarge && (
              <IconButton>
                <Menu className="text-gray-700" sx={{ fontSize: 29 }} />
              </IconButton>
            )}
            <h1 onClick={()=>navigate("/")} className="logo text-lg md:text-2xl cursor-pointer">The Raze Store</h1>
          </div>
          <ul className="flex items-center font-medium text-gray-800">
            {mainCategory.map((item) => (
              <li
                onMouseEnter={() => {
                  setShowSheet(true);
                  setSelectedCategory(item.categoryId);
                }}
                onMouseLeave={() => {
                  setShowSheet(false);
                }}
                key={item.categoryId}
                className="mainCategory hover:text-[#00927c] cursor-pointer hover:pointer-b-2 h-[70px] px-4 border-[#00927c] flex items-center"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <IconButton>
            <Search sx={{ fontSize: 29 }} />
          </IconButton>
          {user.user?.name ? (
            <Button onClick={()=>navigate("/account")} className='flex items-center gap-2'>
              <Avatar
                src="https://pixabay.com/images/download/uschi2807-british-shorthair-7965411_1920.jpg"
                sx={{ width: 29, height: 29 }}
              />
              <h1>{user.user?.name}</h1>
            </Button>
          ) : (
            <Button onClick={()=>navigate("/login")} variant="contained" startIcon={<AccountCircle />}>
              Login
            </Button>
          )}
          <IconButton>
            <FavoriteBorder sx={{ fontSize: 29 }} />
          </IconButton>
          <IconButton onClick={()=>navigate("/cart")}>
            <AddShoppingCart sx={{ fontSize: 29 }} />
          </IconButton>
          <Button onClick={()=>navigate("/become-seller")} variant="outlined" startIcon={<Storefront />}>
            Become Seller
          </Button>
        </div>
      </div>
      {showSheet && (
        <div
          onMouseEnter={() => setShowSheet(true)}
          onMouseLeave={() => setShowSheet(false)}
          className="categorySheet absolute top-[4.4rem] left-20 right-20"
        >
          <CategorySheet
            selectedCategory={selectedCategory}
            setShowSheet={setShowSheet}
          />
        </div>
      )}
    </Box>
  );
};

export default Navbar;
