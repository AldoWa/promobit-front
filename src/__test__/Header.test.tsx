
import Header from '../components/Header';
import { render, screen } from '../utils/test';

describe('Header', () => {
  it("Should render the header", () => {
    render(<Header />)
    const element = screen.getByTestId('header-box')
    expect(element).toBeInTheDocument()
    expect(element).toBeVisible()
})

  it("Should match snapshot", () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot();
  })
})