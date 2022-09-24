import { FunctionComponent, useState, useEffect, ChangeEvent } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { ItemsList } from "./data";
const Task4: FunctionComponent = () => {
  const [searchValue, setSearchValue] = useState({
    value: "",
    items: ItemsList,
  });
  const { value, items } = searchValue;

  const getValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue({...searchValue, value: e.target.value})
  }

  useEffect( ()=> {
    const filteredList = () => {
      if (value !== "") {
        const filtered = items.filter(
          (item)=> item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
        setSearchValue({...searchValue, items: filtered});
      } else {
        setSearchValue({...searchValue, items: ItemsList});
      }
    }
    filteredList();
  },[value, items, searchValue])

  return (
    <div>
      <Input value={value} label="Search:" handleChange={getValue} />
      <br />
      <List items={items} />
    </div>
  );
};

export default Task4;
