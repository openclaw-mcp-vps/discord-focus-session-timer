export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-flex items-center gap-2 bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1.5 text-sm text-[#58a6ff] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#3fb950] inline-block"></span>
          Discord Status Sync
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stay in flow.<br />
          <span className="text-[#58a6ff]">Let Discord know.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          A Pomodoro timer that automatically updates your Discord status, sets rich presence, and mutes notifications so your team knows you&apos;re heads-down — without you lifting a finger.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Focusing — $12/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. Works with any Discord server.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">⏱️</div>
            <h3 className="font-semibold text-white mb-1">Pomodoro Timer</h3>
            <p className="text-sm text-[#8b949e]">25-minute focus blocks with short and long breaks, fully customizable.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🟢</div>
            <h3 className="font-semibold text-white mb-1">Auto Discord Status</h3>
            <p className="text-sm text-[#8b949e]">Sets your status to &quot;In Focus Session&quot; and restores it when you&apos;re done.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">🔕</div>
            <h3 className="font-semibold text-white mb-1">Mute Notifications</h3>
            <p className="text-sm text-[#8b949e]">Optionally silences Discord DMs and mentions while your timer runs.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$12</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Unlimited Pomodoro sessions</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Discord OAuth status sync</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Rich Presence integration</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Notification muting</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Custom session labels</li>
            <li className="flex items-center gap-2"><span className="text-[#3fb950]">✓</span> Session history & stats</li>
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does Discord status sync work?</h3>
            <p className="text-sm text-[#8b949e]">You connect your Discord account via OAuth. When a focus session starts, the app uses Discord&apos;s API to update your custom status to &quot;In Focus Session 🍅&quot; and resets it automatically when the timer ends.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it work without the Discord desktop app?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Status updates happen via Discord&apos;s web API, so they work from any browser. Rich Presence (game activity) requires the desktop app, but status sync works everywhere.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Absolutely. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-sm text-[#6e7681]">
        &copy; {new Date().getFullYear()} Discord Focus Session Timer. All rights reserved.
      </footer>
    </main>
  )
}
