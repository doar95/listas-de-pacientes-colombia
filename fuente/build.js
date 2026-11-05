const fs=require('fs'),path=require('path');
const D=__dirname;
const REFS=require('./refs.js');const {GRUPOS,L}=require('./lists.js');
const RIX={};REFS.forEach(r=>RIX[r.id]=r);
const geih=JSON.parse(fs.readFileSync('/tmp/geihc/data/datos.json','utf8'));
let css=fs.readFileSync(path.join(D,'base.css'),'utf8').replace('<style>','').replace('</style>','');
const cite=s=>String(s).replace(/\[\[(\w+)\]\]/g,(m,id)=>{if(!RIX[id])throw new Error('ref '+id);return '<a class="f" href="'+RIX[id].url+'"></a>';});
const SHORT={pdc:'Plan de choque con riesgo vital',epi:'Epilepsia',sup:'Insuficiencia suprarrenal',hipo:'Hipoparatiroidismo',lup:'Lupus',trr:'Diálisis y trasplante',vih:'VIH',tb:'Tuberculosis',hem:'Hemofilia',renal0:'Estudio renal pendiente',hta:'Hipertensión no controlada',dm:'Diabetes no controlada',erc:'Enfermedad renal avanzada',iam:'Después del infarto',ic:'Insuficiencia cardiaca',epoc:'EPOC',mama:'Cáncer de mama',cervix:'Cuello uterino',crc:'Colon y recto',onco:'Inicio de tratamiento',ar:'Artritis reumatoide',vhc:'Hepatitis C',gest:'Gestantes',sif:'Sífilis gestacional',desn:'Desnutrición aguda',vac:'Vacunación',sui:'Intento de suicidio',hosp:'Hospitalizaciones evitables',poli:'Polifarmacia',quej:'Quejas repetidas',presc:'Prescriptores atípicos',ips:'Prestadores con demoras',dato:'Calidad del dato'};
const G={};GRUPOS.forEach(g=>G[g[0]]=g);
const TITLE='Listas para actuar a tiempo: plataforma interinstitucional de seguimiento y control';

/* ---------- NAV ---------- */
const navGroups=[
 ['Inicio',[['brief','Brief']]],
 ['Plataforma interinstitucional',[['plataforma','Plataforma integrada'],['vacios','Vacíos entre plataformas'],['gobernanza','Gobernanza']]],
 ['Contexto y diagnóstico',[['sistema','Sistema y funciones'],['tablero','Tablero del plan de choque'],['cac','Cuenta de Alto Costo'],['carga','Carga de enfermedad'],['territorios','Territorios'],['datos','Datos e interoperabilidad']]],
 ...GRUPOS.map(g=>[g[1],L.filter(x=>x.g===g[0]).map(x=>['l-'+x.id,SHORT[x.id]]),g[2]]),
 ['Supersalud, normas y fuentes',[['supersalud','Supersalud'],['juridica','Base jurídica'],['dofa','DOFA'],['mundo','Otros países'],['evidencia','Evidencia'],['ruta','Ruta'],['avisos','Fuentes y avisos']]]
];
const firstK=navGroups.findIndex(g=>g[2]);
const navGroup=([h,items,k],idx)=>(k&&idx===firstK?'<p class="nsup">Listas</p>':'')+(!k&&idx===navGroups.length-1?'<p class="nsup">Instrumentos</p>':'')+'<p class="ng'+(k?' ngl" style="--k:'+k:'')+'">'+h+'</p>'+items.map(([id,t])=>'<button role="tab" data-t="'+id+'"'+(k?' class="lb" style="--k:'+k+'"':'')+'>'+t+'</button>').join('');
const navRaw='<nav class="tabs" aria-label="Secciones del brief"><button class="menu" aria-expanded="false" aria-controls="navlist"><svg class="mi" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2.4" fill="none"/></svg><span class="mtx"><b>Menú del brief</b><span id="mcur">Brief</span></span><span class="mch" id="mch">Ver las 47 secciones</span></button><div class="wrap" id="navlist" role="tablist">'+navGroups.map(navGroup).join('')+'</div></nav>';
const nav=navRaw.replace('data-t="brief">Brief</button>','data-t="brief">Brief</button><a class="navpres" href="presentacion.html">Presentación de 60 segundos</a>');

/* ---------- BRIEF ---------- */
const WSEG=[['Identificar','#004884'],['Priorizar','#3366CC'],['Enviar','#069169'],['Actuar','#FFAB00'],['Seguir','#0F7C8C'],['Verificar','#A80521'],['Controlar','#7B52B8'],['Evaluar','#0B457F']];
const wheel=(()=>{const R=150,r0=92,cx=160,cy=160,n=WSEG.length,g=0.035;let o='<div class="wheel" aria-label="Ciclo de ocho pasos: '+WSEG.map(w=>w[0].toLowerCase()).join(', ')+'"><svg viewBox="0 0 320 320" role="img"><title>Ciclo de la plataforma</title>';
WSEG.forEach(([t,c],i)=>{const a0=-Math.PI/2+i*2*Math.PI/n+g,a1=-Math.PI/2+(i+1)*2*Math.PI/n-g;const P=(rr,a)=>(cx+rr*Math.cos(a)).toFixed(1)+' '+(cy+rr*Math.sin(a)).toFixed(1);
o+='<path d="M'+P(R,a0)+' A'+R+' '+R+' 0 0 1 '+P(R,a1)+' L'+P(r0,a1)+' A'+r0+' '+r0+' 0 0 0 '+P(r0,a0)+'Z" fill="'+c+'"/>';const am=(a0+a1)/2,rm=(R+r0)/2;o+='<text x="'+(cx+rm*Math.cos(am)).toFixed(1)+'" y="'+(cy+rm*Math.sin(am)+4).toFixed(1)+'" text-anchor="middle" class="wl'+(c==='#FFAB00'?' d':'')+'" style="font-size:10.5px">'+t+'</text>';});
return o+'<text x="160" y="156" text-anchor="middle" class="c1">Cada corte</text><text x="160" y="176" text-anchor="middle" class="c2">el mismo caso, mejor dato</text></svg></div>';})();

const arrow='<svg class="ar" viewBox="0 0 40 24" aria-hidden="true"><path d="M0 12h32M24 4l9 8-9 8" fill="none" stroke="currentColor" stroke-width="3"/></svg>';
const sysmap=`<div class="smap" role="img" aria-label="Mapa del sistema: los datos llegan a SISPRO, el Ministerio identifica, prioriza y envía listas a EPS, IPS, gestores farmacéuticos y secretarías; la Supersalud y la Cuenta de Alto Costo verifican; el IETS y las sociedades científicas validan criterios">
 <div class="sm-top"><b>Validan los criterios</b><span>IETS con sociedades científicas</span><small>Ley 1438 de 2011, art. 92; Ley 1751 de 2015, art. 17</small></div>
 <div class="sm-row">
  <div class="sm-col sm-data"><b>Datos que ya existen</b>
   <span>RIPS con factura electrónica<small>Resolución 2275 de 2023</small></span>
   <span>Historia clínica interoperable y resumen de dispensación<small>Ley 2015 de 2020; Resolución 1799 de 2026</small></span>
   <span>Cohortes de la Cuenta de Alto Costo<small>Decreto 780 de 2016</small></span>
   <span>SIVIGILA del INS<small>Decreto 4109 de 2011</small></span>
   <span>Afiliados de la ADRES<small>Ley 1753 de 2015, art. 66</small></span>
   <span>Tablero del plan de choque, MIPRES y quejas</span></div>
  <div class="sm-ar">${arrow}<small>datos nominales</small></div>
  <div class="sm-col sm-min"><b>Ministerio de Salud y Protección Social</b>
   <span><i>SISPRO</i>Ley 1438 de 2011, art. 112</span>
   <span><i>Identifica</i>Dirección de Epidemiología y Demografía</span>
   <span><i>Prioriza</i>Viceministerio de Protección Social y Dirección de Regulación de Operación del Aseguramiento</span>
   <span><i>Corre y envía</i>Dirección Estratégica de Tecnología de la Información</span>
   <span><i>Evalúa</i>Ambos viceministerios con el IETS</span></div>
  <div class="sm-ar">${arrow}<small>listas por EPS y territorio</small></div>
  <div class="sm-col sm-act"><b>Actúan con cada persona</b>
   <span>EPS<small>Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14</small></span>
   <span>IPS y equipos tratantes<small>Resolución 3100 de 2019; Resolución 3280 de 2018</small></span>
   <span>Gestores farmacéuticos<small>Resolución 1604 de 2013</small></span>
   <span>Secretarías departamentales, distritales y municipales<small>Ley 715 de 2001, arts. 43 y 44</small></span></div>
 </div>
 <div class="sm-back"><span>cierre persona por persona</span>${arrow}</div>
 <div class="sm-bot"><b>Siguen, verifican y controlan</b><span>Supersalud: Subdirección de Analítica, Delegada de Aseguramiento, Delegada de Prestadores y Delegada de Protección al Usuario</span><span>Sistemas de la Supersalud: alertas tempranas, FÉNIX, GAUDI y gestión de PQRD</span><span>Cuenta de Alto Costo: auditoría de cohortes</span><small>Decreto 1080 de 2021, arts. 7, 16, 17, 19, 22 y 25; Ley 1949 de 2019; Resolución 5917 de 2017</small></div>
</div>`;

const steps=[
 ['Identificar','var(--navy)','Dirección de Epidemiología y Demografía con la Dirección Estratégica de Tecnología de la Información.','El Ministerio administra la información del sistema en SISPRO (Ley 1438 de 2011, art. 112) y todos los agentes deben entregarle la que requiera (Ley 1751 de 2015, art. 19). Epidemiología y Demografía está en el Viceministerio de Salud Pública y Atención Primaria (Decreto 120 de 2026, art. 5) y dirige desde 2011 los estudios de situación de salud (Decreto 4107 de 2011, art. 21, num. 1).','Se aplican los criterios en códigos CIE 10, CUPS y ATC sobre RIPS, historia clínica interoperable, Cuenta de Alto Costo, SIVIGILA, MIPRES y el tablero del plan de choque.','Universo de personas, prescriptores o prestadores que cumplen cada criterio.'],
 ['Priorizar','var(--blue)','Viceministerio de Protección Social y Dirección de Regulación de Operación del Aseguramiento.','El aseguramiento incluye la gestión del riesgo en salud (Ley 1122 de 2007, art. 14). El Viceministerio de Protección Social tiene a cargo la regulación de la operación del aseguramiento (Decreto 120 de 2026, art. 5) y desde 2011 consolida y evalúa el seguimiento al aseguramiento (Decreto 4107 de 2011, art. 28, num. 4).','Cada registro recibe prioridad alta o estándar según el criterio clínico de la lista.','Lista ordenada por EPS y por departamento.'],
 ['Enviar','var(--green)','Dirección Estratégica de Tecnología de la Información.','Lineamientos de interoperabilidad y calidad de datos (Decreto 120 de 2026, art. 9, num. 3 y 6). La entrega de datos a una entidad que los requiere en ejercicio de sus funciones no exige autorización del titular (Ley 1581 de 2012, art. 10, lit. a), limitada a la finalidad y al destinatario competente.','Cada EPS recibe solo a sus afiliados; cada secretaría, su territorio; cada IPS, la comparación de sus profesionales.','Constancia de entrega por destinatario.'],
 ['Actuar','var(--yellow)','EPS, IPS, gestores farmacéuticos y secretarías.','Las EPS organizan el acceso y controlan la atención de sus afiliados (Ley 100 de 1993, art. 178) y gestionan el riesgo (Ley 1122 de 2007, art. 14; Decreto 682 de 2018). Las secretarías dirigen y vigilan el sistema en su territorio (Ley 715 de 2001, art. 43).','La EPS contacta, entrega o agenda y reporta el cierre. El médico tratante decide la conducta.','Archivo de cierre por persona con fecha y código del servicio.'],
 ['Seguir','#0F7C8C','Supersalud: Subdirección de Analítica, con el sistema de alertas tempranas, y Delegada para la Protección al Usuario.','La Subdirección de Metodologías e Instrumentos de Supervisión diseña el sistema de alertas tempranas y la Subdirección de Analítica lo mantiene actualizado y produce modelos de analítica e inteligencia artificial (Decreto 1080 de 2021, art. 16, num. 6; art. 17, num. 6 y 7). La Delegada para la Protección al Usuario prioriza y alerta sobre las quejas (art. 19, num. 5).','Cada caso abierto se sigue con su fecha, su responsable y el tiempo que falta para el daño; la queja del paciente entra como señal.','Alertas por caso y por vigilado.'],
 ['Verificar','var(--red)','Supersalud: Subdirección de Analítica y delegadas. Apoyo de la Cuenta de Alto Costo.','La Supersalud instruye y fija la información que reportan sus vigilados (Decreto 1080 de 2021, art. 7, num. 2 y 15) y valida la calidad, consistencia y homogeneidad de lo reportado (art. 17, num. 8).','El cierre se triangula: fuente administrativa, como RIPS, factura y resumen digital; confirmación del paciente; y auditoría por muestreo, en línea con las auditorías aleatorias que la Supersalud anunció para el plan de choque.','Tasa de cierre verificado por EPS.'],
 ['Controlar','#7B52B8','Supersalud: Delegada para Entidades de Aseguramiento en Salud, Delegada para Prestadores y Despacho del Superintendente.','Inspección, vigilancia y control de la gestión del riesgo de las EPS (Decreto 1080 de 2021, art. 22, num. 1), planes de mejoramiento (art. 23, num. 19), órdenes de inmediato cumplimiento (art. 7, num. 3) y régimen sancionatorio (Ley 1949 de 2019). Para las entidades bajo medida especial, el reporte va por FÉNIX (Resolución 5917 de 2017).','La brecha que persiste sube por la escalera de supervisión, de la retroalimentación al plan de mejoramiento y, solo si es necesario, a la sanción.','Medidas aplicadas por vigilado y su resultado.'],
 ['Evaluar y ajustar','var(--deep)','Viceministerio de Protección Social y Viceministerio de Salud Pública y Atención Primaria, con el IETS y el Observatorio Nacional de Salud.','El Viceministerio de Salud Pública coordina y hace seguimiento a las acciones de salud pública y atención primaria (Decreto 120 de 2026, art. 19, num. 6) y evalúa con EPS y territorios la promoción y prevención (art. 20, num. 6). El IETS evalúa la evidencia (Ley 1438 de 2011, art. 92) y el Observatorio Nacional de Salud hace seguimiento a la situación de salud (art. 8).','Una cohorte centinela mide desenlaces a 90 y 365 días: continuidad, recaída, hospitalización y muerte. Se revisa qué listas reducen eventos evitables y qué criterios generan ruido.','Resultados agregados publicados y criterios ajustados.']
];
const stepsHtml='<ol class="steps">'+steps.map(([t,k,r,f,q,p])=>`<li class="step" style="--k:${k}"><div class="h${k.includes('yellow')?' d':''}">${t}</div><div class="b"><dl class="rg"><dt>Responsable</dt><dd>${r}</dd><dt>Fundamento</dt><dd>${f}</dd><dt>Qué se hace</dt><dd>${q}</dd><dt>Producto</dt><dd>${p}</dd></dl></div></li>`).join('')+'</ol>';



