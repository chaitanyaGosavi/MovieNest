import React, { useState } from "react";
import UserRating from "./UserRating";

const RecentWatchedMovieCard = ({
  selectedMovie,
  onAddMovieClick,
  watchedMovies,
}) => {
  const [userRating, setUserRating] = useState(0);
  return (
    <li
      className="flex flex-col text-lg h-[100%] w-full gap-10 p-5 overflow-y-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100  
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-violet-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-violet-500"
      key={selectedMovie.imdbID}
    >
      <div className="hover:bg-[#54545448] flex flex-col md:flex-row gap-5 hover:cursor-pointer flex-2">
        <img className="w-[30%]" src={selectedMovie.Poster} alt="Poster" />
        <span className="flex flex-col gap-y-5">
          <h3 className="text-lg md:text-3xl">{selectedMovie.Title}</h3>
          <span className="flex flex-col md:gap-2 text-[12px] md:text-lg">
            <span>🗓️ : {selectedMovie.Released}</span>
            <span>⭐ : {selectedMovie.imdbRating}</span>
            <span>⏳ : {selectedMovie.Runtime}</span>
            <span>🍿 : {selectedMovie.Genre}</span>
          </span>
        </span>
      </div>
      <UserRating
        maxRating={10}
        userRating={userRating}
        setUserRating={setUserRating}
        onAddMovieClick={onAddMovieClick}
        selectedMovie={selectedMovie}
        watchedMovies={watchedMovies}
      />
      <div className="flex-1 text-[12px] md:text-lg">
        <span className="flex flex-col gap-2">
          <span>{selectedMovie.Plot}</span>
          <span>🎬 Directed By : {selectedMovie.Director}</span>
          <span>🎭 Actors : {selectedMovie.Actors}</span>
        </span>
      </div>
    </li>
  );
};

export default RecentWatchedMovieCard;
