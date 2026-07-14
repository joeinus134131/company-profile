import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function Footer() {
  const { t, lang } = useLang()
  const { company } = useStore()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>{company.name}</h4>
          <p className="footer-tag">{t('footer_tag')}</p>
          <p>{lang === 'id' ? company.address_id : company.address_en}</p>
          <p>✉ {company.email}</p>
          <p>☎ {company.phone}</p>
        </div>

        <div>
          <h4>{t('footer_quick')}</h4>
          <ul className="footer-links">
            <li><Link to="/about">{t('nav_about')}</Link></li>
            <li><Link to="/products">{t('nav_products')}</Link></li>
            <li><Link to="/services">{t('nav_services')}</Link></li>
            <li><Link to="/certifications">{t('nav_cert')}</Link></li>
            <li><Link to="/contact">{t('nav_contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4>{t('footer_contact')}</h4>
          <p>{lang === 'id' ? company.hq_id : company.hq_en}</p>
          <p>{t('about_branches')}: {lang === 'id' ? company.branches_id : company.branches_en}</p>
          <a className="btn btn-sm" href={company.maps} target="_blank" rel="noreferrer">
            📍 Map
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {year} {company.name}. {t('footer_rights')}</p>
      </div>
    </footer>
  )
}
