import Genres from "../components/Genres"
import { GenresContextData } from "../context/genresContext"
import { screen, render, fireEvent } from "../utils/test"

jest.mock('../services/api.ts', () => {
	return {
    AUTHORIZATION: 'XXXX'
  }
})

describe('Genres', () => {
  const providerProps: GenresContextData = {
    genres: [
      {
        id: 28,
        name: 'Action'
      }
    ],
    handleGenre: () => {},
    genresIDsSelected: [],
    resetGenresSelected: () => {}
  }

  const handleGenre = jest.fn(
    (id: number, type: 'add' | 'remove') => {
      if (type === 'add') {
        providerProps.genresIDsSelected.push(id)
        return;
      }
      providerProps.genresIDsSelected = providerProps.genresIDsSelected.filter(genre => genre !== id)
    }
  ) 

  it('Should render the genre with a text "action"', () => {
    render(<Genres text='Action' id={28} handleGenre={() => {}}/>, {
      providerProps
    })
    const genreComponent = screen.getByTestId('genre')
    expect(genreComponent).toBeInTheDocument()
    expect(genreComponent).toBeVisible()
    
    const genreText = screen.getByTestId('genre-text')
    expect(genreText).toBeInTheDocument()
    expect(genreText).toHaveTextContent('Action')
  })

  it('Should select and deselected when click on the genre', () => {
    render(<Genres text='Action' id={28} handleGenre={handleGenre}/>, {
      providerProps
    })

    expect(handleGenre).not.toHaveBeenCalled()

    const genreComponent = screen.getByTestId('genre')

    const genreComponentSelected = screen.queryByTestId('genre-selected')

    expect(genreComponentSelected).toBeNull()

    fireEvent.click(genreComponent)

    const genreComponentSelectedAfterClick = screen.getByTestId('genre-selected')
    
    expect(genreComponentSelectedAfterClick).toBeInTheDocument()

    fireEvent.click(genreComponent)

    expect(handleGenre).toHaveBeenCalledTimes(2)

    expect(screen.queryByTestId('genre-selected')).not.toBeInTheDocument()
  })

  it('Should match snapshot', () => {
    const { container } = render(<Genres text='Action' id={28} handleGenre={handleGenre}/>, {
      providerProps
    })
    expect(container).toMatchSnapshot()
  })
})