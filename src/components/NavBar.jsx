import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();

  return (
    <div className="flex items-center justify-between p-4 z-[100] absolute w-full">
      {console.log(user)}
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      <div>
        <Link to={user ? "/account" : "/login"}>
          <button className="pr-4 cursor-pointer text-white">
            {!user ? "Sign In" : "Account"}
          </button>
        </Link>

        <Link to={!user && "/signup"}>
          <button
            onClick={() => {
              user && logOut();
            }}
            className="bg-red-600 px-4 py-2 rounded cursor-pointer text-white"
          >
            {!user ? "Sign Up" : "Log Out"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
