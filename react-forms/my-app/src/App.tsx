import './App.css';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';

function App() {
  return (
    <>
      <RegistrationFormControlled />
      <RegistrationFormUncontrolled />
    </>
  );
}

export default App;
