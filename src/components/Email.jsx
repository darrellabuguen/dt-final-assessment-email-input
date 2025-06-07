import React, { useEffect, useState } from 'react'
import { getEmails } from '../services/email.service'
import Similar from './Similar';

const Email = () => {
  const [email, setEmail] = useState("");
  const [similarEmail, setSimilarEmail] = useState("");
  const [typed, setTyped] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value !== "") {
      setEmail(e.target.value);
      setTyped(true);
    } else {
      setTyped(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getEmails(email)
        .then(data => {
          setSimilarEmail(data);
        })
    }, 500)
  }, [email])

  return (
    <div>
      <input type="email" placeholder='Enter recipients...' onChange={handleInputChange} />
      {typed && <Similar similar={similarEmail} />}
    </div>
  )
}

export default Email