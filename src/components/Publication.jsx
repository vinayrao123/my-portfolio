function Publication({ title, venue, date, link, description }) {
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
    </div>
  );
}

export default Publication; 