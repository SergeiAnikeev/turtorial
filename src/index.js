import ReactDOM from "react-dom";
import React from "react";
import './index.css';

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg"
    alt="hukl"
  />
);

const Title = () => <h1>I Love You to the Moon and Back</h1>;

const Author = () => <h4>Amelia Hepworth</h4>;

ReactDOM.render(<Booklist />, document.getElementById("root"));
