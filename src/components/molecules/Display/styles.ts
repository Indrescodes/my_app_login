import { styled } from 'styled-components';

export const StyledDisplayWrapper = styled.div`
  margin: 15px auto;
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const StyledTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 8px;
  overflow: hidden;
  overflow-y: auto;
  margin-top: 25px;
  height: 2090px;
  @media screen and (min-width: 768px) {
    height: 801px;
  }
`;
export const StyledTableRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
  padding: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledTableHeader = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline;
    background-color: rgb(228, 239, 249);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: bold;
    color: rgb(52, 119, 172);
    padding: 15px;
  }
`;
export const StyledSpan = styled.span`
  margin-right: 8px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const StyledTableCell = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0 80px 0;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  .update__button {
    background-color: rgb(254, 246, 222);
    color: rgb(148, 108, 0);
  }
  .delete__button {
    background-color: rgb(253, 224, 230);
    color: rgb(211, 57, 84);
  }
  .update__button:hover {
    box-shadow: rgba(255, 165, 0, 0.5) 0px 3px 6px;
    border: none;
  }
  .delete__button:hover {
    box-shadow: rgba(255, 0, 0, 0.5) 0px 3px 6px;
    border: none;
  }
`;
