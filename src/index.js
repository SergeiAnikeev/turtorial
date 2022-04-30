import ReactDOM from "react-dom";
import React from "react";

function Booklist() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://m.media-amazon.com/images/P/1501161938.01._SCLZZZZZZZ_SX500_.jpg'
    alt='hukl'
  />
);

const Title = () => <h1>The Seven Husbands of Evelyn Hugo: A Novel</h1>;

const Author = () => <h4>Taylor Jenkins Reid</h4>;

ReactDOM.render(<Booklist />, document.getElementById("root"));
