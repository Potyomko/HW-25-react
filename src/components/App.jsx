import { Navigation } from "./AppNav";
import { Outlet } from "react-router";
export const App = () => {
  return (
    <div className="container">
      <Navigation/>
      <Outlet></Outlet>
    </div>
  );
};
