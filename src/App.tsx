import "./App.css";
import ItemListComponent from "./components/items/ItemList.component";

function App() {
  const items = [
    {
      id: 1,
      name: "DADAN HIDAYAT",
    },
  ];
  return (
    <>
      <ItemListComponent items={items} />
    </>
  );
}

export default App;
