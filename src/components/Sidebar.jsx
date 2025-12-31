function Sidebar() {
  return (
    <aside className="w-56 min-h-screen flex flex-col bg-gray-100 shrink-0">
      <div className="p-4 bg-gray-200">
        <div className="h-8">{/* Logo placeholder */}</div>
      </div>

      <nav className="flex-1 py-4">
        <ul className="space-y-1">
          <li className="px-4 py-2 bg-gray-200">{/* Starred */}</li>
          <li className="px-4 py-2">{/* Recent */}</li>
        </ul>

        <ul className="mt-4 space-y-1">
          <li className="px-4 py-2">{/* Sales list */}</li>
          <li className="px-4 py-2">{/* Goals */}</li>
          <li className="px-4 py-2">{/* Dashboard */}</li>
        </ul>

        <div className="mt-4 px-4">
          <div className="py-2">{/* Section header: Codename */}</div>
          <ul className="pl-4 space-y-1">
            <li className="px-4 py-2">{/* Shared with me */}</li>
            <ul className="pl-4 space-y-1">
              <li className="px-4 py-1">{/* Cargo2go */}</li>
              <li className="px-4 py-1">{/* Cloudz3r */}</li>
              <li className="px-4 py-1">{/* Idiomo */}</li>
              <li className="px-4 py-1">{/* Syllables */}</li>
              <li className="px-4 py-1">{/* x-0b */}</li>
            </ul>
          </ul>
        </div>

        <div className="mt-4 px-4">
          <div className="py-2">{/* Section header: Reports */}</div>
          <ul className="pl-4 space-y-1">
            <li className="px-4 py-2">{/* Share with me */}</li>
            <ul className="pl-4 space-y-1">
              <li className="px-4 py-1">{/* Deals by user */}</li>
              <li className="px-4 py-1">{/* Deal duration */}</li>
            </ul>
            <li className="px-4 py-2">{/* My reports */}</li>
            <ul className="pl-4 space-y-1">
              <li className="px-4 py-1">{/* Emails received */}</li>
              <li className="px-4 py-1">{/* Deal duration */}</li>
            </ul>
            <li className="px-4 py-2 bg-gray-200">{/* New report (active) */}</li>
            <li className="px-4 py-2">{/* Analytics */}</li>
          </ul>
        </div>

        <div className="mt-4 px-4 py-2">
          {/* Manage folders */}
        </div>
      </nav>

      <div className="p-4 space-y-4 bg-gray-200">
        <div className="h-8">{/* User/Avatar placeholder */}</div>
        <div className="h-8">{/* Settings placeholder */}</div>
      </div>
    </aside>
  );
}

export default Sidebar;
