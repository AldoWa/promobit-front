import { GenresContextData } from '../context/genresContext';
import { render, screen } from '../utils/test';
import Filter from '../components/Filter';

jest.mock('../services/api.ts', () => {
	return {
    AUTHORIZATION: 'XXXX'
  }
})

describe('Filter', () => {
    const providerProps: GenresContextData = {
      genres: [
        {
          id: 28,
          name: 'Action'
        },
        {
          id: 29,
          name: 'Drama'
        }
      ],
      handleGenre: () => {},
      genresIDsSelected: [],
      resetGenresSelected: () => {}
    }

    it("Should render the filter with 2 genres", () => {
      render(<Filter />, { providerProps })
      
      const filterByText = screen.getByTestId('filter-text')

      expect(filterByText).toBeInTheDocument()
      expect(filterByText).toHaveTextContent('FILTRE POR:');

      const element = screen.getAllByTestId('genre')
      expect(element.length).toBe(2)
    });
    
    it("Should match snapshot", () => {
      const { container } = render(<Filter />, { providerProps })
      expect(container).toMatchSnapshot();
    });
});