const cycNorm={Identificar:'Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 5',Priorizar:'Ley 1122 de 2007, art. 14; Decreto 120 de 2026, art. 5; Decreto 4107 de 2011, art. 28',Enviar:'Decreto 120 de 2026, art. 9; Ley 1581 de 2012, art. 10',Actuar:'Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Ley 715 de 2001, art. 43',Seguir:'Decreto 1080 de 2021, arts. 16, 17 y 19',Verificar:'Decreto 1080 de 2021, arts. 7 y 17',Controlar:'Decreto 1080 de 2021, arts. 7, 22 y 23; Ley 1949 de 2019; Resolución 5917 de 2017','Evaluar y ajustar':'Decreto 120 de 2026, arts. 19 y 20; Ley 1438 de 2011, arts. 8 y 92'};
const cycTable='<div class="tw"><table class="cyc"><thead><tr><th>Paso</th><th>Quién</th><th>Norma</th><th>Producto</th></tr></thead><tbody>'+steps.map(([t,k,r,f,q,pr])=>'<tr><td style="border-left:6px solid '+k+'"><b>'+t+'</b></td><td>'+r+'</td><td>'+cycNorm[t]+'</td><td>'+pr+'</td></tr>').join('')+'</tbody></table></div>';
const existe=[
['Pirámide de riesgo del plan de choque','Ordena a los pacientes con pendientes en tres niveles de riesgo, construidos con la Cuenta de Alto Costo y las sociedades científicas [[pdcpiramide]].','La adopta como la prioridad clínica de todas las listas, la lleva a cada corte y la extiende a personas que todavía no tienen una orden.'],
['Mesa Técnica de Control y tablero público del plan de choque','La mesa del Ministerio, la Supersalud y la ADRES hace seguimiento [[pdcavance]]; el tablero semanal muestra personas, registros y unidades por tecnología, EPS y ubicación [[tablero]].','Suma una vista del avance por nivel de riesgo, una verificación cruzada del cierre con RIPS y la historia clínica, y categorías para las condiciones de continuidad vital.'],
['Circular de la Supersalud para menores en riesgo vital','Exige a las EPS una base de menores en cohortes priorizadas, con seguimiento mensual, anexo de 19 campos y acceso directo de la Supersalud [[cenna]].','Usa el mismo formato para adultos y para las demás listas; no hace falta un reporte nuevo.'],
['Cuenta de Alto Costo','Cohortes nominales auditadas desde 2007; participa en el plan de choque [[caccv]].','Las brechas vuelven a la EPS en cada corte, con nombre propio.'],
['Analítica de hospitalizaciones evitables de la ADRES','Identificó 748.212 hospitalizaciones evitables en 2025 [[adres]].','Lista nominal y control después del egreso.'],
['Acuerdo de la ADRES y el Invima','Cruza prescripción, suministro y gasto por producto [[adresinvima]].','Comparación entre pares por prescriptor, confidencial y revisada en la IPS.'],
['Supervisión de la Supersalud','46 indicadores de seguimiento a EPS en 2026 y un reto declarado de supervisión con analítica y alertas tempranas [[rcsuper]]; FÉNIX para las entidades bajo medida especial [[fenix]]; indicadores de alerta temprana de EPS e IPS [[circ09]]; GAUDI, que convierte hallazgos de auditoría en alertas [[gaudi]].','Las listas son esas alertas, a nivel de persona, y sus indicadores pueden proponerse como trazadores en FÉNIX y GAUDI.'],
['Resolución 2445 de 2026','Obliga a las EPS a mantener actualizado el reporte de pendientes, crea una Mesa de Seguimiento al Reporte y exige facturas validadas por FEV RIPS en el SIIFA para la línea de crédito del plan de choque [[r2445]].','Usa el mismo reporte actualizado como fuente de las listas, sin pedir un formato nuevo.']];
const existeTable='<div class="tw"><table><thead><tr><th>Lo que ya existe</th><th>Qué hace hoy</th><th>Cómo lo complementa el ciclo</th></tr></thead><tbody>'+existe.map(r=>'<tr><td><b>'+r[0]+'</b></td><td>'+cite(r[1])+'</td><td>'+r[2]+'</td></tr>').join('')+'</tbody></table></div>';
const chips=x=>'<div class="chips"><span>Daño en '+x.dano+'</span><span>Fuente nominal '+x.dato+'</span><span>Vuelta '+x.vuelta+'</span></div>';
const index=GRUPOS.map(g=>{const ls=L.filter(x=>x.g===g[0]);return `<h3 class="gh" style="--k:${g[2]}">${g[1]}</h3><p class="gd">${g[3]}</p><div class="lgrid">`+ls.map(x=>`<a class="lc" style="--k:${g[2]}" href="#l-${x.id}" data-go="l-${x.id}"><b>${x.t}</b><span>${x.valor}</span>${chips(x)}<i>Abrir la lista</i></a>`).join('')+'</div>';}).join('');
const brief=`<section id="brief" class="on" role="tabpanel"><div class="wrap">
<div class="hero"><div>
<p class="lead">El sistema ya sabe, persona por persona, quién dejó de recibir un medicamento del que depende su vida, quién tiene diabetes sin estudio renal, qué gestante no ha tenido su primer control y qué médico prescribe muy distinto a sus pares.</p>
<p class="lead">Ese conocimiento está repartido: el Ministerio ve el avance del plan, la ADRES ve los pagos, la Supersalud ve a sus vigilados, la Cuenta de Alto Costo ve sus cohortes y la persona no ve su propio caso. La propuesta es una plataforma interinstitucional que une esas piezas alrededor de una unidad común, el caso del paciente, y lo sigue hasta que recibe lo que necesita y le va mejor.</p>
</div>${wheel}</div>
<nav class="quick" aria-label="Accesos rápidos"><p>Explore el brief</p><div>
<a href="#idx" data-scroll="idx" class="qk">Las ${L.length} listas</a>
<a href="#plataforma" data-go="plataforma">Plataforma integrada</a>
<a href="#sistema" data-go="sistema">Sistema y funciones</a>
<a href="#tablero" data-go="tablero">Tablero del plan de choque</a>
<a href="#cac" data-go="cac">Cuenta de Alto Costo</a>
<a href="#territorios" data-go="territorios">Territorios</a>
<a href="#supersalud" data-go="supersalud">Supersalud</a>
<a href="presentacion.html" class="qp">Presentación de 60 segundos</a>
<button type="button" class="qm">Todas las secciones</button>
</div></nav>
<h2>Cada entidad, en su función</h2>
<div class="roles">
<div style="--k:var(--navy)"><b>Ministerio de Salud</b>Identifica, prioriza y fija la política.</div>
<div style="--k:var(--deep)"><b>ADRES</b>Aporta la afiliación, los pagos y su analítica.</div>
<div style="--k:var(--red)"><b>Supersalud</b>Sigue, verifica, alerta y controla.</div>
<div style="--k:var(--green)"><b>Secretarías de salud</b>Gestionan su territorio.</div>
<div style="--k:#B37800"><b>EPS e IPS</b>Gestionan sus casos y su práctica.</div>
<div style="--k:#0F7C8C"><b>Ciudadanía y organismos de control</b>Ven con transparencia el avance y el propio caso.</div>
</div>
<p class="small read">Ninguna entidad cede competencias: comparten la misma información, cada una desde su función. Detalle en <a href="#plataforma" data-go="plataforma">Plataforma integrada</a>.</p>
<h2>Qué cambia</h2>
<div class="cy">
<div><b>Para las personas</b>La atención llega antes de la urgencia: el medicamento antes de la crisis, el examen antes de la diálisis, el control antes del parto.</div>
<div><b>Para quien atiende</b>La EPS, la IPS, el gestor farmacéutico y el médico saben a quién buscar primero y ven su resultado comparado con sus pares.</div>
<div><b>Para el sistema</b>Menos hospitalizaciones evitables, un dato que mejora en cada corte y una medida verificable de gestión del riesgo por EPS.</div>
</div>
<h2>El sistema</h2>
${sysmap}
<h2>El ciclo</h2>
${cycTable}
<p class="small">Detalle de funciones por dependencia en <a href="#sistema" data-go="sistema">Sistema y funciones</a>.</p>
<h2>Lo que ya existe y cómo lo complementa la plataforma</h2>
<p class="read">El ciclo de listas se construye sobre lo que el sistema ya puso en marcha. Parte de la pirámide de riesgo, del tablero y de la mesa técnica del plan de choque, y de las bases nominales que existen, y les suma continuidad, verificación y nuevas listas.</p>
${existeTable}
<h2 id="idx" style="margin-top:34px;scroll-margin-top:70px">Las ${L.length} listas</h2>
<div class="box note read"><h3>Cómo leer el orden</h3><p>Las listas se agrupan por tipo de problema; el orden no es un ranking de importancia. La prioridad clínica entre pacientes la fija la pirámide oficial del plan de choque. Cada tarjeta muestra tres datos para decidir el arranque: en cuánto tiempo llega el daño si no se actúa, si la fuente nominal ya está lista y en qué vuelta se sugiere empezar. La primera vuelta se elige por factibilidad: dato listo y criterio sin discusión clínica. Las listas de médicos van en la tercera vuelta porque necesitan indicadores validados por las sociedades científicas, no porque importen menos.</p></div>
${index}
<h2>Por qué ahora</h2>
<div class="figs">
<div class="fig k-r"><b>27,77%</b><span>de las 1.849.649 personas del tablero del plan de choque tenía su pendiente cerrado al 27 de octubre de 2026; en procedimientos, el cierre de registros era de 24,78%</span>${cite('[[tablero]]')}</div>
<div class="fig"><b>7 millones</b><span>de personas con hipertensión, diabetes o enfermedad renal crónica en la Cuenta de Alto Costo</span>${cite('[[caccv]]')}</div>
<div class="fig k-b"><b>6,9 millones</b><span>de personas con historia clínica interoperable al 4 de agosto de 2026</span>${cite('[[ihce]]')}</div>
</div>
<div class="box suf read"><h3>Las listas y la suficiencia de recursos</h3>
<p>Cada lista identifica personas que necesitan una atención, y por eso también hace visible una demanda que hoy no siempre se registra. En un momento en que la suficiencia de los recursos del sistema está en discusión, su implementación debe ir de la mano con ella:</p>
<ul class="clean">
<li><b>Priorizar dentro de lo disponible.</b> Las listas ordenan a quién atender primero con los recursos existentes; no crean derechos ni obligaciones nuevas por fuera del plan de beneficios.</li>
<li><b>Medir antes de ampliar.</b> Cada lista nueva se acompaña de una estimación de la demanda que destapa y de su costo, para que se incorpore al análisis de suficiencia de la UPC y de los presupuestos máximos antes de exigir su cierre.</li>
<li><b>No trasladar el desbalance.</b> El cierre que se exige a una EPS debe ser coherente con su situación financiera y con el flujo de recursos hacia los prestadores; de lo contrario, el costo termina en la IPS o en el paciente.</li>
<li><b>Gradualidad.</b> Se empieza por las listas de mayor riesgo y menor costo de cierre, como la continuidad de tratamientos que ya se financian y los exámenes de control, y se amplía a medida que se confirma la capacidad.</li>
<li><b>Compensar con valor.</b> Las listas de bajo valor, polifarmacia y prescripción atípica liberan recursos que pueden reorientarse a las de mayor riesgo.</li>
</ul>
<p>La información que producen las listas, cuánta necesidad hay, dónde está y cuánto cuesta atenderla, es en sí misma un insumo para que las decisiones sobre la suficiencia se tomen con datos.</p></div>
<div class="box red read"><h3>Lo que esto no es</h3><p>No reemplaza ninguna fuente ni ningún sistema de control: los une alrededor del caso del paciente. No traslada funciones entre entidades. No sustituye al médico tratante: la lista dice a quién mirar primero y el médico decide qué hacer. La lista de prescriptores no califica a ningún médico desde el gobierno: se entrega en confidencialidad a su IPS para revisión entre pares. Ninguna lista es un instrumento para negar servicios.</p></div>
<p class="small read">Cada cifra lleva su fuente debajo y una nota numerada con la referencia completa al final de la sección. Uno de los curadores está vinculado a un conglomerado de salud con operación en Colombia; las ideas son personales y no representan a esa entidad. Detalles en <a href="#avisos" data-go="avisos">Fuentes y avisos</a>.</p>
</div></section>`;

