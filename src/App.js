import Header from "./component/Header";
import Home from "./component/Home";
import "./styles/app.scss"
import "./styles/header.scss"
import "./styles//home.scss"
import "./styles//service.scss"
import Service from "./component/Service";
function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Service/>
    </>
  );
}

export default App;
