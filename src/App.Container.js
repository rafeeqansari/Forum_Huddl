import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import App from "./App";



export const AppContainer = withRouter(
  connect(
    null,
    null
  )(App)
);
