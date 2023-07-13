import { styled } from 'styled-components';

export const StyledButton = styled.button`
  background-color: #f5f5f5;
  padding: 0.75em;
  border: none;
  border-radius: 0.5em;
  align-items: center;
  justify-content: center;
  margin: 0.25em;
  font-family: 'Mulish', sans-serif;
  cursor: pointer;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.16) 0px 3px 6px;
    box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transform: translateY(-0.25em);
  }

  
`;
