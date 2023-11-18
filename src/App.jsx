import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

import ErrorPage from "./error-page.jsx";
import Home from "./routes/_public/pages/Home.jsx";
import PublicLayout from "./routes/_public/PublicLayout.jsx";
import RootLayout from "./routes/_private/RootLayout.jsx";
import Dashboard from "@/routes/_private/dashboard/Dashboard.jsx";
import SignInSignUpFormDescope from "@/routes/_public/auth/pages/SignInSignUpFormDescope.jsx";
import { AuthProvider } from "@descope/react-sdk";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<PublicLayout />}>
        <Route path="/" index="true" element={<Home />}></Route>
        <Route path="/sign-in" element={<SignInSignUpFormDescope />}></Route>
      </Route>
      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Route>
    </Route>,
  ),
);

export default function App() {
  return (
    <AuthProvider projectId="P2XnVKT7Zf17b1dqMOm8dzEhwndn">
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
