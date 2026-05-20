function initLevel3() {

  const allImages = [
    { img: 'assets/level3/ball-on.png',         word: 'ON',           sentence: 'The ball is ON the box.',                group: 'contact' },
    { img: 'assets/level3/ball-under.png',       word: 'UNDER',        sentence: 'The ball is UNDER the box.',             group: 'vertical' },
    { img: 'assets/level3/ball-nextTo.png',      word: 'NEXT TO',      sentence: 'The ball is NEXT TO the box.',           group: 'proximity' },
    { img: 'assets/level3/ball-in.png',          word: 'IN',           sentence: 'The ball is IN the box.',                group: 'contact' },
    { img: 'assets/level3/ball-above.png',       word: 'ABOVE',        sentence: 'The ball is ABOVE the box.',             group: 'vertical' },
    { img: 'assets/level3/ball-behind.png',      word: 'BEHIND',       sentence: 'The ball is BEHIND the box.',            group: 'depth' },
    { img: 'assets/level3/ball-infrontOf.png',   word: 'IN FRONT OF',  sentence: 'The ball is IN FRONT OF the box.',       group: 'depth' },
    { img: 'assets/level3/ball-near.png',        word: 'NEAR',         sentence: 'The ball is NEAR the box.',              group: 'proximity' },
    { img: 'assets/level3/ball-far.png',         word: 'FAR FROM',     sentence: 'The ball is FAR FROM the box.',          group: 'proximity' },
    { img: 'assets/level3/ball-center.png',      word: 'CENTER',       sentence: 'The ball is in the CENTER.',             group: 'grid' },
    { img: 'assets/level3/ball-offCenter.png',   word: 'OFF-CENTER',   sentence: 'The ball is OFF-CENTER.',                group: 'grid' },
    { img: 'assets/level3/ball-topLeft.png',     word: 'TOP LEFT',     sentence: 'The ball is in the TOP LEFT corner.',    group: 'grid' },
    { img: 'assets/level3/ball-bottomRight.png', word: 'BOTTOM RIGHT', sentence: 'The ball is in the BOTTOM RIGHT corner.', group: 'grid' }
  ];

  function seededShuffle(arr) {
    const seed = Date.now() % 99991;
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor((seed * (i + 3)) % (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function getDistractors(correct, count) {
    const pool = allImages.filter(item =>
      item.word !== correct.word && item.group !== correct.group
    );
    return seededShuffle(pool).slice(0, count);
  }

  function buildQuiz() {
    const shuffled = seededShuffle(allImages);
    return shuffled.slice(0, 10).map(correct => {
      const distractors = getDistractors(correct, 3);
      const options = seededShuffle([correct, ...distractors]);
      return { correct, options };
    });
  }

  let quiz = buildQuiz();
  let currentQ = 0;
  let strikes = 0;
  let totalCorrect = 0;

  renderQuiz();

  function renderQuiz() {
    const el = document.getElementById('l3-quiz');

    if (currentQ >= quiz.length) {
      const pct = Math.round((totalCorrect / quiz.length) * 100);
      const medal = pct === 100 ? 'PERFECT' : pct >= 80 ? 'STRONG WORK' : pct >= 60 ? 'GETTING THERE' : 'KEEP PRACTICING';
      const qualified = totalCorrect >= 8;

      if (qualified) {
        document.getElementById('l3-reward').style.display = 'block';
      }

      el.innerHTML = `
        <div style="background:var(--surface); border:1px solid var(--border); border-left:4px solid var(--tape); border-radius:var(--radius); padding:40px; text-align:center; max-width:500px; margin:0 auto;">
          <div style="font-family:var(--font-heading); font-size:12px; letter-spacing:4px; color:var(--chalk-dim); margin-bottom:12px;">FINAL SCORE</div>
          <div style="font-family:var(--font-display); font-size:72px; color:var(--tape); line-height:1;">${totalCorrect} / ${quiz.length}</div>
          <div style="font-family:var(--font-heading); font-size:14px; letter-spacing:3px; color:var(--chalk); margin-top:12px;">${medal}</div>
          <div style="font-family:var(--font-mono); font-size:12px; color:var(--muted); margin-top:6px;">${pct}% accuracy</div>
          ${qualified
            ? `<div style="font-family:var(--font-mono); font-size:12px; color:var(--success); margin-top:12px; letter-spacing:2px;">REWARD UNLOCKED</div>`
            : `<div style="font-family:var(--font-mono); font-size:12px; color:#e05555; margin-top:12px; letter-spacing:2px;">NEED 8/10 TO UNLOCK REWARD</div>`
          }
          <button onclick="restartL3Quiz()" class="lock-btn" style="margin-top:28px;">AGAIN?</button>
        </div>
      `;
      return;
    }

    const q = quiz[currentQ];
    const correct = q.correct;
    const highlighted = correct.sentence.replace(
      correct.word,
      `<span style="color:var(--tape); font-family:var(--font-display);">${correct.word}</span>`
    );

    el.innerHTML = `
      <div style="max-width:700px; margin:0 auto;">

        <div style="display:flex; justify-content:space-between; align-items:center; font-family:var(--font-mono); font-size:12px; color:var(--muted); letter-spacing:2px; margin-bottom:20px;">
          <span>QUESTION ${currentQ + 1} OF ${quiz.length}</span>
          <span>
            ${[...Array(2)].map((_, i) =>
              `<span style="color:${i < strikes ? '#e05555' : 'var(--muted)'}; margin-left:6px;">&#9679;</span>`
            ).join('')}
            &nbsp;STRIKES
          </span>
        </div>

        <div style="background:var(--surface); border:1px solid var(--border); border-left:4px solid var(--tape); border-radius:var(--radius); padding:24px; text-align:center; margin-bottom:28px;">
          <div style="font-family:var(--font-mono); font-size:20px; color:var(--chalk); line-height:1.6;">${highlighted}</div>
        </div>

        <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:12px; margin-bottom:20px;">
          ${q.options.map(opt => `
            <div onclick="handleL3Answer('${opt.word}')" data-value="${opt.word}"
              class="l3-opt"
              style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; cursor:pointer; -webkit-tap-highlight-color:transparent;">
              <img src="${opt.img}" style="width:100%; display:block;" />
              <div style="padding:8px; text-align:center; font-family:var(--font-mono); font-size:11px; color:var(--muted); letter-spacing:1px;">TAP TO SELECT</div>
            </div>
          `).join('')}
        </div>

        <div id="l3-feedback" style="font-family:var(--font-mono); font-size:13px; letter-spacing:2px; text-align:center; min-height:20px; margin-bottom:16px;"></div>

        <div style="text-align:center;">
          <button id="l3-next-btn" class="lock-btn" style="opacity:0.3; pointer-events:none;" onclick="advanceL3Quiz()">NEXT QUESTION</button>
        </div>

      </div>
    `;
  }

  window.handleL3Answer = function(selected) {
    const q = quiz[currentQ];
    const correct = q.correct.word;
    const feedback = document.getElementById('l3-feedback');
    const nextBtn = document.getElementById('l3-next-btn');
    const options = document.querySelectorAll('.l3-opt');

    if (selected === correct) {
      totalCorrect++;
      feedback.textContent = 'CORRECT';
      feedback.style.color = 'var(--success)';
      options.forEach(opt => {
        opt.style.pointerEvents = 'none';
        if (opt.dataset.value === correct) {
          opt.style.outline = '3px solid var(--success)';
          opt.style.borderColor = 'var(--success)';
        }
      });
      nextBtn.style.opacity = '1';
      nextBtn.style.pointerEvents = 'auto';
      strikes = 0;
    } else {
      strikes++;
      feedback.textContent = 'TRY AGAIN';
      feedback.style.color = '#e05555';
      const wrongOpt = [...options].find(o => o.dataset.value === selected);
      if (wrongOpt) {
        wrongOpt.style.outline = '3px solid #e05555';
        wrongOpt.style.borderColor = '#e05555';
        wrongOpt.style.pointerEvents = 'none';
        wrongOpt.style.animation = 'shake 0.35s ease';
        setTimeout(() => { wrongOpt.style.animation = ''; }, 400);
      }
      if (strikes >= 2) {
        feedback.textContent = 'ANSWER: ' + correct;
        feedback.style.color = 'var(--tape)';
        options.forEach(opt => {
          opt.style.pointerEvents = 'none';
          if (opt.dataset.value === correct) {
            opt.style.outline = '3px solid var(--tape)';
            opt.style.borderColor = 'var(--tape)';
          }
        });
        nextBtn.style.opacity = '1';
        nextBtn.style.pointerEvents = 'auto';
        strikes = 0;
      }
    }
  };

  window.advanceL3Quiz = function() {
    currentQ++;
    strikes = 0;
    renderQuiz();
  };

  window.restartL3Quiz = function() {
    currentQ = 0;
    strikes = 0;
    totalCorrect = 0;
    document.getElementById('l3-reward').style.display = 'none';
    quiz = buildQuiz();
    renderQuiz();
  };
}