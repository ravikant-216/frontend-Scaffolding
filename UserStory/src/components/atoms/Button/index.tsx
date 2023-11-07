import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Typography from "../Typography";
import { TypographyVarient } from "@/utils/types";

export interface ButtonProps extends MuiButtonProps {
  text?: string;
  variant?: "contained" | "outlined" | "text";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  typographyVarient?: TypographyVarient;
}

const Button = ({
  variant = "contained",
  text,
  children,
  typographyVarient = "b3",
  ...props
}: ButtonProps): React.ReactNode => {
  return (
    <MuiButton variant={variant} size="small" {...props}>
      <Typography variant={typographyVarient}>{text ?? children}</Typography>
    </MuiButton>
  );
};

export default Button;
