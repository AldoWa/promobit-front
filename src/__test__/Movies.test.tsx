import Movies from "../components/Movies";
import { GenresContextData } from "../context/genresContext";
import { fireEvent, render, screen, waitFor } from "../utils/test";
import api from "../services/api";

jest.mock('../services/api.ts')

const apiMocked = api as jest.Mocked<typeof api>

describe('Movies', () => {
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
    resetGenresSelected: () => {},
    genresIDsSelected: [],
    handleGenre: () => {}
  }

  const moviesResponse = {
    results: [
      {
        "adult": false,
        "backdrop_path": "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
        "genre_ids": [
          28,
          35
        ],
        "id": 1029575,
        "original_language": "en",
        "original_title": "The Family Plan",
        "overview": "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
        "popularity": 3086.075,
        "poster_path": "/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
        "release_date": "2023-12-14",
        "title": "The Family Plan",
        "video": false,
        "vote_average": 7.398,
        "vote_count": 600
      },
      {
        "adult": false,
        "backdrop_path": "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
        "genre_ids": [
          878
        ],
        "id": 848326,
        "original_language": "en",
        "original_title": "Rebel Moon - Part One: A Child of Fire",
        "overview": "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
        "popularity": 2101.05,
        "poster_path": "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
        "release_date": "2023-12-15",
        "title": "Rebel Moon - Part One: A Child of Fire",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 1071
      },
    ],
    page: 1,
  }

  beforeEach(() => {
    apiMocked.get.mockResolvedValue({
      data: moviesResponse
    })
  })

  it('Should render the component and show one movie', async () => {
    render(<Movies />, { providerProps })

    const moviesGrid = await screen.findByTestId('movies')
    const movies = moviesGrid.childNodes
    expect(moviesGrid).toBeInTheDocument()
    expect(movies.length).toBe(2)
  })

  it('Should render only the movies with the genre selected', async () => {
    render(<Movies />, { providerProps: { ...providerProps, genresIDsSelected: [878] } })

    const moviesGrid = await screen.findByTestId('movies')
    const movies = moviesGrid.childNodes
    expect(moviesGrid).toBeInTheDocument()
    expect(movies.length).toBe(1)
  })

  it('Should paginate the movies', async () => {
    const resetGenresSelected = jest.fn()
    render(<Movies />, { providerProps: { ...providerProps, resetGenresSelected } })
    const paginationLastPage = await screen.findByTestId('pagination-last-page')
    fireEvent.click(paginationLastPage)
    await waitFor(() => expect(resetGenresSelected).toHaveBeenCalledTimes(1))
  })

  it("Should match snapshot", async () => {
    const { container } = render(<Movies />, { providerProps })
    await waitFor(() => expect(container).toMatchSnapshot())
  });
});
