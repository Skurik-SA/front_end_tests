import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import "./styles/button_styles.css"
import {createBrowserHistory} from "history";
import Footer from "./components/Footer/Footer";

const history = createBrowserHistory()

function App() {
    return (
        <BrowserRouter history={history}>
            <Navbar/>
            <div className="App">
                <AppRouter/>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
