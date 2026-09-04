import{S as Ir,n as Xi}from"./index-DgrW4iJl.js";const za="185",ki={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bh=0,Sl=1,wh=2,ys=1,Ah=2,yr=3,Qn=0,He=1,Ln=2,Nn=0,Vi=1,El=2,bl=3,wl=4,Th=5,ui=100,Rh=101,Ch=102,Ph=103,Dh=104,Lh=200,Ih=201,Nh=202,Uh=203,Wo=204,Xo=205,Fh=206,Oh=207,Bh=208,zh=209,Gh=210,kh=211,Vh=212,Hh=213,Wh=214,$o=0,qo=1,Yo=2,$i=3,Ko=4,Zo=5,Jo=6,jo=7,du=0,Xh=1,$h=2,Mn=0,fu=1,pu=2,mu=3,gu=4,_u=5,xu=6,vu=7,yu=300,pi=301,qi=302,Zs=303,Js=304,Gs=306,Qo=1e3,In=1001,ta=1002,Pe=1003,qh=1004,Hr=1005,Ue=1006,js=1007,di=1008,sn=1009,Mu=1010,Su=1011,Tr=1012,Ga=1013,En=1014,dn=1015,Bn=1016,ka=1017,Va=1018,Rr=1020,Eu=35902,bu=35899,wu=1021,Au=1022,fn=1023,zn=1026,fi=1027,Ha=1028,Wa=1029,mi=1030,Xa=1031,$a=1033,Ms=33776,Ss=33777,Es=33778,bs=33779,ea=35840,na=35841,ia=35842,ra=35843,sa=36196,oa=37492,aa=37496,la=37488,ca=37489,Rs=37490,ua=37491,ha=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,_a=37814,xa=37815,va=37816,ya=37817,Ma=37818,Sa=37819,Ea=37820,ba=37821,wa=36492,Aa=36494,Ta=36495,Ra=36283,Ca=36284,Cs=36285,Pa=36286,Yh=3200,Al=0,Kh=1,Jn="",Ze="srgb",Ps="srgb-linear",Ds="linear",oe="srgb",Ei=7680,Tl=519,Zh=512,Jh=513,jh=514,qa=515,Qh=516,td=517,Ya=518,ed=519,Rl=35044,Cl=35048,Pl="300 es",yn=2e3,Ls=2001;function nd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Is(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function id(){const i=Is("canvas");return i.style.display="block",i}const Dl={};function Ll(...i){const t="THREE."+i.shift();console.log(t,...i)}function Tu(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Tu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=Tu(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){const t=i.join(" ");t in Dl||(Dl[t]=!0,Bt(...i))}function rd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const sd={[$o]:qo,[Yo]:Jo,[Ko]:jo,[$i]:Zo,[qo]:$o,[Jo]:Yo,[jo]:Ko,[Zo]:$i};class ti{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Il=1234567;const wr=Math.PI/180,Cr=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function qt(i,t,e){return Math.max(t,Math.min(e,i))}function Ka(i,t){return(i%t+t)%t}function od(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function ad(i,t,e){return i!==t?(e-i)/(t-i):0}function Ar(i,t,e){return(1-e)*i+e*t}function ld(i,t,e,n){return Ar(i,t,1-Math.exp(-e*n))}function cd(i,t=1){return t-Math.abs(Ka(i,t*2)-t)}function ud(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function hd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function dd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function fd(i,t){return i+Math.random()*(t-i)}function pd(i){return i*(.5-Math.random())}function md(i){i!==void 0&&(Il=i);let t=Il+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gd(i){return i*wr}function _d(i){return i*Cr}function xd(i){return(i&i-1)===0&&i!==0}function vd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function yd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Md(i,t,e,n,r){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),u=o((t+n)/2),d=s((t-n)/2),h=o((t-n)/2),p=s((n-t)/2),x=o((n-t)/2);switch(r){case"XYX":i.set(a*u,l*d,l*h,a*c);break;case"YZY":i.set(l*h,a*u,l*d,a*c);break;case"ZXZ":i.set(l*d,l*h,a*u,a*c);break;case"XZX":i.set(a*u,l*x,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*x,a*c);break;case"ZYZ":i.set(l*x,l*p,a*u,a*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Oe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ci={DEG2RAD:wr,RAD2DEG:Cr,generateUUID:Ji,clamp:qt,euclideanModulo:Ka,mapLinear:od,inverseLerp:ad,lerp:Ar,damp:ld,pingpong:cd,smoothstep:ud,smootherstep:hd,randInt:dd,randFloat:fd,randFloatSpread:pd,seededRandom:md,degToRad:gd,radToDeg:_d,isPowerOfTwo:xd,ceilPowerOfTwo:vd,floorPowerOfTwo:yd,setQuaternionFromProperEuler:Md,normalize:Oe,denormalize:zi},gl=class gl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};gl.prototype.isVector2=!0;let Gt=gl;class Gn{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[o+0],p=s[o+1],x=s[o+2],S=s[o+3];if(d!==S||l!==h||c!==p||u!==x){let m=l*h+c*p+u*x+d*S;m<0&&(h=-h,p=-p,x=-x,S=-S,m=-m);let f=1-a;if(m<.9995){const b=Math.acos(m),E=Math.sin(b);f=Math.sin(f*b)/E,a=Math.sin(a*b)/E,l=l*f+h*a,c=c*f+p*a,u=u*f+x*a,d=d*f+S*a}else{l=l*f+h*a,c=c*f+p*a,u=u*f+x*a,d=d*f+S*a;const b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return t[e]=a*x+u*d+l*p-c*h,t[e+1]=l*x+u*h+c*d-a*p,t[e+2]=c*x+u*p+a*h-l*d,t[e+3]=u*x-a*d-l*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),d=a(s/2),h=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _l=class _l{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),u=2*(a*e-s*r),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Qs.copy(this).projectOnVector(t),this.sub(Qs)}reflect(t){return this.sub(Qs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(qt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_l.prototype.isVector3=!0;let O=_l;const Qs=new O,Nl=new Gn,xl=class xl{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],x=n[8],S=r[0],m=r[3],f=r[6],b=r[1],E=r[4],g=r[7],y=r[2],v=r[5],w=r[8];return s[0]=o*S+a*b+l*y,s[3]=o*m+a*E+l*v,s[6]=o*f+a*g+l*w,s[1]=c*S+u*b+d*y,s[4]=c*m+u*E+d*v,s[7]=c*f+u*g+d*w,s[2]=h*S+p*b+x*y,s[5]=h*m+p*E+x*v,s[8]=h*f+p*g+x*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,x=e*d+n*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return t[0]=d*S,t[1]=(r*c-u*n)*S,t[2]=(a*n-r*o)*S,t[3]=h*S,t[4]=(u*e-r*l)*S,t[5]=(r*s-a*e)*S,t[6]=p*S,t[7]=(n*l-c*e)*S,t[8]=(o*e-n*s)*S,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(to.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(to.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(to.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xl.prototype.isMatrix3=!0;let Vt=xl;const to=new Vt,Ul=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fl=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sd(){const i={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===oe&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Jn?Ds:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ps]:{primaries:t,whitePoint:n,transfer:Ds,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:Ul,fromXYZ:Fl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),i}const Jt=Sd();function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Wi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let bi;class Ed{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bi===void 0&&(bi=Is("canvas")),bi.width=t.width,bi.height=t.height;const r=bi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Un(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let bd=0;class Za{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(eo(r[o].image)):s.push(eo(r[o]))}else s=eo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}let wd=0;const no=new O;class Ge extends ti{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=In,r=In,s=Ue,o=di,a=fn,l=sn,c=Ge.DEFAULT_ANISOTROPY,u=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ji(),this.name="",this.source=new Za(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(no).x}get height(){return this.source.getSize(no).y}get depth(){return this.source.getSize(no).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qo:t.x=t.x-Math.floor(t.x);break;case In:t.x=t.x<0?0:1;break;case ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qo:t.y=t.y-Math.floor(t.y);break;case In:t.y=t.y<0?0:1;break;case ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=yu;Ge.DEFAULT_ANISOTROPY=1;const vl=class vl{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],S=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-S)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+S)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,g=(p+1)/2,y=(f+1)/2,v=(u+h)/4,w=(d+S)/4,_=(x+m)/4;return E>g&&E>y?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=v/n,s=w/n):g>y?g<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(g),n=v/r,s=_/r):y<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),n=w/s,r=_/s),this.set(n,r,s,e),this}let b=Math.sqrt((m-x)*(m-x)+(d-S)*(d-S)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-x)/b,this.y=(d-S)/b,this.z=(h-u)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=qt(this.x,t.x,e.x),this.y=qt(this.y,t.y,e.y),this.z=qt(this.z,t.z,e.z),this.w=qt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=qt(this.x,t,e),this.y=qt(this.y,t,e),this.z=qt(this.z,t,e),this.w=qt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vl.prototype.isVector4=!0;let ve=vl;class Ad extends ti{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Ge(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:Ue,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Za(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends Ad{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ru extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Td extends Ge{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zs=class zs{constructor(t,e,n,r,s,o,a,l,c,u,d,h,p,x,S,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,u,d,h,p,x,S,m)}set(t,e,n,r,s,o,a,l,c,u,d,h,p,x,S,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=S,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zs().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,n=t.elements,r=1/wi.setFromMatrixColumn(t,0).length(),s=1/wi.setFromMatrixColumn(t,1).length(),o=1/wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,p=o*d,x=a*u,S=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+x*c,e[5]=h-S*c,e[9]=-a*l,e[2]=S-h*c,e[6]=x+p*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,p=l*d,x=c*u,S=c*d;e[0]=h+S*a,e[4]=x*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=p*a-x,e[6]=S+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,p=l*d,x=c*u,S=c*d;e[0]=h-S*a,e[4]=-o*d,e[8]=x+p*a,e[1]=p+x*a,e[5]=o*u,e[9]=S-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,p=o*d,x=a*u,S=a*d;e[0]=l*u,e[4]=x*c-p,e[8]=h*c+S,e[1]=l*d,e[5]=S*c+h,e[9]=p*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*u,e[4]=S-h*d,e[8]=x*d+p,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=p*d+x,e[10]=h-S*d}else if(t.order==="XZY"){const h=o*l,p=o*c,x=a*l,S=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+S,e[5]=o*u,e[9]=p*d-x,e[2]=x*d-p,e[6]=a*u,e[10]=S*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rd,t,Cd)}lookAt(t,e,n){const r=this.elements;return Ye.subVectors(t,e),Ye.lengthSq()===0&&(Ye.z=1),Ye.normalize(),Xn.crossVectors(n,Ye),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Ye.x+=1e-4:Ye.z+=1e-4,Ye.normalize(),Xn.crossVectors(n,Ye)),Xn.normalize(),Wr.crossVectors(Ye,Xn),r[0]=Xn.x,r[4]=Wr.x,r[8]=Ye.x,r[1]=Xn.y,r[5]=Wr.y,r[9]=Ye.y,r[2]=Xn.z,r[6]=Wr.z,r[10]=Ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],x=n[2],S=n[6],m=n[10],f=n[14],b=n[3],E=n[7],g=n[11],y=n[15],v=r[0],w=r[4],_=r[8],A=r[12],C=r[1],D=r[5],L=r[9],H=r[13],Y=r[2],z=r[6],W=r[10],k=r[14],X=r[3],J=r[7],et=r[11],nt=r[15];return s[0]=o*v+a*C+l*Y+c*X,s[4]=o*w+a*D+l*z+c*J,s[8]=o*_+a*L+l*W+c*et,s[12]=o*A+a*H+l*k+c*nt,s[1]=u*v+d*C+h*Y+p*X,s[5]=u*w+d*D+h*z+p*J,s[9]=u*_+d*L+h*W+p*et,s[13]=u*A+d*H+h*k+p*nt,s[2]=x*v+S*C+m*Y+f*X,s[6]=x*w+S*D+m*z+f*J,s[10]=x*_+S*L+m*W+f*et,s[14]=x*A+S*H+m*k+f*nt,s[3]=b*v+E*C+g*Y+y*X,s[7]=b*w+E*D+g*z+y*J,s[11]=b*_+E*L+g*W+y*et,s[15]=b*A+E*H+g*k+y*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],p=t[14],x=t[3],S=t[7],m=t[11],f=t[15],b=l*p-c*h,E=a*p-c*d,g=a*h-l*d,y=o*p-c*u,v=o*h-l*u,w=o*d-a*u;return e*(S*b-m*E+f*g)-n*(x*b-m*y+f*v)+r*(x*E-S*y+f*w)-s*(x*g-S*v+m*w)}determinantAffine(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(s*u-a*l)+r*(s*c-o*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],p=t[11],x=t[12],S=t[13],m=t[14],f=t[15],b=e*a-n*o,E=e*l-r*o,g=e*c-s*o,y=n*l-r*a,v=n*c-s*a,w=r*c-s*l,_=u*S-d*x,A=u*m-h*x,C=u*f-p*x,D=d*m-h*S,L=d*f-p*S,H=h*f-p*m,Y=b*H-E*L+g*D+y*C-v*A+w*_;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/Y;return t[0]=(a*H-l*L+c*D)*z,t[1]=(r*L-n*H-s*D)*z,t[2]=(S*w-m*v+f*y)*z,t[3]=(h*v-d*w-p*y)*z,t[4]=(l*C-o*H-c*A)*z,t[5]=(e*H-r*C+s*A)*z,t[6]=(m*g-x*w-f*E)*z,t[7]=(u*w-h*g+p*E)*z,t[8]=(o*L-a*C+c*_)*z,t[9]=(n*C-e*L-s*_)*z,t[10]=(x*v-S*g+f*b)*z,t[11]=(d*g-u*v-p*b)*z,t[12]=(a*A-o*D-l*_)*z,t[13]=(e*D-n*A+r*_)*z,t[14]=(S*E-x*y-m*b)*z,t[15]=(u*y-d*E+h*b)*z,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,x=s*d,S=o*u,m=o*d,f=a*d,b=l*c,E=l*u,g=l*d,y=n.x,v=n.y,w=n.z;return r[0]=(1-(S+f))*y,r[1]=(p+g)*y,r[2]=(x-E)*y,r[3]=0,r[4]=(p-g)*v,r[5]=(1-(h+f))*v,r[6]=(m+b)*v,r[7]=0,r[8]=(x+E)*w,r[9]=(m-b)*w,r[10]=(1-(h+S))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=wi.set(r[0],r[1],r[2]).length();const a=wi.set(r[4],r[5],r[6]).length(),l=wi.set(r[8],r[9],r[10]).length();s<0&&(o=-o),an.copy(this);const c=1/o,u=1/a,d=1/l;return an.elements[0]*=c,an.elements[1]*=c,an.elements[2]*=c,an.elements[4]*=u,an.elements[5]*=u,an.elements[6]*=u,an.elements[8]*=d,an.elements[9]*=d,an.elements[10]*=d,e.setFromRotationMatrix(an),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=yn,l=!1){const c=this.elements,u=2*s/(e-t),d=2*s/(n-r),h=(e+t)/(e-t),p=(n+r)/(n-r);let x,S;if(l)x=s/(o-s),S=o*s/(o-s);else if(a===yn)x=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===Ls)x=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=yn,l=!1){const c=this.elements,u=2/(e-t),d=2/(n-r),h=-(e+t)/(e-t),p=-(n+r)/(n-r);let x,S;if(l)x=1/(o-s),S=o/(o-s);else if(a===yn)x=-2/(o-s),S=-(o+s)/(o-s);else if(a===Ls)x=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};zs.prototype.isMatrix4=!0;let fe=zs;const wi=new O,an=new fe,Rd=new O(0,0,0),Cd=new O(1,1,1),Xn=new O,Wr=new O,Ye=new O,Ol=new fe,Bl=new Gn;class gi{constructor(t=0,e=0,n=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bl.setFromEuler(this),this.setFromQuaternion(Bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class Ja{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Pd=0;const zl=new O,Ai=new Gn,An=new fe,Xr=new O,or=new O,Dd=new O,Ld=new Gn,Gl=new O(1,0,0),kl=new O(0,1,0),Vl=new O(0,0,1),Hl={type:"added"},Id={type:"removed"},Ti={type:"childadded",child:null},io={type:"childremoved",child:null};class We extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new O,e=new gi,n=new Gn,r=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new fe},normalMatrix:{value:new Vt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(kl,t)}rotateZ(t){return this.rotateOnAxis(Vl,t)}translateOnAxis(t,e){return zl.copy(t).applyQuaternion(this.quaternion),this.position.add(zl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(kl,t)}translateZ(t){return this.translateOnAxis(Vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xr.copy(t):Xr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(or,Xr,this.up):An.lookAt(Xr,or,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(An),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hl),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),io.child=t,this.dispatchEvent(io),io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hl),Ti.child=t,this.dispatchEvent(Ti),Ti.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,Ld,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),p=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}We.DEFAULT_UP=new O(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $r extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nd={type:"move"};class ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $r,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $r,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $r,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const S of t.hand.values()){const m=e.getJointPose(S,n),f=this._getHandJoint(c,S);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new $r;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},qr={h:0,s:0,l:0};function so(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Qt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Jt.workingColorSpace){if(t=Ka(t,1),e=qt(e,0,1),n=qt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=so(o,s,t+1/3),this.g=so(o,s,t),this.b=so(o,s,t-1/3)}return Jt.colorSpaceToWorking(this,r),this}setStyle(t,e=Ze){function n(s){s!==void 0&&parseFloat(s)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){const n=Cu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return Jt.workingToColorSpace(Ne.copy(this),t),Math.round(qt(Ne.r*255,0,255))*65536+Math.round(qt(Ne.g*255,0,255))*256+Math.round(qt(Ne.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Ne.copy(this),e);const n=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Ne.copy(this),e),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Ze){Jt.workingToColorSpace(Ne.copy(this),t);const e=Ne.r,n=Ne.g,r=Ne.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(qr);const n=Ar($n.h,qr.h,e),r=Ar($n.s,qr.s,e),s=Ar($n.l,qr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Qt;Qt.NAMES=Cu;class Ud extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ln=new O,Tn=new O,oo=new O,Rn=new O,Ri=new O,Ci=new O,Wl=new O,ao=new O,lo=new O,co=new O,uo=new ve,ho=new ve,fo=new ve;class hn{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),ln.subVectors(t,e),r.cross(ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){ln.subVectors(r,e),Tn.subVectors(n,e),oo.subVectors(t,e);const o=ln.dot(ln),a=ln.dot(Tn),l=ln.dot(oo),c=Tn.dot(Tn),u=Tn.dot(oo),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,Rn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Rn.x),l.addScaledVector(o,Rn.y),l.addScaledVector(a,Rn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return uo.setScalar(0),ho.setScalar(0),fo.setScalar(0),uo.fromBufferAttribute(t,e),ho.fromBufferAttribute(t,n),fo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(uo,s.x),o.addScaledVector(ho,s.y),o.addScaledVector(fo,s.z),o}static isFrontFacing(t,e,n,r){return ln.subVectors(n,e),Tn.subVectors(t,e),ln.cross(Tn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ln.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),ln.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return hn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return hn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Ri.subVectors(r,n),Ci.subVectors(s,n),ao.subVectors(t,n);const l=Ri.dot(ao),c=Ci.dot(ao);if(l<=0&&c<=0)return e.copy(n);lo.subVectors(t,r);const u=Ri.dot(lo),d=Ci.dot(lo);if(u>=0&&d<=u)return e.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Ri,o);co.subVectors(t,s);const p=Ri.dot(co),x=Ci.dot(co);if(x>=0&&p<=x)return e.copy(s);const S=p*c-l*x;if(S<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(Ci,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return Wl.subVectors(s,r),a=(d-u)/(d-u+(p-x)),e.copy(r).addScaledVector(Wl,a);const f=1/(m+S+h);return o=S*f,a=h*f,e.copy(n).addScaledVector(Ri,o).addScaledVector(Ci,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ei{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(s,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yr.copy(n.boundingBox)),Yr.applyMatrix4(t.matrixWorld),this.union(Yr)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ar),Kr.subVectors(this.max,ar),Pi.subVectors(t.a,ar),Di.subVectors(t.b,ar),Li.subVectors(t.c,ar),qn.subVectors(Di,Pi),Yn.subVectors(Li,Di),si.subVectors(Pi,Li);let e=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-si.z,si.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,si.z,0,-si.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-si.y,si.x,0];return!po(e,Pi,Di,Li,Kr)||(e=[1,0,0,0,1,0,0,0,1],!po(e,Pi,Di,Li,Kr))?!1:(Zr.crossVectors(qn,Yn),e=[Zr.x,Zr.y,Zr.z],po(e,Pi,Di,Li,Kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Cn=[new O,new O,new O,new O,new O,new O,new O,new O],cn=new O,Yr=new ei,Pi=new O,Di=new O,Li=new O,qn=new O,Yn=new O,si=new O,ar=new O,Kr=new O,Zr=new O,oi=new O;function po(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){oi.fromArray(i,s);const a=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=t.dot(oi),c=e.dot(oi),u=n.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Me=new O,Jr=new Gt;let Fd=0;class pn extends ti{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Rl,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Oe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Oe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Oe(e,this.array),n=Oe(n,this.array),r=Oe(r,this.array),s=Oe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Rl&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class Pu extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Du extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Fe extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Od=new ei,lr=new O,mo=new O;class xi{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Od.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;lr.subVectors(t,this.center);const e=lr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(lr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(lr.copy(t.center).add(mo)),this.expandByPoint(lr.copy(t.center).sub(mo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Bd=0;const tn=new fe,go=new We,Ii=new O,Ke=new ei,cr=new ei,Te=new O;class Je extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nd(t)?Du:Pu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Vt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return go.lookAt(t),go.updateMatrix(),this.applyMatrix4(go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Fe(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ke.setFromBufferAttribute(s),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ke.min,cr.min),Ke.expandByPoint(Te),Te.addVectors(Ke.max,cr.max),Ke.expandByPoint(Te)):(Ke.expandByPoint(cr.min),Ke.expandByPoint(cr.max))}Ke.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Te.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Te));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Te.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(t,c),Te.add(Ii)),r=Math.max(r,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new pn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new O,l[_]=new O;const c=new O,u=new O,d=new O,h=new Gt,p=new Gt,x=new Gt,S=new O,m=new O;function f(_,A,C){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,C),h.fromBufferAttribute(s,_),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,C),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const D=1/(p.x*x.y-x.x*p.y);isFinite(D)&&(S.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(D),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(D),a[_].add(S),a[A].add(S),a[C].add(S),l[_].add(m),l[A].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,A=b.length;_<A;++_){const C=b[_],D=C.start,L=C.count;for(let H=D,Y=D+L;H<Y;H+=3)f(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const E=new O,g=new O,y=new O,v=new O;function w(_){y.fromBufferAttribute(r,_),v.copy(y);const A=a[_];E.copy(A),E.sub(y.multiplyScalar(y.dot(A))).normalize(),g.crossVectors(v,A);const D=g.dot(l[_])<0?-1:1;o.setXYZW(_,E.x,E.y,E.z,D)}for(let _=0,A=b.length;_<A;++_){const C=b[_],D=C.start,L=C.count;for(let H=D,Y=D+L;H<Y;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(t)for(let h=0,p=t.count;h<p;h+=3){const x=t.getX(h+0),S=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,S),o.fromBufferAttribute(e,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,S),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new pn(h,u,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Je,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=t(h,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zd=0;class Nr extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Vi,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wo,this.blendDst=Xo,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vi&&(n.blending=this.blending),this.side!==Qn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wo&&(n.blendSrc=this.blendSrc),this.blendDst!==Xo&&(n.blendDst=this.blendDst),this.blendEquation!==ui&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Pn=new O,_o=new O,jr=new O,Kn=new O,xo=new O,Qr=new O,vo=new O;class ks{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){_o.copy(t).add(e).multiplyScalar(.5),jr.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(_o);const s=t.distanceTo(e)*.5,o=-this.direction.dot(jr),a=Kn.dot(this.direction),l=-Kn.dot(jr),c=Kn.lengthSq(),u=Math.abs(1-o*o);let d,h,p,x;if(u>0)if(d=o*l-a,h=o*a-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const S=1/u;d*=S,h*=S,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(_o).addScaledVector(jr,h),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,r,s){xo.subVectors(e,t),Qr.subVectors(n,t),vo.crossVectors(xo,Qr);let o=this.direction.dot(vo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const l=a*this.direction.dot(Qr.crossVectors(Kn,Qr));if(l<0)return null;const c=a*this.direction.dot(xo.cross(Kn));if(c<0||l+c>o)return null;const u=-a*Kn.dot(vo);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ns extends Nr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Xl=new fe,ai=new ks,ts=new xi,$l=new O,es=new O,ns=new O,is=new O,yo=new O,rs=new O,ql=new O,ss=new O;class mn extends We{constructor(t=new Je,e=new Ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(yo.fromBufferAttribute(d,t),o?rs.addScaledVector(yo,u):rs.addScaledVector(yo.sub(e),u))}e.add(rs)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ts.copy(n.boundingSphere),ts.applyMatrix4(s),ai.copy(t.ray).recast(t.near),!(ts.containsPoint(ai.origin)===!1&&(ai.intersectSphere(ts,$l)===null||ai.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(Xl.copy(s).invert(),ai.copy(t.ray).applyMatrix4(Xl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const m=h[x],f=o[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let g=b,y=E;g<y;g+=3){const v=a.getX(g),w=a.getX(g+1),_=a.getX(g+2);r=os(this,f,t,n,c,u,d,v,w,_),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const b=a.getX(m),E=a.getX(m+1),g=a.getX(m+2);r=os(this,o,t,n,c,u,d,b,E,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,S=h.length;x<S;x++){const m=h[x],f=o[m.materialIndex],b=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let g=b,y=E;g<y;g+=3){const v=g,w=g+1,_=g+2;r=os(this,f,t,n,c,u,d,v,w,_),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const x=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=x,f=S;m<f;m+=3){const b=m,E=m+1,g=m+2;r=os(this,o,t,n,c,u,d,b,E,g),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Gd(i,t,e,n,r,s,o,a){let l;if(t.side===He?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Qn,a),l===null)return null;ss.copy(a),ss.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ss);return c<e.near||c>e.far?null:{distance:c,point:ss.clone(),object:i}}function os(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,es),i.getVertexPosition(l,ns),i.getVertexPosition(c,is);const u=Gd(i,t,e,n,es,ns,is,ql);if(u){const d=new O;hn.getBarycoord(ql,es,ns,is,d),r&&(u.uv=hn.getInterpolatedAttribute(r,a,l,c,d,new Gt)),s&&(u.uv1=hn.getInterpolatedAttribute(s,a,l,c,d,new Gt)),o&&(u.normal=hn.getInterpolatedAttribute(o,a,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new O,materialIndex:0};hn.getNormal(es,ns,is,h.normal),u.face=h,u.barycoord=d}return u}class Lu extends Ge{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Pe,u=Pe,d,h){super(null,o,a,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yl extends pn{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ni=new fe,Kl=new fe,as=[],Zl=new ei,kd=new fe,ur=new mn,hr=new xi;class Jl extends mn{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Yl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,kd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),Zl.copy(t.boundingBox).applyMatrix4(Ni),this.boundingBox.union(Zl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ni),hr.copy(t.boundingSphere).applyMatrix4(Ni),this.boundingSphere.union(hr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(ur.geometry=this.geometry,ur.material=this.material,ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hr.copy(this.boundingSphere),hr.applyMatrix4(n),t.ray.intersectsSphere(hr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ni),Kl.multiplyMatrices(n,Ni),ur.matrixWorld=Kl,ur.raycast(t,as);for(let o=0,a=as.length;o<a;o++){const l=as[o];l.instanceId=s,l.object=this,e.push(l)}as.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Yl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Lu(new Float32Array(r*this.count),r,this.count,Ha,dn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*t;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Mo=new O,Vd=new O,Hd=new Vt;class Dn{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Mo.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const r=t.delta(Mo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Hd.getNormalMatrix(t),r=this.coplanarPoint(Mo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new xi,Wd=new Gt(.5,.5),ls=new O;class ja{constructor(t=new Dn,e=new Dn,n=new Dn,r=new Dn,s=new Dn,o=new Dn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],x=s[8],S=s[9],m=s[10],f=s[11],b=s[12],E=s[13],g=s[14],y=s[15];if(r[0].setComponents(c-o,p-u,f-x,y-b).normalize(),r[1].setComponents(c+o,p+u,f+x,y+b).normalize(),r[2].setComponents(c+a,p+d,f+S,y+E).normalize(),r[3].setComponents(c-a,p-d,f-S,y-E).normalize(),n)r[4].setComponents(l,h,m,g).normalize(),r[5].setComponents(c-l,p-h,f-m,y-g).normalize();else if(r[4].setComponents(c-l,p-h,f-m,y-g).normalize(),e===yn)r[5].setComponents(c+l,p+h,f+m,y+g).normalize();else if(e===Ls)r[5].setComponents(l,h,m,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){li.center.set(0,0,0);const e=Wd.distanceTo(t.center);return li.radius=.7071067811865476+e,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ls.x=r.normal.x>0?t.max.x:t.min.x,ls.y=r.normal.y>0?t.max.y:t.min.y,ls.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Da extends Nr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Us=new O,Fs=new O,jl=new fe,dr=new ks,cs=new xi,So=new O,Ql=new O;class Xd extends We{constructor(t=new Je,e=new Da){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Us.fromBufferAttribute(e,r-1),Fs.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Us.distanceTo(Fs);t.setAttribute("lineDistance",new Fe(n,1))}else Bt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),cs.radius+=s,t.ray.intersectsSphere(cs)===!1)return;jl.copy(r).invert(),dr.copy(t.ray).applyMatrix4(jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let S=p,m=x-1;S<m;S+=c){const f=u.getX(S),b=u.getX(S+1),E=us(this,t,dr,l,f,b,S);E&&e.push(E)}if(this.isLineLoop){const S=u.getX(x-1),m=u.getX(p),f=us(this,t,dr,l,S,m,x-1);f&&e.push(f)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let S=p,m=x-1;S<m;S+=c){const f=us(this,t,dr,l,S,S+1,S);f&&e.push(f)}if(this.isLineLoop){const S=us(this,t,dr,l,x-1,p,x-1);S&&e.push(S)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function us(i,t,e,n,r,s,o){const a=i.geometry.attributes.position;if(Us.fromBufferAttribute(a,r),Fs.fromBufferAttribute(a,s),e.distanceSqToSegment(Us,Fs,So,Ql)>n)return;So.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(So);if(!(c<t.near||c>t.far))return{distance:c,point:Ql.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const tc=new O,ec=new O;class nc extends Xd{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)tc.fromBufferAttribute(e,r),ec.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+tc.distanceTo(ec);t.setAttribute("lineDistance",new Fe(n,1))}else Bt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Iu extends Ge{constructor(t=[],e=pi,n,r,s,o,a,l,c,u){super(t,e,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Yi extends Ge{constructor(t,e,n=En,r,s,o,a=Pe,l=Pe,c,u=zn,d=1){if(u!==zn&&u!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Za(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class $d extends Yi{constructor(t,e=En,n=pi,r,s,o=Pe,a=Pe,l,c=zn){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Nu extends Ge{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ur extends Je{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,r,o,2),x("x","z","y",1,-1,t,n,-e,r,o,3),x("x","y","z",1,-1,t,e,n,r,s,4),x("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Fe(c,3)),this.setAttribute("normal",new Fe(u,3)),this.setAttribute("uv",new Fe(d,2));function x(S,m,f,b,E,g,y,v,w,_,A){const C=g/w,D=y/_,L=g/2,H=y/2,Y=v/2,z=w+1,W=_+1;let k=0,X=0;const J=new O;for(let et=0;et<W;et++){const nt=et*D-H;for(let ut=0;ut<z;ut++){const Z=ut*C-L;J[S]=Z*b,J[m]=nt*E,J[f]=Y,c.push(J.x,J.y,J.z),J[S]=0,J[m]=0,J[f]=v>0?1:-1,u.push(J.x,J.y,J.z),d.push(ut/w),d.push(1-et/_),k+=1}}for(let et=0;et<_;et++)for(let nt=0;nt<w;nt++){const ut=h+nt+z*et,Z=h+nt+z*(et+1),Pt=h+(nt+1)+z*(et+1),bt=h+(nt+1)+z*et;l.push(ut,Z,bt),l.push(Z,Pt,bt),X+=6}a.addGroup(p,X,A),p+=X,h+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Qa extends Je{constructor(t=[],e=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:r};const s=[],o=[];a(r),c(n),u(),this.setAttribute("position",new Fe(s,3)),this.setAttribute("normal",new Fe(s.slice(),3)),this.setAttribute("uv",new Fe(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const E=new O,g=new O,y=new O;for(let v=0;v<e.length;v+=3)p(e[v+0],E),p(e[v+1],g),p(e[v+2],y),l(E,g,y,b)}function l(b,E,g,y){const v=y+1,w=[];for(let _=0;_<=v;_++){w[_]=[];const A=b.clone().lerp(g,_/v),C=E.clone().lerp(g,_/v),D=v-_;for(let L=0;L<=D;L++)L===0&&_===v?w[_][L]=A:w[_][L]=A.clone().lerp(C,L/D)}for(let _=0;_<v;_++)for(let A=0;A<2*(v-_)-1;A++){const C=Math.floor(A/2);A%2===0?(h(w[_][C+1]),h(w[_+1][C]),h(w[_][C])):(h(w[_][C+1]),h(w[_+1][C+1]),h(w[_+1][C]))}}function c(b){const E=new O;for(let g=0;g<s.length;g+=3)E.x=s[g+0],E.y=s[g+1],E.z=s[g+2],E.normalize().multiplyScalar(b),s[g+0]=E.x,s[g+1]=E.y,s[g+2]=E.z}function u(){const b=new O;for(let E=0;E<s.length;E+=3){b.x=s[E+0],b.y=s[E+1],b.z=s[E+2];const g=m(b)/2/Math.PI+.5,y=f(b)/Math.PI+.5;o.push(g,1-y)}x(),d()}function d(){for(let b=0;b<o.length;b+=6){const E=o[b+0],g=o[b+2],y=o[b+4],v=Math.max(E,g,y),w=Math.min(E,g,y);v>.9&&w<.1&&(E<.2&&(o[b+0]+=1),g<.2&&(o[b+2]+=1),y<.2&&(o[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function p(b,E){const g=b*3;E.x=t[g+0],E.y=t[g+1],E.z=t[g+2]}function x(){const b=new O,E=new O,g=new O,y=new O,v=new Gt,w=new Gt,_=new Gt;for(let A=0,C=0;A<s.length;A+=9,C+=6){b.set(s[A+0],s[A+1],s[A+2]),E.set(s[A+3],s[A+4],s[A+5]),g.set(s[A+6],s[A+7],s[A+8]),v.set(o[C+0],o[C+1]),w.set(o[C+2],o[C+3]),_.set(o[C+4],o[C+5]),y.copy(b).add(E).add(g).divideScalar(3);const D=m(y);S(v,C+0,b,D),S(w,C+2,E,D),S(_,C+4,g,D)}}function S(b,E,g,y){y<0&&b.x===1&&(o[E]=b.x-1),g.x===0&&g.z===0&&(o[E]=y/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qa(t.vertices,t.indices,t.radius,t.detail)}}class tl extends Qa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new tl(t.radius,t.detail)}}class Vs extends Je{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,d=t/a,h=e/l,p=[],x=[],S=[],m=[];for(let f=0;f<u;f++){const b=f*h-o;for(let E=0;E<c;E++){const g=E*d-s;x.push(g,-b,0),S.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const E=b+c*f,g=b+c*(f+1),y=b+1+c*(f+1),v=b+1+c*f;p.push(E,g,v),p.push(g,y,v)}this.setIndex(p),this.setAttribute("position",new Fe(x,3)),this.setAttribute("normal",new Fe(S,3)),this.setAttribute("uv",new Fe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vs(t.width,t.height,t.widthSegments,t.heightSegments)}}function Ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];if(ic(r))r.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(ic(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=Ki(i[e]);for(const r in n)t[r]=n[r]}return t}function ic(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function qd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Uu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Yd={clone:Ki,merge:Be};var Kd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Zd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bn extends Nr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kd,this.fragmentShader=Zd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=qd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const n in t.uniforms){const r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(r.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(r.value);break;case"v3":this.uniforms[n].value=new O().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new fe().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class Jd extends bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jd extends Nr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qd extends Nr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hs=new O,ds=new Gn,_n=new O;class Fu extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(hs,ds,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hs,ds,_n.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(hs,ds,_n),_n.x===1&&_n.y===1&&_n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hs,ds,_n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zn=new O,rc=new Gt,sc=new Gt;class nn extends Fu{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-t/Zn.z)}getViewSize(t,e){return this.getViewBounds(t,rc,sc),e.subVectors(sc,rc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(wr*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Ou extends Fu{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ui=-90,Fi=1;class tf extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new nn(Ui,Fi,t,e);r.layers=this.layers,this.add(r);const s=new nn(Ui,Fi,t,e);s.layers=this.layers,this.add(s);const o=new nn(Ui,Fi,t,e);o.layers=this.layers,this.add(o);const a=new nn(Ui,Fi,t,e);a.layers=this.layers,this.add(a);const l=new nn(Ui,Fi,t,e);l.layers=this.layers,this.add(l);const c=new nn(Ui,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;const S=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=S,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,p),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class ef extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const oc=new fe;class nf{constructor(t,e,n=0,r=1/0){this.ray=new ks(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return oc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(oc),this}intersectObject(t,e=!0,n=[]){return La(t,this,n,e),n.sort(ac),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)La(t[r],this,n,e);return n.sort(ac),n}}function ac(i,t){return i.distance-t.distance}function La(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)La(s[o],t,e,!0)}}class lc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=qt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(qt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yl=class yl{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){const s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};yl.prototype.isMatrix2=!0;let cc=yl;class rf extends ti{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Bt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function uc(i,t,e,n){const r=sf(n);switch(e){case wu:return i*t;case Ha:return i*t/r.components*r.byteLength;case Wa:return i*t/r.components*r.byteLength;case mi:return i*t*2/r.components*r.byteLength;case Xa:return i*t*2/r.components*r.byteLength;case Au:return i*t*3/r.components*r.byteLength;case fn:return i*t*4/r.components*r.byteLength;case $a:return i*t*4/r.components*r.byteLength;case Ms:case Ss:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Es:case bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case na:case ra:return Math.max(i,16)*Math.max(t,8)/4;case ea:case ia:return Math.max(i,8)*Math.max(t,8)/2;case sa:case oa:case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case aa:case Rs:case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Sa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case wa:case Aa:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Cs:case Pa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sf(i){switch(i){case sn:case Mu:return{byteLength:1,components:1};case Tr:case Su:case Bn:return{byteLength:2,components:1};case ka:case Va:return{byteLength:2,components:4};case En:case Ga:case dn:return{byteLength:4,components:1};case Eu:case bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);function Bu(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function of(i){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,a),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<d.length;p++){const x=d[h],S=d[p];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++h,d[h]=S)}d.length=h+1;for(let p=0,x=d.length;p<x;p++){const S=d[p];i.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var af=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ff=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_f=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Df=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,If=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Of="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Qf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_p=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Up=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,em=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,nm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const am=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,um=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,pm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,mm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ym=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Sm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Am=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Rm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Om=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:af,alphahash_pars_fragment:lf,alphamap_fragment:cf,alphamap_pars_fragment:uf,alphatest_fragment:hf,alphatest_pars_fragment:df,aomap_fragment:ff,aomap_pars_fragment:pf,batching_pars_vertex:mf,batching_vertex:gf,begin_vertex:_f,beginnormal_vertex:xf,bsdfs:vf,iridescence_fragment:yf,bumpmap_pars_fragment:Mf,clipping_planes_fragment:Sf,clipping_planes_pars_fragment:Ef,clipping_planes_pars_vertex:bf,clipping_planes_vertex:wf,color_fragment:Af,color_pars_fragment:Tf,color_pars_vertex:Rf,color_vertex:Cf,common:Pf,cube_uv_reflection_fragment:Df,defaultnormal_vertex:Lf,displacementmap_pars_vertex:If,displacementmap_vertex:Nf,emissivemap_fragment:Uf,emissivemap_pars_fragment:Ff,colorspace_fragment:Of,colorspace_pars_fragment:Bf,envmap_fragment:zf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:kf,envmap_pars_vertex:Vf,envmap_physical_pars_fragment:Qf,envmap_vertex:Hf,fog_vertex:Wf,fog_pars_vertex:Xf,fog_fragment:$f,fog_pars_fragment:qf,gradientmap_pars_fragment:Yf,lightmap_pars_fragment:Kf,lights_lambert_fragment:Zf,lights_lambert_pars_fragment:Jf,lights_pars_begin:jf,lights_toon_fragment:tp,lights_toon_pars_fragment:ep,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:rp,lights_physical_pars_fragment:sp,lights_fragment_begin:op,lights_fragment_maps:ap,lights_fragment_end:lp,lightprobes_pars_fragment:cp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:dp,logdepthbuf_vertex:fp,map_fragment:pp,map_pars_fragment:mp,map_particle_fragment:gp,map_particle_pars_fragment:_p,metalnessmap_fragment:xp,metalnessmap_pars_fragment:vp,morphinstance_vertex:yp,morphcolor_vertex:Mp,morphnormal_vertex:Sp,morphtarget_pars_vertex:Ep,morphtarget_vertex:bp,normal_fragment_begin:wp,normal_fragment_maps:Ap,normal_pars_fragment:Tp,normal_pars_vertex:Rp,normal_vertex:Cp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Lp,clearcoat_pars_fragment:Ip,iridescence_pars_fragment:Np,opaque_fragment:Up,packing:Fp,premultiplied_alpha_fragment:Op,project_vertex:Bp,dithering_fragment:zp,dithering_pars_fragment:Gp,roughnessmap_fragment:kp,roughnessmap_pars_fragment:Vp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Wp,shadowmap_vertex:Xp,shadowmask_pars_fragment:$p,skinbase_vertex:qp,skinning_pars_vertex:Yp,skinning_vertex:Kp,skinnormal_vertex:Zp,specularmap_fragment:Jp,specularmap_pars_fragment:jp,tonemapping_fragment:Qp,tonemapping_pars_fragment:tm,transmission_fragment:em,transmission_pars_fragment:nm,uv_pars_fragment:im,uv_pars_vertex:rm,uv_vertex:sm,worldpos_vertex:om,background_vert:am,background_frag:lm,backgroundCube_vert:cm,backgroundCube_frag:um,cube_vert:hm,cube_frag:dm,depth_vert:fm,depth_frag:pm,distance_vert:mm,distance_frag:gm,equirect_vert:_m,equirect_frag:xm,linedashed_vert:vm,linedashed_frag:ym,meshbasic_vert:Mm,meshbasic_frag:Sm,meshlambert_vert:Em,meshlambert_frag:bm,meshmatcap_vert:wm,meshmatcap_frag:Am,meshnormal_vert:Tm,meshnormal_frag:Rm,meshphong_vert:Cm,meshphong_frag:Pm,meshphysical_vert:Dm,meshphysical_frag:Lm,meshtoon_vert:Im,meshtoon_frag:Nm,points_vert:Um,points_frag:Fm,shadow_vert:Om,shadow_frag:Bm,sprite_vert:zm,sprite_frag:Gm},Mt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},vn={basic:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Be([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Be([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Be([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Be([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Be([Mt.points,Mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Be([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Be([Mt.common,Mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Be([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Be([Mt.sprite,Mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distance:{uniforms:Be([Mt.common,Mt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distance_vert,fragmentShader:Xt.distance_frag},shadow:{uniforms:Be([Mt.lights,Mt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};vn.physical={uniforms:Be([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const fs={r:0,b:0,g:0},km=new fe,zu=new Vt;zu.set(-1,0,0,0,1,0,0,0,1);function Vm(i,t,e,n,r,s){const o=new Qt(0);let a=r===!0?0:1,l,c,u=null,d=0,h=null;function p(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){const g=b.backgroundBlurriness>0;E=t.get(E,g)}return E}function x(b){let E=!1;const g=p(b);g===null?m(o,a):g&&g.isColor&&(m(g,1),E=!0);const y=i.xr.getEnvironmentBlendMode();y==="additive"?e.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(b,E){const g=p(E);g&&(g.isCubeTexture||g.mapping===Gs)?(c===void 0&&(c=new mn(new Ur(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:Ki(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,v,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(km.makeRotationFromEuler(E.backgroundRotation)).transpose(),g.isCubeTexture&&g.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zu),c.material.toneMapped=Jt.getTransfer(g.colorSpace)!==oe,(u!==g||d!==g.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=g,d=g.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new mn(new Vs(2,2),new bn({name:"BackgroundMaterial",uniforms:Ki(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Jt.getTransfer(g.colorSpace)!==oe,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||d!==g.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=g,d=g.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(fs,Uu(i)),e.buffers.color.setClear(fs.r,fs.g,fs.b,E,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,m(o,a)},render:x,addToRenderList:S,dispose:f}}function Hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,o=!1;function a(D,L,H,Y,z){let W=!1;const k=d(D,Y,H,L);s!==k&&(s=k,c(s.object)),W=p(D,Y,H,z),W&&x(D,Y,H,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,g(D,L,H,Y),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function u(D){return i.deleteVertexArray(D)}function d(D,L,H,Y){const z=Y.wireframe===!0;let W=n[L.id];W===void 0&&(W={},n[L.id]=W);const k=D.isInstancedMesh===!0?D.id:0;let X=W[k];X===void 0&&(X={},W[k]=X);let J=X[H.id];J===void 0&&(J={},X[H.id]=J);let et=J[z];return et===void 0&&(et=h(l()),J[z]=et),et}function h(D){const L=[],H=[],Y=[];for(let z=0;z<e;z++)L[z]=0,H[z]=0,Y[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:Y,object:D,attributes:{},index:null}}function p(D,L,H,Y){const z=s.attributes,W=L.attributes;let k=0;const X=H.getAttributes();for(const J in X)if(X[J].location>=0){const nt=z[J];let ut=W[J];if(ut===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(ut=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(ut=D.instanceColor)),nt===void 0||nt.attribute!==ut||ut&&nt.data!==ut.data)return!0;k++}return s.attributesNum!==k||s.index!==Y}function x(D,L,H,Y){const z={},W=L.attributes;let k=0;const X=H.getAttributes();for(const J in X)if(X[J].location>=0){let nt=W[J];nt===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(nt=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(nt=D.instanceColor));const ut={};ut.attribute=nt,nt&&nt.data&&(ut.data=nt.data),z[J]=ut,k++}s.attributes=z,s.attributesNum=k,s.index=Y}function S(){const D=s.newAttributes;for(let L=0,H=D.length;L<H;L++)D[L]=0}function m(D){f(D,0)}function f(D,L){const H=s.newAttributes,Y=s.enabledAttributes,z=s.attributeDivisors;H[D]=1,Y[D]===0&&(i.enableVertexAttribArray(D),Y[D]=1),z[D]!==L&&(i.vertexAttribDivisor(D,L),z[D]=L)}function b(){const D=s.newAttributes,L=s.enabledAttributes;for(let H=0,Y=L.length;H<Y;H++)L[H]!==D[H]&&(i.disableVertexAttribArray(H),L[H]=0)}function E(D,L,H,Y,z,W,k){k===!0?i.vertexAttribIPointer(D,L,H,z,W):i.vertexAttribPointer(D,L,H,Y,z,W)}function g(D,L,H,Y){S();const z=Y.attributes,W=H.getAttributes(),k=L.defaultAttributeValues;for(const X in W){const J=W[X];if(J.location>=0){let et=z[X];if(et===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(et=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(et=D.instanceColor)),et!==void 0){const nt=et.normalized,ut=et.itemSize,Z=t.get(et);if(Z===void 0)continue;const Pt=Z.buffer,bt=Z.type,$=Z.bytesPerElement,rt=bt===i.INT||bt===i.UNSIGNED_INT||et.gpuType===Ga;if(et.isInterleavedBufferAttribute){const ot=et.data,Dt=ot.stride,At=et.offset;if(ot.isInstancedInterleavedBuffer){for(let vt=0;vt<J.locationSize;vt++)f(J.location+vt,ot.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let vt=0;vt<J.locationSize;vt++)m(J.location+vt);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let vt=0;vt<J.locationSize;vt++)E(J.location+vt,ut/J.locationSize,bt,nt,Dt*$,(At+ut/J.locationSize*vt)*$,rt)}else{if(et.isInstancedBufferAttribute){for(let ot=0;ot<J.locationSize;ot++)f(J.location+ot,et.meshPerAttribute);D.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let ot=0;ot<J.locationSize;ot++)m(J.location+ot);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ot=0;ot<J.locationSize;ot++)E(J.location+ot,ut/J.locationSize,bt,nt,ut*$,ut/J.locationSize*ot*$,rt)}}else if(k!==void 0){const nt=k[X];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(J.location,nt);break;case 3:i.vertexAttrib3fv(J.location,nt);break;case 4:i.vertexAttrib4fv(J.location,nt);break;default:i.vertexAttrib1fv(J.location,nt)}}}}b()}function y(){A();for(const D in n){const L=n[D];for(const H in L){const Y=L[H];for(const z in Y){const W=Y[z];for(const k in W)u(W[k].object),delete W[k];delete Y[z]}}delete n[D]}}function v(D){if(n[D.id]===void 0)return;const L=n[D.id];for(const H in L){const Y=L[H];for(const z in Y){const W=Y[z];for(const k in W)u(W[k].object),delete W[k];delete Y[z]}}delete n[D.id]}function w(D){for(const L in n){const H=n[L];for(const Y in H){const z=H[Y];if(z[D.id]===void 0)continue;const W=z[D.id];for(const k in W)u(W[k].object),delete W[k];delete z[D.id]}}}function _(D){for(const L in n){const H=n[L],Y=D.isInstancedMesh===!0?D.id:0,z=H[Y];if(z!==void 0){for(const W in z){const k=z[W];for(const X in k)u(k[X].object),delete k[X];delete z[W]}delete H[Y],Object.keys(H).length===0&&delete n[L]}}}function A(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:b}}function Wm(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let p=0;p<u;p++)h+=c[p];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Xm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==fn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const _=w===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==sn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dn&&!_)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(Bt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),g=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:g,maxSamples:y,samples:v}}function $m(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Dn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,S=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,E=b*4;let g=f.clippingState||null;l.value=g,g=u(x,h,E,p);for(let y=0;y!==E;++y)g[y]=e[y];f.clippingState=g,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,p,x){const S=d!==null?d.length:0;let m=null;if(S!==0){if(m=l.value,x!==!0||m===null){const f=p+S*4,b=h.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,g=p;E!==S;++E,g+=4)o.copy(d[E]).applyMatrix4(b,a),o.normal.toArray(m,g),m[g+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}const jn=4,hc=[.125,.215,.35,.446,.526,.582],hi=20,qm=256,fr=new Ou,dc=new Qt;let Eo=null,bo=0,wo=0,Ao=!1;const Ym=new O;class fc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=Ym}=s;Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Eo,bo,wo),this._renderer.xr.enabled=Ao,t.scissorTest=!1,Oi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===pi||t.mapping===qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Eo=this._renderer.getRenderTarget(),bo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),Ao=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:Bn,format:fn,colorSpace:Ps,depthBuffer:!1},r=pc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Km(s)),this._blurMaterial=Jm(s,t,e),this._ggxMaterial=Zm(s,t,e)}return r}_compileMaterial(t){const e=new mn(new Je,t);this._renderer.compile(e,fr)}_sceneToCubeUV(t,e,n,r,s){const l=new nn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(dc),d.toneMapping=Mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Ur,new Ns({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,m=S.material;let f=!1;const b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,f=!0):(m.color.copy(dc),f=!0);for(let E=0;E<6;E++){const g=E%3;g===0?(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[E],s.y,s.z)):g===1?(l.up.set(0,0,c[E]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[E],s.z)):(l.up.set(0,c[E],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[E]));const y=this._cubeSize;Oi(r,g*y,E>2?y:0,y,y),d.setRenderTarget(r),f&&d.render(S,l),d.render(t,l)}d.toneMapping=p,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===pi||t.mapping===qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Oi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,fr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=0+c*1.25,p=d*h,{_lodMax:x}=this,S=this._sizeLods[n],m=3*S*(n>x-jn?n-x+jn:0),f=4*(this._cubeSize-S);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=x-e,Oi(s,m,f,3*S,2*S),r.setRenderTarget(s),r.render(a,fr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Oi(t,m,f,3*S,2*S),r.setRenderTarget(t),r.render(a,fr)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*hi-1),S=s/x,m=isFinite(s)?1+Math.floor(u*S):hi;m>hi&&Bt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const f=[];let b=0;for(let w=0;w<hi;++w){const _=w/S,A=Math.exp(-_*_/2);f.push(A),w===0?b+=A:w<m&&(b+=2*A)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:E}=this;h.dTheta.value=x,h.mipInt.value=E-n;const g=this._sizeLods[r],y=3*g*(r>E-jn?r-E+jn:0),v=4*(this._cubeSize-g);Oi(e,y,v,3*g,2*g),l.setRenderTarget(e),l.render(d,fr)}}function Km(i){const t=[],e=[],n=[];let r=i;const s=i-jn+1+hc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-jn?l=hc[o-i+jn-1]:o===0&&(l=0),e.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,S=3,m=2,f=1,b=new Float32Array(S*x*p),E=new Float32Array(m*x*p),g=new Float32Array(f*x*p);for(let v=0;v<p;v++){const w=v%3*2/3-1,_=v>2?0:-1,A=[w,_,0,w+2/3,_,0,w+2/3,_+1,0,w,_,0,w+2/3,_+1,0,w,_+1,0];b.set(A,S*x*v),E.set(h,m*x*v);const C=[v,v,v,v,v,v];g.set(C,f*x*v)}const y=new Je;y.setAttribute("position",new pn(b,S)),y.setAttribute("uv",new pn(E,m)),y.setAttribute("faceIndex",new pn(g,f)),n.push(new mn(y,null)),r>jn&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function pc(i,t,e){const n=new Sn(i,t,e);return n.texture.mapping=Gs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Oi(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Zm(i,t,e){return new bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Hs(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Jm(i,t,e){const n=new Float32Array(hi),r=new O(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function mc(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function gc(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Hs(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Gu extends Sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Iu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ur(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:Nn});s.uniforms.tEquirect.value=e;const o=new mn(r,s),a=e.minFilter;return e.minFilter===di&&(e.minFilter=Ue),new tf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}function jm(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,p=!1){return h==null?null:p?o(h):s(h)}function s(h){if(h&&h.isTexture){const p=h.mapping;if(p===Zs||p===Js)if(t.has(h)){const x=t.get(h).texture;return a(x,h.mapping)}else{const x=h.image;if(x&&x.height>0){const S=new Gu(x.height);return S.fromEquirectangularTexture(i,h),t.set(h,S),h.addEventListener("dispose",c),a(S.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){const p=h.mapping,x=p===Zs||p===Js,S=p===pi||p===qi;if(x||S){let m=e.get(h);const f=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return n===null&&(n=new fc(i)),m=x?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const b=h.image;return x&&b&&b.height>0||S&&b&&l(b)?(n===null&&(n=new fc(i)),m=x?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,p){return p===Zs?h.mapping=pi:p===Js&&(h.mapping=qi),h}function l(h){let p=0;const x=6;for(let S=0;S<x;S++)h[S]!==void 0&&p++;return p===x}function c(h){const p=h.target;p.removeEventListener("dispose",c);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function u(h){const p=h.target;p.removeEventListener("dispose",u);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function Qm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Hi("WebGLRenderer: "+n+" extension not supported."),r}}}function tg(i,t,e,n){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const x in h.attributes)t.remove(h.attributes[x]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)t.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,x=d.attributes.position;let S=0;if(x===void 0)return;if(p!==null){const b=p.array;S=p.version;for(let E=0,g=b.length;E<g;E+=3){const y=b[E+0],v=b[E+1],w=b[E+2];h.push(y,v,v,w,w,y)}}else{const b=x.array;S=x.version;for(let E=0,g=b.length/3-1;E<g;E+=3){const y=E+0,v=E+1,w=E+2;h.push(y,v,v,w,w,y)}}const m=new(x.count>=65535?Du:Pu)(h,1);m.version=S;const f=s.get(d);f&&t.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function eg(i,t,e){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){i.drawElements(n,h,s,d*o),e.update(h,n,1)}function c(d,h,p){p!==0&&(i.drawElementsInstanced(n,h,s,d*o,p),e.update(h,n,p))}function u(d,h,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,p);let S=0;for(let m=0;m<p;m++)S+=h[m];e.update(S,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ng(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function ig(i,t,e){const n=new WeakMap,r=new ve;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let A=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let E=0;p===!0&&(E=1),x===!0&&(E=2),S===!0&&(E=3);let g=a.attributes.position.count*E,y=1;g>t.maxTextureSize&&(y=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);const v=new Float32Array(g*y*4*d),w=new Ru(v,g,y,d);w.type=dn,w.needsUpdate=!0;const _=E*4;for(let C=0;C<d;C++){const D=m[C],L=f[C],H=b[C],Y=g*y*4*C;for(let z=0;z<D.count;z++){const W=z*_;p===!0&&(r.fromBufferAttribute(D,z),v[Y+W+0]=r.x,v[Y+W+1]=r.y,v[Y+W+2]=r.z,v[Y+W+3]=0),x===!0&&(r.fromBufferAttribute(L,z),v[Y+W+4]=r.x,v[Y+W+5]=r.y,v[Y+W+6]=r.z,v[Y+W+7]=0),S===!0&&(r.fromBufferAttribute(H,z),v[Y+W+8]=r.x,v[Y+W+9]=r.y,v[Y+W+10]=r.z,v[Y+W+11]=H.itemSize===4?r.w:1)}}h={count:d,texture:w,size:new Gt(g,y)},n.set(a,h),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let S=0;S<c.length;S++)p+=c[S];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function rg(i,t,e,n,r){let s=new WeakMap;function o(c){const u=r.render.frame,d=c.geometry,h=t.get(c,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return h}function a(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}const sg={[fu]:"LINEAR_TONE_MAPPING",[pu]:"REINHARD_TONE_MAPPING",[mu]:"CINEON_TONE_MAPPING",[gu]:"ACES_FILMIC_TONE_MAPPING",[xu]:"AGX_TONE_MAPPING",[vu]:"NEUTRAL_TONE_MAPPING",[_u]:"CUSTOM_TONE_MAPPING"};function og(i,t,e,n,r,s){const o=new Sn(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,depthTexture:r?new Yi(t,e):void 0}),a=new Sn(t,e,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),l=new Je;l.setAttribute("position",new Fe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Fe([0,2,0,0,2,0],2));const c=new Jd({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new mn(l,c),d=new Ou(-1,1,1,-1,0,1);let h=null,p=null,x=!1,S,m=null,f=[],b=!1;this.setSize=function(E,g){o.setSize(E,g),a.setSize(E,g);for(let y=0;y<f.length;y++){const v=f[y];v.setSize&&v.setSize(E,g)}},this.setEffects=function(E){f=E,b=f.length>0&&f[0].isRenderPass===!0;const g=o.width,y=o.height;for(let v=0;v<f.length;v++){const w=f[v];w.setSize&&w.setSize(g,y)}},this.begin=function(E,g){if(x||E.toneMapping===Mn&&f.length===0)return!1;if(m=g,g!==null){const y=g.width,v=g.height;(o.width!==y||o.height!==v)&&this.setSize(y,v)}return b===!1&&E.setRenderTarget(o),S=E.toneMapping,E.toneMapping=Mn,!0},this.hasRenderPass=function(){return b},this.end=function(E,g){E.toneMapping=S,x=!0;let y=o,v=a;for(let w=0;w<f.length;w++){const _=f[w];if(_.enabled!==!1&&(_.render(E,v,y,g),_.needsSwap!==!1)){const A=y;y=v,v=A}}if(h!==E.outputColorSpace||p!==E.toneMapping){h=E.outputColorSpace,p=E.toneMapping,c.defines={},Jt.getTransfer(h)===oe&&(c.defines.SRGB_TRANSFER="");const w=sg[p];w&&(c.defines[w]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=y.texture,E.setRenderTarget(m),E.render(u,d),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),c.dispose()}}const ku=new Ge,Ia=new Yi(1,1),Vu=new Ru,Hu=new Td,Wu=new Iu,_c=[],xc=[],vc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function ji(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=_c[r];if(s===void 0&&(s=new Float32Array(r),_c[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function we(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ae(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ws(i,t){let e=xc[t];e===void 0&&(e=new Int32Array(t),xc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ag(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2fv(this.addr,t),Ae(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(we(e,t))return;i.uniform3fv(this.addr,t),Ae(e,t)}}function ug(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4fv(this.addr,t),Ae(e,t)}}function hg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;Mc.set(n),i.uniformMatrix2fv(this.addr,!1,Mc),Ae(e,n)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;yc.set(n),i.uniformMatrix3fv(this.addr,!1,yc),Ae(e,n)}}function fg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(we(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ae(e,t)}else{if(we(e,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),Ae(e,n)}}function pg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2iv(this.addr,t),Ae(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3iv(this.addr,t),Ae(e,t)}}function _g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4iv(this.addr,t),Ae(e,t)}}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(we(e,t))return;i.uniform2uiv(this.addr,t),Ae(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(we(e,t))return;i.uniform3uiv(this.addr,t),Ae(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(we(e,t))return;i.uniform4uiv(this.addr,t),Ae(e,t)}}function Sg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Ia.compareFunction=e.isReversedDepthBuffer()?Ya:qa,s=Ia):s=ku,e.setTexture2D(t||s,r)}function Eg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Hu,r)}function bg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Wu,r)}function wg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Vu,r)}function Ag(i){switch(i){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return ug;case 35674:return hg;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return _g;case 5125:return xg;case 36294:return vg;case 36295:return yg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return Sg;case 35679:case 36299:case 36307:return Eg;case 35680:case 36300:case 36308:case 36293:return bg;case 36289:case 36303:case 36311:case 36292:return wg}}function Tg(i,t){i.uniform1fv(this.addr,t)}function Rg(i,t){const e=ji(t,this.size,2);i.uniform2fv(this.addr,e)}function Cg(i,t){const e=ji(t,this.size,3);i.uniform3fv(this.addr,e)}function Pg(i,t){const e=ji(t,this.size,4);i.uniform4fv(this.addr,e)}function Dg(i,t){const e=ji(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lg(i,t){const e=ji(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ig(i,t){const e=ji(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ng(i,t){i.uniform1iv(this.addr,t)}function Ug(i,t){i.uniform2iv(this.addr,t)}function Fg(i,t){i.uniform3iv(this.addr,t)}function Og(i,t){i.uniform4iv(this.addr,t)}function Bg(i,t){i.uniform1uiv(this.addr,t)}function zg(i,t){i.uniform2uiv(this.addr,t)}function Gg(i,t){i.uniform3uiv(this.addr,t)}function kg(i,t){i.uniform4uiv(this.addr,t)}function Vg(i,t,e){const n=this.cache,r=t.length,s=Ws(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Ae(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ia:o=ku;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function Hg(i,t,e){const n=this.cache,r=t.length,s=Ws(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Hu,s[o])}function Wg(i,t,e){const n=this.cache,r=t.length,s=Ws(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Wu,s[o])}function Xg(i,t,e){const n=this.cache,r=t.length,s=Ws(e,r);we(n,s)||(i.uniform1iv(this.addr,s),Ae(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Vu,s[o])}function $g(i){switch(i){case 5126:return Tg;case 35664:return Rg;case 35665:return Cg;case 35666:return Pg;case 35674:return Dg;case 35675:return Lg;case 35676:return Ig;case 5124:case 35670:return Ng;case 35667:case 35671:return Ug;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Bg;case 36294:return zg;case 36295:return Gg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Wg;case 36289:case 36303:case 36311:case 36292:return Xg}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ag(e.type)}}class Yg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$g(e.type)}}class Kg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const To=/(\w+)(\])?(\[|\.)?/g;function Sc(i,t){i.seq.push(t),i.map[t.id]=t}function Zg(i,t,e){const n=i.name,r=n.length;for(To.lastIndex=0;;){const s=To.exec(n),o=To.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sc(e,c===void 0?new qg(a,i,t):new Yg(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new Kg(a),Sc(e,d)),e=d}}}class ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Zg(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function Ec(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Jg=37297;let jg=0;function Qg(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const bc=new Vt;function t_(i){Jt._getMatrix(bc,Jt.workingColorSpace,i);const t=`mat3( ${bc.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Ds:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Qg(i.getShaderSource(t),a)}else return s}function e_(i,t){const e=t_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const n_={[fu]:"Linear",[pu]:"Reinhard",[mu]:"Cineon",[gu]:"ACESFilmic",[xu]:"AgX",[vu]:"Neutral",[_u]:"Custom"};function i_(i,t){const e=n_[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ps=new O;function r_(){Jt.getLuminanceCoefficients(ps);const i=ps.x.toFixed(4),t=ps.y.toFixed(4),e=ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function s_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mr).join(`
`)}function o_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function a_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Mr(i){return i!==""}function Ac(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const l_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Na(i){return i.replace(l_,u_)}const c_=new Map;function u_(i,t){let e=Xt[t];if(e===void 0){const n=c_.get(t);if(n!==void 0)e=Xt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Na(e)}const h_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(i){return i.replace(h_,d_)}function d_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const f_={[ys]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function p_(i){return f_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m_={[pi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE_UV"};function g_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":m_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const __={[qi]:"ENVMAP_MODE_REFRACTION"};function x_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":__[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const v_={[du]:"ENVMAP_BLENDING_MULTIPLY",[Xh]:"ENVMAP_BLENDING_MIX",[$h]:"ENVMAP_BLENDING_ADD"};function y_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":v_[i.combine]||"ENVMAP_BLENDING_NONE"}function M_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function S_(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=p_(e),c=g_(e),u=x_(e),d=y_(e),h=M_(e),p=s_(e),x=o_(s),S=r.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Mr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Mr).join(`
`),f.length>0&&(f+=`
`)):(m=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mr).join(`
`),f=[Cc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Mn?"#define TONE_MAPPING":"",e.toneMapping!==Mn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==Mn?i_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,e_("linearToOutputTexel",e.outputColorSpace),r_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mr).join(`
`)),o=Na(o),o=Ac(o,e),o=Tc(o,e),a=Na(a),a=Ac(a,e),a=Tc(a,e),o=Rc(o),a=Rc(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=b+m+o,g=b+f+a,y=Ec(r,r.VERTEX_SHADER,E),v=Ec(r,r.FRAGMENT_SHADER,g);r.attachShader(S,y),r.attachShader(S,v),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(D){if(i.debug.checkShaderErrors){const L=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(y)||"",Y=r.getShaderInfoLog(v)||"",z=L.trim(),W=H.trim(),k=Y.trim();let X=!0,J=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,S,y,v);else{const et=wc(r,y,"vertex"),nt=wc(r,v,"fragment");jt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+et+`
`+nt)}else z!==""?Bt("WebGLProgram: Program Info Log:",z):(W===""||k==="")&&(J=!1);J&&(D.diagnostics={runnable:X,programLog:z,vertexShader:{log:W,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(y),r.deleteShader(v),_=new ws(r,S),A=a_(r,S)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let A;this.getAttributes=function(){return A===void 0&&w(this),A};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(S,Jg)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=jg++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=y,this.fragmentShader=v,this}let E_=0;class b_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){const r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w_(t),e.set(t,n)),n}}class w_{constructor(t){this.id=E_++,this.code=t,this.usedTimes=0}}function A_(i){return i===mi||i===Rs||i===Cs}function T_(i,t,e,n,r,s){const o=new Ja,a=new b_,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,A,C,D,L,H){const Y=D.fog,z=L.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=t.get(_.envMap||W,k),J=X&&X.mapping===Gs?X.image.height:null,et=p[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Bt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));const nt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ut=nt!==void 0?nt.length:0;let Z=0;z.morphAttributes.position!==void 0&&(Z=1),z.morphAttributes.normal!==void 0&&(Z=2),z.morphAttributes.color!==void 0&&(Z=3);let Pt,bt,$,rt;if(et){const Ct=vn[et];Pt=Ct.vertexShader,bt=Ct.fragmentShader}else{Pt=_.vertexShader,bt=_.fragmentShader;const Ct=a.getVertexShaderStage(_),ge=a.getFragmentShaderStage(_);a.update(_,Ct,ge),$=Ct.id,rt=ge.id}const ot=i.getRenderTarget(),Dt=i.state.buffers.depth.getReversed(),At=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,te=!!_.map,Ft=!!_.matcap,$t=!!X,Yt=!!_.aoMap,Ot=!!_.lightMap,ne=!!_.bumpMap&&_.wireframe===!1,le=!!_.normalMap,Ht=!!_.displacementMap,ie=!!_.emissiveMap,re=!!_.metalnessMap,Wt=!!_.roughnessMap,U=_.anisotropy>0,_e=_.clearcoat>0,Kt=_.dispersion>0,P=_.iridescence>0,M=_.sheen>0,G=_.transmission>0,V=U&&!!_.anisotropyMap,K=_e&&!!_.clearcoatMap,lt=_e&&!!_.clearcoatNormalMap,ht=_e&&!!_.clearcoatRoughnessMap,q=P&&!!_.iridescenceMap,Q=P&&!!_.iridescenceThicknessMap,gt=M&&!!_.sheenColorMap,Rt=M&&!!_.sheenRoughnessMap,ct=!!_.specularMap,_t=!!_.specularColorMap,Nt=!!_.specularIntensityMap,Tt=G&&!!_.transmissionMap,kt=G&&!!_.thicknessMap,F=!!_.gradientMap,pt=!!_.alphaMap,tt=_.alphaTest>0,xt=!!_.alphaHash,St=!!_.extensions;let it=Mn;_.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(it=i.toneMapping);const Lt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Pt,fragmentShader:bt,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:At,instancingColor:At&&L.instanceColor!==null,instancingMorph:At&&L.morphTexture!==null,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:te,matcap:Ft,envMap:$t,envMapMode:$t&&X.mapping,envMapCubeUVHeight:J,aoMap:Yt,lightMap:Ot,bumpMap:ne,normalMap:le,displacementMap:Ht,emissiveMap:ie,normalMapObjectSpace:le&&_.normalMapType===Kh,normalMapTangentSpace:le&&_.normalMapType===Al,packedNormalMap:le&&_.normalMapType===Al&&A_(_.normalMap.format),metalnessMap:re,roughnessMap:Wt,anisotropy:U,anisotropyMap:V,clearcoat:_e,clearcoatMap:K,clearcoatNormalMap:lt,clearcoatRoughnessMap:ht,dispersion:Kt,iridescence:P,iridescenceMap:q,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:gt,sheenRoughnessMap:Rt,specularMap:ct,specularColorMap:_t,specularIntensityMap:Nt,transmission:G,transmissionMap:Tt,thicknessMap:kt,gradientMap:F,opaque:_.transparent===!1&&_.blending===Vi&&_.alphaToCoverage===!1,alphaMap:pt,alphaTest:tt,alphaHash:xt,combine:_.combine,mapUv:te&&x(_.map.channel),aoMapUv:Yt&&x(_.aoMap.channel),lightMapUv:Ot&&x(_.lightMap.channel),bumpMapUv:ne&&x(_.bumpMap.channel),normalMapUv:le&&x(_.normalMap.channel),displacementMapUv:Ht&&x(_.displacementMap.channel),emissiveMapUv:ie&&x(_.emissiveMap.channel),metalnessMapUv:re&&x(_.metalnessMap.channel),roughnessMapUv:Wt&&x(_.roughnessMap.channel),anisotropyMapUv:V&&x(_.anisotropyMap.channel),clearcoatMapUv:K&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:lt&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:q&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&x(_.sheenRoughnessMap.channel),specularMapUv:ct&&x(_.specularMap.channel),specularColorMapUv:_t&&x(_.specularColorMap.channel),specularIntensityMapUv:Nt&&x(_.specularIntensityMap.channel),transmissionMapUv:Tt&&x(_.transmissionMap.channel),thicknessMapUv:kt&&x(_.thicknessMap.channel),alphaMapUv:pt&&x(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(le||U),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(te||pt),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&le===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Dt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:Z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:te&&_.map.isVideoTexture===!0&&Jt.getTransfer(_.map.colorSpace)===oe,decodeVideoTextureEmissive:ie&&_.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(_.emissiveMap.colorSpace)===oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ln,flipSided:_.side===He,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:St&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&_.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(f(A,_),b(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function f(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function b(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function E(_){const A=p[_.type];let C;if(A){const D=vn[A];C=Yd.clone(D.uniforms)}else C=_.uniforms;return C}function g(_,A){let C=u.get(A);return C!==void 0?++C.usedTimes:(C=new S_(i,A,_,r),c.push(C),u.set(A,C)),C}function y(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){a.remove(_)}function w(){a.dispose()}return{getParameters:S,getProgramCacheKey:m,getUniforms:E,acquireProgram:g,releaseProgram:y,releaseShaderCache:v,programs:c,dispose:w}}function R_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Pc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let p=0;return h.isInstancedMesh&&(p+=2),h.isSkinnedMesh&&(p+=1),p}function a(h,p,x,S,m,f){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:p,material:x,materialVariant:o(h),groupOrder:S,renderOrder:h.renderOrder,z:m,group:f},i[t]=b):(b.id=h.id,b.object=h,b.geometry=p,b.material=x,b.materialVariant=o(h),b.groupOrder=S,b.renderOrder=h.renderOrder,b.z=m,b.group=f),t++,b}function l(h,p,x,S,m,f){const b=a(h,p,x,S,m,f);x.transmission>0?n.push(b):x.transparent===!0?r.push(b):e.push(b)}function c(h,p,x,S,m,f){const b=a(h,p,x,S,m,f);x.transmission>0?n.unshift(b):x.transparent===!0?r.unshift(b):e.unshift(b)}function u(h,p,x){e.length>1&&e.sort(h||C_),n.length>1&&n.sort(p||Pc),r.length>1&&r.sort(p||Pc),x&&(e.reverse(),n.reverse(),r.reverse())}function d(){for(let h=t,p=i.length;h<p;h++){const x=i[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function P_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Dc,i.set(n,[o])):r>=s.length?(o=new Dc,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function D_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Qt};break;case"SpotLight":e={position:new O,direction:new O,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function L_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let I_=0;function N_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function U_(i){const t=new D_,e=L_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const r=new O,s=new fe,o=new fe;function a(c){let u=0,d=0,h=0;for(let A=0;A<9;A++)n.probe[A].set(0,0,0);let p=0,x=0,S=0,m=0,f=0,b=0,E=0,g=0,y=0,v=0,w=0;c.sort(N_);for(let A=0,C=c.length;A<C;A++){const D=c[A],L=D.color,H=D.intensity,Y=D.distance;let z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===mi?z=D.shadow.map.texture:z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=L.r*H,d+=L.g*H,h+=L.b*H;else if(D.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(D.sh.coefficients[W],H);w++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const k=D.shadow,X=e.get(D);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=W,p++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(L).multiplyScalar(H),W.distance=Y,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,n.spot[S]=W;const k=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,k.updateMatrices(D),D.castShadow&&v++),n.spotLightMatrix[S]=k.matrix,D.castShadow){const X=e.get(D);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,n.spotShadow[S]=X,n.spotShadowMap[S]=z,g++}S++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(L).multiplyScalar(H),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=W,m++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const k=D.shadow,X=e.get(D);X.shadowIntensity=k.intensity,X.shadowBias=k.bias,X.shadowNormalBias=k.normalBias,X.shadowRadius=k.radius,X.shadowMapSize=k.mapSize,X.shadowCameraNear=k.camera.near,X.shadowCameraFar=k.camera.far,n.pointShadow[x]=X,n.pointShadowMap[x]=z,n.pointShadowMatrix[x]=D.shadow.matrix,E++}n.point[x]=W,x++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(H),W.groundColor.copy(D.groundColor).multiplyScalar(H),n.hemi[f]=W,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const _=n.hash;(_.directionalLength!==p||_.pointLength!==x||_.spotLength!==S||_.rectAreaLength!==m||_.hemiLength!==f||_.numDirectionalShadows!==b||_.numPointShadows!==E||_.numSpotShadows!==g||_.numSpotMaps!==y||_.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=S,n.rectArea.length=m,n.point.length=x,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=g+y-v,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=w,_.directionalLength=p,_.pointLength=x,_.spotLength=S,_.rectAreaLength=m,_.hemiLength=f,_.numDirectionalShadows=b,_.numPointShadows=E,_.numSpotShadows=g,_.numSpotMaps=y,_.numLightProbes=w,n.version=I_++)}function l(c,u){let d=0,h=0,p=0,x=0,S=0;const m=u.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const E=c[f];if(E.isDirectionalLight){const g=n.directional[d];g.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),d++}else if(E.isSpotLight){const g=n.spot[p];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const g=n.rectArea[x];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),g.halfWidth.set(E.width*.5,0,0),g.halfHeight.set(0,E.height*.5,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const g=n.point[h];g.position.setFromMatrixPosition(E.matrixWorld),g.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const g=n.hemi[S];g.direction.setFromMatrixPosition(E.matrixWorld),g.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:n}}function Lc(i){const t=new U_(i),e=[],n=[],r=[];function s(h){d.camera=h,e.length=0,n.length=0,r.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function F_(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Lc(i),t.set(r,[a])):s>=o.length?(a=new Lc(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,z_=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],G_=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Ic=new fe,pr=new O,Ro=new O;function k_(i,t,e){let n=new ja;const r=new Gt,s=new Gt,o=new ve,a=new jd,l=new Qd,c={},u=e.maxTextureSize,d={[Qn]:He,[He]:Qn,[Ln]:Ln},h=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:O_,fragmentShader:B_}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Je;x.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new mn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ys;let f=this.type;this.render=function(v,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Ah&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ys);const A=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Nn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const H=f!==this.type;H&&w.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(z=>z.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,z=v.length;Y<z;Y++){const W=v[Y],k=W.shadow;if(k===void 0){Bt("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const X=k.getFrameExtents();r.multiply(X),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,k.mapSize.y=s.y));const J=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=J,k.map===null||H===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===yr){if(W.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Sn(r.x,r.y,{format:mi,type:Bn,minFilter:Ue,magFilter:Ue,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Yi(r.x,r.y,dn),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=zn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pe,k.map.depthTexture.magFilter=Pe}else W.isPointLight?(k.map=new Gu(r.x),k.map.depthTexture=new $d(r.x,En)):(k.map=new Sn(r.x,r.y),k.map.depthTexture=new Yi(r.x,r.y,En)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=zn,this.type===ys?(k.map.depthTexture.compareFunction=J?Ya:qa,k.map.depthTexture.minFilter=Ue,k.map.depthTexture.magFilter=Ue):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Pe,k.map.depthTexture.magFilter=Pe);k.camera.updateProjectionMatrix()}const et=k.map.isWebGLCubeRenderTarget?6:1;for(let nt=0;nt<et;nt++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,nt),i.clear();else{nt===0&&(i.setRenderTarget(k.map),i.clear());const ut=k.getViewport(nt);o.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),L.viewport(o)}if(W.isPointLight){const ut=k.camera,Z=k.matrix,Pt=W.distance||ut.far;Pt!==ut.far&&(ut.far=Pt,ut.updateProjectionMatrix()),pr.setFromMatrixPosition(W.matrixWorld),ut.position.copy(pr),Ro.copy(ut.position),Ro.add(z_[nt]),ut.up.copy(G_[nt]),ut.lookAt(Ro),ut.updateMatrixWorld(),Z.makeTranslation(-pr.x,-pr.y,-pr.z),Ic.multiplyMatrices(ut.projectionMatrix,ut.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Ic,ut.coordinateSystem,ut.reversedDepth)}else k.updateMatrices(W);n=k.getFrustum(),g(w,_,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===yr&&b(k,_),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(A,C,D)};function b(v,w){const _=t.update(S);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,p.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Sn(r.x,r.y,{format:mi,type:Bn})),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(w,null,_,h,S,null),p.uniforms.shadow_pass.value=v.mapPass.texture,p.uniforms.resolution.value=v.mapSize,p.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(w,null,_,p,S,null)}function E(v,w,_,A){let C=null;const D=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(D!==void 0)C=D;else if(C=_.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const L=C.uuid,H=w.uuid;let Y=c[L];Y===void 0&&(Y={},c[L]=Y);let z=Y[H];z===void 0&&(z=C.clone(),Y[H]=z,w.addEventListener("dispose",y)),C=z}if(C.visible=w.visible,C.wireframe=w.wireframe,A===yr?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:d[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const L=i.properties.get(C);L.light=_}return C}function g(v,w,_,A,C){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&C===yr)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);const H=t.update(v),Y=v.material;if(Array.isArray(Y)){const z=H.groups;for(let W=0,k=z.length;W<k;W++){const X=z[W],J=Y[X.materialIndex];if(J&&J.visible){const et=E(v,J,A,C);v.onBeforeShadow(i,v,w,_,H,et,X),i.renderBufferDirect(_,null,H,et,v,X),v.onAfterShadow(i,v,w,_,H,et,X)}}}else if(Y.visible){const z=E(v,Y,A,C);v.onBeforeShadow(i,v,w,_,H,z,null),i.renderBufferDirect(_,null,H,z,v,null),v.onAfterShadow(i,v,w,_,H,z,null)}}const L=v.children;for(let H=0,Y=L.length;H<Y;H++)g(L[H],w,_,A,C)}function y(v){v.target.removeEventListener("dispose",y);for(const _ in c){const A=c[_],C=v.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function V_(i,t){function e(){let F=!1;const pt=new ve;let tt=null;const xt=new ve(0,0,0,0);return{setMask:function(St){tt!==St&&!F&&(i.colorMask(St,St,St,St),tt=St)},setLocked:function(St){F=St},setClear:function(St,it,Lt,Ct,ge){ge===!0&&(St*=Ct,it*=Ct,Lt*=Ct),pt.set(St,it,Lt,Ct),xt.equals(pt)===!1&&(i.clearColor(St,it,Lt,Ct),xt.copy(pt))},reset:function(){F=!1,tt=null,xt.set(-1,0,0,0)}}}function n(){let F=!1,pt=!1,tt=null,xt=null,St=null;return{setReversed:function(it){if(pt!==it){const Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),pt=it;const Ct=St;St=null,this.setClear(Ct)}},getReversed:function(){return pt},setTest:function(it){it?ot(i.DEPTH_TEST):Dt(i.DEPTH_TEST)},setMask:function(it){tt!==it&&!F&&(i.depthMask(it),tt=it)},setFunc:function(it){if(pt&&(it=sd[it]),xt!==it){switch(it){case $o:i.depthFunc(i.NEVER);break;case qo:i.depthFunc(i.ALWAYS);break;case Yo:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Zo:i.depthFunc(i.GEQUAL);break;case Jo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xt=it}},setLocked:function(it){F=it},setClear:function(it){St!==it&&(St=it,pt&&(it=1-it),i.clearDepth(it))},reset:function(){F=!1,tt=null,xt=null,St=null,pt=!1}}}function r(){let F=!1,pt=null,tt=null,xt=null,St=null,it=null,Lt=null,Ct=null,ge=null;return{setTest:function(se){F||(se?ot(i.STENCIL_TEST):Dt(i.STENCIL_TEST))},setMask:function(se){pt!==se&&!F&&(i.stencilMask(se),pt=se)},setFunc:function(se,$e,je){(tt!==se||xt!==$e||St!==je)&&(i.stencilFunc(se,$e,je),tt=se,xt=$e,St=je)},setOp:function(se,$e,je){(it!==se||Lt!==$e||Ct!==je)&&(i.stencilOp(se,$e,je),it=se,Lt=$e,Ct=je)},setLocked:function(se){F=se},setClear:function(se){ge!==se&&(i.clearStencil(se),ge=se)},reset:function(){F=!1,pt=null,tt=null,xt=null,St=null,it=null,Lt=null,Ct=null,ge=null}}}const s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},p=new WeakMap,x=[],S=null,m=!1,f=null,b=null,E=null,g=null,y=null,v=null,w=null,_=new Qt(0,0,0),A=0,C=!1,D=null,L=null,H=null,Y=null,z=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,X=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(J)[1]),k=X>=1):J.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),k=X>=2);let et=null,nt={};const ut=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),Pt=new ve().fromArray(ut),bt=new ve().fromArray(Z);function $(F,pt,tt,xt){const St=new Uint8Array(4),it=i.createTexture();i.bindTexture(F,it),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<tt;Lt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,xt,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(pt+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return it}const rt={};rt[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),rt[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),rt[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),o.setFunc($i),ne(!1),le(Sl),ot(i.CULL_FACE),Yt(Nn);function ot(F){u[F]!==!0&&(i.enable(F),u[F]=!0)}function Dt(F){u[F]!==!1&&(i.disable(F),u[F]=!1)}function At(F,pt){return h[F]!==pt?(i.bindFramebuffer(F,pt),h[F]=pt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function vt(F,pt){let tt=x,xt=!1;if(F){tt=p.get(pt),tt===void 0&&(tt=[],p.set(pt,tt));const St=F.textures;if(tt.length!==St.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Lt=St.length;it<Lt;it++)tt[it]=i.COLOR_ATTACHMENT0+it;tt.length=St.length,xt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,xt=!0);xt&&i.drawBuffers(tt)}function te(F){return S!==F?(i.useProgram(F),S=F,!0):!1}const Ft={[ui]:i.FUNC_ADD,[Rh]:i.FUNC_SUBTRACT,[Ch]:i.FUNC_REVERSE_SUBTRACT};Ft[Ph]=i.MIN,Ft[Dh]=i.MAX;const $t={[Lh]:i.ZERO,[Ih]:i.ONE,[Nh]:i.SRC_COLOR,[Wo]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[Bh]:i.DST_COLOR,[Fh]:i.DST_ALPHA,[Uh]:i.ONE_MINUS_SRC_COLOR,[Xo]:i.ONE_MINUS_SRC_ALPHA,[zh]:i.ONE_MINUS_DST_COLOR,[Oh]:i.ONE_MINUS_DST_ALPHA,[kh]:i.CONSTANT_COLOR,[Vh]:i.ONE_MINUS_CONSTANT_COLOR,[Hh]:i.CONSTANT_ALPHA,[Wh]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(F,pt,tt,xt,St,it,Lt,Ct,ge,se){if(F===Nn){m===!0&&(Dt(i.BLEND),m=!1);return}if(m===!1&&(ot(i.BLEND),m=!0),F!==Th){if(F!==f||se!==C){if((b!==ui||y!==ui)&&(i.blendEquation(i.FUNC_ADD),b=ui,y=ui),se)switch(F){case Vi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFunc(i.ONE,i.ONE);break;case bl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",F);break}else switch(F){case Vi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case El:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case bl:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",F);break}E=null,g=null,v=null,w=null,_.set(0,0,0),A=0,f=F,C=se}return}St=St||pt,it=it||tt,Lt=Lt||xt,(pt!==b||St!==y)&&(i.blendEquationSeparate(Ft[pt],Ft[St]),b=pt,y=St),(tt!==E||xt!==g||it!==v||Lt!==w)&&(i.blendFuncSeparate($t[tt],$t[xt],$t[it],$t[Lt]),E=tt,g=xt,v=it,w=Lt),(Ct.equals(_)===!1||ge!==A)&&(i.blendColor(Ct.r,Ct.g,Ct.b,ge),_.copy(Ct),A=ge),f=F,C=!1}function Ot(F,pt){F.side===Ln?Dt(i.CULL_FACE):ot(i.CULL_FACE);let tt=F.side===He;pt&&(tt=!tt),ne(tt),F.blending===Vi&&F.transparent===!1?Yt(Nn):Yt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const xt=F.stencilWrite;a.setTest(xt),xt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):Dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function le(F){F!==bh?(ot(i.CULL_FACE),F!==L&&(F===Sl?i.cullFace(i.BACK):F===wh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Dt(i.CULL_FACE),L=F}function Ht(F){F!==H&&(k&&i.lineWidth(F),H=F)}function ie(F,pt,tt){F?(ot(i.POLYGON_OFFSET_FILL),(Y!==pt||z!==tt)&&(Y=pt,z=tt,o.getReversed()&&(pt=-pt),i.polygonOffset(pt,tt))):Dt(i.POLYGON_OFFSET_FILL)}function re(F){F?ot(i.SCISSOR_TEST):Dt(i.SCISSOR_TEST)}function Wt(F){F===void 0&&(F=i.TEXTURE0+W-1),et!==F&&(i.activeTexture(F),et=F)}function U(F,pt,tt){tt===void 0&&(et===null?tt=i.TEXTURE0+W-1:tt=et);let xt=nt[tt];xt===void 0&&(xt={type:void 0,texture:void 0},nt[tt]=xt),(xt.type!==F||xt.texture!==pt)&&(et!==tt&&(i.activeTexture(tt),et=tt),i.bindTexture(F,pt||rt[F]),xt.type=F,xt.texture=pt)}function _e(){const F=nt[et];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(F){jt("WebGLState:",F)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(F){jt("WebGLState:",F)}}function M(){try{i.texSubImage2D(...arguments)}catch(F){jt("WebGLState:",F)}}function G(){try{i.texSubImage3D(...arguments)}catch(F){jt("WebGLState:",F)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(F){jt("WebGLState:",F)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(F){jt("WebGLState:",F)}}function lt(){try{i.texStorage2D(...arguments)}catch(F){jt("WebGLState:",F)}}function ht(){try{i.texStorage3D(...arguments)}catch(F){jt("WebGLState:",F)}}function q(){try{i.texImage2D(...arguments)}catch(F){jt("WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){jt("WebGLState:",F)}}function gt(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function Rt(F,pt){d[F]!==pt&&(i.pixelStorei(F,pt),d[F]=pt)}function ct(F){Pt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Pt.copy(F))}function _t(F){bt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),bt.copy(F))}function Nt(F,pt){let tt=c.get(pt);tt===void 0&&(tt=new WeakMap,c.set(pt,tt));let xt=tt.get(F);xt===void 0&&(xt=i.getUniformBlockIndex(pt,F.name),tt.set(F,xt))}function Tt(F,pt){const xt=c.get(pt).get(F);l.get(pt)!==xt&&(i.uniformBlockBinding(pt,xt,F.__bindingPointIndex),l.set(pt,xt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},et=null,nt={},h={},p=new WeakMap,x=[],S=null,m=!1,f=null,b=null,E=null,g=null,y=null,v=null,w=null,_=new Qt(0,0,0),A=0,C=!1,D=null,L=null,H=null,Y=null,z=null,Pt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ot,disable:Dt,bindFramebuffer:At,drawBuffers:vt,useProgram:te,setBlending:Yt,setMaterial:Ot,setFlipSided:ne,setCullFace:le,setLineWidth:Ht,setPolygonOffset:ie,setScissorTest:re,activeTexture:Wt,bindTexture:U,unbindTexture:_e,compressedTexImage2D:Kt,compressedTexImage3D:P,texImage2D:q,texImage3D:Q,pixelStorei:Rt,getParameter:gt,updateUBOMapping:Nt,uniformBlockBinding:Tt,texStorage2D:lt,texStorage3D:ht,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:ct,viewport:_t,reset:kt}}function H_(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Gt,u=new WeakMap,d=new Set;let h;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(P,M){return x?new OffscreenCanvas(P,M):Is("canvas")}function m(P,M,G){let V=1;const K=Kt(P);if((K.width>G||K.height>G)&&(V=G/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const lt=Math.floor(V*K.width),ht=Math.floor(V*K.height);h===void 0&&(h=S(lt,ht));const q=M?S(lt,ht):h;return q.width=lt,q.height=ht,q.getContext("2d").drawImage(P,0,0,lt,ht),Bt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+lt+"x"+ht+")."),q}else return"data"in P&&Bt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function f(P){return P.generateMipmaps}function b(P){i.generateMipmap(P)}function E(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function g(P,M,G,V,K,lt=!1){if(P!==null){if(i[P]!==void 0)return i[P];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ht;V&&(ht=t.get("EXT_texture_norm16"),ht||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=M;if(M===i.RED&&(G===i.FLOAT&&(q=i.R32F),G===i.HALF_FLOAT&&(q=i.R16F),G===i.UNSIGNED_BYTE&&(q=i.R8),G===i.UNSIGNED_SHORT&&ht&&(q=ht.R16_EXT),G===i.SHORT&&ht&&(q=ht.R16_SNORM_EXT)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.R8UI),G===i.UNSIGNED_SHORT&&(q=i.R16UI),G===i.UNSIGNED_INT&&(q=i.R32UI),G===i.BYTE&&(q=i.R8I),G===i.SHORT&&(q=i.R16I),G===i.INT&&(q=i.R32I)),M===i.RG&&(G===i.FLOAT&&(q=i.RG32F),G===i.HALF_FLOAT&&(q=i.RG16F),G===i.UNSIGNED_BYTE&&(q=i.RG8),G===i.UNSIGNED_SHORT&&ht&&(q=ht.RG16_EXT),G===i.SHORT&&ht&&(q=ht.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RG8UI),G===i.UNSIGNED_SHORT&&(q=i.RG16UI),G===i.UNSIGNED_INT&&(q=i.RG32UI),G===i.BYTE&&(q=i.RG8I),G===i.SHORT&&(q=i.RG16I),G===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RGB8UI),G===i.UNSIGNED_SHORT&&(q=i.RGB16UI),G===i.UNSIGNED_INT&&(q=i.RGB32UI),G===i.BYTE&&(q=i.RGB8I),G===i.SHORT&&(q=i.RGB16I),G===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),G===i.UNSIGNED_INT&&(q=i.RGBA32UI),G===i.BYTE&&(q=i.RGBA8I),G===i.SHORT&&(q=i.RGBA16I),G===i.INT&&(q=i.RGBA32I)),M===i.RGB&&(G===i.UNSIGNED_SHORT&&ht&&(q=ht.RGB16_EXT),G===i.SHORT&&ht&&(q=ht.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),M===i.RGBA){const Q=lt?Ds:Jt.getTransfer(K);G===i.FLOAT&&(q=i.RGBA32F),G===i.HALF_FLOAT&&(q=i.RGBA16F),G===i.UNSIGNED_BYTE&&(q=Q===oe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ht&&(q=ht.RGBA16_EXT),G===i.SHORT&&ht&&(q=ht.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function y(P,M){let G;return P?M===null||M===En||M===Rr?G=i.DEPTH24_STENCIL8:M===dn?G=i.DEPTH32F_STENCIL8:M===Tr&&(G=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===En||M===Rr?G=i.DEPTH_COMPONENT24:M===dn?G=i.DEPTH_COMPONENT32F:M===Tr&&(G=i.DEPTH_COMPONENT16),G}function v(P,M){return f(P)===!0||P.isFramebufferTexture&&P.minFilter!==Pe&&P.minFilter!==Ue?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function w(P){const M=P.target;M.removeEventListener("dispose",w),A(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function _(P){const M=P.target;M.removeEventListener("dispose",_),D(M)}function A(P){const M=n.get(P);if(M.__webglInit===void 0)return;const G=P.source,V=p.get(G);if(V){const K=V[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(P),Object.keys(V).length===0&&p.delete(G)}n.remove(P)}function C(P){const M=n.get(P);i.deleteTexture(M.__webglTexture);const G=P.source,V=p.get(G);delete V[M.__cacheKey],o.memory.textures--}function D(P){const M=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(M.__webglFramebuffer[V]))for(let K=0;K<M.__webglFramebuffer[V].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[V][K]);else i.deleteFramebuffer(M.__webglFramebuffer[V]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[V])}else{if(Array.isArray(M.__webglFramebuffer))for(let V=0;V<M.__webglFramebuffer.length;V++)i.deleteFramebuffer(M.__webglFramebuffer[V]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let V=0;V<M.__webglColorRenderbuffer.length;V++)M.__webglColorRenderbuffer[V]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[V]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=P.textures;for(let V=0,K=G.length;V<K;V++){const lt=n.get(G[V]);lt.__webglTexture&&(i.deleteTexture(lt.__webglTexture),o.memory.textures--),n.remove(G[V])}n.remove(P)}let L=0;function H(){L=0}function Y(){return L}function z(P){L=P}function W(){const P=L;return P>=r.maxTextures&&Bt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function k(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function X(P,M){const G=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){const V=P.image;if(V===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(G,P,M);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function J(P,M){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Dt(G,P,M);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function et(P,M){const G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){Dt(G,P,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function nt(P,M){const G=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){At(G,P,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const ut={[Qo]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[ta]:i.MIRRORED_REPEAT},Z={[Pe]:i.NEAREST,[qh]:i.NEAREST_MIPMAP_NEAREST,[Hr]:i.NEAREST_MIPMAP_LINEAR,[Ue]:i.LINEAR,[js]:i.LINEAR_MIPMAP_NEAREST,[di]:i.LINEAR_MIPMAP_LINEAR},Pt={[Zh]:i.NEVER,[ed]:i.ALWAYS,[Jh]:i.LESS,[qa]:i.LEQUAL,[jh]:i.EQUAL,[Ya]:i.GEQUAL,[Qh]:i.GREATER,[td]:i.NOTEQUAL};function bt(P,M){if(M.type===dn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Ue||M.magFilter===js||M.magFilter===Hr||M.magFilter===di||M.minFilter===Ue||M.minFilter===js||M.minFilter===Hr||M.minFilter===di)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ut[M.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ut[M.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ut[M.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,Z[M.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pe||M.minFilter!==Hr&&M.minFilter!==di||M.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function $(P,M){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",w));const V=M.source;let K=p.get(V);K===void 0&&(K={},p.set(V,K));const lt=k(M);if(lt!==P.__cacheKey){K[lt]===void 0&&(K[lt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),K[lt].usedTimes++;const ht=K[P.__cacheKey];ht!==void 0&&(K[P.__cacheKey].usedTimes--,ht.usedTimes===0&&C(M)),P.__cacheKey=lt,P.__webglTexture=K[lt].texture}return G}function rt(P,M,G){return Math.floor(Math.floor(P/G)/M)}function ot(P,M,G,V){const lt=P.updateRanges;if(lt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,G,V,M.data);else{lt.sort((Rt,ct)=>Rt.start-ct.start);let ht=0;for(let Rt=1;Rt<lt.length;Rt++){const ct=lt[ht],_t=lt[Rt],Nt=ct.start+ct.count,Tt=rt(_t.start,M.width,4),kt=rt(ct.start,M.width,4);_t.start<=Nt+1&&Tt===kt&&rt(_t.start+_t.count-1,M.width,4)===Tt?ct.count=Math.max(ct.count,_t.start+_t.count-ct.start):(++ht,lt[ht]=_t)}lt.length=ht+1;const q=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let Rt=0,ct=lt.length;Rt<ct;Rt++){const _t=lt[Rt],Nt=Math.floor(_t.start/4),Tt=Math.ceil(_t.count/4),kt=Nt%M.width,F=Math.floor(Nt/M.width),pt=Tt,tt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,kt,F,pt,tt,G,V,M.data)}P.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function Dt(P,M,G){let V=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(V=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(V=i.TEXTURE_3D);const K=$(P,M),lt=M.source;e.bindTexture(V,P.__webglTexture,i.TEXTURE0+G);const ht=n.get(lt);if(lt.version!==ht.__version||K===!0){if(e.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const tt=Jt.getPrimaries(Jt.workingColorSpace),xt=M.colorSpace===Jn?null:Jt.getPrimaries(M.colorSpace),St=M.colorSpace===Jn||tt===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St)}e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=m(M.image,!1,r.maxTextureSize);Q=_e(M,Q);const gt=s.convert(M.format,M.colorSpace),Rt=s.convert(M.type);let ct=g(M.internalFormat,gt,Rt,M.normalized,M.colorSpace,M.isVideoTexture);bt(V,M);let _t;const Nt=M.mipmaps,Tt=M.isVideoTexture!==!0,kt=ht.__version===void 0||K===!0,F=lt.dataReady,pt=v(M,Q);if(M.isDepthTexture)ct=y(M.format===fi,M.type),kt&&(Tt?e.texStorage2D(i.TEXTURE_2D,1,ct,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ct,Q.width,Q.height,0,gt,Rt,null));else if(M.isDataTexture)if(Nt.length>0){Tt&&kt&&e.texStorage2D(i.TEXTURE_2D,pt,ct,Nt[0].width,Nt[0].height);for(let tt=0,xt=Nt.length;tt<xt;tt++)_t=Nt[tt],Tt?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,_t.width,_t.height,gt,Rt,_t.data):e.texImage2D(i.TEXTURE_2D,tt,ct,_t.width,_t.height,0,gt,Rt,_t.data);M.generateMipmaps=!1}else Tt?(kt&&e.texStorage2D(i.TEXTURE_2D,pt,ct,Q.width,Q.height),F&&ot(M,Q,gt,Rt)):e.texImage2D(i.TEXTURE_2D,0,ct,Q.width,Q.height,0,gt,Rt,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Tt&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ct,Nt[0].width,Nt[0].height,Q.depth);for(let tt=0,xt=Nt.length;tt<xt;tt++)if(_t=Nt[tt],M.format!==fn)if(gt!==null)if(Tt){if(F)if(M.layerUpdates.size>0){const St=uc(_t.width,_t.height,M.format,M.type);for(const it of M.layerUpdates){const Lt=_t.data.subarray(it*St/_t.data.BYTES_PER_ELEMENT,(it+1)*St/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,it,_t.width,_t.height,1,gt,Lt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,_t.width,_t.height,Q.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,ct,_t.width,_t.height,Q.depth,0,_t.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Tt?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,_t.width,_t.height,Q.depth,gt,Rt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,ct,_t.width,_t.height,Q.depth,0,gt,Rt,_t.data)}else{Tt&&kt&&e.texStorage2D(i.TEXTURE_2D,pt,ct,Nt[0].width,Nt[0].height);for(let tt=0,xt=Nt.length;tt<xt;tt++)_t=Nt[tt],M.format!==fn?gt!==null?Tt?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,ct,_t.width,_t.height,0,_t.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Tt?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,_t.width,_t.height,gt,Rt,_t.data):e.texImage2D(i.TEXTURE_2D,tt,ct,_t.width,_t.height,0,gt,Rt,_t.data)}else if(M.isDataArrayTexture)if(Tt){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ct,Q.width,Q.height,Q.depth),F)if(M.layerUpdates.size>0){const tt=uc(Q.width,Q.height,M.format,M.type);for(const xt of M.layerUpdates){const St=Q.data.subarray(xt*tt/Q.data.BYTES_PER_ELEMENT,(xt+1)*tt/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xt,Q.width,Q.height,1,gt,Rt,St)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,gt,Rt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,Q.width,Q.height,Q.depth,0,gt,Rt,Q.data);else if(M.isData3DTexture)Tt?(kt&&e.texStorage3D(i.TEXTURE_3D,pt,ct,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,gt,Rt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ct,Q.width,Q.height,Q.depth,0,gt,Rt,Q.data);else if(M.isFramebufferTexture){if(kt)if(Tt)e.texStorage2D(i.TEXTURE_2D,pt,ct,Q.width,Q.height);else{let tt=Q.width,xt=Q.height;for(let St=0;St<pt;St++)e.texImage2D(i.TEXTURE_2D,St,ct,tt,xt,0,gt,Rt,null),tt>>=1,xt>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){const tt=i.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),Q.parentNode!==tt){tt.appendChild(Q),d.add(M),tt.onpaint=xt=>{const St=xt.changedElements;for(const it of d)St.includes(it.image)&&(it.needsUpdate=!0)},tt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{const St=i.RGBA,it=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,St,it,Lt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Tt&&kt){const tt=Kt(Nt[0]);e.texStorage2D(i.TEXTURE_2D,pt,ct,tt.width,tt.height)}for(let tt=0,xt=Nt.length;tt<xt;tt++)_t=Nt[tt],Tt?F&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,gt,Rt,_t):e.texImage2D(i.TEXTURE_2D,tt,ct,gt,Rt,_t);M.generateMipmaps=!1}else if(Tt){if(kt){const tt=Kt(Q);e.texStorage2D(i.TEXTURE_2D,pt,ct,tt.width,tt.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Rt,Q)}else e.texImage2D(i.TEXTURE_2D,0,ct,gt,Rt,Q);f(M)&&b(V),ht.__version=lt.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function At(P,M,G){if(M.image.length!==6)return;const V=$(P,M),K=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);const lt=n.get(K);if(K.version!==lt.__version||V===!0){e.activeTexture(i.TEXTURE0+G);const ht=Jt.getPrimaries(Jt.workingColorSpace),q=M.colorSpace===Jn?null:Jt.getPrimaries(M.colorSpace),Q=M.colorSpace===Jn||ht===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const gt=M.isCompressedTexture||M.image[0].isCompressedTexture,Rt=M.image[0]&&M.image[0].isDataTexture,ct=[];for(let it=0;it<6;it++)!gt&&!Rt?ct[it]=m(M.image[it],!0,r.maxCubemapSize):ct[it]=Rt?M.image[it].image:M.image[it],ct[it]=_e(M,ct[it]);const _t=ct[0],Nt=s.convert(M.format,M.colorSpace),Tt=s.convert(M.type),kt=g(M.internalFormat,Nt,Tt,M.normalized,M.colorSpace),F=M.isVideoTexture!==!0,pt=lt.__version===void 0||V===!0,tt=K.dataReady;let xt=v(M,_t);bt(i.TEXTURE_CUBE_MAP,M);let St;if(gt){F&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,kt,_t.width,_t.height);for(let it=0;it<6;it++){St=ct[it].mipmaps;for(let Lt=0;Lt<St.length;Lt++){const Ct=St[Lt];M.format!==fn?Nt!==null?F?tt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Ct.width,Ct.height,Nt,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,kt,Ct.width,Ct.height,0,Ct.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Ct.width,Ct.height,Nt,Tt,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,kt,Ct.width,Ct.height,0,Nt,Tt,Ct.data)}}}else{if(St=M.mipmaps,F&&pt){St.length>0&&xt++;const it=Kt(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xt,kt,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,ct[it].width,ct[it].height,Nt,Tt,ct[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,ct[it].width,ct[it].height,0,Nt,Tt,ct[it].data);for(let Lt=0;Lt<St.length;Lt++){const ge=St[Lt].image[it].image;F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,ge.width,ge.height,Nt,Tt,ge.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,kt,ge.width,ge.height,0,Nt,Tt,ge.data)}}else{F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Nt,Tt,ct[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,kt,Nt,Tt,ct[it]);for(let Lt=0;Lt<St.length;Lt++){const Ct=St[Lt];F?tt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,Nt,Tt,Ct.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,kt,Nt,Tt,Ct.image[it])}}}f(M)&&b(i.TEXTURE_CUBE_MAP),lt.__version=K.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function vt(P,M,G,V,K,lt){const ht=s.convert(G.format,G.colorSpace),q=s.convert(G.type),Q=g(G.internalFormat,ht,q,G.normalized,G.colorSpace),gt=n.get(M),Rt=n.get(G);if(Rt.__renderTarget=M,!gt.__hasExternalTextures){const ct=Math.max(1,M.width>>lt),_t=Math.max(1,M.height>>lt);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,lt,Q,ct,_t,M.depth,0,ht,q,null):e.texImage2D(K,lt,Q,ct,_t,0,ht,q,null)}e.bindFramebuffer(i.FRAMEBUFFER,P),Wt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,V,K,Rt.__webglTexture,0,re(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,V,K,Rt.__webglTexture,lt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(P,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),M.depthBuffer){const V=M.depthTexture,K=V&&V.isDepthTexture?V.type:null,lt=y(M.stencilBuffer,K),ht=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Wt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(M),lt,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(M),lt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,lt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,P)}else{const V=M.textures;for(let K=0;K<V.length;K++){const lt=V[K],ht=s.convert(lt.format,lt.colorSpace),q=s.convert(lt.type),Q=g(lt.internalFormat,ht,q,lt.normalized,lt.colorSpace);Wt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re(M),Q,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,re(M),Q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Q,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(P,M,G){const V=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),bt(i.TEXTURE_CUBE_MAP,M.depthTexture);const gt=s.convert(M.depthTexture.format),Rt=s.convert(M.depthTexture.type);let ct;M.depthTexture.format===zn?ct=i.DEPTH_COMPONENT24:M.depthTexture.format===fi&&(ct=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ct,M.width,M.height,0,gt,Rt,null)}}else X(M.depthTexture,0);const lt=K.__webglTexture,ht=re(M),q=V?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Q=M.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===zn)Wt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,q,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,Q,q,lt,0);else if(M.depthTexture.format===fi)Wt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,q,lt,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,Q,q,lt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(P){const M=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const V=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),V){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=V}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let V=0;V<6;V++)Ft(M.__webglFramebuffer[V],P,V);else{const V=P.texture.mipmaps;V&&V.length>0?Ft(M.__webglFramebuffer[0],P,0):Ft(M.__webglFramebuffer,P,0)}else if(G){M.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[V]),M.__webglDepthbuffer[V]===void 0)M.__webglDepthbuffer[V]=i.createRenderbuffer(),te(M.__webglDepthbuffer[V],P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer[V];i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,lt)}}else{const V=P.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),te(M.__webglDepthbuffer,P,!1);else{const K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,lt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(P,M,G){const V=n.get(P);M!==void 0&&vt(V.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&$t(P)}function Ot(P){const M=P.texture,G=n.get(P),V=n.get(M);P.addEventListener("dispose",_);const K=P.textures,lt=P.isWebGLCubeRenderTarget===!0,ht=K.length>1;if(ht||(V.__webglTexture===void 0&&(V.__webglTexture=i.createTexture()),V.__version=M.version,o.memory.textures++),lt){G.__webglFramebuffer=[];for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[q]=[];for(let Q=0;Q<M.mipmaps.length;Q++)G.__webglFramebuffer[q][Q]=i.createFramebuffer()}else G.__webglFramebuffer[q]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let q=0;q<M.mipmaps.length;q++)G.__webglFramebuffer[q]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ht)for(let q=0,Q=K.length;q<Q;q++){const gt=n.get(K[q]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),o.memory.textures++)}if(P.samples>0&&Wt(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let q=0;q<K.length;q++){const Q=K[q];G.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[q]);const gt=s.convert(Q.format,Q.colorSpace),Rt=s.convert(Q.type),ct=g(Q.internalFormat,gt,Rt,Q.normalized,Q.colorSpace,P.isXRRenderTarget===!0),_t=re(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,ct,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,G.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),te(G.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(lt){e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture),bt(i.TEXTURE_CUBE_MAP,M);for(let q=0;q<6;q++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)vt(G.__webglFramebuffer[q][Q],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Q);else vt(G.__webglFramebuffer[q],P,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(M)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let q=0,Q=K.length;q<Q;q++){const gt=K[q],Rt=n.get(gt);let ct=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ct=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Rt.__webglTexture),bt(ct,gt),vt(G.__webglFramebuffer,P,gt,i.COLOR_ATTACHMENT0+q,ct,0),f(gt)&&b(ct)}e.unbindTexture()}else{let q=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(q=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(q,V.__webglTexture),bt(q,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)vt(G.__webglFramebuffer[Q],P,M,i.COLOR_ATTACHMENT0,q,Q);else vt(G.__webglFramebuffer,P,M,i.COLOR_ATTACHMENT0,q,0);f(M)&&b(q),e.unbindTexture()}P.depthBuffer&&$t(P)}function ne(P){const M=P.textures;for(let G=0,V=M.length;G<V;G++){const K=M[G];if(f(K)){const lt=E(P),ht=n.get(K).__webglTexture;e.bindTexture(lt,ht),b(lt),e.unbindTexture()}}}const le=[],Ht=[];function ie(P){if(P.samples>0){if(Wt(P)===!1){const M=P.textures,G=P.width,V=P.height;let K=i.COLOR_BUFFER_BIT;const lt=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(P),q=M.length>1;if(q)for(let gt=0;gt<M.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);const Q=P.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let gt=0;gt<M.length;gt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[gt]);const Rt=n.get(M[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Rt,0)}i.blitFramebuffer(0,0,G,V,0,0,G,V,K,i.NEAREST),l===!0&&(le.length=0,Ht.length=0,le.push(i.COLOR_ATTACHMENT0+gt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(le.push(lt),Ht.push(lt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ht)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let gt=0;gt<M.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[gt]);const Rt=n.get(M[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Rt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function re(P){return Math.min(r.maxSamples,P.samples)}function Wt(P){const M=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function U(P){const M=o.render.frame;u.get(P)!==M&&(u.set(P,M),P.update())}function _e(P,M){const G=P.colorSpace,V=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Ps&&G!==Jn&&(Jt.getTransfer(G)===oe?(V!==fn||K!==sn)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",G)),M}function Kt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=H,this.getTextureUnits=Y,this.setTextureUnits=z,this.setTexture2D=X,this.setTexture2DArray=J,this.setTexture3D=et,this.setTextureCube=nt,this.rebindTextures=Yt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function W_(i,t){function e(n,r=Jn){let s;const o=Jt.getTransfer(r);if(n===sn)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Eu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mu)return i.BYTE;if(n===Su)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===Ga)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===wu)return i.ALPHA;if(n===Au)return i.RGB;if(n===fn)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Ha)return i.RED;if(n===Wa)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===Xa)return i.RG_INTEGER;if(n===$a)return i.RGBA_INTEGER;if(n===Ms||n===Ss||n===Es||n===bs)if(o===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ea||n===na||n===ia||n===ra)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ea)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ra)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sa||n===oa||n===aa||n===la||n===ca||n===Rs||n===ua)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===sa||n===oa)return o===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===aa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===la)return s.COMPRESSED_R11_EAC;if(n===ca)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Rs)return s.COMPRESSED_RG11_EAC;if(n===ua)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ha||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===xa||n===va||n===ya||n===Ma||n===Sa||n===Ea||n===ba)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ha)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ya)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sa)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ea)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ba)return o===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wa||n===Aa||n===Ta)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===wa)return o===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Aa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ra||n===Ca||n===Cs||n===Pa)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ra)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Nu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new bn({vertexShader:X_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new mn(new Vs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y_ extends ti{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const S=typeof XRWebGLBinding<"u",m=new q_,f={},b=e.getContextAttributes();let E=null,g=null;const y=[],v=[],w=new Gt;let _=null;const A=new nn;A.viewport=new ve;const C=new nn;C.viewport=new ve;const D=[A,C],L=new ef;let H=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let rt=y[$];return rt===void 0&&(rt=new ro,y[$]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function($){let rt=y[$];return rt===void 0&&(rt=new ro,y[$]=rt),rt.getGripSpace()},this.getHand=function($){let rt=y[$];return rt===void 0&&(rt=new ro,y[$]=rt),rt.getHandSpace()};function z($){const rt=v.indexOf($.inputSource);if(rt===-1)return;const ot=y[rt];ot!==void 0&&(ot.update($.inputSource,$.frame,c||o),ot.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let $=0;$<y.length;$++){const rt=v[$];rt!==null&&(v[$]=null,y[$].disconnect(rt))}H=null,Y=null,m.reset();for(const $ in f)delete f[$];t.setRenderTarget(E),p=null,h=null,d=null,r=null,g=null,bt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(E=t.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(w),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,Dt=null,At=null;b.depth&&(At=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=b.stencil?fi:zn,Dt=b.stencil?Rr:En);const vt={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(vt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),g=new Sn(h.textureWidth,h.textureHeight,{format:fn,type:sn,depthTexture:new Yi(h.textureWidth,h.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ot={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ot),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Sn(p.framebufferWidth,p.framebufferHeight,{format:fn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),bt.setContext(r),bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k($){for(let rt=0;rt<$.removed.length;rt++){const ot=$.removed[rt],Dt=v.indexOf(ot);Dt>=0&&(v[Dt]=null,y[Dt].disconnect(ot))}for(let rt=0;rt<$.added.length;rt++){const ot=$.added[rt];let Dt=v.indexOf(ot);if(Dt===-1){for(let vt=0;vt<y.length;vt++)if(vt>=v.length){v.push(ot),Dt=vt;break}else if(v[vt]===null){v[vt]=ot,Dt=vt;break}if(Dt===-1)break}const At=y[Dt];At&&At.connect(ot)}}const X=new O,J=new O;function et($,rt,ot){X.setFromMatrixPosition(rt.matrixWorld),J.setFromMatrixPosition(ot.matrixWorld);const Dt=X.distanceTo(J),At=rt.projectionMatrix.elements,vt=ot.projectionMatrix.elements,te=At[14]/(At[10]-1),Ft=At[14]/(At[10]+1),$t=(At[9]+1)/At[5],Yt=(At[9]-1)/At[5],Ot=(At[8]-1)/At[0],ne=(vt[8]+1)/vt[0],le=te*Ot,Ht=te*ne,ie=Dt/(-Ot+ne),re=ie*-Ot;if(rt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(re),$.translateZ(ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),At[10]===-1)$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Wt=te+ie,U=Ft+ie,_e=le-re,Kt=Ht+(Dt-re),P=$t*Ft/U*Wt,M=Yt*Ft/U*Wt;$.projectionMatrix.makePerspective(_e,Kt,P,M,Wt,U),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,rt){rt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(rt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let rt=$.near,ot=$.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(ot=m.depthFar)),L.near=C.near=A.near=rt,L.far=C.far=A.far=ot,(H!==L.near||Y!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),H=L.near,Y=L.far),L.layers.mask=$.layers.mask|6,A.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;const Dt=$.parent,At=L.cameras;nt(L,Dt);for(let vt=0;vt<At.length;vt++)nt(At[vt],Dt);At.length===2?et(L,A,C):L.projectionMatrix.copy(A.projectionMatrix),ut($,L,Dt)};function ut($,rt,ot){ot===null?$.matrix.copy(rt.matrixWorld):($.matrix.copy(ot.matrixWorld),$.matrix.invert(),$.matrix.multiply(rt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(rt.projectionMatrix),$.projectionMatrixInverse.copy(rt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function($){l=$,h!==null&&(h.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function($){return f[$]};let Z=null;function Pt($,rt){if(u=rt.getViewerPose(c||o),x=rt,u!==null){const ot=u.views;p!==null&&(t.setRenderTargetFramebuffer(g,p.framebuffer),t.setRenderTarget(g));let Dt=!1;ot.length!==L.cameras.length&&(L.cameras.length=0,Dt=!0);for(let Ft=0;Ft<ot.length;Ft++){const $t=ot[Ft];let Yt=null;if(p!==null)Yt=p.getViewport($t);else{const ne=d.getViewSubImage(h,$t);Yt=ne.viewport,Ft===0&&(t.setRenderTargetTextures(g,ne.colorTexture,ne.depthStencilTexture),t.setRenderTarget(g))}let Ot=D[Ft];Ot===void 0&&(Ot=new nn,Ot.layers.enable(Ft),Ot.viewport=new ve,D[Ft]=Ot),Ot.matrix.fromArray($t.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray($t.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Ft===0&&(L.matrix.copy(Ot.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Dt===!0&&L.cameras.push(Ot)}const At=r.enabledFeatures;if(At&&At.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=n.getBinding();const Ft=d.getDepthInformation(ot[0]);Ft&&Ft.isValid&&Ft.texture&&m.init(Ft,r.renderState)}if(At&&At.includes("camera-access")&&S){t.state.unbindTexture(),d=n.getBinding();for(let Ft=0;Ft<ot.length;Ft++){const $t=ot[Ft].camera;if($t){let Yt=f[$t];Yt||(Yt=new Nu,f[$t]=Yt);const Ot=d.getCameraImage($t);Yt.sourceTexture=Ot}}}}for(let ot=0;ot<y.length;ot++){const Dt=v[ot],At=y[ot];Dt!==null&&At!==void 0&&At.update(Dt,rt,c||o)}Z&&Z($,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),x=null}const bt=new Bu;bt.setAnimationLoop(Pt),this.setAnimationLoop=function($){Z=$},this.dispose=function(){}}}const K_=new fe,Xu=new Vt;Xu.set(-1,0,0,0,1,0,0,0,1);function Z_(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Uu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,b,E,g){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,g)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),S(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===He&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===He&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),E=b.envMap,g=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(K_.makeRotationFromEuler(g)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=E*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===He&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function S(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function J_(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,y){const v=y.program;n.uniformBlockBinding(g,v)}function c(g,y){let v=r[g.id];v===void 0&&(m(g),v=u(g),r[g.id]=v,g.addEventListener("dispose",b));const w=y.program;n.updateUBOMapping(g,w);const _=t.render.frame;s[g.id]!==_&&(h(g),s[g.id]=_)}function u(g){const y=d();g.__bindingPointIndex=y;const v=i.createBuffer(),w=g.__size,_=g.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,w,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const y=r[g.id],v=g.uniforms,w=g.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let _=0,A=v.length;_<A;_++){const C=v[_];if(Array.isArray(C))for(let D=0,L=C.length;D<L;D++)p(C[D],_,D,w);else p(C,_,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(g,y,v,w){if(S(g,y,v,w)===!0){const _=g.__offset,A=g.value;if(Array.isArray(A)){let C=0;for(let D=0;D<A.length;D++){const L=A[D],H=f(L);x(L,g.__data,C),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,g.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,g.__data)}}function x(g,y,v){typeof g=="number"||typeof g=="boolean"?y[0]=g:g.isMatrix3?(y[0]=g.elements[0],y[1]=g.elements[1],y[2]=g.elements[2],y[3]=0,y[4]=g.elements[3],y[5]=g.elements[4],y[6]=g.elements[5],y[7]=0,y[8]=g.elements[6],y[9]=g.elements[7],y[10]=g.elements[8],y[11]=0):ArrayBuffer.isView(g)?y.set(new g.constructor(g.buffer,g.byteOffset,y.length)):g.toArray(y,v)}function S(g,y,v,w){const _=g.value,A=y+"_"+v;if(w[A]===void 0)return typeof _=="number"||typeof _=="boolean"?w[A]=_:ArrayBuffer.isView(_)?w[A]=_.slice():w[A]=_.clone(),!0;{const C=w[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return w[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(g){const y=g.uniforms;let v=0;const w=16;for(let A=0,C=y.length;A<C;A++){const D=Array.isArray(y[A])?y[A]:[y[A]];for(let L=0,H=D.length;L<H;L++){const Y=D[L],z=Array.isArray(Y.value)?Y.value:[Y.value];for(let W=0,k=z.length;W<k;W++){const X=z[W],J=f(X),et=v%w,nt=et%J.boundary,ut=et+nt;v+=nt,ut!==0&&w-ut<J.storage&&(v+=w-ut),Y.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=v,v+=J.storage}}}const _=v%w;return _>0&&(v+=w-_),g.__size=v,g.__cache={},this}function f(g){const y={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(y.boundary=4,y.storage=4):g.isVector2?(y.boundary=8,y.storage=8):g.isVector3||g.isColor?(y.boundary=16,y.storage=12):g.isVector4?(y.boundary=16,y.storage=16):g.isMatrix3?(y.boundary=48,y.storage=48):g.isMatrix4?(y.boundary=64,y.storage=64):g.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(g)?(y.boundary=16,y.storage=g.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",g),y}function b(g){const y=g.target;y.removeEventListener("dispose",b);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function E(){for(const g in r)i.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:E}}const j_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xn=null;function Q_(){return xn===null&&(xn=new Lu(j_,16,16,mi,Bn),xn.name="DFG_LUT",xn.minFilter=Ue,xn.magFilter=Ue,xn.wrapS=In,xn.wrapT=In,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}class t0{constructor(t={}){const{canvas:e=id(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:p=sn}=t;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const S=p,m=new Set([$a,Xa,Wa]),f=new Set([sn,En,Tr,Rr,ka,Va]),b=new Uint32Array(4),E=new Int32Array(4),g=new O;let y=null,v=null;const w=[],_=[];let A=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let D=!1,L=null,H=null,Y=null,z=null;this._outputColorSpace=Ze;let W=0,k=0,X=null,J=-1,et=null;const nt=new ve,ut=new ve;let Z=null;const Pt=new Qt(0);let bt=0,$=e.width,rt=e.height,ot=1,Dt=null,At=null;const vt=new ve(0,0,$,rt),te=new ve(0,0,$,rt);let Ft=!1;const $t=new ja;let Yt=!1,Ot=!1;const ne=new fe,le=new O,Ht=new ve,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function Wt(){return X===null?ot:1}let U=n;function _e(T,R){return e.getContext(T,R)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${za}`),e.addEventListener("webglcontextlost",ge,!1),e.addEventListener("webglcontextrestored",se,!1),e.addEventListener("webglcontextcreationerror",$e,!1),U===null){const R="webgl2";if(U=_e(R,T),U===null)throw _e(R)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw jt("WebGLRenderer: "+T.message),T}let Kt,P,M,G,V,K,lt,ht,q,Q,gt,Rt,ct,_t,Nt,Tt,kt,F,pt,tt,xt,St,it;function Lt(){Kt=new Qm(U),Kt.init(),xt=new W_(U,Kt),P=new Xm(U,Kt,t,xt),M=new V_(U,Kt),P.reversedDepthBuffer&&h&&M.buffers.depth.setReversed(!0),H=U.createFramebuffer(),Y=U.createFramebuffer(),z=U.createFramebuffer(),G=new ng(U),V=new R_,K=new H_(U,Kt,M,V,P,xt,G),lt=new jm(C),ht=new of(U),St=new Hm(U,ht),q=new tg(U,ht,G,St),Q=new rg(U,q,ht,St,G),F=new ig(U,P,K),Nt=new $m(V),gt=new T_(C,lt,Kt,P,St,Nt),Rt=new Z_(C,V),ct=new P_,_t=new F_(Kt),kt=new Vm(C,lt,M,Q,x,l),Tt=new k_(C,Q,P),it=new J_(U,G,P,M),pt=new Wm(U,Kt,G),tt=new eg(U,Kt,G),G.programs=gt.programs,C.capabilities=P,C.extensions=Kt,C.properties=V,C.renderLists=ct,C.shadowMap=Tt,C.state=M,C.info=G}Lt(),S!==sn&&(A=new og(S,e.width,e.height,a,r,s));const Ct=new Y_(C,U);this.xr=Ct,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=Kt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Kt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ot},this.setPixelRatio=function(T){T!==void 0&&(ot=T,this.setSize($,rt,!1))},this.getSize=function(T){return T.set($,rt)},this.setSize=function(T,R,I=!0){if(Ct.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,rt=R,e.width=Math.floor(T*ot),e.height=Math.floor(R*ot),I===!0&&(e.style.width=T+"px",e.style.height=R+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,T,R)},this.getDrawingBufferSize=function(T){return T.set($*ot,rt*ot).floor()},this.setDrawingBufferSize=function(T,R,I){$=T,rt=R,ot=I,e.width=Math.floor(T*I),e.height=Math.floor(R*I),this.setViewport(0,0,T,R)},this.setEffects=function(T){if(S===sn){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let R=0;R<T.length;R++)if(T[R].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(nt)},this.getViewport=function(T){return T.copy(vt)},this.setViewport=function(T,R,I,N){T.isVector4?vt.set(T.x,T.y,T.z,T.w):vt.set(T,R,I,N),M.viewport(nt.copy(vt).multiplyScalar(ot).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,R,I,N){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,R,I,N),M.scissor(ut.copy(te).multiplyScalar(ot).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(T){M.setScissorTest(Ft=T)},this.setOpaqueSort=function(T){Dt=T},this.setTransparentSort=function(T){At=T},this.getClearColor=function(T){return T.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(T=!0,R=!0,I=!0){let N=0;if(T){let B=!1;if(X!==null){const st=X.texture.format;B=m.has(st)}if(B){const st=X.texture.type,j=f.has(st),at=kt.getClearColor(),yt=kt.getClearAlpha(),mt=at.r,It=at.g,Ut=at.b;j?(b[0]=mt,b[1]=It,b[2]=Ut,b[3]=yt,U.clearBufferuiv(U.COLOR,0,b)):(E[0]=mt,E[1]=It,E[2]=Ut,E[3]=yt,U.clearBufferiv(U.COLOR,0,E))}else N|=U.COLOR_BUFFER_BIT}R&&(N|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),I&&(N|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N!==0&&U.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){e.removeEventListener("webglcontextlost",ge,!1),e.removeEventListener("webglcontextrestored",se,!1),e.removeEventListener("webglcontextcreationerror",$e,!1),kt.dispose(),ct.dispose(),_t.dispose(),V.dispose(),lt.dispose(),Q.dispose(),St.dispose(),it.dispose(),gt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",vi),Ct.removeEventListener("sessionend",Or),wn.stop()};function ge(T){T.preventDefault(),Ll("WebGLRenderer: Context Lost."),D=!0}function se(){Ll("WebGLRenderer: Context Restored."),D=!1;const T=G.autoReset,R=Tt.enabled,I=Tt.autoUpdate,N=Tt.needsUpdate,B=Tt.type;Lt(),G.autoReset=T,Tt.enabled=R,Tt.autoUpdate=I,Tt.needsUpdate=N,Tt.type=B}function $e(T){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function je(T){const R=T.target;R.removeEventListener("dispose",je),qs(R)}function qs(T){Ys(T),V.remove(T)}function Ys(T){const R=V.get(T).programs;R!==void 0&&(R.forEach(function(I){gt.releaseProgram(I)}),T.isShaderMaterial&&gt.releaseShaderCache(T))}this.renderBufferDirect=function(T,R,I,N,B,st){R===null&&(R=ie);const j=B.isMesh&&B.matrixWorld.determinantAffine()<0,at=Gr(T,R,I,N,B);M.setMaterial(N,j);let yt=I.index,mt=1;if(N.wireframe===!0){if(yt=q.getWireframeAttribute(I),yt===void 0)return;mt=2}const It=I.drawRange,Ut=I.attributes.position;let ft=It.start*mt,Zt=(It.start+It.count)*mt;st!==null&&(ft=Math.max(ft,st.start*mt),Zt=Math.min(Zt,(st.start+st.count)*mt)),yt!==null?(ft=Math.max(ft,0),Zt=Math.min(Zt,yt.count)):Ut!=null&&(ft=Math.max(ft,0),Zt=Math.min(Zt,Ut.count));const xe=Zt-ft;if(xe<0||xe===1/0)return;St.setup(B,N,at,I,yt);let ce,ue=pt;if(yt!==null&&(ce=ht.get(yt),ue=tt,ue.setIndex(ce)),B.isMesh)N.wireframe===!0?(M.setLineWidth(N.wireframeLinewidth*Wt()),ue.setMode(U.LINES)):ue.setMode(U.TRIANGLES);else if(B.isLine){let Le=N.linewidth;Le===void 0&&(Le=1),M.setLineWidth(Le*Wt()),B.isLineSegments?ue.setMode(U.LINES):B.isLineLoop?ue.setMode(U.LINE_LOOP):ue.setMode(U.LINE_STRIP)}else B.isPoints?ue.setMode(U.POINTS):B.isSprite&&ue.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(Kt.get("WEBGL_multi_draw"))ue.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Le=B._multiDrawStarts,wt=B._multiDrawCounts,qe=B._multiDrawCount,ee=yt?ht.get(yt).bytesPerElement:1,Qe=V.get(N).currentProgram.getUniforms();for(let gn=0;gn<qe;gn++)Qe.setValue(U,"_gl_DrawID",gn),ue.render(Le[gn]/ee,wt[gn])}else if(B.isInstancedMesh)ue.renderInstances(ft,xe,B.count);else if(I.isInstancedBufferGeometry){const Le=I._maxInstanceCount!==void 0?I._maxInstanceCount:1/0,wt=Math.min(I.instanceCount,Le);ue.renderInstances(ft,xe,wt)}else ue.render(ft,xe)};function Fr(T,R,I){T.transparent===!0&&T.side===Ln&&T.forceSinglePass===!1?(T.side=He,T.needsUpdate=!0,ri(T,R,I),T.side=Qn,T.needsUpdate=!0,ri(T,R,I),T.side=Ln):ri(T,R,I)}this.compile=function(T,R,I=null){I===null&&(I=T),v=_t.get(I),v.init(R),_.push(v),I.traverseVisible(function(B){B.isLight&&B.layers.test(R.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),T!==I&&T.traverseVisible(function(B){B.isLight&&B.layers.test(R.layers)&&(v.pushLight(B),B.castShadow&&v.pushShadow(B))}),v.setupLights();const N=new Set;return T.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const st=B.material;if(st)if(Array.isArray(st))for(let j=0;j<st.length;j++){const at=st[j];Fr(at,I,B),N.add(at)}else Fr(st,I,B),N.add(st)}),v=_.pop(),N},this.compileAsync=function(T,R,I=null){const N=this.compile(T,R,I);return new Promise(B=>{function st(){if(N.forEach(function(j){V.get(j).currentProgram.isReady()&&N.delete(j)}),N.size===0){B(T);return}setTimeout(st,10)}Kt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let ni=null;function Ks(T){ni&&ni(T)}function vi(){wn.stop()}function Or(){wn.start()}const wn=new Bu;wn.setAnimationLoop(Ks),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(T){ni=T,Ct.setAnimationLoop(T),T===null?wn.stop():wn.start()},Ct.addEventListener("sessionstart",vi),Ct.addEventListener("sessionend",Or),this.render=function(T,R){if(R!==void 0&&R.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;L!==null&&L.renderStart(T,R);const I=Ct.enabled===!0&&Ct.isPresenting===!0,N=A!==null&&(X===null||I)&&A.begin(C,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(R),R=Ct.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,R,X),v=_t.get(T,_.length),v.init(R),v.state.textureUnits=K.getTextureUnits(),_.push(v),ne.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),$t.setFromProjectionMatrix(ne,yn,R.reversedDepth),Ot=this.localClippingEnabled,Yt=Nt.init(this.clippingPlanes,Ot),y=ct.get(T,w.length),y.init(),w.push(y),Ct.enabled===!0&&Ct.isPresenting===!0){const j=C.xr.getDepthSensingMesh();j!==null&&nr(j,R,-1/0,C.sortObjects)}nr(T,R,0,C.sortObjects),y.finish(),C.sortObjects===!0&&y.sort(Dt,At,R.reversedDepth),re=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,re&&kt.addToRenderList(y,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&Nt.beginShadows();const B=v.state.shadowsArray;if(Tt.render(B,T,R),Yt===!0&&Nt.endShadows(),(N&&A.hasRenderPass())===!1){const j=y.opaque,at=y.transmissive;if(v.setupLights(),R.isArrayCamera){const yt=R.cameras;if(at.length>0)for(let mt=0,It=yt.length;mt<It;mt++){const Ut=yt[mt];Br(j,at,T,Ut)}re&&kt.render(T);for(let mt=0,It=yt.length;mt<It;mt++){const Ut=yt[mt];ir(y,T,Ut,Ut.viewport)}}else at.length>0&&Br(j,at,T,R),re&&kt.render(T),ir(y,T,R)}X!==null&&k===0&&(K.updateMultisampleRenderTarget(X),K.updateRenderTargetMipmap(X)),N&&A.end(C),T.isScene===!0&&T.onAfterRender(C,T,R),St.resetDefaultState(),J=-1,et=null,_.pop(),_.length>0?(v=_[_.length-1],K.setTextureUnits(v.state.textureUnits),Yt===!0&&Nt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,w.pop(),w.length>0?y=w[w.length-1]:y=null,L!==null&&L.renderEnd()};function nr(T,R,I,N){if(T.visible===!1)return;if(T.layers.test(R.layers)){if(T.isGroup)I=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(R);else if(T.isLightProbeGrid)v.pushLightProbeGrid(T);else if(T.isLight)v.pushLight(T),T.castShadow&&v.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$t.intersectsSprite(T)){N&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ne);const j=Q.update(T),at=T.material;at.visible&&y.push(T,j,at,I,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||$t.intersectsObject(T))){const j=Q.update(T),at=T.material;if(N&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(j.boundingSphere===null&&j.computeBoundingSphere(),Ht.copy(j.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(ne)),Array.isArray(at)){const yt=j.groups;for(let mt=0,It=yt.length;mt<It;mt++){const Ut=yt[mt],ft=at[Ut.materialIndex];ft&&ft.visible&&y.push(T,j,ft,I,Ht.z,Ut)}}else at.visible&&y.push(T,j,at,I,Ht.z,null)}}const st=T.children;for(let j=0,at=st.length;j<at;j++)nr(st[j],R,I,N)}function ir(T,R,I,N){const{opaque:B,transmissive:st,transparent:j}=T;v.setupLightsView(I),Yt===!0&&Nt.setGlobalState(C.clippingPlanes,I),N&&M.viewport(nt.copy(N)),B.length>0&&ii(B,R,I),st.length>0&&ii(st,R,I),j.length>0&&ii(j,R,I),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Br(T,R,I,N){if((I.isScene===!0?I.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[N.id]===void 0){const ft=Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[N.id]=new Sn(1,1,{generateMipmaps:!0,type:ft?Bn:sn,minFilter:di,samples:Math.max(4,P.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const st=v.state.transmissionRenderTarget[N.id],j=N.viewport||nt;st.setSize(j.z*C.transmissionResolutionScale,j.w*C.transmissionResolutionScale);const at=C.getRenderTarget(),yt=C.getActiveCubeFace(),mt=C.getActiveMipmapLevel();C.setRenderTarget(st),C.getClearColor(Pt),bt=C.getClearAlpha(),bt<1&&C.setClearColor(16777215,.5),C.clear(),re&&kt.render(I);const It=C.toneMapping;C.toneMapping=Mn;const Ut=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),v.setupLightsView(N),Yt===!0&&Nt.setGlobalState(C.clippingPlanes,N),ii(T,I,N),K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let Zt=0,xe=R.length;Zt<xe;Zt++){const ce=R[Zt],{object:ue,geometry:Le,material:wt,group:qe}=ce;if(wt.side===Ln&&ue.layers.test(N.layers)){const ee=wt.side;wt.side=He,wt.needsUpdate=!0,yi(ue,I,N,Le,wt,qe),wt.side=ee,wt.needsUpdate=!0,ft=!0}}ft===!0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st))}C.setRenderTarget(at,yt,mt),C.setClearColor(Pt,bt),Ut!==void 0&&(N.viewport=Ut),C.toneMapping=It}function ii(T,R,I){const N=R.isScene===!0?R.overrideMaterial:null;for(let B=0,st=T.length;B<st;B++){const j=T[B],{object:at,geometry:yt,group:mt}=j;let It=j.material;It.allowOverride===!0&&N!==null&&(It=N),at.layers.test(I.layers)&&yi(at,R,I,yt,It,mt)}}function yi(T,R,I,N,B,st){T.onBeforeRender(C,R,I,N,B,st),T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),B.onBeforeRender(C,R,I,N,T,st),B.transparent===!0&&B.side===Ln&&B.forceSinglePass===!1?(B.side=He,B.needsUpdate=!0,C.renderBufferDirect(I,R,N,B,T,st),B.side=Qn,B.needsUpdate=!0,C.renderBufferDirect(I,R,N,B,T,st),B.side=Ln):C.renderBufferDirect(I,R,N,B,T,st),T.onAfterRender(C,R,I,N,B,st)}function ri(T,R,I){R.isScene!==!0&&(R=ie);const N=V.get(T),B=v.state.lights,st=v.state.shadowsArray,j=B.state.version,at=gt.getParameters(T,B.state,st,R,I,v.state.lightProbeGridArray),yt=gt.getProgramCacheKey(at);let mt=N.programs;N.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?R.environment:null,N.fog=R.fog;const It=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;N.envMap=lt.get(T.envMap||N.environment,It),N.envMapRotation=N.environment!==null&&T.envMap===null?R.environmentRotation:T.envMapRotation,mt===void 0&&(T.addEventListener("dispose",je),mt=new Map,N.programs=mt);let Ut=mt.get(yt);if(Ut!==void 0){if(N.currentProgram===Ut&&N.lightsStateVersion===j)return sr(T,at),Ut}else at.uniforms=gt.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,I,at),T.onBeforeCompile(at,C),Ut=gt.acquireProgram(at,yt),mt.set(yt,Ut),N.uniforms=at.uniforms;const ft=N.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ft.clippingPlanes=Nt.uniform),sr(T,at),N.needsLights=Vr(T),N.lightsStateVersion=j,N.needsLights&&(ft.ambientLightColor.value=B.state.ambient,ft.lightProbe.value=B.state.probe,ft.directionalLights.value=B.state.directional,ft.directionalLightShadows.value=B.state.directionalShadow,ft.spotLights.value=B.state.spot,ft.spotLightShadows.value=B.state.spotShadow,ft.rectAreaLights.value=B.state.rectArea,ft.ltc_1.value=B.state.rectAreaLTC1,ft.ltc_2.value=B.state.rectAreaLTC2,ft.pointLights.value=B.state.point,ft.pointLightShadows.value=B.state.pointShadow,ft.hemisphereLights.value=B.state.hemi,ft.directionalShadowMatrix.value=B.state.directionalShadowMatrix,ft.spotLightMatrix.value=B.state.spotLightMatrix,ft.spotLightMap.value=B.state.spotLightMap,ft.pointShadowMatrix.value=B.state.pointShadowMatrix),N.lightProbeGrid=v.state.lightProbeGridArray.length>0,N.currentProgram=Ut,N.uniformsList=null,Ut}function rr(T){if(T.uniformsList===null){const R=T.currentProgram.getUniforms();T.uniformsList=ws.seqWithValue(R.seq,T.uniforms)}return T.uniformsList}function sr(T,R){const I=V.get(T);I.outputColorSpace=R.outputColorSpace,I.batching=R.batching,I.batchingColor=R.batchingColor,I.instancing=R.instancing,I.instancingColor=R.instancingColor,I.instancingMorph=R.instancingMorph,I.skinning=R.skinning,I.morphTargets=R.morphTargets,I.morphNormals=R.morphNormals,I.morphColors=R.morphColors,I.morphTargetsCount=R.morphTargetsCount,I.numClippingPlanes=R.numClippingPlanes,I.numIntersection=R.numClipIntersection,I.vertexAlphas=R.vertexAlphas,I.vertexTangents=R.vertexTangents,I.toneMapping=R.toneMapping}function zr(T,R){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;g.setFromMatrixPosition(R.matrixWorld);for(let I=0,N=T.length;I<N;I++){const B=T[I];if(B.texture!==null&&B.boundingBox.containsPoint(g))return B}return null}function Gr(T,R,I,N,B){R.isScene!==!0&&(R=ie),K.resetTextureUnits();const st=R.fog,j=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?R.environment:null,at=X===null?C.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Jt.workingColorSpace,yt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap,mt=lt.get(N.envMap||j,yt),It=N.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,Ut=!!I.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),ft=!!I.morphAttributes.position,Zt=!!I.morphAttributes.normal,xe=!!I.morphAttributes.color;let ce=Mn;N.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ce=C.toneMapping);const ue=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Le=ue!==void 0?ue.length:0,wt=V.get(N),qe=v.state.lights;if(Yt===!0&&(Ot===!0||T!==et)){const me=T===et&&N.id===J;Nt.setState(N,T,me)}let ee=!1;N.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==qe.state.version||wt.outputColorSpace!==at||B.isBatchedMesh&&wt.batching===!1||!B.isBatchedMesh&&wt.batching===!0||B.isBatchedMesh&&wt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&wt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&wt.instancing===!1||!B.isInstancedMesh&&wt.instancing===!0||B.isSkinnedMesh&&wt.skinning===!1||!B.isSkinnedMesh&&wt.skinning===!0||B.isInstancedMesh&&wt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&wt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&wt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&wt.instancingMorph===!1&&B.morphTexture!==null||wt.envMap!==mt||N.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==Nt.numPlanes||wt.numIntersection!==Nt.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Ut||wt.morphTargets!==ft||wt.morphNormals!==Zt||wt.morphColors!==xe||wt.toneMapping!==ce||wt.morphTargetsCount!==Le||!!wt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,wt.__version=N.version);let Qe=wt.currentProgram;ee===!0&&(Qe=ri(N,R,B),L&&N.isNodeMaterial&&L.onUpdateProgram(N,Qe,wt));let gn=!1,Vn=!1,Mi=!1;const he=Qe.getUniforms(),ye=wt.uniforms;if(M.useProgram(Qe.program)&&(gn=!0,Vn=!0,Mi=!0),N.id!==J&&(J=N.id,Vn=!0),wt.needsLights){const me=zr(v.state.lightProbeGridArray,B);wt.lightProbeGrid!==me&&(wt.lightProbeGrid=me,Vn=!0)}if(gn||et!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),he.setValue(U,"projectionMatrix",T.projectionMatrix),he.setValue(U,"viewMatrix",T.matrixWorldInverse);const Wn=he.map.cameraPosition;Wn!==void 0&&Wn.setValue(U,le.setFromMatrixPosition(T.matrixWorld)),P.logarithmicDepthBuffer&&he.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&he.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),et!==T&&(et=T,Vn=!0,Mi=!0)}if(wt.needsLights&&(qe.state.directionalShadowMap.length>0&&he.setValue(U,"directionalShadowMap",qe.state.directionalShadowMap,K),qe.state.spotShadowMap.length>0&&he.setValue(U,"spotShadowMap",qe.state.spotShadowMap,K),qe.state.pointShadowMap.length>0&&he.setValue(U,"pointShadowMap",qe.state.pointShadowMap,K)),B.isSkinnedMesh){he.setOptional(U,B,"bindMatrix"),he.setOptional(U,B,"bindMatrixInverse");const me=B.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),he.setValue(U,"boneTexture",me.boneTexture,K))}B.isBatchedMesh&&(he.setOptional(U,B,"batchingTexture"),he.setValue(U,"batchingTexture",B._matricesTexture,K),he.setOptional(U,B,"batchingIdTexture"),he.setValue(U,"batchingIdTexture",B._indirectTexture,K),he.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&he.setValue(U,"batchingColorTexture",B._colorsTexture,K));const Hn=I.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&F.update(B,I,Qe),(Vn||wt.receiveShadow!==B.receiveShadow)&&(wt.receiveShadow=B.receiveShadow,he.setValue(U,"receiveShadow",B.receiveShadow)),(N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial)&&N.envMap===null&&R.environment!==null&&(ye.envMapIntensity.value=R.environmentIntensity),ye.dfgLUT!==void 0&&(ye.dfgLUT.value=Q_()),Vn){if(he.setValue(U,"toneMappingExposure",C.toneMappingExposure),wt.needsLights&&kr(ye,Mi),st&&N.fog===!0&&Rt.refreshFogUniforms(ye,st),Rt.refreshMaterialUniforms(ye,N,ot,rt,v.state.transmissionRenderTarget[T.id]),wt.needsLights&&wt.lightProbeGrid){const me=wt.lightProbeGrid;ye.probesSH.value=me.texture,ye.probesMin.value.copy(me.boundingBox.min),ye.probesMax.value.copy(me.boundingBox.max),ye.probesResolution.value.copy(me.resolution)}ws.upload(U,rr(wt),ye,K)}if(N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ws.upload(U,rr(wt),ye,K),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&he.setValue(U,"center",B.center),he.setValue(U,"modelViewMatrix",B.modelViewMatrix),he.setValue(U,"normalMatrix",B.normalMatrix),he.setValue(U,"modelMatrix",B.matrixWorld),N.uniformsGroups!==void 0){const me=N.uniformsGroups;for(let Wn=0,Si=me.length;Wn<Si;Wn++){const Ml=me[Wn];it.update(Ml,Qe),it.bind(Ml,Qe)}}return Qe}function kr(T,R){T.ambientLightColor.needsUpdate=R,T.lightProbe.needsUpdate=R,T.directionalLights.needsUpdate=R,T.directionalLightShadows.needsUpdate=R,T.pointLights.needsUpdate=R,T.pointLightShadows.needsUpdate=R,T.spotLights.needsUpdate=R,T.spotLightShadows.needsUpdate=R,T.rectAreaLights.needsUpdate=R,T.hemisphereLights.needsUpdate=R}function Vr(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,R,I){const N=V.get(T);N.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,N.__autoAllocateDepthBuffer===!1&&(N.__useRenderToTexture=!1),V.get(T.texture).__webglTexture=R,V.get(T.depthTexture).__webglTexture=N.__autoAllocateDepthBuffer?void 0:I,N.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,R){const I=V.get(T);I.__webglFramebuffer=R,I.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(T,R=0,I=0){X=T,W=R,k=I;let N=null,B=!1,st=!1;if(T){const at=V.get(T);if(at.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(U.FRAMEBUFFER,at.__webglFramebuffer),nt.copy(T.viewport),ut.copy(T.scissor),Z=T.scissorTest,M.viewport(nt),M.scissor(ut),M.setScissorTest(Z),J=-1;return}else if(at.__webglFramebuffer===void 0)K.setupRenderTarget(T);else if(at.__hasExternalTextures)K.rebindTextures(T,V.get(T.texture).__webglTexture,V.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const It=T.depthTexture;if(at.__boundDepthTexture!==It){if(It!==null&&V.has(It)&&(T.width!==It.image.width||T.height!==It.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(T)}}const yt=T.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(st=!0);const mt=V.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(mt[R])?N=mt[R][I]:N=mt[R],B=!0):T.samples>0&&K.useMultisampledRTT(T)===!1?N=V.get(T).__webglMultisampledFramebuffer:Array.isArray(mt)?N=mt[I]:N=mt,nt.copy(T.viewport),ut.copy(T.scissor),Z=T.scissorTest}else nt.copy(vt).multiplyScalar(ot).floor(),ut.copy(te).multiplyScalar(ot).floor(),Z=Ft;if(I!==0&&(N=H),M.bindFramebuffer(U.FRAMEBUFFER,N)&&M.drawBuffers(T,N),M.viewport(nt),M.scissor(ut),M.setScissorTest(Z),B){const at=V.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+R,at.__webglTexture,I)}else if(st){const at=R;for(let yt=0;yt<T.textures.length;yt++){const mt=V.get(T.textures[yt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+yt,mt.__webglTexture,I,at)}}else if(T!==null&&I!==0){const at=V.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,at.__webglTexture,I)}J=-1},this.readRenderTargetPixels=function(T,R,I,N,B,st,j,at=0){if(!(T&&T.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&j!==void 0&&(yt=yt[j]),yt){M.bindFramebuffer(U.FRAMEBUFFER,yt);try{const mt=T.textures[at],It=mt.format,Ut=mt.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+at),!P.textureFormatReadable(It)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!P.textureTypeReadable(Ut)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=T.width-N&&I>=0&&I<=T.height-B&&U.readPixels(R,I,N,B,xt.convert(It),xt.convert(Ut),st)}finally{const mt=X!==null?V.get(X).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(T,R,I,N,B,st,j,at=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=V.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&j!==void 0&&(yt=yt[j]),yt)if(R>=0&&R<=T.width-N&&I>=0&&I<=T.height-B){M.bindFramebuffer(U.FRAMEBUFFER,yt);const mt=T.textures[at],It=mt.format,Ut=mt.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+at),!P.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!P.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ft),U.bufferData(U.PIXEL_PACK_BUFFER,st.byteLength,U.STREAM_READ),U.readPixels(R,I,N,B,xt.convert(It),xt.convert(Ut),0);const Zt=X!==null?V.get(X).__webglFramebuffer:null;M.bindFramebuffer(U.FRAMEBUFFER,Zt);const xe=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await rd(U,xe,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ft),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,st),U.deleteBuffer(ft),U.deleteSync(xe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,R=null,I=0){const N=Math.pow(2,-I),B=Math.floor(T.image.width*N),st=Math.floor(T.image.height*N),j=R!==null?R.x:0,at=R!==null?R.y:0;K.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,I,0,0,j,at,B,st),M.unbindTexture()},this.copyTextureToTexture=function(T,R,I=null,N=null,B=0,st=0){let j,at,yt,mt,It,Ut,ft,Zt,xe;const ce=T.isCompressedTexture?T.mipmaps[st]:T.image;if(I!==null)j=I.max.x-I.min.x,at=I.max.y-I.min.y,yt=I.isBox3?I.max.z-I.min.z:1,mt=I.min.x,It=I.min.y,Ut=I.isBox3?I.min.z:0;else{const ye=Math.pow(2,-B);j=Math.floor(ce.width*ye),at=Math.floor(ce.height*ye),T.isDataArrayTexture?yt=ce.depth:T.isData3DTexture?yt=Math.floor(ce.depth*ye):yt=1,mt=0,It=0,Ut=0}N!==null?(ft=N.x,Zt=N.y,xe=N.z):(ft=0,Zt=0,xe=0);const ue=xt.convert(R.format),Le=xt.convert(R.type);let wt;R.isData3DTexture?(K.setTexture3D(R,0),wt=U.TEXTURE_3D):R.isDataArrayTexture||R.isCompressedArrayTexture?(K.setTexture2DArray(R,0),wt=U.TEXTURE_2D_ARRAY):(K.setTexture2D(R,0),wt=U.TEXTURE_2D),M.activeTexture(U.TEXTURE0),M.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,R.flipY),M.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),M.pixelStorei(U.UNPACK_ALIGNMENT,R.unpackAlignment);const qe=M.getParameter(U.UNPACK_ROW_LENGTH),ee=M.getParameter(U.UNPACK_IMAGE_HEIGHT),Qe=M.getParameter(U.UNPACK_SKIP_PIXELS),gn=M.getParameter(U.UNPACK_SKIP_ROWS),Vn=M.getParameter(U.UNPACK_SKIP_IMAGES);M.pixelStorei(U.UNPACK_ROW_LENGTH,ce.width),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ce.height),M.pixelStorei(U.UNPACK_SKIP_PIXELS,mt),M.pixelStorei(U.UNPACK_SKIP_ROWS,It),M.pixelStorei(U.UNPACK_SKIP_IMAGES,Ut);const Mi=T.isDataArrayTexture||T.isData3DTexture,he=R.isDataArrayTexture||R.isData3DTexture;if(T.isDepthTexture){const ye=V.get(T),Hn=V.get(R),me=V.get(ye.__renderTarget),Wn=V.get(Hn.__renderTarget);M.bindFramebuffer(U.READ_FRAMEBUFFER,me.__webglFramebuffer),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,Wn.__webglFramebuffer);for(let Si=0;Si<yt;Si++)Mi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(T).__webglTexture,B,Ut+Si),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(R).__webglTexture,st,xe+Si)),U.blitFramebuffer(mt,It,j,at,ft,Zt,j,at,U.DEPTH_BUFFER_BIT,U.NEAREST);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(B!==0||T.isRenderTargetTexture||V.has(T)){const ye=V.get(T),Hn=V.get(R);M.bindFramebuffer(U.READ_FRAMEBUFFER,Y),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,z);for(let me=0;me<yt;me++)Mi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,B,Ut+me):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ye.__webglTexture,B),he?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Hn.__webglTexture,st,xe+me):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Hn.__webglTexture,st),B!==0?U.blitFramebuffer(mt,It,j,at,ft,Zt,j,at,U.COLOR_BUFFER_BIT,U.NEAREST):he?U.copyTexSubImage3D(wt,st,ft,Zt,xe+me,mt,It,j,at):U.copyTexSubImage2D(wt,st,ft,Zt,mt,It,j,at);M.bindFramebuffer(U.READ_FRAMEBUFFER,null),M.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else he?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(wt,st,ft,Zt,xe,j,at,yt,ue,Le,ce.data):R.isCompressedArrayTexture?U.compressedTexSubImage3D(wt,st,ft,Zt,xe,j,at,yt,ue,ce.data):U.texSubImage3D(wt,st,ft,Zt,xe,j,at,yt,ue,Le,ce):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,st,ft,Zt,j,at,ue,Le,ce.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,st,ft,Zt,ce.width,ce.height,ue,ce.data):U.texSubImage2D(U.TEXTURE_2D,st,ft,Zt,j,at,ue,Le,ce);M.pixelStorei(U.UNPACK_ROW_LENGTH,qe),M.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ee),M.pixelStorei(U.UNPACK_SKIP_PIXELS,Qe),M.pixelStorei(U.UNPACK_SKIP_ROWS,gn),M.pixelStorei(U.UNPACK_SKIP_IMAGES,Vn),st===0&&R.generateMipmaps&&U.generateMipmap(wt),M.unbindTexture()},this.initRenderTarget=function(T){V.get(T).__webglFramebuffer===void 0&&K.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?K.setTextureCube(T,0):T.isData3DTexture?K.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?K.setTexture2DArray(T,0):K.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){W=0,k=0,X=null,M.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const Nc={type:"change"},el={type:"start"},$u={type:"end"},ms=new ks,Uc=new Dn,e0=Math.cos(70*ci.DEG2RAD),Se=new O,Ve=2*Math.PI,ae={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Co=1e-6;class n0 extends rf{constructor(t,e=null){super(t,e),this.state=ae.NONE,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ki.ROTATE,MIDDLE:ki.DOLLY,RIGHT:ki.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Gn,this._lastTargetPosition=new O,this._quat=new Gn().setFromUnitVectors(t.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new lc,this._sphericalDelta=new lc,this._scale=1,this._panOffset=new O,this._rotateStart=new Gt,this._rotateEnd=new Gt,this._rotateDelta=new Gt,this._panStart=new Gt,this._panEnd=new Gt,this._panDelta=new Gt,this._dollyStart=new Gt,this._dollyEnd=new Gt,this._dollyDelta=new Gt,this._dollyDirection=new O,this._mouse=new Gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=r0.bind(this),this._onPointerDown=i0.bind(this),this._onPointerUp=s0.bind(this),this._onContextMenu=d0.bind(this),this._onMouseWheel=l0.bind(this),this._onKeyDown=c0.bind(this),this._onTouchStart=u0.bind(this),this._onTouchMove=h0.bind(this),this._onMouseDown=o0.bind(this),this._onMouseMove=a0.bind(this),this._interceptControlDown=f0.bind(this),this._interceptControlUp=p0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Nc),this.update(),this.state=ae.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Se.copy(e).sub(this.target),Se.applyQuaternion(this._quat),this._spherical.setFromVector3(Se),this.autoRotate&&this.state===ae.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),r<-Math.PI?r+=Ve:r>Math.PI&&(r-=Ve),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Se.setFromSpherical(this._spherical),Se.applyQuaternion(this._quatInverse),e.copy(this.target).add(Se),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Se.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Se.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ms.origin.copy(this.object.position),ms.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ms.direction))<e0?this.object.lookAt(this.target):(Uc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ms.intersectPlane(Uc,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Co||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Co||this._lastTargetPosition.distanceToSquared(this.target)>Co?(this.dispatchEvent(Nc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Se.setFromMatrixColumn(e,0),Se.multiplyScalar(-t),this._panOffset.add(Se)}_panUp(t,e){this.screenSpacePanning===!0?Se.setFromMatrixColumn(e,1):(Se.setFromMatrixColumn(e,0),Se.crossVectors(this.object.up,Se)),Se.multiplyScalar(t),this._panOffset.add(Se)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Se.copy(r).sub(this.target);let s=Se.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Gt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function i0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function r0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function s0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($u),this.state=ae.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function o0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ki.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ae.DOLLY;break;case ki.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}break;case ki.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ae.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ae.PAN}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(el)}function a0(i){switch(this.state){case ae.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ae.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ae.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function l0(i){this.enabled===!1||this.enableZoom===!1||this.state!==ae.NONE||(i.preventDefault(),this.dispatchEvent(el),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($u))}function c0(i){this.enabled!==!1&&this._handleKeyDown(i)}function u0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ae.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ae.TOUCH_PAN;break;default:this.state=ae.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ae.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ae.TOUCH_DOLLY_ROTATE;break;default:this.state=ae.NONE}break;default:this.state=ae.NONE}this.state!==ae.NONE&&this.dispatchEvent(el)}function h0(i){switch(this._trackPointer(i),this.state){case ae.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ae.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ae.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ae.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ae.NONE}}function d0(i){this.enabled!==!1&&i.preventDefault()}function f0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function m0(i,t,e){var n,r=1;i==null&&(i=0),t==null&&(t=0),e==null&&(e=0);function s(){var o,a=n.length,l,c=0,u=0,d=0;for(o=0;o<a;++o)l=n[o],c+=l.x||0,u+=l.y||0,d+=l.z||0;for(c=(c/a-i)*r,u=(u/a-t)*r,d=(d/a-e)*r,o=0;o<a;++o)l=n[o],c&&(l.x-=c),u&&(l.y-=u),d&&(l.z-=d)}return s.initialize=function(o){n=o},s.x=function(o){return arguments.length?(i=+o,s):i},s.y=function(o){return arguments.length?(t=+o,s):t},s.z=function(o){return arguments.length?(e=+o,s):e},s.strength=function(o){return arguments.length?(r=+o,s):r},s}function g0(i){const t=+this._x.call(null,i);return qu(this.cover(t),t,i)}function qu(i,t,e){if(isNaN(t))return i;var n,r=i._root,s={data:e},o=i._x0,a=i._x1,l,c,u,d,h;if(!r)return i._root=s,i;for(;r.length;)if((u=t>=(l=(o+a)/2))?o=l:a=l,n=r,!(r=r[d=+u]))return n[d]=s,i;if(c=+i._x.call(null,r.data),t===c)return s.next=r,n?n[d]=s:i._root=s,i;do n=n?n[d]=new Array(2):i._root=new Array(2),(u=t>=(l=(o+a)/2))?o=l:a=l;while((d=+u)==(h=+(c>=l)));return n[h]=r,n[d]=s,i}function _0(i){Array.isArray(i)||(i=Array.from(i));const t=i.length,e=new Float64Array(t);let n=1/0,r=-1/0;for(let s=0,o;s<t;++s)isNaN(o=+this._x.call(null,i[s]))||(e[s]=o,o<n&&(n=o),o>r&&(r=o));if(n>r)return this;this.cover(n).cover(r);for(let s=0;s<t;++s)qu(this,e[s],i[s]);return this}function x0(i){if(isNaN(i=+i))return this;var t=this._x0,e=this._x1;if(isNaN(t))e=(t=Math.floor(i))+1;else{for(var n=e-t||1,r=this._root,s,o;t>i||i>=e;)switch(o=+(i<t),s=new Array(2),s[o]=r,r=s,n*=2,o){case 0:e=t+n;break;case 1:t=e-n;break}this._root&&this._root.length&&(this._root=r)}return this._x0=t,this._x1=e,this}function v0(){var i=[];return this.visit(function(t){if(!t.length)do i.push(t.data);while(t=t.next)}),i}function y0(i){return arguments.length?this.cover(+i[0][0]).cover(+i[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Fn(i,t,e){this.node=i,this.x0=t,this.x1=e}function M0(i,t){var e,n=this._x0,r,s,o=this._x1,a=[],l=this._root,c,u;for(l&&a.push(new Fn(l,n,o)),t==null?t=1/0:(n=i-t,o=i+t);c=a.pop();)if(!(!(l=c.node)||(r=c.x0)>o||(s=c.x1)<n))if(l.length){var d=(r+s)/2;a.push(new Fn(l[1],d,s),new Fn(l[0],r,d)),(u=+(i>=d))&&(c=a[a.length-1],a[a.length-1]=a[a.length-1-u],a[a.length-1-u]=c)}else{var h=Math.abs(i-+this._x.call(null,l.data));h<t&&(t=h,n=i-h,o=i+h,e=l.data)}return e}function S0(i){if(isNaN(l=+this._x.call(null,i)))return this;var t,e=this._root,n,r,s,o=this._x0,a=this._x1,l,c,u,d,h;if(!e)return this;if(e.length)for(;;){if((u=l>=(c=(o+a)/2))?o=c:a=c,t=e,!(e=e[d=+u]))return this;if(!e.length)break;t[d+1&1]&&(n=t,h=d)}for(;e.data!==i;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[d]=s:delete t[d],(e=t[0]||t[1])&&e===(t[1]||t[0])&&!e.length&&(n?n[h]=e:this._root=e),this):(this._root=s,this)}function E0(i){for(var t=0,e=i.length;t<e;++t)this.remove(i[t]);return this}function b0(){return this._root}function w0(){var i=0;return this.visit(function(t){if(!t.length)do++i;while(t=t.next)}),i}function A0(i){var t=[],e,n=this._root,r,s,o;for(n&&t.push(new Fn(n,this._x0,this._x1));e=t.pop();)if(!i(n=e.node,s=e.x0,o=e.x1)&&n.length){var a=(s+o)/2;(r=n[1])&&t.push(new Fn(r,a,o)),(r=n[0])&&t.push(new Fn(r,s,a))}return this}function T0(i){var t=[],e=[],n;for(this._root&&t.push(new Fn(this._root,this._x0,this._x1));n=t.pop();){var r=n.node;if(r.length){var s,o=n.x0,a=n.x1,l=(o+a)/2;(s=r[0])&&t.push(new Fn(s,o,l)),(s=r[1])&&t.push(new Fn(s,l,a))}e.push(n)}for(;n=e.pop();)i(n.node,n.x0,n.x1);return this}function R0(i){return i[0]}function C0(i){return arguments.length?(this._x=i,this):this._x}function nl(i,t){var e=new il(t??R0,NaN,NaN);return i==null?e:e.addAll(i)}function il(i,t,e){this._x=i,this._x0=t,this._x1=e,this._root=void 0}function Fc(i){for(var t={data:i.data},e=t;i=i.next;)e=e.next={data:i.data};return t}var Xe=nl.prototype=il.prototype;Xe.copy=function(){var i=new il(this._x,this._x0,this._x1),t=this._root,e,n;if(!t)return i;if(!t.length)return i._root=Fc(t),i;for(e=[{source:t,target:i._root=new Array(2)}];t=e.pop();)for(var r=0;r<2;++r)(n=t.source[r])&&(n.length?e.push({source:n,target:t.target[r]=new Array(2)}):t.target[r]=Fc(n));return i};Xe.add=g0;Xe.addAll=_0;Xe.cover=x0;Xe.data=v0;Xe.extent=y0;Xe.find=M0;Xe.remove=S0;Xe.removeAll=E0;Xe.root=b0;Xe.size=w0;Xe.visit=A0;Xe.visitAfter=T0;Xe.x=C0;function P0(i){const t=+this._x.call(null,i),e=+this._y.call(null,i);return Yu(this.cover(t,e),t,e,i)}function Yu(i,t,e,n){if(isNaN(t)||isNaN(e))return i;var r,s=i._root,o={data:n},a=i._x0,l=i._y0,c=i._x1,u=i._y1,d,h,p,x,S,m,f,b;if(!s)return i._root=o,i;for(;s.length;)if((S=t>=(d=(a+c)/2))?a=d:c=d,(m=e>=(h=(l+u)/2))?l=h:u=h,r=s,!(s=s[f=m<<1|S]))return r[f]=o,i;if(p=+i._x.call(null,s.data),x=+i._y.call(null,s.data),t===p&&e===x)return o.next=s,r?r[f]=o:i._root=o,i;do r=r?r[f]=new Array(4):i._root=new Array(4),(S=t>=(d=(a+c)/2))?a=d:c=d,(m=e>=(h=(l+u)/2))?l=h:u=h;while((f=m<<1|S)===(b=(x>=h)<<1|p>=d));return r[b]=s,r[f]=o,i}function D0(i){var t,e,n=i.length,r,s,o=new Array(n),a=new Array(n),l=1/0,c=1/0,u=-1/0,d=-1/0;for(e=0;e<n;++e)isNaN(r=+this._x.call(null,t=i[e]))||isNaN(s=+this._y.call(null,t))||(o[e]=r,a[e]=s,r<l&&(l=r),r>u&&(u=r),s<c&&(c=s),s>d&&(d=s));if(l>u||c>d)return this;for(this.cover(l,c).cover(u,d),e=0;e<n;++e)Yu(this,o[e],a[e],i[e]);return this}function L0(i,t){if(isNaN(i=+i)||isNaN(t=+t))return this;var e=this._x0,n=this._y0,r=this._x1,s=this._y1;if(isNaN(e))r=(e=Math.floor(i))+1,s=(n=Math.floor(t))+1;else{for(var o=r-e||1,a=this._root,l,c;e>i||i>=r||n>t||t>=s;)switch(c=(t<n)<<1|i<e,l=new Array(4),l[c]=a,a=l,o*=2,c){case 0:r=e+o,s=n+o;break;case 1:e=r-o,s=n+o;break;case 2:r=e+o,n=s-o;break;case 3:e=r-o,n=s-o;break}this._root&&this._root.length&&(this._root=a)}return this._x0=e,this._y0=n,this._x1=r,this._y1=s,this}function I0(){var i=[];return this.visit(function(t){if(!t.length)do i.push(t.data);while(t=t.next)}),i}function N0(i){return arguments.length?this.cover(+i[0][0],+i[0][1]).cover(+i[1][0],+i[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function ze(i,t,e,n,r){this.node=i,this.x0=t,this.y0=e,this.x1=n,this.y1=r}function U0(i,t,e){var n,r=this._x0,s=this._y0,o,a,l,c,u=this._x1,d=this._y1,h=[],p=this._root,x,S;for(p&&h.push(new ze(p,r,s,u,d)),e==null?e=1/0:(r=i-e,s=t-e,u=i+e,d=t+e,e*=e);x=h.pop();)if(!(!(p=x.node)||(o=x.x0)>u||(a=x.y0)>d||(l=x.x1)<r||(c=x.y1)<s))if(p.length){var m=(o+l)/2,f=(a+c)/2;h.push(new ze(p[3],m,f,l,c),new ze(p[2],o,f,m,c),new ze(p[1],m,a,l,f),new ze(p[0],o,a,m,f)),(S=(t>=f)<<1|i>=m)&&(x=h[h.length-1],h[h.length-1]=h[h.length-1-S],h[h.length-1-S]=x)}else{var b=i-+this._x.call(null,p.data),E=t-+this._y.call(null,p.data),g=b*b+E*E;if(g<e){var y=Math.sqrt(e=g);r=i-y,s=t-y,u=i+y,d=t+y,n=p.data}}return n}function F0(i){if(isNaN(u=+this._x.call(null,i))||isNaN(d=+this._y.call(null,i)))return this;var t,e=this._root,n,r,s,o=this._x0,a=this._y0,l=this._x1,c=this._y1,u,d,h,p,x,S,m,f;if(!e)return this;if(e.length)for(;;){if((x=u>=(h=(o+l)/2))?o=h:l=h,(S=d>=(p=(a+c)/2))?a=p:c=p,t=e,!(e=e[m=S<<1|x]))return this;if(!e.length)break;(t[m+1&3]||t[m+2&3]||t[m+3&3])&&(n=t,f=m)}for(;e.data!==i;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[m]=s:delete t[m],(e=t[0]||t[1]||t[2]||t[3])&&e===(t[3]||t[2]||t[1]||t[0])&&!e.length&&(n?n[f]=e:this._root=e),this):(this._root=s,this)}function O0(i){for(var t=0,e=i.length;t<e;++t)this.remove(i[t]);return this}function B0(){return this._root}function z0(){var i=0;return this.visit(function(t){if(!t.length)do++i;while(t=t.next)}),i}function G0(i){var t=[],e,n=this._root,r,s,o,a,l;for(n&&t.push(new ze(n,this._x0,this._y0,this._x1,this._y1));e=t.pop();)if(!i(n=e.node,s=e.x0,o=e.y0,a=e.x1,l=e.y1)&&n.length){var c=(s+a)/2,u=(o+l)/2;(r=n[3])&&t.push(new ze(r,c,u,a,l)),(r=n[2])&&t.push(new ze(r,s,u,c,l)),(r=n[1])&&t.push(new ze(r,c,o,a,u)),(r=n[0])&&t.push(new ze(r,s,o,c,u))}return this}function k0(i){var t=[],e=[],n;for(this._root&&t.push(new ze(this._root,this._x0,this._y0,this._x1,this._y1));n=t.pop();){var r=n.node;if(r.length){var s,o=n.x0,a=n.y0,l=n.x1,c=n.y1,u=(o+l)/2,d=(a+c)/2;(s=r[0])&&t.push(new ze(s,o,a,u,d)),(s=r[1])&&t.push(new ze(s,u,a,l,d)),(s=r[2])&&t.push(new ze(s,o,d,u,c)),(s=r[3])&&t.push(new ze(s,u,d,l,c))}e.push(n)}for(;n=e.pop();)i(n.node,n.x0,n.y0,n.x1,n.y1);return this}function V0(i){return i[0]}function H0(i){return arguments.length?(this._x=i,this):this._x}function W0(i){return i[1]}function X0(i){return arguments.length?(this._y=i,this):this._y}function rl(i,t,e){var n=new sl(t??V0,e??W0,NaN,NaN,NaN,NaN);return i==null?n:n.addAll(i)}function sl(i,t,e,n,r,s){this._x=i,this._y=t,this._x0=e,this._y0=n,this._x1=r,this._y1=s,this._root=void 0}function Oc(i){for(var t={data:i.data},e=t;i=i.next;)e=e.next={data:i.data};return t}var ke=rl.prototype=sl.prototype;ke.copy=function(){var i=new sl(this._x,this._y,this._x0,this._y0,this._x1,this._y1),t=this._root,e,n;if(!t)return i;if(!t.length)return i._root=Oc(t),i;for(e=[{source:t,target:i._root=new Array(4)}];t=e.pop();)for(var r=0;r<4;++r)(n=t.source[r])&&(n.length?e.push({source:n,target:t.target[r]=new Array(4)}):t.target[r]=Oc(n));return i};ke.add=P0;ke.addAll=D0;ke.cover=L0;ke.data=I0;ke.extent=N0;ke.find=U0;ke.remove=F0;ke.removeAll=O0;ke.root=B0;ke.size=z0;ke.visit=G0;ke.visitAfter=k0;ke.x=H0;ke.y=X0;function $0(i){const t=+this._x.call(null,i),e=+this._y.call(null,i),n=+this._z.call(null,i);return Ku(this.cover(t,e,n),t,e,n,i)}function Ku(i,t,e,n,r){if(isNaN(t)||isNaN(e)||isNaN(n))return i;var s,o=i._root,a={data:r},l=i._x0,c=i._y0,u=i._z0,d=i._x1,h=i._y1,p=i._z1,x,S,m,f,b,E,g,y,v,w,_;if(!o)return i._root=a,i;for(;o.length;)if((g=t>=(x=(l+d)/2))?l=x:d=x,(y=e>=(S=(c+h)/2))?c=S:h=S,(v=n>=(m=(u+p)/2))?u=m:p=m,s=o,!(o=o[w=v<<2|y<<1|g]))return s[w]=a,i;if(f=+i._x.call(null,o.data),b=+i._y.call(null,o.data),E=+i._z.call(null,o.data),t===f&&e===b&&n===E)return a.next=o,s?s[w]=a:i._root=a,i;do s=s?s[w]=new Array(8):i._root=new Array(8),(g=t>=(x=(l+d)/2))?l=x:d=x,(y=e>=(S=(c+h)/2))?c=S:h=S,(v=n>=(m=(u+p)/2))?u=m:p=m;while((w=v<<2|y<<1|g)===(_=(E>=m)<<2|(b>=S)<<1|f>=x));return s[_]=o,s[w]=a,i}function q0(i){Array.isArray(i)||(i=Array.from(i));const t=i.length,e=new Float64Array(t),n=new Float64Array(t),r=new Float64Array(t);let s=1/0,o=1/0,a=1/0,l=-1/0,c=-1/0,u=-1/0;for(let d=0,h,p,x,S;d<t;++d)isNaN(p=+this._x.call(null,h=i[d]))||isNaN(x=+this._y.call(null,h))||isNaN(S=+this._z.call(null,h))||(e[d]=p,n[d]=x,r[d]=S,p<s&&(s=p),p>l&&(l=p),x<o&&(o=x),x>c&&(c=x),S<a&&(a=S),S>u&&(u=S));if(s>l||o>c||a>u)return this;this.cover(s,o,a).cover(l,c,u);for(let d=0;d<t;++d)Ku(this,e[d],n[d],r[d],i[d]);return this}function Y0(i,t,e){if(isNaN(i=+i)||isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,s=this._z0,o=this._x1,a=this._y1,l=this._z1;if(isNaN(n))o=(n=Math.floor(i))+1,a=(r=Math.floor(t))+1,l=(s=Math.floor(e))+1;else{for(var c=o-n||1,u=this._root,d,h;n>i||i>=o||r>t||t>=a||s>e||e>=l;)switch(h=(e<s)<<2|(t<r)<<1|i<n,d=new Array(8),d[h]=u,u=d,c*=2,h){case 0:o=n+c,a=r+c,l=s+c;break;case 1:n=o-c,a=r+c,l=s+c;break;case 2:o=n+c,r=a-c,l=s+c;break;case 3:n=o-c,r=a-c,l=s+c;break;case 4:o=n+c,a=r+c,s=l-c;break;case 5:n=o-c,a=r+c,s=l-c;break;case 6:o=n+c,r=a-c,s=l-c;break;case 7:n=o-c,r=a-c,s=l-c;break}this._root&&this._root.length&&(this._root=u)}return this._x0=n,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this}function K0(){var i=[];return this.visit(function(t){if(!t.length)do i.push(t.data);while(t=t.next)}),i}function Z0(i){return arguments.length?this.cover(+i[0][0],+i[0][1],+i[0][2]).cover(+i[1][0],+i[1][1],+i[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function de(i,t,e,n,r,s,o){this.node=i,this.x0=t,this.y0=e,this.z0=n,this.x1=r,this.y1=s,this.z1=o}function J0(i,t,e,n){var r,s=this._x0,o=this._y0,a=this._z0,l,c,u,d,h,p,x=this._x1,S=this._y1,m=this._z1,f=[],b=this._root,E,g;for(b&&f.push(new de(b,s,o,a,x,S,m)),n==null?n=1/0:(s=i-n,o=t-n,a=e-n,x=i+n,S=t+n,m=e+n,n*=n);E=f.pop();)if(!(!(b=E.node)||(l=E.x0)>x||(c=E.y0)>S||(u=E.z0)>m||(d=E.x1)<s||(h=E.y1)<o||(p=E.z1)<a))if(b.length){var y=(l+d)/2,v=(c+h)/2,w=(u+p)/2;f.push(new de(b[7],y,v,w,d,h,p),new de(b[6],l,v,w,y,h,p),new de(b[5],y,c,w,d,v,p),new de(b[4],l,c,w,y,v,p),new de(b[3],y,v,u,d,h,w),new de(b[2],l,v,u,y,h,w),new de(b[1],y,c,u,d,v,w),new de(b[0],l,c,u,y,v,w)),(g=(e>=w)<<2|(t>=v)<<1|i>=y)&&(E=f[f.length-1],f[f.length-1]=f[f.length-1-g],f[f.length-1-g]=E)}else{var _=i-+this._x.call(null,b.data),A=t-+this._y.call(null,b.data),C=e-+this._z.call(null,b.data),D=_*_+A*A+C*C;if(D<n){var L=Math.sqrt(n=D);s=i-L,o=t-L,a=e-L,x=i+L,S=t+L,m=e+L,r=b.data}}return r}const j0=(i,t,e,n,r,s)=>Math.sqrt((i-n)**2+(t-r)**2+(e-s)**2);function Q0(i,t,e,n){const r=[],s=i-n,o=t-n,a=e-n,l=i+n,c=t+n,u=e+n;return this.visit((d,h,p,x,S,m,f)=>{if(!d.length)do{const b=d.data;j0(i,t,e,this._x(b),this._y(b),this._z(b))<=n&&r.push(b)}while(d=d.next);return h>l||p>c||x>u||S<s||m<o||f<a}),r}function tx(i){if(isNaN(h=+this._x.call(null,i))||isNaN(p=+this._y.call(null,i))||isNaN(x=+this._z.call(null,i)))return this;var t,e=this._root,n,r,s,o=this._x0,a=this._y0,l=this._z0,c=this._x1,u=this._y1,d=this._z1,h,p,x,S,m,f,b,E,g,y,v;if(!e)return this;if(e.length)for(;;){if((b=h>=(S=(o+c)/2))?o=S:c=S,(E=p>=(m=(a+u)/2))?a=m:u=m,(g=x>=(f=(l+d)/2))?l=f:d=f,t=e,!(e=e[y=g<<2|E<<1|b]))return this;if(!e.length)break;(t[y+1&7]||t[y+2&7]||t[y+3&7]||t[y+4&7]||t[y+5&7]||t[y+6&7]||t[y+7&7])&&(n=t,v=y)}for(;e.data!==i;)if(r=e,!(e=e.next))return this;return(s=e.next)&&delete e.next,r?(s?r.next=s:delete r.next,this):t?(s?t[y]=s:delete t[y],(e=t[0]||t[1]||t[2]||t[3]||t[4]||t[5]||t[6]||t[7])&&e===(t[7]||t[6]||t[5]||t[4]||t[3]||t[2]||t[1]||t[0])&&!e.length&&(n?n[v]=e:this._root=e),this):(this._root=s,this)}function ex(i){for(var t=0,e=i.length;t<e;++t)this.remove(i[t]);return this}function nx(){return this._root}function ix(){var i=0;return this.visit(function(t){if(!t.length)do++i;while(t=t.next)}),i}function rx(i){var t=[],e,n=this._root,r,s,o,a,l,c,u;for(n&&t.push(new de(n,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));e=t.pop();)if(!i(n=e.node,s=e.x0,o=e.y0,a=e.z0,l=e.x1,c=e.y1,u=e.z1)&&n.length){var d=(s+l)/2,h=(o+c)/2,p=(a+u)/2;(r=n[7])&&t.push(new de(r,d,h,p,l,c,u)),(r=n[6])&&t.push(new de(r,s,h,p,d,c,u)),(r=n[5])&&t.push(new de(r,d,o,p,l,h,u)),(r=n[4])&&t.push(new de(r,s,o,p,d,h,u)),(r=n[3])&&t.push(new de(r,d,h,a,l,c,p)),(r=n[2])&&t.push(new de(r,s,h,a,d,c,p)),(r=n[1])&&t.push(new de(r,d,o,a,l,h,p)),(r=n[0])&&t.push(new de(r,s,o,a,d,h,p))}return this}function sx(i){var t=[],e=[],n;for(this._root&&t.push(new de(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=t.pop();){var r=n.node;if(r.length){var s,o=n.x0,a=n.y0,l=n.z0,c=n.x1,u=n.y1,d=n.z1,h=(o+c)/2,p=(a+u)/2,x=(l+d)/2;(s=r[0])&&t.push(new de(s,o,a,l,h,p,x)),(s=r[1])&&t.push(new de(s,h,a,l,c,p,x)),(s=r[2])&&t.push(new de(s,o,p,l,h,u,x)),(s=r[3])&&t.push(new de(s,h,p,l,c,u,x)),(s=r[4])&&t.push(new de(s,o,a,x,h,p,d)),(s=r[5])&&t.push(new de(s,h,a,x,c,p,d)),(s=r[6])&&t.push(new de(s,o,p,x,h,u,d)),(s=r[7])&&t.push(new de(s,h,p,x,c,u,d))}e.push(n)}for(;n=e.pop();)i(n.node,n.x0,n.y0,n.z0,n.x1,n.y1,n.z1);return this}function ox(i){return i[0]}function ax(i){return arguments.length?(this._x=i,this):this._x}function lx(i){return i[1]}function cx(i){return arguments.length?(this._y=i,this):this._y}function ux(i){return i[2]}function hx(i){return arguments.length?(this._z=i,this):this._z}function ol(i,t,e,n){var r=new al(t??ox,e??lx,n??ux,NaN,NaN,NaN,NaN,NaN,NaN);return i==null?r:r.addAll(i)}function al(i,t,e,n,r,s,o,a,l){this._x=i,this._y=t,this._z=e,this._x0=n,this._y0=r,this._z0=s,this._x1=o,this._y1=a,this._z1=l,this._root=void 0}function Bc(i){for(var t={data:i.data},e=t;i=i.next;)e=e.next={data:i.data};return t}var De=ol.prototype=al.prototype;De.copy=function(){var i=new al(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),t=this._root,e,n;if(!t)return i;if(!t.length)return i._root=Bc(t),i;for(e=[{source:t,target:i._root=new Array(8)}];t=e.pop();)for(var r=0;r<8;++r)(n=t.source[r])&&(n.length?e.push({source:n,target:t.target[r]=new Array(8)}):t.target[r]=Bc(n));return i};De.add=$0;De.addAll=q0;De.cover=Y0;De.data=K0;De.extent=Z0;De.find=J0;De.findAllWithinRadius=Q0;De.remove=tx;De.removeAll=ex;De.root=nx;De.size=ix;De.visit=rx;De.visitAfter=sx;De.x=ax;De.y=cx;De.z=hx;function be(i){return function(){return i}}function rn(i){return(i()-.5)*1e-6}function Po(i){return i.x+i.vx}function zc(i){return i.y+i.vy}function dx(i){return i.z+i.vz}function Zu(i){var t,e,n,r,s=1,o=1;typeof i!="function"&&(i=be(i==null?1:+i));function a(){for(var u,d=t.length,h,p,x,S,m,f,b,E=0;E<o;++E)for(h=(e===1?nl(t,Po):e===2?rl(t,Po,zc):e===3?ol(t,Po,zc,dx):null).visitAfter(l),u=0;u<d;++u)p=t[u],f=n[p.index],b=f*f,x=p.x+p.vx,e>1&&(S=p.y+p.vy),e>2&&(m=p.z+p.vz),h.visit(g);function g(y,v,w,_,A,C,D){var L=[v,w,_,A,C,D],H=L[0],Y=L[1],z=L[2],W=L[e],k=L[e+1],X=L[e+2],J=y.data,et=y.r,nt=f+et;if(J){if(J.index>p.index){var ut=x-J.x-J.vx,Z=e>1?S-J.y-J.vy:0,Pt=e>2?m-J.z-J.vz:0,bt=ut*ut+Z*Z+Pt*Pt;bt<nt*nt&&(ut===0&&(ut=rn(r),bt+=ut*ut),e>1&&Z===0&&(Z=rn(r),bt+=Z*Z),e>2&&Pt===0&&(Pt=rn(r),bt+=Pt*Pt),bt=(nt-(bt=Math.sqrt(bt)))/bt*s,p.vx+=(ut*=bt)*(nt=(et*=et)/(b+et)),e>1&&(p.vy+=(Z*=bt)*nt),e>2&&(p.vz+=(Pt*=bt)*nt),J.vx-=ut*(nt=1-nt),e>1&&(J.vy-=Z*nt),e>2&&(J.vz-=Pt*nt))}return}return H>x+nt||W<x-nt||e>1&&(Y>S+nt||k<S-nt)||e>2&&(z>m+nt||X<m-nt)}}function l(u){if(u.data)return u.r=n[u.data.index];for(var d=u.r=0;d<Math.pow(2,e);++d)u[d]&&u[d].r>u.r&&(u.r=u[d].r)}function c(){if(t){var u,d=t.length,h;for(n=new Array(d),u=0;u<d;++u)h=t[u],n[h.index]=+i(h,u,t)}}return a.initialize=function(u,...d){t=u,r=d.find(h=>typeof h=="function")||Math.random,e=d.find(h=>[1,2,3].includes(h))||2,c()},a.iterations=function(u){return arguments.length?(o=+u,a):o},a.strength=function(u){return arguments.length?(s=+u,a):s},a.radius=function(u){return arguments.length?(i=typeof u=="function"?u:be(+u),c(),a):i},a}function fx(i){return i.index}function Gc(i,t){var e=i.get(t);if(!e)throw new Error("node not found: "+t);return e}function Ju(i){var t=fx,e=h,n,r=be(30),s,o,a,l,c,u,d=1;i==null&&(i=[]);function h(f){return 1/Math.min(l[f.source.index],l[f.target.index])}function p(f){for(var b=0,E=i.length;b<d;++b)for(var g=0,y,v,w,_=0,A=0,C=0,D,L;g<E;++g)y=i[g],v=y.source,w=y.target,_=w.x+w.vx-v.x-v.vx||rn(u),a>1&&(A=w.y+w.vy-v.y-v.vy||rn(u)),a>2&&(C=w.z+w.vz-v.z-v.vz||rn(u)),D=Math.sqrt(_*_+A*A+C*C),D=(D-s[g])/D*f*n[g],_*=D,A*=D,C*=D,w.vx-=_*(L=c[g]),a>1&&(w.vy-=A*L),a>2&&(w.vz-=C*L),v.vx+=_*(L=1-L),a>1&&(v.vy+=A*L),a>2&&(v.vz+=C*L)}function x(){if(o){var f,b=o.length,E=i.length,g=new Map(o.map((v,w)=>[t(v,w,o),v])),y;for(f=0,l=new Array(b);f<E;++f)y=i[f],y.index=f,typeof y.source!="object"&&(y.source=Gc(g,y.source)),typeof y.target!="object"&&(y.target=Gc(g,y.target)),l[y.source.index]=(l[y.source.index]||0)+1,l[y.target.index]=(l[y.target.index]||0)+1;for(f=0,c=new Array(E);f<E;++f)y=i[f],c[f]=l[y.source.index]/(l[y.source.index]+l[y.target.index]);n=new Array(E),S(),s=new Array(E),m()}}function S(){if(o)for(var f=0,b=i.length;f<b;++f)n[f]=+e(i[f],f,i)}function m(){if(o)for(var f=0,b=i.length;f<b;++f)s[f]=+r(i[f],f,i)}return p.initialize=function(f,...b){o=f,u=b.find(E=>typeof E=="function")||Math.random,a=b.find(E=>[1,2,3].includes(E))||2,x()},p.links=function(f){return arguments.length?(i=f,x(),p):i},p.id=function(f){return arguments.length?(t=f,p):t},p.iterations=function(f){return arguments.length?(d=+f,p):d},p.strength=function(f){return arguments.length?(e=typeof f=="function"?f:be(+f),S(),p):e},p.distance=function(f){return arguments.length?(r=typeof f=="function"?f:be(+f),m(),p):r},p}var px={value:()=>{}};function ju(){for(var i=0,t=arguments.length,e={},n;i<t;++i){if(!(n=arguments[i]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new As(e)}function As(i){this._=i}function mx(i,t){return i.trim().split(/^|\s+/).map(function(e){var n="",r=e.indexOf(".");if(r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}As.prototype=ju.prototype={constructor:As,on:function(i,t){var e=this._,n=mx(i+"",e),r,s=-1,o=n.length;if(arguments.length<2){for(;++s<o;)if((r=(i=n[s]).type)&&(r=gx(e[r],i.name)))return r;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++s<o;)if(r=(i=n[s]).type)e[r]=kc(e[r],i.name,t);else if(t==null)for(r in e)e[r]=kc(e[r],i.name,null);return this},copy:function(){var i={},t=this._;for(var e in t)i[e]=t[e].slice();return new As(i)},call:function(i,t){if((r=arguments.length-2)>0)for(var e=new Array(r),n=0,r,s;n<r;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(s=this._[i],n=0,r=s.length;n<r;++n)s[n].value.apply(t,e)},apply:function(i,t,e){if(!this._.hasOwnProperty(i))throw new Error("unknown type: "+i);for(var n=this._[i],r=0,s=n.length;r<s;++r)n[r].value.apply(t,e)}};function gx(i,t){for(var e=0,n=i.length,r;e<n;++e)if((r=i[e]).name===t)return r.value}function kc(i,t,e){for(var n=0,r=i.length;n<r;++n)if(i[n].name===t){i[n]=px,i=i.slice(0,n).concat(i.slice(n+1));break}return e!=null&&i.push({name:t,value:e}),i}var Zi=0,Sr=0,mr=0,Qu=1e3,Os,Er,Bs=0,_i=0,Xs=0,Pr=typeof performance=="object"&&performance.now?performance:Date,th=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(i){setTimeout(i,17)};function eh(){return _i||(th(_x),_i=Pr.now()+Xs)}function _x(){_i=0}function Ua(){this._call=this._time=this._next=null}Ua.prototype=nh.prototype={constructor:Ua,restart:function(i,t,e){if(typeof i!="function")throw new TypeError("callback is not a function");e=(e==null?eh():+e)+(t==null?0:+t),!this._next&&Er!==this&&(Er?Er._next=this:Os=this,Er=this),this._call=i,this._time=e,Fa()},stop:function(){this._call&&(this._call=null,this._time=1/0,Fa())}};function nh(i,t,e){var n=new Ua;return n.restart(i,t,e),n}function xx(){eh(),++Zi;for(var i=Os,t;i;)(t=_i-i._time)>=0&&i._call.call(void 0,t),i=i._next;--Zi}function Vc(){_i=(Bs=Pr.now())+Xs,Zi=Sr=0;try{xx()}finally{Zi=0,yx(),_i=0}}function vx(){var i=Pr.now(),t=i-Bs;t>Qu&&(Xs-=t,Bs=i)}function yx(){for(var i,t=Os,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),i=t,t=t._next):(e=t._next,t._next=null,t=i?i._next=e:Os=e);Er=i,Fa(n)}function Fa(i){if(!Zi){Sr&&(Sr=clearTimeout(Sr));var t=i-_i;t>24?(i<1/0&&(Sr=setTimeout(Vc,i-Pr.now()-Xs)),mr&&(mr=clearInterval(mr))):(mr||(Bs=Pr.now(),mr=setInterval(vx,Qu)),Zi=1,th(Vc))}}const Mx=1664525,Sx=1013904223,Hc=4294967296;function Ex(){let i=1;return()=>(i=(Mx*i+Sx)%Hc)/Hc}var Wc=3;function Do(i){return i.x}function Xc(i){return i.y}function bx(i){return i.z}var wx=10,Ax=Math.PI*(3-Math.sqrt(5)),Tx=Math.PI*20/(9+Math.sqrt(221));function ih(i,t){t=t||2;var e=Math.min(Wc,Math.max(1,Math.round(t))),n,r=1,s=.001,o=1-Math.pow(s,1/300),a=0,l=.6,c=new Map,u=nh(p),d=ju("tick","end"),h=Ex();i==null&&(i=[]);function p(){x(),d.call("tick",n),r<s&&(u.stop(),d.call("end",n))}function x(f){var b,E=i.length,g;f===void 0&&(f=1);for(var y=0;y<f;++y)for(r+=(a-r)*o,c.forEach(function(v){v(r)}),b=0;b<E;++b)g=i[b],g.fx==null?g.x+=g.vx*=l:(g.x=g.fx,g.vx=0),e>1&&(g.fy==null?g.y+=g.vy*=l:(g.y=g.fy,g.vy=0)),e>2&&(g.fz==null?g.z+=g.vz*=l:(g.z=g.fz,g.vz=0));return n}function S(){for(var f=0,b=i.length,E;f<b;++f){if(E=i[f],E.index=f,E.fx!=null&&(E.x=E.fx),E.fy!=null&&(E.y=E.fy),E.fz!=null&&(E.z=E.fz),isNaN(E.x)||e>1&&isNaN(E.y)||e>2&&isNaN(E.z)){var g=wx*(e>2?Math.cbrt(.5+f):e>1?Math.sqrt(.5+f):f),y=f*Ax,v=f*Tx;e===1?E.x=g:e===2?(E.x=g*Math.cos(y),E.y=g*Math.sin(y)):(E.x=g*Math.sin(y)*Math.cos(v),E.y=g*Math.cos(y),E.z=g*Math.sin(y)*Math.sin(v))}(isNaN(E.vx)||e>1&&isNaN(E.vy)||e>2&&isNaN(E.vz))&&(E.vx=0,e>1&&(E.vy=0),e>2&&(E.vz=0))}}function m(f){return f.initialize&&f.initialize(i,h,e),f}return S(),n={tick:x,restart:function(){return u.restart(p),n},stop:function(){return u.stop(),n},numDimensions:function(f){return arguments.length?(e=Math.min(Wc,Math.max(1,Math.round(f))),c.forEach(m),n):e},nodes:function(f){return arguments.length?(i=f,S(),c.forEach(m),n):i},alpha:function(f){return arguments.length?(r=+f,n):r},alphaMin:function(f){return arguments.length?(s=+f,n):s},alphaDecay:function(f){return arguments.length?(o=+f,n):+o},alphaTarget:function(f){return arguments.length?(a=+f,n):a},velocityDecay:function(f){return arguments.length?(l=1-f,n):1-l},randomSource:function(f){return arguments.length?(h=f,c.forEach(m),n):h},force:function(f,b){return arguments.length>1?(b==null?c.delete(f):c.set(f,m(b)),n):c.get(f)},find:function(){var f=Array.prototype.slice.call(arguments),b=f.shift()||0,E=(e>1?f.shift():null)||0,g=(e>2?f.shift():null)||0,y=f.shift()||1/0,v=0,w=i.length,_,A,C,D,L,H;for(y*=y,v=0;v<w;++v)L=i[v],_=b-L.x,A=E-(L.y||0),C=g-(L.z||0),D=_*_+A*A+C*C,D<y&&(H=L,y=D);return H},on:function(f,b){return arguments.length>1?(d.on(f,b),n):d.on(f)}}}function rh(){var i,t,e,n,r,s=be(-30),o,a=1,l=1/0,c=.81;function u(x){var S,m=i.length,f=(t===1?nl(i,Do):t===2?rl(i,Do,Xc):t===3?ol(i,Do,Xc,bx):null).visitAfter(h);for(r=x,S=0;S<m;++S)e=i[S],f.visit(p)}function d(){if(i){var x,S=i.length,m;for(o=new Array(S),x=0;x<S;++x)m=i[x],o[m.index]=+s(m,x,i)}}function h(x){var S=0,m,f,b=0,E,g,y,v,w=x.length;if(w){for(E=g=y=v=0;v<w;++v)(m=x[v])&&(f=Math.abs(m.value))&&(S+=m.value,b+=f,E+=f*(m.x||0),g+=f*(m.y||0),y+=f*(m.z||0));S*=Math.sqrt(4/w),x.x=E/b,t>1&&(x.y=g/b),t>2&&(x.z=y/b)}else{m=x,m.x=m.data.x,t>1&&(m.y=m.data.y),t>2&&(m.z=m.data.z);do S+=o[m.data.index];while(m=m.next)}x.value=S}function p(x,S,m,f,b){if(!x.value)return!0;var E=[m,f,b][t-1],g=x.x-e.x,y=t>1?x.y-e.y:0,v=t>2?x.z-e.z:0,w=E-S,_=g*g+y*y+v*v;if(w*w/c<_)return _<l&&(g===0&&(g=rn(n),_+=g*g),t>1&&y===0&&(y=rn(n),_+=y*y),t>2&&v===0&&(v=rn(n),_+=v*v),_<a&&(_=Math.sqrt(a*_)),e.vx+=g*x.value*r/_,t>1&&(e.vy+=y*x.value*r/_),t>2&&(e.vz+=v*x.value*r/_)),!0;if(x.length||_>=l)return;(x.data!==e||x.next)&&(g===0&&(g=rn(n),_+=g*g),t>1&&y===0&&(y=rn(n),_+=y*y),t>2&&v===0&&(v=rn(n),_+=v*v),_<a&&(_=Math.sqrt(a*_)));do x.data!==e&&(w=o[x.data.index]*r/_,e.vx+=g*w,t>1&&(e.vy+=y*w),t>2&&(e.vz+=v*w));while(x=x.next)}return u.initialize=function(x,...S){i=x,n=S.find(m=>typeof m=="function")||Math.random,t=S.find(m=>[1,2,3].includes(m))||2,d()},u.strength=function(x){return arguments.length?(s=typeof x=="function"?x:be(+x),d(),u):s},u.distanceMin=function(x){return arguments.length?(a=x*x,u):Math.sqrt(a)},u.distanceMax=function(x){return arguments.length?(l=x*x,u):Math.sqrt(l)},u.theta=function(x){return arguments.length?(c=x*x,u):Math.sqrt(c)},u}function Rx(i){var t=be(.1),e,n,r;typeof i!="function"&&(i=be(i==null?0:+i));function s(a){for(var l=0,c=e.length,u;l<c;++l)u=e[l],u.vx+=(r[l]-u.x)*n[l]*a}function o(){if(e){var a,l=e.length;for(n=new Array(l),r=new Array(l),a=0;a<l;++a)n[a]=isNaN(r[a]=+i(e[a],a,e))?0:+t(e[a],a,e)}}return s.initialize=function(a){e=a,o()},s.strength=function(a){return arguments.length?(t=typeof a=="function"?a:be(+a),o(),s):t},s.x=function(a){return arguments.length?(i=typeof a=="function"?a:be(+a),o(),s):i},s}function Cx(i){var t=be(.1),e,n,r;typeof i!="function"&&(i=be(i==null?0:+i));function s(a){for(var l=0,c=e.length,u;l<c;++l)u=e[l],u.vy+=(r[l]-u.y)*n[l]*a}function o(){if(e){var a,l=e.length;for(n=new Array(l),r=new Array(l),a=0;a<l;++a)n[a]=isNaN(r[a]=+i(e[a],a,e))?0:+t(e[a],a,e)}}return s.initialize=function(a){e=a,o()},s.strength=function(a){return arguments.length?(t=typeof a=="function"?a:be(+a),o(),s):t},s.y=function(a){return arguments.length?(i=typeof a=="function"?a:be(+a),o(),s):i},s}function Px(i){var t=be(.1),e,n,r;typeof i!="function"&&(i=be(i==null?0:+i));function s(a){for(var l=0,c=e.length,u;l<c;++l)u=e[l],u.vz+=(r[l]-u.z)*n[l]*a}function o(){if(e){var a,l=e.length;for(n=new Array(l),r=new Array(l),a=0;a<l;++a)n[a]=isNaN(r[a]=+i(e[a],a,e))?0:+t(e[a],a,e)}}return s.initialize=function(a){e=a,o()},s.strength=function(a){return arguments.length?(t=typeof a=="function"?a:be(+a),o(),s):t},s.z=function(a){return arguments.length?(i=typeof a=="function"?a:be(+a),o(),s):i},s}function Dx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var gs={exports:{}},$c;function Lx(){if($c)return gs.exports;$c=1;var i=typeof Reflect=="object"?Reflect:null,t=i&&typeof i.apply=="function"?i.apply:function(y,v,w){return Function.prototype.apply.call(y,v,w)},e;i&&typeof i.ownKeys=="function"?e=i.ownKeys:Object.getOwnPropertySymbols?e=function(y){return Object.getOwnPropertyNames(y).concat(Object.getOwnPropertySymbols(y))}:e=function(y){return Object.getOwnPropertyNames(y)};function n(g){console&&console.warn&&console.warn(g)}var r=Number.isNaN||function(y){return y!==y};function s(){s.init.call(this)}gs.exports=s,gs.exports.once=f,s.EventEmitter=s,s.prototype._events=void 0,s.prototype._eventsCount=0,s.prototype._maxListeners=void 0;var o=10;function a(g){if(typeof g!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof g)}Object.defineProperty(s,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(g){if(typeof g!="number"||g<0||r(g))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+g+".");o=g}}),s.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},s.prototype.setMaxListeners=function(y){if(typeof y!="number"||y<0||r(y))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+y+".");return this._maxListeners=y,this};function l(g){return g._maxListeners===void 0?s.defaultMaxListeners:g._maxListeners}s.prototype.getMaxListeners=function(){return l(this)},s.prototype.emit=function(y){for(var v=[],w=1;w<arguments.length;w++)v.push(arguments[w]);var _=y==="error",A=this._events;if(A!==void 0)_=_&&A.error===void 0;else if(!_)return!1;if(_){var C;if(v.length>0&&(C=v[0]),C instanceof Error)throw C;var D=new Error("Unhandled error."+(C?" ("+C.message+")":""));throw D.context=C,D}var L=A[y];if(L===void 0)return!1;if(typeof L=="function")t(L,this,v);else for(var H=L.length,Y=x(L,H),w=0;w<H;++w)t(Y[w],this,v);return!0};function c(g,y,v,w){var _,A,C;if(a(v),A=g._events,A===void 0?(A=g._events=Object.create(null),g._eventsCount=0):(A.newListener!==void 0&&(g.emit("newListener",y,v.listener?v.listener:v),A=g._events),C=A[y]),C===void 0)C=A[y]=v,++g._eventsCount;else if(typeof C=="function"?C=A[y]=w?[v,C]:[C,v]:w?C.unshift(v):C.push(v),_=l(g),_>0&&C.length>_&&!C.warned){C.warned=!0;var D=new Error("Possible EventEmitter memory leak detected. "+C.length+" "+String(y)+" listeners added. Use emitter.setMaxListeners() to increase limit");D.name="MaxListenersExceededWarning",D.emitter=g,D.type=y,D.count=C.length,n(D)}return g}s.prototype.addListener=function(y,v){return c(this,y,v,!1)},s.prototype.on=s.prototype.addListener,s.prototype.prependListener=function(y,v){return c(this,y,v,!0)};function u(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(g,y,v){var w={fired:!1,wrapFn:void 0,target:g,type:y,listener:v},_=u.bind(w);return _.listener=v,w.wrapFn=_,_}s.prototype.once=function(y,v){return a(v),this.on(y,d(this,y,v)),this},s.prototype.prependOnceListener=function(y,v){return a(v),this.prependListener(y,d(this,y,v)),this},s.prototype.removeListener=function(y,v){var w,_,A,C,D;if(a(v),_=this._events,_===void 0)return this;if(w=_[y],w===void 0)return this;if(w===v||w.listener===v)--this._eventsCount===0?this._events=Object.create(null):(delete _[y],_.removeListener&&this.emit("removeListener",y,w.listener||v));else if(typeof w!="function"){for(A=-1,C=w.length-1;C>=0;C--)if(w[C]===v||w[C].listener===v){D=w[C].listener,A=C;break}if(A<0)return this;A===0?w.shift():S(w,A),w.length===1&&(_[y]=w[0]),_.removeListener!==void 0&&this.emit("removeListener",y,D||v)}return this},s.prototype.off=s.prototype.removeListener,s.prototype.removeAllListeners=function(y){var v,w,_;if(w=this._events,w===void 0)return this;if(w.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):w[y]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete w[y]),this;if(arguments.length===0){var A=Object.keys(w),C;for(_=0;_<A.length;++_)C=A[_],C!=="removeListener"&&this.removeAllListeners(C);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(v=w[y],typeof v=="function")this.removeListener(y,v);else if(v!==void 0)for(_=v.length-1;_>=0;_--)this.removeListener(y,v[_]);return this};function h(g,y,v){var w=g._events;if(w===void 0)return[];var _=w[y];return _===void 0?[]:typeof _=="function"?v?[_.listener||_]:[_]:v?m(_):x(_,_.length)}s.prototype.listeners=function(y){return h(this,y,!0)},s.prototype.rawListeners=function(y){return h(this,y,!1)},s.listenerCount=function(g,y){return typeof g.listenerCount=="function"?g.listenerCount(y):p.call(g,y)},s.prototype.listenerCount=p;function p(g){var y=this._events;if(y!==void 0){var v=y[g];if(typeof v=="function")return 1;if(v!==void 0)return v.length}return 0}s.prototype.eventNames=function(){return this._eventsCount>0?e(this._events):[]};function x(g,y){for(var v=new Array(y),w=0;w<y;++w)v[w]=g[w];return v}function S(g,y){for(;y+1<g.length;y++)g[y]=g[y+1];g.pop()}function m(g){for(var y=new Array(g.length),v=0;v<y.length;++v)y[v]=g[v].listener||g[v];return y}function f(g,y){return new Promise(function(v,w){function _(C){g.removeListener(y,A),w(C)}function A(){typeof g.removeListener=="function"&&g.removeListener("error",_),v([].slice.call(arguments))}E(g,y,A,{once:!0}),y!=="error"&&b(g,_,{once:!0})})}function b(g,y,v){typeof g.on=="function"&&E(g,"error",y,v)}function E(g,y,v,w){if(typeof g.on=="function")w.once?g.once(y,v):g.on(y,v);else if(typeof g.addEventListener=="function")g.addEventListener(y,function _(A){w.once&&g.removeEventListener(y,_),v(A)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof g)}return gs.exports}var Ix=Lx();function Nx(){const i=arguments[0];for(let t=1,e=arguments.length;t<e;t++)if(arguments[t])for(const n in arguments[t])i[n]=arguments[t][n];return i}let Ee=Nx;typeof Object.assign=="function"&&(Ee=Object.assign);function on(i,t,e,n){const r=i._nodes.get(t);let s=null;return r&&(n==="mixed"?s=r.out&&r.out[e]||r.undirected&&r.undirected[e]:n==="directed"?s=r.out&&r.out[e]:s=r.undirected&&r.undirected[e]),s}function Ce(i){return typeof i=="object"&&i!==null}function sh(i){let t;for(t in i)return!1;return!0}function en(i,t,e){Object.defineProperty(i,t,{enumerable:!1,configurable:!1,writable:!0,value:e})}function un(i,t,e){const n={enumerable:!0,configurable:!0};typeof e=="function"?n.get=e:(n.value=e,n.writable=!1),Object.defineProperty(i,t,n)}function qc(i){return!(!Ce(i)||i.attributes&&!Array.isArray(i.attributes))}function Ux(){let i=Math.floor(Math.random()*256)&255;return()=>i++}function On(){const i=arguments;let t=null,e=-1;return{[Symbol.iterator](){return this},next(){let n=null;do{if(t===null){if(e++,e>=i.length)return{done:!0};t=i[e][Symbol.iterator]()}if(n=t.next(),n.done){t=null;continue}break}while(!0);return n}}}function Qi(){return{[Symbol.iterator](){return this},next(){return{done:!0}}}}class ll extends Error{constructor(t){super(),this.name="GraphError",this.message=t}}class Et extends ll{constructor(t){super(t),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Et.prototype.constructor)}}class dt extends ll{constructor(t){super(t),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,dt.prototype.constructor)}}class zt extends ll{constructor(t){super(t),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,zt.prototype.constructor)}}function oh(i,t){this.key=i,this.attributes=t,this.clear()}oh.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function ah(i,t){this.key=i,this.attributes=t,this.clear()}ah.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function lh(i,t){this.key=i,this.attributes=t,this.clear()}lh.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function tr(i,t,e,n,r){this.key=t,this.attributes=r,this.undirected=i,this.source=e,this.target=n}tr.prototype.attach=function(){let i="out",t="in";this.undirected&&(i=t="undirected");const e=this.source.key,n=this.target.key;this.source[i][n]=this,!(this.undirected&&e===n)&&(this.target[t][e]=this)};tr.prototype.attachMulti=function(){let i="out",t="in";const e=this.source.key,n=this.target.key;this.undirected&&(i=t="undirected");const r=this.source[i],s=r[n];if(typeof s>"u"){r[n]=this,this.undirected&&e===n||(this.target[t][e]=this);return}s.previous=this,this.next=s,r[n]=this,this.target[t][e]=this};tr.prototype.detach=function(){const i=this.source.key,t=this.target.key;let e="out",n="in";this.undirected&&(e=n="undirected"),delete this.source[e][t],delete this.target[n][i]};tr.prototype.detachMulti=function(){const i=this.source.key,t=this.target.key;let e="out",n="in";this.undirected&&(e=n="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[e][t],delete this.target[n][i]):(this.next.previous=void 0,this.source[e][t]=this.next,this.target[n][i]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const ch=0,uh=1,Fx=2,hh=3;function kn(i,t,e,n,r,s,o){let a,l,c,u;if(n=""+n,e===ch){if(a=i._nodes.get(n),!a)throw new dt(`Graph.${t}: could not find the "${n}" node in the graph.`);c=r,u=s}else if(e===hh){if(r=""+r,l=i._edges.get(r),!l)throw new dt(`Graph.${t}: could not find the "${r}" edge in the graph.`);const d=l.source.key,h=l.target.key;if(n===d)a=l.target;else if(n===h)a=l.source;else throw new dt(`Graph.${t}: the "${n}" node is not attached to the "${r}" edge (${d}, ${h}).`);c=s,u=o}else{if(l=i._edges.get(n),!l)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`);e===uh?a=l.source:a=l.target,c=r,u=s}return[a,c,u]}function Ox(i,t,e){i.prototype[t]=function(n,r,s){const[o,a]=kn(this,t,e,n,r,s);return o.attributes[a]}}function Bx(i,t,e){i.prototype[t]=function(n,r){const[s]=kn(this,t,e,n,r);return s.attributes}}function zx(i,t,e){i.prototype[t]=function(n,r,s){const[o,a]=kn(this,t,e,n,r,s);return o.attributes.hasOwnProperty(a)}}function Gx(i,t,e){i.prototype[t]=function(n,r,s,o){const[a,l,c]=kn(this,t,e,n,r,s,o);return a.attributes[l]=c,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:l}),this}}function kx(i,t,e){i.prototype[t]=function(n,r,s,o){const[a,l,c]=kn(this,t,e,n,r,s,o);if(typeof c!="function")throw new Et(`Graph.${t}: updater should be a function.`);const u=a.attributes,d=c(u[l]);return u[l]=d,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:l}),this}}function Vx(i,t,e){i.prototype[t]=function(n,r,s){const[o,a]=kn(this,t,e,n,r,s);return delete o.attributes[a],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:a}),this}}function Hx(i,t,e){i.prototype[t]=function(n,r,s){const[o,a]=kn(this,t,e,n,r,s);if(!Ce(a))throw new Et(`Graph.${t}: provided attributes are not a plain object.`);return o.attributes=a,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function Wx(i,t,e){i.prototype[t]=function(n,r,s){const[o,a]=kn(this,t,e,n,r,s);if(!Ce(a))throw new Et(`Graph.${t}: provided attributes are not a plain object.`);return Ee(o.attributes,a),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:a}),this}}function Xx(i,t,e){i.prototype[t]=function(n,r,s){const[o,a]=kn(this,t,e,n,r,s);if(typeof a!="function")throw new Et(`Graph.${t}: provided updater is not a function.`);return o.attributes=a(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const $x=[{name:i=>`get${i}Attribute`,attacher:Ox},{name:i=>`get${i}Attributes`,attacher:Bx},{name:i=>`has${i}Attribute`,attacher:zx},{name:i=>`set${i}Attribute`,attacher:Gx},{name:i=>`update${i}Attribute`,attacher:kx},{name:i=>`remove${i}Attribute`,attacher:Vx},{name:i=>`replace${i}Attributes`,attacher:Hx},{name:i=>`merge${i}Attributes`,attacher:Wx},{name:i=>`update${i}Attributes`,attacher:Xx}];function qx(i){$x.forEach(function({name:t,attacher:e}){e(i,t("Node"),ch),e(i,t("Source"),uh),e(i,t("Target"),Fx),e(i,t("Opposite"),hh)})}function Yx(i,t,e){i.prototype[t]=function(n,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=on(this,o,a,e),!s)throw new dt(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}return s.attributes[r]}}function Kx(i,t,e){i.prototype[t]=function(n){let r;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+n,o=""+arguments[1];if(r=on(this,s,o,e),!r)throw new dt(`Graph.${t}: could not find an edge for the given path ("${s}" - "${o}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,r=this._edges.get(n),!r)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}return r.attributes}}function Zx(i,t,e){i.prototype[t]=function(n,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=on(this,o,a,e),!s)throw new dt(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}return s.attributes.hasOwnProperty(r)}}function Jx(i,t,e){i.prototype[t]=function(n,r,s){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,l=""+r;if(r=arguments[2],s=arguments[3],o=on(this,a,l,e),!o)throw new dt(`Graph.${t}: could not find an edge for the given path ("${a}" - "${l}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}return o.attributes[r]=s,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function jx(i,t,e){i.prototype[t]=function(n,r,s){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+n,l=""+r;if(r=arguments[2],s=arguments[3],o=on(this,a,l,e),!o)throw new dt(`Graph.${t}: could not find an edge for the given path ("${a}" - "${l}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,o=this._edges.get(n),!o)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}if(typeof s!="function")throw new Et(`Graph.${t}: updater should be a function.`);return o.attributes[r]=s(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function Qx(i,t,e){i.prototype[t]=function(n,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=on(this,o,a,e),!s)throw new dt(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}return delete s.attributes[r],this.emit("edgeAttributesUpdated",{key:s.key,type:"remove",attributes:s.attributes,name:r}),this}}function tv(i,t,e){i.prototype[t]=function(n,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=on(this,o,a,e),!s)throw new dt(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}if(!Ce(r))throw new Et(`Graph.${t}: provided attributes are not a plain object.`);return s.attributes=r,this.emit("edgeAttributesUpdated",{key:s.key,type:"replace",attributes:s.attributes}),this}}function ev(i,t,e){i.prototype[t]=function(n,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=on(this,o,a,e),!s)throw new dt(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}if(!Ce(r))throw new Et(`Graph.${t}: provided attributes are not a plain object.`);return Ee(s.attributes,r),this.emit("edgeAttributesUpdated",{key:s.key,type:"merge",attributes:s.attributes,data:r}),this}}function nv(i,t,e){i.prototype[t]=function(n,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new zt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new zt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+n,a=""+r;if(r=arguments[2],s=on(this,o,a,e),!s)throw new dt(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new zt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(n=""+n,s=this._edges.get(n),!s)throw new dt(`Graph.${t}: could not find the "${n}" edge in the graph.`)}if(typeof r!="function")throw new Et(`Graph.${t}: provided updater is not a function.`);return s.attributes=r(s.attributes),this.emit("edgeAttributesUpdated",{key:s.key,type:"update",attributes:s.attributes}),this}}const iv=[{name:i=>`get${i}Attribute`,attacher:Yx},{name:i=>`get${i}Attributes`,attacher:Kx},{name:i=>`has${i}Attribute`,attacher:Zx},{name:i=>`set${i}Attribute`,attacher:Jx},{name:i=>`update${i}Attribute`,attacher:jx},{name:i=>`remove${i}Attribute`,attacher:Qx},{name:i=>`replace${i}Attributes`,attacher:tv},{name:i=>`merge${i}Attributes`,attacher:ev},{name:i=>`update${i}Attributes`,attacher:nv}];function rv(i){iv.forEach(function({name:t,attacher:e}){e(i,t("Edge"),"mixed"),e(i,t("DirectedEdge"),"directed"),e(i,t("UndirectedEdge"),"undirected")})}const sv=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function ov(i,t,e,n){let r=!1;for(const s in t){if(s===n)continue;const o=t[s];if(r=e(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),i&&r)return o.key}}function av(i,t,e,n){let r,s,o,a=!1;for(const l in t)if(l!==n){r=t[l];do{if(s=r.source,o=r.target,a=e(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected),i&&a)return r.key;r=r.next}while(r!==void 0)}}function Lo(i,t){const e=Object.keys(i),n=e.length;let r,s=0;return{[Symbol.iterator](){return this},next(){do if(r)r=r.next;else{if(s>=n)return{done:!0};const o=e[s++];if(o===t){r=void 0;continue}r=i[o]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}}}}function lv(i,t,e,n){const r=t[e];if(!r)return;const s=r.source,o=r.target;if(n(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected)&&i)return r.key}function cv(i,t,e,n){let r=t[e];if(!r)return;let s=!1;do{if(s=n(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),i&&s)return r.key;r=r.next}while(r!==void 0)}function Io(i,t){let e=i[t];if(e.next!==void 0)return{[Symbol.iterator](){return this},next(){if(!e)return{done:!0};const r={edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected};return e=e.next,{done:!1,value:r}}};let n=!1;return{[Symbol.iterator](){return this},next(){return n===!0?{done:!0}:(n=!0,{done:!1,value:{edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected}})}}}function uv(i,t){if(i.size===0)return[];if(t==="mixed"||t===i.type)return Array.from(i._edges.keys());const e=t==="undirected"?i.undirectedSize:i.directedSize,n=new Array(e),r=t==="undirected",s=i._edges.values();let o=0,a,l;for(;a=s.next(),a.done!==!0;)l=a.value,l.undirected===r&&(n[o++]=l.key);return n}function dh(i,t,e,n){if(t.size===0)return;const r=e!=="mixed"&&e!==t.type,s=e==="undirected";let o,a,l=!1;const c=t._edges.values();for(;o=c.next(),o.done!==!0;){if(a=o.value,r&&a.undirected!==s)continue;const{key:u,attributes:d,source:h,target:p}=a;if(l=n(u,d,h.key,p.key,h.attributes,p.attributes,a.undirected),i&&l)return u}}function hv(i,t){if(i.size===0)return Qi();const e=t!=="mixed"&&t!==i.type,n=t==="undirected",r=i._edges.values();return{[Symbol.iterator](){return this},next(){let s,o;for(;;){if(s=r.next(),s.done)return s;if(o=s.value,!(e&&o.undirected!==n))break}return{value:{edge:o.key,attributes:o.attributes,source:o.source.key,target:o.target.key,sourceAttributes:o.source.attributes,targetAttributes:o.target.attributes,undirected:o.undirected},done:!1}}}}function cl(i,t,e,n,r,s){const o=t?av:ov;let a;if(e!=="undirected"&&(n!=="out"&&(a=o(i,r.in,s),i&&a)||n!=="in"&&(a=o(i,r.out,s,n?void 0:r.key),i&&a))||e!=="directed"&&(a=o(i,r.undirected,s),i&&a))return a}function dv(i,t,e,n){const r=[];return cl(!1,i,t,e,n,function(s){r.push(s)}),r}function fv(i,t,e){let n=Qi();return i!=="undirected"&&(t!=="out"&&typeof e.in<"u"&&(n=On(n,Lo(e.in))),t!=="in"&&typeof e.out<"u"&&(n=On(n,Lo(e.out,t?void 0:e.key)))),i!=="directed"&&typeof e.undirected<"u"&&(n=On(n,Lo(e.undirected))),n}function ul(i,t,e,n,r,s,o){const a=e?cv:lv;let l;if(t!=="undirected"&&(typeof r.in<"u"&&n!=="out"&&(l=a(i,r.in,s,o),i&&l)||typeof r.out<"u"&&n!=="in"&&(n||r.key!==s)&&(l=a(i,r.out,s,o),i&&l))||t!=="directed"&&typeof r.undirected<"u"&&(l=a(i,r.undirected,s,o),i&&l))return l}function pv(i,t,e,n,r){const s=[];return ul(!1,i,t,e,n,r,function(o){s.push(o)}),s}function mv(i,t,e,n){let r=Qi();return i!=="undirected"&&(typeof e.in<"u"&&t!=="out"&&n in e.in&&(r=On(r,Io(e.in,n))),typeof e.out<"u"&&t!=="in"&&n in e.out&&(t||e.key!==n)&&(r=On(r,Io(e.out,n)))),i!=="directed"&&typeof e.undirected<"u"&&n in e.undirected&&(r=On(r,Io(e.undirected,n))),r}function gv(i,t){const{name:e,type:n,direction:r}=t;i.prototype[e]=function(s,o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];if(!arguments.length)return uv(this,n);if(arguments.length===1){s=""+s;const a=this._nodes.get(s);if(typeof a>"u")throw new dt(`Graph.${e}: could not find the "${s}" node in the graph.`);return dv(this.multi,n==="mixed"?this.type:n,r,a)}if(arguments.length===2){s=""+s,o=""+o;const a=this._nodes.get(s);if(!a)throw new dt(`Graph.${e}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(o))throw new dt(`Graph.${e}:  could not find the "${o}" target node in the graph.`);return pv(n,this.multi,r,a,o)}throw new Et(`Graph.${e}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function _v(i,t){const{name:e,type:n,direction:r}=t,s="forEach"+e[0].toUpperCase()+e.slice(1,-1);i.prototype[s]=function(c,u,d){if(!(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)){if(arguments.length===1)return d=c,dh(!1,this,n,d);if(arguments.length===2){c=""+c,d=u;const h=this._nodes.get(c);if(typeof h>"u")throw new dt(`Graph.${s}: could not find the "${c}" node in the graph.`);return cl(!1,this.multi,n==="mixed"?this.type:n,r,h,d)}if(arguments.length===3){c=""+c,u=""+u;const h=this._nodes.get(c);if(!h)throw new dt(`Graph.${s}:  could not find the "${c}" source node in the graph.`);if(!this._nodes.has(u))throw new dt(`Graph.${s}:  could not find the "${u}" target node in the graph.`);return ul(!1,n,this.multi,r,h,u,d)}throw new Et(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const o="map"+e[0].toUpperCase()+e.slice(1);i.prototype[o]=function(){const c=Array.prototype.slice.call(arguments),u=c.pop();let d;if(c.length===0){let h=0;n!=="directed"&&(h+=this.undirectedSize),n!=="undirected"&&(h+=this.directedSize),d=new Array(h);let p=0;c.push((x,S,m,f,b,E,g)=>{d[p++]=u(x,S,m,f,b,E,g)})}else d=[],c.push((h,p,x,S,m,f,b)=>{d.push(u(h,p,x,S,m,f,b))});return this[s].apply(this,c),d};const a="filter"+e[0].toUpperCase()+e.slice(1);i.prototype[a]=function(){const c=Array.prototype.slice.call(arguments),u=c.pop(),d=[];return c.push((h,p,x,S,m,f,b)=>{u(h,p,x,S,m,f,b)&&d.push(h)}),this[s].apply(this,c),d};const l="reduce"+e[0].toUpperCase()+e.slice(1);i.prototype[l]=function(){let c=Array.prototype.slice.call(arguments);if(c.length<2||c.length>4)throw new Et(`Graph.${l}: invalid number of arguments (expecting 2, 3 or 4 and got ${c.length}).`);if(typeof c[c.length-1]=="function"&&typeof c[c.length-2]!="function")throw new Et(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u,d;c.length===2?(u=c[0],d=c[1],c=[]):c.length===3?(u=c[1],d=c[2],c=[c[0]]):c.length===4&&(u=c[2],d=c[3],c=[c[0],c[1]]);let h=d;return c.push((p,x,S,m,f,b,E)=>{h=u(h,p,x,S,m,f,b,E)}),this[s].apply(this,c),h}}function xv(i,t){const{name:e,type:n,direction:r}=t,s="find"+e[0].toUpperCase()+e.slice(1,-1);i.prototype[s]=function(l,c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return!1;if(arguments.length===1)return u=l,dh(!0,this,n,u);if(arguments.length===2){l=""+l,u=c;const d=this._nodes.get(l);if(typeof d>"u")throw new dt(`Graph.${s}: could not find the "${l}" node in the graph.`);return cl(!0,this.multi,n==="mixed"?this.type:n,r,d,u)}if(arguments.length===3){l=""+l,c=""+c;const d=this._nodes.get(l);if(!d)throw new dt(`Graph.${s}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(c))throw new dt(`Graph.${s}:  could not find the "${c}" target node in the graph.`);return ul(!0,n,this.multi,r,d,c,u)}throw new Et(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const o="some"+e[0].toUpperCase()+e.slice(1,-1);i.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((d,h,p,x,S,m,f)=>c(d,h,p,x,S,m,f)),!!this[s].apply(this,l)};const a="every"+e[0].toUpperCase()+e.slice(1,-1);i.prototype[a]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();return l.push((d,h,p,x,S,m,f)=>!c(d,h,p,x,S,m,f)),!this[s].apply(this,l)}}function vv(i,t){const{name:e,type:n,direction:r}=t,s=e.slice(0,-1)+"Entries";i.prototype[s]=function(o,a){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Qi();if(!arguments.length)return hv(this,n);if(arguments.length===1){o=""+o;const l=this._nodes.get(o);if(!l)throw new dt(`Graph.${s}: could not find the "${o}" node in the graph.`);return fv(n,r,l)}if(arguments.length===2){o=""+o,a=""+a;const l=this._nodes.get(o);if(!l)throw new dt(`Graph.${s}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(a))throw new dt(`Graph.${s}:  could not find the "${a}" target node in the graph.`);return mv(n,r,l,a)}throw new Et(`Graph.${s}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function yv(i){sv.forEach(t=>{gv(i,t),_v(i,t),xv(i,t),vv(i,t)})}const Mv=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function $s(){this.A=null,this.B=null}$s.prototype.wrap=function(i){this.A===null?this.A=i:this.B===null&&(this.B=i)};$s.prototype.has=function(i){return this.A!==null&&i in this.A||this.B!==null&&i in this.B};function gr(i,t,e,n,r){for(const s in n){const o=n[s],a=o.source,l=o.target,c=a===e?l:a;if(t&&t.has(c.key))continue;const u=r(c.key,c.attributes);if(i&&u)return c.key}}function hl(i,t,e,n,r){if(t!=="mixed"){if(t==="undirected")return gr(i,null,n,n.undirected,r);if(typeof e=="string")return gr(i,null,n,n[e],r)}const s=new $s;let o;if(t!=="undirected"){if(e!=="out"){if(o=gr(i,null,n,n.in,r),i&&o)return o;s.wrap(n.in)}if(e!=="in"){if(o=gr(i,s,n,n.out,r),i&&o)return o;s.wrap(n.out)}}if(t!=="directed"&&(o=gr(i,s,n,n.undirected,r),i&&o))return o}function Sv(i,t,e){if(i!=="mixed"){if(i==="undirected")return Object.keys(e.undirected);if(typeof t=="string")return Object.keys(e[t])}const n=[];return hl(!1,i,t,e,function(r){n.push(r)}),n}function _r(i,t,e){const n=Object.keys(e),r=n.length;let s=0;return{[Symbol.iterator](){return this},next(){let o=null;do{if(s>=r)return i&&i.wrap(e),{done:!0};const a=e[n[s++]],l=a.source,c=a.target;if(o=l===t?c:l,i&&i.has(o.key)){o=null;continue}}while(o===null);return{done:!1,value:{neighbor:o.key,attributes:o.attributes}}}}}function Ev(i,t,e){if(i!=="mixed"){if(i==="undirected")return _r(null,e,e.undirected);if(typeof t=="string")return _r(null,e,e[t])}let n=Qi();const r=new $s;return i!=="undirected"&&(t!=="out"&&(n=On(n,_r(r,e,e.in))),t!=="in"&&(n=On(n,_r(r,e,e.out)))),i!=="directed"&&(n=On(n,_r(r,e,e.undirected))),n}function bv(i,t){const{name:e,type:n,direction:r}=t;i.prototype[e]=function(s){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return[];s=""+s;const o=this._nodes.get(s);if(typeof o>"u")throw new dt(`Graph.${e}: could not find the "${s}" node in the graph.`);return Sv(n==="mixed"?this.type:n,r,o)}}function wv(i,t){const{name:e,type:n,direction:r}=t,s="forEach"+e[0].toUpperCase()+e.slice(1,-1);i.prototype[s]=function(c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const d=this._nodes.get(c);if(typeof d>"u")throw new dt(`Graph.${s}: could not find the "${c}" node in the graph.`);hl(!1,n==="mixed"?this.type:n,r,d,u)};const o="map"+e[0].toUpperCase()+e.slice(1);i.prototype[o]=function(c,u){const d=[];return this[s](c,(h,p)=>{d.push(u(h,p))}),d};const a="filter"+e[0].toUpperCase()+e.slice(1);i.prototype[a]=function(c,u){const d=[];return this[s](c,(h,p)=>{u(h,p)&&d.push(h)}),d};const l="reduce"+e[0].toUpperCase()+e.slice(1);i.prototype[l]=function(c,u,d){if(arguments.length<3)throw new Et(`Graph.${l}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let h=d;return this[s](c,(p,x)=>{h=u(h,p,x)}),h}}function Av(i,t){const{name:e,type:n,direction:r}=t,s=e[0].toUpperCase()+e.slice(1,-1),o="find"+s;i.prototype[o]=function(c,u){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return;c=""+c;const d=this._nodes.get(c);if(typeof d>"u")throw new dt(`Graph.${o}: could not find the "${c}" node in the graph.`);return hl(!0,n==="mixed"?this.type:n,r,d,u)};const a="some"+s;i.prototype[a]=function(c,u){return!!this[o](c,u)};const l="every"+s;i.prototype[l]=function(c,u){return!this[o](c,(h,p)=>!u(h,p))}}function Tv(i,t){const{name:e,type:n,direction:r}=t,s=e.slice(0,-1)+"Entries";i.prototype[s]=function(o){if(n!=="mixed"&&this.type!=="mixed"&&n!==this.type)return Qi();o=""+o;const a=this._nodes.get(o);if(typeof a>"u")throw new dt(`Graph.${s}: could not find the "${o}" node in the graph.`);return Ev(n==="mixed"?this.type:n,r,a)}}function Rv(i){Mv.forEach(t=>{bv(i,t),wv(i,t),Av(i,t),Tv(i,t)})}function _s(i,t,e,n,r){const s=n._nodes.values(),o=n.type;let a,l,c,u,d,h;for(;a=s.next(),a.done!==!0;){let p=!1;if(l=a.value,o!=="undirected"){u=l.out;for(c in u){d=u[c];do h=d.target,p=!0,r(l.key,h.key,l.attributes,h.attributes,d.key,d.attributes,d.undirected),d=d.next;while(d)}}if(o!=="directed"){u=l.undirected;for(c in u)if(!(t&&l.key>c)){d=u[c];do h=d.target,h.key!==c&&(h=d.source),p=!0,r(l.key,h.key,l.attributes,h.attributes,d.key,d.attributes,d.undirected),d=d.next;while(d)}}e&&!p&&r(l.key,null,l.attributes,null,null,null,null)}}function Cv(i,t){const e={key:i};return sh(t.attributes)||(e.attributes=Ee({},t.attributes)),e}function Pv(i,t,e){const n={key:t,source:e.source.key,target:e.target.key};return sh(e.attributes)||(n.attributes=Ee({},e.attributes)),i==="mixed"&&e.undirected&&(n.undirected=!0),n}function Dv(i){if(!Ce(i))throw new Et('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in i))throw new Et("Graph.import: serialized node is missing its key.");if("attributes"in i&&(!Ce(i.attributes)||i.attributes===null))throw new Et("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function Lv(i){if(!Ce(i))throw new Et('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in i))throw new Et("Graph.import: serialized edge is missing its source.");if(!("target"in i))throw new Et("Graph.import: serialized edge is missing its target.");if("attributes"in i&&(!Ce(i.attributes)||i.attributes===null))throw new Et("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in i&&typeof i.undirected!="boolean")throw new Et("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const Iv=Ux(),Nv=new Set(["directed","undirected","mixed"]),Yc=new Set(["domain","_events","_eventsCount","_maxListeners"]),Uv=[{name:i=>`${i}Edge`,generateKey:!0},{name:i=>`${i}DirectedEdge`,generateKey:!0,type:"directed"},{name:i=>`${i}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:i=>`${i}EdgeWithKey`},{name:i=>`${i}DirectedEdgeWithKey`,type:"directed"},{name:i=>`${i}UndirectedEdgeWithKey`,type:"undirected"}],Fv={allowSelfLoops:!0,multi:!1,type:"mixed"};function Ov(i,t,e){if(e&&!Ce(e))throw new Et(`Graph.addNode: invalid attributes. Expecting an object but got "${e}"`);if(t=""+t,e=e||{},i._nodes.has(t))throw new zt(`Graph.addNode: the "${t}" node already exist in the graph.`);const n=new i.NodeDataClass(t,e);return i._nodes.set(t,n),i.emit("nodeAdded",{key:t,attributes:e}),n}function Kc(i,t,e){const n=new i.NodeDataClass(t,e);return i._nodes.set(t,n),i.emit("nodeAdded",{key:t,attributes:e}),n}function fh(i,t,e,n,r,s,o,a){if(!n&&i.type==="undirected")throw new zt(`Graph.${t}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new zt(`Graph.${t}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(a&&!Ce(a))throw new Et(`Graph.${t}: invalid attributes. Expecting an object but got "${a}"`);if(s=""+s,o=""+o,a=a||{},!i.allowSelfLoops&&s===o)throw new zt(`Graph.${t}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const l=i._nodes.get(s),c=i._nodes.get(o);if(!l)throw new dt(`Graph.${t}: source node "${s}" not found.`);if(!c)throw new dt(`Graph.${t}: target node "${o}" not found.`);const u={key:null,undirected:n,source:s,target:o,attributes:a};if(e)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new zt(`Graph.${t}: the "${r}" edge already exists in the graph.`);if(!i.multi&&(n?typeof l.undirected[o]<"u":typeof l.out[o]<"u"))throw new zt(`Graph.${t}: an edge linking "${s}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const d=new tr(n,r,l,c,a);i._edges.set(r,d);const h=s===o;return n?(l.undirectedDegree++,c.undirectedDegree++,h&&(l.undirectedLoops++,i._undirectedSelfLoopCount++)):(l.outDegree++,c.inDegree++,h&&(l.directedLoops++,i._directedSelfLoopCount++)),i.multi?d.attachMulti():d.attach(),n?i._undirectedSize++:i._directedSize++,u.key=r,i.emit("edgeAdded",u),r}function Bv(i,t,e,n,r,s,o,a,l){if(!n&&i.type==="undirected")throw new zt(`Graph.${t}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(n&&i.type==="directed")throw new zt(`Graph.${t}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(a){if(l){if(typeof a!="function")throw new Et(`Graph.${t}: invalid updater function. Expecting a function but got "${a}"`)}else if(!Ce(a))throw new Et(`Graph.${t}: invalid attributes. Expecting an object but got "${a}"`)}s=""+s,o=""+o;let c;if(l&&(c=a,a=void 0),!i.allowSelfLoops&&s===o)throw new zt(`Graph.${t}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=i._nodes.get(s),d=i._nodes.get(o),h,p;if(!e&&(h=i._edges.get(r),h)){if((h.source.key!==s||h.target.key!==o)&&(!n||h.source.key!==o||h.target.key!==s))throw new zt(`Graph.${t}: inconsistency detected when attempting to merge the "${r}" edge with "${s}" source & "${o}" target vs. ("${h.source.key}", "${h.target.key}").`);p=h}if(!p&&!i.multi&&u&&(p=n?u.undirected[o]:u.out[o]),p){const b=[p.key,!1,!1,!1];if(l?!c:!a)return b;if(l){const E=p.attributes;p.attributes=c(E),i.emit("edgeAttributesUpdated",{type:"replace",key:p.key,attributes:p.attributes})}else Ee(p.attributes,a),i.emit("edgeAttributesUpdated",{type:"merge",key:p.key,attributes:p.attributes,data:a});return b}a=a||{},l&&c&&(a=c(a));const x={key:null,undirected:n,source:s,target:o,attributes:a};if(e)r=i._edgeKeyGenerator();else if(r=""+r,i._edges.has(r))throw new zt(`Graph.${t}: the "${r}" edge already exists in the graph.`);let S=!1,m=!1;u||(u=Kc(i,s,{}),S=!0,s===o&&(d=u,m=!0)),d||(d=Kc(i,o,{}),m=!0),h=new tr(n,r,u,d,a),i._edges.set(r,h);const f=s===o;return n?(u.undirectedDegree++,d.undirectedDegree++,f&&(u.undirectedLoops++,i._undirectedSelfLoopCount++)):(u.outDegree++,d.inDegree++,f&&(u.directedLoops++,i._directedSelfLoopCount++)),i.multi?h.attachMulti():h.attach(),n?i._undirectedSize++:i._directedSize++,x.key=r,i.emit("edgeAdded",x),[r,!0,S,m]}function Bi(i,t){i._edges.delete(t.key);const{source:e,target:n,attributes:r}=t,s=t.undirected,o=e===n;s?(e.undirectedDegree--,n.undirectedDegree--,o&&(e.undirectedLoops--,i._undirectedSelfLoopCount--)):(e.outDegree--,n.inDegree--,o&&(e.directedLoops--,i._directedSelfLoopCount--)),i.multi?t.detachMulti():t.detach(),s?i._undirectedSize--:i._directedSize--,i.emit("edgeDropped",{key:t.key,attributes:r,source:e.key,target:n.key,undirected:s})}class pe extends Ix.EventEmitter{constructor(t){if(super(),t=Ee({},Fv,t),typeof t.multi!="boolean")throw new Et(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${t.multi}".`);if(!Nv.has(t.type))throw new Et(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${t.type}".`);if(typeof t.allowSelfLoops!="boolean")throw new Et(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${t.allowSelfLoops}".`);const e=t.type==="mixed"?oh:t.type==="directed"?ah:lh;en(this,"NodeDataClass",e);const n="geid_"+Iv()+"_";let r=0;const s=()=>{let o;do o=n+r++;while(this._edges.has(o));return o};en(this,"_attributes",{}),en(this,"_nodes",new Map),en(this,"_edges",new Map),en(this,"_directedSize",0),en(this,"_undirectedSize",0),en(this,"_directedSelfLoopCount",0),en(this,"_undirectedSelfLoopCount",0),en(this,"_edgeKeyGenerator",s),en(this,"_options",t),Yc.forEach(o=>en(this,o,this[o])),un(this,"order",()=>this._nodes.size),un(this,"size",()=>this._edges.size),un(this,"directedSize",()=>this._directedSize),un(this,"undirectedSize",()=>this._undirectedSize),un(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),un(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),un(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),un(this,"multi",this._options.multi),un(this,"type",this._options.type),un(this,"allowSelfLoops",this._options.allowSelfLoops),un(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(t){return this._nodes.has(""+t)}hasDirectedEdge(t,e){if(this.type==="undirected")return!1;if(arguments.length===1){const n=""+t,r=this._edges.get(n);return!!r&&!r.undirected}else if(arguments.length===2){t=""+t,e=""+e;const n=this._nodes.get(t);return n?n.out.hasOwnProperty(e):!1}throw new Et(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(t,e){if(this.type==="directed")return!1;if(arguments.length===1){const n=""+t,r=this._edges.get(n);return!!r&&r.undirected}else if(arguments.length===2){t=""+t,e=""+e;const n=this._nodes.get(t);return n?n.undirected.hasOwnProperty(e):!1}throw new Et(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(t,e){if(arguments.length===1){const n=""+t;return this._edges.has(n)}else if(arguments.length===2){t=""+t,e=""+e;const n=this._nodes.get(t);return n?typeof n.out<"u"&&n.out.hasOwnProperty(e)||typeof n.undirected<"u"&&n.undirected.hasOwnProperty(e):!1}throw new Et(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(t,e){if(this.type==="undirected")return;if(t=""+t,e=""+e,this.multi)throw new zt("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const n=this._nodes.get(t);if(!n)throw new dt(`Graph.directedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new dt(`Graph.directedEdge: could not find the "${e}" target node in the graph.`);const r=n.out&&n.out[e]||void 0;if(r)return r.key}undirectedEdge(t,e){if(this.type==="directed")return;if(t=""+t,e=""+e,this.multi)throw new zt("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const n=this._nodes.get(t);if(!n)throw new dt(`Graph.undirectedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new dt(`Graph.undirectedEdge: could not find the "${e}" target node in the graph.`);const r=n.undirected&&n.undirected[e]||void 0;if(r)return r.key}edge(t,e){if(this.multi)throw new zt("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");t=""+t,e=""+e;const n=this._nodes.get(t);if(!n)throw new dt(`Graph.edge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new dt(`Graph.edge: could not find the "${e}" target node in the graph.`);const r=n.out&&n.out[e]||n.undirected&&n.undirected[e]||void 0;if(r)return r.key}areDirectedNeighbors(t,e){t=""+t,e=""+e;const n=this._nodes.get(t);if(!n)throw new dt(`Graph.areDirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in n.in||e in n.out}areOutNeighbors(t,e){t=""+t,e=""+e;const n=this._nodes.get(t);if(!n)throw new dt(`Graph.areOutNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in n.out}areInNeighbors(t,e){t=""+t,e=""+e;const n=this._nodes.get(t);if(!n)throw new dt(`Graph.areInNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in n.in}areUndirectedNeighbors(t,e){t=""+t,e=""+e;const n=this._nodes.get(t);if(!n)throw new dt(`Graph.areUndirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="directed"?!1:e in n.undirected}areNeighbors(t,e){t=""+t,e=""+e;const n=this._nodes.get(t);if(!n)throw new dt(`Graph.areNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&(e in n.in||e in n.out)||this.type!=="directed"&&e in n.undirected}areInboundNeighbors(t,e){t=""+t,e=""+e;const n=this._nodes.get(t);if(!n)throw new dt(`Graph.areInboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in n.in||this.type!=="directed"&&e in n.undirected}areOutboundNeighbors(t,e){t=""+t,e=""+e;const n=this._nodes.get(t);if(!n)throw new dt(`Graph.areOutboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in n.out||this.type!=="directed"&&e in n.undirected}inDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.inDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree}outDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.outDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree}directedDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.directedDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree}undirectedDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.undirectedDegree: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree}inboundDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.inboundDegree: could not find the "${t}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=e.undirectedDegree),this.type!=="undirected"&&(n+=e.inDegree),n}outboundDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.outboundDegree: could not find the "${t}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=e.undirectedDegree),this.type!=="undirected"&&(n+=e.outDegree),n}degree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.degree: could not find the "${t}" node in the graph.`);let n=0;return this.type!=="directed"&&(n+=e.undirectedDegree),this.type!=="undirected"&&(n+=e.inDegree+e.outDegree),n}inDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.inDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree-e.directedLoops}outDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.outDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree-e.directedLoops}directedDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.directedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree-e.directedLoops*2}undirectedDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree-e.undirectedLoops*2}inboundDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(n+=e.inDegree,r+=e.directedLoops),n-r}outboundDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(n+=e.outDegree,r+=e.directedLoops),n-r}degreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.degreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let n=0,r=0;return this.type!=="directed"&&(n+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(n+=e.inDegree+e.outDegree,r+=e.directedLoops*2),n-r}source(t){t=""+t;const e=this._edges.get(t);if(!e)throw new dt(`Graph.source: could not find the "${t}" edge in the graph.`);return e.source.key}target(t){t=""+t;const e=this._edges.get(t);if(!e)throw new dt(`Graph.target: could not find the "${t}" edge in the graph.`);return e.target.key}extremities(t){t=""+t;const e=this._edges.get(t);if(!e)throw new dt(`Graph.extremities: could not find the "${t}" edge in the graph.`);return[e.source.key,e.target.key]}opposite(t,e){t=""+t,e=""+e;const n=this._edges.get(e);if(!n)throw new dt(`Graph.opposite: could not find the "${e}" edge in the graph.`);const r=n.source.key,s=n.target.key;if(t===r)return s;if(t===s)return r;throw new dt(`Graph.opposite: the "${t}" node is not attached to the "${e}" edge (${r}, ${s}).`)}hasExtremity(t,e){t=""+t,e=""+e;const n=this._edges.get(t);if(!n)throw new dt(`Graph.hasExtremity: could not find the "${t}" edge in the graph.`);return n.source.key===e||n.target.key===e}isUndirected(t){t=""+t;const e=this._edges.get(t);if(!e)throw new dt(`Graph.isUndirected: could not find the "${t}" edge in the graph.`);return e.undirected}isDirected(t){t=""+t;const e=this._edges.get(t);if(!e)throw new dt(`Graph.isDirected: could not find the "${t}" edge in the graph.`);return!e.undirected}isSelfLoop(t){t=""+t;const e=this._edges.get(t);if(!e)throw new dt(`Graph.isSelfLoop: could not find the "${t}" edge in the graph.`);return e.source===e.target}addNode(t,e){return Ov(this,t,e).key}mergeNode(t,e){if(e&&!Ce(e))throw new Et(`Graph.mergeNode: invalid attributes. Expecting an object but got "${e}"`);t=""+t,e=e||{};let n=this._nodes.get(t);return n?(e&&(Ee(n.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:t,attributes:n.attributes,data:e})),[t,!1]):(n=new this.NodeDataClass(t,e),this._nodes.set(t,n),this.emit("nodeAdded",{key:t,attributes:e}),[t,!0])}updateNode(t,e){if(e&&typeof e!="function")throw new Et(`Graph.updateNode: invalid updater function. Expecting a function but got "${e}"`);t=""+t;let n=this._nodes.get(t);if(n){if(e){const s=n.attributes;n.attributes=e(s),this.emit("nodeAttributesUpdated",{type:"replace",key:t,attributes:n.attributes})}return[t,!1]}const r=e?e({}):{};return n=new this.NodeDataClass(t,r),this._nodes.set(t,n),this.emit("nodeAdded",{key:t,attributes:r}),[t,!0]}dropNode(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new dt(`Graph.dropNode: could not find the "${t}" node in the graph.`);let n;if(this.type!=="undirected"){for(const r in e.out){n=e.out[r];do Bi(this,n),n=n.next;while(n)}for(const r in e.in){n=e.in[r];do Bi(this,n),n=n.next;while(n)}}if(this.type!=="directed")for(const r in e.undirected){n=e.undirected[r];do Bi(this,n),n=n.next;while(n)}this._nodes.delete(t),this.emit("nodeDropped",{key:t,attributes:e.attributes})}dropEdge(t){let e;if(arguments.length>1){const n=""+arguments[0],r=""+arguments[1];if(e=on(this,n,r,this.type),!e)throw new dt(`Graph.dropEdge: could not find the "${n}" -> "${r}" edge in the graph.`)}else if(t=""+t,e=this._edges.get(t),!e)throw new dt(`Graph.dropEdge: could not find the "${t}" edge in the graph.`);return Bi(this,e),this}dropDirectedEdge(t,e){if(arguments.length<2)throw new zt("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new zt("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");t=""+t,e=""+e;const n=on(this,t,e,"directed");if(!n)throw new dt(`Graph.dropDirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return Bi(this,n),this}dropUndirectedEdge(t,e){if(arguments.length<2)throw new zt("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new zt("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const n=on(this,t,e,"undirected");if(!n)throw new dt(`Graph.dropUndirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return Bi(this,n),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const t=this._nodes.values();let e;for(;e=t.next(),e.done!==!0;)e.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(t){return this._attributes[t]}getAttributes(){return this._attributes}hasAttribute(t){return this._attributes.hasOwnProperty(t)}setAttribute(t,e){return this._attributes[t]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}updateAttribute(t,e){if(typeof e!="function")throw new Et("Graph.updateAttribute: updater should be a function.");const n=this._attributes[t];return this._attributes[t]=e(n),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}removeAttribute(t){return delete this._attributes[t],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:t}),this}replaceAttributes(t){if(!Ce(t))throw new Et("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=t,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(t){if(!Ce(t))throw new Et("Graph.mergeAttributes: provided attributes are not a plain object.");return Ee(this._attributes,t),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:t}),this}updateAttributes(t){if(typeof t!="function")throw new Et("Graph.updateAttributes: provided updater is not a function.");return this._attributes=t(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(t,e){if(typeof t!="function")throw new Et("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!qc(e))throw new Et("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._nodes.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,s.attributes=t(s.key,s.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})}updateEachEdgeAttributes(t,e){if(typeof t!="function")throw new Et("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!qc(e))throw new Et("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const n=this._edges.values();let r,s,o,a;for(;r=n.next(),r.done!==!0;)s=r.value,o=s.source,a=s.target,s.attributes=t(s.key,s.attributes,o.key,a.key,o.attributes,a.attributes,s.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})}forEachAdjacencyEntry(t){if(typeof t!="function")throw new Et("Graph.forEachAdjacencyEntry: expecting a callback.");_s(!1,!1,!1,this,t)}forEachAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new Et("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");_s(!1,!1,!0,this,t)}forEachAssymetricAdjacencyEntry(t){if(typeof t!="function")throw new Et("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");_s(!1,!0,!1,this,t)}forEachAssymetricAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new Et("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");_s(!1,!0,!0,this,t)}nodes(){return Array.from(this._nodes.keys())}forEachNode(t){if(typeof t!="function")throw new Et("Graph.forEachNode: expecting a callback.");const e=this._nodes.values();let n,r;for(;n=e.next(),n.done!==!0;)r=n.value,t(r.key,r.attributes)}findNode(t){if(typeof t!="function")throw new Et("Graph.findNode: expecting a callback.");const e=this._nodes.values();let n,r;for(;n=e.next(),n.done!==!0;)if(r=n.value,t(r.key,r.attributes))return r.key}mapNodes(t){if(typeof t!="function")throw new Et("Graph.mapNode: expecting a callback.");const e=this._nodes.values();let n,r;const s=new Array(this.order);let o=0;for(;n=e.next(),n.done!==!0;)r=n.value,s[o++]=t(r.key,r.attributes);return s}someNode(t){if(typeof t!="function")throw new Et("Graph.someNode: expecting a callback.");const e=this._nodes.values();let n,r;for(;n=e.next(),n.done!==!0;)if(r=n.value,t(r.key,r.attributes))return!0;return!1}everyNode(t){if(typeof t!="function")throw new Et("Graph.everyNode: expecting a callback.");const e=this._nodes.values();let n,r;for(;n=e.next(),n.done!==!0;)if(r=n.value,!t(r.key,r.attributes))return!1;return!0}filterNodes(t){if(typeof t!="function")throw new Et("Graph.filterNodes: expecting a callback.");const e=this._nodes.values();let n,r;const s=[];for(;n=e.next(),n.done!==!0;)r=n.value,t(r.key,r.attributes)&&s.push(r.key);return s}reduceNodes(t,e){if(typeof t!="function")throw new Et("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new Et("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let n=e;const r=this._nodes.values();let s,o;for(;s=r.next(),s.done!==!0;)o=s.value,n=t(n,o.key,o.attributes);return n}nodeEntries(){const t=this._nodes.values();return{[Symbol.iterator](){return this},next(){const e=t.next();if(e.done)return e;const n=e.value;return{value:{node:n.key,attributes:n.attributes},done:!1}}}}export(){const t=new Array(this._nodes.size);let e=0;this._nodes.forEach((r,s)=>{t[e++]=Cv(s,r)});const n=new Array(this._edges.size);return e=0,this._edges.forEach((r,s)=>{n[e++]=Pv(this.type,s,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:t,edges:n}}import(t,e=!1){if(t instanceof pe)return t.forEachNode((l,c)=>{e?this.mergeNode(l,c):this.addNode(l,c)}),t.forEachEdge((l,c,u,d,h,p,x)=>{e?x?this.mergeUndirectedEdgeWithKey(l,u,d,c):this.mergeDirectedEdgeWithKey(l,u,d,c):x?this.addUndirectedEdgeWithKey(l,u,d,c):this.addDirectedEdgeWithKey(l,u,d,c)}),this;if(!Ce(t))throw new Et("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(t.attributes){if(!Ce(t.attributes))throw new Et("Graph.import: invalid attributes. Expecting a plain object.");e?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}let n,r,s,o,a;if(t.nodes){if(s=t.nodes,!Array.isArray(s))throw new Et("Graph.import: invalid nodes. Expecting an array.");for(n=0,r=s.length;n<r;n++){o=s[n],Dv(o);const{key:l,attributes:c}=o;e?this.mergeNode(l,c):this.addNode(l,c)}}if(t.edges){let l=!1;if(this.type==="undirected"&&(l=!0),s=t.edges,!Array.isArray(s))throw new Et("Graph.import: invalid edges. Expecting an array.");for(n=0,r=s.length;n<r;n++){a=s[n],Lv(a);const{source:c,target:u,attributes:d,undirected:h=l}=a;let p;"key"in a?(p=e?h?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:h?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,p.call(this,a.key,c,u,d)):(p=e?h?this.mergeUndirectedEdge:this.mergeDirectedEdge:h?this.addUndirectedEdge:this.addDirectedEdge,p.call(this,c,u,d))}}return this}nullCopy(t){const e=new pe(Ee({},this._options,t));return e.replaceAttributes(Ee({},this.getAttributes())),e}emptyCopy(t){const e=this.nullCopy(t);return this._nodes.forEach((n,r)=>{const s=Ee({},n.attributes);n=new e.NodeDataClass(r,s),e._nodes.set(r,n)}),e}copy(t){if(t=t||{},typeof t.type=="string"&&t.type!==this.type&&t.type!=="mixed")throw new zt(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${t.type}" because this would mean losing information about the current graph.`);if(typeof t.multi=="boolean"&&t.multi!==this.multi&&t.multi!==!0)throw new zt("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof t.allowSelfLoops=="boolean"&&t.allowSelfLoops!==this.allowSelfLoops&&t.allowSelfLoops!==!0)throw new zt("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const e=this.emptyCopy(t),n=this._edges.values();let r,s;for(;r=n.next(),r.done!==!0;)s=r.value,fh(e,"copy",!1,s.undirected,s.key,s.source.key,s.target.key,Ee({},s.attributes));return e}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const t={};this._nodes.forEach((s,o)=>{t[o]=s.attributes});const e={},n={};this._edges.forEach((s,o)=>{const a=s.undirected?"--":"->";let l="",c=s.source.key,u=s.target.key,d;s.undirected&&c>u&&(d=c,c=u,u=d);const h=`(${c})${a}(${u})`;o.startsWith("geid_")?this.multi&&(typeof n[h]>"u"?n[h]=0:n[h]++,l+=`${n[h]}. `):l+=`[${o}]: `,l+=h,e[l]=s.attributes});const r={};for(const s in this)this.hasOwnProperty(s)&&!Yc.has(s)&&typeof this[s]!="function"&&typeof s!="symbol"&&(r[s]=this[s]);return r.attributes=this._attributes,r.nodes=t,r.edges=e,en(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(pe.prototype[Symbol.for("nodejs.util.inspect.custom")]=pe.prototype.inspect);Uv.forEach(i=>{["add","merge","update"].forEach(t=>{const e=i.name(t),n=t==="add"?fh:Bv;i.generateKey?pe.prototype[e]=function(r,s,o){return n(this,e,!0,(i.type||this.type)==="undirected",null,r,s,o,t==="update")}:pe.prototype[e]=function(r,s,o,a){return n(this,e,!1,(i.type||this.type)==="undirected",r,s,o,a,t==="update")}})});qx(pe);rv(pe);yv(pe);Rv(pe);class ph extends pe{constructor(t){const e=Ee({type:"directed"},t);if("multi"in e&&e.multi!==!1)throw new Et("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="directed")throw new Et('DirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class dl extends pe{constructor(t){const e=Ee({type:"undirected"},t);if("multi"in e&&e.multi!==!1)throw new Et("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="undirected")throw new Et('UndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class mh extends pe{constructor(t){const e=Ee({multi:!0},t);if("multi"in e&&e.multi!==!0)throw new Et("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(e)}}class gh extends pe{constructor(t){const e=Ee({type:"directed",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new Et("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="directed")throw new Et('MultiDirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class _h extends pe{constructor(t){const e=Ee({type:"undirected",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new Et("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="undirected")throw new Et('MultiUndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}function er(i){i.from=function(t,e){const n=Ee({},t.options,e),r=new i(n);return r.import(t),r}}er(pe);er(ph);er(dl);er(mh);er(gh);er(_h);pe.Graph=pe;pe.DirectedGraph=ph;pe.UndirectedGraph=dl;pe.MultiGraph=mh;pe.MultiDirectedGraph=gh;pe.MultiUndirectedGraph=_h;pe.InvalidArgumentsGraphError=Et;pe.NotFoundGraphError=dt;pe.UsageGraphError=zt;var No,Zc;function xh(){if(Zc)return No;Zc=1;function i(e){return!e||typeof e!="object"||typeof e=="function"||Array.isArray(e)||e instanceof Set||e instanceof Map||e instanceof RegExp||e instanceof Date}function t(e,n){e=e||{};var r={};for(var s in n){var o=e[s],a=n[s];if(!i(a)){r[s]=t(o,a);continue}o===void 0?r[s]=a:r[s]=o}return r}return No=t,No}var Uo,Jc;function vh(){return Jc||(Jc=1,Uo=function(t){return t!==null&&typeof t=="object"&&typeof t.addUndirectedEdgeWithKey=="function"&&typeof t.dropNode=="function"&&typeof t.multi=="boolean"}),Uo}var Fo,jc;function zv(){if(jc)return Fo;jc=1;var i=vh();return Fo=function(e){if(!i(e))throw new Error("graphology-utils/infer-type: expecting a valid graphology instance.");var n=e.type;return n!=="mixed"?n:e.directedSize===0&&e.undirectedSize===0||e.directedSize>0&&e.undirectedSize>0?"mixed":e.directedSize>0?"directed":"undirected"},Fo}var Oo,Qc;function yh(){if(Qc)return Oo;Qc=1;function i(t){if(typeof t!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=t}return typeof Symbol<"u"&&(i.prototype[Symbol.iterator]=function(){return this}),i.of=function(){var t=arguments,e=t.length,n=0;return new i(function(){return n>=e?{done:!0}:{done:!1,value:t[n++]}})},i.empty=function(){var t=new i(function(){return{done:!0}});return t},i.fromSequence=function(t){var e=0,n=t.length;return new i(function(){return e>=n?{done:!0}:{done:!1,value:t[e++]}})},i.is=function(t){return t instanceof i?!0:typeof t=="object"&&t!==null&&typeof t.next=="function"},Oo=i,Oo}var Bo={},tu;function fl(){return tu||(tu=1,(function(i){var t=Math.pow(2,8)-1,e=Math.pow(2,16)-1,n=Math.pow(2,32)-1,r=Math.pow(2,7)-1,s=Math.pow(2,15)-1,o=Math.pow(2,31)-1;i.getPointerArray=function(l){var c=l-1;if(c<=t)return Uint8Array;if(c<=e)return Uint16Array;if(c<=n)return Uint32Array;throw new Error("mnemonist: Pointer Array of size > 4294967295 is not supported.")},i.getSignedPointerArray=function(l){var c=l-1;return c<=r?Int8Array:c<=s?Int16Array:c<=o?Int32Array:Float64Array},i.getNumberType=function(l){return l===(l|0)?Math.sign(l)===-1?l<=127&&l>=-128?Int8Array:l<=32767&&l>=-32768?Int16Array:Int32Array:l<=255?Uint8Array:l<=65535?Uint16Array:Uint32Array:Float64Array};var a={Uint8Array:1,Int8Array:2,Uint16Array:3,Int16Array:4,Uint32Array:5,Int32Array:6,Float32Array:7,Float64Array:8};i.getMinimalRepresentation=function(l,c){var u=null,d=0,h,p,x,S,m;for(S=0,m=l.length;S<m;S++)x=c?c(l[S]):l[S],p=i.getNumberType(x),h=a[p.name],h>d&&(d=h,u=p);return u},i.isTypedArray=function(l){return typeof ArrayBuffer<"u"&&ArrayBuffer.isView(l)},i.concat=function(){var l=0,c,u,d;for(c=0,d=arguments.length;c<d;c++)l+=arguments[c].length;var h=new arguments[0].constructor(l);for(c=0,u=0;c<d;c++)h.set(arguments[c],u),u+=arguments[c].length;return h},i.indices=function(l){for(var c=i.getPointerArray(l),u=new c(l),d=0;d<l;d++)u[d]=d;return u}})(Bo)),Bo}var zo,eu;function Gv(){if(eu)return zo;eu=1;var i=yh(),t=fl().getPointerArray;function e(n,r){arguments.length<2&&(r=n,n=Array);var s=t(r);this.size=0,this.length=r,this.dense=new s(r),this.sparse=new s(r),this.vals=new n(r)}return e.prototype.clear=function(){this.size=0},e.prototype.has=function(n){var r=this.sparse[n];return r<this.size&&this.dense[r]===n},e.prototype.get=function(n){var r=this.sparse[n];if(r<this.size&&this.dense[r]===n)return this.vals[r]},e.prototype.set=function(n,r){var s=this.sparse[n];return s<this.size&&this.dense[s]===n?(this.vals[s]=r,this):(this.dense[this.size]=n,this.sparse[n]=this.size,this.vals[this.size]=r,this.size++,this)},e.prototype.delete=function(n){var r=this.sparse[n];return r>=this.size||this.dense[r]!==n?!1:(r=this.dense[this.size-1],this.dense[this.sparse[n]]=r,this.sparse[r]=this.sparse[n],this.size--,!0)},e.prototype.forEach=function(n,r){r=arguments.length>1?r:this;for(var s=0;s<this.size;s++)n.call(r,this.vals[s],this.dense[s])},e.prototype.keys=function(){var n=this.size,r=this.dense,s=0;return new i(function(){if(s<n){var o=r[s];return s++,{value:o}}return{done:!0}})},e.prototype.values=function(){var n=this.size,r=this.vals,s=0;return new i(function(){if(s<n){var o=r[s];return s++,{value:o}}return{done:!0}})},e.prototype.entries=function(){var n=this.size,r=this.dense,s=this.vals,o=0;return new i(function(){if(o<n){var a=[r[o],s[o]];return o++,{value:a}}return{done:!0}})},typeof Symbol<"u"&&(e.prototype[Symbol.iterator]=e.prototype.entries),e.prototype.inspect=function(){for(var n=new Map,r=0;r<this.size;r++)n.set(this.dense[r],this.vals[r]);return Object.defineProperty(n,"constructor",{value:e,enumerable:!1}),n.length=this.length,this.vals.constructor!==Array&&(n.type=this.vals.constructor.name),n},typeof Symbol<"u"&&(e.prototype[Symbol.for("nodejs.util.inspect.custom")]=e.prototype.inspect),zo=e,zo}var Go,nu;function kv(){if(nu)return Go;nu=1;var i=yh(),t=fl().getPointerArray;function e(n){var r=t(n);this.start=0,this.size=0,this.capacity=n,this.dense=new r(n),this.sparse=new r(n)}return e.prototype.clear=function(){this.start=0,this.size=0},e.prototype.has=function(n){if(this.size===0)return!1;var r=this.sparse[n],s=r<this.capacity&&r>=this.start&&r<this.start+this.size||r<(this.start+this.size)%this.capacity;return s&&this.dense[r]===n},e.prototype.enqueue=function(n){var r=this.sparse[n];if(this.size!==0){var s=r<this.capacity&&r>=this.start&&r<this.start+this.size||r<(this.start+this.size)%this.capacity;if(s&&this.dense[r]===n)return this}return r=(this.start+this.size)%this.capacity,this.dense[r]=n,this.sparse[n]=r,this.size++,this},e.prototype.dequeue=function(){if(this.size!==0){var n=this.start;this.size--,this.start++,this.start===this.capacity&&(this.start=0);var r=this.dense[n];return this.sparse[r]=this.capacity,r}},e.prototype.forEach=function(n,r){r=arguments.length>1?r:this;for(var s=this.capacity,o=this.size,a=this.start,l=0;l<o;)n.call(r,this.dense[a],l,this),a++,l++,a===s&&(a=0)},e.prototype.values=function(){var n=this.dense,r=this.capacity,s=this.size,o=this.start,a=0;return new i(function(){if(a>=s)return{done:!0};var l=n[o];return o++,a++,o===r&&(o=0),{value:l,done:!1}})},typeof Symbol<"u"&&(e.prototype[Symbol.iterator]=e.prototype.values),e.prototype.inspect=function(){var n=[];return this.forEach(function(r){n.push(r)}),Object.defineProperty(n,"constructor",{value:e,enumerable:!1}),n.capacity=this.capacity,n},typeof Symbol<"u"&&(e.prototype[Symbol.for("nodejs.util.inspect.custom")]=e.prototype.inspect),Go=e,Go}var ko,iu;function Vv(){if(iu)return ko;iu=1;function i(e){return function(n){return typeof n!="number"&&(n=n.length),Math.floor(e()*n)}}var t=i(Math.random);return t.createRandomIndex=i,ko=t,ko}var xs={},xr={},ru;function Hv(){if(ru)return xr;ru=1;function i(n){return typeof n!="number"||isNaN(n)?1:n}function t(n,r){var s={},o=function(c){return typeof c>"u"?r:c};typeof r=="function"&&(o=r);var a=function(c){return o(c[n])},l=function(){return o(void 0)};return typeof n=="string"?(s.fromAttributes=a,s.fromGraph=function(c,u){return a(c.getNodeAttributes(u))},s.fromEntry=function(c,u){return a(u)}):typeof n=="function"?(s.fromAttributes=function(){throw new Error("graphology-utils/getters/createNodeValueGetter: irrelevant usage.")},s.fromGraph=function(c,u){return o(n(u,c.getNodeAttributes(u)))},s.fromEntry=function(c,u){return o(n(c,u))}):(s.fromAttributes=l,s.fromGraph=l,s.fromEntry=l),s}function e(n,r){var s={},o=function(c){return typeof c>"u"?r:c};typeof r=="function"&&(o=r);var a=function(c){return o(c[n])},l=function(){return o(void 0)};return typeof n=="string"?(s.fromAttributes=a,s.fromGraph=function(c,u){return a(c.getEdgeAttributes(u))},s.fromEntry=function(c,u){return a(u)},s.fromPartialEntry=s.fromEntry,s.fromMinimalEntry=s.fromEntry):typeof n=="function"?(s.fromAttributes=function(){throw new Error("graphology-utils/getters/createEdgeValueGetter: irrelevant usage.")},s.fromGraph=function(c,u){var d=c.extremities(u);return o(n(u,c.getEdgeAttributes(u),d[0],d[1],c.getNodeAttributes(d[0]),c.getNodeAttributes(d[1]),c.isUndirected(u)))},s.fromEntry=function(c,u,d,h,p,x,S){return o(n(c,u,d,h,p,x,S))},s.fromPartialEntry=function(c,u,d,h){return o(n(c,u,d,h))},s.fromMinimalEntry=function(c,u){return o(n(c,u))}):(s.fromAttributes=l,s.fromGraph=l,s.fromEntry=l,s.fromMinimalEntry=l),s}return xr.createNodeValueGetter=t,xr.createEdgeValueGetter=e,xr.createEdgeWeightGetter=function(n){return e(n,i)},xr}var su;function Wv(){if(su)return xs;su=1;var i=fl(),t=xh(),e=Hv().createEdgeWeightGetter,n=Symbol.for("nodejs.util.inspect.custom"),r={getEdgeWeight:"weight",keepDendrogram:!1,resolution:1};function s(a,l){l=t(l,r);var c=l.resolution,u=e(l.getEdgeWeight).fromEntry,d=(a.size-a.selfLoopCount)*2,h=i.getPointerArray(d),p=i.getPointerArray(a.order+1),x=l.getEdgeWeight?Float64Array:i.getPointerArray(a.size*2);this.C=a.order,this.M=0,this.E=d,this.U=0,this.resolution=c,this.level=0,this.graph=a,this.nodes=new Array(a.order),this.keepDendrogram=l.keepDendrogram,this.neighborhood=new p(d),this.weights=new x(d),this.loops=new x(a.order),this.starts=new h(a.order+1),this.belongings=new p(a.order),this.dendrogram=[],this.mapping=null,this.counts=new p(a.order),this.unused=new p(a.order),this.totalWeights=new x(a.order);var S={},m,f=0,b=0,E=this;a.forEachNode(function(g){E.nodes[f]=g,S[g]=f,b+=a.undirectedDegreeWithoutSelfLoops(g),E.starts[f]=b,E.belongings[f]=f,E.counts[f]=1,f++}),a.forEachEdge(function(g,y,v,w,_,A,C){if(m=u(g,y,v,w,_,A,C),v=S[v],w=S[w],E.M+=m,v===w)E.totalWeights[v]+=m*2,E.loops[v]=m*2;else{E.totalWeights[v]+=m,E.totalWeights[w]+=m;var D=--E.starts[v],L=--E.starts[w];E.neighborhood[D]=w,E.neighborhood[L]=v,E.weights[D]=m,E.weights[L]=m}}),this.starts[f]=this.E,this.keepDendrogram?this.dendrogram.push(this.belongings.slice()):this.mapping=this.belongings.slice()}s.prototype.isolate=function(a,l){var c=this.belongings[a];if(this.counts[c]===1)return c;var u=this.unused[--this.U],d=this.loops[a];return this.totalWeights[c]-=l+d,this.totalWeights[u]+=l+d,this.belongings[a]=u,this.counts[c]--,this.counts[u]++,u},s.prototype.move=function(a,l,c){var u=this.belongings[a],d=this.loops[a];this.totalWeights[u]-=l+d,this.totalWeights[c]+=l+d,this.belongings[a]=c;var h=this.counts[u]--===1;this.counts[c]++,h&&(this.unused[this.U++]=u)},s.prototype.computeNodeDegree=function(a){var l,c,u,d=0;for(l=this.starts[a],c=this.starts[a+1];l<c;l++)u=this.weights[l],d+=u;return d},s.prototype.expensiveIsolate=function(a){var l=this.computeNodeDegree(a);return this.isolate(a,l)},s.prototype.expensiveMove=function(a,l){var c=this.computeNodeDegree(a);this.move(a,c,l)},s.prototype.zoomOut=function(){var a=new Array(this.C-this.U),l={},c=this.nodes.length,u=0,d=0,h,p,x,S,m,f,b,E,g;for(h=0,x=this.C;h<x;h++)f=this.belongings[h],f in l||(l[f]=u,a[u]={adj:{},totalWeights:this.totalWeights[f],internalWeights:0},u++),this.belongings[h]=l[f];var y,v;if(this.keepDendrogram){for(y=this.dendrogram[this.level],v=new(i.getPointerArray(u))(c),h=0;h<c;h++)v[h]=this.belongings[y[h]];this.dendrogram.push(v)}else for(h=0;h<c;h++)this.mapping[h]=this.belongings[this.mapping[h]];for(h=0,x=this.C;h<x;h++)for(f=this.belongings[h],E=a[f],g=E.adj,E.internalWeights+=this.loops[h],p=this.starts[h],S=this.starts[h+1];p<S;p++){if(m=this.neighborhood[p],b=this.belongings[m],f===b){E.internalWeights+=this.weights[p];continue}b in g||(g[b]=0),g[b]+=this.weights[p]}for(this.C=u,m=0,f=0;f<u;f++){E=a[f],g=E.adj,f=+f,this.totalWeights[f]=E.totalWeights,this.loops[f]=E.internalWeights,this.counts[f]=1,this.starts[f]=m,this.belongings[f]=f;for(b in g)this.neighborhood[m]=+b,this.weights[m]=g[b],d++,m++}return this.starts[u]=d,this.E=d,this.U=0,this.level++,l},s.prototype.modularity=function(){var a,l,c,u,d,h=0,p=this.M*2,x=new Float64Array(this.C);for(c=0;c<this.C;c++)for(a=this.belongings[c],x[a]+=this.loops[c],u=this.starts[c],d=this.starts[c+1];u<d;u++)l=this.belongings[this.neighborhood[u]],a===l&&(x[a]+=this.weights[u]);for(c=0;c<this.C;c++)h+=x[c]/p-Math.pow(this.totalWeights[c]/p,2)*this.resolution;return h},s.prototype.delta=function(a,l,c,u){var d=this.M,h=this.totalWeights[u];return l+=this.loops[a],c/d-h*l*this.resolution/(2*d*d)},s.prototype.deltaWithOwnCommunity=function(a,l,c,u){var d=this.M,h=this.totalWeights[u];return l+=this.loops[a],c/d-(h-l)*l*this.resolution/(2*d*d)},s.prototype.fastDelta=function(a,l,c,u){var d=this.M,h=this.totalWeights[u];return l+=this.loops[a],c-l*h*this.resolution/(2*d)},s.prototype.fastDeltaWithOwnCommunity=function(a,l,c,u){var d=this.M,h=this.totalWeights[u];return l+=this.loops[a],c-l*(h-l)*this.resolution/(2*d)},s.prototype.bounds=function(a){return[this.starts[a],this.starts[a+1]]},s.prototype.project=function(){var a=this,l={};return a.nodes.slice(0,this.C).forEach(function(c,u){l[c]=Array.from(a.neighborhood.slice(a.starts[u],a.starts[u+1])).map(function(d){return a.nodes[d]})}),l},s.prototype.collect=function(a){arguments.length<1&&(a=this.level);var l={},c=this.keepDendrogram?this.dendrogram[a]:this.mapping,u,d;for(u=0,d=c.length;u<d;u++)l[this.nodes[u]]=c[u];return l},s.prototype.assign=function(a,l){arguments.length<2&&(l=this.level);var c=this.keepDendrogram?this.dendrogram[l]:this.mapping,u,d;for(u=0,d=c.length;u<d;u++)this.graph.setNodeAttribute(this.nodes[u],a,c[u])},s.prototype[n]=function(){var a={};Object.defineProperty(a,"constructor",{value:s,enumerable:!1}),a.C=this.C,a.M=this.M,a.E=this.E,a.U=this.U,a.resolution=this.resolution,a.level=this.level,a.nodes=this.nodes,a.starts=this.starts.slice(0,a.C+1);var l=["neighborhood","weights"],c=["counts","loops","belongings","totalWeights"],u=this;return l.forEach(function(d){a[d]=u[d].slice(0,a.E)}),c.forEach(function(d){a[d]=u[d].slice(0,a.C)}),a.unused=this.unused.slice(0,this.U),this.keepDendrogram?a.dendrogram=this.dendrogram:a.mapping=this.mapping,a};function o(a,l){l=t(l,r);var c=l.resolution,u=e(l.getEdgeWeight).fromEntry,d=(a.size-a.selfLoopCount)*2,h=i.getPointerArray(d),p=i.getPointerArray(a.order+1),x=l.getEdgeWeight?Float64Array:i.getPointerArray(a.size*2);this.C=a.order,this.M=0,this.E=d,this.U=0,this.resolution=c,this.level=0,this.graph=a,this.nodes=new Array(a.order),this.keepDendrogram=l.keepDendrogram,this.neighborhood=new p(d),this.weights=new x(d),this.loops=new x(a.order),this.starts=new h(a.order+1),this.offsets=new h(a.order),this.belongings=new p(a.order),this.dendrogram=[],this.counts=new p(a.order),this.unused=new p(a.order),this.totalInWeights=new x(a.order),this.totalOutWeights=new x(a.order);var S={},m,f=0,b=0,E=this;a.forEachNode(function(g){E.nodes[f]=g,S[g]=f,b+=a.outDegreeWithoutSelfLoops(g),E.starts[f]=b,b+=a.inDegreeWithoutSelfLoops(g),E.offsets[f]=b,E.belongings[f]=f,E.counts[f]=1,f++}),a.forEachEdge(function(g,y,v,w,_,A,C){if(m=u(g,y,v,w,_,A,C),v=S[v],w=S[w],E.M+=m,v===w)E.loops[v]+=m,E.totalInWeights[v]+=m,E.totalOutWeights[v]+=m;else{E.totalOutWeights[v]+=m,E.totalInWeights[w]+=m;var D=--E.starts[v],L=--E.offsets[w];E.neighborhood[D]=w,E.neighborhood[L]=v,E.weights[D]=m,E.weights[L]=m}}),this.starts[f]=this.E,this.keepDendrogram?this.dendrogram.push(this.belongings.slice()):this.mapping=this.belongings.slice()}return o.prototype.bounds=s.prototype.bounds,o.prototype.inBounds=function(a){return[this.offsets[a],this.starts[a+1]]},o.prototype.outBounds=function(a){return[this.starts[a],this.offsets[a]]},o.prototype.project=s.prototype.project,o.prototype.projectIn=function(){var a=this,l={};return a.nodes.slice(0,this.C).forEach(function(c,u){l[c]=Array.from(a.neighborhood.slice(a.offsets[u],a.starts[u+1])).map(function(d){return a.nodes[d]})}),l},o.prototype.projectOut=function(){var a=this,l={};return a.nodes.slice(0,this.C).forEach(function(c,u){l[c]=Array.from(a.neighborhood.slice(a.starts[u],a.offsets[u])).map(function(d){return a.nodes[d]})}),l},o.prototype.isolate=function(a,l,c){var u=this.belongings[a];if(this.counts[u]===1)return u;var d=this.unused[--this.U],h=this.loops[a];return this.totalInWeights[u]-=l+h,this.totalInWeights[d]+=l+h,this.totalOutWeights[u]-=c+h,this.totalOutWeights[d]+=c+h,this.belongings[a]=d,this.counts[u]--,this.counts[d]++,d},o.prototype.move=function(a,l,c,u){var d=this.belongings[a],h=this.loops[a];this.totalInWeights[d]-=l+h,this.totalInWeights[u]+=l+h,this.totalOutWeights[d]-=c+h,this.totalOutWeights[u]+=c+h,this.belongings[a]=u;var p=this.counts[d]--===1;this.counts[u]++,p&&(this.unused[this.U++]=d)},o.prototype.computeNodeInDegree=function(a){var l,c,u,d=0;for(l=this.offsets[a],c=this.starts[a+1];l<c;l++)u=this.weights[l],d+=u;return d},o.prototype.computeNodeOutDegree=function(a){var l,c,u,d=0;for(l=this.starts[a],c=this.offsets[a];l<c;l++)u=this.weights[l],d+=u;return d},o.prototype.expensiveMove=function(a,l){var c=this.computeNodeInDegree(a),u=this.computeNodeOutDegree(a);this.move(a,c,u,l)},o.prototype.zoomOut=function(){var a=new Array(this.C-this.U),l={},c=this.nodes.length,u=0,d=0,h,p,x,S,m,f,b,E,g,y,v,w,_;for(h=0,x=this.C;h<x;h++)f=this.belongings[h],f in l||(l[f]=u,a[u]={inAdj:{},outAdj:{},totalInWeights:this.totalInWeights[f],totalOutWeights:this.totalOutWeights[f],internalWeights:0},u++),this.belongings[h]=l[f];var A,C;if(this.keepDendrogram){for(A=this.dendrogram[this.level],C=new(i.getPointerArray(u))(c),h=0;h<c;h++)C[h]=this.belongings[A[h]];this.dendrogram.push(C)}else for(h=0;h<c;h++)this.mapping[h]=this.belongings[this.mapping[h]];for(h=0,x=this.C;h<x;h++)for(f=this.belongings[h],g=this.offsets[h],E=a[f],w=E.inAdj,_=E.outAdj,E.internalWeights+=this.loops[h],p=this.starts[h],S=this.starts[h+1];p<S;p++){if(m=this.neighborhood[p],b=this.belongings[m],y=p<g,v=y?_:w,f===b){y&&(E.internalWeights+=this.weights[p]);continue}b in v||(v[b]=0),v[b]+=this.weights[p]}for(this.C=u,m=0,f=0;f<u;f++){E=a[f],w=E.inAdj,_=E.outAdj,f=+f,this.totalInWeights[f]=E.totalInWeights,this.totalOutWeights[f]=E.totalOutWeights,this.loops[f]=E.internalWeights,this.counts[f]=1,this.starts[f]=m,this.belongings[f]=f;for(b in _)this.neighborhood[m]=+b,this.weights[m]=_[b],d++,m++;this.offsets[f]=m;for(b in w)this.neighborhood[m]=+b,this.weights[m]=w[b],d++,m++}return this.starts[u]=d,this.E=d,this.U=0,this.level++,l},o.prototype.modularity=function(){var a,l,c,u,d,h=0,p=this.M,x=new Float64Array(this.C);for(c=0;c<this.C;c++)for(a=this.belongings[c],x[a]+=this.loops[c],u=this.starts[c],d=this.offsets[c];u<d;u++)l=this.belongings[this.neighborhood[u]],a===l&&(x[a]+=this.weights[u]);for(c=0;c<this.C;c++)h+=x[c]/p-this.totalInWeights[c]*this.totalOutWeights[c]/Math.pow(p,2)*this.resolution;return h},o.prototype.delta=function(a,l,c,u,d){var h=this.M,p=this.totalInWeights[d],x=this.totalOutWeights[d],S=this.loops[a];return l+=S,c+=S,u/h-(c*p+l*x)*this.resolution/(h*h)},o.prototype.deltaWithOwnCommunity=function(a,l,c,u,d){var h=this.M,p=this.totalInWeights[d],x=this.totalOutWeights[d],S=this.loops[a];return l+=S,c+=S,u/h-(c*(p-l)+l*(x-c))*this.resolution/(h*h)},o.prototype.collect=s.prototype.collect,o.prototype.assign=s.prototype.assign,o.prototype[n]=function(){var a={};Object.defineProperty(a,"constructor",{value:o,enumerable:!1}),a.C=this.C,a.M=this.M,a.E=this.E,a.U=this.U,a.resolution=this.resolution,a.level=this.level,a.nodes=this.nodes,a.starts=this.starts.slice(0,a.C+1);var l=["neighborhood","weights"],c=["counts","offsets","loops","belongings","totalInWeights","totalOutWeights"],u=this;return l.forEach(function(d){a[d]=u[d].slice(0,a.E)}),c.forEach(function(d){a[d]=u[d].slice(0,a.C)}),a.unused=this.unused.slice(0,this.U),this.keepDendrogram?a.dendrogram=this.dendrogram:a.mapping=this.mapping,a},xs.UndirectedLouvainIndex=s,xs.DirectedLouvainIndex=o,xs}var Vo,ou;function Xv(){if(ou)return Vo;ou=1;var i=xh(),t=vh(),e=zv(),n=Gv(),r=kv(),s=Vv().createRandomIndex,o=Wv(),a=o.UndirectedLouvainIndex,l=o.DirectedLouvainIndex,c={nodeCommunityAttribute:"community",getEdgeWeight:"weight",fastLocalMoves:!0,randomWalk:!0,resolution:1,rng:Math.random};function u(f,b,E){var g=f.get(b);typeof g>"u"&&(g=0),g+=E,f.set(b,g)}var d=1e-10;function h(f,b,E,g,y){return Math.abs(g-y)<d?f===b?!1:E>f:g>y}function p(f,b,E){var g=new a(b,{getEdgeWeight:E.getEdgeWeight,keepDendrogram:f,resolution:E.resolution}),y=s(E.rng),v=!0,w=!0,_,A,C=new n(Float64Array,g.C),D,L,H,Y,z,W,k,X,J,et,nt,ut,Z,Pt,bt,$,rt=0,ot=0,Dt=[],At,vt;for(E.fastLocalMoves&&(D=new r(g.C));v;){if(et=g.C,v=!1,w=!0,E.fastLocalMoves){for(vt=0,W=E.randomWalk?y(et):0,k=0;k<et;k++,W++)X=W%et,D.enqueue(X);for(;D.size!==0;){for(X=D.dequeue(),ot++,nt=0,C.clear(),_=g.belongings[X],L=g.starts[X],H=g.starts[X+1];L<H;L++)J=g.neighborhood[L],Y=g.weights[L],A=g.belongings[J],nt+=Y,u(C,A,Y);for(Pt=g.fastDeltaWithOwnCommunity(X,nt,C.get(_)||0,_),Z=_,z=0;z<C.size;z++)A=C.dense[z],A!==_&&(ut=C.vals[z],rt++,$=g.fastDelta(X,nt,ut,A),bt=h(Z,_,A,$,Pt),bt&&(Pt=$,Z=A));if(Pt<0){if(Z=g.isolate(X,nt),Z===_)continue}else{if(Z===_)continue;g.move(X,nt,Z)}for(v=!0,vt++,L=g.starts[X],H=g.starts[X+1];L<H;L++)J=g.neighborhood[L],A=g.belongings[J],A!==Z&&D.enqueue(J)}Dt.push(vt)}else for(At=[],Dt.push(At);w;){for(w=!1,vt=0,W=E.randomWalk?y(et):0,k=0;k<et;k++,W++){for(X=W%et,ot++,nt=0,C.clear(),_=g.belongings[X],L=g.starts[X],H=g.starts[X+1];L<H;L++)J=g.neighborhood[L],Y=g.weights[L],A=g.belongings[J],nt+=Y,u(C,A,Y);for(Pt=g.fastDeltaWithOwnCommunity(X,nt,C.get(_)||0,_),Z=_,z=0;z<C.size;z++)A=C.dense[z],A!==_&&(ut=C.vals[z],rt++,$=g.fastDelta(X,nt,ut,A),bt=h(Z,_,A,$,Pt),bt&&(Pt=$,Z=A));if(Pt<0){if(Z=g.isolate(X,nt),Z===_)continue}else{if(Z===_)continue;g.move(X,nt,Z)}w=!0,vt++}At.push(vt),v=w||v}v&&g.zoomOut()}var te={index:g,deltaComputations:rt,nodesVisited:ot,moves:Dt};return te}function x(f,b,E){var g=new l(b,{getEdgeWeight:E.getEdgeWeight,keepDendrogram:f,resolution:E.resolution}),y=s(E.rng),v=!0,w=!0,_,A,C=new n(Float64Array,g.C),D,L,H,Y,z,W,k,X,J,et,nt,ut,Z,Pt,bt,$,rt,ot,Dt,At=0,vt=0,te=[],Ft,$t;for(E.fastLocalMoves&&(D=new r(g.C));v;){if(ut=g.C,v=!1,w=!0,E.fastLocalMoves){for($t=0,X=E.randomWalk?y(ut):0,J=0;J<ut;J++,X++)et=X%ut,D.enqueue(et);for(;D.size!==0;){for(et=D.dequeue(),vt++,Z=0,Pt=0,C.clear(),_=g.belongings[et],L=g.starts[et],H=g.starts[et+1],Y=g.offsets[et];L<H;L++)z=L<Y,nt=g.neighborhood[L],W=g.weights[L],A=g.belongings[nt],z?Pt+=W:Z+=W,u(C,A,W);for(rt=g.deltaWithOwnCommunity(et,Z,Pt,C.get(_)||0,_),$=_,k=0;k<C.size;k++)A=C.dense[k],A!==_&&(bt=C.vals[k],At++,Dt=g.delta(et,Z,Pt,bt,A),ot=h($,_,A,Dt,rt),ot&&(rt=Dt,$=A));if(rt<0){if($=g.isolate(et,Z,Pt),$===_)continue}else{if($===_)continue;g.move(et,Z,Pt,$)}for(v=!0,$t++,L=g.starts[et],H=g.starts[et+1];L<H;L++)nt=g.neighborhood[L],A=g.belongings[nt],A!==$&&D.enqueue(nt)}te.push($t)}else for(Ft=[],te.push(Ft);w;){for(w=!1,$t=0,X=E.randomWalk?y(ut):0,J=0;J<ut;J++,X++){for(et=X%ut,vt++,Z=0,Pt=0,C.clear(),_=g.belongings[et],L=g.starts[et],H=g.starts[et+1],Y=g.offsets[et];L<H;L++)z=L<Y,nt=g.neighborhood[L],W=g.weights[L],A=g.belongings[nt],z?Pt+=W:Z+=W,u(C,A,W);for(rt=g.deltaWithOwnCommunity(et,Z,Pt,C.get(_)||0,_),$=_,k=0;k<C.size;k++)A=C.dense[k],A!==_&&(bt=C.vals[k],At++,Dt=g.delta(et,Z,Pt,bt,A),ot=h($,_,A,Dt,rt),ot&&(rt=Dt,$=A));if(rt<0){if($=g.isolate(et,Z,Pt),$===_)continue}else{if($===_)continue;g.move(et,Z,Pt,$)}w=!0,$t++}Ft.push($t),v=w||v}v&&g.zoomOut()}var Yt={index:g,deltaComputations:At,nodesVisited:vt,moves:te};return Yt}function S(f,b,E,g){if(!t(E))throw new Error("graphology-communities-louvain: the given graph is not a valid graphology instance.");var y=e(E);if(y==="mixed")throw new Error("graphology-communities-louvain: cannot run the algorithm on a true mixed graph.");g=i(g,c);var v=0;if(E.size===0){if(f){E.forEachNode(function(L){E.setNodeAttribute(L,g.nodeCommunityAttribute,v++)});return}var w={};return E.forEachNode(function(L){w[L]=v++}),b?{communities:w,count:E.order,deltaComputations:0,dendrogram:null,level:0,modularity:NaN,moves:null,nodesVisited:0,resolution:g.resolution}:w}var _=y==="undirected"?p:x,A=_(b,E,g),C=A.index;if(!b){if(f){C.assign(g.nodeCommunityAttribute);return}return C.collect()}var D={count:C.C,deltaComputations:A.deltaComputations,dendrogram:C.dendrogram,level:C.level,modularity:C.modularity(),moves:A.moves,nodesVisited:A.nodesVisited,resolution:g.resolution};return f?(C.assign(g.nodeCommunityAttribute),D):(D.communities=C.collect(),D)}var m=S.bind(null,!1,!1);return m.assign=S.bind(null,!0,!1),m.detailed=S.bind(null,!1,!0),m.defaults=c,Vo=m,Vo}var $v=Xv();const qv=Dx($v),Oa=180,Yv=1.12,Kv=220,Zv=Object.freeze({question:-360,concept:-120,claim:120,evidence:360});function Dr(i){let t=2166136261;for(let e=0;e<i.length;e+=1)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function Jv(i){let t=Dr(i)||1;return()=>(t=1664525*t+1013904223>>>0,t/4294967296)}function pl(i){return!!(i&&typeof i.id=="string"&&i.id)}function ml(i,t){return i<t?`${i}:${t}`:`${t}:${i}`}function Ts(i){return 120+Math.sqrt(Math.max(1,i))*42}function jv(i,t,e){const n=Dr(`${i}:longitude`)/4294967295,r=Dr(`${i}:latitude`)/4294967295,s=360+Math.sqrt(e+1)*180+Math.sqrt(t+1)*54,o=n*Math.PI*2,a=Math.acos(2*r-1);return{x:Math.sin(a)*Math.cos(o)*s,y:Math.cos(a)*s,z:Math.sin(a)*Math.sin(o)*s}}function Qv(i,t){const e=Dr(`${i}:${t}:x`)/4294967295,n=Dr(`${i}:${t}:y`)/4294967295,r=e*Math.PI*2,s=Math.acos(2*n-1);return{x:Math.sin(s)*Math.cos(r),y:Math.cos(s),z:Math.sin(s)*Math.sin(r)}}function ty(i){for(let n=0;n<16;n+=1){let r=!1;for(let s=0;s<i.length;s+=1){const o=i[s];for(let a=s+1;a<i.length;a+=1){const l=i[a];let c=l.x-o.x,u=l.y-o.y,d=l.z-o.z,h=Math.hypot(c,u,d);const p=o.radius+l.radius+Oa;if(h>=p)continue;if(h<.001){const m=Qv(o.id,l.id);c=m.x,u=m.y,d=m.z,h=1}const S=(p-h)/2/h;o.x-=c*S,o.y-=u*S,o.z-=d*S,l.x+=c*S,l.y+=u*S,l.z+=d*S,r=!0}}if(!r)break}const t=i.reduce((n,r)=>({x:n.x+r.x,y:n.y+r.y,z:n.z+r.z}),{x:0,y:0,z:0}),e=Math.max(1,i.length);i.forEach(n=>{n.x-=t.x/e,n.y-=t.y/e,n.z-=t.z/e})}function ey(i,t){const e=i.map((a,l)=>({id:a.id,radius:a.radius,...jv(a.id,l,i.length)}));if(e.length<2)return e;const n=new Map(e.map(a=>[a.id,a])),r=t.map(a=>({...a})),s=Ju(r).id(a=>a.id).distance(a=>a.source.radius+a.target.radius+Oa*1.7).strength(a=>Math.min(.18,.06+a.weight*.025));return ih(e,3).randomSource(Jv(i.map(({id:a})=>a).join("|"))).force("links",s).force("charge",rh().strength(-1150).distanceMax(5e3)).force("collision",Zu().radius(a=>a.radius+Oa).strength(1).iterations(2)).force("center",m0(0,0,0).strength(.1)).velocityDecay(.48).stop().tick(Kv),ty(e),i.map(({id:a})=>n.get(a))}function ny(i,t){const e=new dl;i.forEach(r=>e.addNode(r));const n=new Set;return t.forEach(({sourceId:r,targetId:s})=>{if(r===s)return;const o=ml(r,s);n.has(o)||(n.add(o),e.addEdge(r,s,{weight:1}))}),e}function iy(i,t){const e=t.filter(o=>i.degree(o)===0),n=qv(i,{randomWalk:!1,resolution:Yv}),r=new Map;t.forEach(o=>{if(i.degree(o)===0)return;const a=String(n[o]),l=r.get(a)||[];l.push(o),r.set(a,l)});const s=[...r.values()].map(o=>o.sort()).map(o=>({id:`cluster:${o[0]}`,nodeIds:o}));return e.length&&s.push({id:"cluster:unlinked",nodeIds:e.sort()}),s.sort((o,a)=>o.id.localeCompare(a.id))}function ry(i,t){const e=new Map;return i.forEach(({sourceId:n,targetId:r})=>{const s=t.get(n)?.id,o=t.get(r)?.id;if(!s||!o||s===o)return;const a=ml(s,o),l=e.get(a);if(l){l.weight+=1;return}e.set(a,{source:s,target:o,weight:1})}),[...e.values()]}function Ba(i,t,e){return e!==Ir.KNOWLEDGE_LAYERS?{...t.anchor}:{x:t.anchor.x,y:t.anchor.y,z:Zv[i.kind]||0}}function sy(i=[],t=[],e=Ir.CONSTELLATIONS){const n=Xi(e),r=new Map(i.filter(pl).map(({id:l,kind:c})=>[l,c||"thought"])),s=[...r.entries()].map(([l,c])=>`${l}:${c}`).sort(),o=new Set(r.keys()),a=t.filter(({sourceId:l,targetId:c})=>typeof l=="string"&&typeof c=="string"&&l!==c&&o.has(l)&&o.has(c)).map(({sourceId:l,targetId:c})=>ml(l,c)).sort();return`${n}|${s.join(",")}|${a.join(",")}`}function oy(i=[],t=[],e=Ir.CONSTELLATIONS){const n=Xi(e),r=i.filter(pl),s=[...new Set(r.map(({id:m})=>m))].sort(),o=new Set(s),a=t.filter(({sourceId:m,targetId:f})=>typeof m=="string"&&typeof f=="string"&&m!==f&&o.has(m)&&o.has(f));if(!s.length)return{clusters:[],clusterByNodeId:new Map,interClusterLinks:[],nodeLayoutById:new Map};const l=ny(s,a),c=iy(l,s).map(m=>({...m,radius:Ts(m.nodeIds.length)})),u=new Map;c.forEach(m=>{m.nodeIds.forEach(f=>u.set(f,m))});const d=ry(a,u),h=ey(c,d),p=new Map(h.map(m=>[m.id,m]));c.forEach(m=>{m.anchor=p.get(m.id)||{x:0,y:0,z:0}});const x=new Map(r.map(m=>[m.id,m])),S=new Map(s.map(m=>{const f=u.get(m),b=x.get(m);return[m,{clusterId:f.id,clusterAnchor:Ba(b,f,n)}]}));return{clusters:c,clusterByNodeId:u,interClusterLinks:d,nodeLayoutById:S}}function ay(i,{node:t,anchorNodeId:e,mode:n=Ir.CONSTELLATIONS}={}){const r=i?.clusterByNodeId?.get(e),s=i?.nodeLayoutById?.get(e);if(!r||!s||!pl(t))return null;const o=Xi(n);if(r.id==="cluster:unlinked"){const h=r.nodeIds.filter(E=>E!==e),p=[e,t.id].sort(),x={...r,id:`cluster:${p[0]}`,nodeIds:p,radius:Ts(p.length),anchor:{...r.anchor}},S=h.length?{...r,nodeIds:h,radius:Ts(h.length)}:null,m=i.clusters.filter(E=>E.id!==r.id).concat(S?[S,x]:[x]).sort((E,g)=>E.id.localeCompare(g.id)),f=new Map(i.clusterByNodeId);h.forEach(E=>f.set(E,S)),p.forEach(E=>f.set(E,x));const b=new Map(i.nodeLayoutById);return b.set(e,{...s,clusterId:x.id}),b.set(t.id,{clusterId:x.id,clusterAnchor:Ba(t,x,o)}),{...i,clusters:m,clusterByNodeId:f,nodeLayoutById:b}}const a=[...new Set([...r.nodeIds,t.id])].sort(),l={...r,nodeIds:a,radius:Ts(a.length)},c=i.clusters.map(h=>h.id===l.id?l:h),u=new Map(i.clusterByNodeId);a.forEach(h=>u.set(h,l));const d=new Map(i.nodeLayoutById);return d.set(t.id,{clusterId:l.id,clusterAnchor:Ba(t,l,o)}),{...i,clusters:c,clusterByNodeId:u,nodeLayoutById:d}}const Re=Object.freeze({RECONCILE:"reconcile",INSERT_LINKED_NODE:"insert-linked-node",REBUILD:"rebuild"});function Mh(i){return i?.kind===Re.INSERT_LINKED_NODE&&typeof i.nodeId=="string"&&typeof i.anchorId=="string"&&i.nodeId&&i.anchorId&&i.nodeId!==i.anchorId?{kind:i.kind,nodeId:i.nodeId,anchorId:i.anchorId}:i?.kind===Re.REBUILD?{kind:Re.REBUILD}:{kind:Re.RECONCILE}}const au=Object.freeze({tight:72,normal:118,loose:190}),ly=460,Ho=Object.freeze({x:72,y:-36,z:48}),cy=.22,uy=.9;function vr(i){return!!(i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z))}function lu(i){let t=2166136261;for(let e=0;e<i.length;e+=1)t^=i.charCodeAt(e),t=Math.imul(t,16777619);return t>>>0}function hy(i,t=0){const e=lu(`${i}:x`)/4294967295,n=lu(`${i}:y`)/4294967295,r=42+Math.sqrt(t+1)*18,s=e*Math.PI*2,o=Math.acos(2*n-1);return{x:Math.sin(o)*Math.cos(s)*r,y:Math.cos(o)*r,z:Math.sin(o)*Math.sin(s)*r}}function dy({onTick:i=()=>{},onStable:t=()=>{}}={}){let e=[],n=[],r=null,s=null,o=null;const a=new Set;let l=!1;const c=Ju([]).id(v=>v.id).distance(v=>v.internal?au[v.spacing]||au.normal:ly).strength(v=>v.internal?.56:.1),u=ih([],3).force("links",c).force("charge",rh().strength(-58).distanceMax(620)).force("collision",Zu().radius(v=>v.radius+8).strength(.86)).force("cluster-x",Rx(v=>v.clusterAnchor.x).strength(.026)).force("cluster-y",Cx(v=>v.clusterAnchor.y).strength(.026)).force("cluster-z",Px(v=>v.clusterAnchor.z).strength(.026)).alphaDecay(.035).velocityDecay(.42).on("tick",()=>i(e,n)).on("end",()=>{const v=h();t(e,{transition:v})});function d(){a.forEach(v=>{const w=e.find(_=>_.id===v);!w||w.pinned||(w.fx=null,w.fy=null,w.fz=null,w.vx=0,w.vy=0,w.vz=0)}),a.clear()}function h(){const v=o;return d(),o=null,v}function p(v={},w={}){if(l)return;h();const _=new Map(e.map(Z=>[Z.id,Z])),A=Array.isArray(v.nodes)?v.nodes:[],C=Array.isArray(v.links)?v.links:[],D=new Set(A.map(Z=>Z.id)),L=Xi(v.layoutMode),H=Mh(w.transition),Y=A.find(Z=>Z.id===H.nodeId),z=_.get(H.anchorId),W=[..._.keys()].every(Z=>D.has(Z)),k=C.some(({sourceId:Z,targetId:Pt})=>Z===H.anchorId&&Pt===H.nodeId||Pt===H.anchorId&&Z===H.nodeId);o=H.kind===Re.INSERT_LINKED_NODE&&Y&&z&&!_.has(Y.id)&&A.length===_.size+1&&W&&k?H:{kind:H.kind===Re.REBUILD?Re.REBUILD:Re.RECONCILE};const J=sy(A,C,L);if(o.kind===Re.INSERT_LINKED_NODE&&r){const Z=ay(r,{node:Y,anchorNodeId:o.anchorId,mode:L});Z?(r=Z,s=J):o={kind:Re.RECONCILE}}(o.kind===Re.REBUILD||J!==s)&&(r=oy(A,C,L),s=J),e=A.map((Z,Pt)=>{const bt=_.get(Z.id),$=r.nodeLayoutById.get(Z.id),rt=vr(Z.pinnedPosition)?Z.pinnedPosition:null,ot=o.kind===Re.INSERT_LINKED_NODE&&Z.id===o.nodeId&&z?{x:z.x+Ho.x,y:z.y+Ho.y,z:z.z+Ho.z}:null,Dt=o.kind===Re.INSERT_LINKED_NODE&&vr(bt)?bt:null,At=rt||ot||Dt||(vr(Z)?Z:null)||(vr(bt)?bt:null)||hy(Z.id,Pt),vt=rt?.pinned===!0;return{...Z,clusterId:$?.clusterId||"cluster:unlinked",clusterAnchor:$?.clusterAnchor||{x:0,y:0,z:0},x:At.x,y:At.y,z:At.z,vx:Number.isFinite(bt?.vx)?bt.vx:0,vy:Number.isFinite(bt?.vy)?bt.vy:0,vz:Number.isFinite(bt?.vz)?bt.vz:0,pinned:vt,fx:vt?At.x:null,fy:vt?At.y:null,fz:vt?At.z:null}}),o.kind===Re.INSERT_LINKED_NODE&&e.forEach(Z=>{Z.id===o.nodeId||Z.pinned||!_.has(Z.id)||(Z.fx=Z.x,Z.fy=Z.y,Z.fz=Z.z,a.add(Z.id))});const et=new Set(e.map(Z=>Z.id)),nt=new Map(e.map(Z=>[Z.id,Z]));if(n=C.filter(Z=>et.has(Z.sourceId)&&et.has(Z.targetId)&&Z.sourceId!==Z.targetId).map(Z=>({...Z,internal:nt.get(Z.sourceId).clusterId===nt.get(Z.targetId).clusterId,source:Z.sourceId,target:Z.targetId})),u.nodes(e),c.links(n),!e.length){u.stop(),i(e,n);const Z=h();t(e,{transition:Z});return}const ut=o.kind===Re.INSERT_LINKED_NODE?cy:uy;u.alpha(ut).alphaTarget(0).restart()}function x(v){return e.find(w=>w.id===v)||null}function S(v){const w=x(v);return!w||l?null:(w.fx=w.x,w.fy=w.y,w.fz=w.z,u.alphaTarget(.16).restart(),w)}function m(v,w){const _=x(v);return!_||!vr(w)?null:(_.fx=w.x,_.fy=w.y,_.fz=w.z,_.x=w.x,_.y=w.y,_.z=w.z,i(e,n),_)}function f(v,{pinned:w}={}){const _=x(v);return!_||l?null:(_.pinned=w??_.pinned,_.pinned?(_.fx=_.x,_.fy=_.y,_.fz=_.z):(_.fx=null,_.fy=null,_.fz=null),u.alphaTarget(0).alpha(.24).restart(),_)}function b(v,w){const _=x(v);return!_||l?null:(_.pinned=!!w,_.pinned?(_.fx=_.x,_.fy=_.y,_.fz=_.z):(_.fx=null,_.fy=null,_.fz=null),u.alpha(.28).restart(),_)}function E(v=.32){!l&&e.length&&u.alpha(v).restart()}function g(){u.stop(),h()}function y(){l=!0,u.stop(),h(),u.on("tick",null).on("end",null),e=[],n=[]}return{beginDrag:S,dispose:y,dragNode:m,endDrag:f,getLinks:()=>n,getNode:x,getNodes:()=>e,reheat:E,setGraph:p,setPinned:b,stop:g}}const br=1e4,Sh=60,fy=8e3,py=8,my=5,gy=280,_y=.05,xy=1.15,vy=90,yy=1600,My=7361989,Sy=2394864,Ey=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]),cu=Object.freeze({concept:2394864,claim:7361989,question:10512906,evidence:3569754}),uu=Object.freeze({concept:"#248af0",claim:"#7055c5",question:"#a06a0a",evidence:"#36785a"});function Lr(i){return!!(i&&Number.isFinite(i.x)&&Number.isFinite(i.y)&&Number.isFinite(i.z))}function Eh(i){try{return JSON.parse(localStorage.getItem(i))}catch{return null}}function by(i){const t=Eh(i);return!Lr(t?.position)||!Lr(t?.target)?null:t}function hu(i){const t=Eh(i);return t?.version!==1||typeof t.positions!="object"?{}:Object.fromEntries(Object.entries(t.positions).filter(([,e])=>Lr(e)).slice(0,br))}function wy(i){return Array.from({length:Sh},()=>{const t=document.createElement("span");return t.className="spatial-label",t.hidden=!0,i.append(t),t})}function vs(i,t){return typeof i=="object"&&i?i.id:t}function Ty({container:i,theme:t="light",storageKey:e,layoutStorageKey:n,layoutMode:r=Ir.CONSTELLATIONS,onThoughtSelect:s=()=>{},onConnectionTargetToggle:o=()=>{},onThoughtActivate:a=()=>{},onThoughtMove:l=()=>{},onError:c=()=>{}}){const u=new Ud,d=new nn(48,1,1,1e4),h=new t0({alpha:!0,antialias:!0,powerPreference:"high-performance"});h.outputColorSpace=Ze,h.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),h.domElement.className="spatial-canvas",h.domElement.setAttribute("aria-hidden","true");const p=document.createElement("div");p.className="spatial-label-layer";const x=wy(p);i.prepend(h.domElement,p);const S=new n0(d,h.domElement);S.enableDamping=!0,S.dampingFactor=.075,S.minDistance=90,S.maxDistance=5e3,S.screenSpacePanning=!0;const m=by(e);m?(d.position.set(m.position.x,m.position.y,m.position.z),S.target.set(m.target.x,m.target.y,m.target.z)):(d.position.set(0,160,720),S.target.set(0,0,0)),S.update();const f=new tl(1,2),b=new Ns({color:16777215}),E=new Jl(f,b,br);E.instanceMatrix.setUsage(Cl),E.frustumCulled=!1,E.count=0,u.add(E);const g=new Ns({colorWrite:!1,depthWrite:!1,transparent:!0,opacity:0}),y=new Jl(f,g,br);y.instanceMatrix.setUsage(Cl),y.frustumCulled=!1,y.count=0,u.add(y);const v=new Je,w=new Da({color:t==="dark"?11183293:9277866,transparent:!0,opacity:t==="dark"?.5:.42}),_=new nc(v,w);_.frustumCulled=!1,u.add(_);const A=new Je,C=new Da({color:t==="dark"?10323183:7361989,transparent:!0,opacity:.9}),D=new nc(A,C);D.frustumCulled=!1,u.add(D);const L=new nf,H=new Gt,Y=new fe,z=new O,W=new O(1,1,1),k=new Gn,X=new Qt,J=new Qt(t==="dark"?1512735:14605290),et=new Qt(16777215),nt=new fe,ut=new ja,Z=new O,Pt=new Dn,bt=new O,$=new O,rt=new O,ot=new O,Dt=new O,At=new O;let vt=[],te=[],Ft=new Map,$t=[],Yt=new Map,Ot=null,ne=null,le=new Set,Ht=null,ie=!1,re=null,Wt=null,U=null,_e=null,Kt=null,P=!1,M=Xi(r),G=hu(`${n}${M}`),V=!m,K=!1,lt=!0,ht=!0;const q=new Set;function Q(){try{localStorage.setItem(e,JSON.stringify({position:{x:d.position.x,y:d.position.y,z:d.position.z},target:{x:S.target.x,y:S.target.y,z:S.target.z}}))}catch{}}function gt(R=vt){G=Object.fromEntries(R.slice(0,br).map(I=>[I.id,{x:Math.round(I.x*100)/100,y:Math.round(I.y*100)/100,z:Math.round(I.z*100)/100}]));try{localStorage.setItem(`${n}${M}`,JSON.stringify({version:1,positions:G}))}catch{}}function Rt(){le=new Set,Ot&&te.forEach(R=>{const I=vs(R.source,R.sourceId),N=vs(R.target,R.targetId);I===Ot&&le.add(N),N===Ot&&le.add(I)})}function ct(){!ie||re!==null||(re=requestAnimationFrame(je))}function _t(R){t=R==="dark"?"dark":"light";const I=t==="dark";J.set(I?1512735:14605290),w.color.set(I?11183293:9277866),w.opacity=I?.5:.42,C.color.set(I?10323183:7361989),w.needsUpdate=!0,C.needsUpdate=!0,lt=!0,ht=!0,ct()}function Nt(){if(_e?.kind!==Re.INSERT_LINKED_NODE)return;const R=Ft.get(_e.anchorId);if(!R)return;const I=new O(R.x,R.y,R.z),N=I.clone().sub(_e.previousPosition);N.lengthSq()>1e-6&&(d.position.add(N),S.target.add(N)),_e.previousPosition.copy(I)}const Tt=dy({onTick(R,I){vt=R,te=I,Ft=new Map(vt.map(N=>[N.id,N])),Nt(),Rt(),lt=!0,ht=!0,ct()},onStable(R,{transition:I}={}){if(gt(R),(V||K)&&R.length&&(V=!1,K=!1,vi()),_e){const N=I?.nodeId===_e.nodeId;_e=null,N&&Q()}ct()}});function kt(R){const I=h.domElement.getBoundingClientRect();H.x=(R.clientX-I.left)/Math.max(1,I.width)*2-1,H.y=-((R.clientY-I.top)/Math.max(1,I.height))*2+1,d.updateMatrixWorld(),L.setFromCamera(H,d)}function F(R){kt(R);const[I]=L.intersectObject(y);return I?.instanceId===void 0?null:$t[I.instanceId]||null}function pt(){lt&&(vt.forEach(R=>{const I=Yt.get(R.id);if(I===void 0)return;const N=R.id===Ot,B=R.id===ne,st=R.id===Ht?.sourceId,j=Ht?.targetIds.has(R.id)===!0,at=!!(Ht&&!st&&!j),yt=!!(Ot&&!N&&!le.has(R.id)),mt=at||!Ht&&yt,It=st?1.38:j?1.23:N?1.34:B?1.17:mt?.76:1,Ut=Math.max(5,R.radius||7);z.set(R.x,R.y,R.z),W.setScalar(Ut*It),Y.compose(z,k,W),E.setMatrixAt(I,Y),W.setScalar(Ut*It+py),Y.compose(z,k,W),y.setMatrixAt(I,Y),X.setHex(st?My:j?Sy:cu[R.kind]||cu.concept),mt?X.lerp(J,.68):N?X.lerp(et,.2):B&&X.lerp(et,.1),E.setColorAt(I,X)}),E.instanceMatrix.needsUpdate=!0,y.instanceMatrix.needsUpdate=!0,y.computeBoundingSphere(),E.instanceColor&&(E.instanceColor.needsUpdate=!0),lt=!1)}function tt(){if(!ht)return;const R=[],I=[];if(te.slice(0,fy).forEach(N=>{const B=typeof N.source=="object"?N.source:Ft.get(N.sourceId),st=typeof N.target=="object"?N.target:Ft.get(N.targetId);if(!B||!st)return;const j=B.id===Ht?.sourceId,at=Ht?.targetIds.has(st.id)===!0;if(j&&!at)return;(!!(j&&at)||!!(Ot&&(B.id===Ot||st.id===Ot))?I:R).push(B.x,B.y,B.z,st.x,st.y,st.z)}),Ht){const N=Ft.get(Ht.sourceId),B=new Set(te.filter(st=>vs(st.source,st.sourceId)===Ht.sourceId).map(st=>vs(st.target,st.targetId)));N&&Ht.targetIds.forEach(st=>{if(B.has(st))return;const j=Ft.get(st);j&&I.push(N.x,N.y,N.z,j.x,j.y,j.z)})}v.setAttribute("position",new Fe(R,3)),A.setAttribute("position",new Fe(I,3)),w.opacity=Ot||Ht?.1:.42,ht=!1}function xt(){nt.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse),ut.setFromProjectionMatrix(nt);const R=Math.max(1,i.clientWidth),I=Math.max(1,i.clientHeight),N=vt.filter(j=>(z.set(j.x,j.y,j.z),ut.containsPoint(z))).sort((j,at)=>{const yt=Ut=>Ut.id===Ht?.sourceId?0:Ht?.targetIds.has(Ut.id)?1:Ut.id===Ot?0:le.has(Ut.id)?2:Ut.id===ne?3:4,mt=yt(j)-yt(at);if(mt)return mt;const It=(at.connectionCount||0)-(j.connectionCount||0);return It||d.position.distanceToSquared(j)-d.position.distanceToSquared(at)}).filter(j=>Ht||!Ot||j.id===Ot||le.has(j.id)||j.id===ne).map(j=>{Z.set(j.x,j.y,j.z).project(d);const at=d.position.distanceTo(j),yt=ci.clamp(760/Math.max(520,at),.72,1);return{node:j,x:(Z.x*.5+.5)*R,y:(-Z.y*.5+.5)*I,labelScale:yt}}),B=[],st=[];N.some(j=>{if(st.length>=Sh)return!0;const{node:at,x:yt,y:mt,labelScale:It}=j,Ut=ci.clamp(at.text.length*6.4,42,220)*It,ft={left:yt-Ut/2-7,right:yt+Ut/2+7,top:mt-34*It,bottom:mt-8*It},Zt=B.some(ce=>!(ft.right<ce.left||ft.left>ce.right||ft.bottom<ce.top||ft.top>ce.bottom)),xe=at.id===Ht?.sourceId||Ht?.targetIds.has(at.id)||at.id===Ot||at.id===ne;return(!Zt||xe)&&(st.push(j),B.push(ft)),!1}),x.forEach((j,at)=>{const yt=st[at];if(!yt){j.hidden=!0;return}const{node:mt,x:It,y:Ut,labelScale:ft}=yt;j.hidden=!1,j.textContent=mt.text,j.dataset.thoughtId=mt.id,j.classList.toggle("is-selected",mt.id===Ot),j.classList.toggle("is-neighbour",le.has(mt.id)),j.classList.toggle("is-connection-source",mt.id===Ht?.sourceId),j.classList.toggle("is-connection-target",Ht?.targetIds.has(mt.id)===!0),j.style.setProperty("--spatial-kind-color",uu[mt.kind]||uu.concept),j.style.transform=`translate(-50%, calc(-100% - 12px)) translate3d(${It}px, ${Ut}px, 0) scale(${ft})`})}function St(R){if(!U)return!1;const I=Math.min(1,(R-U.startedAt)/U.duration),N=1-(1-I)**3;return d.position.lerpVectors(U.fromPosition,U.toPosition,N),S.target.lerpVectors(U.fromTarget,U.toTarget,N),I<1?!0:(U=null,S.enabled=ie&&!Wt,S.update(),Q(),!1)}function it({persist:R=!0}={}){const I=R&&P;q.clear(),Kt=null,P=!1,I&&Q()}function Lt(){const R=Number(q.has("KeyD")||q.has("ArrowRight"))-Number(q.has("KeyA")||q.has("ArrowLeft")),I=Number(q.has("KeyW")||q.has("ArrowUp"))-Number(q.has("KeyS")||q.has("ArrowDown"));return{horizontal:R,vertical:I}}function Ct(R){if(!ie||Wt||U||!q.size)return Kt=R,!1;const I=Kt??R;Kt=R;const N=Math.min(_y,Math.max(0,(R-I)/1e3));if(!N)return!0;const{horizontal:B,vertical:st}=Lt();if(!B&&!st||(d.getWorldDirection(rt).normalize(),ot.copy(rt).cross(d.up).normalize(),Dt.copy(ot).cross(rt).normalize(),At.copy(ot).multiplyScalar(B).addScaledVector(Dt,st),At.lengthSq()<1e-4))return!1;At.normalize();const j=ci.clamp(d.position.distanceTo(S.target)*xy,vy,yy);return At.multiplyScalar(j*N),d.position.add(At),S.target.add(At),P=!0,!0}function ge(){i.focus({preventScroll:!0})}function se(R){!ie||Wt||Ht||R.target!==i||!Ey.has(R.code)||(R.preventDefault(),R.stopPropagation(),U&&(U=null,S.enabled=ie&&!Wt),q.add(R.code),Kt=null,ct())}function $e(R){q.delete(R.code)&&!q.size&&P&&(P=!1,Q())}function je(R){if(re=null,!ie||document.hidden)return;const I=St(R),N=Ct(R),B=S.update();d.updateMatrixWorld(),pt(),tt(),xt(),h.render(u,d),(I||N||B)&&ct()}function qs({nodes:R=[],links:I=[],layoutMode:N=M,fitAfterLayout:B=!1},{transition:st=null}={}){const j=Mh(st),at=j.kind===Re.INSERT_LINKED_NODE?Ft.get(j.anchorId):null;_e=at?{...j,previousPosition:new O(at.x,at.y,at.z)}:null;const yt=Xi(N);yt!==M&&(M=yt,G=hu(`${n}${M}`)),K||=B;const mt=R.slice(0,br).map(ft=>{const Zt=G[ft.id];return{...ft,...!Lr(ft.pinnedPosition)&&Lr(Zt)?Zt:{},radius:Math.max(5,Number.isFinite(ft.radius)?ft.radius:7)}}),It=new Set(mt.map(ft=>ft.id)),Ut=I.filter(ft=>It.has(ft.sourceId)&&It.has(ft.targetId));$t=mt.map(ft=>ft.id),Yt=new Map($t.map((ft,Zt)=>[ft,Zt])),E.count=mt.length,y.count=mt.length,Tt.setGraph({nodes:mt,links:Ut,layoutMode:M},{transition:j}),vt=Tt.getNodes(),te=Tt.getLinks(),Ft=new Map(vt.map(ft=>[ft.id,ft])),Ft.has(Ot)||(Ot=null),Rt(),lt=!0,ht=!0,V&&vt.length&&vi(),ct()}function Ys(R){Ot=Ft.has(R)?R:null,Rt(),lt=!0,ht=!0,ct()}function Fr(R){Ht=R&&typeof R.sourceId=="string"?{sourceId:R.sourceId,targetIds:new Set(R.targetIds||[])}:null,h.domElement.classList.toggle("is-connection-selecting",!!Ht),lt=!0,ht=!0,ct()}function ni(R,I,N=gy){U={fromPosition:d.position.clone(),fromTarget:S.target.clone(),toPosition:R.clone(),toTarget:I.clone(),duration:N,startedAt:performance.now()},S.enabled=!1,ct()}function Ks(R){const I=Ft.get(R);if(!I)return!1;Ot=R,Rt(),lt=!0,ht=!0,s(R),rt.copy(d.position).sub(S.target),rt.lengthSq()<.001&&rt.set(0,0,1),rt.normalize();const N=new O(I.x,I.y,I.z),B=ci.clamp(d.position.distanceTo(S.target),240,520),st=N.clone().addScaledVector(rt,B);return ni(st,N),!0}function vi(){if(!vt.length)return!1;const R=new ei;vt.forEach(j=>{const at=Math.max(5,j.radius||7);R.expandByPoint(new O(j.x-at,j.y-at,j.z-at)),R.expandByPoint(new O(j.x+at,j.y+at,j.z+at))});const I=R.getBoundingSphere(new xi);rt.copy(d.position).sub(S.target),rt.lengthSq()<.001&&rt.set(0,0,1),rt.normalize();const N=ci.degToRad(d.fov*.5),B=ci.clamp(I.radius/Math.max(.2,Math.sin(N))*1.18,220,4200),st=I.center.clone().addScaledVector(rt,B);return ni(st,I.center),!0}function Or(){ni(new O(0,160,720),new O(0,0,0))}function wn(R){const I=Ft.get(R);return I?{x:I.x,y:I.y,z:I.z}:null}function nr(R,I){const N=Tt.setPinned(R,I);return N?(ct(),{x:N.x,y:N.y,z:N.z,pinned:N.pinned}):null}function ir(){const R=Math.max(1,i.clientWidth),I=Math.max(1,i.clientHeight);h.setSize(R,I,!1),d.aspect=R/I,d.updateProjectionMatrix(),ct()}function Br(){ie=!0,S.enabled=!Wt&&!U,ir(),Tt.reheat(.22)}function ii(){it(),ie=!1,S.enabled=!1,Tt.stop(),Wt=null,h.domElement.classList.remove("is-node-dragging"),re!==null&&cancelAnimationFrame(re),re=null}function yi(R,{cancelled:I=!1}={}){if(!Wt||R.pointerId!==Wt.pointerId)return;R.preventDefault(),R.stopImmediatePropagation();const N=Wt;Wt=null,h.domElement.classList.remove("is-node-dragging"),h.domElement.hasPointerCapture(R.pointerId)&&h.domElement.releasePointerCapture(R.pointerId);let B=Tt.getNode(N.thoughtId);N.started&&(I&&Tt.dragNode(N.thoughtId,N.origin),B=Tt.endDrag(N.thoughtId,{pinned:I?N.wasPinned:void 0})),S.enabled=ie&&!U,!I&&N.moved&&B?.pinned&&l(B.id,{x:B.x,y:B.y,z:B.z,pinned:!0}),ct()}function ri(R){if(!ie||R.button!==0)return;const I=F(R);if(!I)return;if(Ht){R.preventDefault(),R.stopImmediatePropagation(),I!==Ht.sourceId&&o(I);return}const N=Tt.getNode(I);N&&(R.preventDefault(),R.stopImmediatePropagation(),Ot=I,Rt(),lt=!0,ht=!0,s(I),S.enabled=!1,h.domElement.setPointerCapture(R.pointerId),h.domElement.classList.add("is-node-dragging"),z.set(N.x,N.y,N.z),d.getWorldDirection(rt).normalize(),Pt.setFromNormalAndCoplanarPoint(rt,z),L.ray.intersectPlane(Pt,bt)?$.copy(bt).sub(z):$.set(0,0,0),Wt={pointerId:R.pointerId,thoughtId:I,startX:R.clientX,startY:R.clientY,moved:!1,started:!1,wasPinned:N.pinned,origin:{x:N.x,y:N.y,z:N.z}},ct())}function rr(R){if(!Wt){const B=ie?F(R):null;B!==ne&&(ne=B,lt=!0,h.domElement.classList.toggle("is-node-hovered",!!ne),ct());return}if(R.pointerId!==Wt.pointerId||(R.preventDefault(),R.stopImmediatePropagation(),kt(R),!L.ray.intersectPlane(Pt,bt)))return;const I=Math.hypot(R.clientX-Wt.startX,R.clientY-Wt.startY);if(!Wt.started&&I<my)return;Wt.started||(Tt.beginDrag(Wt.thoughtId),Wt.started=!0);const N=bt.sub($);Tt.dragNode(Wt.thoughtId,{x:N.x,y:N.y,z:N.z}),Wt.moved=!0}function sr(R){if(Ht)return;const I=F(R);I&&(R.preventDefault(),R.stopImmediatePropagation(),a(I))}function zr(){Wt||!ne||(ne=null,lt=!0,h.domElement.classList.remove("is-node-hovered"),ct())}function Gr(R){yi(R,{cancelled:!0})}function kr(){if(document.hidden){it();return}ct()}function Vr(R){R.preventDefault(),c("3D rendering is unavailable. Reload the page to try again.")}function T(){ii(),it({persist:!1}),Tt.dispose(),S.dispose(),f.dispose(),b.dispose(),g.dispose(),v.dispose(),w.dispose(),A.dispose(),C.dispose(),h.dispose(),h.domElement.removeEventListener("pointerdown",ge,!0),h.domElement.removeEventListener("pointerdown",ri,!0),h.domElement.removeEventListener("pointermove",rr,!0),h.domElement.removeEventListener("pointerup",yi,!0),h.domElement.removeEventListener("pointercancel",Gr,!0),h.domElement.removeEventListener("pointerleave",zr),h.domElement.removeEventListener("dblclick",sr,!0),h.domElement.removeEventListener("webglcontextlost",Vr),document.removeEventListener("visibilitychange",kr),i.removeEventListener("keydown",se),window.removeEventListener("keyup",$e),window.removeEventListener("blur",it),h.domElement.remove(),p.remove()}return S.addEventListener("change",ct),S.addEventListener("end",Q),h.domElement.addEventListener("pointerdown",ge,!0),h.domElement.addEventListener("pointerdown",ri,!0),h.domElement.addEventListener("pointermove",rr,!0),h.domElement.addEventListener("pointerup",yi,!0),h.domElement.addEventListener("pointercancel",Gr,!0),h.domElement.addEventListener("pointerleave",zr),h.domElement.addEventListener("dblclick",sr,!0),h.domElement.addEventListener("webglcontextlost",Vr),document.addEventListener("visibilitychange",kr),i.addEventListener("keydown",se),window.addEventListener("keyup",$e),window.addEventListener("blur",it),{activate:Br,deactivate:ii,dispose:T,fitAll:vi,focusThought:Ks,getThoughtPosition:wn,resetView:Or,resize:ir,setGraph:qs,setConnectionSelection:Fr,setSelectedThought:Ys,setTheme:_t,setThoughtPinned:nr}}export{Ty as createSpatialView};
