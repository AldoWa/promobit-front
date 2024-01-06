import { RenderOptions, render } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'
import { GenresContextData, GenresContext } from '../context/genresContext'

interface CustomRenderOptions extends RenderOptions {
  providerProps: GenresContextData
}

const customRender = (ui:React.ReactElement, { providerProps , ...renderProps }: CustomRenderOptions) =>
  render(
    <ChakraProvider>
      <GenresContext.Provider value={{ ...providerProps }}>
        {ui}
      </GenresContext.Provider>
    </ChakraProvider>,
    renderProps
  )

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

// override render method
export {customRender as render}