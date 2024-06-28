// src/components/CharacterDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

const characters = [
  {
    id: 1,
    name: "Spider-Man",
    description: "A superhero with spider-like abilities.",
    comics: ["Amazing Spider-Man #1", "Spectacular Spider-Man #2"],
  },
  {
    id: 2,
    name: "Iron Man",
    description: "A billionaire with a powerful suit of armor.",
    comics: ["Iron Man #1", "Avengers #3"],
  },
  {
    id: 3,
    name: "Captain America",
    description: "A super-soldier from World War II.",
    comics: ["Captain America #1", "Avengers #4"],
  },
];

const CharacterDetails = () => {
  const { id } = useParams();
  const character = characters.find((char) => char.id === parseInt(id));

  if (!character) {
    return <div>Character not found</div>;
  }

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <h3>Comics</h3>
      <ul>
        {character.comics.map((comic, index) => (
          <li key={index}>{comic}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetails;
