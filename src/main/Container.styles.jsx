import styled from "styled-components";

export const NaviLogContainer = styled.div`
  width: 100%;
  flex-grow: 1;
  background: #f9f8ff;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
  transition:
    margin-left 0.35s ease-in-out,
    left 0.35s ease-in-out,
    margin-right 0.35s ease-in-out,
    right 0.35s ease-in-out;
  padding: 20px;
`;
