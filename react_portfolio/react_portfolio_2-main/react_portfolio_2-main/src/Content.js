// import images
import Hero_person from "./assets/images/Hero/IMG-20221221-WA0008-removebg.png";

import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/IMG-20221223-WA0014.jpg";
import services_logo2 from "./assets/images/Services/IMG-20221223-WA0018.jpg";
import services_logo3 from "./assets/images/Services/IMG-20221223-WA0019.jpg";

import project1 from "./assets/images/projects/img1.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hero/IMG-20221221-WA0011-removebg-preview.png";
import Hireme_person2 from "./assets/images/Hero/IMG-20221221-WA0011-removebg-preview.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    // title: "Politician|Journalist|Business Man|Socialist ",
    title: "SPENSYS ENERGY PRIVATE LIMITED",



    
    // title: "innovation to next level",
    firstName: "RAMESH",
    LastName: "BABU",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "20+",
        text: "Years in Journalist",
      },
      {
        count: "5+",
        text: "Years in Cini Field",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Adobe Photoshop",
        para: "Lorem ipsum text  dummy",
        logo: ps,
      },
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Sketch",
        para: "Lorem ipsum text  dummy",
        logo: sketch,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "GALLERY",
    subtitle: "FEW PHOTOS OF MINE",
    service_content: [
      {
        title: "MET WITH THE GREAT ACTOR MR SARATHKUMAR SIR",
        para: "",
        logo: services_logo1,
      },
      {
        title: "MET ONE OF THE BEST COMEDY ACTOR  MR PANDIYARAJAN SIR ",
        para: "",
        logo: services_logo2,
      },
      {
        title: "MET WITH HANDSOME BROTHER MR SIVAKARTHIKAYEN ",
        para: "",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "Gym Website",
        image: project1,
      },
      {
        title: "Social Media web",
        image: project2,
      },
      {
        title: "Creative Website",
        image: project3,
      },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "ABOUT ME",
    subtitle: "A SMALL BIOGRAPHY",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: " Cinifield 2018 kmrr films international first movie meedum puratchi thalaivar 100yrs of puratchi thalaivar celebration a movie on process kmrr films proudly present. Own mother sister political top level Xmla,Xmp,former minister,former rti commisioner(oneline) dharmapuri district nallampalli taluk, thoppur village- kanyakumari & kashmir national highways.Munusamy father,Kuppusamy grandpa,Kottaiyan senior grandpa,Kullan. Place of Birth  sangagiri taluk,salem dist,Education Chennai st.francis avvr-alwarpet, Gayathri Kindergarden+2. BA public administration, ma Public administration in madras University.Phd Vels university chennai, diploma in tamil Journalism,Diploma in labour Law,Dncc,Post graduate diploma in Public relation.Prefession business man start 2008 la Kmrr Enterprises,Ponni masala 2012,kmrr export import,Kmrss flims International, Ciniosai monthly magazine and Youtube channel.Bascically journalist initialy diploma Completed and Monthly magazine is field Journalist 2000 to Till Now(20 + years),publishing with RNA registration.SRIMAN MUNUSAMY MEMORIAL CHARITABLE TRUST-SOCIAL ACTIVITIES EDUCATION,HEALTH,ETC Remembers dad's passed away in 2007..Bussiness Agriculture based family Ponni masala started and running Succesfully ",
    
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "codeaprogram@gmail.com",
        icon: GrMail,
        link: "mailto:codeaprogram@gmail.com",
      },
      {
        text: "+91 1234 56778",
        icon: MdCall,
        link: "https://wa.me/1234567890",
      },
      {
        text: "codeaprogram",
        icon: BsInstagram,
        link: "https://www.instagram.com/codeaprogram/",
      },
    ],
  },
  
};
