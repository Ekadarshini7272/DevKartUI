import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.siteRoot}>
      <Header />
      <main className={styles.siteMain}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
