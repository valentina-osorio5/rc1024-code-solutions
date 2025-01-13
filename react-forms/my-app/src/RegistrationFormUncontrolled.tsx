import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('handle submit fired');
    console.log(event.currentTarget);
    const formData = new FormData(event.currentTarget);
    console.log('formData', formData);
    console.log(`Object from entries`, Object.fromEntries(formData));
    const { username, password } = Object.fromEntries(formData);

    console.log(username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username:
        <input name="username" />
      </label>
      <label>
        password:
        <input name="password" />
      </label>
      <button>Submit</button>
    </form>
  );
}
