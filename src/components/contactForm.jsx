import React from 'react';
import styles from './about.module.css';

function ContactForm() {
  return (
    <div className={styles.contactForm}>
      <h1>Contact us !</h1>
      <form>
        <label>
          <select>
            <option value="Question">Une question à poser</option>
            <option value="Proposition">De quoi nous améliorer</option>
            <option selected value="Dites-nous tout">
              Faites un choix
            </option>
          </select>
          Nom :
          <input type="text" />
          Message :
          <input type="text" />
        </label>
        <input type="submit" value="Envoyer" onClick="Thanks for ur message" />
      </form>
    </div>
  );
}
export default ContactForm;
