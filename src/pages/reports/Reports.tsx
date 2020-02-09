import React, { ReactElement } from "react";
import TabsContainer from "../../components/TabsContainer";

// components
import Rooms from "./Rooms";
import Prices from "./Prices";
import { TabType } from "../../types/TabType";

const TabsList: TabType[] = [
  { name: "rooms", path: "rooms", component: <Rooms /> },
  { name: "prices", path: "prices", component: <Prices /> },
];

const Reports = (): ReactElement => {
  return <TabsContainer tabs={TabsList} />;
};

export default Reports;
