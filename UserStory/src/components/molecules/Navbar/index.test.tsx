import { render, screen } from '@testing-library/react'
import Navbar from '.'

describe('Navbar', () => {
  it('should render correctly', () => {
    render(<Navbar />)
    screen.getByText('Accounts')
  })
})
