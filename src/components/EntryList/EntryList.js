import starfilled from "../../star-filled.svg";
import star from "../../star.svg";
import Entry from "../Entry/Entry.js";

export default function EntryList() {
  return (
    <ul>
      <Entry
        title={"Thats life in the city"}
        date={"27.02.2028"}
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
        }
        icon={starfilled}
      />
      <Entry
        title={"Thats life in the city"}
        date={"26.02.2028"}
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
        }
        icon={star}
      />
      <Entry
        title={"Thats life in the city"}
        date={"25.02.2028"}
        text={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum"
        }
        icon={star}
      />
    </ul>
  );
}
