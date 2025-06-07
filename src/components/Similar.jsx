import React, { useState } from 'react'

const Similar = ({ similar }) => {
  let id = 0;
  return (
    <div className='similar-email-container'>
      {similar.map((similarEmail) => {
        id++;
        return (
          <div key={id}>{similarEmail}</div>
        )
      })}
    </div>
  )
}

export default Similar