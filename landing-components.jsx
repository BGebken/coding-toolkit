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
    ? { eye: 'Spring drop · Maker kits', h: ['Build something ', 'real.'], lede: 'From first LED to first robot — plug-and-play hardware that turns coding into something you can light up, hold, and show off.' }
    : { eye: 'New · 2026 classroom lineup', h: ['Coding you can ', 'hold.'], lede: 'Real hardware kits for middle-school coders. Plug a board into your laptop, blink an LED, roll a robot — in your first session.' };
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
          <div className="stat"><div className="n grad-text">6</div><div className="l">boards in lineup</div></div>
          <div className="stat"><div className="n grad-text">5min</div><div className="l">to first project</div></div>
          <div className="stat"><div className="n grad-text">$15+</div><div className="l">starter pricing</div></div>
        </div>
      </div>
      <div className="hero-stage">
        <div className="halo" />
        <Device3D kind="deck" size="hero" screen={theme === 'theme-rainbow' ? 'PIN13 · HI' : 'LED · BLINK'} />
        <div className="floatcard fc1"><span className="led" />sensors · on</div>
        <div className="floatcard fc2"><span className="led" />robot · ready</div>
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
          {['Scratch', 'MakeCode', 'Python', 'Tinkercad', 'Code.org', 'Snap!', 'Mu Editor'].map(x => <span className="chip" key={x}>{x}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ---------- PRODUCTS ---------- */
const PRODUCTS = [
  { name: 'Arduino Uno Starter Kit', kind: 'deck', image: './images/arduino-uno.jpg', desc: 'The classic maker board with breadboard, wires, LEDs & sensors — 15 build-along projects.', tags: ['USB-B', 'Block + C++', '15 projects'], price: '$110', tag: 'Best seller', screen: 'PIN13 · HI' },
  { name: 'Sphero BOLT', kind: 'dial', image: './images/sphero-bolt.jpg', desc: 'A programmable robot ball with LED matrix, sensors and Bluetooth. Code it in blocks or JavaScript.', tags: ['Bluetooth', 'Robot', 'Scratch + JS'], price: '$150', tag: 'Robot pick', screen: 'ROLL · GO' },
  { name: 'micro:bit V2', kind: 'mini', image: './images/microbit-v2.jpg', desc: 'Pocket-sized board with 25 LEDs, buttons, mic, speaker and motion sensors. Block code, Python or both.', tags: ['25 LEDs', 'Blocks + Python', 'Sensors'], price: '$18', tag: 'Classroom fav', screen: 'HEART' },
  { name: 'Adafruit Circuit Playground Express', kind: 'fader', image: './images/circuit-playground-express.jpg', desc: 'A round all-in-one board with lights, sound, motion and touch — no wiring needed to start.', tags: ['10 NeoPixels', 'MakeCode + Python', 'Touch'], price: '$25', tag: 'Wearable', screen: 'TONE · 440' },
  { name: 'Makey Makey', kind: 'pad', image: './images/makey-makey.jpg', desc: 'Turn bananas, foil, or anything conductive into a keyboard. Pure invention magic, no coding needed.', tags: ['Plug & play', 'Web apps', 'No code'], price: '$50', tag: 'Most fun', screen: 'SPACE' },
  { name: 'Raspberry Pi 5 (4GB)', kind: 'deck', image: './images/raspberry-pi-5.jpg', desc: 'A tiny full Linux computer. Step up to Python, web servers, AI projects and game emulation.', tags: ['Linux', '4GB RAM', 'HDMI 4K'], price: '$80', tag: 'Power up', screen: 'PI · BOOT' },
  // Concept / notional hardware — AI-coding ideas, not real products
  { name: 'Prompt Dial Nano', kind: 'dial', size: 'sm', desc: 'Rapid model-tuning of temperature, top-p and top-k. A pocket rotary that hot-swaps sampling params the second your model starts to drift.', tags: ['USB-C', 'Haptic feedback', 'Pocketable'], price: 'Concept', tag: 'Notional', screen: 'TEMP · 0.7', concept: true },
  { name: 'Context Deck', kind: 'deck', size: 'md', desc: 'Eight pinnable context bundles — one key per project, persona or memory pack. Slam a key to swap the LLM\'s entire working context in real time.', tags: ['USB-C', '8 keys', 'OLED labels'], price: 'Concept', tag: 'Notional', screen: 'CTX · 03', concept: true },
  { name: 'Agent Mix Console', kind: 'fader', size: 'lg', desc: 'Three motorized faders to live-balance model weights across a multi-agent run. Mute, solo and automate each agent like channels on a mixing board.', tags: ['USB-C', 'Motorized', 'MIDI out'], price: 'Concept', tag: 'Notional', screen: 'MIX · 3CH', concept: true },
];
function ProductCard({ p }) {
  return (
    <article className={'pcard' + (p.concept ? ' is-concept' : '')}>
      <div className="dev-wrap">
        {p.tag && <span className={'ptag' + (p.concept ? ' concept' : '')}>{p.tag}</span>}
        {p.image
          ? <img className="prod-img" src={p.image} alt={p.name} loading="lazy" />
          : <Device3D kind={p.kind} size={p.size || 'card'} screen={p.screen} />}
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
  const cats = ['All', 'Boards', 'Robots', 'Wearables', 'Beginner', 'Under $50'];
  const [active, setActive] = useState('All');
  return (
    <section className="wrap section" id="catalog">
      <div className="sec-head">
        <div>
          <h2>The catalog</h2>
          <p>Plug-and-play hardware kits — pick a board, follow a project, ship your first program.</p>
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
  { kicker: 'Starter', name: 'First Spark', price: '$35', sub: '/ one-time', items: ['micro:bit V2 board', 'USB cable + battery pack', '10-project beginner booklet', 'Classroom-ready presets'], feature: false },
  { kicker: 'Most popular', name: 'Studio', price: '$129', sub: '/ one-time', items: ['micro:bit V2 + Makey Makey', 'Sphero indi (line-following robot)', 'Coding playground curriculum', 'Carrying case + cable kit'], feature: true },
  { kicker: 'Power', name: 'Maker Bench', price: '$249', sub: '/ one-time', items: ['Arduino Uno + breadboard set', 'Circuit Playground Express', 'Wire kit, sensors, motors', 'Project guides + classroom support'], feature: false },
];
function Kits() {
  return (
    <section className="kits" id="kits">
      <div className="wrap section">
        <div className="sec-head">
          <div>
            <h2>Student kits</h2>
            <p>Curated bundles with classroom-friendly pricing — everything you need, in one box.</p>
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
                Classroom-friendly pricing
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
        <h2>Bring your code to <span className="grad-text">life</span>.</h2>
        <p>Join the kit drop list — new projects monthly, classroom resources free for teachers.</p>
        <form className="signup" onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="you@school.edu" aria-label="Email" />
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
  const DIMS = {
    hero: { '--w': '300px', '--pad': '18px' },
    lg:   { '--w': '236px', '--pad': '16px' },
    md:   { '--w': '212px', '--pad': '14px' },
    card: { '--w': '212px', '--pad': '14px' },
    sm:   { '--w': '168px', '--pad': '11px' },
  };
  const dims = DIMS[size] || DIMS.card;
  const stageClass = size === 'hero' ? 's-hero' : 's-card';
  return (
    <div className={'stage3d ' + stageClass}>
      <div className="d3-glow" />
      <div className="lift">
        <div className="dev3d" style={dims}><D3Top kind={kind} screen={screen} /></div>
      </div>
    </div>
  );
}

Object.assign(window, { Device, Device3D, TopBar, Hero, Compat, Catalog, Kits, FooterCTA });
