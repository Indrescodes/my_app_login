import { styled } from 'styled-components';

export const StyledInput = styled.input`
  width: calc(100% - 12px);
  padding: 10px 0 10px 10px;
  border: 0.025em solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: #f9f9f9;
  margin: 5px 0;

  &:hover {
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }
`;
