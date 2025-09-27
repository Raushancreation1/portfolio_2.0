import { useEffect, useRef, useState } from 'react'
import { api } from '../lib/api.js'
import TiltCard from './TiltCard.jsx'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI assistant. How can I help you today?' }
  ])
  const listRef = useRef(null)

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [messages, open])

  const send = async () => {
    const text = input.trim()
    if (!text || sending) return
    setError('')
    setSending(true)
    setMessages((m) => [...m, { role: 'user', content: text }])
    setInput('')
    try {
      const { data } = await api.post('/chat', { message: text })
      const reply = data?.reply || 'Sorry, I could not generate a response.'
      setMessages((m) => [...m, { role: 'assistant', content: reply }])
    } catch (e) {
      setError('Failed to send message')
    } finally {
      setSending(false)
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!open && (
        <TiltCard>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 text-slate-950 font-medium px-4 py-2 shadow hover:opacity-90"
            aria-label="Open chat"
          >
            Chat
          </button>
        </TiltCard>
      )}

      {open && (
        <TiltCard className="w-[90vw] max-w-sm rounded-xl border border-slate-800 bg-slate-950/95 backdrop-blur">
          <div className="p-3 border-b border-slate-800 flex items-center justify-between">
            <div className="text-sm font-medium">AI Assistant</div>
            <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-primary text-sm">Close</button>
          </div>
          <div ref={listRef} className="p-3 h-72 overflow-y-auto space-y-3">
            {messages.map((m, idx) => (
              <div key={idx} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                <div className={
                  'inline-block max-w-[80%] rounded-lg px-3 py-2 text-sm ' +
                  (m.role === 'user' ? 'bg-primary text-slate-950' : 'bg-slate-800 text-slate-200')
                }>
                  {m.content}
                </div>
              </div>
            ))}
            {error && <p className="text-xs text-red-400">{error}</p>}
          </div>
          <div className="p-3 border-t border-slate-800">
            <div className="flex gap-2">
              <textarea
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Type a message..."
                className="flex-1 resize-none rounded border border-slate-800 bg-slate-900 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
              <button
                onClick={send}
                disabled={sending}
                className="rounded bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-amber-300 text-slate-950 text-sm font-medium px-3 py-2 disabled:opacity-60"
              >
                {sending ? '...' : 'Send'}
              </button>
            </div>
          </div>
        </TiltCard>
      )}
    </div>
  )
}
