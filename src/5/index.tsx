import { FunctionComponent, useState, useEffect, ChangeEvent } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { ItemsList } from "./data";
import { ListItem } from "./models/ListItem";

const Task4: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState<ListItem[]>(ItemsList);
  const [filteredItems, setFilteredItems] = useState<ListItem[]>(ItemsList);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    setFilteredItems(
      items.filter((item) =>
        item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      )
    );
  };

  return (
    <div>
      <Input value={inputValue} label="Search:" handleChange={searchHandler} />
      <br />
      <List items={filteredItems} />
    </div>
  );
};

export default Task4;
