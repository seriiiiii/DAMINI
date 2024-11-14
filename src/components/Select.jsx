import React from "react";
import styled from "styled-components";
import { ReactComponent as SelectBtn } from "../assets/images/selectBtn.svg";

const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledSelect = styled.select`
  appearance: none;
  padding: 8px 48px 8px 8px;
  border: none;
  border-radius: 5px 5px var(--none, 0px) var(--none, 0px);
  font-size: 14px;
  color: #333;
  transition: border-color 0.3s;
  border-bottom: 2px solid #3617ce;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
    width: 100%;
  &:focus {
  }
  &:disabled {
    background-color: #eaeaea;
    cursor: not-allowed;
    border: 1px solid #ccc;
    border-bottom: 2px solid #cdcbd7;
  }
`;
const ArrowIcon = styled(SelectBtn)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Select = ({ options, value, onChange, disabled }) => {
  return (
    <SelectContainer>
      <StyledSelect value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      <ArrowIcon />
    </SelectContainer>
  );
};

export default Select;
