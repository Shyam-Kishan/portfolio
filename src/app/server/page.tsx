import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Multithreaded HTTP/1.1 Server",
    description: "A multithreaded HTTP/1.1 server in C using a dispatcher/worker thread pool and per-URI reader-writer locks to safely handle concurrent GET and PUT requests.",
};

export default function Server() {
    return (
        <main className="flex flex-col items-center gap-8 px-6 py-16">
            <h1 className="text-4xl md:text-5xl">Multithreaded HTTP/1.1 Server</h1>

            <section className="max-w-2xl">
                <h2 className="text-3xl mb-2">Why I Built This</h2>
                <p>
                    This server was built for my Principles of Computer Systems Design course,
                    but what stuck with me was the idea of complexity and optimization.
                    This project was one of my first projects where I learned about concurrent
                    programming, and I was interested in the fact that with the right
                    synchronization primitives and a clear plan, you can take one system and make 
                    it more efficient.
                </p>
            </section>

            <section className="max-w-2xl">
                <h2 className="text-3xl mb-2">How it Works</h2>
                <div className="flex flex-col gap-4">
                    <p>
                        The server uses a thread pool architecture: a dispatcher thread accepts incoming
                        connections and pushes them onto a shared queue, while a configurable number of
                        worker threads pull from that queue and handle requests independently. This avoids
                        the overhead of spinning up a new thread for every single connection. 
                    </p>

                    <p>
                        For safety, each file (URI) has its own reader-writer lock - multiple clients
                        can read the same file simultaneously, but a write locks it exclusively, preventing
                        race conditions when one client is uploading while another is reading. Incoming 
                        requests are validated with regex against the expected "METHOD URI HTTP/1.1" format,
                        and malformed requests are rejected early with the appropriate HTTP error code. GET
                        requests acquire a reader lock and stream the file back in chunks; PUT requests acquire
                        a writer lock, validate the "Content-Length" header, and write the body to disk, handling
                        partial reads and large payloads along the way.
                    </p>
                </div>
            </section>

            <section className="max-w-2xl">
                <div className="flex flex-col gap-2">

                    <h2 className="text-3xl mb-2">Challenges</h2>
                    <h3 className="text-2xl">Reader-Writer Lock Deadlock</h3>
                    <p>
                        While testing the server under concurrent load, I ran into hangs - the
                        server would freeze whenever multiple requests came in at once. The root 
                        cause traced back to my reader-writer lock: a writer thread wasn't releasing 
                        the lock correctly, which meant waiting reader threads never got access. 
                        It was a mix of a logic bug (a code path that skipped the unlock) and a deeper 
                        gap in how I understood lock ownership should be managed. Fixing it meant rethinking
                        my locking logic more carefully rather than patching around the symptom.
                    </p>
                </div>
            </section>

            <section className="w-full max-w-2xl">
                <h2 className="text-3xl mb-2">Tech Stack</h2>
                <p>
                    C · POSIX Threads · Reader-Writer Locks · HTTP/1.1 · 
                    Socket Programming · Regex
                </p>
            </section>

            <section className=" w-full max-w-2xl">
                <a href="https://github.com/Shyam-Kishan/Multithreaded-HTTP-Server"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl mb-2 underline hover:text-neutral-400 
                    transition-colors duration-500">
                    Project on GitHub
                </a>
            </section>
        </main>
    )
}