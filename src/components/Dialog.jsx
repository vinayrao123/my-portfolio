import React from 'react';
import './Dialog.css';

function Dialog({ isOpen, onClose, content, title }) {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay" onClick={onClose}>
      <div className="dialog-content" onClick={e => e.stopPropagation()}>
        <button className="dialog-close" onClick={onClose}>×</button>
        <h3 className="dialog-title">{title}</h3>
        <div className="dialog-body">{content}</div>
      </div>
    </div>
  );
}

export default Dialog; 