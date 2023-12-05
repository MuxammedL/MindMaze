import { Outlet } from "react-router-dom";

import Header from './Header/Header'

const SecondaryLayout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
    </>
  );
};
export default SecondaryLayout;
