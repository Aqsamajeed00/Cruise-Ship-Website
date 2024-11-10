// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <main className="main">
        <h1>Welcome to Sea Escape Cruises</h1>
        <Image src="/cruise7.png" alt="Cruise Ship" width={800} height={400} className="page-image" />
        <p>Experience luxury at sea like never before!</p>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
