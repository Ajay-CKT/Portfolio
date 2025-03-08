import { FC, useState } from "react";

const internshipsArr: {
  id: number;
  company: string;
  role: string;
  duration: string;
}[] = [
  {
    id: 1,
    company: "OneYes InfoTech Solutions",
    role: "MERN Stack Developer Intern",
    duration: "Aug 2024 - Sept 2024",
  },
  {
    id: 2,
    company: "1Stop Ai",
    role: "Front-End Development Intern",
    duration: "Oct 2023 - Nov 2023",
  },
];

const Experience: FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
      {internshipsArr.map((internship) => (
        <div
          key={internship.id}
          className="p-4 rounded-md flex flex-row items-center text-left gap-6"
        >
          <div
            className={`w-1 h-26 rounded-md transition-colors ${
              activeId === internship.id ? "bg-secondary" : "bg-gray-500"
            }`}
          ></div>
          <div
            onMouseEnter={() => {
              setActiveId(internship.id);
            }}
            onMouseLeave={() => {
              setActiveId(null);
            }}
            className="space-y-2"
          >
            <h3 className="text-primary cursor-pointer">
              {internship.company}
            </h3>
            <p className="text-secondary">{internship.role}</p>
            <p className="text-gray-500 text-xs font-secondary">
              {internship.duration}
            </p>
          </div>
        </div>
      ))}
    </article>
  );
};

export default Experience;
