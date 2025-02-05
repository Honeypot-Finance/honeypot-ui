import { ButtonProps } from "@nextui-org/react";
import React from "react";
interface CustomButtonProps extends ButtonProps {
    styleMode?: "plain" | "primary";
}
export declare const Button: React.ForwardRefExoticComponent<Omit<CustomButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
