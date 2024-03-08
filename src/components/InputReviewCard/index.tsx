import { useForm } from 'react-hook-form';
import './styles.css';
import { useState } from 'react';
import { requestBackEnd } from 'util/authentication';
import { AxiosRequestConfig } from 'axios';

type Props = {
  movieId: string;
};

type FormData = {
  text: string;
  movieId: number;
};

export default function InputReviewCard({ movieId }: Props) {
  const [formContent, setFormContent] = useState<FormData>();

  const { register, handleSubmit, setValue } = useForm<FormData>();

  const handleComment = (formData: FormData) => {
    setFormContent(formData);
    const request: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      withCredentials: true,
      data: {
        ...formData,
        movieId,
      },
    };
    requestBackEnd(request).then((response) => {
      setValue('text', '');
    });
  };

  return (
    <form onSubmit={handleSubmit(handleComment)}>
      <div className="review-card-container">
        <div className="card review-card">
          <input
            {...register('text')}
            type="text"
            name="text"
            placeholder="Deixe sua avaliação aqui"
          ></input>
          <button className="btn btn-primary">salvar avaliação</button>
        </div>
      </div>
    </form>
  );
}
