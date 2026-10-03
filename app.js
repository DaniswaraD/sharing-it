const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rid=()=>Math.random().toString(36).slice(2,9),cl=(v,a,b)=>Math.min(b,Math.max(a,v));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const LS={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};

(()=>{
  let raf=null;
  addEventListener('pointermove',e=>{
    if(raf)return;
    raf=requestAnimationFrame(()=>{
      document.documentElement.style.setProperty('--mx',e.clientX+'px');
      document.documentElement.style.setProperty('--my',e.clientY+'px');
      raf=null;
    });
  },{passive:true});
})();

const I={
  back:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
  undo:'<path d="M3 7v6h6M3 13a9 9 0 0 1 15-6.7L21 9"/>',
  redo:'<path d="M21 7v6h-6M21 13a9 9 0 0 0-15-6.7L3 9"/>',
  dl:'<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/>',
  x:'<path d="M18 6L6 18M6 6l12 12"/>',
  img:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
  type:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
  shape:'<rect x="3" y="11" width="10" height="10" rx="1"/><circle cx="16" cy="8" r="5"/>',
  smile:'<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>',
  cv:'<rect x="3" y="5" width="18" height="14" rx="2"/>',
  layers:'<path d="M12 2L2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>',
  heart:'<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z"/>',
  msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  send:'<path d="M22 2L11 13M22 2l-7 20-4-9-9-4z"/>',
  trash:'<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  dn:'<path d="M12 5v14M19 12l-7 7-7-7"/>',
  ctr:'<circle cx="12" cy="12" r="3"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/>',
  eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
  eyeoff:'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><path d="M1 1l22 22"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  unlock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>',
  align:'<path d="M3 3v18M7 8h13M7 16h9"/>',
  sparkle:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>'
};
const ic=(n,z=18)=>`<svg class="i" width="${z}" height="${z}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">${I[n]||''}</svg>`;

const RATIOS={'1:1':[1080,1080],'4:5':[1080,1350],'3:2':[1080,720],'16:9':[1080,608],'9:16':[1080,1920],'2:3':[1080,1620],'5:4':[1080,864],'21:9':[1080,463]};
const FONTS=['Inter','Bricolage Grotesque','Playfair Display','DM Serif Display','Lora','Space Grotesk','Bebas Neue','Caveat','JetBrains Mono'];
const COL=['#171717','#ffffff','#a3a3a3','#be185d','#0369a1','#15803d','#ca8a04','#7e22ce','#dc2626','#ea580c'];
const BGS=['#ffffff','#f5f5f5','#fdf2f8','#eff6ff','#fef9c3','#f0fdf4','#171717','#1e293b'];
const GRADS=[['#fda4af','#fdba74'],['#a5b4fc','#f0abfc'],['#6ee7b7','#7dd3fc'],['#0f172a','#475569'],['#f97316','#db2777'],['#fef08a','#fca5a5'],['#22d3ee','#3b82f6'],['#111827','#4b5563']];
const EMO={
  'Umum':'😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🥳🤩😏😒😞😔😟😕🙁😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕',
  'Simbol':'❤️🧡💛💚💙💜🖤🤍🤎💔❣️💕💞💓💗💖💘💝💟✨⭐🌟💫⚡🔥💥💯✅❌⭕❗❓‼️⁉️🔔🎵🎶💤💢💦💨💬👑🏆🥇🎖️🎀🎁🎈🎉🎊',
  'Alam':'🌸💮🏵️🌹🥀🌺🌻🌼🌷🌱🌲🌳🌴🌵🌾🌿☘️🍀🍁🍂🍃🍄🐚🌎🌍🌏🌕🌖🌗🌘🌑🌒🌓🌔🌙🌚🌝🌞⭐🌟☀️⛅☁️🌧️⛈️❄️☃️⛄🌈☔💧🌊',
  'Makanan':'🍎🍐🍊🍋🍌🍉🍇🍓🍈🍒🍑🥭🍍🥥🥝🍅🥑🥦🥕🌽🌶️🥒🥬🧄🧅🥔🍠🥐🥯🍞🥖🧀🥚🍳🥞🧇🥓🥩🍗🍖🌭🍔🍟🍕🥪🌮🌯🥙🧆🍜🍝🍣🍱🍤🍚🍛🍲🥘🍢🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍿🍩🍪☕🍵🍺🥤',
  'Hewan':'🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐞🐜🦟🦗🕷️🕸️🐢🐍🦎🦂🦀🦞🦐🦑🐙🐠🐟🐡🐬🦈🐳🐋'
};
const SH={
  rect:{n:'Persegi',p:()=>'M0,0H100V100H0Z'},
  round:{n:'Membulat',p:r=>`M${r},0H${100-r}A${r},${r} 0 0 1 100,${r}V${100-r}A${r},${r} 0 0 1 ${100-r},100H${r}A${r},${r} 0 0 1 0,${100-r}V${r}A${r},${r} 0 0 1 ${r},0Z`},
  circle:{n:'Lingkaran',p:()=>'M50,0A50,50 0 1 0 50,100A50,50 0 1 0 50,0Z'},
  ellipse:{n:'Elips',p:()=>'M50,6A50,44 0 1 0 50,94A50,44 0 1 0 50,6Z'},
  tri:{n:'Segitiga',p:()=>'M50,2L98,96H2Z'},
  dia:{n:'Belah ketupat',p:()=>'M50,0L100,50L50,100L0,50Z'},
  star:{n:'Bintang',p:()=>'M50,1L61,36H98L68,58L79,94L50,72L21,94L32,58L2,36H39Z'},
  hex:{n:'Segi enam',p:()=>'M25,2H75L100,50L75,98H25L0,50Z'},
  pent:{n:'Segi lima',p:()=>'M50,2L98,38L80,96H20L2,38Z'},
  heart:{n:'Hati',p:()=>'M50,95C10,65 -8,35 12,15C30,-2 48,10 50,26C52,10 70,-2 88,15C108,35 90,65 50,95Z'},
  arrow:{n:'Panah',p:()=>'M0,34H58V8L100,50L58,92V66H0Z'},
  bubble:{n:'Balon',p:()=>'M12,0H88A12,12 0 0 1 100,12V64A12,12 0 0 1 88,76H46L22,100V76H12A12,12 0 0 1 0,64V12A12,12 0 0 1 12,0Z'},
  plus:{n:'Plus',p:()=>'M36,0H64V36H100V64H64V100H36V64H0V36H36Z'},
  moon:{n:'Bulan',p:()=>'M62,0A50,50 0 1 0 62,100A40,40 0 1 1 62,0Z'},
  bolt:{n:'Petir',p:()=>'M58,0L8,56H44L38,100L92,42H54Z'},
  shield:{n:'Perisai',p:()=>'M50,0L100,18V48C100,78 76,94 50,100C24,94 0,78 0,48V18Z'},
  ring:{n:'Cincin',p:()=>'M50,0A50,50 0 1 0 50,100A50,50 0 1 0 50,0ZM50,22A28,28 0 1 1 50,78A28,28 0 1 1 50,22Z'},
  blob:{n:'Blob',p:()=>'M78,10C92,22 100,40 96,58C92,76 78,90 60,95C42,100 22,94 12,80C2,66 0,44 8,28C16,12 34,4 50,3C66,2 68,4 78,10Z'},
  cross:{n:'Silang',p:()=>'M22,0L50,28L78,0L100,22L72,50L100,78L78,100L50,72L22,100L0,78L28,50L0,22Z'}
};
const FD={br:100,co:100,sa:100,bl:0,gr:0,se:0,hu:0,inv:0};
const PRE={'Asli':{},'Hitam putih':{gr:100},'Sepia':{se:80},'Vivid':{sa:165,co:118},'Pudar':{co:85,br:112,sa:78},'Hangat':{se:32,sa:128,br:106},'Dingin':{hu:190,sa:118},'Dramatis':{br:86,co:138,sa:88},'Neon':{sa:200,co:125,hu:300},'Film':{co:112,se:22,gr:12}};
const THEMES=['mono','pink','sky','dark'],TC={mono:'#e9eefb',pink:'#fbe9f4',sky:'#e6f1fb',dark:'#07070d'};
const BLENDS=['normal','multiply','screen','overlay','darken','lighten','color-dodge','difference','hue','saturation','luminosity'];
const MAX=700*1024;

const S={nick:LS.get('si_nick')||'',user:null,scr:'home',tool:'cv',els:[],sel:null,ratio:'1:1',
  bg:{type:'solid',a:'#ffffff',b:'#e5e7eb',ang:135,pat:'none',patC:'#111827',patS:48},
  hist:[],fut:[],posts:[],open:new Set(),lim:8,lastLike:0,lastCmt:0,key:'',shown:false,pk:null,
  lastTap:0,tapTarget:null};

let K=1,drag=null;
const map=new Map(),stg=$('#stg'),SW=$('#sw'),P=$('#pn'),FS=$('#fs');
const dims=()=>{const r=RATIOS[S.ratio];return{w:r[0],h:r[1]}};
const cur=()=>S.els.find(e=>e.id===S.sel),get=id=>S.els.find(e=>e.id===id);

function toast(m,t=2400){
  const e=$('#ts');e.textContent=m;e.classList.add('on');
  clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('on'),t);
}
const ld=on=>$('#ld').classList.toggle('on',!!on);
const modal=h=>{clearTimeout(closeM.t);$('#md').classList.remove('out');$('#mc').innerHTML=h;$('#md').classList.add('on')};
const closeM=()=>{const m=$('#md');m.classList.add('out');closeM.t=setTimeout(()=>m.classList.remove('on','out'),450)};
function setTheme(t){
  document.documentElement.dataset.theme=t;LS.set('si_theme',t);
  $('meta[name=theme-color]').content=TC[t];
  $$('.dot').forEach(d=>d.classList.toggle('on',d.dataset.th===t));
  $('#thl').textContent=t;
}
const theme=()=>document.documentElement.dataset.theme;
const ORD={home:0,feed:1,editor:2};
function go(n){
  const was=S.scr;if(n===was)return;
  S.scr=n;
  const sw=()=>{
    $$('.scr').forEach(s=>s.classList.toggle('on',s.id==='s-'+n));
    if(n==='feed')feedOn();
    if(n==='editor'){fit();panel()}
  };
  document.documentElement.dataset.nav=ORD[n]>ORD[was]?'fwd':'back';
  if(was==='feed')feedOff();
  if(document.startViewTransition){
    document.startViewTransition(sw);
    setTimeout(()=>document.documentElement.dataset.nav='',1200);
  }else sw();
}

const ent=()=>({els:S.els.map(e=>({...e})),bg:{...S.bg},ratio:S.ratio});
const sg=e=>JSON.stringify([e.els.map(x=>({...x,src:0})),e.bg,e.ratio]);
function snap(){const e=ent();e.sig=sg(e);const l=S.hist[S.hist.length-1];if(l&&sg(l)===e.sig)return;
  S.hist.push(e);if(S.hist.length>50)S.hist.shift();S.fut=[];hb()}
function undo(){const c=ent(),cs=sg(c);let e;while((e=S.hist.pop())&&sg(e)===cs);
  if(!e)return toast('Tidak ada');S.fut.push(c);restore(e)}
