import { styled } from 'styled-components';


export const StyledFooterContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledContent = styled.p`
  font-size: 14px;

  @media screen and (min-width: 765px) {
    font-size: 17px;
  }
`;
export const StyledFooterContent = styled.div`
  text-align: center;
  margin: 0 10px;
`;
