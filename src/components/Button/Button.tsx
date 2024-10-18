import { ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      $isDeleteVariant={isDeleteVariant}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
