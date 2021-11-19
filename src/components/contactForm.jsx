import React, { useRef } from 'react';

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init('user_IHdUPDaW9xTAJgs6i8GWb');

import styles from './about.module.css';

function ContactForm() {
  const form = useRef();
  const onPressMessage = () => {
    alert('Merci pour votre message !');
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p5ce523', 'template_jubo8iw', form.current, 'user_IHdUPDaW9xTAJgs6i8GWb').then();
  };

  return (
    <div className={styles.body}>
      <div className={styles.contactForm}>
        <h1>Contactez-nous !</h1>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <select>
            <option value="Question">Une question à poser</option>
            <option value="Proposition">De quoi nous améliorer</option>
            <option selected value="Dites-nous tout">
              Faites un choix
            </option>
          </select>
          <label htmlFor="name">Nom</label>
          <input type="text" name="user_name" />
          <label htmlFor="message">Message</label>
          <textarea className={styles.resizedInput} name="message" />
          <input type="submit" value="Envoyer" onClick={onPressMessage} />
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
