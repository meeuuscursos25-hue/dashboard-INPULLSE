import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'motion/react';

interface MetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  sublabel: string;
  valor: string | number;
  icon: any;
  color: string;
  delay?: number;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, sublabel, valor, icon: Icon, color, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface relative rounded-xl border border-border p-4 flex flex-col justify-between overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:bg-[var(--color-surface-hover)] transition-colors cursor-pointer group"
    >
      {/* Colored Left Top Accent line */}
      <div 
        className="absolute top-0 left-0 h-1 bg-gradient-to-r" 
        style={{ width: '40%', backgroundImage: `linear-gradient(to right, ${color}, transparent)` }} 
      />
      <div 
        className="absolute top-0 left-0 w-1 bg-gradient-to-b" 
        style={{ height: '40%', backgroundImage: `linear-gradient(to bottom, ${color}, transparent)` }} 
      />

      <div className="flex items-start mb-2 relative z-10 w-full">
        <div style={{ color }} className="mr-3 p-2.5 bg-background rounded-lg border border-border group-hover:scale-110 transition-transform shadow-inner">
          <Icon size={18} strokeWidth={2.5} />
        </div>
        <div className="flex flex-col flex-1">
          <span className="text-[11px] uppercase tracking-widest text-[#FFF] font-semibold opacity-90">{label}</span>
          <span className="text-[12px] text-text-muted font-medium mt-0.5">{sublabel}</span>
        </div>
      </div>
      <div className="mt-1 relative z-10">
        <span className="font-mono text-[26px] font-bold text-white tracking-tight leading-none block">{valor}</span>
      </div>
    </motion.div>
  );
}
