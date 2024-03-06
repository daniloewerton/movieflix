import Star from 'assets/images/star.svg';

import './styles.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { requestBackEnd } from 'util/authentication';
import { Review } from 'types/Review';

export default function ShowReview() {
  type UrlParams = {
    movieId: string;
  };

  const { movieId } = useParams<UrlParams>();
  const [review, setReview] = useState<Review[]>();

  useEffect(() => {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackEnd(request).then((response) => {
      setReview(response.data);
    });
  }, [movieId]);

  return (
    <>
      {review?.map((review) => {
        return (
          <div className="main-show-review">
            <div className="show-review-container card">
              <div className="review">
                <img src={Star} alt="start" />
                <span>{review.user.name}</span>
              </div>

              <div className=" box-review">
                <div className="user-review">
                  <span>{review.text}</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
