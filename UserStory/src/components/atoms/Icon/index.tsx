import { Box, BoxProps } from "@mui/material";
import React from "react";

interface IconProps {
  src: string;
  alt: string;
  boxProps?: BoxProps;
  imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

const Icon = ({
  onClick,
  src,
  alt,
  boxProps,
  imgProps,
}: IconProps): React.ReactNode => {
  return (
    <Box {...boxProps}>
      <img src={src} alt={alt} {...imgProps} onClick={onClick} />
    </Box>
  );
};

export default Icon;
