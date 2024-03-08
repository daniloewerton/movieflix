import ReviewCard from 'components/InputReviewCard';
import './styles.css';
import ShowReview from 'components/ShowReview';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { hasAnyRoles, requestBackEnd } from 'util/authentication';
import { Movie } from 'types/Movie';

export default function MovieReview() {
  type UrlParams = {
    movieId: string;
  };

  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackEnd(request).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="review-container">
      <h1>Tela detalhes do filme de id: {movieId}</h1>
      {hasAnyRoles(['ROLE_MEMBER']) && <ReviewCard movieId={movieId} />}
      <ShowReview />
    </div>
  );
}
