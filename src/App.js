import './App.css';
import React, { useState } from 'react'
import CharacterListPage from './pages/CharacterListPage'
import { CharacterListContext } from './contexts/CharacterContext';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [characterList, setCharacterList] = useState(null)
  const [nextURL, setNextURL] = useState(null)
  const [previousURL, setPreviousURL] = useState(null)

  return (
    <div>

      <CharacterListContext.Provider 
      value= {{ 
        characterList, setCharacterList, 
        nextURL, setNextURL,
        previousURL, setPreviousURL,
        searchTerm, setSearchTerm
        }} >  

              <CharacterListPage />

      </CharacterListContext.Provider>

    </div>
  );
}

export default App;
