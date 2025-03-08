import { FC } from "react";
import biome from "../assets/biome.png";
import aws from "../assets/aws.png";
import debug from "../assets/debug.png";
import blind from "../assets/blind.png";
import donate from "../assets/donate.png";

const Achievements: FC = () => {
  const achievementsArr: {
    id: number;
    name: string;
    description: string;
    image: string;
  }[] = [
    {
      id: 1,
      name: "BIOME",
      description: "Hackathon at SNS Institute of technology, Coimbatore",
      image: biome,
    },
    {
      id: 2,
      name: "AWS DeepRacer",
      description:
        "48 hours non-stop bootcamp with a moto of learn through competition",
      image: aws,
    },
    {
      id: 3,
      name: "Blind Coding",
      description:
        "An event that allows coders to turn-off the monitor and code with the blank screen.",
      image: blind,
    },
    {
      id: 4,
      name: "Code Debugger",
      description:
        "Participated with a team mate to solve the bugs in the coding problems/pseudo codes",
      image: debug,
    },
    {
      id: 5,
      name: "Book Donation",
      description: "Book donated to lover's club donation camp",
      image: donate,
    },
  ];
  return (
    <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
      {achievementsArr.map((achievement) => (
        <figure
          key={achievement.id}
          className="bg-gray-900 p-4 rounded-lg shadow-md flex flex-col items-center text-center gap-4"
        >
          <div className="p-2 w-60 h-40 object-contain rounded-md">
            <img
              src={achievement.image}
              alt={achievement.name}
              className="w-full h-full rounded-md"
            />
          </div>
          <figcaption className="text-center leading-tight text-secondary hover:scale-105 transition-transform cursor-pointer">
            {achievement.name}
          </figcaption>
          <figcaption className="text-center leading-tight text-sm opacity-50">
            {achievement.description}
          </figcaption>
        </figure>
      ))}
    </article>
  );
};

export default Achievements;
