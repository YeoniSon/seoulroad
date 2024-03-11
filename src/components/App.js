import Footer from "./Footer";
import Header from "./Header";
import sytles from "./App.module.css";

function App({ children }) {
  return (
    <>
      <Header className={sytles.nav} />
      <div className={sytles.body} style={{ overflow: "scroll" }}>
        {children}
      </div>
      <Footer className={sytles.footer} />
    </>
  );
}

export default App;
