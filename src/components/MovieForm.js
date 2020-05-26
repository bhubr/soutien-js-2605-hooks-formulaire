import React, { useState } from 'react';
import axios from 'axios';

function MovieForm() {
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const movieInfos = { title: title, poster: poster, comment: comment };
    const url = 'https://post-a-form.herokuapp.com/api/movies';
    axios.post(url, movieInfos)
      .then(res => res.data)
      .then(data => console.log(data))
      .catch(err => console.error(err));

  };
  return (
    <div className="MovieForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>title</label>
        <input
          id='title'
          name='title'
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <label htmlFor='poster'>poster</label>
        <input
          id='poster'
          name='poster'
          type='url'
          onChange={(event) => setPoster(event.target.value)}
          value={poster}
        />
        <label htmlFor='comment'>comment</label>
        <textarea
          id='comment'
          name='comment'
          onChange={(event) => setComment(event.target.value)}
          value={comment}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default MovieForm;