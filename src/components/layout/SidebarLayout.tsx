"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

const navItems = [
  { href: '/', label: 'Dashboard 總覽' },
  { href: '/projects', label: '專案 / 文本' },
  { href: '/results', label: '檢核結果' },
  { href: '/characters', label: '角色一致性' },
  { href: '/graph', label: '知識圖譜' },
  { href: '/report', label: '報告與匯出' }
];

export function SidebarLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-background text-slate-100">
      <aside className="hidden w-64 flex-shrink-0 border-r border-slate-800 bg-slate-950/80 px-4 py-6 backdrop-blur md:block">
        <div className="mb-8 flex items-center gap-2 px-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-400 via-sky-400 to-emerald-400 shadow-soft-elevated" />
          <div>
            <div className="text-sm font-semibold tracking-wide text-slate-100">
              輕量智敘
            </div>
            <div className="text-xs text-slate-400">Narrative Consistency Console</div>
          </div>
        </div>

        <nav className="space-y-1 text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-md px-3 py-2 transition ${
                  active
                    ? 'bg-accent/20 text-indigo-100'
                    : 'text-slate-400 hover:bg-slate-800/60 hover:text-slate-100'
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-10 rounded-lg border border-slate-800 bg-slate-900/70 p-3 text-xs text-slate-400">
          <div className="mb-1 font-semibold text-slate-200">Demo 模式</div>
          <p>目前為前端 Prototype，所有檢核結果皆為模擬資料。</p>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-slate-800 bg-slate-950/60 px-4 py-3 backdrop-blur">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Active Project
            </div>
            <div className="text-sm font-medium text-slate-100">
              《赤霄劍傳》劇本 v1.2（模擬專案）
            </div>
          </div>
          <div className="text-xs text-slate-500">AI 分析狀態：已完成 · 最後更新 3 分鐘前</div>
        </header>

        <main className="flex-1 px-4 py-6 md:px-8 md:py-8">{children}</main>
      </div>
    </div>
  );
}

