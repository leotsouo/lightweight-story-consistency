import type { ReactNode } from 'react';

interface StatsCardProps {
  label: string;
  value: ReactNode;
  description?: string;
  tone?: 'default' | 'success' | 'warning';
}

export function StatsCard({ label, value, description, tone = 'default' }: StatsCardProps) {
  const toneClasses =
    tone === 'success'
      ? 'border-emerald-500/40 bg-emerald-950/40'
      : tone === 'warning'
        ? 'border-amber-500/40 bg-amber-950/40'
        : 'border-slate-800 bg-slate-900/60';

  return (
    <div
      className={`flex flex-col gap-1 rounded-xl border ${toneClasses} p-4 shadow-soft-elevated`}
    >
      <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
        {label}
      </div>
      <div className="text-xl font-semibold text-slate-50 md:text-2xl">{value}</div>
      {description ? (
        <div className="text-xs text-slate-400">{description}</div>
      ) : null}
    </div>
  );
}

