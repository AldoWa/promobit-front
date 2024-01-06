import { RenderOptions, render } from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'

interface AllTheProvidersProps {
  children: React.ReactNode
}

const AllTheProviders = ({children}: AllTheProvidersProps) => {
  return (
    <ChakraProvider>
      {children}
    </ChakraProvider>
  )
}

const customRender = (ui:React.ReactElement, options?: RenderOptions) =>
  render(ui, {wrapper: AllTheProviders, ...options})

// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react'

// override render method
export {customRender as render}