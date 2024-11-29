const $name = document?.querySelector('#user-name');
const $email = document?.querySelector('#user-email');
const $message = document?.querySelector('#user-message');

$email?.addEventListener('focus', handleFocus);
$email?.addEventListener('blur', handleBlur);
$email?.addEventListener('input', handleInput);

$message?.addEventListener('focus', handleFocus);
$message?.addEventListener('blur', handleBlur);
$message?.addEventListener('input', handleInput);

$name?.addEventListener('focus', handleFocus);
$name?.addEventListener('blur', handleBlur);
$name?.addEventListener('input', handleInput);

function handleFocus(event: any): void {
  console.log('focus event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
}

function handleBlur(event: any): void {
  console.log('blur event fired');
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name);
}

function handleInput(event: any): void {
  const eventTarget = event.target as HTMLInputElement | HTMLTextAreaElement;
  console.log(eventTarget.name, eventTarget.value);
}
