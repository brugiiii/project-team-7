var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r),r("1VOaQ"),r("lxQoS"),r("lcIK4");var o=r("31u3U"),i=r("gh9Wa");function l(e){const t=document.querySelector(".main-content");t.innerHTML="",e.map((e=>{const{poster_path:n,original_title:r,genre_ids:o,release_date:l,id:a}=e,d=o,c=l.slice(0,4),s=(0,i.default)({poster_path:n,original_title:r,genres:d,date:c,id:a});t.insertAdjacentHTML("beforeend",s)}))}const a={btnWatched:document.querySelector(".library__btn-watched"),btnQueue:document.querySelector(".library__btn-queue")};a.btnWatched.addEventListener("click",(()=>{const e=(0,o.load)(o.storageKeys.WATCHED);console.log(e),l(e)})),a.btnQueue.addEventListener("click",(()=>{l((0,o.load)(o.storageKeys.QUEUE))}));
//# sourceMappingURL=library.19ee1d18.js.map