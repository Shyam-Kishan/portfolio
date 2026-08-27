import Image from "next/image";

export default function Home() {
  return (
    <main>

      <section id="home" 
        className="flex flex-col items-center min-h-screen gap-4 px-4 py-30">
        <strong className="text-4xl md:text-6xl">Shyam Kishan</strong>

        <h2 className="text-2xl md:text-3xl">Computer Engineering Student</h2>

        <p className="text-xl max-w-xl">
          I enjoy understanding how things work, solving difficult
          problems, and turning ideas into working software and hardware.
        </p>

        <div className="flex items-center gap-4">
          <a href="#projects">[ View My Projects ]</a>

          <a href="#about">[ About Me ]</a>
        </div>

      </section>

      <section id="education" className="flex flex-col items-center py-30 min-h-screen gap-4">
        <strong className="text-4xl ">Education</strong>

        <div className="flex flex-col md:flex-row items-center px-5">
          <div className="flex flex-col md:flex-row items-center w-full max-w-[700px] gap-4">
            <Image
              src="/ucsc_logo.svg"
              alt="UCSC logo"
              width={150}
              height={150}
            />
            <div>
              <h3 className="text-[25px] font-bold">University of California, Santa Cruz</h3>
              <h4 className="text-[22px] font-bold text-blue-400">B.S. in Computer Engineering</h4>
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

      <section id="projects" className="flex flex-col items-center py-30 min-h-screen gap-4">

        <strong className="text-4xl">Featured Projects</strong>

        <div className="flex flex-col md:flex-row items-center gap-8 px-5">
          <div className="w-full max-w-md p-6 rounded-xl border shadow-sm">
            <h3 className="text-2xl">Autonomous Robot</h3>
            <p>C++ · Arduino · Embedded Systems</p>
            <p>An autonomous robot that avoids obstacles by constantly
              scanning its surroundings with an ultrasonic sensor.
            </p>
            <a href="/robot">[ View Project ]</a>
          </div>

          <div className="w-full max-w-md p-6 rounded-xl border shadow-sm">
            <h3 className="text-2xl">Multithreaded HTTP/1.1 Server</h3>
            <p>C · POSIX Threads · HTTP/1.1</p>
            <p>A multithreaded HTTP server that supports GET and PUT methods,
              while also producing error codes and messages.
            </p>
            <a href="/server">[ View Project ]</a>
          </div>
        </div>

      </section>

      <section id="about" className="flex flex-col items-center py-30 min-h-screen gap-4">
        <strong className="text-4xl">About Me</strong>

      </section>
    </main>
  );
}
