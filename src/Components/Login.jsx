import { lazy, Suspense } from "react";

import { LOGO, BACKGROUND_IMG } from "../Utils/Constants";

const Header = lazy(() => import("../Components/Header"));

const Login = () => {
  return (
    <>
      <Header />
      <img src={LOGO} />
    </>
  );
};

export default Login;
