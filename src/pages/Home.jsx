import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import heroImage from "../assets/hero.jpg"; // change if you want another image

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return (
    <main>
      <section className="home-hero">
        <div className="home-hero-content">
          <p className="home-hero-tag">Aspiring Web Developer</p>
          <h1>
            I’m Tyler Rains
            <span>Building clean and creative web experiences</span>
          </h1>
          <p className="home-hero-text">
            I’m a student learning web development and exploring how design,
            code, and interactivity come together to create polished digital
            experiences.
          </p>

          <div className="home-hero-buttons">
            <Link to="/#projects" className="hero-btn primary">
              View Projects
            </Link>
            <Link to="/blog" className="hero-btn secondary">
              Visit Blog
            </Link>
          </div>
        </div>

        <div className="home-hero-image-wrap">
          <img src={heroImage} alt="Tyler Rains portfolio hero" className="home-hero-image" />
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I’m a student learning web development. I love building things with
          code and exploring new technologies. Currently studying at Cal State
          San Marcos.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          <ProjectCard
            title="Personal Website"
            desc="A React portfolio site that showcases my projects, blog posts, and design style."
          />
          <ProjectCard
            title="DraftBots"
            desc="A website concept for a fictional robot sports betting platform."
          />
          <ProjectCard
            title="Soccer Bot"
            desc="A robot car project focused on tracking, movement logic, and autonomous play."
          />
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: tjrains2003@gmail.com</p>
        <p>GitHub: github.com/Tjrains</p>
      </section>
    </main>
  );
}

function ProjectCard({ title, desc }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Home;