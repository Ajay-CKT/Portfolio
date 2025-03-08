import { FC } from "react";
import kgisl from "../assets/kgisl.jpg";
import bmc from "../assets/bmc.jpeg";

const Education: FC = () => {
  const educationArr: {
    name: string;
    image: string;
    specialization: string;
    branch: string;
    courseStart: number;
    courseEnd: number;
  }[] = [
    {
      name: "KGiSL Institute of Technology, Coimbatore",
      image: kgisl,
      specialization: "B.E",
      branch: "Computer Science and Engineering",
      courseStart: 2020,
      courseEnd: 2024,
    },
    {
      name: "BMC Matric. Hr. Sec. School, Thoothukudi",
      image: bmc,
      specialization: "HSC",
      branch: "",
      courseStart: 2019,
      courseEnd: 2020,
    },
    {
      name: "BMC Matric. Hr. Sec. School, Thoothukudi",
      image: bmc,
      specialization: "SSLC",
      branch: "",
      courseStart: 2017,
      courseEnd: 2018,
    },
  ];
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
      {educationArr.map((institute) => (
        <figure
          key={institute.name}
          className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center text-center gap-4"
        >
          <div className="p-2 h-40 w-50 object-contain rounded-md">
            <img
              src={institute.image}
              alt={institute.name}
              className="w-full h-full rounded-md"
            />
          </div>
          <figcaption className="text-center leading-tight hover:scale-105 transition-transform cursor-pointer hover:text-secondary">
            {institute.name}
          </figcaption>
          <figcaption className="text-center leading-tight">
            <span className="text-secondary">{institute.specialization}</span>
            {institute.branch.length > 0 && " in " + institute.branch}
          </figcaption>
          <figcaption className="text-center leading-tight">
            <span>{institute.courseStart}</span> {" - "}
            <span className="text-secondary">{institute.courseEnd}</span>
          </figcaption>
        </figure>
      ))}
    </article>
  );
};

export default Education;
