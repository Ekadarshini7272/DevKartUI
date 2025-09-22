import React from 'react';
import styles from './Discover.module.css';

export default function Discover() {
  // You can replace these items with actual Toolify categories or tools
  const categories = [
    "AI Writing", "Image Generation", "Productivity", "Marketing",
    "Video Tools", "Design", "Analytics", "Business"
  ];

  return (
    <section className={styles.discoverSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Discover AI Tools</h2>
        <p className={styles.subtitle}>Explore the most popular AI tools in different categories</p>

        <div className={styles.cards}>
          {categories.map((category, index) => (
            <div key={index} className={styles.card}>
              {category}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
