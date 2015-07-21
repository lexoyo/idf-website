(function(aS,p,ar){var aZ=this;function aY(l,k){var s=l.split("."),q=aZ;s[0] in q||!q.execScript||q.execScript("var "+s[0]);for(var n;s.length&&(n=s.shift());){s.length||void 0===k?q=q[n]?q[n]:q[n]={}:q[n]=k}}function ax(l,k,n){return l.call.apply(l.bind,arguments)}function a0(l,k,q){if(!l){throw Error()}if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(s,n);return l.apply(k,s)}}return function(){return l.apply(k,arguments)}}function aX(l,k,n){aX=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ax:a0;return aX.apply(null,arguments)}var aV=Date.now||function(){return +new Date};function aT(l,k){this.K=l;this.w=k||l;this.D=this.w.document}aT.prototype.createElement=function(l,k,q){l=this.D.createElement(l);if(k){for(var n in k){k.hasOwnProperty(n)&&("style"==n?l.style.cssText=k[n]:l.setAttribute(n,k[n]))}}q&&l.appendChild(this.D.createTextNode(q));return l};function aR(l,k,n){l=l.D.getElementsByTagName(k)[0];l||(l=p.documentElement);l&&l.lastChild&&l.insertBefore(n,l.lastChild)}function aG(l,k){function n(){l.D.body?k():setTimeout(n,0)}n()}function aP(l,k,u){k=k||[];u=u||[];for(var t=l.className.split(/\s+/),s=0;s<k.length;s+=1){for(var q=!1,n=0;n<t.length;n+=1){if(k[s]===t[n]){q=!0;break}}q||t.push(k[s])}k=[];for(s=0;s<t.length;s+=1){q=!1;for(n=0;n<u.length;n+=1){if(t[s]===u[n]){q=!0;break}}q||k.push(t[s])}l.className=k.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function aO(l,k){for(var s=l.className.split(/\s+/),q=0,n=s.length;q<n;q++){if(s[q]==k){return !0}}return !1}function aM(l){var k=l.w.location.protocol;"about:"==k&&(k=l.K.location.protocol);return"https:"==k?"https:":"http:"}function aL(l,k){var q=l.createElement("link",{rel:"stylesheet",href:k}),n=!1;q.onload=function(){n||(n=!0)};q.onerror=function(){n||(n=!0)};aR(l,"head",q)}function aJ(l,k,u,t){var s=l.D.getElementsByTagName("head")[0];if(s){var q=l.createElement("script",{src:k}),n=!1;q.onload=q.onreadystatechange=function(){n||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(n=!0,u&&u(null),q.onload=q.onreadystatechange=null,"HEAD"==q.parentNode.tagName&&s.removeChild(q))};s.appendChild(q);aS.setTimeout(function(){n||(n=!0,u&&u(Error("Script load timeout")))},t||5000);return q}return null}function aI(l,k,q,n){this.R=l;this.Z=k;this.Ba=q;this.ra=n}aY("webfont.BrowserInfo",aI);aI.prototype.sa=function(){return this.R};aI.prototype.hasWebFontSupport=aI.prototype.sa;aI.prototype.ta=function(){return this.Z};aI.prototype.hasWebKitFallbackBug=aI.prototype.ta;aI.prototype.ua=function(){return this.Ba};aI.prototype.hasWebKitMetricsBug=aI.prototype.ua;aI.prototype.qa=function(){return this.ra};aI.prototype.hasNativeFontLoading=aI.prototype.qa;function aw(l,k,q,n){this.c=null!=l?l:null;this.g=null!=k?k:null;this.B=null!=q?q:null;this.e=null!=n?n:null}var ay=/^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;aw.prototype.compare=function(k){return this.c>k.c||this.c===k.c&&this.g>k.g||this.c===k.c&&this.g===k.g&&this.B>k.B?1:this.c<k.c||this.c===k.c&&this.g<k.g||this.c===k.c&&this.g===k.g&&this.B<k.B?-1:0};aw.prototype.toString=function(){return[this.c,this.g||"",this.B||"",this.e||""].join("")};function av(l){l=ay.exec(l);var k=null,s=null,q=null,n=null;l&&(null!==l[1]&&l[1]&&(k=parseInt(l[1],10)),null!==l[2]&&l[2]&&(s=parseInt(l[2],10)),null!==l[3]&&l[3]&&(q=parseInt(l[3],10)),null!==l[4]&&l[4]&&(n=/^[0-9]+$/.test(l[4])?parseInt(l[4],10):l[4]));return new aw(k,s,q,n)}function au(l,k,v,u,t,s,q,n){this.P=l;this.ja=v;this.ya=t;this.ia=q;this.m=n}aY("webfont.UserAgent",au);au.prototype.getName=function(){return this.P};au.prototype.getName=au.prototype.getName;au.prototype.oa=function(){return this.ja};au.prototype.getEngine=au.prototype.oa;au.prototype.pa=function(){return this.ya};au.prototype.getPlatform=au.prototype.pa;au.prototype.na=function(){return this.ia};au.prototype.getDocumentMode=au.prototype.na;au.prototype.ma=function(){return this.m};au.prototype.getBrowserInfo=au.prototype.ma;function at(l,k){this.a=l;this.k=k}var a=new au("Unknown",0,"Unknown",0,"Unknown",0,void 0,new aI(!1,!1,!1,!1));at.prototype.parse=function(){var l;if(-1!=this.a.indexOf("MSIE")||-1!=this.a.indexOf("Trident/")){l=aq(this);var k=av(ap(this)),t=null,s=null,q=ao(this.a,/Trident\/([\d\w\.]+)/,1),n=an(this.k),t=-1!=this.a.indexOf("MSIE")?av(ao(this.a,/MSIE ([\d\w\.]+)/,1)):av(ao(this.a,/rv:([\d\w\.]+)/,1));""!=q?(s="Trident",av(q)):s="Unknown";l=new au("MSIE",0,s,0,l,0,n,new aI("Windows"==l&&6<=t.c||"Windows Phone"==l&&8<=k.c,!1,!1,!!this.k.fonts))}else{if(-1!=this.a.indexOf("Opera")){l:if(l="Unknown",t=av(ao(this.a,/Presto\/([\d\w\.]+)/,1)),av(ap(this)),k=an(this.k),null!==t.c?l="Presto":(-1!=this.a.indexOf("Gecko")&&(l="Gecko"),av(ao(this.a,/rv:([^\)]+)/,1))),-1!=this.a.indexOf("Opera Mini/")){t=av(ao(this.a,/Opera Mini\/([\d\.]+)/,1)),l=new au("OperaMini",0,l,0,aq(this),0,k,new aI(!1,!1,!1,!!this.k.fonts))}else{if(-1!=this.a.indexOf("Version/")&&(t=av(ao(this.a,/Version\/([\d\.]+)/,1)),null!==t.c)){l=new au("Opera",0,l,0,aq(this),0,k,new aI(10<=t.c,!1,!1,!!this.k.fonts));break l}t=av(ao(this.a,/Opera[\/ ]([\d\.]+)/,1));l=null!==t.c?new au("Opera",0,l,0,aq(this),0,k,new aI(10<=t.c,!1,!1,!!this.k.fonts)):new au("Opera",0,l,0,aq(this),0,k,new aI(!1,!1,!1,!!this.k.fonts))}}else{/OPR\/[\d.]+/.test(this.a)?l=am(this):/AppleWeb(K|k)it/.test(this.a)?l=am(this):-1!=this.a.indexOf("Gecko")?(l="Unknown",k=new aw,av(ap(this)),k=!1,-1!=this.a.indexOf("Firefox")?(l="Firefox",k=av(ao(this.a,/Firefox\/([\d\w\.]+)/,1)),k=3<=k.c&&5<=k.g):-1!=this.a.indexOf("Mozilla")&&(l="Mozilla"),t=av(ao(this.a,/rv:([^\)]+)/,1)),k||(k=1<t.c||1==t.c&&9<t.g||1==t.c&&9==t.g&&2<=t.B),l=new au(l,0,"Gecko",0,aq(this),0,an(this.k),new aI(k,!1,!1,!!this.k.fonts))):l=a}}return l};function aq(l){var k=ao(l.a,/(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/,1);if(""!=k){return/BB\d{2}/.test(k)&&(k="BlackBerry"),k}l=ao(l.a,/(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/,1);return""!=l?("Mac_PowerPC"==l?l="Macintosh":"PlayStation"==l&&(l="Linux"),l):"Unknown"}function ap(l){var k=ao(l.a,/(OS X|Windows NT|Android) ([^;)]+)/,2);if(k||(k=ao(l.a,/Windows Phone( OS)? ([^;)]+)/,2))||(k=ao(l.a,/(iPhone )?OS ([\d_]+)/,2))){return k}if(k=ao(l.a,/(?:Linux|CrOS|CrKey) ([^;)]+)/,1)){for(var k=k.split(/\s/),n=0;n<k.length;n+=1){if(/^[\d\._]+$/.test(k[n])){return k[n]}}}return(l=ao(l.a,/(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/,2))?l:"Unknown"}function am(l){var k=aq(l),u=av(ap(l)),t=av(ao(l.a,/AppleWeb(?:K|k)it\/([\d\.\+]+)/,1)),s="Unknown",q=new aw,q="Unknown",n=!1;/OPR\/[\d.]+/.test(l.a)?s="Opera":-1!=l.a.indexOf("Chrome")||-1!=l.a.indexOf("CrMo")||-1!=l.a.indexOf("CriOS")?s="Chrome":/Silk\/\d/.test(l.a)?s="Silk":"BlackBerry"==k||"Android"==k?s="BuiltinBrowser":-1!=l.a.indexOf("PhantomJS")?s="PhantomJS":-1!=l.a.indexOf("Safari")?s="Safari":-1!=l.a.indexOf("AdobeAIR")?s="AdobeAIR":-1!=l.a.indexOf("PlayStation")&&(s="BuiltinBrowser");"BuiltinBrowser"==s?q="Unknown":"Silk"==s?q=ao(l.a,/Silk\/([\d\._]+)/,1):"Chrome"==s?q=ao(l.a,/(Chrome|CrMo|CriOS)\/([\d\.]+)/,2):-1!=l.a.indexOf("Version/")?q=ao(l.a,/Version\/([\d\.\w]+)/,1):"AdobeAIR"==s?q=ao(l.a,/AdobeAIR\/([\d\.]+)/,1):"Opera"==s?q=ao(l.a,/OPR\/([\d.]+)/,1):"PhantomJS"==s&&(q=ao(l.a,/PhantomJS\/([\d.]+)/,1));q=av(q);n="AdobeAIR"==s?2<q.c||2==q.c&&5<=q.g:"BlackBerry"==k?10<=u.c:"Android"==k?2<u.c||2==u.c&&1<u.g:526<=t.c||525<=t.c&&13<=t.g;return new au(s,0,"AppleWebKit",0,k,0,an(l.k),new aI(n,536>t.c||536==t.c&&11>t.g,"iPhone"==k||"iPad"==k||"iPod"==k||"Macintosh"==k,!!l.k.fonts))}function ao(l,k,n){return(l=l.match(k))&&l[n]?l[n]:""}function an(k){if(k.documentMode){return k.documentMode}}function al(k){this.xa=k||"-"}al.prototype.e=function(l){for(var k=[],n=0;n<arguments.length;n++){k.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase())}return k.join(this.xa)};function ak(l,k){this.P=l;this.$=4;this.Q="n";var n=(k||"n4").match(/^([nio])([1-9])$/i);n&&(this.Q=n[1],this.$=parseInt(n[2],10))}ak.prototype.getName=function(){return this.P};function aj(k){return k.Q+k.$}function aH(l){var k=4,q="n",n=null;l&&((n=l.match(/(normal|oblique|italic)/i))&&n[1]&&(q=n[1].substr(0,1).toLowerCase()),(n=l.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?k=7:/[1-9]00/.test(n[1])&&(k=parseInt(n[1].substr(0,1),10))));return q+k}function az(l,k,s,q,n){this.d=l;this.p=k;this.T=s;this.j="wf";this.h=new al("-");this.ha=!1!==q;this.C=!1!==n}function ai(l){if(l.C){var k=aO(l.p,l.h.e(l.j,"active")),q=[],n=[l.h.e(l.j,"loading")];k||q.push(l.h.e(l.j,"inactive"));aP(l.p,q,n)}ah(l,"inactive")}function ah(l,k,n){if(l.ha&&l.T[k]){if(n){l.T[k](n.getName(),aj(n))}else{l.T[k]()}}}function b(){this.A={}}function ag(l,k){this.d=l;this.H=k;this.t=this.d.createElement("span",{"aria-hidden":"true"},this.H)}function af(l,k){var u=l.t,t;t=[];for(var s=k.P.split(/,\s*/),q=0;q<s.length;q++){var n=s[q].replace(/['"]/g,"");-1==n.indexOf(" ")?t.push(n):t.push("'"+n+"'")}t=t.join(",");s="normal";"o"===k.Q?s="oblique":"i"===k.Q&&(s="italic");u.style.cssText="display:block;position:absolute;top:0px;left:0px;visibility:hidden;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+t+";"+("font-style:"+s+";font-weight:"+(k.$+"00")+";")}function ae(k){aR(k.d,"body",k.t)}ag.prototype.remove=function(){var k=this.t;k.parentNode&&k.parentNode.removeChild(k)};function aA(w,v,u,t,s,q,n,l){this.aa=w;this.va=v;this.d=u;this.s=t;this.H=l||"BESbswy";this.m=s;this.J={};this.Y=q||3000;this.da=n||null;this.G=this.F=null;w=new ag(this.d,this.H);ae(w);for(var k in ac){ac.hasOwnProperty(k)&&(af(w,new ak(ac[k],aj(this.s))),this.J[ac[k]]=w.t.offsetWidth)}w.remove()}var ac={Ea:"serif",Da:"sans-serif",Ca:"monospace"};aA.prototype.start=function(){this.F=new ag(this.d,this.H);ae(this.F);this.G=new ag(this.d,this.H);ae(this.G);this.za=aV();af(this.F,new ak(this.s.getName()+",serif",aj(this.s)));af(this.G,new ak(this.s.getName()+",sans-serif",aj(this.s)));e(this)};function aK(l,k,q){for(var n in ac){if(ac.hasOwnProperty(n)&&k===l.J[ac[n]]&&q===l.J[ac[n]]){return !0}}return !1}function e(l){var k=l.F.t.offsetWidth,n=l.G.t.offsetWidth;k===l.J.serif&&n===l.J["sans-serif"]||l.m.Z&&aK(l,k,n)?aV()-l.za>=l.Y?l.m.Z&&aK(l,k,n)&&(null===l.da||l.da.hasOwnProperty(l.s.getName()))?ab(l,l.aa):ab(l,l.va):aB(l):ab(l,l.aa)}function aB(k){setTimeout(aX(function(){e(this)},k),25)}function ab(l,k){l.F.remove();l.G.remove();k(l.s)}function o(l,k,q,n){this.d=k;this.u=q;this.U=0;this.fa=this.ca=!1;this.Y=n;this.m=l.m}function h(w,v,u,t,s){u=u||{};if(0===v.length&&s){ai(w.u)}else{for(w.U+=v.length,s&&(w.ca=s),s=0;s<v.length;s++){var q=v[s],n=u[q.getName()],l=w.u,k=q;l.C&&aP(l.p,[l.h.e(l.j,k.getName(),aj(k).toString(),"loading")]);ah(l,"fontloading",k);l=null;l=new aA(aX(w.ka,w),aX(w.la,w),w.d,q,w.m,w.Y,t,n);l.start()}}}o.prototype.ka=function(l){var k=this.u;k.C&&aP(k.p,[k.h.e(k.j,l.getName(),aj(l).toString(),"active")],[k.h.e(k.j,l.getName(),aj(l).toString(),"loading"),k.h.e(k.j,l.getName(),aj(l).toString(),"inactive")]);ah(k,"fontactive",l);this.fa=!0;aN(this)};o.prototype.la=function(l){var k=this.u;if(k.C){var s=aO(k.p,k.h.e(k.j,l.getName(),aj(l).toString(),"active")),q=[],n=[k.h.e(k.j,l.getName(),aj(l).toString(),"loading")];s||q.push(k.h.e(k.j,l.getName(),aj(l).toString(),"inactive"));aP(k.p,q,n)}ah(k,"fontinactive",l);aN(this)};function aN(k){0==--k.U&&k.ca&&(k.fa?(k=k.u,k.C&&aP(k.p,[k.h.e(k.j,"active")],[k.h.e(k.j,"loading"),k.h.e(k.j,"inactive")]),ah(k,"active")):ai(k.u))}function m(k){this.K=k;this.v=new b;this.Aa=new at(k.navigator.userAgent,k.document);this.a=this.Aa.parse();this.V=this.W=0;this.M=this.N=!0}m.prototype.load=function(l){var k=l.context||this.K;this.d=new aT(this.K,k);this.N=!1!==l.events;this.M=!1!==l.classes;var k=new az(this.d,k.document.documentElement,l,this.N,this.M),v=[],u=l.timeout;k.C&&aP(k.p,[k.h.e(k.j,"loading")]);ah(k,"loading");var v=this.v,t=this.d,s=[],q;for(q in l){if(l.hasOwnProperty(q)){var n=v.A[q];n&&s.push(n(l[q],t))}}v=s;this.V=this.W=v.length;l=new o(this.a,this.d,k,u);q=0;for(u=v.length;q<u;q++){t=v[q],t.L(this.a,aX(this.wa,this,t,k,l))}};m.prototype.wa=function(l,k,s,q){var n=this;q?l.load(function(u,t,v){aC(n,s,u,t,v)}):(l=0==--this.W,this.V--,l&&0==this.V?ai(k):(this.M||this.N)&&h(s,[],{},null,l))};function aC(l,k,t,s,q){var n=0==--l.W;(l.M||l.N)&&setTimeout(function(){h(k,t,s||null,q||null,n)},0)}function j(l,k,n){this.S=l?l:k+aQ;this.q=[];this.X=[];this.ga=n||""}var aQ="//fonts.googleapis.com/css";j.prototype.e=function(){if(0==this.q.length){throw Error("No fonts to load!")}if(-1!=this.S.indexOf("kit=")){return this.S}for(var l=this.q.length,k=[],n=0;n<l;n++){k.push(this.q[n].replace(/ /g,"+"))}l=this.S+"?family="+k.join("%7C");0<this.X.length&&(l+="&subset="+this.X.join(","));0<this.ga.length&&(l+="&text="+encodeURIComponent(this.ga));return l};function aD(k){this.q=k;this.ea=[];this.O={}}var r={latin:"BESbswy",cyrillic:"&#1081;&#1103;&#1046;",greek:"&#945;&#946;&#931;",khmer:"&#x1780;&#x1781;&#x1782;",Hanuman:"&#x1780;&#x1781;&#x1782;"},aU={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},aE={i:"i",italic:"i",n:"n",normal:"n"},ad=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;aD.prototype.parse=function(){for(var z=this.q.length,y=0;y<z;y++){var x=this.q[y].split(":"),w=x[0].replace(/\+/g," "),v=["n4"];if(2<=x.length){var u;var t=x[1];u=[];if(t){for(var t=t.split(","),s=t.length,l=0;l<s;l++){var q;q=t[l];if(q.match(/^[\w-]+$/)){q=ad.exec(q.toLowerCase());var k=void 0;if(null==q){k=""}else{k=void 0;k=q[1];if(null==k||""==k){k="4"}else{var n=aU[k],k=n?n:isNaN(k)?"4":k.substr(0,1)}q=q[2];k=[null==q||""==q?"n":aE[q],k].join("")}q=k}else{q=""}q&&u.push(q)}}0<u.length&&(v=u);3==x.length&&(x=x[2],u=[],x=x?x.split(","):u,0<x.length&&(x=r[x[0]])&&(this.O[w]=x))}this.O[w]||(x=r[w])&&(this.O[w]=x);for(x=0;x<v.length;x+=1){this.ea.push(new ak(w,v[x]))}}};function i(l,k){this.a=(new at(navigator.userAgent,p)).parse();this.d=l;this.f=k}var aW={Arimo:!0,Cousine:!0,Tinos:!0};i.prototype.L=function(l,k){k(l.m.R)};i.prototype.load=function(l){var k=this.d;"MSIE"==this.a.getName()&&1!=this.f.blocking?aG(k,aX(this.ba,this,l)):this.ba(l)};i.prototype.ba=function(l){for(var k=this.d,v=new j(this.f.api,aM(k),this.f.text),u=this.f.families,t=u.length,s=0;s<t;s++){var q=u[s].split(":");3==q.length&&v.X.push(q.pop());var n="";2==q.length&&""!=q[1]&&(n=":");v.q.push(q.join(n))}u=new aD(u);u.parse();aL(k,v.e());l(u.ea,u.O,aW)};function g(l,k){this.d=l;this.f=k;this.o=[]}g.prototype.I=function(l){var k=this.d;return aM(this.d)+(this.f.api||"//f.fontdeck.com/s/css/js/")+(k.w.location.hostname||k.K.location.hostname)+"/"+l+".js"};g.prototype.L=function(l,k){var s=this.f.id,q=this.d.w,n=this;s?(q.__webfontfontdeckmodule__||(q.__webfontfontdeckmodule__={}),q.__webfontfontdeckmodule__[s]=function(u,x){for(var w=0,v=x.fonts.length;w<v;++w){var t=x.fonts[w];n.o.push(new ak(t.name,aH("font-weight:"+t.weight+";font-style:"+t.style)))}k(u)},aJ(this.d,this.I(s),function(t){t&&k(!1)})):k(!1)};g.prototype.load=function(k){k(this.o)};function f(l,k){this.d=l;this.f=k;this.o=[]}f.prototype.I=function(l){var k=aM(this.d);return(this.f.api||k+"//use.typekit.net")+"/"+l+".js"};f.prototype.L=function(l,k){var s=this.f.id,q=this.d.w,n=this;s?aJ(this.d,this.I(s),function(u){if(u){k(!1)}else{if(q.Typekit&&q.Typekit.config&&q.Typekit.config.fn){u=q.Typekit.config.fn;for(var y=0;y<u.length;y+=2){for(var v=u[y],x=u[y+1],t=0;t<x.length;t++){n.o.push(new ak(v,x[t]))}}try{q.Typekit.load({events:!1,classes:!1})}catch(w){}}k(!0)}},2000):k(!1)};f.prototype.load=function(k){k(this.o)};function d(l,k){this.d=l;this.f=k;this.o=[]}d.prototype.L=function(l,k){var t=this,s=t.f.projectId,q=t.f.version;if(s){var n=t.d.w;aJ(this.d,t.I(s,q),function(v){if(v){k(!1)}else{if(n["__mti_fntLst"+s]&&(v=n["__mti_fntLst"+s]())){for(var u=0;u<v.length;u++){t.o.push(new ak(v[u].fontfamily))}}k(l.m.R)}}).id="__MonotypeAPIScript__"+s}else{k(!1)}};d.prototype.I=function(l,k){var q=aM(this.d),n=(this.f.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return q+"//"+n+"/"+l+".js"+(k?"?v="+k:"")};d.prototype.load=function(k){k(this.o)};function c(l,k){this.d=l;this.f=k}c.prototype.load=function(w){var v,u,t=this.f.urls||[],s=this.f.families||[],q=this.f.testStrings||{};v=0;for(u=t.length;v<u;v++){aL(this.d,t[v])}t=[];v=0;for(u=s.length;v<u;v++){var n=s[v].split(":");if(n[1]){for(var l=n[1].split(","),k=0;k<l.length;k+=1){t.push(new ak(n[0],l[k]))}}else{t.push(new ak(n[0]))}}w(t,q)};c.prototype.L=function(l,k){return k(l.m.R)};var aF=new m(aZ);aF.v.A.custom=function(l,k){return new c(k,l)};aF.v.A.fontdeck=function(l,k){return new g(k,l)};aF.v.A.monotype=function(l,k){return new d(k,l)};aF.v.A.typekit=function(l,k){return new f(k,l)};aF.v.A.google=function(l,k){return new i(k,l)};aZ.WebFont||(aZ.WebFont={},aZ.WebFont.load=aX(aF.load,aF),aZ.WebFontConfig&&aF.load(aZ.WebFontConfig))})(this,document);