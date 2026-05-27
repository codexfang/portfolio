import { FormEvent, useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

const FORMSPREE = 'https://formspree.io/f/xeoeqero'

export default function ContactForm() {
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setState('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch(FORMSPREE, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setState('success')
        form.reset()
      } else {
        setState('error')
        setErrorMsg('Something went wrong. Please try again.')
      }
    } catch {
      setState('error')
      setErrorMsg('Network error. Please check your connection.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-6 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm text-white/70 mb-1.5">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base placeholder:text-white/50 focus:outline-none focus:border-cyan-500/50 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-white/70 mb-1.5">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base placeholder:text-white/50 focus:outline-none focus:border-cyan-500/50 transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm text-white/70 mb-1.5">Subject</label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base placeholder:text-white/50 focus:outline-none focus:border-cyan-500/50 transition-colors"
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-white/70 mb-1.5">Message</label>
        <textarea
          id="message"
          name="message"
          rows={10}
          required
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white text-base placeholder:text-white/50 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        type="submit"
        disabled={state === 'loading' || state === 'success'}
        className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-cyan-500/20 border border-cyan-400/30 text-white font-medium text-base hover:bg-cyan-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
        {state === 'success' && <CheckCircle className="w-5 h-5 text-green-400" />}
        {state === 'error' && <AlertCircle className="w-5 h-5 text-red-400" />}
        {state === 'idle' && <Send className="w-5 h-5" />}
        {state === 'loading' ? 'Sending...' : state === 'success' ? "Message sent!" : state === 'error' ? errorMsg : 'Send Message'}
      </button>
    </form>
  )
}
