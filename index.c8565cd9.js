var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,r){o[e]=r},e.parcelRequired7c6=t),t("1VOaQ"),t("lxQoS");var n=t("gh9Wa"),l=t("fgrH9");const a={mainEl:document.querySelector(".main-content")};t("lxQoS");const i=new(0,l.default),d=new class{constructor(){this.mainEl=a.mainEl,this.preloaderEl=null}showLoader(){this.mainEl.insertAdjacentHTML("afterbegin","<div id='page-loader' class=\"preloader preloader__home\">\n    <div class='loader loader__home'></div>\n  </div>"),this.preloaderEl=document.querySelector(".preloader")}hideLoader(){this.preloaderEl&&(this.preloaderEl.remove(),this.preloaderEl=null)}};!async function(){try{d.showLoader();const{results:e}=await i.fetchPopularMovies();await new Promise((e=>setTimeout(e,1e3))),e.map((e=>{const{poster_path:r,original_title:o,genre_ids:t,release_date:l,id:a}=e,i=t.join(", "),d=l.slice(0,4),s=(0,n.default)({poster_path:r,original_title:o,genres:i,date:d,id:a});document.querySelector(".main-content").insertAdjacentHTML("beforeend",s)})),d.hideLoader()}catch(e){console.error("Помилка під час отримання даних:",e)}}(),t("lcIK4");
//# sourceMappingURL=index.c8565cd9.js.map
