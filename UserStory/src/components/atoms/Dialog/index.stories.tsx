import { Meta, StoryObj } from '@storybook/react'
import Dialog from '.'

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    onClose: {
      action: 'onClose',
    },
  },
}

type Story = StoryObj<typeof Dialog>

export const Render: Story = {
  args: {
    children: <div>Dialog</div>,
    open: true,
  },
}

export default meta
