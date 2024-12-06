// import Footer from './Footer/Footer';
import './App.css';
// import './index.css';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { Link } from 'react-router-dom';
// import ReactDOM from 'react-dom'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png" className="App-logo" alt="logo" />
            <Router>
              <div>
                <nav>
                  <ul className=" flex space-x-16 relative flex h-16 items-center justify-between">
                    <li>
                      <Link to="./Component/AboutUs">About Us</Link>
                    </li>
                    <li>
                      <Link to="./Component/livingroom">Living Room</Link>
                    </li>
                    <li>
                      <Link to="./Component/OutDoors">Kitchen</Link>
                    </li>
                    <li>
                      <Link to="./Component/OutDoors">Outdoors</Link>
                    </li>
                    <li>
                      <Link to="./Component/Contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <Routes>
                  <Route path="../Component/AboutUs" element={<AboutUs />} />
                  <Route path="../Component/LivingRoom" element={<LivingRoom />} />
                  <Route path="../Component/Kitchen" element={<Kitchen />} />
                  <Route path="../Component/OutDoors" element={<OutDoors />} />
                  <Route path="../Component/Contact" element={<Contact />} />
                </Routes>
              </div>
            </Router>

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

      <section className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className=''>

          <div className="">
            <h1 className="text-3xl font-bold mb-4"><strong>Consectetuer vehicula ab</strong></h1>
            <h2 className='text-red-500'>November 21, 2017 / Kitchen, Lifestyle</h2>
            <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic26-free-img.jpg" className="w-100 h-50 mb-4 " />
            <p className="text-gray-800 text-center">Tempor purus voluptas, deserunt ipsam, dapibus nunc accusantium deserunt ultrices minima, arcu, illo praesentium netus aliquam ratione vehicula at libero tortor magnis! Consequuntur eius voluptatem? Iusto harum sint, pulvinar, litora temporibus, libero sem aspernatur. Sociosqu at praesent varius tortor,
              luctus? Egestas dignissimos. Voluptate consequuntur porta do beatae amet. Sed! Libero consequatur varius!
              Ullamcorper necessitatibus? Vehicula fugit dolorem perferendis orci voluptatum voluptate adipisci repudiandae quisque arcu placeat? Proident nibh, <br />
              vitae conubia ipsa per! Reiciendis penatibus possimus ea? Quas, etiam. Ornare consequat.</p>
            <button><h5 className='text-red-500'>ReadMore"</h5></button>
            <hr />
          </div>
          { /* Section avec des images et du texte */}
          <div className="grid grid-cols-2 gap-4 p-4">
            { /* Élément 1 */}


            { /* Élément 2 */}
            <div className="text-gray-700 leading-relaxed mb-4">
              <h1 className="text-3xl font-bold mb-4"> <strong>Taciti hendrerit dis odit incidunt</strong></h1>
              <h2 className='text-red-500'>November 21, 2017 / Kitchen, Living Room, Reading Room</h2>
              <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg" className="w-50 h-50 mb-4 " />
              <p className="text-gray-800 text-center">Cubilia adipisicing. Similique diamlorem, dapibus voluptatibus ullamco nam <br /> facilisi in inventore voluptatem iure, irure exercitationem, vel aliqua ante incidunt fuga asperiores aspernatur eligendi molestias! Ipsam habitasse? Dolorem maxime! Placerat phasellus nostrud tempore mollit, sem impedit ad, inceptos quo, maiores hac, purus repellendus nobis optio inventore elit natoque nesciunt. Molestiae vestibulum odit recusandae praesentium bibendum laudantium esse, aliquip quod porta. Veniam? Auctor sequi, integer integer ratione viverra <br />
                nibh phasellus mollitia aliquip incidunt! Sapien duis nemo ridiculus natus urna itaque, mus voluptate.</p>
              <button><h5 className='text-red-500'>ReadMore</h5></button>
              <hr />
            </div>

            { /* Élément 3 */}
            <div className="text-gray-700 leading-relaxed mb-4">
              <h1 className="text-3xl font-bold mb-4"><strong>Sunt doloremque blandit inven</strong></h1>
              <h2 className='text-red-500'>November 20, 2017 / Living Room</h2>
              <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/pic20-free-img.jpg" className="w-50 h-50 mb-4 " />
              <p className="text-gray-800 text-center">Suscipit aut consequuntur assumenda nullam, pariatur officiis, consequatur <br /> irure semper condimentum, earum! Arcu, wisi litora ex, mollis aenean lacus praesent atque curabitur temporibus volutpat? Feugiat? Ex nisi accusantium? Ad fames expedita laboriosam? Duis! Consectetuer ratione, hendrerit, unde proident omnis debitis enim sapien vivamus voluptatem venenatis, sollicitudin! Reiciendis beatae, quo, lectus sunt ipsam optio vivamus, tellus ultricies, pharetra porro? Facilisi vulputate. Porro fugit adipiscing dolorem unde. <br />
                Eius? Natoque posuere saepe, iaculis nemo possimus leo sapien perferendis voluptas qui leo curabitur voluptate.</p>
              <button><h5 className='text-red-500'>ReadMore</h5></button>
              <hr />
            </div>

            <div className="text-gray-700 leading-relaxed mb-4">
              <h1 className="text-3xl font-bold mb-4"><strong>Fugit quaerat vulputate! Irure.</strong></h1>
              <h2 className='text-red-500'>November 21, 2017 / Kitchen, Lifestyle</h2>
              <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg" className="w-50 h-50 mb-4 " />
              <p className="text-gray-800 text-center">Delectus id incidunt? Enim iste eveniet, qui magni atque impedit, ligula quia, <br />
                pharetra quam tenetur! Repellat ex interdum laboriosam magnam dolores culpa. Eum eu placeat, aliquid aliquid repellendus <br /> sem quam quod voluptatibus. Repellendus mollit. Aenean morbi, repellat conubia, facilisi nesciunt, vel, cubilia velit veniam corrupti sodales incidunt unde quasi, nostrum, totam vel. Dapibus mus? Vulputate, cras asperiores pariatur sociosqu, suscipit. Facilisi erat, <br />
                in tenetur bibendum error quos risus quae assumenda, porro hendrerit at mi voluptatem et quae congue dis risus.</p>
              <button><h5 className='text-red-500'>ReadMore</h5></button>
              <hr />
            </div>

            <div className="text-gray-700 leading-relaxed mb-4">
              <h1 className="text-3xl font-bold mb-4"><strong>Fugit quaerat vulputate! Irure.</strong></h1>
              <h5 className='text-red-500'>November 20, 2017 / Living Room</h5>
              <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/hero01-free-img-1024x647.jpg" className="w-48 h-48 mb-4 " />
              <p className="text-gray-800 text-center">Delectus id incidunt? Enim iste eveniet, qui magni atque impedit, ligula quia, <br />
                pharetra quam tenetur! Repellat ex interdum laboriosam magnam dolores culpa. Eum eu placeat, aliquid aliquid repellendus <br /> sem quam quod voluptatibus. Repellendus mollit. Aenean morbi, repellat conubia, facilisi nesciunt, vel, cubilia velit veniam corrupti sodales incidunt unde quasi, nostrum, totam vel. Dapibus mus? Vulputate, cras asperiores pariatur sociosqu, suscipit. Facilisi erat, <br />
                in tenetur bibendum error quos risus quae assumenda, porro hendrerit at mi voluptatem et quae congue dis risus.</p>
              <button><h5 className='text-red-500'>ReadMore</h5></button>
              <hr />
            </div>

            { /* Ajoutez d'autres éléments ici */}
          </div>
        </div>
      </section>

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
              <Router>
                <div>
                  <nav>
                    <ul className=" flex space-x-16 relative flex h-16 items-center justify-between">
                      <li>
                        <Link to="../Component/AboutUs">About Us</Link>
                      </li>
                      <li>
                        <Link to="../Component/livingroom">Living Room</Link>
                      </li>
                      <li>
                        <Link to="../Component/OutDoors">Kitchen</Link>
                      </li>
                      <li>
                        <Link to="../Component/OutDoors">Outdoors</Link>
                      </li>
                      <li>
                        <Link to="../Component/Contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                  <Routes>
                    <Route path="../Component/AboutUs" element={<AboutUs />} />
                    <Route path="../Component/LivingRoom" element={<LivingRoom />} />
                    <Route path="../Component/Kitchen" element={<Kitchen />} />
                    <Route path="../Component/OutDoors" element={<OutDoors />} />
                    <Route path="../Component/Contact" element={<Contact />} />
                  </Routes>
                </div>
              </Router>
            </div>
          </div>
        </nav>
      </div>
      <br />
    </div >
  );
}

export default App;