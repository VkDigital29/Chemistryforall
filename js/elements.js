/* Interactive periodic table UI. Data comes from elements-data.js (ELEMENTS). */
const table = document.getElementById('periodicTable');
const legend = document.getElementById('legend');
const searchInput = document.getElementById('elementSearch');
const searchCount = document.getElementById('searchCount');
const modal = document.getElementById('elementModal');
const byN = new Map(ELEMENTS.map(e => [e.n, e]));
const CATEGORIES = ['nonmetal','alkali','alkaline','transition','post-transition','metalloid','halogen','noble-gas','lanthanide','actinide','unknown'];
const catLabel = c => c.replace('-', ' ');
let activeCat = null;
let currentN = null;

/* ---------- legend (click to filter by category) ---------- */
CATEGORIES.forEach(c => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = c;
  b.dataset.cat = c;
  b.innerHTML = `<i class="dot ${c}"></i>${catLabel(c)}`;
  b.onclick = () => {
    activeCat = activeCat === c ? null : c;
    legend.querySelectorAll('button').forEach(x => x.classList.toggle('active', x.dataset.cat === activeCat));
    applyFilter();
  };
  legend.appendChild(b);
});

/* ---------- table ---------- */
ELEMENTS.forEach(e => {
  const el = document.createElement('button');
  el.type = 'button';
  el.className = `element ${e.cat}`;
  el.style.gridColumn = e.pos.c;
  el.style.gridRow = e.pos.r;
  el.dataset.n = e.n;
  el.setAttribute('aria-label', `${e.name}, atomic number ${e.n}`);
  el.innerHTML = `<small>${e.n}</small><strong>${e.s}</strong><span>${e.name}</span>`;
  el.onclick = () => openElement(e);
  table.appendChild(el);
});

/* placeholders in group 3 and labels for the f-block rows */
[[6,'57–71','lanthanide'],[7,'89–103','actinide']].forEach(([row, text, cat]) => {
  const p = document.createElement('div');
  p.className = `placeholder ${cat}`;
  p.style.gridColumn = 3;
  p.style.gridRow = row;
  p.textContent = text;
  p.setAttribute('aria-hidden', 'true');
  table.appendChild(p);
});
[['Lanthanides',9],['Actinides',10]].forEach(([label, row]) => {
  const b = document.createElement('div');
  b.className = 'series-label';
  b.style.gridColumn = '1 / span 2';
  b.style.gridRow = row;
  b.textContent = label;
  b.setAttribute('aria-hidden', 'true');
  table.appendChild(b);
});

/* ---------- search + filter ---------- */
function matches(e, q) {
  if (!q) return true;
  return e.name.toLowerCase().includes(q) ||
         e.s.toLowerCase().startsWith(q) ||
         String(e.n) === q ||
         catLabel(e.cat).includes(q);
}
function applyFilter() {
  const q = searchInput.value.trim().toLowerCase();
  let shown = 0;
  document.querySelectorAll('.element').forEach(b => {
    const e = byN.get(+b.dataset.n);
    const ok = matches(e, q) && (!activeCat || e.cat === activeCat);
    b.classList.toggle('dim', !ok);
    if (ok) shown++;
  });
  searchCount.textContent = (q || activeCat) ? `${shown} of 118 elements` : '';
}
searchInput.addEventListener('input', applyFilter);
searchInput.addEventListener('keydown', ev => {
  if (ev.key !== 'Enter') return;
  const visible = [...document.querySelectorAll('.element:not(.dim)')];
  if (visible.length === 1) openElement(byN.get(+visible[0].dataset.n));
});

/* ---------- modal ---------- */
const fmtTemp = v => v === null ? '—' : `${v.toLocaleString()} °C`;

