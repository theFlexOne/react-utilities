import { useState } from "react";
import { useForm } from "./Form";
import FormField from "./FormField";

const validateRadioInputType = (type) => {
  const validTypes = ["text", "email", "password", "tel"];
  return validTypes.includes(type);
};

const RadioInput = forwardRef(
  ({ name, value, id, label, checked = false, ...props }, ref) => {
    id ||= crypto.randomUUID();
    const [isChecked, setIsChecked] = useState(checked);

    const { updateFormDataRef } = useForm(name);

    const handleChange = (e) => {
      const radioValue = e.target.value;
      setIsChecked((prev) => !prev);
      updateFormDataRef(radioValue);
    };

    return (
      <div className="flex gap-2">
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          name={name}
          type="radio"
          id={id}
          value={value}
          checked={isChecked}
          onChange={handleChange}
          {...props}
        />
      </div>
    );
  }
);

export default RadioInput;
