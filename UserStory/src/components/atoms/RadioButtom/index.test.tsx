import { render, screen } from '@testing-library/react'
import RadioButton from '.'

describe('RadioButtom', () => {
  it('Buutton Should be checked', () => {
    render(<RadioButton checked />)
    const radioButton = screen.getByRole('radio')
    expect(radioButton).toBeChecked()
  })
  it('Buutton Should be Unchecked', () => {
    render(<RadioButton checked />)
    const radioButton = screen.getByRole('radio')
    expect(radioButton).toBeChecked()
  })
})
