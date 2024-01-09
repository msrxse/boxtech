import { HttpResponse, http } from 'msw'

import { server } from '@/__mocks__/server'
import { render, screen, waitFor } from '@/utils/test-utils'

import Matches from './Matches'

describe('Matches', () => {
  it('should render matches', async () => {
    render(<Matches />)
    await waitFor(() =>
      expect(screen.findByText(/Powerful asynchronous state management/i)).toBeInTheDocument(),
    )
  })
  it('should render loading state', async () => {
    const result = render(<Matches />)
    const loading = await result.findByText(/Loading/i)
    expect(loading).toBeInTheDocument()
  })
  it('should render error state', async () => {
    server.use(
      http.get('/matches', () => {
        return new HttpResponse(null, { status: 500 })
      }),
    )
    const result = render(<Matches />)
    const error = await result.findByText(/Error/i)
    expect(error).toBeInTheDocument()
  })
})
