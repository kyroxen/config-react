import { Link, redirect } from "react-router-dom";
import Button from "@/components/Button.jsx";
import { useAuth } from "@/lib/AuthContext.jsx";

export default function NavBarDashboard() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    return redirect("/sign-in");
  };

  return (
    <header className="mx-auto bg-green-200/50 w-5/6 px-2 border-b">
      <div className=" flex h-14 items-center justify-between px-4 sm:px-6">
        <nav className="text-2xl">
          <Link to="/dashboard">Configuration Manager</Link>
        </nav>
        {user ? (
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
