import { Meta, StoryObj } from '@storybook/react'
import DownArrow from '../../../../public/assets/Icons/downArrow.svg'
import Logo from '../../../../public/assets/Icons/Logo.svg'
import Icon from '.'

const meta: Meta = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Example: Story = {
  args: {
    src: DownArrow,
  },
}

export const LogoIcon: Story = {
  args: {
    src: Logo,
  },
}
