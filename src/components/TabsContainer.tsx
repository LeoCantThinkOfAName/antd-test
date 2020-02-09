import React, { ReactElement } from "react";
import { Tabs } from "antd";
import { TabType } from "../types/TabType";
import { useRouteMatch, useHistory } from "react-router-dom";

const { TabPane } = Tabs;

const TabsContainer = ({ tabs }: { tabs: TabType[] }): ReactElement => {
  const match = useRouteMatch();
  const history = useHistory();

  const handleChange = (activeKey: string): void => {
    history.push(activeKey);
  };

  return (
    <Tabs
      defaultActiveKey={`${history.location.pathname}`}
      onChange={(activeKey: string): void => handleChange(activeKey)}
      animated={false}
      destroyInactiveTabPane
    >
      {tabs.map((tab: TabType) => (
        <TabPane key={`${match.path}/${tab.path}`} tab={tab.name}>
          {tab.component}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabsContainer;
