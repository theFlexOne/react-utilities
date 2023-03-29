import FormField from "./FormField";

const CheckBoxGroup = ({ children, label }) => {
  return (
    <div className="flex items-center gap-6">
      <p>{label || ""}</p>
      <FormField>{children}</FormField>
    </div>
  );
};

export default CheckBoxGroup;
