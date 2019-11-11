import styled from 'styled-components';

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