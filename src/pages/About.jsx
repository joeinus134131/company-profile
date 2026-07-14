import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function About() {
  const { t, lang } = useLang()
  const { company, certifications } = useStore()

  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>{t('about_company')}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container about-layout">
          <div className="about-main">
            <h2>{t('about_history')}</h2>
            <p>{lang === 'id' ? company.about_id : company.about_en}</p>

            <h3>{t('about_vision')}</h3>
            <p>{lang === 'id' ? company.vision_id : company.vision_en}</p>

            <h3>{t('about_mission')}</h3>
            <ul className="mission-list">
              {(lang === 'id' ? company.mission_id : company.mission_en).map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
          </div>

          <aside className="about-side">
            <div className="info-box">
              <h4>{t('about_company')}</h4>
              <p><strong>{t('nav_home') === 'Beranda' ? 'Berdiri' : 'Founded'}:</strong> {company.founded}</p>
              <p><strong>{t('about_branches')}:</strong> {lang === 'id' ? company.branches_id : company.branches_en}</p>
              <p><strong>{t('about_markets')}:</strong> {lang === 'id' ? company.markets_id : company.markets_en}</p>
              <p><strong>{t('footer_contact')}:</strong> {company.email}</p>
            </div>
            <div className="info-box">
              <h4>{t('cert_title')}</h4>
              <ul className="cert-list">
                {certifications.map((c) => (
                  <li key={c.id}>{c.icon} {c.name}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </div>
  )
}
