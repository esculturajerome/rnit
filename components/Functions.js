const PROGRAMS_DATA = [
  {
    id: 1,
    title: "AUTOMOTIVE SERVICING NC II GOALS",
    subText:
      "To produce qualified automotive service technicians with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of automotive.",
    desc1:
      "Teach trainees the fundamental knowledge and skills required of a service technician in the high-demand and high-paying job in automotive technology.",
    desc2:
      "Provide a learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism and work safety among others.",
    desc3:
      "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
    image1: "/images/programs/mechanic/mechanic1.jpg",
    image2: "/images/programs/mechanic/mechanic2.jpg",
    image3: "/images/programs/mechanic/mechanic3.jpg",
  },
  {
    id: 2,
    title: "DRESSMAKING NC II GOALS",
    subText:
      "To produce qualified dressmakers/garment sewers with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of dressmaking.",
    desc1:
      "Teach trainees the fundamental knowledge and skills required of a dressmaker/garment sewer in the high- demand and high-paying job in dressmaking industry.",
    desc2:
      "Provide a learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism and work safety among others.",
    desc3:
      "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
    image1: "/images/programs/dressmaking/dressmaking2.jpg",
    image2: "/images/programs/dressmaking/dressmaking1.jpg",
    image3: "/images/programs/dressmaking/dressmaking3.jpg",
  },
  {
    id: 3,
    title: "RAC SERVICING NC II GOALS",
    subText:
      "To produce DomRAC technician with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of DomRAC.",
    desc1:
      "Teach trainees the fundamental knowledge and skills required of a DomRAC technician in the high-demand and high-paying job in DomRAC industry.",
    desc2:
      "Provide a learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism and work safety among others.",
    desc3:
      "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
    image1: "/images/programs/technician/technician1.jpg",
    image2: "/images/programs/technician/technician2.jpg",
    image3: "/images/programs/technician/technician3.jpg",
  },
  {
    id: 4,
    title: "SHIELDED METAL ARC WELDING NC II GOALS",
    subText:
      "To produce qualified welders/fabricator with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of welding and fabrication.",
    desc1:
      "Teach trainees the fundamental knowledge and skills required of a welder/fabricator in the high-demand and high-paying job in welding industry.",
    desc2:
      "Provide a learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism and work safety among others.",
    desc3:
      "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
    image1: "/images/programs/welder/welder1.jpg",
    image2: "/images/programs/welder/welder2.jpg",
    image3: "/images/programs/welder/welder3.jpg",
  },
  {
    id: 5,
    title: "FOOD AND BEVERAGE SERVICES NC II GOALS",
    subText:
      "To produce competent food and beverage service attendants with highly employable skills through quality instruction and an extensive hands on experience and make them highly competitive in a rapidly changing world of food and beverage services.",
    desc1:
      "Teach learners the competencies required of a food and beverage service standards in a high-demand and high paying jobs on food and beverage services facilities/establishments.",
    desc2:
      "Provide a learning environment of close relevant workshop experience and meaningful interaction between trainer and learners instilling work values like teamwork, collaboration, professionalism and work safety among others.",
    desc3:
      "Continually strive to provide a high level of satisfaction to produce consistently high rate of graduate certification and job placement through partnership with industries.",
    image1: "/images/programs/food/food1.jpg",
    image2: "/images/programs/food/food2.jpg",
    image3: "/images/programs/food/food3.jpg",
  },
];

export function getAllPrograms() {
  return PROGRAMS_DATA;
}

export function getProgramById(id) {
  return PROGRAMS_DATA.find((project) => convertToLink(project.title) === id);
}
export function getOtherPrograms(id) {
  let filteredPrograms = PROGRAMS_DATA.filter(
    (project) => convertToLink(project.title) !== id
  );
  return filteredPrograms;
}

export function handleNav(router, e, url) {
  e.preventDefault();
  router.push(url);
}

export function convertToLink(str) {
  str = str.replace(/\s+/g, "-").toLowerCase();
  return str;
}
