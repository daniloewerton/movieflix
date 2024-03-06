import { useEffect, useState } from 'react';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requestBackEnd } from 'util/authentication';
import { SpringPage } from 'types/SpringPage';
import { Movie } from 'types/Movie';
import { Link } from 'react-router-dom';

export default function MovieList() {
  const [page, setPage] = useState<SpringPage<Movie>>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: 0,
        size: 10,
      },
    };

    requestBackEnd(params).then((response) => {
      setPage(response.data);
    });
  }, []);

  return (
    <div className="list-container">
      <h1>Tela listagem de filmes</h1>
      {page?.content.map((movie) => {
        return (
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>Acessar filme: {movie.title}</Link>
          </div>
        );
      })}
      ;
    </div>
  );
}
