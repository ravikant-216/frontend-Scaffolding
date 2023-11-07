import React from 'react'
import SearchSvg from '../../../../public/assets/Icons/Search.svg'
import theme from '../../../theme'
import TextField from '../../atoms/TextField'
import Icon from '../../atoms/Icon'

interface SearchTextFieldProps {
  value?: string
  handleSearchChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const SearchTextField = ({
  value = '',
  handleSearchChange,
  disabled = false,
}: SearchTextFieldProps) => {
  return (
    <TextField
      data-testid="search-textfield"
      type="text"
      placeholder="Search..."
      inputProps={{
        style: {
          ...theme.typography.caption,
          color: theme.palette.text.lowEmphasis,
          width: theme.spacing(70),
        },
      }}
      sx={{
        display: 'inline-flex',
        gap: '8px',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      value={value}
      onChange={handleSearchChange}
      startIcon={<Icon src={SearchSvg} alt="Search" />}
      disabled={disabled}
    />
  )
}

export default SearchTextField
