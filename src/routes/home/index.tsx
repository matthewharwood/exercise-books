import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent<any> = () => {
    return (
        <div class={style.home}>
            <h1>Home</h1>
            <p>This is the Home component.</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
        </div>
    );
};

export default Home;
