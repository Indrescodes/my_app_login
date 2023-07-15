import { styled } from 'styled-components';

export const StyledFormContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background-color: rgba(210, 210, 210, 0.5);

  .headers__cancel {
    font-size: 1em;
    padding: 10px 25px;
    background-color: rgb(240, 58, 95);
    color: white;
    font-weight: 700;
    margin-top: 5px;
    &:hover {
      color: black;
      box-shadow: rgba(255, 0, 0, 0.5) 0px 3px 6px;
      border: none;
    }
  }
`;

export const StyledForm = styled.form`
  background-color: #fff;
  padding: 25px;
  margin: 2em;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  Button {
    width: 98%;
    margin-top: 2em;
    font-size: 1em;
  }
`;

export const StyledSuccessMessage = styled.p`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #f5f5f5;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: black;
  padding: 10px;
  width: 50%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
