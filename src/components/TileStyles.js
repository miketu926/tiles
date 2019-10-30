import styled from 'styled-components';

export const TileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  color: white;
  border: ${p => p.found && p.selected ? '2px solid green' : '2px solid red'};
  background-color: ${p => p.found && p.selected ? 'green' : p.selected ? 'red' : 'orange'};
  border-radius: 10px;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;