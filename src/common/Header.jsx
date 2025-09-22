import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}><a href="/">Toolify</a></div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="/">Free Tools</a></li>

            <li className={styles.dropdown}>
              <a href="/products">Products ▾</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="/products/ai-writing">AI Writing</a></li>
                <li><a href="/products/image-gen">Image Generation</a></li>
                <li><a href="/products/video-tools">Video Tools</a></li>
              </ul>
            </li>

            <li className={styles.dropdown}>
              <a href="/category">Category ▾</a>
              <ul className={styles.dropdownMenu}>
                <li><a href="/category/productivity">Productivity</a></li>
                <li><a href="/category/marketing">Marketing</a></li>
                <li><a href="/category/design">Design</a></li>
              </ul>
            </li>

            <li><a href="/ranking">Ranking</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/research">Research</a></li>
            <li><a href="/submit">Submit</a></li>
          </ul>
        </nav>

        <div className={styles.headerActions}>
          {/* <input type="text" placeholder="Search AI tools..." className={styles.search} /> */}
          <button className={styles.loginBtn} href="/LoginPage">Login</button>
          <div className={styles.lang}>EN ▾</div>
        </div>
      </div>
    </header>
  );
}
