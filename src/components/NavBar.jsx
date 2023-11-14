import { Link, redirect } from "react-router-dom";
import Button from "@/components/Button.jsx";
import { useLogto } from "@logto/react";

export default function NavBar() {
  const { signOut, isAuthenticated } = useLogto();

  const handleLogout = () => {
    signOut().then((e) => console.log("Signed out!", e));
    return redirect("/sign-in");
  };

  return (
    <header className="mx-auto w-full max-w-7xl px-2 border-b">
      <div className=" flex h-14 items-center justify-between px-4 sm:px-6 xl:px-8">
        <nav>
          <Link to="/">Home</Link>
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

const ProfileButton = () => {
  return (
    <div>
      <div>
        <div>
          <img src="/logos/shadcn.jpg" />
          <div>CN</div>
        </div>
      </div>
    </div>
  );
};
