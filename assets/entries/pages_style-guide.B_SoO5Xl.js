import{r as h,j as c,R,f as U,n as e,k as o,l as u,m as p,a as t,o as m,q as i,b as _,i as I,c as v,d as H}from"../chunks/chunk-Dr3wryG8.js";/* empty css                      */const y=h.forwardRef((s,a)=>c.jsx("span",{...s,ref:a}));y.displayName="Span";var D=[16,32,48,64,96,128,256,384],k=[640,750,828,1080,1200,1920,2048,3840],f=[...D,...k],F=(s,a)=>{if(a){const n=/(^|\s)(1?\d?\d)vw/g,d=[];for(let x;x=n.exec(a);x)d.push(Number.parseInt(x[2],10));if(d.length){const x=Math.min(...d)*.01;return{widths:f.filter(j=>j>=k[0]*x),kind:"w"}}return{widths:f,kind:"w"}}if(s==null)return{widths:k,kind:"w"};const l=2;let r=f.findIndex(n=>n>=l*s);return r=r<0?f.length:r,{widths:f.slice(0,r+1),kind:"w"}},V=({src:s,width:a,quality:l,sizes:r,loader:n})=>{const{widths:d,kind:x}=F(a,r);return{sizes:!r&&x==="w"?"100vw":r,srcSet:d.map((j,w)=>`${n({src:s,quality:l,width:j})} ${x==="w"?j:w+1}${x}`).join(", "),src:n({src:s,quality:l,width:d[d.length-1]})}},S=s=>{if(typeof s=="number")return Math.round(s);if(typeof s=="string"){const a=Number.parseFloat(s);if(!Number.isNaN(a))return Math.round(a)}},M="(min-width: 1280px) 50vw, 100vw",W=80,O=s=>{try{return new URL(s),!0}catch{return!1}},B=s=>{const a=S(s.width),l=Math.max(Math.min(S(s.quality)??W,100),0);if(s.src!=null&&s.src!==""){if(s.srcSet==null&&s.optimize){const n=s.sizes??(s.width==null?M:void 0);return V({src:s.src,width:a,quality:l,sizes:n,loader:s.loader})}const r={src:O(s.src)?s.src:s.loader({src:s.src,format:"raw"})};return s.srcSet!=null&&(r.srcSet=s.srcSet),s.sizes!=null&&(r.sizes=s.sizes),r}},A=h.forwardRef(({quality:s,loader:a,optimize:l=!0,loading:r="lazy",decoding:n="async",...d},x)=>{const j=B({src:d.src,srcSet:d.srcSet,sizes:d.sizes,width:d.width,quality:s,loader:a,optimize:l})??{src:G};return c.jsx("img",{alt:"",...d,...j,decoding:n,loading:r,ref:x})});A.displayName="Image";var G=`data:image/svg+xml;base64,${btoa(`<svg
  width="140"
  height="140"
  viewBox="0 0 600 600"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  >
  <rect width="600" height="600" fill="#DFE3E6" />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M450 170H150C141.716 170 135 176.716 135 185V415C135 423.284 141.716 430 150 430H450C458.284 430 465 423.284 465 415V185C465 176.716 458.284 170 450 170ZM150 145C127.909 145 110 162.909 110 185V415C110 437.091 127.909 455 150 455H450C472.091 455 490 437.091 490 415V185C490 162.909 472.091 145 450 145H150Z"
    fill="#C1C8CD"
  />
  <path
    d="M237.135 235.012C237.135 255.723 220.345 272.512 199.635 272.512C178.924 272.512 162.135 255.723 162.135 235.012C162.135 214.301 178.924 197.512 199.635 197.512C220.345 197.512 237.135 214.301 237.135 235.012Z"
    fill="#C1C8CD"
  />
  <path
    d="M160 405V367.205L221.609 306.364L256.552 338.628L358.161 234L440 316.043V405H160Z"
    fill="#C1C8CD"
  />
