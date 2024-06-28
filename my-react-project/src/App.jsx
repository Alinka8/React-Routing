// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import BrowseCharacters from "./components/BrowseCharacter/BrowseCharacter";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import Comics from "./components/ComicsComponent/ComicsComponent";
import NotFound from "./components/NotFound/NotFound";
import Navigation from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/browse-characters" element={<BrowseCharacters />} />
        <Route path="/character-details/:id" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
