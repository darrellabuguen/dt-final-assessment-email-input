import React, { useEffect, useState } from 'react'
import { getEmails } from '../services/email.service'
import Similar from './Similar';
import RegisteredEmails from './RegisteredEmails';
import Loading from './Loading';

const Email = () => {
  const [email, setEmail] = useState("");
  const [similarEmail, setSimilarEmail] = useState("");
  const [typed, setTyped] = useState(false);
  const [registeredEmails, setRegisteredEmails] = useState([]);
  let [id, setId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.value !== "") {
      setEmail(e.target.value);
      setTyped(true);
    } else {
      setTyped(false);
    }
  }

  const handleKeyPress = (e) => {
    const pressedKey = e.key;
    if (pressedKey === "Enter" || pressedKey === "Tab") {
      handleRegister(email);
      e.target.value = "";
      setTyped(false);
    }
    else if (pressedKey === "Backspace") {
      backSpaceDelete();
    }
  }

  const handleRegister = (input) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newEmail = {
      id: id,
      email: input,
      validation: emailRegex.test(input) ? "valid-email" : "invalid-email"
    }
    setRegisteredEmails(prev => [...prev, newEmail])
    setId(prev => prev + 1);
  }

  const backSpaceDelete = () => {
    const emailInput = document.querySelector(".email-input input");

    if (emailInput.value.length === 0) {
      const allEmail = [...registeredEmails];
      allEmail.pop();
      setRegisteredEmails(allEmail);
    }
  }

  const removeEmail = (e) => {
    const emailId = e.target.parentElement.children[0].className;
    const allEmail = [...registeredEmails];
    const findEmailIndex = allEmail.findIndex(em => em.id === parseInt(emailId));
    allEmail.splice(findEmailIndex, 1);
    setRegisteredEmails(allEmail);
  }

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      getEmails(email)
        .then(data => {
          setSimilarEmail(data);
          setIsLoading(false);
        })
    }, 500)
  }, [email])

  return (
    <>
      <div className='main-container'>
        <ul className='email-container'>
          <RegisteredEmails registered={registeredEmails} handleRemoveEmail={removeEmail} />
          <li className='email-input'>
            <input type="email" placeholder='Enter recipients...'
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
          </li>
          {isLoading && <Loading />}
        </ul>
      </div>
      {typed &&
        <Similar
          similar={similarEmail}
          setRegisteredEmails={setRegisteredEmails}
          setTyped={setTyped}
          id={id}
          setId={setId}
        />}
    </>
  )
}

export default Email