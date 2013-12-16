/*! culturalMe v1.0.0 - 2013-12-16 
 *  License:  */
(function (name, definition, context) {if (typeof context['module'] !== 'undefined' && context['module']['exports']) {context['module']['exports'] = definition.apply(context);}else if (typeof context['define'] !== 'undefined' && context['define'] === 'function' && context['define']['amd']) {define(name, [], definition);}else {context[name] = definition();}})('ydn', function () {var l,q=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function r(a){return void 0!==a}function w(a){return"array"==aa(a)}function x(a){var b=aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}function y(a){return"string"==typeof a}function ba(a){return"boolean"==typeof a}function C(a){return"number"==typeof a}function ca(a){return"function"==aa(a)}function D(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var da="closure_uid_"+(1E9*Math.random()>>>0),ea=0;
function fa(a,b,c){return a.call.apply(a.bind,arguments)}function ga(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function E(a,b,c){E=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?fa:ga;return E.apply(null,arguments)}
function ha(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=Array.prototype.slice.call(arguments);b.unshift.apply(b,c);return a.apply(this,b)}}var ia=Date.now||function(){return+new Date};function ka(a,b){var c=a.split("."),d=q;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b}function F(a,b){function c(){}c.prototype=b.prototype;a.s=b.prototype;a.prototype=new c};function la(a){for(var b=0;1>b;b++)if('"'==a.charAt(0)&&'"'==a.charAt(a.length-1))return a.substring(1,a.length-1);return a}var ma={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\"},na={"'":"\\'"};
function oa(a){a=String(a);if(a.quote)return a.quote();for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),e=d.charCodeAt(0),f=b,g=c+1,h;if(!(h=ma[d])){if(!(31<e&&127>e))if(d in na)d=na[d];else if(d in ma)d=na[d]=ma[d];else{e=d;h=d.charCodeAt(0);if(31<h&&127>h)e=d;else{if(256>h){if(e="\\x",16>h||256<h)e+="0"}else e="\\u",4096>h&&(e+="0");e+=h.toString(16).toUpperCase()}d=na[d]=e}h=d}f[g]=h}b.push('"');return b.join("")};var pa=Array.prototype,qa=pa.indexOf?function(a,b,c){return pa.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(y(a))return y(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},ra=pa.map?function(a,b,c){return pa.map.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=Array(d),f=y(a)?a.split(""):a,g=0;g<d;g++)g in f&&(e[g]=b.call(c,f[g],g,a));return e},sa=pa.some?function(a,b,c){return pa.some.call(a,b,c)}:function(a,b,c){for(var d=
a.length,e=y(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function ta(a,b){var c=ua(a,b,void 0);return 0>c?null:y(a)?a.charAt(c):a[c]}function ua(a,b,c){for(var d=a.length,e=y(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return f;return-1}function va(a){if(!w(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0}function wa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function xa(a,b){if(!x(a)||!x(b)||a.length!=b.length)return!1;for(var c=a.length,d=ya,e=0;e<c;e++)if(!d(a[e],b[e]))return!1;return!0}function ya(a,b){return a===b};function za(a){return function(){throw a;}};/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function G(a,b){this.e=[];this.m=b||null}l=G.prototype;l.ea=!1;l.W=!1;l.ia=!1;l.bb=!1;l.hb=!1;l.Ja=0;l.sa=function(a,b){this.ia=!1;Aa(this,a,b)};function Aa(a,b,c){a.ea=!0;a.d=c;a.W=!b;a.Oa()}function Ba(a){if(a.ea){if(!a.hb)throw new Ca;a.hb=!1}}l.k=function(a){Ba(this);Aa(this,!0,a)};l.j=function(a){Ba(this);Aa(this,!1,a)};l.G=function(a,b){return H(this,a,null,b)};l.ab=function(a,b){return H(this,null,a,b)};l.qa=function(a,b){return H(this,a,a,b)};
function H(a,b,c,d){a.e.push([b,c,d]);a.ea&&a.Oa();return a}l.rb=function(a){var b=new G;H(this,b.k,b.j,b);a&&(b.c=this,this.Ja++);return b};function Da(a){return sa(a.e,function(a){return ca(a[1])})}
l.Oa=function(){this.f&&this.ea&&Da(this)&&(q.clearTimeout(this.f),delete this.f);this.c&&(this.c.Ja--,delete this.c);for(var a=this.d,b=!1,c=!1;this.e.length&&!this.ia;){var d=this.e.shift(),e=d[0],f=d[1],d=d[2];if(e=this.W?f:e)try{var g=e.call(d||this.m,a);r(g)&&(this.W=this.W&&(g==a||g instanceof Error),this.d=a=g);a instanceof G&&(this.ia=c=!0)}catch(h){a=h,this.W=!0,Da(this)||(b=!0)}}this.d=a;c&&(H(a,E(this.sa,this,!0),E(this.sa,this,!1)),a.bb=!0);b&&(this.f=q.setTimeout(za(a),0))};
function Ea(a){var b=new G;b.k(a);return b}function Fa(a){Error.captureStackTrace?Error.captureStackTrace(this,Fa):this.stack=Error().stack||"";a&&(this.message=String(a))}F(Fa,Error);function Ca(){Fa.call(this)}F(Ca,Fa);Ca.prototype.message="Deferred has already fired";Ca.prototype.name="AlreadyCalledError";function Ga(a,b){G.call(this,0,b);this.b=[]}F(Ga,G);Ga.prototype.t=function(a,b){this.b.push([a,b]);return this};Ga.prototype.k=function(a){this.b.length=0;Ga.s.k.call(this,a)};Ga.prototype.j=function(a){this.b.length=0;Ga.s.j.call(this,a)};Ga.prototype.B=function(a,b,c){if(c&&ca(c))throw null;var d=a;ca(a)&&(d=function(b){b=a.call(c,b);if(D(b)&&ca(b.then)){var d=new G;b.then.call(c,function(a){d.k(a)},function(a){d.j(a)});return d}return b});return H(this,d,b,c)};var Ha={READ_ONLY:"readonly",READ_WRITE:"readwrite",VERSION_CHANGE:"versionchange"},Ia=q.IDBRequest&&"LOADING"in q.IDBRequest?q.IDBTransaction:q.webkitIDBRequest&&"LOADING"in q.webkitIDBRequest&&1===q.webkitIDBTransaction.READ_WRITE?q.webkitIDBTransaction:Ha,I=Ia.READ_ONLY,J=Ia.READ_WRITE,Ja=Ia.VERSION_CHANGE,Ka=q.indexedDB||q.mozIndexedDB||q.webkitIndexedDB||q.moz_indexedDB||q.msIndexedDB;G.prototype.done=G.prototype.G;G.prototype.fail=G.prototype.ab;G.prototype.always=G.prototype.qa;Ga.prototype.then=Ga.prototype.B;function La(a,b){var c,d;2==arguments.length&&y(arguments[1])?(c=!0,d=arguments[1].split(".")):d=(c=x(b))?b:arguments;for(c=c?0:1;c<d.length&&(a=a[d[c]],r(a));c++);return a}function Ma(a,b,c){if(a)if(-1==b.indexOf("."))a[b]=c;else{b=b.split(".");for(var d=b.pop(),e;e=b.shift();)D(a[e])||(a[e]={}),a=a[e];a[d]=c}}var Na={};
function Oa(a){var b=[a];a=new Pa;for(var c=0,d,e;void 0!==(e=b.pop());){0===c%4&&12<c+4&&(a.write(c),c=0);d=typeof e;if(e instanceof Array)if(c+=4,0<e.length){b.push(Na);for(d=e.length;d--;)b.push(e[d]);continue}else a.write(c);else if("number"===d)c+=1,a.write(c),Qa(a,e);else if(e instanceof Date)c+=2,a.write(c),Qa(a,e.valueOf());else if("string"===d){c+=3;a.write(c);c=a;for(d=0;d<e.length;d++){var f=e.charCodeAt(d);126>=f?c.write(f+1):16510>=f?(f-=127,c.write(128|f>>8,f&255)):c.write(192|f>>10,
f>>2|255,(f|3)<<6)}c.write(0)}else if(e===Na)a.write(0);else return"";c=0}for(b=a.a.length;"00"===a.a[--b];);a.a.length=++b;return a.toString()}function Ra(a){for(var b=[],c=b,d=[],e,f,g=new Sa(a);null!=Ta(g);)if(0===g.a)c=d.pop();else{if(null===g.a)break;do{e=g.a/4|0;a=g.a%4;for(var h=0;h<e;h++)f=[],c.push(f),d.push(c),c=f;if(0===a&&12<g.a+4)Ta(g);else break}while(1);1===a?c.push(Ua(g)):2===a?c.push(new Date(Ua(g))):3===a?c.push(Va(g)):0===a&&(c=d.pop())}return b[0]}
function Qa(a,b){var c,d,e;c=b;var f=e=d=0;if(0!==c)if(isFinite(c)){0>c&&(d=1,c=-c);f=0;if(2.2250738585072014E-308<=c){for(e=c;1>e;)f--,e*=2;for(;2<=e;)f++,e/=2;e=f+1023}f=e?Math.floor(4503599627370496*(c/Math.pow(2,f)-1)):Math.floor(c/4.9E-324)}else e=2047,isNaN(c)?f=0x8000000000000:-Infinity===c&&(d=1);c=d;d=e;e=f;c&&(e=0xfffffffffffff-e,d=2047-d);a.write((c?0:128)|d>>4);a.write((d&15)<<4|0|e/281474976710656);e%=281474976710656;c=0|e/4294967296;a.write(c>>8,c&255);e%=4294967296;c=0|e/65536;a.write(c>>
8,c&255);c=e%65536;a.write(c>>8,c&255)}function Ua(a){var b=Ta(a)|0,c=b>>7?!1:!0,d=c?-1:1,e=(b&127)<<4,b=Ta(a)|0,e=e+(b>>4);c&&(e=2047-e);for(var b=[c?15-(b&15):b&15],f=6;f--;)b.push(c?255-(Ta(a)|0):Ta(a)|0);a=0;for(f=7;f--;)a=a/256+b[f];a/=16;return 0===a&&0===e?0:(a+1)*Math.pow(2,e-1023)*d}
function Va(a){for(var b=[],c=0,d=0,e=0,f,g;;){f=Ta(a);if(0===f||null==f)break;0===c?(g=f>>6,2>g&&!isNaN(f)?b.push(String.fromCharCode(f-1)):(c=g,d=f<<10,e++)):2===c?(b.push(String.fromCharCode(d+f+127)),c=d=e=0):2===e?(d+=f<<2,e++):(b.push(String.fromCharCode(d|f>>6)),c=d=e=0)}return b.join("")}function Sa(a){this.a=null;this.b=a;this.c=this.b.length-1;this.index=-1}function Ta(a){return a.a=a.index<a.c?parseInt(a.b[++a.index]+a.b[++a.index],16):null}function Pa(){this.a=[];this.b=void 0}
Pa.prototype.write=function(a){for(var b=0;b<arguments.length;b++)this.b=arguments[b].toString(16),this.a.push(2===this.b.length?this.b:this.b="0"+this.b)};Pa.prototype.toString=function(){return this.a.length?this.a.join(""):""};function Wa(a,b){var c=Oa(a),d=Oa(b);return c>d?1:c==d?0:-1};var L=Ka&&Ka.cmp?E(Ka.cmp,Ka):Wa,Xa=[];function Ya(){0!=Za&&(this[da]||(this[da]=++ea))}var Za=0;function $a(a,b){this.type=a;this.target=b}$a.prototype.preventDefault=function(){};function ab(a,b){$a.call(this,a,b)}F(ab,$a);ab.prototype.g=function(){return this.K};function bb(a,b,c,d,e){$a.call(this,a,b);this.version=c;this.jb=d;this.fb=e}F(bb,ab);l=bb.prototype;l.name="ReadyEvent";l.version=NaN;l.jb=NaN;l.fb=null;l.Cb=function(){return this.version};l.qb=function(){return this.jb};l.pb=function(){return this.fb};function cb(a,b,c){$a.call(this,c||"error",a);this.error=b}F(cb,ab);cb.prototype.toString=function(){return this.name+":"+(this.error?this.error:"")};
cb.prototype.name="ErrorEvent";cb.prototype.error=null;cb.prototype.a=function(){return this.error};function db(a,b){cb.call(this,a,b,"fail")}F(db,cb);db.prototype.name="FailEvent";function eb(a,b,c){var d;if(D(a))d=a.store,b=a.id,null!=a.parent&&(c=new eb(a.parent));else if(r(b))d=a;else if(d=a.lastIndexOf("^|"),b=a,0<d&&(b=a.substr(d),c=new eb(a.substring(0,d))),b=b.split("^:"),d=b[0],b=b[1],!r(b))throw Error("Invalid key value: "+a);this.K=d;this.a=b;this.parent=c||null}l=eb.prototype;l.toJSON=function(){var a={store:this.K,id:this.a};this.parent&&(a.parent=this.parent.toJSON());return a};
l.valueOf=function(){return(this.parent?this.parent.valueOf()+"^|":"")+this.K+"^:"+this.a};l.toString=function(){return this.valueOf().replace("^|","|").replace("^:",":")};l.g=function(){return this.K};l.nb=function(){return this.a};l.wb=function(){return this.parent};function fb(a){if(x(a)){for(var b=[],c=0,d=a.length;c<d;c++)b[c]=a[c];return b}return a};function M(a,b,c,d){this.lower=a;this.upper=b;this.lowerOpen=!!c;this.upperOpen=!!d}M.prototype.lower=void 0;M.prototype.upper=void 0;M.prototype.toJSON=function(){var a;a=this||{};return{lower:a.lower,upper:a.upper,lowerOpen:a.lowerOpen,upperOpen:a.upperOpen}};function gb(a){return hb(a)}M.only=function(a){return new M(a,a,!1,!1)};M.bound=function(a,b,c,d){return new M(a,b,c,d)};M.upperBound=function(a,b){return new M(void 0,a,void 0,!!b)};M.lowerBound=function(a,b){return new M(a,void 0,!!b,void 0)};
function ib(a){var b;if(w(a))b=wa(a),b.push("\uffff");else if(y(a))b=a+"\uffff";else return M.only(a);return M.bound(a,b,!1,!0)}function hb(a){return null!=a?null!=a.upper&&null!=a.lower?jb.bound(a.lower,a.upper,!!a.lowerOpen,!!a.upperOpen):null!=a.upper?jb.upperBound(a.upper,a.upperOpen):null!=a.lower?jb.lowerBound(a.lower,a.lowerOpen):null:null}
function ob(a,b,c,d,e){if(c)if(c.lowerOpen||c.upperOpen||null==c.lower||null==c.upper||0!==L(c.lower,c.upper)){if(null!=c.lower){var f=c.lowerOpen?" > ":" >= ";d.push(a+f+"?");e.push(pb(c.lower,b))}null!=c.upper&&(f=c.upperOpen?" < ":" <= ",d.push(a+f+"?"),e.push(pb(c.upper,b)))}else d.push(a+" = ?"),e.push(pb(c.lower,b))}
function qb(a,b,c,d){var e,f,g,h;if("starts"==a||"^"==a)return ib(b);if("<"==a||"<="==a)e=b,g="<"==a;else if(">"==a||">="==a)f=b,h=">"==a;else if("="==a||"=="==a)e=f=b;else throw null;if("<"==c||"<="==c)e=d,g="<"==c;else if(">"==c||">="==c)f=d,h=">"==c;else if(r(c))throw null;return M.bound(f,e,h,g)}var jb=q.IDBKeyRange||q.webkitIDBKeyRange||M;function rb(a,b){for(var c=x(b),d=c?b:arguments,c=c?0:1;c<d.length&&(a=a[d[c]],r(a));c++);return a};var sb,tb,ub,vb;function wb(){return q.navigator?q.navigator.userAgent:null}vb=ub=tb=sb=!1;var xb;if(xb=wb()){var yb=q.navigator;sb=0==xb.indexOf("Opera");tb=!sb&&-1!=xb.indexOf("MSIE");ub=!sb&&-1!=xb.indexOf("WebKit");vb=!sb&&!ub&&"Gecko"==yb.product}var zb=tb,Ab=vb,Bb=ub;var Cb;if(sb&&q.opera){var Db=q.opera.version;"function"==typeof Db&&Db()}else Ab?Cb=/rv\:([^\);]+)(\)|;)/:zb?Cb=/MSIE\s+([^\);]+)(\)|;)/:Bb&&(Cb=/WebKit\/(\S+)/),Cb&&Cb.exec(wb());function N(a,b,c){Ga.call(this,0,c);this.l=a;this.b=[];this.i=[];this.r=[];this.a=null;this.L="";this.p=0}F(N,Ga);l=N.prototype;l.L="";function Eb(a,b,c){a.a=b;a.L=c;if(b){for(c=0;c<a.i.length;c++)a.i[c][0].call(a.i[c][1],b);a.i.length=0}}function Fb(a){var b=new N(a.l);a.p++;Eb(b,a.a,a.L+"C"+a.p);return b}l.mb=function(){return!!this.a};
l.abort=function(){if(this.a)if(ca(this.a.abort))this.a.abort();else if(ca(this.a.executeSql))this.a.executeSql("ABORT",[],function(){},function(){return!0});else throw null;else throw new Gb("");};function O(a,b,c){var d=a.r.shift();c=!!c;d?d[0].call(d[1],b,c,function(b,c){O(a,b,c)}):c?a.j(b):a.k(b)}function Hb(a,b,c){a.r.push([b,c])}function P(a,b,c){a.a?b.call(c,a.a):a.i.push([b,c])}l.k=function(a){N.s.k.call(this,a);this.a=null;this.L=this.L};
l.j=function(a){N.s.j.call(this,a);this.a=null;this.L=this.L};function Ib(a){var b="";a.L&&(b=a.a?"*":"",b="["+a.L+b+"]");return a.l+b}function Jb(a,b){var c=new N(a);O(c,b);return c}l.Ab=function(){return this};l.toString=function(){return"Request:"+Ib(this)};
l.Oa=function(){this.f&&this.ea&&Da(this)&&(q.clearTimeout(this.f),delete this.f);this.c&&(this.c.Ja--,delete this.c);for(var a=this.d,b=!1;this.e.length&&!this.ia;){var c=this.e.shift(),d=c[0],e=c[1],c=c[2];if(d=this.W?e:d)d=d.call(c||this.m,a),r(d)&&(this.W=this.W&&(d==a||d instanceof Error),this.d=a=d),a instanceof G&&(this.ia=b=!0)}this.d=a;b&&(H(a,E(this.sa,this,!0),E(this.sa,this,!1)),a.bb=!0)};
l.toJSON=function(){var a=(this.L||"").match(/B(\d+)T(\d+)(?:Q(\d+?))?(?:R(\d+))?/)||[];return{method:this.l?this.l.split(":"):[],branchNo:parseFloat(a[1]),transactionNo:parseFloat(a[2]),queueNo:parseFloat(a[3]),requestNo:parseFloat(a[4])}};function Kb(a,b,c,d,e,f){r(e)||(e=w(a)?a.join(", "):a);if(null!=a&&!y(a)&&!x(a))throw null;!r(a)&&r(e)&&(a=e);this.keyPath=a;this.f=x(this.keyPath);this.b=e;this.type=Lb(b);if(r(b)){if(!r(this.type))throw null;if(w(this.keyPath))throw null;}this.unique=!!c;this.multiEntry=!!d;this.i=y(this.type)?this.type:Mb;this.d=y(e)?e:w(a)?this.keyPath.join(","):a;this.c=oa(this.d);this.a=this.f||this.multiEntry?null:this.keyPath.split(".");this.e=f||null}
function Nb(a,b){if(null!=b){if(x(a.keyPath)){for(var c=[],d=0,e=a.keyPath.length;d<e;d++){var f=La(b,a.keyPath[d]);c[d]=f}return c}return La(b,a.keyPath)}}function Ob(a,b,c){for(var d=0;d<a.a.length;d++)d==a.a.length-1?b[a.a[d]]=c:D(b[a.a[d]])||(b[a.a[d]]={})}var Mb="TEXT";function pb(a,b){if("DATE"==b){if(a instanceof Date)return+a}else return null!=b?a:Oa(a)}function Pb(a,b){return"DATE"==b?new Date(a):r(b)?a:Ra(a)}var Qb=["BLOB","DATE","INTEGER","NUMERIC",Mb];
function Lb(a){if(y(a))return a=qa(Qb,a),Qb[a]}Kb.prototype.getName=function(){return this.b};Kb.prototype.toJSON=function(){return{name:this.b,keyPath:this.keyPath,type:this.type,unique:this.unique,multiEntry:this.multiEntry}};Kb.prototype.clone=function(){var a=w(this.keyPath)?wa(this.keyPath):this.keyPath;return new Kb(a,this.type,this.unique,this.multiEntry,this.b,this.e)};
function Rb(a,b){return null!=a||null!=b?null!=a?null!=b?x(a)&&x(b)?xa(a,b)?null:"expect: "+a+", but: "+b:Sb(a,b)?null:"expect: "+a+", but: "+b:"keyPath: "+a+" no longer defined":"newly define "+b:null}Kb.prototype.hint=function(a){if(!a)return this;var b=w(this.keyPath)?wa(this.keyPath):this.keyPath,c=this.type;r(a.type)||"TEXT"!=c||(c=void 0);return new Kb(b,c,this.unique,this.multiEntry,a.b)};function Tb(a,b,c,d,e,f,g,h){this.d=a;if(!y(this.d))throw null;this.keyPath=r(b)?b:null;this.i=x(this.keyPath);if(null!==this.keyPath&&!y(this.keyPath)&&!this.i)throw null;this.b=c;var k;if(null!=d){k=Lb(d);if(!r(k))throw null;if(this.i)throw null;}this.type=null!=k?k:this.b?"INTEGER":void 0;this.f=y(this.keyPath)?this.keyPath.split("."):[];this.a=e||[];this.aa=!!f;this.da=!!g;this.m=y(this.type)?this.type:Mb;this.e=w(this.keyPath)?this.keyPath.join(","):y(this.keyPath)?this.keyPath:"_ROWID_";this.c=
oa(this.e);this.p=!!h;this.l=[]}l=Tb.prototype;l.aa=!1;l.da=!1;l.toJSON=function(){for(var a=[],b=0;b<this.a.length;b++)a.push(this.a[b].toJSON());return{name:this.d,keyPath:this.keyPath,autoIncrement:this.b,type:this.type,indexes:a}};
function Ub(a){var b=[],c=a.indexes||[];if(w(c))for(var d=0;d<c.length;d++){var e=new Kb(c[d].keyPath,c[d].type,c[d].unique,c[d].multiEntry,c[d].name,c[d].generator);r(e.keyPath)&&e.keyPath===a.keyPath||b.push(e)}return new Tb(a.name,a.keyPath,a.autoIncrement,"undefined"===a.type||"null"===a.type?void 0:a.type,b,a.dispatchEvents,a.fixed,a.encrypted)}
function Vb(a,b,c,d,e,f,g){a=Wb(a,b,c,d,e,f,g);b="";0!=c&&(b+="SELECT "+a.select);b+=" FROM "+a.H;a.o&&(b+=" WHERE "+a.o);a.group&&(b+=" GROUP BY "+a.group);a.J&&(b+=" ORDER BY "+a.J);return b}
function Wb(a,b,c,d,e,f,g){var h={select:"",H:"",o:"",group:"",J:""},k=a.e,m=a.c,p=null;d!==k&&y(d)&&(p=Xb(a,d));var n=!!p,s=d||k,t=oa(s),u=n?p.type:a.type,v=n&&p.multiEntry;h.H=Q(a);6===c?h.select="COUNT("+m+")":3===c||1===c||2===c?(h.select=m,null!=d&&d!=k&&(h.select+=", "+t)):h.select="*";d=g?"DISTINCT ":"";k=[];v?(v=oa("ydn.db.me:"+a.getName()+":"+p.getName()),h.select=6===c?"COUNT("+d+v+"."+t+")":3===c||1===c||2===c?"DISTINCT "+Q(a)+"."+m+", "+v+"."+t+" AS "+s:"DISTINCT "+Q(a)+".*, "+v+"."+t+
" AS "+s,h.H=v+" INNER JOIN "+Q(a)+" USING ("+m+")",null!=e&&(ob(v+"."+t,u,e,k,b),0<k.length&&(h.o=h.o?h.o+(" AND "+k.join(" AND ")):k.join(" AND ")))):null!=e&&(ob(t,u,e,k,b),0<k.length&&(h.o=h.o?h.o+(" AND "+k.join(" AND ")):k.join(" AND ")));n&&!p.unique&&g&&(h.group=t);a=f?"DESC":"ASC";h.J=t+" "+a;n&&(h.J+=", "+m+" "+a);return h}
function Yb(a,b,c,d,e,f,g,h,k){var m,p,n,s;null!=e?(m=e.lower,p=e.upper,n=e.lowerOpen,s=e.upperOpen,f?null!=p?(e=L(h,p),-1==e?(p=h,s=k):0==e&&(s=k||s)):(p=h,s=k):null!=m?(e=L(h,m),1==e?(m=h,n=k):0==e&&(n=k||n)):(m=h,n=k)):f?(p=h,s=k):(m=h,n=k);e=new M(m,p,!!n,!!s);d=d?Xb(a,d):null;b=Wb(a,c,b,d?d.d:a.e,e,f,g);b="SELECT "+b.select+" FROM "+b.H+(b.o?" WHERE "+b.o:"")+(b.group?" GROUP BY "+b.group:"")+" ORDER BY "+b.J;d&&(b+=", "+a.c+(f?"DESC":"ASC"));return b}
function Zb(a,b,c,d,e,f,g,h,k,m){var p=Xb(a,d),n=p.d;d=p.c;var s=a.c,t=k?" <":" >",t=g?t+" ":t+"= ";g=pb(f,p.type);h=pb(h,a.type);p="";e?(a=Wb(a,c,b,n,e,k,m),a.o+=" AND ",p=d+t+"?",c.push(g)):(e=k?M.upperBound(f,!0):M.lowerBound(f,!0),a=Wb(a,c,b,n,e,k,m),p=a.o,a.o="");a.o+="("+p+" OR ("+d+" = ? AND "+s+t+"?))";c.push(g);c.push(h);return"SELECT "+a.select+" FROM "+a.H+" WHERE "+a.o+(a.group?" GROUP BY "+a.group:"")+" ORDER BY "+a.J}l.clone=function(){return Ub(this.toJSON())};
l.index=function(a){return this.a[a]||null};function Xb(a,b){return ta(a.a,function(a){return a.getName()==b})}function $b(a,b){return b===a.keyPath?!0:sa(a.a,function(a){return a.getName()==b})}function Q(a){return oa(a.d)}
function ac(a,b){if(!b)return a;var c=a.b,d=w(a.keyPath)?wa(a.keyPath):a.keyPath,e=a.type,f=ra(a.a,function(a){return a.clone()});r(b.type)||"TEXT"!=e||(e=void 0);w(b.keyPath)&&y(d)&&d==b.keyPath.join(",")&&(d=wa(b.keyPath));for(var g=0,h=b.a.length;g<h;g++)if(b.a[g].f)for(var k=b.a[g].getName(),m=f.length-1;0<=m;m--)if(0<=k.indexOf(f[m].getName())){f[m]=b.a[g].clone();break}for(g=0;g<f.length;g++)(h=Xb(b,f[g].getName()))&&(f[g]=f[g].hint(h));return new Tb(b.d,d,c,e,f)}l.getName=function(){return this.d};
function bc(a){return!!a.keyPath}function cc(a,b,c){if(b){if(!a.keyPath&&null!=c)return c;if(a.i){c=[];for(var d=0;d<a.keyPath.length;d++)c.push(La(b,a.keyPath[d]));return c}if(a.keyPath)return rb(b,a.f)}}function ec(a,b,c){for(var d=0;d<a.f.length;d++){var e=a.f[d];if(d==a.f.length-1){b[e]=c;break}r(b[e])||(b[e]={});b=b[e]}}
function fc(a,b,c){var d=[],e=[];c=r(c)?c:cc(a,b);r(c)&&(e.push(a.c),d.push(pb(c,a.type)));for(var f=0;f<a.a.length;f++){var g=a.a[f];if(!g.multiEntry&&g.getName()!==a.keyPath&&"_default_"!=g.getName()){var h=Nb(g,b);null!=h&&(d.push(pb(h,g.type)),e.push(g.c))}}a.da?a.da&&!a.keyPath&&0==a.a.length&&(y(b)&&-1==b.indexOf(";base64,")?d.push(b):d.push(gc(b)),e.push("_default_")):(d.push(gc(b)),e.push("_default_"));a=[];for(f=d.length-1;0<=f;f--)a[f]="?";return{cb:e,ib:a,D:d,key:c}}
function hc(a,b){if(!b)return"missing store: "+a.d;if(a.d!=b.d)return"store name, expect: "+a.d+", but: "+b.d;var c=Rb(a.keyPath,b.keyPath);if(c)return"keyPath, "+c;if(r(a.b)&&r(b.b)&&a.b!=b.b)return"autoIncrement, expect:  "+a.b+", but: "+b.b;if(a.a.length!=b.a.length)return"indexes length, expect:  "+a.a.length+", but: "+b.a.length;if(r(a.type)&&r(b.type)&&(x(a.type)?!xa(a.type,b.type):a.type!=b.type))return"data type, expect:  "+a.type+", but: "+b.type;for(c=0;c<a.a.length;c++){var d=Xb(b,a.a[c].getName()),
e;e=a.a[c];if(d)if(e.b!=d.b)e="name, expect: "+e.b+", but: "+d.b;else{var f=Rb(e.keyPath,d.keyPath);e=f?"keyPath, "+f:null!=e.unique&&null!=d.unique&&e.unique!=d.unique?"unique, expect: "+e.unique+", but: "+d.unique:null!=e.multiEntry&&null!=d.multiEntry&&e.multiEntry!=d.multiEntry?"multiEntry, expect: "+e.multiEntry+", but: "+d.multiEntry:r(e.type)&&r(d.type)&&(x(e.type)?!xa(e.type,d.type):e.type!=d.type)?"data type, expect: "+e.type+", but: "+d.type:""}else e="no index for "+e.b;if(0<e.length)return'index "'+
a.a[c].getName()+'" '+e}return""}function ic(a,b){if(b)for(var c=0;c<a.a.length;c++){var d=a.a[c],e=b;if(d.e){var f=d.e(e),g=typeof f;if("string"==g||"number"==g||"array"==g||"undefined"==g||f instanceof Date){for(g=0;g<d.a.length-1;g++)D(e[d.a[g]])||(e[d.a[g]]={});e[d.a[d.a.length-1]]=f}}}}function jc(a,b,c){for(var d=0;d<a.l.length;d++)if(void 0!==d)a.l[d](b,c)};function kc(a){return eval("("+a+")")}function lc(){}
function mc(a,b,c){switch(typeof b){case "string":nc(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(w(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),mc(a,b[f],c),e=",";c.push("]");break}c.push("{");d="";for(e in b)Object.prototype.hasOwnProperty.call(b,e)&&(f=b[e],"function"!=typeof f&&(c.push(d),nc(e,c),c.push(":"),mc(a,f,c),d=","));c.push("}");
break;case "function":break;default:throw Error("Unknown type: "+typeof b);}}var oc={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pc=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;function nc(a,b){b.push('"',a.replace(pc,function(a){if(a in oc)return oc[a];var b=a.charCodeAt(0),e="\\u";16>b?e+="000":256>b?e+="00":4096>b&&(e+="0");return oc[a]=e+b.toString(16)}),'"')};function qc(a){return!y(a)||/^[\s\xa0]*$/.test(a)?{}:"undefined"==typeof q.JSON?kc(a):JSON.parse(a)}function gc(a){if("undefined"==typeof q.JSON){var b=[];mc(new lc,a,b);a=b.join("")}else a=JSON.stringify(a,void 0,void 0);return a};function rc(a){this.K=a}rc.prototype.g=function(){return this.K};function sc(a,b){this.name=a;this.a=b}sc.prototype.getName=function(){return this.name};sc.prototype.count=function(){return this.a.length};sc.prototype.index=function(a){return this.a[a]};function tc(a){if(!w(a.sources))throw null;var b=a.sources.map(function(a){return new rc(a.storeName)});return new sc(a.name,b)};function uc(a,b){var c,d,e=b;if(D(a)){d=a;c=d.version;for(var e=[],f=d.stores||[],g=0;g<f.length;g++){var h=Ub(f[g]);e.push(h)}}else y(a)?c=0==a.length?void 0:parseFloat(a):C(a)&&(c=a);if(r(c)){if(!C(c)||0>c)throw null;isNaN(c)&&(c=void 0)}if(r(b)&&(!w(b)||0<b.length&&!(b[0]instanceof Tb)))throw null;this.version=c;this.Aa=!r(this.version);this.stores=e||[];c=[];if(d&&d.fullTextCatalogs)for(g=0;g<d.fullTextCatalogs.length;g++)e=tc(d.fullTextCatalogs[g]),c[g]=e,R(this,e.getName())||(f=[new Kb("k",
Mb),new Kb("v",Mb)],e=new Tb(e.getName(),"id",!1,void 0,f),this.stores.push(e));this.a=c}l=uc.prototype;l.toJSON=function(){var a=ra(this.stores,function(a){return a.toJSON()}),b={};b.stores=a;r(this.version)&&(b.version=this.version);return b};l.Aa=!1;l.O=function(){return!1};function vc(a){return ra(a.stores,function(a){return a.getName()})}l.V=function(a){return this.stores[a]||null};l.count=function(){return this.stores.length};
function R(a,b){return ta(a.stores,function(a){return a.getName()==b})}function wc(a,b){return sa(a.stores,function(a){return a.getName()==b})}
function xc(a,b,c,d){if(!b||a.stores.length!=b.stores.length)return"Number of store: "+a.stores.length+" vs "+b.stores.length;for(var e=0;e<a.stores.length;e++){var f=R(b,a.stores[e].getName());if(f){c&&(f=ac(f,a.stores[e]));if(d)for(var g=f,h=a.stores[e],k=0;k<h.a.length;k++){var m=h.a[k];$b(g,m.getName())||"BLOB"!=m.type||(m=new Kb(m.keyPath,m.type,m.unique,m.multiEntry,m.getName()),g.a.push(m))}f=hc(a.stores[e],f);if(0<f.length)return'store: "'+a.stores[e].getName()+'" '+f}else return'missing object store "'+
a.stores[e].getName()+'"'}return""};function yc(a,b){uc.call(this,a,b)}F(yc,uc);yc.prototype.O=function(){return!0};function zc(a,b){a.stores.push(b)};function Ac(a){Error.captureStackTrace?Error.captureStackTrace(this,Ac):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.InternalError"}F(Ac,Error);Ac.prototype.name="ydn.InternalError";function Bc(a){Error.captureStackTrace?Error.captureStackTrace(this,Bc):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.ConstraintError"}F(Bc,Error);Bc.prototype.name="ydn.error.ConstraintError";
function Cc(a){Error.captureStackTrace?Error.captureStackTrace(this,Cc):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.InvalidOperationException"}function Dc(a){Error.captureStackTrace?Error.captureStackTrace(this,Dc):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.error.InvalidOperationError"}F(Dc,Error);function Sb(a,b){var c;c=c||{};if(null!=a&&null!=b){if(x(a)&&x(b)){if(a.length!=b.length)return!1;for(var d=0;d<a.length;d++)if(-1==ta(b,function(b){return Sb(b,a[d])}))return!1;return!0}if(x(a))return 1==a.length&&Sb(a[0],b);if(x(b))return 1==b.length&&Sb(b[0],a);if(D(a)&&D(a)){for(var e in a)if(a.hasOwnProperty(e)&&!c[e]){var f=Sb(a[e],b[e]);if(!f)return!1}for(e in b)if(b.hasOwnProperty(e)&&!c[e]&&(f=Sb(a[e],b[e]),!f))return!1;return!0}return a===b}return!1};/*
 Copyright 2012 YDN Authors, Yathit. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");.
*/
function S(a,b,c){c=c||{};this.p=c.mechanisms||Ec;this.t=c.size;this.m=r(c.connectionTimeout)?c.connectionTimeout:18E5;this.b=null;this.d=[];this.za=!1;var d;if(b instanceof uc)d=b;else if(D(b)){d=c.autoSchema||!r(b.stores)?new yc(b):new uc(b);var e=b.stores?b.stores.length:0;for(c=0;c<e;c++)R(d,b.stores[c].name)}else d=new yc;this.a=d;for(c=0;c<this.a.count();c++)this.a.V(c).p&&this.a.V(c);r(a)&&this.i(a);this.f=new G}
S.prototype.r=function(a){if(r(a)){var b=function(b){a(b.toJSON())};if(this.b)this.b.F(b);else{var c=this;this.na(function(a){c.b.F(b,a)},null,I)}}return this.a?this.a.toJSON():null};S.prototype.i=function(a){if(this.b)throw null;this.l=a;Fc(this)};S.prototype.getName=function(){return this.l};var Ec="indexeddb websql localstorage sessionstorage userdata memory".split(" ");l=S.prototype;l.Na=function(){return null};
function Fc(a){function b(b,e){b?(a.eb=NaN,d.Ya=function(){},d.Ha=function(){a.b=null},d.Sa=function(){},setTimeout(function(){Gc(a,e);Hc(a)},10),c.k(e)):(setTimeout(function(){Gc(a,new db(a,e));if(a.d)for(var b;b=a.d.shift();)b.A&&b.A("error",e)},10),c.j(e))}for(var c=new G,d=null,e=a.p,f=0;f<e.length;f++){var g=e[f].toLowerCase();if(d=a.Na(g)){d=a.Na(g);break}}null===d?(e=new Bc("No storage mechanism found."),b(!1,new db(a,e))):H(d.ga(a.l,a.a),function(a){this.b=d;b(!0,new bb("ready",this,parseFloat(d.Xa()),
parseFloat(a),null))},function(a){b(!1,a)},a)}l.Za=function(){if(this.b)return this.b.ma()};l.Ba=function(a,b){this.f.qa(a,b)};function Gc(a,b){setTimeout(function(){b instanceof cb?a.f.j(b.error):a.f.k()},4)}function Ic(a){return!!a.b&&a.b.Ga()}l.Bb=function(){this.b&&(this.b.Fa(),this.b=null)};l.eb=NaN;function Hc(a){var b=a.d.shift();b&&a.na(b.wa,b.ub,b.mode,b.A);a.eb=ia()}l.za=!1;
l.na=function(a,b,c,d){var e=b;y(b)?e=[b]:null!=b||(e=null);if(this.b&&this.b.Ga()&&!this.za){var f=this,g=r(c)?c:I;g==Ja&&(this.za=!0);this.b.va(function(b){a(b);a=null},e,g,function(a,b){ca(d)&&(d(a,b),d=void 0);g==Ja&&(f.za=!1);Hc(f)})}else this.d.push({wa:a,ub:e,mode:c,A:d})};S.prototype.close=S.prototype.Bb;S.prototype.getType=S.prototype.Za;S.prototype.getName=S.prototype.getName;S.prototype.getSchema=S.prototype.r;S.prototype.onReady=S.prototype.Ba;S.prototype.setName=S.prototype.i;S.prototype.transaction=S.prototype.na;ka("ydn.db.version","0.8.12");ka("ydn.db.cmp",L);ka("ydn.db.deleteDatabase",function(a,b){for(var c,d=0;d<Xa.length;d++){var e=Xa[d](a,b);e&&(c=e)}return c||Jb("vc",null)});bb.prototype.name=bb.prototype.name;bb.prototype.getVersion=bb.prototype.Cb;
bb.prototype.getOldVersion=bb.prototype.qb;bb.prototype.getOldSchema=bb.prototype.pb;cb.prototype.getError=cb.prototype.a;N.prototype.abort=N.prototype.abort;N.prototype.canAbort=N.prototype.mb;N.prototype.progress=N.prototype.t;N.prototype.promise=N.prototype.Ab;function Jc(a,b,c,d){Ya.call(this);this.a=c;this.K=c.getName();this.Q=void 0;this.d=!1;this.n=null;this.i=a;this.t=this.p=!1;this.r=d||4;this.l=this.c=this.b=void 0;this.B=function(){throw null;};this.Y=function(){throw null;};this.ka=function(){}}F(Jc,Ya);l=Jc.prototype;
l.$a=function(a,b,c,d,e){if(r(b)){a=this.a;if(w(b))a:{for(var f=0;f<a.a.length;f++)if(!Rb(a.a[f].keyPath,b)){b=a.a[f];break a}b=null}else b=Xb(a,b);this.Q=b.getName()}this.d=y(this.Q);this.n=c||null;this.t=this.p=!1;this.reverse="prev"==d||"prevunique"==d;this.unique="nextunique"==d||"prevunique"==d;this.M=d;this.ja=e;this.l=this.c=this.b=void 0};l.M="";l.n=null;l.unique=!1;l.reverse=!1;l.ja=!0;function Kc(a,b){a.Y(b);Lc(a);a.p=!0}
l.I=function(a,b,c){null==a&&(this.p=!0);this.b=a;this.c=b;this.l=c;this.p?(this.B(),Lc(this)):this.B(this.b)};function Lc(a){null!=a.c?a.c=fb(a.c):a.c=void 0;null!=a.b?a.b=fb(a.b):a.b=void 0;a.ka(a.t,a.b,a.c)}function Mc(a){a.t=!0;Lc(a)}l.N=function(){return this.d?this.c:this.b};l.pa=function(){return this.ja?this.N():this.l};l.oa=function(){};l.ha=function(){};function Nc(){};function T(a,b,c,d,e,f,g){this.f=a;this.a=b;this.l=g;this.d=!!this.a;this.c=r(f)?f:!!y(this.a);a="next";d&&e?a="prevunique":d?a="prev":e&&(a="nextunique");this.i=a;this.b=hb(c);this.e=Oc}F(T,Nc);T.prototype.c=!0;function Pc(a,b,c){if(3<arguments.length)throw null;T.call(this,a,void 0,b,c,void 0,!1)}F(Pc,T);function Qc(a,b,c,d,e){if(!y(b))throw null;T.call(this,a,b,c,d,e,!1)}F(Qc,T);var Oc="init";l=T.prototype;l.g=function(){return this.f};
function Rc(a){return a.b?a.b instanceof jb?a.b:jb.bound(a.b.lower,a.b.upper,a.b.lowerOpen,a.b.upperOpen):null}l.clone=function(){return new T(this.f,this.a,this.b,Sc(this),Tc(this),this.c,this.l)};l.unique=function(a){return new T(this.f,this.a,this.b,Sc(this),a,this.c,this.l)};function Uc(a){return new T(a.f,a.a,a.b,Sc(a),Tc(a),a.c,a.l)}l.reverse=function(){return new T(this.f,this.a,this.b,!Sc(this),Tc(this),this.c,this.l)};function Sc(a){return"prev"===a.i||"prevunique"===a.i}
function Tc(a){return"nextunique"===a.i||"prevunique"===a.i}l.load=function(a){a=a[0];a.$a(this.f,this.l||this.a,this.b,this.i,this.c);this.e="busy";var b=this;a.ka=function(a,d,e){b.p=d;b.m=e;b.e=a?"rest":"done"};a.openCursor(this.p,this.m);return a};function Vc(a,b,c,d){b=b||Oc;"busy"!=a.e&&(a.p=c,a.m=d,a.e=b)}l.stores=function(){return[this.f]};function Wc(a){this.c=a||null;this.a=!1}function Xc(a,b){var c;a.a=Sc(b[0]);for(c=0;c<b.length;c++);return!1}Wc.prototype.b=function(){return[]};function Yc(a){Error.captureStackTrace?Error.captureStackTrace(this,Yc):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ConstraintError"}F(Yc,Error);Yc.prototype.name="ConstraintError";function Zc(a){Error.captureStackTrace?Error.captureStackTrace(this,Zc):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.db.VersionError"}F(Zc,Error);Zc.prototype.name="ydn.db.VersionError";
function Gb(a){Error.captureStackTrace?Error.captureStackTrace(this,Gb):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="InvalidStateError"}F(Gb,Error);function $c(a){Error.captureStackTrace?Error.captureStackTrace(this,$c):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="InvalidAccessError"}F($c,Error);function ad(a){Error.captureStackTrace?Error.captureStackTrace(this,ad):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="NotFoundError"}
F(ad,Error);ad.prototype.name="NotFoundError";function bd(a,b){Error.captureStackTrace?Error.captureStackTrace(this,bd):this.stack=Error().stack||"";b&&(this.message=String(b));this.message+=" :"+a.message+" ["+a.code+"]";this.name="SQLError"}F(bd,Error);function cd(a,b){Error.captureStackTrace?Error.captureStackTrace(this,cd):this.stack=Error().stack||"";b&&(this.message=String(b));this.message+=" :"+a.message;this.name="SecurityError"}F(cd,Error);
function dd(a){Error.captureStackTrace?Error.captureStackTrace(this,dd):this.stack=Error().stack||"";a&&(this.message=String(a));this.name="ydn.db.TimeoutError"}F(dd,Error);function ed(a,b){this.a=b};function fd(a,b,c,d,e,f){this.ka=a;this.sb=b;this.b=this.c=0;this.r=d;this.m=e;this.f=c||gd;this.X=f||0;this.t=null;this.l=!1}l=fd.prototype;l.gb=function(a){if("complete"==a||"abort"==a)this.l?this.l=!1:O(this.t,this.c,"complete"!=a)};function hd(a,b){a.l?setTimeout(function(){a.U(function(){a.p.next(b)},a.r,a.m,E(a.gb,a))},4):a.p.next(b)}l.request=function(a){a=new N(a);this.p&&H(a,function(a){hd(this,a)},function(a){var c=a;a instanceof Error||(c=Error(),c.error=a);hd(this,c)},this);return a};
l.type=function(){return this.ka.Za()};l.h=function(){return this.ka};l.P=function(){return"B"+this.sb+"T"+this.c};var gd="single";function id(a){if(a)if(ca(a.abort))a.abort();else if(ca(a.executeSql))a.executeSql("ABORT",[],null,function(){return!0});else throw null;else throw new Gb("No active transaction");};function jd(a){this.d=a;this.a=null;this.c=0}jd.prototype.C=null;jd.prototype.A=null;function kd(a,b,c,d,e,f){fd.call(this,a,b,c,d,e,f);this.d=[];this.e=[];this.i=null;this.a=new jd(b);this.Y=f||0;this.B=!1}F(kd,fd);
function ld(a,b,c){if("multi"==a.f)a:if(a=a.a,!a.C||!a.mode||c!=a.mode&&(a.mode!=J||c!=I)||b.length>a.C.length)b=!1;else{for(c=0;c<b.length;c++)if(-1==a.C.indexOf(b[c])){b=!1;break a}b=!0}else if("repeat"==a.f)a:if(a=a.a,a.C&&a.mode&&c==a.mode&&a.C.length==b.length){for(c=0;c<b.length;c++)if(-1==a.C.indexOf(b[c])){b=!1;break a}b=!0}else b=!1;else b="all"==a.f?!0:!1;return b}function md(a){var b=0<a.d.length?a.d[0].C:null,c=0<a.d.length?a.d[0].mode:null;return null!=b&&null!=c?ld(a,b,c):!1}l=kd.prototype;
l.abort=function(){id(this.i)};
l.U=function(a,b,c,d){var e=y(b)?[b]:b,f=r(c)?c:I,g=this;if(this.a.a||!Ic(this.h())&&this.B)this.d.push({wa:a,C:b,mode:f,A:d});else{d&&this.e.push(d);if(this.Y&&this.c>=this.Y)throw null;this.B=!0;this.h().na(function(c){var d=g.a;d.a=c;d.b=!1;d.C=b;d.mode=f;d.c++;d.A=null;a(g);for(a=null;md(g);)c=g.d.shift(),c.A&&g.e.push(c.A),c.wa()},e,f,function(a,b){var c=g.a;c.a&&(c.a=null,c.C=null,c.mode=null,ca(c.A)&&c.A(a,b),c.A=null);for(c=0;c<g.e.length;c++)(0,g.e[c])(a,b);g.e.length=0;(c=g.d.shift())&&
g.U(c.wa,c.C,c.mode,c.A);g.b=0})}};l.P=function(){return"B"+this.a.d+"T"+this.a.c};l.request=function(a,b,c,d){var e=kd.s.request.call(this,a,b,c,d);a=c||I;var f=this;this.a.a&&!this.a.b&&ld(this,b,a)?(b=this.a.a,this.b++,Eb(e,b,this.P()+"R"+this.b),d&&this.e.push(d)):f.U(function(){var a=f.a.a;f.b++;Eb(e,a,f.P()+"R"+f.b)},b,a,d);return e};
l.Z=function(a,b,c,d,e){d=d||I;var f=this,g;if(f.a.a&&!f.a.b&&ld(this,c,d)){var h=f.a.a;f.b++;g=f.P()+"R"+f.b;b(h,g,function(b,c){f.i=h;c?a.j(b):a.k(b);f.i=null});b=null}else f.U(function(){var c=f.a.a;f.b++;g=f.P()+"R"+f.b;b(c,g,function(b,d){f.i=c;d?a.j(b):a.k(b);f.i=null});b=null},c,d,e)};l.getName=function(){return this.h().getName()};function nd(a,b){kd.call(this,a,b)}F(nd,kd);nd.prototype.request=function(a,b,c){var d,e,f,g=nd.s.request.call(this,a,b,c,function(a,b){g.a=null;if(d)"complete"!=a&&(f=!0,e=b),d(e,f);else{var c=new dd;O(g,c,!0)}});Hb(g,function(a,b,c){f=b;e=a;d=c});return g};
nd.prototype.Z=function(a,b,c,d,e){var f,g,h=new G;H(h,function(a){g=!1;f=a},function(a){g=!0;f=a});nd.s.Z.call(this,h,b,c,d,function(b,c){if("complete"!=b)a.j(c);else if(!0===g)a.j(f);else if(!1===g)a.k(f);else{var d=new dd;a.j(d)}e&&(e(b,c),e=void 0)})};function od(a,b,c){this.d=a;this.b=b;this.a=c;this.c=null}od.prototype.e=function(){return this.a.c};od.prototype.abort=function(){this.a.abort()};function U(a){if(!a.c){var b;b=a.d;var c=b.Za();if("indexeddb"==c)b=new pd(0,b.a);else if("websql"==c)b=new qd(0,b.a);else if("memory"==c||"localstorage"==c||"sessionstorage"==c)b=new rd(0,b.a);else throw null;a.c=b}return a.c}od.prototype.h=function(){return this.d};
function sd(a,b){var c=a.h(),d=b instanceof Tb?b:Ub(b),e=R(c.a,b.name);if(0==hc(d,e).length)Ea(!1);else if(c.a instanceof yc)zc(c.a,d),c.b?(c.b.Fa(),c.b=null,Fc(c)):Ea(!1);else throw new Bc("");};function V(a,b,c){od.call(this,a,b,c)}F(V,od);l=V.prototype;
l.count=function(a,b,c,d){var e,f,g,h;if(null!=a)if(w(a)){if(r(c)||r(b))throw null;f=a;for(var k=0;k<f.length;k++)if(!wc(this.b,f[k]))throw null;e=this.a.request("d",f);P(e,function(){U(this).ta(e,f)},this)}else if(y(a)){k=R(this.b,a);if(!k)throw null;f=[a];if(y(b))g=b,h=D(c)?hb(c):null;else if(D(b)||null==b)if(D(b))h=hb(b);else{if(null!=b)throw null;h=null}else throw null;e=this.a.request("d",f);jc(k,e,arguments);P(e,function(){U(this).Ma(e,f[0],h,g,!!d)},this)}else throw null;else k=vc(this.b),
e=this.a.request("d",k),Hb(e,function(a,b,c){if(b)c(a,!0);else{for(var d=b=0;d<a.length;d++)b+=a[d];c(b,!1)}},this),P(e,function(){U(this).ta(e,f)},this);return e};
l.get=function(a,b){var c=this,d;if(a instanceof eb){var e=a,f=e.g(),g=R(this.b,f);if(!g){if(this.b.O()){if(Ic(this.h()))return Jb("e",void 0);d=new N("e");this.h().Ba(function(){H(c.get(a,b),function(a){d.k(a)},function(a){d.j(a)})});return d}throw null;}var h=e.a;d=this.a.request("ek",[f]);jc(g,d,arguments);P(d,function(){U(this).xa(d,f,h)},this)}else if(y(a)&&r(b)){var k=a,g=R(this.b,k);if(!g){if(this.b.O()){if(Ic(this.h()))return Jb("e",void 0);d=new N("e");this.h().Ba(function(){H(c.get(a,b),
function(a){d.k(a)},function(a){d.j(a)})});return d}throw null;}var m=b;d=this.a.request("e",[k]);jc(g,d,arguments);P(d,function(){U(this).xa(d,k,m)},this)}else throw null;return d};
l.keys=function(a,b,c,d,e,f,g){var h,k,m=null,p=!1,n=!1,s=a,t=R(this.b,s);if(this.b.O()&&!t)return Jb("g",[]);var u;if(y(b)){var v=b,m=hb(c);if(C(d))h=d;else{if(r(d))throw null;h=100}if(C(e))k=e;else{if(r(e))throw null;k=0}if(r(f))if(ba(f))p=f;else throw null;if(r(g))if(ba(g))n=g;else throw null;u=this.a.request("i",[s]);jc(t,u,arguments);P(u,function(){U(this).ca(u,2,s,v,m,h,k,p,n)},this)}else{m=D(b)?hb(b):null;if(C(c))h=c;else{if(r(c))throw null;h=100}if(C(d))k=d;else{if(r(d))throw null;k=0}if(r(e))if(ba(e))p=
e;else throw null;u=this.a.request("g",[s]);jc(t,u,arguments);P(u,function(){U(this).ca(u,2,s,null,m,h,k,p,!1)},this)}return u};
l.D=function(a,b,c,d,e,f,g){var h=this,k,m,p,n=!1,s=!1;if(y(a)){var t=a,u=R(this.b,t);if(!u){if(this.b.O()){if(Ic(this.h()))return Jb("s",[]);k=new N("s");this.h().Ba(function(){H(h.D(a,b,c,d,e,f),function(a){k.k(a)},function(a){k.j(a)})});return k}throw new ad(t);}if(w(b)){var v=b;k=this.a.request("v",[t]);jc(u,k,arguments);P(k,function(){U(this).Qa(k,t,v)},this)}else if(y(b)){var B=b,z=hb(c);if(r(d))if(C(d))m=d;else throw null;else m=100;if(r(e))if(C(e))p=e;else throw null;else p=0;if(ba(f))n=f;
else if(r(f))throw null;if(r(g))if(ba(g))s=g;else throw null;k=this.a.request("u",[t]);jc(u,k,arguments);P(k,function(){U(this).ca(k,4,t,B,z,m,p,n,s)},this)}else{z=null;D(b)&&(z=hb(b));if(r(c))if(C(c))m=c;else throw null;else m=100;if(r(d))if(C(d))p=d;else throw null;else p=0;if(r(e))if(ba(e))n=e;else throw null;k=this.a.request("s",[t]);jc(u,k,arguments);P(k,function(){U(this).ca(k,4,t,null,z,m,p,n,!1)},this)}}else if(w(a))if(a[0]instanceof eb){for(var u=[],A=a,K=0;K<A.length;K++){var W=A[K].g();
if(!wc(this.b,W)){if(this.b.O())return u=[],u[A.length-1]=void 0,Jb("e",u);throw null;}0<=qa(u,W)||u.push(W)}k=this.a.request("w",u);P(k,function(){U(this).Ra(k,A)},this)}else throw null;else throw null;return k};
l.add=function(a,b,c){var d=y(a)?a:D(a)?a.name:void 0;if(!y(d))throw null;var e=R(this.b,d);if(!e){if(!this.b.O())throw null;e=Ub(D(a)?a:{name:d});sd(this,e)}else if(this.b.O()&&D(a)&&(a=Ub(a),hc(e,a)))throw null;var f;if(!e)throw null;if(y(e.keyPath)&&r(c))throw null;if(!e.keyPath&&!e.b&&!r(c))throw null;if(w(b)){for(a=0;a<b.length;a++)ic(e,b[a]);f=this.a.request("b",[d],J);P(f,function(){U(this).R(f,!1,!1,d,b,c)},this);e.aa&&f.G(function(){this.h();e.getName();this.h()},this)}else if(D(b))cc(e,
b,c),ic(e,b),f=this.a.request("a",[d],J),P(f,function(){U(this).R(f,!1,!0,d,[b],[c])},this),e.aa&&f.G(function(){this.h();e.getName();this.h()},this);else throw null;return f};function td(a,b){var c=y(b)?b:D(b)?b.name:void 0;if(!y(c))throw null;var d=R(a.b,c);if(!d){if(!a.b.O())throw new ad(c);d=Ub(D(b)?b:{name:c});sd(a,d)}else if(a.b.O()&&D(b)){var e=Ub(b);if(hc(d,e))throw null;}if(!d)throw new ad(c);return d}
l.load=function(a,b,c){var d=c||",",e=td(this,a).getName();a=this.a.request("i3",[e]);var f=this;this.a.Z(a,function(a,c,k){U(f).Ua(a,c,k,e,b,d)},[e],J);return a};
l.put=function(a,b,c){var d,e=this;if(a instanceof eb){var f=a,g=f.g(),h=R(this.b,g);if(!h)throw null;if(h.keyPath){var k=cc(h,b);if(null!=k){if(0!=L(k,f.a))throw null;}else ec(h,b,f.a);return this.put(g,b)}return this.put(g,b,f.a)}if(w(a)){for(var m=a,p=b,f=[],g=0,h=m.length;g<h;g++){k=m[g].g();-1==qa(f,k)&&f.push(k);var n=R(this.b,k);if(!n)throw null;n.keyPath&&ec(n,p[g],m[g].a)}for(g=0;g<p.length;g++)ic(n,p[g]);d=this.a.request("l",f,J);jc(n,d,arguments);P(d,function(){U(e).Ta(d,p,m)},this)}else if(y(a)||
D(a)){var n=td(this,a),s=n.getName();if(n.keyPath&&r(c))throw null;if(!n.keyPath&&!n.b&&!r(c))throw null;if(w(b)){for(var t=b,u=c,g=0;g<t.length;g++)ic(n,t[g]);d=this.a.request("k",[s],J);jc(n,d,arguments);P(d,function(){U(this).R(d,!0,!1,s,t,u)},this);n.aa&&d.G(function(){this.h();this.h()},this)}else if(D(b)){var v=b,B=c;if(r(q.Blob)&&v instanceof Blob&&n.da&&!n.keyPath&&0==n.a.length&&Bb)d=new N("j"),f=new FileReader,f.onload=function(a){var b=a.target.result,c=e.a.request("j",[s],J);jc(n,c,[s,
v,B]);P(c,function(){U(e).R(c,!0,!0,s,[b],[B])},this);H(c,function(a){d.k(a)},function(a){d.j(a)})},f.onerror=function(a){d.j(a)},f.onabort=function(a){d.j(a)},f.readAsDataURL(v);else{ic(n,v);d=this.a.request("j",[s],J);var z=[s,v,B];jc(n,d,z);P(d,function(){var a=r(B)?[z[2]]:void 0;U(e).R(d,!0,!0,s,[z[1]],a)},this)}n.aa&&d.G(function(){this.h();this.h()},this)}else throw null;}else throw null;return d};
l.clear=function(a,b){var c;if(y(a)){var d=R(this.b,a);if(!d)throw null;if(D(b)){var e=hb(b);if(null===e)throw null;c=this.a.request("c",[a],J);jc(d,c,[a,e]);P(c,function(){U(this).Ka(c,a,e)},this)}else{if(r(b))throw null;c=this.a.request("c",[a],J);P(c,function(){U(this).ra(c,[a])},this)}}else if(!r(a)||w(a)&&y(a[0])){var f=a||vc(this.b);c=this.a.request("c",f,J);P(c,function(){U(this).ra(c,f)},this)}else throw null;return c};
l.Ia=function(a,b,c){var d;if(y(a)){var e=R(this.b,a);if(!e)throw null;if(r(c))if(y(b)){var f=Xb(e,b);if(!f)throw null;if(D(c)||null===c){var g=hb(c);d=this.a.request("p",[a],J);P(d,function(){U(this).Va(d,a,f.getName(),g)},this)}else throw null;}else throw null;else if(y(b)||C(b)||x(b)||b instanceof Date){d=this.a.request("m",[a],J);var h=[a,b];jc(e,d,h);P(d,function(){U(this).Ca(d,a,h[1])},this);e.aa&&d.G(function(){this.h();this.h()},this)}else if(D(b))g=hb(b),d=this.a.request("n",[a],J),jc(e,
d,[a,g]),P(d,function(){U(this).Da(d,a,g)},this),e.aa&&d.G(function(){this.h();this.h()},this);else throw null;}else if(a instanceof eb){var k=a.g(),e=R(this.b,k);d=this.a.request("m",[k],J);var m=[k,a.a];jc(e,d,m);P(d,function(){U(this).Ca(d,k,m[1])},this)}else if(w(a)){b=[];c=0;for(e=a.length;c<e;c++){var p=a[c].g();-1==qa(b,p)&&b.push(p)}if(1>b.length)throw null;d=this.a.request("o",b,J);P(d,function(){U(this).Wa(d,a)},this)}else throw null;return d};function ud(a,b,c){od.call(this,a,b,c)}F(ud,V);l=ud.prototype;l.get=function(a,b){if(a instanceof T){var c=a.g(),d=R(this.b,c);if(!d)throw null;var e=a.a;if(r(e)&&!$b(d,e))throw null;var f=this.a.request("f",[c]);P(f,function(){vd(this,5,f,a,1)},this);return f}return ud.s.get.call(this,a,b)};
l.keys=function(a,b,c,d,e,f,g){if(a instanceof T){var h=100;if(C(b)){if(h=b,1>h)throw null;}else if(r(b))throw null;if(r(c))throw null;var k=this.a.request("h",a.stores());P(k,function(){a.d?vd(this,1,k,a,h):vd(this,2,k,a,h)},this);return k}return ud.s.keys.call(this,a,b,c,d,e,f,g)};l.count=function(a,b,c){if(a instanceof T){if(r(b)||r(c))throw null;var d=this.a.request("d",a.stores());P(d,function(){vd(this,6,d,a)},this);return d}return ud.s.count.call(this,a,b,c)};
l.D=function(a,b,c,d,e,f){if(a instanceof T){var g;if(C(b)){if(g=b,1>g)throw null;}else if(r(b))throw null;if(r(c))throw null;var h=this.a.request("t",a.stores());P(h,function(){a.c?vd(this,2,h,a,g):vd(this,4,h,a,g)},this);return h}return ud.s.D.call(this,a,b,c,d,e,f)};
function wd(a,b,c){var d,e;e=c?c:null;c=[];for(d=0;d<e.length;d++)for(var f=e[d].stores(),g=0;g<f.length;g++)0<=qa(c,f[g])||c.push(f[g]);d=a.a.request("qa",c);a.a.Z(d,function(c,d,f){function g(){for(var b=0,f=0;f<e.length;f++){for(var m=e[f],p=m.stores(),t=[],z=0;z<p.length;z++)t[z]=U(a).b(c,d,p[z]);m=m.load(t);m.Y=n;m.B=ha(s,b);A[f]=m;v[b]=f;b++}u=e.length}function n(a){for(var b=0;b<A.length;b++)Mc(A[b]);va(A);f(a,!0)}function s(a,c){if(t)throw new Ac;K++;var d=K===u,g=v[a],h=e[g],k=A[g],g=k.N(),
k=k.pa();B[a]=c;z[a]=h.d?h.c?g:k:h.c?c:k;if(d){var p;p=b instanceof Wc?b.b(B,z):b(B,z);d=[];h=[];g=[];k=[];if(w(p))for(var n=0;n<p.length;n++)!0===p[n]?g[n]=1:!1===p[n]?k[n]=!0:h[n]=p[n];else if(null===p)d=[];else if(r(p))if(D(p))d=p.continuePrimary||[],h=p["continue"]||[],g=p.advance||[],k=p.restart||[];else throw null;else for(d=[],n=0;n<e.length;n++)r(v[n])&&(g[n]=1);for(n=K=p=0;n<e.length;n++)null!=d[n]||r(h[n])||null!=k[n]||null!=g[n]||K++;for(n=0;n<e.length;n++)if(null!=d[n]||r(h[n])||null!=
k[n]||null!=g[n]){var s=v[n];if(!r(s))throw new Cc(n+" is not an iterator.");var s=e[s],dc=A[n];B[n]=void 0;z[n]=void 0;if(null!=k[n])s=dc,s.p=!1,s.t=!1,s.openCursor(void 0,void 0);else if(r(h[n]))dc.ha(h[n]);else if(null!=d[n])dc.oa(d[n]);else if(null!=g[n])dc.advance(1);else throw new Ac(s+": has no action");p++}if(0==p){for(d=0;d<A.length;d++)Mc(A[d]);t=!0;va(A);f(void 0)}}}var t=!1,u,v=[],B=[],z=[],A=[],K=0;b instanceof Wc?Xc(b,e)||g():g()},c,I);return d}
function xd(a,b,c,d){if(!R(a.b,c.g()))throw null;var e=J||I,f=a.a.request("i5",c.stores(),e);P(f,function(e){for(var h=Ib(f),k=c.stores(),m=[],p=0;p<k.length;p++)m[p]=U(a).b(e,h,k[p]);var n=c.load(m);n.Y=function(a){O(f,a,!0)};n.B=function(a){if(null!=a){var c=b.call(d,n);!0===c?(n.p=!1,n.t=!1,n.openCursor(void 0,void 0)):D(c)?!0===c.restart?(a=c["continue"],c=c.continuePrimary,n.p=!1,n.t=!1,n.openCursor(c,a)):null!=c["continue"]?n.ha(c["continue"]):null!=c.continuePrimary?n.oa(c.continuePrimary):
(Mc(n),O(f,void 0)):n.advance(1)}else Mc(n),O(f,void 0)}},a);return f}l.map=function(a,b){for(var c=this,d=a.stores(),e,f=0;e=d[f];f++)if(!e)throw null;e=this.a.request("i4",d);this.a.Z(e,function(d,e,f){for(var m=a.stores(),p=[],n=0;n<m.length;n++)p[n]=U(c).b(d,e,m[n]);var s=a.load(p);s.Y=function(a){f(a,!1)};s.B=function(c){null!=c?(c=a.d?a.c?c:s.N():a.c?c:s.pa(),b(c),s.advance(1)):(f(void 0),b=null)}},d,I);return e};
function yd(a,b,c,d){var e=c.g(),f=c.a||null,g=d||100,h=a.a.request("u",[e]),k="done"==c.e||c.e==Oc?[]:[c.p,c.m];P(h,function(){U(this).ca(h,b,e,f,Rc(c),g,0,Sc(c),Tc(c),k)},a);h.G(function(){null!=k[0]?Vc(c,"rest",k[0],k[1]):Vc(c)});return h}
function vd(a,b,c,d,e){var f=[],g=c.a,h=Ib(c);a=U(a);for(var k=[],m=d.stores(),p=0;p<m.length;p++)k[p]=a.b(g,h,m[p]);var n=d.load(k);n.Y=function(a){Mc(n);O(c,a,!0)};var s=0,t=!1;n.B=function(a){t||(t=!0);null!=a?(n.N(),s++,1==b?f.push(a):2==b?f.push(n.N()):3==b?f.push([a,n.N()]):6!=b&&f.push(n.pa()),5==b?(Mc(n),O(c,f[0])):6==b||!r(e)||s<e?n.ha():(Mc(n),O(c,f))):(Mc(n),O(c,5==b?f[0]:6==b?s:f))}};function zd(a,b,c,d){this.d=a;this.a=wa(c);this.b=d;this.c=[]}zd.prototype.d=null;function Ad(a,b,c){if(a.d)c&&a.c.push(c),b(a.d);else throw null;};function Bd(a,b,c,d,e,f){fd.call(this,a,b,c,d,e,f);this.d=this.a=null}F(Bd,fd);l=Bd.prototype;l.abort=function(){id(this.d)};
l.kb=function(a,b){var c;if("multi"==this.f)a:if(c=this.a,!c.a||!c.b||b!=c.b&&(c.b!=J||b!=I)||a.length>c.a.length)c=!1;else{for(var d=0;d<a.length;d++)if(-1==c.a.indexOf(a[d])){c=!1;break a}c=!0}else if("repeat"==this.f)a:if(c=this.a,c.a&&c.b&&b==c.b&&c.a.length==a.length){for(d=0;d<a.length;d++)if(-1==c.a.indexOf(a[d])){c=!1;break a}c=!0}else c=!1;else c="all"==this.f?!0:!1;return c};
l.U=function(a,b,c,d){function e(c){h.c++;k=new zd(c,0,b,g);h.a=k;Ad(h.a,a,d)}function f(a,b){if(k){for(var c=k,d=0;d<c.c.length;d++)c.c[d](a,b);c.c.length=0;c.d=null;c.a=null;c.c=null}h.b=0}this.r&&(b=this.r);this.m&&(c=this.m);var g=r(c)?c:I,h=this,k;if(this.a&&this.a.d&&this.kb(b,g))Ad(this.a,a,d);else{if(this.X&&this.c>=this.X)throw null;this.h().na(e,b,g,f)}};l.request=function(a,b,c,d){var e=Bd.s.request.call(this,a,b,c,d),f=this;this.U(function(a){f.b++;Eb(e,a,f.P()+"R"+f.b)},b,c||I,d);return e};
l.Z=function(a,b,c,d,e){var f=this,g;this.U(function(c){f.b++;g=f.P()+"R"+f.b;b(c,g,function(b,d){f.d=c;g=f.P()+"R"+f.b;d?a.j(b):a.k(b);f.d=null});b=null},c,d,e)};function Cd(a,b){Bd.call(this,a,b,gd)}F(Cd,Bd);Cd.prototype.kb=function(){return!1};Cd.prototype.request=function(a,b,c){var d,e,f,g=Cd.s.request.call(this,a,b,c,function(a,b){g.a=null;if(d)"complete"!=a&&(f=!0,e=b),d(e,f);else{var c=new dd;O(g,c,!0)}});Hb(g,function(a,b,c){f=b;e=a;d=c});return g};
Cd.prototype.Z=function(a,b,c,d,e){var f,g,h=new G;H(h,function(a){g=!1;f=a},function(a){g=!0;f=a});Cd.s.Z.call(this,h,b,c,d,function(b,c){if("complete"!=b)a.j(c);else if(!0===g)a.j(f);else if(!1===g)a.k(f);else{var d=new dd;a.j(d)}e&&(e(b,c),e=void 0)})};function Dd(a,b,c){S.call(this,a,b,c);this.ba=0;a=!0;b=gd;c&&(r(c.isSerial)&&(a=!!c.isSerial),c.policy&&(b=c.policy));c=Ed(this,b,a);this.e=Ed(this,"atomic",!1);this.c=this.fa(c,this.e)}F(Dd,S);l=Dd.prototype;l.ba=0;l.lb=function(a,b,c,d,e){var f;"readonly"==d?f=I:"readwrite"==d&&(f=J);a=Ed(this,a,b,c,f,e);return this.fa(a,this.e)};l.fa=function(a){return new od(this,this.a,a)};
function Ed(a,b,c,d,e,f){if(c){if("multi"==b||"repeat"==b||"all"==b||b==gd)return new kd(a,a.ba++,b,d,e,f);if("atomic"==b)return new nd(a,a.ba++);throw null;}if("multi"==b||"repeat"==b||"all"==b||b==gd)return new Bd(a,a.ba++,b,d,e,f);if("atomic"==b)return new Cd(a,a.ba++);throw null;}
l.tb=function(a,b,c){this.ba++;b=b||vc(this.a);var d=I;if(c)if("readwrite"==c)d=J;else if("readonly"!=c)throw null;var e=Ed(this,"all",!1,b,d,1),f=this.fa(e,this.e),g=new N("q");e.U(function(b){Eb(g,b,e.P()+"R0");a(f)},b,d,function(a){g.a=null;O(g,e.c,"complete"!==a)});return g};
l.vb=function(a,b,c,d){this.ba++;b=b||vc(this.a);var e=I;if(c)if("readwrite"==c)e=J;else if("readonly"!=c)throw null;var f=Ed(this,"all",!1,b,e,d),g=this.fa(f,this.e),h=new N("q"),k;f.U(function(b){Eb(h,b,f.P()+"R0");b=a(g);f.p=b;f.t=h;k=E(f.gb,f);b.next()},b,e,function(a,b){h.a=null;"complete"!=a&&"abort"!=a||k(a,b)});return h};l.Db=function(){return this.c?this.c.a.c:NaN};function X(a,b,c){Dd.call(this,a,b,c);a=this.a;for(b=0;b<a.a.length;b++){c=a.a[b];var d=R(a,c.getName());if(d){if(!$b(d,"k"))throw null;if(!$b(d,"v"))throw null;if("id"!=d.keyPath)throw null;}else throw null;for(d=0;d<c.count();d++){var e=c.index(d);if(!R(a,e.g()))throw null;}}}F(X,Dd);l=X.prototype;l.fa=function(a){return new V(this,this.a,a)};l.add=function(a,b,c){return this.c.add(a,b,c)};l.count=function(a,b,c,d){return this.c.count(a,b,c,d)};l.get=function(a,b){return this.c.get(a,b)};
l.keys=function(a,b,c,d,e,f,g){return this.c.keys(a,b,c,d,e,f,g)};l.D=function(a,b,c,d,e,f){return this.c.D(a,b,c,d,e,f)};l.load=function(a,b,c){return this.c.load(a,b,c)};l.put=function(a,b,c){return this.c.put(a,b,c)};l.clear=function(a,b,c){return this.c.clear(a,b,c)};l.Ia=function(a,b,c){return this.c.Ia(a,b,c)};function Fd(a,b,c){X.call(this,a,b,c)}F(Fd,X);Fd.prototype.fa=function(a){return new ud(this,this.a,a)};Fd.prototype.map=function(a,b){return this.c.map(a,b)};function Gd(a,b,c,d){Jc.call(this,a,0,c,d);this.e=null}F(Gd,Jc);l=Gd.prototype;l.ua=function(a){(a=a.target.result)?this.I(a.key,a.primaryKey,a.value):this.I()};
l.openCursor=function(a,b){function c(a,b,c){n.e=p;n.e.onsuccess=E(n.ua,n);n.I(a,n.d?b:void 0,c);p=null}var d=this.n,e=this.i.objectStore(this.K),f=y(this.Q)?e.index(this.Q):null;if(r(a))var g=f?!r(b):!0,h=d?d.lower:void 0,k=d?d.upper:void 0,m=d?!!d.lowerOpen:!1,d=d?!!d.upperOpen:!1,d=gb(this.reverse?new M(h,a,m,g):new M(a,k,g,d));var p;this.ja?f?p=null!=this.M?f.openKeyCursor(d,this.M):null!=d?f.openKeyCursor(d):f.openKeyCursor():p=null!=this.M?e.openCursor(d,this.M):null!=d?e.openCursor(d):e.openCursor():
f?p=null!=this.M?f.openCursor(d,this.M):null!=d?f.openCursor(d):f.openCursor():p=null!=this.M?e.openCursor(d,this.M):null!=d?e.openCursor(d):e.openCursor();var n=this;p.onerror=function(a){var b=p.error;a.preventDefault();Kc(n,b)};null!=a?p.onsuccess=function(d){if(d=d.target.result){var e=Ka.cmp(d.key,a),f=n.reverse?-1:1;if(e==f)c(d.key,d.primaryKey,d.value);else if(e==-f)d["continue"](a);else if(null!=b)if(Ka.cmp(d.primaryKey,b)==f)c(d.key,d.primaryKey,d.value);else d["continue"]();else d["continue"]()}else c()}:
(n.e=p,n.e.onsuccess=E(n.ua,n))};l.ya=function(){return!!this.e};l.update=function(a){var b=this.e.result;if(b){var c=new G;a=b.update(a);a.onsuccess=function(a){c.k(a.target.result)};a.onerror=function(a){a.preventDefault();c.j(a)};return c}throw new $c("cursor gone");};l.clear=function(){var a=this.e.result;if(a){var b=new G,a=a["delete"]();a.onsuccess=function(){b.k(1)};a.onerror=function(a){a.preventDefault();b.j(a)};return b}throw new $c("cursor gone");};
l.advance=function(a){var b=this.e.result;if(1==a)b["continue"]();else b.advance(a)};l.oa=function(a){var b,c=this.e.result,d=this;this.e.onsuccess=function(e){if(c=e.target.result)if(b=Ka.cmp(c.primaryKey,a),0==b||1==b&&!d.reverse||-1==b&&d.reverse)d.e.onsuccess=E(d.ua,d),d.I(c.key,d.d?c.primaryKey:void 0,c.value);else c["continue"]();else d.e.onsuccess=E(d.ua,d),d.I()};c["continue"]()};l.ha=function(a){var b=this.e.result;if(null!=a)b["continue"](a);else b["continue"]()};function Hd(a,b){this.a=b}F(Hd,ed);l=Hd.prototype;l.ta=function(a,b){function c(e){var f=a.a.objectStore(b[e]).count();f.onsuccess=function(f){d[e]=f.target.result;e++;e==b.length?O(a,d):c(e)};f.onerror=function(b){b.preventDefault();O(a,f.error,!0)}}var d=[];0==b.length?O(a,[]):c(0)};
l.R=function(a,b,c,d,e,f){function g(d){if(null==e[d])if(k++,k==e.length)O(a,h,m);else{var s=d+10;s<e.length&&g(s)}var t,s=e[d];t=null!=f?b?p.put(s,f[d]):p.add(s,f[d]):b?p.put(s):p.add(s);t.onsuccess=function(b){k++;h[d]=b.target.result;k==e.length?O(a,c?h[0]:h,m):(b=d+10,b<e.length&&g(b))};t.onerror=function(b){k++;h[d]=t.error;m=!0;b.preventDefault();k==e.length?O(a,c?h[0]:h,m):(b=d+10,b<e.length&&g(b))}}var h=[],k=0,m=!1,p=a.a.objectStore(d);if(0<e.length)for(d=0;10>d&&d<e.length;d++)g(d);else O(a,
[])};l.Ta=function(a,b,c){function d(h){var m=c[h],p=a.a.objectStore(m.g()),n;n=null===p.keyPath?p.put(b[h],m.a):p.put(b[h]);n.onsuccess=function(c){f++;e[h]=c.target.result;f==b.length?O(a,e,g):(c=h+10,c<b.length&&d(c))};n.onerror=function(c){f++;e[h]=n.error;g=!0;c.preventDefault();f==b.length?O(a,e,g):(c=h+10,c<b.length&&d(c))}}var e=[],f=0,g=!1;if(0<b.length)for(var h=0;10>h&&h<b.length;h++)d(h);else O(a,e,g)};
l.Ua=function(a,b,c,d,e,f){function g(){var a={},b=e.indexOf("\n",m),d=!1,v;-1==b?(d=!0,v=e.substring(m)):(v=e.substring(m,b),m=b+1);b=v.split(f);for(v=0;v<p.length;v++){var B=b[v];n[v]&&(n[v]==Mb?B=la(B):"INTEGER"==n[v]?B=parseInt(B,10):"NUMERIC"==n[v]&&(B=parseFloat(B)));a[p[v]]=B}var z=h.put(a);z.onsuccess=function(a){k.push(a.target.result);d?c(k):g()};z.onerror=function(a){a.preventDefault();c(z.error,!0)}}b=R(this.a,d);var h=a.objectStore(d),k=[],m=e.indexOf("\n"),p=e.substr(0,m).split(f),n=
[];for(a=0;a<p.length;a++)(d=Xb(b,p[a]))?n[a]=d.type:p[a]==b.keyPath&&(n[a]=b.type);m++;g()};l.Ca=function(a,b,c){var d=a.a.objectStore(b).openCursor(jb.only(c));d.onsuccess=function(b){if(b=b.target.result){var c=b["delete"]();c.onsuccess=function(){O(a,1)};c.onerror=function(){O(a,c.error,!0)}}else O(a,0)};d.onerror=function(b){b.preventDefault();O(a,d.error,!0)}};
l.Wa=function(a,b){function c(h){h++;if(h>=b.length)0<g.length?O(a,g,!0):O(a,d);else{b[h].g()!=e&&(e=b[h].g(),f=a.a.objectStore(e));var k=f["delete"](b[h].a);k.onsuccess=function(){d++;c(h)};k.onerror=function(a){a.preventDefault();g[h]=k.error;c(h)}}}var d=0,e,f,g=[];c(-1)};
l.Da=function(a,b,c){var d=a.a.objectStore(b),e=d.count(c);e.onsuccess=function(b){var e=b.target.result,h=d["delete"](c);h.onsuccess=function(){O(a,e)};h.onerror=function(){O(a,h.error,!0)}};e.onerror=function(b){b.preventDefault();O(a,e.error,!0)}};l.Ka=function(a,b,c){var d=a.a.objectStore(b)["delete"](c);d.onsuccess=function(){O(a,void 0)};d.onerror=function(b){b.preventDefault();O(a,d.error,!0)}};
l.Va=function(a,b,c,d){var e=[],f=a.a.objectStore(b).index(c).openCursor(d),g=0;f.onsuccess=function(b){var c=b.target.result;if(c){var d=c["delete"]();d.onsuccess=function(){g++;c["continue"]()};d.onerror=function(a){e.push(d.error);a.preventDefault();c["continue"]()}}else 0<e.length?O(a,e,!0):O(a,g)};f.onerror=function(b){b.preventDefault();O(a,f.error,!0)}};
l.ra=function(a,b){for(var c=b.length,d=0,e=0;e<c;e++){var f=a.a.objectStore(b[e]).clear();f.onsuccess=function(){d++;d==c&&O(a,d)};f.onerror=function(b){d++;b.preventDefault();d==c&&O(a,f.error,!0)}}};
l.xa=function(a,b,c){var d=a.a.objectStore(b),e=d.get(c);e.onsuccess=function(b){var c=b.target.result;if(!d.keyPath&&0==d.indexNames.length&&Bb&&y(c)&&0<=c.indexOf(";base64,")){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substr(1,c.length-2));c=c.split(";base64,");b=c[0].split(":")[1];for(var c=window.atob(c[1]),e=c.length,k=new Uint8Array(e),m=0;m<e;++m)k[m]=c.charCodeAt(m);O(a,new Blob([k.buffer],{type:b}))}else O(a,b.target.result)};e.onerror=function(b){b.preventDefault();O(a,e.error,!0)}};
l.Qa=function(a,b,c){function d(b){if(null==c[b])if(f++,e[b]=void 0,f==h)O(a,e);else{var m=b+10;m<h&&d(m)}var p;p=g.get(c[b]);p.onsuccess=function(c){f++;e[b]=c.target.result;f==h?O(a,e):(c=b+10,c<h&&d(c))};p.onerror=function(b){f++;b.preventDefault();O(a,p.error,!0)}}var e=[];e.length=c.length;var f=0,g=a.a.objectStore(b),h=c.length;if(0<h)for(b=0;10>b&&b<h;b++)d(b);else O(a,[])};
l.Ra=function(a,b){function c(f){var h=b[f],k=a.a.objectStore(h.g()).get(h.a);k.onsuccess=function(h){e++;d[f]=h.target.result;e==b.length?O(a,d):(h=f+10,h<b.length&&c(h))};k.onerror=function(b){e++;b.preventDefault();O(a,k.error,!0)}}var d=[];d.length=b.length;var e=0;if(0<b.length)for(var f=0;10>f&&f<b.length;f++)c(f);else O(a,[])};
l.Ma=function(a,b,c,d){b=a.a.objectStore(b);c&&gc(c);var e;null!=d?(d=b.index(d),e=null!=c?d.count(c):d.count()):e=null!=c?b.count(c):b.count();e.onsuccess=function(b){O(a,b.target.result)};e.onerror=function(b){b.preventDefault();O(a,e.error,!0)}};
l.ca=function(a,b,c,d,e,f,g,h,k,m){var p=[],n=a.a.objectStore(c),s=h?k?"prevunique":"prev":k?"nextunique":"next";c=Ib(a)+" "+b+" "+c+(d?":"+d:"")+(e?gc(e):"");h&&(c+=" reverse");k&&(c+=" unique");if(m&&r(m[0])){k=d?!r(m[1]):!0;var t=m[0],u=e?e.lower:void 0,v=e?e.upper:void 0,B=e?!!e.lowerOpen:!1;e=e?!!e.upperOpen:!1;e=gb(h?new M(u,t,B,k):new M(t,v,k,e));c+=" starting from "+gc(m[0]);r(m[1])&&(c+=", "+gc(m[1]))}var z;z=1==b||2==b||3==b?d?n.index(d).openKeyCursor(e,s):n.openCursor(e,s):d?n.index(d).openCursor(e,
s):n.openCursor(e,s);var A=!1;z.onsuccess=function(c){if(c=c.target.result){if(!A){if(0<g){A=!0;c.advance(g);return}if(m&&d&&r(m[0]))if(r(m[1])){var e=Ka.cmp(c.key,m[0]),k=h?-1:1;if(0==e){e=Ka.cmp(c.primaryKey,m[1]);if(0==e){A=!0;c["continue"]();return}if(e==k)A=!0;else{c["continue"]();return}}else A=!0}else A=!0;else A=!0}1==b?p.push(c.key):2==b?p.push(c.primaryKey):3==b?(k={},d&&(k[d]=c.key),n.keyPath?k[n.keyPath]=c.primaryKey:k._ROWID_=c.primaryKey,p.push(k)):4==b?p.push(c.value):p.push([c.key,
c.primaryKey,c.value]);if(p.length<f)c["continue"]();else m&&(m[0]=fb(c.key),m[1]=fb(c.primaryKey)),O(a,p)}else m&&(m[0]=void 0,m[1]=void 0),O(a,p)};z.onerror=function(b){b.preventDefault();O(a,z.error,!0)}};function pd(a,b){this.a=b}F(pd,Hd);pd.prototype.b=function(a,b,c,d){b=R(this.a,c);return new Gd(a,0,b,d)};function Id(){this.a=!1}Id.prototype.a=!1;function Jd(a,b,c,d){Jc.call(this,a,0,c,d);this.l=this.c=this.b=void 0;this.f=this.e=null;this.m=new Id;this.Ea=this.$=null}F(Jd,Jc);l=Jd.prototype;l.ya=function(){return!!this.i};l.update=function(a){Kd(this.Ea,this.N(),a);return Ea()};l.advance=function(a){function b(b){d++;if(!b||d>=a)return Ld(c,b)}var c=this,d=this.e?-1:0;this.reverse?Md(this.$,b,this.e):Nd(this.$,b,this.e)};
l.ha=function(a){if(null!=a){var b=this,c=new Y(a),d=function(c){b.e=c;if(!c)return Ld(b,c);var d=L(c.value.key,a);if(b.reverse){if(1!=d)return Ld(b,c)}else if(-1!=d)return Ld(b,c)};this.reverse?Md(this.$,d,c):Nd(this.$,d,c)}else this.advance(1)};function Od(a){setTimeout(function(){a.m.a?(a.m.a=!1,a.I(a.b,a.c,a.l),Od(a)):(a.f(),a.f=null)},4)}
function Ld(a,b){if(a.e=b){var c=b.value;if(a.n)if(a.reverse||null==a.n.upper)a.reverse&&null!=a.n.lower&&(d=L(c.key,a.n.lower),-1==d||0==d&&a.n.lowerOpen)&&(a.e=null);else{var d=L(c.key,a.n.upper);if(1==d||0==d&&a.n.upperOpen)a.e=null}if(a.e){if(a.unique&&null!=a.b&&null!=c.key&&0==L(a.b,c.key))return;a.b=c.key;a.c=a.d?c.a:a.b;4==a.r&&(a.ja?a.l=a.c:a.l=Pd(a.Ea,a.c))}}a.e||(a.b=void 0,a.c=void 0,a.l=void 0);return a.m.a=!0}
l.openCursor=function(a,b){var c=null;if(this.n)if(this.reverse){var d=this.d?"\uffff":void 0;null!=this.n.upper&&(c=new Y(this.n.upper,d))}else null!=this.n.lower&&(c=new Y(this.n.lower));null!=a&&(c=this.d?new Y(a,b):new Y(a));this.f=this.i.h(function(b){function d(b){var e=b.value,f=e.key;if(b&&null!=f)if(null!=a){if(0==Qd(c,e))return}else if(this.n&&(!this.reverse&&this.n.lowerOpen&&null!=this.n.lower&&(e=L(f,this.n.lower),0==e)||this.reverse&&this.n.upperOpen&&null!=this.n.upper&&(e=L(f,this.n.upper),
0==e)))return;return Ld(this,b)}this.Ea=Rd(b,this.K);this.$=Sd(this.Ea,this.Q);this.reverse?Md(this.$,E(d,this),c):Nd(this.$,E(d,this),c);Od(this)},this)};l.clear=function(){throw null;};l.oa=function(){throw null;};function Td(a,b,c){a=["ydn.db",a];r(b)&&(a.push(b),r(c)&&(a.push(c),r(void 0)&&a.push(Oa(void 0))));return a.join("^|")};function Y(a,b){this.key=a;this.a=b}function Qd(a,b){var c=L(a.key,b.key);return 0===c?null!=a.a?null!=b.a?L(a.a,b.a):1:null!=b.a?-1:0:c};function Ud(a){this.w=a||Vd}function Vd(a,b){return String(a)<String(b)?-1:String(a)>String(b)?1:0}l=Ud.prototype;l.u=null;l.w=null;l.T=null;l.S=null;
l.add=function(a){if(null==this.u)return this.S=this.T=this.u=new Wd(a),!0;var b=null;Xd(this,function(c){var d=null;0<this.w(c.value,a)?(d=c.left,null==c.left&&(b=new Wd(a,c),c.left=b,c==this.T&&(this.T=b))):0>this.w(c.value,a)&&(d=c.right,null==c.right&&(b=new Wd(a,c),c.right=b,c==this.S&&(this.S=b)));return d});b&&(Xd(this,function(a){a.count++;return a.parent},b.parent),Yd(this,b.parent));return!!b};
function Zd(a,b){Xd(a,function(a){var d=null;0<this.w(a.value,b)?d=a.left:0>this.w(a.value,b)?d=a.right:$d(this,a);return d})}l.clear=function(){this.S=this.T=this.u=null};l.contains=function(a){var b=!1;Xd(this,function(c){var d=null;0<this.w(c.value,a)?d=c.left:0>this.w(c.value,a)?d=c.right:b=!0;return d});return b};function Xd(a,b,c){for(c=c?c:a.u;c&&null!=c;)c=b.call(a,c)}
function Yd(a,b){Xd(a,function(a){var b=a.left?a.left.height:0,e=a.right?a.right.height:0;1<b-e?(a.left.right&&(!a.left.left||a.left.left.height<a.left.right.height)&&ae(this,a.left),be(this,a)):1<e-b&&(a.right.left&&(!a.right.right||a.right.right.height<a.right.left.height)&&be(this,a.right),ae(this,a));b=a.left?a.left.height:0;e=a.right?a.right.height:0;a.height=Math.max(b,e)+1;return a.parent},b)}
function ae(a,b){ce(b)?(b.parent.left=b.right,b.right.parent=b.parent):de(b)?(b.parent.right=b.right,b.right.parent=b.parent):(a.u=b.right,a.u.parent=null);var c=b.right;b.right=b.right.left;null!=b.right&&(b.right.parent=b);c.left=b;b.parent=c;c.count=b.count;b.count-=(c.right?c.right.count:0)+1}
function be(a,b){ce(b)?(b.parent.left=b.left,b.left.parent=b.parent):de(b)?(b.parent.right=b.left,b.left.parent=b.parent):(a.u=b.left,a.u.parent=null);var c=b.left;b.left=b.left.right;null!=b.left&&(b.left.parent=b);c.right=b;b.parent=c;c.count=b.count;b.count-=(c.left?c.left.count:0)+1}
function $d(a,b){if(null!=b.left||null!=b.right){var c=null,d;if(null!=b.left){d=ee(a,b.left);Xd(a,function(a){a.count--;return a.parent},d);if(d!=b.left){if(d.parent.right=d.left)d.left.parent=d.parent;d.left=b.left;d.left.parent=d;c=d.parent}d.parent=b.parent;d.right=b.right;d.right&&(d.right.parent=d);b==a.S&&(a.S=d)}else{d=fe(a,b.right);Xd(a,function(a){a.count--;return a.parent},d);if(d!=b.right){if(d.parent.left=d.right)d.right.parent=d.parent;d.right=b.right;d.right.parent=d;c=d.parent}d.parent=
b.parent;d.left=b.left;d.left&&(d.left.parent=d);b==a.T&&(a.T=d)}d.count=b.count;ce(b)?b.parent.left=d:de(b)?b.parent.right=d:a.u=d;Yd(a,c?c:d)}else Xd(a,function(a){a.count--;return a.parent},b.parent),ce(b)?(b.parent.left=null,b==a.T&&(a.T=b.parent),Yd(a,b.parent)):de(b)?(b.parent.right=null,b==a.S&&(a.S=b.parent),Yd(a,b.parent)):a.clear()}function fe(a,b){if(!b)return a.T;var c=b;Xd(a,function(a){var b=null;a.left&&(b=c=a.left);return b},b);return c}
function ee(a,b){if(!b)return a.S;var c=b;Xd(a,function(a){var b=null;a.right&&(b=c=a.right);return b},b);return c}function Wd(a,b){this.value=a;this.parent=b?b:null;this.count=1}Wd.prototype.left=null;Wd.prototype.right=null;Wd.prototype.height=1;function de(a){return!!a.parent&&a.parent.right==a}function ce(a){return!!a.parent&&a.parent.left==a};function ge(a){this.w=a||Vd}F(ge,Ud);function Nd(a,b,c){if(a.u){var d;if(c instanceof Wd)d=c;else if(c){if(Xd(a,function(a){var b=null;0<this.w(a.value,c)?(b=a.left,d=a):0>this.w(a.value,c)?b=a.right:d=a;return b}),!d)return}else d=fe(a);a=d;for(var e=d.left?d.left:d;null!=a;)if(null!=a.left&&a.left!=e&&a.right!=e)a=a.left;else{if(a.right!=e&&b(a))return;var f=a;a=null!=a.right&&a.right!=e?a.right:a.parent;e=f}b(null)}}
function Md(a,b,c){if(a.u){var d;if(c instanceof Wd)d=c;else if(c){if(Xd(a,E(function(a){var b=null;0<this.w(a.value,c)?b=a.left:(0>this.w(a.value,c)&&(b=a.right),d=a);return b},a)),!d)return}else d=ee(a);a=d;for(var e=d.right?d.right:d;null!=a;)if(null!=a.right&&a.right!=e&&a.left!=e)a=a.right;else{if(a.left!=e&&b(a))return;var f=a;a=null!=a.left&&a.left!=e?a.left:a.parent;e=f}b(null)}};function he(a,b,c){this.e=a;this.storage=b;this.b=c;this.a={};a=this.b.keyPath;this.c=w(a)?a.join(","):a||"_ROWID_";this.a[this.c]=null;this.d=Td(this.e,this.b.getName(),this.c)+"^|"}
function Sd(a,b){var c=b||a.c;if(!a.a[c]){a.a[c]=new ge(Qd);for(var d=a.storage.length,e=0;e<d;e++){var f=a.storage.key(e);if(null!==f&&0==f.lastIndexOf(a.d,0)){var g=Ra(f.substr(a.d.length));if(c==a.c)a.a[c].add(new Y(g));else{var h=a.storage.getItem(f);if(null!==h)if(f=Xb(a.b,c),h=qc(h),h=Nb(f,h),f.multiEntry){if(w(h))for(f=0;f<h.length;f++)a.a[c].add(new Y(h[f],g))}else a.a[c].add(new Y(h,g))}}}}return a.a[c]}
function ie(a,b,c){for(var d in a.a){var e=a.a[d];if(e)if(d==a.c)Zd(e,new Y(b));else{var f=Xb(a.b,d),f=La(c,f.keyPath);Zd(e,new Y(b,f))}}}function je(a){for(var b in a.a){var c=a.a[b];c&&c.clear()}a.a={}}
function Kd(a,b,c,d){if(null==b&&(a.b.keyPath&&(b=cc(a.b,c)),a.b.b&&null==b)){b=a.d+Oa(void 0);var e=qc(a.storage.getItem(b));e.key_count||(e.key_count=0);e.key_count++;a.storage.setItem(b,gc(e));b=e.key_count}d&&(d=null!==a.storage.getItem(a.d+Oa(b)));if(d)return null;a.storage.setItem(a.d+Oa(b),gc(c));d=b;for(var f in a.a)if(e=a.a[f])if(f==a.c)e.add(new Y(d));else{var g=Xb(a.b,f),g=La(c,g.keyPath);null!=g&&e.add(new Y(d,g))}return b}
function ke(a,b){var c=a.d+Oa(b),d=a.storage.getItem(c);if(null===d)return 0;a.storage.removeItem(c);c=qc(d);ie(a,b,c);return 1}he.prototype.clear=function(){je(this);le(this)};function Pd(a,b){var c=a.storage.getItem(a.d+Oa(b)),d=void 0;if(null!==c)for(var d=qc(c),c=0,e=a.b.a.length;c<e;c++){var f=a.b.index(c);if("DATE"==f.type){var g=Nb(f,d);g&&Ob(f,d,new Date(g))}}return d}he.prototype.getName=function(){return this.b.getName()};
function me(a,b,c){b=b||a.c;a=Sd(a,b);var d=null,e=null,f=0,g=!1,h=!1;null!=c&&(null!=c.lower&&(d=new Y(c.lower)),null!=c.upper&&(e=new Y(c.upper)),g=c.lowerOpen,h=c.upperOpen);Nd(a,function(a){if(null!=a&&(a=a.value,!g||null==d||0!=L(a.key,d.key))){if(null!=e&&(a=L(a.key,e.key),1===a||0===a&&h))return!0;f++}},d);return f}
function le(a,b){var c=Sd(a,a.c),d=null,e=null,f=0,g=[],h=[],k=!1,m=!1;null!=b&&(null!=b.lower&&(d=new Y(b.lower)),null!=b.upper&&(e=new Y(b.upper)),k=b.lowerOpen,m=b.upperOpen);Nd(c,function(b){if(null!=b&&(b=b.value,!k||null==d||0!=Qd(b,d))){if(null!=e){var c=Qd(b,e);if(1===c||0===c&&m)return!0}var c=a.d+Oa(b.key),s=a.storage.getItem(c);null!==s&&(a.storage.removeItem(c),f++,10>g.length&&(g.push(b.key),h.push(qc(s))))}},d);if(10>g.length)for(c=0;c<g.length;c++)ie(a,g[c],h[c]);else je(a);return f}
function ne(a,b,c,d,e,f,g,h,k){function m(c){if(c&&(B++,!(B<g))){var d=c.value;if(e){if(A&&null!=v&&(c=s?Qd(d,v):L(d.key,v.key),0==c))return;if(null!=u&&(c=s?Qd(d,u):L(d.key,u.key),-1==c||0==c&&z))return k&&(k[0]=void 0,k[1]=void 0),!0}else{if(z&&null!=u&&(c=s?Qd(d,u):L(d.key,u.key),0==c))return;if(null!=v&&(c=s?Qd(d,v):L(d.key,v.key),1==c||0==c&&A))return k&&(k[0]=void 0,k[1]=void 0),!0}c=d.key;if(!h||!t||null==n||0!=L(n,c)){d=t?d.a:c;if(2==b)p.push(d);else if(1==b)p.push(c);else if(3==b)p.push([c,
d]);else if(4==b){var m=Pd(a,d);p.push(m)}else p.push([c,d,Pd(a,d)]);k&&(k[0]=c,k[1]=d)}n=c;if(r(f)&&p.length>=f)return!0}}var p=[],n,s=!!k&&null!=k[0];c=c||a.c;var t=c!=a.c;c=Sd(a,c);var u=null,v=null;r(g)||(g=0);var B=-1,z=!1,A=!1;null!=d&&(null!=d.lower&&(u=t&&e?new Y(d.lower,"\uffff"):new Y(d.lower)),null!=d.upper&&(v=t&&!e?new Y(d.upper,"\uffff"):new Y(d.upper)),z=!!d.lowerOpen,A=!!d.upperOpen);if(s){e?A=!0:z=!0;d=k[0];var K=r(k[1])?k[1]:"\uffff";e?v=t?new Y(d,K):new Y(d):u=t?new Y(d,K):new Y(d)}e?
Md(c,m,v):Nd(c,m,u);return p}he.prototype.ob=function(a,b){return ne(this,2,a,b,void 0,void 0,void 0)};function oe(){this.clear()}l=oe.prototype;l.La=function(){return this};l.setItem=function(a,b){r(this.a[a])||(this.keys.push(a.toString()),this.length=this.keys.length);this.a[a]=b};l.getItem=function(a){return r(this.a[a])?this.a[a]:null};l.removeItem=function(a){delete this.a[a];var b=this.keys;a=qa(b,a.toString());0<=a&&pa.splice.call(b,a,1);this.length=this.keys.length};l.length=0;l.key=function(a){a=this.keys[a];return r(a)?this.a[a]:null};
l.clear=function(){this.a={};this.keys=[];this.length=0};function pe(a){this.f=a||new oe;this.e={}}function Rd(a,b){var c=R(a.a,b);if(c)a.e[b]||(a.e[b]=new he(a.d,a.c,c));else throw null;return a.e[b]}pe.prototype.F=function(a){var b=this;setTimeout(function(){var c=Td(b.d),c=b.c.getItem(c),c=new uc(c);a(c)},10)};function qe(a,b){this.b=a;this.a=b}qe.prototype.h=function(a,b){var c=this.b;setTimeout(function(){a.call(b,c)},4);var d=this;return function(){d.a("complete",null);d.a=null;d.b=null}};function re(a,b){this.a=b}F(re,ed);l=re.prototype;l.Ta=function(a,b,c){this.R(a,!0,!1,null,b,c)};l.R=function(a,b,c,d,e,f){var g=a.a.h(function(h){var k;if(c)k=Rd(h,d),h=f?f[0]:void 0,h=Kd(k,h,e[0],!b),null!=h?O(a,h):(k=new Yc(""),O(a,k,!0));else{for(var m=d,p=[],n=!1,s=f||{},t=0;t<e.length;t++){var u;d?u=s[t]:(m=f[t],u=m.a,m=m.g());k&&k.getName()==m||(k=Rd(h,m));u=Kd(k,u,e[t],!b);null!=u?p.push(u):(n=!0,p.push(new Yc))}O(a,p,n)}g();g=null},this)};l.Ua=function(){throw null;};
l.xa=function(a,b,c){var d=a.a.h(function(e){e=Pd(Rd(e,b),c);O(a,e);d();d=null},this)};function se(a,b,c,d){var e=b.a.h(function(a){for(var g=[],h=c,k,m=0;m<d.length;m++){var p=d[m];p instanceof eb&&(h=p,p=h.a,h=h.g());k&&k.getName()==h||(k=Rd(a,h));p=Pd(k,p);g[m]=p}O(b,g,!1);e();e=null},a)}l.Qa=function(a,b,c){se(this,a,b,c)};l.Ra=function(a,b){se(this,a,null,b)};l.Ca=function(a,b,c){var d=a.a.h(function(e){e=ke(Rd(e,b),c);O(a,e);d();d=null},this)};
l.Wa=function(a,b){var c,d=0,e=a.a.h(function(f){for(var g=0;g<b.length;g++){var h=b[g].g(),k=b[g].a;c&&c.getName()==h||(c=Rd(f,h));d+=ke(c,k)}O(a,d);e();e=null},this)};l.Ka=function(a,b,c){this.Da(a,b,c)};l.Da=function(a,b,c){c&&gc(c);var d=a.a.h(function(e){e=le(Rd(e,b),c);O(a,e);d();d=null},this)};l.Va=function(a,b,c,d){d&&gc(d);var e=a.a.h(function(f){f=Rd(f,b);for(var g=f.ob(c,d),h=g.length,k=0;k<h;k++)ke(f,g[k]);O(a,h);e();e=null},this)};
l.ra=function(a,b){var c=a.a.h(function(d){for(var e=0;e<b.length;e++)Rd(d,b[e]).clear();O(a,b.length);c();c=null},this)};l.ta=function(a,b){var c=a.a.h(function(d){for(var e=[],f=0;f<b.length;f++){var g=Rd(d,b[f]);e.push(me(g))}O(a,e);c();c=null},this)};l.Ma=function(a,b,c,d){var e=a.a.h(function(f){f=me(Rd(f,b),d,c);O(a,f);e();e=null},this)};l.ca=function(a,b,c,d,e,f,g,h,k,m){if(e)try{gc(e)}catch(p){}var n=a.a.h(function(p){p=ne(Rd(p,c),b,d,e,h,f,g,k,m);O(a,p);n();n=null},this)};function rd(a,b){this.a=b}F(rd,re);rd.prototype.b=function(a,b,c,d){b=R(this.a,c);return new Jd(a,0,b,d)};function te(a,b,c,d){Jc.call(this,a,0,c,d);this.X=null;this.e=this.f=void 0}F(te,Jc);l=te.prototype;l.N=function(){return this.e};l.$a=function(a,b,c,d,e){te.s.$a.call(this,a,b,c,d,e);this.X=y(b)?Xb(this.a,b):null};l.pa=function(){return this.m};function ue(a,b){a.f=void 0;a.e=void 0;a.m=void 0;if(r(b))if(D(b)){var c=Pb(b[a.a.e],a.a.type);a.e=c;if(a.d){var d=Xb(a.a,a.Q);a.f=Pb(b[a.Q],d.type)}else a.f=c;a.m=a.ja?c:ve(b,a.a)}else a.m=b}
function we(a,b,c){Xb(a.a,a.Q);var d=[],e=a.Q,f=a.n,g=a.f;if(null!=f){var h=f.lower,k=f.upper,m=f.lowerOpen,f=f.upperOpen;a.reverse?k=null!=k&&-1==L(k,g)?k:g:h=null!=h&&1==L(h,g)?h:g;f=null!=h&&null!=k?M.bound(h,k,!!m,!!f):null!=h?jb.lowerBound(h,!!m):jb.upperBound(k,!!f)}else f=a.reverse?jb.upperBound(g):jb.lowerBound(g);e=Wb(a.a,d,a.r,e,f,a.reverse,a.unique);c=a.reverse?jb.upperBound(c,!1):jb.lowerBound(c,!1);c=Wb(a.a,d,a.r,a.a.e,c,a.reverse,a.unique);e.o=e.o?e.o+(" AND "+c.o):c.o;c="SELECT "+e.select+
" FROM "+e.H+(e.o?" WHERE "+e.o:"")+(e.group?" GROUP BY "+e.group:"")+" ORDER BY "+e.J;a.i.executeSql(c+" LIMIT 1",d,function(c,d){0<d.rows.length?ue(a,d.rows.item(0)):ue(a);b.call(a,a.f,a.e,a.m);b=null},function(c,d){Kc(a,d);ue(a);b.call(a,a.e,a.f,a.m);b=null;return!1})}
function xe(a,b,c,d,e,f){var g=!d;d=[];a.d&&null!=f&&null!=c?c=Zb(a.a,a.r,d,a.X.getName(),a.n,c,g,f,a.reverse,a.unique):null!=c?(f=a.X?a.X.getName():null,c=Yb(a.a,a.r,d,f,a.n,a.reverse,a.unique,c,g)):(c=Vb(a.a,d,a.r,a.d?a.X.d:a.a.e,a.n,a.reverse,a.unique),a.d&&(c+=", "+a.a.c+" ASC"));c+=" LIMIT 1";0<e&&(c+=" OFFSET "+e);a.i.executeSql(c,d,function(c,d){0<d.rows.length?ue(a,d.rows.item(0)):ue(a);b.call(a,a.f,a.e,a.m);b=null},function(c,d){Kc(a,d);ue(a);b.call(a,a.e,a.f,a.m);b=null;return!1})}
l.ya=function(){return!!this.i};l.update=function(a){if(!this.ya())throw new $c;var b=new G,c=this.N();a=fc(this.a,a,c);var d="REPLACE INTO "+Q(this.a)+" ("+a.cb.join(", ")+") VALUES ("+a.ib.join(", ")+")";this.i.executeSql(d,a.D,function(){b.k(c)},function(a,c){b.j(c);return!1});return b};
l.advance=function(a){var b=this.f,c=this.e,d=!0;null==this.f||this.d&&null==this.e||(a-=1,d=!1);xe(this,function(a,d,g){var h=null!=b&&null!=a&&0==L(b,a);if(this.d){var k=null!=d&&null!=c&&0==L(d,c);if(h&&k)throw null;}else if(h)throw null;this.I(a,d,g)},this.f,d,a,this.e)};l.ha=function(a){null!=a?xe(this,this.I,a,!0):this.advance(1)};l.openCursor=function(a,b){xe(this,this.I,a,!1,0,b)};
l.clear=function(){if(!this.ya())throw new $c;var a=new G,b=this.a.e,b="DELETE FROM "+Q(this.a)+" WHERE "+b+" = ?",c=[this.N()];this.i.executeSql(b,c,function(b,c){a.k(c.rowsAffected)},function(b,c){a.j(c);return!1});return a};l.oa=function(a){var b=L(a,this.e);if(0==b||1==b&&this.reverse||-1==b&&!this.reverse)throw new Dc(this+" to continuePrimaryKey  from "+this.e+" to "+a+" on "+this.M+" direction is wrong");we(this,this.I,a)};function ye(a,b){this.a=b}F(ye,ed);
function ve(a,b){if(b.da&&!b.keyPath&&0==b.a.length&&a._default_){var c=a._default_;if(-1==c.indexOf(";base64,"))return qc(c);'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substr(1,c.length-2));for(var d=c.split(";base64,"),c=d[0].split(":")[1],d=window.atob(d[1]),e=d.length,f=new Uint8Array(e),g=0;g<e;++g)f[g]=d.charCodeAt(g);return new Blob([f.buffer],{type:c})}c=a._default_?qc(a._default_):{};null!=b.keyPath&&(d=Pb(a[b.keyPath],b.type),null!=d&&ec(b,c,d));for(d=0;d<b.a.length;d++)e=b.index(d),
f=e.d,"_default_"==f||e.f||e.multiEntry||"DATE"!=e.type&&!b.da||(f=Pb(a[f],e.type),r(f)&&Ob(e,c,f));return c}l=ye.prototype;l.Ua=function(){throw null;};
l.R=function(a,b,c,d,e,f){function g(b,d){if(null==e[b])if(p++,p==e.length)O(a,m,n);else{var u=b+2;u<e.length&&g(u,d)}var v;v=r(f)?fc(h,e[b],f[b]):fc(h,e[b]);u=k+Q(h)+" ("+v.cb.join(", ")+") VALUES ("+v.ib.join(", ")+");";d.executeSql(u,v.D,function(f,u){function A(a,b){var c="ydn.db.me:"+h.getName()+":"+a.getName(),c=k+oa(c)+" ("+h.c+", "+a.c+") VALUES (?, ?)",e=[pb(K,h.type),pb(b,a.type)];d.executeSql(c,e,function(){},function(){return!1})}p++;var K=r(v.key)?v.key:u.insertId;1>u.rowsAffected&&(n=
!0,K=new Yc(K+" no-op"));for(var W=0,ja=h.a.length;W<ja;W++){var kb=h.index(W);if(kb.multiEntry)for(var lb=La(e[b],kb.keyPath),mb=(lb?lb.length:0)||0,nb=0;nb<mb;nb++)A(kb,lb[nb])}c?O(a,K):(m[b]=K,p==e.length?O(a,m,n):(W=b+2,W<e.length&&g(W,f)))},function(d,f){p++;n=!0;6==f.code&&(f.name="ConstraintError");if(c)O(a,f,!0);else if(m[b]=f,p==e.length)O(a,m,n);else{var h=b+2;h<e.length&&g(h,d)}return!1})}b=!b;var h=R(this.a,d),k=b?"INSERT INTO ":"INSERT OR REPLACE INTO ";d=a.a;var m=[],p=0,n=!1;if(0<e.length)for(b=
0;2>b&&b<e.length;b++)g(b,d);else O(a,[])};
l.Ta=function(a,b,c){if(0==c.length)O(a,[]);else{for(var d=[],e=0,f=0,g=this,h=function(h,k){for(var m=[],p=bc(R(g.a,h)),n=p?void 0:[],s=0;s<k.length;s++)m.push(b[k[s]]),p||n.push(c[k[s]].a);p=Fb(a);H(p,function(b){for(var c=0;c<k.length;c++)d[k[c]]=b[c];e++;e==f&&O(a,d)},function(){e++;e==f&&O(a,d,!0)});g.R(p,!1,!1,h,m,n)},k="",m=[],p=[],n=0;n<c.length;n++){var s=c[n].g(),t=c[n].a;s!=k?(f++,0<m.length&&h(k,m),m=[n],p=[t],k=s):(m.push(n),p.push(t))}0<m.length&&h(k,m)}};
l.xa=function(a,b,c){var d=a.a,e=R(this.a,b);b=e.c;c=[pb(c,e.type)];b="SELECT * FROM "+Q(e)+" WHERE "+b+" = ?";d.executeSql(b,c,function(b,c){if(0<c.rows.length){var d=c.rows.item(0);null!=d?(d=ve(d,e),O(a,d)):O(a,void 0)}else O(a,void 0)},function(b,c){O(a,c,!0);return!1})};
l.Qa=function(a,b,c){function d(b,e){var p=h.c,n=[pb(c[b],h.type)],p="SELECT * FROM "+Q(h)+" WHERE "+p+" = ?";e.executeSql(p,n,function(e,m){g++;if(0<m.rows.length){var p=m.rows.item(0);null!=p&&(f[b]=ve(p,h))}else f[b]=void 0;g==c.length?O(a,f):(p=b+10,p<c.length&&d(p,e))},function(e){g++;if(g==c.length)O(a,f);else{var h=b+10;h<c.length&&d(h,e)}return!1})}var e=a.a,f=[],g=0,h=R(this.a,b);if(0<c.length)for(b=0;10>b&&b<c.length;b++)d(b,e);else O(a,[])};
l.Ra=function(a,b){function c(d,h){var p=b[d],n=R(e.a,p.g()),s=w(p.a)?p.a.join("^|"):p.a instanceof Date?+p.a:p.a,p=n.c,s=[pb(s,n.type)],p="SELECT * FROM "+Q(n)+" WHERE "+p+" = ?";h.executeSql(p,s,function(e,h){g++;if(0<h.rows.length){var m=h.rows.item(0);null!=m&&(f[d]=ve(m,n))}else f[d]=void 0;g==b.length?O(a,f):(m=d+10,m<b.length&&c(m,e))},function(b,c){O(a,c,!0);return!1})}var d=a.a,e=this,f=[],g=0;if(0<b.length)for(var h=0;10>h&&h<b.length;h++)c(h,d);else O(a,[])};
l.ra=function(a,b){function c(d,g){function h(a){a="ydn.db.me:"+k.getName()+":"+a.getName();a="DELETE FROM  "+oa(a);g.executeSql(a,[])}var k=R(e.a,b[d]),m="DELETE FROM  "+Q(k);g.executeSql(m,[],function(e){d==b.length-1?O(a,b.length):c(d+1,e)},function(b,c){O(a,c,!0);return!1});for(var m=0,p=k.a.length;m<p;m++){var n=k.index(m);n.multiEntry&&h(n)}}var d=a.a,e=this;0<b.length?c(0,d):O(a,0)};
l.Wa=function(a,b){function c(h){if(h>=b.length)O(a,f,g);else{var k=R(e.a,b[h].g()),m=pb(b[h].a,k.type),p=" WHERE "+k.c+" = ?",n="DELETE FROM "+Q(k)+p;d.executeSql(n,[m],function(){f++;c(h)},function(){g=!0;c(h);return!1});h++;for(var n=function(a){a="ydn.db.me:"+k.getName()+":"+a.getName();a="DELETE FROM  "+oa(a)+p;d.executeSql(a,[m])},s=0,t=k.a.length;s<t;s++){var u=k.index(s);u.multiEntry&&n(u)}}}var d=a.a,e=this,f=0,g=!1;c(0)};
l.Ca=function(a,b,c){function d(a){a="ydn.db.me:"+f.getName()+":"+a.getName();a="DELETE FROM  "+oa(a)+h;e.executeSql(a,[g])}var e=a.a,f=R(this.a,b),g=pb(c,f.type),h=" WHERE "+f.c+" = ?";b="DELETE FROM "+Q(f)+h;e.executeSql(b,[g],function(b,c){O(a,c.rowsAffected)},function(b,c){O(a,c,!0);return!1});b=0;for(c=f.a.length;b<c;b++){var k=f.index(b);k.multiEntry&&d(k)}};l.Ka=function(a,b,c){ze(this,a,b,void 0,c)};l.Da=function(a,b,c){ze(this,a,b,void 0,c)};l.Va=function(a,b,c,d){ze(this,a,b,c,d)};
function ze(a,b,c,d,e){function f(a){a="ydn.db.me:"+h.getName()+":"+a.getName();a="DELETE FROM  "+oa(a)+m;g.executeSql(a,k)}var g=b.a,h=R(a.a,c);a="DELETE FROM "+Q(h);c=[];var k=[],m="";null!=e&&(r(d)?(d=Xb(h,d),ob(d.c,d.type,e,k,c)):ob(h.c,h.type,e,k,c),m=" WHERE "+k.join(" AND "));g.executeSql(a+m,c,function(a,c){O(b,c.rowsAffected)},function(a,c){O(b,c,!0);return!1});e=0;for(d=h.a.length;e<d;e++)a=h.index(e),a.multiEntry&&f(a)}
l.ta=function(a,b){function c(f){var g="SELECT COUNT(*) FROM "+oa(b[f]);d.executeSql(g,[],function(d,g){var m=g.rows.item(0);e[f]=parseInt(m["COUNT(*)"],10);f++;f==b.length?O(a,e):c(f)},function(b,c){O(a,c,!0);return!1})}var d=a.a,e=[];0==b.length?O(a,0):c(0)};l.Ma=function(a,b,c,d,e){var f=[];b=Vb(R(this.a,b),f,6,d,c,!1,e);a.a.executeSql(b,f,function(b,c){var d;a:{if(d=c.rows.item(0))for(var e in d)if(d.hasOwnProperty(e)){d=d[e];break a}d=void 0}O(a,d)},function(b,c){O(a,c,!0);return!1})};
l.ca=function(a,b,c,d,e,f,g,h,k,m){var p=[],n=R(this.a,c),s=n.e,t=n.type,u=t,v=null!=d&&d!==s?Xb(n,d):null,B=d||s;v&&(u=v.type);c=[];if(m&&r(m[0])){var z=m[0];v&&r(m[1])?(d=m[1],e=Zb(n,b,c,v.getName(),e,z,!0,d,h,k)):e=Yb(n,b,c,d,e,h,k,z,!0)}else e=Vb(n,c,b,B,e,h,k);C(f)&&(e+=" LIMIT "+f);C(g)&&(e+=" OFFSET "+g);gc(c);a.a.executeSql(e,c,function(c,d){for(var e=d.rows.length,f,g=0;g<e;g++)f=d.rows.item(g),2==b?p[g]=Pb(f[s],t):1==b?p[g]=Pb(f[B],u):3==b?p[g]=[Pb(f[B],u),Pb(f[s],t)]:null!=f&&(p[g]=ve(f,
n));m&&f&&(m[0]=Pb(f[B],u),m[1]=Pb(f[s],t));O(a,p)},function(b,c){O(a,c,!0);return!1})};function qd(a,b){this.a=b}F(qd,ye);qd.prototype.b=function(a,b,c,d){b=R(this.a,c);return new te(a,0,b,d)};function Ae(a,b){this.q=null;this.la=b||NaN}l=Ae.prototype;
l.ga=function(a,b){function c(a,c){for(var d=0;d<b.stores.length;d++)Be(a,c,b.stores[d]);for(var e=a.objectStoreNames,f=e.length,d=0;d<f;d++)wc(b,e[d])||a.deleteObjectStore(e[d])}function d(a,b){f.ea||(r(b)?(e.q=null,f.j(b)):(e.q=a,e.q.onabort=function(){},e.q.onerror=function(){},e.q.onversionchange=function(a){if(e.q&&(e.q.onabort=null,e.q.onblocked=null,e.q.onerror=null,e.q.onversionchange=null,!a.defaultPrevented)){e.q.close();e.q=null;var b=Error();b.name=a.type;e.Ha(b)}},f.k(parseFloat(g))))}
var e=this,f=new G,g=void 0,h=b.version,k;k=r(h)?Ka.open(a,h):Ka.open(a);k.onsuccess=function(f){var h=f.target.result;r(g)||(g=h.version);if(b.Aa)e.F(function(e){if(b instanceof yc)for(var f=0;f<e.stores.length;f++)wc(b,e.stores[f].getName())||zc(b,e.stores[f].clone());if(0<xc(b,e,!1,!0).length)if(e=C(h.version)?h.version+1:1,"IDBOpenDBRequest"in q){h.close();var g=Ka.open(a,e);g.onupgradeneeded=function(a){c(a.target.result,g.transaction)};g.onsuccess=function(a){d(a.target.result)};g.onerror=function(){d(null)}}else{var k=
h.setVersion(e+"");k.a=function(a){d(null,a)};k.onsuccess=function(){k.transaction.oncomplete=m;c(h,k.transaction)};var m=function(){var b=Ka.open(a);b.onsuccess=function(a){d(a.target.result)};b.onerror=function(){d(null)}};null!=k.transaction&&(k.transaction.oncomplete=m)}else d(h)},void 0,h);else if(b.version>h.version){var k=h.setVersion(b.version);k.a=function(a){d(null,a)};k.onsuccess=function(){c(h,k.transaction)}}else e.F(function(a){a=xc(b,a,!1,!0);0<a.length?d(null,new Bc("different schema: "+
a)):d(h)},void 0,h)};k.onupgradeneeded=function(a){a=a.target.result;g=NaN;c(a,k.transaction)};k.onerror=function(a){d(null,a)};k.onblocked=function(a){d(null,a)};C(this.la)&&!isNaN(this.la)&&setTimeout(function(){"done"!=k.readyState&&d(null,new dd("connection timeout after "+e.la))},this.la);return f};l.la=18E4;l.Ha=function(){};l.Ya=function(){};l.Sa=function(){};l.ma=function(){return"indexeddb"};l.Ga=function(){return!!this.q};l.q=null;
l.Xa=function(){return this.q?parseFloat(this.q.version):void 0};
l.F=function(a,b,c){c=c||this.q;if(r(b)){if(null===b){if(0==c.objectStoreNames.length){a(new uc(c.version));return}throw new Ac;}c=b.db}else{b=[];for(var d=c.objectStoreNames.length-1;0<=d;d--)b[d]=c.objectStoreNames[d];if(0==b.length){a(new uc(c.version));return}b=c.transaction(b,I)}for(var e=c.objectStoreNames,f=[],g=e.length,d=0;d<g;d++){for(var h=b.objectStore(e[d]),k=[],m=0,p=h.indexNames.length;m<p;m++){var n=h.index(h.indexNames[m]);k[m]=new Kb(n.keyPath,void 0,n.unique,n.multiEntry,n.name)}f[d]=
new Tb(h.name,h.keyPath,h.autoIncrement,void 0,k)}b=new uc(c.version,f);a(b)};
function Be(a,b,c){function d(){var b={autoIncrement:!!c.b};null!=c.keyPath&&(b.keyPath=c.keyPath);return a.createObjectStore(c.getName(),b)}if(a.objectStoreNames.contains(c.getName()))if(b=b.objectStore(c.getName()),Rb(c.keyPath||"",b.keyPath||""))a.deleteObjectStore(c.getName()),b=d();else if(ba(b.autoIncrement)&&ba(c.b)&&b.autoIncrement!=c.b)a.deleteObjectStore(c.getName()),b=d();else{for(var e=b.indexNames,f=0,g=0,h=0,k=0;k<c.a.length;k++){var m=c.index(k),p=!1;if(e.contains(m.getName())){var n=
b.index(m.getName()),s=null!=n.unique&&null!=m.unique&&n.unique!=m.unique,t=null!=n.multiEntry&&null!=m.multiEntry&&n.multiEntry!=m.multiEntry,n=null!=n.keyPath&&null!=m.keyPath&&!!Rb(n.keyPath,m.keyPath);if(s||t||n)b.deleteIndex(m.getName()),p=!0,f--,h++}else"BLOB"!=m.type&&(p=!0);p&&(m.unique||m.multiEntry?(p={unique:m.unique,multiEntry:m.multiEntry},b.createIndex(m.getName(),m.keyPath,p)):b.createIndex(m.getName(),m.keyPath),f++)}for(k=0;k<e.length;k++)$b(c,e[k])||(b.deleteIndex(e[k]),g++)}else for(b=
d(),k=0;k<c.a.length;k++)m=c.index(k),"BLOB"!=m.type&&(m.unique||m.multiEntry?(p={unique:m.unique,multiEntry:m.multiEntry},b.createIndex(m.getName(),m.keyPath,p)):b.createIndex(m.getName(),m.keyPath))}l.va=function(a,b,c,d){var e=this.q;if(!b){b=[];for(var f=e.objectStoreNames.length-1;0<=f;f--)b[f]=e.objectStoreNames[f]}0==b.length?a(null):(b=e.transaction(b,c),b.oncomplete=function(a){d("complete",a)},b.onabort=function(a){d("abort",a)},a(b),a=null)};l.Fa=function(){this.q.close()};
Xa.push(function(a,b){if(!Ka||b&&"indexeddb"!=b)return null;var c=Ka.deleteDatabase(a),d=new N("vc");c.onblocked=function(a){for(var b=0;b<d.b.length;b++)d.b[b][0].call(d.b[b][1],a)};c.onerror=function(a){d.j(a)};c.onsuccess=function(a){d.k(a)};return d});function Ce(a){pe.call(this,a);this.b=NaN}F(Ce,pe);l=Ce.prototype;l.Xa=function(){return this.b};
l.ga=function(a,b){function c(a,b){setTimeout(function(){b?d.j(b):d.k(a)},10)}var d=new G;this.c=this.f.La(a);this.d=a;this.a=b;var e=Td(this.d);this.b=NaN;var f=qc(this.c.getItem(e));r(f.version)&&!C(f.version)&&(f.version=NaN);if(f)if(f=new uc(f),xc(this.a,f,!1,!1))if(!this.a.Aa&&!isNaN(f.version)&&this.a.version>f.version)c(NaN,new Zc(""));else{var g=this.a.version;this.b=r(g)?g:f.version+1;for(g=0;g<this.a.count();g++)var h=this.a.V(g);if(this.a instanceof yc)for(g=0;g<f.count();g++)h=f.V(g),
zc(this.a,h);g=this.a.toJSON();g.version=this.b||NaN;this.c.setItem(e,gc(g));c(f.version||NaN)}else{for(g=0;g<this.a.count();g++)h=this.a.V(g);this.b=f.version||NaN;c(this.b)}else f=b.toJSON(),this.b=1,f.version=this.b,this.c.setItem(e,gc(f)),c(NaN);return d};l.Ga=function(){return!!this.d};l.Ha=function(){};l.Ya=function(){};l.Sa=function(){};l.ma=function(){return"memory"};l.Fa=function(){};l.va=function(a,b,c,d){a(new qe(this,function(a,b){d(a,b)}))};function De(){Ce.call(this,this)}F(De,Ce);De.prototype.La=function(){return window.localStorage};De.prototype.ma=function(){return"localstorage"};Xa.push(function(a,b){if(!b||"localstorage"==b){var c=new De,d=new yc;c.ga(a,d);c.F(function(a){for(var b=0;b<a.stores.length;b++)Rd(c,a.stores[b].getName()).clear()})}});function Ee(){Ce.call(this,this)}F(Ee,Ce);Ee.prototype.La=function(){return window.sessionStorage};Ee.prototype.ma=function(){return"sessionstorage"};
Xa.push(function(a,b){if(!b||"sessionstorage"==b){var c=new Ee,d=new yc;c.ga(a,d);c.F(function(a){for(var b=0;b<a.stores.length;b++)Rd(c,a.stores[b].getName()).clear()})}});function Fe(a){this.a=r(a)?a:4194304}l=Fe.prototype;
l.ga=function(a,b){function c(a,b){var c=a.version?parseInt(a.version,10):0,f=!1,g=0;a.changeVersion(a.version,(b.Aa?isNaN(c)?1:c+1:b.version)+"",function(c){e.F(function(a){f=!0;for(var d=0;d<b.count();d++){var e=R(a,b.V(d).getName()),e=e?ac(e,b.V(d)):null;Ge(c,b.V(d),function(a){a&&g++},e)}for(d=0;d<a.count();d++)e=a.V(d),wc(b,e.getName())||(b instanceof yc?zc(b,e):(e="DROP TABLE "+Q(e),c.executeSql(e,[],function(){},function(a,b){throw b;})))},c,a)},function(a){throw a;},function(){f&&d(a)})}function d(a,
b){r(b)?(e.v=null,g.j(b)):(e.v=a,g.k(parseFloat(f)))}var e=this,f=NaN,g=new G,h=null;try{h=q.openDatabase(a,"",a,this.a)}catch(k){if("SECURITY_ERR"==k.name)h=null,this.Pa=new cd(k);else throw k;}h?(f=h.version,null!=b.version&&b.version==h.version?d(h):this.F(function(a){xc(b,a,!0,!1)?c(h,b):d(h)},null,h)):d(null,this.Pa);return g};l.ma=function(){return"websql"};l.Pa=null;l.v=null;l.Ha=function(){};l.Ya=function(){};
function He(a){var b=a.m,c="CREATE TABLE IF NOT EXISTS "+Q(a)+" (",d=a.c,c=c+(d+" "+b+" PRIMARY KEY ");a.b&&(c+=" AUTOINCREMENT ");if(!a.da||!a.keyPath&&0==a.a.length)c+=" ,_default_ BLOB";for(var e=[],f=[d],g=0,h=a.a.length;g<h;g++){var k=a.index(g),m="";if(k.multiEntry){var m="ydn.db.me:"+a.getName()+":"+k.getName(),p=k.unique?" UNIQUE ":"",k="CREATE TABLE IF NOT EXISTS "+oa(m)+" ("+d+" "+b+", "+k.c+" "+k.i+p+")";e.push(k)}else k.unique&&(m=" UNIQUE "),p=k.keyPath,"BLOB"!=k.type&&y(p)&&(p="CREATE "+
m+" INDEX IF NOT EXISTS "+oa(a.getName()+"-"+k.getName())+" ON "+Q(a)+" ("+oa(p)+")",e.push(p)),p=k.c,-1==f.indexOf(p)&&(c+=", "+p+" "+k.i+m,f.push(p))}e.unshift(c+")");return e}l.Xa=function(){return this.v?parseFloat(this.v.version):void 0};
l.F=function(a,b,c){function d(a,b){throw b;}function e(b,c){if(c&&c.rows){for(var d=0;d<c.rows.length;d++){var e=c.rows.item(d);if("__WebKitDatabaseInfoTable__"!=e.name&&"sqlite_sequence"!=e.name&&"table"==e.type){var f="sql"in e?e.sql:void 0,t=f.substr(f.indexOf("("),f.lastIndexOf(")")).match(/(?:"[^"]*"|[^,])+/g),u=void 0,v,f=[],B=!1,z=!1,A=0;for(;A<t.length;A++){var K=t[A].match(/\w+|"[^"]+"/g),W=ra(K,function(a){return a.toUpperCase()}),ja=la(K[0]),K=Lb(W[1]);if(-1!=W.indexOf("PRIMARY")&&-1!=
W.indexOf("KEY")){v=K;if(y(ja)&&!/^[\s\xa0]*$/.test(ja)&&"_ROWID_"!=ja){var kb=ja.split(","),u=ja;1<kb.length&&(u=kb,v=void 0)}-1!=W.indexOf("AUTOINCREMENT")&&(B=!0)}else if("_ROWID_"!=ja)if("_default_"==ja)z=!0;else{var lb="UNIQUE"==W[2];0==ja.lastIndexOf(e.tbl_name+"-",0)&&(ja=ja.substr(e.tbl_name.length+1));W=new Kb(ja,K,lb);f.push(W)}}if(0==e.name.lastIndexOf("ydn.db.me:",0)){var mb=e.name.split(":");if(3<=mb.length){var nb=mb[1],u=new Kb(mb[2],K,lb,!0),t=ua(f,function(a){return a.getName()==
mb[2]});0<=t?f[t]=u:f.push(u);t=ua(h,function(a){return a.getName()===nb});0<=t?(u=h[t],h[t]=new Tb(u.getName(),u.keyPath,B,v,f,void 0,!z)):h.push(new Tb(nb,void 0,!1,void 0,[u]))}}else A=ua(h,function(a){return a.getName()===e.name}),0<=A?(t=h[A].index(0),f.push(t),h[A]=new Tb(e.name,u,B,v,f,void 0,!z)):(f=new Tb(e.name,u,B,v,f,void 0,!z),h.push(f))}}d=new uc(g,h);a(d)}}var f=this,g=(c=c||this.v)&&c.version?parseFloat(c.version):void 0,g=isNaN(g)?void 0:g,h=[];b?b.executeSql("SELECT * FROM sqlite_master",
[],e,d):c.readTransaction(function(b){f.F(a,b,c)},function(a){throw a;},e)};function Ge(a,b,c,d){function e(b){a.executeSql(b,[],function(){f++;f==g.length&&(c(!0),c=null)},function(a,b){f++;f==g.length&&(c(!1),c=null);throw new bd(b,'"');})}var f=0,g=He(b);if(d){if(0==hc(b,d).length){c(!0);c=null;return}g.unshift("DROP TABLE IF EXISTS "+oa(b.getName()))}for(b=0;b<g.length;b++)e(g[b])}l.Ga=function(){return!!this.v};l.Fa=function(){this.v=null};
l.va=function(a,b,c,d){function e(a){d("abort",a)}function f(){d("complete",{type:"complete"})}function g(b){a(b)}null===this.v&&(a(null),d("abort",this.Pa));c==I?this.v.readTransaction(g,e,f):c==Ja?this.v.changeVersion(this.v.version,this.v.version+1+"",g,e,f):this.v.transaction(g,e,f)};
Xa.push(function(a,b){if(!b||"websql"==b){var c=new Fe,d=new yc,d=c.ga(a,d),e=function(){};d.G(function(){c.va(function(a){a.executeSql('SELECT * FROM sqlite_master WHERE type = "table"',[],function(b,c){if(c&&c.rows)for(var d=c.rows.length,e=0,p=0;p<d;p++){var n=c.rows.item(p);"__WebKitDatabaseInfoTable__"!=n.name&&"sqlite_sequence"!=n.name&&(e++,a.executeSql("DROP TABLE "+n.name))}},function(a,b){throw b;})},[],J,e)});d.ab(function(){})}});Fe.prototype.Sa=function(){};/*
 Copyright 2012 YDN Authors, Yathit. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");.
*/
Dd.prototype.Na=function(a){return"indexeddb"==a&&Ka?new Ae(0,this.m):"websql"==a&&ca(q.openDatabase)?new Fe(this.t):"localstorage"==a&&window.localStorage?new De:"sessionstorage"==a&&window.sessionStorage?new Ee:"memory"==a?new Ce:null};/*
 Copyright 2012 YDN Authors, Yathit. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");.
*/
Dd.prototype.branch=Dd.prototype.lb;Dd.prototype.getTxNo=Dd.prototype.Db;od.prototype.getTxNo=od.prototype.e;Dd.prototype.run=Dd.prototype.tb;Dd.prototype.spawn=Dd.prototype.vb;X.prototype.branch=X.prototype.lb;X.prototype.add=X.prototype.add;X.prototype.get=X.prototype.get;X.prototype.keys=X.prototype.keys;X.prototype.values=X.prototype.D;X.prototype.put=X.prototype.put;X.prototype.clear=X.prototype.clear;X.prototype.remove=X.prototype.Ia;X.prototype.count=X.prototype.count;V.prototype.add=V.prototype.add;V.prototype.get=V.prototype.get;V.prototype.keys=V.prototype.keys;V.prototype.values=V.prototype.D;V.prototype.put=V.prototype.put;V.prototype.clear=V.prototype.clear;
V.prototype.remove=V.prototype.Ia;V.prototype.count=V.prototype.count;ka("ydn.db.Key",eb);eb.prototype.id=eb.prototype.nb;eb.prototype.parent=eb.prototype.wb;eb.prototype.storeName=eb.prototype.g;ka("ydn.db.KeyRange",M);M.upperBound=M.upperBound;M.lowerBound=M.lowerBound;M.bound=M.bound;M.only=M.only;M.starts=ib;ab.prototype.store_name=ab.prototype.K;ab.prototype.getStoreName=ab.prototype.g;function Ie(a,b,c){X.call(this,a,b,c)}F(Ie,Fd);ka("ydn.db.Storage",Ie);function Je(a){this.db=a}function Ke(a,b,c,d){var e=xd(a.db,function(a){var b=a.pa();if(y(c))Ma(b,c,d);else if(w(c))for(var h=0;h<c.length;h++)Ma(b,c[h],d[h]);else if(D(c))for(h in c)c.hasOwnProperty(h)&&(b[h]=c[h]);a=a.update(b);e.G(E(a.rb,a))},b,a);return e}Je.prototype.count=function(a){var b;b=Tc(a)?this.db.count(a):a.d?this.db.count(a.g(),a.a,Rc(a)):this.db.count(a.g(),Rc(a));a.e!=Oc&&b.qa(function(){"busy"!=a.e&&Vc(a)});return b};
Je.prototype.clear=function(a){return a.d?this.db.clear(a.g(),a.a,a.b):this.db.clear(a.g(),a.b)};function Le(a){Wc.call(this,a)}F(Le,Wc);
Le.prototype.b=function(a,b){var c=[],d=b[0];if(null==d)return[];for(var e=!0,f=!1,g=d,h=[],k=1;k<a.length;k++)if(null!=b[k]){var m=L(d,b[k]);h[k]=m;this.a?-1==m?e=!1:1==m&&(e=!1,f=!0,-1==L(b[k],g)&&(g=b[k])):1==m?e=!1:-1==m&&(e=!1,f=!0,1==L(b[k],g)&&(g=b[k]))}else e=!1,f=!0;if(e)for(f=0;f<a.length;f++)null!=b[f]&&(c[f]=!0);else if(f)for(f=0;f<a.length;f++)null!=b[f]&&(this.a?-1==L(g,b[f])&&(c[f]=g):1==L(g,b[f])&&(c[f]=g));else for(k=this.a?-1:1,f=1;f<a.length;f++)h[f]===k&&(c[f]=d);return e?(this.c&&
this.c.push(g),c):{continuePrimary:c}};function Me(a){this.db=a}function Ne(a,b,c){var d=new Le([]),d=wd(a.db,d,c),e=c[0].g(),f=Fb(d);H(d,function(a){2==b?f.k(a):(a=this.db.D(e,a),H(f,a.k,a.j,a))},function(a){f.j(a)},a);return f}Me.prototype.count=function(a){var b;b=Tc(a)?this.db.count(a):a.d?this.db.count(a.g(),a.a,Rc(a)):this.db.count(a.g(),Rc(a));a.e!=Oc&&b.qa(function(){"busy"!=a.e&&Vc(a)});return b};Me.prototype.clear=function(a){return a.d?this.db.clear(a.g(),a.a,a.b):this.db.clear(a.g(),a.b)};function Z(a,b,c,d){this.db=a;this.b=b;this.type=d||0;this.a=w(c)?c:[c];this.c=null}l=Z.prototype;l.xb=function(){for(var a=[],b=0;b<this.a.length;b++)a[b]=Uc(this.a[b]);a=new Z(this.db,this.b,a,this.type);a.c=this.c;a.d=this.d;return a};l.reverse=function(){for(var a=[],b=0;b<this.a.length;b++)a[b]=this.a[b].reverse();return new Z(this.db,this.b,a,this.type)};
l.unique=function(a){if(!ba(a))throw null;if(1<this.a.length)throw null;var b=this.a[0];if(!b.d)throw null;return new Z(this.db,this.b,[b.unique(a)],this.type)};
l.J=function(a){var b=y(a)?[a]:a;if(1!=b.length)throw null;if(1<this.a.length)throw null;a=this.a[0];var c=R(this.b,a.g()),d=Rc(a);if(a.d){if(a.a!=b[0])if(b=[a.a,b[0]],d)if(d.lower==d.upper)d=ib([d.lower]),a=new T(a.g(),b.join(", "),d,Sc(a),Tc(a),a.c,b);else throw null;else a=new T(a.g(),b.join(", "),null,Sc(a),Tc(a),a.c,b)}else if(b[0]!=c.keyPath){if(d)throw null;a=new Qc(a.g(),b[0],null,Sc(a),Tc(a))}return new Z(this.db,this.b,a,this.type)};
l.o=function(a,b,c,d,e){var f=this.a[0];if(f.b)throw null;var f=f.g(),g=R(this.b,f),f=a==g.keyPath?new Pc(f,qb(b,c,d,e)):new Qc(f,a,qb(b,c,d,e));return new Z(this.db,this.b,f,this.type)};
l.select=function(a){var b=R(this.b,this.a[0].g()),c=w(a)?a:[a],d=this.type;a=Uc(this.a[0]);if(1==c.length)if(c=c[0],"_ROWID_"==c||c===b.keyPath)d=2;else if(c&&"*"!=c)if($b(b,c)){if(a.d){if(c!=a.a)throw null;}else a=new T(a.g(),c,Rc(a),Sc(a),Tc(a),!0);d=1}else throw null;else d=4;else if(2==c.length){if(!a.d)throw null;for(d=0;2>d;d++)if("_ROWID_"!=c[d]&&!(r(b.keyPath)&&(1==b.f.length?b.keyPath===c[d]:x(c[d])&&xa(b.f,c[d])))&&c[d]!=a.a)throw null;d=3}else throw null;return new Z(this.db,this.b,a,
d)};l.yb=function(a){var b=4;if(2==this.type||3==this.type||1==this.type)b=this.type;return 1==this.a.length?yd((new Je(this.db)).db,b,this.a[0],a||100):Ne(new Me(this.db),b,this.a)};l.zb=function(a,b){return Ke(new Je(this.db),this.a[0],a,b)};l.count=function(){return(new Je(this.db)).count(this.a[0])};l.clear=function(){return(new Je(this.db)).clear(this.a[0])};
Fd.prototype.H=function(a,b,c,d,e){if(!wc(this.a,a))throw null;var f;if(r(b)){if(!r(c))throw null;f=qb(b,c,d,e)}else if(r(d))throw null;a=new Pc(a,f);return new Z(this.c,this.a,a)};ud.prototype.H=function(a,b,c,d,e){if(!wc(this.b,a))throw null;var f;if(r(b)){if(!r(c))throw null;f=qb(b,c,d,e)}else if(r(d))throw null;a=new Pc(a,f);return new Z(this,this.b,a)};Z.prototype.copy=Z.prototype.xb;Z.prototype.count=Z.prototype.count;Z.prototype.list=Z.prototype.yb;Z.prototype.order=Z.prototype.J;Z.prototype.patch=Z.prototype.zb;Z.prototype.reverse=Z.prototype.reverse;Z.prototype.where=Z.prototype.o;Fd.prototype.from=Fd.prototype.H;ud.prototype.from=ud.prototype.H; 

//# sourceMappingURL=ydn.db-isw-core-qry.js.map
return ydn;}, (this || {}));
            
// Generated by CoffeeScript 1.6.3
(function() {
  var Db, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.data = app.data || {};

  yamvc = window.yamvc;

  Db = yamvc.Core.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Core.apply(this, all);
    return this;
  });

  Db.prototype.init = function() {
    var all, config, opts;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Core.prototype.init.apply(this, all);
    opts = all[0] || {};
    config = opts.config || {};
    this.set('initOpts', opts);
    this.set('config', config);
    this.initConfig();
    if (!this.getName) {
      throw new Error('Database name should be set');
    }
  };

  Db.prototype.connect = function() {
    if (!this.get('connect')) {
      this.set('connect', new ydn.db.Storage(this.getName(), this.getSchema()));
    }
    return this;
  };

  Db.prototype.close = function() {
    this.getConnection().close();
    this.set('connect', null);
    return this;
  };

  Db.prototype.getConnection = function() {
    if (!this.get('connect')) {
      this.connect();
    }
    return this.get('connect');
  };

  Db.prototype.clear = function() {
    return this.getConnection().clear();
  };

  app.data.Db = Db;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Db.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var YdnDb, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.data = app.data || {};

  app.data.proxy = app.data.proxy || {};

  yamvc = window.yamvc;

  YdnDb = yamvc.Core.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Core.apply(this, all);
    return this;
  });

  YdnDb.prototype.init = function() {
    var all, config, opts;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    opts = all[0] || {};
    config = opts.config || {};
    config.idProperty = 'id';
    this.set('initOpts', opts);
    this.set('config', config);
    this.initConfig();
    return this;
  };

  YdnDb.prototype.getStatus = function() {
    return this.get('status');
  };

  YdnDb.prototype.getResponse = function() {
    return this.get('response');
  };

  YdnDb.prototype.read = function(namespace, data, callback) {
    var $set, idProperty, req;
    idProperty = this.getIdProperty();
    if (typeof data[idProperty] === 'object') {
      console.log(idProperty);
    }
    $set = this.set.bind(this);
    req = this.getDb().getConnection().get(namespace, data[idProperty]);
    req.done(function(key) {
      $set('status', 'success');
      data[idProperty] = key;
      $set('response', data);
      return callback();
    });
    req.fail(function(e) {
      $set('status', 'error');
      $set('response', e);
      return callback();
    });
    return this;
  };

  YdnDb.prototype.create = function(namespace, data, callback) {
    var $set, idProperty, req;
    $set = this.set.bind(this);
    idProperty = this.getIdProperty();
    req = this.getDb().getConnection().put({
      name: namespace,
      keyPath: idProperty
    }, data);
    req.done(function(key) {
      $set('status', 'success');
      data[idProperty] = key;
      $set('response', data);
      return callback();
    });
    req.fail(function(e) {
      $set('status', 'error');
      $set('response', e);
      return callback();
    });
    return this;
  };

  YdnDb.prototype.update = function(namespace, data, callback) {
    var $set, req;
    $set = this.set.bind(this);
    req = this.getDb().getConnection().put(namespace, data);
    req.done(function() {
      $set('status', 'success');
      $set('response', data);
      return callback();
    });
    req.fail(function(e) {
      $set('status', 'error');
      $set('response', e);
      return callback();
    });
    return this;
  };

  YdnDb.prototype.destroy = function(namespace, data, callback) {
    var $set, idProperty, req;
    idProperty = this.getIdProperty();
    if (typeof data[idProperty] === 'object') {
      console.log(idProperty);
    }
    $set = this.set.bind(this);
    req = this.getDb().getConnection().remove(namespace, data[idProperty]);
    req.done(function() {
      $set('status', 'success');
      $set('response', {});
      return callback();
    });
    req.fail(function(e) {
      $set('status', 'error');
      $set('response', e);
      return callback();
    });
    return this;
  };

  app.data.proxy.YdnDb = YdnDb;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=ydnDb.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var app, yamvc;

  app = window.app || {};

  yamvc = window.yamvc;

  app.init = function() {
    app.data.db = new app.data.Db({
      config: {
        name: 'culturalMe',
        schema: {
          stores: [
            {
              name: 'incomes',
              keyPath: 'id',
              autoIncrement: true,
              indexes: [
                {
                  keyPath: 'date'
                }
              ]
            }, {
              name: 'expenses',
              keyPath: 'id',
              autoIncrement: true,
              indexes: [
                {
                  keyPath: 'date'
                }
              ]
            }
          ]
        }
      }
    });
    app.layout = new app.views.Layout({
      config: {
        autoCreate: true,
        tpl: 'tpl-layout',
        renderTo: '#container'
      }
    });
    app.income = new app.views.window.AddIncome({
      config: {
        autoCreate: true,
        id: 'add-income',
        tpl: 'tpl-window',
        renderTo: 'body'
      }
    });
    app.income.render();
    app.expense = new app.views.window.AddExpense({
      config: {
        autoCreate: true,
        id: 'add-expense',
        tpl: 'tpl-window',
        renderTo: 'body'
      }
    });
    app.expense.render();
    app.controlles = {
      main: new yamvc.Controller({
        config: {
          name: 'Main',
          views: {
            layout: app.layout
          },
          events: {
            $layout: {
              render: function() {
                app.models.balance.load();
                return setTimeout(function() {
                  return app.mask.hide();
                }, 500);
              }
            },
            '.add-expense a': {
              click: function(view, e) {
                e.preventDefault();
                return this.onExpenseBtnClick();
              }
            },
            '.add-income a': {
              click: function(view, e) {
                e.preventDefault();
                return this.onIncomeBtnClick();
              }
            },
            '[yamvc-id="list-incomes"] a': {
              click: function(view, e) {
                e.preventDefault();
                return this.onListIncomesBtnClick();
              }
            },
            '[yamvc-id="list-expenses"] a': {
              click: function(view, e) {
                e.preventDefault();
                return this.onListExpensesBtnClick();
              }
            }
          }
        },
        onExpenseBtnClick: function() {
          return yamvc.ViewManager.get('add-expense').show();
        },
        onIncomeBtnClick: function() {
          return yamvc.ViewManager.get('add-income').show();
        },
        onListIncomesBtnClick: function() {
          return console.log('list incomes click');
        },
        onListExpensesBtnClick: function() {
          return console.log('list expenses click');
        }
      })
    };
    return this;
  };

  window.app = app;

  yamvc.onReady(app.init);

}).call(this);

/*
//@ sourceMappingURL=main.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Balance, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.models = app.models || {};

  yamvc = window.yamvc;

  Balance = yamvc.Model.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Model.apply(this, all);
    return this;
  });

  Balance.prototype.init = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return yamvc.Model.prototype.init.apply(this, all);
  };

  Balance.prototype.initConfig = function() {
    var all, config, initOpts;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    initOpts = this.get('initOpts');
    initOpts.data = {
      resources: 0,
      expenses: 0,
      available: 0,
      month: 1
    };
    config.namespace = 'balance';
    this.set('initOpts', initOpts);
    return yamvc.Model.prototype.initConfig.apply(this, all);
  };

  Balance.prototype.setRange = function(from, to) {
    this.set('from', from);
    return this.set('to', to);
  };

  Balance.prototype.load = function() {
    var all, balance, date, date2, db, func, me, q;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    me = this;
    balance = 0;
    date = new Date();
    date2 = new Date();
    date.setFullYear(2013, 11, 1);
    date2.setFullYear(2014, 1, 1);
    db = app.data.db.getConnection();
    q = db.from('incomes');
    q.where('date', '>=', date.getTime(), '<', date2.getTime()).list().done(function(incomes) {
      var i, l;
      i = 0;
      l = incomes.length;
      while (i < l) {
        balance += parseFloat(incomes[i].value);
        i++;
      }
      return func();
    });
    func = function() {
      var q2;
      q2 = db.from('expenses');
      return q2.where('date', '>=', date.getTime(), '<', date2.getTime()).list().done(function(incomes) {
        var i, l;
        i = 0;
        l = incomes.length;
        while (i < l) {
          balance -= parseFloat(incomes[i].value);
          i++;
        }
        return me.$set('resources', balance);
      });
    };
    return this;
  };

  Balance.prototype.recaulculate = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  Balance.prototype.all = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  Balance.prototype.getBalance = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  app.models.balance = new Balance;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Balance.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Chart, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.models = app.models || {};

  yamvc = window.yamvc;

  Chart = yamvc.Model.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Model.apply(this, all);
    return this;
  });

  Chart.prototype.init = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return yamvc.Model.prototype.init.apply(this, all);
  };

  Chart.prototype.initConfig = function() {
    var all, config, initOpts;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    initOpts = this.get('initOpts');
    initOpts.data = {
      type: 'AreaChart',
      title: 'Day by day',
      isStacked: true,
      data: [['Day', 'Balance'], ['1', 165], ['2', 135], ['3', 157], ['4', 139], ['5', 136], ['7', 136], ['8', 136], ['9', 136], ['10', 136], ['11', 136], ['12', 136], ['13', 136], ['14', 136], ['15', 136], ['16', 165], ['17', 135], ['18', 457], ['19', 139], ['20', 336], ['21', 136], ['22', 136], ['23', 136], ['24', 136], ['25', 136], ['26', 136], ['27', 136], ['28', 1936], ['29', 2136], ['30', 2136]]
    };
    config.namespace = 'balance';
    this.set('initOpts', initOpts);
    return yamvc.Model.prototype.initConfig.apply(this, all);
  };

  Chart.prototype.setRange = function(from, to) {};

  Chart.prototype.load = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  Chart.prototype.recaulculate = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  Chart.prototype.all = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  Chart.prototype.getChart = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
  };

  app.models.Chart = Chart;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Chart.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Expense, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.models = app.models || {};

  yamvc = window.yamvc;

  Expense = yamvc.Model.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Model.apply(this, all);
    return this;
  });

  Expense.prototype.init = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return yamvc.Model.prototype.init.apply(this, all);
  };

  Expense.prototype.initConfig = function() {
    var all, config, opts;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    opts = this.get('initOpts');
    config.namespace = 'expenses';
    opts.data = opts.data || {};
    opts.data.date = opts.data.date || +(new Date);
    return yamvc.Model.prototype.initConfig.apply(this, all);
  };

  app.models.Expense = Expense;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Expense.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Income, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.models = app.models || {};

  yamvc = window.yamvc;

  Income = yamvc.Model.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.Model.apply(this, all);
    return this;
  });

  Income.prototype.init = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    return yamvc.Model.prototype.init.apply(this, all);
  };

  Income.prototype.initConfig = function() {
    var all, config, opts;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    opts = this.get('initOpts');
    config.namespace = 'incomes';
    opts.data = opts.data || {};
    opts.data.date = opts.data.date || +(new Date);
    return yamvc.Model.prototype.initConfig.apply(this, all);
  };

  app.models.Income = Income;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Income.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Bar, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Bar = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Bar.prototype.init = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.prototype.init.apply(this, all);
    config = this.get('config');
    return config.views = {
      buttonExpense: new app.views.Button({
        config: {
          tpl: 'tpl-button',
          renderTo: '.add-expense',
          models: {
            locale: new yamvc.Model({
              config: {
                namespace: 'locale'
              },
              data: {
                text: 'Add Expense'
              }
            })
          }
        }
      }),
      buttonIncome: new app.views.Button({
        config: {
          tpl: 'tpl-button',
          renderTo: '.add-income',
          models: {
            locale: new yamvc.Model({
              config: {
                namespace: 'locale'
              },
              data: {
                text: 'Add Income'
              }
            })
          }
        }
      })
    };
  };

  app.views.Bar = Bar;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Bar.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Balance, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Balance = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Balance.prototype.init = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.prototype.init.apply(this, all);
    this.bindEvents();
    return this;
  };

  Balance.prototype.bindEvents = function() {
    this.addListener('render', this.bindElements.bind(this));
    this.addListener('render', this.ajustBarsWidth.bind(this));
    this.getModel('balance').addListener('dataExpensesChange', this.updateBalance.bind(this));
    this.getModel('balance').addListener('dataResourcesChange', this.updateBalance.bind(this));
    this.getModel('balance').addListener('dataChange', this.updateBalance.bind(this));
    return this;
  };

  Balance.prototype.bindElements = function() {
    this.set('$resources', this.queryEl('.bar-balance-resources'));
    this.set('$expenses', this.queryEl('.bar-balance-expenses'));
    return this;
  };

  Balance.prototype.updateBalance = function() {
    this.recalculateModel();
    this.partialRender('.bar-balance-resources');
    this.partialRender('.bar-balance-expenses');
    this.partialRender('.bar-balance-current');
    this.ajustBarsWidth();
    return this;
  };

  Balance.prototype.ajustBarsWidth = function() {
    var expenses, expensesLeft, expensesWidth, resources, resourcesLeft, resourcesWidth;
    expenses = this.getModel('balance').$get('expenses');
    resources = this.getModel('balance').$get('resources');
    if (expenses === 0 && resources === 0) {
      expensesWidth = 0;
      resourcesWidth = 100;
      expensesLeft = 0;
      resourcesLeft = 0;
    } else if (expenses >= resources) {
      expensesWidth = 100;
      resourcesWidth = 0;
      expensesLeft = 0;
      resourcesLeft = 0;
    } else {
      expensesWidth = expenses === 0 ? 0 : parseInt(expenses / (resources / 100));
      resourcesWidth = 100 - expensesWidth;
      expensesLeft = 0;
      resourcesLeft = expensesWidth;
    }
    this.get('$resources').style.width = resourcesWidth + "%";
    this.get('$resources').style.left = resourcesLeft + "%";
    this.get('$expenses').style.width = expensesWidth + "%";
    this.get('$expenses').style.left = expensesLeft + "%";
    return this;
  };

  Balance.prototype.recalculateModel = function() {};

  app.views.BarBalance = Balance;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Balance.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Button, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Button = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  app.views.Button = Button;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Button.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Chart, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Chart = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Chart.prototype.init = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.prototype.init.apply(this, all);
    return this.bindEvents();
  };

  Chart.prototype.initConfig = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    config.models = {
      chart: new app.models.Chart
    };
    return yamvc.View.prototype.initConfig.apply(this, all);
  };

  Chart.prototype.bindEvents = function() {
    return this.addListener('render', this.initChart.bind(this));
  };

  Chart.prototype.initChart = function() {
    var chart;
    chart = new google.visualization[this.getModel('chart').$get('type')](this.queryEl('.chart-container'));
    chart.draw(google.visualization.arrayToDataTable(this.getModel('chart').$get('data')), {
      title: this.getModel('chart').$get('title'),
      width: this.queryEl('.chart-container').offsetWidth,
      height: this.queryEl('.chart-container').offsetHeight,
      vAxis: {
        title: this.getModel('chart').$get('titlevAxis')
      },
      hAxis: {
        title: this.getModel('chart').$get('titlehAxis')
      }
    });
    return this.set('chart', chart);
  };

  app.views.Chart = Chart;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Chart.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Layout, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Layout = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Layout.prototype.init = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.prototype.init.apply(this, all);
    config = this.get('config');
    return config.views = {
      barBalance: new app.views.BarBalance({
        config: {
          id: 'current-balance',
          tpl: 'tpl-bar-balance',
          renderTo: '.balance-container',
          models: {
            locale: new yamvc.Model({
              config: {
                namespace: 'locale'
              },
              data: {
                legend: 'Legend',
                expenses: 'expenses',
                resources: 'resources',
                currentBalance: 'Current balance'
              }
            }),
            balance: app.models.balance
          }
        }
      }),
      barActions: new app.views.Bar({
        config: {
          id: 'action-bar',
          tpl: 'tpl-bar-action',
          renderTo: '.layout-action-bar'
        }
      }),
      menu: new app.views.Menu({
        config: {
          id: 'menu',
          tpl: 'tpl-menu',
          renderTo: '.menu'
        }
      }),
      chart: new app.views.Chart({
        config: {
          id: 'dailyChart',
          tpl: 'tpl-chart',
          renderTo: '.container'
        }
      })
    };
  };

  app.views.Layout = Layout;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Layout.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Mask, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Mask = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Mask.prototype.show = function() {
    var style;
    style = this.get('el').style;
    return style.display = 'table';
  };

  Mask.prototype.hide = function() {
    var style;
    style = this.get('el').style;
    return style.display = 'none';
  };

  app.views.Mask = Mask;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Mask.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Menu, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Menu = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    return this;
  });

  Menu.prototype.init = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.prototype.init.apply(this, all);
    config = this.get('config');
    return config.views = {
      buttonIncomes: new app.views.Button({
        config: {
          id: 'list-incomes',
          tpl: 'tpl-button',
          renderTo: '.menu-action',
          models: {
            locale: new yamvc.Model({
              config: {
                namespace: 'locale'
              },
              data: {
                text: 'List all incomes'
              }
            })
          }
        }
      }),
      buttonExpenses: new app.views.Button({
        config: {
          id: 'list-expenses',
          tpl: 'tpl-button',
          renderTo: '.menu-action',
          models: {
            locale: new yamvc.Model({
              config: {
                namespace: 'locale'
              },
              data: {
                text: 'List all expenses'
              }
            })
          }
        }
      })
    };
  };

  app.views.Menu = Menu;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Menu.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var Window, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  yamvc = window.yamvc;

  Window = yamvc.View.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    yamvc.View.apply(this, all);
    this.bindEvents();
    return this;
  });

  Window.prototype.bindEvents = function() {
    this.addListener('render', this.resize.bind(this));
    this.addListener('render', this.bindClose.bind(this));
    return this.addListener('render', this.bindDOMEvents.bind(this));
  };

  Window.prototype.initConfig = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    config.width = config.width || 400;
    config.height = config.height || 300;
    config.views = config.views || {};
    config.views.close = new app.views.Button({
      config: {
        tpl: 'tpl-button',
        renderTo: '.top-bar',
        models: {
          locale: new yamvc.Model({
            config: {
              namespace: 'locale'
            },
            data: {
              text: 'X'
            }
          })
        }
      }
    });
    config = this.get('config');
    config.height = 200;
    config.views = config.views || {};
    config.views.add = new app.views.Button({
      config: {
        tpl: 'tpl-button',
        renderTo: '.bottom-bar',
        models: {
          locale: new yamvc.Model({
            config: {
              namespace: 'locale'
            },
            data: {
              text: 'Add'
            }
          })
        }
      }
    });
    return yamvc.View.prototype.initConfig.apply(this, all);
  };

  Window.prototype.bindClose = function() {
    var me;
    me = this;
    return this.queryEl('a').addEventListener('click', function(e) {
      e.preventDefault();
      me.hide();
      return this;
    }, true);
  };

  Window.prototype.bindDOMEvents = function() {
    this.queryEl('#form-name').addEventListener('keyup', this.validateName.bind(this));
    this.queryEl('#form-date').addEventListener('keyup', this.validateDate.bind(this));
    this.queryEl('#form-value').addEventListener('keyup', this.validateValue.bind(this));
    return this.queryEl('.bottom-bar a').addEventListener('click', this.processForm.bind(this), false);
  };

  Window.prototype.processForm = function() {};

  Window.prototype.validateName = function() {
    var value;
    value = this.queryEl('#form-name').value;
    if (value && value.length > 3) {
      return this.queryEl('#form-name').setAttribute('class', '');
    } else {
      return this.queryEl('#form-name').setAttribute('class', 'invalid');
    }
  };

  Window.prototype.validateDate = function() {
    var value;
    value = this.queryEl('#form-date').value;
    if (this.parseDate(value)) {
      return this.queryEl('#form-date').setAttribute('class', '');
    } else {
      return this.queryEl('#form-date').setAttribute('class', 'invalid');
    }
  };

  Window.prototype.validateValue = function() {
    var test, value;
    value = this.queryEl('#form-value').value;
    test = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
    if (test.test(value)) {
      return this.queryEl('#form-value').setAttribute('class', '');
    } else {
      return this.queryEl('#form-value').setAttribute('class', 'invalid');
    }
  };

  Window.prototype.resize = function() {
    var style;
    style = this.queryEl('.window-vertical-center').style;
    style.width = this.getWidth() + 'px';
    return style.height = this.getHeight() + 'px';
  };

  Window.prototype.parseDate = function(str) {
    var d, m, matchesNonPadded, matchesPadded, pad;
    pad = function(x) {
      var _ref;
      return ((_ref = ('' + x).length === 2) != null ? _ref : {
        '': '0'
      }) + x;
    };
    m = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
    d = m ? new Date(m[3], m[2] - 1, m[1]) : null;
    matchesPadded = d && (str === [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/'));
    matchesNonPadded = d && (str === [d.getDate(), d.getMonth() + 1, d.getFullYear()].join('/'));
    if (matchesPadded || matchesNonPadded) {
      return d;
    } else {
      return null;
    }
  };

  Window.prototype.show = function() {
    var style;
    style = this.get('el').style;
    return style.display = 'table';
  };

  Window.prototype.hide = function() {
    var style;
    style = this.get('el').style;
    return style.display = 'none';
  };

  app.views.Window = Window;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=Window.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var AddExpense, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  app.views.window = app.views.window || {};

  yamvc = window.yamvc;

  AddExpense = app.views.Window.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    app.views.Window.apply(this, all);
    return this;
  });

  AddExpense.prototype.initConfig = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    config.models = {
      locale: new yamvc.Model({
        config: {
          namespace: 'locale'
        },
        data: {
          name: 'Name',
          date: 'Date',
          value: 'Value',
          exName: 'e.g Book',
          exDate: 'e.g 23/9/2013',
          exValue: 'e.g 25.50'
        }
      }),
      expense: new app.models.Expense({
        config: {
          namespace: 'expenses',
          proxy: new app.data.proxy.YdnDb({
            config: {
              db: app.data.db
            }
          })
        }
      })
    };
    app.views.Window.prototype.initConfig.apply(this, all);
    return this.bindModelEvents();
  };

  AddExpense.prototype.bindEvents = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    app.views.Window.prototype.bindEvents.apply(this, all);
    return this.addListener('render', this.addClass.bind(this));
  };

  AddExpense.prototype.bindModelEvents = function() {
    return this.getModel('expense').addListener('saved', this.afterModelSave.bind(this));
  };

  AddExpense.prototype.processForm = function() {
    var i, inputs, l, results, test;
    test = [];
    inputs = this.queryEls('form input');
    this.validateName();
    this.validateDate();
    this.validateValue();
    results = {};
    i = 0;
    l = inputs.length;
    while (i < l) {
      if (inputs[i].getAttribute('class').search(/invalid/) > -1) {
        test.push(1);
      }
      results[inputs[i].name] = inputs[i].value;
      i++;
    }
    if (test.length === 0) {
      results['date'] = +new Date(this.parseDate(results['date']));
      this.getModel('expense').setData(results);
      app.mask.show();
      this.getModel('expense').save();
    }
    return this;
  };

  AddExpense.prototype.afterModelSave = function() {
    this.queryEl('form').reset();
    app.mask.hide();
    app.models.balance.load();
    return this.hide();
  };

  AddExpense.prototype.addClass = function() {
    var form;
    form = this.queryEl('form');
    form.setAttribute('class', 'add-expenses');
    return form.setAttribute('data-type', 'add-expenses');
  };

  app.views.window.AddExpense = AddExpense;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=AddExpense.map
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var AddIncome, app, yamvc,
    __slice = [].slice;

  app = window.app || {};

  app.views = app.views || {};

  app.views.window = app.views.window || {};

  yamvc = window.yamvc;

  AddIncome = app.views.Window.extend(function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    app.views.Window.apply(this, all);
    return this;
  });

  AddIncome.prototype.initConfig = function() {
    var all, config;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    config = this.get('config');
    config.models = {
      locale: new yamvc.Model({
        config: {
          namespace: 'locale'
        },
        data: {
          name: 'Name',
          date: 'Date',
          value: 'Value',
          exName: 'e.g Salary',
          exDate: 'e.g 23/3/2013',
          exValue: 'e.g 2005.55'
        }
      }),
      income: new app.models.Income({
        config: {
          namespace: 'incomes',
          proxy: new app.data.proxy.YdnDb({
            config: {
              db: app.data.db
            }
          })
        }
      })
    };
    app.views.Window.prototype.initConfig.apply(this, all);
    return this.bindModelEvents();
  };

  AddIncome.prototype.bindEvents = function() {
    var all;
    all = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    app.views.Window.prototype.bindEvents.apply(this, all);
    return this.addListener('render', this.addClass.bind(this));
  };

  AddIncome.prototype.bindModelEvents = function() {
    return this.getModel('income').addListener('saved', this.afterModelSave.bind(this));
  };

  AddIncome.prototype.processForm = function() {
    var i, inputs, l, results, test;
    test = [];
    inputs = this.queryEls('form input');
    this.validateName();
    this.validateDate();
    this.validateValue();
    results = {};
    i = 0;
    l = inputs.length;
    while (i < l) {
      if (inputs[i].getAttribute('class').search(/invalid/) > -1) {
        test.push(1);
      }
      results[inputs[i].name] = inputs[i].value;
      i++;
    }
    if (test.length === 0) {
      results['date'] = +new Date(this.parseDate(results['date']));
      this.getModel('income').setData(results);
      app.mask.show();
      this.getModel('income').save();
    }
    return this;
  };

  AddIncome.prototype.afterModelSave = function() {
    this.queryEl('form').reset();
    app.mask.hide();
    app.models.balance.load();
    return this.hide();
  };

  AddIncome.prototype.addClass = function() {
    var form;
    form = this.queryEl('form');
    form.setAttribute('class', 'add-income');
    return form.setAttribute('data-type', 'add-income');
  };

  app.views.window.AddIncome = AddIncome;

  window.app = app;

}).call(this);

/*
//@ sourceMappingURL=AddIncome.map
*/
