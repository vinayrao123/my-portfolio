import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CaseStudy from './components/CaseStudy';
import Publication from './components/Publication';
import TaprootsExperience from './components/TaprootsExperience';
import UberNewBetsUseCase from './components/UberNewBetsUseCase';
import Dialog from './components/Dialog';
import { useState } from 'react';

function App() {
  const [dialog, setDialog] = useState({ isOpen: false, content: '', title: '' });

  const showDialog = (content, title) => {
    setDialog({ isOpen: true, content, title });
  };

  const closeDialog = () => {
    setDialog({ isOpen: false, content: '', title: '' });
  };

  return (
    <Router>
      <div className="app">
        <Dialog 
          isOpen={dialog.isOpen} 
          onClose={closeDialog} 
          content={dialog.content} 
          title={dialog.title}
        />
        <Routes>
          <Route path="/taproots-experience" element={<TaprootsExperience />} />
          <Route path="/uber-new-bets-usecase" element={<UberNewBetsUseCase />} />
          <Route path="/" element={
            <>
              <header className="header">
                <h1>Vinay Rao</h1>
                <div className="contact-info">
                  <a href="http://www.linkedin.com/in/vinayrao27786" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); showDialog('reach.vinayrao@gmail.com', 'Email Address'); }}>Email</a>
                  <a href="#" onClick={(e) => { e.preventDefault(); showDialog('+91 6361109595', 'Phone Number'); }}>Phone</a>
                </div>
              </header>

              <section className="summary">
                <h2>About Me</h2>
                <p>I am a 2X founder with a passion for building products that help people and businesses. With over 16 years of experience in technology, I've worked as a Sports Technology entrepreneur, platform tester and developer, technology leader, and engineering manager across US and India.</p>
                <p>My first startup, Taproots.ai, focused on making tech advancements accessible to grassroots sports academies and athletes. In my current startup, PagalFan, I have built a 2D mobile game called CricketIQ that's bringing a new way to engage cricket enthusiasts.</p>
                <p>I hold a Masters degree in Computer Networking from North Carolina State University and an advanced certification in AI/ML from IIIT-Hyderabad. I actively mentor students and enjoy writing about technical topics.</p>
              </section>

              <section className="career-interests">
                <h2>Career Interests</h2>
                <p>I am seeking a product role where I can leverage my technical expertise alongside my entrepreneurial experience in product strategy and market understanding. My background in both technology and business, combined with strong communication skills, enables me to effectively bridge the gap between technical solutions and customer needs. I excel at translating complex technical concepts into clear business value and converting customer requirements into actionable technical outcomes. I am eager to join a team where I can apply these skills to drive meaningful product innovation and business growth.</p>
              </section>

              <section className="product-case-studies">
                <h2>Product Case Studies</h2>
                <div className="case-study-item">
                  <h3>Uber Vacations</h3>
                  <p>A product hypothesis to increase revenue by increasing the number of transactions per user on the Uber app. This presentation explores a new product within the 
                    Uber app that would allow users to manage all their on-ground transportation needs during vacations through the Uber app.</p>
                  <a 
                    href="https://www.figma.com/deck/mQV6eAhLbqCBAFYZz3uKFT/Uber-Vacations?node-id=1-42&t=HYqQtdOO8Y7DF6VZ-1" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="case-study-link"
                  >
                    View Presentation
                  </a>
                </div>
              </section>

              <section className="experience">
                <h2>Professional Experience</h2>
                <CaseStudy
                  Title="PagalSports India Pvt Ltd - Co-founder"
                  Period="March 2024 - Present"
                  Location="Bangalore, India"
                  Challenge="Building CricketIQ, a mobile game to engage cricket fans"
                  Role="Co-founder & CTO"
                  ProductManagement="Led product strategy from ideation to launch, defining core gameplay mechanics and retention loops. Integrated Google Gemini for marketing funnels (https://cricket-quiz-ai.pagalfan.com/) and implemented analytics for DAU tracking and engagement metrics."
                  TechStack="React Native, Python, Google's Gemini API, Supabase, Firebase, AWS LightSail"
                  Impact="Successfully launched on both PlayStore and AppStore and acquired over 3000 users in 3 weeks with overall users on Android alone crossing 50K"
                  Link="https://play.google.com/store/apps/details?id=com.pagalfan"
                />
                <CaseStudy
                  Title="Taproots AI Pvt Ltd - Co-founder"
                  Period="January 2022 - February 2024"
                  Location="Bangalore, India"
                  Challenge="Making tech advancements accessible to grassroots sports and exploring the fan engagement space"
                  Role="Founder & CEO"
                  ProductManagement="Conducted user research with academy owners and athletes to identify market gaps. Led product discovery, roadmap, and GTM strategy. Built & launched MVP in 4 months and acquired 3 paying customers for the SaaS product with 150+ grassroots athletes onboarded."
                  TechStack="Flutter, Firebase, Golang, Python, OpenCV, Mediapipe"
                  Impact="Acquired 3 paying customers (B2B) and 150+ users (B2C) for the SaaS product and for the fan engagement products, we were ranked #8 in the ICC (International Cricket Council) Fan Engagement Challenge 2023"
                  Link={<Link to="/taproots-experience" className="experience-link">View Product Demos</Link>}
                />
                <CaseStudy
                  Title="Guest Lecturer - Programming for Non-CS Students"
                  Period="2018 - Present"
                  Location="Bangalore, India"
                  Challenge="Making coding feel less daunting to non computer science students"
                  Role="Guest Lecturer"
                  TechStack="Python"
                  Impact="Published research work with students and helped develop a builder's mindset by reducing friction towards writing code"
                />
                <CaseStudy
                  Title="Cohesity - Engineering Manager"
                  Period="March 2020 - January 2022"
                  Location="Bangalore, India"
                  Challenge="Scaling developer tools and resources"
                  Role="Engineering Manager, Developer Experience"
                  TechStack="Led cross-geo team of 11, scaled users of internal tools from 100 to 500+ users"
                  Impact="Successfully scaled team from 5 to 11 members, enabled career growth for team members"
                />
                <CaseStudy
                  Title="Cisco Systems - Technical Leader"
                  Period="June 2016 - March 2020"
                  Location="CA, USA and Bangalore, India"
                  Challenge="Leading technical aspects of product development"
                  Role="Technical Leader, Functional Test and Tooling"
                  TechStack="Architected and developed AI-driven tools to help improve the automation framework, led team of 14"
                  Impact="Published research papers, developed multiple successful tools"
                />
                <CaseStudy
                  Title="Nuage Networks - Test Engineer"
                  Period="June 2015 - May 2016"
                  Challenge="Running functional tests for the product"
                  Role="Test Engineer"
                  TechStack="Python, TCL/TK"
                  Impact="Successfully ran functional tests for the product"
                  Location="CA, USA"
                />
                <CaseStudy
                  Title="Extreme Networks - Software Test Engineer"
                  Period="June 2011 - May 2014"
                  Challenge="Ensuring functional correctness of the product"
                  Role="Software Test Engineer"
                  TechStack="Python, TCL/TK"
                  Impact="Successfully ran functional tests for the product"
                  Location="NC, USA"
                />
              </section>

              <section className="publications">
                <h2>Publications & Research</h2>
                <Publication
                  title="Beyond Benchmarks: Introducing Sentiment Spread for Better LLM Summarization in Vertical-Specific Content"
                  venue="Medium"
                  description="Explored a new metric to improve LLM summarization in vertical-specific content summarization"
                  link="https://medium.com/@vinayrao/beyond-benchmarks-introducing-sentiment-spread-for-better-llm-summarization-in-vertical-specific-1a3caed3b9f8"
                />
                <Publication
                  title="On-Device AI for Chat Applications: Enhancing Privacy and Productivity through Tonality-Driven Paraphrasing"
                  venue="ICT4SD 2025"
                  description="Selected for presentation at ICT4SD 2025 conference"
                  link="https://ict4sd.org/cfp.php"
                />
                <Publication
                  title="Using Natural Language Processing to Translate Plain Text into Pythonic Syntax in Kannada"
                  venue="ResearchGate"
                  link="https://www.researchgate.net/publication/345944524_Using_Natural_Language_Processing_to_Translate_Plain_Text_into_Pythonic_Syntax_in_Kannada"
                />
                <Publication
                  title="AI Model to Predict System Operation Failures using Incremental Log Analysis"
                  venue="Cisco Developer Conference"
                  link="https://medium.com/analytics-vidhya/ai-model-to-predict-system-operation-failures-using-incremental-log-analysis-using-the-fast-ai-2764d4c4cf04"
                  description="Presented at Cisco developer conference, focusing on AI-driven failure prediction based on incremental log analysis"
                />
                <Publication
                  title="AI Driven Test Tag Predictor"
                  venue="Technical Disclosure Commons"
                  link="https://www.tdcommons.org/dpubs_series/2145/"
                  description="Published research on automated test tag prediction using AI"
                />
                <Publication
                  title="AI Bug Label Predictor"
                  venue="Medium"
                  link="https://medium.com/@vinayrao/associating-bug-labels-automatically-using-multi-label-classification-4459d320b614"
                  description="Research on automatic bug label prediction using multi-label classification"
                />
                <Publication
                  title="Testing and Troubleshooting Kubernetes Clusters Made Easy"
                  venue="Medium"
                  link="https://medium.com/@vinayrao/testing-and-troubleshooting-kubernetes-clusters-made-a-little-easy-cb842b205640"
                  description="Technical article on log-collector utility for Kubernetes clusters"
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
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
