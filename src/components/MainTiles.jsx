import React, { useState, useEffect } from 'react';
import Tile from './Tile'
import { MainWrapper, Board } from './MainTilesStyles'

function MainTiles() {
  const testBoard1 = require('../util/test_board_1.json').board;
  const testBoard2 = require('../util/test_board_2.json').board;
  const dictionary = require('../util/dictionary.json').words;

  const [tiles, setTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);

  useEffect(() => {
    setTiles([...testBoard2])
  }, [])

  const renderBoard = tiles.map((letter, i) => {
    return <Tile
      key={i}
      letter={letter}
      setSelectedTiles={setSelectedTiles}
    />
  })

  return (
    <MainWrapper>
      <Board>
        {renderBoard}
      </Board>
      <div>{selectedTiles}</div>
      <div>{dictionary}</div>
      <div>ABC</div>
    </MainWrapper>
  );
}

export default MainTiles;
