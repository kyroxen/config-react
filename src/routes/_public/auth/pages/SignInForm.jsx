import { Link, redirect } from "react-router-dom";
import { ChevronLeftSquareIcon } from "lucide-react";
import Button from "@/components/Button.jsx";
import TooltipContainer from "@/components/TooltipContainer.jsx";
import { useLogto } from "@logto/react";

export default function SignInForm() {
  const { signIn } = useLogto();
  const handleLogin = (e) => {
    e.preventDefault();
    signIn("http://localhost:5173/callback").then((r) =>
      console.log("Signed in! ", r),
    );
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
            <input className="input w-full" type="email" placeholder="email" />
            <input
              className="input w-full"
              type="password"
              placeholder="password"
            />
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
