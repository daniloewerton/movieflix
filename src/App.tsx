import './assets/styles/custom.scss';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginCard from 'pages/LoginCard';
import Navbar from 'components/Navbar';
import MovieList from 'pages/MovieList';
import MovieReview from 'pages/MovieReview';

function App() {

  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route path="/" exact>
          <LoginCard />
        </Route>
        <Route path="/movies" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movieId" exact>
          <MovieReview />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
