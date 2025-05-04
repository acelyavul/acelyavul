import { useState } from "react";
import Markdown from "react-markdown";
import { blogs } from "../blog";
import styles from "./Hero.module.css";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(blogs[0]);

  return (
    <section className={styles.section}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "5rem",
        }}
      >
        <div
          style={{
            width: "30%",
            padding: "1rem",
            fontSize: 18,
            borderRight: "1px solid #ccc",
            minHeight: "100vh",
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
          style={{
            width: "70%",
            textAlign: "left",
            fontSize: 20,
            whiteSpace: "pre-line",
            marginTop: "1rem",
            marginLeft: "2rem",
          }}
        >
          <Markdown>{selectedBlog.Article}</Markdown>
        </div>
      </div>
    </section>
  );
}