/* ---------- SISTEMA ---------- */
const ent=(t,k,rows,nota)=>`<div class="ent" style="--k:${k}"><h3>${t}</h3><div class="tw"><table><thead><tr><th>Dependencia</th><th>Función y norma</th><th>Qué hace en el ciclo</th></tr></thead><tbody>${rows.map(r=>'<tr><td>'+r[0]+'</td><td>'+cite(r[1])+'</td><td>'+r[2]+'</td></tr>').join('')}</tbody></table></div>${nota?'<p class="small">'+cite(nota)+'</p>':''}</div>`;
const sistema=`<section id="sistema" role="tabpanel"><div class="wrap">
<h2>Sistema y funciones: quién hace qué</h2>
<h3>El ciclo en detalle</h3>
${stepsHtml}
<h3 style="margin-top:28px">Funciones por dependencia</h3>
<p class="read">Esta pestaña baja del nivel de entidad al de dependencia. Para cada una se indica la función que ya tiene y lo que haría en el ciclo de listas. Donde la compilación pública del Decreto 120 de 2026 no permite citar el numeral, se cita el artículo de estructura y la función equivalente del Decreto 4107 de 2011.</p>
${ent('Ministerio de Salud y Protección Social','var(--navy)',[
['Ministro de Salud y Protección Social','Dirige el sector y expide los actos administrativos generales del Ministerio (Decreto 120 de 2026) [[d120]].','Firma la circular externa y, si se necesitan variables nuevas de reporte, la resolución.'],
['Viceministerio de Protección Social','Tiene a cargo las direcciones de Regulación de Operación del Aseguramiento; de Regulación de Beneficios, Costos y Tarifas; y de Financiamiento Sectorial (Decreto 120 de 2026, art. 5). Antecedente: consolidar y evaluar el seguimiento y control del aseguramiento (Decreto 4107 de 2011, art. 28, num. 4) y proponer medidas contra la selección de riesgo (art. 29, num. 8) [[d4107]].','Lidera el ciclo, fija la regla de prioridad y recibe los resultados por EPS.'],
['Dirección de Regulación de Operación del Aseguramiento','Regulación de la operación del aseguramiento y de las condiciones de las EPS.','Convierte la lista en una obligación de gestión del riesgo exigible dentro de la habilitación y permanencia de las EPS (Decreto 682 de 2018) [[d682]].'],
['Dirección de Regulación de Beneficios, Costos y Tarifas','Regulación de beneficios y cálculo de la UPC.','Usa el cierre por EPS como información de gestión del riesgo en el análisis de suficiencia de la UPC 2027.'],
['Viceministerio de Salud Pública y Atención Primaria','Tiene a cargo Epidemiología y Demografía; Atención Primaria en Salud; Determinantes Sociales, Promoción y Prevención; y Medicamentos y Tecnologías (Decreto 120 de 2026, art. 5). Coordina y hace seguimiento a la salud pública y la atención primaria (art. 19, num. 6) y evalúa con EPS y territorios la promoción y prevención (art. 20, num. 6).','Co lidera las listas de salud pública, materno infantil, salud mental y riesgo cardiovascular.'],
['Dirección de Epidemiología y Demografía','Dirige los estudios de situación de salud desde 2011 (Decreto 4107 de 2011, art. 21, num. 1) y orienta los ASIS territoriales [[asis]].','Escribe los criterios en códigos y valida la consistencia de las cohortes.'],
['Dirección de Atención Primaria en Salud','Rutas integrales de atención (Resolución 3280 de 2018).','Traduce cada lista en el momento de la ruta que corresponde.'],
['Dirección de Determinantes Sociales, Promoción y Prevención','Programas de enfermedades no transmisibles, cáncer, salud mental, nutrición y el Programa Ampliado de Inmunizaciones.','Dueña técnica de las listas de hipertensión, diabetes, cáncer, gestantes, desnutrición, vacunación e intento de suicidio.'],
['Dirección de Medicamentos y Tecnologías en Salud','Política farmacéutica y vigilancia del abastecimiento.','Cruza las brechas de continuidad con desabastecimientos y define los códigos ATC trazadores.'],
['Dirección Estratégica de Tecnología de la Información','Lineamientos de interoperabilidad (Decreto 120 de 2026, art. 9, num. 3) y de gobernanza y calidad de datos (num. 6). El Ministerio tiene a cargo la historia clínica electrónica interoperable (art. 2, num. 61 y 62).','Corre los algoritmos en SISPRO y envía las listas por canal cifrado.']])}
${ent('Superintendencia Nacional de Salud','var(--red)',[
['Superintendente Nacional de Salud','Instruir a los vigilados y fijar la información que reportan (Decreto 1080 de 2021, art. 7, num. 2 y 15); órdenes de inmediato cumplimiento (num. 3) [[d1080]].','Firma la circular conjunta y define el archivo de cierre.'],
['Subdirección de Analítica','Alertas tempranas y validación de la calidad del dato (art. 17, num. 7 y 8); modelos de analítica (num. 6).','Cruza el cierre reportado con RIPS y factura; calcula la comparación entre prescriptores.'],
['Delegada para Entidades de Aseguramiento en Salud','Inspección, vigilancia y control de la gestión del riesgo de las EPS (art. 22, num. 1); correctivos (num. 4); medidas especiales (num. 22); planes de mejoramiento (art. 23, num. 19).','Aplica la escalera de supervisión a la EPS que no cierra.'],
['Delegada para Prestadores de Servicios de Salud','Calidad de la atención y autocontrol de las IPS (art. 25, num. 6 y 17).','Vigila que las IPS revisen en comité la señal de prescriptores y que los prestadores con demoras actúen.'],
['Delegada para la Protección al Usuario','Priorización y alertas sobre peticiones, quejas y reclamos (art. 19, num. 5).','Produce la lista de quejas repetidas.'],
['Delegada para Operadores Logísticos de Tecnologías en Salud y Gestores Farmacéuticos','Vigilancia de gestores farmacéuticos y operadores logísticos (Decreto 1080 de 2021).','Verifica la entrega en las listas de continuidad vital.'],
['Delegada para Investigaciones Administrativas','Procesos sancionatorios (Decreto 1080 de 2021; Ley 1949 de 2019).','Solo interviene en la cima de la escalera, cuando el incumplimiento persiste.']])}
${ent('Instituto Nacional de Salud','var(--green)',[
['Dirección de Vigilancia y Análisis del Riesgo en Salud Pública','Opera el SIVIGILA (Decreto 4109 de 2011) [[d4109]].','Entrega los casos nominales de sífilis gestacional, desnutrición aguda, intento de suicidio, tuberculosis y VIH.'],
['Observatorio Nacional de Salud','Seguimiento y evaluación de la situación de salud (Ley 1438 de 2011, art. 8).','Evalúa de forma independiente el efecto del ciclo sobre la mortalidad evitable.'],
['Dirección de Redes en Salud Pública','Red nacional de laboratorios.','Asegura la calidad de cargas virales, baciloscopias y pruebas de tamizaje que cierran las listas.']])}
${ent('ADRES, IETS y Cuenta de Alto Costo','var(--deep)',[
['ADRES','Administra los recursos del sistema y la base de afiliados (Ley 1753 de 2015, art. 66).','Aporta EPS, régimen y municipio de cada persona y su analítica de hospitalizaciones evitables [[adres]].'],
['IETS','Evaluación de tecnologías y elaboración de guías de práctica clínica (Ley 1438 de 2011, art. 92).','Valida los criterios de cada lista con las sociedades científicas y evalúa resultados.'],
['Cuenta de Alto Costo','Recibe, audita y analiza la información nominal de enfermedades de alto costo desde 2007 (Decreto 2699 de 2007, compilado en el Decreto 780 de 2016).','Aporta sus cohortes y marcas de brecha a once de las listas. Ver la pestaña Cuenta de Alto Costo.']])}
${ent('Territorios','var(--green)',[
['Secretarías departamentales y distritales','Dirigir, coordinar y vigilar el sistema en su territorio (Ley 715 de 2001, art. 43); ASIS y plan territorial de salud (Resolución 100 de 2024); verificación de habilitación de prestadores (Resolución 3100 de 2019); supervisión de la historia clínica interoperable en su jurisdicción (Resolución 1799 de 2026) [[res1799]].','Reciben la lista de su territorio, la cruzan con su ASIS y hacen seguimiento a EPS e IPS como autoridad sanitaria.'],
['Secretarías municipales','Gestión de la salud pública y del plan de intervenciones colectivas (Ley 715 de 2001, art. 44; Resolución 518 de 2015).','Búsqueda activa comunitaria en las listas de gestantes, vacunación, desnutrición y tuberculosis.']])}
${ent('Aseguradores, prestadores y profesionales','#B37800',[
['EPS','Organizar el acceso y controlar la atención integral y oportuna (Ley 100 de 1993, art. 178); gestión del riesgo (Ley 1122 de 2007, art. 14); capacidad técnica y sistemas de información como condición de habilitación (Decreto 682 de 2018); reporte de promoción y mantenimiento (Resolución 202 de 2021).','Contacta, gestiona y reporta el cierre persona por persona.'],
['IPS','Habilitación (Resolución 3100 de 2019); rutas integrales (Resolución 3280 de 2018); indicadores de calidad (Resolución 256 de 2016).','Atiende; su comité clínico revisa la señal de prescriptores.'],
['Gestores farmacéuticos','Entrega de medicamentos pendientes (Resolución 1604 de 2013) y resumen digital de dispensación (Resolución 1799 de 2026).','Cierra las listas de continuidad vital.'],
['Médicos y sociedades científicas','Autonomía profesional con autorregulación (Ley 1751 de 2015, art. 17); ética médica (Ley 23 de 1981).','Proponen indicadores y umbrales; la conducta clínica es siempre del médico tratante.']])}
<div class="box note read"><h3>La lista no crea obligaciones nuevas</h3><p>Para la EPS, la lista dice con precisión dónde está incumpliendo una obligación que ya tiene. Para la secretaría, es un insumo de su función de vigilancia. Para el médico, es información sobre su práctica que hoy no recibe.</p></div>
</div></section>`;

/* ---------- TABLERO ---------- */
const topMed=[['Valsartán','l-hta','Hipertensión'],['Esomeprazol','l-poli','Polifarmacia'],['Levotiroxina','l-pdc','Plan de choque, nivel 3'],['Simeticona con trimebutina','l-poli','Polifarmacia'],['Acetaminofén','l-poli','Polifarmacia'],['Ácido fólico, calcio y colecalciferol','l-gest','Gestantes'],['Atorvastatina','l-iam','Después del infarto'],['Omeprazol','l-poli','Polifarmacia'],['Colecalciferol','l-poli','Polifarmacia'],['Ácido poliacrílico','l-poli','Polifarmacia']];
const topProc=[['Creatinina en suero','l-renal0','Estudio renal'],['Triglicéridos','l-hta','Riesgo cardiovascular'],['Colesterol total','l-hta','Riesgo cardiovascular'],['Colesterol de alta densidad','l-hta','Riesgo cardiovascular'],['Hemograma IV','l-dm','Control crónico'],['Glucosa en suero','l-dm','Diabetes'],['Uroanálisis','l-renal0','Estudio renal'],['Hormona estimulante del tiroides ultrasensible','l-pdc','Plan de choque, nivel 3'],['Hemoglobina glicosilada automatizada','l-dm','Diabetes'],['Microalbuminuria automatizada en orina parcial','l-renal0','Estudio renal']];
const topT=(rows,h)=>'<div class="tw"><table><thead><tr><th>'+h+'</th><th>Lista que lo cubre</th></tr></thead><tbody>'+rows.map(r=>'<tr><td>'+r[0]+'</td><td><a href="#'+r[1]+'" data-go="'+r[1]+'">'+r[2]+'</a></td></tr>').join('')+'</tbody></table></div>';
const patol=[['Hipertensión arterial','120.734'],['Salud mental','56.356'],['Cáncer','43.881'],['Enfermedad huérfana','22.115'],['Diabetes','18.287'],['Gestación','9.513'],['VIH','7.959'],['EPOC','7.056'],['Asma','5.933'],['Trasplante','4.039'],['Hipertensión pulmonar','435'],['Hemofilia','262']];
const tableroSec=`<section id="tablero" role="tabpanel"><div class="wrap">
<h2>Tablero del plan de choque</h2>
<p class="read">El Ministerio publica cada semana el tablero Monitoreo al Plan de Choque, con filtros por tipo de tecnología, EPS, ubicación y corte, y páginas de resumen general, medicamentos, procedimientos, detalle de tecnologías y patologías. Las cifras de esta pestaña son del corte del 27 de octubre de 2026 ${cite('[[tablero]]')}.</p>
<div class="tw"><table><thead><tr><th>Indicador</th><th>Total</th><th>Medicamentos</th><th>Procedimientos</th></tr></thead><tbody>
<tr><td>Personas</td><td class="n">1.849.649</td><td class="n">602.156</td><td class="n">1.325.610</td></tr>
<tr><td>Personas con cierre de pendiente</td><td class="n">513.607 (27,77%)</td><td class="n">286.924</td><td class="n">268.751</td></tr>
<tr><td>Registros</td><td class="n">4.505.909</td><td class="n">1.043.301</td><td class="n">3.462.608</td></tr>
<tr><td>Registros con cierre de pendiente</td><td class="n">1.375.821 (30,53%)</td><td class="n">517.878 (49,64%)</td><td class="n">857.943 (24,78%)</td></tr>
<tr><td>Unidades</td><td></td><td class="n">14.419.546 dispensadas de 29.830.054 prescritas</td><td class="n">1.162.269 realizados; 3.548.753 pendientes</td></tr>
</tbody></table></div>
<p class="small">Una persona puede tener pendientes de medicamentos y de procedimientos, por eso las columnas no suman el total.</p>
<h3>Evolución entre cortes</h3><div class="tw"><table><thead><tr><th>Indicador</th><th>Corte del 13 de octubre</th><th>Corte del 27 de octubre</th></tr></thead><tbody><tr><td>Cierre de registros de medicamentos</td><td class="n">41,52%</td><td class="n">49,64%</td></tr><tr><td>Personas con cierre en medicamentos</td><td class="n">236.640</td><td class="n">286.924</td></tr><tr><td>Unidades de medicamento dispensadas</td><td class="n">12.514.638</td><td class="n">14.419.546</td></tr><tr><td>Cierre de registros de procedimientos</td><td class="n">13,33%</td><td class="n">24,78%</td></tr><tr><td>Personas con cierre en procedimientos</td><td class="n">157.148</td><td class="n">268.751</td></tr></tbody></table></div><p class="small">El tablero publica tres cortes: 13, 20 y 27 de octubre de 2026. Fuente: ${cite('[[tablero]]')}</p>
<div class="two"><div><h3>Medicamentos con más unidades pendientes</h3>${topT(topMed,'Medicamento, en orden')}</div><div><h3>Procedimientos con más registros pendientes</h3>${topT(topProc,'Procedimiento, en orden')}</div></div>
<h3>Patologías seleccionadas con registros gestionados</h3>
<div class="tw"><table><thead><tr><th>Patología</th><th>Registros gestionados</th></tr></thead><tbody>${patol.map(r=>'<tr><td>'+r[0]+'</td><td class="n">'+r[1]+'</td></tr>').join('')}</tbody></table></div>
<div class="box navy read"><h3>Lectura</h3><ul class="clean">
<li>El cuello de botella está en los procedimientos: hay más del doble de personas esperando procedimientos que medicamentos, y su cierre va a la mitad del ritmo.</li>
<li>Los procedimientos más pendientes son el control de laboratorio del paciente crónico: creatinina, lípidos, glucosa, hemoglobina glicosilada y microalbuminuria. Es el mismo contenido de las listas de estudio renal, hipertensión y diabetes, que lo resuelven dentro de la ruta de riesgo cardiovascular.</li>
<li>Entre los medicamentos más pendientes conviven tratamientos esenciales, como valsartán, levotiroxina y atorvastatina, con otros de menor valor clínico, como protectores gástricos y simeticona con trimebutina. La priorización por riesgo de la pirámide pone primero lo esencial, y las listas de polifarmacia y prescriptores ayudan a revisar la pertinencia del resto.</li>
<li>A las doce patologías del tablero, las listas suman categorías para enfermedad renal, insuficiencia cardiaca y condiciones de continuidad vital como epilepsia, insuficiencia suprarrenal, hipoparatiroidismo y lupus.</li>
</ul></div>
<div class="box" style="border-color:var(--green)"><h3>Lo que el ciclo de listas le suma al tablero</h3><ul class="clean">
<li>Una vista del avance por nivel de la pirámide.</li>
<li>Una verificación cruzada del cierre con RIPS y la historia clínica, que complementa el reporte de las EPS.</li>
<li>Las patologías de continuidad vital como categorías propias.</li>
<li>Una vista por prestador de procedimientos pendientes.</li>
<li>Una tabla descargable por EPS, municipio, nivel y tecnología en el portal de datos abiertos.</li>
</ul></div>
</div></section>`;

