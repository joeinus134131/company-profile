import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'
import { useStore } from '../context/StoreContext.jsx'

function formatDate(d, lang) {
  try {
    return new Date(d).toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  } catch {
    return d
  }
}

export default function News() {
  const { t, lang } = useLang()
  const { articles } = useStore()

  return (
    <div className="page">
      <div className="page-header">
        <div className="container"><h1>{t('news_title')}</h1></div>
      </div>

      <section className="section">
        <div className="container">
          <div className="news-grid">
            {articles.map((a) => (
              <article key={a.id} className="news-card">
                <div className="news-img">
                  <img src={a.cover} alt={a[`title_${lang}`]} loading="lazy" />
                </div>
                <div className="news-body">
                  <span className="news-date">{formatDate(a.date, lang)}</span>
                  <h3>{a[`title_${lang}`]}</h3>
                  <p>{a[`body_${lang}`]}</p>
                  <span className="link-more">{t('read_more')} →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
