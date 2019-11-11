import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: grid;
  grid-template-rows: 10% 10% 10% 10% 10% 40% 10%;
  grid-template-columns: 10% 40% 40% 10%;
  height: 100vh;
  justify-content: center;
`;

export const Board = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  place-items: end;

  width: 300px;
  height: 300px;

  grid-row: 2/6;
  grid-column: 2/3;
  justify-self: end;
  align-self: end;
  margin-right: 10px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 270px;
  border: 2px solid #a5a5a5;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;

  grid-row: 5/6;
  grid-column: 3/4;
  align-self: end;
  margin-left: 10px;
`

export const Selection = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 5px;
  color: ${p => p.found ? '#75d075' : '#cc0000'};
`;

export const Validity = styled.div`
  font-size: 13px;
  & {
    color: ${p => p.found ? '#7ab17a' : '#ff8181'};
  };
  &:after {
    content: '${p => p.found ? 'valid' : 'invalid'}';
  }
`;

export const ClearWrapper = styled.div`
  grid-row: 2/3;
  grid-column: 3/4;
  display:flex;
  flex-direction: row;
  color: gray;
  height: 30px;
  cursor: pointer;
  width: 130px;
  margin-left: 215px;
  margin-top: 20px;
  color: #c1c1c1;

  &:hover {
    color: #b3b3b3;
  }

`
export const ClearWord = styled.div`
  font-size: 12px;
  font-weight: 500;
  align-self: center;
`

export const ClearX = styled.div`
  background: #c1c1c1;
  border-radius: 50%;
  width: 30px;
  margin-left: 8px;

  &:hover {
    background: #b3b3b3;
  }
`
export const InnerX = styled.div`
  position: relative;
  top: 5px;
  left: 12px;
  font-size: 19px;
  font-family: sans-serif;
  color: #e8e8e8;
  transform: scale(1.4,1);
  font-weight: 300;
`