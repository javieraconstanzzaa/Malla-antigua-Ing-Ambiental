// Normalización para evitar errores de tildes o mayúsculas
function normalizar(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, "")
    .trim();
}

// Malla actualizada
const malla = {
  "biologia": ["biodiversidad", "organismo y medio ambiente"],
  "quimica general": ["quimica inorganica y ambiental", "introduccion a la ingenieria"],
  "matematicas": ["calculo diferencial e integral", "introduccion a la ingenieria", "bioestadistica"],
  "introduccion a las ciencias ambientales": ["medio ambiente y sociedad", "organismo y medio ambiente"],
  "desarrollo y formacion personal": [],
  "taller nivelacion 1": [],
  "principios de computacion y programacion": ["dibujo para ingenieria"],
  "biodiversidad": ["fundamentos de ecologia"],
  "quimica inorganica y ambiental": ["quimica organica y ambiental"],
  "calculo diferencial e integral": ["series y calculo en varias variables", "fisica 1"],
  "medio ambiente y sociedad": [],
  "practica de vinculacion con el medio": [],
  "organismo y medio ambiente": ["microbiologia ambiental"],
  "introduccion a la ingenieria": ["termodinamica"],
  "quimica organica y ambiental": ["bioquimica", "laboratorio de quimica ambiental"],
  "series y calculo en varias variables": ["ecuaciones diferenciales y algebra lineal"],
  "fisica 1": ["fisica 2", "mecanica de fluidos"],
  "dibujo para ingenieria": ["geomorfologia", "modelacion de sistemas 1"],
  "bioestadistica": ["fundamentos de ecologia"],
  "ingles": ["ingles instrumental"],
  "fundamentos de ecologia": ["ecotoxicologia", "manejo de los recursos naturales"],
  "bioquimica": ["microbiologia ambiental"],
  "ecuaciones diferenciales y algebra lineal": ["mecanica de fluidos", "fisico quimica", "modelacion de sistemas 1"],
  "fisica 2": [],
  "termodinamica": ["fisico quimica"],
  "ingles instrumental": [],
  "microbiologia ambiental": ["biotecnologia ambiental", "practica inicial", "tratamiento de residuos 2"],
  "laboratorio de quimica ambiental": ["ecotoxicologia", "prevencion de riesgos", "practica inicial"],
  "mecanica de fluidos": ["operaciones unitarias", "meteorologia y contaminacion atmosferica", "practica inicial"],
  "fisico quimica": ["operaciones unitarias", "practica inicial"],
  "geomorfologia": ["ordenamiento territorial", "manejo integrado de cuencas 1"],
  "tipe 1": ["tipe 2"],
  "ecotoxicologia": ["legislacion ambiental"],
  "operaciones unitarias": ["impactos ambientales", "tratamiento de residuos 1", "legislacion ambiental", "gestion energetica"],
  "modelacion de sistemas 1": ["tratamiento de residuos 1", "legislacion ambiental", "modelacion de sistemas 2"],
  "meteorologia y contaminacion atmosferica": ["legislacion ambiental"],
  "ordenamiento territorial": ["impactos ambientales", "manejo integrado de cuencas 1"],
  "prevencion de riesgos": [],
  "biotecnologia ambiental": ["metodologia de la investigacion", "practica profesional"],
  "impactos ambientales": ["manejo de los recursos naturales", "auditoria y control de procesos", "metodologia de la investigacion", "instrumentos de gestion ambiental", "practica profesional"],
  "manejo integrado de cuencas 1": ["metodologia de la investigacion", "manejo integrado de cuencas 2", "practica profesional"],
  "tratamiento de residuos 1": ["contaminacion marina y manejo costero", "metodologia de la investigacion", "tratamiento de residuos 2", "practica profesional"],
  "economia y administracion ambiental": ["organizacion y evaluacion de proyectos"],
  "legislacion ambiental": ["auditoria y control de procesos", "instrumentos de gestion ambiental"],
  "practica inicial": [],
  "manejo de los recursos naturales": ["seminario de titulo", "electivo formacion profesional"],
  "contaminacion marina y manejo costero": ["seminario de titulo", "electivo formacion profesional"],
  "modelacion de sistemas 2": ["seminario de titulo", "electivo formacion profesional"],
  "auditoria y control de procesos": ["gestion energetica", "seminario de titulo", "electivo formacion profesional"],
  "metodologia de la investigacion": [],
  "tratamiento de residuos 2": [],
  "manejo integrado de cuencas 2": [],
  "tipe 2": [],
  "gestion energetica": ["etica profesional", "trabajo de titulacion"],
  "instrumentos de gestion ambiental": ["etica profesional", "trabajo de titulacion"],
  "organizacion y evaluacion de proyectos": ["etica profesional", "trabajo de titulacion"],
  "seminario de titulo": ["etica profesional", "trabajo de titulacion"],
  "electivo formacion profesional": [],
  "practica profesional": [],
  "etica profesional": [],
  "trabajo de titulacion": []
};

