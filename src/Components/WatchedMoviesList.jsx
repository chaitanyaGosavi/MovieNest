import React from "react";

const WatchedMoviesList = ({ watchedMovies, setWatchedMovies }) => {
  const handleDeleteMoview = (deleteID) => {
    setWatchedMovies((prevList) =>
      prevList.filter((item) => item.imdbID !== deleteID)
    );
  };
  return (
    <ul
      className="flex flex-col text-lg w-full gap-10 p-5 h-full overflow-y-scroll [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100  
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-violet-500
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-violet-500"
    >
      {watchedMovies.map((movie) => (
        <li className="flex flex-col h-auto w-full gap-2 hover:bg-[#54545448] hover:cursor-pointer p-5 justify-between rounded-lg">
          <div className="flex justify-between gap-2">
            <img
              className="w-10 md:w-16 h-full"
              src={movie.Poster}
              alt="Poster"
            />
            <span className="flex justify-between w-full items-center">
              <h3 className="text-[16px] md:text-xl">{movie.Title}</h3>
              <button
                className="h-8 w-8 p-[2px] hover:bg-gray-900 bg-[#545454c2] rounded-lg"
                onClick={() => {
                  handleDeleteMoview(movie.imdbID);
                }}
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAx0lEQVR4nO2UUQrCMAxA6wWdDmUfenaFiVOZN1B4UuhQNJ1Ntypi318hyaNJWmMymb8BWAJnYA/MFHlz4AC0wEIrnbjEjgtQBeRVLrajVYktwOmhwFu5ILUcjRagFAqJco/Unku12GJnJBS8AuunXZBiVmYI9MiTSQNaGTSKQXhunuamCnk6qcUz05eF+5Q0nZxvLBc9TybknY8uNfeYceVAMcKXWcSId5r5eeR1jLjRLo0gb2JbXQMbTctc3tblTtXiTOZnuQEG7QtfZaLvigAAAABJRU5ErkJggg=="
                  alt="multiply"
                />
              </button>
            </span>
          </div>

          <span className="flex gap-2 text-[12px] md:text-lg">
            <span className="text-[12px] md:text-lg">🗓️ : {movie.Year}</span>
            <span>⭐ : {movie.imdbRating}</span>
            <span>✨ : {movie.userRating}</span>
            <span>⏳ : {movie.Runtime}</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
