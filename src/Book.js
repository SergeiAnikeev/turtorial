import React from 'react'
import { Title } from './Title';
import { Author } from './Author';

const Book = (props) => {
  //const { image, title, author } = props;
  const clickHandler = () => alert("Hello world!");
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(props.title);
      }}
    >
      <img src={props.image} alt="Book cover" />
      <Title bookTitle={props.title} />
      <Author bookAuthor={props.author} />
      <button type="button" onClick={clickHandler}>
        Reference example
      </button>
    </article>
  );
};

export default Book