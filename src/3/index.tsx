import { FunctionComponent, useState, ChangeEvent } from "react";
import Item from "../5/components/Item";

type items = {
  id: number;
  name: string;
};

const List = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
  { id: 6, name: "Item 6" },
  { id: 7, name: "Item 7" },
];

const Task3: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState(List);

  const filteredList = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value !== "") {
      const filtered = items.filter((item) =>
        item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      );
      setItems(filtered);
    } else {
      setItems(List);
    }


    setInputValue(value);
  };

  return (
    <div>
      <label>Search Input: </label>
      <input  value={inputValue}  onChange={filteredList}/>
      <br />
      <br />
      #List goes here#
      <ul>
        {items && items.length > 0 ? (
          items.map((item) => 
            (<li key={item.id}>{item.name}</li>)
          )
        ) : <span>Not Found</span>}
      </ul>
    </div>
  );
};

export default Task3;
