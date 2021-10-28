import { useAuth } from "../../Provider/Auth";

export const Dashboard = () => {
  const { Logout } = useAuth();

  return (
    <>
      <h1>Dashboard</h1>
      <button onClick={Logout}>Logout</button>
    </>
  );
};
