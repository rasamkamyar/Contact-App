import Header from "./Header/Header";
import Form from "./Form/Form";
import Footer from "./Footer/Footer";
import "./app.css";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <main className="mainContent">
        <Form />
      </main>
      <Footer />
    </div>
  );
};

export default App;
