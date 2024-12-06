import Footer from './Footer/Footer';
import './App.css';
import './index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import accueil from './accueil.jpg'
import { AboutUs } from './Component/AboutUs/AboutUs';
import { Kitchen } from './Component/Kitchen/Kitchen';
import { OutDoors } from './Component/OutDoors/OutDoors';
import { Contact } from './Component/Contact/Contact';
import { LivingRoom } from './Component/LivingRoom/LivingRoom';
// import { OutDoors } from './Component/OutDoors/OutDoors';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <><nav className="bg-gray-600 text-white">
          {/* bg-gray-600 */}
          <div className="container mx-auto px-4 flex justify-between items-center py-4">
            {/* <div className="container mx-auto px-4 flex justify-between items-center py-4"> */}
            { /* Logo */}
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png" className="App-logo" alt="logo" />
            { /* Menu */}
            <div className=" flex space-x-16 relative flex h-16 items-center justify-between">
              <a href="#About Us" className="text-white text-lg md:text-xl">About Us</a>
              <a href="#Living Room" className="text-white text-lg md:text-xl">Living Room</a>
              <a href="#Kitchen" className="text-white text-lg md:text-xl">Kitchen</a>
              <a href="#Outdoors" className="text-white text-lg md:text-xl">Outdoors</a>
              <a href="#Contact" className="text-white text-lg md:text-xl">Contact</a>
            </div>
            <button className="md:hidden text-white" id="menu-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>

          <script>{`
      const menuToggle = document.getElementById('menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');
  
      menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    `}</script>
        </>
      </header >
      {/* <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg" alt="" /> */}
      <img src={accueil} alt="" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 px-4">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-16">
          Coming Home Never <br /> Felt So Good!
        </h1>
        <p className="text-white text-lg md:text-xl">
          Quam a diamlorem explicabo quos fugit, ut aliquam modi.</p>
        <p className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">FIND YOUR STYLE</p>
      </div>
      <div className="mon_footer" >
        <footer className="gray-gray-400 text-white py-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="container">
              <div className="footer-container">
                <div className="footer-center">
                  <h3 className="container mx-auto flex justify-between items-center p-4">About</h3>
                  <p>Nulla quis lorem ut libero malesuada feugiat. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.  <br /> Pellentesque in ipsum id orci porta dapibus. Sed porttitor lectus nibh.</p>
                </div>
                <div className="footer-center">
                  <h3 className="container mx-auto flex justify-between items-center p-10">SOCIAL</h3>
                  {/* Liens sociaux */}
                  <div className="flex space-x-10">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </div>
                </div>
                <div className="footer-center" id="contact">
                  <h3 className="container mx-auto flex justify-between items-center p-10">Contact Us</h3>
                  <div>
                    <span>
                      <i className="fa fa-map-marker-alt" />
                    </span>
                    500 Terry Francois St.
                  </div>
                  <div>
                    <span>San Francisco,</span>
                  </div>
                  <div>
                    <span>
                      Extra Crunch Terms
                    </span>

                  </div>
                  <div>
                    <span>
                      CA 94158
                    </span>
                  </div>
                  <div>
                    <span>
                      info@example.com
                    </span>
                  </div>
                  <div>
                    <span>
                      +1-410-555-0134 |
                    </span>
                  </div>
                  <div>
                    <span>
                      contact@example.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <nav className="container mx-auto flex justify-between items-center p-4">
          <div className="container mx-auto px-4 flex justify-between items-center py-4">
            <p className="text-white text-lg md:text-xl">Copyright © 2024 Home Decor | Powered by Home Decor</p>
            { /* Menu */}
            <div className=" flex space-x-16 relative flex h-16 items-center justify-between">
              <a href="#About Us" className="text-white text-lg md:text-xl">About Us</a>
              <a href="#Living Room" className="text-white text-lg md:text-xl">Living Room</a>
              <a href="#Kitchen" className="text-white text-lg md:text-xl">Kitchen</a>
              <a href="#Outdoors" className="text-white text-lg md:text-xl">Outdoors</a>
              <a href="#Contact" className="text-white text-lg md:text-xl">Contact</a>
            </div>
          </div>
        </nav>
      </div>
      <br />
    </div >
  );
}

export default App;