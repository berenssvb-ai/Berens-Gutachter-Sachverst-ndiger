function handleImgError(img) {
  var src = img.getAttribute('src') || '';
  var name = src.split('/').pop();
  var div = document.createElement('div');
  div.className = 'img-placeholder';
  var ratio = img.getAttribute('data-ratio');
  if (ratio) { div.style.aspectRatio = ratio; }
  div.textContent = 'Bild folgt: ' + name;
  if (img.parentNode) { img.parentNode.replaceChild(div, img); }
}

(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
})();

document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
