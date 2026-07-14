import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
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
    expect(screen.getByText('Katalog Produk')).toBeInTheDocument()
  })

  it('submits contact inquiry and shows success', () => {
    renderApp('/contact')
    fireEvent.change(screen.getByLabelText(/Nama/), { target: { value: 'Budi' } })
    fireEvent.change(screen.getByLabelText(/Email/), { target: { value: 'budi@buyer.com' } })
    fireEvent.change(screen.getByLabelText(/Pesan/), { target: { value: 'Interested in coconut.' } })
    fireEvent.click(screen.getByText('Kirim Inquiry'))
    expect(screen.getByText(/Terima kasih/)).toBeInTheDocument()
    const stored = JSON.parse(localStorage.getItem('nf_store_v1'))
    expect(stored.inquiries.length).toBe(1)
    expect(stored.inquiries[0].name).toBe('Budi')
  })

  it('filters products by search query', () => {
    renderApp('/products')
    const search = screen.getByPlaceholderText('Cari produk...')
    fireEvent.change(search, { target: { value: 'kopi' } })
    expect(screen.getByText('Kopi Arabika Gayo')).toBeInTheDocument()
  })
})
