import React from "react";
const DetailSongPage = React.lazy(() => import("./index"));

const routes = [
  {
    path: "/songs/:songid",
    Component: DetailSongPage,
  },
];

export default routes;
