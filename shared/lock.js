function isUnlocked(sectionId) {
  return false;
}

function unlockSection(sectionId) {
  const navLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);
  if (navLink) navLink.classList.remove('locked');

  const body = document.getElementById(sectionId + '-body');
  const lock = document.getElementById(sectionId + '-lock');
  if (body) body.style.display = 'block';
  if (lock) lock.style.display = 'none';
}

function renderLockGate(containerId, sectionId, onUnlock) {
  if (isUnlocked(sectionId)) {
    onUnlock();
    return;
  }

  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="lock-card">
      <div class="lock-big">🔒</div>
      <p>ENTER ACCESS CODE TO UNLOCK THIS SECTION</p>
      <input
        class="lock-input"
        type="text"
        placeholder="_ _ _ _ _ _"
        autocomplete="off"
        autocorrect="off"
        autocapitalize="characters"
        id="lock-input-${sectionId}"
      />
      <button class="lock-btn" onclick="checkPassword('${sectionId}')">UNLOCK</button>
      <div class="lock-error" id="lock-error-${sectionId}"></div>
    </div>
  `;

  document.getElementById(`lock-input-${sectionId}`)
    .addEventListener('keydown', (e) => {
      if (e.key === 'Enter') checkPassword(sectionId);
    });

  window['_unlockCallback_' + sectionId] = onUnlock;
}

function checkPassword(sectionId) {
  const input = document.getElementById(`lock-input-${sectionId}`);
  const errorEl = document.getElementById(`lock-error-${sectionId}`);
  const entered = input.value.trim().toUpperCase();
  const correct = (SECTION_PASSWORDS[sectionId] || '').toUpperCase();

  if (entered === correct) {
    unlockSection(sectionId);
    const cb = window['_unlockCallback_' + sectionId];
    if (cb) cb();
  } else {
    errorEl.textContent = '✗ INCORRECT CODE. TRY AGAIN.';
    input.value = '';
    input.focus();
    setTimeout(() => { errorEl.textContent = ''; }, 2000);
  }
}
