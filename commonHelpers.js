import{a,S as u,i as h}from"./assets/vendor-de59dc79.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();a.defaults.headers.common["x-api-key"]="live_urj9GAxx5dkR86xc7lJwNCHYYTGppgioMGB2yZOEpWj1xaxNhJ9c676rynGXhU5Z";function p(){return a.get("https://api.thecatapi.com/v1/breeds")}function m(o){return a.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${o}`)}const l=document.querySelector(".cat-info"),r=document.querySelector(".loader"),f=new u({select:"#selectElement",settings:{placeholderText:"Search breeds"},events:{afterChange:o=>{r.classList.remove("visually-hidden"),l.innerHTML="",g(o)}}});function d(){h.show({title:"Error",message:"Oops! Something went wrong! Try reloading the page!",position:"topRight",color:"red"})}r.classList.remove("visually-hidden");p().then(function({data:o}){let s=[];o.map(i=>{s.push({text:i.name,value:i.id})}),f.setData([{placeholder:!0,text:""},...s]),r.classList.add("visually-hidden")}).catch(function(o){r.classList.add("visually-hidden"),d(),console.log("Error message",o.message)});function g(o){m(o[0].value).then(function({data:s}){if(!s[0].breeds[0]){r.classList.add("visually-hidden");return}const{name:i,description:c,temperament:e,origin:t,country_code:n}=s[0].breeds[0];l.innerHTML=`
        <img src="${s[0].url}" alt="${i}" title="${i}" width="750" class="cat-photo">
        <div class="cat-info_wrapper">
            <h1 class="cat-name">${i}</h1>
            <p class="cat-descr">${c}</p>
            <h2 class="title">Temperament:</h2>
            <p class="cat-descr">${e}</p>
            
            <h2 class="title">Location:</h2>
            <div class="cat-location">
                <img
                    alt="${t}"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/${n}.svg" width="20"/>
                <span>${t}</span>
            </div>
        </div>`,r.classList.add("visually-hidden")}).catch(function(s){r.classList.add("visually-hidden"),d(),console.log("Error message",s.message)})}
//# sourceMappingURL=commonHelpers.js.map
