import { cn } from "@nextui-org/react";
import { Button as NextButton, ButtonProps } from "@nextui-org/react";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  styleMode?: "plain" | "primary";
}

export const CuteButton = React.forwardRef<
  HTMLButtonElement,
  CustomButtonProps
>(
  (
    { children, className, isLoading, styleMode = "primary", ...props },
    ref
  ) => {
    const baseClassNames = cn(
      "flex h-[45px] font-bold text-[#000] justify-center items-center gap-2.5 self-stretch outline outline-[4px] outline-base [background:var(--Button-Gradient,linear-gradient(180deg,rgba(232,211,124,0.13)_33.67%,#FCD729_132.5%),#F7931A)] px-6 py-3 rounded-2xl hover:opacity-80 active:opacity-60 border border-5 border-[#202020]",
      styleMode === "plain"
        ? " border-[color:var(--e-18-a-20,rgba(225,138,32,0.40))] [background:var(--e-18-a-20,rgba(225,138,32,0.40))] outline-0 backdrop-blur-[10px]  border-2 border-solid text-[#fff]"
        : "",
      className
    );

    return (
      <NextButton
        ref={ref}
        isLoading={isLoading}
        className={baseClassNames}
        {...props}
      >
        {children}
      </NextButton>
    );
  }
);

export default CuteButton;
