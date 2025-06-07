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
            <span onClick={handleRemoveEmail} className={registeredItem.validation}></span>
          </li>
        )
      })}
    </>
  )
}

export default RegisteredEmails