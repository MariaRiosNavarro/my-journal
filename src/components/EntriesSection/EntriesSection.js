import TabBar from "../TabBar/TabBar.js";
import Tab from "../Tab/Tab.js";
import EntryList from "../EntryList/EntryList.js";
import Entry from "../Entry/Entry.js";
import starfilled from "../../star-filled.svg";
import star from "../../star.svg";

export default function EntriesSection(tabname, tabnumber) {
  return (
    <>
      <TabBar>
        <Tab tabname={"All Entries"} tabnumber={3} />
        <Tab tabname={"Favorites"} tabnumber={1} />
      </TabBar>
      <EntryList>
        <Entry
          title="Thats life in the city"
          date="27.02.2028"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
          icon={starfilled}
        />
        <Entry
          title="Thats life in the city"
          date="26.02.2028"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
          icon={star}
        />
        <Entry
          title="Thats life in the city"
          date="25.02.2028"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
          icon={star}
        />
      </EntryList>
    </>
  );
}
