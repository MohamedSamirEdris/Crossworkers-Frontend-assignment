import { FunctionComponent, useState, ChangeEvent } from "react";

interface Item {
  id: number;
  name: string;
}

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
  const [items, setItems] = useState<Item[]>(List);
  const [filteredItems, setFilteredItems] = useState<Item[]>(List);


  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setFilteredItems(items.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
  };

  // const filteredList = () => items.filter(item => item.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase()));

  return (
    <div>
      <label>Search Input: </label>
      <input value={inputValue} onChange={searchHandler} />
      <br />
      <br />
      #List goes here#
      <ul>
        {!!filteredItems.length ? (
          filteredItems.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <span>No Items</span>
        )}
      </ul>
    </div>
  );
};

export default Task3;
