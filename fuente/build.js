const fs=require('fs'),path=require('path');
const D=__dirname;
const REFS=require('./refs.js');const {GRUPOS,L}=require('./lists.js');
const RIX={};REFS.forEach(r=>RIX[r.id]=r);
const geih=JSON.parse(fs.readFileSync('/tmp/geihc/data/datos.json','utf8'));
let css=fs.readFileSync(path.join(D,'base.css'),'utf8').replace('<style>','').replace('</style>','');
const cite=s=>String(s).replace(/\[\[(\w+)\]\]/g,(m,id)=>{if(!RIX[id])throw new Error('ref '+id);return '<a class="f" href="'+RIX[id].url+'"></a>';});
const SHORT={pdc:'Plan de choque con riesgo vital',epi:'Epilepsia',sup:'Insuficiencia suprarrenal',hipo:'Hipoparatiroidismo',lup:'Lupus',trr:'Diálisis y trasplante',vih:'VIH',tb:'Tuberculosis',hem:'Hemofilia',renal0:'Estudio renal pendiente',hta:'Hipertensión no controlada',dm:'Diabetes no controlada',erc:'Enfermedad renal avanzada',iam:'Después del infarto',ic:'Insuficiencia cardiaca',epoc:'EPOC',mama:'Cáncer de mama',cervix:'Cuello uterino',crc:'Colon y recto',onco:'Inicio de tratamiento',ar:'Artritis reumatoide',vhc:'Hepatitis C',gest:'Gestantes',sif:'Sífilis gestacional',desn:'Desnutrición aguda',vac:'Vacunación',sui:'Intento de suicidio',hosp:'Hospitalizaciones evitables',poli:'Polifarmacia',quej:'Quejas repetidas',presc:'Prescriptores atípicos',ips:'Prestadores con demoras',dato:'Calidad del dato'};
const G={};GRUPOS.forEach(g=>G[g[0]]=g);
const TITLE='Listas para actuar a tiempo: pacientes, médicos y prestadores';

/* ---------- NAV ---------- */
const navGroups=[
 ['Inicio',[['brief','Brief']]],
 ['Contexto y diagnóstico',[['sistema','Sistema y funciones'],['cac','Cuenta de Alto Costo'],['carga','Carga de enfermedad'],['territorios','Territorios'],['datos','Datos e interoperabilidad']]],
 ...GRUPOS.map(g=>[g[1],L.filter(x=>x.g===g[0]).map(x=>['l-'+x.id,SHORT[x.id]]),g[2]]),
 ['Supersalud, normas y fuentes',[['supersalud','Supersalud'],['juridica','Base jurídica'],['dofa','DOFA'],['mundo','Otros países'],['evidencia','Evidencia'],['ruta','Ruta'],['avisos','Fuentes y avisos']]]
];
const navGroup=([h,items,k],idx)=>(k&&idx===2?'<p class="nsup">Listas</p>':'')+(!k&&idx===navGroups.length-1?'<p class="nsup">Instrumentos</p>':'')+'<p class="ng'+(k?' ngl" style="--k:'+k:'')+'">'+h+'</p>'+items.map(([id,t])=>'<button role="tab" data-t="'+id+'"'+(k?' class="lb" style="--k:'+k+'"':'')+'>'+t+'</button>').join('');
const nav='<nav class="tabs" aria-label="Secciones del brief"><button class="menu" aria-expanded="false" aria-controls="navlist">Secciones del brief</button><div class="wrap" id="navlist" role="tablist">'+navGroups.map(navGroup).join('')+'</div></nav>';

