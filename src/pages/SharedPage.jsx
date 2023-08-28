import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const SharedPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default SharedPage;
