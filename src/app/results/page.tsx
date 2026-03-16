import { ConflictTable } from '@/components/results/ConflictTable';
import { mockConflicts } from '@/mock/data';

export default function ResultsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold text-slate-50 md:text-2xl">檢核結果</h1>
        <p className="mt-1 text-sm text-slate-400">
          查看本次分析偵測到的角色、時間線、物件與世界觀規則衝突。此頁是敘事診斷的主要工作區。
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 shadow-soft-elevated md:col-span-2">
          <h2 className="text-sm font-medium text-slate-100">分析摘要</h2>
          <ul className="mt-2 space-y-1">
            <li>· 共偵測到 23 項潛在衝突，其中 5 項為高嚴重度，建議優先處理。</li>
            <li>· 物件流向與角色記憶相關衝突集中於第三〜第十二章。</li>
            <li>· 新增世界觀規則後，引出 1 項法術使用次數不符的潛在矛盾。</li>
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 shadow-soft-elevated md:col-span-2">
          <h2 className="text-sm font-medium text-slate-100">篩選（Demo 固定）</h2>
          <p className="mt-2 text-slate-400">
            在完整系統中，可依類型、章節、角色、嚴重度等條件篩選衝突。此 Demo 固定顯示代表性案例。
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-medium text-slate-100">代表性衝突清單</h2>
        <ConflictTable conflicts={mockConflicts} />
      </section>

      <section className="space-y-2 rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-xs text-slate-300 shadow-soft-elevated">
        <h2 className="text-sm font-medium text-slate-100">如何閱讀這些結果？</h2>
        <p className="text-slate-400">
          每一則衝突都是系統根據長篇文本中擷取出的角色、事件與物件關係所自動比對而來。建議先處理：
        </p>
        <ul className="mt-1 list-inside list-decimal space-y-1">
          <li>影響主線劇情理解的高嚴重度衝突（例如關鍵物件持有者錯置）。</li>
          <li>角色態度、記憶或立場在短時間內大幅轉折但缺乏鋪墊的情節。</li>
          <li>會牽動世界觀規則可信度的設定矛盾。</li>
        </ul>
      </section>
    </div>
  );
}

