import*as r from"https://unpkg.com/three@0.153.0/build/three.module.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function d(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();console.log("Testing JS");console.log(r);const f=new r.Mesh(new r.BoxGeometry(1,1,1),new r.MeshBasicMaterial({color:16776960})),h=document.querySelector(".webgl"),c=new r.Scene;c.add(f);const o={width:window.innerWidth,height:window.innerHeight},a=new r.PerspectiveCamera(75,o.width/o.height,.1,100);a.position.set(0,1,2);c.add(a);const n=new r.WebGLRenderer({canvas:h});n.setSize(o.width,o.height);n.setPixelRatio(Math.min(window.devicePixelRatio,2));n.shadowMap.enabled=!0;function l(){requestAnimationFrame(l),n.render(c,a)}l();
