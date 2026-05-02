import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Focus Session Timer — Pomodoro with Discord Status Sync',
  description: 'Pomodoro timer that automatically updates your Discord status and mutes notifications during focus sessions. Built for remote developers and distributed teams.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="471cfd4b-7cb3-4366-8c90-c044066a4283"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
