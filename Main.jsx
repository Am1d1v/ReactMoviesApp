import React from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component {
  state = {
    movies: [],
    loading: true
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=78584b3c&s=matrix")
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false}));
  }

  searchMovies(str, type = "all") {
    this.setState({loading: true})
    fetch(`http://www.omdbapi.com/?apikey=78584b3c&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search || [], loading: false}));
  }

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies.bind(this)} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export default Main;
