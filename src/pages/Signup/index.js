import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Textfield from "../../Component/Textfield";
import Button from "../../Component/Button";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [passwordNotMatch, setpasswordNotMatch] = useState(false);
  const [userExist, setUserExist] = useState(false);

  useEffect(() => {
    if (passwordNotMatch) {
      setTimeout(() => {
        setpasswordNotMatch(false);
      }, 2000);
    }

    if (userExist) {
      setTimeout(() => {
        setUserExist(false);
      }, 2000);
    }
  }, [passwordNotMatch, userExist]);

  //

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== conPassword) {
      setpasswordNotMatch(true);
    }

    // password !== conPassword && setpasswordNotMatch(true);

    const userData = {
      firstName,
      lastName,
      email,
      password,
    };

    const existingUsers = JSON.parse(localStorage.getItem("usersInfo"));
    let usersArr = existingUsers ? existingUsers : [];

    const userExist = usersArr.some((user) => user.email === userData.email);

    if (userExist) {
      setUserExist(true);
    } else {
      usersArr.push(userData);
      localStorage.setItem("usersInfo", JSON.stringify(usersArr));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" p-8 rounded shadow-md w-80 sm:w-[80%]  bg-white">
        <h2 className="text-2xl font-semibold mb-4">CREATE ACCOUNT</h2>
        {passwordNotMatch && (
          <small className="text-red-500 font-semibold uppercase">
            password do not match
          </small>
        )}
        {userExist && (
          <small className="text-red-500 font-semibold uppercase">
            an account with email address {email} already exists
          </small>
        )}
        <form onSubmit={handleSignup} className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Textfield
              label={"firstname"}
              onChange={(e) => setFirstName(e.target.value)}
              type={"text"}
              value={firstName}
            />
            <Textfield
              label={"lastname"}
              onChange={(e) => setLastName(e.target.value)}
              type={"text"}
              value={lastName}
            />
          </div>
          <Textfield
            label={"email"}
            onChange={(e) => setEmail(e.target.value)}
            type={"email"}
            value={email}
          />
          <Textfield
            label={"password"}
            onChange={(e) => setPassword(e.target.value)}
            type={"password"}
            value={password}
          />
          <Textfield
            label={"confirm password"}
            onChange={(e) => setConPassword(e.target.value)}
            type={"password"}
            value={conPassword}
          />

          <Button size="medium">Sign Up</Button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link to="/auth" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
