import React from "react";
const DetailArtistsPage = React.lazy(() => import("./index"));

const routes = [
  {
    path: "/artists/:id",
    Component: DetailArtistsPage,
  },
];

export default routes;
