import React from "react";
import { useSelector } from "react-redux";
import MovieGrid from "../components/movieGrid/MovieGrid";
import { category } from "../api/tmdbApi";
import translate from "../utils/translations";

export default function WatchList() {
  const wishlist = useSelector((state) => state.wishlist.items);

  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const lang = translate[selectedLanguage];

  const movies = wishlist.filter((item) => item.media_type === "movie");
  const tvShows = wishlist.filter((item) => item.media_type === "tv");

  return (
    <div
      className="container"
      dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
      style={{
        marginTop: "6rem",
        padding: "2rem",
        textAlign: selectedLanguage === "ar" ? "right" : "left",
      }}
    >
      {/* Movies Section */}
      <h2 className="mb-4">{lang.moviesTitle}</h2>
      {movies.length > 0 ? (
        <MovieGrid category={category.movie} items={movies} totalPages={1} />
      ) : (
        <p>{lang.noMovies}</p>
      )}

      {/* TV Shows Section */}
      <h2 className="mb-4 mt-5">{lang.tvShowsTitle}</h2>
      {tvShows.length > 0 ? (
        <MovieGrid category={category.tv} items={tvShows} totalPages={1} />
      ) : (
        <p>{lang.noTvShows}</p>
      )}
    </div>
  );
}
