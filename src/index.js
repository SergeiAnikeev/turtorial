import ReactDOM from "react-dom";
import React from "react";
import './index.css';

//setup vars
const firstBook = {
  image: "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  title: "I Love You to the Moon and Back",
  autor: "Amelia Hepworth"
};

const secondBook = {
  image:
    "https://images-na.ssl-images-amazon.com/images/I/51x8pmqjY0L._SX376_BO1,204,203,200_.jpg",
  title: "Oh, the Places You'll Go!",
  autor: "Dr. Seuss",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        image={firstBook.image}
        title={firstBook.title}
        author={firstBook.autor}
      />
      <Book
        image={secondBook.image}
        title={secondBook.title}
        author={secondBook.autor}
      />
    </section>
  );
};

const Book = ({ image, title, author }) => {
  //const { image, title, author } = props;
  return (
    <article className="book">
      <img src={image} alt="Book cover" />
      <Title bookTitle={title} />
      <Author bookAuthor={author} />
    </article>
  );
};

const Title = ({ bookTitle }) => {
  return <h1>{bookTitle}</h1>;
};

const Author = ({ bookAuthor }) => {
  return (
    // stronger than .css file
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      {bookAuthor}
    </h4>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));