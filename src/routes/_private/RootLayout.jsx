import { Navigate, Outlet } from "react-router-dom";
import NavBarDashboard from "@/components/NavBarDashboard.jsx";
import { useLogto } from "@logto/react";

export default function RootLayout() {
  const { isAuthenticated } = useLogto();

  return (
    <div>
      {isAuthenticated ? (
        <>
          <NavBarDashboard />
          <Outlet />
        </>
      ) : (
        <Navigate to="/" />
      )}
    </div>
  );
}
