import { Stack, Typography } from '@mui/material'
export interface ChipProps {
  text: string
  selected: boolean
}
const Chip = ({ text, selected }: ChipProps) => {
  return (
    <Stack
      sx={{
        alignItems: 'center',
        bgcolor: selected ? '#625AFA' : 'white',
        color: selected ? 'white' : 'black',
        borderRadius: '40px',
        padding: '5px 10px',
        cursor: 'pointer',
        '&:hover': {
          bgcolor: 'primary.main',
          color: 'white',
        },
      }}
    >
      <Typography variant="body1">{text}</Typography>
    </Stack>
  )
}

export default Chip
