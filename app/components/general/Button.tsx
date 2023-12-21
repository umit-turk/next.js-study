import React from "react";
import { IconType } from "react-icons";
interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon?: IconType;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  icon: Icon,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg p-3 ${small ? "w-[250px]" : "w-full"} ${
        outline ? "border text-black " : "bg-black text-white"
      }`}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
