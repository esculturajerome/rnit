// data/programs.tsx

// Define the structure for a single program
export interface Program { // Export the interface
    id: number;
    title: string;
    subText: string;
    desc1: string;
    desc2?: string;
    desc3?: string;
    desc4?: string;
    image1: string;
    image2?: string;
    image3?: string;
    qualifications?: Qualification[];
}

// Define the structure for nested qualifications
export interface Qualification { // Export the interface
    qualification: string;
    venue: string;
    date: string;
    image1: string;
    image2?: string;
    image3?: string;
}

// Export the data array
export const PROGRAMS_DATA: Program[] = [
    {
        id: 1,
        title: "Automotive Servicing NC II",
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
        title: "Dressmaking NC II",
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
        title: "RAC Servicing NC II",
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
        title: "Shielded Metal ARC Welding NC II",
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
        title: "Food and Beverage Services NC II",
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
    {
        id: 6,
        title: "Bread and Pastry Production NC II",
        subText:
            "A STAR-rated program offering quality learning experiences for Bread and Pastry Production NC II",
        desc1: "Integrate the 21st Century Skills in the curriculum;",
        desc2:
            "Produce Baking and Pastry professionals through hands-on experience and competency-based skills;",
        desc3: "100% of graduates are certified and",
        desc4: "80% of graduates are employed per  year",
        image1: "/images/programs/bake/bake2.jpg",
        image2: "/images/programs/bake/bake1.jpg",
        image3: "/images/programs/bake/bake3.jpg",
        qualifications: [
            {
                qualification: "Bread and Pastry Production NC II",
                venue: "Mabini, Corcuera, Romblon",
                date: "August 12, 2022 - September 2, 2022",
                image1: "/images/programs/bake/bpp.jpg",
                image2: "/images/programs/bake/bpp1.jpg",
                image3: "/images/programs/bake/bpp2.jpg",
            },
            {
                qualification: "Pastry Making",
                venue: "Pandan, Santa Fe, Romblon",
                date: "October 13-24, 2022",
                image1: "/images/programs/bake/bpp3.jpg",
                image2: "/images/programs/bake/bpp4.jpg",
                image3: "/images/programs/bake/bpp5.jpg",
            },
            {
                qualification: "Pastry Making",
                venue: "Santa Andres, Romblon",
                date: "April 25, 2022",
                image1: "/images/programs/bake/bpp6.jpg",
                image2: "/images/programs/bake/bpp7.jpg",
                image3: "/images/programs/bake/bpp8.jpg",
            },
        ],
    },
    {
        id: 7,
        title: "Driving NC II",
        subText:
            "To produce qualified drivers with highly employable skills through quality instructions and extensive shop experience that will make them highly competitive individuals who will meet the demands of the Driving Industry.",
        desc1:
            "Teach Learners the fundamental knowledge and skills required of a driver in the high demand and high paying job in the driving industry.",
        desc2:
            "Provide a learning environment of hands-on experience and close interaction between the leaner and the trainer instilling the value of professionalism, teamwork, cooperation, occupational health and safety for a meaningful teaching and learning experiences.",
        desc3:
            "Strive to pursue high level of learners’/ customers’ satisfaction to produce high rate of graduates, certified and employed through partnership and linkages with industries.",
        image1: "/images/programs/driving/driving3.jpg",
        image2: "/images/programs/driving/driving2.jpg",
        image3: "/images/programs/driving/driving1.jpg",
    },
    {
        id: 8,
        title: "Agricultural Crops Production NC II",
        subText:
            "To produce qualified farmers with highly employable skills through quality instruction and an extensive shop experience and make them highly competitive in a rapidly changing world of agriculture.",
        desc1:
            "Teach trainees the fundamental knowledge and skills required of a farm worker in the high-demand and high paying job in agriculture industry.",
        desc2:
            "Provide Learning environment of close, relevant hands-on experience and meaningful interaction between trainer and trainees instilling values like teamwork, professionalism, and work safety song others.",
        desc3:
            "Continually strive to provide high level of student satisfaction to produce a consistently high rate of graduates certification and placement through partnership with industries.",
        image1: "/images/programs/agricultural/agricultural.jpg",
        image2: "/images/programs/agricultural/agricultural2.jpg",

    },
];
