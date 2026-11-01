module.exports={
 "GRUPOS": [
  [
   "vital",
   "Continuidad vital",
   "var(--red)",
   "Personas para las que una interrupción del tratamiento es riesgo de muerte o daño grave en semanas."
  ],
  [
   "cardio",
   "Cardiometabólicas, renales y respiratorias",
   "var(--navy)",
   "La mayor carga de enfermedad del país y la cohorte más grande de la Cuenta de Alto Costo."
  ],
  [
   "cancer",
   "Cáncer",
   "var(--blue)",
   "Tiempo entre la sospecha, el diagnóstico y el tratamiento, que la Cuenta de Alto Costo ya mide."
  ],
  [
   "cac",
   "Otras cohortes de la Cuenta de Alto Costo",
   "#6B3FA0",
   "Enfermedades crónicas con reporte nominal obligatorio y auditoría propia."
  ],
  [
   "materno",
   "Materno infantil y salud pública",
   "var(--green)",
   "Eventos que el SIVIGILA ya notifica persona por persona."
  ],
  [
   "mental",
   "Salud mental",
   "#0F7C8C",
   "Seguimiento después de un evento que anuncia riesgo de muerte."
  ],
  [
   "valor",
   "Uso del sistema y valor",
   "#B37800",
   "Lo que el sistema paga dos veces o resuelve tarde."
  ],
  [
   "medicos",
   "Médicos, prestadores y reportantes",
   "var(--deep)",
   "Listas que no nombran pacientes sino a quien atiende, prescribe o reporta, para retroalimentar y corregir."
  ]
 ],
 "L": [
  {
   "id": "pdc",
   "g": "vital",
   "t": "Plan de choque: la pirámide de riesgo en códigos y con cierre verificado",
   "valor": "Toma la pirámide de riesgo que el plan de choque ya usa, la escribe en códigos y mide el cierre en pacientes verificados por nivel, no en unidades.",
   "cifra": [
    "1.849.649",
    "personas únicas registradas en el tablero del plan de choque al 20 de octubre de 2026",
    "infobae27"
   ],
   "problema": "El plan de choque ya ordena a los pacientes con pendientes en una pirámide de tres niveles construida con la Cuenta de Alto Costo y las sociedades científicas: en el primero, trasplante, enfermedades huérfanas, cáncer, diabetes insulinodependiente y VIH; en el segundo, asma, insuficiencia cardiaca, enfermedad renal, salud mental, gestantes y EPOC; en el tercero, hipertensión pulmonar, diabetes, dislipidemia e hipotiroidismo, entre otras [[pdcpiramide]]. Con corte al 2 de octubre el avance se reportaba en unidades de medicamento, 31,2%, y una Mesa Técnica de Control del Ministerio, la Supersalud y la ADRES hace el seguimiento [[pdcavance]]. El tablero registra 1.849.649 personas únicas [[infobae27]]. Lo que esta lista agrega es la pirámide escrita en códigos, el cierre contado en pacientes por nivel y verificado contra RIPS y la historia clínica, y su continuidad después de la fase temporal.",
   "clinica": "En cáncer, cada cuatro semanas de retraso en el tratamiento aumenta la mortalidad [[hanna]]. En enfermedad renal avanzada, trasplante, VIH y gestación, la interrupción produce eventos graves en días o semanas. Ordenar por riesgo no cambia cuántas personas se atienden, cambia quién va primero.",
   "factores": [
    "Nivel 1: trasplante, enfermedad huérfana, cáncer, diabetes insulinodependiente, VIH",
    "Nivel 2: asma, insuficiencia cardiaca, enfermedad renal, salud mental, gestación, EPOC",
    "Nivel 3: hipertensión pulmonar, diabetes, dislipidemia, hipotiroidismo y otras",
    "Dentro de cada nivel, primero quien tuvo urgencia u hospitalización en 90 días"
   ],
   "cie": "Nivel 1: Z94 trasplante; listado de enfermedades huérfanas; C00 a D09 cáncer; E10 diabetes insulinodependiente; B20 a B24 VIH. Nivel 2: J45 asma; I50 insuficiencia cardiaca; N18 enfermedad renal; F20 a F39 trastornos mentales graves; Z34, Z35 y capítulo O gestación; J44 EPOC. Nivel 3: I27.0 hipertensión pulmonar primaria; E11 diabetes; E78 dislipidemia; E03 hipotiroidismo.",
   "cups": "Los del procedimiento pendiente según el tablero; para cierre se toman de RIPS.",
   "atc": "L01 y L02 antineoplásicos y hormonales; J05AR y J05AJ antirretrovirales; L04AD inhibidores de calcineurina; A10A insulinas; R03 medicamentos para enfermedad obstructiva de la vía aérea.",
   "fuentes": "Tablero del plan de choque, Cuenta de Alto Costo, RIPS, listado de enfermedades huérfanas de la Resolución 2625 de 2025 [[r2625]].",
   "criterio": "Persona con al menos una atención pendiente en el tablero y un diagnóstico de la pirámide.",
   "prioridad": "El nivel de la pirámide oficial; dentro de cada nivel, primero quien tuvo urgencia u hospitalización en 90 días.",
   "pasos": [
    "Tomar el universo de pendientes en el corte.",
    "Asignar el nivel de la pirámide con los códigos CIE 10 y ATC.",
    "Ordenar dentro de cada nivel por eventos recientes.",
    "Entregar a cada EPS su lista y a cada secretaría la de su territorio.",
    "Cerrar cuando el servicio aparezca en RIPS o en el resumen digital y contar pacientes cerrados por nivel."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Ministerio de Salud",
     "Viceministerio de Protección Social con la Dirección de Regulación de Operación del Aseguramiento",
     "Mantiene la pirámide y la escribe en códigos con las sociedades científicas",
     "Ley 1122 de 2007, art. 14; Decreto 120 de 2026, art. 5"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Cierra primero los pendientes de prioridad alta y reporta el cierre persona por persona",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Gestor farmacéutico",
     "Servicio farmacéutico",
     "Entrega el medicamento pendiente dentro de los plazos de la norma",
     "Resolución 1604 de 2013; Resolución 1799 de 2026"
    ],
    [
     "Secretaría departamental o distrital de salud",
     "Dependencia de aseguramiento y salud pública de la secretaría",
     "Hace seguimiento a las EPS de su territorio como autoridad sanitaria y lo cruza con su ASIS",
     "Ley 715 de 2001, art. 43"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ],
    [
     "Ministerio, Supersalud y ADRES",
     "Mesa Técnica de Control del plan de choque",
     "Revisa el cierre verificado por nivel y por EPS",
     "Plan de choque en salud de 2026"
    ]
   ],
   "cierre": "Servicio registrado en RIPS o en el resumen digital de atención.",
   "indicador": "Pacientes de nivel 1 con pendiente cerrado y verificado, por EPS y departamento, contados en pacientes y no en unidades.",
   "mundo": "Inglaterra exige diagnóstico o descarte de cáncer en 28 días desde la remisión y tratamiento en 62 días [[nhscwt]]; Dinamarca organizó rutas rápidas de cáncer con plazos para cada paso [[probst]]. En ambos casos la cola se ordena por sospecha clínica.",
   "ev": [
    [
     "hanna",
     "Cada cuatro semanas de retraso en cirugía, radioterapia o tratamiento sistémico se asocia con mayor mortalidad en siete tipos de cáncer."
    ]
   ],
   "dano": "días",
   "dato": "lista",
   "vuelta": 1
  },
  {
   "id": "epi",
   "g": "vital",
   "t": "Epilepsia sin antiepiléptico",
   "valor": "Encuentra a quien se quedó sin su antiepiléptico antes de que llegue a urgencias por una crisis o un estado epiléptico.",
   "cifra": [
    "314.378",
    "personas con epilepsia en Colombia en 2023 según el IHME, con un intervalo de 90.804 a 531.480",
    "ihme"
   ],
   "problema": "El IHME estima 314.378 personas con epilepsia idiopática en Colombia en 2023 y 1.020 muertes por esa causa en el mismo año [[ihme]]. Una parte importante de esas muertes ocurre en personas que interrumpieron el tratamiento. El dato de dispensación nominal ya existe en los RIPS de medicamentos y, desde 2026, en el resumen digital de dispensación [[res1799]].",
   "clinica": "Suspender el antiepiléptico es el principal desencadenante de crisis en personas que estaban controladas. En el estudio RANSOM, los periodos sin adherencia se asociaron con más de tres veces la mortalidad que los periodos con adherencia [[ransom]].",
   "factores": [
    "Más de 30 días sin cobertura después de la última dispensación",
    "Antecedente de estado epiléptico o crisis con hospitalización",
    "Gestación: algunos antiepilépticos requieren cambio y control especializado",
    "Menores de edad y personas con discapacidad intelectual que dependen de un cuidador",
    "Ruralidad dispersa y cambio de EPS en el último año"
   ],
   "cie": "G40.0 a G40.9 epilepsia; G41 estado de mal epiléptico.",
   "cups": "890274 consulta de primera vez por neurología; 891401 electroencefalograma convencional; 905201 ácido valproico en suero.",
   "atc": "N03AG01 ácido valproico; N03AF01 carbamazepina; N03AB02 fenitoína; N03AX14 levetiracetam; N03AX09 lamotrigina; N03AA02 fenobarbital.",
   "fuentes": "RIPS de medicamentos, resumen digital de dispensación, RIPS de urgencias.",
   "criterio": "Diagnóstico G40 o G41 en 24 meses y dispensación de N03A en 12 meses, con más de 30 días sin cobertura desde que se agotó la última dispensación.",
   "prioridad": "Alta: estado epiléptico u hospitalización por crisis en 12 meses, gestación o menor de 18 años. Estándar: el resto.",
   "pasos": [
    "Tomar todas las dispensaciones de N03A de 12 meses.",
    "Calcular por persona la fecha de agotamiento según días de suministro.",
    "Marcar más de 30 días sin cobertura.",
    "Subir a prioridad alta con los factores del criterio.",
    "Enviar a EPS y gestor farmacéutico; cerrar con nueva dispensación."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Contacta a la persona, gestiona entrega y, si hay barrera clínica, cita con neurología o medicina general",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Gestor farmacéutico",
     "Servicio farmacéutico",
     "Entrega o registra la causa de no entrega en el resumen de dispensación",
     "Resolución 1604 de 2013; Resolución 1799 de 2026"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Revisa adherencia y ajusta el esquema si es necesario",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Ministerio de Salud",
     "Dirección de Medicamentos y Tecnologías en Salud",
     "Vigila desabastecimientos de antiepilépticos que expliquen brechas por región",
     "Decreto 120 de 2026, art. 5"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Dispensación registrada y ninguna urgencia por crisis en 90 días.",
   "indicador": "Proporción de días cubiertos con antiepiléptico en la cohorte, por EPS.",
   "mundo": "En Estados Unidos la continuidad de los tratamientos crónicos se mide con la proporción de días cubiertos, la misma medida que usa esta lista [[pqa]].",
   "ev": [
    [
     "ransom",
     "La no adherencia a antiepilépticos se asoció con más de tres veces la mortalidad y con más urgencias y hospitalizaciones."
    ]
   ],
   "dano": "días",
   "dato": "lista",
   "vuelta": 1
  },
  {
   "id": "sup",
   "g": "vital",
   "t": "Insuficiencia suprarrenal sin hidrocortisona",
   "valor": "Una persona con insuficiencia suprarrenal que se queda sin hidrocortisona puede morir en días. Es la lista más pequeña y la más urgente.",
   "problema": "La insuficiencia suprarrenal primaria y secundaria y la hiperplasia suprarrenal congénita dependen de reemplazo diario con glucocorticoide. Son pocas personas, por eso no aparecen en los grandes tableros, y precisamente por eso se pueden contactar una por una.",
   "clinica": "Aun en pacientes educados, la crisis suprarrenal ocurre cerca de 8 veces por cada 100 pacientes al año y una fracción de las crisis es fatal [[hahner]]. La falta de hidrocortisona y la falta de dosis de estrés durante una infección son las causas evitables.",
   "factores": [
    "Más de 7 días sin cobertura de hidrocortisona",
    "Crisis suprarrenal previa",
    "Menores de edad con hiperplasia suprarrenal congénita",
    "Comorbilidad que exige dosis de estrés, como diabetes o infecciones recurrentes"
   ],
   "cie": "E27.1 insuficiencia corticosuprarrenal primaria; E27.2 crisis addisoniana; E27.4 otras insuficiencias; E23.0 hipopituitarismo; E25.0 trastornos adrenogenitales congénitos.",
   "cups": "890244 consulta de primera vez por endocrinología; 904805 cortisol.",
   "atc": "H02AB09 hidrocortisona; H02AA02 fludrocortisona.",
   "fuentes": "RIPS de medicamentos y urgencias, resumen digital de dispensación.",
   "criterio": "Diagnóstico marcador en 24 meses y más de 7 días sin cobertura de H02AB09.",
   "prioridad": "Toda la lista es de prioridad alta.",
   "pasos": [
    "Identificar la cohorte por diagnóstico y por dispensación de hidrocortisona.",
    "Calcular días sin cobertura.",
    "Marcar más de 7 días.",
    "Enviar a EPS y gestor farmacéutico para contacto inmediato.",
    "Cerrar con dispensación y con constancia de entrega de la tarjeta o instrucción de dosis de estrés."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Contacto inmediato y entrega; verifica que la persona tenga instrucción de dosis de estrés",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Gestor farmacéutico",
     "Servicio farmacéutico",
     "Prioriza la entrega sobre cualquier otro pendiente",
     "Resolución 1604 de 2013; Resolución 1799 de 2026"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Control con endocrinología o medicina interna",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Dispensación registrada y ninguna crisis suprarrenal en 90 días.",
   "indicador": "Mediana de días sin cobertura en la cohorte.",
   "mundo": "En 2020 el Servicio Nacional de Salud de Inglaterra emitió una alerta nacional de seguridad del paciente para que toda persona con dependencia de esteroides porte una tarjeta de emergencia [[nhssteroid]].",
   "ev": [
    [
     "hahner",
     "La crisis suprarrenal es frecuente aun en pacientes educados y una parte de las crisis termina en muerte."
    ]
   ],
   "dano": "días",
   "dato": "lista",
   "vuelta": 1
  },
  {
   "id": "hipo",
   "g": "vital",
   "t": "Hipoparatiroidismo sin calcitriol o calcio",
   "valor": "Detecta a quien perdió el calcitriol o el calcio después de una cirugía de tiroides, antes de una hipocalcemia grave.",
   "problema": "El hipoparatiroidismo posquirúrgico es una complicación conocida de la tiroidectomía y exige reemplazo continuo. Es una cohorte pequeña y nominal, identificable por diagnóstico y por dispensación.",
   "clinica": "La hipocalcemia aguda produce tetania, convulsiones y arritmias. La interrupción de calcitriol tiene efecto en pocos días, por eso el umbral de la lista es corto.",
   "factores": [
    "Más de 7 días sin calcitriol",
    "Hipocalcemia con urgencia en 12 meses",
    "Gestación",
    "Enfermedad renal crónica concomitante"
   ],
   "cie": "E89.2 hipoparatiroidismo consecutivo a procedimientos; E20 hipoparatiroidismo.",
   "cups": "903603 calcio automatizado; 903604 calcio iónico; 904912 hormona paratiroidea molécula intacta.",
   "atc": "A11CC04 calcitriol; A12AA04 carbonato de calcio.",
   "fuentes": "RIPS, resumen digital de dispensación.",
   "criterio": "Diagnóstico E89.2 o E20 y más de 7 días sin cobertura de calcitriol.",
   "prioridad": "Alta: urgencia por hipocalcemia en 12 meses o gestación. Estándar: el resto.",
   "pasos": [
    "Cohorte por diagnóstico y dispensación de A11CC04.",
    "Días sin cobertura.",
    "Umbral de 7 días.",
    "Envío a EPS y gestor farmacéutico.",
    "Cierre con dispensación y calcio sérico registrado."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Contacto y entrega; control de calcio sérico",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Gestor farmacéutico",
     "Servicio farmacéutico",
     "Entrega prioritaria",
     "Resolución 1604 de 2013; Resolución 1799 de 2026"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Ajuste de dosis por endocrinología",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Dispensación y calcio sérico registrados en el periodo.",
   "indicador": "Proporción de días cubiertos con calcitriol.",
   "mundo": "La guía de la Sociedad Europea de Endocrinología recomienda control periódico del calcio y educación sobre los síntomas de hipocalcemia [[ese]]; la lista es la forma operativa de ese seguimiento.",
   "ev": [],
   "dano": "días",
   "dato": "lista",
   "vuelta": 1
  },
  {
   "id": "lup",
   "g": "vital",
   "t": "Lupus sin hidroxicloroquina",
   "valor": "Suspender la hidroxicloroquina multiplica las reactivaciones del lupus. La lista evita brotes que terminan en nefritis y hospitalización.",
   "problema": "El lupus eritematoso sistémico afecta sobre todo a mujeres jóvenes. La hidroxicloroquina es el tratamiento de base y es de bajo costo; su interrupción es una causa evitable de reactivación.",
   "clinica": "En el ensayo canadiense, las personas que suspendieron hidroxicloroquina tuvieron 2,5 veces más riesgo de reactivación clínica que las que la mantuvieron [[hcq]].",
   "factores": [
    "Más de 30 días sin cobertura",
    "Nefritis lúpica (M32.1 con compromiso renal)",
    "Gestación",
    "Brote con hospitalización en 12 meses"
   ],
   "cie": "M32 lupus eritematoso sistémico; M32.1 con compromiso de órganos.",
   "cups": "890288 consulta de primera vez por reumatología; 903895 creatinina en suero.",
   "atc": "P01BA02 hidroxicloroquina.",
   "fuentes": "RIPS, resumen digital de dispensación.",
   "criterio": "Diagnóstico M32 en 24 meses, dispensación de P01BA02 en 12 meses y más de 30 días sin cobertura.",
   "prioridad": "Alta: nefritis, gestación u hospitalización en 12 meses. Estándar: el resto.",
   "pasos": [
    "Cohorte por diagnóstico y dispensación.",
    "Días sin cobertura.",
    "Umbral de 30 días.",
    "Envío a EPS y gestor farmacéutico.",
    "Cierre con dispensación."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Contacto, entrega y control con reumatología",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Gestor farmacéutico",
     "Servicio farmacéutico",
     "Entrega o reporte de causa de no entrega",
     "Resolución 1604 de 2013; Resolución 1799 de 2026"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Revisión de adherencia y actividad de la enfermedad",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Dispensación registrada y ninguna hospitalización por lupus en 90 días.",
   "indicador": "Proporción de días cubiertos con hidroxicloroquina.",
   "mundo": "Las recomendaciones de la Liga Europea contra el Reumatismo indican hidroxicloroquina para todos los pacientes con lupus salvo contraindicación [[eular]].",
   "ev": [
    [
     "hcq",
     "Retirar la hidroxicloroquina aumentó 2,5 veces el riesgo de reactivación clínica del lupus."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 1
  },
  {
   "id": "trr",
   "g": "vital",
   "t": "Diálisis o trasplante renal sin continuidad",
   "valor": "Para una persona en diálisis o con trasplante, una semana sin terapia o sin inmunosupresor es riesgo de muerte o de perder el injerto.",
   "cifra": [
    "2.103",
    "personas en terapia de reemplazo renal sin la continuidad requerida en 2025",
    "cacerc"
   ],
   "problema": "La Cuenta de Alto Costo reportó 54.594 personas en terapia de reemplazo renal y 2.103 sin la continuidad requerida en 2025 [[cacerc]]. Es la cohorte de mayor costo por persona del sistema y la de consecuencias más rápidas.",
   "clinica": "En el estudio internacional DOPPS, saltarse sesiones de hemodiálisis se asoció con mayor mortalidad y más hospitalizaciones [[saran]]. En trasplante, la falta de adherencia al inmunosupresor es una causa principal de rechazo; las intervenciones para mejorarla tienen evidencia de baja calidad, lo que refuerza el valor de detectar la interrupción a tiempo [[mellon]].",
   "factores": [
    "Sesiones de hemodiálisis faltantes en el mes",
    "Más de 7 días sin tacrolimus, ciclosporina o micofenolato",
    "Cambio de prestador de diálisis o de EPS",
    "Acceso vascular por catéter temporal",
    "Residencia lejos de la unidad renal"
   ],
   "cie": "N18.5 enfermedad renal crónica estadio 5; Z99.2 dependencia de diálisis; Z49 cuidados que implican diálisis; Z94.0 trasplante de riñón; T86.1 falla y rechazo del trasplante de riñón.",
   "cups": "399501 hemodiálisis estándar con bicarbonato; 549801 diálisis peritoneal manual; 549802 diálisis peritoneal automatizada; 905503 tacrolimus; 905502 ciclosporina.",
   "atc": "L04AD02 tacrolimus; L04AD01 ciclosporina; L04AA06 ácido micofenólico; B03XA eritropoyetinas.",
   "fuentes": "Cuenta de Alto Costo, RIPS de procedimientos y medicamentos.",
   "criterio": "Persona en terapia de reemplazo renal sin sesiones registradas en el mes, o trasplantado sin dispensación de inmunosupresor por más de 7 días.",
   "prioridad": "Toda la lista es de prioridad alta.",
   "pasos": [
    "Cohorte de terapia de reemplazo de la Cuenta de Alto Costo.",
    "Sesiones registradas por mes en RIPS.",
    "Dispensaciones de L04AD y L04AA en trasplantados.",
    "Marcar faltantes.",
    "Enviar a EPS y secretaría para restablecer la terapia."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de enfermedad renal",
     "Aporta la cohorte nominal y la marca de continuidad",
     "Decreto 780 de 2016, compila el Decreto 2699 de 2007"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Restablece la terapia y garantiza el transporte cuando es barrera",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Unidad renal o grupo de trasplante confirma la sesión o la dosis",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Secretaría departamental o distrital de salud",
     "Dependencia de aseguramiento y salud pública de la secretaría",
     "Hace seguimiento a las EPS de su territorio como autoridad sanitaria y lo cruza con su ASIS",
     "Ley 715 de 2001, art. 43"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Sesiones registradas de forma continua en el mes siguiente o dispensación de inmunosupresor.",
   "indicador": "Número de personas en terapia de reemplazo sin continuidad, por EPS.",
   "mundo": "El estudio internacional DOPPS compara prácticas y resultados entre unidades de diálisis de varios países y encontró que la proporción de sesiones perdidas varía con las prácticas de cada unidad [[saran]].",
   "ev": [
    [
     "saran",
     "Saltarse sesiones de hemodiálisis se asoció con mayor mortalidad y más hospitalizaciones."
    ],
    [
     "mellon",
     "Las intervenciones para mejorar la adherencia al inmunosupresor tienen evidencia de baja calidad; detectar la interrupción es la medida práctica."
    ]
   ],
   "dano": "días",
   "dato": "lista",
   "vuelta": 1
  },
  {
   "id": "vih",
   "g": "vital",
   "t": "VIH sin terapia continua o sin carga viral",
   "valor": "Una persona con VIH en supresión viral no transmite el virus. Cada persona que vuelve al tratamiento protege a otras.",
   "cifra": [
    "158.810",
    "personas en tratamiento antirretroviral al 31 de enero de 2025",
    "cacvih"
   ],
   "problema": "La Cuenta de Alto Costo registra 158.810 personas en tratamiento antirretroviral y cerca de 14 mil nuevos diagnósticos por año [[cacvih]]. El IHME estima 2.636 muertes por VIH en Colombia en 2023 [[ihme]]. Las muertes por VIH en la era del tratamiento ocurren sobre todo en quienes no llegan o no permanecen en él.",
   "clinica": "El ensayo HPTN 052 mostró que el tratamiento antirretroviral temprano reduce de forma drástica la transmisión a la pareja [[cohen]]. Las intervenciones de servicio para vincular y retener en atención mejoran la permanencia en tratamiento [[brennan]].",
   "factores": [
    "Más de 30 días sin antirretroviral",
    "Sin carga viral en 12 meses o carga viral detectable",
    "Diagnóstico reciente sin inicio de tratamiento",
    "Gestación",
    "Coinfección con tuberculosis"
   ],
   "cie": "B20 a B24 enfermedad por VIH; Z21 infección asintomática por VIH.",
   "cups": "908832 VIH carga viral; 906714 linfocitos T CD4; 906249 VIH 1 y 2 anticuerpos; 906250 VIH prueba confirmatoria.",
   "atc": "J05AR combinaciones antirretrovirales; J05AJ inhibidores de integrasa; J05AF análogos de nucleósidos.",
   "fuentes": "Cuenta de Alto Costo, RIPS, SIVIGILA evento 850.",
   "criterio": "Persona de la cohorte de VIH con más de 30 días sin antirretroviral, o sin carga viral registrada en 12 meses, o con carga viral detectable sin cambio de esquema.",
   "prioridad": "Alta: diagnóstico sin inicio de tratamiento, gestación, coinfección o carga viral detectable. Estándar: sin carga viral reciente.",
   "pasos": [
    "Cohorte de la Cuenta de Alto Costo.",
    "Dispensaciones de J05 en 12 meses.",
    "Cargas virales registradas.",
    "Clasificar.",
    "Enviar a EPS y programa de VIH."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de VIH",
     "Aporta la cohorte y las variables de carga viral",
     "Resolución 4725 de 2011"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Busca activamente, reinicia tratamiento y toma carga viral",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Programa de atención integral en VIH",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Instituto Nacional de Salud",
     "Dirección de Vigilancia y Análisis del Riesgo en Salud Pública",
     "Cruza con la notificación del evento 850",
     "Decreto 4109 de 2011"
    ],
    [
     "Secretaría departamental o distrital de salud",
     "Dependencia de aseguramiento y salud pública de la secretaría",
     "Hace seguimiento a las EPS de su territorio como autoridad sanitaria y lo cruza con su ASIS",
     "Ley 715 de 2001, art. 43"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Dispensación reanudada y carga viral registrada.",
   "indicador": "Proporción de la cohorte con carga viral suprimida en el último registro.",
   "mundo": "ONUSIDA fija la meta de 95% diagnosticados, 95% en tratamiento y 95% con supresión viral. Botsuana la superó en su encuesta nacional de 2021 [[botsuana]].",
   "ev": [
    [
     "cohen",
     "El tratamiento antirretroviral temprano redujo de forma drástica la transmisión del VIH a la pareja."
    ],
    [
     "brennan",
     "Las intervenciones de servicio mejoran la vinculación y la retención en atención de VIH."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "tb",
   "g": "vital",
   "t": "Tuberculosis sin tratamiento completo",
   "valor": "Completar el tratamiento de tuberculosis cura a la persona y corta la transmisión en su casa y su barrio.",
   "cifra": [
    "1.353",
    "muertes por tuberculosis en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima 1.353 muertes por tuberculosis en Colombia en 2023 [[ihme]]. Cada caso es de notificación obligatoria al SIVIGILA, de modo que la cohorte ya es nominal.",
   "clinica": "El abandono del tratamiento produce recaídas, resistencia y transmisión. Las intervenciones de adherencia, como el acompañamiento, los incentivos y el apoyo digital, mejoran la curación y reducen el abandono [[alipanah]].",
   "factores": [
    "Dos semanas o más sin dosis registrada",
    "Coinfección con VIH",
    "Tuberculosis resistente",
    "Población privada de la libertad, habitante de calle o indígena",
    "Diabetes"
   ],
   "cie": "A15 a A19 tuberculosis.",
   "cups": "901101 baciloscopia Ziehl Neelsen; 901230 cultivo de Mycobacterium tuberculosis; 908873 identificación molecular de Mycobacterium tuberculosis.",
   "atc": "J04AM06 combinación de rifampicina, isoniazida, pirazinamida y etambutol; J04AB02 rifampicina; J04AC01 isoniazida.",
   "fuentes": "SIVIGILA evento 813, RIPS, registros del programa de tuberculosis.",
   "criterio": "Caso notificado en tratamiento sin dosis o control registrado en 14 días, o sin baciloscopia de control en los plazos del programa.",
   "prioridad": "Alta: coinfección, resistencia o población vulnerable. Estándar: el resto.",
   "pasos": [
    "Casos del evento 813 en tratamiento.",
    "Cruce con RIPS y dispensación.",
    "Marcar interrupción.",
    "Enviar a EPS, secretaría municipal y departamental.",
    "Cierre con dosis y baciloscopia de control."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Instituto Nacional de Salud",
     "Dirección de Vigilancia y Análisis del Riesgo en Salud Pública",
     "Entrega la cohorte notificada",
     "Decreto 4109 de 2011"
    ],
    [
     "Secretaría municipal y departamental",
     "Programa de tuberculosis",
     "Visita, acompañamiento y estudio de contactos",
     "Ley 715 de 2001, arts. 43 y 44"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Garantiza dispensación y controles",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Tratamiento terminado con baciloscopia negativa registrada.",
   "indicador": "Proporción de casos con éxito de tratamiento, por departamento.",
   "mundo": "La estrategia Fin de la Tuberculosis de la OMS pide atención y apoyo centrados en el paciente para cada caso hasta completar el tratamiento [[endtb]].",
   "ev": [
    [
     "alipanah",
     "Las intervenciones de adherencia mejoran el éxito del tratamiento y reducen el abandono."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "hem",
   "g": "vital",
   "t": "Hemofilia sin profilaxis o sin seguimiento",
   "valor": "La profilaxis con factor evita el daño articular que deja a jóvenes con discapacidad. La Cuenta de Alto Costo ya muestra quién la perdió.",
   "cifra": [
    "9,85%",
    "de abandono del tratamiento en personas con hemofilia y otras coagulopatías en 2024, frente a 4,81% en 2023",
    "cachemo"
   ],
   "problema": "La Cuenta de Alto Costo validó 7.513 registros de hemofilia y otras coagulopatías en el periodo de febrero de 2023 a enero de 2024. El abandono del tratamiento subió de 4,81% a 9,85%, la pérdida de seguimiento se duplicó y en el régimen subsidiado se triplicó, y 17,22% de los pacientes tuvo hemartrosis [[cachemo]].",
   "clinica": "En niños con hemofilia grave, la profilaxis previene el daño articular frente al tratamiento a demanda [[manco]]. Cada sangrado articular deja daño acumulado; por eso el abandono es una pérdida que no se recupera.",
   "factores": [
    "Abandono o pérdida de seguimiento",
    "Hemartrosis en el periodo",
    "Presencia de inhibidor",
    "Sin evaluación por equipo multidisciplinario",
    "Régimen subsidiado"
   ],
   "cie": "D66 deficiencia hereditaria del factor VIII; D67 deficiencia hereditaria del factor IX; D68.0 enfermedad de von Willebrand.",
   "cups": "890251 consulta de primera vez por hematología; 902018 factor VIII de la coagulación; 902059 inhibidor de factor VIII.",
   "atc": "B02BD02 factor VIII; B02BD04 factor IX; B02BX06 emicizumab.",
   "fuentes": "Cuenta de Alto Costo, Resolución 123 de 2015 [[r123]].",
   "criterio": "Persona de la cohorte con abandono, pérdida de seguimiento, o con hemartrosis sin profilaxis registrada.",
   "prioridad": "Alta: menores de 18 años, inhibidor o hemartrosis. Estándar: el resto.",
   "pasos": [
    "Cohorte de la Cuenta de Alto Costo.",
    "Variables de profilaxis, sangrados y seguimiento.",
    "Marcar abandono y pérdida.",
    "Enviar a EPS y centro de atención integral.",
    "Cierre con dispensación de factor y valoración multidisciplinaria."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de hemofilia",
     "Aporta cohorte y marcas de abandono",
     "Resolución 123 de 2015"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Reactiva la profilaxis y la atención domiciliaria",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Centro de atención integral con hematología, ortopedia y química farmacéutica",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Profilaxis registrada y valoración multidisciplinaria en el periodo.",
   "indicador": "Tasa de abandono y de pérdida de seguimiento, por EPS y régimen.",
   "mundo": "Las guías de la Federación Mundial de Hemofilia recomiendan la profilaxis como estándar en hemofilia grave y registros nacionales de pacientes [[wfh]].",
   "ev": [
    [
     "manco",
     "La profilaxis previene el daño articular en niños con hemofilia grave frente al tratamiento a demanda."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "renal0",
   "g": "cardio",
   "t": "Hipertensión o diabetes sin estudio renal",
   "valor": "Más de 4 millones de registros sin estudio renal completo. Detectar la enfermedad renal a tiempo frena la llegada a diálisis.",
   "cifra": [
    "54.594",
    "personas en terapia de reemplazo renal en 2025",
    "cacerc"
   ],
   "problema": "La Cuenta de Alto Costo reporta más de 7 millones de personas con hipertensión, diabetes o enfermedad renal crónica [[caccv]] y, en su informe renal 2025, más de 4 millones de registros sin el estudio completo de función renal [[cacerc]]. El IHME estima 6,2 millones de personas con enfermedad renal crónica en Colombia en 2023 [[ihme]]: la mayoría no lo sabe.",
   "clinica": "La creatinina y la albuminuria permiten clasificar la enfermedad renal; con ese dato se inician tratamientos que frenan la progresión, como los inhibidores de SGLT2, cuyo efecto protector se observa con y sin diabetes [[sglt2]]. El tamizaje en personas con diabetes e hipertensión es costo efectivo [[yeo]].",
   "factores": [
    "Diabetes",
    "Hipertensión",
    "Edad mayor de 60 años",
    "Obesidad",
    "Antecedente familiar de enfermedad renal",
    "Uso crónico de antiinflamatorios no esteroideos"
   ],
   "cie": "I10 a I15 hipertensión; E10 a E14 diabetes.",
   "cups": "903895 creatinina en suero; 903026 microalbuminuria automatizada en orina parcial; 903027 microalbuminuria en orina de 24 horas.",
   "atc": "C09AA inhibidores de enzima convertidora; C09CA antagonistas de angiotensina II; A10BK inhibidores de SGLT2.",
   "fuentes": "Cuenta de Alto Costo, RIPS.",
   "criterio": "Persona de la cohorte de hipertensión o diabetes sin creatinina o sin albuminuria registrada en 12 meses.",
   "prioridad": "Alta: diabetes con más de 10 años de evolución o hipertensión con daño de órgano. Estándar: el resto.",
   "pasos": [
    "Cohorte de hipertensión y diabetes.",
    "Exámenes registrados en 12 meses.",
    "Marcar estudio incompleto.",
    "Enviar a EPS e IPS primaria.",
    "Cierre con ambos exámenes y estadio asignado en el siguiente corte."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de enfermedad renal y riesgo cardiovascular",
     "Aporta la cohorte y su marca de estudio incompleto",
     "Decreto 780 de 2016"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Ordena ambos exámenes en el siguiente control",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Clasifica el estadio y ajusta tratamiento",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Ministerio de Salud",
     "Dirección de Determinantes Sociales, Promoción y Prevención",
     "Lleva el indicador a la ruta de riesgo cardiovascular",
     "Decreto 120 de 2026, art. 5; Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Creatinina y albuminuria registradas y estadio asignado.",
   "indicador": "Proporción de la cohorte con estudio renal completo en 12 meses, por EPS.",
   "mundo": "La guía internacional KDIGO recomienda medir la filtración y la albuminuria en personas con diabetes o hipertensión [[kdigo]].",
   "ev": [
    [
     "yeo",
     "El tamizaje de enfermedad renal es costo efectivo en personas con diabetes y en muchos escenarios con hipertensión."
    ],
    [
     "sglt2",
     "Los inhibidores de SGLT2 reducen la progresión de la enfermedad renal con y sin diabetes."
    ]
   ],
   "dano": "años",
   "dato": "lista",
   "vuelta": 1
  },
  {
   "id": "hta",
   "g": "cardio",
   "t": "Hipertensión no controlada",
   "valor": "Solo 23% de los hipertensos diagnosticados está controlado. Controlar la presión es la intervención con más vidas detrás en el país.",
   "cifra": [
    "1.532,5",
    "AVAD por 100.000 habitantes atribuibles a presión arterial sistólica elevada en Colombia en 2023, tasa estandarizada",
    "ihme"
   ],
   "problema": "La presión arterial elevada es uno de los dos primeros factores de riesgo de pérdida de salud en Colombia según el IHME [[ihme]]. La cardiopatía isquémica, primera causa de muerte, y la enfermedad cerebrovascular comparten ese factor. El boletín cardiovascular de la Cuenta de Alto Costo reporta que solo cerca de 23% de los hipertensos diagnosticados está controlado [[caccv]].",
   "clinica": "Bajar la presión reduce infartos, accidentes cerebrovasculares, insuficiencia cardiaca y enfermedad renal. La baja adherencia a medicamentos cardiovasculares es frecuente y se asocia con una fracción relevante de los eventos [[chowdhury]].",
   "factores": [
    "Dos controles consecutivos con 140 sobre 90 o más",
    "Diabetes o enfermedad renal concomitante",
    "Más de un antihipertensivo sin control",
    "Falta de dispensación en 60 días",
    "Ruralidad y bajo acceso a control"
   ],
   "cie": "I10 a I15.",
   "cups": "890301 consulta de control por medicina general; 890305 consulta de control por enfermería; 903859 potasio en suero; 903895 creatinina.",
   "atc": "C09AA, C09CA, C08CA bloqueadores de calcio, C03 diuréticos, C07AB betabloqueadores selectivos.",
   "fuentes": "Cuenta de Alto Costo, historia clínica interoperable, RIPS.",
   "criterio": "Última presión registrada de 140 sobre 90 o más en dos controles consecutivos.",
   "prioridad": "Alta: 160 sobre 100 o más, diabetes o enfermedad renal. Estándar: el resto.",
   "pasos": [
    "Cohorte de hipertensión.",
    "Últimas dos presiones registradas.",
    "Marcar no control.",
    "Cruzar con dispensación para separar no adherencia de tratamiento insuficiente.",
    "Enviar a EPS e IPS primaria."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Programa control con equipo y revisión de adherencia",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Ajusta tratamiento con protocolo simple de intensificación",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Gestor farmacéutico",
     "Servicio farmacéutico",
     "Revisa entregas y alerta de no retiro",
     "Resolución 1604 de 2013; Resolución 1799 de 2026"
    ],
    [
     "Ministerio de Salud",
     "Dirección de Determinantes Sociales, Promoción y Prevención",
     "Define el protocolo nacional de intensificación",
     "Decreto 120 de 2026, art. 5"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Presión en meta en el siguiente control registrado.",
   "indicador": "Proporción de hipertensos controlados, por EPS e IPS.",
   "mundo": "Kaiser Permanente del Norte de California pasó de 43,6% a 80,4% de control con un registro nominal, métricas compartidas y protocolo simple [[jaffe]]. La iniciativa HEARTS de la OMS trata a 12,2 millones de pacientes en países de ingreso bajo y medio y, donde usa un sistema de información común, subió el control en los centros de 18% a 46% [[hearts]].",
   "ev": [
    [
     "jaffe",
     "Un registro nominal con metas compartidas subió el control de 43,6% a 80,4%."
    ],
    [
     "carter",
     "La atención en equipo mejora el control de la presión."
    ],
    [
     "santschi",
     "Las intervenciones de farmacéuticos mejoran la presión arterial."
    ],
    [
     "hearts",
     "Programas HEARTS con un sistema de información común subieron el control en los centros de 18% a 46%."
    ]
   ],
   "dano": "años",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "dm",
   "g": "cardio",
   "t": "Diabetes con hemoglobina glicosilada alta",
   "valor": "La diabetes es la causa crónica que menos ha mejorado en tres décadas. La lista concentra el esfuerzo donde está el descontrol.",
   "cifra": [
    "3.401.637",
    "personas con diabetes en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima 3,4 millones de personas con diabetes en Colombia en 2023 y la glucosa plasmática elevada está entre los primeros factores de riesgo de carga [[ihme]]. La diabetes alimenta la enfermedad renal, la amputación y el infarto.",
   "clinica": "Las estrategias de mejoramiento de calidad, como la gestión de casos, la intensificación por protocolo y la retroalimentación al equipo, reducen la hemoglobina glicosilada [[konnyu]].",
   "factores": [
    "Dos hemoglobinas glicosiladas consecutivas de 7% o más",
    "Sin hemoglobina glicosilada en 12 meses",
    "Enfermedad renal",
    "Pie diabético previo",
    "Insulina sin control"
   ],
   "cie": "E10 a E14.",
   "cups": "903426 hemoglobina glicosilada automatizada; 903841 glucosa en suero; 903817 colesterol LDL.",
   "atc": "A10BA02 metformina; A10BK inhibidores de SGLT2; A10BJ agonistas de GLP1; A10A insulinas.",
   "fuentes": "Cuenta de Alto Costo, RIPS, historia clínica interoperable.",
   "criterio": "Hemoglobina glicosilada de 7% o más en dos controles, o ausencia de medición en 12 meses.",
   "prioridad": "Alta: 9% o más, enfermedad renal o pie diabético. Estándar: el resto.",
   "pasos": [
    "Cohorte de diabetes.",
    "Hemoglobinas glicosiladas registradas.",
    "Clasificar.",
    "Cruzar con dispensación.",
    "Enviar a EPS e IPS."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Gestión de caso y educación",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Intensificación por guía",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Gestor farmacéutico",
     "Servicio farmacéutico",
     "Seguimiento de retiro de insulina y antidiabéticos",
     "Resolución 1604 de 2013; Resolución 1799 de 2026"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Hemoglobina glicosilada menor de 7% o reducción de al menos un punto en el siguiente control.",
   "indicador": "Proporción de diabéticos con hemoglobina glicosilada en meta.",
   "mundo": "Los Países Bajos pagan a grupos de atención primaria un monto único por el cuidado integral de la diabetes, con registro de pacientes, y la coordinación mejoró [[debakker]]. Alemania inscribe a pacientes con diabetes en programas estructurados con documentación estandarizada [[kbv]].",
   "ev": [
    [
     "konnyu",
     "Las estrategias de mejoramiento de calidad reducen la hemoglobina glicosilada y mejoran otros resultados."
    ]
   ],
   "dano": "años",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "erc",
   "g": "cardio",
   "t": "Enfermedad renal sin estadio o avanzada sin nefrología",
   "valor": "526.918 casos sin estadio. Estadificar permite programar la diálisis en lugar de iniciarla de urgencia por catéter.",
   "cifra": [
    "526.918",
    "casos de enfermedad renal sin estadio asignado en 2025",
    "cacerc"
   ],
   "problema": "La Cuenta de Alto Costo encontró 526.918 casos de enfermedad renal sin estadio asignado en su informe de 2025 [[cacerc]]. Sin estadio no hay plan: ni nefroprotección ni preparación para terapia de reemplazo.",
   "clinica": "Iniciar diálisis de urgencia se asocia con peores resultados. Entre los factores de riesgo de inicio no planeado están menos consultas de nefrología previas y una codificación deficiente de la enfermedad renal en el registro de atención primaria [[magadi]].",
   "factores": [
    "Estadio 4 o 5 sin nefrología en 6 meses",
    "Caída rápida de la filtración",
    "Diabetes",
    "Albuminuria alta",
    "Sin acceso vascular planeado"
   ],
   "cie": "N18.1 a N18.5; N18.9 sin especificar.",
   "cups": "890268 consulta de primera vez por nefrología; 890368 control por nefrología; 903895 creatinina.",
   "atc": "A10BK inhibidores de SGLT2; C09AA y C09CA bloqueo del sistema renina angiotensina.",
   "fuentes": "Cuenta de Alto Costo, RIPS.",
   "criterio": "Diagnóstico N18 sin estadio; o N18.4 y N18.5 sin consulta de nefrología en 6 meses.",
   "prioridad": "Alta: estadio 4 o 5. Estándar: sin estadio.",
   "pasos": [
    "Cohorte renal.",
    "Estadio registrado.",
    "Consultas de nefrología.",
    "Clasificar.",
    "Enviar."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de enfermedad renal",
     "Marca casos sin estadio y sin nefrología",
     "Decreto 780 de 2016"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Remite a nefrología y programa preparación para terapia de reemplazo",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Estadifica y planea acceso vascular o diálisis peritoneal",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Estadio registrado y consulta de nefrología realizada.",
   "indicador": "Proporción de inicios de diálisis programados frente a inicios de urgencia.",
   "mundo": "La guía KDIGO recomienda remitir a nefrología y planear la terapia de reemplazo cuando la filtración cae por debajo de 30 o la progresión es rápida [[kdigo]].",
   "ev": [
    [
     "magadi",
     "Menos consultas previas de nefrología y mala codificación de la enfermedad renal predicen inicio de diálisis no planeado."
    ]
   ],
   "dano": "meses",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "iam",
   "g": "cardio",
   "t": "Después de un infarto sin estatina o sin rehabilitación",
   "valor": "La primera causa de muerte del país. Quien ya tuvo un infarto es quien más se beneficia de la prevención secundaria.",
   "cifra": [
    "46.398",
    "muertes por cardiopatía isquémica en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "La cardiopatía isquémica es la primera causa de muerte en Colombia, con 46.398 muertes estimadas en 2023 [[ihme]]. Después de un infarto, la estatina, el antiagregante, el betabloqueador y la rehabilitación cardiaca son de beneficio probado y bajo costo.",
   "clinica": "La rehabilitación cardiaca basada en ejercicio reduce nuevos infartos y hospitalizaciones [[dibben]]. La baja adherencia a medicamentos cardiovasculares explica una parte de los eventos recurrentes [[chowdhury]].",
   "factores": [
    "Sin estatina dispensada a los 90 días del egreso",
    "Sin antiagregante",
    "Sin rehabilitación cardiaca",
    "Diabetes",
    "Tabaquismo"
   ],
   "cie": "I21 infarto agudo; I22 infarto subsecuente; I25.2 infarto antiguo.",
   "cups": "890228 consulta de primera vez por cardiología; 933601 terapia de rehabilitación cardiovascular; 903817 colesterol LDL; 881202 ecocardiograma transtorácico.",
   "atc": "C10AA estatinas; B01AC06 ácido acetilsalicílico; B01AC04 clopidogrel; C07AB betabloqueadores selectivos.",
   "fuentes": "RIPS de egresos, RIPS de medicamentos y procedimientos.",
   "criterio": "Egreso con I21 o I22 sin dispensación de C10AA a los 90 días, o sin sesiones de rehabilitación cardiaca.",
   "prioridad": "Alta: sin estatina ni antiagregante. Estándar: sin rehabilitación.",
   "pasos": [
    "Egresos por infarto en 12 meses.",
    "Dispensaciones posteriores.",
    "Procedimientos de rehabilitación.",
    "Clasificar.",
    "Enviar a EPS."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Asegura medicamentos y remisión a rehabilitación",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Cardiología y medicina general ajustan prevención secundaria",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Estatina dispensada y rehabilitación iniciada.",
   "indicador": "Proporción de pacientes con estatina a los 90 días del infarto, por EPS e IPS de egreso.",
   "mundo": "Las medidas de desempeño del Colegio Americano de Cardiología y la Asociación Americana del Corazón incluyen la estatina de alta intensidad al egreso y la remisión a rehabilitación cardiaca [[jneid]].",
   "ev": [
    [
     "dibben",
     "La rehabilitación cardiaca reduce nuevos infartos y hospitalizaciones y probablemente la mortalidad."
    ],
    [
     "chowdhury",
     "La baja adherencia a terapia cardiovascular se asocia con una fracción relevante de eventos."
    ]
   ],
   "dano": "meses",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "ic",
   "g": "cardio",
   "t": "Insuficiencia cardiaca después del egreso",
   "valor": "El egreso por insuficiencia cardiaca es el momento de mayor riesgo de reingreso y muerte. Un control temprano lo reduce.",
   "cifra": [
    "378.220",
    "personas con insuficiencia cardiaca en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima 378.220 personas con insuficiencia cardiaca en Colombia en 2023, con la cardiopatía isquémica, la cardiopatía hipertensiva y la enfermedad de Chagas entre sus principales causas [[ihme]]. La insuficiencia cardiaca es una de las condiciones del listado de hospitalizaciones evitables de la ADRES [[adres]].",
   "clinica": "Las visitas domiciliarias y las clínicas multidisciplinarias después del egreso reducen el reingreso y la mortalidad [[feltner]].",
   "factores": [
    "Sin control en 14 días después del egreso",
    "Dos o más hospitalizaciones en 12 meses",
    "Sin betabloqueador ni bloqueo neurohormonal",
    "Enfermedad renal",
    "Edad mayor de 75 años"
   ],
   "cie": "I50 insuficiencia cardiaca; I11.0 cardiopatía hipertensiva con insuficiencia cardiaca; I13.0.",
   "cups": "890228 consulta de cardiología; 881202 ecocardiograma transtorácico; 890101 visita domiciliaria por medicina general.",
   "atc": "C07AB betabloqueadores; C09DX04 sacubitrilo y valsartán; C03DA01 espironolactona; A10BK inhibidores de SGLT2.",
   "fuentes": "RIPS de egresos y consultas.",
   "criterio": "Egreso con I50 sin consulta registrada en 14 días.",
   "prioridad": "Alta: dos o más egresos en 12 meses. Estándar: el resto.",
   "pasos": [
    "Egresos por insuficiencia cardiaca.",
    "Consultas posteriores.",
    "Marcar sin control.",
    "Enviar a EPS e IPS.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Agenda control temprano y visita domiciliaria cuando aplica",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Clínica de falla cardiaca o medicina interna",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Control registrado y ningún reingreso en 30 días.",
   "indicador": "Reingreso a 30 días por insuficiencia cardiaca, por EPS.",
   "mundo": "Medicare en Estados Unidos penaliza a los hospitales con exceso de reingresos por insuficiencia cardiaca; un estudio asoció el programa con menos reingresos y más mortalidad [[gupta]]. Por eso esta lista usa el indicador sin sanción financiera.",
   "ev": [
    [
     "feltner",
     "Las visitas domiciliarias y las clínicas multidisciplinarias reducen el reingreso y la mortalidad por insuficiencia cardiaca."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "epoc",
   "g": "cardio",
   "t": "EPOC con exacerbación hospitalizada sin seguimiento",
   "valor": "La EPOC es la segunda causa de muerte del país. La exacerbación que termina en hospital anuncia la siguiente.",
   "cifra": [
    "17.472",
    "muertes por EPOC en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "La enfermedad pulmonar obstructiva crónica es la segunda causa de muerte en Colombia según el IHME, con 17.472 muertes estimadas en 2023 [[ihme]], y es una condición sensible a la atención primaria en el listado de la ADRES [[adres]].",
   "clinica": "La rehabilitación pulmonar después de una exacerbación mejora la calidad de vida, con efecto variable sobre el reingreso [[puhan]]. Los planes de autocuidado con plan de acción reducen las hospitalizaciones respiratorias [[lenferink]].",
   "factores": [
    "Egreso por exacerbación sin control en 14 días",
    "Sin espirometría registrada",
    "Sin broncodilatador de larga acción",
    "Tabaquismo activo",
    "Exposición a humo de leña"
   ],
   "cie": "J44 enfermedad pulmonar obstructiva crónica; J44.1 con exacerbación aguda.",
   "cups": "893805 espirometría pre y post broncodilatador; 890271 consulta de primera vez por neumología.",
   "atc": "R03AL combinaciones de broncodilatadores; R03BB04 tiotropio; R03AK broncodilatador con corticoide.",
   "fuentes": "RIPS.",
   "criterio": "Egreso con J44 sin consulta registrada en 14 días.",
   "prioridad": "Alta: dos o más egresos en 12 meses. Estándar: el resto.",
   "pasos": [
    "Egresos por EPOC.",
    "Consultas y espirometrías.",
    "Marcar.",
    "Enviar.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Control, educación y rehabilitación pulmonar",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Plan de acción escrito",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Secretaría departamental o distrital de salud",
     "Dependencia de aseguramiento y salud pública de la secretaría",
     "Hace seguimiento a las EPS de su territorio como autoridad sanitaria y lo cruza con su ASIS",
     "Ley 715 de 2001, art. 43"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Control registrado y ningún reingreso en 90 días.",
   "indicador": "Reingreso a 90 días por EPOC.",
   "mundo": "Alemania inscribe a personas con EPOC en programas estructurados de manejo de enfermedad con documentación y retroalimentación al médico [[kbv]].",
   "ev": [
    [
     "puhan",
     "La rehabilitación pulmonar después de una exacerbación mejora la calidad de vida; el efecto sobre el reingreso es variable."
    ],
    [
     "lenferink",
     "El autocuidado con plan de acción reduce las hospitalizaciones respiratorias."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "mama",
   "g": "cancer",
   "t": "Sospecha de cáncer de mama sin confirmación oportuna",
   "valor": "Solo 49,15% de los casos nuevos se detecta en estadio localizado. Acortar el paso de la sospecha a la biopsia salva vidas.",
   "cifra": [
    "49,15%",
    "de los casos nuevos de cáncer de mama detectados en estadio localizado, frente a una meta de 60%",
    "cacmama"
   ],
   "problema": "La Cuenta de Alto Costo reporta 140.923 mujeres diagnosticadas con cáncer de mama a agosto de 2026, 13.262 casos invasivos nuevos y solo 49,15% en estadio localizado. El tiempo entre la sospecha y la confirmación supera la meta de 30 días en cerca de 8 días y en el régimen subsidiado es unos 15 días más largo [[cacmama]]. El IHME estima 4.261 muertes por cáncer de mama en 2023 [[ihme]].",
   "clinica": "Retrasos de tres a seis meses entre los síntomas y el tratamiento se asocian con menor supervivencia, sobre todo porque el cáncer avanza de estadio [[richards]].",
   "factores": [
    "Mamografía BIRADS 4 o 5 sin biopsia en 30 días",
    "Masa palpable sin estudio",
    "Régimen subsidiado",
    "Residencia en departamentos con mayor tiempo de confirmación"
   ],
   "cie": "N63 masa no especificada en la mama; R92 hallazgos anormales en imagen de mama; C50 tumor maligno de mama; D05 carcinoma in situ.",
   "cups": "876802 mamografía bilateral; 851102 biopsia de mama con aguja trucut; 851103 biopsia por estereotaxia; 890278 consulta de oncología.",
   "atc": "No aplica en la fase diagnóstica.",
   "fuentes": "RIPS, Cuenta de Alto Costo.",
   "criterio": "Mamografía o diagnóstico de sospecha sin biopsia registrada en 30 días.",
   "prioridad": "Alta: hallazgo BIRADS 4 o 5 o masa palpable. Estándar: el resto.",
   "pasos": [
    "Mamografías y diagnósticos de sospecha.",
    "Biopsias posteriores.",
    "Marcar demora.",
    "Enviar a EPS y red oncológica.",
    "Cierre con resultado de patología."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de cáncer",
     "Aporta la medición de oportunidad por EPS y departamento",
     "Resolución 247 de 2014"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Navegación de la paciente hasta la biopsia",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Unidad funcional de cáncer",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Ministerio de Salud",
     "Dirección de Determinantes Sociales, Promoción y Prevención, equipo de cáncer",
     "Fija la meta de oportunidad y la incorpora al plan de cáncer",
     "Decreto 120 de 2026, art. 5"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Resultado de patología registrado.",
   "indicador": "Mediana de días entre sospecha y confirmación, por EPS y departamento.",
   "mundo": "Inglaterra exige diagnóstico o descarte en 28 días desde la sospecha [[nhscwt]] y Dinamarca opera rutas rápidas de cáncer [[probst]]. La navegación de pacientes aumenta el tamizaje de cáncer de mama [[nelson]].",
   "ev": [
    [
     "richards",
     "Retrasos de tres a seis meses se asocian con menor supervivencia en cáncer de mama."
    ],
    [
     "nelson",
     "La navegación de pacientes aumenta el tamizaje de cáncer de mama y colorrectal."
    ]
   ],
   "dano": "meses",
   "dato": "parcial",
   "vuelta": 2
  },
  {
   "id": "cervix",
   "g": "cancer",
   "t": "Tamizaje de cuello uterino anormal sin colposcopia",
   "valor": "El cáncer de cuello uterino es casi totalmente prevenible. Ninguna mujer con un tamizaje anormal debería quedarse sin colposcopia.",
   "cifra": [
    "2.379",
    "muertes por cáncer de cuello uterino en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima 2.379 muertes por cáncer de cuello uterino en Colombia en 2023 [[ihme]]. Una parte ocurre en mujeres que sí se tamizaron pero no completaron el seguimiento.",
   "clinica": "Las intervenciones multicomponente y la navegación aumentan el seguimiento de resultados anormales del tamizaje [[varon]].",
   "factores": [
    "Prueba de VPH positiva o citología anormal sin colposcopia en 60 días",
    "Ruralidad dispersa",
    "Régimen subsidiado",
    "Sin tamizaje previo"
   ],
   "cie": "R87.6 hallazgo citológico anormal; N87 displasia del cuello uterino; D06 carcinoma in situ; C53 tumor maligno.",
   "cups": "908890 detección del virus del papiloma humano por pruebas moleculares; 898001 citología vaginal; 702203 colposcopia.",
   "atc": "No aplica.",
   "fuentes": "RIPS, registros de tamizaje.",
   "criterio": "Resultado anormal sin colposcopia registrada en 60 días.",
   "prioridad": "Alta: lesión de alto grado. Estándar: el resto.",
   "pasos": [
    "Resultados anormales.",
    "Colposcopias posteriores.",
    "Marcar demora.",
    "Enviar.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Navegación hasta la colposcopia",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Unidad de patología cervical",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Secretaría departamental o distrital de salud",
     "Dependencia de aseguramiento y salud pública de la secretaría",
     "Hace seguimiento a las EPS de su territorio como autoridad sanitaria y lo cruza con su ASIS",
     "Ley 715 de 2001, art. 43"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Colposcopia registrada y conducta definida.",
   "indicador": "Proporción de tamizajes anormales con colposcopia en 60 días.",
   "mundo": "La estrategia de eliminación del cáncer de cuello uterino de la OMS fija como meta que 90% de las mujeres con lesión reciba tratamiento [[whocervix]].",
   "ev": [
    [
     "varon",
     "Las intervenciones multicomponente y la navegación mejoran el seguimiento de resultados anormales."
    ]
   ],
   "dano": "meses",
   "dato": "parcial",
   "vuelta": 2
  },
  {
   "id": "crc",
   "g": "cancer",
   "t": "Sangre oculta positiva sin colonoscopia",
   "valor": "Un tamizaje positivo sin colonoscopia es un tamizaje perdido. El cáncer colorrectal mata más que el de mama en Colombia.",
   "cifra": [
    "5.716",
    "muertes por cáncer de colon y recto en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima 5.716 muertes por cáncer de colon y recto en Colombia en 2023, más que por cáncer de mama [[ihme]]. El tamizaje con sangre oculta solo funciona si el positivo llega a colonoscopia.",
   "clinica": "La navegación de pacientes aumenta el tamizaje colorrectal, incluida la colonoscopia [[nelson]].",
   "factores": [
    "Sangre oculta positiva sin colonoscopia en 60 días",
    "Edad mayor de 50 años",
    "Anemia ferropénica sin estudio",
    "Antecedente familiar"
   ],
   "cie": "R19.5 otras anormalidades de las heces; C18 a C21 tumores malignos de colon, recto y ano.",
   "cups": "907009 sangre oculta en materia fecal por hemoglobina humana específica; 452301 colonoscopia total; 452305 colonoscopia con o sin biopsia; 890246 consulta de gastroenterología.",
   "atc": "No aplica.",
   "fuentes": "RIPS.",
   "criterio": "Sangre oculta positiva sin colonoscopia registrada en 60 días.",
   "prioridad": "Alta: anemia o edad mayor de 60 años. Estándar: el resto.",
   "pasos": [
    "Pruebas de sangre oculta.",
    "Colonoscopias posteriores.",
    "Marcar.",
    "Enviar.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Navegación hasta la colonoscopia",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Gastroenterología",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Colonoscopia registrada.",
   "indicador": "Proporción de positivos con colonoscopia en 60 días.",
   "mundo": "Los Países Bajos hacen tamizaje poblacional con prueba inmunoquímica fecal y evalúan cada ronda, incluidos los cánceres que aparecen entre rondas [[toes]].",
   "ev": [
    [
     "nelson",
     "La navegación de pacientes aumenta el tamizaje colorrectal, incluida la colonoscopia."
    ]
   ],
   "dano": "meses",
   "dato": "parcial",
   "vuelta": 2
  },
  {
   "id": "onco",
   "g": "cancer",
   "t": "Cáncer confirmado sin inicio de tratamiento",
   "valor": "Cada cuatro semanas de espera entre el diagnóstico y el tratamiento aumentan la mortalidad. La Cuenta de Alto Costo ya mide esa espera.",
   "cifra": [
    "4.102",
    "muertes por cáncer de próstata en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima en 2023 4.102 muertes por cáncer de próstata, 4.261 por mama, 5.716 por colon y recto y 2.379 por cuello uterino en Colombia [[ihme]]. La Cuenta de Alto Costo recibe el reporte de cáncer con fecha de diagnóstico y de inicio de tratamiento.",
   "clinica": "Un retraso de cuatro semanas en cirugía, radioterapia o tratamiento sistémico se asocia con mayor mortalidad en siete tipos de cáncer [[hanna]].",
   "factores": [
    "Más de 30 días entre el diagnóstico y el primer tratamiento",
    "Cambio de EPS o de prestador",
    "Necesidad de radioterapia",
    "Régimen subsidiado"
   ],
   "cie": "C00 a C97.",
   "cups": "890278 consulta de primera vez por oncología; 906610 antígeno específico de próstata.",
   "atc": "L01 antineoplásicos; L02 terapia endocrina.",
   "fuentes": "Cuenta de Alto Costo, RIPS, plan de choque.",
   "criterio": "Diagnóstico confirmado sin tratamiento registrado en 30 días.",
   "prioridad": "Alta: tumores de crecimiento rápido o en menores de 18 años. Estándar: el resto.",
   "pasos": [
    "Cohorte de cáncer.",
    "Fechas de diagnóstico y tratamiento.",
    "Marcar espera.",
    "Enviar a EPS y unidad funcional.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de cáncer",
     "Mide la oportunidad por EPS",
     "Resolución 247 de 2014"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Autoriza y coordina el inicio",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Unidad funcional de cáncer",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Primer tratamiento registrado.",
   "indicador": "Mediana de días entre diagnóstico y tratamiento.",
   "mundo": "Inglaterra fija un máximo de 62 días entre la remisión urgente y el primer tratamiento [[nhscwt]] y publica cada mes el cumplimiento por proveedor [[nhswait]].",
   "ev": [
    [
     "hanna",
     "Cada cuatro semanas de retraso en el tratamiento se asocia con mayor mortalidad."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "ar",
   "g": "cac",
   "t": "Artritis reumatoide sin tratamiento modificador o sin control",
   "valor": "Tratar temprano y a meta evita la discapacidad. La Cuenta de Alto Costo ya sabe quién no está en remisión.",
   "cifra": [
    "119.089",
    "casos prevalentes de artritis reumatoide reportados a la Cuenta de Alto Costo, periodo julio de 2022 a junio de 2023",
    "cacar"
   ],
   "problema": "La Cuenta de Alto Costo reportó 119.089 casos de artritis reumatoide; 67,22% recibió tratamiento modificador al diagnóstico y 42,75% de los tratados alcanzó remisión [[cacar]]. El IHME estima 140.931 personas con artritis reumatoide en 2023 [[ihme]]. El reporte es obligatorio por la Resolución 1393 de 2015 [[r1393]].",
   "clinica": "La guía del Colegio Americano de Reumatología recomienda iniciar metotrexato temprano y ajustar el tratamiento hasta alcanzar baja actividad o remisión [[fraenkel]].",
   "factores": [
    "Sin fármaco modificador al diagnóstico",
    "Actividad moderada o alta en la última medición",
    "Sin medición de actividad en 12 meses",
    "Sin consulta de reumatología"
   ],
   "cie": "M05 artritis reumatoide seropositiva; M06 otras artritis reumatoides.",
   "cups": "890288 consulta de reumatología; 906913 proteína C reactiva.",
   "atc": "L04AX03 metotrexato; A07EC01 sulfasalazina; P01BA02 hidroxicloroquina; L04AB inhibidores del factor de necrosis tumoral.",
   "fuentes": "Cuenta de Alto Costo.",
   "criterio": "Caso sin fármaco modificador registrado, o con actividad moderada o alta sin cambio de tratamiento.",
   "prioridad": "Alta: actividad alta. Estándar: el resto.",
   "pasos": [
    "Cohorte de la Cuenta de Alto Costo.",
    "Variables de tratamiento y actividad.",
    "Marcar.",
    "Enviar a EPS.",
    "Cierre en el siguiente corte."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de artritis reumatoide",
     "Aporta la cohorte con actividad de la enfermedad",
     "Resolución 1393 de 2015"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Remite a reumatología y asegura el tratamiento",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Ajuste a meta",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Fármaco modificador registrado y nueva medición de actividad.",
   "indicador": "Proporción de casos en remisión o baja actividad.",
   "mundo": "Dinamarca sigue en el registro nacional DANBIO a los pacientes con artritis en terapia biológica [[danbio]]; la guía del Colegio Americano de Reumatología recomienda tratar hasta la meta [[fraenkel]].",
   "ev": [
    [
     "fraenkel",
     "Se recomienda iniciar metotrexato temprano y tratar hasta baja actividad o remisión."
    ]
   ],
   "dano": "meses",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "vhc",
   "g": "cac",
   "t": "Hepatitis C diagnosticada sin tratamiento antiviral",
   "valor": "La hepatitis C se cura en semanas con antivirales orales. Cada persona diagnosticada y no tratada es una cirrosis evitable.",
   "problema": "La Cuenta de Alto Costo lleva la cohorte de hepatitis C y publica su seguimiento [[cacvhc]]. Con antivirales de acción directa, la curación supera el 90% en la mayoría de los esquemas; el reto es que cada persona diagnosticada llegue al tratamiento.",
   "clinica": "La respuesta viral sostenida reduce la mortalidad hepática en todas las épocas de tratamiento [[erman]].",
   "factores": [
    "Anticuerpo positivo sin carga viral",
    "Carga viral positiva sin tratamiento",
    "Cirrosis",
    "Coinfección con VIH",
    "Uso de drogas inyectables"
   ],
   "cie": "B17.1 hepatitis C aguda; B18.2 hepatitis C crónica.",
   "cups": "906225 anticuerpos contra hepatitis C; 908807 hepatitis C carga viral; 908833 genotipo.",
   "atc": "J05AP antivirales para hepatitis C.",
   "fuentes": "Cuenta de Alto Costo, SIVIGILA, RIPS.",
   "criterio": "Diagnóstico o carga viral positiva sin dispensación de J05AP.",
   "prioridad": "Alta: cirrosis o coinfección. Estándar: el resto.",
   "pasos": [
    "Cohorte.",
    "Pruebas y dispensación.",
    "Marcar.",
    "Enviar.",
    "Cierre con respuesta viral sostenida."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de hepatitis C",
     "Aporta la cohorte",
     "Decreto 780 de 2016"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Completa la cascada hasta el tratamiento",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Hepatología o medicina interna",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Tratamiento dispensado y carga viral indetectable a las 12 semanas.",
   "indicador": "Proporción de diagnosticados tratados.",
   "mundo": "Egipto tamizó a cerca de 50 millones de personas y trató a quienes resultaron positivos en un programa nacional [[waked]].",
   "ev": [
    [
     "erman",
     "La respuesta viral sostenida reduce la mortalidad hepática."
    ]
   ],
   "dano": "años",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "gest",
   "g": "materno",
   "t": "Gestantes sin control prenatal oportuno",
   "valor": "Los trastornos neonatales están entre las primeras causas de pérdida de salud. El control temprano es lo más costo efectivo del sistema.",
   "cifra": [
    "3.350",
    "muertes por trastornos neonatales en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima 3.350 muertes por trastornos neonatales y 385 por causas maternas en Colombia en 2023 [[ihme]]. La ruta materno perinatal de la Resolución 3280 de 2018 define los controles; la lista identifica a quien no los recibe.",
   "clinica": "Reducir el número de controles prenatales se asoció con mayor mortalidad perinatal en países de ingreso bajo y medio [[dowswell]]; el modelo de control prenatal de la OMS se apoya en una revisión de ensayos controlados [[carroli]].",
   "factores": [
    "Primer control después de la semana 12",
    "Adolescente",
    "Gestación de alto riesgo",
    "Migrante sin afiliación o recién afiliada",
    "Ruralidad dispersa"
   ],
   "cie": "Z34 supervisión de embarazo normal; Z35 supervisión de embarazo de alto riesgo; capítulo O.",
   "cups": "890201 consulta de primera vez por medicina general; 890205 primera vez por enfermería; 881436 ecografía obstétrica con translucencia nucal; 906915 prueba no treponémica; 906249 VIH anticuerpos.",
   "atc": "B03AD hierro con ácido fólico; A12AA calcio.",
   "fuentes": "RIPS, SIVIGILA, base de afiliados.",
   "criterio": "Gestación registrada sin consulta prenatal antes de la semana 12 o sin control en los últimos 45 días.",
   "prioridad": "Alta: adolescente, alto riesgo o sin ningún control. Estándar: el resto.",
   "pasos": [
    "Gestaciones registradas.",
    "Controles.",
    "Marcar.",
    "Enviar a EPS y secretaría municipal.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Captación y primer control",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Secretaría municipal",
     "Salud pública municipal y plan de intervenciones colectivas",
     "Búsqueda activa comunitaria",
     "Ley 715 de 2001, art. 44; Resolución 518 de 2015"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Control prenatal según ruta",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Control registrado.",
   "indicador": "Proporción de gestantes con primer control antes de la semana 12.",
   "mundo": "La OMS recomienda desde 2016 al menos ocho contactos prenatales, el primero en las primeras 12 semanas [[whoanc]].",
   "ev": [
    [
     "dowswell",
     "Menos controles prenatales se asociaron con mayor mortalidad perinatal."
    ],
    [
     "carroli",
     "La revisión de la OMS sustenta el modelo de control prenatal."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "sif",
   "g": "materno",
   "t": "Sífilis gestacional sin tratamiento completo",
   "valor": "Una inyección de penicilina a tiempo evita la sífilis congénita. Cada caso congénito es una falla del sistema.",
   "problema": "La sífilis gestacional y la congénita son eventos de notificación obligatoria al SIVIGILA, eventos 750 y 740. Cada caso congénito indica que una gestante no fue tamizada o no fue tratada a tiempo, ella y su pareja.",
   "clinica": "Las pruebas en el punto de atención aumentan el tratamiento oportuno y previenen desenlaces adversos del embarazo [[brandenburger]]. La revisión Cochrane sobre estrategias de tamizaje identifica la necesidad de pruebas que lleven al tratamiento en la misma visita [[shahrook]].",
   "factores": [
    "Caso notificado sin penicilina benzatínica registrada",
    "Pareja sin tratamiento",
    "Tamizaje tardío",
    "Migrante",
    "Consumo de sustancias"
   ],
   "cie": "O98.1 sífilis que complica el embarazo; A50 sífilis congénita.",
   "cups": "906915 prueba no treponémica; 906039 prueba treponémica.",
   "atc": "J01CE08 penicilina G benzatínica.",
   "fuentes": "SIVIGILA eventos 750 y 740, RIPS.",
   "criterio": "Caso del evento 750 sin dispensación o aplicación de penicilina benzatínica registrada.",
   "prioridad": "Toda la lista es de prioridad alta.",
   "pasos": [
    "Casos notificados.",
    "Tratamiento registrado.",
    "Marcar.",
    "Enviar a EPS y secretaría.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Instituto Nacional de Salud",
     "Dirección de Vigilancia y Análisis del Riesgo en Salud Pública",
     "Entrega casos del evento 750",
     "Decreto 4109 de 2011"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Tratamiento de gestante y pareja",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Secretaría municipal y departamental",
     "Salud pública",
     "Seguimiento de caso",
     "Ley 715 de 2001, arts. 43 y 44"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Tratamiento completo de gestante y pareja registrado.",
   "indicador": "Incidencia de sífilis congénita por 1.000 nacidos vivos, por departamento.",
   "mundo": "Cuba fue validada por la OMS en 2015 como el primer país que eliminó la transmisión materno infantil del VIH y de la sífilis [[caffe]].",
   "ev": [
    [
     "brandenburger",
     "Las pruebas en el punto de atención aumentan el tratamiento oportuno y previenen desenlaces adversos."
    ],
    [
     "shahrook",
     "Se requieren estrategias de tamizaje que permitan tratar en la misma visita."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "desn",
   "g": "materno",
   "t": "Niños con desnutrición aguda sin seguimiento",
   "valor": "Cada niño con desnutrición aguda ya está notificado. La lista asegura que ninguno quede sin el control que evita su muerte.",
   "cifra": [
    "394",
    "muertes por desnutrición proteico calórica en menores de cinco años en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima 394 muertes por desnutrición proteico calórica en menores de cinco años en Colombia en 2023 [[ihme]]. La desnutrición aguda es el evento 113 del SIVIGILA y tiene lineamiento nacional de manejo.",
   "clinica": "El manejo comunitario con alimento terapéutico listo para consumir mejora la recuperación de la desnutrición aguda [[das]].",
   "factores": [
    "Sin control a los 7 días de la notificación",
    "Desnutrición aguda severa",
    "Menor de 6 meses",
    "Comunidad indígena o rural dispersa",
    "Residencia en Vichada, Guainía, Vaupés o La Guajira, los departamentos con mayor pobreza multidimensional en 2025 [[geih]]"
   ],
   "cie": "E40 a E46 desnutrición proteico calórica; E43 desnutrición severa no especificada.",
   "cups": "890206 consulta de primera vez por nutrición; 890101 visita domiciliaria; 902210 hemograma.",
   "atc": "No aplica; la fórmula terapéutica lista para consumir se registra como insumo.",
   "fuentes": "SIVIGILA evento 113, RIPS.",
   "criterio": "Caso notificado sin control de seguimiento registrado en los plazos del lineamiento.",
   "prioridad": "Toda la lista es de prioridad alta; severa y menor de 6 meses primero.",
   "pasos": [
    "Casos del evento 113.",
    "Controles registrados.",
    "Marcar.",
    "Enviar a secretaría y EPS.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Instituto Nacional de Salud",
     "Dirección de Vigilancia y Análisis del Riesgo en Salud Pública",
     "Entrega casos",
     "Decreto 4109 de 2011"
    ],
    [
     "Secretaría municipal y departamental",
     "Salud pública y nutrición",
     "Visita y seguimiento",
     "Ley 715 de 2001, arts. 43 y 44"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Manejo y fórmula terapéutica",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Control registrado y recuperación nutricional documentada.",
   "indicador": "Proporción de casos con recuperación.",
   "mundo": "El manejo comunitario de la desnutrición aguda severa, adoptado por la OMS y UNICEF, sigue a cada niño hasta su recuperación [[collins]].",
   "ev": [
    [
     "das",
     "El manejo con alimento terapéutico listo para consumir mejora la recuperación."
    ]
   ],
   "dano": "días",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "vac",
   "g": "materno",
   "t": "Menores con esquema de vacunación incompleto",
   "valor": "El registro nominal de vacunación ya existe. Recordar y buscar a quien falta es la intervención con mejor evidencia.",
   "problema": "El Programa Ampliado de Inmunizaciones lleva registro nominal de cada dosis aplicada. La lista cruza ese registro con la base de afiliados para encontrar a cada menor con esquema atrasado y entregarlo a la EPS y al municipio.",
   "clinica": "Los recordatorios y la búsqueda activa aumentan las coberturas de vacunación [[vann]].",
   "factores": [
    "Dosis atrasada más de 30 días",
    "Menor de un año",
    "Migrante",
    "Ruralidad dispersa"
   ],
   "cie": "Z23 a Z27 necesidad de inmunización.",
   "cups": "993102 vacunación contra tuberculosis BCG y demás códigos 993 del esquema.",
   "atc": "J07 vacunas.",
   "fuentes": "Registro nominal del Programa Ampliado de Inmunizaciones, base de afiliados de la ADRES.",
   "criterio": "Menor de seis años con una dosis del esquema atrasada más de 30 días.",
   "prioridad": "Alta: menor de un año. Estándar: el resto.",
   "pasos": [
    "Registro nominal de dosis.",
    "Comparación con el esquema por edad.",
    "Marcar.",
    "Enviar a municipio y EPS.",
    "Cierre con dosis aplicada."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Ministerio de Salud",
     "Programa Ampliado de Inmunizaciones, en la dirección de promoción y prevención",
     "Aporta el registro nominal",
     "Decreto 120 de 2026, art. 5"
    ],
    [
     "Secretaría municipal",
     "Salud pública",
     "Búsqueda y vacunación",
     "Ley 715 de 2001, art. 44"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Recordatorio y agenda",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Dosis registrada.",
   "indicador": "Cobertura de esquema completo por cohorte de nacimiento y municipio.",
   "mundo": "La revisión Cochrane, con estudios sobre todo de Estados Unidos, respalda los recordatorios y la búsqueda nominal [[vann]].",
   "ev": [
    [
     "vann",
     "Los recordatorios y la búsqueda activa aumentan la vacunación."
    ]
   ],
   "dano": "meses",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "sui",
   "g": "mental",
   "t": "Intento de suicidio sin seguimiento",
   "valor": "Quien sobrevive a un intento de suicidio tiene el mayor riesgo de morir por suicidio. Un contacto en los días siguientes es la intervención más simple.",
   "cifra": [
    "3.650",
    "muertes por suicidio en Colombia en 2023 según el IHME",
    "ihme"
   ],
   "problema": "El IHME estima 3.650 muertes por suicidio en Colombia en 2023 [[ihme]]. El intento de suicidio es el evento 356 del SIVIGILA: cada caso ya está identificado.",
   "clinica": "Las intervenciones de contacto breve, como llamadas, cartas y tarjetas de crisis, mostraron una reducción no significativa en el número de personas que repiten, pero sí menos episodios repetidos [[milner]].",
   "factores": [
    "Sin consulta de salud mental en 7 días",
    "Intento previo",
    "Trastorno depresivo o por consumo de sustancias",
    "Acceso a medios letales",
    "Adolescente"
   ],
   "cie": "X60 a X84 lesiones autoinfligidas intencionalmente; R45.8 ideación suicida.",
   "cups": "890284 consulta de primera vez por psiquiatría; 890208 consulta de primera vez por psicología; 943500 intervención en crisis.",
   "atc": "N06AB inhibidores selectivos de la recaptación de serotonina.",
   "fuentes": "SIVIGILA evento 356, RIPS.",
   "criterio": "Caso notificado sin consulta de salud mental registrada en 7 días.",
   "prioridad": "Toda la lista es de prioridad alta.",
   "pasos": [
    "Casos del evento 356.",
    "Consultas posteriores.",
    "Marcar.",
    "Enviar a EPS y secretaría.",
    "Cierre."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Instituto Nacional de Salud",
     "Dirección de Vigilancia y Análisis del Riesgo en Salud Pública",
     "Entrega casos",
     "Decreto 4109 de 2011"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Contacto activo y cita",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Plan de seguridad",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Secretaría municipal y departamental",
     "Salud mental",
     "Seguimiento comunitario",
     "Ley 1616 de 2013"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Consulta registrada y contacto a los 30 días.",
   "indicador": "Proporción de casos con consulta en 7 días.",
   "mundo": "Francia opera el programa VigilanS, que contacta a cada persona dada de alta después de un intento con llamadas y postales [[vigilans]].",
   "ev": [
    [
     "milner",
     "El contacto breve no redujo de forma significativa el número de personas que repiten, pero sí el número de episodios repetidos."
    ]
   ],
   "dano": "días",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "hosp",
   "g": "valor",
   "t": "Hospitalizaciones evitables repetidas",
   "valor": "748.212 hospitalizaciones evitables en 2025. Cada una que se evita libera una cama y ahorra sufrimiento.",
   "cifra": [
    "748.212",
    "hospitalizaciones evitables por condiciones sensibles a la atención primaria en 2025",
    "adres"
   ],
   "problema": "La ADRES identificó 748.212 hospitalizaciones evitables en 2025, con un costo de hasta 8,36 billones de pesos, y 310 personas con cinco o más [[adres]]. La tasa varía de 248,5 por 10.000 habitantes en Huila a 20,6 en Guainía [[adresnota]].",
   "clinica": "La continuidad de la atención ambulatoria se asocia con menos hospitalizaciones evitables [[kao]], y una atención primaria con más horas, más continuidad y mejor coordinación también [[vanloenen]].",
   "factores": [
    "Dos o más hospitalizaciones evitables en 12 meses",
    "Sin control ambulatorio después del egreso",
    "Polifarmacia",
    "Edad mayor de 65 años",
    "Sin médico o equipo de cabecera asignado"
   ],
   "cie": "Lista de 20 grupos usada por la ADRES, entre ellos infecciones urinarias N39.0, enfermedad cerebrovascular I63 e I64, neumonía J18, insuficiencia cardiaca I50, EPOC J44, diabetes E10 a E14 e infecciones de piel L03.",
   "cups": "890301 control por medicina general; 890101 visita domiciliaria.",
   "atc": "Según la condición de base.",
   "fuentes": "RIPS y factura electrónica, análisis de la ADRES.",
   "criterio": "Dos o más hospitalizaciones por condiciones sensibles en 12 meses.",
   "prioridad": "Alta: cinco o más. Estándar: dos a cuatro.",
   "pasos": [
    "Egresos con diagnóstico principal en la lista.",
    "Conteo por persona.",
    "Clasificar.",
    "Razón observada sobre esperada por EPS y municipio.",
    "Enviar."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "ADRES",
     "Equipo de analítica",
     "Aporta su análisis de hospitalizaciones evitables",
     "Ley 1753 de 2015, art. 66"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Gestión de caso, control posegreso y conciliación de medicamentos",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Plan de cuidado",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Secretaría departamental o distrital de salud",
     "Dependencia de aseguramiento y salud pública de la secretaría",
     "Hace seguimiento a las EPS de su territorio como autoridad sanitaria y lo cruza con su ASIS",
     "Ley 715 de 2001, art. 43"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Control posegreso registrado y ningún reingreso evitable en 90 días.",
   "indicador": "Tasa de hospitalizaciones evitables por 10.000 afiliados, por EPS y municipio.",
   "mundo": "Estados Unidos [[ahrq]] y Canadá [[cihi]] publican hospitalizaciones por condiciones sensibles a la atención ambulatoria y las usan para orientar la atención primaria.",
   "ev": [
    [
     "kao",
     "La continuidad de la atención ambulatoria se asocia con menos hospitalizaciones evitables."
    ],
    [
     "vanloenen",
     "Una atención primaria con continuidad y coordinación se asocia con menos hospitalizaciones evitables."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "poli",
   "g": "valor",
   "t": "Mayores con polifarmacia sin revisión de medicamentos",
   "valor": "Revisar la fórmula de una persona mayor con muchos medicamentos evita caídas, interacciones y hospitalizaciones, y ahorra.",
   "problema": "Con la dispensación nominal en RIPS y en el resumen digital de dispensación [[res1799]], el sistema puede contar cuántos principios activos distintos recibe cada persona mayor. La polifarmacia es un factor de riesgo de hospitalización evitable.",
   "clinica": "Las intervenciones de desprescripción en personas mayores reducen el número de medicamentos y los potencialmente inapropiados, con señales de beneficio en otros desenlaces [[zhou]].",
   "factores": [
    "Diez o más principios activos distintos en 90 días",
    "Benzodiacepinas en mayores de 65 años",
    "Combinaciones de alto riesgo, como anticoagulante con antiinflamatorio",
    "Caída o fractura en 12 meses"
   ],
   "cie": "W19 caídas; S72 fractura de fémur; Y57 efectos adversos de medicamentos.",
   "cups": "890249 consulta de primera vez por geriatría; 890301 control por medicina general.",
   "atc": "Conteo de códigos ATC de nivel 5 distintos; N05BA benzodiacepinas; M01A antiinflamatorios no esteroideos; B01AA antagonistas de la vitamina K.",
   "fuentes": "RIPS de medicamentos, resumen digital de dispensación.",
   "criterio": "Persona de 65 años o más con diez o más principios activos distintos en 90 días.",
   "prioridad": "Alta: caída en 12 meses o combinación de alto riesgo. Estándar: el resto.",
   "pasos": [
    "Dispensaciones de 90 días.",
    "Conteo de principios activos.",
    "Combinaciones de riesgo según criterios STOPP y Beers.",
    "Clasificar.",
    "Enviar a EPS e IPS."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Programa de revisión de medicamentos con químico farmacéutico",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "IPS primaria o especializada",
     "Equipo tratante",
     "Médico tratante decide qué suspender",
     "Resolución 3100 de 2019; rutas de la Resolución 3280 de 2018"
    ],
    [
     "Gestor farmacéutico",
     "Servicio farmacéutico",
     "Conciliación de la fórmula",
     "Resolución 1604 de 2013; Resolución 1799 de 2026"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Revisión registrada y número de principios activos en el siguiente corte.",
   "indicador": "Proporción de mayores con diez o más principios activos.",
   "mundo": "Escocia publica una guía nacional de revisión de polifarmacia para atención primaria [[scotpoly]].",
   "ev": [
    [
     "zhou",
     "La desprescripción reduce medicamentos y medicamentos potencialmente inapropiados en personas mayores."
    ]
   ],
   "dano": "meses",
   "dato": "lista",
   "vuelta": 3
  },
  {
   "id": "quej",
   "g": "valor",
   "t": "Quejas y tutelas repetidas por la misma atención",
   "valor": "Cerca de 1,2 millones de quejas en siete meses, 92% por barreras de acceso. Resolver el caso de fondo reduce la litigiosidad.",
   "cifra": [
    "92%",
    "de las quejas ante la Supersalud entre enero y julio de 2026 fueron por barreras de acceso",
    "infobae22"
   ],
   "problema": "La Supersalud recibió cerca de 1,2 millones de quejas entre enero y julio de 2026, 92% por barreras de acceso [[infobae22]]. Una persona con dos o más quejas por el mismo servicio es una persona que el sistema no ha resuelto.",
   "clinica": "Las quejas de pacientes contienen información útil sobre problemas de calidad y seguridad que otros sistemas no capturan, si se clasifican y analizan [[reader]].",
   "factores": [
    "Dos o más quejas por el mismo servicio en 6 meses",
    "Tutela previa",
    "Diagnóstico de alto costo",
    "EPS intervenida"
   ],
   "cie": "Según el servicio de la queja.",
   "cups": "Según el servicio de la queja.",
   "atc": "Según el medicamento de la queja.",
   "fuentes": "Sistema de peticiones, quejas y reclamos de la Supersalud.",
   "criterio": "Dos o más quejas por el mismo servicio en 6 meses.",
   "prioridad": "Alta: diagnóstico de la lista de continuidad vital o cáncer. Estándar: el resto.",
   "pasos": [
    "Quejas por persona y servicio.",
    "Agrupar.",
    "Marcar repetidas.",
    "Enviar a EPS.",
    "Cierre confirmado con la persona."
   ],
   "flujo": [
    [
     "Superintendencia Nacional de Salud",
     "Delegada para la Protección al Usuario",
     "Prioriza y genera alertas sobre quejas repetidas",
     "Decreto 1080 de 2021, art. 19, num. 5"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Gestión de caso con responsable nominal",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Entidades de Aseguramiento en Salud, con la Subdirección de Analítica",
     "Cruza el cierre reportado con RIPS, factura electrónica y resúmenes digitales; si la brecha persiste, pide plan de mejoramiento",
     "Decreto 1080 de 2021, art. 17, num. 7 y 8; art. 22, num. 1; art. 23, num. 19"
    ]
   ],
   "cierre": "Servicio prestado y confirmado con la persona.",
   "indicador": "Proporción de quejas repetidas resueltas de fondo.",
   "mundo": "Inglaterra publica cada año las quejas escritas por organización del Servicio Nacional de Salud [[nhscompl]].",
   "ev": [
    [
     "reader",
     "Las quejas clasificadas con una taxonomía común permiten detectar fallas de calidad y seguridad."
    ]
   ],
   "dano": "semanas",
   "dato": "lista",
   "vuelta": 2
  },
  {
   "id": "presc",
   "g": "medicos",
   "t": "Prescriptores con práctica atípica",
   "valor": "Retroalimentación confidencial entre pares para reducir lo que no aporta valor y detectar lo que falta, sin calificar al médico desde el gobierno.",
   "problema": "La prescripción electrónica en MIPRES y la dispensación nominal permiten comparar a cada prescriptor con sus pares de la misma especialidad y ámbito. El acuerdo de 2026 entre la ADRES y el Invima cruza prescripción, suministro y gasto para encontrar inconsistencias en productos, pero no compara médicos ni les devuelve información [[adresinvima]]. Esta lista se apoya en ese acuerdo y agrega la comparación entre pares, por exceso o por defecto, con entrega confidencial a la IPS.",
   "clinica": "Cartas con comparación social a médicos de alta prescripción de antibióticos redujeron la prescripción en un ensayo nacional en Inglaterra [[hallsworth]]. Cartas a prescriptores de quetiapina en Medicare la redujeron de forma sostenida sin daño a los pacientes [[sacarny]]. La auditoría con retroalimentación funciona mejor cuando apunta a prioridades claras [[ivers]]. Entrenar y comparar a médicos generales redujo 23% las pruebas de vitamina D [[vugt]].",
   "factores": [
    "Indicadores de exceso: pruebas sin indicación, antibióticos en infecciones virales, benzodiacepinas en mayores",
    "Indicadores de defecto: infarto sin estatina, diabetes sin estudio renal",
    "Volumen mínimo de casos",
    "Ajuste por riesgo de la población atendida"
   ],
   "cie": "Según el indicador; por ejemplo I21 sin C10AA, o J00 a J06 con J01.",
   "cups": "Por ejemplo, 903426 hemoglobina glicosilada con frecuencia mayor a la indicada.",
   "atc": "J01 antibacterianos; N05BA benzodiacepinas; N05AH04 quetiapina; C10AA estatinas.",
   "fuentes": "MIPRES, RIPS, resumen digital de atención y de dispensación.",
   "criterio": "Profesional en el extremo de su grupo de pares en un indicador elegido por la sociedad científica, sostenido en dos periodos.",
   "prioridad": "Sin prioridad clínica: la señal se entrega en confidencialidad.",
   "pasos": [
    "La sociedad científica elige indicadores con evidencia clara.",
    "Comparar a cada profesional con pares de su especialidad, ámbito y complejidad, con ajuste por riesgo.",
    "Señal solo si se sostiene en dos periodos.",
    "El profesional recibe su perfil, sin consecuencias.",
    "Si persiste, la revisa el comité clínico de la IPS; la Supersalud vigila que la revisión ocurra."
   ],
   "flujo": [
    [
     "Sociedades científicas e IETS",
     "Comités de cada especialidad",
     "Eligen y validan los indicadores",
     "Ley 1751 de 2015, art. 17; Ley 1438 de 2011, art. 92"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Subdirección de Analítica",
     "Calcula la comparación y la entrega a la IPS",
     "Decreto 1080 de 2021, art. 17"
    ],
    [
     "IPS",
     "Comité clínico o de calidad",
     "Revisa con el profesional",
     "Resolución 3100 de 2019"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Prestadores de Servicios de Salud",
     "Vigila que el comité funcione, nunca califica al médico",
     "Decreto 1080 de 2021, art. 25"
    ],
    [
     "Tribunales de ética médica",
     "Tribunal Nacional y seccionales",
     "Juzgan la ética profesional, no esta lista",
     "Ley 23 de 1981"
    ]
   ],
   "cierre": "Perfil entregado y revisión de comité documentada cuando aplica.",
   "indicador": "Variación entre prescriptores en cada indicador.",
   "mundo": "Ontario entrega a cada médico de atención primaria un informe de su práctica frente a sus pares [[mypractice]]; Medicare envió cartas de comparación a prescriptores [[sacarny]]; Alemania revisa la economicidad de la prescripción con asesoría antes de consecuencias [[sgb106]].",
   "ev": [
    [
     "hallsworth",
     "La retroalimentación con norma social redujo la prescripción de antibióticos."
    ],
    [
     "sacarny",
     "Las cartas de comparación redujeron la prescripción de quetiapina sin daño."
    ],
    [
     "ivers",
     "La auditoría con retroalimentación mejora la práctica, sobre todo cuando se enfoca en prioridades."
    ],
    [
     "vugt",
     "Entrenar y comparar a médicos generales redujo las pruebas de vitamina D."
    ]
   ],
   "dano": "años",
   "dato": "lista",
   "vuelta": 3
  },
  {
   "id": "ips",
   "g": "medicos",
   "t": "Prestadores con pendientes y demoras fuera de estándar",
   "valor": "Las demoras se concentran en pocos prestadores. Mostrarlo a la EPS y a la secretaría permite redistribuir la demanda.",
   "problema": "El tablero del plan de choque y los indicadores de oportunidad que la Cuenta de Alto Costo calcula por cohorte muestran dónde se acumulan pendientes [[infobae27]] [[cacmama]]. La lista ordena a los prestadores por pendientes de prioridad alta y por días de espera, ajustados por volumen.",
   "clinica": "Las listas de pacientes son la mitad del ciclo: si el prestador no tiene capacidad, el pendiente no se cierra. Identificar los cuellos de botella permite redirigir pacientes a otra red.",
   "factores": [
    "Pendientes de prioridad alta por cada 1.000 usuarios",
    "Mediana de días de espera frente al estándar",
    "Proporción de pendientes por falta de insumo o de contrato"
   ],
   "cie": "No aplica; la unidad es el prestador.",
   "cups": "Agrupados por servicio.",
   "atc": "No aplica.",
   "fuentes": "Tablero del plan de choque, Cuenta de Alto Costo, REPS, indicadores de calidad de la Resolución 256 de 2016.",
   "criterio": "Prestador en el quintil superior de pendientes de prioridad alta o de días de espera, sostenido en dos cortes.",
   "prioridad": "Sin prioridad clínica.",
   "pasos": [
    "Asignar cada pendiente al prestador.",
    "Calcular tasas ajustadas por volumen.",
    "Ordenar.",
    "Enviar a EPS y secretaría.",
    "Revisar en el siguiente corte."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "EPS",
     "Área de gestión del riesgo en salud",
     "Redistribuye pacientes en su red",
     "Ley 100 de 1993, art. 178; Ley 1122 de 2007, art. 14; Decreto 682 de 2018"
    ],
    [
     "Secretaría departamental o distrital de salud",
     "Dependencia de aseguramiento y salud pública de la secretaría",
     "Hace seguimiento a las EPS de su territorio como autoridad sanitaria y lo cruza con su ASIS",
     "Ley 715 de 2001, art. 43"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Delegada para Prestadores de Servicios de Salud",
     "Revisa capacidad y calidad del prestador",
     "Decreto 1080 de 2021, art. 25"
    ]
   ],
   "cierre": "Pendientes de prioridad alta del prestador por debajo del estándar.",
   "indicador": "Pendientes de prioridad alta por prestador.",
   "mundo": "Inglaterra publica cada mes los tiempos de espera de cáncer por proveedor [[nhswait]].",
   "ev": [],
   "dano": "semanas",
   "dato": "parcial",
   "vuelta": 3
  },
  {
   "id": "dato",
   "g": "medicos",
   "t": "Calidad del dato por EPS e IPS reportante",
   "valor": "580.517 inconsistencias en la auditoría renal. Devolver el error a quien lo genera es la forma más barata de mejorar la información.",
   "cifra": [
    "580.517",
    "inconsistencias documentales en la auditoría de enfermedad renal 2025 de la Cuenta de Alto Costo",
    "cacerc"
   ],
   "problema": "La Cuenta de Alto Costo encontró 580.517 inconsistencias documentales en su auditoría renal de 2025, 92,2% por falta de soporte del diagnóstico [[cacerc]]. Además, 89% de los ASIS territoriales de 2024 requirieron ajustes [[asis]]. Un dato malo produce listas con ruido y cálculos de UPC menos precisos.",
   "clinica": "Cada lista que vuelve con errores muestra dónde falla el registro. La mala codificación de la enfermedad renal en atención primaria, por ejemplo, es un factor de riesgo de iniciar diálisis sin planeación [[magadi]].",
   "factores": [
    "Diagnóstico sin soporte clínico",
    "Persona fallecida con atenciones posteriores",
    "Diagnósticos incompatibles con edad o sexo",
    "Rezago entre la atención y su reporte"
   ],
   "cie": "No aplica; la unidad es el reportante.",
   "cups": "No aplica.",
   "atc": "No aplica.",
   "fuentes": "Auditoría de la Cuenta de Alto Costo, RIPS, registro de defunciones, base de afiliados.",
   "criterio": "Reportante con tasa de inconsistencia en el quintil superior.",
   "prioridad": "Sin prioridad clínica.",
   "pasos": [
    "Reglas de validación.",
    "Tasa por reportante.",
    "Ordenar.",
    "Devolver los registros a corregir.",
    "Medir en el siguiente corte."
   ],
   "flujo": [
    [
     "Ministerio de Salud",
     "Dirección Estratégica de Tecnología de la Información con la Dirección de Epidemiología y Demografía",
     "Corre el algoritmo en SISPRO con el corte del mes y entrega la lista a cada EPS y a cada secretaría departamental o distrital, solo con sus afiliados o su territorio",
     "Ley 1438 de 2011, art. 112; Ley 1751 de 2015, art. 19; Decreto 120 de 2026, art. 9"
    ],
    [
     "Cuenta de Alto Costo",
     "Equipo de auditoría",
     "Aporta inconsistencias",
     "Decreto 780 de 2016"
    ],
    [
     "EPS e IPS",
     "Áreas de información",
     "Corrigen en el siguiente corte",
     "Ley 1438 de 2011, art. 114"
    ],
    [
     "Superintendencia Nacional de Salud",
     "Subdirección de Analítica",
     "Valida la calidad del dato",
     "Decreto 1080 de 2021, art. 17, num. 8"
    ]
   ],
   "cierre": "Registro corregido o soportado.",
   "indicador": "Tasa de inconsistencia por reportante.",
   "mundo": "La Cuenta de Alto Costo ya devuelve inconsistencias en su auditoría anual [[cacerc]]; la lista lo extiende a RIPS y lo vuelve un ciclo regular.",
   "ev": [
    [
     "magadi",
     "La mala codificación de la enfermedad renal predice inicio de diálisis no planeado."
    ]
   ],
   "dano": "meses",
   "dato": "lista",
   "vuelta": 2
  }
 ]
};
