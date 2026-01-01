import React, { useState } from 'react';

// --- Icons & UI Primitives ---

const Avatar = ({ name, color, initial, image }) => {
    return (
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm cursor-pointer hover:border-gray-300 transition-colors">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold overflow-hidden ${color || 'bg-gray-200 text-gray-600'}`}>
                {image ? <img src={image} alt={name} className="w-full h-full object-cover" /> : initial}
            </div>
            <span className="text-sm font-medium text-gray-700">{name}</span>
        </div>
    );
};

const IconButton = ({ children, className }) => (
    <button className={`w-9 h-9 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors bg-white ${className}`}>
        {children}
    </button>
);

// --- Sections ---

function Header() {
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button className="w-8 h-8 rounded-xl border border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-400 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5v14" /></svg>
                </button>
                <div className="flex items-center gap-2">
                    <Avatar initial="A" name="Armin A." image="https://api.dicebear.com/7.x/avataaars/svg?seed=Armin" />
                    <Avatar initial="E" name="Eren Y." color="bg-amber-100 text-amber-600" image="https://api.dicebear.com/7.x/avataaars/svg?seed=Eren" />
                    <Avatar initial="M" name="Mikasa A." color="bg-green-100 text-green-600" image="https://api.dicebear.com/7.x/avataaars/svg?seed=Mikasa" />
                    <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-xs text-white font-medium cursor-pointer shadow-sm hover:bg-slate-800 transition-colors">C</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <IconButton>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                </IconButton>
                <IconButton>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                </IconButton>
                <IconButton>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                </IconButton>
            </div>
        </div>
    );
}

