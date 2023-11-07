import { Outlet } from "react-router-dom";
import NavBar from "@/components/NavBar.jsx";
import { useAuth } from "@/lib/AuthContext.jsx";

export default function PublicLayout() {
  const { user } = useAuth();
  console.log("PublicLayout:: ", user);
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