function redo(){const e=S.fut.pop();if(!e)return;S.hist.push(ent());restore(e)}
function restore(e){S.els=e.els.map(x=>({...x}));S.bg={...e.bg};if(e.ratio)S.ratio=e.ratio;S.sel=null;rebuild();fit();panel()}

function patCSS(b){
  const c=b.patC,s=Math.max(8,b.patS);
  switch(b.pat){
    case 'dots':return `radial-gradient(circle at 50% 50%, ${c} ${s*0.09}px, transparent ${s*0.1}px) 0 0/${s}px ${s}px`;
    case 'grid':return `linear-gradient(${c} 1.5px,transparent 1.5px) 0 0/${s}px ${s}px,linear-gradient(90deg,${c} 1.5px,transparent 1.5px) 0 0/${s}px ${s}px`;
    case 'diag':return `repeating-linear-gradient(45deg, ${c} 0 ${Math.max(1,s*0.05)}px, transparent ${Math.max(1,s*0.05)}px ${s*0.5}px)`;
    case 'check':return `conic-gradient(${c} 25%, transparent 0 50%, ${c} 0 75%, transparent 0) 0 0/${s}px ${s}px`;
    case 'cross':return `linear-gradient(${c} 1.5px,transparent 1.5px) 50% 0/${s}px ${s}px,linear-gradient(90deg,${c} 1.5px,transparent 1.5px) 0 50%/${s}px ${s}px`;
    default:return '';
  }
}
function bgCSS(){
  const b=S.bg,L=[];
  if(b.pat&&b.pat!=='none')L.push(patCSS(b));
  if(b.type==='linear')L.push(`linear-gradient(${b.ang}deg,${b.a},${b.b})`);
  else if(b.type==='radial')L.push(`radial-gradient(circle at 50% 45%,${b.a},${b.b})`);
  else L.push(b.a);
  return L.join(',');
}
function patCanvas(b){
  const s=Math.max(8,Math.round(b.patS)),c=document.createElement('canvas');
  c.width=c.height=s;const x=c.getContext('2d');x.fillStyle=b.patC;x.strokeStyle=b.patC;
  if(b.pat==='dots'){x.beginPath();x.arc(s/2,s/2,s*0.09,0,7);x.fill()}
  else if(b.pat==='grid'){const t=Math.max(1,s*0.03);x.fillRect(0,0,s,t);x.fillRect(0,0,t,s)}
  else if(b.pat==='diag'){x.lineWidth=Math.max(1,s*0.05);x.beginPath();for(let i=-1;i<=1;i++){x.moveTo(i*s,0);x.lineTo(i*s+s,s)}x.stroke()}
  else if(b.pat==='check'){x.fillRect(0,0,s/2,s/2);x.fillRect(s/2,s/2,s/2,s/2)}
  else if(b.pat==='cross'){const t=Math.max(1,s*0.03);x.fillRect(0,s/2-t/2,s,t);x.fillRect(s/2-t/2,0,t,s)}
  return c;
}
function paintBgCanvas(x,W,H){
  const b=S.bg;
  if(b.type==='linear'){
    const a=(b.ang-90)*Math.PI/180,r=Math.hypot(W,H)/2,
      g=x.createLinearGradient(W/2-Math.cos(a)*r,H/2-Math.sin(a)*r,W/2+Math.cos(a)*r,H/2+Math.sin(a)*r);
    g.addColorStop(0,b.a);g.addColorStop(1,b.b);x.fillStyle=g;
  }else if(b.type==='radial'){
    const g=x.createRadialGradient(W/2,H*0.45,0,W/2,H*0.45,Math.hypot(W,H)*0.62);
    g.addColorStop(0,b.a);g.addColorStop(1,b.b);x.fillStyle=g;
  }else x.fillStyle=b.a;
  x.fillRect(0,0,W,H);
  if(b.pat&&b.pat!=='none'){const p=x.createPattern(patCanvas(b),'repeat');x.fillStyle=p;x.fillRect(0,0,W,H)}
}

function fit(){
  const{w,h}=dims(),aw=Math.max(60,SW.clientWidth-32),ah=Math.max(60,SW.clientHeight-32);
  K=Math.min(aw/w,ah/h,1);
  Object.assign(stg.style,{width:w+'px',height:h+'px',transform:`scale(${K})`,background:bgCSS()});
  stg.style.setProperty('--s',K);
  Object.assign($('#so').style,{width:w*K+'px',height:h*K+'px'});
}
new ResizeObserver(()=>S.scr==='editor'&&fit()).observe(SW);
const fil=e=>`brightness(${e.br}%) contrast(${e.co}%) saturate(${e.sa}%) grayscale(${e.gr}%) sepia(${e.se}%) hue-rotate(${e.hu||0}deg) invert(${e.inv||0}%) blur(${e.bl}px)`;
function shapeSVG(el){
  const p=SH[el.shape]?SH[el.shape].p(cl(el.r||0,0,45)):'M0,0H100V100H0Z';
  const gid='g'+el.id;
  const def=el.useGrad?`<defs><linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1" gradientTransform="rotate(${el.gradAng||0} .5 .5)"><stop offset="0" stop-color="${el.fill}"/><stop offset="1" stop-color="${el.fill2||el.fill}"/></linearGradient></defs>`:'';
  const fill=el.useGrad?`url(#${gid})`:el.fill;
  const st=el.bw>0?`stroke="${el.bc}" stroke-width="${el.bw}" vector-effect="non-scaling-stroke"`:'';
  return `${def}<path d="${p}" fill="${fill}" fill-rule="evenodd" ${st}/>`;
}
function build(el){
  const d=document.createElement('div');d.className='el';d.dataset.id=el.id;
  let n;
  if(el.type==='image'){n=document.createElement('img');n.className='in';n.src=el.src;n.draggable=false;n.alt=''}
  else if(el.type==='shape'){n=document.createElementNS('http://www.w3.org/2000/svg','svg');n.setAttribute('class','in');n.setAttribute('viewBox','0 0 100 100');n.setAttribute('preserveAspectRatio','none');n.innerHTML=shapeSVG(el)}
  else{n=document.createElement('div');n.className='in t'}
  d.appendChild(n);
  (el.type==='text'?['l','r']:['tl','tr','bl','br']).forEach(k=>d.insertAdjacentHTML('beforeend',`<i class="hd h-${k}" data-d="${k}"></i>`));
  d.insertAdjacentHTML('beforeend','<i class="hd h-rot" data-d="rot"></i>');
  map.set(el.id,d);stg.appendChild(d);upd(el);
}
function upd(el){
  const d=map.get(el.id);if(!d)return;
  const n=d.querySelector('.in');
  d.style.display=el.hidden?'none':'';
  Object.assign(d.style,{left:el.x+'px',top:el.y+'px',width:el.w+'px',
    transform:`rotate(${el.rot||0}deg)`,opacity:el.op/100,
    zIndex:S.els.indexOf(el)+1,mixBlendMode:el.blend||'normal'});
  d.classList.toggle('lk',!!el.lock);
  d.style.filter=el.esh?`drop-shadow(0 ${el.w*0.02}px ${el.w*0.05}px rgba(0,0,0,.35))`:'none';
  if(el.type==='text'){
    n.textContent=el.upper?String(el.text).toUpperCase():el.text;
    Object.assign(n.style,{
      fontFamily:`'${el.font}',Inter,sans-serif`,fontSize:el.size+'px',
      fontWeight:el.weight||400,fontStyle:el.italic?'italic':'normal',
      color:el.color,textAlign:el.align,letterSpacing:el.ls+'px',
      lineHeight:el.lh||1.2,background:el.hl||'transparent',
      padding:el.hl?'0.12em 0.28em':'',borderRadius:(el.hlr||0)+'px',
      textShadow:el.tsh?`0 ${el.size*.04}px ${el.size*.13}px rgba(0,0,0,.5)`:'none',
      WebkitTextStroke:el.stroke>0?`${el.stroke}px ${el.strokeC}`:''});
    if(el.stroke>0)n.style.paintOrder='stroke fill';
    d.style.height='auto';
    if(!el.hidden)el.h=n.offsetHeight||el.h;
  }else{
    d.style.height=el.h+'px';
    if(el.type==='image'){
      n.style.filter=fil(el);
      n.style.transform=`scale(${el.flipH?-1:1},${el.flipV?-1:1})`;
      n.style.borderRadius=el.r+'px';
      n.style.border=el.bw?`${el.bw}px solid ${el.bc}`:'none';
    }else{
      n.innerHTML=shapeSVG(el);n.style.filter=fil(el);
      n.style.transform=`scale(${el.flipH?-1:1},${el.flipV?-1:1})`;
    }
  }
}
const pos=el=>{const d=map.get(el.id);if(!d)return;
  d.style.left=el.x+'px';d.style.top=el.y+'px';d.style.transform=`rotate(${el.rot||0}deg)`};
function rebuild(){$$('.el',stg).forEach(d=>d.remove());map.clear();S.els.forEach(build);pick(S.sel)}
function hb(){$('#eUndo').disabled=!S.hist.length;$('#eRedo').disabled=!S.fut.length}
function pick(id){S.sel=id;map.forEach((d,k)=>d.classList.toggle('sel',k===id));hb();panel()}
const popIn=el=>{const d=map.get(el.id);if(!d||!d.firstChild.animate)return;
  d.firstChild.animate([{opacity:0,transform:'scale(.86)'},{opacity:1,transform:'scale(1)'}],
    {duration:800,easing:'cubic-bezier(.16,1,.3,1)'})};
function add(el){snap();S.els.push(el);build(el);popIn(el);pick(el.id)}
function addText(o={}){const{w,h}=dims();add({id:rid(),type:'text',text:'',x:w*.08,y:h*.42,w:w*.84,h:120,rot:0,op:100,
  size:Math.round(w/11),color:'#171717',font:'Inter',weight:700,italic:0,align:'center',ls:0,lh:1.2,
  hl:'',hlr:10,tsh:0,stroke:0,strokeC:'#ffffff',upper:0,blend:'normal',esh:0,hidden:0,lock:0,...o})}
function addShape(k){const{w,h}=dims(),W=w*.55,H=w*.55;
  add({id:rid(),type:'shape',shape:k,x:(w-W)/2,y:(h-H)/2,w:W,h:H,rot:0,op:100,
    fill:'#0369a1',fill2:'#7c3aed',useGrad:0,gradAng:45,r:k==='round'?14:0,bw:0,bc:'#ffffff',blend:'normal',esh:0,hidden:0,lock:0})}
