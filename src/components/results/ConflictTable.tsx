import type { Conflict } from '@/mock/data';

interface Props {
  conflicts: Conflict[];
}

const typeLabel: Record<Conflict['type'], string> = {
  character: '角色',
  timeline: '時間線',
  object: '物件流向',
  worldRule: '世界觀規則'
};

const severityLabel: Record<Conflict['severity'], string> = {
  low: '低',
  medium: '中',
  high: '高'
};

export function ConflictTable({ conflicts }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/60 shadow-soft-elevated">
      <table className="min-w-full text-left text-xs text-slate-300">
        <thead className="bg-slate-900/80 text-[11px] uppercase tracking-[0.18em] text-slate-500">
          <tr>
            <th className="px-3 py-2">標題</th>
            <th className="px-3 py-2">類型</th>
            <th className="px-3 py-2">嚴重度</th>
            <th className="px-3 py-2">章節</th>
            <th className="px-3 py-2">關聯角色</th>
            <th className="px-3 py-2">狀態</th>
          </tr>
        </thead>
        <tbody>
          {conflicts.map((c) => (
            <tr key={c.id} className="border-t border-slate-800/80 hover:bg-slate-900/60">
              <td className="max-w-xs px-3 py-2 text-slate-100">
                <div className="font-medium">{c.title}</div>
                <div className="mt-0.5 line-clamp-2 text-[11px] text-slate-400">
                  {c.description}
                </div>
              </td>
              <td className="px-3 py-2 text-[11px] text-slate-300">
                <span className="rounded-full bg-slate-700/60 px-2 py-0.5">
                  {typeLabel[c.type]}
                </span>
              </td>
              <td className="px-3 py-2 text-[11px]">
                <span
                  className={`rounded-full px-2 py-0.5 ${
                    c.severity === 'high'
                      ? 'bg-amber-500/20 text-amber-300'
                      : c.severity === 'medium'
                        ? 'bg-sky-500/20 text-sky-300'
                        : 'bg-emerald-500/20 text-emerald-300'
                  }`}
                >
                  {severityLabel[c.severity]}
                </span>
              </td>
              <td className="px-3 py-2 text-[11px] text-slate-300">
                <div>{c.chapterA}</div>
                {c.chapterB ? <div className="text-slate-500">vs {c.chapterB}</div> : null}
              </td>
              <td className="px-3 py-2 text-[11px] text-slate-300">
                {c.relatedCharacters.length ? c.relatedCharacters.join(', ') : '—'}
              </td>
              <td className="px-3 py-2 text-[11px]">
                <span
                  className={`rounded-full px-2 py-0.5 ${
                    c.status === 'resolved'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : c.status === 'acknowledged'
                        ? 'bg-slate-600/40 text-slate-200'
                        : 'bg-rose-500/20 text-rose-300'
                  }`}
                >
                  {c.status === 'resolved'
                    ? '已解決'
                    : c.status === 'acknowledged'
                      ? '已理解'
                      : '待處理'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

