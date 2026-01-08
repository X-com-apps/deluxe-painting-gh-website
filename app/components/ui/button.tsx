"use client";
import * as React from "react";
import { buttonVariants, ButtonVariants } from "./button-variants";
import { cn } from "@/app/lib/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onClick, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref} // <- ref maintenant supporté
        className={cn(buttonVariants({ variant, size, className }))}
        onClick={onClick}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
