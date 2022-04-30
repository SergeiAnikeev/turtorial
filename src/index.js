import ReactDOM from "react-dom";
import React from "react";
import './index.css';

function Booklist() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
      alt="hukl"
      />
      <Title />
      <Author />
    </article>
  );
};

const Title = () => {
  const title = 'I Love You to the Moon and Back'
  return (
    <h1>{title}</h1>
  );
 }

const Author = () => {
  const autor = 'Amelia Hepworth';
  return(
    // stronger than .css file
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      {autor.toUpperCase()}
    </h4>
  )
}

ReactDOM.render(<Booklist />, document.getElementById("root"));