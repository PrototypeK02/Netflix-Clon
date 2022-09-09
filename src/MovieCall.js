import axios from "axios";
export const callMovie = (requests, setMovies) => {
  axios(requests.requestPopular || requests)
    .then((res) => {
      setMovies(res.data.results);
    })
    .catch((error) => console.log(error));
};
