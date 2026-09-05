import Image from "next/image";
import { SiPython, SiCplusplus, SiC, SiGithub, SiLinux, 
         SiDocker, SiReact, SiHtml5, SiJavascript, 
         SiNextdotjs, SiFlask, SiTypescript} from "react-icons/si";


export default function Home() {
  return (
    <main>

      <section id="home" 
        className="flex flex-col items-center min-h-screen justify-center">
        <div className="flex flex-col md:flex-row items-center gap-10 px-5 md:px-50 font-mono">
          <Image
            src="/IMG_4720.png"
            alt="Shyam Kishan Profile Picture"
            width={300}
            height={300}
          />

          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-6xl font-bold">Shyam Kishan</h1>
            <h2 className="text-2xl md:text-4xl">Computer Engineering Student</h2>
            <p>
              I enjoy understanding how things work, solving difficult
              problems, and turning ideas into working software and hardware.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" 
               className="flex flex-col items-center justify-center py-30 min-h-screen 
                          font-mono gap-10">
        <h2 className="text-4xl font-bold">Projects</h2>

        <div className="flex flex-col md:flex-row items-center gap-8 px-5">
          <div className="flex flex-col gap-2 w-full max-w-lg p-4 rounded-xl border">
            <h3 className="text-2xl text-center">Autonomous Robot</h3>
            <p>C++ · Python · Flask · HTML · CSS · Javascript</p>
            <p className="font-sans">A full-stack robotics system that enables real-time
              control and monitoring of an autonomous obstalce-avoiding robot through a web-based dashboard.
            </p>
            <a href="/robot"
               className="text-center underline hover:text-neutral-400 transition-colors duration-500">View Project</a>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-lg p-4 rounded-xl border">
            <h3 className="text-2xl text-center">Multithreaded HTTP/1.1 Server</h3>
            <p>C · POSIX Threads</p>
            <p className="font-sans">A multithreaded HTTP server that supports GET and PUT methods,
              while also producing error codes and messages.
            </p>
            <a href="/server"
              className="text-center underline hover:text-neutral-400 transition-colors duration-500">View Project</a>
          </div>
        </div>

      </section>

      <section id="skills"
                className="flex flex-col min-h-screen justify-center gap-8 font-mono px-5 py-10">
        <div className="flex flex-col items-center gap-8 py-10">

          <h2 className="text-4xl font-bold">Skills</h2>

          <div className="flex flex-col w-full max-w-xl gap-10">
            <h3 className="text-2xl underline">Languages</h3>
            <div className="grid grid-cols-3 md:grid-cols-6 text-green-400 gap-4 text-[14px] sm:text-lg">
              <div className="flex flex-col items-center gap-4">
                <SiC size={40} />
                <p>C</p>
              </div>

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiCplusplus size={40}/>
                <p>C++</p>
              </div>
              
              <div className="flex flex-col items-center gap-4 font-sans">
                <SiPython size={40}/>
                <p>Python</p>
              </div>
              
              <div className="flex flex-col items-center gap-4 font-sans">
                <SiHtml5 size={40}/>
                <p>HTML</p>
              </div>

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiJavascript size={40}/>
                <p>Javascript</p>
              </div>

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiTypescript size={40}/>
                <p>Typescript</p>
              </div>
            </div>

            <h3 className="text-2xl underline">Frameworks & Libraries</h3>
            <div className="grid grid-cols-3 text-green-400 gap-4 text-[14px] sm:text-lg">

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiReact size={40}/>
                <p>React</p>
              </div>

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiNextdotjs size={40}/>
                <p>Next.js</p>
              </div>

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiFlask size={40}/>
                <p>Flask</p>
              </div>            
              
            </div>
            <h3 className="text-2xl underline">Tools</h3>
            <div className="grid grid-cols-3 text-green-400 gap-4 text-[14px] sm:text-lg">

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiGithub size={40}/>
                <p>Git & GitHub</p>
              </div>

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiLinux size={40}/>
                <p>Linux</p>
              </div>

              <div className="flex flex-col items-center gap-4 font-sans">
                <SiDocker size={40}/>
                <p>Docker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="flex flex-col items-center justify-center py-30 min-h-screen gap-10 font-mono">
        <h2 className="text-4xl font-bold">Education</h2>

        <div className="flex flex-col md:flex-row items-center px-5">
          <div className="flex flex-col md:flex-row items-center w-full max-w-xl gap-10">
            <Image
              src="/ucsc_logo.svg"
              alt="UCSC logo"
              width={150}
              height={150}
            />
            <div>
              <h3 className="text-[25px] font-bold">University of California, Santa Cruz</h3>
              <h4 className="text-[22px] font-bold text-green-400">B.S. in Computer Engineering</h4>
              <p>Sep 2023 - Present</p>
              <div className="flex flex-row gap-1">
                <p className="font-bold">GPA: </p>
                <p>3.58/4.00</p>
              </div>
                <p className="font-bold underline">Relevant Coursework</p>
                <p className="italic text-neutral-500">
                  Data Structures and Algorithms, 
                  Principles of Computer System Design,
                  Logic Design,
                  Computer Architecture
                </p>
              </div>
            </div>
        </div>
      </section>

      <section id="about" className="flex flex-col items-center py-30 min-h-screen justify-center gap-4">
        <h2 className="text-4xl font-bold font-mono">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 px-5">
            <div className="flex flex-col md:flex-row items-center w-full p-6 gap-4">
              <Image
                src="/IMG_9581.png"
                alt="Shyam Kishan Full Body Photo"
                width={300}
                height={300}
              />

              <div className="flex flex-col items-center w-full gap-4">
                <p>
                  Outside of the classroom, I am a normal guy who is interested in building and messing 
                  with computers, which is where I fell in love with the Computer Engineering field. 
                  When I was in middle school, I badly wanted a gaming computer so I can have the 
                  ultimate gaming experience. Obviously I didn't have the funds for such a luxury so 
                  I would watch a bunch of YouTube videos of these people building computers, 
                  setting it up with the proper software, going into the BIOS, 
                  and running benchmarks on popular games. When I'd watch these videos, I was not only 
                  intrigued, I was inspired because watching these YouTubers build computers made me want 
                  to learn everything I possibly can about how a computer works. I am also interested in 
                  competitive shooter video games, soccer, and football. My favorite soccer and football
                  teams are Manchester City and the 49ers.
                </p>

                <p>
                  As a current undergraduate, I am hoping to just get my foot into the world of 
                  technology by pursuing entry-level roles such as internships. I am most interested in 
                  Embedded Systems and Firmware Engineering fields, but I am also deeply passionate 
                  about Software Engineering. Graduate school is a backup in case I don't end 
                  up getting any sort of experience in the fields I am interested in, which is why I 
                  don't have a set goal as to which school I would pursue if I were to continue Grad 
                  school. However, if I end up falling short of my main plan, I am still very excited
                  to further my education and continue building myself as a Computer Engineer.
                </p>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}
