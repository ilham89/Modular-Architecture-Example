import React from "react";
const TopChartsPage = React.lazy(() => import("./index"));

const routes = [
  {
    path: "/top-charts",
    Component: TopChartsPage,
  },
];

export default routes;
