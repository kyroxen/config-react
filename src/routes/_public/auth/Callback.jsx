import { useHandleSignInCallback } from "@logto/react";
import { useNavigate } from "react-router-dom";

export default function Callback() {
  const navigate = useNavigate();
  const { isLoading } = useHandleSignInCallback(() => {
    // Navigate to root path when finished
    console.log("callback");
    return navigate("/dashboard");
  });

  // When it's working in progress
  if (isLoading) {
    return <div>Redirecting...</div>;
  }
}
