import React from 'react';
import { MetricCard } from '../components/MetricCard';
import { Funnel } from '../components/Funnel';
import { DemographicsChart, TimelineChart, VideoFunnel } from '../components/Charts';
import { mockData } from '../data/mock';
import { Banknote, Target, BarChart2, RefreshCw, Eye, MousePointerClick, MoreHorizontal } from 'lucide-react';

export function DashboardGeral() {
  const cards = [
    { label: "Investimento", sublabel: "Valor Gasto", valor: `R$ ${mockData.investimento.toLocaleString('pt-BR')}`, icon: Banknote, color: "#D4F53C", delay: 0 },
    { label: "Resultado", sublabel: "Compras", valor: mockData.resultado, icon: Target, color: "#22C55E", delay: 0.1 },
    { label: "Custo/Resultado", sublabel: "Custo/Compras", valor: `R$ ${mockData.custoResultado.toLocaleString('pt-BR')}`, icon: BarChart2, color: "#3B82F6", delay: 0.2 },
    { label: "Retorno", sublabel: "Valor de Compra", valor: `R$ ${mockData.retorno.toLocaleString('pt-BR')}`, icon: RefreshCw, color: "#8B5CF6", delay: 0.3 },
    { label: "CPM", sublabel: "CPM", valor: `R$ ${mockData.cpm.toLocaleString('pt-BR')}`, icon: Eye, color: "#F97316", delay: 0.4 },
    { label: "CTR", sublabel: "CTR (Todos)", valor: `${mockData.ctr}%`, icon: MousePointerClick, color: "#06B6D4", delay: 0.5 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6">
      
      {/* Left Column: Cards + Timeline */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-4">
          {cards.map((c, i) => (
            <MetricCard 
              key={i} 
              label={c.label} 
              sublabel={c.sublabel} 
              valor={c.valor} 
              icon={c.icon} 
              color={c.color} 
              delay={c.delay} 
            />
          ))}
        </div>
        <div className="flex-1 min-h-[300px]">
          <TimelineChart />
        </div>
      </div>

      {/* Middle Column: Funnel */}
      <div className="lg:col-span-4 flex flex-col">
        <Funnel data={mockData.funil.etapas} />
      </div>

      {/* Right Column: Demographics + Video Funnel + Creatives Preview */}
      <div className="lg:col-span-3 flex flex-col gap-6">
        <div className="h-[280px]">
          <DemographicsChart />
        </div>
        <div className="h-[140px]">
          <VideoFunnel />
        </div>
        
        {/* Criativos Destaque (Mini Version for Sidebar block) */}
        <div className="bg-surface border border-border rounded-xl p-5 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.2)] flex-1">
           <div className="flex w-full items-center justify-between mb-3">
             <span className="font-display font-bold text-sm tracking-wide text-primary">Criativos Destaque</span>
             <MoreHorizontal size={14} className="text-text-muted" />
           </div>
           
           <div className="flex flex-col gap-3">
              {mockData.criativos.map(cr => (
                <div key={cr.id} className="flex gap-3 items-center group cursor-pointer hover:bg-surface-hover p-1.5 rounded-lg transition-colors border border-transparent hover:border-border">
                  <div className="w-10 h-10 rounded overflow-hidden bg-background">
                     <img src={cr.imagem} alt="ad" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex flex-col">
                     <div className="flex items-center gap-2">
                        <span className="text-xs bg-primary text-background font-bold px-1 py-0.5 rounded uppercase leading-none">Top {cr.id}</span>
                        <span className="text-xs text-text-muted">{cr.conversoes} Conv • R$ {cr.custoConv}</span>
                     </div>
                     <div className="text-[10px] text-text-muted mt-1 font-mono">
                        CTR: {cr.ctr}% • CPC: R$ {cr.cpc.toFixed(2)}
                     </div>
                  </div>
                </div>
              ))}
           </div>
        </div>

      </div>

      {/* Full Width Table Block at Bottom: Visão Geral */}
      <div className="lg:col-span-12 bg-surface border border-border rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] overflow-x-auto">
        <div className="flex w-full items-center justify-between mb-4">
          <span className="font-display font-bold text-sm tracking-wide text-primary">Visão Geral</span>
          <div className="flex gap-2">
             <button className="px-3 py-1.5 border border-border rounded bg-background text-xs hover:text-primary transition-colors">Campanha</button>
             <button className="px-3 py-1.5 border border-border rounded bg-surface text-xs text-text-muted hover:text-white transition-colors">Conjunto</button>
             <button className="px-3 py-1.5 border border-border rounded bg-surface text-xs text-text-muted hover:text-white transition-colors">Anúncio</button>
          </div>
        </div>
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-border/50 text-text-muted text-xs">
              <th className="font-medium pb-2 pr-4">Campanha</th>
              <th className="font-medium pb-2 px-4 text-right">Mensagens</th>
              <th className="font-medium pb-2 px-4 text-right">CTR (tnk)</th>
              <th className="font-medium pb-2 px-4">Quality</th>
              <th className="font-medium pb-2 px-4 text-right">Link C.</th>
              <th className="font-medium pb-2 px-4 text-right">Hook</th>
              <th className="font-medium pb-2 px-4 text-right">Hold</th>
              <th className="font-medium pb-2 px-4 text-right">Valor</th>
              <th className="font-medium pb-2 pl-4 text-right">Custo</th>
            </tr>
          </thead>
          <tbody>
             {mockData.visaoGeral.map((item, i) => (
               <tr key={i} className="border-b border-border/20 hover:bg-surface-hover/50 transition-colors group">
                 <td className="py-3 pr-4 font-medium max-w-[200px] truncate">{item.camp}</td>
                 <td className="py-3 px-4 text-right font-mono text-white">{item.msg}</td>
                 <td className="py-3 px-4 text-right font-mono text-primary">{item.ctr}</td>
                 <td className="py-3 px-4 text-[11px]"><span className="bg-border px-2 py-1 rounded text-text-muted">{item.quality}</span></td>
                 <td className="py-3 px-4 text-right font-mono">{item.link}</td>
                 <td className="py-3 px-4 text-right font-mono">{item.hook}</td>
                 <td className="py-3 px-4 text-right font-mono text-secondary">{item.hold}</td>
                 <td className="py-3 px-4 text-right font-mono text-green-400">{item.valor}</td>
                 <td className="py-3 pl-4 text-right font-mono text-red-400">{item.custo}</td>
               </tr>
             ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
