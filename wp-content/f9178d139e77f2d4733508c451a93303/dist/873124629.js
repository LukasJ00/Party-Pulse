"use strict";(self.webpackChunkrealCookieBanner_=self.webpackChunkrealCookieBanner_||[]).push([[376],{4769:(e,t,o)=>{o.r(t),o.d(t,{apply:()=>b});var n=o(8243),i=o(6778),r=o(6787),a=o(210);function s(e,t){let o,n,i,{presetId:r,isGcm:a}=t,s=!1,l="";const c={events:!0,executeCodeWhenNoTagManagerConsentIsGiven:!0};let d=e||"none";switch("googleTagManagerWithGcm"!==d||a||(d="googleTagManager"),d){case"googleTagManager":case"googleTagManagerWithGcm":i="gtm",o="dataLayer",l="Google Tag Manager",c.events="googleTagManagerWithGcm"!==d;break;case"matomoTagManager":i="mtm",o="_mtm",l="Matomo Tag Manager";break;default:c.events=!1,c.executeCodeWhenNoTagManagerConsentIsGiven=!1}return o&&(n=()=>(window[o]=window[o]||[],window[o])),i&&r===i&&(s=!0,c.events=!1,c.executeCodeWhenNoTagManagerConsentIsGiven=!1),{getDataLayer:n,useManager:d,serviceIsManager:s,managerLabel:l,expectedManagerPresetId:i,features:c}}function l(e){let t,{decisionCookieName:o,setCookiesViaManager:n,isGcm:i,groups:r,type:l}=e;const{useManager:c}=s(n,{isGcm:i,presetId:""}),d=r.find((e=>{let{isEssential:t}=e;return t})),u={[d.id]:d.items.map((e=>{let{id:t}=e;return t}))};if("consent"===l){const e=(0,a.h)(o);!1!==e?t=e.consent:(console.warn("Something went wrong while reading the cookie, fallback to essentials only..."),t=u)}return"essentials"===l&&(t=u),{isManagerActive:"none"!==c,selectedGroups:t,iterateServices:async function(e){for(const a of r)for(const r of a.items){var o;const c="all"===l||(null===(o=t[a.id])||void 0===o?void 0:o.indexOf(r.id))>-1,d=s(n,{presetId:r.presetId,isGcm:i});await e(a,r,c,d)}}}}var c=o(5380),d=o(7197),u=o(4670),g=o(3665),p=o(5042);var h=o(1352),m=o(7762),v=o(6616);async function b(e){const t=[];await l(e).iterateServices((async(e,o,n)=>{n&&t.push({group:e,service:o})})),document.dispatchEvent(new CustomEvent(h.x,{detail:{services:t}})),await(0,n.C)();const{dataLayer:o,isManagerOptOut:a,services:s,ready:b}=await async function(e){const t=[],{isManagerActive:o,iterateServices:n}=l(e),{skipOptIn:i}=e;const a=[];return await n((async(e,n,s,l)=>{let{getDataLayer:d,serviceIsManager:u}=l;const{codeDynamics:g,codeOptIn:p,executeCodeOptInWhenNoTagManagerConsentIsGiven:h}=n;if(s){const s=o&&h,l="function"==typeof i&&i(n);s||l||!p||a.push((0,r.K)(p,g));const d={group:e,service:n};document.dispatchEvent(new CustomEvent(c.g,{detail:d})),t.push(d)}})),{isManagerOptOut:!1,dataLayer:undefined,services:t,ready:Promise.all(a)}}(e),{ready:f}=await async function(e,t,o){const n=[],{isManagerActive:i,iterateServices:a}=l(e);return t?(a(((e,o,n,i)=>{let{tagManagerOptInEventName:r}=o,{features:a}=i;n&&r&&a.events&&t.push({event:r})})),setTimeout((()=>a(((e,o,n,i)=>{let{tagManagerOptOutEventName:r}=o,{features:a}=i;!n&&r&&a.events&&t.push({event:r})}))),1e3)):i&&o&&await a((async(e,t,o)=>{let{codeDynamics:i,codeOptIn:a,executeCodeOptInWhenNoTagManagerConsentIsGiven:s}=t;o&&s&&n.push((0,r.K)(a,i))})),{ready:Promise.all(n)}}(e,o,a),y=Promise.all([b,f]);await(0,i.H)(),document.dispatchEvent(new CustomEvent(m.V,{detail:{services:s,ready:y}}));const{deleteHttpCookies:C,services:k,ready:w}=await async function(e,t){const o=[],{isManagerActive:n,iterateServices:i}=l(e),a=[],s=[];return await i((async(e,i,l)=>{const{id:c,codeDynamics:h,codeOptOut:m,deleteTechnicalDefinitionsAfterOptOut:v,isEmbeddingOnlyExternalResources:b,technicalDefinitions:f,executeCodeOptOutWhenNoTagManagerConsentIsGiven:y}=i;if(!l){const l=n&&y;(l&&t||!l)&&a.push((0,r.K)(m,h)),v&&!b&&(function(e,t){for(const{type:o,name:n}of e){const e=(0,g.c)(n,t);if("*"===e)continue;const i=new RegExp((0,p.L)(e),"g");switch(o){case"http":for(const e of Object.keys(u.Z.get()))i.test(e)&&u.Z.remove(e);break;case"local":case"session":try{const e="local"===o?window.localStorage:window.sessionStorage;if(e)for(const t of Object.keys(e))if(i.test(t)){try{e.setItem(t,null)}catch(e){}let o=0;for(;e.getItem(t)&&o<100;)o++,e.removeItem(t)}}catch(e){continue}}}}(f,h),f.some((e=>{let{type:t}=e;return"http"===t}))&&s.push(c));const C={group:e,service:i};document.dispatchEvent(new CustomEvent(d.E,{detail:C})),o.push(C)}})),{services:o,ready:Promise.all(a),deleteHttpCookies:s}}(e,a);document.dispatchEvent(new CustomEvent(v.C,{detail:{services:k,deleteHttpCookies:C,ready:Promise.all([y,w])}}))}},2056:(e,t,o)=>{async function n(e,t){e.createdClientTime=(new Date).toISOString();const n=t.getConsentQueue();n.push(e),t.setConsentQueue(n);try{await t.getOption("persistConsent")(e,!0),t.setConsentQueue(t.getConsentQueue().filter((t=>{let{createdClientTime:o}=t;return e.createdClientTime!==o})))}catch(n){const{groups:i,decisionCookieName:r,tcfCookieName:a,gcmCookieName:s,failedConsentDocumentationHandling:l,revisionHash:c}=t.getOptions(),d="optimistic"===l,{decision:u,createdClientTime:g,tcfString:p,gcmConsent:h}=e,m={consent:d?"all"===u?i.reduce(((e,t)=>(e[t.id]=t.items.map((e=>{let{id:t}=e;return t})),e)),{}):"essentials"===u?(0,o(3013).R)(i,!1):u:(0,o(3013).R)(i,!1),previousUuids:[],revision:c,uuid:g,created:new Date(g)};localStorage.setItem(r,JSON.stringify(m)),p&&localStorage.setItem(a,d?p:""),h&&localStorage.setItem(s,d?JSON.stringify(h):"[]")}}o.r(t),o.d(t,{persistWithQueueFallback:()=>n})},5295:(e,t,o)=>{function n(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{decisionCookieName:i,tcfCookieName:r,gcmCookieName:a}=e.getOptions(),s=()=>{localStorage.removeItem(i),localStorage.removeItem(r),localStorage.removeItem(a),localStorage.removeItem(e.getConsentQueueName())},l=document.querySelector('a[href*="rcb-clear-current-cookie=1"]');if(null==l||l.addEventListener("click",s),e.isConsentQueueLocked()){const t=t=>{t.key!==e.getConsentQueueName(!0)||t.newValue||n(e)};return window.addEventListener("storage",t),()=>{window.removeEventListener("storage",t),null==l||l.removeEventListener("click",s)}}{let n,r=0;const a=async()=>{e.isConsentQueueLocked(!0);const t=e.getConsentQueue();let l=15e3;if(t.length>0){r++;try{const n=t.shift(),a=0===t.length||!o(4670).Z.get(i),c=await e.getOption("persistConsent")(n,a),d=o(4670).Z.get(i);d&&-1===d.indexOf(c)&&o(4670).Z.set(i,d.replace(/^(.*?:.*?):/gm,`$1,${c}:`)),e.setConsentQueue(t),0===t.length&&s(),r=0,l=1500}catch(e){l=15*r*1e3}}n=setTimeout(a,l)};return e.isConsentQueueLocked(!0),n=setTimeout(a,t?0:15e3),()=>{e.isConsentQueueLocked(!1),clearTimeout(n),null==l||l.removeEventListener("click",s)}}}o.r(t),o.d(t,{retryPersistFromQueue:()=>n})},1352:(e,t,o)=>{o.d(t,{x:()=>n});const n="RCB/Apply/Interactive"},2845:(e,t,o)=>{o.r(t),o.d(t,{BannerHistorySelect:()=>i});var n=o(748).h;const i=()=>{const e=(0,o(7850).S)(),{Select:t}=(0,o(1762).Y)().extend(...o(8185).A),{set:i,consent:r,groups:a,tcf:s,isGcm:l,gcmConsent:c,lazyLoadedDataForSecondView:d,activeAction:u,history:g,fetchHistory:p,visible:h,i18n:{historyLabel:m,historyItemLoadError:v,historySelectNone:b}}=e,[f,y]=(0,o(729).eJ)(),[C,k]=(0,o(729).eJ)({consent:r,groups:a,tcf:s,gcmConsent:c,lazyLoadedDataForSecondView:d}),w=e=>{let{tcf:t,gcmConsent:o=[],...n}=e;i({...n,isTcf:!!t,tcf:null,gcmConsent:[]})};(0,o(729).d4)((()=>{const e={consent:[],groups:[],gcmConsent:[],lazyLoadedDataForSecondView:void 0};if(f){const{context:t}=f;w(t||e)}else w(e)}),[f]);const S=(0,o(729).sO)(!1);(0,o(729).d4)((()=>{d&&!S.current&&"history"===u&&h&&(S.current=!0,async function(){const e=await p();k({consent:r,groups:a,tcf:s,gcmConsent:c,lazyLoadedDataForSecondView:d}),i({history:e}),y(e[0])}())}),[d,u,h]),(0,o(729).d4)((()=>{h||(S.current=!1)}),[h]),(0,o(729).d4)((()=>()=>w(C)),[]);const x=null==f?void 0:f.uuid;return n(o(729).HY,null,m," ",n(t,{disabled:!(null!=g&&g.length),value:(null==f?void 0:f.id)||-1,onChange:e=>{const t=+e.target.value;for(const e of g){const{id:o}=e;if(o===t){y(e);break}}}},(null==g?void 0:g.length)>0?g.map((e=>{let{id:t,isDoNotTrack:o,isUnblock:i,isForwarded:r,created:a}=e;return n("option",{key:t,value:t},new Date(a).toLocaleString(document.documentElement.lang),o?" (Do Not Track)":"",i?" (Content Blocker)":"",r?" (Consent Forwarding)":"")})):n("option",{value:-1},b)),n("div",{style:{opacity:.5,marginTop:5}},"UUID: ",x||"-"),!(null!=f&&f.context)&&n("div",{style:{fontWeight:"bold",marginTop:5}},v))}},4651:(e,t,o)=>{o.r(t),o.d(t,{BannerGroupList:()=>S});var n=o(7850),i=o(6270),r=o(2040),a=o(9840),s=o(729),l=o(9216),c=o(8185),d=o(3163),u=o(748).h;const g=e=>{let{onToggle:t,children:o,showMore:n,hideMore:r,...a}=e;const{Link:g}=(0,l.R)().extend(...c.A),[p,h]=(0,s.eJ)(!1),m=(0,d.q)();return u(s.HY,null,"  •  ",u(g,(0,i.Z)({href:"#",onClick:e=>{const o=!p;h(o),null==t||t(o),e.preventDefault()}},o?{"aria-expanded":p,"aria-controls":m}:{},a),p?r:n),o&&u("div",{id:m},p&&o))};var p=o(6652),h=o(748).h;const m=e=>{let{group:{id:t,isEssential:o},cookie:i}=e;const{id:r}=i,a=(0,n.S)(),{consent:l,activeAction:c}=a,d=o||"history"===c,u=o||((null==l?void 0:l[t])||[]).some((e=>e===r)),g=(0,s.I4)((e=>a.updateCookieChecked(t,r,e)),[a,t,r]);return h(p.Cookie,{cookie:i,propertyListProps:{isEssentialGroup:o},checked:u,disabled:d,onToggle:g})};var v=o(4429),b=o(748).h;const f=e=>{let{group:t}=e;const o=(0,n.S)(),{name:s,description:l,items:c}=t,{group:{headlineFontSize:d},individualTexts:{headline:u,showMore:p,hideMore:h}}=o,f=(0,r.O)(t);return b(v.Z,{legend:`${u}: ${s}`,headline:b(a.X,(0,i.Z)({},f,{fontSize:d}),s," (",c.length,")")},b("span",null,l),!!c&&b(g,{showMore:p,hideMore:h},c.map((e=>b(m,{key:e.id,group:t,cookie:e})))))};var y=o(6556),C=o(748).h;const k=e=>{let{children:t}=e;const{GroupList:o}=(0,l.R)().extend(...y.w);return C(o,null,t)};var w=o(748).h;const S=()=>{const{groups:e}=(0,n.S)(),t=e.filter((e=>{let{items:t}=e;return t.length}));return w(k,null,t.map((e=>w(f,{key:e.id,group:e}))))}},7887:(e,t,o)=>{o.r(t),o.d(t,{BannerSticky:()=>n});const n=()=>null},9840:(e,t,o)=>{o.d(t,{X:()=>i});var n=o(748).h;const i=e=>{let{hideCheckbox:t,isPartial:i,isChecked:r,isDisabled:a,fontSize:s,onToggle:l,children:c,after:d,...u}=e;const{checkbox:{className:g,style:p},Label:h}=(0,o(9216).R)().extend(...o(8185).A),m=i?o(6539).Z:o(8358).Z,v=(0,o(3163).q)();return n(h,null,!t&&n(o(729).HY,null,n("input",{name:"checkbox[]",type:"checkbox",value:"1",checked:r,disabled:a,className:g,style:p({fontSize:s}),onChange:e=>{const{checked:t}=e.target;null==l||l(t)},"aria-labelledby":v}),n(o(7345).p,(0,o(6270).Z)({"aria-hidden":!0,icon:m},u))),c&&n("span",null,n("span",{id:v,"aria-hidden":!0},c),d&&n("span",{onClick:e=>{e.stopPropagation()}},d)))}},6652:(e,t,o)=>{o.r(t),o.d(t,{Cookie:()=>I});var n=o(6270),i=o(4667),r=o(9840),a=o(729),s=o(7359),l=o(9216),c=o(8185),d=o(6556),u=o(748).h;const g=e=>{let{label:t,value:o,children:n,printValueAs:r,monospace:g}=e;const p=(0,l.R)(),{Link:h,CookieProperty:m}=p.extend(...c.A).extend(...d.w),v=(0,i.w)(),{i18n:{yes:b,no:f}}=v;let y="string"==typeof o&&o.startsWith("http")&&(0,s.C)(o)?u(h,{href:o,target:"_blank",rel:"noopener noreferrer"},o):"string"==typeof o?"phone"===r?u(h,{target:"_blank",href:`tel:${o.replace(/\s+/g,"")}`},o):"mail"===r?u(h,{target:"_blank",href:`mailto:${o}`},o):u("span",{dangerouslySetInnerHTML:{__html:o}}):o;return"boolean"===r&&(y=y?b:f),o||!1===o||"empty"===r?u(a.HY,null,u(m,null,t&&u("strong",null,t,": "),u("span",{role:"presentation",style:{fontFamily:g?"monospace":void 0}},y)),u(m,null,!!n&&u("div",null,n))):null};var p=o(7845),h=o(7064),m=o(3665),v=o(3160);const b=/(\r\n|\r|\n|<br[ ]?\/>)/g;var f=o(1762),y=o(748).h;const C=e=>{let{type:t,isDisabled:o,isBold:n}=e;const{Cookie:a}=(0,f.Y)().extend(...d.w),{gcmConsent:s,updateGcmConsentTypeChecked:l,group:{descriptionFontSize:c},i18n:{gcm:{purposes:{[t]:u}}}}=(0,i.w)();return y(a,null,y(r.X,{isChecked:s.indexOf(t)>-1,isDisabled:o,fontSize:c,onToggle:e=>l(t,e)},y("span",{style:{fontWeight:n?"bold":void 0}},u)))};var k=o(6379),w=o(748).h;const S=e=>{let{cookie:{purpose:t,isProviderCurrentWebsite:o,provider:n,providerContact:r={},providerPrivacyPolicyUrl:s,providerLegalNoticeUrl:l,legalBasis:c,ePrivacyUSA:d,dataProcessingInCountries:u,dataProcessingInCountriesSpecialTreatments:f,isEmbeddingOnlyExternalResources:y,technicalDefinitions:S,codeDynamics:x,googleConsentModeConsentTypes:I},isEssentialGroup:T,isDisabled:O}=e;const{i18n:L,isEPrivacyUSA:D,isDataProcessingInUnsafeCountries:N,iso3166OneAlpha2:B,dataProcessingInUnsafeCountriesSafeCountries:M,designVersion:P,websiteOperator:E,isGcm:R}=(0,i.w)(),G=function(){const{i18n:{durationUnit:e},designVersion:t}=(0,i.w)();return(0,a.I4)(((o,n)=>t<6?e[n]:(0,p.D)(o,e.n1[n],e.nx[n])),[e])}(),A={http:{name:"HTTP Cookie",abbr:"HTTP",backgroundColor:"black"},local:{name:"Local Storage",abbr:"Local",backgroundColor:"#b3983c"},session:{name:"Session Storage",abbr:"Session",backgroundColor:"#3c99b3"},indexedDb:{name:"IndexedDB",abbr:"I-DB",backgroundColor:"#4ab33c"}},W=(0,a.Ye)((()=>N?(0,k.D)({dataProcessingInCountries:u,safeCountries:M,specialTreatments:f.filter((e=>-1===[v.gt.StandardContractualClauses].indexOf(e))),designVersion:P}).map((e=>B[e]||e)):[]),[N,M,f,u,B,P]),{legalNotice:$,privacyPolicy:z,contactForm:F}=(0,h.p)(),H=(0,a.Ye)((()=>{if(o&&E){const{address:e,country:t,contactEmail:o,contactPhone:n}=E;return{provider:[e,B[t]||t].filter(Boolean).join(", "),contact:{email:o,phone:n,link:F},legalNoticeUrl:!1===$?"":$.url,privacyPolicyUrl:!1===z?"":z.url}}return{provider:n,contact:r,privacyPolicyUrl:s,legalNoticeUrl:l}}),[o,n,r,s,l,E,$,z,F]),U=(0,a.Ye)((()=>Object.values(H.contact).filter(Boolean).length>0),[H.contact]);return w(a.HY,null,!!t&&w(g,{label:L.purpose,value:(V=t,"string"==typeof V?V.split(b).map(((e,t)=>e.match(b)?(0,a.az)("br",{key:t}):e)):V)}),w(g,{label:L.legalBasis,value:"legal-requirement"===c?L.legalRequirement:"legitimate-interest"===c||T?L.legitimateInterest:L.consent}),R&&I.length>0&&w(g,{label:L.gcm.dataProcessingInService,printValueAs:"empty"},w("div",{style:{display:"inline-block"}},w(g,{printValueAs:"empty"},I.map((e=>w(C,{key:e,type:e,isDisabled:O})))))),w(g,{label:L.provider,value:H.provider},U&&w(a.HY,null,w(g,{label:L.providerContactPhone,value:H.contact.phone,printValueAs:"phone"}),w(g,{label:L.providerContactEmail,value:H.contact.email,printValueAs:"mail"}),w(g,{label:L.providerContactLink,value:H.contact.link}))),w(g,{label:L.providerPrivacyPolicyUrl,value:H.privacyPolicyUrl}),w(g,{label:L.providerLegalNoticeUrl,value:H.legalNoticeUrl}),!!D&&w(g,{label:L.ePrivacyUSA,value:d,printValueAs:"boolean"}),W.length>0&&w(g,{label:L.dataProcessingInUnsafeCountries,value:W.join(", ")}),P>4&&f.indexOf(v.gt.StandardContractualClauses)>-1&&w(g,{label:L.appropriateSafeguard,value:L.standardContractualClauses}),!y&&S.map((e=>{let{type:t,name:o,host:n,duration:i,durationUnit:r,isSessionDuration:a,purpose:s}=e;return w(g,{key:`${t}-${o}-${n}`,label:L.technicalCookieDefinition,monospace:!0,value:(0,m.c)(o,x)},w(g,{label:L.type,value:A[t].name}),w(g,{label:L.purpose,value:s}),!!n&&w(g,{label:L.host,value:n,monospace:!0}),w(g,{label:L.duration,value:["local","indexedDb"].indexOf(t)>-1?L.noExpiration:a||"session"===t?"Session":G(i,r)}))})));var V};var x=o(748).h;const I=e=>{let{cookie:t,checked:o,disabled:a,onToggle:s,propertyListProps:c={}}=e;const{Cookie:u}=(0,l.R)().extend(...d.w),{name:g}=t,{group:{descriptionFontSize:p}}=(0,i.w)();return x(u,null,x(r.X,{isChecked:o,isDisabled:a,fontSize:p,onToggle:s},x("strong",null,g)),x(S,(0,n.Z)({cookie:t},c,{isDisabled:!o})))}},4429:(e,t,o)=>{o.d(t,{Z:()=>i});var n=o(748).h;const i=e=>{let{headline:t,borderless:i,children:r,legend:a,...s}=e;const{Group:l,GroupInner:c,GroupDescription:d,screenReaderOnlyClass:u}=(0,o(9216).R)().extend(...o(6556).w),g=a||("string"==typeof t?t:void 0),p=n(c,null,g&&n("legend",{className:u},g),n("span",{"aria-hidden":!!g},t),r&&n(d,null,r));return i?n("div",(0,o(6270).Z)({className:"group"},s),p):n(l,s,p)}},1762:(e,t,o)=>{function n(){return(0,o(9216).R)().extend(...o(8681).y)}o.d(t,{Y:()=>n})},2040:(e,t,o)=>{function n(e){var t;const n=(0,o(7850).S)(),{id:i,items:r,isEssential:a}=e,{previewCheckboxActiveState:s,consent:l,activeAction:c}=n,d=a||"history"===c,u=s||a||!!l[i];return{isDisabled:d,isChecked:u,isPartial:!a&&(null===(t=l[i])||void 0===t?void 0:t.length)&&JSON.stringify(r.map((e=>{let{id:t}=e;return t})).sort())!==JSON.stringify(l[i].sort()||[]),onToggle:(0,o(729).I4)((e=>n.updateGroupChecked(i,e)),[n,i,u])}}o.d(t,{O:()=>n})},8681:(e,t,o)=>{o.d(t,{y:()=>l});var n=o(8330),i=o(3189),r=o.n(i);const a=(e,t)=>{let o,i,a;t?a=t({width:0,height:0,scrollbar:!1,scrolledTop:!1,scrolledBottom:!1},{width:n.nw,height:n.nw}):(o=e("width"),i=e("height"));const s=[],l=()=>s.forEach(((e,t,o)=>{e(),o.splice(t,1)})),c=function(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const c=()=>{e&&(r().clear(t),t=r().measure((()=>{const{width:t,height:n}=e.getBoundingClientRect(),{clientHeight:s,scrollHeight:l,scrollTop:c,offsetHeight:d}=e,u=s<l,g=Math.ceil(c+d+3)>=l;(0!==t||0!==n||e.offsetParent)&&r().mutate((()=>{a?a[1]({width:t,height:n,scrollbar:u,scrolledTop:0===c,scrolledBottom:g}):(e.style.setProperty(o,`${t}px`),e.style.setProperty(i,`${n}px`))}))})))};for(const t of[e,...n]){if(!t)continue;t.addEventListener("animationend",c),t.addEventListener("scroll",c);const e=new ResizeObserver(c);e.observe(t),s.push((()=>{e.disconnect(),t.removeEventListener("animationend",c),t.removeEventListener("scroll",c)}))}return l};return t?[c,a[0],l]:[c,{width:o,height:i},l]},s=(e,t)=>`rgba(${e("r")}, ${e("g")}, ${e("b")}, calc(${t()}/100))`,l=[Symbol("extendBannerStylesheet"),(e,t)=>{let{computed:o,rule:i,boolIf:r,boolNot:l,boolSwitch:c,jsx:d,variable:u,className:g,vars:p,varName:h,plugin:m}=e,{unsetDialogStyles:v,customize:{activeAction:b,pageRequestUuid4:f},boolLargeOrMobile:y,isMobile:C,layout:{dialogPosition:k,dialogMaxWidth:w,dialogMargin:S,dialogBorderRadius:x,bannerPosition:I,overlay:T,overlayBg:O,overlayBgAlpha:L,overlayBlur:D},design:{boxShadowEnabled:N,boxShadowColor:B,boxShadowOffsetX:M,boxShadowOffsetY:P,boxShadowBlurRadius:E,boxShadowSpreadRadius:R,boxShadowColorAlpha:G,fontSize:A,borderWidth:W,borderColor:$,textAlign:z,fontInheritFamily:F,fontFamily:H,fontWeight:U,fontColor:V},mobile:Q,layout:Z,individualLayout:Y}=t;const j={headline:g(),description:g(),firstButton:g()},_=a(h,p),J=a(h,p),q=a(h,p),X=a(h,p),K=a(h,p),ee=u(b,(0,n.IW)(b,["history"])),te=u(!1,void 0,"individual"),{isDialog:oe,isBanner:ne}=o([C,Z.type],(e=>{let[t,o]=e;const n=t?"banner":o;return{type:n,isDialog:"dialog"===n,isBanner:"banner"===n}})),ie=o([k],(e=>{let[t]=e;return[t.startsWith("top")?"flex-start":t.startsWith("bottom")?"flex-end":"center",t.endsWith("Center")?"center":t.endsWith("Left")?"flex-start":"flex-end"]}),"dialogAlign"),[re]=d("div",{classNames:"bann3r",position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:999999,filter:"none",maxWidth:"100vw",maxHeight:"100vh",fontSize:A("l"),background:r(T,s(O,L)),pointerEvents:r(T,"all","none"),backdropFilter:"none",transform:"translateZ(0)"}),[ae]=d("dialog",{classNames:["align",v],display:"flex",width:"100%",height:"100%",alignItems:r(oe,ie(0)),justifyContent:r(oe,ie(1))},{tabIndex:0,"aria-labelledby":j.headline,"aria-describedby":j.description}),se=r({when:oe,then:{when:[te,l(Y.inheritDialogMaxWidth)],then:Y.dialogMaxWidth(),or:w()},or:"100%"}),{alignment:le}=Q,ce=`${y(W,r)} solid ${$()}`,de=r(oe,x()),[,ue]=i({classNames:"inner",pointerEvents:"all",transition:"width 500ms, max-width 500ms",overflow:"hidden",maxWidth:se,width:se,textAlign:z("val"),fontFamily:r(F,"inherit",H()),fontWeight:U(),color:V("hex"),margin:r({when:[oe,l(k["is-middlecenter"])],then:S(),or:r(oe,"10px")}),borderRadius:de,boxShadow:r(N,`${M()} ${P()} ${E()} ${R()} rgba(${B("r")} ${B("g")} ${B("b")} / ${G()})`),alignSelf:r({when:C,then:c([[le("is-bottom"),"flex-end"],[le("is-top"),"flex-start"],[le("is-center"),"center"]]),or:{when:ne,then:c([[I("is-top"),"flex-start"],[I("is-bottom"),"flex-end"]])}}),borderTop:r({when:[ne,I("is-bottom")],then:ce}),borderBottom:r({when:[ne,I("is-top")],then:ce})}),ge={boxSizing:"border-box",backfaceVisibility:"initial",textTransform:"initial","-webkit-text-size-adjust":"100%"};i({forceSelector:`#${f}, #${f} *`,...ge}),m("modifyRule",(e=>{if("unset"===e.all)for(const t in ge)Object.prototype.hasOwnProperty.call(e,t)||(e[t]=ge[t])}));const pe=`${r(oe,W("l"),"0px")} solid ${$()}`;return{a11yIds:j,isDialog:oe,isBanner:ne,activeAction:ee,dimsOverlay:_,dimsContent:J,dimsHeader:q,dimsFooter:X,dimsRightSidebar:K,individualPrivacyOpen:te,Dialog:ae,Overlay:re,inner:ue,footerBorderStyle:{borderBottomLeftRadius:de,borderBottomRightRadius:de,borderLeft:pe,borderRight:pe,borderBottom:pe},headerBorderStyle:{borderTopLeftRadius:de,borderTopRightRadius:de,borderLeft:pe,borderRight:pe,borderTop:pe}}}]},6556:(e,t,o)=>{o.d(t,{w:()=>n});const n=[Symbol("extendCommonGroupsStylesheet"),(e,t)=>{let{jsx:o,boolIf:n,boolNot:i}=e,{group:r,design:a,decision:s,bodyDesign:l,boolLargeOrMobile:c}=t;const[d]=o("fieldset",{classNames:"dotted-groups",all:"unset",marginTop:"10px",lineBreak:"anywhere",lineHeight:2,pseudos:{">span,>label":{paddingRight:"10px",fontSize:n({when:l.dottedGroupsInheritFontSize(),then:c(a.fontSize,n),or:c(l.dottedGroupsFontSize,n)}),whiteSpace:"nowrap",display:"inline-block"},">span>i":{color:l.dottedGroupsBulletColor()},">span>i::after":{paddingRight:"5px",display:"inline-block",content:"'●'"},">span>span":{verticalAlign:"middle",cursor:n(s.groupsFirstView,"pointer")}}}),[u]=o("div",{classNames:"groups",marginTop:"10px",clear:"both",pseudos:{">div:not(:last-of-type)":{marginBottom:c(r.groupSpacing,n)}}}),[g]=o("div",{classNames:"group",background:n(i(r.groupInheritBg),r.groupBg()),padding:c(r.groupPadding,n),borderRadius:r.groupBorderRadius(),textAlign:"left",borderColor:r.groupBorderColor(),borderStyle:"solid",borderWidth:c(r.groupBorderWidth,n)}),[p]=o("fieldset",{classNames:"group-inner",all:"unset",textAlign:"left",color:r.headlineFontColor(),fontSize:c(r.headlineFontSize,n),fontWeight:r.headlineFontWeight()}),[h]=o("div",{classNames:"group-description",color:r.descriptionFontColor(),fontSize:c(r.descriptionFontSize,n),marginTop:"5px"}),[m]=o("div",{classNames:"cookie",marginTop:"10px",pseudos:{">label:first-of-type":{display:"block",marginBottom:"10px"}}}),[v]=o("div",{classNames:"cookie-prop",borderStyle:"solid",borderColor:r.groupBorderColor(),borderWidth:"0px",borderLeftWidth:c(r.groupBorderWidth,n),paddingLeft:"15px",pseudos:{">span>a":{wordBreak:"break-all"}}});return{DottedGroupList:d,GroupList:u,Group:g,GroupInner:p,GroupDescription:h,Cookie:m,CookieProperty:v}}]},7278:(e,t,o)=>{o.d(t,{IQ:()=>n,n4:()=>i,yt:()=>r});const n="stylesheet-created",i="stylesheet-toggle",r="css-var-update-"}}]);
//# sourceMappingURL=https://sourcemap.devowl.io/real-cookie-banner/4.7.8/e60b864bd4ec6e48efdbadd50dc4f39f/banner-lite-banner-lazy.lite.js.map