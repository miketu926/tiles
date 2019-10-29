import styled from 'styled-components';

export const TileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  border: ${p => p.found ? '2px solid green' : '2px solid red'};
  border-radius: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
`