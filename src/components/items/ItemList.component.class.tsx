import { Component, ReactNode } from "react";

export class ItemListComponentClass extends Component<{
  items: any[];
}> {
  constructor(props: { items: any[] }) {
    super(props);
  }
  render(): ReactNode {
    return (
      <div>
        <h3>Items</h3>
        <ul>
          {this.props.items.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
