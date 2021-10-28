import { Redirect } from "react-router-dom";
import { Login } from "../../components/Login";
import { useAuth } from "../../Provider/Auth";

export const Home = () => {
  const { authToken } = useAuth();

  if (authToken) {
    return <Redirect to="/dashboard" />;
  }
  return <Login />;
};
