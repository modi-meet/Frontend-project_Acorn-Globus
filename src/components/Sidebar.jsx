import React, { useState } from 'react';

// --- Icons ---

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

const SettingsIcon = ({ className }) => (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
);

// --- Components ---

const NavItem = ({ icon, label, active, className }) => (
    <div className={`flex items-center gap-3 px-3 py-1.5 text-sm font-medium rounded-lg cursor-pointer transition-colors ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'} ${className}`}>
        {icon && <span className="text-gray-400">{icon}</span>}
        <span>{label}</span>
    </div>
);

const TreeItem = ({ label, children, expanded = false, badge, isPink }) => {
    const [isExpanded, setIsExpanded] = useState(expanded);

    return (
        <div className="relative">
            <div 
                className="flex items-center justify-between px-3 py-1.5 text-sm font-medium text-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 group"
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
                <div className="relative ml-3 pl-3 border-l border-gray-200 mt-0.5 space-y-0.5">
                    {children}
                </div>
            )}
        </div>
    );
};

const SubTreeItem = ({ label, badge, isPink, active }) => (
    <div className="relative flex items-center justify-between px-3 py-1.5 text-sm font-medium rounded-lg cursor-pointer hover:bg-gray-50 group">
        {/* Horizontal connector line */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-px bg-gray-200 -ml-3"></div>
        
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
        <aside className="w-64 h-screen bg-[#FBFBFB] border-r border-gray-100 flex flex-col font-sans shrink-0 sticky top-0">
            {/* Header */}
            <div className="px-5 py-6">
                <div className="flex items-center gap-2 cursor-pointer group">
                    <div className="w-8 h-8 bg-[#1A1A2E] rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>
                    <span className="text-base font-bold text-gray-900">Codename.com</span>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-600 ml-auto" />
                </div>
            </div>

            {/* Scrollable Content */}
            <nav className="flex-1 overflow-y-auto px-3 space-y-6 no-scrollbar">
                {/* Section 1 */}
                <div className="space-y-0.5">
                    <NavItem icon={<StarIcon className="w-4 h-4" />} label="Starred" />
                    <NavItem icon={<ClockIcon className="w-4 h-4" />} label="Recent" />
                </div>

                {/* Section 2 */}
                <div className="space-y-0.5">
                    <NavItem label="Sales list" />
                    <NavItem label="Goals" />
                    
                    <div className="mt-2">
                        <div className="flex items-center justify-between px-3 py-1.5 text-sm font-bold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-lg group">
                            <span>Dashboard</span>
                            <div className="w-5 h-5 rounded hover:bg-gray-200 flex items-center justify-center text-gray-400 transition-colors">
                                <PlusIcon className="w-3.5 h-3.5" />
                            </div>
                        </div>
                        
                        <div className="mt-1 ml-1 pl-2 border-l border-transparent">
                            <div className="px-3 py-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer rounded-lg">Codename</div>
                            
                            <TreeItem label="Shared with me" expanded={true}>
                                <SubTreeItem label="Cargo2go" />
                                <SubTreeItem label="Cloudz3r" badge="2" />
                                <SubTreeItem label="Idiomo" />
                                <SubTreeItem label="Syllables" />
                                <SubTreeItem label="x-0b" />
                            </TreeItem>
                        </div>
                    </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-0.5">
                    <div className="flex items-center justify-between px-3 py-1.5 text-sm font-bold text-gray-900 cursor-pointer hover:bg-gray-50 rounded-lg group">
                        <span>Reports</span>
                        <div className="w-5 h-5 rounded hover:bg-gray-200 flex items-center justify-center text-gray-400 transition-colors">
                            <PlusIcon className="w-3.5 h-3.5" />
                        </div>
                    </div>

                    <div className="mt-1 ml-1 pl-2 border-l border-gray-200 space-y-1">
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
                <div className="mt-4 flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                     <SettingsIcon className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
