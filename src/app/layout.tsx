import type { Metadata } from 'next';
import './globals.css';
import { SidebarLayout } from '@/components/layout/SidebarLayout';

export const metadata: Metadata = {
  title: '輕量智敘 Narrative Consistency Console',
  description: 'AI 輔助長篇敘事一致性檢核平台 Prototype'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body>
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}

