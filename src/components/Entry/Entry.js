export default function Entry({ title, date, text, icon }) {
  return (
    <li>
      <img className="journal-icon" src={icon} alt="Icon" />
      <h3 className="journal-title">{title}</h3>
      <p className="journal-date">{date}</p>
      <p className="journal-text">{text}</p>
    </li>
  );
}
