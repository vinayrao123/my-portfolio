import './App.css';
import CaseStudy from './components/CaseStudy';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Vinay Rao</h1>
        <div className="contact-info">
          <a href="http://www.linkedin.com/in/vinayrao27786" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:reach.vinayrao@gmail.com">Email</a>
          <span>Phone: +91-6361109595</span>
        </div>
      </header>

      <section className="summary">
        <h2>About Me</h2>
        <p>I am a 2X founder with a passion for sports and education technology. With 13 years of experience in technology, I've worked as a test engineer, platform developer, technology leader, and engineering manager across the US and India.</p>
        <p>My first startup, Taproots.ai, focused on making tech advancements accessible to grassroots sports academies and athletes. Currently, I'm building CricketIQ, a 2D mobile game that's revolutionizing cricket engagement.</p>
        <p>I hold a Masters degree in Computer Networking from North Carolina State University and an advanced certification in AI/ML from IIIT-Hyderabad. I actively mentor students and enjoy writing about technical topics in accessible ways.</p>
      </section>

      <section className="experience">
        <h2>Professional Experience</h2>
        <CaseStudy
          title="PagalSports India Pvt Ltd - Co-founder"
          period="March 2024 - Present"
          problem="Building CricketIQ, a mobile game to engage cricket fans"
          insight="Leveraging modern tech stack for scalable mobile gaming"
          role="Co-founder & Technical Lead"
          process="React Native, Python, Google's Gemini, Supabase, Firebase"
          impact="Successfully launched on both PlayStore and AppStore"
          link="https://play.google.com/store/apps/details?id=com.pagalfan"
        />
        <CaseStudy
          title="Taproots AI Pvt Ltd - Co-founder"
          period="January 2022 - February 2024"
          problem="Making tech advancements accessible to grassroots sports"
          insight="Combining AI with sports training"
          role="Co-founder & Technical Lead"
          process="Flutter, Firebase, Golang, Python, OpenCV, Mediapipe"
          impact="Developed innovative solutions for sports academies"
        />
        <CaseStudy
          title="Cohesity - Engineering Manager"
          period="March 2020 - January 2022"
          problem="Scaling developer tools and resources"
          insight="Building tools that accelerate product development"
          role="Engineering Manager, Developer Experience"
          process="Led cross-geo team of 11, scaled tools from 100 to 500+ users"
          impact="Successfully scaled team from 5 to 11 members, enabled career growth"
        />
        <CaseStudy
          title="Cisco Systems - Technical Leader"
          period="June 2016 - March 2020"
          problem="Leading technical aspects of product development"
          insight="Innovative AI-driven solutions for testing and development"
          role="Technical Leader, Functional Test and Tooling"
          process="Architected and developed AI-driven tools, led team of 14"
          impact="Published research papers, developed multiple successful tools"
        />
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>IIIT-Hyderabad</h3>
          <p>Advanced Certification in AI and Machine Learning (2019)</p>
        </div>
        <div className="education-item">
          <h3>North Carolina State University</h3>
          <p>Master of Science in Computer Networking (2011)</p>
        </div>
        <div className="education-item">
          <h3>BMSCE, Visvesvaraya Technological University</h3>
          <p>Bachelor of Engineering in Telecommunication Engineering (2007)</p>
        </div>
      </section>
    </div>
  );
}

export default App;
