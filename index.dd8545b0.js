!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},e=t.parcelRequired7c6;null==e&&((e=function(n){if(n in a)return a[n].exports;if(n in i){var t=i[n];delete i[n];var e={id:n,exports:{}};return a[n]=e,t.call(e.exports,e,e.exports),e.exports}var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(n,t){i[n]=t},t.parcelRequired7c6=e),e("dsadE"),e("9BNc1");var o=e("bpxeT"),r=e("8nrFW"),c=e("2TvXO"),l=e("drCPS"),s=e("igxJ3"),u=e("9BNc1"),_=e("kvC6y"),p=new(0,s.default),f=new(0,_.default);function g(){return(g=n(o)(n(c).mark((function t(a){return n(c).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,f.showLoader(),t.next=4,new Promise((function(n){return setTimeout(n,300)}));case 4:return t.next=6,p.fetchPopularMovies().then((function(t){t.results.map((function(t){for(var i=function(n){var t=f.find((function(t){return t.id===g[n]}));d.push(t.name)},e=t.poster_path,o=t.original_title,c=t.genre_ids,s=t.release_date,_=t.id,p=s.slice(0,4),f=n(r)(a.genres),g=c,d=[],b=0;b<g.length;b++)i(b);var v=n(r)(d.slice(0,2)).concat(["Other"]).join(" ");d.length<u.numberOfGeneras&&(v=n(r)(d).join(" "));var h=(0,l.default)({poster_path:e,original_title:o,currentGanre:v,date:p,id:_});document.querySelector(".main-content").insertAdjacentHTML("beforeend",h)}))}));case 6:f.hideLoader(),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error("Помилка під час отримання даних:",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}(0,u.ganreListProcessin)().then((function(n){return g.apply(this,arguments)})),e("1RG4E");l=e("drCPS"),s=e("igxJ3"),u=e("9BNc1");var d=new(0,s.default),b=1,v=20,h="",w='<svg class="pagination__icon-left"></svg>',m='<svg class="pagination__icon-rigth"></svg>',y=document.querySelector(".pagination"),x=document.querySelector(".main-content"),L=document.querySelector(".header__search");function j(){var n=document.querySelectorAll(".pagination__btn"),t=!0,a=!1,i=void 0;try{for(var e,o=function(n,t){var a=t.value;if(a.classList.contains("pagination__points"))return"continue";a.addEventListener("click",(function(n){N(1*a.textContent),d.pageNum=b,M(),T(),q(b,v),j(),S()}))},r=n[Symbol.iterator]();!(t=(e=r.next()).done);t=!0)o(0,e)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}L.addEventListener("submit",(function(n){N(1*liElItem.textContent),d.pageNum=b,M(),(0,u.onInputForm)(),q(b,v),j(),S()}))}function S(){var n=document.querySelectorAll(".js-arrow"),t=!0,a=!1,i=void 0;try{for(var e,o=function(n,t){var a=t.value;a.addEventListener("click",(function(n){a.classList.contains("pagination__arrow-left")&&(b-=1,d.pageNum=b,M(),T(),q(b,v),S(),j()),a.classList.contains("pagination__arrow-right")&&(b+=1,d.pageNum=b,M(),T(),q(b,v),S(),j())}))},r=n[Symbol.iterator]();!(t=(e=r.next()).done);t=!0)o(0,e)}catch(n){a=!0,i=n}finally{try{t||null==r.return||r.return()}finally{if(a)throw i}}}function T(){document.querySelector(".main-content");d.fetchPopularMovies().then((function(n){n.results.map((function(n){var t=n.poster_path,a=n.original_title,i=n.genre_ids,e=n.release_date,o=n.id,r=i.join(", "),c=e.slice(0,4),s=(0,l.default)({poster_path:t,original_title:a,genres:r,date:c,id:o});document.querySelector(".main-content").insertAdjacentHTML("beforeend",s)}))}))}function q(n,t){if(t<6){1!=n&&(h+='<button class="pagination__arrow-left js-arrow">'.concat(w,"</button>"));for(var a=1;a<=t;a++)console.log(t),h+=a===n?'<li class="pagination__btn pagination__btn-active ">'.concat(n,"</li>"):'<li class="pagination__btn ">'.concat(a,"</li>")}else if(n<4){1!=n&&(h+='<button class="pagination__arrow-left js-arrow">'.concat(w,"</button>"));for(var i=1;i<=n+2;i++)h+=i===n?'<li class="pagination__btn pagination__btn-active ">'.concat(n,"</li>"):'<li class="pagination__btn ">'.concat(i,"</li>");h+='<li class="pagination__btn pagination__points">...</li>',h+='<li class="pagination__btn ">'.concat(t,"</li>"),h+='<button class="pagination__arrow-right js-arrow">'.concat(m,"</button>")}else if(n>t-3){h+='<button class="pagination__arrow-left js-arrow">'.concat(w,"</button>"),h+='<li class="pagination__btn ">1</li>',h+='<li class="pagination__btn pagination__points">...</li>';for(var e=n-2;e<=t;e+=1)h+=e===n?'<li class="pagination__btn pagination__btn-active ">'.concat(n,"</li>"):'<li class="pagination__btn ">'.concat(e,"</li>");h+=t===n?'<button class="pagination__arrow-right js-arrow pagination__arrow-hiden">'.concat(m,"</button>"):'<button class="pagination__arrow-right js-arrow">'.concat(m,"</button>")}else if(n<=t-3){h+='<button class="pagination__arrow-left js-arrow">'.concat(w,"</button>"),h+='<li class="pagination__btn ">1</li>',h+='<li class="pagination__btn pagination__points">...</li>';for(var o=n-2;o<=n+2;o+=1)h+=o===n?'<li class="pagination__btn pagination__btn-active ">'.concat(n,"</li>"):'<li class="pagination__btn ">'.concat(o,"</li>");h+='<li class="pagination__btn pagination__points">...</li>',h+='<li class="pagination__btn ">'.concat(t,"</li>"),h+='<button class="pagination__arrow-right js-arrow">'.concat(m,"</button>")}y.innerHTML=h,h=""}function M(){y.innerHTML="",x.innerHTML=""}function N(n){b=n}function E(){d.fetchPopularMovies().then((function(n){E=n.total_pages,v=E>500?500:E}))}E(),T(),q(b,v),j(),S()}();
//# sourceMappingURL=index.dd8545b0.js.map
