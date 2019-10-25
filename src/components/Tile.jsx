import React, { useState, useEffect } from 'react';
import { TileWrapper } from './TileStyles';

function Tile({ letter }) {
  const [selected, setSelected] = useState(false);

  return (
    <TileWrapper>
      {letter}
    </TileWrapper>
  );
}

export default Tile;