const img=src=>new Promise((r,j)=>{const i=new Image();i.onload=()=>r(i);i.onerror=j;i.src=src});
async function addPhoto(f){
  if(!f.type.startsWith('image/'))return toast('Bukan gambar');
  ld(1);
  try{
    const u=URL.createObjectURL(f),im=await img(u),
      s=Math.min(1,1600/Math.max(im.naturalWidth,im.naturalHeight)),
      c=document.createElement('canvas');
    c.width=Math.max(1,im.naturalWidth*s|0);c.height=Math.max(1,im.naturalHeight*s|0);
    c.getContext('2d').drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);
    const src=c.toDataURL(f.type==='image/png'?'image/png':'image/jpeg',.9),
      {w,h}=dims(),r=Math.min(w*.8/c.width,h*.8/c.height),W=c.width*r,H=c.height*r;
    add({id:rid(),type:'image',src,x:(w-W)/2,y:(h-H)/2,w:W,h:H,rot:0,op:100,r:0,bw:0,bc:'#ffffff',
      flipH:0,flipV:0,blend:'normal',esh:0,hidden:0,lock:0,...FD});
  }catch(e){console.error(e);toast('Gagal memuat')}
  finally{ld(0)}
}
function act(a,el){
  const i=S.els.indexOf(el),{w,h}=dims();
  if(a==='up'||a==='dn'){snap();const j=cl(i+(a==='up'?1:-1),0,S.els.length-1);S.els.splice(i,1);S.els.splice(j,0,el);S.els.forEach(upd);panel()}
  else if(a==='mid'){snap();el.x=(w-el.w)/2;el.y=(h-el.h)/2;upd(el)}
  else if(a==='left'){snap();el.x=0;upd(el)}
  else if(a==='right'){snap();el.x=w-el.w;upd(el)}
  else if(a==='top'){snap();el.y=0;upd(el)}
  else if(a==='bottom'){snap();el.y=h-el.h;upd(el)}
  else if(a==='dup'){snap();const c={...el,id:rid(),x:el.x+30,y:el.y+30};S.els.push(c);build(c);popIn(c);pick(c.id)}
  else if(a==='del'){snap();const d=map.get(el.id);
    if(d){d.classList.remove('sel');d.animate([{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(.86)'}],
      {duration:400,easing:'cubic-bezier(.16,1,.3,1)'}).onfinish=()=>d.remove()}
    S.els.splice(i,1);map.delete(el.id);pick(null)}
}

const sec=(t,h)=>`<div class="sec">${t?`<div class="lb">${t}</div>`:''}${h}</div>`;
const rng=(k,l,mn,mx,v,u='',st=1)=>`<label class="sl"><span>${l}</span><input type="range" data-k="${k}" data-u="${u}" min="${mn}" max="${mx}" step="${st}" value="${v}"><b>${(+v).toFixed(st<1?1:0)}${u}</b></label>`;
const tog=(k,l,on)=>`<button class="chip${on?' on':''}" data-tog="${k}">${l}</button>`;
const sws=(k,c)=>COL.map(x=>`<button class="sw${c===x?' on':''}" data-set="${k}" data-v="${x}" style="background:${x}"></button>`).join('')+`<input type="color" data-k="${k}" value="${/^#[0-9a-f]{6}$/i.test(c||'')?c:'#333333'}">`;
const actsFor=()=>sec('',`<div class="row">`
  +`<button class="chip ico" data-a="left" title="Kiri">${ic('align',14)}</button>`
  +`<button class="chip" data-a="mid">${ic('ctr',14)}Tengah</button>`
  +`<button class="chip ico" data-a="right" title="Kanan">${ic('align',14)}</button>`
  +`<button class="chip ico" data-a="top" title="Atas">${ic('up',14)}</button>`
  +`<button class="chip ico" data-a="bottom" title="Bawah">${ic('dn',14)}</button></div>`
  +`<div class="row" style="margin-top:6px">`
  +`<button class="chip" data-a="up">${ic('up',14)}</button>`
  +`<button class="chip" data-a="dn">${ic('dn',14)}</button>`
  +`<button class="chip" data-a="dup">${ic('copy',14)}</button>`
  +`<button class="chip dg" data-a="del">${ic('trash',14)}</button></div>`);
function panel(){
  const el=cur();let h='';
  if(el&&el.type==='text'){
    h=sec('',`<textarea class="ta" data-k="text" maxlength="400" rows="2" placeholder="Tulis…">${esc(el.text)}</textarea>`)
    +sec('Font',`<div class="row sc">${FONTS.map(f=>`<button class="chip${el.font===f?' on':''}" data-set="font" data-v="${f}" style="font-family:'${f}'">${f}</button>`).join('')}</div>`)
    +sec('',
      `<label class="sl"><span>Ukuran</span><input type="range" data-k="size" min="12" max="400" value="${el.size}"><b>${Math.round(el.size)}</b></label>`
      +`<label class="sl"><span>Ketebalan</span><input type="range" data-k="weight" min="100" max="900" step="100" value="${el.weight||700}"><b>${el.weight||700}</b></label>`
      +`<label class="sl"><span>Jarak huruf</span><input type="range" data-k="ls" data-u="px" min="-10" max="40" value="${el.ls}"><b>${el.ls}px</b></label>`
      +`<label class="sl"><span>Jarak baris</span><input type="range" data-k="lh" step="0.05" min="0.8" max="2.4" value="${el.lh||1.2}"><b>${(el.lh||1.2).toFixed(2)}</b></label>`
      +`<label class="sl"><span>Opasitas</span><input type="range" data-k="op" data-u="%" min="10" max="100" value="${el.op}"><b>${el.op}%</b></label>`)
    +sec('Gaya',`<div class="row">${tog('italic','<i>I</i>',el.italic)}${tog('upper','AA',el.upper)}${tog('tsh','Bayangan',el.tsh)}${tog('esh','Glow',el.esh)}`
      +['left','center','right'].map(a=>`<button class="chip${el.align===a?' on':''}" data-set="align" data-v="${a}">${{left:'Kiri',center:'Tengah',right:'Kanan'}[a]}</button>`).join('')+`</div>`)
    +sec('Warna',`<div class="row">${sws('color',el.color)}</div>`)
    +sec('Garis tepi',`<label class="sl"><span>Tebal</span><input type="range" data-k="stroke" min="0" max="20" step="0.5" value="${el.stroke||0}"><b>${(el.stroke||0)}px</b></label><div class="row">${sws('strokeC',el.strokeC||'#ffffff')}</div>`)
    +sec('Sorot latar',`<div class="row"><button class="chip${el.hl?'':' on'}" data-set="hl" data-v="">Tanpa</button>${sws('hl',el.hl)}</div>`
      +(el.hl?`<label class="sl" style="margin-top:8px"><span>Sudut</span><input type="range" data-k="hlr" min="0" max="60" value="${el.hlr||0}"><b>${el.hlr||0}</b></label>`:''))
    +sec('Blend',`<select class="sel" data-k="blend">${BLENDS.map(b=>`<option value="${b}"${el.blend===b?' selected':''}>${b}</option>`).join('')}</select>`)
    +actsFor();
  }else if(el&&el.type==='image'){
    h=sec('Preset',`<div class="row sc">${Object.keys(PRE).map(p=>`<button class="chip" data-pre="${p}">${p}</button>`).join('')}</div>`)
    +sec('',
      rng('br','Kecerahan',40,180,el.br,'%')+rng('co','Kontras',40,200,el.co,'%')+rng('sa','Saturasi',0,250,el.sa,'%')
      +rng('hu','Rona',0,360,el.hu||0,'°')+rng('se','Sepia',0,100,el.se,'%')+rng('gr','Abu-abu',0,100,el.gr,'%')
      +rng('inv','Invert',0,100,el.inv||0,'%')+rng('bl','Blur',0,20,el.bl,'px')+rng('op','Opasitas',10,100,el.op,'%'))
    +sec('',rng('r','Sudut',0,400,el.r)+rng('bw','Bingkai',0,40,el.bw||0))
    +sec('Warna bingkai',`<div class="row">${sws('bc',el.bc||'#ffffff')}</div>`)
    +sec('Transformasi',`<div class="row">${tog('flipH','Balik H',el.flipH)}${tog('flipV','Balik V',el.flipV)}${tog('esh','Bayangan',el.esh)}</div>`)
    +sec('Blend',`<select class="sel" data-k="blend">${BLENDS.map(b=>`<option value="${b}"${el.blend===b?' selected':''}>${b}</option>`).join('')}</select>`)
    +actsFor();
  }else if(el&&el.type==='shape'){
    h=sec('Bentuk',`<div class="row sc">${Object.keys(SH).map(k=>`<button class="chip${el.shape===k?' on':''}" data-set="shape" data-v="${k}">${SH[k].n}</button>`).join('')}</div>`)
    +sec('Isi',`<div class="row">${tog('useGrad','Gradien',el.useGrad)}</div>`
      +`<div class="row" style="margin-top:8px">${sws('fill',el.fill)}</div>`
      +(el.useGrad?`<div class="row" style="margin-top:8px">${sws('fill2',el.fill2||el.fill)}</div>`
        +`<label class="sl" style="margin-top:8px"><span>Sudut</span><input type="range" data-k="gradAng" min="0" max="360" value="${el.gradAng||45}"><b>${el.gradAng||45}°</b></label>`:''))
    +sec('',
      (el.shape==='round'||el.shape==='bubble'?`<label class="sl"><span>Sudut</span><input type="range" data-k="r" min="0" max="45" value="${cl(el.r||0,0,45)}"><b>${Math.round(el.r||0)}</b></label>`:'')
      +rng('bw','Tebal garis',0,20,el.bw||0)+rng('op','Opasitas',10,100,el.op,'%'))
    +sec('Warna garis',`<div class="row">${sws('bc',el.bc||'#ffffff')}</div>`)
    +sec('Transformasi',`<div class="row">${tog('flipH','Balik H',el.flipH)}${tog('flipV','Balik V',el.flipV)}${tog('esh','Bayangan',el.esh)}</div>`)
    +sec('Blend',`<select class="sel" data-k="blend">${BLENDS.map(b=>`<option value="${b}"${el.blend===b?' selected':''}>${b}</option>`).join('')}</select>`)
    +actsFor();
  }else if(S.tool==='stk'){
    h=Object.keys(EMO).map(c=>sec(c,`<div class="emo">${[...EMO[c]].map(e=>`<button data-emo="${e}">${e}</button>`).join('')}</div>`)).join('');
  }else if(S.tool==='shp'){
    h=sec('',`<div class="row">${Object.keys(SH).map(k=>`<button class="chip" data-shape="${k}">${SH[k].n}</button>`).join('')}</div>`);
  }else if(S.tool==='lay'){
    h=sec('',S.els.length?`<div style="display:flex;flex-direction:column;gap:8px">`
      +S.els.slice().reverse().map(e=>`<div class="lay${e.id===S.sel?' on':''}" data-lay="${e.id}">
          <span class="lic">${ic(e.type==='image'?'img':e.type==='text'?'type':'shape',16)}</span>
          <span class="lnm">${esc(e.type==='text'?((e.upper?e.text.toUpperCase():e.text)||'').slice(0,20)||'—':e.type==='image'?'—':(SH[e.shape]?SH[e.shape].n:'—'))}</span>
          <button class="ib" data-vis="${e.id}" aria-label="Tampil">${ic(e.hidden?'eyeoff':'eye',15)}</button>
          <button class="ib" data-lock="${e.id}" aria-label="Kunci">${ic(e.lock?'lock':'unlock',15)}</button>
        </div>`).join('')+`</div>`:'');
  }else{
    const b=S.bg;
    h=sec('',`<div class="row">
        <button class="chip${b.type==='solid'?' on':''}" data-bgt="solid">Warna</button>
        <button class="chip${b.type==='linear'?' on':''}" data-bgt="linear">Gradien</button>
        <button class="chip${b.type==='radial'?' on':''}" data-bgt="radial">Radial</button></div>`)
    +sec('',`<div class="row">${BGS.map(c=>`<button class="sw${b.a===c?' on':''}" data-bga="${c}" style="background:${c}"></button>`).join('')}<input type="color" data-bgk="a" value="${b.a}"></div>`)
    +(b.type!=='solid'?sec('',`<div class="row">${BGS.map(c=>`<button class="sw${b.b===c?' on':''}" data-bgb="${c}" style="background:${c}"></button>`).join('')}<input type="color" data-bgk="b" value="${b.b}"></div>`):'')
    +(b.type==='linear'?sec('',`<label class="sl"><span>Sudut</span><input type="range" data-bgk2="ang" min="0" max="360" value="${b.ang}"><b>${b.ang}°</b></label>`):'')
    +sec('',`<div class="row">${GRADS.map(g=>`<button class="sw" data-bgg="${g[0]}|${g[1]}" style="background:linear-gradient(${g[0]},${g[1]})"></button>`).join('')}</div>`)
    +sec('Pola',`<div class="row"><button class="chip${b.pat==='none'?' on':''}" data-bgp="none">—</button>`
      +['dots','grid','diag','check','cross'].map(p=>`<button class="chip${b.pat===p?' on':''}" data-bgp="${p}">${{dots:'Titik',grid:'Grid',diag:'Diagonal',check:'Papan',cross:'Silang'}[p]}</button>`).join('')+`</div>`
      +(b.pat!=='none'?`<div class="row" style="margin-top:8px"><input type="color" data-bgk="patC" value="${b.patC}">`
        +`<label class="sl" style="flex:1;margin:0"><span>Ukuran</span><input type="range" data-bgk2="patS" min="8" max="140" value="${b.patS}"><b>${b.patS}</b></label></div>`:''))
    +sec('Rasio',`<div class="row">${Object.keys(RATIOS).map(k=>`<button class="chip${S.ratio===k?' on':''}" data-ratio="${k}">${k}</button>`).join('')}</div>`);
  }
  P.innerHTML=`<div class="in2">${h}</div>`;
  const k=el?el.id+':'+el.type:S.tool;
  if(k!==S.pk){S.pk=k;P.firstChild.classList.add('ent')}
}
P.addEventListener('focusin',e=>{if(e.target.matches('input[type=text],input:not([type]),textarea'))snap()});
P.addEventListener('input',e=>{
  const t=e.target,el=cur();
  if(t.dataset.bgk){S.bg[t.dataset.bgk]=t.value;fit();return}
  if(t.dataset.bgk2){S.bg[t.dataset.bgk2]=+t.value;fit();
    if(t.nextElementSibling)t.nextElementSibling.textContent=t.value+(t.dataset.bgk2==='ang'?'°':'');return}
  const k=t.dataset.k;
  if(k&&el){
    if(t.type==='range'){el[k]=+t.value;
      if(t.dataset.u!==undefined&&t.nextElementSibling)
        t.nextElementSibling.textContent=(t.step&&+t.step<1?(+t.value).toFixed(2):Math.round(+t.value))+t.dataset.u}
    else el[k]=t.value;
    upd(el);
  }
});
P.addEventListener('click',e=>{
  const row=e.target.closest('[data-lay]');
  if(row&&!e.target.closest('button')){pick(row.dataset.lay);return}
  const b=e.target.closest('button');if(!b)return;const d=b.dataset,el=cur();
  if(d.emo){const{w,h}=dims();addText({text:d.emo,size:Math.round(w/5),x:w*.3,y:h*.35,w:w*.4,weight:400})}
  else if(d.shape){if(el&&el.type==='shape'){snap();el.shape=d.shape;upd(el);panel()}else addShape(d.shape)}
  else if(d.bgt){snap();S.bg.type=d.bgt;fit();panel()}
  else if(d.bga){snap();S.bg.a=d.bga;fit();panel()}
  else if(d.bgb){snap();S.bg.b=d.bgb;fit();panel()}
  else if(d.bgg){snap();const[a,c]=d.bgg.split('|');S.bg={...S.bg,type:'linear',a,b:c};fit();panel()}
  else if(d.bgp){snap();S.bg.pat=d.bgp;fit();panel()}
  else if(d.ratio){snap();S.ratio=d.ratio;fit();panel()}
  else if(d.lay){pick(d.lay)}
  else if(d.vis){snap();const x=get(d.vis);if(x){x.hidden=x.hidden?0:1;upd(x);panel()}}
  else if(d.lock){snap();const x=get(d.lock);if(x){x.lock=x.lock?0:1;upd(x);panel()}}
  else if(el){
    if(d.a)act(d.a,el);
    else if(d.pre){snap();Object.assign(el,FD,PRE[d.pre]);upd(el);panel()}
    else if(d.tog){snap();el[d.tog]=el[d.tog]?0:1;upd(el);panel()}
    else if(d.set!==undefined){snap();const v=d.v;el[d.set]=(v!==''&&!isNaN(+v))?+v:v;upd(el);panel()}
  }
});

stg.addEventListener('pointerdown',e=>{
  const d=e.target.closest('.el'),h=e.target.closest('.hd');
  if(!d)return pick(null);
  const el=get(d.dataset.id);if(!el)return;
  if(S.sel!==el.id)pick(el.id);
  if(el.lock)return;
  e.preventDefault();snap();
  const r=stg.getBoundingClientRect(),px=(e.clientX-r.left)/K,py=(e.clientY-r.top)/K;
  if(h&&h.dataset.d==='rot'){const cx=el.x+el.w/2,cy=el.y+el.h/2;
    drag={m:'rot',el,cx,cy,a0:Math.atan2(py-cy,px-cx)*180/Math.PI,r0:el.rot||0}}
  else if(h)drag={m:'rs',el,dir:h.dataset.d,sx:e.clientX,sy:e.clientY,w0:el.w,h0:el.h,x0:el.x,y0:el.y};
  else drag={m:'mv',el,sx:e.clientX,sy:e.clientY,x0:el.x,y0:el.y};
});
SW.addEventListener('pointerdown',e=>{if(e.target===SW||e.target.id==='so')pick(null)});
addEventListener('pointermove',e=>{
  if(!drag)return;e.preventDefault();const el=drag.el;
  if(drag.m==='mv'){
    el.x=drag.x0+(e.clientX-drag.sx)/K;el.y=drag.y0+(e.clientY-drag.sy)/K;
    const{w,h}=dims(),a=Math.abs(el.x+el.w/2-w/2)<10,b=Math.abs(el.y+el.h/2-h/2)<10;
    if(a)el.x=w/2-el.w/2;if(b)el.y=h/2-el.h/2;
    $('#gv').style.display=a?'block':'none';$('#gh').style.display=b?'block':'none';
  }else if(drag.m==='rot'){
    const r=stg.getBoundingClientRect();
    const a=Math.atan2((e.clientY-r.top)/K-drag.cy,(e.clientX-r.left)/K-drag.cx)*180/Math.PI;
    let v=drag.r0+a-drag.a0;while(v>180)v-=360;while(v<-180)v+=360;
    for(const s of[0,90,-90,180,-180,45,-45,135,-135])if(Math.abs(v-s)<4.5){v=s;break}
    el.rot=Math.round(v*10)/10;
  }else{
    const D=drag.dir,sw=D.includes('r')?1:D.includes('l')?-1:0,sh=D.includes('b')?1:D.includes('t')?-1:0,
      dx=(e.clientX-drag.sx)/K,dy=(e.clientY-drag.sy)/K,
      th=(el.rot||0)*Math.PI/180,co=Math.cos(th),si=Math.sin(th),
      lx=dx*co+dy*si,ly=-dx*si+dy*co,o=drag.w0,oh=drag.h0,nw=Math.max(10,o+lx*sw);
    let nh=sh?Math.max(10,oh+ly*sh):oh;
    if(el.type==='image'&&sh&&!e.shiftKey)nh=nw*oh/o;
    const ox=(nw-o)*sw/2,oy=(nh-oh)*sh/2,
      cx=drag.x0+o/2+ox*co-oy*si,cy=drag.y0+oh/2+ox*si+oy*co;
    el.w=nw;el.h=nh;el.x=cx-nw/2;el.y=cy-nh/2;
  }
  drag.m==='rs'?upd(el):pos(el);
},{passive:false});
const endDrag=()=>{if(drag)drag=null;$('#gv').style.display=$('#gh').style.display='none'};
addEventListener('pointerup',endDrag);addEventListener('pointercancel',endDrag);
addEventListener('keydown',e=>{
  if(e.key==='Escape'&&$('#md').classList.contains('on')){closeM();return}
  if(S.scr!=='editor'||/INPUT|TEXTAREA|SELECT/.test(e.target.tagName))return;
  const el=cur(),k=e.key,m=e.ctrlKey||e.metaKey;
  if(m&&k.toLowerCase()==='z'){e.preventDefault();e.shiftKey?redo():undo()}
  else if(m&&k.toLowerCase()==='y'){e.preventDefault();redo()}
  else if(m&&k.toLowerCase()==='d'&&el){e.preventDefault();act('dup',el)}
  else if(el&&(k==='Delete'||k==='Backspace')){e.preventDefault();act('del',el)}
  else if(el&&k.startsWith('Arrow')){e.preventDefault();const s=e.shiftKey?10:1;
    el.x+=k==='ArrowRight'?s:k==='ArrowLeft'?-s:0;el.y+=k==='ArrowDown'?s:k==='ArrowUp'?-s:0;upd(el)}
});

function rr(x,a,b,w,h,r){r=Math.min(r,w/2,h/2);if(r<=0){x.rect(a,b,w,h);return}
  x.beginPath();x.moveTo(a+r,b);
  x.arcTo(a+w,b,a+w,b+h,r);x.arcTo(a+w,b+h,a,b+h,r);
  x.arcTo(a,b+h,a,b,r);x.arcTo(a,b,a+w,b,r);x.closePath()}
function wrap(x,t,m){const o=[];
  for(const p of String(t).split('\n')){let l='';
    for(const w of p.split(' ')){const s=l?l+' '+w:w;
      if(!l||x.measureText(s).width<=m)l=s;else{o.push(l);l=w}}
    o.push(l)}return o}
async function draw(scale=1){
  const{w:W0,h:H0}=dims(),W=Math.round(W0*scale),H=Math.round(H0*scale);
  const c=document.createElement('canvas');c.width=W;c.height=H;
  const x=c.getContext('2d');x.scale(scale,scale);
  paintBgCanvas(x,W0,H0);
  try{await document.fonts.ready}catch(e){}
  for(const el of S.els){
    if(el.hidden)continue;
    x.save();x.globalAlpha=el.op/100;
    x.translate(el.x+el.w/2,el.y+el.h/2);x.rotate((el.rot||0)*Math.PI/180);
    const hw=el.w/2,hh=el.h/2;
    if(el.esh){x.shadowColor='rgba(0,0,0,.35)';x.shadowBlur=el.w*0.05;x.shadowOffsetY=el.w*0.02}
    if(el.type==='image'){
      let im;try{im=await img(el.src)}catch(e){x.restore();continue}
      if(el.r>0){x.save();rr(x,-hw,-hh,el.w,el.h,el.r);x.clip()}
      if(el.flipH||el.flipV)x.scale(el.flipH?-1:1,el.flipV?-1:1);
      if('filter'in x)x.filter=fil(el);
      let sw=im.width,sh=im.height;
      if(sw/sh>el.w/el.h)sw=sh*el.w/el.h;else sh=sw*el.h/el.w;
      x.drawImage(im,(im.width-sw)/2,(im.height-sh)/2,sw,sh,-hw,-hh,el.w,el.h);
      if('filter'in x)x.filter='none';
      if(el.r>0)x.restore();
      if(el.bw>0){rr(x,-hw+el.bw/2,-hh+el.bw/2,el.w-el.bw,el.h-el.bw,Math.max(0,el.r-el.bw/2));
        x.lineWidth=el.bw;x.strokeStyle=el.bc;x.stroke()}
    }else if(el.type==='shape'){
      const p=new Path2D(SH[el.shape]?SH[el.shape].p(cl(el.r||0,0,45)):'M0,0H100V100H0Z');
      const m=new DOMMatrix();m.translateSelf(-hw,-hh);m.scaleSelf(el.w/100,el.h/100);
      const p2=new Path2D();p2.addPath(p,m);
      if(el.useGrad){
        const a=(el.gradAng||45)*Math.PI/180,r=Math.hypot(el.w,el.h)/2,
          g=x.createLinearGradient(-Math.cos(a)*r,-Math.sin(a)*r,Math.cos(a)*r,Math.sin(a)*r);
        g.addColorStop(0,el.fill);g.addColorStop(1,el.fill2||el.fill);x.fillStyle=g;
      }else x.fillStyle=el.fill;
      x.save();
      if(el.flipH||el.flipV)x.scale(el.flipH?-1:1,el.flipV?-1:1);
      x.fill(p2,'evenodd');
      if(el.bw>0){x.lineWidth=el.bw;x.strokeStyle=el.bc;x.stroke(p2)}
      x.restore();
    }else{
      const txt=el.upper?String(el.text).toUpperCase():el.text;
      x.font=`${el.italic?'italic ':''}${el.weight||400} ${el.size}px '${el.font}',Inter,sans-serif`;
      if('letterSpacing'in x)x.letterSpacing=el.ls+'px';
      x.textBaseline='middle';x.textAlign=el.align;
      const lh=el.size*(el.lh||1.2);
      const L=wrap(x,txt,el.w-(el.hl?el.size*0.56:0));
      const totalH=L.length*lh;
      const top=-hh+((el.h-totalH)/2);
      if(el.hl){x.save();x.fillStyle=el.hl;
        L.forEach((l,i)=>{const tw=x.measureText(l).width;
          const lx=el.align==='center'?-tw/2:el.align==='right'?-hw:-hw;
          const padX=el.size*0.28;
          rr(x,lx-padX,top+i*lh-lh/2, tw+padX*2, lh, el.hlr||0);x.fill()});
        x.restore()}
      x.fillStyle=el.color;
      if(el.tsh){x.shadowColor='rgba(0,0,0,.5)';x.shadowBlur=el.size*.13;x.shadowOffsetY=el.size*.04}
      if(el.stroke>0){x.lineWidth=el.stroke*2;x.strokeStyle=el.strokeC;x.lineJoin='round'}
      const tx=el.align==='center'?0:el.align==='right'?hw:-hw;
      L.forEach((l,i)=>{const y=top+i*lh;
        if(el.stroke>0)x.strokeText(l,tx,y);x.fillText(l,tx,y)});
      if('letterSpacing'in x)x.letterSpacing='0px';
    }
    x.restore();
  }
  return c;
}
async function jpeg(){
  const c=await draw(1),t=q=>new Promise(r=>c.toBlob(r,'image/jpeg',q));
  let q=.9,b=await t(q);
  while(b.size>MAX&&q>.4){q-=.07;b=await t(q)}
  if(b.size>MAX){const s=document.createElement('canvas');
    s.width=c.width*.7;s.height=c.height*.7;
    s.getContext('2d').drawImage(c,0,0,s.width,s.height);
    b=await new Promise(r=>s.toBlob(r,'image/jpeg',.8))}
  return b;
}
const b2u=b=>new Promise((r,j)=>{const f=new FileReader();f.onload=()=>r(f.result);f.onerror=j;f.readAsDataURL(b)});
async function exportMenu(){
  if(!S.els.length)return toast('Kosong');
  modal(`<h2>Ekspor</h2>
    <div class="fd"><label>Format</label><div class="row" id="xf"><button class="chip on" data-f="png">PNG</button><button class="chip" data-f="jpeg">JPEG</button></div></div>
    <div class="fd"><label>Skala</label><div class="row" id="xs"><button class="chip" data-s="1">1×</button><button class="chip on" data-s="2">2×</button><button class="chip" data-s="3">3×</button></div></div>
    <div class="r2"><button class="btn ou" id="xc">Batal</button><button class="btn pr" id="xd">Unduh</button></div>`);
  let fmt='png',sc=2;
  $('#xf').onclick=e=>{const b=e.target.closest('button');if(!b)return;fmt=b.dataset.f;$$('#xf .chip').forEach(c=>c.classList.toggle('on',c===b))};
  $('#xs').onclick=e=>{const b=e.target.closest('button');if(!b)return;sc=+b.dataset.s;$$('#xs .chip').forEach(c=>c.classList.toggle('on',c===b))};
  $('#xc').onclick=closeM;
  $('#xd').onclick=async()=>{
    closeM();ld(1);
    try{
      const c=await draw(sc);
      await new Promise(r=>c.toBlob(b=>{
        const a=document.createElement('a');a.href=URL.createObjectURL(b);
        a.download='sharing-it.'+(fmt==='png'?'png':'jpg');a.click();
        setTimeout(()=>URL.revokeObjectURL(a.href),5000);r();
      },fmt==='png'?'image/png':'image/jpeg',.92));
    }catch(e){console.error(e);toast('Gagal')}
    ld(0);
  };
}
async function pub(){
  if(!S.els.length)return toast('Kosong');
  if(!fb||!S.user)return toast(fbErr?'Offline':'Menyambungkan…');
  ld(1);let url;
  try{url=await b2u(await jpeg())}catch(e){ld(0);return toast('Gagal')}
  ld(0);
  if(url.length>1.15e6)return toast('Gambar terlalu besar');
  modal(`<h2>Posting</h2><img class="pv" src="${url}" alt="">
    <div class="fd"><input id="pt" maxlength="80" placeholder="Judul"></div>
    <div class="fd"><textarea id="pd" rows="3" maxlength="500" placeholder="Deskripsi"></textarea></div>
    <div class="fd"><input id="pm" maxlength="24" value="${esc(S.nick)}" placeholder="Nama"></div>
    <div class="r2"><button class="btn ou" id="pc">Batal</button><button class="btn pr" id="ps">Posting</button></div>`);
  $('#pc').onclick=closeM;
  $('#ps').onclick=async()=>{
    const t=$('#pt').value.trim(),d=$('#pd').value.trim(),n=$('#pm').value.trim().slice(0,24);
    if(!t||!n)return toast('Judul & nama wajib');
    ld(1);
    try{
      const{D,db}=fb;
      await D.set(D.push(D.ref(db,'posts')),{title:t,description:d,author:n,uid:S.user.uid,imageUrl:url,createdAt:Date.now()});
      S.nick=n;LS.set('si_nick',n);
      closeM();newDoc();go('feed');
    }catch(e){console.error(e);toast('Gagal')}
    ld(0);
  };
}
function newDoc(){
  S.els=[];S.sel=null;S.hist=[];S.fut=[];S.pk=null;
  S.bg={type:'solid',a:'#ffffff',b:'#e5e7eb',ang:135,pat:'none',patC:'#111827',patS:48};
  S.ratio='1:1';S.tool='cv';
  $$('.tb button').forEach(b=>b.classList.toggle('on',b.dataset.t==='cv'));
  rebuild();fit();
}

const CFG={apiKey:"AIzaSyCiy4bnK5p81jQWhq91-z2EvT7pRX8WTAE",authDomain:"sharing-it-f9e36.firebaseapp.com",databaseURL:"https://sharing-it-f9e36-default-rtdb.firebaseio.com",projectId:"sharing-it-f9e36",messagingSenderId:"977927236265",appId:"1:977927236265:web:71981316b01ae73319d7b8"};
let fb=null,fbErr='',unsub=null;const cu=new Map();
async function initFb(){
  try{
    const B='https://www.gstatic.com/firebasejs/10.12.2/firebase-';
    const[A,Au,D]=await Promise.all([import(B+'app.js'),import(B+'auth.js'),import(B+'database.js')]);
    const app=A.initializeApp(CFG),auth=Au.getAuth(app);
    await Au.signInAnonymously(auth);
    S.user=auth.currentUser;fb={D,db:D.getDatabase(app)};
    if(S.scr==='feed')listen();
  }catch(e){fbErr=e.code||e.message||'error';console.error(e);if(S.scr==='feed')feedMsg()}
}
function feedMsg(){
  $('#feed').innerHTML=`<div class="empty"><div class="em-ico">${ic('img',36)}</div></div>`;
}
function feedOn(){
  if(!S.posts.length){
    $('#feed').innerHTML=`<div class="sk"><div class="sk-line w40"></div><div class="sk-line w70"></div><div class="sk-img"></div></div>
      <div class="sk"><div class="sk-line w40"></div><div class="sk-line w70"></div><div class="sk-img"></div></div>`;
  }
  if(fb&&S.user)listen();else if(fbErr)feedMsg();
}
function feedOff(){unsub&&unsub();unsub=null;cu.forEach(f=>f());cu.clear();S.key='';S.shown=false}
function listen(){
  unsub&&unsub();const{D,db}=fb;
  unsub=D.onValue(D.query(D.ref(db,'posts'),D.orderByChild('createdAt'),D.limitToLast(S.lim)),s=>{
    const a=[];s.forEach(c=>{a.push({id:c.key,...c.val()})});a.reverse();S.posts=a;
    const u=S.user.uid,
      k=a.map(p=>p.id+':'+Object.keys(p.likes||{}).length+':'+((p.likes||{})[u]?1:0)).join('|')+S.lim;
    if(k!==S.key){S.key=k;render();renderStories()}
  },e=>{fbErr=e.message||'';feedMsg()});
}
const ago=t=>{if(!t)return'';const s=(Date.now()-t)/1e3|0;
  return s<60?'':s<3600?(s/60|0)+'m':s<86400?(s/3600|0)+'j'
    :s<604800?(s/86400|0)+'h':new Date(t).toLocaleDateString('id-ID',{day:'numeric',month:'short'})};
function renderStories(){
  const el=$('#stories');if(!el)return;
  if(!S.posts.length){el.style.display='none';return}
  el.style.display='flex';
  const seen=new Set(JSON.parse(LS.get('si_seen')||'[]'));
  const uniq=[],seenAuth=new Set();
  for(const p of S.posts){if(seenAuth.has(p.author))continue;seenAuth.add(p.author);uniq.push(p);if(uniq.length>=12)break}
  el.innerHTML=`<div class="story plus" data-story-new>
      <div class="sring"><div class="sav">${ic('img',22)}</div></div>
    </div>`+
    uniq.map(p=>{const isSeen=seen.has(p.id);
      return`<div class="story${isSeen?' seen':''}" data-story="${p.id}">
        <div class="sring"><div class="sav"><div class="av">${esc((p.author||'?').trim().charAt(0).toUpperCase())}</div></div></div></div>`}).join('');
}
function render(){
  const L=$('#feed'),sc=FS,top=sc.scrollTop,inp={};
  cu.forEach(f=>f());cu.clear();
  $$('[data-ci]').forEach(i=>{if(i.value)inp[i.dataset.ci]=i.value});
  if(!S.posts.length){
    L.innerHTML=`<div class="empty"><div class="em-ico">${ic('sparkle',36)}</div><button class="btn pr" id="first">Buat</button></div>`;
    return;
  }
  const u=S.user?.uid;
  const an=!S.shown;S.shown=true;
  L.innerHTML=S.posts.map((p,ix)=>{
    const lk=p.likes||{},n=Object.keys(lk).length;
    return`<article class="post${an?' pre':''}" style="--i:${Math.min(ix,6)}" data-pid="${p.id}">
      <div class="ph">
        <div class="av">${esc((p.author||'?').trim().charAt(0).toUpperCase())}</div>
        <div class="pi"><b>${esc(p.author)}</b><small>${ago(p.createdAt)}</small></div>
        ${u&&p.uid===u?`<button class="ib" data-del="${p.id}" aria-label="Hapus">${ic('trash',16)}</button>`:''}
      </div>
      ${p.title?`<h3>${esc(p.title)}</h3>`:''}
      ${p.description?`<p class="d">${esc(p.description)}</p>`:''}
      <div class="media" data-media="${p.id}">
        <img loading="lazy" src="${esc(p.imageUrl)}" alt="" onload="this.classList.add('ld')">
      </div>
      <div class="pa">
        <button class="act${lk[u]?' lk':''}" data-like="${p.id}">${ic('heart',18)}<span data-ln="${p.id}">${n}</span></button>
        <button class="act" data-cmt="${p.id}">${ic('msg',18)}<span data-cn="${p.id}"></span></button>
        <button class="act" data-share="${p.id}">${ic('send',18)}</button>
      </div>
      <div class="cm${S.open.has(p.id)?' on':''}" data-c="${p.id}">
        <div class="cw">
          <div class="cl" data-cl="${p.id}"></div>
          <div class="cf">
            <input data-ci="${p.id}" maxlength="300" placeholder="Komentar…">
            <button class="ib ac" data-send="${p.id}" aria-label="Kirim">${ic('send',16)}</button>
          </div>
        </div>
      </div>
    </article>`}).join('')
    +(S.posts.length>=S.lim?'<button class="btn ou w" id="more" style="margin-top:8px">Lainnya</button>':'');
  Object.keys(inp).forEach(id=>{const i=$(`[data-ci="${id}"]`);if(i)i.value=inp[id]});
  S.open.forEach(id=>cmtListen(id));
  sc.scrollTop=top;
  if(an){
    requestAnimationFrame(()=>{
      const io=new IntersectionObserver(es=>es.forEach(x=>{
        if(x.isIntersecting){const q=x.target;q.classList.add('in');io.unobserve(q);
          setTimeout(()=>q.classList.remove('pre','in'),2400)}
      }),{root:sc,threshold:.06});
      $$('.post.pre').forEach(q=>io.observe(q));
    });
  }
}
function cmtListen(id){
  if(!fb)return;cu.get(id)&&cu.get(id)();
  const{D,db}=fb;
  cu.set(id,D.onValue(D.query(D.ref(db,'comments/'+id),D.orderByChild('createdAt'),D.limitToLast(100)),s=>{
    const a=[];s.forEach(c=>{a.push(c.val()||{})});
    a.sort((x,y)=>(x.createdAt||0)-(y.createdAt||0));
    const b=$(`[data-cl="${id}"]`);if(!b)return;
    const bot=b.scrollHeight-b.scrollTop-b.clientHeight<40;
    b.innerHTML=a.map(c=>`<div><b>${esc(c.author)}</b>${esc(c.text)}</div>`).join('');
    const cn=$(`[data-cn="${id}"]`);if(cn)cn.textContent=a.length||'';
    if(bot)b.scrollTop=b.scrollHeight;
  },()=>{}));
}
function toggleC(id){
  const o=S.open.has(id);
  o?(S.open.delete(id),cu.get(id)&&cu.get(id)(),cu.delete(id)):(S.open.add(id),cmtListen(id));
  const c=$(`[data-c="${id}"]`);if(c)c.classList.toggle('on',!o);
}
function bumpN(sp,v){if(!sp)return;sp.textContent=v;
  sp.animate([{transform:'translateY(10px)',opacity:0},{transform:'none',opacity:1}],
    {duration:600,easing:'cubic-bezier(.16,1,.3,1)'})}
function heartBurst(media){
  if(!media)return;
  const b=document.createElement('div');b.className='burst';b.textContent='❤️';media.appendChild(b);
  setTimeout(()=>b.remove(),1700);
  const r=document.createElement('div');r.className='burst ring';media.appendChild(r);
  setTimeout(()=>r.remove(),1700);
}
async function like(id,b){
  if(!fb||!S.user)return;
  const n=Date.now();if(n-S.lastLike<600)return;S.lastLike=n;
  const{D,db}=fb,u=S.user.uid,
    p=S.posts.find(x=>x.id===id),
    was=p&&p.likes&&p.likes[u],r=D.ref(db,`posts/${id}/likes/${u}`);
  if(p){
    p.likes=p.likes||{};was?delete p.likes[u]:p.likes[u]=n;
    if(b){b.classList.toggle('lk',!was);
      if(!was){b.classList.add('pop');setTimeout(()=>b.classList.remove('pop'),1000)}}
    bumpN($(`[data-ln="${id}"]`),Object.keys(p.likes).length);
  }
  try{was?await D.remove(r):await D.set(r,n)}catch(e){S.key=''}
}
const nick=()=>new Promise(r=>{
  if(S.nick)return r(S.nick);
  modal('<h2>Nama</h2><div class="fd"><input id="ni" maxlength="24" placeholder="Nama"></div><div class="r2"><button class="btn ou" id="nc">Batal</button><button class="btn pr" id="ns">Simpan</button></div>');
  $('#nc').onclick=()=>{closeM();r(null)};
  $('#ns').onclick=()=>{const v=$('#ni').value.trim().slice(0,24);
    if(!v)return toast('Isi nama');
    S.nick=v;LS.set('si_nick',v);closeM();r(v)};
});
async function sendC(id){
  if(!fb||!S.user)return;
  const n=Date.now();
  if(n-S.lastCmt<5000)return toast('Tunggu '+(5000-(n-S.lastCmt))/1000|0+'d');
  const i=$(`[data-ci="${id}"]`),t=i.value.trim();if(!t)return;
  const nm=await nick();if(!nm)return;S.lastCmt=n;
  try{const{D,db}=fb;
    await D.set(D.push(D.ref(db,'comments/'+id)),{text:t.slice(0,300),author:nm,uid:S.user.uid,createdAt:Date.now()});
    i.value='';
  }catch(e){}
}
async function delPost(id){if(!confirm('Hapus?'))return;
  try{await fb.D.remove(fb.D.ref(fb.db,'posts/'+id))}catch(e){}}
async function sharePost(id){
  const p=S.posts.find(x=>x.id===id);if(!p)return;
  try{
    if(navigator.share)await navigator.share({title:p.title,text:p.description||p.title});
    else{await navigator.clipboard.writeText(p.title+'\n'+(p.description||''));toast('Tersalin')}
  }catch(e){}
}
$('#feed').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;const d=b.dataset;
  if(d.like)like(d.like,b);
  else if(d.cmt)toggleC(d.cmt);
  else if(d.send)sendC(d.send);
  else if(d.del)delPost(d.del);
  else if(d.share)sharePost(d.share);
  else if(b.id==='first')go('editor');
  else if(b.id==='more'){S.lim+=8;listen()}
});
$('#feed').addEventListener('click',e=>{
  const m=e.target.closest('.media');if(!m)return;
  const id=m.dataset.media;if(!id)return;
  const now=Date.now();
  if(S.tapTarget===id&&now-S.lastTap<320){
    const art=m.closest('.post');
    const btn=art&&art.querySelector(`[data-like="${id}"]`);
    const isLiked=btn&&btn.classList.contains('lk');
    if(!isLiked){heartBurst(m);like(id,btn)}
    m.classList.add('dt');setTimeout(()=>m.classList.remove('dt'),1000);
    S.lastTap=0;S.tapTarget=null;
  }else{S.lastTap=now;S.tapTarget=id}
});
$('#feed').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.dataset.ci)sendC(e.target.dataset.ci)});

