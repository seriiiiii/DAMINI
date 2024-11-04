import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 7px 8px;
  border: 2px solid #cdcbd7;
  border-radius: 5px;
  font-size: 10px;
  background: none;
  color: #b6b9bf;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3617ce;
    outline: none;
  }

  &:disabled {
    background-color: #e0e0e0;
    cursor: not-allowed;
  }
`;

const Input = ({ type = "text", placeholder, value, onChange, disabled }) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
