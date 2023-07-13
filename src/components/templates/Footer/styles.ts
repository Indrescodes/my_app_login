import { styled } from 'styled-components';

export const StyledFooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  bottom: 0;
`;
export const StyledContent = styled.p`
  font-size: 14px;

  @media screen and (min-width: 765px) {
    font-size: 17px;
  }
`;
export const StyledFooterContent = styled.div`
  margin: 0 10px;
`;
