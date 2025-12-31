function Topbar() {
  return (
    <header className="h-14 flex items-center justify-between px-4 bg-surface border-b border-border shrink-0">
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-lg border border-dashed border-border flex items-center justify-center text-text-muted text-lg cursor-pointer hover:border-text-muted hover:text-text-secondary">+</button>
        <div className="flex items-center -space-x-1">
          <div className="w-8 h-8 rounded-full bg-background border-2 border-surface flex items-center justify-center text-xs font-medium text-text-secondary cursor-pointer">A</div>
          <div className="w-8 h-8 rounded-full bg-background border-2 border-surface flex items-center justify-center text-xs font-medium text-text-secondary cursor-pointer">E</div>
          <div className="w-8 h-8 rounded-full bg-background border-2 border-surface flex items-center justify-center text-xs font-medium text-text-secondary cursor-pointer">M</div>
          <div className="w-8 h-8 rounded-full bg-text-primary border-2 border-surface flex items-center justify-center text-xs font-medium text-surface cursor-pointer">C</div>
        </div>
      </div>

      <div className="flex-1 max-w-sm mx-8">
        <div className="h-9 px-3 rounded-lg border border-border bg-surface flex items-center gap-2 cursor-text hover:border-text-muted">
          <span className="text-text-muted text-sm">⌕</span>
          <span className="text-sm text-text-muted">Try searching "insights"</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted cursor-pointer hover:bg-background hover:border-text-muted">
          <span className="text-sm">⚙</span>
        </button>
        <button className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted cursor-pointer hover:bg-background hover:border-text-muted">
          <span className="text-sm">↓</span>
        </button>
        <button className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-muted cursor-pointer hover:bg-background hover:border-text-muted">
          <span className="text-sm">↑</span>
        </button>
        <div className="flex items-center gap-1 px-2 py-1.5 rounded-lg bg-text-primary cursor-pointer">
          <span className="text-surface text-sm">≡</span>
        </div>
        <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center cursor-pointer">
          <span className="text-surface text-sm font-medium">U</span>
        </div>
        <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-surface text-lg cursor-pointer hover:opacity-90">+</button>
      </div>
    </header>
  );
}

export default Topbar;
