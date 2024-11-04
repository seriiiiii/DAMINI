import React from "react";
import styled, { css } from "styled-components";

const sizeStyles = {
  xsmall: css`
    font-size: 10px;
    padding: 2px 6px;
  `,
  small: css`
    font-size: 12px;
    padding: 4px 28px;
  `,
  medium: css`
    font-size: 16px;
    padding: 5px 47.5px;
  `,
  large: css`
    font-size: 20px;
    padding: 4.37px 62.54px;
  `,
  xlarge: css`
    font-size: 14px;
    padding: 9.47px 248px;
  `,
};

const StyledButton = styled.button`
  background-color: ${({
    primary,
    disabled,
    error,
    default: isDefault,
    loading,
  }) => {
    if (disabled) return "#EAEAEA";
    if (error) return "#D82424";
    if (isDefault) return "#fff";
    return primary ? "#3617CE" : "#ffffff";
  }};
  color: ${({ primary, disabled, error, default: isDefault, loading }) => {
    if (disabled) return "#333";
    if (error) return "#ffffff";
    if (isDefault) return "#333";
    return primary ? "#ffffff" : "#333";
  }};
  background: ${({ primary, disabled, error, default: isDefault, loading }) => {
    if (loading) return `url("../assets/images/loading.png")`;
    return primary ? "" : "";
  }};
  border: ${({ primary, disabled, error, default: isDefault, loading }) => {
    if (isDefault) return "1px solid #3617CE";
    return primary ? "#ffffff" : "#333";
  }};
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  //   border: 1px solid #4B49AC;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  text-align: center;
  transition:
    opacity 0.3s ease,
    background-color 0.3s ease;

  ${({ size }) => sizeStyles[size] || sizeStyles.medium}

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 1 : "58%")};
  }
`;

const Button = ({
  children,
  onClick,
  primary,
  size,
  disabled,
  error,
  loading,
  default: isDefault,
}) => {
  console.log(loading);
  return (
    <StyledButton
      onClick={!disabled ? onClick : undefined}
      primary={primary}
      size={size}
      disabled={disabled}
      error={error}
      loading={loading}
      default={isDefault}
    >
      {loading && <img className="load" src="/loading.png" alt="loading" />}
      {children}
    </StyledButton>
  );
};

export default Button;
