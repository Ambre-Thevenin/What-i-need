import React from 'react';
import styles from './about.module.css';

function ContactForm() {
  return (
    <div className={styles.body}>
      <h1>ABOUT</h1>
      <div className={styles.contactForm}>
        <h1>Contact us !</h1>
        <form>
          <label>
            Nom :
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
