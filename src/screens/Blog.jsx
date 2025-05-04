import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "../blog";
import styles from "./Blog.module.css";

export const isMobile = window.innerWidth <= 768;

export default function Blog() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [selectedBlog, setSelectedBlog] = useState(null);
  console.log(slug);
  useEffect(() => {
    if (slug) {
      const found = blogs.find((blog) => blog.Slug === slug);
      setSelectedBlog(found || blogs[0]);
    } else {
      setSelectedBlog(blogs[0]);
    }
  }, [slug]);

  return (
    <section className={styles.section}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "5rem",
          backgroundColor: "#f4f4f5",
          padding: "1rem",
        }}
      >
        {slug ? (
          <div
            className="content"
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: 20,
              whiteSpace: "pre-line",
              padding: "2rem 1rem",
              backgroundColor: "#f4f4f5",
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
                fontSize: "0.9rem",
                color: "#71717a",
              }}
            >
              <span
                onClick={() => navigate("/blog")}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "#52525b",
                  marginRight: "0.5rem",
                }}
              >
                Blog
              </span>
              {slug && (
                <>
                  <span style={{ marginRight: "0.5rem" }}>/</span>
                  <span>{selectedBlog?.Title}</span>
                </>
              )}
            </div>

            <img
              src={selectedBlog?.Image}
              style={{ width: "100%" }}
              alt={selectedBlog?.Title}
            />
            <Markdown>{selectedBlog?.Article}</Markdown>
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              padding: "1rem",
              fontSize: 18,
              borderRight: "1px solid #ccc",
              minHeight: "100vh",
              backgroundColor: "#f4f4f5",
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
            }}
          >
            {blogs.map((blog, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedBlog(blog);
                  if (blog.Slug) {
                    navigate(`/blog/${blog.Slug}`);
                  }
                }}
                style={{
                  marginBottom: "0.4rem",
                  cursor: "pointer",
                }}
              >
                <img
                  src={selectedBlog?.Image}
                  style={{ width: "100%" }}
                  alt={selectedBlog?.Title}
                />
                <div>
                  <p style={{ color: "#18181b" }}> {blog.Title}</p>
                  <p style={{ color: "#71717a" }}>
                    {new Date(blog.PublishTime).toLocaleDateString(
                      blog.Lang === "tr" ? "tr-TR" : "en-US",
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
