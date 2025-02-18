import React from "react";

const ItemListComponent: React.FC<{
  items: any[];
}> = (props) => {
  return (
    <div>
      <h2>Items</h2>
      <ul>
        {props.items.map((item, index) => {
          return <li key={index}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ItemListComponent;
