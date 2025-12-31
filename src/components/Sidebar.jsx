function Sidebar() {
  return (
    <aside className="w-56 min-h-screen flex flex-col bg-surface border-r border-border shrink-0">
      <div className="px-4 py-5">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-7 h-7 rounded-lg bg-text-primary flex items-center justify-center">
            <span className="text-surface font-semibold text-xs">C</span>
          </div>
          <span className="text-sm font-medium text-text-primary">Codename.com</span>
          <span className="text-text-muted text-xs ml-auto">⌄</span>
        </div>
      </div>

      <nav className="flex-1 py-1 overflow-y-auto">
        <ul className="space-y-0.5 px-2">
          <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">☆ Starred</li>
          <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">↻ Recent</li>
        </ul>

        <ul className="mt-3 space-y-0.5 px-2">
          <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Sales list</li>
          <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Goals</li>
          <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background flex items-center justify-between">
            <span>Dashboard</span>
            <span className="text-text-muted text-xs">+</span>
          </li>
        </ul>

        <div className="mt-3">
          <div className="px-5 py-1.5 text-xs font-medium text-text-muted">Codename</div>
          <ul className="space-y-0.5 px-2">
            <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background flex items-center justify-between">
              <span>Shared with me</span>
              <span className="text-text-muted text-xs">⌄</span>
            </li>
            <ul className="space-y-0.5">
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Cargo2go</li>
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background flex items-center justify-between">
                <span>Cloudz3r</span>
                <span className="w-5 h-5 rounded-full bg-primary-light text-primary text-xs font-medium flex items-center justify-center">2</span>
              </li>
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Idiomo</li>
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Syllables</li>
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">x-0b</li>
            </ul>
          </ul>
        </div>

        <div className="mt-3">
          <div className="px-5 py-1.5 text-xs font-medium text-text-muted flex items-center justify-between">
            <span>Reports</span>
            <span className="cursor-pointer hover:text-text-secondary">+</span>
          </div>
          <ul className="space-y-0.5 px-2">
            <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background flex items-center justify-between">
              <span>Share with me</span>
              <span className="text-text-muted text-xs">⌄</span>
            </li>
            <ul className="space-y-0.5">
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Deals by user</li>
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Deal duration</li>
            </ul>
            <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background flex items-center justify-between">
              <span>My reports</span>
              <span className="text-text-muted text-xs">⌄</span>
            </li>
            <ul className="space-y-0.5">
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Emails received</li>
              <li className="pl-7 pr-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">Deal duration</li>
            </ul>
            <li className="px-3 py-1.5 text-sm text-primary font-medium rounded-md cursor-pointer">New report</li>
            <li className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background flex items-center justify-between">
              <span>Analytics</span>
              <span className="w-5 h-5 rounded-full bg-primary text-surface text-xs font-medium flex items-center justify-center">7</span>
            </li>
          </ul>
        </div>

        <div className="mt-3 px-2">
          <div className="px-3 py-1.5 text-sm text-text-secondary rounded-md cursor-pointer hover:bg-background">
            ⚙ Manage folders
          </div>
        </div>
      </nav>

      <div className="p-4 flex flex-col gap-3 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-background cursor-pointer"></div>
        <div className="w-8 h-8 flex items-center justify-center text-text-muted cursor-pointer hover:text-text-secondary">⚙</div>
      </div>
    </aside>
  );
}

export default Sidebar;
