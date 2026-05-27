export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 text-lg"
            aria-label="GitHub"
          >
            🐙
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 text-lg"
            aria-label="LinkedIn"
          >
            🔗
          </a>
          <a
            href="mailto:jason@fangux.com"
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110 text-lg"
            aria-label="Email"
          >
            ✉️
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs text-white/40">Available for opportunities</span>
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-white/40">&copy; 2025 Jason Fang</p>
          <a href="mailto:jason@fangux.com" className="text-xs text-white/30 hover:text-white/50 transition-colors">
            jason@fangux.com
          </a>
        </div>
      </div>
    </footer>
  )
}
