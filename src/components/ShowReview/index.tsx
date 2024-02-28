import Star from 'assets/images/star.svg';

import './styles.css';

export default function ShowReview() {
  return (
    <div className="main-show-review">
      <div className="show-review-container card">
        <div className="review">
          <img src={Star} alt="start" />
          <span>Maria Silva</span>
        </div>

        <div className="box-review">
          <div className="user-review">
            <span>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </span>
          </div>
        </div>

        <div className="review">
          <img src={Star} alt="start" />
          <span>Maria Silva</span>
        </div>

        <div className="box-review">
          <div className="user-review">
            <span>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </span>
          </div>
        </div>

        <div className="review">
          <img src={Star} alt="start" />
          <span>Maria Silva</span>
        </div>

        <div className="box-review">
          <div className="user-review">
            <span>
              Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
}
