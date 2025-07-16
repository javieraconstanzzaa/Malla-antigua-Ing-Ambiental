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
  "legislacion ambiental": ["auditoria y control
