import emails from '../emails.js';

export const getEmails = (email: string) => {
  return new Promise((resolve) => {
    const findEmail = emails.filter(em => em.match(`${email}`));
    setTimeout(() => {
      resolve(findEmail);
    }, 1500);
  });
}