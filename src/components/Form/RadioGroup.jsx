import FormField from "./FormField";

const RadioGroup = ({ children, label }) => {
  return (
    <div className="flex items-center gap-6">
      <p>{label || ""}</p>
      {children}
    </div>
  );
};

export default RadioGroup;
