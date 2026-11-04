const fs=require('fs');
const D=JSON.parse(fs.readFileSync(__dirname+'/deptos.json','utf8'));
const {GRUPOS,L}=require('../v4/lists.js');
const SHORT={pdc:'Plan de choque con riesgo vital',epi:'Epilepsia',sup:'Insuficiencia suprarrenal',hipo:'Hipoparatiroidismo',lup:'Lupus',trr:'Diálisis y trasplante',vih:'VIH',tb:'Tuberculosis',hem:'Hemofilia',renal0:'Estudio renal pendiente',hta:'Hipertensión no controlada',dm:'Diabetes no controlada',erc:'Enfermedad renal avanzada',iam:'Después del infarto',ic:'Insuficiencia cardiaca',epoc:'EPOC',mama:'Cáncer de mama',cervix:'Cuello uterino',crc:'Colon y recto',onco:'Inicio de tratamiento',ar:'Artritis reumatoide',vhc:'Hepatitis C',gest:'Gestantes',sif:'Sífilis gestacional',desn:'Desnutrición aguda',vac:'Vacunación',sui:'Intento de suicidio',hosp:'Hospitalizaciones evitables',poli:'Polifarmacia',quej:'Quejas repetidas',presc:'Prescriptores atípicos',ips:'Prestadores con demoras',dato:'Calidad del dato'};
const HEX={'var(--red)':'#A80521','var(--navy)':'#004884','var(--blue)':'#3366CC','#6B3FA0':'#7B52B8','var(--green)':'#069169','#0F7C8C':'#0F8C9C','#B37800':'#FFAB00','var(--deep)':'#5E8FC9'};
const G=GRUPOS.map(g=>({n:g[1],c:HEX[g[2]]||g[2],items:L.filter(x=>x.g===g[0]).map(x=>SHORT[x.id])}));
const html=`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Listas para actuar a tiempo</title>
<meta name="description" content="Presentación animada de 60 segundos de Listas para actuar a tiempo, plataforma interinstitucional de seguimiento y control.">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
:root{--navy:#004884;--blue:#3366CC;--green:#069169;--red:#A80521;--yellow:#FFAB00;--bg:#04213F;--ink:#FFFFFF;--soft:#C9D9EC}
*{box-sizing:border-box}
html,body{margin:0;height:100%;background:var(--bg);color:var(--ink);font:400 16px/1.45 "Work Sans",system-ui,sans-serif;overflow:hidden}
#stage{position:fixed;inset:0}
canvas{display:block}
.ov{position:fixed;left:clamp(16px,4vw,56px);top:clamp(16px,6vh,64px);width:min(520px,calc(100vw - 32px));pointer-events:none}
.sc{position:absolute;left:0;top:0;width:100%;opacity:0;transform:translateY(14px);transition:opacity .6s ease,transform .6s ease}
.sc.on{opacity:1;transform:none}
.k{font:700 .85rem Montserrat,sans-serif;color:var(--yellow);margin:0 0 8px}
h1{font:800 clamp(1.7rem,4.2vw,2.9rem)/1.08 Montserrat,sans-serif;margin:0 0 14px}
h2{font:800 clamp(1.35rem,3vw,2.1rem)/1.12 Montserrat,sans-serif;margin:0 0 12px}
p{margin:0 0 10px;color:var(--soft);font-size:clamp(.95rem,1.6vw,1.12rem)}
.big{font:800 clamp(2.4rem,6vw,4.4rem)/1 Montserrat,sans-serif;color:#fff;margin:6px 0 4px}
.row{display:flex;gap:22px;flex-wrap:wrap;margin-top:12px}
.row div{min-width:140px}
.row b{display:block;font:800 clamp(1.5rem,3.4vw,2.3rem)/1 Montserrat,sans-serif}
.row span{font-size:.88rem;color:var(--soft)}
.step{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;margin-top:10px;padding:12px 14px;border-left:6px solid var(--sk,#fff);background:rgba(255,255,255,.07)}
.step b{font:800 1.15rem Montserrat,sans-serif;grid-column:1/3;color:#fff}
.step span{grid-column:1/3;color:var(--soft);font-size:.95rem}
.step small{grid-column:1/3;color:#9FB6D3;font-size:.8rem}
.grp{border-left:6px solid var(--gc);padding:10px 14px;background:rgba(255,255,255,.07);margin-top:8px}
.grp b{font:800 1.12rem Montserrat,sans-serif;color:#fff;display:block;margin-bottom:6px}
.grp ul{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:6px}
.grp li{font-size:.85rem;padding:2px 8px;border:1px solid var(--gc);color:#fff;background:rgba(0,0,0,.18)}
.count{font:700 .9rem Montserrat,sans-serif;color:var(--yellow)}
.lbl{position:fixed;transform:translate(-50%,-50%);font:700 .82rem Montserrat,sans-serif;color:#fff;padding:3px 8px;border-radius:2px;pointer-events:none;white-space:nowrap;opacity:0;transition:opacity .3s}
.lbl.on{opacity:1}
.ctl{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);display:flex;gap:10px;align-items:center;background:rgba(4,33,63,.85);border:1px solid rgba(255,255,255,.2);padding:8px 12px;z-index:5}
.ctl button{font:600 .92rem "Work Sans",sans-serif;color:#04213F;background:#fff;border:0;padding:8px 16px;cursor:pointer}
.ctl button.sec{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.5)}
.ctl button:focus-visible{outline:3px solid var(--yellow);outline-offset:2px}
.bar{width:min(260px,40vw);height:5px;background:rgba(255,255,255,.2)}
.bar i{display:block;height:100%;width:0;background:var(--yellow)}
.lk{font:600 .88rem "Work Sans",sans-serif;color:#fff}
.t{font:600 .85rem Montserrat,sans-serif;color:var(--soft);min-width:44px;text-align:right}
.foot{position:fixed;right:16px;top:16px;font-size:.75rem;color:#8EA8C7;text-align:right;max-width:360px;pointer-events:none}
@media (max-width:700px){.ov{top:14px}.ctl{gap:6px;padding:6px 8px;bottom:10px}.ctl button{padding:7px 10px}.bar{width:60px}.lk{display:none}.step small{display:none}.foot{display:none}.row{gap:14px}.grp li{font-size:.78rem}}
@media (prefers-reduced-motion:reduce){.sc{transition:none}}
</style></head><body>
<div id="stage"></div>
<div class="ov" aria-live="polite">
 <section class="sc" data-a="0" data-b="7.5">
  <p class="k">Propuesta técnica para el sistema de salud de Colombia</p>
  <h1>Listas para actuar a tiempo</h1><p style="font:700 clamp(1.05rem,2.2vw,1.4rem) Montserrat,sans-serif;color:#fff;margin:0 0 12px">Plataforma interinstitucional de seguimiento y control</p>
  <p>El sistema ya sabe, persona por persona, a quién atender primero. La propuesta es convertir ese conocimiento en listas con responsable.</p>
 </section>
 <section class="sc" data-a="7.5" data-b="16">
  <p class="k">Tablero del plan de choque, corte del 27 de octubre de 2026</p>
  <div class="big" id="cnt">0</div>
  <p>personas con medicamentos o procedimientos pendientes en el tablero público del Ministerio de Salud.</p>
  <div class="row"><div><b style="color:#5FD3A8">27,77%</b><span>con todos sus pendientes cerrados</span></div><div><b style="color:#FFAB00">49,64%</b><span>de registros de medicamentos cerrados</span></div><div><b style="color:#FF6B6B">24,78%</b><span>de registros de procedimientos cerrados</span></div></div>
  <p style="margin-top:12px;font-size:.8rem;color:#8EA8C7">Fuente: Ministerio de Salud, Monitoreo al Plan de Choque en SISPRO.</p>
 </section>
 <section class="sc" data-a="16" data-b="30">
  <p class="k">El sistema</p>
  <h2>Ocho pasos, cada uno con responsable y norma</h2>
  <div class="step" id="stepbox"><b id="st">Identificar</b><span id="sw"></span><small id="sn"></small></div>
 </section>
 <section class="sc" data-a="30" data-b="46">
  <p class="k">Las ${L.length} listas, de pacientes, médicos y prestadores</p>
  <h2 id="gt">Continuidad vital</h2>
  <div id="gbox"></div>
  <p class="count" id="gc"></p>
 </section>
 <section class="sc" data-a="46" data-b="54">
  <p class="k">Verificar y evaluar</p>
  <h2>Cada cierre se verifica persona por persona</h2>
  <p>La Supersalud cruza el cierre reportado por la EPS con RIPS, factura electrónica y la historia clínica interoperable. La Cuenta de Alto Costo, el INS y la ADRES aportan sus bases. El resultado vuelve como mejor dato al siguiente corte.</p>
 </section>
 <section class="sc" data-a="54" data-b="61">
  <p class="k">Con las normas, los datos y los equipos que ya existen</p>
  <h1>Que la atención llegue primero a quien más la necesita</h1>
  <p>El brief completo, con las fuentes de cada cifra, está en el enlace Abrir el brief.</p>
 </section>
</div>
<div class="foot">Análisis y redacción: Claude (Anthropic). Curaduría: David Aguilar, economista, y Nancy Yomayusa González, médica internista y nefróloga. Altura y color de cada departamento: pobreza multidimensional 2025 del DANE, de azul a amarillo a mayor pobreza.</div>
<div class="ctl" role="group" aria-label="Controles de la presentación">
 <button id="play" aria-label="Pausar">Pausa</button>
 <button id="rep" class="sec">Repetir</button>
 <div class="bar" aria-hidden="true"><i id="pb"></i></div>
 <span class="t" id="tt">0 s</span>
 <a class="lk" href="https://doar95.github.io/listas-de-pacientes-colombia/">Abrir el brief</a>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
const DEP=${JSON.stringify(D)};
const GR=${JSON.stringify(G)};
const STEPS=[
 ['Identificar','#004884','Dirección de Epidemiología y Demografía con la Dirección de Tecnología de la Información, sobre RIPS, historia clínica, Cuenta de Alto Costo, SIVIGILA y el tablero.','Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19'],
 ['Priorizar','#3366CC','Viceministerio de Protección Social, con la pirámide de riesgo del plan de choque como prioridad clínica.','Ley 1122 de 2007, art. 14; Decreto 120 de 2026, art. 5'],
 ['Enviar','#069169','Cada EPS recibe a sus afiliados, cada secretaría su territorio y cada IPS la comparación de sus profesionales.','Decreto 120 de 2026, art. 9; Ley 1581 de 2012, art. 10'],
 ['Actuar','#FFAB00','EPS, IPS, gestores farmacéuticos y secretarías contactan, entregan y reportan el cierre. El médico tratante decide.','Ley 100 de 1993, art. 178; Ley 715 de 2001, art. 43'],
 ['Seguir','#0F8C9C','Supersalud: el sistema de alertas tempranas sigue cada caso abierto según el tiempo que falta para el daño.','Decreto 1080 de 2021, arts. 16, 17 y 19'],
 ['Verificar','#A80521','Supersalud y Cuenta de Alto Costo triangulan el cierre: RIPS y resumen digital, confirmación del paciente y auditoría por muestreo.','Decreto 1080 de 2021, arts. 7 y 17'],
 ['Controlar','#7B52B8','Delegadas de la Supersalud: escalera de supervisión, de la retroalimentación al plan de mejoramiento.','Decreto 1080 de 2021, arts. 22 y 23; Ley 1949 de 2019'],
 ['Evaluar','#5E8FC9','Ambos viceministerios con el IETS y el Observatorio Nacional de Salud miden desenlaces y ajustan criterios.','Decreto 120 de 2026, arts. 19 y 20; Ley 1438 de 2011, art. 92']];
const DUR=60;let OFF=0,ZM=1.15;
/* ---------- escena ---------- */
const stage=document.getElementById('stage');
const renderer=new THREE.WebGLRenderer({antialias:true,preserveDrawingBuffer:true});
renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1));
stage.appendChild(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color(0x04213F);scene.fog=new THREE.Fog(0x04213F,40,95);
const cam=new THREE.PerspectiveCamera(42,1,0.1,300);
scene.add(new THREE.HemisphereLight(0xdfe9ff,0x0a2340,0.75));
const dl=new THREE.DirectionalLight(0xffffff,0.85);dl.position.set(-12,30,18);scene.add(dl);
const K=1.55,LON0=-73.5,LAT0=4.5;
const P=(lon,lat)=>[(lon-LON0)*K,(lat-LAT0)*K];
const H=i=>0.25+i/55*3.2;
const map=new THREE.Group();map.rotation.x=-Math.PI/2;scene.add(map);
const depMeshes=[];
function pip(x,y,r){let c=false;for(let i=0,j=r.length-1;i<r.length;j=i++){const xi=r[i][0],yi=r[i][1],xj=r[j][0],yj=r[j][1];if(((yi>y)!=(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))c=!c;}return c;}
const lowC=new THREE.Color(0x2F6DB5),highC=new THREE.Color(0xF2C14E);
DEP.forEach(d=>{let cx=0,cy=0,n=0,area=0;d.h=H(d.i);
 d.rings=d.p.map(r=>r.map(([x,y])=>P(x,y)));
 d.rings.forEach(r=>{const s=new THREE.Shape(r.map(([x,y])=>new THREE.Vector2(x,y)));
  const g=new THREE.ExtrudeGeometry(s,{depth:1,bevelEnabled:false});
  const col=lowC.clone().lerp(highC,Math.min(1,d.i/55));
  const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:col,roughness:.75,metalness:.05}));
  m.userData.d=d;map.add(m);depMeshes.push(m);
  const e=new THREE.LineSegments(new THREE.EdgesGeometry(g,30),new THREE.LineBasicMaterial({color:0x04213F,transparent:true,opacity:.55}));m.add(e);
  r.forEach(([x,y])=>{cx+=x;cy+=y;n++;});
  let a=0;for(let i=0,j=r.length-1;i<r.length;j=i++)a+=(r[j][0]+r[i][0])*(r[j][1]-r[i][1]);area+=Math.abs(a)/2;});
 d.cx=cx/n;d.cy=cy/n;d.area=area;
 const big=d.rings.reduce((a,b)=>b.length>a.length?b:a);if(!pip(d.cx,d.cy,big)){d.cx=big[0][0]*.5+big[Math.floor(big.length/2)][0]*.5;d.cy=big[0][1]*.5+big[Math.floor(big.length/2)][1]*.5;}});
const bog=DEP.find(d=>d.c==='11');
/* puntos: personas con pendiente */
const NP=1400,dots=[];let rs=7;const rnd=()=>{rs=(rs*16807)%2147483647;return rs/2147483647;};
const tot=DEP.reduce((a,d)=>a+Math.sqrt(d.area),0);
DEP.forEach(d=>{const k=Math.round(NP*Math.sqrt(d.area)/tot);const big=d.rings.reduce((a,b)=>b.length>a.length?b:a);let xs=big.map(p=>p[0]),ys=big.map(p=>p[1]);const x0=Math.min(...xs),x1=Math.max(...xs),y0=Math.min(...ys),y1=Math.max(...ys);let c=0,tries=0;while(c<k&&tries<5000){tries++;const x=x0+rnd()*(x1-x0),y=y0+rnd()*(y1-y0);if(pip(x,y,big)){dots.push({x,y,d,r:rnd()});c++;}}});
const dg=new THREE.SphereGeometry(0.09,8,6);const dm=new THREE.MeshBasicMaterial({color:0xffffff});
const inst=new THREE.InstancedMesh(dg,dm,dots.length);map.add(inst);
const red=new THREE.Color(0xFF5A5F),grn=new THREE.Color(0x3FD39B),tmpC=new THREE.Color(),tmpM=new THREE.Matrix4();
/* arcos */
function arc(d,color){const a=new THREE.Vector3(bog.cx,bog.cy,0),b=new THREE.Vector3(d.cx,d.cy,0);const mid=a.clone().add(b).multiplyScalar(.5);const len=a.distanceTo(b);mid.z=2+len*.45;
 const cur=new THREE.QuadraticBezierCurve3(a,mid,b);const g=new THREE.TubeGeometry(cur,48,0.07,6,false);const l=new THREE.Mesh(g,new THREE.MeshBasicMaterial({color,transparent:true,opacity:.9}));l.userData.n=g.index.count;l.userData.base=d;map.add(l);return l;}
const arcsSend=DEP.filter(d=>d!==bog).map(d=>arc(d,0x6FE3B8));
const arcsGroups=GR.map((g,gi)=>DEP.filter(d=>d!==bog).filter((d,i)=>i%GR.length===gi||i%4===gi%4).map(d=>arc(d,new THREE.Color(g.c).getHex())));
/* hub SISPRO */
const hub=new THREE.Mesh(new THREE.CylinderGeometry(.32,.32,.8,32),new THREE.MeshStandardMaterial({color:0xFFAB00,emissive:0x664400}));hub.rotation.x=Math.PI/2;map.add(hub);
/* anillo del ciclo */
const ring=new THREE.Group();scene.add(ring);const segs=[];
STEPS.forEach((s,i)=>{const SW=2*Math.PI/STEPS.length;const a0=Math.PI/2-i*SW-0.03,a1=a0-SW+0.06;const sh=new THREE.Shape();const R=5.2,r=3.6,N=24;
 for(let k=0;k<=N;k++){const a=a0+(a1-a0)*k/N;if(k===0)sh.moveTo(Math.cos(a)*R,Math.sin(a)*R);else sh.lineTo(Math.cos(a)*R,Math.sin(a)*R);}
 for(let k=N;k>=0;k--){const a=a0+(a1-a0)*k/N;sh.lineTo(Math.cos(a)*r,Math.sin(a)*r);}
 const g=new THREE.ExtrudeGeometry(sh,{depth:.6,bevelEnabled:true,bevelSize:.06,bevelThickness:.06,bevelSegments:2});
 const m=new THREE.Mesh(g,new THREE.MeshStandardMaterial({color:new THREE.Color(s[1]),roughness:.5,emissive:new THREE.Color(s[1]),emissiveIntensity:.15}));
 m.userData.mid=(a0+a1)/2;ring.add(m);segs.push(m);});
ring.rotation.x=-0.35;
/* etiquetas del anillo */
const lbls=STEPS.map(s=>{const e=document.createElement('div');e.className='lbl';e.textContent=s[0];e.style.background=s[1];if(s[1]==='#FFAB00')e.style.color='#04213F';document.body.appendChild(e);return e;});
const hubL=document.createElement('div');hubL.className='lbl';hubL.textContent='SISPRO';hubL.style.background='#FFAB00';hubL.style.color='#04213F';document.body.appendChild(hubL);
/* utilidades */
const ease=x=>x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2;
const cl=(x,a,b)=>Math.max(0,Math.min(1,(x-a)/(b-a)));
const KF=[[0,[0,46,34],[0,0,0]],[7,[2,34,26],[0,0,0]],[16,[-4,30,24],[-1,0,-1]],[30,[6,26,20],[1,0,0]],[46,[0,30,22],[0,0,0]],[54,[3,40,30],[0,0,0]],[60,[0,46,34],[0,0,0]]];
function camAt(t){let i=0;while(i<KF.length-2&&t>KF[i+1][0])i++;const [t0,p0,l0]=KF[i],[t1,p1,l1]=KF[i+1];const u=ease(cl(t,t0,t1));const p=p0.map((v,k)=>v+(p1[k]-v)*u),l=l0.map((v,k)=>v+(l1[k]-v)*u);
 const sway=Math.sin(t*.25)*3;cam.position.set(p[0]*ZM+sway+OFF,p[1]*ZM,p[2]*ZM);cam.lookAt(l[0]+OFF,l[1],l[2]);}
const fmt=n=>Math.round(n).toLocaleString('es-CO').replace(/,/g,'.');
const v3=new THREE.Vector3();
function screen(obj,local){v3.copy(local);obj.localToWorld(v3);v3.project(cam);return [(v3.x+1)/2*innerWidth,(1-v3.y)/2*innerHeight,v3.z<1];}
/* estado en función del tiempo */
const scs=[...document.querySelectorAll('.sc')];
let lastStep=-1,lastG=-1;
function render(t){
 camAt(t);
 const up=ease(cl(t,0.3,5));
 depMeshes.forEach(m=>{m.scale.z=Math.max(.02,m.userData.d.h*up);});
 /* hub */
 hub.position.set(bog.cx,bog.cy,bog.h*up+0.7);hub.scale.setScalar(t>15?1+Math.sin(t*4)*.08:0.001);
 /* puntos */
 const dShow=cl(t,7.6,13),close=cl(t,46.5,53.5);
 dots.forEach((p,i)=>{const s=(p.r<dShow?1:0);tmpM.makeTranslation(p.x,p.y,p.d.h*up+0.12);tmpM.scale(new THREE.Vector3(s,s,s));inst.setMatrixAt(i,tmpM);
  const done=p.r< (t<46?0:close*0.92) ;inst.setColorAt(i,done?grn:red);});
 inst.instanceMatrix.needsUpdate=true;if(inst.instanceColor)inst.instanceColor.needsUpdate=true;
 /* arcos de envío en el ciclo */
 const sendU=cl(t,21,25.5),sendOut=1-cl(t,29,30.5);
 arcsSend.forEach((l,i)=>{const u=Math.max(0,Math.min(1,sendU*1.6-i/arcsSend.length*.6));l.geometry.setDrawRange(0,Math.floor(l.userData.n*u/6)*6);l.material.opacity=.9*sendOut;l.visible=u>0&&sendOut>0;});
 /* arcos por grupo */
 const gi=t>=30&&t<46?Math.min(GR.length-1,Math.floor((t-30)/2)):-1;
 arcsGroups.forEach((ls,k)=>{const lt=t-(30+k*2);const u=k===gi?cl(lt,0,1.2):(k<gi?1:0);const op=k===gi?.95:(k<gi?.18:0);
  ls.forEach((l,i)=>{l.geometry.setDrawRange(0,Math.floor(l.userData.n*Math.max(0,Math.min(1,u*1.3-i*.02))/6)*6);l.material.opacity=op*(t<46?1:1-cl(t,46,47.5));l.visible=op>0&&t<47.5;});});
 /* anillo */
 const ringIn=cl(t,16,18),ringOut=1-cl(t,29,30.5);const rs=ease(ringIn)*ringOut;
 ring.position.set(1.5,9.5+(1-rs)*4,-2);ring.scale.setScalar(Math.max(.001,rs*.82));ring.rotation.z=-t*.08;
 const si=t>=17&&t<29?Math.min(STEPS.length-1,Math.floor((t-17)/1.5)):-1;
 segs.forEach((m,i)=>{const on=i===si;m.position.z=on?.9:0;m.material.emissiveIntensity=on?.55:.12;
  const mid=m.userData.mid,R=4.4;const [x,y,vis]=screen(m,new THREE.Vector3(Math.cos(mid)*R,Math.sin(mid)*R,1));lbls[i].style.left=x+'px';lbls[i].style.top=y+'px';lbls[i].classList.toggle('on',rs>.6&&vis);});
 if(si!==lastStep){lastStep=si;if(si>=0){const s=STEPS[si];document.getElementById('st').textContent=s[0];document.getElementById('sw').textContent=s[2];document.getElementById('sn').textContent=s[3];document.getElementById('stepbox').style.setProperty('--sk',s[1]);}}
 const [hx,hy,hv]=screen(map,new THREE.Vector3(bog.cx,bog.cy,bog.h*up+1.6));hubL.style.left=hx+'px';hubL.style.top=hy+'px';hubL.classList.toggle('on',t>18&&t<30&&hv);
 /* grupos */
 if(gi!==lastG){lastG=gi;if(gi>=0){const g=GR[gi];document.getElementById('gt').textContent=g.n;document.getElementById('gbox').innerHTML='<div class="grp" style="--gc:'+g.c+'"><b>'+g.items.length+(g.items.length===1?' lista':' listas')+'</b><ul>'+g.items.map(x=>'<li>'+x+'</li>').join('')+'</ul></div>';
  const done=GR.slice(0,gi+1).reduce((a,x)=>a+x.items.length,0);document.getElementById('gc').textContent='Grupo '+(gi+1)+' de '+GR.length+'. '+done+' de ${L.length} listas.';}}
 /* contador */
 document.getElementById('cnt').textContent=fmt(1849649*ease(cl(t,8,12.5)));
 /* textos */
 scs.forEach(s=>s.classList.toggle('on',t>=+s.dataset.a&&t<+s.dataset.b));
 /* controles */
 document.getElementById('pb').style.width=(t/DUR*100)+'%';document.getElementById('tt').textContent=Math.floor(t)+' s';
 renderer.render(scene,cam);
}
/* reloj */
let t=0,playing=true,last=performance.now();
const bp=document.getElementById('play');
function setPlay(v){playing=v;bp.textContent=v?'Pausa':'Reproducir';bp.setAttribute('aria-label',v?'Pausar':'Reproducir');}
bp.addEventListener('click',()=>{if(!playing&&t>=DUR)t=0;setPlay(!playing);});
document.getElementById('rep').addEventListener('click',()=>{t=0;setPlay(true);});
document.addEventListener('keydown',e=>{if(e.code==='Space'){e.preventDefault();bp.click();}});
function resize(){const asp=innerWidth/innerHeight;OFF=asp>1.2?-7:0;ZM=asp>1.2?1.12:1.45;renderer.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.fov=innerWidth<700?58:42;if(asp<0.9)cam.setViewOffset(innerWidth,innerHeight,0,-innerHeight*0.2,innerWidth,innerHeight);else cam.clearViewOffset();cam.updateProjectionMatrix();}
addEventListener('resize',resize);resize();
const q=new URLSearchParams(location.search);if(q.has('t')){t=+q.get('t');setPlay(false);}
function loop(now){const dt=Math.min(.1,(now-last)/1000);last=now;if(playing){t+=dt;if(t>=DUR){t=DUR;setPlay(false);}}render(t);requestAnimationFrame(loop);}
requestAnimationFrame(loop);
</script></body></html>`;
fs.writeFileSync('/home/claude/listas-de-pacientes-colombia/presentacion.html',html);
console.log('ok',html.length);
