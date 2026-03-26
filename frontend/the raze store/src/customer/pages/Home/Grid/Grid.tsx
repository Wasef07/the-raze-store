import React from "react";
import { useAppSelector } from "../../../../Redux ToolKit/Store";

const Grid = () => {
  const category = useAppSelector(
    (store) => store.homeCategory.homeCategories?.grid
  );

  // ✅ STOP CRASH HERE
  if (!category || category.length < 5) {
    return <div className="px-5 lg:px-20">Loading...</div>;
  }

  return (
    <div className="grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20">
      <div className="col-span-3 row-span-12 rounded-md">
        <img className="w-full h-full object-cover rounded-md" src={category[0].image} />
      </div>

      <div className="col-span-2 row-span-6 rounded-md">
        <img className="w-full h-full object-cover rounded-md" src={category[1].image} />
      </div>

      <div className="col-span-4 row-span-6 rounded-md">
        <img className="w-full h-full object-cover rounded-md" src={category[3].image} />
      </div>

      <div className="col-span-3 row-span-12 rounded-md">
        <img className="w-full h-full object-cover rounded-md" src={category[2].image} />
      </div>

      <div className="col-span-4 row-span-6 rounded-md">
        <img className="w-full h-full object-cover rounded-md" src={category[3].image} />
      </div>

      <div className="col-span-2 row-span-6 rounded-md">
        <img className="w-full h-full object-cover rounded-md" src={category[4].image} />
      </div>
    </div>
  );
};

export default Grid;
