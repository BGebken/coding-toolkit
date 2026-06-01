// ai-workstation-components.jsx — components for the AI Workstation kit detail page

/* ---------- HERO ---------- */
function KitHero() {
  return (
    <section className="wrap kit-hero">
      <div>
        <a className="back-link" href="index.html#kits">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M11 18l-6-6 6-6"/></svg>
          Back to all kits
        </a>
        <span className="eyebrow"><span className="pulse" />Top tier · Workstation kit</span>
        <h1>Your AI coding rig, <span className="grad-text">in three pieces.</span></h1>
        <p className="lede">Raspberry Pi at the brain. A 10" touchscreen at your sightline. A mixer-style console at your fingertips. Three boxes — one unified workflow for writing code with AI faster than you ever could on a laptop alone.</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#cta">Get the AI Workstation — $599
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="btn btn-ghost" href="#flow">See how it works</a>
        </div>
        <div className="stat-row">
          <div className="stat"><div className="n grad-text">3</div><div className="l">pieces, one rig</div></div>
          <div className="stat"><div className="n grad-text">24</div><div className="l">live AI controls</div></div>
          <div className="stat"><div className="n grad-text">0</div><div className="l">alt-tabs needed</div></div>
        </div>
      </div>
      <div className="kit-hero-stack">
        <div className="halo" />
        <img className="stack-img stack-img-1" src="./images/codedesk-touch.jpg" alt="CodeDesk Touch 10 inch display" />
        <img className="stack-img stack-img-2" src="./images/raspberry-pi-5.jpg" alt="Raspberry Pi 5" />
        <img className="stack-img stack-img-3" src="./images/mix-console.jpg" alt="AI Mix Console" />
      </div>
    </section>
  );
}

/* ---------- SYSTEM FLOW ---------- */
function KitFlow() {
  return (
    <section className="wrap section" id="flow">
      <div className="sec-head sec-head-center">
        <div>
          <h2>How it works</h2>
          <p>Three boxes, one keyboard, one brain — orchestrated so every AI model setting is a knob, every context is a touch, every output is on the screen in front of you.</p>
        </div>
      </div>
      <div className="flow">
        <div className="flow-node">
          <img src="./images/mix-console.jpg" alt="AI Mix Console" />
          <div className="flow-label">
            <span className="flow-role">Control surface</span>
            <h4>AI Mix Console</h4>
            <p>Knobs &amp; faders for model tuning. Keys for prompt presets.</p>
          </div>
        </div>
        <div className="flow-arrow" aria-hidden="true">
          <span>USB-C</span>
          <svg viewBox="0 0 80 14" width="80" height="14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 7h70M66 2l6 5-6 5"/></svg>
        </div>
        <div className="flow-node flow-hub">
          <img src="./images/raspberry-pi-5.jpg" alt="Raspberry Pi 5" />
          <div className="flow-label">
            <span className="flow-role">The brain</span>
            <h4>Raspberry Pi 5</h4>
            <p>Runs your IDE, hosts local LLMs, dispatches agents, syncs to the cloud.</p>
          </div>
        </div>
        <div className="flow-arrow" aria-hidden="true">
          <span>HDMI + USB-C</span>
          <svg viewBox="0 0 80 14" width="80" height="14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2 7h70M66 2l6 5-6 5"/></svg>
        </div>
        <div className="flow-node">
          <img src="./images/codedesk-touch.jpg" alt="CodeDesk Touch 10 inch display" />
          <div className="flow-label">
            <span className="flow-role">The sightline</span>
            <h4>CodeDesk Touch 10"</h4>
            <p>Your editor, panel-of-agents, live model output. Tap to swap.</p>
          </div>
        </div>
      </div>
      <p className="flow-foot">A 65W USB-C power supply feeds the Pi, which busses power and signal out to the mixer and the display. Your laptop never has to leave the bag.</p>
    </section>
  );
}

