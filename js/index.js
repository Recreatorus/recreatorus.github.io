let log = console.log;
document.onreadystatechange = function () {
  'complete' == document.readyState &&
    (console.group('Status:'),
    log('Loading: %c%s', 'padding: 2px 5px; background-color: #7bd235; color: #fff', document.readyState),
    console.groupEnd());
};
const darkModeToggleBtn = document.getElementById('dark-mode-toggle');
let theme = localStorage.getItem('theme');
function enableDarkMode() {
  localStorage.setItem('theme', 'dark'), document.body.classList.add('dark-mode');
}
function disableDarkMode() {
  localStorage.setItem('theme', 'light'), document.body.classList.remove('dark-mode');
}
'dark' === theme && enableDarkMode(),
  darkModeToggleBtn.addEventListener('click', () => {
    'dark' === (theme = localStorage.getItem('theme')) ? disableDarkMode() : enableDarkMode();
  }),
  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));
var iRow,
  menuLink = document.querySelectorAll('.nav__item-text');
menuLink.forEach((e) => {
  e.addEventListener('click', () => {
    setTimeout(() => {
      s();
    }, 5);
  });
  function s() {
    history.replaceState('', document.title, window.location.origin + window.location.pathname);
  }
});
const images = document.querySelectorAll('.project-link img');
async function supportsAvif() {
  if (!this.createImageBitmap) return !1;
  let e = await fetch(
    'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
  ).then((e) => e.blob());
  return createImageBitmap(e).then(
    () => !0,
    () => !1
  );
}
(async () => {
  let e = (await supportsAvif()) ? 'avif' : 'jpg';
  (await supportsAvif())
    ? console.log(`%cYour browser supports ${e}-image format`, 'color: green;')
    : console.log('%cYour browser does not support AVIF-image format', 'color: darkred;'),
    images.forEach((s) => {
      (s.dataset.src = `${s.dataset.src}.${e}`), (s.src = `img/${s.dataset.src}`);
    });
})(),
  document.addEventListener('DOMContentLoaded', function () {
    if ('loading' in HTMLImageElement.prototype) console.log('%cYour browser supports Loading = Lazy', 'color: green;');
    else {
      console.log('%cYour browser does not support Loading = Lazy', 'color: darkred;');
      let e = new IntersectionObserver((e) => {
        e.forEach((e) => {
          !0 === e.isIntersecting
            ? (e.target.querySelector('.project-link img'), e.target.classList.add('in-view'))
            : e.target.classList.remove('in-view');
        });
      });
      imgParent.forEach((s, r) => {
        e.observe(s, r);
      });
    }
  });
class Typewriter {
  constructor(e, s, r, A, o) {
    (this.el = e),
      (e.innerHTML = ''),
      this.el.setAttribute('aria-label', o),
      this.el.setAttribute('role', 'marquee'),
      (this.speed = parseInt(s) || 300),
      (this.pause = parseInt(r) || 12),
      (this.pausing = 0),
      (this.textArray = A),
      (this.text = ''),
      (this.index = 0),
      (this.appending = !0);
    let a = document.createElement('SPAN');
    a.setAttribute('aria-hidden', 'true'),
      (a.id = 'textSpan'),
      this.el.appendChild(a),
      (this.textSpan = a),
      (this.started = !1);
  }
  start() {
    (this.started = !0), this.doLoop();
  }
  stop() {
    this.started = !1;
  }
  doLoop() {
    this.started &&
      (this.appending
        ? (this.text === this.textArray[this.index]
            ? ((this.appending = !1), (this.pausing = this.pause))
            : ((this.text += this.textArray[this.index].charAt(this.text.length)),
              (this.textSpan.textContent = this.text)),
          setTimeout(() => {
            this.doLoop();
          }, this.speed))
        : ('' === this.text
            ? ((this.appending = !0), (this.index = (this.index + 1) % this.textArray.length))
            : 0 == this.pausing
            ? ((this.text = this.text.substring(0, this.text.length - 1)), (this.textSpan.textContent = this.text))
            : this.pausing--,
          setTimeout(() => {
            this.doLoop();
          }, this.speed / 2.7)));
  }
}
let el = document.querySelector('.switch'),
  t = new Typewriter(
    el,
    el.dataset.speed,
    el.dataset.pause,
    JSON.parse(el.dataset.text),
    [...new Set(JSON.parse(el.dataset.text))].reduce((e, s) => e + ', and ' + s.trim(), '')
  );
t.start();
var aText = ['Hey! Glad to welcome on my page.', 'I`m a beginner frontend developer'],
  iSpeed = 50,
  iIndex = 0,
  iArrLength = aText[1].length,
  iScrollAt = 20,
  iTextPos = 0,
  sContents = '';
function typewriter() {
  (sContents = ' '), (iRow = Math.max(0, iIndex - iScrollAt));
  for (var e = document.getElementById('typedtext'); iRow < iIndex; ) sContents += aText[iRow++] + '<br />';
  (e.innerHTML = sContents + aText[iIndex].substring(0, iTextPos)),
    iTextPos++ == iArrLength
      ? ((iTextPos = 0),
        ++iIndex != aText.length && ((iArrLength = aText[iIndex].length), setTimeout('typewriter()', 100)))
      : setTimeout('typewriter()', iSpeed);
}
typewriter();
const progressBlock = document.querySelector('.progress-wrap'),
  progressScroll = document.querySelector('.progress-wrap path');
let length = progressScroll.getTotalLength();
function scrollIndicator() {
  document.body.scrollTop > 150 || document.documentElement.scrollTop > 150
    ? progressBlock.classList.add('active')
    : progressBlock.classList.remove('active');
  let e =
    (document.body.scrollTop + document.documentElement.scrollTop) /
    (document.documentElement.scrollHeight - document.documentElement.clientHeight);
  progressScroll.style.strokeDashoffset = length - length * e;
}
(progressScroll.style.strokeDasharray = length),
  (progressScroll.style.strokeDashoffset = length),
  window.addEventListener('scroll', scrollIndicator),
  progressBlock.addEventListener('click', (e) => {
    e.preventDefault(), window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  });
const tabs = document.querySelectorAll('.tab');
tabs.forEach((e) => {
  e.addEventListener('click', () => {
    tabs.forEach((e) => {
      e.classList.remove('active');
    }),
      e.classList.add('active');
  });
});
