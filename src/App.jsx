import { Form } from "./components/Form/Form";
import RadioGroup from "./components/Form/RadioGroup";
import RadioInput from "./components/Form/RadioInput";
import TextField from "./components/Form/TextField";

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
    const regex = new RegExp("^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$");
    if (!value.match(regex)) {
      return "Password must be at least 8 characters long and contain at least one letter and one number";
    }
    return false;
  },
};

function App() {
  const handleSubmit = (formData = {}) => {
    console.log(formData);
  };

  return (
    <div className="h-screen grid items-center text-center max-w-2xl mx-auto">
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
      </Form>
    </div>
  );
}

export default App;