/* ---------- COMPONENT SPOTLIGHTS ---------- */
const COMPONENTS = [
  {
    name: 'Raspberry Pi 5 (4GB)',
    role: 'The brain',
    img: './images/raspberry-pi-5.jpg',
    body: 'A full Linux computer the size of a card. Pre-installed with VS Code, a local LLM runner, and the AI-coding profile pack — boot it once and the whole rig comes online together.',
    bullets: ['4GB RAM, USB-C power', 'Pre-installed AI-coding profiles', 'Runs local + cloud models side-by-side', 'Sync your work to GitHub from the dock']
  },
  {
    name: 'CodeDesk Touch 10"',
    role: 'The sightline',
    img: './images/codedesk-touch.jpg',
    body: 'A 10.1" multitouch display at your eye-line. Mirror your laptop, run a dedicated editor on the Pi, or split it into agent panels, prompt history, and live output streams.',
    bullets: ['10.1" multitouch, USB-C powered', 'Mounts to the magnetic desk dock', 'Three live layouts pre-mapped: IDE, Agents, Output', 'Works as a second screen for any laptop too']
  },
  {
    name: 'AI Mix Console',
    role: 'The control surface',
    img: './images/mix-console.jpg',
    body: 'Eight faders, eight rotary knobs, sixteen programmable keys — pre-mapped to the AI controls students actually use. Twist a knob to tune temperature. Push a fader to mute an agent mid-run. Slam a key to swap a context.',
    bullets: ['8 faders + 8 knobs + 16 keys', 'Per-app profiles (Cursor, VS Code, Claude Code)', 'Knobs pre-mapped to temp / top-p / model blend', 'OLED labels on every key — never guess']
  }
];
function KitComponents() {
  return (
    <section className="wrap section" id="components">
      <div className="sec-head">
        <div>
          <h2>The three pieces</h2>
          <p>Each one earns its place in the kit. None of them work as well alone.</p>
        </div>
      </div>
      <div className="kit-comp-grid">
        {COMPONENTS.map(c => (
          <article key={c.name} className="kit-comp">
            <div className="kit-comp-img"><img src={c.img} alt={c.name} loading="lazy" /></div>
            <span className="flow-role">{c.role}</span>
            <h3>{c.name}</h3>
            <p>{c.body}</p>
            <ul>{c.bullets.map(b => <li key={b}>{b}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- WORKFLOW SCENARIOS ---------- */
const WORKFLOWS = [
  {
    kicker: 'Mid-generation',
    title: 'Tune the model while it\'s running',
    body: 'Watching the model overthink? Twist the temperature knob down. The fader bar on the touchscreen shifts in real time. No menu. No restart. No lost context.'
  },
  {
    kicker: 'Context switching',
    title: 'Swap projects with one touch',
    body: 'Working on three things at once — your Python game, an essay outline, your robotics class? Tap a tile on the CodeDesk to swap the LLM\'s active context bundle. Everything reloads in under a second.'
  },
  {
    kicker: 'Multi-agent runs',
    title: 'Conduct your agents like a mixing board',
    body: 'Running four agents in parallel? Push a fader down to mute one. Slide another up to weight it harder. Solo a single one to focus its output. Each fader is one agent — see who\'s contributing what.'
  },
  {
    kicker: 'Hands on keys',
    title: 'Never alt-tab again',
    body: 'Every AI control is on the console at your right hand. Your typing hand stays on the keyboard. The whole rig is designed so you spend more time writing code and less time clicking through menus.'
  }
];
function KitWorkflows() {
  return (
    <section className="kits" id="workflows">
      <div className="wrap section">
        <div className="sec-head">
          <div>
            <h2>A day at the desk</h2>
            <p>Four moments that feel different on this rig than on a laptop alone.</p>
          </div>
        </div>
        <div className="workflow-grid">
          {WORKFLOWS.map(w => (
            <div key={w.title} className="workflow">
              <span className="kicker">{w.kicker}</span>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHAT'S IN THE BOX ---------- */
function KitInBox() {
  const items = [
    'Raspberry Pi 5 (4GB) + official power supply',
    'CodeDesk Touch 10" multitouch display',
    'AI Mix Console (8 faders + 8 knobs + 16 keys)',
    'Magnetic desk dock + cable-management kit',
    'Pre-mapped knob profiles: temperature, top-p, model blend',
    '3× USB-C cables, 1× HDMI cable',
    '32GB SD card with the Coder Addons AI image flashed',
    'Quick-start booklet + classroom curriculum link'
  ];
  return (
    <section className="wrap section" id="in-the-box">
      <div className="kit-box">
        <div>
          <h2>What's in the box</h2>
          <p className="lede">Open the lid, plug in one cable, log in once — the whole rig comes up pre-paired and ready to code.</p>
        </div>
        <ul className="kit-box-list">
          {items.map(i => <li key={i}>{i}</li>)}
        </ul>
      </div>
    </section>
  );
}

/* ---------- FINAL CTA ---------- */
function KitCTA() {
  return (
    <section className="wrap cta" id="cta">
      <span className="eyebrow"><span className="pulse" />$599 · one-time · ships in 5 days</span>
      <h2>Ready to <span className="grad-text">code with hardware?</span></h2>
      <p>The AI Workstation kit is the top tier of the Coder Addons lineup. It pays off the longer you use it: every alt-tab you don't make, every menu you don't dig through, every model you tune in seconds instead of minutes.</p>
      <div className="hero-cta cta-buttons">
        <a className="btn btn-primary" href="#">Add to kit — $599
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
        <a className="btn btn-ghost" href="index.html#kits">Compare with smaller kits</a>
      </div>
    </section>
  );
}

Object.assign(window, { KitHero, KitFlow, KitComponents, KitWorkflows, KitInBox, KitCTA });
