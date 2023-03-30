import { createContext, forwardRef, useContext, useRef } from "react";
import { twMerge } from "tailwind-merge";

const styles =
  "rounded-md p-4 flex flex-col gap-4 max-w-xl items-center bg-[rgba(200,200,200,0.1)]";

const FormContext = createContext();

export const Form = forwardRef(
  ({ children, onSubmit, validation, className = "", ...props }, ref) => {
    const formDataRef = useRef({});
    const classes = twMerge(styles, className);

    const registerInput = (name, initialState) => {
      formDataRef.current[name] = initialState;
      return {
        updateFormDataRef: (callback) => {
          if (typeof callback === "function") {
            return (formDataRef.current[name] = callback(
              formDataRef.current[name]
            ));
          }
          return (formDataRef.current[name] = callback);
        },
        validateInput: (value) => validation[name](value),
      };
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formDataRef.current);
    };

    return (
      <FormContext.Provider value={registerInput}>
        <form ref={ref} onSubmit={handleSubmit} className={classes} {...props}>
          {children}
        </form>
      </FormContext.Provider>
    );
  }
);

export const useForm = (name, initialState) => {
  return useContext(FormContext)(name, initialState);
};
