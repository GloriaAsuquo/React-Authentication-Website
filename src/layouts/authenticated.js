import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Authenticated() {
  const user = localStorage.getItem("user");

  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    if (!user) {
      navigate("/auth");
    }
  }, []);

  return (
    <div>
      <h1>authenticated</h1>
    </div>
  );
}
