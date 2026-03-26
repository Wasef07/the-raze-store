import { homeCategories } from "../../../../data/homeCategories";
import { useAppSelector } from "../../../../Redux ToolKit/Store";
import HomeCategoryCard from "./HomeCategoryCard"

const HomeCategory = () => {
  const categories = useAppSelector(
    (store) => store.homeCategory.homeCategories?.shopByCategories
  );

  // ✅ prevent crash
  if (!categories || categories.length === 0) {
    return <div className="text-center py-5">Loading...</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 px-3 lg:px-8">
      {categories.map((item, index) => (
        <HomeCategoryCard item={item} key={index} />
      ))}
    </div>
  );
};

export default HomeCategory
