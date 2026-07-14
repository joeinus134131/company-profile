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
  const [articles, setArticles] = useState(persisted?.articles ?? initArticles)
  const [inquiries, setInquiries] = useState(persisted?.inquiries ?? [])
  const [subscribers, setSubscribers] = useState(persisted?.subscribers ?? [])

  useEffect(() => {
    const data = { categories, products, articles, inquiries, subscribers }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    } catch (e) {
      console.warn('Failed to save store', e)
    }
  }, [categories, products, articles, inquiries, subscribers])

  /* ---------- PRODUCTS ---------- */
  const addProduct = useCallback((product) => {
    setProducts((prev) => [...prev, { ...product, id: 'p' + Date.now() }])
  }, [])
  const updateProduct = useCallback((id, product) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...product } : p)))
  }, [])
  const deleteProduct = useCallback((id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }, [])

  /* ---------- CATEGORIES ---------- */
  const addCategory = useCallback((category) => {
    setCategories((prev) => [
      ...prev,
      { ...category, id: 'c' + Date.now(), slug: (category.slug || category.name_en || 'cat').toLowerCase().replace(/\s+/g, '-') }
    ])
  }, [])
  const updateCategory = useCallback((id, category) => {
    setCategories((prev) => prev.map((c) => (c.id === id ? { ...c, ...category } : c)))
  }, [])
  const deleteCategory = useCallback((id) => {
    setCategories((prev) => {
      const used = products.some((p) => p.categoryId === id)
      if (used) {
        alert('Kategori masih digunakan oleh produk. Hapus/ubah produknya dulu.')
        return prev
      }
      return prev.filter((c) => c.id !== id)
    })
  }, [products])

  /* ---------- ARTICLES ---------- */
  const addArticle = useCallback((article) => {
    setArticles((prev) => [
      { ...article, id: 'a' + Date.now(), date: article.date || new Date().toISOString().slice(0, 10) },
      ...prev
    ])
  }, [])
  const updateArticle = useCallback((id, article) => {
    setArticles((prev) => prev.map((a) => (a.id === id ? { ...a, ...article } : a)))
  }, [])
  const deleteArticle = useCallback((id) => {
    setArticles((prev) => prev.filter((a) => a.id !== id))
  }, [])

  /* ---------- INQUIRIES ---------- */
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

  /* ---------- SUBSCRIBERS (Newsletter) ---------- */
  const addSubscriber = useCallback((email) => {
    setSubscribers((prev) => {
      if (prev.some((s) => s.email === email)) return prev
      return [{ email, createdAt: new Date().toISOString() }, ...prev]
    })
  }, [])
  const deleteSubscriber = useCallback((email) => {
    setSubscribers((prev) => prev.filter((s) => s.email !== email))
  }, [])

  const resetStore = useCallback(() => {
    setCategories(initCategories)
    setProducts(initProducts)
    setArticles(initArticles)
    setInquiries([])
    setSubscribers([])
  }, [])

  const value = {
    company,
    categories,
    products,
    services,
    certifications,
    articles,
    inquiries,
    subscribers,
    addProduct,
    updateProduct,
    deleteProduct,
    addCategory,
    updateCategory,
    deleteCategory,
    addArticle,
    updateArticle,
    deleteArticle,
    addInquiry,
    updateInquiryStatus,
    deleteInquiry,
    addSubscriber,
    deleteSubscriber,
    resetStore
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}
