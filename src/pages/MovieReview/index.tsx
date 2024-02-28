import ReviewCard from 'components/InputReviewCard';
import './styles.css';
import ShowReview from 'components/ShowReview';

export default function MovieReview() {
  return (
    <div className="review-container">
      <h1>Tela detalhes do filme id: 1</h1>
      <ReviewCard />
      <ShowReview />
    </div>
  );
}
