import React from "react";
const TopArtistsPage = React.lazy(() => import("./index"));

const routes = [
  {
    path: "/top-artists",
    Component: TopArtistsPage,
  },
];

export default routes;
