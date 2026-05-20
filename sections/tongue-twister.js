function initTongueTwister() {
  const container = document.getElementById('section-tongue-twister');

  const words = "The thief threw three thin wrappers there, then three more over there.".split(' ');

  container.innerHTML = `
    <div class="section-label">WARM-UP // CASE FILE ZERO</div>
    <div class="section-title">Tongue Twister</div>

    <div style="
      background: var(--surface);
      border: 1px solid var(--border);
      border-left: 4px solid var(--tape);
      border-radius: var(--radius);
      padding: 32px 28px;
      margin-bottom: 32px;
    ">
      <div style="
        font-family: var(--font-display);
        font-size: clamp(22px, 4.5vw, 42px);
        line-height: 1.5;
        color: var(--chalk);
        letter-spacing: 1px;
        text-align: center;
      " id="tt-text">
        ${words.map((w, i) => {
          const isTH = w.toLowerCase().startsWith('th');
          return `<span
            class="tt-word"
            data-index="${i}"
            style="
              display: inline-block;
              margin: 4px 6px;
              cursor: pointer;
              transition: color 0.15s, transform 0.15s;
              color: ${isTH ? 'var(--tape)' : 'var(--chalk)'};
              -webkit-tap-highlight-color: transparent;
            "
          >${w}</span>`;
        }).join(' ')}
      </div>

      <div style="text-align:center; margin-top:20px;">
        <span class="tag">TH words are highlighted in yellow</span>
      </div>
    </div>

    <div style="display:flex; gap:12px; flex-wrap:wrap; justify-content:center; margin-bottom:32px;">
      <button class="lock-btn" id="tt-btn-full" style="background:var(--tape);">
        FULL SPEED
      </button>
      <button class="lock-btn" id="tt-btn-slow" style="background:var(--surface2); color:var(--chalk); border:1px solid var(--border);">
        SLOW MODE
      </button>
      <button class="lock-btn" id="tt-btn-reset" style="background:var(--surface2); color:var(--chalk); border:1px solid var(--border);">
        RESET
      </button>
    </div>

    <div style="
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px;
    ">
      <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:16px; text-align:center;">
        <div style="font-family:var(--font-heading); font-size:11px; letter-spacing:3px; color:var(--chalk-dim); margin-bottom:6px;">FOCUS SOUND</div>
        <div style="font-family:var(--font-display); font-size:28px; color:var(--tape);">TH</div>
        <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); margin-top:4px;">tongue between teeth</div>
      </div>
      <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:16px; text-align:center;">
        <div style="font-family:var(--font-heading); font-size:11px; letter-spacing:3px; color:var(--chalk-dim); margin-bottom:6px;">ROUND TARGET</div>
        <div style="font-family:var(--font-display); font-size:28px; color:var(--chalk);" id="tt-round-count">0</div>
        <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); margin-top:4px;">times completed</div>
      </div>
      <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:16px; text-align:center;">
        <div style="font-family:var(--font-heading); font-size:11px; letter-spacing:3px; color:var(--chalk-dim); margin-bottom:6px;">SPEED</div>
        <div style="font-family:var(--font-display); font-size:28px; color:var(--chalk);" id="tt-speed-label">—</div>
        <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); margin-top:4px;">current mode</div>
      </div>
    </div>
  `;

  let roundCount = 0;
  let highlightTimer = null;
  const wordEls = container.querySelectorAll('.tt-word');
  const roundCountEl = container.getElementById ? container.getElementById('tt-round-count') : document.getElementById('tt-round-count');
  const speedLabel = document.getElementById('tt-speed-label');

  function clearHighlights() {
    wordEls.forEach(el => {
      el.style.transform = 'scale(1)';
      const isTH = el.textContent.toLowerCase().startsWith('th');
      el.style.color = isTH ? 'var(--tape)' : 'var(--chalk)';
      el.style.fontWeight = '';
    });
  }

  function runHighlight(speed) {
    if (highlightTimer) clearTimeout(highlightTimer);
    clearHighlights();
    let i = 0;
    speedLabel.textContent = speed === 'slow' ? 'SLOW' : 'FULL';

    function step() {
      if (i > 0) {
        wordEls[i-1].style.transform = 'scale(1)';
        const wasTH = wordEls[i-1].textContent.toLowerCase().startsWith('th');
        wordEls[i-1].style.color = wasTH ? 'var(--tape)' : 'var(--chalk)';
        wordEls[i-1].style.fontWeight = '';
      }
      if (i >= wordEls.length) {
        roundCount++;
        document.getElementById('tt-round-count').textContent = roundCount;
        speedLabel.textContent = 'DONE';
        return;
      }
      wordEls[i].style.color = '#ffffff';
      wordEls[i].style.transform = 'scale(1.15)';
      wordEls[i].style.fontWeight = '700';
      const delay = speed === 'slow' ? 500 : 220;
      i++;
      highlightTimer = setTimeout(step, delay);
    }
    step();
  }

  document.getElementById('tt-btn-full').addEventListener('click', () => runHighlight('full'));
  document.getElementById('tt-btn-slow').addEventListener('click', () => runHighlight('slow'));
  document.getElementById('tt-btn-reset').addEventListener('click', () => {
    if (highlightTimer) clearTimeout(highlightTimer);
    clearHighlights();
    speedLabel.textContent = '—';
  });
}
