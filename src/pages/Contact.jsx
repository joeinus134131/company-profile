import { useState } from 'react'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

export default function Contact() {
  const { t, lang } = useLang()
  const { company, products, addInquiry } = useStore()
  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '', productId: '', message: ''
  })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError(t('form_required'))
      return
    }
    addInquiry({ ...form, lang })
    setSent(true)
    setError('')
    setForm({ name: '', company: '', email: '', country: '', productId: '', message: '' })
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
              {lang === 'id' ? 'Lihat Peta' : 'View Map'}
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <p className="form-intro">{t('contact_sub')}</p>
            {sent && <div className="alert success">{t('form_success')}</div>}
            {error && <div className="alert error">{error}</div>}

            <div className="form-row">
              <label>{t('form_name')} *</label>
              <input name="name" value={form.name} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>{t('form_company')}</label>
              <input name="company" value={form.company} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>{t('form_email')} *</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>{t('form_country')}</label>
              <input name="country" value={form.country} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>{t('form_product')}</label>
              <select name="productId" value={form.productId} onChange={handleChange}>
                <option value="">--</option>
                {products.map((p) => (
                  <option key={p.id} value={p.id}>{p[`name_${lang}`]}</option>
                ))}
              </select>
            </div>
            <div className="form-row">
              <label>{t('form_message')} *</label>
              <textarea name="message" rows="4" value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn">{t('form_submit')}</button>
          </form>
        </div>
      </section>
    </div>
  )
}
