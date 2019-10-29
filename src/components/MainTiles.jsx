import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import {
  MainWrapper, Board,
  InputWrapper, Selection,
  Validity
} from './MainTilesStyles';

function MainTiles() {
  const testBoard1 = require('../util/test_board_1.json').board;
  const testBoard2 = require('../util/test_board_2.json').board;
  const dictionary = require('../util/dictionary.json').words;
  const set = new Set(dictionary);

  const [tiles, setTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [wordFound, setWordFound] = useState(false);

  useEffect(() => {
    setTiles([...testBoard2])
    if (set.has(selectedTiles.join("").toLocaleLowerCase())) setWordFound(true);
    if (!set.has(selectedTiles.join("").toLocaleLowerCase())) setWordFound(false);
  }, [selectedTiles])

  const renderBoard = tiles.map((letter, i) => {
    return <Tile
      key={i} idx={i}
      letter={letter}
      selectedTiles={selectedTiles}
      setSelectedTiles={setSelectedTiles}
      wordFound={wordFound}
    />
  })

  return (
    <MainWrapper>
      <Board>{renderBoard}</Board>
      <InputWrapper className='flex-row'>
        <Selection found={wordFound}>{selectedTiles}</Selection>
        <Validity found={wordFound} />
      </InputWrapper>
    </MainWrapper>
  );
}

export default MainTiles;
