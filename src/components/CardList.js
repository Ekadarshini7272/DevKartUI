import React from "react";
import Card from "./Card";

const CardList = () => {
  const tools = [
    {
      title: "Skywork",
      description: "10 Tasks in 1 Hour, Not 10 Hours → Limited Free Spots: 127 Left",
      tag: "AI Productivity",
      link: "https://toolify.ai/tool/skywork",
    },
    {
      title: "Nano Banana AI",
      description: "Free AI tool for image creation and editing with natural language.",
      tag: "Image AI",
      link: "https://toolify.ai/tool/nano-banana-ai",
    },
    {
      title: "FluxAPI.ai",
      description: "Affordable API access for developers to multiple AI models.",
      tag: "API",
      link: "https://toolify.ai/tool/fluxapi",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {tools.map((tool, index) => (
        <Card key={index} {...tool} />
      ))}
    </div>
  );
};

export default CardList;
