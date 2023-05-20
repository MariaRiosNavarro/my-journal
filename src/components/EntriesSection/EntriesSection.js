import TabBar from "../TabBar/TabBar.js";
import EntryList from "../EntryList/EntryList.js";
import Tab from "../Tab/Tab.js";

export default function EntriesSection(tabname, tabnumber) {
  return (
    <>
      <TabBar>
        <Tab tabname={"All Entries"} tabnumber={3} />
        <Tab tabname={"Favorites"} tabnumber={1} />
      </TabBar>
      <EntryList />
    </>
  );
}
