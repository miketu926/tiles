import React, { useState, useEffect } from 'react';
import { TileWrapper } from './TileStyles';
import { removeLetter } from '../../util/helpful_functions';

function Tile({ letter, selectedTiles, setSelectedTiles, wordFound, clear, setClear }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) setSelectedTiles([...selectedTiles, letter]);
    if (!selected) setSelectedTiles(removeLetter(selectedTiles, letter));

    if (clear) {
      setSelected(false);
      setClear(false);
    };

  }, [selected, clear])

  return (
    <TileWrapper
      wordFound={wordFound}
      selected={selected}
      onClick={() => setSelected(!selected)}
    >
      {letter}
    </TileWrapper>
  );
}

export default Tile;
