import { Link, redirect } from "react-router-dom";
import Button from "@/components/Button.jsx";
import { useLogto } from "@logto/react";

export default function NavBarDashboard() {
  const { signOut, isAuthenticated } = useLogto();

  const handleLogout = () => {
    signOut("http://localhost:5173");
  };

  return (
    <header className="mx-auto bg-gradient-saturated text-white w-5/6 px-2 border-2 border-black rounded-md">
      <div className=" flex h-14 items-center justify-between px-4 sm:px-6">
        <nav className="text-2xl">
          <Link to="/dashboard">Configuration Manager</Link>
        </nav>
        {isAuthenticated ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button>
            <Link to="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
    </header>
  );
}