</svg>`)}`;const N=h.forwardRef(({loading:s="lazy",width:a,height:l,optimize:r=!0,decoding:n,$webstudio$canvasOnly$assetId:d,...x},j)=>{const w=String(x.src??""),{imageLoader:E,renderer:$}=h.useContext(R);let q=n,z=w;return $==="canvas"&&(s="eager",q="sync",z=d??w,a!==void 0&&l!==void 0&&Number.isNaN(a)&&Number.isNaN(l)&&(r=!1,a=void 0,l=void 0)),c.jsx(A,{loading:s,decoding:q,optimize:r,width:a,height:l,...x,loader:E,src:w,ref:j},z)});N.displayName="Image";const L=h.forwardRef(({children:s,...a},l)=>c.jsx("blockquote",{...a,ref:l,children:s}));L.displayName="Blockquote";const Z="ul",Q="ol",P=h.forwardRef(({ordered:s=!1,...a},l)=>h.createElement(s?Q:Z,{...a,ref:l}));P.displayName="List";const b=h.forwardRef(({children:s,...a},l)=>c.jsx("li",{...a,ref:l,children:s}));b.displayName="ListItem";const K="hr",T=h.forwardRef((s,a)=>h.createElement(K,{...s,ref:a}));T.displayName="Separator";const J=({innerRef:s,...a})=>c.jsx("code",{...a,style:{padding:20},ref:s,children:'Open the "Settings" panel to edit the code.'}),g=h.forwardRef(({code:s,children:a,...l},r)=>a===void 0&&s===void 0||String(s).trim().length===0?c.jsx(J,{innerRef:r,...l}):c.jsx("code",{...l,ref:r,children:s??a}));g.displayName="CodeText";const C=void 0,X=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],Y=void 0,cc=[],ec=[],sc=s=>c.jsxs(U,{id:"top",className:"w-body",children:[c.jsxs(e,{className:"w-box cna0hdz c1mzb2kd",children:[c.jsxs(e,{className:"w-box c1357293 c9jnjeu c1myzjic ckmmjuv czr2pxy c155uc7w cry9bxc c1lfjoq7 c11ykhog c1kt5iwx",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:[c.jsx(o,{className:"w-heading c11nr3ex c11dowh9 c32myit cwrra4i",children:"Style Guide"}),c.jsx(u,{children:c.jsx(p,{children:c.jsx(t,{className:"w-text",children:"Version 1.1"})})}),c.jsxs(m,{className:"w-paragraph cz5g8eb c1nkzcyu",children:["Here is the community style guide according to ",c.jsx(i,{href:"https://docs.webstudio.is/university/craft",target:"_blank",className:"w-rich-text-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Craft"}),", the recommended starting point for Webstudio Projects. ",c.jsx(i,{href:"https://docs.webstudio.is/university/foundations/css-variables",target:"_blank",className:"w-rich-text-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"CSS variables"})," containing colors, sizes, and more are on the Global Root. "]})]}),c.jsxs(e,{id:"layout",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Layout"})}),c.jsxs(e,{className:"w-box copqmak c9sypx0 c1w3ahi2 c3zdkj3 c1lcvbhc",children:[c.jsx(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h cna0hdz c1mzb2kd c1vaudkt cci8rp4 c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx",children:c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"section"})}),c.jsx(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c2keyc8 cnkorcr ckmmjuv c1myzjic c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet c1357293 c9jnjeu czr2pxy c155uc7w ck4tzbx",children:c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"container"})}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 copqmak c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 c10zkoym ct8c5y2 c1f64byh ck4tzbx c1g7fxd7 cx6c9kw c174sw29",children:[c.jsx(e,{className:"w-box c7rvndl c2w8hv4",children:c.jsx(t,{className:"w-text c1yehcfp c1umavhe caipwxg cbvffy can94pj cuccfz7 cir85gx c1qom380 cr8yqfm c1ufwdzl c5blvcv cml0h3f c5m8ase clv8gve",children:"grid"})}),c.jsx(e,{className:"w-box",children:c.jsx(m,{className:"w-paragraph",children:"Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."})}),c.jsx(e,{className:"w-box",children:c.jsx(m,{className:"w-paragraph",children:"Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."})})]})]})]}),c.jsxs(e,{id:"colors",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:[c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Colors"}),c.jsxs(m,{className:"w-paragraph che9upb c1rco612",children:["Change these values on the Global Root. It's best practice to map semantic variables such as ",c.jsx(y,{className:"w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj",children:"--foreground-primary"})," to another variable such as ",c.jsx(y,{className:"w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj",children:"--gray-10"}),"."]})]}),c.jsx(o,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i",children:"Foreground"}),c.jsxs(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:[c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--foreground-primary"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c12y6bqh c6pvryr"})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--foreground-secondary"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1bd9ep2 ck4tzbx"})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--foreground-accent"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cpp0nin c6pvryr"})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--foreground-muted"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 czt9u4x c6pvryr"})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--foreground-border"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cchda18 c6pvryr"})]})]}),c.jsx(o,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i",children:"Background"}),c.jsxs(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:[c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--background-primary"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cvgv9nf ck4tzbx"})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--background-secondary"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1llqm3g c6pvryr"})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--background-accent"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c1iv8y8b c6pvryr"})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--background-card"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 cow0ixc c6pvryr"})]})]}),c.jsx(o,{tag:"h3",className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i",children:"Other"}),c.jsx(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1cty1eq cbvffy can94pj cdt4mfm c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1 c16x0h2l",children:"--focus-color"}),c.jsx(e,{className:"w-box cagnu3j c1cx42qj c1nj04wn c1nitjp7 c195lvp6 c1hr6a6t c1s9lq31 c17o0p2u c6pvryr"})]})})]}),c.jsxs(e,{id:"links-buttons",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Buttons and Links"})}),c.jsxs(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:[c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"button-group"}),c.jsxs(e,{className:"w-box cry9bxc c1qyy4dh c1wt8a7g c1md20bl c1e892th c15cml01",children:[c.jsx(i,{className:"w-link c14yqvd4 cl8m66n c13b531o c1my01bv c14z1eqr c1ktl1y1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 cqrpgto cl60rel c1ib9cr2",children:"button"}),c.jsx(i,{className:"w-link c1mtjugd c1e7helk c13b531o c1my01bv c14z1eqr c1ktl1y1 cgl7u82 crlid6h caoqbwa c1aguln c135vpv5 ckz5c6u cl60rel c1ib9cr2",children:"is-button-secondary"})]})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 c133lpx4 c14u5o53 ck4tzbx c1g7fxd7",children:[c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"link"}),c.jsx(i,{className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Link text you can edit"})]})]})]}),c.jsxs(e,{id:"elements",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Elements"})}),c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7",children:[c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"heading-1|2|3|4|5|6"}),c.jsxs(o,{className:"w-heading c11nr3ex c11dowh9 c32myit cwrra4i",children:["Heading 1 text ","",c.jsx("br",{}),"","you can edit"]}),c.jsxs(o,{className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:["Heading 2 text ","",c.jsx("br",{}),"","you can edit"]}),c.jsxs(o,{className:"w-heading cuoke4w c11dowh9 c32myit cwrra4i",children:["Heading 3 text ","",c.jsx("br",{}),"","you can edit"]}),c.jsxs(o,{className:"w-heading c160atll c11dowh9 c32myit cwrra4i",children:["Heading 4 text ","",c.jsx("br",{}),"","you can edit"]}),c.jsxs(o,{className:"w-heading c1kol985 c11dowh9 c32myit cwrra4i",children:["Heading 5 text ","",c.jsx("br",{}),"","you can edit"]}),c.jsxs(o,{className:"w-heading c1kol985 c11dowh9 c32myit cwrra4i",children:["Heading 6 text ","",c.jsx("br",{}),"","you can edit"]}),c.jsxs(m,{className:"w-paragraph",children:["Paragraph ",c.jsx(i,{className:"w-rich-text-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"text you"})," can edit","",c.jsx("br",{}),"","that spans multiple lines"]}),c.jsxs(L,{className:"w-blockquote cwrra4i c1mwdnfw cm42med cptxs8s csdfh58",children:[c.jsx(y,{className:"w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"blockquote"})," text you can edit"]}),c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"list"}),c.jsxs(P,{className:"w-list cwrra4i",children:[c.jsxs(b,{className:"w-list-item",children:[c.jsx(y,{className:"w-text-1 c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"list-item"})," text you can edit"]}),c.jsx(b,{className:"w-list-item",children:"List Item text you can edit"}),c.jsx(b,{className:"w-list-item",children:"List Item text you can edit"})]}),c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"separator"}),c.jsx(T,{className:"w-separator c2uxojo czr2pxy c32myit cwrra4i"}),c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"code"}),c.jsx(g,{code:'console.log("Hello World");',lang:"",className:"w-code-text c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj"})]})]}),c.jsxs(e,{id:"forms",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Forms"})}),c.jsx(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:c.jsx(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"my-token"})})})]}),c.jsxs(e,{id:"radix",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Radix"})}),c.jsx(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:c.jsx(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"my-token"})})})]}),c.jsxs(e,{id:"utility",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Utility"})}),c.jsx(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:c.jsx(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"my-token"})})})]}),c.jsxs(e,{id:"slots",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Slots"})}),c.jsx(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:c.jsx(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"my-slot"})})})]}),c.jsxs(e,{id:"custom",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsx(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Custom"})}),c.jsx(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:c.jsx(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:c.jsx(t,{className:"w-text c1yehcfp cbvffy can94pj c1p3n7hw c1qom380 c1pn4vw7 cczo11 c1tnvyeo c1pm51o8 c18tatc1",children:"my-token"})})})]}),c.jsxs(e,{id:"notes",className:"w-box cry9bxc c1lfjoq7 cdq89vd c1tcoltv c1778y6x",children:[c.jsxs(e,{className:"w-box cry9bxc c1lfjoq7 c1z0l37u c1ml0hr7 cbmc0x9",children:[c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"Notes"}),c.jsx(m,{className:"w-paragraph che9upb c1rco612",children:"Add notes for yourself or other creators that explain any nuances of the build."})]}),c.jsxs(e,{className:"w-box copqmak c1f64byh c1w3ahi2 c3zdkj3 c1lcvbhc",children:[c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c1qyy4dh ct02u4h c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(m,{className:"w-paragraph",children:"These are global CSS variables added in addition to Open Props."}),c.jsx(g,{code:`--foreground-primary
--foreground-secondary
--foreground-accent
--foreground-muted
--foreground-border

--background-primary
--background-secondary
--background-accent
--background-card

--gap-xs
--gap-s
--gap-m
--gap-l

--focus-color
--focus-width
--focus-offset

--duration-default
--easing-default`,className:"w-code-text c2i0393 c19evryj cntnubm c16hrg7f c1qakuu0 czr2pxy cz20ayj cf58xc1"})]}),c.jsxs(e,{className:"w-box c12n5uks csb0ifw cg5j03k c8od1c4 cry9bxc c16xs6ny c1wt8a7g c1fhkm63 clv8gve c1lfjoq7 cll3pt2 c1gy5yet ck4tzbx c1g7fxd7",children:[c.jsx(m,{className:"w-paragraph",children:c.jsx(_,{className:"w-bold-text",children:"Want to start with a light theme?"})}),c.jsxs(m,{className:"w-paragraph",children:["Click ",c.jsx(y,{className:"w-text-1 c2i0393 c19evryj cntnubm c16hrg7f c12vy3a5 cuwcd3w c1qakuu0 cz20ayj",children:"+"})," in Advanced on the Global Root and paste in the following:"]}),c.jsx(g,{code:`--foreground-primary: var(--gray-10);
--foreground-muted: var(--gray-7);
--background-primary: var(--gray-0);
--background-secondary: var(--gray-3);
--background-accent: var(--gray-10);`,className:"w-code-text c2i0393 c19evryj cntnubm c16hrg7f c1qakuu0 czr2pxy cz20ayj cf58xc1"})]})]})]})]}),c.jsx(e,{tag:"nav",className:"w-box c1sche0c c1l2989r cjqo3r0 c1cvcmzo c3xzas1 c1n6cdq4 c1sl0nnp c1qakuu0 c47o47j cw5izhw",children:c.jsxs(e,{className:"w-box c1357293 c9jnjeu c1myzjic ckmmjuv czr2pxy c155uc7w cry9bxc c18v2pa2 c1z0l37u c1ml0hr7 co39b1z",children:[c.jsx(i,{href:"/style-guide#layout",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Layout"}),c.jsx(i,{href:"/style-guide#colors",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Colors"}),c.jsx(i,{href:"/style-guide#links-buttons",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Links & Buttons"}),c.jsx(i,{href:"/style-guide#elements",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Elements"}),c.jsx(i,{href:"/style-guide#forms",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Forms"}),c.jsx(i,{href:"/style-guide#radix",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Radix"}),c.jsx(i,{href:"/style-guide#utility",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Utility"}),c.jsx(i,{href:"/style-guide",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Slots"}),c.jsx(i,{href:"/style-guide#custom",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Custom"}),c.jsx(i,{href:"/style-guide#notes",className:"w-link cio5jgl cld4m44 cl60rel c1ib9cr2",children:"Notes"})]})})]}),c.jsxs(e,{className:"w-box c1357293 c9jnjeu c1myzjic ckmmjuv czr2pxy c155uc7w cna0hdz c1mzb2kd cry9bxc c1lfjoq7 c1qyy4dh ct02u4h c1md20bl c1e892th",children:[c.jsx(o,{tag:"h2",className:"w-heading c1dxq9cf c11dowh9 c32myit cwrra4i",children:"👇Template for new pages👇"}),c.jsx(m,{className:"w-paragraph c1rco612 c1qom380 czt9u4x",children:'When creating a new page, you can copy the "Page Wrapper" instance below (see navigator) and paste it on the new page. It contains the skeleton of a page, including a nav, footer, and section.'})]}),c.jsxs(e,{className:"w-box",children:[c.jsx(u,{children:c.jsx(p,{children:c.jsx(e,{tag:"nav",className:"w-box c1357293 c9jnjeu c1myzjic ckmmjuv czr2pxy c155uc7w",children:c.jsx(i,{className:"w-link",children:c.jsx(N,{loading:"eager",className:"w-image"})})})})}),c.jsx(e,{tag:"main",className:"w-box",children:c.jsx(e,{tag:"section",className:"w-box cna0hdz c1mzb2kd",children:c.jsx(e,{className:"w-box c1357293 c9jnjeu c1myzjic ckmmjuv czr2pxy c155uc7w"})})}),c.jsx(u,{children:c.jsxs(p,{children:[c.jsx(e,{tag:"footer",className:"w-box",children:c.jsx(e,{className:"w-box c1357293 c9jnjeu c1myzjic ckmmjuv czr2pxy c155uc7w"})}),c.jsxs(i,{href:"https://webstudio.is/",target:"_blank",rel:"nofollow",className:"w-link cx7e777 cn12ej2 c1ngdwug c10yh23j c7f1npl c1sjzfnm c1trj0l7 cjqo3r0 cbuoy5w c393lej csxsvt6 c1oj4qw c183qt6d c1twgu0n c5r7m82 c1fhiulb cifio c1u7hg1c c1qqyhy5 c1mb8swa c1awhn4n c1qyy4dh ct02u4h csru8nn c135vpv5 c119suh8 cujxabw c17xbrdu c1lvufj2 c1oohece co9inq6 c18nx7en c13zjl4p ch9sscy c272dxa",children:[c.jsx(N,{src:"/assets/logo_r1qaJQiri6sK3rPyq-Sar.svg",width:20,height:20,alt:"Webstudio Logo",optimize:!1,className:"w-image c13fq7lq c1ckxn0n"}),c.jsx(t,{tag:"span",className:"w-text",children:"Built with Webstudio"})]})]})})]})]}),ac=({data:s})=>{const{system:a,resources:l,url:r}=s;return c.jsx(R.Provider,{value:{imageLoader:I,assetBaseUrl:v,resources:l,breakpoints:X},children:c.jsx(sc,{system:a},r)})},lc=Object.freeze(Object.defineProperty({__proto__:null,default:ac},Symbol.toStringTag,{value:"Module"})),tc=({data:s})=>{const{pageMeta:a}=s,{origin:l}=new URL(s.url);let r=a.socialImageUrl;return a.socialImageAssetName&&(r=`${l}${I({src:a.socialImageAssetName,format:"raw"})}`),c.jsxs(c.Fragment,{children:[s.url&&c.jsx("meta",{property:"og:url",content:s.url}),c.jsx("title",{children:a.title}),c.jsx("meta",{property:"og:title",content:a.title}),a.description&&c.jsxs(c.Fragment,{children:[c.jsx("meta",{name:"description",content:a.description}),c.jsx("meta",{property:"og:description",content:a.description})]}),c.jsx("meta",{property:"og:type",content:"website"}),C,r&&c.jsx("meta",{property:"og:image",content:a.socialImageUrl}),C,a.excludePageFromSearch&&c.jsx("meta",{name:"robots",content:"noindex, nofollow"}),a.custom.map(({property:n,content:d})=>c.jsx("meta",{property:n,content:d},n)),Y,cc.map(n=>c.jsx("link",{rel:"preload",href:`${v}${n}`,as:"font",crossOrigin:"anonymous"},n)),ec.map(n=>c.jsx("link",{rel:"preload",href:`${v}${n}`,as:"image"},n))]})},rc=Object.freeze(Object.defineProperty({__proto__:null,Head:tc},Symbol.toStringTag,{value:"Module"})),ic={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/style-guide/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:lc}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/style-guide/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:rc}}};export{ic as configValuesSerialized};
