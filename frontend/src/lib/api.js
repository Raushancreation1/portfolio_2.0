import axios from 'axios'

// Normalize backend URL from env: trim whitespace and trailing slash
const rawBackend = import.meta.env.VITE_BACKEND_URL
const normalized = typeof rawBackend === 'string' ? rawBackend.trim() : ''
const backend = normalized ? normalized.replace(/\/$/, '') : ''
const baseURL = backend ? `${backend}/api` : '/api'

export const api = axios.create({
  baseURL,
  timeout: 10000,
})

export async function fetchProjects() {
  const { data } = await api.get('/projects')
  // Backend returns { success: true, data: [...] }
  return Array.isArray(data?.data) ? data.data : []
}

export async function submitContact(payload) {
  const { data } = await api.post('/contact', payload)
  return data
}
