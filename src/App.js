import Header from "./components/Header/Header.js";
import EntryForm from "./components/EntryForm/EntryForm.js";
import EntriesSection from "./components/EntriesSection/EntriesSection.js";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <EntryForm />
        <EntriesSection />
      </main>
      {/* <Footer />   */}
    </>
  );
}

export default App;

//
