import { Link, useParams } from "react-router-dom";
import { projects } from "../projects";

function ProjectPost() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="project-post-page">
        <h1>Project not found</h1>
        <Link to="/#projects" className="back-link">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="project-post-page">
      <Link to="/#projects" className="back-link">
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>

      <img
        src={project.image}
        alt={project.title}
        className="project-post-image"
      />

      <p className="project-post-text">{project.fullDescription}</p>
    </main>
  );
}

export default ProjectPost;