import { FunctionComponent, useState } from "react";

const Task2: FunctionComponent = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <label>Controlled Input: </label>
      <input value={value} onChange={handleInputChange} />
      <br />
      <br />
      <p>
        #Show Input value here#
        {value}
      </p>
    </div>
  );
};

export default Task2;
