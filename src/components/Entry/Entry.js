import "./Entry.css";

export default function Entry({ title, date, text, icon }) {
  return (
    <>
      <li className="entries-section__list-item">
        <h3 className="entries-section__list-item__journal-date">{date}</h3>
        <img
          className="entries-section__list-item__journal-icon"
          src={icon}
          alt="Icon"
        />
        <h4 className="entries-section__list-item__journal-title">{title}</h4>
        <p className="entries-section__list-item__journal-text">{text}</p>
      </li>
      <hr className="entries-section__list-separation-line"></hr>
    </>
  );
}
