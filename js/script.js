async function supportsAvif() {
  if (!this.createImageBitmap) return !1;
  const e =
      'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=',
    t = await fetch(e).then((e) => e.blob());
  return createImageBitmap(t).then(
    () => !0,
    () => !1
  );
}
function nextSlide() {
  (slides[currentSlide].className = 'ticker-item'),
    (currentSlide = (currentSlide + 1) % slides.length),
    setTimeout(function () {
      slides[currentSlide].classList.add('current');
    }, 500);
}
function setMouseCoords(e) {
  (mouse.x = e.clientX), (mouse.y = e.clientY);
}
function animateText() {
  (mouseStored.x === mouse.x && mouseStored.y === mouse.y) ||
    ((mousePercent.x = getPercentage(mouse.x, screen.width)),
    (mousePercent.y = getPercentage(mouse.y, screen.height)),
    (mousePercent.xCenter = getPercentage(mouse.x - center.x, center.x)),
    (mousePercent.yCenter = getPercentage(mouse.y - center.y, center.y)),
    varText.style.setProperty('--fontWght', Math.abs(400 * mousePercent.yCenter) + 375),
    varText.style.setProperty('--fontYOPQ', Math.abs(65 * mousePercent.x) + 20),
    varText.style.setProperty('--fontYTAS', Math.abs(205 * mousePercent.xCenter) + 649),
    varText.style.setProperty('--fontYTLC', Math.abs(80 * mousePercent.y) + 470),
    (mouseStored.x = mouse.x),
    (mouseStored.y = mouse.y));
}
function debounce(e, t, A) {
  var r;
  return function () {
    var o = this,
      n = arguments,
      c = function () {
        (r = null), A || e.apply(o, n);
      },
      a = A && !r;
    clearTimeout(r), (r = setTimeout(c, t)), a && e.apply(o, n);
  };
}
function getPercentage(e, t) {
  return e / t;
}
const toggle = document.getElementById('toggle'),
  nav = document.getElementById('nav');
toggle.addEventListener('click', () => nav.classList.toggle('active'));
var menuLink = document.querySelectorAll('.nav__item-text');
menuLink.forEach((e) => {
  function t() {
    history.replaceState('', document.title, window.location.origin + window.location.pathname);
  }
  e.addEventListener('click', () => {
    setTimeout(() => {
      t();
    }, 5);
  });
});
const images = document.querySelectorAll('.card img');
(async () => {
  const e = (await supportsAvif()) ? 'avif' : 'jpg';
  (await supportsAvif())
    ? console.log(`%cYour browser supports ${e}-image format`, 'color: green;')
    : console.log('%cYour browser does not support AVIF-image format', 'color: darkred;'),
    images.forEach((t) => {
      (t.dataset.src = `${t.dataset.src}.${e}`), (t.src = `https://recreatorus.github.io/img/${t.dataset.src}`);
    });
})();
var slides = document.querySelectorAll('#ticker .ticker-item'),
  currentSlide = 0,
  slideInterval = setInterval(nextSlide, 2500);
const varText = document.querySelector('.hero-title');
let isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)'),
  screen = { width: window.innerWidth, height: window.innerHeight },
  center = { x: screen.width / 2, y: screen.height / 2 },
  mouse = { x: 0, y: 0 },
  mousePercent = { x: 0, y: 0, xCenter: 0, yCenter: 0 },
  mouseStored = Object.assign({}, mouse);
isAnimationOk &&
  window.addEventListener(
    'mousemove',
    debounce(function (e) {
      setMouseCoords(e), animateText();
    }, 5)
  );
const { ScrollObserver: ScrollObserver, valueAtPercentage: valueAtPercentage } = aat,
  cardsContainer = document.querySelector('.cards'),
  cards = document.querySelectorAll('.card');
cardsContainer.style.setProperty('--cards-count', cards.length),
  cardsContainer.style.setProperty('--card-height', `${cards[0].clientHeight}px`),
  Array.from(cards).forEach((e, t) => {
    if (t === cards.length - 1) return;
    const A = 1 - 0.1 * (cards.length - 1 - t),
      r = cards[t + 1],
      o = e.querySelector('.card__inner');
    ScrollObserver.Element(r, { offsetBottom: window.innerHeight - e.clientHeight }).onScroll(({ percentageY: e }) => {
      (o.style.scale = valueAtPercentage({ from: 1, to: A, percentage: e })),
        (o.style.filter = `brightness(${valueAtPercentage({ from: 1, to: 0.75, percentage: e })})`);
    });
  });
const audioFile = './media/click.mp3',
  audio = new Audio(audioFile),
  audioMode = document.querySelector('.audio-mode'),
  audioClick = document.querySelectorAll('.audio-click');
audioMode.addEventListener('click', () => {
  audioMode.classList.toggle('audio-off'),
    audioMode.classList.contains('audio-off') ? (audio.volume = 0) : (audio.volume = 1);
}),
  audioClick.forEach((e) => {
    (audio.currentTime = 0.25),
      e.addEventListener('click', (e) => {
        audio.play();
      });
  });
