/*!

=========================================================
* Purity UI Dashboard - v1.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/purity-ui-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/purity-ui-dashboard/blob/master/LICENSE.md)

* Design by Creative Tim & Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { Route, Switch, Redirect } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { SnackbarProvider, closeSnackbar } from "notistack";
import { SnackbarUtilsConfigurator } from "utils/SnackbarUtils";

import LandingPageLayout from "layouts/Landing.js";
import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";

export default function App() {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
      action={(snackbarId) => (
        <Button onClick={() => closeSnackbar(snackbarId)}>
          <IoClose color="white" />
        </Button>
      )}
    >
      <SnackbarUtilsConfigurator />
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/landing`} component={LandingPageLayout} />
        <Redirect from={`/`} to="/landing" />
      </Switch>
    </SnackbarProvider>
  )
}