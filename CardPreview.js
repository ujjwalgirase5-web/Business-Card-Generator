import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

const CardPreview = ({ data }) => {
  const cardRef = useRef(null);

  const downloadCard = async () => {
    if (cardRef.current) {
      const canvas = await html2canvas(cardRef.current, { scale: 3 });
      const link = document.createElement('a');
      link.download = `${data.name.replace(' ', '_')}_BusinessCard.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }
  };

  const getTemplateStyle = () => {
    switch(data.template) {
      case 'corporate': return 'card-template-corporate';
      case 'creative': return 'card-template-creative';
      default: return 'card-template-minimal';
    }
  };

  return (
    <div className="preview-container">
      <div 
        ref={cardRef} 
        className={`business-card ${getTemplateStyle()}`}
        style={{ backgroundColor: data.bgColor, color: data.bgColor === '#F8FAFC' ? '#111827' : '#FFFFFF' }}
      >
        <div className="card-content">
          {data.image && <img src={data.image} alt="Logo" className="card-logo" />}
          <div className="card-info">
            <h2 className="card-name">{data.name || 'Your Name'}</h2>
            <p className="card-title">{data.jobTitle || 'Job Title'}</p>
            <div className="card-details">
              <span>{data.phone}</span>
              <span>{data.email}</span>
              <span>{data.website}</span>
            </div>
          </div>
        </div>
      </div>
      <button onClick={downloadCard} className="btn-export">Download PNG</button>
    </div>
  );
};

export default CardPreview;