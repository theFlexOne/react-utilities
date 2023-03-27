import { createContext, useContext } from "react";
const FormContext = createContext();

const Form = ({ children, ...props }) => {
  // action, id, onSubmit
  let { id, className, ...props } = props;
  console.log(props);
  return (
    <FormContext.Provider>
      <form id={id} {...props}>
        {children}
      </form>
    </FormContext.Provider>
  );
};

export default Form;
