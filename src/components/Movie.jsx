import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { doc, arrayUnion, updateDoc } from "firebase/firestore";

const Movie = ({ el }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();
  const movieID = doc(db, "users", `${user?.email}`);
  const saveMovie = async () => {
    if (user) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: el.id,
          title: el.title,
          img: el.backdrop_path,
        }),
      });
    } else {
      alert("Please log in first");
    }
  };
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`}
        alt={el.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <div onClick={() => saveMovie()}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-400" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-400" />
          )}
        </div>
        <p className="text-xs md:text-sm flex justify-center items-center font-bold h-full">
          {el.title}
        </p>
      </div>
    </div>
  );
};

export default Movie;
