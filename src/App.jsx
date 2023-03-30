import { useRef, useState } from "react";
import CheckBoxGroup from "./components/Form/CheckBoxGroup";
import CheckBoxInput from "./components/Form/CheckBoxInput";
import { Form } from "./components/Form/Form";
import RadioGroup from "./components/Form/RadioGroup";
import RadioInput from "./components/Form/RadioInput";
import TextField from "./components/Form/TextField";
import Modal from "./components/Modal/Modal";

const validation = {
  firstName: (value) => {
    if (value.length < 3) {
      return "First name is too short";
    }
    return false;
  },
  lastName: (value) => {
    if (value.length < 3) {
      return "Last name is too short";
    }
    return false;
  },
  password: (value) => {
    if (
      !value.match(/\d+/g) ||
      !value.match(/[a-zA-Z]+/g) ||
      value.length < 8
    ) {
      return "Password must be at least 8 characters long and contain at least one letter and one number";
    }
    return false;
  },
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (formData = {}) => {
    console.log(formData);
  };

  const openModal = () => setIsOpen(true);

  const closeModal = () => setIsOpen(false);

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4 max-w-2xl mx-auto">
      <h2 className="text-2xl">React Components</h2>
      <Form validation={validation} onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          label="first name"
          placeholder="first name"
        />
        <TextField name="lastName" label="last name" placeholder="last name" />
        <TextField
          name="password"
          label="password"
          placeholder="password"
          type="password"
        />
        <RadioGroup label="Pick one:">
          <RadioInput
            label="option 1"
            value="opt1"
            name="radio"
            checked={true}
          />
          <RadioInput label="option 2" value="opt2" name="radio" />
        </RadioGroup>
        <CheckBoxGroup>
          <CheckBoxInput label="option 1" name="checkbox1" />
          <CheckBoxInput label="option 2" name="checkbox2" />
        </CheckBoxGroup>
        <button className="px-4 py-2 mt-2 rounded bg-sky-600 text-xl border active:scale-95 hover:brightness-105 active:brightness-90 shadow-sm">
          Submit
        </button>
      </Form>
      <button
        onClick={openModal}
        className="px-4 py-2 rounded bg-sky-600 text-xl border active:scale-95 hover:brightness-105 active:brightness-90 shadow-sm"
      >
        Open Modal
      </button>
      {isOpen && (
        <Modal>
          <h2 className="text-2xl">Modal</h2>
          <button
            onClick={closeModal}
            className="px-4 py-2 mt-2 rounded bg-sky-600 text-xl border active:scale-95 hover:brightness-105 active:brightness-90 shadow-sm"
          >
            Close Modal
          </button>
        </Modal>
      )}
    </div>
  );
}

export default App;
