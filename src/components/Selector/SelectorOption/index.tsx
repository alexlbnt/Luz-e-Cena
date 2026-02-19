import React from 'react'

interface SelectorOption extends React.OptionHTMLAttributes<HTMLOptionElement> {
  label: string;
  value: string;
}  

const SelectorOption = ({ value, label, ...rest }: SelectorOption) => {
  return (
    <option value={value} {...rest}>
        {label}
    </option>
  );
};

export default SelectorOption