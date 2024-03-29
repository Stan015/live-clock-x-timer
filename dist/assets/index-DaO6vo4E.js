(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();window.$$=document.querySelectorAll.bind(document);window.$=document.querySelector.bind(document);Node.prototype.on=window.on=function(n,o,...r){r.length>0?this.addEventListener(n,o,...r):this.addEventListener(n,o)};NodeList.prototype.__proto__=Array.prototype;NodeList.prototype.on=NodeList.prototype.addEventListener=function(n,o,...r){r.length>0?this.forEach(function(s,t){s.on(n,o,...r)}):this.forEach(function(s,t){s.on(n,o)})};function h(n){const o=new Date,r={timeZone:n},s=o.toLocaleTimeString("en-US",r),[t,e,i]=s.split(":").map(u=>u.padStart(2,"0"));return`${t}:${e}:${i}`}function v(n){const o=new Date,r={timeZone:n},s=o.toLocaleDateString("en-US",r),[t,e,i]=s.split("/").map(u=>u.padStart(2,"0"));return`${t}/${e}/${i}`}$("#app").innerHTML=`
   <h1>Hello World</h1>
   <div class='btn-container'>
    <button class="clock-btn" type='button' aria-current="true">Clock</button>
    <button class="timer-btn" type='button'>Timer</button>
   </div>
   <div class="date-time">
    <p class="time"></p>
    <p class="date"></p>
    <select class="timezone">
      <option value="Africa/Lagos">Africa/Lagos</option>
      <option value="Africa/Maputo">Africa/Maputo</option>
      <option value="Africa/Nairobi">Africa/Nairobi</option>
      <option value="UTC">UTC</option>
      <option value="America/New_York">America/New York</option>
      <option value="Europe/London">Europe/London</option>
    </select>
   </div>
   <div class="timer-container">
    <p class="time-t">
      <span class="hours-span"><span class="t-hour">00</span>Hours</span>
      <span class="minutes-span"><span class="t-minutes">00</span>Minutes</span>
      <span class="seconds-span"><span class="t-seconds">00</span>Seconds</span>
    </p>

    <div class="timer-btns">
      <button class="start-timer" type="button">Start</button>
      <button class="pause-timer" type="button">Pause</button>
      <button class="reset-timer" type="button">Reset</button>
    </div>
   </div>
`;function f(){const n=$(".timezone").value;$(".time").textContent=`The time is ${h(n)}`,$(".date").textContent=`Today's date is ${v(n)}`}f();setInterval(f,1e3);let[p,a,c]=[0,0,0],l=null;function S(){c++,c==60&&(c=0,a++,a==60&&(a=0,p++)),$(".t-hour").textContent=String(p).padStart(2,"0"),$(".t-minutes").textContent=String(a).padStart(2,"0"),$(".t-seconds").textContent=String(c).padStart(2,"0")}const g=$(".start-timer"),L=$(".pause-timer"),A=$(".reset-timer");g.on("click",()=>{l!==null&&clearInterval(l),l=setInterval(()=>{S()},1e3)});L.on("click",()=>{clearInterval(l)});A.on("click",()=>{clearInterval(l),[p,a,c]=[0,0,0],$(".t-hour").textContent=String(0).padStart(2,"0"),$(".t-minutes").textContent=String(0).padStart(2,"0"),$(".t-seconds").textContent=String(0).padStart(2,"0")});const d=$(".clock-btn"),m=$(".timer-btn"),y=$(".date-time"),b=$(".timer-container");d.on("click",()=>{b.style.display="none",m.setAttribute("aria-current","false"),y.style.display="flex",d.setAttribute("aria-current","true")});m.on("click",()=>{b.style.display="flex",m.setAttribute("aria-current","true"),y.style.display="none",d.setAttribute("aria-current","false")});
