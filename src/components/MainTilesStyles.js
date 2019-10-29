import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 40% 40% 10%;
  grid-template-columns: 10% 40% 40% 10%;
  height: 100vh;
  justify-content: center;
`;

export const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  place-items: center;

  width: 300px;
  height: 300px;

  border: 1px solid black;
  grid-row: 2/3;
  grid-column: 2/3;
  justify-self: end;
  align-self: end;
  margin-right: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  width: 270px;
  border: 1px solid black;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;

  grid-row: 2/3;
  grid-column: 3/4;
  align-self: end;
  margin-left: 10px;
`

export const Selection = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 5px;
  color: ${p => p.found ? 'green' : 'red'};
`;

export const Validity = styled.div`
  & {
    color: ${p => p.found ? 'green' : 'red'};
  };
  &:after {
    content: '${p => p.found ? 'valid' : 'invalid'}';
  }
`;