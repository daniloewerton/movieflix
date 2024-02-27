import './assets/styles/custom.scss';
import './App.css';
import Navbar from 'components/Navbar';
import LoginCard from 'components/LoginCard';
import MovieList from 'pages/MovieList';

function App() {

  return (
    <>
      <Navbar />
      <MovieList />
    </>
  );
}

export default App;
