import { useState, useEffect, useMemo } from "react";
// react-router components
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";

// Vision UI Dashboard React example components
import Sidenav from "examples/Sidenav";

// Vision UI Dashboard React themes
import theme from "assets/theme";

// Vision UI Dashboard React routes
import routes from "routes";

// Vision UI Dashboard React contexts
import { useVisionUIController, setMiniSidenav } from "context";
import callAPI from "./api/index";

import { CASINO_SERVER } from "./variables/url";
import { setETH, setBNB } from "./slices/price.slice";
export default function App() {
  const [controller, dispatch] = useVisionUIController();
  const { miniSidenav, direction, layout, sidenavColor } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const { pathname } = useLocation();
  const reduxDispatch = useDispatch();
  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} component={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand=""
            brandName="Casino&nbsp;&nbsp;&nbsp;"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
        </>
      )}
      <Switch>
        {getRoutes(routes)}
        {/* <Redirect from="*" to="/home" /> */}
      </Switch>
    </ThemeProvider>
  );
}
