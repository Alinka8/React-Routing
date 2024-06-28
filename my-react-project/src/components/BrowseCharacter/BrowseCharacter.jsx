import React from "react";
import { Link } from "react-router-dom";

const characters = [
  { id: 1, name: "Spider-Man", thumbnail: "spiderman.jpg" },
  { id: 2, name: "Iron Man", thumbnail: "ironman.jpg" },
  { id: 3, name: "Captain America", thumbnail: "captainamerica.jpg" },
];

const BrowseCharacters = () => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <Link to={`/character-details/${character.id}`}>
            <h3>{character.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BrowseCharacters;
