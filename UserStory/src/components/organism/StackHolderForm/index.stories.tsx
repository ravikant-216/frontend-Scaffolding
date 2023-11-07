import { Meta, StoryObj } from '@storybook/react'
import AddStackHolderForm from '.'

const meta: Meta<typeof AddStackHolderForm> = {
  component: AddStackHolderForm,
  tags: ['autodocs'],
  argTypes: {
    addNewStackHolder: {
      action: 'addNewStackHolder',
    },
  },
}

type Story = StoryObj<typeof AddStackHolderForm>

export const Render: Story = {
  args: {
    open: true,
  },
}

export default meta
