import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner';

jest.mock('../components/Filter')

describe('Banner', () => {
  it("Should render the banner", () => {
    render(<Banner />)
    const element = screen.getByTestId('banner-box')
    expect(element).toBeInTheDocument()
    expect(element).toBeVisible()
  })

  it("Should render banner text", () => {
    render(<Banner />)
    const element = screen.getByTestId('banner-text')
    expect(element).toBeInTheDocument()
    expect(element).toBeVisible()
    expect(element).toHaveTextContent('Milhões de filmes, séries e pessoas para descobrir. Explore já.')
  })

  it("Should match snapshot", () => {
    const { container } = render(<Banner />)
    expect(container).toMatchSnapshot();
  })
})