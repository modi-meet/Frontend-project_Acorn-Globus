import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function MainContent({ children }) {
  return (
    <main className="flex-1 bg-background p-6 overflow-auto">
      {children}
    </main>
  );
}

function DashboardLayout() {
  return (
    <div className="flex min-w-[1280px] min-h-screen bg-background">
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
