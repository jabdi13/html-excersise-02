import React from 'react';
import '../styles/components/Entry.css';

const Entry = ({ date, author, comments, title, body }) => {
  return (
    <>
      <div className="Entry">
        <div className="Entry-metadata">
          <p>El {date}</p>
          <p>
            Por <a href="">{author}</a>
          </p>
          <small>{comments} comentarios</small>
        </div>
        <div className="Entry-content">
          <h1>{title}</h1>
          <p>
            {body}
          </p>
          <a href="">Leer más</a>
        </div>
      </div>
    </>
  );
};

export default Entry;