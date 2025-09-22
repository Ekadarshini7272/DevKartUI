import React from "react";

const FeatureCard = () => {
  const features = [
    { name: "Gemini", icon: "https://img.icons8.com/color/48/google-logo.png" },
    { name: "DeepSeek", icon: "https://img.icons8.com/color/48/brain.png" },
    { name: "MidJourney", icon: "https://img.icons8.com/color/48/image.png" },
    { name: "Poe", icon: "https://img.icons8.com/color/48/chat.png" },
    { name: "ChatGPT", icon: "https://img.icons8.com/color/48/artificial-intelligence.png" },
    { name: "Claude", icon: "https://img.icons8.com/color/48/bot.png" },
    { name: "Grok", icon: "https://img.icons8.com/color/48/idea.png" },
    { name: "AI Studio", icon: "https://img.icons8.com/color/48/development-skill.png" },
    { name: "Grammarly", icon: "https://img.icons8.com/color/48/grammar.png" },
    { name: "remove.bg", icon: "https://img.icons8.com/color/48/scissors.png" },
  ];

  const styles = {
    section: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      margin: "2em",
      marginBottom: "30px",
      alignItems: "center",
    },
    item: {
      textAlign: "center",
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out",
    },
    itemHover: {
      transform: "scale(1.1)",
    },
    img: {
      width: "50px",
      height: "50px",
    },
    name: {
      marginTop: "8px",
      fontSize: "14px",
      color: "#333",
    },
  };

  return (
    <div style={styles.section}>
      {features.map((feature, index) => (
        <div
          key={index}
          style={styles.item}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={feature.icon} alt={feature.name} style={styles.img} />
          <p style={styles.name}>{feature.name}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
