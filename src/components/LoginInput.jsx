import React from "react";
import styled from "styled-components";


const StyledInput = styled.input`
width:100%;
  padding: 12px;
  border: 2px solid #cdcbd7;
  font-size: 14px;
  border-radius:5px;
  background: none;
  color: #333;
  transition: border-color 0.3s;

  &:focus {
    border-color: #3617CE;
    opacity:79%;
  }

`;

const LoginInput = ({ type = "text", id, placeholder, value, onChange, disabled 
    ,onBlur
    ,onFocus
}) => {
  return (
    <StyledInput
    type={type}
    id={id}
    value={value} 
    onChange={onChange} 
    onBlur={onBlur}    
    placeholder={placeholder}

    />
  );
};

export default LoginInput;
