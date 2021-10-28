import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 350px;
  border: 1px solid white;
  border-radius: 10px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    margin: 4px;
  }

  button {
    margin-top: 5px;
  }
`;
