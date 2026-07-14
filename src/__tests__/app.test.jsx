import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App.jsx'
import { StoreProvider } from '../context/StoreContext.jsx'
import { LangProvider } from '../i18n.jsx'

function renderApp(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <StoreProvider>
        <LangProvider>
          <App />
        </LangProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

beforeEach(() => {
  localStorage.clear()
})

describe('Company Profile Website', () => {
  it('renders home with company brand', () => {
    renderApp('/')
    expect(screen.getByText('Nexflux')).toBeInTheDocument()
  })

  it('navigates to products page and shows catalog', () => {
    renderApp('/products')
    expect(screen.getByText('Product Catalog')).toBeInTheDocument()
  })

  it('submits B2B inquiry and shows success', () => {
    renderApp('/contact')
    fireEvent.change(screen.getByLabelText(/Name/), { target: { value: 'Budi' } })
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'budi@buyer.com' } })
    fireEvent.change(screen.getByLabelText(/Specific/), { target: { value: 'Need coconut moisture < 3%.' } })
    fireEvent.click(screen.getByText('Send Inquiry'))
    expect(screen.getByText(/Thank you/)).toBeInTheDocument()
    const stored = JSON.parse(localStorage.getItem('nf_store_v1'))
    expect(stored.inquiries.length).toBe(1)
    expect(stored.inquiries[0].name).toBe('Budi')
    expect(stored.inquiries[0].specs_req).toBe('Need coconut moisture < 3%.')
  })

  it('filters products by search query', () => {
    renderApp('/products')
    const search = screen.getByPlaceholderText('Search products...')
    fireEvent.change(search, { target: { value: 'coffee' } })
    expect(screen.getByText('Gayo Arabica Coffee')).toBeInTheDocument()
  })

  it('renders export process flow on services page', () => {
    renderApp('/services')
    expect(screen.getByText('Export Process')).toBeInTheDocument()
    expect(screen.getByText('International Payment Terms')).toBeInTheDocument()
  })
})
