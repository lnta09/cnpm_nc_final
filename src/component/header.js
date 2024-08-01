// components/Header.js
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Quiz App</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/teacher/dashboard">Teacher Dashboard</Link>
      </nav>
    </header>
  );
}
