import { forwardRef, useState } from "react";
import { useForm } from "./Form";
import FormField from "./FormField";

const validateTextFieldType = (type) => {
  const validTypes = ["text", "email", "password", "tel"];
  return validTypes.includes(type);
};

const TextField = forwardRef(
  ({ type = "text", name, id, label, labelProps = {}, ...props }, ref) => {
    id ||= crypto.randomUUID();
    const [inputValue, setInputValue] = useState("");
    const [error, setError] = useState(null);

    const { updateFormDataRef, validateInput } = useForm(name, "");

    // could use TypeScript or PropTypes to validate the type prop
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
      <div>
        {error && <p>{error}</p>}
        <FormField>
          <label {...labelProps} htmlFor={id}>
            {label}
          </label>
          <input
            ref={ref}
            name={name || id}
            type={type}
            id={id}
            value={inputValue}
            onChange={handleChange}
            {...props}
          />
        </FormField>
      </div>
    );
  }
);

export default TextField;
