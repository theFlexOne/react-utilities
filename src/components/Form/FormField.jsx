import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const FormField = forwardRef(({ children, onChange, className }, ref) => {
  const classes = twMerge("p-2 flex gap-8", className);
  return (
    <div ref={ref} onChange={onChange} className={classes}>
      {children}
    </div>
  );
});

export default FormField;
