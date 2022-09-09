import React, { useEffect, useState, useRef } from "react";
import { callMovie } from "../MovieCall";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";
const MoviesRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
  const [like, setLike] = useState(false);
  const slider = useRef(null);
  useEffect(() => {
    callMovie(url, setMovies);
  }, [url]);

  const slideLeft = () => {
    slider.current.scrollLeft -= 500;
    console.log(slider.current.scrollLeft);
  };

  const slideRight = () => {
    slider.current.scrollLeft += 500;
  };

  return (
    <div>
      <h2 className="text-white md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:flex"
        />
        <div
          ref={slider}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((el, index) => (
            <Movie el={el} like={like} setLike={setLike} key={index} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden right-0 group-hover:flex"
        />
      </div>
    </div>
  );
};

export default MoviesRow;
