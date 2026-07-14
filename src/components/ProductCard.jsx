import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function ProductCard({ product }) {
  const { t, lang } = useLang()
  return (
    <Link to={`/products/${product.id}`} className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product[`name_${lang}`]} loading="lazy" />
      </div>
      <div className="product-body">
        <h3>{product[`name_${lang}`]}</h3>
        <p>{product[`desc_${lang}`]}</p>
        <span className="product-moq">{t('moq')}: {product[`moq_${lang}`]}</span>
      </div>
    </Link>
  )
}
