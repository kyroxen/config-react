import Button from "@/components/Button.jsx";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const gotoSignIn = () => {
    return navigate("/sign-in");
  };

  const gotoSignUp = () => {
    return navigate("/sign-up");
  };

  return (
    <div className="w-screen h-screen bg-lime-100">
      <div className="flex text-center items-center justify-center bg-lime-100  pt-10">
        <p className="text-8xl">Hello!</p>
      </div>
      <div className="flex flex-col justify-center items-center my-auto h-1/2">
        <div className="flex flex-row justify-center items-center gap-3 p-10 bg-yellow-100 drop-shadow rounded-2xl">
          Please <Button onClick={gotoSignIn}>Sign in</Button> or{" "}
          <Button onClick={gotoSignUp}>Sign up</Button>
        </div>
      </div>
    </div>
  );
}
