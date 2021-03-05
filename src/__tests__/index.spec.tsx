import { render, screen } from '@testing-library/react'
import BxIcons from '../'
import type { BxIconsProps } from '../types'

const customRender = (props: BxIconsProps) => {
  return render(<BxIcons {...props} />)
}

describe('BxIcons', () => {
  test('render BxIcons component', () => {
    customRender({ icon: 'back' })
    const component = screen.getByTestId('iconBase')
    expect(component).toBeInTheDocument()
    expect(component).toMatchSnapshot()
  })

  test('render BxIcons with more props', () => {
    customRender({ icon: 'back', color: 'red', size: '30' })
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