/* ---------- PLATAFORMA ---------- */
const layers=[['Fuentes existentes','var(--deep)','SISPRO, RIPS con factura electrónica, MIPRES, historia clínica interoperable, tablero del plan de choque, base de afiliados de la ADRES, Cuenta de Alto Costo, SIVIGILA, registro de vacunación, REPS, RUAF y listado de desabastecimiento del INVIMA. Ninguna se reemplaza.'],
['Integración','var(--blue)','Identificador de caso seudonimizado común, diccionario de datos compartido y reglas de calidad del dato.'],
['Inteligencia','#0F7C8C','Algoritmos de las listas, puntaje de riesgo, detección de reportes atípicos y clasificación de quejas, siempre con revisión humana.'],
['Seguimiento y control','var(--red)','Estados del caso, alertas por tiempo al daño, verificación del cierre y escalera de supervisión.'],
['Usuarios por entidad','var(--green)','Ministerio, ADRES, Supersalud, secretarías, EPS, IPS, ciudadanía y organismos de control, cada uno con la vista que corresponde a su función.']];
const modulos=[['Columna del caso','Registro único de casos con estados, fechas y responsables','Ministerio, en SISPRO','Todas'],
['Integración y calidad del dato','Enlace de fuentes por identificador seudonimizado, diccionario común y reglas de calidad','Ministerio, con el gobierno de datos de la Supersalud','Todas'],
['Motor de listas y priorización','Los algoritmos de las '+L.length+' listas, con prioridad por tiempo al daño y la pirámide de riesgo del plan de choque','Ministerio','Ministerio, EPS, secretarías'],
['Verificación y detección de anomalías','Triangulación del cierre, muestreo de auditoría y patrones de reporte atípicos','Supersalud','Supersalud, ADRES, Ministerio'],
['Alertas y escalera de control','Alertas por caso y por vigilado; escalones con disparador y plazo; alimenta el sistema de alertas tempranas, GAUDI y FÉNIX','Supersalud','Delegadas, EPS'],
['Cadena de atención y gestión territorial','Ruta por actor y tramo, de la prescripción a la dispensación y la atención; vista por departamento y municipio','Ministerio y secretarías','Secretarías, Supersalud'],
['Retroalimentación y bajo valor','Tableros privados para prescriptores e IPS, indicadores de bajo valor con aval clínico y una pirámide de intervención','Ministerio con el IETS y las sociedades científicas; Supersalud solo ante irregularidades','IPS, prescriptores, EPS'],
['Impacto y aprendizaje','Cohorte centinela, desenlaces a 90 y 365 días, evaluación de impacto y registro de actuaciones','Mesa Técnica, con el Observatorio Nacional de Salud, el IETS o universidades','Todas'],
['Transparencia y voz ciudadana','Tablero público con cifras reportadas y validadas, datos abiertos, consulta del propio caso y un botón de no recibí esto','Ministerio, con la gestión de PQRD de la Supersalud','Ciudadanía, medios, Procuraduría, Contraloría']];
const plataforma=`<section id="plataforma" role="tabpanel"><div class="wrap">
<h2>Plataforma integrada: una columna común para el sistema</h2>
<p class="read">El sistema de salud tiene muchas plataformas y cada una hace bien su parte. La plataforma de listas no es un sistema más: es la columna que las une alrededor del caso de cada paciente, desde que se prescribe hasta que recibe lo que necesita y le va mejor. Agrega tres capas, integración, inteligencia y seguimiento y control, entre las fuentes que ya existen y las entidades que deciden.</p>
<div class="layers">${layers.map(([a,k,b])=>'<div style="--k:'+k+'"><b>'+a+'</b><span>'+b+'</span></div>').join('')}</div>
<p class="read">Cada entidad ya ve su parte; la plataforma les permite ver la misma historia del paciente, cada una desde su función.</p>
<h3>Módulos</h3>
<div class="tw"><table><thead><tr><th>Módulo</th><th>Qué hace</th><th>Lo opera</th><th>Lo usan</th></tr></thead><tbody>${modulos.map(m=>'<tr><td><b>'+m[0]+'</b></td><td>'+m[1]+'</td><td>'+m[2]+'</td><td>'+m[3]+'</td></tr>').join('')}</tbody></table></div>
<p class="small">Cada módulo lo opera una entidad conforme a sus funciones legales y lo usan otras. Ninguna entidad cede competencias.</p>
<h3>La inteligencia, en concreto</h3>
<p class="read">Plataforma inteligente significa capacidades específicas, cada una con revisión humana:</p>
<ul class="clean">
<li>Anticipar qué paciente se descompensará primero si no recibe lo pendiente.</li>
<li>Detectar reportes de cierre atípicos y redes inusuales entre prescriptor, IPS y proveedor.</li>
<li>Anticipar desabastecimientos por medicamento y territorio.</li>
<li>Clasificar el texto de quejas y tutelas por tipo de barrera.</li>
<li>Confirmar entregas con el paciente por mensaje o llamada automatizada.</li>
<li>Medir el efecto de cada política y cada medida con métodos cuasiexperimentales.</li>
</ul>
<p class="read">Todas se rigen por la Política Nacional de Inteligencia Artificial ${cite('[[conpes4144]]')}: explicabilidad, revisión de sesgos, ninguna decisión sancionatoria automática y una ficha pública de cada modelo.</p>
<div class="box note read"><h3>Una idea para discusión posterior</h3><p>Más adelante podría estudiarse que los giros y créditos del sistema se vinculen con cierres verificados y que se marquen posibles servicios de bajo valor. Es una idea que requiere análisis jurídico y financiero y acuerdo entre las entidades; no hace parte de esta propuesta.</p></div>
</div></section>`;

const vacios=[['No hay un identificador de caso compartido','Cada sistema cuenta algo distinto: registros, facturas, prescripciones o quejas, y las cifras de distintas fuentes no siempre se pueden conciliar.','Columna del caso con identificador seudonimizado común.'],
['El seguimiento se apoya en el reporte de los vigilados','El tablero del plan de choque y los indicadores de alerta temprana se construyen con lo que reportan EPS e IPS.','Verificación cruzada con RIPS, dispensación y confirmación del paciente, que complementa ese reporte.'],
['Los cortes son por cohorte','El plan de choque sigue los pendientes reportados entre el 1 y el 20 de septiembre de 2026 [[r2445]].','Flujo continuo de entrada y salida de casos en cada corte.'],
['El seguimiento termina con el cierre','No se sabe si después hubo continuidad, recaída, hospitalización o muerte.','Cohorte centinela con desenlaces a 90 y 365 días.'],
['Cada entidad ve un tramo de la cadena','Es difícil saber si el cuello de botella está en la EPS, el gestor, la IPS o el mercado.','Reconstrucción de la ruta: prescripción, autorización, dispensación y atención.'],
['Las alertas llegan con la queja o la auditoría','Se actúa cuando el daño ya empezó.','Alertas por tiempo al daño y por riesgo anticipado.'],
['La retroalimentación a prestadores, prescriptores y territorios es escasa','La práctica cambia poco sin información comparada.','Tableros privados de comparación con pares y vista territorial.'],
['La evaluación de impacto no es sistemática','No siempre se sabe qué política o medida funciona.','Agenda de evaluación y registro de actuaciones.'],
['La persona no ve su caso','Depende de la queja o la tutela para saber qué pasa.','Consulta del propio caso y botón de no recibí esto.']];
const vaciosSec=`<section id="vacios" role="tabpanel"><div class="wrap">
<h2>Vacíos entre plataformas</h2>
<p class="read">Cada plataforma hace bien su parte. Los vacíos están entre ellas, y son los que la plataforma de listas ayuda a llenar.</p>
<div class="tw"><table><thead><tr><th>Vacío</th><th>Consecuencia</th><th>Cómo lo complementa la plataforma</th></tr></thead><tbody>${vacios.map(v=>'<tr><td><b>'+v[0]+'</b></td><td>'+cite(v[1])+'</td><td>'+v[2]+'</td></tr>').join('')}</tbody></table></div>
<div class="box note read"><h3>Un ejemplo: leer cifras de fuentes y cortes distintos</h3><p>El plan de choque se anunció con 1.069.196 pacientes identificados ${cite('[[infobae22]]')}; el tablero público llegó a 1.849.649 personas tras ampliar la base de datos ${cite('[[infobae27]]')}. El boletín del Ministerio con corte al 14 de octubre reportó que 51% de los pacientes con medicamentos pendientes tenía su caso cerrado ${cite('[[bol155]]')}, y el tablero muestra 236.640 personas con cierre en medicamentos al 13 de octubre y 286.924 al 27 de octubre, sobre 602.156 ${cite('[[tablero]]')}. Las fuentes usan universos y definiciones distintos; un identificador de caso y un diccionario común permiten conciliarlas y explicar cada cambio entre cortes.</p></div>
</div></section>`;

const gobernanza=`<section id="gobernanza" role="tabpanel"><div class="wrap">
<h2>Gobernanza</h2>
<div class="two">
<div class="card"><h3>Comité directivo</h3><dl><dt>Quién</dt><dd>La Mesa Técnica de Control del plan de choque, que ya reúne al Ministerio, la Supersalud y la ADRES, o una instancia permanente equivalente después del 31 de diciembre de 2026.</dd></dl></div>
<div class="card" style="--k:var(--blue)"><h3>Custodia de los datos</h3><dl><dt>Quién</dt><dd>El Ministerio, en SISPRO. Cada entidad accede según su función y con registro de consultas. El sitio público muestra solo agregados.</dd></dl></div>
<div class="card" style="--k:var(--green)"><h3>Comité asesor independiente</h3><dl><dt>Quién</dt><dd>Academia, sociedades científicas y asociaciones de pacientes. Revisa indicadores, modelos y métodos.</dd></dl></div>
<div class="card" style="--k:var(--deep)"><h3>Independencia</h3><dl><dt>Cómo</dt><dd>Código y contenidos con licencia abierta y operación en manos públicas. Ningún particular accede a datos nominales.</dd></dl></div>
</div>
<h3>Reglas</h3>
<ul class="clean">
<li>Cada cifra cita su fuente oficial y su fecha de corte, y se identifica como dato publicado, estimación, cálculo propio o propuesta.</li>
<li>Cada entidad conserva sus competencias; ninguna cede funciones.</li>
<li>Ningún indicador se usa para negar servicios; ningún modelo sanciona por sí solo.</li>
<li>Todo indicador clínico lo valida un especialista antes de publicarse, y se señala cuando algo requiere validación clínica o jurídica.</li>
<li>El uso de inteligencia artificial, tanto en el análisis como en los modelos, se declara y sigue la Política Nacional de Inteligencia Artificial ${cite('[[conpes4144]]')}.</li>
</ul>
</div></section>`;

/* ---------- CAC ---------- */
const cac=`<section id="cac" role="tabpanel"><div class="wrap">
<h2>Cuenta de Alto Costo: el trabajo que ya está hecho</h2>
<p class="read">Desde 2007 la Cuenta de Alto Costo recibe de las EPS información nominal de las enfermedades de alto costo, la audita, publica boletines e indicadores de gestión del riesgo por EPS y departamento, y sirve de base para distribuir recursos entre EPS según el riesgo de sus afiliados. Es la fuente nominal clínica más madura del país. Esta propuesta no le pide un reporte nuevo: le pide que sus cohortes y sus marcas de brecha vuelvan cada corte a quien debe actuar.</p>
<div class="tw"><table>
<thead><tr><th>Cohorte</th><th>Norma de reporte</th><th>Lo que la cuenta ya mide</th><th>Dato reciente</th><th>Listas que alimenta</th></tr></thead>
<tbody>
<tr><td>Enfermedad renal, hipertensión y diabetes</td><td>Resolución 4700 de 2008 y sus modificaciones</td><td>Estadio, estudio renal, control de presión y glucosa, terapia de reemplazo</td><td>7 millones de personas en la cohorte; 526.918 casos sin estadio; 54.594 en terapia de reemplazo y 2.103 sin continuidad en 2025 ${cite('[[cacerc]] [[caccv]]')}</td><td><a href="#l-renal0" data-go="l-renal0">Estudio renal</a>, <a href="#l-hta" data-go="l-hta">hipertensión</a>, <a href="#l-dm" data-go="l-dm">diabetes</a>, <a href="#l-erc" data-go="l-erc">renal avanzada</a>, <a href="#l-trr" data-go="l-trr">diálisis y trasplante</a></td></tr>
<tr><td>VIH</td><td>Resolución 4725 de 2011</td><td>Tratamiento antirretroviral, carga viral, CD4</td><td>158.810 personas en tratamiento al 31 de enero de 2025 ${cite('[[cacvih]]')}</td><td><a href="#l-vih" data-go="l-vih">VIH</a></td></tr>
<tr><td>Cáncer</td><td>Resolución 247 de 2014</td><td>Estadio al diagnóstico, oportunidad de diagnóstico y tratamiento</td><td>Mama: 49,15% de casos nuevos en estadio localizado, meta de 60% ${cite('[[cacmama]]')}</td><td><a href="#l-mama" data-go="l-mama">Mama</a>, <a href="#l-onco" data-go="l-onco">inicio de tratamiento</a>, <a href="#l-pdc" data-go="l-pdc">plan de choque</a></td></tr>
<tr><td>Hemofilia y otras coagulopatías</td><td>Resolución 123 de 2015 ${cite('[[r123]]')}</td><td>Profilaxis, sangrados, abandono, seguimiento</td><td>Abandono de 9,85% en 2024 frente a 4,81% en 2023 ${cite('[[cachemo]]')}</td><td><a href="#l-hem" data-go="l-hem">Hemofilia</a></td></tr>
<tr><td>Artritis reumatoide</td><td>Resolución 1393 de 2015 ${cite('[[r1393]]')}</td><td>Fármaco modificador, actividad de la enfermedad, remisión</td><td>119.089 casos; 42,75% de los tratados en remisión ${cite('[[cacar]]')}</td><td><a href="#l-ar" data-go="l-ar">Artritis reumatoide</a></td></tr>
<tr><td>Hepatitis C</td><td>Reporte a la Cuenta de Alto Costo</td><td>Diagnóstico, tratamiento antiviral y respuesta</td><td>Informe de la cohorte ${cite('[[cacvhc]]')}</td><td><a href="#l-vhc" data-go="l-vhc">Hepatitis C</a></td></tr>
</tbody></table></div>
<div class="two">
<div class="box navy"><h3>Lo que la cuenta ya hace</h3><ul class="clean"><li>Recibe reportes nominales con variables clínicas.</li><li>Audita soportes y devuelve inconsistencias: 580.517 en la auditoría renal de 2025 ${cite('[[cacerc]]')}.</li><li>Publica indicadores por EPS y departamento.</li><li>Publicó en 2026 contenidos mínimos de un programa de nefroprotección ${cite('[[caccv]]')}.</li></ul></div>
<div class="box" style="border-color:var(--green)"><h3>Lo que el ciclo le agrega</h3><ul class="clean"><li>Frecuencia: la brecha vuelve a la EPS en cada corte, no solo en el informe anual.</li><li>Dueño: cada registro con brecha llega con nombre a quien debe cerrarlo.</li><li>Verificación: el cierre se confirma con RIPS y resúmenes digitales.</li><li>Consecuencia: la Supersalud usa la tasa de cierre en su supervisión.</li></ul></div>
</div>
</div></section>`;

