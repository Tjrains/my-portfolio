import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { projects } from "../projects";
import heroImage from "../assets/hero.jpg";
import aboutImage from "../assets/Bishop.jpg";

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
            Tyler Rains
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

      <section
        id="about"
        className="about-section"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="about-overlay">
          <div className="about-card">
            <h2>About Me</h2>
            <div className="section-divider"></div>
            <p>
              I’m a student about to graduate from Cal State San Marcos with a Bachelor's
              in computer science. I enjoy working with computers and recently working with
              data has become an interest of mine. I have built several computers and have
              worked on lots of different projects while at school. I also enjoy being outdoors,
              I rock climb with the school club and have set a goal of visiting every national
              park. I do it by roadtip and I have visited over 20 parks so far.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <h2>Projects</h2>
        <div className="section-divider"></div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              className="project-card"
              key={project.id}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-card-image"
              />

              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <h2>Contact</h2>
        <div className="section-divider"></div>

        <p className="contact-subtext">
          Feel free to reach out — I’m always open to new opportunities and projects.
        </p>

        <div className="contact-links">
          <a href="mailto:tjrains2003@gmail.com" className="contact-card">
            <div>
              <h3>Email Me</h3>
              <p>tjrains2003@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/Tjrains"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div>
              <h3>GitHub</h3>
              <p>github.com/Tjrains</p>
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;