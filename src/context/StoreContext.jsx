import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {
  company as initCompany,
  categories as initCategories,
  products as initProducts,
  services as initServices,
  certifications as initCerts,
  articles as initArticles
} from '../data/initialData.js'

const StoreContext = createContext(null)
const STORAGE_KEY = 'nf_store_v1'

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch (e) {
    console.warn('Failed to load store', e)
  }
  return null
}

export function StoreProvider({ children }) {
  const persisted = loadStore()

  const [company] = useState(initCompany)
  const [categories, setCategories] = useState(persisted?.categories ?? initCategories)
  const [products, setProducts] = useState(persisted?.products ?? initProducts)
  const [services] = useState(initServices)
  const [certifications] = useState(initCerts)
  const [articles] = useState(initArticles)
  const [inquiries, setInquiries] = useState(persisted?.inquiries ?? [])

  useEffect(() => {
    const data = { categories, products, inquiries }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (e) {
      console.warn('Failed to save store', e)
    }
  }, [categories, products, inquiries])

  const addProduct = useCallback((product) => {
    setProducts((prev) => [
      ...prev,
      { ...product, id: 'p' + Date.now() }
    ])
  }, [])

  const updateProduct = useCallback((id, product) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...product } : p)))
  }, [])

  const deleteProduct = useCallback((id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }, [])

  const addInquiry = useCallback((inquiry) => {
    setInquiries((prev) => [
      { ...inquiry, id: 'i' + Date.now(), status: 'new', createdAt: new Date().toISOString() },
      ...prev
    ])
  }, [])

  const updateInquiryStatus = useCallback((id, status) => {
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)))
  }, [])

  const deleteInquiry = useCallback((id) => {
    setInquiries((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const resetStore = useCallback(() => {
    setCategories(initCategories)
    setProducts(initProducts)
    setInquiries([])
  }, [])

  const value = {
    company,
    categories,
    products,
    services,
    certifications,
    articles,
    inquiries,
    addProduct,
    updateProduct,
    deleteProduct,
    addInquiry,
    updateInquiryStatus,
    deleteInquiry,
    resetStore
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
