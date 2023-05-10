import "./Card.css";

export default function Card(props) {
  const cardStyles = {
    backgroundColor: props.color || "#F00",
    borderColor: props.color || "#F00",
  };

  return (
    <div className="Card" style={cardStyles}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
}
