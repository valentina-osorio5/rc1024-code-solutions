'use strict';
const $contactForm = document?.querySelector('#contact-form');
$contactForm.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const $formElements = $contactForm.elements;
  const obj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(obj);
}
