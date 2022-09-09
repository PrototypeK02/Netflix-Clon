import React from "react";
import Main from "../components/Main";
import MoviesRow from "../components/MoviesRow";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <Main />
      <MoviesRow title="Popular" url={requests.requestPopular} />
      <MoviesRow title="Top Rated" url={requests.requestTopRated} />
      <MoviesRow title="Up Coming" url={requests.requestUpcoming} />
      <MoviesRow title="Trending" url={requests.requestTrending} />
      <MoviesRow title="Horror" url={requests.requestHorror} />
    </div>
  );
};

export default Home;
