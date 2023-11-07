import { Meta, Story } from '@storybook/react'
import Chip, { ChipProps } from '.'

export default {
  component: Chip,
} as Meta

const Template: Story<ChipProps> = (args) => <Chip {...args} />

export const Selected = Template.bind({})
Selected.args = {
  text: 'Selected',
  selected: true,
}
