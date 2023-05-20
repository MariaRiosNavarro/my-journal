export default function Tab({ tabname, tabnumber }) {
  return (
    <>
      <li className="tabname">{tabname}</li>
      <li className="tabnumber">
        <span className="tabnumber__span">{tabnumber}</span>
      </li>
    </>
  );
}
