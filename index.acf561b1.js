function r(r){return parseFloat(r.replace(/[$,]/g,""))}var t=document.querySelector("ul");!function(a){if(a){var e=Array.from(a.children);e.sort(function(t,a){var e=r(t.getAttribute("data-salary"));return r(a.getAttribute("data-salary"))-e}),e.forEach(function(r){return t.appendChild(r)})}}(t);
//# sourceMappingURL=index.acf561b1.js.map
