/* eslint-disable no-unused-vars */

import Button from '../../../components/atoms/Button'
import Typography from '../../../components/atoms/Typography'
import theme from '../../../theme'
import { Divider, Stack } from '@mui/material'
import React from 'react'

const DropDownOption = [
  { label: 'Company', value: 'compay' },
  { label: 'Securities', value: 'securities' },
  { label: 'Capitalization', value: 'capitalization' },
  { label: 'Stakeholders', value: 'stakeholders' },
  { label: 'Transactions', value: 'transactions' },
  { label: 'Compliance', value: 'compliance' },
  { label: 'Board', value: 'board' },
]

interface DropDownProps {
  activeValue: string
  handleClick?: (value: string) => void
}

const DropDown = ({
  activeValue,
  handleClick,
}: DropDownProps): React.ReactNode => {
  return (
    <Stack gap={2} mt={2}>
      <Stack direction="row" gap={2.5} mx={10}>
        {DropDownOption.map(({ value, label }) => (
          <Button
            sx={{
              borderRadius: 10,
              color:
                activeValue === value
                  ? theme.palette.text.white
                  : theme.palette.text.highEmphasis,
            }}
            key={value}
            variant={activeValue === value ? 'contained' : 'text'}
            onClick={() => handleClick?.(value)}
          >
            <Typography variant="c1"> {label}</Typography>
          </Button>
        ))}
      </Stack>
      <Divider />
    </Stack>
  )
}

export default DropDown
