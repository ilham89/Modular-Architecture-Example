import { ReactElement, Suspense } from "react";
import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";
import Layout from "@layouts/Layout";
import Spinner from "@shared/components/Spinner";
import DiscoverRoutes from "@modules/Discover/routes";
import TopArtistRoutes from "@modules/TopArtists/routes";
import TopChartRoutes from "@modules/TopCharts/routes";
import AroundYouRoutes from "@modules/AroundYou/routes";
import DetailArtistRoutes from "@modules/Artists/routes";

const routes = [
  ...DiscoverRoutes,
  ...TopArtistRoutes,
  ...TopChartRoutes,
  ...AroundYouRoutes,
  ...DetailArtistRoutes,
];
const Routes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="loader-wrapper">
          <Spinner title="Please wait ..." />
        </div>
      }
    >
      <Layout>
        <Switch>
          {routes.map(({ Component, ...entry }, key: number): ReactElement => {
            return <Route key={key} {...entry} element={<Component />} />;
          })}
        </Switch>
      </Layout>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
