import React from "react";
const SearchPage = React.lazy(() => import("./index"));

const routes = [
  {
    path: "/search/:searchTerm",
    Component: SearchPage,
  },
];

export default routes;
