import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import {
  MainWrapper, Board,
  InputWrapper, Selection,
  Validity, ClearWrapper,
  ClearWord, ClearX, InnerX
} from './MainTilesStyles';

function MainTiles() {
  const testBoard1 = require('../util/test_board_1.json').board;
  const testBoard2 = require('../util/test_board_2.json').board;
  const dictionary = require('../util/dictionary.json').words;
  const set = new Set(dictionary);

  //set initial board state with testBoard1 or testBoard2
  const [tiles] = useState([...testBoard2]);
  const [renderBoard, setRenderBoard] = useState([]);

  const [selectedTiles, setSelectedTiles] = useState([]);
  const [wordFound, setWordFound] = useState(false);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    setRenderBoard(tiles.map((letter, i) => {
      return <Tile
        key={i} idx={i}
        letter={letter}
        selectedTiles={selectedTiles}
        setSelectedTiles={setSelectedTiles}
        wordFound={wordFound}
        clear={clear}
        setClear={setClear}
      />
    }));

    if (set.has(selectedTiles.join("").toLowerCase())) setWordFound(true);
    if (!set.has(selectedTiles.join("").toLowerCase())) setWordFound(false);

  }, [selectedTiles, wordFound])

  const handleClear = e => {
    e.preventDefault();
    setClear(true);
    setSelectedTiles([]);
  }

  return (
    <MainWrapper>
      <Board>{renderBoard}</Board>
      <ClearWrapper onClick={e => handleClear(e)}>
        <ClearWord>clear word</ClearWord>
        <ClearX>
          <InnerX>X</InnerX>
        </ClearX>
      </ClearWrapper>
      <InputWrapper>
        <Selection found={wordFound}>{selectedTiles}</Selection>
        <Validity found={wordFound} />
      </InputWrapper>
    </MainWrapper>
  );
}

export default MainTiles;
