import React, { useState } from "react";
import Textfield from "../../Component/Textfield";
import Button from "../../Component/Button";

function OTPPage() {
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted OTP:", otp);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Enter OTP
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="otp" className="sr-only">
                OTP
              </label>
              <Textfield
                id="otp"
                name="otp"
                type="text"
                autoComplete="off"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Enter OTP"
                value={otp}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Button>Submit OTP</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OTPPage;
