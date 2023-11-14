import Button from "@/components/Button.jsx";
import { useNavigate } from "react-router-dom";
import { useLogto } from "@logto/react";

export default function Home() {
  const navigate = useNavigate();
  const { signIn, isAuthenticated } = useLogto();
  const gotoSignIn = () => {
    signIn("http://localhost:5173/callback").then((r) =>
      console.log("Signed in! ", r),
    );
  };

  const gotoSignUp = () => {
    return navigate("/sign-up");
  };

  return (
    <div className="flex w-screen h-screen bg-gradient-saturated font-mono text-2xl">
      <div className="flex text-center m-auto flex-row justify-center items-center gap-3 px-24 py-16 bg-black text-white shadow-md border-2">
        <Button
          className="bg-black text-stone-100 hover:text-blue-400 hover:bg-black font-bold border-none"
          onClick={gotoSignIn}
        >
          Sign in
        </Button>{" "}
        or{" "}
        <Button
          className="bg-black text-white hover:text-pink-400 hover:bg-black font-bold border-none"
          onClick={gotoSignUp}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}
