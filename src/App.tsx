import ItemListComponent from "./components/items/ItemList.component";
import { ItemListComponentClass } from "./components/items/ItemList.component.class";

function App() {
  const items: any[] = [
    {
      id: 1,
      name: "DADAN HIDAYAT",
    },
    {
      id: 2,
      name: "Agus Hidayat",
    },
  ];
  return (
    <>
      <ItemListComponent items={items} />
      <ItemListComponentClass items={items} />
    </>
  );
}

export default App;
