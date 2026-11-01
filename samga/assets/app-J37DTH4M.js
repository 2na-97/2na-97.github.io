var Xp=0,pu=1,$p=2;var fu=1,bc=2,Ti=3,ca=0,An=1,St=2,er=0,Ro=1,Co=2,mu=3,gu=4,qp=5,ha=100,Yp=101,Zp=102,Jp=103,Kp=104,Qp=200,ef=201,tf=202,nf=203,rf=204,sf=205,af=206,of=207,lf=208,cf=209,hf=210,uf=211,df=212,pf=213,ff=214,Mc=0,Ec=1,Sc=2,Po=3,Tc=4,wc=5,Ac=6,Rc=7,mf=0,gf=1,vf=2,tr=0,yf=1,xf=2,_f=3,bf=4,Mf=5,Ef=6,ua=7;var vu=300,da=301,Qr=302,Cc=303,Pc=304,Io=306,Xr=1e3,Mr=1001,Bl=1002,_i=1003,Sf=1004;var Lo=1005;var Zn=1006,Ic=1007;var es=1008;var wi=1009,yu=1010,xu=1011,pa=1012,Lc=1013,ts=1014,oi=1015,ns=1016,Dc=1017,Nc=1018,fa=1020,_u=35902,bu=35899,Tf=1021,wf=1022,li=1023,Do=1026,No=1027,Uc=1028,kc=1029,Mu=1030,Eu=1031;var Su=1033,Bc=33776,Fc=33777,Oc=33778,Hc=33779,Tu=35840,wu=35841,Au=35842,Ru=35843,Cu=36196,Pu=37492,Iu=37496,Lu=37808,Du=37809,Nu=37810,Uu=37811,ku=37812,Bu=37813,Fu=37814,Ou=37815,Hu=37816,Gu=37817,zu=37818,Vu=37819,Wu=37820,ju=37821,Xu=36492,$u=36494,qu=36495,Yu=36283,Zu=36284,Ju=36285,Ku=36286;var Qa=2300,Fl=2301,Ul=2302,tu=2400,nu=2401,iu=2402;var Af=3201;var Rf=0,Cf=1,is="",Rt="srgb",$r="srgb-linear",eo="linear",Ct="srgb";var jr=7680;var Pf=512,If=513,Lf=514,Qu=515,Df=516,Nf=517,Uf=518,kf=519,Ol=35044;var ed="300 es",Yi=2e3,to=2001;function td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=Ys("canvas");return i.style.display="block",i}var up={},Zs=null;function no(...i){let e="THREE."+i.shift();Zs?Zs("log",e,...i):console.log(e,...i)}function Je(...i){let e="THREE."+i.shift();Zs?Zs("warn",e,...i):console.warn(e,...i)}function ht(...i){let e="THREE."+i.shift();Zs?Zs("error",e,...i):console.error(e,...i)}function Js(...i){let e=i.join(" ");e in up||(up[e]=!0,Je(...i))}function Ff(i,e,t){return new Promise(function(n,r){setTimeout(function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}},t)})}var Zi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dp=1234567,$s=Math.PI/180,Ks=180/Math.PI;function xi(){let i=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(gn[255&i]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]+"-"+gn[255&e]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[63&t|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[255&n]+gn[n>>8&255]+gn[n>>16&255]+gn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function ru(i,e){return(i%e+e)%e}function Za(i,e,t){return(1-t)*i+t*e}function si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function At(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(4294967295*i);case Uint16Array:return Math.round(65535*i);case Uint8Array:return Math.round(255*i);case Int32Array:return Math.round(2147483647*i);case Int16Array:return Math.round(32767*i);case Int8Array:return Math.round(127*i);default:throw new Error("Invalid component type.")}}var rs={DEG2RAD:$s,RAD2DEG:Ks,generateUUID:xi,clamp:ft,euclideanModulo:ru,mapLinear:function(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)},inverseLerp:function(i,e,t){return i!==e?(t-i)/(e-i):0},lerp:Za,damp:function(i,e,t,n){return Za(i,e,1-Math.exp(-t*n))},pingpong:function(i,e=1){return e-Math.abs(ru(i,2*e)-e)},smoothstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*(3-2*i)},smootherstep:function(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e))*i*i*(i*(6*i-15)+10)},randInt:function(i,e){return i+Math.floor(Math.random()*(e-i+1))},randFloat:function(i,e){return i+Math.random()*(e-i)},randFloatSpread:function(i){return i*(.5-Math.random())},seededRandom:function(i){i!==void 0&&(dp=i);let e=dp+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(i){return i*$s},radToDeg:function(i){return i*Ks},isPowerOfTwo:function(i){return!(i&i-1)&&i!==0},ceilPowerOfTwo:function(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))},floorPowerOfTwo:function(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))},setQuaternionFromProperEuler:function(i,e,t,n,r){let s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+n)/2),h=a((e+n)/2),u=s((e-n)/2),d=a((e-n)/2),p=s((n-e)/2),f=a((n-e)/2);switch(r){case"XYX":i.set(o*h,c*u,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*u,o*l);break;case"ZXZ":i.set(c*u,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*f,c*p,o*l);break;case"YXY":i.set(c*p,o*h,c*f,o*l);break;case"ZYZ":i.set(c*f,c*p,o*h,o*l);break;default:Je("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}},normalize:At,denormalize:si},pe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],u=n[r+3],d=s[a+0],p=s[a+1],f=s[a+2],v=s[a+3];if(o<=0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o>=1)return e[t+0]=d,e[t+1]=p,e[t+2]=f,void(e[t+3]=v);if(u!==v||c!==d||l!==p||h!==f){let m=c*d+l*p+h*f+u*v;m<0&&(d=-d,p=-p,f=-f,v=-v,m=-m);let x=1-o;if(m<.9995){let g=Math.acos(m),y=Math.sin(g);x=Math.sin(x*g)/y,c=c*x+d*(o=Math.sin(o*g)/y),l=l*x+p*o,h=h*x+f*o,u=u*x+v*o}else{c=c*x+d*o,l=l*x+p*o,h=h*x+f*o,u=u*x+v*o;let g=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=g,l*=g,h*=g,u*=g}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,s,a){let o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],u=s[a],d=s[a+1],p=s[a+2],f=s[a+3];return e[t]=o*f+h*u+c*p-l*d,e[t+1]=c*f+h*d+l*u-o*p,e[t+2]=l*f+h*p+o*d-c*u,e[t+3]=h*f-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),u=o(s/2),d=c(n/2),p=c(r/2),f=c(s/2);switch(a){case"XYZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u+d*p*f;break;case"YZX":this._x=d*h*u+l*p*f,this._y=l*p*u+d*h*f,this._z=l*h*f-d*p*u,this._w=l*h*u-d*p*f;break;case"XZY":this._x=d*h*u-l*p*f,this._y=l*p*u-d*h*f,this._z=l*h*f+d*p*u,this._w=l*h*u+d*p*f;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>u){let p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>u){let p=2*Math.sqrt(1+o-n-u);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),u=2*(s*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-s*u,this.z=r+c*u+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wh=new S,pp=new Dn,lt=class i{constructor(e,t,n,r,s,a,o,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],v=r[0],m=r[3],x=r[6],g=r[1],y=r[4],E=r[7],A=r[2],M=r[5],D=r[8];return s[0]=a*v+o*g+c*A,s[3]=a*m+o*y+c*M,s[6]=a*x+o*E+c*D,s[1]=l*v+h*g+u*A,s[4]=l*m+h*y+u*M,s[7]=l*x+h*E+u*D,s[2]=d*v+p*g+f*A,s[5]=d*m+p*y+f*M,s[8]=d*x+p*E+f*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*s,p=l*s-a*c,f=t*u+n*d+r*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/f;return e[0]=u*v,e[1]=(r*l-h*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(h*t-r*c)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ah.makeScale(e,t)),this}rotate(e){return this.premultiply(Ah.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ah=new lt,fp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mg(){let i={enabled:!0,workingColorSpace:$r,spaces:{},convert:function(r,s,a){return this.enabled!==!1&&s!==a&&s&&a&&(this.spaces[s].transfer===Ct&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ct&&(r.r=qs(r.r),r.g=qs(r.g),r.b=qs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?eo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Js("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Js("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$r]:{primaries:e,whitePoint:n,transfer:eo,toXYZ:fp,fromXYZ:mp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rt},outputColorSpaceConfig:{drawingBufferColorSpace:Rt}},[Rt]:{primaries:e,whitePoint:n,transfer:Ct,toXYZ:fp,fromXYZ:mp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rt}}}),i}var _t=mg();function qi(i){return i<.04045?.0773993808*i:Math.pow(.9478672986*i+.0521327014,2.4)}function qs(i){return i<.0031308?12.92*i:1.055*Math.pow(i,.41666)-.055}var Ps,Hl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ps===void 0&&(Ps=Ys("canvas")),Ps.width=e.width,Ps.height=e.height;let r=Ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=255*qi(s[a]/255);return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*qi(t[n]/255)):t[n]=qi(t[n]);return{data:t,width:e.width,height:e.height}}return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gg=0,Qs=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Rh(r[a].image)):s.push(Rh(r[a]))}else s=Rh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Rh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Hl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}var vg=0,Ch=new S,yn=class i extends Zi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=1001,r=1001,s=1006,a=1008,o=1023,c=1009,l=i.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=xi(),this.name="",this.source=new Qs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new pe(0,0),this.repeat=new pe(1,1),this.center=new pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ch).x}get height(){return this.source.getSize(Ch).y}get depth(){return this.source.getSize(Ch).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n:Je(`Texture.setValues(): property '${t}' does not exist.`)}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Bl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Bl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null,yn.DEFAULT_MAPPING=vu,yn.DEFAULT_ANISOTROPY=1;var Et=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],f=c[9],v=c[2],m=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(f-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(f+m)<.1&&Math.abs(l+p+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,E=(p+1)/2,A=(x+1)/2,M=(h+d)/4,D=(u+v)/4,F=(f+m)/4;return y>E&&y>A?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=M/n,s=D/n):E>A?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=M/r,s=F/r):A<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),n=D/s,r=F/s),this.set(n,r,s,t),this}let g=Math.sqrt((m-f)*(m-f)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(g)<.001&&(g=1),this.x=(m-f)/g,this.y=(u-v)/g,this.z=(d-h)/g,this.w=Math.acos((l+p+x-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Gl=class extends Zi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:n.depth},s=new yn(r);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new Qs(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bi=class extends Gl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},io=class extends yn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var zl=class extends yn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sl.copy(n.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),al.subVectors(this.max,Oa),Is.subVectors(e.a,Oa),Ls.subVectors(e.b,Oa),Ds.subVectors(e.c,Oa),fr.subVectors(Ls,Is),mr.subVectors(Ds,Ls),Gr.subVectors(Is,Ds);let t=[0,-fr.z,fr.y,0,-mr.z,mr.y,0,-Gr.z,Gr.y,fr.z,0,-fr.x,mr.z,0,-mr.x,Gr.z,0,-Gr.x,-fr.y,fr.x,0,-mr.y,mr.x,0,-Gr.y,Gr.x,0];return!!Ph(t,Is,Ls,Ds,al)&&(t=[1,0,0,0,1,0,0,0,1],!!Ph(t,Is,Ls,Ds,al)&&(ol.crossVectors(fr,mr),t=[ol.x,ol.y,ol.z],Ph(t,Is,Ls,Ds,al)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(ni).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vi)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vi=[new S,new S,new S,new S,new S,new S,new S,new S],ni=new S,sl=new Jn,Is=new S,Ls=new S,Ds=new S,fr=new S,mr=new S,Gr=new S,Oa=new S,al=new S,ol=new S,zr=new S;function Ph(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){zr.fromArray(i,s);let o=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),c=e.dot(zr),l=t.dot(zr),h=n.dot(zr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var yg=new Jn,Ha=new S,Ih=new S,Kn=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):yg.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ha.subVectors(e,this.center);let t=Ha.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=.5*(n-this.radius);this.center.addScaledVector(Ha,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ih.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ha.copy(e.center).add(Ih)),this.expandByPoint(Ha.copy(e.center).sub(Ih))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Wi=new S,Lh=new S,ll=new S,gr=new S,Dh=new S,cl=new S,Nh=new S,Er=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lh.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),gr.copy(this.origin).sub(Lh);let s=.5*e.distanceTo(t),a=-this.direction.dot(ll),o=gr.dot(this.direction),c=-gr.dot(ll),l=gr.lengthSq(),h=Math.abs(1-a*a),u,d,p,f;if(h>0)if(u=a*c-o,d=a*o-c,f=s*h,u>=0)if(d>=-f)if(d<=f){let v=1/h;u*=v,d*=v,p=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-f?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=f?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Lh).addScaledVector(ll,d),p}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);let n=Wi.dot(this.direction),r=Wi.dot(Wi)-n*n,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return!(e.radius<0)&&this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r?null:((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>r?null:((o>n||n!=n)&&(n=o),(c<r||r!=r)&&(r=c),r<0?null:this.at(n>=0?n:r,t)))}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,r,s){Dh.subVectors(t,e),cl.subVectors(n,e),Nh.crossVectors(Dh,cl);let a,o=this.direction.dot(Nh);if(o>0){if(r)return null;a=1}else{if(!(o<0))return null;a=-1,o=-o}gr.subVectors(this.origin,e);let c=a*this.direction.dot(cl.crossVectors(gr,cl));if(c<0)return null;let l=a*this.direction.dot(Dh.cross(gr));if(l<0||c+l>o)return null;let h=-a*gr.dot(Nh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},nt=class i{constructor(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m)}set(e,t,n,r,s,a,o,c,l,h,u,d,p,f,v,m){let x=this.elements;return x[0]=e,x[4]=t,x[8]=n,x[12]=r,x[1]=s,x[5]=a,x[9]=o,x[13]=c,x[2]=l,x[6]=h,x[10]=u,x[14]=d,x[3]=p,x[7]=f,x[11]=v,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),a=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+f*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=f+p*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,p=c*u,f=l*h,v=l*u;t[0]=d+v*o,t[4]=f*o-p,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-f,t[6]=v+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,p=c*u,f=l*h,v=l*u;t[0]=d-v*o,t[4]=-a*u,t[8]=f+p*o,t[1]=p+f*o,t[5]=a*h,t[9]=v-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,p=a*u,f=o*h,v=o*u;t[0]=c*h,t[4]=f*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-f,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,p=a*l,f=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=f*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+f,t[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,p=a*l,f=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=a*h,t[9]=p*u-f,t[2]=f*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xg,e,_g)}lookAt(e,t,n){let r=this.elements;return Hn.subVectors(e,t),Hn.lengthSq()===0&&(Hn.z=1),Hn.normalize(),vr.crossVectors(n,Hn),vr.lengthSq()===0&&(Math.abs(n.z)===1?Hn.x+=1e-4:Hn.z+=1e-4,Hn.normalize(),vr.crossVectors(n,Hn)),vr.normalize(),hl.crossVectors(Hn,vr),r[0]=vr.x,r[4]=hl.x,r[8]=Hn.x,r[1]=vr.y,r[5]=hl.y,r[9]=Hn.y,r[2]=vr.z,r[6]=hl.z,r[10]=Hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],v=n[6],m=n[10],x=n[14],g=n[3],y=n[7],E=n[11],A=n[15],M=r[0],D=r[4],F=r[8],L=r[12],V=r[1],H=r[5],U=r[9],Z=r[13],N=r[2],X=r[6],ee=r[10],he=r[14],ae=r[3],Ee=r[7],de=r[11],Se=r[15];return s[0]=a*M+o*V+c*N+l*ae,s[4]=a*D+o*H+c*X+l*Ee,s[8]=a*F+o*U+c*ee+l*de,s[12]=a*L+o*Z+c*he+l*Se,s[1]=h*M+u*V+d*N+p*ae,s[5]=h*D+u*H+d*X+p*Ee,s[9]=h*F+u*U+d*ee+p*de,s[13]=h*L+u*Z+d*he+p*Se,s[2]=f*M+v*V+m*N+x*ae,s[6]=f*D+v*H+m*X+x*Ee,s[10]=f*F+v*U+m*ee+x*de,s[14]=f*L+v*Z+m*he+x*Se,s[3]=g*M+y*V+E*N+A*ae,s[7]=g*D+y*H+E*X+A*Ee,s[11]=g*F+y*U+E*ee+A*de,s[15]=g*L+y*Z+E*he+A*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+s*c*u-r*l*u-s*o*d+n*l*d+r*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*h-s*c*h)+e[11]*(+t*l*u-t*o*p-s*a*u+n*a*p+s*o*h-n*l*h)+e[15]*(-r*o*h-t*c*u+t*o*d+r*a*u-n*a*d+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],f=e[12],v=e[13],m=e[14],x=e[15],g=u*m*l-v*d*l+v*c*p-o*m*p-u*c*x+o*d*x,y=f*d*l-h*m*l-f*c*p+a*m*p+h*c*x-a*d*x,E=h*v*l-f*u*l+f*o*p-a*v*p-h*o*x+a*u*x,A=f*u*c-h*v*c-f*o*d+a*v*d+h*o*m-a*u*m,M=t*g+n*y+r*E+s*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/M;return e[0]=g*D,e[1]=(v*d*s-u*m*s-v*r*p+n*m*p+u*r*x-n*d*x)*D,e[2]=(o*m*s-v*c*s+v*r*l-n*m*l-o*r*x+n*c*x)*D,e[3]=(u*c*s-o*d*s-u*r*l+n*d*l+o*r*p-n*c*p)*D,e[4]=y*D,e[5]=(h*m*s-f*d*s+f*r*p-t*m*p-h*r*x+t*d*x)*D,e[6]=(f*c*s-a*m*s-f*r*l+t*m*l+a*r*x-t*c*x)*D,e[7]=(a*d*s-h*c*s+h*r*l-t*d*l-a*r*p+t*c*p)*D,e[8]=E*D,e[9]=(f*u*s-h*v*s-f*n*p+t*v*p+h*n*x-t*u*x)*D,e[10]=(a*v*s-f*o*s+f*n*l-t*v*l-a*n*x+t*o*x)*D,e[11]=(h*o*s-a*u*s-h*n*l+t*u*l+a*n*p-t*o*p)*D,e[12]=A*D,e[13]=(h*v*r-f*u*r+f*n*d-t*v*d-h*n*m+t*u*m)*D,e[14]=(f*o*r-a*v*r-f*n*c+t*v*c+a*n*m-t*o*m)*D,e[15]=(a*u*r-h*o*r+h*n*c-t*u*c-a*n*d+t*o*d)*D,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,u=o+o,d=s*l,p=s*h,f=s*u,v=a*h,m=a*u,x=o*u,g=c*l,y=c*h,E=c*u,A=n.x,M=n.y,D=n.z;return r[0]=(1-(v+x))*A,r[1]=(p+E)*A,r[2]=(f-y)*A,r[3]=0,r[4]=(p-E)*M,r[5]=(1-(d+x))*M,r[6]=(m+g)*M,r[7]=0,r[8]=(f+y)*D,r[9]=(m-g)*D,r[10]=(1-(d+v))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Ns.set(r[0],r[1],r[2]).length(),a=Ns.set(r[4],r[5],r[6]).length(),o=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);let c=1/s,l=1/a,h=1/o;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=l,ii.elements[5]*=l,ii.elements[6]*=l,ii.elements[8]*=h,ii.elements[9]*=h,ii.elements[10]*=h,t.setFromRotationMatrix(ii),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2*s/(t-e),u=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),f,v;if(c)f=s/(a-s),v=a*s/(a-s);else if(o===Yi)f=-(a+s)/(a-s),v=-2*a*s/(a-s);else{if(o!==to)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);f=-a/(a-s),v=-a*s/(a-s)}return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=2e3,c=!1){let l=this.elements,h=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r),f,v;if(c)f=1/(a-s),v=a/(a-s);else if(o===Yi)f=-2/(a-s),v=-(a+s)/(a-s);else{if(o!==to)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);f=-1/(a-s),v=-s/(a-s)}return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=f,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ns=new S,ii=new nt,xg=new S(0,0,0),_g=new S(1,1,1),vr=new S,hl=new S,Hn=new S,gp=new nt,vp=new Dn,ai=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],u=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vp.setFromEuler(this),this.setFromQuaternion(vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ai.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},bg=0,yp=new S,Us=new Dn,ji=new nt,ul=new S,Ga=new S,Mg=new S,Eg=new Dn,xp=new S(1,0,0),_p=new S(0,1,0),bp=new S(0,0,1),Mp={type:"added"},Sg={type:"removed"},ks={type:"childadded",child:null},Uh={type:"childremoved",child:null},en=class i extends Zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new ai,n=new Dn,r=new S(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new nt},normalMatrix:{value:new lt}}),this.matrix=new nt,this.matrixWorld=new nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(_p,e)}rotateZ(e){return this.rotateOnAxis(bp,e)}translateOnAxis(e,t){return yp.copy(e).applyQuaternion(this.quaternion),this.position.add(yp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(_p,e)}translateZ(e){return this.translateOnAxis(bp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ji.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ul.copy(e):ul.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ji.lookAt(Ga,ul,this.up):ji.lookAt(ul,Ga,this.up),this.quaternion.setFromRotationMatrix(ji),r&&(ji.extractRotation(r.matrixWorld),Us.setFromRotationMatrix(ji),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mp),ks.child=e,this.dispatchEvent(ks),ks.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sg),Uh.child=e,this.dispatchEvent(Uh),Uh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mp),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,Mg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,Eg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON())),this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(e.shapes,u)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=r,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};en.DEFAULT_UP=new S(0,1,0),en.DEFAULT_MATRIX_AUTO_UPDATE=!0,en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ri=new S,Xi=new S,kh=new S,$i=new S,Bs=new S,Fs=new S,Ep=new S,Bh=new S,Fh=new S,Oh=new S,Hh=new Et,Gh=new Et,zh=new Et,vi=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ri.subVectors(e,t),r.cross(ri);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ri.subVectors(r,t),Xi.subVectors(n,t),kh.subVectors(e,t);let a=ri.dot(ri),o=ri.dot(Xi),c=ri.dot(kh),l=Xi.dot(Xi),h=Xi.dot(kh),u=a*l-o*o;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-o*h)*d,f=(a*h-o*c)*d;return s.set(1-p-f,f,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,$i)!==null&&$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,$i)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,$i.x),c.addScaledVector(a,$i.y),c.addScaledVector(o,$i.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Hh.setScalar(0),Gh.setScalar(0),zh.setScalar(0),Hh.fromBufferAttribute(e,t),Gh.fromBufferAttribute(e,n),zh.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Hh,s.x),a.addScaledVector(Gh,s.y),a.addScaledVector(zh,s.z),a}static isFrontFacing(e,t,n,r){return ri.subVectors(n,t),Xi.subVectors(e,t),ri.cross(Xi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Xi.subVectors(this.a,this.b),.5*ri.cross(Xi).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,a,o;Bs.subVectors(r,n),Fs.subVectors(s,n),Bh.subVectors(e,n);let c=Bs.dot(Bh),l=Fs.dot(Bh);if(c<=0&&l<=0)return t.copy(n);Fh.subVectors(e,r);let h=Bs.dot(Fh),u=Fs.dot(Fh);if(h>=0&&u<=h)return t.copy(r);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Bs,a);Oh.subVectors(e,s);let p=Bs.dot(Oh),f=Fs.dot(Oh);if(f>=0&&p<=f)return t.copy(s);let v=p*l-c*f;if(v<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Fs,o);let m=h*f-p*u;if(m<=0&&u-h>=0&&p-f>=0)return Ep.subVectors(s,r),o=(u-h)/(u-h+(p-f)),t.copy(r).addScaledVector(Ep,o);let x=1/(m+v+d);return a=v*x,o=d*x,t.copy(n).addScaledVector(Bs,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},dl={h:0,s:0,l:0};function Vh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+6*(e-i)*t:t<.5?e:t<2/3?i+6*(e-i)*(2/3-t):i}var et=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=_t.workingColorSpace){if(e=ru(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vh(a,s,e+1/3),this.g=Vh(a,s,e),this.b=Vh(a,s,e-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(e,t=Rt){function n(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){let n=Of[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return _t.workingToColorSpace(vn.copy(this),e),65536*Math.round(ft(255*vn.r,0,255))+256*Math.round(ft(255*vn.g,0,255))+Math.round(ft(255*vn.b,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(vn.copy(this),t);let n=vn.r,r=vn.g,s=vn.b,a=Math.max(n,r,s),o=Math.min(n,r,s),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(r-s)/u+(r<s?6:0);break;case r:c=(s-n)/u+2;break;case s:c=(n-r)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Rt){_t.workingToColorSpace(vn.copy(this),e);let t=vn.r,n=vn.g,r=vn.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*r)})`}offsetHSL(e,t,n){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(dl);let n=Za(yr.h,dl.h,t),r=Za(yr.s,dl.s,t),s=Za(yr.l,dl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},vn=new et;et.NAMES=Of;var Tg=0,Mi=class extends Zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jr,this.stencilZFail=jr,this.stencilZPass=jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Je(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r!==void 0?r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n:Je(`Material: '${t}' is not a property of THREE.${this.type}.`)}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};function r(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==jr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==jr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==jr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){let s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},cn=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Qy=wg();function wg(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[256|c]=32768,r[c]=24,r[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,r[c]=-l-1,r[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,r[c]=13,r[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,r[c]=24,r[256|c]=24):(n[c]=31744,n[256|c]=64512,r[c]=13,r[256|c]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,s[c]=l|h}for(let c=1024;c<2048;++c)s[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}var Qt=new S,pl=new pe,Ag=0,Sn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ag++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix3(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ol&&(e.usage=this.usage),e}};var ro=class extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var so=class extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ve=class extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Rg=0,qn=new nt,Wh=new en,Os=new S,Gn=new Jn,za=new Jn,ln=new S,Pt=class i extends Zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rg++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?so:ro)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new lt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Wh.lookAt(e),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Os).negate(),this.translate(Os.x,Os.y,Os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ve(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),void this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)return ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),void this.boundingSphere.set(new S,1/0);if(e){let n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];za.setFromBufferAttribute(o),this.morphTargetsRelative?(ln.addVectors(Gn.min,za.min),Gn.expandByPoint(ln),ln.addVectors(Gn.max,za.max),Gn.expandByPoint(ln)):(Gn.expandByPoint(za.min),Gn.expandByPoint(za.max))}Gn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(ln));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)ln.fromBufferAttribute(o,l),c&&(Os.fromBufferAttribute(e,l),ln.add(Os)),r=Math.max(r,n.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return void ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new S,c[F]=new S;let l=new S,h=new S,u=new S,d=new pe,p=new pe,f=new pe,v=new S,m=new S;function x(F,L,V){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,V),d.fromBufferAttribute(s,F),p.fromBufferAttribute(s,L),f.fromBufferAttribute(s,V),h.sub(l),u.sub(l),p.sub(d),f.sub(d);let H=1/(p.x*f.y-f.x*p.y);isFinite(H)&&(v.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(H),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(H),o[F].add(v),o[L].add(v),o[V].add(v),c[F].add(m),c[L].add(m),c[V].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let F=0,L=g.length;F<L;++F){let V=g[F],H=V.start;for(let U=H,Z=H+V.count;U<Z;U+=3)x(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let y=new S,E=new S,A=new S,M=new S;function D(F){A.fromBufferAttribute(r,F),M.copy(A);let L=o[F];y.copy(L),y.sub(A.multiplyScalar(A.dot(L))).normalize(),E.crossVectors(M,L);let V=E.dot(c[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,V)}for(let F=0,L=g.length;F<L;++F){let V=g[F],H=V.start;for(let U=H,Z=H+V.count;U<Z;U+=3)D(e.getX(U+0)),D(e.getX(U+1)),D(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Sn(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new S,s=new S,a=new S,o=new S,c=new S,l=new S,h=new S,u=new S;if(e)for(let d=0,p=e.count;d<p;d+=3){let f=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(n,f),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),p=0,f=0;for(let v=0,m=c.length;v<m;v++){p=o.isInterleavedBufferAttribute?c[v]*o.data.stride+o.offset:c[v]*h;for(let x=0;x<h;x++)d[f++]=l[p++]}return new Sn(d,h,u)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let o in r){let c=e(r[o],n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let h=0,u=l.length;h<u;h++){let d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sp=new nt,Vr=new Er,fl=new Kn,Tp=new S,ml=new S,gl=new S,vl=new S,jh=new S,yl=new S,wp=new S,xl=new S,z=class extends en{constructor(e=new Pt,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){yl.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=o[c],u=s[c];h!==0&&(jh.fromBufferAttribute(u,e),a?yl.addScaledVector(jh,h):yl.addScaledVector(jh.sub(t),h))}t.add(yl)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;if(r!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),fl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(fl,Tp)===null||Vr.origin.distanceToSquared(Tp)>(e.far-e.near)**2))return;Sp.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Sp),n.boundingBox!==null&&Vr.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,Vr)}}_computeIntersections(e,t,n){let r,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],x=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)r=_l(this,x,e,n,l,h,u,o.getX(g),o.getX(g+1),o.getX(g+2)),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);f<v;f+=3)r=_l(this,a,e,n,l,h,u,o.getX(f),o.getX(f+1),o.getX(f+2)),r&&(r.faceIndex=Math.floor(f/3),t.push(r));else if(c!==void 0)if(Array.isArray(a))for(let f=0,v=d.length;f<v;f++){let m=d[f],x=a[m.materialIndex];for(let g=Math.max(m.start,p.start),y=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));g<y;g+=3)r=_l(this,x,e,n,l,h,u,g,g+1,g+2),r&&(r.faceIndex=Math.floor(g/3),r.face.materialIndex=m.materialIndex,t.push(r))}else for(let f=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);f<v;f+=3)r=_l(this,a,e,n,l,h,u,f,f+1,f+2),r&&(r.faceIndex=Math.floor(f/3),t.push(r))}};function _l(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,ml),i.getVertexPosition(c,gl),i.getVertexPosition(l,vl);let h=(function(u,d,p,f,v,m,x,g){let y;if(y=d.side===1?f.intersectTriangle(x,m,v,!0,g):f.intersectTriangle(v,m,x,d.side===0,g),y===null)return null;xl.copy(g),xl.applyMatrix4(u.matrixWorld);let E=p.ray.origin.distanceTo(xl);return E<p.near||E>p.far?null:{distance:E,point:xl.clone(),object:u}})(i,e,t,n,ml,gl,vl,wp);if(h){let u=new S;vi.getBarycoord(wp,ml,gl,vl,u),r&&(h.uv=vi.getInterpolatedAttribute(r,o,c,l,u,new pe)),s&&(h.uv1=vi.getInterpolatedAttribute(s,o,c,l,u,new pe)),a&&(h.normal=vi.getInterpolatedAttribute(a,o,c,l,u,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new S,materialIndex:0};vi.getNormal(ml,gl,vl,d.normal),h.face=d,h.barycoord=u}return h}var _e=class i extends Pt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,p=0;function f(v,m,x,g,y,E,A,M,D,F,L){let V=E/D,H=A/F,U=E/2,Z=A/2,N=M/2,X=D+1,ee=F+1,he=0,ae=0,Ee=new S;for(let de=0;de<ee;de++){let Se=de*H-Z;for(let fe=0;fe<X;fe++){let re=fe*V-U;Ee[v]=re*g,Ee[m]=Se*y,Ee[x]=N,l.push(Ee.x,Ee.y,Ee.z),Ee[v]=0,Ee[m]=0,Ee[x]=M>0?1:-1,h.push(Ee.x,Ee.y,Ee.z),u.push(fe/D),u.push(1-de/F),he+=1}}for(let de=0;de<F;de++)for(let Se=0;Se<D;Se++){let fe=d+Se+X*de,re=d+Se+X*(de+1),ge=d+(Se+1)+X*(de+1),ye=d+(Se+1)+X*de;c.push(fe,re,ye),c.push(re,ge,ye),ae+=6}o.addGroup(p,ae,L),p+=ae,d+=he}f("z","y","x",-1,-1,n,t,e,a,s,0),f("z","y","x",1,-1,n,t,-e,a,s,1),f("x","z","y",1,1,e,n,t,r,a,2),f("x","z","y",1,-1,e,n,-t,r,a,3),f("x","y","z",1,-1,e,t,n,r,s,4),f("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Ve(l,3)),this.setAttribute("normal",new Ve(h,3)),this.setAttribute("uv",new Ve(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function xn(i){let e={};for(let t=0;t<i.length;t++){let n=ss(i[t]);for(let r in n)e[r]=n[r]}return e}function nd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var Hf={clone:ss,merge:xn},Nn=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=(function(t){let n=[];for(let r=0;r<t.length;r++)n.push(t[r].clone());return n})(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ta=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nt,this.projectionMatrix=new nt,this.projectionMatrixInverse=new nt,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},xr=new S,Ap=new pe,Rp=new pe,nn=class extends ta{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=2*Ks*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(.5*$s*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ks*Math.atan(Math.tan(.5*$s*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,Ap,Rp),t.subVectors(Rp,Ap)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(.5*$s*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Hs=-90,Vl=class extends en{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new nn(Hs,1,e,t);r.layers=this.layers,this.add(r);let s=new nn(Hs,1,e,t);s.layers=this.layers,this.add(s);let a=new nn(Hs,1,e,t);a.layers=this.layers,this.add(a);let o=new nn(Hs,1,e,t);o.layers=this.layers,this.add(o);let c=new nn(Hs,1,e,t);c.layers=this.layers,this.add(c);let l=new nn(Hs,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(let l of t)this.remove(l);if(e===Yi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==to)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ao=class extends yn{constructor(e=[],t=301,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Wl=class extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ao(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _e(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});s.uniforms.tEquirect.value=t;let a=new z(r,s),o=t.minFilter;return t.minFilter===es&&(t.minFilter=Zn),new Vl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}},we=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cg={type:"move"},na=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),x=this._getHandJoint(l,v);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;l.inputState.pinching&&d>p+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var oo=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new et(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qr=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},jl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ol,this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new S,lo=class i{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=At(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),n=At(n,this.array),r=At(r,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){no("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Sn(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){no("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ei=class extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Gs,Va=new S,zs=new S,Vs=new S,Ws=new pe,Wa=new pe,Gf=new nt,bl=new S,ja=new S,Ml=new S,Cp=new pe,Xh=new pe,Pp=new pe,Ji=class extends en{constructor(e=new Ei){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new jl(t,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new lo(n,3,0,!1)),Gs.setAttribute("uv",new lo(n,2,3,!1))}this.geometry=Gs,this.material=e,this.center=new pe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&ht('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),Gf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Vs.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let a=this.center;El(bl.set(-.5,-.5,0),Vs,a,zs,r,s),El(ja.set(.5,-.5,0),Vs,a,zs,r,s),El(Ml.set(.5,.5,0),Vs,a,zs,r,s),Cp.set(0,0),Xh.set(1,0),Pp.set(1,1);let o=e.ray.intersectTriangle(bl,ja,Ml,!1,Va);if(o===null&&(El(ja.set(-.5,.5,0),Vs,a,zs,r,s),Xh.set(0,1),o=e.ray.intersectTriangle(bl,Ml,ja,!1,Va),o===null))return;let c=e.ray.origin.distanceTo(Va);c<e.near||c>e.far||t.push({distance:c,point:Va.clone(),uv:vi.getInterpolation(Va,bl,ja,Ml,Cp,Xh,Pp,new pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function El(i,e,t,n,r,s){Ws.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(Wa.x=s*Ws.x-r*Ws.y,Wa.y=r*Ws.x+s*Ws.y):Wa.copy(Ws),i.copy(e),i.x+=Wa.x,i.y+=Wa.y,i.applyMatrix4(Gf)}var ex=new S,tx=new S;var nx=new S,ix=new Et,rx=new Et,sx=new S,ax=new nt,ox=new S,lx=new Kn,cx=new nt,hx=new Er;var co=class extends yn{constructor(e=null,t=1,n=1,r,s,a,o,c,l=1003,h=1003,u,d){super(null,a,o,c,l,h,r,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ux=new nt,dx=new nt;var ho=class extends Sn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},js=new nt,Ip=new nt,Sl=[],Lp=new Jn,Pg=new nt,Xa=new z,$a=new Kn,Ki=class extends z{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ho(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Pg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Lp.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Lp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),$a.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union($a)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=e*(n.length+1)+1;for(let a=0;a<n.length;a++)n[a]=r[s+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$a.copy(this.boundingSphere),$a.applyMatrix4(n),e.ray.intersectsSphere($a)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,js),Ip.multiplyMatrices(n,js),Xa.matrixWorld=Ip,Xa.raycast(e,Sl);for(let a=0,o=Sl.length;a<o;a++){let c=Sl[a];c.instanceId=s,c.object=this,t.push(c)}Sl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ho(new Float32Array(3*this.instanceMatrix.count).fill(1),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(r*this.count),r,this.count,Uc,oi));let s=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$h=new S,Ig=new S,Lg=new lt,Yn=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=$h.subVectors(n,t).cross(Ig.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($h),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Lg.getNormalMatrix(e),r=this.coplanarPoint($h).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Wr=new Kn,Dg=new pe(.5,.5),Tl=new S,Sr=class{constructor(e=new Yn,t=new Yn,n=new Yn,r=new Yn,s=new Yn,a=new Yn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3,n=!1){let r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],u=s[5],d=s[6],p=s[7],f=s[8],v=s[9],m=s[10],x=s[11],g=s[12],y=s[13],E=s[14],A=s[15];if(r[0].setComponents(l-a,p-h,x-f,A-g).normalize(),r[1].setComponents(l+a,p+h,x+f,A+g).normalize(),r[2].setComponents(l+o,p+u,x+v,A+y).normalize(),r[3].setComponents(l-o,p-u,x-v,A-y).normalize(),n)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,p-d,x-m,A-E).normalize();else if(r[4].setComponents(l-c,p-d,x-m,A-E).normalize(),t===Yi)r[5].setComponents(l+c,p+d,x+m,A+E).normalize();else{if(t!==to)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);r[5].setComponents(c,d,m,E).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wr)}intersectsSprite(e){Wr.center.set(0,0,0);let t=Dg.distanceTo(e.center);return Wr.radius=.7071067811865476+t,Wr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wr)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Tl.x=r.normal.x>0?e.max.x:e.min.x,Tl.y=r.normal.y>0?e.max.y:e.min.y,Tl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Tl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mi=new nt,gi=new Sr,Xl=class i{constructor(){this.coordinateSystem=Yi}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){let r=t.cameras[n];if(mi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),gi.setFromProjectionMatrix(mi,r.coordinateSystem,r.reversedDepth),gi.containsPoint(e))return!0}return!1}clone(){return new i}};var su=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,n,r){let s=this.pool,a=this.list;this.index>=s.length&&s.push({start:-1,count:-1,z:-1,index:-1});let o=s[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=n,o.index=r}reset(){this.list.length=0,this.index=0}},px=new nt,fx=new et(1,1,1),mx=new Sr,gx=new Xl,vx=new Jn,yx=new Kn,xx=new S,_x=new S,bx=new S,Mx=new su,Ex=new z;var Sx=new S,Tx=new S,wx=new nt,Ax=new Er,Rx=new Kn,Cx=new S,Px=new S;var Ix=new S,Lx=new S;var ia=class extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dp=new nt,au=new Er,wl=new Kn,Al=new S,uo=class extends en{constructor(e=new Pt,t=new ia){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),wl.copy(n.boundingSphere),wl.applyMatrix4(r),wl.radius+=s,e.ray.intersectsSphere(wl)===!1)return;Dp.copy(r).invert(),au.copy(e.ray).applyMatrix4(Dp);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);u<d;u++){let p=l.getX(u);Al.fromBufferAttribute(h,p),Np(Al,p,c,r,e,t,this)}else for(let u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);u<d;u++)Al.fromBufferAttribute(h,u),Np(Al,u,c,r,e,t,this)}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=n.length;r<s;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Np(i,e,t,n,r,s,a){let o=au.distanceSqToPoint(i);if(o<t){let c=new S;au.closestPointToPoint(i,c),c.applyMatrix4(n);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Tn=class extends yn{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},po=class extends yn{constructor(e,t,n=1014,r,s,a,o=1003,c=1003,l,h=1026,u=1){if(h!==Do&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:e,height:t,depth:u},r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},fo=class extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qn=class i extends Pt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));let a=[],o=[],c=[],l=[],h=t/2,u=Math.PI/2*e,d=t,p=2*u+d,f=2*n+s,v=r+1,m=new S,x=new S;for(let g=0;g<=f;g++){let y=0,E=0,A=0,M=0;if(g<=n){let L=g/n,V=L*Math.PI/2;E=-h-e*Math.cos(V),A=e*Math.sin(V),M=-e*Math.cos(V),y=L*u}else if(g<=n+s){let L=(g-n)/s;E=L*t-h,A=e,M=0,y=u+L*d}else{let L=(g-n-s)/n,V=L*Math.PI/2;E=h+e*Math.sin(V),A=e*Math.cos(V),M=e*Math.sin(V),y=u+d+L*u}let D=Math.max(0,Math.min(1,y/p)),F=0;g===0?F=.5/r:g===f&&(F=-.5/r);for(let L=0;L<=r;L++){let V=L/r,H=V*Math.PI*2,U=Math.sin(H),Z=Math.cos(H);x.x=-A*Z,x.y=E,x.z=A*U,o.push(x.x,x.y,x.z),m.set(-A*Z,M,A*U),m.normalize(),c.push(m.x,m.y,m.z),l.push(V+F,D)}if(g>0){let L=(g-1)*v;for(let V=0;V<r;V++){let H=L+V,U=L+V+1,Z=g*v+V,N=g*v+V+1;a.push(H,U,Z),a.push(U,N,Z)}}}this.setIndex(a),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Yt=class i extends Pt{constructor(e=1,t=32,n=0,r=2*Math.PI){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],c=[],l=new S,h=new pe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let p=n+u/t*r;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ve(a,3)),this.setAttribute("normal",new Ve(o,3)),this.setAttribute("uv",new Ve(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},be=class i extends Pt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=2*Math.PI){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],u=[],d=[],p=[],f=0,v=[],m=n/2,x=0;function g(y){let E=f,A=new pe,M=new S,D=0,F=y===!0?e:t,L=y===!0?1:-1;for(let H=1;H<=r;H++)u.push(0,m*L,0),d.push(0,L,0),p.push(.5,.5),f++;let V=f;for(let H=0;H<=r;H++){let U=H/r*c+o,Z=Math.cos(U),N=Math.sin(U);M.x=F*N,M.y=m*L,M.z=F*Z,u.push(M.x,M.y,M.z),d.push(0,L,0),A.x=.5*Z+.5,A.y=.5*N*L+.5,p.push(A.x,A.y),f++}for(let H=0;H<r;H++){let U=E+H,Z=V+H;y===!0?h.push(Z,Z+1,U):h.push(Z+1,Z,U),D+=3}l.addGroup(x,D,y===!0?1:2),x+=D}(function(){let y=new S,E=new S,A=0,M=(t-e)/n;for(let D=0;D<=s;D++){let F=[],L=D/s,V=L*(t-e)+e;for(let H=0;H<=r;H++){let U=H/r,Z=U*c+o,N=Math.sin(Z),X=Math.cos(Z);E.x=V*N,E.y=-L*n+m,E.z=V*X,u.push(E.x,E.y,E.z),y.set(N,M,X).normalize(),d.push(y.x,y.y,y.z),p.push(U,1-L),F.push(f++)}v.push(F)}for(let D=0;D<r;D++)for(let F=0;F<s;F++){let L=v[F][D],V=v[F+1][D],H=v[F+1][D+1],U=v[F][D+1];(e>0||F!==0)&&(h.push(L,V,U),A+=3),(t>0||F!==s-1)&&(h.push(V,H,U),A+=3)}l.addGroup(x,A,0),x+=A})(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(h),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},hn=class i extends be{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=2*Math.PI){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Tr=class i extends Pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],a=[];function o(p,f,v,m){let x=m+1,g=[];for(let y=0;y<=x;y++){g[y]=[];let E=p.clone().lerp(v,y/x),A=f.clone().lerp(v,y/x),M=x-y;for(let D=0;D<=M;D++)g[y][D]=D===0&&y===x?E:E.clone().lerp(A,D/M)}for(let y=0;y<x;y++)for(let E=0;E<2*(x-y)-1;E++){let A=Math.floor(E/2);E%2==0?(c(g[y][A+1]),c(g[y+1][A]),c(g[y][A])):(c(g[y][A+1]),c(g[y+1][A+1]),c(g[y+1][A]))}}function c(p){s.push(p.x,p.y,p.z)}function l(p,f){let v=3*p;f.x=e[v+0],f.y=e[v+1],f.z=e[v+2]}function h(p,f,v,m){m<0&&p.x===1&&(a[f]=p.x-1),v.x===0&&v.z===0&&(a[f]=m/2/Math.PI+.5)}function u(p){return Math.atan2(p.z,-p.x)}function d(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}(function(p){let f=new S,v=new S,m=new S;for(let x=0;x<t.length;x+=3)l(t[x+0],f),l(t[x+1],v),l(t[x+2],m),o(f,v,m,p)})(r),(function(p){let f=new S;for(let v=0;v<s.length;v+=3)f.x=s[v+0],f.y=s[v+1],f.z=s[v+2],f.normalize().multiplyScalar(p),s[v+0]=f.x,s[v+1]=f.y,s[v+2]=f.z})(n),(function(){let p=new S;for(let f=0;f<s.length;f+=3){p.x=s[f+0],p.y=s[f+1],p.z=s[f+2];let v=u(p)/2/Math.PI+.5,m=d(p)/Math.PI+.5;a.push(v,1-m)}(function(){let f=new S,v=new S,m=new S,x=new S,g=new pe,y=new pe,E=new pe;for(let A=0,M=0;A<s.length;A+=9,M+=6){f.set(s[A+0],s[A+1],s[A+2]),v.set(s[A+3],s[A+4],s[A+5]),m.set(s[A+6],s[A+7],s[A+8]),g.set(a[M+0],a[M+1]),y.set(a[M+2],a[M+3]),E.set(a[M+4],a[M+5]),x.copy(f).add(v).add(m).divideScalar(3);let D=u(x);h(g,M+0,f,D),h(y,M+2,v,D),h(E,M+4,m,D)}})(),(function(){for(let f=0;f<a.length;f+=6){let v=a[f+0],m=a[f+2],x=a[f+4],g=Math.max(v,m,x),y=Math.min(v,m,x);g>.9&&y<.1&&(v<.2&&(a[f+0]+=1),m<.2&&(a[f+2]+=1),x<.2&&(a[f+4]+=1))}})()})(),this.setAttribute("position",new Ve(s,3)),this.setAttribute("normal",new Ve(s.slice(),3)),this.setAttribute("uv",new Ve(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},$l=class i extends Tr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n;super([-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Rl=new S,Cl=new S,qh=new S,Pl=new vi,ql=class extends Pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let r=Math.pow(10,4),s=Math.cos($s*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],h=["a","b","c"],u=new Array(3),d={},p=[];for(let f=0;f<c;f+=3){a?(l[0]=a.getX(f),l[1]=a.getX(f+1),l[2]=a.getX(f+2)):(l[0]=f,l[1]=f+1,l[2]=f+2);let{a:v,b:m,c:x}=Pl;if(v.fromBufferAttribute(o,l[0]),m.fromBufferAttribute(o,l[1]),x.fromBufferAttribute(o,l[2]),Pl.getNormal(qh),u[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,u[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,u[2]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,u[0]!==u[1]&&u[1]!==u[2]&&u[2]!==u[0])for(let g=0;g<3;g++){let y=(g+1)%3,E=u[g],A=u[y],M=Pl[h[g]],D=Pl[h[y]],F=`${E}_${A}`,L=`${A}_${E}`;L in d&&d[L]?(qh.dot(d[L].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(D.x,D.y,D.z)),d[L]=null):F in d||(d[F]={index0:l[g],index1:l[y],normal:qh.clone()})}}for(let f in d)if(d[f]){let{index0:v,index1:m}=d[f];Rl.fromBufferAttribute(o,v),Cl.fromBufferAttribute(o,m),p.push(Rl.x,Rl.y,Rl.z),p.push(Cl.x,Cl.y,Cl.z)}this.setAttribute("position",new Ve(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Je("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,s=n.length,a;a=t||e*n[s-1];let o,c=0,l=s-1;for(;c<=l;)if(r=Math.floor(c+(l-c)/2),o=n[r]-a,o<0)c=r+1;else{if(!(o>0)){l=r;break}l=r-1}if(r=l,n[r]===a)return r/(s-1);let h=n[r];return(r+(a-h)/(n[r+1]-h))/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),c=t||(a.isVector2?new pe:new S);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new S,r=[],s=[],a=[],o=new S,c=new nt;for(let p=0;p<=e;p++){let f=p/e;r[p]=this.getTangentAt(f,new S)}s[0]=new S,a[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(ft(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(o,f))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ft(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let f=1;f<=e;f++)s[f].applyMatrix4(c.makeRotationAxis(r[f],p*f)),a[f].crossVectors(r[f],s[f])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ra=class extends Vn{constructor(e=0,t=0,n=1,r=1,s=0,a=2*Math.PI,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new pe){let n=t,r=2*Math.PI,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(s=a?0:r),this.aClockwise!==!0||a||(s===r?s=-r:s-=r);let o=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Yl=class extends ra{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function id(){let i=0,e=0,t=0,n=0;function r(s,a,o,c){i=s,e=o,t=-3*s+3*a-2*o-c,n=2*s-2*a+o+c}return{initCatmullRom:function(s,a,o,c,l){r(a,o,l*(o-s),l*(c-a))},initNonuniformCatmullRom:function(s,a,o,c,l,h,u){let d=(a-s)/l-(o-s)/(l+h)+(o-a)/h,p=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,p*=h,r(a,o,d,p)},calc:function(s){let a=s*s;return i+e*s+t*a+n*(a*s)}}}var Il=new S,Yh=new id,Zh=new id,Jh=new id,Zl=class extends Vn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new S){let n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o,c,l=Math.floor(a),h=a-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:h===0&&l===s-1&&(l=s-2,h=1),this.closed||l>0?o=r[(l-1)%s]:(Il.subVectors(r[0],r[1]).add(r[0]),o=Il);let u=r[l%s],d=r[(l+1)%s];if(this.closed||l+2<s?c=r[(l+2)%s]:(Il.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=Il),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,f=Math.pow(o.distanceToSquared(u),p),v=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(c),p);v<1e-4&&(v=1),f<1e-4&&(f=v),m<1e-4&&(m=v),Yh.initNonuniformCatmullRom(o.x,u.x,d.x,c.x,f,v,m),Zh.initNonuniformCatmullRom(o.y,u.y,d.y,c.y,f,v,m),Jh.initNonuniformCatmullRom(o.z,u.z,d.z,c.z,f,v,m)}else this.curveType==="catmullrom"&&(Yh.initCatmullRom(o.x,u.x,d.x,c.x,this.tension),Zh.initCatmullRom(o.y,u.y,d.y,c.y,this.tension),Jh.initCatmullRom(o.z,u.z,d.z,c.z,this.tension));return n.set(Yh.calc(h),Zh.calc(h),Jh.calc(h)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Up(i,e,t,n,r){let s=.5*(n-e),a=.5*(r-t),o=i*i;return(2*t-2*n+s+a)*(i*o)+(-3*t+3*n-2*s-a)*o+s*i+t}function Ja(i,e,t,n){return(function(r,s){let a=1-r;return a*a*s})(i,e)+(function(r,s){return 2*(1-r)*r*s})(i,t)+(function(r,s){return r*r*s})(i,n)}function Ka(i,e,t,n,r){return(function(s,a){let o=1-s;return o*o*o*a})(i,e)+(function(s,a){let o=1-s;return 3*o*o*s*a})(i,t)+(function(s,a){return 3*(1-s)*s*s*a})(i,n)+(function(s,a){return s*s*s*a})(i,r)}var mo=class extends Vn{constructor(e=new pe,t=new pe,n=new pe,r=new pe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ka(e,r.x,s.x,a.x,o.x),Ka(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Jl=class extends Vn{constructor(e=new S,t=new S,n=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Ka(e,r.x,s.x,a.x,o.x),Ka(e,r.y,s.y,a.y,o.y),Ka(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},go=class extends Vn{constructor(e=new pe,t=new pe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new pe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new pe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Kl=class extends Vn{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends Vn{constructor(e=new pe,t=new pe,n=new pe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new pe){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ja(e,r.x,s.x,a.x),Ja(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yo=class extends Vn{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Ja(e,r.x,s.x,a.x),Ja(e,r.y,s.y,a.y),Ja(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends Vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new pe){let n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,c=r[a===0?a:a-1],l=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Up(o,c.x,l.x,h.x,u.x),Up(o,c.y,l.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new pe().fromArray(r))}return this}},Ql=Object.freeze({__proto__:null,ArcCurve:Yl,CatmullRomCurve3:Zl,CubicBezierCurve:mo,CubicBezierCurve3:Jl,EllipseCurve:ra,LineCurve:go,LineCurve3:Kl,QuadraticBezierCurve:vo,QuadraticBezierCurve3:yo,SplineCurve:xo}),ec=class extends Vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ql[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let a=r[s]-n,o=this.curves[s],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?2*e:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Ql[r.type]().fromJSON(r))}return this}},_o=class extends ec{constructor(e){super(),this.type="Path",this.currentPoint=new pe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new go(this.currentPoint.clone(),new pe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new vo(this.currentPoint.clone(),new pe(e,t),new pe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){let o=new mo(this.currentPoint.clone(),new pe(e,t),new pe(n,r),new pe(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new xo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,a,o,c),this}absellipse(e,t,n,r,s,a,o,c){let l=new ra(e,t,n,r,s,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Si=class extends _o{constructor(e){super(e),this.uuid=xi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new _o().fromJSON(r))}return this}};function Ng(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=kp(i,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,c,l;if(n&&(s=(function(h,u,d,p){let f=[];for(let v=0,m=u.length;v<m;v++){let x=kp(h,u[v]*p,v<m-1?u[v+1]*p:h.length,p,!1);x===x.next&&(x.steiner=!0),f.push(zg(x))}f.sort(Og);for(let v=0;v<f.length;v++)d=Hg(f[v],d);return d})(i,e,s,t)),i.length>80*t){o=i[0],c=i[1];let h=o,u=c;for(let d=t;d<r;d+=t){let p=i[d],f=i[d+1];p<o&&(o=p),f<c&&(c=f),p>h&&(h=p),f>u&&(u=f)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return bo(s,a,t,o,c,l,0),a}function kp(i,e,t,n,r){let s;if(r===(function(a,o,c,l){let h=0;for(let u=o,d=c-l;u<c;u+=l)h+=(a[d]-a[u])*(a[u+1]+a[d+1]),d=u;return h})(i,e,t,n)>0)for(let a=e;a<t;a+=n)s=Bp(a/n|0,i[a],i[a+1],s);else for(let a=t-n;a>=e;a-=n)s=Bp(a/n|0,i[a],i[a+1],s);return s&&sa(s,s.next)&&(Eo(s),s=s.next),s}function Yr(i,e){if(!i)return i;e||(e=i);let t,n=i;do if(t=!1,n.steiner||!sa(n,n.next)&&Xt(n.prev,n,n.next)!==0)n=n.next;else{if(Eo(n),n=e=n.prev,n===n.next)break;t=!0}while(t||n!==e);return e}function bo(i,e,t,n,r,s,a){if(!i)return;!a&&s&&(function(c,l,h,u){let d=c;do d.z===0&&(d.z=ou(d.x,d.y,l,h,u)),d.prevZ=d.prev,d.nextZ=d.next,d=d.next;while(d!==c);d.prevZ.nextZ=null,d.prevZ=null,(function(p){let f,v=1;do{let m,x=p;p=null;let g=null;for(f=0;x;){f++;let y=x,E=0;for(let M=0;M<v&&(E++,y=y.nextZ,y);M++);let A=v;for(;E>0||A>0&&y;)E!==0&&(A===0||!y||x.z<=y.z)?(m=x,x=x.nextZ,E--):(m=y,y=y.nextZ,A--),g?g.nextZ=m:p=m,m.prevZ=g,g=m;x=y}g.nextZ=null,v*=2}while(f>1)})(d)})(i,n,r,s);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(s?kg(i,n,r,s):Ug(i))e.push(c.i,i.i,l.i),Eo(i),i=l.next,o=l.next;else if((i=l)===o){a?a===1?bo(i=Bg(Yr(i),e),e,t,n,r,s,2):a===2&&Fg(i,e,t,n,r,s):bo(Yr(i),e,t,n,r,s,1);break}}}function Ug(i){let e=i.prev,t=i,n=i.next;if(Xt(e,t,n)>=0)return!1;let r=e.x,s=t.x,a=n.x,o=e.y,c=t.y,l=n.y,h=Math.min(r,s,a),u=Math.min(o,c,l),d=Math.max(r,s,a),p=Math.max(o,c,l),f=n.next;for(;f!==e;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&Ya(r,o,s,c,a,l,f.x,f.y)&&Xt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function kg(i,e,t,n){let r=i.prev,s=i,a=i.next;if(Xt(r,s,a)>=0)return!1;let o=r.x,c=s.x,l=a.x,h=r.y,u=s.y,d=a.y,p=Math.min(o,c,l),f=Math.min(h,u,d),v=Math.max(o,c,l),m=Math.max(h,u,d),x=ou(p,f,e,t,n),g=ou(v,m,e,t,n),y=i.prevZ,E=i.nextZ;for(;y&&y.z>=x&&E&&E.z<=g;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Ya(o,h,c,u,l,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0||(y=y.prevZ,E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==r&&E!==a&&Ya(o,h,c,u,l,d,E.x,E.y)&&Xt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;y&&y.z>=x;){if(y.x>=p&&y.x<=v&&y.y>=f&&y.y<=m&&y!==r&&y!==a&&Ya(o,h,c,u,l,d,y.x,y.y)&&Xt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;E&&E.z<=g;){if(E.x>=p&&E.x<=v&&E.y>=f&&E.y<=m&&E!==r&&E!==a&&Ya(o,h,c,u,l,d,E.x,E.y)&&Xt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function Bg(i,e){let t=i;do{let n=t.prev,r=t.next.next;!sa(n,r)&&Vf(n,t,t.next,r)&&Mo(n,r)&&Mo(r,n)&&(e.push(n.i,t.i,r.i),Eo(t),Eo(t.next),t=i=r),t=t.next}while(t!==i);return Yr(t)}function Fg(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Vg(a,o)){let c=Wf(a,o);return a=Yr(a,a.next),c=Yr(c,c.next),bo(a,e,t,n,r,s,0),void bo(c,e,t,n,r,s,0)}o=o.next}a=a.next}while(a!==i)}function Og(i,e){let t=i.x-e.x;return t===0&&(t=i.y-e.y,t===0)&&(t=(i.next.y-i.y)/(i.next.x-i.x)-(e.next.y-e.y)/(e.next.x-e.x)),t}function Hg(i,e){let t=(function(r,s){let a=s,o=r.x,c=r.y,l,h=-1/0;if(sa(r,a))return a;do{if(sa(r,a.next))return a.next;if(c<=a.y&&c>=a.next.y&&a.next.y!==a.y){let v=a.x+(c-a.y)*(a.next.x-a.x)/(a.next.y-a.y);if(v<=o&&v>h&&(h=v,l=a.x<a.next.x?a:a.next,v===o))return l}a=a.next}while(a!==s);if(!l)return null;let u=l,d=l.x,p=l.y,f=1/0;a=l;do{if(o>=a.x&&a.x>=d&&o!==a.x&&zf(c<p?o:h,c,d,p,c<p?h:o,c,a.x,a.y)){let v=Math.abs(c-a.y)/(o-a.x);Mo(a,r)&&(v<f||v===f&&(a.x>l.x||a.x===l.x&&Gg(l,a)))&&(l=a,f=v)}a=a.next}while(a!==u);return l})(i,e);if(!t)return e;let n=Wf(t,i);return Yr(n,n.next),Yr(t,t.next)}function Gg(i,e){return Xt(i.prev,i,e.prev)<0&&Xt(e.next,i,i.next)<0}function ou(i,e,t,n,r){return(i=1431655765&((i=858993459&((i=252645135&((i=16711935&((i=(i-t)*r|0)|i<<8))|i<<4))|i<<2))|i<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=(e-n)*r|0)|e<<8))|e<<4))|e<<2))|e<<1))<<1}function zg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zf(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function Ya(i,e,t,n,r,s,a,o){return!(i===a&&e===o)&&zf(i,e,t,n,r,s,a,o)}function Vg(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!(function(t,n){let r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==n.i&&r.next.i!==n.i&&Vf(r,r.next,t,n))return!0;r=r.next}while(r!==t);return!1})(i,e)&&(Mo(i,e)&&Mo(e,i)&&(function(t,n){let r=t,s=!1,a=(t.x+n.x)/2,o=(t.y+n.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==t);return s})(i,e)&&(Xt(i.prev,i,e.prev)||Xt(i,e.prev,e))||sa(i,e)&&Xt(i.prev,i,i.next)>0&&Xt(e.prev,e,e.next)>0)}function Xt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function sa(i,e){return i.x===e.x&&i.y===e.y}function Vf(i,e,t,n){let r=Dl(Xt(i,e,t)),s=Dl(Xt(i,e,n)),a=Dl(Xt(t,n,i)),o=Dl(Xt(t,n,e));return r!==s&&a!==o||!(r!==0||!Ll(i,t,e))||!(s!==0||!Ll(i,n,e))||!(a!==0||!Ll(t,i,n))||!(o!==0||!Ll(t,e,n))}function Ll(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Dl(i){return i>0?1:i<0?-1:0}function Mo(i,e){return Xt(i.prev,i,i.next)<0?Xt(i,e,i.next)>=0&&Xt(i,i.prev,e)>=0:Xt(i,e,i.prev)<0||Xt(i,i.next,e)<0}function Wf(i,e){let t=lu(i.i,i.x,i.y),n=lu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Bp(i,e,t,n){let r=lu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Eo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function lu(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}var cu=class{static triangulate(e,t,n=2){return Ng(e,t,n)}},yi=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return .5*n}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Fp(e),Op(n,e);let a=e.length;t.forEach(Fp);for(let c=0;c<t.length;c++)r.push(a),a+=t[c].length,Op(n,t[c]);let o=cu.triangulate(n,r);for(let c=0;c<o.length;c+=3)s.push(o.slice(c,c+3));return s}};function Fp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Op(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var aa=class i extends Pt{constructor(e=new Si([new pe(.5,.5),new pe(-.5,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let o=0,c=e.length;o<c;o++)a(e[o]);function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled===void 0||t.bevelEnabled,p=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:p-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,x=t.extrudePath,g=t.UVGenerator!==void 0?t.UVGenerator:Wg,y,E,A,M,D,F=!1;x&&(y=x.getSpacedPoints(h),F=!0,d=!1,E=x.computeFrenetFrames(h,!1),A=new S,M=new S,D=new S),d||(m=0,p=0,f=0,v=0);let L=o.extractPoints(l),V=L.shape,H=L.holes;if(!yi.isClockWise(V)){V=V.reverse();for(let k=0,b=H.length;k<b;k++){let C=H[k];yi.isClockWise(C)&&(H[k]=C.reverse())}}function U(k){let b=10000000000000001e-36,C=k[0];for(let j=1;j<=k.length;j++){let O=j%k.length,te=k[O],$=te.x-C.x,K=te.y-C.y,ne=$*$+K*K,ce=Math.max(Math.abs(te.x),Math.abs(te.y),Math.abs(C.x),Math.abs(C.y));ne<=b*ce*ce?(k.splice(O,1),j--):C=te}}U(V),H.forEach(U);let Z=H.length,N=V;for(let k=0;k<Z;k++){let b=H[k];V=V.concat(b)}function X(k,b,C){return b||ht("ExtrudeGeometry: vec does not exist"),k.clone().addScaledVector(b,C)}let ee=V.length;function he(k,b,C){let j,O,te,$=k.x-b.x,K=k.y-b.y,ne=C.x-k.x,ce=C.y-k.y,ue=$*$+K*K,Ce=$*ce-K*ne;if(Math.abs(Ce)>Number.EPSILON){let Oe=Math.sqrt(ue),Xe=Math.sqrt(ne*ne+ce*ce),st=b.x-K/Oe,rt=b.y+$/Oe,vt=((C.x-ce/Xe-st)*ce-(C.y+ne/Xe-rt)*ne)/($*ce-K*ne);j=st+$*vt-k.x,O=rt+K*vt-k.y;let ke=j*j+O*O;if(ke<=2)return new pe(j,O);te=Math.sqrt(ke/2)}else{let Oe=!1;$>Number.EPSILON?ne>Number.EPSILON&&(Oe=!0):$<-Number.EPSILON?ne<-Number.EPSILON&&(Oe=!0):Math.sign(K)===Math.sign(ce)&&(Oe=!0),Oe?(j=-K,O=$,te=Math.sqrt(ue)):(j=$,O=K,te=Math.sqrt(ue/2))}return new pe(j/te,O/te)}let ae=[];for(let k=0,b=N.length,C=b-1,j=k+1;k<b;k++,C++,j++)C===b&&(C=0),j===b&&(j=0),ae[k]=he(N[k],N[C],N[j]);let Ee=[],de,Se,fe=ae.concat();for(let k=0,b=Z;k<b;k++){let C=H[k];de=[];for(let j=0,O=C.length,te=O-1,$=j+1;j<O;j++,te++,$++)te===O&&(te=0),$===O&&($=0),de[j]=he(C[j],C[te],C[$]);Ee.push(de),fe=fe.concat(de)}if(m===0)Se=yi.triangulateShape(N,H);else{let k=[],b=[];for(let C=0;C<m;C++){let j=C/m,O=p*Math.cos(j*Math.PI/2),te=f*Math.sin(j*Math.PI/2)+v;for(let $=0,K=N.length;$<K;$++){let ne=X(N[$],ae[$],te);Fe(ne.x,ne.y,-O),j===0&&k.push(ne)}for(let $=0,K=Z;$<K;$++){let ne=H[$];de=Ee[$];let ce=[];for(let ue=0,Ce=ne.length;ue<Ce;ue++){let Oe=X(ne[ue],de[ue],te);Fe(Oe.x,Oe.y,-O),j===0&&ce.push(Oe)}j===0&&b.push(ce)}}Se=yi.triangulateShape(k,b)}let re=Se.length,ge=f+v;for(let k=0;k<ee;k++){let b=d?X(V[k],fe[k],ge):V[k];F?(M.copy(E.normals[0]).multiplyScalar(b.x),A.copy(E.binormals[0]).multiplyScalar(b.y),D.copy(y[0]).add(M).add(A),Fe(D.x,D.y,D.z)):Fe(b.x,b.y,0)}for(let k=1;k<=h;k++)for(let b=0;b<ee;b++){let C=d?X(V[b],fe[b],ge):V[b];F?(M.copy(E.normals[k]).multiplyScalar(C.x),A.copy(E.binormals[k]).multiplyScalar(C.y),D.copy(y[k]).add(M).add(A),Fe(D.x,D.y,D.z)):Fe(C.x,C.y,u/h*k)}for(let k=m-1;k>=0;k--){let b=k/m,C=p*Math.cos(b*Math.PI/2),j=f*Math.sin(b*Math.PI/2)+v;for(let O=0,te=N.length;O<te;O++){let $=X(N[O],ae[O],j);Fe($.x,$.y,u+C)}for(let O=0,te=H.length;O<te;O++){let $=H[O];de=Ee[O];for(let K=0,ne=$.length;K<ne;K++){let ce=X($[K],de[K],j);F?Fe(ce.x,ce.y+y[h-1].y,y[h-1].x+C):Fe(ce.x,ce.y,u+C)}}}function ye(k,b){let C=k.length;for(;--C>=0;){let j=C,O=C-1;O<0&&(O=k.length-1);for(let te=0,$=h+2*m;te<$;te++){let K=ee*te,ne=ee*(te+1);w(b+j+K,b+O+K,b+O+ne,b+j+ne)}}}function Fe(k,b,C){c.push(k),c.push(b),c.push(C)}function $e(k,b,C){T(k),T(b),T(C);let j=r.length/3,O=g.generateTopUV(n,r,j-3,j-2,j-1);W(O[0]),W(O[1]),W(O[2])}function w(k,b,C,j){T(k),T(b),T(j),T(b),T(C),T(j);let O=r.length/3,te=g.generateSideWallUV(n,r,O-6,O-3,O-2,O-1);W(te[0]),W(te[1]),W(te[3]),W(te[1]),W(te[2]),W(te[3])}function T(k){r.push(c[3*k+0]),r.push(c[3*k+1]),r.push(c[3*k+2])}function W(k){s.push(k.x),s.push(k.y)}(function(){let k=r.length/3;if(d){let b=0,C=ee*b;for(let j=0;j<re;j++){let O=Se[j];$e(O[2]+C,O[1]+C,O[0]+C)}b=h+2*m,C=ee*b;for(let j=0;j<re;j++){let O=Se[j];$e(O[0]+C,O[1]+C,O[2]+C)}}else{for(let b=0;b<re;b++){let C=Se[b];$e(C[2],C[1],C[0])}for(let b=0;b<re;b++){let C=Se[b];$e(C[0]+ee*h,C[1]+ee*h,C[2]+ee*h)}}n.addGroup(k,r.length/3-k,0)})(),(function(){let k=r.length/3,b=0;ye(N,b),b+=N.length;for(let C=0,j=H.length;C<j;C++){let O=H[C];ye(O,b),b+=O.length}n.addGroup(k,r.length/3-k,1)})()}this.setAttribute("position",new Ve(r,3)),this.setAttribute("uv",new Ve(s,2)),this.computeVertexNormals()}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n,r){if(r.shapes=[],Array.isArray(t))for(let s=0,a=t.length;s<a;s++){let o=t[s];r.shapes.push(o.uuid)}else r.shapes.push(t.uuid);return r.options=Object.assign({},n),n.extrudePath!==void 0&&(r.options.extrudePath=n.extrudePath.toJSON()),r})(this.parameters.shapes,this.parameters.options,e)}static fromJSON(e,t){let n=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];n.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Ql[r.type]().fromJSON(r)),new i(n,e.options)}},Wg={generateTopUV:function(i,e,t,n,r){let s=e[3*t],a=e[3*t+1],o=e[3*n],c=e[3*n+1],l=e[3*r],h=e[3*r+1];return[new pe(s,a),new pe(o,c),new pe(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let a=e[3*t],o=e[3*t+1],c=e[3*t+2],l=e[3*n],h=e[3*n+1],u=e[3*n+2],d=e[3*r],p=e[3*r+1],f=e[3*r+2],v=e[3*s],m=e[3*s+1],x=e[3*s+2];return Math.abs(o-h)<Math.abs(a-l)?[new pe(a,1-c),new pe(l,1-u),new pe(d,1-f),new pe(v,1-x)]:[new pe(o,1-c),new pe(h,1-u),new pe(p,1-f),new pe(m,1-x)]}},wr=class i extends Tr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2;super([-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},tc=class i extends Pt{constructor(e=[new pe(0,-.5),new pe(.5,0),new pe(0,.5)],t=12,n=0,r=2*Math.PI){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ft(r,0,2*Math.PI);let s=[],a=[],o=[],c=[],l=[],h=1/t,u=new S,d=new pe,p=new S,f=new S,v=new S,m=0,x=0;for(let g=0;g<=e.length-1;g++)switch(g){case 0:m=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,p.x=1*x,p.y=-m,p.z=0*x,v.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case e.length-1:c.push(v.x,v.y,v.z);break;default:m=e[g+1].x-e[g].x,x=e[g+1].y-e[g].y,p.x=1*x,p.y=-m,p.z=0*x,f.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),c.push(p.x,p.y,p.z),v.copy(f)}for(let g=0;g<=t;g++){let y=n+g*h*r,E=Math.sin(y),A=Math.cos(y);for(let M=0;M<=e.length-1;M++){u.x=e[M].x*E,u.y=e[M].y,u.z=e[M].x*A,a.push(u.x,u.y,u.z),d.x=g/t,d.y=M/(e.length-1),o.push(d.x,d.y);let D=c[3*M+0]*E,F=c[3*M+1],L=c[3*M+0]*A;l.push(D,F,L)}}for(let g=0;g<t;g++)for(let y=0;y<e.length-1;y++){let E=y+g*e.length,A=E,M=E+e.length,D=E+e.length+1,F=E+1;s.push(A,M,F),s.push(D,F,M)}this.setIndex(s),this.setAttribute("position",new Ve(a,3)),this.setAttribute("uv",new Ve(o,2)),this.setAttribute("normal",new Ve(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},nc=class i extends Tr{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},yt=class i extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,u=e/o,d=t/c,p=[],f=[],v=[],m=[];for(let x=0;x<h;x++){let g=x*d-a;for(let y=0;y<l;y++){let E=y*u-s;f.push(E,-g,0),v.push(0,0,1),m.push(y/o),m.push(1-x/c)}}for(let x=0;x<c;x++)for(let g=0;g<o;g++){let y=g+l*x,E=g+l*(x+1),A=g+1+l*(x+1),M=g+1+l*x;p.push(y,E,M),p.push(E,A,M)}this.setIndex(p),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(v,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ic=class i extends Pt{constructor(e=.5,t=1,n=32,r=1,s=0,a=2*Math.PI){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n);let o=[],c=[],l=[],h=[],u=e,d=(t-e)/(r=Math.max(1,r)),p=new S,f=new pe;for(let v=0;v<=r;v++){for(let m=0;m<=n;m++){let x=s+m/n*a;p.x=u*Math.cos(x),p.y=u*Math.sin(x),c.push(p.x,p.y,p.z),l.push(0,0,1),f.x=(p.x/t+1)/2,f.y=(p.y/t+1)/2,h.push(f.x,f.y)}u+=d}for(let v=0;v<r;v++){let m=v*(n+1);for(let x=0;x<n;x++){let g=x+m,y=g,E=g+n+1,A=g+n+2,M=g+1;o.push(y,E,M),o.push(E,A,M)}}this.setIndex(o),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Ar=class i extends Pt{constructor(e=new Si([new pe(0,.5),new pe(-.5,-.5),new pe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],a=[],o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(o,c,h),o+=c,c=0;function l(h){let u=r.length/3,d=h.extractPoints(t),p=d.shape,f=d.holes;yi.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,x=f.length;m<x;m++){let g=f[m];yi.isClockWise(g)===!0&&(f[m]=g.reverse())}let v=yi.triangulateShape(p,f);for(let m=0,x=f.length;m<x;m++){let g=f[m];p=p.concat(g)}for(let m=0,x=p.length;m<x;m++){let g=p[m];r.push(g.x,g.y,0),s.push(0,0,1),a.push(g.x,g.y)}for(let m=0,x=v.length;m<x;m++){let g=v[m],y=g[0]+u,E=g[1]+u,A=g[2]+u;n.push(y,E,A),c+=3}}this.setIndex(n),this.setAttribute("position",new Ve(r,3)),this.setAttribute("normal",new Ve(s,3)),this.setAttribute("uv",new Ve(a,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return(function(t,n){if(n.shapes=[],Array.isArray(t))for(let r=0,s=t.length;r<s;r++){let a=t[r];n.shapes.push(a.uuid)}else n.shapes.push(t.uuid);return n})(this.parameters.shapes,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];n.push(a)}return new i(n,e.curveSegments)}},mt=class i extends Pt{constructor(e=1,t=32,n=16,r=0,s=2*Math.PI,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new S,d=new S,p=[],f=[],v=[],m=[];for(let x=0;x<=n;x++){let g=[],y=x/n,E=0;x===0&&a===0?E=.5/t:x===n&&c===Math.PI&&(E=-.5/t);for(let A=0;A<=t;A++){let M=A/t;u.x=-e*Math.cos(r+M*s)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(r+M*s)*Math.sin(a+y*o),f.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(M+E,1-y),g.push(l++)}h.push(g)}for(let x=0;x<n;x++)for(let g=0;g<t;g++){let y=h[x][g+1],E=h[x][g],A=h[x+1][g],M=h[x+1][g+1];(x!==0||a>0)&&p.push(y,E,M),(x!==n-1||c<Math.PI)&&p.push(E,A,M)}this.setIndex(p),this.setAttribute("position",new Ve(f,3)),this.setAttribute("normal",new Ve(v,3)),this.setAttribute("uv",new Ve(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},rc=class i extends Tr{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},wn=class i extends Pt{constructor(e=1,t=.4,n=12,r=48,s=2*Math.PI){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],c=[],l=[],h=new S,u=new S,d=new S;for(let p=0;p<=n;p++)for(let f=0;f<=r;f++){let v=f/r*s,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(f/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let f=1;f<=r;f++){let v=(r+1)*p+f-1,m=(r+1)*(p-1)+f-1,x=(r+1)*(p-1)+f,g=(r+1)*p+f;a.push(v,m,g),a.push(m,x,g)}this.setIndex(a),this.setAttribute("position",new Ve(o,3)),this.setAttribute("normal",new Ve(c,3)),this.setAttribute("uv",new Ve(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},sc=class i extends Pt{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);let o=[],c=[],l=[],h=[],u=new S,d=new S,p=new S,f=new S,v=new S,m=new S,x=new S;for(let y=0;y<=n;++y){let E=y/n*s*Math.PI*2;g(E,s,a,e,p),g(E+.01,s,a,e,f),m.subVectors(f,p),x.addVectors(f,p),v.crossVectors(m,x),x.crossVectors(v,m),v.normalize(),x.normalize();for(let A=0;A<=r;++A){let M=A/r*Math.PI*2,D=-t*Math.cos(M),F=t*Math.sin(M);u.x=p.x+(D*x.x+F*v.x),u.y=p.y+(D*x.y+F*v.y),u.z=p.z+(D*x.z+F*v.z),c.push(u.x,u.y,u.z),d.subVectors(u,p).normalize(),l.push(d.x,d.y,d.z),h.push(y/n),h.push(A/r)}}for(let y=1;y<=n;y++)for(let E=1;E<=r;E++){let A=(r+1)*(y-1)+(E-1),M=(r+1)*y+(E-1),D=(r+1)*y+E,F=(r+1)*(y-1)+E;o.push(A,M,F),o.push(M,D,F)}function g(y,E,A,M,D){let F=Math.cos(y),L=Math.sin(y),V=A/E*y,H=Math.cos(V);D.x=M*(2+H)*.5*F,D.y=M*(2+H)*L*.5,D.z=M*Math.sin(V)*.5}this.setIndex(o),this.setAttribute("position",new Ve(c,3)),this.setAttribute("normal",new Ve(l,3)),this.setAttribute("uv",new Ve(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ac=class i extends Pt{constructor(e=new yo(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new S,c=new S,l=new pe,h=new S,u=[],d=[],p=[],f=[];function v(m){h=e.getPointAt(m/t,h);let x=a.normals[m],g=a.binormals[m];for(let y=0;y<=r;y++){let E=y/r*Math.PI*2,A=Math.sin(E),M=-Math.cos(E);c.x=M*x.x+A*g.x,c.y=M*x.y+A*g.y,c.z=M*x.z+A*g.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,u.push(o.x,o.y,o.z)}}(function(){for(let m=0;m<t;m++)v(m);v(s===!1?t:0),(function(){for(let m=0;m<=t;m++)for(let x=0;x<=r;x++)l.x=m/t,l.y=x/r,p.push(l.x,l.y)})(),(function(){for(let m=1;m<=t;m++)for(let x=1;x<=r;x++){let g=(r+1)*(m-1)+(x-1),y=(r+1)*m+(x-1),E=(r+1)*m+x,A=(r+1)*(m-1)+x;f.push(g,y,A),f.push(y,E,A)}})()})(),this.setIndex(f),this.setAttribute("position",new Ve(u,3)),this.setAttribute("normal",new Ve(d,3)),this.setAttribute("uv",new Ve(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Ql[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},oc=class extends Pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,r=new S,s=new S;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let u=c[l],d=u.start;for(let p=d,f=d+u.count;p<f;p+=3)for(let v=0;v<3;v++){let m=o.getX(p+v),x=o.getX(p+(v+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,x),Hp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,u=3*o+(l+1)%3;r.fromBufferAttribute(a,h),s.fromBufferAttribute(a,u),Hp(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Ve(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Hp(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)!==!0&&t.has(r)!==!0&&(t.add(n),t.add(r),!0)}var Dx=Object.freeze({__proto__:null,BoxGeometry:_e,CapsuleGeometry:Qn,CircleGeometry:Yt,ConeGeometry:hn,CylinderGeometry:be,DodecahedronGeometry:$l,EdgesGeometry:ql,ExtrudeGeometry:aa,IcosahedronGeometry:wr,LatheGeometry:tc,OctahedronGeometry:nc,PlaneGeometry:yt,PolyhedronGeometry:Tr,RingGeometry:ic,ShapeGeometry:Ar,SphereGeometry:mt,TetrahedronGeometry:rc,TorusGeometry:wn,TorusKnotGeometry:sc,TubeGeometry:ac,WireframeGeometry:oc});var Be=class extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var lc=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},cc=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Nl(i,e){return i&&i.constructor!==e?typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i):i}function jg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Zr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hc=class extends Zr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],c=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case nu:s=e,o=2*t-n;break;case iu:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case nu:a=e,c=2*n-t;break;case iu:a=1,c=n+r[1]-r[0];break;default:a=e-1,c=t}let l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,f=(n-t)/(r-t),v=f*f,m=v*f,x=-d*m+2*d*v-d*f,g=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*f+1,y=(-1-p)*m+(1.5+p)*v+.5*f,E=p*m-p*v;for(let A=0;A!==o;++A)s[A]=x*a[h+A]+g*a[l+A]+y*a[c+A]+E*a[u+A];return s}},uc=class extends Zr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[l+d]*u+a[c+d]*h;return s}},dc=class extends Zr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},zn=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Nl(t,this.TimeBufferType),this.values=Nl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Nl(e.times,Array),values:Nl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qa:t=this.InterpolantFactoryMethodDiscrete;break;case Fl:t=this.InterpolantFactoryMethodLinear;break;case Ul:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return Je("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qa;case this.InterpolantFactoryMethodLinear:return Fl;case this.InterpolantFactoryMethodSmooth:return Ul}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){ht("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){ht("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(r!==void 0&&jg(r))for(let o=0,c=r.length;o!==c;++o){let l=r[o];if(isNaN(l)){ht("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Ul,s=e.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(r)c=!0;else{let h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let f=t[h+p];if(f!==t[u+p]||f!==t[d+p]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let h=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}};zn.prototype.ValueTypeName="",zn.prototype.TimeBufferType=Float32Array,zn.prototype.ValueBufferType=Float32Array,zn.prototype.DefaultInterpolation=Fl;var _r=class extends zn{constructor(e,t,n){super(e,t,n)}};_r.prototype.ValueTypeName="bool",_r.prototype.ValueBufferType=Array,_r.prototype.DefaultInterpolation=Qa,_r.prototype.InterpolantFactoryMethodLinear=void 0,_r.prototype.InterpolantFactoryMethodSmooth=void 0;var pc=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};pc.prototype.ValueTypeName="color";var fc=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};fc.prototype.ValueTypeName="number";var mc=class extends Zr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(r-t),l=e*o;for(let h=l+o;l!==h;l+=4)Dn.slerpFlat(s,0,a,l-o,a,l,c);return s}},So=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}};So.prototype.ValueTypeName="quaternion",So.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends zn{constructor(e,t,n){super(e,t,n)}};br.prototype.ValueTypeName="string",br.prototype.ValueBufferType=Array,br.prototype.DefaultInterpolation=Qa,br.prototype.InterpolantFactoryMethodLinear=void 0,br.prototype.InterpolantFactoryMethodSmooth=void 0;var gc=class extends zn{constructor(e,t,n,r){super(e,t,n,r)}};gc.prototype.ValueTypeName="vector";var kl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},vc=class{constructor(e,t,n){let r=this,s,a=!1,o=0,c=0,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){c++,a===!1&&r.onStart!==void 0&&r.onStart(h,o,c),a=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,c),o===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return s?s(h):h},this.setURLModifier=function(h){return s=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],f=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jf=new vc,oa=class{constructor(e){this.manager=e!==void 0?e:jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};oa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=new WeakMap,yc=class extends oa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,a=kl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let u=Xs.get(a);u===void 0&&(u=[],Xs.set(a,u)),u.push({onLoad:t,onError:r})}return a}let o=Ys("img");function c(){h(),t&&t(this);let u=Xs.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Xs.delete(this),s.manager.itemEnd(e)}function l(u){h(),r&&r(u),kl.remove(`image:${e}`);let d=Xs.get(this)||[];for(let p=0;p<d.length;p++){let f=d[p];f.onError&&f.onError(u)}Xs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),kl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var To=class extends oa{constructor(e){super(e)}load(e,t,n,r){let s=new yn,a=new yc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},la=class extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Jr=class extends la{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Kh=new nt,Gp=new S,zp=new S,xc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pe(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sr,this._frameExtents=new pe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),zp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zp),t.updateMatrixWorld(),Kh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Vp=new nt,qa=new S,Qh=new S,hu=class extends xc{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pe(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qa.setFromMatrixPosition(e.matrixWorld),n.position.copy(qa),Qh.copy(n.position),Qh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qh),n.updateMatrixWorld(),r.makeTranslation(-qa.x,-qa.y,-qa.z),Vp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vp,n.coordinateSystem,n.reversedDepth)}},Qi=class extends la{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new hu}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},wo=class extends ta{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},uu=class extends xc{constructor(){super(new wo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Kr=class extends la{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new uu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Nx=new nt,Ux=new nt,kx=new nt;var _c=class extends nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Bx=new S,Fx=new Dn,Ox=new S,Hx=new S,Gx=new S;var zx=new S,Vx=new Dn,Wx=new S,jx=new S;var rd="\\[\\]\\.:\\/",Xg=new RegExp("["+rd+"]","g"),eu="[^"+rd+"]",$g="[^"+rd.replace("\\.","")+"]",qg=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",eu)+/(WCOD+)?/.source.replace("WCOD",$g)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu)+"$"),Yg=["material","materials","bones","map"],Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Xg,"")}static parseTrackName(e){let t=qg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Yg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return void Je("PropertyBinding: No target node found for track: "+this.path+".");if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material)return void ht("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.materials)return void ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);e=e.material.materials;break;case"bones":if(!e.skeleton)return void ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material)return void ht("PropertyBinding: Can not bind to material as node does not have a material.",this);if(!e.material.map)return void ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);e=e.material.map;break;default:if(e[n]===void 0)return void ht("PropertyBinding: Can not bind to objectName of node undefined.",this);e=e[n]}if(l!==void 0){if(e[l]===void 0)return void ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);e=e[l]}}let a=e[r];if(a===void 0)return void ht("PropertyBinding: Trying to update property for track: "+t.nodeName+"."+r+" but it wasn't found.",e);let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry)return void ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);if(!e.geometry.morphAttributes)return void ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=class{constructor(i,e,t){let n=t||Bt.parseTrackName(e);this._targetGroup=i,this._bindings=i.subscribe_(e,n)}getValue(i,e){this.bind();let t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(i,e)}setValue(i,e){let t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=t.length;n!==r;++n)t[n].setValue(i,e)}bind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].bind()}unbind(){let i=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=i.length;e!==t;++e)i[e].unbind()}},Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray],Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Xx=new Float32Array(1);var Wp=new nt,Ao=class{constructor(e,t,n=0,r=1/0){this.ray=new Er(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wp),this}intersectObject(e,t=!0,n=[]){return du(e,this,n,t),n.sort(jp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)du(e[r],this,n,t);return n.sort(jp),n}};function jp(i,e){return i.distance-e.distance}function du(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let a=0,o=s.length;a<o;a++)du(s[a],e,t,!0)}}var $x=new pe;var qx=new S,Yx=new S,Zx=new S,Jx=new S,Kx=new S,Qx=new S,e_=new S;var t_=new S;var n_=new S,i_=new nt,r_=new nt;var s_=new S,a_=new et,o_=new et;var l_=new S,c_=new S,h_=new S;var u_=new S,d_=new ta;var p_=new Jn;var f_=new S;function sd(i,e,t,n){let r=(function(s){switch(s){case wi:case yu:return{byteLength:1,components:1};case pa:case xu:case ns:return{byteLength:2,components:1};case Dc:case Nc:return{byteLength:2,components:4};case ts:case Lc:case oi:return{byteLength:4,components:1};case _u:case bu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)})(n);switch(t){case 1021:return i*e;case Uc:case kc:return i*e/r.components*r.byteLength;case 1030:case 1031:return i*e*2/r.components*r.byteLength;case 1022:return i*e*3/r.components*r.byteLength;case li:case 1033:return i*e*4/r.components*r.byteLength;case 33776:case 33777:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 33778:case 33779:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 35841:case 35843:return Math.max(i,16)*Math.max(e,8)/4;case 35840:case 35842:return Math.max(i,8)*Math.max(e,8)/2;case 36196:case 37492:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case 37496:case 37808:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case 37809:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case 37810:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case 37811:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case 37812:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case 37813:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case 37814:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case 37815:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case 37816:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case 37817:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case 37818:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case 37819:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case 37820:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case 37821:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(i/4)*Math.ceil(e/4)*16;case 36283:case 36284:return Math.ceil(i/4)*Math.ceil(e/4)*8;case 36285:case 36286:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"181"}})),typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="181");function fm(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Jg(i){let e=new WeakMap;return{get:function(t){return t.isInterleavedBufferAttribute&&(t=t.data),e.get(t)},remove:function(t){t.isInterleavedBufferAttribute&&(t=t.data);let n=e.get(t);n&&(i.deleteBuffer(n.buffer),e.delete(t))},update:function(t,n){if(t.isInterleavedBufferAttribute&&(t=t.data),t.isGLBufferAttribute){let s=e.get(t);return void((!s||s.version<t.version)&&e.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version}))}let r=e.get(t);if(r===void 0)e.set(t,(function(s,a){let o=s.array,c=s.usage,l=o.byteLength,h=i.createBuffer(),u;if(i.bindBuffer(a,h),i.bufferData(a,o,c),s.onUploadCallback(),o instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)u=i.HALF_FLOAT;else if(o instanceof Uint16Array)u=s.isFloat16BufferAttribute?i.HALF_FLOAT:i.UNSIGNED_SHORT;else if(o instanceof Int16Array)u=i.SHORT;else if(o instanceof Uint32Array)u=i.UNSIGNED_INT;else if(o instanceof Int32Array)u=i.INT;else if(o instanceof Int8Array)u=i.BYTE;else if(o instanceof Uint8Array)u=i.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);u=i.UNSIGNED_BYTE}return{buffer:h,type:u,bytesPerElement:o.BYTES_PER_ELEMENT,version:s.version,size:l}})(t,n));else if(r.version<t.version){if(r.size!==t.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(s,a,o){let c=a.array,l=a.updateRanges;if(i.bindBuffer(o,s),l.length===0)i.bufferSubData(o,0,c);else{l.sort((u,d)=>u.start-d.start);let h=0;for(let u=1;u<l.length;u++){let d=l[h],p=l[u];p.start<=d.start+d.count+1?d.count=Math.max(d.count,p.start+p.count-d.start):(++h,l[h]=p)}l.length=h+1;for(let u=0,d=l.length;u<d;u++){let p=l[u];i.bufferSubData(o,p.start*c.BYTES_PER_ELEMENT,c,p.start,p.count)}a.clearUpdateRanges()}a.onUploadCallback()})(r.buffer,t,n),r.version=t.version}}}}var ut={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},Te={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Ai={basic:{uniforms:xn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:xn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:xn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:xn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:xn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new et(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:xn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:xn([Te.points,Te.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:xn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:xn([Te.common,Te.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:xn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:xn([Te.sprite,Te.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:xn([Te.common,Te.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:xn([Te.lights,Te.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Ai.physical={uniforms:xn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Gc={r:0,b:0,g:0},as=new ai,Kg=new nt;function Qg(i,e,t,n,r,s,a){let o=new et(0),c,l,h=s===!0?0:1,u=null,d=0,p=null;function f(m){let x=m.isScene===!0?m.background:null;return x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x}function v(m,x){m.getRGB(Gc,nd(i)),n.buffers.color.setClear(Gc.r,Gc.g,Gc.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(m,x=1){o.set(m),h=x,v(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(m){h=m,v(o,h)},render:function(m){let x=!1,g=f(m);g===null?v(o,h):g&&g.isColor&&(v(g,1),x=!0);let y=i.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,a):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))},addToRenderList:function(m,x){let g=f(x);g&&(g.isCubeTexture||g.mapping===Io)?(l===void 0&&(l=new z(new _e(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ss(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),as.copy(x.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Kg.makeRotationFromEuler(as)),l.material.toneMapped=_t.getTransfer(g.colorSpace)!==Ct,u===g&&d===g.version&&p===i.toneMapping||(l.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new z(new yt(2,2),new Nn({name:"BackgroundMaterial",uniforms:ss(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:ca,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=_t.getTransfer(g.colorSpace)!==Ct,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),u===g&&d===g.version&&p===i.toneMapping||(c.material.needsUpdate=!0,u=g,d=g.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))},dispose:function(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}}}function e1(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=l(null),s=r,a=!1;function o(x){return i.bindVertexArray(x)}function c(x){return i.deleteVertexArray(x)}function l(x){let g=[],y=[],E=[];for(let A=0;A<t;A++)g[A]=0,y[A]=0,E[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:g,enabledAttributes:y,attributeDivisors:E,object:x,attributes:{},index:null}}function h(){let x=s.newAttributes;for(let g=0,y=x.length;g<y;g++)x[g]=0}function u(x){d(x,0)}function d(x,g){let y=s.newAttributes,E=s.enabledAttributes,A=s.attributeDivisors;y[x]=1,E[x]===0&&(i.enableVertexAttribArray(x),E[x]=1),A[x]!==g&&(i.vertexAttribDivisor(x,g),A[x]=g)}function p(){let x=s.newAttributes,g=s.enabledAttributes;for(let y=0,E=g.length;y<E;y++)g[y]!==x[y]&&(i.disableVertexAttribArray(y),g[y]=0)}function f(x,g,y,E,A,M,D){D===!0?i.vertexAttribIPointer(x,g,y,A,M):i.vertexAttribPointer(x,g,y,E,A,M)}function v(){m(),a=!0,s!==r&&(s=r,o(s.object))}function m(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:function(x,g,y,E,A){let M=!1,D=(function(F,L,V){let H=V.wireframe===!0,U=n[F.id];U===void 0&&(U={},n[F.id]=U);let Z=U[L.id];Z===void 0&&(Z={},U[L.id]=Z);let N=Z[H];return N===void 0&&(N=l(i.createVertexArray()),Z[H]=N),N})(E,y,g);s!==D&&(s=D,o(s.object)),M=(function(F,L,V,H){let U=s.attributes,Z=L.attributes,N=0,X=V.getAttributes();for(let ee in X)if(X[ee].location>=0){let he=U[ee],ae=Z[ee];if(ae===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),he===void 0||he.attribute!==ae||ae&&he.data!==ae.data)return!0;N++}return s.attributesNum!==N||s.index!==H})(x,E,y,A),M&&(function(F,L,V,H){let U={},Z=L.attributes,N=0,X=V.getAttributes();for(let ee in X)if(X[ee].location>=0){let he=Z[ee];he===void 0&&(ee==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),ee==="instanceColor"&&F.instanceColor&&(he=F.instanceColor));let ae={};ae.attribute=he,he&&he.data&&(ae.data=he.data),U[ee]=ae,N++}s.attributes=U,s.attributesNum=N,s.index=H})(x,E,y,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(M||a)&&(a=!1,(function(F,L,V,H){h();let U=H.attributes,Z=V.getAttributes(),N=L.defaultAttributeValues;for(let X in Z){let ee=Z[X];if(ee.location>=0){let he=U[X];if(he===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(he=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(he=F.instanceColor)),he!==void 0){let ae=he.normalized,Ee=he.itemSize,de=e.get(he);if(de===void 0)continue;let Se=de.buffer,fe=de.type,re=de.bytesPerElement,ge=fe===i.INT||fe===i.UNSIGNED_INT||he.gpuType===Lc;if(he.isInterleavedBufferAttribute){let ye=he.data,Fe=ye.stride,$e=he.offset;if(ye.isInstancedInterleavedBuffer){for(let w=0;w<ee.locationSize;w++)d(ee.location+w,ye.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let w=0;w<ee.locationSize;w++)u(ee.location+w);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let w=0;w<ee.locationSize;w++)f(ee.location+w,Ee/ee.locationSize,fe,ae,Fe*re,($e+Ee/ee.locationSize*w)*re,ge)}else{if(he.isInstancedBufferAttribute){for(let ye=0;ye<ee.locationSize;ye++)d(ee.location+ye,he.meshPerAttribute);F.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ye=0;ye<ee.locationSize;ye++)u(ee.location+ye);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ye=0;ye<ee.locationSize;ye++)f(ee.location+ye,Ee/ee.locationSize,fe,ae,Ee*re,Ee/ee.locationSize*ye*re,ge)}}else if(N!==void 0){let ae=N[X];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(ee.location,ae);break;case 3:i.vertexAttrib3fv(ee.location,ae);break;case 4:i.vertexAttrib4fv(ee.location,ae);break;default:i.vertexAttrib1fv(ee.location,ae)}}}}p()})(x,g,y,E),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))},reset:v,resetDefaultState:m,dispose:function(){v();for(let x in n){let g=n[x];for(let y in g){let E=g[y];for(let A in E)c(E[A].object),delete E[A];delete g[y]}delete n[x]}},releaseStatesOfGeometry:function(x){if(n[x.id]===void 0)return;let g=n[x.id];for(let y in g){let E=g[y];for(let A in E)c(E[A].object),delete E[A];delete g[y]}delete n[x.id]},releaseStatesOfProgram:function(x){for(let g in n){let y=n[g];if(y[x.id]===void 0)continue;let E=y[x.id];for(let A in E)c(E[A].object),delete E[A];delete y[x.id]}},initAttributes:h,enableAttribute:u,disableUnusedAttributes:p}}function t1(i,e,t){let n;function r(s,a,o){o!==0&&(i.drawArraysInstanced(n,s,a,o),t.update(a,n,o))}this.setMode=function(s){n=s},this.render=function(s,a){i.drawArrays(n,s,a),t.update(a,n,1)},this.renderInstances=r,this.renderMultiDraw=function(s,a,o){if(o===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,s,0,a,0,o);let c=0;for(let l=0;l<o;l++)c+=a[l];t.update(c,n,1)},this.renderMultiDrawInstances=function(s,a,o,c){if(o===0)return;let l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<s.length;h++)r(s[h],a[h],c[h]);else{l.multiDrawArraysInstancedWEBGL(n,s,0,a,0,c,0,o);let h=0;for(let u=0;u<o;u++)h+=a[u]*c[u];t.update(h,n,1)}}}function n1(i,e,t,n){let r;function s(d){if(d==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp",o=s(a);o!==a&&(Je("WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);let c=t.logarithmicDepthBuffer===!0,l=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS);return{isWebGL2:!0,getMaxAnisotropy:function(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let d=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r},getMaxPrecision:s,textureFormatReadable:function(d){return d===li||n.convert(d)===i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT)},textureTypeReadable:function(d){let p=d===ns&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(d!==wi&&n.convert(d)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&d!==oi&&!p)},precision:a,logarithmicDepthBuffer:c,reversedDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),maxCubemapSize:i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),maxAttributes:i.getParameter(i.MAX_VERTEX_ATTRIBS),maxVertexUniforms:i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),maxVaryings:i.getParameter(i.MAX_VARYING_VECTORS),maxFragmentUniforms:i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),vertexTextures:u>0,maxSamples:i.getParameter(i.MAX_SAMPLES)}}function i1(i){let e=this,t=null,n=0,r=!1,s=!1,a=new Yn,o=new lt,c={value:null,needsUpdate:!1};function l(h,u,d,p){let f=h!==null?h.length:0,v=null;if(f!==0){if(v=c.value,p!==!0||v===null){let m=d+4*f,x=u.matrixWorldInverse;o.getNormalMatrix(x),(v===null||v.length<m)&&(v=new Float32Array(m));for(let g=0,y=d;g!==f;++g,y+=4)a.copy(h[g]).applyMatrix4(x,o),a.normal.toArray(v,y),v[y+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,v}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,l(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,f=h.clipIntersection,v=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!v)s?l(null):(function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0})();else{let x=s?0:n,g=4*x,y=m.clippingState||null;c.value=y,y=l(p,u,g,d);for(let E=0;E!==g;++E)y[E]=t[E];m.clippingState=y,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=x}}}function r1(i){let e=new WeakMap;function t(r,s){return s===Cc?r.mapping=da:s===Pc&&(r.mapping=Qr),r}function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping;if(s===Cc||s===Pc){if(e.has(r))return t(e.get(r).texture,r.mapping);{let a=r.image;if(a&&a.height>0){let o=new Wl(a.height);return o.fromEquirectangularTexture(i,r),e.set(r,o),r.addEventListener("dispose",n),t(o.texture,r.mapping)}return null}}}return r},dispose:function(){e=new WeakMap}}}var Xf=[.125,.215,.35,.446,.526,.582],Uo=20,ko=new wo,$f=new et,ad=null,od=0,ld=0,cd=!1,s1=new S,Vc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){let{size:a=256,position:o=s1}=s;ad=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,od,ld),this._renderer.xr.enabled=cd,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===Qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),od=this._renderer.getActiveCubeFace(),ld=this._renderer.getActiveMipmapLevel(),cd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:ns,format:li,colorSpace:$r,depthBuffer:!1},r=qf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qf(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=(function(a){let o=[],c=[],l=[],h=a,u=a-4+1+Xf.length;for(let d=0;d<u;d++){let p=Math.pow(2,h);o.push(p);let f=1/p;d>a-4?f=Xf[d-a+4-1]:d===0&&(f=0),c.push(f);let v=1/(p-2),m=-v,x=1+v,g=[m,m,x,m,x,x,m,m,x,x,m,x],y=6,E=6,A=3,M=2,D=1,F=new Float32Array(A*E*y),L=new Float32Array(M*E*y),V=new Float32Array(D*E*y);for(let U=0;U<y;U++){let Z=U%3*2/3-1,N=U>2?0:-1,X=[Z,N,0,Z+2/3,N,0,Z+2/3,N+1,0,Z,N,0,Z+2/3,N+1,0,Z,N+1,0];F.set(X,A*E*U),L.set(g,M*E*U);let ee=[U,U,U,U,U,U];V.set(ee,D*E*U)}let H=new Pt;H.setAttribute("position",new Sn(F,A)),H.setAttribute("uv",new Sn(L,M)),H.setAttribute("faceIndex",new Sn(V,D)),l.push(new z(H,null)),h>4&&h--}return{lodMeshes:l,sizeLods:o,sigmas:c}})(s)),this._blurMaterial=(function(a,o,c){let l=new Float32Array(Uo),h=new S(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Uo,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})})(s,e,t),this._ggxMaterial=(function(a,o,c){return new Nn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:256,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})})(s,e,t)}return r}_compileMaterial(e){let t=new z(new Pt,e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,n,r,s){let a=new nn(90,1,t,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor($f),l.toneMapping=tr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new z(new _e,new cn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,p=d.material,f=!1,v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,f=!0):(p.color.copy($f),f=!0);for(let m=0;m<6;m++){let x=m%3;x===0?(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x+c[m],s.y,s.z)):x===1?(a.up.set(0,0,o[m]),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y+c[m],s.z)):(a.up.set(0,o[m],0),a.position.set(s.x,s.y,s.z),a.lookAt(s.x,s.y,s.z+c[m]));let g=this._cubeSize;ma(r,x*g,m>2?g:0,g,g),l.setRenderTarget(r),f&&l.render(d,a),l.render(e,a)}l.toneMapping=u,l.autoClear=h,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===da||e.mapping===Qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s,s.uniforms.envMap.value=e;let o=this._cubeSize;ma(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(a,ko)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h)*(.05+.95*l),{_lodMax:d}=this,p=this._sizeLods[n],f=3*p*(n>d-4?n-d+4:0),v=4*(this._cubeSize-p);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=d-t,ma(s,f,v,3*p,2*p),r.setRenderTarget(s),r.render(o,ko),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=d-n,ma(e,f,v,3*p,2*p),r.setRenderTarget(e),r.render(o,ko)}_blur(e,t,n,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ht("blur direction must be either latitudinal or longitudinal!");let h=this._lodMeshes[r];h.material=l;let u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/39,f=s/p,v=isFinite(s)?1+Math.floor(3*f):Uo;v>Uo&&Je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to 20`);let m=[],x=0;for(let E=0;E<Uo;++E){let A=E/f,M=Math.exp(-A*A/2);m.push(M),E===0?x+=M:E<v&&(x+=2*M)}for(let E=0;E<m.length;E++)m[E]=m[E]/x;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:g}=this;u.dTheta.value=p,u.mipInt.value=g-n;let y=this._sizeLods[r];ma(t,3*y*(r>g-4?r-g+4:0),4*(this._cubeSize-y),3*y,2*y),c.setRenderTarget(t),c.render(h,ko)}};function qf(i,e,t){let n=new bi(i,e,t);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Yf(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Zf(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Wc(){return`

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
	`}function a1(i){let e=new WeakMap,t=null;function n(r){let s=r.target;s.removeEventListener("dispose",n);let a=e.get(s);a!==void 0&&(e.delete(s),a.dispose())}return{get:function(r){if(r&&r.isTexture){let s=r.mapping,a=s===Cc||s===Pc,o=s===da||s===Qr;if(a||o){let c=e.get(r),l=c!==void 0?c.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return t===null&&(t=new Vc(i)),c=a?t.fromEquirectangular(r,c):t.fromCubemap(r,c),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),c.texture;if(c!==void 0)return c.texture;{let h=r.image;return a&&h&&h.height>0||o&&h&&(function(u){let d=0,p=6;for(let f=0;f<p;f++)u[f]!==void 0&&d++;return d===p})(h)?(t===null&&(t=new Vc(i)),c=a?t.fromEquirectangular(r):t.fromCubemap(r),c.texture.pmremVersion=r.pmremVersion,e.set(r,c),r.addEventListener("dispose",n),c.texture):null}}}return r},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function o1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&Js("WebGLRenderer: "+n+" extension not supported."),r}}}function l1(i,e,t,n){let r={},s=new WeakMap;function a(c){let l=c.target;l.index!==null&&e.remove(l.index);for(let u in l.attributes)e.remove(l.attributes[u]);l.removeEventListener("dispose",a),delete r[l.id];let h=s.get(l);h&&(e.remove(h),s.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){let l=[],h=c.index,u=c.attributes.position,d=0;if(h!==null){let v=h.array;d=h.version;for(let m=0,x=v.length;m<x;m+=3){let g=v[m+0],y=v[m+1],E=v[m+2];l.push(g,y,y,E,E,g)}}else{if(u===void 0)return;{let v=u.array;d=u.version;for(let m=0,x=v.length/3-1;m<x;m+=3){let g=m+0,y=m+1,E=m+2;l.push(g,y,y,E,E,g)}}}let p=new(td(l)?so:ro)(l,1);p.version=d;let f=s.get(c);f&&e.remove(f),s.set(c,p)}return{get:function(c,l){return r[l.id]===!0||(l.addEventListener("dispose",a),r[l.id]=!0,t.memory.geometries++),l},update:function(c){let l=c.attributes;for(let h in l)e.update(l[h],i.ARRAY_BUFFER)},getWireframeAttribute:function(c){let l=s.get(c);if(l){let h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return s.get(c)}}}function c1(i,e,t){let n,r,s;function a(o,c,l){l!==0&&(i.drawElementsInstanced(n,c,r,o*s,l),t.update(c,n,l))}this.setMode=function(o){n=o},this.setIndex=function(o){r=o.type,s=o.bytesPerElement},this.render=function(o,c){i.drawElements(n,c,r,o*s),t.update(c,n,1)},this.renderInstances=a,this.renderMultiDraw=function(o,c,l){if(l===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,c,0,r,o,0,l);let h=0;for(let u=0;u<l;u++)h+=c[u];t.update(h,n,1)},this.renderMultiDrawInstances=function(o,c,l,h){if(l===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<o.length;d++)a(o[d]/s,c[d],h[d]);else{u.multiDrawElementsInstancedWEBGL(n,c,0,r,o,0,h,0,l);let d=0;for(let p=0;p<l;p++)d+=c[p]*h[p];t.update(d,n,1)}}}function h1(i){let e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,r){switch(e.calls++,n){case i.TRIANGLES:e.triangles+=r*(t/3);break;case i.LINES:e.lines+=r*(t/2);break;case i.LINE_STRIP:e.lines+=r*(t-1);break;case i.LINE_LOOP:e.lines+=r*t;break;case i.POINTS:e.points+=r*t;break;default:ht("WebGLInfo: Unknown draw mode:",n)}}}}function u1(i,e,t){let n=new WeakMap,r=new Et;return{update:function(s,a,o){let c=s.morphTargetInfluences,l=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=l!==void 0?l.length:0,u=n.get(a);if(u===void 0||u.count!==h){let F=function(){M.dispose(),n.delete(a),a.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,v=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],g=0;d===!0&&(g=1),p===!0&&(g=2),f===!0&&(g=3);let y=a.attributes.position.count*g,E=1;y>e.maxTextureSize&&(E=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let A=new Float32Array(y*E*4*h),M=new io(A,y,E,h);M.type=oi,M.needsUpdate=!0;let D=4*g;for(let L=0;L<h;L++){let V=v[L],H=m[L],U=x[L],Z=y*E*4*L;for(let N=0;N<V.count;N++){let X=N*D;d===!0&&(r.fromBufferAttribute(V,N),A[Z+X+0]=r.x,A[Z+X+1]=r.y,A[Z+X+2]=r.z,A[Z+X+3]=0),p===!0&&(r.fromBufferAttribute(H,N),A[Z+X+4]=r.x,A[Z+X+5]=r.y,A[Z+X+6]=r.z,A[Z+X+7]=0),f===!0&&(r.fromBufferAttribute(U,N),A[Z+X+8]=r.x,A[Z+X+9]=r.y,A[Z+X+10]=r.z,A[Z+X+11]=U.itemSize===4?r.w:1)}}u={count:h,texture:M,size:new pe(y,E)},n.set(a,u),a.addEventListener("dispose",F)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let d=0;for(let f=0;f<c.length;f++)d+=c[f];let p=a.morphTargetsRelative?1:1-d;o.getUniforms().setValue(i,"morphTargetBaseInfluence",p),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),o.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}}}function d1(i,e,t,n){let r=new WeakMap;function s(a){let o=a.target;o.removeEventListener("dispose",s),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(a){let o=n.render.frame,c=a.geometry,l=e.get(a,c);if(r.get(l)!==o&&(e.update(l),r.set(l,o)),a.isInstancedMesh&&(a.hasEventListener("dispose",s)===!1&&a.addEventListener("dispose",s),r.get(a)!==o&&(t.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&t.update(a.instanceColor,i.ARRAY_BUFFER),r.set(a,o))),a.isSkinnedMesh){let h=a.skeleton;r.get(h)!==o&&(h.update(),r.set(h,o))}return l},dispose:function(){r=new WeakMap}}}var mm=new yn,Jf=new po(1,1),gm=new io,vm=new zl,ym=new ao,Kf=[],Qf=[],em=new Float32Array(16),tm=new Float32Array(9),nm=new Float32Array(4);function ya(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=Kf[r];if(s===void 0&&(s=new Float32Array(r),Kf[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function rn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function sn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jc(i,e){let t=Qf[e];t===void 0&&(t=new Int32Array(e),Qf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function p1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function f1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2fv(this.addr,e),sn(t,e)}}function m1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;i.uniform3fv(this.addr,e),sn(t,e)}}function g1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4fv(this.addr,e),sn(t,e)}}function v1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;nm.set(n),i.uniformMatrix2fv(this.addr,!1,nm),sn(t,n)}}function y1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;tm.set(n),i.uniformMatrix3fv(this.addr,!1,tm),sn(t,n)}}function x1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(rn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,n))return;em.set(n),i.uniformMatrix4fv(this.addr,!1,em),sn(t,n)}}function _1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function b1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2iv(this.addr,e),sn(t,e)}}function M1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3iv(this.addr,e),sn(t,e)}}function E1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4iv(this.addr,e),sn(t,e)}}function S1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function T1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;i.uniform2uiv(this.addr,e),sn(t,e)}}function w1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;i.uniform3uiv(this.addr,e),sn(t,e)}}function A1(i,e){let t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;i.uniform4uiv(this.addr,e),sn(t,e)}}function R1(i,e,t){let n=this.cache,r=t.allocateTextureUnit(),s;n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),this.type===i.SAMPLER_2D_SHADOW?(Jf.compareFunction=Qu,s=Jf):s=mm,t.setTexture2D(e||s,r)}function C1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vm,r)}function P1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ym,r)}function I1(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||gm,r)}function L1(i,e){i.uniform1fv(this.addr,e)}function D1(i,e){let t=ya(e,this.size,2);i.uniform2fv(this.addr,t)}function N1(i,e){let t=ya(e,this.size,3);i.uniform3fv(this.addr,t)}function U1(i,e){let t=ya(e,this.size,4);i.uniform4fv(this.addr,t)}function k1(i,e){let t=ya(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B1(i,e){let t=ya(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function F1(i,e){let t=ya(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O1(i,e){i.uniform1iv(this.addr,e)}function H1(i,e){i.uniform2iv(this.addr,e)}function G1(i,e){i.uniform3iv(this.addr,e)}function z1(i,e){i.uniform4iv(this.addr,e)}function V1(i,e){i.uniform1uiv(this.addr,e)}function W1(i,e){i.uniform2uiv(this.addr,e)}function j1(i,e){i.uniform3uiv(this.addr,e)}function X1(i,e){i.uniform4uiv(this.addr,e)}function $1(i,e,t){let n=this.cache,r=e.length,s=jc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||mm,s[a])}function q1(i,e,t){let n=this.cache,r=e.length,s=jc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||vm,s[a])}function Y1(i,e,t){let n=this.cache,r=e.length,s=jc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ym,s[a])}function Z1(i,e,t){let n=this.cache,r=e.length,s=jc(t,r);rn(n,s)||(i.uniform1iv(this.addr,s),sn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||gm,s[a])}var ud=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=(function(r){switch(r){case 5126:return p1;case 35664:return f1;case 35665:return m1;case 35666:return g1;case 35674:return v1;case 35675:return y1;case 35676:return x1;case 5124:case 35670:return _1;case 35667:case 35671:return b1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return S1;case 36294:return T1;case 36295:return w1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return P1;case 36289:case 36303:case 36311:case 36292:return I1}})(t.type)}},dd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=(function(r){switch(r){case 5126:return L1;case 35664:return D1;case 35665:return N1;case 35666:return U1;case 35674:return k1;case 35675:return B1;case 35676:return F1;case 5124:case 35670:return O1;case 35667:case 35671:return H1;case 35668:case 35672:return G1;case 35669:case 35673:return z1;case 5125:return V1;case 36294:return W1;case 36295:return j1;case 36296:return X1;case 35678:case 36198:case 36298:case 36306:case 35682:return $1;case 35679:case 36299:case 36307:return q1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return Z1}})(t.type)}},pd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],n)}}},hd=/(\w+)(\])?(\[|\.)?/g;function im(i,e){i.seq.push(e),i.map[e.id]=e}function J1(i,e,t){let n=i.name,r=n.length;for(hd.lastIndex=0;;){let s=hd.exec(n),a=hd.lastIndex,o=s[1],c=s[2]==="]",l=s[3];if(c&&(o|=0),l===void 0||l==="["&&a+2===r){im(t,l===void 0?new ud(o,i,e):new dd(o,i,e));break}{let h=t.map[o];h===void 0&&(h=new pd(o),im(t,h)),t=h}}}var ga=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r);J1(s,e.getUniformLocation(t,s.name),this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&n.push(a)}return n}};function rm(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var K1=0,sm=new lt;function am(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+(function(o,c){let l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){let f=p+1;h.push(`${f===c?">":" "} ${f}: ${l[p]}`)}return h.join(`
`)})(i.getShaderSource(e),a)}return r}function Q1(i,e){let t=(function(n){_t._getMatrix(sm,_t.workingColorSpace,n);let r=`mat3( ${sm.elements.map(s=>s.toFixed(4))} )`;switch(_t.getTransfer(n)){case eo:return[r,"LinearTransferOETF"];case Ct:return[r,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",n),[r,"LinearTransferOETF"]}})(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function ev(i,e){let t;switch(e){case yf:t="Linear";break;case xf:t="Reinhard";break;case _f:t="Cineon";break;case bf:t="ACESFilmic";break;case Ef:t="AgX";break;case ua:t="Neutral";break;case Mf:t="Custom";break;default:Je("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zc=new S;function tv(){return _t.getLuminanceCoefficients(zc),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${zc.x.toFixed(4)}, ${zc.y.toFixed(4)}, ${zc.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bo(i){return i!==""}function om(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var nv=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(i){return i.replace(nv,rv)}var iv=new Map;function rv(i,e){let t=ut[e];if(t===void 0){let n=iv.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=ut[n],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n)}return fd(t)}var sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cm(i){return i.replace(sv,av)}function av(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hm(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function ov(i,e,t,n){let r=i.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,c=(function(H){let U="SHADOWMAP_TYPE_BASIC";return H.shadowMapType===fu?U="SHADOWMAP_TYPE_PCF":H.shadowMapType===bc?U="SHADOWMAP_TYPE_PCF_SOFT":H.shadowMapType===Ti&&(U="SHADOWMAP_TYPE_VSM"),U})(t),l=(function(H){let U="ENVMAP_TYPE_CUBE";if(H.envMap)switch(H.envMapMode){case da:case Qr:U="ENVMAP_TYPE_CUBE";break;case Io:U="ENVMAP_TYPE_CUBE_UV"}return U})(t),h=(function(H){let U="ENVMAP_MODE_REFLECTION";return H.envMap&&H.envMapMode===Qr&&(U="ENVMAP_MODE_REFRACTION"),U})(t),u=(function(H){let U="ENVMAP_BLENDING_NONE";if(H.envMap)switch(H.combine){case mf:U="ENVMAP_BLENDING_MULTIPLY";break;case gf:U="ENVMAP_BLENDING_MIX";break;case vf:U="ENVMAP_BLENDING_ADD"}return U})(t),d=(function(H){let U=H.envMapCubeUVHeight;if(U===null)return null;let Z=Math.log2(U)-2,N=1/U;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:N,maxMip:Z}})(t),p=(function(H){return[H.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",H.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)})(t),f=(function(H){let U=[];for(let Z in H){let N=H[Z];N!==!1&&U.push("#define "+Z+" "+N)}return U.join(`
`)})(s),v=r.createProgram(),m,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Bo).join(`
`),m.length>0&&(m+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Bo).join(`
`),x.length>0&&(x+=`
`)):(m=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),x=[hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?ut.tonemapping_pars_fragment:"",t.toneMapping!==tr?ev("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,Q1("linearToOutputTexel",t.outputColorSpace),tv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),a=fd(a),a=om(a,t),a=lm(a,t),o=fd(o),o=om(o,t),o=lm(o,t),a=cm(a),o=cm(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",t.glslVersion===ed?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ed?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=g+m+a,E=g+x+o,A=rm(r,r.VERTEX_SHADER,y),M=rm(r,r.FRAGMENT_SHADER,E);function D(H){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(v)||"",Z=r.getShaderInfoLog(A)||"",N=r.getShaderInfoLog(M)||"",X=U.trim(),ee=Z.trim(),he=N.trim(),ae=!0,Ee=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,A,M);else{let de=am(r,A,"vertex"),Se=am(r,M,"fragment");ht("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+de+`
`+Se)}else X!==""?Je("WebGLProgram: Program Info Log:",X):ee!==""&&he!==""||(Ee=!1);Ee&&(H.diagnostics={runnable:ae,programLog:X,vertexShader:{log:ee,prefix:m},fragmentShader:{log:he,prefix:x}})}r.deleteShader(A),r.deleteShader(M),F=new ga(r,v),L=(function(U,Z){let N={},X=U.getProgramParameter(Z,U.ACTIVE_ATTRIBUTES);for(let ee=0;ee<X;ee++){let he=U.getActiveAttrib(Z,ee),ae=he.name,Ee=1;he.type===U.FLOAT_MAT2&&(Ee=2),he.type===U.FLOAT_MAT3&&(Ee=3),he.type===U.FLOAT_MAT4&&(Ee=4),N[ae]={type:he.type,location:U.getAttribLocation(Z,ae),locationSize:Ee}}return N})(r,v)}let F,L;r.attachShader(v,A),r.attachShader(v,M),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),this.getUniforms=function(){return F===void 0&&D(this),F},this.getAttributes=function(){return L===void 0&&D(this),L};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=r.getProgramParameter(v,37297)),V},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=M,this}var lv=0,md=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new gd(e),t.set(e,n)),n}},gd=class{constructor(e){this.id=lv++,this.code=e,this.usedTimes=0}};function cv(i,e,t,n,r,s,a){let o=new ea,c=new md,l=new Set,h=[],u=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(m){return l.add(m),m===0?"uv":`uv${m}`}return{getParameters:function(m,x,g,y,E){let A=y.fog,M=E.geometry,D=m.isMeshStandardMaterial?y.environment:null,F=(m.isMeshStandardMaterial?t:e).get(m.envMap||D),L=F&&F.mapping===Io?F.image.height:null,V=f[m.type];m.precision!==null&&(p=r.getMaxPrecision(m.precision),p!==m.precision&&Je("WebGLProgram.getParameters:",m.precision,"not supported, using",p,"instead."));let H=M.morphAttributes.position||M.morphAttributes.normal||M.morphAttributes.color,U=H!==void 0?H.length:0,Z,N,X,ee,he=0;if(M.morphAttributes.position!==void 0&&(he=1),M.morphAttributes.normal!==void 0&&(he=2),M.morphAttributes.color!==void 0&&(he=3),V){let G=Ai[V];Z=G.vertexShader,N=G.fragmentShader}else Z=m.vertexShader,N=m.fragmentShader,c.update(m),X=c.getVertexShaderID(m),ee=c.getFragmentShaderID(m);let ae=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),de=E.isInstancedMesh===!0,Se=E.isBatchedMesh===!0,fe=!!m.map,re=!!m.matcap,ge=!!F,ye=!!m.aoMap,Fe=!!m.lightMap,$e=!!m.bumpMap,w=!!m.normalMap,T=!!m.displacementMap,W=!!m.emissiveMap,k=!!m.metalnessMap,b=!!m.roughnessMap,C=m.anisotropy>0,j=m.clearcoat>0,O=m.dispersion>0,te=m.iridescence>0,$=m.sheen>0,K=m.transmission>0,ne=C&&!!m.anisotropyMap,ce=j&&!!m.clearcoatMap,ue=j&&!!m.clearcoatNormalMap,Ce=j&&!!m.clearcoatRoughnessMap,Oe=te&&!!m.iridescenceMap,Xe=te&&!!m.iridescenceThicknessMap,st=$&&!!m.sheenColorMap,rt=$&&!!m.sheenRoughnessMap,vt=!!m.specularMap,ke=!!m.specularColorMap,Ke=!!m.specularIntensityMap,it=K&&!!m.transmissionMap,Ut=K&&!!m.thicknessMap,Ae=!!m.gradientMap,xt=!!m.alphaMap,bt=m.alphaTest>0,Xn=!!m.alphaHash,an=!!m.extensions,kt=tr;m.toneMapped&&(ae!==null&&ae.isXRRenderTarget!==!0||(kt=i.toneMapping));let Vt={shaderID:V,shaderType:m.type,shaderName:m.name,vertexShader:Z,fragmentShader:N,defines:m.defines,customVertexShaderID:X,customFragmentShaderID:ee,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:p,batching:Se,batchingColor:Se&&E._colorsTexture!==null,instancing:de,instancingColor:de&&E.instanceColor!==null,instancingMorph:de&&E.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?i.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:$r,alphaToCoverage:!!m.alphaToCoverage,map:fe,matcap:re,envMap:ge,envMapMode:ge&&F.mapping,envMapCubeUVHeight:L,aoMap:ye,lightMap:Fe,bumpMap:$e,normalMap:w,displacementMap:d&&T,emissiveMap:W,normalMapObjectSpace:w&&m.normalMapType===Cf,normalMapTangentSpace:w&&m.normalMapType===Rf,metalnessMap:k,roughnessMap:b,anisotropy:C,anisotropyMap:ne,clearcoat:j,clearcoatMap:ce,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ce,dispersion:O,iridescence:te,iridescenceMap:Oe,iridescenceThicknessMap:Xe,sheen:$,sheenColorMap:st,sheenRoughnessMap:rt,specularMap:vt,specularColorMap:ke,specularIntensityMap:Ke,transmission:K,transmissionMap:it,thicknessMap:Ut,gradientMap:Ae,opaque:m.transparent===!1&&m.blending===Ro&&m.alphaToCoverage===!1,alphaMap:xt,alphaTest:bt,alphaHash:Xn,combine:m.combine,mapUv:fe&&v(m.map.channel),aoMapUv:ye&&v(m.aoMap.channel),lightMapUv:Fe&&v(m.lightMap.channel),bumpMapUv:$e&&v(m.bumpMap.channel),normalMapUv:w&&v(m.normalMap.channel),displacementMapUv:T&&v(m.displacementMap.channel),emissiveMapUv:W&&v(m.emissiveMap.channel),metalnessMapUv:k&&v(m.metalnessMap.channel),roughnessMapUv:b&&v(m.roughnessMap.channel),anisotropyMapUv:ne&&v(m.anisotropyMap.channel),clearcoatMapUv:ce&&v(m.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&v(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&v(m.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(m.iridescenceThicknessMap.channel),sheenColorMapUv:st&&v(m.sheenColorMap.channel),sheenRoughnessMapUv:rt&&v(m.sheenRoughnessMap.channel),specularMapUv:vt&&v(m.specularMap.channel),specularColorMapUv:ke&&v(m.specularColorMap.channel),specularIntensityMapUv:Ke&&v(m.specularIntensityMap.channel),transmissionMapUv:it&&v(m.transmissionMap.channel),thicknessMapUv:Ut&&v(m.thicknessMap.channel),alphaMapUv:xt&&v(m.alphaMap.channel),vertexTangents:!!M.attributes.tangent&&(w||C),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!M.attributes.color&&M.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!M.attributes.uv&&(fe||xt),fog:!!A,useFog:m.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:m.flatShading===!0&&m.wireframe===!1,sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ee,skinning:E.isSkinnedMesh===!0,morphTargets:M.morphAttributes.position!==void 0,morphNormals:M.morphAttributes.normal!==void 0,morphColors:M.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:he,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&g.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:fe&&m.map.isVideoTexture===!0&&_t.getTransfer(m.map.colorSpace)===Ct,decodeVideoTextureEmissive:W&&m.emissiveMap.isVideoTexture===!0&&_t.getTransfer(m.emissiveMap.colorSpace)===Ct,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===St,flipSided:m.side===An,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:an&&m.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(an&&m.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt},getProgramCacheKey:function(m){let x=[];if(m.shaderID?x.push(m.shaderID):(x.push(m.customVertexShaderID),x.push(m.customFragmentShaderID)),m.defines!==void 0)for(let g in m.defines)x.push(g),x.push(m.defines[g]);return m.isRawShaderMaterial===!1&&((function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)})(x,m),(function(g,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),g.push(o.mask)})(x,m),x.push(i.outputColorSpace)),x.push(m.customProgramCacheKey),x.join()},getUniforms:function(m){let x=f[m.type],g;if(x){let y=Ai[x];g=Hf.clone(y.uniforms)}else g=m.uniforms;return g},acquireProgram:function(m,x){let g;for(let y=0,E=h.length;y<E;y++){let A=h[y];if(A.cacheKey===x){g=A,++g.usedTimes;break}}return g===void 0&&(g=new ov(i,x,m,s),h.push(g)),g},releaseProgram:function(m){if(--m.usedTimes===0){let x=h.indexOf(m);h[x]=h[h.length-1],h.pop(),m.destroy()}},releaseShaderCache:function(m){c.remove(m)},programs:h,dispose:function(){c.dispose()}}}function hv(){let i=new WeakMap;return{has:function(e){return i.has(e)},get:function(e){let t=i.get(e);return t===void 0&&(t={},i.set(e,t)),t},remove:function(e){i.delete(e)},update:function(e,t,n){i.get(e)[t]=n},dispose:function(){i=new WeakMap}}}function uv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function um(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dm(){let i=[],e=0,t=[],n=[],r=[];function s(a,o,c,l,h,u){let d=i[e];return d===void 0?(d={id:a.id,object:a,geometry:o,material:c,groupOrder:l,renderOrder:a.renderOrder,z:h,group:u},i[e]=d):(d.id=a.id,d.object=a,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=a.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:r,init:function(){e=0,t.length=0,n.length=0,r.length=0},push:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?r.push(d):t.push(d)},unshift:function(a,o,c,l,h,u){let d=s(a,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?r.unshift(d):t.unshift(d)},finish:function(){for(let a=e,o=i.length;a<o;a++){let c=i[a];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(a,o){t.length>1&&t.sort(a||uv),n.length>1&&n.sort(o||um),r.length>1&&r.sort(o||um)}}}function dv(){let i=new WeakMap;return{get:function(e,t){let n=i.get(e),r;return n===void 0?(r=new dm,i.set(e,[r])):t>=n.length?(r=new dm,n.push(r)):r=n[t],r},dispose:function(){i=new WeakMap}}}function pv(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new et};break;case"SpotLight":t={position:new S,direction:new S,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new S,halfWidth:new S,halfHeight:new S}}return i[e.id]=t,t}}}var fv=0;function mv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function gv(i){let e=new pv,t=(function(){let o={};return{get:function(c){if(o[c.id]!==void 0)return o[c.id];let l;switch(c.type){case"DirectionalLight":case"SpotLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe};break;case"PointLight":l={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pe,shadowCameraNear:1,shadowCameraFar:1e3}}return o[c.id]=l,l}}})(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)n.probe.push(new S);let r=new S,s=new nt,a=new nt;return{setup:function(o){let c=0,l=0,h=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let u=0,d=0,p=0,f=0,v=0,m=0,x=0,g=0,y=0,E=0,A=0;o.sort(mv);for(let D=0,F=o.length;D<F;D++){let L=o[D],V=L.color,H=L.intensity,U=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=V.r*H,l+=V.g*H,h+=V.b*H;else if(L.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(L.sh.coefficients[N],H);A++}else if(L.isDirectionalLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let X=L.shadow,ee=t.get(L);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,n.directionalShadow[u]=ee,n.directionalShadowMap[u]=Z,n.directionalShadowMatrix[u]=L.shadow.matrix,m++}n.directional[u]=N,u++}else if(L.isSpotLight){let N=e.get(L);N.position.setFromMatrixPosition(L.matrixWorld),N.color.copy(V).multiplyScalar(H),N.distance=U,N.coneCos=Math.cos(L.angle),N.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),N.decay=L.decay,n.spot[p]=N;let X=L.shadow;if(L.map&&(n.spotLightMap[y]=L.map,y++,X.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[p]=X.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,n.spotShadow[p]=ee,n.spotShadowMap[p]=Z,g++}p++}else if(L.isRectAreaLight){let N=e.get(L);N.color.copy(V).multiplyScalar(H),N.halfWidth.set(.5*L.width,0,0),N.halfHeight.set(0,.5*L.height,0),n.rectArea[f]=N,f++}else if(L.isPointLight){let N=e.get(L);if(N.color.copy(L.color).multiplyScalar(L.intensity),N.distance=L.distance,N.decay=L.decay,L.castShadow){let X=L.shadow,ee=t.get(L);ee.shadowIntensity=X.intensity,ee.shadowBias=X.bias,ee.shadowNormalBias=X.normalBias,ee.shadowRadius=X.radius,ee.shadowMapSize=X.mapSize,ee.shadowCameraNear=X.camera.near,ee.shadowCameraFar=X.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=Z,n.pointShadowMatrix[d]=L.shadow.matrix,x++}n.point[d]=N,d++}else if(L.isHemisphereLight){let N=e.get(L);N.skyColor.copy(L.color).multiplyScalar(H),N.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[v]=N,v++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=l,n.ambient[2]=h;let M=n.hash;M.directionalLength===u&&M.pointLength===d&&M.spotLength===p&&M.rectAreaLength===f&&M.hemiLength===v&&M.numDirectionalShadows===m&&M.numPointShadows===x&&M.numSpotShadows===g&&M.numSpotMaps===y&&M.numLightProbes===A||(n.directional.length=u,n.spot.length=p,n.rectArea.length=f,n.point.length=d,n.hemi.length=v,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=g,n.spotShadowMap.length=g,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=g+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,M.directionalLength=u,M.pointLength=d,M.spotLength=p,M.rectAreaLength=f,M.hemiLength=v,M.numDirectionalShadows=m,M.numPointShadows=x,M.numSpotShadows=g,M.numSpotMaps=y,M.numLightProbes=A,n.version=fv++)},setupView:function(o,c){let l=0,h=0,u=0,d=0,p=0,f=c.matrixWorldInverse;for(let v=0,m=o.length;v<m;v++){let x=o[v];if(x.isDirectionalLight){let g=n.directional[l];g.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(f),l++}else if(x.isSpotLight){let g=n.spot[u];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(f),g.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(f),u++}else if(x.isRectAreaLight){let g=n.rectArea[d];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(f),a.identity(),s.copy(x.matrixWorld),s.premultiply(f),a.extractRotation(s),g.halfWidth.set(.5*x.width,0,0),g.halfHeight.set(0,.5*x.height,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),d++}else if(x.isPointLight){let g=n.point[h];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(f),h++}else if(x.isHemisphereLight){let g=n.hemi[p];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(f),p++}}},state:n}}function pm(i){let e=new gv(i),t=[],n=[],r={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:function(s){r.camera=s,t.length=0,n.length=0},state:r,setupLights:function(){e.setup(t)},setupLightsView:function(s){e.setupView(t,s)},pushLight:function(s){t.push(s)},pushShadow:function(s){n.push(s)}}}function vv(i){let e=new WeakMap;return{get:function(t,n=0){let r=e.get(t),s;return r===void 0?(s=new pm(i),e.set(t,[s])):n>=r.length?(s=new pm(i),r.push(s)):s=r[n],s},dispose:function(){e=new WeakMap}}}function yv(i,e,t){let n=new Sr,r=new pe,s=new pe,a=new Et,o=new lc({depthPacking:Af}),c=new cc,l={},h=t.maxTextureSize,u={[ca]:An,[An]:ca,[St]:St},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pe},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let f=new Pt;f.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new z(f,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let x=this.type;function g(M,D){let F=e.update(v);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new bi(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(D,null,F,d,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(D,null,F,p,v,null)}function y(M,D,F,L){let V=null,H=F.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(H!==void 0)V=H;else if(V=F.isPointLight===!0?c:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let U=V.uuid,Z=D.uuid,N=l[U];N===void 0&&(N={},l[U]=N);let X=N[Z];X===void 0&&(X=V.clone(),N[Z]=X,D.addEventListener("dispose",A)),V=X}return V.visible=D.visible,V.wireframe=D.wireframe,V.side=L===Ti?D.shadowSide!==null?D.shadowSide:D.side:D.shadowSide!==null?D.shadowSide:u[D.side],V.alphaMap=D.alphaMap,V.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,V.map=D.map,V.clipShadows=D.clipShadows,V.clippingPlanes=D.clippingPlanes,V.clipIntersection=D.clipIntersection,V.displacementMap=D.displacementMap,V.displacementScale=D.displacementScale,V.displacementBias=D.displacementBias,V.wireframeLinewidth=D.wireframeLinewidth,V.linewidth=D.linewidth,F.isPointLight===!0&&V.isMeshDistanceMaterial===!0&&(i.properties.get(V).light=F),V}function E(M,D,F,L,V){if(M.visible===!1)return;if(M.layers.test(D.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&V===Ti)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld);let U=e.update(M),Z=M.material;if(Array.isArray(Z)){let N=U.groups;for(let X=0,ee=N.length;X<ee;X++){let he=N[X],ae=Z[he.materialIndex];if(ae&&ae.visible){let Ee=y(M,ae,L,V);M.onBeforeShadow(i,M,D,F,U,Ee,he),i.renderBufferDirect(F,null,U,Ee,M,he),M.onAfterShadow(i,M,D,F,U,Ee,he)}}}else if(Z.visible){let N=y(M,Z,L,V);M.onBeforeShadow(i,M,D,F,U,N,null),i.renderBufferDirect(F,null,U,N,M,null),M.onAfterShadow(i,M,D,F,U,N,null)}}let H=M.children;for(let U=0,Z=H.length;U<Z;U++)E(H[U],D,F,L,V)}function A(M){M.target.removeEventListener("dispose",A);for(let D in l){let F=l[D],L=M.target.uuid;L in F&&(F[L].dispose(),delete F[L])}}this.render=function(M,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let L=i.getRenderTarget(),V=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),U=i.state;U.setBlending(er),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let Z=x!==Ti&&this.type===Ti,N=x===Ti&&this.type!==Ti;for(let X=0,ee=M.length;X<ee;X++){let he=M[X],ae=he.shadow;if(ae===void 0){Je("WebGLShadowMap:",he,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;r.copy(ae.mapSize);let Ee=ae.getFrameExtents();if(r.multiply(Ee),s.copy(ae.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/Ee.x),r.x=s.x*Ee.x,ae.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/Ee.y),r.y=s.y*Ee.y,ae.mapSize.y=s.y)),ae.map===null||Z===!0||N===!0){let Se=this.type!==Ti?{minFilter:_i,magFilter:_i}:{};ae.map!==null&&ae.map.dispose(),ae.map=new bi(r.x,r.y,Se),ae.map.texture.name=he.name+".shadowMap",ae.camera.updateProjectionMatrix()}i.setRenderTarget(ae.map),i.clear();let de=ae.getViewportCount();for(let Se=0;Se<de;Se++){let fe=ae.getViewport(Se);a.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),U.viewport(a),ae.updateMatrices(he,Se),n=ae.getFrustum(),E(D,F,ae.camera,he,this.type)}ae.isPointLightShadow!==!0&&this.type===Ti&&g(ae,F),ae.needsUpdate=!1}x=this.type,m.needsUpdate=!1,i.setRenderTarget(L,V,H)}}var xv={[Mc]:Ec,[Sc]:Ac,[Tc]:Rc,[Po]:wc,[Ec]:Mc,[Ac]:Sc,[Rc]:Tc,[wc]:Po};function _v(i,e){let t=new function(){let b=!1,C=new Et,j=null,O=new Et(0,0,0,0);return{setMask:function(te){j===te||b||(i.colorMask(te,te,te,te),j=te)},setLocked:function(te){b=te},setClear:function(te,$,K,ne,ce){ce===!0&&(te*=ne,$*=ne,K*=ne),C.set(te,$,K,ne),O.equals(C)===!1&&(i.clearColor(te,$,K,ne),O.copy(C))},reset:function(){b=!1,j=null,O.set(-1,0,0,0)}}},n=new function(){let b=!1,C=!1,j=null,O=null,te=null;return{setReversed:function($){if(C!==$){let K=e.get("EXT_clip_control");$?K.clipControlEXT(K.LOWER_LEFT_EXT,K.ZERO_TO_ONE_EXT):K.clipControlEXT(K.LOWER_LEFT_EXT,K.NEGATIVE_ONE_TO_ONE_EXT),C=$;let ne=te;te=null,this.setClear(ne)}},getReversed:function(){return C},setTest:function($){$?ge(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function($){j===$||b||(i.depthMask($),j=$)},setFunc:function($){if(C&&($=xv[$]),O!==$){switch($){case Mc:i.depthFunc(i.NEVER);break;case Ec:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case Po:i.depthFunc(i.LEQUAL);break;case Tc:i.depthFunc(i.EQUAL);break;case wc:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}O=$}},setLocked:function($){b=$},setClear:function($){te!==$&&(C&&($=1-$),i.clearDepth($),te=$)},reset:function(){b=!1,j=null,O=null,te=null,C=!1}}},r=new function(){let b=!1,C=null,j=null,O=null,te=null,$=null,K=null,ne=null,ce=null;return{setTest:function(ue){b||(ue?ge(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(ue){C===ue||b||(i.stencilMask(ue),C=ue)},setFunc:function(ue,Ce,Oe){j===ue&&O===Ce&&te===Oe||(i.stencilFunc(ue,Ce,Oe),j=ue,O=Ce,te=Oe)},setOp:function(ue,Ce,Oe){$===ue&&K===Ce&&ne===Oe||(i.stencilOp(ue,Ce,Oe),$=ue,K=Ce,ne=Oe)},setLocked:function(ue){b=ue},setClear:function(ue){ce!==ue&&(i.clearStencil(ue),ce=ue)},reset:function(){b=!1,C=null,j=null,O=null,te=null,$=null,K=null,ne=null,ce=null}}},s=new WeakMap,a=new WeakMap,o={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,x=null,g=null,y=null,E=new et(0,0,0),A=0,M=!1,D=null,F=null,L=null,V=null,H=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,N=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(X)[1]),Z=N>=1):X.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),Z=N>=2);let ee=null,he={},ae=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),de=new Et().fromArray(ae),Se=new Et().fromArray(Ee);function fe(b,C,j,O){let te=new Uint8Array(4),$=i.createTexture();i.bindTexture(b,$),i.texParameteri(b,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(b,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let K=0;K<j;K++)b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?i.texImage3D(C,0,i.RGBA,1,1,O,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(C+K,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return $}let re={};function ge(b){o[b]!==!0&&(i.enable(b),o[b]=!0)}function ye(b){o[b]!==!1&&(i.disable(b),o[b]=!1)}re[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),t.setClear(0,0,0,1),n.setClear(1),r.setClear(0),ge(i.DEPTH_TEST),n.setFunc(Po),T(!1),W(pu),ge(i.CULL_FACE),w(er);let Fe={[ha]:i.FUNC_ADD,[Yp]:i.FUNC_SUBTRACT,[Zp]:i.FUNC_REVERSE_SUBTRACT};Fe[Jp]=i.MIN,Fe[Kp]=i.MAX;let $e={[Qp]:i.ZERO,[ef]:i.ONE,[tf]:i.SRC_COLOR,[rf]:i.SRC_ALPHA,[hf]:i.SRC_ALPHA_SATURATE,[lf]:i.DST_COLOR,[af]:i.DST_ALPHA,[nf]:i.ONE_MINUS_SRC_COLOR,[sf]:i.ONE_MINUS_SRC_ALPHA,[cf]:i.ONE_MINUS_DST_COLOR,[of]:i.ONE_MINUS_DST_ALPHA,[uf]:i.CONSTANT_COLOR,[df]:i.ONE_MINUS_CONSTANT_COLOR,[pf]:i.CONSTANT_ALPHA,[ff]:i.ONE_MINUS_CONSTANT_ALPHA};function w(b,C,j,O,te,$,K,ne,ce,ue){if(b!==er){if(d===!1&&(ge(i.BLEND),d=!0),b===qp)te=te||C,$=$||j,K=K||O,C===f&&te===x||(i.blendEquationSeparate(Fe[C],Fe[te]),f=C,x=te),j===v&&O===m&&$===g&&K===y||(i.blendFuncSeparate($e[j],$e[O],$e[$],$e[K]),v=j,m=O,g=$,y=K),ne.equals(E)!==!1&&ce===A||(i.blendColor(ne.r,ne.g,ne.b,ce),E.copy(ne),A=ce),p=b,M=!1;else if(b!==p||ue!==M){if(f===ha&&x===ha||(i.blendEquation(i.FUNC_ADD),f=ha,x=ha),ue)switch(b){case Ro:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case mu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",b)}else switch(b){case Ro:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mu:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gu:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",b)}v=null,m=null,g=null,y=null,E.set(0,0,0),A=0,p=b,M=ue}}else d===!0&&(ye(i.BLEND),d=!1)}function T(b){D!==b&&(b?i.frontFace(i.CW):i.frontFace(i.CCW),D=b)}function W(b){b!==Xp?(ge(i.CULL_FACE),b!==F&&(b===pu?i.cullFace(i.BACK):b===$p?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),F=b}function k(b,C,j){b?(ge(i.POLYGON_OFFSET_FILL),V===C&&H===j||(i.polygonOffset(C,j),V=C,H=j)):ye(i.POLYGON_OFFSET_FILL)}return{buffers:{color:t,depth:n,stencil:r},enable:ge,disable:ye,bindFramebuffer:function(b,C){return c[b]!==C&&(i.bindFramebuffer(b,C),c[b]=C,b===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=C),b===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=C),!0)},drawBuffers:function(b,C){let j=h,O=!1;if(b){j=l.get(C),j===void 0&&(j=[],l.set(C,j));let te=b.textures;if(j.length!==te.length||j[0]!==i.COLOR_ATTACHMENT0){for(let $=0,K=te.length;$<K;$++)j[$]=i.COLOR_ATTACHMENT0+$;j.length=te.length,O=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,O=!0);O&&i.drawBuffers(j)},useProgram:function(b){return u!==b&&(i.useProgram(b),u=b,!0)},setBlending:w,setMaterial:function(b,C){b.side===St?ye(i.CULL_FACE):ge(i.CULL_FACE);let j=b.side===An;C&&(j=!j),T(j),b.blending===Ro&&b.transparent===!1?w(er):w(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),n.setFunc(b.depthFunc),n.setTest(b.depthTest),n.setMask(b.depthWrite),t.setMask(b.colorWrite);let O=b.stencilWrite;r.setTest(O),O&&(r.setMask(b.stencilWriteMask),r.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),r.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),k(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:T,setCullFace:W,setLineWidth:function(b){b!==L&&(Z&&i.lineWidth(b),L=b)},setPolygonOffset:k,setScissorTest:function(b){b?ge(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)},activeTexture:function(b){b===void 0&&(b=i.TEXTURE0+U-1),ee!==b&&(i.activeTexture(b),ee=b)},bindTexture:function(b,C,j){j===void 0&&(j=ee===null?i.TEXTURE0+U-1:ee);let O=he[j];O===void 0&&(O={type:void 0,texture:void 0},he[j]=O),O.type===b&&O.texture===C||(ee!==j&&(i.activeTexture(j),ee=j),i.bindTexture(b,C||re[b]),O.type=b,O.texture=C)},unbindTexture:function(){let b=he[ee];b!==void 0&&b.type!==void 0&&(i.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)},compressedTexImage2D:function(){try{i.compressedTexImage2D(...arguments)}catch(b){b("WebGLState:",b)}},compressedTexImage3D:function(){try{i.compressedTexImage3D(...arguments)}catch(b){b("WebGLState:",b)}},texImage2D:function(){try{i.texImage2D(...arguments)}catch(b){b("WebGLState:",b)}},texImage3D:function(){try{i.texImage3D(...arguments)}catch(b){b("WebGLState:",b)}},updateUBOMapping:function(b,C){let j=a.get(C);j===void 0&&(j=new WeakMap,a.set(C,j));let O=j.get(b);O===void 0&&(O=i.getUniformBlockIndex(C,b.name),j.set(b,O))},uniformBlockBinding:function(b,C){let j=a.get(C).get(b);s.get(C)!==j&&(i.uniformBlockBinding(C,j,b.__bindingPointIndex),s.set(C,j))},texStorage2D:function(){try{i.texStorage2D(...arguments)}catch(b){b("WebGLState:",b)}},texStorage3D:function(){try{i.texStorage3D(...arguments)}catch(b){b("WebGLState:",b)}},texSubImage2D:function(){try{i.texSubImage2D(...arguments)}catch(b){b("WebGLState:",b)}},texSubImage3D:function(){try{i.texSubImage3D(...arguments)}catch(b){b("WebGLState:",b)}},compressedTexSubImage2D:function(){try{i.compressedTexSubImage2D(...arguments)}catch(b){b("WebGLState:",b)}},compressedTexSubImage3D:function(){try{i.compressedTexSubImage3D(...arguments)}catch(b){b("WebGLState:",b)}},scissor:function(b){de.equals(b)===!1&&(i.scissor(b.x,b.y,b.z,b.w),de.copy(b))},viewport:function(b){Se.equals(b)===!1&&(i.viewport(b.x,b.y,b.z,b.w),Se.copy(b))},reset:function(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),n.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),o={},ee=null,he={},c={},l=new WeakMap,h=[],u=null,d=!1,p=null,f=null,v=null,m=null,x=null,g=null,y=null,E=new et(0,0,0),A=0,M=!1,D=null,F=null,L=null,V=null,H=null,de.set(0,0,i.canvas.width,i.canvas.height),Se.set(0,0,i.canvas.width,i.canvas.height),t.reset(),n.reset(),r.reset()}}}function bv(i,e,t,n,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),l=new pe,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(w,T){return p?new OffscreenCanvas(w,T):Ys("canvas")}function v(w,T,W){let k=1,b=$e(w);if((b.width>W||b.height>W)&&(k=W/Math.max(b.width,b.height)),k<1){if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let C=Math.floor(k*b.width),j=Math.floor(k*b.height);u===void 0&&(u=f(C,j));let O=T?f(C,j):u;return O.width=C,O.height=j,O.getContext("2d").drawImage(w,0,0,C,j),Je("WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+C+"x"+j+")."),O}return"data"in w&&Je("WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),w}return w}function m(w){return w.generateMipmaps}function x(w){i.generateMipmap(w)}function g(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,T,W,k,b=!1){if(w!==null){if(i[w]!==void 0)return i[w];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let C=T;if(T===i.RED&&(W===i.FLOAT&&(C=i.R32F),W===i.HALF_FLOAT&&(C=i.R16F),W===i.UNSIGNED_BYTE&&(C=i.R8)),T===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(C=i.R8UI),W===i.UNSIGNED_SHORT&&(C=i.R16UI),W===i.UNSIGNED_INT&&(C=i.R32UI),W===i.BYTE&&(C=i.R8I),W===i.SHORT&&(C=i.R16I),W===i.INT&&(C=i.R32I)),T===i.RG&&(W===i.FLOAT&&(C=i.RG32F),W===i.HALF_FLOAT&&(C=i.RG16F),W===i.UNSIGNED_BYTE&&(C=i.RG8)),T===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(C=i.RG8UI),W===i.UNSIGNED_SHORT&&(C=i.RG16UI),W===i.UNSIGNED_INT&&(C=i.RG32UI),W===i.BYTE&&(C=i.RG8I),W===i.SHORT&&(C=i.RG16I),W===i.INT&&(C=i.RG32I)),T===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(C=i.RGB8UI),W===i.UNSIGNED_SHORT&&(C=i.RGB16UI),W===i.UNSIGNED_INT&&(C=i.RGB32UI),W===i.BYTE&&(C=i.RGB8I),W===i.SHORT&&(C=i.RGB16I),W===i.INT&&(C=i.RGB32I)),T===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(C=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(C=i.RGBA16UI),W===i.UNSIGNED_INT&&(C=i.RGBA32UI),W===i.BYTE&&(C=i.RGBA8I),W===i.SHORT&&(C=i.RGBA16I),W===i.INT&&(C=i.RGBA32I)),T===i.RGB&&(W===i.UNSIGNED_INT_5_9_9_9_REV&&(C=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(C=i.R11F_G11F_B10F)),T===i.RGBA){let j=b?eo:_t.getTransfer(k);W===i.FLOAT&&(C=i.RGBA32F),W===i.HALF_FLOAT&&(C=i.RGBA16F),W===i.UNSIGNED_BYTE&&(C=j===Ct?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(C=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(C=i.RGB5_A1)}return C!==i.R16F&&C!==i.R32F&&C!==i.RG16F&&C!==i.RG32F&&C!==i.RGBA16F&&C!==i.RGBA32F||e.get("EXT_color_buffer_float"),C}function E(w,T){let W;return w?T===null||T===ts||T===fa?W=i.DEPTH24_STENCIL8:T===oi?W=i.DEPTH32F_STENCIL8:T===pa&&(W=i.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===ts||T===fa?W=i.DEPTH_COMPONENT24:T===oi?W=i.DEPTH_COMPONENT32F:T===pa&&(W=i.DEPTH_COMPONENT16),W}function A(w,T){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==_i&&w.minFilter!==Zn?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function M(w){let T=w.target;T.removeEventListener("dispose",M),(function(W){let k=n.get(W);if(k.__webglInit===void 0)return;let b=W.source,C=d.get(b);if(C){let j=C[k.__cacheKey];j.usedTimes--,j.usedTimes===0&&F(W),Object.keys(C).length===0&&d.delete(b)}n.remove(W)})(T),T.isVideoTexture&&h.delete(T)}function D(w){let T=w.target;T.removeEventListener("dispose",D),(function(W){let k=n.get(W);if(W.depthTexture&&(W.depthTexture.dispose(),n.remove(W.depthTexture)),W.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(k.__webglFramebuffer[C]))for(let j=0;j<k.__webglFramebuffer[C].length;j++)i.deleteFramebuffer(k.__webglFramebuffer[C][j]);else i.deleteFramebuffer(k.__webglFramebuffer[C]);k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[C])}else{if(Array.isArray(k.__webglFramebuffer))for(let C=0;C<k.__webglFramebuffer.length;C++)i.deleteFramebuffer(k.__webglFramebuffer[C]);else i.deleteFramebuffer(k.__webglFramebuffer);if(k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let C=0;C<k.__webglColorRenderbuffer.length;C++)k.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[C]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}let b=W.textures;for(let C=0,j=b.length;C<j;C++){let O=n.get(b[C]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),a.memory.textures--),n.remove(b[C])}n.remove(W)})(T)}function F(w){let T=n.get(w);i.deleteTexture(T.__webglTexture);let W=w.source;delete d.get(W)[T.__cacheKey],a.memory.textures--}let L=0;function V(w,T){let W=n.get(w);if(w.isVideoTexture&&(function(k){let b=a.render.frame;h.get(k)!==b&&(h.set(k,b),k.update())})(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&W.__version!==w.version){let k=w.image;if(k===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else{if(k.complete!==!1)return void he(W,w,T);Je("WebGLRenderer: Texture marked for update but image is incomplete")}}else w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+T)}let H={[Xr]:i.REPEAT,[Mr]:i.CLAMP_TO_EDGE,[Bl]:i.MIRRORED_REPEAT},U={[_i]:i.NEAREST,[Sf]:i.NEAREST_MIPMAP_NEAREST,[Lo]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[Ic]:i.LINEAR_MIPMAP_NEAREST,[es]:i.LINEAR_MIPMAP_LINEAR},Z={[Pf]:i.NEVER,[kf]:i.ALWAYS,[If]:i.LESS,[Qu]:i.LEQUAL,[Lf]:i.EQUAL,[Uf]:i.GEQUAL,[Df]:i.GREATER,[Nf]:i.NOTEQUAL};function N(w,T){if(T.type!==oi||e.has("OES_texture_float_linear")!==!1||T.magFilter!==Zn&&T.magFilter!==Ic&&T.magFilter!==Lo&&T.magFilter!==es&&T.minFilter!==Zn&&T.minFilter!==Ic&&T.minFilter!==Lo&&T.minFilter!==es||Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,H[T.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,H[T.wrapT]),w!==i.TEXTURE_3D&&w!==i.TEXTURE_2D_ARRAY||i.texParameteri(w,i.TEXTURE_WRAP_R,H[T.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,U[T.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_i||T.minFilter!==Lo&&T.minFilter!==es||T.type===oi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function X(w,T){let W=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",M));let k=T.source,b=d.get(k);b===void 0&&(b={},d.set(k,b));let C=(function(j){let O=[];return O.push(j.wrapS),O.push(j.wrapT),O.push(j.wrapR||0),O.push(j.magFilter),O.push(j.minFilter),O.push(j.anisotropy),O.push(j.internalFormat),O.push(j.format),O.push(j.type),O.push(j.generateMipmaps),O.push(j.premultiplyAlpha),O.push(j.flipY),O.push(j.unpackAlignment),O.push(j.colorSpace),O.join()})(T);if(C!==w.__cacheKey){b[C]===void 0&&(b[C]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),b[C].usedTimes++;let j=b[w.__cacheKey];j!==void 0&&(b[w.__cacheKey].usedTimes--,j.usedTimes===0&&F(T)),w.__cacheKey=C,w.__webglTexture=b[C].texture}return W}function ee(w,T,W){return Math.floor(Math.floor(w/W)/T)}function he(w,T,W){let k=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(k=i.TEXTURE_3D);let b=X(w,T),C=T.source;t.bindTexture(k,w.__webglTexture,i.TEXTURE0+W);let j=n.get(C);if(C.version!==j.__version||b===!0){t.activeTexture(i.TEXTURE0+W);let O=_t.getPrimaries(_t.workingColorSpace),te=T.colorSpace===is?null:_t.getPrimaries(T.colorSpace),$=T.colorSpace===is||O===te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let K=v(T.image,!1,r.maxTextureSize);K=Fe(T,K);let ne=s.convert(T.format,T.colorSpace),ce=s.convert(T.type),ue,Ce=y(T.internalFormat,ne,ce,T.colorSpace,T.isVideoTexture);N(k,T);let Oe=T.mipmaps,Xe=T.isVideoTexture!==!0,st=j.__version===void 0||b===!0,rt=C.dataReady,vt=A(T,K);if(T.isDepthTexture)Ce=E(T.format===No,T.type),st&&(Xe?t.texStorage2D(i.TEXTURE_2D,1,Ce,K.width,K.height):t.texImage2D(i.TEXTURE_2D,0,Ce,K.width,K.height,0,ne,ce,null));else if(T.isDataTexture)if(Oe.length>0){Xe&&st&&t.texStorage2D(i.TEXTURE_2D,vt,Ce,Oe[0].width,Oe[0].height);for(let ke=0,Ke=Oe.length;ke<Ke;ke++)ue=Oe[ke],Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,ke,0,0,ue.width,ue.height,ne,ce,ue.data):t.texImage2D(i.TEXTURE_2D,ke,Ce,ue.width,ue.height,0,ne,ce,ue.data);T.generateMipmaps=!1}else Xe?(st&&t.texStorage2D(i.TEXTURE_2D,vt,Ce,K.width,K.height),rt&&(function(ke,Ke,it,Ut){let Ae=ke.updateRanges;if(Ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ke.width,Ke.height,it,Ut,Ke.data);else{Ae.sort((kt,Vt)=>kt.start-Vt.start);let xt=0;for(let kt=1;kt<Ae.length;kt++){let Vt=Ae[xt],G=Ae[kt],ui=Vt.start+Vt.count,di=ee(G.start,Ke.width,4),Lt=ee(Vt.start,Ke.width,4);G.start<=ui+1&&di===Lt&&ee(G.start+G.count-1,Ke.width,4)===di?Vt.count=Math.max(Vt.count,G.start+G.count-Vt.start):(++xt,Ae[xt]=G)}Ae.length=xt+1;let bt=i.getParameter(i.UNPACK_ROW_LENGTH),Xn=i.getParameter(i.UNPACK_SKIP_PIXELS),an=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,Ke.width);for(let kt=0,Vt=Ae.length;kt<Vt;kt++){let G=Ae[kt],ui=Math.floor(G.start/4),di=Math.ceil(G.count/4),Lt=ui%Ke.width,cr=Math.floor(ui/Ke.width),Nr=di;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,cr),t.texSubImage2D(i.TEXTURE_2D,0,Lt,cr,Nr,1,it,Ut,Ke.data)}ke.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,bt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Xn),i.pixelStorei(i.UNPACK_SKIP_ROWS,an)}})(T,K,ne,ce)):t.texImage2D(i.TEXTURE_2D,0,Ce,K.width,K.height,0,ne,ce,K.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Xe&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ce,Oe[0].width,Oe[0].height,K.depth);for(let ke=0,Ke=Oe.length;ke<Ke;ke++)if(ue=Oe[ke],T.format!==li)if(ne!==null)if(Xe){if(rt)if(T.layerUpdates.size>0){let it=sd(ue.width,ue.height,T.format,T.type);for(let Ut of T.layerUpdates){let Ae=ue.data.subarray(Ut*it/ue.data.BYTES_PER_ELEMENT,(Ut+1)*it/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ke,0,0,Ut,ue.width,ue.height,1,ne,Ae)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ke,0,0,0,ue.width,ue.height,K.depth,ne,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ke,Ce,ue.width,ue.height,K.depth,0,ue.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?rt&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ke,0,0,0,ue.width,ue.height,K.depth,ne,ce,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ke,Ce,ue.width,ue.height,K.depth,0,ne,ce,ue.data)}else{Xe&&st&&t.texStorage2D(i.TEXTURE_2D,vt,Ce,Oe[0].width,Oe[0].height);for(let ke=0,Ke=Oe.length;ke<Ke;ke++)ue=Oe[ke],T.format!==li?ne!==null?Xe?rt&&t.compressedTexSubImage2D(i.TEXTURE_2D,ke,0,0,ue.width,ue.height,ne,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ke,Ce,ue.width,ue.height,0,ue.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,ke,0,0,ue.width,ue.height,ne,ce,ue.data):t.texImage2D(i.TEXTURE_2D,ke,Ce,ue.width,ue.height,0,ne,ce,ue.data)}else if(T.isDataArrayTexture)if(Xe){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ce,K.width,K.height,K.depth),rt)if(T.layerUpdates.size>0){let ke=sd(K.width,K.height,T.format,T.type);for(let Ke of T.layerUpdates){let it=K.data.subarray(Ke*ke/K.data.BYTES_PER_ELEMENT,(Ke+1)*ke/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ke,K.width,K.height,1,ne,ce,it)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ne,ce,K.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,K.width,K.height,K.depth,0,ne,ce,K.data);else if(T.isData3DTexture)Xe?(st&&t.texStorage3D(i.TEXTURE_3D,vt,Ce,K.width,K.height,K.depth),rt&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ne,ce,K.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,K.width,K.height,K.depth,0,ne,ce,K.data);else if(T.isFramebufferTexture){if(st)if(Xe)t.texStorage2D(i.TEXTURE_2D,vt,Ce,K.width,K.height);else{let ke=K.width,Ke=K.height;for(let it=0;it<vt;it++)t.texImage2D(i.TEXTURE_2D,it,Ce,ke,Ke,0,ne,ce,null),ke>>=1,Ke>>=1}}else if(Oe.length>0){if(Xe&&st){let ke=$e(Oe[0]);t.texStorage2D(i.TEXTURE_2D,vt,Ce,ke.width,ke.height)}for(let ke=0,Ke=Oe.length;ke<Ke;ke++)ue=Oe[ke],Xe?rt&&t.texSubImage2D(i.TEXTURE_2D,ke,0,0,ne,ce,ue):t.texImage2D(i.TEXTURE_2D,ke,Ce,ne,ce,ue);T.generateMipmaps=!1}else if(Xe){if(st){let ke=$e(K);t.texStorage2D(i.TEXTURE_2D,vt,Ce,ke.width,ke.height)}rt&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,ce,K)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ne,ce,K);m(T)&&x(k),j.__version=C.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function ae(w,T,W,k,b,C){let j=s.convert(W.format,W.colorSpace),O=s.convert(W.type),te=y(W.internalFormat,j,O,W.colorSpace),$=n.get(T),K=n.get(W);if(K.__renderTarget=T,!$.__hasExternalTextures){let ne=Math.max(1,T.width>>C),ce=Math.max(1,T.height>>C);b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY?t.texImage3D(b,C,te,ne,ce,T.depth,0,j,O,null):t.texImage2D(b,C,te,ne,ce,0,j,O,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ye(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,b,K.__webglTexture,0,ge(T)):(b===i.TEXTURE_2D||b>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,b,K.__webglTexture,C),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(w,T,W){if(i.bindRenderbuffer(i.RENDERBUFFER,w),T.depthBuffer){let k=T.depthTexture,b=k&&k.isDepthTexture?k.type:null,C=E(T.stencilBuffer,b),j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=ge(T);ye(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,C,T.width,T.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,O,C,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,C,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,w)}else{let k=T.textures;for(let b=0;b<k.length;b++){let C=k[b],j=s.convert(C.format,C.colorSpace),O=s.convert(C.type),te=y(C.internalFormat,j,O,C.colorSpace),$=ge(T);W&&ye(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,$,te,T.width,T.height):ye(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,te,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,te,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!T.depthTexture||!T.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(T.depthTexture);W.__renderTarget=T,W.__webglTexture&&T.depthTexture.image.width===T.width&&T.depthTexture.image.height===T.height||(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),V(T.depthTexture,0);let k=W.__webglTexture,b=ge(T);if(T.depthTexture.format===Do)ye(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,k,0);else{if(T.depthTexture.format!==No)throw new Error("Unknown depthTexture format");ye(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0,b):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,k,0)}}function Se(w){let T=n.get(w),W=w.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),k){let b=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,k.removeEventListener("dispose",b)};k.addEventListener("dispose",b),T.__depthDisposeCallback=b}T.__boundDepthTexture=k}if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");let k=w.texture.mipmaps;k&&k.length>0?de(T.__webglFramebuffer[0],w):de(T.__webglFramebuffer,w)}else if(W){T.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[k]),T.__webglDepthbuffer[k]===void 0)T.__webglDepthbuffer[k]=i.createRenderbuffer(),Ee(T.__webglDepthbuffer[k],w,!1);else{let b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=T.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,C)}}else{let k=w.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),Ee(T.__webglDepthbuffer,w,!1);else{let b=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,C=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,C),i.framebufferRenderbuffer(i.FRAMEBUFFER,b,i.RENDERBUFFER,C)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}let fe=[],re=[];function ge(w){return Math.min(r.maxSamples,w.samples)}function ye(w){let T=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Fe(w,T){let W=w.colorSpace,k=w.format,b=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||W!==$r&&W!==is&&(_t.getTransfer(W)===Ct?k===li&&b===wi||Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",W)),T}function $e(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=function(){let w=L;return w>=r.maxTextures&&Je("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w},this.resetTextureUnits=function(){L=0},this.setTexture2D=V,this.setTexture2DArray=function(w,T){let W=n.get(w);w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version?he(W,w,T):(w.isExternalTexture&&(W.__webglTexture=w.sourceTexture?w.sourceTexture:null),t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+T))},this.setTexture3D=function(w,T){let W=n.get(w);w.isRenderTargetTexture===!1&&w.version>0&&W.__version!==w.version?he(W,w,T):t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+T)},this.setTextureCube=function(w,T){let W=n.get(w);w.version>0&&W.__version!==w.version?(function(k,b,C){if(b.image.length!==6)return;let j=X(k,b),O=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+C);let te=n.get(O);if(O.version!==te.__version||j===!0){t.activeTexture(i.TEXTURE0+C);let $=_t.getPrimaries(_t.workingColorSpace),K=b.colorSpace===is?null:_t.getPrimaries(b.colorSpace),ne=b.colorSpace===is||$===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let ce=b.isCompressedTexture||b.image[0].isCompressedTexture,ue=b.image[0]&&b.image[0].isDataTexture,Ce=[];for(let Ae=0;Ae<6;Ae++)Ce[Ae]=ce||ue?ue?b.image[Ae].image:b.image[Ae]:v(b.image[Ae],!0,r.maxCubemapSize),Ce[Ae]=Fe(b,Ce[Ae]);let Oe=Ce[0],Xe=s.convert(b.format,b.colorSpace),st=s.convert(b.type),rt=y(b.internalFormat,Xe,st,b.colorSpace),vt=b.isVideoTexture!==!0,ke=te.__version===void 0||j===!0,Ke=O.dataReady,it,Ut=A(b,Oe);if(N(i.TEXTURE_CUBE_MAP,b),ce){vt&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,rt,Oe.width,Oe.height);for(let Ae=0;Ae<6;Ae++){it=Ce[Ae].mipmaps;for(let xt=0;xt<it.length;xt++){let bt=it[xt];b.format!==li?Xe!==null?vt?Ke&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt,0,0,bt.width,bt.height,Xe,bt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt,rt,bt.width,bt.height,0,bt.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):vt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt,0,0,bt.width,bt.height,Xe,st,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt,rt,bt.width,bt.height,0,Xe,st,bt.data)}}}else{if(it=b.mipmaps,vt&&ke){it.length>0&&Ut++;let Ae=$e(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ut,rt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(ue){vt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Ce[Ae].width,Ce[Ae].height,Xe,st,Ce[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,rt,Ce[Ae].width,Ce[Ae].height,0,Xe,st,Ce[Ae].data);for(let xt=0;xt<it.length;xt++){let bt=it[xt].image[Ae].image;vt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt+1,0,0,bt.width,bt.height,Xe,st,bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt+1,rt,bt.width,bt.height,0,Xe,st,bt.data)}}else{vt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Xe,st,Ce[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,rt,Xe,st,Ce[Ae]);for(let xt=0;xt<it.length;xt++){let bt=it[xt];vt?Ke&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt+1,0,0,Xe,st,bt.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,xt+1,rt,Xe,st,bt.image[Ae])}}}m(b)&&x(i.TEXTURE_CUBE_MAP),te.__version=O.version,b.onUpdate&&b.onUpdate(b)}k.__version=b.version})(W,w,T):t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+T)},this.rebindTextures=function(w,T,W){let k=n.get(w);T!==void 0&&ae(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&Se(w)},this.setupRenderTarget=function(w){let T=w.texture,W=n.get(w),k=n.get(T);w.addEventListener("dispose",D);let b=w.textures,C=w.isWebGLCubeRenderTarget===!0,j=b.length>1;if(j||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=T.version,a.memory.textures++),C){W.__webglFramebuffer=[];for(let O=0;O<6;O++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[O]=[];for(let te=0;te<T.mipmaps.length;te++)W.__webglFramebuffer[O][te]=i.createFramebuffer()}else W.__webglFramebuffer[O]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let O=0;O<T.mipmaps.length;O++)W.__webglFramebuffer[O]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(j)for(let O=0,te=b.length;O<te;O++){let $=n.get(b[O]);$.__webglTexture===void 0&&($.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ye(w)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let O=0;O<b.length;O++){let te=b[O];W.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[O]);let $=s.convert(te.format,te.colorSpace),K=s.convert(te.type),ne=y(te.internalFormat,$,K,te.colorSpace,w.isXRRenderTarget===!0),ce=ge(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,ne,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,W.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(W.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(C){t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),N(i.TEXTURE_CUBE_MAP,T);for(let O=0;O<6;O++)if(T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)ae(W.__webglFramebuffer[O][te],w,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,te);else ae(W.__webglFramebuffer[O],w,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+O,0);m(T)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){for(let O=0,te=b.length;O<te;O++){let $=b[O],K=n.get($),ne=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ne=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,K.__webglTexture),N(ne,$),ae(W.__webglFramebuffer,w,$,i.COLOR_ATTACHMENT0+O,ne,0),m($)&&x(ne)}t.unbindTexture()}else{let O=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(O=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(O,k.__webglTexture),N(O,T),T.mipmaps&&T.mipmaps.length>0)for(let te=0;te<T.mipmaps.length;te++)ae(W.__webglFramebuffer[te],w,T,i.COLOR_ATTACHMENT0,O,te);else ae(W.__webglFramebuffer,w,T,i.COLOR_ATTACHMENT0,O,0);m(T)&&x(O),t.unbindTexture()}w.depthBuffer&&Se(w)},this.updateRenderTargetMipmap=function(w){let T=w.textures;for(let W=0,k=T.length;W<k;W++){let b=T[W];if(m(b)){let C=g(w),j=n.get(b).__webglTexture;t.bindTexture(C,j),x(C),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(w){if(w.samples>0){if(ye(w)===!1){let T=w.textures,W=w.width,k=w.height,b=i.COLOR_BUFFER_BIT,C=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=n.get(w),O=T.length>1;if(O)for(let $=0;$<T.length;$++)t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer);let te=w.texture.mipmaps;te&&te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let $=0;$<T.length;$++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(b|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(b|=i.STENCIL_BUFFER_BIT)),O){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,j.__webglColorRenderbuffer[$]);let K=n.get(T[$]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,K,0)}i.blitFramebuffer(0,0,W,k,0,0,W,k,b,i.NEAREST),c===!0&&(fe.length=0,re.length=0,fe.push(i.COLOR_ATTACHMENT0+$),w.depthBuffer&&w.resolveDepthBuffer===!1&&(fe.push(C),re.push(C),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let $=0;$<T.length;$++){t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,j.__webglColorRenderbuffer[$]);let K=n.get(T[$]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.TEXTURE_2D,K,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){let T=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}},this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ye}function Mv(i,e){return{convert:function(t,n=is){let r,s=_t.getTransfer(n);if(t===wi)return i.UNSIGNED_BYTE;if(t===Dc)return i.UNSIGNED_SHORT_4_4_4_4;if(t===Nc)return i.UNSIGNED_SHORT_5_5_5_1;if(t===_u)return i.UNSIGNED_INT_5_9_9_9_REV;if(t===bu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(t===yu)return i.BYTE;if(t===xu)return i.SHORT;if(t===pa)return i.UNSIGNED_SHORT;if(t===Lc)return i.INT;if(t===ts)return i.UNSIGNED_INT;if(t===oi)return i.FLOAT;if(t===ns)return i.HALF_FLOAT;if(t===Tf)return i.ALPHA;if(t===wf)return i.RGB;if(t===li)return i.RGBA;if(t===Do)return i.DEPTH_COMPONENT;if(t===No)return i.DEPTH_STENCIL;if(t===Uc)return i.RED;if(t===kc)return i.RED_INTEGER;if(t===Mu)return i.RG;if(t===Eu)return i.RG_INTEGER;if(t===Su)return i.RGBA_INTEGER;if(t===Bc||t===Fc||t===Oc||t===Hc)if(s===Ct){if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r===null)return null;if(t===Bc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(t===Fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(t===Oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(t===Hc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(r=e.get("WEBGL_compressed_texture_s3tc"),r===null)return null;if(t===Bc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(t===Fc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(t===Oc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(t===Hc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(t===Tu||t===wu||t===Au||t===Ru){if(r=e.get("WEBGL_compressed_texture_pvrtc"),r===null)return null;if(t===Tu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(t===wu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(t===Au)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(t===Ru)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(t===Cu||t===Pu||t===Iu){if(r=e.get("WEBGL_compressed_texture_etc"),r===null)return null;if(t===Cu||t===Pu)return s===Ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(t===Iu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}if(t===Lu||t===Du||t===Nu||t===Uu||t===ku||t===Bu||t===Fu||t===Ou||t===Hu||t===Gu||t===zu||t===Vu||t===Wu||t===ju){if(r=e.get("WEBGL_compressed_texture_astc"),r===null)return null;if(t===Lu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(t===Du)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(t===Nu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(t===Uu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(t===ku)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(t===Bu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(t===Fu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(t===Ou)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(t===Hu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(t===Gu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(t===zu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(t===Vu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(t===Wu)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(t===ju)return s===Ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}if(t===Xu||t===$u||t===qu){if(r=e.get("EXT_texture_compression_bptc"),r===null)return null;if(t===Xu)return s===Ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(t===$u)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(t===qu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(t===Yu||t===Zu||t===Ju||t===Ku){if(r=e.get("EXT_texture_compression_rgtc"),r===null)return null;if(t===Yu)return r.COMPRESSED_RED_RGTC1_EXT;if(t===Zu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(t===Ju)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(t===Ku)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return t===fa?i.UNSIGNED_INT_24_8:i[t]!==void 0?i[t]:null}}}var vd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new fo(e.texture);e.depthNear===t.depthNear&&e.depthFar===t.depthFar||(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nn({vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new z(new yt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yd=class extends Zi{constructor(e,t){super();let n=this,r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,f=null,v=typeof XRWebGLBinding<"u",m=new vd,x={},g=t.getContextAttributes(),y=null,E=null,A=[],M=[],D=new pe,F=null,L=new nn;L.viewport=new Et;let V=new nn;V.viewport=new Et;let H=[L,V],U=new _c,Z=null,N=null;function X(re){let ge=M.indexOf(re.inputSource);if(ge===-1)return;let ye=A[ge];ye!==void 0&&(ye.update(re.inputSource,re.frame,l||a),ye.dispatchEvent({type:re.type,data:re.inputSource}))}function ee(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",he);for(let re=0;re<A.length;re++){let ge=M[re];ge!==null&&(M[re]=null,A[re].disconnect(ge))}Z=null,N=null,m.reset();for(let re in x)delete x[re];e.setRenderTarget(y),p=null,d=null,u=null,r=null,E=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}function he(re){for(let ge=0;ge<re.removed.length;ge++){let ye=re.removed[ge],Fe=M.indexOf(ye);Fe>=0&&(M[Fe]=null,A[Fe].disconnect(ye))}for(let ge=0;ge<re.added.length;ge++){let ye=re.added[ge],Fe=M.indexOf(ye);if(Fe===-1){for(let w=0;w<A.length;w++){if(w>=M.length){M.push(ye),Fe=w;break}if(M[w]===null){M[w]=ye,Fe=w;break}}if(Fe===-1)break}let $e=A[Fe];$e&&$e.connect(ye)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ge=A[re];return ge===void 0&&(ge=new na,A[re]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(re){let ge=A[re];return ge===void 0&&(ge=new na,A[re]=ge),ge.getGripSpace()},this.getHand=function(re){let ge=A[re];return ge===void 0&&(ge=new na,A[re]=ge),ge.getHandSpace()},this.setFramebufferScaleFactor=function(re){s=re,n.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,n.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",he),g.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ye=null,Fe=null;g.depth&&(Fe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=g.stencil?No:Do,ye=g.stencil?fa:ts);let $e={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer($e),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new bi(d.textureWidth,d.textureHeight,{format:li,type:wi,depthTexture:new po(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new bi(p.framebufferWidth,p.framebufferHeight,{format:li,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),fe.setContext(r),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};let ae=new S,Ee=new S;function de(re,ge){ge===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ge.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ge=re.near,ye=re.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),U.near=V.near=L.near=ge,U.far=V.far=L.far=ye,Z===U.near&&N===U.far||(r.updateRenderState({depthNear:U.near,depthFar:U.far}),Z=U.near,N=U.far),U.layers.mask=6|re.layers.mask,L.layers.mask=3&U.layers.mask,V.layers.mask=5&U.layers.mask;let Fe=re.parent,$e=U.cameras;de(U,Fe);for(let w=0;w<$e.length;w++)de($e[w],Fe);$e.length===2?(function(w,T,W){ae.setFromMatrixPosition(T.matrixWorld),Ee.setFromMatrixPosition(W.matrixWorld);let k=ae.distanceTo(Ee),b=T.projectionMatrix.elements,C=W.projectionMatrix.elements,j=b[14]/(b[10]-1),O=b[14]/(b[10]+1),te=(b[9]+1)/b[5],$=(b[9]-1)/b[5],K=(b[8]-1)/b[0],ne=(C[8]+1)/C[0],ce=j*K,ue=j*ne,Ce=k/(-K+ne),Oe=Ce*-K;if(T.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Oe),w.translateZ(Ce),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),b[10]===-1)w.projectionMatrix.copy(T.projectionMatrix),w.projectionMatrixInverse.copy(T.projectionMatrixInverse);else{let Xe=j+Ce,st=O+Ce,rt=ce-Oe,vt=ue+(k-Oe),ke=te*O/st*Xe,Ke=$*O/st*Xe;w.projectionMatrix.makePerspective(rt,vt,ke,Ke,Xe,st),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}})(U,L,V):U.projectionMatrix.copy(L.projectionMatrix),(function(w,T,W){W===null?w.matrix.copy(T.matrixWorld):(w.matrix.copy(W.matrixWorld),w.matrix.invert(),w.matrix.multiply(T.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(T.projectionMatrix),w.projectionMatrixInverse.copy(T.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=2*Ks*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)})(re,U,Fe)},this.getCamera=function(){return U},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(re){c=re,d!==null&&(d.fixedFoveation=re),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(re){return x[re]};let Se=null,fe=new fm;fe.setAnimationLoop(function(re,ge){if(h=ge.getViewerPose(l||a),f=ge,h!==null){let ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Fe=!1;ye.length!==U.cameras.length&&(U.cameras.length=0,Fe=!0);for(let w=0;w<ye.length;w++){let T=ye[w],W=null;if(p!==null)W=p.getViewport(T);else{let b=u.getViewSubImage(d,T);W=b.viewport,w===0&&(e.setRenderTargetTextures(E,b.colorTexture,b.depthStencilTexture),e.setRenderTarget(E))}let k=H[w];k===void 0&&(k=new nn,k.layers.enable(w),k.viewport=new Et,H[w]=k),k.matrix.fromArray(T.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(T.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(W.x,W.y,W.width,W.height),w===0&&(U.matrix.copy(k.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Fe===!0&&U.cameras.push(k)}let $e=r.enabledFeatures;if($e&&$e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){u=n.getBinding();let w=u.getDepthInformation(ye[0]);w&&w.isValid&&w.texture&&m.init(w,r.renderState)}if($e&&$e.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let w=0;w<ye.length;w++){let T=ye[w].camera;if(T){let W=x[T];W||(W=new fo,x[T]=W);let k=u.getCameraImage(T);W.sourceTexture=k}}}}for(let ye=0;ye<A.length;ye++){let Fe=M[ye],$e=A[ye];Fe!==null&&$e!==void 0&&$e.update(Fe,ge,l||a)}Se&&Se(re,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),f=null}),this.setAnimationLoop=function(re){Se=re},this.dispose=function(){}}},os=new ai,Ev=new nt;function Sv(i,e){function t(r,s){r.matrixAutoUpdate===!0&&r.updateMatrix(),s.value.copy(r.matrix)}function n(r,s){r.opacity.value=s.opacity,s.color&&r.diffuse.value.copy(s.color),s.emissive&&r.emissive.value.copy(s.emissive).multiplyScalar(s.emissiveIntensity),s.map&&(r.map.value=s.map,t(s.map,r.mapTransform)),s.alphaMap&&(r.alphaMap.value=s.alphaMap,t(s.alphaMap,r.alphaMapTransform)),s.bumpMap&&(r.bumpMap.value=s.bumpMap,t(s.bumpMap,r.bumpMapTransform),r.bumpScale.value=s.bumpScale,s.side===An&&(r.bumpScale.value*=-1)),s.normalMap&&(r.normalMap.value=s.normalMap,t(s.normalMap,r.normalMapTransform),r.normalScale.value.copy(s.normalScale),s.side===An&&r.normalScale.value.negate()),s.displacementMap&&(r.displacementMap.value=s.displacementMap,t(s.displacementMap,r.displacementMapTransform),r.displacementScale.value=s.displacementScale,r.displacementBias.value=s.displacementBias),s.emissiveMap&&(r.emissiveMap.value=s.emissiveMap,t(s.emissiveMap,r.emissiveMapTransform)),s.specularMap&&(r.specularMap.value=s.specularMap,t(s.specularMap,r.specularMapTransform)),s.alphaTest>0&&(r.alphaTest.value=s.alphaTest);let a=e.get(s),o=a.envMap,c=a.envMapRotation;o&&(r.envMap.value=o,os.copy(c),os.x*=-1,os.y*=-1,os.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),r.envMapRotation.value.setFromMatrix4(Ev.makeRotationFromEuler(os)),r.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,r.reflectivity.value=s.reflectivity,r.ior.value=s.ior,r.refractionRatio.value=s.refractionRatio),s.lightMap&&(r.lightMap.value=s.lightMap,r.lightMapIntensity.value=s.lightMapIntensity,t(s.lightMap,r.lightMapTransform)),s.aoMap&&(r.aoMap.value=s.aoMap,r.aoMapIntensity.value=s.aoMapIntensity,t(s.aoMap,r.aoMapTransform))}return{refreshFogUniforms:function(r,s){s.color.getRGB(r.fogColor.value,nd(i)),s.isFog?(r.fogNear.value=s.near,r.fogFar.value=s.far):s.isFogExp2&&(r.fogDensity.value=s.density)},refreshMaterialUniforms:function(r,s,a,o,c){s.isMeshBasicMaterial||s.isMeshLambertMaterial?n(r,s):s.isMeshToonMaterial?(n(r,s),(function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)})(r,s)):s.isMeshPhongMaterial?(n(r,s),(function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)})(r,s)):s.isMeshStandardMaterial?(n(r,s),(function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),h.envMap&&(l.envMapIntensity.value=h.envMapIntensity)})(r,s),s.isMeshPhysicalMaterial&&(function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===An&&l.clearcoatNormalScale.value.negate())),h.dispersion>0&&(l.dispersion.value=h.dispersion),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))})(r,s,c)):s.isMeshMatcapMaterial?(n(r,s),(function(l,h){h.matcap&&(l.matcap.value=h.matcap)})(r,s)):s.isMeshDepthMaterial?n(r,s):s.isMeshDistanceMaterial?(n(r,s),(function(l,h){let u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far})(r,s)):s.isMeshNormalMaterial?n(r,s):s.isLineBasicMaterial?((function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))})(r,s),s.isLineDashedMaterial&&(function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale})(r,s)):s.isPointsMaterial?(function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s,a,o):s.isSpriteMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)})(r,s):s.isShadowMaterial?(r.color.value.copy(s.color),r.opacity.value=s.opacity):s.isShaderMaterial&&(s.uniformsNeedUpdate=!1)}}}function Tv(i,e,t,n){let r={},s={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(u,d,p,f){let v=u.value,m=d+"_"+p;if(f[m]===void 0)return f[m]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{let x=f[m];if(typeof v=="number"||typeof v=="boolean"){if(x!==v)return f[m]=v,!0}else if(x.equals(v)===!1)return x.copy(v),!0}return!1}function l(u){let d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Je("WebGLRenderer: Unsupported uniform value type.",u),d}function h(u){let d=u.target;d.removeEventListener("dispose",h);let p=a.indexOf(d.__bindingPointIndex);a.splice(p,1),i.deleteBuffer(r[d.id]),delete r[d.id],delete s[d.id]}return{bind:function(u,d){let p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=r[u.id];p===void 0&&((function(m){let x=m.uniforms,g=0,y=16;for(let A=0,M=x.length;A<M;A++){let D=Array.isArray(x[A])?x[A]:[x[A]];for(let F=0,L=D.length;F<L;F++){let V=D[F],H=Array.isArray(V.value)?V.value:[V.value];for(let U=0,Z=H.length;U<Z;U++){let N=l(H[U]),X=g%y,ee=X%N.boundary,he=X+ee;g+=ee,he!==0&&y-he<N.storage&&(g+=y-he),V.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=g,g+=N.storage}}}let E=g%y;E>0&&(g+=y-E),m.__size=g,m.__cache={}})(u),p=(function(m){let x=(function(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return ht("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0})();m.__bindingPointIndex=x;let g=i.createBuffer(),y=m.__size,E=m.usage;return i.bindBuffer(i.UNIFORM_BUFFER,g),i.bufferData(i.UNIFORM_BUFFER,y,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,g),g})(u),r[u.id]=p,u.addEventListener("dispose",h));let f=d.program;n.updateUBOMapping(u,f);let v=e.render.frame;s[u.id]!==v&&((function(m){let x=r[m.id],g=m.uniforms,y=m.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,A=g.length;E<A;E++){let M=Array.isArray(g[E])?g[E]:[g[E]];for(let D=0,F=M.length;D<F;D++){let L=M[D];if(c(L,E,D,y)===!0){let V=L.__offset,H=Array.isArray(L.value)?L.value:[L.value],U=0;for(let Z=0;Z<H.length;Z++){let N=H[Z],X=l(N);typeof N=="number"||typeof N=="boolean"?(L.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,V+U,L.__data)):N.isMatrix3?(L.__data[0]=N.elements[0],L.__data[1]=N.elements[1],L.__data[2]=N.elements[2],L.__data[3]=0,L.__data[4]=N.elements[3],L.__data[5]=N.elements[4],L.__data[6]=N.elements[5],L.__data[7]=0,L.__data[8]=N.elements[6],L.__data[9]=N.elements[7],L.__data[10]=N.elements[8],L.__data[11]=0):(N.toArray(L.__data,U),U+=X.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)})(u),s[u.id]=v)},dispose:function(){for(let u in r)i.deleteBuffer(r[u]);a=[],r={},s={}}}}var wv=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]),nr=null,va=class{constructor(e={}){let{canvas:t=Bf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e,p;if(this.isWebGLRenderer=!0,n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let f=new Set([Su,Eu,kc]),v=new Set([wi,ts,pa,fa,Dc,Nc]),m=new Uint32Array(4),x=new Int32Array(4),g=null,y=null,E=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,D=!1;this._outputColorSpace=Rt;let F=0,L=0,V=null,H=-1,U=null,Z=new Et,N=new Et,X=null,ee=new et(0),he=0,ae=t.width,Ee=t.height,de=1,Se=null,fe=null,re=new Et(0,0,ae,Ee),ge=new Et(0,0,ae,Ee),ye=!1,Fe=new Sr,$e=!1,w=!1,T=new nt,W=new S,k=new Et,b={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},C=!1;function j(){return V===null?de:1}let O,te,$,K,ne,ce,ue,Ce,Oe,Xe,st,rt,vt,ke,Ke,it,Ut,Ae,xt,bt,Xn,an,kt,Vt,G=n;function ui(R,J){return t.getContext(R,J)}try{let R={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"181"}`),t.addEventListener("webglcontextlost",cr,!1),t.addEventListener("webglcontextrestored",Nr,!1),t.addEventListener("webglcontextcreationerror",_s,!1),G===null){let J="webgl2";if(G=ui(J,R),G===null)throw ui(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw R("WebGLRenderer: "+R.message),R}function di(){O=new o1(G),O.init(),an=new Mv(G,O),te=new n1(G,O,e,an),$=new _v(G,O),te.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),K=new h1(G),ne=new hv,ce=new bv(G,O,$,ne,te,an,K),ue=new r1(M),Ce=new a1(M),Oe=new Jg(G),kt=new e1(G,Oe),Xe=new l1(G,Oe,K,kt),st=new d1(G,Xe,Oe,K),xt=new u1(G,te,ce),it=new i1(ne),rt=new cv(M,ue,Ce,O,te,kt,it),vt=new Sv(M,ne),ke=new dv,Ke=new vv(O),Ae=new Qg(M,ue,Ce,$,st,p,c),Ut=new yv(M,st,te),Vt=new Tv(G,K,te,$),bt=new t1(G,O,K),Xn=new c1(G,O,K),K.programs=rt.programs,M.capabilities=te,M.extensions=O,M.properties=ne,M.renderLists=ke,M.shadowMap=Ut,M.state=$,M.info=K}di();let Lt=new yd(M,G);function cr(R){R.preventDefault(),no("WebGLRenderer: Context Lost."),D=!0}function Nr(){no("WebGLRenderer: Context Restored."),D=!1;let R=K.autoReset,J=Ut.enabled,ie=Ut.autoUpdate,oe=Ut.needsUpdate,Q=Ut.type;di(),K.autoReset=R,Ut.enabled=J,Ut.autoUpdate=ie,Ut.needsUpdate=oe,Ut.type=Q}function _s(R){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Pa(R){let J=R.target;J.removeEventListener("dispose",Pa),(function(ie){(function(oe){let Q=ne.get(oe).programs;Q!==void 0&&(Q.forEach(function(me){rt.releaseProgram(me)}),oe.isShaderMaterial&&rt.releaseShaderCache(oe))})(ie),ne.remove(ie)})(J)}function bs(R,J,ie){R.transparent===!0&&R.side===St&&R.forceSinglePass===!1?(R.side=An,R.needsUpdate=!0,Fr(R,J,ie),R.side=ca,R.needsUpdate=!0,Fr(R,J,ie),R.side=St):Fr(R,J,ie)}this.xr=Lt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let R=O.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=O.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(R){R!==void 0&&(de=R,this.setSize(ae,Ee,!1))},this.getSize=function(R){return R.set(ae,Ee)},this.setSize=function(R,J,ie=!0){Lt.isPresenting?Je("WebGLRenderer: Can't change size while VR device is presenting."):(ae=R,Ee=J,t.width=Math.floor(R*de),t.height=Math.floor(J*de),ie===!0&&(t.style.width=R+"px",t.style.height=J+"px"),this.setViewport(0,0,R,J))},this.getDrawingBufferSize=function(R){return R.set(ae*de,Ee*de).floor()},this.setDrawingBufferSize=function(R,J,ie){ae=R,Ee=J,de=ie,t.width=Math.floor(R*ie),t.height=Math.floor(J*ie),this.setViewport(0,0,R,J)},this.getCurrentViewport=function(R){return R.copy(Z)},this.getViewport=function(R){return R.copy(re)},this.setViewport=function(R,J,ie,oe){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,J,ie,oe),$.viewport(Z.copy(re).multiplyScalar(de).round())},this.getScissor=function(R){return R.copy(ge)},this.setScissor=function(R,J,ie,oe){R.isVector4?ge.set(R.x,R.y,R.z,R.w):ge.set(R,J,ie,oe),$.scissor(N.copy(ge).multiplyScalar(de).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){$.setScissorTest(ye=R)},this.setOpaqueSort=function(R){Se=R},this.setTransparentSort=function(R){fe=R},this.getClearColor=function(R){return R.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor(...arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha(...arguments)},this.clear=function(R=!0,J=!0,ie=!0){let oe=0;if(R){let Q=!1;if(V!==null){let me=V.texture.format;Q=f.has(me)}if(Q){let me=V.texture.type,Pe=v.has(me),Ne=Ae.getClearColor(),He=Ae.getClearAlpha(),qe=Ne.r,je=Ne.g,Ye=Ne.b;Pe?(m[0]=qe,m[1]=je,m[2]=Ye,m[3]=He,G.clearBufferuiv(G.COLOR,0,m)):(x[0]=qe,x[1]=je,x[2]=Ye,x[3]=He,G.clearBufferiv(G.COLOR,0,x))}else oe|=G.COLOR_BUFFER_BIT}J&&(oe|=G.DEPTH_BUFFER_BIT),ie&&(oe|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",cr,!1),t.removeEventListener("webglcontextrestored",Nr,!1),t.removeEventListener("webglcontextcreationerror",_s,!1),Ae.dispose(),ke.dispose(),Ke.dispose(),ne.dispose(),ue.dispose(),Ce.dispose(),st.dispose(),kt.dispose(),Vt.dispose(),rt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",Ia),Lt.removeEventListener("sessionend",kr),Ot.stop()},this.renderBufferDirect=function(R,J,ie,oe,Q,me){J===null&&(J=b);let Pe=Q.isMesh&&Q.matrixWorld.determinant()<0,Ne=(function(Qe,It,jt,ot,Ze){It.isScene!==!0&&(It=b),ce.resetTextureUnits();let on=It.fog,Es=ot.isMeshStandardMaterial?It.environment:null,Hr=V===null?M.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:$r,Mn=(ot.isMeshStandardMaterial?Ce:ue).get(ot.envMap||Es),Un=ot.vertexColors===!0&&!!jt.attributes.color&&jt.attributes.color.itemSize===4,Hi=!!jt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),kn=!!jt.morphAttributes.position,Bn=!!jt.morphAttributes.normal,Gi=!!jt.morphAttributes.color,Na=tr;ot.toneMapped&&(V!==null&&V.isXRRenderTarget!==!0||(Na=M.toneMapping));let hr=jt.morphAttributes.position||jt.morphAttributes.normal||jt.morphAttributes.color,Ss=hr!==void 0?hr.length:0,pt=ne.get(ot),Sh=y.state.lights;if($e===!0&&(w===!0||Qe!==U)){let tn=Qe===U&&ot.id===H;it.setState(ot,Qe,tn)}let Fn=!1;ot.version===pt.__version?pt.needsLights&&pt.lightsStateVersion!==Sh.state.version||pt.outputColorSpace!==Hr||Ze.isBatchedMesh&&pt.batching===!1?Fn=!0:Ze.isBatchedMesh||pt.batching!==!0?Ze.isBatchedMesh&&pt.batchingColor===!0&&Ze.colorTexture===null||Ze.isBatchedMesh&&pt.batchingColor===!1&&Ze.colorTexture!==null||Ze.isInstancedMesh&&pt.instancing===!1?Fn=!0:Ze.isInstancedMesh||pt.instancing!==!0?Ze.isSkinnedMesh&&pt.skinning===!1?Fn=!0:Ze.isSkinnedMesh||pt.skinning!==!0?Ze.isInstancedMesh&&pt.instancingColor===!0&&Ze.instanceColor===null||Ze.isInstancedMesh&&pt.instancingColor===!1&&Ze.instanceColor!==null||Ze.isInstancedMesh&&pt.instancingMorph===!0&&Ze.morphTexture===null||Ze.isInstancedMesh&&pt.instancingMorph===!1&&Ze.morphTexture!==null||pt.envMap!==Mn||ot.fog===!0&&pt.fog!==on?Fn=!0:pt.numClippingPlanes===void 0||pt.numClippingPlanes===it.numPlanes&&pt.numIntersection===it.numIntersection?(pt.vertexAlphas!==Un||pt.vertexTangents!==Hi||pt.morphTargets!==kn||pt.morphNormals!==Bn||pt.morphColors!==Gi||pt.toneMapping!==Na||pt.morphTargetsCount!==Ss)&&(Fn=!0):Fn=!0:Fn=!0:Fn=!0:Fn=!0:(Fn=!0,pt.__version=ot.version);let On=pt.currentProgram;Fn===!0&&(On=Fr(ot,It,Ze));let Ts=!1,ur=!1,dr=!1,qt=On.getUniforms(),Pn=pt.uniforms;if($.useProgram(On.program)&&(Ts=!0,ur=!0,dr=!0),ot.id!==H&&(H=ot.id,ur=!0),Ts||U!==Qe){$.buffers.depth.getReversed()&&Qe.reversedDepth!==!0&&(Qe._reversedDepth=!0,Qe.updateProjectionMatrix()),qt.setValue(G,"projectionMatrix",Qe.projectionMatrix),qt.setValue(G,"viewMatrix",Qe.matrixWorldInverse);let tn=qt.map.cameraPosition;tn!==void 0&&tn.setValue(G,W.setFromMatrixPosition(Qe.matrixWorld)),te.logarithmicDepthBuffer&&qt.setValue(G,"logDepthBufFC",2/(Math.log(Qe.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&qt.setValue(G,"isOrthographic",Qe.isOrthographicCamera===!0),U!==Qe&&(U=Qe,ur=!0,dr=!0)}if(Ze.isSkinnedMesh){qt.setOptional(G,Ze,"bindMatrix"),qt.setOptional(G,Ze,"bindMatrixInverse");let tn=Ze.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),qt.setValue(G,"boneTexture",tn.boneTexture,ce))}Ze.isBatchedMesh&&(qt.setOptional(G,Ze,"batchingTexture"),qt.setValue(G,"batchingTexture",Ze._matricesTexture,ce),qt.setOptional(G,Ze,"batchingIdTexture"),qt.setValue(G,"batchingIdTexture",Ze._indirectTexture,ce),qt.setOptional(G,Ze,"batchingColorTexture"),Ze._colorsTexture!==null&&qt.setValue(G,"batchingColorTexture",Ze._colorsTexture,ce));let ws=jt.morphAttributes;ws.position===void 0&&ws.normal===void 0&&ws.color===void 0||xt.update(Ze,jt,On),(ur||pt.receiveShadow!==Ze.receiveShadow)&&(pt.receiveShadow=Ze.receiveShadow,qt.setValue(G,"receiveShadow",Ze.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Pn.envMap.value=Mn,Pn.flipEnvMap.value=Mn.isCubeTexture&&Mn.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&It.environment!==null&&(Pn.envMapIntensity.value=It.environmentIntensity),Pn.dfgLUT!==void 0&&(Pn.dfgLUT.value=(nr===null&&(nr=new co(wv,32,32,Mu,ns),nr.minFilter=Zn,nr.magFilter=Zn,nr.wrapS=Mr,nr.wrapT=Mr,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr)),ur&&(qt.setValue(G,"toneMappingExposure",M.toneMappingExposure),pt.needsLights&&(mn=dr,(In=Pn).ambientLightColor.needsUpdate=mn,In.lightProbe.needsUpdate=mn,In.directionalLights.needsUpdate=mn,In.directionalLightShadows.needsUpdate=mn,In.pointLights.needsUpdate=mn,In.pointLightShadows.needsUpdate=mn,In.spotLights.needsUpdate=mn,In.spotLightShadows.needsUpdate=mn,In.rectAreaLights.needsUpdate=mn,In.hemisphereLights.needsUpdate=mn),on&&ot.fog===!0&&vt.refreshFogUniforms(Pn,on),vt.refreshMaterialUniforms(Pn,ot,de,Ee,y.state.transmissionRenderTarget[Qe.id]),ga.upload(G,Or(pt),Pn,ce));var In,mn;if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ga.upload(G,Or(pt),Pn,ce),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&qt.setValue(G,"center",Ze.center),qt.setValue(G,"modelViewMatrix",Ze.modelViewMatrix),qt.setValue(G,"normalMatrix",Ze.normalMatrix),qt.setValue(G,"modelMatrix",Ze.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){let tn=ot.uniformsGroups;for(let Ua=0,ka=tn.length;Ua<ka;Ua++){let zi=tn[Ua];Vt.update(zi,On),Vt.bind(zi,On)}}return On})(R,J,ie,oe,Q);$.setMaterial(oe,Pe);let He=ie.index,qe=1;if(oe.wireframe===!0){if(He=Xe.getWireframeAttribute(ie),He===void 0)return;qe=2}let je=ie.drawRange,Ye=ie.attributes.position,at=je.start*qe,Dt=(je.start+je.count)*qe;me!==null&&(at=Math.max(at,me.start*qe),Dt=Math.min(Dt,(me.start+me.count)*qe)),He!==null?(at=Math.max(at,0),Dt=Math.min(Dt,He.count)):Ye!=null&&(at=Math.max(at,0),Dt=Math.min(Dt,Ye.count));let Wt=Dt-at;if(Wt<0||Wt===1/0)return;let wt;kt.setup(Q,oe,Ne,ie,He);let Nt=bt;if(He!==null&&(wt=Oe.get(He),Nt=Xn,Nt.setIndex(wt)),Q.isMesh)oe.wireframe===!0?($.setLineWidth(oe.wireframeLinewidth*j()),Nt.setMode(G.LINES)):Nt.setMode(G.TRIANGLES);else if(Q.isLine){let Qe=oe.linewidth;Qe===void 0&&(Qe=1),$.setLineWidth(Qe*j()),Q.isLineSegments?Nt.setMode(G.LINES):Q.isLineLoop?Nt.setMode(G.LINE_LOOP):Nt.setMode(G.LINE_STRIP)}else Q.isPoints?Nt.setMode(G.POINTS):Q.isSprite&&Nt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Js("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(O.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let Qe=Q._multiDrawStarts,It=Q._multiDrawCounts,jt=Q._multiDrawCount,ot=He?Oe.get(He).bytesPerElement:1,Ze=ne.get(oe).currentProgram.getUniforms();for(let on=0;on<jt;on++)Ze.setValue(G,"_gl_DrawID",on),Nt.render(Qe[on]/ot,It[on])}else if(Q.isInstancedMesh)Nt.renderInstances(at,Wt,Q.count);else if(ie.isInstancedBufferGeometry){let Qe=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,It=Math.min(ie.instanceCount,Qe);Nt.renderInstances(at,Wt,It)}else Nt.render(at,Wt)},this.compile=function(R,J,ie=null){ie===null&&(ie=R),y=Ke.get(ie),y.init(J),A.push(y),ie.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),R!==ie&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(J.layers)&&(y.pushLight(Q),Q.castShadow&&y.pushShadow(Q))}),y.setupLights();let oe=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let me=Q.material;if(me)if(Array.isArray(me))for(let Pe=0;Pe<me.length;Pe++){let Ne=me[Pe];bs(Ne,ie,Q),oe.add(Ne)}else bs(me,ie,Q),oe.add(me)}),y=A.pop(),oe},this.compileAsync=function(R,J,ie=null){let oe=this.compile(R,J,ie);return new Promise(Q=>{function me(){oe.forEach(function(Pe){ne.get(Pe).currentProgram.isReady()&&oe.delete(Pe)}),oe.size!==0?setTimeout(me,10):Q(R)}O.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let Ur=null;function Ia(){Ot.stop()}function kr(){Ot.start()}let Ot=new fm;function Fi(R,J,ie,oe){if(R.visible===!1)return;if(R.layers.test(J.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(J);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Fe.intersectsSprite(R)){oe&&k.setFromMatrixPosition(R.matrixWorld).applyMatrix4(T);let me=st.update(R),Pe=R.material;Pe.visible&&g.push(R,me,Pe,ie,k.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Fe.intersectsObject(R))){let me=st.update(R),Pe=R.material;if(oe&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),k.copy(R.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),k.copy(me.boundingSphere.center)),k.applyMatrix4(R.matrixWorld).applyMatrix4(T)),Array.isArray(Pe)){let Ne=me.groups;for(let He=0,qe=Ne.length;He<qe;He++){let je=Ne[He],Ye=Pe[je.materialIndex];Ye&&Ye.visible&&g.push(R,me,Ye,ie,k.z,je)}}else Pe.visible&&g.push(R,me,Pe,ie,k.z,null)}}let Q=R.children;for(let me=0,Pe=Q.length;me<Pe;me++)Fi(Q[me],J,ie,oe)}function Ms(R,J,ie,oe){let{opaque:Q,transmissive:me,transparent:Pe}=R;y.setupLightsView(ie),$e===!0&&it.setGlobalState(M.clippingPlanes,ie),oe&&$.viewport(Z.copy(oe)),Q.length>0&&Br(Q,J,ie),me.length>0&&Br(me,J,ie),Pe.length>0&&Br(Pe,J,ie),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function La(R,J,ie,oe){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[oe.id]===void 0&&(y.state.transmissionRenderTarget[oe.id]=new bi(1,1,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")||O.has("EXT_color_buffer_float")?ns:wi,minFilter:es,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let Q=y.state.transmissionRenderTarget[oe.id],me=oe.viewport||Z;Q.setSize(me.z*M.transmissionResolutionScale,me.w*M.transmissionResolutionScale);let Pe=M.getRenderTarget(),Ne=M.getActiveCubeFace(),He=M.getActiveMipmapLevel();M.setRenderTarget(Q),M.getClearColor(ee),he=M.getClearAlpha(),he<1&&M.setClearColor(16777215,.5),M.clear(),C&&Ae.render(ie);let qe=M.toneMapping;M.toneMapping=tr;let je=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),y.setupLightsView(oe),$e===!0&&it.setGlobalState(M.clippingPlanes,oe),Br(R,ie,oe),ce.updateMultisampleRenderTarget(Q),ce.updateRenderTargetMipmap(Q),O.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let at=0,Dt=J.length;at<Dt;at++){let Wt=J[at],{object:wt,geometry:Nt,material:Qe,group:It}=Wt;if(Qe.side===St&&wt.layers.test(oe.layers)){let jt=Qe.side;Qe.side=An,Qe.needsUpdate=!0,pi(wt,ie,oe,Nt,Qe,It),Qe.side=jt,Qe.needsUpdate=!0,Ye=!0}}Ye===!0&&(ce.updateMultisampleRenderTarget(Q),ce.updateRenderTargetMipmap(Q))}M.setRenderTarget(Pe,Ne,He),M.setClearColor(ee,he),je!==void 0&&(oe.viewport=je),M.toneMapping=qe}function Br(R,J,ie){let oe=J.isScene===!0?J.overrideMaterial:null;for(let Q=0,me=R.length;Q<me;Q++){let Pe=R[Q],{object:Ne,geometry:He,group:qe}=Pe,je=Pe.material;je.allowOverride===!0&&oe!==null&&(je=oe),Ne.layers.test(ie.layers)&&pi(Ne,J,ie,He,je,qe)}}function pi(R,J,ie,oe,Q,me){R.onBeforeRender(M,J,ie,oe,Q,me),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(M,J,ie,oe,R,me),Q.transparent===!0&&Q.side===St&&Q.forceSinglePass===!1?(Q.side=An,Q.needsUpdate=!0,M.renderBufferDirect(ie,J,oe,Q,R,me),Q.side=ca,Q.needsUpdate=!0,M.renderBufferDirect(ie,J,oe,Q,R,me),Q.side=St):M.renderBufferDirect(ie,J,oe,Q,R,me),R.onAfterRender(M,J,ie,oe,Q,me)}function Fr(R,J,ie){J.isScene!==!0&&(J=b);let oe=ne.get(R),Q=y.state.lights,me=y.state.shadowsArray,Pe=Q.state.version,Ne=rt.getParameters(R,Q.state,me,J,ie),He=rt.getProgramCacheKey(Ne),qe=oe.programs;oe.environment=R.isMeshStandardMaterial?J.environment:null,oe.fog=J.fog,oe.envMap=(R.isMeshStandardMaterial?Ce:ue).get(R.envMap||oe.environment),oe.envMapRotation=oe.environment!==null&&R.envMap===null?J.environmentRotation:R.envMapRotation,qe===void 0&&(R.addEventListener("dispose",Pa),qe=new Map,oe.programs=qe);let je=qe.get(He);if(je!==void 0){if(oe.currentProgram===je&&oe.lightsStateVersion===Pe)return Da(R,Ne),je}else Ne.uniforms=rt.getUniforms(R),R.onBeforeCompile(Ne,M),je=rt.acquireProgram(Ne,He),qe.set(He,je),oe.uniforms=Ne.uniforms;let Ye=oe.uniforms;return(R.isShaderMaterial||R.isRawShaderMaterial)&&R.clipping!==!0||(Ye.clippingPlanes=it.uniform),Da(R,Ne),oe.needsLights=(function(at){return at.isMeshLambertMaterial||at.isMeshToonMaterial||at.isMeshPhongMaterial||at.isMeshStandardMaterial||at.isShadowMaterial||at.isShaderMaterial&&at.lights===!0})(R),oe.lightsStateVersion=Pe,oe.needsLights&&(Ye.ambientLightColor.value=Q.state.ambient,Ye.lightProbe.value=Q.state.probe,Ye.directionalLights.value=Q.state.directional,Ye.directionalLightShadows.value=Q.state.directionalShadow,Ye.spotLights.value=Q.state.spot,Ye.spotLightShadows.value=Q.state.spotShadow,Ye.rectAreaLights.value=Q.state.rectArea,Ye.ltc_1.value=Q.state.rectAreaLTC1,Ye.ltc_2.value=Q.state.rectAreaLTC2,Ye.pointLights.value=Q.state.point,Ye.pointLightShadows.value=Q.state.pointShadow,Ye.hemisphereLights.value=Q.state.hemi,Ye.directionalShadowMap.value=Q.state.directionalShadowMap,Ye.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ye.spotShadowMap.value=Q.state.spotShadowMap,Ye.spotLightMatrix.value=Q.state.spotLightMatrix,Ye.spotLightMap.value=Q.state.spotLightMap,Ye.pointShadowMap.value=Q.state.pointShadowMap,Ye.pointShadowMatrix.value=Q.state.pointShadowMatrix),oe.currentProgram=je,oe.uniformsList=null,je}function Or(R){if(R.uniformsList===null){let J=R.currentProgram.getUniforms();R.uniformsList=ga.seqWithValue(J.seq,R.uniforms)}return R.uniformsList}function Da(R,J){let ie=ne.get(R);ie.outputColorSpace=J.outputColorSpace,ie.batching=J.batching,ie.batchingColor=J.batchingColor,ie.instancing=J.instancing,ie.instancingColor=J.instancingColor,ie.instancingMorph=J.instancingMorph,ie.skinning=J.skinning,ie.morphTargets=J.morphTargets,ie.morphNormals=J.morphNormals,ie.morphColors=J.morphColors,ie.morphTargetsCount=J.morphTargetsCount,ie.numClippingPlanes=J.numClippingPlanes,ie.numIntersection=J.numClipIntersection,ie.vertexAlphas=J.vertexAlphas,ie.vertexTangents=J.vertexTangents,ie.toneMapping=J.toneMapping}Ot.setAnimationLoop(function(R){Ur&&Ur(R)}),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(R){Ur=R,Lt.setAnimationLoop(R),R===null?Ot.stop():Ot.start()},Lt.addEventListener("sessionstart",Ia),Lt.addEventListener("sessionend",kr),this.render=function(R,J){if(J!==void 0&&J.isCamera!==!0)return void ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(J),J=Lt.getCamera()),R.isScene===!0&&R.onBeforeRender(M,R,J,V),y=Ke.get(R,A.length),y.init(J),A.push(y),T.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Fe.setFromProjectionMatrix(T,Yi,J.reversedDepth),w=this.localClippingEnabled,$e=it.init(this.clippingPlanes,w),g=ke.get(R,E.length),g.init(),E.push(g),Lt.enabled===!0&&Lt.isPresenting===!0){let me=M.xr.getDepthSensingMesh();me!==null&&Fi(me,J,-1/0,M.sortObjects)}Fi(R,J,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(Se,fe),C=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,C&&Ae.addToRenderList(g,R),this.info.render.frame++,$e===!0&&it.beginShadows();let ie=y.state.shadowsArray;Ut.render(ie,R,J),$e===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let oe=g.opaque,Q=g.transmissive;if(y.setupLights(),J.isArrayCamera){let me=J.cameras;if(Q.length>0)for(let Pe=0,Ne=me.length;Pe<Ne;Pe++)La(oe,Q,R,me[Pe]);C&&Ae.render(R);for(let Pe=0,Ne=me.length;Pe<Ne;Pe++){let He=me[Pe];Ms(g,R,He,He.viewport)}}else Q.length>0&&La(oe,Q,R,J),C&&Ae.render(R),Ms(g,R,J);V!==null&&L===0&&(ce.updateMultisampleRenderTarget(V),ce.updateRenderTargetMipmap(V)),R.isScene===!0&&R.onAfterRender(M,R,J),kt.resetDefaultState(),H=-1,U=null,A.pop(),A.length>0?(y=A[A.length-1],$e===!0&&it.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,E.pop(),g=E.length>0?E[E.length-1]:null},this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(R,J,ie){let oe=ne.get(R);oe.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),ne.get(R.texture).__webglTexture=J,ne.get(R.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ie,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,J){let ie=ne.get(R);ie.__webglFramebuffer=J,ie.__useDefaultFramebuffer=J===void 0};let fi=G.createFramebuffer();this.setRenderTarget=function(R,J=0,ie=0){V=R,F=J,L=ie;let oe=!0,Q=null,me=!1,Pe=!1;if(R){let Ne=ne.get(R);if(Ne.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(G.FRAMEBUFFER,null),oe=!1;else if(Ne.__webglFramebuffer===void 0)ce.setupRenderTarget(R);else if(Ne.__hasExternalTextures)ce.rebindTextures(R,ne.get(R.texture).__webglTexture,ne.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let je=R.depthTexture;if(Ne.__boundDepthTexture!==je){if(je!==null&&ne.has(je)&&(R.width!==je.image.width||R.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(R)}}let He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Pe=!0);let qe=ne.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Q=Array.isArray(qe[J])?qe[J][ie]:qe[J],me=!0):Q=R.samples>0&&ce.useMultisampledRTT(R)===!1?ne.get(R).__webglMultisampledFramebuffer:Array.isArray(qe)?qe[ie]:qe,Z.copy(R.viewport),N.copy(R.scissor),X=R.scissorTest}else Z.copy(re).multiplyScalar(de).floor(),N.copy(ge).multiplyScalar(de).floor(),X=ye;if(ie!==0&&(Q=fi),$.bindFramebuffer(G.FRAMEBUFFER,Q)&&oe&&$.drawBuffers(R,Q),$.viewport(Z),$.scissor(N),$.setScissorTest(X),me){let Ne=ne.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ne.__webglTexture,ie)}else if(Pe){let Ne=J;for(let He=0;He<R.textures.length;He++){let qe=ne.get(R.textures[He]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+He,qe.__webglTexture,ie,Ne)}}else if(R!==null&&ie!==0){let Ne=ne.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ne.__webglTexture,ie)}H=-1},this.readRenderTargetPixels=function(R,J,ie,oe,Q,me,Pe,Ne=0){if(!R||!R.isWebGLRenderTarget)return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(He=He[Pe]),He){$.bindFramebuffer(G.FRAMEBUFFER,He);try{let qe=R.textures[Ne],je=qe.format,Ye=qe.type;if(!te.textureFormatReadable(je))return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ye))return void ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");J>=0&&J<=R.width-oe&&ie>=0&&ie<=R.height-Q&&(R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),G.readPixels(J,ie,oe,Q,an.convert(je),an.convert(Ye),me))}finally{let qe=V!==null?ne.get(V).__webglFramebuffer:null;$.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(R,J,ie,oe,Q,me,Pe,Ne=0){if(!R||!R.isWebGLRenderTarget)throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=ne.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Pe!==void 0&&(He=He[Pe]),He){if(J>=0&&J<=R.width-oe&&ie>=0&&ie<=R.height-Q){$.bindFramebuffer(G.FRAMEBUFFER,He);let qe=R.textures[Ne],je=qe.format,Ye=qe.type;if(!te.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,at),G.bufferData(G.PIXEL_PACK_BUFFER,me.byteLength,G.STREAM_READ),R.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ne),G.readPixels(J,ie,oe,Q,an.convert(je),an.convert(Ye),0);let Dt=V!==null?ne.get(V).__webglFramebuffer:null;$.bindFramebuffer(G.FRAMEBUFFER,Dt);let Wt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Ff(G,Wt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,at),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,me),G.deleteBuffer(at),G.deleteSync(Wt),me}throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,J=null,ie=0){let oe=Math.pow(2,-ie),Q=Math.floor(R.image.width*oe),me=Math.floor(R.image.height*oe),Pe=J!==null?J.x:0,Ne=J!==null?J.y:0;ce.setTexture2D(R,0),G.copyTexSubImage2D(G.TEXTURE_2D,ie,0,0,Pe,Ne,Q,me),$.unbindTexture()};let rl=G.createFramebuffer(),Oi=G.createFramebuffer();this.copyTextureToTexture=function(R,J,ie=null,oe=null,Q=0,me=null){let Pe,Ne,He,qe,je,Ye,at,Dt,Wt;me===null&&(Q!==0?(Js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=Q,Q=0):me=0);let wt=R.isCompressedTexture?R.mipmaps[me]:R.image;if(ie!==null)Pe=ie.max.x-ie.min.x,Ne=ie.max.y-ie.min.y,He=ie.isBox3?ie.max.z-ie.min.z:1,qe=ie.min.x,je=ie.min.y,Ye=ie.isBox3?ie.min.z:0;else{let Un=Math.pow(2,-Q);Pe=Math.floor(wt.width*Un),Ne=Math.floor(wt.height*Un),He=R.isDataArrayTexture?wt.depth:R.isData3DTexture?Math.floor(wt.depth*Un):1,qe=0,je=0,Ye=0}oe!==null?(at=oe.x,Dt=oe.y,Wt=oe.z):(at=0,Dt=0,Wt=0);let Nt=an.convert(J.format),Qe=an.convert(J.type),It;J.isData3DTexture?(ce.setTexture3D(J,0),It=G.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(ce.setTexture2DArray(J,0),It=G.TEXTURE_2D_ARRAY):(ce.setTexture2D(J,0),It=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,J.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,J.unpackAlignment);let jt=G.getParameter(G.UNPACK_ROW_LENGTH),ot=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ze=G.getParameter(G.UNPACK_SKIP_PIXELS),on=G.getParameter(G.UNPACK_SKIP_ROWS),Es=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Ye);let Hr=R.isDataArrayTexture||R.isData3DTexture,Mn=J.isDataArrayTexture||J.isData3DTexture;if(R.isDepthTexture){let Un=ne.get(R),Hi=ne.get(J),kn=ne.get(Un.__renderTarget),Bn=ne.get(Hi.__renderTarget);$.bindFramebuffer(G.READ_FRAMEBUFFER,kn.__webglFramebuffer),$.bindFramebuffer(G.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Gi=0;Gi<He;Gi++)Hr&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ne.get(R).__webglTexture,Q,Ye+Gi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ne.get(J).__webglTexture,me,Wt+Gi)),G.blitFramebuffer(qe,je,Pe,Ne,at,Dt,Pe,Ne,G.DEPTH_BUFFER_BIT,G.NEAREST);$.bindFramebuffer(G.READ_FRAMEBUFFER,null),$.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||ne.has(R)){let Un=ne.get(R),Hi=ne.get(J);$.bindFramebuffer(G.READ_FRAMEBUFFER,rl),$.bindFramebuffer(G.DRAW_FRAMEBUFFER,Oi);for(let kn=0;kn<He;kn++)Hr?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Un.__webglTexture,Q,Ye+kn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Un.__webglTexture,Q),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Hi.__webglTexture,me,Wt+kn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Hi.__webglTexture,me),Q!==0?G.blitFramebuffer(qe,je,Pe,Ne,at,Dt,Pe,Ne,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(It,me,at,Dt,Wt+kn,qe,je,Pe,Ne):G.copyTexSubImage2D(It,me,at,Dt,qe,je,Pe,Ne);$.bindFramebuffer(G.READ_FRAMEBUFFER,null),$.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?R.isDataTexture||R.isData3DTexture?G.texSubImage3D(It,me,at,Dt,Wt,Pe,Ne,He,Nt,Qe,wt.data):J.isCompressedArrayTexture?G.compressedTexSubImage3D(It,me,at,Dt,Wt,Pe,Ne,He,Nt,wt.data):G.texSubImage3D(It,me,at,Dt,Wt,Pe,Ne,He,Nt,Qe,wt):R.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,me,at,Dt,Pe,Ne,Nt,Qe,wt.data):R.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,me,at,Dt,wt.width,wt.height,Nt,wt.data):G.texSubImage2D(G.TEXTURE_2D,me,at,Dt,Pe,Ne,Nt,Qe,wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,jt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ot),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ze),G.pixelStorei(G.UNPACK_SKIP_ROWS,on),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Es),me===0&&J.generateMipmaps&&G.generateMipmap(It),$.unbindTexture()},this.initRenderTarget=function(R){ne.get(R).__webglFramebuffer===void 0&&ce.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ce.setTextureCube(R,0):R.isData3DTexture?ce.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ce.setTexture2DArray(R,0):ce.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){F=0,L=0,V=null,$.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var Ri={defaultMemorial:"demo",dataDir:"./data/",hostPin:"0000",firebaseDatabaseURL:"https://samga-7bd62-default-rtdb.asia-southeast1.firebasedatabase.app",presenceIntervalMs:1500,firebaseApiKey:"AIzaSyBELQroy6CebtKky_B9EK_KslscaVbYGQA"};/^(localhost|127\.|0\.0\.0\.0)/.test(location.hostname)&&!/[?&]db=live/.test(location.search)&&(Ri.firebaseDatabaseURL="");var _n={skin:"#f2c7a5",hair:"short",hairColor:"#231d1a",eyes:"dot",brows:"soft",mouth:"calm",glasses:"none",beard:"none",blush:!0,height:1},xm={demo:!1,deceased:{name:"\uACE0\uC778",birth:"",death:"",age:""},mourners:"",funeral:{departure:"",departureAt:"",burial:""},greeting:"",thanks:"\uBC14\uC058\uC2E0 \uAC00\uC6B4\uB370 \uCC3E\uC544\uC640 \uC704\uB85C\uD574 \uC8FC\uC154\uC11C \uC9C4\uC2EC\uC73C\uB85C \uAC10\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.",religion:"traditional",theme:"hospital",bgm:"wind",customBgm:"",hostOutfit:"hostSuit",hostLook:{..._n},hostName:"\uC0C1\uC8FC",portrait:"",gallery:[],account:{bank:"",number:"",holder:""},accounts:[],kakaopayLink:"",toss:!0},Rr={hospital:{label:"\uBCD1\uC6D0 \uC7A5\uB840\uC2DD\uC7A5",icon:"\u{1F3E5}",desc:"\uAC00\uC7A5 \uC775\uC219\uD55C \uBCD1\uC6D0 \uC7A5\uB840\uC2DD\uC7A5 \uBE48\uC18C. \uAF43 \uC81C\uB2E8\uACFC \uC81C\uC0AC\uC0C1"},hall:{label:"\uBAA8\uB358 \uCD94\uBAA8\uAD00",icon:"\u{1F3DB}\uFE0F",desc:"\uC720\uB9AC \uBCBD\uACFC \uB098\uBB34 \uB8E8\uBC84\uC758 \uD604\uB300\uC2DD \uCD94\uBAA8\uAD00"},hanok:{label:"\uD55C\uC625 \xB7 \uC0B0\uC0AC",icon:"\u{1F3EF}",desc:"\uAE30\uC640 \uC9C0\uBD95\uACFC \uB9C8\uB8E8, \uADFC\uC870\uB4F1\uC774 \uC788\uB294 \uC804\uD1B5 \uBE48\uC18C"},chapel:{label:"\uAD50\uD68C \xB7 \uC131\uB2F9",icon:"\u26EA",desc:"\uC2A4\uD14C\uC778\uB4DC\uAE00\uB77C\uC2A4\uC640 \uC2ED\uC790\uAC00, \uB098\uBB34 \uC758\uC790\uAC00 \uC788\uB294 \uC608\uBC30\uB2F9"},garden:{label:"\uD558\uB298\uC815\uC6D0",icon:"\u{1F333}",desc:"\uD070 \uB098\uBB34 \uC544\uB798 \uAF43 \uC81C\uB2E8. \uC885\uAD50 \uC0C9\uC774 \uC5C6\uB294 \uC57C\uC678 \uCD94\uBAA8"}},_m={traditional:"hospital",buddhist:"hanok",christian:"chapel",catholic:"chapel",none:"hospital"},xa={none:{label:"\uB044\uAE30",icon:"\u{1F507}",desc:"\uACE0\uC694\uD558\uAC8C"},wind:{label:"\uBC14\uB78C\uACFC \uD48D\uACBD",icon:"\u{1F390}",desc:"\uCC98\uB9C8 \uB05D \uD48D\uACBD \uC18C\uB9AC\uC640 \uC794\uC794\uD55C \uBC14\uB78C"},moktak:{label:"\uBAA9\uD0C1\uACFC \uC2F1\uC789\uBCFC",icon:"\u{1FAB7}",desc:"\uB290\uB9B0 \uBAA9\uD0C1, \uAC00\uB054 \uC6B8\uB9AC\uB294 \uC2F1\uC789\uBCFC"},hymn:{label:"\uCC2C\uC1A1\uAC00 \uC624\uB974\uAC04",icon:"\u26EA",desc:"\uB098 \uAC19\uC740 \uC8C4\uC778 \uC0B4\uB9AC\uC2E0 (Amazing Grace)"},chorale:{label:"\uD3C9\uC548\uC758 \uC624\uB974\uAC04",icon:"\u{1F56F}\uFE0F",desc:"\uB290\uB9B0 4\uC131\uBD80 \uC624\uB974\uAC04 \uCF54\uB784"},gayageum:{label:"\uAC00\uC57C\uAE08 \uC0B0\uC870 \uD48D",icon:"\u{1FA95}",desc:"\uC624\uC74C\uACC4\uB85C \uCC9C\uCC9C\uD788 \uB72F\uB294 \uAC00\uC57C\uAE08"},piano:{label:"\uC794\uC794\uD55C \uD53C\uC544\uB178",icon:"\u{1F3B9}",desc:"\uC26C\uC5B4 \uAC00\uAE30 \uC88B\uC740 \uB290\uB9B0 \uD53C\uC544\uB178"},rain:{label:"\uCC98\uB9C8 \uBE57\uC18C\uB9AC",icon:"\u{1F327}\uFE0F",desc:"\uBE57\uC18C\uB9AC\uC640 \uB099\uC22B\uBB3C"},canon:{label:"\uD558\uD504 \xB7 \uCE90\uB17C \uD654\uC74C",icon:"\u{1F3BC}",desc:"\uD30C\uD5EC\uBCA8 \uCE90\uB17C\uC758 \uD654\uC74C\uC744 \uD558\uD504\uB85C \uCC9C\uCC9C\uD788"},cello:{label:"\uCCBC\uB85C \uB3C5\uC8FC",icon:"\u{1F3BB}",desc:"\uB0AE\uACE0 \uB530\uB73B\uD55C \uCCBC\uB85C\uC758 \uAE34 \uC120\uC728"},daegeum:{label:"\uB300\uAE08 \uC0B0\uC870 \uD48D",icon:"\u{1F38B}",desc:"\uC228\uACB0\uC774 \uC11E\uC778 \uB300\uAE08\uC758 \uAE34 \uC18C\uB9AC"},haegeum:{label:"\uD574\uAE08 \uD48D",icon:"\u{1FA95}",desc:"\uC560\uC794\uD558\uAC8C \uBBF8\uB044\uB7EC\uC9C0\uB294 \uD574\uAE08 \uC18C\uB9AC"},musicbox:{label:"\uC624\uB974\uACE8 \uC790\uC7A5\uAC00",icon:"\u{1F381}",desc:"\uC791\uC740 \uC624\uB974\uACE8\uC774 \uB4E4\uB824\uC8FC\uB294 \uB290\uB9B0 \uB178\uB798"},stream:{label:"\uC0B0\uC0AC \uACC4\uACE1\uBB3C",icon:"\u{1F3DE}\uFE0F",desc:"\uD750\uB974\uB294 \uACC4\uACE1\uBB3C\uACFC \uBA40\uB9AC \uC0C8\uC18C\uB9AC"},custom:{label:"\uACE0\uC778\uC774 \uC88B\uC544\uD558\uB358 \uB178\uB798",icon:"\u{1F4BF}",desc:"\uC0C1\uC8FC\uAC00 \uC62C\uB9B0 \uC74C\uC6D0"}},Ci={traditional:{label:"\uC804\uD1B5 \uC608\uBC95",icon:"\u{1F647}",desc:"\uD5CC\uD654 \xB7 \uBD84\uD5A5 \xB7 \uC220\uC794\uC744 \uC62C\uB9AC\uACE0 \uC808 \uB450 \uBC88",actions:["flower","incense","cup","bow2"],auto:["flower","incense","cup","bow2"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"],all:!0},{id:"offer",label:"\uD5CC\uD654 \xB7 \uBD84\uD5A5 \xB7 \uC220\uC794 \uC62C\uB9AC\uAE30",any:["flower","incense","cup"]},{id:"bow",label:"\uC601\uC815 \uC55E\uC5D0 \uC808 \uB450 \uBC88, \uBAA9\uB840",any:["bow2"]},{id:"greet",label:"\uC0C1\uC8FC\uC640 \uB9DE\uC808, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC721\uAC1C\uC7A5 \uD55C \uADF8\uB987",any:["meal"],optional:!0}]},buddhist:{label:"\uBD88\uAD50",icon:"\u{1FAB7}",desc:"\uBD84\uD5A5\uD558\uACE0 \uD569\uC7A5\uD55C \uB4A4 \uC808 \uB450 \uBC88",actions:["flower","incense","hapjang","bow2","beads"],auto:["flower","incense","hapjang","bow2"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"],all:!0},{id:"offer",label:"\uD5CC\uD654 \xB7 \uBD84\uD5A5",any:["incense","flower"]},{id:"hapjang",label:"\uD569\uC7A5 \uBC18\uBC30",any:["hapjang"]},{id:"bow",label:"\uC808 \uB450 \uBC88, \uBAA9\uB840",any:["bow2"]},{id:"greet",label:"\uC0C1\uC8FC\uC640 \uB9DE\uC808, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uACF5\uC591 \uD55C \uADF8\uB987",any:["meal"],optional:!0}]},christian:{label:"\uAE30\uB3C5\uAD50",icon:"\u271D\uFE0F",desc:"\uD5CC\uD654\uD55C \uB4A4 \uBB35\uB3C4\uC640 \uAE30\uB3C4",actions:["flower","silentPrayer","prayer"],auto:["flower","silentPrayer"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"],all:!0},{id:"offer",label:"\uD5CC\uD654",any:["flower"]},{id:"pray",label:"\uBB35\uB3C4 \uB610\uB294 \uAE30\uB3C4",any:["silentPrayer","prayer"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]},catholic:{label:"\uCC9C\uC8FC\uAD50",icon:"\u{1F56F}\uFE0F",desc:"\uD5CC\uD654, \uC131\uD638\uB97C \uAE0B\uACE0 \uAE30\uB3C4, \uCD1B\uBD88 \uBD09\uD5CC",actions:["flower","sign","prayer","candle"],auto:["flower","sign","prayer"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"],all:!0},{id:"offer",label:"\uD5CC\uD654 \uB610\uB294 \uCD1B\uBD88 \uBD09\uD5CC",any:["flower","candle"]},{id:"sign",label:"\uC131\uD638 \uAE0B\uAE30",any:["sign"]},{id:"pray",label:"\uACE0\uC778\uC744 \uC704\uD55C \uAE30\uB3C4",any:["prayer"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]},none:{label:"\uC885\uAD50 \uC5C6\uC74C",icon:"\u{1F90D}",desc:"\uD5CC\uD654\uD558\uACE0 \uBB35\uB150\uD55C \uB4A4 \uBAA9\uB840",actions:["flower","silence","nod"],auto:["flower","silence","nod"],steps:[{id:"reception",label:"\uC811\uC218\uB300: \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",any:["guestbook","condolence"],all:!0},{id:"offer",label:"\uD5CC\uD654",any:["flower"]},{id:"silence",label:"\uBB35\uB150 \xB7 \uBAA9\uB840",any:["silence","nod"]},{id:"greet",label:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC, \uC704\uB85C\uC758 \uB9D0",any:["greet"]},{id:"meal",label:"\uC2DD\uB2F9\uC5D0\uC11C \uC2DD\uC0AC",any:["meal"],optional:!0}]}},xd={incense:{label:"\uBD84\uD5A5",icon:"\u{1F525}",key:"incense",altar:!0},flower:{label:"\uD5CC\uD654",icon:"\u{1F33C}",key:"flowers",altar:!0},bow2:{label:"\uC808 \uB450 \uBC88",sub:"\uC808 \uB450 \uBC88 \xB7 \uBAA9\uB840",icon:"\u{1F647}",key:"bows",altar:!0},cup:{label:"\uC220\uC794",sub:"\uC220\uC794 \uC62C\uB9AC\uAE30",icon:"\u{1F376}",key:"cups",altar:!0},hapjang:{label:"\uD569\uC7A5",icon:"\u{1F64F}",key:"hapjang",altar:!0},beads:{label:"\uC5FC\uC8FC",icon:"\u{1F4FF}",key:"beads",altar:!1},prayer:{label:"\uAE30\uB3C4",icon:"\u{1F64F}",key:"prayers",altar:!0},silentPrayer:{label:"\uBB35\uB3C4",icon:"\u{1F90D}",key:"prayers",altar:!0},sign:{label:"\uC131\uD638",icon:"\u271D\uFE0F",key:"signs",altar:!0},candle:{label:"\uCD1B\uBD88",icon:"\u{1F56F}\uFE0F",key:"candles",altar:!0},silence:{label:"\uBB35\uB150",icon:"\u{1F90D}",key:"silence",altar:!0},nod:{label:"\uBAA9\uB840",icon:"\u{1F642}",key:"bows",altar:!0}},bm=["\uCE5C\uAD6C","\uC9C1\uC7A5 \uB3D9\uB8CC","\uD559\uAD50 \uB3D9\uBB38","\uAC00\uC871 \xB7 \uCE5C\uCC99","\uC774\uC6C3","\uAD50\uD68C \xB7 \uC131\uB2F9 \xB7 \uC808","\uACE0\uC778\uC758 \uC9C0\uC778","\uAE30\uD0C0"],Mm=["\uADF8\uB3D9\uC548 \uACE0\uB9C8\uC6E0\uC5B4\uC694.","\uBCF4\uACE0 \uC2F6\uC744 \uAC70\uC608\uC694.","\uD3B8\uD788 \uC26C\uC138\uC694.","\uC0AC\uB791\uD569\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uB9CC\uB098\uC694.","\uC78A\uC9C0 \uC54A\uC744\uAC8C\uC694."],Em=["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.","\uC5BC\uB9C8\uB098 \uC0C1\uC2EC\uC774 \uD06C\uC2ED\uB2C8\uAE4C.","\uBB50\uB77C \uC704\uB85C\uC758 \uB9D0\uC500\uC744 \uB4DC\uB824\uC57C \uD560\uC9C0 \uBAA8\uB974\uACA0\uC2B5\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC2E4 \uAC70\uC608\uC694.","\uB298 \uACC1\uC5D0 \uC788\uC744\uAC8C\uC694. \uD798\uB0B4\uC138\uC694."],_d=[{id:"yukgaejang",label:"\uC721\uAC1C\uC7A5",icon:"\u{1F372}",ticket:!0,line:"\uB728\uB048\uD55C \uC721\uAC1C\uC7A5 \uD55C \uADF8\uB987. \uC7A5\uB840\uC2DD\uC7A5 \uAD6D\uBB3C\uC740 \uC65C \uC774\uB807\uAC8C \uC704\uB85C\uAC00 \uB420\uAE4C\uC694."},{id:"pyeonyuk",label:"\uD3B8\uC721",icon:"\u{1F969}",ticket:!0,line:"\uC0C8\uC6B0\uC813 \uC0B4\uC9DD \uC62C\uB9B0 \uD3B8\uC721 \uD55C \uC810 \uB4DC\uC168\uC5B4\uC694."},{id:"hongeo",label:"\uD64D\uC5B4\uBB34\uCE68",icon:"\u{1F41F}",ticket:!0,line:"\uC0C8\uCF64\uB2EC\uCF64 \uD64D\uC5B4\uBB34\uCE68. \uD638\uBD88\uD638\uB294 \uAC08\uB824\uB3C4 \uBE60\uC9C0\uBA74 \uC12D\uC12D\uD558\uC8E0."},{id:"jeon",label:"\uBAA8\uB460\uC804",icon:"\u{1F95E}",ticket:!0,line:"\uB3D9\uADF8\uB791\uB561, \uB3D9\uD0DC\uC804, \uAE7B\uC78E\uC804 \uD55C \uC811\uC2DC \uBE44\uC6B0\uC168\uC5B4\uC694."},{id:"tteok",label:"\uB5A1",icon:"\u{1F361}",ticket:!0,line:"\uC808\uD3B8\uACFC \uC2DC\uB8E8\uB5A1. \uC0C1\uAC13\uC9D1 \uB5A1\uC740 \uB098\uB220 \uBA39\uC5B4\uC57C \uBCF5\uC774 \uC628\uB300\uC694."},{id:"snack",label:"\uB9C8\uB978\uC548\uC8FC",icon:"\u{1F95C}",ticket:!0,line:"\uB545\uCF69\uACFC \uC624\uC9D5\uC5B4\uCC44. \uBC24\uC0D8\uD558\uB294 \uBD84\uB4E4\uC758 \uC624\uB79C \uCE5C\uAD6C\uC608\uC694."},{id:"soju",label:"\uC18C\uC8FC \uD55C \uC794",icon:"\u{1F376}",ticket:!0,line:"\uC18C\uC8FC \uD55C \uC794 \uAE30\uC6B8\uC774\uC168\uC5B4\uC694. \uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uB294 \uAC8C \uC608\uC758\uC608\uC694."},{id:"sikhye",label:"\uC2DD\uD61C",icon:"\u{1F964}",ticket:!1,line:"\uC2DC\uC6D0\uD55C \uC2DD\uD61C\uB85C \uB9C8\uC74C\uC744 \uB2EC\uB798\uC168\uC5B4\uC694."},{id:"coffee",label:"\uCEE4\uD53C\uBBF9\uC2A4",icon:"\u2615",ticket:!1,line:"\uC885\uC774\uCEF5 \uCEE4\uD53C\uBBF9\uC2A4. \uC7A5\uB840\uC2DD\uC7A5\uC758 \uACF5\uC2DD \uC74C\uB8CC\uC8E0."}],ir={phrases:[{id:"\u8CFB\u5100",sub:"\uBD80\uC758 \xB7 \uAC00\uC7A5 \uC77C\uBC18\uC801"},{id:"\u8B39\u5F14",sub:"\uADFC\uC870 \xB7 \uC0BC\uAC00 \uC2AC\uD37C\uD568"},{id:"\u5F14\u610F",sub:"\uC870\uC758 \xB7 \uC2AC\uD514\uC744 \uD568\uAED8"},{id:"\u8FFD\u6155",sub:"\uCD94\uBAA8 \xB7 \uADF8\uB9AC\uC6CC\uD568"},{id:"\u54C0\u60BC",sub:"\uC560\uB3C4 \xB7 \uC2AC\uD37C\uD568"},{id:"\u53EC\u5929",sub:"\uC18C\uCC9C \xB7 \uAE30\uB3C5\uAD50"},{id:"\u4ED9\u901D",sub:"\uC120\uC11C \xB7 \uCC9C\uC8FC\uAD50"},{id:"\uBD80\uC758",sub:"\uD55C\uAE00"}],papers:[{id:"white",label:"\uD770 \uD55C\uC9C0",bg:"#fbf9f2"},{id:"ivory",label:"\uBBF8\uC0C9",bg:"#f3ead6"},{id:"silver",label:"\uC740\uD68C\uC0C9",bg:"#e6e6e1"},{id:"band",label:"\uAC80\uC740 \uB760",bg:"#fbf9f2",band:!0}],seals:[{id:"none",label:"\uC5C6\uC74C",icon:""},{id:"mum",label:"\uD770 \uAD6D\uD654",icon:""},{id:"lotus",label:"\uC5F0\uAF43",icon:"\u{1FAB7}"},{id:"cross",label:"\uC2ED\uC790\uAC00",icon:"\u271D\uFE0F"},{id:"ribbon",label:"\uADFC\uC870 \uB9AC\uBCF8",icon:"\u{1F397}\uFE0F"}],fonts:[{id:"serif",label:"\uC815\uC790\uCCB4",css:"'Noto Serif KR', 'Gowun Batang', serif"},{id:"brush",label:"\uBD93\uAE00\uC528",css:"'Nanum Brush Script', 'Gowun Batang', serif"},{id:"pen",label:"\uC190\uAE00\uC528",css:"'Nanum Pen Script', 'Gowun Dodum', sans-serif"}]},Xc=["\uC870\uBB38\uD560 \uB54C\uB294 \uAC80\uC740\uC0C9\uC774\uB098 \uC9D9\uC740 \uC0C9 \uC637\uC744 \uC785\uACE0, \uD654\uB824\uD55C \uC561\uC138\uC11C\uB9AC\uB294 \uC7A0\uC2DC \uBE7C \uB450\uC138\uC694.","\uD5A5\uC740 \uC624\uB978\uC190\uC73C\uB85C \uC9D1\uC5B4 \uBD88\uC744 \uBD99\uC774\uACE0, \uC785\uC73C\uB85C \uBD88\uC9C0 \uB9D0\uACE0 \uC67C\uC190\uC73C\uB85C \uAC00\uBCCD\uAC8C \uD754\uB4E4\uC5B4 \uAEBC\uC694.","\uC0C1\uAC00\uC5D0\uC11C \uC190\uC744 \uBAA8\uC744 \uB54C\uB294 \uD3C9\uC18C\uC640 \uBC18\uB300\uB85C, \uB0A8\uC790\uB294 \uC624\uB978\uC190\uC744, \uC5EC\uC790\uB294 \uC67C\uC190\uC744 \uC704\uB85C \uC62C\uB824\uC694.","\uC0C1\uC8FC\uC5D0\uAC8C\uB294 \uB9D0\uC744 \uC544\uB07C\uB294 \uAC83\uC774 \uC608\uC758\uC608\uC694. \uC9E7\uC740 \uD55C\uB9C8\uB514\uBA74 \uCDA9\uBD84\uD569\uB2C8\uB2E4.","\uACE0\uC778\uC758 \uC0AC\uB9DD \uC6D0\uC778\uC744 \uC790\uC138\uD788 \uBB3B\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC544\uC694.","\u201C\uD638\uC0C1(\u597D\u55AA)\u201D\uC774\uB77C\uB294 \uB9D0\uC740 \uC720\uAC00\uC871 \uC55E\uC5D0\uC11C\uB294 \uC0BC\uAC00 \uC8FC\uC138\uC694.","\uC870\uC758\uAE08 \uBD09\uD22C \uB4B7\uBA74 \uC67C\uCABD \uC544\uB798\uC5D0 \uC774\uB984\uC744 \uC138\uB85C\uB85C \uC368\uC694. \uC18C\uC18D\uB3C4 \uD568\uAED8 \uC4F0\uBA74 \uC0C1\uC8FC\uAC00 \uC54C\uC544\uBCF4\uAE30 \uC26C\uC6CC\uC694.","\uC870\uC758\uAE08\uC740 3\xB75\xB77\uB9CC \uC6D0\uCC98\uB7FC \uD640\uC218\uB85C \uB9DE\uCD94\uB294 \uD48D\uC2B5\uC774 \uC788\uC5B4\uC694. 10\uB9CC \uC6D0\uC740 \uAD1C\uCC2E\uC544\uC694.","\uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC220\uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uC544\uC694. \uAC74\uBC30 \uB300\uC2E0 \uC870\uC6A9\uD788 \uB9C8\uC74C\uC744 \uB098\uB220\uC694.","\uBC18\uAC00\uC6B4 \uC0AC\uB78C\uC744 \uB9CC\uB098\uB3C4 \uD070 \uC18C\uB9AC\uB85C \uC6C3\uAC70\uB098 \uC778\uC0AC\uD558\uC9C0 \uC54A\uB294 \uAC83\uC774 \uC88B\uC544\uC694.","\uAE30\uB3C5\uAD50\uC2DD \uBE48\uC18C\uC5D0\uC11C\uB294 \uBD84\uD5A5 \uB300\uC2E0 \uD5CC\uD654\uD558\uACE0 \uBB35\uB3C4\uD574\uC694. \uC808\uC740 \uD558\uC9C0 \uC54A\uC544\uB3C4 \uAD1C\uCC2E\uC544\uC694.","\uD5CC\uD654\uD560 \uB54C\uB294 \uAF43\uBD09\uC624\uB9AC\uAC00 \uC601\uC815 \uCABD\uC744 \uD5A5\uD558\uB3C4\uB85D \uB193\uC544\uC694.","\uB9DE\uC808\uC740 \uC0C1\uC8FC\uC640 \uB3D9\uC2DC\uC5D0 \uD558\uACE0, \uD55C \uBC88\uC774\uBA74 \uCDA9\uBD84\uD574\uC694.","\uBC24\uC0D8(\uCCA0\uC57C)\uC740 \uD5A5\uC774 \uAEBC\uC9C0\uC9C0 \uC54A\uAC8C \uC9C0\uD0A4\uBA70 \uACE0\uC778 \uACC1\uC744 \uD568\uAED8 \uC9C0\uD0A4\uB358 \uD48D\uC2B5\uC774\uC5D0\uC694."],bd={skin:["#f8dcc6","#f2c7a5","#e5b48f","#cf9670","#a26f4f"],hair:[{id:"short",label:"\uC9E7\uC740 \uBA38\uB9AC"},{id:"part",label:"\uAC00\uB974\uB9C8"},{id:"bob",label:"\uB2E8\uBC1C"},{id:"long",label:"\uAE34 \uC0DD\uBA38\uB9AC"},{id:"pony",label:"\uBB36\uC740 \uBA38\uB9AC"},{id:"bun",label:"\uCABD\uBA38\uB9AC\xB7\uBE44\uB140"},{id:"perm",label:"\uBF40\uAE00 \uD30C\uB9C8"},{id:"bald",label:"\uBBFC\uBA38\uB9AC"}],hairColor:[{id:"#231d1a",label:"\uAC80\uC815"},{id:"#3d2b20",label:"\uD751\uAC08\uC0C9"},{id:"#6e4b33",label:"\uAC08\uC0C9"},{id:"#8f8b85",label:"\uBC18\uBC31"},{id:"#e4e0d8",label:"\uBC31\uBC1C"}],eyes:[{id:"dot",label:"\uCF69 \uB208"},{id:"round",label:"\uB3D9\uADF8\uB780 \uB208"},{id:"smile",label:"\uC6C3\uB294 \uB208"},{id:"sad",label:"\uCC98\uC9C4 \uB208"},{id:"closed",label:"\uC9C0\uADF8\uC2DC \uAC10\uC740 \uB208"}],brows:[{id:"soft",label:"\uBCF4\uD1B5"},{id:"sad",label:"\uCC98\uC9C4 \uB208\uC379"},{id:"thick",label:"\uC9D9\uC740 \uB208\uC379"}],mouth:[{id:"calm",label:"\uB2F4\uB2F4"},{id:"smile",label:"\uC605\uC740 \uBBF8\uC18C"},{id:"sad",label:"\uC2DC\uBB34\uB8E9"}],glasses:[{id:"none",label:"\uC5C6\uC74C"},{id:"round",label:"\uB3D9\uADF8\uB780 \uC548\uACBD"},{id:"square",label:"\uBFD4\uD14C \uC548\uACBD"}],beard:[{id:"none",label:"\uC5C6\uC74C"},{id:"mustache",label:"\uCF67\uC218\uC5FC"},{id:"beard",label:"\uD131\uC218\uC5FC"}],height:[{id:.84,label:"\uC544\uC774"},{id:1,label:"\uC5B4\uB978"},{id:1.07,label:"\uD0A4 \uD070"}]},$c=[{id:"cry",icon:"\u{1F622}",label:"\uB208\uBB3C"},{id:"heart",icon:"\u{1F90D}",label:"\uB9C8\uC74C"},{id:"pray",icon:"\u{1F64F}",label:"\uAE30\uB3C4"},{id:"smile",icon:"\u{1F642}",label:"\uBBF8\uC18C"},{id:"dove",icon:"\u{1F54A}\uFE0F",label:"\uD3C9\uC548"}],Sm=["\uC624\uB79C\uB9CC\uC774\uC5D0\uC694","\uAC74\uAC15\uD558\uC2DC\uC8E0?","\uB9C8\uC74C\uC774 \uC544\uD504\uB124\uC694","\uC88B\uC740 \uBD84\uC774\uC168\uC5B4\uC694","\uC870\uC2EC\uD788 \uB4E4\uC5B4\uAC00\uC138\uC694","\uB2E4\uC74C\uC5D0 \uAF2D \uBD2C\uC694"],qc=[{id:"\uBC30\uC6B0\uC790(\uC544\uB0B4)",g:"f",age:"senior"},{id:"\uBC30\uC6B0\uC790(\uB0A8\uD3B8)",g:"m",age:"senior"},{id:"\uC7A5\uB0A8",g:"m"},{id:"\uCC28\uB0A8",g:"m"},{id:"\uC0BC\uB0A8",g:"m"},{id:"\uC544\uB4E4",g:"m"},{id:"\uC7A5\uB140",g:"f"},{id:"\uCC28\uB140",g:"f"},{id:"\uC0BC\uB140",g:"f"},{id:"\uB538",g:"f"},{id:"\uBA70\uB290\uB9AC",g:"f"},{id:"\uC0AC\uC704",g:"m"},{id:"\uC190\uC790",g:"m",age:"young"},{id:"\uC190\uB140",g:"f",age:"young"},{id:"\uD615\uC81C",g:"m"},{id:"\uC790\uB9E4",g:"f"},{id:"\uC870\uCE74",g:"m",age:"young"},{id:"\uAE30\uD0C0",g:"m"}];var pn={get(i,e){try{let t=localStorage.getItem(i);return t?JSON.parse(t):e}catch{return e}},set(i,e){try{return localStorage.setItem(i,JSON.stringify(e)),!0}catch(t){return console.warn(t),!1}},del(i){try{localStorage.removeItem(i)}catch{}}};function Ed(i,e){let t=Array.isArray(i)?[...i]:{...i};for(let[n,r]of Object.entries(e||{}))r&&typeof r=="object"&&!Array.isArray(r)&&i&&typeof i[n]=="object"&&!Array.isArray(i[n])?t[n]=Ed(i[n],r):r!==void 0&&(t[n]=r);return t}var Md=new Set(["guestbook","condolences"]),Yc=class{constructor(e,t){this.apiKey=(e.firebaseApiKey||"").trim(),this.id=t||"demo";let n=(e.firebaseDatabaseURL||"").trim().replace(/\/+$/,"");this.root=n,this.base=n?`${n}/memorials/${encodeURIComponent(this.id)}`:"",this.remote=!!this.base,this.remoteOk=this.remote}key(e){return`samga:${this.id}:${e}`}async token(e=!0){if(!this.apiKey)return null;let t=pn.get("samga:auth",null),n=async()=>(pn.del("samga:auth"),e?this.token(!1):null);try{if(t){if(Date.now()>t.exp-12e4){let s=await(await fetch(`https://securetoken.googleapis.com/v1/token?key=${this.apiKey}`,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:`grant_type=refresh_token&refresh_token=${encodeURIComponent(t.rt)}`})).json();if(!s.id_token)return n();t={id:s.id_token,rt:s.refresh_token,uid:s.user_id,exp:Date.now()+Number(s.expires_in||3600)*1e3}}}else{let s=await(await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({returnSecureToken:!0})})).json();if(!s.idToken)throw new Error(JSON.stringify(s.error||s));t={id:s.idToken,rt:s.refreshToken,uid:s.localId,exp:Date.now()+Number(s.expiresIn||3600)*1e3}}return pn.set("samga:auth",t),this.uid=t.uid,t.id}catch(r){return console.warn("auth",r),null}}async claimHostReader(e){if(!this.remote||!e)return!1;if(!this.apiKey)return this.isHostReader=!0,!0;let t=await this.token();if(!t)return this.isHostReader=!0,!0;try{let n=await fetch(`${this.root}/hostuids/${encodeURIComponent(this.id)}/${this.uid}.json?auth=${t}`,{method:"PUT",body:JSON.stringify(e)});return this.isHostReader=n.ok,n.ok}catch{return!1}}async req(e,t,n,r="",s=!1){if(s){let o=await this.token();o&&(r+=`${r?"&":"?"}auth=${o}`)}let a=await fetch(`${this.base}${t?`/${t}`:""}.json${r}`,{method:e,headers:n!==void 0?{"Content-Type":"application/json"}:void 0,body:n!==void 0?JSON.stringify(n):void 0});if(!a.ok)throw new Error(`${e} ${t} \u2192 ${a.status}`);return a.json()}async loadMemorial(e,t){let n={};try{let s=await fetch(e,{cache:"no-cache"});s.ok&&(n=await s.json())}catch(s){console.warn("memorial.json\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4",s)}this.published=Ed(t,n);let r=pn.get(this.key("draft"),null);return r&&(r.rev||"")!==(this.published.rev||"")&&(pn.del(this.key("draft")),r=null),this.hasDraft=!!r,r?Ed(this.published,r):this.published}saveDraft(e){return pn.set(this.key("draft"),e)}clearDraft(){pn.del(this.key("draft")),this.hasDraft=!1}getLocal(e,t){return pn.get(this.key(e),t)}setLocal(e,t){return pn.set(this.key(e),t)}async list(e,t=200){if(this.remote&&(!Md.has(e)||this.isHostReader))try{let n=`?orderBy=${encodeURIComponent('"$key"')}&limitToLast=${t}`,r=await this.req("GET",e,void 0,n,Md.has(e));return this.remoteOk=!0,Object.entries(r||{}).map(([s,a])=>({id:s,...a})).sort((s,a)=>(s.time||0)-(a.time||0))}catch(n){console.warn(n),this.remoteOk=!1}return pn.get(this.key(e),[])}async add(e,t){let n={...t,time:Date.now()},r=!this.remote||Md.has(e);if(this.remote)try{let a=await this.req("POST",e,{...n,time:{".sv":"timestamp"}});if(n.id=a.name,!r)return n}catch(a){console.warn(a),this.remoteOk=!1}let s=pn.get(this.key(e),[]);for(n.id=n.id||`l${Date.now().toString(36)}${Math.random().toString(36).slice(2,6)}`,s.push(n);s.length>400;)s.shift();return pn.set(this.key(e),s),n}async counters(){if(this.remote)try{let e=await this.req("GET","counters");return this.remoteOk=!0,e||{}}catch(e){console.warn(e),this.remoteOk=!1}return pn.get(this.key("counters"),{})}async bump(e,t=1){if(this.remote)try{await this.req("PUT",`counters/${e}`,{".sv":{increment:t}});return}catch(r){console.warn(r),this.remoteOk=!1}let n=pn.get(this.key("counters"),{});n[e]=(n[e]||0)+t,pn.set(this.key("counters"),n)}async getState(e){if(this.remote)try{return await this.req("GET",`state/${e}`)}catch(t){console.warn(t)}return pn.get(this.key(`state:${e}`),null)}async stampState(e){let t=Date.now();if(this.remote)try{return await this.req("PUT",`state/${e}`,{".sv":"timestamp"})}catch(n){console.warn(n)}return pn.set(this.key(`state:${e}`),t),t}async publishLive(e,t,n){if(!this.remote)return!1;if(!this.claimed){this.claimed=!0;try{await fetch(`${this.root}/hostkeys/${encodeURIComponent(this.id)}.json`,{method:"PUT",body:JSON.stringify(e)})}catch{}}let r={"live/meta":t,livekey:e};n&&(r["live/media"]=n);try{return await this.req("PATCH","",r),!0}catch(s){return console.warn(s),!1}}async liveMeta(){if(!this.remote)return null;try{return await this.req("GET","live/meta")}catch{return null}}async liveMedia(){if(!this.remote)return null;try{return await this.req("GET","live/media")}catch{return null}}async presencePut(e,t){this.remote&&await this.req("PUT",`presence/${e}`,{...t,t:{".sv":"timestamp"}})}async presenceGet(){return this.remote?await this.req("GET","presence")||{}:{}}presenceDelete(e){if(this.remote)try{fetch(`${this.base}/presence/${e}.json`,{method:"DELETE",keepalive:!0})}catch{}}};function Fo(i){let e=i;return()=>(e=e*16807%2147483647,(e-1)/2147483646)}function Am(i=256){let e=document.createElement("canvas");return e.width=e.height=i,e}function Av(i,e,t,n,{petal:r,shade:s,center:a,layers:o=7,count:c=30,seed:l=1}){let h=Fo(l);for(let d=o-1;d>=0;d--){let p=(d+1)/o,f=n*(.2+.8*p),v=Math.round(c*(.45+.7*p));for(let x=0;x<v;x++){let g=x/v*Math.PI*2+d*.53+(h()-.5)*.18,y=f*(.78+h()*.22),E=n*(.035+.045*p)*(.85+h()*.3),A=.86+h()*.14;i.save(),i.translate(e,t),i.rotate(g);let M=i.createLinearGradient(y*.05,0,y,0);M.addColorStop(0,s),M.addColorStop(.45,r),M.addColorStop(.92,r),M.addColorStop(1,s),i.globalAlpha=1,i.fillStyle=M,i.beginPath(),i.moveTo(y*.06,0),i.bezierCurveTo(y*.35,-E*.5,y*.62,-E*1.25,y*.92,-E*.9),i.quadraticCurveTo(y*1.04,0,y*.92,E*.9),i.bezierCurveTo(y*.62,E*1.25,y*.35,E*.5,y*.06,0),i.fill(),i.fillStyle=`rgba(0,0,0,${(1-A)*.9})`,i.fill(),i.strokeStyle="rgba(255,255,255,0.55)",i.lineWidth=Math.max(.6,n*.004),i.beginPath(),i.moveTo(y*.25,0),i.lineTo(y*.85,0),i.stroke(),i.strokeStyle="rgba(80,80,60,0.16)",i.lineWidth=Math.max(.6,n*.005),i.beginPath(),i.moveTo(y*.06,0),i.bezierCurveTo(y*.35,-E*.5,y*.62,-E*1.25,y*.92,-E*.9),i.quadraticCurveTo(y*1.04,0,y*.92,E*.9),i.bezierCurveTo(y*.62,E*1.25,y*.35,E*.5,y*.06,0),i.stroke(),i.restore()}let m=i.createRadialGradient(e,t,f*.55,e,t,f*1.02);m.addColorStop(0,"rgba(60,60,40,0)"),m.addColorStop(1,"rgba(60,60,40,0.07)"),i.globalCompositeOperation="source-atop",i.fillStyle=m,i.beginPath(),i.arc(e,t,f,0,Math.PI*2),i.fill(),i.globalCompositeOperation="source-over"}let u=i.createRadialGradient(e,t,0,e,t,n*.13);u.addColorStop(0,a),u.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=u,i.beginPath(),i.arc(e,t,n*.13,0,Math.PI*2),i.fill()}function Rv(i,e,t,n,{petal:r,shade:s,seed:a=3}){let o=Fo(a);for(let c=0;c<520;c++){let l=o()*Math.PI*2,h=Math.sqrt(o())*n*.92,u=e+Math.cos(l)*h,d=t+Math.sin(l)*h;i.fillStyle=o()<.5?r:s,i.beginPath(),i.ellipse(u,d,n*.06,n*.035,l,0,Math.PI*2),i.fill(),i.strokeStyle="rgba(40,60,20,0.18)",i.lineWidth=.8,i.stroke()}}function Cv(i,e,t,n,{petal:r,shade:s,disc:a,ring:o,n:c=34,seed:l=7,inner:h=.26}){let u=Fo(l);for(let d=0;d<2;d++)for(let p=0;p<c;p++){let f=p/c*Math.PI*2+d*(Math.PI/c),v=n*(d?.82:.97)*(.92+u()*.08),m=n*.07;i.save(),i.translate(e,t),i.rotate(f);let x=i.createLinearGradient(n*h,0,v,0);x.addColorStop(0,s),x.addColorStop(.3,r),x.addColorStop(1,r),i.fillStyle=x,i.beginPath(),i.moveTo(n*h*.9,-m*.5),i.lineTo(v*.95,-m*.6),i.quadraticCurveTo(v,0,v*.95,m*.6),i.lineTo(n*h*.9,m*.5),i.fill(),i.strokeStyle="rgba(0,0,0,0.08)",i.lineWidth=1,i.stroke(),i.restore()}i.fillStyle=o,i.beginPath(),i.arc(e,t,n*h,0,Math.PI*2),i.fill(),i.fillStyle=a,i.beginPath(),i.arc(e,t,n*h*.62,0,Math.PI*2),i.fill();for(let d=0;d<60;d++){let p=u()*Math.PI*2,f=u()*n*h*.9;i.fillStyle="rgba(255,230,140,0.5)",i.fillRect(e+Math.cos(p)*f,t+Math.sin(p)*f,2,2)}}function Pv(i,e,t){let n=i.createLinearGradient(0,t,0,0);n.addColorStop(0,"#c9d9a0"),n.addColorStop(.28,"#f4f6e8"),n.addColorStop(1,"#ffffff"),i.fillStyle=n,i.beginPath(),i.moveTo(e/2,t),i.bezierCurveTo(e*.02,t*.7,e*.05,t*.25,e/2,2),i.bezierCurveTo(e*.95,t*.25,e*.98,t*.7,e/2,t),i.fill(),i.strokeStyle="rgba(150,170,110,0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(e/2,t),i.lineTo(e/2,t*.12),i.stroke(),i.fillStyle="rgba(170,90,70,0.35)";for(let r=0;r<10;r++)i.fillRect(e*.35+Math.random()*e*.3,t*.55+Math.random()*t*.25,2,3)}function Iv(i,e,t){let n=i.createLinearGradient(0,0,e,0);n.addColorStop(0,"#3f5c30"),n.addColorStop(1,"#6f8f4c"),i.fillStyle=n,i.beginPath(),i.moveTo(e*.02,t/2),i.bezierCurveTo(e*.3,t*.02,e*.75,t*.05,e*.98,t/2),i.bezierCurveTo(e*.75,t*.95,e*.3,t*.98,e*.02,t/2),i.fill(),i.strokeStyle="rgba(220,235,190,0.45)",i.lineWidth=2,i.beginPath(),i.moveTo(e*.04,t/2),i.lineTo(e*.94,t/2),i.stroke();for(let r=1;r<6;r++)i.beginPath(),i.moveTo(e*(.12+r*.13),t/2),i.lineTo(e*(.2+r*.13),t*.22),i.moveTo(e*(.12+r*.13),t/2),i.lineTo(e*(.2+r*.13),t*.78),i.stroke()}var Tm={white:{petal:"#fefefb",shade:"#e4e5d6",center:"#eef0dc",seed:11},cream:{petal:"#faf3df",shade:"#e6dcb4",center:"#efe5c4",seed:23},yellow:{petal:"#f7d24f",shade:"#cf9a24",center:"#a47a12",seed:37},pink:{petal:"#f7dfe3",shade:"#ddafb8",center:"#d79aa5",seed:41}},wd={gerbera:{petal:"#f2849c",shade:"#d55c78",disc:"#4a3a1c",ring:"#c9b24a",n:30},gerberaY:{petal:"#ffcf3d",shade:"#e8a21b",disc:"#5a3d14",ring:"#d7a83a",n:30},aster:{petal:"#cf9ad9",shade:"#a86fb6",disc:"#e7c33a",ring:"#f1d75a",n:22,inner:.3}},Gt={},Lv={white:"mum.png",gerbera:"gerbera.png",gerberaY:"gerbera_y.png",lying:"mum_lying.png",stem:"mum_stem.png"},Dv={cream:"#f6ecd2",yellow:"#f2c230",pink:"#f3d0d8"};async function Rm(i="./flowers/"){let e=r=>new Promise(s=>{let a=new Image;a.onload=()=>s(a),a.onerror=()=>s(null),a.src=i+r}),t=await Promise.all(Object.entries(Lv).map(async([r,s])=>[r,await e(s)]));for(let[r,s]of t){if(!s)continue;let a=document.createElement("canvas");a.width=s.width,a.height=s.height,a.getContext("2d").drawImage(s,0,0),Gt[`c:${r}`]=a,Gt[`photo:${r}`]=!0}let n=Gt["c:white"];if(n)for(let[r,s]of Object.entries(Dv)){let a=document.createElement("canvas");a.width=n.width,a.height=n.height;let o=a.getContext("2d");o.drawImage(n,0,0),o.globalCompositeOperation="multiply",o.fillStyle=s,o.fillRect(0,0,a.width,a.height),o.globalCompositeOperation="destination-in",o.drawImage(n,0,0),Gt[`c:${r}`]=a,Gt[`photo:${r}`]=!0}}function Ad(i){let e=new Tn(i);return e.colorSpace=Rt,e.anisotropy=8,e}function Rd(i){if(Gt[`c:${i}`])return Gt[`c:${i}`];let e=Am(512),t=e.getContext("2d");return i==="lily"?(e.width=128,e.height=256,Pv(t,128,256)):i==="pompon"?Rv(t,256,256,240,{petal:"#d9e6a6",shade:"#a9c06c"}):i==="leaf"?(e.width=256,e.height=128,Iv(t,256,128)):wd[i]?Cv(t,256,256,248,wd[i]):Av(t,256,256,248,Tm[i]||Tm.white),Gt[`c:${i}`]=e,e}function Cd(i){if(Gt[`m:${i}`])return Gt[`m:${i}`];let e=Ad(Rd(i)),t=i==="leaf"?0:Gt[`photo:${i}`]?.1:i==="white"||i==="lily"||i==="cream"?.28:.14,n=new Be({map:e,alphaTest:.42,side:St,roughness:.85,emissive:"#ffffff",emissiveMap:e,emissiveIntensity:t});return Gt[`m:${i}`]=n,n}function _a(i,e,t=.42*Math.PI,n=1){let r=new mt(1,20,5,0,Math.PI*2,0,t),s=r.attributes.position,a=r.attributes.uv,o=Math.sin(t),c=Math.cos(t);for(let l=0;l<s.count;l++){let h=s.getX(l),u=s.getY(l),d=s.getZ(l);a.setXY(l,.5+h/(2*o)*n,.5+d/(2*o)*n),s.setXYZ(l,h/o*i,(u-c)/(1-c)*e,d/o*i)}return r.computeVertexNormals(),r}function Pd(i){let e=[],t=[],n=[],r=[],s=0;for(let o of i){let c=o.attributes.position,l=o.attributes.normal,h=o.attributes.uv;for(let d=0;d<c.count;d++)e.push(c.getX(d),c.getY(d),c.getZ(d)),t.push(l.getX(d),l.getY(d),l.getZ(d)),n.push(h.getX(d),h.getY(d));let u=o.index.array;for(let d=0;d<u.length;d++)r.push(u[d]+s);s+=c.count}let a=new Pt;return a.setAttribute("position",new Ve(e,3)),a.setAttribute("normal",new Ve(t,3)),a.setAttribute("uv",new Ve(n,2)),a.setIndex(r),a}var cs,Sd,Td,Zc;function Cm(){if(!cs&&Gt["photo:white"]){let i=_a(1,.28,.42*Math.PI,1),e=_a(.6,.3,.42*Math.PI,1);e.rotateY(1.3),e.translate(0,.14,0),cs=Pd([i,e]),cs.rotateX(Math.PI/2)}if(!cs){let i=_a(1,.2,.42*Math.PI,1),e=_a(.74,.36,.42*Math.PI,1);e.rotateY(.9),e.translate(0,.07,0);let t=_a(.48,.42,.45*Math.PI,1);t.rotateY(2.1),t.translate(0,.17,0),cs=Pd([i,e,t]),cs.rotateX(Math.PI/2)}return cs}function Nv(){return Zc||(Zc=_a(1,.12,.4*Math.PI,1),Zc.rotateX(Math.PI/2)),Zc}function Uv(){if(!Sd){let i=[];for(let e=0;e<6;e++){let t=new yt(.38,1,2,8),n=t.attributes.position;for(let r=0;r<n.count;r++){let s=n.getY(r)+.5,a=n.getX(r)*(.35+Math.sin(s*Math.PI)*.9);n.setXYZ(r,a,s,.55*s-.62*s*s+Math.abs(a)*.25)}t.computeVertexNormals(),t.rotateZ(e/6*Math.PI*2+e%2*.12),e%2&&t.scale(.9,.9,1),i.push(t)}Sd=Pd(i)}return Sd}function Pm(){return Td||(Td=new yt(1,.5)),Td}function kv(i){return i==="leaf"?Pm():i==="lily"?Uv():wd[i]?Nv():Cm()}var wm={white:[.12,.035],cream:[.12,.03],yellow:[.1,.03],pink:[.11,.03],pompon:[.09,.02],lily:[.2,.04],gerbera:[.1,.015],gerberaY:[.1,.015],aster:[.055,.012],leaf:[.24,.1]};function Im(i,e,t){let n=new nt,r=new Dn,s=new Dn,a=new S,o=new et,c=new S(0,0,1);for(let[l,h]of Object.entries(i)){if(!h.length)continue;let u=new Ki(kv(l),Cd(l),h.length);h.forEach(({p:d,n:p},f)=>{let[v,m]=wm[l]||wm.white,x=v+e()*m,g=l==="leaf"?p:p.clone().add(new S((e()-.5)*.45,(e()-.5)*.35,0)).normalize();r.setFromUnitVectors(c,g),s.setFromAxisAngle(c,e()*Math.PI*2),r.multiply(s),a.set(x,x,x),n.compose(d,r,a),u.setMatrixAt(f,n),o.setHSL(0,0,.88+e()*.12),u.setColorAt(f,o)}),u.instanceMatrix.needsUpdate=!0,u.receiveShadow=!0,u.castShadow=l==="lily",u.userData.interact="altar",t.add(u)}}function Lm({floor:i}){let e=new we,t=Fo(4321),n={white:[],cream:[],yellow:[],pompon:[],lily:[],gerbera:[],gerberaY:[],aster:[],leaf:[]},r=[{c:[0,1,-9.9],r:[4.25,.5,.55],tier:"low"},{c:[-4.05,1.25,-10.05],r:[1.15,.85,.5],tier:"side"},{c:[4.05,1.25,-10.05],r:[1.15,.85,.5],tier:"side"},{c:[0,2.35,-10.5],r:[1.2,1.15,.45],tier:"top"},{c:[-1.75,2.05,-10.42],r:[.95,.85,.45],tier:"mid"},{c:[1.75,2.05,-10.42],r:[.95,.85,.45],tier:"mid"},{c:[-3,2.2,-10.35],r:[.55,1,.42],tier:"tall"},{c:[3,2.2,-10.35],r:[.55,1,.42],tier:"tall"}],s=.17;for(let l of r){let[h,u,d]=l.c,[p,f,v]=l.r;for(let m=-.25;m<=Math.PI/2;m+=s/Math.max(f,.3)){let x=Math.max(.05,Math.cos(m)),g=s/Math.max(.12,p*x);for(let y=-Math.PI/2-.15;y<=Math.PI/2+.15;y+=g){let E=y+(t()-.5)*g*.5,A=new S(h+p*x*Math.sin(E),i+u+f*Math.sin(m),d+v*x*Math.cos(E)),M=A.y-i;if(Math.abs(A.x)<.74&&M>1.58&&M<3.2&&l.tier==="top")continue;let D=new S((A.x-h)/(p*p),(M-u)/(f*f),(A.z-d)/(v*v)).normalize();D.lerp(new S(0,.25,1).normalize(),.35).normalize();let F="white",L=Math.abs(E)>1.25||m>1.3;M<.62?F=t()<.5?"leaf":"pompon":l.tier==="low"&&A.x>.2&&A.x<2.3&&M<1.45?F=t()<.45?"gerberaY":"yellow":l.tier==="low"&&Math.abs(Math.abs(A.x)-1.75)<.42&&M>1.15?F="lily":l.tier==="top"&&Math.abs(A.x)<.8&&M<1.62&&M>1.2?F="gerbera":l.tier==="top"&&Math.abs(Math.abs(A.x)-.86)<.12&&M>1.6?F="yellow":L&&t()<.45||l.tier==="low"&&t()<.12?F="aster":t()<.06&&(F="cream"),n[F].push({p:A,n:D}),F!=="leaf"&&t()<.25&&n.leaf.push({p:A.clone().addScaledVector(D,-.06).add(new S((t()-.5)*.15,(t()-.5)*.15,0)),n:D.clone().applyAxisAngle(new S(0,1,0),(t()-.5)*1.5)})}}}Im(n,t,e);let a=new Be({color:"#34482c",roughness:1});for(let l of r){let h=new z(new mt(1,24,12,-Math.PI/2,Math.PI,0,Math.PI*.62),a);h.scale.set(l.r[0]*.95,l.r[1]*.95,l.r[2]*.9),h.position.set(l.c[0],i+l.c[1]-l.r[1]*.12,l.c[2]-.03),h.rotation.y=0,e.add(h)}let o=new z(new _e(9.8,.95,1.5),new Be({color:"#4f4037",roughness:.6}));o.position.set(0,i+.475,-10.2),o.receiveShadow=!0,e.add(o);let c=new Be({color:"#1f2620",roughness:.8});for(let l of r){let h=new z(new _e(l.r[0]*1.6,.16,l.r[2]*1.2),c);h.position.set(l.c[0],i+l.c[1]-.05,l.c[2]-.05),e.add(h)}return e}function Dm({floor:i,z:e=-10.4,width:t=6.6,top:n=2.9,arch:r=1.25,cut:s={w:.98,y0:1.42,y1:3.4},accent:a="yellow"}={}){let o=new we,c=Fo(777),l={white:[],cream:[],[a]:[],pompon:[],lily:[],aster:[],leaf:[]},h=.19,u=0;for(let d=.12;d<=n+r+.1;d+=h*.86,u++)for(let p=-t+u%2*h*.5;p<=t;p+=h){let f=n+r*Math.cos(p/t*(Math.PI/2))**1.3;if(d>f||Math.abs(p)<s.w&&d>s.y0&&d<s.y1)continue;let v=d/4*.4,m=new S(p+(c()-.5)*.05,i+d+(c()-.5)*.05,e-v+(c()-.5)*.06),x=new S((c()-.5)*.4,.3+(c()-.5)*.3,1).normalize(),g=1.2+.55*Math.sin(p*.6+.8)+.16*Math.sin(p*1.7),y="white",E=Math.abs(p)<s.w+.55&&d>s.y0-.25&&d<s.y1+.3;d<.42?y=c()<.55?"pompon":"leaf":E&&c()<.4?y="lily":Math.abs(d-g)<.15?y=a:Math.abs(d-(g+.27))<.08&&c()<.75?y="cream":d>f-.2&&c()<.35&&(y="aster"),l[y].push({p:m,n:x}),y!=="leaf"&&c()<.3&&l.leaf.push({p:m.clone().add(new S((c()-.5)*.18,(c()-.5)*.18,-.07)),n:new S(c()-.5,c()-.5,1).normalize()})}return Im(l,c,o),o}function Nm(i=1){if(!Gt["photo:lying"])return null;let e=Gt["c:lying"];Gt["m:lying"]||(Gt["m:lying"]=new Be({map:Ad(e),alphaTest:.4,side:St,roughness:.85,emissive:"#ffffff",emissiveMap:Ad(e),emissiveIntensity:.1}));let t=.62,n=t*(e.height/e.width),r=new we,s=new z(new yt(t,n),Gt["m:lying"]);s.rotation.x=-Math.PI/2;let a=new z(new yt(t,n),Gt["m:lying"]);return a.rotation.x=-Math.PI/2+.55,a.position.y=.04,r.add(s,a),r.scale.setScalar(i),r}function Pi(i=1,e="white"){let t=new we,n=Gt.stem||(Gt.stem=new Be({color:"#5d7a46",roughness:.8})),r=new z(new be(.008,.008,.42,6),n);r.position.y=-.21,t.add(r);let s=new z(Pm(),Cd("leaf"));s.scale.setScalar(.11),s.position.set(.04,-.24,0),s.rotation.set(.3,.4,.6),t.add(s);let a=new z(Cm(),Cd(e));return a.scale.setScalar(.07),a.rotation.x=-Math.PI/2,t.add(a),t.scale.setScalar(i),t.traverse(o=>{o.isMesh&&(o.castShadow=!0)}),t}function Oo(i="white"){let e=`w:${i}`;if(Gt[e])return Gt[e];let t=Am(512),n=t.getContext("2d"),r=Rd("leaf");for(let o=0;o<40;o++){let c=o/40*Math.PI*2;n.save(),n.translate(256+Math.cos(c)*225,256+Math.sin(c)*225),n.rotate(c),n.drawImage(r,-40,-20,80,40),n.restore()}let s=(o,c,l,h)=>{let u=Rd(h);for(let d=0;d<c;d++){let p=d/c*Math.PI*2+o*.01;n.drawImage(u,256+Math.cos(p)*o-l/2,256+Math.sin(p)*o-l/2,l,l)}};return s(205,26,64,i==="yellow"?"yellow":"white"),s(160,22,62,i==="mixed"?"yellow":"white"),s(115,16,60,"white"),s(70,10,58,i==="pink"?"pink":"cream"),s(0,1,92,"white"),Gt[e]=t,t}var Cr={suit:{label:"\uAC80\uC740 \uC815\uC7A5",who:"guest",top:"#202228",sleeve:"#202228",pants:"#1b1c21",shirt:!0,tie:"#0e0e10",shoes:"#141414"},shirt:{label:"\uAC80\uC740 \uC154\uCE20",who:"guest",top:"#25272d",sleeve:"#25272d",pants:"#2b2d33",collar2:!0,shoes:"#141414"},dress:{label:"\uAC80\uC740 \uC6D0\uD53C\uC2A4",who:"guest",top:"#1f2025",sleeve:"#1f2025",skirt:"#1f2025",skirtLen:.34,shoes:"#141414",collar:"#f3f1ea"},hanbokBlack:{label:"\uAC80\uC740 \uD55C\uBCF5",who:"guest",top:"#25262c",sleeve:"#25262c",skirt:"#1a1b20",skirtLen:.5,goreum:"#25262c",shoes:"#f3f1ea"},hostSuit:{label:"\uAC80\uC740 \uC591\uBCF5 \xB7 \uC644\uC7A5",who:"host",desc:"\uC694\uC998 \uAC00\uC7A5 \uD754\uD55C \uC0C1\uC8FC \uCC28\uB9BC. \uC67C\uD314\uC5D0 \uC644\uC7A5, \uAC00\uC2B4\uC5D0 \uC0C1\uC8FC \uB9AC\uBCF8",top:"#1b1c21",sleeve:"#1b1c21",pants:"#17181c",shirt:!0,tie:"#0e0e10",shoes:"#141414",armband:!0,ribbon:!0},hostHanbok:{label:"\uAC80\uC740 \uC0C1\uBCF5 \uD55C\uBCF5",who:"host",desc:"\uAC80\uC740 \uCE58\uB9C8\uC800\uACE0\uB9AC\uC5D0 \uD770 \uBA38\uB9AC \uB9AC\uBCF8",top:"#222329",sleeve:"#222329",skirt:"#18191d",skirtLen:.5,goreum:"#f5f3ec",shoes:"#f3f1ea",hairRibbon:!0,ribbon:!0},sambe:{label:"\uC804\uD1B5 \uC0BC\uBCA0 \uC0C1\uBCF5",who:"host",desc:"\uAD74\uAC74\uC81C\uBCF5 \xB7 \uC218\uC9C8 \xB7 \uC694\uC9C8, \uC190\uC5D0 \uC0C1\uC7A5(\uC9C0\uD321\uC774)",top:"#d7c9a6",sleeve:"#d7c9a6",robe:"#d3c49f",shoes:"#cdbd96",hood:!0,rope:"#a89067",cane:!0},sobok:{label:"\uD770 \uC18C\uBCF5",who:"host",desc:"\uD770 \uCE58\uB9C8\uC800\uACE0\uB9AC, \uB2E8\uC815\uD55C \uBA38\uB9AC\uC5D0 \uD770 \uB9AC\uBCF8",top:"#f4f1e8",sleeve:"#f4f1e8",skirt:"#efebe0",skirtLen:.5,goreum:"#e9e4d6",shoes:"#f3f1ea",hairRibbon:!0}},Ft={hipsY:.42,torsoX:0,headX:0,headY:0,aLx:0,aLz:.12,aRx:0,aRz:-.12,lLx:0,lRx:0,lLz:0,lRz:0,eyes:0},Um=Object.keys(Ft),Mt=i=>({...Ft,...i}),km=Mt({aLx:-2.25,aRx:-2.25,aLz:-.55,aRz:.55,headX:.1,eyes:1}),Bm=Mt({hipsY:.17,lLx:1.5,lRx:1.5,torsoX:.12,aLx:-.9,aRx:-.9,aLz:-.25,aRz:.25,eyes:1}),Fm=Mt({hipsY:.17,lLx:1.5,lRx:1.5,torsoX:1.18,headX:.15,aLx:-1.85,aRx:-1.85,aLz:-.3,aRz:.3,eyes:1}),Jc=Mt({torsoX:.5,headX:.25,aLx:-.35,aRx:-.35,aLz:-.35,aRz:.35,eyes:1}),hs=Mt({torsoX:.28,headX:.25,aLz:-.05,aRz:.05,eyes:1}),us=Mt({aLx:-1.25,aRx:-1.25,aLz:-.8,aRz:.8}),Om=Mt({aLx:-1,aRx:-1,aLz:-.8,aRz:.8,torsoX:.42,headX:.25,eyes:1}),ba=Mt({aLx:-1.05,aRx:-1.05,aLz:-.78,aRz:.78,torsoX:.08,headX:.38,eyes:1}),Hm=Mt({headX:.45,torsoX:.06,aLz:-.12,aRz:.12,aLx:-.15,aRx:-.15,eyes:1}),Id=Mt({hipsY:.13,lLx:-1.45,lRx:-1.45,lLz:.18,lRz:-.18,aLx:-.6,aRx:-.6,aLz:-.15,aRz:.15}),Gm=Mt({...Id,aRx:-2,aRz:.55,headX:-.05}),zm=Mt({aRx:-.85,aRz:.15}),ds=Mt({aLx:-1.35,aRx:-1.35,aLz:-.35,aRz:.35,torsoX:.28,headX:.1}),Vm=Mt({aRx:-1.35,aRz:.18,aLx:-.4,aLz:-.4,torsoX:.22,headX:.1}),Wm=Mt({aLx:-1.2,aRx:-1.2,aLz:-.4,aRz:.4,torsoX:.15}),jm=Mt({aRx:-2.6,aRz:-.5}),Ho=Mt({aRx:-1.25,aRz:.05,torsoX:.15,headX:.15}),Go=Mt({aRx:-1.75,aRz:.15,torsoX:.08,headX:.1}),Xm=Mt({aLx:-1.45,aRx:-1.45,aLz:-.6,aRz:.6,torsoX:.12,headX:.2,eyes:1});function zo(){return[{p:km,d:.6},{p:Bm,d:.75},{p:Fm,d:.85},{p:Fm,d:.55},{p:Bm,d:.6},{p:km,d:.6}]}var Bv={bow:()=>[...zo(),{p:Ft,d:.6}],bow2:()=>[...zo(),...zo(),{p:Ft,d:.5},{p:hs,d:.4},{p:hs,d:.35},{p:Ft,d:.4}],pour:()=>[{p:ds,d:.7},{p:Mt({...ds,aRx:-1.55,aRz:.1}),d:.6,cue:"pour"},{p:ds,d:.5,cue:"release"},{p:Ft,d:.6}],bow3:()=>[...zo(),...zo(),{p:Ft,d:.5},{p:hs,d:.4},{p:hs,d:.35},{p:Ft,d:.4}],halfBow:()=>[{p:Jc,d:.6},{p:Jc,d:.8},{p:Ft,d:.6}],nod:()=>[{p:hs,d:.5},{p:hs,d:.9},{p:Ft,d:.5}],hapjang:()=>[{p:us,d:.6},{p:us,d:.4},{p:Om,d:.7},{p:Om,d:1.2},{p:us,d:.6},{p:Ft,d:.6}],prayer:()=>[{p:ba,d:.8},{p:ba,d:4.2},{p:Ft,d:.7}],silence:()=>[{p:Hm,d:.9},{p:Hm,d:8.2},{p:Ft,d:.8}],sign:()=>[{p:Mt({aRx:-2.55,aRz:.42,eyes:1,headX:.15}),d:.6},{p:Mt({aRx:-1.45,aRz:.6,eyes:1,headX:.15}),d:.5},{p:Mt({aRx:-1.75,aRz:1,eyes:1,headX:.15}),d:.45},{p:Mt({aRx:-1.95,aRz:.12,eyes:1,headX:.15}),d:.45},{p:ba,d:.6},{p:ba,d:1.4},{p:Ft,d:.6}],incense:()=>[{p:Vm,d:.7,cue:"reach"},{p:Vm,d:.9,cue:"light"},{p:us,d:.6},{p:Ft,d:.6}],offer:()=>[{p:ds,d:.8},{p:ds,d:.5,cue:"release"},{p:Jc,d:.6},{p:Jc,d:.6},{p:Ft,d:.6}],candle:()=>[{p:ds,d:.8},{p:ds,d:.5,cue:"release"},{p:ba,d:.6},{p:ba,d:1},{p:Ft,d:.6}],beads:()=>{let i=[{p:us,d:.5}];for(let e=0;e<7;e++)i.push({p:Mt({...us,headX:.22,eyes:1,aRx:-1.15}),d:.32,cue:"bead"},{p:Mt({...us,headX:.2,eyes:1}),d:.32});return i.push({p:Ft,d:.6}),i},give:()=>[{p:Wm,d:.7},{p:Wm,d:.4,cue:"release"},{p:hs,d:.6},{p:Ft,d:.6}],eat:()=>{let i=[];for(let e=0;e<3;e++)i.push({p:Gm,d:.55},{p:Gm,d:.25,cue:"bite"},{p:Id,d:.6});return i},wave:()=>[{p:jm,d:.4},{p:Mt({aRx:-2.6,aRz:-.1}),d:.3},{p:jm,d:.3},{p:Mt({aRx:-2.6,aRz:-.1}),d:.3},{p:Ft,d:.5}],shake:()=>[{p:Ho,d:.5},{p:Mt({...Ho,aRx:-1.1}),d:.2},{p:Ho,d:.2},{p:Mt({...Ho,aRx:-1.1}),d:.2},{p:Ho,d:.3},{p:Ft,d:.5}],pat:()=>[{p:Go,d:.5},{p:Mt({...Go,aRx:-1.55}),d:.22},{p:Go,d:.22},{p:Mt({...Go,aRx:-1.55}),d:.22},{p:Go,d:.22},{p:Ft,d:.5}],hug:()=>[{p:Xm,d:.6},{p:Xm,d:1.6},{p:Ft,d:.6}]},Fv={flower:zm,sit:Id,envelope:zm},ct=(i,e={})=>new Be({color:i,roughness:.75,metalness:0,...e}),ci=class{constructor({outfit:e="suit",look:t=_n}={}){this.root=new we,this.root.name="avatar",this.body=new we,this.root.add(this.body),this.hips=new we,this.torso=new we,this.head=new we,this.armL=new we,this.armR=new we,this.legL=new we,this.legR=new we,this.body.add(this.hips),this.hips.add(this.torso,this.legL,this.legR),this.torso.add(this.head,this.armL,this.armR),this.head.position.y=.66,this.armL.position.set(.25,.43,0),this.armR.position.set(-.25,.43,0),this.legL.position.set(.1,0,0),this.legR.position.set(-.1,0,0),this.cur={...Ft},this.seq=null,this.hold=null,this.walkPhase=0,this.moving=0,this.blinkT=2+Math.random()*3,this.parts=[],this.props={},this.expr=null,this.exprT=0,this.tears=[],this.barefoot=!1,this.outfitId=Cr[e]?e:"suit",this.look={..._n,...t},this.rebuild()}get height(){return this.look.height||1}setOutfit(e){this.outfitId=Cr[e]?e:"suit",this.rebuild()}setLook(e){this.look={..._n,...e},this.rebuild()}setBarefoot(e){this.barefoot!==e&&(this.barefoot=e,this.rebuild())}part(e,t,n,r,s={}){let a=new z(t,n);return r&&a.position.set(...r),s.rot&&a.rotation.set(...s.rot),s.scale&&a.scale.set(...s.scale),a.castShadow=s.shadow!==!1,e.add(a),this.parts.push(a),a}rebuild(){let e=Object.values(this.props).map(u=>{let d=u.parent===this.handL?"L":"R";return u.parent?.remove(u),[u,d]});for(let u of this.parts)u.parent?.remove(u),u.geometry?.dispose?.();this.parts=[];let t=Cr[this.outfitId],n=this.look,r=ct(n.skin,{roughness:.9});this.root.scale.setScalar(n.height||1);let s=this.part(this.head,new mt(.3,32,24),r,[0,0,0],{scale:[1,.94,.96]});s.userData.skin=!0;let a=new mt(.06,14,10);this.handL=this.part(this.armL,a,r,[0,-.34,0]),this.handR=this.part(this.armR,a,r,[0,-.34,0]),this.buildFace(n);let o=ct(t.top);if(t.robe?(this.part(this.torso,new be(.19,.31,.92,20),ct(t.robe,{roughness:1}),[0,.06,0]),this.part(this.torso,new mt(.2,18,12,0,Math.PI*2,0,Math.PI/2),ct(t.robe,{roughness:1}),[0,.5,0])):this.part(this.torso,new Qn(.2,.16,6,18),o,[0,.28,0]),t.shirt){let u=new Si;u.moveTo(-.075,.12),u.lineTo(.075,.12),u.lineTo(0,-.08),u.closePath(),this.part(this.torso,new Ar(u),ct("#f5f4ef"),[0,.4,.198],{rot:[-.12,0,0],shadow:!1}),this.part(this.torso,new _e(.035,.14,.01),ct(t.tie),[0,.39,.207],{rot:[-.12,0,0],shadow:!1})}if(t.collar2){for(let u of[-1,1])this.part(this.torso,new _e(.08,.05,.01),ct("#2f3238"),[.045*u,.5,.185],{rot:[-.3,0,u*.5],shadow:!1});for(let u=0;u<3;u++)this.part(this.torso,new mt(.01,6,4),ct("#6b6e75"),[0,.42-u*.08,.2],{shadow:!1})}if(t.collar&&this.part(this.torso,new wn(.11,.022,8,24),ct(t.collar),[0,.52,.02],{rot:[Math.PI/2-.25,0,0]}),t.goreum){let u=ct(t.goreum);this.part(this.torso,new _e(.05,.05,.03),u,[.05,.36,.2]),this.part(this.torso,new _e(.03,.2,.012),u,[.07,.25,.205],{rot:[0,0,.1]}),this.part(this.torso,new _e(.03,.16,.012),u,[.03,.26,.207],{rot:[0,0,-.1]}),this.part(this.torso,new _e(.03,.2,.012),ct("#f6f4ee"),[-.02,.45,.19],{rot:[-.2,0,-.7],shadow:!1})}if(t.ribbon){let u=ct("#f7f6f2");this.part(this.torso,new hn(.035,.06,4),u,[.1,.43,.2],{rot:[0,0,-Math.PI/2]}),this.part(this.torso,new hn(.035,.06,4),u,[.16,.43,.2],{rot:[0,0,Math.PI/2]}),this.part(this.torso,new _e(.025,.07,.01),ct("#111"),[.13,.39,.205])}t.rope&&this.part(this.torso,new wn(.235,.022,8,28),ct(t.rope,{roughness:1}),[0,.14,0],{rot:[Math.PI/2,0,0]});let c=t.robe?ct(t.robe,{roughness:1}):ct(t.sleeve);for(let[u,d]of[[this.armL,1],[this.armR,-1]])this.part(u,new Qn(.07,.2,4,12),c,[0,-.16,0]),t.armband&&d===1&&(this.part(u,new be(.078,.078,.08,16,1,!0),ct("#0f0f10"),[0,-.1,0]),this.part(u,new be(.081,.081,.012,16,1,!0),ct("#f4f4f0"),[0,-.085,0]),this.part(u,new be(.081,.081,.012,16,1,!0),ct("#f4f4f0"),[0,-.115,0]));let l=t.pants?ct(t.pants):ct("#efe9dd"),h=this.barefoot?ct(t.pants?"#1f1f22":"#f3f1ea"):ct(t.shoes);for(let u of[this.legL,this.legR])this.part(u,new Qn(.075,.18,4,10),l,[0,-.17,0]),this.part(u,new _e(this.barefoot?.11:.13,.07,.19),h,[0,-.37,.04]);if(t.skirt){let u=t.skirtLen||.4;this.part(this.hips,new be(.2,.34,u,22,1,!0),ct(t.skirt,{side:St}),[0,-u/2+.06,0])}if(t.hood){let u=ct("#d9cba7",{roughness:1});this.part(this.head,new mt(.32,24,16,0,Math.PI*2,0,Math.PI*.62),u,[0,.04,-.03],{rot:[-.62,0,0]});for(let d=-1;d<=1;d++)this.part(this.head,new _e(.05,.2,.42),u,[d*.07,.33,0],{rot:[0,0,d*.05]});this.part(this.head,new wn(.3,.028,8,28),ct(t.rope,{roughness:1}),[0,.17,-.02],{rot:[Math.PI/2-.35,0,0]})}else this.buildHair(n,t);t.cane&&this.part(this.handR,new be(.018,.018,1,8),ct("#8a7650"),[0,-.12,.02]);for(let[u,d]of e)(d==="L"?this.handL:this.handR).add(u);this.root.traverse(u=>{u.isMesh&&(u.userData.avatar=this,this.interactTag&&(u.userData.interact=this.interactTag))})}buildHair(e,t){let n=ct(e.hairColor,{roughness:.85}),r=()=>this.part(this.head,new mt(.322,26,16,0,Math.PI*2,0,Math.PI*.58),n,[0,.04,-.025],{rot:[-.6,0,0]});switch(e.hair){case"bald":break;case"part":r(),this.part(this.head,new mt(.15,16,10),n,[.1,.2,.17],{scale:[1.2,.55,.9],rot:[.2,0,-.35]});break;case"bob":r(),this.part(this.head,new be(.33,.35,.3,24,1,!0,1,Math.PI*2-2),ct(e.hairColor,{roughness:.85,side:St}),[0,-.07,-.01]);break;case"long":r(),this.part(this.head,new be(.33,.37,.58,24,1,!0,1.05,Math.PI*2-2.1),ct(e.hairColor,{roughness:.85,side:St}),[0,-.2,-.01]);break;case"pony":r(),this.part(this.head,new Qn(.07,.22,4,10),n,[0,-.12,-.36],{rot:[.35,0,0]}),this.part(this.head,new wn(.06,.015,6,14),ct("#111"),[0,.02,-.32],{rot:[1.2,0,0]});break;case"bun":r(),this.part(this.head,new mt(.115,16,12),n,[0,-.08,-.31]),this.part(this.head,new be(.012,.012,.38,8),ct("#7fa08c",{roughness:.3}),[0,-.07,-.33],{rot:[0,0,Math.PI/2]});break;case"perm":{let s=new mt(.075,10,8),a=new Ki(s,n,46),o=new nt,c=0;for(let l=0;l<4;l++){let h=.15+l*.36,u=l===0?4:8+l*3;for(let d=0;d<u&&c<46;d++){let p=d/u*Math.PI*2+l,f=Math.sin(h)*Math.cos(p),v=Math.cos(h),m=Math.sin(h)*Math.sin(p);m>.55&&v<.6||(o.makeTranslation(f*.31,v*.31+.02,m*.31-.02),a.setMatrixAt(c++,o))}}a.count=c,a.castShadow=!0,this.head.add(a),this.parts.push(a);break}default:r()}if(t.hairRibbon){let s=ct("#fbfaf6");this.part(this.head,new hn(.04,.08,4),s,[.18,.22,.12],{rot:[0,0,-Math.PI/2]}),this.part(this.head,new hn(.04,.08,4),s,[.26,.22,.1],{rot:[0,0,Math.PI/2]})}}buildFace(e){let t=ct("#1d1a18",{roughness:.4});this.eyes=[],this.eyeKind=this.expr==="cry"?"sad":this.expr==="smile"?"smile":e.eyes;let n=this.eyeKind;for(let o of[-1,1]){let c;if(n==="smile")c=this.part(this.head,new wn(.03,.008,6,12,Math.PI),t,[.1*o,-.005,.282],{shadow:!1});else if(n==="closed")c=this.part(this.head,new wn(.03,.007,6,12,Math.PI),t,[.1*o,.01,.282],{rot:[0,0,Math.PI],shadow:!1});else{let p=n==="round"?.042:.032;c=this.part(this.head,new mt(p,12,8),t,[.1*o,n==="sad"?-.01:0,.272],{scale:[1,1.25,.6],shadow:!1}),c.userData.blink=!0,n==="round"&&this.part(this.head,new mt(.011,6,4),ct("#ffffff"),[.1*o+.012,.016,.3],{shadow:!1})}if(this.eyes.push(c),e.blush){let p=new z(new Yt(.04,16),new cn({color:"#f29a8a",transparent:!0,opacity:.45}));p.position.set(.17*o,-.07,.262),p.rotation.y=.5*o,this.head.add(p),this.parts.push(p)}let l=this.expr==="cry"||n==="sad"?"sad":e.brows,h=l==="thick"?2:1,u=l==="sad"?-.38*o:-.06*o,d=ct(e.hair==="bald"?"#5a4a40":e.hairColor);this.part(this.head,new _e(.075,.014*h,.012),d,[.1*o,.085,.27],{rot:[-.2,0,u],shadow:!1})}let r=this.expr==="cry"?"sad":this.expr==="smile"?"smile":e.mouth,s=ct("#8a4b45");if(r==="smile"?this.part(this.head,new wn(.03,.007,6,12,Math.PI),s,[0,-.105,.272],{rot:[0,0,Math.PI],shadow:!1}):r==="sad"?this.part(this.head,new wn(.025,.007,6,12,Math.PI),s,[0,-.13,.27],{shadow:!1}):this.part(this.head,new _e(.045,.009,.01),s,[0,-.11,.276],{shadow:!1}),e.glasses!=="none"){let o=ct(e.glasses==="square"?"#2a211c":"#9a8a6a",{metalness:e.glasses==="round"?.6:0,roughness:.4});for(let c of[-1,1]){if(e.glasses==="round")this.part(this.head,new wn(.055,.008,6,20),o,[.1*c,.005,.3],{shadow:!1});else{let l=this.part(this.head,new wn(.058,.012,4,4),o,[.1*c,.005,.3],{rot:[0,0,Math.PI/4],scale:[1.25,.9,1],shadow:!1});l.rotation.z=Math.PI/4}this.part(this.head,new _e(.008,.008,.2),o,[.17*c,.01,.2],{rot:[0,-.35*c,0],shadow:!1})}this.part(this.head,new _e(.06,.008,.008),o,[0,.015,.305],{shadow:!1})}let a=ct(e.hairColor==="#e4e0d8"?"#d8d4cc":e.hairColor,{roughness:.9});(e.beard==="mustache"||e.beard==="beard")&&this.part(this.head,new Qn(.018,.07,4,8),a,[0,-.08,.282],{rot:[0,0,Math.PI/2],shadow:!1}),e.beard==="beard"&&this.part(this.head,new mt(.15,16,10,0,Math.PI*2,Math.PI*.55,Math.PI*.45),a,[0,.02,.06],{scale:[1.05,1.1,1.15]})}setExpression(e,t=4){this.expr=e,this.exprT=t,this.rebuild(),e==="cry"&&(this.tearT=0)}setProp(e,t,n={}){if(t&&!this.props[e]){let r;if(e==="flower"&&(r=Pi(.75),r.rotation.set(.2,0,0),r.position.set(0,-.02,.05)),e==="envelope"&&(r=new z(new _e(.2,.012,.11),ct(n.color||"#fbfaf4")),r.rotation.z=.3,r.position.set(0,-.05,.04)),e==="beads"){r=new we;let s=ct("#5a3a26",{roughness:.35}),a=new mt(.016,8,6);for(let o=0;o<24;o++){let c=o/24*Math.PI*2,l=new z(a,s);l.position.set(Math.cos(c)*.09,Math.sin(c)*.12-.08,0),r.add(l)}}if(!r)return;(e==="beads"?this.handL:this.handR).add(r),this.props[e]=r}else!t&&this.props[e]&&(this.props[e].parent?.remove(this.props[e]),delete this.props[e])}play(e,t,{soft:n=!1}={}){let r=Bv[e];return r?(this.seq&&this.seq.resolve?.(),new Promise(s=>{this.seq={steps:r(),i:0,t:0,from:{...this.cur},resolve:s,onCue:t,name:e,soft:n}})):Promise.resolve()}get busy(){return!!this.seq&&!this.seq.soft}cancelSoft(){if(this.seq?.soft){let e=this.seq.resolve;this.seq=null,e()}}finish(){if(!this.seq)return;let e=this.seq;e.i=e.steps.length-1,e.t=0,e.from={...this.cur}}update(e,t){this.moving+=((t?1:0)-this.moving)*Math.min(1,e*10);let n;if(this.seq){let c=this.seq,l=c.steps[c.i];c.t+=e;let h=Math.min(1,c.t/l.d),u=h*h*(3-2*h);n={};for(let d of Um)n[d]=c.from[d]+(l.p[d]-c.from[d])*u;h>=1&&(l.cue&&c.onCue?.(l.cue),c.i++,c.t=0,c.from={...l.p},c.i>=c.steps.length&&(this.seq=null,c.resolve())),this.cur=n}else{let c=this.hold&&Fv[this.hold]||Ft,l=Math.min(1,e*8);for(let h of Um)this.cur[h]+=(c[h]-this.cur[h])*l;n=this.cur}let r=this.moving;r>.01&&(this.walkPhase+=e*9.5);let s=Math.sin(this.walkPhase)*r,a=this.hold==="flower"||this.hold==="envelope";this.hips.position.y=n.hipsY+Math.abs(Math.cos(this.walkPhase))*.035*r,this.torso.rotation.set(n.torsoX+.04*r,0,s*.04),this.head.rotation.set(n.headX,n.headY,0),this.armL.rotation.set(n.aLx-s*.55,0,n.aLz),this.armR.rotation.set(n.aRx+(a?0:s*.55),0,n.aRz),this.legL.rotation.set(n.lLx+s*.6,0,n.lLz),this.legR.rotation.set(n.lRx-s*.6,0,n.lRz),this.blinkT-=e;let o=n.eyes;this.blinkT<0&&(o=1,this.blinkT<-.12&&(this.blinkT=2.5+Math.random()*3.5));for(let c of this.eyes)c.userData.blink&&(c.scale.y=o>.5?.18:1.25);this.props.beads&&(this.props.beads.rotation.z+=e*.6),this.expr&&(this.exprT-=e,this.expr==="cry"&&(this.tearT=(this.tearT||0)-e,this.tearT<=0&&(this.tearT=.45,this.spawnTear())),this.exprT<=0&&(this.expr=null,this.rebuild()));for(let c=this.tears.length-1;c>=0;c--){let l=this.tears[c];l.life-=e,l.mesh.position.y-=e*.18,l.mesh.material.opacity=Math.min(.85,l.life*1.5),l.life<=0&&(this.head.remove(l.mesh),this.tears.splice(c,1))}}spawnTear(){let e=Math.random()<.5?-1:1,t=new z(new mt(.018,8,6),new Be({color:"#9fd0ff",transparent:!0,opacity:.85,roughness:.1}));t.scale.set(.8,1.3,.8),t.position.set(.1*e,-.04,.28),this.head.add(t),this.tears.push({mesh:t,life:.9})}};var We=(i,e={})=>new Be({color:i,roughness:.82,metalness:0,...e});function Ii(i,e){let t=new Tn(i);return t.colorSpace=Rt,t.anisotropy=4,e&&(t.wrapS=t.wrapT=Xr,t.repeat.set(...e)),t}function Ov(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#e9e3d6",e.fillRect(0,0,256,256);for(let t=0;t<70;t++){e.strokeStyle=`rgba(160,150,130,${.05+Math.random()*.08})`,e.lineWidth=1+Math.random()*2,e.beginPath();let n=Math.random()*256,r=Math.random()*256;e.moveTo(n,r),e.bezierCurveTo(n+40,r+10,n+60,r+50,n+120,r+40),e.stroke()}return e.strokeStyle="rgba(140,130,115,0.45)",e.lineWidth=2,e.strokeRect(1,1,254,254),i}function Kc(i="#8a6446"){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d");t.fillStyle=i,t.fillRect(0,0,256,256);for(let n=0;n<8;n++)t.fillStyle=`rgba(${n%2?"255,240,220":"40,25,15"},0.06)`,t.fillRect(0,n*32,256,32),t.fillStyle="rgba(30,20,10,0.35)",t.fillRect(0,n*32,256,1.5),t.fillRect(n*97%256,n*32,1.5,32);for(let n=0;n<120;n++){t.strokeStyle="rgba(40,25,15,0.08)";let r=Math.random()*256;t.beginPath(),t.moveTo(0,r),t.bezierCurveTo(80,r+3,160,r-3,256,r+1),t.stroke()}return e}function $m(i=!1){let e=document.createElement("canvas");e.width=256,e.height=i?256:512;let t=e.getContext("2d"),n=["#3d6fa8","#c24f45","#e3b74a","#5c9a6b","#7d5aa6","#4fa3b8","#e58b4d"];t.save(),t.beginPath(),i?t.arc(128,128,124,0,Math.PI*2):(t.moveTo(8,512),t.lineTo(8,128),t.arc(128,128,120,Math.PI,0),t.lineTo(248,512),t.closePath()),t.clip();let r=32;for(let s=0;s<e.height;s+=r)for(let a=0;a<256;a+=r)t.fillStyle=n[Math.floor(Math.random()*n.length)],t.globalAlpha=.85,t.beginPath(),t.moveTo(a+Math.random()*8,s+Math.random()*8),t.lineTo(a+r-Math.random()*8,s+Math.random()*8),t.lineTo(a+r-Math.random()*8,s+r-Math.random()*8),t.lineTo(a+Math.random()*8,s+r-Math.random()*8),t.fill();t.globalAlpha=1,t.strokeStyle="#26221e",t.lineWidth=4;for(let s=0;s<e.height;s+=r)t.beginPath(),t.moveTo(0,s),t.lineTo(256,s),t.stroke();for(let s=0;s<256;s+=r)t.beginPath(),t.moveTo(s,0),t.lineTo(s,e.height),t.stroke();if(i)for(let s=0;s<12;s++){let a=s/12*Math.PI*2;t.beginPath(),t.moveTo(128,128),t.lineTo(128+Math.cos(a)*130,128+Math.sin(a)*130),t.stroke()}else t.fillStyle="rgba(255,248,220,0.85)",t.fillRect(118,150,20,200),t.fillRect(78,200,100,20);return t.restore(),e}function Hv(){let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,512,0);t.addColorStop(0,"#5e4b3d"),t.addColorStop(.5,"#6b5646"),t.addColorStop(1,"#5a4739"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let n=0;n<160;n++){e.strokeStyle=`rgba(90,55,25,${.04+Math.random()*.06})`;let r=Math.random()*512;e.beginPath(),e.moveTo(r,0),e.bezierCurveTo(r+6,170,r-6,340,r+3,512),e.stroke()}return e.fillStyle="#f7f5ef",e.fillRect(56,40,400,300),e.strokeStyle="#3f3229",e.lineWidth=6,e.strokeRect(53,37,406,306),e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=2,e.strokeRect(70,54,372,272),e.strokeStyle="rgba(80,45,20,0.45)",e.lineWidth=3,e.strokeRect(56,380,400,110),e.fillStyle="rgba(255,240,215,0.08)",e.fillRect(56,380,400,110),e.fillStyle="#3f3229",e.fillRect(0,352,512,10),i}function Gv(){let i=document.createElement("canvas");i.width=i.height=256;let e=i.getContext("2d");e.fillStyle="#d8d6cf",e.fillRect(0,0,256,256);for(let t=0;t<2600;t++)e.fillStyle=`rgba(${Math.random()<.5?"255,255,255":"90,90,85"},${Math.random()*.12})`,e.fillRect(Math.random()*256,Math.random()*256,2,2);return i}function qm(i,{FLOOR:e,textTexture:t,rng:n,deceasedName:r=""}){let s=n(4242),a=new we,o=[],c=[],l=[],h=[],u=[],d={group:a,boxes:o,circles:c,walkables:l,lampMats:h,shoes:!1,update:(g,y)=>u.forEach(E=>E(g,y)),setName:()=>{}},p=(g,y,E,A)=>o.push({x0:g,x1:y,z0:E,z1:A}),f=(g,y,E={})=>(y&&g.position.set(...y),E.rot&&g.rotation.set(...E.rot),g.castShadow=E.cast!==!1,g.receiveShadow=E.receive!==!1,a.add(g),E.walk&&l.push(g),g),v=(g,y,E,A,M,D)=>f(new z(new _e(g,y,E),A),M,D),m=g=>(g.raycast=()=>{},g);function x(g,y){v(21,e,13.5,We(g,{roughness:.95}),[0,e/2,-5.75],{walk:!0});let E=f(new z(new yt(20.4,13),y),[0,e+.004,-5.9],{rot:[-Math.PI/2,0,0],cast:!1,walk:!0});for(let A=0;A<2;A++)v(7,e*(.66-A*.33),.6,We(g),[0,e*(.66-A*.33)/2,1.25+A*.6],{walk:!0});return E}if(i==="hospital"){d.shoes=!0,d.ceiling=e+3.7;let g=3.7;x("#cfcbc0",We("#d9d7d0",{roughness:.75,map:Ii(Gv(),[12,8])}));let y=Ii(Hv());y.wrapS=Xr;let E=fe=>{let re=y.clone();return re.repeat.set(fe/2.2,1),re.needsUpdate=!0,new Be({map:re,roughness:.7})},A=We("#f3f1ea",{roughness:.9});v(20.6,g,.3,A,[0,e+g/2,-12.2]),p(-10.5,10.5,-12.6,-11.9),m(f(new z(new yt(20.4,g),E(20.4)),[0,e+g/2,-12.04],{cast:!1}));for(let fe of[-1,1])v(.3,g,12.2,A,[fe*10.15,e+g/2,-6.2]),p(fe*10.15-.3,fe*10.15+.3,-12.4,-.05),m(f(new z(new yt(12.2,g),E(12.2)),[fe*9.99,e+g/2,-6.2],{rot:[0,-fe*Math.PI/2,0],cast:!1}));let M=We("#5e4b3d",{roughness:.55});v(10.4,.5,.3,M,[0,e+3.3,-11.9]);for(let fe of[-5.1,5.1])v(.5,g,.4,M,[fe,e+g/2,-11.85]);let D=document.createElement("canvas");D.width=1024,D.height=512;let F=D.getContext("2d");F.fillStyle="#9c8b7a",F.fillRect(0,0,1024,512);for(let fe=0;fe<420;fe++){let re=Math.random()*1024;F.strokeStyle=`rgba(${Math.random()<.5?"70,55,42":"205,192,175"},${.05+Math.random()*.08})`,F.lineWidth=.6+Math.random()*1.6,F.beginPath(),F.moveTo(re,0),F.bezierCurveTo(re+(Math.random()-.5)*14,170,re+(Math.random()-.5)*14,340,re+(Math.random()-.5)*8,512),F.stroke()}F.fillStyle="rgba(40,30,22,0.18)";for(let fe=0;fe<=1024;fe+=256)F.fillRect(fe-1,0,2,512);let L=Ii(D);m(f(new z(new yt(9.8,g-.05),new Be({map:L,roughness:.55})),[0,e+(g-.05)/2,-11.6],{cast:!1}));for(let fe of[-1,1])v(8.9,g,.3,A,[fe*6.05,e+g/2,.75]),m(f(new z(new yt(8.9,g),E(8.9)),[fe*6.05,e+g/2,.59],{rot:[0,Math.PI,0],cast:!1})),p(fe>0?1.6:-10.5,fe>0?10.5:-1.6,.55,.95);v(3.2,g-2.6,.3,A,[0,e+2.6+(g-2.6)/2,.75]);let V=We("#8a5a32",{roughness:.5});for(let fe of[-1,1])m(v(1.5,2.55,.06,V,[fe*2.35,e+1.28,1.25],{rot:[0,fe*-1.05,0]}));let H=new Be({roughness:.5});v(3.4,.5,.05,H,[0,e+3.05,.93]),d.setName=fe=>{H.map?.dispose(),H.map=t(`\uD2B91\uD638\uC2E4   \u6545 ${fe} \uB2D8`,{w:1024,h:150,bg:"#1f2a2c",fg:"#f4efe2",font:'500 70px "Gowun Dodum", sans-serif'}),H.needsUpdate=!0},d.setName(r),f(new z(new yt(20.6,13),We("#faf9f5",{side:St,emissive:"#fffaf0",emissiveIntensity:.35})),[0,e+g-.04,-5.9],{rot:[Math.PI/2,0,0],cast:!1});let U=new Be({color:"#ffffff",emissive:"#fff4e0",emissiveIntensity:1});h.push(U);for(let fe=-8;fe<=8;fe+=4)for(let re=-10.5;re<=-1;re+=3.2)m(f(new z(new Yt(.16,20),U),[fe,e+g-.07,re],{rot:[Math.PI/2,0,0],cast:!1}));for(let fe of[-1,1])m(v(.12,.18,12.2,M,[fe*9.93,e+g-.1,-6.2],{cast:!1}));m(v(20.2,.18,.12,M,[0,e+g-.1,-11.98],{cast:!1})),v(22,.4,14.6,We("#d9d3c6"),[0,e+g+.2,-5.85]),v(21.8,.9,.2,We("#e9e4d8"),[0,e+g+.3,1]),v(5.2,.8,.12,new Be({map:t("\uC0BC\uAC00 \uC7A5\uB840\uC2DD\uC7A5",{w:1024,h:160,bg:"#2f473e",fg:"#f4efe2",font:'700 92px "Gowun Batang", serif'})}),[0,e+g+1.15,1]);let Z=We("#1c1c1e",{roughness:.45}),N=new we,X=new z(new _e(.9,.42,2.4),Z);X.position.y=.21,N.add(X);let ee=new z(new _e(.25,.9,2.4),Z);ee.position.set(.33,.45,0),N.add(ee);for(let fe of[-1.3,1.3]){let re=new z(new _e(.9,.6,.22),Z);re.position.set(0,.3,fe),N.add(re)}N.position.set(9.35,e,-8.6),N.traverse(fe=>{fe.isMesh&&(fe.castShadow=!0)}),a.add(N),p(8.85,9.9,-9.95,-7.25),v(1,1.05,.7,We("#f2f1ec",{roughness:.4}),[-9.4,e+.53,-10.9]),p(-9.95,-8.85,-11.3,-10.5);let he=We("#3b3d42",{metalness:.4,roughness:.4}),ae=new we,Ee=new z(new be(.06,.08,2.4,10),he);Ee.position.y=1.2,ae.add(Ee);let de=new Be({color:"#fff4e0",emissive:"#ffd99a",emissiveIntensity:1.1});h.push(de);let Se=new z(new _e(.42,.55,.42),de);Se.position.y=2.55,ae.add(Se),d.lanternStand=ae}if(i==="hanok"){d.shoes=!0,d.ceiling=e+5.4;let g=We("#6a4e3b",{roughness:.7}),y=We("#4a372b",{roughness:.7});x("#d9d6ca",We("#c9ad8a",{roughness:.6,map:Ii(Kc("#c3a582"),[6,4])}));let E=We("#f3efe4",{roughness:.95});v(20.6,5.4,.3,E,[0,e+2.7,-12.2]),p(-10.5,10.5,-12.6,-11.9);for(let H of[-1,1]){v(.3,5.4,12.2,E,[H*10.15,e+2.7,-6.2]),p(H*10.15-.3,H*10.15+.3,-12.4,-.05);for(let U of[.25,5.2])v(.34,.25,12.2,g,[H*10.15,e+U,-6.2]);for(let U=-12;U<=-.4;U+=2.6)v(.36,5.4,.22,g,[H*10.15,e+2.7,U]);for(let U=-11;U<=-1.5;U+=2.6)for(let Z=0;Z<5;Z++)m(v(.32,.03,1.6,g,[H*10.15,e+3.6+Z*.28,U+1.3],{cast:!1}))}for(let H=-10;H<=10;H+=2.5)v(.22,5.4,.36,g,[H,e+2.7,-12.05]);f(new z(new yt(20.6,13),We("#7a5c45",{side:St})),[0,e+5.4,-5.9],{rot:[Math.PI/2,0,0]});for(let H=-12;H<=.5;H+=1.5)m(v(20.6,.18,.18,y,[0,e+5.3,H],{cast:!1}));for(let H of[-9.7,-5.3,5.3,9.7])f(new z(new be(.27,.3,5.4,20),g),[H,e+2.7,.6]),f(new z(new be(.42,.48,.25,8),We("#cfccbf")),[H,e+.12,.6]),c.push({x:H,z:.6,r:.45});v(21,.55,.45,y,[0,e+5.15,.6]),v(21.2,.16,.47,We("#557d6c"),[0,e+4.82,.6]),v(21.2,.05,.48,We("#8f4235"),[0,e+4.72,.6]),v(3,.9,.1,new Be({map:t("\uC0BC\uAC00",{w:768,h:230,bg:"#3e5b50",fg:"#f3ead2",font:'700 140px "Gowun Batang", serif',border:"#c9b27c"}),roughness:.6}),[0,e+6.05,.9]);let A=We("#43464d",{roughness:.75});v(24.5,.4,17.5,A,[0,e+5.65,-5.9]),f(new z(new be(.22,1,1,4,1),A),[0,e+7.45,-5.9],{rot:[0,Math.PI/4,0]}).scale.set(17.6,3.2,12.6),v(9.5,.45,.6,We("#35373d"),[0,e+9.2,-5.9]);for(let H of[-1,1])v(.7,.75,.7,We("#35373d"),[H*4.8,e+9.35,-5.9],{rot:[0,0,H*.25]});let D=t("\u8B39\u5F14",{w:256,h:512,bg:"#fbf8ef",fg:"#1d1b19",font:'700 150px "Noto Serif KR", "Gowun Batang", serif',vertical:!0});for(let H of[-4.45,4.45]){let U=new we,Z=new Be({map:D,emissive:"#fff4dc",emissiveIntensity:.4,emissiveMap:D,roughness:.9});h.push(Z),U.add(new z(new be(.34,.34,.95,20),Z));let N=new z(new be(.3,.36,.08,20),We("#1d1d1f")),X=N.clone();N.position.y=.5,X.position.y=-.5,U.add(N,X),U.position.set(H,e+3.9,.9);let ee=s()*6;u.push((he,ae)=>{U.rotation.z=Math.sin(ae*.9+ee)*.03}),a.add(U)}let F=new we,L=We("#bdb9ab",{roughness:1});[[new be(.5,.6,.25,8),.12],[new be(.13,.16,.9,8),.7],[new be(.42,.32,.2,8),1.25],[new _e(.55,.5,.55),1.6],[new hn(.62,.45,4),2.07]].forEach(([H,U])=>{let Z=new z(H,L);Z.position.y=U,H.type==="ConeGeometry"&&(Z.rotation.y=Math.PI/4),Z.castShadow=!0,F.add(Z)});let V=new z(new _e(.3,.28,.6),new Be({color:"#ffe0a3",emissive:"#ffc773",emissiveIntensity:1.2}));V.position.y=1.6,F.add(V),h.push(V.material),d.lanternStand=F}if(i==="hall"){d.shoes=!0,d.ceiling=e+4.8,x("#cfcbc0",We("#eae4d7",{roughness:.35,map:Ii(Ov(),[10,6])}));let g=We("#f4f2ed",{roughness:.9}),y=We("#8b6a4f",{roughness:.6,map:Ii(Kc("#8b6a4f"),[1,4])});v(20.6,4.8,.3,g,[0,e+2.4,-12.2]),p(-10.5,10.5,-12.6,-11.9);for(let N=-9.6;N<=9.6;N+=.32)Math.abs(N)>6.9&&m(v(.14,4.6,.12,y,[N,e+2.3,-11.98],{cast:!1}));for(let N of[-1,1])v(.3,4.8,12.2,g,[N*10.15,e+2.4,-6.2]),v(.32,1,12.2,y,[N*10.1,e+.5,-6.2]),p(N*10.15-.3,N*10.15+.3,-12.4,-.05);let E=new Be({color:"#cfe0e6",transparent:!0,opacity:.22,roughness:.05,metalness:.1,depthWrite:!1}),A=We("#3b3d42",{metalness:.4,roughness:.4});for(let N of[-1,1]){let X=N*6.45;m(v(7.7,3.3,.05,E,[X,e+1.65,.75],{cast:!1}));for(let ee=2.6;ee<=10.3;ee+=1.54)m(v(.06,3.3,.08,A,[N*ee,e+1.65,.75],{cast:!1}));p(N>0?2.6:-10.3,N>0?10.3:-2.6,.6,.9)}v(20.6,1.5,.3,g,[0,e+4.05,.75]),v(20.6,.08,.1,A,[0,e+3.3,.75]);let M=new Be({roughness:.5}),D=v(4.2,.6,.06,M,[0,e+3.8,.94]);d.setName=N=>{M.map?.dispose(),M.map=t(`\uD2B91\uD638\uC2E4  \xB7  \u6545 ${N} \uB2D8 \uBE48\uC18C`,{w:1024,h:146,bg:"#2f3a3f",fg:"#f2efe6",font:'500 64px "Gowun Dodum", sans-serif'}),M.needsUpdate=!0},d.setName(r),f(new z(new yt(20.6,13),We("#fbfaf6",{side:St})),[0,e+4.72,-5.9],{rot:[Math.PI/2,0,0],cast:!1});let F=new Be({color:"#ffffff",emissive:"#fff6e8",emissiveIntensity:.9});h.push(F);for(let N=-7.5;N<=7.5;N+=3.75)for(let X=-10;X<=-1;X+=3)m(v(1.4,.04,.6,F,[N,e+4.66,X],{cast:!1}));v(21.5,.5,14.2,We("#5b5e64"),[0,e+5.05,-5.9]),v(21.6,.7,.2,We("#d8d4ca"),[0,e+5,1.15]);let L=new we,V=new z(new be(.06,.08,2.4,10),A);V.position.y=1.2,L.add(V);let H=new Be({color:"#fff4e0",emissive:"#ffd99a",emissiveIntensity:1.1,transparent:!0,opacity:.95});h.push(H);let U=new z(new _e(.42,.55,.42),H);U.position.y=2.55,L.add(U);let Z=new z(new _e(.55,.06,.55),A);Z.position.y=2.86,L.add(Z),L.traverse(N=>{N.isMesh&&(N.castShadow=!0)}),d.lanternStand=L}if(i==="chapel"){x("#d6d1c4",We("#9a7656",{roughness:.55,map:Ii(Kc("#9a7656"),[6,4])}));let g=We("#f5f1e8",{roughness:.95}),y=6.4;d.ceiling=e+y,v(20.6,y,.3,g,[0,e+y/2,-12.2]),p(-10.5,10.5,-12.6,-11.9);let E=Ii($m(!1));for(let de of[-1,1]){v(.3,y,12.2,g,[de*10.15,e+y/2,-6.2]),p(de*10.15-.3,de*10.15+.3,-12.4,-.05);for(let Se of[-10.6,-7.95,-5.25,-2.55]){let fe=new Be({map:E,emissive:"#ffffff",emissiveMap:E,emissiveIntensity:.55,transparent:!0,alphaTest:.1,side:St});h.push(fe),m(f(new z(new yt(1,2),fe),[de*9.98,e+4.55,Se],{rot:[0,-de*Math.PI/2,0],cast:!1}))}}for(let de of[-1,1])v(8.9,y,.35,g,[de*6.05,e+y/2,.75]),p(de>0?1.6:-10.5,de>0?10.5:-1.6,.55,.95);v(3.2,y-3.6,.35,g,[0,e+3.6+(y-3.6)/2,.75]);let A=new Be({map:Ii($m(!0)),emissive:"#ffffff",emissiveIntensity:.6,transparent:!0,alphaTest:.1});A.emissiveMap=A.map,h.push(A),m(f(new z(new Yt(.9,32),A),[0,e+5.6,.94],{cast:!1}));let M=We("#5d4030",{roughness:.6});for(let de of[-1,1])m(v(1.5,3.4,.08,M,[de*2.4,e+1.7,1.15],{rot:[0,de*-.9,0]}));let D=new Si;D.moveTo(-11.3,0),D.lineTo(0,4.2),D.lineTo(11.3,0),D.lineTo(-11.3,0);let F=f(new z(new aa(D,{depth:14.6,bevelEnabled:!1}),We("#4a4f57",{roughness:.7})),[0,e+y,-13]),L=new Si;L.moveTo(-10.4,0),L.lineTo(0,3.9),L.lineTo(10.4,0),L.lineTo(-10.4,0),f(new z(new Ar(L),g),[0,e+y,.95]),f(new z(new yt(20.6,13),We("#6b4b36",{side:St})),[0,e+y,-5.9],{rot:[Math.PI/2,0,0],cast:!1});for(let de=-11.5;de<=0;de+=2.3)m(v(20.4,.25,.25,We("#5a3e2c"),[0,e+y-.15,de],{cast:!1}));v(1.8,2.6,1.8,g,[0,e+y+4,0]);let V=f(new z(new hn(1.45,2.4,4),We("#4a4f57")),[0,e+y+6.5,0],{rot:[0,Math.PI/4,0]}),H=We("#d9c07a",{metalness:.6,roughness:.35});v(.12,1,.12,H,[0,e+y+8.1,0]),v(.6,.12,.12,H,[0,e+y+8.3,0]);let U=We("#6e4c34",{roughness:.5});v(.28,2.4,.16,U,[0,e+5,-11.95]),v(1.4,.26,.16,U,[0,e+5.5,-11.95]);let Z=new cn({color:"#fff4d8",transparent:!0,opacity:.18});m(f(new z(new Yt(1.6,40),Z),[0,e+5.2,-12.03],{cast:!1}));let N=We("#7a5639",{roughness:.55});for(let de of[-1,1])for(let Se of[-4.2,-3.1]){let fe=de>0?5:-8.8,re=de>0?8.8:-5,ge=(fe+re)/2,ye=re-fe;v(ye,.08,.5,N,[ge,e+.45,Se]),v(ye,.55,.06,N,[ge,e+.75,Se+.25]),v(.08,.9,.55,N,[fe,e+.45,Se+.02]),v(.08,.9,.55,N,[re,e+.45,Se+.02]),p(fe-.05,re+.05,Se-.3,Se+.32)}for(let de=0;de<9;de++){let Se=1.2+Math.sin(de/8*Math.PI)*1.4;f(new z(new be(.08,.08,Se,10),H),[7.4+de*.22,e+1+Se/2,-11.6])}v(2.3,1,.7,We("#5d4030"),[8.3,e+.5,-11.3]),p(7.1,9.5,-11.9,-10.9);let X=new we,ee=We("#2f2b28",{metalness:.5,roughness:.5}),he=new z(new be(.05,.07,1.1,8),ee);he.position.y=.55,X.add(he);let ae=new z(new be(.55,.55,.06,20),ee);ae.position.y=1.12,X.add(ae);let Ee=new Be({color:"#ffd27a",emissive:"#ffc35a",emissiveIntensity:1.2});h.push(Ee);for(let de=0;de<12;de++){let Se=de/12*Math.PI*2,fe=de%2?.42:.25,re=new z(new be(.04,.04,.14,8),We("#fbf6ea"));re.position.set(Math.cos(Se)*fe,1.22,Math.sin(Se)*fe),X.add(re);let ge=new z(new hn(.02,.06,6),Ee);ge.position.set(Math.cos(Se)*fe,1.33,Math.sin(Se)*fe),X.add(ge)}d.lanternStand=X}if(i==="garden"){x("#b7a68a",We("#a98563",{roughness:.6,map:Ii(Kc("#a98563"),[5,4])}));let g=We("#f4f1ea",{roughness:.7}),y=[[-9.8,.4],[-9.8,-5.8],[-9.8,-11.8],[9.8,.4],[9.8,-5.8],[9.8,-11.8],[-4.9,.4],[4.9,.4]];for(let[N,X]of y)v(.25,3.8,.25,g,[N,e+1.9,X]),c.push({x:N,z:X,r:.3});for(let N of[.4,-5.8,-11.8])m(v(20,.18,.22,g,[0,e+3.85,N],{cast:!1}));for(let N=-9.8;N<=9.8;N+=1.4)m(v(.12,.12,12.6,g,[N,e+3.98,-5.7],{cast:!1}));let E=new Be({color:"#ffffff",transparent:!0,opacity:.55,side:St,roughness:1,depthWrite:!1});for(let N=-9;N<=9;N+=2){let X=new yt(2.1,3.6,6,1),ee=X.attributes.position;for(let he=0;he<ee.count;he++)ee.setZ(he,Math.sin((ee.getX(he)+1.05)*3)*.12);m(f(new z(X,E),[N,e+2,-12.05],{cast:!1}))}let A=new Be({color:"#fff3d0",emissive:"#ffd98a",emissiveIntensity:1.2});h.push(A);let M=new mt(.05,8,6);for(let N of[-2.5,-5.8,-9])for(let X=-9.6;X<=9.6;X+=.6){let ee=.45*(1-(X/9.8)**2);m(f(new z(M,A),[X,e+3.75-ee,N],{cast:!1}))}let D=f(new z(new be(.45,.8,7,10),We("#6d5444")),[0,3.5,-15.5]),F=We("#8fae6a",{flatShading:!0});for(let N=0;N<9;N++)f(new z(new wr(2.4+s()*1.4,0),F),[(s()-.5)*9,8+s()*3,-15-s()*3]);for(let N=-9;N<=9;N+=1.5){if(Math.abs(N)<3)continue;let X=v(.6,.4,.4,We("#e8e2d6"),[N,e+.2,.9]);for(let ee=0;ee<4;ee++){let he=Pi(1.4,ee%3?"white":"cream");he.position.set(N+(ee-1.5)*.12,e+.7,.9+(s()-.5)*.1),a.add(he)}p(N-.32,N+.32,.68,1.12)}let L=new we,V=new z(new _e(.14,2.4,.14),We("#7a5a40"));V.position.y=1.2,L.add(V);let H=new z(new _e(.6,.08,.08),We("#7a5a40"));H.position.set(.25,2.3,0),L.add(H);let U=new Be({color:"#fff3dc",emissive:"#ffd08a",emissiveIntensity:1.1});h.push(U);let Z=new z(new mt(.24,16,12),U);Z.scale.y=1.2,Z.position.set(.5,1.95,0),L.add(Z),d.lanternStand=L,d.easels=!0}return d}var Ge=.4,Li=.3,eh=30,Ue=(i,e={})=>new Be({color:i,roughness:.82,metalness:0,...e});function Ym(i){return()=>{i|=0,i=i+1831565813|0;let e=Math.imul(i^i>>>15,1|i);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function ps(i,{w:e=512,h:t=256,bg:n="#f6f3ea",fg:r="#2a2723",font:s='700 120px "Gowun Batang", serif',vertical:a=!1,border:o=null}={}){let c=document.createElement("canvas");c.width=e,c.height=t;let l=c.getContext("2d");if(n&&(l.fillStyle=n,l.fillRect(0,0,e,t)),o&&(l.strokeStyle=o,l.lineWidth=Math.max(4,e*.02),l.strokeRect(l.lineWidth,l.lineWidth,e-l.lineWidth*2,t-l.lineWidth*2)),l.fillStyle=r,l.font=s,l.textAlign="center",l.textBaseline="middle",a){let u=[...i],d=t/(u.length+.6);u.forEach((p,f)=>l.fillText(p,e/2,d*(f+.8)))}else{let u=i.split(`
`),d=t/(u.length+.4);u.forEach((p,f)=>l.fillText(p,e/2,d*(f+.7)))}let h=new Tn(c);return h.colorSpace=Rt,h.anisotropy=4,h}function zv(i){let e=[...i.replace(/\s+/g," ")].slice(0,22),t=document.createElement("canvas");t.width=96,t.height=768;let n=t.getContext("2d");n.fillStyle="#fbfaf6",n.fillRect(0,0,96,768),n.fillStyle="#1b1a18";let r=Math.min(64,740/Math.max(1,e.length));n.font=`700 ${Math.floor(r*.86)}px "Noto Serif KR", "Gowun Batang", serif`,n.textAlign="center",n.textBaseline="middle",e.forEach((a,o)=>n.fillText(a,48,20+r*(o+.5)));let s=new Tn(t);return s.colorSpace=Rt,s}function Zm(i=64,e="rgba(255,255,255,1)",t="rgba(255,255,255,0)"){let n=document.createElement("canvas");n.width=n.height=i;let r=n.getContext("2d"),s=r.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);s.addColorStop(0,e),s.addColorStop(1,t),r.fillStyle=s,r.fillRect(0,0,i,i);let a=new Tn(n);return a.colorSpace=Rt,a}function Jm(i=""){let e=document.createElement("canvas");e.width=600,e.height=800;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,800);return n.addColorStop(0,"#e9e6dc"),n.addColorStop(1,"#cfcabb"),t.fillStyle=n,t.fillRect(0,0,600,800),t.fillStyle="#a9a291",t.beginPath(),t.ellipse(300,330,130,155,0,0,Math.PI*2),t.fill(),t.beginPath(),t.ellipse(300,760,250,240,0,Math.PI,0),t.fill(),t.fillStyle="#6f6a5e",t.font='700 54px "Gowun Batang", serif',t.textAlign="center",t.fillText(i?`\u6545 ${i}`:"\uC601\uC815 \uC0AC\uC9C4",300,700),e.toDataURL("image/jpeg",.9)}function Vv(i){let e=document.createElement("canvas");e.width=400,e.height=300;let t=e.getContext("2d"),n=["#e8dfcf","#dfe5dc","#e6dde3","#dde2e8"];return t.fillStyle=n[i%n.length],t.fillRect(0,0,400,300),t.strokeStyle="rgba(80,70,60,.25)",t.lineWidth=3,t.beginPath(),t.moveTo(40,230),t.lineTo(140,130),t.lineTo(210,200),t.lineTo(260,160),t.lineTo(360,240),t.stroke(),t.beginPath(),t.arc(300,90,24,0,Math.PI*2),t.stroke(),t.fillStyle="rgba(70,62,52,.6)",t.font='500 24px "Gowun Dodum", sans-serif',t.textAlign="center",t.fillText("\uCD94\uC5B5 \uC0AC\uC9C4 \uC790\uB9AC",200,278),e}var Qc={day:{top:"#a9c8dc",bottom:"#f1f0e8",fog:"#ebebe3",hemiSky:"#ffffff",hemiGround:"#b8b29d",hemi:1.15,sun:"#fff1df",sunI:1.7,lamp:.55,star:0},dusk:{top:"#7183a8",bottom:"#f0c39f",fog:"#e5c9b2",hemiSky:"#ffe2c8",hemiGround:"#8a7a6a",hemi:.85,sun:"#ffae7a",sunI:1.25,lamp:1.1,star:.15},night:{top:"#0a1427",bottom:"#2b3654",fog:"#1b2338",hemiSky:"#7d8cc0",hemiGround:"#2a2a33",hemi:.42,sun:"#a9bcff",sunI:.35,lamp:2,star:1}};function Km(i){let e=new qr,t=Ym(20261101),n=new Set,r=[],s=[],a=new Map,o=[],c=[],l=(I,B,Y,se)=>r.push({x0:I,x1:B,z0:Y,z1:se}),h=(I,B,Y)=>s.push({x:I,z:B,r:Y}),u=(I,B)=>I.traverse(Y=>{(Y.isMesh||Y.isSprite||Y.isInstancedMesh)&&(Y.userData.interact=B)}),d=I=>(I.raycast=()=>{},I);function p(I,B){return a.set(I,{id:I,...B}),B}let f={top:{value:new et},bottom:{value:new et}},v=d(new z(new mt(400,32,16),new Nn({uniforms:f,side:An,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; varying vec3 vP; void main(){ float h = clamp(vP.y*1.6+0.15,0.0,1.0); gl_FragColor = vec4(mix(bottom, top, pow(h,0.8)),1.0); }"})));e.add(v);let m=new Pt,x=[];for(let I=0;I<700;I++){let B=t()*Math.PI*2,Y=Math.acos(t()*.9+.08);x.push(Math.sin(Y)*Math.cos(B)*350,Math.cos(Y)*350,Math.sin(Y)*Math.sin(B)*350)}m.setAttribute("position",new Ve(x,3));let g=new ia({color:"#ffffff",size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1});e.add(d(new uo(m,g))),e.fog=new oo("#ebebe3",40,140);let y=new Jr("#ffffff","#b8b29d",1.1);e.add(y);let E=new Kr("#fff1df",1.7);E.position.set(-14,24,16),E.castShadow=!0,E.shadow.mapSize.set(2048,2048),Object.assign(E.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:80}),E.shadow.bias=-6e-4,E.shadow.normalBias=.03,e.add(E,E.target),E.target.position.set(0,0,-2);let A=new z(new Yt(160,64),Ue("#dcdccd",{roughness:1}));A.rotation.x=-Math.PI/2,A.receiveShadow=!0,e.add(A),n.add(A);let M=new z(new Yt(60,48),Ue("#cfd6bd",{roughness:1}));M.rotation.x=-Math.PI/2,M.position.y=.005,M.receiveShadow=!0,e.add(M),n.add(M);let D=Ue("#efeee6",{roughness:.95});for(let I=2.6;I<24;I+=1.25)for(let B of[-1.05,1.05]){let Y=new z(new _e(2+t()*.06,.06,1.12),D);Y.position.set(B+(t()-.5)*.06,.03,I),Y.receiveShadow=!0,e.add(Y),n.add(Y)}let F=["#b9c4a3","#c7b99a","#a9b896","#c9ae8c"];for(let I=0;I<14;I++){let B=I/14*Math.PI*2+t()*.3,Y=95+t()*25,se=d(new z(new mt(30+t()*25,24,12),Ue(F[I%4],{roughness:1})));se.scale.y=.35+t()*.2,se.position.set(Math.cos(B)*Y,-4,Math.sin(B)*Y),e.add(se)}let L=null,V=new we;e.add(V);let H=new we;H.position.set(-4.6,0,9.5),e.add(H),h(-4.6,9.5,.65);let U=new Qi("#ffcb7a",2,6,2);U.position.set(-4.6,1.9,9.5),e.add(U),p("lantern",{label:"\uB9C8\uC74C \uB4F1\uBD88",verb:"\uB4F1\uBD88 \uB744\uC6B0\uAE30",spot:{x:-3.6,z:10.3,face:-Math.PI*.75},radius:1.5,anchor:new S(-4.6,2.7,9.5)});let Z=new Qi("#fff6ec",18,14,1.6);Z.position.set(0,Ge+4.2,-7.2),e.add(Z);let N=new Qi("#fbf8f2",10,16,1.8);N.position.set(0,Ge+4.3,-2.2),e.add(N);let X=new we;e.add(X);let ee=-10.4,he=null,ae=new z(new _e(13.6,4.5,.3),Ue("#e7e3d8"));ae.position.set(0,Ge+2.25,ee-.8),X.add(ae),l(-7,7,-11.9,-9.75);let Ee=new we;Ee.position.set(0,Ge,-9.95),X.add(Ee);let de=new z(new _e(1.32,1.72,.09),Ue("#121214",{roughness:.35}));de.position.y=2.38,de.castShadow=!0,Ee.add(de);let Se=new cn({color:"#ffffff"}),fe=new z(new yt(1.1,1.47),Se);fe.position.set(0,2.38,.05),Ee.add(fe);for(let I of[-1,1]){let B=new z(new _e(.62,.075,.02),Ue("#0c0c0d",{roughness:.6}));B.position.set(I*.47,3,.065),B.rotation.z=I*-Math.PI/4,Ee.add(B)}let re=new z(new _e(.9,1.5,.3),Ue("#e9e5da"));re.position.set(0,.75,-.1),Ee.add(re),u(Ee,"portrait");let ge=new we;ge.position.set(0,Ge+3.8,-10),X.add(ge);let ye=new z(new _e(.26,.62,.06),new Be({color:"#ffffff",roughness:.6}));ye.position.set(-1.35,Ge+1.12,-8.7),X.add(ye);let Fe=new we;X.add(Fe);let $e=new we;Fe.add($e);let w=new z(new _e(3.9,.8,1.1),Ue("#f4f1e8"));w.position.set(0,Ge+.4,-8.4),w.castShadow=!0,w.receiveShadow=!0,Fe.add(w),l(-2.05,2.05,-9,-7.8);let T=Ge+.8,W=new we,k=new z(new be(.17,.12,.15,24),Ue("#7a6a4a",{metalness:.6,roughness:.4}));k.position.y=.075,W.add(k);let b=new z(new Yt(.15,24),Ue("#cfc8b8"));b.rotation.x=-Math.PI/2,b.position.y=.14,W.add(b),W.position.set(0,T,-8.15),X.add(W);let C=new we;C.position.copy(W.position).add(new S(0,.14,0)),X.add(C);let j=[];for(let I of[-1.35,1.35]){let B=new z(new be(.05,.05,.42,14),Ue("#fbfaf5"));B.position.set(I,T+.21,-8.3),Fe.add(B);let Y=new z(new hn(.03,.09,10),new cn({color:"#ffcf73"}));Y.position.set(I,T+.47,-8.3),Fe.add(Y),j.push(Y)}let O=new Qi("#ffbf6a",3,5,2);O.position.set(0,T+.6,-8),e.add(O);let te=["#c9493b","#e3c063","#d78f3c"];[-.7,.7].forEach((I,B)=>{let Y=new z(new be(.2,.15,.06,20),Ue("#efe9da"));Y.position.set(I,T+.03,-8.55),$e.add(Y);for(let se=0;se<4;se++){let xe=new z(new mt(.075,14,10),Ue(te[(B+se)%3],{roughness:.5}));xe.position.set(I+(se%2?.07:-.07),T+.13+(se>1?.11:0),-8.55+(se===1?.05:-.03)),$e.add(xe)}}),u(w,"altar"),u(W,"altar");let $=new z(new _e(3.7,.1,.95),Ue("#efece2"));$.position.set(0,Ge+.05,-7.25),$.receiveShadow=!0,Fe.add($),l(-1.9,1.9,-7.75,-6.8);let K=new we;X.add(K),u($,"altar");let ne=new z(new _e(.85,.08,.85),Ue("#4b4f5c"));ne.position.set(0,Ge+.04,-6.15),ne.receiveShadow=!0,X.add(ne),n.add(ne);let ce=new we;X.add(ce);let ue=Ge+.95,Ce=new Be({color:"#e4e2dc",roughness:.7}),Oe=Ue("#4f4037",{roughness:.5}),Xe=new z(new _e(3.9,.95,1.1),Oe);Xe.position.set(0,Ge+.475,-8.4),Xe.castShadow=!0,Xe.receiveShadow=!0,ce.add(Xe);for(let I=0;I<4;I++){let B=new z(new yt(.86,.72),Ce);B.position.set(-1.43+I*.953,Ge+.47,-7.845),ce.add(B)}let st=new z(new _e(3.95,.02,1.15),new Be({color:"#cfe0dc",transparent:!0,opacity:.35,roughness:.05}));st.position.set(0,ue+.01,-8.4),ce.add(st);let rt=Ue("#8a1d18",{roughness:.3}),vt=Ue("#c29a45",{metalness:.75,roughness:.3});function ke(I,B,Y){let se=new we,xe=new z(new be(.1,.12,.03,18),rt),Ie=new z(new be(.045,.06,.1,14),rt);Ie.position.y=.065;let Re=new z(new be(.16,.1,.05,20),rt);Re.position.y=.14,se.add(xe,Ie,Re),Y(se,.165),se.position.set(I,ue+.02,B),se.traverse(Le=>{Le.isMesh&&(Le.castShadow=!0)}),ce.add(se)}let Ke=(I,B,Y,se,xe,Ie,Re=1)=>{let Le=new z(new mt(B,16,12),Ue(Y,{roughness:.45}));return Le.scale.y=Re,Le.position.set(se,xe,Ie),I.add(Le),Le},it=(I,B,Y=1)=>(se,xe)=>{[[-.07,0],[.07,0],[0,.07]].forEach(([Ie,Re])=>Ke(se,B,I,Ie,xe+B*Y,Re-.02,Y)),Ke(se,B,I,0,xe+B*Y*2.6,0,Y)};[[-1.62,it("#a3241c",.035)],[-1.22,it("#6b3f22",.04,.8)],[-.82,it("#e08a3a",.05,.55)],[-.4,it("#d9b264",.085)],[.4,it("#c63b32",.075)],[.82,it("#f0a21f",.05)],[1.22,(I,B)=>{for(let Y=0;Y<5;Y++){let se=new z(new Qn(.025,.16,4,8),Ue("#f1d23e",{roughness:.5}));se.rotation.set(.3,Y*.6,Math.PI/2-.25),se.position.set((Y-2)*.03,B+.05,0),I.add(se)}}]].forEach(([I,B])=>ke(I,-8.65,B)),ke(1.66,-8.6,(I,B)=>{let Y=Ke(I,.17,"#2f6b2c",0,B+.16,0),se=document.createElement("canvas");se.width=128,se.height=64;let xe=se.getContext("2d");xe.fillStyle="#3f7d36",xe.fillRect(0,0,128,64),xe.fillStyle="#1d3d19";for(let Ie=0;Ie<8;Ie++){xe.beginPath(),xe.moveTo(Ie*16,0);for(let Re=0;Re<=64;Re+=8)xe.lineTo(Ie*16+Math.sin(Re*.4)*3,Re);xe.lineTo(Ie*16+6,64),xe.lineTo(Ie*16+6,0),xe.fill()}Y.material=new Be({map:new Tn(se),roughness:.35})});let Ae=new we,xt=new z(new be(.05,.07,.06,14),rt),bt=new z(new be(.045,.03,.05,14),rt);bt.position.y=.06,Ae.add(xt,bt);let Xn=new z(new Yt(.038,16),new Be({color:"#e9dcae",roughness:.1,metalness:.2}));Xn.rotation.x=-Math.PI/2,Xn.position.y=.08,Xn.visible=!1,Ae.add(Xn),Ae.position.set(0,ue+.03,-8.1),ce.add(Ae);function an(I,B,Y,se=.35){let xe=new we,Ie=new z(new be(.06,.09,.04,16),vt),Re=new z(new be(.025,.03,se,12),vt);Re.position.y=se/2;let Le=new z(new be(.07,.04,.04,16),vt);Le.position.y=se;let ze=new z(new be(.035,.035,.2,12),Ue("#fbfaf5"));ze.position.y=se+.12;let Ht=new z(new hn(.022,.07,10),new cn({color:"#ffcf73"}));Ht.position.y=se+.26,j.push(Ht),xe.add(Ie,Re,Le,ze,Ht),xe.position.set(I,B,Y),xe.traverse(Kt=>{Kt.isMesh&&(Kt.castShadow=!0)}),ce.add(xe)}an(-1.85,ue+.02,-8.75),an(1.85,ue+.02,-8.2);let kt=new we,Vt=new z(new _e(1.25,.05,.6),new Be({color:"#d7e3df",transparent:!0,opacity:.55,roughness:.05}));Vt.position.y=.44;let G=new z(new _e(1.2,.42,.56),Ue("#4f4037",{roughness:.5}));G.position.y=.21;let ui=new z(new yt(.95,.24),Ue("#c9a04e",{metalness:.6,roughness:.35}));ui.position.set(0,.21,.282),kt.add(Vt,G,ui),kt.position.set(0,Ge,-7.3),kt.traverse(I=>{I.isMesh&&(I.castShadow=!0)}),ce.add(kt),an(-.45,Ge+.46,-7.3,.22);let di=new z(new be(.05,.04,.16,14),vt);di.position.set(.42,Ge+.54,-7.3),ce.add(di);for(let I=0;I<6;I++){let B=new z(new be(.005,.005,.3,4),Ue("#1c1a18"));B.position.set(.42+(I%3-1)*.012,Ge+.66,-7.3+(I>2?.01:-.01)),ce.add(B)}let Lt=new we,cr=new z(new be(.07,.07,.3,16),Ue("#3a2414",{roughness:.2}));cr.position.y=.15;let Nr=new z(new be(.025,.06,.12,12),Ue("#3a2414",{roughness:.2}));Nr.position.y=.36;let _s=new z(new be(.072,.072,.14,16,1,!0),new Be({map:ps("\uCCAD\uC8FC",{w:256,h:128,bg:"#f6f1e4",fg:"#7a1d18",font:'700 64px "Noto Serif KR", serif'})}));_s.position.y=.14,Lt.add(cr,Nr,_s),Lt.position.set(1.2,Ge,-7.15);let Pa=Ue("#c9ccd1",{metalness:.8,roughness:.25}),bs=new z(new mt(.09,16,12),Pa);bs.scale.y=.9,bs.position.set(.95,Ge+.09,-7);let Ur=new z(new be(.012,.02,.12,8),Pa);Ur.position.set(.86,Ge+.12,-7),Ur.rotation.z=.9;let Ia=new z(new be(.13,.08,.07,20,1,!0),new Be({color:"#c9ccd1",metalness:.8,roughness:.25,side:St}));Ia.position.set(-.95,Ge+.035,-7.05),ce.add(Lt,bs,Ur,Ia);let kr=document.createElement("canvas");kr.width=256,kr.height=192;let Ot=kr.getContext("2d");Ot.fillStyle="#c9a368",Ot.fillRect(0,0,256,192);for(let I=0;I<192;I+=3)Ot.fillStyle=`rgba(120,85,40,${.08+Math.random()*.06})`,Ot.fillRect(0,I,256,1);Ot.strokeStyle="#7a4f24",Ot.lineWidth=6,Ot.strokeRect(3,3,250,186),Ot.lineWidth=3;for(let I of[64,128,192])Ot.beginPath(),Ot.moveTo(I,0),Ot.lineTo(I,192),Ot.stroke();Ot.beginPath(),Ot.moveTo(0,96),Ot.lineTo(256,96),Ot.stroke();let Fi=new z(new yt(1.9,1.35),new Be({map:new Tn(kr),roughness:.95}));Fi.rotation.x=-Math.PI/2,Fi.position.set(0,Ge+.008,-6.15),Fi.receiveShadow=!0,ce.add(Fi),n.add(Fi),u(Xe,"altar"),u(kt,"altar");let Ms="simple";function La(I){Ms=I;let B=I==="jesa";for(ce.visible=B,Fe.visible=!B,ne.visible=!B,W.position.set(0,B?Ge+.465:T,B?-7.3:-8.15),k.material.color.set(B?"#b8913a":"#7a6a4a"),C.position.copy(W.position).add(new S(0,.14,0)),ye.position.set(B?0:-1.35,B?ue+.2:Ge+1.12,B?-8.85:-8.7),ye.scale.setScalar(B?.65:1);K.children.length;)K.remove(K.children[0]);Ln.setCounts(Br)}let Br={};p("altar",{label:"\uC81C\uB2E8",verb:"\uC81C\uB2E8 \uC55E\uC73C\uB85C",spot:{x:0,z:-6.15,face:Math.PI},radius:1.6,anchor:new S(0,Ge+1.6,-7.6)}),p("portrait",{label:"\uC601\uC815",verb:"\uCD94\uC5B5 \uC0C1\uC601\uAD00",spot:{x:0,z:-6.15,face:Math.PI},radius:0,anchor:new S(0,Ge+3.4,-9.9)});let pi=new we;pi.position.set(-3.2,Ge,-7.4);for(let I=0;I<3;I++){let B=new z(new _e(1.1-I*.25,.2,.5-I*.1),Ue("#5b4535"));B.position.set(0,.55+I*.2,-I*.08),pi.add(B)}let Fr=new z(new _e(.9,.45,.35),Ue("#4a372b"));Fr.position.y=.225,pi.add(Fr),X.add(pi),h(-3.2,-7.4,.65);let Or=new we;pi.add(Or),u(pi,"candles"),p("candles",{label:"\uCD1B\uBD88 \uBD09\uD5CC\uB300",verb:"\uCD1B\uBD88 \uBD09\uD5CC",spot:{x:-3.2,z:-6.4,face:Math.PI},radius:1.2,anchor:new S(-3.2,Ge+1.5,-7.4)});let Da=new z(new _e(1,.04,1.6),Ue("#3c3f49"));Da.position.set(4.1,Ge+.02,-5.8),X.add(Da);let fi={x:4.1,z:-5.8,face:-Math.PI/2},rl={x:2.6,z:-5.8,face:Math.PI/2};p("host",{label:"\uC0C1\uC8FC",verb:"\uC0C1\uC8FC\uAED8 \uC778\uC0AC",spot:rl,radius:1.5,anchor:new S(4.1,Ge+1.9,-5.8)});let Oi=new we,R=new z(new _e(.8,1,.6),new Be({color:"#ffffff",roughness:.6}));R.position.y=.5,R.castShadow=!0,Oi.add(R);let J=new z(new yt(.42,.62),new Be({map:ps("\u8CFB\u5100\u51FD",{w:256,h:380,bg:"#fbfaf6",fg:"#1d1b19",font:'700 104px "Noto Serif KR", "Gowun Batang", serif',vertical:!0,border:"#1d1b19"})}));J.position.set(0,.55,.305),Oi.add(J);let ie=new z(new _e(.4,.02,.05),Ue("#111"));ie.position.set(0,1.005,0),Oi.add(ie);let oe=new z(new _e(1,.08,.8),Ue("#4a372b"));oe.position.y=.04,Oi.add(oe),Oi.position.set(4.7,Ge,-1.7),X.add(Oi),h(4.7,-1.7,.6),u(Oi,"donation"),p("donation",{label:"\uBD80\uC758\uD568",verb:"\uC870\uC758\uAE08 \uB123\uAE30",spot:{x:5.2,z:-.5,face:Math.PI},radius:.9,anchor:new S(4.7,Ge+1.5,-1.7)});let Q=Ue("#6a4e3b",{roughness:.7}),me=new we,Pe=new z(new _e(1.6,.08,.8),Q);Pe.position.y=.78,me.add(Pe);let Ne=new z(new _e(1.62,.74,.82),Ue("#f2efe6"));Ne.position.y=.37,me.add(Ne);for(let I of[-1,1]){let B=new z(new _e(.34,.02,.44),Ue("#fdfcf7"));B.position.set(I*.18,.84,0),B.rotation.z=I*-.06,me.add(B)}let He=new z(new _e(.74,.015,.48),Ue("#20242c"));He.position.y=.825,me.add(He);let qe=new z(new yt(1.1,.24),new Be({map:ps("\uC811\uC218\uB300 \xB7 \uBC29\uBA85\uB85D",{w:768,h:168,bg:"#fbfaf6",fg:"#26231f",font:'700 84px "Gowun Batang", serif'})}));qe.position.set(0,.48,.415),me.add(qe),me.position.set(6.2,Ge,-1.6),me.traverse(I=>{I.isMesh&&(I.castShadow=!0)}),X.add(me),l(5.3,7.1,-2.1,-1.1),u(me,"guestbook"),p("guestbook",{label:"\uBC29\uBA85\uB85D",verb:"\uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08",spot:{x:6.2,z:-.45,face:Math.PI},radius:1.4,anchor:new S(6.2,Ge+1.5,-1.6)});let je=new we,Ye=new z(new be(.45,.32,.45,18),Ue("#a98b62",{roughness:1}));Ye.position.y=.6,je.add(Ye);let at=new z(new be(.06,.12,.4,10),Q);at.position.y=.2,je.add(at);for(let I=0;I<20;I++){let B=Pi(1.25),Y=t()*Math.PI*2,se=t()*.3;B.position.set(Math.cos(Y)*se,1+t()*.1,Math.sin(Y)*se),B.rotation.set((t()-.5)*.6,t()*3,(t()-.5)*.6),je.add(B)}je.position.set(-3.4,Ge,-1.4),X.add(je),h(-3.4,-1.4,.55),u(je,"basket"),p("basket",{label:"\uD5CC\uD654\uC6A9 \uAD6D\uD654",verb:"\uAD6D\uD654 \uD55C \uC1A1\uC774 \uB4E4\uAE30",spot:{x:-3.4,z:-.45,face:Math.PI},radius:1.3,anchor:new S(-3.4,Ge+1.6,-1.4)});let Dt=[],Wt=new we;X.add(Wt),[{x:-9.85,z:-9.3,ry:Math.PI/2},{x:-9.85,z:-6.6,ry:Math.PI/2},{x:-9.85,z:-3.9,ry:Math.PI/2},{x:9.85,z:-9.3,ry:-Math.PI/2},{x:9.85,z:-6.6,ry:-Math.PI/2},{x:9.85,z:-3.9,ry:-Math.PI/2}].forEach((I,B)=>{let Y=new we,se=new z(new _e(1.7,1.3,.06),Ue("#5a4434")),xe=new Tn(Vv(B));xe.colorSpace=Rt;let Ie=new cn({map:xe}),Re=new z(new yt(1.5,1.1),Ie);Re.position.z=.035,Y.add(se,Re),Y.position.set(I.x,Ge+2.2,I.z),Y.rotation.y=I.ry,X.add(Y),u(Y,`photo:${B}`),Dt.push({group:Y,pic:Re,mat:Ie,placeholder:xe,url:null});let Le=new we;for(let ze of[-1,1]){let Ht=new z(new _e(.06,2.1,.06),Ue("#8a6a4c"));Ht.position.set(I.x-Math.sign(I.x)*.15,Ge+1.05,I.z+ze*.6),Ht.rotation.x=ze*.12,Le.add(Ht)}Wt.add(Le),p(`photo:${B}`,{label:"\uCD94\uC5B5 \uC0AC\uC9C4",verb:"\uC0AC\uC9C4 \uBCF4\uAE30",spot:{x:I.x+(I.x<0?1.6:-1.6),z:I.z,face:I.x<0?-Math.PI/2:Math.PI/2},radius:0,anchor:new S(I.x,Ge+3,I.z)})});let wt=new we;e.add(wt);let Nt=["#141414","#2b2622","#141414","#3b2c22","#f1eee6","#141414","#5a4a3c"],Qe=new we;e.add(Qe);let It=new z(new _e(9,Li,8.6),Ue("#d6d2c4"));It.position.set(17,Li/2,-5),It.receiveShadow=!0,Qe.add(It);let jt=new z(new yt(8.8,8.4),Ue("#d2b693",{roughness:.6}));jt.rotation.x=-Math.PI/2,jt.position.set(17,Li+.004,-5),jt.receiveShadow=!0,Qe.add(jt),n.add(It),n.add(jt);for(let[I,B]of[[12.8,-9],[21.2,-9],[12.8,-1],[21.2,-1]]){let Y=new z(new be(.2,.22,3.6,14),Q);Y.position.set(I,Li+1.8,B),Y.castShadow=!0,Qe.add(Y),h(I,B,.35)}let ot=Ue("#43464d",{roughness:.75}),Ze=new z(new _e(10.5,.3,10),ot);Ze.position.set(17,Li+3.7,-5),Ze.castShadow=!0,Qe.add(Ze);let on=new z(new be(.25,1,1,4,1),ot);on.rotation.y=Math.PI/4,on.scale.set(7.6,2,7.2),on.position.set(17,Li+4.85,-5),on.castShadow=!0,Qe.add(on);let Es=new z(new yt(2.2,.55),new Be({map:ps("\uC2DD\uB2F9 \xB7 \uC811\uAC1D\uC2E4",{w:768,h:190,bg:"#3e5b50",fg:"#f3ead2",font:'700 96px "Gowun Batang", serif',border:"#c9b27c"})}));Es.position.set(17,Li+3.2,-.65),Qe.add(Es);let Hr=new Qi("#ffe6c4",6,10,1.8);Hr.position.set(17,3.2,-5),e.add(Hr);let Mn=new we,Un=new z(new _e(1.6,.9,.6),Ue("#efe9dc"));Un.position.y=.45,Mn.add(Un);let Hi=new z(new be(.14,.14,.42,16),Ue("#c9ccd1",{metalness:.6,roughness:.3}));Hi.position.set(-.4,1.11,0),Mn.add(Hi);for(let I=0;I<6;I++){let B=new z(new be(.04,.03,.09,10),Ue("#fbfaf6"));B.position.set(.1+I%3*.12,.95+Math.floor(I/3)*.09,.05),Mn.add(B)}Mn.position.set(20.6,Li,-8.3),Mn.traverse(I=>{I.isMesh&&(I.castShadow=!0)}),Qe.add(Mn),l(19.75,21.45,-8.65,-7.95);let kn=[];[[15,-6.6],[19,-5.6],[15,-3],[19,-2.4]].forEach(([I,B],Y)=>{let se=new we,xe=new z(new _e(1.9,.07,.9),Ue("#7a5a40",{roughness:.5}));xe.position.y=.38,se.add(xe);for(let[Re,Le]of[[-.85,-.38],[.85,-.38],[-.85,.38],[.85,.38]]){let ze=new z(new _e(.06,.36,.06),Ue("#5d4431"));ze.position.set(Re,.18,Le),se.add(ze)}for(let Re of[-.45,.45]){let Le=new z(new _e(.6,.07,.6),Ue("#8e3f37"));Le.position.set(Re,.035,.85),se.add(Le)}for(let Re=0;Re<3;Re++){let Le=new z(new be(.09,.07,.04,14),Ue("#f4f1ea"));Le.position.set(-.4+Re*.4,.44,-.2),se.add(Le);let ze=new z(new mt(.06,10,6),Ue(["#c74b35","#e8e1c9","#6d8a4c"][Re]));ze.scale.y=.4,ze.position.set(-.4+Re*.4,.47,-.2),se.add(ze)}se.position.set(I,Li,B),se.traverse(Re=>{Re.isMesh&&(Re.castShadow=!0)}),Qe.add(se),l(I-1,I+1,B-.5,B+.48),u(se,`meal:${Y}`);let Ie=new we;se.add(Ie),kn.push({group:se,dishes:Ie,seat:{x:I-.45,z:B+.85,face:Math.PI},seat2:{x:I+.45,z:B+.85,face:Math.PI}}),p(`meal:${Y}`,{label:"\uC2DD\uD0C1",verb:"\uC2DD\uC0AC\uD558\uAE30",spot:kn[Y].seat,radius:1.3,anchor:new S(I,1.4,B)})});let Bn=new we,Gi=new z(new _e(1.3,.6,.7),Ue("#7a5a40"));Gi.position.y=.7,Bn.add(Gi);for(let I of[-1,1]){let B=new z(new be(.28,.28,.06,18),Ue("#3b2c22"));B.rotation.z=Math.PI/2,B.position.set(I*.68,.28,0),Bn.add(B)}for(let I=0;I<26;I++){let B=Pi(1.5,["white","yellow","cream","white"][I%4]);B.position.set((t()-.5)*1.1,1.25+t()*.15,(t()-.5)*.5),Bn.add(B)}let Na=new z(new yt(1.1,.3),new Be({map:ps("\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30",{w:640,h:170,bg:"#fbfaf6",fg:"#2a2723",font:'700 76px "Gowun Batang", serif'})}));Na.position.set(0,.72,.36),Bn.add(Na),Bn.position.set(-3.6,0,4.9),Bn.rotation.y=.45,Bn.traverse(I=>{I.isMesh&&(I.castShadow=!0)}),e.add(Bn),h(-3.6,4.9,.8),u(Bn,"florist"),p("florist",{label:"\uD654\uD658",verb:"\uADFC\uC870\uD654\uD658 \uBCF4\uB0B4\uAE30",spot:{x:-2.5,z:5.4,face:-2},radius:1.5,anchor:new S(-3.6,2,4.9)});let hr=new we;e.add(hr);let Ss=[];for(let I=0;I<70;I++){let B=t()*Math.PI*2,Y=24+t()*22;Ss.push([Math.cos(B)*Y,Math.sin(B)*Y])}for(let I of[-1,1])for(let B=4;B<26;B+=3.2)Ss.push([I*(11.5+t()*3),B+t()*1.5]);for(let I=-8;I<=8;I+=4)Ss.push([I+t(),-17-t()*2]);let pt=["#c4532f","#d9822f","#e2b53b","#7f9a5c","#8fa86b","#b6452e"],Sh=Ue("#6d5444");for(let[I,B]of Ss){if(I>11&&I<23&&B>-11&&B<1)continue;let Y=new we,se=t(),xe=2.2+t()*1.8,Ie=new z(new be(.12,.18,xe,8),Sh);if(Ie.position.y=xe/2,Y.add(Ie),se<.35){let Re=Ue("#5f7a54",{flatShading:!0});for(let Le=0;Le<3;Le++){let ze=new z(new hn(1.4-Le*.35,1.5,7),Re);ze.position.y=xe*.7+Le*.8,Y.add(ze)}}else{let Re=Ue(pt[Math.floor(t()*pt.length)],{flatShading:!0});for(let Le=0;Le<3;Le++){let ze=new z(new wr(.9+t()*.6,0),Re);ze.position.set((t()-.5)*1.1,xe+(t()-.3)*.8,(t()-.5)*1.1),Y.add(ze)}}Y.traverse(Re=>{Re.isMesh&&(Re.castShadow=!0)}),Y.position.set(I,0,B),Y.rotation.y=t()*6,e.add(Y),h(I,B,.5)}let Fn=Ue("#b9c3a1",{roughness:1});for(let I of[-1,1]){let B=new z(new _e(5.6,.12,9),Fn);B.position.set(I*6.3,.06,15.5),B.receiveShadow=!0,e.add(B),n.add(B)}let On=new we;e.add(On);let Ts=d(new Ki(new yt(.12,.1),new Be({color:"#e7c04a",side:St,roughness:1}),90)),ur=[];for(let I=0;I<90;I++)ur.push({x:(t()-.5)*34,y:t()*9,z:t()*30-6,s:.4+t()*.6,r:t()*6});e.add(Ts);let dr=new en;o.push((I,B)=>{ur.forEach((Y,se)=>{Y.y-=I*.45*Y.s,Y.x+=Math.sin(B*.7+Y.r)*I*.35,Y.y<.03&&(Y.y=7+t()*4,Y.x=(t()-.5)*34,Y.z=t()*30-6),dr.position.set(Y.x,Y.y,Y.z),dr.rotation.set(B*Y.s+Y.r,B*.6+Y.r,0),dr.updateMatrix(),Ts.setMatrixAt(se,dr.matrix)}),Ts.instanceMatrix.needsUpdate=!0});let qt=Zm(64,"rgba(150,146,140,0.7)","rgba(150,146,140,0)"),Pn=[];for(let I=0;I<46;I++){let B=d(new Ji(new Ei({map:qt,transparent:!0,depthWrite:!1,opacity:0})));B.visible=!1,e.add(B),Pn.push({sp:B,life:0,max:1})}let ws=.8,In=0,mn=0,tn=1;function Ua(){let I=Pn.find(B=>B.life<=0);I&&(I.life=I.max=3.5+Math.random()*2,I.sp.visible=!0,I.sp.position.set(W.position.x+(Math.random()-.5)*.1,W.position.y+.18+.32*tn,W.position.z),I.vx=(Math.random()-.5)*.06)}o.push((I,B)=>{for(In+=I*(ws*(tn>0?1:0)+(mn>0?9:0)),mn=Math.max(0,mn-I);In>1;)In-=1,Ua();for(let Y of Pn){if(Y.life<=0)continue;Y.life-=I;let se=1-Y.life/Y.max;Y.sp.position.y+=I*.32,Y.sp.position.x+=Y.vx*I+Math.sin(B*1.3+Y.max*3)*I*.05;let xe=.18+se*.9;Y.sp.scale.set(xe,xe,xe),Y.sp.material.opacity=Math.sin(se*Math.PI)*.55,Y.life<=0&&(Y.sp.visible=!1)}j.forEach((Y,se)=>{Y.scale.set(1,.85+Math.sin(B*13+se*2)*.12+Math.random()*.05,1)}),O.intensity=2.6+Math.sin(B*11)*.25+Math.random()*.2});let ka=new we;e.add(ka);let zi=[],hg=0,ap=Zm(64,"rgba(255,214,140,0.9)","rgba(255,214,140,0)"),op={warm:"#ffd9a0",white:"#fff6e6",lotus:"#ffc4c8",sky:"#cfe3ff"},lp=[];function ug(I){let B=new we,Y=new Be({color:I,emissive:I,emissiveIntensity:.6,roughness:.9,transparent:!0,opacity:.95});lp.push(Y),B.add(new z(new be(.22,.17,.42,12),Y));let se=new Ji(new Ei({map:ap,transparent:!0,depthWrite:!1,opacity:.55}));return se.scale.set(1.3,1.3,1.3),B.scale.setScalar(.5),B.add(se),B}let As=new ci({outfit:"hostSuit"});As.interactTag="host",As.root.position.set(fi.x,Ge,fi.z),As.root.rotation.y=fi.face,As.rebuild(),X.add(As.root),h(fi.x,fi.z,.4);let Rs=new ci({outfit:"suit",look:{hair:"part",hairColor:"#4a4540",eyes:"dot",brows:"thick",mouth:"calm",glasses:"square",beard:"none",blush:!1,skin:"#e8b996",height:1.05}});Rs.interactTag="helper",Rs.root.position.set(3,0,15.2),Rs.root.rotation.y=-Math.PI/2,Rs.rebuild(),e.add(Rs.root),h(3,15.2,.4),p("helper",{label:"\uC548\uB0B4 \uB3C4\uC6B0\uBBF8",verb:"\uC870\uBB38 \uC608\uC808 \uBB3B\uAE30",spot:{x:2,z:15.2,face:Math.PI/2},radius:1.5,anchor:new S(3,1.7,15.2)});function cp(I,B,Y,se,xe,Ie,Re,Le){let ze=Math.max(Y-I,0,I-se,xe-B,0,B-Ie);return ze<=0?Re:ze>=Le?0:Re*(1-ze/Le)}function dg(I,B){return Math.max(cp(I,B,-10.5,10.5,-12.5,1,Ge,1.25),cp(I,B,12.5,21.5,-9.3,-.7,Li,.8))}function pg(I,B,Y=.28,se=!1){if(I*I+B*B>2116)return!0;let xe=L?[...r,...L.boxes]:r;for(let Re of xe)if(I>Re.x0-Y&&I<Re.x1+Y&&B>Re.z0-Y&&B<Re.z1+Y)return!0;let Ie=L?[...s,...L.circles]:s;for(let Re of Ie){if(se&&Re.x===fi.x&&Re.z===fi.z)continue;let Le=I-Re.x,ze=B-Re.z;if(Le*Le+ze*ze<(Re.r+Y)**2)return!0}return!1}let fg=(I,B)=>Math.abs(I)<10.4&&B<1&&B>-12.4,hp=new To,Th="day",Ln={scene:e,interactables:a,heightAt:dg,blocked:pg,inHall:fg,hostNpc:As,helper:Rs,HOST_SPOT:fi,GREET_SPOT:rl,tables:kn,isWalkable:I=>n.has(I)||L&&L.walkables.includes(I),get theme(){return L},setTheme(I,B){for(L&&(V.remove(L.group),L.group.traverse(xe=>{xe.geometry?.dispose?.()})),L=qm(I,{FLOOR:Ge,textTexture:ps,rng:Ym,deceasedName:B}),L.name=I,V.add(L.group);H.children.length;)H.remove(H.children[0]);L.lanternStand&&(H.add(L.lanternStand),u(L.lanternStand,"lantern")),Wt.visible=!!L.easels,on.visible=I==="hanok",ae.material.color.set(I==="garden"?"#f7f5ef":I==="chapel"?"#efe9dc":"#e7e3d8"),he&&X.remove(he);let Y=I==="hospital"||I==="hall";he=Y?Lm({floor:Ge}):Dm({floor:Ge,z:ee,accent:I==="garden"?"pink":I==="chapel"?"cream":"yellow"}),X.add(he),ae.position.z=Y?ee-1.05:ee-.8,I==="hospital"&&ae.material.color.set("#a9a7a2"),ae.visible=I!=="hospital",Ln.themeName=I,La(I==="chapel"||I==="garden"||Ln.religion==="christian"||Ln.religion==="catholic"?"simple":"jesa"),N.intensity=I==="hall"||I==="hospital"?16:10;let se=L.ceiling??Ge+5;Z.position.y=Math.min(Ge+4.2,se-.35),N.position.y=Math.min(Ge+4.3,se-.35),Ln.setTime(Th)},setDeceasedName(I){L?.setName(I)},setTime(I){Th=I;let B=Qc[I]||Qc.day;f.top.value.set(B.top),f.bottom.value.set(B.bottom),e.fog.color.set(B.fog),y.color.set(B.hemiSky),y.groundColor.set(B.hemiGround),y.intensity=B.hemi,E.color.set(B.sun),E.intensity=B.sunI,g.opacity=B.star;for(let Y of[...c,...L?.lampMats||[],...lp])Y.emissiveIntensity=B.lamp;Z.intensity=I==="night"?24:18,U.intensity=I==="day"?1:4,i.toneMappingExposure=I==="night"?1.15:1},setPortrait(I){hp.load(I,B=>{B.colorSpace=Rt,Se.map?.dispose(),Se.map=B,Se.needsUpdate=!0})},setGallery(I){Dt.forEach((B,Y)=>{let se=I.length&&(Y<I.length||I.length>1)?I[Y%I.length]:null;if(se!==B.url){if(B.url=se,!se){B.mat.map!==B.placeholder&&B.mat.map?.dispose(),B.mat.map=B.placeholder,B.mat.needsUpdate=!0,B.pic.scale.set(1,1,1);return}hp.load(se,xe=>{xe.colorSpace=Rt,B.mat.map!==B.placeholder&&B.mat.map?.dispose(),B.mat.map=xe,B.mat.needsUpdate=!0;let Ie=xe.image.width/xe.image.height,Re=Ie>=1.36?1.5:1.1*Ie,Le=Ie>=1.36?1.5/Ie:1.1;B.pic.scale.set(Re/1.5,Le/1.1,1)})}})},setReligion(I){Ln.religion=I,pi.visible=I==="catholic";let B=I==="christian"||I==="catholic";for(W.visible=!B,C.visible=!B,$e.visible=!B,a.get("candles").radius=I==="catholic"?1.2:0,Ln.themeName&&La(Ln.themeName==="chapel"||Ln.themeName==="garden"||I==="christian"||I==="catholic"?"simple":"jesa");ge.children.length;)ge.remove(ge.children[0]);if(ye.visible=I==="traditional"||I==="buddhist",(I==="christian"||I==="catholic")&&L?.name!=="chapel"){let Y=Ue(I==="catholic"?"#d8c27d":"#f5f2ea",{metalness:I==="catholic"?.5:0,roughness:.4}),se=new z(new _e(.1,.72,.06),Y),xe=new z(new _e(.46,.1,.06),Y);xe.position.y=.12,ge.add(se,xe)}else if(I==="buddhist"){let Y=Ue("#f2b7b4",{roughness:.6});for(let se=0;se<8;se++){let xe=new z(new mt(.12,12,8),Y);xe.scale.set(.55,1.25,.35);let Ie=se/8*Math.PI-Math.PI/2;xe.position.set(Math.sin(Ie)*.2,.05+Math.cos(Ie)*.08,0),xe.rotation.z=-Ie*.8,ge.add(xe)}}},setTablet(I){ye.material.map=ps(`\u6545${I}\u795E\u4F4D`,{w:128,h:320,bg:"#fbf8ef",fg:"#1b1a18",font:'700 46px "Noto Serif KR", "Gowun Batang", serif',vertical:!0}),ye.material.needsUpdate=!0},setIncense(I,B){tn=Math.max(0,Math.min(1,B));let Y=Math.min(Math.max(I,tn>0?1:0),14);for(;C.children.length<Y;){let xe=C.children.length,Ie=new we,Re=new z(new be(.006,.006,.36,5),Ue("#7c4d34"));Re.position.y=.18;let Le=new z(new mt(.012,6,4),new cn({color:"#ff7a3a"}));Le.position.y=.36,Ie.add(Re,Le),Ie.userData={rod:Re,tip:Le};let ze=xe*2.4,Ht=.03+xe%3*.035;Ie.position.set(Math.cos(ze)*Ht,0,Math.sin(ze)*Ht),Ie.rotation.set((Math.random()-.5)*.15,0,(Math.random()-.5)*.15),C.add(Ie)}let se=.08+.92*tn;for(let xe of C.children)xe.userData.rod.scale.y=se,xe.userData.rod.position.y=.18*se,xe.userData.tip.position.y=.36*se,xe.userData.tip.visible=tn>0},setCounts(I){Br=I;let{flowers:B=0,incense:Y=0,candles:se=0}=I,xe=Ms==="jesa",Ie=Math.min(B,xe?40:90);for(;K.children.length<Ie;){let Le=K.children.length,ze=Nm(1.5),Ht=ze||Pi(1.25);if(ze){let Kt=Math.floor(Le/7),$n=Le%7;Ht.position.set(-1.55+$n*.52+Kt%2*.26,(xe?ue+.03:Ge+.11)+Kt*.012,xe?-8+Kt*.03:-7.4+Kt*.12),Ht.rotation.y=-Math.PI/2+(Math.random()-.5)*.25}else if(xe){let Kt=Math.floor(Le/20),$n=Le%20;Ht.position.set(-1.75+$n*.18+Kt%2*.09,ue+.06+Kt*.03,-7.97+Kt*.04),Ht.rotation.set(Math.PI/2-.1,0,Math.PI+(Math.random()-.5)*.3)}else{let Kt=Math.floor(Le/15),$n=Le%15;Ht.position.set(-1.6+$n*.23+Kt%2*.1+(Math.random()-.5)*.04,Ge+.13+Kt*.03,-7.45+Kt*.12),Ht.rotation.set(Math.PI/2-.15,0,(Math.random()-.5)*.3)}K.add(Ht)}ws=.6+Math.min(Y,30)*.12;let Re=Math.min(se,24);for(;Or.children.length<Re;){let Le=Or.children.length,ze=Le%3,Ht=new we,Kt=new z(new be(.035,.035,.08,10),Ue("#fbf6ea")),$n=new z(new hn(.018,.05,8),new cn({color:"#ffcf73"}));$n.position.y=.07,Ht.add(Kt,$n);let Ba=Math.floor(Le/3);Ht.position.set(-.4+ze*.12+Ba*.13-Math.floor(Ba/7)*.9,.7+ze*.2,-ze*.08+.05),Or.add(Ht)}},setShoes(I){let B=L?.shoes?Math.min(I,18):0;for(;wt.children.length>B;)wt.remove(wt.children[wt.children.length-1]);for(;wt.children.length<B;){let Y=wt.children.length,se=new we,xe=Ue(Nt[Y%Nt.length],{roughness:.5});for(let Le of[-1,1]){let ze=new z(new _e(.11,.07,.27),xe);ze.position.set(Le*.075,.035,0),ze.castShadow=!0,se.add(ze)}let Ie=Math.floor(Y/9),Re=Y%9;se.position.set(-3.1+Re*.38+(Re>4?.9:0)+Ie*.15,Ge*.33+.005,1.8+Ie*.42),se.rotation.y=(Math.random()-.5)*.25,wt.add(se)}},setWreaths(I){for(;hr.children.length;)hr.remove(hr.children[0]);I.slice(-28).forEach((B,Y)=>{let se=Y%2?1:-1,xe=Math.floor(Y/2),Ie=xe<5,Re=Ie?2.75:6.6+(xe-5)*1.25,Le=Ie?se*(3.3+xe*1.35):se*2.85,ze=new we,Ht=Ue("#8a8a86",{metalness:.5,roughness:.4});for(let Fa=0;Fa<3;Fa++){let Cs=new z(new be(.015,.015,1.5,6),Ht),pr=Fa/3*Math.PI*2;Cs.position.set(Math.cos(pr)*.18,.72,Math.sin(pr)*.18-.1),Cs.rotation.set(Math.sin(pr)*.12,0,-Math.cos(pr)*.12),ze.add(Cs)}let Kt=new Tn(Oo(B.style||"white"));Kt.colorSpace=Rt;let $n=new z(new Yt(.6,40),new Be({map:Kt,alphaTest:.3,side:St,roughness:.95}));$n.position.y=1.75,$n.castShadow=!0,ze.add($n);let Ba=(Fa,Cs)=>{let pr=new z(new yt(.14,1.12),new Be({map:zv(Fa),side:St,roughness:.9}));pr.position.set(Cs,.85,.03),pr.rotation.z=Cs>0?-.04:.04,ze.add(pr)};Ba(B.phrase||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4",-.24),Ba(B.from||"",.24),ze.position.set(Le,0,Re),ze.rotation.y=Ie?0:se<0?Math.PI/4:-Math.PI/4,ze.scale.setScalar(1.25),u(ze,`wreath:${Y}`),ze.userData.data=B,hr.add(ze)}),Ln.wreaths=I.slice(-28)},burstSmoke(){mn=1.4},fillCup(){Xn.visible=!0},get altarStyle(){return Ms},flyTo(I,B,Y=.9){let se=I.getWorldPosition(new S);e.attach(I),I.position.copy(se);let xe=0;return new Promise(Ie=>{let Re=Le=>{xe+=Le/Y;let ze=Math.min(1,xe);I.position.lerpVectors(se,B,ze),I.position.y+=Math.sin(ze*Math.PI)*.4,ze>=1&&(o.splice(o.indexOf(Re),1),Ie())};o.push(Re)})},addLantern({text:I="",name:B="",color:Y="warm"},se){let xe=ug(op[Y]||op.warm);xe.children[0].material.emissiveIntensity=(Qc[Th]||Qc.day).lamp;let Ie=hg++,Re={a:Ie*2.39996+.3,r:6+Ie%7*1.5,h:8.5+Ie%5*1.4,sp:.03+Ie%4*.008},Le={uid:Ie,g:xe,slot:Re,text:I,name:B,rise:se?0:1,from:se?se.clone():null};return u(xe,`sky:${Ie}`),ka.add(xe),zi.push(Le),zi.length>90&&ka.remove(zi.shift().g),Le},lantern(I){return zi.find(B=>B.uid===I)},lanternCount(){return zi.length},setMemories(I){for(;On.children.length;)On.remove(On.children[0]);I.slice(-160).forEach((B,Y)=>{let se=Y%2?1:-1,xe=Math.floor(Y/2),Ie=xe%12,Re=Math.floor(xe/12)%7,Le=Pi(1.7,B.relation==="\uAC00\uC871"||B.relation==="\uCE5C\uCC99"?"cream":"white");Le.position.set(se*(3.9+Re*.78+Ie%2*.3),.12+.36,11.4+Ie*.72),Le.rotation.y=Y;let ze=new Ji(new Ei({map:ap,transparent:!0,depthWrite:!1,opacity:.35}));ze.scale.set(.5,.5,.5),Le.add(ze),u(Le,`memory:${Y}`),On.add(Le)}),Ln.memories=I.slice(-160)},update(I,B){for(let Y of[...o])Y(I,B);L?.update(I,B),zi.forEach(Y=>{let se=Y.slot;se.a+=I*se.sp;let xe=new S(Math.cos(se.a)*se.r,se.h+Math.sin(B*.5+se.a*3)*.3,6+Math.sin(se.a)*se.r*.7);if(Y.rise<1){Y.rise=Math.min(1,Y.rise+I/7);let Ie=Y.rise*Y.rise*(3-2*Y.rise);Y.g.position.lerpVectors(Y.from,xe,Ie)}else Y.g.position.copy(xe);Y.g.rotation.y+=I*.3})}};return Ln.setTheme("hospital",""),Ln.setReligion("traditional"),Ln}var Rn=i=>440*2**((i-69)/12),Wv=[[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[67,2],[64,1],[62,2],[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[74,3],[74,2],[71,1],[74,2],[71,.5],[67,.5],[71,2],[69,1],[67,2],[64,1],[62,2],[62,1],[67,2],[71,.5],[67,.5],[71,2],[69,1],[67,3]],Qm=[[43,50,55,59],[43,50,55,59],[48,55,60,64],[43,50,55,59],[43,50,55,59],[40,52,55,59],[50,57,62,66],[50,57,62,66],[43,50,55,59],[43,53,55,59],[48,55,60,64],[43,50,55,59],[40,52,55,59],[50,57,62,66],[43,50,55,59]],th=[[41,57,60,69],[38,57,62,69],[46,58,62,70],[48,55,64,67],[41,57,60,65],[45,57,60,64],[46,58,62,65],[48,55,60,67],[50,57,62,65],[46,53,58,62],[41,57,60,65],[48,55,60,64],[41,53,60,65]],e0=[[48,55,60,64],[45,52,57,60],[41,48,53,57],[43,50,55,59]],t0=[67,69,72,74,76,79,81],Vo=[55,57,60,62,64,67,69,72],n0=[[50,57,62,66],[45,57,61,64],[47,54,59,62],[42,54,57,61],[43,55,59,62],[38,54,57,62],[43,55,59,62],[45,57,61,64]],Wo=[57,60,62,64,67,69,72,74],nh=class{constructor(){this.ctx=null,this.on=!0,this.musicVol=.5,this.sfxVol=.7,this.trackId="none",this.track=null,this.ksCache=new Map}ensure(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return null;let t=this.ctx=new e;this.master=t.createGain();let n=t.createDynamicsCompressor();n.threshold.value=-18,n.ratio.value=3,this.master.connect(n).connect(t.destination),this.music=t.createGain(),this.sfx=t.createGain(),this.music.gain.value=this.musicVol,this.sfx.gain.value=this.sfxVol,this.music.connect(this.master),this.sfx.connect(this.master),this.reverb=t.createConvolver(),this.reverb.buffer=this.impulse(3.2);let r=t.createGain();r.gain.value=.45,this.reverb.connect(r).connect(this.master),this.master.gain.value=this.on?1:0}return this.ctx.state==="suspended"&&this.ctx.resume(),this.unlockIOS(),this.ctx}unlockIOS(){if(!this.unlocked){this.unlocked=!0;try{navigator.audioSession&&(navigator.audioSession.type="playback")}catch{}try{let n=new ArrayBuffer(8044),r=new DataView(n),s=(o,c)=>[...c].forEach((l,h)=>r.setUint8(o+h,l.charCodeAt(0)));s(0,"RIFF"),r.setUint32(4,36+4e3*2,!0),s(8,"WAVE"),s(12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,8e3,!0),r.setUint32(28,8e3*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),s(36,"data"),r.setUint32(40,4e3*2,!0);let a=new Audio(URL.createObjectURL(new Blob([n],{type:"audio/wav"})));a.loop=!0,a.setAttribute("playsinline",""),a.play().catch(()=>{this.unlocked=!1}),this.keepAlive=a}catch{}}}get running(){return this.ctx?.state==="running"}impulse(e){let t=this.ctx,n=Math.floor(t.sampleRate*e),r=t.createBuffer(2,n,t.sampleRate);for(let s=0;s<2;s++){let a=r.getChannelData(s);for(let o=0;o<n;o++)a[o]=(Math.random()*2-1)*(1-o/n)**3}return r}noiseBuffer(e=2){let t=this.ctx,n=t.createBuffer(1,t.sampleRate*e,t.sampleRate),r=n.getChannelData(0);for(let s=0;s<r.length;s++)r[s]=Math.random()*2-1;return n}setOn(e){this.on=e,this.master&&this.master.gain.setTargetAtTime(e?1:0,this.ctx.currentTime,.1),this.audioEl&&(this.audioEl.muted=!e)}setMusicVolume(e){this.musicVol=e,this.music&&this.music.gain.setTargetAtTime(e,this.ctx.currentTime,.1),this.audioEl&&(this.audioEl.volume=Math.min(1,e*1.4))}setSfxVolume(e){this.sfxVol=e,this.sfx&&this.sfx.gain.setTargetAtTime(e,this.ctx.currentTime,.1)}duck(e){this.music&&this.music.gain.setTargetAtTime(e?this.musicVol*.25:this.musicVol,this.ctx.currentTime,.6)}play(e,t=""){let n=this.ensure();if(!n||(this.stopTrack(),this.trackId=e,e==="none"))return;if(e==="custom"){if(!t)return;let l=new Audio(t);l.loop=!0,l.volume=Math.min(1,this.musicVol*1.4),l.muted=!this.on,l.play().catch(()=>{}),this.audioEl=l;return}let r=n.createGain();r.gain.value=0,r.gain.setTargetAtTime(1,n.currentTime,1.2),r.connect(this.music);let s=n.createGain();s.gain.value=.6,r.connect(s).connect(this.reverb);let a=this.track={id:e,out:r,nodes:[],timers:[],next:n.currentTime+.3,i:0},o=(l,h=200)=>{let u=setInterval(()=>{this.track===a&&l()},h);a.timers.push(u),l()},c=()=>n.currentTime+1.2;switch(e){case"wind":{this.noiseBed(a,380,.05,.08),o(()=>{for(;a.next<c();)this.chimeAt(a.next,.07,r),a.next+=3.5+Math.random()*6});break}case"rain":{this.noiseBed(a,2600,.05,.02,"bandpass"),this.noiseBed(a,600,.04,.01),o(()=>{for(;a.next<c();)this.drip(a.next,r),a.next+=.15+Math.random()*.9});break}case"moktak":{this.drone(a,[55,82.5],.025);let l=0;o(()=>{for(;a.next<c();){let h=l%24;h<16&&this.moktakAt(a.next,h===0?.32:.22,r),h===20&&this.bowlAt(a.next,196+(l%48?0:24),.12,r),a.next+=h<16?.95:1.1,l++}});break}case"hymn":{let h=[],u=0;for(let[x,g]of Wv)h.push({n:x,t:u,d:g*.95}),u+=g*.95;let d=u+3,p=[];for(let x=0;x<Qm.length;x++)p.push({ch:Qm[x],t:.95+x*3*.95,d:3*.95});let f=n.currentTime+.4,v=0,m=0;o(()=>{let x=c();for(;v<h.length&&f+h[v].t<x;){let g=h[v++];this.organAt(Rn(g.n),f+g.t,g.d*.97,.16,r)}for(;m<p.length&&f+p[m].t<x;){let g=p[m++];g.ch.forEach(y=>this.organAt(Rn(y),f+g.t,g.d,.06,r,!0))}v>=h.length&&m>=p.length&&f+d<x+1&&(f+=d,v=0,m=0)});break}case"chorale":{o(()=>{for(;a.next<c();){let l=th[a.i%th.length],h=a.i%th.length===th.length-1?6.4:3.4;l.forEach((u,d)=>this.organAt(Rn(u),a.next,h,d===3?.09:.06,r,d<3)),a.next+=h,a.i++}});break}case"piano":{o(()=>{for(;a.next<c();){let l=Math.floor(a.i/8),h=e0[l%4],u=a.i%8,d=[0,2,3,2,1,2,3,2];this.pianoAt(Rn(h[d[u]]+(u===0?0:12)),a.next,u===0?.16:.07,r),(u===0||u===4&&Math.random()<.6)&&this.pianoAt(Rn(t0[Math.floor(Math.random()*t0.length)]+5),a.next+.02,.06,r),a.next+=.62,a.i++}});break}case"gayageum":{let l=3;o(()=>{for(;a.next<c();){l=Math.max(0,Math.min(Vo.length-1,l+[-2,-1,-1,0,1,1,2][Math.floor(Math.random()*7)]));let h=Math.random()<.35;this.pluckAt(Rn(Vo[l]),a.next,h?.34:.26,r,h),Math.random()<.2&&this.pluckAt(Rn(Vo[Math.max(0,l-3)]-12),a.next,.18,r,!1),a.next+=h?2.2+Math.random():.5+Math.random()*.8}});break}case"canon":{o(()=>{for(;a.next<c();){let l=n0[Math.floor(a.i/8)%n0.length],h=a.i%8,u=[0,1,2,3,2,1,2,3];this.pluckAt(Rn(l[u[h]]+12),a.next,h===0?.22:.13,r,!1),h===0&&this.pluckAt(Rn(l[0]),a.next,.2,r,!1),a.next+=.42,a.i++}});break}case"cello":{this.drone(a,[55/2*2,82.5],.012);let l=3;o(()=>{for(;a.next<c();){l=Math.max(0,Math.min(Wo.length-1,l+[-2,-1,-1,0,1,1,2][Math.floor(Math.random()*7)]));let h=2.4+Math.random()*2;this.bowAt(Rn(Wo[l]-12),a.next,h,.13,r,{bright:900,vib:5}),a.next+=h*.92}});break}case"haegeum":{let l=4;o(()=>{for(;a.next<c();){let h=Wo[l];l=Math.max(0,Math.min(Wo.length-1,l+[-2,-1,-1,1,1,2][Math.floor(Math.random()*6)]));let u=1.6+Math.random()*1.6;this.bowAt(Rn(Wo[l]),a.next,u,.09,r,{bright:2400,vib:7,from:Rn(h)}),a.next+=u*(Math.random()<.3?1.5:1)}});break}case"daegeum":{this.noiseBed(a,500,.012,.006);let l=4;o(()=>{for(;a.next<c();){l=Math.max(0,Math.min(Vo.length-1,l+[-2,-1,0,1,1,2][Math.floor(Math.random()*6)]));let h=2.5+Math.random()*2.5;this.fluteAt(Rn(Vo[l]+12),a.next,h,.17,r),a.next+=h+.6+Math.random()}});break}case"musicbox":{o(()=>{for(;a.next<c();){let l=Math.floor(a.i/6),h=e0[l%4],u=a.i%6,d=[h[3]+12,h[2]+12,h[1]+24,h[2]+12,h[3]+12,h[1]+24][u];this.toneAt(Rn(d),a.next,2.4,u===0?.15:.09,r),this.toneAt(Rn(d)*3.01,a.next,.6,.012,r),a.next+=.55+(u===5?.3:0),a.i++}});break}case"stream":{this.noiseBed(a,1400,.07,.02,"bandpass"),this.noiseBed(a,350,.06,.015),o(()=>{for(;a.next<c();)this.birdAt(a.next,r),a.next+=2.5+Math.random()*6});break}default:}}bowAt(e,t,n,r,s,{bright:a=1200,vib:o=5,from:c=null}={}){let l=this.ctx,h=l.createOscillator();h.type="sawtooth",c?(h.frequency.setValueAtTime(c,t),h.frequency.exponentialRampToValueAtTime(e,t+.35)):h.frequency.setValueAtTime(e,t);let u=l.createOscillator(),d=l.createGain();u.frequency.value=o,d.gain.value=e*.006,u.connect(d).connect(h.frequency);let p=l.createBiquadFilter();p.type="lowpass",p.frequency.value=a,p.Q.value=.8;let f=l.createGain();f.gain.setValueAtTime(1e-4,t),f.gain.linearRampToValueAtTime(r,t+.45),f.gain.setValueAtTime(r,t+n*.7),f.gain.exponentialRampToValueAtTime(1e-4,t+n+.6),h.connect(p).connect(f).connect(s),h.start(t),u.start(t),h.stop(t+n+.7),u.stop(t+n+.7)}fluteAt(e,t,n,r,s){let a=this.ctx,o=a.createOscillator();o.frequency.setValueAtTime(e*.98,t),o.frequency.linearRampToValueAtTime(e,t+.3);let c=a.createOscillator(),l=a.createGain();c.frequency.setValueAtTime(3,t),c.frequency.linearRampToValueAtTime(6,t+n),l.gain.value=e*.012,c.connect(l).connect(o.frequency);let h=a.createGain();h.gain.setValueAtTime(1e-4,t),h.gain.linearRampToValueAtTime(r,t+.5),h.gain.exponentialRampToValueAtTime(1e-4,t+n+.5);let u=a.createBufferSource();u.buffer=this.noiseBuffer(1),u.loop=!0;let d=a.createBiquadFilter();d.type="bandpass",d.frequency.value=e*2,d.Q.value=3;let p=a.createGain();p.gain.value=.25,o.connect(h),u.connect(d).connect(p).connect(h),h.connect(s),o.start(t),c.start(t),u.start(t),o.stop(t+n+.6),c.stop(t+n+.6),u.stop(t+n+.6)}birdAt(e,t){let n=this.ctx,r=2400+Math.random()*1800,s=2+Math.floor(Math.random()*3);for(let a=0;a<s;a++){let o=e+a*.13,c=n.createOscillator();c.frequency.setValueAtTime(r,o),c.frequency.exponentialRampToValueAtTime(r*1.4,o+.06),c.frequency.exponentialRampToValueAtTime(r*.9,o+.1);let l=n.createGain();l.gain.setValueAtTime(1e-4,o),l.gain.linearRampToValueAtTime(.04,o+.01),l.gain.exponentialRampToValueAtTime(1e-4,o+.11),c.connect(l).connect(t),c.start(o),c.stop(o+.12)}}stopTrack(){this.audioEl&&(this.audioEl.pause(),this.audioEl=null);let e=this.track;if(!e)return;this.track=null,e.timers.forEach(clearInterval);let t=this.ctx;e.out.gain.cancelScheduledValues(t.currentTime),e.out.gain.setTargetAtTime(0,t.currentTime,.4),setTimeout(()=>{e.nodes.forEach(n=>{try{n.stop?.()}catch{}}),e.out.disconnect()},2500)}noiseBed(e,t,n,r,s="lowpass"){let a=this.ctx,o=a.createBufferSource();o.buffer=this.noiseBuffer(4),o.loop=!0;let c=a.createBiquadFilter();c.type=s,c.frequency.value=t,c.Q.value=s==="bandpass"?.6:.7;let l=a.createGain();l.gain.value=n;let h=a.createOscillator(),u=a.createGain();h.frequency.value=.07+Math.random()*.05,u.gain.value=r,h.connect(u).connect(l.gain),o.connect(c).connect(l).connect(e.out),o.start(),h.start(),e.nodes.push(o,h)}drone(e,t,n){let r=this.ctx;for(let s of t){let a=r.createOscillator();a.frequency.value=s;let o=r.createGain();o.gain.value=n,a.connect(o).connect(e.out),a.start(),e.nodes.push(a)}}env(e,t,n,r,s,a=.3){e.gain.setValueAtTime(1e-4,t),e.gain.linearRampToValueAtTime(n,t+r),e.gain.setValueAtTime(n,t+Math.max(r,s-a)),e.gain.exponentialRampToValueAtTime(1e-4,t+s+a)}organAt(e,t,n,r,s,a=!1){let o=this.ctx,c=o.createGain(),l=o.createBiquadFilter();l.type="lowpass",l.frequency.value=a?1100:1900,l.connect(c).connect(s);for(let[h,u,d]of[[1,1,"sine"],[2,.45,"sine"],[.5,.35,"sine"],[3,.12,"triangle"]]){let p=o.createOscillator();p.type=d,p.frequency.value=e*h,p.detune.value=(Math.random()-.5)*6;let f=o.createGain();f.gain.value=u,p.connect(f).connect(l),p.start(t),p.stop(t+n+.6)}this.env(c,t,r,.09,n,.35)}pianoAt(e,t,n,r){let s=this.ctx,a=s.createGain();a.connect(r);for(let[o,c]of[[1,1],[2,.35],[3,.12],[4.01,.05]]){let l=s.createOscillator();l.frequency.value=e*o;let h=s.createGain();h.gain.setValueAtTime(c,t),h.gain.exponentialRampToValueAtTime(1e-4,t+3.2/o),l.connect(h).connect(a),l.start(t),l.stop(t+3.4)}a.gain.setValueAtTime(1e-4,t),a.gain.linearRampToValueAtTime(n,t+.008),a.gain.exponentialRampToValueAtTime(n*.4,t+.6),a.gain.exponentialRampToValueAtTime(1e-4,t+3.3)}ks(e,t=3){let n=Math.round(e*10);if(this.ksCache.has(n))return this.ksCache.get(n);let r=this.ctx,s=r.sampleRate,a=Math.max(2,Math.round(s/e)),o=Math.floor(s*t),c=r.createBuffer(1,o,s),l=c.getChannelData(0),h=new Float32Array(a);for(let d=0;d<a;d++)h[d]=(Math.random()*2-1)*(d<a/2?1:.6);let u=0;for(let d=0;d<o;d++){let p=h[u],f=h[(u+1)%a];h[u]=(p+f)*.5*.9965,l[d]=p,u=(u+1)%a}return this.ksCache.set(n,c),c}pluckAt(e,t,n,r,s){let a=this.ctx,o=a.createBufferSource();o.buffer=this.ks(e);let c=a.createGain();c.gain.value=n;let l=a.createBiquadFilter();if(l.type="lowpass",l.frequency.value=2400,o.connect(l).connect(c).connect(r),s){let h=o.playbackRate;h.setValueAtTime(1,t),h.setValueAtTime(1,t+.35);for(let u=0;u<4;u++)h.linearRampToValueAtTime(1.045,t+.55+u*.32),h.linearRampToValueAtTime(1,t+.71+u*.32)}o.start(t)}bowlAt(e,t,n,r){let s=this.ctx;for(let[a,o,c]of[[1,1,.7],[2.71,.45,1.3],[5.12,.18,2.1]])for(let l of[0,c]){let h=s.createOscillator();h.frequency.value=e*a+l;let u=s.createGain();u.gain.setValueAtTime(1e-4,t),u.gain.linearRampToValueAtTime(n*o*.5,t+.02),u.gain.exponentialRampToValueAtTime(1e-4,t+9/a),h.connect(u).connect(r),h.start(t),h.stop(t+9.2)}}moktakAt(e,t,n){let r=this.ctx,s=r.createOscillator();s.frequency.setValueAtTime(560,e),s.frequency.exponentialRampToValueAtTime(330,e+.16);let a=r.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(t,e+.002),a.gain.exponentialRampToValueAtTime(1e-4,e+.22),s.connect(a).connect(n),s.start(e),s.stop(e+.25);let o=r.createOscillator();o.type="triangle",o.frequency.value=1180;let c=r.createGain();c.gain.setValueAtTime(t*.25,e),c.gain.exponentialRampToValueAtTime(1e-4,e+.05),o.connect(c).connect(n),o.start(e),o.stop(e+.06)}chimeAt(e,t,n){let r=[1318,1568,1760,2093,2349][Math.floor(Math.random()*5)];this.toneAt(r,e,3,t,n),this.toneAt(r*2.76,e,1.2,t*.3,n)}drip(e,t){let n=this.ctx,r=n.createOscillator(),s=900+Math.random()*1400;r.frequency.setValueAtTime(s,e),r.frequency.exponentialRampToValueAtTime(s*1.6,e+.05);let a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.03+Math.random()*.03,e+.003),a.gain.exponentialRampToValueAtTime(1e-4,e+.09),r.connect(a).connect(t),r.start(e),r.stop(e+.1)}toneAt(e,t,n,r,s,a="sine"){let o=this.ctx,c=o.createOscillator(),l=o.createGain();return c.type=a,c.frequency.setValueAtTime(e,t),l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(r,t+.005),l.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(l).connect(s),c.start(t),c.stop(t+n+.05),c}tone(e,t,{type:n="sine",gain:r=.2,when:s=0}={}){let a=this.ensure();return a?this.toneAt(e,a.currentTime+s,t,r,this.sfx,n):null}moktak(){let e=this.ensure();e&&this.moktakAt(e.currentTime,.35,this.sfx)}chime(e=.12){let t=this.ensure();t&&this.chimeAt(t.currentTime,e,this.sfx)}bell(){this.tone(196,5,{gain:.25}),this.tone(392.5,3.5,{gain:.12}),this.tone(589,2.2,{gain:.06})}soft(){this.tone(880,.6,{gain:.06}),this.tone(1320,.8,{gain:.04,when:.08})}drop(){this.tone(300,.25,{type:"triangle",gain:.12})}pop(){this.tone(660,.12,{gain:.05})}};var jo='<ellipse cx="32" cy="40" rx="27" ry="12" fill="#f4f1ea" stroke="#d9d3c6" stroke-width="1.5"/><ellipse cx="32" cy="38" rx="21" ry="8.5" fill="#fbfaf6"/>',r0={yukgaejang:'<svg viewBox="0 0 64 64"><path d="M8 30 Q10 52 32 54 Q54 52 56 30 Z" fill="#f2efe8" stroke="#cfc8ba" stroke-width="1.5"/><ellipse cx="32" cy="30" rx="24" ry="9" fill="#b8321e"/><ellipse cx="32" cy="29" rx="19" ry="6" fill="#c9442a"/><path d="M18 28 l9 3 M34 26 l10 4 M24 32 l8-2" stroke="#6b3b1f" stroke-width="2.4" stroke-linecap="round"/><path d="M28 27 l7 1 M40 31 l6-1 M20 31 l5 0" stroke="#5f9c3a" stroke-width="2.4" stroke-linecap="round"/><circle cx="37" cy="30" r="1.6" fill="#f0a23a"/><circle cx="25" cy="27" r="1.3" fill="#f0a23a"/><path d="M22 18 q3-5 0-9 M32 17 q3-5 0-9 M42 18 q3-5 0-9" stroke="#c9c4ba" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>',pyeonyuk:`<svg viewBox="0 0 64 64">${jo}<g transform="rotate(-12 30 36)">${[0,1,2,3,4].map(i=>`<rect x="${12+i*7}" y="28" width="9" height="13" rx="1.5" fill="#efd9cf" stroke="#c7a596"/><rect x="${12+i*7}" y="28" width="9" height="3" fill="#7a5040"/><path d="M${13+i*7} 35 h7" stroke="#fbf3ee" stroke-width="1.2"/>`).join("")}</g><ellipse cx="51" cy="44" rx="6" ry="3.5" fill="#fbfaf6" stroke="#cfc8ba"/><circle cx="50" cy="43" r="1.4" fill="#f2a8a0"/><circle cx="53" cy="44" r="1.2" fill="#f2a8a0"/></svg>`,hongeo:`<svg viewBox="0 0 64 64">${jo}<path d="M14 38 Q20 24 32 26 Q46 23 50 38 Q32 44 14 38Z" fill="#cf4a2a"/><path d="M20 33 q6-3 10 0 M32 31 q6-3 11 1" stroke="#e8794f" stroke-width="2" fill="none"/><circle cx="24" cy="36" r="3.4" fill="#9cc56a" stroke="#5f8a3a"/><circle cx="40" cy="35" r="3.4" fill="#9cc56a" stroke="#5f8a3a"/><path d="M30 30 l2 1 M36 33 l2 1 M27 34 l2 1" stroke="#fff5d8" stroke-width="1.4"/></svg>`,jeon:`<svg viewBox="0 0 64 64">${jo}<ellipse cx="22" cy="37" rx="8" ry="5" fill="#f0c64a" stroke="#c9922a"/><ellipse cx="38" cy="40" rx="8" ry="5" fill="#f2ce58" stroke="#c9922a"/><circle cx="30" cy="31" r="5" fill="#c98a3a" stroke="#8e5a22"/><circle cx="42" cy="31" r="5" fill="#c98a3a" stroke="#8e5a22"/><circle cx="29" cy="30" r="0.9" fill="#d9402a"/><circle cx="31" cy="32" r="0.9" fill="#4f8a3a"/><circle cx="43" cy="30" r="0.9" fill="#4f8a3a"/><path d="M48 38 q6-6 10 0 q-4 6-10 0z" fill="#4f7d34" stroke="#c9922a" stroke-width="1.5"/></svg>`,tteok:`<svg viewBox="0 0 64 64">${jo}<rect x="12" y="28" width="20" height="5" fill="#fbf8f0" stroke="#d7cfbf"/><rect x="12" y="33" width="20" height="3" fill="#8a3b2e"/><rect x="12" y="36" width="20" height="5" fill="#fbf8f0" stroke="#d7cfbf"/><rect x="35" y="30" width="16" height="9" rx="3" fill="#fbfaf6" stroke="#d7cfbf"/><circle cx="43" cy="34.5" r="2.6" fill="none" stroke="#c9b9a3" stroke-width="1.2"/><circle cx="43" cy="34.5" r="0.9" fill="#c9b9a3"/><rect x="38" y="40" width="14" height="6" rx="2.5" fill="#cfe3b3" stroke="#a7c387"/></svg>`,snack:`<svg viewBox="0 0 64 64">${jo}${[[20,36],[24,33],[27,38],[17,39],[23,41]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="3.2" ry="2.2" fill="#d9b07a" stroke="#a87e4a"/>`).join("")}<path d="M33 31 q8 3 16 0 M34 35 q7 4 15 1 M35 39 q6 3 13 0 M36 43 q5 2 10 0" stroke="#e8b98a" stroke-width="2.4" fill="none" stroke-linecap="round"/></svg>`,soju:'<svg viewBox="0 0 64 64"><path d="M24 6 h8 v10 q6 4 6 12 v28 q0 3-3 3 h-14 q-3 0-3-3 v-28 q0-8 6-12z" fill="#3e9a63" opacity=".9" stroke="#2a6e45"/><rect x="18" y="32" width="20" height="12" fill="#f4f1ea"/><path d="M22 38 h12" stroke="#2a6e45" stroke-width="2"/><rect x="24" y="4" width="8" height="4" fill="#2a6e45"/><path d="M44 42 h12 l-2 14 h-8 z" fill="#e9f3ee" stroke="#9fbcae"/><path d="M45 46 h10" stroke="#cfe2d8" stroke-width="2"/></svg>',sikhye:`<svg viewBox="0 0 64 64"><path d="M10 28 Q12 50 32 52 Q52 50 54 28 Z" fill="#c9a24a" stroke="#9c7a2e" stroke-width="1.5"/><ellipse cx="32" cy="28" rx="22" ry="8" fill="#efe4c4"/>${[[24,27],[30,29],[36,26],[40,29],[27,30],[34,31]].map(([i,e])=>`<ellipse cx="${i}" cy="${e}" rx="1.6" ry="0.9" fill="#fffdf6" stroke="#ddd2b4" stroke-width=".6"/>`).join("")}<ellipse cx="38" cy="27" rx="1.4" ry="2" fill="#f6efd8" stroke="#c9b98a" stroke-width=".6"/></svg>`,coffee:'<svg viewBox="0 0 64 64"><path d="M16 18 h28 l-4 38 h-20 z" fill="#fbfaf6" stroke="#cfc8ba" stroke-width="1.5"/><ellipse cx="30" cy="18" rx="14" ry="4" fill="#8a5a36"/><path d="M19 30 h22" stroke="#d9c06a" stroke-width="3"/><rect x="44" y="20" width="5" height="26" rx="1" fill="#f2c12e" transform="rotate(14 46 33)"/><rect x="44" y="24" width="5" height="3" fill="#c0392b" transform="rotate(14 46 33)"/><path d="M26 12 q3-4 0-8 M33 12 q3-4 0-8" stroke="#c9c4ba" stroke-width="1.5" fill="none"/></svg>'},$t=(i,e={})=>new Be({color:i,roughness:.6,...e});function Ma(i=.13){let e=new z(new be(i,i*.8,.025,24),$t("#f4f1ea"));return e.position.y=.012,e}function i0(i,e,t="#f2efe8"){return new z(new be(i,i*.62,e,24),$t(t,{roughness:.4}))}var Wn=(i,e)=>i+Math.random()*(e-i);function s0(i){let e=new we,t=(n,r=0,s=0,a=0)=>(n.position.set(r,s,a),e.add(n),n);switch(i){case"yukgaejang":{t(i0(.12,.09),0,.045,0);let n=t(new z(new Yt(.112,24),$t("#b8321e",{roughness:.15})),0,.093,0);n.rotation.x=-Math.PI/2;for(let r=0;r<8;r++){let s=t(new z(new _e(.06,.008,.01),$t(r%3?"#6b3b1f":"#5f9c3a")),Wn(-.06,.06),.097,Wn(-.06,.06));s.rotation.y=Wn(0,3)}break}case"pyeonyuk":{e.add(Ma());for(let n=0;n<5;n++){let r=t(new z(new _e(.05,.012,.075),$t("#ead2c6")),-.07+n*.03,.03+n*.002,0);r.rotation.z=.35;let s=t(new z(new _e(.05,.013,.012),$t("#7a5040")),-.07+n*.03,.031+n*.002,-.035);s.rotation.z=.35}t(new z(new be(.03,.025,.02,14),$t("#f4f1ea")),.1,.02,.06),t(new z(new be(.022,.022,.006,12),$t("#f2a8a0")),.1,.032,.06);break}case"hongeo":{e.add(Ma());let n=t(new z(new mt(.075,16,10),$t("#cf4a2a",{roughness:.4})),0,.03,0);n.scale.y=.45;for(let r=0;r<4;r++)t(new z(new be(.018,.018,.006,12),$t("#9cc56a")),Wn(-.05,.05),.055,Wn(-.04,.04)).rotation.x=Wn(-.4,.4);break}case"jeon":{e.add(Ma(.14));for(let r=0;r<4;r++)t(new z(new be(.026,.028,.016,16),$t("#c98a3a")),-.06+r%2*.05,.034+Math.floor(r/2)*.012,-.03+Math.floor(r/2)*.02);for(let r=0;r<3;r++)t(new z(new be(.03,.03,.01,18),$t("#f0c64a")),.04+r*.012,.03+r*.008,.02-r*.02).scale.set(1.5,1,.9);t(new z(new be(.03,.03,.008,3),$t("#4f7d34")),0,.03,.07).scale.set(1.4,1,.8);break}case"tteok":{e.add(Ma()),["#fbf8f0","#8a3b2e","#fbf8f0","#8a3b2e"].forEach((r,s)=>t(new z(new _e(.1,.014,.06),$t(r,{roughness:.9})),-.04,.032+s*.014,0));for(let r=0;r<3;r++)t(new z(new _e(.045,.012,.035),$t(r===2?"#cfe3b3":"#fbfaf6",{roughness:.9})),.07,.032+r*.013,-.02+r*.012);break}case"snack":{e.add(Ma());for(let n=0;n<9;n++)t(new z(new mt(.012,8,6),$t("#d9b07a")),Wn(-.08,-.01),.032,Wn(-.04,.04)).scale.set(1.4,1,1);for(let n=0;n<7;n++){let r=t(new z(new _e(.07,.006,.008),$t("#e8b98a")),Wn(.02,.07),.032+n*.003,Wn(-.04,.04));r.rotation.y=Wn(0,3)}break}case"soju":{let n=new Be({color:"#3e9a63",transparent:!0,opacity:.8,roughness:.1});t(new z(new be(.032,.032,.14,16),n),-.04,.07,0),t(new z(new be(.012,.03,.06,14),n),-.04,.17,0),t(new z(new be(.033,.033,.05,16,1,!0),$t("#f4f1ea")),-.04,.07,0),t(new z(new be(.022,.018,.035,14),new Be({color:"#e9f3ee",transparent:!0,opacity:.75,roughness:.05})),.05,.018,.02);break}case"sikhye":{t(i0(.07,.06,"#c9a24a"),0,.03,0);let n=t(new z(new Yt(.068,20),$t("#efe4c4",{roughness:.1})),0,.062,0);n.rotation.x=-Math.PI/2;for(let r=0;r<6;r++)t(new z(new mt(.005,6,4),$t("#fffdf6")),Wn(-.04,.04),.06,Wn(-.04,.04));break}case"coffee":{t(new z(new be(.035,.026,.085,16),$t("#fbfaf6")),0,.043,0);let n=t(new z(new Yt(.034,16),$t("#8a5a36",{roughness:.2})),0,.088,0);n.rotation.x=-Math.PI/2,t(new z(new _e(.012,.004,.09),$t("#f2c12e")),.05,.003,.02).rotation.y=.4;break}default:e.add(Ma())}return e.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.raycast=()=>{})}),e}var ih=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ea=class{constructor(e,{look:t=_n,outfit:n="suit",who:r="guest",onChange:s=()=>{}}={}){this.el=e,this.look={..._n,...t},this.outfit=n,this.who=r,this.onChange=s,this.build()}build(){let e=bd,t=Object.entries(Cr).filter(([,s])=>s.who===this.who),n=(s,a)=>a.map(o=>`<button type="button" class="chip" data-k="${s}" data-v="${o.id}">${ih(o.label)}</button>`).join(""),r=(s,a)=>a.map(o=>{let c=typeof o=="string"?o:o.id,l=typeof o=="string"?"":o.label;return`<button type="button" class="dot" data-k="${s}" data-v="${c}" style="--c:${c}" title="${ih(l)}" aria-label="${ih(l||c)}"></button>`}).join("");this.el.innerHTML=`
      <div class="cz">
        <div class="cz-preview">
          <canvas aria-label="\uB0B4 \uCE90\uB9AD\uD130 \uBBF8\uB9AC\uBCF4\uAE30"></canvas>
          <div class="cz-preview-tools">
            <button type="button" class="chip" data-dice>\u{1F3B2} \uC544\uBB34\uB807\uAC8C\uB098</button>
          </div>
        </div>
        <div class="cz-options">
          <div class="cz-row"><span>\uC637\uCC28\uB9BC</span><div>${t.map(([s,a])=>`<button type="button" class="chip" data-k="outfit" data-v="${s}">${ih(a.label)}</button>`).join("")}</div></div>
          <div class="cz-row"><span>\uD53C\uBD80</span><div>${r("skin",e.skin)}</div></div>
          <div class="cz-row"><span>\uBA38\uB9AC \uBAA8\uC591</span><div>${n("hair",e.hair)}</div></div>
          <div class="cz-row"><span>\uBA38\uB9AC\uC0C9</span><div>${r("hairColor",e.hairColor)}</div></div>
          <div class="cz-row"><span>\uB208</span><div>${n("eyes",e.eyes)}</div></div>
          <div class="cz-row"><span>\uB208\uC379 \xB7 \uC785</span><div>${n("brows",e.brows)}${n("mouth",e.mouth)}</div></div>
          <div class="cz-row"><span>\uC548\uACBD \xB7 \uC218\uC5FC</span><div>${n("glasses",e.glasses)}${n("beard",e.beard.filter(s=>s.id!=="none"))}</div></div>
          <div class="cz-row"><span>\uD0A4</span><div>${n("height",e.height)}<button type="button" class="chip" data-k="blush" data-v="toggle">\uBCFC\uD130\uCE58</button></div></div>
        </div>
      </div>`,this.el.addEventListener("click",s=>{let a=s.target.closest("[data-k],[data-dice]");if(!a)return;if(a.hasAttribute("data-dice"))return this.randomize();let o=a.dataset.k,c=a.dataset.v;o==="outfit"?(this.outfit=c,this.avatar.setOutfit(c)):(o==="height"&&(c=Number(c)),o==="blush"&&(c=!this.look.blush),(o==="glasses"||o==="beard")&&this.look[o]===c&&(c="none"),this.look[o]=c,this.avatar.setLook(this.look),(o==="eyes"||o==="mouth")&&this.avatar.play("nod",null,{soft:!0})),this.sync(),this.onChange(this.look,this.outfit)}),this.initPreview(),this.sync()}randomize(){let e=n=>n[Math.floor(Math.random()*n.length)],t=bd;this.look={skin:e(t.skin),hair:e(t.hair).id,hairColor:e(t.hairColor).id,eyes:e(t.eyes).id,brows:e(t.brows).id,mouth:e(t.mouth).id,glasses:Math.random()<.3?e(t.glasses).id:"none",beard:Math.random()<.2?e(t.beard).id:"none",blush:Math.random()<.7,height:e(t.height).id},this.avatar.setLook(this.look),this.avatar.play("wave",null,{soft:!0}),this.sync(),this.onChange(this.look,this.outfit)}sync(){for(let e of this.el.querySelectorAll("[data-k]")){let t=e.dataset.k,n;t==="outfit"?n=e.dataset.v===this.outfit:t==="blush"?n=!!this.look.blush:t==="height"?n=Number(e.dataset.v)===Number(this.look.height):n=String(this.look[t])===e.dataset.v,e.setAttribute("aria-pressed",n)}}set(e,t){this.look={..._n,...e},t&&(this.outfit=t),this.avatar.setOutfit(this.outfit),this.avatar.setLook(this.look),this.sync()}initPreview(){let e=this.el.querySelector("canvas"),t=this.renderer=new va({canvas:e,antialias:!0,alpha:!0});t.setPixelRatio(Math.min(devicePixelRatio,2)),t.outputColorSpace=Rt,t.toneMapping=ua;let n=new qr;n.add(new Jr("#ffffff","#b8b29d",1.4));let r=new Kr("#fff4e6",1.6);r.position.set(2,3,4),n.add(r);let s=new z(new Yt(.7,40),new Be({color:"#e7e1d3"}));s.rotation.x=-Math.PI/2,n.add(s),this.avatar=new ci({outfit:this.outfit,look:this.look}),n.add(this.avatar.root);let a=new nn(30,1,.1,20),o=.35,c=null;e.addEventListener("pointerdown",u=>{c=u.clientX,e.setPointerCapture(u.pointerId)}),e.addEventListener("pointermove",u=>{c!=null&&(o+=(u.clientX-c)*.012,c=u.clientX)}),e.addEventListener("pointerup",()=>{c=null});let l=performance.now(),h=u=>{if(this.disposed||(requestAnimationFrame(h),!e.offsetParent))return;let d=e.clientWidth,p=e.clientHeight;(e.width!==Math.round(d*t.getPixelRatio())||e.height!==Math.round(p*t.getPixelRatio()))&&(t.setSize(d,p,!1),a.aspect=d/p,a.updateProjectionMatrix());let f=Math.min(.05,(u-l)/1e3);l=u,c==null&&(o+=f*.25);let v=this.avatar.height;a.position.set(Math.sin(o)*3.1,1.15*v,Math.cos(o)*3.1),a.lookAt(0,.82*v,0),this.avatar.update(f,!1),t.render(n,a)};requestAnimationFrame(h)}dispose(){this.disposed=!0,this.renderer?.dispose(),this.renderer?.forceContextLoss?.()}};var Pr=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function rr(i=[]){return i.map(e=>{if(typeof e=="string")return{type:"image",src:e,caption:"",year:""};let t=e.type||(/youtu\.?be/.test(e.src)?"youtube":/\.(mp4|webm|mov)(\?|$)/i.test(e.src)?"video":"image");return{caption:"",year:"",...e,type:t}}).filter(e=>e.src)}function jv(i){let e=String(i).match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);return e?e[1]:null}var rh=class{constructor(e,{onOpen:t,onClose:n}={}){this.el=e,this.onOpen=t,this.onClose=n,this.items=[],this.i=0,this.playing=!0,this.timer=null,e.innerHTML=`
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
      </div>`,this.layers=[e.querySelector(".th-a"),e.querySelector(".th-b")],this.front=0,e.addEventListener("click",r=>{let s=r.target.closest("[data-th],[data-idx]");if(!s)return;if(s.dataset.idx)return this.go(+s.dataset.idx);let a=s.dataset.th;a==="prev"&&this.go(this.i-1),a==="next"&&this.go(this.i+1),a==="play"&&this.toggle(),a==="close"&&this.close()}),addEventListener("keydown",r=>{this.el.hidden||(r.key==="Escape"&&this.close(),r.key==="ArrowRight"&&this.go(this.i+1),r.key==="ArrowLeft"&&this.go(this.i-1),r.key===" "&&(r.preventDefault(),this.toggle()))})}open(e,{title:t="",sub:n="",greeting:r="",portrait:s="",start:a=null}={}){this.items=[{type:"title",title:t,sub:n,portrait:s},...rr(e),{type:"end",title:"\uAE30\uC5B5\uD558\uACA0\uC2B5\uB2C8\uB2E4",sub:r}],this.el.querySelector(".th-thumbs").innerHTML=this.items.map((o,c)=>o.type==="image"?`<button type="button" data-idx="${c}" style="background-image:url('${o.src.replace(/'/g,"%27")}')" aria-label="\uC0AC\uC9C4 ${c}"></button>`:o.type==="video"||o.type==="youtube"?`<button type="button" data-idx="${c}" class="vid" aria-label="\uC601\uC0C1 ${c}">\u25B6</button>`:"").join(""),this.el.hidden=!1,this.playing=!0,this.el.querySelector('[data-th="play"]').textContent="\u23F8",this.onOpen?.(),this.go(a==null?0:a+1,!0)}close(){clearTimeout(this.timer),this.layers.forEach(e=>{e.innerHTML=""}),this.el.hidden=!0,this.onClose?.()}toggle(){this.playing=!this.playing,this.el.querySelector('[data-th="play"]').textContent=this.playing?"\u23F8":"\u25B6";let e=this.layers[this.front].querySelector("video");e&&(this.playing?e.play():e.pause()),this.playing?this.schedule():clearTimeout(this.timer)}schedule(e){clearTimeout(this.timer);let t=this.items[this.i];!this.playing||!t||t.type==="video"||t.type==="youtube"||t.type!=="end"&&(this.timer=setTimeout(()=>this.go(this.i+1),e??(t.type==="title"?5e3:6500)))}go(e,t=!1){let n=this.items.length;this.i=(e%n+n)%n;let r=this.items[this.i],s=this.layers[1-this.front],a=this.layers[this.front];s.innerHTML=this.render(r),s.classList.add("show"),a.classList.remove("show");let o=a;setTimeout(()=>{o.classList.contains("show")||(o.innerHTML="")},1400),this.front=1-this.front;let c=this.el.querySelector(".th-caption");c.textContent=r.type==="image"||r.type==="video"||r.type==="youtube"?[r.year,r.caption].filter(Boolean).join(" \xB7 "):"";let l=n-2;this.el.querySelector(".th-count").textContent=l>0&&this.i>0&&this.i<n-1?`${this.i} / ${l}`:"",this.el.querySelectorAll("[data-idx]").forEach(u=>u.classList.toggle("on",+u.dataset.idx===this.i));let h=s.querySelector("video");h&&(h.onended=()=>this.go(this.i+1),this.playing&&h.play().catch(()=>{})),this.schedule(t?5e3:void 0)}render(e){if(e.type==="title")return`<div class="th-card">${e.portrait?`<img class="th-portrait" src="${e.portrait}" alt="">`:""}<h2>${Pr(e.title)}</h2><p>${Pr(e.sub)}</p><small>\uCD94\uC5B5 \uC0C1\uC601\uAD00 \xB7 \uC0AC\uC9C4\uC744 \uD55C \uC7A5\uC529 \uCC9C\uCC9C\uD788 \uB118\uACA8 \uB4DC\uB824\uC694</small></div>`;if(e.type==="end")return`<div class="th-card end"><h2>${Pr(e.title)}</h2><p>${Pr(e.sub||"")}</p></div>`;if(e.type==="video")return`<video src="${Pr(e.src)}" playsinline controls></video>`;if(e.type==="youtube"){let n=jv(e.src);return n?`<iframe src="https://www.youtube-nocookie.com/embed/${n}?autoplay=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="\uCD94\uC5B5 \uC601\uC0C1"></iframe>`:'<p class="th-empty">\uC601\uC0C1 \uC8FC\uC18C\uB97C \uD655\uC778\uD574 \uC8FC\uC138\uC694</p>'}return`<img class="th-photo ${["kb1","kb2","kb3","kb4"][Math.floor(Math.random()*4)]}" src="${Pr(e.src)}" alt="${Pr(e.caption||"\uCD94\uC5B5 \uC0AC\uC9C4")}"><img class="th-blur" src="${Pr(e.src)}" alt="">`}};var P=(i,e=document)=>e.querySelector(i),dt=(i,e=document)=>[...e.querySelectorAll(i)],hi=i=>new Promise(e=>setTimeout(e,i)),Me=(i="")=>String(i).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Sa=i=>`${Number(i||0).toLocaleString("ko-KR")}\uC6D0`,T0=(i,e)=>e.split(".").reduce((t,n)=>t==null?t:t[n],i),w0=(i,e,t)=>{let n=e.split("."),r=n.pop();n.reduce((s,a)=>s[a]??={},i)[r]=t},wa=i=>{let e=new Date(i);return`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C ${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`},Xv=matchMedia("(prefers-reduced-motion: reduce)").matches,$v=i=>i[Math.floor(Math.random()*i.length)],a0;function gt(i,e=2800){let t=P("#toast");t.textContent=i;let n=[...document.querySelectorAll("dialog[open]")].pop();if(t.showPopover){try{t.hidePopover()}catch{}try{t.showPopover()}catch{}}else n&&t.parentElement!==n?n.append(t):!n&&t.parentElement!==document.body&&document.body.append(t);t.classList.add("show"),clearTimeout(a0),a0=setTimeout(()=>t.classList.remove("show"),e)}var o0;function Tt(i,e=4400){let t=P("#caption");t.textContent=i,t.classList.add("show"),clearTimeout(o0),o0=setTimeout(()=>t.classList.remove("show"),e)}async function fs(i){try{return await navigator.clipboard.writeText(i),!0}catch{let e=document.createElement("textarea");e.value=i,e.setAttribute("readonly",""),e.style.cssText="position:fixed;top:0;left:0;opacity:0;",([...document.querySelectorAll("dialog[open]")].pop()||document.body).append(e),e.select(),e.setSelectionRange(0,i.length);let t=document.execCommand("copy");return e.remove(),t}}function ph(i,e,t="application/json"){let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([e],{type:t})),n.download=i,n.click(),setTimeout(()=>URL.revokeObjectURL(n.href),2e3)}var kd=new URLSearchParams(location.search),Ni=(kd.get("m")||Ri.defaultMemorial).toLowerCase().replace(/[^a-z0-9-]/g,"").slice(0,40)||Ri.defaultMemorial,De=new Yc(Ri,Ni),tt=new nh,A0="samga:me",l0=(()=>{try{return JSON.parse(localStorage.getItem(A0))||{}}catch{return{}}})(),_={role:"guest",entered:!1,busy:!1,memorial:null,counters:{},guestbook:[],lanterns:[],wreaths:[],done:new Set,ticket:!1,incenseAt:null,inHall:!1,me:{id:"",name:"",relation:"",religion:"traditional",outfit:"suit",...l0,look:{..._n,...l0.look||{}}},time:(()=>{let i=new Date().getHours();return i>=6&&i<16?"day":i>=16&&i<19?"dusk":"night"})(),act:"",actSeq:0,say:"",sayS:0,ix:null,meals:0,view:localStorage.getItem("samga:view")||"first",auto:!1};_.me.id||(_.me.id=`g${Date.now().toString(36)}${Math.random().toString(36).slice(2,7)}`);var Wd=()=>{try{localStorage.setItem(A0,JSON.stringify(_.me))}catch{}},Bi=new va({antialias:!0,powerPreference:"high-performance"});Bi.setPixelRatio(Math.min(devicePixelRatio,2));Bi.shadowMap.enabled=!0;Bi.shadowMap.type=bc;Bi.toneMapping=ua;Bi.outputColorSpace=Rt;P("#stage").append(Bi.domElement);var bn=new nn(50,innerWidth/innerHeight,.1,600);await Promise.race([Promise.all([document.fonts?.load?.('700 40px "Gowun Batang"'),document.fonts?.load?.('700 40px "Noto Serif KR"',"\u8CFB\u5100")]),hi(1800)]).catch(()=>{});await Rm();var le=Km(Bi),or=le.scene;le.setTime(_.time);var q={avatar:new ci({outfit:_.me.outfit,look:_.me.look}),pos:new S(0,0,21),face:Math.PI,target:null,resolve:null,speed:3.6,stuck:0};q.avatar.root.visible=!1;or.add(q.avatar.root);var ve={fpPitch:.1,yaw:0,pitch:.36,dist:7.6,tYaw:0,tPitch:.36,tDist:7.6,focus:null,focusK:0,look:new S};function R0(){Bi.setSize(innerWidth,innerHeight),bn.aspect=innerWidth/innerHeight,bn.fov=innerWidth<innerHeight?62:50,bn.updateProjectionMatrix()}addEventListener("resize",R0);R0();var C0=P("#labels"),Bd=new Set,ys=new S;function xs(i,e){C0.append(i);let t={el:i,getPos:e};return Bd.add(t),{el:i,remove(){i.remove(),Bd.delete(t)}}}function tl(i,e="",t="\uB098",n=""){let r=document.createElement("div");return r.className=`tag ${e}`,r.innerHTML=`<b>${Me(t)}</b>${Me(i)}${n?`<i>${Me(n)}</i>`:""}`,r}var qv=(i,e=1)=>()=>i.visible===!1?null:ys.copy(i.position).add(new S(0,1.62*e,0));function ms(i,e,t=3800,n=!1,r=1){let s=document.createElement("div");s.className=`bubble${n?" emote":""}`,s.textContent=e;let a=xs(s,()=>ys.copy(i.position).add(new S(0,2.05*r,0)));setTimeout(()=>a.remove(),t)}function Yv(){let i=innerWidth,e=innerHeight;for(let t of Bd){let n=t.getPos();if(!n){t.el.style.display="none";continue}let r=ys.copy(n).project(bn);if(r.z>1||r.z<-1){t.el.style.display="none";continue}t.el.style.display="",t.el.style.transform=`translate(${(r.x*.5+.5)*i}px, ${(-r.y*.5+.5)*e}px) translate(-50%, -100%)`}}var Fd,Zv=xs(tl("\uC0C1\uC8FC","host","\uC0C1\uC8FC"),()=>le.hostNpc.root.visible?ys.copy(le.hostNpc.root.position).add(new S(0,1.62*le.hostNpc.height,0)):null),Ta=[];function Jv(i,e){let t=qc.find(l=>l.id===i.relation)||{g:"m"},n=["#f2c7a5","#efc19e","#f6d2b5","#e8b996"],r={..._n,skin:n[e%n.length],eyes:e%3?"dot":"sad",brows:"sad",mouth:"calm",blush:!1};t.g==="f"?Object.assign(r,{hair:e%2?"bun":"bob",hairColor:"#231d1a"}):Object.assign(r,{hair:e%2?"part":"short",hairColor:"#231d1a",glasses:e%3===1?"square":"none"});let s=Number(_.memorial.deceased?.age)||0,a=["\uC7A5\uB0A8","\uCC28\uB0A8","\uC0BC\uB0A8","\uC544\uB4E4","\uC7A5\uB140","\uCC28\uB140","\uC0BC\uB140","\uB538","\uBA70\uB290\uB9AC","\uC0AC\uC704"].includes(i.relation),o=0;t.age==="senior"&&(o=s>=70?2:s>=55?1:0),a&&(o=s>=85?1:0);let c=t.age==="young";return t.age==="young"&&s>=85&&(c=!1),a&&s&&s<45&&(c=!0),o===2&&Object.assign(r,{hairColor:"#d9d5cc",hair:t.g==="f"?"perm":"part",glasses:"round"}),o===1&&Object.assign(r,{hairColor:"#8f8b85"}),c?Object.assign(r,{height:.86,eyes:"round",glasses:"none"}):r.height=t.g==="m"?1.05:.98,{outfit:t.g==="f"?"hostHanbok":"hostSuit",look:r}}function c0(i,e){let n=Math.floor(i/5),r=i%5,s=Math.min(5,e-n*5);return{x:le.HOST_SPOT.x+n*.9,z:le.HOST_SPOT.z+(r-(s-1)/2)*.95}}function Kv(){let i=Ca(_.memorial),e=Math.max(1,i.length),t=c0(0,e);for(le.hostNpc.root.position.x=t.x,le.hostNpc.root.position.z=t.z;Ta.length>e-1;){let n=Ta.pop();le.scene.remove(n.av.root),n.tag.remove()}for(let n=1;n<e;n++){let r=i[n],{outfit:s,look:a}=Jv(r,n),o=Ta[n-1];if(!o){let h=new ci({outfit:s,look:a});h.interactTag="host",h.rebuild(),h.root.rotation.y=le.HOST_SPOT.face,le.scene.add(h.root);let u=tl("","host","");o={av:h,key:"",tag:xs(u,()=>h.root.visible?ys.copy(h.root.position).add(new S(0,1.62*h.height,0)):null)},Ta.push(o)}let c=JSON.stringify([r.relation,r.name,_.memorial.deceased?.age||""]);o.key!==c&&(o.key=c,o.av.setOutfit(s),o.av.setLook(a),o.tag.el.innerHTML=`<b>${Me(r.relation||"\uC0C1\uC8FC")}</b>${Me(r.name||"")}`);let l=c0(n,e);o.av.root.position.set(l.x,Ge,l.z)}}var P0=()=>[le.hostNpc,...Ta.map(i=>i.av)];xs(tl("\uC548\uB0B4 \uB3C4\uC6B0\uBBF8","helper","\uC548\uB0B4"),qv(le.helper.root));function Aa(){return _.memorial.portrait||Jm(_.memorial.deceased.name)}function I0(){return rr(_.memorial.gallery||[])}function jd(){let i=_.memorial.deceased||{};return[i.birth,i.death].filter(Boolean).join(" \u2013 ")+(i.age?` \xB7 \uD5A5\uB144 ${i.age}\uC138`:"")}function ti({theme:i=!0}={}){let e=_.memorial,t=e.deceased?.name||"\uACE0\uC778";dt('[data-bind="name"]').forEach(r=>{r.textContent=`\u6545 ${t}`}),dt('[data-bind="dates"]').forEach(r=>{r.textContent=jd()}),dt('[data-bind="mourners"]').forEach(r=>{r.innerHTML=wy(e)}),dt('[data-bind="departure"]').forEach(r=>{r.textContent=e.funeral?.departure||"-"}),dt('[data-bind="burial"]').forEach(r=>{r.textContent=e.funeral?.burial||"-"}),dt('[data-bind="greeting"]').forEach(r=>{r.textContent=e.greeting||""}),dt('[data-bind="portrait"]').forEach(r=>{r.src=Aa()}),P("#theme-note").textContent=`${Rr[e.theme]?.icon||""} ${Rr[e.theme]?.label||""} \uBE48\uC18C`,document.title=`\u6545 ${t} \xB7 \uC0BC\uAC00`,i&&le.theme?.name!==e.theme&&(le.setTheme(Rr[e.theme]?e.theme:"hospital",t),le.setShoes($d())),le.setDeceasedName(t),le.setPortrait(Aa()),le.setGallery(I0().filter(r=>r.type==="image").map(r=>r.src)),le.setReligion(e.religion||"traditional"),le.setTablet(t),le.hostNpc.setOutfit(Cr[e.hostOutfit]?e.hostOutfit:"hostSuit"),le.hostNpc.setLook(e.hostLook||_n);let n=Ca(e)[0];Zv.el.innerHTML=`<b>${Me(n?.relation||"\uC0C1\uC8FC")}</b>${Me(n?.name||e.hostName||"\uC0C1\uC8FC")}`,Kv(),_.role==="host"&&(q.avatar.setOutfit(Cr[e.hostOutfit]?e.hostOutfit:"hostSuit"),q.avatar.setLook(e.hostLook||_n)),lr()}var Od=null;function Ld(i){dt("#entry [data-step]").forEach(e=>{e.hidden=e.dataset.step!==String(i)}),dt("#entry .steps i").forEach((e,t)=>e.classList.toggle("on",t+1<=i)),i===3&&(i=2),P("#entry .entry-card").scrollTop=0,i===3&&!Od&&(Od=new Ea(P("#entry-look"),{look:_.me.look,outfit:_.me.outfit,who:"guest",onChange:(e,t)=>{_.me.look=e,_.me.outfit=t}}))}function Qv(){let i=P("#rite-choices");i.innerHTML=Object.entries(Ci).map(([t,n])=>`
    <button type="button" class="card-choice" data-rite="${t}" aria-pressed="${_.me.religion===t}">
      <span class="ic">${n.icon}</span><strong>${n.label}</strong><small>${n.desc}</small>
    </button>`).join(""),i.onclick=t=>{let n=t.target.closest("[data-rite]");n&&(_.me.religion=n.dataset.rite,dt("[data-rite]",i).forEach(r=>r.setAttribute("aria-pressed",r===n)))},D0(P("#entry-hosts"),_.me.hostOf,t=>{_.me.hostOf=t,$o()}),$o();let e=P("#entry-rel-other");N0(P("#entry-relations"),_.me.rel,t=>{e.hidden=t!=="\uAE30\uD0C0",t==="\uAE30\uD0C0"?(e.value="",e.focus(),_.me.rel="\uAE30\uD0C0"):_.me.rel=t,$o()}),e.oninput=()=>{_.me.rel=e.value.trim().slice(0,16)||"\uAE30\uD0C0",$o()},P("#in-name").value=_.me.name||"",P("#to-step2").onclick=()=>Ld(2),P("#to-step3").onclick=()=>{let t=P("#in-name").value.trim();if(!t){P("#in-name").focus(),gt("\uC774\uB984\uC744 \uC801\uC5B4 \uC8FC\uC138\uC694. \uC774\uB984\uD45C\uC640 \uBC29\uBA85\uB85D\uC5D0 \uC4F0\uC5EC\uC694.");return}_.me.name=t,lh("guest")},dt("#entry [data-back]").forEach(t=>{t.onclick=()=>Ld(+t.dataset.back)}),P("#btn-enter").onclick=()=>lh("guest"),P("#in-name").addEventListener("keydown",t=>{t.key==="Enter"&&P("#to-step3").click()}),P("#btn-host-entry").onclick=()=>U0(),P("#btn-theater-entry").onclick=()=>vs(),Ld(1)}function ey(){return Ca(_.memorial).map(ep).filter(Boolean)}var L0=i=>String(i||"").replace(/\(.*?\)/g,"").trim();function $o(){_.me.relation=_.me.rel||"";let i=P("#entry-relations-box");i&&(i.hidden=!_.me.hostOf,P("#rel-q").textContent=_.me.hostOf?`${L0(_.me.hostOf)} \uB2D8\uACFC \uC5B4\uB5A4 \uC0AC\uC774\uC138\uC694?`:"")}function D0(i,e,t){let n=ey();i.innerHTML=n.map(r=>`<button type="button" class="chip host-chip" data-host="${Me(r)}" aria-pressed="${r===e}">${Me(r)}</button>`).join(""),i.onclick=r=>{let s=r.target.closest("[data-host]");if(!s)return;let a=s.getAttribute("aria-pressed")!=="true";dt("[data-host]",i).forEach(o=>o.setAttribute("aria-pressed",a&&o===s)),t(a?s.dataset.host:"")}}function N0(i,e,t){i.innerHTML=bm.map(n=>`<button type="button" class="chip" data-rel="${n}" aria-pressed="${n===e}">${n}</button>`).join(""),i.onclick=n=>{let r=n.target.closest("[data-rel]");if(!r)return;let s=r.getAttribute("aria-pressed")!=="true";dt("[data-rel]",i).forEach(a=>a.setAttribute("aria-pressed",s&&a===r)),t(s?r.dataset.rel:"")}}function U0(){P("#pin-tip").textContent=Ri.hostPin==="0000"?"\uCC98\uC74C PIN\uC740 0000 \uC774\uC5D0\uC694. js/config.js \uC5D0\uC11C \uBC14\uAFD4 \uC8FC\uC138\uC694.":"";let i=P("#dlg-pin");dn(i),i.onclose=()=>{if(i.returnValue!=="ok")return;let e=new FormData(P("#form-pin")).get("pin");if(P("#form-pin").reset(),String(e)!==String(Ri.hostPin)){gt("PIN\uC774 \uB9DE\uC9C0 \uC54A\uC544\uC694.");return}lh("host")}}async function lh(i){if(_.role=i,i==="host"&&await De.claimHostReader(De.getLocal("hostKey",""))){let[r,s]=await Promise.all([De.list("guestbook"),De.list("condolences")]);_.guestbook=r,_.allMoney=s,le.setMemories(yh())}document.body.classList.toggle("is-host",i==="host"),i==="guest"&&Wd(),Od?.dispose(),tt.ensure(),bh(),P("#entry").hidden=!0,P("#hud").hidden=!1,P("#bar").hidden=!1;let e=_.memorial;i==="host"?(le.hostNpc.root.visible=!1,q.pos.set(le.HOST_SPOT.x,Ge,le.HOST_SPOT.z),q.face=le.HOST_SPOT.face,ve.tYaw=ve.yaw=-Math.PI/2+.35,ve.tDist=6.5,ti({theme:!1})):(le.hostNpc.root.visible=!0,q.avatar.setOutfit(_.me.outfit),q.avatar.setLook(_.me.look),q.pos.set(0,0,21),q.face=Math.PI,ve.tYaw=ve.yaw=0),q.avatar.root.visible=!0;let t=i==="host"?e.hostName||"\uC0C1\uC8FC":_.me.name;if(Fd=xs(tl(t,i==="host"?"host":"",i==="host"?"\uC0C1\uC8FC":"\uB098",i==="host"?"":_.me.relation),()=>q.avatar.root.visible?ys.copy(q.pos).add(new S(0,1.62*q.avatar.height,0)):null),Jo(_.view),by(),i==="guest"&&!localStorage.getItem("samga:onboarded")&&setTimeout(z0,600),history.pushState({samga:1},""),setTimeout(vh,1800),_.entered=!0,_.done=new Set(De.getLocal(`done:${_.me.religion}`,[])),_.ticket=!!De.getLocal("ticket",!1),qd(),G0(),i==="guest"){let n=new Date().toDateString();De.getLocal("visited","")!==n&&(De.setLocal("visited",n),De.bump("visits"),_.counters.visits=(_.counters.visits||0)+1),P("#guide").hidden=innerWidth<720,Tt(`${_.me.name} \uB2D8, \uC5B4\uC11C \uC624\uC138\uC694.
\uB3CC\uAE38\uC744 \uB530\uB77C \uBE48\uC18C\uB85C \uCC9C\uCC9C\uD788 \uAC78\uC5B4\uAC00 \uBCF4\uC138\uC694.`,5200),setTimeout(()=>{_.helperGreeted||(_.helperGreeted=!0,le.helper.play("nod",null,{soft:!0}),ms(le.helper.root,"\uC5B4\uC11C \uC624\uC2ED\uC2DC\uC624. \uC870\uBB38 \uC608\uC808\uC740 \uC81C\uAC8C \uBB3C\uC5B4\uBCF4\uC2ED\uC2DC\uC624.",4200))},1800)}else Tt(`\uC0C1\uC8FC \uC790\uB9AC\uC5D0 \uC130\uC2B5\uB2C8\uB2E4.
\uC870\uBB38\uAC1D\uC744 \uB9DE\uC73C\uBA70 '\uB2F5\uB840 \uC778\uC0AC'\uB85C \uACE0\uB9C8\uC6C0\uC744 \uC804\uD560 \uC218 \uC788\uC5B4\uC694.`,5200),setTimeout(()=>rp(),900);lr(),Vd()}var zt={cell:.4,min:-40,n:200,grid:null,key:""},qo=.3,Xd=()=>_.role==="host";function ty(){let i=le.theme?.name+":"+_.role;if(zt.grid&&zt.key===i)return zt.grid;let e=new Uint8Array(zt.n*zt.n);for(let t=0;t<zt.n;t++)for(let n=0;n<zt.n;n++)e[n*zt.n+t]=le.blocked(zt.min+(t+.5)*zt.cell,zt.min+(n+.5)*zt.cell,qo,Xd())?1:0;return zt.grid=e,zt.key=i,e}var sh=i=>Math.max(0,Math.min(zt.n-1,Math.floor((i-zt.min)/zt.cell))),h0=i=>zt.min+(i+.5)*zt.cell;function u0(i,e,t){if(!i[t*zt.n+e])return[e,t];for(let n=1;n<12;n++)for(let r=-n;r<=n;r++)for(let s=-n;s<=n;s++){if(Math.max(Math.abs(r),Math.abs(s))!==n)continue;let a=e+r,o=t+s;if(a>=0&&o>=0&&a<zt.n&&o<zt.n&&!i[o*zt.n+a])return[a,o]}return[e,t]}function d0(i,e){let t=Math.hypot(e.x-i.x,e.z-i.z),n=Math.ceil(t/.15);for(let r=1;r<n;r++){let s=r/n;if(le.blocked(i.x+(e.x-i.x)*s,i.z+(e.z-i.z)*s,qo,Xd()))return!1}return!0}function ny(i){let e={x:q.pos.x,z:q.pos.z};if(d0(e,i))return[i];let t=ty(),[n,r]=u0(t,sh(e.x),sh(e.z)),[s,a]=u0(t,sh(i.x),sh(i.z)),o=zt.n,c=r*o+n,l=a*o+s,h=new Int32Array(o*o).fill(-1),u=new Float32Array(o*o).fill(1/0),d=new Uint8Array(o*o),p=[],f=(D,F)=>{p.push([D,F]);let L=p.length-1;for(;L;){let V=L-1>>1;if(p[V][0]<=p[L][0])break;[p[V],p[L]]=[p[L],p[V]],L=V}},v=()=>{let D=p[0],F=p.pop();if(p.length){p[0]=F;let L=0;for(;;){let V=2*L+1,H=V+1,U=L;if(V<p.length&&p[V][0]<p[U][0]&&(U=V),H<p.length&&p[H][0]<p[U][0]&&(U=H),U===L)break;[p[U],p[L]]=[p[L],p[U]],L=U}}return D};u[c]=0,f(0,c);let m=D=>Math.hypot(D%o-s,Math.floor(D/o)-a),x=!1;for(;p.length;){let[,D]=v();if(d[D])continue;if(d[D]=1,D===l){x=!0;break}let F=D%o,L=Math.floor(D/o);for(let V=-1;V<=1;V++)for(let H=-1;H<=1;H++){if(!V&&!H)continue;let U=F+V,Z=L+H;if(U<0||Z<0||U>=o||Z>=o)continue;let N=Z*o+U;if(t[N]||d[N]||V&&H&&(t[L*o+U]||t[Z*o+F]))continue;let X=u[D]+(V&&H?1.414:1);X<u[N]&&(u[N]=X,h[N]=D,f(X+m(N),N))}}if(!x)return[i];let g=[];for(let D=l;D!==-1&&D!==c;D=h[D])g.push(D);g.reverse();let y=g.map(D=>({x:h0(D%o),z:h0(Math.floor(D/o))}));y.push(i);let E=[],A=e,M=0;for(;M<y.length;){let D=M;for(let F=y.length-1;F>M;F--)if(d0(A,y[F])){D=F;break}E.push(y[D]),A=y[D],M=D+1}return E}function Jt(i){return q.avatar.cancelSoft(),q.resolve&&q.resolve(!1),q.avatar.hold==="sit"&&(q.avatar.hold=null),new Promise(e=>{q.route=ny(i),q.lastRoute=[...q.route],q.target=q.route.shift(),q.resolve=e,q.stuck=0,q.best=1/0})}function k0(){q.resolve&&q.resolve(!1),q.route=null,q.target=null,q.resolve=null}var ei={};function iy(){let i=(ei.KeyW||ei.ArrowUp?1:0)-(ei.KeyS||ei.ArrowDown?1:0),e=(ei.KeyD||ei.ArrowRight?1:0)-(ei.KeyA||ei.ArrowLeft?1:0);if(!i&&!e)return null;let t=-Math.sin(ve.yaw),n=-Math.cos(ve.yaw),r=Math.cos(ve.yaw),s=-Math.sin(ve.yaw);return new pe(t*i+r*e,n*i+s*e).normalize()}var ch=(i,e,t)=>{let n=(e-i+Math.PI)%(Math.PI*2)-Math.PI;return n<-Math.PI&&(n+=Math.PI*2),i+n*t};function ry(i){let e=q.avatar,t=null,n=!1;if(!e.busy&&_.entered){let a=iy();if(a)q.target&&k0(),e.cancelSoft(),t=a,e.hold==="sit"&&(e.hold=null);else if(q.target){let o=q.target.x-q.pos.x,c=q.target.z-q.pos.z,l=Math.hypot(o,c);if(l<q.best-.05?(q.best=l,q.stuck=0):q.stuck+=i,l<.07&&q.route?.length)q.target=q.route.shift(),q.best=1/0;else if(l<.07){q.pos.x=q.target.x,q.pos.z=q.target.z;let h=q.resolve,u=q.target.face;q.target=null,q.resolve=null,u!=null&&(q.wantFace=u),h?.(!0)}else t=new pe(o/l,c/l)}}if(t){let a=q.target&&Math.hypot(q.target.x-q.pos.x,q.target.z-q.pos.z)>5,o=Math.min(q.speed*(a?1.9:1)*i,q.target?Math.hypot(q.target.x-q.pos.x,q.target.z-q.pos.z):1),c=q.pos.x+t.x*o,l=q.pos.z+t.y*o,h=Xd();q.target&&q.stuck>.8||!le.blocked(c,l,qo,h)?(q.pos.x=c,q.pos.z=l,n=!0):le.blocked(c,q.pos.z,qo,h)?le.blocked(q.pos.x,l,qo,h)||(q.pos.z=l,n=!0):(q.pos.x=c,n=!0),q.face=ch(q.face,Math.atan2(t.x,t.y),Math.min(1,i*12)),q.wantFace=null}else q.wantFace!=null&&(q.face=ch(q.face,q.wantFace,Math.min(1,i*8)));let r=le.heightAt(q.pos.x,q.pos.z);q.pos.y+=(r-q.pos.y)*Math.min(1,i*14),e.root.position.copy(q.pos),e.root.rotation.y=q.face,e.update(i,n);let s=le.inHall(q.pos.x,q.pos.z)&&q.pos.z<.6;if(s!==_.inHall){_.inHall=s;let a=le.theme?.shoes;e.setBarefoot(s&&a),a&&s&&!_.shoeTold&&(_.shoeTold=!0,Tt("\uC2E0\uBC1C\uC744 \uBC97\uACE0 \uBE48\uC18C \uB9C8\uB8E8\uC5D0 \uC62C\uB77C\uC12D\uB2C8\uB2E4.",3e3)),le.setShoes($d())}}function $d(){let i=3;_.inHall&&_.role==="guest"&&i++;for(let e of _.others?.values()||[])e.inHall&&i++;return i}function sy(i){ve.yaw+=(ve.tYaw-ve.yaw)*Math.min(1,i*8),ve.pitch+=(ve.tPitch-ve.pitch)*Math.min(1,i*8),ve.dist+=(ve.tDist-ve.dist)*Math.min(1,i*6);let e,t;if(_.entered)if(Zo()){let o=q.avatar.height,c=new S(q.pos.x,q.pos.y+1.42*o,q.pos.z),l=q.face+Math.PI;t=c.clone().add(new S(Math.sin(l)*.45,.05,Math.cos(l)*.45)),e=c.clone().add(new S(-Math.sin(l)*Math.cos(ve.fpPitch),-Math.sin(ve.fpPitch),-Math.cos(l)*Math.cos(ve.fpPitch))),ve.yaw=ve.tYaw=l}else{e=new S(q.pos.x,q.pos.y+1.1,q.pos.z),_.view==="first"&&(ve.yaw=ve.tYaw=q.face+Math.PI/2+.25,ve.pitch=ve.tPitch=.5,ve.dist=ve.tDist=3.4);let o=Math.cos(ve.pitch);t=new S(e.x+Math.sin(ve.yaw)*o*ve.dist,e.y+Math.sin(ve.pitch)*ve.dist,e.z+Math.cos(ve.yaw)*o*ve.dist),le.inHall(q.pos.x,q.pos.z)&&(t.x=rs.clamp(t.x,-9.6,9.6),t.z=Math.max(t.z,-11.5),t.y=Math.min(t.y,(le.theme?.ceiling??Ge+4.8)-.3)),t.y=Math.max(t.y,le.heightAt(t.x,t.z)+.4)}else{let o=performance.now()/1e3;e=new S(0,2.2,-4);let c=o*.05;t=new S(Math.sin(c)*15,5.5,-4+Math.cos(c)*15+6)}let n=ve.focus?1:0;if(ve.focusK+=(n-ve.focusK)*Math.min(1,i*3),ve.focusK>.001&&(ve.focus||ve.lastFocus)){let o=ve.focus||ve.lastFocus;t.lerp(o.pos,ve.focusK),e.lerp(o.look,ve.focusK)}let r=Zo();r!==ve.wasFp&&(ve.blend=0,ve.wasFp=r),ve.blend=Math.min(1,(ve.blend??1)+i*2.2);let s=_.entered?ve.blend<1?Math.min(1,i*5):1:Math.min(1,i*2);bn.position.lerp(t,s),ve.look.lerp(e,s),q.avatar.root.visible=_.entered&&!(r&&ve.blend>.6);let a=((innerWidth<innerHeight?62:50)+(r?10:0))*(r?ve.zoom:1);Math.abs(bn.fov-a)>.1&&(bn.fov+=(a-bn.fov)*Math.min(1,i*4),bn.updateProjectionMatrix()),bn.lookAt(ve.look)}function fh(){ve.focus=null}function Zo(){return _.entered&&_.view==="first"&&!q.avatar.busy&&q.avatar.hold!=="sit"&&!ve.focus}function Jo(i){_.view=i,localStorage.setItem("samga:view",i),P("#btn-view").textContent=i==="first"?"\u{1F441} 1\uC778\uCE6D":"\u{1F3A5} 3\uC778\uCE6D",i==="third"&&(ve.tYaw=ve.yaw=q.face+Math.PI,ve.tPitch=.36,ve.tDist=7)}var hh=new Ao;hh.camera=bn;var p0=new pe;function B0(i,e){p0.set(i/innerWidth*2-1,-(e/innerHeight)*2+1),hh.setFromCamera(p0,bn);let t=hh.intersectObjects(or.children,!0);for(let n of t)if(n.object.userData.avatar!==q.avatar&&!(!n.object.visible||n.object.isSprite&&!n.object.userData.interact))return n.object.userData.interact?{interact:n.object.userData.interact,point:n.point}:le.isWalkable(n.object)?{walk:n.point}:{walk:oy(n.point)};return null}var ay=new Yn(new S(0,1,0),-Ge);function oy(i){let e=new S;return hh.ray.intersectPlane(ay,e)&&e.distanceTo(bn.position)<60?e:new S(i.x,0,i.z)}var Ui=new Map,ar=null,Hd=0,gs=Bi.domElement;gs.addEventListener("pointerdown",i=>{if(gs.setPointerCapture(i.pointerId),Ui.set(i.pointerId,{x:i.clientX,y:i.clientY}),Ui.size===1&&(ar={x:i.clientX,y:i.clientY,moved:0}),Ui.size===2){let[e,t]=[...Ui.values()];Hd=Math.hypot(e.x-t.x,e.y-t.y),ar=null}});gs.addEventListener("pointermove",i=>{let e=Ui.get(i.pointerId);if(!e){ly(i.clientX,i.clientY);return}let t=i.clientX-e.x,n=i.clientY-e.y;if(e.x=i.clientX,e.y=i.clientY,Ui.size===2){let[r,s]=[...Ui.values()],a=Math.hypot(r.x-s.x,r.y-s.y);uh(Hd/a),Hd=a;return}ar&&(ar.moved+=Math.abs(t)+Math.abs(n),ar.moved>6&&(ve.focus&&fh(),Zo()?(q.face-=t*.005,q.wantFace=null,ve.fpPitch=rs.clamp(ve.fpPitch+n*.003,-.5,.75)):(ve.tYaw-=t*.0055,ve.tPitch=rs.clamp(ve.tPitch+n*.004,.05,1.25))))});function F0(i){let e=ar&&ar.moved>6;Ui.delete(i.pointerId),i.type==="pointerup"&&ar&&!e&&Ui.size===0&&uy(i.clientX,i.clientY),Ui.size===0&&(ar=null)}gs.addEventListener("pointerup",F0);gs.addEventListener("pointercancel",F0);gs.addEventListener("wheel",i=>{i.preventDefault(),uh(1+Math.sign(i.deltaY)*.1)},{passive:!1});ve.zoom=1;function uh(i){_.view==="first"?(ve.zoom=rs.clamp(ve.zoom*i,.55,1.12),i>1&&ve.zoom>=1.12?(ve.overZoom=(ve.overZoom||0)+(i-1),ve.overZoom>.35&&(ve.overZoom=0,ve.zoom=1,Jo("third"),ve.tDist=3.2,gt("3\uC778\uCE6D\uC73C\uB85C \uBC14\uAFE8\uC5B4\uC694. \uC190\uAC00\uB77D\uC744 \uBC8C\uB824 \uAC00\uAE4C\uC774 \uB2F9\uAE30\uBA74 \uB2E4\uC2DC 1\uC778\uCE6D\uC774 \uB3FC\uC694.",2600))):ve.overZoom=0):(ve.tDist=rs.clamp(ve.tDist*i,2.4,16),i<1&&ve.tDist<=2.4?(ve.underZoom=(ve.underZoom||0)+(1-i),ve.underZoom>.35&&(ve.underZoom=0,ve.zoom=1,Jo("first"))):ve.underZoom=0)}var Ir=null,Dd=0;function ly(i,e){Dd||!_.entered||(Dd=requestAnimationFrame(()=>{Dd=0;let t=B0(i,e),n=t?.interact;gs.style.cursor=n?"pointer":t?.walk?"default":"grab";let r=n?cy(n):"";if(!r){Ir?.remove(),Ir=null;return}Ir||(Ir=document.createElement("div"),Ir.className="hover-label",document.body.append(Ir)),Ir.textContent=r,Ir.style.transform=`translate(${i}px, ${e-16}px) translate(-50%, -100%)`}))}function cy(i){if(i.startsWith("memory:")){let t=le.memories?.[+i.split(":")[1]];return t?t.anon?"\uC870\uBB38\uAC1D\uC774 \uB0A8\uAE34 \uB9C8\uC74C":`${t.name} \uB2D8\uC758 \uB9C8\uC74C`:""}if(i.startsWith("sky:"))return"\uD558\uB298\uC758 \uB4F1\uBD88";if(i.startsWith("wreath:")){let t=le.wreaths?.[+i.split(":")[1]];return t?`\uADFC\uC870\uD654\uD658 \xB7 ${t.from}`:""}if(i.startsWith("other:")){let t=_.others.get(i.slice(6));return t?`${t.name} \uB2D8\uAED8 \uC778\uC0AC`:""}let e=le.interactables.get(i);return e?e.verb:""}function hy(i,e){let t=document.createElement("div");t.className="ripple",t.style.left=`${i}px`,t.style.top=`${e}px`,C0.append(t),setTimeout(()=>t.remove(),750)}function uy(i,e){if(!_.entered)return;if(ve.focus){fh();return}let t=B0(i,e);if(t){if(t.interact){un(t.interact);return}t.walk&&!_.busy&&!q.avatar.busy&&(hy(i,e),Jt({x:t.walk.x,z:t.walk.z}))}}addEventListener("keydown",i=>{if(!_.entered||i.target.closest("input, textarea, select, dialog")||document.querySelector("dialog[open]")||!P("#theater").hidden)return;ei[i.code]=!0,i.code==="KeyQ"&&(Zo()?q.face+=.35:ve.tYaw+=.35),i.code==="KeyE"&&(Zo()?q.face-=.35:ve.tYaw-=.35),i.code==="KeyV"&&Jo(_.view==="first"?"third":"first"),(i.code==="Equal"||i.code==="NumpadAdd")&&uh(.85),(i.code==="Minus"||i.code==="NumpadSubtract")&&uh(1.18),i.code==="KeyG"&&V0(),i.code==="KeyT"&&(i.preventDefault(),Yd()),i.code==="Escape"&&fh(),(i.code==="Space"||i.code==="Enter")&&(i.preventDefault(),_.near&&un(_.near.id));let e=Number(i.key);e>=1&&e<=9&&dt("#rite-actions .act")[e-1]?.click(),i.code.startsWith("Arrow")&&i.preventDefault()});addEventListener("keyup",i=>{ei[i.code]=!1});addEventListener("blur",()=>{for(let i in ei)ei[i]=!1});function dy(){let i=null,e=1/0;if(_.entered&&!q.avatar.busy&&!_.busy)for(let t of le.interactables.values()){if(!t.radius||t.id==="host"&&_.role==="host")continue;let n=Math.hypot(q.pos.x-t.spot.x,q.pos.z-t.spot.z);n<t.radius&&n<e&&(e=n,i=t)}if(i?.id!==_.near?.id){_.near=i;let t=P("#prompt");i?(t.innerHTML=`${Me(i.verb)}<kbd>Space</kbd>`,t.hidden=!1):t.hidden=!0,Ko(),i?.id==="altar"&&mh()<=0&&_.role==="guest"&&Tt(`\uD5A5\uC774 \uB2E4 \uD0C0\uC11C \uAEBC\uC838 \uC788\uC5B4\uC694.
\uC0C8 \uD5A5\uC744 \uC62C\uB824 \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC8FC\uC138\uC694.`,3800)}_.role==="guest"&&!_.hostNodded&&le.hostNpc.root.visible&&Math.hypot(q.pos.x-le.HOST_SPOT.x,q.pos.z-le.HOST_SPOT.z)<4.2&&(_.hostNodded=!0,P0().forEach((n,r)=>setTimeout(()=>n.play("nod"),r*150)))}P("#prompt").onclick=()=>_.near&&un(_.near.id);async function un(i){if(_.busy||q.avatar.busy){gt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}if(i.startsWith("photo:"))return vs(+i.split(":")[1]);if(i.startsWith("memory:"))return Dy(le.memories?.[+i.split(":")[1]]);if(i.startsWith("sky:")){let t=le.lantern(+i.split(":")[1]);return t&&Ly(t)}if(i.startsWith("meal:"))return X0(+i.split(":")[1]);if(i.startsWith("wreath:"))return ky(le.wreaths?.[+i.split(":")[1]]);if(i.startsWith("other:"))return Oy(i.slice(6));let e=le.interactables.get(i);switch(i){case"portrait":return vs();case"altar":await Jt(e.spot)&&Tt(_.role==="host"?"\uC81C\uB2E8 \uC55E\uC785\uB2C8\uB2E4.":`\uC81C\uB2E8 \uC55E\uC785\uB2C8\uB2E4.
\uC544\uB798 \uBC88\uD638 \uC21C\uC11C\uB300\uB85C \uBC84\uD2BC\uC744 \uB204\uB974\uAC70\uB098, \u2018\uD55C \uBC88\uC5D0 \uC870\uBB38\uD558\uAE30\u2019\uB97C \uB20C\uB7EC \uC8FC\uC138\uC694.`);return;case"candles":return Ra("candle");case"basket":return fn(async()=>{await Jt(e.spot)&&O0()});case"host":return _.role==="host"?void 0:fn(async()=>{await Jt(e.spot)&&Py()});case"donation":return fn(async()=>{await Jt(e.spot)&&j0()});case"guestbook":return fn(async()=>{await Jt(e.spot)&&Sy()});case"lantern":return fn(async()=>{await Jt(e.spot)&&Iy()});case"florist":return fn(async()=>{await Jt(e.spot)&&Uy()});case"helper":return fn(async()=>{await Jt(e.spot)&&By()});default:}}async function fn(i){if(!_.busy){_.busy=!0,Ko();try{await i()}finally{_.busy=!1,Ko()}}}function jn(i){_.act=i,_.actSeq++}function O0(){if(q.avatar.hold==="flower"){gt("\uC774\uBBF8 \uAD6D\uD654\uB97C \uB4E4\uACE0 \uC788\uC5B4\uC694. \uC81C\uB2E8 \uC55E\uC5D0\uC11C \uD5CC\uD654\uD574 \uC8FC\uC138\uC694.");return}q.avatar.hold="flower",q.avatar.setProp("flower",!0),tt.soft(),Tt(`\uD558\uC580 \uAD6D\uD654 \uD55C \uC1A1\uC774\uB97C \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.
\uC81C\uB2E8 \uC55E\uC73C\uB85C \uAC00\uC11C \uAF43\uBD09\uC624\uB9AC\uAC00 \uC601\uC815\uC744 \uD5A5\uD558\uB3C4\uB85D \uB193\uC544 \uC8FC\uC138\uC694.`),jn("flower")}var py=()=>le.interactables.get("altar").spot,f0={traditional:{incense:`\uD5A5\uC5D0 \uBD88\uC744 \uBD99\uC5EC \uD5A5\uB85C\uC5D0 \uAF42\uC558\uC2B5\uB2C8\uB2E4.
\uD5A5 \uC5F0\uAE30\uAC00 \uACE0\uC778\uAED8 \uB9C8\uC74C\uC744 \uC804\uD574 \uC904 \uAC70\uC608\uC694.`,bow:"\uB450 \uBC88 \uC808\uD558\uACE0, \uBAA9\uB840\uB85C \uC608\uB97C \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4.",silence:"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4."},buddhist:{incense:"\uD5A5\uC744 \uC0AC\uB974\uBA70 \uADF9\uB77D\uC655\uC0DD\uC744 \uBE55\uB2C8\uB2E4.",hapjang:`\uB098\uBB34\uC544\uBBF8\uD0C0\uBD88 \u2014
\uB450 \uC190\uC744 \uBAA8\uC544 \uBC18\uBC30 \uC62C\uB838\uC2B5\uB2C8\uB2E4.`,bow:`\uC808 \uB450 \uBC88\uC744 \uC62C\uB838\uC2B5\uB2C8\uB2E4.
\uBD80\uCC98\uB2D8 \uD488\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC18C\uC11C.`,beads:"\uC5FC\uC8FC \uC77C\uACF1 \uC54C\uC744 \uAD74\uB9AC\uBA70 \uADF9\uB77D\uC655\uC0DD\uC744 \uBE4C\uC5C8\uC2B5\uB2C8\uB2E4."},christian:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",prayer:`\uC8FC\uB2D8, \uC2AC\uD514 \uAC00\uC6B4\uB370 \uC788\uB294 \uC720\uAC00\uC871\uC744 \uC704\uB85C\uD558\uC2DC\uACE0
\uBD80\uD65C\uC758 \uC18C\uB9DD\uC73C\uB85C \uBD99\uB4E4\uC5B4 \uC8FC\uC18C\uC11C.`,silentPrayer:"\uACE0\uAC1C \uC219\uC5EC \uBB35\uB3C4\uD569\uB2C8\uB2E4."},catholic:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",sign:"\uC131\uBD80\uC640 \uC131\uC790\uC640 \uC131\uB839\uC758 \uC774\uB984\uC73C\uB85C. \uC544\uBA58.",prayer:`\uC8FC\uB2D8, {name}\uC5D0\uAC8C \uC601\uC6D0\uD55C \uC548\uC2DD\uC744 \uC8FC\uC18C\uC11C.
\uC601\uC6D0\uD55C \uBE5B\uC744 \uADF8\uC5D0\uAC8C \uBE44\uCD94\uC18C\uC11C.`,candle:`\uC791\uC740 \uCD1B\uBD88 \uD558\uB098\uB97C \uBD09\uD5CC\uD588\uC2B5\uB2C8\uB2E4.
\uC774 \uBD88\uBE5B\uCC98\uB7FC \uB530\uB73B\uD55C \uACF3\uC5D0 \uBA38\uBB34\uC2DC\uAE38.`},none:{flower:"\uD558\uC580 \uAD6D\uD654\uB97C \uB193\uC558\uC2B5\uB2C8\uB2E4.",silence:"\uACE0\uC778\uC744 \uAE30\uC5B5\uD558\uBA70 \uBB35\uB150\uD588\uC2B5\uB2C8\uB2E4.",nod:"\uC815\uC911\uD788 \uBAA9\uB840\uD588\uC2B5\uB2C8\uB2E4."}},Di=i=>(f0[_.role==="host"?_.memorial.religion||"traditional":_.me.religion]?.[i]||f0.traditional[i]||"").replace("{name}",_.memorial.deceased.name);function mh(){return _.incenseAt?1-(Date.now()-_.incenseAt)/(eh*6e4):0}async function Ra(i){if(_.busy||q.avatar.busy){gt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}let e=xd[i];await fn(async()=>{let t=q.avatar;if(t.cancelSoft(),i==="flower"&&t.hold!=="flower"){if(!await Jt(le.interactables.get("basket").spot))return;O0(),await hi(500)}if(i==="candle"){if(!await Jt(le.interactables.get("candles").spot))return}else if(e.altar&&!await Jt(py()))return;switch(await hi(250),jn(i),i){case"incense":{let n=mh()<=0;await t.play("incense",r=>{r==="light"&&(_.counters.incense=(_.counters.incense||0)+1,_.incenseAt=Date.now(),De.stampState("incenseAt").then(s=>{typeof s=="number"&&(_.incenseAt=s)}),_h(),le.setCounts(_.counters),le.burstSmoke(),tt.soft())}),Tt(n?`\uAEBC\uC838 \uC788\uB358 \uD5A5\uC744 \uB2E4\uC2DC \uC62C\uB838\uC2B5\uB2C8\uB2E4.
\uC55E\uC73C\uB85C ${eh}\uBD84 \uB3D9\uC548 \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC904 \uAC70\uC608\uC694.`:Di("incense"));break}case"flower":{await t.play("offer",async n=>{if(n!=="release")return;let r=t.props.flower;delete t.props.flower,t.hold=null,r&&(await le.flyTo(r,new S((Math.random()-.5)*2.6,Ge+.16,-7.3),.7),or.remove(r)),_.counters.flowers=(_.counters.flowers||0)+1,le.setCounts(_.counters),tt.drop()}),Tt(Di("flower")||"\uD558\uC580 \uAD6D\uD654\uB97C \uC601\uC815 \uC55E\uC5D0 \uB193\uC558\uC2B5\uB2C8\uB2E4.");break}case"bow2":case"bow3":Tt(`\uB450 \uC190\uC744 \uBAA8\uC544 \uC774\uB9C8\uC5D0 \uB300\uACE0, \uBB34\uB98E\uC744 \uAFC7\uC5B4 \uC808\uD569\uB2C8\uB2E4.
\uB450 \uBC88 \uC808\uD55C \uB4A4 \uAC00\uBCCD\uAC8C \uBAA9\uB840\uD574\uC694.`,3400),await t.play(i),Tt(Di("bow"));break;case"hapjang":await t.play("hapjang"),tt.moktak(),Tt(Di("hapjang"));break;case"beads":t.setProp("beads",!0),Tt("\uC5FC\uC8FC\uB97C \uAD74\uB9BD\uB2C8\uB2E4\u2026",2500),await t.play("beads",n=>{n==="bead"&&tt.moktak()}),t.setProp("beads",!1),Tt(Di("beads"));break;case"prayer":{let n=fy();Tt(Di("prayer"),6e3),await t.play("prayer"),n.fade();break}case"silentPrayer":case"silence":await my(i==="silentPrayer"?"\uBB35\uB3C4":"\uBB35\uB150"),Tt(Di(i));break;case"sign":await t.play("sign"),Tt(Di("sign"));break;case"candle":await t.play("candle",n=>{n==="release"&&(_.counters.candles=(_.counters.candles||0)+1,le.setCounts(_.counters),tt.soft())}),Tt(Di("candle"));break;case"nod":await t.play("nod"),Tt(Di("nod"));break;case"cup":Tt("\uC220\uC794\uC5D0 \uC220\uC744 \uB530\uB77C \uC81C\uB2E8\uC5D0 \uC62C\uB9BD\uB2C8\uB2E4.",2600),await t.play("pour",n=>{n==="pour"&&(le.fillCup(),tt.tone(700,.3,{gain:.04}))}),Tt("\uC220\uC794\uC744 \uC62C\uB838\uC2B5\uB2C8\uB2E4.");break;default:}De.bump(e.key,i==="beads"?7:1),["incense","flowers","candles"].includes(e.key)||(_.counters[e.key]=(_.counters[e.key]||0)+(i==="beads"?7:1)),il(i),lr()})}function fy(){let i=new be(.5,1.1,6,24,1,!0),e=new cn({color:"#fff3d6",transparent:!0,opacity:0,side:St,depthWrite:!1,blending:Co}),t=new z(i,e);t.raycast=()=>{},t.position.copy(q.pos).add(new S(0,3,0)),or.add(t);let n=.16,r=()=>{if(e.opacity+=(n-e.opacity)*.05,n===0&&e.opacity<.005){or.remove(t),i.dispose();return}requestAnimationFrame(r)};return r(),{fade(){n=0}}}function my(i){return new Promise(e=>{let t=P("#silence"),n=P("#silence-arc");P("#silence-text").textContent=i,t.hidden=!1,n.style.transition="none",n.style.strokeDashoffset="289",tt.bell(),tt.duck(!0);let r=_.auto?5e3:9e3;requestAnimationFrame(()=>requestAnimationFrame(()=>{n.style.transition=`stroke-dashoffset ${r}ms linear`,n.style.strokeDashoffset="0"})),q.avatar.play("silence");let s=!1,a=()=>{s||(s=!0,t.hidden=!0,t.onclick=null,tt.chime(.1),tt.duck(!1),q.avatar.finish(),e())};t.onclick=a,setTimeout(a,r)})}var gy=[{id:"guestbook",icon:"\u270D\uFE0F",label:"\uBC29\uBA85\uB85D",run:()=>un("guestbook")},{id:"greet",icon:"\u{1F91D}",label:"\uC0C1\uC8FC \uC778\uC0AC",run:()=>un("host")},{id:"condolence",icon:"\u2709\uFE0F",label:"\uC870\uC758\uAE08",run:()=>un("donation")},{id:"meal",icon:"\u{1F372}",label:"\uC2DD\uB2F9",run:()=>xh()},{id:"lantern",icon:"\u{1F3EE}",label:"\uB4F1\uBD88",run:()=>un("lantern")},{id:"wreath",icon:"\u{1F490}",label:"\uD654\uD658",run:()=>un("florist")},{id:"talk",icon:"\u{1F4AC}",label:"\uB9D0\uD558\uAE30",run:()=>Yd()},{id:"emote",icon:"\u{1F622}",label:"\uD45C\uC815",run:()=>H0()}],vy=[{id:"thank",icon:"\u{1F647}",label:"\uB2F5\uB840 \uC778\uC0AC",run:()=>Z0()},{id:"spot",icon:"\u{1F4CD}",label:"\uC0C1\uC8FC \uC790\uB9AC",run:()=>fn(async()=>{await Jt(le.HOST_SPOT)})},{id:"panel",icon:"\u{1F5C2}\uFE0F",label:"\uC0C1\uC8FC \uD328\uB110",run:()=>rp()},{id:"book",icon:"\u{1F4D6}",label:"\uBC29\uBA85\uB85D",run:()=>W0()},{id:"theater",icon:"\u{1F39E}\uFE0F",label:"\uCD94\uC5B5 \uC0C1\uC601",run:()=>vs()},{id:"talk",icon:"\u{1F4AC}",label:"\uB9D0\uD558\uAE30",run:()=>Yd()},{id:"emote",icon:"\u{1F622}",label:"\uD45C\uC815",run:()=>H0()}];function m0(i){if(_.role!=="guest")return"";let e=ki().findIndex(t=>t.any.includes(i));return e<0?"":`<i class="num">${e+1}</i>`}function qd(){let i=_.role==="host"?Ci[_.memorial.religion]||Ci.traditional:Ci[_.me.religion],e=_.role==="host"?i.actions.filter(n=>n!=="flower"):i.actions;P("#rite-actions").innerHTML=e.map((n,r)=>{let s=xd[n];return`<button type="button" class="act" data-act="${n}" title="${s.label}${s.sub?` (${s.sub})`:""} \xB7 ${r+1}">${m0(n)}<span class="ic">${s.icon}</span><span>${s.label}</span></button>`}).join(""),P("#rite-actions").onclick=n=>{let r=n.target.closest("[data-act]");r&&Ra(r.dataset.act)};let t=_.role==="host"?vy:gy;P("#common-actions").innerHTML=t.map(n=>`<button type="button" class="act" data-common="${n.id}">${m0(n.id)}<span class="ic">${n.icon}</span><span>${n.label}</span></button>`).join(""),P("#common-actions").onclick=n=>{let r=n.target.closest("[data-common]");r&&t.find(s=>s.id===r.dataset.common).run()},P("#emotes").innerHTML=$c.map(n=>`<button type="button" data-expr="${n.id}" title="${n.label}"><span>${n.icon}</span><small>${n.label}</small></button>`).join(""),Ko()}function Ko(){let i=nl(),e=new Set(i?i.any:[]);dt("#rite-actions .act, #common-actions .act").forEach(t=>{let n=t.dataset.act||t.dataset.common;t.classList.toggle("suggest",_.role==="guest"&&e.has(n)),t.disabled=_.busy})}function H0(){P("#emotes").hidden=!P("#emotes").hidden}P("#emotes").onclick=i=>{let e=i.target.closest("[data-expr]");e&&(P("#emotes").hidden=!0,yy(e.dataset.expr))};function yy(i){let e=$c.find(t=>t.id===i);i==="cry"||i==="smile"?q.avatar.setExpression(i,5):ms(q.avatar.root,e.icon,2400,!0,q.avatar.height),i==="pray"&&q.avatar.play("hapjang",null,{soft:!0}),jn(`expr:${i}`)}function Yd(){let i=P("#talkbar");i.hidden=!1,P("#talk-quick").innerHTML=Sm.map(e=>`<button type="button">${Me(e)}</button>`).join(""),P("#talk-input").focus()}function gh(i){i=i.trim().slice(0,60),i&&(ms(q.avatar.root,i,5e3,!1,q.avatar.height),_.say=i,_.sayS++,tt.pop())}P("#talkbar").onsubmit=i=>{i.preventDefault(),gh(P("#talk-input").value),P("#talk-input").value="",P("#talkbar").hidden=!0};P("#talk-quick").onclick=i=>{let e=i.target.closest("button");e&&(gh(e.textContent),P("#talkbar").hidden=!0)};P("#talk-close").onclick=()=>{P("#talkbar").hidden=!0};function ki(){return _.role==="guest"?Ci[_.me.religion].steps:[]}function Lr(i){return i.all?i.any.every(e=>_.done.has(e)):i.any.some(e=>_.done.has(e))}function nl(){return ki().find(i=>!Lr(i))}function il(i){if(_.role!=="guest")return;let e=ki().filter(n=>!n.optional).every(Lr);_.done.add(i),De.setLocal(`done:${_.me.religion}`,[..._.done]),G0(),Ko();let t=ki().filter(n=>!n.optional).every(Lr);!e&&t&&setTimeout(Fy,2600)}function G0(){if(_.role!=="guest"){P("#guide").hidden=!0;return}let i=Ci[_.me.religion];P("#guide-title").textContent=`${i.icon} ${i.label} \uC870\uBB38 \uC21C\uC11C`;let e=nl();P("#guide-steps").innerHTML=ki().map(t=>`
    <li class="${Lr(t)?"done":t===e?"next":""}">${Me(t.label)}${t.optional?'<span class="opt">\uC120\uD0DD</span>':""}
      ${t===e?`<button type="button" data-step="${t.id}">\uD558\uAE30</button>`:""}</li>`).join(""),Jd(),P("#guide-tip").textContent=e?"\u2018\uD558\uAE30\u2019\uB97C \uB204\uB974\uBA74 \uC54C\uC544\uC11C \uAC78\uC5B4\uAC00\uC11C \uC9C4\uD589\uD574\uC694. \uC21C\uC11C\uB294 \uC790\uC720\uB86D\uAC8C \uBC14\uAFD4\uB3C4 \uAD1C\uCC2E\uC544\uC694.":"\uBAA8\uB4E0 \uC21C\uC11C\uB97C \uB9C8\uCCE4\uC5B4\uC694. \uD3B8\uD788 \uBA38\uBB3C\uB2E4 \uAC00\uC138\uC694."}function Zd(i){let e=i.any[0];i.id==="reception"&&_.done.has("guestbook")?un("donation"):e==="guestbook"?un("guestbook"):e==="greet"?un("host"):e==="condolence"?un("donation"):e==="meal"?xh():i.id==="offer"&&Ci[_.me.religion].auto.length?tp():Ra(e)}P("#guide-steps").onclick=i=>{let e=i.target.closest("[data-step]");e&&Zd(ki().find(t=>t.id===e.dataset.step))};var xy={reception:"guestbook",guestbook:"guestbook",greet:"host",condolence:"donation",meal:"meal"},g0=i=>i?xy[i.id]||"altar":null;function Jd(){let i=P("#next-cta");if(_.role!=="guest"||!_.entered){i.hidden=!0;return}let e=nl(),t=ki().some(n=>!Lr(n)&&g0(n)==="altar");i.hidden=_.auto,P("#cta-next").innerHTML=e?`<small>\uB2E4\uC74C \uD560 \uC77C ${ki().indexOf(e)+1}/${ki().length}</small>${Me(e.label)} \u25B6`:"<small>\uC870\uBB38\uC744 \uBAA8\uB450 \uB9C8\uCCE4\uC5B4\uC694</small>\uB4F1\uBD88 \uB744\uC6B0\uAE30 \u25B6",P("#cta-auto").hidden=!t,dt(".marker").forEach(n=>n.classList.toggle("next",n.dataset.id===g0(e)))}P("#cta-next").onclick=()=>{let i=nl();i?Zd(i):un("lantern")};P("#cta-auto").onclick=()=>tp();var _y=[{id:"guestbook",icon:"\u270D\uFE0F",text:"\uC811\uC218\uB300 \xB7 \uBC29\uBA85\uB85D \xB7 \uC870\uC758\uAE08"},{id:"altar",icon:"\u{1F56F}\uFE0F",text:"\uC81C\uB2E8 \xB7 \uC870\uBB38"},{id:"host",icon:"\u{1F647}",text:"\uC0C1\uC8FC"},{id:"basket",icon:"\u{1F33C}",text:"\uD5CC\uD654 \uAD6D\uD654"},{id:"florist",icon:"\u{1F490}",text:"\uADFC\uC870\uD654\uD658"},{id:"lantern",icon:"\u{1F3EE}",text:"\uB9C8\uC74C \uB4F1\uBD88"},{id:"meal",icon:"\u{1F372}",text:"\uC2DD\uB2F9",pos:new S(17,3.2,-4.5)}];function by(){for(let i of _y){if(i.id==="host"&&_.role==="host")continue;let e=i.pos||le.interactables.get(i.id)?.anchor;if(!e)continue;let t=document.createElement("button");t.type="button",t.className="marker",t.dataset.id=i.id,t.innerHTML=`<span>${i.icon}</span>${i.text}`,t.onclick=()=>i.id==="meal"?xh():un(i.id);let n=e.clone().add(new S(0,.45,0));xs(t,()=>bn.position.distanceTo(n)<24?n:null)}Jd()}function vh(){let i=!tt.running&&tt.trackId!=="none";P("#sound-chip").hidden=!i}P("#sound-chip").onclick=()=>{tt.ensure(),tt.ctx?.resume(),bh(),setTimeout(vh,600)};for(let i of["pointerdown","touchend","keydown"])addEventListener(i,()=>{_.entered&&tt.ctx&&!tt.running&&tt.ctx.resume().then(vh)},{passive:!0});document.addEventListener("visibilitychange",()=>{!document.hidden&&tt.ctx&&tt.ctx.resume().then(vh)});P("#btn-view").onclick=()=>Jo(_.view==="first"?"third":"first");P("#dlg-onboard").addEventListener("close",()=>localStorage.setItem("samga:onboarded","1"));function z0(){let i=_.role==="guest"?ki():[];P("#onboard-steps").innerHTML=i.map((e,t)=>`<li><button type="button" data-ob="${t}" class="${Lr(e)?"done":e===nl()?"next":""}"><i>${Lr(e)?"\u2713":t+1}</i><span>${Me(e.label)}</span><b>${Lr(e)?"\uB2E4\uC2DC \uD558\uAE30":"\uC774 \uB2E8\uACC4\uB85C"} \u203A</b></button></li>`).join(""),P("#onboard-steps").onclick=e=>{let t=e.target.closest("[data-ob]");t&&(P("#dlg-onboard").close(),Zd(i[+t.dataset.ob]))},dn(P("#dlg-onboard"))}P("#btn-guidebook").onclick=z0;function My(){De.presenceDelete(_.me.id),tt.stopTrack(),_.entered=!1,_.left=!0,document.querySelectorAll("dialog[open]").forEach(i=>i.close()),P("#hud").hidden=!0,P("#bar").hidden=!0,P("#btn-guidebook").hidden=!0,q.avatar.root.visible=!1,P("#bye").hidden=!1,P("#bye-thanks").textContent=_.memorial.thanks||"",setTimeout(()=>{if(/KAKAOTALK/i.test(navigator.userAgent))location.href="kakaotalk://inappbrowser/close";else try{window.close()}catch{}},1800)}P("#btn-leave").onclick=()=>{confirm("\uBE48\uC18C\uC5D0\uC11C \uB098\uAC00\uC2DC\uACA0\uC5B4\uC694?")&&My()};P("#bye-again").onclick=()=>location.reload();P("#ob-auto").onclick=()=>{P("#dlg-onboard").close(),tp()};function Ey(){let i=[...document.querySelectorAll("dialog[open]")].pop();return i?(i.close(),!0):P("#theater").hidden?P("#talkbar").hidden?P("#emotes").hidden?_.auto?(_.auto=!1,q.avatar.finish(),gt("\uD55C \uBC88\uC5D0 \uC870\uBB38\uD558\uAE30\uB97C \uBA48\uCDC4\uC5B4\uC694."),!0):q.target?(k0(),!0):ve.focus?(fh(),!0):!1:(P("#emotes").hidden=!0,!0):(P("#talkbar").hidden=!0,!0):(Y0.close(),!0)}history.replaceState({samga:0},"");addEventListener("popstate",()=>{Ey(),history.pushState({samga:1},"")});setInterval(()=>{let i=!!document.querySelector("dialog[open]")||!P("#theater").hidden||_.auto||!!q.target;_.left||(P("#btn-guidebook").hidden=!_.entered||!!document.querySelector("dialog[open]")||!P("#theater").hidden)},300);dt("dialog.sheet .sheet-body").forEach(i=>{let e=document.createElement("button");e.type="button",e.className="sheet-back",e.textContent="\u2190 \uC774\uC804",e.onclick=()=>i.closest("dialog").close(),i.prepend(e)});function V0(){_.role==="guest"&&(P("#guide").hidden=!P("#guide").hidden)}P("#guide-close").onclick=()=>{P("#guide").hidden=!0};P("#btn-guide").onclick=V0;function dn(i){return i.returnValue="",i.showModal(),i}dt("dialog [data-close]").forEach(i=>i.addEventListener("click",()=>i.closest("dialog").close()));dt("dialog").forEach(i=>i.addEventListener("click",e=>{e.target===i&&i.close()}));function Kd(i,e,t){i.innerHTML=e.map(n=>`<button type="button" aria-pressed="false">${Me(n)}</button>`).join(""),i.onclick=n=>{let r=n.target.closest("button");r&&(t.tagName==="TEXTAREA"?t.value=(t.value?`${t.value.trim()} `:"")+r.textContent:t.value=r.textContent,dt("button",i).forEach(s=>s.setAttribute("aria-pressed",s===r)))}}function Qo(i){P("#view-body").innerHTML=i,dn(P("#dlg-view"))}function Sy(){let i=P("#form-guestbook");i.name.value=i.name.value||(_.role==="host"?_.memorial.hostName:_.me.name)||"";let e=_.role==="host"?"\uAC00\uC871":_.me.relation||"";i.relation.value="";let t=()=>{$o(),e=_.me.relation};D0(P("#gb-hosts"),_.me.hostOf,r=>{_.me.hostOf=r,t()}),i.relation.hidden=!0,N0(P("#gb-relations"),_.me.rel,r=>{i.relation.hidden=r!=="\uAE30\uD0C0",i.relation.value="",_.me.rel=r,t(),r==="\uAE30\uD0C0"&&i.relation.focus()}),i.relation.oninput=()=>{e=i.relation.value.trim()||"\uAE30\uD0C0"},Kd(P("#gb-quick"),["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.","\uC88B\uC740 \uACF3\uC5D0\uC11C \uD3B8\uD788 \uC26C\uC138\uC694.","\uB298 \uAE30\uC5B5\uD558\uACA0\uC2B5\uB2C8\uB2E4.","\uD568\uAED8\uD55C \uC2DC\uAC04 \uAC10\uC0AC\uD588\uC2B5\uB2C8\uB2E4."],i.message);let n=P("#dlg-guestbook");dn(n),n.onclose=async()=>{if(n.returnValue!=="ok")return;let r={name:i.name.value.trim().slice(0,16),relation:(e||"").slice(0,16),hostOf:_.role==="guest"&&_.me.hostOf||"",message:i.message.value.trim().slice(0,300)};if(!r.name)return;i.message.value="",_.role==="guest"&&r.relation&&(_.me.relation=r.relation,Wd());let s=await De.add("guestbook",r);_.guestbook.push(s),De.bump("guestbook"),_.counters.guestbook=(_.counters.guestbook||0)+1,le.setMemories(yh()),q.avatar.play("nod",null,{soft:!0}),jn("nod"),tt.chime(.12),Tt(`\uBC29\uBA85\uB85D\uC5D0 \uC774\uB984\uC744 \uB0A8\uACBC\uC2B5\uB2C8\uB2E4.
\uB9C8\uB2F9 \uD654\uB2E8\uC5D0 \uD558\uC580 \uAD6D\uD654 \uD55C \uC1A1\uC774\uAC00 \uD53C\uC5C8\uC5B4\uC694.`),il("guestbook"),lr(),_.role==="guest"&&!_.done.has("condolence")&&(await hi(900),fn(async()=>{await Jt(le.interactables.get("donation").spot),j0()}))}}function Qd(){return!!_.memorial.demo}function el(){return[...Qd()&&_.guestbook.length<3?(_.memorial.demoSeeds?.guestbook||[]).map(e=>({...e,demo:!0})):[],..._.guestbook]}function yh(){if(_.role==="host"&&De.isHostReader)return el();let i=el(),e=Math.max(0,(_.counters.guestbook||0)-_.guestbook.length);return[...Array.from({length:Math.min(e,150)},()=>({anon:!0})),...i]}var Xo="";function W0(){let i=el().slice().reverse();P("#book-note").textContent=_.role==="host"?De.isHostReader||!De.remote?"\uBAA8\uB4E0 \uC870\uBB38\uAC1D\uC758 \uBC29\uBA85\uB85D\uC774\uC5D0\uC694.":"\uC0C1\uC8FC \uAE30\uAE30 \uD655\uC778\uC774 \uC548 \uB3FC\uC11C \uC774 \uAE30\uAE30\uC5D0\uC11C \uC4F4 \uAE00\uB9CC \uBCF4\uC5EC\uC694. \uC0C1\uC8FC \uB9C1\uD06C\uB85C \uB2E4\uC2DC \uB4E4\uC5B4\uC640 \uC8FC\uC138\uC694.":"\uBC29\uBA85\uB85D\uC740 \uAC1C\uC778\uC815\uBCF4\uB77C \uC0C1\uC8FC\uB9CC \uBCFC \uC218 \uC788\uC5B4\uC694. \uC5EC\uAE30\uC5D0\uB294 \uB0B4\uAC00 \uB0A8\uAE34 \uAE00\uB9CC \uBCF4\uC5EC\uC694.";let e={};i.forEach(n=>{let r=n.relation||"\uAE30\uD0C0";e[r]=(e[r]||0)+1});let t=()=>{let n=Xo?i.filter(r=>(r.relation||"\uAE30\uD0C0")===Xo):i;P("#book-filter").innerHTML=`<button type="button" class="chip" data-f="" aria-pressed="${!Xo}">\uC804\uCCB4 ${i.length}</button>`+Object.entries(e).sort((r,s)=>s[1]-r[1]).map(([r,s])=>`<button type="button" class="chip" data-f="${Me(r)}" aria-pressed="${Xo===r}">${Me(r)} ${s}</button>`).join(""),P("#book-list").innerHTML=n.length?n.map(r=>`
      <article class="book-item">
        ${r.relation?`<span class="rel">${Me(r.relation)}</span>`:""}
        ${r.message?`<p>${Me(r.message)}</p>`:""}
        <footer><span><b>${Me(r.name)}</b>${r.demo?" \xB7 \uC608\uC2DC":""}</span><span>${r.time?wa(r.time):""}</span></footer>
      </article>`).join(""):'<p class="empty">\uC544\uC9C1 \uB0A8\uACA8\uC9C4 \uAE00\uC774 \uC5C6\uC5B4\uC694. \uCCAB \uB9C8\uC74C\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694.</p>'};P("#book-filter").onclick=n=>{let r=n.target.closest("[data-f]");r&&(Xo=r.dataset.f,t())},t(),dn(P("#dlg-book"))}P("#btn-book").onclick=W0;P("#book-write").onclick=()=>{P("#dlg-book").close(),un("guestbook")};var sr="\uACC4\uC88C \uC774\uCCB4",Zt={phrase:"\u8CFB\u5100",paper:"white",seal:"none",font:"serif"};function Ty(i,e){let t=ir.papers.find(o=>o.id===Zt.paper),n=ir.fonts.find(o=>o.id===Zt.font),r=ir.seals.find(o=>o.id===Zt.seal),s=P("#envelope");s.style.setProperty("--paper",t.bg),s.style.setProperty("--efont",n.css),s.classList.toggle("band",!!t.band);let a=r.id==="mum"?'<img class="seal seal-img" src="./flowers/mum.png" alt="">':r.icon?`<em class="seal">${r.icon}</em>`:"";P("#env-front").innerHTML=`${[...Zt.phrase].map(o=>`<span>${Me(o)}</span>`).join("")}${a}`,P("#env-front").classList.toggle("hangul",/[가-힣]/.test(Zt.phrase)),P("#env-back").innerHTML=`<small>${Me(i.affil.value.trim())}</small><strong>${Me(i.name.value.trim()||"\uC774\uB984")}</strong><em>${e?Sa(e):""}</em>${i.note.value.trim()?"<i>\u2709 \uCABD\uC9C0 \uB3D9\uBD09</i>":""}`}function j0(){let i=_.memorial,e=P("#form-condolence"),t=P("#envelope");t.className="envelope",e.name.value=e.name.value||_.me.name||"";let n=[3e4,5e4,7e4,1e5],r=Number(e.amount.value.replace(/\D/g,""))||5e4;P("#amounts").innerHTML=n.map(f=>`<button type="button" class="chip" data-amount="${f}" aria-pressed="${f===r}">${f/1e4}\uB9CC \uC6D0</button>`).join(""),P("#env-phrases").innerHTML=ir.phrases.map(f=>`<button type="button" class="chip env-ph" data-ph="${f.id}" aria-pressed="${Zt.phrase===f.id}"><b>${f.id}</b><small>${f.sub}</small></button>`).join(""),P("#env-papers").innerHTML=ir.papers.map(f=>`<button type="button" class="swatch" data-paper="${f.id}" style="--c:${f.bg}" aria-pressed="${Zt.paper===f.id}">${f.label}</button>`).join(""),P("#env-seals").innerHTML=ir.seals.map(f=>`<button type="button" class="chip" data-seal="${f.id}" aria-pressed="${Zt.seal===f.id}">${f.id==="mum"?'<img class="chip-img" src="./flowers/mum.png" alt="">':f.icon} ${f.label}</button>`).join(""),P("#env-fonts").innerHTML=ir.fonts.map(f=>`<button type="button" class="chip" data-font="${f.id}" style="font-family:${f.css}" aria-pressed="${Zt.font===f.id}">${f.label}</button>`).join(""),_.memorial.religion==="christian"&&Zt.phrase==="\u8CFB\u5100"&&!_.envTouched&&(Zt.phrase="\u53EC\u5929");let s=()=>{Ty(e,r),d(),dt("[data-ph]").forEach(f=>f.setAttribute("aria-pressed",f.dataset.ph===Zt.phrase)),dt("[data-paper]").forEach(f=>f.setAttribute("aria-pressed",f.dataset.paper===Zt.paper)),dt("[data-seal]").forEach(f=>f.setAttribute("aria-pressed",f.dataset.seal===Zt.seal)),dt("[data-font]").forEach(f=>f.setAttribute("aria-pressed",f.dataset.font===Zt.font))};P("#env-options").onclick=f=>{let v=f.target.closest("[data-ph],[data-paper],[data-seal],[data-font]");v&&(_.envTouched=!0,v.dataset.ph&&(Zt.phrase=v.dataset.ph,t.classList.remove("flip")),v.dataset.paper&&(Zt.paper=v.dataset.paper),v.dataset.seal&&(Zt.seal=v.dataset.seal,t.classList.remove("flip")),v.dataset.font&&(Zt.font=v.dataset.font),tt.pop(),s())},P("#amounts").onclick=f=>{let v=f.target.closest("[data-amount]");v&&(r=Number(v.dataset.amount),e.amount.value="",dt("#amounts .chip").forEach(m=>m.setAttribute("aria-pressed",m===v)),t.classList.add("flip"),s())},e.amount.oninput=()=>{let f=Number(e.amount.value.replace(/\D/g,""));f&&(r=f,dt("#amounts .chip").forEach(v=>v.setAttribute("aria-pressed","false"))),t.classList.add("flip"),s()},e.name.oninput=e.affil.oninput=e.note.oninput=()=>{t.classList.add("flip"),s()},P("#env-flip").onclick=()=>t.classList.toggle("flip");let a=Nd(i),o=a.findIndex(f=>f.name===_.me.hostOf),c=_.accIdx??(o>=0?o:0);c=Math.min(c,Math.max(0,a.length-1));let l=a[c]||{},h=!!(l.number&&/\d/.test(l.number)),u=()=>{P("#account-box").innerHTML=a.length?`<p class="acc-title">\uB204\uAD6C\uC5D0\uAC8C \uBCF4\uB0B4\uC2E4\uAE4C\uC694? <small>\uC544\uB294 \uC0C1\uC8FC\uB97C \uACE8\uB77C \uADF8\uBD84 \uACC4\uC88C\uB85C \uBCF4\uB0B4\uC138\uC694</small></p>${a.map((f,v)=>`
        <label class="acc${v===c?" on":""}"><input type="radio" name="acc" value="${v}" ${v===c?"checked":""}>
          <span><b>${Me(f.name||"\uC0C1\uC8FC")}</b><small>${Me(f.bank||"")} ${Me(f.number||"")}${f.holder?` \xB7 \uC608\uAE08\uC8FC ${Me(f.holder)}`:""}</small></span>
          <button type="button" class="btn-ghost" data-acc-copy="${v}">\uBCF5\uC0AC</button></label>`).join("")}`:"<div><small>\uC870\uC758\uAE08 \uACC4\uC88C</small><b>\uC0C1\uC8FC\uAC00 \uC544\uC9C1 \uACC4\uC88C\uB97C \uB4F1\uB85D\uD558\uC9C0 \uC54A\uC558\uC5B4\uC694</b></div>"};u(),P("#account-box").onchange=f=>{f.target.name==="acc"&&(c=_.accIdx=+f.target.value,l=a[c],h=!!(l.number&&/\d/.test(l.number)),u(),d())},P("#account-box").onclick=async f=>{let v=f.target.closest("[data-acc-copy]");if(!v)return;f.preventDefault();let m=a[+v.dataset.accCopy];await fs(`${m.bank} ${m.number} ${m.holder}`),sr="\uACC4\uC88C \uC774\uCCB4",gt(`\u2705 ${m.name||"\uC0C1\uC8FC"} \uB2D8 \uACC4\uC88C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694
${m.bank} ${m.number}
\uBC1B\uB294 \uBD84\uC774 \uB9DE\uB294\uC9C0 \uD55C \uBC88 \uB354 \uD655\uC778\uD574 \uC8FC\uC138\uC694.`,5e3)};function d(){let f=[],v=/^[0\s-]+$/.test(String(l.number||""));if(h&&i.toss){let x=l.toss?`https://toss.me/${encodeURIComponent(String(l.toss).replace(/^https?:\/\/toss\.me\//,"").split("/")[0])}/${r||""}`:`supertoss://send?amount=${r||""}&bank=${encodeURIComponent(l.bank||"")}&accountNo=${encodeURIComponent(String(l.number).replace(/\D/g,""))}&origin=qr`;f.push(`<a class="pay toss" data-method="\uD1A0\uC2A4" href="${v?"#":x}">\uD1A0\uC2A4\uB85C \uBCF4\uB0B4\uAE30</a>`)}h&&f.push('<a class="pay bank" data-method="\uC740\uD589 \uC785\uAE08" href="#bank">\uC740\uD589 \uC785\uAE08\uD558\uAE30</a>');let m=l.kakao||i.kakaopayLink;if(m){let x=(/^https?:/.test(m)?m:`https://qr.kakaopay.com/${m}`).replace(/\/+$/,""),g=x.split("/").pop().slice(0,9),y=r>0&&r<1e8?`https://qr.kakaopay.com/${g}${(r*524288).toString(16)}`:x;f.push(`<a class="pay kakao" data-method="\uCE74\uCE74\uC624\uD398\uC774" href="${Me(y)}" target="_blank" rel="noopener">\uCE74\uCE74\uC624\uD398\uC774\uB85C \uBCF4\uB0B4\uAE30</a>`)}else h&&f.push('<a class="pay kakao" data-method="\uCE74\uCE74\uC624\uD398\uC774" href="#kakao">\uCE74\uCE74\uC624\uD398\uC774\uB85C \uBCF4\uB0B4\uAE30</a>');P("#pay-row").innerHTML=f.join(""),P("#pay-row").onclick=async x=>{let g=x.target.closest("[data-method]");if(g){if(sr=g.dataset.method,sr==="\uCE74\uCE74\uC624\uD398\uC774"&&g.getAttribute("href")!=="#kakao"&&ah(g,"\uCE74\uCE74\uC624\uD398\uC774 \uC5EC\uB294 \uC911\u2026",`\uCE74\uCE74\uC624\uD398\uC774 \uC1A1\uAE08 \uD654\uBA74\uC5D0 <b>${Sa(r)}</b>\uC774 \uCC44\uC6CC\uC838\uC11C \uC5F4\uB824\uC694.<br>\uAE08\uC561\uC774 \uBE44\uC5B4 \uC788\uC73C\uBA74 \uC9C1\uC811 \uB123\uC5B4 \uC8FC\uC2DC\uACE0, \uBC1B\uB294 \uBD84\uC744 \uAF2D \uD655\uC778\uD574 \uC8FC\uC138\uC694.`),sr==="\uCE74\uCE74\uC624\uD398\uC774"&&g.getAttribute("href")==="#kakao"){x.preventDefault(),await fs(`${l.bank} ${String(l.number).replace(/[^0-9-]/g,"")}`),ah(g,"\u2705 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694",`<b class="to">\uBC1B\uB294 \uBD84: ${Me(l.name||"\uC0C1\uC8FC")} \uB2D8</b><br>${Me(l.bank)} ${Me(l.number)}<br>\uCE74\uCE74\uC624\uD398\uC774 \uC571 \u2192 <b>\uC1A1\uAE08</b> \u2192 <b>\uACC4\uC88C\uB85C \uBCF4\uB0B4\uAE30</b>\uC5D0\uC11C \uBD99\uC5EC \uB123\uC5B4 \uC8FC\uC138\uC694.`),gt(`\u2705 ${l.name||"\uC0C1\uC8FC"} \uB2D8 \uACC4\uC88C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694
${l.bank} ${l.number}
\uCE74\uCE74\uC624\uD398\uC774 \u2192 \uC1A1\uAE08 \u2192 \uACC4\uC88C\uB85C \uBCF4\uB0B4\uAE30\uC5D0 \uBD99\uC5EC \uB123\uC5B4 \uC8FC\uC138\uC694.`,5200),/Android|iPhone|iPad/i.test(navigator.userAgent)&&setTimeout(()=>{location.href="kakaotalk://kakaopay/home"},900);return}if(sr==="\uC740\uD589 \uC785\uAE08"){x.preventDefault(),await fs(`${l.bank} ${String(l.number).replace(/[^0-9-]/g,"")}`),ah(g,"\u2705 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694",`<b class="to">\uBC1B\uB294 \uBD84: ${Me(l.name||"\uC0C1\uC8FC")} \uB2D8</b><br>${Me(l.bank)} ${Me(l.number)}<br>\uC740\uD589 \uC571\uC744 \uC5F4\uC5B4 \uBD99\uC5EC \uB123\uACE0, \uBC1B\uB294 \uBD84 \uC774\uB984\uC774 \uB9DE\uB294\uC9C0 \uD655\uC778\uD574 \uC8FC\uC138\uC694.`),gt(`\u2705 ${l.name||"\uC0C1\uC8FC"} \uB2D8 \uACC4\uC88C\uAC00 \uBCF5\uC0AC\uB418\uC5C8\uC5B4\uC694
${l.bank} ${l.number}
\uBC1B\uB294 \uBD84\uC774 \uB9DE\uB294\uC9C0 \uD55C \uBC88 \uB354 \uD655\uC778\uD574 \uC8FC\uC138\uC694.`,5200);return}g.getAttribute("href")==="#"?(x.preventDefault(),gt("\uC608\uC2DC \uACC4\uC88C\uB77C \uC2E4\uC81C\uB85C \uC1A1\uAE08\uB418\uC9C0\uB294 \uC54A\uC544\uC694.")):sr==="\uD1A0\uC2A4"&&!/Android|iPhone|iPad/i.test(navigator.userAgent)?gt("\uD1A0\uC2A4 \uBC84\uD2BC\uC740 \uD734\uB300\uD3F0\uC5D0\uC11C \uD1A0\uC2A4 \uC571\uC73C\uB85C \uC5F4\uB824\uC694. PC\uC5D0\uC11C\uB294 \uACC4\uC88C\uB97C \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694.",3600):sr==="\uD1A0\uC2A4"&&ah(g,"\uD1A0\uC2A4 \uC5EC\uB294 \uC911\u2026",`<b class="to">\uBC1B\uB294 \uBD84: ${Me(l.name||"\uC0C1\uC8FC")} \uB2D8</b><br>${Me(l.bank)} ${Me(l.number)} \uB85C \uBCF4\uB0B4\uC694.`),sr==="\uD1A0\uC2A4"&&g.href.startsWith("supertoss:")&&(fs(`${l.bank} ${l.number}`),setTimeout(()=>{document.hidden||gt("\uD1A0\uC2A4 \uC571\uC774 \uC5F4\uB9AC\uC9C0 \uC54A\uC73C\uBA74 \uACC4\uC88C\uBC88\uD638\uB97C \uBCF5\uC0AC\uD574 \uB450\uC5C8\uC73C\uB2C8 \uD1A0\uC2A4\uB098 \uC740\uD589 \uC571\uC5D0\uC11C \uBD99\uC5EC \uB123\uC5B4 \uC8FC\uC138\uC694.",4800)},1600))}}}s();let p=P("#dlg-condolence");e.onsubmit=f=>{f.submitter?.value==="ok"&&(f.preventDefault(),e.reportValidity()&&(t.classList.add("flip"),requestAnimationFrame(()=>t.classList.add("send")),tt.soft(),setTimeout(()=>p.close("ok"),Xv?50:1050)))},dn(p),p.onclose=async()=>{if(p.returnValue!=="ok")return;let f=e.name.value.trim();if(!f)return;let v=ir.papers.find(g=>g.id===Zt.paper),m=Nd(i)[_.accIdx??Math.max(0,Nd(i).findIndex(g=>g.name===_.me.hostOf))],x={name:f.slice(0,20),affil:e.affil.value.trim().slice(0,30),amount:r,method:sr,phrase:Zt.phrase,note:e.note.value.trim().slice(0,120),to:m?.name||""};e.note.value="",await fn(async()=>{await Jt(le.interactables.get("donation").spot);let g=q.avatar;g.hold="envelope",g.setProp("envelope",!0,{color:v.bg}),jn("give"),await g.play("give",async y=>{if(y!=="release")return;let E=g.props.envelope;delete g.props.envelope,g.hold=null,E&&(await le.flyTo(E,new S(4.7,Ge+1.02,-1.7),.6),or.remove(E)),tt.drop()})}),await De.add("condolences",x),De.bump("condolences"),_.counters.condolences=(_.counters.condolences||0)+1,Tt(`${f} \uB2D8\uC758 ${Zt.phrase} \uBD09\uD22C\uB97C \uBD80\uC758\uD568\uC5D0 \uB123\uC5C8\uC2B5\uB2C8\uB2E4.
\uAE4A\uC740 \uC704\uB85C\uAC00 \uC720\uAC00\uC871\uAED8 \uC804\uD574\uC9C8 \uAC70\uC608\uC694.`),il("condolence"),lr(),_.role==="guest"&&!_.done.has("guestbook")&&setTimeout(()=>gt("\uBC29\uBA85\uB85D\uC5D0\uB3C4 \uC774\uB984\uC744 \uB0A8\uACA8 \uC8FC\uC138\uC694. \uC811\uC218\uB300\uC758 \u270D\uFE0F \uD45C\uC2DC\uB97C \uB204\uB974\uBA74 \uB3FC\uC694.",4e3),1200),_.ticket||(_.ticket=!0,De.setLocal("ticket",!0),setTimeout(Ay,2200))}}function ah(i,e,t){let n=i.dataset.label||i.textContent;i.dataset.label=n,i.textContent=e,i.classList.add("copied"),setTimeout(()=>{i.textContent=n,i.classList.remove("copied")},2600);let r=P("#pay-note");r||(r=document.createElement("p"),r.id="pay-note",r.className="pay-note",P("#pay-row").after(r)),r.innerHTML=t}function Ca(i){let e=r=>Array.isArray(r)?r:r&&typeof r=="object"?Object.values(r):[],t=e(i.family).filter(r=>r&&(r.name||r.relation));if(t.length)return t;let n=e(i.accounts).filter(r=>r&&r.name);return n.length?n.map(r=>({relation:"\uAE30\uD0C0",...r})):String(i.mourners||"").split(/[·,]/).map(r=>r.trim()).filter(Boolean).map(r=>{let[s,...a]=r.split(/\s+/);return qc.some(o=>o.id===s)?{relation:s,name:a.join(" ")}:{relation:"\uAE30\uD0C0",name:r}})}var ep=i=>[i.relation&&i.relation!=="\uAE30\uD0C0"?i.relation:"",i.name].filter(Boolean).join(" ");function Nd(i){return Ca(i).filter(e=>e.number).map(e=>({...e,name:ep(e)}))}function wy(i){let e=Ca(i);return e.length?e.map(t=>`<span class="fam"><i>${Me(t.relation||"")}</i>${Me(t.name||"")}</span>`).join(""):Me(i.mourners||"-")}function Ay(){P("#ticket-name").textContent=`\u6545 ${_.memorial.deceased.name} \uB2D8 \uBE48\uC18C`,P("#ticket-guest").textContent=_.me.name||"";let i=P("#dlg-ticket");dn(i),i.onclose=()=>{i.returnValue==="go"&&xh()}}function Ry(){let i=0,e=1/0;return le.tables.forEach((t,n)=>{let r=Math.hypot(q.pos.x-t.seat.x,q.pos.z-t.seat.z);for(let s of _.others.values())Math.hypot(s.x-t.seat.x,s.z-t.seat.z)<.6&&(r+=50);r<e&&(e=r,i=n)}),i}function xh(){X0(Ry())}function X0(i){fn(async()=>{let e=le.tables[i],t=e.seat;for(let r of _.others.values())Math.hypot(r.x-t.x,r.z-t.z)<.6&&(t=e.seat2);if(!await Jt(t))return;q.wantFace=t.face,q.avatar.hold="sit",jn("sit"),await hi(400),P("#meal-ticket").innerHTML=_.ticket?'<span class="ticket-ok">\u{1F3AB} \uC2DD\uAD8C\uC774 \uC788\uC5B4\uC694 \xB7 \uBB34\uC5C7\uC774\uB4E0 \uB4DC\uC138\uC694</span>':'<span class="ticket-no">\u{1F3AB} \uBD80\uC758\uD568\uC5D0 \uB9C8\uC74C\uC744 \uC804\uD558\uC2DC\uBA74 \uC2DD\uAD8C\uC744 \uB4DC\uB824\uC694. \uCEE4\uD53C\uBBF9\uC2A4\uC640 \uC2DD\uD61C\uB294 \uB204\uAD6C\uB098 \uB4DC\uC2E4 \uC218 \uC788\uC5B4\uC694.</span>',P("#meal-choices").innerHTML=_d.map(r=>{let s=r.ticket&&!_.ticket;return`<button type="button" class="card-choice meal${s?" locked":""}" data-meal="${r.id}"><span class="food-ic">${r0[r.id]||r.icon}</span><strong>${r.label}</strong>${s?"<small>\u{1F512} \uC2DD\uAD8C</small>":""}</button>`}).join("");let n=P("#dlg-meal");P("#meal-choices").onclick=async r=>{let s=r.target.closest("[data-meal]");if(!s)return;let a=_d.find(c=>c.id===s.dataset.meal);if(a.ticket&&!_.ticket){gt("\uC2DD\uAD8C\uC740 \uBD80\uC758\uD568\uC5D0 \uC870\uC758\uAE08\uC744 \uB123\uC73C\uBA74 \uBC1B\uC744 \uC218 \uC788\uC5B4\uC694.",3200),P("#meal-go-donation").hidden=!1;return}n.close(),Cy(e,a),jn("eat"),await q.avatar.play("eat",c=>{c==="bite"&&tt.tone(520+Math.random()*120,.08,{gain:.05})}),q.avatar.hold="sit",_.meals++;let o=a.id==="yukgaejang"&&_.servedYuk;a.id==="yukgaejang"&&(_.servedYuk=!0),Tt(o?"\u201C\uB354 \uB4DC\uC138\uC694~\u201D \uB3C4\uC6B0\uBBF8 \uC774\uBAA8\uB2D8\uC774 \uC721\uAC1C\uC7A5\uC744 \uD55C \uAD6D\uC790 \uB354 \uB5A0 \uC8FC\uC168\uC5B4\uC694.":a.line,4800),a.id==="soju"&&gt("\u{1F376} \uC7A5\uB840\uC2DD\uC7A5\uC5D0\uC11C\uB294 \uC794\uC744 \uBD80\uB52A\uCE58\uC9C0 \uC54A\uC544\uC694.",3200),De.bump("meals"),_.counters.meals=(_.counters.meals||0)+1,il("meal"),lr()},P("#meal-go-donation").hidden=!0,P("#meal-go-donation").onclick=()=>{n.close(),un("donation")},dn(n)})}function Cy(i,e){for(;i.dishes.children.length>3;)i.dishes.remove(i.dishes.children[0]);let t=s0(e.id);if(t.position.set(-.55+i.dishes.children.length%4*.34,.42,.16),i.dishes.add(t),e.id==="yukgaejang"||e.id==="coffee"){let n=[];for(let a=0;a<6;a++){let o=new Ji(new Ei({color:"#ffffff",transparent:!0,opacity:0,depthWrite:!1}));o.raycast=()=>{},o.scale.setScalar(.08),t.add(o),n.push({sp:o,o:a/6})}let r=performance.now(),s=()=>{let a=(performance.now()-r)/1e3;n.forEach(o=>{let c=(a*.5+o.o)%1;o.sp.position.set(Math.sin(c*6+o.o*9)*.04,.08+c*.4,0),o.sp.material.opacity=Math.sin(c*Math.PI)*.35,o.sp.scale.setScalar(.06+c*.12)}),a<40&&t.parent&&requestAnimationFrame(s)};s()}}function Py(){let i=P("#form-greet"),e=_.me.religion==="traditional"||_.me.religion==="buddhist"?"bow":"nod";dt("#greet-ways [data-way]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.way===e)),P("#greet-ways").onclick=n=>{let r=n.target.closest("[data-way]");r&&(e=r.dataset.way,dt("#greet-ways [data-way]").forEach(s=>s.setAttribute("aria-pressed",s===r)))},i.words.value="",Kd(P("#greet-words"),Em,i.words);let t=P("#dlg-greet");dn(t),t.onclose=async()=>{t.returnValue==="ok"&&await fn(()=>$0(e,i.words.value.trim()))}}async function $0(i,e){e=e||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.",q.wantFace=le.GREET_SPOT.face,await hi(300),jn(i),Tt(i==="bow"?"\uC0C1\uC8FC\uC640 \uB9C8\uC8FC \uBCF4\uACE0 \uD568\uAED8 \uC808\uD569\uB2C8\uB2E4 (\uB9DE\uC808).":"\uC0C1\uC8FC\uAED8 \uC815\uC911\uD788 \uC778\uC0AC\uB4DC\uB9BD\uB2C8\uB2E4.",3e3),await Promise.all([q.avatar.play(i),...P0().map((n,r)=>r===0?n.play(i==="shake"?"shake":i):hi(r*120).then(()=>n.play(i==="shake"?"nod":i)))]),gh(e),await hi(1900);let t=["\uC640 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.","\uBA3C \uAE38 \uC640 \uC8FC\uC154\uC11C \uACE0\uB9D9\uC2B5\uB2C8\uB2E4.","\uACE0\uC778\uAED8\uC11C\uB3C4 \uBC18\uAC00\uC6CC\uD558\uC2E4 \uAC70\uC608\uC694.","\uB9C8\uC74C \uC368 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4."];ms(le.hostNpc.root,$v(t),4200,!1,le.hostNpc.height),le.hostNpc.play("nod"),De.bump("greetings"),il("greet"),await hi(1200),await Jt({x:le.GREET_SPOT.x-1.3,z:le.GREET_SPOT.z+.4,face:le.GREET_SPOT.face})}async function tp(){if(_.busy||q.avatar.busy){gt("\uC7A0\uC2DC\uB9CC\uC694, \uD558\uB358 \uB3D9\uC791\uC744 \uB9C8\uCE58\uB294 \uC911\uC774\uC5D0\uC694.");return}let i=Ci[_.me.religion];_.auto=!0,P("#next-cta").hidden=!0,Tt(`\uC870\uBB38\uC744 \uC21C\uC11C\uB300\uB85C \uC2DC\uC791\uD569\uB2C8\uB2E4.
\uCC9C\uCC9C\uD788 \uB530\uB77C\uC640 \uC8FC\uC138\uC694.`,3e3);try{for(let t of i.auto){if(!_.auto)return;await Ra(t),await hi(600)}if(!_.auto)return;let e=_.me.religion==="traditional"||_.me.religion==="buddhist"?"bow":"nod";Tt("\uC774\uC81C \uC0C1\uC8FC\uAED8 \uC778\uC0AC\uB4DC\uB9AC\uB7EC \uAC11\uB2C8\uB2E4.",2400),await fn(async()=>{await Jt(le.GREET_SPOT)&&await $0(e)}),Tt("\uC870\uBB38\uC744 \uB9C8\uCCE4\uC5B4\uC694. \uBC29\uBA85\uB85D\uACFC \uC870\uC758\uAE08\uC740 \uC544\uB798 \u2018\uB2E4\uC74C \uD560 \uC77C\u2019\uB85C \uC774\uC5B4\uC11C \uD560 \uC218 \uC788\uC5B4\uC694.",5200)}finally{_.auto=!1,Jd()}}var q0="warm";P("#lantern-colors").onclick=i=>{let e=i.target.closest("[data-color]");e&&(q0=e.dataset.color,dt("#lantern-colors [data-color]").forEach(t=>t.setAttribute("aria-pressed",t===e)))};function Iy(){let i=P("#form-lantern");i.name.value=i.name.value||_.me.name||"";let e=P("#dlg-lantern");P("#lantern-presets").innerHTML=Mm.map(t=>`<button type="button">${Me(t)}</button>`).join(""),P("#lantern-presets").onclick=t=>{let n=t.target.closest("button");n&&(i.text.value=n.textContent,e.close("ok"))},dn(e),e.onclose=async()=>{if(e.returnValue!=="ok")return;let t={text:i.text.value.trim().slice(0,120),name:i.name.value.trim().slice(0,16),color:q0};if(!t.text){gt("\uD55C \uB9C8\uB514\uB97C \uACE0\uB974\uAC70\uB098 \uC9C1\uC811 \uC368 \uC8FC\uC138\uC694.");return}i.text.value="";let n=await De.add("lanterns",t);_.lanterns.push(n),le.addLantern(n,q.pos.clone().add(new S(0,1.6,0))),q.avatar.play("wave",null,{soft:!0}),jn("wave"),tt.chime(.16),setTimeout(()=>tt.chime(.1),600),Tt(`\uB4F1\uBD88\uC774 \uCC9C\uCC9C\uD788 \uD558\uB298\uB85C \uC62C\uB77C\uAC11\uB2C8\uB2E4.
\uBE48\uC18C \uC704 \uD558\uB298\uC5D0\uC11C \uACE0\uC778 \uACC1\uC744 \uBC1D\uD600 \uC904 \uAC70\uC608\uC694.`,5e3),lr()}}function Ly(i){Qo(`<p class="memory">${Me(i.text)}</p><p class="memory-by">${i.name?`\u2014 ${Me(i.name)}`:"\u2014 \uC774\uB984 \uC5C6\uC774 \uB744\uC6B4 \uB4F1\uBD88"}</p>`)}function Dy(i){if(i){if(i.anon){Qo('<p class="memory">\uC870\uBB38\uAC1D \uD55C \uBD84\uC774 \uB0A8\uAE34 \uB9C8\uC74C\uC774\uC5D0\uC694.</p><p class="memory-by">\uBC29\uBA85\uB85D \uB0B4\uC6A9\uC740 \uAC1C\uC778\uC815\uBCF4\uB77C \uC0C1\uC8FC\uB9CC \uBCFC \uC218 \uC788\uC5B4\uC694.</p>');return}Qo(`${i.relation?`<span class="rel">${Me(i.relation)}</span>`:""}<p class="memory">${Me(i.message||"\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4.")}</p><p class="memory-by">\u2014 ${Me(i.name)}${i.time?` \xB7 ${wa(i.time)}`:""}</p>`)}}var v0=["\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4","\uADF9\uB77D\uC655\uC0DD\uC744 \uAE30\uC6D0\uD569\uB2C8\uB2E4","\uC8FC\uB2D8\uC758 \uD488\uC5D0\uC11C \uC601\uC6D0\uD55C \uC548\uC2DD\uC744","\uD558\uB098\uB2D8\uC758 \uC704\uB85C\uAC00 \uD568\uAED8\uD558\uC2DC\uAE38","\uAE4A\uC740 \uC560\uB3C4\uB97C \uD45C\uD569\uB2C8\uB2E4","\uADF8\uB9AC\uC6B4 \uB9C8\uC74C\uC744 \uB2F4\uC544"],Ny=[{id:"white",label:"\uD770 \uAD6D\uD654"},{id:"mixed",label:"\uD770\xB7\uB178\uB780 \uAD6D\uD654"},{id:"yellow",label:"\uB178\uB780 \uAD6D\uD654"},{id:"pink",label:"\uC5F0\uBD84\uD64D"}];function Uy(){let i=P("#form-wreath"),e="white",t=v0[_.memorial.religion==="buddhist"?1:_.memorial.religion==="christian"||_.memorial.religion==="catholic"?2:0];i.from.value=i.from.value||"",P("#wr-styles").innerHTML=Ny.map(s=>`<button type="button" class="chip" data-st="${s.id}" aria-pressed="${s.id===e}">${s.label}</button>`).join(""),P("#wr-phrases").innerHTML=v0.map(s=>`<button type="button" class="chip" data-wp="${Me(s)}" aria-pressed="${s===t}">${Me(s)}</button>`).join("");let n=()=>{P("#wr-disc").src=Oo(e).toDataURL("image/png"),P("#wr-left").textContent=t,P("#wr-right").textContent=i.from.value.trim()||"\uBCF4\uB0B4\uB294 \uBD84",dt("[data-st]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.st===e)),dt("[data-wp]").forEach(s=>s.setAttribute("aria-pressed",s.dataset.wp===t))};P("#wr-styles").onclick=s=>{let a=s.target.closest("[data-st]");a&&(e=a.dataset.st,n())},P("#wr-phrases").onclick=s=>{let a=s.target.closest("[data-wp]");a&&(t=a.dataset.wp,n())},i.from.oninput=n,n();let r=P("#dlg-wreath");dn(r),r.onclose=async()=>{if(r.returnValue!=="ok")return;let s=i.from.value.trim().slice(0,20);if(!s)return;let a=await De.add("wreaths",{from:s,phrase:t,style:e});_.wreaths.push(a),le.setWreaths(np()),tt.chime(.12),Tt(`\u201C${s}\u201D \uADFC\uC870\uD654\uD658\uC774 \uBE48\uC18C \uC785\uAD6C\uC5D0 \uC138\uC6CC\uC84C\uC5B4\uC694.
\uC785\uAD6C \uCABD\uC744 \uBC14\uB77C\uBD10 \uC8FC\uC138\uC694.`,4600),fn(async()=>{await Jt({x:0,z:6.5,face:Math.PI})}),jn("nod")}}function np(){return[...Qd()&&_.wreaths.length<2?_.memorial.demoSeeds?.wreaths||[]:[],..._.wreaths]}function ky(i){i&&Qo(`<div class="wreath-view"><img src="${Oo(i.style||"white").toDataURL("image/png")}" alt=""><div class="ribbons"><span>${Me(i.phrase)}</span><span>${Me(i.from)}</span></div></div><p class="memory-by">${Me(i.from)} \uB2D8\uC774 \uBCF4\uB0B8 \uADFC\uC870\uD654\uD658${i.time?` \xB7 ${wa(i.time)}`:""}</p>`)}var y0=Math.floor(Math.random()*Xc.length);function By(){le.helper.play("nod",null,{soft:!0});let i=()=>{P("#tip-text").textContent=Xc[y0%Xc.length],y0++};i(),ms(le.helper.root,"\uAD81\uAE08\uD55C \uC810\uC740 \uC5B8\uC81C\uB4E0 \uBB3C\uC5B4\uBCF4\uC2ED\uC2DC\uC624.",3200),P("#tip-next").onclick=i,P("#tip-guide").onclick=()=>{P("#dlg-tip").close(),_.role==="guest"&&(P("#guide").hidden=!1)},dn(P("#dlg-tip"))}var Y0=new rh(P("#theater"),{onOpen:()=>{document.body.classList.add("theater-on")},onClose:()=>{document.body.classList.remove("theater-on")}});function vs(i=null){let e=I0();i!=null&&e.length&&(i=i%e.filter(t=>t.type==="image").length),tt.ensure(),!_.entered&&tt.trackId==="none"&&bh(),Y0.open(_.memorial.gallery||[],{title:`\u6545 ${_.memorial.deceased.name}`,sub:jd(),greeting:_.memorial.thanks,portrait:Aa(),start:i!=null&&e.length?i:null})}function Fy(){P("#done-thanks").textContent=_.memorial.thanks||"",P("#done-sign").textContent=`\u2014 ${_.memorial.mourners||_.memorial.hostName||"\uC0C1\uC8FC"} \uB4DC\uB9BC`,le.hostNpc.play("halfBow"),dn(P("#dlg-done"))}P("#done-lantern").onclick=()=>{P("#dlg-done").close(),un("lantern")};function Z0(){fn(async()=>{jn("halfBow"),Tt(_.memorial.thanks||"\uC640 \uC8FC\uC154\uC11C \uAC10\uC0AC\uD569\uB2C8\uB2E4.",5e3),await q.avatar.play("halfBow")})}var J0=[{id:"nod",icon:"\u{1F642}",label:"\uBAA9\uB840",line:"{me} \uB2D8\uC774 \uBAA9\uB840\uD588\uC5B4\uC694"},{id:"shake",icon:"\u{1F91D}",label:"\uC545\uC218",line:"{me} \uB2D8\uC774 \uC190\uC744 \uC7A1\uC544 \uC8FC\uC168\uC5B4\uC694"},{id:"pat",icon:"\u{1FAF6}",label:"\uD1A0\uB2E5\uD1A0\uB2E5",line:"{me} \uB2D8\uC774 \uD1A0\uB2E5\uD1A0\uB2E5 \uC704\uB85C\uD574 \uC8FC\uC168\uC5B4\uC694"},{id:"hug",icon:"\u{1FAC2}",label:"\uC548\uC544 \uC8FC\uAE30",line:"{me} \uB2D8\uC774 \uAF2D \uC548\uC544 \uC8FC\uC168\uC5B4\uC694"},{id:"bow",icon:"\u{1F647}",label:"\uB9DE\uC808",line:"{me} \uB2D8\uC774 \uB9DE\uC808\uC744 \uCCAD\uD588\uC5B4\uC694"}];function Oy(i){let e=_.others.get(i);if(!e)return;P("#other-name").textContent=`${e.name} \uB2D8${e.relation?` \xB7 ${e.relation}`:""}`,P("#other-acts").innerHTML=J0.map(n=>`<button type="button" class="card-choice" data-oa="${n.id}"><span class="ic">${n.icon}</span><strong>${n.label}</strong></button>`).join(""),Kd(P("#other-words"),["\uC624\uB79C\uB9CC\uC774\uC5D0\uC694","\uB9C8\uC74C\uC774 \uB9CE\uC774 \uC544\uD504\uC2DC\uC8E0","\uD798\uB0B4\uC138\uC694","\uC5F0\uB77D \uC790\uC8FC \uD574\uC694"],P("#other-say")),P("#other-say").value="";let t=P("#dlg-other");P("#other-acts").onclick=n=>{let r=n.target.closest("[data-oa]");r&&(t.close(),x0(i,r.dataset.oa,P("#other-say").value))},P("#other-send").onclick=()=>{t.close(),x0(i,null,P("#other-say").value)},dn(t)}function x0(i,e,t){let n=_.others.get(i);n&&fn(async()=>{let r=n.av.root.position,s=q.pos.x-r.x,a=q.pos.z-r.z,o=Math.hypot(s,a)||1,c={x:r.x+s/o*.95,z:r.z+a/o*.95,face:Math.atan2(-s,-a)};o>1.2&&!await Jt(c)||(q.wantFace=Math.atan2(r.x-q.pos.x,r.z-q.pos.z),await hi(300),e&&(_.ix={to:i,type:e,s:(_.ix?.s||0)+1},jn(e),await q.avatar.play(e)),t?.trim()&&gh(t))})}function K0(i,e){let t=J0.find(n=>n.id===e.type);if(t&&(gt(`${t.icon} ${t.line.replace("{me}",i.name)}`,3600),tt.soft(),!_.busy&&!q.avatar.busy)){q.wantFace=Math.atan2(i.av.root.position.x-q.pos.x,i.av.root.position.z-q.pos.z);let n={pat:"nod",nod:"nod",shake:"shake",hug:"hug",bow:"bow"}[e.type];setTimeout(()=>{q.avatar.play(n,null,{soft:!0}),jn(n)},500)}}function Hy(){let i=_.memorial.funeral?.departureAt;if(!i)return"";let e=new Date(i).getTime();if(Number.isNaN(e))return"";let t=e-Date.now();if(t<=0)return"\uBC1C\uC778\uC744 \uB9C8\uCCE4\uC2B5\uB2C8\uB2E4";let n=Math.floor(t/36e5);return n>=24?`\uBC1C\uC778\uAE4C\uC9C0 ${Math.floor(n/24)}\uC77C ${n%24}\uC2DC\uAC04`:n>=1?`\uBC1C\uC778\uAE4C\uC9C0 ${n}\uC2DC\uAC04`:`\uBC1C\uC778\uAE4C\uC9C0 ${Math.ceil(t/6e4)}\uBD84`}function lr(){if(!_.memorial)return;let i=_.counters,e=[];De.remote&&_.others&&e.push(`<span class="stat live">\uC9C0\uAE08 \uD568\uAED8<b>${_.others.size+1}\uBA85</b></span>`);let t=Hy();t&&e.push(`<span class="stat">\u23F3 ${t}</span>`);let n=mh();e.push(n>0?`<button type="button" class="stat incense${n<.2?" low":""}" data-stat="incense">\u{1F525} \uD5A5<b>${Math.ceil(n*eh)}\uBD84</b></button>`:'<button type="button" class="stat incense out" data-stat="incense">\u{1F525} \uD5A5\uC774 \uAEBC\uC84C\uC5B4\uC694<b>\uC0C8 \uD5A5 \uC62C\uB9AC\uAE30</b></button>'),e.push(`<span class="stat">\uC870\uBB38<b>${(i.visits||0).toLocaleString()}</b></span>`),e.push(`<span class="stat">\u{1F33C}<b>${(i.flowers||0).toLocaleString()}</b></span>`),P("#stats").innerHTML=e.join("")}P("#stats").onclick=i=>{i.target.closest('[data-stat="incense"]')&&_.entered&&Ra("incense")};function _h(){le.setIncense(_.counters.incense||0,mh()),lr()}setInterval(_h,15e3);var Gy={day:"\uB0AE",dusk:"\uB178\uC744",night:"\uBC24"};function Q0(){P("#btn-time").textContent=Gy[_.time]}P("#btn-time").onclick=()=>{_.time={day:"dusk",dusk:"night",night:"day"}[_.time],le.setTime(_.time),Q0()};P("#btn-help").onclick=()=>dn(P("#dlg-help"));P("#chip-obit").onclick=()=>{Qo(`<div class="obit"><figure class="obit-photo"><img src="${Aa()}" alt=""></figure><div class="obit-text"><p class="obit-kicker">\uC0BC\uAC00 \uACE0\uC778\uC758 \uBA85\uBCF5\uC744 \uBE55\uB2C8\uB2E4</p><h1>\u6545 ${Me(_.memorial.deceased.name)}</h1><p class="obit-dates">${Me(jd())}</p><dl class="obit-meta"><div><dt>\uC0C1\uC8FC</dt><dd>${Me(_.memorial.mourners||"-")}</dd></div><div><dt>\uBC1C\uC778</dt><dd>${Me(_.memorial.funeral?.departure||"-")}</dd></div><div><dt>\uC7A5\uC9C0</dt><dd>${Me(_.memorial.funeral?.burial||"-")}</dd></div></dl></div></div>${_.memorial.greeting?`<p class="obit-greeting">${Me(_.memorial.greeting)}</p>`:""}<p><button type="button" class="btn-primary" id="view-theater">\u{1F39E}\uFE0F \uCD94\uC5B5 \uC0C1\uC601\uAD00</button></p>`),P("#view-theater").onclick=()=>{P("#dlg-view").close(),vs()}};P("#btn-host").onclick=()=>rp();var oh=null;P("#btn-look").onclick=()=>{let i=_.role==="host";(!oh||oh.who!==(i?"host":"guest"))&&(oh?.dispose(),oh=new Ea(P("#look-body"),{look:i?_.memorial.hostLook:_.me.look,outfit:i?_.memorial.hostOutfit:_.me.outfit,who:i?"host":"guest",onChange:(e,t)=>{i?(_.memorial.hostLook=e,_.memorial.hostOutfit=t,Cn()):(_.me.look=e,_.me.outfit=t,Wd()),q.avatar.setOutfit(t),q.avatar.setLook(e)}})),dn(P("#dlg-look"))};function zy(){let i=De.getLocal("bgmPick",null);return i&&i.host===_.memorial.bgm?i.id:_.memorial.bgm||"wind"}function bh(){tt.play(zy(),_.memorial.customBgm),P("#btn-music")&&(P("#btn-music").textContent=`\u{1F3B5} ${xa[tt.trackId]?.label||"\uC74C\uC545"}`)}P("#btn-music").onclick=()=>{let i=tt.trackId;P("#music-list").innerHTML=Object.entries(xa).filter(([e])=>e!=="custom"||_.memorial.customBgm).map(([e,t])=>`
    <button type="button" class="card-choice" data-bgm="${e}" aria-pressed="${i===e}"><span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small></button>`).join(""),P("#vol-music").value=tt.musicVol,P("#vol-sfx").value=tt.sfxVol,dn(P("#dlg-music"))};P("#music-list").onclick=i=>{let e=i.target.closest("[data-bgm]");e&&(tt.play(e.dataset.bgm,_.memorial.customBgm),De.setLocal("bgmPick",{id:e.dataset.bgm,host:_.memorial.bgm}),dt("#music-list [data-bgm]").forEach(t=>t.setAttribute("aria-pressed",t===e)),P("#btn-music").textContent=`\u{1F3B5} ${xa[e.dataset.bgm].label}`)};P("#vol-music").oninput=i=>tt.setMusicVolume(+i.target.value);P("#vol-sfx").oninput=i=>tt.setSfxVolume(+i.target.value);async function eg(i,{w:e,h:t,max:n=1200,q:r=.84}){let s=URL.createObjectURL(i);try{let a=await new Promise((f,v)=>{let m=new Image;m.onload=()=>f(m),m.onerror=v,m.src=s}),o=0,c=0,l=a.naturalWidth,h=a.naturalHeight,u,d;if(e&&t){let f=e/t;if(l/h>f){let v=h*f;o=(l-v)/2,l=v}else{let v=l/f;c=(h-v)/2,h=v}u=e,d=t}else{let f=Math.min(1,n/Math.max(l,h));u=Math.round(l*f),d=Math.round(h*f)}let p=document.createElement("canvas");return p.width=u,p.height=d,p.getContext("2d").drawImage(a,o,c,l,h,0,0,u,d),p.toDataURL("image/jpeg",r)}finally{URL.revokeObjectURL(s)}}function Cn(){De.saveDraft(_.memorial)||gt("\uC800\uC7A5 \uACF5\uAC04\uC774 \uBD80\uC871\uD574\uC694. \uC0AC\uC9C4 \uC218\uB97C \uC904\uC5EC \uC8FC\uC138\uC694.",4e3),_.role==="host"&&Vy()}var tg=["family","deceased","mourners","funeral","greeting","thanks","religion","theme","bgm","customBgm","hostOutfit","hostLook","hostName","accounts","account","kakaopayLink","toss"],_0=0,b0="";function Vy(){clearTimeout(_0),_0=setTimeout(async()=>{let i=De.getLocal("hostKey","");if(!De.remote)return;if(!i){gt("\uC0C1\uC8FC \uC804\uC6A9 \uB9C1\uD06C\uB85C \uB4E4\uC5B4\uC640\uC57C \uB2E4\uB978 \uC870\uBB38\uAC1D \uD654\uBA74\uC5D0\uB3C4 \uBC14\uB85C \uBC18\uC601\uB3FC\uC694.",4e3);return}let e=_.memorial,t={portrait:e.portrait||"",gallery:e.gallery||[]},n=`${t.portrait.length}:${JSON.stringify(t.gallery).length}:${t.portrait.slice(-40)}`,r=n!==b0&&JSON.stringify(t).length<6e6,s={v:Date.now(),mv:r?Date.now():_.liveMv||0};for(let a of tg)e[a]!==void 0&&(s[a]=e[a]);await De.publishLive(i,s,r?t:null)&&(r&&(b0=n,_.liveMv=s.mv),P("#live-status")&&(P("#live-status").textContent=`\u2705 ${wa(Date.now())} \uBAA8\uB4E0 \uC870\uBB38\uAC1D \uD654\uBA74\uC5D0 \uBC18\uC601\uB428`))},1e3)}async function ng(i=!1){if(!De.remote||_.role==="host"||document.hidden)return;let e=await De.liveMeta();if(!e||e.v===_.liveV)return;_.liveV=e.v;let t=_.memorial.theme,n=_.memorial.bgm,r=s=>Array.isArray(s)?s:s&&typeof s=="object"?Object.values(s):[];e.accounts&&(e.accounts=r(e.accounts)),e.family&&(e.family=r(e.family));for(let s of tg)e[s]!==void 0&&(_.memorial[s]=e[s]);if(e.mv&&e.mv!==_.liveMvSeen){let s=await De.liveMedia();s&&(_.liveMvSeen=e.mv,s.portrait&&(_.memorial.portrait=s.portrait),_.memorial.gallery=rr(r(s.gallery)))}ti(),_.entered&&qd(),!i&&_.entered&&n!==_.memorial.bgm&&(bh(),gt(`\uC0C1\uC8FC\uAC00 \uC74C\uC545\uC744 \u201C${xa[_.memorial.bgm]?.label||""}\u201D(\uC73C)\uB85C \uBC14\uAFE8\uC5B4\uC694.`,3e3)),!i&&_.entered&&t!==_.memorial.theme&&gt(`\uC0C1\uC8FC\uAC00 \uBE48\uC18C\uB97C \u201C${Rr[_.memorial.theme]?.label}\u201D(\uC73C)\uB85C \uBC14\uAFE8\uC5B4\uC694.`,3200)}var M0=null,Wy=["\uC77C","\uC6D4","\uD654","\uC218","\uBAA9","\uAE08","\uD1A0"];function Yo(i){let e=String(i||"").match(/(\d{3,4})\D+(\d{1,2})\D+(\d{1,2})/);return e?{y:+e[1],m:+e[2],d:+e[3]}:null}var Gd=i=>`${String(i.y).padStart(4,"0")}-${String(i.m).padStart(2,"0")}-${String(i.d).padStart(2,"0")}`;function jy(i){let e=new Date(i);if(Number.isNaN(e.getTime()))return"";let t=e.getHours(),n=e.getMinutes();return`${e.getMonth()+1}\uC6D4 ${e.getDate()}\uC77C(${Wy[e.getDay()]}) ${t<12?"\uC624\uC804":"\uC624\uD6C4"} ${t%12||12}\uC2DC${n?` ${n}\uBD84`:""}`}function Xy(i,e){if(!i||!e)return"";let t=e.y-i.y;return(e.m<i.m||e.m===i.m&&e.d<i.d)&&t--,t>=0&&t<150?String(t):""}function $y(){for(let e of dt("[data-ymd]")){let t=e.dataset.ymd,n=Yo(t==="funeral.departureDay"?_.memorial.funeral?.departureAt:T0(_.memorial,t));e.querySelector('[data-p="y"]').value=n?.y||"",e.querySelector('[data-p="m"]').value=n?.m||"",e.querySelector('[data-p="d"]').value=n?.d||"",e.querySelector('[data-p="pick"]').value=n?Gd(n):""}let i=_.memorial.funeral?.departureAt||"";/T\d\d:\d\d/.test(i)&&(P("#dep-time").value=i.slice(11,16)),P("#dep-preview").textContent=_.memorial.funeral?.departure||"-"}function qy(i){let e=+i.querySelector('[data-p="y"]').value,t=+i.querySelector('[data-p="m"]').value,n=+i.querySelector('[data-p="d"]').value;return e>0&&t>=1&&t<=12&&n>=1&&n<=31?{y:e,m:t,d:n}:null}function ig(i,e){if(e){let r=i.querySelector('[data-p="pick"]').value,s=Yo(r);if(!s)return;i.querySelector('[data-p="y"]').value=s.y,i.querySelector('[data-p="m"]').value=s.m,i.querySelector('[data-p="d"]').value=s.d}let t=qy(i);if(!t)return;i.querySelector('[data-p="pick"]').value=Gd(t);let n=i.dataset.ymd;if(n==="funeral.departureDay"){let r=`${Gd(t)}T${P("#dep-time").value||"07:00"}`;_.memorial.funeral={..._.memorial.funeral||{},departureAt:r,departure:jy(r)},P("#dep-preview").textContent=_.memorial.funeral.departure}else{w0(_.memorial,n,`${t.y}. ${t.m}. ${t.d}.`);let r=Xy(Yo(_.memorial.deceased?.birth),Yo(_.memorial.deceased?.death));r&&(_.memorial.deceased.age=r,P('#host-form [name="deceased.age"]').value=r)}Cn(),ti({theme:!1})}dt("[data-ymd]").forEach(i=>{i.addEventListener("input",e=>{e.stopPropagation();let t=e.target;t.dataset.p==="y"&&t.value.length===4&&i.querySelector('[data-p="m"]').focus(),t.dataset.p==="m"&&(t.value.length===2||+t.value>1)&&i.querySelector('[data-p="d"]').focus(),ig(i,t.dataset.p==="pick")})});P("#dep-time").addEventListener("input",i=>{i.stopPropagation(),ig(P('[data-ymd="funeral.departureDay"]'),!1)});function Yy(){let i=P("#host-form");for(let e of i.elements){if(!e.name)continue;let t=T0(_.memorial,e.name);e.type==="checkbox"?e.checked=!!t:e.value=t??""}$y(),ip(),P("#host-portrait").src=Aa(),Eh(),rg(),P("#host-themes").innerHTML=Object.entries(Rr).map(([e,t])=>`<button type="button" class="card-choice" data-theme="${e}" aria-pressed="${_.memorial.theme===e}"><span class="ic">${t.icon}</span><strong>${t.label}</strong><small>${t.desc}</small></button>`).join(""),P("#host-bgms").innerHTML=Object.entries(xa).map(([e,t])=>`<button type="button" class="chip" data-hbgm="${e}" aria-pressed="${_.memorial.bgm===e}">${t.icon} ${t.label}</button>`).join(""),M0||(M0=new Ea(P("#host-look"),{look:_.memorial.hostLook,outfit:_.memorial.hostOutfit,who:"host",onChange:(e,t)=>{_.memorial.hostLook=e,_.memorial.hostOutfit=t,Cn(),ti({theme:!1})}}))}function Dr(){return(!Array.isArray(_.memorial.family)||!_.memorial.family.length)&&(_.memorial.family=Ca(_.memorial).map(i=>({...i}))),_.memorial.family}function Mh(){_.memorial.mourners=Dr().map(ep).filter(Boolean).join(" \xB7 "),Cn(),ti({theme:!1})}function ip(){let i=Dr(),e=t=>qc.map(n=>`<option ${n.id===t?"selected":""}>${n.id}</option>`).join("");P("#family-edit").innerHTML=i.map((t,n)=>`
    <div class="fam-edit">
      <select data-fi="${n}" data-fk="relation">${e(t.relation)}</select>
      <input data-fi="${n}" data-fk="name" value="${Me(t.name||"")}" placeholder="\uC774\uB984 (\uC608: \uC774OO)">
      <button type="button" class="btn-ghost" data-fam-del="${n}" aria-label="\uC9C0\uC6B0\uAE30">\xD7</button>
    </div>`).join("")||'<p class="tip">\uC544\uC9C1 \uC720\uAC00\uC871\uC774 \uC5C6\uC5B4\uC694. \uC544\uB798 \uBC84\uD2BC\uC73C\uB85C \uCD94\uAC00\uD574 \uC8FC\uC138\uC694.</p>'}P("#fam-add").onclick=()=>{let i=Dr(),e=new Set(i.map(n=>n.relation)),t=["\uC7A5\uB0A8","\uC7A5\uB140","\uCC28\uB0A8","\uCC28\uB140","\uC0BC\uB0A8","\uC0BC\uB140","\uBA70\uB290\uB9AC","\uC0AC\uC704","\uC190\uC790","\uC190\uB140"].find(n=>!e.has(n))||"\uAE30\uD0C0";i.push({relation:t,name:""}),ip(),Mh(),setTimeout(()=>P(`#family-edit [data-fi="${i.length-1}"][data-fk="name"]`)?.focus(),50)};P("#family-edit").addEventListener("click",i=>{let e=i.target.closest("[data-fam-del]");e&&(Dr().splice(+e.dataset.famDel,1),ip(),Mh())});P("#family-edit").addEventListener("input",i=>{i.stopPropagation();let e=i.target;e.dataset.fi&&(Dr()[+e.dataset.fi][e.dataset.fk]=e.value,Mh())});P("#family-edit").addEventListener("change",i=>{i.target.tagName==="SELECT"&&(i.stopPropagation(),Dr()[+i.target.dataset.fi].relation=i.target.value,Mh())});function rg(){let i=Dr();P("#accounts-edit").innerHTML=i.map((e,t)=>`
    <div class="acc-card">
      <p><b>${Me(e.relation||"")}</b> ${Me(e.name||"(\uC774\uB984 \uC5C6\uC74C)")}</p>
      <div class="acc-edit">
        <input data-ai="${t}" data-ak="bank" value="${Me(e.bank||"")}" placeholder="\uC740\uD589">
        <input data-ai="${t}" data-ak="number" value="${Me(e.number||"")}" placeholder="\uACC4\uC88C\uBC88\uD638 (\uC5C6\uC73C\uBA74 \uBE44\uC6CC \uB450\uC138\uC694)" inputmode="numeric">
        <input data-ai="${t}" data-ak="holder" value="${Me(e.holder||"")}" placeholder="\uC608\uAE08\uC8FC">
        <input data-ai="${t}" data-ak="toss" value="${Me(e.toss||"")}" placeholder="\uD1A0\uC2A4 \uC544\uC774\uB514 (\uC120\uD0DD)">
        <input data-ai="${t}" data-ak="kakao" value="${Me(e.kakao||"")}" placeholder="\uCE74\uCE74\uC624\uD398\uC774 \uC1A1\uAE08 \uB9C1\uD06C (\uC120\uD0DD)">
      </div>
    </div>`).join("")||'<p class="tip">\u2018\uACE0\uC778 \xB7 \uBE48\uC18C\u2019 \uD0ED\uC5D0\uC11C \uC720\uAC00\uC871\uC744 \uBA3C\uC800 \uCD94\uAC00\uD574 \uC8FC\uC138\uC694.</p>'}function Eh(){let i=rr(_.memorial.gallery||[]);_.memorial.gallery=i,P("#gallery-edit").innerHTML=i.map((e,t)=>`
    <figure>
      ${e.type==="image"?`<img src="${e.src}" alt="\uCD94\uC5B5 ${t+1}">`:`<div class="vid-thumb">\u25B6 ${e.type==="youtube"?"YouTube":"\uC601\uC0C1"}</div>`}
      <input data-gi="${t}" data-gk="year" value="${Me(e.year)}" placeholder="\uC5F0\uB3C4" maxlength="10">
      <input data-gi="${t}" data-gk="caption" value="${Me(e.caption)}" placeholder="\uD55C \uC904 \uC124\uBA85" maxlength="40">
      <div class="g-tools"><button type="button" data-move="${t}" aria-label="\uC55E\uC73C\uB85C">\u25C0</button><button type="button" data-del="${t}" aria-label="\uC9C0\uC6B0\uAE30">\xD7</button></div>
    </figure>`).join("")||'<p class="tip">\uC544\uC9C1 \uC0AC\uC9C4\uC774 \uC5C6\uC5B4\uC694.</p>'}async function rp(){_.role==="host"&&(Yy(),sg(),og(),dn(P("#dlg-host")))}P("#host-tabs").onclick=i=>{let e=i.target.closest("[data-tab]");e&&(dt("#host-tabs [data-tab]").forEach(t=>t.setAttribute("aria-selected",t===e)),dt("#host-form [data-panel]").forEach(t=>{t.hidden=t.dataset.panel!==e.dataset.tab}),e.dataset.tab==="ledger"&&sg(),e.dataset.tab==="money"&&rg())};P("#host-form").addEventListener("input",i=>{let e=i.target;if(e.dataset.ai){Dr()[+e.dataset.ai][e.dataset.ak]=e.value,Cn();return}if(e.dataset.gi){_.memorial.gallery[+e.dataset.gi][e.dataset.gk]=e.value,Cn();return}if(e.name){if(w0(_.memorial,e.name,e.type==="checkbox"?e.checked:e.value),Cn(),ti(),e.name==="religion"){qd();let t=_m[e.value];t&&t!==_.memorial.theme&&(_.memorial.theme=t,Cn(),ti(),dt("#host-themes [data-theme]").forEach(n=>n.setAttribute("aria-pressed",n.dataset.theme===t)),gt(`${Ci[e.value].label}\uC5D0 \uB9DE\uCDB0 \u201C${Rr[t].label}\u201D \uBE48\uC18C\uB85C \uBC14\uAFE8\uC5B4\uC694. \uD14C\uB9C8\uB294 \uC544\uB798\uC5D0\uC11C \uB2E4\uC2DC \uACE0\uB97C \uC218 \uC788\uC5B4\uC694.`,4200))}e.name==="hostName"&&Fd&&(Fd.el.innerHTML=`<b>\uC0C1\uC8FC</b>${Me(e.value||"\uC0C1\uC8FC")}`),e.name==="customBgm"&&tt.trackId==="custom"&&tt.play("custom",e.value)}});P("#host-themes").onclick=i=>{let e=i.target.closest("[data-theme]");e&&(_.memorial.theme=e.dataset.theme,dt("#host-themes [data-theme]").forEach(t=>t.setAttribute("aria-pressed",t===e)),Cn(),ti(),gt(`${Rr[e.dataset.theme].label} \uBE48\uC18C\uB85C \uBC14\uAFE8\uC5B4\uC694.`))};P("#host-bgms").onclick=i=>{let e=i.target.closest("[data-hbgm]");e&&(_.memorial.bgm=e.dataset.hbgm,dt("#host-bgms [data-hbgm]").forEach(t=>t.setAttribute("aria-pressed",t===e)),Cn(),tt.play(e.dataset.hbgm,_.memorial.customBgm))};P("#file-portrait").onchange=async i=>{let e=i.target.files[0];e&&(_.memorial.portrait=await eg(e,{w:600,h:800,q:.86}),i.target.value="",Cn(),ti({theme:!1}),P("#host-portrait").src=Aa(),gt("\uC601\uC815 \uC0AC\uC9C4\uC744 \uBAA8\uC168\uC5B4\uC694."))};P("#file-gallery").onchange=async i=>{let e=rr(_.memorial.gallery||[]),t=[...i.target.files].slice(0,24-e.length);for(let n of t)e.push({type:"image",src:await eg(n,{max:1100,q:.8}),caption:"",year:""});_.memorial.gallery=e,i.target.value="",Cn(),ti({theme:!1}),Eh(),gt(`\uCD94\uC5B5 \uC0AC\uC9C4 ${t.length}\uC7A5\uC744 \uAC78\uC5C8\uC5B4\uC694.`)};P("#add-video").onclick=()=>{let i=P("#video-url").value.trim();if(!/^https?:\/\//.test(i)){gt("\uC601\uC0C1 \uC8FC\uC18C(https://\u2026)\uB97C \uB123\uC5B4 \uC8FC\uC138\uC694. \uC720\uD29C\uBE0C \uB9C1\uD06C\uB098 mp4 \uC8FC\uC18C\uAC00 \uB3FC\uC694.");return}_.memorial.gallery=[...rr(_.memorial.gallery||[]),{src:i,caption:"",year:""}],_.memorial.gallery=rr(_.memorial.gallery),P("#video-url").value="",Cn(),Eh(),gt("\uC601\uC0C1\uC744 \uC0C1\uC601 \uBAA9\uB85D\uC5D0 \uB123\uC5C8\uC5B4\uC694.")};P("#gallery-edit").onclick=i=>{let e=i.target.closest("[data-del]"),t=i.target.closest("[data-move]"),n=_.memorial.gallery;if(e)n.splice(+e.dataset.del,1);else if(t){let r=+t.dataset.move;r>0&&([n[r-1],n[r]]=[n[r],n[r-1]])}else return;Cn(),ti({theme:!1}),Eh()};P("#host-preview-theater").onclick=()=>{P("#dlg-host").close(),vs()};async function sg(){let i=await De.list("condolences"),e=el(),t=new Map;for(let s of e){let a=s.name,o=t.get(a)||{name:a,amount:0,msgs:[]};o.relation=[s.hostOf?`${L0(s.hostOf)}\uC758`:"",s.relation].filter(Boolean).join(" ")||o.relation,s.message&&o.msgs.push(s.message),o.time=Math.max(o.time||0,s.time||0),t.set(a,o)}for(let s of i){let a=t.get(s.name)||{name:s.name,amount:0,msgs:[]};a.amount+=Number(s.amount||0),a.to=s.to||a.to,a.affil=s.affil||a.affil,s.note&&a.msgs.push(`\u2709 ${s.note}`),a.time=Math.max(a.time||0,s.time||0),t.set(s.name,a)}let n=[...t.values()].sort((s,a)=>(a.time||0)-(s.time||0));P("#ledger-people").innerHTML=n.length?`<table><thead><tr><th>\uC774\uB984</th><th>\uAD00\uACC4 \xB7 \uC18C\uC18D</th><th>\uC870\uC758\uAE08</th><th>\uBC1B\uB294 \uC0C1\uC8FC</th><th>\uB0A8\uAE34 \uB9D0</th></tr></thead><tbody>${n.map(s=>`<tr><td><b>${Me(s.name)}</b></td><td>${Me([s.relation,s.affil].filter(Boolean).join(" \xB7 "))}</td><td>${s.amount?Sa(s.amount):"-"}</td><td>${Me(s.to||"")}</td><td>${Me(s.msgs.join(" / "))}</td></tr>`).join("")}</tbody></table>`:'<p class="tip">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>',P("#ledger-money").innerHTML=i.length?i.slice().reverse().map(s=>`<div><span>${Me(s.name)}${s.affil?` <small>${Me(s.affil)}</small>`:""}${s.note?`<em>\u2709 ${Me(s.note)}</em>`:""}</span><b>${Sa(s.amount)}</b><span>${Me(s.to?`\u2192 ${s.to} \xB7 `:"")}${Me(s.phrase||"")} \xB7 ${Me(s.method||"")} \xB7 ${wa(s.time)}</span></div>`).join(""):'<p class="tip">\uC544\uC9C1 \uAE30\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>',P("#ledger-book").innerHTML=e.length?e.slice().reverse().map(s=>`<div><span>${Me(s.name)}</span><span>${Me(s.relation||"")}</span><span>${s.time?wa(s.time):"\uC608\uC2DC"}</span></div>`).join(""):'<p class="tip">\uC544\uC9C1 \uBC29\uBA85\uB85D\uC774 \uC5C6\uC5B4\uC694.</p>';let r=i.reduce((s,a)=>s+Number(a.amount||0),0);P("#ledger-tip").textContent=De.remote?`\uC774 \uAE30\uAE30\uC5D0\uC11C \uAE30\uB85D\uB41C \uC870\uC758\uAE08 \uD569\uACC4 ${Sa(r)}. \uBAA8\uB4E0 \uC870\uBB38\uAC1D\uC758 \uAE30\uB85D\uC740 Firebase \uCF58\uC194\uC758 condolences \uC5D0\uC11C \uD655\uC778\uD558\uC138\uC694(\uACF5\uAC1C \uC77D\uAE30 \uAE08\uC9C0 \uAD8C\uC7A5).`:`\uD569\uACC4 ${Sa(r)}. \uC9C0\uAE08\uC740 \uACF5\uC720 \uC800\uC7A5\uC18C\uAC00 \uC5F0\uACB0\uB418\uC9C0 \uC54A\uC544 \uC774 \uAE30\uAE30\uC5D0\uC11C \uB0A8\uAE34 \uAE30\uB85D\uB9CC \uBCF4\uC5EC\uC694. \uC2E4\uC81C \uC785\uAE08 \uB0B4\uC5ED\uC740 \uC740\uD589 \uC571\uC5D0\uC11C \uD655\uC778\uD574 \uC8FC\uC138\uC694.`}var sp=(i,e)=>"\uFEFF"+[e.join(","),...i.map(t=>e.map(n=>`"${String(n==="time"?new Date(t.time).toLocaleString("ko-KR"):t[n]??"").replace(/"/g,'""')}"`).join(","))].join(`
`);P("#csv-condolence").onclick=async()=>ph("\uC870\uC758\uAE08\uAE30\uB85D.csv",sp(await De.list("condolences"),["name","affil","amount","phrase","method","note","time"]),"text/csv");P("#csv-people").onclick=async()=>{let i=await De.list("condolences"),e=el().map(t=>({...t,amount:i.filter(n=>n.name===t.name).reduce((n,r)=>n+Number(r.amount||0),0),to:i.find(n=>n.name===t.name)?.to||""}));for(let t of i)e.some(n=>n.name===t.name)||e.push({name:t.name,relation:t.affil,amount:t.amount,to:t.to,message:t.note,time:t.time});ph("\uC870\uBB38\uAC1D_\uBC29\uBA85\uB85D_\uC870\uC758\uAE08.csv",sp(e,["name","relation","amount","to","message","time"]),"text/csv")};P("#csv-guestbook").onclick=()=>ph("\uBC29\uBA85\uB85D.csv",sp(_.guestbook,["name","relation","message","time"]),"text/csv");async function ag(i){let e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(i));return[...new Uint8Array(e)].map(t=>t.toString(16).padStart(2,"0")).join("")}var dh=()=>`${location.origin}${location.pathname}`;function og(){P("#link-guest").value=`${dh()}?m=${Ni}`;let i=De.getLocal("hostKey","");P("#link-host").value=i?`${dh()}?m=${Ni}&key=${i}`:""}P("#new-host-key").onclick=async()=>{let i=[...crypto.getRandomValues(new Uint8Array(10))].map(e=>"abcdefghijkmnpqrstuvwxyz23456789"[e%32]).join("");_.memorial.hostKeyHash=await ag(i),De.setLocal("hostKey",i),Cn(),og(),gt("\uC0C8 \uC0C1\uC8FC \uB9C1\uD06C\uB97C \uB9CC\uB4E4\uC5C8\uC5B4\uC694. \uBE48\uC18C \uD30C\uC77C\uC744 \uB0B4\uB824\uBC1B\uC544 \uC62C\uB9AC\uBA74 \uC801\uC6A9\uB3FC\uC694.",4200)};dt("[data-copy]").forEach(i=>{i.onclick=async()=>{let e=P(`#${i.dataset.copy}`).value;e&&(await fs(e),gt("\uBCF5\uC0AC\uD588\uC5B4\uC694."))}});var zd=()=>`${dh()}?m=${Ni}`;P("#export-json").onclick=()=>{let i={..._.memorial,demo:!1};delete i.demoSeeds,ph(`${Ni}.json`,JSON.stringify(i,null,2)),gt(`${Ni}.json \uC744 \uB0B4\uB824\uBC1B\uC558\uC5B4\uC694. \uC800\uC7A5\uC18C\uC758 data/ \uD3F4\uB354\uC5D0 \uB123\uC5B4 \uC8FC\uC138\uC694.`,4200)};P("#copy-link").onclick=async()=>{await fs(zd()),gt("\uBE48\uC18C \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")};P("#share-link").onclick=async()=>{let i=`[\uBD80\uACE0] \u6545 ${_.memorial.deceased.name}\uB2D8\uAED8\uC11C \uBCC4\uC138\uD558\uC168\uAE30\uC5D0 \uC0BC\uAC00 \uC54C\uB824\uB4DC\uB9BD\uB2C8\uB2E4.
\uB9C1\uD06C\uB97C \uB204\uB974\uBA74 \uC628\uB77C\uC778 \uBE48\uC18C\uC5D0\uC11C \uBC14\uB85C \uC870\uBB38\uD558\uC2E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.`;if(navigator.share)try{await navigator.share({title:document.title,text:i,url:zd()})}catch{}else await fs(`${i}
${zd()}`),gt("\uBD80\uACE0 \uBB38\uAD6C\uC640 \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD588\uC5B4\uC694.")};P("#reset-draft").onclick=()=>{confirm("\uC774 \uAE30\uAE30\uC5D0 \uC800\uC7A5\uB41C \uCD08\uC548\uC744 \uC9C0\uC6B0\uACE0 \uACF5\uAC1C\uB41C \uC0C1\uD0DC\uB85C \uB418\uB3CC\uB9B4\uAE4C\uC694?")&&(De.clearDraft(),location.reload())};P("#host-thank").onclick=()=>{P("#dlg-host").close(),Z0()};_.others=new Map;var Ud=!1;async function Vd(){if(!(!De.remote||!_.entered||Ud||document.hidden)){Ud=!0;try{let i=q.avatar,e=_.role==="host";await De.presencePut(_.me.id,{n:e?_.memorial.hostName||"\uC0C1\uC8FC":_.me.name,rel:e?"\uC0C1\uC8FC":"",r:_.role,o:i.outfitId,lk:i.look,x:+q.pos.x.toFixed(2),z:+q.pos.z.toFixed(2),f:+q.face.toFixed(2),a:_.act,s:_.actSeq,sit:i.hold==="sit"?1:0,say:_.say,ss:_.sayS,ix:_.ix});let t=await De.presenceGet(),n=performance.now(),r=new Set,s=t[_.me.id]?.t||Date.now();for(let[a,o]of Object.entries(t)){if(a===_.me.id||!o)continue;let c=s-(o.t||0);if(c>12e3){c>6e4&&De.req("DELETE",`presence/${a}`).catch(()=>{});continue}r.add(a);let l=_.others.get(a);if(l||(l={av:new ci({outfit:o.o,look:o.lk||_n}),t:o.t,changed:n,s:o.s,ss:o.ss,ixs:o.ix?.s,x:o.x,z:o.z,f:o.f,name:o.n||"\uC870\uBB38\uAC1D",relation:o.rel||""},l.av.interactTag=`other:${a}`,l.av.rebuild(),l.lkKey=JSON.stringify(o.lk||{}),l.av.root.position.set(o.x,le.heightAt(o.x,o.z),o.z),or.add(l.av.root),l.tag=xs(tl(l.name,o.r==="host"?"host":"other",o.r==="host"?"\uC0C1\uC8FC":"\uC870\uBB38",o.r==="host"?"":l.relation),()=>ys.copy(l.av.root.position).add(new S(0,1.62*l.av.height,0))),_.others.set(a,l),_.entered&&gt(`${l.name} \uB2D8\uC774 \uBE48\uC18C\uC5D0 \uC624\uC168\uC5B4\uC694.`,2400)),o.t!==l.t&&(l.t=o.t,l.changed=n),n-l.changed>15e3){n-l.changed>6e4&&De.req("DELETE",`presence/${a}`).catch(()=>{}),E0(a);continue}let h=JSON.stringify(o.lk||{});if(l.av.outfitId!==o.o&&l.av.setOutfit(o.o),h!==l.lkKey&&(l.lkKey=h,l.av.setLook(o.lk||_n)),Object.assign(l,{x:o.x,z:o.z,f:o.f}),l.av.hold=o.sit?"sit":null,o.s!==l.s){l.s=o.s;let u=o.a||"";if(u.startsWith("expr:")){let d=u.slice(5);d==="cry"||d==="smile"?l.av.setExpression(d,5):ms(l.av.root,$c.find(p=>p.id===d)?.icon||"\u{1F90D}",2400,!0,l.av.height)}else u&&u!=="sit"&&l.av.play({flower:"offer",silentPrayer:"silence",give:"give"}[u]||u)}o.ss!==l.ss&&(l.ss=o.ss,o.say&&ms(l.av.root,o.say,5e3,!1,l.av.height)),o.ix&&o.ix.s!==l.ixs&&(l.ixs=o.ix.s,o.ix.to===_.me.id&&K0(l,o.ix))}for(let a of[..._.others.keys()])r.has(a)||E0(a);lr()}catch(i){console.warn("presence",i)}finally{Ud=!1}}}function E0(i){let e=_.others.get(i);e&&(or.remove(e.av.root),e.tag.remove(),_.others.delete(i))}function Zy(i){let e=!1;for(let t of _.others.values()){let n=t.av.root.position,r=t.x-n.x,s=t.z-n.z,a=Math.hypot(r,s),o=a>.05&&!t.av.busy;if(a>6)n.x=t.x,n.z=t.z;else if(o){let l=Math.min(a,3.6*i);n.x+=r/a*l,n.z+=s/a*l,t.av.root.rotation.y=ch(t.av.root.rotation.y,Math.atan2(r,s),Math.min(1,i*10))}else t.av.root.rotation.y=ch(t.av.root.rotation.y,t.f,Math.min(1,i*6));n.y=le.heightAt(n.x,n.z);let c=le.inHall(n.x,n.z)&&n.z<.6;c!==t.inHall&&(t.inHall=c,t.av.setBarefoot(c&&!!le.theme?.shoes),e=!0),t.av.update(i,o)}e&&le.setShoes($d())}De.remote&&(setInterval(()=>ng(),5e3),setInterval(Vd,Ri.presenceIntervalMs),setInterval(Jy,2e4),addEventListener("pagehide",()=>De.presenceDelete(_.me.id)),document.addEventListener("visibilitychange",()=>{document.hidden?De.presenceDelete(_.me.id):_.entered&&Vd()}));async function Jy(){if(document.hidden)return;let[i,e,t,n,r]=await Promise.all([De.list("guestbook"),De.list("lanterns",90),De.list("wreaths",40),De.counters(),De.getState("incenseAt")]);(i.length!==_.guestbook.length||(n.guestbook||0)!==_.gbCount)&&(_.guestbook=i,_.gbCount=n.guestbook||0,_.counters.guestbook=n.guestbook||0,le.setMemories(yh())),t.length!==_.wreaths.length&&(_.wreaths=t,le.setWreaths(np()));let s=new Set(_.lanterns.map(a=>a.id));for(let a of e)s.has(a.id)||(_.lanterns.push(a),le.addLantern(a,new S(-4.6,2,9.5)));_.counters={..._.counters,...n},typeof r=="number"&&(_.incenseAt=Math.max(_.incenseAt||0,r)),le.setCounts(_.counters),_h()}async function Ky(){_.memorial=await De.loadMemorial(`${Ri.dataDir}${Ni}.json`,xm);let i=De.published?.reset||"",e=`samga-reset:${Ni}`;if(i&&localStorage.getItem(e)!==i){Object.keys(localStorage).filter(c=>c.startsWith("samga")).forEach(c=>localStorage.removeItem(c));try{sessionStorage.clear()}catch{}try{if(window.caches)for(let c of await caches.keys())await caches.delete(c)}catch{}localStorage.setItem(e,i),location.replace(`${location.pathname}${location.search}`);return}(!De.published?.deceased?.name||De.published.deceased.name==="\uACE0\uC778")&&Ni!==Ri.defaultMemorial&&gt("\uC774 \uBE48\uC18C \uC8FC\uC18C\uB97C \uCC3E\uC9C0 \uBABB\uD588\uC5B4\uC694. \uB9C1\uD06C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",5e3),_.memorial.gallery=rr(_.memorial.gallery||[]),await ng(!0),ti(),Qv(),Q0();let[t,n,r,s,a]=await Promise.all([De.list("guestbook"),De.list("lanterns",90),De.list("wreaths",40),De.counters(),De.getState("incenseAt")]);if(_.guestbook=t,_.lanterns=n,_.wreaths=r,_.counters=s,_.incenseAt=typeof a=="number"?a:null,Qd()){let c=_.memorial.demoSeeds?.counters||{};for(let[l,h]of Object.entries(c))_.counters[l]=(s[l]||0)+h;if(n.length<3)for(let l of _.memorial.demoSeeds?.lanterns||[])le.addLantern(l);_.incenseAt||(_.incenseAt=Date.now()-9*6e4)}for(let c of n)le.addLantern(c);le.setMemories(yh()),le.setWreaths(np()),le.setCounts(_.counters),_h();let o=kd.get("key");o?_.memorial.hostKeyHash&&await ag(o)===_.memorial.hostKeyHash?(De.setLocal("hostKey",o),history.replaceState(null,"",`${dh()}?m=${Ni}`),lh("host")):gt("\uC0C1\uC8FC \uB9C1\uD06C\uAC00 \uB9DE\uC9C0 \uC54A\uC544\uC694. \uAC00\uC871\uC5D0\uAC8C \uBC1B\uC740 \uB9C1\uD06C\uB97C \uB2E4\uC2DC \uD655\uC778\uD574 \uC8FC\uC138\uC694.",5e3):kd.has("host")&&U0()}var S0=performance.now();function lg(i,e=performance.now()/1e3){ry(i),le.hostNpc.update(i,!1);for(let t of Ta)t.av.update(i,!1);le.helper.update(i,!1),Zy(i),le.update(i,e),sy(i),dy()}function cg(i){let e=Math.min(.05,(i-S0)/1e3);S0=i,window.__samga?.paused||lg(e,i/1e3),Bi.render(or,bn),Yv(),requestAnimationFrame(cg)}await Ky();requestAnimationFrame(cg);window.__samga={state:_,world:le,player:q,cam:ve,camera:bn,store:De,sound:tt,interact:un,doAction:Ra,paused:!1,__step:i=>lg(i),__walk:i=>Jt(i),openTheater:vs,receiveIx:K0};
