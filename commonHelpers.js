import{e as d,S as u}from"./assets/vendor-dfb4e020.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){d.init("gG8XGHDepX1bUiphF");const o=document.getElementById("contact-form"),n=document.getElementById("success-modal"),c=document.getElementById("modal-close-btn"),s=document.querySelector(".modal-backdrop");o.addEventListener("submit",function(e){e.preventDefault();const t={name:document.getElementById("name").value,email:document.getElementById("email").value,message:document.getElementById("message").value};d.send("service_2482erg","template_viskrid",t).then(function(){n.classList.add("show"),o.reset()}).catch(function(r){alert("❌ Error! Please try again later."),console.error("Error:",r)})}),c.addEventListener("click",function(){n.classList.remove("show")}),s.addEventListener("click",function(){n.classList.remove("show")})});new u("#skills",{loop:!0,spaceBetween:40,slidesPerView:"auto",touchMoveStopPropagation:!1,autoHeight:!1,pagination:!1,navigation:!1,slideToClickedSlide:!1,allowTouchMove:!0,autoplay:{delay:2e3,disableOnInteraction:!1}});document.addEventListener("DOMContentLoaded",function(){const o=document.querySelectorAll(".button"),n={"btn-1":"https://t.me/s45DK","btn-2":"https://www.instagram.com/s45dashok/","btn-3":"https://github.com/Darya-Karnaukh","btn-4":"https://linkedin.com/in/darya-karnaukh-frontend-developer"};o.forEach(c=>{c.addEventListener("click",function(){const s=this.classList[1],e=n[s];e?window.open(e,"_blank"):console.error("Посилання не знайдено для",s)})})});const a=document.querySelector(".js-btn-burger-menu"),m=document.querySelector(".js-close-menu"),i=document.querySelector(".js-burger-menu"),f=document.querySelectorAll(".js-menu-link"),p=document.querySelector(".js-logo");console.log(a);function y(){i.classList.add("active"),i.style.visibility="visible",document.body.classList.add("no-scroll")}function l(){i.classList.remove("active"),document.body.classList.remove("no-scroll"),setTimeout(()=>{i.style.visibility="hidden"},300)}a.addEventListener("click",y);m.addEventListener("click",l);document.addEventListener("click",o=>{!i.contains(o.target)&&!a.contains(o.target)&&l()});document.querySelectorAll(".js-menu-link").forEach(o=>{o.addEventListener("click",function(n){n.preventDefault();const c=this.getAttribute("href"),s=document.querySelector(c);s&&s.scrollIntoView({behavior:"smooth"})})});f.forEach(o=>{o.addEventListener("click",l)});p.addEventListener("click",l);
//# sourceMappingURL=commonHelpers.js.map
