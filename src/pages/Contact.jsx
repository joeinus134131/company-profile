import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'
import { sendInquiry, sendSubscription, isEmailConfigured } from '../lib/email.js'

const INCOTERMS = ['FOB', 'CIF', 'EXW', 'FCA', 'CFR', 'DAP']

export default function Contact() {
  const { t, lang } = useLang()
  const { company, products, addInquiry, addSubscriber } = useStore()

  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '',
    productId: '', port: '', incoterm: 'FOB', volume: '', price: '', specs_req: ''
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [emailNote, setEmailNote] = useState('')

  const [subEmail, setSubEmail] = useState('')
  const [subSent, setSubSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.specs_req) {
      setError(t('form_required'))
      return
    }
    const product = products.find((p) => p.id === form.productId)
    addInquiry({ ...form, lang })
    setError('')
    if (isEmailConfigured()) {
      const res = await sendInquiry({
        ...form,
        productName: product ? product[`name_${lang}`] : ''
      })
      setEmailNote(res.ok ? '' : t('admin_cfg_note'))
    } else {
      setEmailNote(t('admin_cfg_note'))
    }
    setSent(true)
    setForm({ name: '', company: '', email: '', country: '', productId: '', port: '', incoterm: 'FOB', volume: '', price: '', specs_req: '' })
  }

  const handleSubscribe = async (e) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(subEmail)) {
      setError(t('form_required'))
      return
    }
    addSubscriber(subEmail)
    if (isEmailConfigured()) await sendSubscription(subEmail)
    setSubSent(true)
    setSubEmail('')
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="container"><h1>{t('contact_title')}</h1></div>
      </div>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info">
            <h3>{company.name}</h3>
            <p>✉ {company.email}</p>
            <p>☎ {company.phone}</p>
            <p>📍 {lang === 'id' ? company.address_id : company.address_en}</p>
            <p>🌐 {lang === 'id' ? company.hq_id : company.hq_en}</p>
            <a className="btn btn-outline" href={company.maps} target="_blank" rel="noreferrer">
              {lang === 'id' ? 'Buka di Maps' : 'Open in Maps'}
            </a>

            <div className="newsletter-box">
              <h4>{t('subscribe_title')}</h4>
              <p>{t('subscribe_sub')}</p>
              {subSent ? (
                <div className="alert success">{t('subscribe_success')}</div>
              ) : (
                <form className="subscribe-form" onSubmit={handleSubscribe}>
                  <input
                    type="email"
                    placeholder={t('subscribe_placeholder')}
                    value={subEmail}
                    onChange={(e) => setSubEmail(e.target.value)}
                  />
                  <button type="submit" className="btn btn-sm">{t('subscribe')}</button>
                </form>
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="form-intro">{t('contact_sub')}</p>
            {sent && <div className="alert success">{t('form_success')}</div>}
            {emailNote && <div className="alert error">{emailNote}</div>}
            {error && <div className="alert error">{error}</div>}

            <div className="form-row">
              <label htmlFor="f-name">{t('form_name')} *</label>
              <input id="f-name" name="name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="f-company">{t('form_company')} *</label>
              <input id="f-company" name="company" value={form.company} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="f-email">{t('form_email')} *</label>
              <input id="f-email" type="email" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="f-country">{t('form_country')}</label>
              <input id="f-country" name="country" value={form.country} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label htmlFor="f-product">{t('form_product')}</label>
              <select id="f-product" name="productId" value={form.productId} onChange={handleChange}>
                <option value="">--</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p[`name_${lang}`]}</option>
                ))}
              </select>
            </div>
            <div className="form-grid-2">
              <div className="form-row">
                <label htmlFor="f-port">{t('form_port')}</label>
                <input id="f-port" name="port" value={form.port} onChange={handleChange} placeholder="e.g. Rotterdam, NL" />
              </div>
              <div className="form-row">
                <label htmlFor="f-incoterm">{t('form_incoterm')}</label>
                <select id="f-incoterm" name="incoterm" value={form.incoterm} onChange={handleChange}>
                  {INCOTERMS.map((it) => <option key={it} value={it}>{it}</option>)}
                </select>
              </div>
            </div>
            <div className="form-grid-2">
              <div className="form-row">
                <label htmlFor="f-volume">{t('form_volume')}</label>
                <input id="f-volume" name="volume" value={form.volume} onChange={handleChange} placeholder="e.g. 1x20ft / 20 MT" />
              </div>
              <div className="form-row">
                <label htmlFor="f-price">{t('form_price')}</label>
                <input id="f-price" name="price" value={form.price} onChange={handleChange} placeholder="e.g. USD 1200/MT" />
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="f-specs">{t('form_specs_req')} *</label>
              <textarea id="f-specs" name="specs_req" rows="4" value={form.specs_req} onChange={handleChange} />
            </div>
            <button type="submit" className="btn">{t('form_submit')}</button>
          </form>
        </div>

        {/* GOOGLE MAPS EMBED */}
        <div className="container map-wrap">
          <h3 className="map-title">{t('maps_title')}</h3>
          <iframe
            title="Nexflux Location"
            src={company.mapsEmbed}
            width="100%"
            height="360"
            style={{ border: 0, borderRadius: '12px' }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  )
}