$('#stories').addEventListener('click',e=>{
  const st=e.target.closest('[data-story]');
  const np=e.target.closest('[data-story-new]');
  if(np){newDoc();go('editor');return}
  if(!st)return;
  const id=st.dataset.story;
  const p=S.posts.find(x=>x.id===id);if(!p)return;
  modal(`<h2>${esc(p.title||'')}</h2><img class="pv" src="${esc(p.imageUrl)}" alt="" style="max-height:60vh"><div class="r2"><button class="btn pr" id="sc1">Buka</button></div>`);
  $('#sc1').onclick=()=>{
    closeM();
    setTimeout(()=>{
      const el=document.querySelector(`[data-pid="${id}"]`);
      if(el){el.scrollIntoView({behavior:'smooth',block:'center'});
        el.animate([{transform:'scale(1)'},{transform:'scale(1.02)'},{transform:'scale(1)'}],
          {duration:1100,easing:'cubic-bezier(.16,1,.3,1)'})}
    },500);
    const seen=new Set(JSON.parse(LS.get('si_seen')||'[]'));
    seen.add(id);LS.set('si_seen',JSON.stringify([...seen].slice(-40)));
    st.classList.add('seen');
  };
});

let ptrStart=0,ptrDragging=false,ptrReady=false;
const PTR=$('#ptr');
FS.addEventListener('touchstart',e=>{
  if(FS.scrollTop<=0&&!ptrDragging){ptrStart=e.touches[0].clientY;ptrReady=false}
},{passive:true});
FS.addEventListener('touchmove',e=>{
  if(ptrStart===0)return;
  const dy=e.touches[0].clientY-ptrStart;
  if(dy>0&&FS.scrollTop<=0){
    ptrDragging=true;
    const pull=Math.min(dy*0.5,110);
    PTR.style.transform=`translate(-50%,${pull+72}px) scale(${Math.min(1,pull/60)})`;
    PTR.style.opacity=Math.min(1,pull/50);
    if(pull>65&&!ptrReady){ptrReady=true;PTR.classList.add('ready')}
    else if(pull<=65&&ptrReady){ptrReady=false;PTR.classList.remove('ready')}
  }
},{passive:true});
FS.addEventListener('touchend',()=>{
  if(!ptrDragging){ptrStart=0;return}
  if(ptrReady){
    PTR.style.transform='translate(-50%,130px) scale(1)';
    setTimeout(()=>{
      S.shown=false;S.key='';listen();
      PTR.style.transform='translate(-50%,0) scale(1)';PTR.style.opacity=0;
      setTimeout(()=>{PTR.classList.remove('ready');PTR.style.transform='';PTR.style.opacity=''},700);
    },900);
  }else{
    PTR.style.transform='';PTR.style.opacity='';
    setTimeout(()=>PTR.classList.remove('ready'),500);
  }
  ptrStart=0;ptrDragging=false;ptrReady=false;
});

