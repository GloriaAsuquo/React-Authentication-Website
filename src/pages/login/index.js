import React, { useState } from "react";
import { Link } from "react-router-dom";
import Textfield from "../../Component/Textfield";
import Button from "../../Component/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const handleLogin = () => {
    console.log("Logging in with email:", email, "and password:", password);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-[80%] h-[70vh] ">
        <h2 className="text-2xl font-semibold mb-6">CUSTOMER LOGIN</h2>
        <form onSubmit={handleLogin}>
          <Textfield
            label={"Email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type={"email"}
          />
          <Textfield
            label={"Password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type={"password"}
          />

          <Button isDisabled={isBtnDisabled}>login</Button>
        </form>
        <div className="mt-4 text-center">
          <Link
            to="/auth/reset-password"
            className="text-blue-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <div className="mt-2 text-center">
          <p>
            Don't have an account?{" "}
            <Link to="/auth/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
