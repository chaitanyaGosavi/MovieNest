import React, { useEffect, useState } from "react";
import RecentWatchedMovieCard from "./RecentWatchedMovieCard";
import LoadingCmp from "./LoadingCmp";
import { spiral } from "ldrs";
import WatchedMoviesList from "./WatchedMoviesList";

const RecentMovieList = ({
  selectedId,
  WatchedList,
  AvgImdbRating,
  AvgUserRating,
  AvgRuntime,
  KEY,
  watchedMovies,
  setWatchedMovies,
}) => {
  spiral.register();
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isDetailsLoading, setIsDetailsLoading] = useState(false);

  const {} = selectedMovie;

  useEffect(() => {
    async function loadMovieDetails(id) {
      setIsDetailsLoading(true);
      const resMovieDetails = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
      );
      const resMovieDetailsData = await resMovieDetails.json();
      setSelectedMovie(resMovieDetailsData);
      setIsDetailsLoading(false);
    }
    loadMovieDetails(selectedId);
  }, [selectedId]);

  return (
    <div className="flex flex-col w-full h-full gap-5">
      <div className="flex flex-col w-full h-20 p-2 justify-between items-center bg-violet-500">
        <h3 className="text-[16px] md:text-[18px] text-start text-[#f6f5ed] px-2">
          Your watched summary..
        </h3>
        <span className="flex gap-2 text-[14px] md:text-[16px]">
          <span>🎞️ : {WatchedList}</span>
          <span>⭐ : {AvgImdbRating}</span>
          <span>✨ : {AvgUserRating}</span>
          <span>⏳ : {AvgRuntime}</span>
        </span>
      </div>
      {isDetailsLoading ? (
        <LoadingCmp type="Spiral" />
      ) :( selectedId ? (
        <RecentWatchedMovieCard
          selectedMovie={selectedMovie}
          onAddMovieClick={(movie) => {
            setWatchedMovies([...watchedMovies, movie]);
          }}
          watchedMovies = {watchedMovies}
        />
      ) : (
        <WatchedMoviesList watchedMovies={watchedMovies} setWatchedMovies={setWatchedMovies}/>
      ))}
    </div>
  );
};

export default RecentMovieList;
