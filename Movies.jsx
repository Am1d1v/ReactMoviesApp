import Movie from "./Movie";

function Movies(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.map((movie, id) => (
        <Movie key={id} {...movie} />
      ))}
    </div>
  );
}

export default Movies;
