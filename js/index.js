let a=console.log;document.onreadystatechange=()=>document.readyState=='complete'&&(console.group('Status:'),a('Loading: %c%s','padding: 2px 5px; background-color: #7bd235; color: #fff',document.readyState),console.groupEnd());var b=document.getElementById('dark-mode-toggle'),f=document.querySelectorAll('.nav__item-text'),g=document.querySelectorAll('.project-link img'),l=Array('Hey! Glad to welcome on my page.','I`m a beginner frontend developer'),m=50,n=0,o=l[1].length,p=20,q=0,r='',s,u=document.querySelector('.progress-wrap'),v=document.querySelector('.progress-wrap path'),y=document.querySelectorAll('.tab');let c=localStorage.getItem('theme');c=='dark'&&d();b.addEventListener('click',()=>{c=localStorage.getItem('theme');c=='dark'?e():d()});function d(){localStorage.setItem('theme','dark');document.body.classList.add('dark-mode')}function e(){localStorage.setItem('theme','light');document.body.classList.remove('dark-mode')}window.matchMedia('(prefers-color-scheme: dark)').addListener(e=>(e.matches?d():e()));for(const _ of f){_.addEventListener('click',()=>setTimeout(()=>B(),5));function B(){history.replaceState('',document.title,window.location.origin+window.location.pathname)}}async function h(){if(!this.createImageBitmap)return!1;return createImageBitmap(await fetch('data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=').then(r=>r.blob())).then(()=>!0,()=>!1)}(async ()=>{var _=await h()?'avif':'jpg';await h()?console.log(`%cYour browser supports ${_}-image format`,'color: green;'):console.log(`%cYour browser does not support AVIF-image format`,'color: darkred;');for(const B of g){B.dataset.src=`${B.dataset.src}.${_}`;B.src=`img/${B.dataset.src}`}})();document.addEventListener('DOMContentLoaded',function(){if('loading' in HTMLImageElement.prototype)console.log('%cYour browser supports Loading = Lazy','color: green;');else{console.log('%cYour browser does not support Loading = Lazy','color: darkred;');var _=new IntersectionObserver(B=>{for(const C of B)C.isIntersecting?C.target.classList.add('in-view'):C.target.classList.remove('in-view')});for(const[B,C] of imgParent.entries())_.observe(C,B)}});class Typewriter{constructor(_,B,C,D,E){this.el=_;_.innerHTML='';this.el.setAttribute('aria-label',E);this.el.setAttribute('role','marquee');this.speed=parseInt(B)||300;this.pause=parseInt(C)||12;this.pausing=0;this.textArray=D;this.text='';this.index=0;this.appending=!0;let F=document.createElement('SPAN');F.setAttribute('aria-hidden','true');F.id='textSpan';this.el.appendChild(F);this.textSpan=F;this.started=!1}start(){this.started=!0;this.doLoop()}stop(){this.started=!1}doLoop(){if(this.started)if(this.appending){this.text==this.textArray[this.index]?(this.appending=!1,this.pausing=this.pause):(this.text+=this.textArray[this.index].charAt(this.text.length),this.textSpan.textContent=this.text);setTimeout(()=>this.doLoop(),this.speed)}else{if(this.text==''){this.appending=!0;this.index=(this.index+1)%this.textArray.length} else if(!this.pausing){this.text=this.text.substring(0,this.text.length-1);this.textSpan.textContent=this.text}else this.pausing--;setTimeout(()=>this.doLoop(),this.speed/2.7)}}}let j=document.querySelector('.switch');let t=new Typewriter(j, j.dataset.speed, j.dataset.pause, JSON.parse(j.dataset.text), [...new Set(JSON.parse(j.dataset.text))].reduce((acc,curr)=>acc+', and '+curr.trim(),''));t.start();function A(){r=' ';s=Math.max(0,n-p);var _=document.getElementById('typedtext');while (s<n)r+=l[s++]+'<br />';_.innerHTML=r+l[n].substring(0,q);if(q++==o){q=0;n++;n!=l.length&&(o=l[n].length,setTimeout('typewriter()',100))}else setTimeout('typewriter()',m)}A();let w=v.getTotalLength();v.style.strokeDasharray=w;v.style.strokeDashoffset=w;window.addEventListener('scroll',x);function x(){document.body.scrollTop>150||document.documentElement.scrollTop>150?u.classList.add('active'):u.classList.remove('active');let _=(document.body.scrollTop+document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight);let B=w*_;v.style.strokeDashoffset=w-B}u.addEventListener('click',e=>{e.preventDefault();window.scroll({top:0,left:0,behavior:'smooth'})});for(const _ of y)_.addEventListener('click',()=>{for(const B of y)B.classList.remove('active');_.classList.add('active')});
