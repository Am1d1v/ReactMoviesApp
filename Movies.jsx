import Movie from "./Movie";

function Movies(props) {
  const { movies } = props;

  return (
    <div className="movies">
      {movies.length ? movies.map((movie, id) => (
        <Movie key={id} {...movie} />
      )) : <h2>Not Found</h2>}
    </div>
  );
}

export default Movies;
