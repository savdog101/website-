// EDIT THIS: your name and tagline appear on every page
const SITE={name:"Your Name",tag:"Writer, maker, curious person."};
const pages=[["index.html","Home"],["articles.html","Articles"],["projects.html","Projects"],["about.html","About"]];
const here=location.pathname.split("/").pop()||"index.html";
document.body.insertAdjacentHTML("afterbegin",
`<aside class="rail"><a class="logo" href="index.html">${SITE.name}<span>${SITE.tag}</span></a>
<nav aria-label="Main">${pages.map(p=>`<a href="${p[0]}"${p[0]===here?' aria-current="page"':''}>${p[1]}</a>`).join("")}</nav>
<button id="theme" aria-label="Switch light or dark mode">Light / Dark</button></aside>`);
document.title=document.title.replace("Your Name",SITE.name);
const root=document.documentElement;
try{const s=localStorage.getItem("theme");if(s)root.dataset.theme=s}catch(e){}
document.getElementById("theme").onclick=()=>{
const dark=root.dataset.theme==="dark"||(!root.dataset.theme&&matchMedia("(prefers-color-scheme:dark)").matches);
root.dataset.theme=dark?"light":"dark";try{localStorage.setItem("theme",root.dataset.theme)}catch(e){}};
document.querySelectorAll(".filters .chip").forEach(b=>b.onclick=()=>{
document.querySelectorAll(".filters .chip").forEach(x=>x.setAttribute("aria-pressed",x===b));
document.querySelectorAll("[data-topic]").forEach(a=>a.classList.toggle("hidden",b.dataset.f!=="all"&&a.dataset.topic!==b.dataset.f))});
document.querySelectorAll("footer span").forEach(s=>s.textContent=new Date().getFullYear()+" "+SITE.name);
