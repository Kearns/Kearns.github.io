import React from 'react'

const About = ({active})=> {
    return (
    <section id="about" className={`about page ${active ? 'active' : 'inactive'}`}>
      <div className="container-fluid text-center intro about__intro">
        <div className="row">
          <div className="col-md-push-3 col-md-6">
            <img src="/images/my-photo.jpg" />
            <h2>Patrick Kearns</h2>
            <h3>Front End Developer | UI/UX Designer | Code Monkey</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Summary</h3>
            <p>
              I am a front-end developer with a passion for the latest in web technology.
              From the lastest Javascript frameworks to new CSS processors, I am constantly on a quest to learn new technologies.
              I am also a big fan of Node.js for both enhancing front-end development, and building fast server-side applications.
            </p>
            <p>
              My studies in university have focused on Human-Computer Interaction (HCI) and the role of AI and machine learning in modern user interfaces.
              Thanks to advancements in browser capabilities such as WebVR and web technologies like Progressive Web Apps, I firmly believe the web as a platform is the future of computing.
              Finding new and interesting ways to enrich our lives with technology is what I want to dedicate my life to.  
            </p>
            <h3>Skills</h3>
            <ul>
              <li>Turning wireframes and mock ups into pixel perfect web sites and applications.</li>
              <li>Responsive web design utilizing the latest CSS standards such as flexbox and libraries like Bootstrap and Foundation.</li>
              <li>Developing high-performance Javascript driven front ends following best practices and standards.</li>
              <li>Developing data driven displays and interfaces with asynchronous API calls.</li>
            </ul>
          </div>
          
          
          <div className="col-md-6 about__resume">
            <h3>Resume</h3>
            <dl>
            <dt>Leader Graphic Design</dt>
            <dd>
              <span>Full-Stack Developer / UI Designer / Consultant | <em>2014 - Current</em></span>
              <p>Designing and developing marketing, application, and IT solutions for clients. Build, deploy, and manage client websites & applications on a variety of platforms.</p>
            </dd>
            <dt>Solicom LTD.</dt>
            <dd>
              <span>IT Consultant | <em>Freelance</em></span>
              <p>Helped growing wholesale specialty company implement intranet inventory systems utilizing nodejs and available ecommerce APIs. Trained employees on managing ecommerce sales.</p>
            </dd>
            <dt>Sterling & Knight</dt>
            <dd>
              <span>Manager / IT | <em>2011 - 2014</em></span>
              <p>Managed chain of four jewelry and pawn stores. Updated company IT infrastructure. Managed and updated security systems. Managed wordpress website.</p>
            </dd>
            </dl>
            <h3>Education</h3>
            <dl>
              <dt>Southern New Hampshire University</dt>
              <dd>Bachelors in Information Technology | <em>2014 - 2018</em></dd>
            </dl>
          </div>
        </div> 
      </div>
    </section>
    )
}

export default About