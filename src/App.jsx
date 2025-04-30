import './App.css';
import CaseStudy from './components/CaseStudy';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Hi, I'm [Your Name]</h1>
        <p>Product builder. Founder. Designer. Engineer.</p>
      </header>

      <section>
        <h2>Featured Case Studies</h2>
        <CaseStudy
          title="Startup A: [Product Name]"
          problem="What problem did you solve?"
          insight="What unique insight did you have?"
          role="What were your responsibilities?"
          process="How did you build it?"
          impact="What was the impact (users, retention, love)?"
        />
        <CaseStudy
          title="Startup B: [Product Name]"
          problem="Another challenge, another solution."
          insight="What made this one different?"
          role="Your role in product/eng/code/design."
          process="Sketches, Miro flows, Figma screens."
          impact="Customer feedback, outcomes, lessons."
        />
      </section>
    </div>
  );
}

export default App;
