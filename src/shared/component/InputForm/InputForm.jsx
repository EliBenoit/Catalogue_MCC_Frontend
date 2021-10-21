// package
import React from "react";

// style
import "rsuite/dist/rsuite.min.css";


const InputForm = ({form, type, name, placeholder, registerOptions, options}) => {

  const { register, formState: { errors } } = form;

  function hasError(typeError) {
    if (typeError !== null && typeError !== undefined) {
      return errors && errors[name] && errors[name].type;
    }
    return errors && errors[name];
  }
        
if(type==="file"){
  return (
    <>
    <input
        id={name}
        name={name}
        type={type}
        accept="image/png, image/jpeg"
        placeholder={placeholder}
        hasError={hasError()}
        {...register(name, registerOptions)}
        className="file"
        />
        { hasError() && <div>{ errors[name].message }</div> }
  </>
  )
}

if(type==="select"){
  return (
    <>
    <select
        id={name}
        name={name}
        placeholder={placeholder}
        hasError={hasError()}
        {...register(name, registerOptions)}
        >
          {options.map((option) => (<option value="option">{option}</option>))}
        </select>
        { hasError() && <div>{ errors[name].message }</div> }
  </>
  )
}

if(type==="textarea"){
  return (
    <>
    <textarea
        id={name}
        name={name}
        type={type}
        accept="image/png, image/jpeg"
        placeholder={placeholder}
        hasError={hasError()}
        {...register(name, registerOptions)}
        >
          {placeholder}
        </textarea>
        { hasError() && <div>{ errors[name].message }</div> }
  </>
  )
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