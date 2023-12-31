'use client'
import 'animate.css'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import ReactTyped from 'react-typed'
import pic1 from "./images/pic1.jpg"
import pic2 from "./images/pic2.jpg"
import pic3 from "./images/pic3.jpg"
import pic4 from './images/pic4.jpg'


function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

<script src="https://kit.fontawesome.com/5b312ab430.js" crossorigin="anonymous"></script>

const pics = [
  {
    path: pic1,
  },
  {
    path: pic4
  },
  {
    path: pic3
  },
  {
    path: pic2
  },
]

const pojects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website that I built for myself using some front-end libraries, I deployed it using GitHub Pages",
    technologies: "Next.js , Tailwind CSS and other front-end libraries",
    link:"https://portfolio1-iota-lovat.vercel.app"
  },
  {
    title: "Personal Blog",
    description: "A blogging website that I built using FireBase and front-end libraries where you can into my personal philosphies, my expiriences through life and my poetry. The project is not yet deployed, but will be soon enough.",
    technologies: "Next.js , MongoDB and other front-end libraries",
    link:"https://github.com/k1ttu/blog1"
  },
  {
    title: "Weather Flake",
    description: "A web application that implements Weather API to provide users with real time weather updates.",
    technologies: "React.js , Weather API",
    link:"https://weatherflake.vercel.app"
  }
]

