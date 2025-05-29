export interface EmployeeProps {
  id: string;
  name: string;
  position: string;
  image: string;
}

const positionOrder: { [key: string]: number } = {
  "Vocational School Administrator II": 1,
  "Vocational Instruction Supervisor I": 2,
  "Assistant Professor IV": 3,
  "Assistant Professor III": 4,
  "Assistant Professor I": 5,
  "Instructor III": 6,
  "Instructor II": 7,
  "Instructor I": 8,
  "Nurse II": 9,
  "School Librarian II": 10,
  "Administrative Officer I": 11,
  "Administrative Assistant VI": 12,
  "Administrative Aide III": 13,
  "Administrative Aide I": 14,
  "Watchman II": 15,
  "Security Guard I": 16,
};

const unsortedEmployees: EmployeeProps[] = [
  {
    id: "83292",
    name: "Anna Christina C. Martinez",
    position: "Vocational School Administrator II",
    image: "/images/employees-gallery/anna-martinez.jpg",
  },
  {
    id: "75923",
    name: "Prenz Jumer B. Lota",
    position: "Vocational Instruction Supervisor I",
    image: "/images/employees-gallery/prenz-lota.jpg",
  },
  {
    id: "83037",
    name: "Felipe S. Gado",
    position: "Assistant Professor IV",
    image: "/images/employees-gallery/felife-gado.jpg",
  },
  {
    id: "39280",
    name: "Joysedyll M. Fajutnao",
    position: "Assistant Professor III",
    image: "/images/employees-gallery/joysedyll-fajutnao.jpg",
  },
  {
    id: "73921",
    name: "Ma. Dianne Lu L. Galicia",
    position: "Assistant Professor III",
    image: "/images/employees-gallery/dianne-galicia.png",
  },
  {
    id: "90001",
    name: "Jun Fely V. Galisanao",
    position: "Assistant Professor III",
    image: "/images/employees-gallery/junfely-galisanao.jpg",
  },
  {
    id: "23876",
    name: "Teresa F. Galicia",
    position: "Assistant Professor I",
    image: "/images/employees-gallery/teresa-galicia.jpg",
  },
  {
    id: "27891",
    name: "Jonas C. Lorenzo",
    position: "Assistant Professor I",
    image: "/images/employees-gallery/jonas-lorenze.jpg",
  },
  {
    id: "90002",
    name: "Engr. John Vic Darwin G. Angelino Jr.",
    position: "Assistant Professor I",
    image: "/images/employees-gallery/johnvicdarwin-angelino.jpg",
  },
  {
    id: "30291",
    name: "Melanis Baldea",
    position: "Instructor III",
    image: "/images/employees-gallery/melanis-baldea.jpg",
  },
  {
    id: "27932",
    name: "Perry Joy M. Galasao",
    position: "Instructor III",
    image: "/images/employees-gallery/perry-galasao.jpg",
  },
  {
    id: "28931",
    name: "Romestan G. Fernandez",
    position: "Instructor II",
    image: "/images/employees-gallery/romestan-fernandez.jpg",
  },
  {
    id: "62923",
    name: "Nico C. Galisanao",
    position: "Instructor I",
    image: "/images/employees-gallery/nico-galisanao-2.jpg", // Assuming this image exists or will be added
  },
  {
    id: "37921",
    name: "June Ryan G. Fuentes",
    position: "Instructor I",
    image: "/images/employees-gallery/june-fuentes.jpg",
  },
  {
    id: "90003",
    name: "Madonna Abegail G. Matre",
    position: "Instructor I",
    image: "/images/employees-gallery/madonna-matre.jpg",
  },
  {
    id: "90004",
    name: "Princess Clee G. Ferrer",
    position: "Instructor I",
    image: "/images/employees-gallery/princess-ferrer.jpg",
  },
  {
    id: "90005",
    name: "Valerine G. Ignacio",
    position: "Instructor I",
    image: "/images/employees-gallery/valerine-ignacio.jpg",
  },
  {
    id: "90006",
    name: "Violery L. Gaad",
    position: "Instructor I",
    image: "/images/employees-gallery/violery-gaad.jpg",
  },
  {
    id: "90007",
    name: "Bryan Magante",
    position: "Instructor I",
    image: "/images/employees-gallery/bryan-magante.jpg",
  },
  {
    id: "90008",
    name: "Seth G. Gregorio",
    position: "Instructor I",
    image: "/images/employees-gallery/seth-gregorio.jpg",
  },
  {
    id: "90009",
    name: "Frances Kie Jane M. Marin",
    position: "Instructor I",
    image: "/images/employees-gallery/frances-marin.jpg",
  },
  {
    id: "29123",
    name: "Ma. Melody G. Galicia",
    position: "Nurse II",
    image: "/images/employees-gallery/melody-galicia.jpg",
  },
  {
    id: "52931",
    name: "Melanie P. Mendoza",
    position: "School Librarian II",
    image: "/images/employees-gallery/melanie-mendoza.jpg",
  },
  {
    id: "88291",
    name: "April Joy P. Lota",
    position: "Administrative Officer I",
    image: "/images/employees-gallery/april-joy-palota.jpg",
  },
  {
    id: "63102",
    name: "Maria Elena G. Gaca",
    position: "Administrative Assistant VI",
    image: "/images/employees-gallery/elena-gaca.jpg",
  },
  {
    id: "46290",
    name: "Marilou G. Maestro",
    position: "Administrative Aide III",
    image: "/images/employees-gallery/marilou-maestero.jpg",
  },
  {
    id: "38291",
    name: "Jheraldin V. Villan",
    position: "Administrative Aide III",
    image: "/images/employees-gallery/jheraldin-villan.jpg",
  },
  {
    id: "78192",
    name: "Isidro M. Galasao",
    position: "Watchman II",
    image: "/images/employees-gallery/isidro-galasao.jpg",
  },
  {
    id: "38912",
    name: "Teody L. Gaca",
    position: "Watchman II",
    image: "/images/employees-gallery/teody-gaca.jpg",
  },
  {
    id: "13921",
    name: "Elizalde D. Catajay",
    position: "Security Guard I",
    image: "/images/employees-gallery/elizalde-catajay.jpg",
  },
];

export const Employees: EmployeeProps[] = unsortedEmployees.sort((a, b) => {
  const orderA = positionOrder[a.position] || 99; // Assign a high number for unknown positions
  const orderB = positionOrder[b.position] || 99;
  return orderA - orderB;
});
