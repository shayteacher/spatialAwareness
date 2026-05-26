function initLevel35() {
  const app = document.getElementById('l35-app');
  if (!app) return;

  app.innerHTML = `
    <div style="max-width:700px; margin:0 auto;">

      <!-- INTRO -->
      <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); line-height:1.8; margin-bottom:48px;">
        Before you play, read this carefully. There are two roles. Each player sees something different. You need each other to finish the mission.
      </div>

      <!-- EXAMPLE 1 -->
      <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); letter-spacing:3px; margin-bottom:20px;">
        EXAMPLE 1 OF 2
      </div>

      <!-- DESIGNER SCREEN 1 -->
      <div style="font-family:var(--font-display); font-size:22px; color:var(--chalk); letter-spacing:2px; margin-bottom:12px;">
        DESIGNER SCREEN
      </div>
      <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); line-height:1.7; margin-bottom:20px;">
        This is what the Designer sees. A scene number, an empty background, and a ball in the tray. The Designer does NOT see the answer. They are waiting for instructions.
      </div>

      <div style="background:var(--surface); border:2px solid var(--tape); border-radius:var(--radius); padding:20px; margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); letter-spacing:2px;">ROUND 1 OF 3 // DESIGNER</div>
          <div style="font-family:var(--font-display); font-size:22px; color:var(--tape);">SCENE 1</div>
        </div>
        <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); margin-bottom:12px; text-align:center;">
          Tell your partner your scene number. Then listen and place the objects.
        </div>

        <!-- Canvas 1 -->
        <div id="l35-canvas-1" style="position:relative; width:100%; border-radius:var(--radius) var(--radius) 0 0; overflow:hidden; border:1px solid var(--border); border-bottom:none;">
          <img src="assets/level3.5/level3.5-practice-background.png" style="width:100%; display:block;" />
        </div>

        <!-- Tray 1 -->
        <div id="l35-tray-1" style="
          display:flex; gap:16px; align-items:center; justify-content:center;
          padding:20px 16px; background:var(--surface2);
          border:1px solid var(--border); border-top:2px solid var(--tape);
          border-radius:0 0 var(--radius) var(--radius); min-height:100px;
        ">
          <div class="l35-sprite-item" data-index="0" data-tray="1" style="
            width:80px; height:80px; flex-shrink:0; cursor:grab;
            touch-action:none; display:flex; align-items:center; justify-content:center;
          ">
            <img src="assets/level3.5/Ball-a.svg" style="width:100%; height:100%; object-fit:contain; pointer-events:none;" />
          </div>
        </div>

        <div style="text-align:center; margin-top:10px;">
          <button onclick="resetCanvas35('1')" style="
            background:transparent; border:1px solid var(--border);
            border-radius:var(--radius); color:var(--muted);
            font-family:var(--font-mono); font-size:11px;
            letter-spacing:2px; padding:8px 20px; cursor:pointer;
          ">RESET</button>
        </div>
      </div>

      <!-- Designer tips -->
      <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:20px; margin-bottom:48px;">
        <div style="font-family:var(--font-display); font-size:16px; color:var(--tape); letter-spacing:2px; margin-bottom:12px;">DESIGNER TIPS</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk); line-height:1.7;">1. Tell your partner your scene number first.</div>
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk); line-height:1.7;">2. Listen carefully. Do not look at your partner's screen.</div>
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk); line-height:1.7;">3. Drag the ball to where your partner describes.</div>
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk); line-height:1.7;">4. At the end, hold up your screen. Compare with the Speaker.</div>
        </div>
      </div>

      <!-- SPEAKER SCREEN 1 -->
      <div style="font-family:var(--font-display); font-size:22px; color:var(--chalk); letter-spacing:2px; margin-bottom:12px;">
        SPEAKER SCREEN
      </div>
      <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); line-height:1.7; margin-bottom:20px;">
        This is what the Speaker sees. The scene number grid, and after they tap the number, the answer image plus prompt cards. The Speaker reads the prompts out loud.
      </div>

      <div style="background:var(--surface); border:2px solid var(--chalk-dim); border-radius:var(--radius); padding:20px; margin-bottom:12px;">
        <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); letter-spacing:2px; margin-bottom:16px;">ROUND 1 OF 3 // SPEAKER</div>
        <div style="background:var(--surface2); border:1px solid var(--border); border-radius:var(--radius); padding:16px; text-align:center; margin-bottom:20px;">
          <div style="font-family:var(--font-display); font-size:16px; color:var(--chalk-dim); margin-bottom:6px;">Ask your partner:</div>
          <div style="font-family:var(--font-display); font-size:22px; color:var(--chalk);">"What scene number are you on?"</div>
          <div style="font-family:var(--font-mono); font-size:12px; color:var(--muted); margin-top:8px;">Then tap that number below.</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-bottom:20px; opacity:0.5;">
          ${[1,2,3,4,5,6,7,8,9,10,11,12].map(n => `
            <div style="
              background:${n === 1 ? 'var(--tape)' : 'var(--surface)'};
              color:${n === 1 ? '#0a0a0a' : 'var(--chalk)'};
              border:1px solid ${n === 1 ? 'var(--tape)' : 'var(--border)'};
              border-radius:var(--radius); font-family:var(--font-display);
              font-size:22px; padding:14px; text-align:center;
            ">${n}</div>
          `).join('')}
        </div>
        <div style="background:var(--surface2); border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; margin-bottom:16px;">
          <img src="assets/level3.5/ball-nextTo.png" style="width:100%; display:block;" />
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="font-family:var(--font-mono); font-size:15px; color:var(--chalk); background:var(--surface2); border-left:4px solid var(--tape); padding:14px 16px; border-radius:4px;">
            The ball is NEXT TO the box.
          </div>
          <div style="font-family:var(--font-mono); font-size:15px; color:var(--chalk); background:var(--surface2); border-left:4px solid var(--chalk-dim); padding:14px 16px; border-radius:4px;">
            The <span style="color:var(--tape); font-family:var(--font-display); font-size:17px;">______</span> is <span style="color:var(--tape); font-family:var(--font-display); font-size:17px;">______</span> the box.
          </div>
        </div>
      </div>

      <!-- Speaker tips -->
      <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:20px; margin-bottom:64px;">
        <div style="font-family:var(--font-display); font-size:16px; color:var(--tape); letter-spacing:2px; margin-bottom:12px;">SPEAKER TIPS</div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk); line-height:1.7;">1. Ask your partner their scene number first. Then tap it.</div>
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk); line-height:1.7;">2. Read the YELLOW card first. Say the full sentence out loud.</div>
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk); line-height:1.7;">3. Read the GRAY card next. Fill in the blanks yourself.</div>
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk); line-height:1.7;">4. Do NOT show your screen. Use your words only.</div>
        </div>
      </div>

      <!-- DIVIDER -->
      <hr style="border:none; border-top:1px solid var(--border); margin-bottom:64px;" />

      <!-- EXAMPLE 2 -->
      <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); letter-spacing:3px; margin-bottom:20px;">
        EXAMPLE 2 OF 2
      </div>

      <!-- DESIGNER SCREEN 2 -->
      <div style="font-family:var(--font-display); font-size:22px; color:var(--chalk); letter-spacing:2px; margin-bottom:12px;">
        DESIGNER SCREEN
      </div>
      <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); line-height:1.7; margin-bottom:20px;">
        Same empty scene. Different position. The Designer still has no idea where the ball goes. They are waiting for the Speaker.
      </div>

      <div style="background:var(--surface); border:2px solid var(--tape); border-radius:var(--radius); padding:20px; margin-bottom:12px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); letter-spacing:2px;">ROUND 2 OF 3 // DESIGNER</div>
          <div style="font-family:var(--font-display); font-size:22px; color:var(--tape);">SCENE 2</div>
        </div>
        <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); margin-bottom:12px; text-align:center;">
          Tell your partner your scene number. Then listen and place the objects.
        </div>

        <!-- Canvas 2 -->
        <div id="l35-canvas-2" style="position:relative; width:100%; border-radius:var(--radius) var(--radius) 0 0; overflow:hidden; border:1px solid var(--border); border-bottom:none;">
          <img src="assets/level3.5/level3.5-practice-background.png" style="width:100%; display:block;" />
        </div>

        <!-- Tray 2 -->
        <div id="l35-tray-2" style="
          display:flex; gap:16px; align-items:center; justify-content:center;
          padding:20px 16px; background:var(--surface2);
          border:1px solid var(--border); border-top:2px solid var(--tape);
          border-radius:0 0 var(--radius) var(--radius); min-height:100px;
        ">
          <div class="l35-sprite-item" data-index="0" data-tray="2" style="
            width:80px; height:80px; flex-shrink:0; cursor:grab;
            touch-action:none; display:flex; align-items:center; justify-content:center;
          ">
            <img src="assets/level3.5/Ball-a.svg" style="width:100%; height:100%; object-fit:contain; pointer-events:none;" />
          </div>
        </div>

        <div style="text-align:center; margin-top:10px;">
          <button onclick="resetCanvas35('2')" style="
            background:transparent; border:1px solid var(--border);
            border-radius:var(--radius); color:var(--muted);
            font-family:var(--font-mono); font-size:11px;
            letter-spacing:2px; padding:8px 20px; cursor:pointer;
          ">RESET</button>
        </div>
      </div>

      <div style="font-family:var(--font-mono); font-size:13px; color:var(--muted); text-align:center; margin-bottom:48px;">
        The Designer sees the same tray every time. Only the Speaker knows where things go.
      </div>

      <!-- SPEAKER SCREEN 2 -->
      <div style="font-family:var(--font-display); font-size:22px; color:var(--chalk); letter-spacing:2px; margin-bottom:12px;">
        SPEAKER SCREEN
      </div>
      <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); line-height:1.7; margin-bottom:20px;">
        Now the answer image shows the ball ON the box. The Speaker reads the anchor sentence, then tries the hint card with blanks.
      </div>

      <div style="background:var(--surface); border:2px solid var(--chalk-dim); border-radius:var(--radius); padding:20px; margin-bottom:12px;">
        <div style="font-family:var(--font-mono); font-size:11px; color:var(--muted); letter-spacing:2px; margin-bottom:16px;">ROUND 2 OF 3 // SPEAKER</div>
        <div style="background:var(--surface2); border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; margin-bottom:16px;">
          <img src="assets/level3.5/ball-on.png" style="width:100%; display:block;" />
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          <div style="font-family:var(--font-mono); font-size:15px; color:var(--chalk); background:var(--surface2); border-left:4px solid var(--tape); padding:14px 16px; border-radius:4px;">
            The ball is ON the box.
          </div>
          <div style="font-family:var(--font-mono); font-size:15px; color:var(--chalk); background:var(--surface2); border-left:4px solid var(--chalk-dim); padding:14px 16px; border-radius:4px;">
            The <span style="color:var(--tape); font-family:var(--font-display); font-size:17px;">______</span> is <span style="color:var(--tape); font-family:var(--font-display); font-size:17px;">______</span> the box.
          </div>
        </div>
      </div>

      <!-- FINAL CALLOUT -->
      <div style="background:var(--surface); border:2px solid var(--tape); border-radius:var(--radius); padding:28px; text-align:center; margin-top:48px; margin-bottom:16px;">
        <div style="font-family:var(--font-display); font-size:28px; color:var(--tape); margin-bottom:12px;">YOU ARE READY.</div>
        <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); line-height:1.8;">
          Go to LEVEL 04. Pick your role. Use your words. Do not show your screen.
        </div>
      </div>

    </div>
  `;

  // ── DRAG AND DROP ─────────────────────────────────────────
  initDrag35('1');
  initDrag35('2');

  function initDrag35(trayId) {
    const canvas  = document.getElementById('l35-canvas-' + trayId);
    const tray    = document.getElementById('l35-tray-' + trayId);
    if (!canvas || !tray) return;

    let dragging   = null;
    let offsetX    = 0;
    let offsetY    = 0;
    let clone      = null;
    let fromCanvas = false;

    function startDrag(e, el, isFromCanvas) {
      e.preventDefault();
      const touch = e.touches ? e.touches[0] : e;
      const rect  = el.getBoundingClientRect();
      offsetX     = touch.clientX - rect.left;
      offsetY     = touch.clientY - rect.top;
      dragging    = el;
      fromCanvas  = !!isFromCanvas;

      clone = document.createElement('div');
      clone.style.cssText = `
        position:fixed;
        width:80px; height:80px;
        pointer-events:none;
        z-index:1000;
        left:${touch.clientX - offsetX}px;
        top:${touch.clientY - offsetY}px;
      `;
      clone.innerHTML = `<img src="assets/level3.5/Ball-a.svg" style="width:100%;height:100%;object-fit:contain;" />`;
      document.body.appendChild(clone);

      if (fromCanvas) el.style.visibility = 'hidden';
    }

    function moveDrag(e) {
      if (!clone) return;
      e.preventDefault();
      const touch = e.touches ? e.touches[0] : e;
      clone.style.left = (touch.clientX - offsetX) + 'px';
      clone.style.top  = (touch.clientY - offsetY) + 'px';
    }

    function endDrag(e) {
      if (!clone || !dragging) return;
      const touch      = e.changedTouches ? e.changedTouches[0] : e;
      const canvasRect = canvas.getBoundingClientRect();

      const droppedInCanvas =
        touch.clientX > canvasRect.left &&
        touch.clientX < canvasRect.right &&
        touch.clientY > canvasRect.top   &&
        touch.clientY < canvasRect.bottom;

      if (droppedInCanvas) {
        const x = touch.clientX - canvasRect.left - offsetX;
        const y = touch.clientY - canvasRect.top  - offsetY;

        if (fromCanvas) {
          dragging.style.left       = x + 'px';
          dragging.style.top        = y + 'px';
          dragging.style.visibility = 'visible';
        } else {
          const placed = document.createElement('div');
          placed.style.cssText = `
            position:absolute;
            left:${x}px; top:${y}px;
            width:80px; height:80px;
            cursor:grab; touch-action:none; z-index:10;
          `;
          placed.dataset.index = '0';
          placed.innerHTML = `<img src="assets/level3.5/Ball-a.svg" style="width:100%;height:100%;object-fit:contain;pointer-events:none;" />`;
          canvas.appendChild(placed);

          dragging.style.visibility    = 'hidden';
          dragging.style.pointerEvents = 'none';

          placed.addEventListener('touchstart', e => startDrag(e, placed, true), { passive: false });
          placed.addEventListener('mousedown',  e => startDrag(e, placed, true));
        }
      } else {
        if (fromCanvas) {
          dragging.remove();
          const trayItem = tray.querySelector('.l35-sprite-item');
          if (trayItem) {
            trayItem.style.visibility    = 'visible';
            trayItem.style.pointerEvents = 'auto';
          }
        }
      }

      document.body.removeChild(clone);
      clone    = null;
      dragging = null;
    }

    tray.querySelectorAll('.l35-sprite-item').forEach(el => {
      el.addEventListener('touchstart', e => startDrag(e, el, false), { passive: false });
      el.addEventListener('mousedown',  e => startDrag(e, el, false));
    });

    document.addEventListener('touchmove', moveDrag, { passive: false });
    document.addEventListener('mousemove', moveDrag);
    document.addEventListener('touchend',  endDrag);
    document.addEventListener('mouseup',   endDrag);
  }

  window.resetCanvas35 = function(trayId) {
    const canvas = document.getElementById('l35-canvas-' + trayId);
    const tray   = document.getElementById('l35-tray-' + trayId);
    if (!canvas || !tray) return;
    canvas.querySelectorAll('[data-index]').forEach(el => el.remove());
    tray.querySelectorAll('.l35-sprite-item').forEach(el => {
      el.style.visibility    = 'visible';
      el.style.pointerEvents = 'auto';
    });
  };
}