$('#bnav').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;
  const n=b.dataset.nav;
  if(n==='create'){newDoc();go('editor')}
  else if(n==='theme'){vt(THEMES[(THEMES.indexOf(theme())+1)%THEMES.length]);
    b.animate([{transform:'scale(1)'},{transform:'scale(1.15)'},{transform:'scale(1)'}],
      {duration:700,easing:'cubic-bezier(.34,1.56,.64,1)'})}
  else if(n==='home'){go('home')}
  else if(n==='feed'||n==='top'){FS.scrollTo({top:0,behavior:'smooth'})}
});
function updGreet(){
  const gt=$('#greetTxt');
  if(gt)gt.textContent=S.nick?S.nick:'Feed';
  const ga=$('#greetAv');
  if(ga&&S.nick)ga.textContent=S.nick.charAt(0).toUpperCase();
}
$('#greetAv').onclick=async()=>{const v=await nick();if(v){updGreet()}};

$$('[data-ic]').forEach(e=>e.innerHTML=ic(e.dataset.ic,20));
const vt=t=>{document.documentElement.dataset.nav='';
  if(document.startViewTransition)document.startViewTransition(()=>setTheme(t));
  else setTheme(t);
  setTimeout(()=>document.documentElement.dataset.nav='',1200)};
if(document.startViewTransition)document.documentElement.classList.add('vt');
$$('.dot').forEach(d=>d.onclick=()=>vt(d.dataset.th));
$('#fTheme').onclick=()=>vt(THEMES[(THEMES.indexOf(theme())+1)%THEMES.length]);
$('#bNew').onclick=()=>{newDoc();go('editor')};
$('#bFeed').onclick=()=>go('feed');
$('#fBack').onclick=()=>go('home');
$('#md').addEventListener('pointerdown',e=>{if(e.target.id==='md'&&!$('#ni'))closeM()});
$('#eBack').onclick=()=>{if(!S.els.length||confirm('Keluar?'))go('feed')};
$('#eUndo').onclick=undo;$('#eRedo').onclick=redo;
$('#eDl').onclick=exportMenu;$('#ePub').onclick=pub;
$('#fi').onchange=e=>{const f=e.target.files[0];e.target.value='';if(f)addPhoto(f)};
$('.tb').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;const t=b.dataset.t;
  if(t==='photo')return $('#fi').click();
  if(t==='text')return addText();
  S.tool=t;$$('.tb button').forEach(x=>x.classList.toggle('on',x===b));pick(null);
});
setTheme(THEMES.includes(LS.get('si_theme'))?LS.get('si_theme'):'mono');
addEventListener('pointerdown',e=>{
  const b=e.target.closest('.btn,.chip,.ib');if(!b)return;
  const r=b.getBoundingClientRect(),z=Math.max(r.width,r.height)*2.2,n=document.createElement('span');
  n.className='rp';
  n.style.cssText=`width:${z}px;height:${z}px;left:${e.clientX-r.left-z/2}px;top:${e.clientY-r.top-z/2}px`;
  b.appendChild(n);setTimeout(()=>n.remove(),1100);
});
hb();updGreet();initFb();

