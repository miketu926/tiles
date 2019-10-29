import React, { useState, useEffect } from 'react';
import { TileWrapper } from './TileStyles';
import { removeLetter } from '../util/helpful_functions';

function Tile({ idx, letter, selectedTiles, setSelectedTiles, wordFound }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) setSelectedTiles([...selectedTiles, letter]);
    if (!selected) setSelectedTiles(removeLetter(selectedTiles, letter));

    // if (selected) {
    //   let newState = selectedTiles;
    //   newState[idx] = letter;
    //   setSelectedTiles({ ...newState });
    // } else if (!selected) {
    //   let newState = selectedTiles;
    //   newState[idx] = "";
    //   setSelectedTiles({ ...newState })
    // }

  }, [selected])

  return (
    <TileWrapper
      found={wordFound}
      onClick={() => setSelected(!selected)}
    >
      {letter}
    </TileWrapper>
  );
}

export default Tile;
