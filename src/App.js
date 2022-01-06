import { ExternalScripts } from "./components/ExternalScripts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import './styles/globals.scss';

function App() {
  return (
    <>
      <Header/>
      <HomePage/>
      <Footer/>
      <ExternalScripts/>
    </>
  );
}

export default App;
