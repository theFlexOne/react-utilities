import { twMerge } from "tailwind-merge";

const FormField = ({ children, onChange, className }) => {
  const classes = twMerge("p-2 flex gap-4", className);
  return (
    <div onChange={onChange} className={classes}>
      {children}
    </div>
  );
};

export default FormField;
