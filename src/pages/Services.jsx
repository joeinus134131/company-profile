import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function Services() {
  const { t, lang } = useLang()
  const { services } = useStore()

  return (
    <div className="page">
      <div className="page-header">
        <div className="container"><h1>{t('services_title')}</h1></div>
      </div>

      <section className="section">
        <div className="container">
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
    </div>
  )
}
