(()=>{"use strict";const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList="page-content";const n=document.createElement("div");n.classList="welcome-div";const d=document.createElement("h1");d.textContent="Worlds Best Restaurant",n.appendChild(d);const c=document.createElement("div");c.classList.add("review-div");const a=document.createElement("h3"),o=document.createElement("div");a.textContent="Review",o.textContent='"The best restaurant I have ever been too!" - Legit Reviewer',c.appendChild(a),c.appendChild(o);const s=document.createElement("div");s.classList.add("availability-div");const l=document.createElement("h3");l.textContent="Hours",s.append(l);const i=document.createElement("ul"),m=["Sunday","Monday","Tuestday","Wednesday","Thursday","Friday","Saturday"];for(let e of m){const t=document.createElement("li");t.textContent=`${e}: 8am - 8pm`,i.appendChild(t)}s.append(i);const r=document.createElement("div");r.classList.add("location-div");const u=document.createElement("h3");u.textContent="Location",r.appendChild(u);const p=document.createElement("div");p.textContent="123 Good Restaurant, Restaurant, Arizona",r.appendChild(p),t.appendChild(n),t.appendChild(c),t.appendChild(s),t.appendChild(r),e.appendChild(t)},t=()=>{const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)},n=()=>{const n=document.querySelector("#header"),d=document.createElement("div");d.classList.add("home-tab");const c=document.createElement("div");c.classList.add("menu-tab");const a=document.createElement("div");a.classList.add("contact-tab"),d.textContent="Home",c.textContent="Menu",a.textContent="Contact",d.addEventListener("click",(()=>{t(),e()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("div");n.classList.add("menu-title-div");const d=document.createElement("h1");d.textContent="Menu",d.classList.add("menu-title"),n.appendChild(d);const c=document.createElement("div");c.classList.add("menu-div");const a=document.createElement("h3");a.textContent="Food Items",c.appendChild(a);const o=document.createElement("ul");o.classList.add("food-list");const s=["Steak","Cheeseburger","Salad","Tacos"];for(let e of s){const t=document.createElement("li");t.textContent=e,o.appendChild(t)}c.appendChild(o),t.appendChild(n),t.appendChild(c),e.appendChild(t)})()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Contact Us";const d=document.createElement("div"),c=document.createElement("div"),a=document.createElement("div");d.textContent="Phone Number: 123-456-7890",c.textContent="ouremail@restaurant.com",a.textContent="12345 Restaurant Ave";const o=[d,c,a];t.appendChild(n),e.appendChild(t);for(let e of o)t.appendChild(e)})()})),n.appendChild(d),n.appendChild(c),n.appendChild(a)};n(),e()})();