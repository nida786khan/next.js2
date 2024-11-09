import React from 'react';
import Heading from './Heading';
import Card from './Card';


const data = [
  {
    id: 0,
    title: "Simple Calculator Project",
    desc: "leom hgfb kkuut fderc hgh njjh",
    img: "/pro0.png",
    tags: ["React", "Node", "Css", "Typescript"],
  },
  {
    id: 1,
    title: "Project 1",
    desc: "Description for project 1",
    img: "/pro1.png",
    tags: ["React", "Node", "Css", "Typescript"],
  },
  {
    id: 2,
    title: "Project 2",
    desc: "Description for project 2",
    img: "/pro2.png",
    tags: ["React", "Node", "Css", "Typescript"],
  },
  {
    id: 3,
    title: "Project 3",
    desc: "Description for project 3",
    img: "/pro3.png",
    tags: ["React", "Node", "Css", "Typescript"],
  },
  {
    id: 4,
    title: "Project 4",
    desc: "Description for project 4",
    img: "/pro4.png",
    tags: ["React", "Node", "Css", "Typescript"],
  },
  {
    id: 5,
    title: "Project 5",
    desc: "Description for project 5",
    img: "/pro5.png",
    tags: ["React", "Node", "Css", "Typescript"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projrct'/>
      <div className='grid gap-10 xl;gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el)=> (<Card
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  );
};

export default Projects