/* ---------- CARGA ---------- */
const carga=`<section id="carga" role="tabpanel"><div class="wrap">
<h2>Carga de enfermedad: qué listas pesan más</h2>
<p class="read">Todas las cifras de esta pestaña provienen del Estudio de Carga Global de Enfermedad 2023 del IHME para Colombia, todas las edades y ambos sexos salvo donde se indica, consultadas en noviembre de 2026 ${cite('[[ihme]]')}. Son estimaciones modeladas con intervalos de incertidumbre y pueden diferir de las estadísticas vitales.</p>
<div class="two"><div>
<h3>Primeras causas de muerte, 2023</h3>
<div class="tw"><table><thead><tr><th>Causa</th><th>Muertes</th><th>Lista</th></tr></thead><tbody>
<tr><td>Cardiopatía isquémica</td><td>46.398</td><td>Hipertensión; después del infarto</td></tr>
<tr><td>EPOC</td><td>17.472</td><td>EPOC; hospitalizaciones evitables</td></tr>
<tr><td>Enfermedad cerebrovascular</td><td>16.748</td><td>Hipertensión</td></tr>
<tr><td>Violencia interpersonal</td><td>15.959</td><td>Fuera del alcance de listas clínicas</td></tr>
<tr><td>Alzheimer y otras demencias</td><td>11.676</td><td>Polifarmacia</td></tr>
<tr><td>Infecciones respiratorias bajas</td><td>9.852</td><td>Hospitalizaciones evitables; vacunación</td></tr>
<tr><td>Accidentes de tránsito</td><td>8.896</td><td>Fuera del alcance de listas clínicas</td></tr>
<tr><td>Diabetes</td><td>8.694</td><td>Diabetes; estudio renal</td></tr>
<tr><td>Enfermedad renal crónica</td><td>7.760</td><td>Renal avanzada; diálisis</td></tr>
</tbody></table></div>
<p class="small">Fuente: IHME, GBD 2023.</p></div>
<div><h3>Factores de riesgo, AVAD atribuibles por 100.000, tasa estandarizada, 2023</h3>
<div class="tw"><table><thead><tr><th>Factor</th><th>Tasa</th></tr></thead><tbody>
<tr><td>Índice de masa corporal elevado</td><td>1.545,4</td></tr><tr><td>Presión arterial sistólica elevada</td><td>1.532,5</td></tr><tr><td>Desnutrición materna e infantil</td><td>1.470,6</td></tr><tr><td>Glucosa plasmática elevada</td><td>1.357,7</td></tr><tr><td>Riesgos dietarios</td><td>1.341,1</td></tr><tr><td>Contaminación del aire</td><td>894,0</td></tr><tr><td>Disfunción renal</td><td>870,8</td></tr><tr><td>Tabaco</td><td>755,1</td></tr>
</tbody></table></div><p class="small">Fuente: IHME, GBD 2023. Los intervalos de los cuatro primeros se superponen y las cargas atribuibles no se suman entre factores.</p></div></div>
<h3>Carga de las condiciones de cada lista, 2023</h3>
<div class="tw"><table><thead><tr><th>Condición</th><th>Medida</th><th>Valor</th><th>Intervalo de incertidumbre</th></tr></thead><tbody>
<tr><td>Enfermedad renal crónica</td><td>Personas con la enfermedad</td><td>6.216.258</td><td>5.816.929 a 6.642.652</td></tr>
<tr><td>Diabetes</td><td>Personas con la enfermedad</td><td>3.401.637</td><td>3.089.115 a 3.702.024</td></tr>
<tr><td>Insuficiencia cardiaca</td><td>Personas con la condición</td><td>378.220</td><td>333.374 a 425.967</td></tr>
<tr><td>Epilepsia idiopática</td><td>Personas con la enfermedad</td><td>314.378</td><td>90.804 a 531.480</td></tr>
<tr><td>Artritis reumatoide</td><td>Personas con la enfermedad</td><td>140.931</td><td>123.582 a 160.353</td></tr>
<tr><td>Cáncer de colon y recto</td><td>Muertes</td><td>5.716</td><td>5.324 a 6.062</td></tr>
<tr><td>Cardiopatía hipertensiva</td><td>Muertes</td><td>4.708</td><td>4.097 a 5.119</td></tr>
<tr><td>Cáncer de mama</td><td>Muertes</td><td>4.261</td><td>3.928 a 4.550</td></tr>
<tr><td>Cáncer de próstata</td><td>Muertes</td><td>4.102</td><td>3.677 a 4.514</td></tr>
<tr><td>Suicidio</td><td>Muertes</td><td>3.650</td><td>3.391 a 3.959</td></tr>
<tr><td>Trastornos neonatales</td><td>Muertes</td><td>3.350</td><td>3.135 a 3.575</td></tr>
<tr><td>VIH</td><td>Muertes</td><td>2.636</td><td>2.377 a 2.919</td></tr>
<tr><td>Cáncer de cuello uterino</td><td>Muertes</td><td>2.379</td><td>2.166 a 2.630</td></tr>
<tr><td>Tuberculosis</td><td>Muertes</td><td>1.353</td><td>1.234 a 1.490</td></tr>
<tr><td>Epilepsia idiopática</td><td>Muertes</td><td>1.020</td><td>955 a 1.093</td></tr>
<tr><td>Desnutrición proteico calórica, menores de cinco años</td><td>Muertes</td><td>394</td><td>342 a 457</td></tr>
<tr><td>Causas maternas</td><td>Muertes</td><td>385</td><td>330 a 468</td></tr>
<tr><td>Sífilis</td><td>Muertes</td><td>51,6</td><td>43,4 a 62,3</td></tr>
</tbody></table></div>
<p class="small">Fuente: IHME, GBD 2023, Colombia. La sífilis congénita se cuenta en el GBD dentro de varias causas, por eso la cifra de sífilis subestima su peso en la salud neonatal.</p>
<div class="box navy read"><h3>Lectura para la política</h3><ul class="clean">
<li>Tres de los cuatro primeros factores de riesgo son metabólicos y se controlan en atención primaria con medicamentos de bajo costo y seguimiento: es lo que miden las listas de hipertensión, diabetes y estudio renal.</li>
<li>La tasa estandarizada de AVAD por diabetes no muestra un cambio claro entre 1990 y 2023, mientras la de cardiopatía isquémica cayó 51,4%. La diabetes es donde una lista bien ejecutada tiene más por ganar.</li>
<li>El cáncer de colon y recto ya produce más muertes que el de mama; el tamizaje con seguimiento del positivo es la lista que lo enfrenta.</li>
<li>El índice de acceso y calidad de la atención fue 62,3 sobre 100 en 2023, frente a 36,8 en 1990. Mide la mortalidad que una atención oportuna evita y es el indicador de largo plazo que el ciclo debe mover.</li>
</ul></div>
</div></section>`;

/* ---------- TERRITORIOS ---------- */
const ASIS=[["Amazonas","amazonas",2025,"91"],["Antioquia","antioquia",2025,"05"],["Arauca","arauca",2025,"81"],["Atlántico","atlantico",2025,"08"],["Bogotá, D.C.","bogota",2025,"11"],["Bolívar","bolivar",2025,"13"],["Boyacá","boyaca",2025,"15"],["Caldas","caldas",2024,"17"],["Caquetá","caqueta",2025,"18"],["Casanare","casanare",2025,"85"],["Cauca","cauca",2025,"19"],["Cesar","cesar",2025,"20"],["Chocó","choco",2025,"27"],["Córdoba","cordoba",2024,"23"],["Cundinamarca","cundinamarca",2025,"25"],["Guainía","guainia",2025,"94"],["Guaviare","guaviare",2025,"95"],["Huila","huila",2025,"41"],["La Guajira","la-guajira",2025,"44"],["Magdalena","magdalena",2025,"47"],["Meta","meta",2025,"50"],["Nariño","narino",2025,"52"],["Norte de Santander","norte-santander",2024,"54"],["Putumayo","putumayo",2025,"86"],["Quindío","quindio",2025,"63"],["Risaralda","risaralda",2025,"66"],["San Andrés, Providencia y Santa Catalina","san-andres",2025,"88"],["Santander","santander",2025,"68"],["Sucre","sucre",2025,"70"],["Tolima","tolima",2025,"73"],["Valle del Cauca","valle-del-cauca",2025,"76"],["Vaupés","vaupes",2025,"97"],["Vichada","vichada",2025,"99"]];
const f1=v=>v==null?'No la publica el DANE':String(v).replace('.',',');
const terrRows=ASIS.map(([n,s,y,c])=>{const im=geih.ipm_dep[c]['2025']||{};const pv=geih.ipm_privaciones_dep[c]||{};const pm=(geih.pob_dep.PM[c]||{})['2025'];const u='https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/ED/PSP/asis-'+s+'-'+y+'.zip';
 return `<tr><td>${n}</td><td class="n">${f1(im.total)}</td><td class="n">${f1(im.rural)}</td><td class="n">${f1(pm)}</td><td class="n">${f1((pv['Sin aseguramiento en salud']||{})['2025'])}</td><td class="n">${f1((pv['Barreras de acceso a servicios de salud']||{})['2025'])}</td><td><a href="${u}">ASIS ${y}</a></td></tr>`;}).join('');
const nac=geih.ipm_nac.dominios;
const territorios=`<section id="territorios" role="tabpanel"><div class="wrap">
<h2>Territorios: dónde pesa más cada lista</h2>
<p class="read">Cada departamento y Bogotá tiene un Análisis de Situación de Salud publicado por el Ministerio ${cite('[[asis]]')}. La lista nacional llega a la secretaría y se lee contra su ASIS y contra sus condiciones sociales: el mismo criterio pesa distinto en Vichada que en Bogotá. La pobreza multidimensional del país fue ${f1(nac.Nacional['2025'])}% en 2025, ${f1(nac.Cabecera['2025'])}% en las cabeceras y ${f1(nac['Centros poblados y rural disperso']['2025'])}% en centros poblados y rural disperso ${cite('[[geih]]')}. Las hospitalizaciones evitables van de 248,5 por 10.000 habitantes en Huila a 20,6 en Guainía ${cite('[[adresnota]]')}.</p>
<div class="tw"><table id="terr"><thead><tr><th>Territorio</th><th>Pobreza multidimensional 2025, %</th><th>Pobreza multidimensional rural, %</th><th>Pobreza monetaria 2025, %</th><th>Hogares sin aseguramiento en salud, %</th><th>Hogares con barreras de acceso a salud, %</th><th>ASIS</th></tr></thead><tbody>${terrRows}</tbody></table></div>
<p class="small read">Fuente: DANE, pobreza multidimensional y pobreza monetaria 2025, procesadas en el repositorio abierto de indicadores sociales ${cite('[[geih]]')}; las dos últimas columnas son privaciones del índice de pobreza multidimensional, medidas como porcentaje de hogares. La pobreza monetaria departamental del DANE cubre 23 departamentos y Bogotá. ASIS: Repositorio Institucional Digital del Ministerio de Salud, consultado el 1 de noviembre de 2026; para Caldas, Córdoba y Norte de Santander el más reciente publicado es el de 2024. Los archivos son comprimidos con el documento y sus anexos.</p>
<div class="box note read"><h3>Cómo usa esto una secretaría</h3><p>La secretaría recibe cada lista filtrada a su territorio, la ordena por municipio y la compara con su ASIS y con estas privaciones. En departamentos con pobreza rural alta, las listas de gestantes, desnutrición, vacunación y tuberculosis se cierran con búsqueda activa del plan de intervenciones colectivas, no solo con citas de la EPS.</p></div>
</div></section>`;

/* ---------- DATOS ---------- */
const datos=`<section id="datos" role="tabpanel"><div class="wrap">
<h2>Datos e interoperabilidad</h2>
<div class="tw"><table><thead><tr><th>Fuente</th><th>Qué aporta</th><th>Quién la administra</th><th>Estado</th></tr></thead><tbody>
<tr><td>SISPRO</td><td>Plataforma donde se integran las fuentes y se corren los algoritmos.</td><td>Ministerio, Dirección Estratégica de Tecnología de la Información</td><td>Operando (Ley 1438 de 2011, art. 112).</td></tr>
<tr><td>RIPS con factura electrónica</td><td>Cada atención con persona, diagnóstico CIE 10, procedimiento CUPS, medicamento y fecha.</td><td>Ministerio</td><td>Obligatorio desde la Resolución 2275 de 2023.</td></tr>
<tr><td>Historia clínica interoperable</td><td>Resúmenes digitales de atención y de dispensación.</td><td>Ministerio</td><td>6,9 millones de personas, 1.430 prestadores y 4.491 sedes al 4 de agosto de 2026 ${cite('[[ihce]]')}; los gestores farmacéuticos tienen plazo hasta marzo de 2027 para la dispensación ${cite('[[res1799]]')}.</td></tr>
<tr><td>Cuenta de Alto Costo</td><td>Cohortes nominales con variables clínicas.</td><td>Cuenta de Alto Costo</td><td>Desde 2007, con auditoría propia.</td></tr>
<tr><td>SIVIGILA</td><td>Eventos de notificación obligatoria.</td><td>INS</td><td>Operando.</td></tr>
<tr><td>Registro nominal de vacunación</td><td>Dosis aplicadas por persona.</td><td>Ministerio, Programa Ampliado de Inmunizaciones</td><td>Operando.</td></tr>
<tr><td>MIPRES</td><td>Prescripción electrónica con identificación del prescriptor.</td><td>Ministerio</td><td>Operando.</td></tr>
<tr><td>Tablero del plan de choque</td><td>Personas únicas, casos resueltos y pendientes por EPS, departamento y tipo de atención.</td><td>Ministerio</td><td>Semanal, público en plandechoque.sispro.gov.co; corte consultado: 27 de octubre de 2026 ${cite('[[tablero]]')}.</td></tr>
<tr><td>Quejas de la Supersalud</td><td>Barreras de acceso por persona y servicio.</td><td>Supersalud</td><td>Cerca de 1,2 millones entre enero y julio de 2026 ${cite('[[infobae22]]')}.</td></tr>
<tr><td>Base de afiliados</td><td>EPS, régimen y municipio de cada persona.</td><td>ADRES</td><td>52,6 millones de afiliados en agosto de 2026 ${cite('[[aseg]]')}.</td></tr>
<tr><td>Registro de prestadores y de talento humano</td><td>Identificación de IPS, sedes y profesionales.</td><td>Ministerio</td><td>Operando.</td></tr>
<tr><td>Clasificaciones</td><td>CIE 10, CUPS y ATC como lenguaje común de los criterios.</td><td>Ministerio y OMS</td><td>Los CUPS de este brief se verificaron en el portal de datos abiertos ${cite('[[cups]]')}.</td></tr>
</tbody></table></div>
<div class="box note read"><h3>La calidad del dato es parte del ciclo</h3><ul class="clean">
<li>526.918 casos de enfermedad renal sin estadio en 2025 ${cite('[[cacerc]]')}.</li>
<li>580.517 inconsistencias documentales en la auditoría renal, 92,2% por falta de soporte del diagnóstico ${cite('[[cacerc]]')}.</li>
<li>89% de los ASIS territoriales de 2024 requirieron ajustes ${cite('[[asis]]')}.</li></ul>
<p>Por eso hay una lista dedicada a la <a href="#l-dato" data-go="l-dato">calidad del dato por reportante</a>.</p></div>
<div class="box navy read"><h3>Protección de datos</h3><p>Cada destinatario recibe solo los registros sobre los que tiene competencia, por canal cifrado y con finalidad limitada a la atención (Ley 1581 de 2012, art. 10, lit. a). Las listas de prescriptores se entregan a la IPS, no se publican con nombre.</p></div>
</div></section>`;

