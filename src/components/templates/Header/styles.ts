import { styled } from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
padding-right: 12px;

  .headers__button {
    font-size: 1em;
    width: 30%;

    &:hover {
      box-shadow: rgba(60, 179, 113, 0.7) 0px 3px 6px;
      border: none;
    }
  }
`;
