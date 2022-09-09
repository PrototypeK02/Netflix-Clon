import React, { useRef, useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { doc, updateDoc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedMovies = () => {
  const [movies, setMovies] = useState([]);
  const slider = useRef(null);
  const { user } = UserAuth();

  const slideLeft = () => {
    slider.current.scrollLeft -= 500;
    console.log(slider.current.scrollLeft);
  };

  const slideRight = () => {
    slider.current.scrollLeft += 500;
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (document) => {
      setMovies(document.data()?.savedMovies);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);
  const deleteShow = async (movieId) => {
    try {
      const result = movies.filter((el) => el.id !== movieId);
      await updateDoc(movieRef, {
        savedMovies: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2 className="text-white md:text-xl p-4">My Shows</h2>
      <div className="relative flex items-center group">
        {movies.length > 6 && (
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:flex"
          />
        )}
        <div
          ref={slider}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((el, index) => (
            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.img}`}
                alt={el.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="text-xs md:text-sm flex justify-center items-center font-bold h-full">
                  {el.title}
                </p>
                <p>
                  <AiOutlineClose
                    className="text-gray-600 top-0 absolute right-2"
                    size={20}
                    onClick={() => deleteShow(el.id)}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
        {movies.length > 6 && (
          <MdChevronRight
            onClick={slideRight}
            size={40}
            className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden right-0 group-hover:flex"
          />
        )}
      </div>
    </div>
  );
};

export default SavedMovies;
