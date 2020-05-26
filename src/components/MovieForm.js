import React, { useState } from 'react';
import axios from 'axios';

function MovieForm() {
  // const [title, setTitle] = useState('');
  // const [poster, setPoster] = useState('');
  // const [comment, setComment] = useState('');
  const [values, setValues] = useState({
    title: '', comment: '', poster: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies';
    axios.post(url, values)
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  const handleChange = (event) => {
    // 1. De quelles infos j'ai besoin pour modifier l'objet values ?
    //    -> le "name" et la "value" de l'input (event.target)
    const { name, value } = event.target;
    // 2. Avant de mettre à jour values, je "calcule" un nouvel objet
    // Avant { title: 'Ava', poster: '', comment: '' }
    // const newValues = { ...values };
    // newValues[name] = value;
    const newValues = { ...values, [name]: value };

    // 3. Mise à jour de values

    // a. écriture classique => je passe la nouvelle valeur
    setValues(newValues);

    // b. écriture "callback"
    // setValues((oldValues) => ({ ...oldValues, [name]: value }));

  };

  const { title, comment, poster } = values;
  return (
    <div className="MovieForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>title</label>
        <input
          id='title'
          name='title'
          onChange={handleChange}
          value={title}
        />
        <label htmlFor='poster'>poster</label>
        <input
          id='poster'
          name='poster'
          type='url'
          onChange={handleChange}
          value={poster}
        />
        <label htmlFor='comment'>comment</label>
        <textarea
          id='comment'
          name='comment'
          onChange={handleChange}
          value={comment}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default MovieForm;