import React from 'react';
import { Rocket, LayoutDashboard, PiggyBank, Search, Settings, Calendar, Filter, ChevronDown, User } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

export function Navigation({
  activeTab, 
  setActiveTab
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const tabs = [
    { id: 'geral', icon: LayoutDashboard, label: 'Geral (Meta Ads)' },
    { id: 'verba', icon: PiggyBank, label: 'Verba & Projeção' },
    { id: 'google', icon: Search, label: 'Google Ads' },
  ];

  return (
    <>
      {/* Sidebar Focus Area */}
      <aside className="w-16 border-r border-border bg-[#111] flex flex-col items-center py-6 h-screen fixed left-0 top-0 z-50 shadow-2xl">
        <div className="w-10 h-10 rounded-full bg-surface-hover flex items-center justify-center mb-10 text-white shadow-lg overflow-hidden">
           <img src="https://picsum.photos/seed/logodash/100/100" alt="Logo" className="w-full h-full object-cover" />
        </div>
        
        <nav className="flex flex-col gap-6 flex-1">
          {tabs.map((t) => {
            const isActive = activeTab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className="relative group w-10 h-10 flex items-center justify-center rounded-xl transition-all hover:bg-surface"
                title={t.label}
              >
                {isActive && (
                  <motion.div layoutId="sidebar-active" className="absolute inset-0 bg-surface border border-border rounded-xl shadow-lg" />
                )}
                {/* Visual marker inside active */}
                {isActive && <div className="absolute left-0 top-2 bottom-2 w-1 bg-primary rounded-r-md" />}
                <t.icon size={20} className={cn("relative z-10 transition-colors", isActive ? "text-primary" : "text-text-muted group-hover:text-white")} />
              </button>
            )
          })}
        </nav>

        <button className="w-10 h-10 flex items-center justify-center rounded-xl transition-all hover:bg-surface text-text-muted hover:text-white mt-auto">
          <Settings size={20} />
        </button>
      </aside>

      {/* Main Header + Filters Block */}
      <div className="ml-16 px-6 pt-6 flex flex-col gap-4 sticky top-0 bg-background/90 backdrop-blur-md z-40 pb-4 border-b border-border/50">
        
        {/* Dynamic Glowing Header */}
        <header className="flex items-center justify-between">
          <div className="flex bg-primary text-background rounded-xl px-6 py-3 w-full max-w-4xl shadow-[0_0_24px_rgba(212,245,60,0.25)] flex-1">
            <Rocket size={22} className="mr-3" />
            <h1 className="text-xl font-display font-bold">Dashboard | {tabs.find(t => t.id === activeTab)?.label}</h1>
          </div>
          <div className="hidden md:flex ml-4 items-center cursor-pointer hover:bg-surface-hover transition-colors bg-surface border border-border rounded-xl px-4 py-3 min-w-[200px] justify-between shadow-sm">
            <div className="flex items-center text-sm font-medium"><User size={18} className="mr-2 text-secondary"/> Conta Pro</div>
            <ChevronDown size={16} className="text-text-muted" />
          </div>
        </header>

        {/* Global Sub-Filters */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
          <button className="flex-shrink-0 flex items-center px-3 py-2 bg-surface hover:bg-surface-hover transition-colors text-text-muted hover:text-white border border-border rounded-lg text-sm font-medium group">
            <Filter size={14} className="mr-2 group-hover:text-primary transition-colors" /> Limpar filtros
          </button>
          
          <div className="flex-shrink-0 flex items-center px-3 py-2 bg-surface border border-border rounded-lg text-sm font-medium cursor-pointer hover:bg-surface-hover transition-colors">
            <Calendar size={14} className="mr-2 text-primary" /> 8 ago. 2025 - 6 set. 2025 <ChevronDown size={14} className="ml-2 text-text-muted" />
          </div>

          {['Campanha', 'Conjunto', 'Anúncio', 'Objetivo de Camp.'].map(filter => (
             <div key={filter} className="flex-shrink-0 flex items-center px-4 py-2 bg-surface border border-border rounded-lg text-sm font-medium cursor-pointer hover:bg-surface-hover transition-colors text-text-muted">
                {filter} <ChevronDown size={14} className="ml-2 opacity-50" />
             </div>
          ))}
        </div>
      </div>
    </>
  );
}
