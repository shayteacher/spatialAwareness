const GradingSystem = (() => {
  const scores = {};

  function getScore(key) {
    return scores[key] || 0;
  }

  function renderGrading(containerId, roundKey, labelText, onSubmit) {
    const container = document.getElementById(containerId);
    let selected = 0;

    container.innerHTML = `
      <div style="text-align:center; padding: 16px 0;">
        <div class="section-label" style="margin-bottom:12px;">${labelText}</div>
        <div class="star-row" id="stars-${roundKey}">
          ${[1,2,3,4,5].map(n => `
            <span class="star" data-val="${n}" id="star-${roundKey}-${n}">★</span>
          `).join('')}
        </div>
        <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); margin: 8px 0 16px;" id="grade-label-${roundKey}">
          TAP A STAR TO RATE
        </div>
        <button class="lock-btn" id="grade-submit-${roundKey}" style="opacity:0.4; pointer-events:none;"
          onclick="GradingSystem.submitGrade('${roundKey}', ${JSON.stringify(onSubmit ? 'cb' : null)})">
          SUBMIT GRADE
        </button>
      </div>
    `;

    [1,2,3,4,5].forEach(n => {
      document.getElementById(`star-${roundKey}-${n}`)
        .addEventListener('click', () => {
          selected = n;
          scores[roundKey] = n;
          updateStarDisplay(roundKey, n);
          const lbl = document.getElementById(`grade-label-${roundKey}`);
          const labels = ['','NEEDS WORK','GETTING THERE','GOOD EFFORT','STRONG WORK','PERFECT!'];
          lbl.textContent = labels[n];
          const btn = document.getElementById(`grade-submit-${roundKey}`);
          btn.style.opacity = '1';
          btn.style.pointerEvents = 'auto';
          btn.onclick = () => {
            if (onSubmit) onSubmit(n);
            showScoreBadge(containerId, roundKey);
          };
        });
    });
  }

  function updateStarDisplay(roundKey, value) {
    [1,2,3,4,5].forEach(n => {
      const el = document.getElementById(`star-${roundKey}-${n}`);
      if (el) el.classList.toggle('active', n <= value);
    });
  }

  function showScoreBadge(containerId, roundKey) {
    const val = scores[roundKey] || 0;
    const container = document.getElementById(containerId);
    container.innerHTML = `
      <div style="text-align:center; padding:16px;">
        <div style="font-family:var(--font-display); font-size:48px; color:var(--tape);">${val} / 5</div>
        <div style="font-family:var(--font-heading); font-size:12px; letter-spacing:3px; color:var(--chalk-dim); margin-top:6px;">GRADE LOCKED IN</div>
      </div>
    `;
  }

  function getTotalSummary() {
    const keys = Object.keys(scores);
    const total = keys.reduce((sum, k) => sum + scores[k], 0);
    const possible = keys.length * 5;
    return { total, possible, keys };
  }

  function renderSummary(containerId) {
    const { total, possible, keys } = getTotalSummary();
    const container = document.getElementById(containerId);
    if (keys.length === 0) {
      container.innerHTML = `<p style="color:var(--muted); font-family:var(--font-mono); font-size:13px;">No grades recorded yet.</p>`;
      return;
    }
    const rows = keys.map(k => `
      <tr>
        <td style="padding:6px 12px; color:var(--chalk-dim); font-size:13px;">${k}</td>
        <td style="padding:6px 12px; color:var(--tape); font-weight:600;">${scores[k]} / 5</td>
      </tr>
    `).join('');
    container.innerHTML = `
      <table style="width:100%; border-collapse:collapse; font-family:var(--font-mono);">
        ${rows}
        <tr style="border-top:1px solid var(--border);">
          <td style="padding:10px 12px; font-size:15px; color:var(--chalk);">TOTAL</td>
          <td style="padding:10px 12px; font-size:20px; color:var(--tape); font-family:var(--font-display);">${total} / ${possible}</td>
        </tr>
      </table>
    `;
  }

  return { renderGrading, getTotalSummary, renderSummary, getScore };
})();
