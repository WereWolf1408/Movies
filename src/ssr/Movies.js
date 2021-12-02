import React from 'react';

export const Movies = (props) => {
  let movies = [];

  if (typeof window !== 'undefined') {
    // код, который выполнится только в браузере
    movies = window?.initial_state?.movies;
  } else {
    // код, который выполнится на сервере
    movies = props.movies;
  }
  return (
    <div className={'moview-item'}>
      <h1>Movies</h1>
      {movies &&
        movies.map((item, index) => {
          return (
            <div key={index}>
              <span>{item.id}</span>
              <span>{item.title}</span>
              <span>{item.tagline}</span>
              <span>{item.vote_average}</span>
              <span>{item.vote_count}</span>
              <span>{item.release_date}</span>
              <span>
                <img src={item.poster_path} alt="" />
              </span>
              <span>{item.overview}</span>
              <span>{item.budget}</span>
              <span>{item.revenue}</span>
              <span>{item.genres}</span>
              <span>{item.runtime}</span>
            </div>
          );
        })}
    </div>
  );
};
