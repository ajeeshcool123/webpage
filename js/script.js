const facts = [
  'Der erste dokumentierte Fußball wurde im 19. Jahrhundert in England gespielt.',
  'Ein Fußballspiel dauert regulär 90 Minuten plus Nachspielzeit.',
  'Das Wembley-Stadion ist eines der berühmtesten Fußballstadien der Welt.',
  'Pelé gewann drei WM-Titel — eine rekordverdächtige Leistung.'
];

function randomFact(){
  const el = document.getElementById('fact');
  const idx = Math.floor(Math.random()*facts.length);
  el.textContent = facts[idx];
}

document.addEventListener('DOMContentLoaded',()=>{
  const btn = document.getElementById('newFact');
  btn.addEventListener('click',randomFact);

  const themeToggle = document.getElementById('themeToggle');
  const current = localStorage.getItem('theme');
  if(current === 'dark') document.body.classList.add('dark');
  themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});
