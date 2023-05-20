export default function Tab({ tabname, tabnumber }) {
  return (
    <>
      <li className="tabtitle">{tabname}</li>
      <li className="tabcounter">
        <span className="tabcounter__span">{tabnumber}</span>
      </li>
    </>
  );
}
