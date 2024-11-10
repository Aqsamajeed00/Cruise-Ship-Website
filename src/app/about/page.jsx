// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <div className="container">
      {/* <Navbar /> */}
      <main className="main">
        <h1>About Sea Escape</h1>
        <p>Experience the world like never before with Sea Escape Cruises.</p>
        
        <div className="image-gallery">
          <Image src="/cruisey.jpg" alt="Cruise Image 1" width={300} height={200} />
          <Image src="/cruise2.jpg" alt="Cruise Image 2" width={300} height={200} />
          <Image src="/cruisee.jpg" alt="Cruise Image 3" width={300} height={200} />
          <Image src="/cruise11.jpg" alt="Cruise Image 4" width={300} height={200} />
          <Image src="/cruise9.jpg" alt="Cruise Image 5" width={300} height={200} />
          <Image src="/cruise10.jpg" alt="Cruise Image 6" width={300} height={200} />
          
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

