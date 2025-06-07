import React, { useState } from 'react'

const Similar = ({ similar, setRegisteredEmails, setTyped, id, setId }) => {
  const handleClicked = (e) => {
    const emailInput = document.querySelector(".email-input input");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newEmail = {
      id: id,
      email: e.target.textContent,
      validation: emailRegex.test(e.target.textContent) ? "valid-email" : "invalid-email"
    }
    setRegisteredEmails(prev => [...prev, newEmail])
    setTyped(false);
    setId(prev => prev + 1);
    emailInput.value = "";
  }
  return (
    <ul className='similar-email-container'>
      {similar && similar.map((similarEmail, index) => {
        return (
          <li key={index} onClick={handleClicked} >
            {similarEmail}
          </li>
        )
      })}
    </ul>
  )
}

export default Similar