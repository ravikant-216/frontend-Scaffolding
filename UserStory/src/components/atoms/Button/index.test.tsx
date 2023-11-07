import { render, screen } from '@testing-library/react'
import Button from '.'

describe('Testing Button', () => {
  test('Button', () => {
    render(<Button>Hi</Button>)

    screen.getByText('Hi')
  })
})
