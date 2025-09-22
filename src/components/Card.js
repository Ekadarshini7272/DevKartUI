// File: Card.js
import React from "react";

const Card = ({ title, description, tag, link }) => {
  const styles = {
    card: {
      border: "1px solid #e0e0e0",
      borderRadius: "12px",
      padding: "16px",
      margin: "10px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      width: "280px",
      cursor: "pointer",
      transition: "transform 0.2s ease-in-out",
    },
    cardHover: {
      transform: "scale(1.05)",
    },
    title: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "8px",
      color: "#333",
    },
    description: {
      fontSize: "14px",
      color: "#555",
      marginBottom: "10px",
    },
    tag: {
      display: "inline-block",
      fontSize: "12px",
      background: "#f3f4f6",
      color: "#555",
      padding: "4px 10px",
      borderRadius: "8px",
    },
  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
      <div style={styles.card} className="card-item">
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
        {tag && <span style={styles.tag}>{tag}</span>}
      </div>
    </a>
  );
};

export default Card;
