import './styles.css';
import MovieImage from 'assets/images/movie-image.svg';

export default function LoginCard() {
  return (
    <div className="main-container">
      <div className="movie-container">
        <img src={MovieImage}></img>
        <div>
          <h3>Avalie Filmes</h3>
          <p>Diga o que você achou do seu filme favorito</p>
        </div>
      </div>

      <div className="login-container">
        <div className="text-container">
          <h3>login</h3>
        </div>

        <div className="form-container">
          <form>
            <input
              className="email-input"
              type="text"
              name=""
              value=""
              placeholder="Email"
            ></input>
            <input
              className="password-input"
              type="text"
              name=""
              value=""
              placeholder="Senha"
            ></input>

            <button type="submit" className="btn btn-primary login-button">
              Fazer Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
