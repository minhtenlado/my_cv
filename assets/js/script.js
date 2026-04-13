// ── LANGUAGE SWITCHER ──
function setLang(lang) {
    document.querySelectorAll('[data-vi]').forEach(el => {
        el.innerHTML = el.getAttribute('data-' + lang) || el.innerHTML;
    });
    document.getElementById('btn-vi').classList.toggle('active', lang === 'vi');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');

    // Persist preference
    localStorage.setItem('cv-lang', lang);
}

// ── ON PAGE LOAD ──
document.addEventListener('DOMContentLoaded', () => {
    // Restore saved language preference
    const saved = localStorage.getItem('cv-lang');
    if (saved && saved !== 'vi') {
        setLang(saved);
    }
});
