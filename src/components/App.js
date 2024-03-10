import Footer from "./Footer";
import Header from "./Header";
import sytles from "./App.module.css";

function App() {
  return (
    <>
      <Header className={sytles.nav} />
      <div className={sytles.body}></div>
      <Footer className={sytles.footer} />
    </>
  );
}

export default App;
