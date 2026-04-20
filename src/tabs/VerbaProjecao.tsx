import React from 'react';

export function VerbaProjecao() {
  return (
    <div className="p-6 text-white h-full max-w-7xl mx-auto">
      <h2 className="text-2xl font-display font-bold text-primary mb-6">Distribuição de Verba & Projeção</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Coluna 1: Configuração Global */}
        <div className="bg-surface border border-border rounded-xl p-6 shadow-xl">
          <h3 className="text-secondary font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary"></span> Configuração Global
          </h3>
          <div className="flex flex-col gap-4">
             <div>
                <label className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1 block">Orçamento Total (R$)</label>
                <input type="text" defaultValue="1.000,00" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-primary transition-colors" />
             </div>
             <div>
                <label className="text-xs text-text-muted font-bold uppercase tracking-widest mb-1 block">Período (Dias)</label>
                <input type="number" defaultValue={30} className="w-full bg-background border border-border rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-primary transition-colors" />
             </div>
             <div className="mt-4">
               <div className="flex justify-between text-xs mb-2">
                 <span className="text-text-muted">Distribuído</span>
                 <span className="text-primary font-bold">100%</span>
               </div>
               <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                 <div className="h-full bg-primary rounded-full w-full shadow-[0_0_10px_rgba(212,245,60,0.5)]"></div>
               </div>
             </div>
          </div>
        </div>

        {/* Coluna 2: Distribuição por Plataforma */}
        <div className="bg-surface border border-border rounded-xl p-6 shadow-xl">
          <h3 className="text-secondary font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span> Por Plataforma
          </h3>
          <div className="flex flex-col gap-6">
             <div>
                <div className="flex justify-between text-xs mb-2 font-bold">
                  <span>Meta Ads</span>
                  <span className="text-primary">60% <span className="text-text-muted ml-2 font-mono font-normal">R$ 600,00</span></span>
                </div>
                <input type="range" defaultValue={60} className="w-full accent-primary" />
             </div>
             <div>
                <div className="flex justify-between text-xs mb-2 font-bold">
                  <span>Google Ads</span>
                  <span className="text-secondary">40% <span className="text-text-muted ml-2 font-mono font-normal">R$ 400,00</span></span>
                </div>
                <input type="range" defaultValue={40} className="w-full accent-secondary" />
             </div>
          </div>
        </div>

        {/* Coluna 3: Distribuição por Objetivo */}
        <div className="bg-surface border border-border rounded-xl p-6 shadow-xl">
          <h3 className="text-white font-bold mb-4">Por Objetivo (Meta Ads)</h3>
          <div className="flex flex-col gap-3">
             {[
               { label: "Vendas", pct: 60, val: "R$ 360" },
               { label: "Tráfego", pct: 20, val: "R$ 120" },
               { label: "Engajamento", pct: 10, val: "R$ 60" },
               { label: "Reconhecimento", pct: 10, val: "R$ 60" }
             ].map((obj, i) => (
                <div key={i} className="flex items-center justify-between group">
                   <span className="text-sm text-text-muted group-hover:text-white transition-colors">{obj.label}</span>
                   <div className="flex items-center gap-4">
                      <div className="w-16 h-1 mt-1 bg-background rounded overflow-hidden">
                        <div className="h-full bg-border" style={{width: `${obj.pct}%`}}></div>
                      </div>
                      <span className="font-mono text-xs text-white min-w-[3ch]">{obj.pct}%</span>
                      <span className="font-mono text-xs text-primary min-w-[6ch] text-right">{obj.val}</span>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </div>

      <div className="bg-surface border border-border rounded-xl p-6 shadow-xl">
        <h3 className="text-xl font-display font-bold mb-6 text-primary border-b border-border pb-4">Projeção Estimada (30 Dias)</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           {[
             { label: "IMPRESSÕES", val: "4.000" },
             { label: "VISITAS", val: "200" },
             { label: "ENGAJAMENTOS", val: "80" },
             { label: "LEADS", val: "25" },
             { label: "VENDAS", val: "8", highlight: true },
           ].map((metric, i) => (
             <div key={i} className={`p-4 rounded-xl border ${metric.highlight ? 'border-primary bg-primary/5' : 'border-border bg-background'} flex flex-col items-center justify-center text-center`}>
                <span className="text-[10px] uppercase tracking-widest text-text-muted font-bold mb-2">{metric.label}</span>
                <span className={`font-mono text-2xl font-bold ${metric.highlight ? 'text-primary' : 'text-white'}`}>{metric.val}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  )
}
