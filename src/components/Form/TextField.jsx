import { useState } from "react";
import { useForm } from "./Form";
import FormField from "./FormField";

const validateTextFieldType = (type) => {
  const validTypes = ["text", "email", "password", "tel"];
  return validTypes.includes(type);
};

const TextField = ({ type = "text", name, id, label, ...props }) => {
  id ||= crypto.randomUUID();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  const { updateFormDataRef, validateInput } = useForm(name);

  if (!validateTextFieldType(type)) {
    console.error("Invalid type prop.");
    return null;
  }

  const handleChange = (e) => {
    const input = e.target.value;
    const error = validateInput(input) || "";
    setError(error);
    setInputValue(input);
    updateFormDataRef(input);
  };

  return (
    <FormField>
      {error && <p>{error}</p>}
      <label htmlFor={id}>{label}</label>
      <input
        name={name || id}
        type={type}
        id={id}
        value={inputValue}
        onChange={handleChange}
        {...props}
      />
    </FormField>
  );
};

export default TextField;
