function Sidebar() {
  return (
    <aside className="w-56 min-h-screen flex flex-col bg-surface border-r border-border shrink-0">
      <div className="p-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-text-primary flex items-center justify-center">
            <span className="text-surface font-semibold text-sm">C</span>
          </div>
          <span className="text-sm font-medium text-text-primary">Codename.com</span>
        </div>
      </div>

      <nav className="flex-1 py-2 overflow-y-auto">
        <ul className="space-y-0.5">
          <li className="px-4 py-2 text-sm text-text-secondary">☆ Starred</li>
          <li className="px-4 py-2 text-sm text-text-secondary">↻ Recent</li>
        </ul>

        <ul className="mt-4 space-y-0.5">
          <li className="px-4 py-2 text-sm text-text-secondary">Sales list</li>
          <li className="px-4 py-2 text-sm text-text-secondary">Goals</li>
          <li className="px-4 py-2 text-sm text-text-secondary flex items-center justify-between">
            <span>Dashboard</span>
            <span className="text-text-muted">+</span>
          </li>
        </ul>

        <div className="mt-4">
          <div className="px-4 py-2 text-xs font-medium text-text-muted uppercase tracking-wide">Codename</div>
          <ul className="space-y-0.5">
            <li className="px-4 py-2 text-sm text-text-secondary flex items-center justify-between">
              <span>Shared with me</span>
              <span className="text-text-muted">›</span>
            </li>
            <ul className="space-y-0.5">
              <li className="px-8 py-1.5 text-sm text-text-secondary">Cargo2go</li>
              <li className="px-8 py-1.5 text-sm text-text-secondary flex items-center justify-between">
                <span>Cloudz3r</span>
                <span className="w-5 h-5 rounded-full bg-primary-light text-primary text-xs flex items-center justify-center">2</span>
              </li>
              <li className="px-8 py-1.5 text-sm text-text-secondary">Idiomo</li>
              <li className="px-8 py-1.5 text-sm text-text-secondary">Syllables</li>
              <li className="px-8 py-1.5 text-sm text-text-secondary">x-0b</li>
            </ul>
          </ul>
        </div>

        <div className="mt-4">
          <div className="px-4 py-2 text-xs font-medium text-text-muted uppercase tracking-wide flex items-center justify-between">
            <span>Reports</span>
            <span>+</span>
          </div>
          <ul className="space-y-0.5">
            <li className="px-4 py-2 text-sm text-text-secondary flex items-center justify-between">
              <span>Share with me</span>
              <span className="text-text-muted">›</span>
            </li>
            <ul className="space-y-0.5">
              <li className="px-8 py-1.5 text-sm text-text-secondary">Deals by user</li>
              <li className="px-8 py-1.5 text-sm text-text-secondary">Deal duration</li>
            </ul>
            <li className="px-4 py-2 text-sm text-text-secondary flex items-center justify-between">
              <span>My reports</span>
              <span className="text-text-muted">›</span>
            </li>
            <ul className="space-y-0.5">
              <li className="px-8 py-1.5 text-sm text-text-secondary">Emails received</li>
              <li className="px-8 py-1.5 text-sm text-text-secondary">Deal duration</li>
            </ul>
            <li className="px-4 py-2 text-sm text-primary font-medium">New report</li>
            <li className="px-4 py-2 text-sm text-text-secondary flex items-center justify-between">
              <span>Analytics</span>
              <span className="w-5 h-5 rounded-full bg-primary text-surface text-xs flex items-center justify-center">7</span>
            </li>
          </ul>
        </div>

        <div className="mt-4 px-4 py-2 text-sm text-text-secondary">
          ⚙ Manage folders
        </div>
      </nav>

      <div className="p-4 space-y-2 border-t border-border">
        <div className="w-10 h-10 rounded-full bg-background"></div>
        <div className="w-8 h-8 flex items-center justify-center text-text-muted">⚙</div>
      </div>
    </aside>
  );
}

export default Sidebar;
