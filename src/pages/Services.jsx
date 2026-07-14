import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function Services() {
  const { t, lang } = useLang()
  const { services, exportProcess, paymentTerms } = useStore()

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

      {/* EXPORT PROCESS FLOW */}
      <section className="section alt">
        <div className="container">
          <div className="section-head">
            <h2>{t('process_title')}</h2>
            <p>{t('process_sub')}</p>
          </div>
          <div className="process-flow">
            {exportProcess.map((step, i) => (
              <div key={step.id} className="process-step">
                <div className="process-icon">{step.icon}</div>
                <span className="process-num">{i + 1}</span>
                <h4>{lang === 'id' ? step.title_id : step.title_en}</h4>
                <p>{lang === 'id' ? step.desc_id : step.desc_en}</p>
                {i < exportProcess.length - 1 && <span className="process-arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAYMENT TERMS */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{t('payment_title')}</h2>
          </div>
          <div className="payment-grid">
            {paymentTerms.map((p) => (
              <div key={p.id} className="payment-card">
                <div className="payment-icon">{p.icon}</div>
                <h4>{lang === 'id' ? p.name_id : p.name_en}</h4>
                <p>{lang === 'id' ? p.desc_id : p.desc_en}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