const RevealOnScrollDown = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity delay-500 duration-1000
      ${isVisible ? `opacity-100 animate__animated animate__fadeInUp` : `opacity-0`
    }`;
  setTimeout(() => { }, 10000)
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};
const RevealOnScrollLeft = ({ children }, styles) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  const classes = `transition-opacity delay-500 duration-[1000ms]
      ${isVisible ? `animate__animated animate__fadeInLeft animate__delay-1s` : `opacity-0`
    }`;

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

const skillSet = [
  {
    name: "Java",
    id: 'java'
  },
  {
    name: "HTML5",
    id: 'html'
  },
  {
    name: "JavaScript",
    id: "javascript"
  },
  {
    name: "TailWind CSS",
    id: "tailwind"
  },
  {
    name: "React JS",
    id: "react"
  },
  {
    name: "Database",
    id: "database"
  }
]
const headerRender = (index, name) => {
  return (
    <div className={"text-2xl font-bold text-gray-300 flex align-bottom items-center header-renderer"}>
      <span className='text-emerald-300 font-mono font-normal text-xl mr-2 align-middle'>0{index}. </span> {name}
    </div>
  )
}

const navLinksDB = [
  {
    title: "About",
    id: "about"
  },
  {
    title: "Projects",
    id: "projects"
  },

  {
    title: "Contact Me",
    id: "contact"
  }
]

const sectionHeaders = [
  {
    name: "About Me",
    id: "about"
  },
  {
    name: "Projects",
    id: "projects"
  },
  {
    name: ""
  }
]

const homeLinks = [

  {
    name: "My LinkedIn",
    link: "https://www.linkedin.com/in/chirag-sharma-0551a1260/"
  }
]
export default function Home() {
  const [toogle, setToogle] = useState(false);
  const responsiveMenu = " ";
  const button = "w-50 h-10 mx-10 align-center flex justify-center hover:text-gray-400 hover:bg-emerald-300 border-2 border-emerald-300 bg-transparent";
  const navLink = "text-gray-400 hover:text-emerald-300 cursor-pointer text-sm  animate__animated animate__fadeInDownBig";
  const navRight = ``;
  const home = "";
  const [name, setName] = useState("");
  const image = "tansition hover:-translate-x-2 hover:-translate-y-2  hover:shadow-xl h-auto w-2/3 md:h-fit md:w-2/3";
  const source = pics.at(randomIntFromInterval(0, 3)).path;
  return (
    <div>
      <nav className='font-mono' id="website">
        <div className="max-w-full flex justify-between sm:py-10 sm:px-8 md:py-10 md:px-16 sm: text-[16px] py-8 px-8 sm:mx-0">
          <a href="#website" className={navLink + " md:text-gray-400 sm:text-emerald-300 sm:font-extrabold font-extrabold italic sm:italic "} target='_blank'>Chirag</a>
          <ul className='list-none md:flex hidden align-middle'>
            {navLinksDB.map((item, index) => (
              <li key={index} className={`${index == navLinksDB.length - 1 ? "mr-0" : "mr-5"} animate__animated animate__fadeInDownBig animate__delay-${index}s animate__fast`}>
                <a className={navLink + ""} href={`#${item.id}`} ><span className='text-emerald-300' target="_blank">0{index + 1}. </span> {item.title} </a>
              </li>
            ))}
            <li><a className={"link h-7 w-10 border-[1px] px-7 pt-3 ml-4 text-sm border-emerald-300 rounded-md text-emerald-300 font-light transition hover:text-blue-950 hover:font-bold cursor-pointer hover:bg-emerald-300 pb-3  content-center items-center font-mono"} href="#" >
              Resume
            </a>
            </li>
          </ul>

        </div>
      </nav>
      <div className='align-top flex flex-1'>
        <main>
          <div className={home + " flex-1 px-5 md:mx-32 sm:mx-0 mx-6 md:py-40 sm:py-24 my-8 py-20 "} >
            <h1 className="lg:text-6xl sm:text-5xl text-4xl font-bold text-gray-300 cursor-default animate__animated animate__fadeInLeft animate__faster animate__delay-0s">
              Hello, I'm <ReactTyped startDelay={1000} className='text-emerald-300 hover:underline ' typeSpeed={70} cursorChar='' strings={["Chirag", "A Programmer", "A Developer", "A Writer", "An Artist", "Chirag"]} backSpeed={70} />.<span className='font-light animate__animated animate__infinite animate__flash '>|</span><br />
              <div className='my-3'></div>
              <span className='text-gray-400 '>And I like to learn new things</span>
            </h1>


            <p className='text-gray-400 text-[18px] w-2/3 py-8 animate__animated animate__fadeInUp animate__faster animate__delay-1s'>I'm a front-end web and application developer, currently pursuing Bachelor's in Mathematics and Computing Engineering from <span className="font-bold">Delhi Technological University.</span></p>
            <div className='flex text-center items-center align-middle animate__animated animate__fadeInUp animate__faster animate__delay-1s'>
              {homeLinks.map((item, index) => (
                <a key={index} className={"link w-44 h-11 border-[1px] border-emerald-300 rounded-md text-emerald-300 font-light transition hover:-translate-x-2 hover:-translate-y-2 pt-2 hover:shadow-xl mr-8 my-2 content-center items-center font-mono"} href={item.link} target='_blank'>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <RevealOnScrollDown>
            <div id="about" className='md:mx-40 mx-12 my-10'>
              {headerRender(1, "About Me")}
              <div className='md:flex lg:justify-evenly lg:align-top'>
                <div className='text-gray-400 text-lg py-10 content-center justify-center md:w-1/2 font-light' >
                  <p className='text-left'>
                    Hello. I'm Chirag, I'm currently pursuing Bachelor's in Mathematics and Computing Engineering from Delhi Technological University. Being a tech-enthusiast, I've always wanted to work with fascinating computer technologies and become a software engineer. Currently, I'm working on my competetive Programming skills and web and mobile development.<br /><br />
                    My hobbies include Reading, Writing and poetry, you can check out my blog. Apart from that I have a keen interest in music and I am a solo Guitarist.<br /><br />
                    My current skill set includes the following:
                  </p>

                  <div className='flex justify-start'>
                    <ul className='my-5 mr-10'>
                      {
                        skillSet.map((item, index) => {
                          if (index < skillSet.length / 2) {
                            return (
                              <div key={index} id={item.id} className='text-sm font-mono'><span className='text-emerald-300 my-2 text-lg'>▹</span> {item.name}</div>
                            )
                          }
                          return null;
                        })
                      }
                    </ul>
                    <ul className='my-5'>
                      {
                        skillSet.map((item, index) => {
                          if (index >= skillSet.length / 2) {
                            return (
                              <div key={index} id={item.id} className='text-sm font-mono'><span className='text-emerald-300 my-2 text-lg'>▹</span> {item.name}</div>
                            )
                          }
                          return null;
                        })
                      }
                    </ul>
                  </div>

                </div>
                <div className='flex justify-around lg:w-[700px] md:w-[500px] md:my-10'>
                  <Image src={source} alt={"image not found"} className="transition hover:-translate-x-2 hover:-translate-y-2  hover:shadow-xl h-auto w-2/3 md:h-fit md:w-2/3" />

                </div>

              </div>
            </div>
          </RevealOnScrollDown>


          <RevealOnScrollDown>
            <div className='md:mx-40 mx-12 my-20 font-light text-lg ' id="projects">
              {headerRender(2, "What I've Built")}
              <p className='text-gray-400 text-[18px] py-8'>
                I like to build website and applications that can fill a gap between the requirements of the people and the softwares which are capable of fulfilling those requirements. Following is a list of the projects that I've build so far, and also an overview of what I aspire to build next.
              </p>
              <RevealOnScrollLeft>
                <ul className='flex flex-wrap justify-evenly'>
                  {pojects.map((item, index) => (
                    <li key={index} className='lg:w-1/3 sm:w-1/2  p-5 w-4/5 hover:-translate-y-3 transition'>
                      <div className=' project-container flex flex-col '>
                        <div className='  lg:h-96 sm:h-68 flex flex-col align-middle py-5  items-center '>
                          <Link className='title text-2xl font-semibold text-gray-300 hover:underline hover:text-emerald-300 cursor-pointer' href={item.link}>
                            {item.title}
                          </Link>
                          <div className='px-5 py-6 h-52 text-base self-center text-gray-400'>
                            {item.description}
                          </div>
                        </div>
                        <div className='px-5 pb-5'>
                          <code className=' align-bottom self-end text-sm opacity-70  text-gray-400'>
                            {item.technologies}
                          </code>
                        </div>
                      </div>
                    </li>

                  ))}


                </ul>
              </RevealOnScrollLeft>

            </div>
          </RevealOnScrollDown>


          <RevealOnScrollDown>
            <div className='md:mx-40 mx-12 my-20 flex align-center flex-col items-center' id="contact">
              {headerRender(3, "Get in Touch!")}

              <div className=' flex items-center flex-col align-center md'>

                <h1 className='text-gray-400 text-lg py-10 content-center justify-center font-light text-center'>
                  If you'd like to connect or have any doubts regarding my work, you can send me a mail (I always appreciate a professional looking mail directed to me personally), or add me up on one of my socials, I'm always down for conversations and getting to know new people.
                </h1>

                <a className='link w-44 h-16 text-center pt-2 border-[1px] border-emerald-300 rounded-md text-emerald-300 font-light transition hover:-translate-x-2 hover:-translate-y-2 hover:shadow-xl mr-8 my-2 content-center items-center font-mono' href="mailto:chirag.kun@icloud.com"> Drop me A Mail here!</a>

              </div>


              <div className='my-10 flex justify-evenly'>
                <ul>
                  <li className='flex'>
                    <a href="https://www.linkedin.com/in/chirag-sharma-0551a1260/" target='_blank'>
                      <svg className="fill-gray-400 h-6 mx-4 hover:fill-emerald-300 transition-all" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
                    </a>
                    <a href="https://github.com/k1ttu" target='_blank'>
                      <svg className="fill-gray-400 h-6 mx-4  hover:fill-emerald-300 transition-all" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                    </a>
                    <a href="https://medium.com/@kxtmrphk" target='_blank'>
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" className='fill-gray-400 h-6 mx-4  hover:fill-emerald-300 transition-all'><path d="M180.5,74.262C80.813,74.262,0,155.633,0,256S80.819,437.738,180.5,437.738,361,356.373,361,256,280.191,74.262,180.5,74.262Zm288.25,10.646c-49.845,0-90.245,76.619-90.245,171.095s40.406,171.1,90.251,171.1,90.251-76.619,90.251-171.1H559C559,161.5,518.6,84.908,468.752,84.908Zm139.506,17.821c-17.526,0-31.735,68.628-31.735,153.274s14.2,153.274,31.735,153.274S640,340.631,640,256C640,171.351,625.785,102.729,608.258,102.729Z" /></svg>
                    </a>
                  </li>
                </ul>

              </div>

            </div>
          </RevealOnScrollDown>



        </main>

      </div >


      <div className='text-gray-400 text-base items-center flex justify-center cursor-pointer'>
        <a className='hover:text-emerald-300 items-center' target='_blank' href="https://www.linkedin.com/in/chirag-sharma-0551a1260/">
          Developed By Chirag Sharma &#169; 2023
        </a>

      </div>
    </div >

  )
}
