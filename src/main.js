import './styles.css';

const arrow = `<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 9h11M10 5l4 4-4 4" /></svg>`;
const logo = `<span class="logo-mark" aria-hidden="true"><svg viewBox="0 0 34 34"><path d="M17 2 31 9.5v15L17 32 3 24.5v-15L17 2Z"/><path d="m9 12 8 13 8-13M12.5 12h9"/></svg></span>`;
const capabilities = [
  ['01', 'See the whole field', 'Fuse identity, endpoint, cloud, and network signals into one live operational picture.'],
  ['02', 'Decide with context', 'Velceron connects every alert to its business impact, so your team knows what matters now.'],
  ['03', 'Act at machine speed', 'Contain threats automatically with guardrails that keep your people in command.'],
];
const integrations = ['CROWDSTRIKE', 'SENTINEL', 'OKTA', 'AWS', 'SPLUNK', 'ZSCALER'];
const proof = [
  ['73%', 'less time spent triaging'],
  ['4.2×', 'faster incident response'],
  ['24/7', 'autonomous protection'],
];

document.querySelector('#root').innerHTML = `
  <main>
    <div class="announcement"><span><i></i> VELCERON // PLATFORM 2.0</span><button data-scroll="contact">REQUEST EARLY ACCESS ${arrow}</button></div>
    <nav class="nav shell" aria-label="Main navigation">
      <button class="brand" data-scroll="top" aria-label="Velceron home">${logo}<span>VELCERON</span></button>
      <div class="nav-links"><button data-scroll="platform">Platform</button><button data-scroll="capabilities">Capabilities</button><button data-scroll="company">Company</button><button class="nav-cta" data-scroll="contact">Get a briefing ${arrow}</button></div>
      <button class="menu" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span></button>
    </nav>

    <section class="hero shell" id="top">
      <div class="hero-copy">
        <div class="eyebrow"><i></i> AUTONOMOUS SECURITY OPERATIONS</div>
        <h1>Move first.<br><em>Stay ahead.</em></h1>
        <p>Velceron turns fragmented security signals into decisive action—giving modern teams the speed, clarity, and control to stop threats before they become incidents.</p>
        <div class="hero-actions"><button class="button acid" data-scroll="contact">See Velceron in action ${arrow}</button><button class="text-button" data-scroll="platform">Explore the platform <span>↓</span></button></div>
      </div>
      <div class="hero-visual" aria-label="Live Velceron threat intelligence visualization">
        <div class="radar"><div class="sweep"></div><i class="node n1"></i><i class="node n2"></i><i class="node n3"></i><i class="node n4"></i><span class="trace t1"></span><span class="trace t2"></span></div>
        <div class="intel-card"><div class="intel-head"><span>LIVE THREAT GRAPH</span><b><i></i> ACTIVE</b></div><div class="threat-row"><div><small>RISK SCORE</small><strong>08</strong><span>/100</span></div><div class="pulse"><i></i><i></i><i></i><i></i><i></i></div></div><div class="event"><span>✓</span><div><small>RESPONSE COMPLETED</small><b>Credential replay blocked</b></div><time>0.42s</time></div></div>
        <div class="signal"><span>VX-07</span><p><b>Behavioral anomaly</b><small>Identity layer · contained</small></p></div>
      </div>
      <div class="trust"><span>BUILT TO WORK WITH YOUR STACK</span><div>${integrations.map(x => `<b>${x}</b>`).join('')}</div></div>
    </section>

    <section class="platform" id="platform"><div class="shell platform-grid">
      <div><div class="section-label">THE OPERATING LAYER</div><h2>Your security tools see events.<br><em>Velceron sees the story.</em></h2></div>
      <div><p>Security teams don't need another dashboard. They need a system that can connect the evidence, understand the stakes, and take the right action—instantly.</p><button class="inline-link" data-scroll="capabilities">How the platform works ${arrow}</button></div>
    </div><div class="shell proof">${proof.map(x => `<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join('')}</div></section>

    <section class="capabilities shell" id="capabilities">
      <div class="section-top"><div class="section-label">ONE SYSTEM. TOTAL COMMAND.</div><span>01 — 03</span></div>
      <div class="capability-grid">${capabilities.map((c, i) => `<article><div class="cap-number">${c[0]}</div><div class="cap-art art-${i + 1}"><span></span><span></span><span></span><i></i></div><h3>${c[1]}</h3><p>${c[2]}</p><button data-scroll="contact" aria-label="Learn more about ${c[1]}">${arrow}</button></article>`).join('')}</div>
    </section>

    <section class="command" id="company"><div class="shell command-grid">
      <div class="command-copy"><div class="section-label light">HUMAN-GUIDED AUTONOMY</div><h2>Built for speed.<br><em>Designed for trust.</em></h2><p>Velceron automates the repetitive and accelerates the critical. Every action is explainable, reversible, and governed by the boundaries your team sets.</p><ul><li><span>01</span>Evidence behind every decision</li><li><span>02</span>Approval gates for critical actions</li><li><span>03</span>A complete, audit-ready record</li></ul></div>
      <div class="command-ui"><div class="ui-bar"><span>VELCERON / RESPONSE</span><b>INC-2048</b></div><div class="ui-map"><span class="path p1"></span><span class="path p2"></span><i class="dot d1"></i><i class="dot d2"></i><i class="dot d3"></i><div class="core">V</div></div><div class="ui-action"><span>THREAT CONTAINED</span><strong>Impossible travel + token replay</strong><div><small>7 signals correlated</small><b>Resolved in 4.8s</b></div></div></div>
    </div></section>

    <section class="manifesto"><div class="shell"><span>OUR MISSION</span><blockquote>“Give defenders the advantage—<em>before the first move is made.</em>”</blockquote><p>SECURITY FOR WHAT'S NEXT.</p></div></section>

    <section class="contact" id="contact"><div class="shell contact-grid"><div><div class="section-label light">START A CONVERSATION</div><h2>See what your team<br>can do <em>at speed.</em></h2><p>Tell us about your environment. We'll show you how Velceron can help your security operation move from reactive to ready.</p></div><form><label>NAME<input required name="name" autocomplete="name" placeholder="Your name"></label><label>WORK EMAIL<input required name="email" autocomplete="email" type="email" placeholder="you@company.com"></label><label>TEAM SIZE<select required name="team-size"><option value="" selected disabled>Select team size</option><option>1–10</option><option>11–50</option><option>51–250</option><option>251+</option></select></label><button class="button acid" type="submit">Request a briefing ${arrow}</button><small>By submitting, you agree to our privacy policy.</small></form></div></section>

    <footer class="footer"><div class="shell"><div class="footer-main"><div class="brand footer-brand">${logo}<span>VELCERON</span></div><p>Move first.<br>Stay ahead.</p><div><span>EXPLORE</span><button data-scroll="platform">Platform</button><button data-scroll="capabilities">Capabilities</button><button data-scroll="company">Company</button></div><div><span>CONNECT</span><a href="mailto:hello@velceron.com">hello@velceron.com</a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div><div class="footer-bottom"><span>© 2026 Velceron Systems, Inc.</span><div><a href="#privacy">Privacy</a><a href="#terms">Terms</a><span>NEW YORK / LONDON</span></div></div></div></footer>
  </main>`;

const nav = document.querySelector('.nav-links');
const menu = document.querySelector('.menu');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('[data-scroll]').forEach((button) => button.addEventListener('click', () => {
  document.getElementById(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });
  nav.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}));
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  event.currentTarget.outerHTML = '<div class="thanks"><span>✓</span><small>REQUEST RECEIVED</small><h3>Your briefing is being prepared.</h3><p>Our team will be in touch within one business day.</p></div>';
});
