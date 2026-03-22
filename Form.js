import React from 'react';

const Form = ({ data, onChange, onImageUpload, onColorChange }) => {
  return (
    <div className="form-section">
      <h3>Design Identity</h3>
      <div className="input-group">
        <label>Company Logo</label>
        <input type="file" onChange={onImageUpload} accept="image/*" />
      </div>
      
      <div className="input-group">
        <label>Full Name</label>
        <input type="text" name="name" value={data.name} onChange={onChange} placeholder="e.g. Alex Rivera" />
      </div>

      <div className="input-group">
        <label>Job Title</label>
        <input type="text" name="jobTitle" value={data.jobTitle} onChange={onChange} placeholder="Creative Director" />
      </div>

      <div className="input-grid">
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={data.email} onChange={onChange} />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input type="text" name="phone" value={data.phone} onChange={onChange} />
        </div>
      </div>

      <div className="input-group">
        <label>Card Background</label>
        <div className="color-swatches">
          {['#111827', '#4F46E5', '#6366F1', '#F8FAFC'].map(color => (
            <button 
              key={color}
              className={`swatch ${data.bgColor === color ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => onColorChange(color)}
            />
          ))}
          <input type="color" value={data.bgColor} onChange={(e) => onColorChange(e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Form;