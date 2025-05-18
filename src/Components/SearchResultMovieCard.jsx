import React from "react";

const SearchResultMovieCard = ({ movie, onListItemClick }) => {
  return (
    <li className="flex h-28  w-full gap-10 hover:bg-[#54545448] hover:cursor-pointer p-5" onClick={() => {onListItemClick(movie.imdbID)}}>
      <img className="w-10 md:w-16 h-full" src={movie.Poster} alt="Poster" />
      <span className="flex flex-col justify-between text-ellipsis">
        <h3 className="md:text-xl text-[16px] text-ellipsis">{movie.Title}</h3>
        <span className="text-[12px] md:text-lg">🗓️ : {movie.Year}</span>
      </span>
    </li>
  );
};

export default SearchResultMovieCard;
