import{a,S as u,i as h}from"./assets/vendor-de59dc79.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();a.defaults.headers.common["x-api-key"]="live_urj9GAxx5dkR86xc7lJwNCHYYTGppgioMGB2yZOEpWj1xaxNhJ9c676rynGXhU5Z";function p(){return a.get("https://api.thecatapi.com/v1/breeds")}function m(o){return a.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${o}`)}const l=document.querySelector(".cat-info"),n=document.querySelector(".loader"),f=new u({select:"#selectElement",settings:{placeholderText:"Search breeds"},events:{afterChange:o=>{n.classList.remove("visually-hidden"),l.innerHTML="",g(o)}}});function d(){h.show({title:"Error",message:"Oops! Something went wrong! Try reloading the page!",position:"topRight",color:"red"})}n.classList.remove("visually-hidden");p().then(function({data:o}){let s=[];o.map(r=>{s.push({text:r.name,value:r.id})}),f.setData([{placeholder:!0,text:""},...s]),n.classList.add("visually-hidden")}).catch(function(o){d(),console.log("Error message",o.message)});function g(o){m(o[0].value).then(function({data:s}){if(!s[0].breeds[0]){n.classList.add("visually-hidden");return}const{name:r,description:c,temperament:e,origin:t,country_code:i}=s[0].breeds[0];l.innerHTML=`
        <img src="${s[0].url}" alt="${r}" title="${r}" width="750" class="cat-photo">
        <div class="cat-info_wrapper">
            <h1 class="cat-name">${r}</h1>
            <p class="cat-descr">${c}</p>
            <h2 class="title">Temperament:</h2>
            <p class="cat-descr">${e}</p>
            
            <h2 class="title">Location:</h2>
            <div class="cat-location">
                <img
                    alt="${t}"
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/${i}.svg" width="20"/>
                <span>${t}</span>
            </div>
        </div>`,n.classList.add("visually-hidden")}).catch(function(s){d(),console.log("Error message",s.message)})}
//# sourceMappingURL=commonHelpers.js.map
