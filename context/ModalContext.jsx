'use client';

import React, { createContext, useContext, useState } from 'react';
import EnquiryModal from '../src/components/Modals/EnquiryModal';
import StoryModal from '../src/components/Modals/StoryModal';

const ModalContext = createContext({
  openEnquiry: () => {},
  closeEnquiry: () => {},
  openStoryModal: () => {},
  closeStoryModal: () => {},
  isEnquiryModalOpen: false,
  isStoryModalOpen: false,
});

export function ModalProvider({ children }) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    message: '',
  });

  const openEnquiry = (college = '') => {
    setSelectedCollege(college);
    setFormData((prev) => ({ ...prev, college }));
    setIsEnquiryModalOpen(true);
    setFormSubmitted(false);
  };

  const closeEnquiry = () => {
    setIsEnquiryModalOpen(false);
  };

  const openStoryModal = () => {
    setIsStoryModalOpen(true);
  };

  const closeStoryModal = () => {
    setIsStoryModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setIsEnquiryModalOpen(false);
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', email: '', college: '', message: '' });
    }, 2400);
  };

  return (
    <ModalContext.Provider
      value={{
        openEnquiry,
        closeEnquiry,
        openStoryModal,
        closeStoryModal,
        isEnquiryModalOpen,
        isStoryModalOpen,
      }}
    >
      {children}

      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={closeEnquiry}
        selectedCollege={selectedCollege}
        formData={formData}
        setFormData={setFormData}
        formSubmitted={formSubmitted}
        onSubmit={handleFormSubmit}
      />

      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={closeStoryModal}
      />
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}
