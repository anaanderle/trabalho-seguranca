import { createBrowserRouter } from "react-router-dom";

import PrivateRoute from "./privateRoute.component";

import {
  LoginScreen,
  HomeScreen,
  UserScreen,
  RegisterScreen,
  ResetPasswordScreen,
  ChangePasswordScreen,
} from "../screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "/home",
    element: <PrivateRoute Screen={HomeScreen} />,
  },
  {
    path: "/user",
    element: <PrivateRoute Screen={UserScreen} />,
  },
  {
    path: "/redefinirSenha",
    element: <ResetPasswordScreen />,
  },
  {
    path: "/escolherSenha",
    element: <ChangePasswordScreen />,
  },
  {
    path: "*",
    element: <LoginScreen />,
  },
]);
