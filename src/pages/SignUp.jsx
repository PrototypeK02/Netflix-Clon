import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const SignUp = () => {
  const { user, signUp } = UserAuth();
  const [logUser, setLogin] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(logUser.email, logUser.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/783900b6-ccf8-4d88-af02-601a6a8b4231/AR-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BG"
        />
        <div className="bg-black/60 w-full h-screen top-0 fixed"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] bg-black/75 mx-auto text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl fond-bold">Sign Up</h1>
              {error && <p className="p-3 bg-red-600 my-2">{error}</p>}
              <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                  value={logUser.email}
                  onChange={(e) =>
                    setLogin({ ...logUser, [e.target.name]: e.target.value })
                  }
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  value={logUser.password}
                  onChange={(e) =>
                    setLogin({ ...logUser, [e.target.name]: e.target.value })
                  }
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold">
                  Sign Up
                </button>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    Already subscribed to Netflix?
                  </span>{" "}
                  <Link to="/login"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
