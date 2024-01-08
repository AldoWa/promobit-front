import { RenderOptions, render } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { GenresContextData, GenresContext } from '../context/genresContext'
import { BrowserRouter } from 'react-router-dom'

interface CustomRenderOptions extends RenderOptions {
  providerProps?: GenresContextData
}

const defaultProviderProps: GenresContextData = {
  genres: [],
  genresIDsSelected: [],
  resetGenresSelected: () => {},
  handleGenre: () => {}
}

const customRender = (ui:React.ReactElement, props?: CustomRenderOptions) =>
  render(
    <ChakraProvider>
      <GenresContext.Provider value={props?.providerProps ? {...props?.providerProps} : { ...defaultProviderProps } }>
        {ui}
      </GenresContext.Provider>
    </ChakraProvider>,
    { 
      wrapper: BrowserRouter,
      ...props
    }
  )

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

// override render method
export {customRender as render}