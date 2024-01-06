import { render, screen } from "../utils/test"
import Header from "../components/Header";

describe('Header', () => {
  test("Should render the header", () => {
    render(<Header />)
    const element = screen.getByTestId('header-box')
    expect(element).toBeInTheDocument()
    expect(element).toBeVisible()
})

  test("Should match snapshot", () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot();
  })
})