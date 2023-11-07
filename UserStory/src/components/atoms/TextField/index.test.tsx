import { render, screen } from '@testing-library/react'
import TextField from '.'

describe('TextField', () => {
  it('should render correctly', () => {
    render(<TextField />)
    expect(screen.queryByRole('textbox')).toBeInTheDocument()
  })
})
