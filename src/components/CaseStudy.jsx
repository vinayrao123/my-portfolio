function CaseStudy({ Title, Period, Challenge, Role, TechStack, Impact, Link, ProductManagement }) {
  return (
    <div className="case-study">
      <div className="case-study-header">
        <h3>{Title}</h3>
        {Period && <span className="period">{Period}</span>}
      </div>
      <div className="case-study-content">
        <p><strong>Challenge:</strong> {Challenge}</p>
        <p><strong>Role:</strong> {Role}</p>
        {ProductManagement && (
          <p><strong>Product Management:</strong> {ProductManagement}</p>
        )}
        <p><strong>Tech Stack:</strong> {TechStack}</p>
        <p><strong>Impact:</strong> {Impact}</p>
        {Link && (
          <p className="case-study-link">
            <a href={Link} target="_blank" rel="noopener noreferrer">View Project →</a>
          </p>
        )}
      </div>
    </div>
  );
}

export default CaseStudy;
  