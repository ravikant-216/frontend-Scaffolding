import { Meta, StoryObj } from '@storybook/react'
import SearchTextField from '.'

const meta: Meta<typeof SearchTextField> = {
  component: SearchTextField,
  argTypes: {},
}

type Story = StoryObj<typeof SearchTextField>

export const Example: Story = {
  args: {},
}

export default meta
