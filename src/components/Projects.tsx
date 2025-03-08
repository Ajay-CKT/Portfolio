import { FC } from "react";
import taskpulse from "../assets/taskpulse.png";
import cab from "../assets/cab.png";
import weather from "../assets/weather.png";
import currency from "../assets/currency.png";
import imageType from "../assets/image-type.png";
import jobWebsite from "../assets/job-website.png";
import prisonApp from "../assets/prisonApp.png";

const Projects: FC = () => {
  const projectsArr: {
    id: number;
    name: string;
    description: string;
    image: string;
    techUsed: string[];
    gitLink: string;
    deployLink: string;
  }[] = [
    {
      id: 1,
      name: "TaskPulse",
      description:
        "To create, update, notify the task based on priority, share task, I've designed this task management application",
      image: taskpulse,
      techUsed: [
        "MERN",
        "Tailwindcss",
        "JWT",
        "Nodemailer",
        "Web sockets",
        "socket.io",
        "React router",
        "CRUD",
        "MUI - PieChart",
        "Axios",
      ],
      gitLink: "https://github.com/Ajay-CKT/fe-TaskPulse",
      deployLink: "https://ajay-ckt-taskpulse.netlify.app",
    },
    {
      id: 2,
      name: "Cab Management System",
      description:
        "This system has functionalities such as booking management, driver assignment, fare calculation, and reporting.",
      image: cab,
      techUsed: [
        "MERN",
        "Tailwindcss",
        "React router",
        "Axios",
        "Web sockets",
        "socket.io",
        "Firebase",
        "Razorpay API",
        "Google Map API",
      ],
      gitLink: "https://github.com/Ajay-CKT/cab-booking-system",
      deployLink: "",
    },
    {
      id: 3,
      name: "Weather App",
      description:
        "An application that tells the realtime weather based on country name with the help of an API",
      image: weather,
      techUsed: ["React", "API"],
      gitLink: "https://github.com/Ajay-CKT/Weather-App",
      deployLink: "https://ajay-ckt-weather-app.netlify.app",
    },
    {
      id: 4,
      name: "Currency convertor",
      description:
        "An application that allows users to convert one currency to another using real-time exchange rates from an API",
      image: currency,
      techUsed: ["React", "API"],
      gitLink: "https://github.com/Ajay-CKT/Currency-Converter",
      deployLink: "https://ajay-ckt-currency-convertor.netlify.app",
    },
    {
      id: 5,
      name: "Prison Rehab",
      description:
        "A mobile application developed on react native which has the legal, medical supports for undertrail prisoners",
      image: prisonApp,
      techUsed: ["React native", "Firebase"],
      gitLink: "https://github.com/Ajay-CKT/PrisonApp",
      deployLink: "",
    },
    {
      id: 6,
      name: "Image Type Convertor",
      description:
        "An application that uses python tornado to change the extension type of the image from jpeg to png vice versa",
      image: imageType,
      techUsed: ["HTML", "CSS", "Python"],
      gitLink: "https://github.com/Ajay-CKT/Image-Type-Convertor",
      deployLink: "",
    },
    {
      id: 7,
      name: "Job Website",
      description: "A website build to practice the react router with mockend",
      image: jobWebsite,
      techUsed: ["React", "React router", "Tailwindcss"],
      gitLink: "",
      deployLink: "",
    },
  ];
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
      {projectsArr.map((project) => (
        <figure
          key={project.id}
          className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center text-center gap-4"
        >
          <div className="p-2 w-60 h-40 object-contain rounded-md">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full rounded-md"
            />
          </div>
          <figcaption className="text-center leading-tight hover:scale-105 transition-transform cursor-pointer hover:text-secondary">
            {project.name}
          </figcaption>
          <figcaption className="text-center leading-tight text-gray-50 text-sm opacity-50">
            {project.description}
          </figcaption>
          <figcaption className="text-center leading-tight flex justify-center flex-wrap gap-4">
            {project.techUsed.map((tech) => (
              <p
                key={tech}
                className="p-1 border border-secondary text-secondary text-xs rounded-md"
              >
                {tech}
              </p>
            ))}
          </figcaption>
          <figcaption className="text-center leading-tight text-xs">
            <div className="flex flex-row justify-around gap-4">
              {project.gitLink.length > 0 && (
                <a
                  href={project.gitLink}
                  className="hover:underline hover:text-blue-500"
                >
                  GitHub
                </a>
              )}
              {project.deployLink.length > 0 && (
                <a
                  href={project.deployLink}
                  className="hover:underline hover:text-blue-500"
                >
                  Deployed Link
                </a>
              )}
            </div>
          </figcaption>
        </figure>
      ))}
    </article>
  );
};

export default Projects;
