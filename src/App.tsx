import './assets/styles/custom.scss';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginCard from 'pages/LoginCard';
import Navbar from 'components/Navbar';
import MovieList from 'pages/MovieList';
import MovieReview from 'pages/MovieReview';
import { useState } from 'react';
import { AuthData } from 'types/AuthData';
import { AuthContext } from 'AuthContext';

function App() {
  const [authContextData, setAuthContextData] = useState<AuthData>({
    authenticated: false,
  });

  return (
    <AuthContext.Provider value={{ authContextData, setAuthContextData }}>
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
    </AuthContext.Provider>
  );
}

export default App;
