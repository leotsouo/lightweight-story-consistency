import { mockEdges, mockNodes } from '@/mock/data';

export default function GraphPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-50 md:text-2xl">知識圖譜</h1>
        <p className="mt-1 text-sm text-slate-400">
          以圖形化方式呈現角色、物件、事件與地點之間的關聯，協助快速回溯設定依據。
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div className="relative flex items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 shadow-soft-elevated">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#1e293b_0,_transparent_55%)] opacity-60" />
          <div className="relative h-72 w-full max-w-lg">
            {/* 這裡以簡化節點＋連線 Mock 出互動感 */}
            <svg viewBox="0 0 400 260" className="h-full w-full text-slate-600">
              <defs>
                <linearGradient id="nodeCharacter" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#4f46e5" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
                <linearGradient id="nodeObject" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
              </defs>

              {/* edges */}
              <line x1="120" y1="80" x2="210" y2="120" stroke="currentColor" strokeWidth="1.2" />
              <line x1="280" y1="60" x2="210" y2="120" stroke="currentColor" strokeWidth="1.2" />
              <line x1="150" y1="200" x2="210" y2="120" stroke="currentColor" strokeWidth="1.2" />

              {/* nodes */}
              <circle cx="210" cy="120" r="26" fill="url(#nodeObject)" />
              <circle cx="120" cy="80" r="22" fill="url(#nodeCharacter)" />
              <circle cx="280" cy="60" r="18" fill="url(#nodeCharacter)" />
              <circle cx="150" cy="200" r="18" fill="#38bdf8" />

              {/* labels */}
              <text x="210" y="124" textAnchor="middle" fill="#020617" fontSize="11">
                赤霄劍
              </text>
              <text x="120" y="84" textAnchor="middle" fill="#e5e7eb" fontSize="11">
                雷淵
              </text>
              <text x="280" y="64" textAnchor="middle" fill="#e5e7eb" fontSize="11">
                雲逐
              </text>
              <text x="150" y="204" textAnchor="middle" fill="#0f172a" fontSize="10">
                南關密室會議
              </text>
            </svg>
          </div>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">節點與關係摘要（Demo）</h2>
          <p className="text-slate-400">
            真實系統會支援縮放、拖曳與點擊節點以檢視細節；此處以靜態視覺與列表模擬。
          </p>

          <div className="mt-2 grid gap-2">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                節點
              </div>
              <ul className="mt-1 space-y-1">
                {mockNodes.map((n) => (
                  <li key={n.id} className="rounded-md bg-slate-950/60 px-2 py-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-slate-100">{n.label}</span>
                      <span className="text-slate-500">{n.type}</span>
                    </div>
                    {n.summary ? (
                      <p className="mt-0.5 text-[11px] text-slate-400 line-clamp-2">
                        {n.summary}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                關係
              </div>
              <ul className="mt-1 space-y-1">
                {mockEdges.map((e) => {
                  const from = mockNodes.find((n) => n.id === e.fromNodeId);
                  const to = mockNodes.find((n) => n.id === e.toNodeId);
                  return (
                    <li key={e.id} className="rounded-md bg-slate-950/60 px-2 py-1">
                      <span className="text-slate-200">
                        {from?.label}{' '}
                        <span className="text-sky-300">{e.relation}</span>{' '}
                        {to?.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

