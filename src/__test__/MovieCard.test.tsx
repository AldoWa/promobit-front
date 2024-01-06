import { render, screen } from "@testing-library/react";
import MovieCard from "../components/MovieCard";

describe('MovieCard', () => {
  it('Should render the MovieCard with the props', async () => {
    render(<MovieCard src='aletory' title='Mortal Kombat' year='2021'/>)
    
    const titleMovie = screen.getByTestId('movieCard-title')
    const yearMovie = screen.getByTestId('movieCard-year')

    expect(titleMovie).toBeInTheDocument()
    expect(titleMovie).toHaveTextContent('Mortal Kombat')

    expect(yearMovie).toBeInTheDocument()
    expect(yearMovie).toHaveTextContent('2021')
  });

  test("Should match snapshot", () => {
    const { container } = render(<MovieCard src='aletory' title='Mortal Kombat' year='2021' />)
    expect(container).toMatchSnapshot();
  })
})