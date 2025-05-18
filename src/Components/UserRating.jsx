import React, { useState } from "react";
import Star from "./Star";

const UserRating = ({
  maxRating,
  userRating,
  setUserRating,
  onAddMovieClick,
  selectedMovie,
  watchedMovies
}) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const isWatched = watchedMovies.map((item)=> item.imdbID).includes(selectedMovie.imdbID);
  const watchedMovieUserRating = watchedMovies.find((item) => item.imdbID === selectedMovie.imdbID)?.userRating;

  const color = "#fcc419";

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-5 bg-[#54545448] flex-1 rounded-xl">
      {isWatched ? (
        <div>
          <h2>You rated this Movie/Show {watchedMovieUserRating} 🌟</h2>
        </div>
      ) : (
        <>
          <div className="flex gap-2 md:gap-10 items-center justify-center w-full">
            <div className="flex justify-evenly gap-2">
              {Array.from({ length: maxRating }, (_, i) => (
                <Star
                  key={i}
                  color={color}
                  fill={tempRating ? tempRating >= i + 1 : rating >= i + 1}
                  onStarClick={() => handleRating(i + 1)}
                  onStarHoverIn={() => {
                    setTempRating(i + 1);
                  }}
                  onStarHoverOut={() => {
                    setTempRating(0);
                  }}
                />
              ))}
            </div>
            <span style={{ color: color}} className="text-[12px] md:text-[24px]">
              {tempRating || rating || 0}
            </span>
          </div>
          <button
            className="text-white text-[10px] md:text-[16px] bg-violet-500 rounded-md p-0 md:py-1 px-2"
            onClick={() => {
              const newWatchedMovie = {
                imdbID: selectedMovie.imdbID,
                Title: selectedMovie.Title,
                Year: selectedMovie.Year,
                Poster: selectedMovie.Poster,
                imdbRating: Number(selectedMovie.imdbRating),
                Runtime: isNaN(selectedMovie.Runtime.split(" ").at(0)) ? 0:  Number(selectedMovie.Runtime.split(" ").at(0)) ,
                userRating: rating,
              };
              setUserRating(rating);
              onAddMovieClick(newWatchedMovie);
            }}
          >
            Add to Watchlist ➡️
          </button>
        </>
      )}
    </div>
  );
};

export default UserRating;
