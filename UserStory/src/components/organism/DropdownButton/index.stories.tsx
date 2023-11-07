import { Meta, StoryObj } from '@storybook/react'
import DropdownButton from '.'
import Button from '../../../components/atoms/Button'

const meta: Meta<typeof DropdownButton> = {
  component: DropdownButton,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof DropdownButton>

export const Render: Story = {
  args: {
    parentElement: <Button sx={{ width: '120px' }}>Parent</Button>,
    childElement: [<div>Child Element 1</div>, <div>Child Element 2</div>],
  },
}

export default meta
