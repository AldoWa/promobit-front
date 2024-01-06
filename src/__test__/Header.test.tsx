
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

jest.mock('../services/api.ts', () => {
	return {
    AUTHORIZATION: 'XXXX'
  }
})

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