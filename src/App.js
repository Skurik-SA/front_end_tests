import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar/Navbar";
import "./styles/button_styles.css"
import {createBrowserHistory} from "history";
import Footer from "./components/Footer/Footer";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

const history = createBrowserHistory()

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <BrowserRouter history={history}>
                <Navbar/>
                <div className="App">
                    <AppRouter/>
                </div>
                <Footer/>
            </BrowserRouter>
        </DndProvider>
    );
}

export default App;
