
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';

function DashboardLayout({ children }) {
  return (
    <div className="flex min-w-[1280px] h-screen bg-[#FDFBF9] overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Topbar />
        <main className="flex-1 p-5 pt-0 overflow-hidden relative">
          <div className="w-full h-full bg-white rounded-[32px] overflow-y-auto no-scrollbar p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] scroll-smooth">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
