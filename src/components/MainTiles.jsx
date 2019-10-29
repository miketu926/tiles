import React, { useState, useEffect } from 'react';
import Tile from './Tile'
import { MainWrapper, Board } from './MainTilesStyles'

function MainTiles() {
  const testBoard1 = require('../util/test_board_1.json').board;
  const testBoard2 = require('../util/test_board_2.json').board;
  const dictionary = require('../util/dictionary.json').words;
  const set = new Set(dictionary);

  // const preLoadedState = {
  //   0: '', 1: '', 2: '', 3: '',
  //   4: '', 5: '', 6: '', 7: '',
  //   8: '', 9: '', 10: '', 11: '',
  //   12: '', 13: '', 14: '', 15: ''
  // };

  const [tiles, setTiles] = useState([]);
  // const [selectedTiles, setSelectedTiles] = useState(preLoadedState);
  const [selectedTiles, setSelectedTiles] = useState([]);
  // const [globalPos, setGlobalPos] = useState(0);
  // const [posDiff, setPosDiff] = useState(0);
  const [wordFound, setWordFound] = useState(false);

  useEffect(() => {
    if (set.has(selectedTiles.join("").toLocaleLowerCase())) setWordFound(true);
    if (!set.has(selectedTiles.join("").toLocaleLowerCase())) setWordFound(false);
    setTiles([...testBoard2])
  }, [selectedTiles])

  const renderBoard = tiles.map((letter, i) => {
    return <Tile
      key={i} idx={i}
      letter={letter}
      selectedTiles={selectedTiles}
      setSelectedTiles={setSelectedTiles}
      wordFound={wordFound}
    // globalPos={globalPos}
    // setGlobalPos={setGlobalPos}
    // posDiff={posDiff}
    // setPosDiff={setPosDiff}
    />
  })

  return (
    <MainWrapper>
      <Board>
        {renderBoard}
      </Board>
      {selectedTiles}
      {/* {Object.values(selectedTiles)} */}
      <div>{dictionary}</div>
      <div>ABC</div>
    </MainWrapper>
  );
}

export default MainTiles;
