import emailjs from '@emailjs/browser'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function isEmailConfigured() {
  return Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY)
}

// Mengirim inquiry ke email perusahaan via EmailJS (tanpa backend).
// Jika belum dikonfigurasi, mengembalikan { ok:false, reason:'not_configured' }
// agar caller tetap menyimpan inquiry ke localStorage (fallback).
export async function sendInquiry(data) {
  if (!isEmailConfigured()) return { ok: false, reason: 'not_configured' }
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        name: data.name || '',
        company: data.company || '-',
        email: data.email || '',
        country: data.country || '-',
        product: data.productName || '-',
        message: data.message || ''
      },
      { publicKey: PUBLIC_KEY }
    )
    return { ok: true }
  } catch (err) {
    console.error('EmailJS error', err)
    return { ok: false, reason: 'error', error: err }
  }
}

// Newsletter subscribe via EmailJS (opsional). Fallback: simpan ke localStorage.
export async function sendSubscription(email) {
  if (!isEmailConfigured()) return { ok: false, reason: 'not_configured' }
  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { name: 'Subscriber', email, message: 'Newsletter subscription: ' + email },
      { publicKey: PUBLIC_KEY }
    )
    return { ok: true }
  } catch (err) {
    console.error('EmailJS error', err)
    return { ok: false, reason: 'error', error: err }
  }
}
