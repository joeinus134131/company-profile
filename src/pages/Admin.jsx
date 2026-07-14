import { useState, useEffect } from 'react'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

const ADMIN_KEY = 'nf_admin_auth'
const DEFAULT_PASS = 'admin123'

function formatDate(d) {
  try { return new Date(d).toLocaleString() } catch { return d }
}

export default function Admin() {
  const { t, lang } = useLang()
  const {
    products, categories, inquiries,
    addProduct, updateProduct, deleteProduct,
    updateInquiryStatus, deleteInquiry, resetStore
  } = useStore()

  const [auth, setAuth] = useState(() => localStorage.getItem(ADMIN_KEY) === '1')
  const [pass, setPass] = useState('')
  const [passErr, setPassErr] = useState('')
  const [editing, setEditing] = useState(null)
  const [tab, setTab] = useState('products')

  useEffect(() => {
    localStorage.setItem(ADMIN_KEY, auth ? '1' : '0')
  }, [auth])

  const login = (e) => {
    e.preventDefault()
    if (pass === DEFAULT_PASS) {
      setAuth(true)
      setPassErr('')
    } else {
      setPassErr(t('admin_wrong'))
    }
  }

  if (!auth) {
    return (
      <div className="page">
        <div className="page-header"><div className="container"><h1>{t('admin_title')}</h1></div></div>
        <div className="container section">
          <form className="admin-login" onSubmit={login}>
            <h3>{t('admin_login')}</h3>
            <p className="hint">Demo password: <code>admin123</code></p>
            {passErr && <div className="alert error">{passErr}</div>}
            <div className="form-row">
              <label>{t('admin_password')}</label>
              <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <button type="submit" className="btn">{t('admin_login')}</button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="page">
      <div className="page-header">
        <div className="container admin-head">
          <h1>{t('admin_title')}</h1>
          <div className="admin-actions">
            <button className="btn btn-sm btn-outline" onClick={resetStore}>Reset Data</button>
            <button className="btn btn-sm" onClick={() => setAuth(false)}>{t('admin_logout')}</button>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="admin-tabs">
            <button className={tab === 'products' ? 'chip active' : 'chip'} onClick={() => setTab('products')}>
              {t('admin_products')} ({products.length})
            </button>
            <button className={tab === 'inquiry' ? 'chip active' : 'chip'} onClick={() => setTab('inquiry')}>
              {t('admin_inquiry')} ({inquiries.length})
            </button>
          </div>

          {tab === 'products' && (
            <div className="admin-products">
              <button className="btn btn-sm" onClick={() => setEditing({})}>{t('admin_add')}</button>
              <table className="admin-table">
                <thead>
                  <tr><th>ID</th><th>Name (ID)</th><th>Category</th><th></th></tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.name_id}</td>
                      <td>{categories.find((c) => c.id === p.categoryId)?.name_id}</td>
                      <td className="row-actions">
                        <button className="btn btn-sm btn-outline" onClick={() => setEditing(p)}>{t('admin_edit')}</button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(p.id)}>{t('admin_delete')}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'inquiry' && (
            <div className="admin-inquiry">
              {inquiries.length === 0 && <p className="empty">{t('admin_no_inquiry')}</p>}
              {inquiries.map((i) => (
                <div key={i.id} className="inquiry-card">
                  <div className="inquiry-top">
                    <strong>{i.name}</strong> <span className="badge">{i.status}</span>
                    <span className="inquiry-date">{formatDate(i.createdAt)}</span>
                  </div>
                  <p>{i.company} · {i.email} · {i.country}</p>
                  <p>{i.message}</p>
                  <div className="row-actions">
                    <button className="btn btn-sm" onClick={() => updateInquiryStatus(i.id, 'contacted')}>Contacted</button>
                    <button className="btn btn-sm btn-outline" onClick={() => updateInquiryStatus(i.id, 'done')}>Done</button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteInquiry(i.id)}>{t('admin_delete')}</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {editing && (
        <ProductForm
          product={editing}
          categories={categories}
          onCancel={() => setEditing(null)}
          onSave={(data) => {
            if (data.id) updateProduct(data.id, data)
            else addProduct(data)
            setEditing(null)
          }}
        />
      )}
    </div>
  )
}

function ProductForm({ product, categories, onCancel, onSave }) {
  const { t, lang } = useLang()
  const [data, setData] = useState({
    id: product.id || '',
    categoryId: product.categoryId || categories[0].id,
    name_id: product.name_id || '',
    name_en: product.name_en || '',
    image: product.image || '',
    spec_id: product.spec_id || '',
    spec_en: product.spec_en || '',
    moq_id: product.moq_id || '',
    moq_en: product.moq_en || '',
    cert_id: product.cert_id || '',
    cert_en: product.cert_en || '',
    desc_id: product.desc_id || '',
    desc_en: product.desc_en || ''
  })

  const set = (k, v) => setData({ ...data, [k]: v })

  const submit = (e) => {
    e.preventDefault()
    if (!data.name_id || !data.name_en) {
      alert(t('form_required'))
      return
    }
    onSave(data)
  }

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{data.id ? t('admin_edit') : t('admin_add')}</h3>
        <form onSubmit={submit} className="admin-form">
          <label>{t('admin_category')}</label>
          <select value={data.categoryId} onChange={(e) => set('categoryId', e.target.value)}>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>{c.name_id}</option>
            ))}
          </select>
          <label>{t('admin_name_id')}</label>
          <input value={data.name_id} onChange={(e) => set('name_id', e.target.value)} />
          <label>{t('admin_name_en')}</label>
          <input value={data.name_en} onChange={(e) => set('name_en', e.target.value)} />
          <label>{t('admin_image')}</label>
          <input value={data.image} onChange={(e) => set('image', e.target.value)} />
          <label>{t('admin_spec_id')}</label>
          <input value={data.spec_id} onChange={(e) => set('spec_id', e.target.value)} />
          <label>{t('admin_spec_en')}</label>
          <input value={data.spec_en} onChange={(e) => set('spec_en', e.target.value)} />
          <label>MOQ (ID)</label>
          <input value={data.moq_id} onChange={(e) => set('moq_id', e.target.value)} />
          <label>MOQ (EN)</label>
          <input value={data.moq_en} onChange={(e) => set('moq_en', e.target.value)} />
          <label>Cert (ID)</label>
          <input value={data.cert_id} onChange={(e) => set('cert_id', e.target.value)} />
          <label>Cert (EN)</label>
          <input value={data.cert_en} onChange={(e) => set('cert_en', e.target.value)} />
          <label>{t('admin_desc_id')}</label>
          <textarea rows="3" value={data.desc_id} onChange={(e) => set('desc_id', e.target.value)} />
          <label>{t('admin_desc_en')}</label>
          <textarea rows="3" value={data.desc_en} onChange={(e) => set('desc_en', e.target.value)} />
          <div className="row-actions">
            <button type="submit" className="btn">{t('admin_save')}</button>
            <button type="button" className="btn btn-outline" onClick={onCancel}>{t('admin_cancel')}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
