(function(n){function I(q,w){var B=q[0]-w[0],e=q[1]-w[1];return B*B+e*e}function L(q){for(var w=0,B=0,e=0,h=q.length-3;e<h;e+=2){w+=q[e];B+=q[e+1]}q=(q.length-2)*2;return[w/q<<0,B/q<<0]}function sa(q){var w=q.length/2,B=new Ka(w),e=0,h=w-1,j,r,x,C,J=[],O=[],M=[];for(B[e]=B[h]=1;h;){r=0;for(j=e+1;j<h;j++){x=q[j*2];var ta=q[j*2+1],P=q[e*2],F=q[e*2+1],fa=q[h*2],$=q[h*2+1],A=fa-P,y=$-F,Q=void 0;if(A!==0||y!==0){Q=((x-P)*A+(ta-F)*y)/(A*A+y*y);if(Q>1){P=fa;F=$}else if(Q>0){P+=A*Q;F+=y*Q}}A=x-P;y=ta-F;x=
A*A+y*y;if(x>r){C=j;r=x}}if(r>2){B[C]=1;J.push(e);O.push(C);J.push(C);O.push(h)}e=J.pop();h=O.pop()}for(j=0;j<w;j++)B[j]&&M.push(q[j*2],q[j*2+1]);return M}var La=La||Array,Ka=Ka||Array,Pa=Math.exp,Qa=Math.log,Ma=Math.tan,Ra=Math.atan,za=Math.min,Sa=Math.max,Aa=n.document,T=function(){function q(e,h,j){if(j<0)j+=1;if(j>1)j-=1;if(j<1/6)return e+(h-e)*6*j;if(j<0.5)return h;if(j<2/3)return e+(h-e)*(2/3-j)*6;return e}function w(e,h,j,r){this.r=e;this.g=h;this.b=j;this.a=arguments.length<4?1:r}var B=w.prototype;
B.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join(",")+")"};B.adjustLightness=function(e){var h=T.toHSLA(this);h.l*=e;h.l=Math.min(1,Math.max(0,h.l));var j,r;if(h.s===0)e=j=r=h.l;else{r=h.l<0.5?h.l*(1+h.s):h.l+h.s-h.l*h.s;var x=2*h.l-r;e=q(x,r,h.h+1/3);j=q(x,r,h.h);r=q(x,r,h.h-1/3)}return new T(e*255<<0,j*255<<0,r*255<<0,h.a)};B.adjustAlpha=function(e){return new T(this.r,this.g,this.b,this.a*e)};w.parse=function(e){e+="";if(~e.indexOf("#")){e=e.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);
return new T(parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16),e[4]?parseInt(e[4],16)/255:1)}if(e=e.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new T(parseInt(e[1],10),parseInt(e[2],10),parseInt(e[3],10),e[4]?parseFloat(e[5],10):1)};w.toHSLA=function(e){var h=e.r/255,j=e.g/255,r=e.b/255,x=Math.max(h,j,r),C=Math.min(h,j,r),J,O=(x+C)/2,M;if(x===C)J=C=0;else{M=x-C;C=O>0.5?M/(2-x-C):M/(x+C);switch(x){case h:J=(j-r)/M+(j<r?6:0);break;case j:J=(r-h)/M+2;break;case r:J=(h-j)/M+4;break}J/=
6}return{h:J,s:C,l:O,a:e.a}};return w}(),ja=Math.PI,Na=ja/2,Ta=ja/4,Ua=180/ja,Va=256,Ba=14,ka="latitude",la="longitude",N=0,K=1,R=2,X=3,ua=4,aa=5,W=6;n.OSMBuildings=function(q){function w(a,d){var b={};a/=ma;d/=ma;b[ka]=d<=0?90:d>=1?-90:Ua*(2*Ra(Pa(ja*(1-2*d)))-Na);b[la]=(a===1?1:(a%1+1)%1)*360-180;return b}function B(a,d){return a.replace(/\{ *([\w_]+) *\}/g,function(b,c){return d[c]})}function e(a,d){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||b.status<
200||b.status>299||b.responseText&&d(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function h(){if(!(!Ca||S<Ba)){var a=w(ba-Q,ca-Da),d=w(ba+A+Q,ca+y+Da);va&&va.abort();va=e(B(Ca,{w:a[la],n:a[ka],e:d[la],s:d[ka],z:S}),j)}}function j(a){var d,b,c,f=[],g,l=g=0;na=Ba;O(S);va=null;if(!(!a||a.meta.z!==S)){c=a.meta;b=a.data;if(D&&z&&D.z===c.z){g=D.x-c.x;l=D.y-c.y;a=0;for(d=z.length;a<d;a++)f[a]=z[a][R][0]+g+","+(z[a][R][1]+l)}D=c;z=[];a=0;for(d=b.length;a<d;a++){c=[];if(!(b[a][K]>oa)){g=
sa(b[a][R]);if(!(g.length<8)){c[R]=g;c[ua]=L(g);c[N]=za(b[a][N],oa);c[K]=b[a][K];g=c[R][0]+","+c[R][1];c[aa]=!(f&&~f.indexOf(g));c[X]=[];c[W]=[];z.push(c)}}}M()}}function r(a,d){var b=[],c,f,g,l,k,i,s,E,p,v=Ea-S;c=0;for(f=a.length;c<f;c++){k=a[c];E=k[K]>>v;if(!(E>oa)){i=k[R];p=new La(i.length);g=0;for(l=i.length-1;g<l;g+=2){s=i[g+1];var m=za(1,Sa(0,0.5-Qa(Ma(Ta+Na*i[g]/180))/ja/2));s={x:(s/360+0.5)*ma<<0,y:m*ma<<0};p[g]=s.x;p[g+1]=s.y}p=sa(p);if(!(p.length<8)){l=[];l[R]=p;l[ua]=L(p);l[N]=za(k[N]>>
v,oa);l[K]=E;l[aa]=d;l[X]=k[X];l[W]=[];for(g=0;g<3;g++)if(l[X][g])l[W][g]=l[X][g].adjustAlpha(U)+"";b.push(l)}}}return b}function x(a,d){if(typeof a==="object")J(a,!d);else{var b=Aa.documentElement,c=Aa.createElement("script");n.jsonpCallback=function(f){delete n.jsonpCallback;b.removeChild(c);J(f,!d)};b.insertBefore(c,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function C(a,d,b){if(b===undefined)b=[];var c,f,g,l=a[0]?a:a.features,k,i,s,E,p,v=d?1:0,m=d?0:1;if(l){c=0;for(a=l.length;c<
a;c++)C(l[c],d,b);return b}if(a.type==="Feature"){k=a.geometry;c=a.properties}if(k.type==="Polygon")i=[k.coordinates];if(k.type==="MultiPolygon")i=k.coordinates;if(i){d=c.height;if(c.color||c.wallColor)E=T.parse(c.color||c.wallColor);if(c.roofColor)p=T.parse(c.roofColor);c=0;for(a=i.length;c<a;c++){l=i[c][0];s=[];f=k=0;for(g=l.length;f<g;f++){s.push(l[f][v],l[f][m]);k+=d||l[f][2]||0}if(k){f=[];g=R;var t=void 0,o=void 0,G=void 0,ga=void 0,pa=0,V=void 0,Oa=void 0;V=0;for(Oa=s.length-3;V<Oa;V+=2){t=
s[V];o=s[V+1];G=s[V+2];ga=s[V+3];pa+=t*ga-G*o}if((pa/2>0?"CW":"CCW")==="CW")s=s;else{t=[];for(o=s.length-2;o>=0;o-=2)t.push(s[o],s[o+1]);s=t}f[g]=s;f[N]=k/l.length<<0;f[X]=[E||null,E?E.adjustLightness(0.8):null,p?p:E?E.adjustLightness(1.2):da];b.push(f)}}}return b}function J(a,d){if(a){qa=C(a,d);na=0;O(S);D={n:90,w:-180,s:-90,e:180,x:0,y:0,z:S};z=r(qa,true);M()}else{qa=null;F()}}function O(a){var d,b,c;S=a;ma=Va<<S;U=1-(S-na)*0.3/(Ea-na);Fa=Y.adjustAlpha(U)+"";wa=xa.adjustAlpha(U)+"";ya=da.adjustAlpha(U)+
"";if(z){a=0;for(d=z.length;a<d;a++){c=z[a];c[W]=[];for(b=0;b<3;b++)if(c[X][b])c[W][b]=c[X][b].adjustAlpha(U)+""}}}function M(){Z=0;clearInterval(Ga);Ga=setInterval(function(){Z+=0.1;if(Z>1){clearInterval(Ga);Z=1;for(var a=0,d=z.length;a<d;a++)z[a][aa]=0}F()},33)}function ta(){Ha=ha;Ia=ia*1.2;ra=ea/1.5;var a,d,b,c,f,g,l,k,i,s=ba-D.x,E=ca-D.y,p,v,m,t,o,G;u.fillStyle="rgba(0,0,0,0.4)";a=0;for(d=z.length;a<d;a++){f=z[a];v=false;g=f[R];p=[];b=0;for(c=g.length-1;b<c;b+=2){p[b]=k=g[b]-s;p[b+1]=i=g[b+1]-
E;v||(v=k>0&&k<A&&i>0&&i<y)}if(v){b=f[aa]?f[N]*Z:f[N];g=ra/(ra-b);if(f[K]){b=f[aa]?f[K]*Z:f[K];l=ra/(ra-b)}if(f[N]<6){f=[];b=0;for(c=p.length-3;b<c;b+=2){k=p[b];m=p[b+1];i=P(k,m,g);f[b]=i.x;f[b+1]=i.y}fa(f)}else{v=null;u.beginPath();b=0;for(c=p.length-3;b<c;b+=2){k=p[b];m=p[b+1];t=p[b+2];o=p[b+3];i=P(k,m,g);G=P(t,o,g);if(f[K]){m=P(k,m,l);o=P(t,o,l);k=m.x;m=m.y;t=o.x;o=o.y}if((t-k)*(i.y-m)>(i.x-k)*(o-m)){v===1&&u.lineTo(k,m);v=0;b||u.moveTo(k,m);u.lineTo(t,o)}else{v===0&&u.lineTo(i.x,i.y);v=1;b||u.moveTo(i.x,
i.y);u.lineTo(G.x,G.y)}}u.closePath();u.fill()}}}}function P(a,d,b){return{x:(a-Ha)*b+Ha,y:(d-Ia)*b+Ia}}function F(){u.clearRect(0,0,A,y);if(D&&z)if(!(S<na||Ja)){ta();var a,d,b,c,f,g,l,k,i,s=ba-D.x,E=ca-D.y,p=[ha+s,ia+E],v,m,t,o,G,ga;z.sort(function(pa,V){return I(V[ua],p)/V[N]-I(pa[ua],p)/pa[N]});a=0;for(d=z.length;a<d;a++){f=z[a];m=false;g=f[R];v=[];b=0;for(c=g.length-1;b<c;b+=2){v[b]=k=g[b]-s;v[b+1]=i=g[b+1]-E;m||(m=k>0&&k<A&&i>0&&i<y)}if(m){b=f[aa]?f[N]*Z:f[N];g=ea/(ea-b);if(f[K]){b=f[aa]?f[K]*
Z:f[K];l=ea/(ea-b)}k=[];b=0;for(c=v.length-3;b<c;b+=2){i=v[b];t=v[b+1];m=v[b+2];o=v[b+3];G=$(i,t,g);ga=$(m,o,g);if(f[K]){t=$(i,t,l);o=$(m,o,l);i=t.x;t=t.y;m=o.x;o=o.y}if((m-i)*(G.y-t)>(G.x-i)*(o-t)){u.fillStyle=i<m&&t<o||i>m&&t>o?f[W][1]||wa:f[W][0]||Fa;fa([m+0.5,o+0.5,i+0.5,t+0.5,G.x,G.y,ga.x,ga.y])}k[b]=G.x;k[b+1]=G.y}u.fillStyle=f[W][2]||ya;u.strokeStyle=f[W][1]||wa;fa(k)}}}}function fa(a,d){if(a.length){u.beginPath();u.moveTo(a[0],a[1]);for(var b=2,c=a.length;b<c;b+=2)u.lineTo(a[b],a[b+1]);u.closePath();
d&&u.stroke();u.fill()}}function $(a,d,b){return{x:((a-ha)*b+ha<<0)+0.5,y:((d-ia)*b+ia<<0)+0.5}}var A=0,y=0,Q=0,Da=0,ba=0,ca=0,S,ma,va,H,u,Ca,Y=new T(200,190,180),xa=Y.adjustLightness(0.8),da=Y.adjustLightness(1.2),Fa=Y+"",wa=xa+"",ya=da+"",qa,D,z,Z=1,Ga,U=1,na=Ba,Ea=20,oa,ha,ia,ea,Ja,Ha,Ia,ra;this.setStyle=function(a){a=(a=a)||{};if(a.color||a.wallColor){Y=T.parse(a.color||a.wallColor);Fa=Y.adjustAlpha(U)+"";xa=Y.adjustLightness(0.8);wa=xa.adjustAlpha(U)+"";da=Y.adjustLightness(1.2);ya=da.adjustAlpha(U)+
""}if(a.roofColor){da=T.parse(a.roofColor);ya=da.adjustAlpha(U)+""}F();return this};this.geoJSON=function(a,d){x(a,d);return this};this.setCamOffset=function(a,d){ha=Q+a;ia=y+d};this.setMaxZoom=function(a){Ea=a};this.createCanvas=function(a){H=Aa.createElement("CANVAS");H.style.webkitTransform="translate3d(0,0,0)";H.style.imageRendering="optimizeSpeed";H.style.position="absolute";H.style.pointerEvents="none";H.style.left=0;H.style.top=0;a.appendChild(H);u=H.getContext("2d");u.lineCap="round";u.lineJoin=
"round";u.lineWidth=1;try{u.mozImageSmoothingEnabled=false}catch(d){}return H};this.destroyCanvas=function(){H.parentNode.removeChild(H)};this.loadData=h;this.onMoveEnd=function(){var a=w(ba,ca),d=w(ba+A,ca+y);F();if(D&&(a[ka]>D.n||a[la]<D.w||d[ka]<D.s||d[la]>D.e))h()};this.onZoomEnd=function(a){Ja=false;O(a.zoom);if(qa){z=r(qa);F()}else{F();h()}};this.onZoomStart=function(){Ja=true;F()};this.render=F;this.setOrigin=function(a,d){ba=a;ca=d};this.setSize=function(a,d){A=a;y=d;Q=A/2<<0;Da=y/2<<0;ha=
Q;ia=y;ea=A/1.5/Ma(45)<<0;H.width=A;H.height=y;oa=ea-50};this.setZoom=O;Ca=q};n.OSMBuildings.VERSION="0.1.7a";n.OSMBuildings.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
OpenLayers.Layer.Buildings=OpenLayers.Class(OpenLayers.Layer,{CLASS_NAME:"OpenLayers.Layer.Buildings",name:"OSM Buildings",attribution:OSMBuildings.ATTRIBUTION,isBaseLayer:false,alwaysInRange:true,dxSum:0,dySum:0,initialize:function(n){n=n||{};n.projection="EPSG:900913";OpenLayers.Layer.prototype.initialize(this.name,n)},setOrigin:function(){var n=this.map.getLonLatFromPixel(new OpenLayers.Pixel(0,0)),I=this.map.resolution,L=this.maxExtent;this.osmb.setOrigin(Math.round((n.lon-L.left)/I),Math.round((L.top-
n.lat)/I))},setMap:function(n){if(!this.map){OpenLayers.Layer.prototype.setMap(n);this.osmb=new OSMBuildings(this.options.url);this.osmb.createCanvas(this.div);this.osmb.setSize(this.map.size.w,this.map.size.h);this.osmb.setZoom(this.map.zoom);this.setOrigin();this.osmb.loadData()}},removeMap:function(n){this.osmb.destroyCanvas();this.osmb=null;OpenLayers.Layer.prototype.removeMap(n)},onMapResize:function(){OpenLayers.Layer.prototype.onMapResize();this.osmb.onResize({width:this.map.size.w,height:this.map.size.h})},
moveTo:function(n,I,L){n=OpenLayers.Layer.prototype.moveTo(n,I,L);if(!L){L=parseInt(this.map.layerContainerDiv.style.left,10);var sa=parseInt(this.map.layerContainerDiv.style.top,10);this.div.style.left=-L+"px";this.div.style.top=-sa+"px"}this.setOrigin();this.dySum=this.dxSum=0;this.osmb.setCamOffset(this.dxSum,this.dySum);I?this.osmb.onZoomEnd({zoom:this.map.zoom}):this.osmb.onMoveEnd();return n},moveByPx:function(n,I){this.dxSum+=n;this.dySum+=I;var L=OpenLayers.Layer.prototype.moveByPx(n,I);this.osmb.setCamOffset(this.dxSum,
this.dySum);this.osmb.render();return L},geoJSON:function(n,I){return this.osmb.geoJSON(n,I)},setStyle:function(n){return this.osmb.setStyle(n)}});