function openElement(e) {
  currentN = e.n;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  modal.scrollTop = 0;
  const catName = catLabel(e.cat);
  document.getElementById('elementHero').className = `element-hero ${e.cat}`;
  document.getElementById('elementHero').innerHTML =
    `<div class="big-symbol">${e.s}</div><div><span class="eyebrow">ELEMENT ${e.n}</span>` +
    `<h2 id="modalTitle">${e.name}</h2>` +
    `<p>Atomic number ${e.n} · ${e.block}-block · ${catName}${e.predicted ? '<span class="badge">limited / predicted data</span>' : ''}</p></div>`;
  const props = [
    ['Atomic Number', e.n],
    ['Atomic Mass', e.mass + ' u'],
    ['Valency', e.valency],
    ['Electron Configuration', e.cfg],
    ['Shell Configuration', e.shells.join(', ')],
    ['Group', e.group ?? 'f-block'],
    ['Period', e.period],
    ['Block', e.block],
    ['Oxidation States', e.oxid],
    ['Electronegativity', e.en],
    ['Phase at 25 °C', e.phase],
    ['Melting Point', fmtTemp(e.mp)],
    ['Boiling Point', fmtTemp(e.bp)],
    ['Protons', e.protons],
    ['Approx. Neutrons', e.neutrons]
  ];
  document.getElementById('propertyGrid').innerHTML =
    props.map(([k, v]) => `<div class="prop"><label>${k}</label><strong>${v}</strong></div>`).join('');
  document.getElementById('atomDiagram').innerHTML = atomSVG(e);
  document.getElementById('structureText').innerHTML =
    `<div class="fact"><b>Electron configuration</b><span>${e.cfg}</span></div>` +
    `<div class="fact"><b>Electrons per shell</b><span>${e.shells.join(' · ')}</span></div>` +
    `<div class="fact"><b>Outer-shell electrons</b><span>${e.shells[e.shells.length - 1]}</span></div>` +
    `<div class="fact"><b>Atomic identity</b><span>${e.protons} protons define ${e.name}.</span></div>`;
  document.getElementById('hybridization').innerHTML = e.hybrid.length
    ? e.hybrid.map((h, i) =>
        `<div class="hybrid-card"><b>${h}</b><span>${e.geo[i]}</span><div class="hybrid-visual">${hybridSVG(h)}</div></div>`).join('')
    : `<div class="empty-note">Hybridization is a molecular bonding concept. It is not usually discussed for ${e.name}; look at a specific compound or bonding environment instead.</div>`;
  document.getElementById('chemistryInfo').innerHTML =
    `<p>${e.note}</p><div class="tags"><span>Valency: ${e.valency}</span><span>Oxidation: ${e.oxid}</span><span>Block: ${e.block}</span><span>Category: ${catName}</span></div>`;
  document.getElementById('prevBtn').disabled = e.n === 1;
  document.getElementById('nextBtn').disabled = e.n === 118;
}

function atomSVG(e) {
  const n = e.shells.length;
  const step = Math.min(16, 74 / n);
  let rings = '';
  e.shells.forEach((count, i) => {
    const r = 26 + i * step;
    let electrons = '';
    const er = count > 20 ? 2.2 : count > 12 ? 2.8 : 3.6;
    for (let j = 0; j < count; j++) {
      const a = (Math.PI * 2 * j / count) - Math.PI / 2;
      electrons += `<circle cx="${(110 + r * Math.cos(a)).toFixed(1)}" cy="${(110 + r * Math.sin(a)).toFixed(1)}" r="${er}" class="electron"/>`;
    }
    rings += `<circle cx="110" cy="110" r="${r.toFixed(1)}" class="shell"/>${electrons}`;
  });
  return `<svg viewBox="0 0 220 220" class="atom-svg" role="img" aria-label="Bohr model of ${e.name}">${rings}` +
    `<circle cx="110" cy="110" r="20" class="nucleus"/>` +
    `<text x="110" y="108" text-anchor="middle">${e.protons}p⁺</text>` +
    `<text x="110" y="118" text-anchor="middle">${e.neutrons}n⁰</text></svg>`;
}

function hybridSVG(h) {
  const n = {'sp': 2, 'sp²': 3, 'sp³': 4}[h] || 2;
  let out = '';
  for (let i = 0; i < n; i++) {
    const a = n === 2 ? Math.PI * i : (2 * Math.PI * i / n) - Math.PI / 2;
    out += `<line x1="60" y1="60" x2="${(60 + 40 * Math.cos(a)).toFixed(1)}" y2="${(60 + 40 * Math.sin(a)).toFixed(1)}" class="orbital"/>`;
  }
  return `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="8" class="center"/>${out}</svg>`;
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}
function step(d) {
  const e = byN.get(currentN + d);
  if (e) openElement(e);
}
document.getElementById('closeModal').onclick = closeModal;
document.getElementById('prevBtn').onclick = () => step(-1);
document.getElementById('nextBtn').onclick = () => step(1);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => {
  if (modal.hidden) return;
  if (e.key === 'Escape') closeModal();
  else if (e.key === 'ArrowLeft') step(-1);
  else if (e.key === 'ArrowRight') step(1);
});
