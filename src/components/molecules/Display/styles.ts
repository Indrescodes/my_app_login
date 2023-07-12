import { styled } from 'styled-components';

export const StyledDisplayWrapper = styled.div`
  margin: 16px;
  width: 650px;
  display: flex;
    flex-direction: column;
    justify-content: center;
  @media screen and (min-width: 768px) {
    width: 65%;
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
`;

export const StyledTableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  padding: 10px;

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: bold;
  background-color: #f5f5f5;
  padding: 15px;
`;

export const StyledTableCell = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const StyledPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  .update__button,
  .delete__button {
    border: 1px solid lightgray;
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
