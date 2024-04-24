const employees = [
  {
    id: 83292,
    name: "Anna Christina C. Martinez",
    position: "Officer-in-Charge",
    image: "anna-martinez.jpg",
  },
  {
    id: 39280,
    name: "Joysedyll M. Fajutnao",
    position: "Supervisor I",
    image: "joysedyll-fajutnao.jpg",
  },
  {
    id: 83037,
    name: "Felipe S. Gado",
    position: "Assistant Professor IV",
    image: "felife-gado.jpg",
  },

  {
    id: 23876,
    name: "Teresa F. Galicia",
    position: "Assistant Professor I",
    image: "teresa-galicia.jpg",
  },
  {
    id: 75923,
    name: "Prenz Jumer B. Lota",
    position: "Assistant Professor I",
    image: "prenz-lota.jpg",
  },
  {
    id: 63102,
    name: "Maria Elena G. Gaca",
    position: "Administrative Assistant VI",
    image: "elena-gaca.jpg",
  },
  {
    id: 73291,
    name: "Jenette G. Fetalvero",
    position: "Administrative Officer IV",
    image: "jenette-fetalvero.jpg",
  },
  {
    id: 19123,
    name: "U M. Macapagal",
    position: "Administrative Officer III",
    image: "u-macapagal.jpg",
  },
  {
    id: 88291,
    name: "April Joy P. Lota",
    position: "Administrative Officer I",
    image: "april-joy-palota.jpg",
  },
  {
    id: 46290,
    name: "Marilou G. Maestro",
    position: "Administrative Aide III",
    image: "marilou-maestero.jpg",
  },
  {
    id: 38291,
    name: "Jheraldin V. Villan",
    position: "Administrative Aide III",
    image: "jheraldin-villan.jpg",
  },
  {
    id: 11923,
    name: "Rustum M. Rubio",
    position: "Administrative Aide I",
    image: "rustum-rubio.jpg",
  },
  {
    id: 30291,
    name: "Melanis Baldea",
    position: "Instructor III",
    image: "melanis-baldea.jpg",
  },
  {
    id: 27932,
    name: "Perry Joy M. Galasao",
    position: "Instructor III",
    image: "perry-galasao.jpg",
  },
  {
    id: 28931,
    name: "Romestan G. Fernandez",
    position: "Instructor II",
    image: "romestan-fernandez.jpg",
  },
  {
    id: 27891,
    name: "Jonas C. Lorenzo",
    position: "Instructor II",
    image: "jonas-lorenze.jpg",
  },
  {
    id: 73921,
    name: "Ma. Dianne Lu L. Galicia",
    position: "Instructor I",
    image: "dianne-galicia.jpg",
  },
  {
    id: 62923,
    name: "Nico C. Galisanao",
    position: "Instructor I",
    image: "nico-galisanao.jpg",
  },
  {
    id: 37921,
    name: "June Ryan G. Fuentes",
    position: "Instructor I",
    image: "june-fuentes.jpg",
  },
  {
    id: 29123,
    name: "Ma. Melody G. Galicia",
    position: "Nurse II",
    image: "melody-galicia.jpg",
  },
  {
    id: 52931,
    name: "Melanie P. Mendoza",
    position: "School Librarian II",
    image: "melanie-mendoza.jpg",
  },
  {
    id: 78192,
    name: "Isidro M. Galasao",
    position: "Watchman II",
    image: "isidro-galasao.jpg",
  },
  {
    id: 38912,
    name: "Teody L. Gaca",
    position: "Watchman II",
    image: "teody-gaca.jpg",
  },
  {
    id: 13921,
    name: "Elizalde D. Catajay",
    position: "Security Guard I",
    image: "elizalde-catajay.jpg",
  },
];

export default function handler(req, res) {
  res.status(200).json(employees);
}
