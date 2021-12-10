import axios from 'axios';
import Swal from 'sweetalert2'
import "../../assets/stylesheets/Input.scss";
import {MainContext, useContext} from "../../Context";

function Input() {

    const {word, setWord, setMeans, setAudio, setMeanWord} = useContext(MainContext);

    const turkishChars = ['ç', 'ğ', 'ı', 'ö', 'ş', 'ü', 'â', 'î', 'û'];

    const addTurkishChar = (char) => {
        setWord(word + char);
        document.getElementById("word").value += char;
    }

    const requestApi = async () => {
        try {
            const searchWord = await axios.get('https://sozluk.gov.tr/gts?ara=' + word);
            const searchAudio = await axios.get('https://sozluk.gov.tr/yazim?ara=' + word);

            if (searchWord.data.error) {
                console.log(searchWord.data.error);
                setMeans(null);
                await Swal.fire({
                    title: 'Hata!',
                    text: searchWord.data.error,
                    icon: 'error',
                    confirmButtonText: 'Tamam'
                });
            } else {
                setMeans(searchWord.data[0].anlamlarListe);
            }

            if (searchAudio.data.length < 1 || searchAudio.data.error) {
                setAudio(null);
            } else {
                setAudio(searchAudio.data[0].seskod);
            }

        } catch (error) {
            console.error(error);
        }
        setMeanWord(word);
    }

    return (
        <>
            <div className="input-group px-5">
                <input className="form-control" type="text" id="word" placeholder="Türkçe Sözlük'te Ara"
                       onChange={(e) => {
                           setWord((e.target.value).toLowerCase());
                       }}/>
                <button className="btn" onClick={() => requestApi()}>
                    <i className="fas fa-search"/>
                </button>
            </div>

            <div className="turkish-char-buttons px-5">
                {
                    turkishChars.map((char, key) =>
                        <button className="btn mt-3" key={key} onClick={() => addTurkishChar(char)}>{char}</button>
                    )
                }
            </div>
        </>
    );
}

export default Input;
