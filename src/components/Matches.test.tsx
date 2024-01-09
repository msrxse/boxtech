import { HttpResponse, http } from 'msw'

import { server } from '@/__mocks__/server'
import { renderWithQueryClient } from '@/utils/test-utils'

import Matches from './Matches'

describe('Matches', () => {
  it('should render matches', async () => {
    const result = renderWithQueryClient(<Matches />)
    const team01 = await result.findByText(/Powerful asynchronous state management/i)
    expect(team01).toBeInTheDocument()
  })
  it('should render loading state', async () => {
    const result = renderWithQueryClient(<Matches />)
    const loading = await result.findByText(/Loading/i)
    expect(loading).toBeInTheDocument()
  })
  it('should render error state', async () => {
    server.use(
      http.get('/todos/1', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )
    const result = renderWithQueryClient(<Matches />)
    const error = await result.findByText(/Error/i)
    expect(error).toBeInTheDocument()
  })
})
