import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function Certifications() {
  const { t } = useLang()
  const { certifications } = useStore()

  return (
    <div className="page">
      <div className="page-header">
        <div className="container"><h1>{t('cert_title')}</h1></div>
      </div>

      <section className="section">
        <div className="container">
          <div className="cert-grid">
            {certifications.map((c) => (
              <div key={c.id} className="cert-card large">
                <span className="cert-icon">{c.icon}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
