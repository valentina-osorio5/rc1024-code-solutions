interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}
const $contactForm = document?.querySelector(
  '#contact-form'
) as HTMLFormElement;

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event: any): void {
  event.preventDefault();
  const $formElements = $contactForm.elements as FormElements;
  const obj = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log(obj);
}
