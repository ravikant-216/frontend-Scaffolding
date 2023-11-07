import {
  Box,
  BoxProps,
  Menu,
  MenuItem,
  MenuItemProps,
  MenuProps,
  menuItemClasses,
  styled,
} from '@mui/material'
import React, { useId } from 'react'

export type ChildElementTpe = Array<{
  element: React.JSX.Element
  MenuItemProps?: MenuItemProps
}>

interface DropDownButtonProps {
  parentElement: React.ReactNode
  childElement: ChildElementTpe
  parentProps?: BoxProps
  menuProps?: Partial<MenuProps>
}

const StyledMenuItem = styled(MenuItem)({
  [`&.${menuItemClasses.root}`]: {
    padding: '10px 20px',
  },
})

const DropdownButton = ({
  parentElement,
  childElement,
  parentProps,
  menuProps,
}: DropDownButtonProps): React.ReactNode => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const toogleDropdown = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget)
  }

  return (
    <Box>
      <Box
        {...parentProps}
        onClick={toogleDropdown}
        key={useId()}
        width="fit-content"
      >
        {parentElement}
      </Box>
      <Menu
        {...menuProps}
        open={Boolean(anchorEl)}
        onClick={toogleDropdown}
        anchorEl={anchorEl}
        onClose={toogleDropdown}
        PaperProps={{
          ...menuProps?.PaperProps,
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
            ...menuProps?.PaperProps?.sx,
          },
        }}
        MenuListProps={{ sx: { width: '241px' }, ...menuProps?.MenuListProps }}
      >
        {childElement.map((element, index) => (
          <StyledMenuItem
            key={index}
            {...element.MenuItemProps}
            onClick={(e) => {
              element.MenuItemProps?.onClick?.(e)
              console.log(element.MenuItemProps)
            }}
          >
            {element.element}
          </StyledMenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default DropdownButton
