var lp=0,Nh=1,cp=2;var Fh=1,ql=2,bi=3,Ys=0,Mn=1,St=2,Xi=0,oo=1,lo=2,Bh=3,Oh=4,hp=5,Zs=100,up=101,dp=102,pp=103,fp=104,mp=200,gp=201,vp=202,yp=203,_p=204,xp=205,Mp=206,bp=207,Sp=208,Ep=209,Tp=210,wp=211,Ap=212,Rp=213,Cp=214,$l=0,Yl=1,Zl=2,co=3,Jl=4,Kl=5,Ql=6,ec=7,Pp=0,Ip=1,Lp=2,ji=0,Dp=1,Up=2,Np=3,Fp=4,Bp=5,Op=6,Js=7;var kh=300,Ks=301,qr=302,tc=303,nc=304,ho=306,Hr=1e3,pr=1001,cl=1002,vi=1003,kp=1004;var uo=1005;var Gn=1006,ic=1007;var $r=1008;var Si=1009,Hh=1010,zh=1011,Qs=1012,rc=1013,Yr=1014,ni=1015,Zr=1016,sc=1017,ac=1018,ea=1020,Gh=35902,Vh=35899,Hp=1021,zp=1022,ii=1023,po=1026,fo=1027,oc=1028,lc=1029,Wh=1030,Xh=1031;var jh=1033,cc=33776,hc=33777,uc=33778,dc=33779,qh=35840,$h=35841,Yh=35842,Zh=35843,Jh=36196,Kh=37492,Qh=37496,eu=37808,tu=37809,nu=37810,iu=37811,ru=37812,su=37813,au=37814,ou=37815,lu=37816,cu=37817,hu=37818,uu=37819,du=37820,pu=37821,fu=36492,mu=36494,gu=36495,vu=36283,yu=36284,_u=36285,xu=36286;var Da=2300,hl=2301,ol=2302,Sh=2400,Eh=2401,Th=2402;var Gp=3201;var Vp=0,Wp=1,Jr="",Ct="srgb",zr="srgb-linear",Ua="linear",Pt="srgb";var kr=7680;var Xp=512,jp=513,qp=514,Mu=515,$p=516,Yp=517,Zp=518,Jp=519,ul=35044;var bu="300 es",Hi=2e3,Na=2001;function Su(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Kp(){let i=Ns("canvas");return i.style.display="block",i}var Ad={},Fs=null;function Fa(...i){let e="THREE."+i.shift();Fs?Fs("log",e,...i):console.log(e,...i)}function Ze(...i){let e="THREE."+i.shift();Fs?Fs("warn",e,...i):console.warn(e,...i)}function lt(...i){let e="THREE."+i.shift();Fs?Fs("error",e,...i):console.error(e,...i)}function Bs(...i){let e=i.join(" ");e in Ad||(Ad[e]=!0,Ze(...i))}function Qp(i,e,t){return new Promise(function(n,r){setTimeout(function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rd=1234567,Ds=Math.PI/180,Os=180/Math.PI;function gi(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(hn[255&i]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]+"-"+hn[255&e]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[63&t|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[255&n]+hn[n>>8&255]+hn[n>>16&255]+hn[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function wh(i,e){return(i%e+e)%e}function Pa(i,e,t){return(1-t)*i+t*e}function ei(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var Kr={DEG2RAD:Ds,RAD2DEG:Os,generateUUID:gi,clamp:ht,euclideanModulo:wh,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Pa,damp:function(i,e,t,n){return Pa(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(wh(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(Rd=i);let e=Rd+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*Ds},radToDeg:function(i){return i*Os},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),m=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*p,o*h,o*l);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:Rt,denormalize:ei},ue=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Rn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],m=s[a+2],v=s[a+3];if(o<=0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o>=1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=v);if(u!==v||c!==d||l!==p||h!==m){let f=c*d+l*p+h*m+u*v;f<0&&(d=-d,p=-p,m=-m,v=-v,f=-f);let _=1-o;if(f<.9995){let g=Math.acos(f),y=Math.sin(g);_=Math.sin(_*g)/y,c=c*_+d*(o=Math.sin(o*g)/y),l=l*_+p*o,h=h*_+m*o,u=u*_+v*o}else{c=c*_+d*o,l=l*_+p*o,h=h*_+m*o,u=u*_+v*o;let g=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=g,l*=g,h*=g,u*=g}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+h*u+c*p-l*d,e[t+1]=c*m+h*d+l*u-o*p,e[t+2]=l*m+h*p+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),d=c(n/2),p=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},E=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Cd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Cd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $c.copy(this).projectOnVector(e),this.sub($c)}reflect(e){return this.sub($c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new E,Cd=new Rn,at=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=r[0],f=r[3],_=r[6],g=r[1],y=r[4],b=r[7],w=r[2],M=r[5],D=r[8];return s[0]=a*v+o*g+c*w,s[3]=a*f+o*y+c*M,s[6]=a*_+o*b+c*D,s[1]=l*v+h*g+u*w,s[4]=l*f+h*y+u*M,s[7]=l*_+h*b+u*D,s[2]=d*v+p*g+m*w,s[5]=d*f+p*y+m*M,s[8]=d*_+p*b+m*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,m=t*u+n*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/m;return e[0]=u*v,e[1]=(r*l-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Yc.makeScale(e,t)),this}rotate(e){return this.premultiply(Yc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yc=new at,Pd=new at().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Id=new at().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a0(){let i={enabled:!0,workingColorSpace:zr,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Pt&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Pt&&(r.r=Us(r.r),r.g=Us(r.g),r.b=Us(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?Ua:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zr]:{primaries:e,whitePoint:n,transfer:Ua,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ct},outputColorSpaceConfig:{drawingBufferColorSpace:Ct}},[Ct]:{primaries:e,whitePoint:n,transfer:Pt,toXYZ:Pd,fromXYZ:Id,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ct}}}),i}var Mt=a0();function ki(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function Us(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var gs,dl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gs===void 0&&(gs=Ns("canvas")),gs.width=e.width,gs.height=e.height;let r=gs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*ki(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*ki(t[n]/255)):t[n]=ki(t[n]);return{data:t,width:e.width,height:e.height}}return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},o0=0,ks=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:o0++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Zc(r[a].image)):s.push(Zc(r[a]))}else s=Zc(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Zc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var l0=0,Jc=new E,dn=class i extends zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=gi(),this.name="",this.source=new ks(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n:Ze(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hr:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case cl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Hr:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case cl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null,dn.DEFAULT_MAPPING=kh,dn.DEFAULT_ANISOTROPY=1;var bt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],v=c[2],f=c[6],_=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+f)<.1&&Math.abs(l+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,b=(p+1)/2,w=(_+1)/2,M=(h+d)/4,D=(u+v)/4,H=(m+f)/4;return y>b&&y>w?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=M/n,s=D/n):b>w?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=M/r,s=H/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=D/s,r=H/s),this.set(n,r,s,t),this}let g=Math.sqrt((f-m)*(f-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(f-m)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((l+p+_-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pl=class extends zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new dn(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new ks(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends pl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ba=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vi,this.minFilter=vi,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var fl=class extends dn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vi,this.minFilter=vi,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vn=class{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(s,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_a),Lo.subVectors(this.max,_a),vs.subVectors(e.a,_a),ys.subVectors(e.b,_a),_s.subVectors(e.c,_a),sr.subVectors(ys,vs),ar.subVectors(_s,ys),Nr.subVectors(vs,_s);let t=[0,-sr.z,sr.y,0,-ar.z,ar.y,0,-Nr.z,Nr.y,sr.z,0,-sr.x,ar.z,0,-ar.x,Nr.z,0,-Nr.x,-sr.y,sr.x,0,-ar.y,ar.x,0,-Nr.y,Nr.x,0];return!!Kc(t,vs,ys,_s,Lo)&&(t=[1,0,0,0,1,0,0,0,1],!!Kc(t,vs,ys,_s,Lo)&&(Do.crossVectors(sr,ar),t=[Do.x,Do.y,Do.z],Kc(t,vs,ys,_s,Lo)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Jn).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ui=[new E,new E,new E,new E,new E,new E,new E,new E],Jn=new E,Io=new Vn,vs=new E,ys=new E,_s=new E,sr=new E,ar=new E,Nr=new E,_a=new E,Lo=new E,Do=new E,Fr=new E;function Kc(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fr.fromArray(i,s);let o=r.x*Math.abs(Fr.x)+r.y*Math.abs(Fr.y)+r.z*Math.abs(Fr.z),c=e.dot(Fr),l=t.dot(Fr),h=n.dot(Fr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var c0=new Vn,xa=new E,Qc=new E,Wn=class{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):c0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);let t=xa.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(xa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(Qc)),this.expandByPoint(xa.copy(e.center).sub(Qc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ni=new E,eh=new E,Uo=new E,or=new E,th=new E,No=new E,nh=new E,fr=class{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){eh.copy(e).add(t).multiplyScalar(.5),Uo.copy(t).sub(e).normalize(),or.copy(this.origin).sub(eh);let s=.5*e.distanceTo(t),a=-this.direction.dot(Uo),o=or.dot(this.direction),c=-or.dot(Uo),l=or.lengthSq(),h=Math.abs(1-a*a),u,d,p,m;if(h>0)if(u=a*c-o,d=a*o-c,m=s*h,u>=0)if(d>=-m)if(d<=m){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(eh).addScaledVector(Uo,d),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);let n=Ni.dot(this.direction),r=Ni.dot(Ni)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,r,s){th.subVectors(t,e),No.subVectors(n,e),nh.crossVectors(th,No);let a,o=this.direction.dot(nh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}or.subVectors(this.origin,e);let c=a*this.direction.dot(No.crossVectors(or,No));if(c<0)return null;let l=a*this.direction.dot(th.cross(or));if(l<0||c+l>o)return null;let h=-a*or.dot(nh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,r,s,a,o,c,l,h,u,d,p,m,v,f){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,d,p,m,v,f)}set(e,t,n,r,s,a,o,c,l,h,u,d,p,m,v,f){let _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=c,_[2]=l,_[6]=h,_[10]=u,_[14]=d,_[3]=p,_[7]=m,_[11]=v,_[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/xs.setFromMatrixColumn(e,0).length(),s=1/xs.setFromMatrixColumn(e,1).length(),a=1/xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,m=l*h,v=l*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,m=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,m=o*h,v=o*u;t[0]=c*h,t[4]=m*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,p=a*l,m=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(h0,e,u0)}lookAt(e,t,n){let r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),lr.crossVectors(n,Ln),lr.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),lr.crossVectors(n,Ln)),lr.normalize(),Fo.crossVectors(Ln,lr),r[0]=lr.x,r[4]=Fo.x,r[8]=Ln.x,r[1]=lr.y,r[5]=Fo.y,r[9]=Ln.y,r[2]=lr.z,r[6]=Fo.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],f=n[10],_=n[14],g=n[3],y=n[7],b=n[11],w=n[15],M=r[0],D=r[4],H=r[8],I=r[12],W=r[1],z=r[5],N=r[9],Z=r[13],L=r[2],j=r[6],te=r[10],le=r[14],oe=r[3],_e=r[7],he=r[11],xe=r[15];return s[0]=a*M+o*W+c*L+l*oe,s[4]=a*D+o*z+c*j+l*_e,s[8]=a*H+o*N+c*te+l*he,s[12]=a*I+o*Z+c*le+l*xe,s[1]=h*M+u*W+d*L+p*oe,s[5]=h*D+u*z+d*j+p*_e,s[9]=h*H+u*N+d*te+p*he,s[13]=h*I+u*Z+d*le+p*xe,s[2]=m*M+v*W+f*L+_*oe,s[6]=m*D+v*z+f*j+_*_e,s[10]=m*H+v*N+f*te+_*he,s[14]=m*I+v*Z+f*le+_*xe,s[3]=g*M+y*W+b*L+w*oe,s[7]=g*D+y*z+b*j+w*_e,s[11]=g*H+y*N+b*te+w*he,s[15]=g*I+y*Z+b*le+w*xe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-r*l*u-s*o*d+n*l*d+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-r*o*h-t*c*u+t*o*d+r*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],f=e[14],_=e[15],g=u*f*l-v*d*l+v*c*p-o*f*p-u*c*_+o*d*_,y=m*d*l-h*f*l-m*c*p+a*f*p+h*c*_-a*d*_,b=h*v*l-m*u*l+m*o*p-a*v*p-h*o*_+a*u*_,w=m*u*c-h*v*c-m*o*d+a*v*d+h*o*f-a*u*f,M=t*g+n*y+r*b+s*w;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/M;return e[0]=g*D,e[1]=(v*d*s-u*f*s-v*r*p+n*f*p+u*r*_-n*d*_)*D,e[2]=(o*f*s-v*c*s+v*r*l-n*f*l-o*r*_+n*c*_)*D,e[3]=(u*c*s-o*d*s-u*r*l+n*d*l+o*r*p-n*c*p)*D,e[4]=y*D,e[5]=(h*f*s-m*d*s+m*r*p-t*f*p-h*r*_+t*d*_)*D,e[6]=(m*c*s-a*f*s-m*r*l+t*f*l+a*r*_-t*c*_)*D,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*p+t*c*p)*D,e[8]=b*D,e[9]=(m*u*s-h*v*s-m*n*p+t*v*p+h*n*_-t*u*_)*D,e[10]=(a*v*s-m*o*s+m*n*l-t*v*l-a*n*_+t*o*_)*D,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*D,e[12]=w*D,e[13]=(h*v*r-m*u*r+m*n*d-t*v*d-h*n*f+t*u*f)*D,e[14]=(m*o*r-a*v*r-m*n*c+t*v*c+a*n*f-t*o*f)*D,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*d+t*o*d)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,m=s*u,v=a*h,f=a*u,_=o*u,g=c*l,y=c*h,b=c*u,w=n.x,M=n.y,D=n.z;return r[0]=(1-(v+_))*w,r[1]=(p+b)*w,r[2]=(m-y)*w,r[3]=0,r[4]=(p-b)*M,r[5]=(1-(d+_))*M,r[6]=(f+g)*M,r[7]=0,r[8]=(m+y)*D,r[9]=(f-g)*D,r[10]=(1-(d+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=xs.set(r[0],r[1],r[2]).length(),a=xs.set(r[4],r[5],r[6]).length(),o=xs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Kn.copy(this);let c=1/s,l=1/a,h=1/o;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=l,Kn.elements[5]*=l,Kn.elements[6]*=l,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,t.setFromRotationMatrix(Kn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),m,v;if(c)m=s/(a-s),v=a*s/(a-s);else if(o===Hi)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else{if(o!==Na)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);m=-a/(a-s),v=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),m,v;if(c)m=1/(a-s),v=a/(a-s);else if(o===Hi)m=-2/(a-s),v=-(a+s)/(a-s);else{if(o!==Na)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=-1/(a-s),v=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},xs=new E,Kn=new nt,h0=new E(0,0,0),u0=new E(1,1,1),lr=new E,Fo=new E,Ln=new E,Ld=new nt,Dd=new Rn,ti=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ld.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ld,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var Hs=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},d0=0,Ud=new E,Ms=new Rn,Fi=new nt,Bo=new E,Ma=new E,p0=new E,f0=new Rn,Nd=new E(1,0,0),Fd=new E(0,1,0),Bd=new E(0,0,1),Od={type:"added"},m0={type:"removed"},bs={type:"childadded",child:null},ih={type:"childremoved",child:null},Yt=class i extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d0++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new E,t=new ti,n=new Rn,r=new E(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new at}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,t){return Ms.setFromAxisAngle(e,t),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Nd,e)}rotateY(e){return this.rotateOnAxis(Fd,e)}rotateZ(e){return this.rotateOnAxis(Bd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nd,e)}translateY(e){return this.translateOnAxis(Fd,e)}translateZ(e){return this.translateOnAxis(Bd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bo.copy(e):Bo.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ma,Bo,this.up):Fi.lookAt(Bo,Ma,this.up),this.quaternion.setFromRotationMatrix(Fi),r&&(Fi.extractRotation(r.matrixWorld),Ms.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),bs.child=e,this.dispatchEvent(bs),bs.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(m0),ih.child=e,this.dispatchEvent(ih),ih.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),bs.child=e,this.dispatchEvent(bs),bs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,p0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Yt.DEFAULT_UP=new E(0,1,0),Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0,Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=new E,Bi=new E,rh=new E,Oi=new E,Ss=new E,Es=new E,kd=new E,sh=new E,ah=new E,oh=new E,lh=new bt,ch=new bt,hh=new bt,fi=class i{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qn.subVectors(e,t),r.cross(Qn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qn.subVectors(r,t),Bi.subVectors(n,t),rh.subVectors(e,t);let a=Qn.dot(Qn),o=Qn.dot(Bi),c=Qn.dot(rh),l=Bi.dot(Bi),h=Bi.dot(rh),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,m=(a*h-o*c)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Oi)!==null&&Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Oi.x),c.addScaledVector(a,Oi.y),c.addScaledVector(o,Oi.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(e,t),ch.fromBufferAttribute(e,n),hh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(lh,s.x),a.addScaledVector(ch,s.y),a.addScaledVector(hh,s.z),a}static isFrontFacing(e,t,n,r){return Qn.subVectors(n,t),Bi.subVectors(e,t),Qn.cross(Bi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),.5*Qn.cross(Bi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Ss.subVectors(r,n),Es.subVectors(s,n),sh.subVectors(e,n);let c=Ss.dot(sh),l=Es.dot(sh);if(c<=0&&l<=0)return t.copy(n);ah.subVectors(e,r);let h=Ss.dot(ah),u=Es.dot(ah);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Ss,a);oh.subVectors(e,s);let p=Ss.dot(oh),m=Es.dot(oh);if(m>=0&&p<=m)return t.copy(s);let v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Es,o);let f=h*m-p*u;if(f<=0&&u-h>=0&&p-m>=0)return kd.subVectors(s,r),o=(u-h)/(u-h+(p-m)),t.copy(r).addScaledVector(kd,o);let _=1/(f+v+d);return a=v*_,o=d*_,t.copy(n).addScaledVector(Ss,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cr={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function uh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var Qe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ct){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Mt.workingColorSpace){if(e=wh(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=uh(a,s,e+1/3),this.g=uh(a,s,e),this.b=uh(a,s,e-1/3)}return Mt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ct){function n(s){s!==void 0&&parseFloat(s)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ct){let n=ef[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ct){return Mt.workingToColorSpace(un.copy(this),e),65536*Math.round(ht(255*un.r,0,255))+256*Math.round(ht(255*un.g,0,255))+Math.round(ht(255*un.b,0,255))}getHexString(e=Ct){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.workingToColorSpace(un.copy(this),t);let n=un.r,r=un.g,s=un.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Mt.workingColorSpace){return Mt.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Ct){Mt.workingToColorSpace(un.copy(this),e);let t=un.r,n=un.g,r=un.b;return e!==Ct?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(cr),this.setHSL(cr.h+e,cr.s+t,cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cr),e.getHSL(Oo);let n=Pa(cr.h,Oo.h,t),r=Pa(cr.s,Oo.s,t),s=Pa(cr.l,Oo.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new Qe;Qe.NAMES=ef;var g0=0,_i=class extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:g0++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kr,this.stencilZFail=kr,this.stencilZPass=kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:Ze(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends _i{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Iv=v0();function v0(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var $t=new E,ko=new ue,y0=0,yn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:y0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ul,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ko.fromBufferAttribute(this,t),ko.applyMatrix3(e),this.setXY(t,ko.x,ko.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ei(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ei(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ei(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ei(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ul&&(e.usage=this.usage),e}};var Oa=class extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ka=class extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var He=class extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}},_0=0,zn=new nt,dh=new Yt,Ts=new E,Dn=new Vn,ba=new Vn,tn=new E,It=class i extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Su(e)?ka:Oa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new at().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new He(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new E,1/0);if(e){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];ba.setFromBufferAttribute(o),this.morphTargetsRelative?(tn.addVectors(Dn.min,ba.min),Dn.expandByPoint(tn),tn.addVectors(Dn.max,ba.max),Dn.expandByPoint(tn)):(Dn.expandByPoint(ba.min),Dn.expandByPoint(ba.max))}Dn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)tn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(tn));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)tn.fromBufferAttribute(o,l),c&&(Ts.fromBufferAttribute(e,l),tn.add(Ts)),r=Math.max(r,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let H=0;H<n.count;H++)o[H]=new E,c[H]=new E;let l=new E,h=new E,u=new E,d=new ue,p=new ue,m=new ue,v=new E,f=new E;function _(H,I,W){l.fromBufferAttribute(n,H),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,W),d.fromBufferAttribute(s,H),p.fromBufferAttribute(s,I),m.fromBufferAttribute(s,W),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let z=1/(p.x*m.y-m.x*p.y);isFinite(z)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(z),f.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(z),o[H].add(v),o[I].add(v),o[W].add(v),c[H].add(f),c[I].add(f),c[W].add(f))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let H=0,I=g.length;H<I;++H){let W=g[H],z=W.start;for(let N=z,Z=z+W.count;N<Z;N+=3)_(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let y=new E,b=new E,w=new E,M=new E;function D(H){w.fromBufferAttribute(r,H),M.copy(w);let I=o[H];y.copy(I),y.sub(w.multiplyScalar(w.dot(I))).normalize(),b.crossVectors(M,I);let W=b.dot(c[H])<0?-1:1;a.setXYZW(H,y.x,y.y,y.z,W)}for(let H=0,I=g.length;H<I;++H){let W=g[H],z=W.start;for(let N=z,Z=z+W.count;N<Z;N+=3)D(e.getX(N+0)),D(e.getX(N+1)),D(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new E,s=new E,a=new E,o=new E,c=new E,l=new E,h=new E,u=new E;if(e)for(let d=0,p=e.count;d<p;d+=3){let m=e.getX(d+0),v=e.getX(d+1),f=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,f),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,f),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)tn.fromBufferAttribute(e,t),tn.normalize(),e.setXYZ(t,tn.x,tn.y,tn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let v=0,f=c.length;v<f;v++){p=o.isInterleavedBufferAttribute?c[v]*o.data.stride+o.offset:c[v]*h;for(let _=0;_<h;_++)d[m++]=l[p++]}return new yn(d,h,u)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hd=new nt,Br=new fr,Ho=new Wn,zd=new E,zo=new E,Go=new E,Vo=new E,ph=new E,Wo=new E,Gd=new E,Xo=new E,X=class extends Yt{constructor(e=new It,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){Wo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(ph.fromBufferAttribute(u,e),a?Wo.addScaledVector(ph,h):Wo.addScaledVector(ph.sub(t),h))}t.add(Wo)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Br.copy(e.ray).recast(e.near),Ho.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Ho,zd)===null||Br.origin.distanceToSquared(zd)>(e.far-e.near)**2))return;Hd.copy(s).invert(),Br.copy(e.ray).applyMatrix4(Hd),n.boundingBox!==null&&Br.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Br)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],_=a[f.materialIndex];for(let g=Math.max(f.start,p.start),y=Math.min(o.count,Math.min(f.start+f.count,p.start+p.count));g<y;g+=3)r=jo(this,_,e,n,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);m<v;m+=3)r=jo(this,a,e,n,l,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),r&&(r.faceIndex=Math.floor(m/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let m=0,v=d.length;m<v;m++){let f=d[m],_=a[f.materialIndex];for(let g=Math.max(f.start,p.start),y=Math.min(c.count,Math.min(f.start+f.count,p.start+p.count));g<y;g+=3)r=jo(this,_,e,n,l,h,u,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=f.materialIndex,t.push(r))}else for(let m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);m<v;m+=3)r=jo(this,a,e,n,l,h,u,m,m+1,m+2),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}};function jo(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,zo),i.getVertexPosition(c,Go),i.getVertexPosition(l,Vo);let h=(function(u,d,p,m,v,f,_,g){let y;if(y=d.side===1?m.intersectTriangle(_,f,v,!0,g):m.intersectTriangle(v,f,_,d.side===0,g),y===null)return null;Xo.copy(g),Xo.applyMatrix4(u.matrixWorld);let b=p.ray.origin.distanceTo(Xo);return b<p.near||b>p.far?null:{distance:b,point:Xo.clone(),object:u}})(i,e,t,n,zo,Go,Vo,Gd);if(h){let u=new E;fi.getBarycoord(Gd,zo,Go,Vo,u),r&&(h.uv=fi.getInterpolatedAttribute(r,o,c,l,u,new ue)),s&&(h.uv1=fi.getInterpolatedAttribute(s,o,c,l,u,new ue)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,c,l,u,new E),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new E,materialIndex:0};fi.getNormal(zo,Go,Vo,d.normal),h.face=d,h.barycoord=u}return h}var be=class i extends It{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function m(v,f,_,g,y,b,w,M,D,H,I){let W=b/D,z=w/H,N=b/2,Z=w/2,L=M/2,j=D+1,te=H+1,le=0,oe=0,_e=new E;for(let he=0;he<te;he++){let xe=he*z-Z;for(let de=0;de<j;de++){let se=de*W-N;_e[v]=se*g,_e[f]=xe*y,_e[_]=L,l.push(_e.x,_e.y,_e.z),_e[v]=0,_e[f]=0,_e[_]=M>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(de/D),u.push(1-he/H),le+=1}}for(let he=0;he<H;he++)for(let xe=0;xe<D;xe++){let de=d+xe+j*he,se=d+xe+j*(he+1),pe=d+(xe+1)+j*(he+1),ge=d+(xe+1)+j*he;c.push(de,se,ge),c.push(se,pe,ge),oe+=6}o.addGroup(p,oe,I),p+=oe,d+=le}m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new He(l,3)),this.setAttribute("normal",new He(h,3)),this.setAttribute("uv",new He(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Qr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=Qr(i[t]);for(let r in n)e[r]=n[r]}return e}function Eu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}var tf={clone:Qr,merge:pn},Cn=class extends _i{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},zs=class extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},hr=new E,Vd=new ue,Wd=new ue,Jt=class extends zs{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Os*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*Ds*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Os*Math.atan(Math.tan(.5*Ds*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,t){return this.getViewBounds(e,Vd,Wd),t.subVectors(Wd,Vd)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*Ds*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ws=-90,ml=class extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Jt(ws,1,e,t);r.layers=this.layers,this.add(r);let s=new Jt(ws,1,e,t);s.layers=this.layers,this.add(s);let a=new Jt(ws,1,e,t);a.layers=this.layers,this.add(a);let o=new Jt(ws,1,e,t);o.layers=this.layers,this.add(o);let c=new Jt(ws,1,e,t);c.layers=this.layers,this.add(c);let l=new Jt(ws,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Na)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Ha=class extends dn{constructor(e=[],t=301,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},gl=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ha(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new be(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Qr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new X(r,s),o=t.minFilter;return t.minFilter===$r&&(t.minFilter=Gn),new ml(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},Se=class extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}},x0={type:"move"},Gs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let f=t.getJointPose(v,n),_=this._getHandJoint(l,v);f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=f.radius),_.visible=f!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(x0)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var za=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gr=class extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},vl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ul,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new E,Ga=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyMatrix4(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.applyNormalMatrix(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vn.fromBufferAttribute(this,t),vn.transformDirection(e),this.setXYZ(t,vn.x,vn.y,vn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ei(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ei(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ei(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ei(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ei(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),r=Rt(r,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xi=class extends _i{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},As,Sa=new E,Rs=new E,Cs=new E,Ps=new ue,Ea=new ue,nf=new nt,qo=new E,Ta=new E,$o=new E,Xd=new ue,fh=new ue,jd=new ue,Gi=class extends Yt{constructor(e=new xi){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new It;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new vl(t,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Ga(n,3,0,!1)),As.setAttribute("uv",new Ga(n,2,3,!1))}this.geometry=As,this.material=e,this.center=new ue(.5,.5),this.count=1}raycast(e,t){e.camera===null&&lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),nf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;Yo(qo.set(-.5,-.5,0),Cs,a,Rs,r,s),Yo(Ta.set(.5,-.5,0),Cs,a,Rs,r,s),Yo($o.set(.5,.5,0),Cs,a,Rs,r,s),Xd.set(0,0),fh.set(1,0),jd.set(1,1);let o=e.ray.intersectTriangle(qo,Ta,$o,!1,Sa);if(o===null&&(Yo(Ta.set(-.5,.5,0),Cs,a,Rs,r,s),fh.set(0,1),o=e.ray.intersectTriangle(qo,$o,Ta,!1,Sa),o===null))return;let c=e.ray.origin.distanceTo(Sa);c<e.near||c>e.far||t.push({distance:c,point:Sa.clone(),uv:fi.getInterpolation(Sa,qo,Ta,$o,Xd,fh,jd,new ue),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Yo(i,e,t,n,r,s){Ps.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Ea.x=s*Ps.x-r*Ps.y,Ea.y=r*Ps.x+s*Ps.y):Ea.copy(Ps),i.copy(e),i.x+=Ea.x,i.y+=Ea.y,i.applyMatrix4(nf)}var Lv=new E,Dv=new E;var Uv=new E,Nv=new bt,Fv=new bt,Bv=new E,Ov=new nt,kv=new E,Hv=new Wn,zv=new nt,Gv=new fr;var Va=class extends dn{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Vv=new nt,Wv=new nt;var Wa=class extends yn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Is=new nt,qd=new nt,Zo=[],$d=new Vn,M0=new nt,wa=new X,Aa=new Wn,Vi=class extends X{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Wa(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,M0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),$d.copy(e.boundingBox).applyMatrix4(Is),this.boundingBox.union($d)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Is),Aa.copy(e.boundingSphere).applyMatrix4(Is),this.boundingSphere.union(Aa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(wa.geometry=this.geometry,wa.material=this.material,wa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Aa.copy(this.boundingSphere),Aa.applyMatrix4(n),e.ray.intersectsSphere(Aa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Is),qd.multiplyMatrices(n,Is),wa.matrixWorld=qd,wa.raycast(e,Zo);for(let a=0,o=Zo.length;a<o;a++){let c=Zo[a];c.instanceId=s,c.object=this,t.push(c)}Zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Wa(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Va(new Float32Array(r*this.count),r,this.count,oc,ni));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},mh=new E,b0=new E,S0=new at,pi=class{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=mh.subVectors(n,t).cross(b0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(mh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||S0.getNormalMatrix(e),r=this.coplanarPoint(mh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Or=new Wn,E0=new ue(.5,.5),Jo=new E,mr=class{constructor(e=new pi,t=new pi,n=new pi,r=new pi,s=new pi,a=new pi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],m=s[8],v=s[9],f=s[10],_=s[11],g=s[12],y=s[13],b=s[14],w=s[15];if(r[0].setComponents(l-a,p-h,_-m,w-g).normalize(),r[1].setComponents(l+a,p+h,_+m,w+g).normalize(),r[2].setComponents(l+o,p+u,_+v,w+y).normalize(),r[3].setComponents(l-o,p-u,_-v,w-y).normalize(),n)r[4].setComponents(c,d,f,b).normalize(),r[5].setComponents(l-c,p-d,_-f,w-b).normalize();else if(r[4].setComponents(l-c,p-d,_-f,w-b).normalize(),t===Hi)r[5].setComponents(l+c,p+d,_+f,w+b).normalize();else{if(t!==Na)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,f,b).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);let t=E0.distanceTo(e.center);return Or.radius=.7071067811865476+t,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Jo.x=r.normal.x>0?e.max.x:e.min.x,Jo.y=r.normal.y>0?e.max.y:e.min.y,Jo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Jo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},ui=new nt,di=new mr,yl=class i{constructor(){this.coordinateSystem=Hi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(ui.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),di.setFromProjectionMatrix(ui,r.coordinateSystem,r.reversedDepth),di.containsPoint(e))return!0}return!1}clone(){return new i}};var Ah=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},Xv=new nt,jv=new Qe(1,1,1),qv=new mr,$v=new yl,Yv=new Vn,Zv=new Wn,Jv=new E,Kv=new E,Qv=new E,ey=new Ah,ty=new X;var ny=new E,iy=new E,ry=new nt,sy=new fr,ay=new Wn,oy=new E,ly=new E;var cy=new E,hy=new E;var Vs=class extends _i{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Yd=new nt,Rh=new fr,Ko=new Wn,Qo=new E,Xa=class extends Yt{constructor(e=new It,t=new Vs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;Yd.copy(r).invert(),Rh.copy(e.ray).applyMatrix4(Yd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);Qo.fromBufferAttribute(h,p),Zd(Qo,p,c,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Qo.fromBufferAttribute(h,u),Zd(Qo,u,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Zd(i,e,t,n,r,s,a){let o=Rh.distanceSqToPoint(i);if(o<t){let c=new E;Rh.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var _n=class extends dn{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ja=class extends dn{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==po&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ks(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},qa=class extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xn=class i extends It{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,m=2*n+s,v=r+1,f=new E,_=new E;for(let g=0;g<=m;g++){let y=0,b=0,w=0,M=0;if(g<=n){let I=g/n,W=I*Math.PI/2;b=-h-e*Math.cos(W),w=e*Math.sin(W),M=-e*Math.cos(W),y=I*u}else if(g<=n+s){let I=(g-n)/s;b=I*t-h,w=e,M=0,y=u+I*d}else{let I=(g-n-s)/n,W=I*Math.PI/2;b=h+e*Math.sin(W),w=e*Math.cos(W),M=e*Math.sin(W),y=u+d+I*u}let D=Math.max(0,Math.min(1,y/p)),H=0;g===0?H=.5/r:g===m&&(H=-.5/r);for(let I=0;I<=r;I++){let W=I/r,z=W*Math.PI*2,N=Math.sin(z),Z=Math.cos(z);_.x=-w*Z,_.y=b,_.z=w*N,o.push(_.x,_.y,_.z),f.set(-w*Z,M,w*N),f.normalize(),c.push(f.x,f.y,f.z),l.push(W+H,D)}if(g>0){let I=(g-1)*v;for(let W=0;W<r;W++){let z=I+W,N=I+W+1,Z=g*v+W,L=g*v+W+1;a.push(z,N,Z),a.push(N,L,Z)}}}this.setIndex(a),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Kt=class i extends It{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new E,h=new ue;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new He(a,3)),this.setAttribute("normal",new He(o,3)),this.setAttribute("uv",new He(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},we=class i extends It{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,v=[],f=n/2,_=0;function g(y){let b=m,w=new ue,M=new E,D=0,H=y===!0?e:t,I=y===!0?1:-1;for(let z=1;z<=r;z++)u.push(0,f*I,0),d.push(0,I,0),p.push(.5,.5),m++;let W=m;for(let z=0;z<=r;z++){let N=z/r*c+o,Z=Math.cos(N),L=Math.sin(N);M.x=H*L,M.y=f*I,M.z=H*Z,u.push(M.x,M.y,M.z),d.push(0,I,0),w.x=.5*Z+.5,w.y=.5*L*I+.5,p.push(w.x,w.y),m++}for(let z=0;z<r;z++){let N=b+z,Z=W+z;y===!0?h.push(Z,Z+1,N):h.push(Z+1,Z,N),D+=3}l.addGroup(_,D,y===!0?1:2),_+=D}(function(){let y=new E,b=new E,w=0,M=(t-e)/n;for(let D=0;D<=s;D++){let H=[],I=D/s,W=I*(t-e)+e;for(let z=0;z<=r;z++){let N=z/r,Z=N*c+o,L=Math.sin(Z),j=Math.cos(Z);b.x=W*L,b.y=-I*n+f,b.z=W*j,u.push(b.x,b.y,b.z),y.set(L,M,j).normalize(),d.push(y.x,y.y,y.z),p.push(N,1-I),H.push(m++)}v.push(H)}for(let D=0;D<r;D++)for(let H=0;H<s;H++){let I=v[H][D],W=v[H+1][D],z=v[H+1][D+1],N=v[H][D+1];(e>0||H!==0)&&(h.push(I,W,N),w+=3),(t>0||H!==s-1)&&(h.push(W,z,N),w+=3)}l.addGroup(_,w,0),_+=w})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rn=class i extends we{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gr=class i extends It{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(p,m,v,f){let _=f+1,g=[];for(let y=0;y<=_;y++){g[y]=[];let b=p.clone().lerp(v,y/_),w=m.clone().lerp(v,y/_),M=_-y;for(let D=0;D<=M;D++)g[y][D]=D===0&&y===_?b:b.clone().lerp(w,D/M)}for(let y=0;y<_;y++)for(let b=0;b<2*(_-y)-1;b++){let w=Math.floor(b/2);b%2==0?(c(g[y][w+1]),c(g[y+1][w]),c(g[y][w])):(c(g[y][w+1]),c(g[y+1][w+1]),c(g[y+1][w]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,m){let v=3*p;m.x=e[v+0],m.y=e[v+1],m.z=e[v+2]}function h(p,m,v,f){f<0&&p.x===1&&(a[m]=p.x-1),v.x===0&&v.z===0&&(a[m]=f/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let m=new E,v=new E,f=new E;for(let _=0;_<t.length;_+=3)l(t[_+0],m),l(t[_+1],v),l(t[_+2],f),o(m,v,f,p)})(r),(function(p){let m=new E;for(let v=0;v<s.length;v+=3)m.x=s[v+0],m.y=s[v+1],m.z=s[v+2],m.normalize().multiplyScalar(p),s[v+0]=m.x,s[v+1]=m.y,s[v+2]=m.z})(n),(function(){let p=new E;for(let m=0;m<s.length;m+=3){p.x=s[m+0],p.y=s[m+1],p.z=s[m+2];let v=u(p)/2/Math.PI+.5,f=d(p)/Math.PI+.5;a.push(v,1-f)}(function(){let m=new E,v=new E,f=new E,_=new E,g=new ue,y=new ue,b=new ue;for(let w=0,M=0;w<s.length;w+=9,M+=6){m.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),f.set(s[w+6],s[w+7],s[w+8]),g.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),b.set(a[M+4],a[M+5]),_.copy(m).add(v).add(f).divideScalar(3);let D=u(_);h(g,M+0,m,D),h(y,M+2,v,D),h(b,M+4,f,D)}})(),(function(){for(let m=0;m<a.length;m+=6){let v=a[m+0],f=a[m+2],_=a[m+4],g=Math.max(v,f,_),y=Math.min(v,f,_);g>.9&&y<.1&&(v<.2&&(a[m+0]+=1),f<.2&&(a[m+2]+=1),_<.2&&(a[m+4]+=1))}})()})(),this.setAttribute("position",new He(s,3)),this.setAttribute("normal",new He(s.slice(),3)),this.setAttribute("uv",new He(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},_l=class i extends gr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},el=new E,tl=new E,gh=new E,nl=new fi,xl=class extends It{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos(Ds*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);let{a:v,b:f,c:_}=nl;if(v.fromBufferAttribute(o,l[0]),f.fromBufferAttribute(o,l[1]),_.fromBufferAttribute(o,l[2]),nl.getNormal(gh),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(f.x*r)},${Math.round(f.y*r)},${Math.round(f.z*r)}`,u[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,b=u[g],w=u[y],M=nl[h[g]],D=nl[h[y]],H=`${b}_${w}`,I=`${w}_${b}`;I in d&&d[I]?(gh.dot(d[I].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(D.x,D.y,D.z)),d[I]=null):H in d||(d[H]={index0:l[g],index1:l[y],normal:gh.clone()})}}for(let m in d)if(d[m]){let{index0:v,index1:f}=d[m];el.fromBufferAttribute(o,v),tl.fromBufferAttribute(o,f),p.push(el.x,el.y,el.z),p.push(tl.x,tl.y,tl.z)}this.setAttribute("position",new He(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new ue:new E);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new E,r=[],s=[],a=[],o=new E,c=new nt;for(let p=0;p<=e;p++){let m=p/e;r[p]=this.getTangentAt(m,new E)}s[0]=new E,a[0]=new E;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(ht(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,m))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ht(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(c.makeRotationAxis(r[m],p*m)),a[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ws=class extends Nn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ue){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ml=class extends Ws{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Tu(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var il=new E,vh=new Tu,yh=new Tu,_h=new Tu,bl=class extends Nn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new E){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(il.subVectors(r[0],r[1]).add(r[0]),o=il);let u=r[l%s],d=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(il.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=il),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),f=Math.pow(d.distanceToSquared(c),p);v<1e-4&&(v=1),m<1e-4&&(m=v),f<1e-4&&(f=v),vh.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,m,v,f),yh.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,m,v,f),_h.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,m,v,f)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),yh.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),_h.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(vh.calc(h),yh.calc(h),_h.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jd(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Ia(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function La(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var $a=class extends Nn{constructor(e=new ue,t=new ue,n=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new ue){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(La(e,r.x,s.x,a.x,o.x),La(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Sl=class extends Nn{constructor(e=new E,t=new E,n=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(La(e,r.x,s.x,a.x,o.x),La(e,r.y,s.y,a.y,o.y),La(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ya=class extends Nn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},El=class extends Nn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Za=class extends Nn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ia(e,r.x,s.x,a.x),Ia(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ja=class extends Nn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ia(e,r.x,s.x,a.x),Ia(e,r.y,s.y,a.y),Ia(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ka=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Jd(o,c.x,l.x,h.x,u.x),Jd(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new ue().fromArray(r))}return this}},Tl=Object.freeze({__proto__:null,ArcCurve:Ml,CatmullRomCurve3:bl,CubicBezierCurve:$a,CubicBezierCurve3:Sl,EllipseCurve:Ws,LineCurve:Ya,LineCurve3:El,QuadraticBezierCurve:Za,QuadraticBezierCurve3:Ja,SplineCurve:Ka}),wl=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Tl[r.type]().fromJSON(r))}return this}},Qa=class extends wl{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ya(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Za(this.currentPoint.clone(),new ue(e,t),new ue(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new $a(this.currentPoint.clone(),new ue(e,t),new ue(n,r),new ue(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ka(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new Ws(e,t,n,r,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mi=class extends Qa{constructor(e){super(e),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new Qa().fromJSON(r))}return this}};function T0(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=Kd(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,u,d,p){let m=[];for(let v=0,f=u.length;v<f;v++){let _=Kd(h,u[v]*p,v<f-1?u[v+1]*p:h.length,p,!1);_===_.next&&(_.steiner=!0),m.push(D0(_))}m.sort(P0);for(let v=0;v<m.length;v++)d=I0(m[v],d);return d})(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<r;d+=t){let p=i[d],m=i[d+1];p<o&&(o=p),m<c&&(c=m),p>h&&(h=p),m>u&&(u=m)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return eo(s,a,t,o,c,l,0),a}function Kd(i,e,t,n,r){let s;if(r===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Qd(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Qd(a/n|0,i[a],i[a+1],s);return s&&Xs(s,s.next)&&(no(s),s=s.next),s}function Vr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!Xs(n,n.next)&&Vt(n.prev,n,n.next)!==0)n=n.next;else{if(no(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function eo(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=Ch(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let m,v=1;do{let f,_=p;p=null;let g=null;for(m=0;_;){m++;let y=_,b=0;for(let M=0;M<v&&(b++,y=y.nextZ,y);M++);let w=v;for(;b>0||w>0&&y;)b!==0&&(w===0||!y||_.z<=y.z)?(f=_,_=_.nextZ,b--):(f=y,y=y.nextZ,w--),g?g.nextZ=f:p=f,f.prevZ=g,g=f;_=y}g.nextZ=null,v*=2}while(m>1)})(d)})(i,n,r,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?A0(i,n,r,s):w0(i))e.push(c.i,i.i,l.i),no(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?eo(i=R0(Vr(i),e),e,t,n,r,s,2):a===2&&C0(i,e,t,n,r,s):eo(Vr(i),e,t,n,r,s,1);break}}}function w0(i){let e=i.prev,t=i,n=i.next;if(Vt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),u=Math.min(o,c,l),d=Math.max(r,s,a),p=Math.max(o,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&Ca(r,o,s,c,a,l,m.x,m.y)&&Vt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function A0(i,e,t,n){let r=i.prev,s=i,a=i.next;if(Vt(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,c,l),m=Math.min(h,u,d),v=Math.max(o,c,l),f=Math.max(h,u,d),_=Ch(p,m,e,t,n),g=Ch(v,f,e,t,n),y=i.prevZ,b=i.nextZ;for(;y&&y.z>=_&&b&&b.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=f&&y!==r&&y!==a&&Ca(o,h,c,u,l,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=v&&b.y>=m&&b.y<=f&&b!==r&&b!==a&&Ca(o,h,c,u,l,d,b.x,b.y)&&Vt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=v&&y.y>=m&&y.y<=f&&y!==r&&y!==a&&Ca(o,h,c,u,l,d,y.x,y.y)&&Vt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=g;){if(b.x>=p&&b.x<=v&&b.y>=m&&b.y<=f&&b!==r&&b!==a&&Ca(o,h,c,u,l,d,b.x,b.y)&&Vt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function R0(i,e){let t=i;do{let n=t.prev,r=t.next.next;!Xs(n,r)&&sf(n,t,t.next,r)&&to(n,r)&&to(r,n)&&(e.push(n.i,t.i,r.i),no(t),no(t.next),t=i=r),t=t.next}while(t!==i);return Vr(t)}function C0(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&U0(a,o)){let c=af(a,o);return a=Vr(a,a.next),c=Vr(c,c.next),eo(a,e,t,n,r,s,0),void eo(c,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function P0(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function I0(i,e){let t=(function(r,s){let a=s,o=r.x,c=r.y,l,h=-1/0;if(Xs(r,a))return a;do{if(Xs(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let v=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=o&&v>h&&(h=v,l=a.x<a.next.x?a:a.next,v===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,p=l.y,m=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&rf(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let v=Math.abs(c-a.y)/(o-a.x);to(a,r)&&(v<m||v===m&&(a.x>l.x||a.x===l.x&&L0(l,a)))&&(l=a,m=v)}a=a.next}while(a!==u);return l})(i,e);if(!t)return e;let n=af(t,i);return Vr(n,n.next),Vr(t,t.next)}function L0(i,e){return Vt(i.prev,i,e.prev)<0&&Vt(e.next,i,i.next)<0}function Ch(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function D0(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rf(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ca(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&rf(i,e,t,n,r,s,a,o)}function U0(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&sf(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(to(i,e)&&to(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(Vt(i.prev,i,e.prev)||Vt(i,e.prev,e))||Xs(i,e)&&Vt(i.prev,i,i.next)>0&&Vt(e.prev,e,e.next)>0)}function Vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Xs(i,e){return i.x===e.x&&i.y===e.y}function sf(i,e,t,n){let r=sl(Vt(i,e,t)),s=sl(Vt(i,e,n)),a=sl(Vt(t,n,i)),o=sl(Vt(t,n,e));return r!==s&&a!==o||!(r!==0||!rl(i,t,e))||!(s!==0||!rl(i,n,e))||!(a!==0||!rl(t,i,n))||!(o!==0||!rl(t,e,n))}function rl(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sl(i){return i>0?1:i<0?-1:0}function to(i,e){return Vt(i.prev,i,i.next)<0?Vt(i,e,i.next)>=0&&Vt(i,i.prev,e)>=0:Vt(i,e,i.prev)<0||Vt(i,i.next,e)<0}function af(i,e){let t=Ph(i.i,i.x,i.y),n=Ph(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Qd(i,e,t,n){let r=Ph(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function no(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ph(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var Ih=class{static triangulate(e,t,n=2){return T0(e,t,n)}},mi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];ep(e),tp(n,e);let a=e.length;t.forEach(ep);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,tp(n,t[c]);let o=Ih.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function ep(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function tp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var js=class i extends It{constructor(e=new Mi([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,f=t.bevelSegments!==void 0?t.bevelSegments:3,_=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:N0,y,b,w,M,D,H=!1;_&&(y=_.getSpacedPoints(h),H=!0,d=!1,b=_.computeFrenetFrames(h,!1),w=new E,M=new E,D=new E),d||(f=0,p=0,m=0,v=0);let I=o.extractPoints(l),W=I.shape,z=I.holes;if(!mi.isClockWise(W)){W=W.reverse();for(let U=0,x=z.length;U<x;U++){let P=z[U];mi.isClockWise(P)&&(z[U]=P.reverse())}}function N(U){let x=10000000000000001e-36,P=U[0];for(let G=1;G<=U.length;G++){let O=G%U.length,ne=U[O],q=ne.x-P.x,K=ne.y-P.y,Q=q*q+K*K,ce=Math.max(Math.abs(ne.x),Math.abs(ne.y),Math.abs(P.x),Math.abs(P.y));Q<=x*ce*ce?(U.splice(O,1),G--):P=ne}}N(W),z.forEach(N);let Z=z.length,L=W;for(let U=0;U<Z;U++){let x=z[U];W=W.concat(x)}function j(U,x,P){return x||lt("ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(x,P)}let te=W.length;function le(U,x,P){let G,O,ne,q=U.x-x.x,K=U.y-x.y,Q=P.x-U.x,ce=P.y-U.y,fe=q*q+K*K,Ae=q*ce-K*Q;if(Math.abs(Ae)>Number.EPSILON){let Ue=Math.sqrt(fe),$e=Math.sqrt(Q*Q+ce*ce),tt=x.x-K/Ue,rt=x.y+q/Ue,mt=((P.x-ce/$e-tt)*ce-(P.y+Q/$e-rt)*Q)/(q*ce-K*Q);G=tt+q*mt-U.x,O=rt+K*mt-U.y;let Le=G*G+O*O;if(Le<=2)return new ue(G,O);ne=Math.sqrt(Le/2)}else{let Ue=!1;q>Number.EPSILON?Q>Number.EPSILON&&(Ue=!0):q<-Number.EPSILON?Q<-Number.EPSILON&&(Ue=!0):Math.sign(K)===Math.sign(ce)&&(Ue=!0),Ue?(G=-K,O=q,ne=Math.sqrt(fe)):(G=q,O=K,ne=Math.sqrt(fe/2))}return new ue(G/ne,O/ne)}let oe=[];for(let U=0,x=L.length,P=x-1,G=U+1;U<x;U++,P++,G++)P===x&&(P=0),G===x&&(G=0),oe[U]=le(L[U],L[P],L[G]);let _e=[],he,xe,de=oe.concat();for(let U=0,x=Z;U<x;U++){let P=z[U];he=[];for(let G=0,O=P.length,ne=O-1,q=G+1;G<O;G++,ne++,q++)ne===O&&(ne=0),q===O&&(q=0),he[G]=le(P[G],P[ne],P[q]);_e.push(he),de=de.concat(he)}if(f===0)xe=mi.triangulateShape(L,z);else{let U=[],x=[];for(let P=0;P<f;P++){let G=P/f,O=p*Math.cos(G*Math.PI/2),ne=m*Math.sin(G*Math.PI/2)+v;for(let q=0,K=L.length;q<K;q++){let Q=j(L[q],oe[q],ne);Be(Q.x,Q.y,-O),G===0&&U.push(Q)}for(let q=0,K=Z;q<K;q++){let Q=z[q];he=_e[q];let ce=[];for(let fe=0,Ae=Q.length;fe<Ae;fe++){let Ue=j(Q[fe],he[fe],ne);Be(Ue.x,Ue.y,-O),G===0&&ce.push(Ue)}G===0&&x.push(ce)}}xe=mi.triangulateShape(U,x)}let se=xe.length,pe=m+v;for(let U=0;U<te;U++){let x=d?j(W[U],de[U],pe):W[U];H?(M.copy(b.normals[0]).multiplyScalar(x.x),w.copy(b.binormals[0]).multiplyScalar(x.y),D.copy(y[0]).add(M).add(w),Be(D.x,D.y,D.z)):Be(x.x,x.y,0)}for(let U=1;U<=h;U++)for(let x=0;x<te;x++){let P=d?j(W[x],de[x],pe):W[x];H?(M.copy(b.normals[U]).multiplyScalar(P.x),w.copy(b.binormals[U]).multiplyScalar(P.y),D.copy(y[U]).add(M).add(w),Be(D.x,D.y,D.z)):Be(P.x,P.y,u/h*U)}for(let U=f-1;U>=0;U--){let x=U/f,P=p*Math.cos(x*Math.PI/2),G=m*Math.sin(x*Math.PI/2)+v;for(let O=0,ne=L.length;O<ne;O++){let q=j(L[O],oe[O],G);Be(q.x,q.y,u+P)}for(let O=0,ne=z.length;O<ne;O++){let q=z[O];he=_e[O];for(let K=0,Q=q.length;K<Q;K++){let ce=j(q[K],he[K],G);H?Be(ce.x,ce.y+y[h-1].y,y[h-1].x+P):Be(ce.x,ce.y,u+P)}}}function ge(U,x){let P=U.length;for(;--P>=0;){let G=P,O=P-1;O<0&&(O=U.length-1);for(let ne=0,q=h+2*f;ne<q;ne++){let K=te*ne,Q=te*(ne+1);T(x+G+K,x+O+K,x+O+Q,x+G+Q)}}}function Be(U,x,P){c.push(U),c.push(x),c.push(P)}function Ge(U,x,P){S(U),S(x),S(P);let G=r.length/3,O=g.generateTopUV(n,r,G-3,G-2,G-1);V(O[0]),V(O[1]),V(O[2])}function T(U,x,P,G){S(U),S(x),S(G),S(x),S(P),S(G);let O=r.length/3,ne=g.generateSideWallUV(n,r,O-6,O-3,O-2,O-1);V(ne[0]),V(ne[1]),V(ne[3]),V(ne[1]),V(ne[2]),V(ne[3])}function S(U){r.push(c[3*U+0]),r.push(c[3*U+1]),r.push(c[3*U+2])}function V(U){s.push(U.x),s.push(U.y)}(function(){let U=r.length/3;if(d){let x=0,P=te*x;for(let G=0;G<se;G++){let O=xe[G];Ge(O[2]+P,O[1]+P,O[0]+P)}x=h+2*f,P=te*x;for(let G=0;G<se;G++){let O=xe[G];Ge(O[0]+P,O[1]+P,O[2]+P)}}else{for(let x=0;x<se;x++){let P=xe[x];Ge(P[2],P[1],P[0])}for(let x=0;x<se;x++){let P=xe[x];Ge(P[0]+te*h,P[1]+te*h,P[2]+te*h)}}n.addGroup(U,r.length/3-U,0)})(),(function(){let U=r.length/3,x=0;ge(L,x),x+=L.length;for(let P=0,G=z.length;P<G;P++){let O=z[P];ge(O,x),x+=O.length}n.addGroup(U,r.length/3-U,1)})()}this.setAttribute("position",new He(r,3)),this.setAttribute("uv",new He(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Tl[r.type]().fromJSON(r)),new i(n,e.options)}},N0={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new ue(s,a),new ue(o,c),new ue(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],m=e[3*r+2],v=e[3*s],f=e[3*s+1],_=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new ue(a,1-c),new ue(l,1-u),new ue(d,1-m),new ue(v,1-_)]:[new ue(o,1-c),new ue(h,1-u),new ue(p,1-m),new ue(f,1-_)]}},vr=class i extends gr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Al=class i extends It{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ht(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new E,d=new ue,p=new E,m=new E,v=new E,f=0,_=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:f=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-f,p.z=0*_,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:f=e[g+1].x-e[g].x,_=e[g+1].y-e[g].y,p.x=1*_,p.y=-f,p.z=0*_,m.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(m)}for(let g=0;g<=t;g++){let y=n+g*h*r,b=Math.sin(y),w=Math.cos(y);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*b,u.y=e[M].y,u.z=e[M].x*w,a.push(u.x,u.y,u.z),d.x=g/t,d.y=M/(e.length-1),o.push(d.x,d.y);let D=c[3*M+0]*b,H=c[3*M+1],I=c[3*M+0]*w;l.push(D,H,I)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let b=y+g*e.length,w=b,M=b+e.length,D=b+e.length+1,H=b+1;s.push(w,M,H),s.push(D,H,M)}this.setIndex(s),this.setAttribute("position",new He(a,3)),this.setAttribute("uv",new He(o,2)),this.setAttribute("normal",new He(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Rl=class i extends gr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},pt=class i extends It{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,p=[],m=[],v=[],f=[];for(let _=0;_<h;_++){let g=_*d-a;for(let y=0;y<l;y++){let b=y*u-s;m.push(b,-g,0),v.push(0,0,1),f.push(y/o),f.push(1-_/c)}}for(let _=0;_<c;_++)for(let g=0;g<o;g++){let y=g+l*_,b=g+l*(_+1),w=g+1+l*(_+1),M=g+1+l*_;p.push(y,b,M),p.push(b,w,M)}this.setIndex(p),this.setAttribute("position",new He(m,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Cl=class i extends It{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new E,m=new ue;for(let v=0;v<=r;v++){for(let f=0;f<=n;f++){let _=s+f/n*a;p.x=u*Math.cos(_),p.y=u*Math.sin(_),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/t+1)/2,m.y=(p.y/t+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<r;v++){let f=v*(n+1);for(let _=0;_<n;_++){let g=_+f,y=g,b=g+n+1,w=g+n+2,M=g+1;o.push(y,b,M),o.push(b,w,M)}}this.setIndex(o),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},yr=class i extends It{constructor(e=new Mi([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,m=d.holes;mi.isClockWise(p)===!1&&(p=p.reverse());for(let f=0,_=m.length;f<_;f++){let g=m[f];mi.isClockWise(g)===!0&&(m[f]=g.reverse())}let v=mi.triangulateShape(p,m);for(let f=0,_=m.length;f<_;f++){let g=m[f];p=p.concat(g)}for(let f=0,_=p.length;f<_;f++){let g=p[f];r.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let f=0,_=v.length;f<_;f++){let g=v[f],y=g[0]+u,b=g[1]+u,w=g[2]+u;n.push(y,b,w),c+=3}}this.setIndex(n),this.setAttribute("position",new He(r,3)),this.setAttribute("normal",new He(s,3)),this.setAttribute("uv",new He(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},vt=class i extends It{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new E,d=new E,p=[],m=[],v=[],f=[];for(let _=0;_<=n;_++){let g=[],y=_/n,b=0;_===0&&a===0?b=.5/t:_===n&&c===Math.PI&&(b=-.5/t);for(let w=0;w<=t;w++){let M=w/t;u.x=-e*Math.cos(r+M*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+M*s)*Math.sin(a+y*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),f.push(M+b,1-y),g.push(l++)}h.push(g)}for(let _=0;_<n;_++)for(let g=0;g<t;g++){let y=h[_][g+1],b=h[_][g],w=h[_+1][g],M=h[_+1][g+1];(_!==0||a>0)&&p.push(y,b,M),(_!==n-1||c<Math.PI)&&p.push(b,w,M)}this.setIndex(p),this.setAttribute("position",new He(m,3)),this.setAttribute("normal",new He(v,3)),this.setAttribute("uv",new He(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Pl=class i extends gr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},xn=class i extends It{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new E,u=new E,d=new E;for(let p=0;p<=n;p++)for(let m=0;m<=r;m++){let v=m/r*s,f=p/n*Math.PI*2;u.x=(e+t*Math.cos(f))*Math.cos(v),u.y=(e+t*Math.cos(f))*Math.sin(v),u.z=t*Math.sin(f),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=r;m++){let v=(r+1)*p+m-1,f=(r+1)*(p-1)+m-1,_=(r+1)*(p-1)+m,g=(r+1)*p+m;a.push(v,f,g),a.push(f,_,g)}this.setIndex(a),this.setAttribute("position",new He(o,3)),this.setAttribute("normal",new He(c,3)),this.setAttribute("uv",new He(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},Il=class i extends It{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],u=new E,d=new E,p=new E,m=new E,v=new E,f=new E,_=new E;for(let y=0;y<=n;++y){let b=y/n*s*Math.PI*2;g(b,s,a,e,p),g(b+.01,s,a,e,m),f.subVectors(m,p),_.addVectors(m,p),v.crossVectors(f,_),_.crossVectors(v,f),v.normalize(),_.normalize();for(let w=0;w<=r;++w){let M=w/r*Math.PI*2,D=-t*Math.cos(M),H=t*Math.sin(M);u.x=p.x+(D*_.x+H*v.x),u.y=p.y+(D*_.y+H*v.y),u.z=p.z+(D*_.z+H*v.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(w/r)}}for(let y=1;y<=n;y++)for(let b=1;b<=r;b++){let w=(r+1)*(y-1)+(b-1),M=(r+1)*y+(b-1),D=(r+1)*y+b,H=(r+1)*(y-1)+b;o.push(w,M,H),o.push(M,D,H)}function g(y,b,w,M,D){let H=Math.cos(y),I=Math.sin(y),W=w/b*y,z=Math.cos(W);D.x=M*(2+z)*.5*H,D.y=M*(2+z)*I*.5,D.z=M*Math.sin(W)*.5}this.setIndex(o),this.setAttribute("position",new He(c,3)),this.setAttribute("normal",new He(l,3)),this.setAttribute("uv",new He(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Ll=class i extends It{constructor(e=new Ja(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new E,c=new E,l=new ue,h=new E,u=[],d=[],p=[],m=[];function v(f){h=e.getPointAt(f/t,h);let _=a.normals[f],g=a.binormals[f];for(let y=0;y<=r;y++){let b=y/r*Math.PI*2,w=Math.sin(b),M=-Math.cos(b);c.x=M*_.x+w*g.x,c.y=M*_.y+w*g.y,c.z=M*_.z+w*g.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let f=0;f<t;f++)v(f);v(s===!1?t:0),(function(){for(let f=0;f<=t;f++)for(let _=0;_<=r;_++)l.x=f/t,l.y=_/r,p.push(l.x,l.y)})(),(function(){for(let f=1;f<=t;f++)for(let _=1;_<=r;_++){let g=(r+1)*(f-1)+(_-1),y=(r+1)*f+(_-1),b=(r+1)*f+_,w=(r+1)*(f-1)+_;m.push(g,y,w),m.push(y,b,w)}})()})(),this.setIndex(m),this.setAttribute("position",new He(u,3)),this.setAttribute("normal",new He(d,3)),this.setAttribute("uv",new He(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Tl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Dl=class extends It{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new E,s=new E;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,m=d+u.count;p<m;p+=3)for(let v=0;v<3;v++){let f=o.getX(p+v),_=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,f),s.fromBufferAttribute(a,_),np(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),np(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new He(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function np(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var uy=Object.freeze({__proto__:null,BoxGeometry:be,CapsuleGeometry:Xn,CircleGeometry:Kt,ConeGeometry:rn,CylinderGeometry:we,DodecahedronGeometry:_l,EdgesGeometry:xl,ExtrudeGeometry:js,IcosahedronGeometry:vr,LatheGeometry:Al,OctahedronGeometry:Rl,PlaneGeometry:pt,PolyhedronGeometry:gr,RingGeometry:Cl,ShapeGeometry:yr,SphereGeometry:vt,TetrahedronGeometry:Pl,TorusGeometry:xn,TorusKnotGeometry:Il,TubeGeometry:Ll,WireframeGeometry:Dl});var Fe=class extends _i{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ul=class extends _i{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Nl=class extends _i{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function al(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}function F0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fl=class extends Wr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eh:s=e,o=2*t-n;break;case Th:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Eh:a=e,c=2*n-t;break;case Th:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(r-t),v=m*m,f=v*m,_=-d*f+2*d*v-d*m,g=(1+d)*f+(-1.5-2*d)*v+(-.5+d)*m+1,y=(-1-p)*f+(1.5+p)*v+.5*m,b=p*f-p*v;for(let w=0;w!==o;++w)s[w]=_*a[h+w]+g*a[l+w]+y*a[c+w]+b*a[u+w];return s}},Bl=class extends Wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},Ol=class extends Wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Un=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=al(t,this.TimeBufferType),this.values=al(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:al(e.times,Array),values:al(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Da:t=this.InterpolantFactoryMethodDiscrete;break;case hl:t=this.InterpolantFactoryMethodLinear;break;case ol:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Da;case this.InterpolantFactoryMethodLinear:return hl;case this.InterpolantFactoryMethodSmooth:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(lt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(lt("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){lt("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){lt("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&F0(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){lt("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ol,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};Un.prototype.ValueTypeName="",Un.prototype.TimeBufferType=Float32Array,Un.prototype.ValueBufferType=Float32Array,Un.prototype.DefaultInterpolation=hl;var ur=class extends Un{constructor(e,t,n){super(e,t,n)}};ur.prototype.ValueTypeName="bool",ur.prototype.ValueBufferType=Array,ur.prototype.DefaultInterpolation=Da,ur.prototype.InterpolantFactoryMethodLinear=void 0,ur.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Un{constructor(e,t,n,r){super(e,t,n,r)}};kl.prototype.ValueTypeName="color";var Hl=class extends Un{constructor(e,t,n,r){super(e,t,n,r)}};Hl.prototype.ValueTypeName="number";var zl=class extends Wr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)Rn.slerpFlat(s,0,a,l-o,a,l,c);return s}},io=class extends Un{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new zl(this.times,this.values,this.getValueSize(),e)}};io.prototype.ValueTypeName="quaternion",io.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends Un{constructor(e,t,n){super(e,t,n)}};dr.prototype.ValueTypeName="string",dr.prototype.ValueBufferType=Array,dr.prototype.DefaultInterpolation=Da,dr.prototype.InterpolantFactoryMethodLinear=void 0,dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gl=class extends Un{constructor(e,t,n,r){super(e,t,n,r)}};Gl.prototype.ValueTypeName="vector";var ll={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Vl=class{constructor(e,t,n){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},of=new Vl,qs=class{constructor(e){this.manager=e!==void 0?e:of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};qs.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=new WeakMap,Wl=class extends qs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=ll.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Ls.get(a);u===void 0&&(u=[],Ls.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Ns("img");function c(){h(),t&&t(this);let u=Ls.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Ls.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),ll.remove(`image:${e}`);let d=Ls.get(this)||[];for(let p=0;p<d.length;p++){let m=d[p];m.onError&&m.onError(u)}Ls.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ll.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ro=class extends qs{constructor(e){super(e)}load(e,t,n,r){let s=new dn,a=new Wl(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},$s=class extends Yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Xr=class extends $s{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xh=new nt,ip=new E,rp=new E,Xl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mr,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(ip),rp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(rp),t.updateMatrixWorld(),xh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var sp=new nt,Ra=new E,Mh=new E,Lh=class extends Xl{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new bt(2,1,1,1),new bt(0,1,1,1),new bt(3,1,1,1),new bt(1,1,1,1),new bt(3,0,1,1),new bt(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ra.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ra),Mh.copy(n.position),Mh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Mh),n.updateMatrixWorld(),r.makeTranslation(-Ra.x,-Ra.y,-Ra.z),sp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp,n.coordinateSystem,n.reversedDepth)}},Wi=class extends $s{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Lh}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},so=class extends zs{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Dh=class extends Xl{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends $s{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new Dh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var dy=new nt,py=new nt,fy=new nt;var jl=class extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var my=new E,gy=new Rn,vy=new E,yy=new E,_y=new E;var xy=new E,My=new Rn,by=new E,Sy=new E;var wu="\\[\\]\\.:\\/",B0=new RegExp("["+wu+"]","g"),bh="[^"+wu+"]",O0="[^"+wu.replace("\\.","")+"]",k0=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",bh)+/(WCOD+)?/.source.replace("WCOD",O0)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bh)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bh)+"$"),H0=["material","materials","bones","map"],Ft=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(B0,"")}static parseTrackName(e){let t=k0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);H0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Ze("PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void lt("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void lt("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void lt("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0)return void lt("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=class{constructor(i,e,t){let n=t||Ft.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray],Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ey=new Float32Array(1);var ap=new nt,ao=class{constructor(e,t,n=0,r=1/0){this.ray=new fr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Hs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ap.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ap),this}intersectObject(e,t=!0,n=[]){return Uh(e,this,n,t),n.sort(op),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Uh(e[r],this,n,t);return n.sort(op),n}};function op(i,e){return i.distance-e.distance}function Uh(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)Uh(s[a],e,t,!0)}}var Ty=new ue;var wy=new E,Ay=new E,Ry=new E,Cy=new E,Py=new E,Iy=new E,Ly=new E;var Dy=new E;var Uy=new E,Ny=new nt,Fy=new nt;var By=new E,Oy=new Qe,ky=new Qe;var Hy=new E,zy=new E,Gy=new E;var Vy=new E,Wy=new zs;var Xy=new Vn;var jy=new E;function Au(i,e,t,n){let r=(function(s){switch(s){case Si:case Hh:return{byteLength:1,components:1};case Qs:case zh:case Zr:return{byteLength:2,components:1};case sc:case ac:return{byteLength:2,components:4};case Yr:case rc:case ni:return{byteLength:4,components:1};case Gh:case Vh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return i*e;case oc:case lc:return i*e/r.components*r.byteLength;case 1030:case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case ii:case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}})),typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function Pf(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function G0(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,s),l.length===0)i.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var ct={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Me={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},Ei={basic:{uniforms:pn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:pn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:pn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:pn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:pn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:pn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:pn([Me.points,Me.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:pn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:pn([Me.common,Me.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:pn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:pn([Me.sprite,Me.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:pn([Me.common,Me.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:pn([Me.lights,Me.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Ei.physical={uniforms:pn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var pc={r:0,b:0,g:0},es=new ti,V0=new nt;function W0(i,e,t,n,r,s,a){let o=new Qe(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function m(f){let _=f.isScene===!0?f.background:null;return _&&_.isTexture&&(_=(f.backgroundBlurriness>0?t:e).get(_)),_}function v(f,_){f.getRGB(pc,Eu(i)),n.buffers.color.setClear(pc.r,pc.g,pc.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(f,_=1){o.set(f),h=_,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(f){h=f,v(o,h)},render:function(f){let _=!1,g=m(f);g===null?v(o,h):g&&g.isColor&&(v(g,1),_=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(f,_){let g=m(_);g&&(g.isCubeTexture||g.mapping===ho)?(l===void 0&&(l=new X(new be(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Qr(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,b,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),es.copy(_.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(V0.makeRotationFromEuler(es)),l.material.toneMapped=Mt.getTransfer(g.colorSpace)!==Pt,u===g&&d===g.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),l.layers.enableAll(),f.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new X(new pt(2,2),new Cn({name:"BackgroundMaterial",uniforms:Qr(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=Mt.getTransfer(g.colorSpace)!==Pt,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function X0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,a=!1;function o(_){return i.bindVertexArray(_)}function c(_){return i.deleteVertexArray(_)}function l(_){let g=[],y=[],b=[];for(let w=0;w<t;w++)g[w]=0,y[w]=0,b[w]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:y,attributeDivisors:b,object:_,attributes:{},index:null}}function h(){let _=s.newAttributes;for(let g=0,y=_.length;g<y;g++)_[g]=0}function u(_){d(_,0)}function d(_,g){let y=s.newAttributes,b=s.enabledAttributes,w=s.attributeDivisors;y[_]=1,b[_]===0&&(i.enableVertexAttribArray(_),b[_]=1),w[_]!==g&&(i.vertexAttribDivisor(_,g),w[_]=g)}function p(){let _=s.newAttributes,g=s.enabledAttributes;for(let y=0,b=g.length;y<b;y++)g[y]!==_[y]&&(i.disableVertexAttribArray(y),g[y]=0)}function m(_,g,y,b,w,M,D){D===!0?i.vertexAttribIPointer(_,g,y,w,M):i.vertexAttribPointer(_,g,y,b,w,M)}function v(){f(),a=!0,s!==r&&(s=r,o(s.object))}function f(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(_,g,y,b,w){let M=!1,D=(function(H,I,W){let z=W.wireframe===!0,N=n[H.id];N===void 0&&(N={},n[H.id]=N);let Z=N[I.id];Z===void 0&&(Z={},N[I.id]=Z);let L=Z[z];return L===void 0&&(L=l(i.createVertexArray()),Z[z]=L),L})(b,y,g);s!==D&&(s=D,o(s.object)),M=(function(H,I,W,z){let N=s.attributes,Z=I.attributes,L=0,j=W.getAttributes();for(let te in j)if(j[te].location>=0){let le=N[te],oe=Z[te];if(oe===void 0&&(te==="instanceMatrix"&&H.instanceMatrix&&(oe=H.instanceMatrix),te==="instanceColor"&&H.instanceColor&&(oe=H.instanceColor)),le===void 0||le.attribute!==oe||oe&&le.data!==oe.data)return!0;L++}return s.attributesNum!==L||s.index!==z})(_,b,y,w),M&&(function(H,I,W,z){let N={},Z=I.attributes,L=0,j=W.getAttributes();for(let te in j)if(j[te].location>=0){let le=Z[te];le===void 0&&(te==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),te==="instanceColor"&&H.instanceColor&&(le=H.instanceColor));let oe={};oe.attribute=le,le&&le.data&&(oe.data=le.data),N[te]=oe,L++}s.attributes=N,s.attributesNum=L,s.index=z})(_,b,y,w),w!==null&&e.update(w,i.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(H,I,W,z){h();let N=z.attributes,Z=W.getAttributes(),L=I.defaultAttributeValues;for(let j in Z){let te=Z[j];if(te.location>=0){let le=N[j];if(le===void 0&&(j==="instanceMatrix"&&H.instanceMatrix&&(le=H.instanceMatrix),j==="instanceColor"&&H.instanceColor&&(le=H.instanceColor)),le!==void 0){let oe=le.normalized,_e=le.itemSize,he=e.get(le);if(he===void 0)continue;let xe=he.buffer,de=he.type,se=he.bytesPerElement,pe=de===i.INT||de===i.UNSIGNED_INT||le.gpuType===rc;if(le.isInterleavedBufferAttribute){let ge=le.data,Be=ge.stride,Ge=le.offset;if(ge.isInstancedInterleavedBuffer){for(let T=0;T<te.locationSize;T++)d(te.location+T,ge.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let T=0;T<te.locationSize;T++)u(te.location+T);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let T=0;T<te.locationSize;T++)m(te.location+T,_e/te.locationSize,de,oe,Be*se,(Ge+_e/te.locationSize*T)*se,pe)}else{if(le.isInstancedBufferAttribute){for(let ge=0;ge<te.locationSize;ge++)d(te.location+ge,le.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<te.locationSize;ge++)u(te.location+ge);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let ge=0;ge<te.locationSize;ge++)m(te.location+ge,_e/te.locationSize,de,oe,_e*se,_e/te.locationSize*ge*se,pe)}}else if(L!==void 0){let oe=L[j];if(oe!==void 0)switch(oe.length){case 2:i.vertexAttrib2fv(te.location,oe);break;case 3:i.vertexAttrib3fv(te.location,oe);break;case 4:i.vertexAttrib4fv(te.location,oe);break;default:i.vertexAttrib1fv(te.location,oe)}}}}p()})(_,g,y,b),w!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(w).buffer))},reset:v,resetDefaultState:f,dispose:function(){v();for(let _ in n){let g=n[_];for(let y in g){let b=g[y];for(let w in b)c(b[w].object),delete b[w];delete g[y]}delete n[_]}},releaseStatesOfGeometry:function(_){if(n[_.id]===void 0)return;let g=n[_.id];for(let y in g){let b=g[y];for(let w in b)c(b[w].object),delete b[w];delete g[y]}delete n[_.id]},releaseStatesOfProgram:function(_){for(let g in n){let y=n[g];if(y[_.id]===void 0)continue;let b=y[_.id];for(let w in b)c(b[w].object),delete b[w];delete y[_.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function j0(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)r(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function q0(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Ze("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===ii||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===Zr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==Si&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==ni&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function $0(i){let e=this,t=null,n=0,r=!1,s=!1,a=new pi,o=new at,c={value:null,needsUpdate:!1};function l(h,u,d,p){let m=h!==null?h.length:0,v=null;if(m!==0){if(v=c.value,p!==!0||v===null){let f=d+4*m,_=u.matrixWorldInverse;o.getNormalMatrix(_),(v===null||v.length<f)&&(v=new Float32Array(f));for(let g=0,y=d;g!==m;++g,y+=4)a.copy(h[g]).applyMatrix4(_,o),a.normal.toArray(v,y),v[y+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,m=h.clipIntersection,v=h.clipShadows,f=i.get(h);if(!r||p===null||p.length===0||s&&!v)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let _=s?0:n,g=4*_,y=f.clippingState||null;c.value=y,y=l(p,u,g,d);for(let b=0;b!==g;++b)y[b]=t[b];f.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}}}function Y0(i){let e=new WeakMap;function t(r,s){return s===tc?r.mapping=Ks:s===nc&&(r.mapping=qr),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===tc||s===nc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new gl(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var lf=[.125,.215,.35,.446,.526,.582],mo=20,go=new so,cf=new Qe,Ru=null,Cu=0,Pu=0,Iu=!1,Z0=new E,mc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=Z0}=s;Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=df(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=uf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ru,Cu,Pu),this._renderer.xr.enabled=Iu,e.scissorTest=!1,ta(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:Zr,format:ii,colorSpace:zr,depthBuffer:!1},r=hf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hf(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+lf.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let m=1/p;d>a-4?m=lf[d-a+4-1]:d===0&&(m=0),c.push(m);let v=1/(p-2),f=-v,_=1+v,g=[f,f,_,f,_,_,f,f,_,_,f,_],y=6,b=6,w=3,M=2,D=1,H=new Float32Array(w*b*y),I=new Float32Array(M*b*y),W=new Float32Array(D*b*y);for(let N=0;N<y;N++){let Z=N%3*2/3-1,L=N>2?0:-1,j=[Z,L,0,Z+2/3,L,0,Z+2/3,L+1,0,Z,L,0,Z+2/3,L+1,0,Z,L+1,0];H.set(j,w*b*N),I.set(g,M*b*N);let te=[N,N,N,N,N,N];W.set(te,D*b*N)}let z=new It;z.setAttribute("position",new yn(H,w)),z.setAttribute("uv",new yn(I,M)),z.setAttribute("faceIndex",new yn(W,D)),l.push(new X(z,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(mo),h=new E(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:mo,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new X(new It,e);this._renderer.compile(t,go)}_sceneToCubeUV(e,t,n,r,s){let a=new Jt(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(cf),l.toneMapping=ji,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new X(new be,new nn({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,m=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,m=!0):(p.color.copy(cf),m=!0);for(let f=0;f<6;f++){let _=f%3;_===0?(a.up.set(0,o[f],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[f],s.y,s.z)):_===1?(a.up.set(0,0,o[f]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[f],s.z)):(a.up.set(0,o[f],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[f]));let g=this._cubeSize;ta(r,_*g,f>2?g:0,g,g),l.setRenderTarget(r),m&&l.render(d,a),l.render(e,a)}l.toneMapping=u,l.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Ks||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=df()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=uf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;ta(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,go)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h)*(.05+.95*l),{_lodMax:d}=this,p=this._sizeLods[n],m=3*p*(n>d-4?n-d+4:0),v=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=d-t,ta(s,m,v,3*p,2*p),r.setRenderTarget(s),r.render(o,go),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-n,ta(e,m,v,3*p,2*p),r.setRenderTarget(e),r.render(o,go)}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=l;let u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,m=s/p,v=isFinite(s)?1+Math.floor(3*m):mo;v>mo&&Ze(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let f=[],_=0;for(let b=0;b<mo;++b){let w=b/m,M=Math.exp(-w*w/2);f.push(M),b===0?_+=M:b<v&&(_+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/_;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let y=this._sizeLods[r];ta(t,3*y*(r>g-4?r-g+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,go)}};function hf(i,e,t){let n=new yi(i,e,t);return n.texture.mapping=ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ta(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function uf(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function df(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function gc(){return`

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
	`}function J0(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===tc||s===nc,o=s===Ks||s===qr;if(a||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new mc(i)),c=a?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let m=0;m<p;m++)u[m]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new mc(i)),c=a?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function K0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Bs("WebGLRenderer: "+n+" extension not supported."),r}}}function Q0(i,e,t,n){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let f=0,_=v.length;f<_;f+=3){let g=v[f+0],y=v[f+1],b=v[f+2];l.push(g,y,y,b,b,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let f=0,_=v.length/3-1;f<_;f+=3){let g=f+0,y=f+1,b=f+2;l.push(g,y,y,b,b,g)}}}let p=new(Su(l)?ka:Oa)(l,1);p.version=d;let m=s.get(c);m&&e.remove(m),s.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function eg(i,e,t){let n,r,s;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function tg(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:lt("WebGLInfo: Unknown draw mode:",n)}}}}function ng(i,e,t){let n=new WeakMap,r=new bt;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let H=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",H)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],g=0;d===!0&&(g=1),p===!0&&(g=2),m===!0&&(g=3);let y=a.attributes.position.count*g,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*b*4*h),M=new Ba(w,y,b,h);M.type=ni,M.needsUpdate=!0;let D=4*g;for(let I=0;I<h;I++){let W=v[I],z=f[I],N=_[I],Z=y*b*4*I;for(let L=0;L<W.count;L++){let j=L*D;d===!0&&(r.fromBufferAttribute(W,L),w[Z+j+0]=r.x,w[Z+j+1]=r.y,w[Z+j+2]=r.z,w[Z+j+3]=0),p===!0&&(r.fromBufferAttribute(z,L),w[Z+j+4]=r.x,w[Z+j+5]=r.y,w[Z+j+6]=r.z,w[Z+j+7]=0),m===!0&&(r.fromBufferAttribute(N,L),w[Z+j+8]=r.x,w[Z+j+9]=r.y,w[Z+j+10]=r.z,w[Z+j+11]=N.itemSize===4?r.w:1)}}u={count:h,texture:M,size:new ue(y,b)},n.set(a,u),a.addEventListener("dispose",H)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function ig(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var If=new dn,pf=new ja(1,1),Lf=new Ba,Df=new fl,Uf=new Ha,ff=[],mf=[],gf=new Float32Array(16),vf=new Float32Array(9),yf=new Float32Array(4);function ra(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ff[r];if(s===void 0&&(s=new Float32Array(r),ff[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function en(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vc(i,e){let t=mf[e];t===void 0&&(t=new Int32Array(e),mf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2fv(this.addr,e),en(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;i.uniform3fv(this.addr,e),en(t,e)}}function og(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4fv(this.addr,e),en(t,e)}}function lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;yf.set(n),i.uniformMatrix2fv(this.addr,!1,yf),en(t,n)}}function cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;vf.set(n),i.uniformMatrix3fv(this.addr,!1,vf),en(t,n)}}function hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),en(t,e)}else{if(Qt(t,n))return;gf.set(n),i.uniformMatrix4fv(this.addr,!1,gf),en(t,n)}}function ug(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function dg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2iv(this.addr,e),en(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3iv(this.addr,e),en(t,e)}}function fg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4iv(this.addr,e),en(t,e)}}function mg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;i.uniform2uiv(this.addr,e),en(t,e)}}function vg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;i.uniform3uiv(this.addr,e),en(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;i.uniform4uiv(this.addr,e),en(t,e)}}function _g(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(pf.compareFunction=Mu,s=pf):s=If,t.setTexture2D(e||s,r)}function xg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Df,r)}function Mg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Uf,r)}function bg(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Lf,r)}function Sg(i,e){i.uniform1fv(this.addr,e)}function Eg(i,e){let t=ra(e,this.size,2);i.uniform2fv(this.addr,t)}function Tg(i,e){let t=ra(e,this.size,3);i.uniform3fv(this.addr,t)}function wg(i,e){let t=ra(e,this.size,4);i.uniform4fv(this.addr,t)}function Ag(i,e){let t=ra(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rg(i,e){let t=ra(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cg(i,e){let t=ra(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pg(i,e){i.uniform1iv(this.addr,e)}function Ig(i,e){i.uniform2iv(this.addr,e)}function Lg(i,e){i.uniform3iv(this.addr,e)}function Dg(i,e){i.uniform4iv(this.addr,e)}function Ug(i,e){i.uniform1uiv(this.addr,e)}function Ng(i,e){i.uniform2uiv(this.addr,e)}function Fg(i,e){i.uniform3uiv(this.addr,e)}function Bg(i,e){i.uniform4uiv(this.addr,e)}function Og(i,e,t){let n=this.cache,r=e.length,s=vc(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||If,s[a])}function kg(i,e,t){let n=this.cache,r=e.length,s=vc(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Df,s[a])}function Hg(i,e,t){let n=this.cache,r=e.length,s=vc(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Uf,s[a])}function zg(i,e,t){let n=this.cache,r=e.length,s=vc(t,r);Qt(n,s)||(i.uniform1iv(this.addr,s),en(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Lf,s[a])}var Du=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return rg;case 35664:return sg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return pg;case 35669:case 35673:return fg;case 5125:return mg;case 36294:return gg;case 36295:return vg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return _g;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return Mg;case 36289:case 36303:case 36311:case 36292:return bg}})(t.type)}},Uu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return Sg;case 35664:return Eg;case 35665:return Tg;case 35666:return wg;case 35674:return Ag;case 35675:return Rg;case 35676:return Cg;case 5124:case 35670:return Pg;case 35667:case 35671:return Ig;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Ng;case 36295:return Fg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return kg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return zg}})(t.type)}},Nu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function _f(i,e){i.seq.push(e),i.map[e.id]=e}function Gg(i,e,t){let n=i.name,r=n.length;for(Lu.lastIndex=0;;){let s=Lu.exec(n),a=Lu.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){_f(t,l===void 0?new Du(o,i,e):new Uu(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new Nu(o),_f(t,h)),t=h}}}var na=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);Gg(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function xf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Vg=0,Mf=new at;function bf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let m=p+1;h.push(`${m===c?">":" "} ${m}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function Wg(i,e){let t=(function(n){Mt._getMatrix(Mf,Mt.workingColorSpace,n);let r=`mat3( ${Mf.elements.map(s=>s.toFixed(4))} )`;switch(Mt.getTransfer(n)){case Ua:return[r,"LinearTransferOETF"];case Pt:return[r,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xg(i,e){let t;switch(e){case Dp:t="Linear";break;case Up:t="Reinhard";break;case Np:t="Cineon";break;case Fp:t="ACESFilmic";break;case Op:t="AgX";break;case Js:t="Neutral";break;case Bp:t="Custom";break;default:Ze("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var fc=new E;function jg(){return Mt.getLuminanceCoefficients(fc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${fc.x.toFixed(4)}, ${fc.y.toFixed(4)}, ${fc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vo(i){return i!==""}function Sf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ef(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var qg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fu(i){return i.replace(qg,Yg)}var $g=new Map;function Yg(i,e){let t=ct[e];if(t===void 0){let n=$g.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ct[n],Ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return Fu(t)}var Zg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tf(i){return i.replace(Zg,Jg)}function Jg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Kg(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(z){let N="SHADOWMAP_TYPE_BASIC";return z.shadowMapType===Fh?N="SHADOWMAP_TYPE_PCF":z.shadowMapType===ql?N="SHADOWMAP_TYPE_PCF_SOFT":z.shadowMapType===bi&&(N="SHADOWMAP_TYPE_VSM"),N})(t),l=(function(z){let N="ENVMAP_TYPE_CUBE";if(z.envMap)switch(z.envMapMode){case Ks:case qr:N="ENVMAP_TYPE_CUBE";break;case ho:N="ENVMAP_TYPE_CUBE_UV"}return N})(t),h=(function(z){let N="ENVMAP_MODE_REFLECTION";return z.envMap&&z.envMapMode===qr&&(N="ENVMAP_MODE_REFRACTION"),N})(t),u=(function(z){let N="ENVMAP_BLENDING_NONE";if(z.envMap)switch(z.combine){case Pp:N="ENVMAP_BLENDING_MULTIPLY";break;case Ip:N="ENVMAP_BLENDING_MIX";break;case Lp:N="ENVMAP_BLENDING_ADD"}return N})(t),d=(function(z){let N=z.envMapCubeUVHeight;if(N===null)return null;let Z=Math.log2(N)-2,L=1/N;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:L,maxMip:Z}})(t),p=(function(z){return[z.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",z.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vo).join(`
`)})(t),m=(function(z){let N=[];for(let Z in z){let L=z[Z];L!==!1&&N.push("#define "+Z+" "+L)}return N.join(`
`)})(s),v=r.createProgram(),f,_,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vo).join(`
`),f.length>0&&(f+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(vo).join(`
`),_.length>0&&(_+=`
`)):(f=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vo).join(`
`),_=[wf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?ct.tonemapping_pars_fragment:"",t.toneMapping!==ji?Xg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,Wg("linearToOutputTexel",t.outputColorSpace),jg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vo).join(`
`)),a=Fu(a),a=Sf(a,t),a=Ef(a,t),o=Fu(o),o=Sf(o,t),o=Ef(o,t),a=Tf(a),o=Tf(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,_=["#define varying in",t.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let y=g+f+a,b=g+_+o,w=xf(r,r.VERTEX_SHADER,y),M=xf(r,r.FRAGMENT_SHADER,b);function D(z){if(i.debug.checkShaderErrors){let N=r.getProgramInfoLog(v)||"",Z=r.getShaderInfoLog(w)||"",L=r.getShaderInfoLog(M)||"",j=N.trim(),te=Z.trim(),le=L.trim(),oe=!0,_e=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,w,M);else{let he=bf(r,w,"vertex"),xe=bf(r,M,"fragment");lt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+he+`
`+xe)}else j!==""?Ze("WebGLProgram: Program Info Log:",j):te!==""&&le!==""||(_e=!1);_e&&(z.diagnostics={runnable:oe,programLog:j,vertexShader:{log:te,prefix:f},fragmentShader:{log:le,prefix:_}})}r.deleteShader(w),r.deleteShader(M),H=new na(r,v),I=(function(N,Z){let L={},j=N.getProgramParameter(Z,N.ACTIVE_ATTRIBUTES);for(let te=0;te<j;te++){let le=N.getActiveAttrib(Z,te),oe=le.name,_e=1;le.type===N.FLOAT_MAT2&&(_e=2),le.type===N.FLOAT_MAT3&&(_e=3),le.type===N.FLOAT_MAT4&&(_e=4),L[oe]={type:le.type,location:N.getAttribLocation(Z,oe),locationSize:_e}}return L})(r,v)}let H,I;r.attachShader(v,w),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),this.getUniforms=function(){return H===void 0&&D(this),H},this.getAttributes=function(){return I===void 0&&D(this),I};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=r.getProgramParameter(v,37297)),W},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=M,this}var Qg=0,Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ou(e),t.set(e,n)),n}},Ou=class{constructor(e){this.id=Qg++,this.code=e,this.usedTimes=0}};function e1(i,e,t,n,r,s,a){let o=new Hs,c=new Bu,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,_,g,y,b){let w=y.fog,M=b.geometry,D=f.isMeshStandardMaterial?y.environment:null,H=(f.isMeshStandardMaterial?t:e).get(f.envMap||D),I=H&&H.mapping===ho?H.image.height:null,W=m[f.type];f.precision!==null&&(p=r.getMaxPrecision(f.precision),p!==f.precision&&Ze("WebGLProgram.getParameters:",f.precision,"not supported, using",p,"instead."));let z=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,N=z!==void 0?z.length:0,Z,L,j,te,le=0;if(M.morphAttributes.position!==void 0&&(le=1),M.morphAttributes.normal!==void 0&&(le=2),M.morphAttributes.color!==void 0&&(le=3),W){let B=Ei[W];Z=B.vertexShader,L=B.fragmentShader}else Z=f.vertexShader,L=f.fragmentShader,c.update(f),j=c.getVertexShaderID(f),te=c.getFragmentShaderID(f);let oe=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),he=b.isInstancedMesh===!0,xe=b.isBatchedMesh===!0,de=!!f.map,se=!!f.matcap,pe=!!H,ge=!!f.aoMap,Be=!!f.lightMap,Ge=!!f.bumpMap,T=!!f.normalMap,S=!!f.displacementMap,V=!!f.emissiveMap,U=!!f.metalnessMap,x=!!f.roughnessMap,P=f.anisotropy>0,G=f.clearcoat>0,O=f.dispersion>0,ne=f.iridescence>0,q=f.sheen>0,K=f.transmission>0,Q=P&&!!f.anisotropyMap,ce=G&&!!f.clearcoatMap,fe=G&&!!f.clearcoatNormalMap,Ae=G&&!!f.clearcoatRoughnessMap,Ue=ne&&!!f.iridescenceMap,$e=ne&&!!f.iridescenceThicknessMap,tt=q&&!!f.sheenColorMap,rt=q&&!!f.sheenRoughnessMap,mt=!!f.specularMap,Le=!!f.specularColorMap,We=!!f.specularIntensityMap,ut=K&&!!f.transmissionMap,wt=K&&!!f.thicknessMap,Te=!!f.gradientMap,gt=!!f.alphaMap,_t=f.alphaTest>0,On=!!f.alphaHash,sn=!!f.extensions,kt=ji;f.toneMapped&&(oe!==null&&oe.isXRRenderTarget!==!0||(kt=i.toneMapping));let Ht={shaderID:W,shaderType:f.type,shaderName:f.name,vertexShader:Z,fragmentShader:L,defines:f.defines,customVertexShaderID:j,customFragmentShaderID:te,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:p,batching:xe,batchingColor:xe&&b._colorsTexture!==null,instancing:he,instancingColor:he&&b.instanceColor!==null,instancingMorph:he&&b.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:zr,alphaToCoverage:!!f.alphaToCoverage,map:de,matcap:se,envMap:pe,envMapMode:pe&&H.mapping,envMapCubeUVHeight:I,aoMap:ge,lightMap:Be,bumpMap:Ge,normalMap:T,displacementMap:d&&S,emissiveMap:V,normalMapObjectSpace:T&&f.normalMapType===Wp,normalMapTangentSpace:T&&f.normalMapType===Vp,metalnessMap:U,roughnessMap:x,anisotropy:P,anisotropyMap:Q,clearcoat:G,clearcoatMap:ce,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ae,dispersion:O,iridescence:ne,iridescenceMap:Ue,iridescenceThicknessMap:$e,sheen:q,sheenColorMap:tt,sheenRoughnessMap:rt,specularMap:mt,specularColorMap:Le,specularIntensityMap:We,transmission:K,transmissionMap:ut,thicknessMap:wt,gradientMap:Te,opaque:f.transparent===!1&&f.blending===oo&&f.alphaToCoverage===!1,alphaMap:gt,alphaTest:_t,alphaHash:On,combine:f.combine,mapUv:de&&v(f.map.channel),aoMapUv:ge&&v(f.aoMap.channel),lightMapUv:Be&&v(f.lightMap.channel),bumpMapUv:Ge&&v(f.bumpMap.channel),normalMapUv:T&&v(f.normalMap.channel),displacementMapUv:S&&v(f.displacementMap.channel),emissiveMapUv:V&&v(f.emissiveMap.channel),metalnessMapUv:U&&v(f.metalnessMap.channel),roughnessMapUv:x&&v(f.roughnessMap.channel),anisotropyMapUv:Q&&v(f.anisotropyMap.channel),clearcoatMapUv:ce&&v(f.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&v(f.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&v(f.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&v(f.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&v(f.sheenColorMap.channel),sheenRoughnessMapUv:rt&&v(f.sheenRoughnessMap.channel),specularMapUv:mt&&v(f.specularMap.channel),specularColorMapUv:Le&&v(f.specularColorMap.channel),specularIntensityMapUv:We&&v(f.specularIntensityMap.channel),transmissionMapUv:ut&&v(f.transmissionMap.channel),thicknessMapUv:wt&&v(f.thicknessMap.channel),alphaMapUv:gt&&v(f.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(T||P),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!M.attributes.uv&&(de||gt),fog:!!w,useFog:f.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:f.flatShading===!0&&f.wireframe===!1,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:b.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:le,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:f.dithering,shadowMapEnabled:i.shadowMap.enabled&&g.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:de&&f.map.isVideoTexture===!0&&Mt.getTransfer(f.map.colorSpace)===Pt,decodeVideoTextureEmissive:V&&f.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(f.emissiveMap.colorSpace)===Pt,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===St,flipSided:f.side===Mn,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionClipCullDistance:sn&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(sn&&f.extensions.multiDraw===!0||xe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht},getProgramCacheKey:function(f){let _=[];if(f.shaderID?_.push(f.shaderID):(_.push(f.customVertexShaderID),_.push(f.customFragmentShaderID)),f.defines!==void 0)for(let g in f.defines)_.push(g),_.push(f.defines[g]);return f.isRawShaderMaterial===!1&&((function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)})(_,f),(function(g,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),g.push(o.mask)})(_,f),_.push(i.outputColorSpace)),_.push(f.customProgramCacheKey),_.join()},getUniforms:function(f){let _=m[f.type],g;if(_){let y=Ei[_];g=tf.clone(y.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,_){let g;for(let y=0,b=h.length;y<b;y++){let w=h[y];if(w.cacheKey===_){g=w,++g.usedTimes;break}}return g===void 0&&(g=new Kg(i,_,f,s),h.push(g)),g},releaseProgram:function(f){if(--f.usedTimes===0){let _=h.indexOf(f);h[_]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){c.remove(f)},programs:h,dispose:function(){c.dispose()}}}function t1(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function n1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Af(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rf(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||n1),n.length>1&&n.sort(o||Af),r.length>1&&r.sort(o||Af)}}}function i1(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new Rf,i.set(e,[r])):t>=n.length?(r=new Rf,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function r1(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new Qe};break;case"SpotLight":t={position:new E,direction:new E,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new E,halfWidth:new E,halfHeight:new E}}return i[e.id]=t,t}}}var s1=0;function a1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function o1(i){let e=new r1,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new E);let r=new E,s=new nt,a=new nt;return{setup:function(o){let c=0,l=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,d=0,p=0,m=0,v=0,f=0,_=0,g=0,y=0,b=0,w=0;o.sort(a1);for(let D=0,H=o.length;D<H;D++){let I=o[D],W=I.color,z=I.intensity,N=I.distance,Z=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)c+=W.r*z,l+=W.g*z,h+=W.b*z;else if(I.isLightProbe){for(let L=0;L<9;L++)n.probe[L].addScaledVector(I.sh.coefficients[L],z);w++}else if(I.isDirectionalLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.directionalShadow[u]=te,n.directionalShadowMap[u]=Z,n.directionalShadowMatrix[u]=I.shadow.matrix,f++}n.directional[u]=L,u++}else if(I.isSpotLight){let L=e.get(I);L.position.setFromMatrixPosition(I.matrixWorld),L.color.copy(W).multiplyScalar(z),L.distance=N,L.coneCos=Math.cos(I.angle),L.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),L.decay=I.decay,n.spot[p]=L;let j=I.shadow;if(I.map&&(n.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[p]=j.matrix,I.castShadow){let te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,n.spotShadow[p]=te,n.spotShadowMap[p]=Z,g++}p++}else if(I.isRectAreaLight){let L=e.get(I);L.color.copy(W).multiplyScalar(z),L.halfWidth.set(.5*I.width,0,0),L.halfHeight.set(0,.5*I.height,0),n.rectArea[m]=L,m++}else if(I.isPointLight){let L=e.get(I);if(L.color.copy(I.color).multiplyScalar(I.intensity),L.distance=I.distance,L.decay=I.decay,I.castShadow){let j=I.shadow,te=t.get(I);te.shadowIntensity=j.intensity,te.shadowBias=j.bias,te.shadowNormalBias=j.normalBias,te.shadowRadius=j.radius,te.shadowMapSize=j.mapSize,te.shadowCameraNear=j.camera.near,te.shadowCameraFar=j.camera.far,n.pointShadow[d]=te,n.pointShadowMap[d]=Z,n.pointShadowMatrix[d]=I.shadow.matrix,_++}n.point[d]=L,d++}else if(I.isHemisphereLight){let L=e.get(I);L.skyColor.copy(I.color).multiplyScalar(z),L.groundColor.copy(I.groundColor).multiplyScalar(z),n.hemi[v]=L,v++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let M=n.hash;M.directionalLength===u&&M.pointLength===d&&M.spotLength===p&&M.rectAreaLength===m&&M.hemiLength===v&&M.numDirectionalShadows===f&&M.numPointShadows===_&&M.numSpotShadows===g&&M.numSpotMaps===y&&M.numLightProbes===w||(n.directional.length=u,n.spot.length=p,n.rectArea.length=m,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=f,n.directionalShadowMap.length=f,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=f,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=g+y-b,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,M.directionalLength=u,M.pointLength=d,M.spotLength=p,M.rectAreaLength=m,M.hemiLength=v,M.numDirectionalShadows=f,M.numPointShadows=_,M.numSpotShadows=g,M.numSpotMaps=y,M.numLightProbes=w,n.version=s1++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,m=c.matrixWorldInverse;for(let v=0,f=o.length;v<f;v++){let _=o[v];if(_.isDirectionalLight){let g=n.directional[l];g.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),l++}else if(_.isSpotLight){let g=n.spot[u];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(m),g.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(m),u++}else if(_.isRectAreaLight){let g=n.rectArea[d];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(m),a.identity(),s.copy(_.matrixWorld),s.premultiply(m),a.extractRotation(s),g.halfWidth.set(.5*_.width,0,0),g.halfHeight.set(0,.5*_.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(_.isPointLight){let g=n.point[h];g.position.setFromMatrixPosition(_.matrixWorld),g.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){let g=n.hemi[p];g.direction.setFromMatrixPosition(_.matrixWorld),g.direction.transformDirection(m),p++}}},state:n}}function Cf(i){let e=new o1(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function l1(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new Cf(i),e.set(t,[s])):n>=r.length?(s=new Cf(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}function c1(i,e,t){let n=new mr,r=new ue,s=new ue,a=new bt,o=new Ul({depthPacking:Gp}),c=new Nl,l={},h=t.maxTextureSize,u={[Ys]:Mn,[Mn]:Ys,[St]:St},d=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new It;m.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new X(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let _=this.type;function g(M,D){let H=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new yi(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(D,null,H,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(D,null,H,p,v,null)}function y(M,D,H,I){let W=null,z=H.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z!==void 0)W=z;else if(W=H.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let N=W.uuid,Z=D.uuid,L=l[N];L===void 0&&(L={},l[N]=L);let j=L[Z];j===void 0&&(j=W.clone(),L[Z]=j,D.addEventListener("dispose",w)),W=j}return W.visible=D.visible,W.wireframe=D.wireframe,W.side=I===bi?D.shadowSide!==null?D.shadowSide:D.side:D.shadowSide!==null?D.shadowSide:u[D.side],W.alphaMap=D.alphaMap,W.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,W.map=D.map,W.clipShadows=D.clipShadows,W.clippingPlanes=D.clippingPlanes,W.clipIntersection=D.clipIntersection,W.displacementMap=D.displacementMap,W.displacementScale=D.displacementScale,W.displacementBias=D.displacementBias,W.wireframeLinewidth=D.wireframeLinewidth,W.linewidth=D.linewidth,H.isPointLight===!0&&W.isMeshDistanceMaterial===!0&&(i.properties.get(W).light=H),W}function b(M,D,H,I,W){if(M.visible===!1)return;if(M.layers.test(D.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&W===bi)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld);let N=e.update(M),Z=M.material;if(Array.isArray(Z)){let L=N.groups;for(let j=0,te=L.length;j<te;j++){let le=L[j],oe=Z[le.materialIndex];if(oe&&oe.visible){let _e=y(M,oe,I,W);M.onBeforeShadow(i,M,D,H,N,_e,le),i.renderBufferDirect(H,null,N,_e,M,le),M.onAfterShadow(i,M,D,H,N,_e,le)}}}else if(Z.visible){let L=y(M,Z,I,W);M.onBeforeShadow(i,M,D,H,N,L,null),i.renderBufferDirect(H,null,N,L,M,null),M.onAfterShadow(i,M,D,H,N,L,null)}}let z=M.children;for(let N=0,Z=z.length;N<Z;N++)b(z[N],D,H,I,W)}function w(M){M.target.removeEventListener("dispose",w);for(let D in l){let H=l[D],I=M.target.uuid;I in H&&(H[I].dispose(),delete H[I])}}this.render=function(M,D,H){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||M.length===0)return;let I=i.getRenderTarget(),W=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Xi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let Z=_!==bi&&this.type===bi,L=_===bi&&this.type!==bi;for(let j=0,te=M.length;j<te;j++){let le=M[j],oe=le.shadow;if(oe===void 0){Ze("WebGLShadowMap:",le,"has no shadow.");continue}if(oe.autoUpdate===!1&&oe.needsUpdate===!1)continue;r.copy(oe.mapSize);let _e=oe.getFrameExtents();if(r.multiply(_e),s.copy(oe.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/_e.x),r.x=s.x*_e.x,oe.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/_e.y),r.y=s.y*_e.y,oe.mapSize.y=s.y)),oe.map===null||Z===!0||L===!0){let xe=this.type!==bi?{minFilter:vi,magFilter:vi}:{};oe.map!==null&&oe.map.dispose(),oe.map=new yi(r.x,r.y,xe),oe.map.texture.name=le.name+".shadowMap",oe.camera.updateProjectionMatrix()}i.setRenderTarget(oe.map),i.clear();let he=oe.getViewportCount();for(let xe=0;xe<he;xe++){let de=oe.getViewport(xe);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),N.viewport(a),oe.updateMatrices(le,xe),n=oe.getFrustum(),b(D,H,oe.camera,le,this.type)}oe.isPointLightShadow!==!0&&this.type===bi&&g(oe,H),oe.needsUpdate=!1}_=this.type,f.needsUpdate=!1,i.setRenderTarget(I,W,z)}}var h1={[$l]:Yl,[Zl]:Ql,[Jl]:ec,[co]:Kl,[Yl]:$l,[Ql]:Zl,[ec]:Jl,[Kl]:co};function u1(i,e){let t=new function(){let x=!1,P=new bt,G=null,O=new bt(0,0,0,0);return{setMask:function(ne){G===ne||x||(i.colorMask(ne,ne,ne,ne),G=ne)},setLocked:function(ne){x=ne},setClear:function(ne,q,K,Q,ce){ce===!0&&(ne*=Q,q*=Q,K*=Q),P.set(ne,q,K,Q),O.equals(P)===!1&&(i.clearColor(ne,q,K,Q),O.copy(P))},reset:function(){x=!1,G=null,O.set(-1,0,0,0)}}},n=new function(){let x=!1,P=!1,G=null,O=null,ne=null;return{setReversed:function(q){if(P!==q){let K=e.get("EXT_clip_control");q?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),P=q;let Q=ne;ne=null,this.setClear(Q)}},getReversed:function(){return P},setTest:function(q){q?pe(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(q){G===q||x||(i.depthMask(q),G=q)},setFunc:function(q){if(P&&(q=h1[q]),O!==q){switch(q){case $l:i.depthFunc(i.NEVER);break;case Yl:i.depthFunc(i.ALWAYS);break;case Zl:i.depthFunc(i.LESS);break;case co:i.depthFunc(i.LEQUAL);break;case Jl:i.depthFunc(i.EQUAL);break;case Kl:i.depthFunc(i.GEQUAL);break;case Ql:i.depthFunc(i.GREATER);break;case ec:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=q}},setLocked:function(q){x=q},setClear:function(q){ne!==q&&(P&&(q=1-q),i.clearDepth(q),ne=q)},reset:function(){x=!1,G=null,O=null,ne=null,P=!1}}},r=new function(){let x=!1,P=null,G=null,O=null,ne=null,q=null,K=null,Q=null,ce=null;return{setTest:function(fe){x||(fe?pe(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(fe){P===fe||x||(i.stencilMask(fe),P=fe)},setFunc:function(fe,Ae,Ue){G===fe&&O===Ae&&ne===Ue||(i.stencilFunc(fe,Ae,Ue),G=fe,O=Ae,ne=Ue)},setOp:function(fe,Ae,Ue){q===fe&&K===Ae&&Q===Ue||(i.stencilOp(fe,Ae,Ue),q=fe,K=Ae,Q=Ue)},setLocked:function(fe){x=fe},setClear:function(fe){ce!==fe&&(i.clearStencil(fe),ce=fe)},reset:function(){x=!1,P=null,G=null,O=null,ne=null,q=null,K=null,Q=null,ce=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,m=null,v=null,f=null,_=null,g=null,y=null,b=new Qe(0,0,0),w=0,M=!1,D=null,H=null,I=null,W=null,z=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,L=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(j)[1]),Z=L>=1):j.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),Z=L>=2);let te=null,le={},oe=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),he=new bt().fromArray(oe),xe=new bt().fromArray(_e);function de(x,P,G,O){let ne=new Uint8Array(4),q=i.createTexture();i.bindTexture(x,q),i.texParameteri(x,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(x,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let K=0;K<G;K++)x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?i.texImage3D(P,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(P+K,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return q}let se={};function pe(x){o[x]!==!0&&(i.enable(x),o[x]=!0)}function ge(x){o[x]!==!1&&(i.disable(x),o[x]=!1)}se[i.TEXTURE_2D]=de(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=de(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=de(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=de(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),pe(i.DEPTH_TEST),n.setFunc(co),S(!1),V(Nh),pe(i.CULL_FACE),T(Xi);let Be={[Zs]:i.FUNC_ADD,[up]:i.FUNC_SUBTRACT,[dp]:i.FUNC_REVERSE_SUBTRACT};Be[pp]=i.MIN,Be[fp]=i.MAX;let Ge={[mp]:i.ZERO,[gp]:i.ONE,[vp]:i.SRC_COLOR,[_p]:i.SRC_ALPHA,[Tp]:i.SRC_ALPHA_SATURATE,[Sp]:i.DST_COLOR,[Mp]:i.DST_ALPHA,[yp]:i.ONE_MINUS_SRC_COLOR,[xp]:i.ONE_MINUS_SRC_ALPHA,[Ep]:i.ONE_MINUS_DST_COLOR,[bp]:i.ONE_MINUS_DST_ALPHA,[wp]:i.CONSTANT_COLOR,[Ap]:i.ONE_MINUS_CONSTANT_COLOR,[Rp]:i.CONSTANT_ALPHA,[Cp]:i.ONE_MINUS_CONSTANT_ALPHA};function T(x,P,G,O,ne,q,K,Q,ce,fe){if(x!==Xi){if(d===!1&&(pe(i.BLEND),d=!0),x===hp)ne=ne||P,q=q||G,K=K||O,P===m&&ne===_||(i.blendEquationSeparate(Be[P],Be[ne]),m=P,_=ne),G===v&&O===f&&q===g&&K===y||(i.blendFuncSeparate(Ge[G],Ge[O],Ge[q],Ge[K]),v=G,f=O,g=q,y=K),Q.equals(b)!==!1&&ce===w||(i.blendColor(Q.r,Q.g,Q.b,ce),b.copy(Q),w=ce),p=x,M=!1;else if(x!==p||fe!==M){if(m===Zs&&_===Zs||(i.blendEquation(i.FUNC_ADD),m=Zs,_=Zs),fe)switch(x){case oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFunc(i.ONE,i.ONE);break;case Bh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:lt("WebGLState: Invalid blending: ",x)}else switch(x){case oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case lo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Bh:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oh:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",x)}v=null,f=null,g=null,y=null,b.set(0,0,0),w=0,p=x,M=fe}}else d===!0&&(ge(i.BLEND),d=!1)}function S(x){D!==x&&(x?i.frontFace(i.CW):i.frontFace(i.CCW),D=x)}function V(x){x!==lp?(pe(i.CULL_FACE),x!==H&&(x===Nh?i.cullFace(i.BACK):x===cp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),H=x}function U(x,P,G){x?(pe(i.POLYGON_OFFSET_FILL),W===P&&z===G||(i.polygonOffset(P,G),W=P,z=G)):ge(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:pe,disable:ge,bindFramebuffer:function(x,P){return c[x]!==P&&(i.bindFramebuffer(x,P),c[x]=P,x===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=P),x===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=P),!0)},drawBuffers:function(x,P){let G=h,O=!1;if(x){G=l.get(P),G===void 0&&(G=[],l.set(P,G));let ne=x.textures;if(G.length!==ne.length||G[0]!==i.COLOR_ATTACHMENT0){for(let q=0,K=ne.length;q<K;q++)G[q]=i.COLOR_ATTACHMENT0+q;G.length=ne.length,O=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,O=!0);O&&i.drawBuffers(G)},useProgram:function(x){return u!==x&&(i.useProgram(x),u=x,!0)},setBlending:T,setMaterial:function(x,P){x.side===St?ge(i.CULL_FACE):pe(i.CULL_FACE);let G=x.side===Mn;P&&(G=!G),S(G),x.blending===oo&&x.transparent===!1?T(Xi):T(x.blending,x.blendEquation,x.blendSrc,x.blendDst,x.blendEquationAlpha,x.blendSrcAlpha,x.blendDstAlpha,x.blendColor,x.blendAlpha,x.premultipliedAlpha),n.setFunc(x.depthFunc),n.setTest(x.depthTest),n.setMask(x.depthWrite),t.setMask(x.colorWrite);let O=x.stencilWrite;r.setTest(O),O&&(r.setMask(x.stencilWriteMask),r.setFunc(x.stencilFunc,x.stencilRef,x.stencilFuncMask),r.setOp(x.stencilFail,x.stencilZFail,x.stencilZPass)),U(x.polygonOffset,x.polygonOffsetFactor,x.polygonOffsetUnits),x.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:S,setCullFace:V,setLineWidth:function(x){x!==I&&(Z&&i.lineWidth(x),I=x)},setPolygonOffset:U,setScissorTest:function(x){x?pe(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)},activeTexture:function(x){x===void 0&&(x=i.TEXTURE0+N-1),te!==x&&(i.activeTexture(x),te=x)},bindTexture:function(x,P,G){G===void 0&&(G=te===null?i.TEXTURE0+N-1:te);let O=le[G];O===void 0&&(O={type:void 0,texture:void 0},le[G]=O),O.type===x&&O.texture===P||(te!==G&&(i.activeTexture(G),te=G),i.bindTexture(x,P||se[x]),O.type=x,O.texture=P)},unbindTexture:function(){let x=le[te];x!==void 0&&x.type!==void 0&&(i.bindTexture(x.type,null),x.type=void 0,x.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(x){x("WebGLState:",x)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(x){x("WebGLState:",x)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(x){x("WebGLState:",x)}},updateUBOMapping:function(x,P){let G=a.get(P);G===void 0&&(G=new WeakMap,a.set(P,G));let O=G.get(x);O===void 0&&(O=i.getUniformBlockIndex(P,x.name),G.set(x,O))},uniformBlockBinding:function(x,P){let G=a.get(P).get(x);s.get(P)!==G&&(i.uniformBlockBinding(P,G,x.__bindingPointIndex),s.set(P,G))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(x){x("WebGLState:",x)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(x){x("WebGLState:",x)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(x){x("WebGLState:",x)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(x){x("WebGLState:",x)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(x){x("WebGLState:",x)}},scissor:function(x){he.equals(x)===!1&&(i.scissor(x.x,x.y,x.z,x.w),he.copy(x))},viewport:function(x){xe.equals(x)===!1&&(i.viewport(x.x,x.y,x.z,x.w),xe.copy(x))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},te=null,le={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,m=null,v=null,f=null,_=null,g=null,y=null,b=new Qe(0,0,0),w=0,M=!1,D=null,H=null,I=null,W=null,z=null,he.set(0,0,i.canvas.width,i.canvas.height),xe.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function d1(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new ue,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,S){return p?new OffscreenCanvas(T,S):Ns("canvas")}function v(T,S,V){let U=1,x=Ge(T);if((x.width>V||x.height>V)&&(U=V/Math.max(x.width,x.height)),U<1){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let P=Math.floor(U*x.width),G=Math.floor(U*x.height);u===void 0&&(u=m(P,G));let O=S?m(P,G):u;return O.width=P,O.height=G,O.getContext("2d").drawImage(T,0,0,P,G),Ze("WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+P+"x"+G+")."),O}return"data"in T&&Ze("WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),T}return T}function f(T){return T.generateMipmaps}function _(T){i.generateMipmap(T)}function g(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(T,S,V,U,x=!1){if(T!==null){if(i[T]!==void 0)return i[T];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let P=S;if(S===i.RED&&(V===i.FLOAT&&(P=i.R32F),V===i.HALF_FLOAT&&(P=i.R16F),V===i.UNSIGNED_BYTE&&(P=i.R8)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(P=i.R8UI),V===i.UNSIGNED_SHORT&&(P=i.R16UI),V===i.UNSIGNED_INT&&(P=i.R32UI),V===i.BYTE&&(P=i.R8I),V===i.SHORT&&(P=i.R16I),V===i.INT&&(P=i.R32I)),S===i.RG&&(V===i.FLOAT&&(P=i.RG32F),V===i.HALF_FLOAT&&(P=i.RG16F),V===i.UNSIGNED_BYTE&&(P=i.RG8)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(P=i.RG8UI),V===i.UNSIGNED_SHORT&&(P=i.RG16UI),V===i.UNSIGNED_INT&&(P=i.RG32UI),V===i.BYTE&&(P=i.RG8I),V===i.SHORT&&(P=i.RG16I),V===i.INT&&(P=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(P=i.RGB8UI),V===i.UNSIGNED_SHORT&&(P=i.RGB16UI),V===i.UNSIGNED_INT&&(P=i.RGB32UI),V===i.BYTE&&(P=i.RGB8I),V===i.SHORT&&(P=i.RGB16I),V===i.INT&&(P=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(P=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(P=i.RGBA16UI),V===i.UNSIGNED_INT&&(P=i.RGBA32UI),V===i.BYTE&&(P=i.RGBA8I),V===i.SHORT&&(P=i.RGBA16I),V===i.INT&&(P=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(P=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(P=i.R11F_G11F_B10F)),S===i.RGBA){let G=x?Ua:Mt.getTransfer(U);V===i.FLOAT&&(P=i.RGBA32F),V===i.HALF_FLOAT&&(P=i.RGBA16F),V===i.UNSIGNED_BYTE&&(P=G===Pt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(P=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(P=i.RGB5_A1)}return P!==i.R16F&&P!==i.R32F&&P!==i.RG16F&&P!==i.RG32F&&P!==i.RGBA16F&&P!==i.RGBA32F||e.get("EXT_color_buffer_float"),P}function b(T,S){let V;return T?S===null||S===Yr||S===ea?V=i.DEPTH24_STENCIL8:S===ni?V=i.DEPTH32F_STENCIL8:S===Qs&&(V=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yr||S===ea?V=i.DEPTH_COMPONENT24:S===ni?V=i.DEPTH_COMPONENT32F:S===Qs&&(V=i.DEPTH_COMPONENT16),V}function w(T,S){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==vi&&T.minFilter!==Gn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function M(T){let S=T.target;S.removeEventListener("dispose",M),(function(V){let U=n.get(V);if(U.__webglInit===void 0)return;let x=V.source,P=d.get(x);if(P){let G=P[U.__cacheKey];G.usedTimes--,G.usedTimes===0&&H(V),Object.keys(P).length===0&&d.delete(x)}n.remove(V)})(S),S.isVideoTexture&&h.delete(S)}function D(T){let S=T.target;S.removeEventListener("dispose",D),(function(V){let U=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let P=0;P<6;P++){if(Array.isArray(U.__webglFramebuffer[P]))for(let G=0;G<U.__webglFramebuffer[P].length;G++)i.deleteFramebuffer(U.__webglFramebuffer[P][G]);else i.deleteFramebuffer(U.__webglFramebuffer[P]);U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer[P])}else{if(Array.isArray(U.__webglFramebuffer))for(let P=0;P<U.__webglFramebuffer.length;P++)i.deleteFramebuffer(U.__webglFramebuffer[P]);else i.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&i.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&i.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let P=0;P<U.__webglColorRenderbuffer.length;P++)U.__webglColorRenderbuffer[P]&&i.deleteRenderbuffer(U.__webglColorRenderbuffer[P]);U.__webglDepthRenderbuffer&&i.deleteRenderbuffer(U.__webglDepthRenderbuffer)}let x=V.textures;for(let P=0,G=x.length;P<G;P++){let O=n.get(x[P]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),a.memory.textures--),n.remove(x[P])}n.remove(V)})(S)}function H(T){let S=n.get(T);i.deleteTexture(S.__webglTexture);let V=T.source;delete d.get(V)[S.__cacheKey],a.memory.textures--}let I=0;function W(T,S){let V=n.get(T);if(T.isVideoTexture&&(function(U){let x=a.render.frame;h.get(U)!==x&&(h.set(U,x),U.update())})(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&V.__version!==T.version){let U=T.image;if(U===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else{if(U.complete!==!1)return void le(V,T,S);Ze("WebGLRenderer: Texture marked for update but image is incomplete")}}else T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}let z={[Hr]:i.REPEAT,[pr]:i.CLAMP_TO_EDGE,[cl]:i.MIRRORED_REPEAT},N={[vi]:i.NEAREST,[kp]:i.NEAREST_MIPMAP_NEAREST,[uo]:i.NEAREST_MIPMAP_LINEAR,[Gn]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[$r]:i.LINEAR_MIPMAP_LINEAR},Z={[Xp]:i.NEVER,[Jp]:i.ALWAYS,[jp]:i.LESS,[Mu]:i.LEQUAL,[qp]:i.EQUAL,[Zp]:i.GEQUAL,[$p]:i.GREATER,[Yp]:i.NOTEQUAL};function L(T,S){if(S.type!==ni||e.has("OES_texture_float_linear")!==!1||S.magFilter!==Gn&&S.magFilter!==ic&&S.magFilter!==uo&&S.magFilter!==$r&&S.minFilter!==Gn&&S.minFilter!==ic&&S.minFilter!==uo&&S.minFilter!==$r||Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,z[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,z[S.wrapT]),T!==i.TEXTURE_3D&&T!==i.TEXTURE_2D_ARRAY||i.texParameteri(T,i.TEXTURE_WRAP_R,z[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,N[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,N[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Z[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===vi||S.minFilter!==uo&&S.minFilter!==$r||S.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function j(T,S){let V=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",M));let U=S.source,x=d.get(U);x===void 0&&(x={},d.set(U,x));let P=(function(G){let O=[];return O.push(G.wrapS),O.push(G.wrapT),O.push(G.wrapR||0),O.push(G.magFilter),O.push(G.minFilter),O.push(G.anisotropy),O.push(G.internalFormat),O.push(G.format),O.push(G.type),O.push(G.generateMipmaps),O.push(G.premultiplyAlpha),O.push(G.flipY),O.push(G.unpackAlignment),O.push(G.colorSpace),O.join()})(S);if(P!==T.__cacheKey){x[P]===void 0&&(x[P]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),x[P].usedTimes++;let G=x[T.__cacheKey];G!==void 0&&(x[T.__cacheKey].usedTimes--,G.usedTimes===0&&H(S)),T.__cacheKey=P,T.__webglTexture=x[P].texture}return V}function te(T,S,V){return Math.floor(Math.floor(T/V)/S)}function le(T,S,V){let U=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(U=i.TEXTURE_3D);let x=j(T,S),P=S.source;t.bindTexture(U,T.__webglTexture,i.TEXTURE0+V);let G=n.get(P);if(P.version!==G.__version||x===!0){t.activeTexture(i.TEXTURE0+V);let O=Mt.getPrimaries(Mt.workingColorSpace),ne=S.colorSpace===Jr?null:Mt.getPrimaries(S.colorSpace),q=S.colorSpace===Jr||O===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let K=v(S.image,!1,r.maxTextureSize);K=Be(S,K);let Q=s.convert(S.format,S.colorSpace),ce=s.convert(S.type),fe,Ae=y(S.internalFormat,Q,ce,S.colorSpace,S.isVideoTexture);L(U,S);let Ue=S.mipmaps,$e=S.isVideoTexture!==!0,tt=G.__version===void 0||x===!0,rt=P.dataReady,mt=w(S,K);if(S.isDepthTexture)Ae=b(S.format===fo,S.type),tt&&($e?t.texStorage2D(i.TEXTURE_2D,1,Ae,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ae,K.width,K.height,0,Q,ce,null));else if(S.isDataTexture)if(Ue.length>0){$e&&tt&&t.texStorage2D(i.TEXTURE_2D,mt,Ae,Ue[0].width,Ue[0].height);for(let Le=0,We=Ue.length;Le<We;Le++)fe=Ue[Le],$e?rt&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,fe.width,fe.height,Q,ce,fe.data):t.texImage2D(i.TEXTURE_2D,Le,Ae,fe.width,fe.height,0,Q,ce,fe.data);S.generateMipmaps=!1}else $e?(tt&&t.texStorage2D(i.TEXTURE_2D,mt,Ae,K.width,K.height),rt&&(function(Le,We,ut,wt){let Te=Le.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,We.width,We.height,ut,wt,We.data);else{Te.sort((kt,Ht)=>kt.start-Ht.start);let gt=0;for(let kt=1;kt<Te.length;kt++){let Ht=Te[gt],B=Te[kt],qn=Ht.start+Ht.count,si=te(B.start,We.width,4),Lt=te(Ht.start,We.width,4);B.start<=qn+1&&si===Lt&&te(B.start+B.count-1,We.width,4)===si?Ht.count=Math.max(Ht.count,B.start+B.count-Ht.start):(++gt,Te[gt]=B)}Te.length=gt+1;let _t=i.getParameter(i.UNPACK_ROW_LENGTH),On=i.getParameter(i.UNPACK_SKIP_PIXELS),sn=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,We.width);for(let kt=0,Ht=Te.length;kt<Ht;kt++){let B=Te[kt],qn=Math.floor(B.start/4),si=Math.ceil(B.count/4),Lt=qn%We.width,tr=Math.floor(qn/We.width),Er=si;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,tr),t.texSubImage2D(i.TEXTURE_2D,0,Lt,tr,Er,1,ut,wt,We.data)}Le.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_t),i.pixelStorei(i.UNPACK_SKIP_PIXELS,On),i.pixelStorei(i.UNPACK_SKIP_ROWS,sn)}})(S,K,Q,ce)):t.texImage2D(i.TEXTURE_2D,0,Ae,K.width,K.height,0,Q,ce,K.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){$e&&tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ae,Ue[0].width,Ue[0].height,K.depth);for(let Le=0,We=Ue.length;Le<We;Le++)if(fe=Ue[Le],S.format!==ii)if(Q!==null)if($e){if(rt)if(S.layerUpdates.size>0){let ut=Au(fe.width,fe.height,S.format,S.type);for(let wt of S.layerUpdates){let Te=fe.data.subarray(wt*ut/fe.data.BYTES_PER_ELEMENT,(wt+1)*ut/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,wt,fe.width,fe.height,1,Q,Te)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,fe.width,fe.height,K.depth,Q,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Le,Ae,fe.width,fe.height,K.depth,0,fe.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?rt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Le,0,0,0,fe.width,fe.height,K.depth,Q,ce,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Le,Ae,fe.width,fe.height,K.depth,0,Q,ce,fe.data)}else{$e&&tt&&t.texStorage2D(i.TEXTURE_2D,mt,Ae,Ue[0].width,Ue[0].height);for(let Le=0,We=Ue.length;Le<We;Le++)fe=Ue[Le],S.format!==ii?Q!==null?$e?rt&&t.compressedTexSubImage2D(i.TEXTURE_2D,Le,0,0,fe.width,fe.height,Q,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,Le,Ae,fe.width,fe.height,0,fe.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?rt&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,fe.width,fe.height,Q,ce,fe.data):t.texImage2D(i.TEXTURE_2D,Le,Ae,fe.width,fe.height,0,Q,ce,fe.data)}else if(S.isDataArrayTexture)if($e){if(tt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,Ae,K.width,K.height,K.depth),rt)if(S.layerUpdates.size>0){let Le=Au(K.width,K.height,S.format,S.type);for(let We of S.layerUpdates){let ut=K.data.subarray(We*Le/K.data.BYTES_PER_ELEMENT,(We+1)*Le/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,We,K.width,K.height,1,Q,ce,ut)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Q,ce,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,K.width,K.height,K.depth,0,Q,ce,K.data);else if(S.isData3DTexture)$e?(tt&&t.texStorage3D(i.TEXTURE_3D,mt,Ae,K.width,K.height,K.depth),rt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Q,ce,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,K.width,K.height,K.depth,0,Q,ce,K.data);else if(S.isFramebufferTexture){if(tt)if($e)t.texStorage2D(i.TEXTURE_2D,mt,Ae,K.width,K.height);else{let Le=K.width,We=K.height;for(let ut=0;ut<mt;ut++)t.texImage2D(i.TEXTURE_2D,ut,Ae,Le,We,0,Q,ce,null),Le>>=1,We>>=1}}else if(Ue.length>0){if($e&&tt){let Le=Ge(Ue[0]);t.texStorage2D(i.TEXTURE_2D,mt,Ae,Le.width,Le.height)}for(let Le=0,We=Ue.length;Le<We;Le++)fe=Ue[Le],$e?rt&&t.texSubImage2D(i.TEXTURE_2D,Le,0,0,Q,ce,fe):t.texImage2D(i.TEXTURE_2D,Le,Ae,Q,ce,fe);S.generateMipmaps=!1}else if($e){if(tt){let Le=Ge(K);t.texStorage2D(i.TEXTURE_2D,mt,Ae,Le.width,Le.height)}rt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,ce,K)}else t.texImage2D(i.TEXTURE_2D,0,Ae,Q,ce,K);f(S)&&_(U),G.__version=P.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function oe(T,S,V,U,x,P){let G=s.convert(V.format,V.colorSpace),O=s.convert(V.type),ne=y(V.internalFormat,G,O,V.colorSpace),q=n.get(S),K=n.get(V);if(K.__renderTarget=S,!q.__hasExternalTextures){let Q=Math.max(1,S.width>>P),ce=Math.max(1,S.height>>P);x===i.TEXTURE_3D||x===i.TEXTURE_2D_ARRAY?t.texImage3D(x,P,ne,Q,ce,S.depth,0,G,O,null):t.texImage2D(x,P,ne,Q,ce,0,G,O,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,x,K.__webglTexture,0,pe(S)):(x===i.TEXTURE_2D||x>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&x<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,x,K.__webglTexture,P),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(T,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){let U=S.depthTexture,x=U&&U.isDepthTexture?U.type:null,P=b(S.stencilBuffer,x),G=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=pe(S);ge(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,P,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,P,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,P,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,G,i.RENDERBUFFER,T)}else{let U=S.textures;for(let x=0;x<U.length;x++){let P=U[x],G=s.convert(P.format,P.colorSpace),O=s.convert(P.type),ne=y(P.internalFormat,G,O,P.colorSpace),q=pe(S);V&&ge(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,q,ne,S.width,S.height):ge(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,q,ne,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ne,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!S.depthTexture||!S.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let V=n.get(S.depthTexture);V.__renderTarget=S,V.__webglTexture&&S.depthTexture.image.width===S.width&&S.depthTexture.image.height===S.height||(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);let U=V.__webglTexture,x=pe(S);if(S.depthTexture.format===po)ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,U,0);else{if(S.depthTexture.format!==fo)throw new Error("Unknown depthTexture format");ge(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0,x):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,U,0)}}function xe(T){let S=n.get(T),V=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){let U=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),U){let x=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,U.removeEventListener("dispose",x)};U.addEventListener("dispose",x),S.__depthDisposeCallback=x}S.__boundDepthTexture=U}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let U=T.texture.mipmaps;U&&U.length>0?he(S.__webglFramebuffer[0],T):he(S.__webglFramebuffer,T)}else if(V){S.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[U]),S.__webglDepthbuffer[U]===void 0)S.__webglDepthbuffer[U]=i.createRenderbuffer(),_e(S.__webglDepthbuffer[U],T,!1);else{let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=S.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,P)}}else{let U=T.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),_e(S.__webglDepthbuffer,T,!1);else{let x=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,P=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,P),i.framebufferRenderbuffer(i.FRAMEBUFFER,x,i.RENDERBUFFER,P)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let de=[],se=[];function pe(T){return Math.min(r.maxSamples,T.samples)}function ge(T){let S=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Be(T,S){let V=T.colorSpace,U=T.format,x=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||V!==zr&&V!==Jr&&(Mt.getTransfer(V)===Pt?U===ii&&x===Si||Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",V)),S}function Ge(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=function(){let T=I;return T>=r.maxTextures&&Ze("WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),I+=1,T},this.resetTextureUnits=function(){I=0},this.setTexture2D=W,this.setTexture2DArray=function(T,S){let V=n.get(T);T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version?le(V,T,S):(T.isExternalTexture&&(V.__webglTexture=T.sourceTexture?T.sourceTexture:null),t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S))},this.setTexture3D=function(T,S){let V=n.get(T);T.isRenderTargetTexture===!1&&T.version>0&&V.__version!==T.version?le(V,T,S):t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)},this.setTextureCube=function(T,S){let V=n.get(T);T.version>0&&V.__version!==T.version?(function(U,x,P){if(x.image.length!==6)return;let G=j(U,x),O=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+P);let ne=n.get(O);if(O.version!==ne.__version||G===!0){t.activeTexture(i.TEXTURE0+P);let q=Mt.getPrimaries(Mt.workingColorSpace),K=x.colorSpace===Jr?null:Mt.getPrimaries(x.colorSpace),Q=x.colorSpace===Jr||q===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,Ae=[];for(let Te=0;Te<6;Te++)Ae[Te]=ce||fe?fe?x.image[Te].image:x.image[Te]:v(x.image[Te],!0,r.maxCubemapSize),Ae[Te]=Be(x,Ae[Te]);let Ue=Ae[0],$e=s.convert(x.format,x.colorSpace),tt=s.convert(x.type),rt=y(x.internalFormat,$e,tt,x.colorSpace),mt=x.isVideoTexture!==!0,Le=ne.__version===void 0||G===!0,We=O.dataReady,ut,wt=w(x,Ue);if(L(i.TEXTURE_CUBE_MAP,x),ce){mt&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,wt,rt,Ue.width,Ue.height);for(let Te=0;Te<6;Te++){ut=Ae[Te].mipmaps;for(let gt=0;gt<ut.length;gt++){let _t=ut[gt];x.format!==ii?$e!==null?mt?We&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,gt,0,0,_t.width,_t.height,$e,_t.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,gt,rt,_t.width,_t.height,0,_t.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):mt?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,gt,0,0,_t.width,_t.height,$e,tt,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,gt,rt,_t.width,_t.height,0,$e,tt,_t.data)}}}else{if(ut=x.mipmaps,mt&&Le){ut.length>0&&wt++;let Te=Ge(Ae[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,wt,rt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(fe){mt?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ae[Te].width,Ae[Te].height,$e,tt,Ae[Te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,rt,Ae[Te].width,Ae[Te].height,0,$e,tt,Ae[Te].data);for(let gt=0;gt<ut.length;gt++){let _t=ut[gt].image[Te].image;mt?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,gt+1,0,0,_t.width,_t.height,$e,tt,_t.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,gt+1,rt,_t.width,_t.height,0,$e,tt,_t.data)}}else{mt?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,$e,tt,Ae[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,rt,$e,tt,Ae[Te]);for(let gt=0;gt<ut.length;gt++){let _t=ut[gt];mt?We&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,gt+1,0,0,$e,tt,_t.image[Te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Te,gt+1,rt,$e,tt,_t.image[Te])}}}f(x)&&_(i.TEXTURE_CUBE_MAP),ne.__version=O.version,x.onUpdate&&x.onUpdate(x)}U.__version=x.version})(V,T,S):t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)},this.rebindTextures=function(T,S,V){let U=n.get(T);S!==void 0&&oe(U.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&xe(T)},this.setupRenderTarget=function(T){let S=T.texture,V=n.get(T),U=n.get(S);T.addEventListener("dispose",D);let x=T.textures,P=T.isWebGLCubeRenderTarget===!0,G=x.length>1;if(G||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=S.version,a.memory.textures++),P){V.__webglFramebuffer=[];for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[O]=[];for(let ne=0;ne<S.mipmaps.length;ne++)V.__webglFramebuffer[O][ne]=i.createFramebuffer()}else V.__webglFramebuffer[O]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let O=0;O<S.mipmaps.length;O++)V.__webglFramebuffer[O]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(G)for(let O=0,ne=x.length;O<ne;O++){let q=n.get(x[O]);q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&ge(T)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let O=0;O<x.length;O++){let ne=x[O];V.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[O]);let q=s.convert(ne.format,ne.colorSpace),K=s.convert(ne.type),Q=y(ne.internalFormat,q,K,ne.colorSpace,T.isXRRenderTarget===!0),ce=pe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Q,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,V.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(V.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(P){t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),L(i.TEXTURE_CUBE_MAP,S);for(let O=0;O<6;O++)if(S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)oe(V.__webglFramebuffer[O][ne],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,ne);else oe(V.__webglFramebuffer[O],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);f(S)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(G){for(let O=0,ne=x.length;O<ne;O++){let q=x[O],K=n.get(q),Q=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Q=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,K.__webglTexture),L(Q,q),oe(V.__webglFramebuffer,T,q,i.COLOR_ATTACHMENT0+O,Q,0),f(q)&&_(Q)}t.unbindTexture()}else{let O=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(O=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(O,U.__webglTexture),L(O,S),S.mipmaps&&S.mipmaps.length>0)for(let ne=0;ne<S.mipmaps.length;ne++)oe(V.__webglFramebuffer[ne],T,S,i.COLOR_ATTACHMENT0,O,ne);else oe(V.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,O,0);f(S)&&_(O),t.unbindTexture()}T.depthBuffer&&xe(T)},this.updateRenderTargetMipmap=function(T){let S=T.textures;for(let V=0,U=S.length;V<U;V++){let x=S[V];if(f(x)){let P=g(T),G=n.get(x).__webglTexture;t.bindTexture(P,G),_(P),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(T.samples>0){if(ge(T)===!1){let S=T.textures,V=T.width,U=T.height,x=i.COLOR_BUFFER_BIT,P=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,G=n.get(T),O=S.length>1;if(O)for(let q=0;q<S.length;q++)t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,G.__webglMultisampledFramebuffer);let ne=T.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglFramebuffer);for(let q=0;q<S.length;q++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(x|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(x|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,G.__webglColorRenderbuffer[q]);let K=n.get(S[q]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,V,U,0,0,V,U,x,i.NEAREST),c===!0&&(de.length=0,se.length=0,de.push(i.COLOR_ATTACHMENT0+q),T.depthBuffer&&T.resolveDepthBuffer===!1&&(de.push(P),se.push(P),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,se)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let q=0;q<S.length;q++){t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,G.__webglColorRenderbuffer[q]);let K=n.get(S[q]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,G.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,G.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}},this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ge}function p1(i,e){return{convert:function(t,n=Jr){let r,s=Mt.getTransfer(n);if(t===Si)return i.UNSIGNED_BYTE;if(t===sc)return i.UNSIGNED_SHORT_4_4_4_4;if(t===ac)return i.UNSIGNED_SHORT_5_5_5_1;if(t===Gh)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===Vh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===Hh)return i.BYTE;if(t===zh)return i.SHORT;if(t===Qs)return i.UNSIGNED_SHORT;if(t===rc)return i.INT;if(t===Yr)return i.UNSIGNED_INT;if(t===ni)return i.FLOAT;if(t===Zr)return i.HALF_FLOAT;if(t===Hp)return i.ALPHA;if(t===zp)return i.RGB;if(t===ii)return i.RGBA;if(t===po)return i.DEPTH_COMPONENT;if(t===fo)return i.DEPTH_STENCIL;if(t===oc)return i.RED;if(t===lc)return i.RED_INTEGER;if(t===Wh)return i.RG;if(t===Xh)return i.RG_INTEGER;if(t===jh)return i.RGBA_INTEGER;if(t===cc||t===hc||t===uc||t===dc)if(s===Pt){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===hc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===uc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===dc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===qh||t===$h||t===Yh||t===Zh){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===qh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===$h)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Zh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Jh||t===Kh||t===Qh){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Jh||t===Kh)return s===Pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Qh)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===eu||t===tu||t===nu||t===iu||t===ru||t===su||t===au||t===ou||t===lu||t===cu||t===hu||t===uu||t===du||t===pu){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===eu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===tu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===nu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===iu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===ru)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===su)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===au)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===ou)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===lu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===cu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===hu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===uu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===du)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===pu)return s===Pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===fu||t===mu||t===gu){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===fu)return s===Pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===mu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===gu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===vu||t===yu||t===_u||t===xu){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===vu)return r.COMPRESSED_RED_RGTC1_EXT;if(t===yu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===_u)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===xu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===ea?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var ku=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new qa(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Cn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new X(new pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends zi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,v=typeof XRWebGLBinding<"u",f=new ku,_={},g=t.getContextAttributes(),y=null,b=null,w=[],M=[],D=new ue,H=null,I=new Jt;I.viewport=new bt;let W=new Jt;W.viewport=new bt;let z=[I,W],N=new jl,Z=null,L=null;function j(se){let pe=M.indexOf(se.inputSource);if(pe===-1)return;let ge=w[pe];ge!==void 0&&(ge.update(se.inputSource,se.frame,l||a),ge.dispatchEvent({type:se.type,data:se.inputSource}))}function te(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",te),r.removeEventListener("inputsourceschange",le);for(let se=0;se<w.length;se++){let pe=M[se];pe!==null&&(M[se]=null,w[se].disconnect(pe))}Z=null,L=null,f.reset();for(let se in _)delete _[se];e.setRenderTarget(y),p=null,d=null,u=null,r=null,b=null,de.stop(),n.isPresenting=!1,e.setPixelRatio(H),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}function le(se){for(let pe=0;pe<se.removed.length;pe++){let ge=se.removed[pe],Be=M.indexOf(ge);Be>=0&&(M[Be]=null,w[Be].disconnect(ge))}for(let pe=0;pe<se.added.length;pe++){let ge=se.added[pe],Be=M.indexOf(ge);if(Be===-1){for(let T=0;T<w.length;T++){if(T>=M.length){M.push(ge),Be=T;break}if(M[T]===null){M[T]=ge,Be=T;break}}if(Be===-1)break}let Ge=w[Be];Ge&&Ge.connect(ge)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let pe=w[se];return pe===void 0&&(pe=new Gs,w[se]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(se){let pe=w[se];return pe===void 0&&(pe=new Gs,w[se]=pe),pe.getGripSpace()},this.getHand=function(se){let pe=w[se];return pe===void 0&&(pe=new Gs,w[se]=pe),pe.getHandSpace()},this.setFramebufferScaleFactor=function(se){s=se,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(se){l=se},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",te),r.addEventListener("inputsourceschange",le),g.xrCompatible!==!0&&await t.makeXRCompatible(),H=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,ge=null,Be=null;g.depth&&(Be=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=g.stencil?fo:po,ge=g.stencil?ea:Yr);let Ge={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ge),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new yi(d.textureWidth,d.textureHeight,{format:ii,type:Si,depthTexture:new ja(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let pe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,pe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new yi(p.framebufferWidth,p.framebufferHeight,{format:ii,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),de.setContext(r),de.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};let oe=new E,_e=new E;function he(se,pe){pe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(pe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let pe=se.near,ge=se.far;f.texture!==null&&(f.depthNear>0&&(pe=f.depthNear),f.depthFar>0&&(ge=f.depthFar)),N.near=W.near=I.near=pe,N.far=W.far=I.far=ge,Z===N.near&&L===N.far||(r.updateRenderState({depthNear:N.near,depthFar:N.far}),Z=N.near,L=N.far),N.layers.mask=6|se.layers.mask,I.layers.mask=3&N.layers.mask,W.layers.mask=5&N.layers.mask;let Be=se.parent,Ge=N.cameras;he(N,Be);for(let T=0;T<Ge.length;T++)he(Ge[T],Be);Ge.length===2?(function(T,S,V){oe.setFromMatrixPosition(S.matrixWorld),_e.setFromMatrixPosition(V.matrixWorld);let U=oe.distanceTo(_e),x=S.projectionMatrix.elements,P=V.projectionMatrix.elements,G=x[14]/(x[10]-1),O=x[14]/(x[10]+1),ne=(x[9]+1)/x[5],q=(x[9]-1)/x[5],K=(x[8]-1)/x[0],Q=(P[8]+1)/P[0],ce=G*K,fe=G*Q,Ae=U/(-K+Q),Ue=Ae*-K;if(S.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Ue),T.translateZ(Ae),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),x[10]===-1)T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse);else{let $e=G+Ae,tt=O+Ae,rt=ce-Ue,mt=fe+(U-Ue),Le=ne*O/tt*$e,We=q*O/tt*$e;T.projectionMatrix.makePerspective(rt,mt,Le,We,$e,tt),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}})(N,I,W):N.projectionMatrix.copy(I.projectionMatrix),(function(T,S,V){V===null?T.matrix.copy(S.matrixWorld):(T.matrix.copy(V.matrixWorld),T.matrix.invert(),T.matrix.multiply(S.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(S.projectionMatrix),T.projectionMatrixInverse.copy(S.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=2*Os*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)})(se,N,Be)},this.getCamera=function(){return N},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(se){c=se,d!==null&&(d.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(N)},this.getCameraTexture=function(se){return _[se]};let xe=null,de=new Pf;de.setAnimationLoop(function(se,pe){if(h=pe.getViewerPose(l||a),m=pe,h!==null){let ge=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Be=!1;ge.length!==N.cameras.length&&(N.cameras.length=0,Be=!0);for(let T=0;T<ge.length;T++){let S=ge[T],V=null;if(p!==null)V=p.getViewport(S);else{let x=u.getViewSubImage(d,S);V=x.viewport,T===0&&(e.setRenderTargetTextures(b,x.colorTexture,x.depthStencilTexture),e.setRenderTarget(b))}let U=z[T];U===void 0&&(U=new Jt,U.layers.enable(T),U.viewport=new bt,z[T]=U),U.matrix.fromArray(S.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(S.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(V.x,V.y,V.width,V.height),T===0&&(N.matrix.copy(U.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Be===!0&&N.cameras.push(U)}let Ge=r.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let T=u.getDepthInformation(ge[0]);T&&T.isValid&&T.texture&&f.init(T,r.renderState)}if(Ge&&Ge.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let T=0;T<ge.length;T++){let S=ge[T].camera;if(S){let V=_[S];V||(V=new qa,_[S]=V);let U=u.getCameraImage(S);V.sourceTexture=U}}}}for(let ge=0;ge<w.length;ge++){let Be=M[ge],Ge=w[ge];Be!==null&&Ge!==void 0&&Ge.update(Be,pe,l||a)}xe&&xe(se,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),m=null}),this.setAnimationLoop=function(se){xe=se},this.dispose=function(){}}},ts=new ti,f1=new nt;function m1(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===Mn&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===Mn&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,ts.copy(c),ts.x*=-1,ts.y*=-1,ts.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),r.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(ts)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,Eu(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Mn&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function g1(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,m){let v=u.value,f=d+"_"+p;if(m[f]===void 0)return m[f]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let _=m[f];if(typeof v=="number"||typeof v=="boolean"){if(_!==v)return m[f]=v,!0}else if(_.equals(v)===!1)return _.copy(v),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ze("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(f){let _=f.uniforms,g=0,y=16;for(let w=0,M=_.length;w<M;w++){let D=Array.isArray(_[w])?_[w]:[_[w]];for(let H=0,I=D.length;H<I;H++){let W=D[H],z=Array.isArray(W.value)?W.value:[W.value];for(let N=0,Z=z.length;N<Z;N++){let L=l(z[N]),j=g%y,te=j%L.boundary,le=j+te;g+=te,le!==0&&y-le<L.storage&&(g+=y-le),W.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=g,g+=L.storage}}}let b=g%y;b>0&&(g+=y-b),f.__size=g,f.__cache={}})(u),p=(function(f){let _=(function(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();f.__bindingPointIndex=_;let g=i.createBuffer(),y=f.__size,b=f.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,y,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,g),g})(u),r[u.id]=p,u.addEventListener("dispose",h));let m=d.program;n.updateUBOMapping(u,m);let v=e.render.frame;s[u.id]!==v&&((function(f){let _=r[f.id],g=f.uniforms,y=f.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let b=0,w=g.length;b<w;b++){let M=Array.isArray(g[b])?g[b]:[g[b]];for(let D=0,H=M.length;D<H;D++){let I=M[D];if(c(I,b,D,y)===!0){let W=I.__offset,z=Array.isArray(I.value)?I.value:[I.value],N=0;for(let Z=0;Z<z.length;Z++){let L=z[Z],j=l(L);typeof L=="number"||typeof L=="boolean"?(I.__data[0]=L,i.bufferSubData(i.UNIFORM_BUFFER,W+N,I.__data)):L.isMatrix3?(I.__data[0]=L.elements[0],I.__data[1]=L.elements[1],I.__data[2]=L.elements[2],I.__data[3]=0,I.__data[4]=L.elements[3],I.__data[5]=L.elements[4],I.__data[6]=L.elements[5],I.__data[7]=0,I.__data[8]=L.elements[6],I.__data[9]=L.elements[7],I.__data[10]=L.elements[8],I.__data[11]=0):(L.toArray(I.__data,N),N+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var v1=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),qi=null,ia=class{constructor(e={}){let{canvas:t=Kp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let m=new Set([jh,Xh,lc]),v=new Set([Si,Yr,Qs,ea,sc,ac]),f=new Uint32Array(4),_=new Int32Array(4),g=null,y=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,D=!1;this._outputColorSpace=Ct;let H=0,I=0,W=null,z=-1,N=null,Z=new bt,L=new bt,j=null,te=new Qe(0),le=0,oe=t.width,_e=t.height,he=1,xe=null,de=null,se=new bt(0,0,oe,_e),pe=new bt(0,0,oe,_e),ge=!1,Be=new mr,Ge=!1,T=!1,S=new nt,V=new E,U=new bt,x={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},P=!1;function G(){return W===null?he:1}let O,ne,q,K,Q,ce,fe,Ae,Ue,$e,tt,rt,mt,Le,We,ut,wt,Te,gt,_t,On,sn,kt,Ht,B=n;function qn(R,Y){return t.getContext(R,Y)}try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",tr,!1),t.addEventListener("webglcontextrestored",Er,!1),t.addEventListener("webglcontextcreationerror",Tr,!1),B===null){let Y="webgl2";if(B=qn(Y,R),B===null)throw qn(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}function si(){O=new K0(B),O.init(),sn=new p1(B,O),ne=new q0(B,O,e,sn),q=new u1(B,O),ne.reversedDepthBuffer&&d&&q.buffers.depth.setReversed(!0),K=new tg(B),Q=new t1,ce=new d1(B,O,q,Q,ne,sn,K),fe=new Y0(M),Ae=new J0(M),Ue=new G0(B),kt=new X0(B,Ue),$e=new Q0(B,Ue,K,kt),tt=new ig(B,$e,Ue,K),gt=new ng(B,ne,ce),ut=new $0(Q),rt=new e1(M,fe,Ae,O,ne,kt,ut),mt=new m1(M,Q),Le=new i1,We=new l1(O),Te=new W0(M,fe,Ae,q,tt,p,c),wt=new c1(M,tt,ne),Ht=new g1(B,K,ne,q),_t=new j0(B,O,K),On=new eg(B,O,K),K.programs=rt.programs,M.capabilities=ne,M.extensions=O,M.properties=Q,M.renderLists=Le,M.shadowMap=wt,M.state=q,M.info=K}si();let Lt=new Hu(M,B);function tr(R){R.preventDefault(),Fa("WebGLRenderer: Context Lost."),D=!0}function Er(){Fa("WebGLRenderer: Context Restored."),D=!1;let R=K.autoReset,Y=wt.enabled,ie=wt.autoUpdate,ae=wt.needsUpdate,ee=wt.type;si(),K.autoReset=R,wt.enabled=Y,wt.autoUpdate=ie,wt.needsUpdate=ae,wt.type=ee}function Tr(R){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function us(R){let Y=R.target;Y.removeEventListener("dispose",us),(function(ie){(function(ae){let ee=Q.get(ae).programs;ee!==void 0&&(ee.forEach(function(ve){rt.releaseProgram(ve)}),ae.isShaderMaterial&&rt.releaseShaderCache(ae))})(ie),Q.remove(ie)})(Y)}function pa(R,Y,ie){R.transparent===!0&&R.side===St&&R.forceSinglePass===!1?(R.side=Mn,R.needsUpdate=!0,Rr(R,Y,ie),R.side=Ys,R.needsUpdate=!0,Rr(R,Y,ie),R.side=St):Rr(R,Y,ie)}this.xr=Lt,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let R=O.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=O.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(R){R!==void 0&&(he=R,this.setSize(oe,_e,!1))},this.getSize=function(R){return R.set(oe,_e)},this.setSize=function(R,Y,ie=!0){Lt.isPresenting?Ze("WebGLRenderer: Can't change size while VR device is presenting."):(oe=R,_e=Y,t.width=Math.floor(R*he),t.height=Math.floor(Y*he),ie===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),this.setViewport(0,0,R,Y))},this.getDrawingBufferSize=function(R){return R.set(oe*he,_e*he).floor()},this.setDrawingBufferSize=function(R,Y,ie){oe=R,_e=Y,he=ie,t.width=Math.floor(R*ie),t.height=Math.floor(Y*ie),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(se)},this.setViewport=function(R,Y,ie,ae){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,Y,ie,ae),q.viewport(Z.copy(se).multiplyScalar(he).round())},this.getScissor=function(R){return R.copy(pe)},this.setScissor=function(R,Y,ie,ae){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,Y,ie,ae),q.scissor(L.copy(pe).multiplyScalar(he).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(R){q.setScissorTest(ge=R)},this.setOpaqueSort=function(R){xe=R},this.setTransparentSort=function(R){de=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ie=!0){let ae=0;if(R){let ee=!1;if(W!==null){let ve=W.texture.format;ee=m.has(ve)}if(ee){let ve=W.texture.type,Re=v.has(ve),Ie=Te.getClearColor(),Ne=Te.getClearAlpha(),Xe=Ie.r,Ye=Ie.g,je=Ie.b;Re?(f[0]=Xe,f[1]=Ye,f[2]=je,f[3]=Ne,B.clearBufferuiv(B.COLOR,0,f)):(_[0]=Xe,_[1]=Ye,_[2]=je,_[3]=Ne,B.clearBufferiv(B.COLOR,0,_))}else ae|=B.COLOR_BUFFER_BIT}Y&&(ae|=B.DEPTH_BUFFER_BIT),ie&&(ae|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tr,!1),t.removeEventListener("webglcontextrestored",Er,!1),t.removeEventListener("webglcontextcreationerror",Tr,!1),Te.dispose(),Le.dispose(),We.dispose(),Q.dispose(),fe.dispose(),Ae.dispose(),tt.dispose(),kt.dispose(),Ht.dispose(),rt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Zt),Lt.removeEventListener("sessionend",ir),ai.stop()},this.renderBufferDirect=function(R,Y,ie,ae,ee,ve){Y===null&&(Y=x);let Re=ee.isMesh&&ee.matrixWorld.determinant()<0,Ie=(function(st,Dt,qt,Je,Ke){Dt.isScene!==!0&&(Dt=x),ce.resetTextureUnits();let En=Dt.fog,li=Je.isMeshStandardMaterial?Dt.environment:null,Cr=W===null?M.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:zr,Yn=(Je.isMeshStandardMaterial?Ae:fe).get(Je.envMap||li),Tn=Je.vertexColors===!0&&!!qt.attributes.color&&qt.attributes.color.itemSize===4,ln=!!qt.attributes.tangent&&(!!Je.normalMap||Je.anisotropy>0),kn=!!qt.morphAttributes.position,ps=!!qt.morphAttributes.normal,Hn=!!qt.morphAttributes.color,Pr=ji;Je.toneMapped&&(W!==null&&W.isXRRenderTarget!==!0||(Pr=M.toneMapping));let va=qt.morphAttributes.position||qt.morphAttributes.normal||qt.morphAttributes.color,Xc=va!==void 0?va.length:0,dt=Q.get(Je),Ir=y.state.lights;if(Ge===!0&&(T===!0||st!==N)){let cn=st===N&&Je.id===z;ut.setState(Je,st,cn)}let mn=!1;Je.version===dt.__version?dt.needsLights&&dt.lightsStateVersion!==Ir.state.version||dt.outputColorSpace!==Cr||Ke.isBatchedMesh&&dt.batching===!1?mn=!0:Ke.isBatchedMesh||dt.batching!==!0?Ke.isBatchedMesh&&dt.batchingColor===!0&&Ke.colorTexture===null||Ke.isBatchedMesh&&dt.batchingColor===!1&&Ke.colorTexture!==null||Ke.isInstancedMesh&&dt.instancing===!1?mn=!0:Ke.isInstancedMesh||dt.instancing!==!0?Ke.isSkinnedMesh&&dt.skinning===!1?mn=!0:Ke.isSkinnedMesh||dt.skinning!==!0?Ke.isInstancedMesh&&dt.instancingColor===!0&&Ke.instanceColor===null||Ke.isInstancedMesh&&dt.instancingColor===!1&&Ke.instanceColor!==null||Ke.isInstancedMesh&&dt.instancingMorph===!0&&Ke.morphTexture===null||Ke.isInstancedMesh&&dt.instancingMorph===!1&&Ke.morphTexture!==null||dt.envMap!==Yn||Je.fog===!0&&dt.fog!==En?mn=!0:dt.numClippingPlanes===void 0||dt.numClippingPlanes===ut.numPlanes&&dt.numIntersection===ut.numIntersection?(dt.vertexAlphas!==Tn||dt.vertexTangents!==ln||dt.morphTargets!==kn||dt.morphNormals!==ps||dt.morphColors!==Hn||dt.toneMapping!==Pr||dt.morphTargetsCount!==Xc)&&(mn=!0):mn=!0:mn=!0:mn=!0:mn=!0:(mn=!0,dt.__version=Je.version);let ci=dt.currentProgram;mn===!0&&(ci=Rr(Je,Dt,Ke));let Lr=!1,Dr=!1,Ur=!1,zt=ci.getUniforms(),wn=dt.uniforms;if(q.useProgram(ci.program)&&(Lr=!0,Dr=!0,Ur=!0),Je.id!==z&&(z=Je.id,Dr=!0),Lr||N!==st){q.buffers.depth.getReversed()&&st.reversedDepth!==!0&&(st._reversedDepth=!0,st.updateProjectionMatrix()),zt.setValue(B,"projectionMatrix",st.projectionMatrix),zt.setValue(B,"viewMatrix",st.matrixWorldInverse);let cn=zt.map.cameraPosition;cn!==void 0&&cn.setValue(B,V.setFromMatrixPosition(st.matrixWorld)),ne.logarithmicDepthBuffer&&zt.setValue(B,"logDepthBufFC",2/(Math.log(st.far+1)/Math.LN2)),(Je.isMeshPhongMaterial||Je.isMeshToonMaterial||Je.isMeshLambertMaterial||Je.isMeshBasicMaterial||Je.isMeshStandardMaterial||Je.isShaderMaterial)&&zt.setValue(B,"isOrthographic",st.isOrthographicCamera===!0),N!==st&&(N=st,Dr=!0,Ur=!0)}if(Ke.isSkinnedMesh){zt.setOptional(B,Ke,"bindMatrix"),zt.setOptional(B,Ke,"bindMatrixInverse");let cn=Ke.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),zt.setValue(B,"boneTexture",cn.boneTexture,ce))}Ke.isBatchedMesh&&(zt.setOptional(B,Ke,"batchingTexture"),zt.setValue(B,"batchingTexture",Ke._matricesTexture,ce),zt.setOptional(B,Ke,"batchingIdTexture"),zt.setValue(B,"batchingIdTexture",Ke._indirectTexture,ce),zt.setOptional(B,Ke,"batchingColorTexture"),Ke._colorsTexture!==null&&zt.setValue(B,"batchingColorTexture",Ke._colorsTexture,ce));let rr=qt.morphAttributes;rr.position===void 0&&rr.normal===void 0&&rr.color===void 0||gt.update(Ke,qt,ci),(Dr||dt.receiveShadow!==Ke.receiveShadow)&&(dt.receiveShadow=Ke.receiveShadow,zt.setValue(B,"receiveShadow",Ke.receiveShadow)),Je.isMeshGouraudMaterial&&Je.envMap!==null&&(wn.envMap.value=Yn,wn.flipEnvMap.value=Yn.isCubeTexture&&Yn.isRenderTargetTexture===!1?-1:1),Je.isMeshStandardMaterial&&Je.envMap===null&&Dt.environment!==null&&(wn.envMapIntensity.value=Dt.environmentIntensity),wn.dfgLUT!==void 0&&(wn.dfgLUT.value=(qi===null&&(qi=new Va(v1,32,32,Wh,Zr),qi.minFilter=Gn,qi.magFilter=Gn,qi.wrapS=pr,qi.wrapT=pr,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi)),Dr&&(zt.setValue(B,"toneMappingExposure",M.toneMappingExposure),dt.needsLights&&(In=Ur,(an=wn).ambientLightColor.needsUpdate=In,an.lightProbe.needsUpdate=In,an.directionalLights.needsUpdate=In,an.directionalLightShadows.needsUpdate=In,an.pointLights.needsUpdate=In,an.pointLightShadows.needsUpdate=In,an.spotLights.needsUpdate=In,an.spotLightShadows.needsUpdate=In,an.rectAreaLights.needsUpdate=In,an.hemisphereLights.needsUpdate=In),En&&Je.fog===!0&&mt.refreshFogUniforms(wn,En),mt.refreshMaterialUniforms(wn,Je,he,_e,y.state.transmissionRenderTarget[st.id]),na.upload(B,$n(dt),wn,ce));var an,In;if(Je.isShaderMaterial&&Je.uniformsNeedUpdate===!0&&(na.upload(B,$n(dt),wn,ce),Je.uniformsNeedUpdate=!1),Je.isSpriteMaterial&&zt.setValue(B,"center",Ke.center),zt.setValue(B,"modelViewMatrix",Ke.modelViewMatrix),zt.setValue(B,"normalMatrix",Ke.normalMatrix),zt.setValue(B,"modelMatrix",Ke.matrixWorld),Je.isShaderMaterial||Je.isRawShaderMaterial){let cn=Je.uniformsGroups;for(let hi=0,jc=cn.length;hi<jc;hi++){let ya=cn[hi];Ht.update(ya,ci),Ht.bind(ya,ci)}}return ci})(R,Y,ie,ae,ee);q.setMaterial(ae,Re);let Ne=ie.index,Xe=1;if(ae.wireframe===!0){if(Ne=$e.getWireframeAttribute(ie),Ne===void 0)return;Xe=2}let Ye=ie.drawRange,je=ie.attributes.position,it=Ye.start*Xe,xt=(Ye.start+Ye.count)*Xe;ve!==null&&(it=Math.max(it,ve.start*Xe),xt=Math.min(xt,(ve.start+ve.count)*Xe)),Ne!==null?(it=Math.max(it,0),xt=Math.min(xt,Ne.count)):je!=null&&(it=Math.max(it,0),xt=Math.min(xt,je.count));let Xt=xt-it;if(Xt<0||Xt===1/0)return;let Tt;kt.setup(ee,ae,Ie,ie,Ne);let At=_t;if(Ne!==null&&(Tt=Ue.get(Ne),At=On,At.setIndex(Tt)),ee.isMesh)ae.wireframe===!0?(q.setLineWidth(ae.wireframeLinewidth*G()),At.setMode(B.LINES)):At.setMode(B.TRIANGLES);else if(ee.isLine){let st=ae.linewidth;st===void 0&&(st=1),q.setLineWidth(st*G()),ee.isLineSegments?At.setMode(B.LINES):ee.isLineLoop?At.setMode(B.LINE_LOOP):At.setMode(B.LINE_STRIP)}else ee.isPoints?At.setMode(B.POINTS):ee.isSprite&&At.setMode(B.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Bs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))At.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let st=ee._multiDrawStarts,Dt=ee._multiDrawCounts,qt=ee._multiDrawCount,Je=Ne?Ue.get(Ne).bytesPerElement:1,Ke=Q.get(ae).currentProgram.getUniforms();for(let En=0;En<qt;En++)Ke.setValue(B,"_gl_DrawID",En),At.render(st[En]/Je,Dt[En])}else if(ee.isInstancedMesh)At.renderInstances(it,Xt,ee.count);else if(ie.isInstancedBufferGeometry){let st=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Dt=Math.min(ie.instanceCount,st);At.renderInstances(it,Xt,Dt)}else At.render(it,Xt)},this.compile=function(R,Y,ie=null){ie===null&&(ie=R),y=We.get(ie),y.init(Y),w.push(y),ie.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),R!==ie&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(y.pushLight(ee),ee.castShadow&&y.pushShadow(ee))}),y.setupLights();let ae=new Set;return R.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let ve=ee.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){let Ie=ve[Re];pa(Ie,ie,ee),ae.add(Ie)}else pa(ve,ie,ee),ae.add(ve)}),y=w.pop(),ae},this.compileAsync=function(R,Y,ie=null){let ae=this.compile(R,Y,ie);return new Promise(ee=>{function ve(){ae.forEach(function(Re){Q.get(Re).currentProgram.isReady()&&ae.delete(Re)}),ae.size!==0?setTimeout(ve,10):ee(R)}O.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let nr=null;function Zt(){ai.stop()}function ir(){ai.start()}let ai=new Pf;function ds(R,Y,ie,ae){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){ae&&U.setFromMatrixPosition(R.matrixWorld).applyMatrix4(S);let ve=tt.update(R),Re=R.material;Re.visible&&g.push(R,ve,Re,ie,U.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){let ve=tt.update(R),Re=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),U.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),U.copy(ve.boundingSphere.center)),U.applyMatrix4(R.matrixWorld).applyMatrix4(S)),Array.isArray(Re)){let Ie=ve.groups;for(let Ne=0,Xe=Ie.length;Ne<Xe;Ne++){let Ye=Ie[Ne],je=Re[Ye.materialIndex];je&&je.visible&&g.push(R,ve,je,ie,U.z,Ye)}}else Re.visible&&g.push(R,ve,Re,ie,U.z,null)}}let ee=R.children;for(let ve=0,Re=ee.length;ve<Re;ve++)ds(ee[ve],Y,ie,ae)}function fa(R,Y,ie,ae){let{opaque:ee,transmissive:ve,transparent:Re}=R;y.setupLightsView(ie),Ge===!0&&ut.setGlobalState(M.clippingPlanes,ie),ae&&q.viewport(Z.copy(ae)),ee.length>0&&wr(ee,Y,ie),ve.length>0&&wr(ve,Y,ie),Re.length>0&&wr(Re,Y,ie),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function oi(R,Y,ie,ae){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ae.id]===void 0&&(y.state.transmissionRenderTarget[ae.id]=new yi(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?Zr:Si,minFilter:$r,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));let ee=y.state.transmissionRenderTarget[ae.id],ve=ae.viewport||Z;ee.setSize(ve.z*M.transmissionResolutionScale,ve.w*M.transmissionResolutionScale);let Re=M.getRenderTarget(),Ie=M.getActiveCubeFace(),Ne=M.getActiveMipmapLevel();M.setRenderTarget(ee),M.getClearColor(te),le=M.getClearAlpha(),le<1&&M.setClearColor(16777215,.5),M.clear(),P&&Te.render(ie);let Xe=M.toneMapping;M.toneMapping=ji;let Ye=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),y.setupLightsView(ae),Ge===!0&&ut.setGlobalState(M.clippingPlanes,ae),wr(R,ie,ae),ce.updateMultisampleRenderTarget(ee),ce.updateRenderTargetMipmap(ee),O.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let it=0,xt=Y.length;it<xt;it++){let Xt=Y[it],{object:Tt,geometry:At,material:st,group:Dt}=Xt;if(st.side===St&&Tt.layers.test(ae.layers)){let qt=st.side;st.side=Mn,st.needsUpdate=!0,Ar(Tt,ie,ae,At,st,Dt),st.side=qt,st.needsUpdate=!0,je=!0}}je===!0&&(ce.updateMultisampleRenderTarget(ee),ce.updateRenderTargetMipmap(ee))}M.setRenderTarget(Re,Ie,Ne),M.setClearColor(te,le),Ye!==void 0&&(ae.viewport=Ye),M.toneMapping=Xe}function wr(R,Y,ie){let ae=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,ve=R.length;ee<ve;ee++){let Re=R[ee],{object:Ie,geometry:Ne,group:Xe}=Re,Ye=Re.material;Ye.allowOverride===!0&&ae!==null&&(Ye=ae),Ie.layers.test(ie.layers)&&Ar(Ie,Y,ie,Ne,Ye,Xe)}}function Ar(R,Y,ie,ae,ee,ve){R.onBeforeRender(M,Y,ie,ae,ee,ve),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(M,Y,ie,ae,R,ve),ee.transparent===!0&&ee.side===St&&ee.forceSinglePass===!1?(ee.side=Mn,ee.needsUpdate=!0,M.renderBufferDirect(ie,Y,ae,ee,R,ve),ee.side=Ys,ee.needsUpdate=!0,M.renderBufferDirect(ie,Y,ae,ee,R,ve),ee.side=St):M.renderBufferDirect(ie,Y,ae,ee,R,ve),R.onAfterRender(M,Y,ie,ae,ee,ve)}function Rr(R,Y,ie){Y.isScene!==!0&&(Y=x);let ae=Q.get(R),ee=y.state.lights,ve=y.state.shadowsArray,Re=ee.state.version,Ie=rt.getParameters(R,ee.state,ve,Y,ie),Ne=rt.getProgramCacheKey(Ie),Xe=ae.programs;ae.environment=R.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(R.isMeshStandardMaterial?Ae:fe).get(R.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Xe===void 0&&(R.addEventListener("dispose",us),Xe=new Map,ae.programs=Xe);let Ye=Xe.get(Ne);if(Ye!==void 0){if(ae.currentProgram===Ye&&ae.lightsStateVersion===Re)return ma(R,Ie),Ye}else Ie.uniforms=rt.getUniforms(R),R.onBeforeCompile(Ie,M),Ye=rt.acquireProgram(Ie,Ne),Xe.set(Ne,Ye),ae.uniforms=Ie.uniforms;let je=ae.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(je.clippingPlanes=ut.uniform),ma(R,Ie),ae.needsLights=(function(it){return it.isMeshLambertMaterial||it.isMeshToonMaterial||it.isMeshPhongMaterial||it.isMeshStandardMaterial||it.isShadowMaterial||it.isShaderMaterial&&it.lights===!0})(R),ae.lightsStateVersion=Re,ae.needsLights&&(je.ambientLightColor.value=ee.state.ambient,je.lightProbe.value=ee.state.probe,je.directionalLights.value=ee.state.directional,je.directionalLightShadows.value=ee.state.directionalShadow,je.spotLights.value=ee.state.spot,je.spotLightShadows.value=ee.state.spotShadow,je.rectAreaLights.value=ee.state.rectArea,je.ltc_1.value=ee.state.rectAreaLTC1,je.ltc_2.value=ee.state.rectAreaLTC2,je.pointLights.value=ee.state.point,je.pointLightShadows.value=ee.state.pointShadow,je.hemisphereLights.value=ee.state.hemi,je.directionalShadowMap.value=ee.state.directionalShadowMap,je.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,je.spotShadowMap.value=ee.state.spotShadowMap,je.spotLightMatrix.value=ee.state.spotLightMatrix,je.spotLightMap.value=ee.state.spotLightMap,je.pointShadowMap.value=ee.state.pointShadowMap,je.pointShadowMatrix.value=ee.state.pointShadowMatrix),ae.currentProgram=Ye,ae.uniformsList=null,Ye}function $n(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=na.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function ma(R,Y){let ie=Q.get(R);ie.outputColorSpace=Y.outputColorSpace,ie.batching=Y.batching,ie.batchingColor=Y.batchingColor,ie.instancing=Y.instancing,ie.instancingColor=Y.instancingColor,ie.instancingMorph=Y.instancingMorph,ie.skinning=Y.skinning,ie.morphTargets=Y.morphTargets,ie.morphNormals=Y.morphNormals,ie.morphColors=Y.morphColors,ie.morphTargetsCount=Y.morphTargetsCount,ie.numClippingPlanes=Y.numClippingPlanes,ie.numIntersection=Y.numClipIntersection,ie.vertexAlphas=Y.vertexAlphas,ie.vertexTangents=Y.vertexTangents,ie.toneMapping=Y.toneMapping}ai.setAnimationLoop(function(R){nr&&nr(R)}),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(R){nr=R,Lt.setAnimationLoop(R),R===null?ai.stop():ai.start()},Lt.addEventListener("sessionstart",Zt),Lt.addEventListener("sessionend",ir),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0)return void lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(Y),Y=Lt.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,Y,W),y=We.get(R,w.length),y.init(Y),w.push(y),S.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Be.setFromProjectionMatrix(S,Hi,Y.reversedDepth),T=this.localClippingEnabled,Ge=ut.init(this.clippingPlanes,T),g=Le.get(R,b.length),g.init(),b.push(g),Lt.enabled===!0&&Lt.isPresenting===!0){let ve=M.xr.getDepthSensingMesh();ve!==null&&ds(ve,Y,-1/0,M.sortObjects)}ds(R,Y,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(xe,de),P=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,P&&Te.addToRenderList(g,R),this.info.render.frame++,Ge===!0&&ut.beginShadows();let ie=y.state.shadowsArray;wt.render(ie,R,Y),Ge===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let ae=g.opaque,ee=g.transmissive;if(y.setupLights(),Y.isArrayCamera){let ve=Y.cameras;if(ee.length>0)for(let Re=0,Ie=ve.length;Re<Ie;Re++)oi(ae,ee,R,ve[Re]);P&&Te.render(R);for(let Re=0,Ie=ve.length;Re<Ie;Re++){let Ne=ve[Re];fa(g,R,Ne,Ne.viewport)}}else ee.length>0&&oi(ae,ee,R,Y),P&&Te.render(R),fa(g,R,Y);W!==null&&I===0&&(ce.updateMultisampleRenderTarget(W),ce.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(M,R,Y),kt.resetDefaultState(),z=-1,N=null,w.pop(),w.length>0?(y=w[w.length-1],Ge===!0&&ut.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,b.pop(),g=b.length>0?b[b.length-1]:null},this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,Y,ie){let ae=Q.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),Q.get(R.texture).__webglTexture=Y,Q.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ie,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){let ie=Q.get(R);ie.__webglFramebuffer=Y,ie.__useDefaultFramebuffer=Y===void 0};let Di=B.createFramebuffer();this.setRenderTarget=function(R,Y=0,ie=0){W=R,H=Y,I=ie;let ae=!0,ee=null,ve=!1,Re=!1;if(R){let Ie=Q.get(R);if(Ie.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(B.FRAMEBUFFER,null),ae=!1;else if(Ie.__webglFramebuffer===void 0)ce.setupRenderTarget(R);else if(Ie.__hasExternalTextures)ce.rebindTextures(R,Q.get(R.texture).__webglTexture,Q.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ye=R.depthTexture;if(Ie.__boundDepthTexture!==Ye){if(Ye!==null&&Q.has(Ye)&&(R.width!==Ye.image.width||R.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(R)}}let Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);let Xe=Q.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(ee=Array.isArray(Xe[Y])?Xe[Y][ie]:Xe[Y],ve=!0):ee=R.samples>0&&ce.useMultisampledRTT(R)===!1?Q.get(R).__webglMultisampledFramebuffer:Array.isArray(Xe)?Xe[ie]:Xe,Z.copy(R.viewport),L.copy(R.scissor),j=R.scissorTest}else Z.copy(se).multiplyScalar(he).floor(),L.copy(pe).multiplyScalar(he).floor(),j=ge;if(ie!==0&&(ee=Di),q.bindFramebuffer(B.FRAMEBUFFER,ee)&&ae&&q.drawBuffers(R,ee),q.viewport(Z),q.scissor(L),q.setScissorTest(j),ve){let Ie=Q.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ie.__webglTexture,ie)}else if(Re){let Ie=Y;for(let Ne=0;Ne<R.textures.length;Ne++){let Xe=Q.get(R.textures[Ne]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ne,Xe.__webglTexture,ie,Ie)}}else if(R!==null&&ie!==0){let Ie=Q.get(R.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ie.__webglTexture,ie)}z=-1},this.readRenderTargetPixels=function(R,Y,ie,ae,ee,ve,Re,Ie=0){if(!R||!R.isWebGLRenderTarget)return void lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){q.bindFramebuffer(B.FRAMEBUFFER,Ne);try{let Xe=R.textures[Ie],Ye=Xe.format,je=Xe.type;if(!ne.textureFormatReadable(Ye))return void lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(je))return void lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");Y>=0&&Y<=R.width-ae&&ie>=0&&ie<=R.height-ee&&(R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ie),B.readPixels(Y,ie,ae,ee,sn.convert(Ye),sn.convert(je),ve))}finally{let Xe=W!==null?Q.get(W).__webglFramebuffer:null;q.bindFramebuffer(B.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ie,ae,ee,ve,Re,Ie=0){if(!R||!R.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Q.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Re!==void 0&&(Ne=Ne[Re]),Ne){if(Y>=0&&Y<=R.width-ae&&ie>=0&&ie<=R.height-ee){q.bindFramebuffer(B.FRAMEBUFFER,Ne);let Xe=R.textures[Ie],Ye=Xe.format,je=Xe.type;if(!ne.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let it=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.bufferData(B.PIXEL_PACK_BUFFER,ve.byteLength,B.STREAM_READ),R.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Ie),B.readPixels(Y,ie,ae,ee,sn.convert(Ye),sn.convert(je),0);let xt=W!==null?Q.get(W).__webglFramebuffer:null;q.bindFramebuffer(B.FRAMEBUFFER,xt);let Xt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qp(B,Xt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,it),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ve),B.deleteBuffer(it),B.deleteSync(Xt),ve}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,Y=null,ie=0){let ae=Math.pow(2,-ie),ee=Math.floor(R.image.width*ae),ve=Math.floor(R.image.height*ae),Re=Y!==null?Y.x:0,Ie=Y!==null?Y.y:0;ce.setTexture2D(R,0),B.copyTexSubImage2D(B.TEXTURE_2D,ie,0,0,Re,Ie,ee,ve),q.unbindTexture()};let ga=B.createFramebuffer(),Po=B.createFramebuffer();this.copyTextureToTexture=function(R,Y,ie=null,ae=null,ee=0,ve=null){let Re,Ie,Ne,Xe,Ye,je,it,xt,Xt;ve===null&&(ee!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=ee,ee=0):ve=0);let Tt=R.isCompressedTexture?R.mipmaps[ve]:R.image;if(ie!==null)Re=ie.max.x-ie.min.x,Ie=ie.max.y-ie.min.y,Ne=ie.isBox3?ie.max.z-ie.min.z:1,Xe=ie.min.x,Ye=ie.min.y,je=ie.isBox3?ie.min.z:0;else{let Tn=Math.pow(2,-ee);Re=Math.floor(Tt.width*Tn),Ie=Math.floor(Tt.height*Tn),Ne=R.isDataArrayTexture?Tt.depth:R.isData3DTexture?Math.floor(Tt.depth*Tn):1,Xe=0,Ye=0,je=0}ae!==null?(it=ae.x,xt=ae.y,Xt=ae.z):(it=0,xt=0,Xt=0);let At=sn.convert(Y.format),st=sn.convert(Y.type),Dt;Y.isData3DTexture?(ce.setTexture3D(Y,0),Dt=B.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ce.setTexture2DArray(Y,0),Dt=B.TEXTURE_2D_ARRAY):(ce.setTexture2D(Y,0),Dt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,Y.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,Y.unpackAlignment);let qt=B.getParameter(B.UNPACK_ROW_LENGTH),Je=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Ke=B.getParameter(B.UNPACK_SKIP_PIXELS),En=B.getParameter(B.UNPACK_SKIP_ROWS),li=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Tt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Tt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Xe),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ye),B.pixelStorei(B.UNPACK_SKIP_IMAGES,je);let Cr=R.isDataArrayTexture||R.isData3DTexture,Yn=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){let Tn=Q.get(R),ln=Q.get(Y),kn=Q.get(Tn.__renderTarget),ps=Q.get(ln.__renderTarget);q.bindFramebuffer(B.READ_FRAMEBUFFER,kn.__webglFramebuffer),q.bindFramebuffer(B.DRAW_FRAMEBUFFER,ps.__webglFramebuffer);for(let Hn=0;Hn<Ne;Hn++)Cr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Q.get(R).__webglTexture,ee,je+Hn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Q.get(Y).__webglTexture,ve,Xt+Hn)),B.blitFramebuffer(Xe,Ye,Re,Ie,it,xt,Re,Ie,B.DEPTH_BUFFER_BIT,B.NEAREST);q.bindFramebuffer(B.READ_FRAMEBUFFER,null),q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ee!==0||R.isRenderTargetTexture||Q.has(R)){let Tn=Q.get(R),ln=Q.get(Y);q.bindFramebuffer(B.READ_FRAMEBUFFER,ga),q.bindFramebuffer(B.DRAW_FRAMEBUFFER,Po);for(let kn=0;kn<Ne;kn++)Cr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Tn.__webglTexture,ee,je+kn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Tn.__webglTexture,ee),Yn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,ve,Xt+kn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,ve),ee!==0?B.blitFramebuffer(Xe,Ye,Re,Ie,it,xt,Re,Ie,B.COLOR_BUFFER_BIT,B.NEAREST):Yn?B.copyTexSubImage3D(Dt,ve,it,xt,Xt+kn,Xe,Ye,Re,Ie):B.copyTexSubImage2D(Dt,ve,it,xt,Xe,Ye,Re,Ie);q.bindFramebuffer(B.READ_FRAMEBUFFER,null),q.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Yn?R.isDataTexture||R.isData3DTexture?B.texSubImage3D(Dt,ve,it,xt,Xt,Re,Ie,Ne,At,st,Tt.data):Y.isCompressedArrayTexture?B.compressedTexSubImage3D(Dt,ve,it,xt,Xt,Re,Ie,Ne,At,Tt.data):B.texSubImage3D(Dt,ve,it,xt,Xt,Re,Ie,Ne,At,st,Tt):R.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ve,it,xt,Re,Ie,At,st,Tt.data):R.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ve,it,xt,Tt.width,Tt.height,At,Tt.data):B.texSubImage2D(B.TEXTURE_2D,ve,it,xt,Re,Ie,At,st,Tt);B.pixelStorei(B.UNPACK_ROW_LENGTH,qt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Je),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ke),B.pixelStorei(B.UNPACK_SKIP_ROWS,En),B.pixelStorei(B.UNPACK_SKIP_IMAGES,li),ve===0&&Y.generateMipmaps&&B.generateMipmap(Dt),q.unbindTexture()},this.initRenderTarget=function(R){Q.get(R).__webglFramebuffer===void 0&&ce.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ce.setTextureCube(R,0):R.isData3DTexture?ce.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ce.setTexture2DArray(R,0):ce.setTexture2D(R,0),q.unbindTexture()},this.resetState=function(){H=0,I=0,W=null,q.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Mt._getUnpackColorSpace()}};var $i={defaultMemorial:"demo",dataDir:"./data/",hostPin:"0000",firebaseDatabaseURL:"",presenceIntervalMs:1500},bn={skin:"#f2c7a5",hair:"short",hairColor:"#231d1a",eyes:"dot",brows:"soft",mouth:"calm",glasses:"none",beard:"none",blush:!0,height:1},Nf={demo:!1,deceased:{name:"\uACE0\uC778",birth:"",death:"",age:""},mourners:"",funeral:{departure:"",departureAt:"",burial:""},greeting:"",thanks:"\uBC14\uC058\uC2E0 \uAC00\uC6B4\uB370 \uCC3E\uC544\uC640 \uC704\uB85C\uD574 \uC8FC\uC154\uC11C \uC9C4\uC2EC\uC73C\uB85C \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.",religion:"traditional",theme:"hospital",bgm:"wind",customBgm:"",hostOutfit:"hostSuit",hostLook:{...bn},hostName:"\uC0C1\uC8FC",portrait:"",gallery:[],account:{bank:"",number:"",holder:""},kakaopayLink:"",toss:!0},ns={hospital:{label:"\uBCD1\uC6D0 \uC7A5\uB840\uC2DD\uC7A5",icon:"\u{1F3E5}",desc:"\uAC00\uC7A5 \uC775\uC219\uD55C \uBCD1\uC6D0 \uC7A5\uB840\uC2DD\uC7A5 \uBE48\uC18C. \uAF43 \uC81C\uB2E8\uACFC \uC81C\uC0AC\uC0C1"},hall:{label:"\uBAA8\uB358 \uCD94\uBAA8\uAD00",icon:"\u{1F3DB}\uFE0F",desc:"\uC720\uB9AC \uBCBD\uACFC \uB098\uBB34 \uB8E8\uBC84\uC758 \uD604\uB300\uC2DD \uCD94\uBAA8\uAD00"},hanok:{label:"\uD55C\uC625 \xB7 \uC0B0\uC0AC",icon:"\u{1F3EF}",desc:"\uAE30\uC640 \uC9C0\uBD95\uACFC \uB9C8\uB8E8, \uADFC\uC870\uB4F1\uC774 \uC788\uB294 \uC804\uD1B5 \uBE48\uC18C"},chapel:{label:"\uAD50\uD68C \xB7 \uC131\uB2F9",icon:"\u26EA",desc:"\uC2A4\uD14C\uC778\uB4DC\uAE00\uB77C\uC2A4\uC640 \uC2ED\uC790\uAC00, \uB098\uBB34 \uC758\uC790\uAC00 \uC788\uB294 \uC608\uBC30\uB2F9"},garden:{label:"\uD558\uB298\uC815\uC6D0",icon:"\u{1F333}",desc:"\uD070 \uB098\uBB34 \uC544\uB798 \uAF43 \uC81C\uB2E8. \uC885\uAD50 \uC0C9\uC774 \uC5C6\uB294 \uC57C\uC678 \uCD94\uBAA8"}},Ff={traditional:"hospital",buddhist:"hanok",christian:"chapel",catholic:"chapel",none:"hospital"},yc={none:{label:"\uB044\uAE30",icon:"\u{1F507}",desc:"\uACE0\uC694\uD558\uAC8C"},wind:{label:"\uBC14\uB78C\uACFC \uD48D\uACBD",icon:"\u{1F390}",desc:"\uCC98\uB9C8 \uB05D \uD48D\uACBD \uC18C\uB9AC\uC640 \uC794\uC794\uD55C \uBC14\uB78C"},moktak:{label:"\uBAA9\uD0C1\uACFC \uC2F1\uC789\uBCFC",icon:"\u{1FAB7}",desc:"\uB290\uB9B0 \uBAA9\uD0C1, \uAC00\uB054 \uC6B8\uB9AC\uB294 \uC2F1\uC789\uBCFC"},hymn:{label:"\uCC2C\uC1A1\uAC00 \uC624\uB974\uAC04",icon:"\u26EA",desc:"\uB098 \uAC19\uC740 \uC8C4\uC778 \uC0B4\uB9AC\uC2E0 (Amazing Grace)"},chorale:{label:"\uD3C9\uC548\uC758 \uC624\uB974\uAC04",icon:"\u{1F56F}\uFE0F",desc:"\uB290\uB9B0 4\uC131\uBD80 \uC624\uB974\uAC04 \uCF54\uB784"},gayageum:{label:"\uAC00\uC57C\uAE08 \uC0B0\uC870 \uD48D",icon:"\u{1FA95}",desc:"\uC624\uC74C\uACC4\uB85C \uCC9C\uCC9C\uD788 \uB72F\uB294 \uAC00\uC57C\uAE08"},piano:{label:"\uC794\uC794\uD55C \uD53C\uC544\uB178",icon:"\u{1F3B9}",desc:"\uC26C\uC5B4 \uAC00\uAE30 \uC88B\uC740 \uB290\uB9B0 \uD53C\uC544\uB178"},rain:{label:"\uCC98\uB9C8 \uBE57\uC18C\uB9AC",icon:"\u{1F327}\uFE0F",desc:"\uBE57\uC18C\uB9AC\uC640 \uB099\uC22B\uBB3C"},custom:{label:"\uACE0\uC778\uC774 \uC88B\uC544\uD558\uB358 \uB178\uB798",icon:"\u{1F4BF}",desc:"\uC0C1\uC8FC\uAC00 \uC62C\uB9B0 \uC74C\uC6D0"}},Yi={traditional:{label:"\uC804\uD1B5 \uC608\uBC95",icon:"\u{1F647}",desc:"\uBD84\uD5A5\uD558\uACE0 \uB450 \uBC88 \uC808\uD55C \uB4A4 \uBC18\uC808",actions:["incense","flower","bow2","silence"],steps:[{id:"guestbook",label:"\uBC29\uBA85\uB85D \uC791\uC131",any:["guestbook"]},{id:"offer",label:"\uBD84\uD5A5 \uB610\uB294 \uD5CC\uD654",any:["incense","flower"]},{id:"bow",label:"\uC601\uC815 \uC55E\uC5D0 \uC7AC\uBC30(\uB450 \uBC88 \uC808)",any:["bow2"]},{id:"greet",label:"\uC0C1\uC8FC\uC640 \uB9DE\uC808, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"condolence",label:"\uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08",any:["condolence"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC721\uAC1C\uC7A5 \uD55C \uADF8\uB987",any:["meal"],optional:!0}]},buddhist:{label:"\uBD88\uAD50",icon:"\u{1FAB7}",desc:"\uBD84\uD5A5\uD558\uACE0 \uD569\uC7A5\uD55C \uB4A4 \uC0BC\uBC30",actions:["incense","hapjang","bow3","beads"],steps:[{id:"guestbook",label:"\uBC29\uBA85\uB85D \uC791\uC131",any:["guestbook"]},{id:"offer",label:"\uBD84\uD5A5",any:["incense","flower"]},{id:"hapjang",label:"\uD569\uC7A5 \uBC18\uBC30",any:["hapjang"]},{id:"bow",label:"\uC0BC\uBC30(\uC138 \uBC88 \uC808)",any:["bow3"]},{id:"greet",label:"\uC0C1\uC8FC\uC640 \uB9DE\uC808, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"condolence",label:"\uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08",any:["condolence"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uACF5\uC591 \uD55C \uADF8\uB987",any:["meal"],optional:!0}]},christian:{label:"\uAE30\uB3C5\uAD50",icon:"\u271D\uFE0F",desc:"\uD5CC\uD654\uD55C \uB4A4 \uBB35\uB3C4\uC640 \uAE30\uB3C4",actions:["flower","silentPrayer","prayer"],steps:[{id:"guestbook",label:"\uBC29\uBA85\uB85D \uC791\uC131",any:["guestbook"]},{id:"offer",label:"\uD5CC\uD654",any:["flower"]},{id:"pray",label:"\uBB35\uB3C4 \uB610\uB294 \uAE30\uB3C4",any:["silentPrayer","prayer"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"condolence",label:"\uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08",any:["condolence"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]},catholic:{label:"\uCC9C\uC8FC\uAD50",icon:"\u{1F56F}\uFE0F",desc:"\uD5CC\uD654, \uC131\uD638\uB97C \uAE0B\uACE0 \uAE30\uB3C4, \uCD1B\uBD88 \uBD09\uD5CC",actions:["flower","sign","prayer","candle"],steps:[{id:"guestbook",label:"\uBC29\uBA85\uB85D \uC791\uC131",any:["guestbook"]},{id:"offer",label:"\uD5CC\uD654 \uB610\uB294 \uCD1B\uBD88 \uBD09\uD5CC",any:["flower","candle"]},{id:"sign",label:"\uC131\uD638 \uAE0B\uAE30",any:["sign"]},{id:"pray",label:"\uACE0\uC778\uC744 \uC704\uD55C \uAE30\uB3C4",any:["prayer"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"condolence",label:"\uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08",any:["condolence"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]},none:{label:"\uC885\uAD50 \uC5C6\uC74C",icon:"\u{1F90D}",desc:"\uD5CC\uD654\uD558\uACE0 \uBB35\uB150\uD55C \uB4A4 \uBAA9\uB840",actions:["flower","silence","nod"],steps:[{id:"guestbook",label:"\uBC29\uBA85\uB85D \uC791\uC131",any:["guestbook"]},{id:"offer",label:"\uD5CC\uD654",any:["flower"]},{id:"silence",label:"\uBB35\uB150",any:["silence","nod"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"condolence",label:"\uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08",any:["condolence"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]}},zu={incense:{label:"\uBD84\uD5A5",icon:"\u{1F525}",key:"incense",altar:!0},flower:{label:"\uD5CC\uD654",icon:"\u{1F33C}",key:"flowers",altar:!0},bow2:{label:"\uC7AC\uBC30",sub:"\uB450 \uBC88 \uC808",icon:"\u{1F647}",key:"bows",altar:!0},bow3:{label:"\uC0BC\uBC30",sub:"\uC138 \uBC88 \uC808",icon:"\u{1F647}",key:"bows",altar:!0},hapjang:{label:"\uD569\uC7A5",icon:"\u{1F64F}",key:"hapjang",altar:!0},beads:{label:"\uC5FC\uC8FC",icon:"\u{1F4FF}",key:"beads",altar:!1},prayer:{label:"\uAE30\uB3C4",icon:"\u{1F64F}",key:"prayers",altar:!0},silentPrayer:{label:"\uBB35\uB3C4",icon:"\u{1F90D}",key:"prayers",altar:!0},sign:{label:"\uC131\uD638",icon:"\u271D\uFE0F",key:"signs",altar:!0},candle:{label:"\uCD1B\uBD88",icon:"\u{1F56F}\uFE0F",key:"candles",altar:!0},silence:{label:"\uBB35\uB150",icon:"\u{1F90D}",key:"silence",altar:!0},nod:{label:"\uBAA9\uB840",icon:"\u{1F642}",key:"bows",altar:!0}},Gu=["\uAC00\uC871","\uCE5C\uCC99","\uCE5C\uAD6C","\uC9C1\uC7A5 \uB3D9\uB8CC","\uD559\uAD50 \uB3D9\uBB38","\uAD50\uD68C\xB7\uC131\uB2F9\xB7\uC808","\uC774\uC6C3","\uC0C1\uC8FC\uC758 \uC9C0\uC778","\uAE30\uD0C0"],Bf=["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.","\uC5BC\uB9C8\uB098 \uC0C1\uC2EC\uC774 \uD06C\uC2ED\uB2C8\uAE4C.","\uBB50\uB77C \uC704\uB85C\uC758 \uB9D0\uC500\uC744 \uB4DC\uB824\uC57C \uD560\uC9C0 \uBAA8\uB974\uACA0\uC2B5\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC2E4 \uAC70\uC608\uC694.","\uB298 \uACC1\uC5D0 \uC788\uC744\uAC8C\uC694. \uD798\uB0B4\uC138\uC694."],Vu=[{id:"yukgaejang",label:"\uC721\uAC1C\uC7A5",icon:"\u{1F372}",ticket:!0,line:"\uB728\uB048\uD55C \uC721\uAC1C\uC7A5 \uD55C \uADF8\uB987. \uC7A5\uB840\uC2DD\uC7A5 \uAD6D\uBB3C\uC740 \uC65C \uC774\uB807\uAC8C \uC704\uB85C\uAC00 \uB420\uAE4C\uC694."},{id:"pyeonyuk",label:"\uD3B8\uC721",icon:"\u{1F969}",ticket:!0,line:"\uC0C8\uC6B0\uC813 \uC0B4\uC9DD \uC62C\uB9B0 \uD3B8\uC721 \uD55C \uC810 \uB4DC\uC168\uC5B4\uC694."},{id:"hongeo",label:"\uD64D\uC5B4\uBB34\uCE68",icon:"\u{1F41F}",ticket:!0,line:"\uC0C8\uCF64\uB2EC\uCF64 \uD64D\uC5B4\uBB34\uCE68. \uD638\uBD88\uD638\uB294 \uAC08\uB824\uB3C4 \uBE60\uC9C0\uBA74 \uC12D\uC12D\uD558\uC8E0."},{id:"jeon",label:"\uBAA8\uB460\uC804",icon:"\u{1F95E}",ticket:!0,line:"\uB3D9\uADF8\uB791\uB561, \uB3D9\uD0DC\uC804, \uAE7B\uC78E\uC804 \uD55C \uC811\uC2DC \uBE44\uC6B0\uC168\uC5B4\uC694."},{id:"tteok",label:"\uB5A1",icon:"\u{1F361}",ticket:!0,line:"\uC808\uD3B8\uACFC \uC2DC\uB8E8\uB5A1. \uC0C1\uAC13\uC9D1 \uB5A1\uC740 \uB098\uB220 \uBA39\uC5B4\uC57C \uBCF5\uC774 \uC628\uB300\uC694."},{id:"snack",label:"\uB9C8\uB978\uC548\uC8FC",icon:"\u{1F95C}",ticket:!0,line:"\uB545\uCF69\uACFC \uC624\uC9D5\uC5B4\uCC44. \uBC24\uC0D8\uD558\uB294 \uBD84\uB4E4\uC758 \uC624\uB79C \uCE5C\uAD6C\uC608\uC694."},{id:"soju",label:"\uC18C\uC8FC \uD55C \uC794",icon:"\u{1F376}",ticket:!0,line:"\uC18C\uC8FC \uD55C \uC794 \uAE30\uC6B8\uC774\uC168\uC5B4\uC694. \uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uB294 \uAC8C \uC608\uC758\uC608\uC694."},{id:"sikhye",label:"\uC2DD\uD61C",icon:"\u{1F964}",ticket:!1,line:"\uC2DC\uC6D0\uD55C \uC2DD\uD61C\uB85C \uB9C8\uC74C\uC744 \uB2EC\uB798\uC168\uC5B4\uC694."},{id:"coffee",label:"\uCEE4\uD53C\uBBF9\uC2A4",icon:"\u2615",ticket:!1,line:"\uC885\uC774\uCEF5 \uCEE4\uD53C\uBBF9\uC2A4. \uC7A5\uB840\uC2DD\uC7A5\uC758 \uACF5\uC2DD \uC74C\uB8CC\uC8E0."}],Zi={phrases:[{id:"\u8CFB\u5100",sub:"\uBD80\uC758 \xB7 \uAC00\uC7A5 \uC77C\uBC18\uC801"},{id:"\u8B39\u5F14",sub:"\uADFC\uC870 \xB7 \uC0BC\uAC00 \uC2AC\uD37C\uD568"},{id:"\u5F14\u610F",sub:"\uC870\uC758 \xB7 \uC2AC\uD514\uC744 \uD568\uAED8"},{id:"\u8FFD\u6155",sub:"\uCD94\uBAA8 \xB7 \uADF8\uB9AC\uC6CC\uD568"},{id:"\u54C0\u60BC",sub:"\uC560\uB3C4 \xB7 \uC2AC\uD37C\uD568"},{id:"\u53EC\u5929",sub:"\uC18C\uCC9C \xB7 \uAE30\uB3C5\uAD50"},{id:"\u4ED9\u901D",sub:"\uC120\uC11C \xB7 \uCC9C\uC8FC\uAD50"},{id:"\uBD80\uC758",sub:"\uD55C\uAE00"}],papers:[{id:"white",label:"\uD770 \uD55C\uC9C0",bg:"#fbf9f2"},{id:"ivory",label:"\uBBF8\uC0C9",bg:"#f3ead6"},{id:"silver",label:"\uC740\uD68C\uC0C9",bg:"#e6e6e1"},{id:"band",label:"\uAC80\uC740 \uB760",bg:"#fbf9f2",band:!0}],seals:[{id:"none",label:"\uC5C6\uC74C",icon:""},{id:"mum",label:"\uAD6D\uD654",icon:"\u{1F33C}"},{id:"lotus",label:"\uC5F0\uAF43",icon:"\u{1FAB7}"},{id:"cross",label:"\uC2ED\uC790\uAC00",icon:"\u271D\uFE0F"},{id:"ribbon",label:"\uADFC\uC870 \uB9AC\uBCF8",icon:"\u{1F397}\uFE0F"}],fonts:[{id:"serif",label:"\uC815\uC790\uCCB4",css:"'Noto Serif KR', 'Gowun Batang', serif"},{id:"brush",label:"\uBD93\uAE00\uC528",css:"'Nanum Brush Script', 'Gowun Batang', serif"},{id:"pen",label:"\uC190\uAE00\uC528",css:"'Nanum Pen Script', 'Gowun Dodum', sans-serif"}]},_c=["\uC870\uBB38\uD560 \uB54C\uB294 \uAC80\uC740\uC0C9\uC774\uB098 \uC9D9\uC740 \uC0C9 \uC637\uC744 \uC785\uACE0, \uD654\uB824\uD55C \uC561\uC138\uC11C\uB9AC\uB294 \uC7A0\uC2DC \uBE7C \uB450\uC138\uC694.","\uD5A5\uC740 \uC624\uB978\uC190\uC73C\uB85C \uC9D1\uC5B4 \uBD88\uC744 \uBD99\uC774\uACE0, \uC785\uC73C\uB85C \uBD88\uC9C0 \uB9D0\uACE0 \uC67C\uC190\uC73C\uB85C \uAC00\uBCCD\uAC8C \uD754\uB4E4\uC5B4 \uAEBC\uC694.","\uC0C1\uAC00\uC5D0\uC11C \uC190\uC744 \uBAA8\uC744 \uB54C\uB294 \uD3C9\uC18C\uC640 \uBC18\uB300\uB85C, \uB0A8\uC790\uB294 \uC624\uB978\uC190\uC744, \uC5EC\uC790\uB294 \uC67C\uC190\uC744 \uC704\uB85C \uC62C\uB824\uC694.","\uC0C1\uC8FC\uC5D0\uAC8C\uB294 \uB9D0\uC744 \uC544\uB07C\uB294 \uAC83\uC774 \uC608\uC758\uC608\uC694. \uC9E7\uC740 \uD55C\uB9C8\uB514\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4.","\uACE0\uC778\uC758 \uC0AC\uB9DD \uC6D0\uC778\uC744 \uC790\uC138\uD788 \uBB3B\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC544\uC694.","\u201C\uD638\uC0C1(\u597D\u55AA)\u201D\uC774\uB77C\uB294 \uB9D0\uC740 \uC720\uAC00\uC871 \uC55E\uC5D0\uC11C\uB294 \uC0BC\uAC00 \uC8FC\uC138\uC694.","\uC870\uC758\uAE08 \uBD09\uD22C \uB4B7\uBA74 \uC67C\uCABD \uC544\uB798\uC5D0 \uC774\uB984\uC744 \uC138\uB85C\uB85C \uC368\uC694. \uC18C\uC18D\uB3C4 \uD568\uAED8 \uC4F0\uBA74 \uC0C1\uC8FC\uAC00 \uC54C\uC544\uBCF4\uAE30 \uC26C\uC6CC\uC694.","\uC870\uC758\uAE08\uC740 3\xB75\xB77\uB9CC \uC6D0\uCC98\uB7FC \uD640\uC218\uB85C \uB9DE\uCD94\uB294 \uD48D\uC2B5\uC774 \uC788\uC5B4\uC694. 10\uB9CC \uC6D0\uC740 \uAD1C\uCC2E\uC544\uC694.","\uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC220\uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uC544\uC694. \uAC74\uBC30 \uB300\uC2E0 \uC870\uC6A9\uD788 \uB9C8\uC74C\uC744 \uB098\uB220\uC694.","\uBC18\uAC00\uC6B4 \uC0AC\uB78C\uC744 \uB9CC\uB098\uB3C4 \uD070 \uC18C\uB9AC\uB85C \uC6C3\uAC70\uB098 \uC778\uC0AC\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC544\uC694.","\uAE30\uB3C5\uAD50\uC2DD \uBE48\uC18C\uC5D0\uC11C\uB294 \uBD84\uD5A5 \uB300\uC2E0 \uD5CC\uD654\uD558\uACE0 \uBB35\uB3C4\uD574\uC694. \uC808\uC740 \uD558\uC9C0 \uC54A\uC544\uB3C4 \uAD1C\uCC2E\uC544\uC694.","\uD5CC\uD654\uD560 \uB54C\uB294 \uAF43\uBD09\uC624\uB9AC\uAC00 \uC601\uC815 \uCABD\uC744 \uD5A5\uD558\uB3C4\uB85D \uB193\uC544\uC694.","\uB9DE\uC808\uC740 \uC0C1\uC8FC\uC640 \uB3D9\uC2DC\uC5D0 \uD558\uACE0, \uD55C \uBC88\uC774\uBA74 \uCDA9\uBD84\uD574\uC694.","\uBC24\uC0D8(\uCCA0\uC57C)\uC740 \uD5A5\uC774 \uAEBC\uC9C0\uC9C0 \uC54A\uAC8C \uC9C0\uD0A4\uBA70 \uACE0\uC778 \uACC1\uC744 \uD568\uAED8 \uC9C0\uD0A4\uB358 \uD48D\uC2B5\uC774\uC5D0\uC694."],Wu={skin:["#f8dcc6","#f2c7a5","#e5b48f","#cf9670","#a26f4f"],hair:[{id:"short",label:"\uC9E7\uC740 \uBA38\uB9AC"},{id:"part",label:"\uAC00\uB974\uB9C8"},{id:"bob",label:"\uB2E8\uBC1C"},{id:"long",label:"\uAE34 \uC0DD\uBA38\uB9AC"},{id:"pony",label:"\uBB36\uC740 \uBA38\uB9AC"},{id:"bun",label:"\uCABD\uBA38\uB9AC\xB7\uBE44\uB140"},{id:"perm",label:"\uBF40\uAE00 \uD30C\uB9C8"},{id:"bald",label:"\uBBFC\uBA38\uB9AC"}],hairColor:[{id:"#231d1a",label:"\uAC80\uC815"},{id:"#3d2b20",label:"\uD751\uAC08\uC0C9"},{id:"#6e4b33",label:"\uAC08\uC0C9"},{id:"#8f8b85",label:"\uBC18\uBC31"},{id:"#e4e0d8",label:"\uBC31\uBC1C"}],eyes:[{id:"dot",label:"\uCF69 \uB208"},{id:"round",label:"\uB3D9\uADF8\uB780 \uB208"},{id:"smile",label:"\uC6C3\uB294 \uB208"},{id:"sad",label:"\uCC98\uC9C4 \uB208"},{id:"closed",label:"\uC9C0\uADF8\uC2DC \uAC10\uC740 \uB208"}],brows:[{id:"soft",label:"\uBCF4\uD1B5"},{id:"sad",label:"\uCC98\uC9C4 \uB208\uC379"},{id:"thick",label:"\uC9D9\uC740 \uB208\uC379"}],mouth:[{id:"calm",label:"\uB2F4\uB2F4"},{id:"smile",label:"\uC605\uC740 \uBBF8\uC18C"},{id:"sad",label:"\uC2DC\uBB34\uB8E9"}],glasses:[{id:"none",label:"\uC5C6\uC74C"},{id:"round",label:"\uB3D9\uADF8\uB780 \uC548\uACBD"},{id:"square",label:"\uBFD4\uD14C \uC548\uACBD"}],beard:[{id:"none",label:"\uC5C6\uC74C"},{id:"mustache",label:"\uCF67\uC218\uC5FC"},{id:"beard",label:"\uD131\uC218\uC5FC"}],height:[{id:.84,label:"\uC544\uC774"},{id:1,label:"\uC5B4\uB978"},{id:1.07,label:"\uD0A4 \uD070"}]},xc=[{id:"cry",icon:"\u{1F622}",label:"\uB208\uBB3C"},{id:"heart",icon:"\u{1F90D}",label:"\uB9C8\uC74C"},{id:"pray",icon:"\u{1F64F}",label:"\uAE30\uB3C4"},{id:"smile",icon:"\u{1F642}",label:"\uBBF8\uC18C"},{id:"dove",icon:"\u{1F54A}\uFE0F",label:"\uD3C9\uC548"}],Of=["\uC624\uB79C\uB9CC\uC774\uC5D0\uC694","\uAC74\uAC15\uD558\uC2DC\uC8E0?","\uB9C8\uC74C\uC774 \uC544\uD504\uB124\uC694","\uC88B\uC740 \uBD84\uC774\uC168\uC5B4\uC694","\uC870\uC2EC\uD788 \uB4E4\uC5B4\uAC00\uC138\uC694","\uB2E4\uC74C\uC5D0 \uAF2D \uBD2C\uC694"];var Fn={get(i,e){try{let t=localStorage.getItem(i);return t?JSON.parse(t):e}catch{return e}},set(i,e){try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch(t){return console.warn(t),!1}},del(i){try{localStorage.removeItem(i)}catch{}}};function Xu(i,e){let t=Array.isArray(i)?[...i]:{...i};for(let[n,r]of Object.entries(e||{}))r&&typeof r=="object"&&!Array.isArray(r)&&i&&typeof i[n]=="object"&&!Array.isArray(i[n])?t[n]=Xu(i[n],r):r!==void 0&&(t[n]=r);return t}var Mc=class{constructor(e,t){this.id=t||"demo";let n=(e.firebaseDatabaseURL||"").trim().replace(/\/+$/,"");this.base=n?`${n}/memorials/${encodeURIComponent(this.id)}`:"",this.remote=!!this.base,this.remoteOk=this.remote}key(e){return`samga:${this.id}:${e}`}async req(e,t,n,r=""){let s=await fetch(`${this.base}/${t}.json${r}`,{method:e,headers:n!==void 0?{"Content-Type":"application/json"}:void 0,body:n!==void 0?JSON.stringify(n):void 0});if(!s.ok)throw new Error(`${e} ${t} \u2192 ${s.status}`);return s.json()}async loadMemorial(e,t){let n={};try{let s=await fetch(e,{cache:"no-cache"});s.ok&&(n=await s.json())}catch(s){console.warn("memorial.json\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s)}this.published=Xu(t,n);let r=Fn.get(this.key("draft"),null);return this.hasDraft=!!r,r?Xu(this.published,r):this.published}saveDraft(e){return Fn.set(this.key("draft"),e)}clearDraft(){Fn.del(this.key("draft")),this.hasDraft=!1}getLocal(e,t){return Fn.get(this.key(e),t)}setLocal(e,t){return Fn.set(this.key(e),t)}async list(e,t=200){if(this.remote&&e!=="condolences")try{let n=`?orderBy=${encodeURIComponent('"$key"')}&limitToLast=${t}`,r=await this.req("GET",e,void 0,n);return this.remoteOk=!0,Object.entries(r||{}).map(([s,a])=>({id:s,...a})).sort((s,a)=>(s.time||0)-(a.time||0))}catch(n){console.warn(n),this.remoteOk=!1}return Fn.get(this.key(e),[])}async add(e,t){let n={...t,time:Date.now()},r=!this.remote||e==="condolences";if(this.remote)try{let a=await this.req("POST",e,{...n,time:{".sv":"timestamp"}});if(n.id=a.name,!r)return n}catch(a){console.warn(a),this.remoteOk=!1}let s=Fn.get(this.key(e),[]);for(n.id=n.id||`l${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,s.push(n);s.length>400;)s.shift();return Fn.set(this.key(e),s),n}async counters(){if(this.remote)try{let e=await this.req("GET","counters");return this.remoteOk=!0,e||{}}catch(e){console.warn(e),this.remoteOk=!1}return Fn.get(this.key("counters"),{})}async bump(e,t=1){if(this.remote)try{await this.req("PUT",`counters/${e}`,{".sv":{increment:t}});return}catch(r){console.warn(r),this.remoteOk=!1}let n=Fn.get(this.key("counters"),{});n[e]=(n[e]||0)+t,Fn.set(this.key("counters"),n)}async getState(e){if(this.remote)try{return await this.req("GET",`state/${e}`)}catch(t){console.warn(t)}return Fn.get(this.key(`state:${e}`),null)}async stampState(e){let t=Date.now();if(this.remote)try{return await this.req("PUT",`state/${e}`,{".sv":"timestamp"})}catch(n){console.warn(n)}return Fn.set(this.key(`state:${e}`),t),t}async presencePut(e,t){this.remote&&await this.req("PUT",`presence/${e}`,{...t,t:{".sv":"timestamp"}})}async presenceGet(){return this.remote?await this.req("GET","presence")||{}:{}}presenceDelete(e){if(this.remote)try{fetch(`${this.base}/presence/${e}.json`,{method:"DELETE",keepalive:!0})}catch{}}};function yo(i){let e=i;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function zf(i=256){let e=document.createElement("canvas");return e.width=e.height=i,e}function y1(i,e,t,n,{petal:r,shade:s,center:a,layers:o=7,count:c=30,seed:l=1}){let h=yo(l);for(let d=o-1;d>=0;d--){let p=(d+1)/o,m=n*(.2+.8*p),v=Math.round(c*(.45+.7*p));for(let _=0;_<v;_++){let g=_/v*Math.PI*2+d*.53+(h()-.5)*.18,y=m*(.78+h()*.22),b=n*(.035+.045*p)*(.85+h()*.3),w=.86+h()*.14;i.save(),i.translate(e,t),i.rotate(g);let M=i.createLinearGradient(y*.05,0,y,0);M.addColorStop(0,s),M.addColorStop(.45,r),M.addColorStop(.92,r),M.addColorStop(1,s),i.globalAlpha=1,i.fillStyle=M,i.beginPath(),i.moveTo(y*.06,0),i.bezierCurveTo(y*.35,-b*.5,y*.62,-b*1.25,y*.92,-b*.9),i.quadraticCurveTo(y*1.04,0,y*.92,b*.9),i.bezierCurveTo(y*.62,b*1.25,y*.35,b*.5,y*.06,0),i.fill(),i.fillStyle=`rgba(0,0,0,${(1-w)*.9})`,i.fill(),i.strokeStyle="rgba(255,255,255,0.55)",i.lineWidth=Math.max(.6,n*.004),i.beginPath(),i.moveTo(y*.25,0),i.lineTo(y*.85,0),i.stroke(),i.strokeStyle="rgba(80,80,60,0.16)",i.lineWidth=Math.max(.6,n*.005),i.beginPath(),i.moveTo(y*.06,0),i.bezierCurveTo(y*.35,-b*.5,y*.62,-b*1.25,y*.92,-b*.9),i.quadraticCurveTo(y*1.04,0,y*.92,b*.9),i.bezierCurveTo(y*.62,b*1.25,y*.35,b*.5,y*.06,0),i.stroke(),i.restore()}let f=i.createRadialGradient(e,t,m*.55,e,t,m*1.02);f.addColorStop(0,"rgba(60,60,40,0)"),f.addColorStop(1,"rgba(60,60,40,0.07)"),i.globalCompositeOperation="source-atop",i.fillStyle=f,i.beginPath(),i.arc(e,t,m,0,Math.PI*2),i.fill(),i.globalCompositeOperation="source-over"}let u=i.createRadialGradient(e,t,0,e,t,n*.13);u.addColorStop(0,a),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.beginPath(),i.arc(e,t,n*.13,0,Math.PI*2),i.fill()}function _1(i,e,t,n,{petal:r,shade:s,seed:a=3}){let o=yo(a);for(let c=0;c<520;c++){let l=o()*Math.PI*2,h=Math.sqrt(o())*n*.92,u=e+Math.cos(l)*h,d=t+Math.sin(l)*h;i.fillStyle=o()<.5?r:s,i.beginPath(),i.ellipse(u,d,n*.06,n*.035,l,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(40,60,20,0.18)",i.lineWidth=.8,i.stroke()}}function x1(i,e,t,n,{petal:r,shade:s,disc:a,ring:o,n:c=34,seed:l=7,inner:h=.26}){let u=yo(l);for(let d=0;d<2;d++)for(let p=0;p<c;p++){let m=p/c*Math.PI*2+d*(Math.PI/c),v=n*(d?.82:.97)*(.92+u()*.08),f=n*.07;i.save(),i.translate(e,t),i.rotate(m);let _=i.createLinearGradient(n*h,0,v,0);_.addColorStop(0,s),_.addColorStop(.3,r),_.addColorStop(1,r),i.fillStyle=_,i.beginPath(),i.moveTo(n*h*.9,-f*.5),i.lineTo(v*.95,-f*.6),i.quadraticCurveTo(v,0,v*.95,f*.6),i.lineTo(n*h*.9,f*.5),i.fill(),i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=1,i.stroke(),i.restore()}i.fillStyle=o,i.beginPath(),i.arc(e,t,n*h,0,Math.PI*2),i.fill(),i.fillStyle=a,i.beginPath(),i.arc(e,t,n*h*.62,0,Math.PI*2),i.fill();for(let d=0;d<60;d++){let p=u()*Math.PI*2,m=u()*n*h*.9;i.fillStyle="rgba(255,230,140,0.5)",i.fillRect(e+Math.cos(p)*m,t+Math.sin(p)*m,2,2)}}function M1(i,e,t){let n=i.createLinearGradient(0,t,0,0);n.addColorStop(0,"#c9d9a0"),n.addColorStop(.28,"#f4f6e8"),n.addColorStop(1,"#ffffff"),i.fillStyle=n,i.beginPath(),i.moveTo(e/2,t),i.bezierCurveTo(e*.02,t*.7,e*.05,t*.25,e/2,2),i.bezierCurveTo(e*.95,t*.25,e*.98,t*.7,e/2,t),i.fill(),i.strokeStyle="rgba(150,170,110,0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(e/2,t),i.lineTo(e/2,t*.12),i.stroke(),i.fillStyle="rgba(170,90,70,0.35)";for(let r=0;r<10;r++)i.fillRect(e*.35+Math.random()*e*.3,t*.55+Math.random()*t*.25,2,3)}function b1(i,e,t){let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"#3f5c30"),n.addColorStop(1,"#6f8f4c"),i.fillStyle=n,i.beginPath(),i.moveTo(e*.02,t/2),i.bezierCurveTo(e*.3,t*.02,e*.75,t*.05,e*.98,t/2),i.bezierCurveTo(e*.75,t*.95,e*.3,t*.98,e*.02,t/2),i.fill(),i.strokeStyle="rgba(220,235,190,0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(e*.04,t/2),i.lineTo(e*.94,t/2),i.stroke();for(let r=1;r<6;r++)i.beginPath(),i.moveTo(e*(.12+r*.13),t/2),i.lineTo(e*(.2+r*.13),t*.22),i.moveTo(e*(.12+r*.13),t/2),i.lineTo(e*(.2+r*.13),t*.78),i.stroke()}var kf={white:{petal:"#fefefb",shade:"#e4e5d6",center:"#eef0dc",seed:11},cream:{petal:"#faf3df",shade:"#e6dcb4",center:"#efe5c4",seed:23},yellow:{petal:"#f7d24f",shade:"#cf9a24",center:"#a47a12",seed:37},pink:{petal:"#f7dfe3",shade:"#ddafb8",center:"#d79aa5",seed:41}},$u={gerbera:{petal:"#f2849c",shade:"#d55c78",disc:"#4a3a1c",ring:"#c9b24a",n:30},gerberaY:{petal:"#ffcf3d",shade:"#e8a21b",disc:"#5a3d14",ring:"#d7a83a",n:30},aster:{petal:"#cf9ad9",shade:"#a86fb6",disc:"#e7c33a",ring:"#f1d75a",n:22,inner:.3}},Bt={},S1={white:"mum.png",gerbera:"gerbera.png",gerberaY:"gerbera_y.png",lying:"mum_lying.png",stem:"mum_stem.png"},E1={cream:"#f6ecd2",yellow:"#f2c230",pink:"#f3d0d8"};async function Gf(i="./flowers/"){let e=r=>new Promise(s=>{let a=new Image;a.onload=()=>s(a),a.onerror=()=>s(null),a.src=i+r}),t=await Promise.all(Object.entries(S1).map(async([r,s])=>[r,await e(s)]));for(let[r,s]of t){if(!s)continue;let a=document.createElement("canvas");a.width=s.width,a.height=s.height,a.getContext("2d").drawImage(s,0,0),Bt[`c:${r}`]=a,Bt[`photo:${r}`]=!0}let n=Bt["c:white"];if(n)for(let[r,s]of Object.entries(E1)){let a=document.createElement("canvas");a.width=n.width,a.height=n.height;let o=a.getContext("2d");o.drawImage(n,0,0),o.globalCompositeOperation="multiply",o.fillStyle=s,o.fillRect(0,0,a.width,a.height),o.globalCompositeOperation="destination-in",o.drawImage(n,0,0),Bt[`c:${r}`]=a,Bt[`photo:${r}`]=!0}}function Yu(i){let e=new _n(i);return e.colorSpace=Ct,e.anisotropy=8,e}function Zu(i){if(Bt[`c:${i}`])return Bt[`c:${i}`];let e=zf(512),t=e.getContext("2d");return i==="lily"?(e.width=128,e.height=256,M1(t,128,256)):i==="pompon"?_1(t,256,256,240,{petal:"#d9e6a6",shade:"#a9c06c"}):i==="leaf"?(e.width=256,e.height=128,b1(t,256,128)):$u[i]?x1(t,256,256,248,$u[i]):y1(t,256,256,248,kf[i]||kf.white),Bt[`c:${i}`]=e,e}function Ju(i){if(Bt[`m:${i}`])return Bt[`m:${i}`];let e=Yu(Zu(i)),t=i==="leaf"?0:Bt[`photo:${i}`]?.1:i==="white"||i==="lily"||i==="cream"?.28:.14,n=new Fe({map:e,alphaTest:.42,side:St,roughness:.85,emissive:"#ffffff",emissiveMap:e,emissiveIntensity:t});return Bt[`m:${i}`]=n,n}function aa(i,e,t=.42*Math.PI,n=1){let r=new vt(1,20,5,0,Math.PI*2,0,t),s=r.attributes.position,a=r.attributes.uv,o=Math.sin(t),c=Math.cos(t);for(let l=0;l<s.count;l++){let h=s.getX(l),u=s.getY(l),d=s.getZ(l);a.setXY(l,.5+h/(2*o)*n,.5+d/(2*o)*n),s.setXYZ(l,h/o*i,(u-c)/(1-c)*e,d/o*i)}return r.computeVertexNormals(),r}function Ku(i){let e=[],t=[],n=[],r=[],s=0;for(let o of i){let c=o.attributes.position,l=o.attributes.normal,h=o.attributes.uv;for(let d=0;d<c.count;d++)e.push(c.getX(d),c.getY(d),c.getZ(d)),t.push(l.getX(d),l.getY(d),l.getZ(d)),n.push(h.getX(d),h.getY(d));let u=o.index.array;for(let d=0;d<u.length;d++)r.push(u[d]+s);s+=c.count}let a=new It;return a.setAttribute("position",new He(e,3)),a.setAttribute("normal",new He(t,3)),a.setAttribute("uv",new He(n,2)),a.setIndex(r),a}var is,ju,qu,bc;function Vf(){if(!is&&Bt["photo:white"]){let i=aa(1,.28,.42*Math.PI,1),e=aa(.6,.3,.42*Math.PI,1);e.rotateY(1.3),e.translate(0,.14,0),is=Ku([i,e]),is.rotateX(Math.PI/2)}if(!is){let i=aa(1,.2,.42*Math.PI,1),e=aa(.74,.36,.42*Math.PI,1);e.rotateY(.9),e.translate(0,.07,0);let t=aa(.48,.42,.45*Math.PI,1);t.rotateY(2.1),t.translate(0,.17,0),is=Ku([i,e,t]),is.rotateX(Math.PI/2)}return is}function T1(){return bc||(bc=aa(1,.12,.4*Math.PI,1),bc.rotateX(Math.PI/2)),bc}function w1(){if(!ju){let i=[];for(let e=0;e<6;e++){let t=new pt(.38,1,2,8),n=t.attributes.position;for(let r=0;r<n.count;r++){let s=n.getY(r)+.5,a=n.getX(r)*(.35+Math.sin(s*Math.PI)*.9);n.setXYZ(r,a,s,.55*s-.62*s*s+Math.abs(a)*.25)}t.computeVertexNormals(),t.rotateZ(e/6*Math.PI*2+e%2*.12),e%2&&t.scale(.9,.9,1),i.push(t)}ju=Ku(i)}return ju}function Wf(){return qu||(qu=new pt(1,.5)),qu}function A1(i){return i==="leaf"?Wf():i==="lily"?w1():$u[i]?T1():Vf()}var Hf={white:[.12,.035],cream:[.12,.03],yellow:[.1,.03],pink:[.11,.03],pompon:[.09,.02],lily:[.2,.04],gerbera:[.1,.015],gerberaY:[.1,.015],aster:[.055,.012],leaf:[.24,.1]};function Xf(i,e,t){let n=new nt,r=new Rn,s=new Rn,a=new E,o=new Qe,c=new E(0,0,1);for(let[l,h]of Object.entries(i)){if(!h.length)continue;let u=new Vi(A1(l),Ju(l),h.length);h.forEach(({p:d,n:p},m)=>{let[v,f]=Hf[l]||Hf.white,_=v+e()*f,g=l==="leaf"?p:p.clone().add(new E((e()-.5)*.45,(e()-.5)*.35,0)).normalize();r.setFromUnitVectors(c,g),s.setFromAxisAngle(c,e()*Math.PI*2),r.multiply(s),a.set(_,_,_),n.compose(d,r,a),u.setMatrixAt(m,n),o.setHSL(0,0,.88+e()*.12),u.setColorAt(m,o)}),u.instanceMatrix.needsUpdate=!0,u.receiveShadow=!0,u.castShadow=l==="lily",u.userData.interact="altar",t.add(u)}}function jf({floor:i}){let e=new Se,t=yo(4321),n={white:[],cream:[],yellow:[],pompon:[],lily:[],gerbera:[],gerberaY:[],aster:[],leaf:[]},r=[{c:[0,1,-9.9],r:[4.25,.5,.55],tier:"low"},{c:[-4.05,1.25,-10.05],r:[1.15,.85,.5],tier:"side"},{c:[4.05,1.25,-10.05],r:[1.15,.85,.5],tier:"side"},{c:[0,2.35,-10.5],r:[1.2,1.15,.45],tier:"top"},{c:[-1.75,2.05,-10.42],r:[.95,.85,.45],tier:"mid"},{c:[1.75,2.05,-10.42],r:[.95,.85,.45],tier:"mid"},{c:[-3,2.2,-10.35],r:[.55,1,.42],tier:"tall"},{c:[3,2.2,-10.35],r:[.55,1,.42],tier:"tall"}],s=.17;for(let l of r){let[h,u,d]=l.c,[p,m,v]=l.r;for(let f=-.25;f<=Math.PI/2;f+=s/Math.max(m,.3)){let _=Math.max(.05,Math.cos(f)),g=s/Math.max(.12,p*_);for(let y=-Math.PI/2-.15;y<=Math.PI/2+.15;y+=g){let b=y+(t()-.5)*g*.5,w=new E(h+p*_*Math.sin(b),i+u+m*Math.sin(f),d+v*_*Math.cos(b)),M=w.y-i;if(Math.abs(w.x)<.74&&M>1.58&&M<3.2&&l.tier==="top")continue;let D=new E((w.x-h)/(p*p),(M-u)/(m*m),(w.z-d)/(v*v)).normalize();D.lerp(new E(0,.25,1).normalize(),.35).normalize();let H="white",I=Math.abs(b)>1.25||f>1.3;M<.62?H=t()<.5?"leaf":"pompon":l.tier==="low"&&w.x>.2&&w.x<2.3&&M<1.45?H=t()<.45?"gerberaY":"yellow":l.tier==="low"&&Math.abs(Math.abs(w.x)-1.75)<.42&&M>1.15?H="lily":l.tier==="top"&&Math.abs(w.x)<.8&&M<1.62&&M>1.2?H="gerbera":l.tier==="top"&&Math.abs(Math.abs(w.x)-.86)<.12&&M>1.6?H="yellow":I&&t()<.45||l.tier==="low"&&t()<.12?H="aster":t()<.06&&(H="cream"),n[H].push({p:w,n:D}),H!=="leaf"&&t()<.25&&n.leaf.push({p:w.clone().addScaledVector(D,-.06).add(new E((t()-.5)*.15,(t()-.5)*.15,0)),n:D.clone().applyAxisAngle(new E(0,1,0),(t()-.5)*1.5)})}}}Xf(n,t,e);let a=new Fe({color:"#34482c",roughness:1});for(let l of r){let h=new X(new vt(1,24,12,-Math.PI/2,Math.PI,0,Math.PI*.62),a);h.scale.set(l.r[0]*.95,l.r[1]*.95,l.r[2]*.9),h.position.set(l.c[0],i+l.c[1]-l.r[1]*.12,l.c[2]-.03),h.rotation.y=0,e.add(h)}let o=new X(new be(9.8,.95,1.5),new Fe({color:"#4f4037",roughness:.6}));o.position.set(0,i+.475,-10.2),o.receiveShadow=!0,e.add(o);let c=new Fe({color:"#1f2620",roughness:.8});for(let l of r){let h=new X(new be(l.r[0]*1.6,.16,l.r[2]*1.2),c);h.position.set(l.c[0],i+l.c[1]-.05,l.c[2]-.05),e.add(h)}return e}function qf({floor:i,z:e=-10.4,width:t=6.6,top:n=2.9,arch:r=1.25,cut:s={w:.98,y0:1.42,y1:3.4},accent:a="yellow"}={}){let o=new Se,c=yo(777),l={white:[],cream:[],[a]:[],pompon:[],lily:[],aster:[],leaf:[]},h=.19,u=0;for(let d=.12;d<=n+r+.1;d+=h*.86,u++)for(let p=-t+u%2*h*.5;p<=t;p+=h){let m=n+r*Math.cos(p/t*(Math.PI/2))**1.3;if(d>m||Math.abs(p)<s.w&&d>s.y0&&d<s.y1)continue;let v=d/4*.4,f=new E(p+(c()-.5)*.05,i+d+(c()-.5)*.05,e-v+(c()-.5)*.06),_=new E((c()-.5)*.4,.3+(c()-.5)*.3,1).normalize(),g=1.2+.55*Math.sin(p*.6+.8)+.16*Math.sin(p*1.7),y="white",b=Math.abs(p)<s.w+.55&&d>s.y0-.25&&d<s.y1+.3;d<.42?y=c()<.55?"pompon":"leaf":b&&c()<.4?y="lily":Math.abs(d-g)<.15?y=a:Math.abs(d-(g+.27))<.08&&c()<.75?y="cream":d>m-.2&&c()<.35&&(y="aster"),l[y].push({p:f,n:_}),y!=="leaf"&&c()<.3&&l.leaf.push({p:f.clone().add(new E((c()-.5)*.18,(c()-.5)*.18,-.07)),n:new E(c()-.5,c()-.5,1).normalize()})}return Xf(l,c,o),o}function $f(i=1){if(!Bt["photo:lying"])return null;let e=Bt["c:lying"];Bt["m:lying"]||(Bt["m:lying"]=new Fe({map:Yu(e),alphaTest:.4,side:St,roughness:.85,emissive:"#ffffff",emissiveMap:Yu(e),emissiveIntensity:.1}));let t=.62,n=t*(e.height/e.width),r=new Se,s=new X(new pt(t,n),Bt["m:lying"]);s.rotation.x=-Math.PI/2;let a=new X(new pt(t,n),Bt["m:lying"]);return a.rotation.x=-Math.PI/2+.55,a.position.y=.04,r.add(s,a),r.scale.setScalar(i),r}function Ti(i=1,e="white"){let t=new Se,n=Bt.stem||(Bt.stem=new Fe({color:"#5d7a46",roughness:.8})),r=new X(new we(.008,.008,.42,6),n);r.position.y=-.21,t.add(r);let s=new X(Wf(),Ju("leaf"));s.scale.setScalar(.11),s.position.set(.04,-.24,0),s.rotation.set(.3,.4,.6),t.add(s);let a=new X(Vf(),Ju(e));return a.scale.setScalar(.07),a.rotation.x=-Math.PI/2,t.add(a),t.scale.setScalar(i),t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function _o(i="white"){let e=`w:${i}`;if(Bt[e])return Bt[e];let t=zf(512),n=t.getContext("2d"),r=Zu("leaf");for(let o=0;o<40;o++){let c=o/40*Math.PI*2;n.save(),n.translate(256+Math.cos(c)*225,256+Math.sin(c)*225),n.rotate(c),n.drawImage(r,-40,-20,80,40),n.restore()}let s=(o,c,l,h)=>{let u=Zu(h);for(let d=0;d<c;d++){let p=d/c*Math.PI*2+o*.01;n.drawImage(u,256+Math.cos(p)*o-l/2,256+Math.sin(p)*o-l/2,l,l)}};return s(205,26,64,i==="yellow"?"yellow":"white"),s(160,22,62,i==="mixed"?"yellow":"white"),s(115,16,60,"white"),s(70,10,58,i==="pink"?"pink":"cream"),s(0,1,92,"white"),Bt[e]=t,t}var _r={suit:{label:"\uAC80\uC740 \uC815\uC7A5",who:"guest",top:"#202228",sleeve:"#202228",pants:"#1b1c21",shirt:!0,tie:"#0e0e10",shoes:"#141414"},shirt:{label:"\uAC80\uC740 \uC154\uCE20",who:"guest",top:"#25272d",sleeve:"#25272d",pants:"#2b2d33",collar2:!0,shoes:"#141414"},dress:{label:"\uAC80\uC740 \uC6D0\uD53C\uC2A4",who:"guest",top:"#1f2025",sleeve:"#1f2025",skirt:"#1f2025",skirtLen:.34,shoes:"#141414",collar:"#f3f1ea"},hanbokBlack:{label:"\uAC80\uC740 \uD55C\uBCF5",who:"guest",top:"#25262c",sleeve:"#25262c",skirt:"#1a1b20",skirtLen:.5,goreum:"#25262c",shoes:"#f3f1ea"},hostSuit:{label:"\uAC80\uC740 \uC591\uBCF5 \xB7 \uC644\uC7A5",who:"host",desc:"\uC694\uC998 \uAC00\uC7A5 \uD754\uD55C \uC0C1\uC8FC \uCC28\uB9BC. \uC67C\uD314\uC5D0 \uC644\uC7A5, \uAC00\uC2B4\uC5D0 \uC0C1\uC8FC \uB9AC\uBCF8",top:"#1b1c21",sleeve:"#1b1c21",pants:"#17181c",shirt:!0,tie:"#0e0e10",shoes:"#141414",armband:!0,ribbon:!0},hostHanbok:{label:"\uAC80\uC740 \uC0C1\uBCF5 \uD55C\uBCF5",who:"host",desc:"\uAC80\uC740 \uCE58\uB9C8\uC800\uACE0\uB9AC\uC5D0 \uD770 \uBA38\uB9AC \uB9AC\uBCF8",top:"#222329",sleeve:"#222329",skirt:"#18191d",skirtLen:.5,goreum:"#f5f3ec",shoes:"#f3f1ea",hairRibbon:!0,ribbon:!0},sambe:{label:"\uC804\uD1B5 \uC0BC\uBCA0 \uC0C1\uBCF5",who:"host",desc:"\uAD74\uAC74\uC81C\uBCF5 \xB7 \uC218\uC9C8 \xB7 \uC694\uC9C8, \uC190\uC5D0 \uC0C1\uC7A5(\uC9C0\uD321\uC774)",top:"#d7c9a6",sleeve:"#d7c9a6",robe:"#d3c49f",shoes:"#cdbd96",hood:!0,rope:"#a89067",cane:!0},sobok:{label:"\uD770 \uC18C\uBCF5",who:"host",desc:"\uD770 \uCE58\uB9C8\uC800\uACE0\uB9AC, \uB2E8\uC815\uD55C \uBA38\uB9AC\uC5D0 \uD770 \uB9AC\uBCF8",top:"#f4f1e8",sleeve:"#f4f1e8",skirt:"#efebe0",skirtLen:.5,goreum:"#e9e4d6",shoes:"#f3f1ea",hairRibbon:!0}},Wt={hipsY:.42,torsoX:0,headX:0,headY:0,aLx:0,aLz:.12,aRx:0,aRz:-.12,lLx:0,lRx:0,lLz:0,lRz:0,eyes:0},Yf=Object.keys(Wt),Et=i=>({...Wt,...i}),Zf=Et({aLx:-2.25,aRx:-2.25,aLz:-.55,aRz:.55,headX:.1,eyes:1}),Jf=Et({hipsY:.17,lLx:1.5,lRx:1.5,torsoX:.12,aLx:-.9,aRx:-.9,aLz:-.25,aRz:.25,eyes:1}),Kf=Et({hipsY:.17,lLx:1.5,lRx:1.5,torsoX:1.18,headX:.15,aLx:-1.85,aRx:-1.85,aLz:-.3,aRz:.3,eyes:1}),oa=Et({torsoX:.5,headX:.25,aLx:-.35,aRx:-.35,aLz:-.35,aRz:.35,eyes:1}),Qu=Et({torsoX:.28,headX:.25,aLz:-.05,aRz:.05,eyes:1}),rs=Et({aLx:-1.25,aRx:-1.25,aLz:-.8,aRz:.8}),Qf=Et({aLx:-1,aRx:-1,aLz:-.8,aRz:.8,torsoX:.42,headX:.25,eyes:1}),la=Et({aLx:-1.05,aRx:-1.05,aLz:-.78,aRz:.78,torsoX:.08,headX:.38,eyes:1}),em=Et({headX:.45,torsoX:.06,aLz:-.12,aRz:.12,aLx:-.15,aRx:-.15,eyes:1}),ed=Et({hipsY:.13,lLx:-1.45,lRx:-1.45,lLz:.18,lRz:-.18,aLx:-.6,aRx:-.6,aLz:-.15,aRz:.15}),tm=Et({...ed,aRx:-2,aRz:.55,headX:-.05}),nm=Et({aRx:-.85,aRz:.15}),Sc=Et({aLx:-1.35,aRx:-1.35,aLz:-.35,aRz:.35,torsoX:.28,headX:.1}),im=Et({aRx:-1.35,aRz:.18,aLx:-.4,aLz:-.4,torsoX:.22,headX:.1}),rm=Et({aLx:-1.2,aRx:-1.2,aLz:-.4,aRz:.4,torsoX:.15}),sm=Et({aRx:-2.6,aRz:-.5}),xo=Et({aRx:-1.25,aRz:.05,torsoX:.15,headX:.15}),Mo=Et({aRx:-1.75,aRz:.15,torsoX:.08,headX:.1}),am=Et({aLx:-1.45,aRx:-1.45,aLz:-.6,aRz:.6,torsoX:.12,headX:.2,eyes:1});function ca(){return[{p:Zf,d:.6},{p:Jf,d:.75},{p:Kf,d:.85},{p:Kf,d:.55},{p:Jf,d:.6},{p:Zf,d:.6}]}var R1={bow:()=>[...ca(),{p:Wt,d:.6}],bow2:()=>[...ca(),...ca(),{p:Wt,d:.5},{p:oa,d:.55},{p:oa,d:.5},{p:Wt,d:.55}],bow3:()=>[...ca(),...ca(),...ca(),{p:Wt,d:.6}],halfBow:()=>[{p:oa,d:.6},{p:oa,d:.8},{p:Wt,d:.6}],nod:()=>[{p:Qu,d:.5},{p:Qu,d:.9},{p:Wt,d:.5}],hapjang:()=>[{p:rs,d:.6},{p:rs,d:.4},{p:Qf,d:.7},{p:Qf,d:1.2},{p:rs,d:.6},{p:Wt,d:.6}],prayer:()=>[{p:la,d:.8},{p:la,d:4.2},{p:Wt,d:.7}],silence:()=>[{p:em,d:.9},{p:em,d:8.2},{p:Wt,d:.8}],sign:()=>[{p:Et({aRx:-2.55,aRz:.42,eyes:1,headX:.15}),d:.6},{p:Et({aRx:-1.45,aRz:.6,eyes:1,headX:.15}),d:.5},{p:Et({aRx:-1.75,aRz:1,eyes:1,headX:.15}),d:.45},{p:Et({aRx:-1.95,aRz:.12,eyes:1,headX:.15}),d:.45},{p:la,d:.6},{p:la,d:1.4},{p:Wt,d:.6}],incense:()=>[{p:im,d:.7,cue:"reach"},{p:im,d:.9,cue:"light"},{p:rs,d:.6},{p:Wt,d:.6}],offer:()=>[{p:Sc,d:.8},{p:Sc,d:.5,cue:"release"},{p:oa,d:.6},{p:oa,d:.6},{p:Wt,d:.6}],candle:()=>[{p:Sc,d:.8},{p:Sc,d:.5,cue:"release"},{p:la,d:.6},{p:la,d:1},{p:Wt,d:.6}],beads:()=>{let i=[{p:rs,d:.5}];for(let e=0;e<7;e++)i.push({p:Et({...rs,headX:.22,eyes:1,aRx:-1.15}),d:.32,cue:"bead"},{p:Et({...rs,headX:.2,eyes:1}),d:.32});return i.push({p:Wt,d:.6}),i},give:()=>[{p:rm,d:.7},{p:rm,d:.4,cue:"release"},{p:Qu,d:.6},{p:Wt,d:.6}],eat:()=>{let i=[];for(let e=0;e<3;e++)i.push({p:tm,d:.55},{p:tm,d:.25,cue:"bite"},{p:ed,d:.6});return i},wave:()=>[{p:sm,d:.4},{p:Et({aRx:-2.6,aRz:-.1}),d:.3},{p:sm,d:.3},{p:Et({aRx:-2.6,aRz:-.1}),d:.3},{p:Wt,d:.5}],shake:()=>[{p:xo,d:.5},{p:Et({...xo,aRx:-1.1}),d:.2},{p:xo,d:.2},{p:Et({...xo,aRx:-1.1}),d:.2},{p:xo,d:.3},{p:Wt,d:.5}],pat:()=>[{p:Mo,d:.5},{p:Et({...Mo,aRx:-1.55}),d:.22},{p:Mo,d:.22},{p:Et({...Mo,aRx:-1.55}),d:.22},{p:Mo,d:.22},{p:Wt,d:.5}],hug:()=>[{p:am,d:.6},{p:am,d:1.6},{p:Wt,d:.6}]},C1={flower:nm,sit:ed,envelope:nm},ot=(i,e={})=>new Fe({color:i,roughness:.75,metalness:0,...e}),wi=class{constructor({outfit:e="suit",look:t=bn}={}){this.root=new Se,this.root.name="avatar",this.body=new Se,this.root.add(this.body),this.hips=new Se,this.torso=new Se,this.head=new Se,this.armL=new Se,this.armR=new Se,this.legL=new Se,this.legR=new Se,this.body.add(this.hips),this.hips.add(this.torso,this.legL,this.legR),this.torso.add(this.head,this.armL,this.armR),this.head.position.y=.66,this.armL.position.set(.25,.43,0),this.armR.position.set(-.25,.43,0),this.legL.position.set(.1,0,0),this.legR.position.set(-.1,0,0),this.cur={...Wt},this.seq=null,this.hold=null,this.walkPhase=0,this.moving=0,this.blinkT=2+Math.random()*3,this.parts=[],this.props={},this.expr=null,this.exprT=0,this.tears=[],this.barefoot=!1,this.outfitId=_r[e]?e:"suit",this.look={...bn,...t},this.rebuild()}get height(){return this.look.height||1}setOutfit(e){this.outfitId=_r[e]?e:"suit",this.rebuild()}setLook(e){this.look={...bn,...e},this.rebuild()}setBarefoot(e){this.barefoot!==e&&(this.barefoot=e,this.rebuild())}part(e,t,n,r,s={}){let a=new X(t,n);return r&&a.position.set(...r),s.rot&&a.rotation.set(...s.rot),s.scale&&a.scale.set(...s.scale),a.castShadow=s.shadow!==!1,e.add(a),this.parts.push(a),a}rebuild(){let e=Object.values(this.props).map(u=>{let d=u.parent===this.handL?"L":"R";return u.parent?.remove(u),[u,d]});for(let u of this.parts)u.parent?.remove(u),u.geometry?.dispose?.();this.parts=[];let t=_r[this.outfitId],n=this.look,r=ot(n.skin,{roughness:.9});this.root.scale.setScalar(n.height||1);let s=this.part(this.head,new vt(.3,32,24),r,[0,0,0],{scale:[1,.94,.96]});s.userData.skin=!0;let a=new vt(.06,14,10);this.handL=this.part(this.armL,a,r,[0,-.34,0]),this.handR=this.part(this.armR,a,r,[0,-.34,0]),this.buildFace(n);let o=ot(t.top);if(t.robe?(this.part(this.torso,new we(.19,.31,.92,20),ot(t.robe,{roughness:1}),[0,.06,0]),this.part(this.torso,new vt(.2,18,12,0,Math.PI*2,0,Math.PI/2),ot(t.robe,{roughness:1}),[0,.5,0])):this.part(this.torso,new Xn(.2,.16,6,18),o,[0,.28,0]),t.shirt){let u=new Mi;u.moveTo(-.075,.12),u.lineTo(.075,.12),u.lineTo(0,-.08),u.closePath(),this.part(this.torso,new yr(u),ot("#f5f4ef"),[0,.4,.198],{rot:[-.12,0,0],shadow:!1}),this.part(this.torso,new be(.035,.14,.01),ot(t.tie),[0,.39,.207],{rot:[-.12,0,0],shadow:!1})}if(t.collar2){for(let u of[-1,1])this.part(this.torso,new be(.08,.05,.01),ot("#2f3238"),[.045*u,.5,.185],{rot:[-.3,0,u*.5],shadow:!1});for(let u=0;u<3;u++)this.part(this.torso,new vt(.01,6,4),ot("#6b6e75"),[0,.42-u*.08,.2],{shadow:!1})}if(t.collar&&this.part(this.torso,new xn(.11,.022,8,24),ot(t.collar),[0,.52,.02],{rot:[Math.PI/2-.25,0,0]}),t.goreum){let u=ot(t.goreum);this.part(this.torso,new be(.05,.05,.03),u,[.05,.36,.2]),this.part(this.torso,new be(.03,.2,.012),u,[.07,.25,.205],{rot:[0,0,.1]}),this.part(this.torso,new be(.03,.16,.012),u,[.03,.26,.207],{rot:[0,0,-.1]}),this.part(this.torso,new be(.03,.2,.012),ot("#f6f4ee"),[-.02,.45,.19],{rot:[-.2,0,-.7],shadow:!1})}if(t.ribbon){let u=ot("#f7f6f2");this.part(this.torso,new rn(.035,.06,4),u,[.1,.43,.2],{rot:[0,0,-Math.PI/2]}),this.part(this.torso,new rn(.035,.06,4),u,[.16,.43,.2],{rot:[0,0,Math.PI/2]}),this.part(this.torso,new be(.025,.07,.01),ot("#111"),[.13,.39,.205])}t.rope&&this.part(this.torso,new xn(.235,.022,8,28),ot(t.rope,{roughness:1}),[0,.14,0],{rot:[Math.PI/2,0,0]});let c=t.robe?ot(t.robe,{roughness:1}):ot(t.sleeve);for(let[u,d]of[[this.armL,1],[this.armR,-1]])this.part(u,new Xn(.07,.2,4,12),c,[0,-.16,0]),t.armband&&d===1&&(this.part(u,new we(.078,.078,.08,16,1,!0),ot("#0f0f10"),[0,-.1,0]),this.part(u,new we(.081,.081,.012,16,1,!0),ot("#f4f4f0"),[0,-.085,0]),this.part(u,new we(.081,.081,.012,16,1,!0),ot("#f4f4f0"),[0,-.115,0]));let l=t.pants?ot(t.pants):ot("#efe9dd"),h=this.barefoot?ot(t.pants?"#1f1f22":"#f3f1ea"):ot(t.shoes);for(let u of[this.legL,this.legR])this.part(u,new Xn(.075,.18,4,10),l,[0,-.17,0]),this.part(u,new be(this.barefoot?.11:.13,.07,.19),h,[0,-.37,.04]);if(t.skirt){let u=t.skirtLen||.4;this.part(this.hips,new we(.2,.34,u,22,1,!0),ot(t.skirt,{side:St}),[0,-u/2+.06,0])}if(t.hood){let u=ot("#d9cba7",{roughness:1});this.part(this.head,new vt(.32,24,16,0,Math.PI*2,0,Math.PI*.62),u,[0,.04,-.03],{rot:[-.62,0,0]});for(let d=-1;d<=1;d++)this.part(this.head,new be(.05,.2,.42),u,[d*.07,.33,0],{rot:[0,0,d*.05]});this.part(this.head,new xn(.3,.028,8,28),ot(t.rope,{roughness:1}),[0,.17,-.02],{rot:[Math.PI/2-.35,0,0]})}else this.buildHair(n,t);t.cane&&this.part(this.handR,new we(.018,.018,1,8),ot("#8a7650"),[0,-.12,.02]);for(let[u,d]of e)(d==="L"?this.handL:this.handR).add(u);this.root.traverse(u=>{u.isMesh&&(u.userData.avatar=this,this.interactTag&&(u.userData.interact=this.interactTag))})}buildHair(e,t){let n=ot(e.hairColor,{roughness:.85}),r=()=>this.part(this.head,new vt(.322,26,16,0,Math.PI*2,0,Math.PI*.58),n,[0,.04,-.025],{rot:[-.6,0,0]});switch(e.hair){case"bald":break;case"part":r(),this.part(this.head,new vt(.15,16,10),n,[.1,.2,.17],{scale:[1.2,.55,.9],rot:[.2,0,-.35]});break;case"bob":r(),this.part(this.head,new we(.33,.35,.3,24,1,!0,1,Math.PI*2-2),ot(e.hairColor,{roughness:.85,side:St}),[0,-.07,-.01]);break;case"long":r(),this.part(this.head,new we(.33,.37,.58,24,1,!0,1.05,Math.PI*2-2.1),ot(e.hairColor,{roughness:.85,side:St}),[0,-.2,-.01]);break;case"pony":r(),this.part(this.head,new Xn(.07,.22,4,10),n,[0,-.12,-.36],{rot:[.35,0,0]}),this.part(this.head,new xn(.06,.015,6,14),ot("#111"),[0,.02,-.32],{rot:[1.2,0,0]});break;case"bun":r(),this.part(this.head,new vt(.115,16,12),n,[0,-.08,-.31]),this.part(this.head,new we(.012,.012,.38,8),ot("#7fa08c",{roughness:.3}),[0,-.07,-.33],{rot:[0,0,Math.PI/2]});break;case"perm":{let s=new vt(.075,10,8),a=new Vi(s,n,46),o=new nt,c=0;for(let l=0;l<4;l++){let h=.15+l*.36,u=l===0?4:8+l*3;for(let d=0;d<u&&c<46;d++){let p=d/u*Math.PI*2+l,m=Math.sin(h)*Math.cos(p),v=Math.cos(h),f=Math.sin(h)*Math.sin(p);f>.55&&v<.6||(o.makeTranslation(m*.31,v*.31+.02,f*.31-.02),a.setMatrixAt(c++,o))}}a.count=c,a.castShadow=!0,this.head.add(a),this.parts.push(a);break}default:r()}if(t.hairRibbon){let s=ot("#fbfaf6");this.part(this.head,new rn(.04,.08,4),s,[.18,.22,.12],{rot:[0,0,-Math.PI/2]}),this.part(this.head,new rn(.04,.08,4),s,[.26,.22,.1],{rot:[0,0,Math.PI/2]})}}buildFace(e){let t=ot("#1d1a18",{roughness:.4});this.eyes=[],this.eyeKind=this.expr==="cry"?"sad":this.expr==="smile"?"smile":e.eyes;let n=this.eyeKind;for(let o of[-1,1]){let c;if(n==="smile")c=this.part(this.head,new xn(.03,.008,6,12,Math.PI),t,[.1*o,-.005,.282],{shadow:!1});else if(n==="closed")c=this.part(this.head,new xn(.03,.007,6,12,Math.PI),t,[.1*o,.01,.282],{rot:[0,0,Math.PI],shadow:!1});else{let p=n==="round"?.042:.032;c=this.part(this.head,new vt(p,12,8),t,[.1*o,n==="sad"?-.01:0,.272],{scale:[1,1.25,.6],shadow:!1}),c.userData.blink=!0,n==="round"&&this.part(this.head,new vt(.011,6,4),ot("#ffffff"),[.1*o+.012,.016,.3],{shadow:!1})}if(this.eyes.push(c),e.blush){let p=new X(new Kt(.04,16),new nn({color:"#f29a8a",transparent:!0,opacity:.45}));p.position.set(.17*o,-.07,.262),p.rotation.y=.5*o,this.head.add(p),this.parts.push(p)}let l=this.expr==="cry"||n==="sad"?"sad":e.brows,h=l==="thick"?2:1,u=l==="sad"?-.38*o:-.06*o,d=ot(e.hair==="bald"?"#5a4a40":e.hairColor);this.part(this.head,new be(.075,.014*h,.012),d,[.1*o,.085,.27],{rot:[-.2,0,u],shadow:!1})}let r=this.expr==="cry"?"sad":this.expr==="smile"?"smile":e.mouth,s=ot("#8a4b45");if(r==="smile"?this.part(this.head,new xn(.03,.007,6,12,Math.PI),s,[0,-.105,.272],{rot:[0,0,Math.PI],shadow:!1}):r==="sad"?this.part(this.head,new xn(.025,.007,6,12,Math.PI),s,[0,-.13,.27],{shadow:!1}):this.part(this.head,new be(.045,.009,.01),s,[0,-.11,.276],{shadow:!1}),e.glasses!=="none"){let o=ot(e.glasses==="square"?"#2a211c":"#9a8a6a",{metalness:e.glasses==="round"?.6:0,roughness:.4});for(let c of[-1,1]){if(e.glasses==="round")this.part(this.head,new xn(.055,.008,6,20),o,[.1*c,.005,.3],{shadow:!1});else{let l=this.part(this.head,new xn(.058,.012,4,4),o,[.1*c,.005,.3],{rot:[0,0,Math.PI/4],scale:[1.25,.9,1],shadow:!1});l.rotation.z=Math.PI/4}this.part(this.head,new be(.008,.008,.2),o,[.17*c,.01,.2],{rot:[0,-.35*c,0],shadow:!1})}this.part(this.head,new be(.06,.008,.008),o,[0,.015,.305],{shadow:!1})}let a=ot(e.hairColor==="#e4e0d8"?"#d8d4cc":e.hairColor,{roughness:.9});(e.beard==="mustache"||e.beard==="beard")&&this.part(this.head,new Xn(.018,.07,4,8),a,[0,-.08,.282],{rot:[0,0,Math.PI/2],shadow:!1}),e.beard==="beard"&&this.part(this.head,new vt(.15,16,10,0,Math.PI*2,Math.PI*.55,Math.PI*.45),a,[0,.02,.06],{scale:[1.05,1.1,1.15]})}setExpression(e,t=4){this.expr=e,this.exprT=t,this.rebuild(),e==="cry"&&(this.tearT=0)}setProp(e,t,n={}){if(t&&!this.props[e]){let r;if(e==="flower"&&(r=Ti(.75),r.rotation.set(.2,0,0),r.position.set(0,-.02,.05)),e==="envelope"&&(r=new X(new be(.2,.012,.11),ot(n.color||"#fbfaf4")),r.rotation.z=.3,r.position.set(0,-.05,.04)),e==="beads"){r=new Se;let s=ot("#5a3a26",{roughness:.35}),a=new vt(.016,8,6);for(let o=0;o<24;o++){let c=o/24*Math.PI*2,l=new X(a,s);l.position.set(Math.cos(c)*.09,Math.sin(c)*.12-.08,0),r.add(l)}}if(!r)return;(e==="beads"?this.handL:this.handR).add(r),this.props[e]=r}else!t&&this.props[e]&&(this.props[e].parent?.remove(this.props[e]),delete this.props[e])}play(e,t,{soft:n=!1}={}){let r=R1[e];return r?(this.seq&&this.seq.resolve?.(),new Promise(s=>{this.seq={steps:r(),i:0,t:0,from:{...this.cur},resolve:s,onCue:t,name:e,soft:n}})):Promise.resolve()}get busy(){return!!this.seq&&!this.seq.soft}cancelSoft(){if(this.seq?.soft){let e=this.seq.resolve;this.seq=null,e()}}finish(){if(!this.seq)return;let e=this.seq;e.i=e.steps.length-1,e.t=0,e.from={...this.cur}}update(e,t){this.moving+=((t?1:0)-this.moving)*Math.min(1,e*10);let n;if(this.seq){let c=this.seq,l=c.steps[c.i];c.t+=e;let h=Math.min(1,c.t/l.d),u=h*h*(3-2*h);n={};for(let d of Yf)n[d]=c.from[d]+(l.p[d]-c.from[d])*u;h>=1&&(l.cue&&c.onCue?.(l.cue),c.i++,c.t=0,c.from={...l.p},c.i>=c.steps.length&&(this.seq=null,c.resolve())),this.cur=n}else{let c=this.hold&&C1[this.hold]||Wt,l=Math.min(1,e*8);for(let h of Yf)this.cur[h]+=(c[h]-this.cur[h])*l;n=this.cur}let r=this.moving;r>.01&&(this.walkPhase+=e*9.5);let s=Math.sin(this.walkPhase)*r,a=this.hold==="flower"||this.hold==="envelope";this.hips.position.y=n.hipsY+Math.abs(Math.cos(this.walkPhase))*.035*r,this.torso.rotation.set(n.torsoX+.04*r,0,s*.04),this.head.rotation.set(n.headX,n.headY,0),this.armL.rotation.set(n.aLx-s*.55,0,n.aLz),this.armR.rotation.set(n.aRx+(a?0:s*.55),0,n.aRz),this.legL.rotation.set(n.lLx+s*.6,0,n.lLz),this.legR.rotation.set(n.lRx-s*.6,0,n.lRz),this.blinkT-=e;let o=n.eyes;this.blinkT<0&&(o=1,this.blinkT<-.12&&(this.blinkT=2.5+Math.random()*3.5));for(let c of this.eyes)c.userData.blink&&(c.scale.y=o>.5?.18:1.25);this.props.beads&&(this.props.beads.rotation.z+=e*.6),this.expr&&(this.exprT-=e,this.expr==="cry"&&(this.tearT=(this.tearT||0)-e,this.tearT<=0&&(this.tearT=.45,this.spawnTear())),this.exprT<=0&&(this.expr=null,this.rebuild()));for(let c=this.tears.length-1;c>=0;c--){let l=this.tears[c];l.life-=e,l.mesh.position.y-=e*.18,l.mesh.material.opacity=Math.min(.85,l.life*1.5),l.life<=0&&(this.head.remove(l.mesh),this.tears.splice(c,1))}}spawnTear(){let e=Math.random()<.5?-1:1,t=new X(new vt(.018,8,6),new Fe({color:"#9fd0ff",transparent:!0,opacity:.85,roughness:.1}));t.scale.set(.8,1.3,.8),t.position.set(.1*e,-.04,.28),this.head.add(t),this.tears.push({mesh:t,life:.9})}};var ze=(i,e={})=>new Fe({color:i,roughness:.82,metalness:0,...e});function Ai(i,e){let t=new _n(i);return t.colorSpace=Ct,t.anisotropy=4,e&&(t.wrapS=t.wrapT=Hr,t.repeat.set(...e)),t}function P1(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#e9e3d6",e.fillRect(0,0,256,256);for(let t=0;t<70;t++){e.strokeStyle=`rgba(160,150,130,${.05+Math.random()*.08})`,e.lineWidth=1+Math.random()*2,e.beginPath();let n=Math.random()*256,r=Math.random()*256;e.moveTo(n,r),e.bezierCurveTo(n+40,r+10,n+60,r+50,n+120,r+40),e.stroke()}return e.strokeStyle="rgba(140,130,115,0.45)",e.lineWidth=2,e.strokeRect(1,1,254,254),i}function Ec(i="#8a6446"){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,256,256);for(let n=0;n<8;n++)t.fillStyle=`rgba(${n%2?"255,240,220":"40,25,15"},0.06)`,t.fillRect(0,n*32,256,32),t.fillStyle="rgba(30,20,10,0.35)",t.fillRect(0,n*32,256,1.5),t.fillRect(n*97%256,n*32,1.5,32);for(let n=0;n<120;n++){t.strokeStyle="rgba(40,25,15,0.08)";let r=Math.random()*256;t.beginPath(),t.moveTo(0,r),t.bezierCurveTo(80,r+3,160,r-3,256,r+1),t.stroke()}return e}function om(i=!1){let e=document.createElement("canvas");e.width=256,e.height=i?256:512;let t=e.getContext("2d"),n=["#3d6fa8","#c24f45","#e3b74a","#5c9a6b","#7d5aa6","#4fa3b8","#e58b4d"];t.save(),t.beginPath(),i?t.arc(128,128,124,0,Math.PI*2):(t.moveTo(8,512),t.lineTo(8,128),t.arc(128,128,120,Math.PI,0),t.lineTo(248,512),t.closePath()),t.clip();let r=32;for(let s=0;s<e.height;s+=r)for(let a=0;a<256;a+=r)t.fillStyle=n[Math.floor(Math.random()*n.length)],t.globalAlpha=.85,t.beginPath(),t.moveTo(a+Math.random()*8,s+Math.random()*8),t.lineTo(a+r-Math.random()*8,s+Math.random()*8),t.lineTo(a+r-Math.random()*8,s+r-Math.random()*8),t.lineTo(a+Math.random()*8,s+r-Math.random()*8),t.fill();t.globalAlpha=1,t.strokeStyle="#26221e",t.lineWidth=4;for(let s=0;s<e.height;s+=r)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();for(let s=0;s<256;s+=r)t.beginPath(),t.moveTo(s,0),t.lineTo(s,e.height),t.stroke();if(i)for(let s=0;s<12;s++){let a=s/12*Math.PI*2;t.beginPath(),t.moveTo(128,128),t.lineTo(128+Math.cos(a)*130,128+Math.sin(a)*130),t.stroke()}else t.fillStyle="rgba(255,248,220,0.85)",t.fillRect(118,150,20,200),t.fillRect(78,200,100,20);return t.restore(),e}function I1(){let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,0);t.addColorStop(0,"#5e4b3d"),t.addColorStop(.5,"#6b5646"),t.addColorStop(1,"#5a4739"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let n=0;n<160;n++){e.strokeStyle=`rgba(90,55,25,${.04+Math.random()*.06})`;let r=Math.random()*512;e.beginPath(),e.moveTo(r,0),e.bezierCurveTo(r+6,170,r-6,340,r+3,512),e.stroke()}return e.fillStyle="#f7f5ef",e.fillRect(56,40,400,300),e.strokeStyle="#3f3229",e.lineWidth=6,e.strokeRect(53,37,406,306),e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=2,e.strokeRect(70,54,372,272),e.strokeStyle="rgba(80,45,20,0.45)",e.lineWidth=3,e.strokeRect(56,380,400,110),e.fillStyle="rgba(255,240,215,0.08)",e.fillRect(56,380,400,110),e.fillStyle="#3f3229",e.fillRect(0,352,512,10),i}function L1(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#d8d6cf",e.fillRect(0,0,256,256);for(let t=0;t<2600;t++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"90,90,85"},${Math.random()*.12})`,e.fillRect(Math.random()*256,Math.random()*256,2,2);return i}function lm(i,{FLOOR:e,textTexture:t,rng:n,deceasedName:r=""}){let s=n(4242),a=new Se,o=[],c=[],l=[],h=[],u=[],d={group:a,boxes:o,circles:c,walkables:l,lampMats:h,shoes:!1,update:(g,y)=>u.forEach(b=>b(g,y)),setName:()=>{}},p=(g,y,b,w)=>o.push({x0:g,x1:y,z0:b,z1:w}),m=(g,y,b={})=>(y&&g.position.set(...y),b.rot&&g.rotation.set(...b.rot),g.castShadow=b.cast!==!1,g.receiveShadow=b.receive!==!1,a.add(g),b.walk&&l.push(g),g),v=(g,y,b,w,M,D)=>m(new X(new be(g,y,b),w),M,D),f=g=>(g.raycast=()=>{},g);function _(g,y){v(21,e,13.5,ze(g,{roughness:.95}),[0,e/2,-5.75],{walk:!0});let b=m(new X(new pt(20.4,13),y),[0,e+.004,-5.9],{rot:[-Math.PI/2,0,0],cast:!1,walk:!0});for(let w=0;w<2;w++)v(7,e*(.66-w*.33),.6,ze(g),[0,e*(.66-w*.33)/2,1.25+w*.6],{walk:!0});return b}if(i==="hospital"){d.shoes=!0,d.ceiling=e+3.7;let g=3.7;_("#cfcbc0",ze("#d9d7d0",{roughness:.75,map:Ai(L1(),[12,8])}));let y=Ai(I1());y.wrapS=Hr;let b=de=>{let se=y.clone();return se.repeat.set(de/2.2,1),se.needsUpdate=!0,new Fe({map:se,roughness:.7})},w=ze("#f3f1ea",{roughness:.9});v(20.6,g,.3,w,[0,e+g/2,-12.2]),p(-10.5,10.5,-12.6,-11.9),f(m(new X(new pt(20.4,g),b(20.4)),[0,e+g/2,-12.04],{cast:!1}));for(let de of[-1,1])v(.3,g,12.2,w,[de*10.15,e+g/2,-6.2]),p(de*10.15-.3,de*10.15+.3,-12.4,-.05),f(m(new X(new pt(12.2,g),b(12.2)),[de*9.99,e+g/2,-6.2],{rot:[0,-de*Math.PI/2,0],cast:!1}));let M=ze("#5e4b3d",{roughness:.55});v(10.4,.5,.3,M,[0,e+3.3,-11.9]);for(let de of[-5.1,5.1])v(.5,g,.4,M,[de,e+g/2,-11.85]);let D=document.createElement("canvas");D.width=1024,D.height=512;let H=D.getContext("2d");H.fillStyle="#9c8b7a",H.fillRect(0,0,1024,512);for(let de=0;de<420;de++){let se=Math.random()*1024;H.strokeStyle=`rgba(${Math.random()<.5?"70,55,42":"205,192,175"},${.05+Math.random()*.08})`,H.lineWidth=.6+Math.random()*1.6,H.beginPath(),H.moveTo(se,0),H.bezierCurveTo(se+(Math.random()-.5)*14,170,se+(Math.random()-.5)*14,340,se+(Math.random()-.5)*8,512),H.stroke()}H.fillStyle="rgba(40,30,22,0.18)";for(let de=0;de<=1024;de+=256)H.fillRect(de-1,0,2,512);let I=Ai(D);f(m(new X(new pt(9.8,g-.05),new Fe({map:I,roughness:.55})),[0,e+(g-.05)/2,-11.6],{cast:!1}));for(let de of[-1,1])v(8.9,g,.3,w,[de*6.05,e+g/2,.75]),f(m(new X(new pt(8.9,g),b(8.9)),[de*6.05,e+g/2,.59],{rot:[0,Math.PI,0],cast:!1})),p(de>0?1.6:-10.5,de>0?10.5:-1.6,.55,.95);v(3.2,g-2.6,.3,w,[0,e+2.6+(g-2.6)/2,.75]);let W=ze("#8a5a32",{roughness:.5});for(let de of[-1,1])f(v(1.5,2.55,.06,W,[de*2.35,e+1.28,1.25],{rot:[0,de*-1.05,0]}));let z=new Fe({roughness:.5});v(3.4,.5,.05,z,[0,e+3.05,.93]),d.setName=de=>{z.map?.dispose(),z.map=t(`\uD2B91\uD638\uC2E4   \u6545 ${de} \uB2D8`,{w:1024,h:150,bg:"#1f2a2c",fg:"#f4efe2",font:'500 70px "Gowun Dodum", sans-serif'}),z.needsUpdate=!0},d.setName(r),m(new X(new pt(20.6,13),ze("#faf9f5",{side:St,emissive:"#fffaf0",emissiveIntensity:.35})),[0,e+g-.005,-5.9],{rot:[Math.PI/2,0,0],cast:!1});let N=new Fe({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:1});h.push(N);for(let de=-8;de<=8;de+=4)for(let se=-10.5;se<=-1;se+=3.2)f(m(new X(new Kt(.16,20),N),[de,e+g-.01,se],{rot:[Math.PI/2,0,0],cast:!1}));for(let de of[-1,1])f(v(.12,.18,12.2,M,[de*9.93,e+g-.1,-6.2],{cast:!1}));f(v(20.2,.18,.12,M,[0,e+g-.1,-11.98],{cast:!1})),v(22,.4,14.6,ze("#d9d3c6"),[0,e+g+.2,-5.85]),v(21.8,.9,.2,ze("#e9e4d8"),[0,e+g+.3,1]),v(5.2,.8,.12,new Fe({map:t("\uC0BC\uAC00 \uC7A5\uB840\uC2DD\uC7A5",{w:1024,h:160,bg:"#2f473e",fg:"#f4efe2",font:'700 92px "Gowun Batang", serif'})}),[0,e+g+1.15,1]);let Z=ze("#1c1c1e",{roughness:.45}),L=new Se,j=new X(new be(.9,.42,2.4),Z);j.position.y=.21,L.add(j);let te=new X(new be(.25,.9,2.4),Z);te.position.set(.33,.45,0),L.add(te);for(let de of[-1.3,1.3]){let se=new X(new be(.9,.6,.22),Z);se.position.set(0,.3,de),L.add(se)}L.position.set(9.35,e,-8.6),L.traverse(de=>{de.isMesh&&(de.castShadow=!0)}),a.add(L),p(8.85,9.9,-9.95,-7.25),v(1,1.05,.7,ze("#f2f1ec",{roughness:.4}),[-9.4,e+.53,-10.9]),p(-9.95,-8.85,-11.3,-10.5);let le=ze("#3b3d42",{metalness:.4,roughness:.4}),oe=new Se,_e=new X(new we(.06,.08,2.4,10),le);_e.position.y=1.2,oe.add(_e);let he=new Fe({color:"#fff4e0",emissive:"#ffd99a",emissiveIntensity:1.1});h.push(he);let xe=new X(new be(.42,.55,.42),he);xe.position.y=2.55,oe.add(xe),d.lanternStand=oe}if(i==="hanok"){d.shoes=!0,d.ceiling=e+5.4;let g=ze("#6a4e3b",{roughness:.7}),y=ze("#4a372b",{roughness:.7});_("#d9d6ca",ze("#c9ad8a",{roughness:.6,map:Ai(Ec("#c3a582"),[6,4])}));let b=ze("#f3efe4",{roughness:.95});v(20.6,5.4,.3,b,[0,e+2.7,-12.2]),p(-10.5,10.5,-12.6,-11.9);for(let z of[-1,1]){v(.3,5.4,12.2,b,[z*10.15,e+2.7,-6.2]),p(z*10.15-.3,z*10.15+.3,-12.4,-.05);for(let N of[.25,5.2])v(.34,.25,12.2,g,[z*10.15,e+N,-6.2]);for(let N=-12;N<=-.4;N+=2.6)v(.36,5.4,.22,g,[z*10.15,e+2.7,N]);for(let N=-11;N<=-1.5;N+=2.6)for(let Z=0;Z<5;Z++)f(v(.32,.03,1.6,g,[z*10.15,e+3.6+Z*.28,N+1.3],{cast:!1}))}for(let z=-10;z<=10;z+=2.5)v(.22,5.4,.36,g,[z,e+2.7,-12.05]);m(new X(new pt(20.6,13),ze("#7a5c45",{side:St})),[0,e+5.4,-5.9],{rot:[Math.PI/2,0,0]});for(let z=-12;z<=.5;z+=1.5)f(v(20.6,.18,.18,y,[0,e+5.3,z],{cast:!1}));for(let z of[-9.7,-5.3,5.3,9.7])m(new X(new we(.27,.3,5.4,20),g),[z,e+2.7,.6]),m(new X(new we(.42,.48,.25,8),ze("#cfccbf")),[z,e+.12,.6]),c.push({x:z,z:.6,r:.45});v(21,.55,.45,y,[0,e+5.15,.6]),v(21.2,.16,.47,ze("#557d6c"),[0,e+4.82,.6]),v(21.2,.05,.48,ze("#8f4235"),[0,e+4.72,.6]),v(3,.9,.1,new Fe({map:t("\uC0BC\uAC00",{w:768,h:230,bg:"#3e5b50",fg:"#f3ead2",font:'700 140px "Gowun Batang", serif',border:"#c9b27c"}),roughness:.6}),[0,e+6.05,.9]);let w=ze("#43464d",{roughness:.75});v(24.5,.4,17.5,w,[0,e+5.65,-5.9]),m(new X(new we(.22,1,1,4,1),w),[0,e+7.45,-5.9],{rot:[0,Math.PI/4,0]}).scale.set(17.6,3.2,12.6),v(9.5,.45,.6,ze("#35373d"),[0,e+9.2,-5.9]);for(let z of[-1,1])v(.7,.75,.7,ze("#35373d"),[z*4.8,e+9.35,-5.9],{rot:[0,0,z*.25]});let D=t("\u8B39\u5F14",{w:256,h:512,bg:"#fbf8ef",fg:"#1d1b19",font:'700 150px "Noto Serif KR", "Gowun Batang", serif',vertical:!0});for(let z of[-4.45,4.45]){let N=new Se,Z=new Fe({map:D,emissive:"#fff4dc",emissiveIntensity:.4,emissiveMap:D,roughness:.9});h.push(Z),N.add(new X(new we(.34,.34,.95,20),Z));let L=new X(new we(.3,.36,.08,20),ze("#1d1d1f")),j=L.clone();L.position.y=.5,j.position.y=-.5,N.add(L,j),N.position.set(z,e+3.9,.9);let te=s()*6;u.push((le,oe)=>{N.rotation.z=Math.sin(oe*.9+te)*.03}),a.add(N)}let H=new Se,I=ze("#bdb9ab",{roughness:1});[[new we(.5,.6,.25,8),.12],[new we(.13,.16,.9,8),.7],[new we(.42,.32,.2,8),1.25],[new be(.55,.5,.55),1.6],[new rn(.62,.45,4),2.07]].forEach(([z,N])=>{let Z=new X(z,I);Z.position.y=N,z.type==="ConeGeometry"&&(Z.rotation.y=Math.PI/4),Z.castShadow=!0,H.add(Z)});let W=new X(new be(.3,.28,.6),new Fe({color:"#ffe0a3",emissive:"#ffc773",emissiveIntensity:1.2}));W.position.y=1.6,H.add(W),h.push(W.material),d.lanternStand=H}if(i==="hall"){d.shoes=!0,d.ceiling=e+4.8,_("#cfcbc0",ze("#eae4d7",{roughness:.35,map:Ai(P1(),[10,6])}));let g=ze("#f4f2ed",{roughness:.9}),y=ze("#8b6a4f",{roughness:.6,map:Ai(Ec("#8b6a4f"),[1,4])});v(20.6,4.8,.3,g,[0,e+2.4,-12.2]),p(-10.5,10.5,-12.6,-11.9);for(let L=-9.6;L<=9.6;L+=.32)Math.abs(L)>6.9&&f(v(.14,4.6,.12,y,[L,e+2.3,-11.98],{cast:!1}));for(let L of[-1,1])v(.3,4.8,12.2,g,[L*10.15,e+2.4,-6.2]),v(.32,1,12.2,y,[L*10.1,e+.5,-6.2]),p(L*10.15-.3,L*10.15+.3,-12.4,-.05);let b=new Fe({color:"#cfe0e6",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1}),w=ze("#3b3d42",{metalness:.4,roughness:.4});for(let L of[-1,1]){let j=L*6.45;f(v(7.7,3.3,.05,b,[j,e+1.65,.75],{cast:!1}));for(let te=2.6;te<=10.3;te+=1.54)f(v(.06,3.3,.08,w,[L*te,e+1.65,.75],{cast:!1}));p(L>0?2.6:-10.3,L>0?10.3:-2.6,.6,.9)}v(20.6,1.5,.3,g,[0,e+4.05,.75]),v(20.6,.08,.1,w,[0,e+3.3,.75]);let M=new Fe({roughness:.5}),D=v(4.2,.6,.06,M,[0,e+3.8,.94]);d.setName=L=>{M.map?.dispose(),M.map=t(`\uD2B91\uD638\uC2E4  \xB7  \u6545 ${L} \uB2D8 \uBE48\uC18C`,{w:1024,h:146,bg:"#2f3a3f",fg:"#f2efe6",font:'500 64px "Gowun Dodum", sans-serif'}),M.needsUpdate=!0},d.setName(r),m(new X(new pt(20.6,13),ze("#fbfaf6",{side:St})),[0,e+4.8,-5.9],{rot:[Math.PI/2,0,0],cast:!1});let H=new Fe({color:"#ffffff",emissive:"#fff6e8",emissiveIntensity:.9});h.push(H);for(let L=-7.5;L<=7.5;L+=3.75)for(let j=-10;j<=-1;j+=3)f(v(1.4,.04,.6,H,[L,e+4.77,j],{cast:!1}));v(21.5,.5,14.2,ze("#5b5e64"),[0,e+5.05,-5.9]),v(21.6,.7,.2,ze("#d8d4ca"),[0,e+5,1.15]);let I=new Se,W=new X(new we(.06,.08,2.4,10),w);W.position.y=1.2,I.add(W);let z=new Fe({color:"#fff4e0",emissive:"#ffd99a",emissiveIntensity:1.1,transparent:!0,opacity:.95});h.push(z);let N=new X(new be(.42,.55,.42),z);N.position.y=2.55,I.add(N);let Z=new X(new be(.55,.06,.55),w);Z.position.y=2.86,I.add(Z),I.traverse(L=>{L.isMesh&&(L.castShadow=!0)}),d.lanternStand=I}if(i==="chapel"){_("#d6d1c4",ze("#9a7656",{roughness:.55,map:Ai(Ec("#9a7656"),[6,4])}));let g=ze("#f5f1e8",{roughness:.95}),y=6.4;d.ceiling=e+y,v(20.6,y,.3,g,[0,e+y/2,-12.2]),p(-10.5,10.5,-12.6,-11.9);let b=Ai(om(!1));for(let he of[-1,1]){v(.3,y,12.2,g,[he*10.15,e+y/2,-6.2]),p(he*10.15-.3,he*10.15+.3,-12.4,-.05);for(let xe of[-10.6,-7.95,-5.25,-2.55]){let de=new Fe({map:b,emissive:"#ffffff",emissiveMap:b,emissiveIntensity:.55,transparent:!0,alphaTest:.1,side:St});h.push(de),f(m(new X(new pt(1,2),de),[he*9.98,e+4.55,xe],{rot:[0,-he*Math.PI/2,0],cast:!1}))}}for(let he of[-1,1])v(8.9,y,.35,g,[he*6.05,e+y/2,.75]),p(he>0?1.6:-10.5,he>0?10.5:-1.6,.55,.95);v(3.2,y-3.6,.35,g,[0,e+3.6+(y-3.6)/2,.75]);let w=new Fe({map:Ai(om(!0)),emissive:"#ffffff",emissiveIntensity:.6,transparent:!0,alphaTest:.1});w.emissiveMap=w.map,h.push(w),f(m(new X(new Kt(.9,32),w),[0,e+5.6,.94],{cast:!1}));let M=ze("#5d4030",{roughness:.6});for(let he of[-1,1])f(v(1.5,3.4,.08,M,[he*2.4,e+1.7,1.15],{rot:[0,he*-.9,0]}));let D=new Mi;D.moveTo(-11.3,0),D.lineTo(0,4.2),D.lineTo(11.3,0),D.lineTo(-11.3,0);let H=m(new X(new js(D,{depth:14.6,bevelEnabled:!1}),ze("#4a4f57",{roughness:.7})),[0,e+y,-13]),I=new Mi;I.moveTo(-10.4,0),I.lineTo(0,3.9),I.lineTo(10.4,0),I.lineTo(-10.4,0),m(new X(new yr(I),g),[0,e+y,.95]),m(new X(new pt(20.6,13),ze("#6b4b36",{side:St})),[0,e+y,-5.9],{rot:[Math.PI/2,0,0],cast:!1});for(let he=-11.5;he<=0;he+=2.3)f(v(20.4,.25,.25,ze("#5a3e2c"),[0,e+y-.15,he],{cast:!1}));v(1.8,2.6,1.8,g,[0,e+y+4,0]);let W=m(new X(new rn(1.45,2.4,4),ze("#4a4f57")),[0,e+y+6.5,0],{rot:[0,Math.PI/4,0]}),z=ze("#d9c07a",{metalness:.6,roughness:.35});v(.12,1,.12,z,[0,e+y+8.1,0]),v(.6,.12,.12,z,[0,e+y+8.3,0]);let N=ze("#6e4c34",{roughness:.5});v(.28,2.4,.16,N,[0,e+5,-11.95]),v(1.4,.26,.16,N,[0,e+5.5,-11.95]);let Z=new nn({color:"#fff4d8",transparent:!0,opacity:.18});f(m(new X(new Kt(1.6,40),Z),[0,e+5.2,-12.03],{cast:!1}));let L=ze("#7a5639",{roughness:.55});for(let he of[-1,1])for(let xe of[-4.2,-3.1]){let de=he>0?5:-8.8,se=he>0?8.8:-5,pe=(de+se)/2,ge=se-de;v(ge,.08,.5,L,[pe,e+.45,xe]),v(ge,.55,.06,L,[pe,e+.75,xe+.25]),v(.08,.9,.55,L,[de,e+.45,xe+.02]),v(.08,.9,.55,L,[se,e+.45,xe+.02]),p(de-.05,se+.05,xe-.3,xe+.32)}for(let he=0;he<9;he++){let xe=1.2+Math.sin(he/8*Math.PI)*1.4;m(new X(new we(.08,.08,xe,10),z),[7.4+he*.22,e+1+xe/2,-11.6])}v(2.3,1,.7,ze("#5d4030"),[8.3,e+.5,-11.3]),p(7.1,9.5,-11.9,-10.9);let j=new Se,te=ze("#2f2b28",{metalness:.5,roughness:.5}),le=new X(new we(.05,.07,1.1,8),te);le.position.y=.55,j.add(le);let oe=new X(new we(.55,.55,.06,20),te);oe.position.y=1.12,j.add(oe);let _e=new Fe({color:"#ffd27a",emissive:"#ffc35a",emissiveIntensity:1.2});h.push(_e);for(let he=0;he<12;he++){let xe=he/12*Math.PI*2,de=he%2?.42:.25,se=new X(new we(.04,.04,.14,8),ze("#fbf6ea"));se.position.set(Math.cos(xe)*de,1.22,Math.sin(xe)*de),j.add(se);let pe=new X(new rn(.02,.06,6),_e);pe.position.set(Math.cos(xe)*de,1.33,Math.sin(xe)*de),j.add(pe)}d.lanternStand=j}if(i==="garden"){_("#b7a68a",ze("#a98563",{roughness:.6,map:Ai(Ec("#a98563"),[5,4])}));let g=ze("#f4f1ea",{roughness:.7}),y=[[-9.8,.4],[-9.8,-5.8],[-9.8,-11.8],[9.8,.4],[9.8,-5.8],[9.8,-11.8],[-4.9,.4],[4.9,.4]];for(let[L,j]of y)v(.25,3.8,.25,g,[L,e+1.9,j]),c.push({x:L,z:j,r:.3});for(let L of[.4,-5.8,-11.8])f(v(20,.18,.22,g,[0,e+3.85,L],{cast:!1}));for(let L=-9.8;L<=9.8;L+=1.4)f(v(.12,.12,12.6,g,[L,e+3.98,-5.7],{cast:!1}));let b=new Fe({color:"#ffffff",transparent:!0,opacity:.55,side:St,roughness:1,depthWrite:!1});for(let L=-9;L<=9;L+=2){let j=new pt(2.1,3.6,6,1),te=j.attributes.position;for(let le=0;le<te.count;le++)te.setZ(le,Math.sin((te.getX(le)+1.05)*3)*.12);f(m(new X(j,b),[L,e+2,-12.05],{cast:!1}))}let w=new Fe({color:"#fff3d0",emissive:"#ffd98a",emissiveIntensity:1.2});h.push(w);let M=new vt(.05,8,6);for(let L of[-2.5,-5.8,-9])for(let j=-9.6;j<=9.6;j+=.6){let te=.45*(1-(j/9.8)**2);f(m(new X(M,w),[j,e+3.75-te,L],{cast:!1}))}let D=m(new X(new we(.45,.8,7,10),ze("#6d5444")),[0,3.5,-15.5]),H=ze("#8fae6a",{flatShading:!0});for(let L=0;L<9;L++)m(new X(new vr(2.4+s()*1.4,0),H),[(s()-.5)*9,8+s()*3,-15-s()*3]);for(let L=-9;L<=9;L+=1.5){if(Math.abs(L)<3)continue;let j=v(.6,.4,.4,ze("#e8e2d6"),[L,e+.2,.9]);for(let te=0;te<4;te++){let le=Ti(1.4,te%3?"white":"cream");le.position.set(L+(te-1.5)*.12,e+.7,.9+(s()-.5)*.1),a.add(le)}p(L-.32,L+.32,.68,1.12)}let I=new Se,W=new X(new be(.14,2.4,.14),ze("#7a5a40"));W.position.y=1.2,I.add(W);let z=new X(new be(.6,.08,.08),ze("#7a5a40"));z.position.set(.25,2.3,0),I.add(z);let N=new Fe({color:"#fff3dc",emissive:"#ffd08a",emissiveIntensity:1.1});h.push(N);let Z=new X(new vt(.24,16,12),N);Z.scale.y=1.2,Z.position.set(.5,1.95,0),I.add(Z),d.lanternStand=I,d.easels=!0}return d}var Oe=.4,Ri=.3,wc=30,De=(i,e={})=>new Fe({color:i,roughness:.82,metalness:0,...e});function cm(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ss(i,{w:e=512,h:t=256,bg:n="#f6f3ea",fg:r="#2a2723",font:s='700 120px "Gowun Batang", serif',vertical:a=!1,border:o=null}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let l=c.getContext("2d");if(n&&(l.fillStyle=n,l.fillRect(0,0,e,t)),o&&(l.strokeStyle=o,l.lineWidth=Math.max(4,e*.02),l.strokeRect(l.lineWidth,l.lineWidth,e-l.lineWidth*2,t-l.lineWidth*2)),l.fillStyle=r,l.font=s,l.textAlign="center",l.textBaseline="middle",a){let u=[...i],d=t/(u.length+.6);u.forEach((p,m)=>l.fillText(p,e/2,d*(m+.8)))}else{let u=i.split(`
`),d=t/(u.length+.4);u.forEach((p,m)=>l.fillText(p,e/2,d*(m+.7)))}let h=new _n(c);return h.colorSpace=Ct,h.anisotropy=4,h}function D1(i){let e=[...i.replace(/\s+/g," ")].slice(0,22),t=document.createElement("canvas");t.width=96,t.height=768;let n=t.getContext("2d");n.fillStyle="#fbfaf6",n.fillRect(0,0,96,768),n.fillStyle="#1b1a18";let r=Math.min(64,740/Math.max(1,e.length));n.font=`700 ${Math.floor(r*.86)}px "Noto Serif KR", "Gowun Batang", serif`,n.textAlign="center",n.textBaseline="middle",e.forEach((a,o)=>n.fillText(a,48,20+r*(o+.5)));let s=new _n(t);return s.colorSpace=Ct,s}function hm(i=64,e="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);s.addColorStop(0,e),s.addColorStop(1,t),r.fillStyle=s,r.fillRect(0,0,i,i);let a=new _n(n);return a.colorSpace=Ct,a}function um(i=""){let e=document.createElement("canvas");e.width=600,e.height=800;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,800);return n.addColorStop(0,"#e9e6dc"),n.addColorStop(1,"#cfcabb"),t.fillStyle=n,t.fillRect(0,0,600,800),t.fillStyle="#a9a291",t.beginPath(),t.ellipse(300,330,130,155,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(300,760,250,240,0,Math.PI,0),t.fill(),t.fillStyle="#6f6a5e",t.font='700 54px "Gowun Batang", serif',t.textAlign="center",t.fillText(i?`\u6545 ${i}`:"\uC601\uC815 \uC0AC\uC9C4",300,700),e.toDataURL("image/jpeg",.9)}function U1(i){let e=document.createElement("canvas");e.width=400,e.height=300;let t=e.getContext("2d"),n=["#e8dfcf","#dfe5dc","#e6dde3","#dde2e8"];return t.fillStyle=n[i%n.length],t.fillRect(0,0,400,300),t.strokeStyle="rgba(80,70,60,.25)",t.lineWidth=3,t.beginPath(),t.moveTo(40,230),t.lineTo(140,130),t.lineTo(210,200),t.lineTo(260,160),t.lineTo(360,240),t.stroke(),t.beginPath(),t.arc(300,90,24,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(70,62,52,.6)",t.font='500 24px "Gowun Dodum", sans-serif',t.textAlign="center",t.fillText("\uCD94\uC5B5 \uC0AC\uC9C4 \uC790\uB9AC",200,278),e}var Tc={day:{top:"#a9c8dc",bottom:"#f1f0e8",fog:"#ebebe3",hemiSky:"#ffffff",hemiGround:"#b8b29d",hemi:1.15,sun:"#fff1df",sunI:1.7,lamp:.55,star:0},dusk:{top:"#7183a8",bottom:"#f0c39f",fog:"#e5c9b2",hemiSky:"#ffe2c8",hemiGround:"#8a7a6a",hemi:.85,sun:"#ffae7a",sunI:1.25,lamp:1.1,star:.15},night:{top:"#0a1427",bottom:"#2b3654",fog:"#1b2338",hemiSky:"#7d8cc0",hemiGround:"#2a2a33",hemi:.42,sun:"#a9bcff",sunI:.35,lamp:2,star:1}};function dm(i){let e=new Gr,t=cm(20261101),n=new Set,r=[],s=[],a=new Map,o=[],c=[],l=(C,F,$,re)=>r.push({x0:C,x1:F,z0:$,z1:re}),h=(C,F,$)=>s.push({x:C,z:F,r:$}),u=(C,F)=>C.traverse($=>{($.isMesh||$.isSprite||$.isInstancedMesh)&&($.userData.interact=F)}),d=C=>(C.raycast=()=>{},C);function p(C,F){return a.set(C,{id:C,...F}),F}let m={top:{value:new Qe},bottom:{value:new Qe}},v=d(new X(new vt(400,32,16),new Cn({uniforms:m,side:Mn,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = clamp(vP.y*1.6+0.15,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, pow(h,0.8)),1.0); }"})));e.add(v);let f=new It,_=[];for(let C=0;C<700;C++){let F=t()*Math.PI*2,$=Math.acos(t()*.9+.08);_.push(Math.sin($)*Math.cos(F)*350,Math.cos($)*350,Math.sin($)*Math.sin(F)*350)}f.setAttribute("position",new He(_,3));let g=new Vs({color:"#ffffff",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1});e.add(d(new Xa(f,g))),e.fog=new za("#ebebe3",40,140);let y=new Xr("#ffffff","#b8b29d",1.1);e.add(y);let b=new jr("#fff1df",1.7);b.position.set(-14,24,16),b.castShadow=!0,b.shadow.mapSize.set(2048,2048),Object.assign(b.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:80}),b.shadow.bias=-6e-4,b.shadow.normalBias=.03,e.add(b,b.target),b.target.position.set(0,0,-2);let w=new X(new Kt(160,64),De("#dcdccd",{roughness:1}));w.rotation.x=-Math.PI/2,w.receiveShadow=!0,e.add(w),n.add(w);let M=new X(new Kt(60,48),De("#cfd6bd",{roughness:1}));M.rotation.x=-Math.PI/2,M.position.y=.005,M.receiveShadow=!0,e.add(M),n.add(M);let D=De("#efeee6",{roughness:.95});for(let C=2.6;C<24;C+=1.25)for(let F of[-1.05,1.05]){let $=new X(new be(2+t()*.06,.06,1.12),D);$.position.set(F+(t()-.5)*.06,.03,C),$.receiveShadow=!0,e.add($),n.add($)}let H=["#b9c4a3","#c7b99a","#a9b896","#c9ae8c"];for(let C=0;C<14;C++){let F=C/14*Math.PI*2+t()*.3,$=95+t()*25,re=d(new X(new vt(30+t()*25,24,12),De(H[C%4],{roughness:1})));re.scale.y=.35+t()*.2,re.position.set(Math.cos(F)*$,-4,Math.sin(F)*$),e.add(re)}let I=null,W=new Se;e.add(W);let z=new Se;z.position.set(-4.6,0,9.5),e.add(z),h(-4.6,9.5,.65);let N=new Wi("#ffcb7a",2,6,2);N.position.set(-4.6,1.9,9.5),e.add(N),p("lantern",{label:"\uB9C8\uC74C \uB4F1\uBD88",verb:"\uB4F1\uBD88 \uB744\uC6B0\uAE30",spot:{x:-3.6,z:10.3,face:-Math.PI*.75},radius:1.5,anchor:new E(-4.6,2.7,9.5)});let Z=new Wi("#fff6ec",18,14,1.6);Z.position.set(0,Oe+4.2,-7.2),e.add(Z);let L=new Wi("#fbf8f2",10,16,1.8);L.position.set(0,Oe+4.3,-2.2),e.add(L);let j=new Se;e.add(j);let te=-10.4,le=null,oe=new X(new be(13.6,4.5,.3),De("#e7e3d8"));oe.position.set(0,Oe+2.25,te-.8),j.add(oe),l(-7,7,-11.9,-9.75);let _e=new Se;_e.position.set(0,Oe,-9.95),j.add(_e);let he=new X(new be(1.32,1.72,.09),De("#121214",{roughness:.35}));he.position.y=2.38,he.castShadow=!0,_e.add(he);let xe=new nn({color:"#ffffff"}),de=new X(new pt(1.1,1.47),xe);de.position.set(0,2.38,.05),_e.add(de);for(let C of[-1,1]){let F=new X(new be(.62,.075,.02),De("#0c0c0d",{roughness:.6}));F.position.set(C*.47,3,.065),F.rotation.z=C*-Math.PI/4,_e.add(F)}let se=new X(new be(.9,1.5,.3),De("#e9e5da"));se.position.set(0,.75,-.1),_e.add(se),u(_e,"portrait");let pe=new Se;pe.position.set(0,Oe+3.8,-10),j.add(pe);let ge=new X(new be(.26,.62,.06),new Fe({color:"#ffffff",roughness:.6}));ge.position.set(-1.35,Oe+1.12,-8.7),j.add(ge);let Be=new Se;j.add(Be);let Ge=new X(new be(3.9,.8,1.1),De("#f4f1e8"));Ge.position.set(0,Oe+.4,-8.4),Ge.castShadow=!0,Ge.receiveShadow=!0,Be.add(Ge),l(-2.05,2.05,-9,-7.8);let T=Oe+.8,S=new Se,V=new X(new we(.17,.12,.15,24),De("#7a6a4a",{metalness:.6,roughness:.4}));V.position.y=.075,S.add(V);let U=new X(new Kt(.15,24),De("#cfc8b8"));U.rotation.x=-Math.PI/2,U.position.y=.14,S.add(U),S.position.set(0,T,-8.15),j.add(S);let x=new Se;x.position.copy(S.position).add(new E(0,.14,0)),j.add(x);let P=[];for(let C of[-1.35,1.35]){let F=new X(new we(.05,.05,.42,14),De("#fbfaf5"));F.position.set(C,T+.21,-8.3),Be.add(F);let $=new X(new rn(.03,.09,10),new nn({color:"#ffcf73"}));$.position.set(C,T+.47,-8.3),Be.add($),P.push($)}let G=new Wi("#ffbf6a",3,5,2);G.position.set(0,T+.6,-8),e.add(G);let O=["#c9493b","#e3c063","#d78f3c"];[-.7,.7].forEach((C,F)=>{let $=new X(new we(.2,.15,.06,20),De("#efe9da"));$.position.set(C,T+.03,-8.55),Be.add($);for(let re=0;re<4;re++){let ye=new X(new vt(.075,14,10),De(O[(F+re)%3],{roughness:.5}));ye.position.set(C+(re%2?.07:-.07),T+.13+(re>1?.11:0),-8.55+(re===1?.05:-.03)),Be.add(ye)}}),u(Ge,"altar"),u(S,"altar");let ne=new X(new be(3.7,.1,.95),De("#efece2"));ne.position.set(0,Oe+.05,-7.25),ne.receiveShadow=!0,Be.add(ne),l(-1.9,1.9,-7.75,-6.8);let q=new Se;j.add(q),u(ne,"altar");let K=new X(new be(.85,.08,.85),De("#4b4f5c"));K.position.set(0,Oe+.04,-6.15),K.receiveShadow=!0,j.add(K),n.add(K);let Q=new Se;j.add(Q);let ce=Oe+.95,fe=new Fe({color:"#e4e2dc",roughness:.7}),Ae=De("#4f4037",{roughness:.5}),Ue=new X(new be(3.9,.95,1.1),Ae);Ue.position.set(0,Oe+.475,-8.4),Ue.castShadow=!0,Ue.receiveShadow=!0,Q.add(Ue);for(let C=0;C<4;C++){let F=new X(new pt(.86,.72),fe);F.position.set(-1.43+C*.953,Oe+.47,-7.845),Q.add(F)}let $e=new X(new be(3.95,.02,1.15),new Fe({color:"#cfe0dc",transparent:!0,opacity:.35,roughness:.05}));$e.position.set(0,ce+.01,-8.4),Q.add($e);let tt=De("#8a1d18",{roughness:.3}),rt=De("#c29a45",{metalness:.75,roughness:.3});function mt(C,F,$){let re=new Se,ye=new X(new we(.1,.12,.03,18),tt),Ce=new X(new we(.045,.06,.1,14),tt);Ce.position.y=.065;let Ee=new X(new we(.16,.1,.05,20),tt);Ee.position.y=.14,re.add(ye,Ce,Ee),$(re,.165),re.position.set(C,ce+.02,F),re.traverse(Pe=>{Pe.isMesh&&(Pe.castShadow=!0)}),Q.add(re)}let Le=(C,F,$,re,ye,Ce,Ee=1)=>{let Pe=new X(new vt(F,16,12),De($,{roughness:.45}));return Pe.scale.y=Ee,Pe.position.set(re,ye,Ce),C.add(Pe),Pe},We=(C,F,$=1)=>(re,ye)=>{[[-.07,0],[.07,0],[0,.07]].forEach(([Ce,Ee])=>Le(re,F,C,Ce,ye+F*$,Ee-.02,$)),Le(re,F,C,0,ye+F*$*2.6,0,$)};[[-1.62,We("#a3241c",.035)],[-1.22,We("#6b3f22",.04,.8)],[-.82,We("#e08a3a",.05,.55)],[-.4,We("#d9b264",.085)],[.4,We("#c63b32",.075)],[.82,We("#f0a21f",.05)],[1.22,(C,F)=>{for(let $=0;$<5;$++){let re=new X(new Xn(.025,.16,4,8),De("#f1d23e",{roughness:.5}));re.rotation.set(.3,$*.6,Math.PI/2-.25),re.position.set(($-2)*.03,F+.05,0),C.add(re)}}]].forEach(([C,F])=>mt(C,-8.65,F)),mt(1.66,-8.6,(C,F)=>{let $=Le(C,.17,"#2f6b2c",0,F+.16,0),re=document.createElement("canvas");re.width=128,re.height=64;let ye=re.getContext("2d");ye.fillStyle="#3f7d36",ye.fillRect(0,0,128,64),ye.fillStyle="#1d3d19";for(let Ce=0;Ce<8;Ce++){ye.beginPath(),ye.moveTo(Ce*16,0);for(let Ee=0;Ee<=64;Ee+=8)ye.lineTo(Ce*16+Math.sin(Ee*.4)*3,Ee);ye.lineTo(Ce*16+6,64),ye.lineTo(Ce*16+6,0),ye.fill()}$.material=new Fe({map:new _n(re),roughness:.35})});let wt=new Se,Te=new X(new we(.05,.07,.06,14),tt),gt=new X(new we(.045,.03,.05,14),tt);gt.position.y=.06,wt.add(Te,gt),wt.position.set(0,ce+.03,-8.1),Q.add(wt);function _t(C,F,$,re=.35){let ye=new Se,Ce=new X(new we(.06,.09,.04,16),rt),Ee=new X(new we(.025,.03,re,12),rt);Ee.position.y=re/2;let Pe=new X(new we(.07,.04,.04,16),rt);Pe.position.y=re;let Ve=new X(new we(.035,.035,.2,12),De("#fbfaf5"));Ve.position.y=re+.12;let Nt=new X(new rn(.022,.07,10),new nn({color:"#ffcf73"}));Nt.position.y=re+.26,P.push(Nt),ye.add(Ce,Ee,Pe,Ve,Nt),ye.position.set(C,F,$),ye.traverse(Gt=>{Gt.isMesh&&(Gt.castShadow=!0)}),Q.add(ye)}_t(-1.85,ce+.02,-8.75),_t(1.85,ce+.02,-8.2);let On=new Se,sn=new X(new be(1.25,.05,.6),new Fe({color:"#d7e3df",transparent:!0,opacity:.55,roughness:.05}));sn.position.y=.44;let kt=new X(new be(1.2,.42,.56),De("#4f4037",{roughness:.5}));kt.position.y=.21;let Ht=new X(new pt(.95,.24),De("#c9a04e",{metalness:.6,roughness:.35}));Ht.position.set(0,.21,.282),On.add(sn,kt,Ht),On.position.set(0,Oe,-7.3),On.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),Q.add(On),_t(-.45,Oe+.46,-7.3,.22);let B=new X(new we(.05,.04,.16,14),rt);B.position.set(.42,Oe+.54,-7.3),Q.add(B);for(let C=0;C<6;C++){let F=new X(new we(.005,.005,.3,4),De("#1c1a18"));F.position.set(.42+(C%3-1)*.012,Oe+.66,-7.3+(C>2?.01:-.01)),Q.add(F)}let qn=new Se,si=new X(new we(.07,.07,.3,16),De("#3a2414",{roughness:.2}));si.position.y=.15;let Lt=new X(new we(.025,.06,.12,12),De("#3a2414",{roughness:.2}));Lt.position.y=.36;let tr=new X(new we(.072,.072,.14,16,1,!0),new Fe({map:ss("\uCCAD\uC8FC",{w:256,h:128,bg:"#f6f1e4",fg:"#7a1d18",font:'700 64px "Noto Serif KR", serif'})}));tr.position.y=.14,qn.add(si,Lt,tr),qn.position.set(1.2,Oe,-7.15);let Er=De("#c9ccd1",{metalness:.8,roughness:.25}),Tr=new X(new vt(.09,16,12),Er);Tr.scale.y=.9,Tr.position.set(.95,Oe+.09,-7);let us=new X(new we(.012,.02,.12,8),Er);us.position.set(.86,Oe+.12,-7),us.rotation.z=.9;let pa=new X(new we(.13,.08,.07,20,1,!0),new Fe({color:"#c9ccd1",metalness:.8,roughness:.25,side:St}));pa.position.set(-.95,Oe+.035,-7.05),Q.add(qn,Tr,us,pa);let nr=document.createElement("canvas");nr.width=256,nr.height=192;let Zt=nr.getContext("2d");Zt.fillStyle="#c9a368",Zt.fillRect(0,0,256,192);for(let C=0;C<192;C+=3)Zt.fillStyle=`rgba(120,85,40,${.08+Math.random()*.06})`,Zt.fillRect(0,C,256,1);Zt.strokeStyle="#7a4f24",Zt.lineWidth=6,Zt.strokeRect(3,3,250,186),Zt.lineWidth=3;for(let C of[64,128,192])Zt.beginPath(),Zt.moveTo(C,0),Zt.lineTo(C,192),Zt.stroke();Zt.beginPath(),Zt.moveTo(0,96),Zt.lineTo(256,96),Zt.stroke();let ir=new X(new pt(1.9,1.35),new Fe({map:new _n(nr),roughness:.95}));ir.rotation.x=-Math.PI/2,ir.position.set(0,Oe+.008,-6.15),ir.receiveShadow=!0,Q.add(ir),n.add(ir),u(Ue,"altar"),u(On,"altar");let ai="simple";function ds(C){ai=C;let F=C==="jesa";for(Q.visible=F,Be.visible=!F,K.visible=!F,S.position.set(0,F?Oe+.465:T,F?-7.3:-8.15),V.material.color.set(F?"#b8913a":"#7a6a4a"),x.position.copy(S.position).add(new E(0,.14,0)),ge.position.set(F?0:-1.35,F?ce+.2:Oe+1.12,F?-8.85:-8.7),ge.scale.setScalar(F?.65:1);q.children.length;)q.remove(q.children[0]);An.setCounts(fa)}let fa={};p("altar",{label:"\uC81C\uB2E8",verb:"\uC81C\uB2E8 \uC55E\uC73C\uB85C",spot:{x:0,z:-6.15,face:Math.PI},radius:1.6,anchor:new E(0,Oe+1.6,-7.6)}),p("portrait",{label:"\uC601\uC815",verb:"\uCD94\uC5B5 \uC0C1\uC601\uAD00",spot:{x:0,z:-6.15,face:Math.PI},radius:0,anchor:new E(0,Oe+3.4,-9.9)});let oi=new Se;oi.position.set(-3.2,Oe,-7.4);for(let C=0;C<3;C++){let F=new X(new be(1.1-C*.25,.2,.5-C*.1),De("#5b4535"));F.position.set(0,.55+C*.2,-C*.08),oi.add(F)}let wr=new X(new be(.9,.45,.35),De("#4a372b"));wr.position.y=.225,oi.add(wr),j.add(oi),h(-3.2,-7.4,.65);let Ar=new Se;oi.add(Ar),u(oi,"candles"),p("candles",{label:"\uCD1B\uBD88 \uBD09\uD5CC\uB300",verb:"\uCD1B\uBD88 \uBD09\uD5CC",spot:{x:-3.2,z:-6.4,face:Math.PI},radius:1.2,anchor:new E(-3.2,Oe+1.5,-7.4)});let Rr=new X(new be(1,.04,1.6),De("#3c3f49"));Rr.position.set(4.1,Oe+.02,-5.8),j.add(Rr);let $n={x:4.1,z:-5.8,face:-Math.PI/2},ma={x:2.6,z:-5.8,face:Math.PI/2};p("host",{label:"\uC0C1\uC8FC",verb:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC",spot:ma,radius:1.5,anchor:new E(4.1,Oe+1.9,-5.8)});let Di=new Se,ga=new X(new be(.8,1,.6),new Fe({color:"#ffffff",roughness:.6}));ga.position.y=.5,ga.castShadow=!0,Di.add(ga);let Po=new X(new pt(.42,.62),new Fe({map:ss("\u8CFB\u5100\u51FD",{w:256,h:380,bg:"#fbfaf6",fg:"#1d1b19",font:'700 104px "Noto Serif KR", "Gowun Batang", serif',vertical:!0,border:"#1d1b19"})}));Po.position.set(0,.55,.305),Di.add(Po);let R=new X(new be(.4,.02,.05),De("#111"));R.position.set(0,1.005,0),Di.add(R);let Y=new X(new be(1,.08,.8),De("#4a372b"));Y.position.y=.04,Di.add(Y),Di.position.set(-6.2,Oe,-1.7),j.add(Di),h(-6.2,-1.7,.6),u(Di,"donation"),p("donation",{label:"\uBD80\uC758\uD568",verb:"\uC870\uC758\uAE08 \uB123\uAE30",spot:{x:-6.2,z:-.6,face:Math.PI},radius:1.4,anchor:new E(-6.2,Oe+1.5,-1.7)});let ie=De("#6a4e3b",{roughness:.7}),ae=new Se,ee=new X(new be(1.6,.08,.8),ie);ee.position.y=.78,ae.add(ee);let ve=new X(new be(1.62,.74,.82),De("#f2efe6"));ve.position.y=.37,ae.add(ve);for(let C of[-1,1]){let F=new X(new be(.34,.02,.44),De("#fdfcf7"));F.position.set(C*.18,.84,0),F.rotation.z=C*-.06,ae.add(F)}let Re=new X(new be(.74,.015,.48),De("#20242c"));Re.position.y=.825,ae.add(Re);let Ie=new X(new pt(.7,.22),new Fe({map:ss("\uBC29\uBA85\uB85D",{w:512,h:160,bg:"#fbfaf6",fg:"#26231f",font:'700 92px "Gowun Batang", serif'})}));Ie.position.set(0,.48,.415),ae.add(Ie),ae.position.set(6.2,Oe,-1.6),ae.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),j.add(ae),l(5.3,7.1,-2.1,-1.1),u(ae,"guestbook"),p("guestbook",{label:"\uBC29\uBA85\uB85D",verb:"\uBC29\uBA85\uB85D \uC4F0\uAE30",spot:{x:6.2,z:-.45,face:Math.PI},radius:1.4,anchor:new E(6.2,Oe+1.5,-1.6)});let Ne=new Se,Xe=new X(new we(.45,.32,.45,18),De("#a98b62",{roughness:1}));Xe.position.y=.6,Ne.add(Xe);let Ye=new X(new we(.06,.12,.4,10),ie);Ye.position.y=.2,Ne.add(Ye);for(let C=0;C<20;C++){let F=Ti(1.25),$=t()*Math.PI*2,re=t()*.3;F.position.set(Math.cos($)*re,1+t()*.1,Math.sin($)*re),F.rotation.set((t()-.5)*.6,t()*3,(t()-.5)*.6),Ne.add(F)}Ne.position.set(-3.4,Oe,-1.4),j.add(Ne),h(-3.4,-1.4,.55),u(Ne,"basket"),p("basket",{label:"\uD5CC\uD654\uC6A9 \uAD6D\uD654",verb:"\uAD6D\uD654 \uD55C \uC1A1\uC774 \uB4E4\uAE30",spot:{x:-3.4,z:-.45,face:Math.PI},radius:1.3,anchor:new E(-3.4,Oe+1.6,-1.4)});let je=[],it=new Se;j.add(it),[{x:-9.85,z:-9.3,ry:Math.PI/2},{x:-9.85,z:-6.6,ry:Math.PI/2},{x:-9.85,z:-3.9,ry:Math.PI/2},{x:9.85,z:-9.3,ry:-Math.PI/2},{x:9.85,z:-6.6,ry:-Math.PI/2},{x:9.85,z:-3.9,ry:-Math.PI/2}].forEach((C,F)=>{let $=new Se,re=new X(new be(1.7,1.3,.06),De("#5a4434")),ye=new _n(U1(F));ye.colorSpace=Ct;let Ce=new nn({map:ye}),Ee=new X(new pt(1.5,1.1),Ce);Ee.position.z=.035,$.add(re,Ee),$.position.set(C.x,Oe+2.2,C.z),$.rotation.y=C.ry,j.add($),u($,`photo:${F}`),je.push({group:$,pic:Ee,mat:Ce,placeholder:ye,url:null});let Pe=new Se;for(let Ve of[-1,1]){let Nt=new X(new be(.06,2.1,.06),De("#8a6a4c"));Nt.position.set(C.x-Math.sign(C.x)*.15,Oe+1.05,C.z+Ve*.6),Nt.rotation.x=Ve*.12,Pe.add(Nt)}it.add(Pe),p(`photo:${F}`,{label:"\uCD94\uC5B5 \uC0AC\uC9C4",verb:"\uC0AC\uC9C4 \uBCF4\uAE30",spot:{x:C.x+(C.x<0?1.6:-1.6),z:C.z,face:C.x<0?-Math.PI/2:Math.PI/2},radius:0,anchor:new E(C.x,Oe+3,C.z)})});let xt=new Se;e.add(xt);let Xt=["#141414","#2b2622","#141414","#3b2c22","#f1eee6","#141414","#5a4a3c"],Tt=new Se;e.add(Tt);let At=new X(new be(9,Ri,8.6),De("#d6d2c4"));At.position.set(17,Ri/2,-5),At.receiveShadow=!0,Tt.add(At);let st=new X(new pt(8.8,8.4),De("#d2b693",{roughness:.6}));st.rotation.x=-Math.PI/2,st.position.set(17,Ri+.004,-5),st.receiveShadow=!0,Tt.add(st),n.add(At),n.add(st);for(let[C,F]of[[12.8,-9],[21.2,-9],[12.8,-1],[21.2,-1]]){let $=new X(new we(.2,.22,3.6,14),ie);$.position.set(C,Ri+1.8,F),$.castShadow=!0,Tt.add($),h(C,F,.35)}let Dt=De("#43464d",{roughness:.75}),qt=new X(new be(10.5,.3,10),Dt);qt.position.set(17,Ri+3.7,-5),qt.castShadow=!0,Tt.add(qt);let Je=new X(new we(.25,1,1,4,1),Dt);Je.rotation.y=Math.PI/4,Je.scale.set(7.6,2,7.2),Je.position.set(17,Ri+4.85,-5),Je.castShadow=!0,Tt.add(Je);let Ke=new X(new pt(2.2,.55),new Fe({map:ss("\uC2DD\uB2F9 \xB7 \uC811\uAC1D\uC2E4",{w:768,h:190,bg:"#3e5b50",fg:"#f3ead2",font:'700 96px "Gowun Batang", serif',border:"#c9b27c"})}));Ke.position.set(17,Ri+3.2,-.65),Tt.add(Ke);let En=new Wi("#ffe6c4",6,10,1.8);En.position.set(17,3.2,-5),e.add(En);let li=new Se,Cr=new X(new be(1.6,.9,.6),De("#efe9dc"));Cr.position.y=.45,li.add(Cr);let Yn=new X(new we(.14,.14,.42,16),De("#c9ccd1",{metalness:.6,roughness:.3}));Yn.position.set(-.4,1.11,0),li.add(Yn);for(let C=0;C<6;C++){let F=new X(new we(.04,.03,.09,10),De("#fbfaf6"));F.position.set(.1+C%3*.12,.95+Math.floor(C/3)*.09,.05),li.add(F)}li.position.set(20.6,Ri,-8.3),li.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),Tt.add(li),l(19.75,21.45,-8.65,-7.95);let Tn=[];[[15,-6.6],[19,-5.6],[15,-3],[19,-2.4]].forEach(([C,F],$)=>{let re=new Se,ye=new X(new be(1.9,.07,.9),De("#7a5a40",{roughness:.5}));ye.position.y=.38,re.add(ye);for(let[Ee,Pe]of[[-.85,-.38],[.85,-.38],[-.85,.38],[.85,.38]]){let Ve=new X(new be(.06,.36,.06),De("#5d4431"));Ve.position.set(Ee,.18,Pe),re.add(Ve)}for(let Ee of[-.45,.45]){let Pe=new X(new be(.6,.07,.6),De("#8e3f37"));Pe.position.set(Ee,.035,.85),re.add(Pe)}for(let Ee=0;Ee<3;Ee++){let Pe=new X(new we(.09,.07,.04,14),De("#f4f1ea"));Pe.position.set(-.4+Ee*.4,.44,-.2),re.add(Pe);let Ve=new X(new vt(.06,10,6),De(["#c74b35","#e8e1c9","#6d8a4c"][Ee]));Ve.scale.y=.4,Ve.position.set(-.4+Ee*.4,.47,-.2),re.add(Ve)}re.position.set(C,Ri,F),re.traverse(Ee=>{Ee.isMesh&&(Ee.castShadow=!0)}),Tt.add(re),l(C-1,C+1,F-.5,F+.48),u(re,`meal:${$}`);let Ce=new Se;re.add(Ce),Tn.push({group:re,dishes:Ce,seat:{x:C-.45,z:F+.85,face:Math.PI},seat2:{x:C+.45,z:F+.85,face:Math.PI}}),p(`meal:${$}`,{label:"\uC2DD\uD0C1",verb:"\uC2DD\uC0AC\uD558\uAE30",spot:Tn[$].seat,radius:1.3,anchor:new E(C,1.4,F)})});let ln=new Se,kn=new X(new be(1.3,.6,.7),De("#7a5a40"));kn.position.y=.7,ln.add(kn);for(let C of[-1,1]){let F=new X(new we(.28,.28,.06,18),De("#3b2c22"));F.rotation.z=Math.PI/2,F.position.set(C*.68,.28,0),ln.add(F)}for(let C=0;C<26;C++){let F=Ti(1.5,["white","yellow","cream","white"][C%4]);F.position.set((t()-.5)*1.1,1.25+t()*.15,(t()-.5)*.5),ln.add(F)}let ps=new X(new pt(1.1,.3),new Fe({map:ss("\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30",{w:640,h:170,bg:"#fbfaf6",fg:"#2a2723",font:'700 76px "Gowun Batang", serif'})}));ps.position.set(0,.72,.36),ln.add(ps),ln.position.set(3.7,0,18.4),ln.rotation.y=-.5,ln.traverse(C=>{C.isMesh&&(C.castShadow=!0)}),e.add(ln),h(3.7,18.4,.8),u(ln,"florist"),p("florist",{label:"\uD654\uD658",verb:"\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30",spot:{x:2.6,z:19.4,face:1.6},radius:1.5,anchor:new E(3.7,2,18.4)});let Hn=new Se;e.add(Hn);let Pr=[];for(let C=0;C<70;C++){let F=t()*Math.PI*2,$=24+t()*22;Pr.push([Math.cos(F)*$,Math.sin(F)*$])}for(let C of[-1,1])for(let F=4;F<26;F+=3.2)Pr.push([C*(11.5+t()*3),F+t()*1.5]);for(let C=-8;C<=8;C+=4)Pr.push([C+t(),-17-t()*2]);let va=["#c4532f","#d9822f","#e2b53b","#7f9a5c","#8fa86b","#b6452e"],Xc=De("#6d5444");for(let[C,F]of Pr){if(C>11&&C<23&&F>-11&&F<1)continue;let $=new Se,re=t(),ye=2.2+t()*1.8,Ce=new X(new we(.12,.18,ye,8),Xc);if(Ce.position.y=ye/2,$.add(Ce),re<.35){let Ee=De("#5f7a54",{flatShading:!0});for(let Pe=0;Pe<3;Pe++){let Ve=new X(new rn(1.4-Pe*.35,1.5,7),Ee);Ve.position.y=ye*.7+Pe*.8,$.add(Ve)}}else{let Ee=De(va[Math.floor(t()*va.length)],{flatShading:!0});for(let Pe=0;Pe<3;Pe++){let Ve=new X(new vr(.9+t()*.6,0),Ee);Ve.position.set((t()-.5)*1.1,ye+(t()-.3)*.8,(t()-.5)*1.1),$.add(Ve)}}$.traverse(Ee=>{Ee.isMesh&&(Ee.castShadow=!0)}),$.position.set(C,0,F),$.rotation.y=t()*6,e.add($),h(C,F,.5)}let dt=De("#b9c3a1",{roughness:1});for(let C of[-1,1]){let F=new X(new be(5.6,.12,9),dt);F.position.set(C*6.3,.06,15.5),F.receiveShadow=!0,e.add(F),n.add(F)}let Ir=new Se;e.add(Ir);let mn=d(new Vi(new pt(.12,.1),new Fe({color:"#e7c04a",side:St,roughness:1}),90)),ci=[];for(let C=0;C<90;C++)ci.push({x:(t()-.5)*34,y:t()*9,z:t()*30-6,s:.4+t()*.6,r:t()*6});e.add(mn);let Lr=new Yt;o.push((C,F)=>{ci.forEach(($,re)=>{$.y-=C*.45*$.s,$.x+=Math.sin(F*.7+$.r)*C*.35,$.y<.03&&($.y=7+t()*4,$.x=(t()-.5)*34,$.z=t()*30-6),Lr.position.set($.x,$.y,$.z),Lr.rotation.set(F*$.s+$.r,F*.6+$.r,0),Lr.updateMatrix(),mn.setMatrixAt(re,Lr.matrix)}),mn.instanceMatrix.needsUpdate=!0});let Dr=hm(64,"rgba(150,146,140,0.7)","rgba(150,146,140,0)"),Ur=[];for(let C=0;C<46;C++){let F=d(new Gi(new xi({map:Dr,transparent:!0,depthWrite:!1,opacity:0})));F.visible=!1,e.add(F),Ur.push({sp:F,life:0,max:1})}let zt=.8,wn=0,rr=0,an=1;function In(){let C=Ur.find(F=>F.life<=0);C&&(C.life=C.max=3.5+Math.random()*2,C.sp.visible=!0,C.sp.position.set(S.position.x+(Math.random()-.5)*.1,S.position.y+.18+.32*an,S.position.z),C.vx=(Math.random()-.5)*.06)}o.push((C,F)=>{for(wn+=C*(zt*(an>0?1:0)+(rr>0?9:0)),rr=Math.max(0,rr-C);wn>1;)wn-=1,In();for(let $ of Ur){if($.life<=0)continue;$.life-=C;let re=1-$.life/$.max;$.sp.position.y+=C*.32,$.sp.position.x+=$.vx*C+Math.sin(F*1.3+$.max*3)*C*.05;let ye=.18+re*.9;$.sp.scale.set(ye,ye,ye),$.sp.material.opacity=Math.sin(re*Math.PI)*.55,$.life<=0&&($.sp.visible=!1)}P.forEach(($,re)=>{$.scale.set(1,.85+Math.sin(F*13+re*2)*.12+Math.random()*.05,1)}),G.intensity=2.6+Math.sin(F*11)*.25+Math.random()*.2});let cn=new Se;e.add(cn);let hi=[],jc=0,ya=hm(64,"rgba(255,214,140,0.9)","rgba(255,214,140,0)"),Sd={warm:"#ffd9a0",white:"#fff6e6",lotus:"#ffc4c8",sky:"#cfe3ff"},Ed=[];function n0(C){let F=new Se,$=new Fe({color:C,emissive:C,emissiveIntensity:.6,roughness:.9,transparent:!0,opacity:.95});Ed.push($),F.add(new X(new we(.22,.17,.42,12),$));let re=new Gi(new xi({map:ya,transparent:!0,depthWrite:!1,opacity:.55}));return re.scale.set(1.3,1.3,1.3),F.add(re),F}let fs=new wi({outfit:"hostSuit"});fs.interactTag="host",fs.root.position.set($n.x,Oe,$n.z),fs.root.rotation.y=$n.face,fs.rebuild(),j.add(fs.root),h($n.x,$n.z,.4);let ms=new wi({outfit:"shirt",look:{hair:"perm",hairColor:"#3d2b20",eyes:"smile",mouth:"smile",skin:"#efc19e"}});ms.interactTag="helper",ms.root.position.set(3,0,15.2),ms.root.rotation.y=-Math.PI/2,ms.rebuild(),e.add(ms.root),h(3,15.2,.4),p("helper",{label:"\uC548\uB0B4 \uB3C4\uC6B0\uBBF8",verb:"\uC870\uBB38 \uC608\uC808 \uBB3B\uAE30",spot:{x:2,z:15.2,face:Math.PI/2},radius:1.5,anchor:new E(3,1.7,15.2)});function Td(C,F,$,re,ye,Ce,Ee,Pe){let Ve=Math.max($-C,0,C-re,ye-F,0,F-Ce);return Ve<=0?Ee:Ve>=Pe?0:Ee*(1-Ve/Pe)}function i0(C,F){return Math.max(Td(C,F,-10.5,10.5,-12.5,1,Oe,1.25),Td(C,F,12.5,21.5,-9.3,-.7,Ri,.8))}function r0(C,F,$=.28,re=!1){if(C*C+F*F>2116)return!0;let ye=I?[...r,...I.boxes]:r;for(let Ee of ye)if(C>Ee.x0-$&&C<Ee.x1+$&&F>Ee.z0-$&&F<Ee.z1+$)return!0;let Ce=I?[...s,...I.circles]:s;for(let Ee of Ce){if(re&&Ee.x===$n.x&&Ee.z===$n.z)continue;let Pe=C-Ee.x,Ve=F-Ee.z;if(Pe*Pe+Ve*Ve<(Ee.r+$)**2)return!0}return!1}let s0=(C,F)=>Math.abs(C)<10.4&&F<1&&F>-12.4,wd=new ro,qc="day",An={scene:e,interactables:a,heightAt:i0,blocked:r0,inHall:s0,hostNpc:fs,helper:ms,HOST_SPOT:$n,GREET_SPOT:ma,tables:Tn,isWalkable:C=>n.has(C)||I&&I.walkables.includes(C),get theme(){return I},setTheme(C,F){for(I&&(W.remove(I.group),I.group.traverse(ye=>{ye.geometry?.dispose?.()})),I=lm(C,{FLOOR:Oe,textTexture:ss,rng:cm,deceasedName:F}),I.name=C,W.add(I.group);z.children.length;)z.remove(z.children[0]);I.lanternStand&&(z.add(I.lanternStand),u(I.lanternStand,"lantern")),it.visible=!!I.easels,Je.visible=C==="hanok",oe.material.color.set(C==="garden"?"#f7f5ef":C==="chapel"?"#efe9dc":"#e7e3d8"),le&&j.remove(le);let $=C==="hospital"||C==="hall";le=$?jf({floor:Oe}):qf({floor:Oe,z:te,accent:C==="garden"?"pink":C==="chapel"?"cream":"yellow"}),j.add(le),oe.position.z=$?te-1.05:te-.8,C==="hospital"&&oe.material.color.set("#a9a7a2"),oe.visible=C!=="hospital",An.themeName=C,ds(C==="chapel"||C==="garden"||An.religion==="christian"||An.religion==="catholic"?"simple":"jesa"),L.intensity=C==="hall"||C==="hospital"?16:10;let re=I.ceiling??Oe+5;Z.position.y=Math.min(Oe+4.2,re-.35),L.position.y=Math.min(Oe+4.3,re-.35),An.setTime(qc)},setDeceasedName(C){I?.setName(C)},setTime(C){qc=C;let F=Tc[C]||Tc.day;m.top.value.set(F.top),m.bottom.value.set(F.bottom),e.fog.color.set(F.fog),y.color.set(F.hemiSky),y.groundColor.set(F.hemiGround),y.intensity=F.hemi,b.color.set(F.sun),b.intensity=F.sunI,g.opacity=F.star;for(let $ of[...c,...I?.lampMats||[],...Ed])$.emissiveIntensity=F.lamp;Z.intensity=C==="night"?24:18,N.intensity=C==="day"?1:4,i.toneMappingExposure=C==="night"?1.15:1},setPortrait(C){wd.load(C,F=>{F.colorSpace=Ct,xe.map?.dispose(),xe.map=F,xe.needsUpdate=!0})},setGallery(C){je.forEach((F,$)=>{let re=C.length&&($<C.length||C.length>1)?C[$%C.length]:null;if(re!==F.url){if(F.url=re,!re){F.mat.map!==F.placeholder&&F.mat.map?.dispose(),F.mat.map=F.placeholder,F.mat.needsUpdate=!0,F.pic.scale.set(1,1,1);return}wd.load(re,ye=>{ye.colorSpace=Ct,F.mat.map!==F.placeholder&&F.mat.map?.dispose(),F.mat.map=ye,F.mat.needsUpdate=!0;let Ce=ye.image.width/ye.image.height,Ee=Ce>=1.36?1.5:1.1*Ce,Pe=Ce>=1.36?1.5/Ce:1.1;F.pic.scale.set(Ee/1.5,Pe/1.1,1)})}})},setReligion(C){for(An.religion=C,oi.visible=C==="catholic",a.get("candles").radius=C==="catholic"?1.2:0,An.themeName&&ds(An.themeName==="chapel"||An.themeName==="garden"||C==="christian"||C==="catholic"?"simple":"jesa");pe.children.length;)pe.remove(pe.children[0]);if(ge.visible=C==="traditional"||C==="buddhist",(C==="christian"||C==="catholic")&&I?.name!=="chapel"){let F=De(C==="catholic"?"#d8c27d":"#f5f2ea",{metalness:C==="catholic"?.5:0,roughness:.4}),$=new X(new be(.1,.72,.06),F),re=new X(new be(.46,.1,.06),F);re.position.y=.12,pe.add($,re)}else if(C==="buddhist"){let F=De("#f2b7b4",{roughness:.6});for(let $=0;$<8;$++){let re=new X(new vt(.12,12,8),F);re.scale.set(.55,1.25,.35);let ye=$/8*Math.PI-Math.PI/2;re.position.set(Math.sin(ye)*.2,.05+Math.cos(ye)*.08,0),re.rotation.z=-ye*.8,pe.add(re)}}},setTablet(C){ge.material.map=ss(`\u6545${C}\u795E\u4F4D`,{w:128,h:320,bg:"#fbf8ef",fg:"#1b1a18",font:'700 46px "Noto Serif KR", "Gowun Batang", serif',vertical:!0}),ge.material.needsUpdate=!0},setIncense(C,F){an=Math.max(0,Math.min(1,F));let $=Math.min(Math.max(C,an>0?1:0),14);for(;x.children.length<$;){let ye=x.children.length,Ce=new Se,Ee=new X(new we(.006,.006,.36,5),De("#7c4d34"));Ee.position.y=.18;let Pe=new X(new vt(.012,6,4),new nn({color:"#ff7a3a"}));Pe.position.y=.36,Ce.add(Ee,Pe),Ce.userData={rod:Ee,tip:Pe};let Ve=ye*2.4,Nt=.03+ye%3*.035;Ce.position.set(Math.cos(Ve)*Nt,0,Math.sin(Ve)*Nt),Ce.rotation.set((Math.random()-.5)*.15,0,(Math.random()-.5)*.15),x.add(Ce)}let re=.08+.92*an;for(let ye of x.children)ye.userData.rod.scale.y=re,ye.userData.rod.position.y=.18*re,ye.userData.tip.position.y=.36*re,ye.userData.tip.visible=an>0},setCounts(C){fa=C;let{flowers:F=0,incense:$=0,candles:re=0}=C,ye=ai==="jesa",Ce=Math.min(F,ye?40:90);for(;q.children.length<Ce;){let Pe=q.children.length,Ve=$f(1),Nt=Ve||Ti(1.25);if(Ve){let Gt=Math.floor(Pe/9),gn=Pe%9;Nt.position.set(-1.6+gn*.4+Gt%2*.2,(ye?ce+.03:Oe+.11)+Gt*.012,ye?-8+Gt*.03:-7.4+Gt*.12),Nt.rotation.y=-Math.PI/2+(Math.random()-.5)*.25}else if(ye){let Gt=Math.floor(Pe/20),gn=Pe%20;Nt.position.set(-1.75+gn*.18+Gt%2*.09,ce+.06+Gt*.03,-7.97+Gt*.04),Nt.rotation.set(Math.PI/2-.1,0,Math.PI+(Math.random()-.5)*.3)}else{let Gt=Math.floor(Pe/15),gn=Pe%15;Nt.position.set(-1.6+gn*.23+Gt%2*.1+(Math.random()-.5)*.04,Oe+.13+Gt*.03,-7.45+Gt*.12),Nt.rotation.set(Math.PI/2-.15,0,(Math.random()-.5)*.3)}q.add(Nt)}zt=.6+Math.min($,30)*.12;let Ee=Math.min(re,24);for(;Ar.children.length<Ee;){let Pe=Ar.children.length,Ve=Pe%3,Nt=new Se,Gt=new X(new we(.035,.035,.08,10),De("#fbf6ea")),gn=new X(new rn(.018,.05,8),new nn({color:"#ffcf73"}));gn.position.y=.07,Nt.add(Gt,gn);let Zn=Math.floor(Pe/3);Nt.position.set(-.4+Ve*.12+Zn*.13-Math.floor(Zn/7)*.9,.7+Ve*.2,-Ve*.08+.05),Ar.add(Nt)}},setShoes(C){let F=I?.shoes?Math.min(C,18):0;for(;xt.children.length>F;)xt.remove(xt.children[xt.children.length-1]);for(;xt.children.length<F;){let $=xt.children.length,re=new Se,ye=De(Xt[$%Xt.length],{roughness:.5});for(let Pe of[-1,1]){let Ve=new X(new be(.11,.07,.27),ye);Ve.position.set(Pe*.075,.035,0),Ve.castShadow=!0,re.add(Ve)}let Ce=Math.floor($/9),Ee=$%9;re.position.set(-3.1+Ee*.38+(Ee>4?.9:0)+Ce*.15,Oe*.33+.005,1.8+Ce*.42),re.rotation.y=(Math.random()-.5)*.25,xt.add(re)}},setWreaths(C){for(;Hn.children.length;)Hn.remove(Hn.children[0]);C.slice(-28).forEach((F,$)=>{let re=$%2?1:-1,ye=3.5+Math.floor($/2)*1.1,Ce=new Se,Ee=De("#8a8a86",{metalness:.5,roughness:.4});for(let Gt=0;Gt<3;Gt++){let gn=new X(new we(.015,.015,1.5,6),Ee),Zn=Gt/3*Math.PI*2;gn.position.set(Math.cos(Zn)*.18,.72,Math.sin(Zn)*.18-.1),gn.rotation.set(Math.sin(Zn)*.12,0,-Math.cos(Zn)*.12),Ce.add(gn)}let Pe=new _n(_o(F.style||"white"));Pe.colorSpace=Ct;let Ve=new X(new Kt(.6,40),new Fe({map:Pe,alphaTest:.3,side:St,roughness:.95}));Ve.position.y=1.75,Ve.castShadow=!0,Ce.add(Ve);let Nt=(Gt,gn)=>{let Zn=new X(new pt(.14,1.12),new Fe({map:D1(Gt),side:St,roughness:.9}));Zn.position.set(gn,.85,.03),Zn.rotation.z=gn>0?-.04:.04,Ce.add(Zn)};Nt(F.phrase||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4",-.24),Nt(F.from||"",.24),Ce.position.set(re*2.75,0,ye),Ce.rotation.y=re<0?Math.PI/4:-Math.PI/4,u(Ce,`wreath:${$}`),Ce.userData.data=F,Hn.add(Ce)}),An.wreaths=C.slice(-28)},burstSmoke(){rr=1.4},flyTo(C,F,$=.9){let re=C.getWorldPosition(new E);e.attach(C),C.position.copy(re);let ye=0;return new Promise(Ce=>{let Ee=Pe=>{ye+=Pe/$;let Ve=Math.min(1,ye);C.position.lerpVectors(re,F,Ve),C.position.y+=Math.sin(Ve*Math.PI)*.4,Ve>=1&&(o.splice(o.indexOf(Ee),1),Ce())};o.push(Ee)})},addLantern({text:C="",name:F="",color:$="warm"},re){let ye=n0(Sd[$]||Sd.warm);ye.children[0].material.emissiveIntensity=(Tc[qc]||Tc.day).lamp;let Ce=jc++,Ee={a:Ce*2.39996+.3,r:5+Ce%7*1.4,h:6.5+Ce%5*1.3,sp:.03+Ce%4*.008},Pe={uid:Ce,g:ye,slot:Ee,text:C,name:F,rise:re?0:1,from:re?re.clone():null};return u(ye,`sky:${Ce}`),cn.add(ye),hi.push(Pe),hi.length>90&&cn.remove(hi.shift().g),Pe},lantern(C){return hi.find(F=>F.uid===C)},lanternCount(){return hi.length},setMemories(C){for(;Ir.children.length;)Ir.remove(Ir.children[0]);C.slice(-160).forEach((F,$)=>{let re=$%2?1:-1,ye=Math.floor($/2),Ce=ye%12,Ee=Math.floor(ye/12)%7,Pe=Ti(1.7,F.relation==="\uAC00\uC871"||F.relation==="\uCE5C\uCC99"?"cream":"white");Pe.position.set(re*(3.9+Ee*.78+Ce%2*.3),.12+.36,11.4+Ce*.72),Pe.rotation.y=$;let Ve=new Gi(new xi({map:ya,transparent:!0,depthWrite:!1,opacity:.35}));Ve.scale.set(.5,.5,.5),Pe.add(Ve),u(Pe,`memory:${$}`),Ir.add(Pe)}),An.memories=C.slice(-160)},update(C,F){for(let $ of[...o])$(C,F);I?.update(C,F),hi.forEach($=>{let re=$.slot;re.a+=C*re.sp;let ye=new E(Math.cos(re.a)*re.r,re.h+Math.sin(F*.5+re.a*3)*.3,6+Math.sin(re.a)*re.r*.7);if($.rise<1){$.rise=Math.min(1,$.rise+C/7);let Ce=$.rise*$.rise*(3-2*$.rise);$.g.position.lerpVectors($.from,ye,Ce)}else $.g.position.copy(ye);$.g.rotation.y+=C*.3})}};return An.setTheme("hospital",""),An.setReligion("traditional"),An}var as=i=>440*2**((i-69)/12),N1=[[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[67,2],[64,1],[62,2],[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[74,3],[74,2],[71,1],[74,2],[71,.5],[67,.5],[71,2],[69,1],[67,2],[64,1],[62,2],[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[67,3]],pm=[[43,50,55,59],[43,50,55,59],[48,55,60,64],[43,50,55,59],[43,50,55,59],[40,52,55,59],[50,57,62,66],[50,57,62,66],[43,50,55,59],[43,53,55,59],[48,55,60,64],[43,50,55,59],[40,52,55,59],[50,57,62,66],[43,50,55,59]],Ac=[[41,57,60,69],[38,57,62,69],[46,58,62,70],[48,55,64,67],[41,57,60,65],[45,57,60,64],[46,58,62,65],[48,55,60,67],[50,57,62,65],[46,53,58,62],[41,57,60,65],[48,55,60,64],[41,53,60,65]],F1=[[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59]],fm=[67,69,72,74,76,79,81],td=[55,57,60,62,64,67,69,72],Rc=class{constructor(){this.ctx=null,this.on=!0,this.musicVol=.5,this.sfxVol=.7,this.trackId="none",this.track=null,this.ksCache=new Map}ensure(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t=this.ctx=new e;this.master=t.createGain();let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,this.master.connect(n).connect(t.destination),this.music=t.createGain(),this.sfx=t.createGain(),this.music.gain.value=this.musicVol,this.sfx.gain.value=this.sfxVol,this.music.connect(this.master),this.sfx.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.2);let r=t.createGain();r.gain.value=.45,this.reverb.connect(r).connect(this.master),this.master.gain.value=this.on?1:0}return this.ctx.state==="suspended"&&this.ctx.resume(),this.ctx}impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let s=0;s<2;s++){let a=r.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*(1-o/n)**3}return r}noiseBuffer(e=2){let t=this.ctx,n=t.createBuffer(1,t.sampleRate*e,t.sampleRate),r=n.getChannelData(0);for(let s=0;s<r.length;s++)r[s]=Math.random()*2-1;return n}setOn(e){this.on=e,this.master&&this.master.gain.setTargetAtTime(e?1:0,this.ctx.currentTime,.1),this.audioEl&&(this.audioEl.muted=!e)}setMusicVolume(e){this.musicVol=e,this.music&&this.music.gain.setTargetAtTime(e,this.ctx.currentTime,.1),this.audioEl&&(this.audioEl.volume=Math.min(1,e*1.4))}setSfxVolume(e){this.sfxVol=e,this.sfx&&this.sfx.gain.setTargetAtTime(e,this.ctx.currentTime,.1)}duck(e){this.music&&this.music.gain.setTargetAtTime(e?this.musicVol*.25:this.musicVol,this.ctx.currentTime,.6)}play(e,t=""){let n=this.ensure();if(!n||(this.stopTrack(),this.trackId=e,e==="none"))return;if(e==="custom"){if(!t)return;let l=new Audio(t);l.loop=!0,l.volume=Math.min(1,this.musicVol*1.4),l.muted=!this.on,l.play().catch(()=>{}),this.audioEl=l;return}let r=n.createGain();r.gain.value=0,r.gain.setTargetAtTime(1,n.currentTime,1.2),r.connect(this.music);let s=n.createGain();s.gain.value=.6,r.connect(s).connect(this.reverb);let a=this.track={id:e,out:r,nodes:[],timers:[],next:n.currentTime+.3,i:0},o=(l,h=200)=>{let u=setInterval(()=>{this.track===a&&l()},h);a.timers.push(u),l()},c=()=>n.currentTime+1.2;switch(e){case"wind":{this.noiseBed(a,380,.05,.08),o(()=>{for(;a.next<c();)this.chimeAt(a.next,.07,r),a.next+=3.5+Math.random()*6});break}case"rain":{this.noiseBed(a,2600,.05,.02,"bandpass"),this.noiseBed(a,600,.04,.01),o(()=>{for(;a.next<c();)this.drip(a.next,r),a.next+=.15+Math.random()*.9});break}case"moktak":{this.drone(a,[55,82.5],.025);let l=0;o(()=>{for(;a.next<c();){let h=l%24;h<16&&this.moktakAt(a.next,h===0?.32:.22,r),h===20&&this.bowlAt(a.next,196+(l%48?0:24),.12,r),a.next+=h<16?.95:1.1,l++}});break}case"hymn":{let h=[],u=0;for(let[_,g]of N1)h.push({n:_,t:u,d:g*.95}),u+=g*.95;let d=u+3,p=[];for(let _=0;_<pm.length;_++)p.push({ch:pm[_],t:.95+_*3*.95,d:3*.95});let m=n.currentTime+.4,v=0,f=0;o(()=>{let _=c();for(;v<h.length&&m+h[v].t<_;){let g=h[v++];this.organAt(as(g.n),m+g.t,g.d*.97,.16,r)}for(;f<p.length&&m+p[f].t<_;){let g=p[f++];g.ch.forEach(y=>this.organAt(as(y),m+g.t,g.d,.06,r,!0))}v>=h.length&&f>=p.length&&m+d<_+1&&(m+=d,v=0,f=0)});break}case"chorale":{o(()=>{for(;a.next<c();){let l=Ac[a.i%Ac.length],h=a.i%Ac.length===Ac.length-1?6.4:3.4;l.forEach((u,d)=>this.organAt(as(u),a.next,h,d===3?.09:.06,r,d<3)),a.next+=h,a.i++}});break}case"piano":{o(()=>{for(;a.next<c();){let l=Math.floor(a.i/8),h=F1[l%4],u=a.i%8,d=[0,2,3,2,1,2,3,2];this.pianoAt(as(h[d[u]]+(u===0?0:12)),a.next,u===0?.16:.07,r),(u===0||u===4&&Math.random()<.6)&&this.pianoAt(as(fm[Math.floor(Math.random()*fm.length)]+5),a.next+.02,.06,r),a.next+=.62,a.i++}});break}case"gayageum":{let l=3;o(()=>{for(;a.next<c();){l=Math.max(0,Math.min(td.length-1,l+[-2,-1,-1,0,1,1,2][Math.floor(Math.random()*7)]));let h=Math.random()<.35;this.pluckAt(as(td[l]),a.next,h?.34:.26,r,h),Math.random()<.2&&this.pluckAt(as(td[Math.max(0,l-3)]-12),a.next,.18,r,!1),a.next+=h?2.2+Math.random():.5+Math.random()*.8}});break}default:}}stopTrack(){this.audioEl&&(this.audioEl.pause(),this.audioEl=null);let e=this.track;if(!e)return;this.track=null,e.timers.forEach(clearInterval);let t=this.ctx;e.out.gain.cancelScheduledValues(t.currentTime),e.out.gain.setTargetAtTime(0,t.currentTime,.4),setTimeout(()=>{e.nodes.forEach(n=>{try{n.stop?.()}catch{}}),e.out.disconnect()},2500)}noiseBed(e,t,n,r,s="lowpass"){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noiseBuffer(4),o.loop=!0;let c=a.createBiquadFilter();c.type=s,c.frequency.value=t,c.Q.value=s==="bandpass"?.6:.7;let l=a.createGain();l.gain.value=n;let h=a.createOscillator(),u=a.createGain();h.frequency.value=.07+Math.random()*.05,u.gain.value=r,h.connect(u).connect(l.gain),o.connect(c).connect(l).connect(e.out),o.start(),h.start(),e.nodes.push(o,h)}drone(e,t,n){let r=this.ctx;for(let s of t){let a=r.createOscillator();a.frequency.value=s;let o=r.createGain();o.gain.value=n,a.connect(o).connect(e.out),a.start(),e.nodes.push(a)}}env(e,t,n,r,s,a=.3){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+r),e.gain.setValueAtTime(n,t+Math.max(r,s-a)),e.gain.exponentialRampToValueAtTime(1e-4,t+s+a)}organAt(e,t,n,r,s,a=!1){let o=this.ctx,c=o.createGain(),l=o.createBiquadFilter();l.type="lowpass",l.frequency.value=a?1100:1900,l.connect(c).connect(s);for(let[h,u,d]of[[1,1,"sine"],[2,.45,"sine"],[.5,.35,"sine"],[3,.12,"triangle"]]){let p=o.createOscillator();p.type=d,p.frequency.value=e*h,p.detune.value=(Math.random()-.5)*6;let m=o.createGain();m.gain.value=u,p.connect(m).connect(l),p.start(t),p.stop(t+n+.6)}this.env(c,t,r,.09,n,.35)}pianoAt(e,t,n,r){let s=this.ctx,a=s.createGain();a.connect(r);for(let[o,c]of[[1,1],[2,.35],[3,.12],[4.01,.05]]){let l=s.createOscillator();l.frequency.value=e*o;let h=s.createGain();h.gain.setValueAtTime(c,t),h.gain.exponentialRampToValueAtTime(1e-4,t+3.2/o),l.connect(h).connect(a),l.start(t),l.stop(t+3.4)}a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(n,t+.008),a.gain.exponentialRampToValueAtTime(n*.4,t+.6),a.gain.exponentialRampToValueAtTime(1e-4,t+3.3)}ks(e,t=3){let n=Math.round(e*10);if(this.ksCache.has(n))return this.ksCache.get(n);let r=this.ctx,s=r.sampleRate,a=Math.max(2,Math.round(s/e)),o=Math.floor(s*t),c=r.createBuffer(1,o,s),l=c.getChannelData(0),h=new Float32Array(a);for(let d=0;d<a;d++)h[d]=(Math.random()*2-1)*(d<a/2?1:.6);let u=0;for(let d=0;d<o;d++){let p=h[u],m=h[(u+1)%a];h[u]=(p+m)*.5*.9965,l[d]=p,u=(u+1)%a}return this.ksCache.set(n,c),c}pluckAt(e,t,n,r,s){let a=this.ctx,o=a.createBufferSource();o.buffer=this.ks(e);let c=a.createGain();c.gain.value=n;let l=a.createBiquadFilter();if(l.type="lowpass",l.frequency.value=2400,o.connect(l).connect(c).connect(r),s){let h=o.playbackRate;h.setValueAtTime(1,t),h.setValueAtTime(1,t+.35);for(let u=0;u<4;u++)h.linearRampToValueAtTime(1.045,t+.55+u*.32),h.linearRampToValueAtTime(1,t+.71+u*.32)}o.start(t)}bowlAt(e,t,n,r){let s=this.ctx;for(let[a,o,c]of[[1,1,.7],[2.71,.45,1.3],[5.12,.18,2.1]])for(let l of[0,c]){let h=s.createOscillator();h.frequency.value=e*a+l;let u=s.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(n*o*.5,t+.02),u.gain.exponentialRampToValueAtTime(1e-4,t+9/a),h.connect(u).connect(r),h.start(t),h.stop(t+9.2)}}moktakAt(e,t,n){let r=this.ctx,s=r.createOscillator();s.frequency.setValueAtTime(560,e),s.frequency.exponentialRampToValueAtTime(330,e+.16);let a=r.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(t,e+.002),a.gain.exponentialRampToValueAtTime(1e-4,e+.22),s.connect(a).connect(n),s.start(e),s.stop(e+.25);let o=r.createOscillator();o.type="triangle",o.frequency.value=1180;let c=r.createGain();c.gain.setValueAtTime(t*.25,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.05),o.connect(c).connect(n),o.start(e),o.stop(e+.06)}chimeAt(e,t,n){let r=[1318,1568,1760,2093,2349][Math.floor(Math.random()*5)];this.toneAt(r,e,3,t,n),this.toneAt(r*2.76,e,1.2,t*.3,n)}drip(e,t){let n=this.ctx,r=n.createOscillator(),s=900+Math.random()*1400;r.frequency.setValueAtTime(s,e),r.frequency.exponentialRampToValueAtTime(s*1.6,e+.05);let a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.03+Math.random()*.03,e+.003),a.gain.exponentialRampToValueAtTime(1e-4,e+.09),r.connect(a).connect(t),r.start(e),r.stop(e+.1)}toneAt(e,t,n,r,s,a="sine"){let o=this.ctx,c=o.createOscillator(),l=o.createGain();return c.type=a,c.frequency.setValueAtTime(e,t),l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(r,t+.005),l.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(l).connect(s),c.start(t),c.stop(t+n+.05),c}tone(e,t,{type:n="sine",gain:r=.2,when:s=0}={}){let a=this.ensure();return a?this.toneAt(e,a.currentTime+s,t,r,this.sfx,n):null}moktak(){let e=this.ensure();e&&this.moktakAt(e.currentTime,.35,this.sfx)}chime(e=.12){let t=this.ensure();t&&this.chimeAt(t.currentTime,e,this.sfx)}bell(){this.tone(196,5,{gain:.25}),this.tone(392.5,3.5,{gain:.12}),this.tone(589,2.2,{gain:.06})}soft(){this.tone(880,.6,{gain:.06}),this.tone(1320,.8,{gain:.04,when:.08})}drop(){this.tone(300,.25,{type:"triangle",gain:.12})}pop(){this.tone(660,.12,{gain:.05})}};var Cc=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),ha=class{constructor(e,{look:t=bn,outfit:n="suit",who:r="guest",onChange:s=()=>{}}={}){this.el=e,this.look={...bn,...t},this.outfit=n,this.who=r,this.onChange=s,this.build()}build(){let e=Wu,t=Object.entries(_r).filter(([,s])=>s.who===this.who),n=(s,a)=>a.map(o=>`<button type="button" class="chip" data-k="${s}" data-v="${o.id}">${Cc(o.label)}</button>`).join(""),r=(s,a)=>a.map(o=>{let c=typeof o=="string"?o:o.id,l=typeof o=="string"?"":o.label;return`<button type="button" class="dot" data-k="${s}" data-v="${c}" style="--c:${c}" title="${Cc(l)}" aria-label="${Cc(l||c)}"></button>`}).join("");this.el.innerHTML=`
      <div class="cz">
        <div class="cz-preview">
          <canvas aria-label="\uB0B4 \uCE90\uB9AD\uD130 \uBBF8\uB9AC\uBCF4\uAE30"></canvas>
          <div class="cz-preview-tools">
            <button type="button" class="chip" data-dice>\u{1F3B2} \uC544\uBB34\uB807\uAC8C\uB098</button>
          </div>
        </div>
        <div class="cz-options">
          <div class="cz-row"><span>\uC637\uCC28\uB9BC</span><div>${t.map(([s,a])=>`<button type="button" class="chip" data-k="outfit" data-v="${s}">${Cc(a.label)}</button>`).join("")}</div></div>
          <div class="cz-row"><span>\uD53C\uBD80</span><div>${r("skin",e.skin)}</div></div>
          <div class="cz-row"><span>\uBA38\uB9AC \uBAA8\uC591</span><div>${n("hair",e.hair)}</div></div>
          <div class="cz-row"><span>\uBA38\uB9AC\uC0C9</span><div>${r("hairColor",e.hairColor)}</div></div>
          <div class="cz-row"><span>\uB208</span><div>${n("eyes",e.eyes)}</div></div>
          <div class="cz-row"><span>\uB208\uC379 \xB7 \uC785</span><div>${n("brows",e.brows)}${n("mouth",e.mouth)}</div></div>
          <div class="cz-row"><span>\uC548\uACBD \xB7 \uC218\uC5FC</span><div>${n("glasses",e.glasses)}${n("beard",e.beard.filter(s=>s.id!=="none"))}</div></div>
          <div class="cz-row"><span>\uD0A4</span><div>${n("height",e.height)}<button type="button" class="chip" data-k="blush" data-v="toggle">\uBCFC\uD130\uCE58</button></div></div>
        </div>
      </div>`,this.el.addEventListener("click",s=>{let a=s.target.closest("[data-k],[data-dice]");if(!a)return;if(a.hasAttribute("data-dice"))return this.randomize();let o=a.dataset.k,c=a.dataset.v;o==="outfit"?(this.outfit=c,this.avatar.setOutfit(c)):(o==="height"&&(c=Number(c)),o==="blush"&&(c=!this.look.blush),(o==="glasses"||o==="beard")&&this.look[o]===c&&(c="none"),this.look[o]=c,this.avatar.setLook(this.look),(o==="eyes"||o==="mouth")&&this.avatar.play("nod",null,{soft:!0})),this.sync(),this.onChange(this.look,this.outfit)}),this.initPreview(),this.sync()}randomize(){let e=n=>n[Math.floor(Math.random()*n.length)],t=Wu;this.look={skin:e(t.skin),hair:e(t.hair).id,hairColor:e(t.hairColor).id,eyes:e(t.eyes).id,brows:e(t.brows).id,mouth:e(t.mouth).id,glasses:Math.random()<.3?e(t.glasses).id:"none",beard:Math.random()<.2?e(t.beard).id:"none",blush:Math.random()<.7,height:e(t.height).id},this.avatar.setLook(this.look),this.avatar.play("wave",null,{soft:!0}),this.sync(),this.onChange(this.look,this.outfit)}sync(){for(let e of this.el.querySelectorAll("[data-k]")){let t=e.dataset.k,n;t==="outfit"?n=e.dataset.v===this.outfit:t==="blush"?n=!!this.look.blush:t==="height"?n=Number(e.dataset.v)===Number(this.look.height):n=String(this.look[t])===e.dataset.v,e.setAttribute("aria-pressed",n)}}set(e,t){this.look={...bn,...e},t&&(this.outfit=t),this.avatar.setOutfit(this.outfit),this.avatar.setLook(this.look),this.sync()}initPreview(){let e=this.el.querySelector("canvas"),t=this.renderer=new ia({canvas:e,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.outputColorSpace=Ct,t.toneMapping=Js;let n=new Gr;n.add(new Xr("#ffffff","#b8b29d",1.4));let r=new jr("#fff4e6",1.6);r.position.set(2,3,4),n.add(r);let s=new X(new Kt(.7,40),new Fe({color:"#e7e1d3"}));s.rotation.x=-Math.PI/2,n.add(s),this.avatar=new wi({outfit:this.outfit,look:this.look}),n.add(this.avatar.root);let a=new Jt(30,1,.1,20),o=.35,c=null;e.addEventListener("pointerdown",u=>{c=u.clientX,e.setPointerCapture(u.pointerId)}),e.addEventListener("pointermove",u=>{c!=null&&(o+=(u.clientX-c)*.012,c=u.clientX)}),e.addEventListener("pointerup",()=>{c=null});let l=performance.now(),h=u=>{if(this.disposed||(requestAnimationFrame(h),!e.offsetParent))return;let d=e.clientWidth,p=e.clientHeight;(e.width!==Math.round(d*t.getPixelRatio())||e.height!==Math.round(p*t.getPixelRatio()))&&(t.setSize(d,p,!1),a.aspect=d/p,a.updateProjectionMatrix());let m=Math.min(.05,(u-l)/1e3);l=u,c==null&&(o+=m*.25);let v=this.avatar.height;a.position.set(Math.sin(o)*3.1,1.15*v,Math.cos(o)*3.1),a.lookAt(0,.82*v,0),this.avatar.update(m,!1),t.render(n,a)};requestAnimationFrame(h)}dispose(){this.disposed=!0,this.renderer?.dispose(),this.renderer?.forceContextLoss?.()}};var xr=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function Mr(i=[]){return i.map(e=>{if(typeof e=="string")return{type:"image",src:e,caption:"",year:""};let t=e.type||(/youtu\.?be/.test(e.src)?"youtube":/\.(mp4|webm|mov)(\?|$)/i.test(e.src)?"video":"image");return{caption:"",year:"",...e,type:t}}).filter(e=>e.src)}function B1(i){let e=String(i).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);return e?e[1]:null}var Pc=class{constructor(e,{onOpen:t,onClose:n}={}){this.el=e,this.onOpen=t,this.onClose=n,this.items=[],this.i=0,this.playing=!0,this.timer=null,e.innerHTML=`
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
      </div>`,this.layers=[e.querySelector(".th-a"),e.querySelector(".th-b")],this.front=0,e.addEventListener("click",r=>{let s=r.target.closest("[data-th],[data-idx]");if(!s)return;if(s.dataset.idx)return this.go(+s.dataset.idx);let a=s.dataset.th;a==="prev"&&this.go(this.i-1),a==="next"&&this.go(this.i+1),a==="play"&&this.toggle(),a==="close"&&this.close()}),addEventListener("keydown",r=>{this.el.hidden||(r.key==="Escape"&&this.close(),r.key==="ArrowRight"&&this.go(this.i+1),r.key==="ArrowLeft"&&this.go(this.i-1),r.key===" "&&(r.preventDefault(),this.toggle()))})}open(e,{title:t="",sub:n="",greeting:r="",portrait:s="",start:a=null}={}){this.items=[{type:"title",title:t,sub:n,portrait:s},...Mr(e),{type:"end",title:"\uAE30\uC5B5\uD558\uACA0\uC2B5\uB2C8\uB2E4",sub:r}],this.el.querySelector(".th-thumbs").innerHTML=this.items.map((o,c)=>o.type==="image"?`<button type="button" data-idx="${c}" style="background-image:url('${o.src.replace(/'/g,"%27")}')" aria-label="\uC0AC\uC9C4 ${c}"></button>`:o.type==="video"||o.type==="youtube"?`<button type="button" data-idx="${c}" class="vid" aria-label="\uC601\uC0C1 ${c}">\u25B6</button>`:"").join(""),this.el.hidden=!1,this.playing=!0,this.el.querySelector('[data-th="play"]').textContent="\u23F8",this.onOpen?.(),this.go(a==null?0:a+1,!0)}close(){clearTimeout(this.timer),this.layers.forEach(e=>{e.innerHTML=""}),this.el.hidden=!0,this.onClose?.()}toggle(){this.playing=!this.playing,this.el.querySelector('[data-th="play"]').textContent=this.playing?"\u23F8":"\u25B6";let e=this.layers[this.front].querySelector("video");e&&(this.playing?e.play():e.pause()),this.playing?this.schedule():clearTimeout(this.timer)}schedule(e){clearTimeout(this.timer);let t=this.items[this.i];!this.playing||!t||t.type==="video"||t.type==="youtube"||t.type!=="end"&&(this.timer=setTimeout(()=>this.go(this.i+1),e??(t.type==="title"?5e3:6500)))}go(e,t=!1){let n=this.items.length;this.i=(e%n+n)%n;let r=this.items[this.i],s=this.layers[1-this.front],a=this.layers[this.front];s.innerHTML=this.render(r),s.classList.add("show"),a.classList.remove("show");let o=a;setTimeout(()=>{o.classList.contains("show")||(o.innerHTML="")},1400),this.front=1-this.front;let c=this.el.querySelector(".th-caption");c.textContent=r.type==="image"||r.type==="video"||r.type==="youtube"?[r.year,r.caption].filter(Boolean).join(" \xB7 "):"";let l=n-2;this.el.querySelector(".th-count").textContent=l>0&&this.i>0&&this.i<n-1?`${this.i} / ${l}`:"",this.el.querySelectorAll("[data-idx]").forEach(u=>u.classList.toggle("on",+u.dataset.idx===this.i));let h=s.querySelector("video");h&&(h.onended=()=>this.go(this.i+1),this.playing&&h.play().catch(()=>{})),this.schedule(t?5e3:void 0)}render(e){if(e.type==="title")return`<div class="th-card">${e.portrait?`<img class="th-portrait" src="${e.portrait}" alt="">`:""}<h2>${xr(e.title)}</h2><p>${xr(e.sub)}</p><small>\uCD94\uC5B5 \uC0C1\uC601\uAD00 \xB7 \uC0AC\uC9C4\uC744 \uD55C \uC7A5\uC529 \uCC9C\uCC9C\uD788 \uB118\uACA8 \uB4DC\uB824\uC694</small></div>`;if(e.type==="end")return`<div class="th-card end"><h2>${xr(e.title)}</h2><p>${xr(e.sub||"")}</p></div>`;if(e.type==="video")return`<video src="${xr(e.src)}" playsinline controls></video>`;if(e.type==="youtube"){let n=B1(e.src);return n?`<iframe src="https://www.youtube-nocookie.com/embed/${n}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="\uCD94\uC5B5 \uC601\uC0C1"></iframe>`:'<p class="th-empty">\uC601\uC0C1 \uC8FC\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694</p>'}return`<img class="th-photo ${["kb1","kb2","kb3","kb4"][Math.floor(Math.random()*4)]}" src="${xr(e.src)}" alt="${xr(e.caption||"\uCD94\uC5B5 \uC0AC\uC9C4")}"><img class="th-blur" src="${xr(e.src)}" alt="">`}};var k=(i,e=document)=>e.querySelector(i),ft=(i,e=document)=>[...e.querySelectorAll(i)],os=i=>new Promise(e=>setTimeout(e,i)),et=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Uc=i=>`${Number(i||0).toLocaleString("ko-KR")}\uC6D0`,O1=(i,e)=>e.split(".").reduce((t,n)=>t==null?t:t[n],i),k1=(i,e,t)=>{let n=e.split("."),r=n.pop();n.reduce((s,a)=>s[a]??={},i)[r]=t},So=i=>{let e=new Date(i);return`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`},H1=matchMedia("(prefers-reduced-motion: reduce)").matches,z1=i=>i[Math.floor(Math.random()*i.length)],mm;function Ut(i,e=2800){let t=k("#toast");t.textContent=i,t.classList.add("show"),clearTimeout(mm),mm=setTimeout(()=>t.classList.remove("show"),e)}var gm;function Ot(i,e=4400){let t=k("#caption");t.textContent=i,t.classList.add("show"),clearTimeout(gm),gm=setTimeout(()=>t.classList.remove("show"),e)}async function Oc(i){try{return await navigator.clipboard.writeText(i),!0}catch{let e=document.createElement("textarea");e.value=i,document.body.append(e),e.select();let t=document.execCommand("copy");return e.remove(),t}}function ud(i,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=i,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}var rd=new URLSearchParams(location.search),Ki=(rd.get("m")||$i.defaultMemorial).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,40)||$i.defaultMemorial,qe=new Mc($i,Ki),yt=new Rc,wm="samga:me",vm=(()=>{try{return JSON.parse(localStorage.getItem(wm))||{}}catch{return{}}})(),A={role:"guest",entered:!1,busy:!1,memorial:null,counters:{},guestbook:[],lanterns:[],wreaths:[],done:new Set,ticket:!1,incenseAt:null,inHall:!1,me:{id:"",name:"",relation:"",religion:"traditional",outfit:"suit",...vm,look:{...bn,...vm.look||{}}},time:(()=>{let i=new Date().getHours();return i>=6&&i<16?"day":i>=16&&i<19?"dusk":"night"})(),act:"",actSeq:0,say:"",sayS:0,ix:null,meals:0};A.me.id||(A.me.id=`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`);var dd=()=>{try{localStorage.setItem(wm,JSON.stringify(A.me))}catch{}},Li=new ia({antialias:!0,powerPreference:"high-performance"});Li.setPixelRatio(Math.min(devicePixelRatio,2));Li.shadowMap.enabled=!0;Li.shadowMap.type=ql;Li.toneMapping=Js;Li.outputColorSpace=Ct;k("#stage").append(Li.domElement);var Ii=new Jt(50,innerWidth/innerHeight,.1,600);await Promise.race([Promise.all([document.fonts?.load?.('700 40px "Gowun Batang"'),document.fonts?.load?.('700 40px "Noto Serif KR"',"\u8CFB\u5100")]),os(1800)]).catch(()=>{});await Gf();var me=dm(Li),Qi=me.scene;me.setTime(A.time);var J={avatar:new wi({outfit:A.me.outfit,look:A.me.look}),pos:new E(0,0,21),face:Math.PI,target:null,resolve:null,speed:3.6,stuck:0};J.avatar.root.visible=!1;Qi.add(J.avatar.root);var ke={yaw:0,pitch:.36,dist:7.6,tYaw:0,tPitch:.36,tDist:7.6,focus:null,focusK:0,look:new E};function Am(){Li.setSize(innerWidth,innerHeight),Ii.aspect=innerWidth/innerHeight,Ii.fov=innerWidth<innerHeight?62:50,Ii.updateProjectionMatrix()}addEventListener("resize",Am);Am();var Rm=k("#labels"),sd=new Set,da=new E;function wo(i,e){Rm.append(i);let t={el:i,getPos:e};return sd.add(t),{el:i,remove(){i.remove(),sd.delete(t)}}}function kc(i,e="",t="\uB098",n=""){let r=document.createElement("div");return r.className=`tag ${e}`,r.innerHTML=`<b>${et(t)}</b>${et(i)}${n?`<i>${et(n)}</i>`:""}`,r}var G1=(i,e=1)=>()=>i.visible===!1?null:da.copy(i.position).add(new E(0,1.62*e,0));function ls(i,e,t=3800,n=!1,r=1){let s=document.createElement("div");s.className=`bubble${n?" emote":""}`,s.textContent=e;let a=wo(s,()=>da.copy(i.position).add(new E(0,2.05*r,0)));setTimeout(()=>a.remove(),t)}function V1(){let i=innerWidth,e=innerHeight;for(let t of sd){let n=t.getPos();if(!n){t.el.style.display="none";continue}let r=da.copy(n).project(Ii);if(r.z>1||r.z<-1){t.el.style.display="none";continue}t.el.style.display="",t.el.style.transform=`translate(${(r.x*.5+.5)*i}px, ${(-r.y*.5+.5)*e}px) translate(-50%, -100%)`}}var ad,W1=wo(kc("\uC0C1\uC8FC","host","\uC0C1\uC8FC"),()=>me.hostNpc.root.visible?da.set(me.HOST_SPOT.x,Oe+1.62*me.hostNpc.height,me.HOST_SPOT.z):null);wo(kc("\uC548\uB0B4 \uB3C4\uC6B0\uBBF8","helper","\uC548\uB0B4"),G1(me.helper.root));function ua(){return A.memorial.portrait||um(A.memorial.deceased.name)}function Cm(){return Mr(A.memorial.gallery||[])}function pd(){let i=A.memorial.deceased||{};return[i.birth,i.death].filter(Boolean).join(" \u2013 ")+(i.age?` \xB7 \uD5A5\uB144 ${i.age}\uC138`:"")}function Sr({theme:i=!0}={}){let e=A.memorial,t=e.deceased?.name||"\uACE0\uC778";ft('[data-bind="name"]').forEach(n=>{n.textContent=`\u6545 ${t}`}),ft('[data-bind="dates"]').forEach(n=>{n.textContent=pd()}),ft('[data-bind="mourners"]').forEach(n=>{n.textContent=e.mourners||"-"}),ft('[data-bind="departure"]').forEach(n=>{n.textContent=e.funeral?.departure||"-"}),ft('[data-bind="burial"]').forEach(n=>{n.textContent=e.funeral?.burial||"-"}),ft('[data-bind="greeting"]').forEach(n=>{n.textContent=e.greeting||""}),ft('[data-bind="portrait"]').forEach(n=>{n.src=ua()}),k("#theme-note").textContent=`${ns[e.theme]?.icon||""} ${ns[e.theme]?.label||""} \uBE48\uC18C`,document.title=`\u6545 ${t} \xB7 \uC0BC\uAC00`,i&&me.theme?.name!==e.theme&&(me.setTheme(ns[e.theme]?e.theme:"hospital",t),me.setShoes(md())),me.setDeceasedName(t),me.setPortrait(ua()),me.setGallery(Cm().filter(n=>n.type==="image").map(n=>n.src)),me.setReligion(e.religion||"traditional"),me.setTablet(t),me.hostNpc.setOutfit(_r[e.hostOutfit]?e.hostOutfit:"hostSuit"),me.hostNpc.setLook(e.hostLook||bn),W1.el.innerHTML=`<b>\uC0C1\uC8FC</b>${et(e.hostName||"\uC0C1\uC8FC")}`,A.role==="host"&&(J.avatar.setOutfit(_r[e.hostOutfit]?e.hostOutfit:"hostSuit"),J.avatar.setLook(e.hostLook||bn)),er()}var od=null;function Ic(i){ft("#entry [data-step]").forEach(e=>{e.hidden=e.dataset.step!==String(i)}),ft("#entry .steps i").forEach((e,t)=>e.classList.toggle("on",t+1<=i)),k("#entry .entry-card").scrollTop=0,i===3&&!od&&(od=new ha(k("#entry-look"),{look:A.me.look,outfit:A.me.outfit,who:"guest",onChange:(e,t)=>{A.me.look=e,A.me.outfit=t}}))}function X1(){let i=k("#rite-choices");i.innerHTML=Object.entries(Yi).map(([e,t])=>`
    <button type="button" class="card-choice" data-rite="${e}" aria-pressed="${A.me.religion===e}">
      <span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small>
    </button>`).join(""),i.onclick=e=>{let t=e.target.closest("[data-rite]");t&&(A.me.religion=t.dataset.rite,ft("[data-rite]",i).forEach(n=>n.setAttribute("aria-pressed",n===t)))},Pm(k("#entry-relations"),A.me.relation,e=>{A.me.relation=e}),k("#in-name").value=A.me.name||"",k("#to-step2").onclick=()=>Ic(2),k("#to-step3").onclick=()=>{let e=k("#in-name").value.trim();if(!e){k("#in-name").focus(),Ut("\uC774\uB984\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694. \uC774\uB984\uD45C\uC640 \uBC29\uBA85\uB85D\uC5D0 \uC4F0\uC5EC\uC694.");return}A.me.name=e,Ic(3)},ft("#entry [data-back]").forEach(e=>{e.onclick=()=>Ic(+e.dataset.back)}),k("#btn-enter").onclick=()=>fd("guest"),k("#in-name").addEventListener("keydown",e=>{e.key==="Enter"&&k("#to-step3").click()}),k("#btn-host-entry").onclick=()=>Im(),k("#btn-theater-entry").onclick=()=>hs(),Ic(1)}function Pm(i,e,t){i.innerHTML=Gu.map(n=>`<button type="button" class="chip" data-rel="${n}" aria-pressed="${n===e}">${n}</button>`).join(""),i.onclick=n=>{let r=n.target.closest("[data-rel]");if(!r)return;let s=r.getAttribute("aria-pressed")!=="true";ft("[data-rel]",i).forEach(a=>a.setAttribute("aria-pressed",s&&a===r)),t(s?r.dataset.rel:"")}}function Im(){k("#pin-tip").textContent=$i.hostPin==="0000"?"\uCC98\uC74C PIN\uC740 0000 \uC774\uC5D0\uC694. js/config.js \uC5D0\uC11C \uBC14\uAFD4 \uC8FC\uC138\uC694.":"";let i=k("#dlg-pin");on(i),i.onclose=()=>{if(i.returnValue!=="ok")return;let e=new FormData(k("#form-pin")).get("pin");if(k("#form-pin").reset(),String(e)!==String($i.hostPin)){Ut("PIN\uC774 \uB9DE\uC9C0 \uC54A\uC544\uC694.");return}fd("host")}}async function fd(i){A.role=i,document.body.classList.toggle("is-host",i==="host"),i==="guest"&&dd(),od?.dispose(),yt.ensure(),qm(),k("#entry").hidden=!0,k("#hud").hidden=!1,k("#bar").hidden=!1;let e=A.memorial;i==="host"?(me.hostNpc.root.visible=!1,J.pos.set(me.HOST_SPOT.x,Oe,me.HOST_SPOT.z),J.face=me.HOST_SPOT.face,ke.tYaw=ke.yaw=-Math.PI/2+.35,ke.tDist=6.5,Sr({theme:!1})):(me.hostNpc.root.visible=!0,J.avatar.setOutfit(A.me.outfit),J.avatar.setLook(A.me.look),J.pos.set(0,0,21),J.face=Math.PI,ke.tYaw=ke.yaw=0),J.avatar.root.visible=!0;let t=i==="host"?e.hostName||"\uC0C1\uC8FC":A.me.name;if(ad=wo(kc(t,i==="host"?"host":"",i==="host"?"\uC0C1\uC8FC":"\uB098",i==="host"?"":A.me.relation),()=>da.copy(J.pos).add(new E(0,1.62*J.avatar.height,0))),A.entered=!0,A.done=new Set(qe.getLocal(`done:${A.me.religion}`,[])),A.ticket=!!qe.getLocal("ticket",!1),Nm(),Om(),i==="guest"){let n=new Date().toDateString();qe.getLocal("visited","")!==n&&(qe.setLocal("visited",n),qe.bump("visits"),A.counters.visits=(A.counters.visits||0)+1),k("#guide").hidden=innerWidth<720,Ot(`${A.me.name} \uB2D8, \uC5B4\uC11C \uC624\uC138\uC694.
\uB3CC\uAE38\uC744 \uB530\uB77C \uBE48\uC18C\uB85C \uCC9C\uCC9C\uD788 \uAC78\uC5B4\uAC00 \uBCF4\uC138\uC694.`,5200),setTimeout(()=>{A.helperGreeted||(A.helperGreeted=!0,me.helper.play("nod",null,{soft:!0}),ls(me.helper.root,"\uC5B4\uC11C \uC624\uC138\uC694. \uCC98\uC74C\uC774\uC2DC\uBA74 \uC800\uD55C\uD14C \uBB3C\uC5B4\uBCF4\uC138\uC694~",4200))},1800)}else Ot(`\uC0C1\uC8FC \uC790\uB9AC\uC5D0 \uC130\uC2B5\uB2C8\uB2E4.
\uC870\uBB38\uAC1D\uC744 \uB9DE\uC73C\uBA70 '\uB2F5\uB840 \uC778\uC0AC'\uB85C \uACE0\uB9C8\uC6C0\uC744 \uC804\uD560 \uC218 \uC788\uC5B4\uC694.`,5200),setTimeout(()=>bd(),900);er(),Qm()}function j1(i){let e=me.inHall(J.pos.x,J.pos.z)&&J.pos.z<.4,t=me.inHall(i.x,i.z)&&i.z<.4;if(e===t)return[i];let n={x:Kr.clamp(e?J.pos.x:i.x,-1.2,1.2),z:e?-.4:2.4},r={x:n.x,z:e?2.4:-.4};return[n,r,i]}function fn(i){return J.avatar.cancelSoft(),J.resolve&&J.resolve(!1),J.avatar.hold==="sit"&&(J.avatar.hold=null),new Promise(e=>{J.route=j1(i),J.target=J.route.shift(),J.resolve=e,J.stuck=0,J.best=1/0})}function q1(){J.resolve&&J.resolve(!1),J.route=null,J.target=null,J.resolve=null}var jn={};function $1(){let i=(jn.KeyW||jn.ArrowUp?1:0)-(jn.KeyS||jn.ArrowDown?1:0),e=(jn.KeyD||jn.ArrowRight?1:0)-(jn.KeyA||jn.ArrowLeft?1:0);if(!i&&!e)return null;let t=-Math.sin(ke.yaw),n=-Math.cos(ke.yaw),r=Math.cos(ke.yaw),s=-Math.sin(ke.yaw);return new ue(t*i+r*e,n*i+s*e).normalize()}var Nc=(i,e,t)=>{let n=(e-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*t};function Y1(i){let e=J.avatar,t=null,n=!1;if(!e.busy&&A.entered){let a=$1();if(a)J.target&&q1(),e.cancelSoft(),t=a,e.hold==="sit"&&(e.hold=null);else if(J.target){let o=J.target.x-J.pos.x,c=J.target.z-J.pos.z,l=Math.hypot(o,c);if(l<J.best-.05?(J.best=l,J.stuck=0):J.stuck+=i,l<.07&&J.route?.length)J.target=J.route.shift(),J.best=1/0;else if(l<.07){J.pos.x=J.target.x,J.pos.z=J.target.z;let h=J.resolve,u=J.target.face;J.target=null,J.resolve=null,u!=null&&(J.wantFace=u),h?.(!0)}else t=new ue(o/l,c/l)}}if(t){let a=Math.min(J.speed*i,J.target?Math.hypot(J.target.x-J.pos.x,J.target.z-J.pos.z):1),o=J.pos.x+t.x*a,c=J.pos.z+t.y*a,l=A.role==="host";J.target&&J.stuck>.9||!me.blocked(o,c,.28,l)?(J.pos.x=o,J.pos.z=c,n=!0):me.blocked(o,J.pos.z,.28,l)?me.blocked(J.pos.x,c,.28,l)||(J.pos.z=c,n=!0):(J.pos.x=o,n=!0),J.face=Nc(J.face,Math.atan2(t.x,t.y),Math.min(1,i*12)),J.wantFace=null}else J.wantFace!=null&&(J.face=Nc(J.face,J.wantFace,Math.min(1,i*8)));let r=me.heightAt(J.pos.x,J.pos.z);J.pos.y+=(r-J.pos.y)*Math.min(1,i*14),e.root.position.copy(J.pos),e.root.rotation.y=J.face,e.update(i,n);let s=me.inHall(J.pos.x,J.pos.z)&&J.pos.z<.6;if(s!==A.inHall){A.inHall=s;let a=me.theme?.shoes;e.setBarefoot(s&&a),a&&s&&!A.shoeTold&&(A.shoeTold=!0,Ot("\uC2E0\uBC1C\uC744 \uBC97\uACE0 \uBE48\uC18C \uB9C8\uB8E8\uC5D0 \uC62C\uB77C\uC12D\uB2C8\uB2E4.",3e3)),me.setShoes(md())}}function md(){let i=3;A.inHall&&A.role==="guest"&&i++;for(let e of A.others?.values()||[])e.inHall&&i++;return i}function Z1(i){ke.yaw+=(ke.tYaw-ke.yaw)*Math.min(1,i*8),ke.pitch+=(ke.tPitch-ke.pitch)*Math.min(1,i*8),ke.dist+=(ke.tDist-ke.dist)*Math.min(1,i*6);let e,t;if(A.entered){e=new E(J.pos.x,J.pos.y+1.1,J.pos.z);let r=Math.cos(ke.pitch);t=new E(e.x+Math.sin(ke.yaw)*r*ke.dist,e.y+Math.sin(ke.pitch)*ke.dist,e.z+Math.cos(ke.yaw)*r*ke.dist),me.inHall(J.pos.x,J.pos.z)&&(t.x=Kr.clamp(t.x,-9.6,9.6),t.z=Math.max(t.z,-11.5),t.y=Math.min(t.y,(me.theme?.ceiling??Oe+4.8)-.3)),t.y=Math.max(t.y,me.heightAt(t.x,t.z)+.4)}else{let r=performance.now()/1e3;e=new E(0,2.2,-4);let s=r*.05;t=new E(Math.sin(s)*15,5.5,-4+Math.cos(s)*15+6)}let n=ke.focus?1:0;if(ke.focusK+=(n-ke.focusK)*Math.min(1,i*3),ke.focusK>.001&&(ke.focus||ke.lastFocus)){let r=ke.focus||ke.lastFocus;t.lerp(r.pos,ke.focusK),e.lerp(r.look,ke.focusK)}Ii.position.lerp(t,A.entered?1:Math.min(1,i*2)),ke.look.lerp(e,A.entered?1:Math.min(1,i*2)),Ii.lookAt(ke.look)}function gd(){ke.focus=null}var ld=new ao;ld.camera=Ii;var ym=new ue;function Lm(i,e){ym.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),ld.setFromCamera(ym,Ii);let t=ld.intersectObjects(Qi.children,!0);for(let n of t)if(n.object.userData.avatar!==J.avatar&&!(!n.object.visible||n.object.isSprite&&!n.object.userData.interact))return n.object.userData.interact?{interact:n.object.userData.interact,point:n.point}:me.isWalkable(n.object)?{walk:n.point}:null;return null}var Pi=new Map,Ji=null,cd=0,cs=Li.domElement;cs.addEventListener("pointerdown",i=>{if(cs.setPointerCapture(i.pointerId),Pi.set(i.pointerId,{x:i.clientX,y:i.clientY}),Pi.size===1&&(Ji={x:i.clientX,y:i.clientY,moved:0}),Pi.size===2){let[e,t]=[...Pi.values()];cd=Math.hypot(e.x-t.x,e.y-t.y),Ji=null}});cs.addEventListener("pointermove",i=>{let e=Pi.get(i.pointerId);if(!e){J1(i.clientX,i.clientY);return}let t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,Pi.size===2){let[r,s]=[...Pi.values()],a=Math.hypot(r.x-s.x,r.y-s.y);ke.tDist=Kr.clamp(ke.tDist*(cd/a),2.6,16),cd=a;return}Ji&&(Ji.moved+=Math.abs(t)+Math.abs(n),Ji.moved>6&&(ke.focus&&gd(),ke.tYaw-=t*.0055,ke.tPitch=Kr.clamp(ke.tPitch+n*.004,.05,1.25)))});function Dm(i){let e=Ji&&Ji.moved>6;Pi.delete(i.pointerId),i.type==="pointerup"&&Ji&&!e&&Pi.size===0&&ev(i.clientX,i.clientY),Pi.size===0&&(Ji=null)}cs.addEventListener("pointerup",Dm);cs.addEventListener("pointercancel",Dm);cs.addEventListener("wheel",i=>{i.preventDefault(),ke.tDist=Kr.clamp(ke.tDist*(1+Math.sign(i.deltaY)*.1),2.6,16)},{passive:!1});var br=null,nd=0;function J1(i,e){nd||!A.entered||(nd=requestAnimationFrame(()=>{nd=0;let t=Lm(i,e),n=t?.interact;cs.style.cursor=n?"pointer":t?.walk?"default":"grab";let r=n?K1(n):"";if(!r){br?.remove(),br=null;return}br||(br=document.createElement("div"),br.className="hover-label",document.body.append(br)),br.textContent=r,br.style.transform=`translate(${i}px, ${e-16}px) translate(-50%, -100%)`}))}function K1(i){if(i.startsWith("memory:")){let t=me.memories?.[+i.split(":")[1]];return t?`${t.name} \uB2D8\uC758 \uB9C8\uC74C${t.relation?` \xB7 ${t.relation}`:""}`:""}if(i.startsWith("sky:"))return"\uD558\uB298\uC758 \uB4F1\uBD88";if(i.startsWith("wreath:")){let t=me.wreaths?.[+i.split(":")[1]];return t?`\uADFC\uC870\uD654\uD658 \xB7 ${t.from}`:""}if(i.startsWith("other:")){let t=A.others.get(i.slice(6));return t?`${t.name} \uB2D8\uAED8 \uC778\uC0AC`:""}let e=me.interactables.get(i);return e?e.verb:""}function Q1(i,e){let t=document.createElement("div");t.className="ripple",t.style.left=`${i}px`,t.style.top=`${e}px`,Rm.append(t),setTimeout(()=>t.remove(),750)}function ev(i,e){if(!A.entered)return;if(ke.focus){gd();return}let t=Lm(i,e);if(t){if(t.interact){Sn(t.interact);return}t.walk&&!A.busy&&!J.avatar.busy&&(Q1(i,e),fn({x:t.walk.x,z:t.walk.z}))}}addEventListener("keydown",i=>{if(!A.entered||i.target.closest("input, textarea, select, dialog")||document.querySelector("dialog[open]")||!k("#theater").hidden)return;jn[i.code]=!0,i.code==="KeyQ"&&(ke.tYaw+=.35),i.code==="KeyE"&&(ke.tYaw-=.35),(i.code==="Equal"||i.code==="NumpadAdd")&&(ke.tDist=Math.max(2.6,ke.tDist-1)),(i.code==="Minus"||i.code==="NumpadSubtract")&&(ke.tDist=Math.min(16,ke.tDist+1)),i.code==="KeyG"&&km(),i.code==="KeyT"&&(i.preventDefault(),vd()),i.code==="Escape"&&gd(),(i.code==="Space"||i.code==="Enter")&&(i.preventDefault(),A.near&&Sn(A.near.id));let e=Number(i.key);e>=1&&e<=9&&ft("#rite-actions .act")[e-1]?.click(),i.code.startsWith("Arrow")&&i.preventDefault()});addEventListener("keyup",i=>{jn[i.code]=!1});addEventListener("blur",()=>{for(let i in jn)jn[i]=!1});function tv(){let i=null,e=1/0;if(A.entered&&!J.avatar.busy&&!A.busy)for(let t of me.interactables.values()){if(!t.radius||t.id==="host"&&A.role==="host")continue;let n=Math.hypot(J.pos.x-t.spot.x,J.pos.z-t.spot.z);n<t.radius&&n<e&&(e=n,i=t)}if(i?.id!==A.near?.id){A.near=i;let t=k("#prompt");i?(t.innerHTML=`${et(i.verb)}<kbd>Space</kbd>`,t.hidden=!1):t.hidden=!0,Eo(),i?.id==="altar"&&Hc()<=0&&A.role==="guest"&&Ot(`\uD5A5\uC774 \uB2E4 \uD0C0\uC11C \uAEBC\uC838 \uC788\uC5B4\uC694.
\uC0C8 \uD5A5\uC744 \uC62C\uB824 \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC8FC\uC138\uC694.`,3800)}A.role==="guest"&&!A.hostNodded&&me.hostNpc.root.visible&&Math.hypot(J.pos.x-me.HOST_SPOT.x,J.pos.z-me.HOST_SPOT.z)<4.2&&(A.hostNodded=!0,me.hostNpc.play("nod"))}k("#prompt").onclick=()=>A.near&&Sn(A.near.id);async function Sn(i){if(A.busy||J.avatar.busy){Ut("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}if(i.startsWith("photo:"))return hs(+i.split(":")[1]);if(i.startsWith("memory:"))return vv(me.memories?.[+i.split(":")[1]]);if(i.startsWith("sky:")){let t=me.lantern(+i.split(":")[1]);return t&&gv(t)}if(i.startsWith("meal:"))return zm(+i.split(":")[1]);if(i.startsWith("wreath:"))return xv(me.wreaths?.[+i.split(":")[1]]);if(i.startsWith("other:"))return Ev(i.slice(6));let e=me.interactables.get(i);switch(i){case"portrait":return hs();case"altar":await fn(e.spot)&&Ot(A.role==="host"?"\uC81C\uB2E8 \uC55E\uC785\uB2C8\uB2E4.":`\uC81C\uB2E8 \uC55E\uC785\uB2C8\uB2E4. \uC544\uB798 ${Yi[A.me.religion].label} \uBC84\uD2BC\uC73C\uB85C \uB9C8\uC74C\uC744 \uC804\uD574 \uC8FC\uC138\uC694.`);return;case"candles":return Ao("candle");case"basket":return Pn(async()=>{await fn(e.spot)&&Um()});case"host":return A.role==="host"?void 0:Pn(async()=>{await fn(e.spot)&&fv()});case"donation":return Pn(async()=>{await fn(e.spot)&&hv()});case"guestbook":return Pn(async()=>{await fn(e.spot)&&lv()});case"lantern":return Pn(async()=>{await fn(e.spot)&&mv()});case"florist":return Pn(async()=>{await fn(e.spot)&&_v()});case"helper":return Pn(async()=>{await fn(e.spot)&&Mv()});default:}}async function Pn(i){if(!A.busy){A.busy=!0,Eo();try{await i()}finally{A.busy=!1,Eo()}}}function Bn(i){A.act=i,A.actSeq++}function Um(){if(J.avatar.hold==="flower"){Ut("\uC774\uBBF8 \uAD6D\uD654\uB97C \uB4E4\uACE0 \uC788\uC5B4\uC694. \uC81C\uB2E8 \uC55E\uC5D0\uC11C \uD5CC\uD654\uD574 \uC8FC\uC138\uC694.");return}J.avatar.hold="flower",J.avatar.setProp("flower",!0),yt.soft(),Ot(`\uD558\uC580 \uAD6D\uD654 \uD55C \uC1A1\uC774\uB97C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.
\uC81C\uB2E8 \uC55E\uC73C\uB85C \uAC00\uC11C \uAF43\uBD09\uC624\uB9AC\uAC00 \uC601\uC815\uC744 \uD5A5\uD558\uB3C4\uB85D \uB193\uC544 \uC8FC\uC138\uC694.`),Bn("flower")}var nv=()=>me.interactables.get("altar").spot,_m={traditional:{incense:`\uD5A5\uC5D0 \uBD88\uC744 \uBD99\uC5EC \uD5A5\uB85C\uC5D0 \uAF42\uC558\uC2B5\uB2C8\uB2E4.
\uD5A5 \uC5F0\uAE30\uAC00 \uACE0\uC778\uAED8 \uB9C8\uC74C\uC744 \uC804\uD574 \uC904 \uAC70\uC608\uC694.`,bow:"\uB450 \uBC88 \uC808\uD558\uACE0, \uBC18\uC808\uB85C \uC608\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4.",silence:"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4."},buddhist:{incense:"\uD5A5\uC744 \uC0AC\uB974\uBA70 \uADF9\uB77D\uC655\uC0DD\uC744 \uBE55\uB2C8\uB2E4.",hapjang:`\uB098\uBB34\uC544\uBBF8\uD0C0\uBD88 \u2014
\uB450 \uC190\uC744 \uBAA8\uC544 \uBC18\uBC30 \uC62C\uB838\uC2B5\uB2C8\uB2E4.`,bow:`\uC0BC\uBC30\uB97C \uC62C\uB838\uC2B5\uB2C8\uB2E4.
\uBD80\uCC98\uB2D8 \uD488\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC18C\uC11C.`,beads:"\uC5FC\uC8FC \uC77C\uACF1 \uC54C\uC744 \uAD74\uB9AC\uBA70 \uADF9\uB77D\uC655\uC0DD\uC744 \uBE4C\uC5C8\uC2B5\uB2C8\uB2E4."},christian:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",prayer:`\uC8FC\uB2D8, \uC2AC\uD514 \uAC00\uC6B4\uB370 \uC788\uB294 \uC720\uAC00\uC871\uC744 \uC704\uB85C\uD558\uC2DC\uACE0
\uBD80\uD65C\uC758 \uC18C\uB9DD\uC73C\uB85C \uBD99\uB4E4\uC5B4 \uC8FC\uC18C\uC11C.`,silentPrayer:"\uACE0\uAC1C \uC219\uC5EC \uBB35\uB3C4\uD569\uB2C8\uB2E4."},catholic:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",sign:"\uC131\uBD80\uC640 \uC131\uC790\uC640 \uC131\uB839\uC758 \uC774\uB984\uC73C\uB85C. \uC544\uBA58.",prayer:`\uC8FC\uB2D8, {name}\uC5D0\uAC8C \uC601\uC6D0\uD55C \uC548\uC2DD\uC744 \uC8FC\uC18C\uC11C.
\uC601\uC6D0\uD55C \uBE5B\uC744 \uADF8\uC5D0\uAC8C \uBE44\uCD94\uC18C\uC11C.`,candle:`\uC791\uC740 \uCD1B\uBD88 \uD558\uB098\uB97C \uBD09\uD5CC\uD588\uC2B5\uB2C8\uB2E4.
\uC774 \uBD88\uBE5B\uCC98\uB7FC \uB530\uB73B\uD55C \uACF3\uC5D0 \uBA38\uBB34\uC2DC\uAE38.`},none:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",silence:"\uACE0\uC778\uC744 \uAE30\uC5B5\uD558\uBA70 \uBB35\uB150\uD588\uC2B5\uB2C8\uB2E4.",nod:"\uC815\uC911\uD788 \uBAA9\uB840\uD588\uC2B5\uB2C8\uB2E4."}},Ci=i=>(_m[A.role==="host"?A.memorial.religion||"traditional":A.me.religion]?.[i]||_m.traditional[i]||"").replace("{name}",A.memorial.deceased.name);function Hc(){return A.incenseAt?1-(Date.now()-A.incenseAt)/(wc*6e4):0}async function Ao(i){if(A.busy||J.avatar.busy){Ut("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}let e=zu[i];await Pn(async()=>{let t=J.avatar;if(t.cancelSoft(),i==="flower"&&t.hold!=="flower"){if(!await fn(me.interactables.get("basket").spot))return;Um(),await os(500)}if(i==="candle"){if(!await fn(me.interactables.get("candles").spot))return}else if(e.altar&&!await fn(nv()))return;switch(await os(250),Bn(i),i){case"incense":{let n=Hc()<=0;await t.play("incense",r=>{r==="light"&&(A.counters.incense=(A.counters.incense||0)+1,A.incenseAt=Date.now(),qe.stampState("incenseAt").then(s=>{typeof s=="number"&&(A.incenseAt=s)}),Vc(),me.setCounts(A.counters),me.burstSmoke(),yt.soft())}),Ot(n?`\uAEBC\uC838 \uC788\uB358 \uD5A5\uC744 \uB2E4\uC2DC \uC62C\uB838\uC2B5\uB2C8\uB2E4.
\uC55E\uC73C\uB85C ${wc}\uBD84 \uB3D9\uC548 \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC904 \uAC70\uC608\uC694.`:Ci("incense"));break}case"flower":{await t.play("offer",async n=>{if(n!=="release")return;let r=t.props.flower;delete t.props.flower,t.hold=null,r&&(await me.flyTo(r,new E((Math.random()-.5)*2.6,Oe+.16,-7.3),.7),Qi.remove(r)),A.counters.flowers=(A.counters.flowers||0)+1,me.setCounts(A.counters),yt.drop()}),Ot(Ci("flower")||"\uD558\uC580 \uAD6D\uD654\uB97C \uC601\uC815 \uC55E\uC5D0 \uB193\uC558\uC2B5\uB2C8\uB2E4.");break}case"bow2":case"bow3":Ot(i==="bow2"?"\uB450 \uC190\uC744 \uBAA8\uC544 \uC774\uB9C8\uC5D0 \uB300\uACE0, \uBB34\uB98E\uC744 \uAFC7\uC5B4 \uC808\uD569\uB2C8\uB2E4.":"\uC0BC\uBC30\uB97C \uC62C\uB9BD\uB2C8\uB2E4.",3e3),await t.play(i),Ot(Ci("bow"));break;case"hapjang":await t.play("hapjang"),yt.moktak(),Ot(Ci("hapjang"));break;case"beads":t.setProp("beads",!0),Ot("\uC5FC\uC8FC\uB97C \uAD74\uB9BD\uB2C8\uB2E4\u2026",2500),await t.play("beads",n=>{n==="bead"&&yt.moktak()}),t.setProp("beads",!1),Ot(Ci("beads"));break;case"prayer":{let n=iv();Ot(Ci("prayer"),6e3),await t.play("prayer"),n.fade();break}case"silentPrayer":case"silence":await rv(i==="silentPrayer"?"\uBB35\uB3C4":"\uBB35\uB150"),Ot(Ci(i));break;case"sign":await t.play("sign"),Ot(Ci("sign"));break;case"candle":await t.play("candle",n=>{n==="release"&&(A.counters.candles=(A.counters.candles||0)+1,me.setCounts(A.counters),yt.soft())}),Ot(Ci("candle"));break;case"nod":await t.play("nod"),Ot(Ci("nod"));break;default:}qe.bump(e.key,i==="beads"?7:1),["incense","flowers","candles"].includes(e.key)||(A.counters[e.key]=(A.counters[e.key]||0)+(i==="beads"?7:1)),Ro(i),er()})}function iv(){let i=new we(.5,1.1,6,24,1,!0),e=new nn({color:"#fff3d6",transparent:!0,opacity:0,side:St,depthWrite:!1,blending:lo}),t=new X(i,e);t.raycast=()=>{},t.position.copy(J.pos).add(new E(0,3,0)),Qi.add(t);let n=.16,r=()=>{if(e.opacity+=(n-e.opacity)*.05,n===0&&e.opacity<.005){Qi.remove(t),i.dispose();return}requestAnimationFrame(r)};return r(),{fade(){n=0}}}function rv(i){return new Promise(e=>{let t=k("#silence"),n=k("#silence-arc");k("#silence-text").textContent=i,t.hidden=!1,n.style.transition="none",n.style.strokeDashoffset="289",yt.bell(),yt.duck(!0);let r=9e3;requestAnimationFrame(()=>requestAnimationFrame(()=>{n.style.transition=`stroke-dashoffset ${r}ms linear`,n.style.strokeDashoffset="0"})),J.avatar.play("silence");let s=!1,a=()=>{s||(s=!0,t.hidden=!0,t.onclick=null,yt.chime(.1),yt.duck(!1),J.avatar.finish(),e())};t.onclick=a,setTimeout(a,r)})}var sv=[{id:"guestbook",icon:"\u270D\uFE0F",label:"\uBC29\uBA85\uB85D",run:()=>Sn("guestbook")},{id:"greet",icon:"\u{1F91D}",label:"\uC0C1\uC8FC \uC778\uC0AC",run:()=>Sn("host")},{id:"condolence",icon:"\u2709\uFE0F",label:"\uC870\uC758\uAE08",run:()=>Sn("donation")},{id:"meal",icon:"\u{1F372}",label:"\uC2DD\uB2F9",run:()=>xd()},{id:"lantern",icon:"\u{1F3EE}",label:"\uB4F1\uBD88",run:()=>Sn("lantern")},{id:"wreath",icon:"\u{1F490}",label:"\uD654\uD658",run:()=>Sn("florist")},{id:"talk",icon:"\u{1F4AC}",label:"\uB9D0\uD558\uAE30",run:()=>vd()},{id:"emote",icon:"\u{1F622}",label:"\uD45C\uC815",run:()=>Fm()}],av=[{id:"thank",icon:"\u{1F647}",label:"\uB2F5\uB840 \uC778\uC0AC",run:()=>Vm()},{id:"spot",icon:"\u{1F4CD}",label:"\uC0C1\uC8FC \uC790\uB9AC",run:()=>Pn(async()=>{await fn(me.HOST_SPOT)})},{id:"panel",icon:"\u{1F5C2}\uFE0F",label:"\uC0C1\uC8FC \uD328\uB110",run:()=>bd()},{id:"book",icon:"\u{1F4D6}",label:"\uBC29\uBA85\uB85D",run:()=>Hm()},{id:"theater",icon:"\u{1F39E}\uFE0F",label:"\uCD94\uC5B5 \uC0C1\uC601",run:()=>hs()},{id:"talk",icon:"\u{1F4AC}",label:"\uB9D0\uD558\uAE30",run:()=>vd()},{id:"emote",icon:"\u{1F622}",label:"\uD45C\uC815",run:()=>Fm()}];function Nm(){let i=A.role==="host"?Yi[A.memorial.religion]||Yi.traditional:Yi[A.me.religion],e=A.role==="host"?i.actions.filter(n=>n!=="flower"):i.actions;k("#rite-actions").innerHTML=e.map((n,r)=>{let s=zu[n];return`<button type="button" class="act" data-act="${n}" title="${s.label}${s.sub?` (${s.sub})`:""} \xB7 ${r+1}"><span class="ic">${s.icon}</span><span>${s.label}</span></button>`}).join(""),k("#rite-actions").onclick=n=>{let r=n.target.closest("[data-act]");r&&Ao(r.dataset.act)};let t=A.role==="host"?av:sv;k("#common-actions").innerHTML=t.map(n=>`<button type="button" class="act" data-common="${n.id}"><span class="ic">${n.icon}</span><span>${n.label}</span></button>`).join(""),k("#common-actions").onclick=n=>{let r=n.target.closest("[data-common]");r&&t.find(s=>s.id===r.dataset.common).run()},k("#emotes").innerHTML=xc.map(n=>`<button type="button" data-expr="${n.id}" title="${n.label}"><span>${n.icon}</span><small>${n.label}</small></button>`).join(""),Eo()}function Eo(){let i=Bm(),e=new Set(i?i.any:[]);ft("#rite-actions .act, #common-actions .act").forEach(t=>{let n=t.dataset.act||t.dataset.common;t.classList.toggle("suggest",A.role==="guest"&&e.has(n)),t.disabled=A.busy})}function Fm(){k("#emotes").hidden=!k("#emotes").hidden}k("#emotes").onclick=i=>{let e=i.target.closest("[data-expr]");e&&(k("#emotes").hidden=!0,ov(e.dataset.expr))};function ov(i){let e=xc.find(t=>t.id===i);i==="cry"||i==="smile"?J.avatar.setExpression(i,5):ls(J.avatar.root,e.icon,2400,!0,J.avatar.height),i==="pray"&&J.avatar.play("hapjang",null,{soft:!0}),Bn(`expr:${i}`)}function vd(){let i=k("#talkbar");i.hidden=!1,k("#talk-quick").innerHTML=Of.map(e=>`<button type="button">${et(e)}</button>`).join(""),k("#talk-input").focus()}function zc(i){i=i.trim().slice(0,60),i&&(ls(J.avatar.root,i,5e3,!1,J.avatar.height),A.say=i,A.sayS++,yt.pop())}k("#talkbar").onsubmit=i=>{i.preventDefault(),zc(k("#talk-input").value),k("#talk-input").value="",k("#talkbar").hidden=!0};k("#talk-quick").onclick=i=>{let e=i.target.closest("button");e&&(zc(e.textContent),k("#talkbar").hidden=!0)};k("#talk-close").onclick=()=>{k("#talkbar").hidden=!0};function To(){return A.role==="guest"?Yi[A.me.religion].steps:[]}function Fc(i){return i.any.some(e=>A.done.has(e))}function Bm(){return To().find(i=>!Fc(i))}function Ro(i){if(A.role!=="guest")return;let e=To().filter(n=>!n.optional).every(Fc);A.done.add(i),qe.setLocal(`done:${A.me.religion}`,[...A.done]),Om(),Eo();let t=To().filter(n=>!n.optional).every(Fc);!e&&t&&setTimeout(Sv,2600)}function Om(){if(A.role!=="guest"){k("#guide").hidden=!0;return}let i=Yi[A.me.religion];k("#guide-title").textContent=`${i.icon} ${i.label} \uC870\uBB38 \uC21C\uC11C`;let e=Bm();k("#guide-steps").innerHTML=To().map(t=>`
    <li class="${Fc(t)?"done":t===e?"next":""}">${et(t.label)}${t.optional?'<span class="opt">\uC120\uD0DD</span>':""}
      ${t===e?`<button type="button" data-step="${t.id}">\uD558\uAE30</button>`:""}</li>`).join(""),k("#guide-tip").textContent=e?"\u2018\uD558\uAE30\u2019\uB97C \uB204\uB974\uBA74 \uC54C\uC544\uC11C \uAC78\uC5B4\uAC00\uC11C \uC9C4\uD589\uD574\uC694. \uC21C\uC11C\uB294 \uC790\uC720\uB86D\uAC8C \uBC14\uAFD4\uB3C4 \uAD1C\uCC2E\uC544\uC694.":"\uBAA8\uB4E0 \uC21C\uC11C\uB97C \uB9C8\uCCE4\uC5B4\uC694. \uD3B8\uD788 \uBA38\uBB3C\uB2E4 \uAC00\uC138\uC694."}k("#guide-steps").onclick=i=>{let e=i.target.closest("[data-step]");if(!e)return;let n=To().find(r=>r.id===e.dataset.step).any[0];n==="guestbook"?Sn("guestbook"):n==="greet"?Sn("host"):n==="condolence"?Sn("donation"):n==="meal"?xd():Ao(n)};function km(){A.role==="guest"&&(k("#guide").hidden=!k("#guide").hidden)}k("#guide-close").onclick=()=>{k("#guide").hidden=!0};k("#btn-guide").onclick=km;function on(i){return i.returnValue="",i.showModal(),i}ft("dialog [data-close]").forEach(i=>i.addEventListener("click",()=>i.closest("dialog").close()));ft("dialog").forEach(i=>i.addEventListener("click",e=>{e.target===i&&i.close()}));function yd(i,e,t){i.innerHTML=e.map(n=>`<button type="button" aria-pressed="false">${et(n)}</button>`).join(""),i.onclick=n=>{let r=n.target.closest("button");r&&(t.tagName==="TEXTAREA"?t.value=(t.value?`${t.value.trim()} `:"")+r.textContent:t.value=r.textContent,ft("button",i).forEach(s=>s.setAttribute("aria-pressed",s===r)))}}function Gc(i){k("#view-body").innerHTML=i,on(k("#dlg-view"))}function lv(){let i=k("#form-guestbook");i.name.value=i.name.value||(A.role==="host"?A.memorial.hostName:A.me.name)||"";let e=A.role==="host"?"\uAC00\uC871":A.me.relation||"";i.relation.value=Gu.includes(e)?"":e,Pm(k("#gb-relations"),e,n=>{e=n,i.relation.value=""}),i.relation.oninput=()=>{e=i.relation.value.trim(),ft("#gb-relations [data-rel]").forEach(n=>n.setAttribute("aria-pressed","false"))},yd(k("#gb-quick"),["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC138\uC694.","\uB298 \uAE30\uC5B5\uD558\uACA0\uC2B5\uB2C8\uB2E4.","\uD568\uAED8\uD55C \uC2DC\uAC04 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4."],i.message);let t=k("#dlg-guestbook");on(t),t.onclose=async()=>{if(t.returnValue!=="ok")return;let n={name:i.name.value.trim().slice(0,16),relation:(e||"").slice(0,16),message:i.message.value.trim().slice(0,300)};if(!n.name)return;i.message.value="",A.role==="guest"&&n.relation&&!A.me.relation&&(A.me.relation=n.relation,dd());let r=await qe.add("guestbook",n);A.guestbook.push(r),me.setMemories(Co()),J.avatar.play("nod",null,{soft:!0}),Bn("nod"),yt.chime(.12),Ot(`\uBC29\uBA85\uB85D\uC5D0 \uC774\uB984\uC744 \uB0A8\uACBC\uC2B5\uB2C8\uB2E4.
\uB9C8\uB2F9 \uD654\uB2E8\uC5D0 \uD558\uC580 \uAD6D\uD654 \uD55C \uC1A1\uC774\uAC00 \uD53C\uC5C8\uC5B4\uC694.`),Ro("guestbook"),er()}}function _d(){return A.memorial.demo&&!qe.remote}function Co(){return[..._d()&&A.guestbook.length<3?(A.memorial.demoSeeds?.guestbook||[]).map(e=>({...e,demo:!0})):[],...A.guestbook]}var bo="";function Hm(){let i=Co().slice().reverse(),e={};i.forEach(n=>{let r=n.relation||"\uAE30\uD0C0";e[r]=(e[r]||0)+1});let t=()=>{let n=bo?i.filter(r=>(r.relation||"\uAE30\uD0C0")===bo):i;k("#book-filter").innerHTML=`<button type="button" class="chip" data-f="" aria-pressed="${!bo}">\uC804\uCCB4 ${i.length}</button>`+Object.entries(e).sort((r,s)=>s[1]-r[1]).map(([r,s])=>`<button type="button" class="chip" data-f="${et(r)}" aria-pressed="${bo===r}">${et(r)} ${s}</button>`).join(""),k("#book-list").innerHTML=n.length?n.map(r=>`
      <article class="book-item">
        ${r.relation?`<span class="rel">${et(r.relation)}</span>`:""}
        ${r.message?`<p>${et(r.message)}</p>`:""}
        <footer><span><b>${et(r.name)}</b>${r.demo?" \xB7 \uC608\uC2DC":""}</span><span>${r.time?So(r.time):""}</span></footer>
      </article>`).join(""):'<p class="empty">\uC544\uC9C1 \uB0A8\uACA8\uC9C4 \uAE00\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uB9C8\uC74C\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694.</p>'};k("#book-filter").onclick=n=>{let r=n.target.closest("[data-f]");r&&(bo=r.dataset.f,t())},t(),on(k("#dlg-book"))}k("#btn-book").onclick=Hm;k("#book-write").onclick=()=>{k("#dlg-book").close(),Sn("guestbook")};var Lc="\uACC4\uC88C \uC774\uCCB4",jt={phrase:"\u8CFB\u5100",paper:"white",seal:"mum",font:"serif"};function cv(i,e){let t=Zi.papers.find(a=>a.id===jt.paper),n=Zi.fonts.find(a=>a.id===jt.font),r=Zi.seals.find(a=>a.id===jt.seal),s=k("#envelope");s.style.setProperty("--paper",t.bg),s.style.setProperty("--efont",n.css),s.classList.toggle("band",!!t.band),k("#env-front").innerHTML=`${[...jt.phrase].map(a=>`<span>${et(a)}</span>`).join("")}${r.icon?`<em class="seal">${r.icon}</em>`:""}`,k("#env-front").classList.toggle("hangul",/[가-힣]/.test(jt.phrase)),k("#env-back").innerHTML=`<small>${et(i.affil.value.trim())}</small><strong>${et(i.name.value.trim()||"\uC774\uB984")}</strong><em>${e?Uc(e):""}</em>${i.note.value.trim()?"<i>\u2709 \uCABD\uC9C0 \uB3D9\uBD09</i>":""}`}function hv(){let i=A.memorial,e=k("#form-condolence"),t=k("#envelope");t.className="envelope",e.name.value=e.name.value||A.me.name||"";let n=[3e4,5e4,7e4,1e5],r=Number(e.amount.value.replace(/\D/g,""))||5e4;k("#amounts").innerHTML=n.map(h=>`<button type="button" class="chip" data-amount="${h}" aria-pressed="${h===r}">${h/1e4}\uB9CC \uC6D0</button>`).join(""),k("#env-phrases").innerHTML=Zi.phrases.map(h=>`<button type="button" class="chip env-ph" data-ph="${h.id}" aria-pressed="${jt.phrase===h.id}"><b>${h.id}</b><small>${h.sub}</small></button>`).join(""),k("#env-papers").innerHTML=Zi.papers.map(h=>`<button type="button" class="swatch" data-paper="${h.id}" style="--c:${h.bg}" aria-pressed="${jt.paper===h.id}">${h.label}</button>`).join(""),k("#env-seals").innerHTML=Zi.seals.map(h=>`<button type="button" class="chip" data-seal="${h.id}" aria-pressed="${jt.seal===h.id}">${h.icon} ${h.label}</button>`).join(""),k("#env-fonts").innerHTML=Zi.fonts.map(h=>`<button type="button" class="chip" data-font="${h.id}" style="font-family:${h.css}" aria-pressed="${jt.font===h.id}">${h.label}</button>`).join(""),A.memorial.religion==="christian"&&jt.phrase==="\u8CFB\u5100"&&!A.envTouched&&(jt.phrase="\u53EC\u5929");let s=()=>{cv(e,r),c(),ft("[data-ph]").forEach(h=>h.setAttribute("aria-pressed",h.dataset.ph===jt.phrase)),ft("[data-paper]").forEach(h=>h.setAttribute("aria-pressed",h.dataset.paper===jt.paper)),ft("[data-seal]").forEach(h=>h.setAttribute("aria-pressed",h.dataset.seal===jt.seal)),ft("[data-font]").forEach(h=>h.setAttribute("aria-pressed",h.dataset.font===jt.font))};k("#env-options").onclick=h=>{let u=h.target.closest("[data-ph],[data-paper],[data-seal],[data-font]");u&&(A.envTouched=!0,u.dataset.ph&&(jt.phrase=u.dataset.ph,t.classList.remove("flip")),u.dataset.paper&&(jt.paper=u.dataset.paper),u.dataset.seal&&(jt.seal=u.dataset.seal,t.classList.remove("flip")),u.dataset.font&&(jt.font=u.dataset.font),yt.pop(),s())},k("#amounts").onclick=h=>{let u=h.target.closest("[data-amount]");u&&(r=Number(u.dataset.amount),e.amount.value="",ft("#amounts .chip").forEach(d=>d.setAttribute("aria-pressed",d===u)),t.classList.add("flip"),s())},e.amount.oninput=()=>{let h=Number(e.amount.value.replace(/\D/g,""));h&&(r=h,ft("#amounts .chip").forEach(u=>u.setAttribute("aria-pressed","false"))),t.classList.add("flip"),s()},e.name.oninput=e.affil.oninput=e.note.oninput=()=>{t.classList.add("flip"),s()},k("#env-flip").onclick=()=>t.classList.toggle("flip");let a=i.account||{},o=a.number&&/\d/.test(a.number);k("#account-box").innerHTML=o?`<div><small>${et(a.bank||"")} \xB7 \uC608\uAE08\uC8FC ${et(a.holder||"")}</small><b>${et(a.number)}</b></div><button type="button" class="btn-ghost" id="acc-copy">\uBCF5\uC0AC</button>`:"<div><small>\uC870\uC758\uAE08 \uACC4\uC88C</small><b>\uC0C1\uC8FC\uAC00 \uC544\uC9C1 \uACC4\uC88C\uB97C \uB4F1\uB85D\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694</b></div>",o&&(k("#acc-copy").onclick=async()=>{await Oc(`${a.bank} ${a.number} ${a.holder}`),Lc="\uACC4\uC88C \uC774\uCCB4",Ut("\uACC4\uC88C\uBC88\uD638\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")});function c(){let h=[],u=i.demo||/^[0\s-]+$/.test(String(a.number||""));if(o&&i.toss){let d=`supertoss://send?amount=${r||""}&bank=${encodeURIComponent(a.bank||"")}&accountNo=${encodeURIComponent(String(a.number).replace(/\D/g,""))}&origin=qr`;h.push(`<a class="pay toss" data-method="\uD1A0\uC2A4" href="${u?"#":d}">\uD1A0\uC2A4\uB85C \uBCF4\uB0B4\uAE30</a>`)}i.kakaopayLink&&h.push(`<a class="pay kakao" data-method="\uCE74\uCE74\uC624\uD398\uC774" href="${et(i.kakaopayLink)}" target="_blank" rel="noopener">\uCE74\uCE74\uC624\uD398\uC774 \uC1A1\uAE08</a>`),k("#pay-row").innerHTML=h.join(""),k("#pay-row").onclick=d=>{let p=d.target.closest("[data-method]");p&&(Lc=p.dataset.method,p.getAttribute("href")==="#"?(d.preventDefault(),Ut("\uC608\uC2DC \uACC4\uC88C\uB77C \uC2E4\uC81C\uB85C \uC1A1\uAE08\uB418\uC9C0\uB294 \uC54A\uC544\uC694.")):Lc==="\uD1A0\uC2A4"&&!/Android|iPhone|iPad/i.test(navigator.userAgent)&&Ut("\uD1A0\uC2A4 \uBC84\uD2BC\uC740 \uD734\uB300\uD3F0\uC5D0\uC11C \uD1A0\uC2A4 \uC571\uC73C\uB85C \uC5F4\uB824\uC694. PC\uC5D0\uC11C\uB294 \uACC4\uC88C\uB97C \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694.",3600))}}s();let l=k("#dlg-condolence");e.onsubmit=h=>{h.submitter?.value==="ok"&&(h.preventDefault(),e.reportValidity()&&(t.classList.add("flip"),requestAnimationFrame(()=>t.classList.add("send")),yt.soft(),setTimeout(()=>l.close("ok"),H1?50:1050)))},on(l),l.onclose=async()=>{if(l.returnValue!=="ok")return;let h=e.name.value.trim();if(!h)return;let u=Zi.papers.find(p=>p.id===jt.paper),d={name:h.slice(0,20),affil:e.affil.value.trim().slice(0,30),amount:r,method:Lc,phrase:jt.phrase,note:e.note.value.trim().slice(0,120)};e.note.value="",await Pn(async()=>{await fn(me.interactables.get("donation").spot);let p=J.avatar;p.hold="envelope",p.setProp("envelope",!0,{color:u.bg}),Bn("give"),await p.play("give",async m=>{if(m!=="release")return;let v=p.props.envelope;delete p.props.envelope,p.hold=null,v&&(await me.flyTo(v,new E(-6.2,Oe+1.02,-1.7),.6),Qi.remove(v)),yt.drop()})}),await qe.add("condolences",d),qe.bump("condolences"),A.counters.condolences=(A.counters.condolences||0)+1,Ot(`${h} \uB2D8\uC758 ${jt.phrase} \uBD09\uD22C\uB97C \uBD80\uC758\uD568\uC5D0 \uB123\uC5C8\uC2B5\uB2C8\uB2E4.
\uAE4A\uC740 \uC704\uB85C\uAC00 \uC720\uAC00\uC871\uAED8 \uC804\uD574\uC9C8 \uAC70\uC608\uC694.`),Ro("condolence"),er(),A.ticket||(A.ticket=!0,qe.setLocal("ticket",!0),setTimeout(uv,2200))}}function uv(){k("#ticket-name").textContent=`\u6545 ${A.memorial.deceased.name} \uB2D8 \uBE48\uC18C`,k("#ticket-guest").textContent=A.me.name||"";let i=k("#dlg-ticket");on(i),i.onclose=()=>{i.returnValue==="go"&&xd()}}function dv(){let i=0,e=1/0;return me.tables.forEach((t,n)=>{let r=Math.hypot(J.pos.x-t.seat.x,J.pos.z-t.seat.z);for(let s of A.others.values())Math.hypot(s.x-t.seat.x,s.z-t.seat.z)<.6&&(r+=50);r<e&&(e=r,i=n)}),i}function xd(){zm(dv())}function zm(i){Pn(async()=>{let e=me.tables[i],t=e.seat;for(let r of A.others.values())Math.hypot(r.x-t.x,r.z-t.z)<.6&&(t=e.seat2);if(!await fn(t))return;J.wantFace=t.face,J.avatar.hold="sit",Bn("sit"),await os(400),k("#meal-ticket").innerHTML=A.ticket?'<span class="ticket-ok">\u{1F3AB} \uC2DD\uAD8C\uC774 \uC788\uC5B4\uC694 \xB7 \uBB34\uC5C7\uC774\uB4E0 \uB4DC\uC138\uC694</span>':'<span class="ticket-no">\u{1F3AB} \uBD80\uC758\uD568\uC5D0 \uB9C8\uC74C\uC744 \uC804\uD558\uC2DC\uBA74 \uC2DD\uAD8C\uC744 \uB4DC\uB824\uC694. \uCEE4\uD53C\uBBF9\uC2A4\uC640 \uC2DD\uD61C\uB294 \uB204\uAD6C\uB098 \uB4DC\uC2E4 \uC218 \uC788\uC5B4\uC694.</span>',k("#meal-choices").innerHTML=Vu.map(r=>{let s=r.ticket&&!A.ticket;return`<button type="button" class="card-choice meal${s?" locked":""}" data-meal="${r.id}"><span class="ic">${r.icon}</span><strong>${r.label}</strong>${s?"<small>\u{1F512} \uC2DD\uAD8C</small>":""}</button>`}).join("");let n=k("#dlg-meal");k("#meal-choices").onclick=async r=>{let s=r.target.closest("[data-meal]");if(!s)return;let a=Vu.find(c=>c.id===s.dataset.meal);if(a.ticket&&!A.ticket){Ut("\uC2DD\uAD8C\uC740 \uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08\uC744 \uB123\uC73C\uBA74 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694.",3200),k("#meal-go-donation").hidden=!1;return}n.close(),pv(e,a),Bn("eat"),await J.avatar.play("eat",c=>{c==="bite"&&yt.tone(520+Math.random()*120,.08,{gain:.05})}),J.avatar.hold="sit",A.meals++;let o=a.id==="yukgaejang"&&A.servedYuk;a.id==="yukgaejang"&&(A.servedYuk=!0),Ot(o?"\u201C\uB354 \uB4DC\uC138\uC694~\u201D \uB3C4\uC6B0\uBBF8 \uC774\uBAA8\uB2D8\uC774 \uC721\uAC1C\uC7A5\uC744 \uD55C \uAD6D\uC790 \uB354 \uB5A0 \uC8FC\uC168\uC5B4\uC694.":a.line,4800),a.id==="soju"&&Ut("\u{1F376} \uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uC544\uC694.",3200),qe.bump("meals"),A.counters.meals=(A.counters.meals||0)+1,Ro("meal"),er()},k("#meal-go-donation").hidden=!0,k("#meal-go-donation").onclick=()=>{n.close(),Sn("donation")},on(n)})}function pv(i,e){for(;i.dishes.children.length>3;)i.dishes.remove(i.dishes.children[0]);let t=new Se,n=e.id==="coffee"||e.id==="sikhye"||e.id==="soju",r=n?new X(new we(e.id==="soju"?.035:.05,.04,e.id==="soju"?.05:.11,14),new Fe({color:e.id==="soju"?"#e9f2ee":"#fbfaf6",transparent:e.id==="soju",opacity:.8})):new X(new we(.13,.08,.1,18),new Fe({color:"#f5f2ea"}));t.add(r);let s={yukgaejang:"#b8402b",pyeonyuk:"#e5d7c8",hongeo:"#d9603f",jeon:"#d7a64a",tteok:"#f2f0e8",snack:"#d9b98a",soju:"#eef6f2",sikhye:"#efe2bf",coffee:"#9a6a43"}[e.id],a=new X(new Kt(n?.04:.115,18),new Fe({color:s}));if(a.rotation.x=-Math.PI/2,a.position.y=n?.05:.045,t.add(a),t.position.set(-.45+i.dishes.children.length%4*.3,.46,.18),i.dishes.add(t),e.id==="yukgaejang"||e.id==="coffee"){let o=[];for(let h=0;h<6;h++){let u=new Gi(new xi({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));u.raycast=()=>{},u.scale.setScalar(.08),t.add(u),o.push({sp:u,o:h/6})}let c=performance.now(),l=()=>{let h=(performance.now()-c)/1e3;o.forEach(u=>{let d=(h*.5+u.o)%1;u.sp.position.set(Math.sin(d*6+u.o*9)*.04,.08+d*.4,0),u.sp.material.opacity=Math.sin(d*Math.PI)*.35,u.sp.scale.setScalar(.06+d*.12)}),h<40&&t.parent&&requestAnimationFrame(l)};l()}}function fv(){let i=k("#form-greet"),e=A.me.religion==="traditional"||A.me.religion==="buddhist"?"bow":"nod";ft("#greet-ways [data-way]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.way===e)),k("#greet-ways").onclick=n=>{let r=n.target.closest("[data-way]");r&&(e=r.dataset.way,ft("#greet-ways [data-way]").forEach(s=>s.setAttribute("aria-pressed",s===r)))},i.words.value="",yd(k("#greet-words"),Bf,i.words);let t=k("#dlg-greet");on(t),t.onclose=async()=>{if(t.returnValue!=="ok")return;let n=i.words.value.trim()||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.";await Pn(async()=>{J.wantFace=me.GREET_SPOT.face,await os(300),Bn(e),await Promise.all([J.avatar.play(e),me.hostNpc.play(e==="shake"?"shake":e)]),zc(n),await os(1900);let r=["\uC640 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.","\uBA3C \uAE38 \uC640 \uC8FC\uC154\uC11C \uACE0\uB9D9\uC2B5\uB2C8\uB2E4.","\uACE0\uC778\uAED8\uC11C\uB3C4 \uBC18\uAC00\uC6CC\uD558\uC2E4 \uAC70\uC608\uC694.","\uB9C8\uC74C \uC368 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."];ls(me.hostNpc.root,z1(r),4200,!1,me.hostNpc.height),me.hostNpc.play("nod")}),qe.bump("greetings"),Ro("greet")}}var Gm="warm";k("#lantern-colors").onclick=i=>{let e=i.target.closest("[data-color]");e&&(Gm=e.dataset.color,ft("#lantern-colors [data-color]").forEach(t=>t.setAttribute("aria-pressed",t===e)))};function mv(){let i=k("#form-lantern");i.name.value=i.name.value||A.me.name||"";let e=k("#dlg-lantern");on(e),e.onclose=async()=>{if(e.returnValue!=="ok")return;let t={text:i.text.value.trim().slice(0,120),name:i.name.value.trim().slice(0,16),color:Gm};if(!t.text)return;i.text.value="";let n=await qe.add("lanterns",t);A.lanterns.push(n),me.addLantern(n,J.pos.clone().add(new E(0,1.6,0))),J.avatar.play("wave",null,{soft:!0}),Bn("wave"),yt.chime(.16),setTimeout(()=>yt.chime(.1),600),Ot(`\uB4F1\uBD88\uC774 \uCC9C\uCC9C\uD788 \uD558\uB298\uB85C \uC62C\uB77C\uAC11\uB2C8\uB2E4.
\uBE48\uC18C \uC704 \uD558\uB298\uC5D0\uC11C \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC904 \uAC70\uC608\uC694.`,5e3),er()}}function gv(i){Gc(`<p class="memory">${et(i.text)}</p><p class="memory-by">${i.name?`\u2014 ${et(i.name)}`:"\u2014 \uC774\uB984 \uC5C6\uC774 \uB744\uC6B4 \uB4F1\uBD88"}</p>`)}function vv(i){i&&Gc(`${i.relation?`<span class="rel">${et(i.relation)}</span>`:""}<p class="memory">${et(i.message||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.")}</p><p class="memory-by">\u2014 ${et(i.name)}${i.time?` \xB7 ${So(i.time)}`:""}</p>`)}var xm=["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4","\uADF9\uB77D\uC655\uC0DD\uC744 \uAE30\uC6D0\uD569\uB2C8\uB2E4","\uC8FC\uB2D8\uC758 \uD488\uC5D0\uC11C \uC601\uC6D0\uD55C \uC548\uC2DD\uC744","\uD558\uB098\uB2D8\uC758 \uC704\uB85C\uAC00 \uD568\uAED8\uD558\uC2DC\uAE38","\uAE4A\uC740 \uC560\uB3C4\uB97C \uD45C\uD569\uB2C8\uB2E4","\uADF8\uB9AC\uC6B4 \uB9C8\uC74C\uC744 \uB2F4\uC544"],yv=[{id:"white",label:"\uD770 \uAD6D\uD654"},{id:"mixed",label:"\uD770\xB7\uB178\uB780 \uAD6D\uD654"},{id:"yellow",label:"\uB178\uB780 \uAD6D\uD654"},{id:"pink",label:"\uC5F0\uBD84\uD64D"}];function _v(){let i=k("#form-wreath"),e="white",t=xm[A.memorial.religion==="buddhist"?1:A.memorial.religion==="christian"||A.memorial.religion==="catholic"?2:0];i.from.value=i.from.value||"",k("#wr-styles").innerHTML=yv.map(s=>`<button type="button" class="chip" data-st="${s.id}" aria-pressed="${s.id===e}">${s.label}</button>`).join(""),k("#wr-phrases").innerHTML=xm.map(s=>`<button type="button" class="chip" data-wp="${et(s)}" aria-pressed="${s===t}">${et(s)}</button>`).join("");let n=()=>{k("#wr-disc").src=_o(e).toDataURL("image/png"),k("#wr-left").textContent=t,k("#wr-right").textContent=i.from.value.trim()||"\uBCF4\uB0B4\uB294 \uBD84",ft("[data-st]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.st===e)),ft("[data-wp]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.wp===t))};k("#wr-styles").onclick=s=>{let a=s.target.closest("[data-st]");a&&(e=a.dataset.st,n())},k("#wr-phrases").onclick=s=>{let a=s.target.closest("[data-wp]");a&&(t=a.dataset.wp,n())},i.from.oninput=n,n();let r=k("#dlg-wreath");on(r),r.onclose=async()=>{if(r.returnValue!=="ok")return;let s=i.from.value.trim().slice(0,20);if(!s)return;let a=await qe.add("wreaths",{from:s,phrase:t,style:e});A.wreaths.push(a),me.setWreaths(Md()),yt.chime(.12),Ot(`\u201C${s}\u201D \uADFC\uC870\uD654\uD658\uC774 \uBE48\uC18C \uAC00\uB294 \uAE38\uC5D0 \uC138\uC6CC\uC84C\uC5B4\uC694.`,4200),Bn("nod")}}function Md(){return[..._d()&&A.wreaths.length<2?A.memorial.demoSeeds?.wreaths||[]:[],...A.wreaths]}function xv(i){i&&Gc(`<div class="wreath-view"><img src="${_o(i.style||"white").toDataURL("image/png")}" alt=""><div class="ribbons"><span>${et(i.phrase)}</span><span>${et(i.from)}</span></div></div><p class="memory-by">${et(i.from)} \uB2D8\uC774 \uBCF4\uB0B8 \uADFC\uC870\uD654\uD658${i.time?` \xB7 ${So(i.time)}`:""}</p>`)}var Mm=Math.floor(Math.random()*_c.length);function Mv(){me.helper.play("nod",null,{soft:!0});let i=()=>{k("#tip-text").textContent=_c[Mm%_c.length],Mm++};i(),ls(me.helper.root,"\uAD81\uAE08\uD55C \uAC70 \uC788\uC73C\uBA74 \uC5B8\uC81C\uB4E0 \uBB3C\uC5B4\uBCF4\uC138\uC694~",3200),k("#tip-next").onclick=i,k("#tip-guide").onclick=()=>{k("#dlg-tip").close(),A.role==="guest"&&(k("#guide").hidden=!1)},on(k("#dlg-tip"))}var bv=new Pc(k("#theater"),{onOpen:()=>{document.body.classList.add("theater-on")},onClose:()=>{document.body.classList.remove("theater-on")}});function hs(i=null){let e=Cm();i!=null&&e.length&&(i=i%e.filter(t=>t.type==="image").length),yt.ensure(),!A.entered&&yt.trackId==="none"&&qm(),bv.open(A.memorial.gallery||[],{title:`\u6545 ${A.memorial.deceased.name}`,sub:pd(),greeting:A.memorial.thanks,portrait:ua(),start:i!=null&&e.length?i:null})}function Sv(){k("#done-thanks").textContent=A.memorial.thanks||"",k("#done-sign").textContent=`\u2014 ${A.memorial.mourners||A.memorial.hostName||"\uC0C1\uC8FC"} \uB4DC\uB9BC`,me.hostNpc.play("halfBow"),on(k("#dlg-done"))}k("#done-lantern").onclick=()=>{k("#dlg-done").close(),Sn("lantern")};function Vm(){Pn(async()=>{Bn("halfBow"),Ot(A.memorial.thanks||"\uC640 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.",5e3),await J.avatar.play("halfBow")})}var Wm=[{id:"nod",icon:"\u{1F642}",label:"\uBAA9\uB840",line:"{me} \uB2D8\uC774 \uBAA9\uB840\uD588\uC5B4\uC694"},{id:"shake",icon:"\u{1F91D}",label:"\uC545\uC218",line:"{me} \uB2D8\uC774 \uC190\uC744 \uC7A1\uC544 \uC8FC\uC168\uC5B4\uC694"},{id:"pat",icon:"\u{1FAF6}",label:"\uD1A0\uB2E5\uD1A0\uB2E5",line:"{me} \uB2D8\uC774 \uD1A0\uB2E5\uD1A0\uB2E5 \uC704\uB85C\uD574 \uC8FC\uC168\uC5B4\uC694"},{id:"hug",icon:"\u{1FAC2}",label:"\uC548\uC544 \uC8FC\uAE30",line:"{me} \uB2D8\uC774 \uAF2D \uC548\uC544 \uC8FC\uC168\uC5B4\uC694"},{id:"bow",icon:"\u{1F647}",label:"\uB9DE\uC808",line:"{me} \uB2D8\uC774 \uB9DE\uC808\uC744 \uCCAD\uD588\uC5B4\uC694"}];function Ev(i){let e=A.others.get(i);if(!e)return;k("#other-name").textContent=`${e.name} \uB2D8${e.relation?` \xB7 ${e.relation}`:""}`,k("#other-acts").innerHTML=Wm.map(n=>`<button type="button" class="card-choice" data-oa="${n.id}"><span class="ic">${n.icon}</span><strong>${n.label}</strong></button>`).join(""),yd(k("#other-words"),["\uC624\uB79C\uB9CC\uC774\uC5D0\uC694","\uB9C8\uC74C\uC774 \uB9CE\uC774 \uC544\uD504\uC2DC\uC8E0","\uD798\uB0B4\uC138\uC694","\uC5F0\uB77D \uC790\uC8FC \uD574\uC694"],k("#other-say")),k("#other-say").value="";let t=k("#dlg-other");k("#other-acts").onclick=n=>{let r=n.target.closest("[data-oa]");r&&(t.close(),bm(i,r.dataset.oa,k("#other-say").value))},k("#other-send").onclick=()=>{t.close(),bm(i,null,k("#other-say").value)},on(t)}function bm(i,e,t){let n=A.others.get(i);n&&Pn(async()=>{let r=n.av.root.position,s=J.pos.x-r.x,a=J.pos.z-r.z,o=Math.hypot(s,a)||1,c={x:r.x+s/o*.95,z:r.z+a/o*.95,face:Math.atan2(-s,-a)};o>1.2&&!await fn(c)||(J.wantFace=Math.atan2(r.x-J.pos.x,r.z-J.pos.z),await os(300),e&&(A.ix={to:i,type:e,s:(A.ix?.s||0)+1},Bn(e),await J.avatar.play(e)),t?.trim()&&zc(t))})}function Xm(i,e){let t=Wm.find(n=>n.id===e.type);if(t&&(Ut(`${t.icon} ${t.line.replace("{me}",i.name)}`,3600),yt.soft(),!A.busy&&!J.avatar.busy)){J.wantFace=Math.atan2(i.av.root.position.x-J.pos.x,i.av.root.position.z-J.pos.z);let n={pat:"nod",nod:"nod",shake:"shake",hug:"hug",bow:"bow"}[e.type];setTimeout(()=>{J.avatar.play(n,null,{soft:!0}),Bn(n)},500)}}function Tv(){let i=A.memorial.funeral?.departureAt;if(!i)return"";let e=new Date(i).getTime();if(Number.isNaN(e))return"";let t=e-Date.now();if(t<=0)return"\uBC1C\uC778\uC744 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4";let n=Math.floor(t/36e5);return n>=24?`\uBC1C\uC778\uAE4C\uC9C0 ${Math.floor(n/24)}\uC77C ${n%24}\uC2DC\uAC04`:n>=1?`\uBC1C\uC778\uAE4C\uC9C0 ${n}\uC2DC\uAC04`:`\uBC1C\uC778\uAE4C\uC9C0 ${Math.ceil(t/6e4)}\uBD84`}function er(){if(!A.memorial)return;let i=A.counters,e=[];qe.remote&&A.others&&e.push(`<span class="stat live">\uC9C0\uAE08 \uD568\uAED8<b>${A.others.size+1}\uBA85</b></span>`);let t=Tv();t&&e.push(`<span class="stat">\u23F3 ${t}</span>`);let n=Hc();e.push(n>0?`<button type="button" class="stat incense${n<.2?" low":""}" data-stat="incense">\u{1F525} \uD5A5<b>${Math.ceil(n*wc)}\uBD84</b></button>`:'<button type="button" class="stat incense out" data-stat="incense">\u{1F525} \uD5A5\uC774 \uAEBC\uC84C\uC5B4\uC694<b>\uC0C8 \uD5A5 \uC62C\uB9AC\uAE30</b></button>'),e.push(`<span class="stat">\uC870\uBB38<b>${(i.visits||0).toLocaleString()}</b></span>`),e.push(`<span class="stat">\u{1F33C}<b>${(i.flowers||0).toLocaleString()}</b></span>`),k("#stats").innerHTML=e.join("")}k("#stats").onclick=i=>{i.target.closest('[data-stat="incense"]')&&A.entered&&Ao("incense")};function Vc(){me.setIncense(A.counters.incense||0,Hc()),er()}setInterval(Vc,15e3);var wv={day:"\uB0AE",dusk:"\uB178\uC744",night:"\uBC24"};function jm(){k("#btn-time").textContent=wv[A.time]}k("#btn-time").onclick=()=>{A.time={day:"dusk",dusk:"night",night:"day"}[A.time],me.setTime(A.time),jm()};k("#btn-help").onclick=()=>on(k("#dlg-help"));k("#chip-obit").onclick=()=>{Gc(`<div class="obit"><figure class="obit-photo"><img src="${ua()}" alt=""></figure><div class="obit-text"><p class="obit-kicker">\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4</p><h1>\u6545 ${et(A.memorial.deceased.name)}</h1><p class="obit-dates">${et(pd())}</p><dl class="obit-meta"><div><dt>\uC0C1\uC8FC</dt><dd>${et(A.memorial.mourners||"-")}</dd></div><div><dt>\uBC1C\uC778</dt><dd>${et(A.memorial.funeral?.departure||"-")}</dd></div><div><dt>\uC7A5\uC9C0</dt><dd>${et(A.memorial.funeral?.burial||"-")}</dd></div></dl></div></div>${A.memorial.greeting?`<p class="obit-greeting">${et(A.memorial.greeting)}</p>`:""}<p><button type="button" class="btn-primary" id="view-theater">\u{1F39E}\uFE0F \uCD94\uC5B5 \uC0C1\uC601\uAD00</button></p>`),k("#view-theater").onclick=()=>{k("#dlg-view").close(),hs()}};k("#btn-host").onclick=()=>bd();var Dc=null;k("#btn-look").onclick=()=>{let i=A.role==="host";(!Dc||Dc.who!==(i?"host":"guest"))&&(Dc?.dispose(),Dc=new ha(k("#look-body"),{look:i?A.memorial.hostLook:A.me.look,outfit:i?A.memorial.hostOutfit:A.me.outfit,who:i?"host":"guest",onChange:(e,t)=>{i?(A.memorial.hostLook=e,A.memorial.hostOutfit=t,ri()):(A.me.look=e,A.me.outfit=t,dd()),J.avatar.setOutfit(t),J.avatar.setLook(e)}})),on(k("#dlg-look"))};function qm(){let i=qe.getLocal("bgm",null)??A.memorial.bgm??"wind";yt.play(i,A.memorial.customBgm)}k("#btn-music").onclick=()=>{let i=yt.trackId;k("#music-list").innerHTML=Object.entries(yc).filter(([e])=>e!=="custom"||A.memorial.customBgm).map(([e,t])=>`
    <button type="button" class="card-choice" data-bgm="${e}" aria-pressed="${i===e}"><span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small></button>`).join(""),k("#vol-music").value=yt.musicVol,k("#vol-sfx").value=yt.sfxVol,on(k("#dlg-music"))};k("#music-list").onclick=i=>{let e=i.target.closest("[data-bgm]");e&&(yt.play(e.dataset.bgm,A.memorial.customBgm),qe.setLocal("bgm",e.dataset.bgm),ft("#music-list [data-bgm]").forEach(t=>t.setAttribute("aria-pressed",t===e)),k("#btn-music").textContent=`\u{1F3B5} ${yc[e.dataset.bgm].label}`)};k("#vol-music").oninput=i=>yt.setMusicVolume(+i.target.value);k("#vol-sfx").oninput=i=>yt.setSfxVolume(+i.target.value);async function $m(i,{w:e,h:t,max:n=1200,q:r=.84}){let s=URL.createObjectURL(i);try{let a=await new Promise((m,v)=>{let f=new Image;f.onload=()=>m(f),f.onerror=v,f.src=s}),o=0,c=0,l=a.naturalWidth,h=a.naturalHeight,u,d;if(e&&t){let m=e/t;if(l/h>m){let v=h*m;o=(l-v)/2,l=v}else{let v=l/m;c=(h-v)/2,h=v}u=e,d=t}else{let m=Math.min(1,n/Math.max(l,h));u=Math.round(l*m),d=Math.round(h*m)}let p=document.createElement("canvas");return p.width=u,p.height=d,p.getContext("2d").drawImage(a,o,c,l,h,0,0,u,d),p.toDataURL("image/jpeg",r)}finally{URL.revokeObjectURL(s)}}function ri(){A.memorial.demo=!1,qe.saveDraft(A.memorial)||Ut("\uC800\uC7A5 \uACF5\uAC04\uC774 \uBD80\uC871\uD574\uC694. \uC0AC\uC9C4 \uC218\uB97C \uC904\uC5EC \uC8FC\uC138\uC694.",4e3)}var Sm=null;function Av(){let i=k("#host-form");for(let e of i.elements){if(!e.name)continue;let t=O1(A.memorial,e.name);e.type==="checkbox"?e.checked=!!t:e.value=t??""}k("#host-portrait").src=ua(),Wc(),k("#host-themes").innerHTML=Object.entries(ns).map(([e,t])=>`<button type="button" class="card-choice" data-theme="${e}" aria-pressed="${A.memorial.theme===e}"><span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small></button>`).join(""),k("#host-bgms").innerHTML=Object.entries(yc).map(([e,t])=>`<button type="button" class="chip" data-hbgm="${e}" aria-pressed="${A.memorial.bgm===e}">${t.icon} ${t.label}</button>`).join(""),Sm||(Sm=new ha(k("#host-look"),{look:A.memorial.hostLook,outfit:A.memorial.hostOutfit,who:"host",onChange:(e,t)=>{A.memorial.hostLook=e,A.memorial.hostOutfit=t,ri(),Sr({theme:!1})}}))}function Wc(){let i=Mr(A.memorial.gallery||[]);A.memorial.gallery=i,k("#gallery-edit").innerHTML=i.map((e,t)=>`
    <figure>
      ${e.type==="image"?`<img src="${e.src}" alt="\uCD94\uC5B5 ${t+1}">`:`<div class="vid-thumb">\u25B6 ${e.type==="youtube"?"YouTube":"\uC601\uC0C1"}</div>`}
      <input data-gi="${t}" data-gk="year" value="${et(e.year)}" placeholder="\uC5F0\uB3C4" maxlength="10">
      <input data-gi="${t}" data-gk="caption" value="${et(e.caption)}" placeholder="\uD55C \uC904 \uC124\uBA85" maxlength="40">
      <div class="g-tools"><button type="button" data-move="${t}" aria-label="\uC55E\uC73C\uB85C">\u25C0</button><button type="button" data-del="${t}" aria-label="\uC9C0\uC6B0\uAE30">\xD7</button></div>
    </figure>`).join("")||'<p class="tip">\uC544\uC9C1 \uC0AC\uC9C4\uC774 \uC5C6\uC5B4\uC694.</p>'}async function bd(){A.role==="host"&&(Av(),Ym(),Km(),on(k("#dlg-host")))}k("#host-tabs").onclick=i=>{let e=i.target.closest("[data-tab]");e&&(ft("#host-tabs [data-tab]").forEach(t=>t.setAttribute("aria-selected",t===e)),ft("#host-form [data-panel]").forEach(t=>{t.hidden=t.dataset.panel!==e.dataset.tab}),e.dataset.tab==="ledger"&&Ym())};k("#host-form").addEventListener("input",i=>{let e=i.target;if(e.dataset.gi){A.memorial.gallery[+e.dataset.gi][e.dataset.gk]=e.value,ri();return}if(e.name){if(k1(A.memorial,e.name,e.type==="checkbox"?e.checked:e.value),ri(),Sr(),e.name==="religion"){Nm();let t=Ff[e.value];t&&t!==A.memorial.theme&&Ut(`${Yi[e.value].label}\uC774\uB77C\uBA74 \u201C${ns[t].label}\u201D \uD14C\uB9C8\uB3C4 \uC798 \uC5B4\uC6B8\uB824\uC694.`,3600)}e.name==="hostName"&&ad&&(ad.el.innerHTML=`<b>\uC0C1\uC8FC</b>${et(e.value||"\uC0C1\uC8FC")}`),e.name==="customBgm"&&yt.trackId==="custom"&&yt.play("custom",e.value)}});k("#host-themes").onclick=i=>{let e=i.target.closest("[data-theme]");e&&(A.memorial.theme=e.dataset.theme,ft("#host-themes [data-theme]").forEach(t=>t.setAttribute("aria-pressed",t===e)),ri(),Sr(),Ut(`${ns[e.dataset.theme].label} \uBE48\uC18C\uB85C \uBC14\uAFE8\uC5B4\uC694.`))};k("#host-bgms").onclick=i=>{let e=i.target.closest("[data-hbgm]");e&&(A.memorial.bgm=e.dataset.hbgm,ft("#host-bgms [data-hbgm]").forEach(t=>t.setAttribute("aria-pressed",t===e)),ri(),yt.play(e.dataset.hbgm,A.memorial.customBgm))};k("#file-portrait").onchange=async i=>{let e=i.target.files[0];e&&(A.memorial.portrait=await $m(e,{w:600,h:800,q:.86}),i.target.value="",ri(),Sr({theme:!1}),k("#host-portrait").src=ua(),Ut("\uC601\uC815 \uC0AC\uC9C4\uC744 \uBAA8\uC168\uC5B4\uC694."))};k("#file-gallery").onchange=async i=>{let e=Mr(A.memorial.gallery||[]),t=[...i.target.files].slice(0,24-e.length);for(let n of t)e.push({type:"image",src:await $m(n,{max:1100,q:.8}),caption:"",year:""});A.memorial.gallery=e,i.target.value="",ri(),Sr({theme:!1}),Wc(),Ut(`\uCD94\uC5B5 \uC0AC\uC9C4 ${t.length}\uC7A5\uC744 \uAC78\uC5C8\uC5B4\uC694.`)};k("#add-video").onclick=()=>{let i=k("#video-url").value.trim();if(!/^https?:\/\//.test(i)){Ut("\uC601\uC0C1 \uC8FC\uC18C(https://\u2026)\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uC720\uD29C\uBE0C \uB9C1\uD06C\uB098 mp4 \uC8FC\uC18C\uAC00 \uB3FC\uC694.");return}A.memorial.gallery=[...Mr(A.memorial.gallery||[]),{src:i,caption:"",year:""}],A.memorial.gallery=Mr(A.memorial.gallery),k("#video-url").value="",ri(),Wc(),Ut("\uC601\uC0C1\uC744 \uC0C1\uC601 \uBAA9\uB85D\uC5D0 \uB123\uC5C8\uC5B4\uC694.")};k("#gallery-edit").onclick=i=>{let e=i.target.closest("[data-del]"),t=i.target.closest("[data-move]"),n=A.memorial.gallery;if(e)n.splice(+e.dataset.del,1);else if(t){let r=+t.dataset.move;r>0&&([n[r-1],n[r]]=[n[r],n[r-1]])}else return;ri(),Sr({theme:!1}),Wc()};k("#host-preview-theater").onclick=()=>{k("#dlg-host").close(),hs()};async function Ym(){let i=await qe.list("condolences"),e=Co();k("#ledger-money").innerHTML=i.length?i.slice().reverse().map(n=>`<div><span>${et(n.name)}${n.affil?` <small>${et(n.affil)}</small>`:""}${n.note?`<em>\u2709 ${et(n.note)}</em>`:""}</span><b>${Uc(n.amount)}</b><span>${et(n.phrase||"")} \xB7 ${et(n.method||"")} \xB7 ${So(n.time)}</span></div>`).join(""):'<p class="tip">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>',k("#ledger-book").innerHTML=e.length?e.slice().reverse().map(n=>`<div><span>${et(n.name)}</span><span>${et(n.relation||"")}</span><span>${n.time?So(n.time):"\uC608\uC2DC"}</span></div>`).join(""):'<p class="tip">\uC544\uC9C1 \uBC29\uBA85\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>';let t=i.reduce((n,r)=>n+Number(r.amount||0),0);k("#ledger-tip").textContent=qe.remote?`\uC774 \uAE30\uAE30\uC5D0\uC11C \uAE30\uB85D\uB41C \uC870\uC758\uAE08 \uD569\uACC4 ${Uc(t)}. \uBAA8\uB4E0 \uC870\uBB38\uAC1D\uC758 \uAE30\uB85D\uC740 Firebase \uCF58\uC194\uC758 condolences \uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694(\uACF5\uAC1C \uC77D\uAE30 \uAE08\uC9C0 \uAD8C\uC7A5).`:`\uD569\uACC4 ${Uc(t)}. \uC9C0\uAE08\uC740 \uACF5\uC720 \uC800\uC7A5\uC18C\uAC00 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC544 \uC774 \uAE30\uAE30\uC5D0\uC11C \uB0A8\uAE34 \uAE30\uB85D\uB9CC \uBCF4\uC5EC\uC694. \uC2E4\uC81C \uC785\uAE08 \uB0B4\uC5ED\uC740 \uC740\uD589 \uC571\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.`}var Zm=(i,e)=>"\uFEFF"+[e.join(","),...i.map(t=>e.map(n=>`"${String(n==="time"?new Date(t.time).toLocaleString("ko-KR"):t[n]??"").replace(/"/g,'""')}"`).join(","))].join(`
`);k("#csv-condolence").onclick=async()=>ud("\uC870\uC758\uAE08\uAE30\uB85D.csv",Zm(await qe.list("condolences"),["name","affil","amount","phrase","method","note","time"]),"text/csv");k("#csv-guestbook").onclick=()=>ud("\uBC29\uBA85\uB85D.csv",Zm(A.guestbook,["name","relation","message","time"]),"text/csv");async function Jm(i){let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(i));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}var Bc=()=>`${location.origin}${location.pathname}`;function Km(){k("#link-guest").value=`${Bc()}?m=${Ki}`;let i=qe.getLocal("hostKey","");k("#link-host").value=i?`${Bc()}?m=${Ki}&key=${i}`:""}k("#new-host-key").onclick=async()=>{let i=[...crypto.getRandomValues(new Uint8Array(10))].map(e=>"abcdefghijkmnpqrstuvwxyz23456789"[e%32]).join("");A.memorial.hostKeyHash=await Jm(i),qe.setLocal("hostKey",i),ri(),Km(),Ut("\uC0C8 \uC0C1\uC8FC \uB9C1\uD06C\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uBE48\uC18C \uD30C\uC77C\uC744 \uB0B4\uB824\uBC1B\uC544 \uC62C\uB9AC\uBA74 \uC801\uC6A9\uB3FC\uC694.",4200)};ft("[data-copy]").forEach(i=>{i.onclick=async()=>{let e=k(`#${i.dataset.copy}`).value;e&&(await Oc(e),Ut("\uBCF5\uC0AC\uD588\uC5B4\uC694."))}});var hd=()=>`${Bc()}?m=${Ki}`;k("#export-json").onclick=()=>{let i={...A.memorial,demo:!1};delete i.demoSeeds,ud(`${Ki}.json`,JSON.stringify(i,null,2)),Ut(`${Ki}.json \uC744 \uB0B4\uB824\uBC1B\uC558\uC5B4\uC694. \uC800\uC7A5\uC18C\uC758 data/ \uD3F4\uB354\uC5D0 \uB123\uC5B4 \uC8FC\uC138\uC694.`,4200)};k("#copy-link").onclick=async()=>{await Oc(hd()),Ut("\uBE48\uC18C \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")};k("#share-link").onclick=async()=>{let i=`[\uBD80\uACE0] \u6545 ${A.memorial.deceased.name}\uB2D8\uAED8\uC11C \uBCC4\uC138\uD558\uC168\uAE30\uC5D0 \uC0BC\uAC00 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.
\uB9C1\uD06C\uB97C \uB204\uB974\uBA74 \uC628\uB77C\uC778 \uBE48\uC18C\uC5D0\uC11C \uBC14\uB85C \uC870\uBB38\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`;if(navigator.share)try{await navigator.share({title:document.title,text:i,url:hd()})}catch{}else await Oc(`${i}
${hd()}`),Ut("\uBD80\uACE0 \uBB38\uAD6C\uC640 \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")};k("#reset-draft").onclick=()=>{confirm("\uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB41C \uCD08\uC548\uC744 \uC9C0\uC6B0\uACE0 \uACF5\uAC1C\uB41C \uC0C1\uD0DC\uB85C \uB418\uB3CC\uB9B4\uAE4C\uC694?")&&(qe.clearDraft(),location.reload())};k("#host-thank").onclick=()=>{k("#dlg-host").close(),Vm()};A.others=new Map;var id=!1;async function Qm(){if(!(!qe.remote||!A.entered||id||document.hidden)){id=!0;try{let i=J.avatar,e=A.role==="host";await qe.presencePut(A.me.id,{n:e?A.memorial.hostName||"\uC0C1\uC8FC":A.me.name,rel:e?"\uC0C1\uC8FC":A.me.relation||"",r:A.role,o:i.outfitId,lk:i.look,x:+J.pos.x.toFixed(2),z:+J.pos.z.toFixed(2),f:+J.face.toFixed(2),a:A.act,s:A.actSeq,sit:i.hold==="sit"?1:0,say:A.say,ss:A.sayS,ix:A.ix});let t=await qe.presenceGet(),n=performance.now(),r=new Set;for(let[s,a]of Object.entries(t)){if(s===A.me.id||!a)continue;r.add(s);let o=A.others.get(s);if(o||(o={av:new wi({outfit:a.o,look:a.lk||bn}),t:a.t,changed:n,s:a.s,ss:a.ss,ixs:a.ix?.s,x:a.x,z:a.z,f:a.f,name:a.n||"\uC870\uBB38\uAC1D",relation:a.rel||""},o.av.interactTag=`other:${s}`,o.av.rebuild(),o.lkKey=JSON.stringify(a.lk||{}),o.av.root.position.set(a.x,me.heightAt(a.x,a.z),a.z),Qi.add(o.av.root),o.tag=wo(kc(o.name,a.r==="host"?"host":"other",a.r==="host"?"\uC0C1\uC8FC":"\uC870\uBB38",a.r==="host"?"":o.relation),()=>da.copy(o.av.root.position).add(new E(0,1.62*o.av.height,0))),A.others.set(s,o),A.entered&&Ut(`${o.name} \uB2D8\uC774 \uBE48\uC18C\uC5D0 \uC624\uC168\uC5B4\uC694.`,2400)),a.t!==o.t&&(o.t=a.t,o.changed=n),n-o.changed>15e3){n-o.changed>6e4&&qe.req("DELETE",`presence/${s}`).catch(()=>{}),Em(s);continue}let c=JSON.stringify(a.lk||{});if(o.av.outfitId!==a.o&&o.av.setOutfit(a.o),c!==o.lkKey&&(o.lkKey=c,o.av.setLook(a.lk||bn)),Object.assign(o,{x:a.x,z:a.z,f:a.f}),o.av.hold=a.sit?"sit":null,a.s!==o.s){o.s=a.s;let l=a.a||"";if(l.startsWith("expr:")){let h=l.slice(5);h==="cry"||h==="smile"?o.av.setExpression(h,5):ls(o.av.root,xc.find(u=>u.id===h)?.icon||"\u{1F90D}",2400,!0,o.av.height)}else l&&l!=="sit"&&o.av.play({flower:"offer",silentPrayer:"silence",give:"give"}[l]||l)}a.ss!==o.ss&&(o.ss=a.ss,a.say&&ls(o.av.root,a.say,5e3,!1,o.av.height)),a.ix&&a.ix.s!==o.ixs&&(o.ixs=a.ix.s,a.ix.to===A.me.id&&Xm(o,a.ix))}for(let s of[...A.others.keys()])r.has(s)||Em(s);er()}catch(i){console.warn("presence",i)}finally{id=!1}}}function Em(i){let e=A.others.get(i);e&&(Qi.remove(e.av.root),e.tag.remove(),A.others.delete(i))}function Rv(i){let e=!1;for(let t of A.others.values()){let n=t.av.root.position,r=t.x-n.x,s=t.z-n.z,a=Math.hypot(r,s),o=a>.05&&!t.av.busy;if(a>6)n.x=t.x,n.z=t.z;else if(o){let l=Math.min(a,3.6*i);n.x+=r/a*l,n.z+=s/a*l,t.av.root.rotation.y=Nc(t.av.root.rotation.y,Math.atan2(r,s),Math.min(1,i*10))}else t.av.root.rotation.y=Nc(t.av.root.rotation.y,t.f,Math.min(1,i*6));n.y=me.heightAt(n.x,n.z);let c=me.inHall(n.x,n.z)&&n.z<.6;c!==t.inHall&&(t.inHall=c,t.av.setBarefoot(c&&!!me.theme?.shoes),e=!0),t.av.update(i,o)}e&&me.setShoes(md())}qe.remote&&(setInterval(Qm,$i.presenceIntervalMs),setInterval(Cv,2e4),addEventListener("pagehide",()=>qe.presenceDelete(A.me.id)));async function Cv(){if(document.hidden)return;let[i,e,t,n,r]=await Promise.all([qe.list("guestbook"),qe.list("lanterns",90),qe.list("wreaths",40),qe.counters(),qe.getState("incenseAt")]);i.length!==A.guestbook.length&&(A.guestbook=i,me.setMemories(Co())),t.length!==A.wreaths.length&&(A.wreaths=t,me.setWreaths(Md()));let s=new Set(A.lanterns.map(a=>a.id));for(let a of e)s.has(a.id)||(A.lanterns.push(a),me.addLantern(a,new E(-4.6,2,9.5)));A.counters={...A.counters,...n},typeof r=="number"&&(A.incenseAt=Math.max(A.incenseAt||0,r)),me.setCounts(A.counters),Vc()}async function Pv(){A.memorial=await qe.loadMemorial(`${$i.dataDir}${Ki}.json`,Nf),(!qe.published?.deceased?.name||qe.published.deceased.name==="\uACE0\uC778")&&Ki!==$i.defaultMemorial&&Ut("\uC774 \uBE48\uC18C \uC8FC\uC18C\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB9C1\uD06C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",5e3),A.memorial.gallery=Mr(A.memorial.gallery||[]),Sr(),X1(),jm();let[i,e,t,n,r]=await Promise.all([qe.list("guestbook"),qe.list("lanterns",90),qe.list("wreaths",40),qe.counters(),qe.getState("incenseAt")]);if(A.guestbook=i,A.lanterns=e,A.wreaths=t,A.counters=n,A.incenseAt=typeof r=="number"?r:null,_d()){let a=A.memorial.demoSeeds?.counters||{};for(let[o,c]of Object.entries(a))A.counters[o]=(n[o]||0)+c;if(e.length<3)for(let o of A.memorial.demoSeeds?.lanterns||[])me.addLantern(o);A.incenseAt||(A.incenseAt=Date.now()-9*6e4)}for(let a of e)me.addLantern(a);me.setMemories(Co()),me.setWreaths(Md()),me.setCounts(A.counters),Vc();let s=rd.get("key");s?A.memorial.hostKeyHash&&await Jm(s)===A.memorial.hostKeyHash?(qe.setLocal("hostKey",s),history.replaceState(null,"",`${Bc()}?m=${Ki}`),fd("host")):Ut("\uC0C1\uC8FC \uB9C1\uD06C\uAC00 \uB9DE\uC9C0 \uC54A\uC544\uC694. \uAC00\uC871\uC5D0\uAC8C \uBC1B\uC740 \uB9C1\uD06C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",5e3):rd.has("host")&&Im()}var Tm=performance.now();function e0(i,e=performance.now()/1e3){Y1(i),me.hostNpc.update(i,!1),me.helper.update(i,!1),Rv(i),me.update(i,e),Z1(i),tv()}function t0(i){let e=Math.min(.05,(i-Tm)/1e3);Tm=i,window.__samga?.paused||e0(e,i/1e3),Li.render(Qi,Ii),V1(),requestAnimationFrame(t0)}await Pv();requestAnimationFrame(t0);window.__samga={state:A,world:me,player:J,cam:ke,camera:Ii,store:qe,sound:yt,interact:Sn,doAction:Ao,paused:!1,__step:i=>e0(i),openTheater:hs,receiveIx:Xm};