/* ---------- LIST PAGES ---------- */
const order=L.map(x=>x.id);
const listSec=x=>{const g=G[x.g];const i=order.indexOf(x.id);const prev=L[i-1],next=L[i+1];
const cupsCell=/\d{6}/.test(x.cups)?x.cups+' '+cite('[[cups]]'):x.cups;
return `<section id="l-${x.id}" role="tabpanel" class="lsec" style="--k:${g[2]}"><div class="wrap">
<p class="kicker">${g[1]}</p><h2>${x.t}</h2>${chips(x)}<p class="lead2">${x.valor}</p>
${x.cifra?`<div class="figs one"><div class="fig" style="--k:${g[2]}"><b>${x.cifra[0]}</b><span>${x.cifra[1]}</span>${cite('[['+x.cifra[2]+']]')}</div></div>`:''}
<div class="two"><div><h3>El problema</h3><p>${cite(x.problema)}</p></div><div><h3>Justificación clínica</h3><p>${cite(x.clinica)}</p></div></div>
<h3>Factores de riesgo y de prioridad</h3><ul class="clean">${x.factores.map(f=>'<li>'+cite(f)+'</li>').join('')}</ul>
<h3>Códigos y fuentes</h3><div class="tw"><table class="codes"><tbody>
<tr><th scope="row">CIE 10</th><td>${x.cie}</td></tr><tr><th scope="row">CUPS</th><td>${cupsCell}</td></tr><tr><th scope="row">ATC</th><td>${x.atc}</td></tr><tr><th scope="row">Datos</th><td>${cite(x.fuentes)}</td></tr></tbody></table></div>
<h3>Algoritmo</h3><dl class="rg"><dt>Criterio</dt><dd>${x.criterio}</dd><dt>Prioridad</dt><dd>${x.prioridad}</dd></dl>
<ol class="algo-steps">${x.pasos.map(p=>'<li>'+p+'</li>').join('')}</ol>
<h3>Quién hace qué</h3><div class="tw"><table class="flow"><thead><tr><th>Entidad</th><th>Dependencia</th><th>Qué hace</th><th>Norma</th></tr></thead><tbody>${x.flujo.map(r=>'<tr><td>'+r[0]+'</td><td>'+r[1]+'</td><td>'+r[2]+'</td><td>'+r[3]+'</td></tr>').join('')}</tbody></table></div>
<div class="two"><div class="box navy"><h3>Cierre</h3><p>${x.cierre}</p><h3>Indicador</h3><p>${x.indicador}</p></div><div class="box"><h3>Otros países</h3><p>${cite(x.mundo)}</p></div></div>
${x.ev.length?'<h3>Evidencia</h3><ul class="ev">'+x.ev.map(([r,c])=>'<li><b>'+RIX[r].short+'.</b> '+c+' '+cite('[['+r+']]')+'</li>').join('')+'</ul>':''}
<p class="pn">${prev?'<a href="#l-'+prev.id+'" data-go="l-'+prev.id+'">Lista anterior: '+SHORT[prev.id]+'</a>':'<span></span>'}${next?'<a href="#l-'+next.id+'" data-go="l-'+next.id+'">Lista siguiente: '+SHORT[next.id]+'</a>':''}</p>
</div></section>`;};
const listas=L.map(listSec).join('\n');

/* ---------- INSTRUMENTOS ---------- */
const supersalud=`<section id="supersalud" role="tabpanel"><div class="wrap">
<h2>La Supersalud en el ciclo</h2>
<p class="read">El Ministerio identifica, prioriza y envía. La Supersalud sigue los casos, verifica que las EPS e IPS actúen y controla, sin calificar la práctica individual del médico. En las EPS intervenidas, que agrupan cerca de 21 millones de afiliados ${cite('[[infobae27]]')}, la administración la designa la propia Superintendencia, de modo que las listas pueden ejecutarse desde la primera vuelta.</p>
<h3>Lo que la Supersalud ya tiene</h3>
<div class="tw"><table><thead><tr><th>Sistema o iniciativa</th><th>Qué hace</th><th>Cómo se conecta con las listas</th></tr></thead><tbody>
<tr><td><b>Subdirección de Analítica</b>, en la Dirección de Innovación y Desarrollo</td><td>Estrategias de analítica, modelos de inteligencia artificial y econometría, sistema de alertas tempranas y validación de la calidad del dato (Decreto 1080 de 2021, art. 17) ${cite('[[d1080]]')}.</td><td>Opera el seguimiento y la verificación de las listas.</td></tr>
<tr><td><b>Subdirección de Metodologías e Instrumentos de Supervisión</b></td><td>Diseña el modelo integral de supervisión basada en riesgos y el sistema de alertas tempranas (art. 16, num. 4 y 6).</td><td>Incorpora las listas como riesgos priorizados y sus indicadores.</td></tr>
<tr><td><b>FÉNIX</b></td><td>Sistema de gestión y control de las medidas especiales: recibe y sigue indicadores y planes de las entidades intervenidas ${cite('[[fenix]]')}.</td><td>Los indicadores de cierre de las listas pueden proponerse como trazadores para las EPS intervenidas.</td></tr>
<tr><td><b>46 indicadores de seguimiento a EPS</b></td><td>La Delegada de Aseguramiento pasó de 30 a 46 indicadores en 2026 ${cite('[[rcsuper]]')}.</td><td>Alinear definiciones y proponer indicadores de continuidad y de cierre verificado.</td></tr>
<tr><td><b>Indicadores de alerta temprana</b></td><td>EPS e IPS reportan indicadores de oportunidad y calidad ${cite('[[circ09]]')}.</td><td>Las listas aportan una verificación independiente de esos indicadores.</td></tr>
<tr><td><b>GAUDI</b></td><td>Convierte hallazgos de auditoría en alertas visuales e indicadores; cubre los 32 departamentos, 6 distritos y más de 1.000 municipios, con más de 1.800 usuarios y cerca de 4.800 auditorías ${cite('[[gaudi]]')}.</td><td>La muestra de auditoría dirigida por las listas puede alimentar a GAUDI, y GAUDI puede devolver hallazgos.</td></tr>
<tr><td><b>Gestión de PQRD</b></td><td>Peticiones, quejas, reclamos y denuncias, con priorización y alertas de la Delegada para la Protección al Usuario (art. 19, num. 5).</td><td>Fuente de la voz del paciente y de la lista de quejas repetidas.</td></tr>
<tr><td><b>Centro de Excelencia en Inteligencia de Negocios y Analítica</b> y <b>Política de Gobernanza de Datos</b></td><td>Impulsan la cultura analítica de la entidad ${cite('[[gaudi]]')}.</td><td>Puerta de entrada natural para presentar la plataforma.</td></tr>
<tr><td><b>Modelo de Gobierno y Gestión de Datos y sistema de alertas tempranas</b></td><td>Siete proyectos de datos y un sistema de alertas tempranas en desarrollo para 2026 ${cite('[[suptec]]')}.</td><td>Las listas pueden ofrecerse como caso de uso ya diseñado.</td></tr>
<tr><td><b>Ruta de inspección, vigilancia y control</b></td><td>Auditorías aleatorias y representativas para comprobar que lo reportado en el plan de choque se prestó, alertas tempranas en el flujo de recursos y mesas de medicamentos ${cite('[[rutaivc]]')}.</td><td>Coincide con la verificación por muestreo de la plataforma.</td></tr>
</tbody></table></div>
<div class="two"><div>
<h3>Cómo se reporta y se verifica</h3>
<p>La EPS mantiene actualizado su reporte de pendientes, como ya lo exige la Resolución 2445 de 2026 ${cite('[[r2445]]')}, con fecha de contacto, código del servicio entregado, CUM o CUPS, fecha de atención y estado de cierre. La Subdirección de Analítica triangula el cierre: lo cruza con RIPS, factura electrónica y resúmenes digitales, lo confirma con una muestra de pacientes y orienta la auditoría por muestreo. La tasa de cierre verificado por EPS entra en la matriz de riesgo de la Delegada de Aseguramiento.</p>
<h3>Prescriptores y prestadores</h3>
<p>La Subdirección de Analítica compara a cada prescriptor con sus pares y entrega la señal, confidencial, a la IPS. Si la señal persiste, la revisa el comité clínico de la IPS. La Delegada de Prestadores vigila que la revisión ocurra y que la señal nunca se use para negar servicios; la ética médica la juzgan los tribunales de la Ley 23 de 1981. Ver <a href="#l-presc" data-go="l-presc">Prescriptores atípicos</a>.</p>
</div><div>
<h3>Escalera de supervisión</h3>
<div class="ladder">
<div style="background:var(--red);width:52%">Medidas especiales<small>Decreto 1080 de 2021, art. 22, num. 22</small></div>
<div style="background:var(--red);width:62%">Investigación y multas<small>Ley 1949 de 2019</small></div>
<div style="background:var(--yellow);color:#1f2933;width:72%">Orden de inmediato cumplimiento<small>art. 7, num. 3</small></div>
<div style="background:var(--blue);width:82%">Plan de mejoramiento<small>art. 23, num. 19</small></div>
<div style="background:var(--navy);width:92%">Instrucción y requerimiento<small>art. 7, num. 2</small></div>
<div style="background:var(--green);width:100%">Lista, retroalimentación y comparación entre pares<small>art. 17</small></div></div>
<p>La base se usa casi siempre y la cima casi nunca. Corregir antes del fallo atenúa la sanción (Ley 1438 de 2011, art. 134, num. 3, modificado por la Ley 1949 de 2019), así que a la EPS le conviene cerrar la lista. En un sistema con EPS de patrimonio negativo, la multa poco disuade y descapitaliza a quien debe atender; la corrección, en cambio, llega al paciente.</p>
</div></div>
<h3>Por qué la escalera es un incentivo</h3>
<div class="args">
<div class="box" style="border-color:var(--green)"><h3>Corregir paga</h3><p>La ley atenúa la sanción a quien corrige antes del fallo (Ley 1438 de 2011, art. 134, num. 3, modificado por la Ley 1949 de 2019). La lista le dice a la EPS exactamente qué corregir.</p></div>
<div class="box navy"><h3>La información pesa</h3><p>Comparar a EPS, IPS y médicos con sus pares cambia la práctica sin sanción, como muestran el ensayo nacional de retroalimentación con norma social ${cite('[[hallsworth]]')} y la revisión Cochrane de auditoría y retroalimentación ${cite('[[ivers]]')}.</p></div>
<div class="box" style="border-color:var(--blue)"><h3>Proporcionalidad</h3><p>La regulación responsiva empieza por persuadir y escala solo ante el incumplimiento ${cite('[[ayres]]')}; la OCDE recomienda inspección basada en riesgo ${cite('[[oecd]]')}.</p></div>
<div class="box red"><h3>El dinero va al paciente</h3><p>Lo que la EPS gasta en corregir llega a la atención. Una multa contra una entidad sin liquidez no se cobra o la debilita más.</p></div>
</div>
<p class="read">El ciclo apunta a la quíntuple meta: mejores resultados en salud, mejor experiencia del paciente, bienestar de quienes atienden, menor costo y equidad ${cite('[[nundy]]')}.</p>
<div class="box note read"><h3>Dos rutas compatibles</h3><p>El ciclo puede arrancar por el Ministerio, con una circular externa a EPS, IPS y secretarías y la Supersalud verificando, o por la Supersalud, con una circular a sus vigilados que pida las bases nominales y su cierre, como ya hizo para los menores en riesgo vital ${cite('[[cenna]]')}. En la segunda ruta, las sociedades científicas definen los criterios clínicos, el IETS los valida, la circular de la Supersalud los vuelve exigibles, su Subdirección de Analítica genera las listas, las EPS, gestores e IPS ejecutan y las delegadas verifican. Las dos rutas usan las mismas listas y no se excluyen: una da el lineamiento técnico, la otra la exigibilidad inmediata.</p></div>
<p class="small">Fuente de funciones: ${cite('[[d1080]]')}</p>
</div></section>`;

const juridica=`<section id="juridica" role="tabpanel"><div class="wrap">
<h2>Normas que ya permiten hacerlo</h2>
<div class="tw"><table><thead><tr><th>Norma</th><th>Qué permite</th></tr></thead><tbody>
<tr><td>Ley 1751 de 2015, estatutaria</td><td>Art. 19: todos los agentes deben suministrar la información que requiera el Ministerio. Art. 6: continuidad de la atención. Art. 17: autonomía médica con autorregulación.</td></tr>
<tr><td>Ley 1438 de 2011</td><td>Art. 112: SISPRO. Art. 114: obligación de reportar información confiable y oportuna. Art. 92: IETS. Art. 8: Observatorio Nacional de Salud.</td></tr>
<tr><td>Ley 1122 de 2007</td><td>Art. 14: el aseguramiento incluye la gestión del riesgo en salud. Arts. 35 a 40: inspección, vigilancia y control.</td></tr>
<tr><td>Ley 100 de 1993</td><td>Art. 178: funciones de las EPS sobre acceso y control de la atención.</td></tr>
<tr><td>Ley 715 de 2001</td><td>Arts. 43 y 44: competencias de departamentos y municipios en salud.</td></tr>
<tr><td>Ley 1966 de 2019</td><td>Unificación de sistemas de información y sistema integrado de inspección, vigilancia y control.</td></tr>
<tr><td>Ley 1949 de 2019</td><td>Incumplir instrucciones de la Supersalud es infracción; corregir antes del fallo atenúa la sanción.</td></tr>
<tr><td>Ley 2015 de 2020 y resoluciones 866 de 2021, 1888 de 2025 y 1799 de 2026</td><td>Historia clínica interoperable y resúmenes digitales de atención y dispensación.</td></tr>
<tr><td>Decreto 780 de 2016</td><td>Compila la garantía de calidad, la vigilancia en salud pública, la Cuenta de Alto Costo y la habilitación de EPS.</td></tr>
<tr><td>Decreto 682 de 2018</td><td>Condiciones de habilitación y permanencia de las EPS, incluida la capacidad de gestión del riesgo y los sistemas de información ${cite('[[d682]]')}.</td></tr>
<tr><td>Decreto 120 de 2026, Decreto 1080 de 2021 y Decreto 4109 de 2011</td><td>Estructura y funciones del Ministerio, la Supersalud y el INS ${cite('[[d120]] [[d1080]] [[d4109]]')}.</td></tr>
<tr><td>Resoluciones 4700 de 2008, 4725 de 2011, 247 de 2014, 123 de 2015 y 1393 de 2015</td><td>Reporte nominal a la Cuenta de Alto Costo de enfermedad renal, VIH, cáncer, hemofilia y artritis reumatoide.</td></tr>
<tr><td>Resolución 2275 de 2023</td><td>RIPS como soporte de la factura electrónica.</td></tr>
<tr><td>Resolución 3280 de 2018 y Resolución 202 de 2021</td><td>Rutas de promoción y mantenimiento y materno perinatal, y su reporte.</td></tr>
<tr><td>Resolución 3100 de 2019 y Resolución 256 de 2016</td><td>Habilitación de prestadores e indicadores de calidad.</td></tr>
<tr><td>Resolución 1604 de 2013</td><td>Entrega de medicamentos pendientes.</td></tr>
<tr><td>Ley 1581 de 2012</td><td>Art. 10, lit. a: no se requiere autorización del titular cuando una entidad pública solicita datos en ejercicio de sus funciones.</td></tr>
<tr><td>Ley 1616 de 2013 y Ley 23 de 1981</td><td>Salud mental; ética médica y sus tribunales.</td></tr>
</tbody></table></div>
<h2>Qué instrumento usar</h2>
<div class="three">
<div class="box navy"><h3>Circular externa del Ministerio</h3><p>Orienta a EPS, IPS y secretarías sobre el uso de las listas dentro de obligaciones vigentes. No crea obligaciones nuevas, por eso es el instrumento más rápido y el punto de partida.</p></div>
<div class="box" style="border-color:var(--green)"><h3>Circular conjunta con la Supersalud</h3><p>Une el lineamiento técnico con la verificación. Es práctica corriente del Ministerio, como la <a href="https://www.minsalud.gov.co/Normatividad_Nuevo/Circular%20Conjunta%20No%20022%20de%202026.pdf">Circular Conjunta 022 de 2026</a>.</p></div>
<div class="box red"><h3>Resolución</h3><p>Solo si se crean variables nuevas de reporte o un anexo técnico obligatorio (Ley 1751, art. 19; Ley 1438, art. 114). Exige publicar el proyecto para comentarios (Ley 1437 de 2011, art. 8, num. 8).</p></div>
</div>
<div class="box note read"><h3>Lo que no se necesita</h3><p>No se necesita ley, porque las funciones existen. No se necesita decreto, porque no se modifica la estructura. No se necesita planta, porque el trabajo recae en dependencias que ya existen.</p></div>
</div></section>`;

