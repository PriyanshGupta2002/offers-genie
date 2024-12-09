"use client";
import { useEffect, useState } from "react";

const StaticHtmlContent = ({ fileName }: { fileName: string }) => {
  const [htmlContent, setHtmlContent] = useState<string>("");

  useEffect(() => {
    const fetchHtml = async () => {
      try {
        const response = await fetch(`${window.location.origin}/${fileName}`);
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error("Failed to load HTML file:", error);
      }
    };

    fetchHtml();
  }, [fileName]);

  return (
    <div
      className="static-html"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    ></div>
  );
};

export default StaticHtmlContent;
