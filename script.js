// Mobile nav & small enhancements
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
if (burger && nav){
  burger.addEventListener('click', () => {
    const open = nav.style.display === 'flex';
    nav.style.display = open ? 'none' : 'flex';
    burger.setAttribute('aria-expanded', String(!open));
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

// Simple cookie notice (technisch notwendige Cookies only)
const cookie = document.getElementById('cookie');
const ok = document.getElementById('cookie-ok');
if (cookie && ok){
  if (!localStorage.getItem('cookie-ok')) cookie.classList.add('show');
  ok.addEventListener('click', () => {
    localStorage.setItem('cookie-ok','1');
    cookie.classList.remove('show');
  });
}

// Progressive enhancement for contact form: fallback to mailto
const form = document.querySelector('form[data-enhanced]');
if (form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent('Kontakt über Website');
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\nE-Mail: ${data.get('email')}\n\nNachricht:\n${data.get('nachricht')}`
    );
    window.location.href = `mailto:berens.svb@gmail.com?subject=${subject}&body=${body}`;
  });
}
