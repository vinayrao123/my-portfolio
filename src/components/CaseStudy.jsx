function CaseStudy({ title, period, problem, insight, role, process, impact, link }) {
  return (
    <div className="case-study">
      <div className="case-study-header">
        <h3>{title}</h3>
        {period && <span className="period">{period}</span>}
      </div>
      <div className="case-study-content">
        <p><strong>Problem:</strong> {problem}</p>
        <p><strong>Insight:</strong> {insight}</p>
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Process:</strong> {process}</p>
        <p><strong>Impact:</strong> {impact}</p>
        {link && (
          <p className="case-study-link">
            <a href={link} target="_blank" rel="noopener noreferrer">View Project →</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default CaseStudy;
  