const dofa=`<section id="dofa" role="tabpanel"><div class="wrap"><h2>DOFA del ciclo de listas</h2><div class="dofa">
<div><h3 style="color:var(--green)">Fortalezas</h3><ul><li>Funciones legales vigentes en cada paso.</li><li>Fuentes nominales maduras: RIPS con factura, Cuenta de Alto Costo desde 2007, SIVIGILA, registro de vacunación, MIPRES.</li><li>Historia clínica interoperable con 6,9 millones de personas y dispensación en camino.</li><li>Un tablero semanal ya instalado que habla de personas únicas y casos resueltos.</li></ul></div>
<div><h3 style="color:var(--blue)">Oportunidades</h3><ul><li>EPS intervenidas con cerca de 21 millones de afiliados donde la ejecución es directa.</li><li>El análisis de suficiencia de la UPC 2027 necesita información de gestión del riesgo por EPS.</li><li>Sociedades científicas con recomendaciones propias de qué no hacer.</li><li>Secretarías con ASIS actualizados.</li></ul></div>
<div><h3 style="color:#B37800">Debilidades</h3><ul><li>Calidad desigual del registro: 526.918 casos renales sin estadio.</li><li>Rezago entre la atención y su reporte en RIPS.</li><li>Capacidad analítica muy distinta entre territorios.</li><li>EPS con patrimonio negativo, que reducen su capacidad de respuesta.</li></ul></div>
<div><h3 style="color:var(--red)">Amenazas</h3><ul><li>Que una lista se use para negar servicios o fijar cuotas a médicos. Se mitiga con garantías explícitas en la circular.</li><li>Rechazo de gremios médicos a la lista de prescriptores. Se mitiga con indicadores elegidos por las sociedades científicas, entrega confidencial y revisión entre pares.</li><li>Fatiga de reportes en IPS pequeñas. Se mitiga usando datos ya reportados.</li><li>Riesgos de privacidad. Se mitigan con envío cifrado, destinatario competente y finalidad limitada.</li></ul></div>
</div></div></section>`;

const mundoRows=L.map(x=>'<tr><td><a href="#l-'+x.id+'" data-go="l-'+x.id+'">'+SHORT[x.id]+'</a></td><td>'+cite(x.mundo)+'</td></tr>').join('');
const mundo=`<section id="mundo" role="tabpanel"><div class="wrap">
<h2>Lo mismo, en otros sistemas de salud</h2>
<p class="read">Ningún país revisado tiene el modelo de aseguramiento colombiano, pero todos usan alguna versión del ciclo: identificar personas, devolver la información a quien atiende y medir si se actuó.</p>
<div class="two">
<div class="card"><h3>Canadá: informes a cada médico</h3><dl><dt>Qué hace</dt><dd>Ontario entrega a médicos de atención primaria informes de su práctica comparada con sus pares y listas de pacientes con tamizajes pendientes.</dd><dt>Enlace</dt><dd><a href="https://ontariohealth.ca/system/reporting/mypractice/primary-care">MyPractice Primary Care</a></dd></dl></div>
<div class="card" style="--k:var(--green)"><h3>India: tamizaje con registro nominal</h3><dl><dt>Qué hace</dt><dd>El portal nacional de enfermedades no transmisibles registra a cada persona tamizada, diagnosticada y en tratamiento, con seguimiento por trabajadores comunitarios.</dd><dt>Enlace</dt><dd><a href="https://www.thip.media/news/govts-ncd-screening-drive-diagnoses-over-5-cr-adults-with-hypertension-3-cr-with-diabetes/124062/">Resultados del programa</a></dd></dl></div>
<div class="card" style="--k:var(--deep)"><h3>Emiratos Árabes Unidos: riesgo individual</h3><dl><dt>Qué hace</dt><dd>Malaffi, la plataforma de intercambio de información de Abu Dabi, calcula el riesgo de cada persona para diabetes, insuficiencia cardiaca, enfermedad renal e hipertensión y lo pone a disposición del médico.</dd><dt>Enlace</dt><dd><a href="https://www.doh.gov.ae/en/news/Department-of-Health-and-Malaffi-use-AI-to-predict-patients-future-risk-of-disease-in-Abu-Dhabi">Departamento de Salud de Abu Dabi</a></dd></dl></div>
<div class="card" style="--k:var(--red)"><h3>España: estratificación poblacional</h3><dl><dt>Qué hace</dt><dd>El Sistema Nacional de Salud estratifica a toda la población por grupos de morbilidad ajustados para identificar pacientes crónicos complejos.</dd><dt>Enlace</dt><dd><a href="https://vsf-iwsold-pro-01.mscbs.gob.es/areas/calidadAsistencial/estrategias/abordajeCronicidad/docs/informeEstratificacionGMASNS_2014-2016.pdf">Informe del Ministerio de Sanidad</a></dd></dl></div>
<div class="card" style="--k:var(--blue)"><h3>Estados Unidos: registros y adherencia</h3><dl><dt>Qué hace</dt><dd>Kaiser Permanente del Norte de California pasó de 43,6% a 80,4% de hipertensos controlados con un registro nominal ${cite('[[jaffe]]')}. Medicare mide la adherencia con la proporción de días cubiertos.</dd></dl></div>
<div class="card"><h3>Alemania y Países Bajos</h3><dl><dt>Qué hace</dt><dd>Alemania inscribe a pacientes crónicos en programas estructurados con retroalimentación al médico y asesoría antes de consecuencias en el control de economicidad. Los Países Bajos pagan a grupos de atención primaria por el cuidado integral de la diabetes con registro de pacientes.</dd><dt>Enlace</dt><dd><a href="https://www.kbv.de/praxis/patientenversorgung/dmp">Asociación Federal de Médicos</a>; <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3225242/">evaluación del pago agrupado</a></dd></dl></div>
</div>
<h3>Experiencia por lista</h3><div class="tw"><table><thead><tr><th>Lista</th><th>Experiencia</th></tr></thead><tbody>${mundoRows}</tbody></table></div>
</div></section>`;

const evRows=L.filter(x=>x.ev.length).map(x=>x.ev.map(([r,c],i)=>'<tr>'+(i===0?'<td rowspan="'+x.ev.length+'"><a href="#l-'+x.id+'" data-go="l-'+x.id+'">'+SHORT[x.id]+'</a></td>':'')+'<td>'+RIX[r].short+' '+cite('[['+r+']]')+'</td><td>'+c+'</td></tr>').join('')).join('');
const evidencia=`<section id="evidencia" role="tabpanel"><div class="wrap">
<h2>Evidencia por lista</h2>
<p class="read">Revisiones sistemáticas, metaanálisis y ensayos que sustentan cada lista, verificados en PubMed. La conclusión se resume en una línea; la referencia completa está en las notas. Donde la evidencia es débil se dice.</p>
<div class="tw"><table><thead><tr><th>Lista</th><th>Estudio</th><th>Conclusión</th></tr></thead><tbody>${evRows}</tbody></table></div>
<h3>Regulación e incentivos</h3><ul class="clean">
<li>Regulación responsiva: persuadir primero y escalar ante el incumplimiento ${cite('[[ayres]]')}; inspección basada en riesgo ${cite('[[oecd]]')}.</li>
<li>Auditoría y retroalimentación como estrategia general de cambio de práctica ${cite('[[ivers]]')}.</li></ul>
</div></section>`;

const ruta=`<section id="ruta" role="tabpanel"><div class="wrap">
<h2>Ruta de implementación</h2>
<p class="read">Por fases: cada fase empieza cuando la anterior deja su producto${cite('<sup class="cit"><a href="#ruta-tiempos">a</a></sup>')}.</p>
<ol class="steps">
<li class="step"><div class="h">Presentación<small>Llevarlo al sistema</small></div><div class="b"><p>Una nota técnica breve y una demostración con datos públicos se presentan a la Mesa Técnica de Control del plan de choque, que ya reúne al Ministerio, la Supersalud y la ADRES. En paralelo, a la Dirección Estratégica de Tecnología de la Información del Ministerio y a la Subdirección de Analítica y el Centro de Excelencia en Inteligencia de Negocios y Analítica de la Supersalud, como caso de uso del sistema de alertas tempranas.</p></div></li>
<li class="step"><div class="h">Primera vuelta<small>Decidir y correr</small></div><div class="b"><p>Mesa técnica entre viceministerios, Epidemiología y Demografía, Tecnología, Cuenta de Alto Costo, INS y Supersalud. Primera corrida de tres listas: plan de choque con riesgo vital, continuidad vital y estudio renal pendiente. Un piloto de punta a punta con una lista, por ejemplo diálisis o trasplante sin continuidad, en uno o dos departamentos: identificación en el Ministerio, gestión de la EPS, seguimiento, verificación y alerta en la Supersalud, y consulta del paciente.</p></div></li>
<li class="step" style="--k:var(--blue)"><div class="h">Piloto<small>Pilotear y validar</small></div><div class="b"><p>Envío a las EPS intervenidas y a cinco secretarías departamentales. Sociedades científicas de cardiología, nefrología, endocrinología, medicina interna, neurología, reumatología, oncología, infectología, ginecología, pediatría, psiquiatría y medicina familiar revisan criterios; el IETS los valida. Proyecto de circular publicado para comentarios.</p></div></li>
<li class="step" style="--k:var(--green)"><div class="h">Formalización<small>Circulares</small></div><div class="b"><p>Circular externa del Ministerio y circular conjunta con la Supersalud. Un acuerdo interinstitucional de intercambio de datos y un acto administrativo conjunto adoptan el identificador de caso, el diccionario común y los roles. Las cifras por lista entran al tablero.</p></div></li>
<li class="step" style="--k:var(--yellow)"><div class="h d">Ampliación<small>Todas las listas</small></div><div class="b"><p>Todas las EPS y las 33 secretarías. Se agregan las listas cardiometabólicas, de cáncer, de cohortes de la Cuenta de Alto Costo, materno infantiles, de salud mental y de uso del sistema.</p></div></li>
<li class="step" style="--k:var(--deep)"><div class="h">Consolidación<small>Médicos y prestadores</small></div><div class="b"><p>Listas de prescriptores con práctica atípica y de prestadores con demoras, con retroalimentación entre pares. Resultados usados en la UPC y en la regulación de beneficios. Evaluación independiente del Observatorio Nacional de Salud y del IETS.</p></div></li>
</ol>
<div class="box note read"><h3>Con qué capacidades</h3><p>SISPRO y la Dirección de Tecnología para el procesamiento; Epidemiología y Demografía para los criterios; la Cuenta de Alto Costo y el INS con sus bases; las secretarías con sus equipos de salud pública; la Subdirección de Analítica de la Supersalud para el seguimiento y la verificación. La operación se apoya en un equipo técnico interinstitucional pequeño, conformado por personas de las entidades participantes, y en la infraestructura de datos y analítica que ya existe.</p></div>
<p class="small read" id="ruta-tiempos"><b>a</b> Propuesta de tiempos para considerar, aportada por la curaduría: unas cuatro semanas para ajustar el sitio y preparar la nota técnica y la demostración; un piloto de tres meses con una lista en uno o dos departamentos; luego, ampliación lista por lista.</p>
</div></section>`;

const avisos=`<section id="avisos" role="tabpanel"><div class="wrap read">
<h2>Fuentes, método y avisos</h2>
<h3>Autoría</h3><p>Análisis y redacción: Claude, modelo de inteligencia artificial de Anthropic, que consultó fuentes públicas, PubMed y la base del Estudio de Carga Global de Enfermedad 2023 del IHME. Curaduría y responsabilidad editorial: David Aguilar, economista colombiano residente en el exterior, y Nancy Yomayusa González, médica internista y nefróloga, quien aportó la visión de plataforma interinstitucional, la revisión de los sistemas de la Supersalud y la propuesta de gobernanza.</p>
<h3>Declaración de vínculo</h3><p>David Aguilar está vinculado laboralmente a un conglomerado de salud con operación en Colombia. Las ideas de este documento son personales, se comparten en el espíritu democrático de aportar al debate público y no representan la posición de esa entidad ni la comprometen. Nancy Yomayusa González es médica especialista en medicina interna y nefrología, con trayectoria en investigación traslacional, consensos clínicos informados en la evidencia y recomendaciones de uso racional de tecnologías en salud. Participa a título personal como consultora independiente.</p>
<h3>Suficiencia de recursos</h3><p>Esta propuesta no estima el costo de cerrar cada lista. Su implementación debe tener en cuenta la suficiencia de los recursos del sistema y el flujo hacia los prestadores, y avanzar de forma gradual según la capacidad disponible.</p>
<h3>Tipos de cifra</h3><p>Cada cifra se presenta como dato publicado, cuando proviene de una fuente oficial o de un informe citado; estimación modelada, cuando proviene del IHME; cálculo propio, cuando es una suma o diferencia hecha en este documento y así se indica; o propuesta, como los códigos, umbrales y plazos de cada lista.</p>
<h3>Alcance</h3><ul class="clean">
<li>Es un documento de propuesta, no una publicación oficial de ninguna entidad del Estado.</li>
<li>Los códigos CIE 10, CUPS y ATC y los umbrales de cada lista son la propuesta técnica para la primera corrida; su ajuste corresponde a las sociedades científicas y al IETS dentro del propio ciclo. Los CUPS se verificaron en los conjuntos de datos abiertos del Ministerio; los ATC siguen la clasificación de la OMS.</li>
<li>Las listas orientan a quién atender primero; la conducta clínica es del médico tratante. La lista de prescriptores es una herramienta de retroalimentación entre pares, no de calificación.</li>
<li>Las estimaciones del GBD son modeladas y pueden diferir de las estadísticas vitales oficiales; su uso está sujeto al acuerdo de uso no comercial del IHME.</li>
<li>Las cifras de afiliación y de pobreza provienen de dos repositorios abiertos construidos con datos de SISPRO, ADRES, MinSalud y DANE; no reemplazan las cifras oficiales y, donde difieran, prevalecen las de los productores. La afiliación se cuenta por municipio de afiliación, que no siempre es el de residencia.</li>
<li>Las cifras de prensa citan a sus fuentes oficiales; donde existe el documento oficial se enlaza directamente. Algunas cifras de la Cuenta de Alto Costo son previas a su auditoría.</li></ul>
<h3>Referencias citadas</h3><ol class="refs small notes" id="allrefs" style="border:0;margin-top:0"></ol>
<p class="small">Código y datos: <a href="https://github.com/doar95/listas-de-pacientes-colombia">repositorio del brief en GitHub</a>.</p>
</div></section>`;