function ReportHeader() {
    return (
        <div className="mb-4">
            <div className="flex items-center justify-end">
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 pl-1 pr-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm cursor-pointer hover:bg-gray-50">
                        <div className="w-8 h-4 bg-slate-900 rounded-full relative">
                            <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                        </div>
                        <span className="text-xs font-medium text-gray-500">Timeframe</span>
                    </div>
                    <button className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:bg-gray-50 px-2 py-1 rounded transition-colors group">
                        Sep 1 - Nov 30, 2023
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                </div>
            </div>

            <h1 className="text-3xl font-light font-semibold text-gray-400 mb-4 tracking-wide">New report</h1>

            <div className="flex items-end justify-between">
                <div>
                    <div className="mb-1">
                        <span className="text-sm text-gray-900 font-semibold tracking-tight">Revenue</span>
                    </div>
                    <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-[40px] font-bold text-gray-900 tracking-tight">$528,976<span className="text-2xl text-gray-400 font-normal">.82</span></span>
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-600 text-sm font-bold flex items-center gap-0.5">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                                7.9%
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-[#E84A5F] text-white text-sm font-bold shadow-sm">$27,335.09</span>
                        </div>
                    </div>
                    <div className="text-sm text-gray-400 font-medium flex items-center gap-1.5">
                        vs prev. <span className="text-gray-600 font-semibold">$501,641.73</span>
                        <span className="text-gray-400">Jun 1 - Aug 31, 2023</span>
                        <svg className="w-3 h-3 text-gray-400 cursor-pointer hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </div>
                </div>

                {/* Top Cards */}
                <div className="flex gap-3 flex-nowrap overflow-x-auto no-scrollbar pb-1">
                    {/* Top Sales */}
                    <div className="w-32 p-3 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-gray-200 transition-colors cursor-pointer group">
                        <div className="text-[11px] font-medium text-gray-400 group-hover:text-gray-500">Top sales</div>
                        <div>
                            <div className="text-2xl font-bold text-gray-900 mb-2">72</div>
                            <div className="flex items-center gap-2 w-full">
                                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-[9px] font-bold text-green-700">M</div>
                                <span className="text-[11px] font-medium text-gray-600 truncate">Mikasa</span>
                                <span className="ml-auto text-gray-300 text-[10px]">›</span>
                            </div>
                        </div>
                    </div>

                    {/* Best Deal */}
                    <div className="w-40 p-3 bg-slate-950 rounded-2xl text-white shadow-lg flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all cursor-pointer">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform"></div>
                        <div className="flex items-center justify-between mb-1 relative z-10">
                            <span className="text-[11px] font-medium text-white/60">Best deal</span>
                            <span className="text-[10px] text-white/40">☆</span>
                        </div>
                        <div className="relative z-10">
                            <div className="text-2xl font-bold mb-2">$42,300</div>
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-medium text-white/80">Rolf Inc.</span>
                                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                                    <span className="text-[10px] pb-0.5">›</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deals */}
                    <div className="w-24 p-3 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-center flex flex-col justify-between cursor-pointer hover:border-gray-200">
                        <div className="text-[11px] font-medium text-gray-400">Deals</div>
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-1 group-hover:bg-gray-100 transition-colors">
                                <span className="text-sm font-bold text-gray-900">266</span>
                            </div>
                            <div className="text-[10px] text-gray-400 font-medium tracking-wide">◇ 5</div>
                        </div>
                    </div>

                    {/* Value */}
                    <div className="w-24 p-3 bg-white rounded-2xl border border-rose-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-center flex flex-col justify-between relative overflow-hidden cursor-pointer hover:border-rose-200 transition-colors">
                        <div className="absolute inset-0 bg-rose-50/30"></div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div className="text-[11px] font-medium text-gray-400">Value</div>
                            <div className="flex-1 flex flex-col items-center justify-center">
                                <div className="px-2 py-1 rounded bg-[#E84A5F] text-white text-[13px] font-bold mb-1 shadow-sm">528k</div>
                                <div className="text-[10px] text-[#E84A5F] font-bold">↑ 7.9%</div>
                            </div>
                        </div>
                    </div>

                    {/* Win rate */}
                    <div className="w-24 p-3 bg-white rounded-2xl border border-gray-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] text-center flex flex-col justify-between cursor-pointer hover:border-gray-200">
                        <div className="text-[11px] font-medium text-gray-400">Win rate</div>
                        <div className="flex-1 flex flex-col items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center mb-1">
                                <span className="text-sm font-bold text-gray-900">44%</span>
                            </div>
                            <div className="text-[10px] text-emerald-500 font-bold">↑ 1.2%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RevenueDistribution() {
    return (
        <div className="flex items-center gap-2 mb-6 w-full bg-gray-50 rounded-full p-1 overflow-x-auto no-scrollbar">
            {/* Item 1 - 39.63% */}
            <div className="bg-white rounded-full p-1 pr-2 border border-gray-100 shadow-sm flex items-center gap-2 hover:border-gray-200 transition-colors overflow-hidden" style={{ flex: 39.63, minWidth: '180px' }}>
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Armin" className="w-full h-full object-cover" alt="Armin" />
                </div>
                <div className="flex items-center justify-between flex-1 min-w-0 pr-1">
                    <span className="text-sm font-bold text-gray-900 whitespace-nowrap">$209,633</span>
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">39.63%</span>
                </div>
            </div>

            {/* Item 2 - 29.65% */}
            <div className="bg-white rounded-full p-1 pr-2 border border-gray-100 shadow-sm flex items-center gap-2 hover:border-gray-200 transition-colors overflow-hidden" style={{ flex: 29.65, minWidth: '180px' }}>
                <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mikasa" className="w-full h-full object-cover" alt="Mikasa" />
                </div>
                <div className="flex items-center justify-between flex-1 min-w-0 pr-1">
                    <span className="text-sm font-bold text-gray-900 whitespace-nowrap">$156,841</span>
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">29.65%</span>
                </div>
            </div>

            {/* Item 3 - 22.14% */}
            <div className="bg-white rounded-full p-1 pr-2 border border-gray-100 shadow-sm flex items-center gap-2 hover:border-gray-200 transition-colors overflow-hidden" style={{ flex: 22.14, minWidth: '180px' }}>
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Eren" className="w-full h-full object-cover" alt="Eren" />
                </div>
                <div className="flex items-center justify-between flex-1 min-w-0 pr-1">
                    <span className="text-sm font-bold text-gray-900 whitespace-nowrap">$117,115</span>
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">22.14%</span>
                </div>
            </div>

            {/* Item 4 - 8.58% */}
            <div className="bg-white rounded-full p-1 pr-2 border border-gray-100 shadow-sm flex items-center gap-2 hover:border-gray-200 transition-colors overflow-hidden" style={{ flex: 8.58, minWidth: '130px' }}>
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-xs font-semibold text-white shrink-0">C</div>
                <div className="flex items-center justify-between flex-1 min-w-0 pr-1">
                    <span className="text-sm font-bold text-gray-900 whitespace-nowrap">$45,386</span>
                    <span className="text-xs text-gray-400 font-medium whitespace-nowrap">8.58%</span>
                </div>
            </div>

            <button className="px-5 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10 shrink-0">
                Details
            </button>
        </div>
    );
}

// --- Left Column Components ---

function PlatformStats() {
    return (
        <div className="bg-gray-50/80 rounded-[32px] p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-gray-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="15" y2="12"></line>
                        <line x1="3" y1="18" x2="10" y2="18"></line>
                    </svg>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                    Filters
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </button>
            </div>

            <div className="space-y-2 flex-1 overflow-y-auto no-scrollbar">
                {/* Dribbble */}
                <div className="bg-white rounded-2xl p-3 flex items-center border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-pink-100 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-[#EA4C89] bg-pink-50 text-xl overflow-hidden shrink-0">
                        <img src="/icons/dribbble-logo-fill-svgrepo-com.svg" className="w-6 h-6" alt="Dribbble" style={{ filter: 'invert(36%) sepia(93%) saturate(1755%) hue-rotate(317deg) brightness(93%) contrast(93%)' }} />
                    </div>
                    <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">Dribbble</span>
                    <span className="ml-auto text-sm font-bold text-gray-900 mr-3">$227,459</span>
                    <span className="bg-gray-100 rounded-lg px-2.5 py-1 text-xs font-bold text-gray-500">43%</span>
                </div>

                {/* Instagram */}
                <div className="bg-white rounded-2xl p-3 flex items-center border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-orange-100 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600"></div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="relative z-10"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </div>
                    <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">Instagram</span>
                    <span className="ml-auto text-sm font-bold text-gray-900 mr-3">$142,823</span>
                    <span className="bg-gray-100 rounded-lg px-2.5 py-1 text-xs font-bold text-gray-500">27%</span>
                </div>

                {/* Behance */}
                <div className="bg-white rounded-2xl p-3 flex items-center border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-blue-100 transition-colors cursor-pointer group">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                        <span className="text-[#1769FF] text-xl font-black tracking-tighter">Bē</span>
                    </div>
                    <span className="ml-3 text-sm font-bold text-gray-500 group-hover:text-gray-700">Behance</span>
                    <span className="ml-auto text-sm font-bold text-gray-900 mr-3">$89,935</span>
                    <span className="bg-gray-100 rounded-lg px-2.5 py-1 text-xs font-bold text-gray-500">11%</span>
                </div>


            </div>
        </div>
    );
}

function DealsChart() {
    return (
        <div className="bg-gray-50/80 rounded-[32px] p-4 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-1 px-1">
                <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm">▾</span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-gray-100 shadow-sm text-sm font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                    Filters
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </button>
            </div>

            {/* Chart Area */}
            <div className="flex-1 flex items-end justify-between gap-1.5 px-0 pb-2 pt-2">
                {/* Behance - Striped */}
                <div className="w-[18%] bg-white rounded-2xl shadow-sm relative flex flex-col items-center pt-4" style={{ height: '55%' }}>
                    <span className="text-[#1769FF] font-black text-sm">Bē</span>
                </div>

                {/* Dribbble - White Solid */}
                <div className="w-[22%] bg-white rounded-2xl shadow-sm relative flex flex-col items-center pt-4" style={{ height: '90%' }}>
                    <div className="rounded-full w-8 h-8 flex items-center justify-center">
                        <img src="/icons/dribbble-logo-fill-svgrepo-com.svg" className="w-6 h-6" alt="Dribbble" style={{ filter: 'invert(36%) sepia(93%) saturate(1755%) hue-rotate(317deg) brightness(93%) contrast(93%)' }} />
                    </div>
                </div>

                {/* Google - White Solid */}
                <div className="w-[18%] bg-white rounded-2xl shadow-sm relative flex flex-col items-center pt-3" style={{ height: '45%' }}>
                    <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                </div>

                {/* Instagram - White Solid */}
                <div className="w-[18%] bg-white rounded-2xl shadow-sm relative flex flex-col items-center pt-3" style={{ height: '35%' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#insta-grad-chart)" strokeWidth="2"><defs><linearGradient id="insta-grad-chart" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#facc15" /><stop offset="50%" stopColor="#ef4444" /><stop offset="100%" stopColor="#9333ea" /></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>

                {/* Marketplace - Striped */}
                <div className="w-[18%] rounded-2xl relative flex flex-col items-center pt-4" style={{ height: '75%', backgroundImage: 'repeating-linear-gradient(45deg, #ffffff, #ffffff 5px, #f3f4f6 5px, #f3f4f6 10px)' }}>
                    <svg className="w-5 h-5 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-2">
                <div className="text-sm font-bold text-gray-700">Deals amount</div>
                <div className="text-xs text-gray-400 font-medium flex items-center gap-1 cursor-pointer hover:text-gray-600">
                    by referrer category <span className="text-[10px]">▼</span>
                </div>
            </div>
        </div>
    );
}

function PlatformValueChart() {
    return (
        <div className="bg-gray-50/80 rounded-[32px] p-4 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-pink-100 flex items-center justify-center bg-white shadow-sm">
                        <img src="/icons/dribbble-logo-fill-svgrepo-com.svg" className="w-6 h-6" alt="Dribbble" style={{ filter: 'invert(36%) sepia(93%) saturate(1755%) hue-rotate(317deg) brightness(93%) contrast(93%)' }} />
                    </div>
                    <div>
                        <div className="text-xs font-bold text-gray-400">Platform value</div>
                        <div className="flex items-center gap-1 text-sm font-bold text-gray-900 cursor-pointer">
                            Dribbble <span className="text-xs text-gray-400">▼</span>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white p-1 rounded-xl border border-gray-100 shadow-sm">
                    <button className="px-3 py-1.5 rounded-lg bg-gray-900 text-white text-xs font-bold shadow-sm">Revenue</button>
                    <button className="px-3 py-1.5 rounded-lg text-gray-500 text-xs font-medium hover:bg-gray-50 transition-colors">Leads</button>
                    <button className="px-3 py-1.5 rounded-lg text-gray-500 text-xs font-medium hover:bg-gray-50 transition-colors">W/L</button>
                </div>
            </div>

            <div className="flex gap-4 h-64">
                {/* Left Summary Card - Pink */}
                <div className="w-[32%] bg-[#E84A5F] rounded-[32px] rounded-br-[80px] text-white relative flex shadow-xl shadow-pink-500/20 overflow-hidden shrink-0">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full -ml-8 -mb-8"></div>

                    {/* Rotated Label - Outside Content */}
                    <div className="w-8 flex items-center justify-center relative z-10 shrink-0">
                        <span className="-rotate-90 text-[10px] uppercase tracking-widest opacity-60 font-medium whitespace-nowrap">Average monthly</span>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 py-4 pr-4 relative z-10 flex flex-col justify-center space-y-3">
                        <div>
                            <div className="text-[10px] opacity-80 font-medium uppercase tracking-wide mb-0.5">Revenue</div>
                            <div className="text-xl font-bold tracking-tight">$18,552</div>
                        </div>
                        <div>
                            <div className="text-[10px] opacity-80 font-medium uppercase tracking-wide mb-0.5">Leads</div>
                            <div className="text-sm font-bold opacity-100 flex items-baseline gap-1">
                                373 <span className="opacity-60 text-[10px] font-normal">97/276</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-[10px] opacity-80 font-medium uppercase tracking-wide mb-0.5">Win/lose</div>
                            <div className="text-sm font-bold opacity-100 flex items-baseline gap-1">
                                16% <span className="opacity-60 text-[10px] font-normal">51/318</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Chart Area */}
                <div className="flex-1 relative pt-2 pb-1 pl-2">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 flex flex-col justify-between text-[9px] text-gray-300 font-medium pointer-events-none pb-12 pr-4 pl-4 pt-6">
                        <div className="flex items-center gap-4 w-full"><div className="w-full h-px border-t border-dashed border-gray-200"></div><span>$14,500</span></div>
                        <div className="flex items-center gap-4 w-full"><div className="w-full h-px border-t border-dashed border-gray-200"></div><span>$11,000</span></div>
                        <div className="flex items-center gap-4 w-full"><div className="w-full h-px border-t border-dashed border-gray-200"></div><span>$7,500</span></div>
                        <div className="flex items-center gap-4 w-full"><div className="w-full h-px border-t border-dashed border-gray-200"></div><span>$4,000</span></div>
                    </div>

                    <div className="absolute inset-0 flex items-end justify-around pb-4 pr-6 pl-2 pt-6">
                        {/* Sep Group */}
                        <div className="flex flex-col items-center w-16">
                            {/* Floating Label */}
                            <div className="bg-[#E84A5F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm mb-1">
                                $6,901
                            </div>
                            {/* Bars Container - Fixed Height */}
                            <div className="flex items-end gap-1 h-24 w-full justify-center">
                                {/* Striped Bar */}
                                <div className="w-8 rounded-t-lg overflow-hidden" style={{ height: '45%', backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 3px, #ffffff 3px, #ffffff 6px)' }}></div>
                                {/* Solid Bar */}
                                <div className="w-8 bg-gray-200 rounded-t-lg" style={{ height: '25%' }}></div>
                            </div>
                            {/* Avatars */}
                            <div className="flex -space-x-1.5 mt-1">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-4 h-4 rounded-full border border-white bg-gray-100" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka" className="w-4 h-4 rounded-full border border-white bg-gray-100" />
                            </div>
                            <span className="text-[10px] text-gray-400 font-medium mt-1">Sep</span>
                        </div>

                        {/* Oct Group */}
                        <div className="flex flex-col items-center w-16">
                            {/* Floating Label */}
                            <div className="bg-[#E84A5F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm mb-1">
                                $11,035
                            </div>
                            {/* Bars Container - Fixed Height */}
                            <div className="flex items-end gap-1 h-32 w-full justify-center">
                                {/* Striped Bar - Tall */}
                                <div className="w-8 rounded-t-lg overflow-hidden" style={{ height: '85%', backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 3px, #ffffff 3px, #ffffff 6px)' }}></div>
                                {/* Solid Bar */}
                                <div className="w-8 bg-gray-200 rounded-t-lg" style={{ height: '55%' }}></div>
                            </div>
                            {/* Avatars */}
                            <div className="flex -space-x-1.5 mt-1">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" className="w-4 h-4 rounded-full border border-white bg-gray-100" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" className="w-4 h-4 rounded-full border border-white bg-gray-100" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" className="w-4 h-4 rounded-full border border-white bg-gray-100" />
                            </div>
                            <span className="text-[10px] text-gray-400 font-medium mt-1">Oct</span>
                        </div>

                        {/* Nov Group */}
                        <div className="flex flex-col items-center w-16">
                            {/* Floating Label */}
                            <div className="bg-[#E84A5F] text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm mb-1">
                                $9,238
                            </div>
                            {/* Bars Container - Fixed Height */}
                            <div className="flex items-end gap-1 h-28 w-full justify-center">
                                {/* Striped Bar */}
                                <div className="w-8 rounded-t-lg overflow-hidden" style={{ height: '65%', backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 3px, #ffffff 3px, #ffffff 6px)' }}></div>
                                {/* Solid Bar */}
                                <div className="w-8 bg-gray-200 rounded-t-lg" style={{ height: '40%' }}></div>
                            </div>
                            {/* Avatars */}
                            <div className="flex -space-x-1.5 mt-1">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" className="w-4 h-4 rounded-full border border-white bg-gray-100" />
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Maria" className="w-4 h-4 rounded-full border border-white bg-gray-100" />
                            </div>
                            <span className="text-[10px] text-gray-400 font-medium mt-1">Nov</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Right Column Components ---

function UserTableHeader() {
    return (
        <div className="grid grid-cols-[minmax(0,1fr)_75px_55px_40px_40px_55px_20px] gap-1 px-2 mb-2 text-[10px] uppercase text-gray-400 font-semibold tracking-wider">
            <div className="pl-2">Sales</div>
            <div className="text-left">Revenue</div>
            <div className="text-center">Leads</div>
            <div className="text-center">KPI</div>
            <div className="text-center">W/L</div>
            <div></div>
            <div></div>
        </div>
    );
}

function UserRow({ name, image, seed, initial, initialColor, revenue, sales, salesGoal, leads, kpi, wlScore, wlTotal, isActive }) {
    return (
        <div className={`grid grid-cols-[minmax(0,1fr)_75px_55px_40px_40px_55px_20px] gap-1 items-center px-2 py-3 rounded-2xl border transition-all ${isActive ? 'bg-pink-50/40 border-pink-100 ring-1 ring-pink-100 sticky top-0 z-10' : 'bg-white border-gray-100 hover:border-gray-200 hover:shadow-sm'}`}>
            {/* User Info (Salesperson) */}
            <div className="flex items-center gap-2 min-w-0">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${initialColor || 'bg-gray-100'} overflow-hidden shrink-0`}>
                    {image ? <img src={image} alt={name} className="w-full h-full object-cover" /> :
                        seed ? <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`} alt={name} className="w-full h-full" /> :
                            <span className="text-xs font-bold">{initial}</span>}
                </div>
                <span className="text-sm font-semibold text-gray-900 truncate">{name}</span>
            </div>

            {/* Revenue ($) */}
            <div className="text-left text-sm font-bold text-gray-700 truncate">{revenue}</div>

            {/* Sales (Badge + Goal) */}
            <div className="flex items-center justify-center gap-1">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0 ${isActive ? 'bg-[#E84A5F]' : 'bg-emerald-500'}`}>{sales}</div>
                <span className="text-xs text-gray-400 font-medium truncate">{salesGoal}</span>
            </div>

            {/* Leads (0.84) */}
            <div className="text-center text-xs font-medium text-gray-500">{leads}</div>

            {/* KPI (31%) */}
            <div className="text-center text-xs font-medium text-gray-500">{kpi}</div>

            {/* W/L (Badge + Total) */}
            <div className="flex items-center justify-center gap-1">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm shrink-0 ${isActive ? 'bg-emerald-500' : 'bg-blue-500'}`}>{wlScore}</div>
                <span className="text-xs text-gray-400 font-medium truncate">{wlTotal}</span>
            </div>

            <div className="flex justify-end">
                {isActive ? (
                    <button className="w-6 h-6 rounded-full bg-[#E84A5F] flex items-center justify-center text-white shadow-md hover:bg-[#d63d51] transition-colors shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                ) : (
                    <button className="text-gray-300 hover:text-gray-500">•••</button>
                )}
            </div>
        </div>
    );
}

function MikasaBlock() {
    return (
        <div className="bg-pink-50/30 rounded-3xl border border-pink-100 p-2 space-y-3 shadow-sm">
            <UserRow
                name="Mikasa A."
                seed="Mikasa"
                revenue="$156,841"
                sales="54" salesGoal="103"
                leads="0.89"
                kpi="39%"
                wlScore="21" wlTotal="33"
                isActive={true}
            />

            {/* Badges */}
            <div className="flex gap-2 px-1 overflow-x-auto no-scrollbar scroll-padding">
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm">
                    <span className="text-sm">🤙</span> <span className="text-xs font-semibold text-gray-700">Top sales</span>
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm">
                    <span className="text-sm">🔥</span> <span className="text-xs font-semibold text-gray-700">Sales streak</span>
                </div>
                <div className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-100 bg-white shadow-sm">
                    <span className="text-sm">👍</span> <span className="text-xs font-semibold text-gray-700">Top review</span>
                </div>
            </div>

            {/* Work with platforms Card */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-gray-900">Work with platforms</span>
                    <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500 text-white text-[10px] font-bold shadow-sm shadow-emerald-200">
                        <span>↑ 3</span>
                        <span className="opacity-90 border-l border-white/20 pl-1 ml-1">$156,841</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 min-h-[220px]">
                    {/* Left: Dribbble large card */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-4 row-span-2 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-pink-200 transition-colors cursor-pointer relative overflow-hidden">
                        <div className="flex items-center gap-2 relative z-10">
                            <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center">
                                <img src="/icons/dribbble-logo-fill-svgrepo-com.svg" className="w-6 h-6" alt="Dribbble" style={{ filter: 'invert(36%) sepia(93%) saturate(1755%) hue-rotate(317deg) brightness(93%) contrast(93%)' }} />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Dribbble</span>
                        </div>
                        <div className="mt-8 relative z-10">
                            <div className="text-3xl font-bold text-gray-900 mb-1">45.3%</div>
                            <div className="text-lg font-bold text-[#E84A5F]">$71,048</div>
                        </div>
                    </div>

                    {/* Right top: Instagram card */}
                    <div className="bg-[#FAFAFA] rounded-2xl border border-gray-100 p-3 flex flex-col justify-between hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <div className="w-6 h-6 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm text-gray-600">
                                    <img src="/icons/Instagram_logo_2016.svg" className="w-6 h-6" alt="Instagram" />
                                </div>
                                <span className="text-xs font-semibold text-gray-700">Instagram</span>
                            </div>
                            <div className="text-right">
                                <div className="flex items-center justify-end gap-1 mb-0.5">
                                    <span className="text-[10px] font-bold text-gray-500">G</span>
                                    <span className="text-[10px] text-gray-400">Google</span>
                                </div>
                                <div className="text-[10px] text-gray-400">14.1% <span className="text-gray-500 font-medium">$22,114</span></div>
                            </div>
                        </div>
                        <div className="flex items-end justify-between mt-2">
                            <div>
                                <div className="text-xs font-bold text-gray-400">28.1%</div>
                                <div className="text-xs font-semibold text-gray-700">$44,072</div>
                            </div>
                        </div>
                    </div>

                    {/* Right bottom: Other */}
                    <div className="bg-white rounded-2xl border border-gray-100 p-3 flex items-center justify-between hover:shadow-sm transition-all cursor-pointer">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs font-semibold text-gray-700">Other</span>
                                <div className="flex items-center gap-1 text-[9px] text-gray-400">
                                    <span>●●</span>
                                    <span>5.4%</span>
                                    <span>$8,469</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs font-bold text-gray-400">7.1%</div>
                            <div className="text-xs font-semibold text-gray-700">$11,135</div>
                        </div>
                    </div>
                </div>

                {/* Sales dynamic */}
                <div className="mt-1">
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-gray-900">Sales dynamic</span>
                        <button className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 transition-colors">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                        </button>
                    </div>

                    <div className="flex justify-between text-[10px] text-gray-400 font-medium mb-1 px-1">
                        {['W 1', 'W 2', 'W 3', 'W 4', 'W 5', 'W 6', 'W 7', 'W 8', 'W 9', 'W 10', 'W 11'].map((w) => (
                            <span key={w}>{w}</span>
                        ))}
                    </div>

                    <div className="h-20 w-full relative">
                        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            {/* Background Gray Line */}
                            <path d="M0,50 Q30,45 60,55 T120,45 T180,50 T240,48 T300,50" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />

                            {/* Pink Line */}
                            <path d="M0,60 Q30,55 60,65 T120,55 T180,60 T240,58 T300,60" fill="none" stroke="#FDB0B8" strokeWidth="2" />

                            {/* Main Red Line */}
                            <path d="M0,40 Q30,30 60,45 T120,30 T180,40 T240,25 T300,35" fill="none" stroke="#E84A5F" strokeWidth="3" strokeLinecap="round" />

                            {/* Dots on line */}
                            <circle cx="190" cy="42" r="3" fill="#E84A5F" stroke="white" strokeWidth="2" />
                            <circle cx="270" cy="30" r="3" fill="#E84A5F" stroke="white" strokeWidth="2" />
                        </svg>

                        {/* Timeline Items */}
                        <div className="absolute -bottom-2 left-0 right-0 flex items-center justify-between px-1">
                            <div className="h-1 w-16 bg-gradient-to-r from-emerald-300 to-emerald-400 rounded-full"></div>
                            <div className="flex -space-x-1">
                                <div className="w-4 h-4 rounded bg-orange-500 text-white flex items-center justify-center text-[8px] font-bold z-10 border border-white">B</div>
                            </div>
                            <div className="h-1 w-10 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full"></div>
                            <div className="w-4 h-4 rounded-full bg-slate-900 flex items-center justify-center border border-white z-10 text-[8px] text-white overflow-hidden">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mikasa" className="w-full h-full object-cover" alt="Mikasa" />
                            </div>
                            <div className="h-1 w-12 bg-gradient-to-r from-pink-300 to-pink-400 rounded-full"></div>
                            <div className="w-4 h-4 rounded-full bg-[#E84A5F] flex items-center justify-center text-white text-[8px] border border-white z-10">◎</div>
                            <div className="h-1 w-6 bg-gradient-to-r from-pink-400 to-pink-300 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


function MainDashboard() {
    return (
        <div className="h-full font-sans text-slate-800 mx-auto max-w-[1600px]">
            <Header />
            <ReportHeader />
            <RevenueDistribution />

            <div className="grid grid-cols-12 gap-5 pb-10">
                <div className="col-span-12 lg:col-span-7 flex flex-col gap-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-[280px]">
                        <PlatformStats />
                        <DealsChart />
                    </div>
                    <PlatformValueChart />
                </div>
                <div className="col-span-12 lg:col-span-5 space-y-3">
                    <UserTableHeader />
                    <UserRow
                        name="Armin A."
                        seed="Armin"
                        revenue="$209,633"
                        sales="41" salesGoal="118"
                        leads="0.84"
                        kpi="31%"
                        wlScore="12" wlTotal="29"
                        initialColor="bg-amber-100"
                    />
                    <MikasaBlock />
                    <UserRow
                        name="Eren Y."
                        seed="Eren"
                        revenue="$117,115"
                        sales="22" salesGoal="84"
                        leads="0.79"
                        kpi="32%"
                        wlScore="7" wlTotal="15"
                        initialColor="bg-orange-100"
                    />
                </div>
            </div>
        </div>
    );
}

export default MainDashboard;
