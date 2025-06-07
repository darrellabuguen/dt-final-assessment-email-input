import React, { useState } from 'react'
import errorIcon from '../assets/images/error-circle.png'
import closeIcon from '../assets/images/close.png'

const RegisteredEmails = ({ registered, handleRemoveEmail }) => {
  return (
    <>
      {registered && registered.map((registeredItem) => {
        return (
          <li key={registeredItem.id} className={registeredItem.validation}>
            <p className={registeredItem.id}>{registeredItem.email}</p>
            <span onClick={handleRemoveEmail}>
              {registeredItem.validation === "valid-email" && <img src={closeIcon} alt="error" style={{ pointerEvents: "none" }} />}
              {registeredItem.validation !== "valid-email" && <img src={errorIcon} alt="error" style={{ pointerEvents: "none" }} />}
            </span>
          </li>
        )
      })}
    </>
  )
}

export default RegisteredEmails