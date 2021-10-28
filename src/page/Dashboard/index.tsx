import { Redirect } from "react-router-dom";
import { useAuth } from "../../Provider/Auth";

export const Dashboard = () => {
  const { Logout, authToken } = useAuth();

  if (!authToken) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={Logout}>Logout</button>
    </>
  );
};
