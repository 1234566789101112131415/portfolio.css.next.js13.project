import React from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import "./style/globals.css"; // Ensure this path is correct

const Home = () => {
  return (
    <>
      <Header />
      <div className="hero">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          I'm a student web developing Ai DDeveloper . Explore my work and get to know more about me!
        </p>
      </div>
      
      <section className="about">
        <h2 className="section-title">About Me</h2>
        <p className="description">
          Hi, I’m Amna! I am a web developer with a passion for creating interactive and visually appealing websites. With a strong foundation in web development technologies like HTML, CSS, and JavaScript, I strive to build user-friendly experiences. Let’s connect!
        </p>
      </section>

      <section className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="project-cards">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>This is a brief description of my first project. It demonstrates my skills in front-end development.</p>
            <a href="/projects/project1" className="button">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>This is a brief description of my second project. It showcases my ability to work with React.</p>
            <a href="/projects/project2" className="button">View Project</a>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>This is a brief description of my third project. It highlights my skills in backend development.</p>
            <a href="/projects/project3" className="button">View Project</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
