import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Line 
} from 'recharts';
import { Rocket, Play } from 'lucide-react';
import { mockData } from '../data/mock';

export function DemographicsChart() {
  const data = mockData.demograficos.faixaEtaria;

  return (
    <div className="bg-surface border border-border rounded-xl p-5 flex flex-col shadow-[0_4px_24px_rgba(0,0,0,0.2)] h-full">
      <div className="flex w-full items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-primary">
          <div className="p-1.5 bg-primary/10 rounded border border-primary/20"><Rocket size={16} /></div>
          <span className="font-display font-bold text-sm tracking-wide">Demográficos</span>
        </div>
        <div className="flex text-text-muted gap-2 text-xs">
           <span className="cursor-pointer hover:text-white">↑↓</span>
           <span className="cursor-pointer hover:text-white">A-Z</span>
           <span className="cursor-pointer hover:text-white">⋮</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between relative mt-2">
        <div className="w-[180px] h-[180px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={85}
                stroke="none"
                dataKey="percent"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1A1A1A', borderColor: '#D4F53C', borderRadius: '8px' }}
                itemStyle={{ color: '#FFF' }}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Inner Custom Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-background border-[4px] border-surface flex items-center justify-center">
              <Rocket size={24} className="text-primary" />
            </div>
          </div>
        </div>

        {/* Custom Legend */}
        <div className="flex flex-col gap-2 ml-4">
          {data.map((item, i) => (
            <div key={i} className="flex items-center text-xs">
              <div className="w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: item.color }} />
              <span className="text-text-muted w-12">{item.label}</span>
              <span className="font-mono font-medium">{item.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TimelineChart() {
  const data = mockData.linhaDoTempo;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-surface border border-primary/50 text-white p-3 rounded-lg shadow-xl outline-none text-xs">
          <p className="font-bold mb-1 opacity-80">{label}</p>
          <p className="font-mono text-primary">Gasto: R$ {payload[0].value.toFixed(2)}</p>
          <p className="font-mono text-secondary">Compras: {payload[1].value}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-surface border border-border rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] h-full flex flex-col">
      <div className="flex w-full items-center justify-between mb-4">
        <span className="font-display font-bold text-sm text-primary tracking-wide">Linha do Tempo</span>
        <div className="flex items-center gap-3 text-xs">
           <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-primary"></div><span className="text-text-muted">Valor Gasto</span></div>
           <div className="flex items-center gap-1"><div className="w-3 h-[2px] bg-secondary"></div><span className="text-text-muted">Compras</span></div>
        </div>
      </div>
      <div className="flex-1 w-full min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorGasto" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D4F53C" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#D4F53C" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#2A2A2A" />
            <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{fill: '#A0A0A0', fontSize: 10}} dy={10} />
            <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{fill: '#A0A0A0', fontSize: 10}} dx={-10} />
            <YAxis yAxisId="right" orientation="right" hide />
            <Tooltip content={<CustomTooltip />} />
            
            <Area yAxisId="left" type="monotone" dataKey="gasto" stroke="#D4F53C" strokeWidth={2} fillOpacity={1} fill="url(#colorGasto)" />
            <Line yAxisId="right" type="monotone" dataKey="compras" stroke="#8B5CF6" strokeWidth={2} dot={{ r: 3, fill: '#8B5CF6' }} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function VideoFunnel() {
  const data = mockData.funilVideo;
  return (
    <div className="bg-surface border border-border rounded-xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.2)] h-full flex flex-col">
      <div className="flex w-full items-center gap-2 text-primary mb-4">
        <div className="p-1.5 bg-primary/10 rounded border border-primary/20"><Play size={16} /></div>
        <span className="font-display font-bold text-sm tracking-wide">Funil de Vídeo</span>
      </div>

      <div className="flex w-full h-8 mt-2 shadow-inner">
        {data.map((item, i) => (
          <div 
            key={i} 
            className="flex-1 flex flex-col justify-center relative border-r-2 border-surface last:border-0 hover:brightness-110 transition-all cursor-pointer group"
            style={{ 
               backgroundColor: item.color, 
               clipPath: i === data.length - 1 ? 'none' : 'polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%)',
               marginRight: i === data.length - 1 ? 0 : '-10%' // Overlap for chevron effect
            }}
          >
            <span className="font-bold text-[10px] uppercase text-center relative z-10 w-full ml-[-5%]" style={{color: item.textColor}}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className="flex w-full mt-3 px-2">
         {data.map((item, i) => (
             <div key={i} className="flex-1 text-center font-mono text-sm font-semibold text-text-muted">
                {item.pct}
             </div>
         ))}
      </div>
    </div>
  );
}
