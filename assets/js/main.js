const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme') || 'dark';
if(saved === 'light'){ root.classList.add('light'); }
toggle?.addEventListener('click', ()=>{
  root.classList.toggle('light');
  localStorage.setItem('theme', root.classList.contains('light') ? 'light' : 'dark');
});
document.getElementById('year').textContent = new Date().getFullYear();
