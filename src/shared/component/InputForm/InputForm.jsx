// package
import React from "react";

// style
import "rsuite/dist/rsuite.min.css";


const InputForm = ({form, type, name, placeholder, registerOptions}) => {

  const { register, formState: { errors } } = form;

  function hasError(typeError) {
    if (typeError !== null && typeError !== undefined) {
      return errors && errors[name] && errors[name].type;
    }
    return errors && errors[name];
  }
        

return (
  <>
    <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        hasError={hasError()}
        {...register(name, registerOptions)}
        />
        { hasError() && <div>{ errors[name].message }</div> }
  </>
)
}

export default InputForm;