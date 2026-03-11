import React, { useState } from "react";
import DealTable from "./DealTable";
import DealCategoryTable from "./DealCategoryTable";
import CreateDeal from "./CreateDeal";
import { Box, Tab, Tabs } from "@mui/material";

const Deal = () => {
  const [tab, setTab] = useState("deals");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab value="deals" label="Deals" />
          <Tab value="categories" label="Categories" />
          <Tab value="create-deal" label="Create Deal" />
        </Tabs>
      </Box>

      <div className="mt-5">
        {tab === "deals" && <DealTable />}

        {tab === "categories" && <DealCategoryTable />}

        {tab === "create-deal" && (
          <div className="mt-5 border-t border-gray-300 flex flex-col justify-center items-center h-[70vh]">
            <CreateDeal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Deal;