import React from "react";
import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from "@mui/material";

interface DialogProps extends MuiDialogProps {
  children: React.ReactNode;
  open: boolean;
}

const Dialog = ({ children, ...props }: DialogProps): React.ReactNode => {
  return <MuiDialog {...props}> {children}</MuiDialog>
};

export default Dialog;
