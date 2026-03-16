import { mockProject, mockVersions } from '@/mock/data';

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-50 md:text-2xl">專案 / 文本管理</h1>
        <p className="mt-1 text-sm text-slate-400">
          管理長篇文本專案、查看版本歷史與分析狀態。此 Demo 以《赤霄劍傳》作為範例專案。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
        <section className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">目前專案</h2>
          <div className="mt-2 space-y-1 text-sm">
            <div className="text-base font-semibold text-slate-50">{mockProject.name}</div>
            <p className="text-slate-300">{mockProject.description}</p>
          </div>
          <dl className="mt-3 grid grid-cols-2 gap-2 text-xs text-slate-400">
            <div>
              <dt className="uppercase tracking-[0.16em]">建立日期</dt>
              <dd className="text-slate-200">{mockProject.createdAt}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.16em]">最後更新</dt>
              <dd className="text-slate-200">{mockProject.updatedAt}</dd>
            </div>
          </dl>

          <div className="mt-4 rounded-lg border border-dashed border-slate-700 bg-slate-900/60 p-3 text-xs text-slate-400">
            <div className="mb-1 font-semibold text-slate-200">上傳新版本（模擬）</div>
            <p>在真實系統中，這裡會接受 .docx / .pdf / .txt 劇本檔案並觸發分析流程。</p>
          </div>
        </section>

        <section className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">版本歷史與分析狀態</h2>
          <p className="text-xs text-slate-400">
            不同版本可對應到不同階段的修訂，例如導演修訂版、世界觀補強版等。
          </p>
          <div className="mt-3 space-y-2 text-sm">
            {mockVersions.map((v) => (
              <div
                key={v.id}
                className="flex items-start justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2"
              >
                <div>
                  <div className="font-medium text-slate-100">{v.label}</div>
                  <div className="text-xs text-slate-400">{v.fileName}</div>
                  <div className="mt-1 text-xs text-slate-400">
                    上傳於 {v.uploadedAt} · 約 {Math.round(v.wordCount / 1000)} 萬字
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1 text-xs">
                  <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
                    分析完成
                  </span>
                  <span className="text-slate-500">可在左側選單切換檢視結果</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

