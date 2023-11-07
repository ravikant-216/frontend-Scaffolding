import { render, screen } from '@testing-library/react'
import DataTable from '.'
import { columnDefination, data } from '../../../utils/constant'

describe('DataTable', () => {
  it('should render', () => {
    render(
      <DataTable data={data} columnsDefination={columnDefination as any} />
    )
    screen.getByText(data[0].name)
  })
})
