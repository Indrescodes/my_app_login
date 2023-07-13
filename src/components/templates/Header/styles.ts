import { styled } from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;

  .headers__button {
    font-size: 1em;
    padding: 10px 25px;
    background-color: rgba(60, 208, 178);
    color: white;
    font-weight: 700;
    &:hover {
      color: black;
      box-shadow: rgba(78, 204, 195, 0.5) 0px 3px 6px;
      border: none;
    }
  }
`;
