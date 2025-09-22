import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCol}>
          <h4>Top AI Tools</h4>
          <ul>
            <li><a href="/">Tool A</a></li>
            <li><a href="/">Tool B</a></li>
            <li><a href="/">Tool C</a></li>
            <li><a href="/">Tool D</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>More Tools</h4>
          <ul>
            <li><a href="/">AI Writing</a></li>
            <li><a href="/">Image Generation</a></li>
            <li><a href="/">Video Tools</a></li>
            <li><a href="/">Productivity</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy</a></li>
          </ul>
        </div>

        <div className={styles.footerCol}>
          <h4>Follow Us</h4>
          <div className={styles.social}>
            <a href="/" className={styles.socialLink}>Twitter</a>
            <a href="/" className={styles.socialLink}>LinkedIn</a>
            <a href="/" className={styles.socialLink}>Facebook</a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2025 Toolify. All rights reserved.</p>
      </div>
    </footer>
  );
}
