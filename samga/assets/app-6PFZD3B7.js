var wp=0,Jh=1,Rp=2;var Kh=1,lc=2,xi=3,na=0,Sn=1,Et=2,$i=0,_o=1,xo=2,Qh=3,eu=4,Ap=5,ia=100,Cp=101,Pp=102,Ip=103,Lp=104,Dp=200,Up=201,Np=202,kp=203,Bp=204,Fp=205,Op=206,Hp=207,Gp=208,zp=209,Vp=210,Wp=211,Xp=212,jp=213,qp=214,cc=0,hc=1,uc=2,Mo=3,dc=4,pc=5,fc=6,mc=7,$p=0,Yp=1,Zp=2,Yi=0,Jp=1,Kp=2,Qp=3,ef=4,tf=5,nf=6,ra=7;var tu=300,sa=301,$r=302,gc=303,vc=304,bo=306,Gr=1e3,yr=1001,Sl=1002,mi=1003,rf=1004;var Eo=1005;var $n=1006,yc=1007;var Yr=1008;var Mi=1009,nu=1010,iu=1011,aa=1012,_c=1013,Zr=1014,ri=1015,Jr=1016,xc=1017,Mc=1018,oa=1020,ru=35902,su=35899,sf=1021,af=1022,si=1023,So=1026,To=1027,bc=1028,Ec=1029,au=1030,ou=1031;var lu=1033,Sc=33776,Tc=33777,wc=33778,Rc=33779,cu=35840,hu=35841,uu=35842,du=35843,pu=36196,fu=37492,mu=37496,gu=37808,vu=37809,yu=37810,_u=37811,xu=37812,Mu=37813,bu=37814,Eu=37815,Su=37816,Tu=37817,wu=37818,Ru=37819,Au=37820,Cu=37821,Pu=36492,Iu=36494,Lu=36495,Du=36283,Uu=36284,Nu=36285,ku=36286;var Wa=2300,Tl=2301,bl=2302,Oh=2400,Hh=2401,Gh=2402;var of=3201;var lf=0,cf=1,Kr="",At="srgb",zr="srgb-linear",Xa="linear",Ct="srgb";var Hr=7680;var hf=512,uf=513,df=514,Bu=515,pf=516,ff=517,mf=518,gf=519,wl=35044;var Fu="300 es",Vi=2e3,ja=2001;function Ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vf(){let i=zs("canvas");return i.style.display="block",i}var Xd={},Vs=null;function qa(...i){let e="THREE."+i.shift();Vs?Vs("log",e,...i):console.log(e,...i)}function Je(...i){let e="THREE."+i.shift();Vs?Vs("warn",e,...i):console.warn(e,...i)}function ht(...i){let e="THREE."+i.shift();Vs?Vs("error",e,...i):console.error(e,...i)}function Ws(...i){let e=i.join(" ");e in Xd||(Xd[e]=!0,Je(...i))}function yf(i,e,t){return new Promise(function(n,r){setTimeout(function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var Wi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=1234567,Hs=Math.PI/180,Xs=180/Math.PI;function fi(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(fn[255&i]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]+"-"+fn[255&e]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[63&t|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[255&n]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]).toLowerCase()}function pt(i,e,t){return Math.max(e,Math.min(t,i))}function zh(i,e){return(i%e+e)%e}function Ga(i,e,t){return(1-t)*i+t*e}function ni(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var Sr={DEG2RAD:Hs,RAD2DEG:Xs,generateUUID:fi,clamp:pt,euclideanModulo:zh,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Ga,damp:function(i,e,t,n){return Ga(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(zh(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(jd=i);let e=jd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Hs},radToDeg:function(i){return i*Xs},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*f,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*f,o*l);break;case"ZYZ":i.set(c*f,c*p,o*h,o*l);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Rt,denormalize:ni},de=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o<=0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o>=1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||c!==d||l!==p||h!==f){let m=c*d+l*p+h*f+u*v;m<0&&(d=-d,p=-p,f=-f,v=-v,m=-m);let _=1-o;if(m<.9995){let g=Math.acos(m),y=Math.sin(g);_=Math.sin(_*g)/y,c=c*_+d*(o=Math.sin(o*g)/y),l=l*_+p*o,h=h*_+f*o,u=u*_+v*o}else{c=c*_+d*o,l=l*_+p*o,h=h*_+f*o,u=u*_+v*o;let g=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=g,l*=g,h*=g,u*=g}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),d=c(n/2),p=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hh.copy(this).projectOnVector(e),this.sub(hh)}reflect(e){return this.sub(hh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hh=new S,qd=new Cn,lt=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=r[0],m=r[3],_=r[6],g=r[1],y=r[4],b=r[7],R=r[2],M=r[5],U=r[8];return s[0]=a*v+o*g+c*R,s[3]=a*m+o*y+c*M,s[6]=a*_+o*b+c*U,s[1]=l*v+h*g+u*R,s[4]=l*m+h*y+u*M,s[7]=l*_+h*b+u*U,s[2]=d*v+p*g+f*R,s[5]=d*m+p*y+f*M,s[8]=d*_+p*b+f*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(r*l-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(uh.makeScale(e,t)),this}rotate(e){return this.premultiply(uh.makeRotation(-e)),this}translate(e,t){return this.premultiply(uh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},uh=new lt,$d=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I0(){let i={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ct&&(r.r=zi(r.r),r.g=zi(r.g),r.b=zi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=Gs(r.r),r.g=Gs(r.g),r.b=Gs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Xa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Ws("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Ws("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zr]:{primaries:e,whitePoint:n,transfer:Xa,toXYZ:$d,fromXYZ:Yd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:At},outputColorSpaceConfig:{drawingBufferColorSpace:At}},[At]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:$d,fromXYZ:Yd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:At}}}),i}var _t=I0();function zi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Gs(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Es,Rl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Es===void 0&&(Es=zs("canvas")),Es.width=e.width,Es.height=e.height;let r=Es.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Es}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=zs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*zi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*zi(t[n]/255)):t[n]=zi(t[n]);return{data:t,width:e.width,height:e.height}}return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},L0=0,js=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=fi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(dh(r[a].image)):s.push(dh(r[a]))}else s=dh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function dh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Rl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var D0=0,ph=new S,gn=class i extends Wi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=fi(),this.name="",this.source=new js(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n:Je(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gr:e.x=e.x-Math.floor(e.x);break;case yr:e.x=e.x<0?0:1;break;case Sl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Gr:e.y=e.y-Math.floor(e.y);break;case yr:e.y=e.y<0?0:1;break;case Sl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};gn.DEFAULT_IMAGE=null,gn.DEFAULT_MAPPING=tu,gn.DEFAULT_ANISOTROPY=1;var bt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],v=c[2],m=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,b=(p+1)/2,R=(_+1)/2,M=(h+d)/4,U=(u+v)/4,z=(f+m)/4;return y>b&&y>R?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=M/n,s=U/n):b>R?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=M/r,s=z/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=U/s,r=z/s),this.set(n,r,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Al=class extends Wi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new gn(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:$n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new js(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gi=class extends Al{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},$a=class extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends gn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mi,this.minFilter=mi,this.wrapR=yr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Yn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qn):Qn.fromBufferAttribute(s,a),Qn.applyMatrix4(e.matrixWorld),this.expandByPoint(Qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),jo.copy(n.boundingBox)),jo.applyMatrix4(e.matrixWorld),this.union(jo)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qn),Qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pa),qo.subVectors(this.max,Pa),Ss.subVectors(e.a,Pa),Ts.subVectors(e.b,Pa),ws.subVectors(e.c,Pa),hr.subVectors(Ts,Ss),ur.subVectors(ws,Ts),kr.subVectors(Ss,ws);let t=[0,-hr.z,hr.y,0,-ur.z,ur.y,0,-kr.z,kr.y,hr.z,0,-hr.x,ur.z,0,-ur.x,kr.z,0,-kr.x,-hr.y,hr.x,0,-ur.y,ur.x,0,-kr.y,kr.x,0];return!!fh(t,Ss,Ts,ws,qo)&&(t=[1,0,0,0,1,0,0,0,1],!!fh(t,Ss,Ts,ws,qo)&&($o.crossVectors(hr,ur),t=[$o.x,$o.y,$o.z],fh(t,Ss,Ts,ws,qo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Qn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bi=[new S,new S,new S,new S,new S,new S,new S,new S],Qn=new S,jo=new Yn,Ss=new S,Ts=new S,ws=new S,hr=new S,ur=new S,kr=new S,Pa=new S,qo=new S,$o=new S,Br=new S;function fh(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Br.fromArray(i,s);let o=r.x*Math.abs(Br.x)+r.y*Math.abs(Br.y)+r.z*Math.abs(Br.z),c=e.dot(Br),l=t.dot(Br),h=n.dot(Br);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var U0=new Yn,Ia=new S,mh=new S,Zn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):U0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ia.subVectors(e,this.center);let t=Ia.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Ia,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ia.copy(e.center).add(mh)),this.expandByPoint(Ia.copy(e.center).sub(mh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Fi=new S,gh=new S,Yo=new S,dr=new S,vh=new S,Zo=new S,yh=new S,_r=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){gh.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),dr.copy(this.origin).sub(gh);let s=.5*e.distanceTo(t),a=-this.direction.dot(Yo),o=dr.dot(this.direction),c=-dr.dot(Yo),l=dr.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(gh).addScaledVector(Yo,d),p}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);let n=Fi.dot(this.direction),r=Fi.dot(Fi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,n,r,s){vh.subVectors(t,e),Zo.subVectors(n,e),yh.crossVectors(vh,Zo);let a,o=this.direction.dot(yh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}dr.subVectors(this.origin,e);let c=a*this.direction.dot(Zo.crossVectors(dr,Zo));if(c<0)return null;let l=a*this.direction.dot(vh.cross(dr));if(l<0||c+l>o)return null;let h=-a*dr.dot(yh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class i{constructor(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m)}set(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=f,_[11]=v,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Rs.setFromMatrixColumn(e,0).length(),s=1/Rs.setFromMatrixColumn(e,1).length(),a=1/Rs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,v=l*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(N0,e,k0)}lookAt(e,t,n){let r=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),pr.crossVectors(n,Bn),pr.lengthSq()===0&&(Math.abs(n.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),pr.crossVectors(n,Bn)),pr.normalize(),Jo.crossVectors(Bn,pr),r[0]=pr.x,r[4]=Jo.x,r[8]=Bn.x,r[1]=pr.y,r[5]=Jo.y,r[9]=Bn.y,r[2]=pr.z,r[6]=Jo.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],_=n[14],g=n[3],y=n[7],b=n[11],R=n[15],M=r[0],U=r[4],z=r[8],I=r[12],X=r[1],V=r[5],k=r[9],J=r[13],L=r[2],j=r[6],ee=r[10],ce=r[14],ae=r[3],be=r[7],ue=r[11],Ee=r[15];return s[0]=a*M+o*X+c*L+l*ae,s[4]=a*U+o*V+c*j+l*be,s[8]=a*z+o*k+c*ee+l*ue,s[12]=a*I+o*J+c*ce+l*Ee,s[1]=h*M+u*X+d*L+p*ae,s[5]=h*U+u*V+d*j+p*be,s[9]=h*z+u*k+d*ee+p*ue,s[13]=h*I+u*J+d*ce+p*Ee,s[2]=f*M+v*X+m*L+_*ae,s[6]=f*U+v*V+m*j+_*be,s[10]=f*z+v*k+m*ee+_*ue,s[14]=f*I+v*J+m*ce+_*Ee,s[3]=g*M+y*X+b*L+R*ae,s[7]=g*U+y*V+b*j+R*be,s[11]=g*z+y*k+b*ee+R*ue,s[15]=g*I+y*J+b*ce+R*Ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-r*l*u-s*o*d+n*l*d+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-r*o*h-t*c*u+t*o*d+r*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],_=e[15],g=u*m*l-v*d*l+v*c*p-o*m*p-u*c*_+o*d*_,y=f*d*l-h*m*l-f*c*p+a*m*p+h*c*_-a*d*_,b=h*v*l-f*u*l+f*o*p-a*v*p-h*o*_+a*u*_,R=f*u*c-h*v*c-f*o*d+a*v*d+h*o*m-a*u*m,M=t*g+n*y+r*b+s*R;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/M;return e[0]=g*U,e[1]=(v*d*s-u*m*s-v*r*p+n*m*p+u*r*_-n*d*_)*U,e[2]=(o*m*s-v*c*s+v*r*l-n*m*l-o*r*_+n*c*_)*U,e[3]=(u*c*s-o*d*s-u*r*l+n*d*l+o*r*p-n*c*p)*U,e[4]=y*U,e[5]=(h*m*s-f*d*s+f*r*p-t*m*p-h*r*_+t*d*_)*U,e[6]=(f*c*s-a*m*s-f*r*l+t*m*l+a*r*_-t*c*_)*U,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*p+t*c*p)*U,e[8]=b*U,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*_-t*u*_)*U,e[10]=(a*v*s-f*o*s+f*n*l-t*v*l-a*n*_+t*o*_)*U,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*U,e[12]=R*U,e[13]=(h*v*r-f*u*r+f*n*d-t*v*d-h*n*m+t*u*m)*U,e[14]=(f*o*r-a*v*r-f*n*c+t*v*c+a*n*m-t*o*m)*U,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*d+t*o*d)*U,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,v=a*h,m=a*u,_=o*u,g=c*l,y=c*h,b=c*u,R=n.x,M=n.y,U=n.z;return r[0]=(1-(v+_))*R,r[1]=(p+b)*R,r[2]=(f-y)*R,r[3]=0,r[4]=(p-b)*M,r[5]=(1-(d+_))*M,r[6]=(m+g)*M,r[7]=0,r[8]=(f+y)*U,r[9]=(m-g)*U,r[10]=(1-(d+v))*U,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Rs.set(r[0],r[1],r[2]).length(),a=Rs.set(r[4],r[5],r[6]).length(),o=Rs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ei.copy(this);let c=1/s,l=1/a,h=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=l,ei.elements[5]*=l,ei.elements[6]*=l,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),f,v;if(c)f=s/(a-s),v=a*s/(a-s);else if(o===Vi)f=-(a+s)/(a-s),v=-2*a*s/(a-s);else{if(o!==ja)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),v=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),f,v;if(c)f=1/(a-s),v=a/(a-s);else if(o===Vi)f=-2/(a-s),v=-(a+s)/(a-s);else{if(o!==ja)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),v=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Rs=new S,ei=new tt,N0=new S(0,0,0),k0=new S(1,1,1),pr=new S,Jo=new S,Bn=new S,Zd=new tt,Jd=new Cn,ii=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Zd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var qs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},B0=0,Kd=new S,As=new Cn,Oi=new tt,Ko=new S,La=new S,F0=new S,O0=new Cn,Qd=new S(1,0,0),ep=new S(0,1,0),tp=new S(0,0,1),np={type:"added"},H0={type:"removed"},Cs={type:"childadded",child:null},_h={type:"childremoved",child:null},Kt=class i extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new ii,n=new Cn,r=new S(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new tt},normalMatrix:{value:new lt}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ep,e)}rotateZ(e){return this.rotateOnAxis(tp,e)}translateOnAxis(e,t){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ep,e)}translateZ(e){return this.translateOnAxis(tp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(La,Ko,this.up):Oi.lookAt(Ko,La,this.up),this.quaternion.setFromRotationMatrix(Oi),r&&(Oi.extractRotation(r.matrixWorld),As.setFromRotationMatrix(Oi),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(np),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H0),_h.child=e,this.dispatchEvent(_h),_h.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(np),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,F0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,O0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Kt.DEFAULT_UP=new S(0,1,0),Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ti=new S,Hi=new S,xh=new S,Gi=new S,Ps=new S,Is=new S,ip=new S,Mh=new S,bh=new S,Eh=new S,Sh=new bt,Th=new bt,wh=new bt,di=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ti.subVectors(e,t),r.cross(ti);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ti.subVectors(r,t),Hi.subVectors(n,t),xh.subVectors(e,t);let a=ti.dot(ti),o=ti.dot(Hi),c=ti.dot(xh),l=Hi.dot(Hi),h=Hi.dot(xh),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Gi)!==null&&Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Gi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gi.x),c.addScaledVector(a,Gi.y),c.addScaledVector(o,Gi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Sh.setScalar(0),Th.setScalar(0),wh.setScalar(0),Sh.fromBufferAttribute(e,t),Th.fromBufferAttribute(e,n),wh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Sh,s.x),a.addScaledVector(Th,s.y),a.addScaledVector(wh,s.z),a}static isFrontFacing(e,t,n,r){return ti.subVectors(n,t),Hi.subVectors(e,t),ti.cross(Hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),.5*ti.cross(Hi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ps.subVectors(r,n),Is.subVectors(s,n),Mh.subVectors(e,n);let c=Ps.dot(Mh),l=Is.dot(Mh);if(c<=0&&l<=0)return t.copy(n);bh.subVectors(e,r);let h=Ps.dot(bh),u=Is.dot(bh);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ps,a);Eh.subVectors(e,s);let p=Ps.dot(Eh),f=Is.dot(Eh);if(f>=0&&p<=f)return t.copy(s);let v=p*l-c*f;if(v<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Is,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return ip.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(ip,o);let _=1/(m+v+d);return a=v*_,o=d*_,t.copy(n).addScaledVector(Ps,a).addScaledVector(Is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_f={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function Rh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=At){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=zh(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Rh(a,s,e+1/3),this.g=Rh(a,s,e),this.b=Rh(a,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=At){function n(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=At){let n=_f[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zi(e.r),this.g=zi(e.g),this.b=zi(e.b),this}copyLinearToSRGB(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=At){return _t.workingToColorSpace(mn.copy(this),e),65536*Math.round(pt(255*mn.r,0,255))+256*Math.round(pt(255*mn.g,0,255))+Math.round(pt(255*mn.b,0,255))}getHexString(e=At){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(mn.copy(this),t);let n=mn.r,r=mn.g,s=mn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(mn.copy(this),t),e.r=mn.r,e.g=mn.g,e.b=mn.b,e}getStyle(e=At){_t.workingToColorSpace(mn.copy(this),e);let t=mn.r,n=mn.g,r=mn.b;return e!==At?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+t,fr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fr),e.getHSL(Qo);let n=Ga(fr.h,Qo.h,t),r=Ga(fr.s,Qo.s,t),s=Ga(fr.l,Qo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},mn=new et;et.NAMES=_f;var G0=0,vi=class extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:Je(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},ln=class extends vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ay=z0();function z0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Jt=new S,el=new de,V0=0,Mn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:V0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wl,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)el.fromBufferAttribute(this,t),el.applyMatrix3(e),this.setXY(t,el.x,el.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ni(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ni(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ni(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ni(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wl&&(e.usage=this.usage),e}};var Ya=class extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Za=class extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ze=class extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},W0=0,jn=new tt,Ah=new Kt,Ls=new S,Fn=new Yn,Da=new Yn,on=new S,Pt=class i extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ou(e)?Za:Ya)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Ah.lookAt(e),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ze(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Da.setFromBufferAttribute(o),this.morphTargetsRelative?(on.addVectors(Fn.min,Da.min),Fn.expandByPoint(on),on.addVectors(Fn.max,Da.max),Fn.expandByPoint(on)):(Fn.expandByPoint(Da.min),Fn.expandByPoint(Da.max))}Fn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)on.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(on));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)on.fromBufferAttribute(o,l),c&&(Ls.fromBufferAttribute(e,l),on.add(Ls)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let z=0;z<n.count;z++)o[z]=new S,c[z]=new S;let l=new S,h=new S,u=new S,d=new de,p=new de,f=new de,v=new S,m=new S;function _(z,I,X){l.fromBufferAttribute(n,z),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,X),d.fromBufferAttribute(s,z),p.fromBufferAttribute(s,I),f.fromBufferAttribute(s,X),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let V=1/(p.x*f.y-f.x*p.y);isFinite(V)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(V),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(V),o[z].add(v),o[I].add(v),o[X].add(v),c[z].add(m),c[I].add(m),c[X].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let z=0,I=g.length;z<I;++z){let X=g[z],V=X.start;for(let k=V,J=V+X.count;k<J;k+=3)_(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new S,b=new S,R=new S,M=new S;function U(z){R.fromBufferAttribute(r,z),M.copy(R);let I=o[z];y.copy(I),y.sub(R.multiplyScalar(R.dot(I))).normalize(),b.crossVectors(M,I);let X=b.dot(c[z])<0?-1:1;a.setXYZW(z,y.x,y.y,y.z,X)}for(let z=0,I=g.length;z<I;++z){let X=g[z],V=X.start;for(let k=V,J=V+X.count;k<J;k+=3)U(e.getX(k+0)),U(e.getX(k+1)),U(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new S,s=new S,a=new S,o=new S,c=new S,l=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let v=0,m=c.length;v<m;v++){p=o.isInterleavedBufferAttribute?c[v]*o.data.stride+o.offset:c[v]*h;for(let _=0;_<h;_++)d[f++]=l[p++]}return new Mn(d,h,u)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},rp=new tt,Fr=new _r,tl=new Zn,sp=new S,nl=new S,il=new S,rl=new S,Ch=new S,sl=new S,ap=new S,al=new S,H=class extends Kt{constructor(e=new Pt,t=new ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){sl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(Ch.fromBufferAttribute(u,e),a?sl.addScaledVector(Ch,h):sl.addScaledVector(Ch.sub(t),h))}t.add(sl)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),tl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(tl,sp)===null||Fr.origin.distanceToSquared(sp)>(e.far-e.near)**2))return;rp.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(rp),n.boundingBox!==null&&Fr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Fr)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],_=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)r=ol(this,_,e,n,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)r=ol(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],_=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)r=ol(this,_,e,n,l,h,u,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);f<v;f+=3)r=ol(this,a,e,n,l,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function ol(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,nl),i.getVertexPosition(c,il),i.getVertexPosition(l,rl);let h=(function(u,d,p,f,v,m,_,g){let y;if(y=d.side===1?f.intersectTriangle(_,m,v,!0,g):f.intersectTriangle(v,m,_,d.side===0,g),y===null)return null;al.copy(g),al.applyMatrix4(u.matrixWorld);let b=p.ray.origin.distanceTo(al);return b<p.near||b>p.far?null:{distance:b,point:al.clone(),object:u}})(i,e,t,n,nl,il,rl,ap);if(h){let u=new S;di.getBarycoord(ap,nl,il,rl,u),r&&(h.uv=di.getInterpolatedAttribute(r,o,c,l,u,new de)),s&&(h.uv1=di.getInterpolatedAttribute(s,o,c,l,u,new de)),a&&(h.normal=di.getInterpolatedAttribute(a,o,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new S,materialIndex:0};di.getNormal(nl,il,rl,d.normal),h.face=d,h.barycoord=u}return h}var xe=class i extends Pt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(v,m,_,g,y,b,R,M,U,z,I){let X=b/U,V=R/z,k=b/2,J=R/2,L=M/2,j=U+1,ee=z+1,ce=0,ae=0,be=new S;for(let ue=0;ue<ee;ue++){let Ee=ue*V-J;for(let pe=0;pe<j;pe++){let re=pe*X-k;be[v]=re*g,be[m]=Ee*y,be[_]=L,l.push(be.x,be.y,be.z),be[v]=0,be[m]=0,be[_]=M>0?1:-1,h.push(be.x,be.y,be.z),u.push(pe/U),u.push(1-ue/z),ce+=1}}for(let ue=0;ue<z;ue++)for(let Ee=0;Ee<U;Ee++){let pe=d+Ee+j*ue,re=d+Ee+j*(ue+1),ge=d+(Ee+1)+j*(ue+1),ve=d+(Ee+1)+j*ue;c.push(pe,re,ve),c.push(re,ge,ve),ae+=6}o.addGroup(p,ae,I),p+=ae,d+=ce}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(h,3)),this.setAttribute("uv",new ze(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function vn(i){let e={};for(let t=0;t<i.length;t++){let n=Qr(i[t]);for(let r in n)e[r]=n[r]}return e}function Hu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var xf={clone:Qr,merge:vn},Pn=class extends vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},$s=class extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mr=new S,op=new de,lp=new de,tn=class extends $s{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Xs*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Hs*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Xs*Math.atan(Math.tan(.5*Hs*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,op,lp),t.subVectors(lp,op)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Hs*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ds=-90,Pl=class extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new tn(Ds,1,e,t);r.layers=this.layers,this.add(r);let s=new tn(Ds,1,e,t);s.layers=this.layers,this.add(s);let a=new tn(Ds,1,e,t);a.layers=this.layers,this.add(a);let o=new tn(Ds,1,e,t);o.layers=this.layers,this.add(o);let c=new tn(Ds,1,e,t);c.layers=this.layers,this.add(c);let l=new tn(Ds,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==ja)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},Ja=class extends gn{constructor(e=[],t=301,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Il=class extends gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ja(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new xe(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new H(r,s),o=t.minFilter;return t.minFilter===Yr&&(t.minFilter=$n),new Pl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Te=class extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},X0={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),_=this._getHandJoint(l,v);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Ka=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vr=class extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ll=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wl,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new S,Qa=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ni(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ni(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ni(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ni(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ni(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){qa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){qa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yi=class extends vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Us,Ua=new S,Ns=new S,ks=new S,Bs=new de,Na=new de,Mf=new tt,ll=new S,ka=new S,cl=new S,cp=new de,Ph=new de,hp=new de,Xi=class extends Kt{constructor(e=new yi){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ll(t,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Qa(n,3,0,!1)),Us.setAttribute("uv",new Qa(n,2,3,!1))}this.geometry=Us,this.material=e,this.center=new de(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ns.setFromMatrixScale(this.matrixWorld),Mf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ks.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ns.multiplyScalar(-ks.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;hl(ll.set(-.5,-.5,0),ks,a,Ns,r,s),hl(ka.set(.5,-.5,0),ks,a,Ns,r,s),hl(cl.set(.5,.5,0),ks,a,Ns,r,s),cp.set(0,0),Ph.set(1,0),hp.set(1,1);let o=e.ray.intersectTriangle(ll,ka,cl,!1,Ua);if(o===null&&(hl(ka.set(-.5,.5,0),ks,a,Ns,r,s),Ph.set(0,1),o=e.ray.intersectTriangle(ll,cl,ka,!1,Ua),o===null))return;let c=e.ray.origin.distanceTo(Ua);c<e.near||c>e.far||t.push({distance:c,point:Ua.clone(),uv:di.getInterpolation(Ua,ll,ka,cl,cp,Ph,hp,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function hl(i,e,t,n,r,s){Bs.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Na.x=s*Bs.x-r*Bs.y,Na.y=r*Bs.x+s*Bs.y):Na.copy(Bs),i.copy(e),i.x+=Na.x,i.y+=Na.y,i.applyMatrix4(Mf)}var oy=new S,ly=new S;var cy=new S,hy=new bt,uy=new bt,dy=new S,py=new tt,fy=new S,my=new Zn,gy=new tt,vy=new _r;var eo=class extends gn{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yy=new tt,_y=new tt;var to=class extends Mn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fs=new tt,up=new tt,ul=[],dp=new Yn,j0=new tt,Ba=new H,Fa=new Zn,ji=class extends H{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new to(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,j0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),dp.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(dp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fs),Fa.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Fa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ba.geometry=this.geometry,Ba.material=this.material,Ba.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fa.copy(this.boundingSphere),Fa.applyMatrix4(n),e.ray.intersectsSphere(Fa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Fs),up.multiplyMatrices(n,Fs),Ba.matrixWorld=up,Ba.raycast(e,ul);for(let a=0,o=ul.length;a<o;a++){let c=ul[a];c.instanceId=s,c.object=this,t.push(c)}ul.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new to(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(r*this.count),r,this.count,bc,ri));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ih=new S,q0=new S,$0=new lt,qn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Ih.subVectors(n,t).cross(q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ih),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$0.getNormalMatrix(e),r=this.coplanarPoint(Ih).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Or=new Zn,Y0=new de(.5,.5),dl=new S,xr=class{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],v=s[9],m=s[10],_=s[11],g=s[12],y=s[13],b=s[14],R=s[15];if(r[0].setComponents(l-a,p-h,_-f,R-g).normalize(),r[1].setComponents(l+a,p+h,_+f,R+g).normalize(),r[2].setComponents(l+o,p+u,_+v,R+y).normalize(),r[3].setComponents(l-o,p-u,_-v,R-y).normalize(),n)r[4].setComponents(c,d,m,b).normalize(),r[5].setComponents(l-c,p-d,_-m,R-b).normalize();else if(r[4].setComponents(l-c,p-d,_-m,R-b).normalize(),t===Vi)r[5].setComponents(l+c,p+d,_+m,R+b).normalize();else{if(t!==ja)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,m,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);let t=Y0.distanceTo(e.center);return Or.radius=.7071067811865476+t,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(dl.x=r.normal.x>0?e.max.x:e.min.x,dl.y=r.normal.y>0?e.max.y:e.min.y,dl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(dl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},hi=new tt,ui=new xr,Dl=class i{constructor(){this.coordinateSystem=Vi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(hi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),ui.setFromProjectionMatrix(hi,r.coordinateSystem,r.reversedDepth),ui.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(hi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),ui.setFromProjectionMatrix(hi,r.coordinateSystem,r.reversedDepth),ui.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(hi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),ui.setFromProjectionMatrix(hi,r.coordinateSystem,r.reversedDepth),ui.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(hi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),ui.setFromProjectionMatrix(hi,r.coordinateSystem,r.reversedDepth),ui.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(hi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),ui.setFromProjectionMatrix(hi,r.coordinateSystem,r.reversedDepth),ui.containsPoint(e))return!0}return!1}clone(){return new i}};var Vh=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},xy=new tt,My=new et(1,1,1),by=new xr,Ey=new Dl,Sy=new Yn,Ty=new Zn,wy=new S,Ry=new S,Ay=new S,Cy=new Vh,Py=new H;var Iy=new S,Ly=new S,Dy=new tt,Uy=new _r,Ny=new Zn,ky=new S,By=new S;var Fy=new S,Oy=new S;var Zs=class extends vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},pp=new tt,Wh=new _r,pl=new Zn,fl=new S,no=class extends Kt{constructor(e=new Pt,t=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;pp.copy(r).invert(),Wh.copy(e.ray).applyMatrix4(pp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);fl.fromBufferAttribute(h,p),fp(fl,p,c,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)fl.fromBufferAttribute(h,u),fp(fl,u,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function fp(i,e,t,n,r,s,a){let o=Wh.distanceSqToPoint(i);if(o<t){let c=new S;Wh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var bn=class extends gn{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},io=class extends gn{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==So&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new js(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ro=class extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jn=class i extends Pt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,v=r+1,m=new S,_=new S;for(let g=0;g<=f;g++){let y=0,b=0,R=0,M=0;if(g<=n){let I=g/n,X=I*Math.PI/2;b=-h-e*Math.cos(X),R=e*Math.sin(X),M=-e*Math.cos(X),y=I*u}else if(g<=n+s){let I=(g-n)/s;b=I*t-h,R=e,M=0,y=u+I*d}else{let I=(g-n-s)/n,X=I*Math.PI/2;b=h+e*Math.sin(X),R=e*Math.cos(X),M=e*Math.sin(X),y=u+d+I*u}let U=Math.max(0,Math.min(1,y/p)),z=0;g===0?z=.5/r:g===f&&(z=-.5/r);for(let I=0;I<=r;I++){let X=I/r,V=X*Math.PI*2,k=Math.sin(V),J=Math.cos(V);_.x=-R*J,_.y=b,_.z=R*k,o.push(_.x,_.y,_.z),m.set(-R*J,M,R*k),m.normalize(),c.push(m.x,m.y,m.z),l.push(X+z,U)}if(g>0){let I=(g-1)*v;for(let X=0;X<r;X++){let V=I+X,k=I+X+1,J=g*v+X,L=g*v+X+1;a.push(V,k,J),a.push(k,L,J)}}}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},$t=class i extends Pt{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new S,h=new de;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ze(a,3)),this.setAttribute("normal",new ze(o,3)),this.setAttribute("uv",new ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Me=class i extends Pt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,_=0;function g(y){let b=f,R=new de,M=new S,U=0,z=y===!0?e:t,I=y===!0?1:-1;for(let V=1;V<=r;V++)u.push(0,m*I,0),d.push(0,I,0),p.push(.5,.5),f++;let X=f;for(let V=0;V<=r;V++){let k=V/r*c+o,J=Math.cos(k),L=Math.sin(k);M.x=z*L,M.y=m*I,M.z=z*J,u.push(M.x,M.y,M.z),d.push(0,I,0),R.x=.5*J+.5,R.y=.5*L*I+.5,p.push(R.x,R.y),f++}for(let V=0;V<r;V++){let k=b+V,J=X+V;y===!0?h.push(J,J+1,k):h.push(J+1,J,k),U+=3}l.addGroup(_,U,y===!0?1:2),_+=U}(function(){let y=new S,b=new S,R=0,M=(t-e)/n;for(let U=0;U<=s;U++){let z=[],I=U/s,X=I*(t-e)+e;for(let V=0;V<=r;V++){let k=V/r,J=k*c+o,L=Math.sin(J),j=Math.cos(J);b.x=X*L,b.y=-I*n+m,b.z=X*j,u.push(b.x,b.y,b.z),y.set(L,M,j).normalize(),d.push(y.x,y.y,y.z),p.push(k,1-I),z.push(f++)}v.push(z)}for(let U=0;U<r;U++)for(let z=0;z<s;z++){let I=v[z][U],X=v[z+1][U],V=v[z+1][U+1],k=v[z][U+1];(e>0||z!==0)&&(h.push(I,X,k),R+=3),(t>0||z!==s-1)&&(h.push(X,V,k),R+=3)}l.addGroup(_,R,0),_+=R})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},cn=class i extends Me{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mr=class i extends Pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(p,f,v,m){let _=m+1,g=[];for(let y=0;y<=_;y++){g[y]=[];let b=p.clone().lerp(v,y/_),R=f.clone().lerp(v,y/_),M=_-y;for(let U=0;U<=M;U++)g[y][U]=U===0&&y===_?b:b.clone().lerp(R,U/M)}for(let y=0;y<_;y++)for(let b=0;b<2*(_-y)-1;b++){let R=Math.floor(b/2);b%2==0?(c(g[y][R+1]),c(g[y+1][R]),c(g[y][R])):(c(g[y][R+1]),c(g[y+1][R+1]),c(g[y+1][R]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let v=3*p;f.x=e[v+0],f.y=e[v+1],f.z=e[v+2]}function h(p,f,v,m){m<0&&p.x===1&&(a[f]=p.x-1),v.x===0&&v.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new S,v=new S,m=new S;for(let _=0;_<t.length;_+=3)l(t[_+0],f),l(t[_+1],v),l(t[_+2],m),o(f,v,m,p)})(r),(function(p){let f=new S;for(let v=0;v<s.length;v+=3)f.x=s[v+0],f.y=s[v+1],f.z=s[v+2],f.normalize().multiplyScalar(p),s[v+0]=f.x,s[v+1]=f.y,s[v+2]=f.z})(n),(function(){let p=new S;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let v=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(v,1-m)}(function(){let f=new S,v=new S,m=new S,_=new S,g=new de,y=new de,b=new de;for(let R=0,M=0;R<s.length;R+=9,M+=6){f.set(s[R+0],s[R+1],s[R+2]),v.set(s[R+3],s[R+4],s[R+5]),m.set(s[R+6],s[R+7],s[R+8]),g.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),_.copy(f).add(v).add(m).divideScalar(3);let U=u(_);h(g,M+0,f,U),h(y,M+2,v,U),h(b,M+4,m,U)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],_=a[f+4],g=Math.max(v,m,_),y=Math.min(v,m,_);g>.9&&y<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),_<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new ze(s,3)),this.setAttribute("normal",new ze(s.slice(),3)),this.setAttribute("uv",new ze(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Ul=class i extends Mr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},ml=new S,gl=new S,Lh=new S,vl=new di,Nl=class extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Hs*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:v,b:m,c:_}=vl;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),vl.getNormal(Lh),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,b=u[g],R=u[y],M=vl[h[g]],U=vl[h[y]],z=`${b}_${R}`,I=`${R}_${b}`;I in d&&d[I]?(Lh.dot(d[I].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(U.x,U.y,U.z)),d[I]=null):z in d||(d[z]={index0:l[g],index1:l[y],normal:Lh.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];ml.fromBufferAttribute(o,v),gl.fromBufferAttribute(o,m),p.push(ml.x,ml.y,ml.z),p.push(gl.x,gl.y,gl.z)}this.setAttribute("position",new ze(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new de:new S);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new S,r=[],s=[],a=[],o=new S,c=new tt;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new S)}s[0]=new S,a[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(pt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(pt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Js=class extends Hn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},kl=class extends Js{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gu(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var yl=new S,Dh=new Gu,Uh=new Gu,Nh=new Gu,Bl=class extends Hn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new S){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(yl.subVectors(r[0],r[1]).add(r[0]),o=yl);let u=r[l%s],d=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(yl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=yl),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Dh.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,v,m),Uh.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,v,m),Nh.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,v,m)}else this.curveType==="catmullrom"&&(Dh.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),Uh.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),Nh.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(Dh.calc(h),Uh.calc(h),Nh.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mp(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function za(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Va(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var so=class extends Hn{constructor(e=new de,t=new de,n=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new de){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Va(e,r.x,s.x,a.x,o.x),Va(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Fl=class extends Hn{constructor(e=new S,t=new S,n=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Va(e,r.x,s.x,a.x,o.x),Va(e,r.y,s.y,a.y,o.y),Va(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ao=class extends Hn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ol=class extends Hn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oo=class extends Hn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(za(e,r.x,s.x,a.x),za(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lo=class extends Hn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(za(e,r.x,s.x,a.x),za(e,r.y,s.y,a.y),za(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},co=class extends Hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(mp(o,c.x,l.x,h.x,u.x),mp(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new de().fromArray(r))}return this}},Hl=Object.freeze({__proto__:null,ArcCurve:kl,CatmullRomCurve3:Bl,CubicBezierCurve:so,CubicBezierCurve3:Fl,EllipseCurve:Js,LineCurve:ao,LineCurve3:Ol,QuadraticBezierCurve:oo,QuadraticBezierCurve3:lo,SplineCurve:co}),Gl=class extends Hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Hl[r.type]().fromJSON(r))}return this}},ho=class extends Gl{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ao(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new oo(this.currentPoint.clone(),new de(e,t),new de(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new so(this.currentPoint.clone(),new de(e,t),new de(n,r),new de(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new co(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new Js(e,t,n,r,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},_i=class extends ho{constructor(e){super(e),this.uuid=fi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new ho().fromJSON(r))}return this}};function Z0(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=gp(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,u,d,p){let f=[];for(let v=0,m=u.length;v<m;v++){let _=gp(h,u[v]*p,v<m-1?u[v+1]*p:h.length,p,!1);_===_.next&&(_.steiner=!0),f.push(rg(_))}f.sort(tg);for(let v=0;v<f.length;v++)d=ng(f[v],d);return d})(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<r;d+=t){let p=i[d],f=i[d+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>u&&(u=f)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return uo(s,a,t,o,c,l,0),a}function gp(i,e,t,n,r){let s;if(r===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=vp(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=vp(a/n|0,i[a],i[a+1],s);return s&&Ks(s,s.next)&&(fo(s),s=s.next),s}function Wr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Ks(n,n.next)&&Xt(n.prev,n,n.next)!==0)n=n.next;else{if(fo(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function uo(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=Xh(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,v=1;do{let m,_=p;p=null;let g=null;for(f=0;_;){f++;let y=_,b=0;for(let M=0;M<v&&(b++,y=y.nextZ,y);M++);let R=v;for(;b>0||R>0&&y;)b!==0&&(R===0||!y||_.z<=y.z)?(m=_,_=_.nextZ,b--):(m=y,y=y.nextZ,R--),g?g.nextZ=m:p=m,m.prevZ=g,g=m;_=y}g.nextZ=null,v*=2}while(f>1)})(d)})(i,n,r,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?K0(i,n,r,s):J0(i))e.push(c.i,i.i,l.i),fo(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?uo(i=Q0(Wr(i),e),e,t,n,r,s,2):a===2&&eg(i,e,t,n,r,s):uo(Wr(i),e,t,n,r,s,1);break}}}function J0(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),u=Math.min(o,c,l),d=Math.max(r,s,a),p=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Ha(r,o,s,c,a,l,f.x,f.y)&&Xt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function K0(i,e,t,n){let r=i.prev,s=i,a=i.next;if(Xt(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,c,l),f=Math.min(h,u,d),v=Math.max(o,c,l),m=Math.max(h,u,d),_=Xh(p,f,e,t,n),g=Xh(v,m,e,t,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=_&&b&&b.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Ha(o,h,c,u,l,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=v&&b.y>=f&&b.y<=m&&b!==r&&b!==a&&Ha(o,h,c,u,l,d,b.x,b.y)&&Xt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Ha(o,h,c,u,l,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=g;){if(b.x>=p&&b.x<=v&&b.y>=f&&b.y<=m&&b!==r&&b!==a&&Ha(o,h,c,u,l,d,b.x,b.y)&&Xt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Q0(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Ks(n,r)&&Ef(n,t,t.next,r)&&po(n,r)&&po(r,n)&&(e.push(n.i,t.i,r.i),fo(t),fo(t.next),t=i=r),t=t.next}while(t!==i);return Wr(t)}function eg(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sg(a,o)){let c=Sf(a,o);return a=Wr(a,a.next),c=Wr(c,c.next),uo(a,e,t,n,r,s,0),void uo(c,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function tg(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function ng(i,e){let t=(function(r,s){let a=s,o=r.x,c=r.y,l,h=-1/0;if(Ks(r,a))return a;do{if(Ks(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let v=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=o&&v>h&&(h=v,l=a.x<a.next.x?a:a.next,v===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&bf(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let v=Math.abs(c-a.y)/(o-a.x);po(a,r)&&(v<f||v===f&&(a.x>l.x||a.x===l.x&&ig(l,a)))&&(l=a,f=v)}a=a.next}while(a!==u);return l})(i,e);if(!t)return e;let n=Sf(t,i);return Wr(n,n.next),Wr(t,t.next)}function ig(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function Xh(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function rg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function bf(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ha(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&bf(i,e,t,n,r,s,a,o)}function sg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Ef(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(po(i,e)&&po(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||Ks(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Ks(i,e){return i.x===e.x&&i.y===e.y}function Ef(i,e,t,n){let r=xl(Xt(i,e,t)),s=xl(Xt(i,e,n)),a=xl(Xt(t,n,i)),o=xl(Xt(t,n,e));return r!==s&&a!==o||!(r!==0||!_l(i,t,e))||!(s!==0||!_l(i,n,e))||!(a!==0||!_l(t,i,n))||!(o!==0||!_l(t,e,n))}function _l(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function xl(i){return i>0?1:i<0?-1:0}function po(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function Sf(i,e){let t=jh(i.i,i.x,i.y),n=jh(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function vp(i,e,t,n){let r=jh(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function fo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function jh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var qh=class{static triangulate(e,t,n=2){return Z0(e,t,n)}},pi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];yp(e),_p(n,e);let a=e.length;t.forEach(yp);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,_p(n,t[c]);let o=qh.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function yp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function _p(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Qs=class i extends Pt{constructor(e=new _i([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:ag,y,b,R,M,U,z=!1;_&&(y=_.getSpacedPoints(h),z=!0,d=!1,b=_.computeFrenetFrames(h,!1),R=new S,M=new S,U=new S),d||(m=0,p=0,f=0,v=0);let I=o.extractPoints(l),X=I.shape,V=I.holes;if(!pi.isClockWise(X)){X=X.reverse();for(let N=0,x=V.length;N<x;N++){let C=V[N];pi.isClockWise(C)&&(V[N]=C.reverse())}}function k(N){let x=10000000000000001e-36,C=N[0];for(let W=1;W<=N.length;W++){let B=W%N.length,te=N[B],q=te.x-C.x,K=te.y-C.y,ne=q*q+K*K,le=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(C.x),Math.abs(C.y));ne<=x*le*le?(N.splice(B,1),W--):C=te}}k(X),V.forEach(k);let J=V.length,L=X;for(let N=0;N<J;N++){let x=V[N];X=X.concat(x)}function j(N,x,C){return x||ht("ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector(x,C)}let ee=X.length;function ce(N,x,C){let W,B,te,q=N.x-x.x,K=N.y-x.y,ne=C.x-N.x,le=C.y-N.y,he=q*q+K*K,Ae=q*le-K*ne;if(Math.abs(Ae)>Number.EPSILON){let Be=Math.sqrt(he),Xe=Math.sqrt(ne*ne+le*le),st=x.x-K/Be,rt=x.y+q/Be,gt=((C.x-le/Xe-st)*le-(C.y+ne/Xe-rt)*ne)/(q*le-K*ne);W=st+q*gt-N.x,B=rt+K*gt-N.y;let Ue=W*W+B*B;if(Ue<=2)return new de(W,B);te=Math.sqrt(Ue/2)}else{let Be=!1;q>Number.EPSILON?ne>Number.EPSILON&&(Be=!0):q<-Number.EPSILON?ne<-Number.EPSILON&&(Be=!0):Math.sign(K)===Math.sign(le)&&(Be=!0),Be?(W=-K,B=q,te=Math.sqrt(he)):(W=q,B=K,te=Math.sqrt(he/2))}return new de(W/te,B/te)}let ae=[];for(let N=0,x=L.length,C=x-1,W=N+1;N<x;N++,C++,W++)C===x&&(C=0),W===x&&(W=0),ae[N]=ce(L[N],L[C],L[W]);let be=[],ue,Ee,pe=ae.concat();for(let N=0,x=J;N<x;N++){let C=V[N];ue=[];for(let W=0,B=C.length,te=B-1,q=W+1;W<B;W++,te++,q++)te===B&&(te=0),q===B&&(q=0),ue[W]=ce(C[W],C[te],C[q]);be.push(ue),pe=pe.concat(ue)}if(m===0)Ee=pi.triangulateShape(L,V);else{let N=[],x=[];for(let C=0;C<m;C++){let W=C/m,B=p*Math.cos(W*Math.PI/2),te=f*Math.sin(W*Math.PI/2)+v;for(let q=0,K=L.length;q<K;q++){let ne=j(L[q],ae[q],te);ke(ne.x,ne.y,-B),W===0&&N.push(ne)}for(let q=0,K=J;q<K;q++){let ne=V[q];ue=be[q];let le=[];for(let he=0,Ae=ne.length;he<Ae;he++){let Be=j(ne[he],ue[he],te);ke(Be.x,Be.y,-B),W===0&&le.push(Be)}W===0&&x.push(le)}}Ee=pi.triangulateShape(N,x)}let re=Ee.length,ge=f+v;for(let N=0;N<ee;N++){let x=d?j(X[N],pe[N],ge):X[N];z?(M.copy(b.normals[0]).multiplyScalar(x.x),R.copy(b.binormals[0]).multiplyScalar(x.y),U.copy(y[0]).add(M).add(R),ke(U.x,U.y,U.z)):ke(x.x,x.y,0)}for(let N=1;N<=h;N++)for(let x=0;x<ee;x++){let C=d?j(X[x],pe[x],ge):X[x];z?(M.copy(b.normals[N]).multiplyScalar(C.x),R.copy(b.binormals[N]).multiplyScalar(C.y),U.copy(y[N]).add(M).add(R),ke(U.x,U.y,U.z)):ke(C.x,C.y,u/h*N)}for(let N=m-1;N>=0;N--){let x=N/m,C=p*Math.cos(x*Math.PI/2),W=f*Math.sin(x*Math.PI/2)+v;for(let B=0,te=L.length;B<te;B++){let q=j(L[B],ae[B],W);ke(q.x,q.y,u+C)}for(let B=0,te=V.length;B<te;B++){let q=V[B];ue=be[B];for(let K=0,ne=q.length;K<ne;K++){let le=j(q[K],ue[K],W);z?ke(le.x,le.y+y[h-1].y,y[h-1].x+C):ke(le.x,le.y,u+C)}}}function ve(N,x){let C=N.length;for(;--C>=0;){let W=C,B=C-1;B<0&&(B=N.length-1);for(let te=0,q=h+2*m;te<q;te++){let K=ee*te,ne=ee*(te+1);w(x+W+K,x+B+K,x+B+ne,x+W+ne)}}}function ke(N,x,C){c.push(N),c.push(x),c.push(C)}function je(N,x,C){T(N),T(x),T(C);let W=r.length/3,B=g.generateTopUV(n,r,W-3,W-2,W-1);G(B[0]),G(B[1]),G(B[2])}function w(N,x,C,W){T(N),T(x),T(W),T(x),T(C),T(W);let B=r.length/3,te=g.generateSideWallUV(n,r,B-6,B-3,B-2,B-1);G(te[0]),G(te[1]),G(te[3]),G(te[1]),G(te[2]),G(te[3])}function T(N){r.push(c[3*N+0]),r.push(c[3*N+1]),r.push(c[3*N+2])}function G(N){s.push(N.x),s.push(N.y)}(function(){let N=r.length/3;if(d){let x=0,C=ee*x;for(let W=0;W<re;W++){let B=Ee[W];je(B[2]+C,B[1]+C,B[0]+C)}x=h+2*m,C=ee*x;for(let W=0;W<re;W++){let B=Ee[W];je(B[0]+C,B[1]+C,B[2]+C)}}else{for(let x=0;x<re;x++){let C=Ee[x];je(C[2],C[1],C[0])}for(let x=0;x<re;x++){let C=Ee[x];je(C[0]+ee*h,C[1]+ee*h,C[2]+ee*h)}}n.addGroup(N,r.length/3-N,0)})(),(function(){let N=r.length/3,x=0;ve(L,x),x+=L.length;for(let C=0,W=V.length;C<W;C++){let B=V[C];ve(B,x),x+=B.length}n.addGroup(N,r.length/3-N,1)})()}this.setAttribute("position",new ze(r,3)),this.setAttribute("uv",new ze(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Hl[r.type]().fromJSON(r)),new i(n,e.options)}},ag={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new de(s,a),new de(o,c),new de(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],v=e[3*s],m=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new de(a,1-c),new de(l,1-u),new de(d,1-f),new de(v,1-_)]:[new de(o,1-c),new de(h,1-u),new de(p,1-f),new de(m,1-_)]}},br=class i extends Mr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},zl=class i extends Pt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=pt(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new S,d=new de,p=new S,f=new S,v=new S,m=0,_=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-m,p.z=0*_,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-m,p.z=0*_,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(f)}for(let g=0;g<=t;g++){let y=n+g*h*r,b=Math.sin(y),R=Math.cos(y);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*b,u.y=e[M].y,u.z=e[M].x*R,a.push(u.x,u.y,u.z),d.x=g/t,d.y=M/(e.length-1),o.push(d.x,d.y);let U=c[3*M+0]*b,z=c[3*M+1],I=c[3*M+0]*R;l.push(U,z,I)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let b=y+g*e.length,R=b,M=b+e.length,U=b+e.length+1,z=b+1;s.push(R,M,z),s.push(U,z,M)}this.setIndex(s),this.setAttribute("position",new ze(a,3)),this.setAttribute("uv",new ze(o,2)),this.setAttribute("normal",new ze(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Vl=class i extends Mr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},vt=class i extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],v=[],m=[];for(let _=0;_<h;_++){let g=_*d-a;for(let y=0;y<l;y++){let b=y*u-s;f.push(b,-g,0),v.push(0,0,1),m.push(y/o),m.push(1-_/c)}}for(let _=0;_<c;_++)for(let g=0;g<o;g++){let y=g+l*_,b=g+l*(_+1),R=g+1+l*(_+1),M=g+1+l*_;p.push(y,b,M),p.push(b,R,M)}this.setIndex(p),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Wl=class i extends Pt{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new S,f=new de;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let _=s+m/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<r;v++){let m=v*(n+1);for(let _=0;_<n;_++){let g=_+m,y=g,b=g+n+1,R=g+n+2,M=g+1;o.push(y,b,M),o.push(b,R,M)}}this.setIndex(o),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Er=class i extends Pt{constructor(e=new _i([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;pi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,_=f.length;m<_;m++){let g=f[m];pi.isClockWise(g)===!0&&(f[m]=g.reverse())}let v=pi.triangulateShape(p,f);for(let m=0,_=f.length;m<_;m++){let g=f[m];p=p.concat(g)}for(let m=0,_=p.length;m<_;m++){let g=p[m];r.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,_=v.length;m<_;m++){let g=v[m],y=g[0]+u,b=g[1]+u,R=g[2]+u;n.push(y,b,R),c+=3}}this.setIndex(n),this.setAttribute("position",new ze(r,3)),this.setAttribute("normal",new ze(s,3)),this.setAttribute("uv",new ze(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},ft=class i extends Pt{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new S,d=new S,p=[],f=[],v=[],m=[];for(let _=0;_<=n;_++){let g=[],y=_/n,b=0;_===0&&a===0?b=.5/t:_===n&&c===Math.PI&&(b=-.5/t);for(let R=0;R<=t;R++){let M=R/t;u.x=-e*Math.cos(r+M*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+M*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(M+b,1-y),g.push(l++)}h.push(g)}for(let _=0;_<n;_++)for(let g=0;g<t;g++){let y=h[_][g+1],b=h[_][g],R=h[_+1][g],M=h[_+1][g+1];(_!==0||a>0)&&p.push(y,b,M),(_!==n-1||c<Math.PI)&&p.push(b,R,M)}this.setIndex(p),this.setAttribute("position",new ze(f,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Xl=class i extends Mr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},En=class i extends Pt{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let v=f/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let v=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,_=(r+1)*(p-1)+f,g=(r+1)*p+f;a.push(v,m,g),a.push(m,_,g)}this.setIndex(a),this.setAttribute("position",new ze(o,3)),this.setAttribute("normal",new ze(c,3)),this.setAttribute("uv",new ze(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},jl=class i extends Pt{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],u=new S,d=new S,p=new S,f=new S,v=new S,m=new S,_=new S;for(let y=0;y<=n;++y){let b=y/n*s*Math.PI*2;g(b,s,a,e,p),g(b+.01,s,a,e,f),m.subVectors(f,p),_.addVectors(f,p),v.crossVectors(m,_),_.crossVectors(v,m),v.normalize(),_.normalize();for(let R=0;R<=r;++R){let M=R/r*Math.PI*2,U=-t*Math.cos(M),z=t*Math.sin(M);u.x=p.x+(U*_.x+z*v.x),u.y=p.y+(U*_.y+z*v.y),u.z=p.z+(U*_.z+z*v.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(R/r)}}for(let y=1;y<=n;y++)for(let b=1;b<=r;b++){let R=(r+1)*(y-1)+(b-1),M=(r+1)*y+(b-1),U=(r+1)*y+b,z=(r+1)*(y-1)+b;o.push(R,M,z),o.push(M,U,z)}function g(y,b,R,M,U){let z=Math.cos(y),I=Math.sin(y),X=R/b*y,V=Math.cos(X);U.x=M*(2+V)*.5*z,U.y=M*(2+V)*I*.5,U.z=M*Math.sin(X)*.5}this.setIndex(o),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(l,3)),this.setAttribute("uv",new ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ql=class i extends Pt{constructor(e=new lo(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,c=new S,l=new de,h=new S,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let _=a.normals[m],g=a.binormals[m];for(let y=0;y<=r;y++){let b=y/r*Math.PI*2,R=Math.sin(b),M=-Math.cos(b);c.x=M*_.x+R*g.x,c.y=M*_.y+R*g.y,c.z=M*_.z+R*g.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let _=0;_<=r;_++)l.x=m/t,l.y=_/r,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let _=1;_<=r;_++){let g=(r+1)*(m-1)+(_-1),y=(r+1)*m+(_-1),b=(r+1)*m+_,R=(r+1)*(m-1)+_;f.push(g,y,R),f.push(y,b,R)}})()})(),this.setIndex(f),this.setAttribute("position",new ze(u,3)),this.setAttribute("normal",new ze(d,3)),this.setAttribute("uv",new ze(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},$l=class extends Pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new S,s=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),_=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,_),xp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),xp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function xp(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Hy=Object.freeze({__proto__:null,BoxGeometry:xe,CapsuleGeometry:Jn,CircleGeometry:$t,ConeGeometry:cn,CylinderGeometry:Me,DodecahedronGeometry:Ul,EdgesGeometry:Nl,ExtrudeGeometry:Qs,IcosahedronGeometry:br,LatheGeometry:zl,OctahedronGeometry:Vl,PlaneGeometry:vt,PolyhedronGeometry:Mr,RingGeometry:Wl,ShapeGeometry:Er,SphereGeometry:ft,TetrahedronGeometry:Xl,TorusGeometry:En,TorusKnotGeometry:jl,TubeGeometry:ql,WireframeGeometry:$l});var Ne=class extends vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Yl=class extends vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Zl=class extends vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ml(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}function og(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Xr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Jl=class extends Xr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oh,endingEnd:Oh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Hh:s=e,o=2*t-n;break;case Gh:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Hh:a=e,c=2*n-t;break;case Gh:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),v=f*f,m=v*f,_=-d*m+2*d*v-d*f,g=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*v+.5*f,b=p*m-p*v;for(let R=0;R!==o;++R)s[R]=_*a[h+R]+g*a[l+R]+y*a[c+R]+b*a[u+R];return s}},Kl=class extends Xr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Ql=class extends Xr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ml(t,this.TimeBufferType),this.values=Ml(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ml(e.times,Array),values:Ml(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Kl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Jl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Wa:t=this.InterpolantFactoryMethodDiscrete;break;case Tl:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Wa;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ht("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ht("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&og(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){ht("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===bl,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};On.prototype.ValueTypeName="",On.prototype.TimeBufferType=Float32Array,On.prototype.ValueBufferType=Float32Array,On.prototype.DefaultInterpolation=Tl;var gr=class extends On{constructor(e,t,n){super(e,t,n)}};gr.prototype.ValueTypeName="bool",gr.prototype.ValueBufferType=Array,gr.prototype.DefaultInterpolation=Wa,gr.prototype.InterpolantFactoryMethodLinear=void 0,gr.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends On{constructor(e,t,n,r){super(e,t,n,r)}};ec.prototype.ValueTypeName="color";var tc=class extends On{constructor(e,t,n,r){super(e,t,n,r)}};tc.prototype.ValueTypeName="number";var nc=class extends Xr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)Cn.slerpFlat(s,0,a,l-o,a,l,c);return s}},mo=class extends On{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}};mo.prototype.ValueTypeName="quaternion",mo.prototype.InterpolantFactoryMethodSmooth=void 0;var vr=class extends On{constructor(e,t,n){super(e,t,n)}};vr.prototype.ValueTypeName="string",vr.prototype.ValueBufferType=Array,vr.prototype.DefaultInterpolation=Wa,vr.prototype.InterpolantFactoryMethodLinear=void 0,vr.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends On{constructor(e,t,n,r){super(e,t,n,r)}};ic.prototype.ValueTypeName="vector";var El={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},rc=class{constructor(e,t,n){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tf=new rc,ea=class{constructor(e){this.manager=e!==void 0?e:Tf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ea.DEFAULT_MATERIAL_NAME="__DEFAULT";var Os=new WeakMap,sc=class extends ea{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=El.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Os.get(a);u===void 0&&(u=[],Os.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=zs("img");function c(){h(),t&&t(this);let u=Os.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Os.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),El.remove(`image:${e}`);let d=Os.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Os.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),El.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var go=class extends ea{constructor(e){super(e)}load(e,t,n,r){let s=new gn,a=new sc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},ta=class extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},jr=class extends ta{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kh=new tt,Mp=new S,bp=new S,ac=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Mi,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xr,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Mp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Mp),bp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bp),t.updateMatrixWorld(),kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Ep=new tt,Oa=new S,Bh=new S,$h=class extends ac{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Oa.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oa),Bh.copy(n.position),Bh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Bh),n.updateMatrixWorld(),r.makeTranslation(-Oa.x,-Oa.y,-Oa.z),Ep.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ep,n.coordinateSystem,n.reversedDepth)}},qi=class extends ta{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new $h}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},vo=class extends $s{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yh=class extends ac{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Gy=new tt,zy=new tt,Vy=new tt;var oc=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Wy=new S,Xy=new Cn,jy=new S,qy=new S,$y=new S;var Yy=new S,Zy=new Cn,Jy=new S,Ky=new S;var zu="\\[\\]\\.:\\/",lg=new RegExp("["+zu+"]","g"),Fh="[^"+zu+"]",cg="[^"+zu.replace("\\.","")+"]",hg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Fh)+/(WCOD+)?/.source.replace("WCOD",cg)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fh)+"$"),ug=["material","materials","bones","map"],Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lg,"")}static parseTrackName(e){let t=hg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);ug.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Je("PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void ht("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void ht("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void ht("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0)return void ht("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=class{constructor(i,e,t){let n=t||Bt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray],Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qy=new Float32Array(1);var Sp=new tt,yo=class{constructor(e,t,n=0,r=1/0){this.ray=new _r(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new qs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sp),this}intersectObject(e,t=!0,n=[]){return Zh(e,this,n,t),n.sort(Tp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Zh(e[r],this,n,t);return n.sort(Tp),n}};function Tp(i,e){return i.distance-e.distance}function Zh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Zh(s[a],e,t,!0)}}var e_=new de;var t_=new S,n_=new S,i_=new S,r_=new S,s_=new S,a_=new S,o_=new S;var l_=new S;var c_=new S,h_=new tt,u_=new tt;var d_=new S,p_=new et,f_=new et;var m_=new S,g_=new S,v_=new S;var y_=new S,__=new $s;var x_=new Yn;var M_=new S;function Vu(i,e,t,n){let r=(function(s){switch(s){case Mi:case nu:return{byteLength:1,components:1};case aa:case iu:case Jr:return{byteLength:2,components:1};case xc:case Mc:return{byteLength:2,components:4};case Zr:case _c:case ri:return{byteLength:4,components:1};case ru:case su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return i*e;case bc:case Ec:return i*e/r.components*r.byteLength;case 1030:case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case si:case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}})),typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function $f(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function pg(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,s),l.length===0)i.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var ut={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Se={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},bi={basic:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:vn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:vn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:vn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:vn([Se.points,Se.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:vn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:vn([Se.common,Se.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:vn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:vn([Se.sprite,Se.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:vn([Se.common,Se.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:vn([Se.lights,Se.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};bi.physical={uniforms:vn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Ac={r:0,b:0,g:0},es=new ii,fg=new tt;function mg(i,e,t,n,r,s,a){let o=new et(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let _=m.isScene===!0?m.background:null;return _&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_)),_}function v(m,_){m.getRGB(Ac,Hu(i)),n.buffers.color.setClear(Ac.r,Ac.g,Ac.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),h=_,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,v(o,h)},render:function(m){let _=!1,g=f(m);g===null?v(o,h):g&&g.isColor&&(v(g,1),_=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,_){let g=f(_);g&&(g.isCubeTexture||g.mapping===bo)?(l===void 0&&(l=new H(new xe(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:Qr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),es.copy(_.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(fg.makeRotationFromEuler(es)),l.material.toneMapped=_t.getTransfer(g.colorSpace)!==Ct,u===g&&d===g.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new H(new vt(2,2),new Pn({name:"BackgroundMaterial",uniforms:Qr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:na,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=_t.getTransfer(g.colorSpace)!==Ct,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function gg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,a=!1;function o(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function l(_){let g=[],y=[],b=[];for(let R=0;R<t;R++)g[R]=0,y[R]=0,b[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:y,attributeDivisors:b,object:_,attributes:{},index:null}}function h(){let _=s.newAttributes;for(let g=0,y=_.length;g<y;g++)_[g]=0}function u(_){d(_,0)}function d(_,g){let y=s.newAttributes,b=s.enabledAttributes,R=s.attributeDivisors;y[_]=1,b[_]===0&&(i.enableVertexAttribArray(_),b[_]=1),R[_]!==g&&(i.vertexAttribDivisor(_,g),R[_]=g)}function p(){let _=s.newAttributes,g=s.enabledAttributes;for(let y=0,b=g.length;y<b;y++)g[y]!==_[y]&&(i.disableVertexAttribArray(y),g[y]=0)}function f(_,g,y,b,R,M,U){U===!0?i.vertexAttribIPointer(_,g,y,R,M):i.vertexAttribPointer(_,g,y,b,R,M)}function v(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(_,g,y,b,R){let M=!1,U=(function(z,I,X){let V=X.wireframe===!0,k=n[z.id];k===void 0&&(k={},n[z.id]=k);let J=k[I.id];J===void 0&&(J={},k[I.id]=J);let L=J[V];return L===void 0&&(L=l(i.createVertexArray()),J[V]=L),L})(b,y,g);s!==U&&(s=U,o(s.object)),M=(function(z,I,X,V){let k=s.attributes,J=I.attributes,L=0,j=X.getAttributes();for(let ee in j)if(j[ee].location>=0){let ce=k[ee],ae=J[ee];if(ae===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),ce===void 0||ce.attribute!==ae||ae&&ce.data!==ae.data)return!0;L++}return s.attributesNum!==L||s.index!==V})(_,b,y,R),M&&(function(z,I,X,V){let k={},J=I.attributes,L=0,j=X.getAttributes();for(let ee in j)if(j[ee].location>=0){let ce=J[ee];ce===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor));let ae={};ae.attribute=ce,ce&&ce.data&&(ae.data=ce.data),k[ee]=ae,L++}s.attributes=k,s.attributesNum=L,s.index=V})(_,b,y,R),R!==null&&e.update(R,i.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(z,I,X,V){h();let k=V.attributes,J=X.getAttributes(),L=I.defaultAttributeValues;for(let j in J){let ee=J[j];if(ee.location>=0){let ce=k[j];if(ce===void 0&&(j==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),j==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),ce!==void 0){let ae=ce.normalized,be=ce.itemSize,ue=e.get(ce);if(ue===void 0)continue;let Ee=ue.buffer,pe=ue.type,re=ue.bytesPerElement,ge=pe===i.INT||pe===i.UNSIGNED_INT||ce.gpuType===_c;if(ce.isInterleavedBufferAttribute){let ve=ce.data,ke=ve.stride,je=ce.offset;if(ve.isInstancedInterleavedBuffer){for(let w=0;w<ee.locationSize;w++)d(ee.location+w,ve.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let w=0;w<ee.locationSize;w++)u(ee.location+w);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let w=0;w<ee.locationSize;w++)f(ee.location+w,be/ee.locationSize,pe,ae,ke*re,(je+be/ee.locationSize*w)*re,ge)}else{if(ce.isInstancedBufferAttribute){for(let ve=0;ve<ee.locationSize;ve++)d(ee.location+ve,ce.meshPerAttribute);z.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ve=0;ve<ee.locationSize;ve++)u(ee.location+ve);i.bindBuffer(i.ARRAY_BUFFER,Ee);for(let ve=0;ve<ee.locationSize;ve++)f(ee.location+ve,be/ee.locationSize,pe,ae,be*re,be/ee.locationSize*ve*re,ge)}}else if(L!==void 0){let ae=L[j];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(ee.location,ae);break;case 3:i.vertexAttrib3fv(ee.location,ae);break;case 4:i.vertexAttrib4fv(ee.location,ae);break;default:i.vertexAttrib1fv(ee.location,ae)}}}}p()})(_,g,y,b),R!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))},reset:v,resetDefaultState:m,dispose:function(){v();for(let _ in n){let g=n[_];for(let y in g){let b=g[y];for(let R in b)c(b[R].object),delete b[R];delete g[y]}delete n[_]}},releaseStatesOfGeometry:function(_){if(n[_.id]===void 0)return;let g=n[_.id];for(let y in g){let b=g[y];for(let R in b)c(b[R].object),delete b[R];delete g[y]}delete n[_.id]},releaseStatesOfProgram:function(_){for(let g in n){let y=n[g];if(y[_.id]===void 0)continue;let b=y[_.id];for(let R in b)c(b[R].object),delete b[R];delete y[_.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function vg(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)r(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function yg(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Je("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===si||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Jr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Mi&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==ri&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function _g(i){let e=this,t=null,n=0,r=!1,s=!1,a=new qn,o=new lt,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=c.value,p!==!0||v===null){let m=d+4*f,_=u.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,y=d;g!==f;++g,y+=4)a.copy(h[g]).applyMatrix4(_,o),a.normal.toArray(v,y),v[y+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!v)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let _=s?0:n,g=4*_,y=m.clippingState||null;c.value=y,y=l(p,u,g,d);for(let b=0;b!==g;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=_}}}function xg(i){let e=new WeakMap;function t(r,s){return s===gc?r.mapping=sa:s===vc&&(r.mapping=$r),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===gc||s===vc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Il(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var wf=[.125,.215,.35,.446,.526,.582],wo=20,Ro=new vo,Rf=new et,Wu=null,Xu=0,ju=0,qu=!1,Mg=new S,Pc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Mg}=s;Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Wu,Xu,ju),this._renderer.xr.enabled=qu,e.scissorTest=!1,la(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===sa||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wu=this._renderer.getRenderTarget(),Xu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Jr,format:si,colorSpace:zr,depthBuffer:!1},r=Af(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Af(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+wf.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=wf[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,_=1+v,g=[m,m,_,m,_,_,m,m,_,_,m,_],y=6,b=6,R=3,M=2,U=1,z=new Float32Array(R*b*y),I=new Float32Array(M*b*y),X=new Float32Array(U*b*y);for(let k=0;k<y;k++){let J=k%3*2/3-1,L=k>2?0:-1,j=[J,L,0,J+2/3,L,0,J+2/3,L+1,0,J,L,0,J+2/3,L+1,0,J,L+1,0];z.set(j,R*b*k),I.set(g,M*b*k);let ee=[k,k,k,k,k,k];X.set(ee,U*b*k)}let V=new Pt;V.setAttribute("position",new Mn(z,R)),V.setAttribute("uv",new Mn(I,M)),V.setAttribute("faceIndex",new Mn(X,U)),l.push(new H(V,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(wo),h=new S(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:wo,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new H(new Pt,e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,n,r,s){let a=new tn(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(Rf),l.toneMapping=Yi,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new H(new xe,new ln({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,f=!0):(p.color.copy(Rf),f=!0);for(let m=0;m<6;m++){let _=m%3;_===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[m],s.y,s.z)):_===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[m]));let g=this._cubeSize;la(r,_*g,m>2?g:0,g,g),l.setRenderTarget(r),f&&l.render(d,a),l.render(e,a)}l.toneMapping=u,l.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===sa||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;la(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,Ro)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h)*(.05+.95*l),{_lodMax:d}=this,p=this._sizeLods[n],f=3*p*(n>d-4?n-d+4:0),v=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=d-t,la(s,f,v,3*p,2*p),r.setRenderTarget(s),r.render(o,Ro),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-n,la(e,f,v,3*p,2*p),r.setRenderTarget(e),r.render(o,Ro)}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=l;let u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):wo;v>wo&&Je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],_=0;for(let b=0;b<wo;++b){let R=b/f,M=Math.exp(-R*R/2);m.push(M),b===0?_+=M:b<v&&(_+=2*M)}for(let b=0;b<m.length;b++)m[b]=m[b]/_;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let y=this._sizeLods[r];la(t,3*y*(r>g-4?r-g+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,Ro)}};function Af(i,e,t){let n=new gi(i,e,t);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function la(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Cf(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Pf(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Ic(){return`

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
	`}function bg(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===gc||s===vc,o=s===sa||s===$r;if(a||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new Pc(i)),c=a?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Pc(i)),c=a?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Eg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Ws("WebGLRenderer: "+n+" extension not supported."),r}}}function Sg(i,e,t,n){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,_=v.length;m<_;m+=3){let g=v[m+0],y=v[m+1],b=v[m+2];l.push(g,y,y,b,b,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,_=v.length/3-1;m<_;m+=3){let g=m+0,y=m+1,b=m+2;l.push(g,y,y,b,b,g)}}}let p=new(Ou(l)?Za:Ya)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function Tg(i,e,t){let n,r,s;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function wg(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:ht("WebGLInfo: Unknown draw mode:",n)}}}}function Rg(i,e,t){let n=new WeakMap,r=new bt;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let z=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",z)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],g=0;d===!0&&(g=1),p===!0&&(g=2),f===!0&&(g=3);let y=a.attributes.position.count*g,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let R=new Float32Array(y*b*4*h),M=new $a(R,y,b,h);M.type=ri,M.needsUpdate=!0;let U=4*g;for(let I=0;I<h;I++){let X=v[I],V=m[I],k=_[I],J=y*b*4*I;for(let L=0;L<X.count;L++){let j=L*U;d===!0&&(r.fromBufferAttribute(X,L),R[J+j+0]=r.x,R[J+j+1]=r.y,R[J+j+2]=r.z,R[J+j+3]=0),p===!0&&(r.fromBufferAttribute(V,L),R[J+j+4]=r.x,R[J+j+5]=r.y,R[J+j+6]=r.z,R[J+j+7]=0),f===!0&&(r.fromBufferAttribute(k,L),R[J+j+8]=r.x,R[J+j+9]=r.y,R[J+j+10]=r.z,R[J+j+11]=k.itemSize===4?r.w:1)}}u={count:h,texture:M,size:new de(y,b)},n.set(a,u),a.addEventListener("dispose",z)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function Ag(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var Yf=new gn,If=new io(1,1),Zf=new $a,Jf=new Cl,Kf=new Ja,Lf=[],Df=[],Uf=new Float32Array(16),Nf=new Float32Array(9),kf=new Float32Array(4);function ua(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Lf[r];if(s===void 0&&(s=new Float32Array(r),Lf[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function nn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Lc(i,e){let t=Df[e];t===void 0&&(t=new Int32Array(e),Df[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Pg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2fv(this.addr,e),rn(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;i.uniform3fv(this.addr,e),rn(t,e)}}function Lg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4fv(this.addr,e),rn(t,e)}}function Dg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;kf.set(n),i.uniformMatrix2fv(this.addr,!1,kf),rn(t,n)}}function Ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Nf.set(n),i.uniformMatrix3fv(this.addr,!1,Nf),rn(t,n)}}function Ng(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(nn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,n))return;Uf.set(n),i.uniformMatrix4fv(this.addr,!1,Uf),rn(t,n)}}function kg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Bg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2iv(this.addr,e),rn(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3iv(this.addr,e),rn(t,e)}}function Og(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4iv(this.addr,e),rn(t,e)}}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;i.uniform2uiv(this.addr,e),rn(t,e)}}function zg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;i.uniform3uiv(this.addr,e),rn(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;i.uniform4uiv(this.addr,e),rn(t,e)}}function Wg(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(If.compareFunction=Bu,s=If):s=Yf,t.setTexture2D(e||s,r)}function Xg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Jf,r)}function jg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Kf,r)}function qg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Zf,r)}function $g(i,e){i.uniform1fv(this.addr,e)}function Yg(i,e){let t=ua(e,this.size,2);i.uniform2fv(this.addr,t)}function Zg(i,e){let t=ua(e,this.size,3);i.uniform3fv(this.addr,t)}function Jg(i,e){let t=ua(e,this.size,4);i.uniform4fv(this.addr,t)}function Kg(i,e){let t=ua(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Qg(i,e){let t=ua(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function e1(i,e){let t=ua(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function t1(i,e){i.uniform1iv(this.addr,e)}function n1(i,e){i.uniform2iv(this.addr,e)}function i1(i,e){i.uniform3iv(this.addr,e)}function r1(i,e){i.uniform4iv(this.addr,e)}function s1(i,e){i.uniform1uiv(this.addr,e)}function a1(i,e){i.uniform2uiv(this.addr,e)}function o1(i,e){i.uniform3uiv(this.addr,e)}function l1(i,e){i.uniform4uiv(this.addr,e)}function c1(i,e,t){let n=this.cache,r=e.length,s=Lc(t,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Yf,s[a])}function h1(i,e,t){let n=this.cache,r=e.length,s=Lc(t,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Jf,s[a])}function u1(i,e,t){let n=this.cache,r=e.length,s=Lc(t,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Kf,s[a])}function d1(i,e,t){let n=this.cache,r=e.length,s=Lc(t,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Zf,s[a])}var Yu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return Cg;case 35664:return Pg;case 35665:return Ig;case 35666:return Lg;case 35674:return Dg;case 35675:return Ug;case 35676:return Ng;case 5124:case 35670:return kg;case 35667:case 35671:return Bg;case 35668:case 35672:return Fg;case 35669:case 35673:return Og;case 5125:return Hg;case 36294:return Gg;case 36295:return zg;case 36296:return Vg;case 35678:case 36198:case 36298:case 36306:case 35682:return Wg;case 35679:case 36299:case 36307:return Xg;case 35680:case 36300:case 36308:case 36293:return jg;case 36289:case 36303:case 36311:case 36292:return qg}})(t.type)}},Zu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return $g;case 35664:return Yg;case 35665:return Zg;case 35666:return Jg;case 35674:return Kg;case 35675:return Qg;case 35676:return e1;case 5124:case 35670:return t1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return a1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return h1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return d1}})(t.type)}},Ju=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},$u=/(\w+)(\])?(\[|\.)?/g;function Bf(i,e){i.seq.push(e),i.map[e.id]=e}function p1(i,e,t){let n=i.name,r=n.length;for($u.lastIndex=0;;){let s=$u.exec(n),a=$u.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){Bf(t,l===void 0?new Yu(o,i,e):new Zu(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Ju(o),Bf(t,h)),t=h}}}var ca=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);p1(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function Ff(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var f1=0,Of=new lt;function Hf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function m1(i,e){let t=(function(n){_t._getMatrix(Of,_t.workingColorSpace,n);let r=`mat3( ${Of.elements.map(s=>s.toFixed(4))} )`;switch(_t.getTransfer(n)){case Xa:return[r,"LinearTransferOETF"];case Ct:return[r,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function g1(i,e){let t;switch(e){case Jp:t="Linear";break;case Kp:t="Reinhard";break;case Qp:t="Cineon";break;case ef:t="ACESFilmic";break;case nf:t="AgX";break;case ra:t="Neutral";break;case tf:t="Custom";break;default:Je("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Cc=new S;function v1(){return _t.getLuminanceCoefficients(Cc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Cc.x.toFixed(4)}, ${Cc.y.toFixed(4)}, ${Cc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ao(i){return i!==""}function Gf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ku(i){return i.replace(y1,x1)}var _1=new Map;function x1(i,e){let t=ut[e];if(t===void 0){let n=_1.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ut[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Ku(t)}var M1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vf(i){return i.replace(M1,b1)}function b1(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function E1(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(V){let k="SHADOWMAP_TYPE_BASIC";return V.shadowMapType===Kh?k="SHADOWMAP_TYPE_PCF":V.shadowMapType===lc?k="SHADOWMAP_TYPE_PCF_SOFT":V.shadowMapType===xi&&(k="SHADOWMAP_TYPE_VSM"),k})(t),l=(function(V){let k="ENVMAP_TYPE_CUBE";if(V.envMap)switch(V.envMapMode){case sa:case $r:k="ENVMAP_TYPE_CUBE";break;case bo:k="ENVMAP_TYPE_CUBE_UV"}return k})(t),h=(function(V){let k="ENVMAP_MODE_REFLECTION";return V.envMap&&V.envMapMode===$r&&(k="ENVMAP_MODE_REFRACTION"),k})(t),u=(function(V){let k="ENVMAP_BLENDING_NONE";if(V.envMap)switch(V.combine){case $p:k="ENVMAP_BLENDING_MULTIPLY";break;case Yp:k="ENVMAP_BLENDING_MIX";break;case Zp:k="ENVMAP_BLENDING_ADD"}return k})(t),d=(function(V){let k=V.envMapCubeUVHeight;if(k===null)return null;let J=Math.log2(k)-2,L=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,J),112)),texelHeight:L,maxMip:J}})(t),p=(function(V){return[V.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",V.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)})(t),f=(function(V){let k=[];for(let J in V){let L=V[J];L!==!1&&k.push("#define "+J+" "+L)}return k.join(`
`)})(s),v=r.createProgram(),m,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ao).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Ao).join(`
`),_.length>0&&(_+=`
`)):(m=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),_=[Wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?ut.tonemapping_pars_fragment:"",t.toneMapping!==Yi?g1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,m1("linearToOutputTexel",t.outputColorSpace),v1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ao).join(`
`)),a=Ku(a),a=Gf(a,t),a=zf(a,t),o=Ku(o),o=Gf(o,t),o=zf(o,t),a=Vf(a),o=Vf(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=g+m+a,b=g+_+o,R=Ff(r,r.VERTEX_SHADER,y),M=Ff(r,r.FRAGMENT_SHADER,b);function U(V){if(i.debug.checkShaderErrors){let k=r.getProgramInfoLog(v)||"",J=r.getShaderInfoLog(R)||"",L=r.getShaderInfoLog(M)||"",j=k.trim(),ee=J.trim(),ce=L.trim(),ae=!0,be=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,R,M);else{let ue=Hf(r,R,"vertex"),Ee=Hf(r,M,"fragment");ht("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+j+`
`+ue+`
`+Ee)}else j!==""?Je("WebGLProgram: Program Info Log:",j):ee!==""&&ce!==""||(be=!1);be&&(V.diagnostics={runnable:ae,programLog:j,vertexShader:{log:ee,prefix:m},fragmentShader:{log:ce,prefix:_}})}r.deleteShader(R),r.deleteShader(M),z=new ca(r,v),I=(function(k,J){let L={},j=k.getProgramParameter(J,k.ACTIVE_ATTRIBUTES);for(let ee=0;ee<j;ee++){let ce=k.getActiveAttrib(J,ee),ae=ce.name,be=1;ce.type===k.FLOAT_MAT2&&(be=2),ce.type===k.FLOAT_MAT3&&(be=3),ce.type===k.FLOAT_MAT4&&(be=4),L[ae]={type:ce.type,location:k.getAttribLocation(J,ae),locationSize:be}}return L})(r,v)}let z,I;r.attachShader(v,R),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),this.getUniforms=function(){return z===void 0&&U(this),z},this.getAttributes=function(){return I===void 0&&U(this),I};let X=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=r.getProgramParameter(v,37297)),X},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=M,this}var S1=0,Qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ed(e),t.set(e,n)),n}},ed=class{constructor(e){this.id=S1++,this.code=e,this.usedTimes=0}};function T1(i,e,t,n,r,s,a){let o=new qs,c=new Qu,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,_,g,y,b){let R=y.fog,M=b.geometry,U=m.isMeshStandardMaterial?y.environment:null,z=(m.isMeshStandardMaterial?t:e).get(m.envMap||U),I=z&&z.mapping===bo?z.image.height:null,X=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&Je("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let V=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,k=V!==void 0?V.length:0,J,L,j,ee,ce=0;if(M.morphAttributes.position!==void 0&&(ce=1),M.morphAttributes.normal!==void 0&&(ce=2),M.morphAttributes.color!==void 0&&(ce=3),X){let O=bi[X];J=O.vertexShader,L=O.fragmentShader}else J=m.vertexShader,L=m.fragmentShader,c.update(m),j=c.getVertexShaderID(m),ee=c.getFragmentShaderID(m);let ae=i.getRenderTarget(),be=i.state.buffers.depth.getReversed(),ue=b.isInstancedMesh===!0,Ee=b.isBatchedMesh===!0,pe=!!m.map,re=!!m.matcap,ge=!!z,ve=!!m.aoMap,ke=!!m.lightMap,je=!!m.bumpMap,w=!!m.normalMap,T=!!m.displacementMap,G=!!m.emissiveMap,N=!!m.metalnessMap,x=!!m.roughnessMap,C=m.anisotropy>0,W=m.clearcoat>0,B=m.dispersion>0,te=m.iridescence>0,q=m.sheen>0,K=m.transmission>0,ne=C&&!!m.anisotropyMap,le=W&&!!m.clearcoatMap,he=W&&!!m.clearcoatNormalMap,Ae=W&&!!m.clearcoatRoughnessMap,Be=te&&!!m.iridescenceMap,Xe=te&&!!m.iridescenceThicknessMap,st=q&&!!m.sheenColorMap,rt=q&&!!m.sheenRoughnessMap,gt=!!m.specularMap,Ue=!!m.specularColorMap,Ke=!!m.specularIntensityMap,nt=K&&!!m.transmissionMap,Nt=K&&!!m.thicknessMap,we=!!m.gradientMap,yt=!!m.alphaMap,xt=m.alphaTest>0,Wn=!!m.alphaHash,sn=!!m.extensions,kt=Yi;m.toneMapped&&(ae!==null&&ae.isXRRenderTarget!==!0||(kt=i.toneMapping));let zt={shaderID:X,shaderType:m.type,shaderName:m.name,vertexShader:J,fragmentShader:L,defines:m.defines,customVertexShaderID:j,customFragmentShaderID:ee,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Ee,batchingColor:Ee&&b._colorsTexture!==null,instancing:ue,instancingColor:ue&&b.instanceColor!==null,instancingMorph:ue&&b.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:zr,alphaToCoverage:!!m.alphaToCoverage,map:pe,matcap:re,envMap:ge,envMapMode:ge&&z.mapping,envMapCubeUVHeight:I,aoMap:ve,lightMap:ke,bumpMap:je,normalMap:w,displacementMap:d&&T,emissiveMap:G,normalMapObjectSpace:w&&m.normalMapType===cf,normalMapTangentSpace:w&&m.normalMapType===lf,metalnessMap:N,roughnessMap:x,anisotropy:C,anisotropyMap:ne,clearcoat:W,clearcoatMap:le,clearcoatNormalMap:he,clearcoatRoughnessMap:Ae,dispersion:B,iridescence:te,iridescenceMap:Be,iridescenceThicknessMap:Xe,sheen:q,sheenColorMap:st,sheenRoughnessMap:rt,specularMap:gt,specularColorMap:Ue,specularIntensityMap:Ke,transmission:K,transmissionMap:nt,thicknessMap:Nt,gradientMap:we,opaque:m.transparent===!1&&m.blending===_o&&m.alphaToCoverage===!1,alphaMap:yt,alphaTest:xt,alphaHash:Wn,combine:m.combine,mapUv:pe&&v(m.map.channel),aoMapUv:ve&&v(m.aoMap.channel),lightMapUv:ke&&v(m.lightMap.channel),bumpMapUv:je&&v(m.bumpMap.channel),normalMapUv:w&&v(m.normalMap.channel),displacementMapUv:T&&v(m.displacementMap.channel),emissiveMapUv:G&&v(m.emissiveMap.channel),metalnessMapUv:N&&v(m.metalnessMap.channel),roughnessMapUv:x&&v(m.roughnessMap.channel),anisotropyMapUv:ne&&v(m.anisotropyMap.channel),clearcoatMapUv:le&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:st&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:rt&&v(m.sheenRoughnessMap.channel),specularMapUv:gt&&v(m.specularMap.channel),specularColorMapUv:Ue&&v(m.specularColorMap.channel),specularIntensityMapUv:Ke&&v(m.specularIntensityMap.channel),transmissionMapUv:nt&&v(m.transmissionMap.channel),thicknessMapUv:Nt&&v(m.thicknessMap.channel),alphaMapUv:yt&&v(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(w||C),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!M.attributes.uv&&(pe||yt),fog:!!R,useFog:m.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:be,skinning:b.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:ce,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&g.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:pe&&m.map.isVideoTexture===!0&&_t.getTransfer(m.map.colorSpace)===Ct,decodeVideoTextureEmissive:G&&m.emissiveMap.isVideoTexture===!0&&_t.getTransfer(m.emissiveMap.colorSpace)===Ct,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Et,flipSided:m.side===Sn,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:sn&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(sn&&m.extensions.multiDraw===!0||Ee)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt},getProgramCacheKey:function(m){let _=[];if(m.shaderID?_.push(m.shaderID):(_.push(m.customVertexShaderID),_.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)_.push(g),_.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)})(_,m),(function(g,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),g.push(o.mask)})(_,m),_.push(i.outputColorSpace)),_.push(m.customProgramCacheKey),_.join()},getUniforms:function(m){let _=f[m.type],g;if(_){let y=bi[_];g=xf.clone(y.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,_){let g;for(let y=0,b=h.length;y<b;y++){let R=h[y];if(R.cacheKey===_){g=R,++g.usedTimes;break}}return g===void 0&&(g=new E1(i,_,m,s),h.push(g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let _=h.indexOf(m);h[_]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function w1(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function R1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function jf(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||R1),n.length>1&&n.sort(o||Xf),r.length>1&&r.sort(o||Xf)}}}function A1(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new jf,i.set(e,[r])):t>=n.length?(r=new jf,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function C1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new et};break;case"SpotLight":t={position:new S,direction:new S,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new S,halfWidth:new S,halfHeight:new S}}return i[e.id]=t,t}}}var P1=0;function I1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L1(i){let e=new C1,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new S);let r=new S,s=new tt,a=new tt;return{setup:function(o){let c=0,l=0,h=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let u=0,d=0,p=0,f=0,v=0,m=0,_=0,g=0,y=0,b=0,R=0;o.sort(I1);for(let U=0,z=o.length;U<z;U++){let I=o[U],X=I.color,V=I.intensity,k=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=X.r*V,l+=X.g*V,h+=X.b*V;else if(I.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(I.sh.coefficients[L],V);R++}else if(I.isDirectionalLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.directionalShadow[u]=ee,n.directionalShadowMap[u]=J,n.directionalShadowMatrix[u]=I.shadow.matrix,m++}n.directional[u]=L,u++}else if(I.isSpotLight){let L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(X).multiplyScalar(V),L.distance=k,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,n.spot[p]=L;let j=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[p]=j.matrix,I.castShadow){let ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=J,g++}p++}else if(I.isRectAreaLight){let L=e.get(I);L.color.copy(X).multiplyScalar(V),L.halfWidth.set(.5*I.width,0,0),L.halfHeight.set(0,.5*I.height,0),n.rectArea[f]=L,f++}else if(I.isPointLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){let j=I.shadow,ee=t.get(I);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=J,n.pointShadowMatrix[d]=I.shadow.matrix,_++}n.point[d]=L,d++}else if(I.isHemisphereLight){let L=e.get(I);L.skyColor.copy(I.color).multiplyScalar(V),L.groundColor.copy(I.groundColor).multiplyScalar(V),n.hemi[v]=L,v++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let M=n.hash;M.directionalLength===u&&M.pointLength===d&&M.spotLength===p&&M.rectAreaLength===f&&M.hemiLength===v&&M.numDirectionalShadows===m&&M.numPointShadows===_&&M.numSpotShadows===g&&M.numSpotMaps===y&&M.numLightProbes===R||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=g+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=R,M.directionalLength=u,M.pointLength=d,M.spotLength=p,M.rectAreaLength=f,M.hemiLength=v,M.numDirectionalShadows=m,M.numPointShadows=_,M.numSpotShadows=g,M.numSpotMaps=y,M.numLightProbes=R,n.version=P1++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let _=o[v];if(_.isDirectionalLight){let g=n.directional[l];g.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(f),l++}else if(_.isSpotLight){let g=n.spot[u];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),g.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(f),u++}else if(_.isRectAreaLight){let g=n.rectArea[d];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),g.halfWidth.set(.5*_.width,0,0),g.halfHeight.set(0,.5*_.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let g=n.point[h];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(f),h++}else if(_.isHemisphereLight){let g=n.hemi[p];g.direction.setFromMatrixPosition(_.matrixWorld),g.direction.transformDirection(f),p++}}},state:n}}function qf(i){let e=new L1(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function D1(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new qf(i),e.set(t,[s])):n>=r.length?(s=new qf(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}function U1(i,e,t){let n=new xr,r=new de,s=new de,a=new bt,o=new Yl({depthPacking:of}),c=new Zl,l={},h=t.maxTextureSize,u={[na]:Sn,[Sn]:na,[Et]:Et},d=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Pt;f.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new H(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh;let _=this.type;function g(M,U){let z=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new gi(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(U,null,z,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(U,null,z,p,v,null)}function y(M,U,z,I){let X=null,V=z.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(V!==void 0)X=V;else if(X=z.isPointLight===!0?c:o,i.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){let k=X.uuid,J=U.uuid,L=l[k];L===void 0&&(L={},l[k]=L);let j=L[J];j===void 0&&(j=X.clone(),L[J]=j,U.addEventListener("dispose",R)),X=j}return X.visible=U.visible,X.wireframe=U.wireframe,X.side=I===xi?U.shadowSide!==null?U.shadowSide:U.side:U.shadowSide!==null?U.shadowSide:u[U.side],X.alphaMap=U.alphaMap,X.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,X.map=U.map,X.clipShadows=U.clipShadows,X.clippingPlanes=U.clippingPlanes,X.clipIntersection=U.clipIntersection,X.displacementMap=U.displacementMap,X.displacementScale=U.displacementScale,X.displacementBias=U.displacementBias,X.wireframeLinewidth=U.wireframeLinewidth,X.linewidth=U.linewidth,z.isPointLight===!0&&X.isMeshDistanceMaterial===!0&&(i.properties.get(X).light=z),X}function b(M,U,z,I,X){if(M.visible===!1)return;if(M.layers.test(U.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&X===xi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,M.matrixWorld);let k=e.update(M),J=M.material;if(Array.isArray(J)){let L=k.groups;for(let j=0,ee=L.length;j<ee;j++){let ce=L[j],ae=J[ce.materialIndex];if(ae&&ae.visible){let be=y(M,ae,I,X);M.onBeforeShadow(i,M,U,z,k,be,ce),i.renderBufferDirect(z,null,k,be,M,ce),M.onAfterShadow(i,M,U,z,k,be,ce)}}}else if(J.visible){let L=y(M,J,I,X);M.onBeforeShadow(i,M,U,z,k,L,null),i.renderBufferDirect(z,null,k,L,M,null),M.onAfterShadow(i,M,U,z,k,L,null)}}let V=M.children;for(let k=0,J=V.length;k<J;k++)b(V[k],U,z,I,X)}function R(M){M.target.removeEventListener("dispose",R);for(let U in l){let z=l[U],I=M.target.uuid;I in z&&(z[I].dispose(),delete z[I])}}this.render=function(M,U,z){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let I=i.getRenderTarget(),X=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),k=i.state;k.setBlending($i),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let J=_!==xi&&this.type===xi,L=_===xi&&this.type!==xi;for(let j=0,ee=M.length;j<ee;j++){let ce=M[j],ae=ce.shadow;if(ae===void 0){Je("WebGLShadowMap:",ce,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;r.copy(ae.mapSize);let be=ae.getFrameExtents();if(r.multiply(be),s.copy(ae.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/be.x),r.x=s.x*be.x,ae.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/be.y),r.y=s.y*be.y,ae.mapSize.y=s.y)),ae.map===null||J===!0||L===!0){let Ee=this.type!==xi?{minFilter:mi,magFilter:mi}:{};ae.map!==null&&ae.map.dispose(),ae.map=new gi(r.x,r.y,Ee),ae.map.texture.name=ce.name+".shadowMap",ae.camera.updateProjectionMatrix()}i.setRenderTarget(ae.map),i.clear();let ue=ae.getViewportCount();for(let Ee=0;Ee<ue;Ee++){let pe=ae.getViewport(Ee);a.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),k.viewport(a),ae.updateMatrices(ce,Ee),n=ae.getFrustum(),b(U,z,ae.camera,ce,this.type)}ae.isPointLightShadow!==!0&&this.type===xi&&g(ae,z),ae.needsUpdate=!1}_=this.type,m.needsUpdate=!1,i.setRenderTarget(I,X,V)}}var N1={[cc]:hc,[uc]:fc,[dc]:mc,[Mo]:pc,[hc]:cc,[fc]:uc,[mc]:dc,[pc]:Mo};function k1(i,e){let t=new function(){let x=!1,C=new bt,W=null,B=new bt(0,0,0,0);return{setMask:function(te){W===te||x||(i.colorMask(te,te,te,te),W=te)},setLocked:function(te){x=te},setClear:function(te,q,K,ne,le){le===!0&&(te*=ne,q*=ne,K*=ne),C.set(te,q,K,ne),B.equals(C)===!1&&(i.clearColor(te,q,K,ne),B.copy(C))},reset:function(){x=!1,W=null,B.set(-1,0,0,0)}}},n=new function(){let x=!1,C=!1,W=null,B=null,te=null;return{setReversed:function(q){if(C!==q){let K=e.get("EXT_clip_control");q?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),C=q;let ne=te;te=null,this.setClear(ne)}},getReversed:function(){return C},setTest:function(q){q?ge(i.DEPTH_TEST):ve(i.DEPTH_TEST)},setMask:function(q){W===q||x||(i.depthMask(q),W=q)},setFunc:function(q){if(C&&(q=N1[q]),B!==q){switch(q){case cc:i.depthFunc(i.NEVER);break;case hc:i.depthFunc(i.ALWAYS);break;case uc:i.depthFunc(i.LESS);break;case Mo:i.depthFunc(i.LEQUAL);break;case dc:i.depthFunc(i.EQUAL);break;case pc:i.depthFunc(i.GEQUAL);break;case fc:i.depthFunc(i.GREATER);break;case mc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}B=q}},setLocked:function(q){x=q},setClear:function(q){te!==q&&(C&&(q=1-q),i.clearDepth(q),te=q)},reset:function(){x=!1,W=null,B=null,te=null,C=!1}}},r=new function(){let x=!1,C=null,W=null,B=null,te=null,q=null,K=null,ne=null,le=null;return{setTest:function(he){x||(he?ge(i.STENCIL_TEST):ve(i.STENCIL_TEST))},setMask:function(he){C===he||x||(i.stencilMask(he),C=he)},setFunc:function(he,Ae,Be){W===he&&B===Ae&&te===Be||(i.stencilFunc(he,Ae,Be),W=he,B=Ae,te=Be)},setOp:function(he,Ae,Be){q===he&&K===Ae&&ne===Be||(i.stencilOp(he,Ae,Be),q=he,K=Ae,ne=Be)},setLocked:function(he){x=he},setClear:function(he){le!==he&&(i.clearStencil(he),le=he)},reset:function(){x=!1,C=null,W=null,B=null,te=null,q=null,K=null,ne=null,le=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,_=null,g=null,y=null,b=new et(0,0,0),R=0,M=!1,U=null,z=null,I=null,X=null,V=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,L=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=L>=1):j.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=L>=2);let ee=null,ce={},ae=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),ue=new bt().fromArray(ae),Ee=new bt().fromArray(be);function pe(x,C,W,B){let te=new Uint8Array(4),q=i.createTexture();i.bindTexture(x,q),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let K=0;K<W;K++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,B,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(C+K,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return q}let re={};function ge(x){o[x]!==!0&&(i.enable(x),o[x]=!0)}function ve(x){o[x]!==!1&&(i.disable(x),o[x]=!1)}re[i.TEXTURE_2D]=pe(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ge(i.DEPTH_TEST),n.setFunc(Mo),T(!1),G(Jh),ge(i.CULL_FACE),w($i);let ke={[ia]:i.FUNC_ADD,[Cp]:i.FUNC_SUBTRACT,[Pp]:i.FUNC_REVERSE_SUBTRACT};ke[Ip]=i.MIN,ke[Lp]=i.MAX;let je={[Dp]:i.ZERO,[Up]:i.ONE,[Np]:i.SRC_COLOR,[Bp]:i.SRC_ALPHA,[Vp]:i.SRC_ALPHA_SATURATE,[Gp]:i.DST_COLOR,[Op]:i.DST_ALPHA,[kp]:i.ONE_MINUS_SRC_COLOR,[Fp]:i.ONE_MINUS_SRC_ALPHA,[zp]:i.ONE_MINUS_DST_COLOR,[Hp]:i.ONE_MINUS_DST_ALPHA,[Wp]:i.CONSTANT_COLOR,[Xp]:i.ONE_MINUS_CONSTANT_COLOR,[jp]:i.CONSTANT_ALPHA,[qp]:i.ONE_MINUS_CONSTANT_ALPHA};function w(x,C,W,B,te,q,K,ne,le,he){if(x!==$i){if(d===!1&&(ge(i.BLEND),d=!0),x===Ap)te=te||C,q=q||W,K=K||B,C===f&&te===_||(i.blendEquationSeparate(ke[C],ke[te]),f=C,_=te),W===v&&B===m&&q===g&&K===y||(i.blendFuncSeparate(je[W],je[B],je[q],je[K]),v=W,m=B,g=q,y=K),ne.equals(b)!==!1&&le===R||(i.blendColor(ne.r,ne.g,ne.b,le),b.copy(ne),R=le),p=x,M=!1;else if(x!==p||he!==M){if(f===ia&&_===ia||(i.blendEquation(i.FUNC_ADD),f=ia,_=ia),he)switch(x){case _o:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFunc(i.ONE,i.ONE);break;case Qh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",x)}else switch(x){case _o:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qh:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case eu:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",x)}v=null,m=null,g=null,y=null,b.set(0,0,0),R=0,p=x,M=he}}else d===!0&&(ve(i.BLEND),d=!1)}function T(x){U!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),U=x)}function G(x){x!==wp?(ge(i.CULL_FACE),x!==z&&(x===Jh?i.cullFace(i.BACK):x===Rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ve(i.CULL_FACE),z=x}function N(x,C,W){x?(ge(i.POLYGON_OFFSET_FILL),X===C&&V===W||(i.polygonOffset(C,W),X=C,V=W)):ve(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ge,disable:ve,bindFramebuffer:function(x,C){return c[x]!==C&&(i.bindFramebuffer(x,C),c[x]=C,x===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=C),x===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(x,C){let W=h,B=!1;if(x){W=l.get(C),W===void 0&&(W=[],l.set(C,W));let te=x.textures;if(W.length!==te.length||W[0]!==i.COLOR_ATTACHMENT0){for(let q=0,K=te.length;q<K;q++)W[q]=i.COLOR_ATTACHMENT0+q;W.length=te.length,B=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,B=!0);B&&i.drawBuffers(W)},useProgram:function(x){return u!==x&&(i.useProgram(x),u=x,!0)},setBlending:w,setMaterial:function(x,C){x.side===Et?ve(i.CULL_FACE):ge(i.CULL_FACE);let W=x.side===Sn;C&&(W=!W),T(W),x.blending===_o&&x.transparent===!1?w($i):w(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),n.setFunc(x.depthFunc),n.setTest(x.depthTest),n.setMask(x.depthWrite),t.setMask(x.colorWrite);let B=x.stencilWrite;r.setTest(B),B&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),N(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):ve(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:T,setCullFace:G,setLineWidth:function(x){x!==I&&(J&&i.lineWidth(x),I=x)},setPolygonOffset:N,setScissorTest:function(x){x?ge(i.SCISSOR_TEST):ve(i.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=i.TEXTURE0+k-1),ee!==x&&(i.activeTexture(x),ee=x)},bindTexture:function(x,C,W){W===void 0&&(W=ee===null?i.TEXTURE0+k-1:ee);let B=ce[W];B===void 0&&(B={type:void 0,texture:void 0},ce[W]=B),B.type===x&&B.texture===C||(ee!==W&&(i.activeTexture(W),ee=W),i.bindTexture(x,C||re[x]),B.type=x,B.texture=C)},unbindTexture:function(){let x=ce[ee];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(x){x("WebGLState:",x)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(x){x("WebGLState:",x)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(x){x("WebGLState:",x)}},updateUBOMapping:function(x,C){let W=a.get(C);W===void 0&&(W=new WeakMap,a.set(C,W));let B=W.get(x);B===void 0&&(B=i.getUniformBlockIndex(C,x.name),W.set(x,B))},uniformBlockBinding:function(x,C){let W=a.get(C).get(x);s.get(C)!==W&&(i.uniformBlockBinding(C,W,x.__bindingPointIndex),s.set(C,W))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(x){x("WebGLState:",x)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(x){x("WebGLState:",x)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(x){x("WebGLState:",x)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(x){x("WebGLState:",x)}},scissor:function(x){ue.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),ue.copy(x))},viewport:function(x){Ee.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),Ee.copy(x))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},ee=null,ce={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,_=null,g=null,y=null,b=new et(0,0,0),R=0,M=!1,U=null,z=null,I=null,X=null,V=null,ue.set(0,0,i.canvas.width,i.canvas.height),Ee.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function B1(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new de,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,T){return p?new OffscreenCanvas(w,T):zs("canvas")}function v(w,T,G){let N=1,x=je(w);if((x.width>G||x.height>G)&&(N=G/Math.max(x.width,x.height)),N<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let C=Math.floor(N*x.width),W=Math.floor(N*x.height);u===void 0&&(u=f(C,W));let B=T?f(C,W):u;return B.width=C,B.height=W,B.getContext("2d").drawImage(w,0,0,C,W),Je("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+C+"x"+W+")."),B}return"data"in w&&Je("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),w}return w}function m(w){return w.generateMipmaps}function _(w){i.generateMipmap(w)}function g(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,T,G,N,x=!1){if(w!==null){if(i[w]!==void 0)return i[w];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let C=T;if(T===i.RED&&(G===i.FLOAT&&(C=i.R32F),G===i.HALF_FLOAT&&(C=i.R16F),G===i.UNSIGNED_BYTE&&(C=i.R8)),T===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(C=i.R8UI),G===i.UNSIGNED_SHORT&&(C=i.R16UI),G===i.UNSIGNED_INT&&(C=i.R32UI),G===i.BYTE&&(C=i.R8I),G===i.SHORT&&(C=i.R16I),G===i.INT&&(C=i.R32I)),T===i.RG&&(G===i.FLOAT&&(C=i.RG32F),G===i.HALF_FLOAT&&(C=i.RG16F),G===i.UNSIGNED_BYTE&&(C=i.RG8)),T===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(C=i.RG8UI),G===i.UNSIGNED_SHORT&&(C=i.RG16UI),G===i.UNSIGNED_INT&&(C=i.RG32UI),G===i.BYTE&&(C=i.RG8I),G===i.SHORT&&(C=i.RG16I),G===i.INT&&(C=i.RG32I)),T===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(C=i.RGB8UI),G===i.UNSIGNED_SHORT&&(C=i.RGB16UI),G===i.UNSIGNED_INT&&(C=i.RGB32UI),G===i.BYTE&&(C=i.RGB8I),G===i.SHORT&&(C=i.RGB16I),G===i.INT&&(C=i.RGB32I)),T===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(C=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(C=i.RGBA16UI),G===i.UNSIGNED_INT&&(C=i.RGBA32UI),G===i.BYTE&&(C=i.RGBA8I),G===i.SHORT&&(C=i.RGBA16I),G===i.INT&&(C=i.RGBA32I)),T===i.RGB&&(G===i.UNSIGNED_INT_5_9_9_9_REV&&(C=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(C=i.R11F_G11F_B10F)),T===i.RGBA){let W=x?Xa:_t.getTransfer(N);G===i.FLOAT&&(C=i.RGBA32F),G===i.HALF_FLOAT&&(C=i.RGBA16F),G===i.UNSIGNED_BYTE&&(C=W===Ct?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(C=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(C=i.RGB5_A1)}return C!==i.R16F&&C!==i.R32F&&C!==i.RG16F&&C!==i.RG32F&&C!==i.RGBA16F&&C!==i.RGBA32F||e.get("EXT_color_buffer_float"),C}function b(w,T){let G;return w?T===null||T===Zr||T===oa?G=i.DEPTH24_STENCIL8:T===ri?G=i.DEPTH32F_STENCIL8:T===aa&&(G=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Zr||T===oa?G=i.DEPTH_COMPONENT24:T===ri?G=i.DEPTH_COMPONENT32F:T===aa&&(G=i.DEPTH_COMPONENT16),G}function R(w,T){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==mi&&w.minFilter!==$n?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function M(w){let T=w.target;T.removeEventListener("dispose",M),(function(G){let N=n.get(G);if(N.__webglInit===void 0)return;let x=G.source,C=d.get(x);if(C){let W=C[N.__cacheKey];W.usedTimes--,W.usedTimes===0&&z(G),Object.keys(C).length===0&&d.delete(x)}n.remove(G)})(T),T.isVideoTexture&&h.delete(T)}function U(w){let T=w.target;T.removeEventListener("dispose",U),(function(G){let N=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(N.__webglFramebuffer[C]))for(let W=0;W<N.__webglFramebuffer[C].length;W++)i.deleteFramebuffer(N.__webglFramebuffer[C][W]);else i.deleteFramebuffer(N.__webglFramebuffer[C]);N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[C])}else{if(Array.isArray(N.__webglFramebuffer))for(let C=0;C<N.__webglFramebuffer.length;C++)i.deleteFramebuffer(N.__webglFramebuffer[C]);else i.deleteFramebuffer(N.__webglFramebuffer);if(N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let C=0;C<N.__webglColorRenderbuffer.length;C++)N.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[C]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}let x=G.textures;for(let C=0,W=x.length;C<W;C++){let B=n.get(x[C]);B.__webglTexture&&(i.deleteTexture(B.__webglTexture),a.memory.textures--),n.remove(x[C])}n.remove(G)})(T)}function z(w){let T=n.get(w);i.deleteTexture(T.__webglTexture);let G=w.source;delete d.get(G)[T.__cacheKey],a.memory.textures--}let I=0;function X(w,T){let G=n.get(w);if(w.isVideoTexture&&(function(N){let x=a.render.frame;h.get(N)!==x&&(h.set(N,x),N.update())})(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&G.__version!==w.version){let N=w.image;if(N===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else{if(N.complete!==!1)return void ce(G,w,T);Je("WebGLRenderer: Texture marked for update but image is incomplete")}}else w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+T)}let V={[Gr]:i.REPEAT,[yr]:i.CLAMP_TO_EDGE,[Sl]:i.MIRRORED_REPEAT},k={[mi]:i.NEAREST,[rf]:i.NEAREST_MIPMAP_NEAREST,[Eo]:i.NEAREST_MIPMAP_LINEAR,[$n]:i.LINEAR,[yc]:i.LINEAR_MIPMAP_NEAREST,[Yr]:i.LINEAR_MIPMAP_LINEAR},J={[hf]:i.NEVER,[gf]:i.ALWAYS,[uf]:i.LESS,[Bu]:i.LEQUAL,[df]:i.EQUAL,[mf]:i.GEQUAL,[pf]:i.GREATER,[ff]:i.NOTEQUAL};function L(w,T){if(T.type!==ri||e.has("OES_texture_float_linear")!==!1||T.magFilter!==$n&&T.magFilter!==yc&&T.magFilter!==Eo&&T.magFilter!==Yr&&T.minFilter!==$n&&T.minFilter!==yc&&T.minFilter!==Eo&&T.minFilter!==Yr||Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,V[T.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,V[T.wrapT]),w!==i.TEXTURE_3D&&w!==i.TEXTURE_2D_ARRAY||i.texParameteri(w,i.TEXTURE_WRAP_R,V[T.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,k[T.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,k[T.minFilter]),T.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,J[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mi||T.minFilter!==Eo&&T.minFilter!==Yr||T.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function j(w,T){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",M));let N=T.source,x=d.get(N);x===void 0&&(x={},d.set(N,x));let C=(function(W){let B=[];return B.push(W.wrapS),B.push(W.wrapT),B.push(W.wrapR||0),B.push(W.magFilter),B.push(W.minFilter),B.push(W.anisotropy),B.push(W.internalFormat),B.push(W.format),B.push(W.type),B.push(W.generateMipmaps),B.push(W.premultiplyAlpha),B.push(W.flipY),B.push(W.unpackAlignment),B.push(W.colorSpace),B.join()})(T);if(C!==w.__cacheKey){x[C]===void 0&&(x[C]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),x[C].usedTimes++;let W=x[w.__cacheKey];W!==void 0&&(x[w.__cacheKey].usedTimes--,W.usedTimes===0&&z(T)),w.__cacheKey=C,w.__webglTexture=x[C].texture}return G}function ee(w,T,G){return Math.floor(Math.floor(w/G)/T)}function ce(w,T,G){let N=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(N=i.TEXTURE_3D);let x=j(w,T),C=T.source;t.bindTexture(N,w.__webglTexture,i.TEXTURE0+G);let W=n.get(C);if(C.version!==W.__version||x===!0){t.activeTexture(i.TEXTURE0+G);let B=_t.getPrimaries(_t.workingColorSpace),te=T.colorSpace===Kr?null:_t.getPrimaries(T.colorSpace),q=T.colorSpace===Kr||B===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let K=v(T.image,!1,r.maxTextureSize);K=ke(T,K);let ne=s.convert(T.format,T.colorSpace),le=s.convert(T.type),he,Ae=y(T.internalFormat,ne,le,T.colorSpace,T.isVideoTexture);L(N,T);let Be=T.mipmaps,Xe=T.isVideoTexture!==!0,st=W.__version===void 0||x===!0,rt=C.dataReady,gt=R(T,K);if(T.isDepthTexture)Ae=b(T.format===To,T.type),st&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Ae,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ae,K.width,K.height,0,ne,le,null));else if(T.isDataTexture)if(Be.length>0){Xe&&st&&t.texStorage2D(i.TEXTURE_2D,gt,Ae,Be[0].width,Be[0].height);for(let Ue=0,Ke=Be.length;Ue<Ke;Ue++)he=Be[Ue],Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,Ue,0,0,he.width,he.height,ne,le,he.data):t.texImage2D(i.TEXTURE_2D,Ue,Ae,he.width,he.height,0,ne,le,he.data);T.generateMipmaps=!1}else Xe?(st&&t.texStorage2D(i.TEXTURE_2D,gt,Ae,K.width,K.height),rt&&(function(Ue,Ke,nt,Nt){let we=Ue.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ke.width,Ke.height,nt,Nt,Ke.data);else{we.sort((kt,zt)=>kt.start-zt.start);let yt=0;for(let kt=1;kt<we.length;kt++){let zt=we[yt],O=we[kt],ai=zt.start+zt.count,oi=ee(O.start,Ke.width,4),Lt=ee(zt.start,Ke.width,4);O.start<=ai+1&&oi===Lt&&ee(O.start+O.count-1,Ke.width,4)===oi?zt.count=Math.max(zt.count,O.start+O.count-zt.start):(++yt,we[yt]=O)}we.length=yt+1;let xt=i.getParameter(i.UNPACK_ROW_LENGTH),Wn=i.getParameter(i.UNPACK_SKIP_PIXELS),sn=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,Ke.width);for(let kt=0,zt=we.length;kt<zt;kt++){let O=we[kt],ai=Math.floor(O.start/4),oi=Math.ceil(O.count/4),Lt=ai%Ke.width,sr=Math.floor(ai/Ke.width),Cr=oi;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,sr),t.texSubImage2D(i.TEXTURE_2D,0,Lt,sr,Cr,1,nt,Nt,Ke.data)}Ue.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Wn),i.pixelStorei(i.UNPACK_SKIP_ROWS,sn)}})(T,K,ne,le)):t.texImage2D(i.TEXTURE_2D,0,Ae,K.width,K.height,0,ne,le,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xe&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ae,Be[0].width,Be[0].height,K.depth);for(let Ue=0,Ke=Be.length;Ue<Ke;Ue++)if(he=Be[Ue],T.format!==si)if(ne!==null)if(Xe){if(rt)if(T.layerUpdates.size>0){let nt=Vu(he.width,he.height,T.format,T.type);for(let Nt of T.layerUpdates){let we=he.data.subarray(Nt*nt/he.data.BYTES_PER_ELEMENT,(Nt+1)*nt/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ue,0,0,Nt,he.width,he.height,1,ne,we)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Ue,0,0,0,he.width,he.height,K.depth,ne,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Ue,Ae,he.width,he.height,K.depth,0,he.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?rt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Ue,0,0,0,he.width,he.height,K.depth,ne,le,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Ue,Ae,he.width,he.height,K.depth,0,ne,le,he.data)}else{Xe&&st&&t.texStorage2D(i.TEXTURE_2D,gt,Ae,Be[0].width,Be[0].height);for(let Ue=0,Ke=Be.length;Ue<Ke;Ue++)he=Be[Ue],T.format!==si?ne!==null?Xe?rt&&t.compressedTexSubImage2D(i.TEXTURE_2D,Ue,0,0,he.width,he.height,ne,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Ue,Ae,he.width,he.height,0,he.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,Ue,0,0,he.width,he.height,ne,le,he.data):t.texImage2D(i.TEXTURE_2D,Ue,Ae,he.width,he.height,0,ne,le,he.data)}else if(T.isDataArrayTexture)if(Xe){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,gt,Ae,K.width,K.height,K.depth),rt)if(T.layerUpdates.size>0){let Ue=Vu(K.width,K.height,T.format,T.type);for(let Ke of T.layerUpdates){let nt=K.data.subarray(Ke*Ue/K.data.BYTES_PER_ELEMENT,(Ke+1)*Ue/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ke,K.width,K.height,1,ne,le,nt)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ne,le,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,K.width,K.height,K.depth,0,ne,le,K.data);else if(T.isData3DTexture)Xe?(st&&t.texStorage3D(i.TEXTURE_3D,gt,Ae,K.width,K.height,K.depth),rt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ne,le,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,K.width,K.height,K.depth,0,ne,le,K.data);else if(T.isFramebufferTexture){if(st)if(Xe)t.texStorage2D(i.TEXTURE_2D,gt,Ae,K.width,K.height);else{let Ue=K.width,Ke=K.height;for(let nt=0;nt<gt;nt++)t.texImage2D(i.TEXTURE_2D,nt,Ae,Ue,Ke,0,ne,le,null),Ue>>=1,Ke>>=1}}else if(Be.length>0){if(Xe&&st){let Ue=je(Be[0]);t.texStorage2D(i.TEXTURE_2D,gt,Ae,Ue.width,Ue.height)}for(let Ue=0,Ke=Be.length;Ue<Ke;Ue++)he=Be[Ue],Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,Ue,0,0,ne,le,he):t.texImage2D(i.TEXTURE_2D,Ue,Ae,ne,le,he);T.generateMipmaps=!1}else if(Xe){if(st){let Ue=je(K);t.texStorage2D(i.TEXTURE_2D,gt,Ae,Ue.width,Ue.height)}rt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,le,K)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ne,le,K);m(T)&&_(N),W.__version=C.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function ae(w,T,G,N,x,C){let W=s.convert(G.format,G.colorSpace),B=s.convert(G.type),te=y(G.internalFormat,W,B,G.colorSpace),q=n.get(T),K=n.get(G);if(K.__renderTarget=T,!q.__hasExternalTextures){let ne=Math.max(1,T.width>>C),le=Math.max(1,T.height>>C);x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?t.texImage3D(x,C,te,ne,le,T.depth,0,W,B,null):t.texImage2D(x,C,te,ne,le,0,W,B,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ve(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,x,K.__webglTexture,0,ge(T)):(x===i.TEXTURE_2D||x>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,x,K.__webglTexture,C),t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(w,T,G){if(i.bindRenderbuffer(i.RENDERBUFFER,w),T.depthBuffer){let N=T.depthTexture,x=N&&N.isDepthTexture?N.type:null,C=b(T.stencilBuffer,x),W=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,B=ge(T);ve(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B,C,T.width,T.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,B,C,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,C,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,w)}else{let N=T.textures;for(let x=0;x<N.length;x++){let C=N[x],W=s.convert(C.format,C.colorSpace),B=s.convert(C.type),te=y(C.internalFormat,W,B,C.colorSpace),q=ge(T);G&&ve(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,te,T.width,T.height):ve(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,te,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,te,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!T.depthTexture||!T.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let G=n.get(T.depthTexture);G.__renderTarget=T,G.__webglTexture&&T.depthTexture.image.width===T.width&&T.depthTexture.image.height===T.height||(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);let N=G.__webglTexture,x=ge(T);if(T.depthTexture.format===So)ve(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0);else{if(T.depthTexture.format!==To)throw new Error("Unknown depthTexture format");ve(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0)}}function Ee(w){let T=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==w.depthTexture){let N=w.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),N){let x=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,N.removeEventListener("dispose",x)};N.addEventListener("dispose",x),T.__depthDisposeCallback=x}T.__boundDepthTexture=N}if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");let N=w.texture.mipmaps;N&&N.length>0?ue(T.__webglFramebuffer[0],w):ue(T.__webglFramebuffer,w)}else if(G){T.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[N]),T.__webglDepthbuffer[N]===void 0)T.__webglDepthbuffer[N]=i.createRenderbuffer(),be(T.__webglDepthbuffer[N],w,!1);else{let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=T.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,C)}}else{let N=w.texture.mipmaps;if(N&&N.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),be(T.__webglDepthbuffer,w,!1);else{let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,C)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let pe=[],re=[];function ge(w){return Math.min(r.maxSamples,w.samples)}function ve(w){let T=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ke(w,T){let G=w.colorSpace,N=w.format,x=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==zr&&G!==Kr&&(_t.getTransfer(G)===Ct?N===si&&x===Mi||Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",G)),T}function je(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=function(){let w=I;return w>=r.maxTextures&&Je("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),I+=1,w},this.resetTextureUnits=function(){I=0},this.setTexture2D=X,this.setTexture2DArray=function(w,T){let G=n.get(w);w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version?ce(G,w,T):(w.isExternalTexture&&(G.__webglTexture=w.sourceTexture?w.sourceTexture:null),t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+T))},this.setTexture3D=function(w,T){let G=n.get(w);w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version?ce(G,w,T):t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+T)},this.setTextureCube=function(w,T){let G=n.get(w);w.version>0&&G.__version!==w.version?(function(N,x,C){if(x.image.length!==6)return;let W=j(N,x),B=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+C);let te=n.get(B);if(B.version!==te.__version||W===!0){t.activeTexture(i.TEXTURE0+C);let q=_t.getPrimaries(_t.workingColorSpace),K=x.colorSpace===Kr?null:_t.getPrimaries(x.colorSpace),ne=x.colorSpace===Kr||q===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let le=x.isCompressedTexture||x.image[0].isCompressedTexture,he=x.image[0]&&x.image[0].isDataTexture,Ae=[];for(let we=0;we<6;we++)Ae[we]=le||he?he?x.image[we].image:x.image[we]:v(x.image[we],!0,r.maxCubemapSize),Ae[we]=ke(x,Ae[we]);let Be=Ae[0],Xe=s.convert(x.format,x.colorSpace),st=s.convert(x.type),rt=y(x.internalFormat,Xe,st,x.colorSpace),gt=x.isVideoTexture!==!0,Ue=te.__version===void 0||W===!0,Ke=B.dataReady,nt,Nt=R(x,Be);if(L(i.TEXTURE_CUBE_MAP,x),le){gt&&Ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,rt,Be.width,Be.height);for(let we=0;we<6;we++){nt=Ae[we].mipmaps;for(let yt=0;yt<nt.length;yt++){let xt=nt[yt];x.format!==si?Xe!==null?gt?Ke&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,yt,0,0,xt.width,xt.height,Xe,xt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,yt,rt,xt.width,xt.height,0,xt.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,yt,0,0,xt.width,xt.height,Xe,st,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,yt,rt,xt.width,xt.height,0,Xe,st,xt.data)}}}else{if(nt=x.mipmaps,gt&&Ue){nt.length>0&&Nt++;let we=je(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,rt,we.width,we.height)}for(let we=0;we<6;we++)if(he){gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ae[we].width,Ae[we].height,Xe,st,Ae[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,rt,Ae[we].width,Ae[we].height,0,Xe,st,Ae[we].data);for(let yt=0;yt<nt.length;yt++){let xt=nt[yt].image[we].image;gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,yt+1,0,0,xt.width,xt.height,Xe,st,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,yt+1,rt,xt.width,xt.height,0,Xe,st,xt.data)}}else{gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Xe,st,Ae[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,rt,Xe,st,Ae[we]);for(let yt=0;yt<nt.length;yt++){let xt=nt[yt];gt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,yt+1,0,0,Xe,st,xt.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,yt+1,rt,Xe,st,xt.image[we])}}}m(x)&&_(i.TEXTURE_CUBE_MAP),te.__version=B.version,x.onUpdate&&x.onUpdate(x)}N.__version=x.version})(G,w,T):t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+T)},this.rebindTextures=function(w,T,G){let N=n.get(w);T!==void 0&&ae(N.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ee(w)},this.setupRenderTarget=function(w){let T=w.texture,G=n.get(w),N=n.get(T);w.addEventListener("dispose",U);let x=w.textures,C=w.isWebGLCubeRenderTarget===!0,W=x.length>1;if(W||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=T.version,a.memory.textures++),C){G.__webglFramebuffer=[];for(let B=0;B<6;B++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[B]=[];for(let te=0;te<T.mipmaps.length;te++)G.__webglFramebuffer[B][te]=i.createFramebuffer()}else G.__webglFramebuffer[B]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let B=0;B<T.mipmaps.length;B++)G.__webglFramebuffer[B]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(W)for(let B=0,te=x.length;B<te;B++){let q=n.get(x[B]);q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ve(w)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let B=0;B<x.length;B++){let te=x[B];G.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[B]);let q=s.convert(te.format,te.colorSpace),K=s.convert(te.type),ne=y(te.internalFormat,q,K,te.colorSpace,w.isXRRenderTarget===!0),le=ge(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,le,ne,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+B,i.RENDERBUFFER,G.__webglColorRenderbuffer[B])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),be(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),L(i.TEXTURE_CUBE_MAP,T);for(let B=0;B<6;B++)if(T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)ae(G.__webglFramebuffer[B][te],w,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,te);else ae(G.__webglFramebuffer[B],w,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+B,0);m(T)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(W){for(let B=0,te=x.length;B<te;B++){let q=x[B],K=n.get(q),ne=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,K.__webglTexture),L(ne,q),ae(G.__webglFramebuffer,w,q,i.COLOR_ATTACHMENT0+B,ne,0),m(q)&&_(ne)}t.unbindTexture()}else{let B=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(B=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(B,N.__webglTexture),L(B,T),T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)ae(G.__webglFramebuffer[te],w,T,i.COLOR_ATTACHMENT0,B,te);else ae(G.__webglFramebuffer,w,T,i.COLOR_ATTACHMENT0,B,0);m(T)&&_(B),t.unbindTexture()}w.depthBuffer&&Ee(w)},this.updateRenderTargetMipmap=function(w){let T=w.textures;for(let G=0,N=T.length;G<N;G++){let x=T[G];if(m(x)){let C=g(w),W=n.get(x).__webglTexture;t.bindTexture(C,W),_(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(ve(w)===!1){let T=w.textures,G=w.width,N=w.height,x=i.COLOR_BUFFER_BIT,C=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=n.get(w),B=T.length>1;if(B)for(let q=0;q<T.length;q++)t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,W.__webglMultisampledFramebuffer);let te=w.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglFramebuffer);for(let q=0;q<T.length;q++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(x|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(x|=i.STENCIL_BUFFER_BIT)),B){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let K=n.get(T[q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,G,N,0,0,G,N,x,i.NEAREST),c===!0&&(pe.length=0,re.length=0,pe.push(i.COLOR_ATTACHMENT0+q),w.depthBuffer&&w.resolveDepthBuffer===!1&&(pe.push(C),re.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),B)for(let q=0;q<T.length;q++){t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,W.__webglColorRenderbuffer[q]);let K=n.get(T[q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,W.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,W.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let T=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ve}function F1(i,e){return{convert:function(t,n=Kr){let r,s=_t.getTransfer(n);if(t===Mi)return i.UNSIGNED_BYTE;if(t===xc)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Mc)return i.UNSIGNED_SHORT_5_5_5_1;if(t===ru)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===su)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===nu)return i.BYTE;if(t===iu)return i.SHORT;if(t===aa)return i.UNSIGNED_SHORT;if(t===_c)return i.INT;if(t===Zr)return i.UNSIGNED_INT;if(t===ri)return i.FLOAT;if(t===Jr)return i.HALF_FLOAT;if(t===sf)return i.ALPHA;if(t===af)return i.RGB;if(t===si)return i.RGBA;if(t===So)return i.DEPTH_COMPONENT;if(t===To)return i.DEPTH_STENCIL;if(t===bc)return i.RED;if(t===Ec)return i.RED_INTEGER;if(t===au)return i.RG;if(t===ou)return i.RG_INTEGER;if(t===lu)return i.RGBA_INTEGER;if(t===Sc||t===Tc||t===wc||t===Rc)if(s===Ct){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Sc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Sc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Tc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===wc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Rc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===cu||t===hu||t===uu||t===du){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===cu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===hu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===uu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===du)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===pu||t===fu||t===mu){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===pu||t===fu)return s===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===mu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===gu||t===vu||t===yu||t===_u||t===xu||t===Mu||t===bu||t===Eu||t===Su||t===Tu||t===wu||t===Ru||t===Au||t===Cu){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===gu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===vu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===yu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===_u)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===xu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Mu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===bu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Eu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Su)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Tu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===wu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Ru)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Au)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===Cu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Pu||t===Iu||t===Lu){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Pu)return s===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===Iu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===Lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Du||t===Uu||t===Nu||t===ku){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Du)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Nu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===ku)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===oa?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var td=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ro(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Pn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new H(new vt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nd=class extends Wi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,v=typeof XRWebGLBinding<"u",m=new td,_={},g=t.getContextAttributes(),y=null,b=null,R=[],M=[],U=new de,z=null,I=new tn;I.viewport=new bt;let X=new tn;X.viewport=new bt;let V=[I,X],k=new oc,J=null,L=null;function j(re){let ge=M.indexOf(re.inputSource);if(ge===-1)return;let ve=R[ge];ve!==void 0&&(ve.update(re.inputSource,re.frame,l||a),ve.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",ce);for(let re=0;re<R.length;re++){let ge=M[re];ge!==null&&(M[re]=null,R[re].disconnect(ge))}J=null,L=null,m.reset();for(let re in _)delete _[re];e.setRenderTarget(y),p=null,d=null,u=null,r=null,b=null,pe.stop(),n.isPresenting=!1,e.setPixelRatio(z),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}function ce(re){for(let ge=0;ge<re.removed.length;ge++){let ve=re.removed[ge],ke=M.indexOf(ve);ke>=0&&(M[ke]=null,R[ke].disconnect(ve))}for(let ge=0;ge<re.added.length;ge++){let ve=re.added[ge],ke=M.indexOf(ve);if(ke===-1){for(let w=0;w<R.length;w++){if(w>=M.length){M.push(ve),ke=w;break}if(M[w]===null){M[w]=ve,ke=w;break}}if(ke===-1)break}let je=R[ke];je&&je.connect(ve)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=R[re];return ge===void 0&&(ge=new Ys,R[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=R[re];return ge===void 0&&(ge=new Ys,R[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=R[re];return ge===void 0&&(ge=new Ys,R[re]=ge),ge.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",ce),g.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(U),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ve=null,ke=null;g.depth&&(ke=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=g.stencil?To:So,ve=g.stencil?oa:Zr);let je={colorFormat:t.RGBA8,depthFormat:ke,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(je),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new gi(d.textureWidth,d.textureHeight,{format:si,type:Mi,depthTexture:new io(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new gi(p.framebufferWidth,p.framebufferHeight,{format:si,type:Mi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),pe.setContext(r),pe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let ae=new S,be=new S;function ue(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ge=re.near,ve=re.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(ve=m.depthFar)),k.near=X.near=I.near=ge,k.far=X.far=I.far=ve,J===k.near&&L===k.far||(r.updateRenderState({depthNear:k.near,depthFar:k.far}),J=k.near,L=k.far),k.layers.mask=6|re.layers.mask,I.layers.mask=3&k.layers.mask,X.layers.mask=5&k.layers.mask;let ke=re.parent,je=k.cameras;ue(k,ke);for(let w=0;w<je.length;w++)ue(je[w],ke);je.length===2?(function(w,T,G){ae.setFromMatrixPosition(T.matrixWorld),be.setFromMatrixPosition(G.matrixWorld);let N=ae.distanceTo(be),x=T.projectionMatrix.elements,C=G.projectionMatrix.elements,W=x[14]/(x[10]-1),B=x[14]/(x[10]+1),te=(x[9]+1)/x[5],q=(x[9]-1)/x[5],K=(x[8]-1)/x[0],ne=(C[8]+1)/C[0],le=W*K,he=W*ne,Ae=N/(-K+ne),Be=Ae*-K;if(T.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Be),w.translateZ(Ae),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),x[10]===-1)w.projectionMatrix.copy(T.projectionMatrix),w.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let Xe=W+Ae,st=B+Ae,rt=le-Be,gt=he+(N-Be),Ue=te*B/st*Xe,Ke=q*B/st*Xe;w.projectionMatrix.makePerspective(rt,gt,Ue,Ke,Xe,st),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(k,I,X):k.projectionMatrix.copy(I.projectionMatrix),(function(w,T,G){G===null?w.matrix.copy(T.matrixWorld):(w.matrix.copy(G.matrixWorld),w.matrix.invert(),w.matrix.multiply(T.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(T.projectionMatrix),w.projectionMatrixInverse.copy(T.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Xs*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(re,k,ke)},this.getCamera=function(){return k},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(re){c=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(re){return _[re]};let Ee=null,pe=new $f;pe.setAnimationLoop(function(re,ge){if(h=ge.getViewerPose(l||a),f=ge,h!==null){let ve=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let ke=!1;ve.length!==k.cameras.length&&(k.cameras.length=0,ke=!0);for(let w=0;w<ve.length;w++){let T=ve[w],G=null;if(p!==null)G=p.getViewport(T);else{let x=u.getViewSubImage(d,T);G=x.viewport,w===0&&(e.setRenderTargetTextures(b,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(b))}let N=V[w];N===void 0&&(N=new tn,N.layers.enable(w),N.viewport=new bt,V[w]=N),N.matrix.fromArray(T.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(T.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(G.x,G.y,G.width,G.height),w===0&&(k.matrix.copy(N.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ke===!0&&k.cameras.push(N)}let je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let w=u.getDepthInformation(ve[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if(je&&je.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let w=0;w<ve.length;w++){let T=ve[w].camera;if(T){let G=_[T];G||(G=new ro,_[T]=G);let N=u.getCameraImage(T);G.sourceTexture=N}}}}for(let ve=0;ve<R.length;ve++){let ke=M[ve],je=R[ve];ke!==null&&je!==void 0&&je.update(ke,ge,l||a)}Ee&&Ee(re,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),f=null}),this.setAnimationLoop=function(re){Ee=re},this.dispose=function(){}}},ts=new ii,O1=new tt;function H1(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Sn&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Sn&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,ts.copy(c),ts.x*=-1,ts.y*=-1,ts.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),r.envMapRotation.value.setFromMatrix4(O1.makeRotationFromEuler(ts)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Hu(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Sn&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function G1(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let _=f[m];if(typeof v=="number"||typeof v=="boolean"){if(_!==v)return f[m]=v,!0}else if(_.equals(v)===!1)return _.copy(v),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(m){let _=m.uniforms,g=0,y=16;for(let R=0,M=_.length;R<M;R++){let U=Array.isArray(_[R])?_[R]:[_[R]];for(let z=0,I=U.length;z<I;z++){let X=U[z],V=Array.isArray(X.value)?X.value:[X.value];for(let k=0,J=V.length;k<J;k++){let L=l(V[k]),j=g%y,ee=j%L.boundary,ce=j+ee;g+=ee,ce!==0&&y-ce<L.storage&&(g+=y-ce),X.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=g,g+=L.storage}}}let b=g%y;b>0&&(g+=y-b),m.__size=g,m.__cache={}})(u),p=(function(m){let _=(function(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=_;let g=i.createBuffer(),y=m.__size,b=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,g),g})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&((function(m){let _=r[m.id],g=m.uniforms,y=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,R=g.length;b<R;b++){let M=Array.isArray(g[b])?g[b]:[g[b]];for(let U=0,z=M.length;U<z;U++){let I=M[U];if(c(I,b,U,y)===!0){let X=I.__offset,V=Array.isArray(I.value)?I.value:[I.value],k=0;for(let J=0;J<V.length;J++){let L=V[J],j=l(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,X+k,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):(L.toArray(I.__data,k),k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var z1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),Zi=null,ha=class{constructor(e={}){let{canvas:t=vf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Set([lu,ou,Ec]),v=new Set([Mi,Zr,aa,oa,xc,Mc]),m=new Uint32Array(4),_=new Int32Array(4),g=null,y=null,b=[],R=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,U=!1;this._outputColorSpace=At;let z=0,I=0,X=null,V=-1,k=null,J=new bt,L=new bt,j=null,ee=new et(0),ce=0,ae=t.width,be=t.height,ue=1,Ee=null,pe=null,re=new bt(0,0,ae,be),ge=new bt(0,0,ae,be),ve=!1,ke=new xr,je=!1,w=!1,T=new tt,G=new S,N=new bt,x={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},C=!1;function W(){return X===null?ue:1}let B,te,q,K,ne,le,he,Ae,Be,Xe,st,rt,gt,Ue,Ke,nt,Nt,we,yt,xt,Wn,sn,kt,zt,O=n;function ai(A,Z){return t.getContext(A,Z)}try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",sr,!1),t.addEventListener("webglcontextrestored",Cr,!1),t.addEventListener("webglcontextcreationerror",ps,!1),O===null){let Z="webgl2";if(O=ai(Z,A),O===null)throw ai(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw A("WebGLRenderer: "+A.message),A}function oi(){B=new Eg(O),B.init(),sn=new F1(O,B),te=new yg(O,B,e,sn),q=new k1(O,B),te.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),K=new wg(O),ne=new w1,le=new B1(O,B,q,ne,te,sn,K),he=new xg(M),Ae=new bg(M),Be=new pg(O),kt=new gg(O,Be),Xe=new Sg(O,Be,K,kt),st=new Ag(O,Xe,Be,K),yt=new Rg(O,te,le),nt=new _g(ne),rt=new T1(M,he,Ae,B,te,kt,nt),gt=new H1(M,ne),Ue=new A1,Ke=new D1(B),we=new mg(M,he,Ae,q,st,p,c),Nt=new U1(M,st,te),zt=new G1(O,K,te,q),xt=new vg(O,B,K),Wn=new Tg(O,B,K),K.programs=rt.programs,M.capabilities=te,M.extensions=B,M.properties=ne,M.renderLists=Ue,M.shadowMap=Nt,M.state=q,M.info=K}oi();let Lt=new nd(M,O);function sr(A){A.preventDefault(),qa("WebGLRenderer: Context Lost."),U=!0}function Cr(){qa("WebGLRenderer: Context Restored."),U=!1;let A=K.autoReset,Z=Nt.enabled,ie=Nt.autoUpdate,oe=Nt.needsUpdate,Q=Nt.type;oi(),K.autoReset=A,Nt.enabled=Z,Nt.autoUpdate=ie,Nt.needsUpdate=oe,Nt.type=Q}function ps(A){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ma(A){let Z=A.target;Z.removeEventListener("dispose",Ma),(function(ie){(function(oe){let Q=ne.get(oe).programs;Q!==void 0&&(Q.forEach(function(fe){rt.releaseProgram(fe)}),oe.isShaderMaterial&&rt.releaseShaderCache(oe))})(ie),ne.remove(ie)})(Z)}function fs(A,Z,ie){A.transparent===!0&&A.side===Et&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,Dr(A,Z,ie),A.side=na,A.needsUpdate=!0,Dr(A,Z,ie),A.side=Et):Dr(A,Z,ie)}this.xr=Lt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=B.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=B.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(A){A!==void 0&&(ue=A,this.setSize(ae,be,!1))},this.getSize=function(A){return A.set(ae,be)},this.setSize=function(A,Z,ie=!0){Lt.isPresenting?Je("WebGLRenderer: Can't change size while VR device is presenting."):(ae=A,be=Z,t.width=Math.floor(A*ue),t.height=Math.floor(Z*ue),ie===!0&&(t.style.width=A+"px",t.style.height=Z+"px"),this.setViewport(0,0,A,Z))},this.getDrawingBufferSize=function(A){return A.set(ae*ue,be*ue).floor()},this.setDrawingBufferSize=function(A,Z,ie){ae=A,be=Z,ue=ie,t.width=Math.floor(A*ie),t.height=Math.floor(Z*ie),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(J)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,Z,ie,oe){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,Z,ie,oe),q.viewport(J.copy(re).multiplyScalar(ue).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,Z,ie,oe){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,Z,ie,oe),q.scissor(L.copy(ge).multiplyScalar(ue).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(A){q.setScissorTest(ve=A)},this.setOpaqueSort=function(A){Ee=A},this.setTransparentSort=function(A){pe=A},this.getClearColor=function(A){return A.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,ie=!0){let oe=0;if(A){let Q=!1;if(X!==null){let fe=X.texture.format;Q=f.has(fe)}if(Q){let fe=X.texture.type,Ce=v.has(fe),Le=we.getClearColor(),Fe=we.getClearAlpha(),$e=Le.r,We=Le.g,Ye=Le.b;Ce?(m[0]=$e,m[1]=We,m[2]=Ye,m[3]=Fe,O.clearBufferuiv(O.COLOR,0,m)):(_[0]=$e,_[1]=We,_[2]=Ye,_[3]=Fe,O.clearBufferiv(O.COLOR,0,_))}else oe|=O.COLOR_BUFFER_BIT}Z&&(oe|=O.DEPTH_BUFFER_BIT),ie&&(oe|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",sr,!1),t.removeEventListener("webglcontextrestored",Cr,!1),t.removeEventListener("webglcontextcreationerror",ps,!1),we.dispose(),Ue.dispose(),Ke.dispose(),ne.dispose(),he.dispose(),Ae.dispose(),st.dispose(),kt.dispose(),zt.dispose(),rt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",ba),Lt.removeEventListener("sessionend",Ir),Ot.stop()},this.renderBufferDirect=function(A,Z,ie,oe,Q,fe){Z===null&&(Z=x);let Ce=Q.isMesh&&Q.matrixWorld.determinant()<0,Le=(function(Qe,It,Wt,ot,Ze){It.isScene!==!0&&(It=x),le.resetTextureUnits();let an=It.fog,gs=ot.isMeshStandardMaterial?It.environment:null,Nr=X===null?M.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:zr,_n=(ot.isMeshStandardMaterial?Ae:he).get(ot.envMap||gs),Ln=ot.vertexColors===!0&&!!Wt.attributes.color&&Wt.attributes.color.itemSize===4,Ui=!!Wt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Dn=!!Wt.morphAttributes.position,Un=!!Wt.morphAttributes.normal,Ni=!!Wt.morphAttributes.color,Ta=Yi;ot.toneMapped&&(X!==null&&X.isXRRenderTarget!==!0||(Ta=M.toneMapping));let ar=Wt.morphAttributes.position||Wt.morphAttributes.normal||Wt.morphAttributes.color,vs=ar!==void 0?ar.length:0,dt=ne.get(ot),lh=y.state.lights;if(je===!0&&(w===!0||Qe!==k)){let en=Qe===k&&ot.id===V;nt.setState(ot,Qe,en)}let Nn=!1;ot.version===dt.__version?dt.needsLights&&dt.lightsStateVersion!==lh.state.version||dt.outputColorSpace!==Nr||Ze.isBatchedMesh&&dt.batching===!1?Nn=!0:Ze.isBatchedMesh||dt.batching!==!0?Ze.isBatchedMesh&&dt.batchingColor===!0&&Ze.colorTexture===null||Ze.isBatchedMesh&&dt.batchingColor===!1&&Ze.colorTexture!==null||Ze.isInstancedMesh&&dt.instancing===!1?Nn=!0:Ze.isInstancedMesh||dt.instancing!==!0?Ze.isSkinnedMesh&&dt.skinning===!1?Nn=!0:Ze.isSkinnedMesh||dt.skinning!==!0?Ze.isInstancedMesh&&dt.instancingColor===!0&&Ze.instanceColor===null||Ze.isInstancedMesh&&dt.instancingColor===!1&&Ze.instanceColor!==null||Ze.isInstancedMesh&&dt.instancingMorph===!0&&Ze.morphTexture===null||Ze.isInstancedMesh&&dt.instancingMorph===!1&&Ze.morphTexture!==null||dt.envMap!==_n||ot.fog===!0&&dt.fog!==an?Nn=!0:dt.numClippingPlanes===void 0||dt.numClippingPlanes===nt.numPlanes&&dt.numIntersection===nt.numIntersection?(dt.vertexAlphas!==Ln||dt.vertexTangents!==Ui||dt.morphTargets!==Dn||dt.morphNormals!==Un||dt.morphColors!==Ni||dt.toneMapping!==Ta||dt.morphTargetsCount!==vs)&&(Nn=!0):Nn=!0:Nn=!0:Nn=!0:Nn=!0:(Nn=!0,dt.__version=ot.version);let kn=dt.currentProgram;Nn===!0&&(kn=Dr(ot,It,Ze));let ys=!1,or=!1,lr=!1,qt=kn.getUniforms(),wn=dt.uniforms;if(q.useProgram(kn.program)&&(ys=!0,or=!0,lr=!0),ot.id!==V&&(V=ot.id,or=!0),ys||k!==Qe){q.buffers.depth.getReversed()&&Qe.reversedDepth!==!0&&(Qe._reversedDepth=!0,Qe.updateProjectionMatrix()),qt.setValue(O,"projectionMatrix",Qe.projectionMatrix),qt.setValue(O,"viewMatrix",Qe.matrixWorldInverse);let en=qt.map.cameraPosition;en!==void 0&&en.setValue(O,G.setFromMatrixPosition(Qe.matrixWorld)),te.logarithmicDepthBuffer&&qt.setValue(O,"logDepthBufFC",2/(Math.log(Qe.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&qt.setValue(O,"isOrthographic",Qe.isOrthographicCamera===!0),k!==Qe&&(k=Qe,or=!0,lr=!0)}if(Ze.isSkinnedMesh){qt.setOptional(O,Ze,"bindMatrix"),qt.setOptional(O,Ze,"bindMatrixInverse");let en=Ze.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),qt.setValue(O,"boneTexture",en.boneTexture,le))}Ze.isBatchedMesh&&(qt.setOptional(O,Ze,"batchingTexture"),qt.setValue(O,"batchingTexture",Ze._matricesTexture,le),qt.setOptional(O,Ze,"batchingIdTexture"),qt.setValue(O,"batchingIdTexture",Ze._indirectTexture,le),qt.setOptional(O,Ze,"batchingColorTexture"),Ze._colorsTexture!==null&&qt.setValue(O,"batchingColorTexture",Ze._colorsTexture,le));let _s=Wt.morphAttributes;_s.position===void 0&&_s.normal===void 0&&_s.color===void 0||yt.update(Ze,Wt,kn),(or||dt.receiveShadow!==Ze.receiveShadow)&&(dt.receiveShadow=Ze.receiveShadow,qt.setValue(O,"receiveShadow",Ze.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(wn.envMap.value=_n,wn.flipEnvMap.value=_n.isCubeTexture&&_n.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&It.environment!==null&&(wn.envMapIntensity.value=It.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=(Zi===null&&(Zi=new eo(z1,32,32,au,Jr),Zi.minFilter=$n,Zi.magFilter=$n,Zi.wrapS=yr,Zi.wrapT=yr,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi)),or&&(qt.setValue(O,"toneMappingExposure",M.toneMappingExposure),dt.needsLights&&(pn=lr,(Rn=wn).ambientLightColor.needsUpdate=pn,Rn.lightProbe.needsUpdate=pn,Rn.directionalLights.needsUpdate=pn,Rn.directionalLightShadows.needsUpdate=pn,Rn.pointLights.needsUpdate=pn,Rn.pointLightShadows.needsUpdate=pn,Rn.spotLights.needsUpdate=pn,Rn.spotLightShadows.needsUpdate=pn,Rn.rectAreaLights.needsUpdate=pn,Rn.hemisphereLights.needsUpdate=pn),an&&ot.fog===!0&&gt.refreshFogUniforms(wn,an),gt.refreshMaterialUniforms(wn,ot,ue,be,y.state.transmissionRenderTarget[Qe.id]),ca.upload(O,Ur(dt),wn,le));var Rn,pn;if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ca.upload(O,Ur(dt),wn,le),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&qt.setValue(O,"center",Ze.center),qt.setValue(O,"modelViewMatrix",Ze.modelViewMatrix),qt.setValue(O,"normalMatrix",Ze.normalMatrix),qt.setValue(O,"modelMatrix",Ze.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let en=ot.uniformsGroups;for(let wa=0,Ra=en.length;wa<Ra;wa++){let ki=en[wa];zt.update(ki,kn),zt.bind(ki,kn)}}return kn})(A,Z,ie,oe,Q);q.setMaterial(oe,Ce);let Fe=ie.index,$e=1;if(oe.wireframe===!0){if(Fe=Xe.getWireframeAttribute(ie),Fe===void 0)return;$e=2}let We=ie.drawRange,Ye=ie.attributes.position,at=We.start*$e,Dt=(We.start+We.count)*$e;fe!==null&&(at=Math.max(at,fe.start*$e),Dt=Math.min(Dt,(fe.start+fe.count)*$e)),Fe!==null?(at=Math.max(at,0),Dt=Math.min(Dt,Fe.count)):Ye!=null&&(at=Math.max(at,0),Dt=Math.min(Dt,Ye.count));let Vt=Dt-at;if(Vt<0||Vt===1/0)return;let wt;kt.setup(Q,oe,Le,ie,Fe);let Ut=xt;if(Fe!==null&&(wt=Be.get(Fe),Ut=Wn,Ut.setIndex(wt)),Q.isMesh)oe.wireframe===!0?(q.setLineWidth(oe.wireframeLinewidth*W()),Ut.setMode(O.LINES)):Ut.setMode(O.TRIANGLES);else if(Q.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),q.setLineWidth(Qe*W()),Q.isLineSegments?Ut.setMode(O.LINES):Q.isLineLoop?Ut.setMode(O.LINE_LOOP):Ut.setMode(O.LINE_STRIP)}else Q.isPoints?Ut.setMode(O.POINTS):Q.isSprite&&Ut.setMode(O.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ws("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))Ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Qe=Q._multiDrawStarts,It=Q._multiDrawCounts,Wt=Q._multiDrawCount,ot=Fe?Be.get(Fe).bytesPerElement:1,Ze=ne.get(oe).currentProgram.getUniforms();for(let an=0;an<Wt;an++)Ze.setValue(O,"_gl_DrawID",an),Ut.render(Qe[an]/ot,It[an])}else if(Q.isInstancedMesh)Ut.renderInstances(at,Vt,Q.count);else if(ie.isInstancedBufferGeometry){let Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,It=Math.min(ie.instanceCount,Qe);Ut.renderInstances(at,Vt,It)}else Ut.render(at,Vt)},this.compile=function(A,Z,ie=null){ie===null&&(ie=A),y=Ke.get(ie),y.init(Z),R.push(y),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),A!==ie&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();let oe=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let fe=Q.material;if(fe)if(Array.isArray(fe))for(let Ce=0;Ce<fe.length;Ce++){let Le=fe[Ce];fs(Le,ie,Q),oe.add(Le)}else fs(fe,ie,Q),oe.add(fe)}),y=R.pop(),oe},this.compileAsync=function(A,Z,ie=null){let oe=this.compile(A,Z,ie);return new Promise(Q=>{function fe(){oe.forEach(function(Ce){ne.get(Ce).currentProgram.isReady()&&oe.delete(Ce)}),oe.size!==0?setTimeout(fe,10):Q(A)}B.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Pr=null;function ba(){Ot.stop()}function Ir(){Ot.start()}let Ot=new $f;function Li(A,Z,ie,oe){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)ie=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){oe&&N.setFromMatrixPosition(A.matrixWorld).applyMatrix4(T);let fe=st.update(A),Ce=A.material;Ce.visible&&g.push(A,fe,Ce,ie,N.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){let fe=st.update(A),Ce=A.material;if(oe&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),N.copy(A.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),N.copy(fe.boundingSphere.center)),N.applyMatrix4(A.matrixWorld).applyMatrix4(T)),Array.isArray(Ce)){let Le=fe.groups;for(let Fe=0,$e=Le.length;Fe<$e;Fe++){let We=Le[Fe],Ye=Ce[We.materialIndex];Ye&&Ye.visible&&g.push(A,fe,Ye,ie,N.z,We)}}else Ce.visible&&g.push(A,fe,Ce,ie,N.z,null)}}let Q=A.children;for(let fe=0,Ce=Q.length;fe<Ce;fe++)Li(Q[fe],Z,ie,oe)}function ms(A,Z,ie,oe){let{opaque:Q,transmissive:fe,transparent:Ce}=A;y.setupLightsView(ie),je===!0&&nt.setGlobalState(M.clippingPlanes,ie),oe&&q.viewport(J.copy(oe)),Q.length>0&&Lr(Q,Z,ie),fe.length>0&&Lr(fe,Z,ie),Ce.length>0&&Lr(Ce,Z,ie),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function Ea(A,Z,ie,oe){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[oe.id]===void 0&&(y.state.transmissionRenderTarget[oe.id]=new gi(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Jr:Mi,minFilter:Yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let Q=y.state.transmissionRenderTarget[oe.id],fe=oe.viewport||J;Q.setSize(fe.z*M.transmissionResolutionScale,fe.w*M.transmissionResolutionScale);let Ce=M.getRenderTarget(),Le=M.getActiveCubeFace(),Fe=M.getActiveMipmapLevel();M.setRenderTarget(Q),M.getClearColor(ee),ce=M.getClearAlpha(),ce<1&&M.setClearColor(16777215,.5),M.clear(),C&&we.render(ie);let $e=M.toneMapping;M.toneMapping=Yi;let We=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),y.setupLightsView(oe),je===!0&&nt.setGlobalState(M.clippingPlanes,oe),Lr(A,ie,oe),le.updateMultisampleRenderTarget(Q),le.updateRenderTargetMipmap(Q),B.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let at=0,Dt=Z.length;at<Dt;at++){let Vt=Z[at],{object:wt,geometry:Ut,material:Qe,group:It}=Vt;if(Qe.side===Et&&wt.layers.test(oe.layers)){let Wt=Qe.side;Qe.side=Sn,Qe.needsUpdate=!0,li(wt,ie,oe,Ut,Qe,It),Qe.side=Wt,Qe.needsUpdate=!0,Ye=!0}}Ye===!0&&(le.updateMultisampleRenderTarget(Q),le.updateRenderTargetMipmap(Q))}M.setRenderTarget(Ce,Le,Fe),M.setClearColor(ee,ce),We!==void 0&&(oe.viewport=We),M.toneMapping=$e}function Lr(A,Z,ie){let oe=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,fe=A.length;Q<fe;Q++){let Ce=A[Q],{object:Le,geometry:Fe,group:$e}=Ce,We=Ce.material;We.allowOverride===!0&&oe!==null&&(We=oe),Le.layers.test(ie.layers)&&li(Le,Z,ie,Fe,We,$e)}}function li(A,Z,ie,oe,Q,fe){A.onBeforeRender(M,Z,ie,oe,Q,fe),A.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(M,Z,ie,oe,A,fe),Q.transparent===!0&&Q.side===Et&&Q.forceSinglePass===!1?(Q.side=Sn,Q.needsUpdate=!0,M.renderBufferDirect(ie,Z,oe,Q,A,fe),Q.side=na,Q.needsUpdate=!0,M.renderBufferDirect(ie,Z,oe,Q,A,fe),Q.side=Et):M.renderBufferDirect(ie,Z,oe,Q,A,fe),A.onAfterRender(M,Z,ie,oe,Q,fe)}function Dr(A,Z,ie){Z.isScene!==!0&&(Z=x);let oe=ne.get(A),Q=y.state.lights,fe=y.state.shadowsArray,Ce=Q.state.version,Le=rt.getParameters(A,Q.state,fe,Z,ie),Fe=rt.getProgramCacheKey(Le),$e=oe.programs;oe.environment=A.isMeshStandardMaterial?Z.environment:null,oe.fog=Z.fog,oe.envMap=(A.isMeshStandardMaterial?Ae:he).get(A.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",Ma),$e=new Map,oe.programs=$e);let We=$e.get(Fe);if(We!==void 0){if(oe.currentProgram===We&&oe.lightsStateVersion===Ce)return Sa(A,Le),We}else Le.uniforms=rt.getUniforms(A),A.onBeforeCompile(Le,M),We=rt.acquireProgram(Le,Fe),$e.set(Fe,We),oe.uniforms=Le.uniforms;let Ye=oe.uniforms;return(A.isShaderMaterial||A.isRawShaderMaterial)&&A.clipping!==!0||(Ye.clippingPlanes=nt.uniform),Sa(A,Le),oe.needsLights=(function(at){return at.isMeshLambertMaterial||at.isMeshToonMaterial||at.isMeshPhongMaterial||at.isMeshStandardMaterial||at.isShadowMaterial||at.isShaderMaterial&&at.lights===!0})(A),oe.lightsStateVersion=Ce,oe.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.directionalShadowMap.value=Q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotShadowMap.value=Q.state.spotShadowMap,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMap.value=Q.state.pointShadowMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),oe.currentProgram=We,oe.uniformsList=null,We}function Ur(A){if(A.uniformsList===null){let Z=A.currentProgram.getUniforms();A.uniformsList=ca.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Sa(A,Z){let ie=ne.get(A);ie.outputColorSpace=Z.outputColorSpace,ie.batching=Z.batching,ie.batchingColor=Z.batchingColor,ie.instancing=Z.instancing,ie.instancingColor=Z.instancingColor,ie.instancingMorph=Z.instancingMorph,ie.skinning=Z.skinning,ie.morphTargets=Z.morphTargets,ie.morphNormals=Z.morphNormals,ie.morphColors=Z.morphColors,ie.morphTargetsCount=Z.morphTargetsCount,ie.numClippingPlanes=Z.numClippingPlanes,ie.numIntersection=Z.numClipIntersection,ie.vertexAlphas=Z.vertexAlphas,ie.vertexTangents=Z.vertexTangents,ie.toneMapping=Z.toneMapping}Ot.setAnimationLoop(function(A){Pr&&Pr(A)}),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(A){Pr=A,Lt.setAnimationLoop(A),A===null?Ot.stop():Ot.start()},Lt.addEventListener("sessionstart",ba),Lt.addEventListener("sessionend",Ir),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0)return void ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(U===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Z),Z=Lt.getCamera()),A.isScene===!0&&A.onBeforeRender(M,A,Z,X),y=Ke.get(A,R.length),y.init(Z),R.push(y),T.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),ke.setFromProjectionMatrix(T,Vi,Z.reversedDepth),w=this.localClippingEnabled,je=nt.init(this.clippingPlanes,w),g=Ue.get(A,b.length),g.init(),b.push(g),Lt.enabled===!0&&Lt.isPresenting===!0){let fe=M.xr.getDepthSensingMesh();fe!==null&&Li(fe,Z,-1/0,M.sortObjects)}Li(A,Z,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(Ee,pe),C=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,C&&we.addToRenderList(g,A),this.info.render.frame++,je===!0&&nt.beginShadows();let ie=y.state.shadowsArray;Nt.render(ie,A,Z),je===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=g.opaque,Q=g.transmissive;if(y.setupLights(),Z.isArrayCamera){let fe=Z.cameras;if(Q.length>0)for(let Ce=0,Le=fe.length;Ce<Le;Ce++)Ea(oe,Q,A,fe[Ce]);C&&we.render(A);for(let Ce=0,Le=fe.length;Ce<Le;Ce++){let Fe=fe[Ce];ms(g,A,Fe,Fe.viewport)}}else Q.length>0&&Ea(oe,Q,A,Z),C&&we.render(A),ms(g,A,Z);X!==null&&I===0&&(le.updateMultisampleRenderTarget(X),le.updateRenderTargetMipmap(X)),A.isScene===!0&&A.onAfterRender(M,A,Z),kt.resetDefaultState(),V=-1,k=null,R.pop(),R.length>0?(y=R[R.length-1],je===!0&&nt.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,b.pop(),g=b.length>0?b[b.length-1]:null},this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(A,Z,ie){let oe=ne.get(A);oe.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ne.get(A.texture).__webglTexture=Z,ne.get(A.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ie,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){let ie=ne.get(A);ie.__webglFramebuffer=Z,ie.__useDefaultFramebuffer=Z===void 0};let ci=O.createFramebuffer();this.setRenderTarget=function(A,Z=0,ie=0){X=A,z=Z,I=ie;let oe=!0,Q=null,fe=!1,Ce=!1;if(A){let Le=ne.get(A);if(Le.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(O.FRAMEBUFFER,null),oe=!1;else if(Le.__webglFramebuffer===void 0)le.setupRenderTarget(A);else if(Le.__hasExternalTextures)le.rebindTextures(A,ne.get(A.texture).__webglTexture,ne.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let We=A.depthTexture;if(Le.__boundDepthTexture!==We){if(We!==null&&ne.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(A)}}let Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ce=!0);let $e=ne.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Q=Array.isArray($e[Z])?$e[Z][ie]:$e[Z],fe=!0):Q=A.samples>0&&le.useMultisampledRTT(A)===!1?ne.get(A).__webglMultisampledFramebuffer:Array.isArray($e)?$e[ie]:$e,J.copy(A.viewport),L.copy(A.scissor),j=A.scissorTest}else J.copy(re).multiplyScalar(ue).floor(),L.copy(ge).multiplyScalar(ue).floor(),j=ve;if(ie!==0&&(Q=ci),q.bindFramebuffer(O.FRAMEBUFFER,Q)&&oe&&q.drawBuffers(A,Q),q.viewport(J),q.scissor(L),q.setScissorTest(j),fe){let Le=ne.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Le.__webglTexture,ie)}else if(Ce){let Le=Z;for(let Fe=0;Fe<A.textures.length;Fe++){let $e=ne.get(A.textures[Fe]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Fe,$e.__webglTexture,ie,Le)}}else if(A!==null&&ie!==0){let Le=ne.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Le.__webglTexture,ie)}V=-1},this.readRenderTargetPixels=function(A,Z,ie,oe,Q,fe,Ce,Le=0){if(!A||!A.isWebGLRenderTarget)return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){q.bindFramebuffer(O.FRAMEBUFFER,Fe);try{let $e=A.textures[Le],We=$e.format,Ye=$e.type;if(!te.textureFormatReadable(We))return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ye))return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Z>=0&&Z<=A.width-oe&&ie>=0&&ie<=A.height-Q&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(Z,ie,oe,Q,sn.convert(We),sn.convert(Ye),fe))}finally{let $e=X!==null?ne.get(X).__webglFramebuffer:null;q.bindFramebuffer(O.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,Z,ie,oe,Q,fe,Ce,Le=0){if(!A||!A.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=ne.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Fe=Fe[Ce]),Fe){if(Z>=0&&Z<=A.width-oe&&ie>=0&&ie<=A.height-Q){q.bindFramebuffer(O.FRAMEBUFFER,Fe);let $e=A.textures[Le],We=$e.format,Ye=$e.type;if(!te.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.bufferData(O.PIXEL_PACK_BUFFER,fe.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Le),O.readPixels(Z,ie,oe,Q,sn.convert(We),sn.convert(Ye),0);let Dt=X!==null?ne.get(X).__webglFramebuffer:null;q.bindFramebuffer(O.FRAMEBUFFER,Dt);let Vt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await yf(O,Vt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,at),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,fe),O.deleteBuffer(at),O.deleteSync(Vt),fe}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,Z=null,ie=0){let oe=Math.pow(2,-ie),Q=Math.floor(A.image.width*oe),fe=Math.floor(A.image.height*oe),Ce=Z!==null?Z.x:0,Le=Z!==null?Z.y:0;le.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,ie,0,0,Ce,Le,Q,fe),q.unbindTexture()};let Xo=O.createFramebuffer(),Di=O.createFramebuffer();this.copyTextureToTexture=function(A,Z,ie=null,oe=null,Q=0,fe=null){let Ce,Le,Fe,$e,We,Ye,at,Dt,Vt;fe===null&&(Q!==0?(Ws("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=Q,Q=0):fe=0);let wt=A.isCompressedTexture?A.mipmaps[fe]:A.image;if(ie!==null)Ce=ie.max.x-ie.min.x,Le=ie.max.y-ie.min.y,Fe=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,We=ie.min.y,Ye=ie.isBox3?ie.min.z:0;else{let Ln=Math.pow(2,-Q);Ce=Math.floor(wt.width*Ln),Le=Math.floor(wt.height*Ln),Fe=A.isDataArrayTexture?wt.depth:A.isData3DTexture?Math.floor(wt.depth*Ln):1,$e=0,We=0,Ye=0}oe!==null?(at=oe.x,Dt=oe.y,Vt=oe.z):(at=0,Dt=0,Vt=0);let Ut=sn.convert(Z.format),Qe=sn.convert(Z.type),It;Z.isData3DTexture?(le.setTexture3D(Z,0),It=O.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(le.setTexture2DArray(Z,0),It=O.TEXTURE_2D_ARRAY):(le.setTexture2D(Z,0),It=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Z.unpackAlignment);let Wt=O.getParameter(O.UNPACK_ROW_LENGTH),ot=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Ze=O.getParameter(O.UNPACK_SKIP_PIXELS),an=O.getParameter(O.UNPACK_SKIP_ROWS),gs=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,wt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,wt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$e),O.pixelStorei(O.UNPACK_SKIP_ROWS,We),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);let Nr=A.isDataArrayTexture||A.isData3DTexture,_n=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){let Ln=ne.get(A),Ui=ne.get(Z),Dn=ne.get(Ln.__renderTarget),Un=ne.get(Ui.__renderTarget);q.bindFramebuffer(O.READ_FRAMEBUFFER,Dn.__webglFramebuffer),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let Ni=0;Ni<Fe;Ni++)Nr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.get(A).__webglTexture,Q,Ye+Ni),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ne.get(Z).__webglTexture,fe,Vt+Ni)),O.blitFramebuffer($e,We,Ce,Le,at,Dt,Ce,Le,O.DEPTH_BUFFER_BIT,O.NEAREST);q.bindFramebuffer(O.READ_FRAMEBUFFER,null),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||ne.has(A)){let Ln=ne.get(A),Ui=ne.get(Z);q.bindFramebuffer(O.READ_FRAMEBUFFER,Xo),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,Di);for(let Dn=0;Dn<Fe;Dn++)Nr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ln.__webglTexture,Q,Ye+Dn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ln.__webglTexture,Q),_n?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ui.__webglTexture,fe,Vt+Dn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ui.__webglTexture,fe),Q!==0?O.blitFramebuffer($e,We,Ce,Le,at,Dt,Ce,Le,O.COLOR_BUFFER_BIT,O.NEAREST):_n?O.copyTexSubImage3D(It,fe,at,Dt,Vt+Dn,$e,We,Ce,Le):O.copyTexSubImage2D(It,fe,at,Dt,$e,We,Ce,Le);q.bindFramebuffer(O.READ_FRAMEBUFFER,null),q.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else _n?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(It,fe,at,Dt,Vt,Ce,Le,Fe,Ut,Qe,wt.data):Z.isCompressedArrayTexture?O.compressedTexSubImage3D(It,fe,at,Dt,Vt,Ce,Le,Fe,Ut,wt.data):O.texSubImage3D(It,fe,at,Dt,Vt,Ce,Le,Fe,Ut,Qe,wt):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,fe,at,Dt,Ce,Le,Ut,Qe,wt.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,fe,at,Dt,wt.width,wt.height,Ut,wt.data):O.texSubImage2D(O.TEXTURE_2D,fe,at,Dt,Ce,Le,Ut,Qe,wt);O.pixelStorei(O.UNPACK_ROW_LENGTH,Wt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ot),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,an),O.pixelStorei(O.UNPACK_SKIP_IMAGES,gs),fe===0&&Z.generateMipmaps&&O.generateMipmap(It),q.unbindTexture()},this.initRenderTarget=function(A){ne.get(A).__webglFramebuffer===void 0&&le.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?le.setTextureCube(A,0):A.isData3DTexture?le.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?le.setTexture2DArray(A,0):le.setTexture2D(A,0),q.unbindTexture()},this.resetState=function(){z=0,I=0,X=null,q.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var Ji={defaultMemorial:"demo",dataDir:"./data/",hostPin:"0000",firebaseDatabaseURL:"",presenceIntervalMs:1500},Tn={skin:"#f2c7a5",hair:"short",hairColor:"#231d1a",eyes:"dot",brows:"soft",mouth:"calm",glasses:"none",beard:"none",blush:!0,height:1},Qf={demo:!1,deceased:{name:"\uACE0\uC778",birth:"",death:"",age:""},mourners:"",funeral:{departure:"",departureAt:"",burial:""},greeting:"",thanks:"\uBC14\uC058\uC2E0 \uAC00\uC6B4\uB370 \uCC3E\uC544\uC640 \uC704\uB85C\uD574 \uC8FC\uC154\uC11C \uC9C4\uC2EC\uC73C\uB85C \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.",religion:"traditional",theme:"hospital",bgm:"wind",customBgm:"",hostOutfit:"hostSuit",hostLook:{...Tn},hostName:"\uC0C1\uC8FC",portrait:"",gallery:[],account:{bank:"",number:"",holder:""},accounts:[],kakaopayLink:"",toss:!0},is={hospital:{label:"\uBCD1\uC6D0 \uC7A5\uB840\uC2DD\uC7A5",icon:"\u{1F3E5}",desc:"\uAC00\uC7A5 \uC775\uC219\uD55C \uBCD1\uC6D0 \uC7A5\uB840\uC2DD\uC7A5 \uBE48\uC18C. \uAF43 \uC81C\uB2E8\uACFC \uC81C\uC0AC\uC0C1"},hall:{label:"\uBAA8\uB358 \uCD94\uBAA8\uAD00",icon:"\u{1F3DB}\uFE0F",desc:"\uC720\uB9AC \uBCBD\uACFC \uB098\uBB34 \uB8E8\uBC84\uC758 \uD604\uB300\uC2DD \uCD94\uBAA8\uAD00"},hanok:{label:"\uD55C\uC625 \xB7 \uC0B0\uC0AC",icon:"\u{1F3EF}",desc:"\uAE30\uC640 \uC9C0\uBD95\uACFC \uB9C8\uB8E8, \uADFC\uC870\uB4F1\uC774 \uC788\uB294 \uC804\uD1B5 \uBE48\uC18C"},chapel:{label:"\uAD50\uD68C \xB7 \uC131\uB2F9",icon:"\u26EA",desc:"\uC2A4\uD14C\uC778\uB4DC\uAE00\uB77C\uC2A4\uC640 \uC2ED\uC790\uAC00, \uB098\uBB34 \uC758\uC790\uAC00 \uC788\uB294 \uC608\uBC30\uB2F9"},garden:{label:"\uD558\uB298\uC815\uC6D0",icon:"\u{1F333}",desc:"\uD070 \uB098\uBB34 \uC544\uB798 \uAF43 \uC81C\uB2E8. \uC885\uAD50 \uC0C9\uC774 \uC5C6\uB294 \uC57C\uC678 \uCD94\uBAA8"}},em={traditional:"hospital",buddhist:"hanok",christian:"chapel",catholic:"chapel",none:"hospital"},Dc={none:{label:"\uB044\uAE30",icon:"\u{1F507}",desc:"\uACE0\uC694\uD558\uAC8C"},wind:{label:"\uBC14\uB78C\uACFC \uD48D\uACBD",icon:"\u{1F390}",desc:"\uCC98\uB9C8 \uB05D \uD48D\uACBD \uC18C\uB9AC\uC640 \uC794\uC794\uD55C \uBC14\uB78C"},moktak:{label:"\uBAA9\uD0C1\uACFC \uC2F1\uC789\uBCFC",icon:"\u{1FAB7}",desc:"\uB290\uB9B0 \uBAA9\uD0C1, \uAC00\uB054 \uC6B8\uB9AC\uB294 \uC2F1\uC789\uBCFC"},hymn:{label:"\uCC2C\uC1A1\uAC00 \uC624\uB974\uAC04",icon:"\u26EA",desc:"\uB098 \uAC19\uC740 \uC8C4\uC778 \uC0B4\uB9AC\uC2E0 (Amazing Grace)"},chorale:{label:"\uD3C9\uC548\uC758 \uC624\uB974\uAC04",icon:"\u{1F56F}\uFE0F",desc:"\uB290\uB9B0 4\uC131\uBD80 \uC624\uB974\uAC04 \uCF54\uB784"},gayageum:{label:"\uAC00\uC57C\uAE08 \uC0B0\uC870 \uD48D",icon:"\u{1FA95}",desc:"\uC624\uC74C\uACC4\uB85C \uCC9C\uCC9C\uD788 \uB72F\uB294 \uAC00\uC57C\uAE08"},piano:{label:"\uC794\uC794\uD55C \uD53C\uC544\uB178",icon:"\u{1F3B9}",desc:"\uC26C\uC5B4 \uAC00\uAE30 \uC88B\uC740 \uB290\uB9B0 \uD53C\uC544\uB178"},rain:{label:"\uCC98\uB9C8 \uBE57\uC18C\uB9AC",icon:"\u{1F327}\uFE0F",desc:"\uBE57\uC18C\uB9AC\uC640 \uB099\uC22B\uBB3C"},custom:{label:"\uACE0\uC778\uC774 \uC88B\uC544\uD558\uB358 \uB178\uB798",icon:"\u{1F4BF}",desc:"\uC0C1\uC8FC\uAC00 \uC62C\uB9B0 \uC74C\uC6D0"}},Ei={traditional:{label:"\uC804\uD1B5 \uC608\uBC95",icon:"\u{1F647}",desc:"\uD5CC\uD654 \xB7 \uBD84\uD5A5 \xB7 \uC220\uC794\uC744 \uC62C\uB9AC\uACE0 \uC808 \uB450 \uBC88",actions:["flower","incense","cup","bow2"],auto:["flower","incense","cup","bow2"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654 \xB7 \uBD84\uD5A5 \xB7 \uC220\uC794 \uC62C\uB9AC\uAE30",any:["flower","incense","cup"]},{id:"bow",label:"\uC601\uC815 \uC55E\uC5D0 \uC808 \uB450 \uBC88, \uBAA9\uB840",any:["bow2"]},{id:"greet",label:"\uC0C1\uC8FC\uC640 \uB9DE\uC808, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC721\uAC1C\uC7A5 \uD55C \uADF8\uB987",any:["meal"],optional:!0}]},buddhist:{label:"\uBD88\uAD50",icon:"\u{1FAB7}",desc:"\uBD84\uD5A5\uD558\uACE0 \uD569\uC7A5\uD55C \uB4A4 \uC808 \uB450 \uBC88",actions:["flower","incense","hapjang","bow2","beads"],auto:["flower","incense","hapjang","bow2"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654 \xB7 \uBD84\uD5A5",any:["incense","flower"]},{id:"hapjang",label:"\uD569\uC7A5 \uBC18\uBC30",any:["hapjang"]},{id:"bow",label:"\uC808 \uB450 \uBC88, \uBAA9\uB840",any:["bow2"]},{id:"greet",label:"\uC0C1\uC8FC\uC640 \uB9DE\uC808, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uACF5\uC591 \uD55C \uADF8\uB987",any:["meal"],optional:!0}]},christian:{label:"\uAE30\uB3C5\uAD50",icon:"\u271D\uFE0F",desc:"\uD5CC\uD654\uD55C \uB4A4 \uBB35\uB3C4\uC640 \uAE30\uB3C4",actions:["flower","silentPrayer","prayer"],auto:["flower","silentPrayer"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654",any:["flower"]},{id:"pray",label:"\uBB35\uB3C4 \uB610\uB294 \uAE30\uB3C4",any:["silentPrayer","prayer"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]},catholic:{label:"\uCC9C\uC8FC\uAD50",icon:"\u{1F56F}\uFE0F",desc:"\uD5CC\uD654, \uC131\uD638\uB97C \uAE0B\uACE0 \uAE30\uB3C4, \uCD1B\uBD88 \uBD09\uD5CC",actions:["flower","sign","prayer","candle"],auto:["flower","sign","prayer"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654 \uB610\uB294 \uCD1B\uBD88 \uBD09\uD5CC",any:["flower","candle"]},{id:"sign",label:"\uC131\uD638 \uAE0B\uAE30",any:["sign"]},{id:"pray",label:"\uACE0\uC778\uC744 \uC704\uD55C \uAE30\uB3C4",any:["prayer"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]},none:{label:"\uC885\uAD50 \uC5C6\uC74C",icon:"\u{1F90D}",desc:"\uD5CC\uD654\uD558\uACE0 \uBB35\uB150\uD55C \uB4A4 \uBAA9\uB840",actions:["flower","silence","nod"],auto:["flower","silence","nod"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"]},{id:"offer",label:"\uD5CC\uD654",any:["flower"]},{id:"silence",label:"\uBB35\uB150 \xB7 \uBAA9\uB840",any:["silence","nod"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]}},id={incense:{label:"\uBD84\uD5A5",icon:"\u{1F525}",key:"incense",altar:!0},flower:{label:"\uD5CC\uD654",icon:"\u{1F33C}",key:"flowers",altar:!0},bow2:{label:"\uC808 \uB450 \uBC88",sub:"\uC808 \uB450 \uBC88 \xB7 \uBAA9\uB840",icon:"\u{1F647}",key:"bows",altar:!0},cup:{label:"\uC220\uC794",sub:"\uC220\uC794 \uC62C\uB9AC\uAE30",icon:"\u{1F376}",key:"cups",altar:!0},hapjang:{label:"\uD569\uC7A5",icon:"\u{1F64F}",key:"hapjang",altar:!0},beads:{label:"\uC5FC\uC8FC",icon:"\u{1F4FF}",key:"beads",altar:!1},prayer:{label:"\uAE30\uB3C4",icon:"\u{1F64F}",key:"prayers",altar:!0},silentPrayer:{label:"\uBB35\uB3C4",icon:"\u{1F90D}",key:"prayers",altar:!0},sign:{label:"\uC131\uD638",icon:"\u271D\uFE0F",key:"signs",altar:!0},candle:{label:"\uCD1B\uBD88",icon:"\u{1F56F}\uFE0F",key:"candles",altar:!0},silence:{label:"\uBB35\uB150",icon:"\u{1F90D}",key:"silence",altar:!0},nod:{label:"\uBAA9\uB840",icon:"\u{1F642}",key:"bows",altar:!0}},rd=["\uAC00\uC871","\uCE5C\uCC99","\uCE5C\uAD6C","\uC9C1\uC7A5 \uB3D9\uB8CC","\uD559\uAD50 \uB3D9\uBB38","\uAD50\uD68C\xB7\uC131\uB2F9\xB7\uC808","\uC774\uC6C3","\uC0C1\uC8FC\uC758 \uC9C0\uC778","\uAE30\uD0C0"],tm=["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.","\uC5BC\uB9C8\uB098 \uC0C1\uC2EC\uC774 \uD06C\uC2ED\uB2C8\uAE4C.","\uBB50\uB77C \uC704\uB85C\uC758 \uB9D0\uC500\uC744 \uB4DC\uB824\uC57C \uD560\uC9C0 \uBAA8\uB974\uACA0\uC2B5\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC2E4 \uAC70\uC608\uC694.","\uB298 \uACC1\uC5D0 \uC788\uC744\uAC8C\uC694. \uD798\uB0B4\uC138\uC694."],sd=[{id:"yukgaejang",label:"\uC721\uAC1C\uC7A5",icon:"\u{1F372}",ticket:!0,line:"\uB728\uB048\uD55C \uC721\uAC1C\uC7A5 \uD55C \uADF8\uB987. \uC7A5\uB840\uC2DD\uC7A5 \uAD6D\uBB3C\uC740 \uC65C \uC774\uB807\uAC8C \uC704\uB85C\uAC00 \uB420\uAE4C\uC694."},{id:"pyeonyuk",label:"\uD3B8\uC721",icon:"\u{1F969}",ticket:!0,line:"\uC0C8\uC6B0\uC813 \uC0B4\uC9DD \uC62C\uB9B0 \uD3B8\uC721 \uD55C \uC810 \uB4DC\uC168\uC5B4\uC694."},{id:"hongeo",label:"\uD64D\uC5B4\uBB34\uCE68",icon:"\u{1F41F}",ticket:!0,line:"\uC0C8\uCF64\uB2EC\uCF64 \uD64D\uC5B4\uBB34\uCE68. \uD638\uBD88\uD638\uB294 \uAC08\uB824\uB3C4 \uBE60\uC9C0\uBA74 \uC12D\uC12D\uD558\uC8E0."},{id:"jeon",label:"\uBAA8\uB460\uC804",icon:"\u{1F95E}",ticket:!0,line:"\uB3D9\uADF8\uB791\uB561, \uB3D9\uD0DC\uC804, \uAE7B\uC78E\uC804 \uD55C \uC811\uC2DC \uBE44\uC6B0\uC168\uC5B4\uC694."},{id:"tteok",label:"\uB5A1",icon:"\u{1F361}",ticket:!0,line:"\uC808\uD3B8\uACFC \uC2DC\uB8E8\uB5A1. \uC0C1\uAC13\uC9D1 \uB5A1\uC740 \uB098\uB220 \uBA39\uC5B4\uC57C \uBCF5\uC774 \uC628\uB300\uC694."},{id:"snack",label:"\uB9C8\uB978\uC548\uC8FC",icon:"\u{1F95C}",ticket:!0,line:"\uB545\uCF69\uACFC \uC624\uC9D5\uC5B4\uCC44. \uBC24\uC0D8\uD558\uB294 \uBD84\uB4E4\uC758 \uC624\uB79C \uCE5C\uAD6C\uC608\uC694."},{id:"soju",label:"\uC18C\uC8FC \uD55C \uC794",icon:"\u{1F376}",ticket:!0,line:"\uC18C\uC8FC \uD55C \uC794 \uAE30\uC6B8\uC774\uC168\uC5B4\uC694. \uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uB294 \uAC8C \uC608\uC758\uC608\uC694."},{id:"sikhye",label:"\uC2DD\uD61C",icon:"\u{1F964}",ticket:!1,line:"\uC2DC\uC6D0\uD55C \uC2DD\uD61C\uB85C \uB9C8\uC74C\uC744 \uB2EC\uB798\uC168\uC5B4\uC694."},{id:"coffee",label:"\uCEE4\uD53C\uBBF9\uC2A4",icon:"\u2615",ticket:!1,line:"\uC885\uC774\uCEF5 \uCEE4\uD53C\uBBF9\uC2A4. \uC7A5\uB840\uC2DD\uC7A5\uC758 \uACF5\uC2DD \uC74C\uB8CC\uC8E0."}],Ki={phrases:[{id:"\u8CFB\u5100",sub:"\uBD80\uC758 \xB7 \uAC00\uC7A5 \uC77C\uBC18\uC801"},{id:"\u8B39\u5F14",sub:"\uADFC\uC870 \xB7 \uC0BC\uAC00 \uC2AC\uD37C\uD568"},{id:"\u5F14\u610F",sub:"\uC870\uC758 \xB7 \uC2AC\uD514\uC744 \uD568\uAED8"},{id:"\u8FFD\u6155",sub:"\uCD94\uBAA8 \xB7 \uADF8\uB9AC\uC6CC\uD568"},{id:"\u54C0\u60BC",sub:"\uC560\uB3C4 \xB7 \uC2AC\uD37C\uD568"},{id:"\u53EC\u5929",sub:"\uC18C\uCC9C \xB7 \uAE30\uB3C5\uAD50"},{id:"\u4ED9\u901D",sub:"\uC120\uC11C \xB7 \uCC9C\uC8FC\uAD50"},{id:"\uBD80\uC758",sub:"\uD55C\uAE00"}],papers:[{id:"white",label:"\uD770 \uD55C\uC9C0",bg:"#fbf9f2"},{id:"ivory",label:"\uBBF8\uC0C9",bg:"#f3ead6"},{id:"silver",label:"\uC740\uD68C\uC0C9",bg:"#e6e6e1"},{id:"band",label:"\uAC80\uC740 \uB760",bg:"#fbf9f2",band:!0}],seals:[{id:"none",label:"\uC5C6\uC74C",icon:""},{id:"mum",label:"\uD770 \uAD6D\uD654",icon:""},{id:"lotus",label:"\uC5F0\uAF43",icon:"\u{1FAB7}"},{id:"cross",label:"\uC2ED\uC790\uAC00",icon:"\u271D\uFE0F"},{id:"ribbon",label:"\uADFC\uC870 \uB9AC\uBCF8",icon:"\u{1F397}\uFE0F"}],fonts:[{id:"serif",label:"\uC815\uC790\uCCB4",css:"'Noto Serif KR', 'Gowun Batang', serif"},{id:"brush",label:"\uBD93\uAE00\uC528",css:"'Nanum Brush Script', 'Gowun Batang', serif"},{id:"pen",label:"\uC190\uAE00\uC528",css:"'Nanum Pen Script', 'Gowun Dodum', sans-serif"}]},Uc=["\uC870\uBB38\uD560 \uB54C\uB294 \uAC80\uC740\uC0C9\uC774\uB098 \uC9D9\uC740 \uC0C9 \uC637\uC744 \uC785\uACE0, \uD654\uB824\uD55C \uC561\uC138\uC11C\uB9AC\uB294 \uC7A0\uC2DC \uBE7C \uB450\uC138\uC694.","\uD5A5\uC740 \uC624\uB978\uC190\uC73C\uB85C \uC9D1\uC5B4 \uBD88\uC744 \uBD99\uC774\uACE0, \uC785\uC73C\uB85C \uBD88\uC9C0 \uB9D0\uACE0 \uC67C\uC190\uC73C\uB85C \uAC00\uBCCD\uAC8C \uD754\uB4E4\uC5B4 \uAEBC\uC694.","\uC0C1\uAC00\uC5D0\uC11C \uC190\uC744 \uBAA8\uC744 \uB54C\uB294 \uD3C9\uC18C\uC640 \uBC18\uB300\uB85C, \uB0A8\uC790\uB294 \uC624\uB978\uC190\uC744, \uC5EC\uC790\uB294 \uC67C\uC190\uC744 \uC704\uB85C \uC62C\uB824\uC694.","\uC0C1\uC8FC\uC5D0\uAC8C\uB294 \uB9D0\uC744 \uC544\uB07C\uB294 \uAC83\uC774 \uC608\uC758\uC608\uC694. \uC9E7\uC740 \uD55C\uB9C8\uB514\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4.","\uACE0\uC778\uC758 \uC0AC\uB9DD \uC6D0\uC778\uC744 \uC790\uC138\uD788 \uBB3B\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC544\uC694.","\u201C\uD638\uC0C1(\u597D\u55AA)\u201D\uC774\uB77C\uB294 \uB9D0\uC740 \uC720\uAC00\uC871 \uC55E\uC5D0\uC11C\uB294 \uC0BC\uAC00 \uC8FC\uC138\uC694.","\uC870\uC758\uAE08 \uBD09\uD22C \uB4B7\uBA74 \uC67C\uCABD \uC544\uB798\uC5D0 \uC774\uB984\uC744 \uC138\uB85C\uB85C \uC368\uC694. \uC18C\uC18D\uB3C4 \uD568\uAED8 \uC4F0\uBA74 \uC0C1\uC8FC\uAC00 \uC54C\uC544\uBCF4\uAE30 \uC26C\uC6CC\uC694.","\uC870\uC758\uAE08\uC740 3\xB75\xB77\uB9CC \uC6D0\uCC98\uB7FC \uD640\uC218\uB85C \uB9DE\uCD94\uB294 \uD48D\uC2B5\uC774 \uC788\uC5B4\uC694. 10\uB9CC \uC6D0\uC740 \uAD1C\uCC2E\uC544\uC694.","\uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC220\uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uC544\uC694. \uAC74\uBC30 \uB300\uC2E0 \uC870\uC6A9\uD788 \uB9C8\uC74C\uC744 \uB098\uB220\uC694.","\uBC18\uAC00\uC6B4 \uC0AC\uB78C\uC744 \uB9CC\uB098\uB3C4 \uD070 \uC18C\uB9AC\uB85C \uC6C3\uAC70\uB098 \uC778\uC0AC\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC544\uC694.","\uAE30\uB3C5\uAD50\uC2DD \uBE48\uC18C\uC5D0\uC11C\uB294 \uBD84\uD5A5 \uB300\uC2E0 \uD5CC\uD654\uD558\uACE0 \uBB35\uB3C4\uD574\uC694. \uC808\uC740 \uD558\uC9C0 \uC54A\uC544\uB3C4 \uAD1C\uCC2E\uC544\uC694.","\uD5CC\uD654\uD560 \uB54C\uB294 \uAF43\uBD09\uC624\uB9AC\uAC00 \uC601\uC815 \uCABD\uC744 \uD5A5\uD558\uB3C4\uB85D \uB193\uC544\uC694.","\uB9DE\uC808\uC740 \uC0C1\uC8FC\uC640 \uB3D9\uC2DC\uC5D0 \uD558\uACE0, \uD55C \uBC88\uC774\uBA74 \uCDA9\uBD84\uD574\uC694.","\uBC24\uC0D8(\uCCA0\uC57C)\uC740 \uD5A5\uC774 \uAEBC\uC9C0\uC9C0 \uC54A\uAC8C \uC9C0\uD0A4\uBA70 \uACE0\uC778 \uACC1\uC744 \uD568\uAED8 \uC9C0\uD0A4\uB358 \uD48D\uC2B5\uC774\uC5D0\uC694."],ad={skin:["#f8dcc6","#f2c7a5","#e5b48f","#cf9670","#a26f4f"],hair:[{id:"short",label:"\uC9E7\uC740 \uBA38\uB9AC"},{id:"part",label:"\uAC00\uB974\uB9C8"},{id:"bob",label:"\uB2E8\uBC1C"},{id:"long",label:"\uAE34 \uC0DD\uBA38\uB9AC"},{id:"pony",label:"\uBB36\uC740 \uBA38\uB9AC"},{id:"bun",label:"\uCABD\uBA38\uB9AC\xB7\uBE44\uB140"},{id:"perm",label:"\uBF40\uAE00 \uD30C\uB9C8"},{id:"bald",label:"\uBBFC\uBA38\uB9AC"}],hairColor:[{id:"#231d1a",label:"\uAC80\uC815"},{id:"#3d2b20",label:"\uD751\uAC08\uC0C9"},{id:"#6e4b33",label:"\uAC08\uC0C9"},{id:"#8f8b85",label:"\uBC18\uBC31"},{id:"#e4e0d8",label:"\uBC31\uBC1C"}],eyes:[{id:"dot",label:"\uCF69 \uB208"},{id:"round",label:"\uB3D9\uADF8\uB780 \uB208"},{id:"smile",label:"\uC6C3\uB294 \uB208"},{id:"sad",label:"\uCC98\uC9C4 \uB208"},{id:"closed",label:"\uC9C0\uADF8\uC2DC \uAC10\uC740 \uB208"}],brows:[{id:"soft",label:"\uBCF4\uD1B5"},{id:"sad",label:"\uCC98\uC9C4 \uB208\uC379"},{id:"thick",label:"\uC9D9\uC740 \uB208\uC379"}],mouth:[{id:"calm",label:"\uB2F4\uB2F4"},{id:"smile",label:"\uC605\uC740 \uBBF8\uC18C"},{id:"sad",label:"\uC2DC\uBB34\uB8E9"}],glasses:[{id:"none",label:"\uC5C6\uC74C"},{id:"round",label:"\uB3D9\uADF8\uB780 \uC548\uACBD"},{id:"square",label:"\uBFD4\uD14C \uC548\uACBD"}],beard:[{id:"none",label:"\uC5C6\uC74C"},{id:"mustache",label:"\uCF67\uC218\uC5FC"},{id:"beard",label:"\uD131\uC218\uC5FC"}],height:[{id:.84,label:"\uC544\uC774"},{id:1,label:"\uC5B4\uB978"},{id:1.07,label:"\uD0A4 \uD070"}]},Nc=[{id:"cry",icon:"\u{1F622}",label:"\uB208\uBB3C"},{id:"heart",icon:"\u{1F90D}",label:"\uB9C8\uC74C"},{id:"pray",icon:"\u{1F64F}",label:"\uAE30\uB3C4"},{id:"smile",icon:"\u{1F642}",label:"\uBBF8\uC18C"},{id:"dove",icon:"\u{1F54A}\uFE0F",label:"\uD3C9\uC548"}],nm=["\uC624\uB79C\uB9CC\uC774\uC5D0\uC694","\uAC74\uAC15\uD558\uC2DC\uC8E0?","\uB9C8\uC74C\uC774 \uC544\uD504\uB124\uC694","\uC88B\uC740 \uBD84\uC774\uC168\uC5B4\uC694","\uC870\uC2EC\uD788 \uB4E4\uC5B4\uAC00\uC138\uC694","\uB2E4\uC74C\uC5D0 \uAF2D \uBD2C\uC694"];var Gn={get(i,e){try{let t=localStorage.getItem(i);return t?JSON.parse(t):e}catch{return e}},set(i,e){try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch(t){return console.warn(t),!1}},del(i){try{localStorage.removeItem(i)}catch{}}};function od(i,e){let t=Array.isArray(i)?[...i]:{...i};for(let[n,r]of Object.entries(e||{}))r&&typeof r=="object"&&!Array.isArray(r)&&i&&typeof i[n]=="object"&&!Array.isArray(i[n])?t[n]=od(i[n],r):r!==void 0&&(t[n]=r);return t}var kc=class{constructor(e,t){this.id=t||"demo";let n=(e.firebaseDatabaseURL||"").trim().replace(/\/+$/,"");this.base=n?`${n}/memorials/${encodeURIComponent(this.id)}`:"",this.remote=!!this.base,this.remoteOk=this.remote}key(e){return`samga:${this.id}:${e}`}async req(e,t,n,r=""){let s=await fetch(`${this.base}/${t}.json${r}`,{method:e,headers:n!==void 0?{"Content-Type":"application/json"}:void 0,body:n!==void 0?JSON.stringify(n):void 0});if(!s.ok)throw new Error(`${e} ${t} \u2192 ${s.status}`);return s.json()}async loadMemorial(e,t){let n={};try{let s=await fetch(e,{cache:"no-cache"});s.ok&&(n=await s.json())}catch(s){console.warn("memorial.json\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s)}this.published=od(t,n);let r=Gn.get(this.key("draft"),null);return this.hasDraft=!!r,r?od(this.published,r):this.published}saveDraft(e){return Gn.set(this.key("draft"),e)}clearDraft(){Gn.del(this.key("draft")),this.hasDraft=!1}getLocal(e,t){return Gn.get(this.key(e),t)}setLocal(e,t){return Gn.set(this.key(e),t)}async list(e,t=200){if(this.remote&&e!=="condolences")try{let n=`?orderBy=${encodeURIComponent('"$key"')}&limitToLast=${t}`,r=await this.req("GET",e,void 0,n);return this.remoteOk=!0,Object.entries(r||{}).map(([s,a])=>({id:s,...a})).sort((s,a)=>(s.time||0)-(a.time||0))}catch(n){console.warn(n),this.remoteOk=!1}return Gn.get(this.key(e),[])}async add(e,t){let n={...t,time:Date.now()},r=!this.remote||e==="condolences";if(this.remote)try{let a=await this.req("POST",e,{...n,time:{".sv":"timestamp"}});if(n.id=a.name,!r)return n}catch(a){console.warn(a),this.remoteOk=!1}let s=Gn.get(this.key(e),[]);for(n.id=n.id||`l${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,s.push(n);s.length>400;)s.shift();return Gn.set(this.key(e),s),n}async counters(){if(this.remote)try{let e=await this.req("GET","counters");return this.remoteOk=!0,e||{}}catch(e){console.warn(e),this.remoteOk=!1}return Gn.get(this.key("counters"),{})}async bump(e,t=1){if(this.remote)try{await this.req("PUT",`counters/${e}`,{".sv":{increment:t}});return}catch(r){console.warn(r),this.remoteOk=!1}let n=Gn.get(this.key("counters"),{});n[e]=(n[e]||0)+t,Gn.set(this.key("counters"),n)}async getState(e){if(this.remote)try{return await this.req("GET",`state/${e}`)}catch(t){console.warn(t)}return Gn.get(this.key(`state:${e}`),null)}async stampState(e){let t=Date.now();if(this.remote)try{return await this.req("PUT",`state/${e}`,{".sv":"timestamp"})}catch(n){console.warn(n)}return Gn.set(this.key(`state:${e}`),t),t}async presencePut(e,t){this.remote&&await this.req("PUT",`presence/${e}`,{...t,t:{".sv":"timestamp"}})}async presenceGet(){return this.remote?await this.req("GET","presence")||{}:{}}presenceDelete(e){if(this.remote)try{fetch(`${this.base}/presence/${e}.json`,{method:"DELETE",keepalive:!0})}catch{}}};function Co(i){let e=i;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function sm(i=256){let e=document.createElement("canvas");return e.width=e.height=i,e}function V1(i,e,t,n,{petal:r,shade:s,center:a,layers:o=7,count:c=30,seed:l=1}){let h=Co(l);for(let d=o-1;d>=0;d--){let p=(d+1)/o,f=n*(.2+.8*p),v=Math.round(c*(.45+.7*p));for(let _=0;_<v;_++){let g=_/v*Math.PI*2+d*.53+(h()-.5)*.18,y=f*(.78+h()*.22),b=n*(.035+.045*p)*(.85+h()*.3),R=.86+h()*.14;i.save(),i.translate(e,t),i.rotate(g);let M=i.createLinearGradient(y*.05,0,y,0);M.addColorStop(0,s),M.addColorStop(.45,r),M.addColorStop(.92,r),M.addColorStop(1,s),i.globalAlpha=1,i.fillStyle=M,i.beginPath(),i.moveTo(y*.06,0),i.bezierCurveTo(y*.35,-b*.5,y*.62,-b*1.25,y*.92,-b*.9),i.quadraticCurveTo(y*1.04,0,y*.92,b*.9),i.bezierCurveTo(y*.62,b*1.25,y*.35,b*.5,y*.06,0),i.fill(),i.fillStyle=`rgba(0,0,0,${(1-R)*.9})`,i.fill(),i.strokeStyle="rgba(255,255,255,0.55)",i.lineWidth=Math.max(.6,n*.004),i.beginPath(),i.moveTo(y*.25,0),i.lineTo(y*.85,0),i.stroke(),i.strokeStyle="rgba(80,80,60,0.16)",i.lineWidth=Math.max(.6,n*.005),i.beginPath(),i.moveTo(y*.06,0),i.bezierCurveTo(y*.35,-b*.5,y*.62,-b*1.25,y*.92,-b*.9),i.quadraticCurveTo(y*1.04,0,y*.92,b*.9),i.bezierCurveTo(y*.62,b*1.25,y*.35,b*.5,y*.06,0),i.stroke(),i.restore()}let m=i.createRadialGradient(e,t,f*.55,e,t,f*1.02);m.addColorStop(0,"rgba(60,60,40,0)"),m.addColorStop(1,"rgba(60,60,40,0.07)"),i.globalCompositeOperation="source-atop",i.fillStyle=m,i.beginPath(),i.arc(e,t,f,0,Math.PI*2),i.fill(),i.globalCompositeOperation="source-over"}let u=i.createRadialGradient(e,t,0,e,t,n*.13);u.addColorStop(0,a),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.beginPath(),i.arc(e,t,n*.13,0,Math.PI*2),i.fill()}function W1(i,e,t,n,{petal:r,shade:s,seed:a=3}){let o=Co(a);for(let c=0;c<520;c++){let l=o()*Math.PI*2,h=Math.sqrt(o())*n*.92,u=e+Math.cos(l)*h,d=t+Math.sin(l)*h;i.fillStyle=o()<.5?r:s,i.beginPath(),i.ellipse(u,d,n*.06,n*.035,l,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(40,60,20,0.18)",i.lineWidth=.8,i.stroke()}}function X1(i,e,t,n,{petal:r,shade:s,disc:a,ring:o,n:c=34,seed:l=7,inner:h=.26}){let u=Co(l);for(let d=0;d<2;d++)for(let p=0;p<c;p++){let f=p/c*Math.PI*2+d*(Math.PI/c),v=n*(d?.82:.97)*(.92+u()*.08),m=n*.07;i.save(),i.translate(e,t),i.rotate(f);let _=i.createLinearGradient(n*h,0,v,0);_.addColorStop(0,s),_.addColorStop(.3,r),_.addColorStop(1,r),i.fillStyle=_,i.beginPath(),i.moveTo(n*h*.9,-m*.5),i.lineTo(v*.95,-m*.6),i.quadraticCurveTo(v,0,v*.95,m*.6),i.lineTo(n*h*.9,m*.5),i.fill(),i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=1,i.stroke(),i.restore()}i.fillStyle=o,i.beginPath(),i.arc(e,t,n*h,0,Math.PI*2),i.fill(),i.fillStyle=a,i.beginPath(),i.arc(e,t,n*h*.62,0,Math.PI*2),i.fill();for(let d=0;d<60;d++){let p=u()*Math.PI*2,f=u()*n*h*.9;i.fillStyle="rgba(255,230,140,0.5)",i.fillRect(e+Math.cos(p)*f,t+Math.sin(p)*f,2,2)}}function j1(i,e,t){let n=i.createLinearGradient(0,t,0,0);n.addColorStop(0,"#c9d9a0"),n.addColorStop(.28,"#f4f6e8"),n.addColorStop(1,"#ffffff"),i.fillStyle=n,i.beginPath(),i.moveTo(e/2,t),i.bezierCurveTo(e*.02,t*.7,e*.05,t*.25,e/2,2),i.bezierCurveTo(e*.95,t*.25,e*.98,t*.7,e/2,t),i.fill(),i.strokeStyle="rgba(150,170,110,0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(e/2,t),i.lineTo(e/2,t*.12),i.stroke(),i.fillStyle="rgba(170,90,70,0.35)";for(let r=0;r<10;r++)i.fillRect(e*.35+Math.random()*e*.3,t*.55+Math.random()*t*.25,2,3)}function q1(i,e,t){let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"#3f5c30"),n.addColorStop(1,"#6f8f4c"),i.fillStyle=n,i.beginPath(),i.moveTo(e*.02,t/2),i.bezierCurveTo(e*.3,t*.02,e*.75,t*.05,e*.98,t/2),i.bezierCurveTo(e*.75,t*.95,e*.3,t*.98,e*.02,t/2),i.fill(),i.strokeStyle="rgba(220,235,190,0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(e*.04,t/2),i.lineTo(e*.94,t/2),i.stroke();for(let r=1;r<6;r++)i.beginPath(),i.moveTo(e*(.12+r*.13),t/2),i.lineTo(e*(.2+r*.13),t*.22),i.moveTo(e*(.12+r*.13),t/2),i.lineTo(e*(.2+r*.13),t*.78),i.stroke()}var im={white:{petal:"#fefefb",shade:"#e4e5d6",center:"#eef0dc",seed:11},cream:{petal:"#faf3df",shade:"#e6dcb4",center:"#efe5c4",seed:23},yellow:{petal:"#f7d24f",shade:"#cf9a24",center:"#a47a12",seed:37},pink:{petal:"#f7dfe3",shade:"#ddafb8",center:"#d79aa5",seed:41}},hd={gerbera:{petal:"#f2849c",shade:"#d55c78",disc:"#4a3a1c",ring:"#c9b24a",n:30},gerberaY:{petal:"#ffcf3d",shade:"#e8a21b",disc:"#5a3d14",ring:"#d7a83a",n:30},aster:{petal:"#cf9ad9",shade:"#a86fb6",disc:"#e7c33a",ring:"#f1d75a",n:22,inner:.3}},Gt={},$1={white:"mum.png",gerbera:"gerbera.png",gerberaY:"gerbera_y.png",lying:"mum_lying.png",stem:"mum_stem.png"},Y1={cream:"#f6ecd2",yellow:"#f2c230",pink:"#f3d0d8"};async function am(i="./flowers/"){let e=r=>new Promise(s=>{let a=new Image;a.onload=()=>s(a),a.onerror=()=>s(null),a.src=i+r}),t=await Promise.all(Object.entries($1).map(async([r,s])=>[r,await e(s)]));for(let[r,s]of t){if(!s)continue;let a=document.createElement("canvas");a.width=s.width,a.height=s.height,a.getContext("2d").drawImage(s,0,0),Gt[`c:${r}`]=a,Gt[`photo:${r}`]=!0}let n=Gt["c:white"];if(n)for(let[r,s]of Object.entries(Y1)){let a=document.createElement("canvas");a.width=n.width,a.height=n.height;let o=a.getContext("2d");o.drawImage(n,0,0),o.globalCompositeOperation="multiply",o.fillStyle=s,o.fillRect(0,0,a.width,a.height),o.globalCompositeOperation="destination-in",o.drawImage(n,0,0),Gt[`c:${r}`]=a,Gt[`photo:${r}`]=!0}}function ud(i){let e=new bn(i);return e.colorSpace=At,e.anisotropy=8,e}function dd(i){if(Gt[`c:${i}`])return Gt[`c:${i}`];let e=sm(512),t=e.getContext("2d");return i==="lily"?(e.width=128,e.height=256,j1(t,128,256)):i==="pompon"?W1(t,256,256,240,{petal:"#d9e6a6",shade:"#a9c06c"}):i==="leaf"?(e.width=256,e.height=128,q1(t,256,128)):hd[i]?X1(t,256,256,248,hd[i]):V1(t,256,256,248,im[i]||im.white),Gt[`c:${i}`]=e,e}function pd(i){if(Gt[`m:${i}`])return Gt[`m:${i}`];let e=ud(dd(i)),t=i==="leaf"?0:Gt[`photo:${i}`]?.1:i==="white"||i==="lily"||i==="cream"?.28:.14,n=new Ne({map:e,alphaTest:.42,side:Et,roughness:.85,emissive:"#ffffff",emissiveMap:e,emissiveIntensity:t});return Gt[`m:${i}`]=n,n}function da(i,e,t=.42*Math.PI,n=1){let r=new ft(1,20,5,0,Math.PI*2,0,t),s=r.attributes.position,a=r.attributes.uv,o=Math.sin(t),c=Math.cos(t);for(let l=0;l<s.count;l++){let h=s.getX(l),u=s.getY(l),d=s.getZ(l);a.setXY(l,.5+h/(2*o)*n,.5+d/(2*o)*n),s.setXYZ(l,h/o*i,(u-c)/(1-c)*e,d/o*i)}return r.computeVertexNormals(),r}function fd(i){let e=[],t=[],n=[],r=[],s=0;for(let o of i){let c=o.attributes.position,l=o.attributes.normal,h=o.attributes.uv;for(let d=0;d<c.count;d++)e.push(c.getX(d),c.getY(d),c.getZ(d)),t.push(l.getX(d),l.getY(d),l.getZ(d)),n.push(h.getX(d),h.getY(d));let u=o.index.array;for(let d=0;d<u.length;d++)r.push(u[d]+s);s+=c.count}let a=new Pt;return a.setAttribute("position",new ze(e,3)),a.setAttribute("normal",new ze(t,3)),a.setAttribute("uv",new ze(n,2)),a.setIndex(r),a}var rs,ld,cd,Bc;function om(){if(!rs&&Gt["photo:white"]){let i=da(1,.28,.42*Math.PI,1),e=da(.6,.3,.42*Math.PI,1);e.rotateY(1.3),e.translate(0,.14,0),rs=fd([i,e]),rs.rotateX(Math.PI/2)}if(!rs){let i=da(1,.2,.42*Math.PI,1),e=da(.74,.36,.42*Math.PI,1);e.rotateY(.9),e.translate(0,.07,0);let t=da(.48,.42,.45*Math.PI,1);t.rotateY(2.1),t.translate(0,.17,0),rs=fd([i,e,t]),rs.rotateX(Math.PI/2)}return rs}function Z1(){return Bc||(Bc=da(1,.12,.4*Math.PI,1),Bc.rotateX(Math.PI/2)),Bc}function J1(){if(!ld){let i=[];for(let e=0;e<6;e++){let t=new vt(.38,1,2,8),n=t.attributes.position;for(let r=0;r<n.count;r++){let s=n.getY(r)+.5,a=n.getX(r)*(.35+Math.sin(s*Math.PI)*.9);n.setXYZ(r,a,s,.55*s-.62*s*s+Math.abs(a)*.25)}t.computeVertexNormals(),t.rotateZ(e/6*Math.PI*2+e%2*.12),e%2&&t.scale(.9,.9,1),i.push(t)}ld=fd(i)}return ld}function lm(){return cd||(cd=new vt(1,.5)),cd}function K1(i){return i==="leaf"?lm():i==="lily"?J1():hd[i]?Z1():om()}var rm={white:[.12,.035],cream:[.12,.03],yellow:[.1,.03],pink:[.11,.03],pompon:[.09,.02],lily:[.2,.04],gerbera:[.1,.015],gerberaY:[.1,.015],aster:[.055,.012],leaf:[.24,.1]};function cm(i,e,t){let n=new tt,r=new Cn,s=new Cn,a=new S,o=new et,c=new S(0,0,1);for(let[l,h]of Object.entries(i)){if(!h.length)continue;let u=new ji(K1(l),pd(l),h.length);h.forEach(({p:d,n:p},f)=>{let[v,m]=rm[l]||rm.white,_=v+e()*m,g=l==="leaf"?p:p.clone().add(new S((e()-.5)*.45,(e()-.5)*.35,0)).normalize();r.setFromUnitVectors(c,g),s.setFromAxisAngle(c,e()*Math.PI*2),r.multiply(s),a.set(_,_,_),n.compose(d,r,a),u.setMatrixAt(f,n),o.setHSL(0,0,.88+e()*.12),u.setColorAt(f,o)}),u.instanceMatrix.needsUpdate=!0,u.receiveShadow=!0,u.castShadow=l==="lily",u.userData.interact="altar",t.add(u)}}function hm({floor:i}){let e=new Te,t=Co(4321),n={white:[],cream:[],yellow:[],pompon:[],lily:[],gerbera:[],gerberaY:[],aster:[],leaf:[]},r=[{c:[0,1,-9.9],r:[4.25,.5,.55],tier:"low"},{c:[-4.05,1.25,-10.05],r:[1.15,.85,.5],tier:"side"},{c:[4.05,1.25,-10.05],r:[1.15,.85,.5],tier:"side"},{c:[0,2.35,-10.5],r:[1.2,1.15,.45],tier:"top"},{c:[-1.75,2.05,-10.42],r:[.95,.85,.45],tier:"mid"},{c:[1.75,2.05,-10.42],r:[.95,.85,.45],tier:"mid"},{c:[-3,2.2,-10.35],r:[.55,1,.42],tier:"tall"},{c:[3,2.2,-10.35],r:[.55,1,.42],tier:"tall"}],s=.17;for(let l of r){let[h,u,d]=l.c,[p,f,v]=l.r;for(let m=-.25;m<=Math.PI/2;m+=s/Math.max(f,.3)){let _=Math.max(.05,Math.cos(m)),g=s/Math.max(.12,p*_);for(let y=-Math.PI/2-.15;y<=Math.PI/2+.15;y+=g){let b=y+(t()-.5)*g*.5,R=new S(h+p*_*Math.sin(b),i+u+f*Math.sin(m),d+v*_*Math.cos(b)),M=R.y-i;if(Math.abs(R.x)<.74&&M>1.58&&M<3.2&&l.tier==="top")continue;let U=new S((R.x-h)/(p*p),(M-u)/(f*f),(R.z-d)/(v*v)).normalize();U.lerp(new S(0,.25,1).normalize(),.35).normalize();let z="white",I=Math.abs(b)>1.25||m>1.3;M<.62?z=t()<.5?"leaf":"pompon":l.tier==="low"&&R.x>.2&&R.x<2.3&&M<1.45?z=t()<.45?"gerberaY":"yellow":l.tier==="low"&&Math.abs(Math.abs(R.x)-1.75)<.42&&M>1.15?z="lily":l.tier==="top"&&Math.abs(R.x)<.8&&M<1.62&&M>1.2?z="gerbera":l.tier==="top"&&Math.abs(Math.abs(R.x)-.86)<.12&&M>1.6?z="yellow":I&&t()<.45||l.tier==="low"&&t()<.12?z="aster":t()<.06&&(z="cream"),n[z].push({p:R,n:U}),z!=="leaf"&&t()<.25&&n.leaf.push({p:R.clone().addScaledVector(U,-.06).add(new S((t()-.5)*.15,(t()-.5)*.15,0)),n:U.clone().applyAxisAngle(new S(0,1,0),(t()-.5)*1.5)})}}}cm(n,t,e);let a=new Ne({color:"#34482c",roughness:1});for(let l of r){let h=new H(new ft(1,24,12,-Math.PI/2,Math.PI,0,Math.PI*.62),a);h.scale.set(l.r[0]*.95,l.r[1]*.95,l.r[2]*.9),h.position.set(l.c[0],i+l.c[1]-l.r[1]*.12,l.c[2]-.03),h.rotation.y=0,e.add(h)}let o=new H(new xe(9.8,.95,1.5),new Ne({color:"#4f4037",roughness:.6}));o.position.set(0,i+.475,-10.2),o.receiveShadow=!0,e.add(o);let c=new Ne({color:"#1f2620",roughness:.8});for(let l of r){let h=new H(new xe(l.r[0]*1.6,.16,l.r[2]*1.2),c);h.position.set(l.c[0],i+l.c[1]-.05,l.c[2]-.05),e.add(h)}return e}function um({floor:i,z:e=-10.4,width:t=6.6,top:n=2.9,arch:r=1.25,cut:s={w:.98,y0:1.42,y1:3.4},accent:a="yellow"}={}){let o=new Te,c=Co(777),l={white:[],cream:[],[a]:[],pompon:[],lily:[],aster:[],leaf:[]},h=.19,u=0;for(let d=.12;d<=n+r+.1;d+=h*.86,u++)for(let p=-t+u%2*h*.5;p<=t;p+=h){let f=n+r*Math.cos(p/t*(Math.PI/2))**1.3;if(d>f||Math.abs(p)<s.w&&d>s.y0&&d<s.y1)continue;let v=d/4*.4,m=new S(p+(c()-.5)*.05,i+d+(c()-.5)*.05,e-v+(c()-.5)*.06),_=new S((c()-.5)*.4,.3+(c()-.5)*.3,1).normalize(),g=1.2+.55*Math.sin(p*.6+.8)+.16*Math.sin(p*1.7),y="white",b=Math.abs(p)<s.w+.55&&d>s.y0-.25&&d<s.y1+.3;d<.42?y=c()<.55?"pompon":"leaf":b&&c()<.4?y="lily":Math.abs(d-g)<.15?y=a:Math.abs(d-(g+.27))<.08&&c()<.75?y="cream":d>f-.2&&c()<.35&&(y="aster"),l[y].push({p:m,n:_}),y!=="leaf"&&c()<.3&&l.leaf.push({p:m.clone().add(new S((c()-.5)*.18,(c()-.5)*.18,-.07)),n:new S(c()-.5,c()-.5,1).normalize()})}return cm(l,c,o),o}function dm(i=1){if(!Gt["photo:lying"])return null;let e=Gt["c:lying"];Gt["m:lying"]||(Gt["m:lying"]=new Ne({map:ud(e),alphaTest:.4,side:Et,roughness:.85,emissive:"#ffffff",emissiveMap:ud(e),emissiveIntensity:.1}));let t=.62,n=t*(e.height/e.width),r=new Te,s=new H(new vt(t,n),Gt["m:lying"]);s.rotation.x=-Math.PI/2;let a=new H(new vt(t,n),Gt["m:lying"]);return a.rotation.x=-Math.PI/2+.55,a.position.y=.04,r.add(s,a),r.scale.setScalar(i),r}function Si(i=1,e="white"){let t=new Te,n=Gt.stem||(Gt.stem=new Ne({color:"#5d7a46",roughness:.8})),r=new H(new Me(.008,.008,.42,6),n);r.position.y=-.21,t.add(r);let s=new H(lm(),pd("leaf"));s.scale.setScalar(.11),s.position.set(.04,-.24,0),s.rotation.set(.3,.4,.6),t.add(s);let a=new H(om(),pd(e));return a.scale.setScalar(.07),a.rotation.x=-Math.PI/2,t.add(a),t.scale.setScalar(i),t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function Po(i="white"){let e=`w:${i}`;if(Gt[e])return Gt[e];let t=sm(512),n=t.getContext("2d"),r=dd("leaf");for(let o=0;o<40;o++){let c=o/40*Math.PI*2;n.save(),n.translate(256+Math.cos(c)*225,256+Math.sin(c)*225),n.rotate(c),n.drawImage(r,-40,-20,80,40),n.restore()}let s=(o,c,l,h)=>{let u=dd(h);for(let d=0;d<c;d++){let p=d/c*Math.PI*2+o*.01;n.drawImage(u,256+Math.cos(p)*o-l/2,256+Math.sin(p)*o-l/2,l,l)}};return s(205,26,64,i==="yellow"?"yellow":"white"),s(160,22,62,i==="mixed"?"yellow":"white"),s(115,16,60,"white"),s(70,10,58,i==="pink"?"pink":"cream"),s(0,1,92,"white"),Gt[e]=t,t}var Tr={suit:{label:"\uAC80\uC740 \uC815\uC7A5",who:"guest",top:"#202228",sleeve:"#202228",pants:"#1b1c21",shirt:!0,tie:"#0e0e10",shoes:"#141414"},shirt:{label:"\uAC80\uC740 \uC154\uCE20",who:"guest",top:"#25272d",sleeve:"#25272d",pants:"#2b2d33",collar2:!0,shoes:"#141414"},dress:{label:"\uAC80\uC740 \uC6D0\uD53C\uC2A4",who:"guest",top:"#1f2025",sleeve:"#1f2025",skirt:"#1f2025",skirtLen:.34,shoes:"#141414",collar:"#f3f1ea"},hanbokBlack:{label:"\uAC80\uC740 \uD55C\uBCF5",who:"guest",top:"#25262c",sleeve:"#25262c",skirt:"#1a1b20",skirtLen:.5,goreum:"#25262c",shoes:"#f3f1ea"},hostSuit:{label:"\uAC80\uC740 \uC591\uBCF5 \xB7 \uC644\uC7A5",who:"host",desc:"\uC694\uC998 \uAC00\uC7A5 \uD754\uD55C \uC0C1\uC8FC \uCC28\uB9BC. \uC67C\uD314\uC5D0 \uC644\uC7A5, \uAC00\uC2B4\uC5D0 \uC0C1\uC8FC \uB9AC\uBCF8",top:"#1b1c21",sleeve:"#1b1c21",pants:"#17181c",shirt:!0,tie:"#0e0e10",shoes:"#141414",armband:!0,ribbon:!0},hostHanbok:{label:"\uAC80\uC740 \uC0C1\uBCF5 \uD55C\uBCF5",who:"host",desc:"\uAC80\uC740 \uCE58\uB9C8\uC800\uACE0\uB9AC\uC5D0 \uD770 \uBA38\uB9AC \uB9AC\uBCF8",top:"#222329",sleeve:"#222329",skirt:"#18191d",skirtLen:.5,goreum:"#f5f3ec",shoes:"#f3f1ea",hairRibbon:!0,ribbon:!0},sambe:{label:"\uC804\uD1B5 \uC0BC\uBCA0 \uC0C1\uBCF5",who:"host",desc:"\uAD74\uAC74\uC81C\uBCF5 \xB7 \uC218\uC9C8 \xB7 \uC694\uC9C8, \uC190\uC5D0 \uC0C1\uC7A5(\uC9C0\uD321\uC774)",top:"#d7c9a6",sleeve:"#d7c9a6",robe:"#d3c49f",shoes:"#cdbd96",hood:!0,rope:"#a89067",cane:!0},sobok:{label:"\uD770 \uC18C\uBCF5",who:"host",desc:"\uD770 \uCE58\uB9C8\uC800\uACE0\uB9AC, \uB2E8\uC815\uD55C \uBA38\uB9AC\uC5D0 \uD770 \uB9AC\uBCF8",top:"#f4f1e8",sleeve:"#f4f1e8",skirt:"#efebe0",skirtLen:.5,goreum:"#e9e4d6",shoes:"#f3f1ea",hairRibbon:!0}},Ft={hipsY:.42,torsoX:0,headX:0,headY:0,aLx:0,aLz:.12,aRx:0,aRz:-.12,lLx:0,lRx:0,lLz:0,lRz:0,eyes:0},pm=Object.keys(Ft),Mt=i=>({...Ft,...i}),fm=Mt({aLx:-2.25,aRx:-2.25,aLz:-.55,aRz:.55,headX:.1,eyes:1}),mm=Mt({hipsY:.17,lLx:1.5,lRx:1.5,torsoX:.12,aLx:-.9,aRx:-.9,aLz:-.25,aRz:.25,eyes:1}),gm=Mt({hipsY:.17,lLx:1.5,lRx:1.5,torsoX:1.18,headX:.15,aLx:-1.85,aRx:-1.85,aLz:-.3,aRz:.3,eyes:1}),Fc=Mt({torsoX:.5,headX:.25,aLx:-.35,aRx:-.35,aLz:-.35,aRz:.35,eyes:1}),ss=Mt({torsoX:.28,headX:.25,aLz:-.05,aRz:.05,eyes:1}),as=Mt({aLx:-1.25,aRx:-1.25,aLz:-.8,aRz:.8}),vm=Mt({aLx:-1,aRx:-1,aLz:-.8,aRz:.8,torsoX:.42,headX:.25,eyes:1}),pa=Mt({aLx:-1.05,aRx:-1.05,aLz:-.78,aRz:.78,torsoX:.08,headX:.38,eyes:1}),ym=Mt({headX:.45,torsoX:.06,aLz:-.12,aRz:.12,aLx:-.15,aRx:-.15,eyes:1}),md=Mt({hipsY:.13,lLx:-1.45,lRx:-1.45,lLz:.18,lRz:-.18,aLx:-.6,aRx:-.6,aLz:-.15,aRz:.15}),_m=Mt({...md,aRx:-2,aRz:.55,headX:-.05}),xm=Mt({aRx:-.85,aRz:.15}),os=Mt({aLx:-1.35,aRx:-1.35,aLz:-.35,aRz:.35,torsoX:.28,headX:.1}),Mm=Mt({aRx:-1.35,aRz:.18,aLx:-.4,aLz:-.4,torsoX:.22,headX:.1}),bm=Mt({aLx:-1.2,aRx:-1.2,aLz:-.4,aRz:.4,torsoX:.15}),Em=Mt({aRx:-2.6,aRz:-.5}),Io=Mt({aRx:-1.25,aRz:.05,torsoX:.15,headX:.15}),Lo=Mt({aRx:-1.75,aRz:.15,torsoX:.08,headX:.1}),Sm=Mt({aLx:-1.45,aRx:-1.45,aLz:-.6,aRz:.6,torsoX:.12,headX:.2,eyes:1});function Do(){return[{p:fm,d:.6},{p:mm,d:.75},{p:gm,d:.85},{p:gm,d:.55},{p:mm,d:.6},{p:fm,d:.6}]}var Q1={bow:()=>[...Do(),{p:Ft,d:.6}],bow2:()=>[...Do(),...Do(),{p:Ft,d:.5},{p:ss,d:.4},{p:ss,d:.35},{p:Ft,d:.4}],pour:()=>[{p:os,d:.7},{p:Mt({...os,aRx:-1.55,aRz:.1}),d:.6,cue:"pour"},{p:os,d:.5,cue:"release"},{p:Ft,d:.6}],bow3:()=>[...Do(),...Do(),{p:Ft,d:.5},{p:ss,d:.4},{p:ss,d:.35},{p:Ft,d:.4}],halfBow:()=>[{p:Fc,d:.6},{p:Fc,d:.8},{p:Ft,d:.6}],nod:()=>[{p:ss,d:.5},{p:ss,d:.9},{p:Ft,d:.5}],hapjang:()=>[{p:as,d:.6},{p:as,d:.4},{p:vm,d:.7},{p:vm,d:1.2},{p:as,d:.6},{p:Ft,d:.6}],prayer:()=>[{p:pa,d:.8},{p:pa,d:4.2},{p:Ft,d:.7}],silence:()=>[{p:ym,d:.9},{p:ym,d:8.2},{p:Ft,d:.8}],sign:()=>[{p:Mt({aRx:-2.55,aRz:.42,eyes:1,headX:.15}),d:.6},{p:Mt({aRx:-1.45,aRz:.6,eyes:1,headX:.15}),d:.5},{p:Mt({aRx:-1.75,aRz:1,eyes:1,headX:.15}),d:.45},{p:Mt({aRx:-1.95,aRz:.12,eyes:1,headX:.15}),d:.45},{p:pa,d:.6},{p:pa,d:1.4},{p:Ft,d:.6}],incense:()=>[{p:Mm,d:.7,cue:"reach"},{p:Mm,d:.9,cue:"light"},{p:as,d:.6},{p:Ft,d:.6}],offer:()=>[{p:os,d:.8},{p:os,d:.5,cue:"release"},{p:Fc,d:.6},{p:Fc,d:.6},{p:Ft,d:.6}],candle:()=>[{p:os,d:.8},{p:os,d:.5,cue:"release"},{p:pa,d:.6},{p:pa,d:1},{p:Ft,d:.6}],beads:()=>{let i=[{p:as,d:.5}];for(let e=0;e<7;e++)i.push({p:Mt({...as,headX:.22,eyes:1,aRx:-1.15}),d:.32,cue:"bead"},{p:Mt({...as,headX:.2,eyes:1}),d:.32});return i.push({p:Ft,d:.6}),i},give:()=>[{p:bm,d:.7},{p:bm,d:.4,cue:"release"},{p:ss,d:.6},{p:Ft,d:.6}],eat:()=>{let i=[];for(let e=0;e<3;e++)i.push({p:_m,d:.55},{p:_m,d:.25,cue:"bite"},{p:md,d:.6});return i},wave:()=>[{p:Em,d:.4},{p:Mt({aRx:-2.6,aRz:-.1}),d:.3},{p:Em,d:.3},{p:Mt({aRx:-2.6,aRz:-.1}),d:.3},{p:Ft,d:.5}],shake:()=>[{p:Io,d:.5},{p:Mt({...Io,aRx:-1.1}),d:.2},{p:Io,d:.2},{p:Mt({...Io,aRx:-1.1}),d:.2},{p:Io,d:.3},{p:Ft,d:.5}],pat:()=>[{p:Lo,d:.5},{p:Mt({...Lo,aRx:-1.55}),d:.22},{p:Lo,d:.22},{p:Mt({...Lo,aRx:-1.55}),d:.22},{p:Lo,d:.22},{p:Ft,d:.5}],hug:()=>[{p:Sm,d:.6},{p:Sm,d:1.6},{p:Ft,d:.6}]},ev={flower:xm,sit:md,envelope:xm},ct=(i,e={})=>new Ne({color:i,roughness:.75,metalness:0,...e}),Ti=class{constructor({outfit:e="suit",look:t=Tn}={}){this.root=new Te,this.root.name="avatar",this.body=new Te,this.root.add(this.body),this.hips=new Te,this.torso=new Te,this.head=new Te,this.armL=new Te,this.armR=new Te,this.legL=new Te,this.legR=new Te,this.body.add(this.hips),this.hips.add(this.torso,this.legL,this.legR),this.torso.add(this.head,this.armL,this.armR),this.head.position.y=.66,this.armL.position.set(.25,.43,0),this.armR.position.set(-.25,.43,0),this.legL.position.set(.1,0,0),this.legR.position.set(-.1,0,0),this.cur={...Ft},this.seq=null,this.hold=null,this.walkPhase=0,this.moving=0,this.blinkT=2+Math.random()*3,this.parts=[],this.props={},this.expr=null,this.exprT=0,this.tears=[],this.barefoot=!1,this.outfitId=Tr[e]?e:"suit",this.look={...Tn,...t},this.rebuild()}get height(){return this.look.height||1}setOutfit(e){this.outfitId=Tr[e]?e:"suit",this.rebuild()}setLook(e){this.look={...Tn,...e},this.rebuild()}setBarefoot(e){this.barefoot!==e&&(this.barefoot=e,this.rebuild())}part(e,t,n,r,s={}){let a=new H(t,n);return r&&a.position.set(...r),s.rot&&a.rotation.set(...s.rot),s.scale&&a.scale.set(...s.scale),a.castShadow=s.shadow!==!1,e.add(a),this.parts.push(a),a}rebuild(){let e=Object.values(this.props).map(u=>{let d=u.parent===this.handL?"L":"R";return u.parent?.remove(u),[u,d]});for(let u of this.parts)u.parent?.remove(u),u.geometry?.dispose?.();this.parts=[];let t=Tr[this.outfitId],n=this.look,r=ct(n.skin,{roughness:.9});this.root.scale.setScalar(n.height||1);let s=this.part(this.head,new ft(.3,32,24),r,[0,0,0],{scale:[1,.94,.96]});s.userData.skin=!0;let a=new ft(.06,14,10);this.handL=this.part(this.armL,a,r,[0,-.34,0]),this.handR=this.part(this.armR,a,r,[0,-.34,0]),this.buildFace(n);let o=ct(t.top);if(t.robe?(this.part(this.torso,new Me(.19,.31,.92,20),ct(t.robe,{roughness:1}),[0,.06,0]),this.part(this.torso,new ft(.2,18,12,0,Math.PI*2,0,Math.PI/2),ct(t.robe,{roughness:1}),[0,.5,0])):this.part(this.torso,new Jn(.2,.16,6,18),o,[0,.28,0]),t.shirt){let u=new _i;u.moveTo(-.075,.12),u.lineTo(.075,.12),u.lineTo(0,-.08),u.closePath(),this.part(this.torso,new Er(u),ct("#f5f4ef"),[0,.4,.198],{rot:[-.12,0,0],shadow:!1}),this.part(this.torso,new xe(.035,.14,.01),ct(t.tie),[0,.39,.207],{rot:[-.12,0,0],shadow:!1})}if(t.collar2){for(let u of[-1,1])this.part(this.torso,new xe(.08,.05,.01),ct("#2f3238"),[.045*u,.5,.185],{rot:[-.3,0,u*.5],shadow:!1});for(let u=0;u<3;u++)this.part(this.torso,new ft(.01,6,4),ct("#6b6e75"),[0,.42-u*.08,.2],{shadow:!1})}if(t.collar&&this.part(this.torso,new En(.11,.022,8,24),ct(t.collar),[0,.52,.02],{rot:[Math.PI/2-.25,0,0]}),t.goreum){let u=ct(t.goreum);this.part(this.torso,new xe(.05,.05,.03),u,[.05,.36,.2]),this.part(this.torso,new xe(.03,.2,.012),u,[.07,.25,.205],{rot:[0,0,.1]}),this.part(this.torso,new xe(.03,.16,.012),u,[.03,.26,.207],{rot:[0,0,-.1]}),this.part(this.torso,new xe(.03,.2,.012),ct("#f6f4ee"),[-.02,.45,.19],{rot:[-.2,0,-.7],shadow:!1})}if(t.ribbon){let u=ct("#f7f6f2");this.part(this.torso,new cn(.035,.06,4),u,[.1,.43,.2],{rot:[0,0,-Math.PI/2]}),this.part(this.torso,new cn(.035,.06,4),u,[.16,.43,.2],{rot:[0,0,Math.PI/2]}),this.part(this.torso,new xe(.025,.07,.01),ct("#111"),[.13,.39,.205])}t.rope&&this.part(this.torso,new En(.235,.022,8,28),ct(t.rope,{roughness:1}),[0,.14,0],{rot:[Math.PI/2,0,0]});let c=t.robe?ct(t.robe,{roughness:1}):ct(t.sleeve);for(let[u,d]of[[this.armL,1],[this.armR,-1]])this.part(u,new Jn(.07,.2,4,12),c,[0,-.16,0]),t.armband&&d===1&&(this.part(u,new Me(.078,.078,.08,16,1,!0),ct("#0f0f10"),[0,-.1,0]),this.part(u,new Me(.081,.081,.012,16,1,!0),ct("#f4f4f0"),[0,-.085,0]),this.part(u,new Me(.081,.081,.012,16,1,!0),ct("#f4f4f0"),[0,-.115,0]));let l=t.pants?ct(t.pants):ct("#efe9dd"),h=this.barefoot?ct(t.pants?"#1f1f22":"#f3f1ea"):ct(t.shoes);for(let u of[this.legL,this.legR])this.part(u,new Jn(.075,.18,4,10),l,[0,-.17,0]),this.part(u,new xe(this.barefoot?.11:.13,.07,.19),h,[0,-.37,.04]);if(t.skirt){let u=t.skirtLen||.4;this.part(this.hips,new Me(.2,.34,u,22,1,!0),ct(t.skirt,{side:Et}),[0,-u/2+.06,0])}if(t.hood){let u=ct("#d9cba7",{roughness:1});this.part(this.head,new ft(.32,24,16,0,Math.PI*2,0,Math.PI*.62),u,[0,.04,-.03],{rot:[-.62,0,0]});for(let d=-1;d<=1;d++)this.part(this.head,new xe(.05,.2,.42),u,[d*.07,.33,0],{rot:[0,0,d*.05]});this.part(this.head,new En(.3,.028,8,28),ct(t.rope,{roughness:1}),[0,.17,-.02],{rot:[Math.PI/2-.35,0,0]})}else this.buildHair(n,t);t.cane&&this.part(this.handR,new Me(.018,.018,1,8),ct("#8a7650"),[0,-.12,.02]);for(let[u,d]of e)(d==="L"?this.handL:this.handR).add(u);this.root.traverse(u=>{u.isMesh&&(u.userData.avatar=this,this.interactTag&&(u.userData.interact=this.interactTag))})}buildHair(e,t){let n=ct(e.hairColor,{roughness:.85}),r=()=>this.part(this.head,new ft(.322,26,16,0,Math.PI*2,0,Math.PI*.58),n,[0,.04,-.025],{rot:[-.6,0,0]});switch(e.hair){case"bald":break;case"part":r(),this.part(this.head,new ft(.15,16,10),n,[.1,.2,.17],{scale:[1.2,.55,.9],rot:[.2,0,-.35]});break;case"bob":r(),this.part(this.head,new Me(.33,.35,.3,24,1,!0,1,Math.PI*2-2),ct(e.hairColor,{roughness:.85,side:Et}),[0,-.07,-.01]);break;case"long":r(),this.part(this.head,new Me(.33,.37,.58,24,1,!0,1.05,Math.PI*2-2.1),ct(e.hairColor,{roughness:.85,side:Et}),[0,-.2,-.01]);break;case"pony":r(),this.part(this.head,new Jn(.07,.22,4,10),n,[0,-.12,-.36],{rot:[.35,0,0]}),this.part(this.head,new En(.06,.015,6,14),ct("#111"),[0,.02,-.32],{rot:[1.2,0,0]});break;case"bun":r(),this.part(this.head,new ft(.115,16,12),n,[0,-.08,-.31]),this.part(this.head,new Me(.012,.012,.38,8),ct("#7fa08c",{roughness:.3}),[0,-.07,-.33],{rot:[0,0,Math.PI/2]});break;case"perm":{let s=new ft(.075,10,8),a=new ji(s,n,46),o=new tt,c=0;for(let l=0;l<4;l++){let h=.15+l*.36,u=l===0?4:8+l*3;for(let d=0;d<u&&c<46;d++){let p=d/u*Math.PI*2+l,f=Math.sin(h)*Math.cos(p),v=Math.cos(h),m=Math.sin(h)*Math.sin(p);m>.55&&v<.6||(o.makeTranslation(f*.31,v*.31+.02,m*.31-.02),a.setMatrixAt(c++,o))}}a.count=c,a.castShadow=!0,this.head.add(a),this.parts.push(a);break}default:r()}if(t.hairRibbon){let s=ct("#fbfaf6");this.part(this.head,new cn(.04,.08,4),s,[.18,.22,.12],{rot:[0,0,-Math.PI/2]}),this.part(this.head,new cn(.04,.08,4),s,[.26,.22,.1],{rot:[0,0,Math.PI/2]})}}buildFace(e){let t=ct("#1d1a18",{roughness:.4});this.eyes=[],this.eyeKind=this.expr==="cry"?"sad":this.expr==="smile"?"smile":e.eyes;let n=this.eyeKind;for(let o of[-1,1]){let c;if(n==="smile")c=this.part(this.head,new En(.03,.008,6,12,Math.PI),t,[.1*o,-.005,.282],{shadow:!1});else if(n==="closed")c=this.part(this.head,new En(.03,.007,6,12,Math.PI),t,[.1*o,.01,.282],{rot:[0,0,Math.PI],shadow:!1});else{let p=n==="round"?.042:.032;c=this.part(this.head,new ft(p,12,8),t,[.1*o,n==="sad"?-.01:0,.272],{scale:[1,1.25,.6],shadow:!1}),c.userData.blink=!0,n==="round"&&this.part(this.head,new ft(.011,6,4),ct("#ffffff"),[.1*o+.012,.016,.3],{shadow:!1})}if(this.eyes.push(c),e.blush){let p=new H(new $t(.04,16),new ln({color:"#f29a8a",transparent:!0,opacity:.45}));p.position.set(.17*o,-.07,.262),p.rotation.y=.5*o,this.head.add(p),this.parts.push(p)}let l=this.expr==="cry"||n==="sad"?"sad":e.brows,h=l==="thick"?2:1,u=l==="sad"?-.38*o:-.06*o,d=ct(e.hair==="bald"?"#5a4a40":e.hairColor);this.part(this.head,new xe(.075,.014*h,.012),d,[.1*o,.085,.27],{rot:[-.2,0,u],shadow:!1})}let r=this.expr==="cry"?"sad":this.expr==="smile"?"smile":e.mouth,s=ct("#8a4b45");if(r==="smile"?this.part(this.head,new En(.03,.007,6,12,Math.PI),s,[0,-.105,.272],{rot:[0,0,Math.PI],shadow:!1}):r==="sad"?this.part(this.head,new En(.025,.007,6,12,Math.PI),s,[0,-.13,.27],{shadow:!1}):this.part(this.head,new xe(.045,.009,.01),s,[0,-.11,.276],{shadow:!1}),e.glasses!=="none"){let o=ct(e.glasses==="square"?"#2a211c":"#9a8a6a",{metalness:e.glasses==="round"?.6:0,roughness:.4});for(let c of[-1,1]){if(e.glasses==="round")this.part(this.head,new En(.055,.008,6,20),o,[.1*c,.005,.3],{shadow:!1});else{let l=this.part(this.head,new En(.058,.012,4,4),o,[.1*c,.005,.3],{rot:[0,0,Math.PI/4],scale:[1.25,.9,1],shadow:!1});l.rotation.z=Math.PI/4}this.part(this.head,new xe(.008,.008,.2),o,[.17*c,.01,.2],{rot:[0,-.35*c,0],shadow:!1})}this.part(this.head,new xe(.06,.008,.008),o,[0,.015,.305],{shadow:!1})}let a=ct(e.hairColor==="#e4e0d8"?"#d8d4cc":e.hairColor,{roughness:.9});(e.beard==="mustache"||e.beard==="beard")&&this.part(this.head,new Jn(.018,.07,4,8),a,[0,-.08,.282],{rot:[0,0,Math.PI/2],shadow:!1}),e.beard==="beard"&&this.part(this.head,new ft(.15,16,10,0,Math.PI*2,Math.PI*.55,Math.PI*.45),a,[0,.02,.06],{scale:[1.05,1.1,1.15]})}setExpression(e,t=4){this.expr=e,this.exprT=t,this.rebuild(),e==="cry"&&(this.tearT=0)}setProp(e,t,n={}){if(t&&!this.props[e]){let r;if(e==="flower"&&(r=Si(.75),r.rotation.set(.2,0,0),r.position.set(0,-.02,.05)),e==="envelope"&&(r=new H(new xe(.2,.012,.11),ct(n.color||"#fbfaf4")),r.rotation.z=.3,r.position.set(0,-.05,.04)),e==="beads"){r=new Te;let s=ct("#5a3a26",{roughness:.35}),a=new ft(.016,8,6);for(let o=0;o<24;o++){let c=o/24*Math.PI*2,l=new H(a,s);l.position.set(Math.cos(c)*.09,Math.sin(c)*.12-.08,0),r.add(l)}}if(!r)return;(e==="beads"?this.handL:this.handR).add(r),this.props[e]=r}else!t&&this.props[e]&&(this.props[e].parent?.remove(this.props[e]),delete this.props[e])}play(e,t,{soft:n=!1}={}){let r=Q1[e];return r?(this.seq&&this.seq.resolve?.(),new Promise(s=>{this.seq={steps:r(),i:0,t:0,from:{...this.cur},resolve:s,onCue:t,name:e,soft:n}})):Promise.resolve()}get busy(){return!!this.seq&&!this.seq.soft}cancelSoft(){if(this.seq?.soft){let e=this.seq.resolve;this.seq=null,e()}}finish(){if(!this.seq)return;let e=this.seq;e.i=e.steps.length-1,e.t=0,e.from={...this.cur}}update(e,t){this.moving+=((t?1:0)-this.moving)*Math.min(1,e*10);let n;if(this.seq){let c=this.seq,l=c.steps[c.i];c.t+=e;let h=Math.min(1,c.t/l.d),u=h*h*(3-2*h);n={};for(let d of pm)n[d]=c.from[d]+(l.p[d]-c.from[d])*u;h>=1&&(l.cue&&c.onCue?.(l.cue),c.i++,c.t=0,c.from={...l.p},c.i>=c.steps.length&&(this.seq=null,c.resolve())),this.cur=n}else{let c=this.hold&&ev[this.hold]||Ft,l=Math.min(1,e*8);for(let h of pm)this.cur[h]+=(c[h]-this.cur[h])*l;n=this.cur}let r=this.moving;r>.01&&(this.walkPhase+=e*9.5);let s=Math.sin(this.walkPhase)*r,a=this.hold==="flower"||this.hold==="envelope";this.hips.position.y=n.hipsY+Math.abs(Math.cos(this.walkPhase))*.035*r,this.torso.rotation.set(n.torsoX+.04*r,0,s*.04),this.head.rotation.set(n.headX,n.headY,0),this.armL.rotation.set(n.aLx-s*.55,0,n.aLz),this.armR.rotation.set(n.aRx+(a?0:s*.55),0,n.aRz),this.legL.rotation.set(n.lLx+s*.6,0,n.lLz),this.legR.rotation.set(n.lRx-s*.6,0,n.lRz),this.blinkT-=e;let o=n.eyes;this.blinkT<0&&(o=1,this.blinkT<-.12&&(this.blinkT=2.5+Math.random()*3.5));for(let c of this.eyes)c.userData.blink&&(c.scale.y=o>.5?.18:1.25);this.props.beads&&(this.props.beads.rotation.z+=e*.6),this.expr&&(this.exprT-=e,this.expr==="cry"&&(this.tearT=(this.tearT||0)-e,this.tearT<=0&&(this.tearT=.45,this.spawnTear())),this.exprT<=0&&(this.expr=null,this.rebuild()));for(let c=this.tears.length-1;c>=0;c--){let l=this.tears[c];l.life-=e,l.mesh.position.y-=e*.18,l.mesh.material.opacity=Math.min(.85,l.life*1.5),l.life<=0&&(this.head.remove(l.mesh),this.tears.splice(c,1))}}spawnTear(){let e=Math.random()<.5?-1:1,t=new H(new ft(.018,8,6),new Ne({color:"#9fd0ff",transparent:!0,opacity:.85,roughness:.1}));t.scale.set(.8,1.3,.8),t.position.set(.1*e,-.04,.28),this.head.add(t),this.tears.push({mesh:t,life:.9})}};var Ve=(i,e={})=>new Ne({color:i,roughness:.82,metalness:0,...e});function wi(i,e){let t=new bn(i);return t.colorSpace=At,t.anisotropy=4,e&&(t.wrapS=t.wrapT=Gr,t.repeat.set(...e)),t}function tv(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#e9e3d6",e.fillRect(0,0,256,256);for(let t=0;t<70;t++){e.strokeStyle=`rgba(160,150,130,${.05+Math.random()*.08})`,e.lineWidth=1+Math.random()*2,e.beginPath();let n=Math.random()*256,r=Math.random()*256;e.moveTo(n,r),e.bezierCurveTo(n+40,r+10,n+60,r+50,n+120,r+40),e.stroke()}return e.strokeStyle="rgba(140,130,115,0.45)",e.lineWidth=2,e.strokeRect(1,1,254,254),i}function Oc(i="#8a6446"){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,256,256);for(let n=0;n<8;n++)t.fillStyle=`rgba(${n%2?"255,240,220":"40,25,15"},0.06)`,t.fillRect(0,n*32,256,32),t.fillStyle="rgba(30,20,10,0.35)",t.fillRect(0,n*32,256,1.5),t.fillRect(n*97%256,n*32,1.5,32);for(let n=0;n<120;n++){t.strokeStyle="rgba(40,25,15,0.08)";let r=Math.random()*256;t.beginPath(),t.moveTo(0,r),t.bezierCurveTo(80,r+3,160,r-3,256,r+1),t.stroke()}return e}function Tm(i=!1){let e=document.createElement("canvas");e.width=256,e.height=i?256:512;let t=e.getContext("2d"),n=["#3d6fa8","#c24f45","#e3b74a","#5c9a6b","#7d5aa6","#4fa3b8","#e58b4d"];t.save(),t.beginPath(),i?t.arc(128,128,124,0,Math.PI*2):(t.moveTo(8,512),t.lineTo(8,128),t.arc(128,128,120,Math.PI,0),t.lineTo(248,512),t.closePath()),t.clip();let r=32;for(let s=0;s<e.height;s+=r)for(let a=0;a<256;a+=r)t.fillStyle=n[Math.floor(Math.random()*n.length)],t.globalAlpha=.85,t.beginPath(),t.moveTo(a+Math.random()*8,s+Math.random()*8),t.lineTo(a+r-Math.random()*8,s+Math.random()*8),t.lineTo(a+r-Math.random()*8,s+r-Math.random()*8),t.lineTo(a+Math.random()*8,s+r-Math.random()*8),t.fill();t.globalAlpha=1,t.strokeStyle="#26221e",t.lineWidth=4;for(let s=0;s<e.height;s+=r)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();for(let s=0;s<256;s+=r)t.beginPath(),t.moveTo(s,0),t.lineTo(s,e.height),t.stroke();if(i)for(let s=0;s<12;s++){let a=s/12*Math.PI*2;t.beginPath(),t.moveTo(128,128),t.lineTo(128+Math.cos(a)*130,128+Math.sin(a)*130),t.stroke()}else t.fillStyle="rgba(255,248,220,0.85)",t.fillRect(118,150,20,200),t.fillRect(78,200,100,20);return t.restore(),e}function nv(){let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,0);t.addColorStop(0,"#5e4b3d"),t.addColorStop(.5,"#6b5646"),t.addColorStop(1,"#5a4739"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let n=0;n<160;n++){e.strokeStyle=`rgba(90,55,25,${.04+Math.random()*.06})`;let r=Math.random()*512;e.beginPath(),e.moveTo(r,0),e.bezierCurveTo(r+6,170,r-6,340,r+3,512),e.stroke()}return e.fillStyle="#f7f5ef",e.fillRect(56,40,400,300),e.strokeStyle="#3f3229",e.lineWidth=6,e.strokeRect(53,37,406,306),e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=2,e.strokeRect(70,54,372,272),e.strokeStyle="rgba(80,45,20,0.45)",e.lineWidth=3,e.strokeRect(56,380,400,110),e.fillStyle="rgba(255,240,215,0.08)",e.fillRect(56,380,400,110),e.fillStyle="#3f3229",e.fillRect(0,352,512,10),i}function iv(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#d8d6cf",e.fillRect(0,0,256,256);for(let t=0;t<2600;t++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"90,90,85"},${Math.random()*.12})`,e.fillRect(Math.random()*256,Math.random()*256,2,2);return i}function wm(i,{FLOOR:e,textTexture:t,rng:n,deceasedName:r=""}){let s=n(4242),a=new Te,o=[],c=[],l=[],h=[],u=[],d={group:a,boxes:o,circles:c,walkables:l,lampMats:h,shoes:!1,update:(g,y)=>u.forEach(b=>b(g,y)),setName:()=>{}},p=(g,y,b,R)=>o.push({x0:g,x1:y,z0:b,z1:R}),f=(g,y,b={})=>(y&&g.position.set(...y),b.rot&&g.rotation.set(...b.rot),g.castShadow=b.cast!==!1,g.receiveShadow=b.receive!==!1,a.add(g),b.walk&&l.push(g),g),v=(g,y,b,R,M,U)=>f(new H(new xe(g,y,b),R),M,U),m=g=>(g.raycast=()=>{},g);function _(g,y){v(21,e,13.5,Ve(g,{roughness:.95}),[0,e/2,-5.75],{walk:!0});let b=f(new H(new vt(20.4,13),y),[0,e+.004,-5.9],{rot:[-Math.PI/2,0,0],cast:!1,walk:!0});for(let R=0;R<2;R++)v(7,e*(.66-R*.33),.6,Ve(g),[0,e*(.66-R*.33)/2,1.25+R*.6],{walk:!0});return b}if(i==="hospital"){d.shoes=!0,d.ceiling=e+3.7;let g=3.7;_("#cfcbc0",Ve("#d9d7d0",{roughness:.75,map:wi(iv(),[12,8])}));let y=wi(nv());y.wrapS=Gr;let b=pe=>{let re=y.clone();return re.repeat.set(pe/2.2,1),re.needsUpdate=!0,new Ne({map:re,roughness:.7})},R=Ve("#f3f1ea",{roughness:.9});v(20.6,g,.3,R,[0,e+g/2,-12.2]),p(-10.5,10.5,-12.6,-11.9),m(f(new H(new vt(20.4,g),b(20.4)),[0,e+g/2,-12.04],{cast:!1}));for(let pe of[-1,1])v(.3,g,12.2,R,[pe*10.15,e+g/2,-6.2]),p(pe*10.15-.3,pe*10.15+.3,-12.4,-.05),m(f(new H(new vt(12.2,g),b(12.2)),[pe*9.99,e+g/2,-6.2],{rot:[0,-pe*Math.PI/2,0],cast:!1}));let M=Ve("#5e4b3d",{roughness:.55});v(10.4,.5,.3,M,[0,e+3.3,-11.9]);for(let pe of[-5.1,5.1])v(.5,g,.4,M,[pe,e+g/2,-11.85]);let U=document.createElement("canvas");U.width=1024,U.height=512;let z=U.getContext("2d");z.fillStyle="#9c8b7a",z.fillRect(0,0,1024,512);for(let pe=0;pe<420;pe++){let re=Math.random()*1024;z.strokeStyle=`rgba(${Math.random()<.5?"70,55,42":"205,192,175"},${.05+Math.random()*.08})`,z.lineWidth=.6+Math.random()*1.6,z.beginPath(),z.moveTo(re,0),z.bezierCurveTo(re+(Math.random()-.5)*14,170,re+(Math.random()-.5)*14,340,re+(Math.random()-.5)*8,512),z.stroke()}z.fillStyle="rgba(40,30,22,0.18)";for(let pe=0;pe<=1024;pe+=256)z.fillRect(pe-1,0,2,512);let I=wi(U);m(f(new H(new vt(9.8,g-.05),new Ne({map:I,roughness:.55})),[0,e+(g-.05)/2,-11.6],{cast:!1}));for(let pe of[-1,1])v(8.9,g,.3,R,[pe*6.05,e+g/2,.75]),m(f(new H(new vt(8.9,g),b(8.9)),[pe*6.05,e+g/2,.59],{rot:[0,Math.PI,0],cast:!1})),p(pe>0?1.6:-10.5,pe>0?10.5:-1.6,.55,.95);v(3.2,g-2.6,.3,R,[0,e+2.6+(g-2.6)/2,.75]);let X=Ve("#8a5a32",{roughness:.5});for(let pe of[-1,1])m(v(1.5,2.55,.06,X,[pe*2.35,e+1.28,1.25],{rot:[0,pe*-1.05,0]}));let V=new Ne({roughness:.5});v(3.4,.5,.05,V,[0,e+3.05,.93]),d.setName=pe=>{V.map?.dispose(),V.map=t(`\uD2B91\uD638\uC2E4   \u6545 ${pe} \uB2D8`,{w:1024,h:150,bg:"#1f2a2c",fg:"#f4efe2",font:'500 70px "Gowun Dodum", sans-serif'}),V.needsUpdate=!0},d.setName(r),f(new H(new vt(20.6,13),Ve("#faf9f5",{side:Et,emissive:"#fffaf0",emissiveIntensity:.35})),[0,e+g-.005,-5.9],{rot:[Math.PI/2,0,0],cast:!1});let k=new Ne({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:1});h.push(k);for(let pe=-8;pe<=8;pe+=4)for(let re=-10.5;re<=-1;re+=3.2)m(f(new H(new $t(.16,20),k),[pe,e+g-.01,re],{rot:[Math.PI/2,0,0],cast:!1}));for(let pe of[-1,1])m(v(.12,.18,12.2,M,[pe*9.93,e+g-.1,-6.2],{cast:!1}));m(v(20.2,.18,.12,M,[0,e+g-.1,-11.98],{cast:!1})),v(22,.4,14.6,Ve("#d9d3c6"),[0,e+g+.2,-5.85]),v(21.8,.9,.2,Ve("#e9e4d8"),[0,e+g+.3,1]),v(5.2,.8,.12,new Ne({map:t("\uC0BC\uAC00 \uC7A5\uB840\uC2DD\uC7A5",{w:1024,h:160,bg:"#2f473e",fg:"#f4efe2",font:'700 92px "Gowun Batang", serif'})}),[0,e+g+1.15,1]);let J=Ve("#1c1c1e",{roughness:.45}),L=new Te,j=new H(new xe(.9,.42,2.4),J);j.position.y=.21,L.add(j);let ee=new H(new xe(.25,.9,2.4),J);ee.position.set(.33,.45,0),L.add(ee);for(let pe of[-1.3,1.3]){let re=new H(new xe(.9,.6,.22),J);re.position.set(0,.3,pe),L.add(re)}L.position.set(9.35,e,-8.6),L.traverse(pe=>{pe.isMesh&&(pe.castShadow=!0)}),a.add(L),p(8.85,9.9,-9.95,-7.25),v(1,1.05,.7,Ve("#f2f1ec",{roughness:.4}),[-9.4,e+.53,-10.9]),p(-9.95,-8.85,-11.3,-10.5);let ce=Ve("#3b3d42",{metalness:.4,roughness:.4}),ae=new Te,be=new H(new Me(.06,.08,2.4,10),ce);be.position.y=1.2,ae.add(be);let ue=new Ne({color:"#fff4e0",emissive:"#ffd99a",emissiveIntensity:1.1});h.push(ue);let Ee=new H(new xe(.42,.55,.42),ue);Ee.position.y=2.55,ae.add(Ee),d.lanternStand=ae}if(i==="hanok"){d.shoes=!0,d.ceiling=e+5.4;let g=Ve("#6a4e3b",{roughness:.7}),y=Ve("#4a372b",{roughness:.7});_("#d9d6ca",Ve("#c9ad8a",{roughness:.6,map:wi(Oc("#c3a582"),[6,4])}));let b=Ve("#f3efe4",{roughness:.95});v(20.6,5.4,.3,b,[0,e+2.7,-12.2]),p(-10.5,10.5,-12.6,-11.9);for(let V of[-1,1]){v(.3,5.4,12.2,b,[V*10.15,e+2.7,-6.2]),p(V*10.15-.3,V*10.15+.3,-12.4,-.05);for(let k of[.25,5.2])v(.34,.25,12.2,g,[V*10.15,e+k,-6.2]);for(let k=-12;k<=-.4;k+=2.6)v(.36,5.4,.22,g,[V*10.15,e+2.7,k]);for(let k=-11;k<=-1.5;k+=2.6)for(let J=0;J<5;J++)m(v(.32,.03,1.6,g,[V*10.15,e+3.6+J*.28,k+1.3],{cast:!1}))}for(let V=-10;V<=10;V+=2.5)v(.22,5.4,.36,g,[V,e+2.7,-12.05]);f(new H(new vt(20.6,13),Ve("#7a5c45",{side:Et})),[0,e+5.4,-5.9],{rot:[Math.PI/2,0,0]});for(let V=-12;V<=.5;V+=1.5)m(v(20.6,.18,.18,y,[0,e+5.3,V],{cast:!1}));for(let V of[-9.7,-5.3,5.3,9.7])f(new H(new Me(.27,.3,5.4,20),g),[V,e+2.7,.6]),f(new H(new Me(.42,.48,.25,8),Ve("#cfccbf")),[V,e+.12,.6]),c.push({x:V,z:.6,r:.45});v(21,.55,.45,y,[0,e+5.15,.6]),v(21.2,.16,.47,Ve("#557d6c"),[0,e+4.82,.6]),v(21.2,.05,.48,Ve("#8f4235"),[0,e+4.72,.6]),v(3,.9,.1,new Ne({map:t("\uC0BC\uAC00",{w:768,h:230,bg:"#3e5b50",fg:"#f3ead2",font:'700 140px "Gowun Batang", serif',border:"#c9b27c"}),roughness:.6}),[0,e+6.05,.9]);let R=Ve("#43464d",{roughness:.75});v(24.5,.4,17.5,R,[0,e+5.65,-5.9]),f(new H(new Me(.22,1,1,4,1),R),[0,e+7.45,-5.9],{rot:[0,Math.PI/4,0]}).scale.set(17.6,3.2,12.6),v(9.5,.45,.6,Ve("#35373d"),[0,e+9.2,-5.9]);for(let V of[-1,1])v(.7,.75,.7,Ve("#35373d"),[V*4.8,e+9.35,-5.9],{rot:[0,0,V*.25]});let U=t("\u8B39\u5F14",{w:256,h:512,bg:"#fbf8ef",fg:"#1d1b19",font:'700 150px "Noto Serif KR", "Gowun Batang", serif',vertical:!0});for(let V of[-4.45,4.45]){let k=new Te,J=new Ne({map:U,emissive:"#fff4dc",emissiveIntensity:.4,emissiveMap:U,roughness:.9});h.push(J),k.add(new H(new Me(.34,.34,.95,20),J));let L=new H(new Me(.3,.36,.08,20),Ve("#1d1d1f")),j=L.clone();L.position.y=.5,j.position.y=-.5,k.add(L,j),k.position.set(V,e+3.9,.9);let ee=s()*6;u.push((ce,ae)=>{k.rotation.z=Math.sin(ae*.9+ee)*.03}),a.add(k)}let z=new Te,I=Ve("#bdb9ab",{roughness:1});[[new Me(.5,.6,.25,8),.12],[new Me(.13,.16,.9,8),.7],[new Me(.42,.32,.2,8),1.25],[new xe(.55,.5,.55),1.6],[new cn(.62,.45,4),2.07]].forEach(([V,k])=>{let J=new H(V,I);J.position.y=k,V.type==="ConeGeometry"&&(J.rotation.y=Math.PI/4),J.castShadow=!0,z.add(J)});let X=new H(new xe(.3,.28,.6),new Ne({color:"#ffe0a3",emissive:"#ffc773",emissiveIntensity:1.2}));X.position.y=1.6,z.add(X),h.push(X.material),d.lanternStand=z}if(i==="hall"){d.shoes=!0,d.ceiling=e+4.8,_("#cfcbc0",Ve("#eae4d7",{roughness:.35,map:wi(tv(),[10,6])}));let g=Ve("#f4f2ed",{roughness:.9}),y=Ve("#8b6a4f",{roughness:.6,map:wi(Oc("#8b6a4f"),[1,4])});v(20.6,4.8,.3,g,[0,e+2.4,-12.2]),p(-10.5,10.5,-12.6,-11.9);for(let L=-9.6;L<=9.6;L+=.32)Math.abs(L)>6.9&&m(v(.14,4.6,.12,y,[L,e+2.3,-11.98],{cast:!1}));for(let L of[-1,1])v(.3,4.8,12.2,g,[L*10.15,e+2.4,-6.2]),v(.32,1,12.2,y,[L*10.1,e+.5,-6.2]),p(L*10.15-.3,L*10.15+.3,-12.4,-.05);let b=new Ne({color:"#cfe0e6",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1}),R=Ve("#3b3d42",{metalness:.4,roughness:.4});for(let L of[-1,1]){let j=L*6.45;m(v(7.7,3.3,.05,b,[j,e+1.65,.75],{cast:!1}));for(let ee=2.6;ee<=10.3;ee+=1.54)m(v(.06,3.3,.08,R,[L*ee,e+1.65,.75],{cast:!1}));p(L>0?2.6:-10.3,L>0?10.3:-2.6,.6,.9)}v(20.6,1.5,.3,g,[0,e+4.05,.75]),v(20.6,.08,.1,R,[0,e+3.3,.75]);let M=new Ne({roughness:.5}),U=v(4.2,.6,.06,M,[0,e+3.8,.94]);d.setName=L=>{M.map?.dispose(),M.map=t(`\uD2B91\uD638\uC2E4  \xB7  \u6545 ${L} \uB2D8 \uBE48\uC18C`,{w:1024,h:146,bg:"#2f3a3f",fg:"#f2efe6",font:'500 64px "Gowun Dodum", sans-serif'}),M.needsUpdate=!0},d.setName(r),f(new H(new vt(20.6,13),Ve("#fbfaf6",{side:Et})),[0,e+4.8,-5.9],{rot:[Math.PI/2,0,0],cast:!1});let z=new Ne({color:"#ffffff",emissive:"#fff6e8",emissiveIntensity:.9});h.push(z);for(let L=-7.5;L<=7.5;L+=3.75)for(let j=-10;j<=-1;j+=3)m(v(1.4,.04,.6,z,[L,e+4.77,j],{cast:!1}));v(21.5,.5,14.2,Ve("#5b5e64"),[0,e+5.05,-5.9]),v(21.6,.7,.2,Ve("#d8d4ca"),[0,e+5,1.15]);let I=new Te,X=new H(new Me(.06,.08,2.4,10),R);X.position.y=1.2,I.add(X);let V=new Ne({color:"#fff4e0",emissive:"#ffd99a",emissiveIntensity:1.1,transparent:!0,opacity:.95});h.push(V);let k=new H(new xe(.42,.55,.42),V);k.position.y=2.55,I.add(k);let J=new H(new xe(.55,.06,.55),R);J.position.y=2.86,I.add(J),I.traverse(L=>{L.isMesh&&(L.castShadow=!0)}),d.lanternStand=I}if(i==="chapel"){_("#d6d1c4",Ve("#9a7656",{roughness:.55,map:wi(Oc("#9a7656"),[6,4])}));let g=Ve("#f5f1e8",{roughness:.95}),y=6.4;d.ceiling=e+y,v(20.6,y,.3,g,[0,e+y/2,-12.2]),p(-10.5,10.5,-12.6,-11.9);let b=wi(Tm(!1));for(let ue of[-1,1]){v(.3,y,12.2,g,[ue*10.15,e+y/2,-6.2]),p(ue*10.15-.3,ue*10.15+.3,-12.4,-.05);for(let Ee of[-10.6,-7.95,-5.25,-2.55]){let pe=new Ne({map:b,emissive:"#ffffff",emissiveMap:b,emissiveIntensity:.55,transparent:!0,alphaTest:.1,side:Et});h.push(pe),m(f(new H(new vt(1,2),pe),[ue*9.98,e+4.55,Ee],{rot:[0,-ue*Math.PI/2,0],cast:!1}))}}for(let ue of[-1,1])v(8.9,y,.35,g,[ue*6.05,e+y/2,.75]),p(ue>0?1.6:-10.5,ue>0?10.5:-1.6,.55,.95);v(3.2,y-3.6,.35,g,[0,e+3.6+(y-3.6)/2,.75]);let R=new Ne({map:wi(Tm(!0)),emissive:"#ffffff",emissiveIntensity:.6,transparent:!0,alphaTest:.1});R.emissiveMap=R.map,h.push(R),m(f(new H(new $t(.9,32),R),[0,e+5.6,.94],{cast:!1}));let M=Ve("#5d4030",{roughness:.6});for(let ue of[-1,1])m(v(1.5,3.4,.08,M,[ue*2.4,e+1.7,1.15],{rot:[0,ue*-.9,0]}));let U=new _i;U.moveTo(-11.3,0),U.lineTo(0,4.2),U.lineTo(11.3,0),U.lineTo(-11.3,0);let z=f(new H(new Qs(U,{depth:14.6,bevelEnabled:!1}),Ve("#4a4f57",{roughness:.7})),[0,e+y,-13]),I=new _i;I.moveTo(-10.4,0),I.lineTo(0,3.9),I.lineTo(10.4,0),I.lineTo(-10.4,0),f(new H(new Er(I),g),[0,e+y,.95]),f(new H(new vt(20.6,13),Ve("#6b4b36",{side:Et})),[0,e+y,-5.9],{rot:[Math.PI/2,0,0],cast:!1});for(let ue=-11.5;ue<=0;ue+=2.3)m(v(20.4,.25,.25,Ve("#5a3e2c"),[0,e+y-.15,ue],{cast:!1}));v(1.8,2.6,1.8,g,[0,e+y+4,0]);let X=f(new H(new cn(1.45,2.4,4),Ve("#4a4f57")),[0,e+y+6.5,0],{rot:[0,Math.PI/4,0]}),V=Ve("#d9c07a",{metalness:.6,roughness:.35});v(.12,1,.12,V,[0,e+y+8.1,0]),v(.6,.12,.12,V,[0,e+y+8.3,0]);let k=Ve("#6e4c34",{roughness:.5});v(.28,2.4,.16,k,[0,e+5,-11.95]),v(1.4,.26,.16,k,[0,e+5.5,-11.95]);let J=new ln({color:"#fff4d8",transparent:!0,opacity:.18});m(f(new H(new $t(1.6,40),J),[0,e+5.2,-12.03],{cast:!1}));let L=Ve("#7a5639",{roughness:.55});for(let ue of[-1,1])for(let Ee of[-4.2,-3.1]){let pe=ue>0?5:-8.8,re=ue>0?8.8:-5,ge=(pe+re)/2,ve=re-pe;v(ve,.08,.5,L,[ge,e+.45,Ee]),v(ve,.55,.06,L,[ge,e+.75,Ee+.25]),v(.08,.9,.55,L,[pe,e+.45,Ee+.02]),v(.08,.9,.55,L,[re,e+.45,Ee+.02]),p(pe-.05,re+.05,Ee-.3,Ee+.32)}for(let ue=0;ue<9;ue++){let Ee=1.2+Math.sin(ue/8*Math.PI)*1.4;f(new H(new Me(.08,.08,Ee,10),V),[7.4+ue*.22,e+1+Ee/2,-11.6])}v(2.3,1,.7,Ve("#5d4030"),[8.3,e+.5,-11.3]),p(7.1,9.5,-11.9,-10.9);let j=new Te,ee=Ve("#2f2b28",{metalness:.5,roughness:.5}),ce=new H(new Me(.05,.07,1.1,8),ee);ce.position.y=.55,j.add(ce);let ae=new H(new Me(.55,.55,.06,20),ee);ae.position.y=1.12,j.add(ae);let be=new Ne({color:"#ffd27a",emissive:"#ffc35a",emissiveIntensity:1.2});h.push(be);for(let ue=0;ue<12;ue++){let Ee=ue/12*Math.PI*2,pe=ue%2?.42:.25,re=new H(new Me(.04,.04,.14,8),Ve("#fbf6ea"));re.position.set(Math.cos(Ee)*pe,1.22,Math.sin(Ee)*pe),j.add(re);let ge=new H(new cn(.02,.06,6),be);ge.position.set(Math.cos(Ee)*pe,1.33,Math.sin(Ee)*pe),j.add(ge)}d.lanternStand=j}if(i==="garden"){_("#b7a68a",Ve("#a98563",{roughness:.6,map:wi(Oc("#a98563"),[5,4])}));let g=Ve("#f4f1ea",{roughness:.7}),y=[[-9.8,.4],[-9.8,-5.8],[-9.8,-11.8],[9.8,.4],[9.8,-5.8],[9.8,-11.8],[-4.9,.4],[4.9,.4]];for(let[L,j]of y)v(.25,3.8,.25,g,[L,e+1.9,j]),c.push({x:L,z:j,r:.3});for(let L of[.4,-5.8,-11.8])m(v(20,.18,.22,g,[0,e+3.85,L],{cast:!1}));for(let L=-9.8;L<=9.8;L+=1.4)m(v(.12,.12,12.6,g,[L,e+3.98,-5.7],{cast:!1}));let b=new Ne({color:"#ffffff",transparent:!0,opacity:.55,side:Et,roughness:1,depthWrite:!1});for(let L=-9;L<=9;L+=2){let j=new vt(2.1,3.6,6,1),ee=j.attributes.position;for(let ce=0;ce<ee.count;ce++)ee.setZ(ce,Math.sin((ee.getX(ce)+1.05)*3)*.12);m(f(new H(j,b),[L,e+2,-12.05],{cast:!1}))}let R=new Ne({color:"#fff3d0",emissive:"#ffd98a",emissiveIntensity:1.2});h.push(R);let M=new ft(.05,8,6);for(let L of[-2.5,-5.8,-9])for(let j=-9.6;j<=9.6;j+=.6){let ee=.45*(1-(j/9.8)**2);m(f(new H(M,R),[j,e+3.75-ee,L],{cast:!1}))}let U=f(new H(new Me(.45,.8,7,10),Ve("#6d5444")),[0,3.5,-15.5]),z=Ve("#8fae6a",{flatShading:!0});for(let L=0;L<9;L++)f(new H(new br(2.4+s()*1.4,0),z),[(s()-.5)*9,8+s()*3,-15-s()*3]);for(let L=-9;L<=9;L+=1.5){if(Math.abs(L)<3)continue;let j=v(.6,.4,.4,Ve("#e8e2d6"),[L,e+.2,.9]);for(let ee=0;ee<4;ee++){let ce=Si(1.4,ee%3?"white":"cream");ce.position.set(L+(ee-1.5)*.12,e+.7,.9+(s()-.5)*.1),a.add(ce)}p(L-.32,L+.32,.68,1.12)}let I=new Te,X=new H(new xe(.14,2.4,.14),Ve("#7a5a40"));X.position.y=1.2,I.add(X);let V=new H(new xe(.6,.08,.08),Ve("#7a5a40"));V.position.set(.25,2.3,0),I.add(V);let k=new Ne({color:"#fff3dc",emissive:"#ffd08a",emissiveIntensity:1.1});h.push(k);let J=new H(new ft(.24,16,12),k);J.scale.y=1.2,J.position.set(.5,1.95,0),I.add(J),d.lanternStand=I,d.easels=!0}return d}var Oe=.4,Ri=.3,Gc=30,De=(i,e={})=>new Ne({color:i,roughness:.82,metalness:0,...e});function Rm(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ls(i,{w:e=512,h:t=256,bg:n="#f6f3ea",fg:r="#2a2723",font:s='700 120px "Gowun Batang", serif',vertical:a=!1,border:o=null}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let l=c.getContext("2d");if(n&&(l.fillStyle=n,l.fillRect(0,0,e,t)),o&&(l.strokeStyle=o,l.lineWidth=Math.max(4,e*.02),l.strokeRect(l.lineWidth,l.lineWidth,e-l.lineWidth*2,t-l.lineWidth*2)),l.fillStyle=r,l.font=s,l.textAlign="center",l.textBaseline="middle",a){let u=[...i],d=t/(u.length+.6);u.forEach((p,f)=>l.fillText(p,e/2,d*(f+.8)))}else{let u=i.split(`
`),d=t/(u.length+.4);u.forEach((p,f)=>l.fillText(p,e/2,d*(f+.7)))}let h=new bn(c);return h.colorSpace=At,h.anisotropy=4,h}function rv(i){let e=[...i.replace(/\s+/g," ")].slice(0,22),t=document.createElement("canvas");t.width=96,t.height=768;let n=t.getContext("2d");n.fillStyle="#fbfaf6",n.fillRect(0,0,96,768),n.fillStyle="#1b1a18";let r=Math.min(64,740/Math.max(1,e.length));n.font=`700 ${Math.floor(r*.86)}px "Noto Serif KR", "Gowun Batang", serif`,n.textAlign="center",n.textBaseline="middle",e.forEach((a,o)=>n.fillText(a,48,20+r*(o+.5)));let s=new bn(t);return s.colorSpace=At,s}function Am(i=64,e="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);s.addColorStop(0,e),s.addColorStop(1,t),r.fillStyle=s,r.fillRect(0,0,i,i);let a=new bn(n);return a.colorSpace=At,a}function Cm(i=""){let e=document.createElement("canvas");e.width=600,e.height=800;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,800);return n.addColorStop(0,"#e9e6dc"),n.addColorStop(1,"#cfcabb"),t.fillStyle=n,t.fillRect(0,0,600,800),t.fillStyle="#a9a291",t.beginPath(),t.ellipse(300,330,130,155,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(300,760,250,240,0,Math.PI,0),t.fill(),t.fillStyle="#6f6a5e",t.font='700 54px "Gowun Batang", serif',t.textAlign="center",t.fillText(i?`\u6545 ${i}`:"\uC601\uC815 \uC0AC\uC9C4",300,700),e.toDataURL("image/jpeg",.9)}function sv(i){let e=document.createElement("canvas");e.width=400,e.height=300;let t=e.getContext("2d"),n=["#e8dfcf","#dfe5dc","#e6dde3","#dde2e8"];return t.fillStyle=n[i%n.length],t.fillRect(0,0,400,300),t.strokeStyle="rgba(80,70,60,.25)",t.lineWidth=3,t.beginPath(),t.moveTo(40,230),t.lineTo(140,130),t.lineTo(210,200),t.lineTo(260,160),t.lineTo(360,240),t.stroke(),t.beginPath(),t.arc(300,90,24,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(70,62,52,.6)",t.font='500 24px "Gowun Dodum", sans-serif',t.textAlign="center",t.fillText("\uCD94\uC5B5 \uC0AC\uC9C4 \uC790\uB9AC",200,278),e}var Hc={day:{top:"#a9c8dc",bottom:"#f1f0e8",fog:"#ebebe3",hemiSky:"#ffffff",hemiGround:"#b8b29d",hemi:1.15,sun:"#fff1df",sunI:1.7,lamp:.55,star:0},dusk:{top:"#7183a8",bottom:"#f0c39f",fog:"#e5c9b2",hemiSky:"#ffe2c8",hemiGround:"#8a7a6a",hemi:.85,sun:"#ffae7a",sunI:1.25,lamp:1.1,star:.15},night:{top:"#0a1427",bottom:"#2b3654",fog:"#1b2338",hemiSky:"#7d8cc0",hemiGround:"#2a2a33",hemi:.42,sun:"#a9bcff",sunI:.35,lamp:2,star:1}};function Pm(i){let e=new Vr,t=Rm(20261101),n=new Set,r=[],s=[],a=new Map,o=[],c=[],l=(P,F,$,se)=>r.push({x0:P,x1:F,z0:$,z1:se}),h=(P,F,$)=>s.push({x:P,z:F,r:$}),u=(P,F)=>P.traverse($=>{($.isMesh||$.isSprite||$.isInstancedMesh)&&($.userData.interact=F)}),d=P=>(P.raycast=()=>{},P);function p(P,F){return a.set(P,{id:P,...F}),F}let f={top:{value:new et},bottom:{value:new et}},v=d(new H(new ft(400,32,16),new Pn({uniforms:f,side:Sn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = clamp(vP.y*1.6+0.15,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, pow(h,0.8)),1.0); }"})));e.add(v);let m=new Pt,_=[];for(let P=0;P<700;P++){let F=t()*Math.PI*2,$=Math.acos(t()*.9+.08);_.push(Math.sin($)*Math.cos(F)*350,Math.cos($)*350,Math.sin($)*Math.sin(F)*350)}m.setAttribute("position",new ze(_,3));let g=new Zs({color:"#ffffff",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1});e.add(d(new no(m,g))),e.fog=new Ka("#ebebe3",40,140);let y=new jr("#ffffff","#b8b29d",1.1);e.add(y);let b=new qr("#fff1df",1.7);b.position.set(-14,24,16),b.castShadow=!0,b.shadow.mapSize.set(2048,2048),Object.assign(b.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:80}),b.shadow.bias=-6e-4,b.shadow.normalBias=.03,e.add(b,b.target),b.target.position.set(0,0,-2);let R=new H(new $t(160,64),De("#dcdccd",{roughness:1}));R.rotation.x=-Math.PI/2,R.receiveShadow=!0,e.add(R),n.add(R);let M=new H(new $t(60,48),De("#cfd6bd",{roughness:1}));M.rotation.x=-Math.PI/2,M.position.y=.005,M.receiveShadow=!0,e.add(M),n.add(M);let U=De("#efeee6",{roughness:.95});for(let P=2.6;P<24;P+=1.25)for(let F of[-1.05,1.05]){let $=new H(new xe(2+t()*.06,.06,1.12),U);$.position.set(F+(t()-.5)*.06,.03,P),$.receiveShadow=!0,e.add($),n.add($)}let z=["#b9c4a3","#c7b99a","#a9b896","#c9ae8c"];for(let P=0;P<14;P++){let F=P/14*Math.PI*2+t()*.3,$=95+t()*25,se=d(new H(new ft(30+t()*25,24,12),De(z[P%4],{roughness:1})));se.scale.y=.35+t()*.2,se.position.set(Math.cos(F)*$,-4,Math.sin(F)*$),e.add(se)}let I=null,X=new Te;e.add(X);let V=new Te;V.position.set(-4.6,0,9.5),e.add(V),h(-4.6,9.5,.65);let k=new qi("#ffcb7a",2,6,2);k.position.set(-4.6,1.9,9.5),e.add(k),p("lantern",{label:"\uB9C8\uC74C \uB4F1\uBD88",verb:"\uB4F1\uBD88 \uB744\uC6B0\uAE30",spot:{x:-3.6,z:10.3,face:-Math.PI*.75},radius:1.5,anchor:new S(-4.6,2.7,9.5)});let J=new qi("#fff6ec",18,14,1.6);J.position.set(0,Oe+4.2,-7.2),e.add(J);let L=new qi("#fbf8f2",10,16,1.8);L.position.set(0,Oe+4.3,-2.2),e.add(L);let j=new Te;e.add(j);let ee=-10.4,ce=null,ae=new H(new xe(13.6,4.5,.3),De("#e7e3d8"));ae.position.set(0,Oe+2.25,ee-.8),j.add(ae),l(-7,7,-11.9,-9.75);let be=new Te;be.position.set(0,Oe,-9.95),j.add(be);let ue=new H(new xe(1.32,1.72,.09),De("#121214",{roughness:.35}));ue.position.y=2.38,ue.castShadow=!0,be.add(ue);let Ee=new ln({color:"#ffffff"}),pe=new H(new vt(1.1,1.47),Ee);pe.position.set(0,2.38,.05),be.add(pe);for(let P of[-1,1]){let F=new H(new xe(.62,.075,.02),De("#0c0c0d",{roughness:.6}));F.position.set(P*.47,3,.065),F.rotation.z=P*-Math.PI/4,be.add(F)}let re=new H(new xe(.9,1.5,.3),De("#e9e5da"));re.position.set(0,.75,-.1),be.add(re),u(be,"portrait");let ge=new Te;ge.position.set(0,Oe+3.8,-10),j.add(ge);let ve=new H(new xe(.26,.62,.06),new Ne({color:"#ffffff",roughness:.6}));ve.position.set(-1.35,Oe+1.12,-8.7),j.add(ve);let ke=new Te;j.add(ke);let je=new Te;ke.add(je);let w=new H(new xe(3.9,.8,1.1),De("#f4f1e8"));w.position.set(0,Oe+.4,-8.4),w.castShadow=!0,w.receiveShadow=!0,ke.add(w),l(-2.05,2.05,-9,-7.8);let T=Oe+.8,G=new Te,N=new H(new Me(.17,.12,.15,24),De("#7a6a4a",{metalness:.6,roughness:.4}));N.position.y=.075,G.add(N);let x=new H(new $t(.15,24),De("#cfc8b8"));x.rotation.x=-Math.PI/2,x.position.y=.14,G.add(x),G.position.set(0,T,-8.15),j.add(G);let C=new Te;C.position.copy(G.position).add(new S(0,.14,0)),j.add(C);let W=[];for(let P of[-1.35,1.35]){let F=new H(new Me(.05,.05,.42,14),De("#fbfaf5"));F.position.set(P,T+.21,-8.3),ke.add(F);let $=new H(new cn(.03,.09,10),new ln({color:"#ffcf73"}));$.position.set(P,T+.47,-8.3),ke.add($),W.push($)}let B=new qi("#ffbf6a",3,5,2);B.position.set(0,T+.6,-8),e.add(B);let te=["#c9493b","#e3c063","#d78f3c"];[-.7,.7].forEach((P,F)=>{let $=new H(new Me(.2,.15,.06,20),De("#efe9da"));$.position.set(P,T+.03,-8.55),je.add($);for(let se=0;se<4;se++){let ye=new H(new ft(.075,14,10),De(te[(F+se)%3],{roughness:.5}));ye.position.set(P+(se%2?.07:-.07),T+.13+(se>1?.11:0),-8.55+(se===1?.05:-.03)),je.add(ye)}}),u(w,"altar"),u(G,"altar");let q=new H(new xe(3.7,.1,.95),De("#efece2"));q.position.set(0,Oe+.05,-7.25),q.receiveShadow=!0,ke.add(q),l(-1.9,1.9,-7.75,-6.8);let K=new Te;j.add(K),u(q,"altar");let ne=new H(new xe(.85,.08,.85),De("#4b4f5c"));ne.position.set(0,Oe+.04,-6.15),ne.receiveShadow=!0,j.add(ne),n.add(ne);let le=new Te;j.add(le);let he=Oe+.95,Ae=new Ne({color:"#e4e2dc",roughness:.7}),Be=De("#4f4037",{roughness:.5}),Xe=new H(new xe(3.9,.95,1.1),Be);Xe.position.set(0,Oe+.475,-8.4),Xe.castShadow=!0,Xe.receiveShadow=!0,le.add(Xe);for(let P=0;P<4;P++){let F=new H(new vt(.86,.72),Ae);F.position.set(-1.43+P*.953,Oe+.47,-7.845),le.add(F)}let st=new H(new xe(3.95,.02,1.15),new Ne({color:"#cfe0dc",transparent:!0,opacity:.35,roughness:.05}));st.position.set(0,he+.01,-8.4),le.add(st);let rt=De("#8a1d18",{roughness:.3}),gt=De("#c29a45",{metalness:.75,roughness:.3});function Ue(P,F,$){let se=new Te,ye=new H(new Me(.1,.12,.03,18),rt),Pe=new H(new Me(.045,.06,.1,14),rt);Pe.position.y=.065;let Re=new H(new Me(.16,.1,.05,20),rt);Re.position.y=.14,se.add(ye,Pe,Re),$(se,.165),se.position.set(P,he+.02,F),se.traverse(Ie=>{Ie.isMesh&&(Ie.castShadow=!0)}),le.add(se)}let Ke=(P,F,$,se,ye,Pe,Re=1)=>{let Ie=new H(new ft(F,16,12),De($,{roughness:.45}));return Ie.scale.y=Re,Ie.position.set(se,ye,Pe),P.add(Ie),Ie},nt=(P,F,$=1)=>(se,ye)=>{[[-.07,0],[.07,0],[0,.07]].forEach(([Pe,Re])=>Ke(se,F,P,Pe,ye+F*$,Re-.02,$)),Ke(se,F,P,0,ye+F*$*2.6,0,$)};[[-1.62,nt("#a3241c",.035)],[-1.22,nt("#6b3f22",.04,.8)],[-.82,nt("#e08a3a",.05,.55)],[-.4,nt("#d9b264",.085)],[.4,nt("#c63b32",.075)],[.82,nt("#f0a21f",.05)],[1.22,(P,F)=>{for(let $=0;$<5;$++){let se=new H(new Jn(.025,.16,4,8),De("#f1d23e",{roughness:.5}));se.rotation.set(.3,$*.6,Math.PI/2-.25),se.position.set(($-2)*.03,F+.05,0),P.add(se)}}]].forEach(([P,F])=>Ue(P,-8.65,F)),Ue(1.66,-8.6,(P,F)=>{let $=Ke(P,.17,"#2f6b2c",0,F+.16,0),se=document.createElement("canvas");se.width=128,se.height=64;let ye=se.getContext("2d");ye.fillStyle="#3f7d36",ye.fillRect(0,0,128,64),ye.fillStyle="#1d3d19";for(let Pe=0;Pe<8;Pe++){ye.beginPath(),ye.moveTo(Pe*16,0);for(let Re=0;Re<=64;Re+=8)ye.lineTo(Pe*16+Math.sin(Re*.4)*3,Re);ye.lineTo(Pe*16+6,64),ye.lineTo(Pe*16+6,0),ye.fill()}$.material=new Ne({map:new bn(se),roughness:.35})});let we=new Te,yt=new H(new Me(.05,.07,.06,14),rt),xt=new H(new Me(.045,.03,.05,14),rt);xt.position.y=.06,we.add(yt,xt);let Wn=new H(new $t(.038,16),new Ne({color:"#e9dcae",roughness:.1,metalness:.2}));Wn.rotation.x=-Math.PI/2,Wn.position.y=.08,Wn.visible=!1,we.add(Wn),we.position.set(0,he+.03,-8.1),le.add(we);function sn(P,F,$,se=.35){let ye=new Te,Pe=new H(new Me(.06,.09,.04,16),gt),Re=new H(new Me(.025,.03,se,12),gt);Re.position.y=se/2;let Ie=new H(new Me(.07,.04,.04,16),gt);Ie.position.y=se;let Ge=new H(new Me(.035,.035,.2,12),De("#fbfaf5"));Ge.position.y=se+.12;let Ht=new H(new cn(.022,.07,10),new ln({color:"#ffcf73"}));Ht.position.y=se+.26,W.push(Ht),ye.add(Pe,Re,Ie,Ge,Ht),ye.position.set(P,F,$),ye.traverse(Zt=>{Zt.isMesh&&(Zt.castShadow=!0)}),le.add(ye)}sn(-1.85,he+.02,-8.75),sn(1.85,he+.02,-8.2);let kt=new Te,zt=new H(new xe(1.25,.05,.6),new Ne({color:"#d7e3df",transparent:!0,opacity:.55,roughness:.05}));zt.position.y=.44;let O=new H(new xe(1.2,.42,.56),De("#4f4037",{roughness:.5}));O.position.y=.21;let ai=new H(new vt(.95,.24),De("#c9a04e",{metalness:.6,roughness:.35}));ai.position.set(0,.21,.282),kt.add(zt,O,ai),kt.position.set(0,Oe,-7.3),kt.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),le.add(kt),sn(-.45,Oe+.46,-7.3,.22);let oi=new H(new Me(.05,.04,.16,14),gt);oi.position.set(.42,Oe+.54,-7.3),le.add(oi);for(let P=0;P<6;P++){let F=new H(new Me(.005,.005,.3,4),De("#1c1a18"));F.position.set(.42+(P%3-1)*.012,Oe+.66,-7.3+(P>2?.01:-.01)),le.add(F)}let Lt=new Te,sr=new H(new Me(.07,.07,.3,16),De("#3a2414",{roughness:.2}));sr.position.y=.15;let Cr=new H(new Me(.025,.06,.12,12),De("#3a2414",{roughness:.2}));Cr.position.y=.36;let ps=new H(new Me(.072,.072,.14,16,1,!0),new Ne({map:ls("\uCCAD\uC8FC",{w:256,h:128,bg:"#f6f1e4",fg:"#7a1d18",font:'700 64px "Noto Serif KR", serif'})}));ps.position.y=.14,Lt.add(sr,Cr,ps),Lt.position.set(1.2,Oe,-7.15);let Ma=De("#c9ccd1",{metalness:.8,roughness:.25}),fs=new H(new ft(.09,16,12),Ma);fs.scale.y=.9,fs.position.set(.95,Oe+.09,-7);let Pr=new H(new Me(.012,.02,.12,8),Ma);Pr.position.set(.86,Oe+.12,-7),Pr.rotation.z=.9;let ba=new H(new Me(.13,.08,.07,20,1,!0),new Ne({color:"#c9ccd1",metalness:.8,roughness:.25,side:Et}));ba.position.set(-.95,Oe+.035,-7.05),le.add(Lt,fs,Pr,ba);let Ir=document.createElement("canvas");Ir.width=256,Ir.height=192;let Ot=Ir.getContext("2d");Ot.fillStyle="#c9a368",Ot.fillRect(0,0,256,192);for(let P=0;P<192;P+=3)Ot.fillStyle=`rgba(120,85,40,${.08+Math.random()*.06})`,Ot.fillRect(0,P,256,1);Ot.strokeStyle="#7a4f24",Ot.lineWidth=6,Ot.strokeRect(3,3,250,186),Ot.lineWidth=3;for(let P of[64,128,192])Ot.beginPath(),Ot.moveTo(P,0),Ot.lineTo(P,192),Ot.stroke();Ot.beginPath(),Ot.moveTo(0,96),Ot.lineTo(256,96),Ot.stroke();let Li=new H(new vt(1.9,1.35),new Ne({map:new bn(Ir),roughness:.95}));Li.rotation.x=-Math.PI/2,Li.position.set(0,Oe+.008,-6.15),Li.receiveShadow=!0,le.add(Li),n.add(Li),u(Xe,"altar"),u(kt,"altar");let ms="simple";function Ea(P){ms=P;let F=P==="jesa";for(le.visible=F,ke.visible=!F,ne.visible=!F,G.position.set(0,F?Oe+.465:T,F?-7.3:-8.15),N.material.color.set(F?"#b8913a":"#7a6a4a"),C.position.copy(G.position).add(new S(0,.14,0)),ve.position.set(F?0:-1.35,F?he+.2:Oe+1.12,F?-8.85:-8.7),ve.scale.setScalar(F?.65:1);K.children.length;)K.remove(K.children[0]);An.setCounts(Lr)}let Lr={};p("altar",{label:"\uC81C\uB2E8",verb:"\uC81C\uB2E8 \uC55E\uC73C\uB85C",spot:{x:0,z:-6.15,face:Math.PI},radius:1.6,anchor:new S(0,Oe+1.6,-7.6)}),p("portrait",{label:"\uC601\uC815",verb:"\uCD94\uC5B5 \uC0C1\uC601\uAD00",spot:{x:0,z:-6.15,face:Math.PI},radius:0,anchor:new S(0,Oe+3.4,-9.9)});let li=new Te;li.position.set(-3.2,Oe,-7.4);for(let P=0;P<3;P++){let F=new H(new xe(1.1-P*.25,.2,.5-P*.1),De("#5b4535"));F.position.set(0,.55+P*.2,-P*.08),li.add(F)}let Dr=new H(new xe(.9,.45,.35),De("#4a372b"));Dr.position.y=.225,li.add(Dr),j.add(li),h(-3.2,-7.4,.65);let Ur=new Te;li.add(Ur),u(li,"candles"),p("candles",{label:"\uCD1B\uBD88 \uBD09\uD5CC\uB300",verb:"\uCD1B\uBD88 \uBD09\uD5CC",spot:{x:-3.2,z:-6.4,face:Math.PI},radius:1.2,anchor:new S(-3.2,Oe+1.5,-7.4)});let Sa=new H(new xe(1,.04,1.6),De("#3c3f49"));Sa.position.set(4.1,Oe+.02,-5.8),j.add(Sa);let ci={x:4.1,z:-5.8,face:-Math.PI/2},Xo={x:2.6,z:-5.8,face:Math.PI/2};p("host",{label:"\uC0C1\uC8FC",verb:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC",spot:Xo,radius:1.5,anchor:new S(4.1,Oe+1.9,-5.8)});let Di=new Te,A=new H(new xe(.8,1,.6),new Ne({color:"#ffffff",roughness:.6}));A.position.y=.5,A.castShadow=!0,Di.add(A);let Z=new H(new vt(.42,.62),new Ne({map:ls("\u8CFB\u5100\u51FD",{w:256,h:380,bg:"#fbfaf6",fg:"#1d1b19",font:'700 104px "Noto Serif KR", "Gowun Batang", serif',vertical:!0,border:"#1d1b19"})}));Z.position.set(0,.55,.305),Di.add(Z);let ie=new H(new xe(.4,.02,.05),De("#111"));ie.position.set(0,1.005,0),Di.add(ie);let oe=new H(new xe(1,.08,.8),De("#4a372b"));oe.position.y=.04,Di.add(oe),Di.position.set(4.7,Oe,-1.7),j.add(Di),h(4.7,-1.7,.6),u(Di,"donation"),p("donation",{label:"\uBD80\uC758\uD568",verb:"\uC870\uC758\uAE08 \uB123\uAE30",spot:{x:5.2,z:-.5,face:Math.PI},radius:.9,anchor:new S(4.7,Oe+1.5,-1.7)});let Q=De("#6a4e3b",{roughness:.7}),fe=new Te,Ce=new H(new xe(1.6,.08,.8),Q);Ce.position.y=.78,fe.add(Ce);let Le=new H(new xe(1.62,.74,.82),De("#f2efe6"));Le.position.y=.37,fe.add(Le);for(let P of[-1,1]){let F=new H(new xe(.34,.02,.44),De("#fdfcf7"));F.position.set(P*.18,.84,0),F.rotation.z=P*-.06,fe.add(F)}let Fe=new H(new xe(.74,.015,.48),De("#20242c"));Fe.position.y=.825,fe.add(Fe);let $e=new H(new vt(1.1,.24),new Ne({map:ls("\uC811\uC218\uB300 \xB7 \uBC29\uBA85\uB85D",{w:768,h:168,bg:"#fbfaf6",fg:"#26231f",font:'700 84px "Gowun Batang", serif'})}));$e.position.set(0,.48,.415),fe.add($e),fe.position.set(6.2,Oe,-1.6),fe.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),j.add(fe),l(5.3,7.1,-2.1,-1.1),u(fe,"guestbook"),p("guestbook",{label:"\uBC29\uBA85\uB85D",verb:"\uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",spot:{x:6.2,z:-.45,face:Math.PI},radius:1.4,anchor:new S(6.2,Oe+1.5,-1.6)});let We=new Te,Ye=new H(new Me(.45,.32,.45,18),De("#a98b62",{roughness:1}));Ye.position.y=.6,We.add(Ye);let at=new H(new Me(.06,.12,.4,10),Q);at.position.y=.2,We.add(at);for(let P=0;P<20;P++){let F=Si(1.25),$=t()*Math.PI*2,se=t()*.3;F.position.set(Math.cos($)*se,1+t()*.1,Math.sin($)*se),F.rotation.set((t()-.5)*.6,t()*3,(t()-.5)*.6),We.add(F)}We.position.set(-3.4,Oe,-1.4),j.add(We),h(-3.4,-1.4,.55),u(We,"basket"),p("basket",{label:"\uD5CC\uD654\uC6A9 \uAD6D\uD654",verb:"\uAD6D\uD654 \uD55C \uC1A1\uC774 \uB4E4\uAE30",spot:{x:-3.4,z:-.45,face:Math.PI},radius:1.3,anchor:new S(-3.4,Oe+1.6,-1.4)});let Dt=[],Vt=new Te;j.add(Vt),[{x:-9.85,z:-9.3,ry:Math.PI/2},{x:-9.85,z:-6.6,ry:Math.PI/2},{x:-9.85,z:-3.9,ry:Math.PI/2},{x:9.85,z:-9.3,ry:-Math.PI/2},{x:9.85,z:-6.6,ry:-Math.PI/2},{x:9.85,z:-3.9,ry:-Math.PI/2}].forEach((P,F)=>{let $=new Te,se=new H(new xe(1.7,1.3,.06),De("#5a4434")),ye=new bn(sv(F));ye.colorSpace=At;let Pe=new ln({map:ye}),Re=new H(new vt(1.5,1.1),Pe);Re.position.z=.035,$.add(se,Re),$.position.set(P.x,Oe+2.2,P.z),$.rotation.y=P.ry,j.add($),u($,`photo:${F}`),Dt.push({group:$,pic:Re,mat:Pe,placeholder:ye,url:null});let Ie=new Te;for(let Ge of[-1,1]){let Ht=new H(new xe(.06,2.1,.06),De("#8a6a4c"));Ht.position.set(P.x-Math.sign(P.x)*.15,Oe+1.05,P.z+Ge*.6),Ht.rotation.x=Ge*.12,Ie.add(Ht)}Vt.add(Ie),p(`photo:${F}`,{label:"\uCD94\uC5B5 \uC0AC\uC9C4",verb:"\uC0AC\uC9C4 \uBCF4\uAE30",spot:{x:P.x+(P.x<0?1.6:-1.6),z:P.z,face:P.x<0?-Math.PI/2:Math.PI/2},radius:0,anchor:new S(P.x,Oe+3,P.z)})});let wt=new Te;e.add(wt);let Ut=["#141414","#2b2622","#141414","#3b2c22","#f1eee6","#141414","#5a4a3c"],Qe=new Te;e.add(Qe);let It=new H(new xe(9,Ri,8.6),De("#d6d2c4"));It.position.set(17,Ri/2,-5),It.receiveShadow=!0,Qe.add(It);let Wt=new H(new vt(8.8,8.4),De("#d2b693",{roughness:.6}));Wt.rotation.x=-Math.PI/2,Wt.position.set(17,Ri+.004,-5),Wt.receiveShadow=!0,Qe.add(Wt),n.add(It),n.add(Wt);for(let[P,F]of[[12.8,-9],[21.2,-9],[12.8,-1],[21.2,-1]]){let $=new H(new Me(.2,.22,3.6,14),Q);$.position.set(P,Ri+1.8,F),$.castShadow=!0,Qe.add($),h(P,F,.35)}let ot=De("#43464d",{roughness:.75}),Ze=new H(new xe(10.5,.3,10),ot);Ze.position.set(17,Ri+3.7,-5),Ze.castShadow=!0,Qe.add(Ze);let an=new H(new Me(.25,1,1,4,1),ot);an.rotation.y=Math.PI/4,an.scale.set(7.6,2,7.2),an.position.set(17,Ri+4.85,-5),an.castShadow=!0,Qe.add(an);let gs=new H(new vt(2.2,.55),new Ne({map:ls("\uC2DD\uB2F9 \xB7 \uC811\uAC1D\uC2E4",{w:768,h:190,bg:"#3e5b50",fg:"#f3ead2",font:'700 96px "Gowun Batang", serif',border:"#c9b27c"})}));gs.position.set(17,Ri+3.2,-.65),Qe.add(gs);let Nr=new qi("#ffe6c4",6,10,1.8);Nr.position.set(17,3.2,-5),e.add(Nr);let _n=new Te,Ln=new H(new xe(1.6,.9,.6),De("#efe9dc"));Ln.position.y=.45,_n.add(Ln);let Ui=new H(new Me(.14,.14,.42,16),De("#c9ccd1",{metalness:.6,roughness:.3}));Ui.position.set(-.4,1.11,0),_n.add(Ui);for(let P=0;P<6;P++){let F=new H(new Me(.04,.03,.09,10),De("#fbfaf6"));F.position.set(.1+P%3*.12,.95+Math.floor(P/3)*.09,.05),_n.add(F)}_n.position.set(20.6,Ri,-8.3),_n.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),Qe.add(_n),l(19.75,21.45,-8.65,-7.95);let Dn=[];[[15,-6.6],[19,-5.6],[15,-3],[19,-2.4]].forEach(([P,F],$)=>{let se=new Te,ye=new H(new xe(1.9,.07,.9),De("#7a5a40",{roughness:.5}));ye.position.y=.38,se.add(ye);for(let[Re,Ie]of[[-.85,-.38],[.85,-.38],[-.85,.38],[.85,.38]]){let Ge=new H(new xe(.06,.36,.06),De("#5d4431"));Ge.position.set(Re,.18,Ie),se.add(Ge)}for(let Re of[-.45,.45]){let Ie=new H(new xe(.6,.07,.6),De("#8e3f37"));Ie.position.set(Re,.035,.85),se.add(Ie)}for(let Re=0;Re<3;Re++){let Ie=new H(new Me(.09,.07,.04,14),De("#f4f1ea"));Ie.position.set(-.4+Re*.4,.44,-.2),se.add(Ie);let Ge=new H(new ft(.06,10,6),De(["#c74b35","#e8e1c9","#6d8a4c"][Re]));Ge.scale.y=.4,Ge.position.set(-.4+Re*.4,.47,-.2),se.add(Ge)}se.position.set(P,Ri,F),se.traverse(Re=>{Re.isMesh&&(Re.castShadow=!0)}),Qe.add(se),l(P-1,P+1,F-.5,F+.48),u(se,`meal:${$}`);let Pe=new Te;se.add(Pe),Dn.push({group:se,dishes:Pe,seat:{x:P-.45,z:F+.85,face:Math.PI},seat2:{x:P+.45,z:F+.85,face:Math.PI}}),p(`meal:${$}`,{label:"\uC2DD\uD0C1",verb:"\uC2DD\uC0AC\uD558\uAE30",spot:Dn[$].seat,radius:1.3,anchor:new S(P,1.4,F)})});let Un=new Te,Ni=new H(new xe(1.3,.6,.7),De("#7a5a40"));Ni.position.y=.7,Un.add(Ni);for(let P of[-1,1]){let F=new H(new Me(.28,.28,.06,18),De("#3b2c22"));F.rotation.z=Math.PI/2,F.position.set(P*.68,.28,0),Un.add(F)}for(let P=0;P<26;P++){let F=Si(1.5,["white","yellow","cream","white"][P%4]);F.position.set((t()-.5)*1.1,1.25+t()*.15,(t()-.5)*.5),Un.add(F)}let Ta=new H(new vt(1.1,.3),new Ne({map:ls("\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30",{w:640,h:170,bg:"#fbfaf6",fg:"#2a2723",font:'700 76px "Gowun Batang", serif'})}));Ta.position.set(0,.72,.36),Un.add(Ta),Un.position.set(-3.6,0,4.9),Un.rotation.y=.45,Un.traverse(P=>{P.isMesh&&(P.castShadow=!0)}),e.add(Un),h(-3.6,4.9,.8),u(Un,"florist"),p("florist",{label:"\uD654\uD658",verb:"\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30",spot:{x:-2.5,z:5.4,face:-2},radius:1.5,anchor:new S(-3.6,2,4.9)});let ar=new Te;e.add(ar);let vs=[];for(let P=0;P<70;P++){let F=t()*Math.PI*2,$=24+t()*22;vs.push([Math.cos(F)*$,Math.sin(F)*$])}for(let P of[-1,1])for(let F=4;F<26;F+=3.2)vs.push([P*(11.5+t()*3),F+t()*1.5]);for(let P=-8;P<=8;P+=4)vs.push([P+t(),-17-t()*2]);let dt=["#c4532f","#d9822f","#e2b53b","#7f9a5c","#8fa86b","#b6452e"],lh=De("#6d5444");for(let[P,F]of vs){if(P>11&&P<23&&F>-11&&F<1)continue;let $=new Te,se=t(),ye=2.2+t()*1.8,Pe=new H(new Me(.12,.18,ye,8),lh);if(Pe.position.y=ye/2,$.add(Pe),se<.35){let Re=De("#5f7a54",{flatShading:!0});for(let Ie=0;Ie<3;Ie++){let Ge=new H(new cn(1.4-Ie*.35,1.5,7),Re);Ge.position.y=ye*.7+Ie*.8,$.add(Ge)}}else{let Re=De(dt[Math.floor(t()*dt.length)],{flatShading:!0});for(let Ie=0;Ie<3;Ie++){let Ge=new H(new br(.9+t()*.6,0),Re);Ge.position.set((t()-.5)*1.1,ye+(t()-.3)*.8,(t()-.5)*1.1),$.add(Ge)}}$.traverse(Re=>{Re.isMesh&&(Re.castShadow=!0)}),$.position.set(P,0,F),$.rotation.y=t()*6,e.add($),h(P,F,.5)}let Nn=De("#b9c3a1",{roughness:1});for(let P of[-1,1]){let F=new H(new xe(5.6,.12,9),Nn);F.position.set(P*6.3,.06,15.5),F.receiveShadow=!0,e.add(F),n.add(F)}let kn=new Te;e.add(kn);let ys=d(new ji(new vt(.12,.1),new Ne({color:"#e7c04a",side:Et,roughness:1}),90)),or=[];for(let P=0;P<90;P++)or.push({x:(t()-.5)*34,y:t()*9,z:t()*30-6,s:.4+t()*.6,r:t()*6});e.add(ys);let lr=new Kt;o.push((P,F)=>{or.forEach(($,se)=>{$.y-=P*.45*$.s,$.x+=Math.sin(F*.7+$.r)*P*.35,$.y<.03&&($.y=7+t()*4,$.x=(t()-.5)*34,$.z=t()*30-6),lr.position.set($.x,$.y,$.z),lr.rotation.set(F*$.s+$.r,F*.6+$.r,0),lr.updateMatrix(),ys.setMatrixAt(se,lr.matrix)}),ys.instanceMatrix.needsUpdate=!0});let qt=Am(64,"rgba(150,146,140,0.7)","rgba(150,146,140,0)"),wn=[];for(let P=0;P<46;P++){let F=d(new Xi(new yi({map:qt,transparent:!0,depthWrite:!1,opacity:0})));F.visible=!1,e.add(F),wn.push({sp:F,life:0,max:1})}let _s=.8,Rn=0,pn=0,en=1;function wa(){let P=wn.find(F=>F.life<=0);P&&(P.life=P.max=3.5+Math.random()*2,P.sp.visible=!0,P.sp.position.set(G.position.x+(Math.random()-.5)*.1,G.position.y+.18+.32*en,G.position.z),P.vx=(Math.random()-.5)*.06)}o.push((P,F)=>{for(Rn+=P*(_s*(en>0?1:0)+(pn>0?9:0)),pn=Math.max(0,pn-P);Rn>1;)Rn-=1,wa();for(let $ of wn){if($.life<=0)continue;$.life-=P;let se=1-$.life/$.max;$.sp.position.y+=P*.32,$.sp.position.x+=$.vx*P+Math.sin(F*1.3+$.max*3)*P*.05;let ye=.18+se*.9;$.sp.scale.set(ye,ye,ye),$.sp.material.opacity=Math.sin(se*Math.PI)*.55,$.life<=0&&($.sp.visible=!1)}W.forEach(($,se)=>{$.scale.set(1,.85+Math.sin(F*13+se*2)*.12+Math.random()*.05,1)}),B.intensity=2.6+Math.sin(F*11)*.25+Math.random()*.2});let Ra=new Te;e.add(Ra);let ki=[],w0=0,Hd=Am(64,"rgba(255,214,140,0.9)","rgba(255,214,140,0)"),Gd={warm:"#ffd9a0",white:"#fff6e6",lotus:"#ffc4c8",sky:"#cfe3ff"},zd=[];function R0(P){let F=new Te,$=new Ne({color:P,emissive:P,emissiveIntensity:.6,roughness:.9,transparent:!0,opacity:.95});zd.push($),F.add(new H(new Me(.22,.17,.42,12),$));let se=new Xi(new yi({map:Hd,transparent:!0,depthWrite:!1,opacity:.55}));return se.scale.set(1.3,1.3,1.3),F.add(se),F}let xs=new Ti({outfit:"hostSuit"});xs.interactTag="host",xs.root.position.set(ci.x,Oe,ci.z),xs.root.rotation.y=ci.face,xs.rebuild(),j.add(xs.root),h(ci.x,ci.z,.4);let Ms=new Ti({outfit:"shirt",look:{hair:"perm",hairColor:"#3d2b20",eyes:"smile",mouth:"smile",skin:"#efc19e"}});Ms.interactTag="helper",Ms.root.position.set(3,0,15.2),Ms.root.rotation.y=-Math.PI/2,Ms.rebuild(),e.add(Ms.root),h(3,15.2,.4),p("helper",{label:"\uC548\uB0B4 \uB3C4\uC6B0\uBBF8",verb:"\uC870\uBB38 \uC608\uC808 \uBB3B\uAE30",spot:{x:2,z:15.2,face:Math.PI/2},radius:1.5,anchor:new S(3,1.7,15.2)});function Vd(P,F,$,se,ye,Pe,Re,Ie){let Ge=Math.max($-P,0,P-se,ye-F,0,F-Pe);return Ge<=0?Re:Ge>=Ie?0:Re*(1-Ge/Ie)}function A0(P,F){return Math.max(Vd(P,F,-10.5,10.5,-12.5,1,Oe,1.25),Vd(P,F,12.5,21.5,-9.3,-.7,Ri,.8))}function C0(P,F,$=.28,se=!1){if(P*P+F*F>2116)return!0;let ye=I?[...r,...I.boxes]:r;for(let Re of ye)if(P>Re.x0-$&&P<Re.x1+$&&F>Re.z0-$&&F<Re.z1+$)return!0;let Pe=I?[...s,...I.circles]:s;for(let Re of Pe){if(se&&Re.x===ci.x&&Re.z===ci.z)continue;let Ie=P-Re.x,Ge=F-Re.z;if(Ie*Ie+Ge*Ge<(Re.r+$)**2)return!0}return!1}let P0=(P,F)=>Math.abs(P)<10.4&&F<1&&F>-12.4,Wd=new go,ch="day",An={scene:e,interactables:a,heightAt:A0,blocked:C0,inHall:P0,hostNpc:xs,helper:Ms,HOST_SPOT:ci,GREET_SPOT:Xo,tables:Dn,isWalkable:P=>n.has(P)||I&&I.walkables.includes(P),get theme(){return I},setTheme(P,F){for(I&&(X.remove(I.group),I.group.traverse(ye=>{ye.geometry?.dispose?.()})),I=wm(P,{FLOOR:Oe,textTexture:ls,rng:Rm,deceasedName:F}),I.name=P,X.add(I.group);V.children.length;)V.remove(V.children[0]);I.lanternStand&&(V.add(I.lanternStand),u(I.lanternStand,"lantern")),Vt.visible=!!I.easels,an.visible=P==="hanok",ae.material.color.set(P==="garden"?"#f7f5ef":P==="chapel"?"#efe9dc":"#e7e3d8"),ce&&j.remove(ce);let $=P==="hospital"||P==="hall";ce=$?hm({floor:Oe}):um({floor:Oe,z:ee,accent:P==="garden"?"pink":P==="chapel"?"cream":"yellow"}),j.add(ce),ae.position.z=$?ee-1.05:ee-.8,P==="hospital"&&ae.material.color.set("#a9a7a2"),ae.visible=P!=="hospital",An.themeName=P,Ea(P==="chapel"||P==="garden"||An.religion==="christian"||An.religion==="catholic"?"simple":"jesa"),L.intensity=P==="hall"||P==="hospital"?16:10;let se=I.ceiling??Oe+5;J.position.y=Math.min(Oe+4.2,se-.35),L.position.y=Math.min(Oe+4.3,se-.35),An.setTime(ch)},setDeceasedName(P){I?.setName(P)},setTime(P){ch=P;let F=Hc[P]||Hc.day;f.top.value.set(F.top),f.bottom.value.set(F.bottom),e.fog.color.set(F.fog),y.color.set(F.hemiSky),y.groundColor.set(F.hemiGround),y.intensity=F.hemi,b.color.set(F.sun),b.intensity=F.sunI,g.opacity=F.star;for(let $ of[...c,...I?.lampMats||[],...zd])$.emissiveIntensity=F.lamp;J.intensity=P==="night"?24:18,k.intensity=P==="day"?1:4,i.toneMappingExposure=P==="night"?1.15:1},setPortrait(P){Wd.load(P,F=>{F.colorSpace=At,Ee.map?.dispose(),Ee.map=F,Ee.needsUpdate=!0})},setGallery(P){Dt.forEach((F,$)=>{let se=P.length&&($<P.length||P.length>1)?P[$%P.length]:null;if(se!==F.url){if(F.url=se,!se){F.mat.map!==F.placeholder&&F.mat.map?.dispose(),F.mat.map=F.placeholder,F.mat.needsUpdate=!0,F.pic.scale.set(1,1,1);return}Wd.load(se,ye=>{ye.colorSpace=At,F.mat.map!==F.placeholder&&F.mat.map?.dispose(),F.mat.map=ye,F.mat.needsUpdate=!0;let Pe=ye.image.width/ye.image.height,Re=Pe>=1.36?1.5:1.1*Pe,Ie=Pe>=1.36?1.5/Pe:1.1;F.pic.scale.set(Re/1.5,Ie/1.1,1)})}})},setReligion(P){An.religion=P,li.visible=P==="catholic";let F=P==="christian"||P==="catholic";for(G.visible=!F,C.visible=!F,je.visible=!F,a.get("candles").radius=P==="catholic"?1.2:0,An.themeName&&Ea(An.themeName==="chapel"||An.themeName==="garden"||P==="christian"||P==="catholic"?"simple":"jesa");ge.children.length;)ge.remove(ge.children[0]);if(ve.visible=P==="traditional"||P==="buddhist",(P==="christian"||P==="catholic")&&I?.name!=="chapel"){let $=De(P==="catholic"?"#d8c27d":"#f5f2ea",{metalness:P==="catholic"?.5:0,roughness:.4}),se=new H(new xe(.1,.72,.06),$),ye=new H(new xe(.46,.1,.06),$);ye.position.y=.12,ge.add(se,ye)}else if(P==="buddhist"){let $=De("#f2b7b4",{roughness:.6});for(let se=0;se<8;se++){let ye=new H(new ft(.12,12,8),$);ye.scale.set(.55,1.25,.35);let Pe=se/8*Math.PI-Math.PI/2;ye.position.set(Math.sin(Pe)*.2,.05+Math.cos(Pe)*.08,0),ye.rotation.z=-Pe*.8,ge.add(ye)}}},setTablet(P){ve.material.map=ls(`\u6545${P}\u795E\u4F4D`,{w:128,h:320,bg:"#fbf8ef",fg:"#1b1a18",font:'700 46px "Noto Serif KR", "Gowun Batang", serif',vertical:!0}),ve.material.needsUpdate=!0},setIncense(P,F){en=Math.max(0,Math.min(1,F));let $=Math.min(Math.max(P,en>0?1:0),14);for(;C.children.length<$;){let ye=C.children.length,Pe=new Te,Re=new H(new Me(.006,.006,.36,5),De("#7c4d34"));Re.position.y=.18;let Ie=new H(new ft(.012,6,4),new ln({color:"#ff7a3a"}));Ie.position.y=.36,Pe.add(Re,Ie),Pe.userData={rod:Re,tip:Ie};let Ge=ye*2.4,Ht=.03+ye%3*.035;Pe.position.set(Math.cos(Ge)*Ht,0,Math.sin(Ge)*Ht),Pe.rotation.set((Math.random()-.5)*.15,0,(Math.random()-.5)*.15),C.add(Pe)}let se=.08+.92*en;for(let ye of C.children)ye.userData.rod.scale.y=se,ye.userData.rod.position.y=.18*se,ye.userData.tip.position.y=.36*se,ye.userData.tip.visible=en>0},setCounts(P){Lr=P;let{flowers:F=0,incense:$=0,candles:se=0}=P,ye=ms==="jesa",Pe=Math.min(F,ye?40:90);for(;K.children.length<Pe;){let Ie=K.children.length,Ge=dm(1.5),Ht=Ge||Si(1.25);if(Ge){let Zt=Math.floor(Ie/7),Xn=Ie%7;Ht.position.set(-1.55+Xn*.52+Zt%2*.26,(ye?he+.03:Oe+.11)+Zt*.012,ye?-8+Zt*.03:-7.4+Zt*.12),Ht.rotation.y=-Math.PI/2+(Math.random()-.5)*.25}else if(ye){let Zt=Math.floor(Ie/20),Xn=Ie%20;Ht.position.set(-1.75+Xn*.18+Zt%2*.09,he+.06+Zt*.03,-7.97+Zt*.04),Ht.rotation.set(Math.PI/2-.1,0,Math.PI+(Math.random()-.5)*.3)}else{let Zt=Math.floor(Ie/15),Xn=Ie%15;Ht.position.set(-1.6+Xn*.23+Zt%2*.1+(Math.random()-.5)*.04,Oe+.13+Zt*.03,-7.45+Zt*.12),Ht.rotation.set(Math.PI/2-.15,0,(Math.random()-.5)*.3)}K.add(Ht)}_s=.6+Math.min($,30)*.12;let Re=Math.min(se,24);for(;Ur.children.length<Re;){let Ie=Ur.children.length,Ge=Ie%3,Ht=new Te,Zt=new H(new Me(.035,.035,.08,10),De("#fbf6ea")),Xn=new H(new cn(.018,.05,8),new ln({color:"#ffcf73"}));Xn.position.y=.07,Ht.add(Zt,Xn);let Aa=Math.floor(Ie/3);Ht.position.set(-.4+Ge*.12+Aa*.13-Math.floor(Aa/7)*.9,.7+Ge*.2,-Ge*.08+.05),Ur.add(Ht)}},setShoes(P){let F=I?.shoes?Math.min(P,18):0;for(;wt.children.length>F;)wt.remove(wt.children[wt.children.length-1]);for(;wt.children.length<F;){let $=wt.children.length,se=new Te,ye=De(Ut[$%Ut.length],{roughness:.5});for(let Ie of[-1,1]){let Ge=new H(new xe(.11,.07,.27),ye);Ge.position.set(Ie*.075,.035,0),Ge.castShadow=!0,se.add(Ge)}let Pe=Math.floor($/9),Re=$%9;se.position.set(-3.1+Re*.38+(Re>4?.9:0)+Pe*.15,Oe*.33+.005,1.8+Pe*.42),se.rotation.y=(Math.random()-.5)*.25,wt.add(se)}},setWreaths(P){for(;ar.children.length;)ar.remove(ar.children[0]);P.slice(-28).forEach((F,$)=>{let se=$%2?1:-1,ye=Math.floor($/2),Pe=ye<5,Re=Pe?2.75:6.6+(ye-5)*1.25,Ie=Pe?se*(3.3+ye*1.35):se*2.85,Ge=new Te,Ht=De("#8a8a86",{metalness:.5,roughness:.4});for(let Ca=0;Ca<3;Ca++){let bs=new H(new Me(.015,.015,1.5,6),Ht),cr=Ca/3*Math.PI*2;bs.position.set(Math.cos(cr)*.18,.72,Math.sin(cr)*.18-.1),bs.rotation.set(Math.sin(cr)*.12,0,-Math.cos(cr)*.12),Ge.add(bs)}let Zt=new bn(Po(F.style||"white"));Zt.colorSpace=At;let Xn=new H(new $t(.6,40),new Ne({map:Zt,alphaTest:.3,side:Et,roughness:.95}));Xn.position.y=1.75,Xn.castShadow=!0,Ge.add(Xn);let Aa=(Ca,bs)=>{let cr=new H(new vt(.14,1.12),new Ne({map:rv(Ca),side:Et,roughness:.9}));cr.position.set(bs,.85,.03),cr.rotation.z=bs>0?-.04:.04,Ge.add(cr)};Aa(F.phrase||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4",-.24),Aa(F.from||"",.24),Ge.position.set(Ie,0,Re),Ge.rotation.y=Pe?0:se<0?Math.PI/4:-Math.PI/4,Ge.scale.setScalar(1.25),u(Ge,`wreath:${$}`),Ge.userData.data=F,ar.add(Ge)}),An.wreaths=P.slice(-28)},burstSmoke(){pn=1.4},fillCup(){Wn.visible=!0},get altarStyle(){return ms},flyTo(P,F,$=.9){let se=P.getWorldPosition(new S);e.attach(P),P.position.copy(se);let ye=0;return new Promise(Pe=>{let Re=Ie=>{ye+=Ie/$;let Ge=Math.min(1,ye);P.position.lerpVectors(se,F,Ge),P.position.y+=Math.sin(Ge*Math.PI)*.4,Ge>=1&&(o.splice(o.indexOf(Re),1),Pe())};o.push(Re)})},addLantern({text:P="",name:F="",color:$="warm"},se){let ye=R0(Gd[$]||Gd.warm);ye.children[0].material.emissiveIntensity=(Hc[ch]||Hc.day).lamp;let Pe=w0++,Re={a:Pe*2.39996+.3,r:5+Pe%7*1.4,h:6.5+Pe%5*1.3,sp:.03+Pe%4*.008},Ie={uid:Pe,g:ye,slot:Re,text:P,name:F,rise:se?0:1,from:se?se.clone():null};return u(ye,`sky:${Pe}`),Ra.add(ye),ki.push(Ie),ki.length>90&&Ra.remove(ki.shift().g),Ie},lantern(P){return ki.find(F=>F.uid===P)},lanternCount(){return ki.length},setMemories(P){for(;kn.children.length;)kn.remove(kn.children[0]);P.slice(-160).forEach((F,$)=>{let se=$%2?1:-1,ye=Math.floor($/2),Pe=ye%12,Re=Math.floor(ye/12)%7,Ie=Si(1.7,F.relation==="\uAC00\uC871"||F.relation==="\uCE5C\uCC99"?"cream":"white");Ie.position.set(se*(3.9+Re*.78+Pe%2*.3),.12+.36,11.4+Pe*.72),Ie.rotation.y=$;let Ge=new Xi(new yi({map:Hd,transparent:!0,depthWrite:!1,opacity:.35}));Ge.scale.set(.5,.5,.5),Ie.add(Ge),u(Ie,`memory:${$}`),kn.add(Ie)}),An.memories=P.slice(-160)},update(P,F){for(let $ of[...o])$(P,F);I?.update(P,F),ki.forEach($=>{let se=$.slot;se.a+=P*se.sp;let ye=new S(Math.cos(se.a)*se.r,se.h+Math.sin(F*.5+se.a*3)*.3,6+Math.sin(se.a)*se.r*.7);if($.rise<1){$.rise=Math.min(1,$.rise+P/7);let Pe=$.rise*$.rise*(3-2*$.rise);$.g.position.lerpVectors($.from,ye,Pe)}else $.g.position.copy(ye);$.g.rotation.y+=P*.3})}};return An.setTheme("hospital",""),An.setReligion("traditional"),An}var cs=i=>440*2**((i-69)/12),av=[[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[67,2],[64,1],[62,2],[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[74,3],[74,2],[71,1],[74,2],[71,.5],[67,.5],[71,2],[69,1],[67,2],[64,1],[62,2],[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[67,3]],Im=[[43,50,55,59],[43,50,55,59],[48,55,60,64],[43,50,55,59],[43,50,55,59],[40,52,55,59],[50,57,62,66],[50,57,62,66],[43,50,55,59],[43,53,55,59],[48,55,60,64],[43,50,55,59],[40,52,55,59],[50,57,62,66],[43,50,55,59]],zc=[[41,57,60,69],[38,57,62,69],[46,58,62,70],[48,55,64,67],[41,57,60,65],[45,57,60,64],[46,58,62,65],[48,55,60,67],[50,57,62,65],[46,53,58,62],[41,57,60,65],[48,55,60,64],[41,53,60,65]],ov=[[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59]],Lm=[67,69,72,74,76,79,81],gd=[55,57,60,62,64,67,69,72],Vc=class{constructor(){this.ctx=null,this.on=!0,this.musicVol=.5,this.sfxVol=.7,this.trackId="none",this.track=null,this.ksCache=new Map}ensure(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t=this.ctx=new e;this.master=t.createGain();let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,this.master.connect(n).connect(t.destination),this.music=t.createGain(),this.sfx=t.createGain(),this.music.gain.value=this.musicVol,this.sfx.gain.value=this.sfxVol,this.music.connect(this.master),this.sfx.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.2);let r=t.createGain();r.gain.value=.45,this.reverb.connect(r).connect(this.master),this.master.gain.value=this.on?1:0}return this.ctx.state==="suspended"&&this.ctx.resume(),this.unlockIOS(),this.ctx}unlockIOS(){if(!this.unlocked){this.unlocked=!0;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}try{let n=new ArrayBuffer(8044),r=new DataView(n),s=(o,c)=>[...c].forEach((l,h)=>r.setUint8(o+h,l.charCodeAt(0)));s(0,"RIFF"),r.setUint32(4,36+4e3*2,!0),s(8,"WAVE"),s(12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,8e3,!0),r.setUint32(28,8e3*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),s(36,"data"),r.setUint32(40,4e3*2,!0);let a=new Audio(URL.createObjectURL(new Blob([n],{type:"audio/wav"})));a.loop=!0,a.setAttribute("playsinline",""),a.play().catch(()=>{this.unlocked=!1}),this.keepAlive=a}catch{}}}get running(){return this.ctx?.state==="running"}impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let s=0;s<2;s++){let a=r.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*(1-o/n)**3}return r}noiseBuffer(e=2){let t=this.ctx,n=t.createBuffer(1,t.sampleRate*e,t.sampleRate),r=n.getChannelData(0);for(let s=0;s<r.length;s++)r[s]=Math.random()*2-1;return n}setOn(e){this.on=e,this.master&&this.master.gain.setTargetAtTime(e?1:0,this.ctx.currentTime,.1),this.audioEl&&(this.audioEl.muted=!e)}setMusicVolume(e){this.musicVol=e,this.music&&this.music.gain.setTargetAtTime(e,this.ctx.currentTime,.1),this.audioEl&&(this.audioEl.volume=Math.min(1,e*1.4))}setSfxVolume(e){this.sfxVol=e,this.sfx&&this.sfx.gain.setTargetAtTime(e,this.ctx.currentTime,.1)}duck(e){this.music&&this.music.gain.setTargetAtTime(e?this.musicVol*.25:this.musicVol,this.ctx.currentTime,.6)}play(e,t=""){let n=this.ensure();if(!n||(this.stopTrack(),this.trackId=e,e==="none"))return;if(e==="custom"){if(!t)return;let l=new Audio(t);l.loop=!0,l.volume=Math.min(1,this.musicVol*1.4),l.muted=!this.on,l.play().catch(()=>{}),this.audioEl=l;return}let r=n.createGain();r.gain.value=0,r.gain.setTargetAtTime(1,n.currentTime,1.2),r.connect(this.music);let s=n.createGain();s.gain.value=.6,r.connect(s).connect(this.reverb);let a=this.track={id:e,out:r,nodes:[],timers:[],next:n.currentTime+.3,i:0},o=(l,h=200)=>{let u=setInterval(()=>{this.track===a&&l()},h);a.timers.push(u),l()},c=()=>n.currentTime+1.2;switch(e){case"wind":{this.noiseBed(a,380,.05,.08),o(()=>{for(;a.next<c();)this.chimeAt(a.next,.07,r),a.next+=3.5+Math.random()*6});break}case"rain":{this.noiseBed(a,2600,.05,.02,"bandpass"),this.noiseBed(a,600,.04,.01),o(()=>{for(;a.next<c();)this.drip(a.next,r),a.next+=.15+Math.random()*.9});break}case"moktak":{this.drone(a,[55,82.5],.025);let l=0;o(()=>{for(;a.next<c();){let h=l%24;h<16&&this.moktakAt(a.next,h===0?.32:.22,r),h===20&&this.bowlAt(a.next,196+(l%48?0:24),.12,r),a.next+=h<16?.95:1.1,l++}});break}case"hymn":{let h=[],u=0;for(let[_,g]of av)h.push({n:_,t:u,d:g*.95}),u+=g*.95;let d=u+3,p=[];for(let _=0;_<Im.length;_++)p.push({ch:Im[_],t:.95+_*3*.95,d:3*.95});let f=n.currentTime+.4,v=0,m=0;o(()=>{let _=c();for(;v<h.length&&f+h[v].t<_;){let g=h[v++];this.organAt(cs(g.n),f+g.t,g.d*.97,.16,r)}for(;m<p.length&&f+p[m].t<_;){let g=p[m++];g.ch.forEach(y=>this.organAt(cs(y),f+g.t,g.d,.06,r,!0))}v>=h.length&&m>=p.length&&f+d<_+1&&(f+=d,v=0,m=0)});break}case"chorale":{o(()=>{for(;a.next<c();){let l=zc[a.i%zc.length],h=a.i%zc.length===zc.length-1?6.4:3.4;l.forEach((u,d)=>this.organAt(cs(u),a.next,h,d===3?.09:.06,r,d<3)),a.next+=h,a.i++}});break}case"piano":{o(()=>{for(;a.next<c();){let l=Math.floor(a.i/8),h=ov[l%4],u=a.i%8,d=[0,2,3,2,1,2,3,2];this.pianoAt(cs(h[d[u]]+(u===0?0:12)),a.next,u===0?.16:.07,r),(u===0||u===4&&Math.random()<.6)&&this.pianoAt(cs(Lm[Math.floor(Math.random()*Lm.length)]+5),a.next+.02,.06,r),a.next+=.62,a.i++}});break}case"gayageum":{let l=3;o(()=>{for(;a.next<c();){l=Math.max(0,Math.min(gd.length-1,l+[-2,-1,-1,0,1,1,2][Math.floor(Math.random()*7)]));let h=Math.random()<.35;this.pluckAt(cs(gd[l]),a.next,h?.34:.26,r,h),Math.random()<.2&&this.pluckAt(cs(gd[Math.max(0,l-3)]-12),a.next,.18,r,!1),a.next+=h?2.2+Math.random():.5+Math.random()*.8}});break}default:}}stopTrack(){this.audioEl&&(this.audioEl.pause(),this.audioEl=null);let e=this.track;if(!e)return;this.track=null,e.timers.forEach(clearInterval);let t=this.ctx;e.out.gain.cancelScheduledValues(t.currentTime),e.out.gain.setTargetAtTime(0,t.currentTime,.4),setTimeout(()=>{e.nodes.forEach(n=>{try{n.stop?.()}catch{}}),e.out.disconnect()},2500)}noiseBed(e,t,n,r,s="lowpass"){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noiseBuffer(4),o.loop=!0;let c=a.createBiquadFilter();c.type=s,c.frequency.value=t,c.Q.value=s==="bandpass"?.6:.7;let l=a.createGain();l.gain.value=n;let h=a.createOscillator(),u=a.createGain();h.frequency.value=.07+Math.random()*.05,u.gain.value=r,h.connect(u).connect(l.gain),o.connect(c).connect(l).connect(e.out),o.start(),h.start(),e.nodes.push(o,h)}drone(e,t,n){let r=this.ctx;for(let s of t){let a=r.createOscillator();a.frequency.value=s;let o=r.createGain();o.gain.value=n,a.connect(o).connect(e.out),a.start(),e.nodes.push(a)}}env(e,t,n,r,s,a=.3){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+r),e.gain.setValueAtTime(n,t+Math.max(r,s-a)),e.gain.exponentialRampToValueAtTime(1e-4,t+s+a)}organAt(e,t,n,r,s,a=!1){let o=this.ctx,c=o.createGain(),l=o.createBiquadFilter();l.type="lowpass",l.frequency.value=a?1100:1900,l.connect(c).connect(s);for(let[h,u,d]of[[1,1,"sine"],[2,.45,"sine"],[.5,.35,"sine"],[3,.12,"triangle"]]){let p=o.createOscillator();p.type=d,p.frequency.value=e*h,p.detune.value=(Math.random()-.5)*6;let f=o.createGain();f.gain.value=u,p.connect(f).connect(l),p.start(t),p.stop(t+n+.6)}this.env(c,t,r,.09,n,.35)}pianoAt(e,t,n,r){let s=this.ctx,a=s.createGain();a.connect(r);for(let[o,c]of[[1,1],[2,.35],[3,.12],[4.01,.05]]){let l=s.createOscillator();l.frequency.value=e*o;let h=s.createGain();h.gain.setValueAtTime(c,t),h.gain.exponentialRampToValueAtTime(1e-4,t+3.2/o),l.connect(h).connect(a),l.start(t),l.stop(t+3.4)}a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(n,t+.008),a.gain.exponentialRampToValueAtTime(n*.4,t+.6),a.gain.exponentialRampToValueAtTime(1e-4,t+3.3)}ks(e,t=3){let n=Math.round(e*10);if(this.ksCache.has(n))return this.ksCache.get(n);let r=this.ctx,s=r.sampleRate,a=Math.max(2,Math.round(s/e)),o=Math.floor(s*t),c=r.createBuffer(1,o,s),l=c.getChannelData(0),h=new Float32Array(a);for(let d=0;d<a;d++)h[d]=(Math.random()*2-1)*(d<a/2?1:.6);let u=0;for(let d=0;d<o;d++){let p=h[u],f=h[(u+1)%a];h[u]=(p+f)*.5*.9965,l[d]=p,u=(u+1)%a}return this.ksCache.set(n,c),c}pluckAt(e,t,n,r,s){let a=this.ctx,o=a.createBufferSource();o.buffer=this.ks(e);let c=a.createGain();c.gain.value=n;let l=a.createBiquadFilter();if(l.type="lowpass",l.frequency.value=2400,o.connect(l).connect(c).connect(r),s){let h=o.playbackRate;h.setValueAtTime(1,t),h.setValueAtTime(1,t+.35);for(let u=0;u<4;u++)h.linearRampToValueAtTime(1.045,t+.55+u*.32),h.linearRampToValueAtTime(1,t+.71+u*.32)}o.start(t)}bowlAt(e,t,n,r){let s=this.ctx;for(let[a,o,c]of[[1,1,.7],[2.71,.45,1.3],[5.12,.18,2.1]])for(let l of[0,c]){let h=s.createOscillator();h.frequency.value=e*a+l;let u=s.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(n*o*.5,t+.02),u.gain.exponentialRampToValueAtTime(1e-4,t+9/a),h.connect(u).connect(r),h.start(t),h.stop(t+9.2)}}moktakAt(e,t,n){let r=this.ctx,s=r.createOscillator();s.frequency.setValueAtTime(560,e),s.frequency.exponentialRampToValueAtTime(330,e+.16);let a=r.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(t,e+.002),a.gain.exponentialRampToValueAtTime(1e-4,e+.22),s.connect(a).connect(n),s.start(e),s.stop(e+.25);let o=r.createOscillator();o.type="triangle",o.frequency.value=1180;let c=r.createGain();c.gain.setValueAtTime(t*.25,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.05),o.connect(c).connect(n),o.start(e),o.stop(e+.06)}chimeAt(e,t,n){let r=[1318,1568,1760,2093,2349][Math.floor(Math.random()*5)];this.toneAt(r,e,3,t,n),this.toneAt(r*2.76,e,1.2,t*.3,n)}drip(e,t){let n=this.ctx,r=n.createOscillator(),s=900+Math.random()*1400;r.frequency.setValueAtTime(s,e),r.frequency.exponentialRampToValueAtTime(s*1.6,e+.05);let a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.03+Math.random()*.03,e+.003),a.gain.exponentialRampToValueAtTime(1e-4,e+.09),r.connect(a).connect(t),r.start(e),r.stop(e+.1)}toneAt(e,t,n,r,s,a="sine"){let o=this.ctx,c=o.createOscillator(),l=o.createGain();return c.type=a,c.frequency.setValueAtTime(e,t),l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(r,t+.005),l.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(l).connect(s),c.start(t),c.stop(t+n+.05),c}tone(e,t,{type:n="sine",gain:r=.2,when:s=0}={}){let a=this.ensure();return a?this.toneAt(e,a.currentTime+s,t,r,this.sfx,n):null}moktak(){let e=this.ensure();e&&this.moktakAt(e.currentTime,.35,this.sfx)}chime(e=.12){let t=this.ensure();t&&this.chimeAt(t.currentTime,e,this.sfx)}bell(){this.tone(196,5,{gain:.25}),this.tone(392.5,3.5,{gain:.12}),this.tone(589,2.2,{gain:.06})}soft(){this.tone(880,.6,{gain:.06}),this.tone(1320,.8,{gain:.04,when:.08})}drop(){this.tone(300,.25,{type:"triangle",gain:.12})}pop(){this.tone(660,.12,{gain:.05})}};var Uo='<ellipse cx="32" cy="40" rx="27" ry="12" fill="#f4f1ea" stroke="#d9d3c6" stroke-width="1.5"/><ellipse cx="32" cy="38" rx="21" ry="8.5" fill="#fbfaf6"/>',Um={yukgaejang:'<svg viewBox="0 0 64 64"><path d="M8 30 Q10 52 32 54 Q54 52 56 30 Z" fill="#f2efe8" stroke="#cfc8ba" stroke-width="1.5"/><ellipse cx="32" cy="30" rx="24" ry="9" fill="#b8321e"/><ellipse cx="32" cy="29" rx="19" ry="6" fill="#c9442a"/><path d="M18 28 l9 3 M34 26 l10 4 M24 32 l8-2" stroke="#6b3b1f" stroke-width="2.4" stroke-linecap="round"/><path d="M28 27 l7 1 M40 31 l6-1 M20 31 l5 0" stroke="#5f9c3a" stroke-width="2.4" stroke-linecap="round"/><circle cx="37" cy="30" r="1.6" fill="#f0a23a"/><circle cx="25" cy="27" r="1.3" fill="#f0a23a"/><path d="M22 18 q3-5 0-9 M32 17 q3-5 0-9 M42 18 q3-5 0-9" stroke="#c9c4ba" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',pyeonyuk:`<svg viewBox="0 0 64 64">${Uo}<g transform="rotate(-12 30 36)">${[0,1,2,3,4].map(i=>`<rect x="${12+i*7}" y="28" width="9" height="13" rx="1.5" fill="#efd9cf" stroke="#c7a596"/><rect x="${12+i*7}" y="28" width="9" height="3" fill="#7a5040"/><path d="M${13+i*7} 35 h7" stroke="#fbf3ee" stroke-width="1.2"/>`).join("")}</g><ellipse cx="51" cy="44" rx="6" ry="3.5" fill="#fbfaf6" stroke="#cfc8ba"/><circle cx="50" cy="43" r="1.4" fill="#f2a8a0"/><circle cx="53" cy="44" r="1.2" fill="#f2a8a0"/></svg>`,hongeo:`<svg viewBox="0 0 64 64">${Uo}<path d="M14 38 Q20 24 32 26 Q46 23 50 38 Q32 44 14 38Z" fill="#cf4a2a"/><path d="M20 33 q6-3 10 0 M32 31 q6-3 11 1" stroke="#e8794f" stroke-width="2" fill="none"/><circle cx="24" cy="36" r="3.4" fill="#9cc56a" stroke="#5f8a3a"/><circle cx="40" cy="35" r="3.4" fill="#9cc56a" stroke="#5f8a3a"/><path d="M30 30 l2 1 M36 33 l2 1 M27 34 l2 1" stroke="#fff5d8" stroke-width="1.4"/></svg>`,jeon:`<svg viewBox="0 0 64 64">${Uo}<ellipse cx="22" cy="37" rx="8" ry="5" fill="#f0c64a" stroke="#c9922a"/><ellipse cx="38" cy="40" rx="8" ry="5" fill="#f2ce58" stroke="#c9922a"/><circle cx="30" cy="31" r="5" fill="#c98a3a" stroke="#8e5a22"/><circle cx="42" cy="31" r="5" fill="#c98a3a" stroke="#8e5a22"/><circle cx="29" cy="30" r="0.9" fill="#d9402a"/><circle cx="31" cy="32" r="0.9" fill="#4f8a3a"/><circle cx="43" cy="30" r="0.9" fill="#4f8a3a"/><path d="M48 38 q6-6 10 0 q-4 6-10 0z" fill="#4f7d34" stroke="#c9922a" stroke-width="1.5"/></svg>`,tteok:`<svg viewBox="0 0 64 64">${Uo}<rect x="12" y="28" width="20" height="5" fill="#fbf8f0" stroke="#d7cfbf"/><rect x="12" y="33" width="20" height="3" fill="#8a3b2e"/><rect x="12" y="36" width="20" height="5" fill="#fbf8f0" stroke="#d7cfbf"/><rect x="35" y="30" width="16" height="9" rx="3" fill="#fbfaf6" stroke="#d7cfbf"/><circle cx="43" cy="34.5" r="2.6" fill="none" stroke="#c9b9a3" stroke-width="1.2"/><circle cx="43" cy="34.5" r="0.9" fill="#c9b9a3"/><rect x="38" y="40" width="14" height="6" rx="2.5" fill="#cfe3b3" stroke="#a7c387"/></svg>`,snack:`<svg viewBox="0 0 64 64">${Uo}${[[20,36],[24,33],[27,38],[17,39],[23,41]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="3.2" ry="2.2" fill="#d9b07a" stroke="#a87e4a"/>`).join("")}<path d="M33 31 q8 3 16 0 M34 35 q7 4 15 1 M35 39 q6 3 13 0 M36 43 q5 2 10 0" stroke="#e8b98a" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,soju:'<svg viewBox="0 0 64 64"><path d="M24 6 h8 v10 q6 4 6 12 v28 q0 3-3 3 h-14 q-3 0-3-3 v-28 q0-8 6-12z" fill="#3e9a63" opacity=".9" stroke="#2a6e45"/><rect x="18" y="32" width="20" height="12" fill="#f4f1ea"/><path d="M22 38 h12" stroke="#2a6e45" stroke-width="2"/><rect x="24" y="4" width="8" height="4" fill="#2a6e45"/><path d="M44 42 h12 l-2 14 h-8 z" fill="#e9f3ee" stroke="#9fbcae"/><path d="M45 46 h10" stroke="#cfe2d8" stroke-width="2"/></svg>',sikhye:`<svg viewBox="0 0 64 64"><path d="M10 28 Q12 50 32 52 Q52 50 54 28 Z" fill="#c9a24a" stroke="#9c7a2e" stroke-width="1.5"/><ellipse cx="32" cy="28" rx="22" ry="8" fill="#efe4c4"/>${[[24,27],[30,29],[36,26],[40,29],[27,30],[34,31]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="1.6" ry="0.9" fill="#fffdf6" stroke="#ddd2b4" stroke-width=".6"/>`).join("")}<ellipse cx="38" cy="27" rx="1.4" ry="2" fill="#f6efd8" stroke="#c9b98a" stroke-width=".6"/></svg>`,coffee:'<svg viewBox="0 0 64 64"><path d="M16 18 h28 l-4 38 h-20 z" fill="#fbfaf6" stroke="#cfc8ba" stroke-width="1.5"/><ellipse cx="30" cy="18" rx="14" ry="4" fill="#8a5a36"/><path d="M19 30 h22" stroke="#d9c06a" stroke-width="3"/><rect x="44" y="20" width="5" height="26" rx="1" fill="#f2c12e" transform="rotate(14 46 33)"/><rect x="44" y="24" width="5" height="3" fill="#c0392b" transform="rotate(14 46 33)"/><path d="M26 12 q3-4 0-8 M33 12 q3-4 0-8" stroke="#c9c4ba" stroke-width="1.5" fill="none"/></svg>'},jt=(i,e={})=>new Ne({color:i,roughness:.6,...e});function fa(i=.13){let e=new H(new Me(i,i*.8,.025,24),jt("#f4f1ea"));return e.position.y=.012,e}function Dm(i,e,t="#f2efe8"){return new H(new Me(i,i*.62,e,24),jt(t,{roughness:.4}))}var zn=(i,e)=>i+Math.random()*(e-i);function Nm(i){let e=new Te,t=(n,r=0,s=0,a=0)=>(n.position.set(r,s,a),e.add(n),n);switch(i){case"yukgaejang":{t(Dm(.12,.09),0,.045,0);let n=t(new H(new $t(.112,24),jt("#b8321e",{roughness:.15})),0,.093,0);n.rotation.x=-Math.PI/2;for(let r=0;r<8;r++){let s=t(new H(new xe(.06,.008,.01),jt(r%3?"#6b3b1f":"#5f9c3a")),zn(-.06,.06),.097,zn(-.06,.06));s.rotation.y=zn(0,3)}break}case"pyeonyuk":{e.add(fa());for(let n=0;n<5;n++){let r=t(new H(new xe(.05,.012,.075),jt("#ead2c6")),-.07+n*.03,.03+n*.002,0);r.rotation.z=.35;let s=t(new H(new xe(.05,.013,.012),jt("#7a5040")),-.07+n*.03,.031+n*.002,-.035);s.rotation.z=.35}t(new H(new Me(.03,.025,.02,14),jt("#f4f1ea")),.1,.02,.06),t(new H(new Me(.022,.022,.006,12),jt("#f2a8a0")),.1,.032,.06);break}case"hongeo":{e.add(fa());let n=t(new H(new ft(.075,16,10),jt("#cf4a2a",{roughness:.4})),0,.03,0);n.scale.y=.45;for(let r=0;r<4;r++)t(new H(new Me(.018,.018,.006,12),jt("#9cc56a")),zn(-.05,.05),.055,zn(-.04,.04)).rotation.x=zn(-.4,.4);break}case"jeon":{e.add(fa(.14));for(let r=0;r<4;r++)t(new H(new Me(.026,.028,.016,16),jt("#c98a3a")),-.06+r%2*.05,.034+Math.floor(r/2)*.012,-.03+Math.floor(r/2)*.02);for(let r=0;r<3;r++)t(new H(new Me(.03,.03,.01,18),jt("#f0c64a")),.04+r*.012,.03+r*.008,.02-r*.02).scale.set(1.5,1,.9);t(new H(new Me(.03,.03,.008,3),jt("#4f7d34")),0,.03,.07).scale.set(1.4,1,.8);break}case"tteok":{e.add(fa()),["#fbf8f0","#8a3b2e","#fbf8f0","#8a3b2e"].forEach((r,s)=>t(new H(new xe(.1,.014,.06),jt(r,{roughness:.9})),-.04,.032+s*.014,0));for(let r=0;r<3;r++)t(new H(new xe(.045,.012,.035),jt(r===2?"#cfe3b3":"#fbfaf6",{roughness:.9})),.07,.032+r*.013,-.02+r*.012);break}case"snack":{e.add(fa());for(let n=0;n<9;n++)t(new H(new ft(.012,8,6),jt("#d9b07a")),zn(-.08,-.01),.032,zn(-.04,.04)).scale.set(1.4,1,1);for(let n=0;n<7;n++){let r=t(new H(new xe(.07,.006,.008),jt("#e8b98a")),zn(.02,.07),.032+n*.003,zn(-.04,.04));r.rotation.y=zn(0,3)}break}case"soju":{let n=new Ne({color:"#3e9a63",transparent:!0,opacity:.8,roughness:.1});t(new H(new Me(.032,.032,.14,16),n),-.04,.07,0),t(new H(new Me(.012,.03,.06,14),n),-.04,.17,0),t(new H(new Me(.033,.033,.05,16,1,!0),jt("#f4f1ea")),-.04,.07,0),t(new H(new Me(.022,.018,.035,14),new Ne({color:"#e9f3ee",transparent:!0,opacity:.75,roughness:.05})),.05,.018,.02);break}case"sikhye":{t(Dm(.07,.06,"#c9a24a"),0,.03,0);let n=t(new H(new $t(.068,20),jt("#efe4c4",{roughness:.1})),0,.062,0);n.rotation.x=-Math.PI/2;for(let r=0;r<6;r++)t(new H(new ft(.005,6,4),jt("#fffdf6")),zn(-.04,.04),.06,zn(-.04,.04));break}case"coffee":{t(new H(new Me(.035,.026,.085,16),jt("#fbfaf6")),0,.043,0);let n=t(new H(new $t(.034,16),jt("#8a5a36",{roughness:.2})),0,.088,0);n.rotation.x=-Math.PI/2,t(new H(new xe(.012,.004,.09),jt("#f2c12e")),.05,.003,.02).rotation.y=.4;break}default:e.add(fa())}return e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.raycast=()=>{})}),e}var Wc=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ma=class{constructor(e,{look:t=Tn,outfit:n="suit",who:r="guest",onChange:s=()=>{}}={}){this.el=e,this.look={...Tn,...t},this.outfit=n,this.who=r,this.onChange=s,this.build()}build(){let e=ad,t=Object.entries(Tr).filter(([,s])=>s.who===this.who),n=(s,a)=>a.map(o=>`<button type="button" class="chip" data-k="${s}" data-v="${o.id}">${Wc(o.label)}</button>`).join(""),r=(s,a)=>a.map(o=>{let c=typeof o=="string"?o:o.id,l=typeof o=="string"?"":o.label;return`<button type="button" class="dot" data-k="${s}" data-v="${c}" style="--c:${c}" title="${Wc(l)}" aria-label="${Wc(l||c)}"></button>`}).join("");this.el.innerHTML=`
      <div class="cz">
        <div class="cz-preview">
          <canvas aria-label="\uB0B4 \uCE90\uB9AD\uD130 \uBBF8\uB9AC\uBCF4\uAE30"></canvas>
          <div class="cz-preview-tools">
            <button type="button" class="chip" data-dice>\u{1F3B2} \uC544\uBB34\uB807\uAC8C\uB098</button>
          </div>
        </div>
        <div class="cz-options">
          <div class="cz-row"><span>\uC637\uCC28\uB9BC</span><div>${t.map(([s,a])=>`<button type="button" class="chip" data-k="outfit" data-v="${s}">${Wc(a.label)}</button>`).join("")}</div></div>
          <div class="cz-row"><span>\uD53C\uBD80</span><div>${r("skin",e.skin)}</div></div>
          <div class="cz-row"><span>\uBA38\uB9AC \uBAA8\uC591</span><div>${n("hair",e.hair)}</div></div>
          <div class="cz-row"><span>\uBA38\uB9AC\uC0C9</span><div>${r("hairColor",e.hairColor)}</div></div>
          <div class="cz-row"><span>\uB208</span><div>${n("eyes",e.eyes)}</div></div>
          <div class="cz-row"><span>\uB208\uC379 \xB7 \uC785</span><div>${n("brows",e.brows)}${n("mouth",e.mouth)}</div></div>
          <div class="cz-row"><span>\uC548\uACBD \xB7 \uC218\uC5FC</span><div>${n("glasses",e.glasses)}${n("beard",e.beard.filter(s=>s.id!=="none"))}</div></div>
          <div class="cz-row"><span>\uD0A4</span><div>${n("height",e.height)}<button type="button" class="chip" data-k="blush" data-v="toggle">\uBCFC\uD130\uCE58</button></div></div>
        </div>
      </div>`,this.el.addEventListener("click",s=>{let a=s.target.closest("[data-k],[data-dice]");if(!a)return;if(a.hasAttribute("data-dice"))return this.randomize();let o=a.dataset.k,c=a.dataset.v;o==="outfit"?(this.outfit=c,this.avatar.setOutfit(c)):(o==="height"&&(c=Number(c)),o==="blush"&&(c=!this.look.blush),(o==="glasses"||o==="beard")&&this.look[o]===c&&(c="none"),this.look[o]=c,this.avatar.setLook(this.look),(o==="eyes"||o==="mouth")&&this.avatar.play("nod",null,{soft:!0})),this.sync(),this.onChange(this.look,this.outfit)}),this.initPreview(),this.sync()}randomize(){let e=n=>n[Math.floor(Math.random()*n.length)],t=ad;this.look={skin:e(t.skin),hair:e(t.hair).id,hairColor:e(t.hairColor).id,eyes:e(t.eyes).id,brows:e(t.brows).id,mouth:e(t.mouth).id,glasses:Math.random()<.3?e(t.glasses).id:"none",beard:Math.random()<.2?e(t.beard).id:"none",blush:Math.random()<.7,height:e(t.height).id},this.avatar.setLook(this.look),this.avatar.play("wave",null,{soft:!0}),this.sync(),this.onChange(this.look,this.outfit)}sync(){for(let e of this.el.querySelectorAll("[data-k]")){let t=e.dataset.k,n;t==="outfit"?n=e.dataset.v===this.outfit:t==="blush"?n=!!this.look.blush:t==="height"?n=Number(e.dataset.v)===Number(this.look.height):n=String(this.look[t])===e.dataset.v,e.setAttribute("aria-pressed",n)}}set(e,t){this.look={...Tn,...e},t&&(this.outfit=t),this.avatar.setOutfit(this.outfit),this.avatar.setLook(this.look),this.sync()}initPreview(){let e=this.el.querySelector("canvas"),t=this.renderer=new ha({canvas:e,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.outputColorSpace=At,t.toneMapping=ra;let n=new Vr;n.add(new jr("#ffffff","#b8b29d",1.4));let r=new qr("#fff4e6",1.6);r.position.set(2,3,4),n.add(r);let s=new H(new $t(.7,40),new Ne({color:"#e7e1d3"}));s.rotation.x=-Math.PI/2,n.add(s),this.avatar=new Ti({outfit:this.outfit,look:this.look}),n.add(this.avatar.root);let a=new tn(30,1,.1,20),o=.35,c=null;e.addEventListener("pointerdown",u=>{c=u.clientX,e.setPointerCapture(u.pointerId)}),e.addEventListener("pointermove",u=>{c!=null&&(o+=(u.clientX-c)*.012,c=u.clientX)}),e.addEventListener("pointerup",()=>{c=null});let l=performance.now(),h=u=>{if(this.disposed||(requestAnimationFrame(h),!e.offsetParent))return;let d=e.clientWidth,p=e.clientHeight;(e.width!==Math.round(d*t.getPixelRatio())||e.height!==Math.round(p*t.getPixelRatio()))&&(t.setSize(d,p,!1),a.aspect=d/p,a.updateProjectionMatrix());let f=Math.min(.05,(u-l)/1e3);l=u,c==null&&(o+=f*.25);let v=this.avatar.height;a.position.set(Math.sin(o)*3.1,1.15*v,Math.cos(o)*3.1),a.lookAt(0,.82*v,0),this.avatar.update(f,!1),t.render(n,a)};requestAnimationFrame(h)}dispose(){this.disposed=!0,this.renderer?.dispose(),this.renderer?.forceContextLoss?.()}};var wr=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Rr(i=[]){return i.map(e=>{if(typeof e=="string")return{type:"image",src:e,caption:"",year:""};let t=e.type||(/youtu\.?be/.test(e.src)?"youtube":/\.(mp4|webm|mov)(\?|$)/i.test(e.src)?"video":"image");return{caption:"",year:"",...e,type:t}}).filter(e=>e.src)}function lv(i){let e=String(i).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);return e?e[1]:null}var Xc=class{constructor(e,{onOpen:t,onClose:n}={}){this.el=e,this.onOpen=t,this.onClose=n,this.items=[],this.i=0,this.playing=!0,this.timer=null,e.innerHTML=`
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
      </div>`,this.layers=[e.querySelector(".th-a"),e.querySelector(".th-b")],this.front=0,e.addEventListener("click",r=>{let s=r.target.closest("[data-th],[data-idx]");if(!s)return;if(s.dataset.idx)return this.go(+s.dataset.idx);let a=s.dataset.th;a==="prev"&&this.go(this.i-1),a==="next"&&this.go(this.i+1),a==="play"&&this.toggle(),a==="close"&&this.close()}),addEventListener("keydown",r=>{this.el.hidden||(r.key==="Escape"&&this.close(),r.key==="ArrowRight"&&this.go(this.i+1),r.key==="ArrowLeft"&&this.go(this.i-1),r.key===" "&&(r.preventDefault(),this.toggle()))})}open(e,{title:t="",sub:n="",greeting:r="",portrait:s="",start:a=null}={}){this.items=[{type:"title",title:t,sub:n,portrait:s},...Rr(e),{type:"end",title:"\uAE30\uC5B5\uD558\uACA0\uC2B5\uB2C8\uB2E4",sub:r}],this.el.querySelector(".th-thumbs").innerHTML=this.items.map((o,c)=>o.type==="image"?`<button type="button" data-idx="${c}" style="background-image:url('${o.src.replace(/'/g,"%27")}')" aria-label="\uC0AC\uC9C4 ${c}"></button>`:o.type==="video"||o.type==="youtube"?`<button type="button" data-idx="${c}" class="vid" aria-label="\uC601\uC0C1 ${c}">\u25B6</button>`:"").join(""),this.el.hidden=!1,this.playing=!0,this.el.querySelector('[data-th="play"]').textContent="\u23F8",this.onOpen?.(),this.go(a==null?0:a+1,!0)}close(){clearTimeout(this.timer),this.layers.forEach(e=>{e.innerHTML=""}),this.el.hidden=!0,this.onClose?.()}toggle(){this.playing=!this.playing,this.el.querySelector('[data-th="play"]').textContent=this.playing?"\u23F8":"\u25B6";let e=this.layers[this.front].querySelector("video");e&&(this.playing?e.play():e.pause()),this.playing?this.schedule():clearTimeout(this.timer)}schedule(e){clearTimeout(this.timer);let t=this.items[this.i];!this.playing||!t||t.type==="video"||t.type==="youtube"||t.type!=="end"&&(this.timer=setTimeout(()=>this.go(this.i+1),e??(t.type==="title"?5e3:6500)))}go(e,t=!1){let n=this.items.length;this.i=(e%n+n)%n;let r=this.items[this.i],s=this.layers[1-this.front],a=this.layers[this.front];s.innerHTML=this.render(r),s.classList.add("show"),a.classList.remove("show");let o=a;setTimeout(()=>{o.classList.contains("show")||(o.innerHTML="")},1400),this.front=1-this.front;let c=this.el.querySelector(".th-caption");c.textContent=r.type==="image"||r.type==="video"||r.type==="youtube"?[r.year,r.caption].filter(Boolean).join(" \xB7 "):"";let l=n-2;this.el.querySelector(".th-count").textContent=l>0&&this.i>0&&this.i<n-1?`${this.i} / ${l}`:"",this.el.querySelectorAll("[data-idx]").forEach(u=>u.classList.toggle("on",+u.dataset.idx===this.i));let h=s.querySelector("video");h&&(h.onended=()=>this.go(this.i+1),this.playing&&h.play().catch(()=>{})),this.schedule(t?5e3:void 0)}render(e){if(e.type==="title")return`<div class="th-card">${e.portrait?`<img class="th-portrait" src="${e.portrait}" alt="">`:""}<h2>${wr(e.title)}</h2><p>${wr(e.sub)}</p><small>\uCD94\uC5B5 \uC0C1\uC601\uAD00 \xB7 \uC0AC\uC9C4\uC744 \uD55C \uC7A5\uC529 \uCC9C\uCC9C\uD788 \uB118\uACA8 \uB4DC\uB824\uC694</small></div>`;if(e.type==="end")return`<div class="th-card end"><h2>${wr(e.title)}</h2><p>${wr(e.sub||"")}</p></div>`;if(e.type==="video")return`<video src="${wr(e.src)}" playsinline controls></video>`;if(e.type==="youtube"){let n=lv(e.src);return n?`<iframe src="https://www.youtube-nocookie.com/embed/${n}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="\uCD94\uC5B5 \uC601\uC0C1"></iframe>`:'<p class="th-empty">\uC601\uC0C1 \uC8FC\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694</p>'}return`<img class="th-photo ${["kb1","kb2","kb3","kb4"][Math.floor(Math.random()*4)]}" src="${wr(e.src)}" alt="${wr(e.caption||"\uCD94\uC5B5 \uC0AC\uC9C4")}"><img class="th-blur" src="${wr(e.src)}" alt="">`}};var D=(i,e=document)=>e.querySelector(i),mt=(i,e=document)=>[...e.querySelectorAll(i)],Pi=i=>new Promise(e=>setTimeout(e,i)),He=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Bo=i=>`${Number(i||0).toLocaleString("ko-KR")}\uC6D0`,cv=(i,e)=>e.split(".").reduce((t,n)=>t==null?t:t[n],i),hv=(i,e,t)=>{let n=e.split("."),r=n.pop();n.reduce((s,a)=>s[a]??={},i)[r]=t},Fo=i=>{let e=new Date(i);return`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`},uv=matchMedia("(prefers-reduced-motion: reduce)").matches,dv=i=>i[Math.floor(Math.random()*i.length)],km;function Tt(i,e=2800){let t=D("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(km),km=setTimeout(()=>t.classList.remove("show"),e)}var Bm;function St(i,e=4400){let t=D("#caption");t.textContent=i,t.classList.add("show"),clearTimeout(Bm),Bm=setTimeout(()=>t.classList.remove("show"),e)}async function Oo(i){try{return await navigator.clipboard.writeText(i),!0}catch{let e=document.createElement("textarea");e.value=i,document.body.append(e),e.select();let t=document.execCommand("copy");return e.remove(),t}}function Kc(i,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=i,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}var xd=new URLSearchParams(location.search),er=(xd.get("m")||Ji.defaultMemorial).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,40)||Ji.defaultMemorial,qe=new kc(Ji,er),it=new Vc,Ym="samga:me",Fm=(()=>{try{return JSON.parse(localStorage.getItem(Ym))||{}}catch{return{}}})(),E={role:"guest",entered:!1,busy:!1,memorial:null,counters:{},guestbook:[],lanterns:[],wreaths:[],done:new Set,ticket:!1,incenseAt:null,inHall:!1,me:{id:"",name:"",relation:"",religion:"traditional",outfit:"suit",...Fm,look:{...Tn,...Fm.look||{}}},time:(()=>{let i=new Date().getHours();return i>=6&&i<16?"day":i>=16&&i<19?"dusk":"night"})(),act:"",actSeq:0,say:"",sayS:0,ix:null,meals:0,view:localStorage.getItem("samga:view")||"first",auto:!1};E.me.id||(E.me.id=`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`);var Rd=()=>{try{localStorage.setItem(Ym,JSON.stringify(E.me))}catch{}},Ii=new ha({antialias:!0,powerPreference:"high-performance"});Ii.setPixelRatio(Math.min(devicePixelRatio,2));Ii.shadowMap.enabled=!0;Ii.shadowMap.type=lc;Ii.toneMapping=ra;Ii.outputColorSpace=At;D("#stage").append(Ii.domElement);var yn=new tn(50,innerWidth/innerHeight,.1,600);await Promise.race([Promise.all([document.fonts?.load?.('700 40px "Gowun Batang"'),document.fonts?.load?.('700 40px "Noto Serif KR"',"\u8CFB\u5100")]),Pi(1800)]).catch(()=>{});await am();var me=Pm(Ii),nr=me.scene;me.setTime(E.time);var Y={avatar:new Ti({outfit:E.me.outfit,look:E.me.look}),pos:new S(0,0,21),face:Math.PI,target:null,resolve:null,speed:3.6,stuck:0};Y.avatar.root.visible=!1;nr.add(Y.avatar.root);var _e={fpPitch:.1,yaw:0,pitch:.36,dist:7.6,tYaw:0,tPitch:.36,tDist:7.6,focus:null,focusK:0,look:new S};function Zm(){Ii.setSize(innerWidth,innerHeight),yn.aspect=innerWidth/innerHeight,yn.fov=innerWidth<innerHeight?62:50,yn.updateProjectionMatrix()}addEventListener("resize",Zm);Zm();var Jm=D("#labels"),Md=new Set,va=new S;function ya(i,e){Jm.append(i);let t={el:i,getPos:e};return Md.add(t),{el:i,remove(){i.remove(),Md.delete(t)}}}function Qc(i,e="",t="\uB098",n=""){let r=document.createElement("div");return r.className=`tag ${e}`,r.innerHTML=`<b>${He(t)}</b>${He(i)}${n?`<i>${He(n)}</i>`:""}`,r}var pv=(i,e=1)=>()=>i.visible===!1?null:va.copy(i.position).add(new S(0,1.62*e,0));function hs(i,e,t=3800,n=!1,r=1){let s=document.createElement("div");s.className=`bubble${n?" emote":""}`,s.textContent=e;let a=ya(s,()=>va.copy(i.position).add(new S(0,2.05*r,0)));setTimeout(()=>a.remove(),t)}function fv(){let i=innerWidth,e=innerHeight;for(let t of Md){let n=t.getPos();if(!n){t.el.style.display="none";continue}let r=va.copy(n).project(yn);if(r.z>1||r.z<-1){t.el.style.display="none";continue}t.el.style.display="",t.el.style.transform=`translate(${(r.x*.5+.5)*i}px, ${(-r.y*.5+.5)*e}px) translate(-50%, -100%)`}}var bd,mv=ya(Qc("\uC0C1\uC8FC","host","\uC0C1\uC8FC"),()=>me.hostNpc.root.visible?va.set(me.HOST_SPOT.x,Oe+1.62*me.hostNpc.height,me.HOST_SPOT.z):null);ya(Qc("\uC548\uB0B4 \uB3C4\uC6B0\uBBF8","helper","\uC548\uB0B4"),pv(me.helper.root));function ga(){return E.memorial.portrait||Cm(E.memorial.deceased.name)}function Km(){return Rr(E.memorial.gallery||[])}function Ad(){let i=E.memorial.deceased||{};return[i.birth,i.death].filter(Boolean).join(" \u2013 ")+(i.age?` \xB7 \uD5A5\uB144 ${i.age}\uC138`:"")}function ir({theme:i=!0}={}){let e=E.memorial,t=e.deceased?.name||"\uACE0\uC778";mt('[data-bind="name"]').forEach(n=>{n.textContent=`\u6545 ${t}`}),mt('[data-bind="dates"]').forEach(n=>{n.textContent=Ad()}),mt('[data-bind="mourners"]').forEach(n=>{n.textContent=e.mourners||"-"}),mt('[data-bind="departure"]').forEach(n=>{n.textContent=e.funeral?.departure||"-"}),mt('[data-bind="burial"]').forEach(n=>{n.textContent=e.funeral?.burial||"-"}),mt('[data-bind="greeting"]').forEach(n=>{n.textContent=e.greeting||""}),mt('[data-bind="portrait"]').forEach(n=>{n.src=ga()}),D("#theme-note").textContent=`${is[e.theme]?.icon||""} ${is[e.theme]?.label||""} \uBE48\uC18C`,document.title=`\u6545 ${t} \xB7 \uC0BC\uAC00`,i&&me.theme?.name!==e.theme&&(me.setTheme(is[e.theme]?e.theme:"hospital",t),me.setShoes(Cd())),me.setDeceasedName(t),me.setPortrait(ga()),me.setGallery(Km().filter(n=>n.type==="image").map(n=>n.src)),me.setReligion(e.religion||"traditional"),me.setTablet(t),me.hostNpc.setOutfit(Tr[e.hostOutfit]?e.hostOutfit:"hostSuit"),me.hostNpc.setLook(e.hostLook||Tn),mv.el.innerHTML=`<b>\uC0C1\uC8FC</b>${He(e.hostName||"\uC0C1\uC8FC")}`,E.role==="host"&&(Y.avatar.setOutfit(Tr[e.hostOutfit]?e.hostOutfit:"hostSuit"),Y.avatar.setLook(e.hostLook||Tn)),rr()}var Ed=null;function vd(i){mt("#entry [data-step]").forEach(e=>{e.hidden=e.dataset.step!==String(i)}),mt("#entry .steps i").forEach((e,t)=>e.classList.toggle("on",t+1<=i)),i===3&&(i=2),D("#entry .entry-card").scrollTop=0,i===3&&!Ed&&(Ed=new ma(D("#entry-look"),{look:E.me.look,outfit:E.me.outfit,who:"guest",onChange:(e,t)=>{E.me.look=e,E.me.outfit=t}}))}function gv(){let i=D("#rite-choices");i.innerHTML=Object.entries(Ei).map(([e,t])=>`
    <button type="button" class="card-choice" data-rite="${e}" aria-pressed="${E.me.religion===e}">
      <span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small>
    </button>`).join(""),i.onclick=e=>{let t=e.target.closest("[data-rite]");t&&(E.me.religion=t.dataset.rite,mt("[data-rite]",i).forEach(n=>n.setAttribute("aria-pressed",n===t)))},Qm(D("#entry-relations"),E.me.relation,e=>{E.me.relation=e}),D("#in-name").value=E.me.name||"",D("#to-step2").onclick=()=>vd(2),D("#to-step3").onclick=()=>{let e=D("#in-name").value.trim();if(!e){D("#in-name").focus(),Tt("\uC774\uB984\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694. \uC774\uB984\uD45C\uC640 \uBC29\uBA85\uB85D\uC5D0 \uC4F0\uC5EC\uC694.");return}E.me.name=e,qc("guest")},mt("#entry [data-back]").forEach(e=>{e.onclick=()=>vd(+e.dataset.back)}),D("#btn-enter").onclick=()=>qc("guest"),D("#in-name").addEventListener("keydown",e=>{e.key==="Enter"&&D("#to-step3").click()}),D("#btn-host-entry").onclick=()=>e0(),D("#btn-theater-entry").onclick=()=>ds(),vd(1)}function Qm(i,e,t){i.innerHTML=rd.map(n=>`<button type="button" class="chip" data-rel="${n}" aria-pressed="${n===e}">${n}</button>`).join(""),i.onclick=n=>{let r=n.target.closest("[data-rel]");if(!r)return;let s=r.getAttribute("aria-pressed")!=="true";mt("[data-rel]",i).forEach(a=>a.setAttribute("aria-pressed",s&&a===r)),t(s?r.dataset.rel:"")}}function e0(){D("#pin-tip").textContent=Ji.hostPin==="0000"?"\uCC98\uC74C PIN\uC740 0000 \uC774\uC5D0\uC694. js/config.js \uC5D0\uC11C \uBC14\uAFD4 \uC8FC\uC138\uC694.":"";let i=D("#dlg-pin");hn(i),i.onclose=()=>{if(i.returnValue!=="ok")return;let e=new FormData(D("#form-pin")).get("pin");if(D("#form-pin").reset(),String(e)!==String(Ji.hostPin)){Tt("PIN\uC774 \uB9DE\uC9C0 \uC54A\uC544\uC694.");return}qc("host")}}async function qc(i){E.role=i,document.body.classList.toggle("is-host",i==="host"),i==="guest"&&Rd(),Ed?.dispose(),it.ensure(),kd(),D("#entry").hidden=!0,D("#hud").hidden=!1,D("#bar").hidden=!1;let e=E.memorial;i==="host"?(me.hostNpc.root.visible=!1,Y.pos.set(me.HOST_SPOT.x,Oe,me.HOST_SPOT.z),Y.face=me.HOST_SPOT.face,_e.tYaw=_e.yaw=-Math.PI/2+.35,_e.tDist=6.5,ir({theme:!1})):(me.hostNpc.root.visible=!0,Y.avatar.setOutfit(E.me.outfit),Y.avatar.setLook(E.me.look),Y.pos.set(0,0,21),Y.face=Math.PI,_e.tYaw=_e.yaw=0),Y.avatar.root.visible=!0;let t=i==="host"?e.hostName||"\uC0C1\uC8FC":E.me.name;if(bd=ya(Qc(t,i==="host"?"host":"",i==="host"?"\uC0C1\uC8FC":"\uB098",i==="host"?"":E.me.relation),()=>Y.avatar.root.visible?va.copy(Y.pos).add(new S(0,1.62*Y.avatar.height,0)):null),Go(E.view),Bv(),i==="guest"&&!localStorage.getItem("samga:onboarded")&&setTimeout(()=>hn(D("#dlg-onboard")),600),setTimeout(ih,1800),E.entered=!0,E.done=new Set(qe.getLocal(`done:${E.me.religion}`,[])),E.ticket=!!qe.getLocal("ticket",!1),r0(),a0(),i==="guest"){let n=new Date().toDateString();qe.getLocal("visited","")!==n&&(qe.setLocal("visited",n),qe.bump("visits"),E.counters.visits=(E.counters.visits||0)+1),D("#guide").hidden=innerWidth<720,St(`${E.me.name} \uB2D8, \uC5B4\uC11C \uC624\uC138\uC694.
\uB3CC\uAE38\uC744 \uB530\uB77C \uBE48\uC18C\uB85C \uCC9C\uCC9C\uD788 \uAC78\uC5B4\uAC00 \uBCF4\uC138\uC694.`,5200),setTimeout(()=>{E.helperGreeted||(E.helperGreeted=!0,me.helper.play("nod",null,{soft:!0}),hs(me.helper.root,"\uC5B4\uC11C \uC624\uC138\uC694. \uCC98\uC74C\uC774\uC2DC\uBA74 \uC800\uD55C\uD14C \uBB3C\uC5B4\uBCF4\uC138\uC694~",4200))},1800)}else St(`\uC0C1\uC8FC \uC790\uB9AC\uC5D0 \uC130\uC2B5\uB2C8\uB2E4.
\uC870\uBB38\uAC1D\uC744 \uB9DE\uC73C\uBA70 '\uB2F5\uB840 \uC778\uC0AC'\uB85C \uACE0\uB9C8\uC6C0\uC744 \uC804\uD560 \uC218 \uC788\uC5B4\uC694.`,5200),setTimeout(()=>Fd(),900);rr(),E0()}function vv(i){return[i]}function Qt(i){return Y.avatar.cancelSoft(),Y.resolve&&Y.resolve(!1),Y.avatar.hold==="sit"&&(Y.avatar.hold=null),new Promise(e=>{Y.route=vv(i),Y.target=Y.route.shift(),Y.resolve=e,Y.stuck=0,Y.best=1/0})}function yv(){Y.resolve&&Y.resolve(!1),Y.route=null,Y.target=null,Y.resolve=null}var Kn={};function _v(){let i=(Kn.KeyW||Kn.ArrowUp?1:0)-(Kn.KeyS||Kn.ArrowDown?1:0),e=(Kn.KeyD||Kn.ArrowRight?1:0)-(Kn.KeyA||Kn.ArrowLeft?1:0);if(!i&&!e)return null;let t=-Math.sin(_e.yaw),n=-Math.cos(_e.yaw),r=Math.cos(_e.yaw),s=-Math.sin(_e.yaw);return new de(t*i+r*e,n*i+s*e).normalize()}var $c=(i,e,t)=>{let n=(e-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*t};function xv(i){let e=Y.avatar,t=null,n=!1;if(!e.busy&&E.entered){let a=_v();if(a)Y.target&&yv(),e.cancelSoft(),t=a,e.hold==="sit"&&(e.hold=null);else if(Y.target){let o=Y.target.x-Y.pos.x,c=Y.target.z-Y.pos.z,l=Math.hypot(o,c);if(l<Y.best-.05?(Y.best=l,Y.stuck=0):Y.stuck+=i,l<.07&&Y.route?.length)Y.target=Y.route.shift(),Y.best=1/0;else if(l<.07){Y.pos.x=Y.target.x,Y.pos.z=Y.target.z;let h=Y.resolve,u=Y.target.face;Y.target=null,Y.resolve=null,u!=null&&(Y.wantFace=u),h?.(!0)}else t=new de(o/l,c/l)}}if(t){let a=Math.min(Y.speed*i,Y.target?Math.hypot(Y.target.x-Y.pos.x,Y.target.z-Y.pos.z):1),o=Y.pos.x+t.x*a,c=Y.pos.z+t.y*a;o*o+c*c<2116&&(Y.pos.x=o,Y.pos.z=c,n=!0),Y.face=$c(Y.face,Math.atan2(t.x,t.y),Math.min(1,i*12)),Y.wantFace=null}else Y.wantFace!=null&&(Y.face=$c(Y.face,Y.wantFace,Math.min(1,i*8)));let r=me.heightAt(Y.pos.x,Y.pos.z);Y.pos.y+=(r-Y.pos.y)*Math.min(1,i*14),e.root.position.copy(Y.pos),e.root.rotation.y=Y.face,e.update(i,n);let s=me.inHall(Y.pos.x,Y.pos.z)&&Y.pos.z<.6;if(s!==E.inHall){E.inHall=s;let a=me.theme?.shoes;e.setBarefoot(s&&a),a&&s&&!E.shoeTold&&(E.shoeTold=!0,St("\uC2E0\uBC1C\uC744 \uBC97\uACE0 \uBE48\uC18C \uB9C8\uB8E8\uC5D0 \uC62C\uB77C\uC12D\uB2C8\uB2E4.",3e3)),me.setShoes(Cd())}}function Cd(){let i=3;E.inHall&&E.role==="guest"&&i++;for(let e of E.others?.values()||[])e.inHall&&i++;return i}function Mv(i){_e.yaw+=(_e.tYaw-_e.yaw)*Math.min(1,i*8),_e.pitch+=(_e.tPitch-_e.pitch)*Math.min(1,i*8),_e.dist+=(_e.tDist-_e.dist)*Math.min(1,i*6);let e,t;if(E.entered)if(Ho()){let o=Y.avatar.height,c=new S(Y.pos.x,Y.pos.y+1.42*o,Y.pos.z),l=Y.face+Math.PI;t=c.clone().add(new S(Math.sin(l)*.45,.05,Math.cos(l)*.45)),e=c.clone().add(new S(-Math.sin(l)*Math.cos(_e.fpPitch),-Math.sin(_e.fpPitch),-Math.cos(l)*Math.cos(_e.fpPitch))),_e.yaw=_e.tYaw=l}else{e=new S(Y.pos.x,Y.pos.y+1.1,Y.pos.z),E.view==="first"&&(_e.yaw=_e.tYaw=Y.face+Math.PI/2+.25,_e.pitch=_e.tPitch=.5,_e.dist=_e.tDist=3.4);let o=Math.cos(_e.pitch);t=new S(e.x+Math.sin(_e.yaw)*o*_e.dist,e.y+Math.sin(_e.pitch)*_e.dist,e.z+Math.cos(_e.yaw)*o*_e.dist),me.inHall(Y.pos.x,Y.pos.z)&&(t.x=Sr.clamp(t.x,-9.6,9.6),t.z=Math.max(t.z,-11.5),t.y=Math.min(t.y,(me.theme?.ceiling??Oe+4.8)-.3)),t.y=Math.max(t.y,me.heightAt(t.x,t.z)+.4)}else{let o=performance.now()/1e3;e=new S(0,2.2,-4);let c=o*.05;t=new S(Math.sin(c)*15,5.5,-4+Math.cos(c)*15+6)}let n=_e.focus?1:0;if(_e.focusK+=(n-_e.focusK)*Math.min(1,i*3),_e.focusK>.001&&(_e.focus||_e.lastFocus)){let o=_e.focus||_e.lastFocus;t.lerp(o.pos,_e.focusK),e.lerp(o.look,_e.focusK)}let r=Ho();r!==_e.wasFp&&(_e.blend=0,_e.wasFp=r),_e.blend=Math.min(1,(_e.blend??1)+i*2.2);let s=E.entered?_e.blend<1?Math.min(1,i*5):1:Math.min(1,i*2);yn.position.lerp(t,s),_e.look.lerp(e,s),Y.avatar.root.visible=E.entered&&!(r&&_e.blend>.6);let a=((innerWidth<innerHeight?62:50)+(r?10:0))*(r?_e.zoom:1);Math.abs(yn.fov-a)>.1&&(yn.fov+=(a-yn.fov)*Math.min(1,i*4),yn.updateProjectionMatrix()),yn.lookAt(_e.look)}function Pd(){_e.focus=null}function Ho(){return E.entered&&E.view==="first"&&!Y.avatar.busy&&Y.avatar.hold!=="sit"&&!_e.focus}function Go(i){E.view=i,localStorage.setItem("samga:view",i),D("#btn-view").textContent=i==="first"?"\u{1F441} 1\uC778\uCE6D":"\u{1F3A5} 3\uC778\uCE6D",i==="third"&&(_e.tYaw=_e.yaw=Y.face+Math.PI,_e.tPitch=.36,_e.tDist=7)}var Yc=new yo;Yc.camera=yn;var Om=new de;function t0(i,e){Om.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),Yc.setFromCamera(Om,yn);let t=Yc.intersectObjects(nr.children,!0);for(let n of t)if(n.object.userData.avatar!==Y.avatar&&!(!n.object.visible||n.object.isSprite&&!n.object.userData.interact))return n.object.userData.interact?{interact:n.object.userData.interact,point:n.point}:me.isWalkable(n.object)?{walk:n.point}:{walk:Ev(n.point)};return null}var bv=new qn(new S(0,1,0),-Oe);function Ev(i){let e=new S;return Yc.ray.intersectPlane(bv,e)&&e.distanceTo(yn.position)<60?e:new S(i.x,0,i.z)}var Ci=new Map,Qi=null,Sd=0,us=Ii.domElement;us.addEventListener("pointerdown",i=>{if(us.setPointerCapture(i.pointerId),Ci.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ci.size===1&&(Qi={x:i.clientX,y:i.clientY,moved:0}),Ci.size===2){let[e,t]=[...Ci.values()];Sd=Math.hypot(e.x-t.x,e.y-t.y),Qi=null}});us.addEventListener("pointermove",i=>{let e=Ci.get(i.pointerId);if(!e){Sv(i.clientX,i.clientY);return}let t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,Ci.size===2){let[r,s]=[...Ci.values()],a=Math.hypot(r.x-s.x,r.y-s.y);Zc(Sd/a),Sd=a;return}Qi&&(Qi.moved+=Math.abs(t)+Math.abs(n),Qi.moved>6&&(_e.focus&&Pd(),Ho()?(Y.face-=t*.005,Y.wantFace=null,_e.fpPitch=Sr.clamp(_e.fpPitch+n*.003,-.5,.75)):(_e.tYaw-=t*.0055,_e.tPitch=Sr.clamp(_e.tPitch+n*.004,.05,1.25))))});function n0(i){let e=Qi&&Qi.moved>6;Ci.delete(i.pointerId),i.type==="pointerup"&&Qi&&!e&&Ci.size===0&&Rv(i.clientX,i.clientY),Ci.size===0&&(Qi=null)}us.addEventListener("pointerup",n0);us.addEventListener("pointercancel",n0);us.addEventListener("wheel",i=>{i.preventDefault(),Zc(1+Math.sign(i.deltaY)*.1)},{passive:!1});_e.zoom=1;function Zc(i){E.view==="first"?(_e.zoom=Sr.clamp(_e.zoom*i,.55,1.12),i>1&&_e.zoom>=1.12?(_e.overZoom=(_e.overZoom||0)+(i-1),_e.overZoom>.35&&(_e.overZoom=0,_e.zoom=1,Go("third"),_e.tDist=3.2,Tt("3\uC778\uCE6D\uC73C\uB85C \uBC14\uAFE8\uC5B4\uC694. \uC190\uAC00\uB77D\uC744 \uBC8C\uB824 \uAC00\uAE4C\uC774 \uB2F9\uAE30\uBA74 \uB2E4\uC2DC 1\uC778\uCE6D\uC774 \uB3FC\uC694.",2600))):_e.overZoom=0):(_e.tDist=Sr.clamp(_e.tDist*i,2.4,16),i<1&&_e.tDist<=2.4?(_e.underZoom=(_e.underZoom||0)+(1-i),_e.underZoom>.35&&(_e.underZoom=0,_e.zoom=1,Go("first"))):_e.underZoom=0)}var Ar=null,yd=0;function Sv(i,e){yd||!E.entered||(yd=requestAnimationFrame(()=>{yd=0;let t=t0(i,e),n=t?.interact;us.style.cursor=n?"pointer":t?.walk?"default":"grab";let r=n?Tv(n):"";if(!r){Ar?.remove(),Ar=null;return}Ar||(Ar=document.createElement("div"),Ar.className="hover-label",document.body.append(Ar)),Ar.textContent=r,Ar.style.transform=`translate(${i}px, ${e-16}px) translate(-50%, -100%)`}))}function Tv(i){if(i.startsWith("memory:")){let t=me.memories?.[+i.split(":")[1]];return t?`${t.name} \uB2D8\uC758 \uB9C8\uC74C${t.relation?` \xB7 ${t.relation}`:""}`:""}if(i.startsWith("sky:"))return"\uD558\uB298\uC758 \uB4F1\uBD88";if(i.startsWith("wreath:")){let t=me.wreaths?.[+i.split(":")[1]];return t?`\uADFC\uC870\uD654\uD658 \xB7 ${t.from}`:""}if(i.startsWith("other:")){let t=E.others.get(i.slice(6));return t?`${t.name} \uB2D8\uAED8 \uC778\uC0AC`:""}let e=me.interactables.get(i);return e?e.verb:""}function wv(i,e){let t=document.createElement("div");t.className="ripple",t.style.left=`${i}px`,t.style.top=`${e}px`,Jm.append(t),setTimeout(()=>t.remove(),750)}function Rv(i,e){if(!E.entered)return;if(_e.focus){Pd();return}let t=t0(i,e);if(t){if(t.interact){dn(t.interact);return}t.walk&&!E.busy&&!Y.avatar.busy&&(wv(i,e),Qt({x:t.walk.x,z:t.walk.z}))}}addEventListener("keydown",i=>{if(!E.entered||i.target.closest("input, textarea, select, dialog")||document.querySelector("dialog[open]")||!D("#theater").hidden)return;Kn[i.code]=!0,i.code==="KeyQ"&&(Ho()?Y.face+=.35:_e.tYaw+=.35),i.code==="KeyE"&&(Ho()?Y.face-=.35:_e.tYaw-=.35),i.code==="KeyV"&&Go(E.view==="first"?"third":"first"),(i.code==="Equal"||i.code==="NumpadAdd")&&Zc(.85),(i.code==="Minus"||i.code==="NumpadSubtract")&&Zc(1.18),i.code==="KeyG"&&l0(),i.code==="KeyT"&&(i.preventDefault(),Id()),i.code==="Escape"&&Pd(),(i.code==="Space"||i.code==="Enter")&&(i.preventDefault(),E.near&&dn(E.near.id));let e=Number(i.key);e>=1&&e<=9&&mt("#rite-actions .act")[e-1]?.click(),i.code.startsWith("Arrow")&&i.preventDefault()});addEventListener("keyup",i=>{Kn[i.code]=!1});addEventListener("blur",()=>{for(let i in Kn)Kn[i]=!1});function Av(){let i=null,e=1/0;if(E.entered&&!Y.avatar.busy&&!E.busy)for(let t of me.interactables.values()){if(!t.radius||t.id==="host"&&E.role==="host")continue;let n=Math.hypot(Y.pos.x-t.spot.x,Y.pos.z-t.spot.z);n<t.radius&&n<e&&(e=n,i=t)}if(i?.id!==E.near?.id){E.near=i;let t=D("#prompt");i?(t.innerHTML=`${He(i.verb)}<kbd>Space</kbd>`,t.hidden=!1):t.hidden=!0,zo(),i?.id==="altar"&&eh()<=0&&E.role==="guest"&&St(`\uD5A5\uC774 \uB2E4 \uD0C0\uC11C \uAEBC\uC838 \uC788\uC5B4\uC694.
\uC0C8 \uD5A5\uC744 \uC62C\uB824 \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC8FC\uC138\uC694.`,3800)}E.role==="guest"&&!E.hostNodded&&me.hostNpc.root.visible&&Math.hypot(Y.pos.x-me.HOST_SPOT.x,Y.pos.z-me.HOST_SPOT.z)<4.2&&(E.hostNodded=!0,me.hostNpc.play("nod"))}D("#prompt").onclick=()=>E.near&&dn(E.near.id);async function dn(i){if(E.busy||Y.avatar.busy){Tt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}if(i.startsWith("photo:"))return ds(+i.split(":")[1]);if(i.startsWith("memory:"))return jv(me.memories?.[+i.split(":")[1]]);if(i.startsWith("sky:")){let t=me.lantern(+i.split(":")[1]);return t&&Xv(t)}if(i.startsWith("meal:"))return u0(+i.split(":")[1]);if(i.startsWith("wreath:"))return Yv(me.wreaths?.[+i.split(":")[1]]);if(i.startsWith("other:"))return Qv(i.slice(6));let e=me.interactables.get(i);switch(i){case"portrait":return ds();case"altar":await Qt(e.spot)&&St(E.role==="host"?"\uC81C\uB2E8 \uC55E\uC785\uB2C8\uB2E4.":`\uC81C\uB2E8 \uC55E\uC785\uB2C8\uB2E4.
\uC544\uB798 \uBC88\uD638 \uC21C\uC11C\uB300\uB85C \uBC84\uD2BC\uC744 \uB204\uB974\uAC70\uB098, \u2018\uD55C \uBC88\uC5D0 \uC870\uBB38\uD558\uAE30\u2019\uB97C \uB20C\uB7EC \uC8FC\uC138\uC694.`);return;case"candles":return _a("candle");case"basket":return un(async()=>{await Qt(e.spot)&&i0()});case"host":return E.role==="host"?void 0:un(async()=>{await Qt(e.spot)&&Vv()});case"donation":return un(async()=>{await Qt(e.spot)&&h0()});case"guestbook":return un(async()=>{await Qt(e.spot)&&Fv()});case"lantern":return un(async()=>{await Qt(e.spot)&&Wv()});case"florist":return un(async()=>{await Qt(e.spot)&&$v()});case"helper":return un(async()=>{await Qt(e.spot)&&Zv()});default:}}async function un(i){if(!E.busy){E.busy=!0,zo();try{await i()}finally{E.busy=!1,zo()}}}function Vn(i){E.act=i,E.actSeq++}function i0(){if(Y.avatar.hold==="flower"){Tt("\uC774\uBBF8 \uAD6D\uD654\uB97C \uB4E4\uACE0 \uC788\uC5B4\uC694. \uC81C\uB2E8 \uC55E\uC5D0\uC11C \uD5CC\uD654\uD574 \uC8FC\uC138\uC694.");return}Y.avatar.hold="flower",Y.avatar.setProp("flower",!0),it.soft(),St(`\uD558\uC580 \uAD6D\uD654 \uD55C \uC1A1\uC774\uB97C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.
\uC81C\uB2E8 \uC55E\uC73C\uB85C \uAC00\uC11C \uAF43\uBD09\uC624\uB9AC\uAC00 \uC601\uC815\uC744 \uD5A5\uD558\uB3C4\uB85D \uB193\uC544 \uC8FC\uC138\uC694.`),Vn("flower")}var Cv=()=>me.interactables.get("altar").spot,Hm={traditional:{incense:`\uD5A5\uC5D0 \uBD88\uC744 \uBD99\uC5EC \uD5A5\uB85C\uC5D0 \uAF42\uC558\uC2B5\uB2C8\uB2E4.
\uD5A5 \uC5F0\uAE30\uAC00 \uACE0\uC778\uAED8 \uB9C8\uC74C\uC744 \uC804\uD574 \uC904 \uAC70\uC608\uC694.`,bow:"\uB450 \uBC88 \uC808\uD558\uACE0, \uBAA9\uB840\uB85C \uC608\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4.",silence:"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4."},buddhist:{incense:"\uD5A5\uC744 \uC0AC\uB974\uBA70 \uADF9\uB77D\uC655\uC0DD\uC744 \uBE55\uB2C8\uB2E4.",hapjang:`\uB098\uBB34\uC544\uBBF8\uD0C0\uBD88 \u2014
\uB450 \uC190\uC744 \uBAA8\uC544 \uBC18\uBC30 \uC62C\uB838\uC2B5\uB2C8\uB2E4.`,bow:`\uC808 \uB450 \uBC88\uC744 \uC62C\uB838\uC2B5\uB2C8\uB2E4.
\uBD80\uCC98\uB2D8 \uD488\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC18C\uC11C.`,beads:"\uC5FC\uC8FC \uC77C\uACF1 \uC54C\uC744 \uAD74\uB9AC\uBA70 \uADF9\uB77D\uC655\uC0DD\uC744 \uBE4C\uC5C8\uC2B5\uB2C8\uB2E4."},christian:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",prayer:`\uC8FC\uB2D8, \uC2AC\uD514 \uAC00\uC6B4\uB370 \uC788\uB294 \uC720\uAC00\uC871\uC744 \uC704\uB85C\uD558\uC2DC\uACE0
\uBD80\uD65C\uC758 \uC18C\uB9DD\uC73C\uB85C \uBD99\uB4E4\uC5B4 \uC8FC\uC18C\uC11C.`,silentPrayer:"\uACE0\uAC1C \uC219\uC5EC \uBB35\uB3C4\uD569\uB2C8\uB2E4."},catholic:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",sign:"\uC131\uBD80\uC640 \uC131\uC790\uC640 \uC131\uB839\uC758 \uC774\uB984\uC73C\uB85C. \uC544\uBA58.",prayer:`\uC8FC\uB2D8, {name}\uC5D0\uAC8C \uC601\uC6D0\uD55C \uC548\uC2DD\uC744 \uC8FC\uC18C\uC11C.
\uC601\uC6D0\uD55C \uBE5B\uC744 \uADF8\uC5D0\uAC8C \uBE44\uCD94\uC18C\uC11C.`,candle:`\uC791\uC740 \uCD1B\uBD88 \uD558\uB098\uB97C \uBD09\uD5CC\uD588\uC2B5\uB2C8\uB2E4.
\uC774 \uBD88\uBE5B\uCC98\uB7FC \uB530\uB73B\uD55C \uACF3\uC5D0 \uBA38\uBB34\uC2DC\uAE38.`},none:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",silence:"\uACE0\uC778\uC744 \uAE30\uC5B5\uD558\uBA70 \uBB35\uB150\uD588\uC2B5\uB2C8\uB2E4.",nod:"\uC815\uC911\uD788 \uBAA9\uB840\uD588\uC2B5\uB2C8\uB2E4."}},Ai=i=>(Hm[E.role==="host"?E.memorial.religion||"traditional":E.me.religion]?.[i]||Hm.traditional[i]||"").replace("{name}",E.memorial.deceased.name);function eh(){return E.incenseAt?1-(Date.now()-E.incenseAt)/(Gc*6e4):0}async function _a(i){if(E.busy||Y.avatar.busy){Tt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}let e=id[i];await un(async()=>{let t=Y.avatar;if(t.cancelSoft(),i==="flower"&&t.hold!=="flower"){if(!await Qt(me.interactables.get("basket").spot))return;i0(),await Pi(500)}if(i==="candle"){if(!await Qt(me.interactables.get("candles").spot))return}else if(e.altar&&!await Qt(Cv()))return;switch(await Pi(250),Vn(i),i){case"incense":{let n=eh()<=0;await t.play("incense",r=>{r==="light"&&(E.counters.incense=(E.counters.incense||0)+1,E.incenseAt=Date.now(),qe.stampState("incenseAt").then(s=>{typeof s=="number"&&(E.incenseAt=s)}),ah(),me.setCounts(E.counters),me.burstSmoke(),it.soft())}),St(n?`\uAEBC\uC838 \uC788\uB358 \uD5A5\uC744 \uB2E4\uC2DC \uC62C\uB838\uC2B5\uB2C8\uB2E4.
\uC55E\uC73C\uB85C ${Gc}\uBD84 \uB3D9\uC548 \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC904 \uAC70\uC608\uC694.`:Ai("incense"));break}case"flower":{await t.play("offer",async n=>{if(n!=="release")return;let r=t.props.flower;delete t.props.flower,t.hold=null,r&&(await me.flyTo(r,new S((Math.random()-.5)*2.6,Oe+.16,-7.3),.7),nr.remove(r)),E.counters.flowers=(E.counters.flowers||0)+1,me.setCounts(E.counters),it.drop()}),St(Ai("flower")||"\uD558\uC580 \uAD6D\uD654\uB97C \uC601\uC815 \uC55E\uC5D0 \uB193\uC558\uC2B5\uB2C8\uB2E4.");break}case"bow2":case"bow3":St(`\uB450 \uC190\uC744 \uBAA8\uC544 \uC774\uB9C8\uC5D0 \uB300\uACE0, \uBB34\uB98E\uC744 \uAFC7\uC5B4 \uC808\uD569\uB2C8\uB2E4.
\uB450 \uBC88 \uC808\uD55C \uB4A4 \uAC00\uBCCD\uAC8C \uBAA9\uB840\uD574\uC694.`,3400),await t.play(i),St(Ai("bow"));break;case"hapjang":await t.play("hapjang"),it.moktak(),St(Ai("hapjang"));break;case"beads":t.setProp("beads",!0),St("\uC5FC\uC8FC\uB97C \uAD74\uB9BD\uB2C8\uB2E4\u2026",2500),await t.play("beads",n=>{n==="bead"&&it.moktak()}),t.setProp("beads",!1),St(Ai("beads"));break;case"prayer":{let n=Pv();St(Ai("prayer"),6e3),await t.play("prayer"),n.fade();break}case"silentPrayer":case"silence":await Iv(i==="silentPrayer"?"\uBB35\uB3C4":"\uBB35\uB150"),St(Ai(i));break;case"sign":await t.play("sign"),St(Ai("sign"));break;case"candle":await t.play("candle",n=>{n==="release"&&(E.counters.candles=(E.counters.candles||0)+1,me.setCounts(E.counters),it.soft())}),St(Ai("candle"));break;case"nod":await t.play("nod"),St(Ai("nod"));break;case"cup":St("\uC220\uC794\uC5D0 \uC220\uC744 \uB530\uB77C \uC81C\uB2E8\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4.",2600),await t.play("pour",n=>{n==="pour"&&(me.fillCup(),it.tone(700,.3,{gain:.04}))}),St("\uC220\uC794\uC744 \uC62C\uB838\uC2B5\uB2C8\uB2E4.");break;default:}qe.bump(e.key,i==="beads"?7:1),["incense","flowers","candles"].includes(e.key)||(E.counters[e.key]=(E.counters[e.key]||0)+(i==="beads"?7:1)),Wo(i),rr()})}function Pv(){let i=new Me(.5,1.1,6,24,1,!0),e=new ln({color:"#fff3d6",transparent:!0,opacity:0,side:Et,depthWrite:!1,blending:xo}),t=new H(i,e);t.raycast=()=>{},t.position.copy(Y.pos).add(new S(0,3,0)),nr.add(t);let n=.16,r=()=>{if(e.opacity+=(n-e.opacity)*.05,n===0&&e.opacity<.005){nr.remove(t),i.dispose();return}requestAnimationFrame(r)};return r(),{fade(){n=0}}}function Iv(i){return new Promise(e=>{let t=D("#silence"),n=D("#silence-arc");D("#silence-text").textContent=i,t.hidden=!1,n.style.transition="none",n.style.strokeDashoffset="289",it.bell(),it.duck(!0);let r=E.auto?5e3:9e3;requestAnimationFrame(()=>requestAnimationFrame(()=>{n.style.transition=`stroke-dashoffset ${r}ms linear`,n.style.strokeDashoffset="0"})),Y.avatar.play("silence");let s=!1,a=()=>{s||(s=!0,t.hidden=!0,t.onclick=null,it.chime(.1),it.duck(!1),Y.avatar.finish(),e())};t.onclick=a,setTimeout(a,r)})}var Lv=[{id:"guestbook",icon:"\u270D\uFE0F",label:"\uBC29\uBA85\uB85D",run:()=>dn("guestbook")},{id:"greet",icon:"\u{1F91D}",label:"\uC0C1\uC8FC \uC778\uC0AC",run:()=>dn("host")},{id:"condolence",icon:"\u2709\uFE0F",label:"\uC870\uC758\uAE08",run:()=>dn("donation")},{id:"meal",icon:"\u{1F372}",label:"\uC2DD\uB2F9",run:()=>sh()},{id:"lantern",icon:"\u{1F3EE}",label:"\uB4F1\uBD88",run:()=>dn("lantern")},{id:"wreath",icon:"\u{1F490}",label:"\uD654\uD658",run:()=>dn("florist")},{id:"talk",icon:"\u{1F4AC}",label:"\uB9D0\uD558\uAE30",run:()=>Id()},{id:"emote",icon:"\u{1F622}",label:"\uD45C\uC815",run:()=>s0()}],Dv=[{id:"thank",icon:"\u{1F647}",label:"\uB2F5\uB840 \uC778\uC0AC",run:()=>m0()},{id:"spot",icon:"\u{1F4CD}",label:"\uC0C1\uC8FC \uC790\uB9AC",run:()=>un(async()=>{await Qt(me.HOST_SPOT)})},{id:"panel",icon:"\u{1F5C2}\uFE0F",label:"\uC0C1\uC8FC \uD328\uB110",run:()=>Fd()},{id:"book",icon:"\u{1F4D6}",label:"\uBC29\uBA85\uB85D",run:()=>c0()},{id:"theater",icon:"\u{1F39E}\uFE0F",label:"\uCD94\uC5B5 \uC0C1\uC601",run:()=>ds()},{id:"talk",icon:"\u{1F4AC}",label:"\uB9D0\uD558\uAE30",run:()=>Id()},{id:"emote",icon:"\u{1F622}",label:"\uD45C\uC815",run:()=>s0()}];function Gm(i){if(E.role!=="guest")return"";let e=tr().findIndex(t=>t.any.includes(i));return e<0?"":`<i class="num">${e+1}</i>`}function r0(){let i=E.role==="host"?Ei[E.memorial.religion]||Ei.traditional:Ei[E.me.religion],e=E.role==="host"?i.actions.filter(n=>n!=="flower"):i.actions;D("#rite-actions").innerHTML=e.map((n,r)=>{let s=id[n];return`<button type="button" class="act" data-act="${n}" title="${s.label}${s.sub?` (${s.sub})`:""} \xB7 ${r+1}">${Gm(n)}<span class="ic">${s.icon}</span><span>${s.label}</span></button>`}).join(""),D("#rite-actions").onclick=n=>{let r=n.target.closest("[data-act]");r&&_a(r.dataset.act)};let t=E.role==="host"?Dv:Lv;D("#common-actions").innerHTML=t.map(n=>`<button type="button" class="act" data-common="${n.id}">${Gm(n.id)}<span class="ic">${n.icon}</span><span>${n.label}</span></button>`).join(""),D("#common-actions").onclick=n=>{let r=n.target.closest("[data-common]");r&&t.find(s=>s.id===r.dataset.common).run()},D("#emotes").innerHTML=Nc.map(n=>`<button type="button" data-expr="${n.id}" title="${n.label}"><span>${n.icon}</span><small>${n.label}</small></button>`).join(""),zo()}function zo(){let i=nh(),e=new Set(i?i.any:[]);mt("#rite-actions .act, #common-actions .act").forEach(t=>{let n=t.dataset.act||t.dataset.common;t.classList.toggle("suggest",E.role==="guest"&&e.has(n)),t.disabled=E.busy})}function s0(){D("#emotes").hidden=!D("#emotes").hidden}D("#emotes").onclick=i=>{let e=i.target.closest("[data-expr]");e&&(D("#emotes").hidden=!0,Uv(e.dataset.expr))};function Uv(i){let e=Nc.find(t=>t.id===i);i==="cry"||i==="smile"?Y.avatar.setExpression(i,5):hs(Y.avatar.root,e.icon,2400,!0,Y.avatar.height),i==="pray"&&Y.avatar.play("hapjang",null,{soft:!0}),Vn(`expr:${i}`)}function Id(){let i=D("#talkbar");i.hidden=!1,D("#talk-quick").innerHTML=nm.map(e=>`<button type="button">${He(e)}</button>`).join(""),D("#talk-input").focus()}function th(i){i=i.trim().slice(0,60),i&&(hs(Y.avatar.root,i,5e3,!1,Y.avatar.height),E.say=i,E.sayS++,it.pop())}D("#talkbar").onsubmit=i=>{i.preventDefault(),th(D("#talk-input").value),D("#talk-input").value="",D("#talkbar").hidden=!0};D("#talk-quick").onclick=i=>{let e=i.target.closest("button");e&&(th(e.textContent),D("#talkbar").hidden=!0)};D("#talk-close").onclick=()=>{D("#talkbar").hidden=!0};function tr(){return E.role==="guest"?Ei[E.me.religion].steps:[]}function Vo(i){return i.any.some(e=>E.done.has(e))}function nh(){return tr().find(i=>!Vo(i))}function Wo(i){if(E.role!=="guest")return;let e=tr().filter(n=>!n.optional).every(Vo);E.done.add(i),qe.setLocal(`done:${E.me.religion}`,[...E.done]),a0(),zo();let t=tr().filter(n=>!n.optional).every(Vo);!e&&t&&setTimeout(Kv,2600)}function a0(){if(E.role!=="guest"){D("#guide").hidden=!0;return}let i=Ei[E.me.religion];D("#guide-title").textContent=`${i.icon} ${i.label} \uC870\uBB38 \uC21C\uC11C`;let e=nh();D("#guide-steps").innerHTML=tr().map(t=>`
    <li class="${Vo(t)?"done":t===e?"next":""}">${He(t.label)}${t.optional?'<span class="opt">\uC120\uD0DD</span>':""}
      ${t===e?`<button type="button" data-step="${t.id}">\uD558\uAE30</button>`:""}</li>`).join(""),Ld(),D("#guide-tip").textContent=e?"\u2018\uD558\uAE30\u2019\uB97C \uB204\uB974\uBA74 \uC54C\uC544\uC11C \uAC78\uC5B4\uAC00\uC11C \uC9C4\uD589\uD574\uC694. \uC21C\uC11C\uB294 \uC790\uC720\uB86D\uAC8C \uBC14\uAFD4\uB3C4 \uAD1C\uCC2E\uC544\uC694.":"\uBAA8\uB4E0 \uC21C\uC11C\uB97C \uB9C8\uCCE4\uC5B4\uC694. \uD3B8\uD788 \uBA38\uBB3C\uB2E4 \uAC00\uC138\uC694."}function o0(i){let e=i.any[0];e==="guestbook"?dn("guestbook"):e==="greet"?dn("host"):e==="condolence"?dn("donation"):e==="meal"?sh():i.id==="offer"&&Ei[E.me.religion].auto.length?p0():_a(e)}D("#guide-steps").onclick=i=>{let e=i.target.closest("[data-step]");e&&o0(tr().find(t=>t.id===e.dataset.step))};var Nv={reception:"guestbook",guestbook:"guestbook",greet:"host",condolence:"donation",meal:"meal"},zm=i=>i?Nv[i.id]||"altar":null;function Ld(){let i=D("#next-cta");if(E.role!=="guest"||!E.entered){i.hidden=!0;return}let e=nh(),t=tr().some(n=>!Vo(n)&&zm(n)==="altar");i.hidden=E.auto,D("#cta-next").innerHTML=e?`<small>\uB2E4\uC74C \uD560 \uC77C ${tr().indexOf(e)+1}/${tr().length}</small>${He(e.label)} \u25B6`:"<small>\uC870\uBB38\uC744 \uBAA8\uB450 \uB9C8\uCCE4\uC5B4\uC694</small>\uB4F1\uBD88 \uB744\uC6B0\uAE30 \u25B6",D("#cta-auto").hidden=!t,mt(".marker").forEach(n=>n.classList.toggle("next",n.dataset.id===zm(e)))}D("#cta-next").onclick=()=>{let i=nh();i?o0(i):dn("lantern")};D("#cta-auto").onclick=()=>p0();var kv=[{id:"guestbook",icon:"\u270D\uFE0F",text:"\uC811\uC218\uB300 \xB7 \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08"},{id:"altar",icon:"\u{1F56F}\uFE0F",text:"\uC81C\uB2E8 \xB7 \uC870\uBB38"},{id:"host",icon:"\u{1F647}",text:"\uC0C1\uC8FC"},{id:"basket",icon:"\u{1F33C}",text:"\uD5CC\uD654 \uAD6D\uD654"},{id:"florist",icon:"\u{1F490}",text:"\uADFC\uC870\uD654\uD658"},{id:"lantern",icon:"\u{1F3EE}",text:"\uB9C8\uC74C \uB4F1\uBD88"},{id:"meal",icon:"\u{1F372}",text:"\uC2DD\uB2F9",pos:new S(17,3.2,-4.5)}];function Bv(){for(let i of kv){if(i.id==="host"&&E.role==="host")continue;let e=i.pos||me.interactables.get(i.id)?.anchor;if(!e)continue;let t=document.createElement("button");t.type="button",t.className="marker",t.dataset.id=i.id,t.innerHTML=`<span>${i.icon}</span>${i.text}`,t.onclick=()=>i.id==="meal"?sh():dn(i.id);let n=e.clone().add(new S(0,.45,0));ya(t,()=>yn.position.distanceTo(n)<24?n:null)}Ld()}function ih(){let i=!it.running&&it.trackId!=="none";D("#sound-chip").hidden=!i}D("#sound-chip").onclick=()=>{it.ensure(),it.ctx?.resume(),kd(),setTimeout(ih,600)};for(let i of["pointerdown","touchend","keydown"])addEventListener(i,()=>{E.entered&&it.ctx&&!it.running&&it.ctx.resume().then(ih)},{passive:!0});document.addEventListener("visibilitychange",()=>{!document.hidden&&it.ctx&&it.ctx.resume().then(ih)});D("#btn-view").onclick=()=>Go(E.view==="first"?"third":"first");D("#dlg-onboard").addEventListener("close",()=>localStorage.setItem("samga:onboarded","1"));function l0(){E.role==="guest"&&(D("#guide").hidden=!D("#guide").hidden)}D("#guide-close").onclick=()=>{D("#guide").hidden=!0};D("#btn-guide").onclick=l0;function hn(i){return i.returnValue="",i.showModal(),i}mt("dialog [data-close]").forEach(i=>i.addEventListener("click",()=>i.closest("dialog").close()));mt("dialog").forEach(i=>i.addEventListener("click",e=>{e.target===i&&i.close()}));function Dd(i,e,t){i.innerHTML=e.map(n=>`<button type="button" aria-pressed="false">${He(n)}</button>`).join(""),i.onclick=n=>{let r=n.target.closest("button");r&&(t.tagName==="TEXTAREA"?t.value=(t.value?`${t.value.trim()} `:"")+r.textContent:t.value=r.textContent,mt("button",i).forEach(s=>s.setAttribute("aria-pressed",s===r)))}}function rh(i){D("#view-body").innerHTML=i,hn(D("#dlg-view"))}function Fv(){let i=D("#form-guestbook");i.name.value=i.name.value||(E.role==="host"?E.memorial.hostName:E.me.name)||"";let e=E.role==="host"?"\uAC00\uC871":E.me.relation||"";i.relation.value=rd.includes(e)?"":e,Qm(D("#gb-relations"),e,n=>{e=n,i.relation.value=""}),i.relation.oninput=()=>{e=i.relation.value.trim(),mt("#gb-relations [data-rel]").forEach(n=>n.setAttribute("aria-pressed","false"))},Dd(D("#gb-quick"),["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC138\uC694.","\uB298 \uAE30\uC5B5\uD558\uACA0\uC2B5\uB2C8\uB2E4.","\uD568\uAED8\uD55C \uC2DC\uAC04 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4."],i.message);let t=D("#dlg-guestbook");hn(t),t.onclose=async()=>{if(t.returnValue!=="ok")return;let n={name:i.name.value.trim().slice(0,16),relation:(e||"").slice(0,16),message:i.message.value.trim().slice(0,300)};if(!n.name)return;i.message.value="",E.role==="guest"&&n.relation&&!E.me.relation&&(E.me.relation=n.relation,Rd());let r=await qe.add("guestbook",n);E.guestbook.push(r),me.setMemories(xa()),Y.avatar.play("nod",null,{soft:!0}),Vn("nod"),it.chime(.12),St(`\uBC29\uBA85\uB85D\uC5D0 \uC774\uB984\uC744 \uB0A8\uACBC\uC2B5\uB2C8\uB2E4.
\uB9C8\uB2F9 \uD654\uB2E8\uC5D0 \uD558\uC580 \uAD6D\uD654 \uD55C \uC1A1\uC774\uAC00 \uD53C\uC5C8\uC5B4\uC694.`),Wo("guestbook"),rr(),E.role==="guest"&&!E.done.has("condolence")&&(await Pi(900),un(async()=>{await Qt(me.interactables.get("donation").spot),h0()}))}}function Ud(){return E.memorial.demo&&!qe.remote}function xa(){return[...Ud()&&E.guestbook.length<3?(E.memorial.demoSeeds?.guestbook||[]).map(e=>({...e,demo:!0})):[],...E.guestbook]}var No="";function c0(){let i=xa().slice().reverse(),e={};i.forEach(n=>{let r=n.relation||"\uAE30\uD0C0";e[r]=(e[r]||0)+1});let t=()=>{let n=No?i.filter(r=>(r.relation||"\uAE30\uD0C0")===No):i;D("#book-filter").innerHTML=`<button type="button" class="chip" data-f="" aria-pressed="${!No}">\uC804\uCCB4 ${i.length}</button>`+Object.entries(e).sort((r,s)=>s[1]-r[1]).map(([r,s])=>`<button type="button" class="chip" data-f="${He(r)}" aria-pressed="${No===r}">${He(r)} ${s}</button>`).join(""),D("#book-list").innerHTML=n.length?n.map(r=>`
      <article class="book-item">
        ${r.relation?`<span class="rel">${He(r.relation)}</span>`:""}
        ${r.message?`<p>${He(r.message)}</p>`:""}
        <footer><span><b>${He(r.name)}</b>${r.demo?" \xB7 \uC608\uC2DC":""}</span><span>${r.time?Fo(r.time):""}</span></footer>
      </article>`).join(""):'<p class="empty">\uC544\uC9C1 \uB0A8\uACA8\uC9C4 \uAE00\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uB9C8\uC74C\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694.</p>'};D("#book-filter").onclick=n=>{let r=n.target.closest("[data-f]");r&&(No=r.dataset.f,t())},t(),hn(D("#dlg-book"))}D("#btn-book").onclick=c0;D("#book-write").onclick=()=>{D("#dlg-book").close(),dn("guestbook")};var ko="\uACC4\uC88C \uC774\uCCB4",Yt={phrase:"\u8CFB\u5100",paper:"white",seal:"mum",font:"serif"};function Ov(i,e){let t=Ki.papers.find(o=>o.id===Yt.paper),n=Ki.fonts.find(o=>o.id===Yt.font),r=Ki.seals.find(o=>o.id===Yt.seal),s=D("#envelope");s.style.setProperty("--paper",t.bg),s.style.setProperty("--efont",n.css),s.classList.toggle("band",!!t.band);let a=r.id==="mum"?'<img class="seal seal-img" src="./flowers/mum.png" alt="">':r.icon?`<em class="seal">${r.icon}</em>`:"";D("#env-front").innerHTML=`${[...Yt.phrase].map(o=>`<span>${He(o)}</span>`).join("")}${a}`,D("#env-front").classList.toggle("hangul",/[가-힣]/.test(Yt.phrase)),D("#env-back").innerHTML=`<small>${He(i.affil.value.trim())}</small><strong>${He(i.name.value.trim()||"\uC774\uB984")}</strong><em>${e?Bo(e):""}</em>${i.note.value.trim()?"<i>\u2709 \uCABD\uC9C0 \uB3D9\uBD09</i>":""}`}function h0(){let i=E.memorial,e=D("#form-condolence"),t=D("#envelope");t.className="envelope",e.name.value=e.name.value||E.me.name||"";let n=[3e4,5e4,7e4,1e5],r=Number(e.amount.value.replace(/\D/g,""))||5e4;D("#amounts").innerHTML=n.map(p=>`<button type="button" class="chip" data-amount="${p}" aria-pressed="${p===r}">${p/1e4}\uB9CC \uC6D0</button>`).join(""),D("#env-phrases").innerHTML=Ki.phrases.map(p=>`<button type="button" class="chip env-ph" data-ph="${p.id}" aria-pressed="${Yt.phrase===p.id}"><b>${p.id}</b><small>${p.sub}</small></button>`).join(""),D("#env-papers").innerHTML=Ki.papers.map(p=>`<button type="button" class="swatch" data-paper="${p.id}" style="--c:${p.bg}" aria-pressed="${Yt.paper===p.id}">${p.label}</button>`).join(""),D("#env-seals").innerHTML=Ki.seals.map(p=>`<button type="button" class="chip" data-seal="${p.id}" aria-pressed="${Yt.seal===p.id}">${p.id==="mum"?'<img class="chip-img" src="./flowers/mum.png" alt="">':p.icon} ${p.label}</button>`).join(""),D("#env-fonts").innerHTML=Ki.fonts.map(p=>`<button type="button" class="chip" data-font="${p.id}" style="font-family:${p.css}" aria-pressed="${Yt.font===p.id}">${p.label}</button>`).join(""),E.memorial.religion==="christian"&&Yt.phrase==="\u8CFB\u5100"&&!E.envTouched&&(Yt.phrase="\u53EC\u5929");let s=()=>{Ov(e,r),u(),mt("[data-ph]").forEach(p=>p.setAttribute("aria-pressed",p.dataset.ph===Yt.phrase)),mt("[data-paper]").forEach(p=>p.setAttribute("aria-pressed",p.dataset.paper===Yt.paper)),mt("[data-seal]").forEach(p=>p.setAttribute("aria-pressed",p.dataset.seal===Yt.seal)),mt("[data-font]").forEach(p=>p.setAttribute("aria-pressed",p.dataset.font===Yt.font))};D("#env-options").onclick=p=>{let f=p.target.closest("[data-ph],[data-paper],[data-seal],[data-font]");f&&(E.envTouched=!0,f.dataset.ph&&(Yt.phrase=f.dataset.ph,t.classList.remove("flip")),f.dataset.paper&&(Yt.paper=f.dataset.paper),f.dataset.seal&&(Yt.seal=f.dataset.seal,t.classList.remove("flip")),f.dataset.font&&(Yt.font=f.dataset.font),it.pop(),s())},D("#amounts").onclick=p=>{let f=p.target.closest("[data-amount]");f&&(r=Number(f.dataset.amount),e.amount.value="",mt("#amounts .chip").forEach(v=>v.setAttribute("aria-pressed",v===f)),t.classList.add("flip"),s())},e.amount.oninput=()=>{let p=Number(e.amount.value.replace(/\D/g,""));p&&(r=p,mt("#amounts .chip").forEach(f=>f.setAttribute("aria-pressed","false"))),t.classList.add("flip"),s()},e.name.oninput=e.affil.oninput=e.note.oninput=()=>{t.classList.add("flip"),s()},D("#env-flip").onclick=()=>t.classList.toggle("flip");let a=Td(i),o=Math.min(E.accIdx||0,Math.max(0,a.length-1)),c=a[o]||{},l=!!(c.number&&/\d/.test(c.number)),h=()=>{D("#account-box").innerHTML=a.length?`<p class="acc-title">\uB204\uAD6C\uC5D0\uAC8C \uBCF4\uB0B4\uC2E4\uAE4C\uC694? <small>\uC544\uB294 \uC0C1\uC8FC\uB97C \uACE8\uB77C \uADF8\uBD84 \uACC4\uC88C\uB85C \uBCF4\uB0B4\uC138\uC694</small></p>${a.map((p,f)=>`
        <label class="acc${f===o?" on":""}"><input type="radio" name="acc" value="${f}" ${f===o?"checked":""}>
          <span><b>${He(p.name||"\uC0C1\uC8FC")}</b><small>${He(p.bank||"")} ${He(p.number||"")} \xB7 \uC608\uAE08\uC8FC ${He(p.holder||"")}</small></span>
          <button type="button" class="btn-ghost" data-acc-copy="${f}">\uBCF5\uC0AC</button></label>`).join("")}`:"<div><small>\uC870\uC758\uAE08 \uACC4\uC88C</small><b>\uC0C1\uC8FC\uAC00 \uC544\uC9C1 \uACC4\uC88C\uB97C \uB4F1\uB85D\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694</b></div>"};h(),D("#account-box").onchange=p=>{p.target.name==="acc"&&(o=E.accIdx=+p.target.value,c=a[o],l=!!(c.number&&/\d/.test(c.number)),h(),u())},D("#account-box").onclick=async p=>{let f=p.target.closest("[data-acc-copy]");if(!f)return;p.preventDefault();let v=a[+f.dataset.accCopy];await Oo(`${v.bank} ${v.number} ${v.holder}`),ko="\uACC4\uC88C \uC774\uCCB4",Tt(`${v.name||"\uC0C1\uC8FC"} \uACC4\uC88C\uBC88\uD638\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.`)};function u(){let p=[],f=i.demo||/^[0\s-]+$/.test(String(c.number||""));if(l&&i.toss){let v=`supertoss://send?amount=${r||""}&bank=${encodeURIComponent(c.bank||"")}&accountNo=${encodeURIComponent(String(c.number).replace(/\D/g,""))}&origin=qr`;p.push(`<a class="pay toss" data-method="\uD1A0\uC2A4" href="${f?"#":v}">\uD1A0\uC2A4\uB85C \uBCF4\uB0B4\uAE30</a>`)}l&&p.push('<a class="pay bank" data-method="\uC740\uD589 \uC785\uAE08" href="#bank">\uC740\uD589 \uC785\uAE08\uD558\uAE30</a>'),i.kakaopayLink&&p.push(`<a class="pay kakao" data-method="\uCE74\uCE74\uC624\uD398\uC774" href="${He(i.kakaopayLink)}" target="_blank" rel="noopener">\uCE74\uCE74\uC624\uD398\uC774 \uC1A1\uAE08</a>`),D("#pay-row").innerHTML=p.join(""),D("#pay-row").onclick=async v=>{let m=v.target.closest("[data-method]");if(m){if(ko=m.dataset.method,ko==="\uC740\uD589 \uC785\uAE08"){v.preventDefault(),await Oo(`${c.bank} ${String(c.number).replace(/[^0-9-]/g,"")} ${c.holder}`),Tt(`\uACC4\uC88C\uBC88\uD638\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694 (${c.bank} ${c.number}).
\uC740\uD589 \uC571\uC5D0\uC11C \uBD99\uC5EC \uB123\uC5B4 \uBCF4\uB0B4 \uC8FC\uC138\uC694.`,4200);return}m.getAttribute("href")==="#"?(v.preventDefault(),Tt("\uC608\uC2DC \uACC4\uC88C\uB77C \uC2E4\uC81C\uB85C \uC1A1\uAE08\uB418\uC9C0\uB294 \uC54A\uC544\uC694.")):ko==="\uD1A0\uC2A4"&&!/Android|iPhone|iPad/i.test(navigator.userAgent)&&Tt("\uD1A0\uC2A4 \uBC84\uD2BC\uC740 \uD734\uB300\uD3F0\uC5D0\uC11C \uD1A0\uC2A4 \uC571\uC73C\uB85C \uC5F4\uB824\uC694. PC\uC5D0\uC11C\uB294 \uACC4\uC88C\uB97C \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694.",3600)}}}s();let d=D("#dlg-condolence");e.onsubmit=p=>{p.submitter?.value==="ok"&&(p.preventDefault(),e.reportValidity()&&(t.classList.add("flip"),requestAnimationFrame(()=>t.classList.add("send")),it.soft(),setTimeout(()=>d.close("ok"),uv?50:1050)))},hn(d),d.onclose=async()=>{if(d.returnValue!=="ok")return;let p=e.name.value.trim();if(!p)return;let f=Ki.papers.find(_=>_.id===Yt.paper),v=Td(i)[E.accIdx||0],m={name:p.slice(0,20),affil:e.affil.value.trim().slice(0,30),amount:r,method:ko,phrase:Yt.phrase,note:e.note.value.trim().slice(0,120),to:v?.name||""};e.note.value="",await un(async()=>{await Qt(me.interactables.get("donation").spot);let _=Y.avatar;_.hold="envelope",_.setProp("envelope",!0,{color:f.bg}),Vn("give"),await _.play("give",async g=>{if(g!=="release")return;let y=_.props.envelope;delete _.props.envelope,_.hold=null,y&&(await me.flyTo(y,new S(4.7,Oe+1.02,-1.7),.6),nr.remove(y)),it.drop()})}),await qe.add("condolences",m),qe.bump("condolences"),E.counters.condolences=(E.counters.condolences||0)+1,St(`${p} \uB2D8\uC758 ${Yt.phrase} \uBD09\uD22C\uB97C \uBD80\uC758\uD568\uC5D0 \uB123\uC5C8\uC2B5\uB2C8\uB2E4.
\uAE4A\uC740 \uC704\uB85C\uAC00 \uC720\uAC00\uC871\uAED8 \uC804\uD574\uC9C8 \uAC70\uC608\uC694.`),Wo("condolence"),rr(),E.role==="guest"&&!E.done.has("guestbook")&&setTimeout(()=>Tt("\uBC29\uBA85\uB85D\uC5D0\uB3C4 \uC774\uB984\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694. \uC811\uC218\uB300\uC758 \u270D\uFE0F \uD45C\uC2DC\uB97C \uB204\uB974\uBA74 \uB3FC\uC694.",4e3),1200),E.ticket||(E.ticket=!0,qe.setLocal("ticket",!0),setTimeout(Hv,2200))}}function Td(i){return i.accounts?.length?i.accounts.filter(e=>e&&(e.number||e.name)):i.account?.number?[{name:i.hostName||"\uC0C1\uC8FC",...i.account}]:[]}function Hv(){D("#ticket-name").textContent=`\u6545 ${E.memorial.deceased.name} \uB2D8 \uBE48\uC18C`,D("#ticket-guest").textContent=E.me.name||"";let i=D("#dlg-ticket");hn(i),i.onclose=()=>{i.returnValue==="go"&&sh()}}function Gv(){let i=0,e=1/0;return me.tables.forEach((t,n)=>{let r=Math.hypot(Y.pos.x-t.seat.x,Y.pos.z-t.seat.z);for(let s of E.others.values())Math.hypot(s.x-t.seat.x,s.z-t.seat.z)<.6&&(r+=50);r<e&&(e=r,i=n)}),i}function sh(){u0(Gv())}function u0(i){un(async()=>{let e=me.tables[i],t=e.seat;for(let r of E.others.values())Math.hypot(r.x-t.x,r.z-t.z)<.6&&(t=e.seat2);if(!await Qt(t))return;Y.wantFace=t.face,Y.avatar.hold="sit",Vn("sit"),await Pi(400),D("#meal-ticket").innerHTML=E.ticket?'<span class="ticket-ok">\u{1F3AB} \uC2DD\uAD8C\uC774 \uC788\uC5B4\uC694 \xB7 \uBB34\uC5C7\uC774\uB4E0 \uB4DC\uC138\uC694</span>':'<span class="ticket-no">\u{1F3AB} \uBD80\uC758\uD568\uC5D0 \uB9C8\uC74C\uC744 \uC804\uD558\uC2DC\uBA74 \uC2DD\uAD8C\uC744 \uB4DC\uB824\uC694. \uCEE4\uD53C\uBBF9\uC2A4\uC640 \uC2DD\uD61C\uB294 \uB204\uAD6C\uB098 \uB4DC\uC2E4 \uC218 \uC788\uC5B4\uC694.</span>',D("#meal-choices").innerHTML=sd.map(r=>{let s=r.ticket&&!E.ticket;return`<button type="button" class="card-choice meal${s?" locked":""}" data-meal="${r.id}"><span class="food-ic">${Um[r.id]||r.icon}</span><strong>${r.label}</strong>${s?"<small>\u{1F512} \uC2DD\uAD8C</small>":""}</button>`}).join("");let n=D("#dlg-meal");D("#meal-choices").onclick=async r=>{let s=r.target.closest("[data-meal]");if(!s)return;let a=sd.find(c=>c.id===s.dataset.meal);if(a.ticket&&!E.ticket){Tt("\uC2DD\uAD8C\uC740 \uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08\uC744 \uB123\uC73C\uBA74 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694.",3200),D("#meal-go-donation").hidden=!1;return}n.close(),zv(e,a),Vn("eat"),await Y.avatar.play("eat",c=>{c==="bite"&&it.tone(520+Math.random()*120,.08,{gain:.05})}),Y.avatar.hold="sit",E.meals++;let o=a.id==="yukgaejang"&&E.servedYuk;a.id==="yukgaejang"&&(E.servedYuk=!0),St(o?"\u201C\uB354 \uB4DC\uC138\uC694~\u201D \uB3C4\uC6B0\uBBF8 \uC774\uBAA8\uB2D8\uC774 \uC721\uAC1C\uC7A5\uC744 \uD55C \uAD6D\uC790 \uB354 \uB5A0 \uC8FC\uC168\uC5B4\uC694.":a.line,4800),a.id==="soju"&&Tt("\u{1F376} \uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uC544\uC694.",3200),qe.bump("meals"),E.counters.meals=(E.counters.meals||0)+1,Wo("meal"),rr()},D("#meal-go-donation").hidden=!0,D("#meal-go-donation").onclick=()=>{n.close(),dn("donation")},hn(n)})}function zv(i,e){for(;i.dishes.children.length>3;)i.dishes.remove(i.dishes.children[0]);let t=Nm(e.id);if(t.position.set(-.55+i.dishes.children.length%4*.34,.42,.16),i.dishes.add(t),e.id==="yukgaejang"||e.id==="coffee"){let n=[];for(let a=0;a<6;a++){let o=new Xi(new yi({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));o.raycast=()=>{},o.scale.setScalar(.08),t.add(o),n.push({sp:o,o:a/6})}let r=performance.now(),s=()=>{let a=(performance.now()-r)/1e3;n.forEach(o=>{let c=(a*.5+o.o)%1;o.sp.position.set(Math.sin(c*6+o.o*9)*.04,.08+c*.4,0),o.sp.material.opacity=Math.sin(c*Math.PI)*.35,o.sp.scale.setScalar(.06+c*.12)}),a<40&&t.parent&&requestAnimationFrame(s)};s()}}function Vv(){let i=D("#form-greet"),e=E.me.religion==="traditional"||E.me.religion==="buddhist"?"bow":"nod";mt("#greet-ways [data-way]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.way===e)),D("#greet-ways").onclick=n=>{let r=n.target.closest("[data-way]");r&&(e=r.dataset.way,mt("#greet-ways [data-way]").forEach(s=>s.setAttribute("aria-pressed",s===r)))},i.words.value="",Dd(D("#greet-words"),tm,i.words);let t=D("#dlg-greet");hn(t),t.onclose=async()=>{t.returnValue==="ok"&&await un(()=>d0(e,i.words.value.trim()))}}async function d0(i,e){e=e||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.",Y.wantFace=me.GREET_SPOT.face,await Pi(300),Vn(i),St(i==="bow"?"\uC0C1\uC8FC\uC640 \uB9C8\uC8FC \uBCF4\uACE0 \uD568\uAED8 \uC808\uD569\uB2C8\uB2E4 (\uB9DE\uC808).":"\uC0C1\uC8FC\uAED8 \uC815\uC911\uD788 \uC778\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.",3e3),await Promise.all([Y.avatar.play(i),me.hostNpc.play(i==="shake"?"shake":i)]),th(e),await Pi(1900);let t=["\uC640 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.","\uBA3C \uAE38 \uC640 \uC8FC\uC154\uC11C \uACE0\uB9D9\uC2B5\uB2C8\uB2E4.","\uACE0\uC778\uAED8\uC11C\uB3C4 \uBC18\uAC00\uC6CC\uD558\uC2E4 \uAC70\uC608\uC694.","\uB9C8\uC74C \uC368 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."];hs(me.hostNpc.root,dv(t),4200,!1,me.hostNpc.height),me.hostNpc.play("nod"),qe.bump("greetings"),Wo("greet"),await Pi(1200),await Qt({x:me.GREET_SPOT.x-1.3,z:me.GREET_SPOT.z+.4,face:me.GREET_SPOT.face})}async function p0(){if(E.busy||Y.avatar.busy){Tt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}let i=Ei[E.me.religion];E.auto=!0,D("#next-cta").hidden=!0,St(`\uC870\uBB38\uC744 \uC21C\uC11C\uB300\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4.
\uCC9C\uCC9C\uD788 \uB530\uB77C\uC640 \uC8FC\uC138\uC694.`,3e3);try{for(let t of i.auto){if(!E.auto)return;await _a(t),await Pi(600)}if(!E.auto)return;let e=E.me.religion==="traditional"||E.me.religion==="buddhist"?"bow":"nod";St("\uC774\uC81C \uC0C1\uC8FC\uAED8 \uC778\uC0AC\uB4DC\uB9AC\uB7EC \uAC11\uB2C8\uB2E4.",2400),await un(async()=>{await Qt(me.GREET_SPOT)&&await d0(e)}),St("\uC870\uBB38\uC744 \uB9C8\uCCE4\uC5B4\uC694. \uBC29\uBA85\uB85D\uACFC \uC870\uC758\uAE08\uC740 \uC544\uB798 \u2018\uB2E4\uC74C \uD560 \uC77C\u2019\uB85C \uC774\uC5B4\uC11C \uD560 \uC218 \uC788\uC5B4\uC694.",5200)}finally{E.auto=!1,Ld()}}var f0="warm";D("#lantern-colors").onclick=i=>{let e=i.target.closest("[data-color]");e&&(f0=e.dataset.color,mt("#lantern-colors [data-color]").forEach(t=>t.setAttribute("aria-pressed",t===e)))};function Wv(){let i=D("#form-lantern");i.name.value=i.name.value||E.me.name||"";let e=D("#dlg-lantern");hn(e),e.onclose=async()=>{if(e.returnValue!=="ok")return;let t={text:i.text.value.trim().slice(0,120),name:i.name.value.trim().slice(0,16),color:f0};if(!t.text)return;i.text.value="";let n=await qe.add("lanterns",t);E.lanterns.push(n),me.addLantern(n,Y.pos.clone().add(new S(0,1.6,0))),Y.avatar.play("wave",null,{soft:!0}),Vn("wave"),it.chime(.16),setTimeout(()=>it.chime(.1),600),St(`\uB4F1\uBD88\uC774 \uCC9C\uCC9C\uD788 \uD558\uB298\uB85C \uC62C\uB77C\uAC11\uB2C8\uB2E4.
\uBE48\uC18C \uC704 \uD558\uB298\uC5D0\uC11C \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC904 \uAC70\uC608\uC694.`,5e3),rr()}}function Xv(i){rh(`<p class="memory">${He(i.text)}</p><p class="memory-by">${i.name?`\u2014 ${He(i.name)}`:"\u2014 \uC774\uB984 \uC5C6\uC774 \uB744\uC6B4 \uB4F1\uBD88"}</p>`)}function jv(i){i&&rh(`${i.relation?`<span class="rel">${He(i.relation)}</span>`:""}<p class="memory">${He(i.message||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.")}</p><p class="memory-by">\u2014 ${He(i.name)}${i.time?` \xB7 ${Fo(i.time)}`:""}</p>`)}var Vm=["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4","\uADF9\uB77D\uC655\uC0DD\uC744 \uAE30\uC6D0\uD569\uB2C8\uB2E4","\uC8FC\uB2D8\uC758 \uD488\uC5D0\uC11C \uC601\uC6D0\uD55C \uC548\uC2DD\uC744","\uD558\uB098\uB2D8\uC758 \uC704\uB85C\uAC00 \uD568\uAED8\uD558\uC2DC\uAE38","\uAE4A\uC740 \uC560\uB3C4\uB97C \uD45C\uD569\uB2C8\uB2E4","\uADF8\uB9AC\uC6B4 \uB9C8\uC74C\uC744 \uB2F4\uC544"],qv=[{id:"white",label:"\uD770 \uAD6D\uD654"},{id:"mixed",label:"\uD770\xB7\uB178\uB780 \uAD6D\uD654"},{id:"yellow",label:"\uB178\uB780 \uAD6D\uD654"},{id:"pink",label:"\uC5F0\uBD84\uD64D"}];function $v(){let i=D("#form-wreath"),e="white",t=Vm[E.memorial.religion==="buddhist"?1:E.memorial.religion==="christian"||E.memorial.religion==="catholic"?2:0];i.from.value=i.from.value||"",D("#wr-styles").innerHTML=qv.map(s=>`<button type="button" class="chip" data-st="${s.id}" aria-pressed="${s.id===e}">${s.label}</button>`).join(""),D("#wr-phrases").innerHTML=Vm.map(s=>`<button type="button" class="chip" data-wp="${He(s)}" aria-pressed="${s===t}">${He(s)}</button>`).join("");let n=()=>{D("#wr-disc").src=Po(e).toDataURL("image/png"),D("#wr-left").textContent=t,D("#wr-right").textContent=i.from.value.trim()||"\uBCF4\uB0B4\uB294 \uBD84",mt("[data-st]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.st===e)),mt("[data-wp]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.wp===t))};D("#wr-styles").onclick=s=>{let a=s.target.closest("[data-st]");a&&(e=a.dataset.st,n())},D("#wr-phrases").onclick=s=>{let a=s.target.closest("[data-wp]");a&&(t=a.dataset.wp,n())},i.from.oninput=n,n();let r=D("#dlg-wreath");hn(r),r.onclose=async()=>{if(r.returnValue!=="ok")return;let s=i.from.value.trim().slice(0,20);if(!s)return;let a=await qe.add("wreaths",{from:s,phrase:t,style:e});E.wreaths.push(a),me.setWreaths(Nd()),it.chime(.12),St(`\u201C${s}\u201D \uADFC\uC870\uD654\uD658\uC774 \uBE48\uC18C \uC785\uAD6C\uC5D0 \uC138\uC6CC\uC84C\uC5B4\uC694.
\uC785\uAD6C \uCABD\uC744 \uBC14\uB77C\uBD10 \uC8FC\uC138\uC694.`,4600),un(async()=>{await Qt({x:0,z:6.5,face:Math.PI})}),Vn("nod")}}function Nd(){return[...Ud()&&E.wreaths.length<2?E.memorial.demoSeeds?.wreaths||[]:[],...E.wreaths]}function Yv(i){i&&rh(`<div class="wreath-view"><img src="${Po(i.style||"white").toDataURL("image/png")}" alt=""><div class="ribbons"><span>${He(i.phrase)}</span><span>${He(i.from)}</span></div></div><p class="memory-by">${He(i.from)} \uB2D8\uC774 \uBCF4\uB0B8 \uADFC\uC870\uD654\uD658${i.time?` \xB7 ${Fo(i.time)}`:""}</p>`)}var Wm=Math.floor(Math.random()*Uc.length);function Zv(){me.helper.play("nod",null,{soft:!0});let i=()=>{D("#tip-text").textContent=Uc[Wm%Uc.length],Wm++};i(),hs(me.helper.root,"\uAD81\uAE08\uD55C \uAC70 \uC788\uC73C\uBA74 \uC5B8\uC81C\uB4E0 \uBB3C\uC5B4\uBCF4\uC138\uC694~",3200),D("#tip-next").onclick=i,D("#tip-guide").onclick=()=>{D("#dlg-tip").close(),E.role==="guest"&&(D("#guide").hidden=!1)},hn(D("#dlg-tip"))}var Jv=new Xc(D("#theater"),{onOpen:()=>{document.body.classList.add("theater-on")},onClose:()=>{document.body.classList.remove("theater-on")}});function ds(i=null){let e=Km();i!=null&&e.length&&(i=i%e.filter(t=>t.type==="image").length),it.ensure(),!E.entered&&it.trackId==="none"&&kd(),Jv.open(E.memorial.gallery||[],{title:`\u6545 ${E.memorial.deceased.name}`,sub:Ad(),greeting:E.memorial.thanks,portrait:ga(),start:i!=null&&e.length?i:null})}function Kv(){D("#done-thanks").textContent=E.memorial.thanks||"",D("#done-sign").textContent=`\u2014 ${E.memorial.mourners||E.memorial.hostName||"\uC0C1\uC8FC"} \uB4DC\uB9BC`,me.hostNpc.play("halfBow"),hn(D("#dlg-done"))}D("#done-lantern").onclick=()=>{D("#dlg-done").close(),dn("lantern")};function m0(){un(async()=>{Vn("halfBow"),St(E.memorial.thanks||"\uC640 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.",5e3),await Y.avatar.play("halfBow")})}var g0=[{id:"nod",icon:"\u{1F642}",label:"\uBAA9\uB840",line:"{me} \uB2D8\uC774 \uBAA9\uB840\uD588\uC5B4\uC694"},{id:"shake",icon:"\u{1F91D}",label:"\uC545\uC218",line:"{me} \uB2D8\uC774 \uC190\uC744 \uC7A1\uC544 \uC8FC\uC168\uC5B4\uC694"},{id:"pat",icon:"\u{1FAF6}",label:"\uD1A0\uB2E5\uD1A0\uB2E5",line:"{me} \uB2D8\uC774 \uD1A0\uB2E5\uD1A0\uB2E5 \uC704\uB85C\uD574 \uC8FC\uC168\uC5B4\uC694"},{id:"hug",icon:"\u{1FAC2}",label:"\uC548\uC544 \uC8FC\uAE30",line:"{me} \uB2D8\uC774 \uAF2D \uC548\uC544 \uC8FC\uC168\uC5B4\uC694"},{id:"bow",icon:"\u{1F647}",label:"\uB9DE\uC808",line:"{me} \uB2D8\uC774 \uB9DE\uC808\uC744 \uCCAD\uD588\uC5B4\uC694"}];function Qv(i){let e=E.others.get(i);if(!e)return;D("#other-name").textContent=`${e.name} \uB2D8${e.relation?` \xB7 ${e.relation}`:""}`,D("#other-acts").innerHTML=g0.map(n=>`<button type="button" class="card-choice" data-oa="${n.id}"><span class="ic">${n.icon}</span><strong>${n.label}</strong></button>`).join(""),Dd(D("#other-words"),["\uC624\uB79C\uB9CC\uC774\uC5D0\uC694","\uB9C8\uC74C\uC774 \uB9CE\uC774 \uC544\uD504\uC2DC\uC8E0","\uD798\uB0B4\uC138\uC694","\uC5F0\uB77D \uC790\uC8FC \uD574\uC694"],D("#other-say")),D("#other-say").value="";let t=D("#dlg-other");D("#other-acts").onclick=n=>{let r=n.target.closest("[data-oa]");r&&(t.close(),Xm(i,r.dataset.oa,D("#other-say").value))},D("#other-send").onclick=()=>{t.close(),Xm(i,null,D("#other-say").value)},hn(t)}function Xm(i,e,t){let n=E.others.get(i);n&&un(async()=>{let r=n.av.root.position,s=Y.pos.x-r.x,a=Y.pos.z-r.z,o=Math.hypot(s,a)||1,c={x:r.x+s/o*.95,z:r.z+a/o*.95,face:Math.atan2(-s,-a)};o>1.2&&!await Qt(c)||(Y.wantFace=Math.atan2(r.x-Y.pos.x,r.z-Y.pos.z),await Pi(300),e&&(E.ix={to:i,type:e,s:(E.ix?.s||0)+1},Vn(e),await Y.avatar.play(e)),t?.trim()&&th(t))})}function v0(i,e){let t=g0.find(n=>n.id===e.type);if(t&&(Tt(`${t.icon} ${t.line.replace("{me}",i.name)}`,3600),it.soft(),!E.busy&&!Y.avatar.busy)){Y.wantFace=Math.atan2(i.av.root.position.x-Y.pos.x,i.av.root.position.z-Y.pos.z);let n={pat:"nod",nod:"nod",shake:"shake",hug:"hug",bow:"bow"}[e.type];setTimeout(()=>{Y.avatar.play(n,null,{soft:!0}),Vn(n)},500)}}function ey(){let i=E.memorial.funeral?.departureAt;if(!i)return"";let e=new Date(i).getTime();if(Number.isNaN(e))return"";let t=e-Date.now();if(t<=0)return"\uBC1C\uC778\uC744 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4";let n=Math.floor(t/36e5);return n>=24?`\uBC1C\uC778\uAE4C\uC9C0 ${Math.floor(n/24)}\uC77C ${n%24}\uC2DC\uAC04`:n>=1?`\uBC1C\uC778\uAE4C\uC9C0 ${n}\uC2DC\uAC04`:`\uBC1C\uC778\uAE4C\uC9C0 ${Math.ceil(t/6e4)}\uBD84`}function rr(){if(!E.memorial)return;let i=E.counters,e=[];qe.remote&&E.others&&e.push(`<span class="stat live">\uC9C0\uAE08 \uD568\uAED8<b>${E.others.size+1}\uBA85</b></span>`);let t=ey();t&&e.push(`<span class="stat">\u23F3 ${t}</span>`);let n=eh();e.push(n>0?`<button type="button" class="stat incense${n<.2?" low":""}" data-stat="incense">\u{1F525} \uD5A5<b>${Math.ceil(n*Gc)}\uBD84</b></button>`:'<button type="button" class="stat incense out" data-stat="incense">\u{1F525} \uD5A5\uC774 \uAEBC\uC84C\uC5B4\uC694<b>\uC0C8 \uD5A5 \uC62C\uB9AC\uAE30</b></button>'),e.push(`<span class="stat">\uC870\uBB38<b>${(i.visits||0).toLocaleString()}</b></span>`),e.push(`<span class="stat">\u{1F33C}<b>${(i.flowers||0).toLocaleString()}</b></span>`),D("#stats").innerHTML=e.join("")}D("#stats").onclick=i=>{i.target.closest('[data-stat="incense"]')&&E.entered&&_a("incense")};function ah(){me.setIncense(E.counters.incense||0,eh()),rr()}setInterval(ah,15e3);var ty={day:"\uB0AE",dusk:"\uB178\uC744",night:"\uBC24"};function y0(){D("#btn-time").textContent=ty[E.time]}D("#btn-time").onclick=()=>{E.time={day:"dusk",dusk:"night",night:"day"}[E.time],me.setTime(E.time),y0()};D("#btn-help").onclick=()=>hn(D("#dlg-help"));D("#chip-obit").onclick=()=>{rh(`<div class="obit"><figure class="obit-photo"><img src="${ga()}" alt=""></figure><div class="obit-text"><p class="obit-kicker">\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4</p><h1>\u6545 ${He(E.memorial.deceased.name)}</h1><p class="obit-dates">${He(Ad())}</p><dl class="obit-meta"><div><dt>\uC0C1\uC8FC</dt><dd>${He(E.memorial.mourners||"-")}</dd></div><div><dt>\uBC1C\uC778</dt><dd>${He(E.memorial.funeral?.departure||"-")}</dd></div><div><dt>\uC7A5\uC9C0</dt><dd>${He(E.memorial.funeral?.burial||"-")}</dd></div></dl></div></div>${E.memorial.greeting?`<p class="obit-greeting">${He(E.memorial.greeting)}</p>`:""}<p><button type="button" class="btn-primary" id="view-theater">\u{1F39E}\uFE0F \uCD94\uC5B5 \uC0C1\uC601\uAD00</button></p>`),D("#view-theater").onclick=()=>{D("#dlg-view").close(),ds()}};D("#btn-host").onclick=()=>Fd();var jc=null;D("#btn-look").onclick=()=>{let i=E.role==="host";(!jc||jc.who!==(i?"host":"guest"))&&(jc?.dispose(),jc=new ma(D("#look-body"),{look:i?E.memorial.hostLook:E.me.look,outfit:i?E.memorial.hostOutfit:E.me.outfit,who:i?"host":"guest",onChange:(e,t)=>{i?(E.memorial.hostLook=e,E.memorial.hostOutfit=t,In()):(E.me.look=e,E.me.outfit=t,Rd()),Y.avatar.setOutfit(t),Y.avatar.setLook(e)}})),hn(D("#dlg-look"))};function kd(){let i=qe.getLocal("bgm",null)??E.memorial.bgm??"wind";it.play(i,E.memorial.customBgm)}D("#btn-music").onclick=()=>{let i=it.trackId;D("#music-list").innerHTML=Object.entries(Dc).filter(([e])=>e!=="custom"||E.memorial.customBgm).map(([e,t])=>`
    <button type="button" class="card-choice" data-bgm="${e}" aria-pressed="${i===e}"><span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small></button>`).join(""),D("#vol-music").value=it.musicVol,D("#vol-sfx").value=it.sfxVol,hn(D("#dlg-music"))};D("#music-list").onclick=i=>{let e=i.target.closest("[data-bgm]");e&&(it.play(e.dataset.bgm,E.memorial.customBgm),qe.setLocal("bgm",e.dataset.bgm),mt("#music-list [data-bgm]").forEach(t=>t.setAttribute("aria-pressed",t===e)),D("#btn-music").textContent=`\u{1F3B5} ${Dc[e.dataset.bgm].label}`)};D("#vol-music").oninput=i=>it.setMusicVolume(+i.target.value);D("#vol-sfx").oninput=i=>it.setSfxVolume(+i.target.value);async function _0(i,{w:e,h:t,max:n=1200,q:r=.84}){let s=URL.createObjectURL(i);try{let a=await new Promise((f,v)=>{let m=new Image;m.onload=()=>f(m),m.onerror=v,m.src=s}),o=0,c=0,l=a.naturalWidth,h=a.naturalHeight,u,d;if(e&&t){let f=e/t;if(l/h>f){let v=h*f;o=(l-v)/2,l=v}else{let v=l/f;c=(h-v)/2,h=v}u=e,d=t}else{let f=Math.min(1,n/Math.max(l,h));u=Math.round(l*f),d=Math.round(h*f)}let p=document.createElement("canvas");return p.width=u,p.height=d,p.getContext("2d").drawImage(a,o,c,l,h,0,0,u,d),p.toDataURL("image/jpeg",r)}finally{URL.revokeObjectURL(s)}}function In(){E.memorial.demo=!1,qe.saveDraft(E.memorial)||Tt("\uC800\uC7A5 \uACF5\uAC04\uC774 \uBD80\uC871\uD574\uC694. \uC0AC\uC9C4 \uC218\uB97C \uC904\uC5EC \uC8FC\uC138\uC694.",4e3)}var jm=null;function ny(){let i=D("#host-form");for(let e of i.elements){if(!e.name)continue;let t=cv(E.memorial,e.name);e.type==="checkbox"?e.checked=!!t:e.value=t??""}D("#host-portrait").src=ga(),oh(),Bd(),D("#host-themes").innerHTML=Object.entries(is).map(([e,t])=>`<button type="button" class="card-choice" data-theme="${e}" aria-pressed="${E.memorial.theme===e}"><span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small></button>`).join(""),D("#host-bgms").innerHTML=Object.entries(Dc).map(([e,t])=>`<button type="button" class="chip" data-hbgm="${e}" aria-pressed="${E.memorial.bgm===e}">${t.icon} ${t.label}</button>`).join(""),jm||(jm=new ma(D("#host-look"),{look:E.memorial.hostLook,outfit:E.memorial.hostOutfit,who:"host",onChange:(e,t)=>{E.memorial.hostLook=e,E.memorial.hostOutfit=t,In(),ir({theme:!1})}}))}function Bd(){E.memorial.accounts?.length||(E.memorial.accounts=Td(E.memorial).map(i=>({...i}))),D("#accounts-edit").innerHTML=E.memorial.accounts.map((i,e)=>`
    <div class="acc-edit">
      <input data-ai="${e}" data-ak="name" value="${He(i.name||"")}" placeholder="\uC0C1\uC8FC (\uC608: \uC7A5\uB0A8 \uC774OO)">
      <input data-ai="${e}" data-ak="bank" value="${He(i.bank||"")}" placeholder="\uC740\uD589">
      <input data-ai="${e}" data-ak="number" value="${He(i.number||"")}" placeholder="\uACC4\uC88C\uBC88\uD638" inputmode="numeric">
      <input data-ai="${e}" data-ak="holder" value="${He(i.holder||"")}" placeholder="\uC608\uAE08\uC8FC">
      <button type="button" class="btn-ghost" data-acc-del="${e}" aria-label="\uACC4\uC88C \uC9C0\uC6B0\uAE30">\xD7</button>
    </div>`).join("")||'<p class="tip">\uC544\uC9C1 \uACC4\uC88C\uAC00 \uC5C6\uC5B4\uC694.</p>'}D("#acc-add").onclick=()=>{E.memorial.accounts=[...E.memorial.accounts||[],{name:"",bank:"",number:"",holder:""}],Bd()};D("#accounts-edit").onclick=i=>{let e=i.target.closest("[data-acc-del]");e&&(E.memorial.accounts.splice(+e.dataset.accDel,1),In(),Bd())};function oh(){let i=Rr(E.memorial.gallery||[]);E.memorial.gallery=i,D("#gallery-edit").innerHTML=i.map((e,t)=>`
    <figure>
      ${e.type==="image"?`<img src="${e.src}" alt="\uCD94\uC5B5 ${t+1}">`:`<div class="vid-thumb">\u25B6 ${e.type==="youtube"?"YouTube":"\uC601\uC0C1"}</div>`}
      <input data-gi="${t}" data-gk="year" value="${He(e.year)}" placeholder="\uC5F0\uB3C4" maxlength="10">
      <input data-gi="${t}" data-gk="caption" value="${He(e.caption)}" placeholder="\uD55C \uC904 \uC124\uBA85" maxlength="40">
      <div class="g-tools"><button type="button" data-move="${t}" aria-label="\uC55E\uC73C\uB85C">\u25C0</button><button type="button" data-del="${t}" aria-label="\uC9C0\uC6B0\uAE30">\xD7</button></div>
    </figure>`).join("")||'<p class="tip">\uC544\uC9C1 \uC0AC\uC9C4\uC774 \uC5C6\uC5B4\uC694.</p>'}async function Fd(){E.role==="host"&&(ny(),x0(),b0(),hn(D("#dlg-host")))}D("#host-tabs").onclick=i=>{let e=i.target.closest("[data-tab]");e&&(mt("#host-tabs [data-tab]").forEach(t=>t.setAttribute("aria-selected",t===e)),mt("#host-form [data-panel]").forEach(t=>{t.hidden=t.dataset.panel!==e.dataset.tab}),e.dataset.tab==="ledger"&&x0())};D("#host-form").addEventListener("input",i=>{let e=i.target;if(e.dataset.ai){E.memorial.accounts[+e.dataset.ai][e.dataset.ak]=e.value,In();return}if(e.dataset.gi){E.memorial.gallery[+e.dataset.gi][e.dataset.gk]=e.value,In();return}if(e.name){if(hv(E.memorial,e.name,e.type==="checkbox"?e.checked:e.value),In(),ir(),e.name==="religion"){r0();let t=em[e.value];t&&t!==E.memorial.theme&&(E.memorial.theme=t,In(),ir(),mt("#host-themes [data-theme]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.theme===t)),Tt(`${Ei[e.value].label}\uC5D0 \uB9DE\uCDB0 \u201C${is[t].label}\u201D \uBE48\uC18C\uB85C \uBC14\uAFE8\uC5B4\uC694. \uD14C\uB9C8\uB294 \uC544\uB798\uC5D0\uC11C \uB2E4\uC2DC \uACE0\uB97C \uC218 \uC788\uC5B4\uC694.`,4200))}e.name==="hostName"&&bd&&(bd.el.innerHTML=`<b>\uC0C1\uC8FC</b>${He(e.value||"\uC0C1\uC8FC")}`),e.name==="customBgm"&&it.trackId==="custom"&&it.play("custom",e.value)}});D("#host-themes").onclick=i=>{let e=i.target.closest("[data-theme]");e&&(E.memorial.theme=e.dataset.theme,mt("#host-themes [data-theme]").forEach(t=>t.setAttribute("aria-pressed",t===e)),In(),ir(),Tt(`${is[e.dataset.theme].label} \uBE48\uC18C\uB85C \uBC14\uAFE8\uC5B4\uC694.`))};D("#host-bgms").onclick=i=>{let e=i.target.closest("[data-hbgm]");e&&(E.memorial.bgm=e.dataset.hbgm,mt("#host-bgms [data-hbgm]").forEach(t=>t.setAttribute("aria-pressed",t===e)),In(),it.play(e.dataset.hbgm,E.memorial.customBgm))};D("#file-portrait").onchange=async i=>{let e=i.target.files[0];e&&(E.memorial.portrait=await _0(e,{w:600,h:800,q:.86}),i.target.value="",In(),ir({theme:!1}),D("#host-portrait").src=ga(),Tt("\uC601\uC815 \uC0AC\uC9C4\uC744 \uBAA8\uC168\uC5B4\uC694."))};D("#file-gallery").onchange=async i=>{let e=Rr(E.memorial.gallery||[]),t=[...i.target.files].slice(0,24-e.length);for(let n of t)e.push({type:"image",src:await _0(n,{max:1100,q:.8}),caption:"",year:""});E.memorial.gallery=e,i.target.value="",In(),ir({theme:!1}),oh(),Tt(`\uCD94\uC5B5 \uC0AC\uC9C4 ${t.length}\uC7A5\uC744 \uAC78\uC5C8\uC5B4\uC694.`)};D("#add-video").onclick=()=>{let i=D("#video-url").value.trim();if(!/^https?:\/\//.test(i)){Tt("\uC601\uC0C1 \uC8FC\uC18C(https://\u2026)\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uC720\uD29C\uBE0C \uB9C1\uD06C\uB098 mp4 \uC8FC\uC18C\uAC00 \uB3FC\uC694.");return}E.memorial.gallery=[...Rr(E.memorial.gallery||[]),{src:i,caption:"",year:""}],E.memorial.gallery=Rr(E.memorial.gallery),D("#video-url").value="",In(),oh(),Tt("\uC601\uC0C1\uC744 \uC0C1\uC601 \uBAA9\uB85D\uC5D0 \uB123\uC5C8\uC5B4\uC694.")};D("#gallery-edit").onclick=i=>{let e=i.target.closest("[data-del]"),t=i.target.closest("[data-move]"),n=E.memorial.gallery;if(e)n.splice(+e.dataset.del,1);else if(t){let r=+t.dataset.move;r>0&&([n[r-1],n[r]]=[n[r],n[r-1]])}else return;In(),ir({theme:!1}),oh()};D("#host-preview-theater").onclick=()=>{D("#dlg-host").close(),ds()};async function x0(){let i=await qe.list("condolences"),e=xa(),t=new Map;for(let s of e){let a=s.name,o=t.get(a)||{name:a,amount:0,msgs:[]};o.relation=s.relation||o.relation,s.message&&o.msgs.push(s.message),o.time=Math.max(o.time||0,s.time||0),t.set(a,o)}for(let s of i){let a=t.get(s.name)||{name:s.name,amount:0,msgs:[]};a.amount+=Number(s.amount||0),a.to=s.to||a.to,a.affil=s.affil||a.affil,s.note&&a.msgs.push(`\u2709 ${s.note}`),a.time=Math.max(a.time||0,s.time||0),t.set(s.name,a)}let n=[...t.values()].sort((s,a)=>(a.time||0)-(s.time||0));D("#ledger-people").innerHTML=n.length?`<table><thead><tr><th>\uC774\uB984</th><th>\uAD00\uACC4 \xB7 \uC18C\uC18D</th><th>\uC870\uC758\uAE08</th><th>\uBC1B\uB294 \uC0C1\uC8FC</th><th>\uB0A8\uAE34 \uB9D0</th></tr></thead><tbody>${n.map(s=>`<tr><td><b>${He(s.name)}</b></td><td>${He([s.relation,s.affil].filter(Boolean).join(" \xB7 "))}</td><td>${s.amount?Bo(s.amount):"-"}</td><td>${He(s.to||"")}</td><td>${He(s.msgs.join(" / "))}</td></tr>`).join("")}</tbody></table>`:'<p class="tip">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>',D("#ledger-money").innerHTML=i.length?i.slice().reverse().map(s=>`<div><span>${He(s.name)}${s.affil?` <small>${He(s.affil)}</small>`:""}${s.note?`<em>\u2709 ${He(s.note)}</em>`:""}</span><b>${Bo(s.amount)}</b><span>${He(s.to?`\u2192 ${s.to} \xB7 `:"")}${He(s.phrase||"")} \xB7 ${He(s.method||"")} \xB7 ${Fo(s.time)}</span></div>`).join(""):'<p class="tip">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>',D("#ledger-book").innerHTML=e.length?e.slice().reverse().map(s=>`<div><span>${He(s.name)}</span><span>${He(s.relation||"")}</span><span>${s.time?Fo(s.time):"\uC608\uC2DC"}</span></div>`).join(""):'<p class="tip">\uC544\uC9C1 \uBC29\uBA85\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>';let r=i.reduce((s,a)=>s+Number(a.amount||0),0);D("#ledger-tip").textContent=qe.remote?`\uC774 \uAE30\uAE30\uC5D0\uC11C \uAE30\uB85D\uB41C \uC870\uC758\uAE08 \uD569\uACC4 ${Bo(r)}. \uBAA8\uB4E0 \uC870\uBB38\uAC1D\uC758 \uAE30\uB85D\uC740 Firebase \uCF58\uC194\uC758 condolences \uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694(\uACF5\uAC1C \uC77D\uAE30 \uAE08\uC9C0 \uAD8C\uC7A5).`:`\uD569\uACC4 ${Bo(r)}. \uC9C0\uAE08\uC740 \uACF5\uC720 \uC800\uC7A5\uC18C\uAC00 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC544 \uC774 \uAE30\uAE30\uC5D0\uC11C \uB0A8\uAE34 \uAE30\uB85D\uB9CC \uBCF4\uC5EC\uC694. \uC2E4\uC81C \uC785\uAE08 \uB0B4\uC5ED\uC740 \uC740\uD589 \uC571\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.`}var Od=(i,e)=>"\uFEFF"+[e.join(","),...i.map(t=>e.map(n=>`"${String(n==="time"?new Date(t.time).toLocaleString("ko-KR"):t[n]??"").replace(/"/g,'""')}"`).join(","))].join(`
`);D("#csv-condolence").onclick=async()=>Kc("\uC870\uC758\uAE08\uAE30\uB85D.csv",Od(await qe.list("condolences"),["name","affil","amount","phrase","method","note","time"]),"text/csv");D("#csv-people").onclick=async()=>{let i=await qe.list("condolences"),e=xa().map(t=>({...t,amount:i.filter(n=>n.name===t.name).reduce((n,r)=>n+Number(r.amount||0),0),to:i.find(n=>n.name===t.name)?.to||""}));for(let t of i)e.some(n=>n.name===t.name)||e.push({name:t.name,relation:t.affil,amount:t.amount,to:t.to,message:t.note,time:t.time});Kc("\uC870\uBB38\uAC1D_\uBC29\uBA85\uB85D_\uC870\uC758\uAE08.csv",Od(e,["name","relation","amount","to","message","time"]),"text/csv")};D("#csv-guestbook").onclick=()=>Kc("\uBC29\uBA85\uB85D.csv",Od(E.guestbook,["name","relation","message","time"]),"text/csv");async function M0(i){let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(i));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}var Jc=()=>`${location.origin}${location.pathname}`;function b0(){D("#link-guest").value=`${Jc()}?m=${er}`;let i=qe.getLocal("hostKey","");D("#link-host").value=i?`${Jc()}?m=${er}&key=${i}`:""}D("#new-host-key").onclick=async()=>{let i=[...crypto.getRandomValues(new Uint8Array(10))].map(e=>"abcdefghijkmnpqrstuvwxyz23456789"[e%32]).join("");E.memorial.hostKeyHash=await M0(i),qe.setLocal("hostKey",i),In(),b0(),Tt("\uC0C8 \uC0C1\uC8FC \uB9C1\uD06C\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uBE48\uC18C \uD30C\uC77C\uC744 \uB0B4\uB824\uBC1B\uC544 \uC62C\uB9AC\uBA74 \uC801\uC6A9\uB3FC\uC694.",4200)};mt("[data-copy]").forEach(i=>{i.onclick=async()=>{let e=D(`#${i.dataset.copy}`).value;e&&(await Oo(e),Tt("\uBCF5\uC0AC\uD588\uC5B4\uC694."))}});var wd=()=>`${Jc()}?m=${er}`;D("#export-json").onclick=()=>{let i={...E.memorial,demo:!1};delete i.demoSeeds,Kc(`${er}.json`,JSON.stringify(i,null,2)),Tt(`${er}.json \uC744 \uB0B4\uB824\uBC1B\uC558\uC5B4\uC694. \uC800\uC7A5\uC18C\uC758 data/ \uD3F4\uB354\uC5D0 \uB123\uC5B4 \uC8FC\uC138\uC694.`,4200)};D("#copy-link").onclick=async()=>{await Oo(wd()),Tt("\uBE48\uC18C \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")};D("#share-link").onclick=async()=>{let i=`[\uBD80\uACE0] \u6545 ${E.memorial.deceased.name}\uB2D8\uAED8\uC11C \uBCC4\uC138\uD558\uC168\uAE30\uC5D0 \uC0BC\uAC00 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.
\uB9C1\uD06C\uB97C \uB204\uB974\uBA74 \uC628\uB77C\uC778 \uBE48\uC18C\uC5D0\uC11C \uBC14\uB85C \uC870\uBB38\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`;if(navigator.share)try{await navigator.share({title:document.title,text:i,url:wd()})}catch{}else await Oo(`${i}
${wd()}`),Tt("\uBD80\uACE0 \uBB38\uAD6C\uC640 \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")};D("#reset-draft").onclick=()=>{confirm("\uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB41C \uCD08\uC548\uC744 \uC9C0\uC6B0\uACE0 \uACF5\uAC1C\uB41C \uC0C1\uD0DC\uB85C \uB418\uB3CC\uB9B4\uAE4C\uC694?")&&(qe.clearDraft(),location.reload())};D("#host-thank").onclick=()=>{D("#dlg-host").close(),m0()};E.others=new Map;var _d=!1;async function E0(){if(!(!qe.remote||!E.entered||_d||document.hidden)){_d=!0;try{let i=Y.avatar,e=E.role==="host";await qe.presencePut(E.me.id,{n:e?E.memorial.hostName||"\uC0C1\uC8FC":E.me.name,rel:e?"\uC0C1\uC8FC":E.me.relation||"",r:E.role,o:i.outfitId,lk:i.look,x:+Y.pos.x.toFixed(2),z:+Y.pos.z.toFixed(2),f:+Y.face.toFixed(2),a:E.act,s:E.actSeq,sit:i.hold==="sit"?1:0,say:E.say,ss:E.sayS,ix:E.ix});let t=await qe.presenceGet(),n=performance.now(),r=new Set;for(let[s,a]of Object.entries(t)){if(s===E.me.id||!a)continue;r.add(s);let o=E.others.get(s);if(o||(o={av:new Ti({outfit:a.o,look:a.lk||Tn}),t:a.t,changed:n,s:a.s,ss:a.ss,ixs:a.ix?.s,x:a.x,z:a.z,f:a.f,name:a.n||"\uC870\uBB38\uAC1D",relation:a.rel||""},o.av.interactTag=`other:${s}`,o.av.rebuild(),o.lkKey=JSON.stringify(a.lk||{}),o.av.root.position.set(a.x,me.heightAt(a.x,a.z),a.z),nr.add(o.av.root),o.tag=ya(Qc(o.name,a.r==="host"?"host":"other",a.r==="host"?"\uC0C1\uC8FC":"\uC870\uBB38",a.r==="host"?"":o.relation),()=>va.copy(o.av.root.position).add(new S(0,1.62*o.av.height,0))),E.others.set(s,o),E.entered&&Tt(`${o.name} \uB2D8\uC774 \uBE48\uC18C\uC5D0 \uC624\uC168\uC5B4\uC694.`,2400)),a.t!==o.t&&(o.t=a.t,o.changed=n),n-o.changed>15e3){n-o.changed>6e4&&qe.req("DELETE",`presence/${s}`).catch(()=>{}),qm(s);continue}let c=JSON.stringify(a.lk||{});if(o.av.outfitId!==a.o&&o.av.setOutfit(a.o),c!==o.lkKey&&(o.lkKey=c,o.av.setLook(a.lk||Tn)),Object.assign(o,{x:a.x,z:a.z,f:a.f}),o.av.hold=a.sit?"sit":null,a.s!==o.s){o.s=a.s;let l=a.a||"";if(l.startsWith("expr:")){let h=l.slice(5);h==="cry"||h==="smile"?o.av.setExpression(h,5):hs(o.av.root,Nc.find(u=>u.id===h)?.icon||"\u{1F90D}",2400,!0,o.av.height)}else l&&l!=="sit"&&o.av.play({flower:"offer",silentPrayer:"silence",give:"give"}[l]||l)}a.ss!==o.ss&&(o.ss=a.ss,a.say&&hs(o.av.root,a.say,5e3,!1,o.av.height)),a.ix&&a.ix.s!==o.ixs&&(o.ixs=a.ix.s,a.ix.to===E.me.id&&v0(o,a.ix))}for(let s of[...E.others.keys()])r.has(s)||qm(s);rr()}catch(i){console.warn("presence",i)}finally{_d=!1}}}function qm(i){let e=E.others.get(i);e&&(nr.remove(e.av.root),e.tag.remove(),E.others.delete(i))}function iy(i){let e=!1;for(let t of E.others.values()){let n=t.av.root.position,r=t.x-n.x,s=t.z-n.z,a=Math.hypot(r,s),o=a>.05&&!t.av.busy;if(a>6)n.x=t.x,n.z=t.z;else if(o){let l=Math.min(a,3.6*i);n.x+=r/a*l,n.z+=s/a*l,t.av.root.rotation.y=$c(t.av.root.rotation.y,Math.atan2(r,s),Math.min(1,i*10))}else t.av.root.rotation.y=$c(t.av.root.rotation.y,t.f,Math.min(1,i*6));n.y=me.heightAt(n.x,n.z);let c=me.inHall(n.x,n.z)&&n.z<.6;c!==t.inHall&&(t.inHall=c,t.av.setBarefoot(c&&!!me.theme?.shoes),e=!0),t.av.update(i,o)}e&&me.setShoes(Cd())}qe.remote&&(setInterval(E0,Ji.presenceIntervalMs),setInterval(ry,2e4),addEventListener("pagehide",()=>qe.presenceDelete(E.me.id)));async function ry(){if(document.hidden)return;let[i,e,t,n,r]=await Promise.all([qe.list("guestbook"),qe.list("lanterns",90),qe.list("wreaths",40),qe.counters(),qe.getState("incenseAt")]);i.length!==E.guestbook.length&&(E.guestbook=i,me.setMemories(xa())),t.length!==E.wreaths.length&&(E.wreaths=t,me.setWreaths(Nd()));let s=new Set(E.lanterns.map(a=>a.id));for(let a of e)s.has(a.id)||(E.lanterns.push(a),me.addLantern(a,new S(-4.6,2,9.5)));E.counters={...E.counters,...n},typeof r=="number"&&(E.incenseAt=Math.max(E.incenseAt||0,r)),me.setCounts(E.counters),ah()}async function sy(){E.memorial=await qe.loadMemorial(`${Ji.dataDir}${er}.json`,Qf),(!qe.published?.deceased?.name||qe.published.deceased.name==="\uACE0\uC778")&&er!==Ji.defaultMemorial&&Tt("\uC774 \uBE48\uC18C \uC8FC\uC18C\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB9C1\uD06C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",5e3),E.memorial.gallery=Rr(E.memorial.gallery||[]),ir(),gv(),y0();let[i,e,t,n,r]=await Promise.all([qe.list("guestbook"),qe.list("lanterns",90),qe.list("wreaths",40),qe.counters(),qe.getState("incenseAt")]);if(E.guestbook=i,E.lanterns=e,E.wreaths=t,E.counters=n,E.incenseAt=typeof r=="number"?r:null,Ud()){let a=E.memorial.demoSeeds?.counters||{};for(let[o,c]of Object.entries(a))E.counters[o]=(n[o]||0)+c;if(e.length<3)for(let o of E.memorial.demoSeeds?.lanterns||[])me.addLantern(o);E.incenseAt||(E.incenseAt=Date.now()-9*6e4)}for(let a of e)me.addLantern(a);me.setMemories(xa()),me.setWreaths(Nd()),me.setCounts(E.counters),ah();let s=xd.get("key");s?E.memorial.hostKeyHash&&await M0(s)===E.memorial.hostKeyHash?(qe.setLocal("hostKey",s),history.replaceState(null,"",`${Jc()}?m=${er}`),qc("host")):Tt("\uC0C1\uC8FC \uB9C1\uD06C\uAC00 \uB9DE\uC9C0 \uC54A\uC544\uC694. \uAC00\uC871\uC5D0\uAC8C \uBC1B\uC740 \uB9C1\uD06C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",5e3):xd.has("host")&&e0()}var $m=performance.now();function S0(i,e=performance.now()/1e3){xv(i),me.hostNpc.update(i,!1),me.helper.update(i,!1),iy(i),me.update(i,e),Mv(i),Av()}function T0(i){let e=Math.min(.05,(i-$m)/1e3);$m=i,window.__samga?.paused||S0(e,i/1e3),Ii.render(nr,yn),fv(),requestAnimationFrame(T0)}await sy();requestAnimationFrame(T0);window.__samga={state:E,world:me,player:Y,cam:_e,camera:yn,store:qe,sound:it,interact:dn,doAction:_a,paused:!1,__step:i=>S0(i),openTheater:ds,receiveIx:v0};
