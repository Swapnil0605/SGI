'use client';

import React from 'react';
import { X } from 'lucide-react';
import './Modals.css';

export default function StoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop active" onClick={onClose}>
      <div className="modal-card modal-card-lg" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-tag">SURANNAVAR HOSPITAL HERITAGE</span>
            <h3>From Healthcare Excellence to Healthcare Education</h3>
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
        <div className="story-modal-body">
          <div className="story-modal-media">
            <img
              src="/images/robotic_hospital.jpg"
              alt="Surannavar Superspeciality Hospital Robotic Joint Replacement"
            />
          </div>
          <div className="story-modal-text">
            <h4>Belagavi's 1st Robotic Joint Replacement Pioneers</h4>
            <p>
              Surannavar Superspeciality Hospital achieved a historic milestone by introducing cutting-edge robotic joint replacement technology to Belagavi. Driven by the philosophy of <em>Restore • Recover • Revive</em>, the hospital delivers surgical precision and clinical care of the highest standards.
            </p>
            <h4>Advancing into Healthcare Education</h4>
            <p>
              To sustain healthcare excellence, we established the Surannavar Group of Institutions. Our students train directly inside this advanced ecosystem, mastering practical clinical protocols alongside seasoned medical specialists.
            </p>
            <div className="story-metrics">
              <div className="metric-item">
                <strong>1st</strong>
                <span>Robotic Joint Tech in Belagavi</span>
              </div>
              <div className="metric-item">
                <strong>100+</strong>
                <span>Hospital Beds for Clinical Rotations</span>
              </div>
              <div className="metric-item">
                <strong>RGUHS</strong>
                <span>Affiliated Programmes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
