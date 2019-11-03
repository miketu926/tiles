import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import {
  MainWrapper, Board,
  InputWrapper, Selection,
  Validity, ClearWrapper
} from './MainTilesStyles';

function MainTiles() {
  const testBoard1 = require('../util/test_board_1.json').board;
  const testBoard2 = require('../util/test_board_2.json').board;
  const dictionary = require('../util/dictionary.json').words;
  const set = new Set(dictionary);

  const [tiles, setTiles] = useState([]);
  const [selectedTiles, setSelectedTiles] = useState([]);
  const [wordFound, setWordFound] = useState(false);

  const [firstRender, setFirstRender] = useState(false)
  const [renderBoard, setRenderBoard] = useState([]);
  const [clear, setClear] = useState(false);

  useEffect(() => {
    setTiles([...testBoard2])
    if (firstRender) {
      setRenderBoard(tiles.map((letter, i) => {
        return <Tile
          key={i} idx={i}
          letter={letter}
          selectedTiles={selectedTiles}
          setSelectedTiles={setSelectedTiles}
          wordFound={wordFound}
        />
      }));
      setFirstRender(false);
    }

    setFirstRender(true)
    if (set.has(selectedTiles.join("").toLocaleLowerCase())) setWordFound(true);
    if (!set.has(selectedTiles.join("").toLocaleLowerCase())) setWordFound(false);



  }, [selectedTiles, firstRender])

  // const renderBoard = tiles.map((letter, i) => {
  //   return <Tile
  //     key={i} idx={i}
  //     letter={letter}
  //     selectedTiles={selectedTiles}
  //     setSelectedTiles={setSelectedTiles}
  //     wordFound={wordFound}
  //   />
  // })

  const handleClear = e => {
    e.preventDefault();
    console.log("CLICKED")
    setSelectedTiles([])
  }

  return (
    <MainWrapper>
      <Board>{renderBoard}</Board>
      <ClearWrapper onClick={e => handleClear(e)}>
        <div>clear word</div><div>X</div>
      </ClearWrapper>
      <InputWrapper>
        <Selection found={wordFound}>{selectedTiles}</Selection>
        <Validity found={wordFound} />
      </InputWrapper>
    </MainWrapper>
  );
}

export default MainTiles;
