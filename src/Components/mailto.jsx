// import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
// import { init } from 'emailjs-com';
// init('user_IHdUPDaW9xTAJgs6i8GWb');

// export function ContactUs() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_p5ce523', 'template_jubo8iw', form.current, 'user_IHdUPDaW9xTAJgs6i8GWb').then(
//       (result) => {
//         console.log('results', result.text);
//       },
//       (error) => {
//         console.log('error', error.text);
//       },
//     );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label htmlFor="name">Name</label>
//       <input type="text" name="user_name" />
//       <label htmlFor="message">Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }
