import { FunctionComponent } from "react";
import { ListItem } from "../models/ListItem";

/*
 * The ItemProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ItemProps interface
 */

interface ItemProps {
  item: ListItem;
}

const Item: FunctionComponent<ItemProps> = ({ item }) => {
  return <li key={item.id}>{item.name}</li>;
};

export default Item;
