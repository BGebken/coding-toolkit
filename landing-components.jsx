// landing-components.jsx — Coder Addons landing building blocks
const { useState, useEffect } = React;

/* ---------- DEVICE ART (CSS-drawn hardware) ---------- */
function Device({ kind = 'deck', size = 'lg', screen = 'AGENT · READY' }) {
  const cls = `dev ${size === 'lg' ? 'lg' : 'card-dev'}`;
  if (kind === 'dial') {
    return (
      <div className={cls}>
        <div className="screen"><span>{screen}</span><span className="bars"><i/><i/><i/><i/></span></div>
        <div className="row">
          <div className="dial" />
          <div className="keys g2" style={{ flex: 1 }}>
            <div className="key on">⌘</div><div className="key">⏎</div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === 'fader') {
    return (
      <div className={cls}>
        <div className="screen"><span>MIX · 3CH</span><span className="bars"><i/><i/><i/><i/></span></div>
        <div className="row">
          <div className="faders"><div className="fader f1"/><div className="fader f2"/><div className="fader f3"/></div>
          <div className="keys g2" style={{ flex: '0 0 76px' }}><div className="key">A</div><div className="key on">B</div></div>
        </div>
      </div>
    );
  }
  if (kind === 'pad') {
    return (
      <div className={cls}>
        <div className="screen"><span>{screen}</span><span className="bars"><i/><i/><i/><i/></span></div>
        <div className="pads"><div className="pad on"/><div className="pad"/><div className="pad"/></div>
      </div>
    );
  }
  if (kind === 'mini') {
    return (
      <div className={cls}>
        <div className="row">
          <div className="keys g3"><div className="key">/</div><div className="key on">⚡</div><div className="key">↹</div>
            <div className="key">⌥</div><div className="key">⌘</div><div className="key on">⏎</div></div>
        </div>
      </div>
    );
  }
  // deck (default)
  return (
    <div className={cls}>
      <div className="screen"><span>{screen}</span><span className="bars"><i/><i/><i/><i/></span></div>
      <div className="row">
        <div className="keys g4">
          <div className="key">/</div><div className="key on">⚡</div><div className="key">↹</div><div className="key">⌥</div>
          <div className="key on">⌘</div><div className="key">⏎</div><div className="key">⌦</div><div className="key on">★</div>
        </div>
        {size === 'lg' && <div className="dial" />}
      </div>
    </div>
  );
}

/* ---------- TOP BAR ---------- */
function TopBar({ theme, setTheme }) {
  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <div className="brand"><span className="mark" /> coder.addons</div>
        <nav className="nav">
          <a href="#catalog">Catalog</a>
          <a href="#kits">Student Kits</a>
          <a href="#">Docs</a>
          <a href="#">Community</a>
        </nav>
        <div className="topbar-right">
          <div className="tswitch" role="tablist" aria-label="Theme">
            <button className={theme === 'theme-futuristic' ? 'on' : ''} onClick={() => setTheme('theme-futuristic')}>Futuristic</button>
            <button className={theme === 'theme-rainbow' ? 'on' : ''} onClick={() => setTheme('theme-rainbow')}>Rainbow</button>
          </div>
          <button className="icon-btn" aria-label="Cart"><span className="dot" />
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M6 6h15l-1.5 9h-12z"/><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M6 6 5 3H2"/></svg>
          </button>
          <a className="btn btn-primary btn-sm" href="#catalog">Shop now</a>
        </div>
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero({ theme }) {
  const copy = theme === 'theme-rainbow'
    ? { eye: 'New drop · Spring kit', h: ['Build ', 'louder.'], lede: 'A marketplace of plug-and-play hardware that turns any laptop into a creative AI-coding rig. Snap on. Light up. Ship.' }
    : { eye: 'Now shipping · v2 firmware', h: ['Your terminal, ', 'in hardware.'], lede: 'Tactile control surfaces engineered for students running AI agents on real machines. Map prompts, models and commands to physical keys.' };
  return (
    <section className="wrap hero">
      <div>
        <span className="eyebrow"><span className="pulse" />{copy.eye}</span>
        <h1>{copy.h[0]}<span className="grad-text">{copy.h[1]}</span></h1>
        <p className="lede">{copy.lede}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#catalog">Browse the catalog
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="btn btn-ghost" href="#kits">See student kits</a>
        </div>
        <div className="stat-row">
          <div className="stat"><div className="n grad-text">120+</div><div className="l">addons in catalog</div></div>
          <div className="stat"><div className="n grad-text">30s</div><div className="l">plug &amp; play setup</div></div>
          <div className="stat"><div className="n grad-text">−40%</div><div className="l">student pricing</div></div>
        </div>
      </div>
      <div className="hero-stage">
        <div className="halo" />
        <Device3D kind="deck" size="hero" screen={theme === 'theme-rainbow' ? 'PROMPT · LIVE' : 'AGENT · READY'} />
        <div className="floatcard fc1"><span className="led" />gpt-mode · on</div>
        <div className="floatcard fc2"><span className="led" />latency 12ms</div>
      </div>
    </section>
  );
}

/* ---------- COMPAT STRIP ---------- */
function Compat() {
  return (
    <div className="wrap">
      <div className="compat">
        <span className="lbl">Works with</span>
        <div className="chips">
          {['VS Code', 'Cursor', 'Claude Code', 'Neovim', 'JetBrains', 'Zed', 'Warp'].map(x => <span className="chip" key={x}>{x}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ---------- PRODUCTS ---------- */
const PRODUCTS = [
  { name: 'Macro Deck Pro', kind: 'deck', desc: '12 programmable keys + rotary for commands, models & macros.', tags: ['USB-C', '12 keys', 'RGB'], price: '$129', tag: 'Best seller', screen: 'AGENT · READY' },
  { name: 'Prompt Dial', kind: 'dial', desc: 'Rotary controller to tune temperature & context on the fly.', tags: ['Bluetooth', 'Haptic'], price: '$79', tag: 'New', screen: 'TEMP 0.7' },
  { name: 'Context Keypad', kind: 'mini', desc: 'Six keys to launch snippets, files & saved context bundles.', tags: ['USB-C', '6 keys'], price: '$59', tag: null, screen: '' },
  { name: 'Agent Fader Bank', kind: 'fader', desc: 'Three motorized faders to balance models in multi-agent runs.', tags: ['USB-C', 'Motorized'], price: '$149', tag: 'Pro', screen: 'MIX · 3CH' },
  { name: 'AI Footswitch', kind: 'pad', desc: 'Hands-free triple pedal — accept, reject, regenerate.', tags: ['Wired', '3 pads'], price: '$69', tag: null, screen: 'PEDAL · ON' },
  { name: 'Stream Deck Mini', kind: 'mini', desc: 'Pocket launcher for your most-used AI workflows on the go.', tags: ['USB-C', 'Compact'], price: '$45', tag: 'Student fav', screen: '' },
];
function ProductCard({ p }) {
  return (
    <article className="pcard">
      <div className="dev-wrap">
        {p.tag && <span className="ptag">{p.tag}</span>}
        <Device3D kind={p.kind} size="card" screen={p.screen} />
      </div>
      <h3>{p.name}</h3>
      <p className="desc">{p.desc}</p>
      <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
      <div className="foot">
        <div className="price">{p.price}</div>
        <button className="btn btn-ghost btn-sm">Add to kit
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
        </button>
      </div>
    </article>
  );
}
function Catalog() {
  const cats = ['All', 'Macro decks', 'Dials & faders', 'Pedals', 'Compact', 'Under $80'];
  const [active, setActive] = useState('All');
  return (
    <section className="wrap section" id="catalog">
      <div className="sec-head">
        <div>
          <h2>The catalog</h2>
          <p>Plug-and-play peripherals, built for how you actually code with AI.</p>
        </div>
        <div className="filters">
          {cats.map(c => <button key={c} className={'filter' + (active === c ? ' on' : '')} onClick={() => setActive(c)}>{c}</button>)}
        </div>
      </div>
      <div className="grid">
        {PRODUCTS.map(p => <ProductCard key={p.name} p={p} />)}
      </div>
    </section>
  );
}

/* ---------- STUDENT KITS ---------- */
const KITS = [
  { kicker: 'Starter', name: 'First Build', price: '$89', sub: '/ one-time', items: ['Context Keypad (6 keys)', 'Pre-mapped student presets', 'Setup guide + Discord'], feature: false },
  { kicker: 'Most popular', name: 'Studio', price: '$199', sub: '/ one-time', items: ['Macro Deck Pro', 'Prompt Dial', 'RGB profiles for VS Code & Cursor', 'Priority firmware updates'], feature: true },
  { kicker: 'Power', name: 'Command Center', price: '$329', sub: '/ one-time', items: ['Macro Deck Pro + Fader Bank', 'AI Footswitch', 'Magnetic desk dock', 'Team preset sync'], feature: false },
];
function Kits() {
  return (
    <section className="kits" id="kits">
      <div className="wrap section">
        <div className="sec-head">
          <div>
            <h2>Student kits</h2>
            <p>Curated bundles with verified-student pricing — everything mapped out of the box.</p>
          </div>
        </div>
        <div className="kit-grid">
          {KITS.map(k => (
            <div key={k.name} className={'kit' + (k.feature ? ' feature' : '')}>
              <span className="kicker">{k.kicker}</span>
              <h3>{k.name}</h3>
              <div className="kprice">{k.price} <span>{k.sub}</span></div>
              <ul>{k.items.map(i => <li key={i}>{i}</li>)}</ul>
              <button className={'btn btn-block ' + (k.feature ? 'btn-primary' : 'btn-ghost')}>Get {k.name}</button>
              <span className="stu">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3 2 8l10 5 10-5z"/><path d="M6 11v5c0 1 3 3 6 3s6-2 6-3v-5"/></svg>
                Verified-student price
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER CTA ---------- */
function FooterCTA() {
  return (
    <>
      <section className="wrap cta">
        <h2>Bring your <span className="grad-text">desk to life</span>.</h2>
        <p>Join 8,000+ students coding with hardware. Get drop alerts and a first-order discount.</p>
        <form className="signup" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="you@university.edu" aria-label="Email" />
          <button className="btn btn-primary" type="submit">Notify me</button>
        </form>
      </section>
      <footer>
        <div className="wrap foot-inner">
          <div className="brand"><span className="mark" /> coder.addons</div>
          <div className="foot-links">
            <a href="#">Catalog</a><a href="#">Kits</a><a href="#">Docs</a><a href="#">Support</a><a href="#">Students</a>
          </div>
          <div>© 2026 Coder Addons</div>
        </div>
      </footer>
    </>
  );
}

/* ---------- 3D DEVICE ART (extruded CSS hardware) ---------- */
function D3Screen({ label }) {
  return (
    <div className="d3-screen">
      <span>{label}<span className="cur" /></span>
      <span className="bars"><i/><i/><i/><i/></span>
    </div>
  );
}
function D3Top({ kind, screen }) {
  if (kind === 'dial') {
    return (<>
      <D3Screen label={screen || 'TEMP 0.7'} />
      <div className="d3-row">
        <div className="d3-dial" />
        <div className="d3-keys g2" style={{ flex: 1 }}><div className="d3-key on">⌘</div><div className="d3-key">⏎</div></div>
      </div>
    </>);
  }
  if (kind === 'fader') {
    return (<>
      <D3Screen label={screen || 'MIX · 3CH'} />
      <div className="d3-row">
        <div className="d3-faders"><div className="d3-fader f1"/><div className="d3-fader f2"/><div className="d3-fader f3"/></div>
        <div className="d3-keys g2" style={{ flex: '0 0 64px' }}><div className="d3-key">A</div><div className="d3-key on">B</div></div>
      </div>
    </>);
  }
  if (kind === 'pad') {
    return (<>
      <D3Screen label={screen || 'PEDAL · ON'} />
      <div className="d3-row"><div className="d3-pads"><div className="d3-pad on"/><div className="d3-pad"/><div className="d3-pad"/></div></div>
    </>);
  }
  if (kind === 'mini') {
    return (<>
      <D3Screen label={screen || 'LAUNCH'} />
      <div className="d3-row"><div className="d3-keys g3">
        <div className="d3-key">/</div><div className="d3-key on">⚡</div><div className="d3-key">↹</div>
        <div className="d3-key">⌥</div><div className="d3-key on">⌘</div><div className="d3-key">⏎</div>
      </div></div>
    </>);
  }
  // deck
  return (<>
    <D3Screen label={screen || 'AGENT · READY'} />
    <div className="d3-row">
      <div className="d3-keys g4">
        <div className="d3-key">/</div><div className="d3-key on">⚡</div><div className="d3-key">↹</div><div className="d3-key">⌥</div>
        <div className="d3-key on">⌘</div><div className="d3-key">⏎</div><div className="d3-key">⌦</div><div className="d3-key on">★</div>
      </div>
    </div>
  </>);
}
function Device3D({ kind = 'deck', size = 'hero', screen = '' }) {
  const dims = size === 'hero'
    ? { '--w': '300px', '--pad': '18px' }
    : { '--w': '212px', '--pad': '14px' };
  return (
    <div className={'stage3d ' + (size === 'hero' ? 's-hero' : 's-card')}>
      <div className="d3-glow" />
      <div className="lift">
        <div className="dev3d" style={dims}><D3Top kind={kind} screen={screen} /></div>
      </div>
    </div>
  );
}

Object.assign(window, { Device, Device3D, TopBar, Hero, Compat, Catalog, Kits, FooterCTA });
