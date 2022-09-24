import { FunctionComponent, ChangeEvent } from "react";

/*
 * The InputProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the InputProps interface
 */

interface InputProps {
  value: string,
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void,
  label: string,
}

const Input: FunctionComponent<InputProps> = ({value, label, handleChange}) => {
  return (
    <div>#Input goes here#
      <label htmlFor="searchInput">{label}</label>
      <input value={value} onChange={(e) => handleChange(e)} id="searchInput"/>
    </div>
  );
};

export default Input;