/* ---------- BRIEF ---------- */
const wheel=`<div class="wheel" aria-label="Ciclo de seis pasos: identificar, priorizar, enviar, actuar, verificar, evaluar">
<svg viewBox="0 0 320 320" role="img"><title>Ciclo de listas</title>
<path d="M162.9 10.0 A150 150 0 0 1 288.4 82.5 L238.8 112.5 A92 92 0 0 0 161.8 68.0Z" fill="#004884"/><text x="221" y="62" text-anchor="middle" class="wl">Identificar</text>
<path d="M291.3 87.5 A150 150 0 0 1 291.3 232.5 L240.5 204.5 A92 92 0 0 0 240.5 115.5Z" fill="#3366CC"/><text x="266" y="164" text-anchor="middle" class="wl" transform="rotate(90 266 160)">Priorizar</text>
<path d="M288.4 237.5 A150 150 0 0 1 162.9 310.0 L161.8 252.0 A92 92 0 0 0 238.8 207.5Z" fill="#069169"/><text x="221" y="266" text-anchor="middle" class="wl">Enviar</text>
<path d="M157.1 310.0 A150 150 0 0 1 31.6 237.5 L81.2 207.5 A92 92 0 0 0 158.2 252.0Z" fill="#FFAB00"/><text x="99" y="266" text-anchor="middle" class="wl d">Actuar</text>
<path d="M28.7 232.5 A150 150 0 0 1 28.7 87.5 L79.5 115.5 A92 92 0 0 0 79.5 204.5Z" fill="#A80521"/><text x="54" y="164" text-anchor="middle" class="wl" transform="rotate(-90 54 160)">Verificar</text>
<path d="M31.6 82.5 A150 150 0 0 1 157.1 10.0 L158.2 68.0 A92 92 0 0 0 81.2 112.5Z" fill="#0B457F"/><text x="99" y="62" text-anchor="middle" class="wl">Evaluar</text>
<text x="160" y="156" text-anchor="middle" class="c1">Cada corte</text><text x="160" y="176" text-anchor="middle" class="c2">misma lista, mejor dato</text></svg></div>`;

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
 <div class="sm-bot"><b>Verifican el cierre</b><span>Supersalud: Subdirección de Analítica, Delegada de Aseguramiento, Delegada de Prestadores y Delegada de Protección al Usuario</span><span>Cuenta de Alto Costo: auditoría de cohortes</span><small>Decreto 1080 de 2021, arts. 7, 17, 19, 22 y 25; Ley 1949 de 2019</small></div>
