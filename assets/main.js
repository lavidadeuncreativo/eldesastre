// ===== Config =====
const SITE = {
  name: 'El Desastre — Café + Libros',
  whatsapp: '525623871644', // +52 56 2387 1644
  email: 'libreriaeldesastre@gmail.com',
  address: 'San Francisco 233, Col. Del Valle, CDMX',
  hours: 'L–S 10–20 • D 10–15',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=El+Desastre+Cafe+%2B+Libros+San+Francisco+233+CDMX',
  billingUrl: 'https://eldesastre.com.mx/factura',
  instagram: 'https://www.instagram.com/eldesastre_delvalle/',
  heroImage: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1400&auto=format&fit=crop',
  heroVariants: [
    { id: 'A', title: 'Libros, café y un jardín para bajar el ritmo.', subtitle: 'Librería de editoriales independientes + barra de café. Martes de cine 20:00.'},
    { id: 'B', title: 'Tu pausa lectora en la Del Valle.', subtitle: 'Pasa, hojea, quédate. San Francisco 233. Café, libros y eventos cada semana.'},
    { id: 'C', title: 'Pasa, hojea, quédate.', subtitle: 'Café + librería en una casona con jardín. Agenda viva y catálogo curado.'}
  ],
  indieEditors: ['Almadía','Elefanta','Antílope','Paraíso Perdido','Sexto Piso','Grano de Sal','Argonáutica','SuVersión'],
  press: [
    { name: 'Time Out', quote: 'Terraza para leer por horas.', url: 'https://www.timeoutmexico.mx/ciudad-de-mexico/shopping/el-desastre-cafe-libros' },
    { name: 'AD México', quote: 'Casona con jardín hecha librería.', url: 'https://www.admagazine.com/articulos/el-desastre-la-libreria-que-transformo-una-casa-de-la-del-valle' },
    { name: 'Life&Style', quote: 'Independientes y bellas.', url: 'https://lifeandstyle.expansion.mx/vida/2025/07/15/librerias-independientes-en-cdmx' }
  ],
  instagramPosts: [
    'https://www.instagram.com/p/DMRAcLUylFu/',
    'https://www.instagram.com/p/DM0pvYOxKVG/',
    'https://www.instagram.com/p/DNzIThmYlke/',
    'https://www.instagram.com/p/DDIjwWquV8b/',
    'https://www.instagram.com/p/DKSasoQR59E/',
    'https://www.instagram.com/p/DIR9eDpRqEL/'
  ],
  books: [
    { id: 1, title: 'Ensayo mexicano', tag: 'Novedad', cover: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=640&auto=format&fit=crop' },
    { id: 2, title: 'Poesía mínima', tag: 'Poesía', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=640&auto=format&fit=crop' },
    { id: 3, title: 'Crónica del barrio', tag: 'Crónica', cover: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=640&auto=format&fit=crop' },
    { id: 4, title: 'Infantil curioso', tag: 'Infantil', cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=640&auto=format&fit=crop' },
    { id: 5, title: 'Ficción breve', tag: 'Ficción', cover: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=640&auto=format&fit=crop' },
    { id: 6, title: 'Pensamiento', tag: 'Ensayo', cover: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=640&auto=format&fit=crop' },
    { id: 7, title: 'Diseño y ciudad', tag: 'Diseño', cover: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=640&auto=format&fit=crop' },
    { id: 8, title: 'Gastronomía', tag: 'Cocina', cover: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=640&auto=format&fit=crop' }
  ],
  events: [
    { id: 1, title: 'Martes de cine', time: 'Mar 20:00', desc: 'Proyección + charla en el jardín.', cta: 'Confirmar por WhatsApp' },
    { id: 2, title: 'Presentación de libro', time: 'Jue 19:00', desc: 'Autores invitados y firma.', cta: 'Quiero ir' },
    { id: 3, title: 'Club de lectura', time: 'Sáb 12:00', desc: 'Sesión mensual, cupo limitado.', cta: 'Apuntarme' }
  ]
};

// ===== Helpers =====
const $ = sel => document.querySelector(sel);
const el = (tag, cls) => { const n = document.createElement(tag); if(cls) n.className = cls; return n; };
const waLink = (text='Hola, vengo de la web. Quiero info de [libro/evento].') => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
const track = (name) => { try{ const k='metric_'+name; const v=(+localStorage.getItem(k)||0)+1; localStorage.setItem(k,v); renderHud(); }catch(e){} };

// ===== Render =====
function renderHero(){
  $('#hero-img').style.backgroundImage = `url(${SITE.heroImage})`;
  $('#hours').textContent = SITE.hours; $('#address').textContent = SITE.address;
  $('#visit-address').textContent = SITE.address; $('#visit-hours').textContent = 'Horarios: '+SITE.hours;
  const a=$('#visit-email'); a.textContent = SITE.email; a.href = 'mailto:'+SITE.email;
  const hereUrl = `https://image.maps.ls.hereapi.com/mia/1.6/mapview?c=19.3869,-99.1637&z=16&w=1280&h=720&f=1&ml=spa`;
  const osmUrl = `https://staticmap.openstreetmap.de/staticmap.php?center=19.3869,-99.1637&zoom=16&size=1280x720&maptype=mapnik&markers=19.3869,-99.1637,lightblue1`;
  const map = $('#map-img');
  map.src = hereUrl;
  map.onerror = () => { map.onerror = null; map.src = osmUrl; };
  $('#year').textContent = new Date().getFullYear();
  $('#link-ig').href = SITE.instagram; $('#link-bill').href = SITE.billingUrl;
}

function renderPress(){
  const trackWrap = $('#press-track');
  const row = el('div'); row.style.display='flex'; row.style.gap='12px';
  [...SITE.press, ...SITE.press].forEach(p=>{ // duplicado para loop
    const b = el('button','btn btn-ghost'); b.style.padding='.35rem .75rem'; b.style.fontSize='.8rem';
    b.textContent = `★ ${p.name} — ${p.quote}`; b.onclick=()=>window.open(p.url,'_blank');
    row.appendChild(b);
  });
  trackWrap.appendChild(row);
}

function renderBooks(){
  const grid = $('#book-grid'); grid.innerHTML='';
  SITE.books.forEach(b=>{
    const card = el('div','card');
    const media = el('div','media'); const img = el('img'); img.loading='lazy'; img.src=b.cover; img.alt=b.title; media.appendChild(img);
    const pad = el('div','pad');
    const title = el('div'); title.textContent = b.title; title.style.fontWeight='600'; title.style.fontSize='14px'; title.style.margin='4px 0';
    const tag = el('span','badge'); tag.textContent=b.tag; tag.style.background='#0ea575'; tag.style.color='#fff'; tag.style.borderColor='#0ea575'; tag.style.fontSize='12px'; tag.style.marginRight='6px';
    const btn = el('button','btn btn-ghost'); btn.textContent='📚 Pedir por WhatsApp'; btn.style.width='100%'; btn.onclick=()=>{ track('wa_click_book'); window.open(waLink(`Hola, busco el libro: ${b.title}. ¿Lo tienen disponible?`),'_blank'); };
    const row = el('div'); row.append(tag); pad.append(row,title,btn);
    card.append(media,pad); grid.append(card);
  });
}

function renderEditors(){
  const row = $('#editor-chips'); row.innerHTML='';
  SITE.indieEditors.forEach(e=>{ const s = el('span','badge'); s.textContent=e; row.appendChild(s); });
}

function renderReviews(){
  const grid = $('#reviews-grid'); grid.innerHTML='';
  const reviews=[
    { name:'M. Hernández', text:'Espacio precioso para leer; el jardín es un oasis.', stars:5 },
    { name:'A. López', text:'Selección de editoriales independientes impecable.', stars:5 },
    { name:'S. Ramírez', text:'El martes de cine estuvo padrísimo.', stars:5 }
  ];
  reviews.forEach(r=>{
    const card = el('div','card'); const padH=el('div','pad'); const padC=el('div','pad');
    const stars = el('div'); stars.className='review-stars'; stars.textContent='★'.repeat(r.stars);
    const name = el('div'); name.textContent=r.name; name.style.fontWeight='600';
    const text = el('p'); text.className='muted'; text.textContent=r.text;
    padH.append(stars,name); padC.append(text); card.append(padH,padC); grid.append(card);
  });
}

function renderInstagram(){
  const grid = $('#ig-grid'); grid.innerHTML='';
  SITE.instagramPosts.forEach(url=>{
    const a = el('a','card'); a.href=url; a.target='_blank';
    const box = el('div','pad');
    const t = el('div'); t.textContent='Post de Instagram'; t.className='muted';
    const ph = el('div'); ph.style.border='1px dashed #ddd'; ph.style.borderRadius='12px'; ph.style.padding='24px'; ph.style.textAlign='center'; ph.textContent='Abrir ↗';
    box.append(t,ph); a.append(box); grid.append(a);
  });
}

function renderAgenda(){
  const grid = $('#agenda-grid'); grid.innerHTML='';
  SITE.events.forEach(ev=>{
    const card = el('div','card'); const padH=el('div','pad'); const padC=el('div','pad');
    const time = el('div'); time.textContent='🎬 '+ev.time; time.className='muted'; time.style.fontSize='12px';
    const ttl = el('div'); ttl.textContent=ev.title; ttl.style.fontWeight='600';
    const desc = el('p'); desc.textContent=ev.desc; desc.className='muted';
    const btn = el('button','btn btn-primary'); btn.textContent=ev.cta+' →'; btn.style.width='100%'; btn.onclick=()=>{ track('rsvp_click'); window.open(waLink(`Hola, quiero confirmar asistencia a: ${ev.title} (${ev.time}).`),'_blank'); };
    padH.append(time,ttl); padC.append(desc,btn); card.append(padH,padC); grid.append(card);
  });
}

function renderSpaces(){
  const grid = $('#spaces-grid'); grid.style.gridTemplateColumns='repeat(3,1fr)'; grid.style.gap='8px';
  [
    'https://images.unsplash.com/photo-1494451930944-8998635c5784?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop'
  ].forEach(src=>{
    const box = el('div'); box.style.borderRadius='16px'; box.style.overflow='hidden'; box.style.aspectRatio='1/1';
    const img = el('img'); img.src=src; img.loading='lazy'; img.alt='Espacio'; img.style.width='100%'; img.style.height='100%'; img.style.objectFit='cover';
    box.append(img); grid.append(box);
  });
}

function renderHud(){
  const hud = $('#hud');
  const wa = (+localStorage.getItem('metric_wa_click_hero')||0)+(+localStorage.getItem('metric_wa_click_book')||0)+(+localStorage.getItem('metric_wa_click_footer')||0)+(+localStorage.getItem('metric_wa_click_sticky')||0)+(+localStorage.getItem('metric_wa_click_header')||0);
  const rsvp = +localStorage.getItem('metric_rsvp_click')||0;
  const maps = (+localStorage.getItem('metric_maps_click_hero')||0)+(+localStorage.getItem('metric_maps_click_footer')||0);
  const scroll = +localStorage.getItem('metric_scroll_75')>0?100:0;
  hud.innerHTML = `<div>📊 Métricas demo</div><div>WhatsApp: <b>${wa}</b></div><div>RSVP: <b>${rsvp}</b></div><div>Cómo llegar: <b>${maps}</b></div><div>Scroll 75%: <b>${scroll}%</b></div>`
}

function bind(){
  // Buttons
  $('#btn-wa-header').onclick = ()=>{ track('wa_click_header'); window.open(waLink(),'_blank'); };
  $('#btn-wa-hero').onclick   = ()=>{ track('wa_click_hero');   window.open(waLink(),'_blank'); };
  $('#btn-wa-footer').onclick = ()=>{ track('wa_click_footer'); window.open(waLink(),'_blank'); };
  $('#btn-wa-sticky').onclick = ()=>{ track('wa_click_sticky'); window.open(waLink(),'_blank'); };
  $('#btn-maps-hero').onclick = ()=>{ track('maps_click_hero'); window.open(SITE.mapsUrl,'_blank'); };
  $('#btn-maps-footer').onclick=()=>{ track('maps_click_footer'); window.open(SITE.mapsUrl,'_blank'); };
  $('#btn-bill').onclick = $('#btn-bill-visit').onclick = $('#btn-bill-sticky').onclick = ()=> window.open(SITE.billingUrl,'_blank');
  $('#btn-ig').onclick = ()=> window.open(SITE.instagram,'_blank');
  $('#btn-more-reviews').onclick = ()=> window.open(SITE.mapsUrl,'_blank');
  $('#btn-gcal').onclick = ()=>{
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Martes%20de%20cine%20en%20El%20Desastre&details=Proyecci%C3%B3n%20y%20charla%20en%20el%20jard%C3%ADn.&location=${encodeURIComponent(SITE.address)}`;
    window.open(url,'_blank');
  };
  // Scroll 75%
  window.addEventListener('scroll',()=>{
    const sc = window.scrollY + window.innerHeight; const total = document.body.scrollHeight;
    if(sc/total>=.75 && !localStorage.getItem('metric_scroll_75')){ localStorage.setItem('metric_scroll_75',1); renderHud(); }
  });
}

function injectJSONLD(){
  const ld = {"@context":"https://schema.org","@type":"BookStore",name:SITE.name,address:SITE.address,openingHours:SITE.hours,email:SITE.email,url:location.href,sameAs:[SITE.instagram,'https://eldesastre.com.mx/']};
  const s = document.createElement('script'); s.type='application/ld+json'; s.textContent = JSON.stringify(ld); document.head.appendChild(s);
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  renderHero(); renderPress(); renderEditors(); renderBooks(); renderReviews(); renderInstagram(); renderAgenda(); renderSpaces(); bind(); renderHud(); injectJSONLD();
});
