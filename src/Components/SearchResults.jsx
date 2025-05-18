import React from "react";
import SearchResultMovieCard from "./SearchResultMovieCard";

const SearchResults = ({ moviesList, onListItemClick }) => {
  return (
    <div className={`w-full max-h-1/2 md:max-h-full h-full flex flex-col gap-5 overflow-y-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-violet-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-violet-500"
    
    `}>
      <h3 className="text-lg text-start text-[#909090] px-2 ">Moviews matched your search...</h3>
      <ul className="flex flex-col gap-5 justify-center">
        {moviesList.map((movie) => <SearchResultMovieCard movie = {movie} onListItemClick = {onListItemClick}/>)}
      </ul>
    </div>
  );
};

export default SearchResults;
