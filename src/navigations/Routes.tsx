import Home from "../components/Home"; // Create a basic component that an authenticated user can be redirected to
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
const routes = [
  {
    title: "Home",
    path: "/home",
    component: Home,
    exact: true,
    private: true,
  },
  {
    title: "Sign Up",
    path: "/sign-up",
    component: SignUp,
    exact: true,
    private: false,
  },
  {
    title: "Sign In",
    path: "/sign-in",
    component: SignIn,
    exact: true,
    private: false,
  },
];
export default routes;
