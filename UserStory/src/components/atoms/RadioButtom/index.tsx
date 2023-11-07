import React from "react";
import { Radio, RadioProps } from "@mui/material";

const RadioButton = ({ ...props }: RadioProps): React.ReactNode => {
  return <Radio {...props} />;
};

export default RadioButton;
