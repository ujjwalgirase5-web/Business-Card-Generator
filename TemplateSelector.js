import React from 'react';

const TemplateSelector = ({ current, setTemplate }) => {
  const templates = [
    { id: 'minimal', name: 'Minimalist', description: 'Clean and airy' },
    { id: 'corporate', name: 'Corporate', description: 'Professional and bold' },
    { id: 'creative', name: 'Creative', description: 'Modern and vibrant' }
  ];

  return (
    <div className="template-selector-section">
      <h3>Select Template</h3>
      <div className="template-grid">
        {templates.map((template) => (
          <button
            key={template.id}
            className={`template-card ${current === template.id ? 'active' : ''}`}
            onClick={() => setTemplate(template.id)}
          >
            <div className={`template-preview-icon preview-${template.id}`}></div>
            <div className="template-info">
              <span className="template-name">{template.name}</span>
              <span className="template-desc">{template.description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;