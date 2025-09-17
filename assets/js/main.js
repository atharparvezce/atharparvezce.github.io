const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'light';
if(saved === 'light'){ root.classList.add('light'); } else { root.classList.remove('light'); }
toggle?.addEventListener('click', ()=>{
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});
document.getElementById('year').textContent = new Date().getFullYear();