(()=>{
const D0=document.documentElement,bgfx=$('#bgfx');
D0.style.setProperty=function(k,v){return CSSStyleDeclaration.prototype.setProperty.call(k==='--mx'||k==='--my'?bgfx.style:this,k,v)};
const LD=new Set(),_render=render;
render=function(){_render();$$('#feed .post').forEach(p=>{const i=$('.media img',p),id=p.dataset.pid;if(!i)return;
  if(LD.has(id)){i.style.transition='none';i.classList.add('ld')}else i.addEventListener('load',()=>LD.add(id),{once:true})})};

Object.assign(I,{
  scan:'<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7 12h10"/>',
  qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v1M14 20h1M20 20h1M17 17v3"/>'});
$$('#s-chat [data-ic],#s-room [data-ic]').forEach(e=>e.innerHTML=ic(e.dataset.ic,20));

THEMES.splice(0,THEMES.length,'mono','slate','pink','sky','custom');
Object.assign(TC,{mono:'#e4e6eb',slate:'#434750',custom:'#e9eefb'});
COL[0]='#4b5563';BGS[6]='#4b5563';BGS[7]='#64748b';GRADS[3]=['#64748b','#94a3b8'];GRADS[7]=['#6b7280','#9ca3af'];
S.bg.patC='#6b7280';
const lum=h=>{const n=parseInt(h.slice(1),16);return(.299*(n>>16)+.587*(n>>8&255)+.114*(n&255))/255};
const CK=['--ac','--af','--bg','--tx','--t2','--t3','--sf','--s2','--s3','--bd','--b2','--hi'];
function customVars(){
  let a=LS.get('si_cA')||'#6b8cff',b=LS.get('si_cB')||'#e9eefb';
  if(lum(a)<.18)a='#4b5563';if(lum(b)<.2)b='#434750';
  const v=lum(b)<.5?{'--sf':'rgba(255,255,255,.10)','--s2':'rgba(255,255,255,.07)','--s3':'rgba(255,255,255,.16)','--bd':'rgba(255,255,255,.14)','--b2':'rgba(255,255,255,.24)','--tx':'#f1f2f4','--t2':'#c3c7d0','--t3':'#8f95a1'}:{'--tx':'#374151','--t2':'#5b6472','--t3':'#98a0ad'};
  Object.assign(v,{'--ac':a,'--hi':a,'--bg':b,'--af':lum(a)>.6?'#1f2937':'#fff'});
  for(const k in v)D0.style.setProperty(k,v[k]);
}
const _st=setTheme;
setTheme=function(t){CK.forEach(k=>D0.style.removeProperty(k));if(t==='custom')customVars();_st(t)};
function themeModal(){
  modal(`<h2>Tema kustom</h2>
    <div class="fd"><label>Warna aksen</label><input type="color" id="ca" value="${LS.get('si_cA')||'#6b8cff'}" style="width:100%;height:44px"></div>
    <div class="fd"><label>Warna latar (paling gelap abu #434750)</label><input type="color" id="cb" value="${LS.get('si_cB')||'#e9eefb'}" style="width:100%;height:44px"></div>
    <div class="r2"><button class="btn pr" id="cd">Selesai</button></div>`);
  const f=()=>{LS.set('si_cA',$('#ca').value);LS.set('si_cB',$('#cb').value);setTheme('custom')};
  $('#ca').oninput=f;$('#cb').oninput=f;$('#cd').onclick=closeM;
}
$('.dot[data-th=dark]').remove();
$('.dot[data-th=mono]').style.background='#6b7280';
$('.dots').insertAdjacentHTML('beforeend','<button class="dot" data-th="slate" style="background:#454952" aria-label="Abu gelap"></button><button class="dot" data-th="custom" style="background:conic-gradient(#ff86bd,#7fa6ff,#5fe3c0,#ffc46b,#ff86bd)" aria-label="Kustom"></button>');
$$('.dot').forEach(d=>d.onclick=()=>{vt(d.dataset.th);if(d.dataset.th==='custom')setTimeout(themeModal,400)});
setTheme(THEMES.includes(theme())?theme():'mono');

ORD.chat=3;ORD.room=4;
const _go=go,_nd=newDoc;
go=function(n){if(S.scr==='room'&&n!=='room')roomOff();_go(n);if(n==='chat')gList()};
newDoc=function(){_nd();S.bg.patC='#6b7280';fit()};
$('#bFeed').insertAdjacentHTML('afterend','<button class="btn ou w" id="bChat">Chatters</button>');
$('#bChat').onclick=()=>go('chat');
const nb=$('#bnav [data-nav=theme]');nb.dataset.nav='chat';nb.setAttribute('aria-label','Chatters');nb.innerHTML=ic('msg',22);
$('#bnav').addEventListener('click',e=>{if(e.target.closest('[data-nav=chat]'))go('chat')});
$('#cBack').onclick=()=>go('home');$('#rBack').onclick=()=>go('chat');

Object.assign(PRE,{Noir:{gr:100,co:130,br:92},Matte:{co:88,br:108,sa:90},Emas:{se:55,sa:140,br:104},Pastel:{br:116,sa:70,co:90},Siber:{hu:200,sa:170,co:120},Retro:{se:40,hu:340,sa:120,co:95}});
const TS={Judul:{font:'Bricolage Grotesque',weight:800,size:110,ls:-2},Quote:{font:'Playfair Display',italic:1,weight:400,size:64,ls:0},Neon:{font:'Space Grotesk',weight:700,color:'#ffffff',tsh:1,esh:1,ls:2,upper:1},Label:{font:'Inter',weight:700,size:40,upper:1,ls:6,hl:'#be185d',color:'#ffffff',hlr:14},Tulis:{font:'Caveat',weight:700,size:96,ls:0}};
const _at=addText;addText=(o={})=>_at({color:'#374151',...o});
const xtra=el=>{
  let h=sec('Rotasi',rng('rot','Sudut',-180,180,Math.round(el.rot||0),'°')
    +'<div class="row"><button class="chip" data-x="r-90">−90°</button><button class="chip" data-x="r90">+90°</button><button class="chip" data-x="r0">0°</button><button class="chip" data-x="fill">Isi kanvas</button></div>');
  if(el.type==='text')h+=sec('Gaya cepat','<div class="row sc">'+Object.keys(TS).map(k=>`<button class="chip" data-x="ts:${k}">${k}</button>`).join('')+'</div>');
  if(el.type==='image')h+=sec('','<div class="row"><button class="chip" data-x="rst">Reset filter</button></div>');
  return h};
const _pn=panel;
panel=function(){_pn();const el=cur(),q=$('.in2',P);if(el&&q)q.insertAdjacentHTML('beforeend',xtra(el))};
P.addEventListener('click',e=>{
  const b=e.target.closest('[data-x]'),el=cur();if(!b||!el)return;
  const v=b.dataset.x,{w,h}=dims();snap();
  if(v==='r0')el.rot=0;
  else if(/^r-?90$/.test(v)){el.rot=(el.rot||0)+(+v.slice(1));while(el.rot>180)el.rot-=360;while(el.rot<-180)el.rot+=360}
  else if(v==='fill'){el.x=0;el.w=w;if(el.type!=='text'){el.y=0;el.h=h}}
  else if(v==='rst')Object.assign(el,FD);
  else if(v.startsWith('ts:'))Object.assign(el,TS[v.slice(3)]);
  upd(el);panel()});
SW.addEventListener('dragover',e=>e.preventDefault());
SW.addEventListener('drop',e=>{e.preventDefault();const f=e.dataTransfer.files[0];f&&addPhoto(f)});
addEventListener('paste',e=>{if(S.scr!=='editor')return;const f=[...(e.clipboardData?.files||[])][0];f&&addPhoto(f)});

const R={t:null,id:null,font:'Inter',color:'',u:null,last:0};
const gs=()=>{try{return JSON.parse(LS.get('si_groups')||'[]')}catch(e){return[]}};
const addG=g=>{const a=gs().filter(x=>x.id!==g.id);a.unshift(g);LS.set('si_groups',JSON.stringify(a.slice(0,40)));gList()};
const pth=(t,id)=>t==='global'?'gchat':'groups/'+id;
const glink=id=>location.href.split('#')[0]+(id?'#g='+id:'#global');
function gList(){
  const a=gs();
  $('#gList').innerHTML=a.length?a.map(g=>`<div class="gcard" data-g="${esc(g.id)}"><div class="gi">${esc(g.name.charAt(0).toUpperCase())}</div><div class="gt"><b>${esc(g.name)}</b></div><button class="ib" data-x="${esc(g.id)}" aria-label="Keluar">${ic('x',16)}</button></div>`).join(''):'<small style="display:block;text-align:center;color:var(--t3);padding:18px">Belum ada grup</small>';
}
$('#gList').onclick=e=>{
  const x=e.target.closest('[data-x]');
  if(x){e.stopPropagation();LS.set('si_groups',JSON.stringify(gs().filter(g=>g.id!==x.dataset.x)));gList();return}
  const c=e.target.closest('[data-g]');if(c){const o=gs().find(z=>z.id===c.dataset.g);o&&openRoom('g',o.id,o.name)}};
$('#gGlobal').onclick=()=>openRoom('global','','Global Chat');
$('#gQr').onclick=e=>{e.stopPropagation();qrModal('Global Chat',glink())};

function msgHTML(m,u){
  const me=m.uid===u,f=FONTS.includes(m.f)?m.f:'Inter',c=/^#[0-9a-f]{6}$/i.test(m.c||'')?m.c:'';
  return`<div class="mg${me?' me':''}"><small>${me?'Kamu':esc(m.n)} · ${esc(ago(m.t)||'baru')}</small>`
    +(m.i&&/^data:image\//.test(m.i)?`<img src="${m.i}" alt="" data-zoom>`:'')
    +(m.x?`<span style="font-family:'${f}',Inter,sans-serif;font-size:15px;${c?'color:'+c:''}">${esc(m.x)}</span>`:'')+'</div>'}
function openRoom(t,id,name){
  if(!fb||!S.user)return toast('Menyambungkan…');
  roomOff();R.t=t;R.id=id;$('#rT').textContent=name;$('#rL').innerHTML='';go('room');
  const{D,db}=fb;
  R.u=D.onChildAdded(D.query(D.ref(db,pth(t,id)+'/msgs'),D.orderByChild('t'),D.limitToLast(80)),c=>{
    const L=$('#rL'),bot=L.scrollHeight-L.scrollTop-L.clientHeight<140;
    L.insertAdjacentHTML('beforeend',msgHTML(c.val()||{},S.user.uid));
    if(bot)L.scrollTop=L.scrollHeight},()=>toast('Tidak bisa memuat (cek rules)'));
}
function roomOff(){R.u&&R.u();R.u=null}
async function sendMsg(o,t=R.t,id=R.id){
  if(!fb||!S.user){toast('Menyambungkan…');return 0}
  const n=Date.now();if(n-R.last<700)return 0;
  const nm=await nick();if(!nm)return 0;R.last=n;
  try{const{D,db}=fb;await D.set(D.push(D.ref(db,pth(t,id)+'/msgs')),{uid:S.user.uid,n:nm,t:n,f:R.font,c:R.color,...o});return 1}
  catch(e){toast('Gagal kirim');return 0}
}
const rI=$('#rI');
$('#rS').onclick=async()=>{const x=rI.value.trim();if(!x)return;rI.value='';rI.style.height='';await sendMsg({x:x.slice(0,500)})};
rI.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();$('#rS').click()}});
rI.addEventListener('input',()=>{rI.style.height='auto';rI.style.height=Math.min(rI.scrollHeight,110)+'px'});
$('#rF').innerHTML=FONTS.map(f=>`<button class="chip${f==='Inter'?' on':''}" data-f="${f}" style="font-family:'${f}'">${f}</button>`).join('')
  +['','#be185d','#0369a1','#15803d','#ca8a04','#7e22ce'].map(c=>`<button class="sw" data-c="${c}" style="background:${c||'transparent'}"></button>`).join('');
$('#rF').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  if(b.dataset.f!==undefined){R.font=b.dataset.f;$$('#rF .chip').forEach(c=>c.classList.toggle('on',c===b));rI.style.fontFamily=`'${R.font}',Inter`}
  else{R.color=b.dataset.c;rI.style.color=R.color}};
$('#rFt').onclick=()=>$('#rF').classList.toggle('on');
$('#rL').onclick=e=>{if(e.target.dataset.zoom!==undefined)modal(`<img class="pv" style="max-height:70vh" src="${e.target.src}" alt="">`)};
async function shrink(f,mx=960){
  const u=URL.createObjectURL(f),im=await img(u);URL.revokeObjectURL(u);
  const s=Math.min(1,mx/Math.max(im.width,im.height)),c=document.createElement('canvas');
  c.width=im.width*s|0;c.height=im.height*s|0;c.getContext('2d').drawImage(im,0,0,c.width,c.height);
  let q=.8,d=c.toDataURL('image/jpeg',q);while(d.length>5e5&&q>.35){q-=.1;d=c.toDataURL('image/jpeg',q)}return d}
$('#rPh').onclick=()=>$('#fc').click();
$('#fc').onchange=async e=>{const f=e.target.files[0];e.target.value='';if(!f||!f.type.startsWith('image/'))return;
  ld(1);try{await sendMsg({i:await shrink(f)})}catch(x){toast('Gagal')}ld(0)};

function qrModal(title,link){
  if(!window.qrcode)return toast('QR belum siap');
  const q=qrcode(0,'M');q.addData(link);q.make();
  modal(`<h2>${esc(title)}</h2><img class="qrb" src="${q.createDataURL(6,2)}" alt="QR">
    <div class="fd"><input id="ql" readonly value="${esc(link)}"></div>
    <div class="r2"><button class="btn ou" id="qc">Salin</button><button class="btn pr" id="qd">Selesai</button></div>`);
  $('#qc').onclick=async()=>{try{await navigator.clipboard.writeText(link);toast('Tersalin')}catch(e){$('#ql').select()}};
  $('#qd').onclick=closeM}
$('#rQr').onclick=()=>R.t==='global'?qrModal('Global Chat',glink()):qrModal($('#rT').textContent,glink(R.id));

$('#gNew').onclick=()=>{
  modal('<h2>Grup baru</h2><div class="fd"><input id="gn" maxlength="30" placeholder="Nama grup"></div><div class="r2"><button class="btn ou" id="gc">Batal</button><button class="btn pr" id="gk">Buat</button></div>');
  $('#gc').onclick=closeM;
  $('#gk').onclick=async()=>{
    const v=$('#gn').value.trim();if(!v)return toast('Isi nama');
    if(!fb||!S.user)return toast('Menyambungkan…');
    const id=rid()+rid()+rid();
    try{await fb.D.set(fb.D.ref(fb.db,'groups/'+id+'/meta'),{name:v,owner:S.user.uid,t:Date.now()})}catch(e){return toast('Gagal (cek rules)')}
    addG({id,name:v});closeM();openRoom('g',id,v);qrModal(v,glink(id))}};

async function joinG(id){
  if(!fb||!S.user)return toast('Menyambungkan…');
  try{const s=await fb.D.get(fb.D.ref(fb.db,'groups/'+id+'/meta'));
    if(!s.exists())return toast('Grup tidak ditemukan');
    addG({id,name:s.val().name});openRoom('g',id,s.val().name)}
  catch(e){toast('Gagal bergabung')}}
function handle(s){
  s=String(s||'');
  const m=s.match(/[#&]g=([a-z0-9]{8,40})/i)||s.match(/^([a-z0-9]{12,40})$/i);
  if(m){closeScan();joinG(m[1]);return 1}
  if(/#global|^global$/i.test(s)){closeScan();openRoom('global','','Global Chat');return 1}
  return 0}
let SC=null;
function stopCam(){if(SC){SC.on=0;SC.st.getTracks().forEach(t=>t.stop());SC=null}}
function closeScan(){stopCam();closeM()}
async function scanModal(){
  modal('<h2>Scan QR</h2><video id="vid" playsinline muted></video><div class="fd" style="margin-top:12px"><input id="sk" placeholder="atau tempel tautan / kode"></div><div class="r2"><button class="btn ou" id="sx">Tutup</button><button class="btn pr" id="sg">Gabung</button></div>');
  $('#sx').onclick=closeScan;$('#sg').onclick=()=>handle($('#sk').value.trim())||toast('Kode tidak valid');
  try{
    const st=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'}}),v=$('#vid');
    if(!v){st.getTracks().forEach(t=>t.stop());return}
    v.srcObject=st;await v.play();SC={st,on:1};
    const c=document.createElement('canvas'),x=c.getContext('2d',{willReadFrequently:true}),md=$('#md');
    const tick=()=>{
      if(!SC||!v.isConnected||!md.classList.contains('on')||md.classList.contains('out'))return stopCam();
      if(v.videoWidth&&window.jsQR){c.width=v.videoWidth/2|0;c.height=v.videoHeight/2|0;x.drawImage(v,0,0,c.width,c.height);
        const r=jsQR(x.getImageData(0,0,c.width,c.height).data,c.width,c.height);if(r&&handle(r.data))return}
      setTimeout(tick,150)};
    tick();
  }catch(e){toast('Kamera tidak tersedia (butuh HTTPS) — tempel kode saja')}
}
$('#cScan').onclick=scanModal;$('#gScan').onclick=scanModal;

$('#eDl').insertAdjacentHTML('beforebegin','<button class="ib" id="eSend" aria-label="Kirim ke chat"></button>');
$('#eSend').innerHTML=ic('send',20);
$('#eSend').onclick=async()=>{
  if(!S.els.length)return toast('Kosong');
  if(!fb||!S.user)return toast('Menyambungkan…');
  const nm=await nick();if(!nm)return;
  modal('<h2>Kirim ke…</h2><div id="tg"><div class="gcard" data-t="global"><div class="gi">🌐</div><div class="gt"><b>Global Chat</b></div></div>'
    +gs().map(g=>`<div class="gcard" data-t="g" data-id="${esc(g.id)}"><div class="gi">${esc(g.name.charAt(0).toUpperCase())}</div><div class="gt"><b>${esc(g.name)}</b></div></div>`).join('')+'</div>');
  $('#tg').onclick=async e=>{
    const c=e.target.closest('.gcard');if(!c)return;closeM();ld(1);
    try{const cv=await draw(.8);let q=.85,d=cv.toDataURL('image/jpeg',q);
      while(d.length>5e5&&q>.3){q-=.1;d=cv.toDataURL('image/jpeg',q)}
      if(await sendMsg({i:d},c.dataset.t,c.dataset.id))toast('Terkirim')}catch(x){toast('Gagal')}
    ld(0)}};

const w=setInterval(()=>{if(fb){clearInterval(w);if(location.hash&&handle(location.hash))history.replaceState(null,'',location.pathname+location.search)}else if(fbErr)clearInterval(w)},400);
})();
  
