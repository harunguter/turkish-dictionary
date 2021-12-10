import "../assets/stylesheets/Dictionary.scss";
import Input from "./items/Input";
import Means from "./Means";
import {MainContext, useContext} from "../Context";

function Dictionary() {

    const {means} = useContext(MainContext);

    return (
        <section className="container p-3">
            <div className="dictionary-wrapper py-5 mb-3">
                <Input/>
            </div>
            {
                means !== null ?
                    <div className="means-wrapper px-5 py-3">
                        <Means/>
                    </div> :
                    <></>
            }
        </section>
    );
}

export default Dictionary;
