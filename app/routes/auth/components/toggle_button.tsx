import styled from "styled-components";

export const ToggleButton = styled.button.attrs({
  type: 'button', // Prevents accidental form submissions
})`
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  color: #6b7280;
  font-size: 14px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #1f2937;
  }
`;