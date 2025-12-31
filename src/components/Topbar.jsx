function Topbar() {
  return (
    <header className="h-14 flex items-center justify-between px-6 bg-surface border-b border-border shrink-0">
      <div className="flex items-center gap-3">
        <button className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-text-muted text-lg">+</button>
        <div className="flex items-center -space-x-2">
          <div className="w-8 h-8 rounded-full bg-background border-2 border-surface flex items-center justify-center text-xs text-text-secondary">A</div>
          <div className="w-8 h-8 rounded-full bg-background border-2 border-surface flex items-center justify-center text-xs text-text-secondary">E</div>
          <div className="w-8 h-8 rounded-full bg-background border-2 border-surface flex items-center justify-center text-xs text-text-secondary">M</div>
          <div className="w-8 h-8 rounded-full bg-text-primary border-2 border-surface flex items-center justify-center text-xs text-surface">C</div>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-6">
        <div className="h-10 px-4 rounded-lg border border-border bg-surface flex items-center gap-2">
          <span className="text-text-muted">⌕</span>
          <span className="text-sm text-text-muted">Try searching "insights"</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-text-primary">
          <span className="text-surface text-sm">≡</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-surface text-sm font-medium">U</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-surface text-xl">+</button>
      </div>
    </header>
  );
}

export default Topbar;
