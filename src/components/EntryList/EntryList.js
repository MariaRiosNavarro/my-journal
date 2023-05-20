import "./EntryList.css";

export default function EntryList({ children }) {
  return <ul className="entries-section__list">{children}</ul>;
}
