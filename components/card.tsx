import React from "react";

function Card(props: CardProps) {
  // we can refector this to make it more flexible and reusable
  // depending on the use case
  const { margin, character } = props;

  return (
    <div style={{ bottom: margin }} className="card">
      <img
        style={{ objectFit: "fill", height: "90%", width: "100%" }}
        alt={character.name + " Stunt Man"}
        src={character.url}
      />
      <center>
        <h3>{character.name}</h3>
      </center>
    </div>
  );
}

export default Card;

interface CardProps {
  margin: number;
  character: { name: string; url: string };
}
