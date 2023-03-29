import { useState } from "react";
import { useForm } from "./Form";

const CheckBoxInput = ({
  name,
  value,
  id,
  label,
  checked = false,
  ...props
}) => {
  id ||= crypto.randomUUID();
  const [isChecked, setIsChecked] = useState(checked);

  const { updateFormDataRef } = useForm(name, false);

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    updateFormDataRef((prev) => !prev);
  };

  console.log("isChecked", isChecked);

  return (
    <div className="flex gap-2">
      {label ? <label htmlFor={id}>{label}</label> : null}
      <input
        name={name}
        type="checkbox"
        id={id}
        value={true}
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};

export default CheckBoxInput;
