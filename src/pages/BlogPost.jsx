import { useParams, Link } from "react-router-dom";
import { posts } from "./Blog";
import "../Blog.css";

function BlogPost() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="blog-post-page">
        <h2>Post not found</h2>
        <Link to="/blog">Back to Blog</Link>
      </main>
    );
  }

  return (
    <main className="blog-post-page">
      <Link to="/blog" className="back-link">← Back to Blog</Link>

      <h1>{post.title}</h1>

      <img className="blog-post-image" src={post.image} alt={post.title} />

      <p className="blog-post-text">{post.fullDescription}</p>
    </main>
  );
}

export default BlogPost;