import { useState } from "react";
import { ToggleButton } from "./toggle_button";
import { FieldContainer, InputContainer, Label, StyledInput } from "./styles";

export const PasswordField = ({ placeholder = "Enter password", ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <FieldContainer>
      <Label htmlFor={props.id}>{placeholder}</Label>
      <InputContainer>
        <StyledInput
          type={showPassword ? 'text' : 'password'}
          {...props}
        />
        <ToggleButton onClick={handleToggle}>
          {showPassword ? '👁️' : '🙈'}
        </ToggleButton>
      </InputContainer>
    </FieldContainer>
  );
};