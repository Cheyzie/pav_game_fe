import { FieldContainer, InputContainer, Label, StyledInput } from "./styles";

export const TextField = ({ placeholder = "Enter", ...props }) => {
  return (
    <FieldContainer>
      <Label htmlFor={props.id}>{placeholder}</Label>
      <InputContainer>
        <StyledInput
          type="text"
          {...props}
        />
      </InputContainer>
    </FieldContainer>
  );
};