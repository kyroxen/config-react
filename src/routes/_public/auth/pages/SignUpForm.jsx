import { Link } from "react-router-dom";
import Button from "@/components/Button.jsx";
import { ChevronLeftSquareIcon } from "lucide-react";
import TooltipContainer from "@/components/TooltipContainer.jsx";
import { useState } from "react";
import { handleChangeInput } from "@/lib/utils.js";

export default function SignUpForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleInputChange = handleChangeInput(setState);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
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
        <div className="text-center p-8 space-y-4 shadow w-[350px]">
          <div className="text-2xl font-semibold leading-none tracking-tight mb-10">
            Create a new account
          </div>
          <form
            className="space-y-4"
            autoComplete="on"
            method="Post"
            onSubmit={handleSubmit}
          >
            <input
              className="input w-full"
              required
              type="email"
              placeholder="email"
              name="email"
              value={state.email}
              onChange={handleInputChange}
            />
            <input
              className="input w-full"
              required
              type="text"
              placeholder="username"
              name="username"
              value={state.username}
              onChange={handleInputChange}
            />
            <input
              className="input w-full"
              required
              type="password"
              placeholder="password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
            />
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
          <div>
            <p>
              Already have an account?
              <Link
                to="/sign-in"
                className="text-sky-400 text-small-semibold ml-1"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
