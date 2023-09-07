

function Movie(props){
    const {
            Title,
            Year,
            imdbID: id,
            Type,
            Poster
            }  = props;

            return(
              <div className="card movie" id={id}>
                <div classNameName="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={Poster}/>
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{Title}</span>
                  <p>{Year} <span className="right">{Type}</span></p>
                </div>
              </div>
            )
}

export default Movie;