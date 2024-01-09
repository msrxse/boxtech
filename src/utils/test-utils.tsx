import React, { ReactElement, ReactNode } from 'react'

import { QueryClient, QueryClientConfig, QueryClientProvider } from '@tanstack/react-query'
import { RenderOptions, render } from '@testing-library/react'

type IExtendedRenderOptions = RenderOptions

/**
 * Using a helper function like this to create an isolated wrapper
 * so the query-cache doesn not get reused in between tests
 */
const customRenderForHooks = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  })

  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

function setupQueryClient(config?: QueryClientConfig | undefined) {
  if (!config) {
    return new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    })
  }
  return new QueryClient(config)
}

const customRender = (ui: ReactElement, options?: Omit<IExtendedRenderOptions, 'wrapper'>) => {
  const queryClient = setupQueryClient()
  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </>
    )
  }
  return render(ui, { wrapper: Wrapper, ...options })
}

// Ordering of exports is important here, as the second line overrides RTL's render function
export * from '@testing-library/react'
export { customRender as render, setupQueryClient, customRenderForHooks }
