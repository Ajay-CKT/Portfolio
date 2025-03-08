import { FC } from "react";
import guvi from "../assets/guvi.png";
import postman from "../assets/postman.png";
import basics from "../assets/react-basics.png";
import advance from "../assets/react-advanced.png";
import ccna from "../assets/ccnav7.png";
import java from "../assets/java.png";

const Certifications: FC = () => {
  const certificationsArr: {
    id: number;
    name: string;
    description: string;
    vendor: string;
    image: string;
  }[] = [
    {
      id: 1,
      name: "IIT-M Pravartak Certified Full Stack Development Course",
      description:
        "Completed 3 months course on MERN stack from GUVI's zen program with hands-on experience of tasks provided by the program",
      vendor: "GUVI",
      image: guvi,
    },
    {
      id: 2,
      name: "React Basics",
      description:
        "Completed 4 weeks module on react basics from coursera platform",
      vendor: "Meta [ coursera ]",
      image: basics,
    },
    {
      id: 3,
      name: "React Advanced",
      description:
        "Completed 4 weeks modules on react advanced from coursera patform",
      vendor: "Meta [ courser ]",
      image: advance,
    },
    {
      id: 4,
      name: "CCNAv7: Introduction to Networks",
      description: "A program conducted by Naan Mudhalvan scheme",
      vendor: "CISCO",
      image: ccna,
    },
    {
      id: 5,
      name: "Oracle Java Foundations",
      description:
        "A badge upon completion of the foundation in java with a passing score above 80%",
      vendor: "Oracle",
      image: java,
    },
    {
      id: 6,
      name: "Postman API Fundamentals Student Expert",
      description: "A badge from postman for completing the student program",
      vendor: "Postman",
      image: postman,
    },
  ];
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
      {certificationsArr.map((certification) => (
        <figure
          key={certification.id}
          className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center text-center gap-4"
        >
          <div className="p-2 w-50 h-40 object-contain rounded-md">
            <img
              src={certification.image}
              alt={certification.name}
              className="w-full h-full rounded-md"
            />
          </div>
          <figcaption className="text-center leading-tight text-secondary hover:scale-105 transition-transform cursor-pointer">
            {certification.name}
          </figcaption>
          <figcaption className="text-center leading-tight text-sm opacity-50">
            {certification.description}
          </figcaption>
        </figure>
      ))}
    </article>
  );
};

export default Certifications;
