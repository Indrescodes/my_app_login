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
