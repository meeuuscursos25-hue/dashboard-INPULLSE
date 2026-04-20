import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { DashboardGeral } from './tabs/DashboardGeral';
import { VerbaProjecao } from './tabs/VerbaProjecao';

export default function App() {
  const [activeTab, setActiveTab] = useState('geral');

  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30 selection:text-white">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="ml-16 bg-background pb-12">
        {/* Render Tab Content based on selection */}
        {activeTab === 'geral' && <DashboardGeral />}
        {activeTab === 'verba' && <VerbaProjecao />}
        
        {(activeTab === 'google' || activeTab === 'config') && (
           <div className="p-12 text-center text-text-muted border border-border/50 bg-surface rounded-xl m-8 border-dashed flex flex-col items-center justify-center min-h-[400px]">
             <h2 className="text-xl font-display text-white mb-2">Página em Construção</h2>
             <p>A seção {activeTab === 'google' ? 'Google Ads' : 'Configurações'} será implementada em breve.</p>
           </div>
        )}
      </main>
    </div>
  );
}
