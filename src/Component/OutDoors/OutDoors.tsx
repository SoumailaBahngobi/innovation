import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Kitchen } from '../Kitchen/Kitchen';
import { AboutUs } from '../AboutUs/AboutUs';
import { Contact } from '../Contact/Contact';
import { LivingRoom } from '../LivingRoom/LivingRoom';

import accueil from '../../accueil.jpg'


export function OutDoors() {
    return (
        <div>

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
            <main>
                {/* <article className="main-article"> */}
                <article className="main-article">
                    <img src="https://websitedemos.net/blog-02/wp-content/uploads/sites/132/2017/11/Interior-logo4-free-img.png" alt="Article" />
                    <div className="article-content">
                        <div className='containerA'>
                            <h1>Consectetuer vehicula ab</h1>
                            <p>November 21, 2017 / Kitchen, Lifestyle</p>
                            <div className='my-img'>
                            </div>
                            <p>Consectetuer vehicula ab? Blandit? Suspendisse feugiat elementum dictum! Minus eum eveniet, praesentium elementum interdum! Sodales, metus, velit voluptatibus voluptas lorem, etiam vulputate? Aenean possimus montes fugiat […]</p>
                            <h1>Taciti hendrerit dis odit incidunt</h1>
                            <p>November 21, 2017 / Kitchen, Living Room, Reading Room
                            </p>
                            <div className='my-img1'></div>
                            <p>Cillum corrupti accumsan non cumque alias ipsa, platea! Mollis auctor, repellendus sagittis? Corporis dictumst mollis, curae. Eaque, quam per, praesent pretium eu non cumque animi dolorem
                            </p>
                            <h1>Sunt doloremque blandit inven</h1>
                            <p>November 20, 2017 / Living Room
                            </p>
                            <div className='my-img2'></div>
                            <p>Nisl vel urna debitis morbi fringilla malesuada maiores optio! Ratione, facilis. Illum accusantium eros sed tristique, cubilia? Vel eu cupiditate. Habitasse urna molestie hendrerit, animi eros</p>
                            <h1>Fugit quaerat vulputate! Irure.</h1>
                            <p>November 7, 2017 / Living Room</p>
                            <div className='my-img3'></div>
                            <p>Sodales inceptos dolorem elit molestias minima quam ipsa proident maecenas magnam massa. Hac maiores? Dis elit facilisis sapiente! Vulputate praesent esse! Hic? Possimus elit? Molestiae voluptates</p>
                            <h1>Litora aptent magnam laoreet!</h1>
                            <p>November 20, 2017 / Living Room</p>
                            <div className='my-img4'></div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu</p>
                        </div>





                    </div>
                </article>
                <aside className="sidebar">
                    <div className="sidebar-item">
                        <form className="search-form">
                            <input type="text" placeholder='Search...' className='searche-input' />
                            <button type='submit' className='search-button'>Search</button>
                        </form>
                        <div>
                            <h2> Recent Posts</h2>

                            <div className='container'>
                                <div className='post-container container1'>
                                    <p>Consectetuer vehicula ab<br />In Kitchen, Lifestyle</p>
                                </div>
                                <div className='post-container container2'>
                                    <p>Taciti hendrerit dis odit incidunt<br />In Kitchen, Living Room, Reading Room</p>
                                </div>
                                <div className='post-container container3'>
                                    <p>Sunt doloremque blandit inven<br />In Living Room</p>
                                </div>
                                <div className='post-container container4'>
                                    <p>Fugit quaerat vulputate! Irure.<br />In Living Room</p>
                                </div>
                                <div className='post-container container5'>
                                    <p>Litora aptent magnam laoreet!<br />In Living Room</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>Tags</h2>

                            <div className='button-group'>
                                <button type='submit' className='button'><a href="">appliances</a></button>
                                <button type='submit' className='button' ><a href="">architecture</a></button>
                                <button type='submit' className='button'><a href="">area</a></button>
                                <button type='submit' className='button'><a href="">bed</a></button>
                                <button type='submit' className='button'><a href="">bedroom</a></button>
                                <button type='submit' className='button'><a href="">chair</a></button>
                                <button type='submit' className='button'><a href="">chairs</a></button>
                                <button type='submit' className='button'><a href="">corners</a></button>
                                <button type='submit' className='button'><a href="">decor</a></button>
                                <button type='submit' className='button'><a href="">design</a></button>
                                <button type='submit' className='button'><a href="">exhaust</a></button>
                                <button type='submit' className='button'><a href="">fire place</a></button>
                                <button type='submit' className='button'><a href="">frames</a></button>
                                <button type='submit' className='button'><a href="">furniture</a></button>
                                <button type='submit' className='button'><a href="">garden</a></button>
                                <button type='submit' className='button'><a href="">home</a></button>
                                <button type='submit' className='button'><a href="">interior</a></button>
                                <button type='submit' className='button'><a href="">kitchen</a></button>
                                <button type='submit' className='button'><a href="">lifestyle</a></button>
                                <button type='submit' className='button'><a href="">lights</a></button>
                                <button type='submit' className='button'><a href="">living room</a></button>
                                <button type='submit' className='button'><a href="">modern</a></button>
                                <button type='submit' className='button'><a href="">outdoor</a></button>
                                <button type='submit' className='button'><a href="">plants</a></button>
                                <button type='submit' className='button'><a href="">shopping</a></button>
                                <button type='submit' className='button'><a href="">sitout</a></button>
                                <button type='submit' className='button'><a href="">table</a></button>
                                <button type='submit' className='button'><a href="">table top</a></button>
                                <button type='submit' className='button'><a href="">wall</a></button>

                            </div>

                        </div>
                    </div>
                </aside>
            </main>

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
        </div>
    );
}