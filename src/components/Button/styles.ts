import styled from "@emotion/styled";

import { colors } from "styles/colors";

interface ButtonComponentStyleProps {
  $isDeleteVariant: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentStyleProps>`
  outline: none;
  width: 100%;
  height: 70px;
  border: none;
  background-color: ${({ $isDeleteVariant, disabled }) => {
    if (disabled) {
      return colors.GREY;
    } else {
      if ($isDeleteVariant) {
        return colors.ERROR;
      } else {
        return colors.PRIMARY_BLUE;
      }
    }
  }};
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
