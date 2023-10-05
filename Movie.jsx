function Movie(props) {
  const {
    Title: title,
    Year: year,
    imbID: Id,
    Type: type,
    Poster: poster,
  } = props;

  return (
    <div className="card movie" id={Id}>
      <div className="card-image waves-effect waves-block waves-light">
        {poster === "N/A" ? (
          <h2>Not Available</h2>
        ) : (
          <img className="activator" src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {title}
        </span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export default Movie;
