import React from 'react';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';

interface FunnelStage {
  nome: string;
  valor: number;
  custo: string;
  subCusto: string;
}

export function Funnel({ data }: { data: FunnelStage[] }) {
  // New color scale: green -> yellow -> blue -> purple
  const colors = [
    '#22C55E', // Green
    '#84D848', // Yellow-green
    '#D4F53C', // Yellow-neon
    '#38BDF8', // Light Blue
    '#3B82F6', // Blue
    '#6366F1', // Indigo
    '#8B5CF6'  // Purple
  ];
  
  // Responsive widths to simulate real tapering inside the SVG/div clip-paths
  const widths = [100, 92, 82, 70, 58, 48, 40]; 

  return (
    <div className="bg-surface border border-border rounded-xl p-5 flex flex-col items-center shadow-[0_4px_24px_rgba(0,0,0,0.2)] h-full">
      <div className="flex w-full items-center justify-between mb-8">
        <div className="flex items-center gap-2 text-primary">
          <div className="p-1.5 bg-primary/10 rounded border border-primary/20"><Filter size={16} /></div>
          <span className="font-display font-bold text-sm tracking-wide">Funil Geral</span>
        </div>
        <div className="border border-border rounded items-center flex px-2 py-1 text-xs text-text-muted cursor-pointer hover:bg-surface-hover">
          Tipo: Agência B2B <span className="ml-2">▾</span>
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center relative my-2">
        <div className="w-[55%] max-w-[220px] flex flex-col gap-[4px] items-center relative right-6 lg:right-12">
          
          {data.map((stage, i) => {
            // Dynamic Conversion Rate calculation based on previous element
            let conv = null;
            if (i > 0) {
              const prevValor = data[i - 1].valor;
              const curValor = stage.valor;
              const rate = prevValor > 0 ? ((curValor / prevValor) * 100).toFixed(2) + '%' : '0.00%';
              conv = rate;
            }

            return (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center w-full relative"
              >
                {/* Central Trapezoid */}
                <div className="w-full flex justify-center relative z-10">
                  {/* The shape */}
                  <div 
                    className="h-16 relative flex flex-col items-center justify-center transition-all hover:brightness-110"
                    style={{ 
                      width: `${widths[i]}%`, 
                      backgroundColor: colors[i],
                      clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)',
                      color: i >= 4 ? '#FFFFFF' : '#0D0D0D'
                    }}
                  >
                    {stage.nome && <span className="text-[10px] font-bold uppercase tracking-wide opacity-90 leading-tight mt-1">{stage.nome}</span>}
                    <span className="font-mono text-xl font-bold leading-tight">{stage.valor.toLocaleString('pt-BR')}</span>
                  </div>
                </div>

                {/* Right Side Connectors & Text */}
                <div className="absolute left-[100%] top-1/2 -translate-y-1/2 text-left pl-6 lg:pl-10 whitespace-nowrap min-w-[140px] pointer-events-none">
                  {/* Connecting Line (simulated with absolute div if not on first) */}
                  {i > 0 && conv && (
                    <div className="absolute -top-7 -left-0 w-8 lg:w-10 h-[1px] bg-border flex items-center">
                      <div className="absolute right-0 bg-surface border border-border text-[9px] font-mono px-1.5 py-0.5 rounded text-text-muted shadow-sm">
                        {conv}
                      </div>
                    </div>
                  )}
                  {/* Side metrics (cost) */}
                  {stage.custo && (
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-text-muted">{stage.subCusto}</span>
                      <span className="font-mono text-sm font-semibold text-text">{stage.custo}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
}
