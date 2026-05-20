function initLevel4() {

  const scenes = [
    {
      id: 1,
      background: 'assets/level4/bedroom-green.png',
      image: 'assets/level4/scene-1.png',
      sprites: [
        { file: 'assets/level4/ball-purple.svg', label: 'ball', size: 80,  flip: false, hue: null },
        { file: 'assets/level4/dog.svg',         label: 'dog',  size: 100, flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The ball is ON the bed.' },
        { type: 'hint',   text: 'The ______ is ______ the dresser.' }
      ]
    },
    {
      id: 2,
      background: 'assets/level4/bedroom-green.png',
      image: 'assets/level4/scene-2.png',
      sprites: [
        { file: 'assets/level4/ball-purple.svg', label: 'ball',  size: 100, flip: false, hue: null },
        { file: 'assets/level4/apple.svg',       label: 'apple', size: 60,  flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The ball is NEXT TO the bed.' },
        { type: 'hint',   text: 'The ______ is ______ the dresser.' }
      ]
    },
    {
      id: 3,
      background: 'assets/level4/bedroom-green.png',
      image: 'assets/level4/scene-3.png',
      sprites: [
        { file: 'assets/level4/apple.svg',    label: 'apple',    size: 60, flip: false, hue: null },
        { file: 'assets/level4/dinosaur.svg', label: 'dinosaur', size: 60, flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The apple is ON the left side of the dresser.' },
        { type: 'hint',   text: 'The ______ is ______ the dresser.' }
      ]
    },
    {
      id: 4,
      background: 'assets/level4/bedroom-pink.png',
      image: 'assets/level4/scene-4.png',
      sprites: [
        { file: 'assets/level4/balloon-yellow.svg', label: 'balloon',  size: 70, flip: false, hue: null },
        { file: 'assets/level4/dinosaur.svg',       label: 'dinosaur', size: 70, flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The balloon is ABOVE the computer.' },
        { type: 'hint',   text: 'The ______ is ______ the bed.' }
      ]
    },
    {
      id: 5,
      background: 'assets/level4/bedroom-pink.png',
      image: 'assets/level4/scene-5.png',
      sprites: [
        { file: 'assets/level4/balloon-yellow.svg', label: 'balloon',          size: 70, flip: false, hue: null },
        { file: 'assets/level4/balloon-yellow.svg', label: 'balloon (flipped)', size: 70, flip: true,  hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The balloon is NEXT TO the mirror.' },
        { type: 'hint',   text: 'The ______ is ______ the mirror.' }
      ]
    },
    {
      id: 6,
      background: 'assets/level4/bedroom-pink.png',
      image: 'assets/level4/scene-6.png',
      sprites: [
        { file: 'assets/level4/dog.svg', label: 'blue dog',  size: 70, flip: false, hue: 200 },
        { file: 'assets/level4/dog.svg', label: 'brown dog', size: 70, flip: false, hue: 330 },
        { file: 'assets/level4/dog.svg', label: 'pink dog',  size: 70, flip: false, hue: 300 }
      ],
      prompts: [
        { type: 'anchor', text: 'The blue dog is ON the desk.' },
        { type: 'hint',   text: 'The ______ dog is ______ the desk.' },
        { type: 'nearly', text: 'The ______ is ______ the ______.' }
      ]
    },
    {
      id: 7,
      background: 'assets/level4/livingRoom.png',
      image: 'assets/level4/scene-7.png',
      sprites: [
        { file: 'assets/level4/dinosaur.svg', label: 'large dinosaur',  size: 150, flip: true, hue: null },
        { file: 'assets/level4/dinosaur.svg', label: 'medium dinosaur', size: 90,  flip: true, hue: null },
        { file: 'assets/level4/dinosaur.svg', label: 'small dinosaur',  size: 50,  flip: true, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The large dinosaur is ON the left side of the couch.' },
        { type: 'hint',   text: 'The ______ dinosaur is ______ the couch.' },
        { type: 'nearly', text: 'The ______ is ______ the ______.' }
      ]
    },
    {
      id: 8,
      background: 'assets/level4/livingRoom.png',
      image: 'assets/level4/scene-8.png',
      sprites: [
        { file: 'assets/level4/apple.svg', label: 'apple (TV)',    size: 55, flip: false, hue: null },
        { file: 'assets/level4/apple.svg', label: 'apple (table)', size: 55, flip: false, hue: null },
        { file: 'assets/level4/apple.svg', label: 'apple (shelf)', size: 35, flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The apple is ON the top left corner of the TV.' },
        { type: 'hint',   text: 'The ______ is ______ the table.' },
        { type: 'nearly', text: 'The ______ is ______ the ______.' }
      ]
    },
    {
      id: 9,
      background: 'assets/level4/livingRoom.png',
      image: 'assets/level4/scene-9.png',
      sprites: [
        { file: 'assets/level4/balloon-yellow.svg', label: 'large balloon', size: 180, flip: false, hue: null },
        { file: 'assets/level4/balloon-yellow.svg', label: 'small balloon', size: 60,  flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The large balloon is IN FRONT OF the chair.' },
        { type: 'hint',   text: 'The ______ balloon is ______ the chair.' }
      ]
    },
    {
      id: 10,
      background: 'assets/level4/room.png',
      image: 'assets/level4/scene-10.png',
      sprites: [
        { file: 'assets/level4/dog.svg', label: 'dog (lamp)',      size: 65, flip: false, hue: null },
        { file: 'assets/level4/dog.svg', label: 'dog (bookshelf)', size: 65, flip: false, hue: null },
        { file: 'assets/level4/dog.svg', label: 'dog (floor)',     size: 65, flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The dog is ON the lamp.' },
        { type: 'hint',   text: 'The ______ is ______ the bookshelf.' },
        { type: 'nearly', text: 'The ______ is ______ the ______.' }
      ]
    },
    {
      id: 11,
      background: 'assets/level4/room.png',
      image: 'assets/level4/scene-11.png',
      sprites: [
        { file: 'assets/level4/ball-purple.svg', label: 'large ball', size: 140, flip: false, hue: null },
        { file: 'assets/level4/ball-purple.svg', label: 'small ball', size: 45,  flip: false, hue: null },
        { file: 'assets/level4/ball-purple.svg', label: 'tiny ball',  size: 30,  flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The large ball is IN FRONT OF the table.' },
        { type: 'hint',   text: 'The ______ ball is ______ the table.' },
        { type: 'nearly', text: 'The ______ is ______ the ______.' }
      ]
    },
    {
      id: 12,
      background: 'assets/level4/room.png',
      image: 'assets/level4/scene-12.png',
      sprites: [
        { file: 'assets/level4/dinosaur.svg', label: 'large dinosaur', size: 200, flip: false, hue: null },
        { file: 'assets/level4/dinosaur.svg', label: 'small dinosaur', size: 40,  flip: false, hue: null }
      ],
      prompts: [
        { type: 'anchor', text: 'The large dinosaur is IN FRONT OF the lamp.' },
        { type: 'hint',   text: 'The ______ is ______ the chair.' }
      ]
    }
  ];

  let currentRole   = null;
  let currentRound  = 0;
  let designerScene = null;
  let sceneQueue    = [];
  const totalRounds = 3;
  const app = document.getElementById('l4-app');

  function buildSceneQueue() {
    const shuffled = [...scenes].sort(() => Math.random() - 0.5);
    sceneQueue = shuffled.slice(0, totalRounds);
  }

  window.renderRoleSelect = function() {
    currentRound = 0;
    app.innerHTML = `
      <div style="text-align:center; padding:40px 0;">
        <div class="section-label" style="margin-bottom:12px;">LEVEL 04 // PAIR ACTIVITY</div>
        <div class="section-title" style="margin-bottom:8px;">Who are you?</div>
        <p style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); margin-bottom:40px; line-height:1.7;">
          Each student picks a role. You will switch after 3 rounds.
        </p>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; max-width:600px; margin:0 auto;">
          <button onclick="startRole('speaker')" style="
            background:var(--surface);
            border:2px solid var(--tape);
            border-radius:var(--radius);
            color:var(--tape);
            font-family:var(--font-display);
            font-size:28px;
            letter-spacing:2px;
            padding:40px 20px;
            cursor:pointer;
            -webkit-tap-highlight-color:transparent;
          ">SPEAKER</button>
          <button onclick="startRole('designer')" style="
            background:var(--surface);
            border:2px solid var(--chalk-dim);
            border-radius:var(--radius);
            color:var(--chalk);
            font-family:var(--font-display);
            font-size:28px;
            letter-spacing:2px;
            padding:40px 20px;
            cursor:pointer;
            -webkit-tap-highlight-color:transparent;
          ">DESIGNER</button>
        </div>
      </div>
    `;
  };

  window.startRole = function(role) {
    currentRole  = role;
    currentRound = 1;
    if (role === 'designer') {
      buildSceneQueue();
      designerScene = sceneQueue[0];
      renderDesigner();
    } else {
      renderSpeaker(null);
    }
  };

  // ── SPEAKER ──────────────────────────────────────────────

  function renderSpeaker(selectedScene) {
    const sceneButtons = scenes.map(s => `
      <button onclick="speakerSelectScene(${s.id})" style="
        background:${selectedScene && selectedScene.id === s.id ? 'var(--tape)' : 'var(--surface)'};
        color:${selectedScene && selectedScene.id === s.id ? '#0a0a0a' : 'var(--chalk)'};
        border:1px solid ${selectedScene && selectedScene.id === s.id ? 'var(--tape)' : 'var(--border)'};
        border-radius:var(--radius);
        font-family:var(--font-display);
        font-size:24px;
        padding:16px;
        cursor:pointer;
        -webkit-tap-highlight-color:transparent;
        width:100%;
      ">${s.id}</button>
    `).join('');

    app.innerHTML = `
      <div style="max-width:700px; margin:0 auto;">
        <div style="font-family:var(--font-mono); font-size:12px; color:var(--muted); letter-spacing:2px; margin-bottom:24px;">
          ROUND ${currentRound} OF ${totalRounds} // SPEAKER
        </div>
        <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); padding:24px; text-align:center; margin-bottom:28px;">
          <div style="font-family:var(--font-display); font-size:18px; color:var(--chalk-dim); margin-bottom:6px;">Ask your partner:</div>
          <div style="font-family:var(--font-display); font-size:28px; color:var(--chalk);">"What scene number are you on?"</div>
          <div style="font-family:var(--font-mono); font-size:13px; color:var(--muted); margin-top:8px;">Then tap that number below.</div>
        </div>
        <div style="display:grid; grid-template-columns:repeat(4,1fr); gap:10px; margin-bottom:28px;">
          ${sceneButtons}
        </div>
        <div id="l4-speaker-scene"></div>
      </div>
    `;

    if (selectedScene) {
      renderSpeakerScene(selectedScene);
    }
  }

  window.speakerSelectScene = function(id) {
    const scene = scenes.find(s => s.id === id);
    renderSpeaker(scene);
  };

  function renderSpeakerScene(scene) {
    const promptHTML = scene.prompts.map(p => {
      if (p.type === 'anchor') {
        return `
          <div style="font-family:var(--font-mono); font-size:16px; color:var(--chalk); background:var(--surface2); border-left:4px solid var(--tape); padding:14px 16px; border-radius:4px;">
            ${p.text}
          </div>`;
      }
      if (p.type === 'hint') {
        const parts = p.text.split('______');
        return `
          <div style="font-family:var(--font-mono); font-size:16px; color:var(--chalk); background:var(--surface2); border-left:4px solid var(--chalk-dim); padding:14px 16px; border-radius:4px;">
            ${parts.map((part, i) => i < parts.length - 1
              ? `${part}<span style="color:var(--tape); font-family:var(--font-display); font-size:18px;">______</span>`
              : part
            ).join('')}
          </div>`;
      }
      if (p.type === 'nearly') {
        return `
          <div style="font-family:var(--font-mono); font-size:16px; color:var(--chalk-dim); background:var(--surface2); border-left:4px solid var(--muted); padding:14px 16px; border-radius:4px;">
            ${p.text}
          </div>`;
      }
    }).join('');

    document.getElementById('l4-speaker-scene').innerHTML = `
      <div style="background:var(--surface); border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; margin-bottom:20px;">
        <img src="${scene.image}" style="width:100%; display:block;" />
      </div>
      <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:28px;">
        ${promptHTML}
      </div>
      <div style="text-align:center;">
        ${currentRound < totalRounds
          ? `<button class="lock-btn" onclick="speakerNextRound()">NEXT ROUND</button>`
          : `<button class="lock-btn" onclick="renderDone()">FINISH</button>`
        }
      </div>
    `;
  }

  window.speakerNextRound = function() {
    currentRound++;
    renderSpeaker(null);
  };

  // ── DESIGNER ─────────────────────────────────────────────

  function renderDesigner() {
    const scene = designerScene;

    const spriteItems = scene.sprites.map((sp, i) => {
      const flipStyle = sp.flip ? 'transform:scaleX(-1);' : '';
      const hueStyle  = sp.hue !== null ? `filter:hue-rotate(${sp.hue}deg);` : '';
      return `
        <div class="l4-sprite-item" data-index="${i}" style="
          width:${sp.size}px;
          height:${sp.size}px;
          flex-shrink:0;
          cursor:grab;
          touch-action:none;
          display:flex;
          align-items:center;
          justify-content:center;
        ">
          <img src="${sp.file}"
            style="width:100%;height:100%;object-fit:contain;${flipStyle}${hueStyle}pointer-events:none;" />
        </div>
      `;
    }).join('');

    app.innerHTML = `
      <div style="max-width:700px; margin:0 auto;">

        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <div style="font-family:var(--font-mono); font-size:12px; color:var(--muted); letter-spacing:2px;">
            ROUND ${currentRound} OF ${totalRounds} // DESIGNER
          </div>
          <div style="font-family:var(--font-display); font-size:20px; color:var(--tape);">SCENE ${scene.id}</div>
        </div>

        <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); margin-bottom:12px; text-align:center;">
          Tell your partner your scene number. Then listen and place the objects.
        </div>

        <div id="l4-canvas" style="
          position:relative;
          width:100%;
          border-radius:var(--radius) var(--radius) 0 0;
          overflow:hidden;
          border:1px solid var(--border);
          border-bottom:none;
        ">
          <img src="${scene.background}" style="width:100%; display:block;" />
        </div>

        <div id="l4-tray" style="
          display:flex;
          gap:16px;
          align-items:center;
          justify-content:center;
          padding:20px 16px;
          background:var(--surface2);
          border:1px solid var(--border);
          border-top:2px solid var(--tape);
          border-radius:0 0 var(--radius) var(--radius);
          min-height:100px;
          flex-wrap:wrap;
        ">
          ${spriteItems}
        </div>

        <div style="text-align:center; margin-top:12px; margin-bottom:8px;">
          <button onclick="resetCanvas()" style="
            background:transparent;
            border:1px solid var(--border);
            border-radius:var(--radius);
            color:var(--muted);
            font-family:var(--font-mono);
            font-size:11px;
            letter-spacing:2px;
            padding:8px 20px;
            cursor:pointer;
          ">RESET CANVAS</button>
        </div>

        <div style="text-align:center; margin-top:8px;">
          ${currentRound < totalRounds
            ? `<button class="lock-btn" onclick="designerNextRound()">NEXT ROUND</button>`
            : `<button class="lock-btn" onclick="renderDone()">FINISH</button>`
          }
        </div>

      </div>
    `;

    initDrag(scene);
  }

  function initDrag(scene) {
    const canvas   = document.getElementById('l4-canvas');
    const tray     = document.getElementById('l4-tray');
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

      const idx = parseInt(el.dataset.index);
      const sp  = scene.sprites[idx];
      const flipStyle = sp.flip ? 'transform:scaleX(-1);' : '';
      const hueStyle  = sp.hue !== null ? `filter:hue-rotate(${sp.hue}deg);` : '';

      clone = document.createElement('div');
      clone.style.cssText = `
        position:fixed;
        width:${sp.size}px;
        height:${sp.size}px;
        pointer-events:none;
        z-index:1000;
        left:${touch.clientX - offsetX}px;
        top:${touch.clientY - offsetY}px;
      `;
      clone.innerHTML = `<img src="${sp.file}" style="width:100%;height:100%;object-fit:contain;${flipStyle}${hueStyle}" />`;
      document.body.appendChild(clone);

      if (fromCanvas) {
        el.style.visibility = 'hidden';
      }
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
      const idx        = parseInt(dragging.dataset.index);
      const sp         = scene.sprites[idx];
      const flipStyle  = sp.flip ? 'transform:scaleX(-1);' : '';
      const hueStyle   = sp.hue !== null ? `filter:hue-rotate(${sp.hue}deg);` : '';

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
            left:${x}px;
            top:${y}px;
            width:${sp.size}px;
            height:${sp.size}px;
            cursor:grab;
            touch-action:none;
            z-index:10;
          `;
          placed.dataset.index = idx;
          placed.innerHTML = `<img src="${sp.file}" style="width:100%;height:100%;object-fit:contain;${flipStyle}${hueStyle}pointer-events:none;" />`;
          canvas.appendChild(placed);

          dragging.style.visibility    = 'hidden';
          dragging.style.pointerEvents = 'none';

          placed.addEventListener('touchstart', e => startDrag(e, placed, true), { passive: false });
          placed.addEventListener('mousedown',  e => startDrag(e, placed, true));
        }
      } else {
        if (fromCanvas) {
          dragging.remove();
          const trayItem = tray.querySelector(`.l4-sprite-item[data-index="${idx}"]`);
          if (trayItem) {
            trayItem.style.visibility    = 'visible';
            trayItem.style.pointerEvents = 'auto';
          }
        }
      }

      document.body.removeChild(clone);
      clone     = null;
      dragging  = null;
    }

    tray.querySelectorAll('.l4-sprite-item').forEach(el => {
      el.addEventListener('touchstart', e => startDrag(e, el, false), { passive: false });
      el.addEventListener('mousedown',  e => startDrag(e, el, false));
    });

    document.addEventListener('touchmove', moveDrag, { passive: false });
    document.addEventListener('mousemove', moveDrag);
    document.addEventListener('touchend',  endDrag);
    document.addEventListener('mouseup',   endDrag);
  }

  window.resetCanvas = function() {
    const canvas = document.getElementById('l4-canvas');
    const tray   = document.getElementById('l4-tray');
    canvas.querySelectorAll('[data-index]').forEach(el => el.remove());
    tray.querySelectorAll('.l4-sprite-item').forEach(el => {
      el.style.visibility    = 'visible';
      el.style.pointerEvents = 'auto';
    });
  };

  window.designerNextRound = function() {
    currentRound++;
    designerScene = sceneQueue[currentRound - 1];
    renderDesigner();
  };

  window.renderDone = function() {
    app.innerHTML = `
      <div style="text-align:center; padding:48px 0;">
        <div style="font-family:var(--font-display); font-size:48px; color:var(--tape); margin-bottom:12px;">DONE</div>
        <div style="font-family:var(--font-mono); font-size:13px; color:var(--chalk-dim); margin-bottom:32px; line-height:1.7;">
          Show your partner your screen. Compare your placements.
        </div>
        <button class="lock-btn" onclick="renderRoleSelect()">PLAY AGAIN?</button>
      </div>
    `;
  };

  window.renderRoleSelect();
}