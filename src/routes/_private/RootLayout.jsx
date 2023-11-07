import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/lib/AuthContext.jsx";
import NavBarDashboard from "@/components/NavBarDashboard.jsx";

export default function RootLayout() {
  const { user } = useAuth();
  console.log("RootLayout:: ", user);

  return (
    <div>
      {user ? (
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
