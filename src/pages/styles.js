import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  display: grid;
  place-items: center;
`;

export const MyForm = styled.form`
  display: inline-flex;
  flex-direction: column;
`;

export const TextBox = styled.input`
  margin: 1em 0;
  width: 92%;
  height: 40px;
  font-size: 18px;
  border-radius: 20px;
  border: 2px solid black;
  padding: 4px 8px;
`;

export const MyLabel = styled.label`
  width: 100%;
`;

export const Button = styled.button`
  width: 100%;
  height: 56px;
  font-size: 18px;
  background: #6246ea;
  color: #fffffe;
  border: none;
`;
