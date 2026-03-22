import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import CardPreview from './components/CardPreview';
import TemplateSelector from './components/TemplateSelector';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: 'Julian Montgomery',
    jobTitle: 'Principal Architect',
    company: 'Obsidian Studio',
    phone: '+1 (555) 000-0000',
    email: 'julian@obsidian.io',
    website: 'www.obsidian.io',
    image: null,
    bgColor: '#111827', // Default dark
    template: 'minimal'
  });

  // Load from LocalStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('businessCardData');
    if (saved) setFormData(JSON.parse(saved));
  }, []);

  // Save to LocalStorage on change
  useEffect(() => {
    localStorage.setItem('businessCardData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '', jobTitle: '', company: '', phone: '', email: '', website: '',
      image: null, bgColor: '#4F46E5', template: 'minimal'
    });
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>The Curated Canvas</h1>
        <button onClick={resetForm} className="btn-reset">Reset Design</button>
      </header>
      
      <main className="editor-layout">
        <section className="controls-panel">
          <TemplateSelector 
            current={formData.template} 
            setTemplate={(t) => setFormData({...formData, template: t})} 
          />
          <Form 
            data={formData} 
            onChange={handleInputChange} 
            onImageUpload={handleImageUpload}
            onColorChange={(color) => setFormData({...formData, bgColor: color})}
          />
        </section>

        <section className="preview-panel">
          <CardPreview data={formData} />
        </section>
      </main>
    </div>
  );
};

export default App;