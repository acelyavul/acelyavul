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
      <div className={styles.blogWrapper}>
        {slug ? (
          <div className={styles.content}>
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
              className={styles.image}
              alt={selectedBlog?.Title}
            />

            <Markdown
              components={{
                a: ({ node, children, ...props }) => (
                  <a
                    {...props}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#0070f3", textDecoration: "underline" }}
                  >
                    {children}
                  </a>
                ),
                p: (props) => (
                  <p
                    style={{
                      marginTop: "0.25rem",
                      marginBottom: "0.25rem",
                      lineHeight: "1.6",
                    }}
                    {...props}
                  />
                ),
                ul: (props) => (
                  <ul
                    style={{
                      paddingLeft: "1.25rem",
                      marginTop: "0.25rem",
                      marginBottom: "0.25rem",
                      listStylePosition: "inside",
                    }}
                    {...props}
                  />
                ),
                ol: (props) => (
                  <ol
                    style={{
                      paddingLeft: "1.25rem",
                      marginTop: "0.25rem",
                      marginBottom: "0.25rem",
                      listStylePosition: "inside",
                    }}
                    {...props}
                  />
                ),
                li: (props) => (
                  <li
                    style={{
                      wordBreak: "break-word",
                      lineHeight: "1.5",
                      marginTop: "0.15rem",
                      marginBottom: "0.15rem",
                    }}
                    {...props}
                  />
                ),
              }}
            >
              {selectedBlog?.Article}
            </Markdown>
          </div>
        ) : (
          <div className={styles.blogListContainer}>
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
                  src={blog?.Image}
                  style={{ width: "100%" }}
                  alt={blog?.Title}
                />
                <div>
                  <p style={{ color: "#18181b" }}> {blog.Title}</p>
                  <p style={{ color: "#71717a", fontSize: 12 }}>
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
