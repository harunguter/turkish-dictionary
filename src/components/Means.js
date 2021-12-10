import "../assets/stylesheets/Means.scss";
import {MainContext, useContext} from "../Context";

function Means() {

    const {audio, word, means, meanWord} = useContext(MainContext);

    const playAudio = () => {
        const audioSource = document.getElementById("pronunciation");
        audioSource.play();
        console.log(means);
    }
    return (
        <>
            <div className="mean-word">
                <h3 className="word">{meanWord}</h3>
                {
                    audio != null ?
                        <>
                            <button className="btn" onClick={() => playAudio()}>
                                <i className="fas fa-volume-up"/>
                            </button>
                            <audio src={"https://sozluk.gov.tr/ses/" + audio + ".wav"} id="pronunciation"/>
                        </>
                        :
                        <></>

                }
            </div>
            <ul className="mean-list">
                {
                    means.map((mean, key) =>
                        <li className="py-3" key={key}>{mean.anlam}</li>
                    )
                }
            </ul>
        </>
    );
}

export default Means;
