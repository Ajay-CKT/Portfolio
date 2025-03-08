import { FC } from "react";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import linkedIn from "./assets/linkedIn.png";
import phone from "./assets/phone.png";
import medium from "./assets/medium.png";
import github from "./assets/github.png";
import Experience from "./components/Experience";

const Portfolio: FC = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <div className="h-screen bg-night text-primary font-primary overflow-y-scroll relative px-2 space-y-4 custom-scrollbar">
      <header className="w-full flex flex-col md:flex-row justify-center md:justify-around items-center p-4 gap-2">
        <h1 className="text-xl md:text-2xl text-center">
          Hi from{" "}
          <span className="text-5xl md:text-8xl text-stroke text-night uppercase font-secondary">
            Ajay
          </span>
          ,
          <span className="block font-optional">
            check out my <span className="text-secondary">journey</span>
          </span>
        </h1>
        <figure className="rounded-full flex flex-col items-center gap-2">
          <img
            src="/profile.jpg"
            alt="Ajay's profile picture"
            className="rounded-full size-50 md:size-60 object-cover"
          />
          <figcaption className="text-sm">
            <a
              href="mailto:ajayckt917@gmail.com"
              className="hover:text-secondary"
            >
              ajayckt917@gmail.com
            </a>
          </figcaption>
          <figcaption className="flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row justify-center items-center gap-4">
              <a
                href="https://linkedin.com/in/ajay-t-53088b225"
                className="p-1"
              >
                <img
                  src={linkedIn}
                  alt="linkedIn-icon"
                  className="hover:scale-120 transition-transform size-8"
                />
                {}
              </a>
              <a href="https://medium.com/@ajayckt917" className="p-1">
                <img
                  src={medium}
                  alt="Medium-icon"
                  className="hover:scale-120 transition-transform size-8"
                />
                {}
              </a>
              <a href="https://github.com/Ajay-CKT" className="p-1">
                <img
                  src={github}
                  alt="phone-icon"
                  className="hover:scale-120 transition-transform size-8"
                />
                {}
              </a>
              <a href="tel:+919486625917" className="p-1">
                <img
                  src={phone}
                  alt="github-icon"
                  className="hover:scale-120 transition-transform size-8"
                />
                {}
              </a>
            </div>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-secondary rounded-md hover:scale-120 transition-transform"
            >
              Check Resume
            </a>
          </figcaption>
        </figure>
      </header>

      <main className="space-y-4">
        <section className="p-4 flex flex-col gap-4" id="about">
          <h2 className="font-secondary text-xl text-gray-300 px-2 py-1 border border-primary max-w-fit rounded-md hover:text-secondary cursor-pointer hover:scale-120 transition-transform">
            About
          </h2>
          <p className="text-sm">
            <span className="text-secondary text-4xl font-optional">
              "Curiosity{" "}
            </span>{" "}
            ignites the flames of great knowledge, fueling a remarkable journey.
            Below lies a glimpse into{" "}
            <span className="text-secondary font-optional text-2xl"> my </span>{" "}
            own extraordinary quest for understanding."
          </p>
        </section>
        <section className="px-4 space-y-2" id="skills">
          <h2 className="font-secondary text-xl text-gray-300 px-2 py-1 border border-primary max-w-fit rounded-md hover:text-secondary cursor-pointer hover:scale-120 transition-transform">
            Skills
          </h2>
          <p className="text-sm py-2">
            I have hands-on experience with the following{" "}
            <span className="text-secondary text-xl font-optional opacity-100">
              skill sets
            </span>
            :
          </p>
          <Skills />
        </section>
        <section className="px-4 space-y-2" id="experience">
          <h2 className="font-secondary text-xl text-gray-300 px-2 py-1 border border-primary max-w-fit rounded-md hover:text-secondary cursor-pointer hover:scale-120 transition-transform">
            Experience
          </h2>
          <Experience />
        </section>
        <section className="px-4 space-y-2" id="education">
          <h2 className="font-secondary text-xl text-gray-300 px-2 py-1 border border-primary max-w-fit rounded-md hover:text-secondary cursor-pointer hover:scale-120 transition-transform">
            Education
          </h2>
          <Education />
        </section>
        <section className="px-4 space-y-2" id="projects">
          <h2 className="font-secondary text-xl text-gray-300 px-2 py-1 border border-primary max-w-fit rounded-md hover:text-secondary cursor-pointer hover:scale-120 transition-transform">
            Projects
          </h2>
          <Projects />
        </section>
        <section className="px-4 space-y-2" id="achievements">
          <h2 className="font-secondary text-xl text-gray-300 px-2 py-1 border border-primary max-w-fit rounded-md hover:text-secondary cursor-pointer hover:scale-120 transition-transform">
            Hackathons & Contributions
          </h2>
          <Achievements />
        </section>
        <section className="px-4 space-y-2" id="certificates">
          <h2 className="font-secondary text-xl text-gray-300 px-2 py-1 border border-primary max-w-fit rounded-md hover:text-secondary cursor-pointer hover:scale-120 transition-transform">
            Certifications, Badges & Courses
          </h2>
          <Certifications />
        </section>
      </main>
      <footer className="text-xs text-center">
        ©️ <span className="text-secondary">{currentYear}</span>{" "}
        <a
          href="mailto:ajayckt917@gmail.com
        "
        >
          ajayckt917@gmail.com
        </a>
      </footer>
    </div>
  );
};

export default Portfolio;