// Lista de ramos por semestre
const semestres = [
  ["Biología", "Química General", "Matemáticas", "Introducción a las Ciencias Ambientales", "Desarrollo y Formación Personal", "Taller Nivelación 1", "Principios de Computación y Programación"],
  ["Biodiversidad", "Química Inorgánica y Ambiental", "Cálculo Diferencial e Integral", "Medio Ambiente y Sociedad", "Práctica de Vinculación con el Medio", "Organismo y Medio Ambiente"],
  ["Introducción a la Ingeniería", "Química Orgánica y Ambiental", "Series y Cálculo en Varias Variables", "Física 1", "Dibujo para Ingeniería", "Bioestadística", "Inglés"],
  ["Fundamentos de Ecología", "Bioquímica", "Ecuaciones Diferenciales y Álgebra Lineal", "Física 2", "Termodinámica", "Inglés Instrumental"],
  ["Microbiología Ambiental", "Laboratorio de Química Ambiental", "Mecánica de Fluidos", "Físico-Química", "Geomorfología"],
  ["TIPE 1", "Ecotoxicología", "Operaciones Unitarias", "Modelación de Sistemas 1", "Meteorología y Contaminación Atmosférica", "Ordenamiento Territorial", "Prevención de Riesgos"],
  ["Biotecnología Ambiental", "Impactos Ambientales", "Manejo Integrado de Cuencas 1", "Tratamiento de Residuos 1", "Economía y Administración Ambiental", "Legislación Ambiental", "Práctica Inicial"],
  ["Manejo de los Recursos Naturales", "Contaminación Marina y Manejo Costero", "Modelación de Sistemas 2", "Auditoría y Control de Procesos", "Metodología de la Investigación", "Tratamiento de Residuos 2", "Manejo Integrado de Cuencas 2", "TIPE 2"],
  ["Gestión Energética", "Instrumentos de Gestión Ambiental", "Organización y Evaluación de Proyectos", "Seminario de Título", "Electivo Formación Profesional", "Práctica Profesional"],
  ["Ética Profesional", "Trabajo de Titulación"]
];

const aprobados = new Set();

function crearMalla() {
  const container = document.getElementById("malla-container");

  semestres.forEach((semestre, index) => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>Semestre ${index + 1}</h2>`;

    semestre.forEach(ramo => {
      const btn = document.createElement("button");
      btn.textContent = ramo;
      btn.className = "ramo bloqueado";
      if (index === 0) btn.className = "ramo"; // Habilitar primer semestre
      btn.onclick = () => toggleRamo(ramo, btn);
      div.appendChild(btn);
    });

    container.appendChild(div);
  });
}

function toggleRamo(ramo, btn) {
  const key = normalizar(ramo);
  if (aprobados.has(key)) {
    aprobados.delete(key);
    btn.classList.remove("aprobado");
  } else {
    aprobados.add(key);
    btn.classList.add("aprobado");
  }
  actualizarEstado();
}

function actualizarEstado() {
  const botones = document.querySelectorAll(".ramo");
  botones.forEach(btn => {
    const ramo = btn.textContent;
    const key = normalizar(ramo);

    const prereqs = Object.keys(malla).filter(k =>
      malla[k].map(normalizar).includes(key)
    );
    const desbloqueado =
      prereqs.every(p => aprobados.has(p)) || prereqs.length === 0;

    if (desbloqueado) {
      btn.classList.remove("bloqueado");
    } else {
      btn.classList.add("bloqueado");
    }
  });
}

crearMalla();
