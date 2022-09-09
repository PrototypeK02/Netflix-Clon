import React from "react";
import SavedMovies from "../components/SavedMovies";

const Account = () => {
  return (
    <div className="w-full text-white">
      <img
        className="w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/701eec50-4b87-4dc0-9d00-b0f54025dc36/783900b6-ccf8-4d88-af02-601a6a8b4231/AR-en-20220905-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="BG"
      />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-[400px]"></div>
      <div className="absolute top-[20%] p-4 md:p-8">
        <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
      </div>
      <SavedMovies />
    </div>
  );
};

export default Account;
