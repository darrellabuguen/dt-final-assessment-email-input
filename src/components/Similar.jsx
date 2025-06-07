import React, { useState } from 'react'

const Similar = ({ similar }) => {
  return (
    <ul className='similar-email-container'>
      {similar.map((similarEmail, index) => {
        return (
          <li key={index}>{similarEmail}</li>
        )
      })}
    </ul>
  )
}

export default Similar