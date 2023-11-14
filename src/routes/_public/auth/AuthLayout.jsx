import { Navigate, Outlet } from "react-router-dom";
import { useLogto } from "@logto/react";

export default function AuthLayout() {
  const { isAuthenticated } = useLogto();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/dashboard" />
      ) : (
        <div className="flex h-screen ">
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            src="/images/side-img.svg"
            alt="logo"
            className="hidden xl:block object-cover h-screen w-1/2 bg-no-repeat"
          />
        </div>
      )}
    </>
  );
}