</div>`;

const steps=[
 ['Identificar','var(--navy)','Dirección de Epidemiología y Demografía con la Dirección Estratégica de Tecnología de la Información.','El Ministerio administra la información del sistema en SISPRO (Ley 1438 de 2011, art. 112) y todos los agentes deben entregarle la que requiera (Ley 1751 de 2015, art. 19). Epidemiología y Demografía está en el Viceministerio de Salud Pública y Atención Primaria (Decreto 120 de 2026, art. 5) y dirige desde 2011 los estudios de situación de salud (Decreto 4107 de 2011, art. 21, num. 1).','Se aplican los criterios en códigos CIE 10, CUPS y ATC sobre RIPS, historia clínica interoperable, Cuenta de Alto Costo, SIVIGILA, MIPRES y el tablero del plan de choque.','Universo de personas, prescriptores o prestadores que cumplen cada criterio.'],
 ['Priorizar','var(--blue)','Viceministerio de Protección Social y Dirección de Regulación de Operación del Aseguramiento.','El aseguramiento incluye la gestión del riesgo en salud (Ley 1122 de 2007, art. 14). El Viceministerio de Protección Social tiene a cargo la regulación de la operación del aseguramiento (Decreto 120 de 2026, art. 5) y desde 2011 consolida y evalúa el seguimiento al aseguramiento (Decreto 4107 de 2011, art. 28, num. 4).','Cada registro recibe prioridad alta o estándar según el criterio clínico de la lista.','Lista ordenada por EPS y por departamento.'],
 ['Enviar','var(--green)','Dirección Estratégica de Tecnología de la Información.','Lineamientos de interoperabilidad y calidad de datos (Decreto 120 de 2026, art. 9, num. 3 y 6). La entrega de datos a una entidad que los requiere en ejercicio de sus funciones no exige autorización del titular (Ley 1581 de 2012, art. 10, lit. a), limitada a la finalidad y al destinatario competente.','Cada EPS recibe solo a sus afiliados; cada secretaría, su territorio; cada IPS, la comparación de sus profesionales.','Constancia de entrega por destinatario.'],
 ['Actuar','var(--yellow)','EPS, IPS, gestores farmacéuticos y secretarías.','Las EPS organizan el acceso y controlan la atención de sus afiliados (Ley 100 de 1993, art. 178) y gestionan el riesgo (Ley 1122 de 2007, art. 14; Decreto 682 de 2018). Las secretarías dirigen y vigilan el sistema en su territorio (Ley 715 de 2001, art. 43).','La EPS contacta, entrega o agenda y reporta el cierre. El médico tratante decide la conducta.','Archivo de cierre por persona con fecha y código del servicio.'],
 ['Verificar','var(--red)','Supersalud: Subdirección de Analítica y delegadas. Apoyo de la Cuenta de Alto Costo.','La Supersalud instruye y fija la información que reportan sus vigilados (Decreto 1080 de 2021, art. 7, num. 2 y 15), valida la calidad del dato (art. 17, num. 8) y vigila la gestión del riesgo de las EPS (art. 22, num. 1).','El cierre se cruza con RIPS, factura y resúmenes digitales; las inconsistencias vuelven a la EPS y, si persisten, suben en la escalera de supervisión.','Tasa de cierre verificado por EPS.'],
 ['Evaluar y ajustar','var(--deep)','Viceministerio de Protección Social y Viceministerio de Salud Pública y Atención Primaria, con el IETS.','El Viceministerio de Salud Pública coordina y hace seguimiento a las acciones de salud pública y atención primaria (Decreto 120 de 2026, art. 19, num. 6) y evalúa con EPS y territorios la promoción y prevención (art. 20, num. 6). El IETS evalúa la evidencia (Ley 1438 de 2011, art. 92).','Se revisa qué listas reducen eventos evitables, qué criterios generan ruido y qué EPS o territorios necesitan apoyo.','Resultados agregados publicados y criterios ajustados.']
];
const stepsHtml='<ol class="steps">'+steps.map(([t,k,r,f,q,p])=>`<li class="step" style="--k:${k}"><div class="h${k.includes('yellow')?' d':''}">${t}</div><div class="b"><dl class="rg"><dt>Responsable</dt><dd>${r}</dd><dt>Fundamento</dt><dd>${f}</dd><dt>Qué se hace</dt><dd>${q}</dd><dt>Producto</dt><dd>${p}</dd></dl></div></li>`).join('')+'</ol>';



const cycNorm={Identificar:'Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 5',Priorizar:'Ley 1122 de 2007, art. 14; Decreto 120 de 2026, art. 5; Decreto 4107 de 2011, art. 28',Enviar:'Decreto 120 de 2026, art. 9; Ley 1581 de 2012, art. 10',Actuar:'Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Ley 715 de 2001, art. 43',Verificar:'Decreto 1080 de 2021, arts. 7, 17 y 22; Ley 1949 de 2019','Evaluar y ajustar':'Decreto 120 de 2026, arts. 19 y 20; Ley 1438 de 2011, art. 92'};
const cycTable='<div class="tw"><table class="cyc"><thead><tr><th>Paso</th><th>Quién</th><th>Norma</th><th>Producto</th></tr></thead><tbody>'+steps.map(([t,k,r,f,q,pr])=>'<tr><td style="border-left:6px solid '+k+'"><b>'+t+'</b></td><td>'+r+'</td><td>'+cycNorm[t]+'</td><td>'+pr+'</td></tr>').join('')+'</tbody></table></div>';
const existe=[
['Pirámide de riesgo del plan de choque','Ordena a los pacientes con pendientes en tres niveles, con la Cuenta de Alto Costo y las sociedades científicas; el propio Ministerio la describe como un modelo en construcción [[pdcpiramide]].','La escribe en códigos, la aplica en cada corte y la extiende a quien nunca figuró como pendiente.'],
['Mesa Técnica de Control del Ministerio, la Supersalud y la ADRES','Hace seguimiento al plan de choque; el avance se reporta en unidades de medicamento [[pdcavance]].','Cuenta el cierre en pacientes por nivel y lo verifica contra RIPS y la historia clínica.'],
['Circular de la Supersalud para menores en riesgo vital','Exige a las EPS una base de menores en cohortes priorizadas, con seguimiento mensual, anexo de 19 campos y acceso directo de la Supersalud [[cenna]].','Usa el mismo formato para adultos y para las demás listas; no hace falta un reporte nuevo.'],
['Cuenta de Alto Costo','Cohortes nominales auditadas desde 2007; participa en el plan de choque [[caccv]].','Las brechas vuelven a la EPS en cada corte, con nombre propio.'],
['Analítica de hospitalizaciones evitables de la ADRES','Identificó 748.212 hospitalizaciones evitables en 2025 [[adres]].','Lista nominal y control después del egreso.'],
['Acuerdo de la ADRES y el Invima','Cruza prescripción, suministro y gasto por producto [[adresinvima]].','Comparación entre pares por prescriptor, confidencial y revisada en la IPS.'],
['Supervisión de la Supersalud','46 indicadores de seguimiento a EPS en 2026 y un reto declarado de supervisión con analítica y alertas tempranas [[rcsuper]].','Las listas son esas alertas, a nivel de persona.']];
const existeTable='<div class="tw"><table><thead><tr><th>Lo que ya existe</th><th>Qué hace hoy</th><th>Qué agrega el ciclo</th></tr></thead><tbody>'+existe.map(r=>'<tr><td><b>'+r[0]+'</b></td><td>'+cite(r[1])+'</td><td>'+r[2]+'</td></tr>').join('')+'</tbody></table></div>';
const chips=x=>'<div class="chips"><span>Daño en '+x.dano+'</span><span>Fuente nominal '+x.dato+'</span><span>Vuelta '+x.vuelta+'</span></div>';
const index=GRUPOS.map(g=>{const ls=L.filter(x=>x.g===g[0]);return `<h3 class="gh" style="--k:${g[2]}">${g[1]}</h3><p class="gd">${g[3]}</p><div class="lgrid">`+ls.map(x=>`<a class="lc" style="--k:${g[2]}" href="#l-${x.id}" data-go="l-${x.id}"><b>${x.t}</b><span>${x.valor}</span>${chips(x)}<i>Abrir la lista</i></a>`).join('')+'</div>';}).join('');
const brief=`<section id="brief" class="on" role="tabpanel"><div class="wrap">
<div class="hero"><div>
<p class="lead">El sistema ya sabe, persona por persona, quién dejó de recibir un medicamento del que depende su vida, quién tiene diabetes sin estudio renal, qué gestante no ha tenido su primer control y qué médico prescribe muy distinto a sus pares.</p>
<p class="lead">La propuesta: convertir ese conocimiento en listas con responsable. Cada EPS y cada secretaría recibe a sus personas pendientes, cada IPS recibe la comparación de sus profesionales y la Supersalud verifica el cierre. Con las normas, los datos y los equipos que ya existen.</p>
</div>${wheel}</div>
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
<h2>Lo que ya existe y lo que el ciclo agrega</h2>
${existeTable}
<h2 style="margin-top:34px">Las ${L.length} listas</h2>
<div class="box note read"><h3>Cómo leer el orden</h3><p>Las listas se agrupan por tipo de problema; el orden no es un ranking de importancia. La prioridad clínica entre pacientes la fija la pirámide oficial del plan de choque. Cada tarjeta muestra tres datos para decidir el arranque: en cuánto tiempo llega el daño si no se actúa, si la fuente nominal ya está lista y en qué vuelta se sugiere empezar. La primera vuelta se elige por factibilidad: dato listo y criterio sin discusión clínica. Las listas de médicos van en la tercera vuelta porque necesitan indicadores validados por las sociedades científicas, no porque importen menos.</p></div>
${index}
<h2>Por qué ahora</h2>
<div class="figs">
<div class="fig k-r"><b>1.849.649</b><span>personas únicas registradas en el tablero del plan de choque al 20 de octubre de 2026</span>${cite('[[infobae27]]')}</div>
<div class="fig"><b>7 millones</b><span>de personas con hipertensión, diabetes o enfermedad renal crónica en la Cuenta de Alto Costo</span>${cite('[[caccv]]')}</div>
<div class="fig k-b"><b>6,9 millones</b><span>de personas con historia clínica interoperable al 4 de agosto de 2026</span>${cite('[[ihce]]')}</div>
</div>
<div class="box red read"><h3>Lo que esto no es</h3><p>No es una plataforma nueva ni una planta nueva. No traslada funciones entre entidades. No sustituye al médico tratante: la lista dice a quién mirar primero y el médico decide qué hacer. La lista de prescriptores no califica a ningún médico desde el gobierno: se entrega en confidencialidad a su IPS para revisión entre pares. Ninguna lista es un instrumento para negar servicios.</p></div>
<p class="small read">Cada cifra lleva su fuente debajo y una nota numerada con la referencia completa al final de la sección. El curador humano está vinculado a un conglomerado de salud con operación en Colombia; las ideas son personales y no representan a esa entidad. Detalles en <a href="#avisos" data-go="avisos">Fuentes y avisos</a>.</p>
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
<tr><td>Tablero del plan de choque</td><td>Personas únicas, casos resueltos y pendientes por EPS, departamento y tipo de atención.</td><td>Ministerio</td><td>Semanal desde octubre de 2026 ${cite('[[infobae27]]')}.</td></tr>
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
<p class="read">El Ministerio identifica, prioriza y envía. La Supersalud verifica que las EPS e IPS actúen, sin calificar la práctica individual del médico. En las EPS intervenidas, que agrupan cerca de 21 millones de afiliados ${cite('[[infobae27]]')}, la administración la designa la propia Superintendencia, de modo que las listas pueden ejecutarse desde la primera vuelta.</p>
<div class="two"><div>
<h3>Cómo se reporta y se verifica</h3>
<p>La EPS devuelve un archivo por persona con fecha de contacto, código del servicio entregado, CUM o CUPS, fecha de atención y estado de cierre. La Subdirección de Analítica cruza ese archivo con RIPS, factura electrónica, resúmenes digitales y quejas, y llama a una muestra de pacientes para confirmar el recibo. La tasa de cierre verificado por EPS entra en la matriz de riesgo de la Delegada de Aseguramiento.</p>
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
<p class="read">Por fases, sin fechas: cada fase empieza cuando la anterior deja su producto.</p>
<ol class="steps">
<li class="step"><div class="h">Primera vuelta<small>Decidir y correr</small></div><div class="b"><p>Mesa técnica entre viceministerios, Epidemiología y Demografía, Tecnología, Cuenta de Alto Costo, INS y Supersalud. Primera corrida de tres listas: plan de choque con riesgo vital, continuidad vital y estudio renal pendiente.</p></div></li>
<li class="step" style="--k:var(--blue)"><div class="h">Piloto<small>Pilotear y validar</small></div><div class="b"><p>Envío a las EPS intervenidas y a cinco secretarías departamentales. Sociedades científicas de cardiología, nefrología, endocrinología, medicina interna, neurología, reumatología, oncología, infectología, ginecología, pediatría, psiquiatría y medicina familiar revisan criterios; el IETS los valida. Proyecto de circular publicado para comentarios.</p></div></li>
<li class="step" style="--k:var(--green)"><div class="h">Formalización<small>Circulares</small></div><div class="b"><p>Circular externa del Ministerio y circular conjunta con la Supersalud. Las tres cifras por lista entran al tablero.</p></div></li>
<li class="step" style="--k:var(--yellow)"><div class="h d">Ampliación<small>Todas las listas</small></div><div class="b"><p>Todas las EPS y las 33 secretarías. Se agregan las listas cardiometabólicas, de cáncer, de cohortes de la Cuenta de Alto Costo, materno infantiles, de salud mental y de uso del sistema.</p></div></li>
<li class="step" style="--k:var(--deep)"><div class="h">Consolidación<small>Médicos y prestadores</small></div><div class="b"><p>Listas de prescriptores con práctica atípica y de prestadores con demoras, con retroalimentación entre pares. Resultados usados en la UPC y en la regulación de beneficios. Evaluación independiente del Observatorio Nacional de Salud y del IETS.</p></div></li>
</ol>
<div class="box note read"><h3>Con qué recursos</h3><p>SISPRO y la Dirección de Tecnología para el procesamiento; Epidemiología y Demografía para los criterios; la Cuenta de Alto Costo y el INS con sus bases; las secretarías con sus equipos de salud pública; la Subdirección de Analítica de la Supersalud para la verificación. No se contrata plataforma ni se amplía planta.</p></div>
</div></section>`;

const avisos=`<section id="avisos" role="tabpanel"><div class="wrap read">
<h2>Fuentes, método y avisos</h2>
<h3>Autoría</h3><p>Análisis y redacción: Claude, modelo de inteligencia artificial de Anthropic, que consultó fuentes públicas, PubMed y la base del Estudio de Carga Global de Enfermedad 2023 del IHME. Curaduría y responsabilidad editorial: David Aguilar, economista colombiano residente en el exterior.</p>
<h3>Declaración de vínculo</h3><p>David Aguilar está vinculado laboralmente a un conglomerado de salud con operación en Colombia. Las ideas de este documento son personales, se comparten en el espíritu democrático de aportar al debate público y no representan la posición de esa entidad ni la comprometen.</p>
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
  if(fig&&!fig.querySelector('.src'))fig.insertAdjacentHTML('beforeend','<small class="src">Fuente: '+r.short+'.</small>');});
 if(used.size){const list=[...used].sort((a,b)=>a.n-b.n).map(r=>'<li id="'+sec.id+'-n'+r.n+'"><span class="nn">['+r.n+']</span> '+r.apa+' <a href="'+r.url+'">Disponible en línea</a></li>').join('');
  sec.querySelector('.wrap').insertAdjacentHTML('beforeend','<div class="notes"><h3>Notas y fuentes de esta sección</h3><ol>'+list+'</ol></div>');}});
