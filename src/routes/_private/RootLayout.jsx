import { Outlet } from "react-router-dom";
import NavBarDashboard from "@/components/NavBarDashboard.jsx";
import { Descope, useSession, useUser } from "@descope/react-sdk";

export default function RootLayout() {
  const { isAuthenticated, isSessionLoading } = useSession();
  const { isUserLoading } = useUser();
  return (
    <>
      {!isAuthenticated && (
        <Descope
          flowId="sign-up-or-in"
          onSuccess={(e) => console.log(e.detail.user)}
          onError={(e) => console.log("Could not log in!", e)}
        />
      )}
      {(isSessionLoading || isUserLoading) && <p>Loading...</p>}
      {!isSessionLoading && isAuthenticated && (
        <>
          <NavBarDashboard />
          <Outlet />
        </>
      )}
    </>
  );
}
