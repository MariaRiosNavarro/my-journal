import "./Entry.css";

export default function Entry({ title, date, text, icon }) {
  return (
    <li className="entries-section__list-item">
      <img
        className="entries-section__list-item__journal-icon"
        src={icon}
        alt="Icon"
      />
      <h3 className="entries-section__list-item__journal-title">{title}</h3>
      <p className="entries-section__list-item__journal-date">{date}</p>
      <p className="entries-section__list-item__journal-text">{text}</p>
    </li>
  );
}
