import React, { useState } from "react";

export default function Textfield({ label, value, onChange, type }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mb-4 ">
      <label htmlFor="email" className="block text-gray-600 capitalize">
        {label}
      </label>
      <div className="flex items-center w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none">
        <input
          type={showPassword ? "text" : type}
          className="w-full focus:outline-none focus:border-none"
          value={value}
          onChange={onChange}
          required
        />
        {type === "password" && (
          <div onClick={() => setShowPassword(!showPassword)} className="">
            <h1 className="cursor-pointer">{showPassword ? "hide" : "show"}</h1>
          </div>
        )}
      </div>
    </div>
  );
}

// PROPS
