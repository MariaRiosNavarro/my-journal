import "./Tab.css";

export default function Tab({ name, count }) {
  return (
    <li className="tab-bar__tab">
      {name} <span className="tab-bar__tab-counter">{count}</span>
    </li>
  );
}
