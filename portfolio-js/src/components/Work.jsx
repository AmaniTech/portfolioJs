import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2020,
    title: "Content Creator",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat perspiciatis, reiciendis dolores incidunt sapiente ex deserunt optio sunt neque dignissimos dolore eveniet at repellendus, rem iusto iure quam adipisci ad consequatur molestias in ullam atque nisi. Dolores quis voluptas rem in voluptates vero reiciendis corrupti sequi at aperiam? Nemo.",
  },
  {
    year: 2022,
    title: "Google",
    duration: "5 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat perspiciatis, reiciendis dolores incidunt sapiente ex deserunt optio sunt neque dignissimos dolore eveniet at repellendus, rem iusto iure quam adipisci ad consequatur molestias in ullam atque nisi. Dolores quis voluptas rem in voluptates vero reiciendis corrupti sequi at aperiam? Nemo.",
  },
  {
    year: 2024,
    title: "AirBnb",
    duration: "2 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat perspiciatis, reiciendis dolores incidunt sapiente ex deserunt optio sunt neque dignissimos dolore eveniet at repellendus, rem iusto iure quam adipisci ad consequatur molestias in ullam atque nisi. Dolores quis voluptas rem in voluptates vero reiciendis corrupti sequi at aperiam? Nemo.",
  },
  {
    year: 2026,
    title: "Facebook",
    duration: "3 Years",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor repellat perspiciatis, reiciendis dolores incidunt sapiente ex deserunt optio sunt neque dignissimos dolore eveniet at repellendus, rem iusto iure quam adipisci ad consequatur molestias in ullam atque nisi. Dolores quis voluptas rem in voluptates vero reiciendis corrupti sequi at aperiam? Nemo.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>

      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
