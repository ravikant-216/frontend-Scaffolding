import { Meta, StoryObj } from '@storybook/react'
import CapitalItem from '.'
import { CAPITALIZATION_TABLE_DATA_MOCKS } from '../../../utils/constant'

const meta: Meta<typeof CapitalItem> = {
  component: CapitalItem,
}

type Story = StoryObj<typeof CapitalItem>

export const Example: Story = {
  args: CAPITALIZATION_TABLE_DATA_MOCKS[0].timelineItem,
}

export default meta
