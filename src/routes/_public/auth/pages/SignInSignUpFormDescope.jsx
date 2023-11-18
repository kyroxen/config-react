import { Link, Navigate } from "react-router-dom";
import { ChevronLeftSquareIcon } from "lucide-react";
import TooltipContainer from "@/components/TooltipContainer.jsx";
import { Descope, useSession, useUser } from "@descope/react-sdk";

export default function SignInSignUpFormDescope() {
  const { isAuthenticated } = useSession();
  const { isUserLoading } = useUser();

  return (
    <>
      {isAuthenticated && !isUserLoading && <Navigate to="/dashboard" />}
      {!isAuthenticated && (
        <div className="h-screen flex flex-1 justify-center items-center flex-col py-10">
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
            <div className="p-8 space-y-4 shadow text-center">
              <Descope
                flowId="sign-up-or-in"
                theme="light"
                debug={true}
                onSuccess={(e) => {
                  console.log(e.detail.user.name);
                }}
                onError={(err) => {
                  console.log("Error!", err);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
