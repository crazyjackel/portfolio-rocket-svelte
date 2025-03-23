import{a as s,t as o}from"../chunks/disclose-version.D41xcpVt.js";import"../chunks/legacy.CMMCVHVi.js";import{v as l,w as c,t as g,x as v}from"../chunks/runtime.CzvSjtxP.js";import{a as m,P as _,s as T}from"../chunks/page.DbDgH_wg.js";import{s as u}from"../chunks/render.ChEHKATr.js";import{p as f}from"../chunks/props.D1vNGr5N.js";import{b as x}from"../chunks/paths.oexep01I.js";const j=!0,z=Object.freeze(Object.defineProperty({__proto__:null,prerender:j},Symbol.toStringTag,{value:"Module"}));var M=o('<h2 class="article-author svelte-rkvyh8"> </h2>'),S=o('<h1 class="article-title svelte-rkvyh8"> </h1>'),O=o('<p class="article-content svelte-rkvyh8"> </p>'),I=o('<article class="article svelte-rkvyh8"><!> <!> <!> <!></article>');function R(h,t){let b=f(t,"title",8,"The Voice of the Martians"),i=f(t,"author",8,"Jackson Levitt"),p=f(t,"content",8,"The Voice of the Martin");var a=I(),d=l(a);m(d,t,"author",{},r=>{var e=M(),n=l(e,!0);c(e),g(()=>u(n,i())),s(r,e)});var y=v(d,2);m(y,t,"heading",{},r=>{var e=S(),n=l(e,!0);c(e),g(()=>u(n,b())),s(r,e)});var w=v(y,2);m(w,t,"image",{},r=>{});var k=v(w,2);m(k,t,"content",{},r=>{var e=O(),n=l(e,!0);c(e),g(()=>u(n,p())),s(r,e)}),c(a),s(h,a)}var P=o('<div slot="image"><img alt="trainworks" class="svelte-28i0m9"></div>'),G=o(`<div slot="content" class="content svelte-28i0m9"><p class="centered-button svelte-28i0m9"><a href="https://github.com/Monster-Train-2-Modding-Group/Trainworks-Reloaded" target="_blank" class="github-button svelte-28i0m9">View on GitHub</a></p> <p class="svelte-28i0m9"><a href="https://github.com/Monster-Train-2-Modding-Group/Trainworks-Reloaded" target="_blank" class="svelte-28i0m9">Trainworks Reloaded</a> is an advanced modding framework designed to facilitate the injection of custom game-specific
				data into the video game: <a href="https://store.steampowered.com/app/2742830/Monster_Train_2/" target="_blank" class="svelte-28i0m9">Monster Train 2</a>. This framework streamlines the process of extending and modifying the game's core
				functionality by leveraging a tailored <a href="https://json-schema.org/" target="_blank" class="svelte-28i0m9">JSON Schema</a> as a configuration medium, which is subsequently interpreted to construct a dependency injection
				container using the widely adopted <a href="https://simpleinjector.org/" target="_blank" class="svelte-28i0m9">SimpleInjector</a> IoC (Inversion of Control)
				library.</p> <p class="svelte-28i0m9">The JSON Schema defines a structured format for mod developers to describe and configure
				various game data objects. During the framework's data ingestion process, the JSON-defined
				elements are parsed, instantiated, and mapped into modded registers. These registers serve
				as intermediary data structures that hold onto mod data before it is finalized with all the
				other registered data. Once done, data from the registers will be seemlessly integrated
				through runtime patching mechanisms via the <a href="https://harmony.pardeike.net/" target="_blank" class="svelte-28i0m9">HarmonyX</a> library and <a href="https://bepinex.github.io/" target="_blank" class="svelte-28i0m9">BepInEx</a> Modloader. Together, they seemlessly
				add our data in through the game's internal data constructs.</p> <p class="svelte-28i0m9">A notable feature of Trainworks Reloaded is its robust support for <a href="https://unity.com/" target="_blank" class="svelte-28i0m9">Unity</a>-specific constructs, such as GameObjects, Sprites, and related asset types. This
				capability empowers mod developers to construct complex game elements that can be seemlessly
				referenced by various injection processes. Due to the Open-Nature of IOC and the ability for
				secondary mods to add additional decorators, services, and constructs, other mods can easily
				real in extra metadata from the JSON and provide cool integrations with minimal
				incompatibility.</p> <p class="svelte-28i0m9">By abstracting much of the complexity typically associated with modding frameworks,
				Trainworks Reloaded significantly lowers the entry barrier for developers seeking to create
				immersive and innovative content for Monster Train 2. Its modular architecture, combined
				with SimpleInjector's powerful dependency injection capabilities, ensures that modded
				content can be efficiently managed, tested, and deployed without compromising game stability
				or compatibility.</p> <p class="svelte-28i0m9">In essence, Trainworks Reloaded offers a comprehensive solution for modifying and extending
				Monster Train 2, combining powerful data parsing techniques, runtime patching strategies,
				and Unity asset management to enable a streamlined mod development workflow.</p> <p class="centered-button svelte-28i0m9"><a href="https://github.com/your-repo/trainworks-reloaded" target="_blank" class="github-button svelte-28i0m9">View on GitHub</a></p></div>`);function A(h){_(h,{class:"page",children:(t,b)=>{R(t,{title:"Trainworks Reloaded",$$slots:{image:(i,p)=>{var a=P(),d=l(a);T(d,"src",`${x??""}/Trainworks.png`),c(a),s(i,a)},content:(i,p)=>{var a=G();s(i,a)}}})},$$slots:{default:!0}})}export{A as component,z as universal};
