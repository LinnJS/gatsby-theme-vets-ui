/** @jsx jsx */
import { jsx, Button as StyledButton, Styled } from "theme-ui"

export const Button = props => (
  <StyledButton>
    {props.children}
  </StyledButton>
);

export default Button
