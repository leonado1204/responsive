import PropTypes from "prop-types";
import { Input } from "@chakra-ui/react";

function FormInput({fontSize, ms, borderRadius, type, placeholder, mb, size, name, onChange}) {
    return <Input fontSize={fontSize} ms={ms} borderRadius={borderRadius} type={type} placeholder={placeholder} mb={mb} size={size} name={name} onChange={onChange}/>;
  }
  
  FormInput.defaultProps = {
    fontSize: 'sm',
    ms: '4px',
    borderRadius: '12px',
    type: 'text',
    placeholder: '',
    mb: '10px',
    size: 'lg',
    onChange: () => {} 
  };
  FormInput.propTypes = {
    name: PropTypes.string.isRequired,
  }

  export default FormInput;