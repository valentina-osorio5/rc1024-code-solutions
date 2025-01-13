import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(username, password);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username:
        <input
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        password:
        <input
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button>Submit</button>
    </form>
  );
}
