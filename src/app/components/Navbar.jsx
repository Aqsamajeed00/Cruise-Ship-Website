// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>🚢 Sea Escape</h2>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
