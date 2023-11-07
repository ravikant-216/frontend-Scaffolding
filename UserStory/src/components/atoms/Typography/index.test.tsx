import { render, screen } from '@testing-library/react'
import Typography from '.'

describe('Typography', () => {
  it('should render', () => {
    render(<Typography variant="h1">Hi</Typography>)
    screen.getByText('Hi')
  })
})
