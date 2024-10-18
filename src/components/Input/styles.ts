import styled from "@emotion/styled";

import { colors } from "styles/colors";

export interface InputComponentStyleProps {
  $error?: string | undefined;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentStyleProps>`
  width: 100%;
  height: 50px;
  border: ${({ $error, disabled }) => {
    if (disabled) {
      return `1px solid ${colors.GREY}`;
    } else {
      if ($error !== undefined) {
        return `2px solid ${colors.ERROR}`;
      } else {
        return "1px solid #3f3f3f";
      }
    }
  }};
  border-radius: 4px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;

export const ErrorContainer = styled.p`
  font-size: 18px;
  color: ${colors.ERROR};
`;
