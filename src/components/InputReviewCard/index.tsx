import './styles.css';

export default function InputReviewCard() {
  return (
    <div className="review-card-container">
      <div className="card review-card">
        <input
          type="text"
          name=""
          value=""
          placeholder="Deixe sua avaliação aqui"
        ></input>
        <button className="btn btn-primary">salvar avaliação</button>
      </div>
    </div>
  );
}
