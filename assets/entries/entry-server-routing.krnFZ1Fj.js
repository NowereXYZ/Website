const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/entries/pages_css-variables.OO0lIXG4.js","assets/chunks/chunk-Dr3wryG8.js","assets/static/app_generated_index-6937cd5a.BO4XFbUO.css","assets/entries/pages_index.BKEkWnJT.js","assets/entries/pages_style-guide.B_SoO5Xl.js"])))=>i.map(i=>d[i]);
function ge(e){return Array.from(new Set(e))}function j(e,t){const n=Ae();return n[e]=n[e]||t}function Ae(){const e="_vike";return globalThis[e]=globalThis[e]||{}}const m=new Proxy({},{get:(e,t)=>n=>t==="code"?`\`${n}\``:t==="string"?`'${n}'`:n}),pe="0.4.227";let x;x??(x=he());function he(){return j("utils/assertSingleInstance.ts",{instances:[],alreadyLogged:new Set})}function F(){return x??(x=he()),x}const ze="Client runtime of both Server Routing and Client Routing loaded https://vike.dev/client-runtimes-conflict",me="Client runtime loaded twice https://vike.dev/client-runtime-duplicated";function ye(){const e=F();{const t=ge(e.instances);T(t.length<=1,`vike@${m.bold(t[0])} and vike@${m.bold(t[1])} loaded which is highly discouraged, see ${m.underline("https://vike.dev/warning/version-mismatch")}`,{onlyOnce:!0,showStackTrace:!1})}e.checkSingleInstance&&e.instances.length>1&&T(!1,me,{onlyOnce:!0,showStackTrace:!0})}function We(e){const t=F();T(t.isClientRouting!==!0,ze,{onlyOnce:!0,showStackTrace:!0}),T(t.isClientRouting===void 0,me,{onlyOnce:!0,showStackTrace:!0}),t.isClientRouting=!1,t.checkSingleInstance=!0,ye()}function De(){F().instances.push(pe),ye()}function T(e,t,{onlyOnce:n,showStackTrace:r}){const i=F();if(e)return;const s=`[Vike][Warning] ${t}`;if(n){const{alreadyLogged:a}=i,l=n===!0?s:n;if(a.has(l))return;a.add(l)}console.warn(r?new Error(s):s)}function Ve(){return!(typeof process>"u"||!process.cwd||!process.versions||typeof process.versions.node>"u"||!process.release||process.release.name!=="node")}function L(e,t){const n=new Error(e);return Ve()&&(n.stack=Ue(n.stack,t)),n}function Ue(e,t){if(!e)return e;const n=He(e);let r=0;return n.filter(s=>s.includes(" (internal/")||s.includes(" (node:internal")?!1:r<t&&Be(s)?(r++,!1):!0).join(`
`)}function Be(e){return e.startsWith("    at ")}function He(e){return e.split(/\r?\n/)}function C(e){return typeof e=="object"&&e!==null}const v=j("utils/assert.ts",{alreadyLogged:new Set,logger(e,t){t==="info"?console.log(e):console.warn(e)},showStackTraceList:new WeakSet});De();const Ge="[vike]",Ne=`[vike@${pe}]`,Je="Bug",k=2;function o(e,t){var a;if(e)return;const n=(()=>{if(!t)return null;const l=typeof t=="string"?t:JSON.stringify(t);return m.dim(`Debug info (for Vike maintainers; you can ignore this): ${l}`)})();let i=[`You stumbled upon a Vike bug. Go to ${m.underline("https://github.com/vikejs/vike/issues/new?template=bug.yml")} and copy-paste this error. A maintainer will fix the bug (usually within 24 hours).`,n].filter(Boolean).join(" ");i=z(i),i=A(i,Je),i=W(i,!0);const s=L(i,k);throw(a=v.onBeforeLog)==null||a.call(v),s}function y(e,t,{showStackTrace:n,exitOnError:r}={}){var s;if(e)return;n=n||v.alwaysShowStackTrace,t=z(t),t=A(t,"Wrong Usage"),t=W(t);const i=L(t,k);if(n&&v.showStackTraceList.add(i),(s=v.onBeforeLog)==null||s.call(v),r)console.error(n?i:t),process.exit(1);else throw i}function Ye(e){return e=z(e),e=A(e,"Error"),e=W(e),L(e,k)}function _(e,t,{onlyOnce:n,showStackTrace:r}){var i;if(!e){if(r=r||v.alwaysShowStackTrace,t=z(t),t=A(t,"Warning"),t=W(t),n){const{alreadyLogged:s}=v,a=n===!0?t:n;if(s.has(a))return;s.add(a)}if((i=v.onBeforeLog)==null||i.call(v),r){const s=L(t,k);v.showStackTraceList.add(s),v.logger(s,"warn")}else v.logger(t,"warn")}}function A(e,t){let n=`[${t}]`;const r=t==="Warning"?"yellow":"red";return n=m.bold(m[r](n)),`${n}${e}`}function z(e){return e.startsWith("[")?e:` ${e}`}function W(e,t=!1){return`${t?Ne:Ge}${e}`}function Y(){return typeof window<"u"&&typeof window.scrollY=="number"}const Z=j("utils/assertRouterType.ts",{});function Ke(){Me(Z.isClientRouting!==!0),Z.isClientRouting=!1}function Me(e){y(Y(),`${m.cyan("import { something } from 'vike/client/router'")} is forbidden on the server-side`,{showStackTrace:!0}),_(e,"You shouldn't `import { something } from 'vike/client/router'` when using Server Routing. The 'vike/client/router' utilities work only with Client Routing. In particular, don't `import { navigate }` nor `import { prefetch }` as they unnecessarily bloat your client-side bundle sizes.",{showStackTrace:!0,onlyOnce:!0})}function qe(){o(Y())}function Xe(){qe()}function Q(e){const t=e/1e3;if(t<120){const n=ee(t);return`${n} second${te(n)}`}{const n=t/60,r=ee(n);return`${r} minute${te(r)}`}}function ee(e){let t=e.toFixed(1);return t.endsWith(".0")&&(t=t.slice(0,-2)),t}function te(e){return e==="1"?"":"s"}const B=j("utils/executeHook.ts",{userHookErrors:new WeakMap,pageContext:null});function Ze(e,t,n){const{hookName:r,hookFilePath:i,hookTimeout:{error:s,warning:a}}=t;let l,c;const u=new Promise((d,h)=>{l=b=>{f(),d(b)},c=b=>{f(),h(b)}}),f=()=>{g&&clearTimeout(g),p&&clearTimeout(p)},g=ne(a)&&setTimeout(()=>{_(!1,`The ${r}() hook defined by ${i} is slow: it's taking more than ${Q(a)} (https://vike.dev/hooksTimeout)`,{onlyOnce:!1})},a),p=ne(s)&&setTimeout(()=>{const d=Ye(`The ${r}() hook defined by ${i} timed out: it didn't finish after ${Q(s)} (https://vike.dev/hooksTimeout)`);c(d)},s);return(async()=>{try{Qe(n);const d=await e();l(d)}catch(d){C(d)&&B.userHookErrors.set(d,{hookName:r,hookFilePath:i}),c(d)}})(),u}function ne(e){return!!e&&e!==1/0}function Qe(e){B.pageContext=e,Promise.resolve().then(()=>{B.pageContext=null})}function D(e){return e instanceof Function||typeof e=="function"}function $(e){return Array.isArray(e)}function et(e){return $(e)&&e.every(t=>typeof t=="string")}function tt(e){return C(e)&&Object.values(e).every(t=>typeof t=="string")}function E(e,t,n){if(!C(e))return!1;if(!(t in e))return n==="undefined";if(n===void 0)return!0;const r=e[t];return n==="undefined"?r===void 0:n==="array"?$(r):n==="object"?C(r):n==="string[]"?et(r):n==="string{}"?tt(r):n==="function"?D(r):$(n)?typeof r=="string"&&n.includes(r):n==="null"?r===null:n==="true"?r===!0:n==="false"?r===!1:typeof r===n}function w(e,t,n){t&&(o(!("_isPageContextObject"in t)),Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)))}function Ee(e,t,n){return typeof e=="string"?re(e.split(""),t,n).join(""):re(e,t,n)}function re(e,t,n){const r=[];let i=t;o(i>=0&&i<=e.length);let s=e.length+n;for(o(s>=0&&s<=e.length);!(i===s||(i===e.length&&(i=0),i===s));){const a=e[i];o(a!==void 0),r.push(a),i++}return r}function nt(e,t){o(dt(e),e),o(t.startsWith("/"));const{hashString:n,withoutHash:r}=rt(e);o(n===null||n.startsWith("#"));const i=n===null?"":ve(n.slice(1)),{searchString:s,withoutSearch:a}=ie(r);o(s===null||s.startsWith("?"));let l="";if(s!==null)l=s;else if(e.startsWith("#")){const P=be();l=P&&ie(P).searchString||""}const c={},u={};Array.from(new URLSearchParams(l)).forEach(([P,X])=>{c[P]=X,u[P]=[...u.hasOwnProperty(P)?u[P]:[],X]});let{protocol:f,origin:g,pathnameAbsoluteWithBase:p}=st(a,t);const d=a.slice((g||"").length);ft(e,g,d,s,n);let{pathname:h,isBaseMissing:b}=ct(p,t);const S=Ce(g,h,s,n),R=g?g.slice(f.length):null,{hostname:V,port:ke}=ot(R,e);return h=it(h),o(h.startsWith("/")),{href:S,protocol:f,hostname:V,port:ke,origin:g,pathname:h,pathnameOriginal:d,isBaseMissing:b,search:c,searchAll:u,searchOriginal:s,hash:i,hashOriginal:n}}function rt(e){const[t,...n]=e.split("#");return{hashString:["",...n].join("#")||null,withoutHash:t}}function ie(e){const[t,...n]=e.split("?");return{searchString:["",...n].join("?")||null,withoutSearch:t}}function ve(e){try{return decodeURIComponent(e)}catch{}try{return decodeURI(e)}catch{}return e}function it(e){return e=e.replace(/\s+$/,""),e=e.split("/").map(t=>ve(t).split("/").join("%2F")).join("/"),e}function st(e,t){o(!e.includes("?")&&!e.includes("#"));{const{protocol:n,origin:r,pathname:i}=se(e);if(r)return{protocol:n,origin:r,pathnameAbsoluteWithBase:i};o(i===e)}if(e.startsWith("/"))return{protocol:null,origin:null,pathnameAbsoluteWithBase:e};{const n=be();let r;return n?r=se(n.split("?")[0].split("#")[0]).pathname:r=t,{protocol:null,origin:null,pathnameAbsoluteWithBase:lt(e,r)}}}function be(){var t;return typeof window<"u"?(t=window==null?void 0:window.document)==null?void 0:t.baseURI:void 0}function se(e){if(we(e)){const{protocol:t,uriWithoutProtocol:n}=Se(e);o(t);const[r,...i]=n.split("/"),s=t+r;return{pathname:"/"+i.join("/"),origin:s,protocol:t}}else return{pathname:e,origin:null,protocol:null}}function ot(e,t){const n={hostname:null,port:null};if(!e)return n;const r=e.split(":");if(r.length>1){const i=parseInt(r.pop(),10);o(i||i===0,t),n.port=i}return n.hostname=r.join(":"),n}function Se(e){const t=":",[n,...r]=e.split(t);if(r.length===0||!/^[a-z][a-z0-9\+\-]*$/i.test(n))return{protocol:null,uriWithoutProtocol:e};let i=n+t,s=r.join(t);const a="//";return s.startsWith(a)&&(i=i+a,s=s.slice(a.length)),{protocol:i,uriWithoutProtocol:s}}function at(e){return["ipfs://","ipns://"].includes(e)?!1:e.endsWith("://")}function lt(e,t){const n=t.split("/"),r=e.split("/");let i=t.endsWith("/");e.startsWith(".")&&n.pop();for(const a in r){const l=r[a];l==""&&a==="0"||l!="."&&(l==".."?n.pop():(i=!1,n.push(l)))}let s=n.join("/");return i&&!s.endsWith("/")&&(s+="/"),s.startsWith("/")||(s="/"+s),s}function ct(e,t){return o(e.startsWith("/")),o(ut(t)),o(e.startsWith("/")),o(t.startsWith("/")),{pathname:e,isBaseMissing:!1}}function ut(e){return e.startsWith("/")}function ft(e,t,n,r,i){const s=Ce(t,n,r,i);o(e===s)}function Ce(e,t,n,r){return`${e||""}${t}${n||""}${r||""}`}function dt(e){return we(e)||e.startsWith("/")||gt(e)}function gt(e){return[".","?","#"].some(t=>e.startsWith(t))||e===""}function we(e){const{protocol:t}=Se(e);return!!t&&at(t)}function pt(e){return typeof e=="string"&&ht(e)?`.${e}`:`[${JSON.stringify(e)}]`}function ht(e){return/^[a-z0-9\$_]+$/i.test(e)}Xe();const mt=[{is:e=>e===void 0,match:e=>e==="!undefined",serialize:()=>"!undefined",deserialize:()=>{}},{is:e=>e===1/0,match:e=>e==="!Infinity",serialize:()=>"!Infinity",deserialize:()=>1/0},{is:e=>e===-1/0,match:e=>e==="!-Infinity",serialize:()=>"!-Infinity",deserialize:()=>-1/0},{is:e=>typeof e=="number"&&isNaN(e),match:e=>e==="!NaN",serialize:()=>"!NaN",deserialize:()=>NaN},{is:e=>e instanceof Date,match:e=>e.startsWith("!Date:"),serialize:e=>"!Date:"+e.toISOString(),deserialize:e=>new Date(e.slice(6))},{is:e=>typeof e=="bigint",match:e=>e.startsWith("!BigInt:"),serialize:e=>"!BigInt:"+e.toString(),deserialize:e=>{if(typeof BigInt>"u")throw new Error("Your JavaScript environement does not support BigInt. Consider adding a polyfill.");return BigInt(e.slice(8))}},{is:e=>e instanceof RegExp,match:e=>e.startsWith("!RegExp:"),serialize:e=>"!RegExp:"+e.toString(),deserialize:e=>{e=e.slice(8);const t=e.match(/\/(.*)\/(.*)?/),n=t[1],r=t[2];return new RegExp(n,r)}},{is:e=>e instanceof Map,match:e=>e.startsWith("!Map:"),serialize:(e,t)=>"!Map:"+t(Array.from(e.entries())),deserialize:(e,t)=>new Map(t(e.slice(5)))},{is:e=>e instanceof Set,match:e=>e.startsWith("!Set:"),serialize:(e,t)=>"!Set:"+t(Array.from(e.values())),deserialize:(e,t)=>new Set(t(e.slice(5)))},{is:e=>typeof e=="string"&&e.startsWith("!"),match:e=>e.startsWith("!"),serialize:e=>"!"+e,deserialize:e=>e.slice(1)}];function Pe(e){const t=JSON.parse(e);return K(t)}function K(e){return typeof e=="string"?yt(e):(typeof e=="object"&&e!==null&&Object.entries(e).forEach(([t,n])=>{e[t]=K(n)}),e)}function yt(e){for(const{match:t,deserialize:n}of mt)if(t(e))return n(e,Pe);return e}function Et(){const e="vike_pageContext",t=document.getElementById(e);y(t,`Couldn't find #${e} (which Vike automatically injects in the HTML): make sure it exists (i.e. don't remove it and make sure your HTML isn't malformed)`);const n=t.textContent;o(n);const r=Pe(n);return o(E(r,"pageId","string")),o(E(r,"routeParams","string{}")),r}function vt(e){return(t,n)=>{const r=e(t),i=e(n);if(o([!0,!1,null].includes(r)),o([!0,!1,null].includes(i)),r===i)return 0;if(r===!0||i===!1)return-1;if(i===!0||r===!1)return 1;o(!1)}}function bt(e){return vt(t=>{const n=e(t);return n===null?null:!n})}function St(e,t){return e.toLowerCase()<t.toLowerCase()?-1:e.toLowerCase()>t.toLowerCase()?1:0}function Ct(e){return e==null}function wt(e){return!Ct(e)}const _e=["js","ts","cjs","cts","mjs","mts"],Pt=["jsx","tsx","cjsx","ctsx","mjsx","mtsx"],$e=["vue","svelte","marko","md","mdx"],_t=[..._e,...Pt,...$e];function xe(e){const t=_t.some(n=>e.endsWith("."+n));return $t(e)&&o(t),t}function $t(e){const t=/\.(c|m)?(j|t)s$/.test(e),n=_e.some(r=>e.endsWith("."+r));return o(t===n),t}function xt(e){return $e.some(t=>e.endsWith("."+t))}function jt(e,t){return Rt(e,t,!0)}function Rt(e,t,n){const r="CLIENT_ONLY",i=e.filter(d=>d.isRelevant(t)&&d.fileType!==".page.route").sort(Ot(n,t)),s=d=>{const h=i.filter(S=>S.pageId===t&&S.isEnv(d?"CLIENT_AND_SERVER":r));y(h.length<=1,`Merge the following files into a single file: ${h.map(S=>S.filePath).join(" ")}`);const b=h[0];return o(b===void 0||!b.isDefaultPageFile),b},a=s(!1),l=s(!0),c=d=>i.filter(h=>h.isRendererPageFile&&h.isEnv(d?"CLIENT_AND_SERVER":r))[0],u=c(!1),f=c(!0),g=i.filter(d=>d.isDefaultPageFile&&!d.isRendererPageFile&&(d.isEnv(r)||d.isEnv("CLIENT_AND_SERVER")));return[a,l,...g,u,f].filter(wt)}function Ot(e,t){const n="CLIENT_ONLY";return(a,l)=>{if(!a.isDefaultPageFile&&l.isDefaultPageFile)return-1;if(!l.isDefaultPageFile&&a.isDefaultPageFile)return 1;{const c=a.isRendererPageFile,u=l.isRendererPageFile;if(!c&&u)return-1;if(!u&&c)return 1;o(c===u)}{const c=oe(t,a.filePath),u=oe(t,l.filePath);if(c<u)return-1;if(u<c)return 1;o(c===u)}{if(a.isEnv(n)&&l.isEnv("CLIENT_AND_SERVER"))return-1;if(l.isEnv(n)&&a.isEnv("CLIENT_AND_SERVER"))return 1}return 0}}function oe(e,t){let n=0;for(;n<e.length&&n<t.length&&e[n]===t[n];n++);const r=e.slice(n),i=t.slice(n),s=r.split("/").length,a=i.split("/").length;return s+a}const Tt=["clientRouting"];function It(e){Tt.forEach(t=>{if(o(e.fileExports),!(t in e.fileExports))return;const n=`The value of \`${t}\` is only allowed to be \`true\`.`;y(e.fileExports[t]!==!1,`${e.filePath} has \`export { ${t} }\` with the value \`false\` which is prohibited: remove \`export { ${t} }\` instead. (${n})`),y(e.fileExports[t]===!0,`${e.filePath} has \`export { ${t} }\` with a forbidden value. ${n}`)})}const je=["render","clientRouting","prerender","doNotPrerender"];function Ft(e,t){y(!je.includes(e),`${t} has \`export default { ${e} }\` which is prohibited, use \`export { ${e} }\` instead.`)}function Lt(e,t){if(!e)return null;let[n,...r]=e;if(!n||r.length===0&&["*","default",t].includes(n))return null;o(n!=="*");let i="",s="";return n==="default"?i="export default":(i="export",r=[n,...r]),r.forEach(l=>{i=`${i} { ${l}`,s=` }${s}`}),i+s}function kt(e,t,n){return`${H(e,t)} at ${I(n,t)}`}function At(e,t,n){return n?`${H(e,t)} at ${I(n,t)}`:`${H(e,t)} internally`}function H(e,t){return`${e} ${m.cyan(t)} defined`}function I(e,t){let n;return $(e)?n=e:n=[e],o(n.length>=1),n.map(i=>{if(i.definedBy)return zt(i,t);const{filePathToShowToUser:s,fileExportPathToShowToUser:a}=i;let l=s;const c=Lt(a,t);return c&&(l=`${l} > ${m.cyan(c)}`),l}).join(" / ")}function zt(e,t){if(e.definedBy==="api")return`API call ${m.cyan(`${e.operation}({ vikeConfig: { ${t} } })`)}`;const{definedBy:n}=e;if(n==="cli")return`CLI option ${m.cyan(`--${t}`)}`;if(n==="env")return`environment variable ${m.cyan(`VIKE_CONFIG="{${t}}"`)}`;o(!1)}function Wt(e){if(!e||$(e)||e.definedBy)return null;const{filePathToShowToUser:t}=e;return o(t),t}function Dt(e,t,n){const r=Vt({pageConfigGlobalValues:e,pageConfigValues:n});let i;if(t.isErrorPage)i={...r,isErrorPage:!0};else{const s=r.config.route??t.routeFilesystem.routeString;i={...r,route:s}}return[t.pageId,i]}function Vt({pageConfigGlobalValues:e,pageConfigValues:t}){const n=Oe({pageConfigGlobalValues:e,pageConfigValues:t});return Re(n)}function Re(e){const t=e;return{config:t.config,_source:t.source,_sources:t.sources,_from:t.from}}function Oe({pageConfigGlobalValues:e,pageConfigValues:t}){const n={...e,...t};return Te({configValues:n})}function Ut({pageConfigGlobalValues:e}){const t=Te({configValues:e});return Re(t)}function Bt(e,t,n){const r={},i={},s={};e.forEach(p=>{Ht(p).forEach(({exportName:h,exportValue:b,isFromDefaultExport:S})=>{o(h!=="default"),s[h]=s[h]??[],s[h].push({exportValue:b,exportSource:`${p.filePath} > ${S?`\`export default { ${h} }\``:`\`export { ${h} }\``}`,filePath:p.filePath,_filePath:p.filePath,_fileType:p.fileType,_isFromDefaultExport:S})})});let a,l,c;if(t){const p=Oe({pageConfigGlobalValues:n.configValues,pageConfigValues:t.configValues});a=p.source,l=p.sources,c=p.from,Object.assign(r,p.config),Object.assign(i,p.configEntries),Object.assign(s,p.exportsAll)}else a={},l={},c={configsStandard:{},configsCumulative:{},configsComputed:{}};const u=Gt(),f={};return Object.entries(s).forEach(([p,d])=>{d.forEach(({exportValue:h,_fileType:b,_isFromDefaultExport:S})=>{f[p]=f[p]??h,b===".page"&&!S&&(p in u||(u[p]=h))})}),o(!("default"in f)),o(!("default"in s)),{config:r,from:c,source:a,sources:l,configEntries:i,exports:f,exportsAll:s,pageExports:u}}function Te(e){const t={},n={},r={},i={},s={},a={configsStandard:{},configsCumulative:{},configsComputed:{}},l=(c,u)=>{i[u]=c,s[u]??(s[u]=[]),s[u].push(c)};return Object.entries(e.configValues).forEach(([c,u])=>{const{value:f}=u,g=Wt(u.definedAtData),p=At("Config",c,u.definedAtData);if(t[c]=t[c]??f,n[c]=n[c]??[],o(n[c].length===0),n[c].push({configValue:f,configDefinedAt:p,configDefinedByFile:g}),u.type==="standard"){const h={type:"configsStandard",value:u.value,definedAt:I(u.definedAtData,c)};l(h,c),a.configsStandard[c]=h}if(u.type==="cumulative"){const h={type:"configsCumulative",values:u.value.map((b,S)=>{const R=u.definedAtData[S];o(R);const V=I(R,c);return{value:b,definedAt:V}})};l(h,c),a.configsCumulative[c]=h}if(u.type==="computed"){const h={type:"configsComputed",value:u.value};l(h,c),a.configsComputed[c]=h}const d=c;r[d]=r[d]??[],r[d].push({exportValue:f,exportSource:p,filePath:g,_filePath:g,_fileType:null,_isFromDefaultExport:null})}),{config:t,configEntries:n,exportsAll:r,source:i,sources:s,from:a}}function Ht(e){const{filePath:t,fileExports:n}=e;o(n),o(xe(t));const r=[];return Object.entries(n).sort(bt(([i])=>i==="default")).forEach(([i,s])=>{let a=i==="default";if(a)if(xt(t))i="Page";else{y(C(s),`The ${m.cyan("export default")} of ${t} should be an object.`),Object.entries(s).forEach(([l,c])=>{Ft(l,t),r.push({exportName:l,exportValue:c,isFromDefaultExport:a})});return}r.push({exportName:i,exportValue:s,isFromDefaultExport:a})}),r.forEach(({exportName:i,isFromDefaultExport:s})=>{o(!(s&&je.includes(i)))}),r}function Gt(){return new Proxy({},{get(...e){return Y()||_(!1,"`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vike.dev/exports",{onlyOnce:!0,showStackTrace:!0}),Reflect.get(...e)}})}function Nt(e,t){const n=e.filter(i=>i.pageId===t);return o(n.length<=1),n[0]??null}const Jt=["$$registrations","_rerender_only"],Yt=[".md",".mdx"];function Kt(e,t,n){const r=Object.keys(e),i=u=>u==="default"||u===n,s=r.filter(i),a=m.code("export default"),l=m.code(`export { ${n} }`);s.length===0&&y(!1,`${t} should have ${l} or ${a}`),s.length===2&&y(!1,`${t} is ambiguous: remove ${a} or ${l}`),o(s.length===1);const c=r.filter(u=>!i(u)).filter(u=>!Jt.includes(u));Yt.some(u=>t.endsWith(u))||c.forEach(u=>{_(!1,`${t} unexpected ${m.cyan(`export { ${u} }`)}, see https://vike.dev/no-side-exports`,{onlyOnce:!0})})}function Mt(e,t){const n=e.map(i=>{const s=G(i.configValuesSerialized);return qt(s),{...i,configValues:s}}),r={configValues:{}};{const i=G(t.configValuesSerialized);Object.assign(r.configValues,i)}return{pageConfigs:n,pageConfigGlobal:r}}function qt(e){const t="route",n=e[t];if(!n)return;const{value:r,definedAtData:i}=n,s=typeof r;o(i);const a=kt("Config",t,i);y(s==="string"||D(r),`${a} has an invalid type '${s}': it should be a string or a function instead, see https://vike.dev/route`)}function G(e){const t={};return Object.entries(e).forEach(([r,i])=>{let s;if(i.type==="cumulative"){const{valueSerialized:a,...l}=i;s={value:a.map((u,f)=>{const{value:g,sideExports:p}=ae(u,r,()=>{const d=i.definedAtData[f];return o(d),d});return n(p),g}),...l}}else{const{valueSerialized:a,...l}=i,{value:c,sideExports:u}=ae(a,r,()=>{o(i.type!=="computed");const{definedAtData:f}=i;return Array.isArray(f)?f[0]:f});n(u),s={value:c,...l}}t[r]=s}),t;function n(r){r.forEach(i=>{const{configName:s,configValue:a}=i;t[s]||(t[s]=a)})}}function ae(e,t,n){if(e.type==="js-serialized"){let{value:r}=e;return r=K(r),{value:r,sideExports:[]}}if(e.type==="pointer-import"){const{value:r}=e;return{value:r,sideExports:[]}}if(e.type==="plus-file"){const r=n(),{exportValues:i}=e;o(!r.definedBy),Kt(i,r.filePathToShowToUser,t);let s,a=!1;const l=[];return Object.entries(i).forEach(([c,u])=>{c!=="default"&&c!==t?l.push({configName:c,configValue:{type:"standard",value:u,definedAtData:{filePathToShowToUser:r.filePathToShowToUser,fileExportPathToShowToUser:[c]}}}):(s=u,o(!a),a=!0)}),o(a),{value:s,sideExports:l}}o(!1)}async function Xt(e,t){if("isAllLoaded"in e&&!t)return e;const{moduleId:n,moduleExports:r}=e.loadConfigValuesAll(),i=await r;i||o(!1,{moduleExports:r,configValuesLoaded:i,moduleId:n});const s=G(i.configValuesSerialized);return Object.assign(e.configValues,s),w(e,{isAllLoaded:!0}),e}const Zt="__whileFetchingAssets";async function Qt(e,t,n,r){const i=jt(t,e),s=Nt(n,e);let a;const l=!1;try{a=(await Promise.all([s&&Xt(s,l),...i.map(g=>{var p;return(p=g.loadFile)==null?void 0:p.call(g)})]))[0]}catch(f){throw en(f)&&Object.assign(f,{[Zt]:!0}),f}const c=Bt(i,a,r),u={};return w(u,c),w(u,{_pageFilesLoaded:i}),u}function en(e){return e instanceof Error?["Failed to fetch dynamically imported module","error loading dynamically imported module","Importing a module script failed","error resolving module specifier","failed to resolve module"].some(n=>e.message.toLowerCase().includes(n.toLowerCase())):!1}function tn(e,t){o(!e.startsWith("#"));const{searchOriginal:n,hashOriginal:r,pathname:i}=nt(e,"/");let s=`${i}${n||""}`;return t!=null&&t.withoutHash||(s+=r||""),o(s.startsWith("/")),s}function Ie(e){return tn(window.location.href,e)}function nn(e){const t=".page.",n=Ee(e.split(t),0,-1).join(t);return o(!n.includes("\\")),n}function M(e,t){return o(!e.includes("\\")),e.includes("/_error")}function rn(e,t){if(t.length>0){const n=t.find(r=>r.pageId===e);return o(n),!!n.isErrorPage}else return M(e)}const sn=[".page",".page.server",".page.route",".page.client",".css"];function on(e){if(e.endsWith(".css"))return".css";o(xe(e),e);const n=e.split("/").slice(-1)[0].split("."),r=n.slice(-3)[0],i=n.slice(-2)[0];if(i==="page")return".page";if(o(r==="page",e),i==="server")return".page.server";if(i==="client")return".page.client";if(i==="route")return".page.route";o(!1,e)}function Fe(e){const t=s=>i.pageId===s||i.isDefaultPageFile&&(le(i.filePath)||an(s,i.filePath)),n=on(e),i={filePath:e,fileType:n,isEnv:s=>{if(o(n!==".page.route"),s==="CLIENT_ONLY")return n===".page.client"||n===".css";if(s==="SERVER_ONLY")return n===".page.server";if(s==="CLIENT_AND_SERVER")return n===".page";o(!1)},isRelevant:t,isDefaultPageFile:N(e),isRendererPageFile:n!==".css"&&N(e)&&le(e),isErrorPageFile:M(e),pageId:nn(e)};return i}function N(e){return M(e)?!1:e.includes("/_default")}function le(e){return e.includes("/renderer/")}function an(e,t){o(!e.endsWith("/")),o(!t.endsWith("/")),o(N(t));const n=Ee(t.split("/"),0,-1).filter(r=>r!=="_default").join("/");return e.startsWith(n)}function ln(e){o(E(e,"pageFilesLazy","object")),o(E(e,"pageFilesEager","object")),o(E(e,"pageFilesExportNamesLazy","object")),o(E(e,"pageFilesExportNamesEager","object")),o(E(e.pageFilesLazy,".page")),o(E(e.pageFilesLazy,".page.client")||E(e.pageFilesLazy,".page.server")),o(E(e,"pageFilesList","string[]")),o(E(e,"pageConfigsSerialized")),o(E(e,"pageConfigGlobalSerialized"));const{pageConfigsSerialized:t,pageConfigGlobalSerialized:n}=e;cn(t),un(n);const{pageConfigs:r,pageConfigGlobal:i}=Mt(t,n),s={};O(e.pageFilesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;ce(f),c.loadFile=async()=>{"fileExports"in c||(c.fileExports=await f(),It(c))}}),O(e.pageFilesExportNamesLazy).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;ce(f),c.loadExportNames=async()=>{if(!("exportNames"in c)){const g=await f();o(E(g,"exportNames","string[]"),c.filePath),c.exportNames=g.exportNames}}}),O(e.pageFilesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;o(C(f)),c.fileExports=f}),O(e.pageFilesExportNamesEager).forEach(({filePath:l,pageFile:c,globValue:u})=>{c=s[l]=s[l]??c;const f=u;o(C(f)),o(E(f,"exportNames","string[]"),c.filePath),c.exportNames=f.exportNames}),e.pageFilesList.forEach(l=>{s[l]=s[l]??Fe(l)});const a=Object.values(s);return a.forEach(({filePath:l})=>{o(!l.includes("\\"))}),{pageFilesAll:a,pageConfigs:r,pageConfigGlobal:i}}function O(e){const t=[];return Object.entries(e).forEach(([n,r])=>{o(sn.includes(n)),o(C(r)),Object.entries(r).forEach(([i,s])=>{const a=Fe(i);o(a.fileType===n),t.push({filePath:i,pageFile:a,globValue:s})})}),t}function ce(e){o(D(e))}function cn(e){o($(e)),e.forEach(t=>{o(C(t)),o(E(t,"pageId","string")),o(E(t,"routeFilesystem")),o(E(t,"configValuesSerialized"))})}function un(e){o(E(e,"configValuesSerialized"))}function fn(e){const{pageFilesAll:t,pageConfigs:n,pageConfigGlobal:r}=ln(e),i=dn(t,n),s=Ut({pageConfigGlobalValues:r.configValues}),a=Object.fromEntries(n.map(l=>Dt(r.configValues,l,l.configValues)));return{pageFilesAll:t,allPageIds:i,pageConfigs:n,pageConfigGlobal:r,globalConfig:s,pageConfigsUserFriendly:a}}function dn(e,t){const n=e.filter(({isDefaultPageFile:s})=>!s).map(({pageId:s})=>s),r=ge(n),i=t.map(s=>s.pageId);return[...r,...i]}const gn="modulepreload",pn=function(e){return"/"+e},ue={},U=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(n.map(c=>{if(c=pn(c),c in ue)return;ue[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const g=document.createElement("link");if(g.rel=u?"stylesheet":gn,u||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),u)return new Promise((p,d)=>{g.addEventListener("load",p),g.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return i.then(a=>{for(const l of a||[])l.status==="rejected"&&s(l.reason);return t().catch(s)})},q={},hn={},mn={},yn={},En=[],Le={},vn=[{pageId:"/pages/css-variables",isErrorPage:void 0,routeFilesystem:{routeString:"/css-variables",definedAtLocation:"/pages/css-variables/"},loadConfigValuesAll:()=>({moduleId:"virtual:vike:pageConfigValuesAll:client:/pages/css-variables",moduleExports:U(()=>import("./pages_css-variables.OO0lIXG4.js"),__vite__mapDeps([0,1,2]))}),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedAtLocation:"/pages/index/"},loadConfigValuesAll:()=>({moduleId:"virtual:vike:pageConfigValuesAll:client:/pages/index",moduleExports:U(()=>import("./pages_index.BKEkWnJT.js"),__vite__mapDeps([3,1,2]))}),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}},{pageId:"/pages/style-guide",isErrorPage:void 0,routeFilesystem:{routeString:"/style-guide",definedAtLocation:"/pages/style-guide/"},loadConfigValuesAll:()=>({moduleId:"virtual:vike:pageConfigValuesAll:client:/pages/style-guide",moduleExports:U(()=>import("./pages_style-guide.B_SoO5Xl.js"),__vite__mapDeps([4,1,2]))}),configValuesSerialized:{isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}}}}],bn={configValuesSerialized:{}},Sn=Object.assign({}),Cn={...Sn};q[".page"]=Cn;const wn=Object.assign({}),Pn={...wn};q[".page.client"]=Pn;const _n=Object.assign({}),$n={..._n};Le[".page.server"]=$n;const xn=Object.freeze(Object.defineProperty({__proto__:null,neverLoaded:Le,pageConfigGlobalSerialized:bn,pageConfigsSerialized:vn,pageFilesEager:hn,pageFilesExportNamesEager:yn,pageFilesExportNamesLazy:mn,pageFilesLazy:q,pageFilesList:En},Symbol.toStringTag,{value:"Module"})),{pageFilesAll:fe,pageConfigs:jn,pageConfigGlobal:Rn}=fn(xn),de=Ie({withoutHash:!0});async function On(){const e={_isPageContextObject:!0,isPrerendering:!1,isClientSide:!0,isHydration:!0,isBackwardNavigation:null,_hasPageContextFromServer:!0,_hasPageContextFromClient:!1};return w(e,Et()),w(e,await In(e.pageId)),Tn(),e}function Tn(){const e=Ie({withoutHash:!0});y(de===e,`The URL was manipulated before the hydration finished ('${de}' to '${e}'). Ensure the hydration has finished before manipulating the URL. Consider using the onHydrationEnd() hook.`)}async function In(e){const t={};return w(t,{_pageFilesAll:fe,_pageConfigs:jn,_pageConfigGlobal:Rn}),w(t,await Qt(e,t._pageFilesAll,t._pageConfigs,t._pageConfigGlobal)),fe.filter(n=>n.fileType!==".page.server").forEach(n=>{var r;_(!((r=n.fileExports)!=null&&r.onBeforeRender),`export { onBeforeRender } of ${n.filePath} is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define onBeforeRender() in a .page.server.js file instead, see https://vike.dev/onBeforeRender-isomorphic#server-routing`,{onlyOnce:!0})}),t}const Fn=j("hooks/getHook.ts",{});function J(e,t){if(!(t in e.exports))return null;const{hooksTimeout:n}=e.config,r=An(n,t),i=e.exports[t],s=e.exportsAll[t][0];if(o(s.exportValue===i),i===null)return null;const a=s.filePath;return o(a),o(!a.endsWith(" ")),kn(i,{hookName:t,hookFilePath:a}),{hookFn:i,hookName:t,hookFilePath:a,hookTimeout:r}}function Ln(e,t){J(e,t)}function kn(e,{hookName:t,hookFilePath:n}){o(t&&n),o(!t.endsWith(")")),y(D(e),`Hook ${t}() defined by ${n} should be a function`)}function An(e,t){const n=zn(e);if(n===!1)return{error:!1,warning:!1};const r=n[t],i=Wn(t);return(r==null?void 0:r.error)!==void 0&&(i.error=r.error),(r==null?void 0:r.warning)!==void 0&&(i.warning=r.warning),i}function zn(e){if(e===void 0)return{};if(e===!1)return!1;y(C(e),`Setting ${m.cyan("hooksTimeout")} should be ${m.cyan("false")} or an object`);const t={};return Object.entries(e).forEach(([n,r])=>{if(r===!1){t[n]={error:!1,warning:!1};return}y(C(r),`Setting ${m.cyan(`hooksTimeout.${n}`)} should be ${m.cyan("false")} or an object`);const[i,s]=["error","warning"].map(a=>{const l=r[a];if(l===void 0||l===!1)return l;const c=`Setting ${m.cyan(`hooksTimeout.${n}.${a}`)} should be`;return y(typeof l=="number",`${c} ${m.cyan("false")} or a number`),y(l>0,`${c} a positive number`),l});t[n]={error:i,warning:s}}),t}function Wn(e){return e==="onBeforeRoute"?{error:5*1e3,warning:1*1e3}:Fn.isPrerendering?{error:2*60*1e3,warning:30*1e3}:(o(!e.toLowerCase().includes("prerender")),{error:30*1e3,warning:4*1e3})}const Dn="__VIKE__NOT_SERIALIZABLE__";function Vn(e){return new Proxy(e,{get(t,n){const r=e[n],i=pt(n);return y(r!==Dn,`Can't access pageContext${i} on the client side. Because it can't be serialized, see server logs.`),r}})}function Un(e){Bn(e),Hn(e)}function Bn(e){rn(e.pageId,e._pageConfigs)&&o(E(e,"is404","boolean"))}function Hn(e){if(e.is404===void 0||e.is404===null)return;const t=e.pageProps||{};if(!C(t)){_(!1,"pageContext.pageProps should be an object",{showStackTrace:!0,onlyOnce:!0});return}t.is404=t.is404||e.is404,e.pageProps=t}function Gn(e){o(e.pageId),o("config"in e),o("configEntries"in e),Un(e),"_pageId"in e||Object.defineProperty(e,"_pageId",{get(){return _(!1,"pageContext._pageId has been renamed to pageContext.pageId",{showStackTrace:!0,onlyOnce:!0}),e.pageId},enumerable:!1}),Nn(e)}function Nn(e){let t=Object.getOwnPropertyDescriptors(e);for(const n of Object.keys(e))delete e[n];t=Object.fromEntries(Object.entries(t).sort(([n],[r])=>St(n,r))),Object.defineProperties(e,t)}function Jn(e,t){{const i=e;o(i.isHydration===!0),o(i.isBackwardNavigation===null)}const n=e.config.Page||e.exports.Page;return w(e,{Page:n}),Yn(e),Gn(e),Vn(e)}function Yn(e){Kn(e)}function Kn(e){Object.entries(e).forEach(([t,n])=>{delete e[t],e[t]=n})}async function Mn(e,t){const n=Jn(e);let r=null,i;r=J(e,"render"),i="render";{const l=J(e,"onRenderClient");l&&(r=l,i="onRenderClient")}if(!r){const l=qn(e);if(o(l),e._pageConfigs.length>0)y(!1,`No onRenderClient() hook defined for URL '${l}', but it's needed, see https://vike.dev/onRenderClient`);else{const c=e._pageFilesLoaded.filter(f=>f.fileType===".page.client");let u;c.length===0?u="No file `*.page.client.*` found for URL "+l:u="One of the following files should export a render() hook: "+c.map(f=>f.filePath).join(" "),y(!1,u)}}o(r);const s=r.hookFn;o(i);const a=await Ze(()=>s(n),r,e);y(a===void 0,`The ${i}() hook defined by ${r.hookFilePath} isn't allowed to return a value`)}function qn(e){let t;try{t=e.urlPathname??e.urlOriginal}catch{}return t=t??window.location.href,t}Ke();We();Xn();async function Xn(){var t,n;const e=await On();await Mn(e),Ln(e,"onHydrationEnd"),await((n=(t=e.exports).onHydrationEnd)==null?void 0:n.call(t,e))}
