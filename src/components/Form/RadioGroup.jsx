import FormField from "./FormField";

const RadioGroup = forwardRef(({ children, label }, ref) => {
  return (
    <div ref={ref} className="flex items-center gap-6">
      <p>{label || ""}</p>
      {children}
    </div>
  );
});

export default RadioGroup;
