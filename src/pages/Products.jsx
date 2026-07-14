import { useState, useMemo } from 'react'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function Products() {
  const { t, lang } = useLang()
  const { products, categories } = useStore()
  const [active, setActive] = useState('all')
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = active === 'all' || p.categoryId === active
      const matchQuery =
        !query ||
        p[`name_${lang}`].toLowerCase().includes(query.toLowerCase()) ||
        p[`desc_${lang}`].toLowerCase().includes(query.toLowerCase())
      return matchCat && matchQuery
    })
  }, [products, active, query, lang])

  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>{t('section_products')}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="filters">
            <button
              className={active === 'all' ? 'chip active' : 'chip'}
              onClick={() => setActive('all')}
            >
              {t('all_categories')}
            </button>
            {categories.map((c) => (
              <button
                key={c.id}
                className={active === c.id ? 'chip active' : 'chip'}
                onClick={() => setActive(c.id)}
              >
                {lang === 'id' ? c.name_id : c.name_en}
              </button>
            ))}
            <input
              type="search"
              className="search-input"
              placeholder={t('search_placeholder')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {filtered.length === 0 ? (
            <p className="empty">{t('no_products')}</p>
          ) : (
            <div className="product-grid">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
