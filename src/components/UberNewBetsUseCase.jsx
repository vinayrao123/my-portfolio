import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './UberNewBetsUseCase.css';

function UberNewBetsUseCase() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/my-portfolio/uber-new-bets-usecase.md')
      .then(response => response.text())
      .then(text => setContent(text))
      .catch(error => console.error('Error loading markdown:', error));
  }, []);

  return (
    <div className="uber-new-bets-container">
      <div className="markdown-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default UberNewBetsUseCase; 