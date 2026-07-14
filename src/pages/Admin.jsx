import { useState, useEffect } from 'react'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

const ADMIN_KEY = 'nf_admin_auth'
const DEFAULT_PASS = import.meta.env.VITE_ADMIN_PASS || 'admin123'

function formatDate(d) {
  try { return new Date(d).toLocaleString() } catch { return d }
}

export default function Admin() {
  const { t, lang } = useLang()
  const {
    products, categories, articles, inquiries, subscribers,
    addProduct, updateProduct, deleteProduct,
    addCategory, updateCategory, deleteCategory,
    addArticle, updateArticle, deleteArticle,
    updateInquiryStatus, deleteInquiry, deleteSubscriber, resetStore
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
            <p className="hint">Demo password: <code>{DEFAULT_PASS}</code></p>
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

  const tabs = [
    { id: 'products', label: `${t('admin_products')} (${products.length})` },
    { id: 'categories', label: `${t('admin_categories')} (${categories.length})` },
    { id: 'news', label: `${t('admin_news')} (${articles.length})` },
    { id: 'inquiry', label: `${t('admin_inquiry')} (${inquiries.length})` },
    { id: 'subscribers', label: `${t('admin_subscribers')} (${subscribers.length})` }
  ]

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
            {tabs.map((tb) => (
              <button
                key={tb.id}
                className={tab === tb.id ? 'chip active' : 'chip'}
                onClick={() => setTab(tb.id)}
              >
                {tb.label}
              </button>
            ))}
          </div>

          {tab === 'products' && (
            <div className="admin-products">
              <button className="btn btn-sm" onClick={() => setEditing({ kind: 'product' })}>{t('admin_add')}</button>
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
                        <button className="btn btn-sm btn-outline" onClick={() => setEditing({ kind: 'product', data: p })}>{t('admin_edit')}</button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteProduct(p.id)}>{t('admin_delete')}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'categories' && (
            <div className="admin-products">
              <button className="btn btn-sm" onClick={() => setEditing({ kind: 'category' })}>{t('admin_add_cat')}</button>
              <table className="admin-table">
                <thead>
                  <tr><th>ID</th><th>Name (ID)</th><th>Name (EN)</th><th>Slug</th><th></th></tr>
                </thead>
                <tbody>
                  {categories.map((c) => (
                    <tr key={c.id}>
                      <td>{c.id}</td>
                      <td>{c.name_id}</td>
                      <td>{c.name_en}</td>
                      <td>{c.slug}</td>
                      <td className="row-actions">
                        <button className="btn btn-sm btn-outline" onClick={() => setEditing({ kind: 'category', data: c })}>{t('admin_edit_cat')}</button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteCategory(c.id)}>{t('admin_delete_cat')}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {tab === 'news' && (
            <div className="admin-products">
              <button className="btn btn-sm" onClick={() => setEditing({ kind: 'article' })}>{t('admin_add_news')}</button>
              <table className="admin-table">
                <thead>
                  <tr><th>ID</th><th>Title (ID)</th><th>Date</th><th></th></tr>
                </thead>
                <tbody>
                  {articles.map((a) => (
                    <tr key={a.id}>
                      <td>{a.id}</td>
                      <td>{a.title_id}</td>
                      <td>{a.date}</td>
                      <td className="row-actions">
                        <button className="btn btn-sm btn-outline" onClick={() => setEditing({ kind: 'article', data: a })}>{t('admin_edit_news')}</button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteArticle(a.id)}>{t('admin_delete_news')}</button>
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
                  <p>📍 {i.port || '-'} · 🚢 {i.incoterm || '-'} · 📦 {i.volume || '-'} · 💲 {i.price || '-'}</p>
                  <p><strong>Specs:</strong> {i.specs_req}</p>
                  <div className="row-actions">
                    <button className="btn btn-sm" onClick={() => updateInquiryStatus(i.id, 'contacted')}>Contacted</button>
                    <button className="btn btn-sm btn-outline" onClick={() => updateInquiryStatus(i.id, 'done')}>Done</button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteInquiry(i.id)}>{t('admin_delete')}</button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === 'subscribers' && (
            <div className="admin-inquiry">
              {subscribers.length === 0 && <p className="empty">{t('admin_no_inquiry')}</p>}
              <table className="admin-table">
                <thead><tr><th>#</th><th>Email</th><th>Joined</th><th></th></tr></thead>
                <tbody>
                  {subscribers.map((s, idx) => (
                    <tr key={s.email}>
                      <td>{idx + 1}</td>
                      <td>{s.email}</td>
                      <td>{formatDate(s.createdAt)}</td>
                      <td className="row-actions">
                        <button className="btn btn-sm btn-danger" onClick={() => deleteSubscriber(s.email)}>{t('admin_del_sub')}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {editing && (
        <Modal kind={editing.kind} data={editing.data} onCancel={() => setEditing(null)} onSave={(d) => {
          if (editing.kind === 'product') {
            editing.data ? updateProduct(editing.data.id, d) : addProduct(d)
          } else if (editing.kind === 'category') {
            editing.data ? updateCategory(editing.data.id, d) : addCategory(d)
          } else if (editing.kind === 'article') {
            editing.data ? updateArticle(editing.data.id, d) : addArticle(d)
          }
          setEditing(null)
        }} />
      )}
    </div>
  )
}

function Modal({ kind, data, onCancel, onSave }) {
  if (kind === 'product') return <ProductForm data={data || {}} onCancel={onCancel} onSave={onSave} />
  if (kind === 'category') return <CategoryForm data={data || {}} onCancel={onCancel} onSave={onSave} />
  if (kind === 'article') return <ArticleForm data={data || {}} onCancel={onCancel} onSave={onSave} />
  return null
}

function ProductForm({ data, onCancel, onSave }) {
  const { t } = useLang()
  const { categories } = useStore()
  const [d, setD] = useState({
    id: data.id || '',
    categoryId: data.categoryId || categories[0].id,
    name_id: data.name_id || '', name_en: data.name_en || '',
    image: data.image || '',
    spec_id: data.spec_id || '', spec_en: data.spec_en || '',
    moq_id: data.moq_id || '', moq_en: data.moq_en || '',
    cert_id: data.cert_id || '', cert_en: data.cert_en || '',
    desc_id: data.desc_id || '', desc_en: data.desc_en || '',
    specsText: (data.specs || []).map((s) => `${s.label_id} | ${s.label_en} | ${s.value}`).join('\n')
  })
  const set = (k, v) => setD({ ...d, [k]: v })
  const submit = (e) => {
    e.preventDefault()
    if (!d.name_id || !d.name_en) { alert(t('form_required')); return }
    const specs = d.specsText
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const parts = line.split('|').map((x) => x.trim())
        return { label_id: parts[0] || '', label_en: parts[1] || parts[0] || '', value: parts[2] || '' }
      })
    onSave({ ...d, specs })
  }
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{d.id ? t('admin_edit') : t('admin_add')}</h3>
        <form onSubmit={submit} className="admin-form">
          <label>{t('admin_category')}</label>
          <select value={d.categoryId} onChange={(e) => set('categoryId', e.target.value)}>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name_id}</option>)}
          </select>
          <label>{t('admin_name_id')}</label>
          <input value={d.name_id} onChange={(e) => set('name_id', e.target.value)} />
          <label>{t('admin_name_en')}</label>
          <input value={d.name_en} onChange={(e) => set('name_en', e.target.value)} />
          <label>{t('admin_image')}</label>
          <input value={d.image} onChange={(e) => set('image', e.target.value)} />
          <label>{t('admin_spec_id')}</label>
          <input value={d.spec_id} onChange={(e) => set('spec_id', e.target.value)} />
          <label>{t('admin_spec_en')}</label>
          <input value={d.spec_en} onChange={(e) => set('spec_en', e.target.value)} />
          <label>MOQ (ID)</label>
          <input value={d.moq_id} onChange={(e) => set('moq_id', e.target.value)} />
          <label>MOQ (EN)</label>
          <input value={d.moq_en} onChange={(e) => set('moq_en', e.target.value)} />
          <label>Cert (ID)</label>
          <input value={d.cert_id} onChange={(e) => set('cert_id', e.target.value)} />
          <label>Cert (EN)</label>
          <input value={d.cert_en} onChange={(e) => set('cert_en', e.target.value)} />
          <label>{t('admin_desc_id')}</label>
          <textarea rows="3" value={d.desc_id} onChange={(e) => set('desc_id', e.target.value)} />
          <label>{t('admin_desc_en')}</label>
          <textarea rows="3" value={d.desc_en} onChange={(e) => set('desc_en', e.target.value)} />
          <label>Specs (format: LabelID | LabelEN | Value)</label>
          <textarea rows="4" value={d.specsText} onChange={(e) => set('specsText', e.target.value)} />
          <div className="row-actions">
            <button type="submit" className="btn">{t('admin_save')}</button>
            <button type="button" className="btn btn-outline" onClick={onCancel}>{t('admin_cancel')}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function CategoryForm({ data, onCancel, onSave }) {
  const { t } = useLang()
  const [d, setD] = useState({
    id: data.id || '',
    name_id: data.name_id || '', name_en: data.name_en || '', slug: data.slug || ''
  })
  const set = (k, v) => setD({ ...d, [k]: v })
  const submit = (e) => {
    e.preventDefault()
    if (!d.name_id || !d.name_en) { alert(t('form_required')); return }
    onSave(d)
  }
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{d.id ? t('admin_edit_cat') : t('admin_add_cat')}</h3>
        <form onSubmit={submit} className="admin-form">
          <label>{t('admin_cat_id')}</label>
          <input value={d.name_id} onChange={(e) => set('name_id', e.target.value)} />
          <label>{t('admin_cat_en')}</label>
          <input value={d.name_en} onChange={(e) => set('name_en', e.target.value)} />
          <label>{t('admin_cat_slug')}</label>
          <input value={d.slug} onChange={(e) => set('slug', e.target.value)} placeholder="auto-from-en" />
          <div className="row-actions">
            <button type="submit" className="btn">{t('admin_save')}</button>
            <button type="button" className="btn btn-outline" onClick={onCancel}>{t('admin_cancel')}</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function ArticleForm({ data, onCancel, onSave }) {
  const { t } = useLang()
  const [d, setD] = useState({
    id: data.id || '',
    title_id: data.title_id || '', title_en: data.title_en || '',
    cover: data.cover || '', date: data.date || new Date().toISOString().slice(0, 10),
    body_id: data.body_id || '', body_en: data.body_en || ''
  })
  const set = (k, v) => setD({ ...d, [k]: v })
  const submit = (e) => {
    e.preventDefault()
    if (!d.title_id || !d.title_en) { alert(t('form_required')); return }
    onSave(d)
  }
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>{d.id ? t('admin_edit_news') : t('admin_add_news')}</h3>
        <form onSubmit={submit} className="admin-form">
          <label>{t('admin_art_title_id')}</label>
          <input value={d.title_id} onChange={(e) => set('title_id', e.target.value)} />
          <label>{t('admin_art_title_en')}</label>
          <input value={d.title_en} onChange={(e) => set('title_en', e.target.value)} />
          <label>{t('admin_art_cover')}</label>
          <input value={d.cover} onChange={(e) => set('cover', e.target.value)} />
          <label>{t('admin_art_date')}</label>
          <input value={d.date} onChange={(e) => set('date', e.target.value)} />
          <label>{t('admin_art_body_id')}</label>
          <textarea rows="3" value={d.body_id} onChange={(e) => set('body_id', e.target.value)} />
          <label>{t('admin_art_body_en')}</label>
          <textarea rows="3" value={d.body_en} onChange={(e) => set('body_en', e.target.value)} />
          <div className="row-actions">
            <button type="submit" className="btn">{t('admin_save')}</button>
            <button type="button" className="btn btn-outline" onClick={onCancel}>{t('admin_cancel')}</button>
          </div>
        </form>
      </div>
    </div>
  )
}
