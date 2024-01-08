import { render, screen } from '../utils/test';
import BannerMovie from '../components/BannerMovie';

jest.mock('../components/Filter')

describe('Banner', () => {
  it("Should render the Banner movie correctly", async () => {
    render(<BannerMovie 
      title="Teste Title"
      imageUrl="https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
      credits={[{ type: 'Director', name: 'Ator 1' },{ type: 'Director', name: 'Ator 2' }]}
      overview="Teste Overview"
      screenPlay={[{ type: 'Director', name: 'Ator 1' }]}
      subtitle="Teste | Subtitle"
      avaliation={10}
    />)
    const container = screen.getByTestId('banner-movie-container')
    expect(container).toBeInTheDocument()

    const title = screen.getByTestId('banner-movie-title')
    expect(title).toHaveTextContent('Teste Title')

    const subtitle = screen.getByTestId('banner-movie-subtitle')
    expect(subtitle).toHaveTextContent('Teste | Subtitle')

    const overview = screen.getByTestId('banner-movie-overview')
    expect(overview).toHaveTextContent('Teste Overview')

    const credits = screen.getByTestId('banner-movie-directors').childNodes
    expect(credits.length).toBe(2)

    const screenplay = screen.getByTestId('banner-movie-screenplay').childNodes
    expect(screenplay.length).toBe(1)

    const avaliation = screen.getByTestId('banner-movie-avaliation')
    expect(avaliation).toHaveTextContent('10%')
  })

  it("Should match snapshot", async () => {
    const { container } = render(
    <BannerMovie 
      title="Teste Title"
      imageUrl="https://image.tmdb.org/t/p/original/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg"
      credits={[{ type: 'Director', name: 'Ator 1' },{ type: 'Director', name: 'Ator 2' }]}
      overview="Teste Overview"
      screenPlay={[{ type: 'Director', name: 'Ator 1' }]}
      subtitle="Teste | Subtitle"
      avaliation={10}
    />)
    expect(container).toMatchSnapshot();
  })
})