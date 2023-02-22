import './scss/App.scss';
import MainPage from "./shared/page/mainPage/mainPage";
import Header from "./shared/components/header";
import Footer from "./shared/components/footer";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Header />
            <MainPage />
            <Footer />
        </div>
    </div>
  );
}

export default App;
