import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const { company } = useStore()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', key: 'nav_home' },
    { to: '/about', key: 'nav_about' },
    { to: '/products', key: 'nav_products' },
    { to: '/services', key: 'nav_services' },
    { to: '/certifications', key: 'nav_cert' },
    { to: '/news', key: 'nav_news' },
    { to: '/contact', key: 'nav_contact' }
  ]

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-logo">N</span>
          <span className="brand-text">
            <strong>Nexflux</strong>
            <small>Indonesia Abadi</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          aria-label="menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setOpen(false)}
            >
              {t(l.key)}
            </NavLink>
          ))}
          <div className="nav-actions">
            <button className="lang-btn" onClick={toggleLang} title="Language">
              {t('lang_toggle')}
            </button>
            <Link to="/admin" className="btn btn-sm" onClick={() => setOpen(false)}>
              {t('nav_admin')}
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
