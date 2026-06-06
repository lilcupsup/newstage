/* ============================================================
   NewStage — enhancements (motion / "wow", non-critical)
   Count-up stats, animated match rings + signal bars,
   scroll progress, gentle hero tilt, compare verdict.
   All guarded by prefers-reduced-motion.
   ============================================================ */
(function () {
    'use strict';

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    /* ---- Scroll progress bar ---- */
    function initScrollProgress() {
        const bar = document.getElementById('scroll-progress');
        if (!bar || reduce) return;
        let ticking = false;
        const update = () => {
            const doc = document.documentElement;
            const max = doc.scrollHeight - doc.clientHeight;
            const p = max > 0 ? Math.min(1, doc.scrollTop / max) : 0;
            bar.style.transform = `scaleX(${p})`;
            ticking = false;
        };
        window.addEventListener('scroll', () => {
            if (!ticking) { ticking = true; requestAnimationFrame(update); }
        }, { passive: true });
        update();
    }

    /* ---- Animated number ---- */
    function animateNumber(el, target, suffix, duration) {
        if (reduce) { el.textContent = target + (suffix || ''); return; }
        const start = performance.now();
        const from = 0;
        const step = now => {
            const t = Math.min(1, (now - start) / duration);
            const value = Math.round(from + (target - from) * easeOut(t));
            el.textContent = value + (suffix || '');
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    /* ---- Count-up stats on view ---- */
    function initCountUp() {
        const nodes = Array.from(document.querySelectorAll('[data-count]'));
        if (!nodes.length) return;
        if (!('IntersectionObserver' in window)) {
            nodes.forEach(n => animateNumber(n, parseInt(n.dataset.count, 10) || 0, n.dataset.suffix, 1));
            return;
        }
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                animateNumber(e.target, parseInt(e.target.dataset.count, 10) || 0, e.target.dataset.suffix, 1200);
                obs.unobserve(e.target);
            });
        }, { threshold: 0.4 });
        nodes.forEach(n => io.observe(n));
    }

    /* ---- Animate a conic % ring (and its label) from 0 -> target ---- */
    function animateRing(el) {
        if (el.dataset.animated) return;
        el.dataset.animated = '1';
        const label = el.textContent.trim();
        const target = parseInt(label, 10);
        if (!Number.isFinite(target)) return;
        const hasPct = label.includes('%');
        if (reduce) { el.style.setProperty('--match', target + '%'); return; }
        const start = performance.now();
        const dur = 1100;
        el.style.setProperty('--match', '0%');
        el.textContent = '0' + (hasPct ? '%' : '');
        const step = now => {
            const t = Math.min(1, (now - start) / dur);
            const v = Math.round(target * easeOut(t));
            el.style.setProperty('--match', v + '%');
            el.textContent = v + (hasPct ? '%' : '');
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    function initRingsOnView(scope) {
        const rings = Array.from((scope || document).querySelectorAll('.match-ring, .product-status b'));
        if (!('IntersectionObserver' in window)) { rings.forEach(animateRing); return; }
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(e => {
                if (!e.isIntersecting) return;
                animateRing(e.target);
                obs.unobserve(e.target);
            });
        }, { threshold: 0.5 });
        rings.forEach(r => io.observe(r));
    }

    /* ---- Hero signal bars fill ---- */
    function initBars() {
        const bars = Array.from(document.querySelectorAll('.hero-product .signal-row i'));
        if (!bars.length) return;
        bars.forEach(b => {
            const target = b.style.width || getComputedStyle(b).width;
            b.dataset.target = target;
            if (!reduce) b.style.width = '0%';
        });
        if (reduce) return;
        const fire = () => bars.forEach((b, i) => setTimeout(() => { b.style.width = b.dataset.target; }, 180 + i * 140));
        if (!('IntersectionObserver' in window)) { setTimeout(fire, 400); return; }
        const host = document.querySelector('.hero-product');
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(e => { if (e.isIntersecting) { fire(); obs.disconnect(); } });
        }, { threshold: 0.3 });
        if (host) io.observe(host);
    }

    /* ---- Gentle pointer tilt on hero console ---- */
    function initTilt() {
        if (reduce) return;
        const host = document.querySelector('.hero-product');
        const shell = host && host.querySelector('.product-shell');
        if (!host || !shell || window.matchMedia('(pointer: coarse)').matches) return;
        host.addEventListener('pointermove', e => {
            const r = host.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            shell.style.transform = `rotateY(${px * 3}deg) rotateX(${-py * 3}deg) translateZ(0)`;
        });
        host.addEventListener('pointerleave', () => { shell.style.transform = ''; });
    }

    /* ---- Subtle pointer-follow spotlight on interactive cards ---- */
    function initSpotlight() {
        if (reduce || window.matchMedia('(pointer: coarse)').matches) return;
        const selector = '.card, .ai-recommendation-card, .blog-card, .course-card, .journey-step, .faq-item';
        let current = null;
        let frame = 0;
        let lastX = 0, lastY = 0;
        const apply = () => {
            frame = 0;
            if (!current) return;
            const r = current.getBoundingClientRect();
            current.style.setProperty('--mx', (lastX - r.left) + 'px');
            current.style.setProperty('--my', (lastY - r.top) + 'px');
        };
        document.addEventListener('pointermove', e => {
            const card = e.target.closest ? e.target.closest(selector) : null;
            current = card;
            if (!card) return;
            lastX = e.clientX; lastY = e.clientY;
            if (!frame) frame = requestAnimationFrame(apply);
        }, { passive: true });
    }

    /* ---- Search: coloured direction chips drive the #filter-direction select ---- */
    function initDirFilter() {
        const chips = Array.from(document.querySelectorAll('.dir-chip'));
        const sel = document.getElementById('filter-direction');
        if (!chips.length || !sel) return;
        const sync = () => chips.forEach(c => c.classList.toggle('is-active', c.dataset.dir === sel.value));
        chips.forEach(chip => chip.addEventListener('click', () => {
            sel.value = chip.dataset.dir;
            sel.dispatchEvent(new Event('change', { bubbles: true }));
        }));
        sel.addEventListener('change', sync);
        sync();
    }

    /* ---- AI picker: step-by-step wizard ---- */
    function initWizard() {
        const form = document.getElementById('ai-form');
        if (!form || !form.classList.contains('ai-wizard')) return;
        const steps = Array.from(form.querySelectorAll('.wizard-step'));
        if (!steps.length) return;
        const dots = Array.from(form.querySelectorAll('.wdot'));
        const bar = form.querySelector('#wizard-bar');
        const counter = form.querySelector('#wizard-current');
        const prevBtn = form.querySelector('[data-wizard-prev]');
        const nextBtn = form.querySelector('[data-wizard-next]');
        const submitBtn = form.querySelector('[data-wizard-submit]');
        const total = steps.length;
        let cur = 1;

        const requiredIn = step => Array.from(steps[step - 1].querySelectorAll('input[required], select[required], textarea[required]'));

        function clearError(field) { field.classList.remove('field-error'); }
        function flagError(field) {
            field.classList.add('field-error');
            field.addEventListener('input', () => clearError(field), { once: true });
            field.addEventListener('change', () => clearError(field), { once: true });
            field.focus({ preventScroll: true });
        }

        function validate(step) {
            const fields = requiredIn(step);
            for (const f of fields) {
                if (!String(f.value).trim()) { flagError(f); return false; }
            }
            return true;
        }

        function render(animateDir) {
            steps.forEach((s, i) => s.classList.toggle('is-active', i === cur - 1));
            if (animateDir) {
                const active = steps[cur - 1];
                active.classList.remove('slide-in');
                void active.offsetWidth;
                active.classList.add('slide-in');
            }
            dots.forEach((d, i) => {
                d.classList.toggle('is-active', i === cur - 1);
                d.classList.toggle('is-done', i < cur - 1);
            });
            if (bar) bar.style.width = (cur / total * 100) + '%';
            if (counter) counter.textContent = cur;
            if (prevBtn) prevBtn.hidden = cur === 1;
            const last = cur === total;
            if (nextBtn) nextBtn.hidden = last;
            if (submitBtn) submitBtn.hidden = !last;
        }

        function go(step, dir) { cur = Math.min(total, Math.max(1, step)); render(dir); }

        nextBtn && nextBtn.addEventListener('click', () => { if (validate(cur)) go(cur + 1, true); });
        prevBtn && prevBtn.addEventListener('click', () => go(cur - 1, true));
        dots.forEach((d, i) => d.addEventListener('click', () => { if (i + 1 <= cur || validate(cur)) go(i + 1, true); }));

        // Enter advances steps instead of submitting early (except on the last step / textarea)
        form.addEventListener('keydown', e => {
            if (e.key !== 'Enter') return;
            if (e.target.tagName === 'TEXTAREA') return;
            if (cur < total) { e.preventDefault(); if (validate(cur)) go(cur + 1, true); }
        });

        window.NewStageWizard = {
            last() { go(total, true); },
            reset() { go(1, false); },
            go(n) { go(n, true); }
        };

        render(false);
    }

    /* ---- AI results: animate rings via render hook ---- */
    function initAiObserver() {
        window.onAiRendered = function () {
            const result = document.getElementById('ai-result');
            if (result) initRingsOnView(result);
        };
    }

    /* ---- Compare: add a plain-language "best pick" verdict ---- */
    function formatRub(n) { return n === 0 ? 'бюджет' : n.toLocaleString('ru-RU') + ' ₽'; }

    function injectVerdict() {
        const content = document.getElementById('compare-content');
        const summary = document.getElementById('compare-summary');
        if (!content || !summary) return;

        const list = (typeof compareList !== 'undefined') ? compareList : [];
        const existing = document.querySelector('.compare-verdict');

        if (content.classList.contains('hidden') || list.length < 2) {
            if (existing) existing.remove();
            return;
        }

        const bestRating = list.reduce((a, b) => (b.rating > a.rating ? b : a));
        const cheapest = list.reduce((a, b) => (b.price < a.price ? b : a));
        let verdict;
        if (bestRating.id === cheapest.id) {
            verdict = `<b>${bestRating.name}</b> — и самый высокий рейтинг, и самая доступная стоимость в списке.`;
        } else {
            verdict = `Выше рейтинг у <b>${bestRating.name}</b> (${bestRating.rating.toFixed(1)}), дешевле обучение у <b>${cheapest.name}</b> (${formatRub(cheapest.price)}). Сопоставьте с проходным ориентиром и дорогой.`;
        }

        let node = existing;
        if (!node) {
            node = document.createElement('div');
            node.className = 'compare-verdict';
            summary.insertAdjacentElement('afterend', node);
        }
        node.innerHTML = `
            <span class="verdict-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
            </span>
            <p>${verdict}</p>`;
    }

    function initCompareVerdict() {
        window.onCompareRendered = injectVerdict;
        injectVerdict();
    }

    function boot() {
        window.__enhanceLoaded = true;
        initScrollProgress();
        initCountUp();
        initBars();
        initRingsOnView(document);
        initTilt();
        initSpotlight();
        initDirFilter();
        initWizard();
        initAiObserver();
        initCompareVerdict();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
