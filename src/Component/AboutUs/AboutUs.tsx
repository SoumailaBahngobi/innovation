import '../../App.css';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Kitchen } from '../Kitchen/Kitchen';
import { OutDoors } from '../OutDoors/OutDoors';
import { Contact } from '../Contact/Contact';
import { LivingRoom } from '../LivingRoom/LivingRoom';
import accueil from '../../accueil.jpg'

export function AboutUs() {
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
                                    <Route path="./Component/AboutUs" element={<AboutUs />} />
                                    <Route path="./Component/LivingRoom" element={<LivingRoom />} />
                                    <Route path="./Component/Kitchen" element={<Kitchen />} />
                                    <Route path="./Component/OutDoors" element={<OutDoors />} />
                                    <Route path="./Component/Contact" element={<Contact />} />
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
                <h2 className="text-white text-2xl md:text-2xl  font-bold mb-5">Know More</h2>
                <h1 className="text-white text-3xl md:text-5xl font-bold mb-16">About Us</h1>
            </div>

            <section >
                <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">

                    <div className="grid grid-cols-2">

                        {/* <h2 className='text-red-500'>November 21, 2017 / Kitchen, Lifestyle</h2> */}
                        <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2020/02/pic14-free-img.png" className="w-100 h-30 mb-4 " />

                        <p className="text-gray-800 text-center">
                            <h1 className="text-3xl font-bold mb-4"><strong><span className='underline decoration-red-500"'>Work</span>ing Since 1995</strong><hr className='text-red-500' /></h1>
                            Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, <br /> risus, vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime <br /> Suspendisse.Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus.

                            <h3 className="text-3xl font-bold mb-4">Design is a funny word</h3>

                            Taciti alias conubia, senectus, soluta nisl interdum vitae eius habitant metus dapibus quis eos, risus, <br /> vehicula! Egestas qui interdum habitant! Laoreet, placeat maxime Suspendisse.Taciti alias <br /> conubia, senectus, soluta nisl interdum vitae eius habitant metus.</p>
                        <hr />
                    </div >
                </div>
                <div className='grid grid-cols-6 gap-4 bg-gray-100 w-100 h-300 mb-4'>
                    <div><img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-1.png" alt="" /></div>
                    <div><img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png" alt="" /></div>
                    <div><img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-4.png" alt="" /></div>

                    <div><img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-5.png" alt="" /></div>
                    <div><img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-4.png" alt="" /></div>
                    {/* <div><img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-6.png" alt="" /></div> */}
                    <div><img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2021/03/client-logo-3.png" alt="" /></div>
                </div>
            </section >

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
                                        <Route path="./Component/AboutUs" element={<AboutUs />} />
                                        <Route path="./Component/LivingRoom" element={<LivingRoom />} />
                                        <Route path="./Component/Kitchen" element={<Kitchen />} />
                                        <Route path="./Component/OutDoors" element={<OutDoors />} />
                                        <Route path="./Component/Contact" element={<Contact />} />
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