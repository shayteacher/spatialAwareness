function initLevel2() {

  const quizData = [
    {
      img: 'assets/level2/ball-above.png',
      answer: 'ABOVE',
      options: ['ABOVE', 'ON', 'BEHIND', 'NEAR']
    },
    {
      img: 'assets/level2/ball-behind.png',
      answer: 'BEHIND',
      options: ['BEHIND', 'IN FRONT OF', 'NEXT TO', 'ABOVE']
    },
    {
      img: 'assets/level2/ball-infrontOf.png',
      answer: 'IN FRONT OF',
      options: ['IN FRONT OF', 'BEHIND', 'NEAR', 'UNDER']
    },
    {
      img: 'assets/level2/ball-near.png',
      answer: 'NEAR',
      options: ['NEAR', 'NEXT TO', 'FAR FROM', 'IN FRONT OF']
    },
    {
      img: 'assets/level2/ball-far.png',
      answer: 'FAR FROM',
      options: ['FAR FROM', 'NEAR', 'BEHIND', 'ABOVE']
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

  renderQuiz();

  function renderQuiz() {
    const el = document.getElementById('l2-quiz');

    if (currentQ >= shuffledQuiz.length) {
      const pct = Math.round((totalCorrect / shuffledQuiz.length) * 100);
      const medal = pct === 100 ? 'PERFECT' : pct >= 80 ? 'STRONG WORK' : pct >= 60 ? 'GETTING THERE' : 'KEEP PRACTICING';
      el.innerHTML = `
        <div style="background:var(--surface); border:1px solid var(--border); border-left:4px solid var(--tape); border-radius:var(--radius); padding:40px; text-align:center; max-width:500px; margin:0 auto;">
          <div style="font-family:var(--font-heading); font-size:12px; letter-spacing:4px; color:var(--chalk-dim); margin-bottom:12px;">FINAL SCORE</div>
          <div style="font-family:var(--font-display); font-size:72px; color:var(--tape); line-height:1;">${totalCorrect} / ${shuffledQuiz.length}</div>
          <div style="font-family:var(--font-heading); font-size:14px; letter-spacing:3px; color:var(--chalk); margin-top:12px;">${medal}</div>
          <div style="font-family:var(--font-mono); font-size:12px; color:var(--muted); margin-top:6px;">${pct}% accuracy</div>
          <button onclick="restartL2Quiz()" class="lock-btn" style="margin-top:28px;">AGAIN?</button>
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
          <img id="l2-quiz-img" src="${q.img}" style="width:100%; display:block;" />
        </div>

        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; margin-bottom:20px;">
          ${shuffledOptions.map(opt => `
            <button class="quiz-opt-l2" data-value="${opt}" onclick="handleL2Answer('${opt}')"
              style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); color:var(--chalk); font-family:var(--font-display); font-size:22px; letter-spacing:1px; padding:20px 12px; cursor:pointer; -webkit-tap-highlight-color:transparent; width:100%;">
              ${opt}
            </button>
          `).join('')}
        </div>

        <div id="l2-feedback" style="font-family:var(--font-mono); font-size:13px; letter-spacing:2px; text-align:center; min-height:20px; margin-bottom:16px;"></div>

        <div style="text-align:center;">
          <button id="l2-next-btn" class="lock-btn" style="opacity:0.3; pointer-events:none;" onclick="advanceL2Quiz()">NEXT QUESTION</button>
        </div>

      </div>
    `;
  }

  window.handleL2Answer = function(selected) {
    const q = shuffledQuiz[currentQ];
    const correct = q.answer;
    const feedback = document.getElementById('l2-feedback');
    const img = document.getElementById('l2-quiz-img');
    const buttons = document.querySelectorAll('.quiz-opt-l2');
    const nextBtn = document.getElementById('l2-next-btn');

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

  window.advanceL2Quiz = function() {
    currentQ++;
    strikes = 0;
    renderQuiz();
  };

  window.restartL2Quiz = function() {
    currentQ = 0;
    strikes = 0;
    totalCorrect = 0;
    shuffledQuiz = seededShuffle(quizData);
    renderQuiz();
  };
}