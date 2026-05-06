function Publication({ title, venue, date, link, description, siteLink }) {
  return (
    <div className="publication">
      <div className="publication-header">
        <h3>
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        {date && <span className="publication-date">{date}</span>}
      </div>
      {venue && <p className="publication-venue">{venue}</p>}
      {description && <p className="publication-description">{description}</p>}
      {siteLink && (
        <p className="case-study-link">
          <a href={siteLink} target="_blank" rel="noopener noreferrer">View Website →</a>
        </p>
      )}
    </div>
  );
}

export default Publication; 