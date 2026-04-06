import { useAppSelector } from "../../../../Redux ToolKit/Store";
import HomeCategoryCard from "./HomeCategoryCard";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const HomeCategory = () => {
  const { homeCategories, loading } = useAppSelector(
    (store) => store.homeCategory
  );

  const categories = homeCategories?.shopByCategories;

  if (loading) {
    return (
      <div className="flex flex-wrap justify-center gap-4 px-3 lg:px-8">
        {[...Array(6)].map((_, i) => (
          <Box key={i} className="space-y-2 w-[120px]">
            <Skeleton variant="rectangular" height={100} />
            <Skeleton width="80%" />
          </Box>
        ))}
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500">
        No categories found
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 px-3 lg:px-8">
      {categories.map((item) => (
        <HomeCategoryCard item={item} key={item._id} />
      ))}
    </div>
  );
};

export default HomeCategory;