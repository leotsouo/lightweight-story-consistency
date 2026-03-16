import { StatsCard } from '@/components/ui/StatsCard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-50 md:text-2xl">
          敘事檢核總覽 Dashboard
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          總覽《赤霄劍傳》目前的敘事一致性健康狀態，從衝突分布到版本比較，一眼掌握。
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatsCard
          label="本版本總衝突數"
          value="23"
          description="含角色 8、時間線 6、物件流向 5、世界觀規則 4"
          tone="warning"
        />
        <StatsCard
          label="高嚴重度衝突"
          value="5"
          description="建議優先處理，可能影響主線劇情理解"
          tone="warning"
        />
        <StatsCard
          label="關鍵角色數"
          value="12"
          description="含主角群 4 人、重要配角 8 人"
        />
        <StatsCard
          label="已標記為已理解"
          value="9"
          description="編劇已確認且暫不調整的衝突項目"
          tone="success"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-5">
        <div className="md:col-span-3 space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">衝突類型分布</h2>
          <p className="text-xs text-slate-400">
            透過不同類型衝突的比例，快速判斷目前版本的主要風險集中在哪些維度。
          </p>
          <div className="mt-2 space-y-2 text-xs text-slate-300">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                角色相關衝突
              </span>
              <span>8 項（34%）</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                事件／時間線衝突
              </span>
              <span>6 項（26%）</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                物件流向衝突
              </span>
              <span>5 項（22%）</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                世界觀規則衝突
              </span>
              <span>4 項（18%）</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">版本比較摘要（v1.2 vs v1.1）</h2>
          <ul className="mt-2 space-y-2 text-xs text-slate-300">
            <li>· 新增 6 項衝突，多與「赤霄劍」物件流向與持有者變更有關。</li>
            <li>· 解決 3 項舊版角色背景矛盾，人物生平時間線更趨合理。</li>
            <li>· 世界觀規則新增「靈脈耗損」設定，導致 1 項法術使用次數不符的潛在衝突。</li>
          </ul>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">最近重要衝突</h2>
          <p className="text-xs text-slate-400">
            點擊左側「檢核結果」可查看完整列表與前後文。
          </p>
          <ul className="mt-2 space-y-2 text-xs text-slate-300">
            <li>
              <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] text-amber-300">
                高 · 物件流向
              </span>{' '}
              第三章註記「赤霄劍由同伴雲逐保管」，但第七章開場直接描寫主角持劍迎戰。
            </li>
            <li>
              <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] text-indigo-300">
                中 · 角色記憶
              </span>{' '}
              主角在前文明確參與密室決策會議，後文卻以「首次得知」口吻描述同一事件。
            </li>
            <li>
              <span className="rounded-full bg-sky-500/20 px-2 py-0.5 text-[10px] text-sky-300">
                中 · 時間線
              </span>{' '}
              第十章事件標記為冬季，卻引用第五章夏季發生的祭典作為「剛結束不久」的背景。
            </li>
          </ul>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4 shadow-soft-elevated">
          <h2 className="text-sm font-medium text-slate-100">代理人分析流程</h2>
          <p className="text-xs text-slate-400">
            以多代理人協作模擬長篇文本檢核流程，提升可解釋性與檢核覆蓋率。
          </p>
          <ol className="mt-2 space-y-2 text-xs text-slate-300">
            <li>1. 資訊抽取代理人：從章節中擷取角色、事件、物件與世界觀規則。</li>
            <li>2. 關係構圖代理人：建立動態知識圖譜，形成角色關係與事件因果。</li>
            <li>3. 衝突比對代理人：比對不同章節與版本，標記前後矛盾與遺漏。</li>
            <li>4. 報告整理代理人：將結果整理成可閱讀的衝突清單與修正建議。</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

