import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import raw from "./2023_09_18_first_post.md";
import Footer from "./Footer";
import Header from "./Header";
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

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?lat=40.33&lon=111.90&appid=1a7d17ee6d407c355578876e6e494c6f
  //   `).then(r => r.text).then((text) => {
  //     console.log(JSON.parse(text));
  //   })
  // }, [])

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
