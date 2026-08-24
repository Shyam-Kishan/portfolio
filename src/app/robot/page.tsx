export default function Robot() {
    return (
        <main className="flex flex-col items-center gap-8 px-6 py-16">
            <h1 className="text-4xl md:text-5xl">Autonomous Robot</h1>

            <section className="max-w-2xl">
                <h2 className="text-3xl mb-2">Why I Built This</h2>
                <p>
                    Coming out of my Logic Design class and some smaller
                    Arduino projects, I wanted to build something more ambitious - a real
                    embedded systems project rather than another breadboard exercise. Robotics has
                    always interested me because it sits right at the intersection of hardware and 
                    software, and this is my first real step into that space.
                </p>
            </section>

            <section className="max-w-2xl">
                <h2 className="text-3xl mb-2">How it Works</h2>
                <p>
                    The robot has manual and automatic modes. Manual mode is controlled by a web 
                    application that I designed which also showcases basic telemetry including time, 
                    robot's mode, and distance readings. Automatic mode follows the Bug 1 Algorithm 
                    that I developed where the robot will move forward until it detects an obstacle 
                    40 cm away, which is where it uses its data to determine which direction has the 
                    most space, and turns towards that direction. Ultimately, the robot stays parallel 
                    to a wall. 
                </p>
            </section>

            <section className="max-w-2xl">
                <div className="flex flex-col gap-2">

                    <h2 className="text-3xl mb-2">Challenges</h2>
                    <h3 className="text-2xl">1. Sensor Noise</h3>
                    <p>
                        The ultrasonic sensor I used was cheap and therefore unreliable. My readings without
                        any filtration system were inaccurate because the sensor would occasionally spike
                        or drop, causing my robot to behave unexpectedly. So I introduced EMA to help create
                        consistent and reliable readings, leading to a more behaviorally accurate robot. 
                    </p>

                    <h3 className="text-2xl">2. Non-blocking Timing</h3>
                    <p>
                        Previous versions of my robot followed a "pause-think-go" behavior, which I did
                        not like because it made my robot seem sluggish, slow, and overall unimpressive.
                        This is where I learned and deviated from blocking to non-blocking code in Arduino by
                        switching timing functions from `delay()` to `millis()` in Arduino, allowing for my
                        robot to constantly "think" while moving, creating a more reactive and impressive robot. 
                    </p>

                    <h3 className="text-2xl">3. Telemetry Byte-Stream</h3>
                    <p>
                        My distance readings were not being displayed correctly on my web app because the Serial 
                        print lines were much different than the Serial data from the bytestream from the robot 
                        to the web app. To fix this, I created my own framing protocol to ensure robust
                        communication between the web app and the Arduino.
                    </p>
                </div>
            </section>

            <section className="w-full max-w-2xl">
                <h2 className="text-3xl mb-2">Tech Stack</h2>
                <p>
                    C++ · Arduino · Python · Flask · JavaScript · Embedded Systems · Ultrasonic Sensing
                </p>
            </section>

            <section className=" w-full max-w-2xl">
                <a href="https://github.com/Shyam-Kishan/Sentinel-Autonomous-Obstacle-Avoiding-Robot"
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