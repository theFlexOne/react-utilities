import { createContext, useContext, useRef } from "react";
import { twMerge } from "tailwind-merge";

const styles =
  "shadow-md rounded-md p-4 flex flex-col gap-4 max-w-xl items-center";

const FormContext = createContext();

export const Form = ({
  children,
  onSubmit,
  validation,
  className = "",
  ...props
}) => {
  const formDataRef = useRef({});
  const classes = twMerge(styles, className);

  const registerInput = (name) => {
    return {
      updateFormDataRef: (value) => {
        formDataRef.current[name] = value;
      },
      validateInput: (value) => {
        const error = validation[name](value);
        return error;
      },
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formDataRef.current);
  };

  return (
    <FormContext.Provider value={registerInput}>
      <form onSubmit={handleSubmit} className={classes} {...props}>
        {children}
        <button type="submit">Submit</button>
      </form>
    </FormContext.Provider>
  );
};

export const useForm = (name) => {
  const registerInput = useContext(FormContext);
  return registerInput(name);
};
