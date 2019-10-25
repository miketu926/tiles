import React, { useState, useEffect } from 'react';
const testBoard1 = require('../util/test_board_1.json').board;
const testBoard2 = require('../util/test_board_2.json').board;

function MainTiles() {
  const [tiles, setTiles] = useState([])

  return (
    <div>Main</div>
  );
}

export default MainTiles;
