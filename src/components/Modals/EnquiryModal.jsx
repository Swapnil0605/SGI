import React from 'react';
import { X } from 'lucide-react';
import './Modals.css';

export default function EnquiryModal({
  isOpen,
  onClose,
  selectedCollege,
  formData,
  setFormData,
  formSubmitted,
  onSubmit
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-tag">ADMISSIONS 2026–27</span>
            <h3>Enquire & Apply Now</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>
        <form className="modal-form" onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="enq-name">Student Full Name *</label>
              <input
                id="enq-name"
                type="text"
                required
                placeholder="e.g. Rahul Patil"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="enq-phone">Mobile Number *</label>
              <input
                id="enq-phone"
                type="tel"
                required
                placeholder="e.g. +91 98450 12345"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="enq-email">Email Address *</label>
              <input
                id="enq-email"
                type="email"
                required
                placeholder="name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="enq-college">Select College *</label>
              <select
                id="enq-college"
                required
                value={formData.college || selectedCollege}
                onChange={(e) => setFormData({ ...formData, college: e.target.value })}
              >
                <option value="">-- Choose College --</option>
                <option value="Surannavar College of Nursing">Surannavar College of Nursing</option>
                <option value="Surannavar College of Physiotherapy">Surannavar College of Physiotherapy</option>
                <option value="Surannavar College of Allied Health Sciences">Surannavar College of Allied Health Sciences</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="enq-message">Message or Questions (Optional)</label>
            <textarea
              id="enq-message"
              rows="3"
              placeholder="Ask about admissions, fee structure, hostel facilities, or eligibility..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Submit Application Enquiry
          </button>
          {formSubmitted && (
            <div className="form-feedback success">
              Thank you! Your enquiry has been received. Our Admissions Team will contact you shortly.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
