import { FC } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import json from "../assets/json.png";
import java from "../assets/javaIcon.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import express from "../assets/express.png";
import node from "../assets/node.png";
import gcp from "../assets/gcp.png";
import nodemailer from "../assets/nodemailer.png";
import restfulapi from "../assets/restAPI.jpg";
import razorpay from "../assets/razorpay.svg";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import code from "../assets/code.png";
import firebase from "../assets/firebase.png";
import mongoose from "../assets/mongoose.png";
import mongodb from "../assets/mongoDB.png";
import jwt from "../assets/jwt.png";
import cloudinary from "../assets/cloudinary.svg";
import npm from "../assets/npm.png";
import gmap from "../assets/gmap.png";
import mern from "../assets/mern.png";
import websocket from "../assets/websocket.jpeg";
import socket from "../assets/socket.svg";
import tailwind from "../assets/tailwind.jpeg";
import axios from "../assets/axios.png";

const Skills: FC = () => {
  const skillsArr: { name: string; image: string }[] = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "Node.js",
      image: node,
    },
    {
      name: "Express",
      image: express,
    },
    {
      name: "MongoDB",
      image: mongodb,
    },
    {
      name: "Java",
      image: java,
    },
    {
      name: "Git",
      image: git,
    },
    {
      name: "GitHub",
      image: github,
    },
    {
      name: "Tailwindcss",
      image: tailwind,
    },
    {
      name: "MERN Stack",
      image: mern,
    },
    {
      name: "Websockets",
      image: websocket,
    },
    {
      name: "axios",
      image: axios,
    },
    {
      name: "RESTful APIs",
      image: restfulapi,
    },
    {
      name: "JSON",
      image: json,
    },
    {
      name: "JWT",
      image: jwt,
    },
    {
      name: "Google Cloud Platform",
      image: gcp,
    },
    {
      name: "Firebase",
      image: firebase,
    },
    {
      name: "Google Map API",
      image: gmap,
    },
    {
      name: "Problem Solving",
      image: code,
    },
    {
      name: "mongoose",
      image: mongoose,
    },
    {
      name: "socket.io",
      image: socket,
    },
    {
      name: "Cloudinary",
      image: cloudinary,
    },
    {
      name: "npm",
      image: npm,
    },
    {
      name: "Redux",
      image: redux,
    },
    {
      name: "Razorpay API",
      image: razorpay,
    },
    {
      name: "nodemailer",
      image: nodemailer,
    },
  ];
  return (
    <article className="flex flex-wrap gap-6 justify-center py-4">
      {skillsArr.map((skill) => (
        <figure
          className="p-2 flex flex-col gap-4 justify-center items-center"
          key={skill.name}
        >
          <img src={skill.image} className="size-10" alt="" />
          <figcaption className="hover:animate-bounce hover:text-secondary cursor-pointer hover:scale-95">
            {skill.name}
          </figcaption>
        </figure>
      ))}
    </article>
  );
};

export default Skills;
