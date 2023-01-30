import React from "react";
const DiscoverPage = React.lazy(() => import("./index"));

const routes = [
  {
    path: "/",
    Component: DiscoverPage,
  },
];

export default routes;
