(()=>{"use strict";function t(){const t=document.createElement("form");t.id="note-form";const e=document.createElement("div");e.classList.add("form-group");const n=document.createElement("input");n.type="text",n.id="note-title",n.name="title",n.id="note-title",n.required=!0,e.appendChild(n);const o=document.createElement("div");o.classList.add("form-group");const d=document.createElement("label");d.textContent="",d.setAttribute("for","note-content");const c=document.createElement("textarea");c.classList.add("note-content"),c.id="note-content",c.textContent="Description",c.name="content",c.required=!0,c.textContent=d.textContent,o.appendChild(d),o.appendChild(c);const a=document.createElement("label"),s=document.createElement("input");s.type="date",s.name="date",a.appendChild(s);const i=document.createElement("button");return i.type="submit",i.textContent="Save",t.appendChild(e),t.appendChild(o),t.appendChild(a),t.appendChild(i),t}const e=[];function n(t){const e=document.createElement("div");e.classList.add("note");const n=document.createElement("h3");n.textContent=t.title;const o=document.createElement("p");o.textContent=t.content;const d=document.createElement("span");d.textContent=(new Date).toLocaleDateString();const c=document.createElement("button");return c.textContent="Delete",c.addEventListener("click",(function(){t.remove()})),e.appendChild(n),e.appendChild(o),e.appendChild(d),e.appendChild(c),e}function o(){const t=document.getElementById("notes-container");t.id="notes-container",console.log(t),t.textContent="";for(let o=0;o<e.length;o++){const d=n(e[o]);t.appendChild(d)}}!function(){const n=document.getElementById("content");n.classList.add("content"),n.appendChild(function(){const t=document.createElement("header");t.classList.add("main-div");const e=document.createElement("div");e.classList.add("header-container");const n=document.createElement("h1");n.classList.add("title"),n.textContent="Odin's ToDo List";const o=document.createElement("img");return o.classList.add("logo"),o.src="../src/img/icon.png",o.alt="logo",e.appendChild(o),e.appendChild(n),t.appendChild(e),t}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("main-container");const d=document.createElement("div");d.classList.add("navbar");const c=document.createElement("h2");c.classList.add("head"),c.textContent="Lists";const a=document.createElement("button");a.classList.add("create-note-btn"),a.textContent="+ New Note";const s=document.createElement("div");return s.classList.add("notes-container"),s.id="notes-container",a.addEventListener("click",(()=>{const n=t();s.appendChild(n),n.addEventListener("submit",(t=>{t.preventDefault(),function(){const t=document.getElementById("note-title").value,n=document.getElementById("note-content").value,d=(new Date).toLocaleString();console.log(t),console.log(n);const c={title:t,content:n,date:d};e.push(c),console.log("this is the notes array",e),o()}(),o(),n.reset()}))})),d.appendChild(c),d.appendChild(a),n.appendChild(d),n.appendChild(s),n}()),n.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("h2");return e.classList.add("footer-h2"),e.textContent="Copyright © 2023 mikeatwood",t.appendChild(e),t}()),console.log(t())}()})();