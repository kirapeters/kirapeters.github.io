import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import raw from "../blog_posts/2023_09_18_first_post.md";
import Footer from "./Footer";
import Header from "./Header";
import "./Blog.css";
import PageWrapper from "./PageWrapper";

function Blog() {
  const [content, setContent] = useState();

  useEffect(() => {
    fetch(raw)
      .then((r) => r.text())
      .then((text) => {
        setContent(text);
      });
  }, []);

  return (
    <>
      <Header />
      <PageWrapper>
        <ReactMarkdown children={content} />
      </PageWrapper>
      <Footer />
    </>
  );
}

export default Blog;
