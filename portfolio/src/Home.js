
import './Home.css';

import { GrLinkedin } from "react-icons/gr";

import { FaFacebook } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaGithubSquare } from "react-icons/fa";
import { IoReorderThree } from "react-icons/io5";
const Home = () => {
const showNavPopup = ()=>{
  let navPopup=document.getElementById("nav-popup");
  navPopup.classList.add("animation");
}
const removeNavPopup = ()=>{
  let navPopup=document.getElementById("nav-popup");
  navPopup.classList.remove("animation");
}
  return (
    <div className='container'>
      {/* Navbar */}
      <div className="nav-bar">
          <div className='nav-icon'>
      <a
  href="https://www.linkedin.com/in/tushar-mal-972329338"
  target="_blank"
  rel="noopener noreferrer"
>
  <GrLinkedin className="navicon nav-linkedin" />
</a>


      <a
  href="https://www.naukri.com/mnjuser/profile?id=&altresid"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="./Images/naukri-logo.png" className='navicon nav-naukri'/>
</a>

     <a
  href="https://github.com/tusharmal711"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithubSquare className='navicon nav-github' />
</a>
      
        <a
  href="https://www.facebook.com/tushar.mal.33"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebook className='navicon nav-facebook'/>
</a>
      
       

          </div>
     
       <a href="#" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About</a>
         <a href="#experience" className="nav-link">Experience</a>
          <a href="#projects" className="nav-link">Projects</a>
           <a href="#certification" className="nav-link">Certification</a>
           <a href="#education" className="nav-link">Education</a>
          
            <a href="#contact" className="contact-nav">Contact</a>
            
      </div>
     





   {/* navbar for mobile is starting from here */}
     
<div className='nav-popup' id="nav-popup">
  <RxCross1 className='cross' onClick={removeNavPopup}/>
     <a href="#" className="nav-link-mobile" onClick={removeNavPopup}>Home</a>
        <a href="#about" className="nav-link-mobile" onClick={removeNavPopup}>About</a>
         <a href="#experience" className="nav-link-mobile" onClick={removeNavPopup}>Experience</a>
          <a href="#projects" className="nav-link-mobile" onClick={removeNavPopup}>Projects</a>
           <a href="#certification" className="nav-link-mobile" onClick={removeNavPopup}>Certification</a>
           <a href="#education" className="nav-link-mobile" onClick={removeNavPopup}>Education</a>
          
            <a href="#contact" className="nav-link mobile-contact" onClick={removeNavPopup}>Contact</a>
</div>
















    <div className="nav-bar-mobile">
          <div className='nav-icon-mobile'>
      <a
  href="https://www.linkedin.com/in/tushar-mal-972329338"
  target="_blank"
  rel="noopener noreferrer"
>
  <GrLinkedin className="navicon nav-linkedin" />
</a>


      <a
  href="https://www.naukri.com/mnjuser/profile?id=&altresid"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="./Images/naukri-logo.png" className='navicon nav-naukri'/>
</a>

     <a
  href="https://github.com/tusharmal711"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaGithubSquare className='navicon nav-github' />
</a>
      
        <a
  href="https://www.facebook.com/tushar.mal.33"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaFacebook className='navicon nav-facebook'/>
</a>
      
     

          </div>
     
     
      <IoReorderThree className='three-bar' onClick={showNavPopup}/>
     
      
      </div>
     




  {/* navbar for mobile is ending here */}







































      {/* Sections */}
      <div> {/* offset for fixed navbar */}



        <section id="#" className='home'>
         <div className='home-text'>
            <div className='home-text-content'>
             <h3>Hey , I am Tushar Mal</h3>
             <h1>I am a full-stack <span className='wd'>web developer,</span>  with <span className='wd'>3 years of experience</span> in web development.</h1>
             <p>Currently learning and working in MERN technology .</p>
             </div>
             <div>
            <button onClick={() => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}}>
  Get In Touch
</button>

             </div>
            
         </div>
         <div className='home-image'>
             <div className='image-background'>
              <img src="./Images/tushar-profile.png" className='profile-img' alt="not load"/>
             </div>
         </div>
        </section>








        <section id="about" className='about'>
           <h2 className='ab-h'>About Me</h2>
         <div className='about-image'>
            <div className='about-img-background'  style={{ backgroundImage: `url('./Images/brush-background.png')`}}>
               <img src="./Images/about-logo.png" className='profile-photo' alt="not load"/>
            </div>
         </div>
         <div className='about-text'>
           <h2>About Me</h2>
           <div className='a-t'>
               <p><span className='H' style={{color:"black"}}>H</span>i! I’m Tushar Mal, a passionate <span>Web Developer</span> with a strong foundation in building fast, responsive, and user-friendly websites and web applications.</p>
             <p>With experience in both frontend and backend development, I specialize in crafting clean code and creating seamless user experiences using modern technologies like <span>React, Node.js, MongoDB, and Express.</span>I also have experience in <span>PHP and MySql</span>. I enjoy solving real-world problems through code and turning complex ideas into elegant digital solutions.</p>
          
            <p>When I’m not coding, you can find me exploring the latest web trends, contributing to open-source projects, or writing tech blogs.</p>

           </div>
         </div>
        </section>









          <section id="experience" className='experience'>
          <h2>Experience</h2>
          <div className='ex-container'>
                <div className='left-experience'>
                   <div className='zero-left'>
                     <h3>Industry experience</h3>
                     <p>Fresher</p>
                   </div>
                        <div className='first-left'>
                           
                             <div className='first-left-div'>
                                     <div>
                                          <img src="./Images/HTML-logo.png" className='basic html'/>
                                          <h3>HTML</h3>
                                     </div>
                                     <div>
                                          <img src="./Images/CSS-logo.png" className='basic css'/>
                                          <h3>CSS</h3>
                                     </div>
                                     <div>
                                          <img src="./Images/JAVASCRIPT-logo.png" className='basic javascript'/>
                                          <h3>JAVASCRIPT</h3>
                                     </div>
                             </div>
                        </div >
                        <div className="second-left">
                             <div className='first-left-div'>
                                     <div>
                                          <img src="./Images/react-logo.png"  className='basic react'/>
                                          <h3>REACT</h3>
                                     </div>
                                     <div>
                                          <img src="./Images/NODE-ICON.png" width="100px" className='basic node'/>
                                          <h3>NODE JS</h3>
                                     </div>
                                     <div>
                                          <img src="./Images/EXPRESS-ICON.png" className='basic express'/>
                                          <h3>EXPRESS JS</h3>
                                     </div>
                             </div>
                        </div>
                        <div className="third-left">
                            <div className='first-left-div'>
                                     <div>
                                          <img src="./Images/mongodb-logo.png"  width="100px"className='basic mongodb'/>
                                          <h3>MONGODB</h3>
                                     </div>
                                     <div>
                                          <img src="./Images/MYSQL-LOGO.png" width="100px" className='basic node'/>
                                          <h3>MYSQL</h3>
                                     </div>
                                     <div>
                                          <img src="./Images/PHP-LOGO.png" className='basic express'/>
                                          <h3>PHP</h3>
                                     </div>
                             </div>
                        </div>





                </div>
                <div className='right-experience'>
                  <div className='right-first'>
                        <div className='mind-img'>
                            <img src="./Images/mind.png" />
                        </div>
                        <div className='mind-text'>
                               <h1>MindChat (chating web application)</h1>
                               <p>Currently working on as a Full-Stack developer(started 01/03/2025)</p>
                               <p>Building with MERN</p>
                               <p>Link : <a href="https://mindchat-one.vercel.app/">https://mindchat-one.vercel.app/</a></p>
                        </div>
                  </div>
                  <div className='right-second'>
                        <div className='mind-img att'>
                            <img src="./Images/attendence.png" />
                        </div>
                        <div className='mind-text'>
                               <h1>AttendanceBook (student attendance management system)</h1>
                               <p>Worked as a Full-Stack developer</p>
                               <p>Time period : 09/2023 - 04/2024</p>
                               <p>Building with HTML , CSS , JAVASCRIPT , PHP , MYSQL (DATABASE)</p>
                               <p>It was a college group project of 4 members of group . I led the team .</p>
                               <p>Link : <a href="https://attendence.lovestoblog.com/">https://attendence.lovestoblog.com/</a></p>
                        </div>
                  </div>
                </div>
          </div>
        </section>


        











         <section id="projects" className='projects'>
         <h1>Projects</h1>
         <div className='project-container'>
                 <div className='first-project'>
                    <div className='img-section'>
                         <img src="./Images/mindchat.png" />
                    </div>
                    <div className='text-sec'>
                           <h2>MindChat</h2>
                           <p className='sec-p'>Build a chat app using React , Node js , Express js , MongoDB , Socket.io.</p>
                           <span><p>MERN STACK</p><p>REACT</p></span>
                           <span><p>NODE JS</p><p>EXPRESS JS</p></span>
                           <span><p>MONGODB</p><p>SOCKET.IO</p></span>
                           <span><p>CLOUDINARY</p><p>GIT</p></span>
                           
                           <div className='project-button'>
                              <a href="https://mindchat-one.vercel.app/">
                                 <button>Demo</button>
                              </a>
                              <a href="https://github.com/tusharmal711/MindChatDeploy">
                                 <button>Source</button>
                              </a>
                              
                              
                           </div>
                           
                    </div>
                    
                 </div>




                 <div className='second-project'>
                      <div className='img-section'>
                         <img src="./Images/atten.png" />
                    </div>
                    <div className='text-sec'>
                           <h2>AttendanceBook</h2>
                           <p className='sec-p'>Build a student attendance management system using HTML , CSS , JAVASCRIPT , PHP , MYSQL DATABASE .</p>
                           <span><p>HTML</p><p>CSS</p></span>
                           <span><p>JAVASCRIPT</p><p>PHP</p></span>
                           <span><p>MYSQL</p></span>
                           
                           
                           <div className='project-button'>
                            <a href="https://attendence.lovestoblog.com/">
                             <button>Demo</button>
                            </a>
                              <a href="https://github.com/tusharmal711/AttendanceBook">
                               <button>Source</button>
                              </a>
                              
                           </div>
                           
                    </div>
                 </div>







                 <div className='third-project'>
                      <div className='img-section'>
                         <img src="./Images/calculator.png" />
                    </div>
                    <div className='text-sec'>
                           <h2>Calculator</h2>
                           <p className='sec-p'>Build a calculator using HTML , CSS , JAVASCRIPT . </p>
                           <span><p>HTML</p><p>CSS</p></span>
                           <span><p>JAVASCRIPT</p><p>GIT</p></span>
                          
                           
                           <div className='project-button'>
                            <a href="https://tusharmal711.github.io/calculator/">
                               <button>Demo</button>
                            </a>
                            <a href="https://github.com/tusharmal711/calculator">
                                <button>Source</button>
                            </a>
                              
                              
                           </div>
                           
                    </div>
                 </div>




         </div>
        </section>














          <section id="certification" className='certification'>
          <h1>Certification</h1>
         <div className='certi-container'>
          <div className='left-certi'>
              <img src="./Images/certificate.png"/>
          </div>
          <div className='right-certi'>
              
              <h2>Received certificate of completion MERN full-stack course from <a href="https://www.udemy.com/">https://www.udemy.com/</a></h2>
              <p>I learnt React , Node js , Express js , MongoDB from this course.</p>
              <p>I learnt a lots of thing by completing real-world project assignment via this course .</p>
              <p>I am very thankful to udemy and the course provider . </p>
          </div>
         </div>
        </section>











         <section id="education" className='education'>
          <h1>Education</h1>
          <div className='education-container'>
              <div className='edu1'>
                <img src="./Images/madhymik-logo.png"/>
                   <h2>SECONDARY</h2>
                   <p>School : Udaynarayanpur Sarada Charan Institution</p>
                  <p>Board : WBBSE</p>
                  <p>Passing Year : 2019 </p>
                  <p>Marks : 81.71%</p>
              </div>

              <div className='edu1'>
                 <img src="./Images/higher-secondary.png"/>
                   <h2>HIGHER SECONDARY</h2>
                   <p>School : Udaynarayanpur Sarada Charan Institution</p>
                  <p>Board : WBCHSE </p>
                  <p>Passing Year : 2021 </p>
                  <p>Marks : 77.4%</p>
              </div>

              <div className='edu2'>
                   <img src="./Images/graduation-logo.png" />
                   <h2>GRADUATION</h2>
                   <p>College : Tarakeswar Degree College</p>
                  <p>University :  Burdwan University </p>
                  <p>Passing Year : 2021 </p>
                  <p>Marks : 77.4%</p>
              </div>
              <div className='edu1'>
                 <img src="./Images/mm-logo.png" />
                   <h2>MASTERS</h2>
                   <span>Current </span>
                   <p>College : Techno Main Salt Lake</p>
                  <p>University :  MAKAUT </p>
                  
                  
              </div>





          </div>
         
        </section>












         <section id="contact" className='contact'>
          <h1>Contact</h1>
          <div className='contact-container'>
               <div className='contact-left'>
                      <div className='contact-form'>
                         <h2>Get In Touch</h2>
                         <form>
                            <div>
                                <input type="text" placeholder='Name' required/>
                            </div>
                            <div>
                              <input type="text" placeholder='Subject' required/>
                            </div>
                            <div>
                              <input type="email" placeholder='Email' required/>
                            </div>
                            <div>
                             <textarea  rows="5" placeholder="Type message" required></textarea>

                            </div>

                              <div>
                                   <button>Submit</button>
                              </div>

                         </form>
                      </div>
               </div>
               <div className='contact-right'>
                     <h3>Feel free to reach out ?</h3>
                   
                     <p> <img src="./Images/gmail-logo.png" className='insta'/>tusharmal711@gmail.com</p>
                     <div className='social-icon'>



                         <a href="https://www.linkedin.com/in/tushar-mal-972329338">
                              <GrLinkedin className='icon linkedin'/>
                         </a>
                    

                        <a href="https://www.naukri.com/mnjuser/profile?id=&altresid">
                        <img src="./Images/naukri-logo.png" className='naukri'/>
                        </a>
                          


                          <a href="https://github.com/tusharmal711">
                          <FaGithubSquare className='icon github'/>
                          </a>
                           

                           <a href="https://www.facebook.com/tushar.mal.33">
                            <FaFacebook className='icon facebook'/>
                           </a>
                    
                      <a href="https://www.instagram.com/myself__tushar_/">
                       <img src="./Images/instagram-Logo.png" className='insta'/>
                      </a>
                     
                    
                    </div>
          </div>

          </div>
        </section>





      </div>
    </div>
  );
};

export default Home;
