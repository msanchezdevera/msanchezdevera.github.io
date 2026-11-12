const root=document.documentElement;
const toggle=document.querySelector('.theme-toggle');
const stored=localStorage.getItem('theme');
const preferred=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
root.dataset.theme=stored||preferred;

toggle?.addEventListener('click',()=>{
  root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
  localStorage.setItem('theme',root.dataset.theme);
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('#year').textContent=new Date().getFullYear();
