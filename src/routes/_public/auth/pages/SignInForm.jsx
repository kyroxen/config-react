import { Link } from "react-router-dom";
import { ChevronLeftSquareIcon } from "lucide-react";
import Button from "@/components/Button.jsx";
import TooltipContainer from "@/components/TooltipContainer.jsx";
import { useAuth } from "@/lib/AuthContext.jsx";

export default function SignInForm() {
  const { login } = useAuth();
  const handleLogin = (e) => {
    // Call the login function with credentials
    e.preventDefault();
    login("user@example.com", "password");
  };

  return (
    <>
      <div className="flex flex-row">
        <div className="my-auto">
          <TooltipContainer tooltip="Go Back To Home">
            <Link to="/">
              <div className="flex flex-row p-2 bg-lime-200 border-2 border-r-0 border-black">
                <div className="bg-white">
                  <ChevronLeftSquareIcon className="bg-yellow-100" />
                </div>
              </div>
            </Link>
          </TooltipContainer>
        </div>
        <div className="p-8 space-y-4 shadow w-[350px] text-center">
          <div className="text-2xl font-semibold leading-none tracking-tight mb-10">
            Sign in to your account
          </div>
          <form className="space-y-4" onSubmit={handleLogin}>
            <input className="input" type="email" placeholder="email" />
            <input className="input" type="password" placeholder="password" />
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
          <div>
            <p>
              Don&apos;t have an account?
              <Link
                to="/sign-up"
                className="text-sky-400 text-small-semibold ml-1"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
