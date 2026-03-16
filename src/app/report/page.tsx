import { mockConflicts } from '@/mock/data';

export default function ReportPage() {
  const highSeverity = mockConflicts.filter((c) => c.severity === 'high');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-50 md:text-2xl">報告與匯出</h1>
        <p className="mt-1 text-sm text-slate-400">
          匯整本次敘事檢核結果，產出給編劇團隊與製作會議使用的精簡報告。
        </p>
      </div>

      <section className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-sm text-slate-300 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">報告摘要（v1.2）</h2>
          <p className="mt-2 text-xs text-slate-300">
            整體而言，《赤霄劍傳》主線敘事清晰，多數衝突集中在物件流向與角色記憶層面，世界觀規則已大致穩定。
          </p>
          <ul className="mt-2 list-inside list-decimal space-y-1 text-xs text-slate-300">
            <li>赤霄劍相關章節需補足劍從禁庫再度回到主角手中的具體橋段。</li>
            <li>主角對權威的態度轉折需增加鋪墊，避免給人「性格突然變了」的感覺。</li>
            <li>時間標記需與節慶設定統一，避免冬天引用夏季祭典作為「剛結束」事件。</li>
          </ul>
        </div>

        <div className="w-full rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 shadow-soft-elevated md:w-64">
          <h2 className="text-sm font-medium text-slate-100">匯出報告（模擬）</h2>
          <p className="mt-2 text-slate-400">
            Demo 中點擊下方按鈕不會產生真實檔案，而是模擬匯出行為。
          </p>
          <button
            type="button"
            className="mt-3 w-full rounded-lg bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 px-3 py-2 text-sm font-medium text-slate-950 shadow-soft-elevated"
          >
            匯出 PDF 報告（模擬）
          </button>
          <p className="mt-2 text-[11px] text-slate-500">
            實際系統可產出含封面、目錄、衝突清單與建議修正之 PDF 或 Word 檔。
          </p>
        </div>
      </section>

      <section className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 shadow-soft-elevated">
        <h2 className="text-sm font-medium text-slate-100">高優先度衝突一覽</h2>
        <p className="text-slate-400">
          以下列出目前評估為「高」嚴重度的敘事衝突，建議在下一版修訂會議中優先處理。
        </p>
        <ul className="mt-2 space-y-2">
          {highSeverity.map((c) => (
            <li key={c.id} className="rounded-md border border-slate-800 bg-slate-950/60 px-3 py-2">
              <div className="flex items-center justify-between">
                <div className="text-[13px] font-medium text-slate-100">{c.title}</div>
                <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[11px] text-amber-300">
                  高嚴重度
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-300">{c.description}</p>
              <p className="mt-1 text-[11px] text-slate-500">
                章節：{c.chapterA}
                {c.chapterB ? ` vs ${c.chapterB}` : ''}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 shadow-soft-elevated">
        <h2 className="text-sm font-medium text-slate-100">建議修正方向（供會議用）</h2>
        <ul className="mt-1 list-inside list-decimal space-y-1">
          <li>在第三章與第七章之間插入一場「重返禁庫」或「偷取赤霄」的行動戲，補足劍流向。</li>
          <li>於第八〜第九章加入雷淵與長老會之間的衝突與和解過程，使態度轉變更有情感脈絡。</li>
          <li>統一世界觀時間軸，將「花神祭」移至春末或調整第十章季節設定，以避免季節衝突。</li>
        </ul>
      </section>
    </div>
  );
}

