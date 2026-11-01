var Ip=0,nu=1,Lp=2;var iu=1,dc=2,Mi=3,aa=0,Tn=1,St=2,Zi=0,Eo=1,So=2,ru=3,su=4,Dp=5,oa=100,Up=101,Np=102,kp=103,Bp=104,Fp=200,Op=201,Hp=202,Gp=203,zp=204,Vp=205,Wp=206,Xp=207,jp=208,qp=209,$p=210,Yp=211,Zp=212,Jp=213,Kp=214,pc=0,fc=1,mc=2,To=3,gc=4,vc=5,yc=6,_c=7,Qp=0,ef=1,tf=2,Ji=0,nf=1,rf=2,sf=3,af=4,of=5,lf=6,la=7;var au=300,ca=301,Yr=302,xc=303,Mc=304,wo=306,zr=1e3,_r=1001,Rl=1002,gi=1003,cf=1004;var Ao=1005;var Yn=1006,bc=1007;var Zr=1008;var bi=1009,ou=1010,lu=1011,ha=1012,Ec=1013,Jr=1014,si=1015,Kr=1016,Sc=1017,Tc=1018,ua=1020,cu=35902,hu=35899,hf=1021,uf=1022,ai=1023,Ro=1026,Co=1027,wc=1028,Ac=1029,uu=1030,du=1031;var pu=1033,Rc=33776,Cc=33777,Pc=33778,Ic=33779,fu=35840,mu=35841,gu=35842,vu=35843,yu=36196,_u=37492,xu=37496,Mu=37808,bu=37809,Eu=37810,Su=37811,Tu=37812,wu=37813,Au=37814,Ru=37815,Cu=37816,Pu=37817,Iu=37818,Lu=37819,Du=37820,Uu=37821,Nu=36492,ku=36494,Bu=36495,Fu=36283,Ou=36284,Hu=36285,Gu=36286;var $a=2300,Cl=2301,wl=2302,Wh=2400,Xh=2401,jh=2402;var df=3201;var pf=0,ff=1,Qr="",Rt="srgb",Vr="srgb-linear",Ya="linear",Ct="srgb";var Gr=7680;var mf=512,gf=513,vf=514,zu=515,yf=516,_f=517,xf=518,Mf=519,Pl=35044;var Vu="300 es",Xi=2e3,Za=2001;function Wu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bf(){let i=js("canvas");return i.style.display="block",i}var Zd={},qs=null;function Ja(...i){let e="THREE."+i.shift();qs?qs("log",e,...i):console.log(e,...i)}function Je(...i){let e="THREE."+i.shift();qs?qs("warn",e,...i):console.warn(e,...i)}function ht(...i){let e="THREE."+i.shift();qs?qs("error",e,...i):console.error(e,...i)}function $s(...i){let e=i.join(" ");e in Zd||(Zd[e]=!0,Je(...i))}function Ef(i,e,t){return new Promise(function(n,r){setTimeout(function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var ji=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jd=1234567,Ws=Math.PI/180,Ys=180/Math.PI;function mi(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(mn[255&i]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[255&e]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[63&t|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[255&n]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function qh(i,e){return(i%e+e)%e}function Xa(i,e,t){return(1-t)*i+t*e}function ii(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var es={DEG2RAD:Ws,RAD2DEG:Ys,generateUUID:mi,clamp:pt,euclideanModulo:qh,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Xa,damp:function(i,e,t,n){return Xa(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(qh(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(Jd=i);let e=Jd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Ws},radToDeg:function(i){return i*Ys},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*f,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*f,o*l);break;case"ZYZ":i.set(c*f,c*p,o*h,o*l);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:At,denormalize:ii},pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Pn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o<=0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o>=1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||c!==d||l!==p||h!==f){let m=c*d+l*p+h*f+u*v;m<0&&(d=-d,p=-p,f=-f,v=-v,m=-m);let _=1-o;if(m<.9995){let g=Math.acos(m),y=Math.sin(g);_=Math.sin(_*g)/y,c=c*_+d*(o=Math.sin(o*g)/y),l=l*_+p*o,h=h*_+f*o,u=u*_+v*o}else{c=c*_+d*o,l=l*_+p*o,h=h*_+f*o,u=u*_+v*o;let g=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=g,l*=g,h*=g,u*=g}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),d=c(n/2),p=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},T=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return mh.copy(this).projectOnVector(e),this.sub(mh)}reflect(e){return this.sub(mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mh=new T,Kd=new Pn,lt=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=r[0],m=r[3],_=r[6],g=r[1],y=r[4],E=r[7],S=r[2],b=r[5],U=r[8];return s[0]=a*v+o*g+c*S,s[3]=a*m+o*y+c*b,s[6]=a*_+o*E+c*U,s[1]=l*v+h*g+u*S,s[4]=l*m+h*y+u*b,s[7]=l*_+h*E+u*U,s[2]=d*v+p*g+f*S,s[5]=d*m+p*y+f*b,s[8]=d*_+p*E+f*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(r*l-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gh.makeScale(e,t)),this}rotate(e){return this.premultiply(gh.makeRotation(-e)),this}translate(e,t){return this.premultiply(gh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},gh=new lt,Qd=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ep=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function X0(){let i={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ct&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=Xs(r.r),r.g=Xs(r.g),r.b=Xs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Ya:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vr]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:Qd,fromXYZ:ep,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:Qd,fromXYZ:ep,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var xt=X0();function Wi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Xs(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var As,Il=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{As===void 0&&(As=js("canvas")),As.width=e.width,As.height=e.height;let r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=As}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=js("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*Wi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Wi(t[n]/255)):t[n]=Wi(t[n]);return{data:t,width:e.width,height:e.height}}return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},j0=0,Zs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j0++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(vh(r[a].image)):s.push(vh(r[a]))}else s=vh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function vh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Il.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var q0=0,yh=new T,vn=class i extends ji{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:q0++}),this.uuid=mi(),this.name="",this.source=new Zs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(yh).x}get height(){return this.source.getSize(yh).y}get depth(){return this.source.getSize(yh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n:Je(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==au)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zr:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Rl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case zr:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Rl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null,vn.DEFAULT_MAPPING=au,vn.DEFAULT_ANISOTROPY=1;var Et=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],v=c[2],m=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,E=(p+1)/2,S=(_+1)/2,b=(h+d)/4,U=(u+v)/4,z=(f+m)/4;return y>E&&y>S?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=U/n):E>S?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=b/r,s=z/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=U/s,r=z/s),this.set(n,r,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ll=class extends ji{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new vn(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Zs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends Ll{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dl=class extends vn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zn=class{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Zo.copy(n.boundingBox)),Zo.applyMatrix4(e.matrixWorld),this.union(Zo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),Jo.subVectors(this.max,Ua),Rs.subVectors(e.a,Ua),Cs.subVectors(e.b,Ua),Ps.subVectors(e.c,Ua),ur.subVectors(Cs,Rs),dr.subVectors(Ps,Cs),Br.subVectors(Rs,Ps);let t=[0,-ur.z,ur.y,0,-dr.z,dr.y,0,-Br.z,Br.y,ur.z,0,-ur.x,dr.z,0,-dr.x,Br.z,0,-Br.x,-ur.y,ur.x,0,-dr.y,dr.x,0,-Br.y,Br.x,0];return!!_h(t,Rs,Cs,Ps,Jo)&&(t=[1,0,0,0,1,0,0,0,1],!!_h(t,Rs,Cs,Ps,Jo)&&(Ko.crossVectors(ur,dr),t=[Ko.x,Ko.y,Ko.z],_h(t,Rs,Cs,Ps,Jo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ei).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Oi=[new T,new T,new T,new T,new T,new T,new T,new T],ei=new T,Zo=new Zn,Rs=new T,Cs=new T,Ps=new T,ur=new T,dr=new T,Br=new T,Ua=new T,Jo=new T,Ko=new T,Fr=new T;function _h(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fr.fromArray(i,s);let o=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),c=e.dot(Fr),l=t.dot(Fr),h=n.dot(Fr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var $0=new Zn,Na=new T,xh=new T,Jn=class{constructor(e=new T,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);let t=Na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Na,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(xh)),this.expandByPoint(Na.copy(e.center).sub(xh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Hi=new T,Mh=new T,Qo=new T,pr=new T,bh=new T,el=new T,Eh=new T,xr=class{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Mh.copy(e).add(t).multiplyScalar(.5),Qo.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(Mh);let s=.5*e.distanceTo(t),a=-this.direction.dot(Qo),o=pr.dot(this.direction),c=-pr.dot(Qo),l=pr.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Mh).addScaledVector(Qo,d),p}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);let n=Hi.dot(this.direction),r=Hi.dot(Hi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,r,s){bh.subVectors(t,e),el.subVectors(n,e),Eh.crossVectors(bh,el);let a,o=this.direction.dot(Eh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}pr.subVectors(this.origin,e);let c=a*this.direction.dot(el.crossVectors(pr,el));if(c<0)return null;let l=a*this.direction.dot(bh.cross(pr));if(l<0||c+l>o)return null;let h=-a*pr.dot(Eh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class i{constructor(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m)}set(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=v,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,v=l*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y0,e,Z0)}lookAt(e,t,n){let r=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),fr.crossVectors(n,Fn),fr.lengthSq()===0&&(Math.abs(n.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),fr.crossVectors(n,Fn)),fr.normalize(),tl.crossVectors(Fn,fr),r[0]=fr.x,r[4]=tl.x,r[8]=Fn.x,r[1]=fr.y,r[5]=tl.y,r[9]=Fn.y,r[2]=fr.z,r[6]=tl.z,r[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],_=n[14],g=n[3],y=n[7],E=n[11],S=n[15],b=r[0],U=r[4],z=r[8],I=r[12],X=r[1],G=r[5],N=r[9],Z=r[13],D=r[2],j=r[6],ee=r[10],ce=r[14],ae=r[3],be=r[7],de=r[11],Ee=r[15];return s[0]=a*b+o*X+c*D+l*ae,s[4]=a*U+o*G+c*j+l*be,s[8]=a*z+o*N+c*ee+l*de,s[12]=a*I+o*Z+c*ce+l*Ee,s[1]=h*b+u*X+d*D+p*ae,s[5]=h*U+u*G+d*j+p*be,s[9]=h*z+u*N+d*ee+p*de,s[13]=h*I+u*Z+d*ce+p*Ee,s[2]=f*b+v*X+m*D+_*ae,s[6]=f*U+v*G+m*j+_*be,s[10]=f*z+v*N+m*ee+_*de,s[14]=f*I+v*Z+m*ce+_*Ee,s[3]=g*b+y*X+E*D+S*ae,s[7]=g*U+y*G+E*j+S*be,s[11]=g*z+y*N+E*ee+S*de,s[15]=g*I+y*Z+E*ce+S*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-r*l*u-s*o*d+n*l*d+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-r*o*h-t*c*u+t*o*d+r*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],_=e[15],g=u*m*l-v*d*l+v*c*p-o*m*p-u*c*_+o*d*_,y=f*d*l-h*m*l-f*c*p+a*m*p+h*c*_-a*d*_,E=h*v*l-f*u*l+f*o*p-a*v*p-h*o*_+a*u*_,S=f*u*c-h*v*c-f*o*d+a*v*d+h*o*m-a*u*m,b=t*g+n*y+r*E+s*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/b;return e[0]=g*U,e[1]=(v*d*s-u*m*s-v*r*p+n*m*p+u*r*_-n*d*_)*U,e[2]=(o*m*s-v*c*s+v*r*l-n*m*l-o*r*_+n*c*_)*U,e[3]=(u*c*s-o*d*s-u*r*l+n*d*l+o*r*p-n*c*p)*U,e[4]=y*U,e[5]=(h*m*s-f*d*s+f*r*p-t*m*p-h*r*_+t*d*_)*U,e[6]=(f*c*s-a*m*s-f*r*l+t*m*l+a*r*_-t*c*_)*U,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*p+t*c*p)*U,e[8]=E*U,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*_-t*u*_)*U,e[10]=(a*v*s-f*o*s+f*n*l-t*v*l-a*n*_+t*o*_)*U,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*U,e[12]=S*U,e[13]=(h*v*r-f*u*r+f*n*d-t*v*d-h*n*m+t*u*m)*U,e[14]=(f*o*r-a*v*r-f*n*c+t*v*c+a*n*m-t*o*m)*U,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*d+t*o*d)*U,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,v=a*h,m=a*u,_=o*u,g=c*l,y=c*h,E=c*u,S=n.x,b=n.y,U=n.z;return r[0]=(1-(v+_))*S,r[1]=(p+E)*S,r[2]=(f-y)*S,r[3]=0,r[4]=(p-E)*b,r[5]=(1-(d+_))*b,r[6]=(m+g)*b,r[7]=0,r[8]=(f+y)*U,r[9]=(m-g)*U,r[10]=(1-(d+v))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Is.set(r[0],r[1],r[2]).length(),a=Is.set(r[4],r[5],r[6]).length(),o=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ti.copy(this);let c=1/s,l=1/a,h=1/o;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=l,ti.elements[5]*=l,ti.elements[6]*=l,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),f,v;if(c)f=s/(a-s),v=a*s/(a-s);else if(o===Xi)f=-(a+s)/(a-s),v=-2*a*s/(a-s);else{if(o!==Za)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),v=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),f,v;if(c)f=1/(a-s),v=a/(a-s);else if(o===Xi)f=-2/(a-s),v=-(a+s)/(a-s);else{if(o!==Za)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),v=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Is=new T,ti=new tt,Y0=new T(0,0,0),Z0=new T(1,1,1),fr=new T,tl=new T,Fn=new T,tp=new tt,np=new Pn,ri=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return np.setFromEuler(this),this.setFromQuaternion(np,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var Js=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},J0=0,ip=new T,Ls=new Pn,Gi=new tt,nl=new T,ka=new T,K0=new T,Q0=new Pn,rp=new T(1,0,0),sp=new T(0,1,0),ap=new T(0,0,1),op={type:"added"},eg={type:"removed"},Ds={type:"childadded",child:null},Sh={type:"childremoved",child:null},en=class i extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new T,t=new ri,n=new Pn,r=new T(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new lt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(rp,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,t){return ip.copy(e).applyQuaternion(this.quaternion),this.position.add(ip.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(rp,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?nl.copy(e):nl.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ka.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(ka,nl,this.up):Gi.lookAt(nl,ka,this.up),this.quaternion.setFromRotationMatrix(Gi),r&&(Gi.extractRotation(r.matrixWorld),Ls.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(op),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(eg),Sh.child=e,this.dispatchEvent(Sh),Sh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(op),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,e,K0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ka,Q0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};en.DEFAULT_UP=new T(0,1,0),en.DEFAULT_MATRIX_AUTO_UPDATE=!0,en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ni=new T,zi=new T,Th=new T,Vi=new T,Us=new T,Ns=new T,lp=new T,wh=new T,Ah=new T,Rh=new T,Ch=new Et,Ph=new Et,Ih=new Et,pi=class i{constructor(e=new T,t=new T,n=new T){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ni.subVectors(e,t),r.cross(ni);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ni.subVectors(r,t),zi.subVectors(n,t),Th.subVectors(e,t);let a=ni.dot(ni),o=ni.dot(zi),c=ni.dot(Th),l=zi.dot(zi),h=zi.dot(Th),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Vi)!==null&&Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Vi.x),c.addScaledVector(a,Vi.y),c.addScaledVector(o,Vi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ch.setScalar(0),Ph.setScalar(0),Ih.setScalar(0),Ch.fromBufferAttribute(e,t),Ph.fromBufferAttribute(e,n),Ih.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ch,s.x),a.addScaledVector(Ph,s.y),a.addScaledVector(Ih,s.z),a}static isFrontFacing(e,t,n,r){return ni.subVectors(n,t),zi.subVectors(e,t),ni.cross(zi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),.5*ni.cross(zi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Us.subVectors(r,n),Ns.subVectors(s,n),wh.subVectors(e,n);let c=Us.dot(wh),l=Ns.dot(wh);if(c<=0&&l<=0)return t.copy(n);Ah.subVectors(e,r);let h=Us.dot(Ah),u=Ns.dot(Ah);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Us,a);Rh.subVectors(e,s);let p=Us.dot(Rh),f=Ns.dot(Rh);if(f>=0&&p<=f)return t.copy(s);let v=p*l-c*f;if(v<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Ns,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return lp.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(lp,o);let _=1/(m+v+d);return a=v*_,o=d*_,t.copy(n).addScaledVector(Us,a).addScaledVector(Ns,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},il={h:0,s:0,l:0};function Lh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,xt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,xt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=xt.workingColorSpace){if(e=qh(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Lh(a,s,e+1/3),this.g=Lh(a,s,e),this.b=Lh(a,s,e-1/3)}return xt.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return xt.workingToColorSpace(gn.copy(this),e),65536*Math.round(pt(255*gn.r,0,255))+256*Math.round(pt(255*gn.g,0,255))+Math.round(pt(255*gn.b,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.workingToColorSpace(gn.copy(this),t);let n=gn.r,r=gn.g,s=gn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=xt.workingColorSpace){return xt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=Rt){xt.workingToColorSpace(gn.copy(this),e);let t=gn.r,n=gn.g,r=gn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+t,mr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mr),e.getHSL(il);let n=Xa(mr.h,il.h,t),r=Xa(mr.s,il.s,t),s=Xa(mr.l,il.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new et;et.NAMES=Sf;var tg=0,yi=class extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tg++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:Je(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cn=class extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},My=ng();function ng(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Qt=new T,rl=new pe,ig=0,bn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ig++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Pl,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)rl.fromBufferAttribute(this,t),rl.applyMatrix3(e),this.setXY(t,rl.x,rl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pl&&(e.usage=this.usage),e}};var Qa=class extends bn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var eo=class extends bn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ze=class extends bn{constructor(e,t,n){super(new Float32Array(e),t,n)}},rg=0,qn=new tt,Dh=new en,ks=new T,On=new Zn,Ba=new Zn,ln=new T,Pt=class i extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?eo:Qa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Dh.lookAt(e),Dh.updateMatrix(),this.applyMatrix4(Dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new T,1/0);if(e){let n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Ba.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(On.min,Ba.min),On.expandByPoint(ln),ln.addVectors(On.max,Ba.max),On.expandByPoint(ln)):(On.expandByPoint(Ba.min),On.expandByPoint(Ba.max))}On.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ln));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ln.fromBufferAttribute(o,l),c&&(ks.fromBufferAttribute(e,l),ln.add(ks)),r=Math.max(r,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<n.count;z++)o[z]=new T,c[z]=new T;let l=new T,h=new T,u=new T,d=new pe,p=new pe,f=new pe,v=new T,m=new T;function _(z,I,X){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,X),d.fromBufferAttribute(s,z),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,X),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let G=1/(p.x*f.y-f.x*p.y);isFinite(G)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(G),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(G),o[z].add(v),o[I].add(v),o[X].add(v),c[z].add(m),c[I].add(m),c[X].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let z=0,I=g.length;z<I;++z){let X=g[z],G=X.start;for(let N=G,Z=G+X.count;N<Z;N+=3)_(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new T,E=new T,S=new T,b=new T;function U(z){S.fromBufferAttribute(r,z),b.copy(S);let I=o[z];y.copy(I),y.sub(S.multiplyScalar(S.dot(I))).normalize(),E.crossVectors(b,I);let X=E.dot(c[z])<0?-1:1;a.setXYZW(z,y.x,y.y,y.z,X)}for(let z=0,I=g.length;z<I;++z){let X=g[z],G=X.start;for(let N=G,Z=G+X.count;N<Z;N+=3)U(e.getX(N+0)),U(e.getX(N+1)),U(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bn(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new T,s=new T,a=new T,o=new T,c=new T,l=new T,h=new T,u=new T;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let v=0,m=c.length;v<m;v++){p=o.isInterleavedBufferAttribute?c[v]*o.data.stride+o.offset:c[v]*h;for(let _=0;_<h;_++)d[f++]=l[p++]}return new bn(d,h,u)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},cp=new tt,Or=new xr,sl=new Jn,hp=new T,al=new T,ol=new T,ll=new T,Uh=new T,cl=new T,up=new T,hl=new T,H=class extends en{constructor(e=new Pt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){cl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Uh.fromBufferAttribute(u,e),a?cl.addScaledVector(Uh,h):cl.addScaledVector(Uh.sub(t),h))}t.add(cl)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),sl.copy(n.boundingSphere),sl.applyMatrix4(s),Or.copy(e.ray).recast(e.near),sl.containsPoint(Or.origin)===!1&&(Or.intersectSphere(sl,hp)===null||Or.origin.distanceToSquared(hp)>(e.far-e.near)**2))return;cp.copy(s).invert(),Or.copy(e.ray).applyMatrix4(cp),n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Or)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],_=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)r=ul(this,_,e,n,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)r=ul(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],_=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)r=ul(this,_,e,n,l,h,u,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);f<v;f+=3)r=ul(this,a,e,n,l,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function ul(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,al),i.getVertexPosition(c,ol),i.getVertexPosition(l,ll);let h=(function(u,d,p,f,v,m,_,g){let y;if(y=d.side===1?f.intersectTriangle(_,m,v,!0,g):f.intersectTriangle(v,m,_,d.side===0,g),y===null)return null;hl.copy(g),hl.applyMatrix4(u.matrixWorld);let E=p.ray.origin.distanceTo(hl);return E<p.near||E>p.far?null:{distance:E,point:hl.clone(),object:u}})(i,e,t,n,al,ol,ll,up);if(h){let u=new T;pi.getBarycoord(up,al,ol,ll,u),r&&(h.uv=pi.getInterpolatedAttribute(r,o,c,l,u,new pe)),s&&(h.uv1=pi.getInterpolatedAttribute(s,o,c,l,u,new pe)),a&&(h.normal=pi.getInterpolatedAttribute(a,o,c,l,u,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new T,materialIndex:0};pi.getNormal(al,ol,ll,d.normal),h.face=d,h.barycoord=u}return h}var xe=class i extends Pt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(v,m,_,g,y,E,S,b,U,z,I){let X=E/U,G=S/z,N=E/2,Z=S/2,D=b/2,j=U+1,ee=z+1,ce=0,ae=0,be=new T;for(let de=0;de<ee;de++){let Ee=de*G-Z;for(let fe=0;fe<j;fe++){let re=fe*X-N;be[v]=re*g,be[m]=Ee*y,be[_]=D,l.push(be.x,be.y,be.z),be[v]=0,be[m]=0,be[_]=b>0?1:-1,h.push(be.x,be.y,be.z),u.push(fe/U),u.push(1-de/z),ce+=1}}for(let de=0;de<z;de++)for(let Ee=0;Ee<U;Ee++){let fe=d+Ee+j*de,re=d+Ee+j*(de+1),ge=d+(Ee+1)+j*(de+1),ye=d+(Ee+1)+j*de;c.push(fe,re,ye),c.push(re,ge,ye),ae+=6}o.addGroup(p,ae,I),p+=ae,d+=ce}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=ts(i[t]);for(let r in n)e[r]=n[r]}return e}function Xu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}var Tf={clone:ts,merge:yn},In=class extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ks=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},gr=new T,dp=new pe,pp=new pe,nn=class extends Ks{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ys*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ws*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ys*Math.atan(Math.tan(.5*Ws*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,t){return this.getViewBounds(e,dp,pp),t.subVectors(pp,dp)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ws*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bs=-90,Ul=class extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nn(Bs,1,e,t);r.layers=this.layers,this.add(r);let s=new nn(Bs,1,e,t);s.layers=this.layers,this.add(s);let a=new nn(Bs,1,e,t);a.layers=this.layers,this.add(a);let o=new nn(Bs,1,e,t);o.layers=this.layers,this.add(o);let c=new nn(Bs,1,e,t);c.layers=this.layers,this.add(c);let l=new nn(Bs,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Za)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},to=class extends vn{constructor(e=[],t=301,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Nl=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new to(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xe(5,5,5),s=new In({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new H(r,s),o=t.minFilter;return t.minFilter===Zr&&(t.minFilter=Yn),new Ul(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Te=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},sg={type:"move"},Qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),_=this._getHandJoint(l,v);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var no=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Wr=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},kl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pl,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Mn=new T,io=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyMatrix4(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.applyNormalMatrix(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mn.fromBufferAttribute(this,t),Mn.transformDirection(e),this.setXYZ(t,Mn.x,Mn.y,Mn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new bn(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},_i=class extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Fs,Fa=new T,Os=new T,Hs=new T,Gs=new pe,Oa=new pe,wf=new tt,dl=new T,Ha=new T,pl=new T,fp=new pe,Nh=new pe,mp=new pe,qi=class extends en{constructor(e=new _i){if(super(),this.isSprite=!0,this.type="Sprite",Fs===void 0){Fs=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kl(t,5);Fs.setIndex([0,1,2,0,2,3]),Fs.setAttribute("position",new io(n,3,0,!1)),Fs.setAttribute("uv",new io(n,2,3,!1))}this.geometry=Fs,this.material=e,this.center=new pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Os.setFromMatrixScale(this.matrixWorld),wf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Os.multiplyScalar(-Hs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;fl(dl.set(-.5,-.5,0),Hs,a,Os,r,s),fl(Ha.set(.5,-.5,0),Hs,a,Os,r,s),fl(pl.set(.5,.5,0),Hs,a,Os,r,s),fp.set(0,0),Nh.set(1,0),mp.set(1,1);let o=e.ray.intersectTriangle(dl,Ha,pl,!1,Fa);if(o===null&&(fl(Ha.set(-.5,.5,0),Hs,a,Os,r,s),Nh.set(0,1),o=e.ray.intersectTriangle(dl,pl,Ha,!1,Fa),o===null))return;let c=e.ray.origin.distanceTo(Fa);c<e.near||c>e.far||t.push({distance:c,point:Fa.clone(),uv:pi.getInterpolation(Fa,dl,Ha,pl,fp,Nh,mp,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function fl(i,e,t,n,r,s){Gs.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Oa.x=s*Gs.x-r*Gs.y,Oa.y=r*Gs.x+s*Gs.y):Oa.copy(Gs),i.copy(e),i.x+=Oa.x,i.y+=Oa.y,i.applyMatrix4(wf)}var by=new T,Ey=new T;var Sy=new T,Ty=new Et,wy=new Et,Ay=new T,Ry=new tt,Cy=new T,Py=new Jn,Iy=new tt,Ly=new xr;var ro=class extends vn{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Dy=new tt,Uy=new tt;var so=class extends bn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zs=new tt,gp=new tt,ml=[],vp=new Zn,ag=new tt,Ga=new H,za=new Jn,$i=class extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new so(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,ag)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),vp.copy(e.boundingBox).applyMatrix4(zs),this.boundingBox.union(vp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zs),za.copy(e.boundingSphere).applyMatrix4(zs),this.boundingSphere.union(za)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ga.geometry=this.geometry,Ga.material=this.material,Ga.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),za.copy(this.boundingSphere),za.applyMatrix4(n),e.ray.intersectsSphere(za)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,zs),gp.multiplyMatrices(n,zs),Ga.matrixWorld=gp,Ga.raycast(e,ml);for(let a=0,o=ml.length;a<o;a++){let c=ml[a];c.instanceId=s,c.object=this,t.push(c)}ml.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new so(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new ro(new Float32Array(r*this.count),r,this.count,wc,si));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},kh=new T,og=new T,lg=new lt,$n=class{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=kh.subVectors(n,t).cross(og.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(kh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||lg.getNormalMatrix(e),r=this.coplanarPoint(kh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hr=new Jn,cg=new pe(.5,.5),gl=new T,Mr=class{constructor(e=new $n,t=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],v=s[9],m=s[10],_=s[11],g=s[12],y=s[13],E=s[14],S=s[15];if(r[0].setComponents(l-a,p-h,_-f,S-g).normalize(),r[1].setComponents(l+a,p+h,_+f,S+g).normalize(),r[2].setComponents(l+o,p+u,_+v,S+y).normalize(),r[3].setComponents(l-o,p-u,_-v,S-y).normalize(),n)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,p-d,_-m,S-E).normalize();else if(r[4].setComponents(l-c,p-d,_-m,S-E).normalize(),t===Xi)r[5].setComponents(l+c,p+d,_+m,S+E).normalize();else{if(t!==Za)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,m,E).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);let t=cg.distanceTo(e.center);return Hr.radius=.7071067811865476+t,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(gl.x=r.normal.x>0?e.max.x:e.min.x,gl.y=r.normal.y>0?e.max.y:e.min.y,gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ui=new tt,di=new Mr,Bl=class i{constructor(){this.coordinateSystem=Xi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.containsPoint(e))return!0}return!1}clone(){return new i}};var $h=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},Ny=new tt,ky=new et(1,1,1),By=new Mr,Fy=new Bl,Oy=new Zn,Hy=new Jn,Gy=new T,zy=new T,Vy=new T,Wy=new $h,Xy=new H;var jy=new T,qy=new T,$y=new tt,Yy=new xr,Zy=new Jn,Jy=new T,Ky=new T;var Qy=new T,e_=new T;var ea=class extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yp=new tt,Yh=new xr,vl=new Jn,yl=new T,ao=class extends en{constructor(e=new Pt,t=new ea){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(r),vl.radius+=s,e.ray.intersectsSphere(vl)===!1)return;yp.copy(r).invert(),Yh.copy(e.ray).applyMatrix4(yp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);yl.fromBufferAttribute(h,p),_p(yl,p,c,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)yl.fromBufferAttribute(h,u),_p(yl,u,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function _p(i,e,t,n,r,s,a){let o=Yh.distanceSqToPoint(i);if(o<t){let c=new T;Yh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var En=class extends vn{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},oo=class extends vn{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==Ro&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},lo=class extends vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Kn=class i extends Pt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,v=r+1,m=new T,_=new T;for(let g=0;g<=f;g++){let y=0,E=0,S=0,b=0;if(g<=n){let I=g/n,X=I*Math.PI/2;E=-h-e*Math.cos(X),S=e*Math.sin(X),b=-e*Math.cos(X),y=I*u}else if(g<=n+s){let I=(g-n)/s;E=I*t-h,S=e,b=0,y=u+I*d}else{let I=(g-n-s)/n,X=I*Math.PI/2;E=h+e*Math.sin(X),S=e*Math.cos(X),b=e*Math.sin(X),y=u+d+I*u}let U=Math.max(0,Math.min(1,y/p)),z=0;g===0?z=.5/r:g===f&&(z=-.5/r);for(let I=0;I<=r;I++){let X=I/r,G=X*Math.PI*2,N=Math.sin(G),Z=Math.cos(G);_.x=-S*Z,_.y=E,_.z=S*N,o.push(_.x,_.y,_.z),m.set(-S*Z,b,S*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(X+z,U)}if(g>0){let I=(g-1)*v;for(let X=0;X<r;X++){let G=I+X,N=I+X+1,Z=g*v+X,D=g*v+X+1;a.push(G,N,Z),a.push(N,D,Z)}}}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Yt=class i extends Pt{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new T,h=new pe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Me=class i extends Pt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,_=0;function g(y){let E=f,S=new pe,b=new T,U=0,z=y===!0?e:t,I=y===!0?1:-1;for(let G=1;G<=r;G++)u.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),f++;let X=f;for(let G=0;G<=r;G++){let N=G/r*c+o,Z=Math.cos(N),D=Math.sin(N);b.x=z*D,b.y=m*I,b.z=z*Z,u.push(b.x,b.y,b.z),d.push(0,I,0),S.x=.5*Z+.5,S.y=.5*D*I+.5,p.push(S.x,S.y),f++}for(let G=0;G<r;G++){let N=E+G,Z=X+G;y===!0?h.push(Z,Z+1,N):h.push(Z+1,Z,N),U+=3}l.addGroup(_,U,y===!0?1:2),_+=U}(function(){let y=new T,E=new T,S=0,b=(t-e)/n;for(let U=0;U<=s;U++){let z=[],I=U/s,X=I*(t-e)+e;for(let G=0;G<=r;G++){let N=G/r,Z=N*c+o,D=Math.sin(Z),j=Math.cos(Z);E.x=X*D,E.y=-I*n+m,E.z=X*j,u.push(E.x,E.y,E.z),y.set(D,b,j).normalize(),d.push(y.x,y.y,y.z),p.push(N,1-I),z.push(f++)}v.push(z)}for(let U=0;U<r;U++)for(let z=0;z<s;z++){let I=v[z][U],X=v[z+1][U],G=v[z+1][U+1],N=v[z][U+1];(e>0||z!==0)&&(h.push(I,X,N),S+=3),(t>0||z!==s-1)&&(h.push(X,G,N),S+=3)}l.addGroup(_,S,0),_+=S})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hn=class i extends Me{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},br=class i extends Pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(p,f,v,m){let _=m+1,g=[];for(let y=0;y<=_;y++){g[y]=[];let E=p.clone().lerp(v,y/_),S=f.clone().lerp(v,y/_),b=_-y;for(let U=0;U<=b;U++)g[y][U]=U===0&&y===_?E:E.clone().lerp(S,U/b)}for(let y=0;y<_;y++)for(let E=0;E<2*(_-y)-1;E++){let S=Math.floor(E/2);E%2==0?(c(g[y][S+1]),c(g[y+1][S]),c(g[y][S])):(c(g[y][S+1]),c(g[y+1][S+1]),c(g[y+1][S]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let v=3*p;f.x=e[v+0],f.y=e[v+1],f.z=e[v+2]}function h(p,f,v,m){m<0&&p.x===1&&(a[f]=p.x-1),v.x===0&&v.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new T,v=new T,m=new T;for(let _=0;_<t.length;_+=3)l(t[_+0],f),l(t[_+1],v),l(t[_+2],m),o(f,v,m,p)})(r),(function(p){let f=new T;for(let v=0;v<s.length;v+=3)f.x=s[v+0],f.y=s[v+1],f.z=s[v+2],f.normalize().multiplyScalar(p),s[v+0]=f.x,s[v+1]=f.y,s[v+2]=f.z})(n),(function(){let p=new T;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let v=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(v,1-m)}(function(){let f=new T,v=new T,m=new T,_=new T,g=new pe,y=new pe,E=new pe;for(let S=0,b=0;S<s.length;S+=9,b+=6){f.set(s[S+0],s[S+1],s[S+2]),v.set(s[S+3],s[S+4],s[S+5]),m.set(s[S+6],s[S+7],s[S+8]),g.set(a[b+0],a[b+1]),y.set(a[b+2],a[b+3]),E.set(a[b+4],a[b+5]),_.copy(f).add(v).add(m).divideScalar(3);let U=u(_);h(g,b+0,f,U),h(y,b+2,v,U),h(E,b+4,m,U)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],_=a[f+4],g=Math.max(v,m,_),y=Math.min(v,m,_);g>.9&&y<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(s.slice(),3)),this.setAttribute("uv",new ze(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Fl=class i extends br{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},_l=new T,xl=new T,Bh=new T,Ml=new pi,Ol=class extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ws*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:v,b:m,c:_}=Ml;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),Ml.getNormal(Bh),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,E=u[g],S=u[y],b=Ml[h[g]],U=Ml[h[y]],z=`${E}_${S}`,I=`${S}_${E}`;I in d&&d[I]?(Bh.dot(d[I].normal)<=s&&(p.push(b.x,b.y,b.z),p.push(U.x,U.y,U.z)),d[I]=null):z in d||(d[z]={index0:l[g],index1:l[y],normal:Bh.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];_l.fromBufferAttribute(o,v),xl.fromBufferAttribute(o,m),p.push(_l.x,_l.y,_l.z),p.push(xl.x,xl.y,xl.z)}this.setAttribute("position",new ze(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new pe:new T);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new T,r=[],s=[],a=[],o=new T,c=new tt;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new T)}s[0]=new T,a[0]=new T;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(pt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(pt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ta=class extends Gn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Hl=class extends ta{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ju(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var bl=new T,Fh=new ju,Oh=new ju,Hh=new ju,Gl=class extends Gn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new T){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(bl.subVectors(r[0],r[1]).add(r[0]),o=bl);let u=r[l%s],d=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(bl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=bl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Fh.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,v,m),Oh.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,v,m),Hh.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,v,m)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),Oh.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),Hh.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(Fh.calc(h),Oh.calc(h),Hh.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new T().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xp(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function ja(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function qa(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var co=class extends Gn{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(qa(e,r.x,s.x,a.x,o.x),qa(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zl=class extends Gn{constructor(e=new T,t=new T,n=new T,r=new T){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new T){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(qa(e,r.x,s.x,a.x,o.x),qa(e,r.y,s.y,a.y,o.y),qa(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends Gn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vl=class extends Gn{constructor(e=new T,t=new T){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new T){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new T){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends Gn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ja(e,r.x,s.x,a.x),ja(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},po=class extends Gn{constructor(e=new T,t=new T,n=new T){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new T){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(ja(e,r.x,s.x,a.x),ja(e,r.y,s.y,a.y),ja(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(xp(o,c.x,l.x,h.x,u.x),xp(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},Wl=Object.freeze({__proto__:null,ArcCurve:Hl,CatmullRomCurve3:Gl,CubicBezierCurve:co,CubicBezierCurve3:zl,EllipseCurve:ta,LineCurve:ho,LineCurve3:Vl,QuadraticBezierCurve:uo,QuadraticBezierCurve3:po,SplineCurve:fo}),Xl=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Wl[r.type]().fromJSON(r))}return this}},mo=class extends Xl{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ho(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new uo(this.currentPoint.clone(),new pe(e,t),new pe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new co(this.currentPoint.clone(),new pe(e,t),new pe(n,r),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new fo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new ta(e,t,n,r,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},xi=class extends mo{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new mo().fromJSON(r))}return this}};function hg(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Mp(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,u,d,p){let f=[];for(let v=0,m=u.length;v<m;v++){let _=Mp(h,u[v]*p,v<m-1?u[v+1]*p:h.length,p,!1);_===_.next&&(_.steiner=!0),f.push(yg(_))}f.sort(mg);for(let v=0;v<f.length;v++)d=gg(f[v],d);return d})(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<r;d+=t){let p=i[d],f=i[d+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>u&&(u=f)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return go(s,a,t,o,c,l,0),a}function Mp(i,e,t,n,r){let s;if(r===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=bp(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=bp(a/n|0,i[a],i[a+1],s);return s&&na(s,s.next)&&(yo(s),s=s.next),s}function Xr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!na(n,n.next)&&jt(n.prev,n,n.next)!==0)n=n.next;else{if(yo(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function go(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=Zh(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,v=1;do{let m,_=p;p=null;let g=null;for(f=0;_;){f++;let y=_,E=0;for(let b=0;b<v&&(E++,y=y.nextZ,y);b++);let S=v;for(;E>0||S>0&&y;)E!==0&&(S===0||!y||_.z<=y.z)?(m=_,_=_.nextZ,E--):(m=y,y=y.nextZ,S--),g?g.nextZ=m:p=m,m.prevZ=g,g=m;_=y}g.nextZ=null,v*=2}while(f>1)})(d)})(i,n,r,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?dg(i,n,r,s):ug(i))e.push(c.i,i.i,l.i),yo(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?go(i=pg(Xr(i),e),e,t,n,r,s,2):a===2&&fg(i,e,t,n,r,s):go(Xr(i),e,t,n,r,s,1);break}}}function ug(i){let e=i.prev,t=i,n=i.next;if(jt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),u=Math.min(o,c,l),d=Math.max(r,s,a),p=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Wa(r,o,s,c,a,l,f.x,f.y)&&jt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function dg(i,e,t,n){let r=i.prev,s=i,a=i.next;if(jt(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,c,l),f=Math.min(h,u,d),v=Math.max(o,c,l),m=Math.max(h,u,d),_=Zh(p,f,e,t,n),g=Zh(v,m,e,t,n),y=i.prevZ,E=i.nextZ;for(;y&&y.z>=_&&E&&E.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Wa(o,h,c,u,l,d,y.x,y.y)&&jt(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==r&&E!==a&&Wa(o,h,c,u,l,d,E.x,E.y)&&jt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Wa(o,h,c,u,l,d,y.x,y.y)&&jt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=g;){if(E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==r&&E!==a&&Wa(o,h,c,u,l,d,E.x,E.y)&&jt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function pg(i,e){let t=i;do{let n=t.prev,r=t.next.next;!na(n,r)&&Rf(n,t,t.next,r)&&vo(n,r)&&vo(r,n)&&(e.push(n.i,t.i,r.i),yo(t),yo(t.next),t=i=r),t=t.next}while(t!==i);return Xr(t)}function fg(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&_g(a,o)){let c=Cf(a,o);return a=Xr(a,a.next),c=Xr(c,c.next),go(a,e,t,n,r,s,0),void go(c,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function mg(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function gg(i,e){let t=(function(r,s){let a=s,o=r.x,c=r.y,l,h=-1/0;if(na(r,a))return a;do{if(na(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let v=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=o&&v>h&&(h=v,l=a.x<a.next.x?a:a.next,v===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&Af(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let v=Math.abs(c-a.y)/(o-a.x);vo(a,r)&&(v<f||v===f&&(a.x>l.x||a.x===l.x&&vg(l,a)))&&(l=a,f=v)}a=a.next}while(a!==u);return l})(i,e);if(!t)return e;let n=Cf(t,i);return Xr(n,n.next),Xr(t,t.next)}function vg(i,e){return jt(i.prev,i,e.prev)<0&&jt(e.next,i,i.next)<0}function Zh(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function yg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Af(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Wa(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&Af(i,e,t,n,r,s,a,o)}function _g(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Rf(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(vo(i,e)&&vo(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(jt(i.prev,i,e.prev)||jt(i,e.prev,e))||na(i,e)&&jt(i.prev,i,i.next)>0&&jt(e.prev,e,e.next)>0)}function jt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function na(i,e){return i.x===e.x&&i.y===e.y}function Rf(i,e,t,n){let r=Sl(jt(i,e,t)),s=Sl(jt(i,e,n)),a=Sl(jt(t,n,i)),o=Sl(jt(t,n,e));return r!==s&&a!==o||!(r!==0||!El(i,t,e))||!(s!==0||!El(i,n,e))||!(a!==0||!El(t,i,n))||!(o!==0||!El(t,e,n))}function El(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Sl(i){return i>0?1:i<0?-1:0}function vo(i,e){return jt(i.prev,i,i.next)<0?jt(i,e,i.next)>=0&&jt(i,i.prev,e)>=0:jt(i,e,i.prev)<0||jt(i,i.next,e)<0}function Cf(i,e){let t=Jh(i.i,i.x,i.y),n=Jh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bp(i,e,t,n){let r=Jh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function yo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Jh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Kh=class{static triangulate(e,t,n=2){return hg(e,t,n)}},fi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Ep(e),Sp(n,e);let a=e.length;t.forEach(Ep);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Sp(n,t[c]);let o=Kh.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Ep(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Sp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ia=class i extends Pt{constructor(e=new xi([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:xg,y,E,S,b,U,z=!1;_&&(y=_.getSpacedPoints(h),z=!0,d=!1,E=_.computeFrenetFrames(h,!1),S=new T,b=new T,U=new T),d||(m=0,p=0,f=0,v=0);let I=o.extractPoints(l),X=I.shape,G=I.holes;if(!fi.isClockWise(X)){X=X.reverse();for(let k=0,x=G.length;k<x;k++){let C=G[k];fi.isClockWise(C)&&(G[k]=C.reverse())}}function N(k){let x=10000000000000001e-36,C=k[0];for(let W=1;W<=k.length;W++){let F=W%k.length,te=k[F],q=te.x-C.x,K=te.y-C.y,ne=q*q+K*K,le=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(C.x),Math.abs(C.y));ne<=x*le*le?(k.splice(F,1),W--):C=te}}N(X),G.forEach(N);let Z=G.length,D=X;for(let k=0;k<Z;k++){let x=G[k];X=X.concat(x)}function j(k,x,C){return x||ht("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(x,C)}let ee=X.length;function ce(k,x,C){let W,F,te,q=k.x-x.x,K=k.y-x.y,ne=C.x-k.x,le=C.y-k.y,he=q*q+K*K,Re=q*le-K*ne;if(Math.abs(Re)>Number.EPSILON){let Fe=Math.sqrt(he),Xe=Math.sqrt(ne*ne+le*le),st=x.x-K/Fe,rt=x.y+q/Fe,gt=((C.x-le/Xe-st)*le-(C.y+ne/Xe-rt)*ne)/(q*le-K*ne);W=st+q*gt-k.x,F=rt+K*gt-k.y;let Ne=W*W+F*F;if(Ne<=2)return new pe(W,F);te=Math.sqrt(Ne/2)}else{let Fe=!1;q>Number.EPSILON?ne>Number.EPSILON&&(Fe=!0):q<-Number.EPSILON?ne<-Number.EPSILON&&(Fe=!0):Math.sign(K)===Math.sign(le)&&(Fe=!0),Fe?(W=-K,F=q,te=Math.sqrt(he)):(W=q,F=K,te=Math.sqrt(he/2))}return new pe(W/te,F/te)}let ae=[];for(let k=0,x=D.length,C=x-1,W=k+1;k<x;k++,C++,W++)C===x&&(C=0),W===x&&(W=0),ae[k]=ce(D[k],D[C],D[W]);let be=[],de,Ee,fe=ae.concat();for(let k=0,x=Z;k<x;k++){let C=G[k];de=[];for(let W=0,F=C.length,te=F-1,q=W+1;W<F;W++,te++,q++)te===F&&(te=0),q===F&&(q=0),de[W]=ce(C[W],C[te],C[q]);be.push(de),fe=fe.concat(de)}if(m===0)Ee=fi.triangulateShape(D,G);else{let k=[],x=[];for(let C=0;C<m;C++){let W=C/m,F=p*Math.cos(W*Math.PI/2),te=f*Math.sin(W*Math.PI/2)+v;for(let q=0,K=D.length;q<K;q++){let ne=j(D[q],ae[q],te);Be(ne.x,ne.y,-F),W===0&&k.push(ne)}for(let q=0,K=Z;q<K;q++){let ne=G[q];de=be[q];let le=[];for(let he=0,Re=ne.length;he<Re;he++){let Fe=j(ne[he],de[he],te);Be(Fe.x,Fe.y,-F),W===0&&le.push(Fe)}W===0&&x.push(le)}}Ee=fi.triangulateShape(k,x)}let re=Ee.length,ge=f+v;for(let k=0;k<ee;k++){let x=d?j(X[k],fe[k],ge):X[k];z?(b.copy(E.normals[0]).multiplyScalar(x.x),S.copy(E.binormals[0]).multiplyScalar(x.y),U.copy(y[0]).add(b).add(S),Be(U.x,U.y,U.z)):Be(x.x,x.y,0)}for(let k=1;k<=h;k++)for(let x=0;x<ee;x++){let C=d?j(X[x],fe[x],ge):X[x];z?(b.copy(E.normals[k]).multiplyScalar(C.x),S.copy(E.binormals[k]).multiplyScalar(C.y),U.copy(y[k]).add(b).add(S),Be(U.x,U.y,U.z)):Be(C.x,C.y,u/h*k)}for(let k=m-1;k>=0;k--){let x=k/m,C=p*Math.cos(x*Math.PI/2),W=f*Math.sin(x*Math.PI/2)+v;for(let F=0,te=D.length;F<te;F++){let q=j(D[F],ae[F],W);Be(q.x,q.y,u+C)}for(let F=0,te=G.length;F<te;F++){let q=G[F];de=be[F];for(let K=0,ne=q.length;K<ne;K++){let le=j(q[K],de[K],W);z?Be(le.x,le.y+y[h-1].y,y[h-1].x+C):Be(le.x,le.y,u+C)}}}function ye(k,x){let C=k.length;for(;--C>=0;){let W=C,F=C-1;F<0&&(F=k.length-1);for(let te=0,q=h+2*m;te<q;te++){let K=ee*te,ne=ee*(te+1);A(x+W+K,x+F+K,x+F+ne,x+W+ne)}}}function Be(k,x,C){c.push(k),c.push(x),c.push(C)}function je(k,x,C){w(k),w(x),w(C);let W=r.length/3,F=g.generateTopUV(n,r,W-3,W-2,W-1);V(F[0]),V(F[1]),V(F[2])}function A(k,x,C,W){w(k),w(x),w(W),w(x),w(C),w(W);let F=r.length/3,te=g.generateSideWallUV(n,r,F-6,F-3,F-2,F-1);V(te[0]),V(te[1]),V(te[3]),V(te[1]),V(te[2]),V(te[3])}function w(k){r.push(c[3*k+0]),r.push(c[3*k+1]),r.push(c[3*k+2])}function V(k){s.push(k.x),s.push(k.y)}(function(){let k=r.length/3;if(d){let x=0,C=ee*x;for(let W=0;W<re;W++){let F=Ee[W];je(F[2]+C,F[1]+C,F[0]+C)}x=h+2*m,C=ee*x;for(let W=0;W<re;W++){let F=Ee[W];je(F[0]+C,F[1]+C,F[2]+C)}}else{for(let x=0;x<re;x++){let C=Ee[x];je(C[2],C[1],C[0])}for(let x=0;x<re;x++){let C=Ee[x];je(C[0]+ee*h,C[1]+ee*h,C[2]+ee*h)}}n.addGroup(k,r.length/3-k,0)})(),(function(){let k=r.length/3,x=0;ye(D,x),x+=D.length;for(let C=0,W=G.length;C<W;C++){let F=G[C];ye(F,x),x+=F.length}n.addGroup(k,r.length/3-k,1)})()}this.setAttribute("position",new ze(r,3)),this.setAttribute("uv",new ze(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Wl[r.type]().fromJSON(r)),new i(n,e.options)}},xg={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new pe(s,a),new pe(o,c),new pe(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],v=e[3*s],m=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new pe(a,1-c),new pe(l,1-u),new pe(d,1-f),new pe(v,1-_)]:[new pe(o,1-c),new pe(h,1-u),new pe(p,1-f),new pe(m,1-_)]}},Er=class i extends br{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},jl=class i extends Pt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=pt(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new T,d=new pe,p=new T,f=new T,v=new T,m=0,_=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-m,p.z=0*_,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-m,p.z=0*_,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(f)}for(let g=0;g<=t;g++){let y=n+g*h*r,E=Math.sin(y),S=Math.cos(y);for(let b=0;b<=e.length-1;b++){u.x=e[b].x*E,u.y=e[b].y,u.z=e[b].x*S,a.push(u.x,u.y,u.z),d.x=g/t,d.y=b/(e.length-1),o.push(d.x,d.y);let U=c[3*b+0]*E,z=c[3*b+1],I=c[3*b+0]*S;l.push(U,z,I)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let E=y+g*e.length,S=E,b=E+e.length,U=E+e.length+1,z=E+1;s.push(S,b,z),s.push(U,z,b)}this.setIndex(s),this.setAttribute("position",new ze(a,3)),this.setAttribute("uv",new ze(o,2)),this.setAttribute("normal",new ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},ql=class i extends br{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},vt=class i extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],v=[],m=[];for(let _=0;_<h;_++){let g=_*d-a;for(let y=0;y<l;y++){let E=y*u-s;f.push(E,-g,0),v.push(0,0,1),m.push(y/o),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let g=0;g<o;g++){let y=g+l*_,E=g+l*(_+1),S=g+1+l*(_+1),b=g+1+l*_;p.push(y,E,b),p.push(E,S,b)}this.setIndex(p),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},$l=class i extends Pt{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new T,f=new pe;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let _=s+m/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<r;v++){let m=v*(n+1);for(let _=0;_<n;_++){let g=_+m,y=g,E=g+n+1,S=g+n+2,b=g+1;o.push(y,E,b),o.push(E,S,b)}}this.setIndex(o),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Sr=class i extends Pt{constructor(e=new xi([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;fi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,_=f.length;m<_;m++){let g=f[m];fi.isClockWise(g)===!0&&(f[m]=g.reverse())}let v=fi.triangulateShape(p,f);for(let m=0,_=f.length;m<_;m++){let g=f[m];p=p.concat(g)}for(let m=0,_=p.length;m<_;m++){let g=p[m];r.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,_=v.length;m<_;m++){let g=v[m],y=g[0]+u,E=g[1]+u,S=g[2]+u;n.push(y,E,S),c+=3}}this.setIndex(n),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(s,3)),this.setAttribute("uv",new ze(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},mt=class i extends Pt{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new T,d=new T,p=[],f=[],v=[],m=[];for(let _=0;_<=n;_++){let g=[],y=_/n,E=0;_===0&&a===0?E=.5/t:_===n&&c===Math.PI&&(E=-.5/t);for(let S=0;S<=t;S++){let b=S/t;u.x=-e*Math.cos(r+b*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+b*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(b+E,1-y),g.push(l++)}h.push(g)}for(let _=0;_<n;_++)for(let g=0;g<t;g++){let y=h[_][g+1],E=h[_][g],S=h[_+1][g],b=h[_+1][g+1];(_!==0||a>0)&&p.push(y,E,b),(_!==n-1||c<Math.PI)&&p.push(E,S,b)}this.setIndex(p),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Yl=class i extends br{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Sn=class i extends Pt{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new T,u=new T,d=new T;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let v=f/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let v=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,_=(r+1)*(p-1)+f,g=(r+1)*p+f;a.push(v,m,g),a.push(m,_,g)}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Zl=class i extends Pt{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],u=new T,d=new T,p=new T,f=new T,v=new T,m=new T,_=new T;for(let y=0;y<=n;++y){let E=y/n*s*Math.PI*2;g(E,s,a,e,p),g(E+.01,s,a,e,f),m.subVectors(f,p),_.addVectors(f,p),v.crossVectors(m,_),_.crossVectors(v,m),v.normalize(),_.normalize();for(let S=0;S<=r;++S){let b=S/r*Math.PI*2,U=-t*Math.cos(b),z=t*Math.sin(b);u.x=p.x+(U*_.x+z*v.x),u.y=p.y+(U*_.y+z*v.y),u.z=p.z+(U*_.z+z*v.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(S/r)}}for(let y=1;y<=n;y++)for(let E=1;E<=r;E++){let S=(r+1)*(y-1)+(E-1),b=(r+1)*y+(E-1),U=(r+1)*y+E,z=(r+1)*(y-1)+E;o.push(S,b,z),o.push(b,U,z)}function g(y,E,S,b,U){let z=Math.cos(y),I=Math.sin(y),X=S/E*y,G=Math.cos(X);U.x=b*(2+G)*.5*z,U.y=b*(2+G)*I*.5,U.z=b*Math.sin(X)*.5}this.setIndex(o),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Jl=class i extends Pt{constructor(e=new po(new T(-1,-1,0),new T(-1,1,0),new T(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new T,c=new T,l=new pe,h=new T,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let _=a.normals[m],g=a.binormals[m];for(let y=0;y<=r;y++){let E=y/r*Math.PI*2,S=Math.sin(E),b=-Math.cos(E);c.x=b*_.x+S*g.x,c.y=b*_.y+S*g.y,c.z=b*_.z+S*g.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let _=0;_<=r;_++)l.x=m/t,l.y=_/r,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let _=1;_<=r;_++){let g=(r+1)*(m-1)+(_-1),y=(r+1)*m+(_-1),E=(r+1)*m+_,S=(r+1)*(m-1)+_;f.push(g,y,S),f.push(y,E,S)}})()})(),this.setIndex(f),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Kl=class extends Pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new T,s=new T;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),_=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,_),Tp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Tp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Tp(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var t_=Object.freeze({__proto__:null,BoxGeometry:xe,CapsuleGeometry:Kn,CircleGeometry:Yt,ConeGeometry:hn,CylinderGeometry:Me,DodecahedronGeometry:Fl,EdgesGeometry:Ol,ExtrudeGeometry:ia,IcosahedronGeometry:Er,LatheGeometry:jl,OctahedronGeometry:ql,PlaneGeometry:vt,PolyhedronGeometry:br,RingGeometry:$l,ShapeGeometry:Sr,SphereGeometry:mt,TetrahedronGeometry:Yl,TorusGeometry:Sn,TorusKnotGeometry:Zl,TubeGeometry:Jl,WireframeGeometry:Kl});var ke=class extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ql=class extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ec=class extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Tl(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}function Mg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var jr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},tc=class extends jr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Wh,endingEnd:Wh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xh:s=e,o=2*t-n;break;case jh:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Xh:a=e,c=2*n-t;break;case jh:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),v=f*f,m=v*f,_=-d*m+2*d*v-d*f,g=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*v+.5*f,E=p*m-p*v;for(let S=0;S!==o;++S)s[S]=_*a[h+S]+g*a[l+S]+y*a[c+S]+E*a[u+S];return s}},nc=class extends jr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},ic=class extends jr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Tl(t,this.TimeBufferType),this.values=Tl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Tl(e.times,Array),values:Tl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ic(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new tc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case Cl:t=this.InterpolantFactoryMethodLinear;break;case wl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return wl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ht("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ht("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&Mg(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){ht("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===wl,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Hn.prototype.ValueTypeName="",Hn.prototype.TimeBufferType=Float32Array,Hn.prototype.ValueBufferType=Float32Array,Hn.prototype.DefaultInterpolation=Cl;var vr=class extends Hn{constructor(e,t,n){super(e,t,n)}};vr.prototype.ValueTypeName="bool",vr.prototype.ValueBufferType=Array,vr.prototype.DefaultInterpolation=$a,vr.prototype.InterpolantFactoryMethodLinear=void 0,vr.prototype.InterpolantFactoryMethodSmooth=void 0;var rc=class extends Hn{constructor(e,t,n,r){super(e,t,n,r)}};rc.prototype.ValueTypeName="color";var sc=class extends Hn{constructor(e,t,n,r){super(e,t,n,r)}};sc.prototype.ValueTypeName="number";var ac=class extends jr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)Pn.slerpFlat(s,0,a,l-o,a,l,c);return s}},_o=class extends Hn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new ac(this.times,this.values,this.getValueSize(),e)}};_o.prototype.ValueTypeName="quaternion",_o.prototype.InterpolantFactoryMethodSmooth=void 0;var yr=class extends Hn{constructor(e,t,n){super(e,t,n)}};yr.prototype.ValueTypeName="string",yr.prototype.ValueBufferType=Array,yr.prototype.DefaultInterpolation=$a,yr.prototype.InterpolantFactoryMethodLinear=void 0,yr.prototype.InterpolantFactoryMethodSmooth=void 0;var oc=class extends Hn{constructor(e,t,n,r){super(e,t,n,r)}};oc.prototype.ValueTypeName="vector";var Al={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},lc=class{constructor(e,t,n){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Pf=new lc,ra=class{constructor(e){this.manager=e!==void 0?e:Pf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ra.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=new WeakMap,cc=class extends ra{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=Al.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Vs.get(a);u===void 0&&(u=[],Vs.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=js("img");function c(){h(),t&&t(this);let u=Vs.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Vs.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),Al.remove(`image:${e}`);let d=Vs.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Vs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Al.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var xo=class extends ra{constructor(e){super(e)}load(e,t,n,r){let s=new vn,a=new cc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},sa=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},qr=class extends sa{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Gh=new tt,wp=new T,Ap=new T,hc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=bi,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wp.setFromMatrixPosition(e.matrixWorld),t.position.copy(wp),Ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ap),t.updateMatrixWorld(),Gh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Rp=new tt,Va=new T,zh=new T,Qh=class extends hc{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Va.setFromMatrixPosition(e.matrixWorld),n.position.copy(Va),zh.copy(n.position),zh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zh),n.updateMatrixWorld(),r.makeTranslation(-Va.x,-Va.y,-Va.z),Rp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rp,n.coordinateSystem,n.reversedDepth)}},Yi=class extends sa{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Qh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Mo=class extends Ks{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},eu=class extends hc{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$r=class extends sa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new eu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var n_=new tt,i_=new tt,r_=new tt;var uc=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var s_=new T,a_=new Pn,o_=new T,l_=new T,c_=new T;var h_=new T,u_=new Pn,d_=new T,p_=new T;var qu="\\[\\]\\.:\\/",bg=new RegExp("["+qu+"]","g"),Vh="[^"+qu+"]",Eg="[^"+qu.replace("\\.","")+"]",Sg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Vh)+/(WCOD+)?/.source.replace("WCOD",Eg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vh)+"$"),Tg=["material","materials","bones","map"],Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(e){let t=Sg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Tg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Je("PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void ht("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void ht("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void ht("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0)return void ht("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=class{constructor(i,e,t){let n=t||Bt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray],Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var f_=new Float32Array(1);var Cp=new tt,bo=class{constructor(e,t,n=0,r=1/0){this.ray=new xr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Js,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cp),this}intersectObject(e,t=!0,n=[]){return tu(e,this,n,t),n.sort(Pp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)tu(e[r],this,n,t);return n.sort(Pp),n}};function Pp(i,e){return i.distance-e.distance}function tu(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)tu(s[a],e,t,!0)}}var m_=new pe;var g_=new T,v_=new T,y_=new T,__=new T,x_=new T,M_=new T,b_=new T;var E_=new T;var S_=new T,T_=new tt,w_=new tt;var A_=new T,R_=new et,C_=new et;var P_=new T,I_=new T,L_=new T;var D_=new T,U_=new Ks;var N_=new Zn;var k_=new T;function $u(i,e,t,n){let r=(function(s){switch(s){case bi:case ou:return{byteLength:1,components:1};case ha:case lu:case Kr:return{byteLength:2,components:1};case Sc:case Tc:return{byteLength:2,components:4};case Jr:case Ec:case si:return{byteLength:4,components:1};case cu:case hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return i*e;case wc:case Ac:return i*e/r.components*r.byteLength;case 1030:case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case ai:case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}})),typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Qf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Ag(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,s),l.length===0)i.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var ut={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ei={basic:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:yn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:yn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:yn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:yn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:yn([Se.points,Se.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:yn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:yn([Se.common,Se.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:yn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:yn([Se.sprite,Se.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:yn([Se.common,Se.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:yn([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ei.physical={uniforms:yn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Lc={r:0,b:0,g:0},ns=new ri,Rg=new tt;function Cg(i,e,t,n,r,s,a){let o=new et(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_}function v(m,_){m.getRGB(Lc,Xu(i)),n.buffers.color.setClear(Lc.r,Lc.g,Lc.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),h=_,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,v(o,h)},render:function(m){let _=!1,g=f(m);g===null?v(o,h):g&&g.isColor&&(v(g,1),_=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,_){let g=f(_);g&&(g.isCubeTexture||g.mapping===wo)?(l===void 0&&(l=new H(new xe(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:ts(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),ns.copy(_.backgroundRotation),ns.x*=-1,ns.y*=-1,ns.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rg.makeRotationFromEuler(ns)),l.material.toneMapped=xt.getTransfer(g.colorSpace)!==Ct,u===g&&d===g.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new H(new vt(2,2),new In({name:"BackgroundMaterial",uniforms:ts(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:aa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=xt.getTransfer(g.colorSpace)!==Ct,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function Pg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,a=!1;function o(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function l(_){let g=[],y=[],E=[];for(let S=0;S<t;S++)g[S]=0,y[S]=0,E[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:y,attributeDivisors:E,object:_,attributes:{},index:null}}function h(){let _=s.newAttributes;for(let g=0,y=_.length;g<y;g++)_[g]=0}function u(_){d(_,0)}function d(_,g){let y=s.newAttributes,E=s.enabledAttributes,S=s.attributeDivisors;y[_]=1,E[_]===0&&(i.enableVertexAttribArray(_),E[_]=1),S[_]!==g&&(i.vertexAttribDivisor(_,g),S[_]=g)}function p(){let _=s.newAttributes,g=s.enabledAttributes;for(let y=0,E=g.length;y<E;y++)g[y]!==_[y]&&(i.disableVertexAttribArray(y),g[y]=0)}function f(_,g,y,E,S,b,U){U===!0?i.vertexAttribIPointer(_,g,y,S,b):i.vertexAttribPointer(_,g,y,E,S,b)}function v(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(_,g,y,E,S){let b=!1,U=(function(z,I,X){let G=X.wireframe===!0,N=n[z.id];N===void 0&&(N={},n[z.id]=N);let Z=N[I.id];Z===void 0&&(Z={},N[I.id]=Z);let D=Z[G];return D===void 0&&(D=l(i.createVertexArray()),Z[G]=D),D})(E,y,g);s!==U&&(s=U,o(s.object)),b=(function(z,I,X,G){let N=s.attributes,Z=I.attributes,D=0,j=X.getAttributes();for(let ee in j)if(j[ee].location>=0){let ce=N[ee],ae=Z[ee];if(ae===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),ce===void 0||ce.attribute!==ae||ae&&ce.data!==ae.data)return!0;D++}return s.attributesNum!==D||s.index!==G})(_,E,y,S),b&&(function(z,I,X,G){let N={},Z=I.attributes,D=0,j=X.getAttributes();for(let ee in j)if(j[ee].location>=0){let ce=Z[ee];ce===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor));let ae={};ae.attribute=ce,ce&&ce.data&&(ae.data=ce.data),N[ee]=ae,D++}s.attributes=N,s.attributesNum=D,s.index=G})(_,E,y,S),S!==null&&e.update(S,i.ELEMENT_ARRAY_BUFFER),(b||a)&&(a=!1,(function(z,I,X,G){h();let N=G.attributes,Z=X.getAttributes(),D=I.defaultAttributeValues;for(let j in Z){let ee=Z[j];if(ee.location>=0){let ce=N[j];if(ce===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){let ae=ce.normalized,be=ce.itemSize,de=e.get(ce);if(de===void 0)continue;let Ee=de.buffer,fe=de.type,re=de.bytesPerElement,ge=fe===i.INT||fe===i.UNSIGNED_INT||ce.gpuType===Ec;if(ce.isInterleavedBufferAttribute){let ye=ce.data,Be=ye.stride,je=ce.offset;if(ye.isInstancedInterleavedBuffer){for(let A=0;A<ee.locationSize;A++)d(ee.location+A,ye.meshPerAttribute);z.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let A=0;A<ee.locationSize;A++)u(ee.location+A);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let A=0;A<ee.locationSize;A++)f(ee.location+A,be/ee.locationSize,fe,ae,Be*re,(je+be/ee.locationSize*A)*re,ge)}else{if(ce.isInstancedBufferAttribute){for(let ye=0;ye<ee.locationSize;ye++)d(ee.location+ye,ce.meshPerAttribute);z.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<ee.locationSize;ye++)u(ee.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ye=0;ye<ee.locationSize;ye++)f(ee.location+ye,be/ee.locationSize,fe,ae,be*re,be/ee.locationSize*ye*re,ge)}}else if(D!==void 0){let ae=D[j];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(ee.location,ae);break;case 3:i.vertexAttrib3fv(ee.location,ae);break;case 4:i.vertexAttrib4fv(ee.location,ae);break;default:i.vertexAttrib1fv(ee.location,ae)}}}}p()})(_,g,y,E),S!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(S).buffer))},reset:v,resetDefaultState:m,dispose:function(){v();for(let _ in n){let g=n[_];for(let y in g){let E=g[y];for(let S in E)c(E[S].object),delete E[S];delete g[y]}delete n[_]}},releaseStatesOfGeometry:function(_){if(n[_.id]===void 0)return;let g=n[_.id];for(let y in g){let E=g[y];for(let S in E)c(E[S].object),delete E[S];delete g[y]}delete n[_.id]},releaseStatesOfProgram:function(_){for(let g in n){let y=n[g];if(y[_.id]===void 0)continue;let E=y[_.id];for(let S in E)c(E[S].object),delete E[S];delete y[_.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function Ig(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)r(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function Lg(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Je("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===ai||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==bi&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==si&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function Dg(i){let e=this,t=null,n=0,r=!1,s=!1,a=new $n,o=new lt,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=c.value,p!==!0||v===null){let m=d+4*f,_=u.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,y=d;g!==f;++g,y+=4)a.copy(h[g]).applyMatrix4(_,o),a.normal.toArray(v,y),v[y+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!v)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let _=s?0:n,g=4*_,y=m.clippingState||null;c.value=y,y=l(p,u,g,d);for(let E=0;E!==g;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}}}function Ug(i){let e=new WeakMap;function t(r,s){return s===xc?r.mapping=ca:s===Mc&&(r.mapping=Yr),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===xc||s===Mc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Nl(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var If=[.125,.215,.35,.446,.526,.582],Po=20,Io=new Mo,Lf=new et,Yu=null,Zu=0,Ju=0,Ku=!1,Ng=new T,Uc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Ng}=s;Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,Zu,Ju),this._renderer.xr.enabled=Ku,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),Ju=this._renderer.getActiveMipmapLevel(),Ku=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Kr,format:ai,colorSpace:Vr,depthBuffer:!1},r=Df(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Df(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+If.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=If[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,_=1+v,g=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,E=6,S=3,b=2,U=1,z=new Float32Array(S*E*y),I=new Float32Array(b*E*y),X=new Float32Array(U*E*y);for(let N=0;N<y;N++){let Z=N%3*2/3-1,D=N>2?0:-1,j=[Z,D,0,Z+2/3,D,0,Z+2/3,D+1,0,Z,D,0,Z+2/3,D+1,0,Z,D+1,0];z.set(j,S*E*N),I.set(g,b*E*N);let ee=[N,N,N,N,N,N];X.set(ee,U*E*N)}let G=new Pt;G.setAttribute("position",new bn(z,S)),G.setAttribute("uv",new bn(I,b)),G.setAttribute("faceIndex",new bn(X,U)),l.push(new H(G,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Po),h=new T(0,1,0);return new In({name:"SphericalGaussianBlur",defines:{n:Po,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new In({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new H(new Pt,e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,n,r,s){let a=new nn(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(Lf),l.toneMapping=Ji,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new H(new xe,new cn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,f=!0):(p.color.copy(Lf),f=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[m],s.y,s.z)):_===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[m]));let g=this._cubeSize;da(r,_*g,m>2?g:0,g,g),l.setRenderTarget(r),f&&l.render(d,a),l.render(e,a)}l.toneMapping=u,l.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===ca||e.mapping===Yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;da(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Io)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h)*(.05+.95*l),{_lodMax:d}=this,p=this._sizeLods[n],f=3*p*(n>d-4?n-d+4:0),v=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=d-t,da(s,f,v,3*p,2*p),r.setRenderTarget(s),r.render(o,Io),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-n,da(e,f,v,3*p,2*p),r.setRenderTarget(e),r.render(o,Io)}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=l;let u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Po;v>Po&&Je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],_=0;for(let E=0;E<Po;++E){let S=E/f,b=Math.exp(-S*S/2);m.push(b),E===0?_+=b:E<v&&(_+=2*b)}for(let E=0;E<m.length;E++)m[E]=m[E]/_;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let y=this._sizeLods[r];da(t,3*y*(r>g-4?r-g+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,Io)}};function Df(i,e,t){let n=new vi(i,e,t);return n.texture.mapping=wo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function da(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Uf(){return new In({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Nf(){return new In({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Nc(){return`

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
	`}function kg(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===xc||s===Mc,o=s===ca||s===Yr;if(a||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new Uc(i)),c=a?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Uc(i)),c=a?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Bg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&$s("WebGLRenderer: "+n+" extension not supported."),r}}}function Fg(i,e,t,n){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,_=v.length;m<_;m+=3){let g=v[m+0],y=v[m+1],E=v[m+2];l.push(g,y,y,E,E,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,_=v.length/3-1;m<_;m+=3){let g=m+0,y=m+1,E=m+2;l.push(g,y,y,E,E,g)}}}let p=new(Wu(l)?eo:Qa)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Og(i,e,t){let n,r,s;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function Hg(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:ht("WebGLInfo: Unknown draw mode:",n)}}}}function Gg(i,e,t){let n=new WeakMap,r=new Et;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let z=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],g=0;d===!0&&(g=1),p===!0&&(g=2),f===!0&&(g=3);let y=a.attributes.position.count*g,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*E*4*h),b=new Ka(S,y,E,h);b.type=si,b.needsUpdate=!0;let U=4*g;for(let I=0;I<h;I++){let X=v[I],G=m[I],N=_[I],Z=y*E*4*I;for(let D=0;D<X.count;D++){let j=D*U;d===!0&&(r.fromBufferAttribute(X,D),S[Z+j+0]=r.x,S[Z+j+1]=r.y,S[Z+j+2]=r.z,S[Z+j+3]=0),p===!0&&(r.fromBufferAttribute(G,D),S[Z+j+4]=r.x,S[Z+j+5]=r.y,S[Z+j+6]=r.z,S[Z+j+7]=0),f===!0&&(r.fromBufferAttribute(N,D),S[Z+j+8]=r.x,S[Z+j+9]=r.y,S[Z+j+10]=r.z,S[Z+j+11]=N.itemSize===4?r.w:1)}}u={count:h,texture:b,size:new pe(y,E)},n.set(a,u),a.addEventListener("dispose",z)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function zg(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var em=new vn,kf=new oo(1,1),tm=new Ka,nm=new Dl,im=new to,Bf=[],Ff=[],Of=new Float32Array(16),Hf=new Float32Array(9),Gf=new Float32Array(4);function ma(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Bf[r];if(s===void 0&&(s=new Float32Array(r),Bf[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kc(i,e){let t=Ff[e];t===void 0&&(t=new Int32Array(e),Ff[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Vg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function qg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Gf.set(n),i.uniformMatrix2fv(this.addr,!1,Gf),sn(t,n)}}function $g(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Hf.set(n),i.uniformMatrix3fv(this.addr,!1,Hf),sn(t,n)}}function Yg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;Of.set(n),i.uniformMatrix4fv(this.addr,!1,Of),sn(t,n)}}function Zg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function e1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function t1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function n1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function i1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function r1(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(kf.compareFunction=zu,s=kf):s=em,t.setTexture2D(e||s,r)}function s1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||nm,r)}function a1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||im,r)}function o1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||tm,r)}function l1(i,e){i.uniform1fv(this.addr,e)}function c1(i,e){let t=ma(e,this.size,2);i.uniform2fv(this.addr,t)}function h1(i,e){let t=ma(e,this.size,3);i.uniform3fv(this.addr,t)}function u1(i,e){let t=ma(e,this.size,4);i.uniform4fv(this.addr,t)}function d1(i,e){let t=ma(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function p1(i,e){let t=ma(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function f1(i,e){let t=ma(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function m1(i,e){i.uniform1iv(this.addr,e)}function g1(i,e){i.uniform2iv(this.addr,e)}function v1(i,e){i.uniform3iv(this.addr,e)}function y1(i,e){i.uniform4iv(this.addr,e)}function _1(i,e){i.uniform1uiv(this.addr,e)}function x1(i,e){i.uniform2uiv(this.addr,e)}function M1(i,e){i.uniform3uiv(this.addr,e)}function b1(i,e){i.uniform4uiv(this.addr,e)}function E1(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||em,s[a])}function S1(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||nm,s[a])}function T1(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||im,s[a])}function w1(i,e,t){let n=this.cache,r=e.length,s=kc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||tm,s[a])}var ed=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Vg;case 35664:return Wg;case 35665:return Xg;case 35666:return jg;case 35674:return qg;case 35675:return $g;case 35676:return Yg;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Kg;case 35669:case 35673:return Qg;case 5125:return e1;case 36294:return t1;case 36295:return n1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return r1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return o1}})(t.type)}},td=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return l1;case 35664:return c1;case 35665:return h1;case 35666:return u1;case 35674:return d1;case 35675:return p1;case 35676:return f1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return v1;case 35669:case 35673:return y1;case 5125:return _1;case 36294:return x1;case 36295:return M1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return w1}})(t.type)}},nd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Qu=/(\w+)(\])?(\[|\.)?/g;function zf(i,e){i.seq.push(e),i.map[e.id]=e}function A1(i,e,t){let n=i.name,r=n.length;for(Qu.lastIndex=0;;){let s=Qu.exec(n),a=Qu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){zf(t,l===void 0?new ed(o,i,e):new td(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new nd(o),zf(t,h)),t=h}}}var pa=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);A1(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Vf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var R1=0,Wf=new lt;function Xf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function C1(i,e){let t=(function(n){xt._getMatrix(Wf,xt.workingColorSpace,n);let r=`mat3( ${Wf.elements.map(s=>s.toFixed(4))} )`;switch(xt.getTransfer(n)){case Ya:return[r,"LinearTransferOETF"];case Ct:return[r,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function P1(i,e){let t;switch(e){case nf:t="Linear";break;case rf:t="Reinhard";break;case sf:t="Cineon";break;case af:t="ACESFilmic";break;case lf:t="AgX";break;case la:t="Neutral";break;case of:t="Custom";break;default:Je("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Dc=new T;function I1(){return xt.getLuminanceCoefficients(Dc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Dc.x.toFixed(4)}, ${Dc.y.toFixed(4)}, ${Dc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Lo(i){return i!==""}function jf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function id(i){return i.replace(L1,U1)}var D1=new Map;function U1(i,e){let t=ut[e];if(t===void 0){let n=D1.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ut[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return id(t)}var N1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $f(i){return i.replace(N1,k1)}function k1(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yf(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function B1(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(G){let N="SHADOWMAP_TYPE_BASIC";return G.shadowMapType===iu?N="SHADOWMAP_TYPE_PCF":G.shadowMapType===dc?N="SHADOWMAP_TYPE_PCF_SOFT":G.shadowMapType===Mi&&(N="SHADOWMAP_TYPE_VSM"),N})(t),l=(function(G){let N="ENVMAP_TYPE_CUBE";if(G.envMap)switch(G.envMapMode){case ca:case Yr:N="ENVMAP_TYPE_CUBE";break;case wo:N="ENVMAP_TYPE_CUBE_UV"}return N})(t),h=(function(G){let N="ENVMAP_MODE_REFLECTION";return G.envMap&&G.envMapMode===Yr&&(N="ENVMAP_MODE_REFRACTION"),N})(t),u=(function(G){let N="ENVMAP_BLENDING_NONE";if(G.envMap)switch(G.combine){case Qp:N="ENVMAP_BLENDING_MULTIPLY";break;case ef:N="ENVMAP_BLENDING_MIX";break;case tf:N="ENVMAP_BLENDING_ADD"}return N})(t),d=(function(G){let N=G.envMapCubeUVHeight;if(N===null)return null;let Z=Math.log2(N)-2,D=1/N;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:D,maxMip:Z}})(t),p=(function(G){return[G.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",G.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)})(t),f=(function(G){let N=[];for(let Z in G){let D=G[Z];D!==!1&&N.push("#define "+Z+" "+D)}return N.join(`
`)})(s),v=r.createProgram(),m,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Lo).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(m=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?ut.tonemapping_pars_fragment:"",t.toneMapping!==Ji?P1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,C1("linearToOutputTexel",t.outputColorSpace),I1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),a=id(a),a=jf(a,t),a=qf(a,t),o=id(o),o=jf(o,t),o=qf(o,t),a=$f(a),o=$f(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Vu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=g+m+a,E=g+_+o,S=Vf(r,r.VERTEX_SHADER,y),b=Vf(r,r.FRAGMENT_SHADER,E);function U(G){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(v)||"",Z=r.getShaderInfoLog(S)||"",D=r.getShaderInfoLog(b)||"",j=N.trim(),ee=Z.trim(),ce=D.trim(),ae=!0,be=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,S,b);else{let de=Xf(r,S,"vertex"),Ee=Xf(r,b,"fragment");ht("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+de+`
`+Ee)}else j!==""?Je("WebGLProgram: Program Info Log:",j):ee!==""&&ce!==""||(be=!1);be&&(G.diagnostics={runnable:ae,programLog:j,vertexShader:{log:ee,prefix:m},fragmentShader:{log:ce,prefix:_}})}r.deleteShader(S),r.deleteShader(b),z=new pa(r,v),I=(function(N,Z){let D={},j=N.getProgramParameter(Z,N.ACTIVE_ATTRIBUTES);for(let ee=0;ee<j;ee++){let ce=N.getActiveAttrib(Z,ee),ae=ce.name,be=1;ce.type===N.FLOAT_MAT2&&(be=2),ce.type===N.FLOAT_MAT3&&(be=3),ce.type===N.FLOAT_MAT4&&(be=4),D[ae]={type:ce.type,location:N.getAttribLocation(Z,ae),locationSize:be}}return D})(r,v)}let z,I;r.attachShader(v,S),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),this.getUniforms=function(){return z===void 0&&U(this),z},this.getAttributes=function(){return I===void 0&&U(this),I};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(v,37297)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=R1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}var F1=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new sd(e),t.set(e,n)),n}},sd=class{constructor(e){this.id=F1++,this.code=e,this.usedTimes=0}};function O1(i,e,t,n,r,s,a){let o=new Js,c=new rd,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,y,E){let S=y.fog,b=E.geometry,U=m.isMeshStandardMaterial?y.environment:null,z=(m.isMeshStandardMaterial?t:e).get(m.envMap||U),I=z&&z.mapping===wo?z.image.height:null,X=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&Je("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let G=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,N=G!==void 0?G.length:0,Z,D,j,ee,ce=0;if(b.morphAttributes.position!==void 0&&(ce=1),b.morphAttributes.normal!==void 0&&(ce=2),b.morphAttributes.color!==void 0&&(ce=3),X){let O=Ei[X];Z=O.vertexShader,D=O.fragmentShader}else Z=m.vertexShader,D=m.fragmentShader,c.update(m),j=c.getVertexShaderID(m),ee=c.getFragmentShaderID(m);let ae=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),de=E.isInstancedMesh===!0,Ee=E.isBatchedMesh===!0,fe=!!m.map,re=!!m.matcap,ge=!!z,ye=!!m.aoMap,Be=!!m.lightMap,je=!!m.bumpMap,A=!!m.normalMap,w=!!m.displacementMap,V=!!m.emissiveMap,k=!!m.metalnessMap,x=!!m.roughnessMap,C=m.anisotropy>0,W=m.clearcoat>0,F=m.dispersion>0,te=m.iridescence>0,q=m.sheen>0,K=m.transmission>0,ne=C&&!!m.anisotropyMap,le=W&&!!m.clearcoatMap,he=W&&!!m.clearcoatNormalMap,Re=W&&!!m.clearcoatRoughnessMap,Fe=te&&!!m.iridescenceMap,Xe=te&&!!m.iridescenceThicknessMap,st=q&&!!m.sheenColorMap,rt=q&&!!m.sheenRoughnessMap,gt=!!m.specularMap,Ne=!!m.specularColorMap,Ke=!!m.specularIntensityMap,nt=K&&!!m.transmissionMap,Nt=K&&!!m.thicknessMap,we=!!m.gradientMap,_t=!!m.alphaMap,Mt=m.alphaTest>0,Xn=!!m.alphaHash,an=!!m.extensions,kt=Ji;m.toneMapped&&(ae!==null&&ae.isXRRenderTarget!==!0||(kt=i.toneMapping));let Vt={shaderID:X,shaderType:m.type,shaderName:m.name,vertexShader:Z,fragmentShader:D,defines:m.defines,customVertexShaderID:j,customFragmentShaderID:ee,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&E._colorsTexture!==null,instancing:de,instancingColor:de&&E.instanceColor!==null,instancingMorph:de&&E.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Vr,alphaToCoverage:!!m.alphaToCoverage,map:fe,matcap:re,envMap:ge,envMapMode:ge&&z.mapping,envMapCubeUVHeight:I,aoMap:ye,lightMap:Be,bumpMap:je,normalMap:A,displacementMap:d&&w,emissiveMap:V,normalMapObjectSpace:A&&m.normalMapType===ff,normalMapTangentSpace:A&&m.normalMapType===pf,metalnessMap:k,roughnessMap:x,anisotropy:C,anisotropyMap:ne,clearcoat:W,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:F,iridescence:te,iridescenceMap:Fe,iridescenceThicknessMap:Xe,sheen:q,sheenColorMap:st,sheenRoughnessMap:rt,specularMap:gt,specularColorMap:Ne,specularIntensityMap:Ke,transmission:K,transmissionMap:nt,thicknessMap:Nt,gradientMap:we,opaque:m.transparent===!1&&m.blending===Eo&&m.alphaToCoverage===!1,alphaMap:_t,alphaTest:Mt,alphaHash:Xn,combine:m.combine,mapUv:fe&&v(m.map.channel),aoMapUv:ye&&v(m.aoMap.channel),lightMapUv:Be&&v(m.lightMap.channel),bumpMapUv:je&&v(m.bumpMap.channel),normalMapUv:A&&v(m.normalMap.channel),displacementMapUv:w&&v(m.displacementMap.channel),emissiveMapUv:V&&v(m.emissiveMap.channel),metalnessMapUv:k&&v(m.metalnessMap.channel),roughnessMapUv:x&&v(m.roughnessMap.channel),anisotropyMapUv:ne&&v(m.anisotropyMap.channel),clearcoatMapUv:le&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:st&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:rt&&v(m.sheenRoughnessMap.channel),specularMapUv:gt&&v(m.specularMap.channel),specularColorMapUv:Ne&&v(m.specularColorMap.channel),specularIntensityMapUv:Ke&&v(m.specularIntensityMap.channel),transmissionMapUv:nt&&v(m.transmissionMap.channel),thicknessMapUv:Nt&&v(m.thicknessMap.channel),alphaMapUv:_t&&v(m.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(A||C),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!b.attributes.uv&&(fe||_t),fog:!!S,useFog:m.fog===!0,fogExp2:!!S&&S.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:E.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ce,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&g.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:fe&&m.map.isVideoTexture===!0&&xt.getTransfer(m.map.colorSpace)===Ct,decodeVideoTextureEmissive:V&&m.emissiveMap.isVideoTexture===!0&&xt.getTransfer(m.emissiveMap.colorSpace)===Ct,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===St,flipSided:m.side===Tn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:an&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(an&&m.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)})(_,m),(function(g,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),g.push(o.mask)})(_,m),_.push(i.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=f[m.type],g;if(_){let y=Ei[_];g=Tf.clone(y.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g;for(let y=0,E=h.length;y<E;y++){let S=h[y];if(S.cacheKey===_){g=S,++g.usedTimes;break}}return g===void 0&&(g=new B1(i,_,m,s),h.push(g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function H1(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function G1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jf(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||G1),n.length>1&&n.sort(o||Zf),r.length>1&&r.sort(o||Zf)}}}function z1(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Jf,i.set(e,[r])):t>=n.length?(r=new Jf,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function V1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new et};break;case"SpotLight":t={position:new T,direction:new T,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new T,halfWidth:new T,halfHeight:new T}}return i[e.id]=t,t}}}var W1=0;function X1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function j1(i){let e=new V1,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new T);let r=new T,s=new tt,a=new tt;return{setup:function(o){let c=0,l=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,d=0,p=0,f=0,v=0,m=0,_=0,g=0,y=0,E=0,S=0;o.sort(X1);for(let U=0,z=o.length;U<z;U++){let I=o[U],X=I.color,G=I.intensity,N=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=X.r*G,l+=X.g*G,h+=X.b*G;else if(I.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(I.sh.coefficients[D],G);S++}else if(I.isDirectionalLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.directionalShadow[u]=ee,n.directionalShadowMap[u]=Z,n.directionalShadowMatrix[u]=I.shadow.matrix,m++}n.directional[u]=D,u++}else if(I.isSpotLight){let D=e.get(I);D.position.setFromMatrixPosition(I.matrixWorld),D.color.copy(X).multiplyScalar(G),D.distance=N,D.coneCos=Math.cos(I.angle),D.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),D.decay=I.decay,n.spot[p]=D;let j=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[p]=j.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=Z,g++}p++}else if(I.isRectAreaLight){let D=e.get(I);D.color.copy(X).multiplyScalar(G),D.halfWidth.set(.5*I.width,0,0),D.halfHeight.set(0,.5*I.height,0),n.rectArea[f]=D,f++}else if(I.isPointLight){let D=e.get(I);if(D.color.copy(I.color).multiplyScalar(I.intensity),D.distance=I.distance,D.decay=I.decay,I.castShadow){let j=I.shadow,ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=Z,n.pointShadowMatrix[d]=I.shadow.matrix,_++}n.point[d]=D,d++}else if(I.isHemisphereLight){let D=e.get(I);D.skyColor.copy(I.color).multiplyScalar(G),D.groundColor.copy(I.groundColor).multiplyScalar(G),n.hemi[v]=D,v++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let b=n.hash;b.directionalLength===u&&b.pointLength===d&&b.spotLength===p&&b.rectAreaLength===f&&b.hemiLength===v&&b.numDirectionalShadows===m&&b.numPointShadows===_&&b.numSpotShadows===g&&b.numSpotMaps===y&&b.numLightProbes===S||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=g+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,b.directionalLength=u,b.pointLength=d,b.spotLength=p,b.rectAreaLength=f,b.hemiLength=v,b.numDirectionalShadows=m,b.numPointShadows=_,b.numSpotShadows=g,b.numSpotMaps=y,b.numLightProbes=S,n.version=W1++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let _=o[v];if(_.isDirectionalLight){let g=n.directional[l];g.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(f),l++}else if(_.isSpotLight){let g=n.spot[u];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),g.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(f),u++}else if(_.isRectAreaLight){let g=n.rectArea[d];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),g.halfWidth.set(.5*_.width,0,0),g.halfHeight.set(0,.5*_.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let g=n.point[h];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),h++}else if(_.isHemisphereLight){let g=n.hemi[p];g.direction.setFromMatrixPosition(_.matrixWorld),g.direction.transformDirection(f),p++}}},state:n}}function Kf(i){let e=new j1(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function q1(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Kf(i),e.set(t,[s])):n>=r.length?(s=new Kf(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}function $1(i,e,t){let n=new Mr,r=new pe,s=new pe,a=new Et,o=new Ql({depthPacking:df}),c=new ec,l={},h=t.maxTextureSize,u={[aa]:Tn,[Tn]:aa,[St]:St},d=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Pt;f.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new H(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let _=this.type;function g(b,U){let z=e.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new vi(r.x,r.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(U,null,z,d,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(U,null,z,p,v,null)}function y(b,U,z,I){let X=null,G=z.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(G!==void 0)X=G;else if(X=z.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let N=X.uuid,Z=U.uuid,D=l[N];D===void 0&&(D={},l[N]=D);let j=D[Z];j===void 0&&(j=X.clone(),D[Z]=j,U.addEventListener("dispose",S)),X=j}return X.visible=U.visible,X.wireframe=U.wireframe,X.side=I===Mi?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:u[U.side],X.alphaMap=U.alphaMap,X.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,X.map=U.map,X.clipShadows=U.clipShadows,X.clippingPlanes=U.clippingPlanes,X.clipIntersection=U.clipIntersection,X.displacementMap=U.displacementMap,X.displacementScale=U.displacementScale,X.displacementBias=U.displacementBias,X.wireframeLinewidth=U.wireframeLinewidth,X.linewidth=U.linewidth,z.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(i.properties.get(X).light=z),X}function E(b,U,z,I,X){if(b.visible===!1)return;if(b.layers.test(U.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&X===Mi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,b.matrixWorld);let N=e.update(b),Z=b.material;if(Array.isArray(Z)){let D=N.groups;for(let j=0,ee=D.length;j<ee;j++){let ce=D[j],ae=Z[ce.materialIndex];if(ae&&ae.visible){let be=y(b,ae,I,X);b.onBeforeShadow(i,b,U,z,N,be,ce),i.renderBufferDirect(z,null,N,be,b,ce),b.onAfterShadow(i,b,U,z,N,be,ce)}}}else if(Z.visible){let D=y(b,Z,I,X);b.onBeforeShadow(i,b,U,z,N,D,null),i.renderBufferDirect(z,null,N,D,b,null),b.onAfterShadow(i,b,U,z,N,D,null)}}let G=b.children;for(let N=0,Z=G.length;N<Z;N++)E(G[N],U,z,I,X)}function S(b){b.target.removeEventListener("dispose",S);for(let U in l){let z=l[U],I=b.target.uuid;I in z&&(z[I].dispose(),delete z[I])}}this.render=function(b,U,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let I=i.getRenderTarget(),X=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Zi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let Z=_!==Mi&&this.type===Mi,D=_===Mi&&this.type!==Mi;for(let j=0,ee=b.length;j<ee;j++){let ce=b[j],ae=ce.shadow;if(ae===void 0){Je("WebGLShadowMap:",ce,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;r.copy(ae.mapSize);let be=ae.getFrameExtents();if(r.multiply(be),s.copy(ae.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/be.x),r.x=s.x*be.x,ae.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/be.y),r.y=s.y*be.y,ae.mapSize.y=s.y)),ae.map===null||Z===!0||D===!0){let Ee=this.type!==Mi?{minFilter:gi,magFilter:gi}:{};ae.map!==null&&ae.map.dispose(),ae.map=new vi(r.x,r.y,Ee),ae.map.texture.name=ce.name+".shadowMap",ae.camera.updateProjectionMatrix()}i.setRenderTarget(ae.map),i.clear();let de=ae.getViewportCount();for(let Ee=0;Ee<de;Ee++){let fe=ae.getViewport(Ee);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),N.viewport(a),ae.updateMatrices(ce,Ee),n=ae.getFrustum(),E(U,z,ae.camera,ce,this.type)}ae.isPointLightShadow!==!0&&this.type===Mi&&g(ae,z),ae.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(I,X,G)}}var Y1={[pc]:fc,[mc]:yc,[gc]:_c,[To]:vc,[fc]:pc,[yc]:mc,[_c]:gc,[vc]:To};function Z1(i,e){let t=new function(){let x=!1,C=new Et,W=null,F=new Et(0,0,0,0);return{setMask:function(te){W===te||x||(i.colorMask(te,te,te,te),W=te)},setLocked:function(te){x=te},setClear:function(te,q,K,ne,le){le===!0&&(te*=ne,q*=ne,K*=ne),C.set(te,q,K,ne),F.equals(C)===!1&&(i.clearColor(te,q,K,ne),F.copy(C))},reset:function(){x=!1,W=null,F.set(-1,0,0,0)}}},n=new function(){let x=!1,C=!1,W=null,F=null,te=null;return{setReversed:function(q){if(C!==q){let K=e.get("EXT_clip_control");q?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),C=q;let ne=te;te=null,this.setClear(ne)}},getReversed:function(){return C},setTest:function(q){q?ge(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(q){W===q||x||(i.depthMask(q),W=q)},setFunc:function(q){if(C&&(q=Y1[q]),F!==q){switch(q){case pc:i.depthFunc(i.NEVER);break;case fc:i.depthFunc(i.ALWAYS);break;case mc:i.depthFunc(i.LESS);break;case To:i.depthFunc(i.LEQUAL);break;case gc:i.depthFunc(i.EQUAL);break;case vc:i.depthFunc(i.GEQUAL);break;case yc:i.depthFunc(i.GREATER);break;case _c:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}F=q}},setLocked:function(q){x=q},setClear:function(q){te!==q&&(C&&(q=1-q),i.clearDepth(q),te=q)},reset:function(){x=!1,W=null,F=null,te=null,C=!1}}},r=new function(){let x=!1,C=null,W=null,F=null,te=null,q=null,K=null,ne=null,le=null;return{setTest:function(he){x||(he?ge(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(he){C===he||x||(i.stencilMask(he),C=he)},setFunc:function(he,Re,Fe){W===he&&F===Re&&te===Fe||(i.stencilFunc(he,Re,Fe),W=he,F=Re,te=Fe)},setOp:function(he,Re,Fe){q===he&&K===Re&&ne===Fe||(i.stencilOp(he,Re,Fe),q=he,K=Re,ne=Fe)},setLocked:function(he){x=he},setClear:function(he){le!==he&&(i.clearStencil(he),le=he)},reset:function(){x=!1,C=null,W=null,F=null,te=null,q=null,K=null,ne=null,le=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,_=null,g=null,y=null,E=new et(0,0,0),S=0,b=!1,U=null,z=null,I=null,X=null,G=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,D=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=D>=1):j.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=D>=2);let ee=null,ce={},ae=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),de=new Et().fromArray(ae),Ee=new Et().fromArray(be);function fe(x,C,W,F){let te=new Uint8Array(4),q=i.createTexture();i.bindTexture(x,q),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let K=0;K<W;K++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,F,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(C+K,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return q}let re={};function ge(x){o[x]!==!0&&(i.enable(x),o[x]=!0)}function ye(x){o[x]!==!1&&(i.disable(x),o[x]=!1)}re[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ge(i.DEPTH_TEST),n.setFunc(To),w(!1),V(nu),ge(i.CULL_FACE),A(Zi);let Be={[oa]:i.FUNC_ADD,[Up]:i.FUNC_SUBTRACT,[Np]:i.FUNC_REVERSE_SUBTRACT};Be[kp]=i.MIN,Be[Bp]=i.MAX;let je={[Fp]:i.ZERO,[Op]:i.ONE,[Hp]:i.SRC_COLOR,[zp]:i.SRC_ALPHA,[$p]:i.SRC_ALPHA_SATURATE,[jp]:i.DST_COLOR,[Wp]:i.DST_ALPHA,[Gp]:i.ONE_MINUS_SRC_COLOR,[Vp]:i.ONE_MINUS_SRC_ALPHA,[qp]:i.ONE_MINUS_DST_COLOR,[Xp]:i.ONE_MINUS_DST_ALPHA,[Yp]:i.CONSTANT_COLOR,[Zp]:i.ONE_MINUS_CONSTANT_COLOR,[Jp]:i.CONSTANT_ALPHA,[Kp]:i.ONE_MINUS_CONSTANT_ALPHA};function A(x,C,W,F,te,q,K,ne,le,he){if(x!==Zi){if(d===!1&&(ge(i.BLEND),d=!0),x===Dp)te=te||C,q=q||W,K=K||F,C===f&&te===_||(i.blendEquationSeparate(Be[C],Be[te]),f=C,_=te),W===v&&F===m&&q===g&&K===y||(i.blendFuncSeparate(je[W],je[F],je[q],je[K]),v=W,m=F,g=q,y=K),ne.equals(E)!==!1&&le===S||(i.blendColor(ne.r,ne.g,ne.b,le),E.copy(ne),S=le),p=x,b=!1;else if(x!==p||he!==b){if(f===oa&&_===oa||(i.blendEquation(i.FUNC_ADD),f=oa,_=oa),he)switch(x){case Eo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case su:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",x)}else switch(x){case Eo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case So:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ru:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case su:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",x)}v=null,m=null,g=null,y=null,E.set(0,0,0),S=0,p=x,b=he}}else d===!0&&(ye(i.BLEND),d=!1)}function w(x){U!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),U=x)}function V(x){x!==Ip?(ge(i.CULL_FACE),x!==z&&(x===nu?i.cullFace(i.BACK):x===Lp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),z=x}function k(x,C,W){x?(ge(i.POLYGON_OFFSET_FILL),X===C&&G===W||(i.polygonOffset(C,W),X=C,G=W)):ye(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ge,disable:ye,bindFramebuffer:function(x,C){return c[x]!==C&&(i.bindFramebuffer(x,C),c[x]=C,x===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=C),x===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(x,C){let W=h,F=!1;if(x){W=l.get(C),W===void 0&&(W=[],l.set(C,W));let te=x.textures;if(W.length!==te.length||W[0]!==i.COLOR_ATTACHMENT0){for(let q=0,K=te.length;q<K;q++)W[q]=i.COLOR_ATTACHMENT0+q;W.length=te.length,F=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,F=!0);F&&i.drawBuffers(W)},useProgram:function(x){return u!==x&&(i.useProgram(x),u=x,!0)},setBlending:A,setMaterial:function(x,C){x.side===St?ye(i.CULL_FACE):ge(i.CULL_FACE);let W=x.side===Tn;C&&(W=!W),w(W),x.blending===Eo&&x.transparent===!1?A(Zi):A(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),n.setFunc(x.depthFunc),n.setTest(x.depthTest),n.setMask(x.depthWrite),t.setMask(x.colorWrite);let F=x.stencilWrite;r.setTest(F),F&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),k(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:w,setCullFace:V,setLineWidth:function(x){x!==I&&(Z&&i.lineWidth(x),I=x)},setPolygonOffset:k,setScissorTest:function(x){x?ge(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=i.TEXTURE0+N-1),ee!==x&&(i.activeTexture(x),ee=x)},bindTexture:function(x,C,W){W===void 0&&(W=ee===null?i.TEXTURE0+N-1:ee);let F=ce[W];F===void 0&&(F={type:void 0,texture:void 0},ce[W]=F),F.type===x&&F.texture===C||(ee!==W&&(i.activeTexture(W),ee=W),i.bindTexture(x,C||re[x]),F.type=x,F.texture=C)},unbindTexture:function(){let x=ce[ee];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(x){x("WebGLState:",x)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(x){x("WebGLState:",x)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(x){x("WebGLState:",x)}},updateUBOMapping:function(x,C){let W=a.get(C);W===void 0&&(W=new WeakMap,a.set(C,W));let F=W.get(x);F===void 0&&(F=i.getUniformBlockIndex(C,x.name),W.set(x,F))},uniformBlockBinding:function(x,C){let W=a.get(C).get(x);s.get(C)!==W&&(i.uniformBlockBinding(C,W,x.__bindingPointIndex),s.set(C,W))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(x){x("WebGLState:",x)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(x){x("WebGLState:",x)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(x){x("WebGLState:",x)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(x){x("WebGLState:",x)}},scissor:function(x){de.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),de.copy(x))},viewport:function(x){Ee.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),Ee.copy(x))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},ee=null,ce={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,_=null,g=null,y=null,E=new et(0,0,0),S=0,b=!1,U=null,z=null,I=null,X=null,G=null,de.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function J1(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new pe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(A,w){return p?new OffscreenCanvas(A,w):js("canvas")}function v(A,w,V){let k=1,x=je(A);if((x.width>V||x.height>V)&&(k=V/Math.max(x.width,x.height)),k<1){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let C=Math.floor(k*x.width),W=Math.floor(k*x.height);u===void 0&&(u=f(C,W));let F=w?f(C,W):u;return F.width=C,F.height=W,F.getContext("2d").drawImage(A,0,0,C,W),Je("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+C+"x"+W+")."),F}return"data"in A&&Je("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),A}return A}function m(A){return A.generateMipmaps}function _(A){i.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,w,V,k,x=!1){if(A!==null){if(i[A]!==void 0)return i[A];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let C=w;if(w===i.RED&&(V===i.FLOAT&&(C=i.R32F),V===i.HALF_FLOAT&&(C=i.R16F),V===i.UNSIGNED_BYTE&&(C=i.R8)),w===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(C=i.R8UI),V===i.UNSIGNED_SHORT&&(C=i.R16UI),V===i.UNSIGNED_INT&&(C=i.R32UI),V===i.BYTE&&(C=i.R8I),V===i.SHORT&&(C=i.R16I),V===i.INT&&(C=i.R32I)),w===i.RG&&(V===i.FLOAT&&(C=i.RG32F),V===i.HALF_FLOAT&&(C=i.RG16F),V===i.UNSIGNED_BYTE&&(C=i.RG8)),w===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(C=i.RG8UI),V===i.UNSIGNED_SHORT&&(C=i.RG16UI),V===i.UNSIGNED_INT&&(C=i.RG32UI),V===i.BYTE&&(C=i.RG8I),V===i.SHORT&&(C=i.RG16I),V===i.INT&&(C=i.RG32I)),w===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(C=i.RGB8UI),V===i.UNSIGNED_SHORT&&(C=i.RGB16UI),V===i.UNSIGNED_INT&&(C=i.RGB32UI),V===i.BYTE&&(C=i.RGB8I),V===i.SHORT&&(C=i.RGB16I),V===i.INT&&(C=i.RGB32I)),w===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(C=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(C=i.RGBA16UI),V===i.UNSIGNED_INT&&(C=i.RGBA32UI),V===i.BYTE&&(C=i.RGBA8I),V===i.SHORT&&(C=i.RGBA16I),V===i.INT&&(C=i.RGBA32I)),w===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(C=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(C=i.R11F_G11F_B10F)),w===i.RGBA){let W=x?Ya:xt.getTransfer(k);V===i.FLOAT&&(C=i.RGBA32F),V===i.HALF_FLOAT&&(C=i.RGBA16F),V===i.UNSIGNED_BYTE&&(C=W===Ct?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(C=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(C=i.RGB5_A1)}return C!==i.R16F&&C!==i.R32F&&C!==i.RG16F&&C!==i.RG32F&&C!==i.RGBA16F&&C!==i.RGBA32F||e.get("EXT_color_buffer_float"),C}function E(A,w){let V;return A?w===null||w===Jr||w===ua?V=i.DEPTH24_STENCIL8:w===si?V=i.DEPTH32F_STENCIL8:w===ha&&(V=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Jr||w===ua?V=i.DEPTH_COMPONENT24:w===si?V=i.DEPTH_COMPONENT32F:w===ha&&(V=i.DEPTH_COMPONENT16),V}function S(A,w){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==gi&&A.minFilter!==Yn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function b(A){let w=A.target;w.removeEventListener("dispose",b),(function(V){let k=n.get(V);if(k.__webglInit===void 0)return;let x=V.source,C=d.get(x);if(C){let W=C[k.__cacheKey];W.usedTimes--,W.usedTimes===0&&z(V),Object.keys(C).length===0&&d.delete(x)}n.remove(V)})(w),w.isVideoTexture&&h.delete(w)}function U(A){let w=A.target;w.removeEventListener("dispose",U),(function(V){let k=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(k.__webglFramebuffer[C]))for(let W=0;W<k.__webglFramebuffer[C].length;W++)i.deleteFramebuffer(k.__webglFramebuffer[C][W]);else i.deleteFramebuffer(k.__webglFramebuffer[C]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[C])}else{if(Array.isArray(k.__webglFramebuffer))for(let C=0;C<k.__webglFramebuffer.length;C++)i.deleteFramebuffer(k.__webglFramebuffer[C]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let C=0;C<k.__webglColorRenderbuffer.length;C++)k.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[C]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let x=V.textures;for(let C=0,W=x.length;C<W;C++){let F=n.get(x[C]);F.__webglTexture&&(i.deleteTexture(F.__webglTexture),a.memory.textures--),n.remove(x[C])}n.remove(V)})(w)}function z(A){let w=n.get(A);i.deleteTexture(w.__webglTexture);let V=A.source;delete d.get(V)[w.__cacheKey],a.memory.textures--}let I=0;function X(A,w){let V=n.get(A);if(A.isVideoTexture&&(function(k){let x=a.render.frame;h.get(k)!==x&&(h.set(k,x),k.update())})(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){let k=A.image;if(k===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else{if(k.complete!==!1)return void ce(V,A,w);Je("WebGLRenderer: Texture marked for update but image is incomplete")}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+w)}let G={[zr]:i.REPEAT,[_r]:i.CLAMP_TO_EDGE,[Rl]:i.MIRRORED_REPEAT},N={[gi]:i.NEAREST,[cf]:i.NEAREST_MIPMAP_NEAREST,[Ao]:i.NEAREST_MIPMAP_LINEAR,[Yn]:i.LINEAR,[bc]:i.LINEAR_MIPMAP_NEAREST,[Zr]:i.LINEAR_MIPMAP_LINEAR},Z={[mf]:i.NEVER,[Mf]:i.ALWAYS,[gf]:i.LESS,[zu]:i.LEQUAL,[vf]:i.EQUAL,[xf]:i.GEQUAL,[yf]:i.GREATER,[_f]:i.NOTEQUAL};function D(A,w){if(w.type!==si||e.has("OES_texture_float_linear")!==!1||w.magFilter!==Yn&&w.magFilter!==bc&&w.magFilter!==Ao&&w.magFilter!==Zr&&w.minFilter!==Yn&&w.minFilter!==bc&&w.minFilter!==Ao&&w.minFilter!==Zr||Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[w.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[w.wrapT]),A!==i.TEXTURE_3D&&A!==i.TEXTURE_2D_ARRAY||i.texParameteri(A,i.TEXTURE_WRAP_R,G[w.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,N[w.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Z[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===gi||w.minFilter!==Ao&&w.minFilter!==Zr||w.type===si&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function j(A,w){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",b));let k=w.source,x=d.get(k);x===void 0&&(x={},d.set(k,x));let C=(function(W){let F=[];return F.push(W.wrapS),F.push(W.wrapT),F.push(W.wrapR||0),F.push(W.magFilter),F.push(W.minFilter),F.push(W.anisotropy),F.push(W.internalFormat),F.push(W.format),F.push(W.type),F.push(W.generateMipmaps),F.push(W.premultiplyAlpha),F.push(W.flipY),F.push(W.unpackAlignment),F.push(W.colorSpace),F.join()})(w);if(C!==A.__cacheKey){x[C]===void 0&&(x[C]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),x[C].usedTimes++;let W=x[A.__cacheKey];W!==void 0&&(x[A.__cacheKey].usedTimes--,W.usedTimes===0&&z(w)),A.__cacheKey=C,A.__webglTexture=x[C].texture}return V}function ee(A,w,V){return Math.floor(Math.floor(A/V)/w)}function ce(A,w,V){let k=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(k=i.TEXTURE_3D);let x=j(A,w),C=w.source;t.bindTexture(k,A.__webglTexture,i.TEXTURE0+V);let W=n.get(C);if(C.version!==W.__version||x===!0){t.activeTexture(i.TEXTURE0+V);let F=xt.getPrimaries(xt.workingColorSpace),te=w.colorSpace===Qr?null:xt.getPrimaries(w.colorSpace),q=w.colorSpace===Qr||F===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let K=v(w.image,!1,r.maxTextureSize);K=Be(w,K);let ne=s.convert(w.format,w.colorSpace),le=s.convert(w.type),he,Re=y(w.internalFormat,ne,le,w.colorSpace,w.isVideoTexture);D(k,w);let Fe=w.mipmaps,Xe=w.isVideoTexture!==!0,st=W.__version===void 0||x===!0,rt=C.dataReady,gt=S(w,K);if(w.isDepthTexture)Re=E(w.format===Co,w.type),st&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Re,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Re,K.width,K.height,0,ne,le,null));else if(w.isDataTexture)if(Fe.length>0){Xe&&st&&t.texStorage2D(i.TEXTURE_2D,gt,Re,Fe[0].width,Fe[0].height);for(let Ne=0,Ke=Fe.length;Ne<Ke;Ne++)he=Fe[Ne],Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,Ne,0,0,he.width,he.height,ne,le,he.data):t.texImage2D(i.TEXTURE_2D,Ne,Re,he.width,he.height,0,ne,le,he.data);w.generateMipmaps=!1}else Xe?(st&&t.texStorage2D(i.TEXTURE_2D,gt,Re,K.width,K.height),rt&&(function(Ne,Ke,nt,Nt){let we=Ne.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ke.width,Ke.height,nt,Nt,Ke.data);else{we.sort((kt,Vt)=>kt.start-Vt.start);let _t=0;for(let kt=1;kt<we.length;kt++){let Vt=we[_t],O=we[kt],oi=Vt.start+Vt.count,li=ee(O.start,Ke.width,4),Lt=ee(Vt.start,Ke.width,4);O.start<=oi+1&&li===Lt&&ee(O.start+O.count-1,Ke.width,4)===li?Vt.count=Math.max(Vt.count,O.start+O.count-Vt.start):(++_t,we[_t]=O)}we.length=_t+1;let Mt=i.getParameter(i.UNPACK_ROW_LENGTH),Xn=i.getParameter(i.UNPACK_SKIP_PIXELS),an=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,Ke.width);for(let kt=0,Vt=we.length;kt<Vt;kt++){let O=we[kt],oi=Math.floor(O.start/4),li=Math.ceil(O.count/4),Lt=oi%Ke.width,ar=Math.floor(oi/Ke.width),Pr=li;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,ar),t.texSubImage2D(i.TEXTURE_2D,0,Lt,ar,Pr,1,nt,Nt,Ke.data)}Ne.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Mt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xn),i.pixelStorei(i.UNPACK_SKIP_ROWS,an)}})(w,K,ne,le)):t.texImage2D(i.TEXTURE_2D,0,Re,K.width,K.height,0,ne,le,K.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xe&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Re,Fe[0].width,Fe[0].height,K.depth);for(let Ne=0,Ke=Fe.length;Ne<Ke;Ne++)if(he=Fe[Ne],w.format!==ai)if(ne!==null)if(Xe){if(rt)if(w.layerUpdates.size>0){let nt=$u(he.width,he.height,w.format,w.type);for(let Nt of w.layerUpdates){let we=he.data.subarray(Nt*nt/he.data.BYTES_PER_ELEMENT,(Nt+1)*nt/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ne,0,0,Nt,he.width,he.height,1,ne,we)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ne,0,0,0,he.width,he.height,K.depth,ne,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ne,Re,he.width,he.height,K.depth,0,he.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?rt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ne,0,0,0,he.width,he.height,K.depth,ne,le,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ne,Re,he.width,he.height,K.depth,0,ne,le,he.data)}else{Xe&&st&&t.texStorage2D(i.TEXTURE_2D,gt,Re,Fe[0].width,Fe[0].height);for(let Ne=0,Ke=Fe.length;Ne<Ke;Ne++)he=Fe[Ne],w.format!==ai?ne!==null?Xe?rt&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ne,0,0,he.width,he.height,ne,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Ne,Re,he.width,he.height,0,he.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,Ne,0,0,he.width,he.height,ne,le,he.data):t.texImage2D(i.TEXTURE_2D,Ne,Re,he.width,he.height,0,ne,le,he.data)}else if(w.isDataArrayTexture)if(Xe){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Re,K.width,K.height,K.depth),rt)if(w.layerUpdates.size>0){let Ne=$u(K.width,K.height,w.format,w.type);for(let Ke of w.layerUpdates){let nt=K.data.subarray(Ke*Ne/K.data.BYTES_PER_ELEMENT,(Ke+1)*Ne/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ke,K.width,K.height,1,ne,le,nt)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ne,le,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,K.width,K.height,K.depth,0,ne,le,K.data);else if(w.isData3DTexture)Xe?(st&&t.texStorage3D(i.TEXTURE_3D,gt,Re,K.width,K.height,K.depth),rt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ne,le,K.data)):t.texImage3D(i.TEXTURE_3D,0,Re,K.width,K.height,K.depth,0,ne,le,K.data);else if(w.isFramebufferTexture){if(st)if(Xe)t.texStorage2D(i.TEXTURE_2D,gt,Re,K.width,K.height);else{let Ne=K.width,Ke=K.height;for(let nt=0;nt<gt;nt++)t.texImage2D(i.TEXTURE_2D,nt,Re,Ne,Ke,0,ne,le,null),Ne>>=1,Ke>>=1}}else if(Fe.length>0){if(Xe&&st){let Ne=je(Fe[0]);t.texStorage2D(i.TEXTURE_2D,gt,Re,Ne.width,Ne.height)}for(let Ne=0,Ke=Fe.length;Ne<Ke;Ne++)he=Fe[Ne],Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,Ne,0,0,ne,le,he):t.texImage2D(i.TEXTURE_2D,Ne,Re,ne,le,he);w.generateMipmaps=!1}else if(Xe){if(st){let Ne=je(K);t.texStorage2D(i.TEXTURE_2D,gt,Re,Ne.width,Ne.height)}rt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,le,K)}else t.texImage2D(i.TEXTURE_2D,0,Re,ne,le,K);m(w)&&_(k),W.__version=C.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ae(A,w,V,k,x,C){let W=s.convert(V.format,V.colorSpace),F=s.convert(V.type),te=y(V.internalFormat,W,F,V.colorSpace),q=n.get(w),K=n.get(V);if(K.__renderTarget=w,!q.__hasExternalTextures){let ne=Math.max(1,w.width>>C),le=Math.max(1,w.height>>C);x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?t.texImage3D(x,C,te,ne,le,w.depth,0,W,F,null):t.texImage2D(x,C,te,ne,le,0,W,F,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,x,K.__webglTexture,0,ge(w)):(x===i.TEXTURE_2D||x>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,x,K.__webglTexture,C),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(A,w,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),w.depthBuffer){let k=w.depthTexture,x=k&&k.isDepthTexture?k.type:null,C=E(w.stencilBuffer,x),W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,F=ge(w);ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,F,C,w.width,w.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,F,C,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,C,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,A)}else{let k=w.textures;for(let x=0;x<k.length;x++){let C=k[x],W=s.convert(C.format,C.colorSpace),F=s.convert(C.type),te=y(C.internalFormat,W,F,C.colorSpace),q=ge(w);V&&ye(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,te,w.width,w.height):ye(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,te,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,te,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!w.depthTexture||!w.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(w.depthTexture);V.__renderTarget=w,V.__webglTexture&&w.depthTexture.image.width===w.width&&w.depthTexture.image.height===w.height||(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X(w.depthTexture,0);let k=V.__webglTexture,x=ge(w);if(w.depthTexture.format===Ro)ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else{if(w.depthTexture.format!==Co)throw new Error("Unknown depthTexture format");ye(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0)}}function Ee(A){let w=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),k){let x=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,k.removeEventListener("dispose",x)};k.addEventListener("dispose",x),w.__depthDisposeCallback=x}w.__boundDepthTexture=k}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let k=A.texture.mipmaps;k&&k.length>0?de(w.__webglFramebuffer[0],A):de(w.__webglFramebuffer,A)}else if(V){w.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[k]),w.__webglDepthbuffer[k]===void 0)w.__webglDepthbuffer[k]=i.createRenderbuffer(),be(w.__webglDepthbuffer[k],A,!1);else{let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=w.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,C)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),be(w.__webglDepthbuffer,A,!1);else{let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,C)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let fe=[],re=[];function ge(A){return Math.min(r.maxSamples,A.samples)}function ye(A){let w=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Be(A,w){let V=A.colorSpace,k=A.format,x=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Vr&&V!==Qr&&(xt.getTransfer(V)===Ct?k===ai&&x===bi||Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",V)),w}function je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=function(){let A=I;return A>=r.maxTextures&&Je("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A},this.resetTextureUnits=function(){I=0},this.setTexture2D=X,this.setTexture2DArray=function(A,w){let V=n.get(A);A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version?ce(V,A,w):(A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null),t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+w))},this.setTexture3D=function(A,w){let V=n.get(A);A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version?ce(V,A,w):t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+w)},this.setTextureCube=function(A,w){let V=n.get(A);A.version>0&&V.__version!==A.version?(function(k,x,C){if(x.image.length!==6)return;let W=j(k,x),F=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+C);let te=n.get(F);if(F.version!==te.__version||W===!0){t.activeTexture(i.TEXTURE0+C);let q=xt.getPrimaries(xt.workingColorSpace),K=x.colorSpace===Qr?null:xt.getPrimaries(x.colorSpace),ne=x.colorSpace===Qr||q===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let le=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,Re=[];for(let we=0;we<6;we++)Re[we]=le||he?he?x.image[we].image:x.image[we]:v(x.image[we],!0,r.maxCubemapSize),Re[we]=Be(x,Re[we]);let Fe=Re[0],Xe=s.convert(x.format,x.colorSpace),st=s.convert(x.type),rt=y(x.internalFormat,Xe,st,x.colorSpace),gt=x.isVideoTexture!==!0,Ne=te.__version===void 0||W===!0,Ke=F.dataReady,nt,Nt=S(x,Fe);if(D(i.TEXTURE_CUBE_MAP,x),le){gt&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,rt,Fe.width,Fe.height);for(let we=0;we<6;we++){nt=Re[we].mipmaps;for(let _t=0;_t<nt.length;_t++){let Mt=nt[_t];x.format!==ai?Xe!==null?gt?Ke&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,_t,0,0,Mt.width,Mt.height,Xe,Mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,_t,rt,Mt.width,Mt.height,0,Mt.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,_t,0,0,Mt.width,Mt.height,Xe,st,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,_t,rt,Mt.width,Mt.height,0,Xe,st,Mt.data)}}}else{if(nt=x.mipmaps,gt&&Ne){nt.length>0&&Nt++;let we=je(Re[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,rt,we.width,we.height)}for(let we=0;we<6;we++)if(he){gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Re[we].width,Re[we].height,Xe,st,Re[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,rt,Re[we].width,Re[we].height,0,Xe,st,Re[we].data);for(let _t=0;_t<nt.length;_t++){let Mt=nt[_t].image[we].image;gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,_t+1,0,0,Mt.width,Mt.height,Xe,st,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,_t+1,rt,Mt.width,Mt.height,0,Xe,st,Mt.data)}}else{gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Xe,st,Re[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,rt,Xe,st,Re[we]);for(let _t=0;_t<nt.length;_t++){let Mt=nt[_t];gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,_t+1,0,0,Xe,st,Mt.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,_t+1,rt,Xe,st,Mt.image[we])}}}m(x)&&_(i.TEXTURE_CUBE_MAP),te.__version=F.version,x.onUpdate&&x.onUpdate(x)}k.__version=x.version})(V,A,w):t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+w)},this.rebindTextures=function(A,w,V){let k=n.get(A);w!==void 0&&ae(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Ee(A)},this.setupRenderTarget=function(A){let w=A.texture,V=n.get(A),k=n.get(w);A.addEventListener("dispose",U);let x=A.textures,C=A.isWebGLCubeRenderTarget===!0,W=x.length>1;if(W||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=w.version,a.memory.textures++),C){V.__webglFramebuffer=[];for(let F=0;F<6;F++)if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[F]=[];for(let te=0;te<w.mipmaps.length;te++)V.__webglFramebuffer[F][te]=i.createFramebuffer()}else V.__webglFramebuffer[F]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let F=0;F<w.mipmaps.length;F++)V.__webglFramebuffer[F]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(W)for(let F=0,te=x.length;F<te;F++){let q=n.get(x[F]);q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ye(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let F=0;F<x.length;F++){let te=x[F];V.__webglColorRenderbuffer[F]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[F]);let q=s.convert(te.format,te.colorSpace),K=s.convert(te.type),ne=y(te.internalFormat,q,K,te.colorSpace,A.isXRRenderTarget===!0),le=ge(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ne,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+F,i.RENDERBUFFER,V.__webglColorRenderbuffer[F])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),be(V.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),D(i.TEXTURE_CUBE_MAP,w);for(let F=0;F<6;F++)if(w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)ae(V.__webglFramebuffer[F][te],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,te);else ae(V.__webglFramebuffer[F],A,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0);m(w)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(W){for(let F=0,te=x.length;F<te;F++){let q=x[F],K=n.get(q),ne=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ne=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,K.__webglTexture),D(ne,q),ae(V.__webglFramebuffer,A,q,i.COLOR_ATTACHMENT0+F,ne,0),m(q)&&_(ne)}t.unbindTexture()}else{let F=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(F=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(F,k.__webglTexture),D(F,w),w.mipmaps&&w.mipmaps.length>0)for(let te=0;te<w.mipmaps.length;te++)ae(V.__webglFramebuffer[te],A,w,i.COLOR_ATTACHMENT0,F,te);else ae(V.__webglFramebuffer,A,w,i.COLOR_ATTACHMENT0,F,0);m(w)&&_(F),t.unbindTexture()}A.depthBuffer&&Ee(A)},this.updateRenderTargetMipmap=function(A){let w=A.textures;for(let V=0,k=w.length;V<k;V++){let x=w[V];if(m(x)){let C=g(A),W=n.get(x).__webglTexture;t.bindTexture(C,W),_(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(A){if(A.samples>0){if(ye(A)===!1){let w=A.textures,V=A.width,k=A.height,x=i.COLOR_BUFFER_BIT,C=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(A),F=w.length>1;if(F)for(let q=0;q<w.length;q++)t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer);let te=A.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let q=0;q<w.length;q++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(x|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(x|=i.STENCIL_BUFFER_BIT)),F){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let K=n.get(w[q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,V,k,0,0,V,k,x,i.NEAREST),c===!0&&(fe.length=0,re.length=0,fe.push(i.COLOR_ATTACHMENT0+q),A.depthBuffer&&A.resolveDepthBuffer===!1&&(fe.push(C),re.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),F)for(let q=0;q<w.length;q++){t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let K=n.get(w[q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let w=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}},this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ye}function K1(i,e){return{convert:function(t,n=Qr){let r,s=xt.getTransfer(n);if(t===bi)return i.UNSIGNED_BYTE;if(t===Sc)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(t===cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===ou)return i.BYTE;if(t===lu)return i.SHORT;if(t===ha)return i.UNSIGNED_SHORT;if(t===Ec)return i.INT;if(t===Jr)return i.UNSIGNED_INT;if(t===si)return i.FLOAT;if(t===Kr)return i.HALF_FLOAT;if(t===hf)return i.ALPHA;if(t===uf)return i.RGB;if(t===ai)return i.RGBA;if(t===Ro)return i.DEPTH_COMPONENT;if(t===Co)return i.DEPTH_STENCIL;if(t===wc)return i.RED;if(t===Ac)return i.RED_INTEGER;if(t===uu)return i.RG;if(t===du)return i.RG_INTEGER;if(t===pu)return i.RGBA_INTEGER;if(t===Rc||t===Cc||t===Pc||t===Ic)if(s===Ct){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Rc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Cc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Rc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Cc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Pc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Ic)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===fu||t===mu||t===gu||t===vu){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===fu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===mu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===gu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===vu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===yu||t===_u||t===xu){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===yu||t===_u)return s===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===xu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Mu||t===bu||t===Eu||t===Su||t===Tu||t===wu||t===Au||t===Ru||t===Cu||t===Pu||t===Iu||t===Lu||t===Du||t===Uu){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Mu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===bu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Eu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Su)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===Tu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===wu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Au)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Ru)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Cu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Pu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===Iu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Lu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Du)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Uu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Nu||t===ku||t===Bu){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Nu)return s===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===ku)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Bu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Fu||t===Ou||t===Hu||t===Gu){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Fu)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Ou)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Hu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ua?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var ad=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new lo(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new In({vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},od=class extends ji{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,v=typeof XRWebGLBinding<"u",m=new ad,_={},g=t.getContextAttributes(),y=null,E=null,S=[],b=[],U=new pe,z=null,I=new nn;I.viewport=new Et;let X=new nn;X.viewport=new Et;let G=[I,X],N=new uc,Z=null,D=null;function j(re){let ge=b.indexOf(re.inputSource);if(ge===-1)return;let ye=S[ge];ye!==void 0&&(ye.update(re.inputSource,re.frame,l||a),ye.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",ce);for(let re=0;re<S.length;re++){let ge=b[re];ge!==null&&(b[re]=null,S[re].disconnect(ge))}Z=null,D=null,m.reset();for(let re in _)delete _[re];e.setRenderTarget(y),p=null,d=null,u=null,r=null,E=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}function ce(re){for(let ge=0;ge<re.removed.length;ge++){let ye=re.removed[ge],Be=b.indexOf(ye);Be>=0&&(b[Be]=null,S[Be].disconnect(ye))}for(let ge=0;ge<re.added.length;ge++){let ye=re.added[ge],Be=b.indexOf(ye);if(Be===-1){for(let A=0;A<S.length;A++){if(A>=b.length){b.push(ye),Be=A;break}if(b[A]===null){b[A]=ye,Be=A;break}}if(Be===-1)break}let je=S[Be];je&&je.connect(ye)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=S[re];return ge===void 0&&(ge=new Qs,S[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=S[re];return ge===void 0&&(ge=new Qs,S[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=S[re];return ge===void 0&&(ge=new Qs,S[re]=ge),ge.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(U),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ye=null,Be=null;g.depth&&(Be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=g.stencil?Co:Ro,ye=g.stencil?ua:Jr);let je={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(je),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new vi(d.textureWidth,d.textureHeight,{format:ai,type:bi,depthTexture:new oo(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new vi(p.framebufferWidth,p.framebufferHeight,{format:ai,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let ae=new T,be=new T;function de(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ge=re.near,ye=re.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),N.near=X.near=I.near=ge,N.far=X.far=I.far=ye,Z===N.near&&D===N.far||(r.updateRenderState({depthNear:N.near,depthFar:N.far}),Z=N.near,D=N.far),N.layers.mask=6|re.layers.mask,I.layers.mask=3&N.layers.mask,X.layers.mask=5&N.layers.mask;let Be=re.parent,je=N.cameras;de(N,Be);for(let A=0;A<je.length;A++)de(je[A],Be);je.length===2?(function(A,w,V){ae.setFromMatrixPosition(w.matrixWorld),be.setFromMatrixPosition(V.matrixWorld);let k=ae.distanceTo(be),x=w.projectionMatrix.elements,C=V.projectionMatrix.elements,W=x[14]/(x[10]-1),F=x[14]/(x[10]+1),te=(x[9]+1)/x[5],q=(x[9]-1)/x[5],K=(x[8]-1)/x[0],ne=(C[8]+1)/C[0],le=W*K,he=W*ne,Re=k/(-K+ne),Fe=Re*-K;if(w.matrixWorld.decompose(A.position,A.quaternion,A.scale),A.translateX(Fe),A.translateZ(Re),A.matrixWorld.compose(A.position,A.quaternion,A.scale),A.matrixWorldInverse.copy(A.matrixWorld).invert(),x[10]===-1)A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{let Xe=W+Re,st=F+Re,rt=le-Fe,gt=he+(k-Fe),Ne=te*F/st*Xe,Ke=q*F/st*Xe;A.projectionMatrix.makePerspective(rt,gt,Ne,Ke,Xe,st),A.projectionMatrixInverse.copy(A.projectionMatrix).invert()}})(N,I,X):N.projectionMatrix.copy(I.projectionMatrix),(function(A,w,V){V===null?A.matrix.copy(w.matrixWorld):(A.matrix.copy(V.matrixWorld),A.matrix.invert(),A.matrix.multiply(w.matrixWorld)),A.matrix.decompose(A.position,A.quaternion,A.scale),A.updateMatrixWorld(!0),A.projectionMatrix.copy(w.projectionMatrix),A.projectionMatrixInverse.copy(w.projectionMatrixInverse),A.isPerspectiveCamera&&(A.fov=2*Ys*Math.atan(1/A.projectionMatrix.elements[5]),A.zoom=1)})(re,N,Be)},this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(re){c=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(N)},this.getCameraTexture=function(re){return _[re]};let Ee=null,fe=new Qf;fe.setAnimationLoop(function(re,ge){if(h=ge.getViewerPose(l||a),f=ge,h!==null){let ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Be=!1;ye.length!==N.cameras.length&&(N.cameras.length=0,Be=!0);for(let A=0;A<ye.length;A++){let w=ye[A],V=null;if(p!==null)V=p.getViewport(w);else{let x=u.getViewSubImage(d,w);V=x.viewport,A===0&&(e.setRenderTargetTextures(E,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(E))}let k=G[A];k===void 0&&(k=new nn,k.layers.enable(A),k.viewport=new Et,G[A]=k),k.matrix.fromArray(w.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(w.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(V.x,V.y,V.width,V.height),A===0&&(N.matrix.copy(k.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Be===!0&&N.cameras.push(k)}let je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let A=u.getDepthInformation(ye[0]);A&&A.isValid&&A.texture&&m.init(A,r.renderState)}if(je&&je.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<ye.length;A++){let w=ye[A].camera;if(w){let V=_[w];V||(V=new lo,_[w]=V);let k=u.getCameraImage(w);V.sourceTexture=k}}}}for(let ye=0;ye<S.length;ye++){let Be=b[ye],je=S[ye];Be!==null&&je!==void 0&&je.update(Be,ge,l||a)}Ee&&Ee(re,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),f=null}),this.setAnimationLoop=function(re){Ee=re},this.dispose=function(){}}},is=new ri,Q1=new tt;function ev(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Tn&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Tn&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,is.copy(c),is.x*=-1,is.y*=-1,is.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),r.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(is)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Xu(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Tn&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function tv(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let _=f[m];if(typeof v=="number"||typeof v=="boolean"){if(_!==v)return f[m]=v,!0}else if(_.equals(v)===!1)return _.copy(v),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(m){let _=m.uniforms,g=0,y=16;for(let S=0,b=_.length;S<b;S++){let U=Array.isArray(_[S])?_[S]:[_[S]];for(let z=0,I=U.length;z<I;z++){let X=U[z],G=Array.isArray(X.value)?X.value:[X.value];for(let N=0,Z=G.length;N<Z;N++){let D=l(G[N]),j=g%y,ee=j%D.boundary,ce=j+ee;g+=ee,ce!==0&&y-ce<D.storage&&(g+=y-ce),X.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=g,g+=D.storage}}}let E=g%y;E>0&&(g+=y-E),m.__size=g,m.__cache={}})(u),p=(function(m){let _=(function(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=_;let g=i.createBuffer(),y=m.__size,E=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,g),g})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&((function(m){let _=r[m.id],g=m.uniforms,y=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let E=0,S=g.length;E<S;E++){let b=Array.isArray(g[E])?g[E]:[g[E]];for(let U=0,z=b.length;U<z;U++){let I=b[U];if(c(I,E,U,y)===!0){let X=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],N=0;for(let Z=0;Z<G.length;Z++){let D=G[Z],j=l(D);typeof D=="number"||typeof D=="boolean"?(I.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,X+N,I.__data)):D.isMatrix3?(I.__data[0]=D.elements[0],I.__data[1]=D.elements[1],I.__data[2]=D.elements[2],I.__data[3]=0,I.__data[4]=D.elements[3],I.__data[5]=D.elements[4],I.__data[6]=D.elements[5],I.__data[7]=0,I.__data[8]=D.elements[6],I.__data[9]=D.elements[7],I.__data[10]=D.elements[8],I.__data[11]=0):(D.toArray(I.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var nv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Ki=null,fa=class{constructor(e={}){let{canvas:t=bf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Set([pu,du,Ac]),v=new Set([bi,Jr,ha,ua,Sc,Tc]),m=new Uint32Array(4),_=new Int32Array(4),g=null,y=null,E=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,U=!1;this._outputColorSpace=Rt;let z=0,I=0,X=null,G=-1,N=null,Z=new Et,D=new Et,j=null,ee=new et(0),ce=0,ae=t.width,be=t.height,de=1,Ee=null,fe=null,re=new Et(0,0,ae,be),ge=new Et(0,0,ae,be),ye=!1,Be=new Mr,je=!1,A=!1,w=new tt,V=new T,k=new Et,x={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},C=!1;function W(){return X===null?de:1}let F,te,q,K,ne,le,he,Re,Fe,Xe,st,rt,gt,Ne,Ke,nt,Nt,we,_t,Mt,Xn,an,kt,Vt,O=n;function oi(R,J){return t.getContext(R,J)}try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",ar,!1),t.addEventListener("webglcontextrestored",Pr,!1),t.addEventListener("webglcontextcreationerror",vs,!1),O===null){let J="webgl2";if(O=oi(J,R),O===null)throw oi(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}function li(){F=new Bg(O),F.init(),an=new K1(O,F),te=new Lg(O,F,e,an),q=new Z1(O,F),te.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),K=new Hg(O),ne=new H1,le=new J1(O,F,q,ne,te,an,K),he=new Ug(b),Re=new kg(b),Fe=new Ag(O),kt=new Pg(O,Fe),Xe=new Fg(O,Fe,K,kt),st=new zg(O,Xe,Fe,K),_t=new Gg(O,te,le),nt=new Dg(ne),rt=new O1(b,he,Re,F,te,kt,nt),gt=new ev(b,ne),Ne=new z1,Ke=new q1(F),we=new Cg(b,he,Re,q,st,p,c),Nt=new $1(b,st,te),Vt=new tv(O,K,te,q),Mt=new Ig(O,F,K),Xn=new Og(O,F,K),K.programs=rt.programs,b.capabilities=te,b.extensions=F,b.properties=ne,b.renderLists=Ne,b.shadowMap=Nt,b.state=q,b.info=K}li();let Lt=new od(b,O);function ar(R){R.preventDefault(),Ja("WebGLRenderer: Context Lost."),U=!0}function Pr(){Ja("WebGLRenderer: Context Restored."),U=!1;let R=K.autoReset,J=Nt.enabled,ie=Nt.autoUpdate,oe=Nt.needsUpdate,Q=Nt.type;li(),K.autoReset=R,Nt.enabled=J,Nt.autoUpdate=ie,Nt.needsUpdate=oe,Nt.type=Q}function vs(R){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ta(R){let J=R.target;J.removeEventListener("dispose",Ta),(function(ie){(function(oe){let Q=ne.get(oe).programs;Q!==void 0&&(Q.forEach(function(me){rt.releaseProgram(me)}),oe.isShaderMaterial&&rt.releaseShaderCache(oe))})(ie),ne.remove(ie)})(J)}function ys(R,J,ie){R.transparent===!0&&R.side===St&&R.forceSinglePass===!1?(R.side=Tn,R.needsUpdate=!0,Ur(R,J,ie),R.side=aa,R.needsUpdate=!0,Ur(R,J,ie),R.side=St):Ur(R,J,ie)}this.xr=Lt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=F.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=F.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(R){R!==void 0&&(de=R,this.setSize(ae,be,!1))},this.getSize=function(R){return R.set(ae,be)},this.setSize=function(R,J,ie=!0){Lt.isPresenting?Je("WebGLRenderer: Can't change size while VR device is presenting."):(ae=R,be=J,t.width=Math.floor(R*de),t.height=Math.floor(J*de),ie===!0&&(t.style.width=R+"px",t.style.height=J+"px"),this.setViewport(0,0,R,J))},this.getDrawingBufferSize=function(R){return R.set(ae*de,be*de).floor()},this.setDrawingBufferSize=function(R,J,ie){ae=R,be=J,de=ie,t.width=Math.floor(R*ie),t.height=Math.floor(J*ie),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,J,ie,oe){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,J,ie,oe),q.viewport(Z.copy(re).multiplyScalar(de).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,J,ie,oe){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,J,ie,oe),q.scissor(D.copy(ge).multiplyScalar(de).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){q.setScissorTest(ye=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,ie=!0){let oe=0;if(R){let Q=!1;if(X!==null){let me=X.texture.format;Q=f.has(me)}if(Q){let me=X.texture.type,Ce=v.has(me),Le=we.getClearColor(),Oe=we.getClearAlpha(),qe=Le.r,We=Le.g,$e=Le.b;Ce?(m[0]=qe,m[1]=We,m[2]=$e,m[3]=Oe,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=qe,_[1]=We,_[2]=$e,_[3]=Oe,O.clearBufferiv(O.COLOR,0,_))}else oe|=O.COLOR_BUFFER_BIT}J&&(oe|=O.DEPTH_BUFFER_BIT),ie&&(oe|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ar,!1),t.removeEventListener("webglcontextrestored",Pr,!1),t.removeEventListener("webglcontextcreationerror",vs,!1),we.dispose(),Ne.dispose(),Ke.dispose(),ne.dispose(),he.dispose(),Re.dispose(),st.dispose(),kt.dispose(),Vt.dispose(),rt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",wa),Lt.removeEventListener("sessionend",Lr),Ot.stop()},this.renderBufferDirect=function(R,J,ie,oe,Q,me){J===null&&(J=x);let Ce=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=(function(Qe,It,Xt,ot,Ze){It.isScene!==!0&&(It=x),le.resetTextureUnits();let on=It.fog,xs=ot.isMeshStandardMaterial?It.environment:null,kr=X===null?b.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Vr,xn=(ot.isMeshStandardMaterial?Re:he).get(ot.envMap||xs),Dn=ot.vertexColors===!0&&!!Xt.attributes.color&&Xt.attributes.color.itemSize===4,ki=!!Xt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Un=!!Xt.morphAttributes.position,Nn=!!Xt.morphAttributes.normal,Bi=!!Xt.morphAttributes.color,Ca=Ji;ot.toneMapped&&(X!==null&&X.isXRRenderTarget!==!0||(Ca=b.toneMapping));let or=Xt.morphAttributes.position||Xt.morphAttributes.normal||Xt.morphAttributes.color,Ms=or!==void 0?or.length:0,dt=ne.get(ot),ph=y.state.lights;if(je===!0&&(A===!0||Qe!==N)){let tn=Qe===N&&ot.id===G;nt.setState(ot,Qe,tn)}let kn=!1;ot.version===dt.__version?dt.needsLights&&dt.lightsStateVersion!==ph.state.version||dt.outputColorSpace!==kr||Ze.isBatchedMesh&&dt.batching===!1?kn=!0:Ze.isBatchedMesh||dt.batching!==!0?Ze.isBatchedMesh&&dt.batchingColor===!0&&Ze.colorTexture===null||Ze.isBatchedMesh&&dt.batchingColor===!1&&Ze.colorTexture!==null||Ze.isInstancedMesh&&dt.instancing===!1?kn=!0:Ze.isInstancedMesh||dt.instancing!==!0?Ze.isSkinnedMesh&&dt.skinning===!1?kn=!0:Ze.isSkinnedMesh||dt.skinning!==!0?Ze.isInstancedMesh&&dt.instancingColor===!0&&Ze.instanceColor===null||Ze.isInstancedMesh&&dt.instancingColor===!1&&Ze.instanceColor!==null||Ze.isInstancedMesh&&dt.instancingMorph===!0&&Ze.morphTexture===null||Ze.isInstancedMesh&&dt.instancingMorph===!1&&Ze.morphTexture!==null||dt.envMap!==xn||ot.fog===!0&&dt.fog!==on?kn=!0:dt.numClippingPlanes===void 0||dt.numClippingPlanes===nt.numPlanes&&dt.numIntersection===nt.numIntersection?(dt.vertexAlphas!==Dn||dt.vertexTangents!==ki||dt.morphTargets!==Un||dt.morphNormals!==Nn||dt.morphColors!==Bi||dt.toneMapping!==Ca||dt.morphTargetsCount!==Ms)&&(kn=!0):kn=!0:kn=!0:kn=!0:kn=!0:(kn=!0,dt.__version=ot.version);let Bn=dt.currentProgram;kn===!0&&(Bn=Ur(ot,It,Ze));let bs=!1,lr=!1,cr=!1,$t=Bn.getUniforms(),An=dt.uniforms;if(q.useProgram(Bn.program)&&(bs=!0,lr=!0,cr=!0),ot.id!==G&&(G=ot.id,lr=!0),bs||N!==Qe){q.buffers.depth.getReversed()&&Qe.reversedDepth!==!0&&(Qe._reversedDepth=!0,Qe.updateProjectionMatrix()),$t.setValue(O,"projectionMatrix",Qe.projectionMatrix),$t.setValue(O,"viewMatrix",Qe.matrixWorldInverse);let tn=$t.map.cameraPosition;tn!==void 0&&tn.setValue(O,V.setFromMatrixPosition(Qe.matrixWorld)),te.logarithmicDepthBuffer&&$t.setValue(O,"logDepthBufFC",2/(Math.log(Qe.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&$t.setValue(O,"isOrthographic",Qe.isOrthographicCamera===!0),N!==Qe&&(N=Qe,lr=!0,cr=!0)}if(Ze.isSkinnedMesh){$t.setOptional(O,Ze,"bindMatrix"),$t.setOptional(O,Ze,"bindMatrixInverse");let tn=Ze.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),$t.setValue(O,"boneTexture",tn.boneTexture,le))}Ze.isBatchedMesh&&($t.setOptional(O,Ze,"batchingTexture"),$t.setValue(O,"batchingTexture",Ze._matricesTexture,le),$t.setOptional(O,Ze,"batchingIdTexture"),$t.setValue(O,"batchingIdTexture",Ze._indirectTexture,le),$t.setOptional(O,Ze,"batchingColorTexture"),Ze._colorsTexture!==null&&$t.setValue(O,"batchingColorTexture",Ze._colorsTexture,le));let Es=Xt.morphAttributes;Es.position===void 0&&Es.normal===void 0&&Es.color===void 0||_t.update(Ze,Xt,Bn),(lr||dt.receiveShadow!==Ze.receiveShadow)&&(dt.receiveShadow=Ze.receiveShadow,$t.setValue(O,"receiveShadow",Ze.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(An.envMap.value=xn,An.flipEnvMap.value=xn.isCubeTexture&&xn.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&It.environment!==null&&(An.envMapIntensity.value=It.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=(Ki===null&&(Ki=new ro(nv,32,32,uu,Kr),Ki.minFilter=Yn,Ki.magFilter=Yn,Ki.wrapS=_r,Ki.wrapT=_r,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki)),lr&&($t.setValue(O,"toneMappingExposure",b.toneMappingExposure),dt.needsLights&&(fn=cr,(Rn=An).ambientLightColor.needsUpdate=fn,Rn.lightProbe.needsUpdate=fn,Rn.directionalLights.needsUpdate=fn,Rn.directionalLightShadows.needsUpdate=fn,Rn.pointLights.needsUpdate=fn,Rn.pointLightShadows.needsUpdate=fn,Rn.spotLights.needsUpdate=fn,Rn.spotLightShadows.needsUpdate=fn,Rn.rectAreaLights.needsUpdate=fn,Rn.hemisphereLights.needsUpdate=fn),on&&ot.fog===!0&&gt.refreshFogUniforms(An,on),gt.refreshMaterialUniforms(An,ot,de,be,y.state.transmissionRenderTarget[Qe.id]),pa.upload(O,Nr(dt),An,le));var Rn,fn;if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(pa.upload(O,Nr(dt),An,le),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&$t.setValue(O,"center",Ze.center),$t.setValue(O,"modelViewMatrix",Ze.modelViewMatrix),$t.setValue(O,"normalMatrix",Ze.normalMatrix),$t.setValue(O,"modelMatrix",Ze.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let tn=ot.uniformsGroups;for(let Pa=0,Ia=tn.length;Pa<Ia;Pa++){let Fi=tn[Pa];Vt.update(Fi,Bn),Vt.bind(Fi,Bn)}}return Bn})(R,J,ie,oe,Q);q.setMaterial(oe,Ce);let Oe=ie.index,qe=1;if(oe.wireframe===!0){if(Oe=Xe.getWireframeAttribute(ie),Oe===void 0)return;qe=2}let We=ie.drawRange,$e=ie.attributes.position,at=We.start*qe,Dt=(We.start+We.count)*qe;me!==null&&(at=Math.max(at,me.start*qe),Dt=Math.min(Dt,(me.start+me.count)*qe)),Oe!==null?(at=Math.max(at,0),Dt=Math.min(Dt,Oe.count)):$e!=null&&(at=Math.max(at,0),Dt=Math.min(Dt,$e.count));let Wt=Dt-at;if(Wt<0||Wt===1/0)return;let wt;kt.setup(Q,oe,Le,ie,Oe);let Ut=Mt;if(Oe!==null&&(wt=Fe.get(Oe),Ut=Xn,Ut.setIndex(wt)),Q.isMesh)oe.wireframe===!0?(q.setLineWidth(oe.wireframeLinewidth*W()),Ut.setMode(O.LINES)):Ut.setMode(O.TRIANGLES);else if(Q.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),q.setLineWidth(Qe*W()),Q.isLineSegments?Ut.setMode(O.LINES):Q.isLineLoop?Ut.setMode(O.LINE_LOOP):Ut.setMode(O.LINE_STRIP)}else Q.isPoints?Ut.setMode(O.POINTS):Q.isSprite&&Ut.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)$s("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(F.get("WEBGL_multi_draw"))Ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Qe=Q._multiDrawStarts,It=Q._multiDrawCounts,Xt=Q._multiDrawCount,ot=Oe?Fe.get(Oe).bytesPerElement:1,Ze=ne.get(oe).currentProgram.getUniforms();for(let on=0;on<Xt;on++)Ze.setValue(O,"_gl_DrawID",on),Ut.render(Qe[on]/ot,It[on])}else if(Q.isInstancedMesh)Ut.renderInstances(at,Wt,Q.count);else if(ie.isInstancedBufferGeometry){let Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,It=Math.min(ie.instanceCount,Qe);Ut.renderInstances(at,Wt,It)}else Ut.render(at,Wt)},this.compile=function(R,J,ie=null){ie===null&&(ie=R),y=Ke.get(ie),y.init(J),S.push(y),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==ie&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();let oe=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let me=Q.material;if(me)if(Array.isArray(me))for(let Ce=0;Ce<me.length;Ce++){let Le=me[Ce];ys(Le,ie,Q),oe.add(Le)}else ys(me,ie,Q),oe.add(me)}),y=S.pop(),oe},this.compileAsync=function(R,J,ie=null){let oe=this.compile(R,J,ie);return new Promise(Q=>{function me(){oe.forEach(function(Ce){ne.get(Ce).currentProgram.isReady()&&oe.delete(Ce)}),oe.size!==0?setTimeout(me,10):Q(R)}F.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ir=null;function wa(){Ot.stop()}function Lr(){Ot.start()}let Ot=new Qf;function Ui(R,J,ie,oe){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){oe&&k.setFromMatrixPosition(R.matrixWorld).applyMatrix4(w);let me=st.update(R),Ce=R.material;Ce.visible&&g.push(R,me,Ce,ie,k.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){let me=st.update(R),Ce=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),k.copy(R.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),k.copy(me.boundingSphere.center)),k.applyMatrix4(R.matrixWorld).applyMatrix4(w)),Array.isArray(Ce)){let Le=me.groups;for(let Oe=0,qe=Le.length;Oe<qe;Oe++){let We=Le[Oe],$e=Ce[We.materialIndex];$e&&$e.visible&&g.push(R,me,$e,ie,k.z,We)}}else Ce.visible&&g.push(R,me,Ce,ie,k.z,null)}}let Q=R.children;for(let me=0,Ce=Q.length;me<Ce;me++)Ui(Q[me],J,ie,oe)}function _s(R,J,ie,oe){let{opaque:Q,transmissive:me,transparent:Ce}=R;y.setupLightsView(ie),je===!0&&nt.setGlobalState(b.clippingPlanes,ie),oe&&q.viewport(Z.copy(oe)),Q.length>0&&Dr(Q,J,ie),me.length>0&&Dr(me,J,ie),Ce.length>0&&Dr(Ce,J,ie),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Aa(R,J,ie,oe){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[oe.id]===void 0&&(y.state.transmissionRenderTarget[oe.id]=new vi(1,1,{generateMipmaps:!0,type:F.has("EXT_color_buffer_half_float")||F.has("EXT_color_buffer_float")?Kr:bi,minFilter:Zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));let Q=y.state.transmissionRenderTarget[oe.id],me=oe.viewport||Z;Q.setSize(me.z*b.transmissionResolutionScale,me.w*b.transmissionResolutionScale);let Ce=b.getRenderTarget(),Le=b.getActiveCubeFace(),Oe=b.getActiveMipmapLevel();b.setRenderTarget(Q),b.getClearColor(ee),ce=b.getClearAlpha(),ce<1&&b.setClearColor(16777215,.5),b.clear(),C&&we.render(ie);let qe=b.toneMapping;b.toneMapping=Ji;let We=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),y.setupLightsView(oe),je===!0&&nt.setGlobalState(b.clippingPlanes,oe),Dr(R,ie,oe),le.updateMultisampleRenderTarget(Q),le.updateRenderTargetMipmap(Q),F.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let at=0,Dt=J.length;at<Dt;at++){let Wt=J[at],{object:wt,geometry:Ut,material:Qe,group:It}=Wt;if(Qe.side===St&&wt.layers.test(oe.layers)){let Xt=Qe.side;Qe.side=Tn,Qe.needsUpdate=!0,ci(wt,ie,oe,Ut,Qe,It),Qe.side=Xt,Qe.needsUpdate=!0,$e=!0}}$e===!0&&(le.updateMultisampleRenderTarget(Q),le.updateRenderTargetMipmap(Q))}b.setRenderTarget(Ce,Le,Oe),b.setClearColor(ee,ce),We!==void 0&&(oe.viewport=We),b.toneMapping=qe}function Dr(R,J,ie){let oe=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,me=R.length;Q<me;Q++){let Ce=R[Q],{object:Le,geometry:Oe,group:qe}=Ce,We=Ce.material;We.allowOverride===!0&&oe!==null&&(We=oe),Le.layers.test(ie.layers)&&ci(Le,J,ie,Oe,We,qe)}}function ci(R,J,ie,oe,Q,me){R.onBeforeRender(b,J,ie,oe,Q,me),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(b,J,ie,oe,R,me),Q.transparent===!0&&Q.side===St&&Q.forceSinglePass===!1?(Q.side=Tn,Q.needsUpdate=!0,b.renderBufferDirect(ie,J,oe,Q,R,me),Q.side=aa,Q.needsUpdate=!0,b.renderBufferDirect(ie,J,oe,Q,R,me),Q.side=St):b.renderBufferDirect(ie,J,oe,Q,R,me),R.onAfterRender(b,J,ie,oe,Q,me)}function Ur(R,J,ie){J.isScene!==!0&&(J=x);let oe=ne.get(R),Q=y.state.lights,me=y.state.shadowsArray,Ce=Q.state.version,Le=rt.getParameters(R,Q.state,me,J,ie),Oe=rt.getProgramCacheKey(Le),qe=oe.programs;oe.environment=R.isMeshStandardMaterial?J.environment:null,oe.fog=J.fog,oe.envMap=(R.isMeshStandardMaterial?Re:he).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",Ta),qe=new Map,oe.programs=qe);let We=qe.get(Oe);if(We!==void 0){if(oe.currentProgram===We&&oe.lightsStateVersion===Ce)return Ra(R,Le),We}else Le.uniforms=rt.getUniforms(R),R.onBeforeCompile(Le,b),We=rt.acquireProgram(Le,Oe),qe.set(Oe,We),oe.uniforms=Le.uniforms;let $e=oe.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||($e.clippingPlanes=nt.uniform),Ra(R,Le),oe.needsLights=(function(at){return at.isMeshLambertMaterial||at.isMeshToonMaterial||at.isMeshPhongMaterial||at.isMeshStandardMaterial||at.isShadowMaterial||at.isShaderMaterial&&at.lights===!0})(R),oe.lightsStateVersion=Ce,oe.needsLights&&($e.ambientLightColor.value=Q.state.ambient,$e.lightProbe.value=Q.state.probe,$e.directionalLights.value=Q.state.directional,$e.directionalLightShadows.value=Q.state.directionalShadow,$e.spotLights.value=Q.state.spot,$e.spotLightShadows.value=Q.state.spotShadow,$e.rectAreaLights.value=Q.state.rectArea,$e.ltc_1.value=Q.state.rectAreaLTC1,$e.ltc_2.value=Q.state.rectAreaLTC2,$e.pointLights.value=Q.state.point,$e.pointLightShadows.value=Q.state.pointShadow,$e.hemisphereLights.value=Q.state.hemi,$e.directionalShadowMap.value=Q.state.directionalShadowMap,$e.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$e.spotShadowMap.value=Q.state.spotShadowMap,$e.spotLightMatrix.value=Q.state.spotLightMatrix,$e.spotLightMap.value=Q.state.spotLightMap,$e.pointShadowMap.value=Q.state.pointShadowMap,$e.pointShadowMatrix.value=Q.state.pointShadowMatrix),oe.currentProgram=We,oe.uniformsList=null,We}function Nr(R){if(R.uniformsList===null){let J=R.currentProgram.getUniforms();R.uniformsList=pa.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Ra(R,J){let ie=ne.get(R);ie.outputColorSpace=J.outputColorSpace,ie.batching=J.batching,ie.batchingColor=J.batchingColor,ie.instancing=J.instancing,ie.instancingColor=J.instancingColor,ie.instancingMorph=J.instancingMorph,ie.skinning=J.skinning,ie.morphTargets=J.morphTargets,ie.morphNormals=J.morphNormals,ie.morphColors=J.morphColors,ie.morphTargetsCount=J.morphTargetsCount,ie.numClippingPlanes=J.numClippingPlanes,ie.numIntersection=J.numClipIntersection,ie.vertexAlphas=J.vertexAlphas,ie.vertexTangents=J.vertexTangents,ie.toneMapping=J.toneMapping}Ot.setAnimationLoop(function(R){Ir&&Ir(R)}),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(R){Ir=R,Lt.setAnimationLoop(R),R===null?Ot.stop():Ot.start()},Lt.addEventListener("sessionstart",wa),Lt.addEventListener("sessionend",Lr),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0)return void ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(U===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(J),J=Lt.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,J,X),y=Ke.get(R,S.length),y.init(J),S.push(y),w.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Be.setFromProjectionMatrix(w,Xi,J.reversedDepth),A=this.localClippingEnabled,je=nt.init(this.clippingPlanes,A),g=Ne.get(R,E.length),g.init(),E.push(g),Lt.enabled===!0&&Lt.isPresenting===!0){let me=b.xr.getDepthSensingMesh();me!==null&&Ui(me,J,-1/0,b.sortObjects)}Ui(R,J,0,b.sortObjects),g.finish(),b.sortObjects===!0&&g.sort(Ee,fe),C=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,C&&we.addToRenderList(g,R),this.info.render.frame++,je===!0&&nt.beginShadows();let ie=y.state.shadowsArray;Nt.render(ie,R,J),je===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=g.opaque,Q=g.transmissive;if(y.setupLights(),J.isArrayCamera){let me=J.cameras;if(Q.length>0)for(let Ce=0,Le=me.length;Ce<Le;Ce++)Aa(oe,Q,R,me[Ce]);C&&we.render(R);for(let Ce=0,Le=me.length;Ce<Le;Ce++){let Oe=me[Ce];_s(g,R,Oe,Oe.viewport)}}else Q.length>0&&Aa(oe,Q,R,J),C&&we.render(R),_s(g,R,J);X!==null&&I===0&&(le.updateMultisampleRenderTarget(X),le.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(b,R,J),kt.resetDefaultState(),G=-1,N=null,S.pop(),S.length>0?(y=S[S.length-1],je===!0&&nt.setGlobalState(b.clippingPlanes,y.state.camera)):y=null,E.pop(),g=E.length>0?E[E.length-1]:null},this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,J,ie){let oe=ne.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ne.get(R.texture).__webglTexture=J,ne.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ie,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,J){let ie=ne.get(R);ie.__webglFramebuffer=J,ie.__useDefaultFramebuffer=J===void 0};let hi=O.createFramebuffer();this.setRenderTarget=function(R,J=0,ie=0){X=R,z=J,I=ie;let oe=!0,Q=null,me=!1,Ce=!1;if(R){let Le=ne.get(R);if(Le.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(O.FRAMEBUFFER,null),oe=!1;else if(Le.__webglFramebuffer===void 0)le.setupRenderTarget(R);else if(Le.__hasExternalTextures)le.rebindTextures(R,ne.get(R.texture).__webglTexture,ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let We=R.depthTexture;if(Le.__boundDepthTexture!==We){if(We!==null&&ne.has(We)&&(R.width!==We.image.width||R.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(R)}}let Oe=R.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);let qe=ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=Array.isArray(qe[J])?qe[J][ie]:qe[J],me=!0):Q=R.samples>0&&le.useMultisampledRTT(R)===!1?ne.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?qe[ie]:qe,Z.copy(R.viewport),D.copy(R.scissor),j=R.scissorTest}else Z.copy(re).multiplyScalar(de).floor(),D.copy(ge).multiplyScalar(de).floor(),j=ye;if(ie!==0&&(Q=hi),q.bindFramebuffer(O.FRAMEBUFFER,Q)&&oe&&q.drawBuffers(R,Q),q.viewport(Z),q.scissor(D),q.setScissorTest(j),me){let Le=ne.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+J,Le.__webglTexture,ie)}else if(Ce){let Le=J;for(let Oe=0;Oe<R.textures.length;Oe++){let qe=ne.get(R.textures[Oe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Oe,qe.__webglTexture,ie,Le)}}else if(R!==null&&ie!==0){let Le=ne.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Le.__webglTexture,ie)}G=-1},this.readRenderTargetPixels=function(R,J,ie,oe,Q,me,Ce,Le=0){if(!R||!R.isWebGLRenderTarget)return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){q.bindFramebuffer(O.FRAMEBUFFER,Oe);try{let qe=R.textures[Le],We=qe.format,$e=qe.type;if(!te.textureFormatReadable(We))return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable($e))return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");J>=0&&J<=R.width-oe&&ie>=0&&ie<=R.height-Q&&(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(J,ie,oe,Q,an.convert(We),an.convert($e),me))}finally{let qe=X!==null?ne.get(X).__webglFramebuffer:null;q.bindFramebuffer(O.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,J,ie,oe,Q,me,Ce,Le=0){if(!R||!R.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){if(J>=0&&J<=R.width-oe&&ie>=0&&ie<=R.height-Q){q.bindFramebuffer(O.FRAMEBUFFER,Oe);let qe=R.textures[Le],We=qe.format,$e=qe.type;if(!te.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(J,ie,oe,Q,an.convert(We),an.convert($e),0);let Dt=X!==null?ne.get(X).__webglFramebuffer:null;q.bindFramebuffer(O.FRAMEBUFFER,Dt);let Wt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Ef(O,Wt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.deleteBuffer(at),O.deleteSync(Wt),me}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,J=null,ie=0){let oe=Math.pow(2,-ie),Q=Math.floor(R.image.width*oe),me=Math.floor(R.image.height*oe),Ce=J!==null?J.x:0,Le=J!==null?J.y:0;le.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,ie,0,0,Ce,Le,Q,me),q.unbindTexture()};let Yo=O.createFramebuffer(),Ni=O.createFramebuffer();this.copyTextureToTexture=function(R,J,ie=null,oe=null,Q=0,me=null){let Ce,Le,Oe,qe,We,$e,at,Dt,Wt;me===null&&(Q!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=Q,Q=0):me=0);let wt=R.isCompressedTexture?R.mipmaps[me]:R.image;if(ie!==null)Ce=ie.max.x-ie.min.x,Le=ie.max.y-ie.min.y,Oe=ie.isBox3?ie.max.z-ie.min.z:1,qe=ie.min.x,We=ie.min.y,$e=ie.isBox3?ie.min.z:0;else{let Dn=Math.pow(2,-Q);Ce=Math.floor(wt.width*Dn),Le=Math.floor(wt.height*Dn),Oe=R.isDataArrayTexture?wt.depth:R.isData3DTexture?Math.floor(wt.depth*Dn):1,qe=0,We=0,$e=0}oe!==null?(at=oe.x,Dt=oe.y,Wt=oe.z):(at=0,Dt=0,Wt=0);let Ut=an.convert(J.format),Qe=an.convert(J.type),It;J.isData3DTexture?(le.setTexture3D(J,0),It=O.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(le.setTexture2DArray(J,0),It=O.TEXTURE_2D_ARRAY):(le.setTexture2D(J,0),It=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,J.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,J.unpackAlignment);let Xt=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ze=O.getParameter(O.UNPACK_SKIP_PIXELS),on=O.getParameter(O.UNPACK_SKIP_ROWS),xs=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qe),O.pixelStorei(O.UNPACK_SKIP_ROWS,We),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$e);let kr=R.isDataArrayTexture||R.isData3DTexture,xn=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){let Dn=ne.get(R),ki=ne.get(J),Un=ne.get(Dn.__renderTarget),Nn=ne.get(ki.__renderTarget);q.bindFramebuffer(O.READ_FRAMEBUFFER,Un.__webglFramebuffer),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,Nn.__webglFramebuffer);for(let Bi=0;Bi<Oe;Bi++)kr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.get(R).__webglTexture,Q,$e+Bi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.get(J).__webglTexture,me,Wt+Bi)),O.blitFramebuffer(qe,We,Ce,Le,at,Dt,Ce,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);q.bindFramebuffer(O.READ_FRAMEBUFFER,null),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||ne.has(R)){let Dn=ne.get(R),ki=ne.get(J);q.bindFramebuffer(O.READ_FRAMEBUFFER,Yo),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ni);for(let Un=0;Un<Oe;Un++)kr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dn.__webglTexture,Q,$e+Un):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dn.__webglTexture,Q),xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ki.__webglTexture,me,Wt+Un):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,ki.__webglTexture,me),Q!==0?O.blitFramebuffer(qe,We,Ce,Le,at,Dt,Ce,Le,O.COLOR_BUFFER_BIT,O.NEAREST):xn?O.copyTexSubImage3D(It,me,at,Dt,Wt+Un,qe,We,Ce,Le):O.copyTexSubImage2D(It,me,at,Dt,qe,We,Ce,Le);q.bindFramebuffer(O.READ_FRAMEBUFFER,null),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else xn?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(It,me,at,Dt,Wt,Ce,Le,Oe,Ut,Qe,wt.data):J.isCompressedArrayTexture?O.compressedTexSubImage3D(It,me,at,Dt,Wt,Ce,Le,Oe,Ut,wt.data):O.texSubImage3D(It,me,at,Dt,Wt,Ce,Le,Oe,Ut,Qe,wt):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,at,Dt,Ce,Le,Ut,Qe,wt.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,at,Dt,wt.width,wt.height,Ut,wt.data):O.texSubImage2D(O.TEXTURE_2D,me,at,Dt,Ce,Le,Ut,Qe,wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,on),O.pixelStorei(O.UNPACK_SKIP_IMAGES,xs),me===0&&J.generateMipmaps&&O.generateMipmap(It),q.unbindTexture()},this.initRenderTarget=function(R){ne.get(R).__webglFramebuffer===void 0&&le.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?le.setTextureCube(R,0):R.isData3DTexture?le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?le.setTexture2DArray(R,0):le.setTexture2D(R,0),q.unbindTexture()},this.resetState=function(){z=0,I=0,X=null,q.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}};var Qi={defaultMemorial:"demo",dataDir:"./data/",hostPin:"0000",firebaseDatabaseURL:"https://samga-7bd62-default-rtdb.asia-southeast1.firebasedatabase.app",presenceIntervalMs:1500},wn={skin:"#f2c7a5",hair:"short",hairColor:"#231d1a",eyes:"dot",brows:"soft",mouth:"calm",glasses:"none",beard:"none",blush:!0,height:1},rm={demo:!1,deceased:{name:"\uACE0\uC778",birth:"",death:"",age:""},mourners:"",funeral:{departure:"",departureAt:"",burial:""},greeting:"",thanks:"\uBC14\uC058\uC2E0 \uAC00\uC6B4\uB370 \uCC3E\uC544\uC640 \uC704\uB85C\uD574 \uC8FC\uC154\uC11C \uC9C4\uC2EC\uC73C\uB85C \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.",religion:"traditional",theme:"hospital",bgm:"wind",customBgm:"",hostOutfit:"hostSuit",hostLook:{...wn},hostName:"\uC0C1\uC8FC",portrait:"",gallery:[],account:{bank:"",number:"",holder:""},accounts:[],kakaopayLink:"",toss:!0},ss={hospital:{label:"\uBCD1\uC6D0 \uC7A5\uB840\uC2DD\uC7A5",icon:"\u{1F3E5}",desc:"\uAC00\uC7A5 \uC775\uC219\uD55C \uBCD1\uC6D0 \uC7A5\uB840\uC2DD\uC7A5 \uBE48\uC18C. \uAF43 \uC81C\uB2E8\uACFC \uC81C\uC0AC\uC0C1"},hall:{label:"\uBAA8\uB358 \uCD94\uBAA8\uAD00",icon:"\u{1F3DB}\uFE0F",desc:"\uC720\uB9AC \uBCBD\uACFC \uB098\uBB34 \uB8E8\uBC84\uC758 \uD604\uB300\uC2DD \uCD94\uBAA8\uAD00"},hanok:{label:"\uD55C\uC625 \xB7 \uC0B0\uC0AC",icon:"\u{1F3EF}",desc:"\uAE30\uC640 \uC9C0\uBD95\uACFC \uB9C8\uB8E8, \uADFC\uC870\uB4F1\uC774 \uC788\uB294 \uC804\uD1B5 \uBE48\uC18C"},chapel:{label:"\uAD50\uD68C \xB7 \uC131\uB2F9",icon:"\u26EA",desc:"\uC2A4\uD14C\uC778\uB4DC\uAE00\uB77C\uC2A4\uC640 \uC2ED\uC790\uAC00, \uB098\uBB34 \uC758\uC790\uAC00 \uC788\uB294 \uC608\uBC30\uB2F9"},garden:{label:"\uD558\uB298\uC815\uC6D0",icon:"\u{1F333}",desc:"\uD070 \uB098\uBB34 \uC544\uB798 \uAF43 \uC81C\uB2E8. \uC885\uAD50 \uC0C9\uC774 \uC5C6\uB294 \uC57C\uC678 \uCD94\uBAA8"}},sm={traditional:"hospital",buddhist:"hanok",christian:"chapel",catholic:"chapel",none:"hospital"},Bc={none:{label:"\uB044\uAE30",icon:"\u{1F507}",desc:"\uACE0\uC694\uD558\uAC8C"},wind:{label:"\uBC14\uB78C\uACFC \uD48D\uACBD",icon:"\u{1F390}",desc:"\uCC98\uB9C8 \uB05D \uD48D\uACBD \uC18C\uB9AC\uC640 \uC794\uC794\uD55C \uBC14\uB78C"},moktak:{label:"\uBAA9\uD0C1\uACFC \uC2F1\uC789\uBCFC",icon:"\u{1FAB7}",desc:"\uB290\uB9B0 \uBAA9\uD0C1, \uAC00\uB054 \uC6B8\uB9AC\uB294 \uC2F1\uC789\uBCFC"},hymn:{label:"\uCC2C\uC1A1\uAC00 \uC624\uB974\uAC04",icon:"\u26EA",desc:"\uB098 \uAC19\uC740 \uC8C4\uC778 \uC0B4\uB9AC\uC2E0 (Amazing Grace)"},chorale:{label:"\uD3C9\uC548\uC758 \uC624\uB974\uAC04",icon:"\u{1F56F}\uFE0F",desc:"\uB290\uB9B0 4\uC131\uBD80 \uC624\uB974\uAC04 \uCF54\uB784"},gayageum:{label:"\uAC00\uC57C\uAE08 \uC0B0\uC870 \uD48D",icon:"\u{1FA95}",desc:"\uC624\uC74C\uACC4\uB85C \uCC9C\uCC9C\uD788 \uB72F\uB294 \uAC00\uC57C\uAE08"},piano:{label:"\uC794\uC794\uD55C \uD53C\uC544\uB178",icon:"\u{1F3B9}",desc:"\uC26C\uC5B4 \uAC00\uAE30 \uC88B\uC740 \uB290\uB9B0 \uD53C\uC544\uB178"},rain:{label:"\uCC98\uB9C8 \uBE57\uC18C\uB9AC",icon:"\u{1F327}\uFE0F",desc:"\uBE57\uC18C\uB9AC\uC640 \uB099\uC22B\uBB3C"},custom:{label:"\uACE0\uC778\uC774 \uC88B\uC544\uD558\uB358 \uB178\uB798",icon:"\u{1F4BF}",desc:"\uC0C1\uC8FC\uAC00 \uC62C\uB9B0 \uC74C\uC6D0"}},Si={traditional:{label:"\uC804\uD1B5 \uC608\uBC95",icon:"\u{1F647}",desc:"\uD5CC\uD654 \xB7 \uBD84\uD5A5 \xB7 \uC220\uC794\uC744 \uC62C\uB9AC\uACE0 \uC808 \uB450 \uBC88",actions:["flower","incense","cup","bow2"],auto:["flower","incense","cup","bow2"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654 \xB7 \uBD84\uD5A5 \xB7 \uC220\uC794 \uC62C\uB9AC\uAE30",any:["flower","incense","cup"]},{id:"bow",label:"\uC601\uC815 \uC55E\uC5D0 \uC808 \uB450 \uBC88, \uBAA9\uB840",any:["bow2"]},{id:"greet",label:"\uC0C1\uC8FC\uC640 \uB9DE\uC808, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC721\uAC1C\uC7A5 \uD55C \uADF8\uB987",any:["meal"],optional:!0}]},buddhist:{label:"\uBD88\uAD50",icon:"\u{1FAB7}",desc:"\uBD84\uD5A5\uD558\uACE0 \uD569\uC7A5\uD55C \uB4A4 \uC808 \uB450 \uBC88",actions:["flower","incense","hapjang","bow2","beads"],auto:["flower","incense","hapjang","bow2"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654 \xB7 \uBD84\uD5A5",any:["incense","flower"]},{id:"hapjang",label:"\uD569\uC7A5 \uBC18\uBC30",any:["hapjang"]},{id:"bow",label:"\uC808 \uB450 \uBC88, \uBAA9\uB840",any:["bow2"]},{id:"greet",label:"\uC0C1\uC8FC\uC640 \uB9DE\uC808, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uACF5\uC591 \uD55C \uADF8\uB987",any:["meal"],optional:!0}]},christian:{label:"\uAE30\uB3C5\uAD50",icon:"\u271D\uFE0F",desc:"\uD5CC\uD654\uD55C \uB4A4 \uBB35\uB3C4\uC640 \uAE30\uB3C4",actions:["flower","silentPrayer","prayer"],auto:["flower","silentPrayer"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654",any:["flower"]},{id:"pray",label:"\uBB35\uB3C4 \uB610\uB294 \uAE30\uB3C4",any:["silentPrayer","prayer"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]},catholic:{label:"\uCC9C\uC8FC\uAD50",icon:"\u{1F56F}\uFE0F",desc:"\uD5CC\uD654, \uC131\uD638\uB97C \uAE0B\uACE0 \uAE30\uB3C4, \uCD1B\uBD88 \uBD09\uD5CC",actions:["flower","sign","prayer","candle"],auto:["flower","sign","prayer"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654 \uB610\uB294 \uCD1B\uBD88 \uBD09\uD5CC",any:["flower","candle"]},{id:"sign",label:"\uC131\uD638 \uAE0B\uAE30",any:["sign"]},{id:"pray",label:"\uACE0\uC778\uC744 \uC704\uD55C \uAE30\uB3C4",any:["prayer"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]},none:{label:"\uC885\uAD50 \uC5C6\uC74C",icon:"\u{1F90D}",desc:"\uD5CC\uD654\uD558\uACE0 \uBB35\uB150\uD55C \uB4A4 \uBAA9\uB840",actions:["flower","silence","nod"],auto:["flower","silence","nod"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654",any:["flower"]},{id:"silence",label:"\uBB35\uB150 \xB7 \uBAA9\uB840",any:["silence","nod"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]}},ld={incense:{label:"\uBD84\uD5A5",icon:"\u{1F525}",key:"incense",altar:!0},flower:{label:"\uD5CC\uD654",icon:"\u{1F33C}",key:"flowers",altar:!0},bow2:{label:"\uC808 \uB450 \uBC88",sub:"\uC808 \uB450 \uBC88 \xB7 \uBAA9\uB840",icon:"\u{1F647}",key:"bows",altar:!0},cup:{label:"\uC220\uC794",sub:"\uC220\uC794 \uC62C\uB9AC\uAE30",icon:"\u{1F376}",key:"cups",altar:!0},hapjang:{label:"\uD569\uC7A5",icon:"\u{1F64F}",key:"hapjang",altar:!0},beads:{label:"\uC5FC\uC8FC",icon:"\u{1F4FF}",key:"beads",altar:!1},prayer:{label:"\uAE30\uB3C4",icon:"\u{1F64F}",key:"prayers",altar:!0},silentPrayer:{label:"\uBB35\uB3C4",icon:"\u{1F90D}",key:"prayers",altar:!0},sign:{label:"\uC131\uD638",icon:"\u271D\uFE0F",key:"signs",altar:!0},candle:{label:"\uCD1B\uBD88",icon:"\u{1F56F}\uFE0F",key:"candles",altar:!0},silence:{label:"\uBB35\uB150",icon:"\u{1F90D}",key:"silence",altar:!0},nod:{label:"\uBAA9\uB840",icon:"\u{1F642}",key:"bows",altar:!0}},am=["\uCE5C\uAD6C","\uC9C1\uC7A5 \uB3D9\uB8CC","\uD559\uAD50 \uB3D9\uBB38","\uAC00\uC871 \xB7 \uCE5C\uCC99","\uC774\uC6C3","\uAD50\uD68C \xB7 \uC131\uB2F9 \xB7 \uC808","\uACE0\uC778\uC758 \uC9C0\uC778","\uAE30\uD0C0"],om=["\uADF8\uB3D9\uC548 \uACE0\uB9C8\uC6E0\uC5B4\uC694.","\uBCF4\uACE0 \uC2F6\uC744 \uAC70\uC608\uC694.","\uD3B8\uD788 \uC26C\uC138\uC694.","\uC0AC\uB791\uD569\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uB9CC\uB098\uC694.","\uC78A\uC9C0 \uC54A\uC744\uAC8C\uC694."],lm=["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.","\uC5BC\uB9C8\uB098 \uC0C1\uC2EC\uC774 \uD06C\uC2ED\uB2C8\uAE4C.","\uBB50\uB77C \uC704\uB85C\uC758 \uB9D0\uC500\uC744 \uB4DC\uB824\uC57C \uD560\uC9C0 \uBAA8\uB974\uACA0\uC2B5\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC2E4 \uAC70\uC608\uC694.","\uB298 \uACC1\uC5D0 \uC788\uC744\uAC8C\uC694. \uD798\uB0B4\uC138\uC694."],cd=[{id:"yukgaejang",label:"\uC721\uAC1C\uC7A5",icon:"\u{1F372}",ticket:!0,line:"\uB728\uB048\uD55C \uC721\uAC1C\uC7A5 \uD55C \uADF8\uB987. \uC7A5\uB840\uC2DD\uC7A5 \uAD6D\uBB3C\uC740 \uC65C \uC774\uB807\uAC8C \uC704\uB85C\uAC00 \uB420\uAE4C\uC694."},{id:"pyeonyuk",label:"\uD3B8\uC721",icon:"\u{1F969}",ticket:!0,line:"\uC0C8\uC6B0\uC813 \uC0B4\uC9DD \uC62C\uB9B0 \uD3B8\uC721 \uD55C \uC810 \uB4DC\uC168\uC5B4\uC694."},{id:"hongeo",label:"\uD64D\uC5B4\uBB34\uCE68",icon:"\u{1F41F}",ticket:!0,line:"\uC0C8\uCF64\uB2EC\uCF64 \uD64D\uC5B4\uBB34\uCE68. \uD638\uBD88\uD638\uB294 \uAC08\uB824\uB3C4 \uBE60\uC9C0\uBA74 \uC12D\uC12D\uD558\uC8E0."},{id:"jeon",label:"\uBAA8\uB460\uC804",icon:"\u{1F95E}",ticket:!0,line:"\uB3D9\uADF8\uB791\uB561, \uB3D9\uD0DC\uC804, \uAE7B\uC78E\uC804 \uD55C \uC811\uC2DC \uBE44\uC6B0\uC168\uC5B4\uC694."},{id:"tteok",label:"\uB5A1",icon:"\u{1F361}",ticket:!0,line:"\uC808\uD3B8\uACFC \uC2DC\uB8E8\uB5A1. \uC0C1\uAC13\uC9D1 \uB5A1\uC740 \uB098\uB220 \uBA39\uC5B4\uC57C \uBCF5\uC774 \uC628\uB300\uC694."},{id:"snack",label:"\uB9C8\uB978\uC548\uC8FC",icon:"\u{1F95C}",ticket:!0,line:"\uB545\uCF69\uACFC \uC624\uC9D5\uC5B4\uCC44. \uBC24\uC0D8\uD558\uB294 \uBD84\uB4E4\uC758 \uC624\uB79C \uCE5C\uAD6C\uC608\uC694."},{id:"soju",label:"\uC18C\uC8FC \uD55C \uC794",icon:"\u{1F376}",ticket:!0,line:"\uC18C\uC8FC \uD55C \uC794 \uAE30\uC6B8\uC774\uC168\uC5B4\uC694. \uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uB294 \uAC8C \uC608\uC758\uC608\uC694."},{id:"sikhye",label:"\uC2DD\uD61C",icon:"\u{1F964}",ticket:!1,line:"\uC2DC\uC6D0\uD55C \uC2DD\uD61C\uB85C \uB9C8\uC74C\uC744 \uB2EC\uB798\uC168\uC5B4\uC694."},{id:"coffee",label:"\uCEE4\uD53C\uBBF9\uC2A4",icon:"\u2615",ticket:!1,line:"\uC885\uC774\uCEF5 \uCEE4\uD53C\uBBF9\uC2A4. \uC7A5\uB840\uC2DD\uC7A5\uC758 \uACF5\uC2DD \uC74C\uB8CC\uC8E0."}],er={phrases:[{id:"\u8CFB\u5100",sub:"\uBD80\uC758 \xB7 \uAC00\uC7A5 \uC77C\uBC18\uC801"},{id:"\u8B39\u5F14",sub:"\uADFC\uC870 \xB7 \uC0BC\uAC00 \uC2AC\uD37C\uD568"},{id:"\u5F14\u610F",sub:"\uC870\uC758 \xB7 \uC2AC\uD514\uC744 \uD568\uAED8"},{id:"\u8FFD\u6155",sub:"\uCD94\uBAA8 \xB7 \uADF8\uB9AC\uC6CC\uD568"},{id:"\u54C0\u60BC",sub:"\uC560\uB3C4 \xB7 \uC2AC\uD37C\uD568"},{id:"\u53EC\u5929",sub:"\uC18C\uCC9C \xB7 \uAE30\uB3C5\uAD50"},{id:"\u4ED9\u901D",sub:"\uC120\uC11C \xB7 \uCC9C\uC8FC\uAD50"},{id:"\uBD80\uC758",sub:"\uD55C\uAE00"}],papers:[{id:"white",label:"\uD770 \uD55C\uC9C0",bg:"#fbf9f2"},{id:"ivory",label:"\uBBF8\uC0C9",bg:"#f3ead6"},{id:"silver",label:"\uC740\uD68C\uC0C9",bg:"#e6e6e1"},{id:"band",label:"\uAC80\uC740 \uB760",bg:"#fbf9f2",band:!0}],seals:[{id:"none",label:"\uC5C6\uC74C",icon:""},{id:"mum",label:"\uD770 \uAD6D\uD654",icon:""},{id:"lotus",label:"\uC5F0\uAF43",icon:"\u{1FAB7}"},{id:"cross",label:"\uC2ED\uC790\uAC00",icon:"\u271D\uFE0F"},{id:"ribbon",label:"\uADFC\uC870 \uB9AC\uBCF8",icon:"\u{1F397}\uFE0F"}],fonts:[{id:"serif",label:"\uC815\uC790\uCCB4",css:"'Noto Serif KR', 'Gowun Batang', serif"},{id:"brush",label:"\uBD93\uAE00\uC528",css:"'Nanum Brush Script', 'Gowun Batang', serif"},{id:"pen",label:"\uC190\uAE00\uC528",css:"'Nanum Pen Script', 'Gowun Dodum', sans-serif"}]},Fc=["\uC870\uBB38\uD560 \uB54C\uB294 \uAC80\uC740\uC0C9\uC774\uB098 \uC9D9\uC740 \uC0C9 \uC637\uC744 \uC785\uACE0, \uD654\uB824\uD55C \uC561\uC138\uC11C\uB9AC\uB294 \uC7A0\uC2DC \uBE7C \uB450\uC138\uC694.","\uD5A5\uC740 \uC624\uB978\uC190\uC73C\uB85C \uC9D1\uC5B4 \uBD88\uC744 \uBD99\uC774\uACE0, \uC785\uC73C\uB85C \uBD88\uC9C0 \uB9D0\uACE0 \uC67C\uC190\uC73C\uB85C \uAC00\uBCCD\uAC8C \uD754\uB4E4\uC5B4 \uAEBC\uC694.","\uC0C1\uAC00\uC5D0\uC11C \uC190\uC744 \uBAA8\uC744 \uB54C\uB294 \uD3C9\uC18C\uC640 \uBC18\uB300\uB85C, \uB0A8\uC790\uB294 \uC624\uB978\uC190\uC744, \uC5EC\uC790\uB294 \uC67C\uC190\uC744 \uC704\uB85C \uC62C\uB824\uC694.","\uC0C1\uC8FC\uC5D0\uAC8C\uB294 \uB9D0\uC744 \uC544\uB07C\uB294 \uAC83\uC774 \uC608\uC758\uC608\uC694. \uC9E7\uC740 \uD55C\uB9C8\uB514\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4.","\uACE0\uC778\uC758 \uC0AC\uB9DD \uC6D0\uC778\uC744 \uC790\uC138\uD788 \uBB3B\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC544\uC694.","\u201C\uD638\uC0C1(\u597D\u55AA)\u201D\uC774\uB77C\uB294 \uB9D0\uC740 \uC720\uAC00\uC871 \uC55E\uC5D0\uC11C\uB294 \uC0BC\uAC00 \uC8FC\uC138\uC694.","\uC870\uC758\uAE08 \uBD09\uD22C \uB4B7\uBA74 \uC67C\uCABD \uC544\uB798\uC5D0 \uC774\uB984\uC744 \uC138\uB85C\uB85C \uC368\uC694. \uC18C\uC18D\uB3C4 \uD568\uAED8 \uC4F0\uBA74 \uC0C1\uC8FC\uAC00 \uC54C\uC544\uBCF4\uAE30 \uC26C\uC6CC\uC694.","\uC870\uC758\uAE08\uC740 3\xB75\xB77\uB9CC \uC6D0\uCC98\uB7FC \uD640\uC218\uB85C \uB9DE\uCD94\uB294 \uD48D\uC2B5\uC774 \uC788\uC5B4\uC694. 10\uB9CC \uC6D0\uC740 \uAD1C\uCC2E\uC544\uC694.","\uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC220\uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uC544\uC694. \uAC74\uBC30 \uB300\uC2E0 \uC870\uC6A9\uD788 \uB9C8\uC74C\uC744 \uB098\uB220\uC694.","\uBC18\uAC00\uC6B4 \uC0AC\uB78C\uC744 \uB9CC\uB098\uB3C4 \uD070 \uC18C\uB9AC\uB85C \uC6C3\uAC70\uB098 \uC778\uC0AC\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC544\uC694.","\uAE30\uB3C5\uAD50\uC2DD \uBE48\uC18C\uC5D0\uC11C\uB294 \uBD84\uD5A5 \uB300\uC2E0 \uD5CC\uD654\uD558\uACE0 \uBB35\uB3C4\uD574\uC694. \uC808\uC740 \uD558\uC9C0 \uC54A\uC544\uB3C4 \uAD1C\uCC2E\uC544\uC694.","\uD5CC\uD654\uD560 \uB54C\uB294 \uAF43\uBD09\uC624\uB9AC\uAC00 \uC601\uC815 \uCABD\uC744 \uD5A5\uD558\uB3C4\uB85D \uB193\uC544\uC694.","\uB9DE\uC808\uC740 \uC0C1\uC8FC\uC640 \uB3D9\uC2DC\uC5D0 \uD558\uACE0, \uD55C \uBC88\uC774\uBA74 \uCDA9\uBD84\uD574\uC694.","\uBC24\uC0D8(\uCCA0\uC57C)\uC740 \uD5A5\uC774 \uAEBC\uC9C0\uC9C0 \uC54A\uAC8C \uC9C0\uD0A4\uBA70 \uACE0\uC778 \uACC1\uC744 \uD568\uAED8 \uC9C0\uD0A4\uB358 \uD48D\uC2B5\uC774\uC5D0\uC694."],hd={skin:["#f8dcc6","#f2c7a5","#e5b48f","#cf9670","#a26f4f"],hair:[{id:"short",label:"\uC9E7\uC740 \uBA38\uB9AC"},{id:"part",label:"\uAC00\uB974\uB9C8"},{id:"bob",label:"\uB2E8\uBC1C"},{id:"long",label:"\uAE34 \uC0DD\uBA38\uB9AC"},{id:"pony",label:"\uBB36\uC740 \uBA38\uB9AC"},{id:"bun",label:"\uCABD\uBA38\uB9AC\xB7\uBE44\uB140"},{id:"perm",label:"\uBF40\uAE00 \uD30C\uB9C8"},{id:"bald",label:"\uBBFC\uBA38\uB9AC"}],hairColor:[{id:"#231d1a",label:"\uAC80\uC815"},{id:"#3d2b20",label:"\uD751\uAC08\uC0C9"},{id:"#6e4b33",label:"\uAC08\uC0C9"},{id:"#8f8b85",label:"\uBC18\uBC31"},{id:"#e4e0d8",label:"\uBC31\uBC1C"}],eyes:[{id:"dot",label:"\uCF69 \uB208"},{id:"round",label:"\uB3D9\uADF8\uB780 \uB208"},{id:"smile",label:"\uC6C3\uB294 \uB208"},{id:"sad",label:"\uCC98\uC9C4 \uB208"},{id:"closed",label:"\uC9C0\uADF8\uC2DC \uAC10\uC740 \uB208"}],brows:[{id:"soft",label:"\uBCF4\uD1B5"},{id:"sad",label:"\uCC98\uC9C4 \uB208\uC379"},{id:"thick",label:"\uC9D9\uC740 \uB208\uC379"}],mouth:[{id:"calm",label:"\uB2F4\uB2F4"},{id:"smile",label:"\uC605\uC740 \uBBF8\uC18C"},{id:"sad",label:"\uC2DC\uBB34\uB8E9"}],glasses:[{id:"none",label:"\uC5C6\uC74C"},{id:"round",label:"\uB3D9\uADF8\uB780 \uC548\uACBD"},{id:"square",label:"\uBFD4\uD14C \uC548\uACBD"}],beard:[{id:"none",label:"\uC5C6\uC74C"},{id:"mustache",label:"\uCF67\uC218\uC5FC"},{id:"beard",label:"\uD131\uC218\uC5FC"}],height:[{id:.84,label:"\uC544\uC774"},{id:1,label:"\uC5B4\uB978"},{id:1.07,label:"\uD0A4 \uD070"}]},Oc=[{id:"cry",icon:"\u{1F622}",label:"\uB208\uBB3C"},{id:"heart",icon:"\u{1F90D}",label:"\uB9C8\uC74C"},{id:"pray",icon:"\u{1F64F}",label:"\uAE30\uB3C4"},{id:"smile",icon:"\u{1F642}",label:"\uBBF8\uC18C"},{id:"dove",icon:"\u{1F54A}\uFE0F",label:"\uD3C9\uC548"}],cm=["\uC624\uB79C\uB9CC\uC774\uC5D0\uC694","\uAC74\uAC15\uD558\uC2DC\uC8E0?","\uB9C8\uC74C\uC774 \uC544\uD504\uB124\uC694","\uC88B\uC740 \uBD84\uC774\uC168\uC5B4\uC694","\uC870\uC2EC\uD788 \uB4E4\uC5B4\uAC00\uC138\uC694","\uB2E4\uC74C\uC5D0 \uAF2D \uBD2C\uC694"];var zn={get(i,e){try{let t=localStorage.getItem(i);return t?JSON.parse(t):e}catch{return e}},set(i,e){try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch(t){return console.warn(t),!1}},del(i){try{localStorage.removeItem(i)}catch{}}};function ud(i,e){let t=Array.isArray(i)?[...i]:{...i};for(let[n,r]of Object.entries(e||{}))r&&typeof r=="object"&&!Array.isArray(r)&&i&&typeof i[n]=="object"&&!Array.isArray(i[n])?t[n]=ud(i[n],r):r!==void 0&&(t[n]=r);return t}var Hc=class{constructor(e,t){this.id=t||"demo";let n=(e.firebaseDatabaseURL||"").trim().replace(/\/+$/,"");this.base=n?`${n}/memorials/${encodeURIComponent(this.id)}`:"",this.remote=!!this.base,this.remoteOk=this.remote}key(e){return`samga:${this.id}:${e}`}async req(e,t,n,r=""){let s=await fetch(`${this.base}/${t}.json${r}`,{method:e,headers:n!==void 0?{"Content-Type":"application/json"}:void 0,body:n!==void 0?JSON.stringify(n):void 0});if(!s.ok)throw new Error(`${e} ${t} \u2192 ${s.status}`);return s.json()}async loadMemorial(e,t){let n={};try{let s=await fetch(e,{cache:"no-cache"});s.ok&&(n=await s.json())}catch(s){console.warn("memorial.json\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s)}this.published=ud(t,n);let r=zn.get(this.key("draft"),null);return this.hasDraft=!!r,r?ud(this.published,r):this.published}saveDraft(e){return zn.set(this.key("draft"),e)}clearDraft(){zn.del(this.key("draft")),this.hasDraft=!1}getLocal(e,t){return zn.get(this.key(e),t)}setLocal(e,t){return zn.set(this.key(e),t)}async list(e,t=200){if(this.remote&&e!=="condolences")try{let n=`?orderBy=${encodeURIComponent('"$key"')}&limitToLast=${t}`,r=await this.req("GET",e,void 0,n);return this.remoteOk=!0,Object.entries(r||{}).map(([s,a])=>({id:s,...a})).sort((s,a)=>(s.time||0)-(a.time||0))}catch(n){console.warn(n),this.remoteOk=!1}return zn.get(this.key(e),[])}async add(e,t){let n={...t,time:Date.now()},r=!this.remote||e==="condolences";if(this.remote)try{let a=await this.req("POST",e,{...n,time:{".sv":"timestamp"}});if(n.id=a.name,!r)return n}catch(a){console.warn(a),this.remoteOk=!1}let s=zn.get(this.key(e),[]);for(n.id=n.id||`l${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,s.push(n);s.length>400;)s.shift();return zn.set(this.key(e),s),n}async counters(){if(this.remote)try{let e=await this.req("GET","counters");return this.remoteOk=!0,e||{}}catch(e){console.warn(e),this.remoteOk=!1}return zn.get(this.key("counters"),{})}async bump(e,t=1){if(this.remote)try{await this.req("PUT",`counters/${e}`,{".sv":{increment:t}});return}catch(r){console.warn(r),this.remoteOk=!1}let n=zn.get(this.key("counters"),{});n[e]=(n[e]||0)+t,zn.set(this.key("counters"),n)}async getState(e){if(this.remote)try{return await this.req("GET",`state/${e}`)}catch(t){console.warn(t)}return zn.get(this.key(`state:${e}`),null)}async stampState(e){let t=Date.now();if(this.remote)try{return await this.req("PUT",`state/${e}`,{".sv":"timestamp"})}catch(n){console.warn(n)}return zn.set(this.key(`state:${e}`),t),t}async presencePut(e,t){this.remote&&await this.req("PUT",`presence/${e}`,{...t,t:{".sv":"timestamp"}})}async presenceGet(){return this.remote?await this.req("GET","presence")||{}:{}}presenceDelete(e){if(this.remote)try{fetch(`${this.base}/presence/${e}.json`,{method:"DELETE",keepalive:!0})}catch{}}};function Do(i){let e=i;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function dm(i=256){let e=document.createElement("canvas");return e.width=e.height=i,e}function iv(i,e,t,n,{petal:r,shade:s,center:a,layers:o=7,count:c=30,seed:l=1}){let h=Do(l);for(let d=o-1;d>=0;d--){let p=(d+1)/o,f=n*(.2+.8*p),v=Math.round(c*(.45+.7*p));for(let _=0;_<v;_++){let g=_/v*Math.PI*2+d*.53+(h()-.5)*.18,y=f*(.78+h()*.22),E=n*(.035+.045*p)*(.85+h()*.3),S=.86+h()*.14;i.save(),i.translate(e,t),i.rotate(g);let b=i.createLinearGradient(y*.05,0,y,0);b.addColorStop(0,s),b.addColorStop(.45,r),b.addColorStop(.92,r),b.addColorStop(1,s),i.globalAlpha=1,i.fillStyle=b,i.beginPath(),i.moveTo(y*.06,0),i.bezierCurveTo(y*.35,-E*.5,y*.62,-E*1.25,y*.92,-E*.9),i.quadraticCurveTo(y*1.04,0,y*.92,E*.9),i.bezierCurveTo(y*.62,E*1.25,y*.35,E*.5,y*.06,0),i.fill(),i.fillStyle=`rgba(0,0,0,${(1-S)*.9})`,i.fill(),i.strokeStyle="rgba(255,255,255,0.55)",i.lineWidth=Math.max(.6,n*.004),i.beginPath(),i.moveTo(y*.25,0),i.lineTo(y*.85,0),i.stroke(),i.strokeStyle="rgba(80,80,60,0.16)",i.lineWidth=Math.max(.6,n*.005),i.beginPath(),i.moveTo(y*.06,0),i.bezierCurveTo(y*.35,-E*.5,y*.62,-E*1.25,y*.92,-E*.9),i.quadraticCurveTo(y*1.04,0,y*.92,E*.9),i.bezierCurveTo(y*.62,E*1.25,y*.35,E*.5,y*.06,0),i.stroke(),i.restore()}let m=i.createRadialGradient(e,t,f*.55,e,t,f*1.02);m.addColorStop(0,"rgba(60,60,40,0)"),m.addColorStop(1,"rgba(60,60,40,0.07)"),i.globalCompositeOperation="source-atop",i.fillStyle=m,i.beginPath(),i.arc(e,t,f,0,Math.PI*2),i.fill(),i.globalCompositeOperation="source-over"}let u=i.createRadialGradient(e,t,0,e,t,n*.13);u.addColorStop(0,a),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.beginPath(),i.arc(e,t,n*.13,0,Math.PI*2),i.fill()}function rv(i,e,t,n,{petal:r,shade:s,seed:a=3}){let o=Do(a);for(let c=0;c<520;c++){let l=o()*Math.PI*2,h=Math.sqrt(o())*n*.92,u=e+Math.cos(l)*h,d=t+Math.sin(l)*h;i.fillStyle=o()<.5?r:s,i.beginPath(),i.ellipse(u,d,n*.06,n*.035,l,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(40,60,20,0.18)",i.lineWidth=.8,i.stroke()}}function sv(i,e,t,n,{petal:r,shade:s,disc:a,ring:o,n:c=34,seed:l=7,inner:h=.26}){let u=Do(l);for(let d=0;d<2;d++)for(let p=0;p<c;p++){let f=p/c*Math.PI*2+d*(Math.PI/c),v=n*(d?.82:.97)*(.92+u()*.08),m=n*.07;i.save(),i.translate(e,t),i.rotate(f);let _=i.createLinearGradient(n*h,0,v,0);_.addColorStop(0,s),_.addColorStop(.3,r),_.addColorStop(1,r),i.fillStyle=_,i.beginPath(),i.moveTo(n*h*.9,-m*.5),i.lineTo(v*.95,-m*.6),i.quadraticCurveTo(v,0,v*.95,m*.6),i.lineTo(n*h*.9,m*.5),i.fill(),i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=1,i.stroke(),i.restore()}i.fillStyle=o,i.beginPath(),i.arc(e,t,n*h,0,Math.PI*2),i.fill(),i.fillStyle=a,i.beginPath(),i.arc(e,t,n*h*.62,0,Math.PI*2),i.fill();for(let d=0;d<60;d++){let p=u()*Math.PI*2,f=u()*n*h*.9;i.fillStyle="rgba(255,230,140,0.5)",i.fillRect(e+Math.cos(p)*f,t+Math.sin(p)*f,2,2)}}function av(i,e,t){let n=i.createLinearGradient(0,t,0,0);n.addColorStop(0,"#c9d9a0"),n.addColorStop(.28,"#f4f6e8"),n.addColorStop(1,"#ffffff"),i.fillStyle=n,i.beginPath(),i.moveTo(e/2,t),i.bezierCurveTo(e*.02,t*.7,e*.05,t*.25,e/2,2),i.bezierCurveTo(e*.95,t*.25,e*.98,t*.7,e/2,t),i.fill(),i.strokeStyle="rgba(150,170,110,0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(e/2,t),i.lineTo(e/2,t*.12),i.stroke(),i.fillStyle="rgba(170,90,70,0.35)";for(let r=0;r<10;r++)i.fillRect(e*.35+Math.random()*e*.3,t*.55+Math.random()*t*.25,2,3)}function ov(i,e,t){let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"#3f5c30"),n.addColorStop(1,"#6f8f4c"),i.fillStyle=n,i.beginPath(),i.moveTo(e*.02,t/2),i.bezierCurveTo(e*.3,t*.02,e*.75,t*.05,e*.98,t/2),i.bezierCurveTo(e*.75,t*.95,e*.3,t*.98,e*.02,t/2),i.fill(),i.strokeStyle="rgba(220,235,190,0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(e*.04,t/2),i.lineTo(e*.94,t/2),i.stroke();for(let r=1;r<6;r++)i.beginPath(),i.moveTo(e*(.12+r*.13),t/2),i.lineTo(e*(.2+r*.13),t*.22),i.moveTo(e*(.12+r*.13),t/2),i.lineTo(e*(.2+r*.13),t*.78),i.stroke()}var hm={white:{petal:"#fefefb",shade:"#e4e5d6",center:"#eef0dc",seed:11},cream:{petal:"#faf3df",shade:"#e6dcb4",center:"#efe5c4",seed:23},yellow:{petal:"#f7d24f",shade:"#cf9a24",center:"#a47a12",seed:37},pink:{petal:"#f7dfe3",shade:"#ddafb8",center:"#d79aa5",seed:41}},fd={gerbera:{petal:"#f2849c",shade:"#d55c78",disc:"#4a3a1c",ring:"#c9b24a",n:30},gerberaY:{petal:"#ffcf3d",shade:"#e8a21b",disc:"#5a3d14",ring:"#d7a83a",n:30},aster:{petal:"#cf9ad9",shade:"#a86fb6",disc:"#e7c33a",ring:"#f1d75a",n:22,inner:.3}},Gt={},lv={white:"mum.png",gerbera:"gerbera.png",gerberaY:"gerbera_y.png",lying:"mum_lying.png",stem:"mum_stem.png"},cv={cream:"#f6ecd2",yellow:"#f2c230",pink:"#f3d0d8"};async function pm(i="./flowers/"){let e=r=>new Promise(s=>{let a=new Image;a.onload=()=>s(a),a.onerror=()=>s(null),a.src=i+r}),t=await Promise.all(Object.entries(lv).map(async([r,s])=>[r,await e(s)]));for(let[r,s]of t){if(!s)continue;let a=document.createElement("canvas");a.width=s.width,a.height=s.height,a.getContext("2d").drawImage(s,0,0),Gt[`c:${r}`]=a,Gt[`photo:${r}`]=!0}let n=Gt["c:white"];if(n)for(let[r,s]of Object.entries(cv)){let a=document.createElement("canvas");a.width=n.width,a.height=n.height;let o=a.getContext("2d");o.drawImage(n,0,0),o.globalCompositeOperation="multiply",o.fillStyle=s,o.fillRect(0,0,a.width,a.height),o.globalCompositeOperation="destination-in",o.drawImage(n,0,0),Gt[`c:${r}`]=a,Gt[`photo:${r}`]=!0}}function md(i){let e=new En(i);return e.colorSpace=Rt,e.anisotropy=8,e}function gd(i){if(Gt[`c:${i}`])return Gt[`c:${i}`];let e=dm(512),t=e.getContext("2d");return i==="lily"?(e.width=128,e.height=256,av(t,128,256)):i==="pompon"?rv(t,256,256,240,{petal:"#d9e6a6",shade:"#a9c06c"}):i==="leaf"?(e.width=256,e.height=128,ov(t,256,128)):fd[i]?sv(t,256,256,248,fd[i]):iv(t,256,256,248,hm[i]||hm.white),Gt[`c:${i}`]=e,e}function vd(i){if(Gt[`m:${i}`])return Gt[`m:${i}`];let e=md(gd(i)),t=i==="leaf"?0:Gt[`photo:${i}`]?.1:i==="white"||i==="lily"||i==="cream"?.28:.14,n=new ke({map:e,alphaTest:.42,side:St,roughness:.85,emissive:"#ffffff",emissiveMap:e,emissiveIntensity:t});return Gt[`m:${i}`]=n,n}function ga(i,e,t=.42*Math.PI,n=1){let r=new mt(1,20,5,0,Math.PI*2,0,t),s=r.attributes.position,a=r.attributes.uv,o=Math.sin(t),c=Math.cos(t);for(let l=0;l<s.count;l++){let h=s.getX(l),u=s.getY(l),d=s.getZ(l);a.setXY(l,.5+h/(2*o)*n,.5+d/(2*o)*n),s.setXYZ(l,h/o*i,(u-c)/(1-c)*e,d/o*i)}return r.computeVertexNormals(),r}function yd(i){let e=[],t=[],n=[],r=[],s=0;for(let o of i){let c=o.attributes.position,l=o.attributes.normal,h=o.attributes.uv;for(let d=0;d<c.count;d++)e.push(c.getX(d),c.getY(d),c.getZ(d)),t.push(l.getX(d),l.getY(d),l.getZ(d)),n.push(h.getX(d),h.getY(d));let u=o.index.array;for(let d=0;d<u.length;d++)r.push(u[d]+s);s+=c.count}let a=new Pt;return a.setAttribute("position",new ze(e,3)),a.setAttribute("normal",new ze(t,3)),a.setAttribute("uv",new ze(n,2)),a.setIndex(r),a}var as,dd,pd,Gc;function fm(){if(!as&&Gt["photo:white"]){let i=ga(1,.28,.42*Math.PI,1),e=ga(.6,.3,.42*Math.PI,1);e.rotateY(1.3),e.translate(0,.14,0),as=yd([i,e]),as.rotateX(Math.PI/2)}if(!as){let i=ga(1,.2,.42*Math.PI,1),e=ga(.74,.36,.42*Math.PI,1);e.rotateY(.9),e.translate(0,.07,0);let t=ga(.48,.42,.45*Math.PI,1);t.rotateY(2.1),t.translate(0,.17,0),as=yd([i,e,t]),as.rotateX(Math.PI/2)}return as}function hv(){return Gc||(Gc=ga(1,.12,.4*Math.PI,1),Gc.rotateX(Math.PI/2)),Gc}function uv(){if(!dd){let i=[];for(let e=0;e<6;e++){let t=new vt(.38,1,2,8),n=t.attributes.position;for(let r=0;r<n.count;r++){let s=n.getY(r)+.5,a=n.getX(r)*(.35+Math.sin(s*Math.PI)*.9);n.setXYZ(r,a,s,.55*s-.62*s*s+Math.abs(a)*.25)}t.computeVertexNormals(),t.rotateZ(e/6*Math.PI*2+e%2*.12),e%2&&t.scale(.9,.9,1),i.push(t)}dd=yd(i)}return dd}function mm(){return pd||(pd=new vt(1,.5)),pd}function dv(i){return i==="leaf"?mm():i==="lily"?uv():fd[i]?hv():fm()}var um={white:[.12,.035],cream:[.12,.03],yellow:[.1,.03],pink:[.11,.03],pompon:[.09,.02],lily:[.2,.04],gerbera:[.1,.015],gerberaY:[.1,.015],aster:[.055,.012],leaf:[.24,.1]};function gm(i,e,t){let n=new tt,r=new Pn,s=new Pn,a=new T,o=new et,c=new T(0,0,1);for(let[l,h]of Object.entries(i)){if(!h.length)continue;let u=new $i(dv(l),vd(l),h.length);h.forEach(({p:d,n:p},f)=>{let[v,m]=um[l]||um.white,_=v+e()*m,g=l==="leaf"?p:p.clone().add(new T((e()-.5)*.45,(e()-.5)*.35,0)).normalize();r.setFromUnitVectors(c,g),s.setFromAxisAngle(c,e()*Math.PI*2),r.multiply(s),a.set(_,_,_),n.compose(d,r,a),u.setMatrixAt(f,n),o.setHSL(0,0,.88+e()*.12),u.setColorAt(f,o)}),u.instanceMatrix.needsUpdate=!0,u.receiveShadow=!0,u.castShadow=l==="lily",u.userData.interact="altar",t.add(u)}}function vm({floor:i}){let e=new Te,t=Do(4321),n={white:[],cream:[],yellow:[],pompon:[],lily:[],gerbera:[],gerberaY:[],aster:[],leaf:[]},r=[{c:[0,1,-9.9],r:[4.25,.5,.55],tier:"low"},{c:[-4.05,1.25,-10.05],r:[1.15,.85,.5],tier:"side"},{c:[4.05,1.25,-10.05],r:[1.15,.85,.5],tier:"side"},{c:[0,2.35,-10.5],r:[1.2,1.15,.45],tier:"top"},{c:[-1.75,2.05,-10.42],r:[.95,.85,.45],tier:"mid"},{c:[1.75,2.05,-10.42],r:[.95,.85,.45],tier:"mid"},{c:[-3,2.2,-10.35],r:[.55,1,.42],tier:"tall"},{c:[3,2.2,-10.35],r:[.55,1,.42],tier:"tall"}],s=.17;for(let l of r){let[h,u,d]=l.c,[p,f,v]=l.r;for(let m=-.25;m<=Math.PI/2;m+=s/Math.max(f,.3)){let _=Math.max(.05,Math.cos(m)),g=s/Math.max(.12,p*_);for(let y=-Math.PI/2-.15;y<=Math.PI/2+.15;y+=g){let E=y+(t()-.5)*g*.5,S=new T(h+p*_*Math.sin(E),i+u+f*Math.sin(m),d+v*_*Math.cos(E)),b=S.y-i;if(Math.abs(S.x)<.74&&b>1.58&&b<3.2&&l.tier==="top")continue;let U=new T((S.x-h)/(p*p),(b-u)/(f*f),(S.z-d)/(v*v)).normalize();U.lerp(new T(0,.25,1).normalize(),.35).normalize();let z="white",I=Math.abs(E)>1.25||m>1.3;b<.62?z=t()<.5?"leaf":"pompon":l.tier==="low"&&S.x>.2&&S.x<2.3&&b<1.45?z=t()<.45?"gerberaY":"yellow":l.tier==="low"&&Math.abs(Math.abs(S.x)-1.75)<.42&&b>1.15?z="lily":l.tier==="top"&&Math.abs(S.x)<.8&&b<1.62&&b>1.2?z="gerbera":l.tier==="top"&&Math.abs(Math.abs(S.x)-.86)<.12&&b>1.6?z="yellow":I&&t()<.45||l.tier==="low"&&t()<.12?z="aster":t()<.06&&(z="cream"),n[z].push({p:S,n:U}),z!=="leaf"&&t()<.25&&n.leaf.push({p:S.clone().addScaledVector(U,-.06).add(new T((t()-.5)*.15,(t()-.5)*.15,0)),n:U.clone().applyAxisAngle(new T(0,1,0),(t()-.5)*1.5)})}}}gm(n,t,e);let a=new ke({color:"#34482c",roughness:1});for(let l of r){let h=new H(new mt(1,24,12,-Math.PI/2,Math.PI,0,Math.PI*.62),a);h.scale.set(l.r[0]*.95,l.r[1]*.95,l.r[2]*.9),h.position.set(l.c[0],i+l.c[1]-l.r[1]*.12,l.c[2]-.03),h.rotation.y=0,e.add(h)}let o=new H(new xe(9.8,.95,1.5),new ke({color:"#4f4037",roughness:.6}));o.position.set(0,i+.475,-10.2),o.receiveShadow=!0,e.add(o);let c=new ke({color:"#1f2620",roughness:.8});for(let l of r){let h=new H(new xe(l.r[0]*1.6,.16,l.r[2]*1.2),c);h.position.set(l.c[0],i+l.c[1]-.05,l.c[2]-.05),e.add(h)}return e}function ym({floor:i,z:e=-10.4,width:t=6.6,top:n=2.9,arch:r=1.25,cut:s={w:.98,y0:1.42,y1:3.4},accent:a="yellow"}={}){let o=new Te,c=Do(777),l={white:[],cream:[],[a]:[],pompon:[],lily:[],aster:[],leaf:[]},h=.19,u=0;for(let d=.12;d<=n+r+.1;d+=h*.86,u++)for(let p=-t+u%2*h*.5;p<=t;p+=h){let f=n+r*Math.cos(p/t*(Math.PI/2))**1.3;if(d>f||Math.abs(p)<s.w&&d>s.y0&&d<s.y1)continue;let v=d/4*.4,m=new T(p+(c()-.5)*.05,i+d+(c()-.5)*.05,e-v+(c()-.5)*.06),_=new T((c()-.5)*.4,.3+(c()-.5)*.3,1).normalize(),g=1.2+.55*Math.sin(p*.6+.8)+.16*Math.sin(p*1.7),y="white",E=Math.abs(p)<s.w+.55&&d>s.y0-.25&&d<s.y1+.3;d<.42?y=c()<.55?"pompon":"leaf":E&&c()<.4?y="lily":Math.abs(d-g)<.15?y=a:Math.abs(d-(g+.27))<.08&&c()<.75?y="cream":d>f-.2&&c()<.35&&(y="aster"),l[y].push({p:m,n:_}),y!=="leaf"&&c()<.3&&l.leaf.push({p:m.clone().add(new T((c()-.5)*.18,(c()-.5)*.18,-.07)),n:new T(c()-.5,c()-.5,1).normalize()})}return gm(l,c,o),o}function _m(i=1){if(!Gt["photo:lying"])return null;let e=Gt["c:lying"];Gt["m:lying"]||(Gt["m:lying"]=new ke({map:md(e),alphaTest:.4,side:St,roughness:.85,emissive:"#ffffff",emissiveMap:md(e),emissiveIntensity:.1}));let t=.62,n=t*(e.height/e.width),r=new Te,s=new H(new vt(t,n),Gt["m:lying"]);s.rotation.x=-Math.PI/2;let a=new H(new vt(t,n),Gt["m:lying"]);return a.rotation.x=-Math.PI/2+.55,a.position.y=.04,r.add(s,a),r.scale.setScalar(i),r}function Ti(i=1,e="white"){let t=new Te,n=Gt.stem||(Gt.stem=new ke({color:"#5d7a46",roughness:.8})),r=new H(new Me(.008,.008,.42,6),n);r.position.y=-.21,t.add(r);let s=new H(mm(),vd("leaf"));s.scale.setScalar(.11),s.position.set(.04,-.24,0),s.rotation.set(.3,.4,.6),t.add(s);let a=new H(fm(),vd(e));return a.scale.setScalar(.07),a.rotation.x=-Math.PI/2,t.add(a),t.scale.setScalar(i),t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function Uo(i="white"){let e=`w:${i}`;if(Gt[e])return Gt[e];let t=dm(512),n=t.getContext("2d"),r=gd("leaf");for(let o=0;o<40;o++){let c=o/40*Math.PI*2;n.save(),n.translate(256+Math.cos(c)*225,256+Math.sin(c)*225),n.rotate(c),n.drawImage(r,-40,-20,80,40),n.restore()}let s=(o,c,l,h)=>{let u=gd(h);for(let d=0;d<c;d++){let p=d/c*Math.PI*2+o*.01;n.drawImage(u,256+Math.cos(p)*o-l/2,256+Math.sin(p)*o-l/2,l,l)}};return s(205,26,64,i==="yellow"?"yellow":"white"),s(160,22,62,i==="mixed"?"yellow":"white"),s(115,16,60,"white"),s(70,10,58,i==="pink"?"pink":"cream"),s(0,1,92,"white"),Gt[e]=t,t}var Tr={suit:{label:"\uAC80\uC740 \uC815\uC7A5",who:"guest",top:"#202228",sleeve:"#202228",pants:"#1b1c21",shirt:!0,tie:"#0e0e10",shoes:"#141414"},shirt:{label:"\uAC80\uC740 \uC154\uCE20",who:"guest",top:"#25272d",sleeve:"#25272d",pants:"#2b2d33",collar2:!0,shoes:"#141414"},dress:{label:"\uAC80\uC740 \uC6D0\uD53C\uC2A4",who:"guest",top:"#1f2025",sleeve:"#1f2025",skirt:"#1f2025",skirtLen:.34,shoes:"#141414",collar:"#f3f1ea"},hanbokBlack:{label:"\uAC80\uC740 \uD55C\uBCF5",who:"guest",top:"#25262c",sleeve:"#25262c",skirt:"#1a1b20",skirtLen:.5,goreum:"#25262c",shoes:"#f3f1ea"},hostSuit:{label:"\uAC80\uC740 \uC591\uBCF5 \xB7 \uC644\uC7A5",who:"host",desc:"\uC694\uC998 \uAC00\uC7A5 \uD754\uD55C \uC0C1\uC8FC \uCC28\uB9BC. \uC67C\uD314\uC5D0 \uC644\uC7A5, \uAC00\uC2B4\uC5D0 \uC0C1\uC8FC \uB9AC\uBCF8",top:"#1b1c21",sleeve:"#1b1c21",pants:"#17181c",shirt:!0,tie:"#0e0e10",shoes:"#141414",armband:!0,ribbon:!0},hostHanbok:{label:"\uAC80\uC740 \uC0C1\uBCF5 \uD55C\uBCF5",who:"host",desc:"\uAC80\uC740 \uCE58\uB9C8\uC800\uACE0\uB9AC\uC5D0 \uD770 \uBA38\uB9AC \uB9AC\uBCF8",top:"#222329",sleeve:"#222329",skirt:"#18191d",skirtLen:.5,goreum:"#f5f3ec",shoes:"#f3f1ea",hairRibbon:!0,ribbon:!0},sambe:{label:"\uC804\uD1B5 \uC0BC\uBCA0 \uC0C1\uBCF5",who:"host",desc:"\uAD74\uAC74\uC81C\uBCF5 \xB7 \uC218\uC9C8 \xB7 \uC694\uC9C8, \uC190\uC5D0 \uC0C1\uC7A5(\uC9C0\uD321\uC774)",top:"#d7c9a6",sleeve:"#d7c9a6",robe:"#d3c49f",shoes:"#cdbd96",hood:!0,rope:"#a89067",cane:!0},sobok:{label:"\uD770 \uC18C\uBCF5",who:"host",desc:"\uD770 \uCE58\uB9C8\uC800\uACE0\uB9AC, \uB2E8\uC815\uD55C \uBA38\uB9AC\uC5D0 \uD770 \uB9AC\uBCF8",top:"#f4f1e8",sleeve:"#f4f1e8",skirt:"#efebe0",skirtLen:.5,goreum:"#e9e4d6",shoes:"#f3f1ea",hairRibbon:!0}},Ft={hipsY:.42,torsoX:0,headX:0,headY:0,aLx:0,aLz:.12,aRx:0,aRz:-.12,lLx:0,lRx:0,lLz:0,lRz:0,eyes:0},xm=Object.keys(Ft),bt=i=>({...Ft,...i}),Mm=bt({aLx:-2.25,aRx:-2.25,aLz:-.55,aRz:.55,headX:.1,eyes:1}),bm=bt({hipsY:.17,lLx:1.5,lRx:1.5,torsoX:.12,aLx:-.9,aRx:-.9,aLz:-.25,aRz:.25,eyes:1}),Em=bt({hipsY:.17,lLx:1.5,lRx:1.5,torsoX:1.18,headX:.15,aLx:-1.85,aRx:-1.85,aLz:-.3,aRz:.3,eyes:1}),zc=bt({torsoX:.5,headX:.25,aLx:-.35,aRx:-.35,aLz:-.35,aRz:.35,eyes:1}),os=bt({torsoX:.28,headX:.25,aLz:-.05,aRz:.05,eyes:1}),ls=bt({aLx:-1.25,aRx:-1.25,aLz:-.8,aRz:.8}),Sm=bt({aLx:-1,aRx:-1,aLz:-.8,aRz:.8,torsoX:.42,headX:.25,eyes:1}),va=bt({aLx:-1.05,aRx:-1.05,aLz:-.78,aRz:.78,torsoX:.08,headX:.38,eyes:1}),Tm=bt({headX:.45,torsoX:.06,aLz:-.12,aRz:.12,aLx:-.15,aRx:-.15,eyes:1}),_d=bt({hipsY:.13,lLx:-1.45,lRx:-1.45,lLz:.18,lRz:-.18,aLx:-.6,aRx:-.6,aLz:-.15,aRz:.15}),wm=bt({..._d,aRx:-2,aRz:.55,headX:-.05}),Am=bt({aRx:-.85,aRz:.15}),cs=bt({aLx:-1.35,aRx:-1.35,aLz:-.35,aRz:.35,torsoX:.28,headX:.1}),Rm=bt({aRx:-1.35,aRz:.18,aLx:-.4,aLz:-.4,torsoX:.22,headX:.1}),Cm=bt({aLx:-1.2,aRx:-1.2,aLz:-.4,aRz:.4,torsoX:.15}),Pm=bt({aRx:-2.6,aRz:-.5}),No=bt({aRx:-1.25,aRz:.05,torsoX:.15,headX:.15}),ko=bt({aRx:-1.75,aRz:.15,torsoX:.08,headX:.1}),Im=bt({aLx:-1.45,aRx:-1.45,aLz:-.6,aRz:.6,torsoX:.12,headX:.2,eyes:1});function Bo(){return[{p:Mm,d:.6},{p:bm,d:.75},{p:Em,d:.85},{p:Em,d:.55},{p:bm,d:.6},{p:Mm,d:.6}]}var pv={bow:()=>[...Bo(),{p:Ft,d:.6}],bow2:()=>[...Bo(),...Bo(),{p:Ft,d:.5},{p:os,d:.4},{p:os,d:.35},{p:Ft,d:.4}],pour:()=>[{p:cs,d:.7},{p:bt({...cs,aRx:-1.55,aRz:.1}),d:.6,cue:"pour"},{p:cs,d:.5,cue:"release"},{p:Ft,d:.6}],bow3:()=>[...Bo(),...Bo(),{p:Ft,d:.5},{p:os,d:.4},{p:os,d:.35},{p:Ft,d:.4}],halfBow:()=>[{p:zc,d:.6},{p:zc,d:.8},{p:Ft,d:.6}],nod:()=>[{p:os,d:.5},{p:os,d:.9},{p:Ft,d:.5}],hapjang:()=>[{p:ls,d:.6},{p:ls,d:.4},{p:Sm,d:.7},{p:Sm,d:1.2},{p:ls,d:.6},{p:Ft,d:.6}],prayer:()=>[{p:va,d:.8},{p:va,d:4.2},{p:Ft,d:.7}],silence:()=>[{p:Tm,d:.9},{p:Tm,d:8.2},{p:Ft,d:.8}],sign:()=>[{p:bt({aRx:-2.55,aRz:.42,eyes:1,headX:.15}),d:.6},{p:bt({aRx:-1.45,aRz:.6,eyes:1,headX:.15}),d:.5},{p:bt({aRx:-1.75,aRz:1,eyes:1,headX:.15}),d:.45},{p:bt({aRx:-1.95,aRz:.12,eyes:1,headX:.15}),d:.45},{p:va,d:.6},{p:va,d:1.4},{p:Ft,d:.6}],incense:()=>[{p:Rm,d:.7,cue:"reach"},{p:Rm,d:.9,cue:"light"},{p:ls,d:.6},{p:Ft,d:.6}],offer:()=>[{p:cs,d:.8},{p:cs,d:.5,cue:"release"},{p:zc,d:.6},{p:zc,d:.6},{p:Ft,d:.6}],candle:()=>[{p:cs,d:.8},{p:cs,d:.5,cue:"release"},{p:va,d:.6},{p:va,d:1},{p:Ft,d:.6}],beads:()=>{let i=[{p:ls,d:.5}];for(let e=0;e<7;e++)i.push({p:bt({...ls,headX:.22,eyes:1,aRx:-1.15}),d:.32,cue:"bead"},{p:bt({...ls,headX:.2,eyes:1}),d:.32});return i.push({p:Ft,d:.6}),i},give:()=>[{p:Cm,d:.7},{p:Cm,d:.4,cue:"release"},{p:os,d:.6},{p:Ft,d:.6}],eat:()=>{let i=[];for(let e=0;e<3;e++)i.push({p:wm,d:.55},{p:wm,d:.25,cue:"bite"},{p:_d,d:.6});return i},wave:()=>[{p:Pm,d:.4},{p:bt({aRx:-2.6,aRz:-.1}),d:.3},{p:Pm,d:.3},{p:bt({aRx:-2.6,aRz:-.1}),d:.3},{p:Ft,d:.5}],shake:()=>[{p:No,d:.5},{p:bt({...No,aRx:-1.1}),d:.2},{p:No,d:.2},{p:bt({...No,aRx:-1.1}),d:.2},{p:No,d:.3},{p:Ft,d:.5}],pat:()=>[{p:ko,d:.5},{p:bt({...ko,aRx:-1.55}),d:.22},{p:ko,d:.22},{p:bt({...ko,aRx:-1.55}),d:.22},{p:ko,d:.22},{p:Ft,d:.5}],hug:()=>[{p:Im,d:.6},{p:Im,d:1.6},{p:Ft,d:.6}]},fv={flower:Am,sit:_d,envelope:Am},ct=(i,e={})=>new ke({color:i,roughness:.75,metalness:0,...e}),wi=class{constructor({outfit:e="suit",look:t=wn}={}){this.root=new Te,this.root.name="avatar",this.body=new Te,this.root.add(this.body),this.hips=new Te,this.torso=new Te,this.head=new Te,this.armL=new Te,this.armR=new Te,this.legL=new Te,this.legR=new Te,this.body.add(this.hips),this.hips.add(this.torso,this.legL,this.legR),this.torso.add(this.head,this.armL,this.armR),this.head.position.y=.66,this.armL.position.set(.25,.43,0),this.armR.position.set(-.25,.43,0),this.legL.position.set(.1,0,0),this.legR.position.set(-.1,0,0),this.cur={...Ft},this.seq=null,this.hold=null,this.walkPhase=0,this.moving=0,this.blinkT=2+Math.random()*3,this.parts=[],this.props={},this.expr=null,this.exprT=0,this.tears=[],this.barefoot=!1,this.outfitId=Tr[e]?e:"suit",this.look={...wn,...t},this.rebuild()}get height(){return this.look.height||1}setOutfit(e){this.outfitId=Tr[e]?e:"suit",this.rebuild()}setLook(e){this.look={...wn,...e},this.rebuild()}setBarefoot(e){this.barefoot!==e&&(this.barefoot=e,this.rebuild())}part(e,t,n,r,s={}){let a=new H(t,n);return r&&a.position.set(...r),s.rot&&a.rotation.set(...s.rot),s.scale&&a.scale.set(...s.scale),a.castShadow=s.shadow!==!1,e.add(a),this.parts.push(a),a}rebuild(){let e=Object.values(this.props).map(u=>{let d=u.parent===this.handL?"L":"R";return u.parent?.remove(u),[u,d]});for(let u of this.parts)u.parent?.remove(u),u.geometry?.dispose?.();this.parts=[];let t=Tr[this.outfitId],n=this.look,r=ct(n.skin,{roughness:.9});this.root.scale.setScalar(n.height||1);let s=this.part(this.head,new mt(.3,32,24),r,[0,0,0],{scale:[1,.94,.96]});s.userData.skin=!0;let a=new mt(.06,14,10);this.handL=this.part(this.armL,a,r,[0,-.34,0]),this.handR=this.part(this.armR,a,r,[0,-.34,0]),this.buildFace(n);let o=ct(t.top);if(t.robe?(this.part(this.torso,new Me(.19,.31,.92,20),ct(t.robe,{roughness:1}),[0,.06,0]),this.part(this.torso,new mt(.2,18,12,0,Math.PI*2,0,Math.PI/2),ct(t.robe,{roughness:1}),[0,.5,0])):this.part(this.torso,new Kn(.2,.16,6,18),o,[0,.28,0]),t.shirt){let u=new xi;u.moveTo(-.075,.12),u.lineTo(.075,.12),u.lineTo(0,-.08),u.closePath(),this.part(this.torso,new Sr(u),ct("#f5f4ef"),[0,.4,.198],{rot:[-.12,0,0],shadow:!1}),this.part(this.torso,new xe(.035,.14,.01),ct(t.tie),[0,.39,.207],{rot:[-.12,0,0],shadow:!1})}if(t.collar2){for(let u of[-1,1])this.part(this.torso,new xe(.08,.05,.01),ct("#2f3238"),[.045*u,.5,.185],{rot:[-.3,0,u*.5],shadow:!1});for(let u=0;u<3;u++)this.part(this.torso,new mt(.01,6,4),ct("#6b6e75"),[0,.42-u*.08,.2],{shadow:!1})}if(t.collar&&this.part(this.torso,new Sn(.11,.022,8,24),ct(t.collar),[0,.52,.02],{rot:[Math.PI/2-.25,0,0]}),t.goreum){let u=ct(t.goreum);this.part(this.torso,new xe(.05,.05,.03),u,[.05,.36,.2]),this.part(this.torso,new xe(.03,.2,.012),u,[.07,.25,.205],{rot:[0,0,.1]}),this.part(this.torso,new xe(.03,.16,.012),u,[.03,.26,.207],{rot:[0,0,-.1]}),this.part(this.torso,new xe(.03,.2,.012),ct("#f6f4ee"),[-.02,.45,.19],{rot:[-.2,0,-.7],shadow:!1})}if(t.ribbon){let u=ct("#f7f6f2");this.part(this.torso,new hn(.035,.06,4),u,[.1,.43,.2],{rot:[0,0,-Math.PI/2]}),this.part(this.torso,new hn(.035,.06,4),u,[.16,.43,.2],{rot:[0,0,Math.PI/2]}),this.part(this.torso,new xe(.025,.07,.01),ct("#111"),[.13,.39,.205])}t.rope&&this.part(this.torso,new Sn(.235,.022,8,28),ct(t.rope,{roughness:1}),[0,.14,0],{rot:[Math.PI/2,0,0]});let c=t.robe?ct(t.robe,{roughness:1}):ct(t.sleeve);for(let[u,d]of[[this.armL,1],[this.armR,-1]])this.part(u,new Kn(.07,.2,4,12),c,[0,-.16,0]),t.armband&&d===1&&(this.part(u,new Me(.078,.078,.08,16,1,!0),ct("#0f0f10"),[0,-.1,0]),this.part(u,new Me(.081,.081,.012,16,1,!0),ct("#f4f4f0"),[0,-.085,0]),this.part(u,new Me(.081,.081,.012,16,1,!0),ct("#f4f4f0"),[0,-.115,0]));let l=t.pants?ct(t.pants):ct("#efe9dd"),h=this.barefoot?ct(t.pants?"#1f1f22":"#f3f1ea"):ct(t.shoes);for(let u of[this.legL,this.legR])this.part(u,new Kn(.075,.18,4,10),l,[0,-.17,0]),this.part(u,new xe(this.barefoot?.11:.13,.07,.19),h,[0,-.37,.04]);if(t.skirt){let u=t.skirtLen||.4;this.part(this.hips,new Me(.2,.34,u,22,1,!0),ct(t.skirt,{side:St}),[0,-u/2+.06,0])}if(t.hood){let u=ct("#d9cba7",{roughness:1});this.part(this.head,new mt(.32,24,16,0,Math.PI*2,0,Math.PI*.62),u,[0,.04,-.03],{rot:[-.62,0,0]});for(let d=-1;d<=1;d++)this.part(this.head,new xe(.05,.2,.42),u,[d*.07,.33,0],{rot:[0,0,d*.05]});this.part(this.head,new Sn(.3,.028,8,28),ct(t.rope,{roughness:1}),[0,.17,-.02],{rot:[Math.PI/2-.35,0,0]})}else this.buildHair(n,t);t.cane&&this.part(this.handR,new Me(.018,.018,1,8),ct("#8a7650"),[0,-.12,.02]);for(let[u,d]of e)(d==="L"?this.handL:this.handR).add(u);this.root.traverse(u=>{u.isMesh&&(u.userData.avatar=this,this.interactTag&&(u.userData.interact=this.interactTag))})}buildHair(e,t){let n=ct(e.hairColor,{roughness:.85}),r=()=>this.part(this.head,new mt(.322,26,16,0,Math.PI*2,0,Math.PI*.58),n,[0,.04,-.025],{rot:[-.6,0,0]});switch(e.hair){case"bald":break;case"part":r(),this.part(this.head,new mt(.15,16,10),n,[.1,.2,.17],{scale:[1.2,.55,.9],rot:[.2,0,-.35]});break;case"bob":r(),this.part(this.head,new Me(.33,.35,.3,24,1,!0,1,Math.PI*2-2),ct(e.hairColor,{roughness:.85,side:St}),[0,-.07,-.01]);break;case"long":r(),this.part(this.head,new Me(.33,.37,.58,24,1,!0,1.05,Math.PI*2-2.1),ct(e.hairColor,{roughness:.85,side:St}),[0,-.2,-.01]);break;case"pony":r(),this.part(this.head,new Kn(.07,.22,4,10),n,[0,-.12,-.36],{rot:[.35,0,0]}),this.part(this.head,new Sn(.06,.015,6,14),ct("#111"),[0,.02,-.32],{rot:[1.2,0,0]});break;case"bun":r(),this.part(this.head,new mt(.115,16,12),n,[0,-.08,-.31]),this.part(this.head,new Me(.012,.012,.38,8),ct("#7fa08c",{roughness:.3}),[0,-.07,-.33],{rot:[0,0,Math.PI/2]});break;case"perm":{let s=new mt(.075,10,8),a=new $i(s,n,46),o=new tt,c=0;for(let l=0;l<4;l++){let h=.15+l*.36,u=l===0?4:8+l*3;for(let d=0;d<u&&c<46;d++){let p=d/u*Math.PI*2+l,f=Math.sin(h)*Math.cos(p),v=Math.cos(h),m=Math.sin(h)*Math.sin(p);m>.55&&v<.6||(o.makeTranslation(f*.31,v*.31+.02,m*.31-.02),a.setMatrixAt(c++,o))}}a.count=c,a.castShadow=!0,this.head.add(a),this.parts.push(a);break}default:r()}if(t.hairRibbon){let s=ct("#fbfaf6");this.part(this.head,new hn(.04,.08,4),s,[.18,.22,.12],{rot:[0,0,-Math.PI/2]}),this.part(this.head,new hn(.04,.08,4),s,[.26,.22,.1],{rot:[0,0,Math.PI/2]})}}buildFace(e){let t=ct("#1d1a18",{roughness:.4});this.eyes=[],this.eyeKind=this.expr==="cry"?"sad":this.expr==="smile"?"smile":e.eyes;let n=this.eyeKind;for(let o of[-1,1]){let c;if(n==="smile")c=this.part(this.head,new Sn(.03,.008,6,12,Math.PI),t,[.1*o,-.005,.282],{shadow:!1});else if(n==="closed")c=this.part(this.head,new Sn(.03,.007,6,12,Math.PI),t,[.1*o,.01,.282],{rot:[0,0,Math.PI],shadow:!1});else{let p=n==="round"?.042:.032;c=this.part(this.head,new mt(p,12,8),t,[.1*o,n==="sad"?-.01:0,.272],{scale:[1,1.25,.6],shadow:!1}),c.userData.blink=!0,n==="round"&&this.part(this.head,new mt(.011,6,4),ct("#ffffff"),[.1*o+.012,.016,.3],{shadow:!1})}if(this.eyes.push(c),e.blush){let p=new H(new Yt(.04,16),new cn({color:"#f29a8a",transparent:!0,opacity:.45}));p.position.set(.17*o,-.07,.262),p.rotation.y=.5*o,this.head.add(p),this.parts.push(p)}let l=this.expr==="cry"||n==="sad"?"sad":e.brows,h=l==="thick"?2:1,u=l==="sad"?-.38*o:-.06*o,d=ct(e.hair==="bald"?"#5a4a40":e.hairColor);this.part(this.head,new xe(.075,.014*h,.012),d,[.1*o,.085,.27],{rot:[-.2,0,u],shadow:!1})}let r=this.expr==="cry"?"sad":this.expr==="smile"?"smile":e.mouth,s=ct("#8a4b45");if(r==="smile"?this.part(this.head,new Sn(.03,.007,6,12,Math.PI),s,[0,-.105,.272],{rot:[0,0,Math.PI],shadow:!1}):r==="sad"?this.part(this.head,new Sn(.025,.007,6,12,Math.PI),s,[0,-.13,.27],{shadow:!1}):this.part(this.head,new xe(.045,.009,.01),s,[0,-.11,.276],{shadow:!1}),e.glasses!=="none"){let o=ct(e.glasses==="square"?"#2a211c":"#9a8a6a",{metalness:e.glasses==="round"?.6:0,roughness:.4});for(let c of[-1,1]){if(e.glasses==="round")this.part(this.head,new Sn(.055,.008,6,20),o,[.1*c,.005,.3],{shadow:!1});else{let l=this.part(this.head,new Sn(.058,.012,4,4),o,[.1*c,.005,.3],{rot:[0,0,Math.PI/4],scale:[1.25,.9,1],shadow:!1});l.rotation.z=Math.PI/4}this.part(this.head,new xe(.008,.008,.2),o,[.17*c,.01,.2],{rot:[0,-.35*c,0],shadow:!1})}this.part(this.head,new xe(.06,.008,.008),o,[0,.015,.305],{shadow:!1})}let a=ct(e.hairColor==="#e4e0d8"?"#d8d4cc":e.hairColor,{roughness:.9});(e.beard==="mustache"||e.beard==="beard")&&this.part(this.head,new Kn(.018,.07,4,8),a,[0,-.08,.282],{rot:[0,0,Math.PI/2],shadow:!1}),e.beard==="beard"&&this.part(this.head,new mt(.15,16,10,0,Math.PI*2,Math.PI*.55,Math.PI*.45),a,[0,.02,.06],{scale:[1.05,1.1,1.15]})}setExpression(e,t=4){this.expr=e,this.exprT=t,this.rebuild(),e==="cry"&&(this.tearT=0)}setProp(e,t,n={}){if(t&&!this.props[e]){let r;if(e==="flower"&&(r=Ti(.75),r.rotation.set(.2,0,0),r.position.set(0,-.02,.05)),e==="envelope"&&(r=new H(new xe(.2,.012,.11),ct(n.color||"#fbfaf4")),r.rotation.z=.3,r.position.set(0,-.05,.04)),e==="beads"){r=new Te;let s=ct("#5a3a26",{roughness:.35}),a=new mt(.016,8,6);for(let o=0;o<24;o++){let c=o/24*Math.PI*2,l=new H(a,s);l.position.set(Math.cos(c)*.09,Math.sin(c)*.12-.08,0),r.add(l)}}if(!r)return;(e==="beads"?this.handL:this.handR).add(r),this.props[e]=r}else!t&&this.props[e]&&(this.props[e].parent?.remove(this.props[e]),delete this.props[e])}play(e,t,{soft:n=!1}={}){let r=pv[e];return r?(this.seq&&this.seq.resolve?.(),new Promise(s=>{this.seq={steps:r(),i:0,t:0,from:{...this.cur},resolve:s,onCue:t,name:e,soft:n}})):Promise.resolve()}get busy(){return!!this.seq&&!this.seq.soft}cancelSoft(){if(this.seq?.soft){let e=this.seq.resolve;this.seq=null,e()}}finish(){if(!this.seq)return;let e=this.seq;e.i=e.steps.length-1,e.t=0,e.from={...this.cur}}update(e,t){this.moving+=((t?1:0)-this.moving)*Math.min(1,e*10);let n;if(this.seq){let c=this.seq,l=c.steps[c.i];c.t+=e;let h=Math.min(1,c.t/l.d),u=h*h*(3-2*h);n={};for(let d of xm)n[d]=c.from[d]+(l.p[d]-c.from[d])*u;h>=1&&(l.cue&&c.onCue?.(l.cue),c.i++,c.t=0,c.from={...l.p},c.i>=c.steps.length&&(this.seq=null,c.resolve())),this.cur=n}else{let c=this.hold&&fv[this.hold]||Ft,l=Math.min(1,e*8);for(let h of xm)this.cur[h]+=(c[h]-this.cur[h])*l;n=this.cur}let r=this.moving;r>.01&&(this.walkPhase+=e*9.5);let s=Math.sin(this.walkPhase)*r,a=this.hold==="flower"||this.hold==="envelope";this.hips.position.y=n.hipsY+Math.abs(Math.cos(this.walkPhase))*.035*r,this.torso.rotation.set(n.torsoX+.04*r,0,s*.04),this.head.rotation.set(n.headX,n.headY,0),this.armL.rotation.set(n.aLx-s*.55,0,n.aLz),this.armR.rotation.set(n.aRx+(a?0:s*.55),0,n.aRz),this.legL.rotation.set(n.lLx+s*.6,0,n.lLz),this.legR.rotation.set(n.lRx-s*.6,0,n.lRz),this.blinkT-=e;let o=n.eyes;this.blinkT<0&&(o=1,this.blinkT<-.12&&(this.blinkT=2.5+Math.random()*3.5));for(let c of this.eyes)c.userData.blink&&(c.scale.y=o>.5?.18:1.25);this.props.beads&&(this.props.beads.rotation.z+=e*.6),this.expr&&(this.exprT-=e,this.expr==="cry"&&(this.tearT=(this.tearT||0)-e,this.tearT<=0&&(this.tearT=.45,this.spawnTear())),this.exprT<=0&&(this.expr=null,this.rebuild()));for(let c=this.tears.length-1;c>=0;c--){let l=this.tears[c];l.life-=e,l.mesh.position.y-=e*.18,l.mesh.material.opacity=Math.min(.85,l.life*1.5),l.life<=0&&(this.head.remove(l.mesh),this.tears.splice(c,1))}}spawnTear(){let e=Math.random()<.5?-1:1,t=new H(new mt(.018,8,6),new ke({color:"#9fd0ff",transparent:!0,opacity:.85,roughness:.1}));t.scale.set(.8,1.3,.8),t.position.set(.1*e,-.04,.28),this.head.add(t),this.tears.push({mesh:t,life:.9})}};var Ve=(i,e={})=>new ke({color:i,roughness:.82,metalness:0,...e});function Ai(i,e){let t=new En(i);return t.colorSpace=Rt,t.anisotropy=4,e&&(t.wrapS=t.wrapT=zr,t.repeat.set(...e)),t}function mv(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#e9e3d6",e.fillRect(0,0,256,256);for(let t=0;t<70;t++){e.strokeStyle=`rgba(160,150,130,${.05+Math.random()*.08})`,e.lineWidth=1+Math.random()*2,e.beginPath();let n=Math.random()*256,r=Math.random()*256;e.moveTo(n,r),e.bezierCurveTo(n+40,r+10,n+60,r+50,n+120,r+40),e.stroke()}return e.strokeStyle="rgba(140,130,115,0.45)",e.lineWidth=2,e.strokeRect(1,1,254,254),i}function Vc(i="#8a6446"){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,256,256);for(let n=0;n<8;n++)t.fillStyle=`rgba(${n%2?"255,240,220":"40,25,15"},0.06)`,t.fillRect(0,n*32,256,32),t.fillStyle="rgba(30,20,10,0.35)",t.fillRect(0,n*32,256,1.5),t.fillRect(n*97%256,n*32,1.5,32);for(let n=0;n<120;n++){t.strokeStyle="rgba(40,25,15,0.08)";let r=Math.random()*256;t.beginPath(),t.moveTo(0,r),t.bezierCurveTo(80,r+3,160,r-3,256,r+1),t.stroke()}return e}function Lm(i=!1){let e=document.createElement("canvas");e.width=256,e.height=i?256:512;let t=e.getContext("2d"),n=["#3d6fa8","#c24f45","#e3b74a","#5c9a6b","#7d5aa6","#4fa3b8","#e58b4d"];t.save(),t.beginPath(),i?t.arc(128,128,124,0,Math.PI*2):(t.moveTo(8,512),t.lineTo(8,128),t.arc(128,128,120,Math.PI,0),t.lineTo(248,512),t.closePath()),t.clip();let r=32;for(let s=0;s<e.height;s+=r)for(let a=0;a<256;a+=r)t.fillStyle=n[Math.floor(Math.random()*n.length)],t.globalAlpha=.85,t.beginPath(),t.moveTo(a+Math.random()*8,s+Math.random()*8),t.lineTo(a+r-Math.random()*8,s+Math.random()*8),t.lineTo(a+r-Math.random()*8,s+r-Math.random()*8),t.lineTo(a+Math.random()*8,s+r-Math.random()*8),t.fill();t.globalAlpha=1,t.strokeStyle="#26221e",t.lineWidth=4;for(let s=0;s<e.height;s+=r)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();for(let s=0;s<256;s+=r)t.beginPath(),t.moveTo(s,0),t.lineTo(s,e.height),t.stroke();if(i)for(let s=0;s<12;s++){let a=s/12*Math.PI*2;t.beginPath(),t.moveTo(128,128),t.lineTo(128+Math.cos(a)*130,128+Math.sin(a)*130),t.stroke()}else t.fillStyle="rgba(255,248,220,0.85)",t.fillRect(118,150,20,200),t.fillRect(78,200,100,20);return t.restore(),e}function gv(){let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,0);t.addColorStop(0,"#5e4b3d"),t.addColorStop(.5,"#6b5646"),t.addColorStop(1,"#5a4739"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let n=0;n<160;n++){e.strokeStyle=`rgba(90,55,25,${.04+Math.random()*.06})`;let r=Math.random()*512;e.beginPath(),e.moveTo(r,0),e.bezierCurveTo(r+6,170,r-6,340,r+3,512),e.stroke()}return e.fillStyle="#f7f5ef",e.fillRect(56,40,400,300),e.strokeStyle="#3f3229",e.lineWidth=6,e.strokeRect(53,37,406,306),e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=2,e.strokeRect(70,54,372,272),e.strokeStyle="rgba(80,45,20,0.45)",e.lineWidth=3,e.strokeRect(56,380,400,110),e.fillStyle="rgba(255,240,215,0.08)",e.fillRect(56,380,400,110),e.fillStyle="#3f3229",e.fillRect(0,352,512,10),i}function vv(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#d8d6cf",e.fillRect(0,0,256,256);for(let t=0;t<2600;t++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"90,90,85"},${Math.random()*.12})`,e.fillRect(Math.random()*256,Math.random()*256,2,2);return i}function Dm(i,{FLOOR:e,textTexture:t,rng:n,deceasedName:r=""}){let s=n(4242),a=new Te,o=[],c=[],l=[],h=[],u=[],d={group:a,boxes:o,circles:c,walkables:l,lampMats:h,shoes:!1,update:(g,y)=>u.forEach(E=>E(g,y)),setName:()=>{}},p=(g,y,E,S)=>o.push({x0:g,x1:y,z0:E,z1:S}),f=(g,y,E={})=>(y&&g.position.set(...y),E.rot&&g.rotation.set(...E.rot),g.castShadow=E.cast!==!1,g.receiveShadow=E.receive!==!1,a.add(g),E.walk&&l.push(g),g),v=(g,y,E,S,b,U)=>f(new H(new xe(g,y,E),S),b,U),m=g=>(g.raycast=()=>{},g);function _(g,y){v(21,e,13.5,Ve(g,{roughness:.95}),[0,e/2,-5.75],{walk:!0});let E=f(new H(new vt(20.4,13),y),[0,e+.004,-5.9],{rot:[-Math.PI/2,0,0],cast:!1,walk:!0});for(let S=0;S<2;S++)v(7,e*(.66-S*.33),.6,Ve(g),[0,e*(.66-S*.33)/2,1.25+S*.6],{walk:!0});return E}if(i==="hospital"){d.shoes=!0,d.ceiling=e+3.7;let g=3.7;_("#cfcbc0",Ve("#d9d7d0",{roughness:.75,map:Ai(vv(),[12,8])}));let y=Ai(gv());y.wrapS=zr;let E=fe=>{let re=y.clone();return re.repeat.set(fe/2.2,1),re.needsUpdate=!0,new ke({map:re,roughness:.7})},S=Ve("#f3f1ea",{roughness:.9});v(20.6,g,.3,S,[0,e+g/2,-12.2]),p(-10.5,10.5,-12.6,-11.9),m(f(new H(new vt(20.4,g),E(20.4)),[0,e+g/2,-12.04],{cast:!1}));for(let fe of[-1,1])v(.3,g,12.2,S,[fe*10.15,e+g/2,-6.2]),p(fe*10.15-.3,fe*10.15+.3,-12.4,-.05),m(f(new H(new vt(12.2,g),E(12.2)),[fe*9.99,e+g/2,-6.2],{rot:[0,-fe*Math.PI/2,0],cast:!1}));let b=Ve("#5e4b3d",{roughness:.55});v(10.4,.5,.3,b,[0,e+3.3,-11.9]);for(let fe of[-5.1,5.1])v(.5,g,.4,b,[fe,e+g/2,-11.85]);let U=document.createElement("canvas");U.width=1024,U.height=512;let z=U.getContext("2d");z.fillStyle="#9c8b7a",z.fillRect(0,0,1024,512);for(let fe=0;fe<420;fe++){let re=Math.random()*1024;z.strokeStyle=`rgba(${Math.random()<.5?"70,55,42":"205,192,175"},${.05+Math.random()*.08})`,z.lineWidth=.6+Math.random()*1.6,z.beginPath(),z.moveTo(re,0),z.bezierCurveTo(re+(Math.random()-.5)*14,170,re+(Math.random()-.5)*14,340,re+(Math.random()-.5)*8,512),z.stroke()}z.fillStyle="rgba(40,30,22,0.18)";for(let fe=0;fe<=1024;fe+=256)z.fillRect(fe-1,0,2,512);let I=Ai(U);m(f(new H(new vt(9.8,g-.05),new ke({map:I,roughness:.55})),[0,e+(g-.05)/2,-11.6],{cast:!1}));for(let fe of[-1,1])v(8.9,g,.3,S,[fe*6.05,e+g/2,.75]),m(f(new H(new vt(8.9,g),E(8.9)),[fe*6.05,e+g/2,.59],{rot:[0,Math.PI,0],cast:!1})),p(fe>0?1.6:-10.5,fe>0?10.5:-1.6,.55,.95);v(3.2,g-2.6,.3,S,[0,e+2.6+(g-2.6)/2,.75]);let X=Ve("#8a5a32",{roughness:.5});for(let fe of[-1,1])m(v(1.5,2.55,.06,X,[fe*2.35,e+1.28,1.25],{rot:[0,fe*-1.05,0]}));let G=new ke({roughness:.5});v(3.4,.5,.05,G,[0,e+3.05,.93]),d.setName=fe=>{G.map?.dispose(),G.map=t(`\uD2B91\uD638\uC2E4   \u6545 ${fe} \uB2D8`,{w:1024,h:150,bg:"#1f2a2c",fg:"#f4efe2",font:'500 70px "Gowun Dodum", sans-serif'}),G.needsUpdate=!0},d.setName(r),f(new H(new vt(20.6,13),Ve("#faf9f5",{side:St,emissive:"#fffaf0",emissiveIntensity:.35})),[0,e+g-.005,-5.9],{rot:[Math.PI/2,0,0],cast:!1});let N=new ke({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:1});h.push(N);for(let fe=-8;fe<=8;fe+=4)for(let re=-10.5;re<=-1;re+=3.2)m(f(new H(new Yt(.16,20),N),[fe,e+g-.01,re],{rot:[Math.PI/2,0,0],cast:!1}));for(let fe of[-1,1])m(v(.12,.18,12.2,b,[fe*9.93,e+g-.1,-6.2],{cast:!1}));m(v(20.2,.18,.12,b,[0,e+g-.1,-11.98],{cast:!1})),v(22,.4,14.6,Ve("#d9d3c6"),[0,e+g+.2,-5.85]),v(21.8,.9,.2,Ve("#e9e4d8"),[0,e+g+.3,1]),v(5.2,.8,.12,new ke({map:t("\uC0BC\uAC00 \uC7A5\uB840\uC2DD\uC7A5",{w:1024,h:160,bg:"#2f473e",fg:"#f4efe2",font:'700 92px "Gowun Batang", serif'})}),[0,e+g+1.15,1]);let Z=Ve("#1c1c1e",{roughness:.45}),D=new Te,j=new H(new xe(.9,.42,2.4),Z);j.position.y=.21,D.add(j);let ee=new H(new xe(.25,.9,2.4),Z);ee.position.set(.33,.45,0),D.add(ee);for(let fe of[-1.3,1.3]){let re=new H(new xe(.9,.6,.22),Z);re.position.set(0,.3,fe),D.add(re)}D.position.set(9.35,e,-8.6),D.traverse(fe=>{fe.isMesh&&(fe.castShadow=!0)}),a.add(D),p(8.85,9.9,-9.95,-7.25),v(1,1.05,.7,Ve("#f2f1ec",{roughness:.4}),[-9.4,e+.53,-10.9]),p(-9.95,-8.85,-11.3,-10.5);let ce=Ve("#3b3d42",{metalness:.4,roughness:.4}),ae=new Te,be=new H(new Me(.06,.08,2.4,10),ce);be.position.y=1.2,ae.add(be);let de=new ke({color:"#fff4e0",emissive:"#ffd99a",emissiveIntensity:1.1});h.push(de);let Ee=new H(new xe(.42,.55,.42),de);Ee.position.y=2.55,ae.add(Ee),d.lanternStand=ae}if(i==="hanok"){d.shoes=!0,d.ceiling=e+5.4;let g=Ve("#6a4e3b",{roughness:.7}),y=Ve("#4a372b",{roughness:.7});_("#d9d6ca",Ve("#c9ad8a",{roughness:.6,map:Ai(Vc("#c3a582"),[6,4])}));let E=Ve("#f3efe4",{roughness:.95});v(20.6,5.4,.3,E,[0,e+2.7,-12.2]),p(-10.5,10.5,-12.6,-11.9);for(let G of[-1,1]){v(.3,5.4,12.2,E,[G*10.15,e+2.7,-6.2]),p(G*10.15-.3,G*10.15+.3,-12.4,-.05);for(let N of[.25,5.2])v(.34,.25,12.2,g,[G*10.15,e+N,-6.2]);for(let N=-12;N<=-.4;N+=2.6)v(.36,5.4,.22,g,[G*10.15,e+2.7,N]);for(let N=-11;N<=-1.5;N+=2.6)for(let Z=0;Z<5;Z++)m(v(.32,.03,1.6,g,[G*10.15,e+3.6+Z*.28,N+1.3],{cast:!1}))}for(let G=-10;G<=10;G+=2.5)v(.22,5.4,.36,g,[G,e+2.7,-12.05]);f(new H(new vt(20.6,13),Ve("#7a5c45",{side:St})),[0,e+5.4,-5.9],{rot:[Math.PI/2,0,0]});for(let G=-12;G<=.5;G+=1.5)m(v(20.6,.18,.18,y,[0,e+5.3,G],{cast:!1}));for(let G of[-9.7,-5.3,5.3,9.7])f(new H(new Me(.27,.3,5.4,20),g),[G,e+2.7,.6]),f(new H(new Me(.42,.48,.25,8),Ve("#cfccbf")),[G,e+.12,.6]),c.push({x:G,z:.6,r:.45});v(21,.55,.45,y,[0,e+5.15,.6]),v(21.2,.16,.47,Ve("#557d6c"),[0,e+4.82,.6]),v(21.2,.05,.48,Ve("#8f4235"),[0,e+4.72,.6]),v(3,.9,.1,new ke({map:t("\uC0BC\uAC00",{w:768,h:230,bg:"#3e5b50",fg:"#f3ead2",font:'700 140px "Gowun Batang", serif',border:"#c9b27c"}),roughness:.6}),[0,e+6.05,.9]);let S=Ve("#43464d",{roughness:.75});v(24.5,.4,17.5,S,[0,e+5.65,-5.9]),f(new H(new Me(.22,1,1,4,1),S),[0,e+7.45,-5.9],{rot:[0,Math.PI/4,0]}).scale.set(17.6,3.2,12.6),v(9.5,.45,.6,Ve("#35373d"),[0,e+9.2,-5.9]);for(let G of[-1,1])v(.7,.75,.7,Ve("#35373d"),[G*4.8,e+9.35,-5.9],{rot:[0,0,G*.25]});let U=t("\u8B39\u5F14",{w:256,h:512,bg:"#fbf8ef",fg:"#1d1b19",font:'700 150px "Noto Serif KR", "Gowun Batang", serif',vertical:!0});for(let G of[-4.45,4.45]){let N=new Te,Z=new ke({map:U,emissive:"#fff4dc",emissiveIntensity:.4,emissiveMap:U,roughness:.9});h.push(Z),N.add(new H(new Me(.34,.34,.95,20),Z));let D=new H(new Me(.3,.36,.08,20),Ve("#1d1d1f")),j=D.clone();D.position.y=.5,j.position.y=-.5,N.add(D,j),N.position.set(G,e+3.9,.9);let ee=s()*6;u.push((ce,ae)=>{N.rotation.z=Math.sin(ae*.9+ee)*.03}),a.add(N)}let z=new Te,I=Ve("#bdb9ab",{roughness:1});[[new Me(.5,.6,.25,8),.12],[new Me(.13,.16,.9,8),.7],[new Me(.42,.32,.2,8),1.25],[new xe(.55,.5,.55),1.6],[new hn(.62,.45,4),2.07]].forEach(([G,N])=>{let Z=new H(G,I);Z.position.y=N,G.type==="ConeGeometry"&&(Z.rotation.y=Math.PI/4),Z.castShadow=!0,z.add(Z)});let X=new H(new xe(.3,.28,.6),new ke({color:"#ffe0a3",emissive:"#ffc773",emissiveIntensity:1.2}));X.position.y=1.6,z.add(X),h.push(X.material),d.lanternStand=z}if(i==="hall"){d.shoes=!0,d.ceiling=e+4.8,_("#cfcbc0",Ve("#eae4d7",{roughness:.35,map:Ai(mv(),[10,6])}));let g=Ve("#f4f2ed",{roughness:.9}),y=Ve("#8b6a4f",{roughness:.6,map:Ai(Vc("#8b6a4f"),[1,4])});v(20.6,4.8,.3,g,[0,e+2.4,-12.2]),p(-10.5,10.5,-12.6,-11.9);for(let D=-9.6;D<=9.6;D+=.32)Math.abs(D)>6.9&&m(v(.14,4.6,.12,y,[D,e+2.3,-11.98],{cast:!1}));for(let D of[-1,1])v(.3,4.8,12.2,g,[D*10.15,e+2.4,-6.2]),v(.32,1,12.2,y,[D*10.1,e+.5,-6.2]),p(D*10.15-.3,D*10.15+.3,-12.4,-.05);let E=new ke({color:"#cfe0e6",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1}),S=Ve("#3b3d42",{metalness:.4,roughness:.4});for(let D of[-1,1]){let j=D*6.45;m(v(7.7,3.3,.05,E,[j,e+1.65,.75],{cast:!1}));for(let ee=2.6;ee<=10.3;ee+=1.54)m(v(.06,3.3,.08,S,[D*ee,e+1.65,.75],{cast:!1}));p(D>0?2.6:-10.3,D>0?10.3:-2.6,.6,.9)}v(20.6,1.5,.3,g,[0,e+4.05,.75]),v(20.6,.08,.1,S,[0,e+3.3,.75]);let b=new ke({roughness:.5}),U=v(4.2,.6,.06,b,[0,e+3.8,.94]);d.setName=D=>{b.map?.dispose(),b.map=t(`\uD2B91\uD638\uC2E4  \xB7  \u6545 ${D} \uB2D8 \uBE48\uC18C`,{w:1024,h:146,bg:"#2f3a3f",fg:"#f2efe6",font:'500 64px "Gowun Dodum", sans-serif'}),b.needsUpdate=!0},d.setName(r),f(new H(new vt(20.6,13),Ve("#fbfaf6",{side:St})),[0,e+4.8,-5.9],{rot:[Math.PI/2,0,0],cast:!1});let z=new ke({color:"#ffffff",emissive:"#fff6e8",emissiveIntensity:.9});h.push(z);for(let D=-7.5;D<=7.5;D+=3.75)for(let j=-10;j<=-1;j+=3)m(v(1.4,.04,.6,z,[D,e+4.77,j],{cast:!1}));v(21.5,.5,14.2,Ve("#5b5e64"),[0,e+5.05,-5.9]),v(21.6,.7,.2,Ve("#d8d4ca"),[0,e+5,1.15]);let I=new Te,X=new H(new Me(.06,.08,2.4,10),S);X.position.y=1.2,I.add(X);let G=new ke({color:"#fff4e0",emissive:"#ffd99a",emissiveIntensity:1.1,transparent:!0,opacity:.95});h.push(G);let N=new H(new xe(.42,.55,.42),G);N.position.y=2.55,I.add(N);let Z=new H(new xe(.55,.06,.55),S);Z.position.y=2.86,I.add(Z),I.traverse(D=>{D.isMesh&&(D.castShadow=!0)}),d.lanternStand=I}if(i==="chapel"){_("#d6d1c4",Ve("#9a7656",{roughness:.55,map:Ai(Vc("#9a7656"),[6,4])}));let g=Ve("#f5f1e8",{roughness:.95}),y=6.4;d.ceiling=e+y,v(20.6,y,.3,g,[0,e+y/2,-12.2]),p(-10.5,10.5,-12.6,-11.9);let E=Ai(Lm(!1));for(let de of[-1,1]){v(.3,y,12.2,g,[de*10.15,e+y/2,-6.2]),p(de*10.15-.3,de*10.15+.3,-12.4,-.05);for(let Ee of[-10.6,-7.95,-5.25,-2.55]){let fe=new ke({map:E,emissive:"#ffffff",emissiveMap:E,emissiveIntensity:.55,transparent:!0,alphaTest:.1,side:St});h.push(fe),m(f(new H(new vt(1,2),fe),[de*9.98,e+4.55,Ee],{rot:[0,-de*Math.PI/2,0],cast:!1}))}}for(let de of[-1,1])v(8.9,y,.35,g,[de*6.05,e+y/2,.75]),p(de>0?1.6:-10.5,de>0?10.5:-1.6,.55,.95);v(3.2,y-3.6,.35,g,[0,e+3.6+(y-3.6)/2,.75]);let S=new ke({map:Ai(Lm(!0)),emissive:"#ffffff",emissiveIntensity:.6,transparent:!0,alphaTest:.1});S.emissiveMap=S.map,h.push(S),m(f(new H(new Yt(.9,32),S),[0,e+5.6,.94],{cast:!1}));let b=Ve("#5d4030",{roughness:.6});for(let de of[-1,1])m(v(1.5,3.4,.08,b,[de*2.4,e+1.7,1.15],{rot:[0,de*-.9,0]}));let U=new xi;U.moveTo(-11.3,0),U.lineTo(0,4.2),U.lineTo(11.3,0),U.lineTo(-11.3,0);let z=f(new H(new ia(U,{depth:14.6,bevelEnabled:!1}),Ve("#4a4f57",{roughness:.7})),[0,e+y,-13]),I=new xi;I.moveTo(-10.4,0),I.lineTo(0,3.9),I.lineTo(10.4,0),I.lineTo(-10.4,0),f(new H(new Sr(I),g),[0,e+y,.95]),f(new H(new vt(20.6,13),Ve("#6b4b36",{side:St})),[0,e+y,-5.9],{rot:[Math.PI/2,0,0],cast:!1});for(let de=-11.5;de<=0;de+=2.3)m(v(20.4,.25,.25,Ve("#5a3e2c"),[0,e+y-.15,de],{cast:!1}));v(1.8,2.6,1.8,g,[0,e+y+4,0]);let X=f(new H(new hn(1.45,2.4,4),Ve("#4a4f57")),[0,e+y+6.5,0],{rot:[0,Math.PI/4,0]}),G=Ve("#d9c07a",{metalness:.6,roughness:.35});v(.12,1,.12,G,[0,e+y+8.1,0]),v(.6,.12,.12,G,[0,e+y+8.3,0]);let N=Ve("#6e4c34",{roughness:.5});v(.28,2.4,.16,N,[0,e+5,-11.95]),v(1.4,.26,.16,N,[0,e+5.5,-11.95]);let Z=new cn({color:"#fff4d8",transparent:!0,opacity:.18});m(f(new H(new Yt(1.6,40),Z),[0,e+5.2,-12.03],{cast:!1}));let D=Ve("#7a5639",{roughness:.55});for(let de of[-1,1])for(let Ee of[-4.2,-3.1]){let fe=de>0?5:-8.8,re=de>0?8.8:-5,ge=(fe+re)/2,ye=re-fe;v(ye,.08,.5,D,[ge,e+.45,Ee]),v(ye,.55,.06,D,[ge,e+.75,Ee+.25]),v(.08,.9,.55,D,[fe,e+.45,Ee+.02]),v(.08,.9,.55,D,[re,e+.45,Ee+.02]),p(fe-.05,re+.05,Ee-.3,Ee+.32)}for(let de=0;de<9;de++){let Ee=1.2+Math.sin(de/8*Math.PI)*1.4;f(new H(new Me(.08,.08,Ee,10),G),[7.4+de*.22,e+1+Ee/2,-11.6])}v(2.3,1,.7,Ve("#5d4030"),[8.3,e+.5,-11.3]),p(7.1,9.5,-11.9,-10.9);let j=new Te,ee=Ve("#2f2b28",{metalness:.5,roughness:.5}),ce=new H(new Me(.05,.07,1.1,8),ee);ce.position.y=.55,j.add(ce);let ae=new H(new Me(.55,.55,.06,20),ee);ae.position.y=1.12,j.add(ae);let be=new ke({color:"#ffd27a",emissive:"#ffc35a",emissiveIntensity:1.2});h.push(be);for(let de=0;de<12;de++){let Ee=de/12*Math.PI*2,fe=de%2?.42:.25,re=new H(new Me(.04,.04,.14,8),Ve("#fbf6ea"));re.position.set(Math.cos(Ee)*fe,1.22,Math.sin(Ee)*fe),j.add(re);let ge=new H(new hn(.02,.06,6),be);ge.position.set(Math.cos(Ee)*fe,1.33,Math.sin(Ee)*fe),j.add(ge)}d.lanternStand=j}if(i==="garden"){_("#b7a68a",Ve("#a98563",{roughness:.6,map:Ai(Vc("#a98563"),[5,4])}));let g=Ve("#f4f1ea",{roughness:.7}),y=[[-9.8,.4],[-9.8,-5.8],[-9.8,-11.8],[9.8,.4],[9.8,-5.8],[9.8,-11.8],[-4.9,.4],[4.9,.4]];for(let[D,j]of y)v(.25,3.8,.25,g,[D,e+1.9,j]),c.push({x:D,z:j,r:.3});for(let D of[.4,-5.8,-11.8])m(v(20,.18,.22,g,[0,e+3.85,D],{cast:!1}));for(let D=-9.8;D<=9.8;D+=1.4)m(v(.12,.12,12.6,g,[D,e+3.98,-5.7],{cast:!1}));let E=new ke({color:"#ffffff",transparent:!0,opacity:.55,side:St,roughness:1,depthWrite:!1});for(let D=-9;D<=9;D+=2){let j=new vt(2.1,3.6,6,1),ee=j.attributes.position;for(let ce=0;ce<ee.count;ce++)ee.setZ(ce,Math.sin((ee.getX(ce)+1.05)*3)*.12);m(f(new H(j,E),[D,e+2,-12.05],{cast:!1}))}let S=new ke({color:"#fff3d0",emissive:"#ffd98a",emissiveIntensity:1.2});h.push(S);let b=new mt(.05,8,6);for(let D of[-2.5,-5.8,-9])for(let j=-9.6;j<=9.6;j+=.6){let ee=.45*(1-(j/9.8)**2);m(f(new H(b,S),[j,e+3.75-ee,D],{cast:!1}))}let U=f(new H(new Me(.45,.8,7,10),Ve("#6d5444")),[0,3.5,-15.5]),z=Ve("#8fae6a",{flatShading:!0});for(let D=0;D<9;D++)f(new H(new Er(2.4+s()*1.4,0),z),[(s()-.5)*9,8+s()*3,-15-s()*3]);for(let D=-9;D<=9;D+=1.5){if(Math.abs(D)<3)continue;let j=v(.6,.4,.4,Ve("#e8e2d6"),[D,e+.2,.9]);for(let ee=0;ee<4;ee++){let ce=Ti(1.4,ee%3?"white":"cream");ce.position.set(D+(ee-1.5)*.12,e+.7,.9+(s()-.5)*.1),a.add(ce)}p(D-.32,D+.32,.68,1.12)}let I=new Te,X=new H(new xe(.14,2.4,.14),Ve("#7a5a40"));X.position.y=1.2,I.add(X);let G=new H(new xe(.6,.08,.08),Ve("#7a5a40"));G.position.set(.25,2.3,0),I.add(G);let N=new ke({color:"#fff3dc",emissive:"#ffd08a",emissiveIntensity:1.1});h.push(N);let Z=new H(new mt(.24,16,12),N);Z.scale.y=1.2,Z.position.set(.5,1.95,0),I.add(Z),d.lanternStand=I,d.easels=!0}return d}var He=.4,Ri=.3,Xc=30,De=(i,e={})=>new ke({color:i,roughness:.82,metalness:0,...e});function Um(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function hs(i,{w:e=512,h:t=256,bg:n="#f6f3ea",fg:r="#2a2723",font:s='700 120px "Gowun Batang", serif',vertical:a=!1,border:o=null}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let l=c.getContext("2d");if(n&&(l.fillStyle=n,l.fillRect(0,0,e,t)),o&&(l.strokeStyle=o,l.lineWidth=Math.max(4,e*.02),l.strokeRect(l.lineWidth,l.lineWidth,e-l.lineWidth*2,t-l.lineWidth*2)),l.fillStyle=r,l.font=s,l.textAlign="center",l.textBaseline="middle",a){let u=[...i],d=t/(u.length+.6);u.forEach((p,f)=>l.fillText(p,e/2,d*(f+.8)))}else{let u=i.split(`
`),d=t/(u.length+.4);u.forEach((p,f)=>l.fillText(p,e/2,d*(f+.7)))}let h=new En(c);return h.colorSpace=Rt,h.anisotropy=4,h}function yv(i){let e=[...i.replace(/\s+/g," ")].slice(0,22),t=document.createElement("canvas");t.width=96,t.height=768;let n=t.getContext("2d");n.fillStyle="#fbfaf6",n.fillRect(0,0,96,768),n.fillStyle="#1b1a18";let r=Math.min(64,740/Math.max(1,e.length));n.font=`700 ${Math.floor(r*.86)}px "Noto Serif KR", "Gowun Batang", serif`,n.textAlign="center",n.textBaseline="middle",e.forEach((a,o)=>n.fillText(a,48,20+r*(o+.5)));let s=new En(t);return s.colorSpace=Rt,s}function Nm(i=64,e="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);s.addColorStop(0,e),s.addColorStop(1,t),r.fillStyle=s,r.fillRect(0,0,i,i);let a=new En(n);return a.colorSpace=Rt,a}function km(i=""){let e=document.createElement("canvas");e.width=600,e.height=800;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,800);return n.addColorStop(0,"#e9e6dc"),n.addColorStop(1,"#cfcabb"),t.fillStyle=n,t.fillRect(0,0,600,800),t.fillStyle="#a9a291",t.beginPath(),t.ellipse(300,330,130,155,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(300,760,250,240,0,Math.PI,0),t.fill(),t.fillStyle="#6f6a5e",t.font='700 54px "Gowun Batang", serif',t.textAlign="center",t.fillText(i?`\u6545 ${i}`:"\uC601\uC815 \uC0AC\uC9C4",300,700),e.toDataURL("image/jpeg",.9)}function _v(i){let e=document.createElement("canvas");e.width=400,e.height=300;let t=e.getContext("2d"),n=["#e8dfcf","#dfe5dc","#e6dde3","#dde2e8"];return t.fillStyle=n[i%n.length],t.fillRect(0,0,400,300),t.strokeStyle="rgba(80,70,60,.25)",t.lineWidth=3,t.beginPath(),t.moveTo(40,230),t.lineTo(140,130),t.lineTo(210,200),t.lineTo(260,160),t.lineTo(360,240),t.stroke(),t.beginPath(),t.arc(300,90,24,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(70,62,52,.6)",t.font='500 24px "Gowun Dodum", sans-serif',t.textAlign="center",t.fillText("\uCD94\uC5B5 \uC0AC\uC9C4 \uC790\uB9AC",200,278),e}var Wc={day:{top:"#a9c8dc",bottom:"#f1f0e8",fog:"#ebebe3",hemiSky:"#ffffff",hemiGround:"#b8b29d",hemi:1.15,sun:"#fff1df",sunI:1.7,lamp:.55,star:0},dusk:{top:"#7183a8",bottom:"#f0c39f",fog:"#e5c9b2",hemiSky:"#ffe2c8",hemiGround:"#8a7a6a",hemi:.85,sun:"#ffae7a",sunI:1.25,lamp:1.1,star:.15},night:{top:"#0a1427",bottom:"#2b3654",fog:"#1b2338",hemiSky:"#7d8cc0",hemiGround:"#2a2a33",hemi:.42,sun:"#a9bcff",sunI:.35,lamp:2,star:1}};function Bm(i){let e=new Wr,t=Um(20261101),n=new Set,r=[],s=[],a=new Map,o=[],c=[],l=(P,B,Y,se)=>r.push({x0:P,x1:B,z0:Y,z1:se}),h=(P,B,Y)=>s.push({x:P,z:B,r:Y}),u=(P,B)=>P.traverse(Y=>{(Y.isMesh||Y.isSprite||Y.isInstancedMesh)&&(Y.userData.interact=B)}),d=P=>(P.raycast=()=>{},P);function p(P,B){return a.set(P,{id:P,...B}),B}let f={top:{value:new et},bottom:{value:new et}},v=d(new H(new mt(400,32,16),new In({uniforms:f,side:Tn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = clamp(vP.y*1.6+0.15,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, pow(h,0.8)),1.0); }"})));e.add(v);let m=new Pt,_=[];for(let P=0;P<700;P++){let B=t()*Math.PI*2,Y=Math.acos(t()*.9+.08);_.push(Math.sin(Y)*Math.cos(B)*350,Math.cos(Y)*350,Math.sin(Y)*Math.sin(B)*350)}m.setAttribute("position",new ze(_,3));let g=new ea({color:"#ffffff",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1});e.add(d(new ao(m,g))),e.fog=new no("#ebebe3",40,140);let y=new qr("#ffffff","#b8b29d",1.1);e.add(y);let E=new $r("#fff1df",1.7);E.position.set(-14,24,16),E.castShadow=!0,E.shadow.mapSize.set(2048,2048),Object.assign(E.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:80}),E.shadow.bias=-6e-4,E.shadow.normalBias=.03,e.add(E,E.target),E.target.position.set(0,0,-2);let S=new H(new Yt(160,64),De("#dcdccd",{roughness:1}));S.rotation.x=-Math.PI/2,S.receiveShadow=!0,e.add(S),n.add(S);let b=new H(new Yt(60,48),De("#cfd6bd",{roughness:1}));b.rotation.x=-Math.PI/2,b.position.y=.005,b.receiveShadow=!0,e.add(b),n.add(b);let U=De("#efeee6",{roughness:.95});for(let P=2.6;P<24;P+=1.25)for(let B of[-1.05,1.05]){let Y=new H(new xe(2+t()*.06,.06,1.12),U);Y.position.set(B+(t()-.5)*.06,.03,P),Y.receiveShadow=!0,e.add(Y),n.add(Y)}let z=["#b9c4a3","#c7b99a","#a9b896","#c9ae8c"];for(let P=0;P<14;P++){let B=P/14*Math.PI*2+t()*.3,Y=95+t()*25,se=d(new H(new mt(30+t()*25,24,12),De(z[P%4],{roughness:1})));se.scale.y=.35+t()*.2,se.position.set(Math.cos(B)*Y,-4,Math.sin(B)*Y),e.add(se)}let I=null,X=new Te;e.add(X);let G=new Te;G.position.set(-4.6,0,9.5),e.add(G),h(-4.6,9.5,.65);let N=new Yi("#ffcb7a",2,6,2);N.position.set(-4.6,1.9,9.5),e.add(N),p("lantern",{label:"\uB9C8\uC74C \uB4F1\uBD88",verb:"\uB4F1\uBD88 \uB744\uC6B0\uAE30",spot:{x:-3.6,z:10.3,face:-Math.PI*.75},radius:1.5,anchor:new T(-4.6,2.7,9.5)});let Z=new Yi("#fff6ec",18,14,1.6);Z.position.set(0,He+4.2,-7.2),e.add(Z);let D=new Yi("#fbf8f2",10,16,1.8);D.position.set(0,He+4.3,-2.2),e.add(D);let j=new Te;e.add(j);let ee=-10.4,ce=null,ae=new H(new xe(13.6,4.5,.3),De("#e7e3d8"));ae.position.set(0,He+2.25,ee-.8),j.add(ae),l(-7,7,-11.9,-9.75);let be=new Te;be.position.set(0,He,-9.95),j.add(be);let de=new H(new xe(1.32,1.72,.09),De("#121214",{roughness:.35}));de.position.y=2.38,de.castShadow=!0,be.add(de);let Ee=new cn({color:"#ffffff"}),fe=new H(new vt(1.1,1.47),Ee);fe.position.set(0,2.38,.05),be.add(fe);for(let P of[-1,1]){let B=new H(new xe(.62,.075,.02),De("#0c0c0d",{roughness:.6}));B.position.set(P*.47,3,.065),B.rotation.z=P*-Math.PI/4,be.add(B)}let re=new H(new xe(.9,1.5,.3),De("#e9e5da"));re.position.set(0,.75,-.1),be.add(re),u(be,"portrait");let ge=new Te;ge.position.set(0,He+3.8,-10),j.add(ge);let ye=new H(new xe(.26,.62,.06),new ke({color:"#ffffff",roughness:.6}));ye.position.set(-1.35,He+1.12,-8.7),j.add(ye);let Be=new Te;j.add(Be);let je=new Te;Be.add(je);let A=new H(new xe(3.9,.8,1.1),De("#f4f1e8"));A.position.set(0,He+.4,-8.4),A.castShadow=!0,A.receiveShadow=!0,Be.add(A),l(-2.05,2.05,-9,-7.8);let w=He+.8,V=new Te,k=new H(new Me(.17,.12,.15,24),De("#7a6a4a",{metalness:.6,roughness:.4}));k.position.y=.075,V.add(k);let x=new H(new Yt(.15,24),De("#cfc8b8"));x.rotation.x=-Math.PI/2,x.position.y=.14,V.add(x),V.position.set(0,w,-8.15),j.add(V);let C=new Te;C.position.copy(V.position).add(new T(0,.14,0)),j.add(C);let W=[];for(let P of[-1.35,1.35]){let B=new H(new Me(.05,.05,.42,14),De("#fbfaf5"));B.position.set(P,w+.21,-8.3),Be.add(B);let Y=new H(new hn(.03,.09,10),new cn({color:"#ffcf73"}));Y.position.set(P,w+.47,-8.3),Be.add(Y),W.push(Y)}let F=new Yi("#ffbf6a",3,5,2);F.position.set(0,w+.6,-8),e.add(F);let te=["#c9493b","#e3c063","#d78f3c"];[-.7,.7].forEach((P,B)=>{let Y=new H(new Me(.2,.15,.06,20),De("#efe9da"));Y.position.set(P,w+.03,-8.55),je.add(Y);for(let se=0;se<4;se++){let _e=new H(new mt(.075,14,10),De(te[(B+se)%3],{roughness:.5}));_e.position.set(P+(se%2?.07:-.07),w+.13+(se>1?.11:0),-8.55+(se===1?.05:-.03)),je.add(_e)}}),u(A,"altar"),u(V,"altar");let q=new H(new xe(3.7,.1,.95),De("#efece2"));q.position.set(0,He+.05,-7.25),q.receiveShadow=!0,Be.add(q),l(-1.9,1.9,-7.75,-6.8);let K=new Te;j.add(K),u(q,"altar");let ne=new H(new xe(.85,.08,.85),De("#4b4f5c"));ne.position.set(0,He+.04,-6.15),ne.receiveShadow=!0,j.add(ne),n.add(ne);let le=new Te;j.add(le);let he=He+.95,Re=new ke({color:"#e4e2dc",roughness:.7}),Fe=De("#4f4037",{roughness:.5}),Xe=new H(new xe(3.9,.95,1.1),Fe);Xe.position.set(0,He+.475,-8.4),Xe.castShadow=!0,Xe.receiveShadow=!0,le.add(Xe);for(let P=0;P<4;P++){let B=new H(new vt(.86,.72),Re);B.position.set(-1.43+P*.953,He+.47,-7.845),le.add(B)}let st=new H(new xe(3.95,.02,1.15),new ke({color:"#cfe0dc",transparent:!0,opacity:.35,roughness:.05}));st.position.set(0,he+.01,-8.4),le.add(st);let rt=De("#8a1d18",{roughness:.3}),gt=De("#c29a45",{metalness:.75,roughness:.3});function Ne(P,B,Y){let se=new Te,_e=new H(new Me(.1,.12,.03,18),rt),Pe=new H(new Me(.045,.06,.1,14),rt);Pe.position.y=.065;let Ae=new H(new Me(.16,.1,.05,20),rt);Ae.position.y=.14,se.add(_e,Pe,Ae),Y(se,.165),se.position.set(P,he+.02,B),se.traverse(Ie=>{Ie.isMesh&&(Ie.castShadow=!0)}),le.add(se)}let Ke=(P,B,Y,se,_e,Pe,Ae=1)=>{let Ie=new H(new mt(B,16,12),De(Y,{roughness:.45}));return Ie.scale.y=Ae,Ie.position.set(se,_e,Pe),P.add(Ie),Ie},nt=(P,B,Y=1)=>(se,_e)=>{[[-.07,0],[.07,0],[0,.07]].forEach(([Pe,Ae])=>Ke(se,B,P,Pe,_e+B*Y,Ae-.02,Y)),Ke(se,B,P,0,_e+B*Y*2.6,0,Y)};[[-1.62,nt("#a3241c",.035)],[-1.22,nt("#6b3f22",.04,.8)],[-.82,nt("#e08a3a",.05,.55)],[-.4,nt("#d9b264",.085)],[.4,nt("#c63b32",.075)],[.82,nt("#f0a21f",.05)],[1.22,(P,B)=>{for(let Y=0;Y<5;Y++){let se=new H(new Kn(.025,.16,4,8),De("#f1d23e",{roughness:.5}));se.rotation.set(.3,Y*.6,Math.PI/2-.25),se.position.set((Y-2)*.03,B+.05,0),P.add(se)}}]].forEach(([P,B])=>Ne(P,-8.65,B)),Ne(1.66,-8.6,(P,B)=>{let Y=Ke(P,.17,"#2f6b2c",0,B+.16,0),se=document.createElement("canvas");se.width=128,se.height=64;let _e=se.getContext("2d");_e.fillStyle="#3f7d36",_e.fillRect(0,0,128,64),_e.fillStyle="#1d3d19";for(let Pe=0;Pe<8;Pe++){_e.beginPath(),_e.moveTo(Pe*16,0);for(let Ae=0;Ae<=64;Ae+=8)_e.lineTo(Pe*16+Math.sin(Ae*.4)*3,Ae);_e.lineTo(Pe*16+6,64),_e.lineTo(Pe*16+6,0),_e.fill()}Y.material=new ke({map:new En(se),roughness:.35})});let we=new Te,_t=new H(new Me(.05,.07,.06,14),rt),Mt=new H(new Me(.045,.03,.05,14),rt);Mt.position.y=.06,we.add(_t,Mt);let Xn=new H(new Yt(.038,16),new ke({color:"#e9dcae",roughness:.1,metalness:.2}));Xn.rotation.x=-Math.PI/2,Xn.position.y=.08,Xn.visible=!1,we.add(Xn),we.position.set(0,he+.03,-8.1),le.add(we);function an(P,B,Y,se=.35){let _e=new Te,Pe=new H(new Me(.06,.09,.04,16),gt),Ae=new H(new Me(.025,.03,se,12),gt);Ae.position.y=se/2;let Ie=new H(new Me(.07,.04,.04,16),gt);Ie.position.y=se;let Ge=new H(new Me(.035,.035,.2,12),De("#fbfaf5"));Ge.position.y=se+.12;let Ht=new H(new hn(.022,.07,10),new cn({color:"#ffcf73"}));Ht.position.y=se+.26,W.push(Ht),_e.add(Pe,Ae,Ie,Ge,Ht),_e.position.set(P,B,Y),_e.traverse(Kt=>{Kt.isMesh&&(Kt.castShadow=!0)}),le.add(_e)}an(-1.85,he+.02,-8.75),an(1.85,he+.02,-8.2);let kt=new Te,Vt=new H(new xe(1.25,.05,.6),new ke({color:"#d7e3df",transparent:!0,opacity:.55,roughness:.05}));Vt.position.y=.44;let O=new H(new xe(1.2,.42,.56),De("#4f4037",{roughness:.5}));O.position.y=.21;let oi=new H(new vt(.95,.24),De("#c9a04e",{metalness:.6,roughness:.35}));oi.position.set(0,.21,.282),kt.add(Vt,O,oi),kt.position.set(0,He,-7.3),kt.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),le.add(kt),an(-.45,He+.46,-7.3,.22);let li=new H(new Me(.05,.04,.16,14),gt);li.position.set(.42,He+.54,-7.3),le.add(li);for(let P=0;P<6;P++){let B=new H(new Me(.005,.005,.3,4),De("#1c1a18"));B.position.set(.42+(P%3-1)*.012,He+.66,-7.3+(P>2?.01:-.01)),le.add(B)}let Lt=new Te,ar=new H(new Me(.07,.07,.3,16),De("#3a2414",{roughness:.2}));ar.position.y=.15;let Pr=new H(new Me(.025,.06,.12,12),De("#3a2414",{roughness:.2}));Pr.position.y=.36;let vs=new H(new Me(.072,.072,.14,16,1,!0),new ke({map:hs("\uCCAD\uC8FC",{w:256,h:128,bg:"#f6f1e4",fg:"#7a1d18",font:'700 64px "Noto Serif KR", serif'})}));vs.position.y=.14,Lt.add(ar,Pr,vs),Lt.position.set(1.2,He,-7.15);let Ta=De("#c9ccd1",{metalness:.8,roughness:.25}),ys=new H(new mt(.09,16,12),Ta);ys.scale.y=.9,ys.position.set(.95,He+.09,-7);let Ir=new H(new Me(.012,.02,.12,8),Ta);Ir.position.set(.86,He+.12,-7),Ir.rotation.z=.9;let wa=new H(new Me(.13,.08,.07,20,1,!0),new ke({color:"#c9ccd1",metalness:.8,roughness:.25,side:St}));wa.position.set(-.95,He+.035,-7.05),le.add(Lt,ys,Ir,wa);let Lr=document.createElement("canvas");Lr.width=256,Lr.height=192;let Ot=Lr.getContext("2d");Ot.fillStyle="#c9a368",Ot.fillRect(0,0,256,192);for(let P=0;P<192;P+=3)Ot.fillStyle=`rgba(120,85,40,${.08+Math.random()*.06})`,Ot.fillRect(0,P,256,1);Ot.strokeStyle="#7a4f24",Ot.lineWidth=6,Ot.strokeRect(3,3,250,186),Ot.lineWidth=3;for(let P of[64,128,192])Ot.beginPath(),Ot.moveTo(P,0),Ot.lineTo(P,192),Ot.stroke();Ot.beginPath(),Ot.moveTo(0,96),Ot.lineTo(256,96),Ot.stroke();let Ui=new H(new vt(1.9,1.35),new ke({map:new En(Lr),roughness:.95}));Ui.rotation.x=-Math.PI/2,Ui.position.set(0,He+.008,-6.15),Ui.receiveShadow=!0,le.add(Ui),n.add(Ui),u(Xe,"altar"),u(kt,"altar");let _s="simple";function Aa(P){_s=P;let B=P==="jesa";for(le.visible=B,Be.visible=!B,ne.visible=!B,V.position.set(0,B?He+.465:w,B?-7.3:-8.15),k.material.color.set(B?"#b8913a":"#7a6a4a"),C.position.copy(V.position).add(new T(0,.14,0)),ye.position.set(B?0:-1.35,B?he+.2:He+1.12,B?-8.85:-8.7),ye.scale.setScalar(B?.65:1);K.children.length;)K.remove(K.children[0]);Cn.setCounts(Dr)}let Dr={};p("altar",{label:"\uC81C\uB2E8",verb:"\uC81C\uB2E8 \uC55E\uC73C\uB85C",spot:{x:0,z:-6.15,face:Math.PI},radius:1.6,anchor:new T(0,He+1.6,-7.6)}),p("portrait",{label:"\uC601\uC815",verb:"\uCD94\uC5B5 \uC0C1\uC601\uAD00",spot:{x:0,z:-6.15,face:Math.PI},radius:0,anchor:new T(0,He+3.4,-9.9)});let ci=new Te;ci.position.set(-3.2,He,-7.4);for(let P=0;P<3;P++){let B=new H(new xe(1.1-P*.25,.2,.5-P*.1),De("#5b4535"));B.position.set(0,.55+P*.2,-P*.08),ci.add(B)}let Ur=new H(new xe(.9,.45,.35),De("#4a372b"));Ur.position.y=.225,ci.add(Ur),j.add(ci),h(-3.2,-7.4,.65);let Nr=new Te;ci.add(Nr),u(ci,"candles"),p("candles",{label:"\uCD1B\uBD88 \uBD09\uD5CC\uB300",verb:"\uCD1B\uBD88 \uBD09\uD5CC",spot:{x:-3.2,z:-6.4,face:Math.PI},radius:1.2,anchor:new T(-3.2,He+1.5,-7.4)});let Ra=new H(new xe(1,.04,1.6),De("#3c3f49"));Ra.position.set(4.1,He+.02,-5.8),j.add(Ra);let hi={x:4.1,z:-5.8,face:-Math.PI/2},Yo={x:2.6,z:-5.8,face:Math.PI/2};p("host",{label:"\uC0C1\uC8FC",verb:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC",spot:Yo,radius:1.5,anchor:new T(4.1,He+1.9,-5.8)});let Ni=new Te,R=new H(new xe(.8,1,.6),new ke({color:"#ffffff",roughness:.6}));R.position.y=.5,R.castShadow=!0,Ni.add(R);let J=new H(new vt(.42,.62),new ke({map:hs("\u8CFB\u5100\u51FD",{w:256,h:380,bg:"#fbfaf6",fg:"#1d1b19",font:'700 104px "Noto Serif KR", "Gowun Batang", serif',vertical:!0,border:"#1d1b19"})}));J.position.set(0,.55,.305),Ni.add(J);let ie=new H(new xe(.4,.02,.05),De("#111"));ie.position.set(0,1.005,0),Ni.add(ie);let oe=new H(new xe(1,.08,.8),De("#4a372b"));oe.position.y=.04,Ni.add(oe),Ni.position.set(4.7,He,-1.7),j.add(Ni),h(4.7,-1.7,.6),u(Ni,"donation"),p("donation",{label:"\uBD80\uC758\uD568",verb:"\uC870\uC758\uAE08 \uB123\uAE30",spot:{x:5.2,z:-.5,face:Math.PI},radius:.9,anchor:new T(4.7,He+1.5,-1.7)});let Q=De("#6a4e3b",{roughness:.7}),me=new Te,Ce=new H(new xe(1.6,.08,.8),Q);Ce.position.y=.78,me.add(Ce);let Le=new H(new xe(1.62,.74,.82),De("#f2efe6"));Le.position.y=.37,me.add(Le);for(let P of[-1,1]){let B=new H(new xe(.34,.02,.44),De("#fdfcf7"));B.position.set(P*.18,.84,0),B.rotation.z=P*-.06,me.add(B)}let Oe=new H(new xe(.74,.015,.48),De("#20242c"));Oe.position.y=.825,me.add(Oe);let qe=new H(new vt(1.1,.24),new ke({map:hs("\uC811\uC218\uB300 \xB7 \uBC29\uBA85\uB85D",{w:768,h:168,bg:"#fbfaf6",fg:"#26231f",font:'700 84px "Gowun Batang", serif'})}));qe.position.set(0,.48,.415),me.add(qe),me.position.set(6.2,He,-1.6),me.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),j.add(me),l(5.3,7.1,-2.1,-1.1),u(me,"guestbook"),p("guestbook",{label:"\uBC29\uBA85\uB85D",verb:"\uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",spot:{x:6.2,z:-.45,face:Math.PI},radius:1.4,anchor:new T(6.2,He+1.5,-1.6)});let We=new Te,$e=new H(new Me(.45,.32,.45,18),De("#a98b62",{roughness:1}));$e.position.y=.6,We.add($e);let at=new H(new Me(.06,.12,.4,10),Q);at.position.y=.2,We.add(at);for(let P=0;P<20;P++){let B=Ti(1.25),Y=t()*Math.PI*2,se=t()*.3;B.position.set(Math.cos(Y)*se,1+t()*.1,Math.sin(Y)*se),B.rotation.set((t()-.5)*.6,t()*3,(t()-.5)*.6),We.add(B)}We.position.set(-3.4,He,-1.4),j.add(We),h(-3.4,-1.4,.55),u(We,"basket"),p("basket",{label:"\uD5CC\uD654\uC6A9 \uAD6D\uD654",verb:"\uAD6D\uD654 \uD55C \uC1A1\uC774 \uB4E4\uAE30",spot:{x:-3.4,z:-.45,face:Math.PI},radius:1.3,anchor:new T(-3.4,He+1.6,-1.4)});let Dt=[],Wt=new Te;j.add(Wt),[{x:-9.85,z:-9.3,ry:Math.PI/2},{x:-9.85,z:-6.6,ry:Math.PI/2},{x:-9.85,z:-3.9,ry:Math.PI/2},{x:9.85,z:-9.3,ry:-Math.PI/2},{x:9.85,z:-6.6,ry:-Math.PI/2},{x:9.85,z:-3.9,ry:-Math.PI/2}].forEach((P,B)=>{let Y=new Te,se=new H(new xe(1.7,1.3,.06),De("#5a4434")),_e=new En(_v(B));_e.colorSpace=Rt;let Pe=new cn({map:_e}),Ae=new H(new vt(1.5,1.1),Pe);Ae.position.z=.035,Y.add(se,Ae),Y.position.set(P.x,He+2.2,P.z),Y.rotation.y=P.ry,j.add(Y),u(Y,`photo:${B}`),Dt.push({group:Y,pic:Ae,mat:Pe,placeholder:_e,url:null});let Ie=new Te;for(let Ge of[-1,1]){let Ht=new H(new xe(.06,2.1,.06),De("#8a6a4c"));Ht.position.set(P.x-Math.sign(P.x)*.15,He+1.05,P.z+Ge*.6),Ht.rotation.x=Ge*.12,Ie.add(Ht)}Wt.add(Ie),p(`photo:${B}`,{label:"\uCD94\uC5B5 \uC0AC\uC9C4",verb:"\uC0AC\uC9C4 \uBCF4\uAE30",spot:{x:P.x+(P.x<0?1.6:-1.6),z:P.z,face:P.x<0?-Math.PI/2:Math.PI/2},radius:0,anchor:new T(P.x,He+3,P.z)})});let wt=new Te;e.add(wt);let Ut=["#141414","#2b2622","#141414","#3b2c22","#f1eee6","#141414","#5a4a3c"],Qe=new Te;e.add(Qe);let It=new H(new xe(9,Ri,8.6),De("#d6d2c4"));It.position.set(17,Ri/2,-5),It.receiveShadow=!0,Qe.add(It);let Xt=new H(new vt(8.8,8.4),De("#d2b693",{roughness:.6}));Xt.rotation.x=-Math.PI/2,Xt.position.set(17,Ri+.004,-5),Xt.receiveShadow=!0,Qe.add(Xt),n.add(It),n.add(Xt);for(let[P,B]of[[12.8,-9],[21.2,-9],[12.8,-1],[21.2,-1]]){let Y=new H(new Me(.2,.22,3.6,14),Q);Y.position.set(P,Ri+1.8,B),Y.castShadow=!0,Qe.add(Y),h(P,B,.35)}let ot=De("#43464d",{roughness:.75}),Ze=new H(new xe(10.5,.3,10),ot);Ze.position.set(17,Ri+3.7,-5),Ze.castShadow=!0,Qe.add(Ze);let on=new H(new Me(.25,1,1,4,1),ot);on.rotation.y=Math.PI/4,on.scale.set(7.6,2,7.2),on.position.set(17,Ri+4.85,-5),on.castShadow=!0,Qe.add(on);let xs=new H(new vt(2.2,.55),new ke({map:hs("\uC2DD\uB2F9 \xB7 \uC811\uAC1D\uC2E4",{w:768,h:190,bg:"#3e5b50",fg:"#f3ead2",font:'700 96px "Gowun Batang", serif',border:"#c9b27c"})}));xs.position.set(17,Ri+3.2,-.65),Qe.add(xs);let kr=new Yi("#ffe6c4",6,10,1.8);kr.position.set(17,3.2,-5),e.add(kr);let xn=new Te,Dn=new H(new xe(1.6,.9,.6),De("#efe9dc"));Dn.position.y=.45,xn.add(Dn);let ki=new H(new Me(.14,.14,.42,16),De("#c9ccd1",{metalness:.6,roughness:.3}));ki.position.set(-.4,1.11,0),xn.add(ki);for(let P=0;P<6;P++){let B=new H(new Me(.04,.03,.09,10),De("#fbfaf6"));B.position.set(.1+P%3*.12,.95+Math.floor(P/3)*.09,.05),xn.add(B)}xn.position.set(20.6,Ri,-8.3),xn.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),Qe.add(xn),l(19.75,21.45,-8.65,-7.95);let Un=[];[[15,-6.6],[19,-5.6],[15,-3],[19,-2.4]].forEach(([P,B],Y)=>{let se=new Te,_e=new H(new xe(1.9,.07,.9),De("#7a5a40",{roughness:.5}));_e.position.y=.38,se.add(_e);for(let[Ae,Ie]of[[-.85,-.38],[.85,-.38],[-.85,.38],[.85,.38]]){let Ge=new H(new xe(.06,.36,.06),De("#5d4431"));Ge.position.set(Ae,.18,Ie),se.add(Ge)}for(let Ae of[-.45,.45]){let Ie=new H(new xe(.6,.07,.6),De("#8e3f37"));Ie.position.set(Ae,.035,.85),se.add(Ie)}for(let Ae=0;Ae<3;Ae++){let Ie=new H(new Me(.09,.07,.04,14),De("#f4f1ea"));Ie.position.set(-.4+Ae*.4,.44,-.2),se.add(Ie);let Ge=new H(new mt(.06,10,6),De(["#c74b35","#e8e1c9","#6d8a4c"][Ae]));Ge.scale.y=.4,Ge.position.set(-.4+Ae*.4,.47,-.2),se.add(Ge)}se.position.set(P,Ri,B),se.traverse(Ae=>{Ae.isMesh&&(Ae.castShadow=!0)}),Qe.add(se),l(P-1,P+1,B-.5,B+.48),u(se,`meal:${Y}`);let Pe=new Te;se.add(Pe),Un.push({group:se,dishes:Pe,seat:{x:P-.45,z:B+.85,face:Math.PI},seat2:{x:P+.45,z:B+.85,face:Math.PI}}),p(`meal:${Y}`,{label:"\uC2DD\uD0C1",verb:"\uC2DD\uC0AC\uD558\uAE30",spot:Un[Y].seat,radius:1.3,anchor:new T(P,1.4,B)})});let Nn=new Te,Bi=new H(new xe(1.3,.6,.7),De("#7a5a40"));Bi.position.y=.7,Nn.add(Bi);for(let P of[-1,1]){let B=new H(new Me(.28,.28,.06,18),De("#3b2c22"));B.rotation.z=Math.PI/2,B.position.set(P*.68,.28,0),Nn.add(B)}for(let P=0;P<26;P++){let B=Ti(1.5,["white","yellow","cream","white"][P%4]);B.position.set((t()-.5)*1.1,1.25+t()*.15,(t()-.5)*.5),Nn.add(B)}let Ca=new H(new vt(1.1,.3),new ke({map:hs("\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30",{w:640,h:170,bg:"#fbfaf6",fg:"#2a2723",font:'700 76px "Gowun Batang", serif'})}));Ca.position.set(0,.72,.36),Nn.add(Ca),Nn.position.set(-3.6,0,4.9),Nn.rotation.y=.45,Nn.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),e.add(Nn),h(-3.6,4.9,.8),u(Nn,"florist"),p("florist",{label:"\uD654\uD658",verb:"\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30",spot:{x:-2.5,z:5.4,face:-2},radius:1.5,anchor:new T(-3.6,2,4.9)});let or=new Te;e.add(or);let Ms=[];for(let P=0;P<70;P++){let B=t()*Math.PI*2,Y=24+t()*22;Ms.push([Math.cos(B)*Y,Math.sin(B)*Y])}for(let P of[-1,1])for(let B=4;B<26;B+=3.2)Ms.push([P*(11.5+t()*3),B+t()*1.5]);for(let P=-8;P<=8;P+=4)Ms.push([P+t(),-17-t()*2]);let dt=["#c4532f","#d9822f","#e2b53b","#7f9a5c","#8fa86b","#b6452e"],ph=De("#6d5444");for(let[P,B]of Ms){if(P>11&&P<23&&B>-11&&B<1)continue;let Y=new Te,se=t(),_e=2.2+t()*1.8,Pe=new H(new Me(.12,.18,_e,8),ph);if(Pe.position.y=_e/2,Y.add(Pe),se<.35){let Ae=De("#5f7a54",{flatShading:!0});for(let Ie=0;Ie<3;Ie++){let Ge=new H(new hn(1.4-Ie*.35,1.5,7),Ae);Ge.position.y=_e*.7+Ie*.8,Y.add(Ge)}}else{let Ae=De(dt[Math.floor(t()*dt.length)],{flatShading:!0});for(let Ie=0;Ie<3;Ie++){let Ge=new H(new Er(.9+t()*.6,0),Ae);Ge.position.set((t()-.5)*1.1,_e+(t()-.3)*.8,(t()-.5)*1.1),Y.add(Ge)}}Y.traverse(Ae=>{Ae.isMesh&&(Ae.castShadow=!0)}),Y.position.set(P,0,B),Y.rotation.y=t()*6,e.add(Y),h(P,B,.5)}let kn=De("#b9c3a1",{roughness:1});for(let P of[-1,1]){let B=new H(new xe(5.6,.12,9),kn);B.position.set(P*6.3,.06,15.5),B.receiveShadow=!0,e.add(B),n.add(B)}let Bn=new Te;e.add(Bn);let bs=d(new $i(new vt(.12,.1),new ke({color:"#e7c04a",side:St,roughness:1}),90)),lr=[];for(let P=0;P<90;P++)lr.push({x:(t()-.5)*34,y:t()*9,z:t()*30-6,s:.4+t()*.6,r:t()*6});e.add(bs);let cr=new en;o.push((P,B)=>{lr.forEach((Y,se)=>{Y.y-=P*.45*Y.s,Y.x+=Math.sin(B*.7+Y.r)*P*.35,Y.y<.03&&(Y.y=7+t()*4,Y.x=(t()-.5)*34,Y.z=t()*30-6),cr.position.set(Y.x,Y.y,Y.z),cr.rotation.set(B*Y.s+Y.r,B*.6+Y.r,0),cr.updateMatrix(),bs.setMatrixAt(se,cr.matrix)}),bs.instanceMatrix.needsUpdate=!0});let $t=Nm(64,"rgba(150,146,140,0.7)","rgba(150,146,140,0)"),An=[];for(let P=0;P<46;P++){let B=d(new qi(new _i({map:$t,transparent:!0,depthWrite:!1,opacity:0})));B.visible=!1,e.add(B),An.push({sp:B,life:0,max:1})}let Es=.8,Rn=0,fn=0,tn=1;function Pa(){let P=An.find(B=>B.life<=0);P&&(P.life=P.max=3.5+Math.random()*2,P.sp.visible=!0,P.sp.position.set(V.position.x+(Math.random()-.5)*.1,V.position.y+.18+.32*tn,V.position.z),P.vx=(Math.random()-.5)*.06)}o.push((P,B)=>{for(Rn+=P*(Es*(tn>0?1:0)+(fn>0?9:0)),fn=Math.max(0,fn-P);Rn>1;)Rn-=1,Pa();for(let Y of An){if(Y.life<=0)continue;Y.life-=P;let se=1-Y.life/Y.max;Y.sp.position.y+=P*.32,Y.sp.position.x+=Y.vx*P+Math.sin(B*1.3+Y.max*3)*P*.05;let _e=.18+se*.9;Y.sp.scale.set(_e,_e,_e),Y.sp.material.opacity=Math.sin(se*Math.PI)*.55,Y.life<=0&&(Y.sp.visible=!1)}W.forEach((Y,se)=>{Y.scale.set(1,.85+Math.sin(B*13+se*2)*.12+Math.random()*.05,1)}),F.intensity=2.6+Math.sin(B*11)*.25+Math.random()*.2});let Ia=new Te;e.add(Ia);let Fi=[],H0=0,Xd=Nm(64,"rgba(255,214,140,0.9)","rgba(255,214,140,0)"),jd={warm:"#ffd9a0",white:"#fff6e6",lotus:"#ffc4c8",sky:"#cfe3ff"},qd=[];function G0(P){let B=new Te,Y=new ke({color:P,emissive:P,emissiveIntensity:.6,roughness:.9,transparent:!0,opacity:.95});qd.push(Y),B.add(new H(new Me(.22,.17,.42,12),Y));let se=new qi(new _i({map:Xd,transparent:!0,depthWrite:!1,opacity:.55}));return se.scale.set(1.3,1.3,1.3),B.scale.setScalar(.5),B.add(se),B}let Ss=new wi({outfit:"hostSuit"});Ss.interactTag="host",Ss.root.position.set(hi.x,He,hi.z),Ss.root.rotation.y=hi.face,Ss.rebuild(),j.add(Ss.root),h(hi.x,hi.z,.4);let Ts=new wi({outfit:"shirt",look:{hair:"perm",hairColor:"#3d2b20",eyes:"smile",mouth:"smile",skin:"#efc19e"}});Ts.interactTag="helper",Ts.root.position.set(3,0,15.2),Ts.root.rotation.y=-Math.PI/2,Ts.rebuild(),e.add(Ts.root),h(3,15.2,.4),p("helper",{label:"\uC548\uB0B4 \uB3C4\uC6B0\uBBF8",verb:"\uC870\uBB38 \uC608\uC808 \uBB3B\uAE30",spot:{x:2,z:15.2,face:Math.PI/2},radius:1.5,anchor:new T(3,1.7,15.2)});function $d(P,B,Y,se,_e,Pe,Ae,Ie){let Ge=Math.max(Y-P,0,P-se,_e-B,0,B-Pe);return Ge<=0?Ae:Ge>=Ie?0:Ae*(1-Ge/Ie)}function z0(P,B){return Math.max($d(P,B,-10.5,10.5,-12.5,1,He,1.25),$d(P,B,12.5,21.5,-9.3,-.7,Ri,.8))}function V0(P,B,Y=.28,se=!1){if(P*P+B*B>2116)return!0;let _e=I?[...r,...I.boxes]:r;for(let Ae of _e)if(P>Ae.x0-Y&&P<Ae.x1+Y&&B>Ae.z0-Y&&B<Ae.z1+Y)return!0;let Pe=I?[...s,...I.circles]:s;for(let Ae of Pe){if(se&&Ae.x===hi.x&&Ae.z===hi.z)continue;let Ie=P-Ae.x,Ge=B-Ae.z;if(Ie*Ie+Ge*Ge<(Ae.r+Y)**2)return!0}return!1}let W0=(P,B)=>Math.abs(P)<10.4&&B<1&&B>-12.4,Yd=new xo,fh="day",Cn={scene:e,interactables:a,heightAt:z0,blocked:V0,inHall:W0,hostNpc:Ss,helper:Ts,HOST_SPOT:hi,GREET_SPOT:Yo,tables:Un,isWalkable:P=>n.has(P)||I&&I.walkables.includes(P),get theme(){return I},setTheme(P,B){for(I&&(X.remove(I.group),I.group.traverse(_e=>{_e.geometry?.dispose?.()})),I=Dm(P,{FLOOR:He,textTexture:hs,rng:Um,deceasedName:B}),I.name=P,X.add(I.group);G.children.length;)G.remove(G.children[0]);I.lanternStand&&(G.add(I.lanternStand),u(I.lanternStand,"lantern")),Wt.visible=!!I.easels,on.visible=P==="hanok",ae.material.color.set(P==="garden"?"#f7f5ef":P==="chapel"?"#efe9dc":"#e7e3d8"),ce&&j.remove(ce);let Y=P==="hospital"||P==="hall";ce=Y?vm({floor:He}):ym({floor:He,z:ee,accent:P==="garden"?"pink":P==="chapel"?"cream":"yellow"}),j.add(ce),ae.position.z=Y?ee-1.05:ee-.8,P==="hospital"&&ae.material.color.set("#a9a7a2"),ae.visible=P!=="hospital",Cn.themeName=P,Aa(P==="chapel"||P==="garden"||Cn.religion==="christian"||Cn.religion==="catholic"?"simple":"jesa"),D.intensity=P==="hall"||P==="hospital"?16:10;let se=I.ceiling??He+5;Z.position.y=Math.min(He+4.2,se-.35),D.position.y=Math.min(He+4.3,se-.35),Cn.setTime(fh)},setDeceasedName(P){I?.setName(P)},setTime(P){fh=P;let B=Wc[P]||Wc.day;f.top.value.set(B.top),f.bottom.value.set(B.bottom),e.fog.color.set(B.fog),y.color.set(B.hemiSky),y.groundColor.set(B.hemiGround),y.intensity=B.hemi,E.color.set(B.sun),E.intensity=B.sunI,g.opacity=B.star;for(let Y of[...c,...I?.lampMats||[],...qd])Y.emissiveIntensity=B.lamp;Z.intensity=P==="night"?24:18,N.intensity=P==="day"?1:4,i.toneMappingExposure=P==="night"?1.15:1},setPortrait(P){Yd.load(P,B=>{B.colorSpace=Rt,Ee.map?.dispose(),Ee.map=B,Ee.needsUpdate=!0})},setGallery(P){Dt.forEach((B,Y)=>{let se=P.length&&(Y<P.length||P.length>1)?P[Y%P.length]:null;if(se!==B.url){if(B.url=se,!se){B.mat.map!==B.placeholder&&B.mat.map?.dispose(),B.mat.map=B.placeholder,B.mat.needsUpdate=!0,B.pic.scale.set(1,1,1);return}Yd.load(se,_e=>{_e.colorSpace=Rt,B.mat.map!==B.placeholder&&B.mat.map?.dispose(),B.mat.map=_e,B.mat.needsUpdate=!0;let Pe=_e.image.width/_e.image.height,Ae=Pe>=1.36?1.5:1.1*Pe,Ie=Pe>=1.36?1.5/Pe:1.1;B.pic.scale.set(Ae/1.5,Ie/1.1,1)})}})},setReligion(P){Cn.religion=P,ci.visible=P==="catholic";let B=P==="christian"||P==="catholic";for(V.visible=!B,C.visible=!B,je.visible=!B,a.get("candles").radius=P==="catholic"?1.2:0,Cn.themeName&&Aa(Cn.themeName==="chapel"||Cn.themeName==="garden"||P==="christian"||P==="catholic"?"simple":"jesa");ge.children.length;)ge.remove(ge.children[0]);if(ye.visible=P==="traditional"||P==="buddhist",(P==="christian"||P==="catholic")&&I?.name!=="chapel"){let Y=De(P==="catholic"?"#d8c27d":"#f5f2ea",{metalness:P==="catholic"?.5:0,roughness:.4}),se=new H(new xe(.1,.72,.06),Y),_e=new H(new xe(.46,.1,.06),Y);_e.position.y=.12,ge.add(se,_e)}else if(P==="buddhist"){let Y=De("#f2b7b4",{roughness:.6});for(let se=0;se<8;se++){let _e=new H(new mt(.12,12,8),Y);_e.scale.set(.55,1.25,.35);let Pe=se/8*Math.PI-Math.PI/2;_e.position.set(Math.sin(Pe)*.2,.05+Math.cos(Pe)*.08,0),_e.rotation.z=-Pe*.8,ge.add(_e)}}},setTablet(P){ye.material.map=hs(`\u6545${P}\u795E\u4F4D`,{w:128,h:320,bg:"#fbf8ef",fg:"#1b1a18",font:'700 46px "Noto Serif KR", "Gowun Batang", serif',vertical:!0}),ye.material.needsUpdate=!0},setIncense(P,B){tn=Math.max(0,Math.min(1,B));let Y=Math.min(Math.max(P,tn>0?1:0),14);for(;C.children.length<Y;){let _e=C.children.length,Pe=new Te,Ae=new H(new Me(.006,.006,.36,5),De("#7c4d34"));Ae.position.y=.18;let Ie=new H(new mt(.012,6,4),new cn({color:"#ff7a3a"}));Ie.position.y=.36,Pe.add(Ae,Ie),Pe.userData={rod:Ae,tip:Ie};let Ge=_e*2.4,Ht=.03+_e%3*.035;Pe.position.set(Math.cos(Ge)*Ht,0,Math.sin(Ge)*Ht),Pe.rotation.set((Math.random()-.5)*.15,0,(Math.random()-.5)*.15),C.add(Pe)}let se=.08+.92*tn;for(let _e of C.children)_e.userData.rod.scale.y=se,_e.userData.rod.position.y=.18*se,_e.userData.tip.position.y=.36*se,_e.userData.tip.visible=tn>0},setCounts(P){Dr=P;let{flowers:B=0,incense:Y=0,candles:se=0}=P,_e=_s==="jesa",Pe=Math.min(B,_e?40:90);for(;K.children.length<Pe;){let Ie=K.children.length,Ge=_m(1.5),Ht=Ge||Ti(1.25);if(Ge){let Kt=Math.floor(Ie/7),jn=Ie%7;Ht.position.set(-1.55+jn*.52+Kt%2*.26,(_e?he+.03:He+.11)+Kt*.012,_e?-8+Kt*.03:-7.4+Kt*.12),Ht.rotation.y=-Math.PI/2+(Math.random()-.5)*.25}else if(_e){let Kt=Math.floor(Ie/20),jn=Ie%20;Ht.position.set(-1.75+jn*.18+Kt%2*.09,he+.06+Kt*.03,-7.97+Kt*.04),Ht.rotation.set(Math.PI/2-.1,0,Math.PI+(Math.random()-.5)*.3)}else{let Kt=Math.floor(Ie/15),jn=Ie%15;Ht.position.set(-1.6+jn*.23+Kt%2*.1+(Math.random()-.5)*.04,He+.13+Kt*.03,-7.45+Kt*.12),Ht.rotation.set(Math.PI/2-.15,0,(Math.random()-.5)*.3)}K.add(Ht)}Es=.6+Math.min(Y,30)*.12;let Ae=Math.min(se,24);for(;Nr.children.length<Ae;){let Ie=Nr.children.length,Ge=Ie%3,Ht=new Te,Kt=new H(new Me(.035,.035,.08,10),De("#fbf6ea")),jn=new H(new hn(.018,.05,8),new cn({color:"#ffcf73"}));jn.position.y=.07,Ht.add(Kt,jn);let La=Math.floor(Ie/3);Ht.position.set(-.4+Ge*.12+La*.13-Math.floor(La/7)*.9,.7+Ge*.2,-Ge*.08+.05),Nr.add(Ht)}},setShoes(P){let B=I?.shoes?Math.min(P,18):0;for(;wt.children.length>B;)wt.remove(wt.children[wt.children.length-1]);for(;wt.children.length<B;){let Y=wt.children.length,se=new Te,_e=De(Ut[Y%Ut.length],{roughness:.5});for(let Ie of[-1,1]){let Ge=new H(new xe(.11,.07,.27),_e);Ge.position.set(Ie*.075,.035,0),Ge.castShadow=!0,se.add(Ge)}let Pe=Math.floor(Y/9),Ae=Y%9;se.position.set(-3.1+Ae*.38+(Ae>4?.9:0)+Pe*.15,He*.33+.005,1.8+Pe*.42),se.rotation.y=(Math.random()-.5)*.25,wt.add(se)}},setWreaths(P){for(;or.children.length;)or.remove(or.children[0]);P.slice(-28).forEach((B,Y)=>{let se=Y%2?1:-1,_e=Math.floor(Y/2),Pe=_e<5,Ae=Pe?2.75:6.6+(_e-5)*1.25,Ie=Pe?se*(3.3+_e*1.35):se*2.85,Ge=new Te,Ht=De("#8a8a86",{metalness:.5,roughness:.4});for(let Da=0;Da<3;Da++){let ws=new H(new Me(.015,.015,1.5,6),Ht),hr=Da/3*Math.PI*2;ws.position.set(Math.cos(hr)*.18,.72,Math.sin(hr)*.18-.1),ws.rotation.set(Math.sin(hr)*.12,0,-Math.cos(hr)*.12),Ge.add(ws)}let Kt=new En(Uo(B.style||"white"));Kt.colorSpace=Rt;let jn=new H(new Yt(.6,40),new ke({map:Kt,alphaTest:.3,side:St,roughness:.95}));jn.position.y=1.75,jn.castShadow=!0,Ge.add(jn);let La=(Da,ws)=>{let hr=new H(new vt(.14,1.12),new ke({map:yv(Da),side:St,roughness:.9}));hr.position.set(ws,.85,.03),hr.rotation.z=ws>0?-.04:.04,Ge.add(hr)};La(B.phrase||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4",-.24),La(B.from||"",.24),Ge.position.set(Ie,0,Ae),Ge.rotation.y=Pe?0:se<0?Math.PI/4:-Math.PI/4,Ge.scale.setScalar(1.25),u(Ge,`wreath:${Y}`),Ge.userData.data=B,or.add(Ge)}),Cn.wreaths=P.slice(-28)},burstSmoke(){fn=1.4},fillCup(){Xn.visible=!0},get altarStyle(){return _s},flyTo(P,B,Y=.9){let se=P.getWorldPosition(new T);e.attach(P),P.position.copy(se);let _e=0;return new Promise(Pe=>{let Ae=Ie=>{_e+=Ie/Y;let Ge=Math.min(1,_e);P.position.lerpVectors(se,B,Ge),P.position.y+=Math.sin(Ge*Math.PI)*.4,Ge>=1&&(o.splice(o.indexOf(Ae),1),Pe())};o.push(Ae)})},addLantern({text:P="",name:B="",color:Y="warm"},se){let _e=G0(jd[Y]||jd.warm);_e.children[0].material.emissiveIntensity=(Wc[fh]||Wc.day).lamp;let Pe=H0++,Ae={a:Pe*2.39996+.3,r:6+Pe%7*1.5,h:8.5+Pe%5*1.4,sp:.03+Pe%4*.008},Ie={uid:Pe,g:_e,slot:Ae,text:P,name:B,rise:se?0:1,from:se?se.clone():null};return u(_e,`sky:${Pe}`),Ia.add(_e),Fi.push(Ie),Fi.length>90&&Ia.remove(Fi.shift().g),Ie},lantern(P){return Fi.find(B=>B.uid===P)},lanternCount(){return Fi.length},setMemories(P){for(;Bn.children.length;)Bn.remove(Bn.children[0]);P.slice(-160).forEach((B,Y)=>{let se=Y%2?1:-1,_e=Math.floor(Y/2),Pe=_e%12,Ae=Math.floor(_e/12)%7,Ie=Ti(1.7,B.relation==="\uAC00\uC871"||B.relation==="\uCE5C\uCC99"?"cream":"white");Ie.position.set(se*(3.9+Ae*.78+Pe%2*.3),.12+.36,11.4+Pe*.72),Ie.rotation.y=Y;let Ge=new qi(new _i({map:Xd,transparent:!0,depthWrite:!1,opacity:.35}));Ge.scale.set(.5,.5,.5),Ie.add(Ge),u(Ie,`memory:${Y}`),Bn.add(Ie)}),Cn.memories=P.slice(-160)},update(P,B){for(let Y of[...o])Y(P,B);I?.update(P,B),Fi.forEach(Y=>{let se=Y.slot;se.a+=P*se.sp;let _e=new T(Math.cos(se.a)*se.r,se.h+Math.sin(B*.5+se.a*3)*.3,6+Math.sin(se.a)*se.r*.7);if(Y.rise<1){Y.rise=Math.min(1,Y.rise+P/7);let Pe=Y.rise*Y.rise*(3-2*Y.rise);Y.g.position.lerpVectors(Y.from,_e,Pe)}else Y.g.position.copy(_e);Y.g.rotation.y+=P*.3})}};return Cn.setTheme("hospital",""),Cn.setReligion("traditional"),Cn}var us=i=>440*2**((i-69)/12),xv=[[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[67,2],[64,1],[62,2],[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[74,3],[74,2],[71,1],[74,2],[71,.5],[67,.5],[71,2],[69,1],[67,2],[64,1],[62,2],[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[67,3]],Fm=[[43,50,55,59],[43,50,55,59],[48,55,60,64],[43,50,55,59],[43,50,55,59],[40,52,55,59],[50,57,62,66],[50,57,62,66],[43,50,55,59],[43,53,55,59],[48,55,60,64],[43,50,55,59],[40,52,55,59],[50,57,62,66],[43,50,55,59]],jc=[[41,57,60,69],[38,57,62,69],[46,58,62,70],[48,55,64,67],[41,57,60,65],[45,57,60,64],[46,58,62,65],[48,55,60,67],[50,57,62,65],[46,53,58,62],[41,57,60,65],[48,55,60,64],[41,53,60,65]],Mv=[[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59]],Om=[67,69,72,74,76,79,81],xd=[55,57,60,62,64,67,69,72],qc=class{constructor(){this.ctx=null,this.on=!0,this.musicVol=.5,this.sfxVol=.7,this.trackId="none",this.track=null,this.ksCache=new Map}ensure(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t=this.ctx=new e;this.master=t.createGain();let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,this.master.connect(n).connect(t.destination),this.music=t.createGain(),this.sfx=t.createGain(),this.music.gain.value=this.musicVol,this.sfx.gain.value=this.sfxVol,this.music.connect(this.master),this.sfx.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.2);let r=t.createGain();r.gain.value=.45,this.reverb.connect(r).connect(this.master),this.master.gain.value=this.on?1:0}return this.ctx.state==="suspended"&&this.ctx.resume(),this.unlockIOS(),this.ctx}unlockIOS(){if(!this.unlocked){this.unlocked=!0;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}try{let n=new ArrayBuffer(8044),r=new DataView(n),s=(o,c)=>[...c].forEach((l,h)=>r.setUint8(o+h,l.charCodeAt(0)));s(0,"RIFF"),r.setUint32(4,36+4e3*2,!0),s(8,"WAVE"),s(12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,8e3,!0),r.setUint32(28,8e3*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),s(36,"data"),r.setUint32(40,4e3*2,!0);let a=new Audio(URL.createObjectURL(new Blob([n],{type:"audio/wav"})));a.loop=!0,a.setAttribute("playsinline",""),a.play().catch(()=>{this.unlocked=!1}),this.keepAlive=a}catch{}}}get running(){return this.ctx?.state==="running"}impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let s=0;s<2;s++){let a=r.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*(1-o/n)**3}return r}noiseBuffer(e=2){let t=this.ctx,n=t.createBuffer(1,t.sampleRate*e,t.sampleRate),r=n.getChannelData(0);for(let s=0;s<r.length;s++)r[s]=Math.random()*2-1;return n}setOn(e){this.on=e,this.master&&this.master.gain.setTargetAtTime(e?1:0,this.ctx.currentTime,.1),this.audioEl&&(this.audioEl.muted=!e)}setMusicVolume(e){this.musicVol=e,this.music&&this.music.gain.setTargetAtTime(e,this.ctx.currentTime,.1),this.audioEl&&(this.audioEl.volume=Math.min(1,e*1.4))}setSfxVolume(e){this.sfxVol=e,this.sfx&&this.sfx.gain.setTargetAtTime(e,this.ctx.currentTime,.1)}duck(e){this.music&&this.music.gain.setTargetAtTime(e?this.musicVol*.25:this.musicVol,this.ctx.currentTime,.6)}play(e,t=""){let n=this.ensure();if(!n||(this.stopTrack(),this.trackId=e,e==="none"))return;if(e==="custom"){if(!t)return;let l=new Audio(t);l.loop=!0,l.volume=Math.min(1,this.musicVol*1.4),l.muted=!this.on,l.play().catch(()=>{}),this.audioEl=l;return}let r=n.createGain();r.gain.value=0,r.gain.setTargetAtTime(1,n.currentTime,1.2),r.connect(this.music);let s=n.createGain();s.gain.value=.6,r.connect(s).connect(this.reverb);let a=this.track={id:e,out:r,nodes:[],timers:[],next:n.currentTime+.3,i:0},o=(l,h=200)=>{let u=setInterval(()=>{this.track===a&&l()},h);a.timers.push(u),l()},c=()=>n.currentTime+1.2;switch(e){case"wind":{this.noiseBed(a,380,.05,.08),o(()=>{for(;a.next<c();)this.chimeAt(a.next,.07,r),a.next+=3.5+Math.random()*6});break}case"rain":{this.noiseBed(a,2600,.05,.02,"bandpass"),this.noiseBed(a,600,.04,.01),o(()=>{for(;a.next<c();)this.drip(a.next,r),a.next+=.15+Math.random()*.9});break}case"moktak":{this.drone(a,[55,82.5],.025);let l=0;o(()=>{for(;a.next<c();){let h=l%24;h<16&&this.moktakAt(a.next,h===0?.32:.22,r),h===20&&this.bowlAt(a.next,196+(l%48?0:24),.12,r),a.next+=h<16?.95:1.1,l++}});break}case"hymn":{let h=[],u=0;for(let[_,g]of xv)h.push({n:_,t:u,d:g*.95}),u+=g*.95;let d=u+3,p=[];for(let _=0;_<Fm.length;_++)p.push({ch:Fm[_],t:.95+_*3*.95,d:3*.95});let f=n.currentTime+.4,v=0,m=0;o(()=>{let _=c();for(;v<h.length&&f+h[v].t<_;){let g=h[v++];this.organAt(us(g.n),f+g.t,g.d*.97,.16,r)}for(;m<p.length&&f+p[m].t<_;){let g=p[m++];g.ch.forEach(y=>this.organAt(us(y),f+g.t,g.d,.06,r,!0))}v>=h.length&&m>=p.length&&f+d<_+1&&(f+=d,v=0,m=0)});break}case"chorale":{o(()=>{for(;a.next<c();){let l=jc[a.i%jc.length],h=a.i%jc.length===jc.length-1?6.4:3.4;l.forEach((u,d)=>this.organAt(us(u),a.next,h,d===3?.09:.06,r,d<3)),a.next+=h,a.i++}});break}case"piano":{o(()=>{for(;a.next<c();){let l=Math.floor(a.i/8),h=Mv[l%4],u=a.i%8,d=[0,2,3,2,1,2,3,2];this.pianoAt(us(h[d[u]]+(u===0?0:12)),a.next,u===0?.16:.07,r),(u===0||u===4&&Math.random()<.6)&&this.pianoAt(us(Om[Math.floor(Math.random()*Om.length)]+5),a.next+.02,.06,r),a.next+=.62,a.i++}});break}case"gayageum":{let l=3;o(()=>{for(;a.next<c();){l=Math.max(0,Math.min(xd.length-1,l+[-2,-1,-1,0,1,1,2][Math.floor(Math.random()*7)]));let h=Math.random()<.35;this.pluckAt(us(xd[l]),a.next,h?.34:.26,r,h),Math.random()<.2&&this.pluckAt(us(xd[Math.max(0,l-3)]-12),a.next,.18,r,!1),a.next+=h?2.2+Math.random():.5+Math.random()*.8}});break}default:}}stopTrack(){this.audioEl&&(this.audioEl.pause(),this.audioEl=null);let e=this.track;if(!e)return;this.track=null,e.timers.forEach(clearInterval);let t=this.ctx;e.out.gain.cancelScheduledValues(t.currentTime),e.out.gain.setTargetAtTime(0,t.currentTime,.4),setTimeout(()=>{e.nodes.forEach(n=>{try{n.stop?.()}catch{}}),e.out.disconnect()},2500)}noiseBed(e,t,n,r,s="lowpass"){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noiseBuffer(4),o.loop=!0;let c=a.createBiquadFilter();c.type=s,c.frequency.value=t,c.Q.value=s==="bandpass"?.6:.7;let l=a.createGain();l.gain.value=n;let h=a.createOscillator(),u=a.createGain();h.frequency.value=.07+Math.random()*.05,u.gain.value=r,h.connect(u).connect(l.gain),o.connect(c).connect(l).connect(e.out),o.start(),h.start(),e.nodes.push(o,h)}drone(e,t,n){let r=this.ctx;for(let s of t){let a=r.createOscillator();a.frequency.value=s;let o=r.createGain();o.gain.value=n,a.connect(o).connect(e.out),a.start(),e.nodes.push(a)}}env(e,t,n,r,s,a=.3){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+r),e.gain.setValueAtTime(n,t+Math.max(r,s-a)),e.gain.exponentialRampToValueAtTime(1e-4,t+s+a)}organAt(e,t,n,r,s,a=!1){let o=this.ctx,c=o.createGain(),l=o.createBiquadFilter();l.type="lowpass",l.frequency.value=a?1100:1900,l.connect(c).connect(s);for(let[h,u,d]of[[1,1,"sine"],[2,.45,"sine"],[.5,.35,"sine"],[3,.12,"triangle"]]){let p=o.createOscillator();p.type=d,p.frequency.value=e*h,p.detune.value=(Math.random()-.5)*6;let f=o.createGain();f.gain.value=u,p.connect(f).connect(l),p.start(t),p.stop(t+n+.6)}this.env(c,t,r,.09,n,.35)}pianoAt(e,t,n,r){let s=this.ctx,a=s.createGain();a.connect(r);for(let[o,c]of[[1,1],[2,.35],[3,.12],[4.01,.05]]){let l=s.createOscillator();l.frequency.value=e*o;let h=s.createGain();h.gain.setValueAtTime(c,t),h.gain.exponentialRampToValueAtTime(1e-4,t+3.2/o),l.connect(h).connect(a),l.start(t),l.stop(t+3.4)}a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(n,t+.008),a.gain.exponentialRampToValueAtTime(n*.4,t+.6),a.gain.exponentialRampToValueAtTime(1e-4,t+3.3)}ks(e,t=3){let n=Math.round(e*10);if(this.ksCache.has(n))return this.ksCache.get(n);let r=this.ctx,s=r.sampleRate,a=Math.max(2,Math.round(s/e)),o=Math.floor(s*t),c=r.createBuffer(1,o,s),l=c.getChannelData(0),h=new Float32Array(a);for(let d=0;d<a;d++)h[d]=(Math.random()*2-1)*(d<a/2?1:.6);let u=0;for(let d=0;d<o;d++){let p=h[u],f=h[(u+1)%a];h[u]=(p+f)*.5*.9965,l[d]=p,u=(u+1)%a}return this.ksCache.set(n,c),c}pluckAt(e,t,n,r,s){let a=this.ctx,o=a.createBufferSource();o.buffer=this.ks(e);let c=a.createGain();c.gain.value=n;let l=a.createBiquadFilter();if(l.type="lowpass",l.frequency.value=2400,o.connect(l).connect(c).connect(r),s){let h=o.playbackRate;h.setValueAtTime(1,t),h.setValueAtTime(1,t+.35);for(let u=0;u<4;u++)h.linearRampToValueAtTime(1.045,t+.55+u*.32),h.linearRampToValueAtTime(1,t+.71+u*.32)}o.start(t)}bowlAt(e,t,n,r){let s=this.ctx;for(let[a,o,c]of[[1,1,.7],[2.71,.45,1.3],[5.12,.18,2.1]])for(let l of[0,c]){let h=s.createOscillator();h.frequency.value=e*a+l;let u=s.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(n*o*.5,t+.02),u.gain.exponentialRampToValueAtTime(1e-4,t+9/a),h.connect(u).connect(r),h.start(t),h.stop(t+9.2)}}moktakAt(e,t,n){let r=this.ctx,s=r.createOscillator();s.frequency.setValueAtTime(560,e),s.frequency.exponentialRampToValueAtTime(330,e+.16);let a=r.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(t,e+.002),a.gain.exponentialRampToValueAtTime(1e-4,e+.22),s.connect(a).connect(n),s.start(e),s.stop(e+.25);let o=r.createOscillator();o.type="triangle",o.frequency.value=1180;let c=r.createGain();c.gain.setValueAtTime(t*.25,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.05),o.connect(c).connect(n),o.start(e),o.stop(e+.06)}chimeAt(e,t,n){let r=[1318,1568,1760,2093,2349][Math.floor(Math.random()*5)];this.toneAt(r,e,3,t,n),this.toneAt(r*2.76,e,1.2,t*.3,n)}drip(e,t){let n=this.ctx,r=n.createOscillator(),s=900+Math.random()*1400;r.frequency.setValueAtTime(s,e),r.frequency.exponentialRampToValueAtTime(s*1.6,e+.05);let a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.03+Math.random()*.03,e+.003),a.gain.exponentialRampToValueAtTime(1e-4,e+.09),r.connect(a).connect(t),r.start(e),r.stop(e+.1)}toneAt(e,t,n,r,s,a="sine"){let o=this.ctx,c=o.createOscillator(),l=o.createGain();return c.type=a,c.frequency.setValueAtTime(e,t),l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(r,t+.005),l.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(l).connect(s),c.start(t),c.stop(t+n+.05),c}tone(e,t,{type:n="sine",gain:r=.2,when:s=0}={}){let a=this.ensure();return a?this.toneAt(e,a.currentTime+s,t,r,this.sfx,n):null}moktak(){let e=this.ensure();e&&this.moktakAt(e.currentTime,.35,this.sfx)}chime(e=.12){let t=this.ensure();t&&this.chimeAt(t.currentTime,e,this.sfx)}bell(){this.tone(196,5,{gain:.25}),this.tone(392.5,3.5,{gain:.12}),this.tone(589,2.2,{gain:.06})}soft(){this.tone(880,.6,{gain:.06}),this.tone(1320,.8,{gain:.04,when:.08})}drop(){this.tone(300,.25,{type:"triangle",gain:.12})}pop(){this.tone(660,.12,{gain:.05})}};var Fo='<ellipse cx="32" cy="40" rx="27" ry="12" fill="#f4f1ea" stroke="#d9d3c6" stroke-width="1.5"/><ellipse cx="32" cy="38" rx="21" ry="8.5" fill="#fbfaf6"/>',Gm={yukgaejang:'<svg viewBox="0 0 64 64"><path d="M8 30 Q10 52 32 54 Q54 52 56 30 Z" fill="#f2efe8" stroke="#cfc8ba" stroke-width="1.5"/><ellipse cx="32" cy="30" rx="24" ry="9" fill="#b8321e"/><ellipse cx="32" cy="29" rx="19" ry="6" fill="#c9442a"/><path d="M18 28 l9 3 M34 26 l10 4 M24 32 l8-2" stroke="#6b3b1f" stroke-width="2.4" stroke-linecap="round"/><path d="M28 27 l7 1 M40 31 l6-1 M20 31 l5 0" stroke="#5f9c3a" stroke-width="2.4" stroke-linecap="round"/><circle cx="37" cy="30" r="1.6" fill="#f0a23a"/><circle cx="25" cy="27" r="1.3" fill="#f0a23a"/><path d="M22 18 q3-5 0-9 M32 17 q3-5 0-9 M42 18 q3-5 0-9" stroke="#c9c4ba" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',pyeonyuk:`<svg viewBox="0 0 64 64">${Fo}<g transform="rotate(-12 30 36)">${[0,1,2,3,4].map(i=>`<rect x="${12+i*7}" y="28" width="9" height="13" rx="1.5" fill="#efd9cf" stroke="#c7a596"/><rect x="${12+i*7}" y="28" width="9" height="3" fill="#7a5040"/><path d="M${13+i*7} 35 h7" stroke="#fbf3ee" stroke-width="1.2"/>`).join("")}</g><ellipse cx="51" cy="44" rx="6" ry="3.5" fill="#fbfaf6" stroke="#cfc8ba"/><circle cx="50" cy="43" r="1.4" fill="#f2a8a0"/><circle cx="53" cy="44" r="1.2" fill="#f2a8a0"/></svg>`,hongeo:`<svg viewBox="0 0 64 64">${Fo}<path d="M14 38 Q20 24 32 26 Q46 23 50 38 Q32 44 14 38Z" fill="#cf4a2a"/><path d="M20 33 q6-3 10 0 M32 31 q6-3 11 1" stroke="#e8794f" stroke-width="2" fill="none"/><circle cx="24" cy="36" r="3.4" fill="#9cc56a" stroke="#5f8a3a"/><circle cx="40" cy="35" r="3.4" fill="#9cc56a" stroke="#5f8a3a"/><path d="M30 30 l2 1 M36 33 l2 1 M27 34 l2 1" stroke="#fff5d8" stroke-width="1.4"/></svg>`,jeon:`<svg viewBox="0 0 64 64">${Fo}<ellipse cx="22" cy="37" rx="8" ry="5" fill="#f0c64a" stroke="#c9922a"/><ellipse cx="38" cy="40" rx="8" ry="5" fill="#f2ce58" stroke="#c9922a"/><circle cx="30" cy="31" r="5" fill="#c98a3a" stroke="#8e5a22"/><circle cx="42" cy="31" r="5" fill="#c98a3a" stroke="#8e5a22"/><circle cx="29" cy="30" r="0.9" fill="#d9402a"/><circle cx="31" cy="32" r="0.9" fill="#4f8a3a"/><circle cx="43" cy="30" r="0.9" fill="#4f8a3a"/><path d="M48 38 q6-6 10 0 q-4 6-10 0z" fill="#4f7d34" stroke="#c9922a" stroke-width="1.5"/></svg>`,tteok:`<svg viewBox="0 0 64 64">${Fo}<rect x="12" y="28" width="20" height="5" fill="#fbf8f0" stroke="#d7cfbf"/><rect x="12" y="33" width="20" height="3" fill="#8a3b2e"/><rect x="12" y="36" width="20" height="5" fill="#fbf8f0" stroke="#d7cfbf"/><rect x="35" y="30" width="16" height="9" rx="3" fill="#fbfaf6" stroke="#d7cfbf"/><circle cx="43" cy="34.5" r="2.6" fill="none" stroke="#c9b9a3" stroke-width="1.2"/><circle cx="43" cy="34.5" r="0.9" fill="#c9b9a3"/><rect x="38" y="40" width="14" height="6" rx="2.5" fill="#cfe3b3" stroke="#a7c387"/></svg>`,snack:`<svg viewBox="0 0 64 64">${Fo}${[[20,36],[24,33],[27,38],[17,39],[23,41]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="3.2" ry="2.2" fill="#d9b07a" stroke="#a87e4a"/>`).join("")}<path d="M33 31 q8 3 16 0 M34 35 q7 4 15 1 M35 39 q6 3 13 0 M36 43 q5 2 10 0" stroke="#e8b98a" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,soju:'<svg viewBox="0 0 64 64"><path d="M24 6 h8 v10 q6 4 6 12 v28 q0 3-3 3 h-14 q-3 0-3-3 v-28 q0-8 6-12z" fill="#3e9a63" opacity=".9" stroke="#2a6e45"/><rect x="18" y="32" width="20" height="12" fill="#f4f1ea"/><path d="M22 38 h12" stroke="#2a6e45" stroke-width="2"/><rect x="24" y="4" width="8" height="4" fill="#2a6e45"/><path d="M44 42 h12 l-2 14 h-8 z" fill="#e9f3ee" stroke="#9fbcae"/><path d="M45 46 h10" stroke="#cfe2d8" stroke-width="2"/></svg>',sikhye:`<svg viewBox="0 0 64 64"><path d="M10 28 Q12 50 32 52 Q52 50 54 28 Z" fill="#c9a24a" stroke="#9c7a2e" stroke-width="1.5"/><ellipse cx="32" cy="28" rx="22" ry="8" fill="#efe4c4"/>${[[24,27],[30,29],[36,26],[40,29],[27,30],[34,31]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="1.6" ry="0.9" fill="#fffdf6" stroke="#ddd2b4" stroke-width=".6"/>`).join("")}<ellipse cx="38" cy="27" rx="1.4" ry="2" fill="#f6efd8" stroke="#c9b98a" stroke-width=".6"/></svg>`,coffee:'<svg viewBox="0 0 64 64"><path d="M16 18 h28 l-4 38 h-20 z" fill="#fbfaf6" stroke="#cfc8ba" stroke-width="1.5"/><ellipse cx="30" cy="18" rx="14" ry="4" fill="#8a5a36"/><path d="M19 30 h22" stroke="#d9c06a" stroke-width="3"/><rect x="44" y="20" width="5" height="26" rx="1" fill="#f2c12e" transform="rotate(14 46 33)"/><rect x="44" y="24" width="5" height="3" fill="#c0392b" transform="rotate(14 46 33)"/><path d="M26 12 q3-4 0-8 M33 12 q3-4 0-8" stroke="#c9c4ba" stroke-width="1.5" fill="none"/></svg>'},qt=(i,e={})=>new ke({color:i,roughness:.6,...e});function ya(i=.13){let e=new H(new Me(i,i*.8,.025,24),qt("#f4f1ea"));return e.position.y=.012,e}function Hm(i,e,t="#f2efe8"){return new H(new Me(i,i*.62,e,24),qt(t,{roughness:.4}))}var Vn=(i,e)=>i+Math.random()*(e-i);function zm(i){let e=new Te,t=(n,r=0,s=0,a=0)=>(n.position.set(r,s,a),e.add(n),n);switch(i){case"yukgaejang":{t(Hm(.12,.09),0,.045,0);let n=t(new H(new Yt(.112,24),qt("#b8321e",{roughness:.15})),0,.093,0);n.rotation.x=-Math.PI/2;for(let r=0;r<8;r++){let s=t(new H(new xe(.06,.008,.01),qt(r%3?"#6b3b1f":"#5f9c3a")),Vn(-.06,.06),.097,Vn(-.06,.06));s.rotation.y=Vn(0,3)}break}case"pyeonyuk":{e.add(ya());for(let n=0;n<5;n++){let r=t(new H(new xe(.05,.012,.075),qt("#ead2c6")),-.07+n*.03,.03+n*.002,0);r.rotation.z=.35;let s=t(new H(new xe(.05,.013,.012),qt("#7a5040")),-.07+n*.03,.031+n*.002,-.035);s.rotation.z=.35}t(new H(new Me(.03,.025,.02,14),qt("#f4f1ea")),.1,.02,.06),t(new H(new Me(.022,.022,.006,12),qt("#f2a8a0")),.1,.032,.06);break}case"hongeo":{e.add(ya());let n=t(new H(new mt(.075,16,10),qt("#cf4a2a",{roughness:.4})),0,.03,0);n.scale.y=.45;for(let r=0;r<4;r++)t(new H(new Me(.018,.018,.006,12),qt("#9cc56a")),Vn(-.05,.05),.055,Vn(-.04,.04)).rotation.x=Vn(-.4,.4);break}case"jeon":{e.add(ya(.14));for(let r=0;r<4;r++)t(new H(new Me(.026,.028,.016,16),qt("#c98a3a")),-.06+r%2*.05,.034+Math.floor(r/2)*.012,-.03+Math.floor(r/2)*.02);for(let r=0;r<3;r++)t(new H(new Me(.03,.03,.01,18),qt("#f0c64a")),.04+r*.012,.03+r*.008,.02-r*.02).scale.set(1.5,1,.9);t(new H(new Me(.03,.03,.008,3),qt("#4f7d34")),0,.03,.07).scale.set(1.4,1,.8);break}case"tteok":{e.add(ya()),["#fbf8f0","#8a3b2e","#fbf8f0","#8a3b2e"].forEach((r,s)=>t(new H(new xe(.1,.014,.06),qt(r,{roughness:.9})),-.04,.032+s*.014,0));for(let r=0;r<3;r++)t(new H(new xe(.045,.012,.035),qt(r===2?"#cfe3b3":"#fbfaf6",{roughness:.9})),.07,.032+r*.013,-.02+r*.012);break}case"snack":{e.add(ya());for(let n=0;n<9;n++)t(new H(new mt(.012,8,6),qt("#d9b07a")),Vn(-.08,-.01),.032,Vn(-.04,.04)).scale.set(1.4,1,1);for(let n=0;n<7;n++){let r=t(new H(new xe(.07,.006,.008),qt("#e8b98a")),Vn(.02,.07),.032+n*.003,Vn(-.04,.04));r.rotation.y=Vn(0,3)}break}case"soju":{let n=new ke({color:"#3e9a63",transparent:!0,opacity:.8,roughness:.1});t(new H(new Me(.032,.032,.14,16),n),-.04,.07,0),t(new H(new Me(.012,.03,.06,14),n),-.04,.17,0),t(new H(new Me(.033,.033,.05,16,1,!0),qt("#f4f1ea")),-.04,.07,0),t(new H(new Me(.022,.018,.035,14),new ke({color:"#e9f3ee",transparent:!0,opacity:.75,roughness:.05})),.05,.018,.02);break}case"sikhye":{t(Hm(.07,.06,"#c9a24a"),0,.03,0);let n=t(new H(new Yt(.068,20),qt("#efe4c4",{roughness:.1})),0,.062,0);n.rotation.x=-Math.PI/2;for(let r=0;r<6;r++)t(new H(new mt(.005,6,4),qt("#fffdf6")),Vn(-.04,.04),.06,Vn(-.04,.04));break}case"coffee":{t(new H(new Me(.035,.026,.085,16),qt("#fbfaf6")),0,.043,0);let n=t(new H(new Yt(.034,16),qt("#8a5a36",{roughness:.2})),0,.088,0);n.rotation.x=-Math.PI/2,t(new H(new xe(.012,.004,.09),qt("#f2c12e")),.05,.003,.02).rotation.y=.4;break}default:e.add(ya())}return e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.raycast=()=>{})}),e}var $c=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),_a=class{constructor(e,{look:t=wn,outfit:n="suit",who:r="guest",onChange:s=()=>{}}={}){this.el=e,this.look={...wn,...t},this.outfit=n,this.who=r,this.onChange=s,this.build()}build(){let e=hd,t=Object.entries(Tr).filter(([,s])=>s.who===this.who),n=(s,a)=>a.map(o=>`<button type="button" class="chip" data-k="${s}" data-v="${o.id}">${$c(o.label)}</button>`).join(""),r=(s,a)=>a.map(o=>{let c=typeof o=="string"?o:o.id,l=typeof o=="string"?"":o.label;return`<button type="button" class="dot" data-k="${s}" data-v="${c}" style="--c:${c}" title="${$c(l)}" aria-label="${$c(l||c)}"></button>`}).join("");this.el.innerHTML=`
      <div class="cz">
        <div class="cz-preview">
          <canvas aria-label="\uB0B4 \uCE90\uB9AD\uD130 \uBBF8\uB9AC\uBCF4\uAE30"></canvas>
          <div class="cz-preview-tools">
            <button type="button" class="chip" data-dice>\u{1F3B2} \uC544\uBB34\uB807\uAC8C\uB098</button>
          </div>
        </div>
        <div class="cz-options">
          <div class="cz-row"><span>\uC637\uCC28\uB9BC</span><div>${t.map(([s,a])=>`<button type="button" class="chip" data-k="outfit" data-v="${s}">${$c(a.label)}</button>`).join("")}</div></div>
          <div class="cz-row"><span>\uD53C\uBD80</span><div>${r("skin",e.skin)}</div></div>
          <div class="cz-row"><span>\uBA38\uB9AC \uBAA8\uC591</span><div>${n("hair",e.hair)}</div></div>
          <div class="cz-row"><span>\uBA38\uB9AC\uC0C9</span><div>${r("hairColor",e.hairColor)}</div></div>
          <div class="cz-row"><span>\uB208</span><div>${n("eyes",e.eyes)}</div></div>
          <div class="cz-row"><span>\uB208\uC379 \xB7 \uC785</span><div>${n("brows",e.brows)}${n("mouth",e.mouth)}</div></div>
          <div class="cz-row"><span>\uC548\uACBD \xB7 \uC218\uC5FC</span><div>${n("glasses",e.glasses)}${n("beard",e.beard.filter(s=>s.id!=="none"))}</div></div>
          <div class="cz-row"><span>\uD0A4</span><div>${n("height",e.height)}<button type="button" class="chip" data-k="blush" data-v="toggle">\uBCFC\uD130\uCE58</button></div></div>
        </div>
      </div>`,this.el.addEventListener("click",s=>{let a=s.target.closest("[data-k],[data-dice]");if(!a)return;if(a.hasAttribute("data-dice"))return this.randomize();let o=a.dataset.k,c=a.dataset.v;o==="outfit"?(this.outfit=c,this.avatar.setOutfit(c)):(o==="height"&&(c=Number(c)),o==="blush"&&(c=!this.look.blush),(o==="glasses"||o==="beard")&&this.look[o]===c&&(c="none"),this.look[o]=c,this.avatar.setLook(this.look),(o==="eyes"||o==="mouth")&&this.avatar.play("nod",null,{soft:!0})),this.sync(),this.onChange(this.look,this.outfit)}),this.initPreview(),this.sync()}randomize(){let e=n=>n[Math.floor(Math.random()*n.length)],t=hd;this.look={skin:e(t.skin),hair:e(t.hair).id,hairColor:e(t.hairColor).id,eyes:e(t.eyes).id,brows:e(t.brows).id,mouth:e(t.mouth).id,glasses:Math.random()<.3?e(t.glasses).id:"none",beard:Math.random()<.2?e(t.beard).id:"none",blush:Math.random()<.7,height:e(t.height).id},this.avatar.setLook(this.look),this.avatar.play("wave",null,{soft:!0}),this.sync(),this.onChange(this.look,this.outfit)}sync(){for(let e of this.el.querySelectorAll("[data-k]")){let t=e.dataset.k,n;t==="outfit"?n=e.dataset.v===this.outfit:t==="blush"?n=!!this.look.blush:t==="height"?n=Number(e.dataset.v)===Number(this.look.height):n=String(this.look[t])===e.dataset.v,e.setAttribute("aria-pressed",n)}}set(e,t){this.look={...wn,...e},t&&(this.outfit=t),this.avatar.setOutfit(this.outfit),this.avatar.setLook(this.look),this.sync()}initPreview(){let e=this.el.querySelector("canvas"),t=this.renderer=new fa({canvas:e,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.outputColorSpace=Rt,t.toneMapping=la;let n=new Wr;n.add(new qr("#ffffff","#b8b29d",1.4));let r=new $r("#fff4e6",1.6);r.position.set(2,3,4),n.add(r);let s=new H(new Yt(.7,40),new ke({color:"#e7e1d3"}));s.rotation.x=-Math.PI/2,n.add(s),this.avatar=new wi({outfit:this.outfit,look:this.look}),n.add(this.avatar.root);let a=new nn(30,1,.1,20),o=.35,c=null;e.addEventListener("pointerdown",u=>{c=u.clientX,e.setPointerCapture(u.pointerId)}),e.addEventListener("pointermove",u=>{c!=null&&(o+=(u.clientX-c)*.012,c=u.clientX)}),e.addEventListener("pointerup",()=>{c=null});let l=performance.now(),h=u=>{if(this.disposed||(requestAnimationFrame(h),!e.offsetParent))return;let d=e.clientWidth,p=e.clientHeight;(e.width!==Math.round(d*t.getPixelRatio())||e.height!==Math.round(p*t.getPixelRatio()))&&(t.setSize(d,p,!1),a.aspect=d/p,a.updateProjectionMatrix());let f=Math.min(.05,(u-l)/1e3);l=u,c==null&&(o+=f*.25);let v=this.avatar.height;a.position.set(Math.sin(o)*3.1,1.15*v,Math.cos(o)*3.1),a.lookAt(0,.82*v,0),this.avatar.update(f,!1),t.render(n,a)};requestAnimationFrame(h)}dispose(){this.disposed=!0,this.renderer?.dispose(),this.renderer?.forceContextLoss?.()}};var wr=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Ar(i=[]){return i.map(e=>{if(typeof e=="string")return{type:"image",src:e,caption:"",year:""};let t=e.type||(/youtu\.?be/.test(e.src)?"youtube":/\.(mp4|webm|mov)(\?|$)/i.test(e.src)?"video":"image");return{caption:"",year:"",...e,type:t}}).filter(e=>e.src)}function bv(i){let e=String(i).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);return e?e[1]:null}var Yc=class{constructor(e,{onOpen:t,onClose:n}={}){this.el=e,this.onOpen=t,this.onClose=n,this.items=[],this.i=0,this.playing=!0,this.timer=null,e.innerHTML=`
      <div class="th-stage">
        <div class="th-slide th-a"></div><div class="th-slide th-b"></div>
        <div class="th-title" hidden></div>
        <p class="th-caption"></p>
      </div>
      <div class="th-bar">
        <button type="button" data-th="prev" aria-label="\uC774\uC804">\u23EE</button>
        <button type="button" data-th="play" aria-label="\uC7AC\uC0DD/\uC77C\uC2DC\uC815\uC9C0">\u23F8</button>
        <button type="button" data-th="next" aria-label="\uB2E4\uC74C">\u23ED</button>
        <span class="th-count"></span>
        <div class="th-thumbs"></div>
        <button type="button" data-th="close" class="th-close">\uB2EB\uAE30</button>
      </div>`,this.layers=[e.querySelector(".th-a"),e.querySelector(".th-b")],this.front=0,e.addEventListener("click",r=>{let s=r.target.closest("[data-th],[data-idx]");if(!s)return;if(s.dataset.idx)return this.go(+s.dataset.idx);let a=s.dataset.th;a==="prev"&&this.go(this.i-1),a==="next"&&this.go(this.i+1),a==="play"&&this.toggle(),a==="close"&&this.close()}),addEventListener("keydown",r=>{this.el.hidden||(r.key==="Escape"&&this.close(),r.key==="ArrowRight"&&this.go(this.i+1),r.key==="ArrowLeft"&&this.go(this.i-1),r.key===" "&&(r.preventDefault(),this.toggle()))})}open(e,{title:t="",sub:n="",greeting:r="",portrait:s="",start:a=null}={}){this.items=[{type:"title",title:t,sub:n,portrait:s},...Ar(e),{type:"end",title:"\uAE30\uC5B5\uD558\uACA0\uC2B5\uB2C8\uB2E4",sub:r}],this.el.querySelector(".th-thumbs").innerHTML=this.items.map((o,c)=>o.type==="image"?`<button type="button" data-idx="${c}" style="background-image:url('${o.src.replace(/'/g,"%27")}')" aria-label="\uC0AC\uC9C4 ${c}"></button>`:o.type==="video"||o.type==="youtube"?`<button type="button" data-idx="${c}" class="vid" aria-label="\uC601\uC0C1 ${c}">\u25B6</button>`:"").join(""),this.el.hidden=!1,this.playing=!0,this.el.querySelector('[data-th="play"]').textContent="\u23F8",this.onOpen?.(),this.go(a==null?0:a+1,!0)}close(){clearTimeout(this.timer),this.layers.forEach(e=>{e.innerHTML=""}),this.el.hidden=!0,this.onClose?.()}toggle(){this.playing=!this.playing,this.el.querySelector('[data-th="play"]').textContent=this.playing?"\u23F8":"\u25B6";let e=this.layers[this.front].querySelector("video");e&&(this.playing?e.play():e.pause()),this.playing?this.schedule():clearTimeout(this.timer)}schedule(e){clearTimeout(this.timer);let t=this.items[this.i];!this.playing||!t||t.type==="video"||t.type==="youtube"||t.type!=="end"&&(this.timer=setTimeout(()=>this.go(this.i+1),e??(t.type==="title"?5e3:6500)))}go(e,t=!1){let n=this.items.length;this.i=(e%n+n)%n;let r=this.items[this.i],s=this.layers[1-this.front],a=this.layers[this.front];s.innerHTML=this.render(r),s.classList.add("show"),a.classList.remove("show");let o=a;setTimeout(()=>{o.classList.contains("show")||(o.innerHTML="")},1400),this.front=1-this.front;let c=this.el.querySelector(".th-caption");c.textContent=r.type==="image"||r.type==="video"||r.type==="youtube"?[r.year,r.caption].filter(Boolean).join(" \xB7 "):"";let l=n-2;this.el.querySelector(".th-count").textContent=l>0&&this.i>0&&this.i<n-1?`${this.i} / ${l}`:"",this.el.querySelectorAll("[data-idx]").forEach(u=>u.classList.toggle("on",+u.dataset.idx===this.i));let h=s.querySelector("video");h&&(h.onended=()=>this.go(this.i+1),this.playing&&h.play().catch(()=>{})),this.schedule(t?5e3:void 0)}render(e){if(e.type==="title")return`<div class="th-card">${e.portrait?`<img class="th-portrait" src="${e.portrait}" alt="">`:""}<h2>${wr(e.title)}</h2><p>${wr(e.sub)}</p><small>\uCD94\uC5B5 \uC0C1\uC601\uAD00 \xB7 \uC0AC\uC9C4\uC744 \uD55C \uC7A5\uC529 \uCC9C\uCC9C\uD788 \uB118\uACA8 \uB4DC\uB824\uC694</small></div>`;if(e.type==="end")return`<div class="th-card end"><h2>${wr(e.title)}</h2><p>${wr(e.sub||"")}</p></div>`;if(e.type==="video")return`<video src="${wr(e.src)}" playsinline controls></video>`;if(e.type==="youtube"){let n=bv(e.src);return n?`<iframe src="https://www.youtube-nocookie.com/embed/${n}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="\uCD94\uC5B5 \uC601\uC0C1"></iframe>`:'<p class="th-empty">\uC601\uC0C1 \uC8FC\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694</p>'}return`<img class="th-photo ${["kb1","kb2","kb3","kb4"][Math.floor(Math.random()*4)]}" src="${wr(e.src)}" alt="${wr(e.caption||"\uCD94\uC5B5 \uC0AC\uC9C4")}"><img class="th-blur" src="${wr(e.src)}" alt="">`}};var L=(i,e=document)=>e.querySelector(i),ft=(i,e=document)=>[...e.querySelectorAll(i)],Ii=i=>new Promise(e=>setTimeout(e,i)),Ue=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ho=i=>`${Number(i||0).toLocaleString("ko-KR")}\uC6D0`,Ev=(i,e)=>e.split(".").reduce((t,n)=>t==null?t:t[n],i),Sv=(i,e,t)=>{let n=e.split("."),r=n.pop();n.reduce((s,a)=>s[a]??={},i)[r]=t},Vo=i=>{let e=new Date(i);return`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`},Tv=matchMedia("(prefers-reduced-motion: reduce)").matches,wv=i=>i[Math.floor(Math.random()*i.length)],Vm;function yt(i,e=2800){let t=L("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(Vm),Vm=setTimeout(()=>t.classList.remove("show"),e)}var Wm;function Tt(i,e=4400){let t=L("#caption");t.textContent=i,t.classList.add("show"),clearTimeout(Wm),Wm=setTimeout(()=>t.classList.remove("show"),e)}async function ps(i){try{return await navigator.clipboard.writeText(i),!0}catch{let e=document.createElement("textarea");e.value=i,document.body.append(e),e.select();let t=document.execCommand("copy");return e.remove(),t}}function ih(i,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=i,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}var Sd=new URLSearchParams(location.search),nr=(Sd.get("m")||Qi.defaultMemorial).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,40)||Qi.defaultMemorial,Ye=new Hc(Qi,nr),it=new qc,s0="samga:me",Xm=(()=>{try{return JSON.parse(localStorage.getItem(s0))||{}}catch{return{}}})(),M={role:"guest",entered:!1,busy:!1,memorial:null,counters:{},guestbook:[],lanterns:[],wreaths:[],done:new Set,ticket:!1,incenseAt:null,inHall:!1,me:{id:"",name:"",relation:"",religion:"traditional",outfit:"suit",...Xm,look:{...wn,...Xm.look||{}}},time:(()=>{let i=new Date().getHours();return i>=6&&i<16?"day":i>=16&&i<19?"dusk":"night"})(),act:"",actSeq:0,say:"",sayS:0,ix:null,meals:0,view:localStorage.getItem("samga:view")||"first",auto:!1};M.me.id||(M.me.id=`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`);var Id=()=>{try{localStorage.setItem(s0,JSON.stringify(M.me))}catch{}},Di=new fa({antialias:!0,powerPreference:"high-performance"});Di.setPixelRatio(Math.min(devicePixelRatio,2));Di.shadowMap.enabled=!0;Di.shadowMap.type=dc;Di.toneMapping=la;Di.outputColorSpace=Rt;L("#stage").append(Di.domElement);var _n=new nn(50,innerWidth/innerHeight,.1,600);await Promise.race([Promise.all([document.fonts?.load?.('700 40px "Gowun Batang"'),document.fonts?.load?.('700 40px "Noto Serif KR"',"\u8CFB\u5100")]),Ii(1800)]).catch(()=>{});await pm();var ue=Bm(Di),ir=ue.scene;ue.setTime(M.time);var $={avatar:new wi({outfit:M.me.outfit,look:M.me.look}),pos:new T(0,0,21),face:Math.PI,target:null,resolve:null,speed:3.6,stuck:0};$.avatar.root.visible=!1;ir.add($.avatar.root);var ve={fpPitch:.1,yaw:0,pitch:.36,dist:7.6,tYaw:0,tPitch:.36,tDist:7.6,focus:null,focusK:0,look:new T};function a0(){Di.setSize(innerWidth,innerHeight),_n.aspect=innerWidth/innerHeight,_n.fov=innerWidth<innerHeight?62:50,_n.updateProjectionMatrix()}addEventListener("resize",a0);a0();var o0=L("#labels"),Td=new Set,Ma=new T;function ba(i,e){o0.append(i);let t={el:i,getPos:e};return Td.add(t),{el:i,remove(){i.remove(),Td.delete(t)}}}function rh(i,e="",t="\uB098",n=""){let r=document.createElement("div");return r.className=`tag ${e}`,r.innerHTML=`<b>${Ue(t)}</b>${Ue(i)}${n?`<i>${Ue(n)}</i>`:""}`,r}var Av=(i,e=1)=>()=>i.visible===!1?null:Ma.copy(i.position).add(new T(0,1.62*e,0));function fs(i,e,t=3800,n=!1,r=1){let s=document.createElement("div");s.className=`bubble${n?" emote":""}`,s.textContent=e;let a=ba(s,()=>Ma.copy(i.position).add(new T(0,2.05*r,0)));setTimeout(()=>a.remove(),t)}function Rv(){let i=innerWidth,e=innerHeight;for(let t of Td){let n=t.getPos();if(!n){t.el.style.display="none";continue}let r=Ma.copy(n).project(_n);if(r.z>1||r.z<-1){t.el.style.display="none";continue}t.el.style.display="",t.el.style.transform=`translate(${(r.x*.5+.5)*i}px, ${(-r.y*.5+.5)*e}px) translate(-50%, -100%)`}}var wd,Cv=ba(rh("\uC0C1\uC8FC","host","\uC0C1\uC8FC"),()=>ue.hostNpc.root.visible?Ma.set(ue.HOST_SPOT.x,He+1.62*ue.hostNpc.height,ue.HOST_SPOT.z):null);ba(rh("\uC548\uB0B4 \uB3C4\uC6B0\uBBF8","helper","\uC548\uB0B4"),Av(ue.helper.root));function xa(){return M.memorial.portrait||km(M.memorial.deceased.name)}function l0(){return Ar(M.memorial.gallery||[])}function Ld(){let i=M.memorial.deceased||{};return[i.birth,i.death].filter(Boolean).join(" \u2013 ")+(i.age?` \xB7 \uD5A5\uB144 ${i.age}\uC138`:"")}function rr({theme:i=!0}={}){let e=M.memorial,t=e.deceased?.name||"\uACE0\uC778";ft('[data-bind="name"]').forEach(n=>{n.textContent=`\u6545 ${t}`}),ft('[data-bind="dates"]').forEach(n=>{n.textContent=Ld()}),ft('[data-bind="mourners"]').forEach(n=>{n.textContent=e.mourners||"-"}),ft('[data-bind="departure"]').forEach(n=>{n.textContent=e.funeral?.departure||"-"}),ft('[data-bind="burial"]').forEach(n=>{n.textContent=e.funeral?.burial||"-"}),ft('[data-bind="greeting"]').forEach(n=>{n.textContent=e.greeting||""}),ft('[data-bind="portrait"]').forEach(n=>{n.src=xa()}),L("#theme-note").textContent=`${ss[e.theme]?.icon||""} ${ss[e.theme]?.label||""} \uBE48\uC18C`,document.title=`\u6545 ${t} \xB7 \uC0BC\uAC00`,i&&ue.theme?.name!==e.theme&&(ue.setTheme(ss[e.theme]?e.theme:"hospital",t),ue.setShoes(Ud())),ue.setDeceasedName(t),ue.setPortrait(xa()),ue.setGallery(l0().filter(n=>n.type==="image").map(n=>n.src)),ue.setReligion(e.religion||"traditional"),ue.setTablet(t),ue.hostNpc.setOutfit(Tr[e.hostOutfit]?e.hostOutfit:"hostSuit"),ue.hostNpc.setLook(e.hostLook||wn),Cv.el.innerHTML=`<b>\uC0C1\uC8FC</b>${Ue(e.hostName||"\uC0C1\uC8FC")}`,M.role==="host"&&($.avatar.setOutfit(Tr[e.hostOutfit]?e.hostOutfit:"hostSuit"),$.avatar.setLook(e.hostLook||wn)),sr()}var Ad=null;function Md(i){ft("#entry [data-step]").forEach(e=>{e.hidden=e.dataset.step!==String(i)}),ft("#entry .steps i").forEach((e,t)=>e.classList.toggle("on",t+1<=i)),i===3&&(i=2),L("#entry .entry-card").scrollTop=0,i===3&&!Ad&&(Ad=new _a(L("#entry-look"),{look:M.me.look,outfit:M.me.outfit,who:"guest",onChange:(e,t)=>{M.me.look=e,M.me.outfit=t}}))}function Pv(){let i=L("#rite-choices");i.innerHTML=Object.entries(Si).map(([e,t])=>`
    <button type="button" class="card-choice" data-rite="${e}" aria-pressed="${M.me.religion===e}">
      <span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small>
    </button>`).join(""),i.onclick=e=>{let t=e.target.closest("[data-rite]");t&&(M.me.religion=t.dataset.rite,ft("[data-rite]",i).forEach(n=>n.setAttribute("aria-pressed",n===t)))},c0(L("#entry-hosts"),M.me.hostOf,e=>{M.me.hostOf=e,Rd()}),h0(L("#entry-relations"),M.me.rel,e=>{M.me.rel=e,Rd()}),L("#in-name").value=M.me.name||"",L("#to-step2").onclick=()=>Md(2),L("#to-step3").onclick=()=>{let e=L("#in-name").value.trim();if(!e){L("#in-name").focus(),yt("\uC774\uB984\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694. \uC774\uB984\uD45C\uC640 \uBC29\uBA85\uB85D\uC5D0 \uC4F0\uC5EC\uC694.");return}M.me.name=e,Kc("guest")},ft("#entry [data-back]").forEach(e=>{e.onclick=()=>Md(+e.dataset.back)}),L("#btn-enter").onclick=()=>Kc("guest"),L("#in-name").addEventListener("keydown",e=>{e.key==="Enter"&&L("#to-step3").click()}),L("#btn-host-entry").onclick=()=>u0(),L("#btn-theater-entry").onclick=()=>gs(),Md(1)}function Iv(){let i=zo(M.memorial).map(e=>e.name).filter(Boolean);return i.length?i:String(M.memorial.mourners||"").split(/[·,]/).map(e=>e.trim()).filter(Boolean).slice(0,6)}var Lv=i=>String(i||"").replace(/\(.*?\)/g,"").trim();function Rd(){let i=Lv(M.me.hostOf);M.me.relation=i?`${i}\uC758 ${M.me.rel||"\uC9C0\uC778"}`:M.me.rel||""}function c0(i,e,t){let n=Iv();i.innerHTML=n.map(r=>`<button type="button" class="chip host-chip" data-host="${Ue(r)}" aria-pressed="${r===e}">${Ue(r)}</button>`).join(""),i.onclick=r=>{let s=r.target.closest("[data-host]");if(!s)return;let a=s.getAttribute("aria-pressed")!=="true";ft("[data-host]",i).forEach(o=>o.setAttribute("aria-pressed",a&&o===s)),t(a?s.dataset.host:"")}}function h0(i,e,t){i.innerHTML=am.map(n=>`<button type="button" class="chip" data-rel="${n}" aria-pressed="${n===e}">${n}</button>`).join(""),i.onclick=n=>{let r=n.target.closest("[data-rel]");if(!r)return;let s=r.getAttribute("aria-pressed")!=="true";ft("[data-rel]",i).forEach(a=>a.setAttribute("aria-pressed",s&&a===r)),t(s?r.dataset.rel:"")}}function u0(){L("#pin-tip").textContent=Qi.hostPin==="0000"?"\uCC98\uC74C PIN\uC740 0000 \uC774\uC5D0\uC694. js/config.js \uC5D0\uC11C \uBC14\uAFD4 \uC8FC\uC138\uC694.":"";let i=L("#dlg-pin");un(i),i.onclose=()=>{if(i.returnValue!=="ok")return;let e=new FormData(L("#form-pin")).get("pin");if(L("#form-pin").reset(),String(e)!==String(Qi.hostPin)){yt("PIN\uC774 \uB9DE\uC9C0 \uC54A\uC544\uC694.");return}Kc("host")}}async function Kc(i){M.role=i,document.body.classList.toggle("is-host",i==="host"),i==="guest"&&Id(),Ad?.dispose(),it.ensure(),Gd(),L("#entry").hidden=!0,L("#hud").hidden=!1,L("#bar").hidden=!1;let e=M.memorial;i==="host"?(ue.hostNpc.root.visible=!1,$.pos.set(ue.HOST_SPOT.x,He,ue.HOST_SPOT.z),$.face=ue.HOST_SPOT.face,ve.tYaw=ve.yaw=-Math.PI/2+.35,ve.tDist=6.5,rr({theme:!1})):(ue.hostNpc.root.visible=!0,$.avatar.setOutfit(M.me.outfit),$.avatar.setLook(M.me.look),$.pos.set(0,0,21),$.face=Math.PI,ve.tYaw=ve.yaw=0),$.avatar.root.visible=!0;let t=i==="host"?e.hostName||"\uC0C1\uC8FC":M.me.name;if(wd=ba(rh(t,i==="host"?"host":"",i==="host"?"\uC0C1\uC8FC":"\uB098",i==="host"?"":M.me.relation),()=>$.avatar.root.visible?Ma.copy($.pos).add(new T(0,1.62*$.avatar.height,0)):null),Xo(M.view),Qv(),i==="guest"&&!localStorage.getItem("samga:onboarded")&&setTimeout(_0,600),history.pushState({samga:1},""),setTimeout(lh,1800),M.entered=!0,M.done=new Set(Ye.getLocal(`done:${M.me.religion}`,[])),M.ticket=!!Ye.getLocal("ticket",!1),g0(),y0(),i==="guest"){let n=new Date().toDateString();Ye.getLocal("visited","")!==n&&(Ye.setLocal("visited",n),Ye.bump("visits"),M.counters.visits=(M.counters.visits||0)+1),L("#guide").hidden=innerWidth<720,Tt(`${M.me.name} \uB2D8, \uC5B4\uC11C \uC624\uC138\uC694.
\uB3CC\uAE38\uC744 \uB530\uB77C \uBE48\uC18C\uB85C \uCC9C\uCC9C\uD788 \uAC78\uC5B4\uAC00 \uBCF4\uC138\uC694.`,5200),setTimeout(()=>{M.helperGreeted||(M.helperGreeted=!0,ue.helper.play("nod",null,{soft:!0}),fs(ue.helper.root,"\uC5B4\uC11C \uC624\uC138\uC694. \uCC98\uC74C\uC774\uC2DC\uBA74 \uC800\uD55C\uD14C \uBB3C\uC5B4\uBCF4\uC138\uC694~",4200))},1800)}else Tt(`\uC0C1\uC8FC \uC790\uB9AC\uC5D0 \uC130\uC2B5\uB2C8\uB2E4.
\uC870\uBB38\uAC1D\uC744 \uB9DE\uC73C\uBA70 '\uB2F5\uB840 \uC778\uC0AC'\uB85C \uACE0\uB9C8\uC6C0\uC744 \uC804\uD560 \uC218 \uC788\uC5B4\uC694.`,5200),setTimeout(()=>Vd(),900);sr(),B0()}var zt={cell:.4,min:-40,n:200,grid:null,key:""},Go=.3,Dd=()=>M.role==="host";function Dv(){let i=ue.theme?.name+":"+M.role;if(zt.grid&&zt.key===i)return zt.grid;let e=new Uint8Array(zt.n*zt.n);for(let t=0;t<zt.n;t++)for(let n=0;n<zt.n;n++)e[n*zt.n+t]=ue.blocked(zt.min+(t+.5)*zt.cell,zt.min+(n+.5)*zt.cell,Go,Dd())?1:0;return zt.grid=e,zt.key=i,e}var Zc=i=>Math.max(0,Math.min(zt.n-1,Math.floor((i-zt.min)/zt.cell))),jm=i=>zt.min+(i+.5)*zt.cell;function qm(i,e,t){if(!i[t*zt.n+e])return[e,t];for(let n=1;n<12;n++)for(let r=-n;r<=n;r++)for(let s=-n;s<=n;s++){if(Math.max(Math.abs(r),Math.abs(s))!==n)continue;let a=e+r,o=t+s;if(a>=0&&o>=0&&a<zt.n&&o<zt.n&&!i[o*zt.n+a])return[a,o]}return[e,t]}function $m(i,e){let t=Math.hypot(e.x-i.x,e.z-i.z),n=Math.ceil(t/.15);for(let r=1;r<n;r++){let s=r/n;if(ue.blocked(i.x+(e.x-i.x)*s,i.z+(e.z-i.z)*s,Go,Dd()))return!1}return!0}function Uv(i){let e={x:$.pos.x,z:$.pos.z};if($m(e,i))return[i];let t=Dv(),[n,r]=qm(t,Zc(e.x),Zc(e.z)),[s,a]=qm(t,Zc(i.x),Zc(i.z)),o=zt.n,c=r*o+n,l=a*o+s,h=new Int32Array(o*o).fill(-1),u=new Float32Array(o*o).fill(1/0),d=[[0,c]];u[c]=0;let p=S=>Math.hypot(S%o-s,Math.floor(S/o)-a),f=!1,v=0;for(;d.length&&v++<4e4;){let S=0;for(let I=1;I<d.length;I++)d[I][0]<d[S][0]&&(S=I);let[,b]=d.splice(S,1)[0];if(b===l){f=!0;break}let U=b%o,z=Math.floor(b/o);for(let I=-1;I<=1;I++)for(let X=-1;X<=1;X++){if(!I&&!X)continue;let G=U+I,N=z+X;if(G<0||N<0||G>=o||N>=o)continue;let Z=N*o+G;if(t[Z]||I&&X&&(t[z*o+G]||t[N*o+U]))continue;let D=u[b]+(I&&X?1.414:1);D<u[Z]&&(u[Z]=D,h[Z]=b,d.push([D+p(Z),Z]))}}if(!f)return[i];let m=[];for(let S=l;S!==-1&&S!==c;S=h[S])m.push(S);m.reverse();let _=m.map(S=>({x:jm(S%o),z:jm(Math.floor(S/o))}));_.push(i);let g=[],y=e,E=0;for(;E<_.length;){let S=E;for(let b=_.length-1;b>E;b--)if($m(y,_[b])){S=b;break}g.push(_[S]),y=_[S],E=S+1}return g}function Jt(i){return $.avatar.cancelSoft(),$.resolve&&$.resolve(!1),$.avatar.hold==="sit"&&($.avatar.hold=null),new Promise(e=>{$.route=Uv(i),$.lastRoute=[...$.route],$.target=$.route.shift(),$.resolve=e,$.stuck=0,$.best=1/0})}function d0(){$.resolve&&$.resolve(!1),$.route=null,$.target=null,$.resolve=null}var Qn={};function Nv(){let i=(Qn.KeyW||Qn.ArrowUp?1:0)-(Qn.KeyS||Qn.ArrowDown?1:0),e=(Qn.KeyD||Qn.ArrowRight?1:0)-(Qn.KeyA||Qn.ArrowLeft?1:0);if(!i&&!e)return null;let t=-Math.sin(ve.yaw),n=-Math.cos(ve.yaw),r=Math.cos(ve.yaw),s=-Math.sin(ve.yaw);return new pe(t*i+r*e,n*i+s*e).normalize()}var Qc=(i,e,t)=>{let n=(e-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*t};function kv(i){let e=$.avatar,t=null,n=!1;if(!e.busy&&M.entered){let a=Nv();if(a)$.target&&d0(),e.cancelSoft(),t=a,e.hold==="sit"&&(e.hold=null);else if($.target){let o=$.target.x-$.pos.x,c=$.target.z-$.pos.z,l=Math.hypot(o,c);if(l<$.best-.05?($.best=l,$.stuck=0):$.stuck+=i,l<.07&&$.route?.length)$.target=$.route.shift(),$.best=1/0;else if(l<.07){$.pos.x=$.target.x,$.pos.z=$.target.z;let h=$.resolve,u=$.target.face;$.target=null,$.resolve=null,u!=null&&($.wantFace=u),h?.(!0)}else t=new pe(o/l,c/l)}}if(t){let a=$.target&&Math.hypot($.target.x-$.pos.x,$.target.z-$.pos.z)>5,o=Math.min($.speed*(a?1.9:1)*i,$.target?Math.hypot($.target.x-$.pos.x,$.target.z-$.pos.z):1),c=$.pos.x+t.x*o,l=$.pos.z+t.y*o,h=Dd();$.target&&$.stuck>.8||!ue.blocked(c,l,Go,h)?($.pos.x=c,$.pos.z=l,n=!0):ue.blocked(c,$.pos.z,Go,h)?ue.blocked($.pos.x,l,Go,h)||($.pos.z=l,n=!0):($.pos.x=c,n=!0),$.face=Qc($.face,Math.atan2(t.x,t.y),Math.min(1,i*12)),$.wantFace=null}else $.wantFace!=null&&($.face=Qc($.face,$.wantFace,Math.min(1,i*8)));let r=ue.heightAt($.pos.x,$.pos.z);$.pos.y+=(r-$.pos.y)*Math.min(1,i*14),e.root.position.copy($.pos),e.root.rotation.y=$.face,e.update(i,n);let s=ue.inHall($.pos.x,$.pos.z)&&$.pos.z<.6;if(s!==M.inHall){M.inHall=s;let a=ue.theme?.shoes;e.setBarefoot(s&&a),a&&s&&!M.shoeTold&&(M.shoeTold=!0,Tt("\uC2E0\uBC1C\uC744 \uBC97\uACE0 \uBE48\uC18C \uB9C8\uB8E8\uC5D0 \uC62C\uB77C\uC12D\uB2C8\uB2E4.",3e3)),ue.setShoes(Ud())}}function Ud(){let i=3;M.inHall&&M.role==="guest"&&i++;for(let e of M.others?.values()||[])e.inHall&&i++;return i}function Bv(i){ve.yaw+=(ve.tYaw-ve.yaw)*Math.min(1,i*8),ve.pitch+=(ve.tPitch-ve.pitch)*Math.min(1,i*8),ve.dist+=(ve.tDist-ve.dist)*Math.min(1,i*6);let e,t;if(M.entered)if(Wo()){let o=$.avatar.height,c=new T($.pos.x,$.pos.y+1.42*o,$.pos.z),l=$.face+Math.PI;t=c.clone().add(new T(Math.sin(l)*.45,.05,Math.cos(l)*.45)),e=c.clone().add(new T(-Math.sin(l)*Math.cos(ve.fpPitch),-Math.sin(ve.fpPitch),-Math.cos(l)*Math.cos(ve.fpPitch))),ve.yaw=ve.tYaw=l}else{e=new T($.pos.x,$.pos.y+1.1,$.pos.z),M.view==="first"&&(ve.yaw=ve.tYaw=$.face+Math.PI/2+.25,ve.pitch=ve.tPitch=.5,ve.dist=ve.tDist=3.4);let o=Math.cos(ve.pitch);t=new T(e.x+Math.sin(ve.yaw)*o*ve.dist,e.y+Math.sin(ve.pitch)*ve.dist,e.z+Math.cos(ve.yaw)*o*ve.dist),ue.inHall($.pos.x,$.pos.z)&&(t.x=es.clamp(t.x,-9.6,9.6),t.z=Math.max(t.z,-11.5),t.y=Math.min(t.y,(ue.theme?.ceiling??He+4.8)-.3)),t.y=Math.max(t.y,ue.heightAt(t.x,t.z)+.4)}else{let o=performance.now()/1e3;e=new T(0,2.2,-4);let c=o*.05;t=new T(Math.sin(c)*15,5.5,-4+Math.cos(c)*15+6)}let n=ve.focus?1:0;if(ve.focusK+=(n-ve.focusK)*Math.min(1,i*3),ve.focusK>.001&&(ve.focus||ve.lastFocus)){let o=ve.focus||ve.lastFocus;t.lerp(o.pos,ve.focusK),e.lerp(o.look,ve.focusK)}let r=Wo();r!==ve.wasFp&&(ve.blend=0,ve.wasFp=r),ve.blend=Math.min(1,(ve.blend??1)+i*2.2);let s=M.entered?ve.blend<1?Math.min(1,i*5):1:Math.min(1,i*2);_n.position.lerp(t,s),ve.look.lerp(e,s),$.avatar.root.visible=M.entered&&!(r&&ve.blend>.6);let a=((innerWidth<innerHeight?62:50)+(r?10:0))*(r?ve.zoom:1);Math.abs(_n.fov-a)>.1&&(_n.fov+=(a-_n.fov)*Math.min(1,i*4),_n.updateProjectionMatrix()),_n.lookAt(ve.look)}function sh(){ve.focus=null}function Wo(){return M.entered&&M.view==="first"&&!$.avatar.busy&&$.avatar.hold!=="sit"&&!ve.focus}function Xo(i){M.view=i,localStorage.setItem("samga:view",i),L("#btn-view").textContent=i==="first"?"\u{1F441} 1\uC778\uCE6D":"\u{1F3A5} 3\uC778\uCE6D",i==="third"&&(ve.tYaw=ve.yaw=$.face+Math.PI,ve.tPitch=.36,ve.tDist=7)}var eh=new bo;eh.camera=_n;var Ym=new pe;function p0(i,e){Ym.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),eh.setFromCamera(Ym,_n);let t=eh.intersectObjects(ir.children,!0);for(let n of t)if(n.object.userData.avatar!==$.avatar&&!(!n.object.visible||n.object.isSprite&&!n.object.userData.interact))return n.object.userData.interact?{interact:n.object.userData.interact,point:n.point}:ue.isWalkable(n.object)?{walk:n.point}:{walk:Ov(n.point)};return null}var Fv=new $n(new T(0,1,0),-He);function Ov(i){let e=new T;return eh.ray.intersectPlane(Fv,e)&&e.distanceTo(_n.position)<60?e:new T(i.x,0,i.z)}var Pi=new Map,tr=null,Cd=0,ms=Di.domElement;ms.addEventListener("pointerdown",i=>{if(ms.setPointerCapture(i.pointerId),Pi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Pi.size===1&&(tr={x:i.clientX,y:i.clientY,moved:0}),Pi.size===2){let[e,t]=[...Pi.values()];Cd=Math.hypot(e.x-t.x,e.y-t.y),tr=null}});ms.addEventListener("pointermove",i=>{let e=Pi.get(i.pointerId);if(!e){Hv(i.clientX,i.clientY);return}let t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,Pi.size===2){let[r,s]=[...Pi.values()],a=Math.hypot(r.x-s.x,r.y-s.y);th(Cd/a),Cd=a;return}tr&&(tr.moved+=Math.abs(t)+Math.abs(n),tr.moved>6&&(ve.focus&&sh(),Wo()?($.face-=t*.005,$.wantFace=null,ve.fpPitch=es.clamp(ve.fpPitch+n*.003,-.5,.75)):(ve.tYaw-=t*.0055,ve.tPitch=es.clamp(ve.tPitch+n*.004,.05,1.25))))});function f0(i){let e=tr&&tr.moved>6;Pi.delete(i.pointerId),i.type==="pointerup"&&tr&&!e&&Pi.size===0&&Vv(i.clientX,i.clientY),Pi.size===0&&(tr=null)}ms.addEventListener("pointerup",f0);ms.addEventListener("pointercancel",f0);ms.addEventListener("wheel",i=>{i.preventDefault(),th(1+Math.sign(i.deltaY)*.1)},{passive:!1});ve.zoom=1;function th(i){M.view==="first"?(ve.zoom=es.clamp(ve.zoom*i,.55,1.12),i>1&&ve.zoom>=1.12?(ve.overZoom=(ve.overZoom||0)+(i-1),ve.overZoom>.35&&(ve.overZoom=0,ve.zoom=1,Xo("third"),ve.tDist=3.2,yt("3\uC778\uCE6D\uC73C\uB85C \uBC14\uAFE8\uC5B4\uC694. \uC190\uAC00\uB77D\uC744 \uBC8C\uB824 \uAC00\uAE4C\uC774 \uB2F9\uAE30\uBA74 \uB2E4\uC2DC 1\uC778\uCE6D\uC774 \uB3FC\uC694.",2600))):ve.overZoom=0):(ve.tDist=es.clamp(ve.tDist*i,2.4,16),i<1&&ve.tDist<=2.4?(ve.underZoom=(ve.underZoom||0)+(1-i),ve.underZoom>.35&&(ve.underZoom=0,ve.zoom=1,Xo("first"))):ve.underZoom=0)}var Rr=null,bd=0;function Hv(i,e){bd||!M.entered||(bd=requestAnimationFrame(()=>{bd=0;let t=p0(i,e),n=t?.interact;ms.style.cursor=n?"pointer":t?.walk?"default":"grab";let r=n?Gv(n):"";if(!r){Rr?.remove(),Rr=null;return}Rr||(Rr=document.createElement("div"),Rr.className="hover-label",document.body.append(Rr)),Rr.textContent=r,Rr.style.transform=`translate(${i}px, ${e-16}px) translate(-50%, -100%)`}))}function Gv(i){if(i.startsWith("memory:")){let t=ue.memories?.[+i.split(":")[1]];return t?`${t.name} \uB2D8\uC758 \uB9C8\uC74C${t.relation?` \xB7 ${t.relation}`:""}`:""}if(i.startsWith("sky:"))return"\uD558\uB298\uC758 \uB4F1\uBD88";if(i.startsWith("wreath:")){let t=ue.wreaths?.[+i.split(":")[1]];return t?`\uADFC\uC870\uD654\uD658 \xB7 ${t.from}`:""}if(i.startsWith("other:")){let t=M.others.get(i.slice(6));return t?`${t.name} \uB2D8\uAED8 \uC778\uC0AC`:""}let e=ue.interactables.get(i);return e?e.verb:""}function zv(i,e){let t=document.createElement("div");t.className="ripple",t.style.left=`${i}px`,t.style.top=`${e}px`,o0.append(t),setTimeout(()=>t.remove(),750)}function Vv(i,e){if(!M.entered)return;if(ve.focus){sh();return}let t=p0(i,e);if(t){if(t.interact){pn(t.interact);return}t.walk&&!M.busy&&!$.avatar.busy&&(zv(i,e),Jt({x:t.walk.x,z:t.walk.z}))}}addEventListener("keydown",i=>{if(!M.entered||i.target.closest("input, textarea, select, dialog")||document.querySelector("dialog[open]")||!L("#theater").hidden)return;Qn[i.code]=!0,i.code==="KeyQ"&&(Wo()?$.face+=.35:ve.tYaw+=.35),i.code==="KeyE"&&(Wo()?$.face-=.35:ve.tYaw-=.35),i.code==="KeyV"&&Xo(M.view==="first"?"third":"first"),(i.code==="Equal"||i.code==="NumpadAdd")&&th(.85),(i.code==="Minus"||i.code==="NumpadSubtract")&&th(1.18),i.code==="KeyG"&&M0(),i.code==="KeyT"&&(i.preventDefault(),Nd()),i.code==="Escape"&&sh(),(i.code==="Space"||i.code==="Enter")&&(i.preventDefault(),M.near&&pn(M.near.id));let e=Number(i.key);e>=1&&e<=9&&ft("#rite-actions .act")[e-1]?.click(),i.code.startsWith("Arrow")&&i.preventDefault()});addEventListener("keyup",i=>{Qn[i.code]=!1});addEventListener("blur",()=>{for(let i in Qn)Qn[i]=!1});function Wv(){let i=null,e=1/0;if(M.entered&&!$.avatar.busy&&!M.busy)for(let t of ue.interactables.values()){if(!t.radius||t.id==="host"&&M.role==="host")continue;let n=Math.hypot($.pos.x-t.spot.x,$.pos.z-t.spot.z);n<t.radius&&n<e&&(e=n,i=t)}if(i?.id!==M.near?.id){M.near=i;let t=L("#prompt");i?(t.innerHTML=`${Ue(i.verb)}<kbd>Space</kbd>`,t.hidden=!1):t.hidden=!0,jo(),i?.id==="altar"&&ah()<=0&&M.role==="guest"&&Tt(`\uD5A5\uC774 \uB2E4 \uD0C0\uC11C \uAEBC\uC838 \uC788\uC5B4\uC694.
\uC0C8 \uD5A5\uC744 \uC62C\uB824 \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC8FC\uC138\uC694.`,3800)}M.role==="guest"&&!M.hostNodded&&ue.hostNpc.root.visible&&Math.hypot($.pos.x-ue.HOST_SPOT.x,$.pos.z-ue.HOST_SPOT.z)<4.2&&(M.hostNodded=!0,ue.hostNpc.play("nod"))}L("#prompt").onclick=()=>M.near&&pn(M.near.id);async function pn(i){if(M.busy||$.avatar.busy){yt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}if(i.startsWith("photo:"))return gs(+i.split(":")[1]);if(i.startsWith("memory:"))return ly(ue.memories?.[+i.split(":")[1]]);if(i.startsWith("sky:")){let t=ue.lantern(+i.split(":")[1]);return t&&oy(t)}if(i.startsWith("meal:"))return S0(+i.split(":")[1]);if(i.startsWith("wreath:"))return uy(ue.wreaths?.[+i.split(":")[1]]);if(i.startsWith("other:"))return fy(i.slice(6));let e=ue.interactables.get(i);switch(i){case"portrait":return gs();case"altar":await Jt(e.spot)&&Tt(M.role==="host"?"\uC81C\uB2E8 \uC55E\uC785\uB2C8\uB2E4.":`\uC81C\uB2E8 \uC55E\uC785\uB2C8\uB2E4.
\uC544\uB798 \uBC88\uD638 \uC21C\uC11C\uB300\uB85C \uBC84\uD2BC\uC744 \uB204\uB974\uAC70\uB098, \u2018\uD55C \uBC88\uC5D0 \uC870\uBB38\uD558\uAE30\u2019\uB97C \uB20C\uB7EC \uC8FC\uC138\uC694.`);return;case"candles":return Ea("candle");case"basket":return dn(async()=>{await Jt(e.spot)&&m0()});case"host":return M.role==="host"?void 0:dn(async()=>{await Jt(e.spot)&&sy()});case"donation":return dn(async()=>{await Jt(e.spot)&&E0()});case"guestbook":return dn(async()=>{await Jt(e.spot)&&ey()});case"lantern":return dn(async()=>{await Jt(e.spot)&&ay()});case"florist":return dn(async()=>{await Jt(e.spot)&&hy()});case"helper":return dn(async()=>{await Jt(e.spot)&&dy()});default:}}async function dn(i){if(!M.busy){M.busy=!0,jo();try{await i()}finally{M.busy=!1,jo()}}}function Wn(i){M.act=i,M.actSeq++}function m0(){if($.avatar.hold==="flower"){yt("\uC774\uBBF8 \uAD6D\uD654\uB97C \uB4E4\uACE0 \uC788\uC5B4\uC694. \uC81C\uB2E8 \uC55E\uC5D0\uC11C \uD5CC\uD654\uD574 \uC8FC\uC138\uC694.");return}$.avatar.hold="flower",$.avatar.setProp("flower",!0),it.soft(),Tt(`\uD558\uC580 \uAD6D\uD654 \uD55C \uC1A1\uC774\uB97C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.
\uC81C\uB2E8 \uC55E\uC73C\uB85C \uAC00\uC11C \uAF43\uBD09\uC624\uB9AC\uAC00 \uC601\uC815\uC744 \uD5A5\uD558\uB3C4\uB85D \uB193\uC544 \uC8FC\uC138\uC694.`),Wn("flower")}var Xv=()=>ue.interactables.get("altar").spot,Zm={traditional:{incense:`\uD5A5\uC5D0 \uBD88\uC744 \uBD99\uC5EC \uD5A5\uB85C\uC5D0 \uAF42\uC558\uC2B5\uB2C8\uB2E4.
\uD5A5 \uC5F0\uAE30\uAC00 \uACE0\uC778\uAED8 \uB9C8\uC74C\uC744 \uC804\uD574 \uC904 \uAC70\uC608\uC694.`,bow:"\uB450 \uBC88 \uC808\uD558\uACE0, \uBAA9\uB840\uB85C \uC608\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4.",silence:"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4."},buddhist:{incense:"\uD5A5\uC744 \uC0AC\uB974\uBA70 \uADF9\uB77D\uC655\uC0DD\uC744 \uBE55\uB2C8\uB2E4.",hapjang:`\uB098\uBB34\uC544\uBBF8\uD0C0\uBD88 \u2014
\uB450 \uC190\uC744 \uBAA8\uC544 \uBC18\uBC30 \uC62C\uB838\uC2B5\uB2C8\uB2E4.`,bow:`\uC808 \uB450 \uBC88\uC744 \uC62C\uB838\uC2B5\uB2C8\uB2E4.
\uBD80\uCC98\uB2D8 \uD488\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC18C\uC11C.`,beads:"\uC5FC\uC8FC \uC77C\uACF1 \uC54C\uC744 \uAD74\uB9AC\uBA70 \uADF9\uB77D\uC655\uC0DD\uC744 \uBE4C\uC5C8\uC2B5\uB2C8\uB2E4."},christian:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",prayer:`\uC8FC\uB2D8, \uC2AC\uD514 \uAC00\uC6B4\uB370 \uC788\uB294 \uC720\uAC00\uC871\uC744 \uC704\uB85C\uD558\uC2DC\uACE0
\uBD80\uD65C\uC758 \uC18C\uB9DD\uC73C\uB85C \uBD99\uB4E4\uC5B4 \uC8FC\uC18C\uC11C.`,silentPrayer:"\uACE0\uAC1C \uC219\uC5EC \uBB35\uB3C4\uD569\uB2C8\uB2E4."},catholic:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",sign:"\uC131\uBD80\uC640 \uC131\uC790\uC640 \uC131\uB839\uC758 \uC774\uB984\uC73C\uB85C. \uC544\uBA58.",prayer:`\uC8FC\uB2D8, {name}\uC5D0\uAC8C \uC601\uC6D0\uD55C \uC548\uC2DD\uC744 \uC8FC\uC18C\uC11C.
\uC601\uC6D0\uD55C \uBE5B\uC744 \uADF8\uC5D0\uAC8C \uBE44\uCD94\uC18C\uC11C.`,candle:`\uC791\uC740 \uCD1B\uBD88 \uD558\uB098\uB97C \uBD09\uD5CC\uD588\uC2B5\uB2C8\uB2E4.
\uC774 \uBD88\uBE5B\uCC98\uB7FC \uB530\uB73B\uD55C \uACF3\uC5D0 \uBA38\uBB34\uC2DC\uAE38.`},none:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",silence:"\uACE0\uC778\uC744 \uAE30\uC5B5\uD558\uBA70 \uBB35\uB150\uD588\uC2B5\uB2C8\uB2E4.",nod:"\uC815\uC911\uD788 \uBAA9\uB840\uD588\uC2B5\uB2C8\uB2E4."}},Ci=i=>(Zm[M.role==="host"?M.memorial.religion||"traditional":M.me.religion]?.[i]||Zm.traditional[i]||"").replace("{name}",M.memorial.deceased.name);function ah(){return M.incenseAt?1-(Date.now()-M.incenseAt)/(Xc*6e4):0}async function Ea(i){if(M.busy||$.avatar.busy){yt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}let e=ld[i];await dn(async()=>{let t=$.avatar;if(t.cancelSoft(),i==="flower"&&t.hold!=="flower"){if(!await Jt(ue.interactables.get("basket").spot))return;m0(),await Ii(500)}if(i==="candle"){if(!await Jt(ue.interactables.get("candles").spot))return}else if(e.altar&&!await Jt(Xv()))return;switch(await Ii(250),Wn(i),i){case"incense":{let n=ah()<=0;await t.play("incense",r=>{r==="light"&&(M.counters.incense=(M.counters.incense||0)+1,M.incenseAt=Date.now(),Ye.stampState("incenseAt").then(s=>{typeof s=="number"&&(M.incenseAt=s)}),uh(),ue.setCounts(M.counters),ue.burstSmoke(),it.soft())}),Tt(n?`\uAEBC\uC838 \uC788\uB358 \uD5A5\uC744 \uB2E4\uC2DC \uC62C\uB838\uC2B5\uB2C8\uB2E4.
\uC55E\uC73C\uB85C ${Xc}\uBD84 \uB3D9\uC548 \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC904 \uAC70\uC608\uC694.`:Ci("incense"));break}case"flower":{await t.play("offer",async n=>{if(n!=="release")return;let r=t.props.flower;delete t.props.flower,t.hold=null,r&&(await ue.flyTo(r,new T((Math.random()-.5)*2.6,He+.16,-7.3),.7),ir.remove(r)),M.counters.flowers=(M.counters.flowers||0)+1,ue.setCounts(M.counters),it.drop()}),Tt(Ci("flower")||"\uD558\uC580 \uAD6D\uD654\uB97C \uC601\uC815 \uC55E\uC5D0 \uB193\uC558\uC2B5\uB2C8\uB2E4.");break}case"bow2":case"bow3":Tt(`\uB450 \uC190\uC744 \uBAA8\uC544 \uC774\uB9C8\uC5D0 \uB300\uACE0, \uBB34\uB98E\uC744 \uAFC7\uC5B4 \uC808\uD569\uB2C8\uB2E4.
\uB450 \uBC88 \uC808\uD55C \uB4A4 \uAC00\uBCCD\uAC8C \uBAA9\uB840\uD574\uC694.`,3400),await t.play(i),Tt(Ci("bow"));break;case"hapjang":await t.play("hapjang"),it.moktak(),Tt(Ci("hapjang"));break;case"beads":t.setProp("beads",!0),Tt("\uC5FC\uC8FC\uB97C \uAD74\uB9BD\uB2C8\uB2E4\u2026",2500),await t.play("beads",n=>{n==="bead"&&it.moktak()}),t.setProp("beads",!1),Tt(Ci("beads"));break;case"prayer":{let n=jv();Tt(Ci("prayer"),6e3),await t.play("prayer"),n.fade();break}case"silentPrayer":case"silence":await qv(i==="silentPrayer"?"\uBB35\uB3C4":"\uBB35\uB150"),Tt(Ci(i));break;case"sign":await t.play("sign"),Tt(Ci("sign"));break;case"candle":await t.play("candle",n=>{n==="release"&&(M.counters.candles=(M.counters.candles||0)+1,ue.setCounts(M.counters),it.soft())}),Tt(Ci("candle"));break;case"nod":await t.play("nod"),Tt(Ci("nod"));break;case"cup":Tt("\uC220\uC794\uC5D0 \uC220\uC744 \uB530\uB77C \uC81C\uB2E8\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4.",2600),await t.play("pour",n=>{n==="pour"&&(ue.fillCup(),it.tone(700,.3,{gain:.04}))}),Tt("\uC220\uC794\uC744 \uC62C\uB838\uC2B5\uB2C8\uB2E4.");break;default:}Ye.bump(e.key,i==="beads"?7:1),["incense","flowers","candles"].includes(e.key)||(M.counters[e.key]=(M.counters[e.key]||0)+(i==="beads"?7:1)),$o(i),sr()})}function jv(){let i=new Me(.5,1.1,6,24,1,!0),e=new cn({color:"#fff3d6",transparent:!0,opacity:0,side:St,depthWrite:!1,blending:So}),t=new H(i,e);t.raycast=()=>{},t.position.copy($.pos).add(new T(0,3,0)),ir.add(t);let n=.16,r=()=>{if(e.opacity+=(n-e.opacity)*.05,n===0&&e.opacity<.005){ir.remove(t),i.dispose();return}requestAnimationFrame(r)};return r(),{fade(){n=0}}}function qv(i){return new Promise(e=>{let t=L("#silence"),n=L("#silence-arc");L("#silence-text").textContent=i,t.hidden=!1,n.style.transition="none",n.style.strokeDashoffset="289",it.bell(),it.duck(!0);let r=M.auto?5e3:9e3;requestAnimationFrame(()=>requestAnimationFrame(()=>{n.style.transition=`stroke-dashoffset ${r}ms linear`,n.style.strokeDashoffset="0"})),$.avatar.play("silence");let s=!1,a=()=>{s||(s=!0,t.hidden=!0,t.onclick=null,it.chime(.1),it.duck(!1),$.avatar.finish(),e())};t.onclick=a,setTimeout(a,r)})}var $v=[{id:"guestbook",icon:"\u270D\uFE0F",label:"\uBC29\uBA85\uB85D",run:()=>pn("guestbook")},{id:"greet",icon:"\u{1F91D}",label:"\uC0C1\uC8FC \uC778\uC0AC",run:()=>pn("host")},{id:"condolence",icon:"\u2709\uFE0F",label:"\uC870\uC758\uAE08",run:()=>pn("donation")},{id:"meal",icon:"\u{1F372}",label:"\uC2DD\uB2F9",run:()=>hh()},{id:"lantern",icon:"\u{1F3EE}",label:"\uB4F1\uBD88",run:()=>pn("lantern")},{id:"wreath",icon:"\u{1F490}",label:"\uD654\uD658",run:()=>pn("florist")},{id:"talk",icon:"\u{1F4AC}",label:"\uB9D0\uD558\uAE30",run:()=>Nd()},{id:"emote",icon:"\u{1F622}",label:"\uD45C\uC815",run:()=>v0()}],Yv=[{id:"thank",icon:"\u{1F647}",label:"\uB2F5\uB840 \uC778\uC0AC",run:()=>C0()},{id:"spot",icon:"\u{1F4CD}",label:"\uC0C1\uC8FC \uC790\uB9AC",run:()=>dn(async()=>{await Jt(ue.HOST_SPOT)})},{id:"panel",icon:"\u{1F5C2}\uFE0F",label:"\uC0C1\uC8FC \uD328\uB110",run:()=>Vd()},{id:"book",icon:"\u{1F4D6}",label:"\uBC29\uBA85\uB85D",run:()=>b0()},{id:"theater",icon:"\u{1F39E}\uFE0F",label:"\uCD94\uC5B5 \uC0C1\uC601",run:()=>gs()},{id:"talk",icon:"\u{1F4AC}",label:"\uB9D0\uD558\uAE30",run:()=>Nd()},{id:"emote",icon:"\u{1F622}",label:"\uD45C\uC815",run:()=>v0()}];function Jm(i){if(M.role!=="guest")return"";let e=Li().findIndex(t=>t.any.includes(i));return e<0?"":`<i class="num">${e+1}</i>`}function g0(){let i=M.role==="host"?Si[M.memorial.religion]||Si.traditional:Si[M.me.religion],e=M.role==="host"?i.actions.filter(n=>n!=="flower"):i.actions;L("#rite-actions").innerHTML=e.map((n,r)=>{let s=ld[n];return`<button type="button" class="act" data-act="${n}" title="${s.label}${s.sub?` (${s.sub})`:""} \xB7 ${r+1}">${Jm(n)}<span class="ic">${s.icon}</span><span>${s.label}</span></button>`}).join(""),L("#rite-actions").onclick=n=>{let r=n.target.closest("[data-act]");r&&Ea(r.dataset.act)};let t=M.role==="host"?Yv:$v;L("#common-actions").innerHTML=t.map(n=>`<button type="button" class="act" data-common="${n.id}">${Jm(n.id)}<span class="ic">${n.icon}</span><span>${n.label}</span></button>`).join(""),L("#common-actions").onclick=n=>{let r=n.target.closest("[data-common]");r&&t.find(s=>s.id===r.dataset.common).run()},L("#emotes").innerHTML=Oc.map(n=>`<button type="button" data-expr="${n.id}" title="${n.label}"><span>${n.icon}</span><small>${n.label}</small></button>`).join(""),jo()}function jo(){let i=qo(),e=new Set(i?i.any:[]);ft("#rite-actions .act, #common-actions .act").forEach(t=>{let n=t.dataset.act||t.dataset.common;t.classList.toggle("suggest",M.role==="guest"&&e.has(n)),t.disabled=M.busy})}function v0(){L("#emotes").hidden=!L("#emotes").hidden}L("#emotes").onclick=i=>{let e=i.target.closest("[data-expr]");e&&(L("#emotes").hidden=!0,Zv(e.dataset.expr))};function Zv(i){let e=Oc.find(t=>t.id===i);i==="cry"||i==="smile"?$.avatar.setExpression(i,5):fs($.avatar.root,e.icon,2400,!0,$.avatar.height),i==="pray"&&$.avatar.play("hapjang",null,{soft:!0}),Wn(`expr:${i}`)}function Nd(){let i=L("#talkbar");i.hidden=!1,L("#talk-quick").innerHTML=cm.map(e=>`<button type="button">${Ue(e)}</button>`).join(""),L("#talk-input").focus()}function oh(i){i=i.trim().slice(0,60),i&&(fs($.avatar.root,i,5e3,!1,$.avatar.height),M.say=i,M.sayS++,it.pop())}L("#talkbar").onsubmit=i=>{i.preventDefault(),oh(L("#talk-input").value),L("#talk-input").value="",L("#talkbar").hidden=!0};L("#talk-quick").onclick=i=>{let e=i.target.closest("button");e&&(oh(e.textContent),L("#talkbar").hidden=!0)};L("#talk-close").onclick=()=>{L("#talkbar").hidden=!0};function Li(){return M.role==="guest"?Si[M.me.religion].steps:[]}function Cr(i){return i.any.some(e=>M.done.has(e))}function qo(){return Li().find(i=>!Cr(i))}function $o(i){if(M.role!=="guest")return;let e=Li().filter(n=>!n.optional).every(Cr);M.done.add(i),Ye.setLocal(`done:${M.me.religion}`,[...M.done]),y0(),jo();let t=Li().filter(n=>!n.optional).every(Cr);!e&&t&&setTimeout(py,2600)}function y0(){if(M.role!=="guest"){L("#guide").hidden=!0;return}let i=Si[M.me.religion];L("#guide-title").textContent=`${i.icon} ${i.label} \uC870\uBB38 \uC21C\uC11C`;let e=qo();L("#guide-steps").innerHTML=Li().map(t=>`
    <li class="${Cr(t)?"done":t===e?"next":""}">${Ue(t.label)}${t.optional?'<span class="opt">\uC120\uD0DD</span>':""}
      ${t===e?`<button type="button" data-step="${t.id}">\uD558\uAE30</button>`:""}</li>`).join(""),Bd(),L("#guide-tip").textContent=e?"\u2018\uD558\uAE30\u2019\uB97C \uB204\uB974\uBA74 \uC54C\uC544\uC11C \uAC78\uC5B4\uAC00\uC11C \uC9C4\uD589\uD574\uC694. \uC21C\uC11C\uB294 \uC790\uC720\uB86D\uAC8C \uBC14\uAFD4\uB3C4 \uAD1C\uCC2E\uC544\uC694.":"\uBAA8\uB4E0 \uC21C\uC11C\uB97C \uB9C8\uCCE4\uC5B4\uC694. \uD3B8\uD788 \uBA38\uBB3C\uB2E4 \uAC00\uC138\uC694."}function kd(i){let e=i.any[0];e==="guestbook"?pn("guestbook"):e==="greet"?pn("host"):e==="condolence"?pn("donation"):e==="meal"?hh():i.id==="offer"&&Si[M.me.religion].auto.length?w0():Ea(e)}L("#guide-steps").onclick=i=>{let e=i.target.closest("[data-step]");e&&kd(Li().find(t=>t.id===e.dataset.step))};var Jv={reception:"guestbook",guestbook:"guestbook",greet:"host",condolence:"donation",meal:"meal"},Km=i=>i?Jv[i.id]||"altar":null;function Bd(){let i=L("#next-cta");if(M.role!=="guest"||!M.entered){i.hidden=!0;return}let e=qo(),t=Li().some(n=>!Cr(n)&&Km(n)==="altar");i.hidden=M.auto,L("#cta-next").innerHTML=e?`<small>\uB2E4\uC74C \uD560 \uC77C ${Li().indexOf(e)+1}/${Li().length}</small>${Ue(e.label)} \u25B6`:"<small>\uC870\uBB38\uC744 \uBAA8\uB450 \uB9C8\uCCE4\uC5B4\uC694</small>\uB4F1\uBD88 \uB744\uC6B0\uAE30 \u25B6",L("#cta-auto").hidden=!t,ft(".marker").forEach(n=>n.classList.toggle("next",n.dataset.id===Km(e)))}L("#cta-next").onclick=()=>{let i=qo();i?kd(i):pn("lantern")};L("#cta-auto").onclick=()=>w0();var Kv=[{id:"guestbook",icon:"\u270D\uFE0F",text:"\uC811\uC218\uB300 \xB7 \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08"},{id:"altar",icon:"\u{1F56F}\uFE0F",text:"\uC81C\uB2E8 \xB7 \uC870\uBB38"},{id:"host",icon:"\u{1F647}",text:"\uC0C1\uC8FC"},{id:"basket",icon:"\u{1F33C}",text:"\uD5CC\uD654 \uAD6D\uD654"},{id:"florist",icon:"\u{1F490}",text:"\uADFC\uC870\uD654\uD658"},{id:"lantern",icon:"\u{1F3EE}",text:"\uB9C8\uC74C \uB4F1\uBD88"},{id:"meal",icon:"\u{1F372}",text:"\uC2DD\uB2F9",pos:new T(17,3.2,-4.5)}];function Qv(){for(let i of Kv){if(i.id==="host"&&M.role==="host")continue;let e=i.pos||ue.interactables.get(i.id)?.anchor;if(!e)continue;let t=document.createElement("button");t.type="button",t.className="marker",t.dataset.id=i.id,t.innerHTML=`<span>${i.icon}</span>${i.text}`,t.onclick=()=>i.id==="meal"?hh():pn(i.id);let n=e.clone().add(new T(0,.45,0));ba(t,()=>_n.position.distanceTo(n)<24?n:null)}Bd()}function lh(){let i=!it.running&&it.trackId!=="none";L("#sound-chip").hidden=!i}L("#sound-chip").onclick=()=>{it.ensure(),it.ctx?.resume(),Gd(),setTimeout(lh,600)};for(let i of["pointerdown","touchend","keydown"])addEventListener(i,()=>{M.entered&&it.ctx&&!it.running&&it.ctx.resume().then(lh)},{passive:!0});document.addEventListener("visibilitychange",()=>{!document.hidden&&it.ctx&&it.ctx.resume().then(lh)});L("#btn-view").onclick=()=>Xo(M.view==="first"?"third":"first");L("#dlg-onboard").addEventListener("close",()=>localStorage.setItem("samga:onboarded","1"));function _0(){let i=M.role==="guest"?Li():[];L("#onboard-steps").innerHTML=i.map((e,t)=>`<li><button type="button" data-ob="${t}" class="${Cr(e)?"done":e===qo()?"next":""}"><i>${Cr(e)?"\u2713":t+1}</i><span>${Ue(e.label)}</span><b>${Cr(e)?"\uB2E4\uC2DC \uD558\uAE30":"\uC774 \uB2E8\uACC4\uB85C"} \u203A</b></button></li>`).join(""),L("#onboard-steps").onclick=e=>{let t=e.target.closest("[data-ob]");t&&(L("#dlg-onboard").close(),kd(i[+t.dataset.ob]))},un(L("#dlg-onboard"))}L("#btn-guidebook").onclick=_0;function x0(){let i=[...document.querySelectorAll("dialog[open]")].pop();return i?(i.close(),!0):L("#theater").hidden?L("#talkbar").hidden?L("#emotes").hidden?M.auto?(M.auto=!1,$.avatar.finish(),yt("\uD55C \uBC88\uC5D0 \uC870\uBB38\uD558\uAE30\uB97C \uBA48\uCDC4\uC5B4\uC694."),!0):$.target?(d0(),!0):ve.focus?(sh(),!0):!1:(L("#emotes").hidden=!0,!0):(L("#talkbar").hidden=!0,!0):(R0.close(),!0)}L("#btn-back").onclick=()=>x0();history.replaceState({samga:0},"");addEventListener("popstate",()=>{x0(),history.pushState({samga:1},"")});setInterval(()=>{let i=!!document.querySelector("dialog[open]")||!L("#theater").hidden||M.auto||!!$.target;L("#btn-back").hidden=!M.entered||!i||!!document.querySelector("dialog[open]"),L("#btn-guidebook").hidden=!M.entered||!!document.querySelector("dialog[open]")||!L("#theater").hidden},300);ft("dialog.sheet .sheet-body").forEach(i=>{let e=document.createElement("button");e.type="button",e.className="sheet-back",e.textContent="\u2190 \uC774\uC804",e.onclick=()=>i.closest("dialog").close(),i.prepend(e)});function M0(){M.role==="guest"&&(L("#guide").hidden=!L("#guide").hidden)}L("#guide-close").onclick=()=>{L("#guide").hidden=!0};L("#btn-guide").onclick=M0;function un(i){return i.returnValue="",i.showModal(),i}ft("dialog [data-close]").forEach(i=>i.addEventListener("click",()=>i.closest("dialog").close()));ft("dialog").forEach(i=>i.addEventListener("click",e=>{e.target===i&&i.close()}));function Fd(i,e,t){i.innerHTML=e.map(n=>`<button type="button" aria-pressed="false">${Ue(n)}</button>`).join(""),i.onclick=n=>{let r=n.target.closest("button");r&&(t.tagName==="TEXTAREA"?t.value=(t.value?`${t.value.trim()} `:"")+r.textContent:t.value=r.textContent,ft("button",i).forEach(s=>s.setAttribute("aria-pressed",s===r)))}}function ch(i){L("#view-body").innerHTML=i,un(L("#dlg-view"))}function ey(){let i=L("#form-guestbook");i.name.value=i.name.value||(M.role==="host"?M.memorial.hostName:M.me.name)||"";let e=M.role==="host"?"\uAC00\uC871":M.me.relation||"";i.relation.value="";let t=()=>{Rd(),e=M.me.relation};c0(L("#gb-hosts"),M.me.hostOf,r=>{M.me.hostOf=r,t()}),h0(L("#gb-relations"),M.me.rel,r=>{M.me.rel=r,t(),i.relation.value=""}),i.relation.oninput=()=>{e=i.relation.value.trim(),ft("#gb-relations [data-rel]").forEach(r=>r.setAttribute("aria-pressed","false"))},Fd(L("#gb-quick"),["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC138\uC694.","\uB298 \uAE30\uC5B5\uD558\uACA0\uC2B5\uB2C8\uB2E4.","\uD568\uAED8\uD55C \uC2DC\uAC04 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4."],i.message);let n=L("#dlg-guestbook");un(n),n.onclose=async()=>{if(n.returnValue!=="ok")return;let r={name:i.name.value.trim().slice(0,16),relation:(e||"").slice(0,16),message:i.message.value.trim().slice(0,300)};if(!r.name)return;i.message.value="",M.role==="guest"&&r.relation&&(M.me.relation=r.relation,Id());let s=await Ye.add("guestbook",r);M.guestbook.push(s),ue.setMemories(Sa()),$.avatar.play("nod",null,{soft:!0}),Wn("nod"),it.chime(.12),Tt(`\uBC29\uBA85\uB85D\uC5D0 \uC774\uB984\uC744 \uB0A8\uACBC\uC2B5\uB2C8\uB2E4.
\uB9C8\uB2F9 \uD654\uB2E8\uC5D0 \uD558\uC580 \uAD6D\uD654 \uD55C \uC1A1\uC774\uAC00 \uD53C\uC5C8\uC5B4\uC694.`),$o("guestbook"),sr(),M.role==="guest"&&!M.done.has("condolence")&&(await Ii(900),dn(async()=>{await Jt(ue.interactables.get("donation").spot),E0()}))}}function Od(){return!!M.memorial.demo}function Sa(){return[...Od()&&M.guestbook.length<3?(M.memorial.demoSeeds?.guestbook||[]).map(e=>({...e,demo:!0})):[],...M.guestbook]}var Oo="";function b0(){let i=Sa().slice().reverse(),e={};i.forEach(n=>{let r=n.relation||"\uAE30\uD0C0";e[r]=(e[r]||0)+1});let t=()=>{let n=Oo?i.filter(r=>(r.relation||"\uAE30\uD0C0")===Oo):i;L("#book-filter").innerHTML=`<button type="button" class="chip" data-f="" aria-pressed="${!Oo}">\uC804\uCCB4 ${i.length}</button>`+Object.entries(e).sort((r,s)=>s[1]-r[1]).map(([r,s])=>`<button type="button" class="chip" data-f="${Ue(r)}" aria-pressed="${Oo===r}">${Ue(r)} ${s}</button>`).join(""),L("#book-list").innerHTML=n.length?n.map(r=>`
      <article class="book-item">
        ${r.relation?`<span class="rel">${Ue(r.relation)}</span>`:""}
        ${r.message?`<p>${Ue(r.message)}</p>`:""}
        <footer><span><b>${Ue(r.name)}</b>${r.demo?" \xB7 \uC608\uC2DC":""}</span><span>${r.time?Vo(r.time):""}</span></footer>
      </article>`).join(""):'<p class="empty">\uC544\uC9C1 \uB0A8\uACA8\uC9C4 \uAE00\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uB9C8\uC74C\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694.</p>'};L("#book-filter").onclick=n=>{let r=n.target.closest("[data-f]");r&&(Oo=r.dataset.f,t())},t(),un(L("#dlg-book"))}L("#btn-book").onclick=b0;L("#book-write").onclick=()=>{L("#dlg-book").close(),pn("guestbook")};var ds="\uACC4\uC88C \uC774\uCCB4",Zt={phrase:"\u8CFB\u5100",paper:"white",seal:"none",font:"serif"};function ty(i,e){let t=er.papers.find(o=>o.id===Zt.paper),n=er.fonts.find(o=>o.id===Zt.font),r=er.seals.find(o=>o.id===Zt.seal),s=L("#envelope");s.style.setProperty("--paper",t.bg),s.style.setProperty("--efont",n.css),s.classList.toggle("band",!!t.band);let a=r.id==="mum"?'<img class="seal seal-img" src="./flowers/mum.png" alt="">':r.icon?`<em class="seal">${r.icon}</em>`:"";L("#env-front").innerHTML=`${[...Zt.phrase].map(o=>`<span>${Ue(o)}</span>`).join("")}${a}`,L("#env-front").classList.toggle("hangul",/[가-힣]/.test(Zt.phrase)),L("#env-back").innerHTML=`<small>${Ue(i.affil.value.trim())}</small><strong>${Ue(i.name.value.trim()||"\uC774\uB984")}</strong><em>${e?Ho(e):""}</em>${i.note.value.trim()?"<i>\u2709 \uCABD\uC9C0 \uB3D9\uBD09</i>":""}`}function E0(){let i=M.memorial,e=L("#form-condolence"),t=L("#envelope");t.className="envelope",e.name.value=e.name.value||M.me.name||"";let n=[3e4,5e4,7e4,1e5],r=Number(e.amount.value.replace(/\D/g,""))||5e4;L("#amounts").innerHTML=n.map(f=>`<button type="button" class="chip" data-amount="${f}" aria-pressed="${f===r}">${f/1e4}\uB9CC \uC6D0</button>`).join(""),L("#env-phrases").innerHTML=er.phrases.map(f=>`<button type="button" class="chip env-ph" data-ph="${f.id}" aria-pressed="${Zt.phrase===f.id}"><b>${f.id}</b><small>${f.sub}</small></button>`).join(""),L("#env-papers").innerHTML=er.papers.map(f=>`<button type="button" class="swatch" data-paper="${f.id}" style="--c:${f.bg}" aria-pressed="${Zt.paper===f.id}">${f.label}</button>`).join(""),L("#env-seals").innerHTML=er.seals.map(f=>`<button type="button" class="chip" data-seal="${f.id}" aria-pressed="${Zt.seal===f.id}">${f.id==="mum"?'<img class="chip-img" src="./flowers/mum.png" alt="">':f.icon} ${f.label}</button>`).join(""),L("#env-fonts").innerHTML=er.fonts.map(f=>`<button type="button" class="chip" data-font="${f.id}" style="font-family:${f.css}" aria-pressed="${Zt.font===f.id}">${f.label}</button>`).join(""),M.memorial.religion==="christian"&&Zt.phrase==="\u8CFB\u5100"&&!M.envTouched&&(Zt.phrase="\u53EC\u5929");let s=()=>{ty(e,r),d(),ft("[data-ph]").forEach(f=>f.setAttribute("aria-pressed",f.dataset.ph===Zt.phrase)),ft("[data-paper]").forEach(f=>f.setAttribute("aria-pressed",f.dataset.paper===Zt.paper)),ft("[data-seal]").forEach(f=>f.setAttribute("aria-pressed",f.dataset.seal===Zt.seal)),ft("[data-font]").forEach(f=>f.setAttribute("aria-pressed",f.dataset.font===Zt.font))};L("#env-options").onclick=f=>{let v=f.target.closest("[data-ph],[data-paper],[data-seal],[data-font]");v&&(M.envTouched=!0,v.dataset.ph&&(Zt.phrase=v.dataset.ph,t.classList.remove("flip")),v.dataset.paper&&(Zt.paper=v.dataset.paper),v.dataset.seal&&(Zt.seal=v.dataset.seal,t.classList.remove("flip")),v.dataset.font&&(Zt.font=v.dataset.font),it.pop(),s())},L("#amounts").onclick=f=>{let v=f.target.closest("[data-amount]");v&&(r=Number(v.dataset.amount),e.amount.value="",ft("#amounts .chip").forEach(m=>m.setAttribute("aria-pressed",m===v)),t.classList.add("flip"),s())},e.amount.oninput=()=>{let f=Number(e.amount.value.replace(/\D/g,""));f&&(r=f,ft("#amounts .chip").forEach(v=>v.setAttribute("aria-pressed","false"))),t.classList.add("flip"),s()},e.name.oninput=e.affil.oninput=e.note.oninput=()=>{t.classList.add("flip"),s()},L("#env-flip").onclick=()=>t.classList.toggle("flip");let a=zo(i),o=a.findIndex(f=>f.name===M.me.hostOf),c=M.accIdx??(o>=0?o:0);c=Math.min(c,Math.max(0,a.length-1));let l=a[c]||{},h=!!(l.number&&/\d/.test(l.number)),u=()=>{L("#account-box").innerHTML=a.length?`<p class="acc-title">\uB204\uAD6C\uC5D0\uAC8C \uBCF4\uB0B4\uC2E4\uAE4C\uC694? <small>\uC544\uB294 \uC0C1\uC8FC\uB97C \uACE8\uB77C \uADF8\uBD84 \uACC4\uC88C\uB85C \uBCF4\uB0B4\uC138\uC694</small></p>${a.map((f,v)=>`
        <label class="acc${v===c?" on":""}"><input type="radio" name="acc" value="${v}" ${v===c?"checked":""}>
          <span><b>${Ue(f.name||"\uC0C1\uC8FC")}</b><small>${Ue(f.bank||"")} ${Ue(f.number||"")}${f.holder?` \xB7 \uC608\uAE08\uC8FC ${Ue(f.holder)}`:""}</small></span>
          <button type="button" class="btn-ghost" data-acc-copy="${v}">\uBCF5\uC0AC</button></label>`).join("")}`:"<div><small>\uC870\uC758\uAE08 \uACC4\uC88C</small><b>\uC0C1\uC8FC\uAC00 \uC544\uC9C1 \uACC4\uC88C\uB97C \uB4F1\uB85D\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694</b></div>"};u(),L("#account-box").onchange=f=>{f.target.name==="acc"&&(c=M.accIdx=+f.target.value,l=a[c],h=!!(l.number&&/\d/.test(l.number)),u(),d())},L("#account-box").onclick=async f=>{let v=f.target.closest("[data-acc-copy]");if(!v)return;f.preventDefault();let m=a[+v.dataset.accCopy];await ps(`${m.bank} ${m.number} ${m.holder}`),ds="\uACC4\uC88C \uC774\uCCB4",yt(`${m.name||"\uC0C1\uC8FC"} \uACC4\uC88C\uBC88\uD638\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.`)};function d(){let f=[],v=/^[0\s-]+$/.test(String(l.number||""));if(h&&i.toss){let _=l.toss?`https://toss.me/${encodeURIComponent(String(l.toss).replace(/^https?:\/\/toss\.me\//,"").split("/")[0])}/${r||""}`:`supertoss://send?amount=${r||""}&bank=${encodeURIComponent(l.bank||"")}&accountNo=${encodeURIComponent(String(l.number).replace(/\D/g,""))}&origin=qr`;f.push(`<a class="pay toss" data-method="\uD1A0\uC2A4" href="${v?"#":_}">\uD1A0\uC2A4\uB85C \uBCF4\uB0B4\uAE30</a>`)}h&&f.push('<a class="pay bank" data-method="\uC740\uD589 \uC785\uAE08" href="#bank">\uC740\uD589 \uC785\uAE08\uD558\uAE30</a>');let m=l.kakao||i.kakaopayLink;m?f.push(`<a class="pay kakao" data-method="\uCE74\uCE74\uC624\uD398\uC774" href="${Ue(/^https?:/.test(m)?m:`https://qr.kakaopay.com/${m}`)}" target="_blank" rel="noopener">\uCE74\uCE74\uC624\uD398\uC774\uB85C \uBCF4\uB0B4\uAE30</a>`):h&&f.push('<a class="pay kakao" data-method="\uCE74\uCE74\uC624\uD398\uC774" href="#kakao">\uCE74\uCE74\uC624\uD398\uC774\uB85C \uBCF4\uB0B4\uAE30</a>'),L("#pay-row").innerHTML=f.join(""),L("#pay-row").onclick=async _=>{let g=_.target.closest("[data-method]");if(g){if(ds=g.dataset.method,ds==="\uCE74\uCE74\uC624\uD398\uC774"&&g.getAttribute("href")==="#kakao"){_.preventDefault(),await ps(`${l.bank} ${String(l.number).replace(/[^0-9-]/g,"")}`),yt(`\u2705 \uACC4\uC88C\uBC88\uD638\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694!
\uCE74\uCE74\uC624\uD398\uC774 \uC571 \u2192 \uC1A1\uAE08 \u2192 \uACC4\uC88C\uB85C \uBCF4\uB0B4\uAE30\uC5D0\uC11C \uBD99\uC5EC \uB123\uC5B4 \uC8FC\uC138\uC694.`,5200),/Android|iPhone|iPad/i.test(navigator.userAgent)&&setTimeout(()=>{location.href="kakaotalk://kakaopay/home"},900);return}if(ds==="\uC740\uD589 \uC785\uAE08"){_.preventDefault(),await ps(`${l.bank} ${String(l.number).replace(/[^0-9-]/g,"")}`),yt(`\u2705 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694!
${l.bank} ${l.number}
\uC740\uD589 \uC571\uC5D0\uC11C \uBD99\uC5EC \uB123\uC5B4 \uBCF4\uB0B4 \uC8FC\uC138\uC694.`,4500);return}g.getAttribute("href")==="#"?(_.preventDefault(),yt("\uC608\uC2DC \uACC4\uC88C\uB77C \uC2E4\uC81C\uB85C \uC1A1\uAE08\uB418\uC9C0\uB294 \uC54A\uC544\uC694.")):ds==="\uD1A0\uC2A4"&&!/Android|iPhone|iPad/i.test(navigator.userAgent)?yt("\uD1A0\uC2A4 \uBC84\uD2BC\uC740 \uD734\uB300\uD3F0\uC5D0\uC11C \uD1A0\uC2A4 \uC571\uC73C\uB85C \uC5F4\uB824\uC694. PC\uC5D0\uC11C\uB294 \uACC4\uC88C\uB97C \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694.",3600):ds==="\uD1A0\uC2A4"&&g.href.startsWith("supertoss:")&&(ps(`${l.bank} ${l.number}`),setTimeout(()=>{document.hidden||yt("\uD1A0\uC2A4 \uC571\uC774 \uC5F4\uB9AC\uC9C0 \uC54A\uC73C\uBA74 \uACC4\uC88C\uBC88\uD638\uB97C \uBCF5\uC0AC\uD574 \uB450\uC5C8\uC73C\uB2C8 \uD1A0\uC2A4\uB098 \uC740\uD589 \uC571\uC5D0\uC11C \uBD99\uC5EC \uB123\uC5B4 \uC8FC\uC138\uC694.",4800)},1600))}}}s();let p=L("#dlg-condolence");e.onsubmit=f=>{f.submitter?.value==="ok"&&(f.preventDefault(),e.reportValidity()&&(t.classList.add("flip"),requestAnimationFrame(()=>t.classList.add("send")),it.soft(),setTimeout(()=>p.close("ok"),Tv?50:1050)))},un(p),p.onclose=async()=>{if(p.returnValue!=="ok")return;let f=e.name.value.trim();if(!f)return;let v=er.papers.find(g=>g.id===Zt.paper),m=zo(i)[M.accIdx??Math.max(0,zo(i).findIndex(g=>g.name===M.me.hostOf))],_={name:f.slice(0,20),affil:e.affil.value.trim().slice(0,30),amount:r,method:ds,phrase:Zt.phrase,note:e.note.value.trim().slice(0,120),to:m?.name||""};e.note.value="",await dn(async()=>{await Jt(ue.interactables.get("donation").spot);let g=$.avatar;g.hold="envelope",g.setProp("envelope",!0,{color:v.bg}),Wn("give"),await g.play("give",async y=>{if(y!=="release")return;let E=g.props.envelope;delete g.props.envelope,g.hold=null,E&&(await ue.flyTo(E,new T(4.7,He+1.02,-1.7),.6),ir.remove(E)),it.drop()})}),await Ye.add("condolences",_),Ye.bump("condolences"),M.counters.condolences=(M.counters.condolences||0)+1,Tt(`${f} \uB2D8\uC758 ${Zt.phrase} \uBD09\uD22C\uB97C \uBD80\uC758\uD568\uC5D0 \uB123\uC5C8\uC2B5\uB2C8\uB2E4.
\uAE4A\uC740 \uC704\uB85C\uAC00 \uC720\uAC00\uC871\uAED8 \uC804\uD574\uC9C8 \uAC70\uC608\uC694.`),$o("condolence"),sr(),M.role==="guest"&&!M.done.has("guestbook")&&setTimeout(()=>yt("\uBC29\uBA85\uB85D\uC5D0\uB3C4 \uC774\uB984\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694. \uC811\uC218\uB300\uC758 \u270D\uFE0F \uD45C\uC2DC\uB97C \uB204\uB974\uBA74 \uB3FC\uC694.",4e3),1200),M.ticket||(M.ticket=!0,Ye.setLocal("ticket",!0),setTimeout(ny,2200))}}function zo(i){return i.accounts?.length?i.accounts.filter(e=>e&&(e.number||e.name)):i.account?.number?[{name:i.hostName||"\uC0C1\uC8FC",...i.account}]:[]}function ny(){L("#ticket-name").textContent=`\u6545 ${M.memorial.deceased.name} \uB2D8 \uBE48\uC18C`,L("#ticket-guest").textContent=M.me.name||"";let i=L("#dlg-ticket");un(i),i.onclose=()=>{i.returnValue==="go"&&hh()}}function iy(){let i=0,e=1/0;return ue.tables.forEach((t,n)=>{let r=Math.hypot($.pos.x-t.seat.x,$.pos.z-t.seat.z);for(let s of M.others.values())Math.hypot(s.x-t.seat.x,s.z-t.seat.z)<.6&&(r+=50);r<e&&(e=r,i=n)}),i}function hh(){S0(iy())}function S0(i){dn(async()=>{let e=ue.tables[i],t=e.seat;for(let r of M.others.values())Math.hypot(r.x-t.x,r.z-t.z)<.6&&(t=e.seat2);if(!await Jt(t))return;$.wantFace=t.face,$.avatar.hold="sit",Wn("sit"),await Ii(400),L("#meal-ticket").innerHTML=M.ticket?'<span class="ticket-ok">\u{1F3AB} \uC2DD\uAD8C\uC774 \uC788\uC5B4\uC694 \xB7 \uBB34\uC5C7\uC774\uB4E0 \uB4DC\uC138\uC694</span>':'<span class="ticket-no">\u{1F3AB} \uBD80\uC758\uD568\uC5D0 \uB9C8\uC74C\uC744 \uC804\uD558\uC2DC\uBA74 \uC2DD\uAD8C\uC744 \uB4DC\uB824\uC694. \uCEE4\uD53C\uBBF9\uC2A4\uC640 \uC2DD\uD61C\uB294 \uB204\uAD6C\uB098 \uB4DC\uC2E4 \uC218 \uC788\uC5B4\uC694.</span>',L("#meal-choices").innerHTML=cd.map(r=>{let s=r.ticket&&!M.ticket;return`<button type="button" class="card-choice meal${s?" locked":""}" data-meal="${r.id}"><span class="food-ic">${Gm[r.id]||r.icon}</span><strong>${r.label}</strong>${s?"<small>\u{1F512} \uC2DD\uAD8C</small>":""}</button>`}).join("");let n=L("#dlg-meal");L("#meal-choices").onclick=async r=>{let s=r.target.closest("[data-meal]");if(!s)return;let a=cd.find(c=>c.id===s.dataset.meal);if(a.ticket&&!M.ticket){yt("\uC2DD\uAD8C\uC740 \uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08\uC744 \uB123\uC73C\uBA74 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694.",3200),L("#meal-go-donation").hidden=!1;return}n.close(),ry(e,a),Wn("eat"),await $.avatar.play("eat",c=>{c==="bite"&&it.tone(520+Math.random()*120,.08,{gain:.05})}),$.avatar.hold="sit",M.meals++;let o=a.id==="yukgaejang"&&M.servedYuk;a.id==="yukgaejang"&&(M.servedYuk=!0),Tt(o?"\u201C\uB354 \uB4DC\uC138\uC694~\u201D \uB3C4\uC6B0\uBBF8 \uC774\uBAA8\uB2D8\uC774 \uC721\uAC1C\uC7A5\uC744 \uD55C \uAD6D\uC790 \uB354 \uB5A0 \uC8FC\uC168\uC5B4\uC694.":a.line,4800),a.id==="soju"&&yt("\u{1F376} \uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uC544\uC694.",3200),Ye.bump("meals"),M.counters.meals=(M.counters.meals||0)+1,$o("meal"),sr()},L("#meal-go-donation").hidden=!0,L("#meal-go-donation").onclick=()=>{n.close(),pn("donation")},un(n)})}function ry(i,e){for(;i.dishes.children.length>3;)i.dishes.remove(i.dishes.children[0]);let t=zm(e.id);if(t.position.set(-.55+i.dishes.children.length%4*.34,.42,.16),i.dishes.add(t),e.id==="yukgaejang"||e.id==="coffee"){let n=[];for(let a=0;a<6;a++){let o=new qi(new _i({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));o.raycast=()=>{},o.scale.setScalar(.08),t.add(o),n.push({sp:o,o:a/6})}let r=performance.now(),s=()=>{let a=(performance.now()-r)/1e3;n.forEach(o=>{let c=(a*.5+o.o)%1;o.sp.position.set(Math.sin(c*6+o.o*9)*.04,.08+c*.4,0),o.sp.material.opacity=Math.sin(c*Math.PI)*.35,o.sp.scale.setScalar(.06+c*.12)}),a<40&&t.parent&&requestAnimationFrame(s)};s()}}function sy(){let i=L("#form-greet"),e=M.me.religion==="traditional"||M.me.religion==="buddhist"?"bow":"nod";ft("#greet-ways [data-way]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.way===e)),L("#greet-ways").onclick=n=>{let r=n.target.closest("[data-way]");r&&(e=r.dataset.way,ft("#greet-ways [data-way]").forEach(s=>s.setAttribute("aria-pressed",s===r)))},i.words.value="",Fd(L("#greet-words"),lm,i.words);let t=L("#dlg-greet");un(t),t.onclose=async()=>{t.returnValue==="ok"&&await dn(()=>T0(e,i.words.value.trim()))}}async function T0(i,e){e=e||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.",$.wantFace=ue.GREET_SPOT.face,await Ii(300),Wn(i),Tt(i==="bow"?"\uC0C1\uC8FC\uC640 \uB9C8\uC8FC \uBCF4\uACE0 \uD568\uAED8 \uC808\uD569\uB2C8\uB2E4 (\uB9DE\uC808).":"\uC0C1\uC8FC\uAED8 \uC815\uC911\uD788 \uC778\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.",3e3),await Promise.all([$.avatar.play(i),ue.hostNpc.play(i==="shake"?"shake":i)]),oh(e),await Ii(1900);let t=["\uC640 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.","\uBA3C \uAE38 \uC640 \uC8FC\uC154\uC11C \uACE0\uB9D9\uC2B5\uB2C8\uB2E4.","\uACE0\uC778\uAED8\uC11C\uB3C4 \uBC18\uAC00\uC6CC\uD558\uC2E4 \uAC70\uC608\uC694.","\uB9C8\uC74C \uC368 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."];fs(ue.hostNpc.root,wv(t),4200,!1,ue.hostNpc.height),ue.hostNpc.play("nod"),Ye.bump("greetings"),$o("greet"),await Ii(1200),await Jt({x:ue.GREET_SPOT.x-1.3,z:ue.GREET_SPOT.z+.4,face:ue.GREET_SPOT.face})}async function w0(){if(M.busy||$.avatar.busy){yt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}let i=Si[M.me.religion];M.auto=!0,L("#next-cta").hidden=!0,Tt(`\uC870\uBB38\uC744 \uC21C\uC11C\uB300\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4.
\uCC9C\uCC9C\uD788 \uB530\uB77C\uC640 \uC8FC\uC138\uC694.`,3e3);try{for(let t of i.auto){if(!M.auto)return;await Ea(t),await Ii(600)}if(!M.auto)return;let e=M.me.religion==="traditional"||M.me.religion==="buddhist"?"bow":"nod";Tt("\uC774\uC81C \uC0C1\uC8FC\uAED8 \uC778\uC0AC\uB4DC\uB9AC\uB7EC \uAC11\uB2C8\uB2E4.",2400),await dn(async()=>{await Jt(ue.GREET_SPOT)&&await T0(e)}),Tt("\uC870\uBB38\uC744 \uB9C8\uCCE4\uC5B4\uC694. \uBC29\uBA85\uB85D\uACFC \uC870\uC758\uAE08\uC740 \uC544\uB798 \u2018\uB2E4\uC74C \uD560 \uC77C\u2019\uB85C \uC774\uC5B4\uC11C \uD560 \uC218 \uC788\uC5B4\uC694.",5200)}finally{M.auto=!1,Bd()}}var A0="warm";L("#lantern-colors").onclick=i=>{let e=i.target.closest("[data-color]");e&&(A0=e.dataset.color,ft("#lantern-colors [data-color]").forEach(t=>t.setAttribute("aria-pressed",t===e)))};function ay(){let i=L("#form-lantern");i.name.value=i.name.value||M.me.name||"";let e=L("#dlg-lantern");L("#lantern-presets").innerHTML=om.map(t=>`<button type="button">${Ue(t)}</button>`).join(""),L("#lantern-presets").onclick=t=>{let n=t.target.closest("button");n&&(i.text.value=n.textContent,e.close("ok"))},un(e),e.onclose=async()=>{if(e.returnValue!=="ok")return;let t={text:i.text.value.trim().slice(0,120),name:i.name.value.trim().slice(0,16),color:A0};if(!t.text){yt("\uD55C \uB9C8\uB514\uB97C \uACE0\uB974\uAC70\uB098 \uC9C1\uC811 \uC368 \uC8FC\uC138\uC694.");return}i.text.value="";let n=await Ye.add("lanterns",t);M.lanterns.push(n),ue.addLantern(n,$.pos.clone().add(new T(0,1.6,0))),$.avatar.play("wave",null,{soft:!0}),Wn("wave"),it.chime(.16),setTimeout(()=>it.chime(.1),600),Tt(`\uB4F1\uBD88\uC774 \uCC9C\uCC9C\uD788 \uD558\uB298\uB85C \uC62C\uB77C\uAC11\uB2C8\uB2E4.
\uBE48\uC18C \uC704 \uD558\uB298\uC5D0\uC11C \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC904 \uAC70\uC608\uC694.`,5e3),sr()}}function oy(i){ch(`<p class="memory">${Ue(i.text)}</p><p class="memory-by">${i.name?`\u2014 ${Ue(i.name)}`:"\u2014 \uC774\uB984 \uC5C6\uC774 \uB744\uC6B4 \uB4F1\uBD88"}</p>`)}function ly(i){i&&ch(`${i.relation?`<span class="rel">${Ue(i.relation)}</span>`:""}<p class="memory">${Ue(i.message||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.")}</p><p class="memory-by">\u2014 ${Ue(i.name)}${i.time?` \xB7 ${Vo(i.time)}`:""}</p>`)}var Qm=["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4","\uADF9\uB77D\uC655\uC0DD\uC744 \uAE30\uC6D0\uD569\uB2C8\uB2E4","\uC8FC\uB2D8\uC758 \uD488\uC5D0\uC11C \uC601\uC6D0\uD55C \uC548\uC2DD\uC744","\uD558\uB098\uB2D8\uC758 \uC704\uB85C\uAC00 \uD568\uAED8\uD558\uC2DC\uAE38","\uAE4A\uC740 \uC560\uB3C4\uB97C \uD45C\uD569\uB2C8\uB2E4","\uADF8\uB9AC\uC6B4 \uB9C8\uC74C\uC744 \uB2F4\uC544"],cy=[{id:"white",label:"\uD770 \uAD6D\uD654"},{id:"mixed",label:"\uD770\xB7\uB178\uB780 \uAD6D\uD654"},{id:"yellow",label:"\uB178\uB780 \uAD6D\uD654"},{id:"pink",label:"\uC5F0\uBD84\uD64D"}];function hy(){let i=L("#form-wreath"),e="white",t=Qm[M.memorial.religion==="buddhist"?1:M.memorial.religion==="christian"||M.memorial.religion==="catholic"?2:0];i.from.value=i.from.value||"",L("#wr-styles").innerHTML=cy.map(s=>`<button type="button" class="chip" data-st="${s.id}" aria-pressed="${s.id===e}">${s.label}</button>`).join(""),L("#wr-phrases").innerHTML=Qm.map(s=>`<button type="button" class="chip" data-wp="${Ue(s)}" aria-pressed="${s===t}">${Ue(s)}</button>`).join("");let n=()=>{L("#wr-disc").src=Uo(e).toDataURL("image/png"),L("#wr-left").textContent=t,L("#wr-right").textContent=i.from.value.trim()||"\uBCF4\uB0B4\uB294 \uBD84",ft("[data-st]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.st===e)),ft("[data-wp]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.wp===t))};L("#wr-styles").onclick=s=>{let a=s.target.closest("[data-st]");a&&(e=a.dataset.st,n())},L("#wr-phrases").onclick=s=>{let a=s.target.closest("[data-wp]");a&&(t=a.dataset.wp,n())},i.from.oninput=n,n();let r=L("#dlg-wreath");un(r),r.onclose=async()=>{if(r.returnValue!=="ok")return;let s=i.from.value.trim().slice(0,20);if(!s)return;let a=await Ye.add("wreaths",{from:s,phrase:t,style:e});M.wreaths.push(a),ue.setWreaths(Hd()),it.chime(.12),Tt(`\u201C${s}\u201D \uADFC\uC870\uD654\uD658\uC774 \uBE48\uC18C \uC785\uAD6C\uC5D0 \uC138\uC6CC\uC84C\uC5B4\uC694.
\uC785\uAD6C \uCABD\uC744 \uBC14\uB77C\uBD10 \uC8FC\uC138\uC694.`,4600),dn(async()=>{await Jt({x:0,z:6.5,face:Math.PI})}),Wn("nod")}}function Hd(){return[...Od()&&M.wreaths.length<2?M.memorial.demoSeeds?.wreaths||[]:[],...M.wreaths]}function uy(i){i&&ch(`<div class="wreath-view"><img src="${Uo(i.style||"white").toDataURL("image/png")}" alt=""><div class="ribbons"><span>${Ue(i.phrase)}</span><span>${Ue(i.from)}</span></div></div><p class="memory-by">${Ue(i.from)} \uB2D8\uC774 \uBCF4\uB0B8 \uADFC\uC870\uD654\uD658${i.time?` \xB7 ${Vo(i.time)}`:""}</p>`)}var e0=Math.floor(Math.random()*Fc.length);function dy(){ue.helper.play("nod",null,{soft:!0});let i=()=>{L("#tip-text").textContent=Fc[e0%Fc.length],e0++};i(),fs(ue.helper.root,"\uAD81\uAE08\uD55C \uAC70 \uC788\uC73C\uBA74 \uC5B8\uC81C\uB4E0 \uBB3C\uC5B4\uBCF4\uC138\uC694~",3200),L("#tip-next").onclick=i,L("#tip-guide").onclick=()=>{L("#dlg-tip").close(),M.role==="guest"&&(L("#guide").hidden=!1)},un(L("#dlg-tip"))}var R0=new Yc(L("#theater"),{onOpen:()=>{document.body.classList.add("theater-on")},onClose:()=>{document.body.classList.remove("theater-on")}});function gs(i=null){let e=l0();i!=null&&e.length&&(i=i%e.filter(t=>t.type==="image").length),it.ensure(),!M.entered&&it.trackId==="none"&&Gd(),R0.open(M.memorial.gallery||[],{title:`\u6545 ${M.memorial.deceased.name}`,sub:Ld(),greeting:M.memorial.thanks,portrait:xa(),start:i!=null&&e.length?i:null})}function py(){L("#done-thanks").textContent=M.memorial.thanks||"",L("#done-sign").textContent=`\u2014 ${M.memorial.mourners||M.memorial.hostName||"\uC0C1\uC8FC"} \uB4DC\uB9BC`,ue.hostNpc.play("halfBow"),un(L("#dlg-done"))}L("#done-lantern").onclick=()=>{L("#dlg-done").close(),pn("lantern")};function C0(){dn(async()=>{Wn("halfBow"),Tt(M.memorial.thanks||"\uC640 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.",5e3),await $.avatar.play("halfBow")})}var P0=[{id:"nod",icon:"\u{1F642}",label:"\uBAA9\uB840",line:"{me} \uB2D8\uC774 \uBAA9\uB840\uD588\uC5B4\uC694"},{id:"shake",icon:"\u{1F91D}",label:"\uC545\uC218",line:"{me} \uB2D8\uC774 \uC190\uC744 \uC7A1\uC544 \uC8FC\uC168\uC5B4\uC694"},{id:"pat",icon:"\u{1FAF6}",label:"\uD1A0\uB2E5\uD1A0\uB2E5",line:"{me} \uB2D8\uC774 \uD1A0\uB2E5\uD1A0\uB2E5 \uC704\uB85C\uD574 \uC8FC\uC168\uC5B4\uC694"},{id:"hug",icon:"\u{1FAC2}",label:"\uC548\uC544 \uC8FC\uAE30",line:"{me} \uB2D8\uC774 \uAF2D \uC548\uC544 \uC8FC\uC168\uC5B4\uC694"},{id:"bow",icon:"\u{1F647}",label:"\uB9DE\uC808",line:"{me} \uB2D8\uC774 \uB9DE\uC808\uC744 \uCCAD\uD588\uC5B4\uC694"}];function fy(i){let e=M.others.get(i);if(!e)return;L("#other-name").textContent=`${e.name} \uB2D8${e.relation?` \xB7 ${e.relation}`:""}`,L("#other-acts").innerHTML=P0.map(n=>`<button type="button" class="card-choice" data-oa="${n.id}"><span class="ic">${n.icon}</span><strong>${n.label}</strong></button>`).join(""),Fd(L("#other-words"),["\uC624\uB79C\uB9CC\uC774\uC5D0\uC694","\uB9C8\uC74C\uC774 \uB9CE\uC774 \uC544\uD504\uC2DC\uC8E0","\uD798\uB0B4\uC138\uC694","\uC5F0\uB77D \uC790\uC8FC \uD574\uC694"],L("#other-say")),L("#other-say").value="";let t=L("#dlg-other");L("#other-acts").onclick=n=>{let r=n.target.closest("[data-oa]");r&&(t.close(),t0(i,r.dataset.oa,L("#other-say").value))},L("#other-send").onclick=()=>{t.close(),t0(i,null,L("#other-say").value)},un(t)}function t0(i,e,t){let n=M.others.get(i);n&&dn(async()=>{let r=n.av.root.position,s=$.pos.x-r.x,a=$.pos.z-r.z,o=Math.hypot(s,a)||1,c={x:r.x+s/o*.95,z:r.z+a/o*.95,face:Math.atan2(-s,-a)};o>1.2&&!await Jt(c)||($.wantFace=Math.atan2(r.x-$.pos.x,r.z-$.pos.z),await Ii(300),e&&(M.ix={to:i,type:e,s:(M.ix?.s||0)+1},Wn(e),await $.avatar.play(e)),t?.trim()&&oh(t))})}function I0(i,e){let t=P0.find(n=>n.id===e.type);if(t&&(yt(`${t.icon} ${t.line.replace("{me}",i.name)}`,3600),it.soft(),!M.busy&&!$.avatar.busy)){$.wantFace=Math.atan2(i.av.root.position.x-$.pos.x,i.av.root.position.z-$.pos.z);let n={pat:"nod",nod:"nod",shake:"shake",hug:"hug",bow:"bow"}[e.type];setTimeout(()=>{$.avatar.play(n,null,{soft:!0}),Wn(n)},500)}}function my(){let i=M.memorial.funeral?.departureAt;if(!i)return"";let e=new Date(i).getTime();if(Number.isNaN(e))return"";let t=e-Date.now();if(t<=0)return"\uBC1C\uC778\uC744 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4";let n=Math.floor(t/36e5);return n>=24?`\uBC1C\uC778\uAE4C\uC9C0 ${Math.floor(n/24)}\uC77C ${n%24}\uC2DC\uAC04`:n>=1?`\uBC1C\uC778\uAE4C\uC9C0 ${n}\uC2DC\uAC04`:`\uBC1C\uC778\uAE4C\uC9C0 ${Math.ceil(t/6e4)}\uBD84`}function sr(){if(!M.memorial)return;let i=M.counters,e=[];Ye.remote&&M.others&&e.push(`<span class="stat live">\uC9C0\uAE08 \uD568\uAED8<b>${M.others.size+1}\uBA85</b></span>`);let t=my();t&&e.push(`<span class="stat">\u23F3 ${t}</span>`);let n=ah();e.push(n>0?`<button type="button" class="stat incense${n<.2?" low":""}" data-stat="incense">\u{1F525} \uD5A5<b>${Math.ceil(n*Xc)}\uBD84</b></button>`:'<button type="button" class="stat incense out" data-stat="incense">\u{1F525} \uD5A5\uC774 \uAEBC\uC84C\uC5B4\uC694<b>\uC0C8 \uD5A5 \uC62C\uB9AC\uAE30</b></button>'),e.push(`<span class="stat">\uC870\uBB38<b>${(i.visits||0).toLocaleString()}</b></span>`),e.push(`<span class="stat">\u{1F33C}<b>${(i.flowers||0).toLocaleString()}</b></span>`),L("#stats").innerHTML=e.join("")}L("#stats").onclick=i=>{i.target.closest('[data-stat="incense"]')&&M.entered&&Ea("incense")};function uh(){ue.setIncense(M.counters.incense||0,ah()),sr()}setInterval(uh,15e3);var gy={day:"\uB0AE",dusk:"\uB178\uC744",night:"\uBC24"};function L0(){L("#btn-time").textContent=gy[M.time]}L("#btn-time").onclick=()=>{M.time={day:"dusk",dusk:"night",night:"day"}[M.time],ue.setTime(M.time),L0()};L("#btn-help").onclick=()=>un(L("#dlg-help"));L("#chip-obit").onclick=()=>{ch(`<div class="obit"><figure class="obit-photo"><img src="${xa()}" alt=""></figure><div class="obit-text"><p class="obit-kicker">\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4</p><h1>\u6545 ${Ue(M.memorial.deceased.name)}</h1><p class="obit-dates">${Ue(Ld())}</p><dl class="obit-meta"><div><dt>\uC0C1\uC8FC</dt><dd>${Ue(M.memorial.mourners||"-")}</dd></div><div><dt>\uBC1C\uC778</dt><dd>${Ue(M.memorial.funeral?.departure||"-")}</dd></div><div><dt>\uC7A5\uC9C0</dt><dd>${Ue(M.memorial.funeral?.burial||"-")}</dd></div></dl></div></div>${M.memorial.greeting?`<p class="obit-greeting">${Ue(M.memorial.greeting)}</p>`:""}<p><button type="button" class="btn-primary" id="view-theater">\u{1F39E}\uFE0F \uCD94\uC5B5 \uC0C1\uC601\uAD00</button></p>`),L("#view-theater").onclick=()=>{L("#dlg-view").close(),gs()}};L("#btn-host").onclick=()=>Vd();var Jc=null;L("#btn-look").onclick=()=>{let i=M.role==="host";(!Jc||Jc.who!==(i?"host":"guest"))&&(Jc?.dispose(),Jc=new _a(L("#look-body"),{look:i?M.memorial.hostLook:M.me.look,outfit:i?M.memorial.hostOutfit:M.me.outfit,who:i?"host":"guest",onChange:(e,t)=>{i?(M.memorial.hostLook=e,M.memorial.hostOutfit=t,Ln()):(M.me.look=e,M.me.outfit=t,Id()),$.avatar.setOutfit(t),$.avatar.setLook(e)}})),un(L("#dlg-look"))};function Gd(){let i=Ye.getLocal("bgm",null)??M.memorial.bgm??"wind";it.play(i,M.memorial.customBgm)}L("#btn-music").onclick=()=>{let i=it.trackId;L("#music-list").innerHTML=Object.entries(Bc).filter(([e])=>e!=="custom"||M.memorial.customBgm).map(([e,t])=>`
    <button type="button" class="card-choice" data-bgm="${e}" aria-pressed="${i===e}"><span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small></button>`).join(""),L("#vol-music").value=it.musicVol,L("#vol-sfx").value=it.sfxVol,un(L("#dlg-music"))};L("#music-list").onclick=i=>{let e=i.target.closest("[data-bgm]");e&&(it.play(e.dataset.bgm,M.memorial.customBgm),Ye.setLocal("bgm",e.dataset.bgm),ft("#music-list [data-bgm]").forEach(t=>t.setAttribute("aria-pressed",t===e)),L("#btn-music").textContent=`\u{1F3B5} ${Bc[e.dataset.bgm].label}`)};L("#vol-music").oninput=i=>it.setMusicVolume(+i.target.value);L("#vol-sfx").oninput=i=>it.setSfxVolume(+i.target.value);async function D0(i,{w:e,h:t,max:n=1200,q:r=.84}){let s=URL.createObjectURL(i);try{let a=await new Promise((f,v)=>{let m=new Image;m.onload=()=>f(m),m.onerror=v,m.src=s}),o=0,c=0,l=a.naturalWidth,h=a.naturalHeight,u,d;if(e&&t){let f=e/t;if(l/h>f){let v=h*f;o=(l-v)/2,l=v}else{let v=l/f;c=(h-v)/2,h=v}u=e,d=t}else{let f=Math.min(1,n/Math.max(l,h));u=Math.round(l*f),d=Math.round(h*f)}let p=document.createElement("canvas");return p.width=u,p.height=d,p.getContext("2d").drawImage(a,o,c,l,h,0,0,u,d),p.toDataURL("image/jpeg",r)}finally{URL.revokeObjectURL(s)}}function Ln(){M.memorial.demo=!1,Ye.saveDraft(M.memorial)||yt("\uC800\uC7A5 \uACF5\uAC04\uC774 \uBD80\uC871\uD574\uC694. \uC0AC\uC9C4 \uC218\uB97C \uC904\uC5EC \uC8FC\uC138\uC694.",4e3)}var n0=null;function vy(){let i=L("#host-form");for(let e of i.elements){if(!e.name)continue;let t=Ev(M.memorial,e.name);e.type==="checkbox"?e.checked=!!t:e.value=t??""}L("#host-portrait").src=xa(),dh(),zd(),L("#host-themes").innerHTML=Object.entries(ss).map(([e,t])=>`<button type="button" class="card-choice" data-theme="${e}" aria-pressed="${M.memorial.theme===e}"><span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small></button>`).join(""),L("#host-bgms").innerHTML=Object.entries(Bc).map(([e,t])=>`<button type="button" class="chip" data-hbgm="${e}" aria-pressed="${M.memorial.bgm===e}">${t.icon} ${t.label}</button>`).join(""),n0||(n0=new _a(L("#host-look"),{look:M.memorial.hostLook,outfit:M.memorial.hostOutfit,who:"host",onChange:(e,t)=>{M.memorial.hostLook=e,M.memorial.hostOutfit=t,Ln(),rr({theme:!1})}}))}function zd(){M.memorial.accounts?.length||(M.memorial.accounts=zo(M.memorial).map(i=>({...i}))),L("#accounts-edit").innerHTML=M.memorial.accounts.map((i,e)=>`
    <div class="acc-edit">
      <input data-ai="${e}" data-ak="name" value="${Ue(i.name||"")}" placeholder="\uC0C1\uC8FC (\uC608: \uC7A5\uB0A8 \uC774OO)">
      <input data-ai="${e}" data-ak="bank" value="${Ue(i.bank||"")}" placeholder="\uC740\uD589">
      <input data-ai="${e}" data-ak="number" value="${Ue(i.number||"")}" placeholder="\uACC4\uC88C\uBC88\uD638" inputmode="numeric">
      <input data-ai="${e}" data-ak="holder" value="${Ue(i.holder||"")}" placeholder="\uC608\uAE08\uC8FC">
      <input data-ai="${e}" data-ak="toss" value="${Ue(i.toss||"")}" placeholder="\uD1A0\uC2A4 \uC544\uC774\uB514 (\uC120\uD0DD)">
      <input data-ai="${e}" data-ak="kakao" value="${Ue(i.kakao||"")}" placeholder="\uCE74\uCE74\uC624\uD398\uC774 \uC1A1\uAE08 \uB9C1\uD06C (\uC120\uD0DD)">
      <button type="button" class="btn-ghost" data-acc-del="${e}" aria-label="\uACC4\uC88C \uC9C0\uC6B0\uAE30">\xD7</button>
    </div>`).join("")||'<p class="tip">\uC544\uC9C1 \uACC4\uC88C\uAC00 \uC5C6\uC5B4\uC694.</p>'}L("#acc-add").onclick=()=>{M.memorial.accounts=[...M.memorial.accounts||[],{name:"",bank:"",number:"",holder:""}],zd()};L("#accounts-edit").onclick=i=>{let e=i.target.closest("[data-acc-del]");e&&(M.memorial.accounts.splice(+e.dataset.accDel,1),Ln(),zd())};function dh(){let i=Ar(M.memorial.gallery||[]);M.memorial.gallery=i,L("#gallery-edit").innerHTML=i.map((e,t)=>`
    <figure>
      ${e.type==="image"?`<img src="${e.src}" alt="\uCD94\uC5B5 ${t+1}">`:`<div class="vid-thumb">\u25B6 ${e.type==="youtube"?"YouTube":"\uC601\uC0C1"}</div>`}
      <input data-gi="${t}" data-gk="year" value="${Ue(e.year)}" placeholder="\uC5F0\uB3C4" maxlength="10">
      <input data-gi="${t}" data-gk="caption" value="${Ue(e.caption)}" placeholder="\uD55C \uC904 \uC124\uBA85" maxlength="40">
      <div class="g-tools"><button type="button" data-move="${t}" aria-label="\uC55E\uC73C\uB85C">\u25C0</button><button type="button" data-del="${t}" aria-label="\uC9C0\uC6B0\uAE30">\xD7</button></div>
    </figure>`).join("")||'<p class="tip">\uC544\uC9C1 \uC0AC\uC9C4\uC774 \uC5C6\uC5B4\uC694.</p>'}async function Vd(){M.role==="host"&&(vy(),U0(),k0(),un(L("#dlg-host")))}L("#host-tabs").onclick=i=>{let e=i.target.closest("[data-tab]");e&&(ft("#host-tabs [data-tab]").forEach(t=>t.setAttribute("aria-selected",t===e)),ft("#host-form [data-panel]").forEach(t=>{t.hidden=t.dataset.panel!==e.dataset.tab}),e.dataset.tab==="ledger"&&U0())};L("#host-form").addEventListener("input",i=>{let e=i.target;if(e.dataset.ai){M.memorial.accounts[+e.dataset.ai][e.dataset.ak]=e.value,Ln();return}if(e.dataset.gi){M.memorial.gallery[+e.dataset.gi][e.dataset.gk]=e.value,Ln();return}if(e.name){if(Sv(M.memorial,e.name,e.type==="checkbox"?e.checked:e.value),Ln(),rr(),e.name==="religion"){g0();let t=sm[e.value];t&&t!==M.memorial.theme&&(M.memorial.theme=t,Ln(),rr(),ft("#host-themes [data-theme]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.theme===t)),yt(`${Si[e.value].label}\uC5D0 \uB9DE\uCDB0 \u201C${ss[t].label}\u201D \uBE48\uC18C\uB85C \uBC14\uAFE8\uC5B4\uC694. \uD14C\uB9C8\uB294 \uC544\uB798\uC5D0\uC11C \uB2E4\uC2DC \uACE0\uB97C \uC218 \uC788\uC5B4\uC694.`,4200))}e.name==="hostName"&&wd&&(wd.el.innerHTML=`<b>\uC0C1\uC8FC</b>${Ue(e.value||"\uC0C1\uC8FC")}`),e.name==="customBgm"&&it.trackId==="custom"&&it.play("custom",e.value)}});L("#host-themes").onclick=i=>{let e=i.target.closest("[data-theme]");e&&(M.memorial.theme=e.dataset.theme,ft("#host-themes [data-theme]").forEach(t=>t.setAttribute("aria-pressed",t===e)),Ln(),rr(),yt(`${ss[e.dataset.theme].label} \uBE48\uC18C\uB85C \uBC14\uAFE8\uC5B4\uC694.`))};L("#host-bgms").onclick=i=>{let e=i.target.closest("[data-hbgm]");e&&(M.memorial.bgm=e.dataset.hbgm,ft("#host-bgms [data-hbgm]").forEach(t=>t.setAttribute("aria-pressed",t===e)),Ln(),it.play(e.dataset.hbgm,M.memorial.customBgm))};L("#file-portrait").onchange=async i=>{let e=i.target.files[0];e&&(M.memorial.portrait=await D0(e,{w:600,h:800,q:.86}),i.target.value="",Ln(),rr({theme:!1}),L("#host-portrait").src=xa(),yt("\uC601\uC815 \uC0AC\uC9C4\uC744 \uBAA8\uC168\uC5B4\uC694."))};L("#file-gallery").onchange=async i=>{let e=Ar(M.memorial.gallery||[]),t=[...i.target.files].slice(0,24-e.length);for(let n of t)e.push({type:"image",src:await D0(n,{max:1100,q:.8}),caption:"",year:""});M.memorial.gallery=e,i.target.value="",Ln(),rr({theme:!1}),dh(),yt(`\uCD94\uC5B5 \uC0AC\uC9C4 ${t.length}\uC7A5\uC744 \uAC78\uC5C8\uC5B4\uC694.`)};L("#add-video").onclick=()=>{let i=L("#video-url").value.trim();if(!/^https?:\/\//.test(i)){yt("\uC601\uC0C1 \uC8FC\uC18C(https://\u2026)\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uC720\uD29C\uBE0C \uB9C1\uD06C\uB098 mp4 \uC8FC\uC18C\uAC00 \uB3FC\uC694.");return}M.memorial.gallery=[...Ar(M.memorial.gallery||[]),{src:i,caption:"",year:""}],M.memorial.gallery=Ar(M.memorial.gallery),L("#video-url").value="",Ln(),dh(),yt("\uC601\uC0C1\uC744 \uC0C1\uC601 \uBAA9\uB85D\uC5D0 \uB123\uC5C8\uC5B4\uC694.")};L("#gallery-edit").onclick=i=>{let e=i.target.closest("[data-del]"),t=i.target.closest("[data-move]"),n=M.memorial.gallery;if(e)n.splice(+e.dataset.del,1);else if(t){let r=+t.dataset.move;r>0&&([n[r-1],n[r]]=[n[r],n[r-1]])}else return;Ln(),rr({theme:!1}),dh()};L("#host-preview-theater").onclick=()=>{L("#dlg-host").close(),gs()};async function U0(){let i=await Ye.list("condolences"),e=Sa(),t=new Map;for(let s of e){let a=s.name,o=t.get(a)||{name:a,amount:0,msgs:[]};o.relation=s.relation||o.relation,s.message&&o.msgs.push(s.message),o.time=Math.max(o.time||0,s.time||0),t.set(a,o)}for(let s of i){let a=t.get(s.name)||{name:s.name,amount:0,msgs:[]};a.amount+=Number(s.amount||0),a.to=s.to||a.to,a.affil=s.affil||a.affil,s.note&&a.msgs.push(`\u2709 ${s.note}`),a.time=Math.max(a.time||0,s.time||0),t.set(s.name,a)}let n=[...t.values()].sort((s,a)=>(a.time||0)-(s.time||0));L("#ledger-people").innerHTML=n.length?`<table><thead><tr><th>\uC774\uB984</th><th>\uAD00\uACC4 \xB7 \uC18C\uC18D</th><th>\uC870\uC758\uAE08</th><th>\uBC1B\uB294 \uC0C1\uC8FC</th><th>\uB0A8\uAE34 \uB9D0</th></tr></thead><tbody>${n.map(s=>`<tr><td><b>${Ue(s.name)}</b></td><td>${Ue([s.relation,s.affil].filter(Boolean).join(" \xB7 "))}</td><td>${s.amount?Ho(s.amount):"-"}</td><td>${Ue(s.to||"")}</td><td>${Ue(s.msgs.join(" / "))}</td></tr>`).join("")}</tbody></table>`:'<p class="tip">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>',L("#ledger-money").innerHTML=i.length?i.slice().reverse().map(s=>`<div><span>${Ue(s.name)}${s.affil?` <small>${Ue(s.affil)}</small>`:""}${s.note?`<em>\u2709 ${Ue(s.note)}</em>`:""}</span><b>${Ho(s.amount)}</b><span>${Ue(s.to?`\u2192 ${s.to} \xB7 `:"")}${Ue(s.phrase||"")} \xB7 ${Ue(s.method||"")} \xB7 ${Vo(s.time)}</span></div>`).join(""):'<p class="tip">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>',L("#ledger-book").innerHTML=e.length?e.slice().reverse().map(s=>`<div><span>${Ue(s.name)}</span><span>${Ue(s.relation||"")}</span><span>${s.time?Vo(s.time):"\uC608\uC2DC"}</span></div>`).join(""):'<p class="tip">\uC544\uC9C1 \uBC29\uBA85\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>';let r=i.reduce((s,a)=>s+Number(a.amount||0),0);L("#ledger-tip").textContent=Ye.remote?`\uC774 \uAE30\uAE30\uC5D0\uC11C \uAE30\uB85D\uB41C \uC870\uC758\uAE08 \uD569\uACC4 ${Ho(r)}. \uBAA8\uB4E0 \uC870\uBB38\uAC1D\uC758 \uAE30\uB85D\uC740 Firebase \uCF58\uC194\uC758 condolences \uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694(\uACF5\uAC1C \uC77D\uAE30 \uAE08\uC9C0 \uAD8C\uC7A5).`:`\uD569\uACC4 ${Ho(r)}. \uC9C0\uAE08\uC740 \uACF5\uC720 \uC800\uC7A5\uC18C\uAC00 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC544 \uC774 \uAE30\uAE30\uC5D0\uC11C \uB0A8\uAE34 \uAE30\uB85D\uB9CC \uBCF4\uC5EC\uC694. \uC2E4\uC81C \uC785\uAE08 \uB0B4\uC5ED\uC740 \uC740\uD589 \uC571\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.`}var Wd=(i,e)=>"\uFEFF"+[e.join(","),...i.map(t=>e.map(n=>`"${String(n==="time"?new Date(t.time).toLocaleString("ko-KR"):t[n]??"").replace(/"/g,'""')}"`).join(","))].join(`
`);L("#csv-condolence").onclick=async()=>ih("\uC870\uC758\uAE08\uAE30\uB85D.csv",Wd(await Ye.list("condolences"),["name","affil","amount","phrase","method","note","time"]),"text/csv");L("#csv-people").onclick=async()=>{let i=await Ye.list("condolences"),e=Sa().map(t=>({...t,amount:i.filter(n=>n.name===t.name).reduce((n,r)=>n+Number(r.amount||0),0),to:i.find(n=>n.name===t.name)?.to||""}));for(let t of i)e.some(n=>n.name===t.name)||e.push({name:t.name,relation:t.affil,amount:t.amount,to:t.to,message:t.note,time:t.time});ih("\uC870\uBB38\uAC1D_\uBC29\uBA85\uB85D_\uC870\uC758\uAE08.csv",Wd(e,["name","relation","amount","to","message","time"]),"text/csv")};L("#csv-guestbook").onclick=()=>ih("\uBC29\uBA85\uB85D.csv",Wd(M.guestbook,["name","relation","message","time"]),"text/csv");async function N0(i){let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(i));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}var nh=()=>`${location.origin}${location.pathname}`;function k0(){L("#link-guest").value=`${nh()}?m=${nr}`;let i=Ye.getLocal("hostKey","");L("#link-host").value=i?`${nh()}?m=${nr}&key=${i}`:""}L("#new-host-key").onclick=async()=>{let i=[...crypto.getRandomValues(new Uint8Array(10))].map(e=>"abcdefghijkmnpqrstuvwxyz23456789"[e%32]).join("");M.memorial.hostKeyHash=await N0(i),Ye.setLocal("hostKey",i),Ln(),k0(),yt("\uC0C8 \uC0C1\uC8FC \uB9C1\uD06C\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uBE48\uC18C \uD30C\uC77C\uC744 \uB0B4\uB824\uBC1B\uC544 \uC62C\uB9AC\uBA74 \uC801\uC6A9\uB3FC\uC694.",4200)};ft("[data-copy]").forEach(i=>{i.onclick=async()=>{let e=L(`#${i.dataset.copy}`).value;e&&(await ps(e),yt("\uBCF5\uC0AC\uD588\uC5B4\uC694."))}});var Pd=()=>`${nh()}?m=${nr}`;L("#export-json").onclick=()=>{let i={...M.memorial,demo:!1};delete i.demoSeeds,ih(`${nr}.json`,JSON.stringify(i,null,2)),yt(`${nr}.json \uC744 \uB0B4\uB824\uBC1B\uC558\uC5B4\uC694. \uC800\uC7A5\uC18C\uC758 data/ \uD3F4\uB354\uC5D0 \uB123\uC5B4 \uC8FC\uC138\uC694.`,4200)};L("#copy-link").onclick=async()=>{await ps(Pd()),yt("\uBE48\uC18C \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")};L("#share-link").onclick=async()=>{let i=`[\uBD80\uACE0] \u6545 ${M.memorial.deceased.name}\uB2D8\uAED8\uC11C \uBCC4\uC138\uD558\uC168\uAE30\uC5D0 \uC0BC\uAC00 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.
\uB9C1\uD06C\uB97C \uB204\uB974\uBA74 \uC628\uB77C\uC778 \uBE48\uC18C\uC5D0\uC11C \uBC14\uB85C \uC870\uBB38\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`;if(navigator.share)try{await navigator.share({title:document.title,text:i,url:Pd()})}catch{}else await ps(`${i}
${Pd()}`),yt("\uBD80\uACE0 \uBB38\uAD6C\uC640 \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")};L("#reset-draft").onclick=()=>{confirm("\uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB41C \uCD08\uC548\uC744 \uC9C0\uC6B0\uACE0 \uACF5\uAC1C\uB41C \uC0C1\uD0DC\uB85C \uB418\uB3CC\uB9B4\uAE4C\uC694?")&&(Ye.clearDraft(),location.reload())};L("#host-thank").onclick=()=>{L("#dlg-host").close(),C0()};M.others=new Map;var Ed=!1;async function B0(){if(!(!Ye.remote||!M.entered||Ed||document.hidden)){Ed=!0;try{let i=$.avatar,e=M.role==="host";await Ye.presencePut(M.me.id,{n:e?M.memorial.hostName||"\uC0C1\uC8FC":M.me.name,rel:e?"\uC0C1\uC8FC":M.me.relation||"",r:M.role,o:i.outfitId,lk:i.look,x:+$.pos.x.toFixed(2),z:+$.pos.z.toFixed(2),f:+$.face.toFixed(2),a:M.act,s:M.actSeq,sit:i.hold==="sit"?1:0,say:M.say,ss:M.sayS,ix:M.ix});let t=await Ye.presenceGet(),n=performance.now(),r=new Set;for(let[s,a]of Object.entries(t)){if(s===M.me.id||!a)continue;r.add(s);let o=M.others.get(s);if(o||(o={av:new wi({outfit:a.o,look:a.lk||wn}),t:a.t,changed:n,s:a.s,ss:a.ss,ixs:a.ix?.s,x:a.x,z:a.z,f:a.f,name:a.n||"\uC870\uBB38\uAC1D",relation:a.rel||""},o.av.interactTag=`other:${s}`,o.av.rebuild(),o.lkKey=JSON.stringify(a.lk||{}),o.av.root.position.set(a.x,ue.heightAt(a.x,a.z),a.z),ir.add(o.av.root),o.tag=ba(rh(o.name,a.r==="host"?"host":"other",a.r==="host"?"\uC0C1\uC8FC":"\uC870\uBB38",a.r==="host"?"":o.relation),()=>Ma.copy(o.av.root.position).add(new T(0,1.62*o.av.height,0))),M.others.set(s,o),M.entered&&yt(`${o.name} \uB2D8\uC774 \uBE48\uC18C\uC5D0 \uC624\uC168\uC5B4\uC694.`,2400)),a.t!==o.t&&(o.t=a.t,o.changed=n),n-o.changed>15e3){n-o.changed>6e4&&Ye.req("DELETE",`presence/${s}`).catch(()=>{}),i0(s);continue}let c=JSON.stringify(a.lk||{});if(o.av.outfitId!==a.o&&o.av.setOutfit(a.o),c!==o.lkKey&&(o.lkKey=c,o.av.setLook(a.lk||wn)),Object.assign(o,{x:a.x,z:a.z,f:a.f}),o.av.hold=a.sit?"sit":null,a.s!==o.s){o.s=a.s;let l=a.a||"";if(l.startsWith("expr:")){let h=l.slice(5);h==="cry"||h==="smile"?o.av.setExpression(h,5):fs(o.av.root,Oc.find(u=>u.id===h)?.icon||"\u{1F90D}",2400,!0,o.av.height)}else l&&l!=="sit"&&o.av.play({flower:"offer",silentPrayer:"silence",give:"give"}[l]||l)}a.ss!==o.ss&&(o.ss=a.ss,a.say&&fs(o.av.root,a.say,5e3,!1,o.av.height)),a.ix&&a.ix.s!==o.ixs&&(o.ixs=a.ix.s,a.ix.to===M.me.id&&I0(o,a.ix))}for(let s of[...M.others.keys()])r.has(s)||i0(s);sr()}catch(i){console.warn("presence",i)}finally{Ed=!1}}}function i0(i){let e=M.others.get(i);e&&(ir.remove(e.av.root),e.tag.remove(),M.others.delete(i))}function yy(i){let e=!1;for(let t of M.others.values()){let n=t.av.root.position,r=t.x-n.x,s=t.z-n.z,a=Math.hypot(r,s),o=a>.05&&!t.av.busy;if(a>6)n.x=t.x,n.z=t.z;else if(o){let l=Math.min(a,3.6*i);n.x+=r/a*l,n.z+=s/a*l,t.av.root.rotation.y=Qc(t.av.root.rotation.y,Math.atan2(r,s),Math.min(1,i*10))}else t.av.root.rotation.y=Qc(t.av.root.rotation.y,t.f,Math.min(1,i*6));n.y=ue.heightAt(n.x,n.z);let c=ue.inHall(n.x,n.z)&&n.z<.6;c!==t.inHall&&(t.inHall=c,t.av.setBarefoot(c&&!!ue.theme?.shoes),e=!0),t.av.update(i,o)}e&&ue.setShoes(Ud())}Ye.remote&&(setInterval(B0,Qi.presenceIntervalMs),setInterval(_y,2e4),addEventListener("pagehide",()=>Ye.presenceDelete(M.me.id)));async function _y(){if(document.hidden)return;let[i,e,t,n,r]=await Promise.all([Ye.list("guestbook"),Ye.list("lanterns",90),Ye.list("wreaths",40),Ye.counters(),Ye.getState("incenseAt")]);i.length!==M.guestbook.length&&(M.guestbook=i,ue.setMemories(Sa())),t.length!==M.wreaths.length&&(M.wreaths=t,ue.setWreaths(Hd()));let s=new Set(M.lanterns.map(a=>a.id));for(let a of e)s.has(a.id)||(M.lanterns.push(a),ue.addLantern(a,new T(-4.6,2,9.5)));M.counters={...M.counters,...n},typeof r=="number"&&(M.incenseAt=Math.max(M.incenseAt||0,r)),ue.setCounts(M.counters),uh()}async function xy(){M.memorial=await Ye.loadMemorial(`${Qi.dataDir}${nr}.json`,rm),(!Ye.published?.deceased?.name||Ye.published.deceased.name==="\uACE0\uC778")&&nr!==Qi.defaultMemorial&&yt("\uC774 \uBE48\uC18C \uC8FC\uC18C\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB9C1\uD06C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",5e3),M.memorial.gallery=Ar(M.memorial.gallery||[]),rr(),Pv(),L0();let[i,e,t,n,r]=await Promise.all([Ye.list("guestbook"),Ye.list("lanterns",90),Ye.list("wreaths",40),Ye.counters(),Ye.getState("incenseAt")]);if(M.guestbook=i,M.lanterns=e,M.wreaths=t,M.counters=n,M.incenseAt=typeof r=="number"?r:null,Od()){let a=M.memorial.demoSeeds?.counters||{};for(let[o,c]of Object.entries(a))M.counters[o]=(n[o]||0)+c;if(e.length<3)for(let o of M.memorial.demoSeeds?.lanterns||[])ue.addLantern(o);M.incenseAt||(M.incenseAt=Date.now()-9*6e4)}for(let a of e)ue.addLantern(a);ue.setMemories(Sa()),ue.setWreaths(Hd()),ue.setCounts(M.counters),uh();let s=Sd.get("key");s?M.memorial.hostKeyHash&&await N0(s)===M.memorial.hostKeyHash?(Ye.setLocal("hostKey",s),history.replaceState(null,"",`${nh()}?m=${nr}`),Kc("host")):yt("\uC0C1\uC8FC \uB9C1\uD06C\uAC00 \uB9DE\uC9C0 \uC54A\uC544\uC694. \uAC00\uC871\uC5D0\uAC8C \uBC1B\uC740 \uB9C1\uD06C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",5e3):Sd.has("host")&&u0()}var r0=performance.now();function F0(i,e=performance.now()/1e3){kv(i),ue.hostNpc.update(i,!1),ue.helper.update(i,!1),yy(i),ue.update(i,e),Bv(i),Wv()}function O0(i){let e=Math.min(.05,(i-r0)/1e3);r0=i,window.__samga?.paused||F0(e,i/1e3),Di.render(ir,_n),Rv(),requestAnimationFrame(O0)}await xy();requestAnimationFrame(O0);window.__samga={state:M,world:ue,player:$,cam:ve,camera:_n,store:Ye,sound:it,interact:pn,doAction:Ea,paused:!1,__step:i=>F0(i),__walk:i=>Jt(i),openTheater:gs,receiveIx:I0};
