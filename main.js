// Teemamuisti ja -vaihto
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storageKey = 'theme';
const saved = localStorage.getItem(storageKey);
if (saved === 'light') document.documentElement.classList.add('light');
if (!saved && !prefersDark) document.documentElement.classList.add('light');

document.getElementById('themeToggle').addEventListener('click',()=>{
  document.documentElement.classList.toggle('light');
  localStorage.setItem(storageKey, document.documentElement.classList.contains('light')?'light':'dark');
});

// Mobiilivalikko
const menuBtn = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click',()=> nav.classList.toggle('show'));

// Sulava vieritys
for (const link of document.querySelectorAll('a[href^="#"]')){
  link.addEventListener('click', e=>{
    const targetId = link.getAttribute('href').substring(1);
    const el = document.getElementById(targetId);
    if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth'}); nav.classList.remove('show'); }
  });
}

// Yksinkertainen lomakkeen käsittely (demo)
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  msg.textContent = 'Kiitos viestistäsi! (Tämä on demolomake ilman taustapalvelua)';
  form.reset();
});

// Vuosi footerissa
document.getElementById('year').textContent = new Date().getFullYear();
