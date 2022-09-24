import { FunctionComponent } from "react";
import { NIL } from "uuid";
import { ListItem } from "../models/ListItem";
// Components
import Item from "./Item";

/*
 * The ListProps interface defines the types for the components props.
 *
 * If you would like to proceed without defining types do the following:
 * const Input: FunctionComponent<any> = (props) => {
 *                                ^^^
 *
 * and remove the ListProps interface
 */

interface ListProps {
  items: ListItem[];
}

const List: FunctionComponent<ListProps> = ({ items }) => {
  return (
    <div>
      #List goes here#
      <ul>
        {items.length > 0 ? (
          items.map((item) => <Item key={item.id} item={item} />)
        ) : (
          <span>Not Found</span>
        )}
      </ul>
    </div>
  );
};

export default List;
