import React from "react";
const AroundYouPage = React.lazy(() => import("./index"));

const routes = [
  {
    path: "/around-you",
    Component: AroundYouPage,
  },
];

export default routes;
