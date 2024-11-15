import styled from 'styled-components';
import {
    container,
    form,
    input,
    label,
    button
} from 'tailwindcss';

export const Container = styled.div`
  ${container}
  max-width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  ${form}
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  ${label}
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  ${input}
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  ${button}
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: #f00;
  font-size: 14px;
  margin-bottom: 20px;
`;