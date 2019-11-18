# Tiles

## Table of contents
* [Installation](#installation)
* [Technologies](#technologies)
* [Code Snippets](#code-snippets)

## Installation
  * `npm install` to install all dependencies (React & Styled Components)
  * `npm start` to start localhost:3000 react local server

## Technologies
  * React
    * React hooks (useState, useEffect)
  * Styled Components
  * HTML/CSS

## Code Snippets
Code snippet of react hook useEffect to first render the board and detect from a dictionary set if the word is found.

```javascript
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
```

A snippet of how styling is handled through styled components by passing down props wordFound and selected in order to dynamically style for word validity.

```javascript
  export const TileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Arial, Helvetica, sans-serif;
    text-shadow: -1px -1px 2px gray;
    font-size: 28px;
    font-weight: bold;
    color: white;
    border: ${p => p.wordFound && p.selected ? '2px solid #628a33' : '2px solid #cc0000'};
    background-image: ${p => p.wordFound && p.selected ? 'linear-gradient(#b5f36d, #628a33)'
      : p.selected ? 'linear-gradient(#ff4c4c, #840000)' : 'linear-gradient(#FFCA28, #FB8C00)'};
    border-radius: 10px;
    width: 60px;
    height: 60px;
    cursor: pointer;
  `;
```