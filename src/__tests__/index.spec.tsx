import { render, screen } from '@testing-library/react'
import BxIcons from '../'

describe('BxIcons', () => {
  test('render BxIcons component', () => {
    render(<BxIcons icon='back' />)
    const component = screen.getByTestId('iconBase')
    expect(component).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })

  test('render BxIcons with more props', () => {
    render(<BxIcons icon='back' color='red' size='30' />)
    const component = screen.getByTestId('iconBase')
    expect(component).toBeInTheDocument()
    expect(component.getAttribute('width')).toBe('30')
    expect(component.getAttribute('width')).not.toBe('50')
    expect(component.getAttribute('height')).toBe('30')
    expect(component.getAttribute('height')).not.toBe('80')
    expect(component.getAttribute('color')).toBe('red')
    expect(component.getAttribute('color')).not.toBe('#fff')
    expect(component).toMatchSnapshot()
  })
})
