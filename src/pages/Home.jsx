import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'
import ProductCard from '../components/ProductCard.jsx'

export default function Home() {
  const { t, lang } = useLang()
  const { products, services, certifications, company, gallery } = useStore()
  const [lightbox, setLightbox] = useState(null)

  const featured = products.slice(0, 4)

  return (
    <div className="page">
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>{t('hero_title')}</h1>
            <p>{t('hero_sub')}</p>
            <div className="hero-btns">
              <Link to="/products" className="btn">{t('hero_cta')}</Link>
              <Link to="/contact" className="btn btn-outline">{t('hero_cta2')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat"><strong>{products.length}+</strong><span>{t('stats_products')}</span></div>
          <div className="stat"><strong>40+</strong><span>{t('stats_markets')}</span></div>
          <div className="stat"><strong>{new Date().getFullYear() - company.founded}</strong><span>{t('stats_years')}</span></div>
          <div className="stat"><strong>120+</strong><span>{t('stats_clients')}</span></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t('section_about')}</h2>
            <p>{t('home_about_text')}</p>
          </div>
          <div className="about-grid">
            <div>
              <h3>{t('about_vision')}</h3>
              <p>{lang === 'id' ? company.vision_id : company.vision_en}</p>
            </div>
            <div>
              <h3>{t('about_mission')}</h3>
              <ul>
                {(lang === 'id' ? company.mission_id : company.mission_en).map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link to="/about" className="link-more">{t('view_all')} →</Link>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t('section_products')}</h2>
          </div>
          <div className="product-grid">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="center">
            <Link to="/products" className="btn">{t('view_all')}</Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t('section_services')}</h2>
          </div>
          <div className="service-grid">
            {services.map((s) => (
              <div key={s.id} className="service-card">
                <div className="service-icon">{s.icon}</div>
                <h3>{lang === 'id' ? s.title_id : s.title_en}</h3>
                <p>{lang === 'id' ? s.desc_id : s.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERT */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t('section_cert')}</h2>
          </div>
          <div className="cert-grid">
            {certifications.map((c) => (
              <div key={c.id} className="cert-card">
                <span className="cert-icon">{c.icon}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATIONS GALLERY */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t('gallery_title')}</h2>
            <p>{t('gallery_sub')}</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((g) => (
              <button
                key={g.id}
                className="gallery-item"
                onClick={() => setLightbox(g)}
                aria-label={lang === 'id' ? g.caption_id : g.caption_en}
              >
                <img src={g.src} alt={lang === 'id' ? g.caption_id : g.caption_en} loading="lazy" />
                <span className="gallery-cap">{lang === 'id' ? g.caption_id : g.caption_en}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <h2>{t('contact_title')}</h2>
          <Link to="/contact" className="btn btn-light">{t('hero_cta2')}</Link>
        </div>
      </section>

      {lightbox && (
        <div className="modal-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="close">×</button>
            <img src={lightbox.src} alt={lang === 'id' ? lightbox.caption_id : lightbox.caption_en} />
            <p>{lang === 'id' ? lightbox.caption_id : lightbox.caption_en}</p>
          </div>
        </div>
      )}
    </div>
  )
}
