import Login from "@/components/Site/Auth/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page - Solid SaaS Boilerplate",
  description: "This is Login page for Startup Pro",
  // other metadata
};

const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
