import React from "react";
import ProjectItem from "./ProjectItem";
import pro1 from "../assets/pro1.jpeg";
import pro2 from "../assets/pro2.png";
import pro3 from "../assets/pro3.png";
import pro4 from "../assets/pro4.jpg";
import pro5 from "../assets/pro5.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px]  m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        debitis quod nesciunt ex expedita inventore eaque aspernatur laboriosam
        ducimus, cum enim aliquid a perspiciatis dolores quia earum asperiores
        nam optio. Labore quisquam voluptatem, nam dolore vitae quidem cum
        cumque fugit, sapiente quo esse voluptatum animi, odio tempore sequi!
        Amet, doloribus!
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={pro1} title="Cripto App" />
        <ProjectItem img={pro2} title="Cripto App" />
        <ProjectItem img={pro3} title="Cripto App" />
        <ProjectItem img={pro4} title="Cripto App" />
      </div>
    </div>
  );
};

export default Projects;
