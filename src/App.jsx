import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import SearchResults from "./Components/SearchResults";
import RecentMovieList from "./Components/RecentMovieList";
import ListBox from "./Components/ListBox";
import { quantum } from "ldrs";

import ErrorPage from "./Components/ErrorPage";
import LoadingCmp from "./Components/LoadingCmp";

function App() {
  const KEY = "9f1bcfa9";
  quantum.register();

  const [movies, setMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [movieListLoaded, setMovieListLoaded] = useState(true);
  const [isMovieListLoading, setIsMovieListLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const average = (arr) =>{
    if (arr) {
      return arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);
    }else{
      return 0
    }
  }

  const ItemsFound = movies.length;
  const WatchedList = watchedMovies?.length;
  const AvgImdbRating = average(watchedMovies?.map((movie) => movie.imdbRating))?.toFixed(2);
  const AvgUserRating = average(watchedMovies?.map((movie) => movie.userRating))?.toFixed(2);
  const AvgRuntime = average(watchedMovies?.map((movie) => movie.Runtime))?.toFixed(2);

  useEffect(() => {
    async function loadMovieList() {
      setIsMovieListLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
      );
      const resData = await res.json();
      if (resData.Response === "True") {
        setMovies(resData.Search);
        setIsMovieListLoading(false);
        setMovieListLoaded(true);
      } else {
        setMovies([]);
        setIsMovieListLoading(false);
        setMovieListLoaded(false);
      }
    }
    if (query.length > 3) {
      loadMovieList();
    }
  }, [query]);

  const handleMovieListItemClick = (id) => {
    setSelectedId((prevId) => (id === prevId ? null : id));
  };

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col gap-10 overflow-y-scroll overflow-x-hidden">
      <NavBar ItemsFound={ItemsFound} query={query} setQuery={setQuery} />
      <div className="w-screen h-[80vh] max-h-[80vh] bg-gray-900 flex flex-col gap-10">
        <div className="w-[70%] h-full flex flex-col md:flex-row justify-between mx-auto gap-10">
          <ListBox>
            {isMovieListLoading ? (
              <LoadingCmp type="Quantum" />
            ) : movieListLoaded ? (
              <SearchResults
                moviesList={movies}
                onListItemClick={handleMovieListItemClick}
              />
            ) : (
              <ErrorPage />
            )}
          </ListBox>
          <ListBox>
            <RecentMovieList
              selectedId={selectedId}
              WatchedList={WatchedList}
              AvgImdbRating={AvgImdbRating}
              AvgUserRating={AvgUserRating}
              AvgRuntime={AvgRuntime}
              KEY={KEY}
              watchedMovies = {watchedMovies}
              setWatchedMovies = {setWatchedMovies}
            />
          </ListBox>
        </div>
      </div>
    </div>
  );
}

export default App;
