// app/layout.tsx
import React from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import { Box } from '@mui/material';
import Topbar from './Components/Topbar';
import Sidebar from './Components/Sidebar';
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Topbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}