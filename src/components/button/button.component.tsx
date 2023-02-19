import "./button.styles.scss";
import { ButtonHTMLAttributes } from "react";

export enum ButtonType {
  ButtonStart = "ButtonStart",
  ButtonReset = "ButtonReset",
}

type ButtonProps = {
  buttonStyle: ButtonType;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ buttonStyle, children, ...otherProps }: ButtonProps) {
  return <button>{children}</button>;
}

export default Button;
