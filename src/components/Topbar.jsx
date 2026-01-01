function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 shrink-0 z-20">
      <div className="flex-1 max-w-lg">
        <div className="h-11 px-5 rounded-full bg-white shadow-sm flex items-center gap-3 cursor-text hover:shadow transition-shadow">
          <span className="text-gray-400 text-lg">⌕</span>
          <span className="text-sm text-gray-500 font-medium">Try searching "insights"</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white shadow-sm cursor-pointer hover:bg-gray-50 transition-colors">
          <span className="text-slate-800 font-bold text-sm">≡</span>
          <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#E84A5F] flex items-center justify-center text-white text-xl cursor-pointer hover:bg-[#d63d51] shadow-md shadow-rose-200 transition-colors">+</button>
      </div>
    </header>
  );
}

export default Topbar;
