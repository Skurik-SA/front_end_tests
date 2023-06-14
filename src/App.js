import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import "./styles/button_styles.css"

function App() {

      return (
        <BrowserRouter>
            <div className="AppBack">
                <Navbar/>
                <div className="App">
                    <AppRouter/>
                </div>
            </div>
        </BrowserRouter>
      );
}

export default App;
