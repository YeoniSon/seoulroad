import Footer from "./Footer";
import Header from "./Header";
import sytles from "./App.module.css";

function App({ Children }) {
  return (
    <>
      <Header className={sytles.nav} />
      <div className={sytles.body}>{Children}</div>
      <Footer className={sytles.footer} />
    </>
  );
}

export default App;
