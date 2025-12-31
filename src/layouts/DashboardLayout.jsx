function Sidebar() {
  return (
    <aside className="w-56 min-h-screen bg-gray-100 shrink-0">
      {/* Sidebar region */}
    </aside>
  );
}

function Topbar() {
  return (
    <header className="h-16 bg-gray-200">
      {/* Topbar region */}
    </header>
  );
}

function MainContent({ children }) {
  return (
    <main className="flex-1 bg-gray-50 p-6">
      {children}
    </main>
  );
}

function DashboardLayout() {
  return (
    <div className="flex min-w-[1280px] min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <MainContent>
          {/* Main content region */}
        </MainContent>
      </div>
    </div>
  );
}

export default DashboardLayout;
