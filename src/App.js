import "./assets/stylesheets/App.scss";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import {MainContext} from "./Context";
import {useState} from "react";

function App() {

    const [word, setWord] = useState("");
    const [means, setMeans] = useState(null);
    const [audio, setAudio] = useState(null);
    const [meanWord, setMeanWord] = useState(null);

    const data = {
        word, setWord,
        means, setMeans,
        audio, setAudio,
        meanWord, setMeanWord
    };

    return (
        <MainContext.Provider value={data}>
            <div className="container-fluid p-0">
                <Header/>
                <Dictionary/>
            </div>
        </MainContext.Provider>
    );
}

export default App;
