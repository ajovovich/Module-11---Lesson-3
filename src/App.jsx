//Task 4: Integrating Components and Updating the User Interface
import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import './App.css'; // Importing CSS file

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  const handleCharacterClick = (id) => {
    setSelectedCharacterId(id);
  };

  return (
    <div className="app-container">
      <h1>Marvel Characters</h1>
      <div className="content">
        <CharacterList onCharacterClick={handleCharacterClick} />
        <CharacterDetail characterId={selectedCharacterId} />
      </div>
    </div>
  );
};

export default App;
