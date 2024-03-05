import './styles.css';
import MovieImage from 'assets/images/movie-image.svg';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestBackendLogin, saveLocalStorageData } from 'util/authentication';

export default function LoginCard() {
  type FormData = {
    username: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    console.log(formData);
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        saveLocalStorageData(response.data);
        console.log('SUCESSO', response);
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', error);
      });
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            {hasError && (
              <div className="alert alert-danger">Erro ao efetuar o login</div>
            )}
            <div className="invalid-feedback d-block">
              {errors.username?.message}
            </div>
            <input
              {...register('username', {
                required: 'Campo obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Email inválido',
                },
              })}
              type="text"
              name="username"
              placeholder="Email"
            ></input>
            <div className="invalid-feedback d-block">
              {errors.password?.message}
            </div>
            <input
              {...register('password', {
                required: 'Campo obrigatório',
              })}
              type="password"
              name="password"
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
