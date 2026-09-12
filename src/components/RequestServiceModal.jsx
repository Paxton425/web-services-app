import React from 'react';
import './RequestServiceModal.css';

function RequestServiceModal({ setIsModalOpen }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your quote request has been sent.');
    setIsModalOpen(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="glass-card modal-container">
        {/* Close Button */}
        <button 
          className="modal-close-btn"
          onClick={() => setIsModalOpen(false)}
          aria-label="Close Modal"
        >
          ✕
        </button>

        <h3 className="modal-title">Start Your Project</h3>
        <p className="modal-description">
          Tell us a bit about what you need and Sphe’s Web Services will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input 
              className="modal-input" 
              required 
              type="text" 
              placeholder="John Doe" 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email / Phone Number</label>
            <input 
              className="modal-input" 
              required 
              type="text" 
              placeholder="john@example.com or +27..." 
            />
          </div>

          <div className="form-group">
            <label className="form-label">Project Type</label>
            <select className="modal-input">
              <option value="custom">Custom Website Design</option>
              <option value="redesign">Website Redesign</option>
              <option value="ecommerce">E-Commerce Store</option>
              <option value="seo">SEO & Optimization</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Project Details</label>
            <textarea 
              className="modal-input modal-textarea" 
              rows="3" 
              placeholder="Briefly describe your goals..." 
            />
          </div>

          <button type="submit" className="btn-primary modal-submit-btn">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestServiceModal;