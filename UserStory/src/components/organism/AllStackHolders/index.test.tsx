import { render, screen } from '@testing-library/react'
import AllStackHolder from '.'
import { data } from '../../../utils/constant'

describe('AllStackHolders', () => {
  test('renders AllStackHolders component', () => {
    render(<AllStackHolder />)
    screen.getByText(data[0].name)
  })
})
