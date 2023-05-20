import "./EntryForm.css";

export default function EntryForm() {
  return (
    <form className="entry-form">
      <h2 className="entry-form__heading">NEW ENTRY</h2>
      <label htmlFor="motto">Motto</label>
      <input
        className="entry-form__input"
        rows={2}
        type="text"
        name="motto"
        id="motto"
        aria-describedby="place to write the motto"
      ></input>
      <label htmlFor="notes">Notes</label>
      <textarea
        className="entry-form__textarea"
        rows={5}
        type="text"
        name="notes"
        id="notes"
        aria-describedby="place to write the journal notes"
      ></textarea>
      <button type="submit" className="entry-form__button">
        Create
      </button>
    </form>
  );
}
