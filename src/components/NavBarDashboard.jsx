import { Link, redirect } from "react-router-dom";
import Button from "@/components/Button.jsx";
import { useDescope, useUser } from "@descope/react-sdk";

export default function NavBarDashboard() {
  const { user } = useUser();
  const { logout } = useDescope();

  const handleLogout = () => {
    logout().then((e) => {
      console.log("Logged out!", e);
      return redirect("/sign-in");
    });
  };

  return (
    <>
      {true && (
        <header className="mx-auto bg-gradient-saturated text-white w-5/6 px-2 border-2 border-black rounded-md">
          <div className=" flex h-14 items-center justify-between px-4 sm:px-6">
            <nav className="text-2xl">
              <Link to="/dashboard">Configuration Manager</Link>
            </nav>
            <Button onClick={handleLogout}>Logout {user.name}</Button>
          </div>
        </header>
      )}
    </>
  );
}
