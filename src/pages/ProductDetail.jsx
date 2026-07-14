import { useParams, Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function ProductDetail() {
  const { id } = useParams()
  const { t, lang } = useLang()
  const { products, categories } = useStore()

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="page">
        <div className="page-header"><div className="container"><h1>{t('no_products')}</h1></div></div>
        <div className="container section"><Link to="/products" className="btn">{t('back')}</Link></div>
      </div>
    )
  }

  const cat = categories.find((c) => c.id === product.categoryId)

  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <Link to="/products" className="back-link">← {t('nav_products')}</Link>
          <h1>{product[`name_${lang}`]}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container detail-grid">
          <div className="detail-img">
            <img src={product.image} alt={product[`name_${lang}`]} />
          </div>
          <div className="detail-info">
            {cat && <span className="badge">{lang === 'id' ? cat.name_id : cat.name_en}</span>}
            <p className="detail-desc">{product[`desc_${lang}`]}</p>
            <table className="spec-table">
              <tbody>
                <tr><th>{t('spec')}</th><td>{product[`spec_${lang}`]}</td></tr>
                <tr><th>{t('moq')}</th><td>{product[`moq_${lang}`]}</td></tr>
                <tr><th>{t('certificate')}</th><td>{product[`cert_${lang}`]}</td></tr>
              </tbody>
            </table>
            <Link to="/contact" className="btn">{t('form_submit')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
