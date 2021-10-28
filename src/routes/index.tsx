import { Route } from "react-router-dom";
import { Dashboard } from "../page/Dashboard";
import { Home } from "../page/Home";

export const Routes = () => {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard />
      </Route>
    </>
  );
};
