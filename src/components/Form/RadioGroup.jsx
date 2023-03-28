import FormField from "./FormField";
import InputGroup from "./InputGroup";

const RadioGroup = ({ children, label }) => {
  return (
    <InputGroup className="flex items-center gap-6">
      <p>{label || ""}</p>
      <FormField className="">{children}</FormField>
    </InputGroup>
  );
};

export default RadioGroup;
