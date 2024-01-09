import { HttpResponse, http } from 'msw'

import { server } from '@/__mocks__/server'
import { customRenderForHooks, renderHook, waitFor } from '@/utils/test-utils'

import { useMatches } from './matches'

describe('useMatches', () => {
  it('should return matches', async () => {
    const { result } = renderHook(() => useMatches(), {
      wrapper: customRenderForHooks(),
    })

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    // data is mocked in the MSW handler under /mocks/handler
    await waitFor(() => expect(result.current.data).toHaveLength(5))
  })

  it('throws an error if fetchFunction fails', async () => {
    server.use(
      http.get('/matches', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )

    const { result } = renderHook(() => useMatches(), {
      wrapper: customRenderForHooks(),
    })

    await waitFor(() => expect(result.current.status).toBe('error'))
  })
})
