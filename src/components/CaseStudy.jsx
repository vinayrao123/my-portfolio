function CaseStudy({ title, problem, insight, role, process, impact }) {
    return (
      <div className="case-study">
        <h3>{title}</h3>
        <p><strong>Problem:</strong> {problem}</p>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Process:</strong> {process}</p>
        <p><strong>Impact:</strong> {impact}</p>
      </div>
    );
  }
  
  export default CaseStudy;
  