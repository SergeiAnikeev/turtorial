import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

//setup vars
const books = [
  {
    id:1,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id:2,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51x8pmqjY0L._SX376_BO1,204,203,200_.jpg",
    title: "Oh, the Places You'll Go!",
    author: "Dr. Seuss",
  },
  {
    id:3,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/51-PBKJ-vzL._SX329_BO1,204,203,200_.jpg",
    title:
      "Off with My Head",
    author: "Stassi Schroeder"
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book}></Book>
        );
      })}
    </section>
  );
}

const Book = (props) => {
  //const { image, title, author } = props;
  return (
    <article className="book">
      <img src={props.image} alt="Book cover" />
      <Title bookTitle={props.title} />
      <Author bookAuthor={props.author} />
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