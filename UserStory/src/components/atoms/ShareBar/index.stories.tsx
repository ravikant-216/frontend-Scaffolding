import { Meta, StoryObj } from '@storybook/react'
import ShareBar from '.'

const meta: Meta<typeof ShareBar> = {
  component: ShareBar,
}

type Story = StoryObj<typeof ShareBar>

export const Example: Story = {
  args: {
    percentage: 10,
    name: '25.93% common',
    color: 'blue',
    height: '50px',
  },
}

export default meta
