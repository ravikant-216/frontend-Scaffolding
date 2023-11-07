import { Meta, StoryObj } from '@storybook/react'
import DataTable from '.'
import { MRT_ColumnDef } from 'material-react-table'
import { columnDefination, data } from '../../../utils/constant'

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  tags: ['autodocs'],
}

type Story = StoryObj<typeof DataTable>

export const Default: Story = {
  args: {
    columnsDefination: columnDefination as MRT_ColumnDef[],
    data,
  },
}

export default meta
