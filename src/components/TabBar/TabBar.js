import Tab from "../Tab/Tab.js";
import "./TabBar.css";

export default function TabBar() {
  return (
    <ul className="tab-bar">
      <Tab name="All Entries" count={3} />
      <Tab name="Favorites" count={1} />
    </ul>
  );
}
