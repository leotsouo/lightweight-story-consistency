import { mockAppearances, mockCharacters } from '@/mock/data';

export default function CharactersPage() {
  const focusCharacter = mockCharacters[0];
  const appearances = mockAppearances.filter((a) => a.characterId === focusCharacter.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-50 md:text-2xl">角色一致性</h1>
        <p className="mt-1 text-sm text-slate-400">
          從角色視角檢視敘事一致性，追蹤性格、立場與記憶在不同章節與版本中的變化。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <section className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">角色清單（Demo 範例）</h2>
          <ul className="mt-2 space-y-2">
            {mockCharacters.map((c) => (
              <li
                key={c.id}
                className={`rounded-lg border px-3 py-2 ${
                  c.id === focusCharacter.id
                    ? 'border-indigo-500/70 bg-indigo-950/40'
                    : 'border-slate-800 bg-slate-950/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="font-medium text-slate-100">
                    {c.name}{' '}
                    <span className="text-xs text-slate-400">
                      · {c.role ?? '未標註角色'}
                    </span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-slate-400 line-clamp-2">{c.description}</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {c.traits.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-700/60 px-2 py-0.5 text-[10px] text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">
            {focusCharacter.name} 的章節行為與可能漂移
          </h2>
          <p className="text-xs text-slate-400">
            下方時間線彙整了系統觀察到的行為與性格快照，並以「漂移分數」標示前後落差。
          </p>
          <div className="mt-3 space-y-3">
            {appearances.map((a) => (
              <div
                key={a.id}
                className="relative rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-medium text-slate-200">{a.chapter}</div>
                  {typeof a.driftScore === 'number' ? (
                    <div className="flex items-center gap-2 text-[11px]">
                      <span className="text-slate-400">漂移分數</span>
                      <span
                        className={`rounded-full px-2 py-0.5 ${
                          a.driftScore > 0.6
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-emerald-500/20 text-emerald-300'
                        }`}
                      >
                        {Math.round(a.driftScore * 100)} / 100
                      </span>
                    </div>
                  ) : null}
                </div>
                <p className="mt-1 text-xs text-slate-300">{a.summary}</p>
                <div className="mt-1 flex flex-wrap gap-1">
                  {a.traitsSnapshot.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-700/60 px-2 py-0.5 text-[10px] text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {a.driftReason ? (
                  <p className="mt-2 text-[11px] text-amber-300">
                    系統說明：{a.driftReason}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

