import React from 'react'
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material'
import { TypographyVarient } from '../../../utils/types'

export interface TypographyProps extends MuiTypographyProps {
  children?: React.ReactNode
  variant: TypographyVarient
  text?: string
}

const Typography = ({ text, children, variant, ...props }: TypographyProps) => {
  return (
    <MuiTypography variant={variant} {...props}>
      {text ?? children}
    </MuiTypography>
  )
}

export default Typography
