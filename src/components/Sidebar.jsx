import React, { useState } from 'react';

// --- Icons ---
const LogoIcon = () => (
    <div className="w-10 h-10 rounded-full flex items-center justify-center relative shrink-0 overflow-hidden">
        <img src="/icons/acornglobus_logo.jpg" alt="Acorn Globus" className="w-full h-full object-cover" />
    </div>
);

const RefreshIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 4v6h-6" /><path d="M1 20v-6h6" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
);

const GridIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
);

const FileIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
);

const CommandIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg>
);

const TabletIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
);

const ChatIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
);

const SettingsIcon = ({ className }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);

const ChevronDown = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
);

const ChevronUp = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6" /></svg>
);

const StarIcon = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
);

const ClockIcon = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);

const PlusIcon = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);

const FolderIcon = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
);

const SearchIcon = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);

// --- Components ---

const RailItem = ({ icon, active, notification }) => (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer mb-4 relative group ${active ? 'bg-[#E84A5F] text-white shadow-lg shadow-pink-200' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'}`}>
        {icon}
        {notification && (
            <div className={`absolute top-0 right-0 w-2.5 h-2.5 bg-[#E84A5F] rounded-full ring-2 ring-white`}></div>
        )}
    </div>
);

const NavItem = ({ icon, label, active, className }) => (
    <div className={`flex items-center gap-3 px-3 py-1.5 text-sm font-medium rounded-lg cursor-pointer transition-colors ${active ? 'bg-gray-100 text-gray-900 font-bold' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'} ${className}`}>
        {icon && <span className="text-gray-400">{icon}</span>}
        <span>{label}</span>
    </div>
);

const TreeItem = ({ label, children, expanded = false, badge, isPink }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    return (
        <div className="relative">
            <div
                className="flex items-center justify-between px-3 py-1.5 text-sm font-medium text-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 group z-10 relative"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="flex items-center gap-2">
                    <span className={`${isPink ? 'text-[#E84A5F]' : 'text-gray-700'}`}>{label}</span>
                </div>
                <div className="flex items-center gap-2">
                    {badge && (
                        <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded bg-[#E84A5F] text-white text-[10px] font-bold">
                            {badge}
                        </span>
                    )}
                    {children && (
                        <span className="text-gray-400">
                            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </span>
                    )}
                </div>
            </div>
            {isExpanded && children && (
                <div className="relative ml-2 pl-2 space-y-0.5 mt-0.5">
                    {/* Vertical Line for the group */}
                    <div className="absolute left-2 top-0 bottom-2 w-px bg-gray-200"></div>
                    {children}
                </div>
            )}
        </div>
    );
};

const SubTreeItem = ({ label, badge, isPink, active, indent = false }) => (
    <div className={`relative flex items-center justify-between px-3 py-1.5 text-sm font-medium rounded-lg cursor-pointer hover:bg-gray-50 group pl-6`}>
        {/* Horizontal connect line */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-px bg-gray-200"></div>

        <span className={`${isPink ? 'text-[#E84A5F]' : 'text-gray-500 group-hover:text-gray-900'} ${active ? 'text-gray-900' : ''}`}>
            {label}
        </span>
        {badge && (
            <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded bg-[#E84A5F] text-white text-[10px] font-bold">
                {badge}
            </span>
        )}
    </div>
);

function Sidebar() {
    return (
        <aside className="w-[300px] h-screen flex font-sans shrink-0 sticky top-0">
            {/* 1. Icon Rail */}
            <div className="w-[72px] bg-[#F3F4F6] flex flex-col items-center py-6 border-r border-gray-200/50">
                <div className="mb-8">
                    <LogoIcon />
                </div>

                <div className="flex flex-col flex-1 w-full items-center">
                    <RailItem icon={<RefreshIcon className="w-6 h-6" />} />
                    <RailItem icon={<GridIcon className="w-6 h-6" />} active={true} />
                    <RailItem icon={<FileIcon className="w-6 h-6" />} />
                    <RailItem icon={<CommandIcon className="w-6 h-6" />} />
                    <RailItem icon={<TabletIcon className="w-6 h-6" />} />

                    <div className="mt-auto">
                        <RailItem icon={<ChatIcon className="w-6 h-6" />} notification={true} />
                        <RailItem icon={<SettingsIcon className="w-6 h-6" />} />
                    </div>
                </div>
            </div>

            {/* 2. Navigation Panel */}
            <div className="flex-1 bg-[#FBFBFB] flex flex-col border-r border-gray-100">
                {/* Header */}
                <div className="px-5 py-6">
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <span className="text-base font-bold text-gray-900">Acorn Globus</span>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600" />
                        <div className="ml-auto w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 shadow-sm">
                            <SearchIcon className="w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <nav className="flex-1 overflow-y-auto px-3 no-scrollbar">
                    {/* Top Links */}
                    <div>
                        <NavItem icon={<StarIcon className="w-3.5 h-3.5" />} label="Starred" />
                        <NavItem icon={<ClockIcon className="w-3.5 h-3.5" />} label="Recent" />
                    </div>

                    {/* Middle Section */}
                    <div>
                        <NavItem label="Sales list" className="font-semibold text-gray-700" />
                        <NavItem label="Goals" className="font-semibold text-gray-700" />

                        <div>
                            <div className="flex items-center justify-between px-3 py-1.5 text-sm font-bold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-lg group">
                                <span>Dashboard</span>
                                <div className="w-5 h-5 rounded hover:bg-gray-200 flex items-center justify-center text-gray-400 transition-colors">
                                    <PlusIcon className="w-3.5 h-3.5" />
                                </div>
                            </div>

                            {/* Tree View */}
                            <div className="ml-1 pl-2 border-l border-gray-200 relative">
                                <div className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer rounded-lg relative">
                                    {/* Fake horizontal connector */}
                                    {/* <div className="absolute left-[-1px] top-1/2 w-3 h-px bg-gray-200"></div> */}
                                    Acorn Globus
                                </div>

                                <TreeItem label="Shared with me" expanded={true}>
                                    <SubTreeItem label="Cargo2go" />
                                    <SubTreeItem label="Cloudz3r" badge="2" />
                                    <SubTreeItem label="Idioma" />
                                    <SubTreeItem label="Syllables" />
                                    <SubTreeItem label="x-0b" />
                                </TreeItem>
                            </div>
                        </div>
                    </div>

                    {/* Reports Section */}
                    <div className="">
                        <div className="flex items-center justify-between px-3 py-1.5 text-sm font-bold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-lg group">
                            <span>Reports</span>
                            <div className="w-5 h-5 rounded hover:bg-gray-200 flex items-center justify-center text-gray-400 transition-colors">
                                <PlusIcon className="w-3.5 h-3.5" />
                            </div>
                        </div>

                        <div className="ml-1 pl-2 border-l border-gray-200 space-y-1">
                            <TreeItem label="Share with me" expanded={true}>
                                <SubTreeItem label="Deals by user" />
                                <SubTreeItem label="Deal duration" />
                            </TreeItem>

                            <TreeItem label="My reports" expanded={true}>
                                <SubTreeItem label="Emails received" />
                                <SubTreeItem label="Deal duration" />
                                <SubTreeItem label="New report" isPink={true} />
                                <SubTreeItem label="Analytics" badge="7" />
                            </TreeItem>
                        </div>
                    </div>
                </nav>

                {/* Footer */}
                <div className="p-4 mt-auto">
                    <div className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer rounded-lg hover:bg-gray-50 transition-colors">
                        <FolderIcon className="w-4 h-4" />
                        <span>Manage folders</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
