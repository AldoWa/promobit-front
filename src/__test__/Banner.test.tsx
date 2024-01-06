import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';

jest.mock('../services/api.ts', () => {
	return {
    AUTHORIZATION: 'XXXX'
  }
})

jest.mock('../components/Filter')

describe('Banner', () => {
  test("Should render the banner", () => {
    render(<Banner />)
    const element = screen.getByTestId('banner-box')
    expect(element).toBeInTheDocument()
    expect(element).toBeVisible()
  })

  test("Should render banner text", () => {
    render(<Banner />)
    const element = screen.getByTestId('banner-text')
    expect(element).toBeInTheDocument()
    expect(element).toBeVisible()
    expect(element).toHaveTextContent('Milhões de filmes, séries e pessoas para descobrir. Explore já.')
  })

  test("Should match snapshot", () => {
    const { container } = render(<Banner />)
    expect(container).toMatchSnapshot();
  })
})