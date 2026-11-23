(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
var W=['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven'];
function words(h,m){var n=W[h%12],nx=W[(h+1)%12];if(m===0)return 'It is '+n+' o’clock.';if(m===15)return 'It is quarter past '+n+'.';if(m===30)return 'It is half past '+n+'.';if(m===45)return 'It is quarter to '+nx+'.';
 var num=['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty','twenty-one','twenty-two','twenty-three','twenty-four','twenty-five','twenty-six','twenty-seven','twenty-eight','twenty-nine'];
 if(m<30)return 'It is '+num[m]+' minute'+(m>1?'s':'')+' past '+n+'.';var r=60-m;return 'It is '+num[r]+' minute'+(r>1?'s':'')+' to '+nx+'.';}
var ticks=[].slice.call(document.querySelectorAll('.mn-hero-d .tk')),hb=$('hd-bar');
function live(){var d=new Date(),h=d.getHours(),m=d.getMinutes(),s=d.getSeconds();ticks.forEach(function(t,i){t.classList.toggle('on',i<=s);});
 var mm=$('mm'),hm=$('hm');if(mm){mm.setAttribute('transform','rotate('+((m+s/60)*6)+' 200 200)');hm.setAttribute('transform','rotate('+(((h%12)+m/60)*30)+' 200 200)');}
 var nw=$('now');if(nw)nw.textContent=words(h,m);if(hb)hb.style.width=(s/59*100)+'%';var ct=$('ct-t');if(ct)ct.textContent=(h<10?'0':'')+h+':'+(m<10?'0':'')+m+':'+(s<10?'0':'')+s;}
live();setInterval(live,1000);
var ss=[].slice.call(document.querySelectorAll('.mn-sw-s')),sim=[].slice.call(document.querySelectorAll('.mn-sw-im')),sc=$('sw-c'),T=['00:00','00:15','00:30','00:45','01:00'];
if(ss.length&&'IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var i=+e.target.getAttribute('data-i');ss.forEach(function(x,j){x.classList.toggle('on',j===i);});sim.forEach(function(x,j){x.classList.toggle('on',j===i);});if(sc)sc.textContent=T[i];}});},{rootMargin:'-45% 0px -45% 0px'});ss.forEach(function(s){io.observe(s);});}else ss.forEach(function(s){s.classList.add('on');});
var rs=$('rd-s');if(rs){function rd(){var v=+rs.value,h=Math.floor(v/60),m=v%60;$('rd-o').textContent=(h===0?12:h)+':'+(m<10?'0':'')+m;$('rd-m').setAttribute('transform','rotate('+(m*6)+' 200 200)');$('rd-h').setAttribute('transform','rotate('+((h+m/60)*30)+' 200 200)');$('rd-w').textContent=words(h,m);}rs.addEventListener('input',rd);rd();}
var ds=$('dr-s');if(ds){var mv=[].slice.call(document.querySelectorAll('input[name=mv]'));function f(x){var a=Math.abs(x),s=x<0?'−':'+';if(a<60)return s+Math.round(a)+' s';if(a<3600)return s+(a/60).toFixed(1)+' min';return s+(a/3600).toFixed(1)+' h';}
 function dr(){var q=false;mv.forEach(function(e){if(e.checked&&e.value==='q')q=true;});var r=q?(+ds.value)/30:+ds.value;$('dr-o').textContent=(q?(r>=0?'+':'−')+Math.abs(r).toFixed(1):(r>0?'+':'')+r)+' s';
  var verdict=q?'Quartz usually drifts about half a second a day. Set it a few times a year.':Math.abs(r)<=5?'Excellent: chronometer territory for a mechanical watch.':Math.abs(r)<=15?'Normal for a good mechanical watch. Reset it every week or two.':'On the high side. A watchmaker can regulate it, or it may be magnetised.';
  $('dr-r').innerHTML='<div><b>'+f(r*7)+'</b><span>after a week</span></div><div><b>'+f(r*30)+'</b><span>after a month</span></div><div><b>'+f(r*365)+'</b><span>after a year</span></div><p>'+verdict+'</p>';}
 ds.addEventListener('input',dr);mv.forEach(function(e){e.addEventListener('change',dr);});dr();}
})();