document.getElementById('allrefs').innerHTML=REFS.map(r=>'<li><span class="nn">['+r.n+']</span> '+r.apa+' <a href="'+r.url+'">Disponible en línea</a></li>').join('');
document.addEventListener('click',e=>{const a=e.target.closest('a[data-note]');if(!a)return;e.preventDefault();const t=document.getElementById(a.dataset.note);if(t){t.scrollIntoView({block:'center'});t.classList.add('hl');setTimeout(()=>t.classList.remove('hl'),1600);}});
const nav=document.querySelector('nav.tabs'),menu=nav.querySelector('.menu');
menu.addEventListener('click',()=>{const o=nav.classList.toggle('open');menu.setAttribute('aria-expanded',o);});
const btns=[...document.querySelectorAll('nav.tabs button[data-t]')];
function show(id,push){if(!document.getElementById(id)||!document.getElementById(id).matches('main section'))id='brief';document.querySelectorAll('main section').forEach(s=>s.classList.toggle('on',s.id===id));btns.forEach(b=>b.setAttribute('aria-selected',b.dataset.t===id));const cur=btns.find(b=>b.dataset.t===id);menu.textContent='Secciones: '+(cur?cur.textContent:'Brief');nav.classList.remove('open');menu.setAttribute('aria-expanded','false');if(push)history.replaceState(null,'','#'+id);window.scrollTo({top:0});}
btns.forEach(b=>b.addEventListener('click',()=>show(b.dataset.t,true)));
document.querySelectorAll('[data-go]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();show(a.dataset.go,true);}));
show(location.hash.slice(1)||'brief',false);
window.addEventListener('hashchange',()=>show(location.hash.slice(1)||'brief',false));`;

const html=`<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>${TITLE}</title>
<meta name="description" content="Brief técnico: un ciclo continuo de listas nominales de pacientes, médicos y prestadores que Colombia ya puede ejecutar con normas, datos y equipos existentes.">
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
<p>Un ciclo de política continuo que convierte lo que el sistema ya sabe en listas con dueño, con las normas, los datos y los equipos que Colombia tiene hoy, sin ley nueva, sin planta nueva y sin presupuesto adicional.</p>
<p class="by">Brief técnico para tomadores de decisión del Ministerio de Salud y Protección Social. Información con corte al 1 de noviembre de 2026. Análisis y redacción: Claude, modelo de inteligencia artificial de Anthropic. Curaduría: David Aguilar, economista colombiano residente en el exterior. Ver <a href="#avisos" style="color:#fff" data-go="avisos">avisos y alcance</a>.</p>
</div></header>
<div class="layout">${nav}<main>
${brief}
${sistema}
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
<footer><div class="wrap small">Brief técnico independiente. Corte de información: 1 de noviembre de 2026. Análisis y redacción: Claude (Anthropic). Curaduría: David Aguilar, economista. No es una publicación oficial.</div></footer>
<script>${js}</script></body></html>`;
fs.writeFileSync('/home/claude/listas-de-pacientes-colombia/index.html',html);
console.log('ok',html.length,L.length);
