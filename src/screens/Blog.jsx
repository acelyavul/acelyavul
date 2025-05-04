import { useState } from "react";
import Markdown from "react-markdown";
import { blogs } from "../blog";
import styles from "./Blog.module.css";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

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
        <div
          style={{
            width: "30%",
            padding: "1rem",
            fontSize: 18,
            borderRight: "1px solid #ccc",
            minHeight: "100vh",
            backgroundColor: "#f4f4f5",
          }}
        >
          {blogs.map((blog, index) => (
            <div
              key={index}
              onClick={() => setSelectedBlog(blog)}
              style={{
                marginBottom: "0.4rem",
                cursor: "pointer",
                color: selectedBlog.Title === blog.Title ? "#f4f4f5" : "black",
                fontWeight:
                  selectedBlog.Title === blog.Title ? "bold" : "normal",
              }}
            >
              <p style={{ color: "black" }}> {blog.Title}</p>
            </div>
          ))}
        </div>

        <div
          className="content"
          style={{
            width: "70%",
            textAlign: "left",
            fontSize: 20,
            whiteSpace: "pre-line",
            padding: "2rem 1rem",
            backgroundColor: "#f4f4f5",
          }}
        >
          <Markdown>{selectedBlog.Article}</Markdown>
        </div>
      </div>
    </section>
  );
}
