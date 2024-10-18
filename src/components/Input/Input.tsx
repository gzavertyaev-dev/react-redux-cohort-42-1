import { InputProps } from "./types";
import {
  InputWrapper,
  InputComponent,
  InputLabel,
  ErrorContainer,
} from "./styles";

function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error = undefined,
  value,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        $error={error}
        value={value}
        onChange={onChange}
      />
      <ErrorContainer>{error}</ErrorContainer>
    </InputWrapper>
  );
}

export default Input;
