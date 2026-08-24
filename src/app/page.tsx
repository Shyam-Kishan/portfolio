export default function Home() {
  return (
    <main>

      <section className="flex flex-col items-center min-h-screen gap-4 px-4 py-40">
        <h1 className="text-4xl md:text-6xl">Shyam Kishan</h1>

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

      <section id="projects" className="flex flex-col items-center justify-center min-h-screen gap-4">

        <h2 className="text-2xl md:text-3xl">Featured Projects</h2>
        
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
    </main>
  );
}
