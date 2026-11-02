/* DiaStyle · LEVEL: T1D — premium presentation layer. Read-only observers: never touches game state, glucose or insulin logic. */
(function () {
  'use strict';
  var root = document.documentElement, body = document.body;
  var reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lite = reduced || (navigator.deviceMemory && navigator.deviceMemory <= 2) || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2);
  if (lite) body.classList.add('px-lite');

  /* 1. Time-of-day colour grade on the scene, derived from the HUD clock (read-only). */
  function grade() {
    var el = document.getElementById('hudTime'); if (!el) return;
    var m = /(\d{1,2})[:.](\d{2})/.exec(el.textContent || ''); if (!m) return;
    var h = +m[1] + (+m[2]) / 60, tint, a;
    if (h < 6.5) { tint = '90,110,190'; a = .55; }            // night
    else if (h < 9) { tint = '255,190,130'; a = .45; }        // morning gold
    else if (h < 16) { tint = '255,240,215'; a = .18; }       // daylight
    else if (h < 19.5) { tint = '255,170,110'; a = .5; }      // golden hour
    else { tint = '80,100,185'; a = .55; }                    // evening
    root.style.setProperty('--grade-tint', tint); root.style.setProperty('--grade-a', a);
  }
  var t = document.getElementById('hudTime');
  if (t && window.MutationObserver) new MutationObserver(grade).observe(t, { childList: true, characterData: true, subtree: true });
  grade();

  /* 2. Gentle camera parallax: pointer on desktop, device tilt on phones. */
  if (!lite) {
    var col = document.getElementById('sceneCol'), raf = 0, tx = 0, ty = 0;
    var apply = function () { raf = 0; root.style.setProperty('--px', tx.toFixed(1) + 'px'); root.style.setProperty('--py', ty.toFixed(1) + 'px'); };
    var set = function (nx, ny) { tx = Math.max(-1, Math.min(1, nx)) * -9; ty = Math.max(-1, Math.min(1, ny)) * -5; if (!raf) raf = requestAnimationFrame(apply); };
    if (col) {
      col.addEventListener('pointermove', function (e) { if (e.pointerType === 'touch') return; var r = col.getBoundingClientRect(); set(((e.clientX - r.left) / r.width - .5) * 2, ((e.clientY - r.top) / r.height - .5) * 2); }, { passive: true });
      col.addEventListener('pointerleave', function () { set(0, 0); }, { passive: true });
    }
    if (window.DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission !== 'function') {
      window.addEventListener('deviceorientation', function (e) { if (e.gamma == null) return; set((e.gamma || 0) / 30, ((e.beta || 45) - 45) / 30); }, { passive: true });
    }
  }

  /* 3. Glucose trend arrow eases with the value (visual only, reads the arrow glyph already rendered). */
  var arrow = document.getElementById('gluArrow');
  if (arrow && window.MutationObserver) {
    var rot = { '↑': -90, '↗': -45, '→': 0, '↘': 45, '↓': 90, '⇈': -90, '⇊': 90 };
    var ob = new MutationObserver(function () { var g = (arrow.textContent || '').trim().charAt(0); if (g in rot) arrow.style.transform = 'scale(1.12)'; setTimeout(function () { arrow.style.transform = ''; }, 420); });
    ob.observe(arrow, { childList: true, characterData: true, subtree: true });
  }

  /* 4. Ripple + haptic tick on press. Delegated listener; never intercepts or cancels the click. */
  var SEL = '.btn,.act,.qb,.opt,.pill-btn,.hud-btn,.hud-chip.hud-goal,.tab';
  document.addEventListener('pointerdown', function (e) {
    var b = e.target.closest && e.target.closest(SEL); if (!b || b.disabled || lite) return;
    if (!b.classList.contains('px-rip')) b.classList.add('px-rip');
    var r = b.getBoundingClientRect(), w = document.createElement('span'); w.className = 'px-wave';
    w.style.left = (e.clientX - r.left) + 'px'; w.style.top = (e.clientY - r.top) + 'px';
    w.style.setProperty('--s', Math.max(8, Math.max(r.width, r.height) / 5).toFixed(1));
    b.appendChild(w); w.addEventListener('animationend', function () { if (w.parentNode) w.parentNode.removeChild(w); }); setTimeout(function () { if (w.parentNode) w.parentNode.removeChild(w); }, 600);
    if (e.pointerType === 'touch' && navigator.vibrate && !b.classList.contains('dis')) { try { navigator.vibrate(8); } catch (_) { } }
  }, { passive: true });
})();
