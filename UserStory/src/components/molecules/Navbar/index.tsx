import { Stack } from '@mui/material'
import React from 'react'
import Logo from '../../../../public/assets/Icons/Logo.svg'
import DownArrow from '../../../../public/assets/Icons/downArrow.svg'
import User from '../../../../public/assets/Icons/User.svg'
import Typography from '../../atoms/Typography'
import theme from '../../../theme'
import Icon from '../../atoms/Icon'

const Navbar = (): React.ReactNode => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{ background: theme.palette.structuralColors.blue, mx: 10, my: 2 }}
    >
      <Stack direction="row" gap={5} alignItems="center">
        <Icon src={Logo} alt="Logo" boxProps={{ mt: 1 }} />
        <Stack direction="row" gap={2} alignItems="center">
          <Typography
            text="Accounts"
            variant="c1"
            color={theme.palette.text.lowEmphasis}
          />
          <Typography
            text="Meetly"
            variant="c1"
            color={theme.palette.text.highEmphasis}
          />
          <Icon src={DownArrow} alt="Logo" boxProps={{ mt: 1 }} />
        </Stack>
      </Stack>
      <Stack gap={4} direction="row" alignItems="center">
        <Typography
          text="Task"
          variant="c1"
          color={theme.palette.text.highEmphasis}
        />
        <Typography
          text="Downloads"
          variant="c1"
          color={theme.palette.text.highEmphasis}
        />
        <Icon src={User} alt="Logo" boxProps={{ mt: 1 }} />
      </Stack>
    </Stack>
  )
}

export default Navbar
