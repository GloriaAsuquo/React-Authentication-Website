import React, { useEffect, useState } from "react";
import Textfield from "../../Component/Textfield";
import { useNavigate } from "react-router";
import Button from "../../Component/Button";

const ForgottenPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setIsBtnDisabled(!email);
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/auth/reset-password/${email}`);
  };

  return (
    <div className="flex justify-center items-center w-100 h-screen">
      <div className="bg-white p-8 rounded shadow-md h-100 w-100">
        <h2 className="text-2xl font-semibold mb-4">Reset Password</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Textfield
              label={"email"}
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              value={email}
            />
          </div>
          <p className="text-gray-600 mb-4">
            We will send you an email to reset your password.
          </p>
          <Button isDisabled={isBtnDisabled}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default ForgottenPasswordPage;
