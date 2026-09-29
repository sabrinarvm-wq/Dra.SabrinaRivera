
const toggle=document.querySelector('.nav-toggle');
const menu=document.querySelector('.menu');
if(toggle&&menu) toggle.addEventListener('click',()=>menu.classList.toggle('open'));
document.querySelectorAll('.faq button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faq'); item.classList.toggle('open');
    const icon=btn.querySelector('span:last-child');
    if(icon) icon.textContent=item.classList.contains('open')?'−':'+';
  });
});
document.querySelectorAll('[data-track]').forEach(el=>{
  el.addEventListener('click',()=>{
    const payload={
      event:'contact_cta',
      action:el.dataset.track||'contact',
      page:document.title,
      path:location.pathname
    };
    window.dataLayer=window.dataLayer||[];
    window.dataLayer.push(payload);
  });
});
