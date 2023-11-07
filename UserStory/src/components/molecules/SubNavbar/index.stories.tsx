import { Meta, StoryObj } from '@storybook/react'
import DropDown from '.'

const meta: Meta<typeof DropDown> = {
  component: DropDown,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof DropDown>

export const Example: Story = {
  args: {
    activeValue: 'stakeholders',
  },
}

export default meta
