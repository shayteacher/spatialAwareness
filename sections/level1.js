function initLevel1() {

  const quizData = [
    {
      img: 'assets/level1/ball-on.png',
      answer: 'ON',
      options: ['ON', 'UNDER', 'ABOVE', 'NEXT TO']
    },
    {
      img: 'assets/level1/ball-under.png',
      answer: 'UNDER',
      options: ['UNDER', 'BELOW', 'IN FRONT OF', 'ON']
    },
    {
      img: 'assets/level1/ball-nextTo.png',
      answer: 'NEXT TO',
      options: ['NEXT TO', 'IN', 'BEHIND', 'NEAR']
    },
    {
      img: 'assets/level1/ball-in.png',
      answer: 'IN',
      options: ['IN', 'ON', 'NEXT TO', 'IN FRONT OF']
    }
  ];

  function seededShuffle(arr) {
    const seed = Date.now() % 9973;
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = (seed * (i + 1)) % (i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let shuffledQuiz = seededShuffle(quizData);
  let currentQ = 0;
  let strikes = 0;
  let totalCorrect = 0;

  if (!document.getElementById('l1-shake-style')) {
    const style = document.createElement('style');
    style.id = 'l1-shake-style';
    style.textContent = `
      @keyframes shake {
        0%   { transform: translateX(0); }
        20%  { transform: translateX(-8px); }
        40%  { transform: translateX(8px); }
        60%  { transform: translateX(-6px); }
        80%  { transform: translateX(6px); }
        100% { transform: translateX(0); }
      }
    `;
    document.head.appendChild(style);
  }

  renderQuiz();

  function renderQuiz() {
    const el = document.getElementById('l1-quiz');

    if (currentQ >= shuffledQuiz.length) {
      const pct = Math.round((totalCorrect / shuffledQuiz.length) * 100);
      const medal = pct === 100 ? 'PERFECT' : pct >= 80 ? 'STRONG WORK' : pct >= 60 ? 'GETTING THERE' : 'KEEP PRACTICING';
      el.innerHTML = `
        <div style="background:var(--surface); border:1px solid var(--border); border-left:4px solid var(--tape); border-radius:var(--radius); padding:40px; text-align:center; max-width:500px; margin:0 auto;">
          <div style="font-family:var(--font-heading); font-size:12px; letter-spacing:4px; color:var(--chalk-dim); margin-bottom:12px;">FINAL SCORE</div>
          <div style="font-family:var(--font-display); font-size:72px; color:var(--tape); line-height:1;">${totalCorrect} / ${shuffledQuiz.length}</div>
          <div style="font-family:var(--font-heading); font-size:14px; letter-spacing:3px; color:var(--chalk); margin-top:12px;">${medal}</div>
          <div style="font-family:var(--font-mono); font-size:12px; color:var(--muted); margin-top:6px;">${pct}% accuracy</div>
          <button onclick="restartL1Quiz()" class="lock-btn" style="margin-top:28px;">AGAIN?</button>
        </div>
      `;
      return;
    }

    const q = shuffledQuiz[currentQ];
    const shuffledOptions = seededShuffle(q.options);

    el.innerHTML = `
      <div style="max-width:700px; margin:0 auto;">

        <div style="display:flex; justify-content:space-between; align-items:center; font-family:var(--font-mono); font-size:12px; color:var(--muted); letter-spacing:2px; margin-bottom:20px;">
          <span>QUESTION ${currentQ + 1} OF ${shuffledQuiz.length}</span>
          <span>
            ${[...Array(2)].map((_, i) =>
              `<span style="color:${i < strikes ? '#e05555' : 'var(--muted)'}; margin-left:6px;">&#9679;</span>`
            ).join('')}
            &nbsp;STRIKES
          </span>
        </div>

        <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; margin-bottom:24px;">
          <img id="l1-quiz-img" src="${q.img}" style="width:100%; display:block;" />
        </div>

        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; margin-bottom:20px;">
          ${shuffledOptions.map(opt => `
            <button class="quiz-opt" data-value="${opt}" onclick="handleL1Answer('${opt}')"
              style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); color:var(--chalk); font-family:var(--font-display); font-size:22px; letter-spacing:1px; padding:20px 12px; cursor:pointer; -webkit-tap-highlight-color:transparent; width:100%;">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div id="l1-feedback" style="font-family:var(--font-mono); font-size:13px; letter-spacing:2px; text-align:center; min-height:20px; margin-bottom:16px;"></div>

        <div style="text-align:center;">
          <button id="l1-next-btn" class="lock-btn" style="opacity:0.3; pointer-events:none;" onclick="advanceL1Quiz()">NEXT QUESTION</button>
        </div>

      </div>
    `;
  }

  window.handleL1Answer = function(selected) {
    const q = shuffledQuiz[currentQ];
    const correct = q.answer;
    const feedback = document.getElementById('l1-feedback');
    const img = document.getElementById('l1-quiz-img');
    const buttons = document.querySelectorAll('.quiz-opt');
    const nextBtn = document.getElementById('l1-next-btn');

    if (selected === correct) {
      totalCorrect++;
      feedback.textContent = 'CORRECT';
      feedback.style.color = 'var(--success)';
      img.style.outline = '3px solid var(--success)';
      buttons.forEach(btn => {
        btn.style.pointerEvents = 'none';
        if (btn.dataset.value === correct) {
          btn.style.borderColor = 'var(--success)';
          btn.style.color = 'var(--success)';
        }
      });
      nextBtn.style.opacity = '1';
      nextBtn.style.pointerEvents = 'auto';
      strikes = 0;
    } else {
      strikes++;
      feedback.textContent = 'TRY AGAIN';
      feedback.style.color = '#e05555';
      const wrongBtn = [...buttons].find(b => b.dataset.value === selected);
      if (wrongBtn) {
        wrongBtn.style.borderColor = '#e05555';
        wrongBtn.style.color = '#e05555';
        wrongBtn.style.pointerEvents = 'none';
        wrongBtn.style.animation = 'shake 0.35s ease';
        setTimeout(() => { wrongBtn.style.animation = ''; }, 400);
      }
      if (strikes >= 2) {
        feedback.textContent = 'ANSWER: ' + correct;
        feedback.style.color = 'var(--tape)';
        buttons.forEach(btn => {
          btn.style.pointerEvents = 'none';
          if (btn.dataset.value === correct) {
            btn.style.borderColor = 'var(--tape)';
            btn.style.color = 'var(--tape)';
          }
        });
        nextBtn.style.opacity = '1';
        nextBtn.style.pointerEvents = 'auto';
        strikes = 0;
      }
    }
  };

  window.advanceL1Quiz = function() {
    currentQ++;
    strikes = 0;
    renderQuiz();
  };

  window.restartL1Quiz = function() {
    currentQ = 0;
    strikes = 0;
    totalCorrect = 0;
    shuffledQuiz = seededShuffle(quizData);
    renderQuiz();
  };
}