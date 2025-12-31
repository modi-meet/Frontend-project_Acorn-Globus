function Topbar() {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-gray-200 shrink-0">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-300">{/* Add button */}</div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300">{/* Avatar 1 */}</div>
            <div className="w-8 h-8 rounded-full bg-gray-300">{/* Avatar 2 */}</div>
            <div className="w-8 h-8 rounded-full bg-gray-300">{/* Avatar 3 */}</div>
            <div className="w-8 h-8 rounded-full bg-gray-300">{/* Avatar 4 */}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 max-w-md mx-4">
        <div className="h-10 bg-gray-300">{/* Search input */}</div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-300">{/* Action button 1 */}</div>
        <div className="w-10 h-10 bg-gray-300">{/* Action button 2 */}</div>
        <div className="w-10 h-10 bg-gray-300">{/* Action button 3 */}</div>
        <div className="w-10 h-10 rounded-full bg-gray-300">{/* User avatar */}</div>
        <div className="w-10 h-10 bg-gray-300">{/* Add button */}</div>
      </div>
    </header>
  );
}

export default Topbar;
