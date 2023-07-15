import { styled } from 'styled-components';

export const StyledEditableDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.75em;

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;