/* ---------- CSS extra ---------- */
css+=`
nav.tabs .ng{margin:14px 18px 4px;font:700 .72rem Montserrat,sans-serif;color:#5b6570;letter-spacing:.02em}
nav.tabs .ng:first-child{margin-top:0}
nav.tabs .menu{display:none}
.kicker{font:700 .85rem Montserrat,sans-serif;color:var(--k);margin:0 0 4px}
.lsec h2{border-left:6px solid var(--k);padding-left:12px}
.lead2{font-size:1.1rem;color:var(--ink);max-width:72ch}
.figs.one{grid-template-columns:minmax(0,420px)}
table.codes th{width:90px;background:var(--soft);color:var(--ink)}
table.flow td:first-child{font-weight:600;color:var(--ink)}
.algo-steps{margin:8px 0 18px;padding-left:22px}.algo-steps li{margin:0 0 .35em}
ul.ev{padding-left:18px}ul.ev li{margin:0 0 .6em}
.pn{display:flex;justify-content:space-between;gap:16px;margin-top:28px;flex-wrap:wrap;font-weight:600}
.gh{margin:26px 0 2px;color:var(--k);border-bottom:3px solid var(--k);padding-bottom:4px}
.gd{margin:4px 0 0;font-size:.92rem}
td.n{text-align:right;white-space:nowrap}
.box.suf{border:3px solid var(--yellow);border-left-width:10px;background:#FFF8E6}.box.suf h3{color:#7A5200;font-size:1.25rem}.box.suf li{margin:0 0 .5em}
.roles{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:10px 0 8px}
.roles div{border-top:5px solid var(--k);background:#fff;border-left:1px solid var(--line);border-right:1px solid var(--line);border-bottom:1px solid var(--line);padding:10px 12px;font-size:.93rem}
.roles b{display:block;font:700 .98rem Montserrat,sans-serif;color:var(--k);margin-bottom:2px}
.tipo{font-weight:700;color:var(--ink)}
.layers{display:grid;gap:8px;margin:14px 0 22px}
.layers div{display:grid;grid-template-columns:210px 1fr;border:1px solid var(--line);border-left:8px solid var(--k);background:#fff}
.layers b{background:color-mix(in srgb,var(--k) 12%,#fff);color:var(--k);font:700 .95rem Montserrat,sans-serif;padding:10px 12px}
.layers span{padding:10px 12px;font-size:.93rem}
@media (max-width:860px){.roles{grid-template-columns:1fr 1fr}.layers div{grid-template-columns:1fr}}
@media (max-width:520px){.roles{grid-template-columns:1fr}}
.hcta{margin:14px 0 4px}
.cta{display:inline-block;background:var(--yellow);color:#1f2933;font:700 .95rem Montserrat,sans-serif;text-decoration:none;padding:9px 16px}
.cta:hover{background:#ffc53d}
nav.tabs .navpres{display:block;margin:4px 18px 0;padding:8px 10px;background:var(--yellow);color:#1f2933;font:700 .85rem Montserrat,sans-serif;text-decoration:none}
.quick{display:none}
nav.tabs button.menu .mi{width:22px;height:22px;flex:none}
nav.tabs button.menu .mtx{display:flex;flex-direction:column;line-height:1.2;flex:1;text-align:left}
nav.tabs button.menu .mtx b{font:700 .95rem Montserrat,sans-serif}
nav.tabs button.menu .mtx span{font-size:.82rem;opacity:.85}
nav.tabs button.menu .mch{flex:none;background:var(--yellow);color:#1f2933;font:700 .8rem Montserrat,sans-serif;padding:6px 10px}
@media (max-width:860px){
 nav.tabs button.menu,nav.tabs button.menu:hover{display:flex!important;align-items:center;gap:12px;padding:10px 14px}
 nav.tabs .navpres{margin:6px 16px 4px}
 nav.tabs .wrap button.lb{padding-left:32px}
 .quick{display:block;margin:22px 0 6px;padding:14px;background:var(--soft);border-left:5px solid var(--navy)}
 .quick p{margin:0 0 8px;font:700 .95rem Montserrat,sans-serif;color:var(--navy)}
 .quick div{display:flex;flex-wrap:wrap;gap:8px}
 .quick a,.quick button{font:600 .9rem "Work Sans",sans-serif;text-decoration:none;color:var(--navy);background:#fff;border:1px solid var(--navy);padding:7px 11px;cursor:pointer}
 .quick a.qk{background:var(--navy);color:#fff}
 .quick a.qp{background:var(--yellow);border-color:var(--yellow);color:#1f2933}
 .quick button.qm{background:#fff;border-style:dashed}
}
nav.tabs .nsup{font:800 .82rem Montserrat,sans-serif;color:var(--navy);margin:20px 18px 2px;padding-top:12px;border-top:1px solid var(--line)}
nav.tabs .ngl{margin:10px 0 2px;padding:6px 14px;color:var(--k);background:color-mix(in srgb,var(--k) 13%,#fff);border-left:5px solid var(--k)}
nav.tabs button.lb{position:relative;padding-left:32px;font-weight:500}
nav.tabs button.lb::before{content:"";position:absolute;left:18px;top:1.05em;width:7px;height:7px;border-radius:50%;background:var(--k)}
nav.tabs button.lb[aria-selected="true"]{border-left-color:var(--k);font-weight:600;color:var(--k)}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin:10px 0 0}
.lc .chips span,.chips span{flex:none;font-size:.76rem;font-weight:600;color:var(--k,var(--navy));border:1px solid currentColor;padding:1px 7px;background:#fff}
.lsec .chips{margin:0 0 14px}
.args{display:grid;grid-template-columns:1fr 1fr;gap:0 18px}.args .box{margin:10px 0}
table.cyc td:first-child{white-space:nowrap}
@media (max-width:860px){.args{grid-template-columns:1fr}}
.ent{margin:0 0 26px}.ent>h3{color:#fff;background:var(--k);padding:10px 14px;margin:0}
.ent table{margin-top:0}
.acts{padding-left:22px;max-width:80ch}.acts li{margin:0 0 .6em;padding-left:4px}
/* system map */
.smap{margin:14px 0 30px;font-size:.88rem}
.smap small{display:block;font-size:.76rem;color:#5b6570;margin-top:2px}
.sm-top,.sm-bot{border:2px solid var(--line);padding:10px 14px;text-align:center;background:#fff}
.sm-top{border-color:var(--blue)}.sm-bot{border-color:var(--red)}
.sm-top b,.sm-bot b{display:block;font:700 .95rem Montserrat,sans-serif;color:var(--ink)}
.sm-top span,.sm-bot span{display:block}
.sm-row{display:grid;grid-template-columns:1fr 70px 1.1fr 70px 1fr;align-items:center;margin:12px 0}
.sm-col{border:2px solid var(--k,var(--navy));background:#fff;padding:10px 12px}
.sm-col>b{display:block;font:700 .95rem Montserrat,sans-serif;color:var(--k,var(--navy));margin-bottom:6px}
.sm-col span{display:block;padding:6px 0;border-top:1px solid var(--soft)}
.sm-col i{font-style:normal;font-weight:700;color:var(--ink);display:block}
.sm-data{--k:var(--deep)}.sm-min{--k:var(--navy);background:#f3f7fc}.sm-act{--k:var(--green)}
.sm-ar{text-align:center;color:var(--navy)}.sm-ar small{font-size:.72rem}
.ar{width:40px;height:24px}
.sm-back{display:flex;justify-content:flex-end;align-items:center;gap:8px;color:var(--red);font-size:.8rem;margin:0 8% 6px 0}
.sm-back .ar{transform:rotate(90deg)}
@media (max-width:860px){
 nav.tabs button.menu,nav.tabs button.menu:hover{display:block;color:#fff;width:100%;text-align:left;border:0;background:var(--navy);color:#fff;padding:12px 16px;font:600 .95rem "Work Sans",sans-serif}
 nav.tabs .wrap{display:none;flex-direction:column;max-height:70vh;overflow-y:auto;padding:6px 0 12px}
 nav.tabs.open .wrap{display:flex}
 nav.tabs .wrap button{text-align:left;border-bottom:0;border-left:4px solid transparent;padding:9px 16px}
 nav.tabs .wrap button[aria-selected="true"]{border-left-color:var(--navy);background:var(--soft)}
 .sm-row{grid-template-columns:1fr}
 .sm-ar .ar,.sm-back .ar{transform:rotate(90deg)}
 .sm-back{justify-content:center;margin:0 0 6px}
}
`;

/* ---------- JS ---------- */
const js=`const REFS=${JSON.stringify(REFS)};
const RIX={},RU={};REFS.forEach((r,i)=>{r.n=i+1;RIX[r.id]=r;RU[r.url]=r;});
function cite(r,secId){return '<sup class="cit"><a href="#'+secId+'-n'+r.n+'" data-note="'+secId+'-n'+r.n+'">['+r.n+']</a></sup>';}
document.querySelectorAll('main section').forEach(sec=>{const used=new Set();
 sec.querySelectorAll('a.f').forEach(a=>{const r=RU[a.getAttribute('href')];if(!r)return;used.add(r);const fig=a.closest('.fig');a.outerHTML=cite(r,sec.id);
  if(fig&&!fig.querySelector('.src'))fig.insertAdjacentHTML('beforeend','<small class="src"><b class="tipo">'+(r.id==='ihme'?'Estimación modelada':'Dato publicado')+'.</b> Fuente: '+r.short+'.</small>');});
 if(used.size){const list=[...used].sort((a,b)=>a.n-b.n).map(r=>'<li id="'+sec.id+'-n'+r.n+'"><span class="nn">['+r.n+']</span> '+r.apa+' <a href="'+r.url+'">Disponible en línea</a></li>').join('');
  sec.querySelector('.wrap').insertAdjacentHTML('beforeend','<div class="notes"><h3>Notas y fuentes de esta sección</h3><ol>'+list+'</ol></div>');}});
document.getElementById('allrefs').innerHTML=REFS.map(r=>'<li><span class="nn">['+r.n+']</span> '+r.apa+' <a href="'+r.url+'">Disponible en línea</a></li>').join('');
document.addEventListener('click',e=>{const a=e.target.closest('a[data-note]');if(!a)return;e.preventDefault();const t=document.getElementById(a.dataset.note);if(t){t.scrollIntoView({block:'center'});t.classList.add('hl');setTimeout(()=>t.classList.remove('hl'),1600);}});
const nav=document.querySelector('nav.tabs'),menu=nav.querySelector('.menu');
menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o);document.getElementById('mch').textContent=o?'Cerrar':'Ver las '+btns.length+' secciones';});
const btns=[...document.querySelectorAll('nav.tabs button[data-t]')];
function show(id,push){if(!document.getElementById(id)||!document.getElementById(id).matches('main section'))id='brief';document.querySelectorAll('main section').forEach(s=>s.classList.toggle('on',s.id===id));btns.forEach(b=>b.setAttribute('aria-selected',b.dataset.t===id));const cur=btns.find(b=>b.dataset.t===id);document.getElementById('mcur').textContent=cur?cur.textContent:'Brief';nav.classList.remove('open');menu.setAttribute('aria-expanded','false');if(push)history.replaceState(null,'','#'+id);window.scrollTo({top:0});}
btns.forEach(b=>b.addEventListener('click',()=>show(b.dataset.t,true)));
document.getElementById('mch').textContent='Ver las '+btns.length+' secciones';
const ord=btns.map(b=>b.dataset.t);
document.querySelectorAll('main section').forEach(sec=>{if(sec.querySelector('.pn'))return;const i=ord.indexOf(sec.id);if(i<0)return;const pv=btns[i-1],nx=btns[i+1];
 sec.querySelector('.wrap').insertAdjacentHTML('beforeend','<p class="pn">'+(pv?'<a href="#'+pv.dataset.t+'" data-go="'+pv.dataset.t+'">Sección anterior: '+pv.textContent+'</a>':'<span></span>')+(nx?'<a href="#'+nx.dataset.t+'" data-go="'+nx.dataset.t+'">Sección siguiente: '+nx.textContent+'</a>':'')+'</p>');});
document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();show(a.dataset.go,true);}));
document.querySelectorAll('[data-scroll]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const t=document.getElementById(a.dataset.scroll);if(t)t.scrollIntoView({behavior:'smooth'});}));
document.querySelectorAll('.qm').forEach(b=>b.addEventListener('click',()=>{nav.classList.add('open');menu.setAttribute('aria-expanded','true');document.getElementById('mch').textContent='Cerrar';nav.scrollIntoView({block:'start'});menu.focus();}));
show(location.hash.slice(1)||'brief',false);
window.addEventListener('hashchange',()=>show(location.hash.slice(1)||'brief',false));`;

const html=`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${TITLE}</title>
<meta name="description" content="Plataforma interinstitucional de seguimiento y control: listas nominales de pacientes, médicos y prestadores que Colombia ya puede ejecutar con normas, datos y equipos existentes.">
<meta property="og:title" content="${TITLE}">
<meta property="og:description" content="${L.length} listas con dueño, construidas con datos que el sistema ya tiene, para que la atención llegue primero a quien más la necesita.">
<meta property="og:type" content="website"><meta property="og:url" content="https://doar95.github.io/listas-de-pacientes-colombia/">
<meta property="og:image" content="https://doar95.github.io/listas-de-pacientes-colombia/miniatura.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${TITLE}"><meta property="og:locale" content="es_CO">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:image" content="https://doar95.github.io/listas-de-pacientes-colombia/miniatura.png">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Work+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>${css}</style></head><body>
<header class="top"><div class="wrap">
<h1>${TITLE}</h1>
<p>Una plataforma que une lo que el sistema ya tiene alrededor del caso de cada paciente: el Ministerio identifica y prioriza, las EPS, IPS y secretarías actúan, la Supersalud sigue, verifica y controla, y todos ven la misma historia. Funciona con las normas vigentes y con las capacidades que las entidades ya tienen. Listas de pacientes, médicos y prestadores.</p>
<p class="hcta"><a class="cta" href="presentacion.html">Ver la presentación de 60 segundos</a></p>
<p class="by">Propuesta técnica para el Ministerio de Salud y Protección Social, la Superintendencia Nacional de Salud, la ADRES y las secretarías de salud. Información con corte al 1 de noviembre de 2026. Análisis y redacción: Claude, modelo de inteligencia artificial de Anthropic. Curaduría: David Aguilar, economista colombiano residente en el exterior, y Nancy Yomayusa González, médica internista y nefróloga, investigadora y autora de consensos colombianos basados en la evidencia, consultora independiente. Ver <a href="#avisos" style="color:#fff" data-go="avisos">avisos y alcance</a>.</p>
</div></header>
<div class="layout">${nav}<main>
${brief}
${plataforma}
${vaciosSec}
${gobernanza}
${sistema}
${tableroSec}
${cac}
${carga}
${territorios}
${datos}
${listas}
${supersalud}
${juridica}
${dofa}
${mundo}
${evidencia}
${ruta}
${avisos}
</main></div>
<footer><div class="wrap small">Brief técnico independiente. Corte de información: 1 de noviembre de 2026. Análisis y redacción: Claude (Anthropic). Curaduría: David Aguilar, economista, y Nancy Yomayusa González, médica internista y nefróloga. No es una publicación oficial.</div></footer>
<script>${js}</script></body></html>`;
fs.writeFileSync('/home/claude/listas-de-pacientes-colombia/index.html',html);
console.log('ok',html.length,L.length);
