export const Author = ({ bookAuthor }) => {
  return (
    // stronger than .css file
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      {bookAuthor}
    </h4>
  );
};