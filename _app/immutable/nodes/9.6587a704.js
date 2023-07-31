import{s as te,h as ee,n as Yt}from"../chunks/scheduler.883a76a4.js";import{S as ae,i as le,g as a,s as o,m as C,h as l,y as c,c as r,j as i,n as E,f as s,k as e,l as Kt,a as At,z as t}from"../chunks/index.b1c84ff3.js";import{b as Qt}from"../chunks/paths.36d64ec4.js";import{P as Lt}from"../chunks/public.a3e6d84f.js";function se(Wt){let u,St='<div class="hero-body"><h1 class="title">Application Documentation</h1> <p class="subtitle">CONTENT-TYPE  endpoint</p></div>',K,p,R,N,q,d,h,b,et,I,at,lt,T,Pt="Get the last delegations made on the Tezos network",st,_,n,y,Dt="Optional query parameters :",it,M,ot,Ht=new Date().getFullYear()+"",rt,nt,O,kt="Limit: `limit=X` 0 > X <= 100",ct,w,Vt="Page: `page=X` 0 >= X <= ∞",ut,Y,zt=`<p class="has-text-left mb-1">API Responses code and format :</p> <li>200 : <span>[{ &quot;timestamp&quot;: &quot;RFC3339 Timestamp String&quot;,
                    &quot;amount&quot;: &quot;XTZ Amount String&quot;, &quot;delegator&quot;: &quot;Delegator
                    Address String&quot;, &quot;block&quot;: &quot;Block Height String&quot;
                    },...]</span></li> <li>400 : <span>{ &quot;message&quot;: &quot;invalid parameter [param]&quot; }</span></li> <li>500 : <span>{ &quot;message&quot;: &quot;something went bad, try again later&quot;
                    }</span></li>`,dt,v,A,ht,L,vt,ft,S,Rt="Get last synchronized delegation",pt,P,Nt=`<div class="column"><p class="has-text-left mb-1">Optional query parameters :</p> <li>NA</li></div> <div class="column"><p class="has-text-left mb-1">API Responses code and format :</p> <li>200 : <span>{ &quot;id&quot;: &quot;Reference API item ID Number&quot;,
                    &quot;timestamp&quot;: &quot;RFC3339 Timestamp String&quot;, &quot;amount&quot;: &quot;XTZ
                    Amount String&quot;, &quot;delegator&quot;: &quot;Delegator Address String&quot;,
                    &quot;block_hash&quot;: &quot;Block Hash String&quot;, &quot;block_level&quot;: &quot;Block
                    Level Number&quot; }</span></li> <li>500 : <span>{ &quot;message&quot;: &quot;something went bad, try again later&quot;
                    }</span></li></div>`,mt,g,D,qt,H,_t,gt,k,Mt="Check service availability",xt,X,f,V,Ot="HTML/CSS/JS... /*",Ct,z,wt="Load this application",Et,J,B,F,Xt;return{c(){u=a("div"),u.innerHTML=St,K=o(),p=a("div"),R=a("div"),N=a("div"),q=a("div"),d=a("div"),h=a("article"),b=a("h3"),et=C("JSON "),I=a("a"),at=C("/xtz/delegations"),lt=o(),T=a("p"),T.textContent=Pt,st=o(),_=a("div"),n=a("div"),y=a("p"),y.textContent=Dt,it=o(),M=a("li"),ot=C("Year : `year=YYYY` 2018 >= YYYY <= "),rt=C(Ht),nt=o(),O=a("li"),O.textContent=kt,ct=o(),w=a("li"),w.textContent=Vt,ut=o(),Y=a("div"),Y.innerHTML=zt,dt=o(),v=a("article"),A=a("h3"),ht=C("JSON "),L=a("a"),vt=C("/xtz/sync"),ft=o(),S=a("p"),S.textContent=Rt,pt=o(),P=a("div"),P.innerHTML=Nt,mt=o(),g=a("article"),D=a("h3"),qt=C("HTTP "),H=a("a"),_t=C("/health"),gt=o(),k=a("p"),k.textContent=Mt,xt=o(),X=a("div"),f=a("article"),V=a("p"),V.textContent=Ot,Ct=o(),z=a("p"),z.textContent=wt,Et=o(),J=a("figure"),B=a("a"),F=a("img"),this.h()},l(m){u=l(m,"DIV",{class:!0,["data-svelte-h"]:!0}),c(u)!=="svelte-19txyca"&&(u.innerHTML=St),K=r(m),p=l(m,"DIV",{class:!0,style:!0});var G=i(p);R=l(G,"DIV",{class:!0});var Jt=i(R);N=l(Jt,"DIV",{class:!0});var Bt=i(N);q=l(Bt,"DIV",{class:!0});var Q=i(q);d=l(Q,"DIV",{class:!0});var $=i(d);h=l($,"ARTICLE",{class:!0});var j=i(h);b=l(j,"H3",{class:!0});var bt=i(b);et=E(bt,"JSON "),I=l(bt,"A",{target:!0,href:!0});var Ft=i(I);at=E(Ft,"/xtz/delegations"),Ft.forEach(s),bt.forEach(s),lt=r(j),T=l(j,"P",{class:!0,["data-svelte-h"]:!0}),c(T)!=="svelte-1x80efx"&&(T.textContent=Pt),st=r(j),_=l(j,"DIV",{class:!0});var W=i(_);n=l(W,"DIV",{class:!0});var x=i(n);y=l(x,"P",{class:!0,["data-svelte-h"]:!0}),c(y)!=="svelte-17m9ktp"&&(y.textContent=Dt),it=r(x),M=l(x,"LI",{});var It=i(M);ot=E(It,"Year : `year=YYYY` 2018 >= YYYY <= "),rt=E(It,Ht),It.forEach(s),nt=r(x),O=l(x,"LI",{["data-svelte-h"]:!0}),c(O)!=="svelte-13eyp0i"&&(O.textContent=kt),ct=r(x),w=l(x,"LI",{["data-svelte-h"]:!0}),c(w)!=="svelte-1cbholr"&&(w.textContent=Vt),x.forEach(s),ut=r(W),Y=l(W,"DIV",{class:!0,["data-svelte-h"]:!0}),c(Y)!=="svelte-j62205"&&(Y.innerHTML=zt),W.forEach(s),j.forEach(s),dt=r($),v=l($,"ARTICLE",{class:!0});var U=i(v);A=l(U,"H3",{class:!0});var Tt=i(A);ht=E(Tt,"JSON "),L=l(Tt,"A",{target:!0,href:!0});var Gt=i(L);vt=E(Gt,"/xtz/sync"),Gt.forEach(s),Tt.forEach(s),ft=r(U),S=l(U,"P",{class:!0,["data-svelte-h"]:!0}),c(S)!=="svelte-mvpzmp"&&(S.textContent=Rt),pt=r(U),P=l(U,"DIV",{class:!0,["data-svelte-h"]:!0}),c(P)!=="svelte-39gfoi"&&(P.innerHTML=Nt),U.forEach(s),mt=r($),g=l($,"ARTICLE",{class:!0});var tt=i(g);D=l(tt,"H3",{class:!0});var yt=i(D);qt=E(yt,"HTTP "),H=l(yt,"A",{target:!0,href:!0});var $t=i(H);_t=E($t,"/health"),$t.forEach(s),yt.forEach(s),gt=r(tt),k=l(tt,"P",{class:!0,["data-svelte-h"]:!0}),c(k)!=="svelte-ougxrr"&&(k.textContent=Mt),tt.forEach(s),$.forEach(s),xt=r(Q),X=l(Q,"DIV",{class:!0});var jt=i(X);f=l(jt,"ARTICLE",{class:!0});var Z=i(f);V=l(Z,"P",{class:!0,["data-svelte-h"]:!0}),c(V)!=="svelte-13owbmh"&&(V.textContent=Ot),Ct=r(Z),z=l(Z,"P",{class:!0,["data-svelte-h"]:!0}),c(z)!=="svelte-dtfuhf"&&(z.textContent=wt),Et=r(Z),J=l(Z,"FIGURE",{class:!0});var Ut=i(J);B=l(Ut,"A",{href:!0});var Zt=i(B);F=l(Zt,"IMG",{alt:!0,src:!0}),Zt.forEach(s),Ut.forEach(s),Z.forEach(s),jt.forEach(s),Q.forEach(s),Bt.forEach(s),Jt.forEach(s),G.forEach(s),this.h()},h(){e(u,"class","hero is-small is-primary"),e(I,"target","_blank"),e(I,"href",`${Lt}/xtz/delegations`),e(b,"class","title"),e(T,"class","subtitle"),e(y,"class","has-text-left mb-2"),e(n,"class","column"),e(Y,"class","column"),e(_,"class","columns"),e(h,"class","tile is-child notification is-info"),e(L,"target","_blank"),e(L,"href",`${Lt}/xtz/sync`),e(A,"class","title"),e(S,"class","subtitle"),e(P,"class","columns"),e(v,"class","tile is-child notification is-warning"),e(H,"target","_blank"),e(H,"href",`${Lt}/health`),e(D,"class","title"),e(k,"class","subtitle"),e(g,"class","tile is-child notification is-info"),e(d,"class","tile is-parent is-vertical"),e(V,"class","title"),e(z,"class","subtitle"),e(F,"alt","app logo"),ee(F.src,Xt=Qt+"/android-chrome-512x512.png")||e(F,"src",Xt),e(B,"href",Qt+"/"),e(J,"class","image is-4by3"),e(f,"class","tile is-child notification is-info "),e(X,"class","tile is-parent"),e(q,"class","tile"),e(N,"class","tile is-vertical is-8"),e(R,"class","tile is-ancestor"),e(p,"class","column"),Kt(p,"max-height","80vh"),Kt(p,"overflow-y","scroll")},m(m,G){At(m,u,G),At(m,K,G),At(m,p,G),t(p,R),t(R,N),t(N,q),t(q,d),t(d,h),t(h,b),t(b,et),t(b,I),t(I,at),t(h,lt),t(h,T),t(h,st),t(h,_),t(_,n),t(n,y),t(n,it),t(n,M),t(M,ot),t(M,rt),t(n,nt),t(n,O),t(n,ct),t(n,w),t(_,ut),t(_,Y),t(d,dt),t(d,v),t(v,A),t(A,ht),t(A,L),t(L,vt),t(v,ft),t(v,S),t(v,pt),t(v,P),t(d,mt),t(d,g),t(g,D),t(D,qt),t(D,H),t(H,_t),t(g,gt),t(g,k),t(q,xt),t(q,X),t(X,f),t(f,V),t(f,Ct),t(f,z),t(f,Et),t(f,J),t(J,B),t(B,F)},p:Yt,i:Yt,o:Yt,d(m){m&&(s(u),s(K),s(p))}}}class ce extends ae{constructor(u){super(),le(this,u,null,se,te,{})}}export{ce as component};
//# sourceMappingURL=9.6587a704.js.map