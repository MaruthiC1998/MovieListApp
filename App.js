import CreateMovies from './CreateMovies';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MovieDetails from './MovieDetails';
import FileNotFound from './FileNotFound';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <CreateMovies />
          </Route>

          <Route exact path="/movie:id">
            <MovieDetails />
          </Route>

          <Route path="*">
            <FileNotFound />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
