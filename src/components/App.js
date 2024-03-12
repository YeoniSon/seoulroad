import Footer from "./Footer";
import Header from "./Header";
import sytles from "./App.module.css";
import Food from "./Food";

function App({ children }) {
  return (
    <>
      <Header className={sytles.nav} />
      <div className={sytles.body} style={{ overflow: "scroll" }}>
        {children}
        <Food />
      </div>
      <Footer className={sytles.footer} />
    </>
  );
}

export default App;
