import "./button.styles.scss";
import { ButtonHTMLAttributes } from "react";

export enum ButtonType {
  ButtonHome = "ButtonHome",
  ButtonSubmit = "ButtonSubmit",
}

type ButtonProps = {
  buttonStyle: ButtonType;
  children: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

function Button() {
  return <div>Button</div>;
}

export default Button;
