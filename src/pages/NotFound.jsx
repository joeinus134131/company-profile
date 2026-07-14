import { Link } from 'react-router-dom'
import { useLang } from '../i18n.jsx'

export default function NotFound() {
  const { t } = useLang()
  return (
    <div className="page">
      <div className="page-header"><div className="container"><h1>{t('notfound')}</h1></div></div>
      <div className="container section center">
        <Link to="/" className="btn">{t('notfound_back')}</Link>
      </div>
    </div>
  )
}
